---
id: cor-dimension-of-a-quotient-as-chains-above-an-ideal
kind: corollary
title: "Dimension of a quotient via chains above an ideal"
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
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Definition 3.14"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.60: Dimension of rings"
      url: "https://stacks.math.columbia.edu/tag/00KD"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring and let $I\trianglelefteq R$ be an ideal. Assume $R/I$ is nonzero. Then $\dim(R/I)=\sup\{n\ge 0:\mathfrak p_0\subsetneq\cdots\subsetneq\mathfrak p_n\text{ is a strict chain of prime ideals of }R\text{ all containing }I\}$. The supremum is allowed to be infinite.

## Facts & Assumptions

**Given:** A commutative ring $R$, an ideal $I\trianglelefteq R$, and a nonzero quotient ring $R/I$.

[L1] Krull dimension is the supremum of lengths of strict chains of prime ideals ([[def-krull-dimension-of-a-ring]]).

[L2] Prime ideals of $R/I$ correspond exactly to prime ideals of $R$ containing $I$, with strict inclusions preserved ([[thm-prime-spectrum-of-a-quotient-bijection]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], strict chains of prime ideals in $R/I$ are in bijection with strict chains of prime ideals of $R$ whose every term contains $I$. Corresponding chains have the same length. [L2, given]

2.1 Since $R/I$ is nonzero, [L1] applies to it. Thus $\dim(R/I)$ is the supremum of the lengths of the strict prime chains in $R/I$, and step 1.1 identifies that supremum with the one displayed in the statement. [L1, step 1.1]

3.1 Therefore dimension of the quotient is computed by prime chains of $R$ lying above $I$. [step 2.1] ∎
