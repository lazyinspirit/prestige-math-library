---
id: ex-a-stem-extension-that-is-not-universal
kind: example
title: "A stem extension that is not universal"
status: published
origin: pipeline
deps: [def-central-and-stem-extensions, def-universal-central-extension]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Clara Löh, Group Cohomology"
      url: https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf
proof_strategy: direct
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

## Example

The central extension C2→D8→C2×C2 is stem but not universal because its base is not perfect.

## Verification

**Given:** The center and commutator subgroup of $D_8$ are both $\langle r^2\rangle$.

1.1 Thus $C_2\to D_8\to C_2\times C_2$ is stem. [given]

2.1 Let $V=C_2\times C_2$ be its base. If the displayed stem extension $u:D_8\twoheadrightarrow V$ were universal, the maps $x\mapsto(u(x),0)$ and $x\mapsto(u(x),u(x))$ from $D_8$ to the split central extension $V\times V\to V$ would have to be equal. They are distinct because $u$ is surjective and $V\ne0$. Thus this stem extension is not universal, using only the choice-free uniqueness condition in the definition. [step 1.1, algebra] ∎
