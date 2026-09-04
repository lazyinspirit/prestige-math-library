---
id: ex-p-adic-geometric-series
kind: example
title: "A geometric series that is p-adically convergent and really divergent"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-p-adic-absolute-value-on-the-rationals, thm-p-adic-completion-is-a-field]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Chapter 7"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
pipeline_run: null
---

## Example

For any prime $p$, the series

$$1+p+p^2+\cdots$$

diverges in the usual absolute value and converges in $\mathbb Q_p$ to
$1/(1-p)$.

## Facts & Assumptions

**Given:** A prime $p$.

[L1] The $p$-adic absolute value satisfies $|p|_p = p^{-1} < 1$
([[def-p-adic-absolute-value-on-the-rationals]]).

[L2] $\mathbb Q_p$ is a field
([[thm-p-adic-completion-is-a-field]]).

## Verification

**Proof technique:** direct.

1.1 The $N$th partial sum is $s_N = (1-p^{N+1})/(1-p)$. By [L1], $|p^{N+1}|_p = p^{-(N+1)} \to 0$, so $s_N \to 1/(1-p)$ in $\mathbb Q_p$. [L1, L2, given, algebra]

2.1 In the usual absolute value, $|p^N|_\infty = p^N$ does not tend to $0$, so the same series cannot converge there. [step 1.1, algebra] ∎
