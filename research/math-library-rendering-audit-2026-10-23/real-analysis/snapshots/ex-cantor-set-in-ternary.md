---
id: ex-cantor-set-in-ternary
kind: example
title: "Which points of $[0,1]$ lie in the Cantor set, read off their ternary expansions, with $1/4$ worked out"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-cantor-set-ternary-description, def-cantor-set, thm-geometric-series, def-series, def-integer-power, lem-power-laws, lem-series-linearity, thm-nonnegative-series-bounded-partial-sums, def-sequence, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
    - title: "Ternary numeral system (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ternary_numeral_system"
    - title: "Stanford Math 205A, Homework 1"
      url: "https://math.stanford.edu/~ryzhik/STANFORD/STANF205-11/hw205-11-1.pdf"
pipeline_run: null
---

## Example

By [[thm-cantor-set-ternary-description]] a real $x$ lies in the Cantor set $C$
exactly when

$$x \;=\; \Phi(a) \;=\; \sum_{k=0}^{\infty} a_k 3^{-k-1} \qquad \text{for some sequence } a \text{ with every } a_k \in \{0,2\},$$

and that sequence is then unique. The membership test is therefore: *$x$ has a
ternary expansion using only the digits $0$ and $2$.* Six points are worked out
here.

| $x$ | digit sequence $\Phi^{-1}(x)$ |
|---|---|
| $0$ | $0,0,0,0,\dots$ |
| $1$ | $2,2,2,2,\dots$ |
| $1/3$ | $0,2,2,2,\dots$ |
| $2/3$ | $2,0,0,0,\dots$ |
| $1/9$ | $0,0,2,2,2,\dots$ |
| $1/4$ | $0,2,0,2,0,2,\dots$ |

The last line is the interesting one: the digits of $1/4$ alternate for ever, so
$1/4$ lies in $C$ without being an endpoint of any interval removed in the
construction ([[cex-cantor-point-that-is-not-an-endpoint]]).

## Facts & Assumptions

**Given:** The Cantor set $C$, the set $D$ of $\{0,2\}$-valued sequences and the bijection $\Phi : D \to C$ of [[thm-cantor-set-ternary-description]]. Write $\sigma a$ for the shifted sequence $(\sigma a)_k = a_{k+1}$.

[L1] $\Phi$ is a bijection from $D$ onto $C$ with $\Phi(a) = \sum_{k \ge 0} a_k 3^{-k-1}$, and the series converges for every $a \in D$ ([[thm-cantor-set-ternary-description]], [[def-series]], [[def-sequence]]).

[L2] $\sum_{k=0}^{\infty} r^{k} = 1/(1-r)$ for $|r| < 1$; in particular $\sum_{k \ge 0} 3^{-k} = 3 \cdot 2^{-1}$ and hence $\sum_{k \ge m} 2 \cdot 3^{-k-1} = 3^{-m}$; convergent series add and scale termwise, and the tail of a convergent series is again convergent with $\sum_{k \ge 0} t_k = t_0 + \sum_{k \ge 1} t_k$ ([[thm-geometric-series]], [[lem-series-linearity]], [[def-series]], [[thm-nonnegative-series-bounded-partial-sums]], [[def-integer-power]], [[lem-power-laws]]).

[L4] Ordered-field arithmetic: $0 < 1$, so $3 > 0$, $3^{-1} > 0$, $8 > 0$; adding a constant and multiplying by a positive preserve an inequality; the order is total and transitive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Verification

**Proof technique:** direct.

1.1 **The shift identity.** For $a \in D$, $\Phi(a) = a_0 \cdot 3^{-1} + 3^{-1}\Phi(\sigma a)$: by [L2] the series splits as $\Phi(a) = a_0 3^{-1} + \sum_{k \ge 1} a_k 3^{-k-1}$, and $\sum_{k \ge 1}a_k 3^{-k-1} = \sum_{j \ge 0} a_{j+1} 3^{-j-2} = 3^{-1}\sum_{j \ge 0}a_{j+1}3^{-j-1} = 3^{-1}\Phi(\sigma a)$ by [L2] and [L4]. [given, L1, L2, L4]

1.2 **The constant and eventually constant sequences.** By [L2], $\Phi(0,0,0,\dots) = 0$ and $\Phi(2,2,2,\dots) = \sum_{k \ge 0}2 \cdot 3^{-k-1} = 3^{0} = 1$. Likewise $\Phi(0,2,2,2,\dots) = 0 + \sum_{k \ge 1}2\cdot3^{-k-1} = 3^{-1} = 1/3$, $\Phi(2,0,0,\dots) = 2 \cdot 3^{-1} = 2/3$, and $\Phi(0,0,2,2,2,\dots) = \sum_{k \ge 2}2 \cdot 3^{-k-1} = 3^{-2} = 1/9$. [L1, L2]

2.1 **The alternating sequence gives $1/4$.** Let $a$ be the sequence with $a_k = 0$ for even $k$ and $a_k = 2$ for odd $k$, so $a \in D$ and $\sigma(\sigma a) = a$. Applying step 1.1 twice, $\Phi(a) = 0 \cdot 3^{-1} + 3^{-1}\Phi(\sigma a)$ and $\Phi(\sigma a) = 2 \cdot 3^{-1} + 3^{-1}\Phi(a)$, so $\Phi(a) = 3^{-1}\big(2 \cdot 3^{-1} + 3^{-1}\Phi(a)\big) = 2 \cdot 9^{-1} + 9^{-1}\Phi(a)$; hence $(1 - 9^{-1})\Phi(a) = 2 \cdot 9^{-1}$, that is $8 \cdot 9^{-1}\Phi(a) = 2 \cdot 9^{-1}$ and $\Phi(a) = 2 \cdot 8^{-1} = 1/4$, by [L4]. [step 1.1, L4]

3.1 So all six points of the table lie in $C$ by [L1], with the digit sequences shown, and the sequences are the only ones representing them because $\Phi$ is injective by [L1]. The point $1/4$ has a digit sequence that is not eventually constant, since it takes both values $0$ and $2$ at arbitrarily large indices. [step 1.2, step 2.1, L1] ∎

## Remarks

- **The digit $1$ is what the test forbids.** $1/3$ has the ternary expansion $0.1000\dots$ as well as $0.0222\dots$, and it is the second that witnesses $1/3 \in C$; the test asks for the *existence* of an expansion with digits in $\{0,2\}$, not for every expansion to have that form. By contrast $1/2$ is not in $C$ at all, since $C \subseteq C_1 = [0,\tfrac13] \cup [\tfrac23,1]$ ([[def-cantor-set]]) while $\tfrac13 < \tfrac12 < \tfrac23$.

- **The construction and the digits match stage by stage.** $C_1$ keeps the points whose first digit can be taken $0$ or $2$, $C_2$ those whose first two digits can be, and so on; that correspondence is the content of [[thm-cantor-set-ternary-description]] and is what makes the table computable without ever drawing the intervals.

- **$1/4$ is not special.** Every point of $C$ whose digit sequence is not eventually constant fails to be an endpoint, and those points are the vast majority: the eventually constant sequences are at most countable while $C$ is not ([[thm-cantor-set-properties]]).
