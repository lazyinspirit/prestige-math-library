---
id: thm-cfg-universality-is-undecidable
kind: theorem
title: "CFG universality is undecidable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-valid-computation-histories-are-decidable, def-halting-computation-and-divergence, def-language-generated-by-a-cfg, def-computable-many-one-reduction, thm-machine-acceptance-is-undecidable, thm-many-one-reductions-transfer-decidability-and-recognizability]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare, Lecture 10: Computation History Method"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/resources/lecture-10-computation-history-method/"
    - title: "John Watrous, Introduction to the Theory of Computing"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.pdf"
---

## Statement

The problem of deciding whether a context-free grammar generates all words over
its terminal alphabet is undecidable.

## Facts & Assumptions

**Given:** A coded deterministic one-tape Turing machine $M$ and an input word $w$.

[L1] $M$ accepts $w$ exactly when it has an accepting computation history on $w$, by [[def-halting-computation-and-divergence]].

[L2] For the fixed pair $(M,w)$, accepting computation histories admit an effective encoding, by [[prop-valid-computation-histories-are-decidable]].

[L3] The acceptance problem $A_{TM}$ is undecidable, by [[thm-machine-acceptance-is-undecidable]].

[L4] If $A\le_m B$ and $B$ is decidable, then $A$ is decidable, by [[thm-many-one-reductions-transfer-decidability-and-recognizability]].

## Proof

**Proof technique:** direct.

1.1 Choose the explicit finite configuration alphabet allowed by [L2], and encode a candidate history as $$C_0\#C_1^R\#C_2\#C_3^R\#\cdots,$$ alternating ordinary and reversed configuration words. Let $B_{M,w}$ be the set of words that are not accepting histories in this encoding. Malformed words and words with the wrong initial or accepting endpoint form regular languages. For an alleged adjacent pair $C_i,C_{i+1}$, a pushdown automaton nondeterministically chooses that pair, pushes the first configuration, and compares it with the oppositely oriented second configuration while allowing exactly one of the finitely many local windows prescribed by a transition of $M$. It accepts when no legal window explains the pair. Taking separate machines for the two parities and their finite union handles every adjacent pair. Thus histories containing an illegal transition form a context-free language, and so does their union with the two regular error languages. The construction is effective in the finite transition table, hence produces a CFG $G_{M,w}$ with $L(G_{M,w})=B_{M,w}$. [L1, L2, given, construct]

2.1 By the definition of $B_{M,w}$, the grammar $G_{M,w}$ is universal exactly when there is no accepting computation history of $M$ on $w$. Using [L1], this is equivalent to $$ L(G_{M,w})=\Sigma^* \iff \langle M,w\rangle\notin A_{TM}. $$ [L1, step 1.1]

3.1 The construction of $G_{M,w}$ is effective by step 1.1. If CFG universality were decidable, then step 2.1 would decide $\overline{A_{TM}}$, and hence decide $A_{TM}$ by complementing the answer. That contradicts [L3]. [L3, L4, step 2.1, contradiction]

4.1 Therefore CFG universality is undecidable. [step 3.1, discharge-contradiction: a universality decider would decide $A_{TM}$] ∎
