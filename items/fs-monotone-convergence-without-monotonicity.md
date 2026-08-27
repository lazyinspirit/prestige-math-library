---
id: fs-monotone-convergence-without-monotonicity
kind: false-statement
title: "FALSE: monotone convergence holds without monotonicity"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-monotone-convergence-for-the-integral]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Example 7.3"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
---

## Statement

If $f_n:X\to[0,+\infty]$ are measurable and converge pointwise to $f$, then
$$\int f_n\,d\mu\to\int f\,d\mu.$$

## Facts & Assumptions

**Given:** The statement above.

[L1] Monotone convergence requires a nondecreasing hypothesis ([[thm-monotone-convergence-for-the-integral]]).

## Refutation

**Proof technique:** direct.

1.1 On $(0,1)$ with Lebesgue measure, let [given, construct]
$f_n:=(n+1)\chi_{(0,1/(n+1))}$; then $f_n(x)\to0$ for every
$x\in(0,1)$.

2.1 But $\int f_n\,d\mu=1$ for every $n$, whereas $\int0\,d\mu=0$. So the displayed conclusion fails, and [L1] shows that the missing monotonicity hypothesis is exactly what breaks. [step 1.1, L1, algebra] ∎
