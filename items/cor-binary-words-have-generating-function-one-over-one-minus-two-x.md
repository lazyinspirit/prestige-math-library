---
id: cor-binary-words-have-generating-function-one-over-one-minus-two-x
kind: corollary
title: "Binary words have generating function $1/(1-2x)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-neutral-and-atomic-classes, thm-sequence-construction-generating-function, thm-symbolic-sum-and-product-rules]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Robert Sedgewick and Kevin Wayne, Analysis of Algorithms, Section 3.9"
      url: "https://aofa.cs.princeton.edu/30gf/"
    - title: "Philippe Flajolet and Robert Sedgewick, Analytic Combinatorics"
      url: "https://ac.cs.princeton.edu/home/AC.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal{B}$ be the class of finite binary words, with size equal to word
length. Then

$$\operatorname{OGF}(\mathcal{B}) = \frac{1}{1-2x}.$$

## Facts & Assumptions

**Given:** Two disjoint copies $\mathcal{Z}_0$ and $\mathcal{Z}_1$ of the atomic class $\mathcal{Z}$, and the class $\mathcal{A} := \mathcal{Z}_0 + \mathcal{Z}_1$.

[L1] Disjoint union and Cartesian product translate to addition and multiplication of ordinary generating functions ([[thm-symbolic-sum-and-product-rules]]).

[L2] If $\mathcal{A}$ has no size-zero objects then $\operatorname{SEQ}(\mathcal{A})$ has generating function $1/(1-A(x))$ ([[thm-sequence-construction-generating-function]]).

## Proof

**Proof technique:** direct.

1.1 Each of $\mathcal{Z}_0$ and $\mathcal{Z}_1$ has generating function $x$, so $\mathcal{A}$ has generating function $x+x=2x$ by [L1]. A binary word is exactly a finite sequence of objects from $\mathcal{A}$. [L1]

2.1 The class $\mathcal{A}$ has no size-zero objects, so [L2] applies and gives $\operatorname{OGF}(\mathcal{B}) = \operatorname{OGF}(\operatorname{SEQ}(\mathcal{A})) = 1/(1-2x)$. [step 1.1, L2] ∎
