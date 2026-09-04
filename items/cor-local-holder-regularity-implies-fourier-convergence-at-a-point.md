---
id: cor-local-holder-regularity-implies-fourier-convergence-at-a-point
kind: corollary
title: "Local Holder regularity implies Fourier convergence at a point"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-dini-pointwise-convergence-criterion-for-fourier-series]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed."
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
---

## Statement

Assume the Axiom of Countable Choice.

Let $f$ be a one-period integrable function and let $x\in\mathbb R$. Suppose
there are constants $C>0$, $\alpha>0$, and $\delta\in(0,1/2)$ such that

$$|f(x+t)-f(x)|\le Ct^\alpha \qquad \text{and} \qquad |f(x-t)-f(x)|\le Ct^\alpha$$

for every $0<t<\delta$. Then

$$S_Nf(x)\to f(x) \qquad \text{as } N\to\infty.$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a one-period integrable function $f$, a real $x$, constants $C>0$ and $\alpha>0$, and a real $\delta$ with $0<\delta<1/2$ such that $$|f(x+t)-f(x)|\le Ct^\alpha \quad \text{and} \quad |f(x-t)-f(x)|\le Ct^\alpha$$ for every $0<t<\delta$.

[L1] Assuming the Axiom of Countable Choice, if $$\int_0^\delta \frac{|f(x+t)+f(x-t)-2s|}{t}\,dt<\infty,$$ then $S_Nf(x)\to s$ ([[thm-dini-pointwise-convergence-criterion-for-fourier-series]]).

## Proof

**Proof technique:** direct.

1.1 For $0<t<\delta$, the triangle inequality and the hypotheses give $$|f(x+t)+f(x-t)-2f(x)|\le |f(x+t)-f(x)|+|f(x-t)-f(x)|\le2Ct^\alpha.$$ [L1, given, algebra]

2.1 Therefore $$\int_0^\delta \frac{|f(x+t)+f(x-t)-2f(x)|}{t}\,dt\le2C\int_0^\delta t^{\alpha-1}\,dt=\frac{2C}{\alpha}\delta^\alpha<\infty.$$ [step 1.1, algebra]

3.1 Applying [L1] with $s=f(x)$ and using step 2.1 gives $S_Nf(x)\to f(x)$. [L1, step 2.1] ∎
