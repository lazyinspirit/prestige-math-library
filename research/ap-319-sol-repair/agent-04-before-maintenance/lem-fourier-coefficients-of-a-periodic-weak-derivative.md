---
id: lem-fourier-coefficients-of-a-periodic-weak-derivative
kind: lemma
title: "Fourier coefficients of a periodic weak derivative"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-periodic-ltwo-weak-derivative]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Michael E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE, Section 1"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
---

## Statement

If $f,g\in L^2(\mathbb T)$ and $g=f'$ in the periodic weak sense, then
$$\widehat g(k)=2\pi ik\widehat f(k)\qquad(k\in\mathbb Z).$$

## Facts & Assumptions

**Given:** $f,g\in L^2(\mathbb T)$ with $g=f'$ in the sense of [[def-periodic-ltwo-weak-derivative]].

## Proof

**Proof technique:** direct.

1.1 Take the smooth periodic test function $\varphi=e_{-k}$ in the defining identity. Since $\varphi'=-2\pi ik e_{-k}$, it gives $-2\pi ik\widehat f(k)=-\widehat g(k)$. [given, algebra]

2.1 Rearranging proves the formula; for $k=0$ it says $\widehat g(0)=0$, which is also the same test-function identity with $\varphi=1$. [step 1.1, algebra] ∎
