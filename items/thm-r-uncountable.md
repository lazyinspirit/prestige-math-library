---
id: thm-r-uncountable
kind: theorem
title: "$\\mathbb{R}$ is uncountable (Cantor's nested intervals, 1874)"
status: draft
origin: session
deps: [def-countable, def-complete-ordered-field, thm-recursion, lem-sup-epsilon, lem-sup-unique, def-bounded-set, lem-countable-iff-surjection-from-n, lem-of-add-order, def-ordered-field, cor-of-one-positive, lem-of-inverse-positive, lem-of-sign-rules, thm-induction-principle, def-natural-numbers, def-nat-order, lem-nat-trichotomy]
justified_by: []
aliases: [thm-reals-uncountable]
landmark: true
short: "no surjection $\\mathbb N\\to\\mathbb R$"
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Cantor's first set theory article (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor%27s_first_set_theory_article"
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $\mathbb{R}$ be a complete ordered field ([[def-complete-ordered-field]]).
Then $\mathbb{R}$ is **uncountable** ([[def-countable]]): there is no surjection
$\mathbb{N} \to \mathbb{R}$, so $\mathbb{R}$ is neither finite nor countably
infinite.

The proof is Cantor's original argument of 1874, not the decimal diagonal.
Assuming a surjection $f : \mathbb{N} \to \mathbb{R}$, one builds nested closed
intervals $[a_n, b_n]$ with $a_n < b_n$ and $f(n) \notin [a_{n+1}, b_{n+1}]$, and
then $\sup\{a_n\}$ is a real number that $f$ misses. **The decimal diagonal is
deliberately avoided**: decimal expansions are infinite series, which this
library has not yet constructed, so a diagonal proof here would rest on machinery
that does not exist. The diagonal argument survives in its non-circular form, on
power sets, as Cantor's theorem earlier on this page; see the remarks below.

**The construction uses no choice, and that is what the thirds are for.** Given
$[a_n, b_n]$ of length $d$, its three closed thirds
$[a_n, a_n + d/3]$, $[a_n + d/3, a_n + 2d/3]$, $[a_n + 2d/3, b_n]$ cannot all
contain $f(n)$, because the first and the third are disjoint; the rule takes the
**first one in that fixed order** which does not contain $f(n)$. That is a
definition by cases, so the whole construction is a single application of the
recursion theorem ([[thm-recursion]]) to one explicitly given function. A version
of the argument that says "pick a third avoiding $f(n)$" would be using dependent
choice, silently and unnecessarily.

## Facts & Assumptions

**Given:** A complete ordered field $\mathbb{R}$, with $0 \ne 1$ and the order of [[def-ordered-field]]. For $a \le b$ write $[a,b] = \{\, x \in \mathbb{R} : a \le x \le b \,\}$, and write $I = \{\, (a,b) \in \mathbb{R} \times \mathbb{R} : a < b \,\}$ for the set of pairs coding nondegenerate closed intervals.

[L1] Least-upper-bound property: every nonempty $S \subseteq \mathbb{R}$ that is bounded above has a least upper bound $\sup S$, an upper bound below every upper bound ([[def-complete-ordered-field]], [[def-bounded-set]]).

[L2] The least upper bound is unique when it exists ([[lem-sup-unique]]).

[L3] Epsilon characterisation: for a nonempty $S$ bounded above and an upper bound $u$ of $S$, $u = \sup S$ if and only if for every $\varepsilon > 0$ there is $s \in S$ with $u - \varepsilon < s$ ([[lem-sup-epsilon]]).

[L4] Order and arithmetic in an ordered field: $0 < 1$ ([[cor-of-one-positive]]); $a < b$ implies $a + c < b + c$, and $a < b$ with $c < d$ implies $a + c < b + d$ ([[lem-of-add-order]]); $a > 0$ implies $a^{-1} > 0$ ([[lem-of-inverse-positive]]); a product of positives is positive ([[lem-of-sign-rules]]); the order is transitive and satisfies trichotomy ([[def-ordered-field]]).

[L5] Recursion: for any set $X$, $x_0 \in X$ and $F : X \to X$ there is $h : \mathbb{N} \to X$ with $h(0) = x_0$ and $h(\sigma(n)) = F(h(n))$ ([[thm-recursion]]).

[L6] Induction ([[thm-induction-principle]]); any two naturals are comparable ([[lem-nat-trichotomy]]); $n < \sigma(n)$ and the order of $\mathbb{N}$ ([[def-nat-order]], [[def-natural-numbers]]).

[L7] A nonempty set is at most countable if and only if some surjection from $\mathbb{N}$ onto it exists; uncountable means not at most countable ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $\mathbb{R}$ is at most countable. Since $0 \in \mathbb{R}$, it is nonempty, so [L7] provides a surjection $f : \mathbb{N} \to \mathbb{R}$. [assume-contra, given, L7]

1.2 Put $3 := 1 + 1 + 1$. Adding the inequality $0 < 1$ to itself twice gives $3 > 0$ by [L4], so $3 \ne 0$ and $3^{-1} > 0$; hence for $d > 0$ the element $d/3 := d \cdot 3^{-1}$ is positive, and $d/3 + d/3 + d/3 = d \cdot 3^{-1} \cdot 3 = d$. [L4, algebra]

2.1 Fix the trisection rule. Let $(a,b) \in I$ and $y \in \mathbb{R}$. Put $d = b - a > 0$, $p = a + d/3$ and $q = p + d/3$; then $a < p < q < b$ by step 1.2 and [L4], since $p - a = q - p = b - q = d/3 > 0$. The three pairs $(a,p)$, $(p,q)$, $(q,b)$ all lie in $I$ and their intervals are contained in $[a,b]$. Moreover $[a,p]$ and $[q,b]$ are disjoint, because $x \le p < q \le x$ is impossible; so $y$ fails to lie in at least one of the three. Define $T(a,b,y)$ to be the **first** of $(a,p)$, $(p,q)$, $(q,b)$, in that fixed order, whose interval does not contain $y$. This is a definition by cases on the three conditions $y \in [a,p]$, $y \in [p,q]$, $y \in [q,b]$, so $T : I \times \mathbb{R} \to I$ is a function and no choice is made. [step 1.2, L4, construct]

3.1 Apply [L5] with $X = \mathbb{N} \times I$, $x_0 = (0, (0,1))$, which lies in $X$ because $0 < 1$ by [L4], and $F(n, (a,b)) = (\sigma(n), T(a, b, f(n)))$: this yields $h : \mathbb{N} \to \mathbb{N} \times I$ with $h(0) = x_0$ and $h(\sigma(n)) = F(h(n))$. An induction using [L6] shows the first coordinate of $h(n)$ is $n$, so we may write $h(n) = (n, (a_n, b_n))$ with $a_n < b_n$, $a_0 = 0$, $b_0 = 1$ and $(a_{\sigma(n)}, b_{\sigma(n)}) = T(a_n, b_n, f(n))$ for every $n$. By step 2.1 this gives $a_n \le a_{\sigma(n)}$, $b_{\sigma(n)} \le b_n$ and $f(n) \notin [a_{\sigma(n)}, b_{\sigma(n)}]$. [step 1.1, step 2.1, L4, L5, L6, construct]

4.1 For $m \le n$ one has $a_m \le a_n$ and $b_n \le b_m$, by induction on $n$ using step 3.1 and transitivity; consequently $a_m \le b_n$ for all $m, n$: if $m \le n$ then $a_m \le a_n < b_n$, and if $n \le m$ then $a_m < b_m \le b_n$, and any two naturals are comparable by [L6]. [step 3.1, L4, L6]

5.1 The set $S = \{\, a_n : n \in \mathbb{N} \,\}$ is nonempty and bounded above by $b_0$ by step 4.1, so [L1] gives its least upper bound $x = \sup S$, unique by [L2]. [step 3.1, step 4.1, L1, L2]

6.1 For every $n$: $a_n \le x$, because $x$ is an upper bound of $S$; and $x \le b_n$, because otherwise $\varepsilon := x - b_n > 0$ and [L3] would produce $a_m \in S$ with $b_n = x - \varepsilon < a_m$, contradicting $a_m \le b_n$ from step 4.1. Hence $x \in [a_n, b_n]$ for every $n$. [step 4.1, step 5.1, L1, L3, L4]

7.1 Fix $n \in \mathbb{N}$. By step 6.1 applied to $\sigma(n)$, $x \in [a_{\sigma(n)}, b_{\sigma(n)}]$, whereas $f(n) \notin [a_{\sigma(n)}, b_{\sigma(n)}]$ by step 3.1, so $x \ne f(n)$. As $n$ was arbitrary, the real number $x$ is not a value of $f$, contradicting the surjectivity of $f$ obtained in step 1.1. Therefore no surjection $\mathbb{N} \to \mathbb{R}$ exists and, $\mathbb{R}$ being nonempty, [L7] makes $\mathbb{R}$ uncountable. [step 1.1, step 3.1, step 6.1, L7, discharge-contradiction] ∎

## Remarks

- **What the proof actually uses.** Completeness enters once, at step 5.1, to produce $\sup\{a_n\}$; everything else is ordered-field arithmetic and the recursion theorem. The argument therefore applies verbatim to any ordered field with the least-upper-bound property, and it fails for $\mathbb{Q}$ exactly because the supremum of the left endpoints need not exist there, which is as it should be, since $\mathbb{Q}$ is countable ([[thm-rationals-countable]]).

- **Why thirds and not halves.** Two closed halves share the midpoint, so if $f(n)$ happens to be that midpoint then *both* halves contain it and the rule "take the first closed half not containing $f(n)$" has nothing to return. Three closed thirds fix this: the first and the third are disjoint, so at least one of the three always misses $f(n)$, and listing them in a fixed order makes the selection a definition by cases rather than a choice. Open intervals would avoid the overlap too, but closed intervals are what make step 6.1 work, since the point $\sup\{a_n\}$ must be allowed to be an endpoint.

- **The diagonal argument is not lost, only relocated.** [[thm-cantor-powerset]], proved earlier on this page, is Cantor's diagonal argument in a setting where it needs nothing but the Power Set and Separation axioms. What is unavailable here is only the *decimal* diagonal, and only because decimal expansions are infinite series.

- **The choice-freeness matters beyond tidiness.** It is what lets [[fs-countable-union-theorem-of-zf]] draw a conclusion about ZF: since this theorem is proved in ZF alone, any model of ZF in which $\mathbb{R}$ is a countable union of countable sets is a model in which the countable-union theorem fails.

- The argument gives more than stated: it shows every interval $[a,b]$ with $a < b$ is uncountable, since the construction can start at $(a,b)$ instead of $(0,1)$ and every $x$ produced lies in $[a,b]$.
