---
id: thm-lower-dimensional-sphere-maps-are-based-nullhomotopic
kind: theorem
title: Lower-dimensional sphere maps are based nullhomotopic
deps: ["thm-finite-simplicial-approximation-for-maps-of-pairs", "def-euclidean-spheres-and-closed-balls", "def-homotopy-relative-and-path-homotopy", "lem-straight-line-homotopies-are-continuous"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: May, A Concise Course in Algebraic Topology
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 9 section 4, printed p67, complete lower-sphere lemma proof
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

For integers $0\le k<r$, $r\ge1$, every continuous based map $(S^k,a)\to(S^r,b)$ is nullhomotopic through maps fixing a. For k=0 this says every point of $S^r$ can be joined to b. No arbitrary choice principle is required.

## Facts & Assumptions

[F1] A finite pair map has a simplicial approximation through pair maps; a singleton target subcomplex is therefore fixed. [[thm-finite-simplicial-approximation-for-maps-of-pairs]]

[F2] Straight-line homotopies into a convex Euclidean subspace are continuous. [[lem-straight-line-homotopies-are-continuous]]


## Proof

**Given:** The spaces, maps, and hypotheses in the statement above.

1.1 Triangulate $S^d$ by the boundary of the cross-polytope: faces are convex hulls of signed coordinate vectors containing no opposite pair. Its realization is $\sum|x_i|=1$. Radial normalization $x/\|x\|_2$ and its inverse $y/\sum|y_i|$ identify it with the sphere. To put any specified basepoint b at a vertex, if b≠e1 use $H_b(x)=x-2\langle x,e_1-b\rangle(e_1-b)/\|e_1-b\|^2$; the identity is used if b=e1. Its orthogonality follows by expanding the inner product, and $H_b(e_1)=b$ since $\|e_1-b\|^2=2(1-b_1)$. Thus both spheres have finite triangulations with their basepoints vertices, including the two-point S0. [algebra]

2.1 Apply F1 to the pair consisting of the source sphere and its singleton vertex, mapping to the target sphere and its singleton vertex. The pair homotopy fixes a, because its image there must stay in {b}. The simplicial image has dimension at most k. Since k<r it misses the interior of every top-dimensional target simplex; choose p to be the radial image of the barycenter of one such simplex. Then p is omitted and p≠b. [F1, step 1.1]

3.1 On $S^r\setminus\{p\}$, set $q(x)=(x-\langle x,p\rangle p)/(1-\langle x,p\rangle)\in p^\perp$. Its inverse is $v\mapsto(2v+(\|v\|^2-1)p)/(\|v\|^2+1)$: substitution uses $\langle v,p\rangle=0$ and gives both identity composites. The denominators are positive on the specified domains. By F2 the affine homotopy $(v,t)\mapsto(1-t)v+tq(b)$ is continuous and fixes q(b). Composing with the simplicial image and q inverse gives a based nullhomotopy. Prepend the based approximation homotopy from step 2.1, pasting on the two closed time halves. This proves the claim, including k=0. [F1, F2, step 1.1, step 2.1] ∎
