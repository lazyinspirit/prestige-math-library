---
id: ex-localisation-for-functions-equal-on-an-arc
kind: example
title: "Localisation for functions equal on an arc"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-riemann-localisation-principle-for-fourier-series]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed."
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
---

## Example

Assume the Axiom of Countable Choice.

Let $f\equiv0$ and let $g=\mathbf 1_{[1/4,3/4]}$, both extended one-periodically.
Then $f$ and $g$ agree on the arc $(-1/8,1/8)$ modulo $1$, so

$$S_Ng(0)-S_Nf(0)\to0.$$

Since $S_Nf(0)=0$ for every $N$, this gives

$$S_Ng(0)\to0.$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the one-periodic functions $f\equiv0$ and $g=\mathbf 1_{[1/4,3/4]}$.

[L1] Assuming the Axiom of Countable Choice, if two one-period integrable functions agree almost everywhere on a neighborhood of $x$, then their Fourier partial sums at $x$ differ by a term tending to $0$ ([[thm-riemann-localisation-principle-for-fourier-series]]).

## Verification

**Proof technique:** direct.

1.1 On the interval $(-1/8,1/8)$ modulo $1$, the indicator $g$ vanishes, so $f=g=0$ there. Thus the hypothesis of [L1] holds at $x=0$. [L1, given]

2.1 Applying [L1] at $x=0$ gives $S_Ng(0)-S_Nf(0)\to0$. But every Fourier coefficient of the zero function is $0$, so $S_Nf(0)=0$ for all $N$. Therefore $S_Ng(0)\to0$. [L1, step 1.1, algebra] ∎
