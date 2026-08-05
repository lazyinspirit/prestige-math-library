---
id: lem-character-is-well-defined
kind: lemma
title: "Under choice, $\\chi(x,X)$ and $\\chi(X)$ are well-defined cardinals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-weight-density-and-character, thm-well-ordering-theorem, lem-cardinality-of-a-well-orderable-set, def-cardinal, lem-ordinal-trichotomy, lem-ordinal-basics, thm-schroder-bernstein]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "D. H. Fremlin, Measure Theory, Chapter 5A"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/chap5a.pdf"
pipeline_run: null
---

## Statement

Assuming choice, every $\chi(x,X)$ and the raw supremum $\chi(X)$ are well-defined cardinals.

## Facts & Assumptions

**Given:** A space $X$, a point $x\in X$, and the definitions in [[def-weight-density-and-character]].

[L1] Under choice every set can be well ordered and therefore has a cardinality ([[thm-well-ordering-theorem]], [[lem-cardinality-of-a-well-orderable-set]]).

[L2] Every nonempty set of ordinals, and hence every nonempty set of cardinals, has a least member ([[lem-ordinal-trichotomy]]).

[L3] Cardinals are initial ordinals, a set of ordinals has union as its least upper bound, and mutual injections give a bijection ([[def-cardinal]], [[lem-ordinal-basics]], [[thm-schroder-bernstein]]).

## Proof

**Proof technique:** direct.

1.1 The neighbourhood filter at $x$ is a local base, so local-base cardinalities form a nonempty set. [given]

2.1 The candidate cardinalities are ordinals, so their nonempty set has a least member, namely $\chi(x,X)$. [step 1.1, L1, L2]

3.1 Let $K=\{\chi(x,X):x\in X\}$ and $\delta=\bigcup K$. This is an ordinal and the least ordinal upper bound of $K$ by [L3]. It is a cardinal: if $\beta<\delta$ and $\beta\approx\delta$, choose $\kappa\in K$ with $\beta<\kappa\le\delta$. Then $\beta\preceq\kappa\preceq\delta\approx\beta$, so [L3] gives $\beta\approx\kappa$, contradicting that $\kappa$ is a cardinal. Thus $\delta$ is the cardinal supremum $\chi(X)$. [L3] ∎
