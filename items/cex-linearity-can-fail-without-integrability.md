---
id: cex-linearity-can-fail-without-integrability
kind: counterexample
title: "Linearity can fail without an integrability hypothesis"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [thm-linearity-of-the-lebesgue-integral-on-l-one]
generation:
  role: counterexample
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., §2.3"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement refuted

The Lebesgue integral is linear on all measurable real-valued functions.

## Facts & Assumptions

**Given:** The functions $f:=\chi_{[0,\infty)}$ and $g:=-\chi_{[0,\infty)}$ on $\mathbb R$.

[L1] Linearity is proved only on $L^1(\mu)$ ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

## Counterexample

**Proof technique:** direct.

1.1 The sum $f+g$ is the zero function, so its integral is $0$. [given]

2.1 But $f$ has integral $+\infty$, while $g$ would have to contribute [step 1.1, L1, algebra] ∎
$-\infty$ for any linear identity to hold. Thus
$$\int(f+g)\,d\lambda=0\ne+\infty+(-\infty),$$
so the Statement is false and [L1] cannot be widened beyond $L^1$.
