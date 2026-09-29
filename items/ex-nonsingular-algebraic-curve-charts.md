---
id: ex-nonsingular-algebraic-curve-charts
kind: example
title: Nonsingular affine and projective curves as Riemann surfaces
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - lem-nonsingular-complex-algebraic-curve-holomorphic-charts
  - def-riemann-surface-and-holomorphic-atlas
  - def-affine-algebraic-set
  - def-jacobian-matrix-affine-algebraic-set
  - def-projective-space-points
  - def-quotient-topology
  - thm-initial-and-final-characteristic-properties
  - thm-heine-borel-rn
  - thm-compactness-under-continuous-maps
  - thm-closed-subspace-of-a-compact-space-is-compact
  - prop-components-of-a-topological-manifold-are-open-and-at-most-countable
  - lem-t0-t1-and-hausdorff-are-hereditary
  - prop-second-countability-is-hereditary
  - ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds
  - def-topological-manifold-without-boundary
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Eduard Looijenga, Riemann Surfaces (2007)"
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 1 §2, Examples 1.9(iii)–(iv), printed pp. 10–11: the affine zero set of holomorphic functions with nonvanishing gradient and the projective zero set of a homogeneous polynomial are Riemann surfaces; the projective zero set is closed in the compact projective plane."
    - title: "Curtis T. McMullen, Riemann Surfaces, Math 213b course notes (2026)"
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 1–2, examples of Riemann surfaces and of algebraic curves, used as a cross-check of the chart and compactness statements."
---

## Example

Let $C\subseteq\mathbb C^N$ be the common zero set of polynomials
$f_1,\dots,f_r$ ([[def-affine-algebraic-set]]) and suppose that at every
$p\in C$ the curve is nonsingular in the Jacobian-rank sense of
[[lem-nonsingular-complex-algebraic-curve-holomorphic-charts]]: near $p$ it is
the common zero set of $N-1$ holomorphic functions whose Jacobian matrix at $p$
has rank $N-1$. Then the local ambient-coordinate charts of that lemma give $C$
the structure of a one-dimensional complex manifold: each connected component of
$C$ is a Riemann surface with the restricted atlas. The same holds for a
projective algebraic curve $C\subseteq\mathbb{CP}^N$ that is nonsingular in the
Jacobian-rank sense in every standard affine chart, and such a projective curve
is compact in its analytic topology. The conic
$C_0=\{x^2+y^2=1\}\subseteq\mathbb C^2$ is an explicit affine instance.

## Facts & Assumptions

**Given:** The zero set $C\subseteq\mathbb C^N$ of polynomials $f_1,\dots,f_r$ with the Jacobian-rank nonsingularity hypothesis, and the projective space $\mathbb{CP}^N$ with its standard affine charts $U_i=\{[\zeta]:\zeta_i\ne0\}$.

[F1] At a point of a curve nonsingular in the Jacobian-rank sense, one free ambient coordinate of a standard affine chart is a local parameter: the chart is a homeomorphism onto a plane domain with holomorphic inverse, and any two such local parameters have holomorphic transition maps. The supplier also proves in its step 1.2 that each ambient standard affine chart $U_i$ of $\mathbb{CP}^N$ is open and homeomorphic to $\mathbb C^N$, with holomorphic transitions ([[lem-nonsingular-complex-algebraic-curve-holomorphic-charts]]).

[F2] A Riemann surface is a nonempty connected Hausdorff second-countable space with a holomorphic atlas of compatible charts ([[def-riemann-surface-and-holomorphic-atlas]]); charts are homeomorphisms onto open subsets of $\mathbb C$.

[F3] $\mathbb{CP}^N=(\mathbb C^{N+1}\setminus\{0\})/\sim$ with classes $[\zeta]$, and a subset of $\mathbb{CP}^N$ is closed exactly when its preimage under the quotient map is closed ([[def-projective-space-points]], [[def-quotient-topology]]); a map out of the quotient is continuous exactly when its composite with the quotient map is ([[thm-initial-and-final-characteristic-properties]]).

[F4] The unit sphere $S^{2N+1}\subseteq\mathbb C^{N+1}=\mathbb R^{2N+2}$ is closed and bounded, hence compact, and continuous images of compact spaces are compact ([[thm-heine-borel-rn]], [[thm-compactness-under-continuous-maps]]).

[F5] A closed subset of a compact space is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]); the Hausdorff property and second countability pass to subspaces ([[lem-t0-t1-and-hausdorff-are-hereditary]], [[prop-second-countability-is-hereditary]]).

[F6] $\mathbb C^N$ is a topological $2N$-manifold, hence Hausdorff and second countable ([[ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds]], [[def-topological-manifold-without-boundary]]).

[F7] The components of a topological manifold are open and at most countable ([[prop-components-of-a-topological-manifold-are-open-and-at-most-countable]]).

[F8] The Jacobian matrix of a list $f_1,\dots,f_r$ is $(\partial f_i/\partial t_j)$ ([[def-jacobian-matrix-affine-algebraic-set]]); $\nabla(x^2+y^2-1)=(2x,2y)$.



## Proof

**Proof technique:** direct.

1.1 (The affine curve is a nice topological space.) The set $C\subseteq\mathbb C^N$ is closed, so as a subspace of the Hausdorff second-countable space $\mathbb C^N$ it is itself Hausdorff and second countable by [F5] and [F6]; every connected component of $C$ is open by [F7], hence a nonempty connected Hausdorff second-countable space. [F5, F6, F7, given]

1.2 (The projective space is compact and second countable.) The quotient map $q:\mathbb C^{N+1}\setminus\{0\}\to\mathbb{CP}^N$ has continuous restriction to $S^{2N+1}$ by [F3], it is surjective because every nonzero vector is a positive multiple of a unit vector, so $\mathbb{CP}^N$ is compact by [F4]; its finitely many standard affine charts are homeomorphic to $\mathbb C^N$ by [F1], hence second countable by [F6], and a finite union of open second-countable subspaces is second countable, since the union of their countable bases is a countable base. [F1, F3, F4, F6]

2.1 (The affine curve has a holomorphic atlas.) At each $p\in C$ the local parameter supplied by [F1] is a chart from a neighbourhood of $p$ onto a plane domain; over two such neighbourhoods the transition map between local parameters is holomorphic by [F1]; hence these charts form a holomorphic atlas on $C$, and restricting the charts to a connected component exhibits that component as a Riemann surface in the sense of [F2]. [F1, F2, step 1.1]

2.2 (The projective space is Hausdorff.) Let $[\zeta]\ne[\eta]$ in $\mathbb{CP}^N$. If some $U_i$ contains both, then the chart homeomorphism $U_i\to\mathbb C^N$ separates them, since $\mathbb C^N$ is Hausdorff and $U_i$ is open. Otherwise the supports of $\zeta$ and $\eta$ are disjoint. Put $S=\{i:\zeta_i\ne0\}$ and define $g([\xi])=(\sum_{i\in S}|\xi_i|^2)/(\sum_{k=0}^N|\xi_k|^2)$. This is well defined under nonzero complex scaling; its composite with the quotient map is continuous, so it is continuous by [F3]. Since $g([\zeta])=1$ and $g([\eta])=0$, the open sets $\{g>2/3\}$ and $\{g<1/3\}$ are disjoint neighbourhoods of the two points. [F3, F6, step 1.2]

3.1 (The conic is a nonsingular affine instance.) For $f=x^2+y^2-1$ one has $\nabla f=(2x,2y)$, which vanishes only at the origin, and $(0,0)\notin C_0$ because $-1\ne0$; hence the Jacobian of the single equation has rank $1=N-1$ at every point of $C_0$ with $N=2$, so $C_0$ satisfies the hypothesis of steps 1.1 and 2.1 and is a complex curve whose components are Riemann surfaces. [F8, step 2.1, given]

3.2 (The projective curve has a holomorphic atlas.) Let $C\subseteq\mathbb{CP}^N$ be the zero set of homogeneous polynomials $F_1,\dots,F_r$ and suppose it is nonsingular in the Jacobian-rank sense in each standard affine chart, i.e. each piece $C\cap U_i$ is, under the chart identification, an affine curve satisfying the hypothesis of step 2.1; by step 2.1 each piece therefore carries the local-parameter atlas, and the charts coming from two different affine charts are compatible because the standard chart transitions are holomorphic and, by [F1], all local parameters of the curve transform holomorphically; hence these charts form one holomorphic atlas on $C$, and its connected components are Riemann surfaces. [F1, F2, step 2.1, given]

4.1 (The projective curve is compact, Hausdorff and second countable.) The curve $C\subseteq\mathbb{CP}^N$ is closed, because its preimage under the quotient map is the zero set of the continuous functions $F_i$ on $\mathbb C^{N+1}\setminus\{0\}$ by [F3]; being a closed subset of the compact space $\mathbb{CP}^N$ of step 1.2 it is compact by [F5], and being a subspace of the Hausdorff second-countable space $\mathbb{CP}^N$ of steps 1.2 and 2.2 it is Hausdorff and second countable by [F5]; hence, with the atlas of step 3.2, each component is a Riemann surface. [F5, step 1.2, step 2.2, step 3.2]

5.1 (Conclusion.) Steps 2.1 and 3.1 give the affine curves, in particular the nonsingular conic $x^2+y^2=1$, the local-parameter complex structure, and steps 3.2 and 4.1 do the same for a projective curve while proving that it is compact in its analytic topology; in each case the components inherit a holomorphic atlas, Hausdorffness and second countability, so they are Riemann surfaces. [step 2.1, step 3.1, step 3.2, step 4.1] ∎



## Remarks
Nonsingularity is essential: the nodal curve $y^2=x^2(x+1)$ is not locally
biholomorphic to a plane domain at the origin, where the Jacobian-rank
hypothesis fails. The compactness statement is about the analytic topology of
the projective curve inside $\mathbb{CP}^N$ and uses only that
$\mathbb{CP}^N$ is a continuous image of the compact sphere; no algebraic
compactness theorem is invoked. The conic is treated again, with an explicit
biholomorphism to $\mathbb C^\times$, in
[[ex-smooth-affine-conic-as-punctured-plane]].
