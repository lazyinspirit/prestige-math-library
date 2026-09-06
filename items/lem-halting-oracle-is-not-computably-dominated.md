---
id: lem-halting-oracle-is-not-computably-dominated
kind: lemma
title: "The halting oracle is not computably dominated"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-computably-dominated-oracle, def-turing-jump, thm-kleenes-second-recursion-theorem]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, Example 2.3 and §7.5"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Statement

The ordinary halting oracle $0'=\varnothing'$ is not computably dominated.

## Facts & Assumptions

**Given:** the halting oracle $0'$ and an arbitrary total computable candidate
dominator $g$.

## Proof

**Proof technique:** direct.

1.1 Using $0'$, define $h(e)$ to be $0$ if program $e$ does not halt on $e$, and otherwise its least halting stage on $e$. This is total $0'$-computable. [given, construct]

1.2 The recursion theorem supplies an index $e$ for a program which on its own input computes $g(e)$ and then performs $g(e)+1$ dummy steps before halting. Hence $h(e)\ge g(e)+1$. [given, construct]

2.1 Thus arbitrary computable $g$ fails to dominate $h$. No computable function dominates every total $0'$-computable function, so $0'$ is not computably dominated. [step 1.1, step 1.2] ∎
