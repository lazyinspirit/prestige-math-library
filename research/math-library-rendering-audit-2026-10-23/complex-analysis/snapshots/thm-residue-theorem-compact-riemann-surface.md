---
id: thm-residue-theorem-compact-riemann-surface
kind: theorem
title: Residue theorem on a compact Riemann surface
status: published
origin: pipeline
pipeline_run: frontier-36-complete
landmark: true
deps:
  - def-riemann-surface-and-holomorphic-atlas
  - def-meromorphic-differential-on-a-riemann-surface
  - lem-finite-analytic-chart-triangulation-compact-riemann-surface
  - lem-planar-piecewise-analytic-region-triangulation
  - lem-index-of-graph-bounded-region-boundary
  - def-admissible-cycle-for-residue-theorem
  - thm-residue-theorem-null-homologous-cycle
  - def-meromorphic-function-complex-domain
  - def-isolated-singularity-types
  - thm-identity-theorem-holomorphic-functions
  - thm-closed-subspace-of-a-compact-space-is-compact
  - thm-riemann-stieltjes-and-parametric-contour-integrals-agree
  - thm-chain-rule-for-complex-derivatives
  - prop-reversal-and-concatenation-of-complex-line-integrals
forward_refs: [ex-coordinate-change-for-meromorphic-differential]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Eduard Looijenga, Riemann Surfaces (2007)"
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 6 §2, Proposition 6.3 (PDF p. 53): proves that the sum of residues of a meromorphic differential on a compact Riemann surface vanishes by removing disjoint disks around the poles and applying Stokes' theorem. The present proof gives a separate chart-cellulation and edge-cancellation argument."
    - title: "Curtis T. McMullen, Riemann Surfaces, Math 213b course notes (2026)"
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 6, Theorem 6.6 (PDF pp. 56–57): states the compact-surface residue theorem and derives it by applying Stokes after removing small disjoint disks around the poles. The present proof uses a different chart-cellulation argument."
    - title: "Vladimir Hinich, Riemann Surfaces, lecture 7"
      url: https://math.haifa.ac.il/hinich/RSlec/lec7.pdf
      locator: "§8.4.3, Proposition on p. 7: triangulate so that all poles lie in triangle interiors, then cancel the two appearances of every edge."
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Let $X$ be a compact Riemann surface
([[def-riemann-surface-and-holomorphic-atlas]]) and let $\omega$ be a meromorphic
differential on $X$
([[def-meromorphic-differential-on-a-riemann-surface]]). Then
$\operatorname{Res}_p(\omega)\ne0$ for only finitely many $p\in X$, and
$$\sum_{p\in X}\operatorname{Res}_p(\omega)=0 .$$
For the zero differential all residues are zero. The proof below applies the
one-variable residue theorem inside charts and cancels the integrals along the
paired subedges of a finite chart cellulation; it uses no choice principle,
no de Rham theorem and no Stokes theorem.

## Facts & Assumptions

**Given:** A compact Riemann surface $X$ and a meromorphic differential $\omega$ on $X$, with pole set $S$.

[F1] A chart of $X$ maps homeomorphically onto an open subset of $\mathbb C$, and every point lies in a chart with connected domain; a chart expression of $\omega$ is a meromorphic function on a plane domain, and the transition law $h_\psi(w)=h_\varphi(z(w))z'(w)$ holds on overlaps; charts are holomorphic, hence orientation-preserving ([[def-riemann-surface-and-holomorphic-atlas]], [[def-meromorphic-differential-on-a-riemann-surface]]).

[F2] A meromorphic function on a plane domain has only isolated poles: its pole set is a closed discrete subset of the domain ([[def-meromorphic-function-complex-domain]], [[def-isolated-singularity-types]]); a holomorphic function on a domain vanishing on a set with an accumulation point in the domain vanishes identically ([[thm-identity-theorem-holomorphic-functions]]).

[F3] If $X$ is compact and $F\subseteq X$ is finite, there is an oriented chart cellulation subordinate to $F$: finitely many closed topological triangle cells $\Delta_1,\dots,\Delta_m$ covering $X$, each inside a holomorphic chart $(\varphi_i,U_i)$, pairwise interior-disjoint, with piecewise Puiseux-analytic rectifiable boundary arcs. Their boundaries have a finite common subdivision into subedges, each traversed by exactly two cells with opposite induced orientations, and $F$ lies in cell interiors ([[lem-finite-analytic-chart-triangulation-compact-riemann-surface]]).

[F4] Every cell of [F3] is, in its chart plane, the image under an orientation-preserving similarity of a graph-bounded region $\{w\le y\le w',\ \alpha(y)\le x\le\beta(y)\}$ with $\alpha\le\beta$ continuous, real-analytic on the open interval and with Puiseux-analytic-arc graphs; the boundary contour of the region is positively oriented ([[lem-planar-piecewise-analytic-region-triangulation]]).

[F5] For a graph-bounded region $T$ as in [F4] with positively oriented boundary contour $\gamma$: $\gamma$ is a closed complex contour, $n(\gamma,q)=1$ for $q\in T^\circ$ and $n(\gamma,q)=0$ for $q\notin T$, and $\gamma$ is null-homologous in every open $\Omega\supseteq T$; the same holds for the image of $T$ under an orientation-preserving similarity ([[lem-index-of-graph-bounded-region-boundary]]).

[F6] Admissible cycles and the plane residue theorem: if $\Omega\subseteq\mathbb C$ is open, $h$ meromorphic on $\Omega$ with pole set $P$, and $\Gamma$ is a complex cycle with $\Gamma^\ast\subseteq\Omega\setminus P$ and $n(\Gamma,p)=0$ for every $p\notin\Omega$, then $\int_\Gamma h\,dz=2\pi i\sum_{a\in P}n(\Gamma,a)\operatorname{Res}(h,a)$, where $\operatorname{Res}(h,a)$ is the $z^{-1}$ Laurent coefficient; only finitely many terms are nonzero ([[def-admissible-cycle-for-residue-theorem]], [[thm-residue-theorem-null-homologous-cycle]]).

[F7] For a piecewise $C^1$ contour the Riemann–Stieltjes contour integral equals the parametrized integral $\sum_j\int f(\gamma)\gamma'\,dt$ ([[thm-riemann-stieltjes-and-parametric-contour-integrals-agree]]); the chain rule holds for complex derivatives ([[thm-chain-rule-for-complex-derivatives]]); complex line integrals are additive over concatenations and change sign under reversal ([[prop-reversal-and-concatenation-of-complex-line-integrals]]).

[F8] A closed subset of a compact space is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]).


## Proof

**Proof technique:** direct.

1.1 (The pole set is closed and discrete, hence finite.) Suppose $\omega\ne0$. The pole set $S$ is discrete: each $p\in S$ has a chart neighbourhood off which the local expression of $\omega$ is holomorphic except at $p$, by [F1] and [F2]. It is also closed: if $x\in X\setminus S$ and $h$ is a chart expression of $\omega$ near $\varphi(x)$, then $h$ is holomorphic at $\varphi(x)$ because $x$ is not a pole, and by [F2] the poles of $h$ are isolated, so a neighbourhood of $\varphi(x)$ contains none of them, whence a neighbourhood of $x$ is disjoint from $S$. As a closed subset of the compact surface, $S$ is compact by [F8]; a discrete compact space is finite, because the family of singletons is an open cover admitting a finite subcover only when the space is finite. Hence $S=\{p_1,\dots,p_N\}$ is finite. [F1, F2, F8, given]

1.2 (The integral of $\omega$ along a path is chart-independent.) For a piecewise $C^1$ path $\lambda$ in $X$ whose trace lies in a chart $(U,\varphi)$ define $\int_\lambda\omega:=\int_{\varphi\circ\lambda}h\,dz$ with $h$ the chart expression. If another chart $(U',\varphi')$ contains the trace, put $\tau=\varphi\circ(\varphi')^{-1}$ on $\varphi'(U\cap U')$ and $w=\varphi'\circ\lambda$; by [F1] the transition law gives $h_\varphi(\tau(w))\tau'(w)=h_{\varphi'}(w)$, and by [F7] and the chain rule the parametrized integrals of $h_\varphi$ over $\varphi\circ\lambda=\tau\circ w$ and of $h_{\varphi'}$ over $w$ agree; so the definition is independent of the chart used. The integral is additive over concatenations and changes sign under reversal. The face edges used below admit piecewise $C^1$ parametrizations: each Puiseux endpoint germ becomes $C^1$ after the parameter substitution $t=s^m$ supplied in the planar lemma, and holomorphic chart changes preserve piecewise $C^1$ regularity. [F1, F3, F7]

2.1 (Chart cellulation subordinate to the poles.) Apply [F3] with $F=S$: the cells $\Delta_1,\dots,\Delta_m$ cover $X$, each lies in a chart $(\varphi_i,U_i)$, the interiors are pairwise disjoint, each pole lies in the interior of exactly one cell, and the cell boundaries have the finite common subedge system of [F3]. [F3, step 1.1]

3.1 (Each cell is graph-bounded in its chart.) Fix $i$. By [F4] there is an orientation-preserving similarity $\sigma_i$ of the chart plane and a graph-bounded region $T_i$ with $\varphi_i(\Delta_i)=\sigma_i(T_i)$; write $\gamma_i$ for the positively oriented boundary contour of $\varphi_i(\Delta_i)$, i.e. the image under $\sigma_i$ of the boundary contour of $T_i$. The induced orientation of $\Delta_i$ is the complex orientation of $X$, and $\varphi_i$ is holomorphic hence orientation-preserving. The finite common boundary subdivision of [F3] splits $\gamma_i$ into contour contributions from subedges, each of which occurs on precisely two cells with opposite orientations. [F3, F4, step 2.1]

4.1 (A chart domain in which the only poles are the interior ones.) Fix $i$, put $R_i:=\varphi_i(\Delta_i)=\sigma_i(T_i)$, and let $h_i$ be the chart expression of $\omega$ on the chart domain of $\varphi_i$, with pole set $P_i$; by [F2] and [F1], $P_i$ is closed and discrete in the chart domain. The compact set $\gamma_i^\ast=\partial R_i$ is disjoint from $P_i$, because the poles of $\omega$ lie in face interiors and $\varphi_i$ maps the boundary of $\Delta_i$ onto $\gamma_i^\ast$; hence the distance from $\gamma_i^\ast$ to $P_i$ is positive (read as $+\infty$ if $P_i$ is empty). Since the compact set $R_i$ lies in the open chart image $D_i:=\varphi_i(U_i)$, its distance from $\mathbb C\setminus D_i$ is also positive. Choose $\delta_i>0$ smaller than half of both distances and put $\Omega_i:=\{q:\operatorname{dist}(q,R_i)<\delta_i\}$; it is open, contains $R_i$ and lies in $D_i$, so $h_i$ is defined throughout $\Omega_i$. Every pole in $\Omega_i$ lies in $R_i^\circ$: if a pole $q$ were outside the closed set $R_i$, then $\operatorname{dist}(q,\gamma_i^\ast)=\operatorname{dist}(q,R_i)<\delta_i$, contradicting $\operatorname{dist}(q,\gamma_i^\ast)\ge\operatorname{dist}(\gamma_i^\ast,P_i)>2\delta_i$, and $q\in\partial R_i$ is impossible because $\gamma_i^\ast\cap P_i=\varnothing$. [F1, F2, step 2.1, step 3.1]

4.2 (Summing over the cells.) By step 3.1 each of the finitely many subedges occurs in the boundary of exactly two cells, traversed with opposite orientations; split each $\gamma_i$ at the subedge vertices and use additivity, chart independence and reversal from step 1.2. Every subedge contribution occurs twice with opposite signs, so $$\sum_{i=1}^m\int_{\gamma_i}h_i\,dz=0 .$$ [step 2.1, step 3.1, step 1.2]

5.1 (Plane residue theorem on each face.) Fix $i$. The contour $\gamma_i$ has trace in $\Omega_i\setminus P_i$, and it is null-homologous in $\Omega_i$: for $q\notin\Omega_i$ we have $q\notin\sigma_i(T_i)$, so [F5] gives $n(\gamma_i,q)=0$. Applying [F6] to $h_i$ on $\Omega_i$ and $\Gamma=\gamma_i$, whose only poles in $\Omega_i$ are the images of the poles of $\omega$ lying in $\Delta_i^\circ$, gives $$\int_{\gamma_i}h_i\,dz=2\pi i\!\!\sum_{p\in S\cap\Delta_i^\circ}\!\!\operatorname{Res}_p(\omega),$$ because the index of $\gamma_i$ at each of those poles is $1$ by [F5]. [F5, F6, step 4.1]

6.1 (Conclusion.) Summing the identities of step 5.1 over $i$ and using step 4.2 gives $$0=\sum_{i=1}^m\int_{\gamma_i}h_i\,dz=2\pi i\sum_{p\in S}\operatorname{Res}_p(\omega),$$ since each pole lies in exactly one cell interior by step 2.1; dividing by $2\pi i\ne0$ gives $\sum_{p\in X}\operatorname{Res}_p(\omega)=0$, and the residues vanish off the finite set $S$. For $\omega=0$ the assertion is the convention recorded in the statement. All choices made were finite, so no choice principle was used. [step 5.1, step 4.2, step 1.1] ∎


## Remarks

The proof is a finite bookkeeping argument: each pole contributes exactly once, through the face whose interior contains it, and every interior edge contributes twice with opposite signs, so the total is zero. Two points deserve emphasis. First, the *index one* of a face boundary at an interior point is supplied by [[lem-index-of-graph-bounded-region-boundary]] through explicit deformations (the graph sides are straightened to distant vertical lines and the resulting rectangle is deformed onto a circle), not by the general Jordan curve theorem, which this library deliberately does not assume. Second, the chart cellulation of [[lem-finite-analytic-chart-triangulation-compact-riemann-surface]] supplies finitely many chart-contained rectifiable cells and paired subedges, so the boundary contributions cancel as finite sums of well-defined path integrals. The residue theorem for the sphere [[ex-coordinate-change-for-meromorphic-differential]] checks the statement in the simplest compact case.
