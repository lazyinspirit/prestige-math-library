---
id: thm-viete-product-for-pi
kind: theorem
title: "Viete's nested-radical product: two over pi is the limit of the finite cosine products"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-viete-finite-cosine-product-and-nested-radicals, cor-sin-x-over-x-limit, thm-algebra-of-limits, cor-archimedean-reciprocal, def-pi-via-first-positive-cosine-zero, def-monoid-finite-product]
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
    - title: "Imperial College London, History of Mathematics, Problems VI solutions"
      url: "https://www.ma.imperial.ac.uk/~bin06/HoM/HoM17/m3hsoln6.pdf"
pipeline_run: null
---

## Statement

Let

$$P_n:=\prod_{k=1}^{n}\cos(\pi/2^{k+1}),\qquad P_0:=1.$$

Then $P_n\to2/\pi$. Equivalently, substituting the positive half-angle radicals from [[lem-viete-finite-cosine-product-and-nested-radicals]],

$$\frac2\pi=\frac{\sqrt2}{2}\cdot\frac{\sqrt{2+\sqrt2}}2\cdot\frac{\sqrt{2+\sqrt{2+\sqrt2}}}2\cdots,$$

where the infinite product means the limit of its finite products.

## Facts & Assumptions
**Given:** The finite products $P_n$.

[L1] For every $x$ and natural $n$, $\sin x=2^n\sin(x/2^n)\prod_{k=1}^{n}\cos(x/2^k)$, and at $x=\pi/2$ the factors have the stated positive nested-radical forms ([[lem-viete-finite-cosine-product-and-nested-radicals]]).

[L2] $\lim_{x\to0}\sin x/x=1$ ([[cor-sin-x-over-x-limit]]).

[L3] Products and quotients of convergent real sequences have the corresponding limits when the limiting denominator is nonzero ([[thm-algebra-of-limits]]).

[L4] A finite product in a monoid has empty product equal to the identity ([[def-monoid-finite-product]]).

[L5] For every $\varepsilon>0$ there is a natural $N\ge1$ with $1/N<\varepsilon$, and $\pi>0$ ([[cor-archimedean-reciprocal]], [[def-pi-via-first-positive-cosine-zero]]).



## Proof

**Proof technique:** direct.

1.1 Apply [L1] with $x=\pi/2$ and replace its index $n$ by $n+1$: $$1=2^{n+1}\sin(\pi/2^{n+2})\,P_{n+1}.$$ [L1, algebra]

2.1 Put $y_n:=\pi/2^{n+2}$. Then $y_n>0$ by [L5]. Since $2^{n+2}\geq n+1$, [L5] gives $0<y_n\leq\pi/(n+1)\to0$, while $2^{n+1}y_n=\pi/2$. Thus step 1.1 becomes $$1=\frac\pi2\frac{\sin y_n}{y_n}P_{n+1}.$$ [step 1.1, L5, algebra]

3.1 Every factor of $P_{n+1}$ is positive by [L1], so division is legitimate. By [L2] and [L3], step 2.1 gives $P_{n+1}\to2/\pi$, hence also $P_n\to2/\pi$. [step 2.1, L1, L2, L3]

4.1 The case $n=0$ is the finite empty product $P_0=1$ by [L4]; it is not an extra factor in the limit. Substituting the radical factors from [L1] into step 3.1 gives the displayed Viète product. [step 3.1, L1, L4] ∎
