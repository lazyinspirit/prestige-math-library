---
id: thm-borsuk-ulam-general
kind: theorem
title: "Borsuk–Ulam theorem in every dimension"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: [def-axiom-of-choice, def-euclidean-spheres-and-closed-balls, lem-mod-two-cohomology-ring-of-infinite-real-projective-space, lem-real-projective-space-cellular-homology-and-pinch-map, lem-cohomology-of-a-finite-cw-complex-vanishes-above-its-dimension, thm-homotopic-maps-induce-equal-maps-in-singular-cohomology, prop-cup-product-is-natural-unital-and-associative]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Proposition 2B.6, Corollary 2B.7 and Theorem 3.19"
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: "Complete proofs pp.174–176 and 220–221; §3.2 Exercise 3 gives the projective-cohomology route."
---

## Statement

Assume the Axiom of Choice. For every integer $m\ge0$ and every continuous map $h:S^m\to\mathbb R^m$, there exists $x\in S^m$ with $h(x)=h(-x)$. Here $S^m$ is the Euclidean unit sphere in $\mathbb R^{m+1}$.

## Statement references

[[def-euclidean-spheres-and-closed-balls]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** AC, $m\ge0$, and continuous $h:S^m\to\mathbb R^m$.

[F1] With mod-two coefficients, $H^*(\mathbb{RP}^{\infty})=\mathbb F_2[a]$, $|a|=1$. The standard inclusion $i_k:\mathbb{RP}^k\to\mathbb{RP}^{\infty}$ induces an isomorphism in degrees at most $k$ ([[lem-mod-two-cohomology-ring-of-infinite-real-projective-space]]).

[F2] The space $\mathbb{RP}^k$, the quotient of $S^k$ identifying $x$ and $-x$, is a nonempty finite CW complex of dimension $k$ ([[lem-real-projective-space-cellular-homology-and-pinch-map]]). Its cohomology vanishes in degrees greater than $k$ ([[lem-cohomology-of-a-finite-cw-complex-vanishes-above-its-dimension]]).

[F3] Homotopic continuous maps induce equal cohomology maps ([[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]]). Pullback is a unital ring homomorphism and respects composition ([[prop-cup-product-is-natural-unital-and-associative]]).

[A1] [[def-axiom-of-choice]] is assumed through the cohomology suppliers [F1]–[F2]; the explicit maps below require no further choice.

## Proof

1.1 We first rule out a continuous odd map $g:S^m\to S^{m-1}$ for $m\ge1$. Such a map descends to $b:\mathbb{RP}^m\to\mathbb{RP}^{m-1}$, $b([x])=[g(x)]$. This is continuous by the quotient topology, since the composite with the sphere quotient is continuous and $g(-x)=-g(x)$. [given, construct]

2.1 In the coordinate subspace $\mathbb R^{m+1}\oplus\mathbb R^m\subset\mathbb R^{\infty}$, define $$H([x],t)=[\cos(\pi t/2)x,\ \sin(\pi t/2)g(x)],\qquad 0\le t\le1.$$ Its representing vector has norm one. Replacing $x$ by $-x$ negates the whole vector, so the projective point is independent of representative. Continuity can be checked on each chart where a chosen coordinate of $x$ is nonzero: choose the unit representative with that coordinate positive, which varies continuously in the ratios of the remaining coordinates, and use the displayed formula. These charts cover projective space, proving joint continuity in $([x],t)$. Thus $H$ is a homotopy from $i_m$ to $j\circ b$, where $j([y])=[0,y]$ is the inclusion in the second block. The same formula with $y$ in the first $m$ coordinates and $y$ in the second block, namely $[\cos(\pi t/2)y,0,\sin(\pi t/2)y]$, is a homotopy from $i_{m-1}$ to $j$. Both homotopies lie in the finite projective subspace $\mathbb{RP}^{2m}$ of the infinite space and therefore are continuous there as well. [step 1.1, construct]

3.1 Put $a_k=i_k^*a$. By [F3] and step 2.1, $a_m=b^*a_{m-1}$, including $m=1$ when $a_0=0$. Consequently $$a_m^m=b^*(a_{m-1}^m)=0,$$ since $H^m(\mathbb{RP}^{m-1};\mathbb F_2)=0$ by [F2]. On the other hand, [F1] says $a^m\ne0$ and that $i_m^*$ is an isomorphism in degree $m$, so $a_m^m=i_m^*(a^m)\ne0$. These incompatible conclusions rule out every such odd map. [F1, F2, F3, step 2.1, algebra]

4.1 For $m\ge1$, if $h(x)-h(-x)$ never vanished, then $$g(x)=\frac{h(x)-h(-x)}{\|h(x)-h(-x)\|_2}$$ would be continuous, take values in $S^{m-1}$ and satisfy $g(-x)=-g(x)$. Step 3.1 rules this out, so an antipodal pair has equal images. When $m=0$, the codomain $\mathbb R^0$ consists of one point and the two points of $S^0$ have equal images directly. AC is inherited exactly as stated in [A1]. [given, A1, step 3.1, construct] ∎

