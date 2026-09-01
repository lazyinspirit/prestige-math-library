---
id: thm-chebyshev-prime-counting-bounds
kind: theorem
title: "Chebyshev bounds for the prime-counting function"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-prime-counting-function,
       def-chebyshev-theta-function,
       lem-prime-counting-chebyshev-partial-summation,
       thm-chebyshev-theta-linear-bounds]
justified_by: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Victor Shoup, A Computational Introduction to Number Theory and Algebra, Version 2"
      url: "https://shoup.net/ntb/ntb-v2.pdf"
    - title: "Karl-Dieter Crisman, Number Theory: In Context and Interactive"
      url: "https://math.gordon.edu/ntic/nticoneside.pdf"
pipeline_run: null
---

## Statement

There exist positive constants $c_1<c_2$ and a real number $x_0$ such that

$$
c_1\frac{x}{\log x}\le\pi(x)\le c_2\frac{x}{\log x}
$$

for every real $x\ge x_0$.

## Facts & Assumptions

**Given:** A real number $x\ge2$.

[L1] For every real $x\ge2$, $$ \pi(x)=\frac{\theta(x)}{\log x}+\int_2^x\frac{\theta(t)}{t\log^2 t}\,dt $$ ([[lem-prime-counting-chebyshev-partial-summation]]).

[L2] Chebyshev's theta function has positive linear lower and upper bounds for sufficiently large arguments ([[thm-chebyshev-theta-linear-bounds]]).

[L3] The prime-counting and theta functions are the ones defined in [[def-prime-counting-function]] and [[def-chebyshev-theta-function]].

## Proof

**Proof technique:** direct.

1.1 By [L2], choose positive constants $a,b$ and $y_0\ge2$ such that $at\le\theta(t)\le bt$ for every $t\ge y_0$. Enlarging $b$ if needed to absorb the finite range $2\le t\le y_0$, we may assume $ \theta(t)\le bt\qquad(t\ge2). $ [L2, L3, choose]

2.1 For $x\ge y_0$, the integral term in [L1] is nonnegative, so $ \pi(x)\ge\frac{\theta(x)}{\log x}\ge a\frac{x}{\log x}. $ [L1, step 1.1, algebra]

2.2 Assume now that $x\ge\max\{y_0^2,e^2\}$. Using [L1] and step 1.1, $ \pi(x)\le b\frac{x}{\log x}+b\int_2^x\frac{dt}{\log^2 t}. $ Split the integral at $\sqrt x$. On $[2,\sqrt x]$ one has $\log t\ge\log2$, so $$ \int_2^{\sqrt x}\frac{dt}{\log^2 t}\le\frac{\sqrt x}{\log^2 2}<3\sqrt x. $$ On $[\sqrt x,x]$ one has $\log t\ge\frac12\log x$, so $$ \int_{\sqrt x}^x\frac{dt}{\log^2 t}\le\frac{4x}{\log^2 x}. $$ Hence $$ \pi(x)\le b\frac{x}{\log x}+3b\sqrt x+\frac{4bx}{\log^2 x}. $$ [L1, step 1.1, given, algebra]

3.1 Since $\sqrt x=o(x/\log x)$ and $x/\log^2 x\le x/\log x$ for $x\ge e$, step 2.2 implies $ \pi(x)\le c_2\frac{x}{\log x} $ for some positive constant $c_2$ and all sufficiently large $x$. Taking $c_1=a$ and enlarging $x_0$ if necessary to satisfy both steps 2.1 and 2.2 proves the theorem. [step 2.1, step 2.2, choose, algebra] ∎
