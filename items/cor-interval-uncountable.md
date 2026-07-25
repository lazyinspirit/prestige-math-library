---
id: cor-interval-uncountable
kind: corollary
title: "Every nondegenerate interval of $\\mathbb{R}$ is uncountable"
status: published
origin: session
deps: [thm-r-uncountable, def-countable, def-complete-ordered-field, thm-recursion, lem-sup-epsilon, lem-sup-unique, def-bounded-set, lem-countable-iff-surjection-from-n, lem-subset-of-countable, lem-of-add-order, def-ordered-field, cor-of-one-positive, lem-of-inverse-positive, lem-of-sign-rules, thm-induction-principle, def-natural-numbers, def-nat-order, lem-nat-trichotomy, lem-nat-order-is-membership]
justified_by: []
aliases: []
landmark: false
short: "$[a,b]$ and $(a,b)$ are uncountable"
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
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

Let $\mathbb{R}$ be a complete ordered field ([[def-complete-ordered-field]]) and
let $a, b \in \mathbb{R}$ with $a < b$. Then both

1. the closed interval $[a,b] = \{\, x \in \mathbb{R} : a \le x \le b \,\}$, and
2. the open interval $(a,b) = \{\, x \in \mathbb{R} : a < x < b \,\}$

are uncountable ([[def-countable]]).

**What this adds to [[thm-r-uncountable]], and what it does not inherit from it.**
That theorem states exactly one thing: $\mathbb{R}$ is uncountable. Its statement
says nothing about any interval, so the present result cannot be read off it. Its
*proof*, on the other hand, is general in every part but its seed: the trisection
rule of its step 2.1 is constructed there for an arbitrary $(a,b) \in I$, and its
steps 4.1, 5.1 and 6.1, together with the interval reasoning of its step 7.1, use
nothing about the starting interval beyond the nesting and the strictness
$a_n < b_n$ that the rule delivers. Only three places are special to $\mathbb{R}$
and to $(0,1)$: the surjection of its step 1.1 is onto $\mathbb{R}$, the recursion
of its step 3.1 is seeded at $(0,(0,1))$, and the conclusion drawn in its step 7.1
is about $\mathbb{R}$. So the construction is re-run below, seeded
instead at the **middle third** of $(a,b)$, against a surjection onto $(a,b)$; the
remarks record why that seed and not $(a,b)$ itself.

## Facts & Assumptions

**Given:** A complete ordered field $\mathbb{R}$, with $0 \ne 1$ and the order of [[def-ordered-field]]. For $u \le v$ write $[u,v] = \{\, x \in \mathbb{R} : u \le x \le v \,\}$ and $(u,v) = \{\, x \in \mathbb{R} : u < x < v \,\}$, and write $I = \{\, (u,v) \in \mathbb{R} \times \mathbb{R} : u < v \,\}$ for the set of pairs coding nondegenerate closed intervals.

[L1] Least-upper-bound property: every nonempty $S \subseteq \mathbb{R}$ that is bounded above has a least upper bound $\sup S$, an upper bound below every upper bound ([[def-complete-ordered-field]], [[def-bounded-set]]).

[L2] The least upper bound is unique when it exists ([[lem-sup-unique]]).

[L3] Epsilon characterisation: for a nonempty $S$ bounded above and an upper bound $u$ of $S$, $u = \sup S$ if and only if for every $\varepsilon > 0$ there is $s \in S$ with $u - \varepsilon < s$ ([[lem-sup-epsilon]]).

[L4] Order and arithmetic in an ordered field: $0 < 1$ ([[cor-of-one-positive]]); $a < b$ implies $a + c < b + c$, and $a < b$ with $c < d$ implies $a + c < b + d$ ([[lem-of-add-order]]); $a > 0$ implies $a^{-1} > 0$ ([[lem-of-inverse-positive]]); a product of positives is positive ([[lem-of-sign-rules]]); the order is transitive and satisfies trichotomy ([[def-ordered-field]]).

[L5] Recursion: for any set $X$, $x_0 \in X$ and $F : X \to X$ there is $h : \mathbb{N} \to X$ with $h(0) = x_0$ and $h(\sigma(n)) = F(h(n))$ ([[thm-recursion]]).

[L6] Induction ([[thm-induction-principle]]); any two naturals are comparable ([[lem-nat-trichotomy]]); the order of $\mathbb{N}$ is the additive one, $m \le n$ meaning $m + k = n$ for some $k$ ([[def-nat-order]], [[def-natural-numbers]]), and it satisfies $n < \sigma(n)$ and $m < \sigma(n) \iff m \le n$ ([[lem-nat-order-is-membership]]), so $m \le \sigma(n)$ holds exactly when $m \le n$ or $m = \sigma(n)$.

[L7] A nonempty set is at most countable if and only if some surjection from $\mathbb{N}$ onto it exists; uncountable means not at most countable ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

[L8] Every subset of an at most countable set is at most countable ([[lem-subset-of-countable]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that the conclusion fails: there are $a < b$ in $\mathbb{R}$ for which $[a,b]$ is at most countable or $(a,b)$ is at most countable. Fix such a pair. Since $(a,b) \subseteq [a,b]$, in the first case [L8] makes $(a,b)$ at most countable too, so in either case $(a,b)$ is at most countable. [assume-contra, L7, L8]

1.2 Put $3 := 1 + 1 + 1$. Adding the inequality $0 < 1$ to itself twice gives $3 > 0$ by [L4], so $3 \ne 0$ and $3^{-1} > 0$; hence for $d > 0$ the element $d/3 := d \cdot 3^{-1}$ is positive, and $d/3 + d/3 + d/3 = d \cdot 3^{-1} \cdot 3 = d$. [L4, algebra]

2.1 Fix the trisection rule. Let $(u,v) \in I$ and $y \in \mathbb{R}$. Put $d = v - u > 0$, $s = u + d/3$ and $t = s + d/3$; then $u < s < t < v$ by step 1.2 and [L4], since $s - u = t - s = v - t = d/3 > 0$. The three pairs $(u,s)$, $(s,t)$, $(t,v)$ all lie in $I$ and their intervals are contained in $[u,v]$. Moreover $[u,s]$ and $[t,v]$ are disjoint, because $x \le s < t \le x$ is impossible; so $y$ fails to lie in at least one of the three. Define $T(u,v,y)$ to be the **first** of $(u,s)$, $(s,t)$, $(t,v)$, in that fixed order, whose interval does not contain $y$. This is a definition by cases on the three conditions $y \in [u,s]$, $y \in [s,t]$, $y \in [t,v]$, so $T : I \times \mathbb{R} \to I$ is a function and no choice is made. [step 1.2, L4, construct]

3.1 Trisect the fixed interval. Put $d_0 = b - a > 0$, $p = a + d_0/3$ and $q = p + d_0/3$; then $a < p < q < b$ by step 1.2 and [L4], exactly as in step 2.1 applied to $(a,b)$. Hence $(p,q) \in I$, and $[p,q] \subseteq (a,b)$, since $p \le x \le q$ gives $a < p \le x \le q < b$. In particular $p \in (a,b)$, so $(a,b)$ is nonempty. [step 1.2, L4]

4.1 By step 1.1 the set $(a,b)$ is at most countable, and by step 3.1 it is nonempty, so [L7] provides a surjection $g : \mathbb{N} \to (a,b)$. Composing with the inclusion $(a,b) \subseteq \mathbb{R}$ regards $g$ as a function $f : \mathbb{N} \to \mathbb{R}$ with $f(n) = g(n)$ for every $n$. [step 1.1, step 3.1, L7]

5.1 Apply [L5] with $X = \mathbb{N} \times I$, $x_0 = (0, (p,q))$, which lies in $X$ because $p < q$ by step 3.1, and $F(n, (u,v)) = (\sigma(n), T(u, v, f(n)))$: this yields $h : \mathbb{N} \to \mathbb{N} \times I$ with $h(0) = x_0$ and $h(\sigma(n)) = F(h(n))$. An induction using [L6] shows the first coordinate of $h(n)$ is $n$, so we may write $h(n) = (n, (a_n, b_n))$ with $a_n < b_n$, $a_0 = p$, $b_0 = q$ and $(a_{\sigma(n)}, b_{\sigma(n)}) = T(a_n, b_n, f(n))$ for every $n$. By step 2.1 this gives $a_n \le a_{\sigma(n)}$, $b_{\sigma(n)} \le b_n$ and $f(n) \notin [a_{\sigma(n)}, b_{\sigma(n)}]$. [step 2.1, step 3.1, step 4.1, L4, L5, L6, construct]

6.1 For $m \le n$ one has $a_m \le a_n$ and $b_n \le b_m$, by induction on $n$ using step 5.1 and transitivity; consequently $a_m \le b_n$ for all $m, n$: if $m \le n$ then $a_m \le a_n < b_n$, and if $n \le m$ then $a_m < b_m \le b_n$, and any two naturals are comparable by [L6]. [step 5.1, L4, L6]

7.1 The set $S = \{\, a_n : n \in \mathbb{N} \,\}$ is nonempty and bounded above by $b_0$ by step 6.1, so [L1] gives its least upper bound $x = \sup S$, unique by [L2]. [step 5.1, step 6.1, L1, L2]

8.1 For every $n$: $a_n \le x$, because $x$ is an upper bound of $S$; and $x \le b_n$, because otherwise $\varepsilon := x - b_n > 0$ and [L3] would produce $a_m \in S$ with $b_n = x - \varepsilon < a_m$, contradicting $a_m \le b_n$ from step 6.1. Hence $x \in [a_n, b_n]$ for every $n$. [step 6.1, step 7.1, L1, L3, L4]

9.1 Taking $n = 0$ in step 8.1 gives $x \in [a_0, b_0] = [p, q]$, and $[p,q] \subseteq (a,b)$ by step 3.1, so $x \in (a,b)$. Fix $n \in \mathbb{N}$: by step 8.1 applied to $\sigma(n)$, $x \in [a_{\sigma(n)}, b_{\sigma(n)}]$, whereas $f(n) \notin [a_{\sigma(n)}, b_{\sigma(n)}]$ by step 5.1, so $x \ne f(n) = g(n)$. As $n$ was arbitrary, the element $x$ of $(a,b)$ is not a value of $g$, contradicting the surjectivity of $g$ obtained in step 4.1. So no such pair $a < b$ exists: for every $a < b$ both $[a,b]$ and $(a,b)$ fail to be at most countable, that is, both are uncountable by [L7]. [step 3.1, step 4.1, step 5.1, step 8.1, L7, discharge-contradiction] ∎

## Remarks

- **Which route this proof takes, and why.** The extension is obtained by re-running the construction of [[thm-r-uncountable]] with a new seed, not by transporting uncountability along a bijection. The reason is that there is nothing to transport: the theorem states that $\mathbb{R}$ is uncountable and nothing more, and no item of this library states that $[0,1]$ is uncountable, so the affine order-isomorphism $t \mapsto a + t(b-a)$ from $[0,1]$ onto $[a,b]$ has no uncountable source to carry across. Re-running is available instead precisely because the theorem's proof is already general: its step 2.1 builds the trisection rule $T$ for an arbitrary $(a,b) \in I$, and its steps 4.1 to 7.1 quote only the nesting $a_n \le a_{\sigma(n)}$, $b_{\sigma(n)} \le b_n$, the strictness $a_n < b_n$ and the omission $f(n) \notin [a_{\sigma(n)}, b_{\sigma(n)}]$. Its step 1.1, the seed of its step 3.1 and the conclusion of its step 7.1 are the special ones, and they are the three replaced here: a surjection onto $(a,b)$ rather than onto $\mathbb{R}$, the seed $(0,(p,q))$ rather than $(0,(0,1))$, and a conclusion about the interval rather than about $\mathbb{R}$.
- **A corollary of the argument, not of the statement.** That distinction is the whole content of the previous remark, and it is why the proof is written out here in full rather than replaced by a citation. A fact of the form "for every $(a,b) \in I$ and every $f : \mathbb{N} \to \mathbb{R}$ there is $x \in [a,b]$ omitted by $f$" is true and is what the theorem's proof establishes, but it is not what the theorem says, so quoting the theorem for it would be an attribution the theorem does not support.
- **Why the seed is the middle third and not $(a,b)$ itself.** The point produced by the construction is a supremum of left endpoints, so it may be an endpoint of the starting interval; seeding at $(a,b)$ would therefore only place $x$ in the closed interval $[a,b]$, which settles claim 1 but not claim 2. Seeding at $(p,q)$, the middle third, costs nothing and gives $x \in [p,q] \subseteq (a,b)$, so the open case comes out directly and the closed case follows from it, since $(a,b) \subseteq [a,b]$ and a subset of an at most countable set is at most countable ([[lem-subset-of-countable]]). The naive order of the two claims is thus reversed: the open interval is the substantive one.
- **What the proof uses.** Exactly what [[thm-r-uncountable]] uses, and nothing else: ordered-field arithmetic, the recursion theorem ([[thm-recursion]]), and completeness at exactly one point, step 7.1 above, where $\sup\{a_n\}$ is produced. In particular the construction still makes no choices, for the same reason as there, namely that the three closed thirds are tried in a fixed order and the first and third are disjoint. The result consequently fails for $\mathbb{Q}$, where the intervals with rational endpoints are countable, and it must, since the supremum taken in step 7.1 above need not exist there.
- **Degeneracy is the only exclusion.** The hypothesis $a < b$ cannot be weakened: $[a,a] = \{a\}$ is finite and $(a,a) = \varnothing$ is finite, so both are at most countable. Every interval that is not a single point or empty contains a nondegenerate open interval, so this corollary gives the uncountability of the half-open and unbounded intervals as well, again by [[lem-subset-of-countable]].
