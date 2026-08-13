---
id: lem-wallis-integrals-recurrence-and-squeeze
kind: lemma
title: "Wallis integrals satisfy the two-step recurrence, closed forms, and the adjacent-integral squeeze"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-integration-by-parts, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-cosine-signs-monotonicity-and-ranges, thm-quarter-turn-values-and-shift-formulas, def-pi-via-first-positive-cosine-zero, lem-integral-elementary-bounds, thm-linearity-of-the-integral, thm-monotonicity-of-the-integral, def-monoid-finite-product, thm-squeeze]
justified_by: []
aliases: []
landmark: true
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

For $n\in\mathbb N$, put

$$I_n:=\int_0^{\pi/2}\sin^nt\,dt.$$

Then $I_0=\pi/2$, $I_1=1$, and for every $n\ge2$,

$$I_n=\frac{n-1}{n}I_{n-2}.$$

Consequently, for every $m\ge0$,

$$I_{2m}=\frac\pi2\prod_{k=1}^{m}\frac{2k-1}{2k},\qquad I_{2m+1}=\prod_{k=1}^{m}\frac{2k}{2k+1},$$

where an empty product is $1$. For $m\ge1$,

$$I_{2m+1}\le I_{2m}\le I_{2m-1},\qquad 1\le\frac{I_{2m}}{I_{2m+1}}\le\frac{2m+1}{2m},$$

and therefore $I_{2m}/I_{2m+1}\to1$.

## Facts & Assumptions
**Given:** The functions $t\mapsto\sin^nt$ on $[0,\pi/2]$ and the integrals $I_n$.

[L1] Integration by parts gives $\int_a^buv'=u(b)v(b)-u(a)v(a)-\int_a^bu'v$ when the stated derivatives are integrable ([[thm-integration-by-parts]]).

[L2] $(\sin t)'=\cos t$, $(\cos t)'=-\sin t$, $\sin0=0$, $\cos0=1$, and $\sin^2t+\cos^2t=1$ ([[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]]).

[L3] Sine is strictly increasing on $[-\pi/2,\pi/2]$, has range $[-1,1]$, and satisfies $\sin(\pi/2)=1$ and $\cos(\pi/2)=0$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-quarter-turn-values-and-shift-formulas]]).

[L4] The integral is linear; the integral of a constant $c$ on $[a,b]$ is $c(b-a)$; and if $f\le g$ pointwise on $[a,b]$ then $\int_a^bf\le\int_a^bg$ ([[thm-linearity-of-the-integral]], [[lem-integral-elementary-bounds]], [[thm-monotonicity-of-the-integral]]).

[L5] A finite product in a monoid has empty product equal to the identity and satisfies the recursion that adjoins its last factor ([[def-monoid-finite-product]]).

[L6] A sequence squeezed between two sequences with the same limit has that limit ([[thm-squeeze]]).

[L7] The constant $\pi$ is positive ([[def-pi-via-first-positive-cosine-zero]]).



## Proof

**Proof technique:** direct.

1.1 By [L3] and [L4], $I_0=\int_0^{\pi/2}1\,dt=\pi/2$, while [L2] gives $I_1=[-\cos t]_0^{\pi/2}=1$. [L2, L3, L4, algebra]

1.2 Let $n\ge2$. Apply [L1] to $u=\sin^{n-1}t$ and $v'=\sin t$. The endpoint term $[-\sin^{n-1}t\cos t]_0^{\pi/2}$ is $0$, including the first legal case $n=2$, and [L2] gives $$I_n=(n-1)\int_0^{\pi/2}\sin^{n-2}t\cos^2t\,dt.$$ [given, L1, L2, L3, algebra]

1.3 For $m\ge1$, [L2] and [L3] give $0\le\sin^{2m+1}t\le\sin^{2m}t\le\sin^{2m-1}t$, so the integral bounds in [L4] yield $I_{2m+1}\le I_{2m}\le I_{2m-1}$. [L2, L3, L4]

2.1 Substitute $\cos^2t=1-\sin^2t$ in step 1.2 and use [L4]: $I_n=(n-1)(I_{n-2}-I_n)$, hence $I_n=((n-1)/n)I_{n-2}$. [step 1.2, L2, L4, algebra]

3.1 Iterating step 2.1 separately from the base values of step 1.1 gives the displayed even and odd product formulas; when $m=0$, [L5] makes them exactly $I_0=\pi/2$ and $I_1=1$. [step 1.1, step 2.1, L5, algebra]

4.1 All $I_j$ are positive by the product formulas in step 3.1: their base values are positive by [L7], and every displayed factor is positive. Dividing step 1.3 by $I_{2m+1}$ and using step 2.1 at $n=2m+1$ gives $$1\le\frac{I_{2m}}{I_{2m+1}}\le\frac{I_{2m-1}}{I_{2m+1}}=\frac{2m+1}{2m}.$$ [step 2.1, step 1.3, step 3.1, L7, algebra]

5.1 Both outer sequences in step 4.1 tend to $1$, so [L6] gives $I_{2m}/I_{2m+1}\to1$. [step 4.1, L6] ∎
