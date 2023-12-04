"use server";

import { db } from "@/lib/db";

import { revalidatePath } from "next/cache";

export async function deletBoard(id: string) {
  await db.board.delete({
    where: {
      id,
    },
  });

  revalidatePath("/organization/org_2Yo5XTOtwHxJDrmuIrEdJVX1o2h");
}
