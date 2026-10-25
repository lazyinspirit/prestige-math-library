# Step 3a reader report — batch 33

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Batch: `33`  
Role: read-only review with authorized repairs to assigned in-flight items

## Scope and opened inventory

The assigned manifest is `research/advanced-qft-supersymmetry-build-2026-10-23-batch-33.pages.json`.

Assigned pages opened:

- `qftx-susy-moduli-and-dualities` (A page)
- `qftx-susy-moduli-and-dualities-examples` (B page)

Both page carriers contain only YAML frontmatter, have `page_layout: compact-v1`, and have no Markdown body or generated summary. Their item inventories and companion relationship match the manifest. The A page contains 12 items and the B page contains 3 examples.

The A page's 14 declared page prerequisites were opened at their current carriers: `qftx-nonabelian-yang-mills-model`, `qftx-susy-algebra-and-multiplets`, `qftx-susy-extended-actions`, `qftx-susy-n1-superspace-and-actions`, `qftx-susy-ward-and-nonrenormalization`, `integration-of-forms-and-the-general-stokes-theorem`, `product-measures-and-the-fubini-tonelli-theorems`, `the-lebesgue-integral-and-the-convergence-theorems`, `the-lp-spaces-holder-minkowski-and-riesz-fischer`, `aqft-susy-math-foundations`, `qftx-abelian-higgs-vortex-existence-mathematics`, `qftx-instanton-topology-mathematics`, `countability-and-uncountability`, and `relations-functions-and-quotients`.

Assigned item carriers opened in dependency order:

1. `post-qftx-n2-pure-su2-ultraviolet-model`
2. `def-qftx-susy-vacuum-moduli-data`
3. `def-qftx-n2-coulomb-branch-data`
4. `def-qftx-n2-monopole-local-dual-higgs-model`
5. `def-qftx-n2-dual-higgs-flux-tube-sector`
6. `post-qftx-n2-seiberg-witten-effective-solution`
7. `pthm-qftx-n2-bps-central-charge-mass`
8. `pthm-qftx-n2-dual-higgs-vortex-flux-and-tension`
9. `def-qftx-n2-nonlinear-magnetostatic-flux-cylinder`
10. `pthm-qftx-n2-nonlinear-local-electric-flux-confinement`
11. `pthm-qftx-n2-linear-monopole-bps-vortex-bound`
12. `pthm-qftx-n2-monopole-condensation-after-n1-perturbation`
13. `ex-qftx-susy-u1-pair-classical-vacuum-moduli`
14. `ex-qftx-n1-sqcd-su-nf-cubic-anomaly-check`
15. `ex-qftx-n2-monopole-perturbed-vacuum`

Dependency items inspected for the assigned claims included `def-qftx-physical-superspace-normalization`, `def-qftx-super-poincare-algebra-4d`, `def-qftx-superspace-grassmann-algebra`, `def-qftx-n1-chiral-superfield`, `def-qftx-n1-vector-superfield`, `post-qftx-nonabelian-yang-mills-model`, `def-qftx-unitary-super-poincare-representation`, `thm-qftx-n-extended-central-charge-bounds`, `def-axiom-of-choice`, `thm-general-stokes-theorem`, `cor-cauchy-schwarz-inequality-for-l-two`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-monotone-convergence-for-the-integral`, `def-qftx-critical-abelian-higgs-divisor-data`, `lem-qftx-taubes-disk-barriers-and-monotone-iteration`, `thm-qftx-taubes-arbitrary-divisor-plane-vortex`, `thm-qftx-critical-vortex-global-energy-minimum`, and `thm-qftx-critical-flux-cylinder-linear-energy`. Context items opened from the page prerequisites included `post-qftx-n2-vector-hypermultiplet-model` and `pthm-qftx-n1-wilsonian-f-term-nonrenormalization`.

The assigned proof-contract file and current source-coverage/source-resolution records were inspected as evidence. They were not treated as scientific verdicts.

## Independent findings and repairs

The model deductions are conditional on their explicitly adopted data. The local N=2 SU(2) postulate distinguishes the empty microscopic hypermultiplet set from the emergent infrared monopole fields. The Seiberg–Witten curve, differential, periods, monodromies, and monopole-patch identification are clearly marked as source-proposed inputs. The central-charge inequality is derived from the mathematical positive-representation result; it does not claim that every formal lattice label is realized by a stable state. The local monopole vacuum, flux quantization, energy bounds, nonlinear limiting slope, and exact linear-truncation results are correctly separated by their hypotheses. No item treats experimental or statistical evidence as a proof.

I repaired these confirmed definition and statement gaps:

- `def-qftx-susy-vacuum-moduli-data`: specified the Minkowski coordinates, mostly-plus metric, and raised-derivative convention used by its kinetic term; made the dimensionlessness of `g` explicit; replaced the undefined “tree-level scalar potential” label with “classical scalar potential.” I checked its assigned consumers `def-qftx-n2-coulomb-branch-data`, `ex-qftx-susy-u1-pair-classical-vacuum-moduli`, and `ex-qftx-n2-monopole-perturbed-vacuum`. Their uses depend on the F/D zero set and compact-group quotient, which this repair leaves unchanged.
- `ex-qftx-susy-u1-pair-classical-vacuum-moduli`: replaced “tree-level model” with “classical model” in the Example and its Facts entry. The gauge quotient argument, including the zero-product case, is unchanged.
- `def-qftx-n2-nonlinear-magnetostatic-flux-cylinder`: defined the cylinder connection, curvature components, and charged covariant derivatives for all three spatial indices; specified the tangential end traces and the unconstrained normal component. This supplies the objects used in the displayed three-dimensional energy. I checked its assigned consumers `pthm-qftx-n2-nonlinear-local-electric-flux-confinement`, `pthm-qftx-n2-linear-monopole-bps-vortex-bound`, and `pthm-qftx-n2-monopole-condensation-after-n1-perturbation`; their uses agree with the clarified cylinder data.
- `pthm-qftx-n2-bps-central-charge-mass`: stated the rest-fiber momentum conditions `P^0 = M I` and `P^j = 0`, and specified that all N=2 anticommutator products are defined on the common domain. The proof still applies the supplied central-charge bound and preserves the no-state-existence/no-stability caveat.
- `pthm-qftx-n2-linear-monopole-bps-vortex-bound`: explicitly defined `E` by the transverse energy functional for the linear truncation before asserting the BPS identity. Its assigned consumer `pthm-qftx-n2-monopole-condensation-after-n1-perturbation` was checked against the resulting full-model bound, actual collar result, and separate nonlinear limitation.

For these repairs, I updated the six affected current-source excerpts in `research/advanced-qft-supersymmetry-build-2026-10-23-batch-33.proof-contracts.json`. No changed item had a `verification.judge` record to remove.

## Source and dependency review

The Seiberg–Witten primary paper `hep-th/9407087v1` ([PDF](https://arxiv.org/pdf/hep-th/9407087v1); [HTML](https://arxiv.org/html/hep-th/9407087)) was checked at relevant passages in §§1.1–1.3, 2.1, 3, 5.1–5.6, and 6, especially §5.6 equations (5.17)–(5.21), the curve and differential in §5, and the period behavior in §6. Its N=2 vector/hyper distinction, pure-SU(2) model, local monopole superpotential and F/D equations, curve and differential, period normalization, and proposed singularity data match the items' stated scope. The source describes a proposal and qualitative confinement interpretation; it does not supply the authored vortex-existence or local variational proofs.

Tong, *Supersymmetric Field Theory* ([PDF](https://davidtong.org/pdfs/teaching/supersymmetric-field-theory/susy.pdf)), §§4.3.1 (printed pp. 112–116) and 6.5.1 (printed pp. 198–200), supports the compact-gauge F/D quotient convention, the one-flavor U(1) setup, and the proposed SQCD flavor representations and anomaly arithmetic. Seiberg, `hep-th/9411149v1` ([HTML](https://arxiv.org/html/hep-th/9411149)), §2–3, supports the proposed magnetic antifundamental and meson multiplicities; the local anomaly arithmetic is correct and is not presented as proof of duality. Tong, *TASI Lectures on Solitons* ([full PDF](https://davidtong.org/pdfs/teaching/solitons/tasi.pdf); [Lecture 3 PDF](https://davidtong.org/pdfs/teaching/solitons/tasi3.pdf)), §§3.1–3.2 (printed pp. 70–73), gives a critical but different U(N) vortex model and the square-completion/tension normalization. Its §4.6.2 (printed pp. 106–108) describes monopoles as kinks on flux tubes in a different SQCD model and states that no analytic nontrivial bulk solution is known there; neither source is used as an existence proof for the selected Seiberg–Witten patch.

The current Batch 62 mathematical vortex suppliers were checked in their current source bytes, including their stated hypotheses and local proof steps needed here. Their claims support the exact critical branch; the nonlinear theorem's separate coercive estimate, explicit compact-core test profile, gauge cleanup, collar construction, and limiting-infimum argument do not assume a critical solution or minimizer. The existing cross-batch page-edge rows for `qftx-susy-extended-actions` and `qftx-susy-ward-and-nonrenormalization` remain `open` in the batch dependency record. I inspected the current page carriers and relevant context: the assigned pure model states its empty-matter input independently, so it does not infer purity from the one-hypermultiplet postulate on the former page. I found no assigned claim that relies on the unresolved page edges as logical proof premises.

No TikZ or tikzcd diagrams occur in the assigned carriers, and the exposition does not require a diagram for its arguments.

## Page verdicts

- `qftx-susy-moduli-and-dualities`: **Pass after the listed repairs.** The A-page inventory, compact layout, and item homes match the manifest; the body is empty. The current cross-batch page-edge checks noted above remain an owner/workflow disposition, not an unrepaired mathematical defect in this page's claims.
- `qftx-susy-moduli-and-dualities-examples`: **Pass after the listed repair.** The B-page inventory and companion relation match the manifest; the body is empty. All three example computations are complete and appropriately limited.

## Validation and remaining issues

After the final edits, reflow and precheck were run on all five changed item paths. Every precheck passed; the definition items had zero proof-step rows to check. The required single proof-layout run on the five changed paths reported 5 items, 12 numbered steps, and 0 defects.

No confirmed defect remained in the assigned editable items or pages. No confirmed defect in an outside published or in-run dependency required a routed finding. The Seiberg–Witten and Tong sources were independently opened at the relevant sections; Bilal is cited by the current items but was not independently opened in this reader pass, and the original Taubes proof text remains unavailable as disclosed by its current mathematical supplier. The local authored proof and the opened mathematical prerequisites were the basis for the vortex dependency review.

The reader audit is complete. Native cross-batch page-edge closure remains a workflow hold for owner disposition: the existing dependency record still marks the edges to `qftx-susy-extended-actions` and `qftx-susy-ward-and-nonrenormalization` as open. This is not an unrepaired content finding in the assigned items or pages.
