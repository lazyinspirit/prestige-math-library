---
id: lem-f4-arithmetic-genus-zero-component-is-smooth-rational
kind: lemma
title: "Arithmetic genus zero forces a smooth rational curve"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
category: string-theory
axiom_strength: "Full AC is inherited from the normalization and coherent-cohomology suppliers."
deps:
  - def-axiom-of-choice
  - def-algebraic-curve-over-field
  - def-arithmetic-genus-proper-curve
  - def-degree-divisor-proper-curve
  - def-divisor-smooth-proper-curve
  - def-geometric-genus-singular-curve
  - def-normalization-defect-of-reduced-curve
  - def-residue-field-scheme-point
  - lem-normalization-defect-euler-and-lengths
  - thm-normalization-reduced-curve-exists-finite
  - thm-normalization-glues-integral-finite-type-curves
  - thm-genus-zero-point-implies-projective-line
  - thm-proper-ideal-contained-in-maximal-ideal
  - cor-affine-algebra-maximal-ideals-as-points-over-algebraically-closed-field
  - thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-algebraic-curve-over-field: mathematical-premise
  def-arithmetic-genus-proper-curve: mathematical-premise
  def-degree-divisor-proper-curve: mathematical-premise
  def-divisor-smooth-proper-curve: mathematical-premise
  def-geometric-genus-singular-curve: mathematical-premise
  def-normalization-defect-of-reduced-curve: mathematical-premise
  def-residue-field-scheme-point: mathematical-premise
  lem-normalization-defect-euler-and-lengths: mathematical-premise
  thm-normalization-reduced-curve-exists-finite: mathematical-premise
  thm-normalization-glues-integral-finite-type-curves: mathematical-premise
  thm-genus-zero-point-implies-projective-line: mathematical-premise
  thm-proper-ideal-contained-in-maximal-ideal: mathematical-premise
  cor-affine-algebra-maximal-ideals-as-points-over-algebraically-closed-field: mathematical-premise
  thm-cech-computes-qc-cohomology-separated-scheme-affine-cover: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Algebraic Curves"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
      locator: "Genus, normalization, and the normalization defect for proper integral curves."
    - title: "William Fulton, Algebraic Curves"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
      locator: "Chapters 6–8, normalization and genus of singular curves."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume full AC. Let $C$ be an integral proper curve over $\mathbb C$. Then $p_a(C)=0$ if and only if $C$ is smooth and isomorphic to $\mathbb P^1_{\mathbb C}$; in particular, in the zero-genus case its normalization has genus zero.

## Statement references

[[def-arithmetic-genus-proper-curve]]

[[def-geometric-genus-singular-curve]]

[[lem-normalization-defect-euler-and-lengths]]

[[thm-genus-zero-point-implies-projective-line]]

[[thm-proper-ideal-contained-in-maximal-ideal]]

[[cor-affine-algebra-maximal-ideals-as-points-over-algebraically-closed-field]]

## Facts & Assumptions

**Given:** Full AC and an integral proper curve $C$ over the algebraically closed field $\mathbb C$.

[A1] Full AC is [[def-axiom-of-choice]], inherited from the normalization and proper-cohomology suppliers.

[F1] The normalization $\nu:\widetilde C\to C$ is finite, $\widetilde C$ is smooth and proper, and its genus is the geometric genus $g(C)$ ([[def-geometric-genus-singular-curve]], [[thm-normalization-reduced-curve-exists-finite]], [[thm-normalization-glues-integral-finite-type-curves]]).

[F2] The normalization defect $\delta(C)$ is a nonnegative integer and
$$\delta(C)=\chi(\mathcal O_{\widetilde C})-\chi(\mathcal O_C)=p_a(C)-g(C)$$
([[def-normalization-defect-of-reduced-curve]], [[lem-normalization-defect-euler-and-lengths]], [[def-arithmetic-genus-proper-curve]], [[def-geometric-genus-singular-curve]]).

[F3] The normalization map is an isomorphism exactly when its defect sheaf is zero; in particular $\delta(C)=0$ implies $C$ is regular, and a regular curve over the perfect field $\mathbb C$ is smooth ([[lem-normalization-defect-euler-and-lengths]], [[def-normalization-defect-of-reduced-curve]], [[def-geometric-genus-singular-curve]]).

[F4] The curve $C$ has a closed $\mathbb C$-rational point. Choose a nonempty affine open $U=\operatorname{Spec}A\subset C$. Since $C$ is an integral finite-type curve, $A$ is a nonzero finite-type $\mathbb C$-domain of dimension one. The zero ideal is proper, so [[thm-proper-ideal-contained-in-maximal-ideal]] gives a maximal ideal $\mathfrak m\subset A$; [[cor-affine-algebra-maximal-ideals-as-points-over-algebraically-closed-field]] identifies its residue field with $\mathbb C$. Thus the corresponding point is closed in $U$ and is not generic. Its closure in $C$ cannot be all of $C$, since its intersection with $U$ is just that one point whereas $U$ has dimension one. The only proper irreducible closed subsets of an integral curve are closed points, so this point is closed in $C$ and has residue field $\mathbb C$ ([[def-algebraic-curve-over-field]], [[def-residue-field-scheme-point]]).

[F5] For a closed point $p$ on a smooth proper curve, the divisor $[p]$ has degree $[\kappa(p):\mathbb C]$ ([[def-divisor-smooth-proper-curve]], [[def-degree-divisor-proper-curve]]); hence the point from [F4] supplies a divisor of degree one. A smooth proper genus-zero curve with a degree-one divisor is isomorphic to $\mathbb P^1$ ([[thm-genus-zero-point-implies-projective-line]]).

[F6] For a quasi-compact separated scheme, a finite affine open cover computes the sheaf cohomology of every quasi-coherent module by its ordered Čech complex ([[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]]). This applies to the two standard affine opens of $\mathbb P^1_{\mathbb C}$ and its quasi-coherent structure sheaf; their intersection is $\operatorname{Spec}\mathbb C[z,z^{-1}]$.

## Proof

**Proof technique:** use the nonnegative normalization defect to force both the geometric genus and every singularity defect to vanish.

1.1 From [F2], $p_a(C)=g(C)+\delta(C)$, where both terms are nonnegative integers. If $p_a(C)=0$, then $g(C)=0$ and $\delta(C)=0$. [F2, given, algebra]

2.1 By [F3], $\delta(C)=0$ makes $C$ regular, and regularity of a finite-type curve over $\mathbb C$ makes it smooth. Its smooth proper normalization therefore has genus $g(C)=0$ by step 1.1. By [F4]–[F5], $C$ has a divisor of degree one. Since $\mathbb C$ is algebraically closed, the integral curve $C$ is geometrically integral; the hypotheses of [[thm-genus-zero-point-implies-projective-line]] are therefore satisfied, and it gives $C\cong\mathbb P^1_{\mathbb C}$. Full AC is inherited from the normalization/cohomology suppliers and the maximal-ideal supplier. [A1, F1, F3, F4, F5, step 1.1, algebra]

3.1 Conversely, suppose $C\cong\mathbb P^1_{\mathbb C}$. By [F6], on the standard affine cover of $\mathbb P^1$ the structure-sheaf cohomology is computed by $\mathbb C[z]\oplus\mathbb C[z^{-1}]\to\mathbb C[z,z^{-1}]$, with differential $(f,g)\mapsto f-g$. Its kernel is the common constants $\mathbb C$, and its cokernel is zero because every Laurent polynomial is a sum of a polynomial in $z$ and a polynomial in $z^{-1}$. Thus $h^0=1$, $h^1=0$, $\chi(\mathcal O_C)=1$ and $p_a(C)=1-\chi(\mathcal O_C)=0$ by the arithmetic-genus definition in [F2]. This proves the reverse implication. [A1, F2, F6, algebra] ∎
