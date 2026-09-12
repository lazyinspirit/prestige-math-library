---
id: ex-great-circles-as-round-sphere-geodesics
kind: example
title: Great circles as round-sphere geodesics
status: published
origin: pipeline
pipeline_run: phase-2-next-17
deps: [def-geodesic-of-an-affine-connection, prop-geodesics-have-constant-speed-for-a-metric-compatible-connection, def-affine-connection-on-a-smooth-manifold, def-covariant-derivative-along-a-curve, thm-fundamental-theorem-of-riemannian-geometry, prop-coordinate-formula-for-the-lie-bracket, thm-a-regular-level-set-is-an-embedded-submanifold, prop-tangent-space-of-a-regular-level-set-is-the-kernel, prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions, def-riemannian-metric-and-riemannian-manifold, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-and-cosine-parametrize-the-unit-circle, thm-chain-rule, cor-zero-derivative-implies-constant]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Proposition 15.3.1, pp. 117--118
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
---

## Example

Let $n\geq1$, and give
$$S^n=\{x\in\mathbb R^{n+1}:\langle x,x\rangle=1\}$$
the round metric induced by the Euclidean inner product. Let $I\subseteq\mathbb R$ be an interval with nonempty interior. For any supplied $t_0\in I$, a nonconstant affinely parametrized geodesic $\gamma:I\to S^n$ has constant speed $c>0$ and can be written
$$\gamma(t)=\cos(c(t-t_0))p+\sin(c(t-t_0))u,$$
where $p=\gamma(t_0)$ and $u=\gamma'(t_0)/c$ are orthonormal. Its image is therefore an arc of the great circle $S^n\cap\operatorname{span}\{p,u\}$; the corresponding maximal geodesic has the whole great circle as its image. Conversely, every such constant-speed parametrization of a great circle is a geodesic. Constant geodesics are obtained separately by taking $\gamma(t)=p$.

## Facts & Assumptions

**Given:** The unit sphere with its induced round metric, the interval $I$, a smooth curve $\gamma:I\to S^n$, and a supplied $t_0\in I$.

[F1] For $F(x)=\langle x,x\rangle$ on $\mathbb R^{n+1}$, $dF_p(v)=2\langle p,v\rangle$ is nonzero at every $p\in F^{-1}(1)$. Thus [[thm-a-regular-level-set-is-an-embedded-submanifold]] makes $S^n$ a smooth boundaryless $n$-manifold, and [[prop-tangent-space-of-a-regular-level-set-is-the-kernel]] gives $T_pS^n=p^\perp$. The inclusion has injective differential on this tangent space, so [[prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions]] and [[def-riemannian-metric-and-riemannian-manifold]] make the restricted Euclidean inner product the round Riemannian metric.

[F2] [[def-affine-connection-on-a-smooth-manifold]] gives the connection axioms; [[prop-coordinate-formula-for-the-lie-bracket]] gives the componentwise bracket identity; [[def-covariant-derivative-along-a-curve]] supplies differentiation along a curve; and [[thm-fundamental-theorem-of-riemannian-geometry]] gives the unique metric-compatible torsion-free connection of the round metric.

[F3] [[def-geodesic-of-an-affine-connection]] defines an affinely parametrized geodesic by $D_t\gamma'=0$ and includes constant curves.

[F4] [[prop-geodesics-have-constant-speed-for-a-metric-compatible-connection]] makes the speed of a geodesic constant.

[L1] Sine and cosine have derivatives $\cos$ and $-\sin$, and the one-variable chain rule applies ([[thm-sine-and-cosine-derivatives]], [[thm-chain-rule]]).

[L2] For every real $s$, one has $\sin^2s+\cos^2s=1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[L3] The map $s\mapsto(\cos s,\sin s)$ covers the unit circle ([[thm-sine-and-cosine-parametrize-the-unit-circle]]).

[L4] A differentiable real function with zero derivative on an interval is constant, with included endpoints recovered by continuity ([[cor-zero-derivative-implies-constant]]).

## Verification

1.1 Differentiating $\langle p,p\rangle=1$ along sphere curves shows $T_pS^n\subseteq p^\perp$. Both spaces have dimension $n$ by [F1], so equality holds. For tangent fields $X,Y$, differentiating $\langle Y,p\rangle=0$ gives $\langle D_XY,p\rangle=-\langle X,Y\rangle$; hence the tangent projection of the ambient derivative is $$\widetilde\nabla_XY=D_XY+\langle X,Y\rangle p.$$ The ordinary componentwise product rule makes this an affine connection. Its normal correction is orthogonal to tangent vectors, so differentiating the Euclidean pairing proves metric compatibility. Also $D_XY-D_YX=[X,Y]$ componentwise, while the displayed normal correction is symmetric in $X,Y$; thus its torsion vanishes. By [F2], $\widetilde\nabla$ is the round sphere's Levi--Civita connection. [F1, F2, given]

2.1 Applying the formula from step 1.1 along $\gamma$ to a tangent field $V$ gives $$D_t^{\widetilde\nabla}V=V'+\langle\gamma',V\rangle\gamma.$$ In particular, [F3] says that $\gamma$ is a geodesic exactly when $$\gamma''+|\gamma'|^2\gamma=0.$$ [F3, step 1.1]

3.1 Suppose $\gamma$ is a geodesic. Its speed is a constant $c\geq0$ by [F4]. If $c=0$, every ambient component of $\gamma$ has zero derivative and [L4] makes $\gamma$ constant. For a nonconstant geodesic, therefore, $c>0$. Put $p=\gamma(t_0)$ and $u=\gamma'(t_0)/c$. The sphere constraint gives $|p|=1$ and $\langle p,\gamma'(t_0)\rangle=0$, so $p,u$ are orthonormal; step 2.1 gives $\gamma''=-c^2\gamma$. [F4, L4, step 2.1]

4.1 Define $q(t)=\cos(c(t-t_0))p+\sin(c(t-t_0))u$. By [L1], [L2], and the orthonormality from step 3.1, $q(t)\in S^n$, $q(t_0)=p$, $q'(t_0)=cu=\gamma'(t_0)$, and $q''=-c^2q$. For $h=\gamma-q$, the nonnegative function $E=|h'|^2+c^2|h|^2$ satisfies $$E'=2\langle h',h''+c^2h\rangle=0.$$ By [L4], $E$ is constant; its value at $t_0$ is zero, so $h=0$ throughout $I$. This also covers an included endpoint $t_0$, using the one-sided derivatives and endpoint continuity in [L4]. [L1, L2, L4, step 3.1, algebra]

5.1 The orthonormal vectors $p,u$ span a two-plane through the origin, and [L3] shows that the formula in step 4.1, defined for every real $t$, covers its unit circle with constant speed $c$. It is a geodesic by step 2.1, so it extends the original curve. Moreover, step 4.1 applies on the domain of any other extension with the same initial data at $t_0$ and identifies that extension with this formula; hence this all-real extension is unique and, since no interval properly contains $\mathbb R$, maximal. Its image is the whole great circle. Conversely, starting with orthonormal $p,u$ and $c>0$, [L1]--[L2] give $|q'|=c$ and $q''=-c^2q$, so step 2.1 gives $D_t^{\widetilde\nabla}q'=0$ and [F3] makes $q$ a geodesic; a constant curve is a geodesic by [F3]. The case $n=1$ is included: the two-plane is all of $\mathbb R^2$ and its unit circle is $S^1$. No point, direction, or plane is selected from a family: all are supplied or obtained uniquely from $\gamma,t_0$, so the argument uses no choice principle. [F3, L1, L2, L3, step 2.1, step 4.1, algebra] ∎

## Source locator

Datar, Proposition 15.3.1 and its complete proof, printed pp. 117--118 (PDF pp. 125--126), characterizes round-sphere geodesics as intersections with two-planes through the origin. The tangent-projection calculation and explicit constant-speed formula are derived above.
