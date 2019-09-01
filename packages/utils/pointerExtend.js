function pointerExtend(dest, source) {
    for (const prop in source) {
        const prefixedPropREs = pointerExtend.prefixedPropREs;
        let deprecated = false;
        // skip deprecated prefixed properties
        for (const vendor in prefixedPropREs) {
            if (prop.indexOf(vendor) === 0 && prefixedPropREs[vendor].test(prop)) {
                deprecated = true;
                break;
            }
        }
        if (!deprecated && typeof source[prop] !== 'function') {
            dest[prop] = source[prop];
        }
    }
    return dest;
}
pointerExtend.prefixedPropREs = {
    webkit: /(Movement[XY]|Radius[XY]|RotationAngle|Force)$/,
    moz: /(Pressure)$/,
};
export default pointerExtend;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9pbnRlckV4dGVuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBvaW50ZXJFeHRlbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0EsU0FBUyxhQUFhLENBQUUsSUFBSSxFQUFFLE1BQU07SUFDbEMsS0FBSyxNQUFNLElBQUksSUFBSSxNQUFNLEVBQUU7UUFDekIsTUFBTSxlQUFlLEdBQUcsYUFBYSxDQUFDLGVBQWUsQ0FBQTtRQUNyRCxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUE7UUFFdEIsc0NBQXNDO1FBQ3RDLEtBQUssTUFBTSxNQUFNLElBQUksZUFBZSxFQUFFO1lBQ3BDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDcEUsVUFBVSxHQUFHLElBQUksQ0FBQTtnQkFDakIsTUFBSzthQUNOO1NBQ0Y7UUFFRCxJQUFJLENBQUMsVUFBVSxJQUFJLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLFVBQVUsRUFBRTtZQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQzFCO0tBQ0Y7SUFDRCxPQUFPLElBQUksQ0FBQTtBQUNiLENBQUM7QUFFRCxhQUFhLENBQUMsZUFBZSxHQUFHO0lBQzlCLE1BQU0sRUFBRSxnREFBZ0Q7SUFDeEQsR0FBRyxFQUFFLGFBQWE7Q0FDbkIsQ0FBQTtBQUVELGVBQWUsYUFBYSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBQb2ludGVyRXh0ZW5kIHtcbiAgd2Via2l0OiBSZWdFeHBcbiAgW3ByZWZpeDogc3RyaW5nXTogUmVnRXhwXG59XG5cbmZ1bmN0aW9uIHBvaW50ZXJFeHRlbmQgKGRlc3QsIHNvdXJjZSkge1xuICBmb3IgKGNvbnN0IHByb3AgaW4gc291cmNlKSB7XG4gICAgY29uc3QgcHJlZml4ZWRQcm9wUkVzID0gcG9pbnRlckV4dGVuZC5wcmVmaXhlZFByb3BSRXNcbiAgICBsZXQgZGVwcmVjYXRlZCA9IGZhbHNlXG5cbiAgICAvLyBza2lwIGRlcHJlY2F0ZWQgcHJlZml4ZWQgcHJvcGVydGllc1xuICAgIGZvciAoY29uc3QgdmVuZG9yIGluIHByZWZpeGVkUHJvcFJFcykge1xuICAgICAgaWYgKHByb3AuaW5kZXhPZih2ZW5kb3IpID09PSAwICYmIHByZWZpeGVkUHJvcFJFc1t2ZW5kb3JdLnRlc3QocHJvcCkpIHtcbiAgICAgICAgZGVwcmVjYXRlZCA9IHRydWVcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWRlcHJlY2F0ZWQgJiYgdHlwZW9mIHNvdXJjZVtwcm9wXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZGVzdFtwcm9wXSA9IHNvdXJjZVtwcm9wXVxuICAgIH1cbiAgfVxuICByZXR1cm4gZGVzdFxufVxuXG5wb2ludGVyRXh0ZW5kLnByZWZpeGVkUHJvcFJFcyA9IHtcbiAgd2Via2l0OiAvKE1vdmVtZW50W1hZXXxSYWRpdXNbWFldfFJvdGF0aW9uQW5nbGV8Rm9yY2UpJC8sXG4gIG1vejogLyhQcmVzc3VyZSkkLyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgcG9pbnRlckV4dGVuZFxuIl19