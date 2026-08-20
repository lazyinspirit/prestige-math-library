---
id: cex-henstock-kurzweil-integrability-is-not-absolute
kind: counterexample
title: "Henstock–Kurzweil integrability does not imply integrability of the absolute value"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [ex-unbounded-derivative-evaluated-by-henstock-kurzweil, thm-hake-extension-theorem-for-henstock-kurzweil-integrals, cor-henstock-kurzweil-substitution-for-derivatives, thm-monotonicity-of-the-henstock-kurzweil-integral, thm-riemann-integrable-functions-are-henstock-kurzweil-integrable, thm-continuous-implies-integrable, thm-p-series-rational]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alessandro Fonda, The Kurzweil-Henstock Integral for Undergraduates, Ch. 1"
      url: "https://dmi.units.it/~fonda/p2017_book_KH.pdf"
    - title: "Andrew Bruckner, Judith Bruckner and Brian Thomson, Real Analysis, Section 1.21"
      url: "https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf"
pipeline_run: null
---

## Statement refuted

Henstock–Kurzweil integrability implies Henstock–Kurzweil integrability of the absolute value. The derivative $f$ of $F(x)=x^2\sin(1/x^2)$ on $[0,1]$ refutes this implication.

## Facts & Assumptions

**Given:** The derivative $f$ from the stated example.

[L1] The derivative $f$ of $x^2\sin(1/x^2)$ is Henstock–Kurzweil integrable on $[0,1]$ ([[ex-unbounded-derivative-evaluated-by-henstock-kurzweil]]).

[L2] A finite-endpoint noncompact integral extends to a proper HK integral if and only if the truncation limit exists ([[thm-hake-extension-theorem-for-henstock-kurzweil-integrals]]).

[L3] The harmonic series $\sum_{k\ge1}1/k$ diverges ([[thm-p-series-rational]]).

[L4] Substitution for derivatives evaluates the integral of a composed derivative by its endpoint values ([[cor-henstock-kurzweil-substitution-for-derivatives]]).

[L5] If $p$ and $q$ are HK integrable on a compact interval and $p\le q$ there, then $\int p\le\int q$ ([[thm-monotonicity-of-the-henstock-kurzweil-integral]]).

[L6] Every continuous function on a compact interval is Riemann integrable ([[thm-continuous-implies-integrable]]).

[L7] Every Riemann integrable function is Henstock–Kurzweil integrable with the same integral ([[thm-riemann-integrable-functions-are-henstock-kurzweil-integrable]]).

## Counterexample

**Proof technique:** contradiction.

1.1 By [L1], $f$ is HK integrable on $[0,1]$. [given, L1]

2.1 Put $u_k=\pi/2+k\pi$ and $x_k=u_k^{-1/2}$. On each compact interval $[x_{k+1},x_k]$, both $f$ and $|f|$ are continuous, so [L6] and [L7] make $|f|$ locally HK integrable. Since $F(x_k)=(-1)^k/u_k$, [L4] and [L5] give $\int_{x_{k+1}}^{x_k}|f|\ge|F(x_k)-F(x_{k+1})|=1/u_k+1/u_{k+1}$, whose partial sums diverge by comparison with [L3]. [step 1.1, L3, L4, L5, L6, L7, algebra]

3.1 Suppose $|f|$ were properly HK integrable on $[0,1]$; [L2] would make its truncation integrals converge as the left endpoint tends to zero, contradicting the unbounded sums of step 2.1. [step 2.1, L2, assume-contra, discharge-contradiction] ∎
