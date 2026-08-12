---
id: lem-viete-finite-cosine-product-and-nested-radicals
kind: lemma
title: "The finite Viete cosine product and its positive nested-radical factors"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-sine-and-cosine-addition-formulas, cor-trigonometric-parity-and-pythagorean-identity, thm-quarter-turn-values-and-shift-formulas, thm-sine-cosine-signs-monotonicity-and-ranges, thm-of-square-roots, def-monoid-finite-product]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Imperial College London, History of Mathematics, Problems VI solutions"
      url: "https://www.ma.imperial.ac.uk/~bin06/HoM/HoM17/m3hsoln6.pdf"
pipeline_run: null
---

## Statement

For every real $x$ and natural $n$,

$$\sin x=2^n\sin(x/2^n)\prod_{k=1}^{n}\cos(x/2^k),$$

with the product equal to $1$ when $n=0$. At $x=\pi/2$, all factors are positive and

$$\cos(\pi/4)=\frac{\sqrt2}{2},\quad \cos(\pi/8)=\frac{\sqrt{2+\sqrt2}}2,$$

with each later factor obtained by placing the previous positive radical inside $\sqrt{2+\,\cdot}/2$.

## Facts & Assumptions
**Given:** A real $x$ and a natural $n$.

[L1] For all real $x,y$, $\sin(x+y)=\sin x\cos y+\cos x\sin y$ and $\cos(x+y)=\cos x\cos y-\sin x\sin y$; moreover, $\sin^2x+\cos^2x=1$ for every real $x$ ([[thm-sine-and-cosine-addition-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]]).

[L2] $\sin(\pi/2)=1$, and cosine is positive on $(0,\pi/2)$ ([[thm-quarter-turn-values-and-shift-formulas]], [[thm-sine-cosine-signs-monotonicity-and-ranges]]).

[L3] Every nonnegative real has a unique nonnegative square root ([[thm-of-square-roots]]).

[L4] A finite product in a monoid has empty product equal to the identity and is extended by adjoining its last factor ([[def-monoid-finite-product]]).



## Proof

**Proof technique:** induction.

1.1 At $n=0$, the right side is $2^0\sin x$ times the empty product, hence equals $\sin x$ by [L4]. [base, L4, algebra]

1.2 Assume the finite identity at $n$. Put $x=y=u/2$ in the sine addition formula of [L1] to obtain $\sin u=2\sin(u/2)\cos(u/2)$. Apply this with $u=x/2^n$ and adjoin the factor $\cos(x/2^{n+1})$ using [L4]; this gives the identity at $n+1$. [ih, L1, L4, algebra]

1.3 At $x=\pi/2$, every angle $\pi/2^{k+1}$ lies in $(0,\pi/2)$, so [L2] makes every factor positive. Put $x=y=u/2$ in the cosine addition formula of [L1] and use the Pythagorean identity there to obtain $\cos u=2\cos^2(u/2)-1$. Thus $$\cos(u/2)=\frac{\sqrt{2+2\cos u}}2,$$ where [L3] selects the positive square root. [L1, L2, L3, algebra]

2.1 By induction, the finite identity holds for every natural $n$. [step 1.1, step 1.2]

3.1 Starting with $\cos(\pi/2)=0$ in [L2] and iterating step 1.3 gives $\cos(\pi/4)=\sqrt2/2$, $\cos(\pi/8)=\sqrt{2+\sqrt2}/2$, and all subsequent positive nested-radical factors stated above. [step 2.1, step 1.3, L2, L3, discharge-induction] ∎
