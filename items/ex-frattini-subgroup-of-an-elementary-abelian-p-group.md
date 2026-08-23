---
id: ex-frattini-subgroup-of-an-elementary-abelian-p-group
kind: example
title: "The Frattini subgroup of $(\\mathbb Z/p)^n$ is trivial"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-frattini-free-finite-p-groups-are-elementary-abelian, def-generator-rank-of-a-finite-p-group, def-fp-basis-of-an-elementary-abelian-p-group, thm-z-mod-p-is-a-field, thm-standard-representatives-modulo-n, thm-product-rule]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups, Definition 2.6"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "K. Conrad, Generating Sets, §6"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/genset.pdf"
pipeline_run: null
---

## Example

For every prime $p$ and $n\in\mathbb N$, $\Phi((\mathbb Z/p)^n)=1$ and the generator rank is $n$.

## Facts & Assumptions

**Given:** A prime $p$ and a natural number $n$.

[L1] A finite $p$-group has trivial Frattini subgroup if and only if it is elementary abelian ([[cor-frattini-free-finite-p-groups-are-elementary-abelian]]).

[F1] A basis of an elementary abelian $p$-group is an independent spanning subset for its canonical $\mathbb F_p$-linear structure ([[def-fp-basis-of-an-elementary-abelian-p-group]]).

[L2] The quotient $\mathbb Z/p$ has $p$ elements, is a field, and a finite Cartesian product has the product cardinality ([[thm-standard-representatives-modulo-n]], [[thm-z-mod-p-is-a-field]], [[thm-product-rule]]).

[F2] The generator rank $d(P)$ is the common size of a basis of $P/\Phi(P)$ ([[def-generator-rank-of-a-finite-p-group]]).

## Verification

**Proof technique:** direct.

1.1 Componentwise addition makes $(\mathbb Z/p)^n$ a finite abelian group of order $p^n$ by [L2], and every nonzero element has order $p$. It is therefore elementary abelian and [L1] gives $\Phi((\mathbb Z/p)^n)=1$. At $n=0$, the empty product is the trivial group and the same conclusion holds. [given, L1, L2, algebra]

2.1 The standard coordinate vectors have unique coordinates, so they form a basis by [F1]. There are $n$ of them, hence [F2] gives $d((\mathbb Z/p)^n)=n$, including the empty basis at $n=0$. [step 1.1, F1, F2, L2, algebra] ∎
