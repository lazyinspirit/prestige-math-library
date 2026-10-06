---
id: lem-fixed-point-sum-of-the-two-lifts-of-a-self-map
kind: lemma
title: "The two lifts of a self-map carry twice the fixed point index sum"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-the-derivative-lift-of-a-smooth-self-map-to-the-orientation-double-cover, def-local-fixed-point-index, lem-local-fixed-point-index-is-invariant-under-diffeomorphism-conjugation, def-global-geometric-lefschetz-number, lem-fixed-points-are-graph-diagonal-intersections, def-c-r-and-smooth-maps-between-smooth-manifolds, lem-a-closed-discrete-subset-of-a-compact-space-is-finite]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology (complete book PDF)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "§3.3, printed pp. 234-235 (the two points of a fibre over a point of a nonorientable manifold, exchanged by the deck transformation)"
    - title: "Peter Wong, Lectures on Fixed Point Theory, Mini-Course XV Encontro Brasileiro de Topologia, Rio Claro 2006 (complete notes)"
      url: "https://www.dm.ufscar.br/profs/ebt/history/2006/files/fixed_point.pdf"
      locator: "Lecture II §6, printed p. 13 (the local index is a local invariant of the germ, hence preserved by a local diffeomorphism)"
dependency_level: 2
---

## Statement

Let $M$ be a connected closed smooth $n$-manifold, $n\ge1$, $\pi:\widetilde M\to M$ its
orientation double cover with deck transformation $\tau$
([[lem-the-derivative-lift-of-a-smooth-self-map-to-the-orientation-double-cover]]),
let $f:M\to M$ be smooth with isolated fixed points, and let
$\widetilde f:\widetilde M\to\widetilde M$ be a smooth lift of $f$ commuting with
$\tau$ ($\pi\circ\widetilde f=f\circ\pi$ and
$\tau\circ\widetilde f=\widetilde f\circ\tau$); set
$\widetilde f':=\tau\circ\widetilde f$. (Such a lift exists when $f$ is a local
diffeomorphism, by the derivative lift; it need not exist for general smooth
$f$.) Then $\widetilde f$ and $\widetilde f'$ have isolated fixed points and
finite fixed point sets, and
$$\sum_{\widetilde x\in\operatorname{Fix}(\widetilde f)}\operatorname{ind}_{\widetilde x}(\widetilde f)+\sum_{\widetilde x\in\operatorname{Fix}(\widetilde f')}\operatorname{ind}_{\widetilde x}(\widetilde f')=2\sum_{x\in\operatorname{Fix}(f)}\operatorname{ind}_x(f).$$
More precisely, over each fixed point $x$ of $f$ exactly one of the two lifts
has fixed points, it fixes both points of the fibre $\pi^{-1}(x)$, and each of
those two fixed points has local index $\operatorname{ind}_x(f)$.

## Facts & Assumptions

**Given:** The connected closed smooth $n$-manifold $M$, its orientation double cover $(\widetilde M,\pi,\tau)$, a smooth $f:M\to M$ with isolated fixed points and a $\tau$-commuting lift $\widetilde f$.

[F1] $\pi$ is a smooth two-sheeted covering map with deck transformation $\tau$, $\tau^2=\mathrm{id}$ and $\pi\circ\tau=\pi$; each fibre is $\{a,\tau a\}$ with $a\neq\tau a$; $\widetilde M$ is closed when $M$ is ([[lem-the-derivative-lift-of-a-smooth-self-map-to-the-orientation-double-cover]]).

[F2] For an isolated fixed point $z$ of a smooth self-map of a boundaryless $n$-manifold the local index is defined and unchanged under conjugation by a local diffeomorphism of a neighbourhood of the point ([[def-local-fixed-point-index]], [[lem-local-fixed-point-index-is-invariant-under-diffeomorphism-conjugation]]).

[L1] Fixed points of a self-map are the points whose graph meets the diagonal, and the fixed point set of a smooth self-map of a manifold is closed; a closed discrete subset of a compact space is finite ([[lem-fixed-points-are-graph-diagonal-intersections]], [[lem-a-closed-discrete-subset-of-a-compact-space-is-finite]]).

## Proof

1.1 Fixed points over a fixed point. Let $x\in\operatorname{Fix}(f)$ and $\pi^{-1}(x)=\{a,\tau a\}$. Since $\pi(\widetilde f(a))=f(\pi(a))=f(x)=x$, the point $\widetilde f(a)$ lies in $\{a,\tau a\}$. If $\widetilde f(a)=a$, then $\widetilde f(\tau a)=\tau\widetilde f(a)=\tau a$ by the commutation, so both fibre points are fixed by $\widetilde f$, while $\widetilde f'(a)=\tau(a)=\tau a\neq a$ and $\widetilde f'(\tau a)=a\neq\tau a$; if $\widetilde f(a)=\tau a$, then $\widetilde f(\tau a)=\tau\widetilde f(a)=\tau^2a=a$, so both fibre points are fixed by $\widetilde f'=\tau\widetilde f$ and neither by $\widetilde f$. In both cases exactly two of the four pairs $(\widetilde g,\widetilde x)\in\{\widetilde f,\widetilde f'\}\times\pi^{-1}(x)$ satisfy $\widetilde g(\widetilde x)=\widetilde x$, namely one lift fixing both points of the fibre. Conversely, a fixed point of $\widetilde f$ or of $\widetilde f'$ projects to a fixed point of $f$, because $\pi\circ\widetilde f=f\circ\pi$. [given, F1]

2.1 Isolation and finiteness. Let $\widetilde x$ be a fixed point of $\widetilde f$ and $x=\pi(\widetilde x)$. Choose a neighbourhood $W$ of $x$ containing no fixed point of $f$ other than $x$. Since $\pi$ is a local homeomorphism and $\widetilde M$ is Hausdorff, choose a neighbourhood $\widetilde W$ of $\widetilde x$ with $\pi(\widetilde W)\subseteq W$ and $\tau\widetilde x\notin\widetilde W$. Any fixed point of $\widetilde f$ in $\widetilde W$ projects into $W$, hence lies over $x$, hence is $\widetilde x$ or $\tau\widetilde x$; the second is excluded by $\tau\widetilde x\notin\widetilde W$. So the fixed points of $\widetilde f$ are isolated, and the same argument applies to $\widetilde f'$. Their fixed sets are closed by [L1] and discrete, and $\widetilde M$ is compact by [F1], so both fixed sets are finite by [L1]. [step 1.1, F1, L1]

3.1 Local indices. Let $\widetilde x$ be a fixed point of $\widetilde f$ with $\pi(\widetilde x)=x$. Since $\pi$ is a local diffeomorphism, it restricts to a diffeomorphism from an open neighbourhood of $\widetilde x$ onto an open neighbourhood of $x$, and from $\pi\circ\widetilde f=f\circ\pi$ we get $\widetilde f=\pi^{-1}\circ f\circ\pi$ on that neighbourhood; the conjugation lemma [F2] therefore gives $\operatorname{ind}_{\widetilde x}(\widetilde f)=\operatorname{ind}_x(f)$. The same computation applies to every fixed point of $\widetilde f'$, which also satisfies $\pi\circ\widetilde f'=f\circ\pi$. Step 1.1 says that over each fixed point $x$ of $f$ exactly one of the two lifts has fixed points, and it fixes both points of the fibre, so the total of the local indices of $\widetilde f$ and $\widetilde f'$ over $x$ is $2\operatorname{ind}_x(f)$. Summing over the finite set $\operatorname{Fix}(f)$ — the geometric Lefschetz number of $f$ is the finite index sum of [[def-global-geometric-lefschetz-number]] — gives the displayed identity. [step 1.1, step 2.1, F2, given] ∎
