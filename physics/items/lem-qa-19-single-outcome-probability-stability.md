---
id: lem-qa-19-single-outcome-probability-stability
kind: lemma
title: Operator-norm error bounds a basis-outcome probability change
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 4
deps:
  - thm-qa-19-measurement-distribution
  - thm-bessel-inequality-and-finite-parseval-identity
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-operator-norm-is-the-largest-singular-value
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - thm-cauchy-schwarz-and-the-euclidean-norm
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 17 §17.1
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Chapter 17 §17.1, PDF pp.81–82 (printed p.74 on PDF p.82): basis amplitudes are measured by squared modulus."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 9 §9.1"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 9 §9.1, printed pp.71–72/PDF pp.83–84: finite unitary Hamiltonian evolution and operator-norm simulation error."
---

## Statement

Let $V$ be a nonzero finite-dimensional complex inner-product space with a
finite orthonormal basis $(e_y)_{y\in Y}$. Let $\psi\in V$ be unit, let $U,W:V\to V$
be unitary, and let $\rho\ge0$ satisfy
$\|W-U\|_{\rm op}\le\rho$. If $p_U(y)$ and $p_W(y)$ are the computational-basis
measurement probabilities after applying $U$ and $W$ to $\psi$, respectively,
then for every $y\in Y$,
$$|p_W(y)-p_U(y)|\le2\rho.$$

## Facts & Assumptions
**Given:** The space, orthonormal basis, unit vector, two unitary maps, and
operator-norm bound in the Statement.

[F1] [[thm-qa-19-measurement-distribution]]: for a unit vector $v$, the
probability of basis outcome $y$ is $|\langle v,e_y\rangle|^2$.

[F2] [[thm-bessel-inequality-and-finite-parseval-identity]]: for one unit
vector $e_y$, $|\langle v,e_y\rangle|^2\le\|v\|^2$.

[F3] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]] defines
$\|T\|_{\rm op}$ as the maximum of $\|Tv\|$ over unit $v$ on a nonzero
finite-dimensional domain; [[thm-operator-norm-is-the-largest-singular-value]]
proves that this maximum exists and is attained.

[F4] [[def-linear-isometry-and-orthogonal-or-unitary-operator]]: a unitary is
a linear isometry and preserves every vector norm.

[F5] [[def-complex-conjugate-real-imaginary-part-and-modulus]]: if
$z=a+ib$, then $|z|=\sqrt{a^2+b^2}$.

[F6] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: the Euclidean norm on
$\mathbb R^2$ satisfies the triangle inequality. Under the coordinates
$z\mapsto(\operatorname{Re}z,\operatorname{Im}z)$ this gives
$|z_1+z_2|\le|z_1|+|z_2|$ for complex numbers.

## Proof

**Proof technique:** direct.

1.1 Put $\delta:=(W-U)\psi$. Since $\psi$ is unit, [F3] and the operator-norm hypothesis give $\|\delta\|\le\rho$. [given, F3, construct]

2.1 Fix $y$ and put $a:=\langle W\psi,e_y\rangle$ and $b:=\langle U\psi,e_y\rangle$. By [F2] applied to $\delta$, $|a-b|\le\|\delta\|$. By [F4], $W\psi$ and $U\psi$ are unit; [F2] then gives $|a|\le1$ and $|b|\le1$. [given, F2, F4, step 1.1]

3.1 The triangle inequality [F5]–[F6] implies the reverse triangle inequality $\bigl||a|-|b|\bigr|\le|a-b|$. Factoring the difference of squares and using step 2.1 gives $\bigl||a|^2-|b|^2\bigr|\le|a-b|(|a|+|b|)\le2\rho$. By [F1], the left side is $|p_W(y)-p_U(y)|$. Since $y$ was arbitrary, the claimed bound holds for every basis outcome. [F1, F5, F6, step 1.1, step 2.1, algebra] ∎
