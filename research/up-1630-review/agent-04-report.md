# Agent 04 U-P review report

## Completion and decision counts

Reviewed all 163 assigned published items in `agent-04.jsonl` order. Each has one primary receipt appended before the next item was opened. Later root-directed or metadata amendments are linked by `amends_receipt_index`; the latest record for each ID gives the effective decision.

| Decision | Count | Reconciliation class |
|---|---:|---|
| Accept | 114 | bounded-clear |
| Repair | 30 | A-R |
| Defer | 19 | U-P |

The canonical ledger, page registry and repository-wide validation remain under root coordination. No build/autopilot transition or commit was run.

## Repairs

The 30 repaired items received focused precheck, rendercheck and diff inspection, as recorded item by item in the receipts. Definition/remark precheck runs had zero proof-bearing units where applicable. Every reported focused check passed after any local formatting correction. Stale verification stamps were removed after edits.

- `ex-zeta-zero-equals-minus-one-half` — Changed only this example’s title, dependency, premise and verification proof to an elementary local continuation; the displayed value is unchanged.
- `ex-sl2-casimir-and-its-highest-weight-eigenvalue` — Kept the example claim and its Killing-form calculation; replaced only the scalar-action step with the direct commutator computation and removed the now-unused dependency and stale verification stamps.
- `ex-banach-fixed-point-for-square-roots` — Replaced only the interval-closedness argument with explicit complement balls, narrowed [L2] to the choice-free subspace direction, removed three unused dependencies and stale verification stamps; all example claims remain unchanged.
- `ex-a-proper-smooth-exhaustion-of-the-open-unit-ball` — Retained the explicit example, supplied the compact-preimage step, removed only the unused global dependency and premise, and removed stale verification stamps.
- `fs-uniform-approximation-is-the-right-global-notion-on-every-noncompact-manifold` — Kept the false claim and its F,ε witness; supplied one explicit smooth family, removed only the unnecessary Whitney dependency/premise and stale verification stamps.
- `prop-euler-characteristic-is-multiplicative-under-the-finite-kunneth-hypotheses` — Kept the Statement and conclusion; replaced the unqualified field-corollary dependency with the directly used PID Kunneth, exact-localization and AC dependencies, and expanded only the rank step.
- `def-virtual-character-and-character-ring-of-a-finite-group` — Kept the Definition section byte-for-byte; added only the Maschke dependency and one closure justification in Remarks, and removed stale verification stamps.
- `ex-betti-numbers-residue-field-regular-ring` — Added AC to the Example to cover the regular-local Koszul supplier; published item closure is empty.
- `ex-depth-of-a-union-of-planes` — Added DC to the Example to cover the Depth Lemma route; published item closure is empty.
- `ex-psl-two-seven-and-a-low-rank-coincidence` — Changed only the source locator, Facts/Verification description and stale verification metadata; retained the published Example contract.
- `ex-regular-flat-local-map-with-singular-closed-fibre` — Removed the unused generic supplier, its dependency and extraneous choice assumptions, renumbered the retained definition fact, and removed stale verification stamps; kept the original claim and direct algebra proof.
- `ex-s3-is-split-over-the-rationals` — Replaced the invalid inference with an explicit six-dimensional group-algebra decomposition, swapped the exact supplier, and removed stale verification stamps; the original Example contract is unchanged.
- `fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space` — Removed the invalidated B-example dependency and proved the same plane-series witness directly.
- `lem-a-compact-morse-trajectory-has-single-critical-alpha-and-omega-limits` — Changed only the final proof step to a compactness finite-intersection argument and removed stale verification stamps.
- `lem-base-change-affine-morphisms` — Added one AC premise to Statement/Given and its definition dependency, annotated the affected step and removed the stale verification stamp; left all mathematical conclusions intact.
- `lem-canonical-map-is-natural` — Removed only the unnecessary supplier/dependency and F3 fact, cited the boundedness already in F2, and removed stale verification stamps.
- `lem-multitape-simulation-has-quadratic-time-overhead` — Added setup cost to the running-time bound, including the zero-step case.
- `lem-plane-edge-face-incidence` — Reworked the incidence argument for edge bends and endpoint branches, using the exact relative arc lemma.
- `lem-precompact-trajectory-tail-limit-sets-are-nonempty-compact-connected-and-flow-invariant` — Expanded only the flow fact and invariance step with a compact uniform-time argument; removed stale verification.
- `lem-total-oracle-functional-has-computable-use-bound` — Built the bad-prefix tree and selected infinitely extendible children deterministically to contradict totality.
- `prop-conjugate-gradient-denominators-are-positive-before-convergence` — Changed only the induction calculation to use the linear first slot, then conjugate symmetry; removed stale verification.
- `rem-cauchy-kovalevskaya-theorem-for-a-noncharacteristic-analytic-cauchy-problem` — Narrowed the recorded claim to the real-analytic scalar quasilinear theorem actually documented by the read source.
- `rem-dominated-convergence-theorem` — Corrected the least spike dominator to ceil(1/x)−1; the DCT theorem itself is unchanged.
- `rem-sierpinski-ultrafilter-not-measurable` — Updated only the stale explanatory bullet and removed its stale verification block.
- `thm-a-bounded-above-complex-of-projectives-is-homotopically-projective` — Removed only the conclusion from Given, retained the explicit DC/lift-data condition and existing induction; removed stale verification.
- `thm-layer-cake-formula-for-l-p-powers` — Only the quoted FTC fact and scalar integration step changed; all later arguments and the theorem contract remain intact.
- `thm-number-field-integral-ideal-factorisation-in-zf` — The original localization-and-exponents strategy is preserved; explicit published suppliers and a finite-quotient membership test replace two unsupported steps.
- `thm-serre-class-fibration-transfer` — Changed only the stale supplier attribution and matching AC audit; removed obsolete verification stamps.
- `def-weyl-jacobian-on-a-maximal-torus` — Added AC inherited from the root-set Definition; traced five published consumers and routed the one unqualified proposition.
- `thm-restricted-weyl-group-is-the-reflection-group-of-the-restricted-root-system` — Added the two-sentence deduction from the already cited global Cartan diffeomorphism; removed obsolete verification stamp; no formula or interface changed.

## Deferred items and exact remaining obligations

These 19 items retain U-P. The receipts give the proof-step evidence, supplier contracts and any additional obligations.

- `cor-chebyshev-theta-prime-number-theorem-error` — Resolve whether the theta transformation countable-choice hypothesis can be eliminated in the published chain, or qualify the intermediate completed-zeta/zero-bound/psi interfaces and this corollary with a sound propagation review. The local psi-to-theta calculation alone cannot establish an unconditional result.
- `ex-zeta-minus-two-vanishes-by-the-sine-factor` — Establish a choice-free proof of ζ(−2)=0 from verified published suppliers, or propagate the countable-choice premise through the functional-equation and trivial-zero interfaces to this example.
- `thm-riemann-zeta-classical-zero-free-region` — Supply a proof of the logarithmic-derivative bound under the theorem’s unconditional contract, or propagate countable choice through the completed-zeta/zero-bound interface to this theorem and review its published consumers.
- `thm-completed-riemann-zeta-functional-equation` — Show the theta transformation choice-free under the published contracts, or add countable choice to this Statement and trace all direct and indirect published consumers. In either case, justify that the symmetric integral is entire before evaluating it at 1−s outside Re s>1.
- `prop-a-countable-chart-cover-detects-manifold-null-sets` — Repair/qualify atlas independence under countable choice with valid chartwise null-image arguments, then revisit this target’s unqualified nullity and whether its Statement needs the same assumption.
- `lem-regular-element-reduction-preserves-minimal-resolution` — Qualify this lemma’s Statement with the AC needed to produce the minimal resolution and the cited local algebra, and review published consumers; or supply a complete choice-free existence and projective-dimension argument. The exactness step can avoid Tor comparison via the short exact sequence of complexes, but this alone does not resolve the missing existence assumption.
- `lem-associated-prime-after-power-regular-quotient` — Establish the minimal-support-associated implication for this cyclic L without AC/DC, or qualify this lemma and trace its published consumer closure before classifying it as repaired. The direct consumer lem-depth-bounded-by-associated-prime-quotient-dimension uses the unresolved implication in Proof 2.1.
- `lem-cohen-macaulay-parameter-first-element-regular` — The first-parameter proof still needs an unqualified minimal-support associated-prime implication and zero-divisor criterion, or an explicit choice premise propagated to consumers.
- `lem-localisation-of-cohen-macaulay-module-depth-dimension-equality` — Discharge the depth-localization inequality’s associated-prime route without the unresolved choice-dependent minimal-support step, or qualify and trace the full affected interface.
- `lem-r-one-s-two-intersection-of-height-one-localisations` — Carry sufficient choice through the original Statement and full published consumer closure, or give a complete choice-free replacement for both the AC-qualified depth-zero criterion at Proof 1.1 and DC-qualified primary decomposition at Proof 2.1.
- `lem-regular-local-domain-induction` — The unqualified proof invokes an AC-qualified graded-kernel/Hilbert–Samuel route; its Krull-intersection use also needs a local choice-free separation argument or an explicit premise.
- `lem-rho-shift-intertwines-the-dot-and-ordinary-weyl-actions` — Reconcile the affected reflection/root-system and chosen-positive-system interfaces; the rho-shift calculation itself needs no change.
- `prop-schur-multiplier-of-a-cyclic-group-is-trivial` — Qualify the original proposition and trace published consumers, or provide a fully specified choice-free definition and proof of its multiplier claim.
- `prop-the-grothendieck-group-of-o-has-simple-and-standard-bases` — Reconcile the affected finite-Weyl/positive-root and Harish–Chandra interfaces used by the exact finite-length and central-character suppliers.
- `thm-boundary-topology-is-well-defined-and-quasi-isometry-invariant` — Prove the boundary sequence and two-sided product estimates from established suppliers, or accurately reclassify as externally sourced without claiming a local proof.
- `thm-geometric-hahn-banach-for-subspaces` — Add an appropriate choice premise to this contract and audit its published consumers after the upstream suppliers are reconciled, or supply a proof under a precisely justified alternative principle.
- `thm-harnack-inequality-on-a-ball` — Carry the exact Countable Choice premise through the published mean-value/Harnack route and consumers, or provide a complete proof under a justified alternative premise.
- `thm-linear-isoperimetric-characterisation-of-hyperbolic-groups` — Prove the linear-isoperimetric-to-hyperbolicity direction with an exact diagram argument or record a genuine externally sourced theorem boundary without presenting [A2] as a derived local step.
- `thm-parameters-and-regular-sequences-in-cohen-macaulay-modules` — Resolve the first-parameter associated-prime/zero-divisor proof or carry a justified choice premise through the induction and all published consumers.

## Interface changes and coordination

Seven impact events and impact files record the full published consumer examination for semantic claim changes. The affected origins are `ex-betti-numbers-residue-field-regular-ring`, `ex-depth-of-a-union-of-planes`, `lem-base-change-affine-morphisms`, `fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space`, `rem-cauchy-kovalevskaya-theorem-for-a-noncharacteristic-analytic-cauchy-problem`, `rem-dominated-convergence-theorem`, and `def-weyl-jacobian-on-a-maximal-torus`. Each impact file distinguishes sound uses from necessary changes.

Seven cross-shard repair events route exact affected uses: three Hahn–Banach extension contracts (shards 10, 08 and 01), the spherical mean-value theorem (02), Cohen–Macaulay parameter induction (05), cellular-versus-singular homology comparison (08), and the invariant Weyl Jacobian proposition (09). The source items that depend on unresolved Hahn–Banach, mean-value or parameter-induction suppliers remain U-P. The Weyl Jacobian Definition itself is repaired; its one unqualified consumer was routed to shard09. Root directions were checked through the final audit.

## External sources actually opened

Source claims below are limited to the stated pages or sections; the receipts distinguish these from repository-only supplier reading.

- `lem-plane-edge-face-incidence` — R. Diestel, Graph Theory, 6th ed., Chapter 4 preview, https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf, pp. 95, 97–98 (PDF pages 3, 5–6), Lemmas 4.1.3 and 4.2.2
- `rem-cauchy-kovalevskaya-theorem-for-a-noncharacteristic-analytic-cauchy-problem` — Part III, Analysis of Partial Differential Equations, https://giacomoageno.github.io/LectureNotesAPDE.pdf, PDF pp. 20–24, equation (2.6), data (2.8), Definition 2.18 and Theorem 2.22
- `rem-loglog-quantitative-density-theorem` — Bucić, Nguyen, Scott and Seymour, Induced subgraph density. I, arXiv:2301.10147v3 HTML, Theorem 1.8 and base-2 convention, https://arxiv.org/html/2301.10147
- `thm-affine-closed-immersions-quotient-rings` — The Stacks Project, Lemma 26.10.1, Tag 01IN, https://stacks.math.columbia.edu/tag/01IN
- `thm-bull-free-graphs-are-two-narrow` — Chudnovsky and Safra, The Erdős–Hajnal Conjecture for Bull-free Graphs, https://web.math.princeton.edu/~mchudnov/EHbullfree.pdf, PDF pp. 2–3 and 10–12, assertions 1.3, 1.4, 4.4 and proof of 1.3
- `thm-linear-isoperimetric-characterisation-of-hyperbolic-groups` — Clara Löh, Geometric Group Theory lecture notes (2022), https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf, PDF pp. 177–180, §6.4 Dehn presentations
- `thm-linear-isoperimetric-characterisation-of-hyperbolic-groups` — Brian H. Bowditch, A Course on Geometric Group Theory, https://www.math.ucdavis.edu/~kapovich/280-2009/bhb-ggtcourse.pdf, PDF p. 61 §6.11.2(F4) and p. 66 source notes
- `thm-private-coin-ip-equals-public-coin-ip` — Arora and Barak, Computational Complexity draft, https://theory.cs.princeton.edu/complexity/book.pdf, PDF pp. 168–172, exact Theorem 8.8 and §8.4.1–8.4.2 discussion
- `thm-steiner-triple-systems-exist-exactly-when-v-congruent-one-or-three-mod-six` — Jonathan Davidson, Steiner Triple Systems, https://jjdavidson.github.io/notes/design-theory/03steiner-triple.html, Skolem Construction section with block families and pair proof
- `lem-cyclic-p-fold-power-construction` — Steenrod and Epstein, Cohomology Operations, https://web.archive.org/web/20230124163804if_/https://people.math.rochester.edu/faculty/doug/otherpapers/steenrod-epstein.pdf, PDF pp. 105, 111–119, Chapter VII §§2,4–6
- `thm-adem-relations-for-steenrod-squares` — Steenrod and Epstein, Cohomology Operations, https://web.archive.org/web/20230124163804if_/https://people.math.rochester.edu/faculty/doug/otherpapers/steenrod-epstein.pdf, PDF pp. 124–125, Chapter VIII §1 high-degree coefficient calculation

## Verification and workspace

Receipt audit: 163 primary IDs exactly match the assignment order; 27 amendments are present; the effective decisions total 163 and use the required `statement_change` values. Focused checks and inspected diffs for each of the 30 edited items are in the corresponding receipts. The shared workspace contained extensive concurrent pre-existing edits, all preserved. No global check or ledger edit is attributed to this shard.
