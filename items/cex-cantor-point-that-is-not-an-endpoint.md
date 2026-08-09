---
id: cex-cantor-point-that-is-not-an-endpoint
kind: counterexample
title: "$1/4$ lies in the Cantor set and is the endpoint of no removed interval, so the endpoints do not exhaust it"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [fs-cantor-set-countable, ex-cantor-set-in-ternary, thm-cantor-set-ternary-description, def-cantor-set, def-integer-power, lem-power-laws, def-series, thm-geometric-series, lem-series-linearity, thm-nonnegative-series-bounded-partial-sums, lem-geometric-sequence-null, def-real-limit, def-interval, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
cx_machine_verified: false
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
    - title: "Ternary numeral system (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ternary_numeral_system"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** the Cantor set $C$ consists of the endpoints of the removed
intervals and is therefore at most countable
([[fs-cantor-set-countable]]).

The witness is $x_0 := 1/4$. It lies in $C$, its ternary digit sequence being the
alternating sequence $(0,2,0,2,\dots)$ ([[ex-cantor-set-in-ternary]]), and it is
the endpoint of no interval removed in the construction. Here, as everywhere on
this page, *$u$ is an endpoint of a removed interval* means that $u \in C$ and
there is $v \ne u$ with the open interval between $u$ and $v$ disjoint from $C$;
that is exactly what "the interval between them was removed" says in the
vocabulary available. What is shown below is that $C$ meets every interval
$(x_0, x_0 + \delta)$ and every interval $(x_0 - \delta, x_0)$, for every real
$\delta > 0$, so no such $v$ exists on either side.

## Facts & Assumptions

**Given:** The Cantor set $C$, the set $D$ of $\{0,2\}$-valued sequences and the bijection $\Phi : D \to C$ of [[thm-cantor-set-ternary-description]]; the alternating sequence $a \in D$, with $a_j = 0$ for even $j$ and $a_j = 2$ for odd $j$; and $x_0 := \Phi(a)$.

[A1] The refuted claim: every point of $C$ is an endpoint of a removed interval, so $C$ is at most countable.

[L1] $\Phi$ is a bijection from $D$ onto $C$ with $\Phi(b) = \sum_{j \ge 0}b_j 3^{-j-1}$, and $x_0 = \Phi(a) = 1/4$ ([[thm-cantor-set-ternary-description]], [[ex-cantor-set-in-ternary]], [[def-cantor-set]]).

[L2] Geometric tails: $\sum_{j \ge m}2 \cdot 3^{-j-1} = 3^{-m}$; a series of nonnegative terms has nonnegative sum and all partial sums at most the sum; convergent series add and scale termwise; and a series splits as $\sum_{j \ge 0} t_j = \sum_{j<m} t_j + \sum_{j \ge m} t_j$ ([[thm-geometric-series]], [[thm-nonnegative-series-bounded-partial-sums]], [[lem-series-linearity]], [[def-series]], [[def-integer-power]], [[lem-power-laws]]).

[L3] $3^{-n} \to 0$, and convergence to $0$ is tested against rational $\varepsilon > 0$ ([[lem-geometric-sequence-null]], [[def-real-limit]]).

[L4] Ordered-field arithmetic: $0 < 1$, so $3 > 0$ and $3^{-1} > 0$ and $2 \cdot 3^{-1} < 1$; $3^{-p} \le 3^{-q}$ whenever $q \le p$, by induction from $0 < 3^{-1} < 1$; adding a constant and multiplying by a positive preserve an inequality ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]], [[def-interval]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Counterexample

**Proof technique:** direct.

1.1 By [L1] the point $x_0 = 1/4$ lies in $C$ and has digit sequence $a$, with $a_{2m} = 0$ and $a_{2m+1} = 2$ for every $m \in \mathbb{N}$. By [L2], for every $m$ one may split $\Phi(a) = \sum_{j<2m}a_j3^{-j-1} + \sum_{j \ge 2m}a_j3^{-j-1}$, and every tail $\sum_{j \ge p}a_j3^{-j-1}$ lies between $0$ and $3^{-p}$. [given, L1, L2]

2.1 **Points of $C$ immediately above $x_0$.** For $m \in \mathbb{N}$ let $b \in D$ agree with $a$ at every index $< 2m$, have $b_{2m} = 2$, and have $b_j = 0$ for $j > 2m$. Writing $P := \sum_{j<2m}a_j3^{-j-1}$, step 1.1 and [L2] give $\Phi(b) = P + 2 \cdot 3^{-2m-1}$ and $\Phi(a) = P + 0 + T$ with $0 \le T \le 3^{-2m-1}$, so $\Phi(b) - x_0 = 2 \cdot 3^{-2m-1} - T$ lies between $3^{-2m-1}$ and $2 \cdot 3^{-2m-1}$; in particular $\Phi(b) > x_0$ and $\Phi(b) - x_0 \le 2 \cdot 3^{-2m-1} < 3^{-2m} \le 3^{-m}$ by [L4]. And $\Phi(b) \in C$ by [L1]. [step 1.1, L1, L2, L4]

2.2 **Points of $C$ immediately below $x_0$.** For $m \in \mathbb{N}$ let $d \in D$ agree with $a$ at every index $< 2m+1$, have $d_{2m+1} = 0$, and have $d_j = 2$ for $j > 2m+1$. Writing $Q := \sum_{j<2m+1}a_j3^{-j-1}$, step 1.1 and [L2] give $\Phi(d) = Q + 0 + 3^{-2m-2}$ and $\Phi(a) = Q + 2 \cdot 3^{-2m-2} + T'$ with $0 \le T' \le 3^{-2m-2}$, so $x_0 - \Phi(d) = 3^{-2m-2} + T'$ lies between $3^{-2m-2}$ and $2 \cdot 3^{-2m-2}$; in particular $\Phi(d) < x_0$ and $x_0 - \Phi(d) < 3^{-2m-1} \le 3^{-m}$ by [L4]. And $\Phi(d) \in C$ by [L1]. [step 1.1, L1, L2, L4]

3.1 Let the real $\delta > 0$ be given; by [L3] fix $m$ with $3^{-m} < \delta$. Steps 2.1 and 2.2 then produce points of $C$ in $(x_0,\ x_0 + \delta)$ and in $(x_0 - \delta,\ x_0)$. Consequently, for every $v > x_0$ the interval $(x_0, v)$ meets $C$, and for every $u < x_0$ the interval $(u, x_0)$ meets $C$; so there is no $v \ne x_0$ with the open interval between $x_0$ and $v$ disjoint from $C$, and $x_0$ is the endpoint of no removed interval. Since $x_0 \in C$, the claim [A1] fails at $x_0$. [step 2.1, step 2.2, A1, L1, L3, L4] ∎

## Remarks

- **The digits diagnose it.** By the argument of
  [[thm-cantor-function-properties]] the two endpoints of a gap have digit
  sequences that are eventually $2$ and eventually $0$ respectively; the digits of
  $1/4$ alternate for ever, so it can be neither. The proof above avoids that
  route and exhibits the approximating points directly, which is what makes it
  self-contained.

- **How many such points there are.** The eventually constant sequences form an
  at most countable set, while $C$ is uncountable
  ([[thm-cantor-set-properties]]); so the endpoints are a vanishing part of $C$
  and the refuted claim fails not marginally but completely.

- **$1/4$ is also where the Cantor function takes the value $1/3$**
  ([[ex-cantor-function-values]]), and it is the one value in that example whose
  computation needs the whole infinite digit sequence rather than a finite
  initial segment.
