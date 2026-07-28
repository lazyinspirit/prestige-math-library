---
id: thm-monotone-with-prescribed-discontinuity-set
kind: theorem
title: "Converse to Froda: for every at most countable $E \\subseteq \\mathbb{R}$ there is a bounded nondecreasing $f : \\mathbb{R} \\to \\mathbb{R}$ whose set of discontinuities is exactly $E$, every one of them a jump"
status: draft
origin: session
deps: [def-monotone-function, def-classification-of-discontinuities, thm-monotone-one-sided-limits-exist, thm-monotone-discontinuities-are-jumps, def-countable, lem-countable-iff-surjection-from-n, def-series, thm-geometric-series, thm-nonnegative-series-bounded-partial-sums, lem-series-tail-invariance, def-finite-sum, lem-finite-sum-laws, def-continuity-real, def-bounded-set, def-integer-power, def-real-limit, lem-finite-set-has-max, lem-rat-embeds-dense, def-interval, def-max-min]
justified_by: []
aliases: [thm-prescribed-jump-construction]
landmark: true
short: "every countable set is a discontinuity set"
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Classification of discontinuities (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Classification_of_discontinuities"
    - title: "Froda's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Froda%27s_theorem"
pipeline_run: null
---

## Statement

Let $E \subseteq \mathbb{R}$ be at most countable ([[def-countable]]). Then
there is a function $f : \mathbb{R} \to \mathbb{R}$ such that

1. $f$ is nondecreasing ([[def-monotone-function]]) and $0 \le f(x) \le 1$ for
   every real $x$, so $f$ is bounded ([[def-bounded-set]]);
2. $f$ is continuous at every $x \notin E$ and discontinuous at every $x \in E$
   ([[def-continuity-real]]), so the discontinuity set of $f$ is exactly $E$;
3. every discontinuity of $f$ is a **jump**
   ([[def-classification-of-discontinuities]]), with
   $\lim_{x \to c^{-}} f(x) = f(c) < \lim_{x \to c^{+}} f(x)$ at every $c \in E$.

Together with [[thm-froda]] this settles the question completely: the sets that
occur as discontinuity sets of monotone functions on $\mathbb{R}$ are **exactly**
the at most countable ones.

**The construction.** For $E = \varnothing$ take $f := 0$. Otherwise fix a
surjection $s : \mathbb{N} \to E$ ([[lem-countable-iff-surjection-from-n]]) and
set

$$f(x) \;:=\; \sum_{k=0}^{\infty} a_{k}(x), \qquad a_{k}(x) := \begin{cases} 1/2^{\,k+1} & \text{if } s(k) < x,\\ 0 & \text{otherwise,}\end{cases}$$

([[def-series]], [[def-integer-power]]): the mass $1/2^{\,k+1}$ is placed at the
point $s(k)$ and is collected by $f$ strictly to the right of it. Repetitions in
the enumeration are harmless; they only make the jump at a point larger.

## Facts & Assumptions

**Given:** An at most countable $E \subseteq \mathbb{R}$.

[L1] A nonempty at most countable set is the image of a surjection $s : \mathbb{N} \to E$ ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

[L2] A series of nonnegative terms converges if and only if its partial sums are bounded above, and its sum is then the supremum of its partial sums; in particular every partial sum is at most the sum ([[thm-nonnegative-series-bounded-partial-sums]], [[def-series]], [[def-bounded-set]]).

[L3] Finite sums: $\sum_{k<n}$ is monotone in the terms, splits as $\sum_{k<n} = \sum_{k<m} + \sum_{k=m}^{n-1}$ for $m \le n$, scales, and telescopes as $\sum_{k<n}(c_{k+1} - c_{k}) = c_{n} - c_{0}$ ([[lem-finite-sum-laws]], [[def-finite-sum]]).

[L4] $\sum_{k \ge 0} r^{k}$ converges to $1/(1-r)$ for $|r| < 1$, the first term being $r^{0} = 1$ ([[thm-geometric-series]], [[def-integer-power]]); a series converges if and only if each of its tails does, and $\sum_{k \ge 0} u_{k} = \sum_{k<N} u_{k} + \sum_{k \ge N} u_{k}$ ([[lem-series-tail-invariance]]); a convergent sequence of reals comes within every positive $\varepsilon$ of its limit from some index on ([[def-real-limit]]).

[L5] A nonempty finite set of reals, presented as $\{c_{0}, \dots, c_{m}\}$, has a maximum and a minimum ([[lem-finite-set-has-max]], [[def-max-min]]); and strictly between any two distinct reals there lies a real ([[lem-rat-embeds-dense]]).

[L6] A nondecreasing function on an order-convex set has both one-sided limits at every interior point, and is discontinuous there exactly when they differ, in which case the discontinuity is a jump ([[thm-monotone-one-sided-limits-exist]], [[thm-monotone-discontinuities-are-jumps]], [[def-classification-of-discontinuities]], [[def-interval]]).

## Proof

**Proof technique:** constructive.

1.1 If $E = \varnothing$, the constant function $0$ is nondecreasing, takes values in $[0,1]$, is continuous at every real, and has empty discontinuity set; all three claims hold vacuously for claim 3. Assume from here on that $E \ne \varnothing$ and fix a surjection $s : \mathbb{N} \to E$. [L1, construct]

1.2 For every $n \in \mathbb{N}$, $\sum_{k<n} 1/2^{\,k+1} = 1 - 1/2^{\,n}$: each term is $1/2^{\,k+1} = 1/2^{\,k} - 1/2^{\,k+1}$, so the sum telescopes to $1/2^{\,0} - 1/2^{\,n} = 1 - 1/2^{\,n}$. [L3]

2.1 Define $a_{k}(x) := 1/2^{\,k+1}$ when $s(k) < x$ and $a_{k}(x) := 0$ otherwise, and note $0 \le a_{k}(x) \le 1/2^{\,k+1}$ for every $k$ and every real $x$. [step 1.1, construct]

2.2 For every real $\varepsilon > 0$ there is $n \in \mathbb{N}$ with $1/2^{\,n} < \varepsilon$: the partial sums $t_{n} := \sum_{k<n} 1/2^{\,k}$ converge to $2$, and $t_{n} = 2 - 2/2^{\,n}$ by the same telescoping as in step 1.2, so $|t_{n} - 2| = 2/2^{\,n} < \varepsilon$ for all large $n$, whence $1/2^{\,n} < \varepsilon/2 < \varepsilon$ for those $n$. Consequently the partial sums $1 - 1/2^{\,n}$ of $\sum_{k} 1/2^{\,k+1}$ have supremum $1$, so that series converges with sum $1$. [step 1.2, L2, L3, L4]

3.1 For every real $x$ the series $\sum_{k} a_{k}(x)$ converges and $0 \le f(x) \le 1$: its terms are nonnegative and its partial sums satisfy $\sum_{k<n} a_{k}(x) \le \sum_{k<n} 1/2^{\,k+1} = 1 - 1/2^{\,n} \le 1$, so they are bounded above by $1$ and the sum, being their supremum, lies in $[0,1]$. [step 2.1, step 1.2, L2, L3]

3.2 Left continuity holds at **every** real $c$: given real $\varepsilon > 0$ take $n$ with $1/2^{\,n} < \varepsilon$; let $F := \{\, k < n : s(k) < c \,\}$; if $F = \varnothing$ put $x_{0} := c - 1$, and otherwise put $x_{0}$ to be a real with $\max\{s(k) : k \in F\} < x_{0} < c$, which exists because the maximum of the nonempty finite set $\{s(k) : k \in F\}$ is a real strictly below $c$. [step 2.2, L5]

3.3 Right continuity holds at every $c \notin E$: given real $\varepsilon > 0$ take $n$ with $1/2^{\,n} < \varepsilon$; since $c \notin E$ and $s$ has image $E$, no $k$ has $s(k) = c$, so every $k < n$ has $s(k) < c$ or $s(k) > c$. Let $G := \{\, k < n : s(k) > c \,\}$; if $G = \varnothing$ put $y_{0} := c + 1$, and otherwise put $y_{0}$ to be a real with $c < y_{0} < \min\{s(k) : k \in G\}$. [step 1.1, step 2.2, L5]

4.1 $f$ is nondecreasing: if $x \le y$ then $s(k) < x$ implies $s(k) < y$, so $a_{k}(x) \le a_{k}(y)$ for every $k$, hence $\sum_{k<n} a_{k}(x) \le \sum_{k<n} a_{k}(y)$ for every $n$, and taking suprema gives $f(x) \le f(y)$. [step 2.1, step 3.1, L2, L3]

4.2 For all reals $x \le y$ and every $n \in \mathbb{N}$ with $a_{k}(x) = a_{k}(y)$ for every $k < n$, one has $f(y) - f(x) \le 1/2^{\,n}$: for $N \ge n$ the splitting $\sum_{k<N} a_{k}(y) = \sum_{k<n} a_{k}(y) + \sum_{k=n}^{N-1} a_{k}(y) \le \sum_{k<n} a_{k}(x) + \sum_{k=n}^{N-1} 1/2^{\,k+1}$ holds, the last sum being at most $\sum_{k \ge n} 1/2^{\,k+1} = 1 - (1 - 1/2^{\,n}) = 1/2^{\,n}$; so every partial sum of $\sum_{k} a_{k}(y)$ is at most $f(x) + 1/2^{\,n}$, and so is their supremum $f(y)$. [step 2.1, step 1.2, step 3.1, L2, L3, L4]

4.3 Let $c \in E$ and fix $k_{0}$ with $s(k_{0}) = c$. For every $y > c$ and every $N > k_{0}$ the finite sum $\sum_{k<N} a_{k}(y)$ exceeds $\sum_{k<N} a_{k}(c)$ by at least $1/2^{\,k_{0}+1}$, because the list $k \mapsto a_{k}(y) - a_{k}(c)$ has nonnegative entries, so the finite sum of its first $N$ entries is at least its entry at the index $k_{0}$, which is $a_{k_{0}}(y) - a_{k_{0}}(c) = 1/2^{\,k_{0}+1} - 0$. Hence $f(y) - 1/2^{\,k_{0}+1} \ge \sum_{k<N} a_{k}(c)$ for every $N$, the case $N \le k_{0}$ holding because the partial sums of a nonnegative series are nondecreasing; so $f(y) - 1/2^{\,k_{0}+1}$ is an upper bound of those partial sums and therefore at least their supremum $f(c)$. [step 1.1, step 2.1, step 3.1, L2, L3]

5.1 With $x_{0}$ as in step 3.2 and any $x$ with $x_{0} < x \le c$: for $k < n$ with $s(k) < c$ we have $s(k) \le \max\{s(j) : j \in F\} < x_{0} < x$, so $a_{k}(x) = 1/2^{\,k+1} = a_{k}(c)$; and for $k < n$ with $s(k) \ge c \ge x$ we have $a_{k}(x) = 0 = a_{k}(c)$. So $a_{k}(x) = a_{k}(c)$ for every $k < n$, and step 4.2 applied to the pair $x \le c$ gives $0 \le f(c) - f(x) \le 1/2^{\,n} < \varepsilon$. [step 2.1, step 4.1, step 4.2, step 3.2]

5.2 With $y_{0}$ as in step 3.3 and any $y$ with $c \le y < y_{0}$: for $k < n$ with $s(k) < c \le y$ we get $a_{k}(y) = 1/2^{\,k+1} = a_{k}(c)$, and for $k < n$ with $s(k) > c$ we have $s(k) \ge \min\{s(j) : j \in G\} > y_{0} > y$, so $a_{k}(y) = 0 = a_{k}(c)$. So $a_{k}(y) = a_{k}(c)$ for every $k < n$, and step 4.2 applied to the pair $c \le y$ gives $0 \le f(y) - f(c) \le 1/2^{\,n} < \varepsilon$. [step 2.1, step 4.1, step 4.2, step 3.3]

5.3 So $f$ is discontinuous at $c$: for $\varepsilon := 1/2^{\,k_{0}+1} > 0$ and any real $\delta > 0$ the point $y := c + \delta/2$ satisfies $|y - c| < \delta$ and $|f(y) - f(c)| \ge \varepsilon$, so no $\delta$ witnesses the continuity condition at $c$. [step 4.3]

6.1 Hence $f$ is continuous at every $c \notin E$: fix a real $\varepsilon > 0$, take $x_{0}$ as in step 3.2 and $y_{0}$ as in step 3.3 for that same $\varepsilon$, and put $\delta := \min\{c - x_{0}, y_{0} - c\} > 0$; then every real $x$ with $|x - c| < \delta$ satisfies $x_{0} < x < y_{0}$ and therefore $|f(x) - f(c)| < \varepsilon$, by step 5.1 when $x \le c$ and by step 5.2 when $x \ge c$. [step 5.1, step 5.2, L5]

6.2 Every point of $E$ is an interior point of the order-convex set $\mathbb{R}$, so both one-sided limits of $f$ exist there; step 5.1 gives $\lim_{x \to c^{-}} f(x) = f(c)$ and step 4.3 gives $\lim_{x \to c^{+}} f(x) \ge f(c) + 1/2^{\,k_{0}+1} > f(c)$. The two one-sided limits therefore differ, and the discontinuity at $c$ is a jump. [step 5.1, step 4.3, step 5.3, L6]

7.1 Claims 1, 2 and 3 hold for the function $f$ constructed in steps 1.1 and 2.1: claim 1 by steps 3.1 and 4.1, claim 2 by steps 6.1 and 5.3, and claim 3 by step 6.2. [step 3.1, step 4.1, step 6.1, step 5.3, step 6.2, discharge-construct] ∎

## Remarks

- **Why the mass is collected strictly to the right.** The definition uses $s(k) < x$ rather than $s(k) \le x$, and that is what makes $f$ left continuous everywhere, as steps 3.2 and 5.1 show without any hypothesis on $c$. The value $f(c)$ at a point of $E$ is therefore the **left** limit, and the whole jump sits on the right. Using $s(k) \le x$ would produce a right continuous function with the same discontinuity set; nothing else would change.

- **Repetitions in the enumeration are harmless.** If $s$ takes the value $c$ at several indices, the jump at $c$ is the total mass $\sum \{1/2^{\,k+1} : s(k) = c\}$ rather than a single term. Step 4.3 uses only one index $k_{0}$ and so needs no such sum; it establishes a lower bound for the jump, which is all that discontinuity requires.

- **Boundedness is free, and it is worth recording.** The total mass available is $\sum_{k \ge 0} 1/2^{\,k+1} = 1$, so $f$ maps $\mathbb{R}$ into $[0,1]$ however large $E$ is. A bounded nondecreasing function on $\mathbb{R}$ can therefore have a dense set of discontinuities; the companion page takes $E = \mathbb{Q}$ and gets exactly that.
