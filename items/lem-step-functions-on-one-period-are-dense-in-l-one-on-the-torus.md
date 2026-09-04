---
id: lem-step-functions-on-one-period-are-dense-in-l-one-on-the-torus
kind: lemma
title: "Step functions on one period are dense in L^1 on the torus"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-period-one-fourier-coefficients-partial-sums-and-convolution, thm-box-step-functions-are-dense-in-l-p-of-rn]
proof_strategy: direct
verification:
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

Let $f$ be integrable on one period. For every $\varepsilon>0$ there is a step
function $s$ on $[0,1)$ such that

$$\int_0^1 |f(t)-s(t)|\,dt < \varepsilon.$$

Equivalently, one-period step functions are dense in $L^1(\mathbb T)$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a one-period integrable function $f$, and a real $\varepsilon>0$.

[L1] The torus conventions identify one-period integrable functions with the $L^1(\mathbb T)$ objects used on this page ([[def-period-one-fourier-coefficients-partial-sums-and-convolution]]).

[L2] Assuming the Axiom of Countable Choice, finite linear combinations of interval indicators are dense in $L^1(\mathbb R)$ ([[thm-box-step-functions-are-dense-in-l-p-of-rn]]).

## Proof

**Proof technique:** direct.

1.1 Define $g:\mathbb R\to\mathbb R$ by $g(t)=f(t)$ for $0\le t<1$ and $g(t)=0$ otherwise. Then $g\in L^1(\mathbb R)$. By [L2], choose a finite linear combination of interval indicators $u$ with $$\int_{\mathbb R}|g(t)-u(t)|\,dt<\varepsilon.$$ [given, L2, choose]

2.1 Restrict $u$ to $[0,1)$ and call the restriction $s$. Intersecting each interval in $u$ with $[0,1)$ produces only finitely many subintervals, so $s$ is a step function on $[0,1)$. Since $g=f$ on $[0,1)$, $$\int_0^1 |f(t)-s(t)|\,dt=\int_0^1 |g(t)-u(t)|\,dt\le\int_{\mathbb R}|g(t)-u(t)|\,dt<\varepsilon.$$ [L1, step 1.1, algebra]

3.1 Step 2.1 is exactly the claimed density statement on one period. [step 2.1] ∎
