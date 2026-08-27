---
id: fs-zero-integral-forces-everywhere-zero
kind: false-statement
title: "FALSE: a nonnegative measurable function with integral $0$ vanishes everywhere"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-nonnegative-integral-zero-iff-zero-almost-everywhere, thm-lebesgue-measure-of-a-box-of-every-kind]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Proposition 8.1"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
---

## Statement

If $f:X\to[0,+\infty]$ is measurable and $\int f\,d\mu=0$, then $f(x)=0$ for
every $x$.

## Facts & Assumptions

**Given:** The statement above.

[L1] A nonnegative measurable function has integral $0$ exactly when it vanishes almost everywhere, not everywhere ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

[L2] Degenerate intervals in $\mathbb R$ have Lebesgue measure $0$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

## Refutation

**Proof technique:** direct.

1.1 On $\mathbb R$ with Lebesgue measure, let $f:=\chi_{\{0\}}$. By [L2], the [L2, given, construct]
set $\{0\}$ is null, so $\int f\,d\lambda=0$.

1.2 But $f(0)=1$. Therefore the conclusion in the Statement is false, and [L1]
shows that "almost everywhere" is the correct replacement. [step 1.1, L1] ∎
