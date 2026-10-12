---
id: def-finite-complex-algebraic-whitney-stratification-and-control-data
kind: definition
title: Finite complex algebraic Whitney stratification and control data
status: draft
origin: session
deps: [def-classical-algebraic-prevariety-regular-maps-and-varieties]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Mark Goresky, Lecture notes on sheaves and perverse sheaves, Section 8
      url: https://www.math.ias.edu/~goresky/pdf/all2.pdf
---

## Definition

Let $X$ be a reduced quasi-projective complex algebraic variety. A **finite smooth algebraic frontier stratification** is a finite disjoint partition $X=\coprod S$ by smooth locally closed complex algebraic subvarieties, each of pure complex dimension, such that each stratum closure is a union of strata and every boundary stratum has strictly smaller dimension. Strata may be further split into their finitely many connected components if that component finiteness has been supplied. This definition itself assumes no existence theorem.

Choose local analytic embeddings into a smooth real manifold and its coordinate charts. For incident strata $R\subseteq\overline S\setminus S$, the pair satisfies **Whitney (a)** if every convergent sequence of tangent spaces $T_{x_n}S\to T$, with $x_n\in S$ tending to $y\in R$, has $T_yR\subseteq T$. It satisfies **Whitney (b)** if, whenever also $y_n\in R$ tends to $y$ and the real secant lines through $x_n,y_n$ converge to a line $\ell$, one has $\ell\subseteq T$. Limits are in the finite-dimensional Grassmannians of the coordinate chart. A **Whitney stratification** here requires both conditions at every incident pair. Coordinate independence and the implication (b)⇒(a), often used in the literature, are not assumed as proofs in this definition; requiring both makes the intended interface explicit.

A system of **tube control data** on the analytic stratified space consists of an open neighborhood $T_R$ of each stratum $R$, a continuous retraction $\pi_R:T_R\to R$, and a continuous radius $\rho_R:T_R\to[0,\infty)$, such that $\rho_R^{-1}(0)=R$, both maps are smooth on each stratum, and for incident upper strata $S$ the map $(\pi_R,\rho_R):S\cap T_R\to R\times(0,\infty)$ is a submersion. On those overlap neighborhoods where the compositions are defined, require $\pi_R\pi_S=\pi_R$ and $\rho_R\pi_S=\rho_R$ for $R<S$. Tubes can be shrunk; every compatibility assertion must specify the common domain rather than applying a composition outside its domain. For local conical constructions require local tube properness over compact base slices: sufficiently small closed radius ranges over a compact base neighborhood have compact inverse image contained in the tube.

For a stratified submersion $f:W\to B$ to a smooth manifold, the tube data are **$f$-compatible** if $f\pi_R=f$ on the tubes used. A **controlled lift** of a base field $v$ is a stratumwise smooth field $V$ satisfying $df(V)=v\circ f$, $d\pi_R(V)=V|_R\circ\pi_R$ and $d\rho_R(V)=0$ on specified controlled tube neighborhoods. **Locally bounded** means its ambient norm is bounded on some neighborhood of every point; this is an additional condition, not a consequence asserted by the definition. Radial controlled lifts instead have specified $d\rho_R(V)=\rho_R$ and fixed $\pi_R$, with appropriate annular overlap controls.

A **conical product neighborhood along $R$** is a stratum-preserving homeomorphism from a neighborhood of a point of $R$ to $B^{2\dim_{\mathbb C}R}\times c(L)$, taking $R$ to the ball times the cone apex, with compact finitely stratified $L$. The radial transport and the transport along the ball must be compatible with the actual sheaf coefficient data when cohomological local systems are deduced. Topological existence alone does not supply a canonical derived-sheaf transport.

A **finite triangulation of a noncompact space** in the intended compactification convention consists of finite simplicial complexes $D\subseteq K$ and a homeomorphism $|K|\setminus|D|\to X$. Compatibility with prescribed subsets means they are unions of interiors of the retained simplices. This does not mean an arbitrary algebraic morphism becomes simplicial, and the real simplicial dimensions do not replace the dimensions of the smooth complex algebraic strata.
