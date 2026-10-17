# Batch 48 source-reading log

Run: `numerical-optimization-dynamics-2026-10-16`; pair: `generalized-eigenvalue-pencils-and-qz-methods`.

## Full-text sources read and used

- Daniel Kressner, *Numerical Methods and Software for General and Structured Eigenvalue Problems* (PhD dissertation, 2004), [complete PDF](https://pages.mtu.edu/~struther/Courses/OLD/Other/Sp2012/5627/BlockQR/Work/kressner_daniel.pdf). Read Chapter 2 §1 (printed p. 62), §§3.1–3.5 (printed pp. 70–82), and the relevant Chapter 5 §5.1 discussion on Hessenberg-triangular reduction. The complete dissertation PDF is preserved here as `kressner-basic-qz-algorithm-chapter.pdf`; the extracted text is `kressner-basic-qz-algorithm-chapter.txt`.
- Peter Arbenz, *Lecture Notes on Solving Large Scale Eigenvalue Problems* (ETH Zürich, Spring 2016), [complete notes](https://people.inf.ethz.ch/arbenz/ewp/Lnotes/lsevp.pdf). Read §11.4 (printed pp. 199–201), §12.3 (printed p. 224 onward), §12.8 (printed p. 233), and §12.9 (printed pp. 233–236). The full PDF and extracted text are preserved here.
- LAPACK Users’ Guide, [Generalized Nonsymmetric Eigenproblems](https://www.netlib.org/lapack/lug/node35.html). Read the complete HTML page, including the generalized pencil and QZ conventions.
- LAPACK Users’ Guide, [Error Bounds for the Generalized Nonsymmetric Eigenproblem](https://www.netlib.org/lapack/lug/node102.html). Read the complete HTML page.
- LAPACK Users’ Guide, [Generalized Symmetric Definite Eigenproblems](https://www.netlib.org/lapack/lug/node54.html). Read the complete section on Cholesky reduction to a standard symmetric/Hermitian eigenproblem and eigenvector recovery.

The source-fetch receipt in `../numerical-optimization-dynamics-2026-10-16-batch-48.source-coverage.json` records full-text fetch hashes for the five final source URLs. It reports 5/5 unique sources fetch-verified; the two page-specific coverage rows reuse those stamps.

## Retrieval history and noncredited candidates

- The first browser open of Kressner’s PDF timed out. Direct full-PDF retrieval succeeded; the complete cited sections were then inspected. The source-fetch stamp later fetched the same full PDF successfully.
- The Arbenz PDF and both Netlib HTML pages opened successfully and their complete relevant text was inspected.
- The initially cited Netlib driver overview `https://netlib.org/lapack/lug/node34.html` was read in the browser, but `source-fetch-check` rejected its 1,956 extracted characters as below the 2,048-character full-text threshold. A search found the longer full computational section at `node54.html`; that complete section was opened, read, substituted in the relevant carriers, and fetch-stamped. No item depends on the short node34 URL.
- A Golub–Van Loan *Matrix Computations* candidate was also tried: an IITB-hosted URL returned 404, and a retrieved UChicago mirror yielded unusable MuPDF text extraction. It is not cited or credited as read. No claim depends on it; the full Kressner dissertation and Arbenz lecture notes provide two independent complete treatments for the A page, and the local proofs supply the claimed arguments.

## Source-result disposition

The companion `batch-48.source-coverage.json` maps every final carrier reference to the supported item and records `included` versus `inline` disposition. Classical QZ/Hessenberg and Hermitian-definite results are used as context; the assigned carriers prove their local definitions, induction, equivalence, residual identities, and finite examples. In particular, neither the LAPACK error page nor the Kressner stability discussion is used to claim a local rounded two-sided QZ Givens bound.
