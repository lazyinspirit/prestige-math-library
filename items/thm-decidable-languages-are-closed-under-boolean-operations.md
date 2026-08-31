---
id: thm-decidable-languages-are-closed-under-boolean-operations
kind: theorem
title: "Decidable languages are closed under the Boolean operations"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-decidable-and-recognizable-language, def-language-boolean-operations]
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
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 18: Further discussion of computability"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.18.pdf"
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Statement

If $L,K\subseteq\Sigma^*$ are decidable, then their complement, union,
intersection, difference, and symmetric difference are decidable.

## Facts & Assumptions

**Given:** Decidable languages $L,K\subseteq\Sigma^*$.

[L1] By [[def-decidable-and-recognizable-language]], a decider halts on every input with the correct membership answer.

[L2] By [[def-language-boolean-operations]], complements and differences are taken inside the fixed ambient $\Sigma^*$.

[A1] The set identities
$$ L\setminus K=L\cap K^c,\qquad L\triangle K=(L\setminus K)\cup(K\setminus L) $$
hold for all subsets of one set.

## Proof

**Proof technique:** direct.

1.1 If $M_L$ decides $L$, then flipping its final yes-or-no answer gives a halting decider for $L^c$. If $M_L$ and $M_K$ decide $L$ and $K$, run both and combine their two halting answers by the ordinary Boolean truth tables to decide $L\cup K$ and $L\cap K$. [L1, L2, given]

2.1 By [A1], the same deciders decide $L\setminus K$ as $L\cap K^c$ and decide $L\triangle K$ as $(L\setminus K)\cup(K\setminus L)$. Because each constituent operation from step 1.1 preserves halting, these languages are decidable as well. [A1, step 1.1]

3.1 Therefore decidable languages are closed under all five stated Boolean operations. [step 1.1, step 2.1] ∎
