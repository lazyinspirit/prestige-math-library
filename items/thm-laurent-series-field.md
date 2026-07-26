---
id: thm-laurent-series-field
kind: theorem
title: "$\\mathbb{R}((t^{-1}))$ is a field: every nonzero formal Laurent series is invertible"
status: published
origin: session
deps: [def-formal-laurent-series, lem-laurent-series-ring, lem-laurent-valuation, def-field, thm-reals-ordered-field, thm-recursion, thm-induction-principle, def-natural-numbers]
aliases: []
landmark: true
short: "$K$ is a field"
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Formal power series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Formal_power_series"
    - title: "Hahn series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hahn_series"
pipeline_run: null
---

## Statement

$K = \mathbb{R}((t^{-1}))$ ([[def-formal-laurent-series]]) is a field
([[def-field]]): it is a commutative ring with $1_K \ne 0_K$, and every
$f \in K$ with $f \ne 0_K$ has a multiplicative inverse in $K$.

Explicitly, if $p = v(f)$ and $c = \operatorname{lc}(f)$, then
$f = \iota(c)\, t^{-p}\,(1_K - u)$ for the element $u \in K$ given by
$u(j) = -c^{-1}f(p+j)$ for $j \ge 1$ and $u(j) = 0$ for $j \le 0$, and
$f^{-1} = \iota(c^{-1})\, t^{p}\, g$, where
$g \in K$ vanishes at every index $< 0$ and is given at $k \ge 0$ by
$g(k) = \sum_{n=0}^{k} (u^{n})(k)$.

## Scratch

The identity behind the construction is the geometric series
$(1-u)^{-1} = 1 + u + u^{2} + \cdots$. It cannot be used as written, because $K$
has no notion of an infinite sum. What replaces it is the observation that
$u^{n}$ vanishes at every index below $n$, so at any single index $k$ only the
terms $n \le k$ can contribute; the displayed formula for $g(k)$ is that finite
truncation, and the support of the result is bounded below because every
$u^{n}$ vanishes below $0$.

## Facts & Assumptions

**Given:** A nonzero $f \in K$; write $p := v(f) \in \mathbb{Z}$ and $c := \operatorname{lc}(f) \in \mathbb{R} \setminus \{0\}$, so that $f(k) = 0$ for every $k < p$ and $f(p) = c$.

[L1] $K$ is the set of functions $\mathbb{Z} \to \mathbb{R}$ whose support is bounded below; $t^{-a}$ is $1$ at index $a$ and $0$ elsewhere; $\iota(c)$ is $c$ at index $0$ and $0$ elsewhere; for nonzero $h \in K$ one has $h(k) = 0$ for $k < v(h)$ and $h(v(h)) = \operatorname{lc}(h) \ne 0$ ([[def-formal-laurent-series]]).

[L2] $K$ is a commutative ring with identity $1_K \ne 0_K$; $(h_1h_2)(k) = \sum_{i+j=k} h_1(i)h_2(j)$ is a finite sum; if $h_1$ vanishes at every index $< a$ and $h_2$ at every index $< b$ then $h_1h_2$ vanishes at every index $< a + b$; $(t^{-a}h)(k) = h(k-a)$ and hence $t^{-a}t^{-b} = t^{-(a+b)}$; and $(\iota(c)h)(k) = c\,h(k)$ ([[lem-laurent-series-ring]]).

[L3] A product of two nonzero elements of $K$ is nonzero ([[lem-laurent-valuation]]).

[L4] $\mathbb{R}$ is a field: every nonzero $c$ has an inverse $c^{-1}$ with $cc^{-1} = 1$, and a finite sum of reals may be reordered and regrouped freely ([[def-field]], [[thm-reals-ordered-field]]).

[L5] Recursion on $\mathbb{N}$: for a set $A$, an element $a \in A$ and a function $F : A \to A$ there is a unique $\Gamma : \mathbb{N} \to A$ with $\Gamma(0) = a$ and $\Gamma(\sigma(n)) = F(\Gamma(n))$ ([[thm-recursion]], [[def-natural-numbers]]).

[L6] Induction: a property holding at $0$ and inherited from $n$ to $\sigma(n)$ holds at every natural number ([[thm-induction-principle]]).

[L7] A field is a commutative ring with $0 \ne 1$ in which multiplication restricted to the nonzero elements is an abelian group, that is, in which the nonzero elements are closed under multiplication and each has an inverse ([[def-field]]).

## Proof

**Proof technique:** constructive.

1.1 Define $u : \mathbb{Z} \to \mathbb{R}$ by $u(j) := -c^{-1} f(p + j)$ for $j \ge 1$ and $u(j) := 0$ for $j \le 0$. Then $u$ vanishes at every index $< 1$, so its support is bounded below and $u \in K$. [given, L1, L4, construct]

1.2 By [L5] with $A = K$, $a = 1_K$ and $F(h) = hu$ there is a family $(u^{n})_{n \in \mathbb{N}}$ in $K$ with $u^{0} = 1_K$ and $u^{\sigma(n)} = u^{n} u$. [L2, L5, construct]

2.1 For every $k \in \mathbb{Z}$, $\bigl(\iota(c)\,t^{-p}\,(1_K - u)\bigr)(k) = c\,(1_K - u)(k - p)$ by [L2]; this is $0$ when $k < p$ because $1_K - u$ vanishes at every negative index, it is $c$ when $k = p$, and it is $c \cdot \bigl(-u(k-p)\bigr) = c c^{-1} f(k) = f(k)$ when $k > p$. Comparing with $f(k) = 0$ for $k < p$ and $f(p) = c$, we get $f = \iota(c)\, t^{-p}\,(1_K - u)$. [step 1.1, given, L1, L2, L4]

2.2 For every $n \in \mathbb{N}$, $u^{n}$ vanishes at every index $< n$: at $n = 0$ this says $1_K$ vanishes at every negative index, which holds by [L1]; and if $u^{n}$ vanishes at every index $< n$ then, since $u$ vanishes at every index $< 1$ by [step 1.1], the product $u^{\sigma(n)} = u^{n}u$ vanishes at every index $< n + 1$ by [L2]. [step 1.1, step 1.2, L1, L2, L6]

3.1 Define $g : \mathbb{Z} \to \mathbb{R}$ by $g(k) := \sum_{n=0}^{k} (u^{n})(k)$ for $k \ge 0$ and $g(k) := 0$ for $k < 0$; each value is a finite sum of reals, and $g$ vanishes at every index $< 0$, so $g \in K$. [step 2.2, L1, L4, construct]

4.1 Fix $k \ge 1$. In $(ug)(k) = \sum_{i+j=k} u(i)g(j)$ a term can be nonzero only when $i \ge 1$ and $j \ge 0$, hence only for $1 \le i \le k$ and $j = k - i$; so $(ug)(k) = \sum_{i=1}^{k} u(i)\, g(k-i) = \sum_{i=1}^{k} u(i) \sum_{n=0}^{k-i} (u^{n})(k-i)$. [step 1.1, step 3.1, L1, L2]

4.2 For $k \le 0$ one has $(ug)(k) = 0$, since $u$ vanishes at every index $< 1$ and $g$ at every index $< 0$, so every pair $(i,j)$ with $i + j = k$ has $u(i)g(j) = 0$. [step 1.1, step 3.1, L1, L2]

5.1 In the inner sum of [step 4.1] the terms with $k - i < n \le k-1$ vanish by [step 2.2], so the inner sum may be extended to $n = 0, \dots, k-1$ without changing its value; interchanging the two finite sums gives $(ug)(k) = \sum_{n=0}^{k-1} \sum_{i=1}^{k} u(i)\,(u^{n})(k-i)$. [step 2.2, step 4.1, L4]

6.1 For each $n$, $\sum_{i=1}^{k} u(i)(u^{n})(k-i) = \sum_{i+j=k} u(i)(u^{n})(j) = (u\,u^{n})(k) = (u^{\sigma(n)})(k)$, because a term of the full convolution can be nonzero only for $i \ge 1$ and $j \ge 0$; hence $(ug)(k) = \sum_{n=0}^{k-1} (u^{\sigma(n)})(k) = \sum_{n=1}^{k} (u^{n})(k)$ for every $k \ge 1$. [step 1.2, step 2.2, step 5.1, L2]

7.1 For $k \ge 1$, $\bigl((1_K - u)g\bigr)(k) = g(k) - (ug)(k) = \sum_{n=0}^{k}(u^{n})(k) - \sum_{n=1}^{k}(u^{n})(k) = (u^{0})(k) = 1_K(k)$; for $k = 0$, $g(0) = (u^{0})(0) = 1$ and $(ug)(0) = 0$, so the value is $1 = 1_K(0)$; and for $k < 0$ both $g(k)$ and $(ug)(k)$ are $0$, as is $1_K(k)$. Hence $(1_K - u)g = 1_K$. [step 3.1, step 4.2, step 6.1, L1, L2]

8.1 Using [step 2.1], [L2] and $cc^{-1} = 1$, one computes $f \cdot \bigl(\iota(c^{-1})\,t^{p}\,g\bigr) = \iota(c)\iota(c^{-1})\, t^{-p}t^{-(-p)}\,(1_K - u)g = 1_K \cdot 1_K \cdot 1_K = 1_K$, so $\iota(c^{-1}) t^{p} g \in K$ is a multiplicative inverse of $f$. [step 2.1, step 7.1, L2, L4]

9.1 $K$ is a commutative ring with $1_K \ne 0_K$ by [L2], its nonzero elements are closed under multiplication by [L3], and by [step 8.1] every nonzero element has an inverse; so $K$ satisfies the field axioms of [L7] and the construction is complete. [step 8.1, L2, L3, L7, discharge-construct] ∎

## Remarks

- **Where support-boundedness is really used.** Twice, and in different ways.
  It makes each coefficient of a product a finite sum, which is what lets
  $(u^{n})(k)$ be spoken of at all; and it is what has to be re-established for
  the constructed inverse, which is why $g$ was *defined* to vanish at every
  negative index rather than found to. The verification that this definition is
  consistent with $(1_K - u)g = 1_K$ is [step 7.1], and it is exactly the point
  at which an infinite geometric series would have had to be summed.

- **The normalisation is forced, and that is why the recipe is explicit.**
  Suppose $f = \iota(c')t^{-p'}(1_K - w)$ with $c' \ne 0$ and $w$ vanishing at
  every index $\le 0$. Evaluating as in [step 2.1] gives
  $f(k) = c'(1_K - w)(k - p')$, which is $0$ for $k < p'$ and equals $c'$ at
  $k = p'$; so $p' = v(f)$ and $c' = \operatorname{lc}(f)$, and then
  $w(j) = -c'^{-1}f(p'+j)$ for $j \ge 1$. The factorisation used in the proof is
  therefore the only one of its shape, and the formula for the inverse is a
  recipe rather than a choice.
