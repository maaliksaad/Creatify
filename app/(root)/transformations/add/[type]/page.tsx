import Header from "@/components/shared/header";
import TransformationForm from "@/components/shared/transformationForm";
import { transformationTypes } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import { SearchParamProps, TransformationTypeKey } from "@/types/index";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const AddTranformationTypePage = async ({
  params: { type },
}: SearchParamProps) => {
  const { userId } = auth();
  const tranformations = transformationTypes[type];

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);
  return (
    <>
      <Header title={tranformations.title} subTitle={tranformations.subTitle} />
      <TransformationForm
        action="Add"
        userId={user._Id}
        type={tranformations.type as TransformationTypeKey}
        creditBalance={user.creditBalance}
      />
    </>
  );
};

export default AddTranformationTypePage;
