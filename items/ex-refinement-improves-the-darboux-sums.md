---
id: ex-refinement-improves-the-darboux-sums
kind: example
title: "One refinement worked out for $f(x) = x^{2}$ on $[0,1]$: adding the point $1/2$ to the trivial partition raises the lower sum from $0$ to $1/8$ and lowers the upper sum from $1$ to $5/8$"
status: draft
origin: session
deps: [lem-refinement-inequalities, def-darboux-sums, def-partition-and-refinement, lem-finite-sum-laws, def-finite-sum, def-integer-power, lem-power-monotone, def-interval, def-infimum, def-max-min, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: false
short: "a refinement worked out"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Darboux integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Darboux_integral"
pipeline_run: null
---

## Example

Let $f : [0,1] \to \mathbb{R}$ be $f(x) = x^{2}$ ([[def-integer-power]]). Let
$P_0$ be the trivial partition of $[0,1]$, with point set $\{0,1\}$, and let
$P_1 := P_0 + \tfrac12$ be the partition obtained by inserting the point $1/2$,
with point set $\{0, \tfrac12, 1\}$ ([[def-partition-and-refinement]]). Then

$$L(f,P_0) = 0, \qquad L(f,P_1) = \tfrac18, \qquad U(f,P_1) = \tfrac58, \qquad U(f,P_0) = 1 ,$$

so that

$$0 \;=\; L(f,P_0) \;\le\; L(f,P_1) \;\le\; U(f,P_1) \;\le\; U(f,P_0) \;=\; 1 ,$$

which is claim 1 of [[lem-refinement-inequalities]] with both inequalities
strict. The gap drops from $U(f,P_0) - L(f,P_0) = 1$ to
$U(f,P_1) - L(f,P_1) = \tfrac12$: exactly one refinement halves it, and
[[ex-integral-of-x-squared-from-the-definition]] shows the uniform partitions
drive it to $0$.

## Facts & Assumptions

**Given:** $f : [0,1] \to \mathbb{R}$ with $f(x) = x^{2}$; the partition $P_0 = (1,t)$ with $t_0 = 0$ and $t_k = 1$ for $k \ge 1$; and $P_1 = (2,s)$ with $s_0 = 0$, $s_1 = 1/2$ and $s_k = 1$ for $k \ge 2$.

[L1] Both $P_0$ and $P_1$ are partitions of $[0,1]$, and $P_1$ refines $P_0$, since $\operatorname{pts}(P_0) = \{0,1\} \subseteq \{0,\tfrac12,1\} = \operatorname{pts}(P_1)$; the subintervals of $P_0$ are $[0,1]$ with length $1$, and those of $P_1$ are $[0,\tfrac12]$ and $[\tfrac12,1]$, each of length $\tfrac12$ ([[def-partition-and-refinement]], [[def-interval]]).

[L2] $m_i = \inf f[I_i]$, $M_i = \sup f[I_i]$, $L(f,P) = \sum_{i<n}m_i\Delta_i$ and $U(f,P) = \sum_{i<n}M_i\Delta_i$ ([[def-darboux-sums]]).

[L3] For $0 \le a < b$ one has $a^{2} < b^{2}$, so on an interval $[c,d] \subseteq [0,1]$ with $c < d$ the function $f$ has least value $c^{2}$ and greatest value $d^{2}$, both attained; a set with a least element has it as its infimum and one with a greatest element has it as its supremum ([[lem-power-monotone]], [[def-integer-power]], [[def-infimum]], [[def-max-min]], [[def-complete-ordered-field]]).

[L4] If $P'$ refines $P$ then $L(f,P) \le L(f,P') \le U(f,P') \le U(f,P)$ ([[lem-refinement-inequalities]]).

[L5] Finite sums of one and of two terms: $\sum_{i<1}a_i = a_0$ and $\sum_{i<2}a_i = a_0 + a_1$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L6] Ordered-field arithmetic: $(\tfrac12)^{2} = \tfrac14$, $\tfrac14 \cdot \tfrac12 = \tfrac18$, $\tfrac18 + \tfrac12 = \tfrac58$, and $0 < \tfrac18 < \tfrac58 < 1$ ([[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Verification

**Proof technique:** direct.

1.1 For $P_0$ the single subinterval is $[0,1]$, so by [L3] $m_0 = 0^{2} = 0$ and $M_0 = 1^{2} = 1$, and by [L2] and [L5], $L(f,P_0) = 0 \cdot 1 = 0$ and $U(f,P_0) = 1 \cdot 1 = 1$. [given, L1, L2, L3, L5]

1.2 For $P_1$ the two subintervals are $[0,\tfrac12]$ and $[\tfrac12,1]$, each of length $\tfrac12$, so by [L3] the extreme values are $m_0 = 0$, $M_0 = (\tfrac12)^{2} = \tfrac14$ on the first and $m_1 = \tfrac14$, $M_1 = 1$ on the second. [given, L1, L3, L6]

2.1 Hence by [L2], [L5] and [L6], $L(f,P_1) = 0\cdot\tfrac12 + \tfrac14\cdot\tfrac12 = \tfrac18$ and $U(f,P_1) = \tfrac14\cdot\tfrac12 + 1\cdot\tfrac12 = \tfrac18 + \tfrac12 = \tfrac58$. [step 1.2, L2, L5, L6]

3.1 Comparing with step 1.1 and using [L6]: $L(f,P_0) = 0 < \tfrac18 = L(f,P_1)$ and $U(f,P_1) = \tfrac58 < 1 = U(f,P_0)$, while $L(f,P_1) = \tfrac18 < \tfrac58 = U(f,P_1)$. This is the chain of [L4] for the refinement $P_1$ of $P_0$, here with every inequality strict. [step 1.1, step 2.1, L1, L4, L6] ∎

## Remarks

- **Refinement is an improvement, never a deterioration.** That is the content of [[lem-refinement-inequalities]] and it is what makes [[def-darboux-integral]] well posed: the lower sums increase and the upper sums decrease, so the supremum of the one and the infimum of the other are the right things to take.

- **A single insertion cannot close the gap.** Here it halves it, from $1$ to $\tfrac12$, and no finite number of insertions makes $U - L$ zero for a non-constant $f$: each $M_i - m_i$ is positive whenever $f$ is non-constant on $I_i$. Integrability is the statement that the gap can be made arbitrarily small, not zero, which is exactly the form of [[thm-riemann-criterion]].

- **The values are exact rationals, and worth checking by hand.** The lower sum of the refined partition is $\tfrac18 = 0.125$ and the upper is $\tfrac58 = 0.625$; the true integral is $\tfrac13$ ([[ex-integral-of-x-squared-from-the-definition]]), which indeed lies strictly between them.
