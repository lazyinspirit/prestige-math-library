---
id: thm-index-of-a-nondegenerate-vector-field-zero
kind: theorem
title: "The index of a nondegenerate vector-field zero"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-isolated-zero-and-local-index-of-a-vector-field, def-nondegenerate-zero-of-a-vector-field, lem-vector-field-index-is-independent-of-chart-ball-and-trivialization, lem-reduced-degree-into-the-zero-sphere-is-homotopy-invariant-and-multiplicative, def-degree-of-a-map-between-oriented-closed-manifolds, prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps, thm-degree-is-invariant-under-proper-smooth-homotopy, prop-degree-is-multiplicative-under-composition, def-induced-tangent-bundle-chart, def-countable-choice]
justified_by: []
aliases: []
sources:
  scraped: []
  references:
    - title: "John W. Milnor, Topology from the Differentiable Viewpoint (complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "§6, Lemmas 4-5, printed pp. 37-38 (the index of a nondegenerate zero is the sign of the Jacobian determinant)"
    - title: "Joel W. Robbin and Dietmar A. Salamon, Introduction to Differential Topology (web draft 2018, complete PDF)"
      url: "https://umutvg.github.io/difftop.pdf"
      locator: "Lemma 2.2.3, printed p. 32 (sign rule for nondegenerate zeros)"
dependency_level: 3
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the canonical smooth tangent-bundle structure.

Let $M$ be a smooth $n$-manifold, $n\ge1$, let $X$ be a smooth vector field and
let $p$ be a nondegenerate zero of $X$
([[def-nondegenerate-zero-of-a-vector-field]]). Then
$$\operatorname{ind}_pX=\operatorname{sign}\det(DX_p:T_pM\to T_pM)\in\{+1,-1\}.$$
In particular every nondegenerate zero has index $+1$ or $-1$.

## Facts & Assumptions

**Given:** A smooth $n$-manifold $M$, a smooth vector field $X$ and a nondegenerate zero $p$ of $X$.

[F1] In a smooth chart of the given smooth structure $(\varphi,U)$ with $\varphi(p)=0$ the chart representative vanishes at $0$ and its derivative there is the vertical derivative: $X_\varphi(0)=0$, $DX_\varphi(0)$ corresponds to $DX_p$ under the chart trivialization, and $DX_p$ invertible is equivalent to $DX_\varphi(0)$ invertible; moreover $X_\varphi(u)=Au+R(u)$ with $A:=DX_\varphi(0)$ and $R(u)=O(|u|^2)$ ([[def-nondegenerate-zero-of-a-vector-field]], [[def-induced-tangent-bundle-chart]]).

[F2] The index is computed by the normalized field on a small sphere, $\operatorname{ind}_pX=\deg\bigl(v\mapsto X_\varphi(\varepsilon v)/|X_\varphi(\varepsilon v)|\bigr)$ with the standard orientations ($n\ge2$), and for $n=1$ by the reduced degree of the induced map $S^0\to S^0$ ([[def-isolated-zero-and-local-index-of-a-vector-field]]); the value does not depend on the chart or the admissible radius ([[lem-vector-field-index-is-independent-of-chart-ball-and-trivialization]]).

[F3] The normalized linear map $L_A(v):=Av/|Av|$ of an invertible $A$ is a diffeomorphism of $S^{n-1}$ whose local orientation sign is $\operatorname{sign}\det A$, hence $\deg L_A=\operatorname{sign}\det A$; for $n=1$ this is the reduced degree of $v\mapsto\operatorname{sign}(A)v$. Degree is invariant under homotopies of maps of $S^{n-1}$ ($n\ge2$) and, for $n=1$, under homotopies of maps of $S^0$ ([[def-degree-of-a-map-between-oriented-closed-manifolds]], [[thm-degree-is-invariant-under-proper-smooth-homotopy]], [[prop-degree-is-multiplicative-under-composition]], [[lem-reduced-degree-into-the-zero-sphere-is-homotopy-invariant-and-multiplicative]]).

## Proof

1.1 Take a smooth chart as in [F1] and put $A:=DX_\varphi(0)$, so $X_\varphi(u)=Au+R(u)$ with $R(u)=O(|u|^2)$ and $A$ invertible; write $c:=|A^{-1}|^{-1}>0$ and $|R(u)|\le C|u|^2$ with $C>0$. For $\varepsilon<c/(2C)$ and $v\in S^{n-1}$ the vector $Av+t\varepsilon^{-1}R(\varepsilon v)$ with $t\in[0,1]$ has norm at least $c-\varepsilon^{-1}C\varepsilon^2\ge c/2>0$, so $H_t(v):=\bigl(Av+t\varepsilon^{-1}R(\varepsilon v)\bigr)/|\cdots|$ is a homotopy from the normalized linear map $L_A$ to the normalized chart field $v\mapsto X_\varphi(\varepsilon v)/|X_\varphi(\varepsilon v)|$. [F1, algebra]

2.1 For $n\ge2$ homotopy invariance gives $\operatorname{ind}_pX=\deg L_A=\operatorname{sign}\det A$, and for $n=1$ the same homotopy is one of maps $S^0\to S^0$, so by [F3] the reduced degrees agree and again $\operatorname{ind}_pX=\deg L_A=\operatorname{sign}\det A$; since $A$ corresponds to $DX_p$ by [F1], $\det A$ and $DX_p$ have the same sign and $\operatorname{ind}_pX=\operatorname{sign}\det(DX_p)\in\{+1,-1\}$, because $DX_p$ is invertible. [F1, F2, F3, step 1.1, algebra] ∎
