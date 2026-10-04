# Full posted note inventory

Official index: https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/pages/lecture-notes/

Ten unique substantive PDFs; the index lists Wave Mechanics twice via two resource routes, not two distinct chapters. All ten retrieved successfully from MIT. Total 257 PDF pages, 247 substantive pages plus ten OCW attribution end sheets. Calendar maps these chapters to lectures 1–26. This is all posted lecture-note content, not a claim that the notes supply every syllabus topic or every needed proof. Chapter 10 contains explicit empty sections.

| Chapter | Title / linked official PDF | PDF pages | Document date | Local file |
|---|---|---:|---|---|
| 1 | [Wave Mechanics](https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/61bc31b8d8bf0680c322733910a71aa0_MIT8_05F13_Chap_01.pdf) | 26 | September 13, 2013 | [chapter-01.pdf](chapter-01.pdf) |
| 2 | [Spin One-half, Bras, Kets, and Operators](https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/a56c316e4ec548d8bd0a554fac9a74e8_MIT8_05F13_Chap_02.pdf) | 19 | September 17, 2013 | [chapter-02.pdf](chapter-02.pdf) |
| 3 | [Linear Algebra: Vector Spaces and Operators](https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/04b0570b349e84d74129eef504498472_MIT8_05F13_Chap_03.pdf) | 28 | October 21, 2013 | [chapter-03.pdf](chapter-03.pdf) |
| 4 | [Dirac’s Bra and Ket Notation](https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/4de6d044fa9d7e5b8998c5f8ca984a42_MIT8_05F13_Chap_04.pdf) | 15 | October 7, 2013 | [chapter-04.pdf](chapter-04.pdf) |
| 5 | [Uncertainty Principle and Compatible Observables](https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/005979fa741c3ea2e0430456b70caf93_MIT8_05F13_Chap_05.pdf) | 20 | October 21, 2013 | [chapter-05.pdf](chapter-05.pdf) |
| 6 | [Quantum Dynamics](https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf) | 51 | November 4, 2013 | [chapter-06.pdf](chapter-06.pdf) |
| 7 | [Two State Systems](https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/7c376a3b5b27e5ea586a7e37b85a05d3_MIT8_05F13_Chap_07.pdf) | 22 | November 15, 2013 | [chapter-07.pdf](chapter-07.pdf) |
| 8 | [Multiparticle States and Tensor Products](https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf) | 20 | December 14, 2013 | [chapter-08.pdf](chapter-08.pdf) |
| 9 | [Angular Momentum](https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/e765f050b2fd50a9d87d2ae801e9c52f_MIT8_05F13_Chap_09.pdf) | 39 | December 16, 2013 | [chapter-09.pdf](chapter-09.pdf) |
| 10 | [Addition of Angular Momentum](https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/f27e44d7b761cec0ef1d01734f0a23b8_MIT8_05F13_Chap_10.pdf) | 17 | December 12, 2013 | [chapter-10.pdf](chapter-10.pdf) |

Extraction: PyMuPDF (`fitz`) `Page.get_text(sort=True)`, with `=== PDF PAGE n ===` markers. Reading locators refer to PDF pages, which equal printed chapter pages until the attribution sheet. Extraction preserves prose but displaces mathematical glyphs, especially ℏ, negation marks, brackets, and matrix layout; it is not a reliable verbatim formula transcription. No OCR or video viewing was performed.

Recovery: `python` missing → used `python3`; BeautifulSoup missing → parsed known official resource links by regex; first URL parser assumed absolute URLs → corrected relative URL joining; `pdftotext` missing → used installed PyMuPDF. These were local tooling failures; all authoritative source URLs fetched successfully without a substitute source.
