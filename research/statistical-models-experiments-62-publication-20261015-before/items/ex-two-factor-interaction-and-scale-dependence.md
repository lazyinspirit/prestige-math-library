---
id: ex-two-factor-interaction-and-scale-dependence
kind: example
title: "A two-factor interaction depends on response scale"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-two-level-full-factorial-design
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Example

In a two-factor full factorial, let the four positive responses be $y_{--}=1$, $y_{+-}=2$, $y_{-+}=3$, and $y_{++}=6$. The coded $AB$ effect is $1$ on the raw response scale and $0$ on the logarithmic scale. The same design therefore shows interaction on one response scale and no interaction on another.

## Facts & Assumptions

[F1] [[def-two-level-full-factorial-design]]: for a nonempty index subset $S$, its factorial effect is the mean response among runs with $x_S=+1$ minus the mean among runs with $x_S=-1$.

## Verification

**Given:** The four positive responses in the Example, with factor levels coded $−1,+1$.

1.1 Here $x_{\{1,2\}}=x_1x_2$ is $+1$ on runs $--$ and $++$, and $-1$ on runs $+-$ and $-+$. By [F1], the raw-scale $AB$ effect is $\frac{1+6}{2}-\frac{2+3}{2}=1$. [given, F1, algebra]

1.2 The log-transformed responses remain indexed by these same four runs, so [F1] uses the same two sign groups. The log-scale $AB$ effect is $\frac{\log 1+\log 6}{2}-\frac{\log 2+\log 3}{2}=0$, using $\log 1=0$ and $\log 6=\log 2+\log 3$. [given, F1, algebra]

2.1 The raw-scale interaction effect is nonzero while the log-scale interaction effect is zero, so this table's interaction depends on the declared response scale. The run set alone specifies no response additivity or physical mechanism. [step 1.1, step 1.2, algebra] ∎

