---
id: cor-simply-connected-complete-nonpositively-curved-manifolds-have-unique-geodesics-between-points
kind: corollary
title: Simply connected complete nonpositively curved manifolds have unique geodesics between points
status: draft
origin: pipeline
deps:
  - thm-cartan-hadamard
  - thm-hopf-rinow
  - def-countable-choice
  - lem-local-isometries-send-geodesics-to-geodesics
  - thm-existence-uniqueness-and-smooth-dependence-of-geodesics
  - def-pullback-riemannian-metric
  - def-riemannian-isometry-and-local-isometry
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Theorem 24.3.1, §24.3, printed pp.178–179: consequences of Cartan–Hadamard, including unique geodesics"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§5, pp.17–19: geodesic uniqueness in the Cartan–Hadamard setting"
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$(M,g)$ be a connected, boundaryless, complete Riemannian manifold with
$K\le0$ that is simply connected. Then every two points $x,y\in M$ are joined
by exactly one affinely parametrized geodesic segment whose parameter interval
is $[0,1]$ and which sends $0$ to $x$ and $1$ to $y$; that segment minimizes
length, and $d_g(x,y)$ equals its length.

A **Hadamard manifold** is such an $M$; the statement includes the case
$x=y$, where the unique segment is the constant geodesic at $x$ and
$d_g(x,x)=0$.

## Facts & Assumptions

**Given:** The complete simply connected manifold $M$ with $K\le0$, two points $x,y\in M$, and the inherited $\mathrm{AC}_\omega$ of [A1].

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$ ([[def-countable-choice]]), carried by the Hopf–Rinow and exponential suppliers; no new selection is made below.

[F1] Cartan–Hadamard: for every $p\in M$ the exponential map $\exp_p:T_pM\to M$ is a diffeomorphism when $T_pM$ carries $\tilde g_p:=\exp_p^*g$ ([[thm-cartan-hadamard]], [[def-pullback-riemannian-metric]]). In particular $\exp_p$ is bijective, so for $x,y$ there is a unique $w\in T_xM$ with $\exp_x(w)=y$.

[F2] Hopf–Rinow: a complete connected boundaryless Riemannian manifold is geodesically complete, and every two of its points are joined by a minimizing geodesic segment ([[thm-hopf-rinow]]); geodesics are determined by their initial data ([[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]]).

[F3] $\exp_p$ is by construction a local isometry from $(T_pM,\tilde g_p)$ onto $(M,g)$, and a local isometry intertwines covariant derivatives along curves: for a curve $c$ in $T_pM$ one has $D_t^g(\exp_p\circ c)'=d(\exp_p)\bigl(D_t^{\tilde g_p}c'\bigr)$; hence $c$ is a $\tilde g_p$-geodesic if and only if $\exp_p\circ c$ is a $g$-geodesic ([[def-riemannian-isometry-and-local-isometry]], [[lem-local-isometries-send-geodesics-to-geodesics]]).

## Proof

1.1 The geodesics of the pulled-back metric through $0$ are the straight rays. [F1, F2, F3, given]
Fix $p\in M$ and $u\in T_pM$. The curve $c(t):=tu$ in $T_pM$ projects under $\exp_p$ to $t\mapsto\exp_p(tu)$, which by [F2] and [F1] is the $g$-geodesic with initial data $(p,u)$, defined for all real $t$. By [F3], $d(\exp_p)_{tu}(D_t^{\tilde g_p}c')=D_t^g(\exp_p\circ c)'=0$, and the differential of the diffeomorphism $\exp_p$ is invertible, so $D_t^{\tilde g_p}c'=0$: every straight ray through $0$ is a $\tilde g_p$-geodesic. Conversely, if $c$ is a $\tilde g_p$-geodesic with $c(0)=0$ and $\dot c(0)=u$, then $t\mapsto tu$ is a $\tilde g_p$-geodesic with the same initial data, so [F2] gives $c(t)=tu$. [F1, F2, F3, given]

2.1 Existence and uniqueness of the joining segment. [F1, F3, step 1.1]
Let $w:=\exp_x^{-1}(y)$, which exists uniquely by [F1], and put $\gamma(t):=\exp_x(tw)$ for $t\in[0,1]$; this is an affinely parametrized geodesic from $x$ to $y$. Let $\sigma:[0,1]\to M$ be any affinely parametrized geodesic with $\sigma(0)=x$, $\sigma(1)=y$. Since $\exp_x$ is a local isometry, the curve $\tilde\sigma:=\exp_x^{-1}\circ\sigma$ is a $\tilde g_x$-geodesic by [F3]; it starts at $0$ and ends at $w$. By step 1.1 it is a straight ray $\tilde\sigma(t)=tu$ for $u=\dot{\tilde\sigma}(0)$, and $\tilde\sigma(1)=w$ forces $u=w$. Hence $\sigma(t)=\exp_x(tw)=\gamma(t)$ on $[0,1]$: the segment is unique. [F1, F3, step 1.1]

3.1 It minimizes. [F1, F2, step 2.1]
By [F2] there is a minimizing geodesic segment joining $x$ to $y$; after affine reparametrization to the interval $[0,1]$ it is an affinely parametrized geodesic from $x$ to $y$, hence equals $\gamma$ by step 2.1. Therefore $\gamma$ is minimizing, its length is $d_g(x,y)$, and the parameter interval carries the unique affine parametrization with those endpoints. The completeness and simple connectedness hypotheses were used only through [F1] and [F2], and no choice was made beyond the inherited $\mathrm{AC}_\omega$ of [A1], consumed exactly through those two suppliers. [F1, F2, step 2.1] ∎
