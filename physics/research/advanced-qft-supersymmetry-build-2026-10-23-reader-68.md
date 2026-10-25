# Step 3a reader report — batch 68

## Scope and opened inventory

Reviewed the assigned manifest `research/advanced-qft-supersymmetry-build-2026-10-23-batch-68.pages.json`, both listed page carriers, all nine listed item carriers, and the direct mathematical suppliers needed for the claims.

Pages:

- `library/quantum-field-theory-mathematics/qftx-coupled-penrose-vanishing-on-the-round-four-sphere.md` (A)
- `library/quantum-field-theory-mathematics/qftx-coupled-penrose-vanishing-on-the-round-four-sphere-examples.md` (B)

Assigned items, read in their mathematical chain:

- `items/def-qftx-coupled-penrose-incidence-geometry.md`
- `items/lem-qftx-coupled-penrose-positive-orientation-asd.md`
- `items/lem-qftx-coupled-penrose-round-sphere-curvature.md`
- `items/lem-qftx-coupled-penrose-fibre-dolbeault.md`
- `items/lem-qftx-coupled-penrose-injective-edge.md`
- `items/lem-qftx-coupled-penrose-operator-coefficient.md`
- `items/thm-qftx-coupled-penrose-vanishing.md`
- `items/ex-qftx-penrose-flat-summand-vanishing.md`
- `items/ex-qftx-penrose-global-injectivity-boundary.md`

Dependency context opened:

- Published mathematics: `def-complex-manifolds-and-holomorphic-vector-bundles`, `def-axiom-of-choice`, `def-riemannian-hodge-star`, `thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology`, and `thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition`.
- Current-run batch 67 draft suppliers: `lem-qftx-gaga-projective-cover-laurent-cohomology` and `thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology`.
- Downstream current-run consumers checked because the vanishing statement was clarified: `lem-qftx-asd-twistor-vanishing-and-monad-reconstruction` and `lem-qftx-asd-penrose-kernel-vanishing` (batch 60). Their uses of the two vanishing conclusions remain valid.

The A and B pages contain only YAML frontmatter, preserve their inventories and `page_layout: compact-v1`, and have no summaries. The sole TikZ diagram is the commutative square in the incidence definition; its objects, inclusions, projection and restriction map agree with the text.

## Mathematical review and source evidence

The local chain is sound under its stated full-AC, analytic Dolbeault-comparison, metric, incidence and ASD hypotheses. The negative-twist fibre groups follow from the two-chart Laurent calculation and the analytic-to-smooth Dolbeault comparison. The fibrewise harmonic projection is well defined and its zero kernel follows from the horizontal coefficient bundle $\mathcal O(-1)\oplus\mathcal O(-1)$. The corrected form calculation uses the stated integral-normalized harmonic generator, retains the distinction between the constant-$t$ and metric-horizontal splittings, and yields the local residual `∇_A*∇_A + 2`. The round-sphere trace convention gives `R = 12`, so the scalar term is `R/6 = 2`. Integration by parts then proves both cohomology vanishings; the dual connection remains unitary ASD. The flat-summand and overlap examples follow from the same direct-sum, representative-independence and injectivity arguments.

I downloaded and visually read Rawnsley, “On the Atiyah-Hitchin-Drinfeld-Manin vanishing theorem for cohomology groups of instanton bundles,” *Mathematische Annalen* 241 (1979), printed pp. 46–56 ([scan](https://gdz.sub.uni-goettingen.de/download/pdf/PPN235181684_0241/LOG_0014.pdf)). Proposition 5 and Proposition 6 and the theorem on pp. 49–50 give the unique mixed correction and the `D*D + 2` identity with scalar coefficient `R/6`; the explicit local calculation is on pp. 55–56. Donaldson, “The ADHM construction of Yang-Mills instantons,” arXiv:2205.08639, §4, printed p. 7 ([pdf](https://arxiv.org/pdf/2205.08639)), displays `R/8`; the item records that discrepancy and does not use it. A search-result excerpt for Wells, “The Conformally Invariant Laplacian and the Instanton Vanishing Theorem,” §3, Theorem 3.2, printed p. 494 ([book text](https://dokumen.pub/seminar-on-differential-geometry-am-102-volume-102-9781400881918.html)), also reports `R/6`; I did not retrieve the full Wells chapter. The local derivation and the fully read Rawnsley calculation support `R/6`.

## Repairs

Added the defining wedge-pairing convention for the two-form Hodge star to `lem-qftx-coupled-penrose-positive-orientation-asd`. In `lem-qftx-coupled-penrose-operator-coefficient` and `thm-qftx-coupled-penrose-vanishing`, stated `F_A = ∇_A²` and `F_A⁺ = (F_A + *_g F_A)/2 = 0` explicitly, fixing the positive-orientation ASD convention. The theorem statement also now states the incidence alpha-plane generators, tautological twist, analytic sheaf/Dolbeault quotient, and fibrewise dual convention needed to read its conclusion without an undefined term.

Refreshed the seven affected batch-68 proof-contract citation quotations. No proof argument or verification stamp was changed; none of the three repaired carriers had a `verification.judge` record to remove.

Validation after the repairs:

- Reflow reported unchanged carriers for all three edited items.
- Precheck passed for all three edited items.
- `node tools/physics-support/proof-layout.mjs` on the three edited paths reported 3 items, 12 steps, 0 defects.

## Page verdicts

- **A — `qftx-coupled-penrose-vanishing-on-the-round-four-sphere`:** no page-prose or inventory defect. Its item chain is mathematically sound under the authored conditions, with the ASD convention repair recorded above.
- **B — `qftx-coupled-penrose-vanishing-on-the-round-four-sphere-examples`:** no page-prose or inventory defect. Both examples are correctly qualified consequences of the assigned theorem and edge construction.

## Unedited findings and blockers

No unresolved mathematical defect was found in the assigned items or pages, so the reader findings array is empty. The two batch-60 downstream consumer texts were checked and remain mathematically unaffected. Their proof-contract citation quotations still contain the pre-repair theorem statement; those contracts are outside this batch’s write scope and need owner-side refresh if exact-source quotation currency is required.

The three repaired item statements no longer byte-match the `statement` mirrors in the batch-68 manifest. Manifest editing is outside this reader’s authorized carrier scope; the owner must reconcile those mirrors before a gate that requires current manifest/content agreement. No other blocker was identified.

## Coverage note

All assigned pages and items and the listed direct suppliers were opened. The first physical file-opening sequence was not strictly supplier-first; supplier statements were opened and checked before the dependent arguments were finalized. Rawnsley’s relevant pages and Donaldson’s discrepancy were read; Wells was checked only through the search excerpt noted above. The bounded finite-smoke routines were not executed and are not used as proof evidence.
