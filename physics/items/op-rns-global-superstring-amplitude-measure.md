---
id: op-rns-global-superstring-amplitude-measure
kind: open-problem
title: Global compactified Type II RNS amplitude prescription
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: string-theory
library: physics
dependency_level: 11
domain: physics
physical_scope: "Date-bounded status question for a first-quantized closed Type II RNS/supermoduli prescription, specifically its compactification-boundary sewing and infrared-regulator completion."
deps:
  - def-string-superstring-picture-changing-insertion
  - def-string-punctured-moduli-amplitude-form
  - def-cft-super-riemann-surface
  - def-cft-family-analytic-determinant-line
dependency_roles:
  def-string-superstring-picture-changing-insertion: formulation-prerequisite
  def-string-punctured-moduli-amplitude-form: formulation-prerequisite
  def-cft-super-riemann-surface: mathematical-premise
  def-cft-family-analytic-determinant-line: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Edward Witten, Notes on Super Riemann Surfaces and Their Moduli"
      url: "https://arxiv.org/pdf/1209.2459v5"
      locator: "§§3.2, 4.4.2, 6.2.1–6.3.5: integration cycles; NS/R compactification divisors, gluing parameters, and normal bundles; and the four Type II NS-NS, NS-R, R-NS, and R-R degeneration types."
    - title: "Ashoke Sen, Off-shell Amplitudes in Superstring Theory"
      url: "https://arxiv.org/pdf/1408.0571v4"
      locator: "§§3.5–3.10 and 4.1–4.2: vertical integration, recursively gluing-compatible NS cycles, Type II extension, infrared cutoffs, and spurious-pole treatment; §§5.1, 5.4–5.8 and 6.1–6.3, PDF pp. 47–62: special-state conditions and PCO-location-independent S-matrix elements under stated boundary hypotheses, the explicit deferral of detailed general-state analysis in §5.8, and the proposed Ramond-sector gluing prescription."
    - title: "Seyed Faroogh Moosavian and Yehao Zhou, On the Existence of Heterotic-String and Type-II-Superstring Field Theory Vertices"
      url: "https://arxiv.org/pdf/1911.04343v1"
      locator: "Abstract; §§1.1.1, 4.5–4.6 and 6.1–6.3: arbitrary-genus NS/R BV quantum master equation solutions, their relation to fundamental classes of punctured spin-curve stacks, and existence of Type-II superstring field-theory vertices."
    - title: "Ashoke Sen, Gauge Invariant 1PI Effective Superstring Field Theory: Inclusion of the Ramond Sector"
      url: "https://arxiv.org/pdf/1501.00988v2"
      locator: "§§3–5: off-shell amplitudes and 1PI cycles for arbitrary NS/R external-sector mixtures, separating NS/R boundary conditions, treatment of nonseparating boundaries in the total-derivative argument, and local-coordinate/PCO-choice independence of physical masses."
    - title: "Ashoke Sen and Edward Witten, Filling the Gaps with PCO's"
      url: "https://arxiv.org/pdf/1504.00609v2"
      locator: "§§1–6: all-orders vertical-integration corrections and spurious-pole avoidance; §1 explicitly leaves moduli-space noncompactness and infrared behavior aside."
    - title: "Edward Witten, Superstring Perturbation Theory via Super Riemann Surfaces: An Overview"
      url: "https://arxiv.org/pdf/1304.2832v4"
      locator: "§§2.4.3–2.4.4: a degeneration-compatible cutoff prescription for conditionally convergent integrals, the normal-line/metric subtleties, and the dependence of a nonsmooth integral on its regulator data; presented in a heterotic example with other superstring theories described as similar."
    - title: "Charles Wang and Xi Yin, On the Equivalence between SRS and PCO Formulations of Superstring Perturbation Theory"
      url: "https://arxiv.org/pdf/2205.01106v2"
      locator: "§§3.1 and 5.1–5.3, PDF pp. 8 and 17–27; closed Type II/on-shell interior construction, with the ordinary-moduli boundary explicitly set aside."
    - title: "Sergio Luigi Cacciatori, Samuel Grushevsky and Alexander A. Voronov, Tree-Level Superstring Amplitudes: The Neveu-Schwarz Sector"
      url: "https://arxiv.org/abs/2403.09600v1"
      locator: "Abstract, §1, and Theorem 1: explicit genus-zero measure and tree amplitudes for n≥3 NS punctures; Ramond punctures are stated as future work."
    - title: "Dimitri P. Skliros, Moving NS Punctures on Super Spheres"
      url: "https://arxiv.org/pdf/2307.06355v3"
      locator: "Abstract and §§5–7, PDF pp. 12–24, explicit heterotic smooth gauge-slice measure on the super sphere, arbitrary-loop handle-operator discussion, and stated unresolved Ramond/general-curvature scope."
    - title: "Petr Dunin-Barkowski, Igor Fedorov and Alexey Sleptsov, RNS superstring measure for genus 3"
      url: "https://arxiv.org/pdf/2505.02950v2"
      locator: "Abstract, §1.7, §4.9 and Conclusions, PDF pp. 1, 6, 25–27 and 33–35; genus-three coefficients/consequences remain conjectural."
verification:
  precheck: n/a
  sources_checked:
    date: 2026-11-05
    scope: Recorded source, statement and proof-status review for this open-problem in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
---

## Open problem

For arbitrary genus and admissible on-shell punctures in closed Type II RNS theory, does there exist a single first-quantized prescription on a stated compactified supermoduli space whose local amplitude forms and integration chains are compatible with every NS/R boundary sewing stratum, avoid spurious singularities, and yield regulator-independent values whenever infrared regularization is needed? The question concerns completion at compactification boundaries and infrared-regulator compatibility. It does not say that the interior PCO-chain problem is unsolved, does not exclude string-field constructions, and is not used as a supplier for any theorem.

The setup fixes the external states, spin structures and GSO phases, compactification, regulator, and local conventions of RNS picture-changing insertion on a local superstring chart and Local punctured-moduli perturbative amplitude form. This is a source-status question, not a proof that no result exists.

## Open problem references

[[def-string-superstring-picture-changing-insertion]]

[[def-string-punctured-moduli-amplitude-form]]

## Status

As of 2026-11-04, a bounded follow-up to the 2026-10-26 review confirms that the primary sources checked still do not settle the combined contract above. This is not an exhaustive literature search or a universal nonexistence claim:

For this status review, a first-quantized prescription is an integral of the model's local worldsheet CFT form over a chain in the SRS or PCO integration space. A compactified supermoduli space is a chosen extension by nodal NS/R limits with specified plumbing families and normal-line data. Boundary compatibility requires the limiting chain form to contract lower-complexity chain forms over a nondegenerate intermediate-state pairing and complete dual basis (or a separately defined state integral), multiplied by the local plumbing factor; a nonseparating node uses self-gluing and a Ramond node includes the declared Ramond picture-changing insertion. A spurious-pole locus is a PCO configuration where the local correlator form has a pole away from a nodal boundary; a vertical correction varies PCO positions in the fiber over a fixed reduced-moduli point and must define a valid integral there.

An admissible infrared regulator here is a gluing-compatible family of smooth cutoff functions on the reduced compactification, built from Hermitian norms on boundary normal lines, tending to $1$ on compact interior subsets and vanishing near degenerations. For a fixed model-specific subtraction/cancellation, a finite value is the limit as the cutoff is removed; regulator independence means the same limit for all admissible cutoff profiles and normal-line norms under that same subtraction. The question concerns amplitudes for which the prescribed subtraction/cancellation is expected to leave a finite value, not an assertion that all Type II amplitudes are infrared finite.

- Witten's *Notes on Super Riemann Surfaces and Their Moduli*, §§3.2, 4.4.2, and 6.2–6.3, describes integration cycles and the geometric NS/R compactification divisors, plumbing parameters, normal bundles, and four Type II chiral degeneration types. This is geometric input for boundary sewing, not a construction of an all-genus regulator-independent PCO amplitude.
- Wang–Yin, §§3.1 and 5.1–5.3, construct an interpolation/vertical-chain method for on-shell closed Type II over the interior; their analysis explicitly sets aside ordinary-moduli boundary treatment. Thus the broad claim that no interior PCO chains exist is false and is not asserted here.
- Sen, *Off-shell Amplitudes in Superstring Theory*, §§3.5–3.10 and 4.1–4.2, constructs vertical integration, recursively gluing-compatible NS integration cycles, describes the Type II extension, and gives a systematic spurious-pole prescription. Its §3.8 regulates generic degenerations, including nonseparating ones, by analytic continuation and damping, and treats special degenerations with an upper plumbing cutoff. Its §§5.4–5.7 also establish a physical independence result, not merely an interior construction: the S-matrix elements of the special states defined in §5.1 are invariant under changes of PCO locations, using the off-shell prescription of §3 and the accompanying external-state wave-function renormalization. Here the special-state restriction includes the stated GSO-odd matter superconformal primaries and the lower-bound condition (5.2) on all zero-momentum matter operators in their little-group/internal-symmetry representations; arbitrary on-shell punctures are not substituted for that condition. The boundary analysis is iterative in genus and puncture number and uses pure-gauge decoupling at lower complexity (§§5.5–5.6). In the Type II analysis (§5.7), assume absence of tachyons, vanishing massless tadpoles, and vanishing of the additional one-point contributions in items 4–5 (for example by the specified discrete symmetries preserving the super-stress tensor). Under these hypotheses the remaining boundary contributions are absorbed into wave-function renormalization or shifts of massless-field expectation values, including the dilaton. Section 5.8 explicitly postpones detailed analysis for general, non-special external states; §6 proposes a Ramond-sector prescription, while its concluding discussion does not establish the full general PCO-choice result. The cited special-state independence allows the stated field redefinitions/background shifts; it is not claimed for an arbitrary unshifted background. These arguments do not establish equality of finite values under **all** cutoff profiles and Hermitian normal-line norms in the admissible-regulator class defined above, with one fixed subtraction/cancellation. That broader independence requirement remains the unresolved contract of this item.
- Sen's Ramond-sector 1PI construction, §§3–5 of *Gauge Invariant 1PI Effective Superstring Field Theory: Inclusion of the Ramond Sector*, treats arbitrary NS/R external-sector mixtures in heterotic and Type II theories and matches the 1PI-cycle boundary to separating NS and R sewings, with an extra Ramond PCO insertion. For nonseparating boundaries, §3.3 says they are omitted from its total-derivative boundary calculation because they contribute no boundary term under the cited hypotheses; it does not give a general regulator theorem there. Its coordinate/PCO-independence result for physical masses is not a proof of independence from infrared-regulator choices for arbitrary amplitudes.
- Sen–Witten, *Filling the Gaps with PCO's*, §§3–6, gives the systematic higher-codimension vertical corrections and independence from choices of vertical segments while avoiding spurious poles. Its §1 explicitly excludes the noncompactness of moduli space and infrared behavior.
- Moosavian–Zhou, *On the Existence of Heterotic-String and Type-II-Superstring Field Theory Vertices*, proves existence of Type-II string-field-theory vertices for arbitrary genus and NS/R boundary-component types via BV quantum master equation solutions, and relates these solutions to fundamental classes of punctured spin-curve stacks. This is a substantial all-genus sewing/vertex result. The inspected construction does not establish finite amplitude values independent of all admissible infrared cutoff profiles and fixed subtractions as required here.
- Witten, *Superstring Perturbation Theory via Super Riemann Surfaces: An Overview*, §§2.4.3–2.4.4, proposes a conformally invariant nodal cutoff and claims compatibility with further degenerations for conditionally convergent integrals. The discussion is given in a heterotic example, with other superstring theories described as similar; it notes the normal-line/metric data needed to define the cutoff and that the nonsmooth integral depends on regulator data. It therefore does not establish regulator-choice independence for arbitrary Type II NS/R amplitudes.
- Cacciatori–Grushevsky–Voronov determine the genus-zero measure and tree amplitudes for NS punctures in $\mathcal M_{0,n,0}$, $n\ge3$ (arXiv:2403.09600v1, §1 and Theorem 1). They explicitly present Ramond insertions as future work; §1 treats the moduli integral as improper over a noncompact domain and leaves the $\mathbb Z_2$ isotropy factor unsettled. Their result does not cover arbitrary genus or compactification strata.
- Skliros constructs a smooth gauge-slice measure for heterotic NS punctures on the super sphere and discusses arbitrary loop order through handle-operator sewings. The same paper says Ramond contributions have not yet been worked out and that general local supercurvature at arbitrary genus requires further study; it does not establish the closed Type II contract here.
- Dunin-Barkowski–Fedorov–Sleptsov's inspected genus-three construction retains conjectural coefficient/factorization inputs and does not establish arbitrary genus.

These scope comparisons do not support a claim that PCO interpolation, spurious-pole avoidance, or gluing-compatible NS/R cycle constructions are generally absent. The remaining open part is whether one all-genus Type II prescription proves regulator-independent finite values, whenever the stated model's infrared subtraction/cancellation yields a finite value, across all admissible NS/R sectors and compatible boundary strata. Sen's and Witten's cited treatments provide relevant prescriptions, but the inspected arguments do not prove this full regulator-independence claim. They do not prove universal nonexistence or exhaust literature beyond the stated review date. This item cannot serve as a prerequisite. The cited SRS and determinant-line suppliers have stale Step 1 hashes, so authoring readiness remains escalated pending current interface checks; that is distinct from the literature-status claim.
## Remarks

This is a bounded review of the listed primary-source sections inspected through 2026-11-04, not an exhaustive claim about all literature. Step 1 readiness remains escalated until current exact interfaces and source status are checked; independent review is still required.
