---
id: post-f4-genus-one-discrete-gauge-data
kind: postulate
title: "Genus-one torsors and discrete gauge data"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 7
domain: physics
library: physics
category: string-theory
deps:
  - def-gts-compact-calabiyau-manifold-conventions
  - def-f4-genus-one-fibration
  - def-f4-jacobian-torsor-on-etale-site
  - def-axiom-of-choice
dependency_roles:
  def-gts-compact-calabiyau-manifold-conventions: mathematical-premise
  def-f4-genus-one-fibration: formulation-prerequisite
  def-f4-jacobian-torsor-on-etale-site: formulation-prerequisite
  def-axiom-of-choice: mathematical-premise
axiom_strength: "Full AC is assumed only for the mathematical group of etale J-torsor classes used in the terminology; this is inherited from the exact site, sheaf, and contracted-product construction."
physical_scope: >-
  Source-specific adopted dictionary for a specified compact, flat, complex
  genus-one F-theory model without a section, on its smooth-fiber locus, with
  a specified Jacobian group scheme, torsor action or multisection data, and
  separately checked M/F limit and localized states. It makes no universal
  discrete-group claim, no assertion for arbitrary singular or non-flat
  fourfolds, and no claim that a compact global vacuum exists.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Volker Braun and David R. Morrison, F-theory on Genus-One Fibrations, arXiv:1401.7844v2"
      url: "https://arxiv.org/pdf/1401.7844v2"
      locator: "§1, printed pp. 2–4; §§4.3–4.4, printed pp. 13–14; flatness, common Jacobian data, the source-specific Tate–Shafarevich description, and discrete torsion."
    - title: "Timo Weigand, TASI Lectures on F-theory, arXiv:1806.01854v1"
      url: "https://arxiv.org/pdf/1806.01854v1"
      locator: "§§8.1–8.2, printed pp. 79–83; torsional cohomology, discrete gauge groups, bisections, genus-one fibrations, and the M/F interpretation."
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-05
  sources_checked:
    date: 2026-11-04
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6-luna; native-step3-independent-reader; delegated by /root under owner authorization
---

## Postulate

Assume Full AC. Let $B_3$ be a connected nonsingular compact algebraic threefold over $\mathbb C$, let $Y_4$ be a smooth compact projective Calabi–Yau fourfold with holomorphically trivial canonical bundle, and let $\pi:Y_4\to B_3$ be a proper, flat, surjective genus-one fibration in the stated genus-one-fibration convention; no section is required. Choose a dense Zariski-open subset $B_3^\circ\subseteq B_3$ such that the restricted morphism $\pi^\circ:Y_4^\circ:=\pi^{-1}(B_3^\circ)\to B_3^\circ$ is smooth. Assume that a smooth commutative group scheme $J^\circ\to B_3^\circ$ of relative dimension one, with identity section, is specified. The restriction $Y_4^\circ\to B_3^\circ$ is a right $J^\circ$-torsor only when a right action is supplied and it is étale-locally equivariantly isomorphic to $J^\circ$, in the stated étale-torsor convention. A degree-$k$ multisection means a subvariety of $Y_4$ whose map to $B_3$ is generically finite of degree $k>0$.

Separately adopt the source-specific geometric, long-wavelength F-theory regime for this no-section model, in which $\alpha'$ has dimensions of length squared and string-loop and $\alpha'$ corrections are controlled or explicitly retained. The elliptic fiber is auxiliary geometric data, not two additional ordinary spacetime dimensions. For the source-selected flat genus-one models without a section, adopt the source's physical dictionary that the genus-one fibration and its Jacobian have common axiodilaton and $SL(2,\mathbb Z)$ monodromy data. Assume separately the source-specific M/F limit: the genus-one fiber area tends to zero while the dual circle decompactifies, with the source's scaling hypotheses. If the model's localized states and its torsor or multisection data are checked, these extra sectors may be interpreted as a discrete gauge sector. The discrete group and the presence of the requisite states are model-specific outputs; absence of a section alone does not determine them.

This is an adopted physical dictionary, conditional on the stated geometry and limit. It does not assert a mathematical construction of the Jacobian for every Calabi–Yau fourfold, an equivalence of all M-theory and F-theory models, or a global compact vacuum.

## Postulate references

[[def-f4-genus-one-fibration]]

[[def-f4-jacobian-torsor-on-etale-site]]

[[def-axiom-of-choice]]

[[post-f4-mtheory-to-f-theory-limit]]

[[post-f4-type-iib-elliptic-fibration-dictionary]]

[Braun and Morrison, §1](https://arxiv.org/pdf/1401.7844v2)

[Braun and Morrison, §§4.3–4.4](https://arxiv.org/pdf/1401.7844v2)

[Weigand, §§8.1–8.2](https://arxiv.org/pdf/1806.01854v1)

## Remarks

The source's Tate–Shafarevich group is not identified here with the locally defined $\operatorname{Sha}_{\mathrm{et}}(J^\circ/B_3^\circ)$ of [[def-f4-jacobian-torsor-on-etale-site]]. That definition requires $J^\circ$ as data, defines torsors as sheaves on the small étale site, and separates representability and extension across $B_3\setminus B_3^\circ$; the source's $H^1(B,A)$ description has its own smoothness, irreducible-fiber, and regular-section hypotheses. No comparison theorem between these interfaces is assumed. Full AC is used only for the mathematical class group, as recorded in the axiom-strength field.

The current [[post-f4-type-iib-elliptic-fibration-dictionary]] carrier adopts the dictionary for an elliptically fibered Calabi–Yau fourfold with a regular section and a Weierstrass patch; it does not by itself supply the same statement for a genus-one fibration without section. The common axiodilaton and monodromy statement for the source-selected no-section models is separately adopted from the cited source above. Likewise, the M/F input for this no-section case is the source's separate genus-one limit assumption. The current [[post-f4-mtheory-to-f-theory-limit]] carrier adopts the limit only for a fixed smooth compact resolved flat elliptic Calabi–Yau fourfold with a section. Its current Step 1 readiness record is missing, and it does not supply the no-section extension. The cited Braun–Morrison paper says its Calabi–Yau fourfold Jacobian assertion was not mathematically proved; that limit and Jacobian extension remain conditional here.

The action in the diagram is supplied torsor data; the square only records that it is an action over the base and is not a proof of the physical interpretation.

```tikzcd
Y_4^\circ\times_{B_3^\circ}J^\circ
  \arrow[r,"\rho"] \arrow[d,"\mathrm{pr}_1"']
  & Y_4^\circ \arrow[d,"\pi^\circ"] \\
Y_4^\circ \arrow[r,"\pi^\circ"'] & B_3^\circ
```
