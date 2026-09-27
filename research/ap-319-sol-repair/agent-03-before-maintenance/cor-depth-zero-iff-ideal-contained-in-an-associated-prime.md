---
id: cor-depth-zero-iff-ideal-contained-in-an-associated-prime
title: Depth zero and associated primes
kind: corollary
status: published
origin: pipeline
deps: [def-depth-with-respect-to-an-ideal, lem-regular-element-exists-by-prime-avoidance]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---
## Statement

Let $R$ be Noetherian, let $M\ne0$ be a finite $R$-module, and let $I$ be an
ideal with $IM\ne M$. Then
$$\operatorname{depth}_I(M)=0 \quad\Longleftrightarrow\quad I\subseteq\mathfrak p\text{ for some }\mathfrak p\in\operatorname{Ass}_R(M).$$

## Facts & Assumptions

**Given:** The ring, module, and ideal in the statement.

## Proof

**Proof technique:** direct.

1.1 Because $IM\ne M$, depth zero means precisely that the empty regular sequence cannot be extended by an $M$-regular element of $I$. [given]

2.1 The regular-element lemma identifies failure of such an extension with $I$ being contained in an associated prime of $M$. This proves the biconditional. [step 1.1] ∎
