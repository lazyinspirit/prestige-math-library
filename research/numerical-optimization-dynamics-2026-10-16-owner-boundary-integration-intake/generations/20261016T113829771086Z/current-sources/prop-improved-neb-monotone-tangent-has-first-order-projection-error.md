---
id: prop-improved-neb-monotone-tangent-has-first-order-projection-error
kind: proposition
title: "The improved NEB monotone branch is generally only first-order consistent"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-improved-tangent-climbing-neb
  - cor-sin-x-over-x-limit
  - def-regular-minimum-energy-path-in-a-collision-free-tube
  - prop-central-string-projected-force-consistency
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Graeme Henkelman and Hannes Jónsson, Improved tangent estimate in the nudged elastic band method for finding minimum energy paths and saddle points"
      url: "https://hj.hi.is/papers/paperNewTangent.pdf"
      locator: "§IV, equations (8)–(12): strictly monotone branch uses a one-sided segment tangent"
    - title: "Xuanyu Liu, Huajie Chen, and Christoph Ortner, Convergence of the Discrete Minimum Energy Path"
      url: "https://arxiv.org/pdf/2204.07467"
      locator: "§2.2–2.3, Remark 2.1: the analyzed NEB upwind tangent yields an optimal O(h) path rate"
---

## Statement

There is a $C^\infty$ potential on a collision-free annular sector and a regular MEP with strictly monotone energy on an interior arc such that the improved NEB monotone branch has projected-force error $\Theta(h)$ on equal-arc samples. In particular, the improved-tangent NEB force in [[alg-improved-tangent-climbing-neb]] has no general $O(h^2)$ projected-force consistency bound, even when the curve and potential are smooth and the chord is nondegenerate.

## Facts & Assumptions

**Given:** The improved tangent rule in [[alg-improved-tangent-climbing-neb]], the normal-projection MEP condition in [[def-regular-minimum-energy-path-in-a-collision-free-tube]], and the limit supplier below.

[F1] [[alg-improved-tangent-climbing-neb]]: on a strictly increasing-energy triple, the selected unnormalized tangent is $\Delta_i^+=R_{i+1}-R_i$.

[F2] [[def-regular-minimum-energy-path-in-a-collision-free-tube]]: a regular MEP has zero gradient component normal to its true unit tangent.

[F3] [[cor-sin-x-over-x-limit]]: $\lim_{u\to0}\sin(u)/u=1$.

[F4] [[prop-central-string-projected-force-consistency]]: the proved $O(h^2)$ projected-force estimate is for the centered-tangent string discretization.

[A1] In this chart $\partial_sX=((R_0+n)/R_0)T(s)$ and $\partial_nX=N(s)$, with $T(s)=(-\sin(s/R_0),\cos(s/R_0))$ and $N(s)=(\cos(s/R_0),\sin(s/R_0))$.



**Given:** A radius $R_0>0$, an arc-length coordinate $s$ in $(-R_0\pi/4,R_0\pi/4)$, and a normal coordinate $n\in(-R_0/4,R_0/4)$. Define $X(s,n)=(R_0+n)(\cos(s/R_0),\sin(s/R_0))$. This is a smooth injective coordinate chart because $R_0+n>0$ and the angle interval has length less than $2\pi$. Put $a=R_0\pi/6$, $W(s)=(s^2-a^2)^2$, and $V(X(s,n))=W(s)+\tfrac12n^2$ on the chart. The curve $R(s)=X(s,0)$ is regular and unit speed.

## Proof

1.1 At $n=0$, [A1] gives $\partial_sX=T(s)$ and $\partial_nX=N(s)$, an orthonormal coordinate basis. The potential has coordinate derivatives $\partial_sV=W'(s)$ and $\partial_nV=n=0$, so $\nabla V(R(s))=W'(s)T(s)$. Therefore its component normal to $T(s)$ vanishes and $R$ is a regular MEP by [F2]. [A1, F2, given, construct, algebra]

2.1 We have $W'(s)=4s(s^2-a^2)>0$ for $-a<s<0$ and $W'(s)<0$ for $0<s<a$, so the energy is strictly increasing then decreasing. Since $V=W(s)+n^2/2\ge0$ with equality exactly at $(s,n)=(\pm a,0)$, those two endpoints are global minima on the sector. [given, step 1.1, algebra]

2.2 On an equal-arc mesh of width $h$ in the increasing subarc $(-a,0)$, [F1] selects the forward chord. For a circle, $R(s+h)-R(s)$ points in direction $T(s+h/2)$, so the angle between its normalized direction and $T(s)$ is exactly $h/(2R_0)$. The true gradient magnitude there is $|W'(s)|$, and its projection onto the normal complement of $T(s+h/2)$ has norm $|W'(s)|\sin(h/(2R_0))$. [A1, F1, step 1.1, algebra]

3.1 Fix $s$ strictly inside the subarc, so $|W'(s)|>0$. By [F3], the ratio of this force error to $h$ tends to $|W'(s)|/(2R_0)>0$ as $h\to0$. The chord length is $2R_0\sin(h/(2R_0))>0$ for small $h$, so there is no tangent degeneracy. A quantity whose ratio to $h$ tends to a positive number cannot be $O(h^2)$; this proves the claim and, by [F4], distinguishes this one-sided estimate from the centered-string estimate. [F3, F4, step 2.2, algebra] ∎

