---
id: lem-rat-positive-denominator
kind: lemma
title: "Every rational has a positive-denominator representative"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-rationals, thm-int-comm-ring, thm-int-ordered-ring, def-rat-order]
aliases: []
landmark: false
short: "rep with $b>0$ exists"
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Rational number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rational_number"
    - title: "L. S. Krapp, Constructions of the real numbers: a set theoretical approach (Oxford, 2014)"
      url: "https://www.math.uni-konstanz.de/~krapp/research/Constructions_of_the_real_numbers.pdf"
pipeline_run: null
proof_strategy: direct
---

## Statement

Every rational has a representative $(a,b)$ with $b > 0$: for a class $[(a,b)]$
(where $b \ne 0$), if $b > 0$ take $(a,b)$ itself, and if $b < 0$ then
$(a,b) \sim (-a,-b)$ with $-b > 0$. Consequently the order on $\mathbb{Q}$
([[def-rat-order]]), which is stated on positive-denominator representatives, is
defined on all of $\mathbb{Q}$.

## Facts & Assumptions

**Given:** A rational represented by $(a,b)$ with $a, b \in \mathbb{Z}$, $b \ne 0$, and the relation $(x,y) \sim (z,w) \iff x w = z y$ ([[def-rationals]]).

[L1] Trichotomy in $\mathbb{Z}$: each nonzero integer is either $> 0$ or $< 0$, and $b < 0$ iff $-b > 0$ ([[thm-int-ordered-ring]]).

[L2] In the commutative ring $\mathbb{Z}$, $a(-b) = -(ab) = (-a)b$ (both products are the additive inverse of $ab$, by distributivity) ([[thm-int-comm-ring]]).

## Proof

**Proof technique:** direct.

1.1 Since $b \ne 0$, by trichotomy [L1] either $b > 0$ or $b < 0$. [given, L1]

2.1 If $b > 0$, the representative $(a,b)$ already has positive denominator. [step 1.1]

2.2 If $b < 0$, then $-b > 0$ by [L1], and $a(-b) = (-a)b$ by [L2] is exactly the defining relation $(a,b) \sim (-a,-b)$; so $(-a,-b)$ represents the same class and has positive denominator $-b$. [step 1.1, L1, L2]

3.1 In either case the class has a representative with positive denominator; hence the order [[def-rat-order]], stated on such representatives, is defined for every rational. [step 2.1, step 2.2] ∎
