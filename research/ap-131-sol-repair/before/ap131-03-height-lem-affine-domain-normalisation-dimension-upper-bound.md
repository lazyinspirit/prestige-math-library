---
id: lem-affine-domain-normalisation-dimension-upper-bound
kind: lemma
title: "A finite affine extension of a polynomial ring has dimension at most the number of variables"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-dimension-of-a-finite-polynomial-ring-over-a-field, thm-incomparability-for-integral-extensions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §§18, 21"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.116: Dimension of finite type algebras over fields, reprise"
      url: "https://stacks.math.columbia.edu/tag/07NB"
    - title: "Melvin Hochster, Dimension theory and systems of parameters"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2026/04/Dim.pdf"
pipeline_run: null
---


## Statement

Let $k$ be a field, let $A$ be a finite-type $k$-domain, and suppose $A$ is module-finite over a polynomial subring $k[y_1,\ldots,y_d]$. Then $\dim A\le d$.

## Facts & Assumptions

**Given:** A field $k$, a finite-type $k$-domain $A$, and a module-finite inclusion $k[y_1,\ldots,y_d]\subseteq A$.

[L1] The polynomial ring $k[y_1,\ldots,y_d]$ has dimension $d$ ([[cor-dimension-of-a-finite-polynomial-ring-over-a-field]]).

[L2] In an integral extension, comparable primes with the same contraction are equal ([[thm-incomparability-for-integral-extensions]]).

## Proof

**Proof technique:** direct.

1.1 A module-finite extension is integral, so any strict prime chain in $A$ contracts to a strict prime chain in $k[y_1,\ldots,y_d]$ by [L2]. [L2, given]

2.1 The base ring has dimension $d$ by [L1], so no strict prime chain there has length greater than $d$. Therefore no strict prime chain in $A$ has length greater than $d$. [L1, step 1.1]

3.1 Hence $\dim A\le d$. [step 2.1] ∎
