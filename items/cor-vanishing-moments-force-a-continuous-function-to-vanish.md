---
id: cor-vanishing-moments-force-a-continuous-function-to-vanish
kind: corollary
title: "A continuous real function on $[0,1]$ whose every moment $\\int_0^1 x^nf$ vanishes is identically zero"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-continuity-real, fs-nonnegative-integrable-with-zero-integral-vanishes, cor-weierstrass-approximation-on-the-unit-interval, thm-algebra-of-continuous-functions, thm-continuous-implies-integrable, thm-linearity-of-the-integral, thm-monotonicity-of-the-integral, cor-integrability-of-absolute-values-products-and-lattice-operations, thm-nonnegative-continuous-with-zero-integral-vanishes]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
sources:
  scraped: []
  references:
    - title: "J. M. Erdman, A Companion to Real Analysis, Proposition 21.2.9"
      url: "https://web.pdx.edu/~erdman/CRA/COMPANION_ANALYSIS_pdf.pdf"
pipeline_run: null
---

## Statement

Let $f : [0,1] \to \mathbb{R}$ be continuous ([[def-continuity-real]]) and suppose that

$$\int_0^1 x^{n} f(x)\,dx \;=\; 0 \qquad \text{for every } n \in \mathbb{N} .$$

Then $f(x) = 0$ for every $x \in [0,1]$.

The hypothesis includes $n = 0$, which reads $\int_0^1 f = 0$. Continuity is
doing real work here rather than tidying: the last step of the proof is
[[thm-nonnegative-continuous-with-zero-integral-vanishes]], and its companion
[[fs-nonnegative-integrable-with-zero-integral-vanishes]] shows that a merely
integrable nonnegative function with integral $0$ need not be identically zero.

## Facts & Assumptions

**Given:** A continuous $f : [0,1] \to \mathbb{R}$ with $\int_0^1 x^{n}f(x)\,dx = 0$ for every $n \in \mathbb{N}$.

[L1] For every $f \in C([0,1],\mathbb{R})$ and $\varepsilon > 0$, there is a polynomial $p$ with $\sup_{x\in[0,1]}|p(x)-f(x)| < \varepsilon$ ([[cor-weierstrass-approximation-on-the-unit-interval]]).

[L2] Sums, scalar multiples and products of functions continuous at a point are continuous at that point; and, with no hypothesis at all, every constant function, the identity, every $x \mapsto x^{n}$ for $n \in \mathbb{N}$, and every polynomial function with real coefficients are continuous ([[thm-algebra-of-continuous-functions]]).

[L3] For reals $a < b$, a continuous $g : [a,b] \to \mathbb{R}$ is bounded and Riemann integrable on $[a,b]$ ([[thm-continuous-implies-integrable]]).

[L4] For reals $a < b$, integrable $g, h : [a,b] \to \mathbb{R}$ and reals $\lambda, \mu$, the function $\lambda g + \mu h$ is integrable on $[a,b]$ and $\int_a^b(\lambda g + \mu h) = \lambda\int_a^b g + \mu\int_a^b h$ ([[thm-linearity-of-the-integral]]).

[L5] For reals $a < b$ and integrable $g : [a,b] \to \mathbb{R}$: if $g(x) \ge 0$ for every $x \in [a,b]$ then $\int_a^b g \ge 0$; and if $m \le g(x) \le M$ for every $x \in [a,b]$ with $m, M$ real, then $m(b-a) \le \int_a^b g \le M(b-a)$ ([[thm-monotonicity-of-the-integral]]).

[L6] For reals $a < b$ and integrable $g, h : [a,b] \to \mathbb{R}$, the functions $gh$ and $g^{2}$ are integrable on $[a,b]$ ([[cor-integrability-of-absolute-values-products-and-lattice-operations]]).

[L7] For reals $a < b$, if $g : [a,b] \to \mathbb{R}$ is continuous with $g(x) \ge 0$ for every $x \in [a,b]$ and $\int_a^b g = 0$, then $g(x) = 0$ for every $x \in [a,b]$ ([[thm-nonnegative-continuous-with-zero-integral-vanishes]]).

## Proof

**Proof technique:** direct.

1.1 For each $n \in \mathbb{N}$ the function $x \mapsto x^{n}$ is continuous on $[0,1]$, so $x \mapsto x^{n}f(x)$ is continuous on $[0,1]$ as a product of continuous functions, and is therefore integrable; so each integral in the hypothesis is defined. [given, L2, L3]

1.2 $f$ is bounded and integrable on $[0,1]$, so there is a real $M > 0$ with $|f(x)| \le M$ for every $x \in [0,1]$; if the bound supplied is $0$, replace it by $1$. [given, L3, choose]

1.3 $f^{2}$ is continuous on $[0,1]$ as a product of continuous functions, hence integrable, and $f(x)^{2} \ge 0$ for every $x \in [0,1]$, so $\int_0^1 f^{2} \ge 0$. [given, L2, L3, L5]

2.1 Let $p(x) = a_0 + a_1x + \dots + a_mx^{m}$ be any real polynomial. Each $x \mapsto a_jx^{j}f(x)$ is integrable by step 1.1, and applying the linearity identity $m$ times to the finite sum gives $\int_0^1 pf = \sum_{j \le m} a_j\int_0^1 x^{j}f$, every summand of which is $0$ by hypothesis, so $\int_0^1 pf = 0$. [step 1.1, L4, given, algebra]

2.2 Let $\varepsilon > 0$. Choose a polynomial $p$ with $\sup_{x\in[0,1]}|p(x)-f(x)| < \varepsilon/M$, which is legitimate since $\varepsilon/M > 0$ by step 1.2. [step 1.2, L1, choose]

3.1 The polynomial $p$ chosen in step 2.2 is continuous on $[0,1]$ by [L2] and hence integrable by [L3]; so $f-p$ is integrable by [L4], and both $(f-p)f$ and $pf$ are integrable by [L6]. Since $f^{2} = (f-p)f + pf$ pointwise on $[0,1]$, [L4] gives $\int_0^1 f^{2} = \int_0^1 (f-p)f + \int_0^1 pf$, and the second term is $0$ by step 2.1, giving $\int_0^1 f^{2} = \int_0^1 (f-p)f$. [step 1.1, step 2.1, step 2.2, L2, L3, L4, L6, algebra]

3.2 For every $x \in [0,1]$, $|f(x)-p(x)|\,|f(x)| < (\varepsilon/M)\cdot M = \varepsilon$ by steps 1.2 and 2.2, so $-\varepsilon \le (f-p)(x)f(x) \le \varepsilon$ on $[0,1]$; since $1 - 0 = 1$, the two-sided bound gives $\int_0^1 (f-p)f \le \varepsilon$. [step 1.2, step 2.2, L5, algebra]

4.1 Combining, $0 \le \int_0^1 f^{2} \le \varepsilon$. [step 1.3, step 3.1, step 3.2]

5.1 Step 4.1 holds for every $\varepsilon > 0$, and the value $\int_0^1 f^{2}$ does not depend on $\varepsilon$; were it positive, taking $\varepsilon$ to be half of it would contradict step 4.1, so $\int_0^1 f^{2} = 0$. [step 4.1, algebra]

6.1 $f^{2}$ is continuous on $[0,1]$, nonnegative there, and has integral $0$ by step 5.1, so $f(x)^{2} = 0$ for every $x \in [0,1]$, and hence $f(x) = 0$ for every $x \in [0,1]$. [step 1.3, step 5.1, L7, algebra] ∎
