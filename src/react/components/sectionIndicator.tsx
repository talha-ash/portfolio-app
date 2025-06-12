export const SectionIndicator = ({
  sections,
  currentSection,
  scrollToSection,
}: {
  sections: string[];
  currentSection: number;
  scrollToSection: (value: number) => void;
}) => {
  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-3 flex flex-col">
      {sections.map((_, index) => (
        <button
          key={index}
          onClick={() => scrollToSection(index)}
          className={`w-3 h-3 rounded-full border-2 transition-all ${
            currentSection === index
              ? `bg-gray-900 border-gray-900`
              : `border-gray-400 hover:border-gray-600`
          }`}
        />
      ))}
    </div>
  );
};
