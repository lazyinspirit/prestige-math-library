---
id: prop-deterministic-cfls-are-closed-under-complement
kind: proposition
title: "Deterministic context-free languages are closed under complement"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-deterministic-pda]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Dexter C. Kozen, Automata and Computability"
      url: "https://dokumen.pub/automata-and-computability-9781461218449-1461218446-q-2917785.html"
    - title: "Harry R. Lewis and Christos H. Papadimitriou, Elements of the Theory of Computation, Theorem 3.7.1"
      url: "https://studylib.net/doc/27620257/elements-of-theory-of-computation-2ed-lewis-papadimitriou"
---

## Statement

If $L\subseteq\Sigma^*$ is deterministic context-free, then
$$ \Sigma^*\setminus L $$
is also deterministic context-free.

## Facts & Assumptions

**Given:** A deterministic context-free language $L\subseteq\Sigma^*$.

[L1] By [[def-deterministic-pda]], some DPDA recognizes $L$ on marked inputs $w\dashv$.

[F1] The standard DPDA complementation construction first modifies a DPDA so that it reads the endmarker before accepting and has no dead-end or spurious-loop behavior, and then swaps the terminal accept/reject outcomes; the resulting DPDA recognizes exactly the marked complement. This is the construction proved in Kozen's Supplementary Lecture F and in Lewis-Papadimitriou Theorem 3.7.1.

## Proof

**Proof technique:** direct.

1.1 Choose a DPDA $M$ recognizing $L$ by [L1]. [L1, given, choose]

2.1 Apply the complementation construction from [F1] to $M$. It produces a DPDA $M^c$ over the same alphabet that accepts exactly the marked words $w\dashv$ not accepted by $M$. [F1, step 1.1, construct]

3.1 Because $M^c$ recognizes exactly the marked complement of the language of $M$, it recognizes $\Sigma^*\setminus L$. Therefore $\Sigma^*\setminus L$ is deterministic context-free. [L1, F1, step 2.1] ∎
