---
id: def-f4-shioda-map-and-torsional-coweight-data
kind: definition
title: "Shioda projection and torsional coweight data"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 4
domain: mathematics
library: physics
category: string-theory
axiom_strength: "Full AC is inherited through the elliptic-fibration supplier; the intersection-matrix calculation below uses no choice principle beyond the supplied geometric data."
deps:
  - def-f4-elliptic-fibration-with-section
  - def-f4-crepant-resolution-and-matter-surface
  - def-axiom-of-choice
dependency_roles:
  def-f4-elliptic-fibration-with-section: mathematical-premise
  def-f4-crepant-resolution-and-matter-surface: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Timo Weigand, TASI Lectures on F-theory, arXiv:1806.01854v1"
      url: "https://arxiv.org/pdf/1806.01854v1"
      locator: "§7.1, pp. 59–62, Shioda map and Cartan corrections; §7.7, pp. 76–78, torsional sections and global group data."
    - title: "David R. Morrison and Daniel S. Park, F-Theory and the Mordell-Weil Group of Elliptically-Fibered Calabi-Yau Threefolds, arXiv:1208.2695v2"
      url: "https://arxiv.org/pdf/1208.2695v2"
      locator: "§1 and §3.1, printed pp. 1–3 and 6–8; rational sections and the Shioda map in the six-dimensional CY3 setting."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $B$ be a smooth projective complex threefold and let $\pi:\widehat Y\to B$ be a smooth projective fourfold with a specified elliptic-fibration-with-section structure as in [[def-f4-elliptic-fibration-with-section]]. Assume that $\widehat Y$ is a chosen smooth resolution of a Weierstrass model as in [[def-f4-crepant-resolution-and-matter-surface]]; existence, projectivity, and elliptic flatness are hypotheses on this particular input. Let $O$ be the zero-section and let $S$ be another specified rational section, viewed by closure as a divisor class. Fix a smooth gauge divisor $D\subset B$. The root datum used here is specified by an integer matrix $A=(A_{ij})_{1\le i,j\le r}$, where $r\ge0$, $A_{ii}=2$, $A_{ij}\in\{0,-1\}$ for $i\ne j$, and $A$ is symmetric positive definite when $r>0$. These conditions define finite-type simply-laced Cartan data; no other root-system structure is used below. Let $V$ and $V^\vee$ be real vector spaces with bases $\alpha_1,\ldots,\alpha_r$ and $\alpha_1^\vee,\ldots,\alpha_r^\vee$, respectively, and define their bilinear root-coroot pairing by $\langle\alpha_i,\alpha_j^\vee\rangle=A_{ij}$. The simple roots and coroots are these basis vectors. Define the root and coroot lattices by $Q=\sum_i\mathbb Z\alpha_i$ and $Q^\vee=\sum_i\mathbb Z\alpha_i^\vee$. If $r=0$, take $V=V^\vee=0$, $A$ to be the unique endomorphism of the zero space, and all basis-indexed sums to be empty.

Assume the chosen resolution has Cartan divisors $E_1,\ldots,E_r$ and specified integral fibral curves $C_1,\ldots,C_r$ over the generic point of $D$, with $E_i\cdot C_j=-A_{ij}$. Intersections are degrees of the restricted divisor line bundles; all divisor classes and push-forwards below are taken in rational numerical equivalence, with proper push-forward along $\pi$. Define the Shioda projection datum of $S$ by
$$
\sigma(S)=[S]-[O]-\pi^*\pi_*\bigl(([S]-[O])\cdot[O]\bigr)+\sum_{i,j=1}^r(A^{-1})_{ij}\bigl(([S]-[O])\cdot C_j\bigr)[E_i].
$$
For a finite-order section $T$ in the Mordell–Weil group of the generic fiber, put $\delta_j(T)=([T]-[O])\cdot C_j$ and define
$$
\lambda_T=\sum_{i,j=1}^r(A^{-1})_{ij}\delta_j(T)\alpha_i^\vee.
$$
The coweight lattice is $P^\vee=\{\lambda\in V^\vee: \langle\alpha_j,\lambda\rangle\in\mathbb Z\text{ for every }j\}$; the associated fractional coweight datum is the class of $\lambda_T$ in $P^\vee/Q^\vee$. For $r=0$, both $P^\vee$ and $Q^\vee$ are $\{0\}$. No claim that this class is nonzero, that the Shioda assignment is a group homomorphism, or that a physical gauge group is determined is part of this definition.

## Definition references

[[def-f4-elliptic-fibration-with-section]]

[[def-f4-crepant-resolution-and-matter-surface]]

[[def-axiom-of-choice]]

[T. Weigand, TASI Lectures on F-theory, §7.1 and §7.7](https://arxiv.org/pdf/1806.01854v1)

[Morrison–Park, §§1 and 3.1](https://arxiv.org/pdf/1208.2695v2)

## Facts & Assumptions

**Given:** A specified smooth projective elliptic fourfold with a zero-section, a rational section, one chosen smooth projective resolution, and the finite-type simply-laced Cartan intersection data stated in the Definition.

[F1] [[def-f4-elliptic-fibration-with-section]]: “An **elliptic fibration with section** is a flat genus-one fibration $\pi:Y\to B$ together with a specified regular section $s:B\to Y$, meaning $\pi\circ s=\operatorname{id}_B$.” Its Mordell–Weil group is the group of rational points on the pointed generic fiber.

[F2] [[def-f4-crepant-resolution-and-matter-surface]]: “A **crepant resolution** of $Y_W$ is specified data $\rho:\widehat Y\longrightarrow Y_W$ where $\widehat Y$ is smooth, $\rho$ is proper and birational, and $\omega_{\widehat Y}\cong\rho^*\omega_{Y_W}$.” The supplier does not assert projectivity or elliptic flatness; those are additional hypotheses here.

[A1] The sections, divisors, curves, Cartan matrix, and projective morphism between smooth varieties in the Definition are supplied data. In particular, $E_i\cdot C_j=-A_{ij}$ is an explicit convention, not inferred from a Kodaira label.

## Proof

**Proof technique:** Check that each term is a well-typed rational divisor class, then compute its degree on the specified fibral curves and verify the coweight pairing.

1.1 The section closures $S$ and $O$ and the Cartan divisors $E_i$ are divisors on the smooth fourfold; their products with $O$ are codimension-two cycle classes. Properness of $\pi$ sends that codimension-two class to a codimension-one class on the threefold base, so its pullback is a divisor class. Each degree $([S]-[O])\cdot C_j$ is integral, and multiplication by $A^{-1}$ gives rational coefficients. Thus the displayed expression defines a rational numerical divisor class. The existence of the sectioned fibration and of a chosen smooth resolution is precisely the supplied input form in [F1] and [F2]; projectivity and the Cartan data are separately assumed in [A1]. [given, A1, F1, F2, algebra]

2.1 A base-pulled divisor has degree zero on each curve $C_j$, since $C_j$ maps to a point of $B$. Write $\delta_j=([S]-[O])\cdot C_j$. The degree of the first difference in $\sigma(S)$ on $C_j$ is $\delta_j$. The Cartan correction has degree $-\sum_{i,k}(A^{-1})_{ik}\delta_k A_{ij}=-\delta_j$, using symmetry and $A^{-1}A=I$. Therefore $\sigma(S)\cdot C_j=0$ for every $j$. [given, A1, step 1.1, algebra]

3.1 For a torsion section $T$, the divisor-degree vector $\delta(T)$ is integral. The coefficient vector $c=A^{-1}\delta(T)$ satisfies $\langle\alpha_j,\sum_i c_i\alpha_i^\vee\rangle=\sum_i A_{ji}c_i=\delta_j(T)$, again using symmetry of the simply-laced Cartan matrix. These pairings are integers, so $\lambda_T\in P^\vee$ by its definition. Its class modulo $Q^\vee$ is therefore defined, although it may be zero. [given, A1, step 1.1, algebra] ∎

## Remarks

This item supplies only a local algebraic definition and the two displayed matrix checks. It does not prove that a given fibration has a projective crepant resolution, that the Mordell–Weil group is finitely generated, that torsion is nonzero, or that the coweight class acts as a gauge-group quotient. Those are separate geometric or physical inputs.
