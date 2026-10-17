# Batch 19 Step 3a adjudication

Run: `physics-remaining-80-2026-10-17`. Role: alpha. Group: `batch-19`. Covers: batch 19 only.

Completed the seven risk reviews in the dispatched order: level 2 postulate; level 3 optics, scaling and weak/slow motion; level 4 B07 and B08; level 7 B04. The sole owed decision is `refuter:19:1`, classified `false_positive`. There are no touched, page or reader decisions. No item or page was edited, and no substantial prerequisite blocker or defective published supplier was identified in the inspected uses.

## Routed finding: refuter:19:1

Carrier: `items/ex-emg-ml-b04.md`, Example opening paragraph and Verification 1.1–3.1. The refuter correctly computes that a general stationary C² potential need not generate a C² Maxwell two-form or a C¹ sourced current. In particular, φ(x,y,z)=|x|³ has a C¹ field and Laplacian 6|x|, which is not C¹. This disproves universal Maxwell admissibility for that potential class. That universal assertion is absent from B04.

The written claim instead quantifies over a supplied C² future-timelike proper-time segment **satisfying the charged-probe law**. Its F1 identifies precisely the probe sector of `post-emg-background-maxwell-test`; the postulate separately adopts Maxwell and probe assumptions. The probe paragraph uses a supplied C² potential and the finite-curve action of the published `post-rpm-external-charge-action`, whose published definition `def-rpm-charge-spin-model` permits C¹ F=dA and imposes no Maxwell equation. The published `pthm-rpm-external-charge-action-equivalence` gives the force-law formulation under its stated ACω hypothesis. A Maxwell-current regularity requirement is not needed to deduce this probe first integral. Even a reading that imports additional Maxwell restrictions restricts the assumed instances; it does not turn this conditional claim into an existence assertion for every φ.

The conclusion is verified without applying the stronger smooth-potential symmetry theorem: B04 F2 explicitly labels that supplier's expression as a template. Put C=mU₀+qA₀, where A₀=−φ/c. In Cartesian Minkowski coordinates the assumed lowered force equation is m dU₀/dτ=qF₀ᵢUⁱ, while F₀ᵢ=−∂ᵢA₀=∂ᵢφ/c. Thus dC/dτ=0 by the chain rule. The mean-value theorem and endpoint continuity give constancy on the finite segment. Future proper-time normalization gives U₀=−γc, so E_test=−cC=γmc²+qφ is constant. Verification 3.1 independently checks the work cancellation with E=−∇φ and B=0. C² φ suffices throughout; neither Maxwell divergence nor a source current is used. Zero charge, constant potential, instantaneous zero speed and included endpoints do not invalidate the calculation. The units are joules, and no empirical, self-field or coupled-source claim follows.

The examples-page scope likewise distinguishes a prescribed-field probe first integral from B07's exact Maxwell solution. The proposed φ therefore does not refute the authored conditional conclusion. No edit or artificial smoothness restriction is justified.

Decision: `false_positive`, route `flagged`, `repair_confidence: 1` (no repair performed). Closed finding-disposition row: `remaining80-batch19-3a-probe-versus-maxwell`, disposition `false-positive`, stage `3a-adjudicate`, in `research/defect-ledger.jsonl`. The row preserves the reported fatal severity as the rejected allegation; it does not record a confirmed fatal defect.

## Risk review evidence

All seven complete, specific `risk_review` records are in `research/physics-remaining-80-2026-10-17-batch-19.proof-contracts.json`.

| Item | Independent checks and disposition |
|---|---|
| `post-emg-background-maxwell-test` | C² real F/C¹ current classical Maxwell sector, separate C² local-potential finite probe sector, ACω action equivalence, fixed SI convention and self-field exclusions checked. WKB use is confined to the exact finite supplier constraints. Adopted model, no empirical premise or existence/backreaction assertion. No defect. |
| `pthm-emg-controlled-test-geometric-optics` | Both proof steps and full WKB supplier proof checked. The four constraints give the exact finite divergence and leading-field estimates; real parts preserve bounds. Nonzero null gradient gives local affine rays; the null-plane complement gives the positive two-dimensional complex polarization quotient. Empty compact set and zero amplitude are covered; ε is positive. A trial-field residual is not an exact solution or solution-distance estimate. No defect. |
| `pthm-emg-source-test-backreaction-scope` | All five steps checked. Maxwell linearity and quadratic stress give −κδ²T on the fixed vacuum metric; component norms include δ=0 and empty K. Nonzero obstruction requires nonzero field and δ. Sourced residual omits matter stress. Dust ratio is formed only for ρ>0 and η>0. Radial integration gives Q²/(16πε₀ℓ), with ℓ>0; its fixed-charge divergence gives no point-source construction. No defect. |
| `pthm-emg-weak-slow-test-motion` | Both steps, full comparison-supplier proof, radial primitive and RPM equivalence checked. Smooth closed F supplies primitives on short coordinate-ball segments; no global potential or gauge gluing is used. Inverse-metric, Christoffel and raised-field expansions give O(ε²c²/L) acceleration remainder and O(ε) scaled remainder. Common convex state containment and derivative bounds give the displayed finite-time integral estimate, including L_f=0 and initial time. Small cutoff, α≠0, speed, existence and containment remain premises. No defect. |
| `ex-emg-ml-b07` | Four steps checked. Constant transverse amplitude meets all WKB constraints. Direct cyclic-derivative and divergence cancellations prove exact source-free Maxwell equations. Hodge signs give E_x=cB_y; u=B_y²/μ₀ is positive off nodes. Taking δ=1 in the scaling result excludes the unchanged Minkowski coupled solution with Λ=0. Nodes are allowed; nonzero κ and amplitude ensure nonzero field somewhere. No defect. |
| `ex-emg-ml-b08` | Three steps checked against all seven direct suppliers. Explicit global magnetic primitive meets local action hypotheses. Speed conservation gives constant γ. The based Euclidean plane is Banach and J is bounded/skew; the published exponential supplier gives the smooth group and derivative law. Orthogonality and the correctly oriented interpolation integral give the velocity bound; integrating gives the position coefficient 1/2. Zero velocity/time and ε=1 under the stated speed condition are valid. Proper-time reconstruction and finite compact containment are explicit. The direct proof does not extend the general theorem's cutoff. No defect. |
| `ex-emg-ml-b04` | Three steps, exact probe-law premise and smooth-symmetry template checked; direct C² calculation and routed false-positive reasoning above. No defect. |

## Prerequisites, sources and status

Read current owned items and both page bodies; read the reader report/findings, refuter artifact, routed scope and immutable pre/post snapshots. Direct suppliers were opened at their actual used clauses, including `def-emg-matter-observables`, the published RPM action and equivalence, `lem-emg-controlled-maxwell-wkb`, `lem-emg-source-and-test-scaling`, `thm-emg-weak-slow-test-lorentz-limit`, `lem-emg-local-potential-construction`, `def-emg-matter-formal-systems`, published `lem-emg-observer-field-decomposition`, and `thm-emg-charged-symmetry-current`. The Maxwell positive-energy and dust-projection proofs were also inspected. The four published pinned mathematical statements used by B08 were checked for finite ordered basis, real Banach bounded generator, differentiability/integrability and interval-orientation hypotheses: `cor-finite-dimensional-normed-spaces-are-banach`, `lem-exponential-series-of-a-bounded-operator`, `cor-vector-valued-ftc-and-lipschitz-bound`, and `thm-norm-inequality-for-the-vector-valued-integral`.

Draft suppliers retain draft proof status. Published/imported material remains read-only. These are checks of the actual consuming arguments, not certification of the complete transitive library.

Source evidence used the existing batch-19 source manifest/readings as navigation, then actual primary passages:

- [Reall, General Relativity](https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf), §6.2, especially (6.7)–(6.12), stored full-text excerpt at `research/physics-remaining-80-2026-10-17-batch-16-sources/raw/reall-part3-gr.txt`, lines 3524–3676. Maxwell/Lorentz equations and leading optical context use source Gaussian conventions; local SI is explicit.
- [Poisson–Pound–Vega](https://arxiv.org/pdf/1102.0529v3), §18.1, (18.1)–(18.10), stored text `research/physics-remaining-80-2026-10-17-batch-16-sources/raw/poisson-pound-vega-1102.0529v3.txt`, lines 9370–9462. Read the action, Lorentz equation and explicit singular-self-field qualification; no self-force result is imported.
- [Tong, General Relativity](https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf), §1.2.3, (1.20), and §4.5.3, (4.52), stored text `research/physics-remaining-80-2026-10-17-batch-16-sources/raw/tong-general-relativity.txt`, lines 1242–1426 and 9627–9756. The interaction-sign difference and source normalization remain distinct from local conventions.
- [Harte](https://arxiv.org/pdf/1808.06203v2), §§3.1–3.3, (40)–(52), and Appendix A opening/(A.2), PDF pp. 10–12 and 33–34, inspected through the primary PDF browser text. Its finite-truncation warning agrees with the local residual distinction; exact bounds and the quotient construction are supplied by the local proof.
- [Carroll](https://arxiv.org/pdf/gr-qc/9712019v1), (4.8)–(4.20), PDF pp. 111–113, weak/static/slow neutral-geodesic context, and (1.111), PDF p. 37, stress context; inspected through the primary PDF text. No charged error bound or SI normalization is inferred from this source.
- [Meinel–Hütten](https://arxiv.org/pdf/1105.3807v3), §2, (1)–(7), PDF p. 2: the selected static dust branch has current parallel to velocity and a fixed charge/mass relation in c=G=1 Gaussian units. This supplies context, not a general scaling or coupled-existence theorem.

The local `pdftotext` executable was unavailable; actual stored text and browser PDF text supplied the passages above. No fresh full-document reading or source-fetch stamp is claimed. No data, measurement precision, sampling model or statistical inference is introduced; all seven items have no empirical premises.

## Changes and consumers

Only review/audit metadata changed. Added seven risk reviews. The first strict-contract check detected one stale F2 quotation in the optics contract; synchronized it to the current supplier's exact sentence ending “or convergence of a longer series.” This is mechanical quote maintenance, not a scientific defect or an extra owed obligation. No derivation, assumption, Statement, Definition, physical interface, item provenance, manifest or inventory changed.

Updated B04's owned cross-batch evidence row to describe its actual template use and direct C² proof, preserving the edge and verified scoped-use status. Added the batch-19 record in `briefs/tasks/frontier-dependency-ledger.md` and used the native refresh to merge/deduplicate the derived ledger. No supplier acceptance is inferred from readiness evidence. There is no public-interface change to propagate, outside consumer repair, published defect entry or proposed withdrawal.

All seven current item raw hashes equal their immutable post-reader hashes, and every pre-reader item hash equals its post-reader hash. Thus no reader repair, historical-byte ambiguity or current-content exception is being claimed.

## Local checks and handoff

- Initial `risk-report.mjs` without `--require-reviewed`: exit 0, seven HIGH/CRITICAL items routed.
- Final `risk-report.mjs research/physics-remaining-80-2026-10-17-batch-19.proof-contracts.json --require-reviewed`: exit 0, seven complete reviews.
- `proof-contract.mjs` on the batch-19 contract with `--strict`: initial exit 1 for the one stale optics quote; after exact quote synchronization, exit 0, zero errors/warnings, 7/7 checked.
- `frontier-dependency-ledger.mjs refresh --run physics-remaining-80-2026-10-17`: exit 0, refreshed/deduplicated.
- Native defect-ledger append: exit 0; one closed false-positive disposition appended and generated view refreshed.
- Exact obligation and current-item hash checks: pass, one decision for the one routed finding; seven current items equal their post-reader snapshots.
- No item changed, so item reflow, precheck and the final changed-item proof-layout command are not applicable.

Report and decisions are complete. No judgments, verification stamps, decision hashes, engine transitions or gate battery were initiated. Engine stamping and its gate battery remain pending under the dispatch. No unresolved local blocker.


## Root outside-owner adoption — 2026-10-17T06:58:00.956008+00:00

Adopted two supplemental gate obligations for the completed source-free Hodge scaling and B07 direct form verification. Original native B04 decision is unchanged. Added exact Hodge dependency/role in the owning manifest; supplier page is already reachable. Current source/supplier/native-history/check bindings verified against resolution.json. No acceptance stamp or full gate pass is claimed.
