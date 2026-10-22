# Step 3a reader report — batch 77

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Scope: batch `77`

## Opened inventory

Assigned pages:

- A: `library/quantum-field-theory-mathematics/qftx-modular-tqft-sewing.md`
- B: `library/quantum-field-theory-mathematics/qftx-modular-tqft-sewing-examples.md`

Assigned items, reviewed in dependency order:

1. `def-qftx-weighted-topological-model`
2. `prop-qftx-modular-dimension-sewing`
3. `prop-qftx-weight-anomaly-obstruction`
4. `ex-qftx-su2-level-dimensions`

Opened the exact mathematical suppliers used by those items: `def-axiom-of-choice`, `def-countable-choice`, `def-modular-ribbon-category-and-hopf-link-data`, `def-weighted-lagrangian-ribbon-bordism`, `def-rt-state-spaces`, `thm-weighted-rt-tqft-and-factorization`, `cor-rt-torus-and-state-dimension-formula`, `lem-simple-ribbon-fusion-dimensions-are-nonzero`, `lem-modular-hopf-matrix-squared`, and `thm-su2-root-unity-ribbon-category-is-modular`. These are imported mathematical snapshots or published mathematical items and were left read-only.

Also opened the page prerequisites `library/hall-algebras-and-tensor-categories/modular-categories-verlinde-and-tqft.md` and `library/quantum-field-theory-mathematics/qftx-ribbon-braid-representations.md`, the assigned batch proof-contract file `research/physics-non-fluid-129-2026-10-21-r2-batch-77.proof-contracts.json`, and the batch cross-dependency ledger. The latter records the required `qftx-ribbon-braid-representations` page as a batch-75 page prerequisite. That page is metadata-only in the current compact layout; its four batch-75 item bodies were not independently reviewed because no batch-77 item's logical dependency closure uses them.

## Mathematical review and page verdicts

- `def-qftx-weighted-topological-model`: The definition states the category, surface and bordism data, homology relations, Maslov correction convention, state spaces, weight action, and the supplied exact functor. Its terms are tied to the opened mathematical suppliers. The interpretation boundary correctly limits the item to a mathematical model and does not claim a physical realization.
- `prop-qftx-modular-dimension-sewing`: The genus formula follows from the exact state-space dimension supplier. The sphere case is also established directly by `Hom(1,1)=C`; for the torus, the unit-label double braiding gives `s_{0i}=d_i`, and the opened nonvanishing results ensure the exponent-zero terms are defined and equal to one. The basis and all circle-cut maps match the cited suppliers. The `tikzcd` diagram has the stated directions: `G` maps the direct-sum channels to the glued space, `F` maps back, and the diagonal identity depicts `F G = id`; the prose records the other inverse identity. The mathematical proof is sound. One inaccurate step reference remains in its proof contract; see below.
- `prop-qftx-weight-anomaly-obstruction`: The weight-increment formula is an exact consequence of the weighted functor supplier. If the assignment factored through forgetting weights, the two equal images would imply `(kappa-1)Z(M,n)=0`; over `C`, the stated nonzero-map hypothesis and `kappa != 1` make that impossible. The item does not claim an obstruction for a zero map or assert that anomaly cancellation is impossible.
- `ex-qftx-su2-level-dimensions`: With `ell=k+2`, the supplied root-of-unity theorem gives labels `0,...,k` and the stated normalized matrix. For each label, `0 < (a+1)pi/ell < pi`, so `S_{0a}` is nonzero and the genus-one formula counts `k+1` states. At `k=1`, the two entries are both `1/sqrt(2)`, and the full genus formula gives `2^g`, including `g=0`. The statement confines these conclusions to the specified mathematical quotient.

**A-page verdict — `qftx-modular-tqft-sewing`: pass on page prose and assigned mathematical claims.** Its summary accurately describes the weighted construction and its stated scope. The associated contract cross-reference issue is recorded as a nonfatal maintenance finding, not as a defect in the page claim.

**B-page verdict — `qftx-modular-tqft-sewing-examples`: pass.** Its title and example placement match the specified mathematical example; the compact page has no body summary to assess.

No TikZ/tikzcd diagrams occur in the other assigned carriers, and their expositions do not require an additional diagram.

## Source review

- Stephen F. Sawin, [*Quantum Groups at Roots of Unity and Modularity*](https://arxiv.org/pdf/math/0308281), arXiv:math/0308281v2, §6, Theorem 6 (PDF pp. 26–27): the consulted passage states modularity for the root-of-unity tilting quotient with exceptional cases treated separately. It does not by itself state all of the exact positive-trace `sl_2` data in the example. Those data and the all-`ell >= 3` scope are supplied explicitly by the opened `thm-su2-root-unity-ribbon-category-is-modular`; the example accurately attributes its exact data to that supplier.
- Etingof–Gelaki–Nikshych–Ostrik, [*Tensor Categories*](https://math.mit.edu/~etingof/egnobookfinal.pdf), §§8.14–8.16 (printed pp. 227–232): the consulted passages define modular S-data and Gauss sums and state modular-group relations. Their displayed convention uses the inverse twist in `T`; the assigned positive-Hopf/positive-twist convention is instead proved geometrically in the opened `cor-rt-torus-and-state-dimension-formula`.
- Bakalov–Kirillov, [*Lectures on Tensor Categories and Modular Functors*, Chapter 5](https://ncatlab.org/nlab/files/BakalovKirillovChapter5.pdf), §5.5, Exercise 5.5.5 (printed pp. 119–120): the exercise gives a dimension formula for genus `g >= 1` with a proof hint. The assigned all-genus claim, its `g=0` case, and the no-conjugation convention are carried by the opened local corollary and its proof; the assigned source locator labels this reference as context only.
- Kevin Walker, [*On Witten's 3-manifold Invariants*](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/walker3.pdf), §7, Theorem 7.9, and §18, Theorem 18.5: Theorem 7.9 concerns compatibility between modular functors and partition functions; Theorem 18.5 states the Wall signature nonadditivity formula. The document's preface identifies these notes as a preliminary version and says they were not completed or corrected. The assigned locators use Walker for context; the exact weighted functor, weight action, and cut maps used by batch 77 come from the opened local mathematical theorem.

These source checks were limited to the cited passages and their surrounding statements, not a full-paper audit. No source was treated as proof of a physical realization.

## Uneditable defect

The proof contract for `prop-qftx-modular-dimension-sewing` inaccurately attributes several dimension/nonvanishing checks to item proof step `2.1`: `finite_checks[0]` (sphere), `finite_checks[1]` (torus), and `boundaries.zero` and `boundaries.degenerate`. The current item step `2.1` proves only the sewing/cutting inverse statement. The sphere and torus dimensions are established in item steps `1.1`–`1.2`, while the nonzero powers follow from facts `F6`–`F7` and item step `1.2`. The item proof is complete, but the proof-contract file is outside this reader's authorized edit scope. This is a nonfatal contract-reference defect and is the sole returned finding.

## Edits and checks

No item or page was edited. No proof contract or verification record was changed.

Read-only checks:

- `node tools/physics-support/proof-layout.mjs items/prop-qftx-modular-dimension-sewing.md items/prop-qftx-weight-anomaly-obstruction.md items/ex-qftx-su2-level-dimensions.md` — pass: 3 items, 8 steps, 0 defects.
- `node tools/physics-support/rendercheck.mjs` on the four assigned items and two assigned pages — pass: all 6 files parsed; no math-delimiter or KaTeX defects.

## Blocker

None.
