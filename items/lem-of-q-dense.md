---
id: lem-of-q-dense
kind: lemma
title: "ℚ is dense in every Archimedean ordered field"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-archimedean-field, lem-of-q-embeds, lem-of-naturals-positive, lem-of-inverse-positive, lem-of-sign-rules, thm-well-ordering-principle, lem-nat-embeds-int, def-int-order]
aliases: []
landmark: false
short: "ℚ dense"
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "University of Pennsylvania Math 360 notes: Ordered fields"
      url: "https://www2.math.upenn.edu/~zhaotwei/math_360_fall_2012/math_360_fall_2012_description.pdf"
pipeline_run: null
---

## Statement

Let $F$ be an Archimedean ordered field ([[def-archimedean-field]]) and let
$\iota : \mathbb{Q} \to F$ be the canonical embedding ([[lem-of-q-embeds]]). Then
$\iota(\mathbb{Q})$ is dense in $F$: for any $x < y$ in $F$ there is a rational
$q$ with $x < \iota(q) < y$.

## Facts & Assumptions

**Given:** An Archimedean ordered field $F$ with canonical embedding $\iota : \mathbb{Q} \to F$, and elements $x < y$ of $F$.

[L1] Archimedean property: for every $w \in F$ there is $n \ge 1$ with $w < n \cdot 1_F$ ([[def-archimedean-field]]).

[L2] $\iota$ is an order-preserving field homomorphism with $\iota(m/n) = \iota(m)\,(n \cdot 1_F)^{-1}$ for $n \ge 1$ ([[lem-of-q-embeds]]).

[L3] Canonical naturals: $n \cdot 1_F > 0$ for $n \ge 1$, and $(m+n) \cdot 1_F = m \cdot 1_F + n \cdot 1_F$ ([[lem-of-naturals-positive]]).

[L4] If $a > 0$ then $a^{-1} > 0$ ([[lem-of-inverse-positive]]).

[L5] Sign rules: for $c > 0$ one has $a < b$ iff $ac < bc$, and products of positives are positive ([[lem-of-sign-rules]]).

[L6] Every nonempty $T \subseteq \mathbb{Z}$ that is bounded below has a least element: if $k > -M$ for every $k \in T$ then $\{k + M : k \in T\}$ is a nonempty set of naturals, which has a least element, and subtracting $M$ returns the least element of $T$ ([[thm-well-ordering-principle]], [[lem-nat-embeds-int]], [[def-int-order]]).

## Proof

**Proof technique:** direct.

1.1 Since $x < y$, the element $y - x > 0$, so it is nonzero and its inverse $(y - x)^{-1}$ exists in the field $F$; by the Archimedean property applied to $(y - x)^{-1}$, choose $n \ge 1$ with $(y - x)^{-1} < n \cdot 1_F$. [L1, L4, choose]

1.2 By [L1] applied to $(n \cdot 1_F)\,x$ there is a natural $N$ with $(n \cdot 1_F)\,x < N \cdot 1_F$, so the set $T = \{\, k \in \mathbb{Z} : k \cdot 1_F > (n \cdot 1_F)\,x \,\}$ is nonempty ($N \in T$); by [L1] applied to $-(n \cdot 1_F)\,x$ there is a natural $M$ with $-(n \cdot 1_F)\,x < M \cdot 1_F$, so every $k \in T$ satisfies $k \cdot 1_F > (n \cdot 1_F)\,x > -M \cdot 1_F$, hence $k > -M$ (were $k \le -M$, monotonicity of $k \mapsto k \cdot 1_F = \iota(k)$ on $\mathbb{Z}$, which is [L2], would force $k \cdot 1_F \le -M \cdot 1_F$, against $k \cdot 1_F > -M \cdot 1_F$), so $T$ is bounded below by $-M$, and therefore has a least element $m$. [L1, L2, L3, L6, choose]

2.1 Multiplying $(y - x)^{-1} < n \cdot 1_F$ by the positive $(n \cdot 1_F)^{-1}(y - x)$ gives $(n \cdot 1_F)^{-1} < y - x$. [step 1.1, L4, L5]

2.2 By minimality of $m$, $(m-1) \cdot 1_F \le (n \cdot 1_F)\,x < m \cdot 1_F$. [step 1.2]

3.1 Set $q = m/n \in \mathbb{Q}$, so $\iota(q) = \iota(m)(n \cdot 1_F)^{-1}$; dividing $(n \cdot 1_F)\,x < m \cdot 1_F$ by the positive $n \cdot 1_F$ gives $x < \iota(m)(n \cdot 1_F)^{-1} = \iota(q)$. [step 2.2, L2, L4, L5]

3.2 From $(m-1) \cdot 1_F = m \cdot 1_F - 1_F \le (n \cdot 1_F)\,x$, dividing by the positive $n \cdot 1_F$ gives $\iota(q) - (n \cdot 1_F)^{-1} \le x$, that is $\iota(q) \le x + (n \cdot 1_F)^{-1}$. [step 2.2, L3, L4, L5]

4.1 Combining with 2.1, $\iota(q) \le x + (n \cdot 1_F)^{-1} < x + (y - x) = y$. [step 3.2, step 2.1]

5.1 Therefore $x < \iota(q) < y$ with $q = m/n \in \mathbb{Q}$, so $\iota(\mathbb{Q})$ is dense in $F$. [step 3.1, step 4.1] ∎
