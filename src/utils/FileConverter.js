/**
 * Converts a File object (like from an <input type="file">) into a byte array and Base64 string.
 * @param {File} file - The file selected by the user.
 * @returns {Promise<{ byteArray: Uint8Array, base64String: string }>}
 */

export const convertFileToBytes = (file) => {
    return new Promise((resolve, reject) => {
        if (!file) {
            reject("No file provided");
            return;
        }

        const reader = new FileReader();

        reader.onload = (e) => {
            const arrayBuffer = e.target.result;
            const byteArray = new Uint8Array(arrayBuffer);

        // Convert to Base64 string //
            const base64String = btoa(
                new Uint8Array(arrayBuffer)
                    .reduce((data, byte) => data + String.fromCharCode(byte), "")
            );

            resolve({ byteArray, base64String });
        };

        reader.onerror = (err) =>  reject(err);

        reader.readAsArrayBuffer(file);
    });
};
