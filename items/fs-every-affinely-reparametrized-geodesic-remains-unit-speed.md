---
id: "fs-every-affinely-reparametrized-geodesic-remains-unit-speed"
kind: "false-statement"
title: "Every affinely reparametrized geodesic remains unit speed"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["prop-christoffel-formula-for-the-levi-civita-connection", "prop-affine-reparametrization-of-a-geodesic-is-a-geodesic", "prop-coordinate-geodesic-equation"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Remark 15.1.2 and Example 15.1.3, pp. 113--114
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: "direct"
---

## Statement

**False claim:** if a geodesic is parametrized with unit speed, then every
affine reparametrization of it is still parametrized with unit speed.

## Facts & Assumptions

**Given:** The Euclidean line with metric $dx^2$, the curve $\gamma(s)=s$ on $\mathbb R$, and the affine diffeomorphism $\ell(t)=2t$ of $\mathbb R$.

[F1] [[prop-christoffel-formula-for-the-levi-civita-connection]] computes the Levi--Civita symbol from the metric coefficient; for the constant Euclidean coefficient $g_{11}=1$ every derivative in that formula is zero, so $\Gamma^1{}_{11}=0$. [[prop-coordinate-geodesic-equation]] says that in a coordinate $x$ a curve is geodesic exactly when $$\ddot x+\Gamma^1{}_{11}(x)\dot x^2=0.$$

[F2] [[prop-affine-reparametrization-of-a-geodesic-is-a-geodesic]] says that $\gamma(at+b)$ is geodesic whenever $\gamma$ is, and that its speed is $|a|$ times the speed of $\gamma$.

## Refutation

**Proof technique:** direct.

1.1 In the global Cartesian coordinate on the Euclidean line, [F1] gives $\Gamma^1{}_{11}=0$. The coordinate function of $\gamma$ is $x(s)=s$, so $\ddot x=0$ and [F1] makes $\gamma$ a geodesic. Its velocity is $\partial_x$, whose norm for $dx^2$ is $1$, so $\gamma$ has unit speed. [F1, given, algebra]

2.1 The affine map $\ell(t)=2t$ has nonzero constant slope and hence is a genuine affine reparametrization. By [F2], $\widetilde\gamma=\gamma\circ\ell$ is still a geodesic, but $|\dot{\widetilde\gamma}(t)|=|2|\,|\dot\gamma(2t)|=2$, so it is not unit speed. [F2, step 1.1]

3.1 Thus the displayed curve and reparametrization refute the universal claim. The exact failure is the missing restriction $|a|=1$: slopes $1$ and $-1$ preserve unit speed, every other nonzero absolute slope changes it, and slope $0$ would give a constant geodesic rather than a reparametrization diffeomorphism. The witness is one-dimensional, has no finite parameter endpoints or degenerate interval, and is explicit, so no choice principle is used. [step 2.1] ∎
