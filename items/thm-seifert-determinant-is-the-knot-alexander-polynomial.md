---
id: thm-seifert-determinant-is-the-knot-alexander-polynomial
kind: theorem
title: "The Seifert determinant is the knot Alexander polynomial"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 11
deps:
  - def-knot-seifert-pairing-and-matrix
  - def-oriented-seifert-surface
  - def-one-variable-alexander-module-of-an-oriented-link
  - thm-seifert-matrix-presents-knot-alexander-module
  - lem-seifert-matrix-s-equivalence-under-isotopy
  - def-alexander-polynomial-from-the-first-elementary-ideal
  - thm-the-alexander-polynomial-is-an-oriented-link-invariant
  - lem-square-seifert-presentation-and-alexander-normalization
  - def-the-laurent-polynomial-ring
  - lem-units-and-powers-of-the-laurent-polynomial-ring
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Dale Rolfsen, Knots and Links"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf"
      locator: "Chapter 8.A–8.C, printed pp. 200–211"
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes"
      url: "https://www.dm.unibo.it/~francavi/did/21-22/knot.pdf"
      locator: "§6.2.3, Theorem 6.2.9 and Proposition 6.2.12, printed pp. 43–47"
---

## Statement

Assume the full Axiom of Choice. Let $K\subset S^3$ be a smooth oriented knot, and let $F\subset S^3$ be a connected compact smooth oriented embedded surface whose oriented boundary is $K$, with $\chi(F)=1-2g$. Choose an ordered integral basis $a_1,\ldots,a_{2g}$ of $H_1(F;\mathbb Z)$ and use the positive normal convention $V_{ij}=\operatorname{lk}(a_i^+,a_j)$. Let $A_K$ be the first homology of the infinite cyclic cover of $S^3\setminus K$ classified by total linking, with $t$ acting by the positive-meridian deck transformation. Let $\Delta_K(t)$ be the generator of the zeroth elementary ideal $E_0(A_K)$ in $\Lambda=\mathbb Z[t^{\pm1}]$, and write $p\doteq q$ when $p$ and $q$ differ by a unit $\pm t^k$ of $\Lambda$. Then for every such $F$ and basis,

$$\det(V-tV^T)\doteq\Delta_K(t).$$

The determinant is $1$ for the empty $0\times0$ matrix when $g=0$. This formula concerns the polynomial $\Delta_K$; the existing knot-normalized fraction $D_K=\Delta_K/(1-t)$ is a separate invariant.

## Statement references

[[def-oriented-seifert-surface|Connected compact oriented spanning surfaces and their genus]]

[[def-knot-seifert-pairing-and-matrix|The positive-push Seifert matrix convention]]

[[def-one-variable-alexander-module-of-an-oriented-link|The infinite cyclic cover and positive deck action]]

[[def-alexander-polynomial-from-the-first-elementary-ideal|The gcd-E0 polynomial and the separate knot-normalized fraction]]

[[lem-square-seifert-presentation-and-alexander-normalization|The square presentation's E0 generator and evaluation at one]]

## Facts & Assumptions

**Given:** Full AC, a smooth oriented knot $K\subset S^3$, a connected compact smooth oriented spanning surface $F$, and an ordered integral basis of $H_1(F;\mathbb Z)$.

[A1] Full AC is the choice-function axiom; it is the stated hypothesis of the Alexander-module and Seifert-matrix presentation suppliers. ([[def-axiom-of-choice]])

[F7] Full AC implies DC and hence the Axiom of Countable Choice, which is the stated choice hypothesis of the Seifert-surface supplier. ([[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]])

[F1] The surface has the specified oriented boundary, and its positive-push matrix is $V_{ij}=\operatorname{lk}(a_i^+,a_j)$. ([[def-oriented-seifert-surface]], [[def-knot-seifert-pairing-and-matrix]])

[F2] With the same positive normal and positive-meridian deck convention, $A_K\cong\operatorname{coker}(V-tV^T)$ over $\Lambda$. ([[thm-seifert-matrix-presents-knot-alexander-module]])

[F3] For every such matrix, $E_0(A_K)=(\det(V-tV^T))$ and $\det(V-V^T)=\pm1$. ([[lem-square-seifert-presentation-and-alexander-normalization]])

[F4] $\Delta_K$ is a generator of $E_0(A_K)$; $\Lambda=\mathbb Z[t^{\pm1}]$ is an integral domain whose units are exactly $\pm t^k$. ([[def-one-variable-alexander-module-of-an-oriented-link]], [[def-alexander-polynomial-from-the-first-elementary-ideal]], [[def-the-laurent-polynomial-ring]], [[lem-units-and-powers-of-the-laurent-polynomial-ring]])

[F5] Under an orientation-preserving ambient isotopy of knot-surface pairs, the transported Seifert matrix is unchanged and any other target basis changes it by $V'=P^TVP$ with $P\in\mathrm{GL}_{2g}(\mathbb Z)$. ([[lem-seifert-matrix-s-equivalence-under-isotopy]])

[F6] The Alexander modules of orientation-preserving ambient-isotopic links are isomorphic, so their Alexander polynomials agree up to a unit. ([[thm-the-alexander-polynomial-is-an-oriented-link-invariant]])

## Proof

1.1 Fix the arbitrary knot, surface, and basis in the Statement, put $n=2g$, and set $M=V-tV^T$. By [F2] the cokernel of $M$ is $A_K$, and [F3] gives $E_0(A_K)=(\det M)$. By [F4], $\Delta_K$ also generates this ideal. The local lemma gives $(\det M)(1)=\pm1$, so $\det M\ne0$. If $\Delta_K=a\det M$ and $\det M=b\Delta_K$ for $a,b\in\Lambda$, then $\det M=ba\det M$; since $\Lambda$ is a domain and $\det M\ne0$, $ba=1$. Thus $a$ is a unit, and [F4] identifies it as $\pm t^k$. Hence $\det M\doteq\Delta_K$. [A1, F7, F2, F3, F4, given, algebra]

2.1 If the basis is changed by $P\in\mathrm{GL}_{n}(\mathbb Z)$, then $M'=P^TMP$ and $\det M'=(\det P)^2\det M=\det M$. Under an orientation-preserving ambient isotopy, [F5] gives the same transported-matrix relation and [F6] preserves $\Delta_K$ up to a unit. Since the original $K,F$, and basis were arbitrary, the formula holds for every surface and basis in the Statement and is compatible with the oriented knot invariant. [F1, F5, F6, step 1.1, given, algebra] ∎
