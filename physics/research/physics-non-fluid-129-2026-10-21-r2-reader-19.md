# Step 3a reader report — batch 19

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Batch: `19`

## Opened inventory

- Assigned pages: `library/einstein-maxwell-models-mathematics/emg-fx04.md` and `emg-fx04-examples.md`.
- Assigned items: `items/prop-emg-fx-rn-photon-trapping.md`, `items/prop-emg-fx-throat-scaling.md`, and `items/cex-emg-fx-nonuniform-extremal-limit.md`.
- Supplier statements and relevant arguments: `def-emg-xs-rn-data`, `def-euclidean-spheres-and-closed-balls`, `def-gr-schwarzschild-exterior-model`, `ex-the-round-metric-on-the-sphere-as-an-induced-metric`, `prop-emg-xs-rn-horizon-data`, `def-geodesic-of-an-affine-connection`, `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`, `def-emg-explicit-power-regimes`, `def-countable-choice`, `thm-emg-xs-rn-near-horizon`, `def-complete-ordered-real-field`, `def-complete-ordered-field`, `def-ordered-field`, and `cor-archimedean-reciprocal`.
- Required page context: `emg-ms01`, `emg-ms02`, `emg-ms03`, `emg-fx03`, and the published `outward-rounded-interval-and-ball-arithmetic` page. I checked the batch manifest, batch notes, assigned proof-contract entries, cross-batch dependency row, and the relevant import-map entries.

## Review and repairs

`prop-emg-fx-rn-photon-trapping`, Proof step 1.1, listed the metric Christoffel symbols and derived the time and angular geodesic equations, but did not state the radial geodesic equation. Steps 2.2 and 4.1 then used that unstated equation to characterize circular radii and obtain the radial linearization. I added the equatorial radial geodesic equation, with its Christoffel coefficient, to step 1.1. This is a proof-only repair; the public statement is unchanged. I synchronized step 1.1 in `research/physics-non-fluid-129-2026-10-21-r2-batch-19.proof-contracts.json`.

`cex-emg-fx-nonuniform-extremal-limit`, Statement refuted, referred to an “electric RN parameter” and `Q^2` without stating `q_m=0`, `Q^2=q_e^2`, or the precise `kappa_+` formula and unit of the proposed lower bound in that claim. The later Facts & Assumptions supplied those details, but the refuted statement should stand on its own. I made the same quantified claim explicit in the statement: `M=m`, `q_m=0`, `0<q_e^2<m^2`, `Q^2=q_e^2`, the outer roots, `kappa_+(q_e)`, and an inverse-length `c`. Its proof contract already records the matching hypotheses and supplier formulas, so its derivation bindings did not change. A search of authored items and current manifests found no item consumer of this counterexample; it remains listed on its assigned B page. Neither changed item had a `verification.judge` record.

The throat-scaling proposition’s pullbacks, magnetic and electric terms, and compact-local all-derivative convergence are correct under the stated `R>0` hypotheses. Its use of the near-horizon supplier is restricted to the supplier’s exact `M=q_e=L>0`, `q_m=0` subcase. The RN photon calculation correctly treats `Q^2=0` directly, applies the horizon result only when `Q^2>0`, and proves the outer stationary radius lies outside `r_+`. The TikZ radial-order sketch agrees with those statements and is not used in the proof. The other two assigned items contain no TikZ/tikzcd diagrams.

## Source checks

- [David Tong, *General Relativity*](https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf): PDF pp. 50–51 support the Schwarzschild effective-potential maximum and instability as context; §6.2.5 (printed pp. 266–268; PDF pp. 273–275) treats the extremal RN throat.
- [Max Weissenbacher, *Decay and non-decay for the massless Vlasov equation on subextremal and extremal Reissner–Nordström black holes*, arXiv:2303.15338v2](https://arxiv.org/pdf/2303.15338): §1.3.5 eq. (35), §2.1 eqs. (45)–(48), and §2.3 geodesic-flow/conserved-quantity/trapping sections support the cited conventions and context. The local proofs supply the dyonic formulas and the lower-bound counterexample; no Vlasov decay estimate is imported.
- [Aalsma, van der Schaar, and Visser, *Extremal black hole decay in de Sitter space*, arXiv:2311.13742](https://arxiv.org/pdf/2311.13742): §2.1 eqs. (2.4)–(2.11) contains the cited RN metric and extremal near-horizon scaling. The assigned proof supplies its own dyonic two-form pullback and convergence argument.

## Page verdicts

- `emg-fx04` (A): **Pass after repair.** The two listed propositions match the page scope; the local photon-ray statement does not claim a wave-decay estimate, and the throat limit is restricted to compact subsets with `R>0`.
- `emg-fx04-examples` (B): **Pass after repair.** The listed counterexample disproves the stated positive uniform lower bound with an explicit subextremal electric sequence. Page requirements and item placement are consistent.

## Validation and remaining issues

Reflow reported both changed items unchanged. Scoped precheck passed for both. The final proof-layout command covered both changed items and reported 2 items, 8 numbered steps, and 0 defects. No remaining uneditable defect or blocker was found.

Coverage is limited to the assigned items, their page context, the supplier interfaces and arguments needed for these claims, and the cited source sections. I did not re-audit every transitive published supplier proof or independently retrieve the version-of-record Springer PDF for Weissenbacher; I checked the accessible arXiv v2 instead.
