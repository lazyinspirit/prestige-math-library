---
id: thm-machine-acceptance-is-ce-complete
kind: theorem
title: "The Turing-machine acceptance problem is computably enumerable complete"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-ce-hardness-and-completeness, def-turing-machine-acceptance-problem, thm-machine-acceptance-is-recognizable, def-effective-encoding-of-turing-machines, lem-finite-tuples-admit-effective-prefix-free-encodings]
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
    - title: "Kevin Kelly, Many-one Reduction"
      url: "https://www.andrew.cmu.edu/user/kk3n/recursionclass/8reduction.html"
    - title: "MIT 6.045J / 18.400J, Lecture 9: Mapping Reducibility and Rice's Theorem"
      url: "https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/7aead2c728dd3d5a737d832811ef97e6_MIT6_045JS11_lec09.pdf"
---

## Statement

The language $A_{TM}$ of [[def-turing-machine-acceptance-problem]] is
c.e.-complete under computable many-one reductions.

## Facts & Assumptions

**Given:** The acceptance language $A_{TM}$.

[L1] A language is c.e.-complete exactly when it is recognizable and every recognizable language many-one reduces to it, by [[def-ce-hardness-and-completeness]].

[L2] The language $A_{TM}$ is recognizable, by [[thm-machine-acceptance-is-recognizable]].

[L3] A coded pair $\langle\ulcorner M\urcorner,\widehat w\rangle$ belongs to $A_{TM}$ exactly when the coded machine $M$ accepts the word $w$, by [[def-turing-machine-acceptance-problem]].

## Proof

**Proof technique:** direct.

1.1 By [L2], $A_{TM}$ is recognizable. To use [L1], it remains to prove c.e.-hardness. [L1, L2, given]

1.2 Let $L$ be any recognizable language, and choose a recognizer $R$ for $L$. Define $f(x):=\langle\ulcorner R\urcorner,\widehat x\rangle$. Because $R$ is fixed, encoding its chosen code and pairing it with the canonical word-code of $x$ is a total computable procedure. By [L3], $x\in L$ exactly when $R$ accepts $x$, and that happens exactly when $f(x)\in A_{TM}$. Thus $L\le_m A_{TM}$. [L3, given, construct]

2.1 Step 1.2 proves that every recognizable language many-one reduces to $A_{TM}$, and step 1.1 already recorded recognizability. Therefore [L1] gives that $A_{TM}$ is c.e.-complete. [L1, step 1.1, step 1.2] ∎
