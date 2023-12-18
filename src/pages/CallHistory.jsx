import React,{ useRef } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { IoCallSharp } from "react-icons/io5";
import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';
import { IoIosAddCircle } from "react-icons/io";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const CallHistory = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete'];
  const editing = { allowDeleting: true, allowEditing: true };
  const [open, setOpen] = React.useState(false);
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    // Trigger file input click when the button is clicked
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    // Handle file selection here
    const selectedFile = event.target.files[0];
    console.log('Selected file:', selectedFile);
    // You can perform further operations with the selected file
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl relative">
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <Header category="Details" title="Call History" />
      <button
                type="button"
                style={{ color: '#7ED31D', backgroundColor: '#D3F6AB' }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl absolute top-12 right-16"
              >
                <IoCallSharp />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 300, borderRadius: '10px', height: 300 }} className="relative">
        <div>
        <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
          <button
                type="button"
                style={{ color: '#03C9D7', backgroundColor: '#E5FAFB' }}
                className="text-2xl opacity-0.9 p-4 hover:drop-shadow-xl absolute top-12 right-16 rounded-lg"
              >
                Live Analysis
      </button>
      </div>

      <div>
          <button
                type="button"
                style={{ color: '#03C9D7', backgroundColor: '#E5FAFB' }}
                className="text-2xl opacity-0.9 p-4 hover:drop-shadow-xl absolute top-44 right-16 rounded-lg"
                onClick={handleButtonClick}
              >
                Upload File
      </button>
      </div>
         
        </Box>
      </Modal>
      <button
                type="button"
                style={{ color: '#03C9D7', backgroundColor: '#E5FAFB' }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl absolute top-12 right-44"
                onClick={handleOpen}
              >
                <IoIosAddCircle />
              </button>
              </div>
      <GridComponent
        dataSource={customersData}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default CallHistory;
