---
id: cor-cyclotomic-extensions-are-abelian
kind: corollary
title: "The Galois group of a cyclotomic extension is abelian"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-the-cyclotomic-galois-group-embeds-in-the-unit-group-modulo-n, thm-integers-modulo-n-basic-algebra, def-unit-group-modulo-n-and-euler-totient, def-cyclotomic-extension, def-ring-characteristic]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Cyclotomic Extensions (expository blurb), Section 2"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cyclotomic.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Proposition 5.8"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Statement

Let $K$ be a field and $n\ge1$ with $\operatorname{char}K\nmid n$
([[def-ring-characteristic]]). Then $\operatorname{Gal}(K(\mu_n)/K)$
([[def-cyclotomic-extension]]) is abelian.

## Facts & Assumptions

**Given:** A field $K$ and $n\ge1$ with $\operatorname{char}K\nmid n$.

[L1] $K(\mu_n)/K$ is finite Galois and $\sigma\mapsto[a_\sigma]_n$ is an injective group homomorphism $\operatorname{Gal}(K(\mu_n)/K)\to(\mathbb Z/n)^{\times}$ ([[thm-the-cyclotomic-galois-group-embeds-in-the-unit-group-modulo-n]]).

[L2] For every $n\ge1$, $(\mathbb Z/n,\cdot,[1]_n)$ is a commutative monoid ([[thm-integers-modulo-n-basic-algebra]]), and $(\mathbb Z/n)^{\times}$ is the group of its invertible elements ([[def-unit-group-modulo-n-and-euler-totient]]).

## Proof

**Proof technique:** direct.

1.1 Multiplication on $\mathbb Z/n$ is commutative by [L2], so the group $(\mathbb Z/n)^{\times}$, whose operation is that multiplication restricted to the units, is abelian. [L2]

2.1 By [L1] the group $\operatorname{Gal}(K(\mu_n)/K)$ is isomorphic to its image in $(\mathbb Z/n)^{\times}$, a subgroup of an abelian group; a subgroup of an abelian group is abelian, and a group isomorphic to an abelian group is abelian, so $\operatorname{Gal}(K(\mu_n)/K)$ is abelian. [step 1.1, L1] ∎
