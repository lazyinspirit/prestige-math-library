---
id: cor-compositions-have-generating-function-x-over-one-minus-two-x
kind: corollary
title: "Positive-integer compositions have generating function $x/(1-2x)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-neutral-and-atomic-classes, thm-sequence-construction-generating-function, thm-symbolic-sum-and-product-rules]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
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

Let $\mathcal{C}$ be the class of compositions of positive integers, with size
equal to the sum of the parts. Then

$$\operatorname{OGF}(\mathcal{C}) = \frac{x}{1-2x}.$$

## Facts & Assumptions

**Given:** The atomic class $\mathcal{Z}$ and the constructions $\operatorname{SEQ}(\mathcal{Z})$ and $\operatorname{SEQ}_{\ge 1}(\mathcal{Z})$.

[L1] If $\mathcal{A}$ has no size-zero objects then $\operatorname{SEQ}(\mathcal{A})$ has generating function $1/(1-A(x))$, and $\operatorname{SEQ}_{\ge 1}(\mathcal{A})$ has generating function $A(x)/(1-A(x))$ ([[thm-sequence-construction-generating-function]]).

[L2] Disjoint union and Cartesian product translate to addition and multiplication of ordinary generating functions ([[thm-symbolic-sum-and-product-rules]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal{P} := \operatorname{SEQ}_{\ge 1}(\mathcal{Z})$. Since $\operatorname{OGF}(\mathcal{Z}) = x$, [L1] gives $\operatorname{OGF}(\mathcal{P}) = x/(1-x)$. An object of $\mathcal{P}$ is a nonempty sequence of atoms, so it records one positive integer, namely its length. [L1]

2.1 A composition is a nonempty sequence of such positive-size blocks, so $\mathcal{C} = \operatorname{SEQ}_{\ge 1}(\mathcal{P})$. Applying [L1] again gives $\operatorname{OGF}(\mathcal{C}) = \operatorname{OGF}(\mathcal{P})/(1-\operatorname{OGF}(\mathcal{P})) = (x/(1-x))/(1-x/(1-x)) = x/(1-2x)$. [step 1.1, L1, L2, algebra] ∎
