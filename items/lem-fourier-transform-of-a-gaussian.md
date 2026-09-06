---
id: lem-fourier-transform-of-a-gaussian
kind: lemma
title: "Fourier transform of a Gaussian"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-gaussian-integral, thm-differentiation-under-dominated-improper-multiple-integrals]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Nickolas Andersen, Analytic Number Theory, Chapter 16 Gaussian transform"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
---

## Statement

For $t>0$ and $\widehat f(\xi)=\int_{\mathbb R}f(x)e(-x\xi)\,dx$,
$$\widehat{e^{-\pi t x^2}}(\xi)=t^{-1/2}e^{-\pi\xi^2/t}.$$

## Facts & Assumptions

**Given:** $t>0$; the Gaussian is a Schwartz function.

## Proof

**Proof technique:** direct.

1.1 Put $G(\xi)=\int_{\mathbb R}e^{-\pi x^2}e(-x\xi)\,dx$. The Gaussian integral [[thm-gaussian-integral]], followed by $u=\sqrt\pi x$, gives $G(0)=1$. On every compact $\xi$-interval, the derivative of the integrand is dominated by a constant multiple of $|x|e^{-\pi x^2}$, so [[thm-differentiation-under-dominated-improper-multiple-integrals]] applied to real and imaginary parts gives $$G'(\xi)=\int_{\mathbb R}(-2\pi i x)e^{-\pi x^2}e(-x\xi)\,dx.$$ [given]

2.1 Since $(e^{-\pi x^2})'=-2\pi x e^{-\pi x^2}$, integration by parts on $[-R,R]$ and then $R\to\infty$ (the boundary term tends to $0$) yields $G'(\xi)=-2\pi\xi G(\xi)$. Hence $(e^{\pi\xi^2}G(\xi))'=0$, and step 1.1 gives $G(\xi)=e^{-\pi\xi^2}$. [step 1.1, algebra]

3.1 Substitute $u=\sqrt t x$ in the defining integral and apply step 2.1 to obtain the stated $t^{-1/2}$ scaling. [step 2.1, algebra] ∎
