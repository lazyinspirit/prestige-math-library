---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-a-stem-extension-that-is-not-universal.json
  precheck: pass
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

---

## Example

The central extension $C_2\to D_8\to C_2\times C_2$ is stem but not universal because its base is not perfect.

## Verification

**Given:** The center and commutator subgroup of $D_8$ are both $\langle r^2\rangle$.

1.1 Thus $C_2\to D_8\to C_2\times C_2$ is stem. [given]

2.1 Let $V=C_2\times C_2$ be its base. If the displayed stem extension $u:D_8\twoheadrightarrow V$ were universal, the maps $x\mapsto(u(x),0)$ and $x\mapsto(u(x),u(x))$ from $D_8$ to the split central extension $V\times V\to V$ would have to be equal. They are distinct because $u$ is surjective and $V\ne0$. Thus this stem extension is not universal, using only the choice-free uniqueness condition in the definition. [step 1.1, algebra] ∎
