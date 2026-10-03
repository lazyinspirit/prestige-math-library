---
id: ex-two-unoriented-points-bound-an-interval
kind: example
title: Two unoriented points bound an interval
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-unoriented-smooth-cobordism-of-closed-manifolds
  - def-null-cobordant-closed-manifold
  - def-unoriented-and-oriented-bordism-groups
  - prop-zero-dimensional-bordism-groups
  - thm-disjoint-union-makes-bordism-classes-abelian-groups
  - ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds
  - thm-euclidean-inverse-function-theorem
  - def-euclidean-upper-half-space-and-its-boundary
  - cor-euclidean-closed-balls-and-spheres-are-compact
  - def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary
  - def-boundary-defining-function
  - def-induced-boundary-orientation
  - thm-closed-subspace-of-a-compact-space-is-compact
  - def-diffeomorphism-and-local-diffeomorphism-of-manifolds
  - def-smooth-collar-of-a-manifold-boundary
  - def-smooth-immersion-and-embedding-for-manifolds-with-boundary
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: https://people.math.harvard.edu/~dafr/bordism.pdf
      locator: "Lemma 1.30 and Proposition 1.31, printed pp.10-12"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002)"
      url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
      locator: "Section 6.3, $M\\cup M$ is the boundary of $M\\times I$ and $N_0=\\mathbb Z_2$, electronic pp.117-118"
---

## Example

The closed interval $[-1,1]$ is a compact smooth one-manifold with boundary
$\{-1,1\}$; hence the disjoint union of two points, as a closed zero-manifold,
is null-cobordant and $[\mathrm{pt}]+[\mathrm{pt}]=0$ in $\Omega_0^{O}$
([[def-unoriented-and-oriented-bordism-groups]]). Since a single point is not
null-cobordant (its parity is odd), the class of the one-point manifold is the
unique nonzero element of $\Omega_0^{O}\cong\mathbb Z/2\mathbb Z$
([[prop-zero-dimensional-bordism-groups]]). Thus every closed zero-manifold
with an even number of points is null-cobordant.

## Facts & Assumptions

**Given:** The closed interval $[-1,1]$, the two-point manifold $\{a,b\}$ with distinct points, and the bordism classes of closed zero-manifolds.

[F1] The closed ball $B^1=[-1,1]=\{x:1-x^2\ge0\}$ is a compact smooth one-manifold with boundary $S^0=\{-1,1\}$: the open interval is an open subset of $\mathbb R$, and at each endpoint the derivative of $1-x^2$ is nonzero, so the inverse function theorem gives a half-space chart ([[ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds]], [[thm-euclidean-inverse-function-theorem]], [[def-euclidean-upper-half-space-and-its-boundary]], [[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]], [[def-boundary-defining-function]]); Euclidean closed balls are compact and closed subsets of compact spaces are compact ([[cor-euclidean-closed-balls-and-spheres-are-compact]], [[thm-closed-subspace-of-a-compact-space-is-compact]]).

[F2] A closed zero-manifold is null-cobordant exactly when it is the whole boundary of a compact smooth one-manifold with a collar of that boundary; the class of a null-cobordant manifold is zero in the bordism group ([[def-unoriented-smooth-cobordism-of-closed-manifolds]], [[def-null-cobordant-closed-manifold]], [[def-smooth-collar-of-a-manifold-boundary]], [[def-smooth-immersion-and-embedding-for-manifolds-with-boundary]]).

[F3] $\Omega_0^{O}\cong\mathbb Z/2\mathbb Z$ with generator the class of a one-point manifold, the invariant being the parity of the cardinality; a compact zero-manifold bounds a compact one-manifold exactly when its cardinality is even ([[prop-zero-dimensional-bordism-groups]]).

[F4] The bordism classes form an abelian group with $[M]+[N]=[M\sqcup N]$ and zero the class of the empty manifold; diffeomorphic closed manifolds have equal class ([[thm-disjoint-union-makes-bordism-classes-abelian-groups]], [[def-unoriented-and-oriented-bordism-groups]], [[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]).

## Verification

1.1 (Two points bound an interval.) By [F1], $W=[-1,1]$ is a compact smooth one-manifold with boundary $\partial W=\{-1,1\}$. Define $\theta:[0,1)\times\{-1,1\}\to W$ by $\theta(s,-1)=-1+\tfrac{s}{2}$ and $\theta(s,1)=1-\tfrac{s}{2}$; the two images are the disjoint intervals $[-1,-\tfrac12)$ and $(\tfrac12,1]$, whose union is an open neighbourhood of $\partial W$, and $\theta(0,-1)=-1$, $\theta(0,1)=1$, so $\theta$ is a collar exhibiting all of $\partial W$ as the image of the source. Transporting this collar along the bijection $\{a,b\}\to\{-1,1\}$ gives a compact one-manifold whose whole boundary is $\{a,b\}$ with a collar. Hence the two-point manifold $\{a,b\}$ is null-cobordant, its class is zero, and $[\mathrm{pt}]+[\mathrm{pt}]=[\mathrm{pt}\sqcup\mathrm{pt}]=0$ in $\Omega_0^{O}$. [F1, F2, F4]

1.2 (A single point is not null-cobordant.) By [F3] the parity of the cardinality is a complete invariant of $\Omega_0^{O}$ and equals $1$ on a one-point manifold; hence the class of a point is nonzero, and a one-point manifold does not bound a compact one-manifold. [F3]

2.1 (The generator and the even case.) By [F3] the group $\Omega_0^{O}$ has exactly two elements; step 1.1 shows that the nonzero class of a point is its own inverse, and step 1.2 shows that it is nonzero, so it is the unique nonzero element and generates $\Omega_0^{O}\cong\mathbb Z/2\mathbb Z$. Finally, a closed zero-manifold with an even number of points has parity zero, so by [F3] it bounds a compact one-manifold and is null-cobordant. [F3, step 1.1, step 1.2] ∎
