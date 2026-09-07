---
id: prop-divergence-is-well-defined-and-has-the-coordinate-formula
title: "Coordinate formula and well-definedness of divergence"
kind: proposition
status: draft
origin: pipeline
deps: ["def-divergence-relative-to-a-volume-form", "thm-local-coordinate-formula-for-the-exterior-derivative"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "EoM Divergence Comments; Lee defining divergence equation p.423; coordinate derivation from published Cartan formula"
      url: "https://encyclopediaofmath.org/wiki/Divergence"
proof_strategy: "Direct calculation and localization"
---
## Statement

If $\mu=\rho\,dx^1\wedge\cdots\wedge dx^n$ with $\rho$ nowhere zero and $X=\sum_iX^i\partial_i$, then
$$\operatorname{div}_\mu X=\rho^{-1}\sum_{i=1}^n\partial_i(\rho X^i).$$
This defines a smooth global function, also at boundary points. In dimension zero $X=0$ and divergence is zero.

## Facts & Assumptions

[F1] [[def-divergence-relative-to-a-volume-form]]: Let $\mu$ be a positive volume form and $X$ a smooth vector field on a smooth oriented manifold, with boundary allowed. The **divergence relative to $\mu$** is the smooth scalar function determined by $$\mathcal L_X\mu=(\operatorname{div}_\mu X)\mu.$$ At a boundary point use the local-extension Lie derivative of lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary. The nonzero top form spans each top exterior-power fiber, so the scalar is unique. Smooth existence and its coordinate formula are discharged by prop-divergence-is-well-defined-and-has-the-coordinate-formula.

[F2] [[thm-local-coordinate-formula-for-the-exterior-derivative]]: Let $(U,x^1,\ldots,x^n)$ be a smooth chart on a smooth manifold and $\omega$ a smooth $k$-form on $U$, with $k\ge0$. Summing over increasing $k$-tuples $I$, and writing $dx^I=dx^{i_1}\wedge\cdots\wedge dx^{i_k}$, if $\omega=\sum_I\omega_I\,dx^I$, then $$d\omega=\sum_I d\omega_I\wedge dx^I.$$

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 For $n\geq1$, $d\mu=0$ by degree. Cartan’s boundary-compatible identity, used in the defining Lie derivative, gives $\mathcal L_X\mu=d(\iota_X\mu)$. Here $\iota_X\mu=\sum_i(-1)^{i-1}\rho X^i\,dx^1\wedge\cdots\wedge\widehat{dx^i}\wedge\cdots\wedge dx^n$. [F1, algebra]

2.1 The exterior coordinate formula differentiates this to $(\sum_i\partial_i(\rho X^i))\,dx^1\wedge\cdots\wedge dx^n$. Divide by the nowhere-zero smooth $\rho$. The quotient is smooth; on overlaps two such quotients multiply the same nonvanishing $\mu$ to give the same $\mathcal L_X\mu$, so they agree. Boundary extensions give the same first derivatives, as in the definition. [F1, F2, step 1.1]

3.1 For $n=0$ the tangent fibers are zero, so $X=0$, the Lie derivative is zero, and its quotient by the nonzero scalar $\mu$ is zero. The coordinate sum is empty. For any dimension the zero vector field and the empty manifold introduce no exception. [F1, step 2.1] ∎
