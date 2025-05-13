import React, { JSX, useState } from 'react';


type FormCounts = {
  input: number;
  textarea: number;
  checkbox: number;
};

const FormPage: React.FC = () => {
  const [formCounts, setFormCounts] = useState<FormCounts>({
    input: 0,
    textarea: 0,
    checkbox: 0
  });

  const mainStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f9f9f9',
  };
  
  const generatedFormStyle: React.CSSProperties = {

    backgroundColor: '#f1f1f1',
    border: '1px solid #ddd',
    maxWidth:'400px',
    width: '100%',
    display: 'flex',             
    flexDirection: 'column',    
    gap: '10px',                 
  };
  

  
  const [buildFields, setBuildFields] = useState<JSX.Element[]>([]);

  return (
    <div className='main' style={mainStyle}>
      <form >
        <label htmlFor='checkbox_count'>Checkbox:</label>
        <input 
          id='checkbox_count' 
          name='checkbox'
          type='number' 
          min={0}
          onChange={(e) =>
            setFormCounts({ ...formCounts, checkbox: Number(e.target.value) })
          }
        />
  
        <label htmlFor='textarea_count'>Textarea:</label>
        <input 
          id='textarea_count' 
          name='textarea' 
          type='number' 
          min={0}
          onChange={(e) =>
            setFormCounts({ ...formCounts, textarea: Number(e.target.value) })
          }
        />
  
        <label htmlFor='input_count'>Input:</label>
        <input 
          id='input_count'
          name='input'
          type='number'
          min={0}
          onChange={(e) =>
            setFormCounts({ ...formCounts, input: Number(e.target.value) })
          }
        />
      </form>

      <button
  type="button"
  style={{
    padding: '10px 20px',
    marginTop: '20px',
    cursor: 'pointer',
  }}
  onClick={() => {
    const fields: JSX.Element[] = [];

    for (let i = 0; i < formCounts.input; i++) {
      fields.push(<input key={`input-${i}`} type="text" placeholder='input' />);
    }

    for (let i = 0; i < formCounts.textarea; i++) {
      fields.push(<textarea key={`textarea-${i}`} placeholder='textarea' />);
    }

    for (let i = 0; i < formCounts.checkbox; i++) {
      fields.push(
        <label key={`checkbox-${i}`}>
          <input type="checkbox" /> Checkbox {i + 1}
        </label>
      );
    }

    setBuildFields(fields);
  }}
>
  Build
</button>
      <div className="generatedform" style={generatedFormStyle}>
        {buildFields}
      </div>
    </div>
  );
};

export default FormPage;
