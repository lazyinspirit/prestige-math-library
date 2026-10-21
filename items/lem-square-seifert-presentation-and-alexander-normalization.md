---
id: lem-square-seifert-presentation-and-alexander-normalization
kind: lemma
title: "The square Seifert presentation generates the knot Alexander polynomial"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 10
deps:
  - def-knot-seifert-pairing-and-matrix
  - def-oriented-seifert-surface
  - def-one-variable-alexander-module-of-an-oriented-link
  - thm-seifert-matrix-presents-knot-alexander-module
  - lem-seifert-matrix-s-equivalence-under-isotopy
  - def-alexander-polynomial-from-the-first-elementary-ideal
  - thm-the-alexander-polynomial-is-an-oriented-link-invariant
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - lem-seifert-matrix-skew-part-is-surface-intersection
  - def-elementary-ideals-of-a-finitely-presented-module
  - lem-elementary-ideals-are-independent-of-the-presentation
  - def-the-laurent-polynomial-ring
  - lem-units-and-powers-of-the-laurent-polynomial-ring
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Dale Rolfsen, Knots and Links"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf"
      locator: "Chapter 8.A–8.C, printed pp. 200–211"
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes"
      url: "https://www.dm.unibo.it/~francavi/did/21-22/knot.pdf"
      locator: "§6.2.3, Proposition 6.2.12, printed pp. 43–47"
---

## Statement

Assume the full Axiom of Choice. Let $K\subset S^3$ be a smooth oriented knot, let $F\subset S^3$ be a connected compact smooth oriented embedded surface with oriented boundary $K$, and let $\chi(F)=1-2g$ with $g\ge0$. Choose an ordered integral basis $a_1,\ldots,a_{2g}$ of $H_1(F;\mathbb Z)$, use the positive normal convention, and set $V_{ij}=\operatorname{lk}(a_i^+,a_j)$. Let $\Lambda=\mathbb Z[t^{\pm1}]$, let $A_K$ be the first homology of the infinite cyclic cover classified by total linking with $t$ acting by the positive-meridian deck transformation, and let $\Delta_K$ be a generator of the zeroth elementary ideal $E_0(A_K)$. Then the square matrix $M(t)=V-tV^T$ generates that ideal:

$$E_0(A_K)=(\det M(t)).$$

For $g=0$, the matrix is empty and its determinant is $1$. In every genus, $\det(V-V^T)=\pm1$, so every generator $\Delta_K$ satisfies $\Delta_K(1)=\pm1$. The ideal and determinant assertions are compatible with integral basis changes and with orientation-preserving ambient isotopies of knot-surface pairs.

## Statement references

[[def-oriented-seifert-surface|The definition and genus convention for a Seifert surface]]

[[def-knot-seifert-pairing-and-matrix|The positive-push Seifert matrix convention]]

[[def-one-variable-alexander-module-of-an-oriented-link|The one-variable Alexander module and positive deck action]]

[[def-alexander-polynomial-from-the-first-elementary-ideal|The Alexander polynomial as a generator of the zeroth elementary ideal]]

## Facts & Assumptions

**Given:** Full AC, an oriented knot $K\subset S^3$, a connected compact oriented Seifert surface $F$ with $\partial F=K$, and an ordered integral basis of $H_1(F;\mathbb Z)$.

[A1] Full AC is the assertion that every family of nonempty sets has a choice function. It is the stated hypothesis of the Alexander-module and Seifert-matrix presentation conventions used here. ([[def-axiom-of-choice]])

[F8] Full AC implies DC and hence the Axiom of Countable Choice, which is the stated choice hypothesis of the Seifert-surface and finite surface-normal-form suppliers. ([[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]])

[F1] A Seifert surface is connected, compact, smooth, oriented and embedded with the given knot as oriented boundary; in the chosen basis the positive-push matrix has entries $V_{ij}=\operatorname{lk}(a_i^+,a_j)$. ([[def-oriented-seifert-surface]], [[def-knot-seifert-pairing-and-matrix]])

[F2] The one-variable Alexander module is defined over $\Lambda=\mathbb Z[t^{\pm1}]$; $\Delta_K$ is a greatest common divisor of $E_0(A_K)$ and is determined up to a unit $\pm t^k$. ([[def-one-variable-alexander-module-of-an-oriented-link]], [[def-alexander-polynomial-from-the-first-elementary-ideal]], [[def-elementary-ideals-of-a-finitely-presented-module]], [[def-the-laurent-polynomial-ring]], [[lem-units-and-powers-of-the-laurent-polynomial-ring]])

[F3] The elementary ideal $E_0$ is independent of the finite presentation and depends only on the module's isomorphism class. ([[lem-elementary-ideals-are-independent-of-the-presentation]])

[F4] The positive-meridian convention gives an isomorphism $A_K\cong\operatorname{coker}(V-tV^T)$ over $\Lambda$. ([[thm-seifert-matrix-presents-knot-alexander-module]])

[F5] The skew part of the matrix is the surface intersection matrix: $V-V^T=J_F$, and $J_F$ is unimodular. ([[lem-seifert-matrix-skew-part-is-surface-intersection]])

[F6] Under an orientation-preserving ambient isotopy, a transported basis has the same Seifert matrix; a target basis change gives $V'=P^TVP$ for $P\in\mathrm{GL}_{2g}(\mathbb Z)$. ([[lem-seifert-matrix-s-equivalence-under-isotopy]])

[F7] An orientation-preserving ambient isotopy induces an isomorphism of Alexander modules and preserves $E_0(A_K)$ and $\Delta_K$ up to a unit. ([[thm-the-alexander-polynomial-is-an-oriented-link-invariant]])

## Proof

1.1 Put $n=2g$ and $M(t)=V-tV^T$. By [F1] this is the positive-push matrix in the Statement, and by [F4] $A_K$ is isomorphic to the cokernel of the square presentation matrix $M(t)$. The definition of $E_0$ uses the $n\times n$ minors; the only such minor of an $n\times n$ matrix is its determinant. Thus the presentation gives $E_0(\operatorname{coker}M)=(\det M)$, including $n=0$, where the sole empty minor is $1$. Presentation and isomorphism independence [F3] yields $E_0(A_K)=(\det M)$. [A1, F1, F8, F2, F3, F4, given, algebra]

2.1 Evaluating at $t=1$ gives $\det M(1)=\det(V-V^T)=\det J_F=\pm1$ by [F5]. Since $E_0(A_K)=(\det M)$ and $\Delta_K$ is a generator of that principal ideal, $\Delta_K=u\det M$ for a unit $u=\pm t^k$ by [F2]; every such unit evaluates to $\pm1$ at $t=1$. Hence $\Delta_K(1)=\pm1$. [F2, F5, step 1.1, algebra]

3.1 If the basis is changed by $P\in\mathrm{GL}_{n}(\mathbb Z)$, then $M'(t)=P^TM(t)P$ and $\det M'=(\det P)^2\det M=\det M$. Under an ambient isotopy, [F6] gives this same transported-matrix relation and [F7] preserves the Alexander ideal up to its unit generator. Thus the asserted ideal-generator relation is compatible with the stated choices. [F6, F7, step 1.1, given, algebra] ∎
