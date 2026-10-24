# Supplemental batch 70 authoring notes

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Dispatch: `prerequisite-1-batch-70`  
Scope: `qftx-equivariant-pseudodifferential-calculus` and its examples page.

This is supplemental source authoring. All authored items remain `draft`. No native Step-1 result, acceptance, verification stamp, gate result or publication status was created.

## Authority, inventory and placement

- The exact task was `research/advanced-qft-supersymmetry-build-2026-10-23-step2-prerequisite-request-1.json`; current owner direction was read from `research/advanced-qft-supersymmetry-build-2026-10-23-owner-authoring-direction.md`.
- The approved declarations in `research/advanced-qft-supersymmetry-build-2026-10-23-batch-70.pages.json` exactly match the current `research/plan-spec.json` rows for both assigned pages and all five assigned item declarations. A programmatic field-by-field comparison found no conflicts.
- The batch-level dependency graph records batch 70 at level 0 with no predecessor batches. The item dependency graph within the pair is: `lem-equivariant-finite-chart-symbol-calculus` level 0; `lem-equivariant-controlled-symbol-realization` level 1; `lem-equivariant-associated-symbol-product-index` level 2; `lem-equivariant-compact-bott-index-normalization` level 3; `ex-equivariant-fourier-hardy-symbol-index` level 2. The latter depends only on the first two A-page suppliers, so it is independent of the level-3 Bott normalization.
- The A page retains exactly its four declared items; the B page retains exactly its one declared example. Both pages are frontmatter-only, preserve their reciprocal identities, draft status, `library: mathematics`, exact prerequisites, and existing `page_layout: compact-v1` flag. Each item is mathematical, uses only mathematical premises, and has the declared dependency roles.
- The B page's prerequisite on its own A companion and every in-run item dependency are internal to batch 70. The A-page prerequisite list resolves to outside/published context, so the required cross-batch dependency record is the empty JSON array. No cross-batch edge was removed or left unrecorded.

## Completed items

### `lem-equivariant-finite-chart-symbol-calculus`

Claim: on a compact smooth manifold without boundary, construct the finite-chart classical calculus for complex bundles, prove principal-symbol covariance/composition/adjoints, integer Sobolev mapping, compactness and elliptic parametrices/regularity, then the exact continuous-symbol quotient and all-level ellipticity/regularity for the operator-norm closures. The statement fixes the positive Fourier convention, metrics, density, bundles, symbol estimates and full AC. The proof reconstructs the Fourier bounds, amplitude reduction, coordinate change, composition, Borel parametrix, compact remainders, order-one Sobolev normalization, essential norm and group averaging.

Dependencies: `def-axiom-of-choice`, `thm-plancherel`, `thm-fourier-inversion-on-schwartz-space`, `thm-fourier-transform-maps-schwartz-space-continuously-to-itself`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-smooth-partitions-of-unity-exist-on-manifolds`, `thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain`, `thm-atkinson`, `thm-orthogonal-decomposition-by-a-closed-subspace`, `cor-normalized-haar-probability-on-a-compact-group`, and `thm-bounded-inverse-theorem`. All are pinned mathematical imports. Their actual statements, proofs and relevant hypotheses were inspected. Full AC covers the weaker countable-choice and dependent-choice hypotheses in the Fourier, Rellich, Hilbert and Fredholm suppliers.

### `lem-equivariant-controlled-symbol-realization`

Claim: define the representation-valued analytic index of continuous compact-support equivariant symbol triples; prove smoothing/finite-representation realization, stabilization and homotopy invariance, homogeneous reduction, elliptic-complex Hodge index, and compactification-independent excision for controlled compact-support operators. The noncompact claim is conditional on the stated open equivariant embedding into a compact ambient. The proof includes the local complement and stable compression, the two-cutoff operator formula, and kernel/adjoint-kernel support in the same compact set. Its final complex argument now identifies the exact symbol class with the even-to-odd fold by the orthogonal image decomposition of the exact symbol sequence.

Dependencies: `def-axiom-of-choice`, `lem-equivariant-finite-chart-symbol-calculus`, `thm-smooth-partitions-of-unity-exist-on-manifolds`, `cor-normalized-haar-probability-on-a-compact-group`, `thm-uniform-peter-weyl-density`, `thm-orthogonal-decomposition-by-a-closed-subspace`, and `thm-bounded-inverse-theorem`. The imported statements and complete proofs were inspected; the finite-chart supplier's exact continuous-symbol closure interface matches the uses here.

### `lem-equivariant-associated-symbol-product-index`

Claim: for compact Lie groups `T,H`, compact base and fiber, an `H`-principal bundle with commuting `T`-action, and elliptic order-one base/fiber operators in the explicitly defined simultaneous Sobolev closure, construct compatible horizontal lifts and prove the exact four commutations. The block operator is elliptic by the continuous-symbol homotopy from the patched horizontal symbol to the connection product. The squared-norm identities identify its four kernel intersections and give `Ind_T D = Ind_T C_K - Ind_T C_L`, including compact-support external products through the controlled realization.

Dependencies: `lem-equivariant-finite-chart-symbol-calculus`, `lem-equivariant-controlled-symbol-realization`, and `def-axiom-of-choice`. Their actual current statements and proofs were checked before the consuming proof. The Atiyah–Singer §9 domains, adjoints and matrix squares were checked against the scan; the local proof supplies the shrinking-cone estimate, closure lifts, gluing correction and exact domain commutations.

### `lem-equivariant-compact-bott-index-normalization`

Claim: for every `n≥0`, the doubled-real Koszul symbol on `T*R^n`, with `O(n)` acting diagonally and the stated `z=x+iξ` convention, has full equivariant analytic index the trivial representation. Restriction to compact subgroups and tensoring by coefficient representations are included. The proof fixes the line sign using the Hardy operator; uses an explicit full-symbol height deformation on `S¹,S²`; proves the reflection and rotation-plane cases; and detects every character value on `O(n)`, including its other component. It treats `n=0` directly and records the `(-1)^n` relation between complex and `dθ` orientations.

Dependencies: `def-axiom-of-choice`, the finite-chart, controlled-realization and associated-product suppliers, `thm-de-rham-cohomology-of-spheres`, `thm-general-stokes-theorem`, and `thm-hopf-line-calculation-of-k-zero-of-the-two-sphere`. The imports' actual statements/proofs and the three local suppliers were inspected. The original Atiyah–Singer proof was visually checked at pp. 499–508 and 524–526; the independent Haller notes were read through the Hodge/Euler index argument on pp. 130–131. The proof explicitly establishes the `SO(2)` representation-ring torsion-free step from Fourier projections and Fejér convergence, without relying on a smoothness theorem for finite-dimensional representations. The AC premise is labelled and its use is recorded in the proof contract.

### `ex-equivariant-fourier-hardy-symbol-index`

Claim: for the circle with trivial geometric `G`-action and a finite-dimensional unitary coefficient representation `V`, the Hardy-shift operator has two-ray principal symbol, zero kernel, constant-copy cokernel and equivariant index `-[V]`; its compact plane symbol `x+iξ` has analytic index `1` in the root convention. The statement now defines the finite-chart order-zero/ellipticity convention and the representation-valued index used. A short TikZ rectangle records the orientation and boundary values; the proof does not rely on the diagram.

Dependencies: `def-axiom-of-choice`, finite-chart calculus, controlled realization and the root Hopf-line supplier. The exact primary source p. 525 mode convention and p. 526 rectangle sign were visually checked. The example is B-page-only and is not used as an outside prerequisite.

## Source reading and retrieval

Coverage with exact URL, locator, item mapping, read extent, limitations, actual retry history and fetch stamps is in `research/advanced-qft-supersymmetry-build-2026-10-23-batch-70.coverage.json`.

- Atiyah–Singer I, searchable compilation: `https://math.cs.kitami-it.ac.jp/~kouno/paper/Atiyah_Index.pdf`, paper I §§2, 5–9, printed pp. 488–530; supported items are listed by exact section above. The searchable local text and scanned paper copy under `research/advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/step2-equivariant-index-v1/analytic-comparison/` were inspected. The web PDF parser's content-size limit was not a source retrieval failure; a full-text copy was already present, and the later required fetch check succeeded.
- Atiyah–Singer I, original scan: `https://math.uchicago.edu/~shmuel/tom-readings/ASI.pdf`, visually inspected for Lemma 3.2 (pp. 499–500), Proposition 4.4 and Lemma 4.7 (pp. 505–508), §8 (pp. 524–526), and §9 (pp. 527–529). The mode convention, symbol signs and bundle domains were checked against the authored proofs.
- Stefan Haller, *The Atiyah–Singer Index Theorem*: `https://www.mat.univie.ac.at/~stefan/files/ASIT/ASIT.pdf`, complete relevant §§III.3–III.6, printed pp. 113–133, read from the full lecture notes. The notes explicitly defer several symbol estimates to Hörmander; the assigned local proofs supply those estimates and all equivariant/controlled extensions.

`source-fetch-check --stamp` succeeded for all four coverage source entries. There were no failed source retrievals, source drops or `source_resolution` blockers. The exact paper, lecture-note and item locators and per-item dispositions remain in coverage.

## Validation and readiness

Proof contracts are in `research/advanced-qft-supersymmetry-build-2026-10-23-batch-70.proof-contracts.json`; every numbered proof step is mapped to the final proof text and its exact final tags. Supplier excerpts match the current inspected statement sections. Boundary cases, finite-check dispositions and the author self-audit limits are recorded. The scoped proof-contract check passed all five items with zero errors or warnings. Source coverage and the empty cross-batch record match the approved inventory.

Final checks after the last item edits:

- `proof-layout.mjs` on the five changed items: 5 items, 53 steps, 0 defects.
- `precheck.mts` on the five changed items: all five passed direct format checks.
- `rendercheck.mjs` on the five items and two pages: all 7 files passed math and YAML rendering checks.
- `content-policy.mjs` on the approved batch manifest: scope 5, 0 errors, 0 warnings.
- `depcheck.mjs --items-file` on the five items and their dependency closure: 0 errors, 0 warnings.
- `item-dependency-levels.mjs check` on the run: 453 items across 142 pages, maximum level 15; passed.
- `source-fetch-check.mjs --coverage ... --stamp`: all 4 declared source entries verified and stamped.
- `statement-first-check.mjs` checked all 453 run items and found one unrelated existing defect: `op-aqft-fusion-two-category-anomaly-classification` has a `Status references` section that does not immediately follow its complete statement. It is outside this assigned scope and was left unchanged; the five assigned items passed.
- The run-level `proof-contract-coverage.mjs` invocation checked all 453 items and reported missing contracts outside this batch, so it is not a scoped pass. The explicit batch-70 `proof-contract.mjs --items ...` check passed all five assigned contracts; no unrelated contract files were changed.

All five item records were written supplier-first as `ready` with the exact declared dependency IDs and evidence. `loadStep1Record` plus `step1Decision` rechecked each current record against its item/dependency hash; all five returned `closed: true` on their declared A/B pages. These are supplemental authorship-readiness records only. No missing proof or supplier gap is known for this pair. Independent Step-2 review and downstream gates remain pending.
