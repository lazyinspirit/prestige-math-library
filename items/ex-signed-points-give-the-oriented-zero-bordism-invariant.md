---
id: ex-signed-points-give-the-oriented-zero-bordism-invariant
kind: example
title: Signed points give the oriented zero-bordism invariant
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-unoriented-smooth-cobordism-of-closed-manifolds
  - def-oriented-smooth-cobordism
  - def-null-cobordant-closed-manifold
  - def-unoriented-and-oriented-bordism-groups
  - thm-disjoint-union-makes-bordism-classes-abelian-groups
  - prop-zero-dimensional-bordism-groups
  - def-induced-boundary-orientation
  - def-oriented-smooth-manifold-and-oriented-chart
  - def-product-orientation
  - prop-boundary-orientation-of-a-product-when-at-most-one-factor-has-boundary
  - prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure
  - def-euclidean-spheres-and-closed-balls
  - cor-euclidean-closed-balls-and-spheres-are-compact
  - prop-boundary-orientation-is-independent-of-the-outward-vector-field
  - thm-euclidean-inverse-function-theorem
  - def-euclidean-upper-half-space-and-its-boundary
  - def-boundary-defining-function
  - def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary
  - def-smooth-collar-of-a-manifold-boundary
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (original pagination)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Page 203, a compact oriented 0-manifold is a finite set of signed points and the signed sum is a complete cobordism invariant"
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: https://people.math.harvard.edu/~dafr/bordism.pdf
      locator: "Figure 5, printed p.18; Proposition 1.31, printed pp.11-12"
---

## Example

For a closed oriented zero-manifold $M=\coprod_{x}\{x\}$ with signs
$\epsilon_x\in\{\pm1\}$ determined by the orientation, the integer
$\sum_{x}\epsilon_x$ is unchanged by oriented cobordism, and the map
$[M]\mapsto\sum_x\epsilon_x$ is an isomorphism $\Omega_0^{SO}\to\mathbb Z$. A
positively oriented point is a generator, and the standard interval $[-1,1]$
with suitable collars realizes $[\mathrm{pt}_+]+[\mathrm{pt}_-]=0$ with the
sign convention of the page, so $[\mathrm{pt}_-]=-[\mathrm{pt}_+]$.
Consequently two finite oriented point sets are oriented cobordant exactly
when their signed counts agree
([[prop-zero-dimensional-bordism-groups]],
[[def-unoriented-and-oriented-bordism-groups]]).

## Facts & Assumptions

**Given:** A closed oriented zero-manifold $M=\coprod_x\{x\}$ with signs $\epsilon_x$, the interval $[-1,1]$ with its standard orientation, and the oriented bordism classes of closed oriented zero-manifolds.

[F1] With the standard orientation on $[a,b]$, the induced boundary orientation is $\{b\}-\{a\}$: the endpoint $b$ is positive and $a$ is negative ([[prop-boundary-orientation-is-independent-of-the-outward-vector-field]], [[def-induced-boundary-orientation]]); the closed ball $B^1=[-1,1]=\{x:1-x^2\ge0\}$ is a compact smooth one-manifold with boundary $\{-1,1\}$ by the nonzero derivative of $1-x^2$ at $\pm1$ and the inverse function theorem ([[thm-euclidean-inverse-function-theorem]], [[def-euclidean-upper-half-space-and-its-boundary]], [[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]], [[def-boundary-defining-function]], [[def-euclidean-spheres-and-closed-balls]], [[cor-euclidean-closed-balls-and-spheres-are-compact]]).

[F2] An oriented bordism from $(M_0,o_0)$ to $(M_1,o_1)$ has induced boundary orientations $-o_0$ on the incoming and $o_1$ on the outgoing face, and a closed oriented manifold is null-cobordant exactly when it occurs as the negative of the induced boundary of a compact oriented one-manifold; collars are part of the bordism data ([[def-oriented-smooth-cobordism]], [[def-null-cobordant-closed-manifold]], [[def-smooth-collar-of-a-manifold-boundary]]).

[F3] The signed count $[M]\mapsto\sum_x\epsilon_x$ is an isomorphism of abelian groups $\Omega_0^{SO}\to\mathbb Z$ with $\mathrm{pt}_+\mapsto1$; a compact oriented zero-manifold bounds a compact oriented one-manifold exactly when its signed count is zero; classes of orientation-preserving diffeomorphic closed oriented manifolds agree ([[prop-zero-dimensional-bordism-groups]], [[thm-disjoint-union-makes-bordism-classes-abelian-groups]], [[def-unoriented-and-oriented-bordism-groups]]).

[F4] The opposite orientation of a zero-manifold reverses every sign $\epsilon_x$, and the product orientation and boundary conventions of the page apply to the explicit interval model ([[def-oriented-smooth-manifold-and-oriented-chart]], [[def-product-orientation]], [[prop-boundary-orientation-of-a-product-when-at-most-one-factor-has-boundary]], [[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]]).

## Verification

1.1 (The interval realizes $[\mathrm{pt}_+]+[\mathrm{pt}_-]=0$.) Let $x\ne y$ be two points and orient the zero-manifold $\{x,y\}$ so that $x$ is positive and $y$ is negative. On the compact interval $[-1,1]$ with its standard orientation the induced boundary orientation is $\{1\}-\{-1\}$ by [F1], that is, the point $1$ is positive and the point $-1$ is negative. Define the collar $\theta:[0,1)\times\{x,y\}\to[-1,1]$ by $\theta(s,x)=-1+\tfrac{s}{2}$ and $\theta(s,y)=1-\tfrac{s}{2}$; its images are disjoint open intervals around the two endpoints; taking the whole boundary as the incoming part, the induced orientation on the incoming face is $\{y\}-\{x\}$, the negative of the source orientation. Hence $[-1,1]$ with this collar and orientation is an oriented null-cobordism of $\{x,y\}$, and $[\mathrm{pt}_+]+[\mathrm{pt}_-]=0$ in $\Omega_0^{SO}$. [F1, F2, F4]

2.1 (The invariant, the generator and the consequences.) By [F3] the signed count is unchanged by oriented cobordism and defines an isomorphism $\Omega_0^{SO}\to\mathbb Z$ that sends a positively oriented point to $1$. Step 1.1 shows $[\mathrm{pt}_-]=-[\mathrm{pt}_+]$ in the group, and this is consistent with the isomorphism because the two signed counts are $+1$ and $-1$. Finally, two finite oriented point sets have equal images under the isomorphism if and only if their signed counts agree, and since the isomorphism is injective this is exactly the condition that they are oriented cobordant; equivalently, their difference has signed count zero and is null-cobordant, again by [F3]. [F3, step 1.1] ∎
