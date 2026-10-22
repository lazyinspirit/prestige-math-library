# Batch 102 source reading record

Run: `physics-non-fluid-129-2026-10-21-r2`  
A page: `qsmx-lieb-robinson-spectral-flow`  
B page: `qsmx-lieb-robinson-spectral-flow-examples`

Both documents were retrieved as full-text PDFs and inspected locally. The coverage JSON records the exact source URLs, scoped locators, item mappings, and disposition of every harvested result. No retrieval failure occurred, so there are no recovery retries or alternative-source records in `source_resolution`.

## Independent spectral-flow treatment

S. Bachmann, S. Michalakis, B. Nachtergaele, and R. Sims, “Automorphic Equivalence within Gapped Phases of Quantum Lattice Systems,” [arXiv:1102.0842](https://arxiv.org/pdf/1102.0842).

- Local full text: `raw/bmns-automorphic-equivalence.pdf` (404,527 bytes; 31 pages; SHA-256 `ee2493d9a7e910414f082986158c6b360f621db5d3b122134b265103fe202f49`). Extracted text is `raw/bmns-automorphic-equivalence.txt`.
- Complete relevant reasoning inspected: §2 Proposition 2.4, Lemma 2.6, Corollary 2.8; §4.1–4.4, including the full assumptions, Theorems 4.5–4.6, the local expectation/shell argument, and complete Theorem 4.8 proof (equations (4.42)–(4.47)); §§5.1–5.3, including Theorem 5.2 and Proposition 5.3; §5.5, including Theorem 5.5 and Lemma 5.6.
- Used for the finite-volume spectral projection/filter interface, the interaction-path Lieb–Robinson route, local shell decomposition, fixed-coefficient convergence, and thermodynamic state-set transport. The local proofs reproduce the required estimates under the exact finite-range spin assumptions rather than importing the paper's stronger/general assumptions as proved facts.
- The article gives no exponential-clustering theorem in the assigned item inventory. Its pathwise gap assumptions support recording the one-spin counterexample's lesson, but the explicit example is calculated locally.

## Independent spin-dynamics treatment

Pieter Naaijkens, *Quantum Spin Systems on Infinite Lattices*, [arXiv:1311.2717](https://arxiv.org/pdf/1311.2717).

- Local full text: `raw/naaijkens-quantum-spin-systems.pdf` (1,894,041 bytes; 157 pages; SHA-256 `6d954604ef16fc58481f469a43ab3364229c4456d8ee6bf7c2446adb6d22751d`). Extracted text is `raw/naaijkens-quantum-spin-systems.txt`.
- Complete relevant reasoning inspected: Chapter 3 finite-dimensional local algebras and interactions; §4.1 Theorem 4.1.2 and its complete proof; §4.2 existence of dynamics and the proof's volume-boundary estimate.
- Used as an independent full lecture-notes treatment of local spin dynamics and Lieb–Robinson iteration. Its interaction norm is not the local weighted pair norm, so the local weighted theorem is proved from its own hypotheses and convolution lemma. The notes do not supply spectral-flow or gap-transport claims; those are handled by the BMNS treatment plus the complete local arguments.

## Retrieval and reading limits

The PDFs were downloaded successfully before authoring and their full relevant proof sections were read. `source-fetch-check --stamp` is recorded separately in the batch coverage file after authoring; that check verifies retrievability and bytes, not mathematical correctness. No claims are made about unread sections beyond the locators above.
