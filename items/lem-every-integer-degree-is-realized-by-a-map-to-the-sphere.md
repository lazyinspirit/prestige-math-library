---
id: lem-every-integer-degree-is-realized-by-a-map-to-the-sphere
kind: lemma
title: Every integer is realized by a map to the sphere
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 0
deps:
- cor-euclidean-spheres-are-path-connected
- def-compact-space
- def-degree-of-a-proper-smooth-map-by-compact-support-cohomology
- def-euclidean-spheres-and-closed-balls
- def-induced-boundary-orientation
- def-orientation-preserving-parametrization
- def-oriented-smooth-manifold-and-oriented-chart
- def-regular-and-critical-points-and-values
- def-smooth-manifold
- ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds
- lem-continuity-is-local-and-pastes
- lem-finite-choice
- lem-smooth-bump-between-concentric-euclidean-balls
- thm-a-regular-level-set-is-an-embedded-submanifold
- thm-chain-rule-for-differentials-of-smooth-maps
- thm-euclidean-inverse-function-theorem
- thm-regular-value-formula-for-degree
- cor-euclidean-closed-balls-and-spheres-are-compact
- thm-compactness-under-continuous-maps
- thm-compact-subset-of-a-hausdorff-space-is-closed
- lem-smooth-maps-paste-over-an-open-cover
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: constructive
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
  - title: Victor Guillemin and Alan Pollack, Differential Topology
    url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
    locator: 'Chapter 3, Section 6, the Special Case and Extension Theorem (exercises 3-9), printed pp.144-146: degree-zero boundary maps extend, giving realization and surjectivity'
  - title: 'Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)'
    url: https://people.math.harvard.edu/~dafr/bordism.pdf
    locator: Theorem 2.37 and its use of the collapse construction, printed pp.22-23
  - title: John Milnor, Topology from the Differentiable Viewpoint
    url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
    locator: Sections 7-8, the Pontryagin construction and the realization of sphere maps of prescribed degree, printed pp.42-51
---
## Statement

Let $M$ be a nonempty closed connected oriented smooth $m$-manifold with $m\ge1$. For
every $k\in\mathbb Z$ there is a smooth map $f:M\to S^m$ with
$\deg(f)=k$. The construction is explicit. Choose $|k|$ pairwise disjoint
closed coordinate balls in $M$, with charts $\varphi_i$; on the $i$-th ball the
map is the smooth model pinch $F$ of step 2.1 below, read in the chart, and it
is the base point $N$ of $S^m$ outside the balls. The model has a regular
value $y_-$ whose only preimage is the centre of the ball, and it is constant
with value $N$ outside the unit ball, so the centres are the only preimages of
$y_-$ under $f$ and $y_-$ is a regular value there. Hence
$\deg(f)=\sum_{i=1}^{|k|}\operatorname{sgn}(df_{p_i})$, and choosing each chart
orientation-preserving or orientation-reversing makes every summand equal to
$\operatorname{sgn}(k)$, so that $\deg(f)=k$; for $k=0$ the empty family gives
the constant map of degree $0$. The construction uses only finite choice and no
other form of the Axiom of Choice.

## Facts & Assumptions

[L1] The unit sphere is the regular level $|x|^2=1$, with nonzero differential $2\langle x,\cdot\rangle$ and tangent space $x^\perp$. Its standard smooth structure is supplied by the regular-level theorem. The stereographic inverse charts are $u\mapsto(2u/(1+|u|^2),\pm(|u|^2-1)/(1+|u|^2))$, with the two omitted poles understood, and their transition is $u\mapsto u/|u|^2$; all expressions are smooth on their domains. The boundary orientation is defined by requiring $(x,v_1,\ldots,v_m)$ to be positive in $\mathbb R^{m+1}$. ([[thm-a-regular-level-set-is-an-embedded-submanifold]], [[def-induced-boundary-orientation]]).

**Given:** A nonempty closed connected oriented smooth $m$-manifold $M$, $m\ge1$, and an integer $k$; the unit sphere $S^m\subseteq\mathbb R^{m+1}$ with its standard smooth structure and its orientation for which the outward normal of the ball is first ([[def-euclidean-spheres-and-closed-balls]], [[cor-euclidean-spheres-are-path-connected]], [[def-smooth-manifold]]).

[F1] Smooth bump: for $0<r<R$ and $n\ge1$ there is a smooth $\chi:\mathbb R^n\to[0,1]$ with $\chi=1$ on $\overline B_r(0)$ and $\operatorname{supp}\chi\subseteq B_R(0)$; in dimension one, $\chi=1$ on $[-1/2,1/2]$ and $\chi=0$ outside $(-3/4,3/4)$ ([[lem-smooth-bump-between-concentric-euclidean-balls]]).

[F2] The square-root function is smooth on $(0,\infty)$: the inverse function theorem gives its $C^1$ derivative $1/(2\sqrt t)$, and induction in this identity gives derivatives of every order. Composing it with a smooth positive function is smooth by the chain rule ([[thm-euclidean-inverse-function-theorem]], [[thm-chain-rule-for-differentials-of-smooth-maps]]).

[F3] A chart of an oriented manifold either preserves or reverses the orientation, and the sign of a chart enters local degree computations through the orientation of its coordinate frame; $S^m$ carries the orientation of [given] and the standard stereographic charts ([[def-orientation-preserving-parametrization]], [[def-oriented-smooth-manifold-and-oriented-chart]], the local calculation).

[F4] If $f:M\to S^m$ is proper and smooth and $y$ is a regular value, then the fibre is finite and $\deg(f)=\sum_{x\in f^{-1}(y)}\operatorname{sgn}(df_x)$, the compact-support degree of [[def-degree-of-a-proper-smooth-map-by-compact-support-cohomology]] ([[thm-regular-value-formula-for-degree]], [[def-regular-and-critical-points-and-values]]).

[F5] Finite families of nonempty sets admit choices in ZF ([[lem-finite-choice]]). Euclidean closed balls are compact, continuous images of compact sets are compact, and compact subsets of Hausdorff spaces are closed ([[cor-euclidean-closed-balls-and-spheres-are-compact]], [[thm-compactness-under-continuous-maps]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]]). Smooth maps agreeing on an open cover paste smoothly ([[lem-smooth-maps-paste-over-an-open-cover]]).

## Proof

1.1 (The bump profile.) By [F1] in dimension one fix a smooth $\chi:\mathbb R\to[0,1]$ with $\chi=1$ on $[-1/2,1/2]$ and $\chi=0$ outside $(-3/4,3/4)$, and define $W(s):=1-\chi(s)^2(1-s)$ for $s\ge0$. Then $W$ is smooth, $W(s)=s$ for $0\le s\le1/2$, $W(s)=1$ for $s\ge3/4$, and $0\le W(s)\le1$ with $W(s)>0$ for $s>0$; moreover $1-W(s)=\chi(s)^2(1-s)$ is the square of the smooth function $\delta(s):=\chi(s)\sqrt{1-s}$, read as $0$ where $\chi$ vanishes. [F1, construct]

2.1 (The model pinch.) Put $G(s):=W(s)/s$ for $s>0$ and $G(0):=1$; since $W(s)=s$ for $s\le1/2$, the function $G$ is smooth and positive on $[0,\infty)$. Define $\Phi(s):=\chi(s)\sqrt{W(s)(1-s)/s}$ for $0<s\le3/4$ and $\Phi(0):=1$ and $\Phi(s):=0$ for $s\ge3/4$; the radicand $Q(s)=W(s)(1-s)/s$ is smooth and positive on $[0,3/4)$ and equals $1-s$ near $0$, so $\sqrt Q$ is smooth and positive there by [F2], and since $\chi$ is flat at $3/4$ and vanishes beyond it, $\Phi=\chi\sqrt Q$ is smooth on $[0,\infty)$. Set $F(x):=(2\Phi(\lVert x\rVert^2)x,\ 2W(\lVert x\rVert^2)-1)$ for $x\in\mathbb R^m$. With $s=\lVert x\rVert^2$ one has $\Phi(s)^2s=\chi(s)^2W(s)(1-s)=W(s)(1-W(s))$, hence $\lVert F(x)\rVert^2=4\Phi(s)^2s+(2W(s)-1)^2=4W(1-W)+4W^2-4W+1=1$, so $F$ maps into $S^m$. Each component is smooth, and since $F$ is locally constant with value $N=(0,\dots,0,1)$ for $s\ge3/4$, its expressions in the two stereographic charts of $S^m$ ([F3]) are smooth; thus $F:\mathbb R^m\to S^m$ is smooth. [L1, F2, F3, step 1.1, algebra]

3.1 (The regular value of the model.) At the origin $W(0)=0$ and $\Phi(0)=1$, so $F(0)=(0,\dots,0,-1)=:y_-$. If $F(x)=y_-$ then $2W(s)-1=-1$, that is $W(s)=0$, which by step 1.1 happens only for $s=0$; hence $F^{-1}(y_-)=\{0\}$. Near $0$ one has $W(s)=s$, $G(s)=1$ and $\Phi(s)=\chi(s)\sqrt{1-s}$, so $\Phi(0)=1$; the first $m$ components of $F$ have differential $2\Phi(0)\,\mathrm{id}=2\,\mathrm{id}$ at $0$ and the last component has vanishing differential there, so $dF_0$ has rank $m$ and is an isomorphism of tangent spaces, and $y_-$ is a regular value of $F$. [F4, step 1.1, step 2.1, algebra]

3.2 (Gluing the model into $M$.) For $k\ne0$ put $n=|k|$. Since $M$ is nonempty and $m\ge1$, choose one chart ball and $n$ distinct coordinate points in it. Choose sufficiently small pairwise disjoint open Euclidean balls about these points with closures still inside that chart ball. Translation and positive rescaling give charts $\varphi_i:U_i\to B_2(0)$ with $\varphi_i(p_i)=0$, pairwise disjoint domains $U_i$, and closed unit coordinate balls $B_i=\varphi_i^{-1}(\overline B_1(0))\subset U_i$. Each $B_i$ is compact as the continuous image of a compact Euclidean ball, and hence closed in the Hausdorff $M$. Define $f=F\circ\varphi_i$ on $U_i$ and $f=N$ on the open complement of $\bigcup_i B_i$. The only overlaps are $U_i\setminus B_i$, on which $F=N$ by step 2.1; thus the definitions agree. Their smooth local expressions paste to a smooth $f$. This selects finitely many chart data and ensures disjoint domains, not merely disjoint closed balls. [F5, step 2.1, construct]

4.1 (Degree of the glued map.) By steps 3.1 and 3.2 the equation $f(x)=y_-$ holds exactly for $x=p_1,\dots,p_n$, and $df_{p_i}=dF_0\circ d\varphi_i$ is an isomorphism, so $y_-$ is a regular value of $f$ with finite fibre $\{p_1,\dots,p_n\}$, and $f$ is proper because $M$ is compact ([given]). By [F4], $\deg(f)=\sum_{i=1}^n\operatorname{sgn}(df_{p_i})=\operatorname{sgn}(dF_0)\sum_{i=1}^n\varepsilon_i$, where $\varepsilon_i=+1$ if $\varphi_i$ preserves the orientations of $M$ and $\mathbb R^m$ and $\varepsilon_i=-1$ otherwise; each chart is orientation-preserving or orientation-reversing, and composing a chart with $x\mapsto(-x_1,x_2,\ldots,x_m)$ reverses its orientation while fixing its centre and unit ball. At $y_-=-e_{m+1}$ the ambient tuple $(y_-,2e_1,\ldots,2e_m)$ has sign $(-1)^{m+1}$, so $\operatorname{sgn}(dF_0)=(-1)^{m+1}$ for the outward-normal-first orientation. Choosing all $\varepsilon_i$ equal to $\operatorname{sgn}(k)\operatorname{sgn}(dF_0)^{-1}$ gives $\deg(f)=k$; no infinite selection is used. [F3, F4, F5, step 3.1, step 3.2, algebra]

5.1 (The case $k=0$ and conclusion.) For $k=0$ take the empty family, so $f$ is the constant map $N$, whose regular values are the points different from $N$ and whose fibre is then empty; hence $\deg(N)=0$ by [F4]. For every $k\in\mathbb Z$ the map constructed in steps 3.2 and 4.1 is therefore smooth with $\deg(f)=k$, using finitely many charts and finitely many choices of closed balls and chart orientations only. [F4, step 3.2, step 4.1, discharge-construct] ∎
