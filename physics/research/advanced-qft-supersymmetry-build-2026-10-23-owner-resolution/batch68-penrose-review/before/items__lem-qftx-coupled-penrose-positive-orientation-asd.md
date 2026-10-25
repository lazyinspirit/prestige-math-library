---
id: lem-qftx-coupled-penrose-positive-orientation-asd
kind: lemma
title: Incidence alpha planes detect positive-orientation anti-self-duality
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-coupled-penrose-vanishing-on-the-round-four-sphere
dependency_level: 1
deps:
  - def-qftx-coupled-penrose-incidence-geometry
dependency_roles:
  def-qftx-coupled-penrose-incidence-geometry: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_base: "ZF"
sources:
  references:
    - title: "J. H. Rawnsley, On the Atiyah-Hitchin-Drinfeld-Manin vanishing theorem for cohomology groups of instanton bundles"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN235181684_0241/LOG_0014.pdf"
      locator: "§1, printed pp. 43–46: incidence and the curvature-type convention."
    - title: "Simon K. Donaldson, The ADHM construction of Yang-Mills instantons"
      url: "https://arxiv.org/pdf/2205.08639"
      locator: "§3, printed pp. 4–6: the Euclidean anti-self-duality convention."
verification:
  precheck: pass
---

## Statement

At a finite point of the positively oriented stereographic chart in the definition of the incidence geometry, let $A$ be a smooth connection and $F_A$ its curvature. For $t\in\mathbb C$, evaluate $F_A$ on $H_1=\partial_{\bar z_1}-t\partial_{z_2}$ and $H_2=\partial_{\bar z_2}+t\partial_{z_1}$. Then $F_A(H_1,H_2)=0$ for every $t\in\mathbb C$ if and only if the self-dual part $F_A^+=(F_A+*_gF_A)/2$ vanishes at that point. The same equivalence holds at the omitted projective value $t=\infty$ by using the second incidence chart.

## Statement references

[[def-qftx-coupled-penrose-incidence-geometry]]

[Rawnsley, §1, pp. 43–46](https://gdz.sub.uni-goettingen.de/download/pdf/PPN235181684_0241/LOG_0014.pdf)

[Donaldson, §3, pp. 4–6](https://arxiv.org/pdf/2205.08639)

## Facts & Assumptions

**Given:** The positive orientation, metric, and horizontal vectors of the incidence definition; the complexification of a real two-form is evaluated complex bilinearly.

[F1] The chart uses the positive orientation $dx_0\wedge dx_1\wedge dx_2\wedge dx_3$, metric $4(1+r^2)^{-2}\sum dx_\mu^2$, and horizontal vectors $H_1=\partial_{\bar z_1}-t\partial_{z_2}$, $H_2=\partial_{\bar z_2}+t\partial_{z_1}$. [[def-qftx-coupled-penrose-incidence-geometry]]

## Proof

1.1 Write $F_{a b}=F_A(\partial_a,\partial_b)$ and use antisymmetry. Bilinearity gives $F_A(H_1,H_2)=F_{\bar 1\bar 2}-t(F_{1\bar 1}+F_{2\bar 2})+t^2F_{12}$. If this polynomial vanishes for every complex $t$, each coefficient vanishes; conversely, vanishing of the three coefficients makes the polynomial zero. [given, F1, algebra]

2.1 In the oriented orthonormal coframe $dx_0,dx_1,dx_2,dx_3$, the complex two-forms $dz_1\wedge dz_2$, $d\bar z_1\wedge d\bar z_2$, and $dz_1\wedge d\bar z_1+dz_2\wedge d\bar z_2$ span the complexified self-dual two-forms: applying the Euclidean star to each gives itself. The metric is a positive conformal rescaling of the Euclidean metric, and on two-forms in dimension four the star is unchanged by such a rescaling. The three coefficients in step 1.1 are exactly the components of $F_A$ paired with this basis, so their vanishing is equivalent to $F_A^+=0$. The second projective chart repeats the same polynomial in $1/t$, covering the missing line direction. [F1, step 1.1, algebra] ∎
