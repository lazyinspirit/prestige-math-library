---
id: lem-qftx-three-dimensional-curvature-determined-by-ricci
kind: lemma
title: "Three-dimensional curvature is determined by Ricci curvature"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: "Pure mathematics; a finite-dimensional Lorentz-signature tensor identity, with no empirical claim."
dependency_level: 0
deps: []
justified_by: []
dependency_roles: {}
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Steven Carlip, Quantum Gravity in 2+1 Dimensions: The Case of a Closed Universe"
      url: "https://arxiv.org/pdf/gr-qc/0409039"
      locator: "§2.1, equation (2.1.1): the three-dimensional algebraic Riemann–Ricci identity."
verification:
  precheck: pending
---

## Statement

Let $V$ be a three-dimensional real vector space with Lorentzian inner product $g$ of signature $(-,+,+)$. Let $R_{abcd}$ be an algebraic curvature tensor: it is antisymmetric in $a,b$ and in $c,d$, symmetric under exchange of the pairs, and satisfies $R_{abcd}+R_{acdb}+R_{adbc}=0$. Define $\operatorname{Ric}_{bd}=g^{ac}R_{abcd}$ and $\operatorname{Scal}=g^{bd}\operatorname{Ric}_{bd}$. Then

$$R_{abcd}=g_{ac}\operatorname{Ric}_{bd}-g_{ad}\operatorname{Ric}_{bc}-g_{bc}\operatorname{Ric}_{ad}+g_{bd}\operatorname{Ric}_{ac}-\tfrac12\operatorname{Scal}(g_{ac}g_{bd}-g_{ad}g_{bc}).$$

In particular, $\operatorname{Ric}=0$ if and only if $R_{abcd}=0$.

## Facts & Assumptions

**Given:** The finite-dimensional vector space, metric, and algebraic curvature tensor in the statement.

[A1] The metric is nondegenerate with an orthonormal basis in which $g=\operatorname{diag}(-1,1,1)$; the inverse $g^{ab}$ is used for contractions.

## Proof

1.1 Define $S_{abcd}$ to be the right-hand side of the displayed formula. Symmetry of $g$ and $\operatorname{Ric}$ gives antisymmetry of $S$ in each index pair and symmetry under exchanging the pairs. Substitution into $S_{abcd}+S_{acdb}+S_{adbc}$ cancels the Ricci and scalar terms pairwise, so $S$ satisfies the first Bianchi identity and is an algebraic curvature tensor. Contracting the first and third indices gives
$$g^{ac}S_{abcd}=3\operatorname{Ric}_{bd}-\operatorname{Ric}_{bd}-\operatorname{Ric}_{bd}+\operatorname{Scal}\,g_{bd}-\tfrac12\operatorname{Scal}(3g_{bd}-g_{bd})=\operatorname{Ric}_{bd}.$$
Thus $W:=R-S$ is an algebraic curvature tensor with zero Ricci contraction. [given, A1, algebra]

2.1 In the basis of [A1], an algebraic curvature tensor is represented by a symmetric $3\times3$ matrix on the basis bivectors $e_0\wedge e_1,e_0\wedge e_2,e_1\wedge e_2$. Write its diagonal entries as $x=W_{0101}$, $y=W_{0202}$, and $z=W_{1212}$. The three diagonal zero-Ricci equations are $x+y=0$, $-x+z=0$, and $-y+z=0$. They imply $2x=0$, hence $x=y=z=0$. [A1, step 1.1, algebra]

3.1 The three off-diagonal zero-Ricci equations are $\operatorname{Ric}(W)_{01}=W_{0212}=0$, $\operatorname{Ric}(W)_{02}=-W_{0112}=0$, and $\operatorname{Ric}(W)_{12}=-W_{0102}=0$. They set the three off-diagonal entries of the same symmetric bivector matrix to zero. Therefore $W=0$, so $R=S$ and the displayed identity holds. If $\operatorname{Ric}=0$, then its scalar contraction is zero and the formula gives $R=0$; conversely $R=0$ implies its Ricci contraction vanishes. [step 1.1, step 2.1, algebra] ∎
