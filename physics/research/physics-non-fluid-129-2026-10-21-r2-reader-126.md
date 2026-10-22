# Step 3a reader report — batch 126

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Assigned pair: `tgrx-ads-effective-boundaries` and `tgrx-ads-effective-boundaries-examples`

## Page verdicts

- `tgrx-ads-effective-boundaries` (A, draft): no page-frontmatter defect. Its assigned items received the repairs recorded below; their required candidate, homology, scheme, and empirical-scope qualifications remain intact.
- `tgrx-ads-effective-boundaries-examples` (B, draft): no page or item defect found. The replica-saddle remark stays limited to selected models and its cited path-integral assumptions.

Both page files contain frontmatter inventories only. No page prose was edited.

## Opened inventory

Assigned items are listed in dependency order; direct supplier statements and proof clauses used by each claim were opened before the consumer verdicts were finalized:

1. `lem-tgrx-locally-finite-relative-chain-model`; its eight direct mathematical suppliers: `def-borel-moore-homology`, `def-relative-singular-homology`, `def-singular-chain-complex-of-a-pair`, `lem-singular-boundary-descends-to-relative-chains`, `thm-the-singular-boundary-squares-to-zero`, `thm-local-homology-detects-interior-points-boundary-points-and-dimension`, `def-relative-fundamental-class-and-boundary-orientation`, and `def-simplicial-subcomplex-star-closure-and-link`.
2. `def-tgrx-ads-regulated-generalized-entropy`; direct suppliers `def-tgr-regulated-generalized-entropy`, the chain-model lemma above, `def-countable-choice`, `def-riemannian-volume-density`, and `prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density`; also `def-tgr-finite-cutoff-outside-entropy` for the finite partial-trace argument.
3. `post-tgrx-semiclassical-ads-dictionary`; direct suppliers `def-tgrx-ads-regulated-generalized-entropy`, `prop-tgrx-code-area-entropy`, `def-tgr-regulated-generalized-entropy`, and `pthm-tgrx-noether-first-law`.
4. `pthm-tgrx-two-saddle-transition` and `rem-tgrx-island-assumptions`; both use the postulate above.

Opened both assigned page files, all eight page-level prerequisite page carriers (`tgrx-finite-code-holography`, `tgrx-noether-entropy`, `tgr-phs05`, `proper-hyperresolutions-and-mixed-hodge-restriction-images`, `relative-homology-excision-and-mayer-vietoris`, `singular-chains-and-singular-homology`, `orientations-poincare-lefschetz-and-alexander-duality`, and `simplicial-complexes-and-simplicial-homology`), the assigned batch manifest, cross-batch table, proof contracts, notes and coverage record. The authoring records were treated as navigation evidence, not acceptance. The exact math-import entries were queried in `research/math-imports.json`; no supplier was edited.

## Repairs and evidence

- In `lem-tgrx-locally-finite-relative-chain-model`, the last Statement clause previously asserted the relative homology criterion from a boundary decomposition alone. That did not ensure that either boundary chain represented a relative homology class: an ordinary triangulated disk with its boundary split into two arcs and `B = ∅` has `∂r = a + x`, but `a` and `x` each have nonzero endpoint boundary. The opened relative-homology supplier defines classes using the kernel of the relative boundary map, and the local proof’s Step 2.1 likewise requires both chains to be relative cycles. I added the explicit conditions `∂a, ∂x ∈ C_{n-2}^{lf}(Σ;B)` to the triangulated-region clause and its Step 3.1 argument, while retaining `∂r = a + x + b` with `b` supported in `B`. The assigned consumer `def-tgrx-ads-regulated-generalized-entropy` supplies `∂a_X, ∂x ⊂ ∂A ⊂ B_A` and an ambient witness, so its use satisfies the repaired hypotheses. The proof contract’s Step 3.1 derivation was synchronized.
- In `def-tgrx-ads-regulated-generalized-entropy`, `R_X` named both the supplied bulk region and, later, the relative chain witness. I kept `R_X` for the region and `r_X` for the witness. I also made the time orientation, future causal cone, spacelike condition, and normal variation explicit; clarified compactness and the relative-chain data; and stated the finite partial-trace and Riemannian-measure inputs without inline links. The exact references remain in `Definition references`. Its direct consumer, the postulate, was checked against the fixed anchor, memberwise chain condition, and explicit orthogonality requirement; its downstream theorem and remark were also reviewed.
- In `post-tgrx-semiclassical-ads-dictionary`, I removed inline links from the Postulate text, retaining them in `Postulate references`. I made the conformal boundary, extended time orientation, causal/inextendible-curve convention, boundary-inclusive Cauchy condition, code-state type, candidate geometry, and variation conditions explicit. The postulate remains an adopted model premise; the finite matrix proposition and restricted Noether theorem are not treated as deductions of the dictionary. Its consumers, `pthm-tgrx-two-saddle-transition` and `rem-tgrx-island-assumptions`, were reviewed against the current minimum rule and scope.
- In `pthm-tgrx-two-saddle-transition`, I moved the postulate link out of the Statement into the existing `Statement references` section. The mathematical claim and proof are unchanged.

No `verification.judge` record was present on the repaired items. No change was needed to the B-page remark. The remaining dependencies and citations reviewed supplied the claimed chain, local-homology, finite-entropy, unit, and scheme conventions with the stated hypotheses; no unresolved defect remains in the assigned items.

## Source and diagram review

The source passages support the restricted, non-empirical framing. Harlow’s [Jerusalem Lectures](https://arxiv.org/html/1409.1231), §§6.2.3 and 6.10, treat the dictionary/semiclassical-regime question separately and state RT/HRT as a leading-order proposal with anchoring, homology, and least-area selection. Almheiri et al., [The entropy of Hawking radiation](https://arxiv.org/html/2006.06872), §§6, 8, and 10, give the generalized-entropy and island prescriptions and the replica continuation; §11.2 explicitly leaves the gravitational Euclidean path integral, saddle inclusion, contour, cutoff, and exact-state questions unresolved. Saad, Shenker, and Stanford, [JT gravity as a matrix integral](https://arxiv.org/html/1903.11115), §1 and §§6.1–6.3, delimit their result to the JT genus expansion and discuss ensemble/non-disordered and higher-dimensional limitations. These sections do not support a universal four-dimensional entropy or unitarity claim, and the assigned items do not make one.

The theorem’s TikZ plot matches the symmetric example: the dashed branches have opposite slopes, and the blue curve follows the lower branch on each side of `t₀`. No diagrams occur in the other assigned items, and their exposition does not require one.

## Checks and blockers

- Reflow: all four changed items reported unchanged.
- Precheck: the lemma, postulate, and theorem passed; the definition was included in the command and is not a proof-bearing carrier (`0 checked, 0 failing` when run separately).
- Proof layout: four items, eight proof steps, zero defects.
- Proof contracts: the repaired lemma derivation and the current postulate excerpts used by its theorem and remark are synchronized.
- Blocker: none. No defect remains uneditable in this batch.
