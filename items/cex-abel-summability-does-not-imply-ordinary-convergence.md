---
id: cex-abel-summability-does-not-imply-ordinary-convergence
kind: counterexample
title: "Abel summability does not imply ordinary convergence"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  references:
    - title: "Grandi's series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Grandi%27s_series"
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed."
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
---

## Statement refuted

If a series is Abel summable, then its ordinary partial sums converge.

## Facts & Assumptions

**Given:** Grandi's series
$$1-1+1-1+\cdots.$$

[F1] For $|r|<1$, the geometric-series identity gives
$$1-r+r^2-r^3+\cdots=\frac{1}{1+r}.$$

## Counterexample

**Proof technique:** direct.

1.1 The ordinary partial sums are $$1,0,1,0,\dots,$$ so they do not converge. [given, algebra]

2.1 For $0\le r<1$, [F1] makes the associated Abel sum $$1-r+r^2-r^3+\cdots=\frac{1}{1+r}.$$ As $r\uparrow1$, this tends to $1/2$. Thus the series is Abel summable but not ordinarily convergent, refuting the statement. [F1, step 1.1, algebra] ∎
