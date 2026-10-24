---
id: lem-smooth-finite-point-motions-extend-to-boundary-fixed-disk-isotopies
kind: lemma
title: "Smooth finite point motions extend to disk isotopies"
status: published
origin: pipeline
landmark: true
deps: [def-time-dependent-vector-field-and-evolution-operator,
       def-countable-choice,
       lem-smooth-bump-between-concentric-euclidean-balls,
       thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval,
       thm-time-dependent-vector-fields-have-local-smooth-evolution-operators,
       def-homeomorphism-and-open-maps]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Benson Farb and Dan Margalit, A Primer on Mapping Class Groups, version 5.0 author draft, section 2.2.1 and section 4.2, printed pp. 50-51 and 101-106"
      url: "https://web.archive.org/web/20111027114600id_/http://www.math.uchicago.edu/~margalit/mcg/mcgv50.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $D^2\subseteq\mathbb R^2$ be the closed unit disc
and let $z_1,\dots,z_n:\mathbb R\to\operatorname{int}D^2$ be smooth paths that
are constant on $(-\infty,0]$ and on $[1,\infty)$ and satisfy
$z_i(t)\ne z_j(t)$ for all $i\ne j$ and all $t\in\mathbb R$. Then there is a
smooth map $\Phi:D^2\times[0,1]\to D^2$ such that:

1. $\Phi_0=\operatorname{id}_{D^2}$ and every $\Phi_s:=\Phi(-,s)$ is a
   diffeomorphism of $D^2$ fixing $\partial D^2$ pointwise;
2. $\Phi_s(z_i(0))=z_i(s)$ for every $i\in\{1,\dots,n\}$ and every
   $s\in[0,1]$.

In particular $\Phi_1$ is a boundary-fixed diffeomorphism carrying the initial
marked set $\{z_1(0),\dots,z_n(0)\}$ onto the terminal set
$\{z_1(1),\dots,z_n(1)\}$.

## Facts & Assumptions

**Given:** The countable axiom of choice and the smooth collision-free paths $z_1,\dots,z_n$, constant near the two ends of the unit interval.

[L1] For $0<r<R$ and $n\ge1$ there is a smooth $\rho:\mathbb R^n\to[0,1]$ with $\rho=1$ on $\overline B_r(0)$ and $\operatorname{supp}(\rho)\subseteq B_R(0)$ ([[lem-smooth-bump-between-concentric-euclidean-balls]]).

[L2] Under $\mathrm{AC}_\omega$ a time-dependent vector field on a manifold $M$ over an interval $I$ is a smooth map $X:I\times M\to TM$ with $X(t,p)\in T_pM$, and an evolution operator satisfies $\frac{d}{dr}\Psi_{r,s}(p)=X_r(\Psi_{r,s}(p))$ and $\Psi_{s,s}(p)=p$ ([[def-time-dependent-vector-field-and-evolution-operator]]).

[L3] If the supports of a smooth time-dependent field $X_t$ over a compact interval $J$ lie in a common compact set, then a global evolution operator $\Psi_{t,s}:M\to M$ exists for all $s,t\in J$ ([[thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval]]).

[L4] For a smooth time-dependent field on an open interval, the solution $t\mapsto\Psi_{t,s}(q)$ of the ordinary differential equation with its prescribed value at $s$ is unique ([[thm-time-dependent-vector-fields-have-local-smooth-evolution-operators]]).

[L5] $\mathrm{AC}_\omega$ selects one element from each member of an at most countable family of nonempty sets ([[def-countable-choice]]).

[L6] A homeomorphism is a continuous bijection with continuous inverse ([[def-homeomorphism-and-open-maps]]).

## Proof
**Proof technique:** direct.

If $n=0$, take $\Phi_s=\operatorname{id}_{D^2}$ for all $s$. Assume $n\ge1$ below.

1.1 *A compactly supported field along the tracks.* The boundary margins $1-\lVert z_i(t)\rVert_2$ are positive on the compact interval; when $n\ge2$, the finitely many pairwise distances $\lVert z_i(t)-z_j(t)\rVert_2$ are positive there as well. Let $\delta>0$ be a common lower bound for all boundary margins and, when present, pairwise distances. By [L1] with $r=\delta/6<R=\delta/3$ choose a smooth bump $\rho:\mathbb R^2\to[0,1]$ equal to $1$ on $\overline B_{\delta/6}(0)$ with support in $B_{\delta/3}(0)$, and define $$X_t(x):=\sum_{i=1}^n\rho\bigl(x-z_i(t)\bigr)z_i'(t)\qquad(t\in\mathbb R,\ x\in\mathbb R^2).$$ Each term is smooth in $(t,x)$ and the sum is finite, so $X$ is a smooth time-dependent vector field on $\mathbb R^2$ over $\mathbb R$ in the sense of [L2]. For fixed $t$ the supports of the terms lie in pairwise disjoint balls $B_{\delta/3}(z_i(t))$ when $n\ge2$, and these balls lie in $\operatorname{int}D^2$ because each point stays at least $\delta$ from the boundary. Moreover $z_i'=0$ on $(-\infty,0]$ and $[1,\infty)$. Hence the union of the supports over $t\in[0,1]$ is a compact subset of $\operatorname{int}D^2$, and $X_t=0$ for $t\notin[0,1]$. [L1, L2, L5]

2.1 *The flow carries each marked point along its path.* By [L3] and [L5] the field $X$ has a global evolution operator $\Psi_{s,0}$ over $[0,1]$. Fix $i$ and let $\gamma(s):=z_i(s)$. At the point $\gamma(s)$ the $i$-th term of $X_s$ equals $z_i'(s)$ because $\rho(0)=1$, and every term with $j\ne i$ vanishes there because $\lVert\gamma(s)-z_j(s)\rVert_2\ge\delta>\delta/3$ while the support of the $j$-th bump lies in $B_{\delta/3}(z_j(s))$. Hence $X_s(\gamma(s))=\gamma'(s)$, so $\gamma$ solves the ordinary differential equation of [L2] with $\gamma(0)=z_i(0)=\Psi_{0,0}(z_i(0))$, and the uniqueness clause [L4] gives $\Psi_{s,0}(z_i(0))=z_i(s)$ for every $s\in[0,1]$. [L3, L4, step 1.1]

2.2 *The flow maps are boundary-fixed diffeomorphisms.* Since $X=0$ outside a compact subset of $\operatorname{int}D^2$, the flow through an initial point of $\partial D^2$ is constant, so $\Psi_{s,0}$ fixes $\partial D^2$ pointwise and maps $D^2$ onto itself; it is smooth, and its inverse is the flow map $\Psi_{0,s}$ of the same field, so by [L6] each $\Psi_{s,0}$ restricts to a homeomorphism of $D^2$ that is smooth with smooth inverse, that is, a diffeomorphism. Taking $s=0$ gives $\Psi_{0,0}=\operatorname{id}$. [L2, L3, L4, L6, step 1.1]

3.1 *Conclusion.* Setting $\Phi(s,x):=\Psi_{s,0}(x)$ and restricting the first variable to $[0,1]$ gives, by steps 2.1 and 2.2, a smooth map $\Phi:D^2\times[0,1]\to D^2$ with $\Phi_0=\operatorname{id}$, all time maps boundary-fixed diffeomorphisms, and $\Phi_s(z_i(0))=z_i(s)$ for every $i$ and $s$; the terminal map $\Phi_1$ therefore carries the initial marked set onto the terminal one, and no other property of the flow is used. [step 2.1, step 2.2] ∎

## Remarks

- The only choice spent is $\mathrm{AC}_\omega$, already present in the published definition [L2] of a time-dependent field; the finite Euclidean construction itself selects nothing.
- Disjointness of the bumps is what makes the field equal to $z_i'$ near the $i$-th moving point: the other summands are supported at positive distance from it.
