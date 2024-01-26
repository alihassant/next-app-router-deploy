import { revalidateTag } from "next/cache";

export async function POST(request) {
  const tag = request.nextUrl.searchParams.get("tag");
  const secret = request.nextUrl.searchParams.get("secret");

  //   console.log(process.env.REVALIDATION_TOKEN);
  //   console.log(secret);

  if (!tag) {
    return Response.json({ message: "Missing tag param" }, { status: 400 });
  }

  if (secret !== process.env.REVALIDATION_TOKEN) {
    return Response.json({ message: "Invalid token!!!" }, { status: 401 });
  }

  revalidateTag(tag);

  return Response.json({ data: "Hello revalidate endpoint!" });
}
