---
id: cor-quotient-dimension-does-not-increase
kind: corollary
title: "Passing to a quotient does not increase Krull dimension"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-krull-dimension-of-a-ring, thm-prime-spectrum-of-a-quotient-bijection]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §§18, 21"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "Melvin Hochster, Dimension theory and systems of parameters"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2026/04/Dim.pdf"
pipeline_run: null
---


## Statement

Let $R$ be a nonzero commutative ring and let $I\subsetneq R$ be a proper ideal. Then
$$
\dim(R/I)\le \dim R.
$$

## Facts & Assumptions

**Given:** A nonzero commutative ring $R$ and a proper ideal $I\subsetneq R$.

[L1] Prime ideals of $R/I$ correspond to prime ideals of $R$ containing $I$, with strict inclusions preserved ([[thm-prime-spectrum-of-a-quotient-bijection]]).

[L2] Krull dimension is the supremum of the lengths of strict prime chains ([[def-krull-dimension-of-a-ring]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], every strict prime chain in $R/I$ lifts to a strict prime chain in $R$ of the same length. [L1, given]

2.1 Therefore [L2] gives $\dim(R/I)\le\dim R$. [L2, step 1.1]

3.1 So passing to a quotient never increases Krull dimension. [step 2.1] ∎
