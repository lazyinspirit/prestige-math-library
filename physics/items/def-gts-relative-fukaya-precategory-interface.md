---
id: def-gts-relative-fukaya-precategory-interface
kind: definition
title: Relative Fukaya pre-category interface for the toric mirror
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-hms-landau-ginzburg-categories
dependency_level: 13
deps:
  - def-gts-toric-fan-and-laurent-potential-for-abouzaid
  - def-gts-landauginzburg-pair-and-distinct-categories
  - def-gts-r4-09b-multi-object-fukaya-category-of-branes-and-polygon-morphisms
dependency_roles:
  def-gts-toric-fan-and-laurent-potential-for-abouzaid: mathematical-premise
  def-gts-landauginzburg-pair-and-distinct-categories: mathematical-premise
  def-gts-r4-09b-multi-object-fukaya-category-of-branes-and-polygon-morphisms: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Mohammed Abouzaid, Morse Homology, Tropical Geometry, and Homological Mirror Symmetry for Toric Varieties
      url: https://arxiv.org/pdf/math/0610004v4
      locator: §§1 and 3.1, printed pp. 4–5 and 12–13, relative Fukaya pre-category and admissible branes
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $N$ be the fan lattice and take the mirror torus $T^\vee=\operatorname{Hom}(N,\mathbb C^*)\cong(\mathbb C^*)^n$, the potential $W_\Sigma$, and a selected smooth zero fibre $M_0=W_\Sigma^{-1}(0)$ from the toric fan and Laurent-potential datum. Fix an ordered integral basis $(e_1,\ldots,e_n)$ of $N$ and its dual basis of $M$ as part of the symplectic datum. Set $z_j=t(e_j)$ for $t\in T^\vee$ and write $z_j=\exp(q_j+i\theta_j)$, with $q\in M_{\mathbb R}$ and $\theta\in M_{\mathbb R}/2\pi M$, and equip $T^\vee$ with the exact symplectic data $\lambda=\sum_jq_j\,d\theta_j$, $\omega=d\lambda=\sum_jdq_j\wedge d\theta_j$. The chosen dual basis declares a Euclidean inner product on $M_{\mathbb R}$ and the displayed sums use that inner product. A different basis with a newly declared identity Gram matrix generally defines different symplectic forms. When merely changing coordinates on this fixed datum, transform the inner-product matrix as a tensor and retain the same $\lambda,\omega$; no identification of $N$ with $M$ is implicit. A declared positive rescaling must rescale both forms. For a source construction using a deformed potential, additionally specify its smooth map $W:T^\vee\to\mathbb C$, its fibre $M_0=W^{-1}(0)$ and an almost-complex structure $J$ tamed by $\omega$ for which $W$ is holomorphic near $M_0$; for the Laurent polynomial take its ordinary complex structure. Require $W$ to be a submersion near $M_0$ and its regular fibres to be symplectic. On that locus use the symplectic connection $H=(\ker dW)^{\perp_\omega}$ and require its lifts to exist throughout each collar segment that is selected. For a smooth embedded segment $\gamma:[0,\epsilon)\to\mathbb C$, with $\gamma(0)=0$ and nonzero initial derivative, its parallel transport means the flow solving $\dot x(t)=(dW|_{H_{x(t)}})^{-1}\dot\gamma(t)$. Thus the primitive and transport used below are specified data; smoothness of $M_0$ alone supplies neither. The source relative Fukaya **pre-category** has as objects compact Lagrangian branes $L\subset T^\vee$ with boundary in $M_0$, a chosen grading and spin structure, a specified smooth primitive $f_L$ with $\lambda|_L=df_L$, and a collar near $\partial L$ obtained by parallel transport along a segment in the base of the potential. For a specified object class and coefficient ring, morphism complexes use transverse interior intersections. An allowed sequence must have its collar segments in the open left half-plane with distinct counterclockwise ordered initial directions, and must have regularized, compactified polygon moduli for every subsequence. Higher operations are supplied only on those allowed sequences. This pre-category convention allows some sequences to have no operation defined; it is not silently replaced by an ordinary category.

The toric sub-pre-category used in the theorem further chooses a smoothing $Q$ of the moment polytope component in the complement of the logarithmic amoeba of $M_0$ and restricts to admissible Lagrangian sections over $Q$ of $\operatorname{Log}:T^\vee\to M_{\mathbb R}=\operatorname{Hom}(N,\mathbb R)$, where $\operatorname{Log}(t)(a)=\log|t(a)|$. Their boundaries lie in $M_0$. The choice of $Q$, the existence of its sections, and the full analytic A-infinity construction are additional inputs, not consequences of the fan definition. The compact multi-object brane interface does not itself prove this relative-boundary construction.

## Definition references

[[def-gts-toric-fan-and-laurent-potential-for-abouzaid]]

[[def-gts-landauginzburg-pair-and-distinct-categories]]

[[def-gts-r4-09b-multi-object-fukaya-category-of-branes-and-polygon-morphisms]]

