# Batch 104 source reading record

Run: `physics-non-fluid-129-2026-10-21-r2`  
A page: `qsmx-topological-lattice`  
B page: `qsmx-topological-lattice-examples`

Two independent full-text treatments were read for the A page. The complete PDFs were downloaded locally, and the cited sections were inspected in the browser PDF text view. The cited sections below are the portions read for these claims; no claim is made about unrelated sections. The source coverage JSON records each harvested result's disposition and limitation.

## Primary treatment

A. Yu. Kitaev, “Fault-tolerant quantum computation by anyons,” [full PDF](https://arxiv.org/pdf/quant-ph/9707021).

- Local full text: `raw/kitaev-fault-tolerant-anyons.pdf` (330,438 bytes; 27 pages; SHA-256 `095171071c8735471da47b929da4d2623d847dff9873d40930cdc169b96cb514`).
- Inspected: §1, equations (1)–(4), PDF pp. 1–5: square-torus stabilizers, commutation, global relations, ground-space dimension, loop/cut operators, homology and local-error discussion. §2, equation (5), PDF pp. 5–6: open-string operators and endpoint defects.
- Used for: the finite edge-qubit Hamiltonian conventions, constraints, homological string vocabulary, and pair-defect construction.
- Limits: the paper's displayed ground-space count is for the square torus. The genus-$g$ count, weighted-coupling lower bound, and exact disk-supported scalar-compression proof are derived locally; no perturbative stability claim is imported.

## Independent full lecture treatment

John Preskill, *Lecture Notes for Physics 219: Quantum Computation*, Chapter 9, [full PDF](https://www.preskill.caltech.edu/ph219/topological.pdf).

- Local full text: `raw/preskill-topological-quantum-computation.pdf` (509,850 bytes; 68 pages; SHA-256 `b18e7631222d2fca486a962c63e149c2b6f44e8b51fef7b010112c90a643d18e`).
- Inspected: §§9.6–9.7, PDF pp. 16–21, especially §9.7 and equations (9.20)–(9.22): fundamental cycles, toric stabilizer Hamiltonian, the exact torus code space, pair defects, and the distinction between the ideal Hamiltonian and perturbations.
- Used as an independent full-lecture treatment of the torus-cycle and Hamiltonian conventions, and for the pair-defect example.
- Limits: the local theorem's full genus and disk-compression arguments are proved from the stated finite chain complex. Preskill's discussion of perturbative splitting is not used as a supplier.

## Retrieval and reading limits

Both URLs were retrieved as PDFs with no recovery retries. `node tools/physics-support/source-fetch-check.mjs --coverage research/physics-non-fluid-129-2026-10-21-r2-batch-104.coverage.json --stamp` succeeded: 4/4 coverage entries verified (the same two documents are listed once for A and once for B), zero failures and zero drops. Stamped bytes, page counts, hashes and fetch times are in the coverage JSON. The PDF parser exposed the cited full-text sections; the absence of a local `pdftotext` executable did not prevent inspection. `source_resolution` is empty because there was no retrieval failure and no source was dropped.
