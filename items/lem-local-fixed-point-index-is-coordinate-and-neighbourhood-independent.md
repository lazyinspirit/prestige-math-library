---
id: lem-local-fixed-point-index-is-coordinate-and-neighbourhood-independent
kind: lemma
title: "The local fixed point index is independent of chart, ball and neighbourhood"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-local-fixed-point-index, lem-local-fixed-point-index-is-invariant-under-diffeomorphism-conjugation, prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism, prop-degree-is-multiplicative-under-composition, thm-degree-is-invariant-under-proper-smooth-homotopy, thm-regular-value-formula-for-degree, cor-the-differential-of-a-diffeomorphism-is-an-isomorphism, lem-reduced-degree-into-the-zero-sphere-is-homotopy-invariant-and-multiplicative]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall 1974; complete 236-page PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf"
      locator: "Ch. 3 §5, printed p. 136 (index invariance under reparametrization, well-definedness on manifolds)"
    - title: "Eleny Ionel, notes by Andrew Lin, Stanford Math 215B Differential Topology, Winter 2023 (complete 63-page lecture notes)"
      url: "https://web.stanford.edu/~lindrew/math215B.pdf"
      locator: "Lecture 17, printed p. 54 (the index is well defined independent of metric, trivialization and radius)"
dependency_level: 2
---

## Statement

Let $M$ be a smooth $n$-manifold without boundary, $n\ge1$, and let
$f:M\to M$ be smooth with an isolated fixed point $x$. Then the choices
entering [[def-local-fixed-point-index]] do not affect the value: any two
admissible charts at $x$ produce the same degree, and any two admissible
radii in one chart produce homotopic normalized sphere maps. For $n=1$ the
degree is reduced degree; maps from different charts need not be homotopic
(for $f(u)=u-u^2$ on $\mathbb R$, the charts $u$ and $-u$ give the two
different constant maps $S^0\to S^0$, each of reduced degree $0$). Consequently
$\operatorname{ind}_x(f)$ is a well-defined integer depending only on the germ
of $f$ at $x$, and it is computed by the displayed formula in every admissible smooth chart and
every sufficiently small ball around $x$.

## Facts & Assumptions

**Given:** A smooth $n$-manifold $M$ without boundary, $n\ge1$, a smooth map $f:M\to M$ and an isolated fixed point $x$.

[F1] The index $\operatorname{ind}_x(f)$ is the degree of the normalized displacement $v\mapsto g(\varepsilon v)/|g(\varepsilon v)|$ on $S^{n-1}$ for a chart $(\varphi,U)$ with $\varphi(x)=0$, $g=u-\widehat f(u)$ and an admissible $\varepsilon>0$ ([[def-local-fixed-point-index]]).

[L1] For a smooth self-map $f:M\to M$ with isolated fixed point $x$ and a local diffeomorphism $h$ taking $y$ to $x$, the proof of [[lem-local-fixed-point-index-is-invariant-under-diffeomorphism-conjugation]], steps 1.1–4.1, compares the normalized displacement degrees in arbitrary admissible charts at $x$ for $f$ and at $y$ for the local conjugate $h^{-1}fh$. Its sphere-map comparison includes reduced degree when $n=1$ and uses only that the representatives are defined near $0$, not that they preserve their Euclidean domains.

[L2] Degree is invariant under smooth homotopy of maps of spheres ([[thm-degree-is-invariant-under-proper-smooth-homotopy]]); degree is multiplicative under composition and the radial map of a linear isomorphism has degree its determinant sign ([[prop-degree-is-multiplicative-under-composition]], [[prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism]], [[thm-regular-value-formula-for-degree]]); a diffeomorphism's differential is an isomorphism ([[cor-the-differential-of-a-diffeomorphism-is-an-isomorphism]]). For $n=1$ the homotopy and composition assertions use [[lem-reduced-degree-into-the-zero-sphere-is-homotopy-invariant-and-multiplicative]].

## Proof

1.1 Radius independence. Let $0<\varepsilon'<\varepsilon$ be admissible radii in a chart $(\varphi,U)$, so $g$ is defined on a neighbourhood of the closed ball and $g\neq0$ on $0<|u|\le\varepsilon$. The family $(t,v)\mapsto g(t\varepsilon v)/|g(t\varepsilon v)|$, $t\in[\varepsilon'/\varepsilon,1]$, is a smooth homotopy of maps $S^{n-1}\to S^{n-1}$ taking the values nonzero throughout, hence the two normalized maps have the same degree by [L2]; this is precisely the independence of the displayed degree from the admissible radius, and it also compares a large admissible ball with any smaller admissible ball inside it. [given, F1, L2]

2.1 Chart independence. Let $(\varphi,U)$ and $(\psi,V)$ be two admissible charts at $x$. Apply the sphere-map comparison in [L1] to the given self-map $f:M\to M$, with $N=M$, $y=x$, $h=\operatorname{id}_M$ and $f'=f$, choosing $\varphi$ and $\psi$ as its two charts. Its transition is $k=\varphi\circ\psi^{-1}$, and $\widehat f_\psi=k^{-1}\circ\widehat f_\varphi\circ k$ holds near $0$: continuity at the fixed point permits shrinking the source so that both the source and its image lie in $U\cap V$. The cited proof compares these two displacement sphere maps directly and gives equal degrees; its self-map hypothesis is satisfied by $f$ on $M$. By [F1] these are exactly the displayed degrees in the two charts. Combined with step 1.1, this proves independence of every admissible chart, ball and radius. [given, step 1.1, F1, L1]

3.1 Dependence on the germ only. If $f_0,f_1:M\to M$ agree on a neighbourhood $W$ of $x$ and have there the isolated fixed point $x$, choose an admissible chart and radius inside $W$; the displacement representatives coincide, so the two displayed degrees coincide and, by step 2.1 applied to each, $\operatorname{ind}_x(f_0)=\operatorname{ind}_x(f_1)$: the index depends only on the germ of $f$ at $x$. The neighbourhood-independence clause is the case $f_0=f_1=f$ with two admissible neighbourhoods. [step 2.1, given] ∎
