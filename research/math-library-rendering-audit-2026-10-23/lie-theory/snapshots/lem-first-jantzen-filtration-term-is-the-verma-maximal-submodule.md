---
id: lem-first-jantzen-filtration-term-is-the-verma-maximal-submodule
kind: lemma
title: "The first Jantzen filtration term is the maximal Verma submodule"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-jantzen-deformation-and-filtration-of-a-verma-module, prop-the-shapovalov-radical-is-the-maximal-submodule]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, §20.5"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
---

## Statement

The first Jantzen term satisfies $M^1(\lambda)=J(\lambda)$, the maximal proper submodule of $M(\lambda)$.

## Facts & Assumptions

**Given:** The filtration [[def-jantzen-deformation-and-filtration-of-a-verma-module]] and the radical identification [[prop-the-shapovalov-radical-is-the-maximal-submodule]].

## Proof

**Proof technique:** direct.

1.1 Reducing the condition $S_t(v)\in tM_t(\lambda)^\vee$ modulo $t$ says exactly that the specialized Shapovalov form pairs $\bar v$ with every vector as zero. Thus $M^1(\lambda)$ is its radical. [given]

2.1 The radical is $J(\lambda)$ by the radical theorem, so the two submodules agree. [step 1.1] ∎
