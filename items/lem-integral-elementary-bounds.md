---
id: lem-integral-elementary-bounds
kind: lemma
title: "If $m \\le f \\le M$ on $[a,b]$ then $m(b-a) \\le L(f,P) \\le \\underline{\\int_a^b} f \\le \\overline{\\int_a^b} f \\le U(f,P) \\le M(b-a)$ for every partition $P$; in particular every constant function is integrable, with $\\int_a^b c = c(b-a)$"
status: draft
origin: session
deps: [def-darboux-sums, def-darboux-integral, def-partition-and-refinement, lem-finite-sum-laws, def-finite-sum, def-bounded-set, def-infimum, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules, def-max-min, lem-of-abs-value, def-interval]
justified_by: []
aliases: []
landmark: false
short: "elementary bounds on the integral"
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $a < b$ be reals and let $f : [a,b] \to \mathbb{R}$ satisfy

$$m \;\le\; f(x) \;\le\; M \qquad \text{for every } x \in [a,b],$$

with $m, M$ real. Then $f$ is bounded ([[def-bounded-set]]), so its Darboux sums
and integrals are defined ([[def-darboux-sums]], [[def-darboux-integral]]), and
for **every** partition $P$ of $[a,b]$ ([[def-partition-and-refinement]])

$$m(b-a) \;\le\; L(f,P) \;\le\; \underline{\int_a^b} f \;\le\; \overline{\int_a^b} f \;\le\; U(f,P) \;\le\; M(b-a) .$$

In particular, taking $f$ to be the constant function with value $c$:

$$\int_a^b c \;=\; c\,(b-a) ,$$

the constant function being integrable, with $L(f,P) = U(f,P) = c(b-a)$ for
every partition $P$.

## Facts & Assumptions

**Given:** Reals $a < b$, reals $m \le M$, and $f : [a,b] \to \mathbb{R}$ with $m \le f(x) \le M$ for every $x \in [a,b]$. Let $P = (n,t)$ be a partition of $[a,b]$, with subintervals $I_i$ and lengths $\Delta_i$ for $i < n$.

[L1] $\sum_{i<n}\Delta_i = b - a$, every $\Delta_i > 0$, and $n \ge 1$; each $I_i$ is a nonempty subset of $[a,b]$ ([[def-partition-and-refinement]], [[def-interval]]).

[L2] $m_i = \inf f[I_i]$ and $M_i = \sup f[I_i]$ exist, $L(f,P) = \sum_{i<n}m_i\Delta_i$ and $U(f,P) = \sum_{i<n}M_i\Delta_i$, and $m_i \le f(x) \le M_i$ for $x \in I_i$ ([[def-darboux-sums]]).

[L3] $L(f,P) \le \underline{\int_a^b} f \le \overline{\int_a^b} f \le U(f,P)$ for every partition $P$; $f$ is integrable exactly when the two integrals are equal, and then $\int_a^b f$ is their common value ([[def-darboux-integral]]).

[L4] An infimum is the greatest lower bound and a supremum the least upper bound; a set with a single element has that element as both ([[def-infimum]], [[def-complete-ordered-field]], [[def-max-min]]).

[L5] Finite sums: scaling, monotonicity in the terms, and $\sum_{i<n}\lambda\,\Delta_i = \lambda\sum_{i<n}\Delta_i$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L6] Ordered-field arithmetic: multiplying an inequality by a positive quantity preserves it, adding a constant preserves it, and the order is transitive; $|x| \le \max\{|m|,|M|\}$ whenever $m \le x \le M$ ([[lem-of-add-order]], [[lem-of-sign-rules]], [[lem-of-abs-value]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 $f$ is bounded: $|f(x)| \le \max\{|m|,|M|\}$ for every $x \in [a,b]$ by [L6], so the Darboux sums and integrals of [L2] and [L3] are defined. [given, L6]

1.2 For every $i < n$: $m$ is a lower bound of $f[I_i]$ and $M$ an upper bound, since $I_i \subseteq [a,b]$; the set $f[I_i]$ is nonempty by [L1]. Hence $m \le m_i$ and $M_i \le M$ by [L4]. [given, L1, L2, L4]

1.3 **The constant case, treated on its own.** Suppose in addition that $f$ is the constant function with value $c$, that is $f(x) = c$ for every $x \in [a,b]$; the general argument below does not use this supposition. Then $f[I_i] = \{c\}$ for every $i < n$ by [L1], so $m_i = M_i = c$ by [L4], and $L(f,P) = U(f,P) = \sum_{i<n} c\,\Delta_i = c(b-a)$ by [L5] and [L1]. [L1, L2, L4, L5]

2.1 $L(f,P) \ge m(b-a)$: by step 1.2 and $\Delta_i > 0$ one has $m_i\Delta_i \ge m\Delta_i$ for every $i < n$, so monotonicity and scaling in [L5] give $L(f,P) \ge \sum_{i<n} m\,\Delta_i = m\sum_{i<n}\Delta_i = m(b-a)$ by [L1]. [step 1.2, L1, L5, L6]

2.2 $U(f,P) \le M(b-a)$: the same argument with $M_i \le M$ gives $U(f,P) \le \sum_{i<n}M\,\Delta_i = M(b-a)$. [step 1.2, L1, L5, L6]

3.1 Combining steps 2.1 and 2.2 with the chain of [L3] gives the displayed five-term inequality for every partition $P$. [step 2.1, step 2.2, L3]

4.1 Hence, still under the supposition of step 1.3 that $f$ is constant with value $c$, the set of lower sums and the set of upper sums are both $\{c(b-a)\}$, so $\underline{\int_a^b} f = \overline{\int_a^b} f = c(b-a)$ by [L4], $f$ is integrable, and $\int_a^b c = c(b-a)$ by [L3]. [step 1.3, L3, L4] ∎

## Remarks

- **The five-term chain is the only estimate most of this page needs.** Every integrability proof below produces one partition and controls $U(f,P) - L(f,P)$; the chain then locates both integrals inside an interval of that length, and [[thm-riemann-criterion]] turns the observation into an equivalence.

- **The bound is attained exactly by the constants.** If $m < M$ the outer inequalities are strict for a suitable $f$, and the constant case shows they cannot be improved: there $L(f,P) = m(b-a)$ and $U(f,P) = M(b-a)$ coincide with the extreme members of the chain. This is also the first integral this page computes, and it is used to normalise every later computation.

- **Nonnegativity, as a special case.** If $f \ge 0$ on $[a,b]$ then $m$ may be taken to be $0$, so $\int_a^b f \ge 0$ whenever the integral exists. A nonnegative integrand with vanishing integral need not vanish, however; that is [[fs-nonnegative-integrable-with-zero-integral-vanishes]].
