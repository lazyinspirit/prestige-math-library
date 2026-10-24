---
id: ex-an-absolutely-convergent-non-smooth-fourier-series
kind: example
title: "An absolutely convergent Fourier series that is not twice continuously differentiable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-wiener-algebra-of-the-circle, thm-riemann-lebesgue-lemma-for-fourier-coefficients]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, Section 3.3"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
---

## Example

Assume the Axiom of Countable Choice. The uniformly convergent series
$$f(x)=\sum_{k\ne0}|k|^{-2}e_k(x)$$
defines a member of $A(\mathbb T)$ which is not $C^2(\mathbb T)$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the displayed Fourier series.

[L1] Fourier coefficients of an integrable function tend to zero at infinity ([[thm-riemann-lebesgue-lemma-for-fourier-coefficients]]).

## Verification

1.1 Since $\sum_{k\ne0}|k|^{-2}<\infty$, the coefficient sequence is in $\ell^1$, so the displayed function belongs to $A(\mathbb T)$. [given, algebra]

1.2 If $f$ were $C^2$, two integrations by parts would give $\widehat{f''}(k)=(2\pi ik)^2\widehat f(k)=-4\pi^2$ for every $k\ne0$. [given, algebra]

2.1 This contradicts [L1] for the continuous, hence integrable, function $f''$; therefore $f\notin C^2(\mathbb T)$. [L1, step 1.2] ∎
