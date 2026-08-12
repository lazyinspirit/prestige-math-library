---
id: thm-wallis-product-for-pi
kind: theorem
title: "Wallis's product: pi over two is the limit of the finite Wallis products"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-wallis-integrals-recurrence-and-squeeze, thm-algebra-of-limits, def-monoid-finite-product]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. Galvin, Primitives and techniques of integration, section 13.2"
      url: "https://www3.nd.edu/~dgalvin1/10860/10860_S20/book/Sec13.pdf"
pipeline_run: null
---

## Statement

For $m\in\mathbb N$, define the finite Wallis product

$$W_m:=\prod_{k=1}^{m}\frac{(2k)^2}{(2k-1)(2k+1)},$$

with $W_0=1$. Then

$$\lim_{m\to\infty}W_m=\frac\pi2.$$

This limit is the meaning of Wallis's infinite product for $\pi/2$.

## Facts & Assumptions
**Given:** The finite products $W_m$ and the Wallis integrals $I_n$.

[L1] The Wallis integrals have the displayed even and odd product forms, and $I_{2m}/I_{2m+1}\to1$ ([[lem-wallis-integrals-recurrence-and-squeeze]]).

[L2] A finite product in a monoid has empty product equal to the identity and obeys the recursion that adjoins its last factor ([[def-monoid-finite-product]]).

[L3] Products and quotients of convergent real sequences have the corresponding limits when the limiting denominator is nonzero ([[thm-algebra-of-limits]]).



## Proof

**Proof technique:** direct.

1.1 Substituting the two product formulas of [L1] and collecting matching factors gives $$\frac{I_{2m}}{I_{2m+1}}=\frac{\pi}{2}\prod_{k=1}^{m}\frac{(2k-1)(2k+1)}{(2k)^2}=\frac{\pi/2}{W_m}.$$ [L1, L2, algebra]

2.1 At $m=0$, step 1.1 reads $I_0/I_1=\pi/2=(\pi/2)/1$, so the empty-product boundary agrees with the identity. At $m=1$, it reads $I_2/I_3=3\pi/8=(\pi/2)/(4/3)$, so the first nonempty product agrees as well. Both checks are separate from the limiting assertion. [step 1.1, L1, L2, algebra]

2.2 By [L1], the left side of step 1.1 tends to $1$. Since every $W_m$ is positive, rearranging gives $W_m=(\pi/2)/(I_{2m}/I_{2m+1})$, and [L3] yields $W_m\to\pi/2$. [step 1.1, L1, L3]

3.1 Thus the finite products, not an undefined completed multiplication, converge to $\pi/2$. [step 2.2] ∎
