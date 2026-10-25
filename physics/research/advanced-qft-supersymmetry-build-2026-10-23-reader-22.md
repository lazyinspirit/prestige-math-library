# Reader report — Batch 22

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: Step 3a reader  
Batch: `22`

## Opened inventory

### Assigned pages

- `library/advanced-qft-and-supersymmetry/qftx-nonabelian-lattice-regulator.md` — frontmatter-only; listed the three A-page items, no examples, and the required batch-6 mathematics page.
- `library/advanced-qft-and-supersymmetry/qftx-nonabelian-lattice-regulator-examples.md` — frontmatter-only; listed the assigned example and the A-page companion.

### Assigned items, in consumer order

- `items/lem-qftx-su2-compact-nonabelian-group.md` — checked the matrix group proof against its exact Lie-group and Heine–Borel suppliers.
- `items/lem-qftx-su2-wilson-transfer-well-defined.md` — checked the finite Haar integrals, kernel measurability and bound, operator estimate, gauge covariance, invariant sector, and cyclic factorization.
- `items/post-qftx-nonabelian-lattice-regulator.md` — checked the adopted finite-volume formulation, hypotheses, units, physical scope, and separation from empirical claims.
- `items/ex-qftx-su2-wilson-lattice-transfer-sector.md` — checked the loop observable, identity configuration, gauge invariance, boundedness, and conditional transfer conclusions.

### Dependency and evidence context

- Opened the required page `library/quantum-field-theory-mathematics/qftx-nonabelian-lattice-mathematics.md` and current batch-6 carriers `items/def-qftx-nonabelian-lattice-gauge-data.md` and `items/lem-qftx-lattice-data-well-defined.md`.
- Opened the transitive batch-2 carrier `items/def-qftx-nonabelian-gauge-data.md`.
- Opened the pinned mathematical suppliers used by batch 22: `def-countable-choice`, `def-axiom-of-choice`, `def-lie-group`, `ex-unitary-and-special-unitary-lie-groups`, `thm-heine-borel-rn`, `cor-normalized-haar-probability-on-a-compact-group`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`, and `thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz`. Their current root source bytes match the hashes in `research/math-imports.json`.
- Read the batch-22 manifest, proof-contracts, cross-batch dependency record, author check, notes, and author task as evidence rather than as verdicts.
- Read the cited source passages: Creutz, *Quarks, Gluons and Lattices*, Ch. 7, pp. 34–38; Ch. 8, pp. 39–43; Ch. 15, pp. 101–107; and Tong, *Gauge Theory*, Ch. 4, §§4.2.1–4.2.3, pp. 206–215. These passages support the link, inverse-link, Wilson plaquette, Haar integration, finite-volume, transfer-space, and gauge-singlet conventions. The local proofs supply the exact conditional mathematical conclusions.

## Review and disposition

`lem-qftx-su2-compact-nonabelian-group` is sound. Its ACω hypothesis matches the SU(2) Lie-group supplier; closedness and boundedness in eight real coordinates give compactness by the stated Heine–Borel theorem, and the noncommuting matrices and SU(2) parametrization establish the remaining claims.

`lem-qftx-su2-wilson-transfer-well-defined` is sound after the repair below. Full AC supplies normalized Haar probability and the ACω needed by the L² supplier. The finite product is a probability; the Wilson density is bounded above by one and below by a positive finite-volume constant. The kernel estimate, contraction, independent-slice gauge covariance, closed fixed sector, and cyclic factorization follow from the displayed bounds, Haar invariance, Tonelli, and the exact finite lattice interface. The current batch-6 definition and its well-definedness lemma provide the needed interface and construction facts.

`post-qftx-nonabelian-lattice-regulator` is an adopted, finite pure-SU(2) Euclidean model. It states the lattice, group, orientation, gauge action, action, measure, units, and transfer convention. Its limits exclude empirical conclusions, a continuum or infinite-volume claim, a Lorentzian Hamiltonian spectrum, and confinement or matter-screening conclusions. Source material is used for convention and scope, not as proof that the model describes nature.

`ex-qftx-su2-wilson-lattice-transfer-sector` is sound conditionally on the postulate and mathematical suppliers. The closed-loop factors telescope under the vertex action, the SU(2) trace bound makes the observable bounded, and the cited finite-volume lemma supplies its expectation and transfer claims.

There are no TikZ or tikzcd diagrams in the assigned pages or items.

## Repair

In `items/lem-qftx-su2-wilson-transfer-well-defined.md`, Proof step 2.1 incorrectly said that the plaquette action term lies in `[0,2]` although the statement permits any `β>0`. At `V=-I₂`, the action term is `2β`, so the asserted bound is false when `β>1`. I changed the step to distinguish the normalized Wilson factor, which lies in `[0,2]`, from the β-scaled action term, which lies in `[0,2β]`. The subsequent total-action and density bounds were already correct. I synchronized the step-2.1 claim in `research/advanced-qft-supersymmetry-build-2026-10-23-batch-22.proof-contracts.json`.

The item had no `verification.judge` record to remove. Reflow reported the item unchanged; post-repair precheck passed. The required final proof-layout run reported 1 item, 8 steps, 0 defects. The updated contract JSON parses and its step-2.1 claim matches the repaired proof. The earlier `author-check-22` result predates the repair and is treated as historical mechanical evidence, not a current check of the repaired carrier.

## Page verdicts

- `qftx-nonabelian-lattice-regulator` — **Pass after the in-scope item repair.** Page metadata and inventory match the manifest; body is empty and `page_layout: compact-v1` is present.
- `qftx-nonabelian-lattice-regulator-examples` — **Pass.** Companion, inventory, and prerequisite metadata match the manifest; body is empty and `page_layout: compact-v1` is present.

## Remaining defects and blocker

No uneditable defect was confirmed in an assigned item, assigned page, or the inspected current-run mathematical suppliers. No blocker remains. No gate, judgment, or acceptance stamp was attempted.

## Coverage limitation

I reviewed the direct dependencies needed by the assigned proofs and the current batch-6 well-definedness result, not the entire transitive library closure or every prerequisite page of `qftx-nonabelian-lattice-mathematics`. During dependency discovery, I opened the batch-6 lattice-data definition and its well-definedness lemma before noticing their batch-2 `def-qftx-nonabelian-gauge-data` supplier; I then inspected that exact supplier before making the final mathematical dispositions. This is a reading-order deviation, not an unexamined premise in the findings disposition. The source excerpts and direct mathematical claims listed above were inspected; no broader supplier audit is claimed.
