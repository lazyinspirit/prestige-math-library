---
id: fs-every-subnormal-series-is-a-normal-series
kind: false-statement
title: "Every subnormal series is a normal series"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-subnormal-normal-series-refinement-and-equivalence, lem-conjugating-a-cycle-relabels-its-entries]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Subgroup Series I"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/subgpseries1.pdf"
    - title: "K. Igusa, Notes on Jordan-Hölder, section 5"
      url: "https://people.brandeis.edu/~igusa/Math131b/JH.pdf"
pipeline_run: null
---

## Statement

> **False.** Every subnormal series is a normal series.

## Facts & Assumptions

**Given:** In $S_4$, let $V_4=\{1,(12)(34),(13)(24),(14)(23)\}$ and $K=\langle(12)(34)\rangle$.

[F1] A subnormal series requires each term to be normal only in the preceding term, while a normal series requires every term to be normal in the whole group ([[def-subnormal-normal-series-refinement-and-equivalence]]).

[L1] Conjugating a cycle relabels each entry by the conjugating permutation ([[lem-conjugating-a-cycle-relabels-its-entries]]).

## Refutation

**Proof technique:** direct.

1.1 The chain $S_4\triangleright A_4\triangleright V_4\triangleright K\triangleright1$ is subnormal: $A_4\trianglelefteq S_4$, $V_4\trianglelefteq A_4$, and $K\trianglelefteq V_4$ because $V_4$ is abelian. [given, F1, algebra]

1.2 Conjugation by $(123)$ sends $(12)(34)$ to $(23)(14)$ by [L1], and $(23)(14)\notin K$; hence $K$ is not normal in $S_4$. [L1, algebra]

2.1 By [F1], the displayed chain is subnormal but not normal, refuting the statement. [step 1.1, step 1.2, F1] ∎
