# Step 3a reader report — batch 31

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader (`reader-31`)  
Batch: `31`

## Scope and live state

I recomputed the run status from `.autopilot/inverse-problems-knot-theory-all-109-2026-10-19`. The run is active at `3a-read`; before this dispatch, batch 31 was not covered. The current manifest assigns two draft pages and 26 draft items. The older batch notes describe a smaller, earlier authoring state (19 A-page items and unresolved escalations); I used the live manifest, current page files, current item files, and current dependencies for this review.

## Opened pages

- `library/inverse-problems/spatial-bv-and-total-variation-regularization.md` — A page, draft, `page_layout: compact-v1`, empty body. Its 23-item inventory and seven page prerequisites match the current manifest.
- `library/inverse-problems/spatial-bv-and-total-variation-regularization-examples.md` — B page, draft, `page_layout: compact-v1`, empty body. Its three examples and A-page prerequisite match the current manifest.

I opened the seven prerequisite page frontmatters. All are published and resolve: `radon-measures-and-the-riesz-markov-kakutani-theorem`, `the-lp-spaces-holder-minkowski-and-riesz-fischer`, `bounded-variation-and-riemann-stieltjes`, `tempered-distributions-and-the-fourier-transform`, `strongly-continuous-semigroups-and-hille-yosida`, `sard-theorem-and-transversality`, and `hausdorff-measure-and-hausdorff-dimension`.

## Opened assigned items

The 23 A-page items were read in dependency-level order, suppliers before consumers:

- Level 0: `lem-ip-distributional-radon-representation-unique`; `lem-ip-vector-radon-variation-is-radon`; `lem-ip-open-euclidean-locally-finite-smooth-partition`; `lem-ip-smooth-compact-support-dense-in-c0`; `lem-ip-lw-integral-inequality`; `lem-ip-bv-zero-gradient-constant-on-connected-domain`; `lem-ip-l1-sequence-compactness-by-cell-averages`; `lem-ip-lipschitz-graph-area-and-calculus-under-countable-choice`.
- Level 1: `def-ip-spatial-bv-and-distributional-tv`; `lem-ip-unit-vector-density-has-scalar-variation`; `lem-ip-euclidean-radon-representation-under-countable-choice`.
- Level 2: `lem-ip-bv-test-field-characterization-and-lsc`; `def-ip-boundary-tv-conventions`; `lem-ip-bv-smooth-coarea`; `lem-ip-bv-one-sided-trace-on-lipschitz-graph`.
- Level 3: `lem-ip-bv-strict-approximation`; `lem-ip-bv-lipschitz-trace-and-zero-extension`.
- Level 4: `lem-ip-bv-coarea-formula`; `lem-ip-bv-sobolev-inequality`; `lem-ip-bv-extension-and-translation`.
- Level 5: `lem-ip-bv-compactness-lower-semicontinuity`; `lem-ip-bv-extension-translation-and-coarea`.
- Level 6: `lem-ip-finite-perimeter-relative-isoperimetry`.

The three B-page items were then read against their suppliers: `ex-ip-bv-jump-across-smooth-curve`; `cex-ip-oscillatory-sequence-unbounded-tv`; `ex-ip-neumann-constants-and-dirichlet-boundary-cost`.

## Dependency and source review

The current item `deps` match the manifest. I opened the exact Statement or Definition used from each of the 52 external direct item dependencies; all resolve to published items. Those dependencies are:

`cor-change-of-variables-for-compactly-supported-functions`, `cor-hausdorff-measure-under-similarities`, `def-calligraphic-l-p-on-a-measure-space`, `def-compact-support-c-c-and-c-zero-on-an-lch-space`, `def-connected-space`, `def-countable-choice`, `def-distributional-derivative`, `def-l-one-approximate-identity-on-rn`, `def-l-p-space-as-a-quotient-by-null-functions`, `def-mollifier-family-generated-by-a-unit-mass-smooth-bump`, `def-radon-measure-on-an-lch-space`, `def-regular-borel-measure-on-an-lch-space`, `def-regular-complex-borel-measure-on-an-lch-space`, `def-translation-of-a-function-on-rn`, `lem-bounded-real-c-zero-functional-is-a-difference-of-positive-functionals`, `lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves`, `lem-local-graph-flux-from-fubini-and-the-fundamental-theorem`, `lem-rat-embeds-dense`, `lem-smooth-bump-between-concentric-euclidean-balls`, `lem-surface-integral-is-independent-of-c-one-boundary-charts`, `prop-mollifier-families-are-l-one-approximate-identities`, `thm-absolutely-continuous-functions-have-integrable-derivatives`, `thm-borel-sets-are-caratheodory-measurable-for-metric-outer-measures`, `thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral`, `thm-c1-lipschitz-ac-bv-hierarchy`, `thm-caratheodory-outer-measure-theorem`, `thm-continuous-implies-integrable`, `thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign`, `thm-dominated-convergence`, `thm-euclidean-inverse-function-theorem`, `thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures`, `thm-fatou-lemma`, `thm-ftc-second-part`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-hausdorff-measure-under-lipschitz-maps`, `thm-hausdorff-n-measure-is-proportional-to-lebesgue-measure`, `thm-heine-borel-rn`, `thm-holder-inequality-for-integrals`, `thm-l-one-approximate-identities-converge-in-l-p`, `thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n`, `thm-lebesgue-measure-is-a-radon-measure-on-rn`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`, `thm-linear-change-of-variables-for-lebesgue-measure`, `thm-monotone-convergence-for-the-integral`, `thm-morse-sard-for-euclidean-maps`, `thm-product-of-countable`, `thm-rationals-countable`, `thm-recursion`, `thm-tonelli-and-fubini-for-completed-product-measures`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, and `thm-total-variation-is-a-measure`.

I checked the axiom strength and normalization at each use, especially Countable Choice versus Dependent Choice in the Radon representation, trace, compactness, and coarea chain. The Hausdorff-area supplier defines `sigma_m = c_m^{-1} H^m`; the smooth coarea proof explicitly uses that normalized graph measure (and counting measure in dimension one), so its surface-area and perimeter factors agree.

For independent source context, I opened Panu Lahti’s Oxford BV minicourse. Its Theorem on coarea states `|Du|(Omega) = integral_R P({u>t}, Omega) dt` (PDF p. 39); the complete smooth-approximation, lower-semicontinuity/Fatou, and reverse-test-field argument is given in proof parts I–IV on PDF pp. 40–43. The definition of Hausdorff measure on PDF p. 5 includes the normalizing factor `omega_k / 2^k`. This corroborates the local coarea chain; the assigned items supply their own proofs. [Oxford BV minicourse](https://www.maths.ox.ac.uk/system/files/attachments/BV_minicourse_Slides_Version3_0.pdf)

I also checked Terra’s Theorem 7.39 statement (printed p. 249): on a Lipschitz epigraph it gives a bounded trace and the Gauss–Green identity with outward normal; its proof occupies the following section. The assigned graph-trace item proves the stronger vertical-slice construction locally, so I relied on that complete local argument rather than treating the source citation as a substitute proof. [Terra, *Introduction to Geometric Measure Theory*](https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf)

Iglesias, Mercier, and Scherzer distinguish the full-space/Dirichlet variation of the zero extension from Neumann variation computed inside the open domain in §1 (PDF pp. 1–2); this agrees with the boundary-TV definition. [Iglesias–Mercier–Scherzer](https://arxiv.org/pdf/1711.06495)

## Review and edits

I checked every assigned title, uninterrupted Statement/Definition/Example description, relevant Facts and Assumptions, proof step, witness, computation, citation placement, and page inventory. The proofs and witnesses are supported by their stated hypotheses and the cited local supplier claims. The oscillatory sequence has exact interior jump variation `2N`; the disk example has the stated outward-normal sign and `2 pi` variation; the Neumann/Dirichlet example follows from the zero-extension convention and disk calculation.

No TikZ, tikzcd, or other diagram was present in the assigned items. No confirmed defect required an edit. No item, page, proof contract, or `verification.judge` record was changed; therefore no reflow, precheck, or proof-layout run was required. There are no uneditable defects to report.

## Page verdicts

- `spatial-bv-and-total-variation-regularization` — passes this reader review: frontmatter-only A page, matching 23-item manifest inventory, seven published prerequisites, no summary body.
- `spatial-bv-and-total-variation-regularization-examples` — passes this reader review: frontmatter-only B page, matching three-example inventory, A-page prerequisite, no summary body.

## Blocker

None.

## Coverage note

All assigned pages, all 26 assigned items, the 52 direct external dependency statements/definitions, and the seven prerequisite page frontmatters were opened. The assigned item proofs were reviewed in full. I did not independently re-prove the complete internal proofs of already-published dependency items; only their exact claims used by this batch were checked, together with the source passages listed above.
