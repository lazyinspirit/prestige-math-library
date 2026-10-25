---
id: def-frame-bundle-of-a-smooth-manifold
kind: definition
title: The frame bundle of a smooth manifold
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 1
deps:
- def-tangent-bundle-as-a-disjoint-union
- thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure
- def-frame-bundle-and-associated-vector-bundle
- def-invertible-matrix-and-general-linear-group
- def-orientation-of-a-finite-dimensional-real-vector-space
- def-oriented-smooth-manifold-and-oriented-chart
- def-smooth-manifold
- def-normal-and-conormal-bundles-of-an-embedded-submanifold
- cor-operator-determinant-on-the-general-linear-group
- lem-positively-oriented-bases-are-path-connected
- def-countable-choice
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
  - title: 'Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)'
    url: https://people.math.harvard.edu/~dafr/bordism.pdf
    locator: '(2.40)-(2.42) and Exercise 2.43, printed pp.23-24: the frame bundle $B(M)$ of a smooth manifold, its $\mathrm{GL}_m(\mathbb R)$-action and local triviality'
  - title: John Milnor, Topology from the Differentiable Viewpoint
    url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
    locator: Section 7, framed submanifolds and framings of the normal bundle, printed pp.42-44
  - title: Victor Guillemin and Alan Pollack, Differential Topology
    url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
    locator: Chapter 1, Section 3 and Chapter 2, Section 4, orientation of bases and the two components of the general linear group, printed pp.11-16 and 82-84
---
## Definition

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]), inherited from the smooth tangent-bundle theorem. Let $M$ be a smooth $m$-manifold with $m\ge1$. Its tangent bundle
$TM=\bigsqcup_{x\in M}T_xM$ carries the canonical smooth $2m$-manifold
structure of [[thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]]
([[def-tangent-bundle-as-a-disjoint-union]], [[def-smooth-manifold]]). The
**frame bundle** of $M$ is the frame bundle of the tangent bundle in the sense
of [[def-frame-bundle-and-associated-vector-bundle]],
$$B(M):=\operatorname{Fr}(TM)=\{(x,b):x\in M,\ b:\mathbb R^m\to T_xM\ \text{a linear isomorphism}\},$$
the total space of the principal $\mathrm{GL}_m(\mathbb R)$-bundle of
[[def-invertible-matrix-and-general-linear-group]] associated with $TM$. It
carries the smooth structure induced by the linear bundle charts of $TM$
(locally $U\times\mathrm{GL}_m(\mathbb R)$, the second factor an open subset of
the matrix space), the smooth projection $\pi:B(M)\to M$, $\pi(x,b)=x$, and the
free smooth right action $(x,b)\cdot A=(x,b\circ A)$ of
$\mathrm{GL}_m(\mathbb R)$, whose orbits are exactly the fibres $B(M)_x$; each
fibre is therefore a $\mathrm{GL}_m(\mathbb R)$-torsor. A **framing of the
point $x\in M$** is an element $(x,b)$ of the fibre $B(M)_x$, equivalently a
linear isomorphism $b:\mathbb R^m\to T_xM$.

The fibre $B(M)_x$ has exactly two path components, the two orientation
classes of bases of $T_xM$ ([[def-orientation-of-a-finite-dimensional-real-vector-space]]).
Indeed the determinant $\det:\mathrm{GL}_m(\mathbb R)\to\mathbb R^\times$ is a
surjective continuous group homomorphism
([[cor-operator-determinant-on-the-general-linear-group]]), so its sign
separates $\mathrm{GL}_m(\mathbb R)$ into the nonempty open sets of positive
and negative determinant, and the torsor action identifies these with $B(M)_x$;
left multiplication by $\operatorname{diag}(-1,1,\ldots,1)$ identifies the negative-determinant matrices with the positive-determinant matrices, which are path-connected by
[[lem-positively-oriented-bases-are-path-connected]], so these are exactly the two path components. When $M$ is oriented, a chart of $M$ whose coordinate frame
is positive at a point gives the identification of $B(M)_x$ with the positive
and negative bases used here ([[def-oriented-smooth-manifold-and-oriented-chart]]).

A **framing of a closed $0$-dimensional submanifold $N\subseteq M$** is a
framing of $N$ in $M$ in the sense of the normal-quotient convention: since
$\dim N=0$, the normal bundle $\nu(N\subseteq M)=\coprod_{x\in N}T_xM/T_xN$
is $\coprod_{x\in N}T_xM$ over the discrete set $N$
([[def-normal-and-conormal-bundles-of-an-embedded-submanifold]]), so a framing
of $N$ is exactly a family $(b_x)_{x\in N}$ of linear isomorphisms
$b_x:\mathbb R^m\to T_xM$, that is, a family of framings of the individual
points $x\in N$. If $N$ is compact it is finite: its singleton subsets form an open cover and admit a finite subcover.

Finally, if $M$ is oriented, the **sign** of a framing $(x,b)$ is
$\varepsilon(b)=+1$ when the isomorphism $b$ carries the standard orientation
of $\mathbb R^m$ (the one for which the standard basis is positive) to the
given orientation of $T_xM$, and $\varepsilon(b)=-1$ otherwise. Two framings
of the same point have the same sign exactly when they lie in the same
component of $B(M)_x$: the sign is constant on a component because it is a
continuous function with values in $\{\pm1\}$, and the two components are the
positive and the negative bases for the given orientation. No orientation of
$M$ is needed for the definition of $B(M)$ or of a framing, and this definition
selects nothing beyond the supplied chart data of $M$.
