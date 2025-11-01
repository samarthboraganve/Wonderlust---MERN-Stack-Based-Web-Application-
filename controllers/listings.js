const Listing=require("../models/listing");

module.exports.index=async(req,res)=>{
    const allListings=await Listings.find({});
    res.render("listings/index.js",{allListings});
};


module.exports.renderNewForm=(req,res)=>{
        res.render("listings/new.ejs");
};


module.exports.showListing=async(req,res)=>{
        let{id}=req.params;
       const listing=await Listings.findById(id)
       .populate({
        path:"reviews",
        populate:{
        path:"author",
        },
    })
        .populate("owner");
       if(!listing){
        req.flash("error","Listing you requested for does not exist!");
        req.redirect("/listings");
       }
       console.log(listing);
       res.render("listings/show.ejs",{listing});
    };

        module.exports.createListing= async(req,res,next)=>{
        let url=req.file.path;
        let filename=req.file.filename;

        // newListing.owner={url,filename};
        const newListing=new Listing(req.body.listing);
        newListing.owner=req.user._id;
        await newListing.save();
        req.flash("success","New Listing Created!");
        res.redirect("/listings");
    };

module.exports.renderEditForm=async (req,res,next)=>{
            let{id}=req.params;
            const listing=await Listings.findById(id);
            if(!listing){
                req.flash("error","Listing you requested for does not exist!");
                res.redirect("/listings");
        }

        let originalImageUrl=listing.image.url;
       originalImageUr = originalImageUrl.replace("/upload","/upload/w_250");
        res.render("listings/edit.ejs",{listings});
    };


module.exports.updateListing=async(req,res,next)=>{
                let {id}=req.params;
                let listing =await Listing.findByIdAndUpdate(id,{...req.body.listings});

                if(typeof req.file!=="undefined"){
                let url=req.file.path;
                let filename=req.file.filename;
                listing.image={url,filename};
                await listing.save();
                }

                res.flash("success","Listing Updated!");
                res. redirect("/listings/${id}");
            };

module.exports.deletedListing=async(req,res,next)=>{
        let{id}=req.params;
        let deletedListing= await Listing.findByIdAndDelete(id);
        console.log(deletedListing);
        res.redirect("/listings");

    };
