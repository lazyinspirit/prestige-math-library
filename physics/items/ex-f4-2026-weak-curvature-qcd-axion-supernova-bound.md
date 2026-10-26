---
id: ex-f4-2026-weak-curvature-qcd-axion-supernova-bound
kind: example
title: "A 2026 weak-curvature F-theory QCD-axion ensemble constraint"
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 4
domain: physics
library: physics
category: string-theory
deps:
  - def-compact-kahler-manifold-and-hodge-polarization-conventions
  - thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms
  - def-axiom-of-choice
  - post-f4-type-iib-elliptic-fibration-dictionary
dependency_roles:
  def-compact-kahler-manifold-and-hodge-polarization-conventions: formulation-prerequisite
  thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  post-f4-type-iib-elliptic-fibration-dictionary: physical-assumption
physical_scope: >-
  Source-reported model-population inference for the paper's selected Tree,
  Skeleton, and K2 toric-threefold ensembles and its selected weak-curvature
  Kähler points. The SN1987A limit is an approximate astrophysical inference
  based on the source's supernova-emission model and one-dimensional simulations.
  The reported fraction is not a probability over all F-theory vacua or a
  deduction that F-theory describes nature.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sebastian Vander Ploeg Fallon, James Halverson, Liam McAllister, and David J. E. Marsh, A Supernova Constraint on F-theory, arXiv:2606.14575v1"
      url: "https://arxiv.org/pdf/2606.14575v1"
      locator: "Abstract; Introduction and Methodology, pp. 1–3; Results and Discussion, pp. 3–5; Table I and Fig. 3."
verification:
  precheck: pass
---

## Example

Fallon, Halverson, McAllister, and Marsh study source-selected F-theory models on toric threefold bases $B_3$ with $N=h^{1,1}(B_3)$, where $h^{1,1}(B_3)=\dim_{\mathbb C}H^{1,1}(B_3)$ is the first Hodge number of the compact Kähler base. The source selects a weak-curvature Kähler point for each constructed model, where weak curvature means that $\alpha'$ corrections are plausibly negligible, and estimates the QCD-axion mass $m_{\mathrm{QCD}}$ using its stated effective-field-theory and instanton approximation. Across the Tree, Skeleton, and K2 ensembles, the paper reports that in every populated $N\ge 8{,}791$ bin at least $95\%$ of its sampled models have $m_{\mathrm{QCD}}>15\,\mathrm{meV}$, above its adopted approximate SN1987A limit. The source does not provide precise model counts for each $N$ bin, and its percentage is a sample frequency for those selected models and Kähler points, not a probability over all F-theory vacua.

The adopted SN1987A limit is an astrophysical inference: the paper uses axion-nucleon emission and the Raffelt criterion, based on one-dimensional supernova simulations of the observed neutrino burst. This is not a reported experiment measuring an F-theory model. The authors do not stabilize moduli and use a proxy visible sector without a suitable $U(1)$, supersymmetry breaking, or fermion couplings.

## Example references

[[def-compact-kahler-manifold-and-hodge-polarization-conventions]]

[[thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms]]

[[def-axiom-of-choice]]

[[post-f4-type-iib-elliptic-fibration-dictionary]]

[Fallon et al., Abstract and Introduction](https://arxiv.org/pdf/2606.14575v1)

[Fallon et al., Methodology and Results](https://arxiv.org/pdf/2606.14575v1)

[Fallon et al., Discussion and Conclusions](https://arxiv.org/pdf/2606.14575v1)

## Facts & Assumptions

**Given:** The paper's finite model ensembles, its selected weak-curvature Kähler points and QCD-axion mass approximation, and its source-specific interpretation of the SN1987A neutrino-burst constraint.

[A1] Table I reports 14,627 Tree models with $35\le N\le 2{,}591$, 16,556 Skeleton models with $10\le N\le15{,}415$, and 54 K2 models with $2{,}560\le N\le181{,}200$. The source does not give precise per-bin counts. Its high-$N$ bins therefore contain no Tree models. [Fallon et al., Table I and Results](https://arxiv.org/pdf/2606.14575v1)

[A2] The source adopts the approximate $15\,\mathrm{meV}$ QCD-axion mass limit from its axion-nucleon emissivity and Raffelt-criterion analysis of the SN1987A neutrino burst. The criterion is based on one-dimensional supernova simulations; it is an astrophysical inference, not a measured F-theory quantity. The paper does not independently audit the underlying supernova observations or simulations. [Fallon et al., SN1987A and the QCD axion](https://arxiv.org/pdf/2606.14575v1)

[A3] For each constructed model, the authors select a weak-curvature Kähler point using their stated gauge-coupling and supersymmetry-scale conditions, then estimate $m_{\mathrm{QCD}}$ with their effective-field-theory procedure and a selected subset of instanton scales. Weak curvature is used to argue that $\alpha'$ corrections are plausibly negligible; this is a source approximation, not a proved error bound. [Fallon et al., Methodology](https://arxiv.org/pdf/2606.14575v1)

[A4] The Results section and [Fig. 3](https://arxiv.org/pdf/2606.14575v1#page=4) report that in every populated bin with $N\ge8{,}791$, at least $95\%$ of the sampled models lie above the adopted $15\,\mathrm{meV}$ threshold. The paper gives no precise model count for each such bin. This is the authors' finite-sample report, not a probability statement for a larger population. [Fallon et al., Results and Fig. 3](https://arxiv.org/pdf/2606.14575v1)

[F1] [[def-compact-kahler-manifold-and-hodge-polarization-conventions]] fixes the compact Kähler convention for the source's base.

[F2] [[thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms]] identifies $H^{1,1}(B_3)$ with the bidegree-$(1,1)$ Hodge summand and the Dolbeault group $H^1(B_3,\Omega^1_{B_3})$; it supplies finite-dimensionality under compact-Kähler and full-AC hypotheses.

[F3] [[post-f4-type-iib-elliptic-fibration-dictionary]] adopts the geometric elliptic-fibration/F-theory dictionary. Its current statement supplies the context used here; this item does not use it as a proof of the reported ensemble frequency.

## Verification

1.1 The source's Table I gives the maximum Tree value $N=2{,}591<8{,}791$, while the Skeleton and K2 ranges include values above the stated threshold. Thus no populated bin with $N\ge8{,}791$ comes from Tree. The totals in [A1] are whole-ensemble counts and do not determine any individual high-$N$ bin count. [A1, given, algebra]

1.2 By [A3], the calculation uses one selected weak-curvature Kähler point per constructed model and a truncated instanton estimate. Comparing these source estimates with the approximate astrophysical inference [A2] therefore concerns those selected model points under the source's approximation, not all points in moduli space or a direct measurement of the compactification. [A2, A3, algebra]

2.1 The source reports the frequency in [A4]. Together with [A1] and the selection procedure in [A3], its scope is the finite sampled ensembles and selected Kähler points. Since the paper gives no per-bin counts, this item makes no stronger count claim; since the sample is selected and finite, the reported percentage is not a probability over all F-theory vacua. Its comparison remains conditional on the astrophysical inference [A2]. [A1, A2, A3, A4, step 1.2] ∎

## Remarks

The source reports that additional axions could strengthen the supernova constraint, but their effect depends on further model assumptions. It also leaves moduli stabilization, a suitable visible-sector $U(1)$, supersymmetry breaking, and fermion couplings unresolved. None of these omissions is repaired by the reported $95\%$ sample frequency.
