---
id: lem-affine-domain-normalisation-dimension-lower-bound
kind: lemma
title: "A finite affine extension of a polynomial ring has dimension at least the number of variables"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-dimension-of-a-finite-polynomial-ring-over-a-field, cor-integral-extension-lifts-finite-prime-chains]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
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

Let $k$ be a field, let $A$ be a finite-type $k$-domain, and suppose $A$ is module-finite over a polynomial subring $k[y_1,\ldots,y_d]$. Then $\dim A\ge d$.

## Facts & Assumptions

**Given:** A field $k$, a finite-type $k$-domain $A$, and a module-finite inclusion $k[y_1,\ldots,y_d]\subseteq A$.

[L1] The coordinate-prime chain in $k[y_1,\ldots,y_d]$ has length $d$ ([[cor-dimension-of-a-finite-polynomial-ring-over-a-field]]).

[L2] Finite prime chains lift through integral extensions once the first prime upstairs is chosen ([[cor-integral-extension-lifts-finite-prime-chains]]).

## Proof

**Proof technique:** direct.

1.1 The coordinate-prime chain $(0)\subsetneq(y_1)\subsetneq\cdots\subsetneq(y_1,\ldots,y_d)$ in $k[y_1,\ldots,y_d]$ has length $d$ by [L1]. [L1, given]

2.1 Because the extension is module-finite and hence integral, [L2] lifts that chain to a strict prime chain in $A$ of the same length $d$. [L2, step 1.1]

3.1 Therefore $\dim A\ge d$. [step 2.1] ∎
