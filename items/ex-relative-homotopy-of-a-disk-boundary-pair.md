---
id: ex-relative-homotopy-of-a-disk-boundary-pair
kind: example
title: Relative homotopy of a disk boundary pair
deps: ["thm-long-exact-sequence-of-relative-homotopy-groups", "prop-cubical-and-spherical-models-of-higher-homotopy-agree", "thm-based-sphere-maps-are-classified-by-geometric-degree", "thm-lower-dimensional-sphere-maps-are-based-nullhomotopic", "lem-straight-line-homotopies-are-continuous"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Hatcher, Algebraic Topology, Chapter 4
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
      locator: §4.1 Example 4.4 p.345; sphere calculation uses the two local sphere suppliers
status: published
origin: pipeline
proof_strategy: direct
---

## Example

For m≥2 and $x_0\in S^{m-1}$,
$$\pi_k(D^m,S^{m-1},x_0)=0\quad(1\le k<m),\qquad \pi_m(D^m,S^{m-1},x_0)\cong\mathbb Z.$$
The positively oriented characteristic disk is the generator. For m=1, relative $\pi_1(D^1,S^0,x_0)$ has exactly two elements as a pointed set, not an infinite cyclic group.

## Facts & Assumptions

[F1] A straight-line homotopy into the convex disk is continuous. [[lem-straight-line-homotopies-are-continuous]]

[F2] The based-pair sequence is exact, including its pointed-set low tail. [[thm-long-exact-sequence-of-relative-homotopy-groups]]

[F3] Lower-dimensional based sphere maps vanish, including the S0 path-component test. [[thm-lower-dimensional-sphere-maps-are-based-nullhomotopic]]

[F4] Sphere self-map degree classifies based homotopy and adds under concatenation. [[thm-based-sphere-maps-are-classified-by-geometric-degree]]

[F5] Cubical and spherical based classes agree. [[prop-cubical-and-spherical-models-of-higher-homotopy-agree]]


## Verification

**Given:** The spaces, maps, and hypotheses in the statement above.

1.1 The homotopy $H(x,t)=(1-t)x+t x_0$ stays in the disk by convexity, is continuous by F1 and fixes x0. Applying it to any based cubical representative proves every positive absolute group of $D^m$ trivial. Hence for k≥2 the exact segment $0\to\pi_k(D^m,S^{m-1})\xrightarrow{\partial}\pi_{k-1}(S^{m-1})\to0$ makes the boundary map an isomorphism. [F1, F2]

2.1 For $2\le k<m$, apply F3 with source sphere dimension k−1 and target dimension m−1, using F5, to make the target of this isomorphism zero. For k=m, F4 identifies it with Z. Restricting the oriented characteristic map $\mathrm{id}:D^m\to D^m$ gives the oriented boundary identity, whose degree is +1. Thus its relative class is the asserted generator; for example when m=2 the boundary sends that disk to the once-traversed oriented circle, with coefficient 1. [F2, F3, F4, F5, step 1.1]

3.1 For m≥2, F3 at source dimension zero makes $S^{m-1}$ path-connected. The low tail $0=\pi_1(D^m)\to\pi_1(D^m,S^{m-1})\to\pi_0(S^{m-1})$ then makes the relative pointed set a singleton by F2. For m=1, write the disk as [-1,1] and x0=1 (reflection gives the other case). A representative α starts at a∈{−1,1} and ends at 1. The interpolation $(1-s)\alpha(t)+s((1-t)a+t)$ is continuous, stays in the interval, and fixes both endpoints. Thus all representatives with the same a are equivalent. A relative homotopy cannot change a, since a continuous path into the discrete two-point set is constant. Representatives $t\mapsto1$ and $t\mapsto2t-1$ therefore give exactly two classes. [F1, F2, F3, step 1.1] ∎
