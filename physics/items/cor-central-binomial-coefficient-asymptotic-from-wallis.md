---
id: cor-central-binomial-coefficient-asymptotic-from-wallis
kind: corollary
title: "The central binomial coefficient is asymptotic to 4^n divided by the square root of pi n"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-wallis-product-for-pi, thm-binomial-closed-formula, def-binomial-coefficient, def-factorial-and-falling-factorial, thm-of-square-roots, thm-algebra-of-limits, cor-archimedean-reciprocal, def-monoid-finite-product, def-pi-via-first-positive-cosine-zero]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "D. Galvin, Primitives and techniques of integration, section 13.2"
      url: "https://www3.nd.edu/~dgalvin1/10860/10860_S20/book/Sec13.pdf"
    - title: "Imperial College London, History of Mathematics, Problems VI solutions"
      url: "https://www.ma.imperial.ac.uk/~bin06/HoM/HoM17/m3hsoln6.pdf"
pipeline_run: null
---

## Statement

For $n\ge1$, put $a_n:=\binom{2n}{n}/4^n$. Then

$$\sqrt{\pi n}\,a_n\longrightarrow1.$$

Equivalently,

$$\binom{2n}{n}\sim\frac{4^n}{\sqrt{\pi n}},$$

where the asymptotic notation means that the ratio of the two sides tends to $1$.

## Facts & Assumptions
**Given:** A natural $n\ge1$ and the positive real $a_n=\binom{2n}{n}/4^n$.

[L1] For $k\le n$, $\binom nk\,k!\,(n-k)!=n!$, so the usual factorial quotient equals the binomial coefficient ([[thm-binomial-closed-formula]], [[def-binomial-coefficient]], [[def-factorial-and-falling-factorial]]).

[L2] For $n\in\mathbb N$, $W_n=\prod_{k=1}^{n}(2k)^2/((2k-1)(2k+1))$, with $W_0=1$, and $W_n\to\pi/2$ ([[thm-wallis-product-for-pi]]).

[L3] A finite product in a monoid has empty product equal to the identity and satisfies the recursion that adjoins its last factor ([[def-monoid-finite-product]]).

[L4] Products and quotients of convergent real sequences have the corresponding limits when the limiting denominator is nonzero ([[thm-algebra-of-limits]]).

[L5] Every nonnegative real has a unique nonnegative square root ([[thm-of-square-roots]]).

[L6] For every $\varepsilon>0$ there is a natural $N\ge1$ with $1/N<\varepsilon$ ([[cor-archimedean-reciprocal]]).

[L7] The constant $\pi$ is positive ([[def-pi-via-first-positive-cosine-zero]]).





## Proof

**Proof technique:** direct.

1.1 By [L1] and [L3], $$a_n=\frac{(2n)!}{(n!)^2\,4^n}=\prod_{k=1}^{n}\frac{2k-1}{2k}.$$ [given, L1, L3, algebra]

2.1 Comparing step 1.1 with the factors in $W_n$ gives $$W_n=\frac1{(2n+1)a_n^2}.$$ [step 1.1, L2, L3, algebra]

3.1 By [L2], [L4], and step 2.1, $((\pi/2)(2n+1)a_n^2)\to1$. Also $2n/(2n+1)\to1$ by [L6], so $$\pi n a_n^2=\frac{2n}{2n+1}\cdot\frac\pi2(2n+1)a_n^2\longrightarrow1.$$ [step 2.1, L2, L4, L6, algebra]

4.1 Let $b_n:=\sqrt{\pi n}\,a_n\ge0$, which is defined by [L5] and [L7]. Then $b_n^2=\pi n a_n^2\to1$ by step 3.1, and $$|b_n-1|=\frac{|b_n^2-1|}{b_n+1}\le|b_n^2-1|,$$ so $b_n\to1$. [step 3.1, L5, L7, algebra]

5.1 For every $n\geq1$, the ratio of $\binom{2n}{n}$ to $4^n/\sqrt{\pi n}$ is exactly $\sqrt{\pi n}\,a_n$. Thus either displayed asymptotic formulation implies the other, by the definition of asymptotic equivalence. [given, step 4.1, algebra]

6.1 At $n=0$, $a_0=1$ but the comparison term $4^n/\sqrt{\pi n}$ is undefined. The theorem starts at $n=1$, where every denominator in steps 1.1 to 5.1 is positive, and steps 4.1 and 5.1 prove its two equivalent formulations. [given, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, L1, L7] ∎
