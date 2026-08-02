---
id: fs-the-product-rule-makes-a-product-larger
kind: false-statement
title: "FALSE: for all sets $A$ and $B$ with $B$ having at least two elements, $A \\times B$ is strictly larger than $A$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-n-cross-n-countable, thm-product-rule, thm-cantor-powerset, def-countable,
       def-equinumerous, def-finite-cardinality, def-nat-power, def-natural-numbers,
       lem-nat-order-mult-compatible, lem-nat-order-add-compatible, lem-nat-discrete,
       lem-nat-mult-identity, lem-nat-mult-distributive, lem-nat-mult-commutative,
       def-nat-order, thm-omega-is-peano-system]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Rule of product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rule_of_product"
    - title: "Cardinality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinality"
    - title: "Cantor's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor%27s_theorem"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
pipeline_run: null
---

## Statement

**FALSE.** The statement

> for all sets $A$ and $B$ with $B$ having at least two elements,
> $A \prec A \times B$

that is, $A$ injects into $A \times B$ and is not equinumerous with it
([[def-equinumerous]]).

The claim generalises the finite product rule in the shape a reader expects: if
$\lvert A\rvert$ is multiplied by at least $2$, surely the product is bigger. It
fails at both ends of the range, trivially when $A$ is empty and substantially
when $A$ is infinite.

## Facts & Assumptions

**Given:** The sets $\mathbb{N}$ and $\varnothing$, and $2 = \{0,1\}$ ([[def-natural-numbers]]).

[L1] $\mathbb{N}\times\mathbb{N} \approx \mathbb{N}$: the map $J(m,n) = 2^{m}(2n+1)$ is a bijection of $\mathbb{N}\times\mathbb{N}$ onto $\mathbb{N}\setminus\{0\}$, and composing with the inverse of the successor gives a bijection onto $\mathbb{N}$ ([[thm-n-cross-n-countable]], [[def-countable]]).

[L2] $X \prec Y$ means $X \preceq Y$ and $X \not\approx Y$ ([[def-equinumerous]]).

[L3] $\lvert A \times B\rvert = \lvert A\rvert\lvert B\rvert$ for finite $A$, $B$ ([[thm-product-rule]]), and $\lvert X\rvert = 0$ exactly when $X = \varnothing$ ([[def-finite-cardinality]]).

[L4] Order arithmetic of $\mathbb{N}$: $p \le q$ implies $pk \le qk$; $x \le y$ implies $x + c \le y + c$; $a \ne 0$ is the same as $1 \le a$; $2 \cdot a = \sigma(1)\cdot a = 1\cdot a + a = a + a$ by the successor-left law; $1 \cdot a = a$; and multiplication is commutative ([[lem-nat-order-mult-compatible]], [[lem-nat-order-add-compatible]], [[lem-nat-discrete]], [[lem-nat-mult-identity]], [[lem-nat-mult-distributive]], [[lem-nat-mult-commutative]], [[def-nat-order]]).

[L5] $0 \ne 1$ in $\mathbb{N}$, so $\mathbb{N}$ has at least two elements ([[thm-omega-is-peano-system]]).

## Refutation

**Proof technique:** direct.

1.1 The substantial witness: $A = B = \mathbb{N}$. The set $\mathbb{N}$ has at least two elements by [L5], so the hypothesis on $B$ holds. By [L1] there is a bijection $\mathbb{N}\times\mathbb{N} \to \mathbb{N}$, so $A \approx A \times B$, and therefore $A \prec A\times B$ is false by [L2]. [given, L1, L2, L5]

1.2 A degenerate witness, which shows the claim fails even for finite $A$: take $A = \varnothing$ and $B = 2$. Then $A \times B = \varnothing$, since a pair in it would have a first coordinate in $\varnothing$; so $A \approx A \times B$ and again $A \prec A\times B$ fails. [given, L2, L3]

2.1 The corrected finite statement is true. Let $A$ be finite and **nonempty** and let $B$ be finite with $\lvert B\rvert \ge 2$; write $a := \lvert A\rvert \ge 1$ and $b := \lvert B\rvert$. Then $\lvert A\times B\rvert = ab \ge 2a = a + a \ge a + 1 > a$ by [L3] and [L4], using $1 \le a$. So a finite nonempty $A$ is strictly smaller than $A \times B$ in cardinality. Both hypotheses are needed, by step 1.1 and step 1.2 respectively. [step 1.1, step 1.2, L3, L4]

3.1 So the displayed statement is false, and what fails is not the product rule but its extension beyond the finite nonempty case: finiteness and nonemptiness of $A$ are exactly the hypotheses under which multiplying by a factor of at least $2$ increases the count. [step 1.1, step 1.2, step 2.1, L2, L3] ∎

## Remarks

- **The contrast with Cantor's theorem is the point.** $X \prec \mathcal{P}(X)$ holds for every set whatsoever ([[thm-cantor-powerset]]), finite or infinite; strict increase survives to the infinite case there and not here. Passing to the power set is a genuinely different operation from multiplying by a fixed set.

- **Read the cited theorem before using it.** [[thm-n-cross-n-countable]] states that $J(m,n) = 2^{m}(2n+1)$ is a bijection onto the **nonzero** naturals, and the bijection onto $\mathbb{N}$ is obtained by composing with the inverse of the successor. The statement used above is the one that item actually proves.
