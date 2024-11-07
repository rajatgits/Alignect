"use client";

import { ResponsiveModal } from "@/components/responsive-modal";
import { useCreateProjectModal } from "../hooks/use-create-project-modal";
import { CreateProjecrForm } from "./create-project-form";

export const CreateProjectModal = () => {
  const { isOpen, setIsOpen, close } = useCreateProjectModal();

  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateProjecrForm onCancel={close} />
    </ResponsiveModal>
  );
};
