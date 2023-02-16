import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useContext, useState } from 'react';
import AppContext from './AppContext';
import Form from './Form';

const BookMatch = () => {
  const { isOpen, setIsOpen } = useContext(AppContext);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(true)} //
        className="relative z-50 "
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div
          className="fixed inset-0 bg-blue-200 dark:bg-neutral-900 "
          aria-hidden="true"
        />
        {/* Full-screen scrollable container */}
        <div className="fixed inset-0 overflow-y-auto  ">
          {/* Container to center the panel */}
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {/* The actual dialog panel  */}
              <Dialog.Panel className=" mx-auto transform overflow-hidden rounded-2xl bg-blue-50 p-6 text-left align-middle shadow-xl transition-all dark:bg-gray-900 ">
                <Form />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default BookMatch;
