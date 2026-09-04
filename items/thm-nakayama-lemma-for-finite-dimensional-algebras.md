---
id: thm-nakayama-lemma-for-finite-dimensional-algebras
kind: theorem
title: "Over a finite-dimensional algebra, a module annihilated modulo its radical is zero, and generators lift from the head"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-module-radical-is-jacobson-radical-times-the-module, thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory (23 Feb 2016 draft)"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Statement

Let $A$ be a finite-dimensional algebra with Jacobson radical $J$, and let $M$
be a finite-dimensional left $A$-module.

1. If $M=JM$, then $M=0$.
2. If elements $m_1,\ldots,m_r\in M$ span $M/JM$, then they generate $M$.

## Facts & Assumptions

**Given:** A finite-dimensional algebra $A$ with Jacobson radical $J$ and a finite-dimensional left $A$-module $M$.

[L1] The module radical equals $JM$
([[thm-module-radical-is-jacobson-radical-times-the-module]]).

[L2] The algebra radical $J$ is nilpotent
([[thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple]]).

## Proof

**Proof technique:** direct.

1.1 If $M=JM$, then iterating the equality gives $M=J^nM$ for every $n\ge1$. Choose $n$ with $J^n=0$ from [L2]. Then $M=J^nM=0$. [L2, given, algebra]

2.1 Let $N:=Am_1+\cdots+Am_r$. By hypothesis, the images of the $m_i$ span $M/JM$, so $M=N+JM$. Hence $M/N=J(M/N)$. Applying part 1 to the module $M/N$ and using [L1], we obtain $M/N=0$. Therefore $M=N$, so $m_1,\ldots,m_r$ generate $M$. [L1, step 1.1, given, algebra]

3.1 Steps 1.1 and 2.1 are exactly the two asserted conclusions. [step 1.1, step 2.1] ∎
