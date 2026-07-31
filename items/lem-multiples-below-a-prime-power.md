---
id: lem-multiples-below-a-prime-power
kind: lemma
title: "For a prime $p$ and $k\\ge1$, multiplication by $p$ bijects the standard representatives modulo $p^{k-1}$ with the representatives modulo $p^k$ divisible by $p$"
status: published
origin: session
deps: [def-prime, def-group-power, lem-group-power-laws, thm-standard-representatives-modulo-n, def-injection-surjection-bijection, def-finite-cardinality, lem-int-cancellation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Mathematics LibreTexts, Euler's phi Function"
      url: "https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/02%3A_Congruences/2.05%3A_Euler%27s__%CF%95__Function"
pipeline_run: null
---

## Statement

Let $p$ be prime and let $k\in\mathbb N$ with $k\ge1$. Write $k-1$ for the
unique natural $j$ with $j+1=k$. Multiplication by $p$ gives a bijection

$$\{\,r\in\mathbb Z:0\le r<p^{k-1}\,\}\longrightarrow\{\,s\in\mathbb Z:0\le s<p^k,\ p\mid s\,\},\qquad r\longmapsto pr.$$

Thus the standard representatives modulo $p^k$ divisible by $p$ are exactly
$0,p,2p,\ldots,(p^{k-1}-1)p$, and there are $p^{k-1}$ of them.

## Facts & Assumptions

**Given:** A prime $p$ and a natural $k\ge1$.

[F1] Natural powers satisfy $p^0=1$ and $p^k=p^{k-1}p$ ([[def-group-power]], [[lem-group-power-laws]]).

[F2] For a positive modulus $m$, the standard representatives are the integers $r$ with $0\le r<m$, and there are $m$ of them ([[thm-standard-representatives-modulo-n]], [[def-finite-cardinality]]).

[F3] A map is bijective when it is injective and surjective ([[def-injection-surjection-bijection]]).

[L1] If $px=py$ and $p\ne0$, then $x=y$ ([[lem-int-cancellation]]).

[F4] A prime satisfies $p>1$, hence $p>0$ and $p\ne0$ ([[def-prime]]).

## Proof

**Proof technique:** direct.

1.1 If $0\le r<p^{k-1}$, then $0\le pr<p\cdot p^{k-1}=p^k$, and $p\mid pr$. Thus the displayed rule has values in the stated codomain. [F1, F4, algebra]

1.2 The rule is injective: $pr=pr'$ implies $r=r'$ because $p\ne0$. [L1, F4]

1.3 It is surjective: if $0\le s<p^k$ and $p\mid s$, write $s=pr$. Since $p>0$, the inequalities give $0\le r<p^{k-1}$ after using $p^k=pp^{k-1}$. [F1, F4, algebra, choose]

2.1 Steps 1.1, 1.2 and 1.3 give a bijection, and [F2] transports the domain cardinality $p^{k-1}$ to the codomain. [step 1.1, step 1.2, step 1.3, F2, F3] ∎
