describe('Dark Mode Toggle', () => {
    let switchElm, rootElm;
  
    beforeEach(() => {
      // Mock the document and localStorage
      document.body.innerHTML = '<input type="checkbox" id="switch">';
      switchElm = document.querySelector("#switch");
      rootElm = document.documentElement;
  
      // Mock localStorage
      global.localStorage = {
        getItem: jest.fn(),
        setItem: jest.fn(),
      };
  
      // Mock window.matchMedia
      global.matchMedia = jest.fn().mockReturnValue({
        matches: false, // Default to light mode (you can change this for testing)
      });
    });
  
    afterEach(() => {
      jest.clearAllMocks(); // Clear mocks between tests
    });
  
    test('should enable dark mode if localStorage is true or prefers-color-scheme is dark', () => {
      // Mock the scenario where dark mode is enabled
      global.localStorage.getItem.mockReturnValue("true");
      global.matchMedia.mockReturnValue({
        matches: true, // Simulate user preference for dark mode
      });
  
      // The logic that will run on initial load
      if (global.matchMedia("(prefers-color-scheme: dark)").matches || global.localStorage.getItem("darkmode") === "true") {
        enableDarkmode();
      }
  
      expect(rootElm.getAttribute("data-mode")).toBe("dark");
      expect(switchElm.checked).toBe(true);
      expect(localStorage.setItem).toHaveBeenCalledWith("darkmode", "true");
    });
  
    test('should enable light mode if localStorage is false', () => {
      // Mock the scenario where dark mode is disabled (localStorage is "false")
      global.localStorage.getItem.mockReturnValue("false");
      global.matchMedia.mockReturnValue({
        matches: false, // Simulate user preference for light mode
      });
  
      // The logic that will run on initial load
      if (global.localStorage.getItem("darkmode") === "false") {
        enableLightmode();
      }
  
      expect(rootElm.getAttribute("data-mode")).toBe("light");
      expect(switchElm.checked).toBe(false);
      expect(localStorage.setItem).toHaveBeenCalledWith("darkmode", "false");
    });
  
    test('should toggle dark mode when switch is clicked', () => {
      // Set initial mode to light
      global.localStorage.getItem.mockReturnValue("false");
      enableLightmode(); // Initially set to light mode
  
      // Simulate click on switch to turn on dark mode
      switchElm.checked = true;
      switchElm.dispatchEvent(new MouseEvent('click'));
  
      // Verify the dark mode is enabled
      expect(rootElm.getAttribute("data-mode")).toBe("dark");
      expect(switchElm.checked).toBe(true);
      expect(localStorage.setItem).toHaveBeenCalledWith("darkmode", "true");
  

      switchElm.checked = false;
      switchElm.dispatchEvent(new MouseEvent('click'));
  

      expect(rootElm.getAttribute("data-mode")).toBe("light");
      expect(switchElm.checked).toBe(false);
      expect(localStorage.setItem).toHaveBeenCalledWith("darkmode", "false");
    });
  
    test('should not toggle when no click occurs', () => {

      expect(rootElm.getAttribute("data-mode")).toBe("light");
      expect(switchElm.checked).toBe(false);
    });
  });
  