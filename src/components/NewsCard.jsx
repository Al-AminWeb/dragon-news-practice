import React from 'react';
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from 'react-icons/fa';
import {Link} from "react-router";

const NewsCard = ({ news }) => {
    const {
        id,
        title,
        author,
        thumbnail_url,
        details,
        rating,
        total_view
    } = news;

    const formattedDate = new Date(author.published_date).toLocaleDateString("en-CA");

    return (
        <div className="card bg-base-100 border shadow-sm">
            {/* Top section - Author and Icons */}
            <div className="flex justify-between items-center p-4">
                <div className="flex items-center gap-3">
                    <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                        <p className="font-semibold text-sm">{author.name}</p>
                        <p className="text-xs text-gray-400">{formattedDate}</p>
                    </div>
                </div>
                <div className="flex gap-2 text-lg text-gray-500">
                    <FaRegBookmark className="cursor-pointer" />
                    <FaShareAlt className="cursor-pointer" />
                </div>
            </div>

            {/* Title */}
            <div className="px-4 font-bold text-lg">
                {title}
            </div>

            {/* Image */}
            <figure className="px-4 pt-4">
                <img src={thumbnail_url} alt={title} className="rounded-lg w-full object-cover h-56" />
            </figure>

            {/* Details */}
            <div className="px-4 py-3 text-sm text-gray-600">
                {details.length > 250 ? (
                    <p>{details.slice(0, 250)}... <Link to={`/news-details/${id}`} className="text-orange-500 font-semibold cursor-pointer">Read More</Link></p>
                ) : (
                    <p>{details}</p>
                )}
            </div>

            {/* Footer - Rating and Views */}
            <div className="flex justify-between items-center px-4 pb-4 mt-auto">
                <div className="flex items-center gap-1 text-orange-400">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < Math.round(rating.number) ? 'text-orange-400' : 'text-gray-300'} />
                    ))}
                    <span className="text-black text-sm ml-1">{rating.number}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
