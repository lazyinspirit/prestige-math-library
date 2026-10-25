---
id: lem-knot-group-infinity-collar
kind: lemma
title: "Removing the point at infinity preserves the knot group"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps: [def-oriented-link-in-s-three-and-ambient-isotopy,
       lem-wirtinger-crossing-ball-cover,
       def-based-loops-and-fundamental-group,
       thm-fundamental-group-laws,
       def-induced-homomorphism-on-fundamental-groups,
       thm-induced-fundamental-group-map-functoriality,
       thm-higher-dimensional-spheres-are-simply-connected,
       def-simply-connected,
       thm-seifert-van-kampen,
       cor-seifert-van-kampen-simply-connected-overlap]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Stefan Friedl, Knot Theory, §5.3, proof of the Wirtinger Presentation Proposition"
      url: "https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf"
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-10-22
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json.
    delegated_by: owner
---

## Statement

Let $K\subset\mathbb R^3$ be a compact smooth knot and let $b\in\mathbb R^3\setminus K$. The inclusion $\mathbb R^3\setminus K\hookrightarrow S^3\setminus K$ induces an isomorphism
$$\pi_1(\mathbb R^3\setminus K,b)\xrightarrow{\ \cong\ }\pi_1(S^3\setminus K,b).$$

## Statement references

[[def-oriented-link-in-s-three-and-ambient-isotopy|Compact smooth knots in the standard three-sphere]]

## Facts & Assumptions

**Given:** A compact knot $K\subset\mathbb R^3$ and a basepoint $b$ in its complement.

[F1] When a valid finite diagram code is supplied, the crossing-ball construction gives a path-connected knot complement. [[lem-wirtinger-crossing-ball-cover]]

[F2] The two-sphere is simply connected at every basepoint. [[thm-higher-dimensional-spheres-are-simply-connected]]

[F3] A path-connected space is simply connected when its fundamental group is trivial. [[def-simply-connected]]

[F4] Van Kampen computes a path-connected open cover by a group pushout. [[thm-seifert-van-kampen]]

[F5] If one open set and the overlap are simply connected, inclusion from the other set induces an isomorphism. [[cor-seifert-van-kampen-simply-connected-overlap]]

[F6] A pointed inclusion induces a homomorphism on fundamental groups. [[def-induced-homomorphism-on-fundamental-groups]]

[F7] Induced fundamental-group maps are functorial under composition. [[thm-induced-fundamental-group-map-functoriality]]

[F8] Fundamental-group multiplication is induced by path concatenation, and inverse classes are represented by reversed loops. [[thm-fundamental-group-laws]]

## Proof

1.1 Since $K$ is compact, choose $R>0$ with $K$ and $b$ in the open ball $D=B_R(0)$. Put $U=S^3\setminus(K\cup\{\infty\})=\mathbb R^3\setminus K$ and $V=S^3\setminus\overline D$. Then $V$ is an open ball about infinity, disjoint from $K$, and $U\cap V=V\setminus\{\infty\}$. First verify that $U$ is path-connected without assuming a diagram code. Parameterize the smooth embedded circle by $k:S^1\to K$. For $p\in U$, the cone $$C_p=\{p+t(k(s)-p):s\in S^1,\ t\ge1\}$$ has three-dimensional outer volume zero: on each of finitely many smooth coordinate intervals of $S^1$ and each bounded interval $1\le t\le n$, the defining map is Lipschitz on a compact rectangle; subdividing into $O(N^2)$ squares of side $1/N$ covers its image by balls of radius $O(1/N)$, whose total three-dimensional volume is $O(1/N)$. Thus each truncated image has outer volume zero. For each $n$, the finite chart and derivative bounds give an explicit cover volume $A_n/N$ after mesh size $1/N$; choosing $N_n>2^{n+2}A_n/\epsilon$ makes the $n$th truncated images of both cones have total cover volume below $\epsilon 2^{-n-1}$. These formula-defined mesh sizes give a cover of $C_p\cup C_q$ with total volume below $\epsilon$ for every $\epsilon>0$, so the union has outer volume zero without a choice of covers. An open ball contains a cube of positive volume, so choose $r$ in an open ball outside $C_p\cup C_q$. If the segment $[p,r]$ met $K$ at $k(s)$, then $r=p+t(k(s)-p)$ for some $t\ge1$, contrary to $r\notin C_p$; similarly $[q,r]$ misses $K$. The broken line from $p$ to $r$ to $q$ lies in $U$. Under inversion $J(x)=x/\|x\|^2$, extended by $J(\infty)=0$, the set $V$ is the open ball of radius $1/R$ about $0$. The radial homotopy $y\mapsto(1-t)y$ contracts it to $0$, so it is nonempty and path-connected. Since this ball is convex, every based loop contracts to its own basepoint by the straight-line homotopy inside the ball; [F3] therefore makes $V$ simply connected. The same inversion identifies $U\cap V$ with $0<\|y\|<1/R$. Fix $\rho=1/(2R)$; the puncture-preserving radial homotopy $$y\longmapsto\left((1-t)+t\frac{\rho}{\|y\|}\right)y$$ is a strong deformation retraction of this punctured ball onto the sphere $S^2_\rho$. The punctured ball is path-connected. Choose $y_0\in S^2_\rho$, let $i:S^2_\rho\hookrightarrow U\cap V$ be inclusion, and let $r$ be the radial retraction. Since the radial deformation fixes $S^2_\rho$ pointwise, [F7] and functoriality make $i_*$ and $r_*$ inverse isomorphisms at $y_0$. By [F2], $\pi_1(S^2_\rho,y_0)$ is trivial. For any other basepoint $y$ in the punctured ball, choose a path $\gamma$ from $y$ to $y_0$ and use $[\alpha]\mapsto[\bar\gamma*\alpha*\gamma]$. Concatenation and reparameterization preserve endpoint-fixed homotopies, so this is a well-defined homomorphism. The inverse uses $\bar\gamma$; the inserted pairs $\gamma*\bar\gamma$ and $\bar\gamma*\gamma$ contract by the piecewise retracing homotopy, so the homomorphism is an isomorphism. Thus every basepoint group of the overlap is trivial; its nonemptiness and path-connectedness with [F3] make $U\cap V$ simply connected. [given, F2, F3, F7, F8, choose, construct]

2.1 Choose $b_0\in U\cap V$. The open sets $U,V$ cover $S^3\setminus K$; [F4] applies by the path-connectedness in step 1.1. Since $V$ and $U\cap V$ are simply connected by step 1.1, the special case [F5] shows that inclusion induces an isomorphism $\pi_1(U,b_0)\to\pi_1(S^3\setminus K,b_0)$. [F4, F5, step 1.1]

3.1 The inclusion induces the based map by [F6]. Choose a path $\gamma$ in $U$ from $b$ to $b_0$, which exists by step 1.1. The formula $[\alpha]\mapsto[\bar\gamma*\alpha*\gamma]$ defines isomorphisms between the fundamental groups at these basepoints by the concatenation and retracing argument in step 1.1. Using the same path in $S^3\setminus K$ makes the square with inclusion commute, since postcomposing the concatenated path gives the same loop. Thus the inclusion map at $b$ is conjugate by isomorphisms to the isomorphism at $b_0$. [F6, F7, F8, step 1.1, step 2.1, construct] ∎

