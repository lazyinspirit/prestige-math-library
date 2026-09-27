---
id: fs-every-group-has-a-universal-central-extension
kind: false-statement
title: "Every group has a universal central extension"
status: published
origin: pipeline
deps: [def-universal-central-extension]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Clara Löh, Group Cohomology"
      url: https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-05-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Every group has a universal central extension.

## Facts & Assumptions

**Given:** Take the nontrivial abelian group $C_2$.

## Refutation

**Proof technique:** contradiction.

1.1 Suppose a universal central extension $u:U\twoheadrightarrow C_2$ exists. The split extension $C_2\times C_2\to C_2$ is central. There are two maps over $C_2$ from $U$ to it: $x\mapsto(u(x),0)$ and $x\mapsto(u(x),u(x))$. They are distinct because $u$ is surjective and $C_2$ is nontrivial. [given, assume-contra, algebra]

2.1 This contradicts the uniqueness required of a universal central extension. Thus $C_2$ is a counterexample to the stated assertion, independently of any choice premise. [step 1.1, discharge-contradiction] ∎
