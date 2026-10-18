---
id: thm-classical-master-equation-defines-square-zero-differential
kind: theorem
title: A classical master solution defines a square-zero differential
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-bv-algebra-and-degree-plus-one-bracket
  - def-classical-and-formal-quantum-master-equations
  - thm-bv-derived-bracket-is-odd-poisson
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Ezra Getzler, Batalin–Vilkovisky algebras and two-dimensional topological field theories, arXiv:hep-th/9212043v3"
      url: "https://arxiv.org/pdf/hep-th/9212043"
      locator: "§1, Proposition 1.2, PDF pp. 5–6: the degree-one derived bracket and its Jacobi identity."
    - title: "Yvette Kosmann-Schwarzbach and Juan Monterde, Divergence operators and odd Poisson brackets, Annales de l’Institut Fourier 52 (2002)"
      url: "https://arxiv.org/pdf/math/0002209"
      locator: "§1.1, printed pp. 420–421 (PDF pp. 1–2): the shifted odd-Jacobi convention; the local proof supplies the master-equation consequence."
---

## Statement

Let $(A,\Delta)$ be as in [[def-bv-algebra-and-degree-plus-one-bracket]], and
let $S\in A^0$ satisfy the classical master equation in
[[def-classical-and-formal-quantum-master-equations]]. Then
$d_S:A\to A$, $d_S(a)=\{S,a\}$, has degree $+1$ and satisfies $d_S^2=0$.

## Facts & Assumptions

**Given:** A BV algebra over a characteristic-zero field, an element $S\in A^0$,
and the CME $\{S,S\}=0$.

[F1] [[def-classical-and-formal-quantum-master-equations]]: the classical master
equation for a degree-zero element $S$ is $\{S,S\}=0$.

[F2] [[thm-bv-derived-bracket-is-odd-poisson]]: the bracket has degree $+1$ and
satisfies $\{a,\{b,c\}\}=\{\{a,b\},c\}+(-1)^{(|a|+1)(|b|+1)}\{b,\{a,c\}\}$.

## Proof

1.1 Since the bracket has degree $+1$ by [F2] and $|S|=0$, the map $d_S(a)=\{S,a\}$ sends $A^r$ into $A^{r+1}$ and has degree $+1$. [given, F2, algebra]

1.2 Apply the Jacobi identity [F2] with $a=b=S$ and third entry $x$; its sign is $(-1)^{(0+1)(0+1)}=-1$, so $\{S,\{S,x\}\}=\{\{S,S\},x\}-\{S,\{S,x\}\}$ and therefore $2d_S^2(x)=\{\{S,S\},x\}$. [given, F2, algebra]

2.1 The CME [F1] makes the right side zero. Characteristic zero makes $2$ invertible, hence $d_S^2(x)=0$ for every $x\in A$. [given, F1, step 1.2, algebra] ∎
