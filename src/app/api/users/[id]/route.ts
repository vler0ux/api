import { NextRequest, NextResponse } from "next/server";

export const GET = async (request:NextRequest,
    {
        params:{id}
        
    }:{params:{id:string}}

) => {
    return NextResponse.json({message:`${id}`},{status:200});
};