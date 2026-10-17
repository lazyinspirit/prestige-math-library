---
id: thm-dyadic-brownian-bridge-tree-increment-laws
kind: theorem
title: Exact increment laws in the dyadic Brownian bridge tree
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - alg-dyadic-brownian-bridge-increment-tree
  - def-multivariate-normal-law
  - lem-characteristic-function-of-a-multivariate-normal-law
  - lem-characteristic-functions-under-affine-maps-and-independent-sums
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Mike Giles, Monte Carlo Methods, Module 4: Monte Carlo path simulation, Brownian bridge, pp. 27–30"
      url: "https://people.maths.ox.ac.uk/~gilesm/mc/module_4/module_4_1.pdf"
---

## Statement

Assume AC. Fix $m\ge1$, $h>0$, and a finite tree depth $r\ge0$. Take a root
increment $D_\varnothing\sim N_m(0,hI_m)$. At each internal node $v$ of
length $\ell_v=h/2^{|v|}$, use the split in
[[alg-dyadic-brownian-bridge-increment-tree]] with a fresh
$Z_v\sim N_m(0,(\ell_v/4)I_m)$ independent of the root and of all other
innovations. Then the $2^r$ increments at depth $r$ are mutually independent
and each has law $N_m(0,(h/2^r)I_m)$. At every internal node its increment is
exactly the sum of its two children. The independence claim is unconditional;
conditional on a fixed parent, the two children have covariance
$-(\ell_v/4)I_m$ and are not independent.

## Facts & Assumptions

**Given:** AC, a finite integer $m\ge1$, a duration $h>0$, finite depth $r$, and the root increment and fresh independent innovations in the Statement.

[F1] At a node of length $\ell$ with parent $D$, draw independent $Z\sim N_m(0,(\ell/4)I_m)$ and set the children to $D/2+Z$ and $D/2-Z$; each split uses a fresh innovation. [[alg-dyadic-brownian-bridge-increment-tree]]

[F2] A multivariate normal law has its specified mean and covariance and is realizable as an affine image of independent standard normals. Gaussian characteristic functions multiply under independent sums, and a joint Gaussian with block-diagonal covariance has a factored characteristic function. [[def-multivariate-normal-law]] [[lem-characteristic-function-of-a-multivariate-normal-law]] [[lem-characteristic-functions-under-affine-maps-and-independent-sums]]

[A1] AC is inherited from the multivariate-normal and Brownian interfaces; the covariance and induction arguments below make no additional selection. [[def-axiom-of-choice]]

## Proof

1.1 Let $D\sim N_m(0,\ell I_m)$ and let $Z\sim N_m(0,(\ell/4)I_m)$ be independent. Put $L=D/2+Z$ and $R=D/2-Z$. The vector $(L,R)$ is a linear image of the independent jointly Gaussian pair $(D,Z)$, so it is jointly Gaussian. Its means are zero, and direct covariance expansion gives $\operatorname{Cov}(L)=\operatorname{Cov}(R)=\tfrac14\ell I_m+\tfrac14\ell I_m=\tfrac\ell2I_m,$ $\operatorname{Cov}(L,R)=\tfrac14\ell I_m-\tfrac14\ell I_m=0.$ Also $L+R=D$ identically. [F1, F2, given, algebra]

2.1 The joint Gaussian characteristic function of $(L,R)$ from [F2] has zero cross-covariance blocks by step 1.1, so it factors into the product of the characteristic functions of $N_m(0,(\ell/2)I_m)$ in the two blocks. Uniqueness of the multivariate normal law in [F2] therefore gives independent children with those marginal laws. If one conditions on $D$, the common $D/2$ term is fixed and the remaining terms are $Z$ and $-Z$, so their conditional cross-covariance is $-\operatorname{Cov}(Z)=-(\ell/4)I_m$. [F2, step 1.1, algebra]

3.1 At depth $0$ the assertion is the root law. Suppose the increments at depth $k$ are mutually independent with law $N_m(0,(h/2^k)I_m)$. The fresh innovations at depth $k$ are mutually independent and independent of the entire parent family by the input construction. Therefore the pairs consisting of each parent and its own innovation are mutually independent across the depth-$k$ nodes. For each such pair, step 2.1 gives the unconditional joint law of its two children: they are independent $N_m(0,(h/2^{k+1})I_m)$ vectors. Since child pairs from distinct parents are measurable functions of disjoint independent parent-innovation pairs, those pairs are mutually independent as well. Hence all depth-$(k+1)$ increments are mutually independent with the claimed law. [F1, F2, step 2.1, given, construct]

4.1 Finite induction from step 3.1 proves the assertion for every fixed $r$. The case $r=0$ is the root law; every interval has positive length by $h>0$, so zero-length nodes are excluded. Sum consistency holds at each node by step 1.1. The result concerns each fixed finite tree, not a claim that an endpoint-selected random traversal is predictable. AC enters only through [A1]. [A1, F1, step 1.1, step 3.1, given] ∎
