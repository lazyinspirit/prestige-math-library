---
id: "fs-every-geodesic-segment-is-globally-length-minimizing"
kind: "false-statement"
title: "Every geodesic segment is globally length minimizing"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-countable-choice", "thm-existence-uniqueness-and-smooth-dependence-of-geodesics", "thm-radial-geodesics-minimize-length-in-a-normal-neighborhood", "prop-coordinate-geodesic-equation", "prop-christoffel-formula-for-the-levi-civita-connection", "def-circle-as-real-line-mod-integers", "prop-coordinate-criterion-for-a-riemannian-metric", "def-riemannian-metric-and-riemannian-manifold", "def-riemannian-speed-and-length"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Corollary 16.4.5 and following counterexample, p. 126; Corollary 18.1.3 and proof, pp. 135--136
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: "direct"
---

## Statement

**False claim:** every geodesic segment in a Riemannian manifold is globally
length minimizing among all piecewise smooth curves with the same endpoints.

The explicit counterexample below is choice-free. We assume
$\mathrm{AC}_\omega$ only when comparing it with the library's current local
radial-minimization theorem.

## Facts & Assumptions

**Given:** The quotient circle $S^1=\mathbb R/\mathbb Z$ with quotient map $p(s)=[s]$, equipped with the flat metric whose expression in every lifted coordinate is $d\theta^2$.

[A1] [[def-countable-choice]] is the assumed $\mathrm{AC}_\omega$.

[F1] Under [A1], [[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]] identifies a geodesic from its initial data, and [[thm-radial-geodesics-minimize-length-in-a-normal-neighborhood]] says that a radial geodesic with initial vector in a normal ball minimizes among curves that remain in its normal neighbourhood.

[F2] [[prop-christoffel-formula-for-the-levi-civita-connection]] computes the Levi--Civita symbols from the metric coefficients, and [[prop-coordinate-geodesic-equation]] characterizes geodesics by the resulting coordinate equation.

[F3] [[def-circle-as-real-line-mod-integers]] gives $p(x)=p(y)$ exactly when $x-y\in\mathbb Z$.

[F4] The quotient charts are constructed in step 1.1. Their integer-translation overlaps have derivative one, so the stated local coefficient $g_{11}=1$ glues to a positive smooth tensor by [[prop-coordinate-criterion-for-a-riemannian-metric]] and [[def-riemannian-metric-and-riemannian-manifold]]. [[def-riemannian-speed-and-length]] defines a curve's length as the integral of its speed over its finitely many smooth pieces.

## Refutation

**Proof technique:** direct.

1.1 We construct the smooth quotient circle directly. If $I\subset\mathbb R$ is an open interval of length at most $1$, then $p|_I$ is injective by [F3]: two distinct points of the open interval differ in absolute value by less than $1$ and hence cannot differ by a nonzero integer. Moreover $p^{-1}(p[I])=\bigcup_{n\in\mathbb Z}(I+n)$ is open, and for every open $U\subset I$ the saturation $p^{-1}(p[U])=\bigcup_{n\in\mathbb Z}(U+n)$ is open; hence $p[I]$ is open and $(p|_I)^{-1}$ is a quotient chart. Distinct orbits admit disjoint chart intervals: for $[x]\ne[y]$, the distance from $x-y$ to $\mathbb Z$ is positive by taking the smaller of the two positive distances to the adjacent integers, and intervals of less than one-third that size have disjoint quotient images. Images of rational intervals form a countable basis. On each component of an overlap, two lifted coordinates differ by a fixed integer translation, so these charts define a smooth boundaryless circle and the coefficient $g_{11}=1$ glues by [F4]. Therefore [F2] gives $\Gamma^1{}_{11}=0$ in every such chart. [F2, F3, F4, given, algebra]

2.1 Define $\gamma:[0,1]\to S^1$ by $\gamma(t)=p(3t/4)$. Its image lies in the quotient chart lifted from $(-1/8,7/8)$, where its coordinate is $\theta(t)=3t/4$. Thus $\ddot\theta=0$, and [F2] and step 1.1 show that $\gamma$ is a geodesic segment. Its speed is constantly $3/4$, so [F4] gives $L(\gamma)=3/4$. [F2, F4, step 1.1]

3.1 Define $c:[0,1]\to S^1$ by $c(t)=p(-t/4)$. It joins the same endpoints because $p(-1/4)=p(3/4)$ by [F3]. Its image lies in the chart lifted from $(-3/8,1/8)$, where its coordinate is $-t/4$ and its speed is constantly $1/4$, so [F4] gives $L(c)=1/4<3/4=L(\gamma)$. Hence the geodesic segment $\gamma$ is not globally length minimizing. [F3, F4, step 2.1, algebra]

4.1 More generally, a lifted change $a$ with $1/2<a<1$ has length $a$, while the complementary lift $a-1$ has length $1-a<a$; equality occurs exactly at $a=1/2$. This locates the failure at the half-circumference threshold: the local coordinate equation still makes the long arc geodesic, but the quotient supplies another lift of its endpoint. By step 1.1, the geodesic with initial velocity $v$ at $[0]$ is $t\mapsto p(tv)$, so uniqueness in [F1] gives $\exp_{[0]}(v)=p(v)$. Hence the initial vector $3/4$ lies in no symmetric normal ball on which the exponential is injective: any such ball containing $3/4$ also contains $-1/4$, and [F3] gives the same image for those vectors. Thus [F1]'s local theorem does not apply to the long radial representative. Empty and zero-dimensional manifolds provide no counterexample, while this nonconstant one-dimensional witness has included endpoints and no degenerate interval. Assumption [A1] is used only for the uniqueness and local-minimality comparison in this step; steps 1.1--3.1 make no choice. [A1, F1, F3, step 1.1, step 3.1] ∎
