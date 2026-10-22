---
id: lem-boundary-compressible-annulus-is-boundary-parallel
kind: lemma
title: "Boundary-compressible annuli with torus boundary are boundary-parallel"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-incompressibility-seifert-fibration-and-jsj-system
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Lemma 1.10 and its proof, printed pp.15–16"
    - title: "Walter Neumann and Gadde Swarup, Canonical decompositions of 3-manifolds"
      url: "https://arxiv.org/pdf/math/9712227"
      locator: "§§2–3, incompressible annuli and torus-boundary decomposition"
---

## Statement

Let $M$ be a compact connected orientable irreducible $3$-manifold whose boundary components are tori. Let $A\subset M$ be a connected properly embedded incompressible annulus with $\partial A\subset\partial M$. If $A$ is boundary-compressible, then $A$ is boundary-parallel.

## Statement references

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*, Lemma 1.10](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

[Walter Neumann and Gadde Swarup, *Canonical decompositions of 3-manifolds*](https://arxiv.org/pdf/math/9712227)

## Facts & Assumptions

**Given:** A compact connected orientable irreducible $3$-manifold $M$ with torus boundary, an incompressible proper annulus $A$, and a boundary-compressing disk $D$.

[F1] [[def-incompressibility-seifert-fibration-and-jsj-system]] defines incompressibility, boundary-compressibility, boundary-parallelity, and irreducibility.

## Proof

1.1 Let $\alpha=D\cap A$ and $\beta=D\cap\partial M$. Essentiality of the arc $\alpha$ in the annulus means that it joins the two distinct boundary circles of $A$. Each circle of $\partial A$ is essential on its boundary torus: if one bounded a disk in that torus, pushing the disk slightly into a boundary collar would give a compressing disk for $A$. [given, F1]

1.2 On a boundary torus containing one circle of $\partial A$, its complement is an annulus; if it contains both parallel circles, the complement is two annuli. Thus $\beta$ lies in an annular component $A_0$ of the torus cut along $\partial A$. If $\beta$ were boundary-parallel in $A_0$, adjoining the disk it cuts off to $D$ would give a compressing disk for $A$. Hence $\beta$ spans $A_0$. Its endpoints therefore lie on distinct circles of $\partial A$. [given, F1, step 1.1]

2.1 The annulus $A$ and the spanning annulus in $\partial M$ form an embedded torus $S$. The curve $\alpha\cup\beta$ crosses the core of $A$ once modulo $2$, so it is nontrivial in $H_1(S;\mathbb Z_2)$ and cannot bound a disk. Thus $D$ compresses $S$ to an embedded sphere. [given, step 1.2, construct]

2.2 Irreducibility gives a $3$-ball bounded by the compressed sphere. Reversing the compression attaches one $1$-handle to that ball, producing a solid torus bounded by $S$. In its boundary, $A$ and the annulus in $\partial M$ are complementary annuli. A collar of the latter in this solid torus is a product between the two annuli; rounding the disk-surgery corner gives a product $A\times[0,1]$ in $M$ with one end in $\partial M$. Therefore $A$ is boundary-parallel. [F1, step 2.1, construct] ∎
