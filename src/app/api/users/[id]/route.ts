import { NextRequest, NextResponse } from "next/server";

export const GET = async (request:NextRequest,
    {
        params

    }:{params: Promise<{id:string}>}

) => {
    const {id} =  await params
    return NextResponse.json({message:`${id}`},{status:200});
};