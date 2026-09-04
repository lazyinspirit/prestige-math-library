---
id: lem-height-in-quotient-is-relative-chain-length
kind: lemma
title: "Height in a quotient measures chains between two primes"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-height-equals-local-dimension, thm-prime-spectrum-of-a-quotient-bijection]
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
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §21"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.60: Dimension"
      url: "https://stacks.math.columbia.edu/tag/00KD"
pipeline_run: null
---


## Statement

Let $R$ be a commutative ring and let $\mathfrak p\subseteq\mathfrak q$ be prime ideals. Then the height of $\mathfrak q/\mathfrak p$ in $R/\mathfrak p$ is the supremum of the lengths of strict prime chains
$$ \mathfrak p=\mathfrak q_0\subsetneq\mathfrak q_1\subsetneq\cdots\subsetneq\mathfrak q_n=\mathfrak q $$
in $R$.

## Facts & Assumptions

**Given:** A commutative ring $R$ and prime ideals $\mathfrak p\subseteq\mathfrak q$.

[L1] Prime ideals of $R/\mathfrak p$ correspond exactly to the prime ideals of $R$ containing $\mathfrak p$, with strict inclusions preserved ([[thm-prime-spectrum-of-a-quotient-bijection]]).

[L2] Height is the supremum of the lengths of strict prime chains ending at the chosen prime ([[lem-height-equals-local-dimension]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], strict prime chains in $R/\mathfrak p$ ending at $\mathfrak q/\mathfrak p$ are in bijection with strict prime chains in $R$ beginning at $\mathfrak p$ and ending at $\mathfrak q$. Corresponding chains have the same length. [L1, given]

2.1 Applying [L2] to the prime $\mathfrak q/\mathfrak p$ of the quotient ring $R/\mathfrak p$, the height of $\mathfrak q/\mathfrak p$ is exactly the supremum of the lengths of those quotient chains. Step 1.1 translates that supremum into the displayed chains in $R$. [L2, step 1.1]

3.1 Therefore height in the quotient is the relative chain length from $\mathfrak p$ to $\mathfrak q$. [step 2.1] ∎
