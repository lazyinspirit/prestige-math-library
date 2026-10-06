---
id: lem-relative-pontryagin-square-equals-mixed-evaluation
kind: lemma
title: "The relative square equals the mixed evaluation"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-relative-cup-product, def-relative-singular-cochain-complex, lem-relative-kronecker-evaluation-is-well-defined-and-natural, prop-relative-cup-products-are-natural-and-compatible-with-connectors]
justified_by: []
aliases: []
landmark: false
dependency_level: 1
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "John Milnor, On Manifolds Homeomorphic to the 7-Sphere, Annals of Mathematics 64 (1956), 399-405"
      url: "https://sites.math.rutgers.edu/~feehan/teaching/math866/milnor7sphere.pdf"
      locator: "printed pp. 400-401, the relative square and the evaluation on [W,M]"
    - title: "Allen Hatcher, Algebraic Topology, Cambridge University Press 2002 (complete book)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "relative cup products and the quotient by the sum of two subcomplexes, printed pp. 206-209"
---

## Statement

Let $W$ be a compact oriented eight-manifold with boundary $M$, let
$j:H^4(W,M;\mathbb Z)\to H^4(W;\mathbb Z)$ be the forgetful map, and let
$a\in H^4(W,M;\mathbb Z)$. Then
$$\langle a\smile a,[W,M]\rangle=\langle a\smile j(a),[W,M]\rangle,$$
where the left product uses two relative factors and the right product uses one
relative and one absolute factor, and the evaluations are relative Kronecker
evaluations.

## Facts & Assumptions

**Given:** A compact oriented eight-manifold $W$ with boundary $M$, an element $a\in H^4(W,M;\mathbb Z)$, and the maps $j:H^4(W,M;\mathbb Z)\to H^4(W;\mathbb Z)$.

[L1] Relative singular cochains vanish on simplices in $M$ and form the complex whose cohomology is $H^*(W,M;\mathbb Z)$; the forgetful map $j$ is induced by the quotient $C_*(W;\mathbb Z)\to C_*(W;\mathbb Z)/C_*(M;\mathbb Z)$, so a relative cocycle representing $a$ also represents $j(a)$ as an absolute cocycle ([[def-relative-singular-cochain-complex]]).

[L2] The relative cup product is built from the front/back cochain product, which vanishes on $N=C_*(A;R)+C_*(B;R)$, followed by the comparison $q^*:H^*(X,U;R)\to H^*(\operatorname{Hom}_R(C_*(X;R)/N,R))$; when $A=B=M$ the comparison is the identity because $N=C_*(M;R)=C_*(U;R)$, and when $A=M$, $B=\varnothing$ it is again the identity because $N=C_*(M;R)=C_*(U;R)$ ([[def-relative-cup-product]]).

[L3] The relative products are natural and compatible with the connecting maps ([[prop-relative-cup-products-are-natural-and-compatible-with-connectors]]).

[L4] Relative Kronecker evaluation is well defined and biadditive, so equal relative cohomology classes have equal evaluations on $[W,M]$ ([[lem-relative-kronecker-evaluation-is-well-defined-and-natural]]).

## Proof

**Proof technique:** direct.

1.1 Choose a relative cocycle $\alpha$ representing $a$; by [L1] the same cochain $\alpha$, viewed as an absolute cochain, represents $j(a)$, and $\alpha$ vanishes on every simplex in $M$. [L1, given]

2.1 For the product of two relative factors take $A=B=M$; the union is $M$, each copy is open in it, and $C_*(M)+C_*(M)=C_*(M)$, so the comparison in [L2] is the identity and $a\smile a$ is the class of the cochain $\alpha\smile\alpha$ in $C^8(W,M;\mathbb Z)$. [step 1.1, L2]

3.1 For the mixed product take $A=M$ and $B=\varnothing$; then $U=M$ and $N=C_*(M;\mathbb Z)+0=C_*(M;\mathbb Z)=C_*(U;\mathbb Z)$, so the comparison is again the identity and $a\smile j(a)$ is represented by the very same cochain $\alpha\smile\alpha$, which vanishes on $C_*(M)$ because its first factor does. [step 2.1, L2, L3]

4.1 The two classes therefore have the same relative cochain representative $\alpha\smile\alpha$, so by [L4] their evaluations on the relative fundamental class agree: $\langle a\smile a,[W,M]\rangle=\langle a\smile j(a),[W,M]\rangle$, which is the assertion. [step 3.1, L4] ∎
