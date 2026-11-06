---
id: lem-cft-plumbing-local-smoothing-node
kind: lemma
title: Local smoothing and nodal fiber of plumbing
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
deps:
  - def-cft-plumbing-and-sewing-parameter
  - def-complex-manifolds-and-holomorphic-vector-bundles
  - def-axiom-of-choice
justified_by: []
domain: mathematics
library: mathematics
dependency_roles:
  def-cft-plumbing-and-sewing-parameter: mathematical-premise
  def-complex-manifolds-and-holomorphic-vector-bundles: mathematical-premise
  def-axiom-of-choice: mathematical-premise
axiom_use: "The only AC-dependent input is the pointed-worldsheet definition carried by the plumbing supplier; the coordinate calculation below makes no choice."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Bin Gui and Hao Zhang, Analytic Conformal Blocks of C2-cofinite Vertex Operator Algebras II: Convergence of Sewing and Higher Genus Pseudo-q-traces"
      url: https://arxiv.org/pdf/2411.07707v4
      locator: "§1.2 and §4.1 for the local equation zw=q and multi-pair plumbing; the proof below verifies the local analytic geometry directly."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $r,s>0$ and let $\mathcal P_{r,s}=\{(z,w,q): |z|<r,\ |w|<s,\ |q|<rs,\ zw=q\}$ be the local plumbing family with the equation fixed in its Definition. For $q\neq0$, its fiber is a smooth one-dimensional complex manifold on the plumbing annulus. The central fiber is exactly the reduced local node $\{zw=0\}$: two smooth complex branches crossing at the origin. For finitely many pairwise disjoint plumbing neighborhoods, the local equations are independent, so the simultaneous smooth fibers are smooth and the central fiber has one such node for each pair. This is a local statement and asserts no global compactification theorem.

## Statement references

[[def-cft-plumbing-and-sewing-parameter]]

## Facts & Assumptions

**Given:** $r,s>0$, the local family $\mathcal P_{r,s}$, and a finite list of disjoint coordinate pairs with independent parameters.

[F1] [[def-cft-plumbing-and-sewing-parameter]]: in the plumbing chart the fiber equation is $zw=q$; for $q\neq0$ the overlap map is $w=q/z$ on the annulus $|q|/s<|z|<r$, and the central fiber is defined by $zw=0$.

[F2] [[def-complex-manifolds-and-holomorphic-vector-bundles]]: the local analytic coordinates are holomorphic charts on open subsets of complex manifolds.

## Proof

1.1 Fix $q\neq0$. On the fiber $zw=q$, neither $z$ nor $w$ vanishes. The map $z\mapsto(z,q/z)$ is holomorphic on the annulus $|q|/s<|z|<r$, has holomorphic inverse given by projection to $z$, and identifies it with the corresponding $w$-annulus by $w=q/z$. Thus the sewn chart transition is biholomorphic, and every point in this local fiber has a one-dimensional complex chart. [given, F1, F2, algebra]

1.2 At $q=0$, the equation is $zw=0$, so its point set is the union of the coordinate axes $\{z=0\}\cup\{w=0\}$. Its analytic local ring is $\mathbb C\{z,w\}/(zw)$; a convergent power series divisible by both $z$ and $w$ has every monomial divisible by $zw$, so $(z)\cap(w)=(zw)$ and the ring is reduced. The classes of $z$ and $w$ are independent in the cotangent space because the relation has no linear term. Hence the tangent space at the origin is two-dimensional while each branch has complex dimension one. This is the ordinary node in the local analytic convention of the Statement, and it is not a smooth Riemann-surface point. [given, F1, algebra]

2.1 For disjoint plumbing pairs, each local equation uses only its own coordinate pair $(z_j,w_j)$ and parameter $q_j$. The product charts therefore have independent biholomorphic transitions for every $q_j\neq0$, while setting all $q_j=0$ gives the product of the independent equations $z_jw_j=0$. The smoothness and node conclusions of steps 1.1–1.2 apply in each disjoint neighborhood, with no cross-identification between pairs. [given, F1, step 1.1, step 1.2, algebra] ∎

## Local model diagram

The drawing records the two branches of the central fiber in local coordinates; the proof uses the analytic equation, not the drawing.

```tikz
\begin{tikzpicture}[scale=0.8]
  \draw[->] (-2,0) -- (2,0) node[right] {$z$};
  \draw[->] (0,-1.5) -- (0,1.5) node[above] {$w$};
  \fill (0,0) circle (2pt);
  \node[below left] at (-0.1,-0.1) {$zw=0$};
\end{tikzpicture}
```

The horizontal and vertical axes are the sets $w=0$ and $z=0$, respectively; their transverse intersection at the filled origin is the nodal point. The diagram is schematic and adds no global statement about moduli or compactification.
