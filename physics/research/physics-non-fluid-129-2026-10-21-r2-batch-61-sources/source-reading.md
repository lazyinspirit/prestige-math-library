# Batch 61 source reading — rooted forests and subtraction recursion

Run: `physics-non-fluid-129-2026-10-21-r2`  
Batch: `61`  
A page: `qftx-renormalization-hopf`  
B page: `qftx-renormalization-hopf-examples`

## Discovery searches

- Query: “Manchon Hopf algebras from basics to applications to renormalization full text lecture notes rooted trees.” Outcome: located the author's 62-page full lecture text at arXiv `math/0408405`; the PDF itself was retrieved and read at the locators below.
- Query: “hep-th/9808042 Hopf algebras renormalization noncommutative geometry Connes Kreimer.” Outcome: located the authors' full 48-page paper at arXiv `hep-th/9808042`; the PDF itself was retrieved and read at the locators below.

## Full-text sources and dispositions

### Dominique Manchon, *Hopf algebras, from basics to applications to renormalization*

URL: <https://arxiv.org/pdf/math/0408405>  
Kind: full lecture notes, arXiv:math/0408405v2.  
Retrieved file: `research/physics-non-fluid-129-2026-10-21-r2-batch-61-sources/raw/manchon-hopf-algebras.pdf`  
SHA-256: `bd6054467459ac2f6a7c97d3c356a8b9301cc33ce61125039a67095977a737dc`; 436,049 bytes; 62 PDF pages.

Read the complete relevant reasoning in §II.3, Proposition II.3.1 and Corollary II.3.2 (PDF p. 32): convolution inverse and the finite geometric-series antipode for a connected filtered bialgebra. This supports `thm-qftx-cut-hopf-antipode`; the local proof supplies the detailed grading and two-sided inverse argument for this exact carrier.

Read the complete relevant reasoning in §II.5, Theorem II.5.1 and its proof of assertion 3 (PDF pp. 36–38): the Laurent splitting, the negative-part projection identity, the recursive Birkhoff factors, and character preservation. These support `def-qftx-laurent-subtraction-target`, `lem-qftx-laurent-negative-projection-rota-baxter`, and `thm-qftx-subtraction-character-factorization`. The local lemma expands the Laurent decomposition explicitly, and the local theorem gives the complete degree-induction proof.

Read the complete relevant reasoning in §II.9.3 (PDF pp. 43–44): admissible cuts, crown/trunk decomposition, and the compatible two-level-cut proof of coassociativity. This supports `thm-qftx-cut-hopf-antipode`. Manchon's passage uses planar decorated trees and an orientation convention different from the fixed non-planar, root-to-child convention in the local definition; only the two-level-cut proof method is used, and the local proof states its own convention explicitly.

### Alain Connes and Dirk Kreimer, *Hopf Algebras, Renormalization and Noncommutative Geometry*

URL: <https://arxiv.org/pdf/hep-th/9808042>  
Kind: paper, *Communications in Mathematical Physics* 199 (1998), 203–242, arXiv:hep-th/9808042v1.  
Retrieved file: `research/physics-non-fluid-129-2026-10-21-r2-batch-61-sources/raw/connes-kreimer-rooted-hopf.pdf`  
SHA-256: `c25b6a8a4c3bca1879febec729977a198a9403967abec4873b652a0821f5ebb6`; 442,429 bytes; 48 PDF pages.

Read the complete rooted-tree construction and proof route in §2.2: equations (65)–(71), Lemma 1 and equations (72)–(82), printed pp. 30–33 (PDF pp. 30–33). This supports `def-qftx-rooted-forest-hopf` and `thm-qftx-cut-hopf-antipode`. The paper's first exposition of the coproduct and antipode in §2, equations (44)–(55), printed pp. 14–20, was also read; it explicitly distinguishes the empty cut, the virtual full cut, and proper admissible cuts.

Read the complete two-vertex toy-model calculation in §2, printed pp. 10–13: naive overall subtraction fails in the presence of the nested subdivergence, while recursive subtraction of the subdivergence supplies a correction. This supports `ex-qftx-nested-two-loop-subtraction`; the local example rederives the abstract Laurent-character calculation and does not identify its formal coefficients with that integral.

Read §2.3, printed p. 25, for the graph boundary: a unique rooted tree describes nested/disjoint subdivergences in the stated case, while overlapping divergences require sums of trees. This supports the explicit limitation in `def-qftx-rooted-forest-hopf` and the no-automatic-graph-map remark in `thm-qftx-subtraction-character-factorization`; no general graph insertion theorem is inferred.

## Coverage and retrieval disposition

The two independent full texts above support the A page, including one complete set of lecture notes. The B example is supported by both the QFT toy-model discussion and the general rooted-tree/Birkhoff treatment. All listed harvested passages are marked `included` for the exact items in `research/physics-non-fluid-129-2026-10-21-r2-batch-61.coverage.json`. Unrelated sections are not claimed as item support.

Both PDFs were retrieved successfully. `node tools/physics-support/source-fetch-check.mjs --coverage research/physics-non-fluid-129-2026-10-21-r2-batch-61.coverage.json --stamp` verified 4/4 page/source records. The Manchon stamps match the local raw hash prefix `bd6054467459ac2f` and report 62 pages; the Connes–Kreimer stamps match `c25b6a8a4c3bca18` and report 48 pages. There were no failed retrievals, recovery retries, source drops, or alternative-proof dispositions; no `source_resolution` record is required.
