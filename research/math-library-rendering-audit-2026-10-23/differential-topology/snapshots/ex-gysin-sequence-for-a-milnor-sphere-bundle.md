---
id: ex-gysin-sequence-for-a-milnor-sphere-bundle
kind: example
title: "The Gysin sequence for $M_{2,-1}$"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-h-plus-j-equals-plus-or-minus-one-gives-a-homology-seven-sphere, lem-euler-and-first-pontryagin-classes-of-xi-h-j, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
dependency_level: 8
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "John Milnor, On Manifolds Homeomorphic to the 7-Sphere, Annals of Mathematics 64 (1956), 399-405"
      url: "https://sites.math.rutgers.edu/~feehan/teaching/math866/milnor7sphere.pdf"
      locator: "printed pp. 402-403, the bundle construction and Theorem 3; the local example supplies the Gysin calculation for (2,-1)"
    - title: "Allen Hatcher, Algebraic Topology, Cambridge University Press 2002 (complete book)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Section 4.D, the Gysin sequence, printed pp. 438-442"
---

## Example

Assume the Axiom of Choice. For $(h,j)=(2,-1)$ the Euler class of
$\xi_{2,-1}$ is $e=(2-1)u=u$ by the class formula
([[lem-euler-and-first-pontryagin-classes-of-xi-h-j]]). The integral Gysin
sequence of the oriented $S^3$-bundle $S^3\to M_{2,-1}\to S^4$ is
$$\cdots\to H^{k-4}(S^4;\mathbb Z)\xrightarrow{\smile u}H^k(S^4;\mathbb Z)\to H^k(M_{2,-1};\mathbb Z)\to H^{k-3}(S^4;\mathbb Z)\to\cdots,$$
and outside degrees $0$ and $4$ the base cohomology vanishes. The only
nonempty multiplication map is $H^0(S^4)=\mathbb Z\xrightarrow{\smile u}H^4(S^4)=\mathbb Z$,
multiplication by $1$, which is an isomorphism; exactness therefore forces
$H^0(M_{2,-1};\mathbb Z)=H^7(M_{2,-1};\mathbb Z)=\mathbb Z$ and
$H^k(M_{2,-1};\mathbb Z)=0$ for $1\le k\le6$. Transferring to homology by the
universal coefficient theorem and finite generation gives
$H_k(M_{2,-1};\mathbb Z)=H_k(S^7;\mathbb Z)$ for every $k$, which is exactly
the statement verified by the homology-seven-sphere theorem
([[thm-h-plus-j-equals-plus-or-minus-one-gives-a-homology-seven-sphere]]).
