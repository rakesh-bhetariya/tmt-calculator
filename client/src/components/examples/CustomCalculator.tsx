import CustomCalculator from '../CustomCalculator';

export default function CustomCalculatorExample() {
  return (
    <CustomCalculator 
      onCalculate={(inputs) => console.log('Calculate:', inputs)} 
    />
  );
}
