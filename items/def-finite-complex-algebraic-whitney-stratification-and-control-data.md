---
id: def-finite-complex-algebraic-whitney-stratification-and-control-data
kind: definition
title: "Finite complex algebraic Whitney stratification and control data"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [def-analytic-topology-and-finite-smooth-algebraic-stratifications,
       def-classical-algebraic-prevariety-regular-maps-and-varieties]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Mark Goresky, Lecture Notes on Sheaves and Perverse Sheaves, version of June 26, 2026"
      url: "https://www.math.ias.edu/~goresky/pdf/all2.pdf"
      locator: "Section 8 (stratifications, Whitney conditions, links, control data and triangulation)"
---

## Definition

Let $X$ be a reduced quasi-projective complex algebraic variety, regarded as a
classical variety over $\mathbb C$
([[def-classical-algebraic-prevariety-regular-maps-and-varieties]]) with its
analytic topology, its smooth points (regular local rings) and its finite
smooth algebraic frontier stratifications
([[def-analytic-topology-and-finite-smooth-algebraic-stratifications]]).

(a) **Whitney conditions.** Let $X=\coprod_{\alpha\in A}S_\alpha$ be a finite smooth algebraic frontier stratification whose strata are pure-dimensional, and let $R\subseteq\overline S\setminus S$ be incident strata. In local analytic charts of an ambient smooth manifold, the pair $(S,R)$ satisfies **Whitney (a)** at $y\in R$ if for every sequence $x_n\in S$ with $x_n\to y$ whose tangent planes $T_{x_n}S$ converge to a plane $T$, one has $T_yR\subseteq T$; it satisfies **Whitney (b)** at $y$ if additionally, whenever $y_n\in R$ with $y_n\to y$ and the real secant lines through $x_n,y_n$ converge to a line $\ell$, one has $\ell\subseteq T$. A **finite complex algebraic Whitney stratification** of $X$ is a finite smooth algebraic frontier stratification satisfying (a) and (b) at every point of every incident pair. Coordinate independence of the limits and the implication (b)$\Rightarrow$(a), commonly used in the literature, are not assumed as proved here; requiring both conditions makes the intended interface explicit.

(b) **Tube control data.** A system of **tube control data** on the analytic stratified space $X$ consists of an open neighbourhood $T_R$ of each stratum $R$, a continuous retraction $\pi_R:T_R\to R$ and a continuous radius $\rho_R:T_R\to[0,\infty)$ such that $\rho_R^{-1}(0)=R$, both maps are smooth on each stratum, and for every incident upper stratum $S$ the pair $(\pi_R,\rho_R)$ restricts to a submersion $S\cap T_R\to R\times(0,\infty)$. On the overlap neighbourhoods where the compositions are defined one requires $\pi_R\pi_S=\pi_R$ and $\rho_R\pi_S=\rho_R$ for $R<S$; every compatibility assertion must name the common domain on which the composition is defined. Tubes may be shrunk. For local conical constructions one requires local properness over compact base slices: sufficiently small closed radius ranges over a compact neighbourhood in $R$ have compact inverse image inside the tube.

(c) **$f$-compatible tubes and controlled lifts.** Let $f:W\to B$ be a stratified submersion onto a smooth manifold. A tube system is **$f$-compatible** if $f\pi_R=f$ on the tubes used. A **controlled lift** of a smooth base field $v$ on $B$ is a field $V$ that is smooth on each stratum and satisfies $df(V)=v\circ f$, $d\pi_R(V)=V|_R\circ\pi_R$ and $d\rho_R(V)=0$ on specified controlled tube neighbourhoods. **Locally bounded** means the ambient norm is bounded on a neighbourhood of every point; this is an additional hypothesis, not a consequence of the definition. **Radial controlled lifts** instead satisfy $d\rho_R(V)=\rho_R$ with fixed $\pi_R$ together with the appropriate annular overlap controls.

(d) **Conical product neighbourhoods.** A **conical product neighbourhood along $R$** is a stratum-preserving homeomorphism from a neighbourhood of a point of $R$ to $B^{2\dim_{\mathbb C}R}\times c(L)$ carrying $R$ to the ball times the cone apex, with compact finitely Whitney-stratified $L$. The radial and tangential transports must be compatible with the actual coefficient data when cohomological local systems are deduced; topological existence alone does not supply canonical derived-sheaf transport.

(e) **Finite triangulation of a noncompact space.** In the compactification convention used here, a **finite triangulation** of a noncompact space $X$ consists of finite simplicial complexes $D\subseteq K$ together with a homeomorphism $|K|\setminus|D|\to X$; compatibility with prescribed subsets means they are unions of interiors of retained simplices. This does not assert that algebraic morphisms become simplicial, and real simplicial dimensions do not replace the complex dimensions of the algebraic strata.

## Remarks

- Every clause is a definition with its well-definedness comments; no existence of stratifications, tubes, controlled lifts or triangulations is asserted.
- Whitney (a) and (b) are stated in the Euclidean coordinates of chosen local affine embeddings into $\mathbb C^N$, following the affine-model convention of [[def-classical-algebraic-prevariety-regular-maps-and-varieties]]; limits are taken in finite-dimensional Grassmannians, and coordinate independence is explicitly not claimed. The analytic topology and the intrinsic regularity of smooth points are supplied by [[def-analytic-topology-and-finite-smooth-algebraic-stratifications]], not by an analytic-chart comparison theorem for the strata.
- Tube control data require compositions only where defined, shrinking is allowed, and local properness is a compactness condition on closed radius ranges. Compatibility with a stratified submersion and the differential equations for a controlled lift are conditions on a given field, not existence claims, and local boundedness is flagged as an extra hypothesis.
- All clauses are choice-free: nothing is selected, and the cited definitions are choice-free.
