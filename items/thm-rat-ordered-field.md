---
id: thm-rat-ordered-field
kind: theorem
title: "The rationals form a totally ordered field"
status: published
origin: session
deps: [def-rat-order, def-rat-operations, thm-rat-field, thm-int-ordered-ring, lem-int-cancellation]
aliases: []
landmark: true
short: "ℚ ordered field"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-24
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

The relation of [[def-rat-order]] is well defined and makes the field
$\mathbb{Q}$ ([[thm-rat-field]]) a totally ordered field: the order is total,
$x \le y$ implies $x + z \le y + z$, and $0 < x$, $0 < y$ imply
$0 < xy$.

## Facts & Assumptions

**Given:** Rationals $x = [(a,b)]$, $y = [(c,d)]$, $z = [(e,f)]$ with $b, d, f > 0$.

[L1] $\mathbb{Z}$ is a totally ordered commutative ring; positives are closed under products ([[thm-int-ordered-ring]]).

[L2] $\mathbb{Z}$ has no zero divisors; cancellation holds ([[lem-int-cancellation]]).

## Proof

**Proof technique:** direct.

1.1 Order-scaling in $\mathbb{Z}$: for $p > 0$, if $u < v$ then $0 < (v-u)p$, so $up < vp$; conversely if $up \le vp$ and $v < u$ then $vp < up$, impossible; hence $u \le v$ iff $up \le vp$. [L1, algebra]

1.2 Suppose $(a,b) \sim (a',b')$ and $(c,d) \sim (c',d')$ with $b', d' > 0$, i.e. $ab' = a'b$ and $cd' = c'd$; suppose also $ad \le cb$. [given]

1.3 Totality: $ad \le cb$ or $cb \le ad$ in $\mathbb{Z}$, so $x \le y$ or $y \le x$. [L1]

1.4 Antisymmetry: $ad \le cb$ and $cb \le ad$ give $ad = cb$, i.e. $x = y$ as classes. [L1]

1.5 Positive products: if $0 < x$ and $0 < y$ then $0 < a$ and $0 < c$, so $xy = [(ac,\, bd)]$ has $ac > 0$ and $bd > 0$, hence $0 < xy$. [L1]

1.6 For transitivity, let $z = [(e,f)]$ with $f > 0$ and suppose additionally $y \le z$, i.e. $cf \le ed$. [given]

2.1 Scaling the hypothesis $ad \le cb$ by $b'd' > 0$: $(ad)(b'd') \le (cb)(b'd')$. [step 1.1, step 1.2, L1]

2.2 Rearranging both sides with $ab' = a'b$ and $cd' = c'd$: $(ad)(b'd') = (ab')(dd') = (a'b)(dd') = (a'd')(bd)$ and $(cb)(b'd') = (cd')(bb') = (c'd)(bb') = (c'b')(bd)$. [step 1.2, L1]

2.3 Transitivity: from $ad \le cb$ and $cf \le ed$, scaling by $f > 0$ and $b > 0$ gives $(af)d = (ad)f \le (cb)f = (cf)b \le (ed)b = (eb)d$; cancelling $d > 0$ via order-scaling, $af \le eb$, i.e. $x \le z$. [step 1.1, step 1.2, step 1.6, L1]

2.4 Compatibility with addition: $x + z \le y + z$ reads $(af+eb)(df) \le (cf+ed)(bf)$, which expands to $(ad)f^2 + (eb)(df) \le (cb)f^2 + (ed)(bf)$; the second terms are equal, so this is $(ad)f^2 \le (cb)f^2$, equivalent by order-scaling with $f^2 > 0$ to $ad \le cb$, i.e. $x \le y$. [step 1.1, L1]

3.1 Combining: $(a'd')(bd) \le (c'b')(bd)$ with $bd > 0$, so $a'd' \le c'b'$ by order-scaling: the order is independent of representatives. [step 2.1, step 2.2, step 1.1, L1]

4.1 The order is well defined, total, compatible with addition, and positives are closed under multiplication: $\mathbb{Q}$ is a totally ordered field. [step 3.1, step 1.3, step 1.4, step 2.3, step 2.4, step 1.5] ∎
