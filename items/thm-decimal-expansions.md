---
id: thm-decimal-expansions
kind: theorem
title: "Base-$b$ expansions: for an integer $b \\ge 2$ every $x \\in [0,1)$ is the sum of $\\sum_{j \\ge 0} d_j / b^{\\,j+1}$ for digits $d_j < b$, and the digit sequence is unique among those that are not eventually constantly $b-1$"
status: published
origin: session
deps: [def-series, thm-geometric-series, lem-nth-term-test, lem-series-linearity, thm-recursion, thm-well-ordering-principle, thm-induction-principle, def-interval, def-integer-power, lem-power-laws, thm-nonnegative-series-bounded-partial-sums, lem-series-tail-invariance, def-canonical-natural, lem-of-naturals-positive, lem-of-inverse-positive, lem-finite-sum-laws, thm-squeeze, thm-algebra-of-limits, lem-limit-preserves-order, def-real-limit]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
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
    - title: "Decimal representation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Decimal_representation"
    - title: "Positional notation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Positional_notation"
pipeline_run: null
---

## Statement

Let $b \in \mathbb{N}$ with $b \ge 2$ and write $\beta := \iota(b)$ for the
canonical natural of $b$ in $\mathbb{R}$ ([[def-canonical-natural]]), so that
$\beta > 1$ ([[lem-of-naturals-positive]]); powers $\beta^{\,n}$ are integer
powers ([[def-integer-power]]). Call a sequence $(d_j)$ of natural numbers a
**digit sequence in base $b$** when $d_j < b$ for every $j$, and say it is
**terminal** when it is eventually constantly $b-1$, that is when there is $J$
with $d_j = b-1$ for every $j \ge J$. Then:

1. **Existence.** For every $x \in [0,1)$ ([[def-interval]]) there is a
   non-terminal digit sequence $(d_j)$ in base $b$ with
   $$\sum_{j \ge 0} \frac{\iota(d_j)}{\beta^{\,j+1}} \ \text{ convergent, of sum } \ x .$$
2. **Uniqueness.** If $(c_j)$ and $(c'_j)$ are non-terminal digit sequences in
   base $b$ whose series have the same sum, then $c_j = c'_j$ for every $j$.

So every real in $[0,1)$ has exactly one base-$b$ expansion once the terminal
sequences are excluded. The assignment $x \mapsto (d_j)$ is moreover a bijection
onto the non-terminal digit sequences: claim 2 makes it injective, and it is onto
because a non-terminal $(c_j)$ has $\iota(c_j) \le \beta - 1$ for every $j$ and
$\iota(c_j) < \beta - 1$ for infinitely many $j$, so its sum is strictly below the
sum $1$ of the all-$(b-1)$ series computed in step 8.1, hence lies in $[0,1)$ and
has $(c_j)$ as its expansion by claim 2. Excluding them is unavoidable: the terminal
sequences are exactly the ones producing a second expansion of a number that
already has one, as the companion examples page exhibits with
$0.999\dots = 1$ and $0.4999\dots = 0.5$.

**The construction uses no floor function.** The integer part of a real is not
available at this point in the reading order, so the digit at each stage is
produced by the finite case distinction "in which of the $b$ intervals
$[\,d/\beta,\ (d+1)/\beta\,)$ does the current residue lie", closed by the
well-ordering principle ([[thm-well-ordering-principle]]), and the digits are
assembled by the recursion theorem ([[thm-recursion]]).

**Indices run from $0$.** The digit $d_j$ carries the weight $\beta^{-(j+1)}$, so
that the first digit has weight $1/\beta$ and no denominator $\beta^{\,0} = 1$
ever occurs.

## Facts & Assumptions

**Given:** A natural number $b \ge 2$, $\beta = \iota(b)$, and a real $x \in [0,1)$.

[L1] The canonical natural: $\iota(0) = 0$, $\iota(n+1) = \iota(n) + 1$, $\iota$ is strictly increasing on $\mathbb{N}$, and $\iota(m+n) = \iota(m) + \iota(n)$ ([[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L2] Integer powers: $\beta^0 = 1$, $\beta^{n+1} = \beta^{\,n}\beta$, $(uv)^n = u^n v^n$, and $\beta^{\,n} > 0$ for $\beta > 0$ ([[def-integer-power]], [[lem-power-laws]]).

[L3] $[0,1) = \{\, y \in \mathbb{R} : 0 \le y < 1 \,\}$ ([[def-interval]]).

[L4] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L5] The recursion theorem ([[thm-recursion]]) and the principle of induction ([[thm-induction-principle]]).

[L6] Geometric series: for $|r| < 1$, $\sum r^k$ converges with sum $1/(1-r)$; and the terms of a convergent series tend to $0$ ([[thm-geometric-series]], [[lem-nth-term-test]]).

[L7] Order and inverses: $0 < u < v$ implies $0 < 1/v < 1/u$ ([[lem-of-inverse-positive]]).

[L8] Finite sums: recursion, splitting, additivity, scaling and monotonicity; in particular every single term of a finite sum of nonnegative reals is at most that sum ([[lem-finite-sum-laws]]).

[L9] Partial sums and sums of series; linearity of convergent series; and a series converges if and only if some tail series converges, the sum being the initial partial sum plus the tail sum ([[def-series]], [[lem-series-linearity]], [[lem-series-tail-invariance]], [[def-real-limit]]).

[L10] For a series of nonnegative terms, every partial sum is at most the sum ([[thm-nonnegative-series-bounded-partial-sums]]).

[L11] The squeeze theorem, the algebra of limits, and that limits preserve non-strict inequalities ([[thm-squeeze]], [[thm-algebra-of-limits]], [[lem-limit-preserves-order]]).

## Proof

**Proof technique:** constructive.

1.1 $\beta = \iota(b) \ge \iota(2) = 1 + 1 > 1 > 0$, and an induction gives $\beta^{\,n} > 0$ for every $n$; also $0 < 1/\beta < 1$. [given, L1, L2, L5, L7]

1.2 For uniqueness, let $(c_j)$ and $(c'_j)$ be non-terminal digit sequences whose series have the same sum, and suppose they are not equal. By [L4] let $n$ be least with $c_n \ne c'_n$; interchanging the two sequences if necessary, assume $c_n < c'_n$, so $\iota(c'_n) - \iota(c_n) \ge 1$. [given, L1, L4, choose]

2.1 **The digit of a residue.** For every $r \in [0,1)$ there is exactly one natural $d < b$ with $\iota(d)/\beta \le r < \iota(d+1)/\beta$. For existence, the set $D := \{\, d \in \mathbb{N} : d \le b \text{ and } r < \iota(d)/\beta \,\}$ contains $b$, since $\iota(b)/\beta = 1 > r$; let $m := \min D$, which is not $0$ because $\iota(0)/\beta = 0 \le r$; put $d := m - 1$, so $d < b$, and minimality of $m$ says $d \notin D$, that is $\iota(d)/\beta \le r$, while $m \in D$ says $r < \iota(m)/\beta = \iota(d+1)/\beta$. For uniqueness, if $d < d'$ both worked then $r < \iota(d+1)/\beta \le \iota(d')/\beta \le r$, which the order forbids. Write $d(r)$ for this digit. [step 1.1, L1, L3, L4, construct]

2.2 Both series converge, by hypothesis, so by linearity $\sum_j \bigl(\iota(c'_j) - \iota(c_j)\bigr)/\beta^{\,j+1}$ converges with sum $0$; its first $n$ terms vanish, so by [L9] the tail from $n$ also has sum $0$, that is $0 = \bigl(\iota(c'_n)-\iota(c_n)\bigr)/\beta^{\,n+1} + \sum_{j > n}\bigl(\iota(c'_j)-\iota(c_j)\bigr)/\beta^{\,j+1}$. [given, step 1.2, L9]

3.1 **The residue map.** For $r \in [0,1)$ put $f(r) := \beta r - \iota(d(r))$. Multiplying $\iota(d(r))/\beta \le r < \iota(d(r)+1)/\beta = (\iota(d(r)) + 1)/\beta$ by $\beta > 0$ gives $\iota(d(r)) \le \beta r < \iota(d(r)) + 1$, so $0 \le f(r) < 1$; thus $f$ is a function from $[0,1)$ to $[0,1)$. [step 1.1, step 2.1, L1, L3, construct]

3.2 Every difference satisfies $\iota(c'_j) - \iota(c_j) \ge -(\beta - 1)$, the digits lying in $\{0,\dots,b-1\}$, and $\sum_{j>n}(\beta-1)/\beta^{\,j+1} = \frac{\beta-1}{\beta^{\,n+2}}\cdot\frac{1}{1-1/\beta} = \frac{1}{\beta^{\,n+1}}$ by the geometric series; hence the tail in step 2.2 is at least $-1/\beta^{\,n+1}$. [step 1.2, L1, L2, L6, L11]

4.1 By the recursion theorem applied to the set $[0,1)$, the element $x$ and the function $f$, there is a unique sequence $(r_n)$ in $[0,1)$ with $r_0 = x$ and $r_{n+1} = f(r_n)$; put $d_j := d(r_j)$, a natural number $< b$, so $(d_j)$ is a digit sequence in base $b$. [step 3.1, L5, construct]

4.2 Write $A$ for the first summand and $B$ for the tail in step 2.2, so $A + B = 0$ while $A \ge 1/\beta^{\,n+1}$ by step 1.2 and $B \ge -1/\beta^{\,n+1}$ by step 3.2; since the two lower bounds sum to $0$, both must be attained, that is $A = 1/\beta^{\,n+1}$ and $B = -1/\beta^{\,n+1}$; in particular $\sum_{j>n}\bigl(\iota(c'_j)-\iota(c_j) + (\beta-1)\bigr)/\beta^{\,j+1} = 0$, a convergent series of nonnegative terms with sum $0$, so every term is $0$ and $\iota(c'_j) - \iota(c_j) = -(\beta-1)$ for every $j > n$. [step 1.2, step 2.2, step 3.2, L8, L9, L10]

5.1 An induction gives $x = \sum_{j<n} \iota(d_j)/\beta^{\,j+1} + r_n/\beta^{\,n}$ for every $n$: at $n = 0$ the sum is empty and $r_0/\beta^0 = x$; and from $r_n = (\iota(d_n) + r_{n+1})/\beta$, which is step 3.1 rearranged, one gets $r_n/\beta^{\,n} = \iota(d_n)/\beta^{\,n+1} + r_{n+1}/\beta^{\,n+1}$. [step 3.1, step 4.1, L2, L5, L8]

5.2 Since $0 \le r_n < 1$ and $\beta^{\,n} > 0$, we have $0 \le r_n/\beta^{\,n} \le 1/\beta^{\,n} = (1/\beta)^n$; as $0 < 1/\beta < 1$ the series $\sum (1/\beta)^k$ converges, so $(1/\beta)^n \to 0$, and the squeeze gives $r_n/\beta^{\,n} \to 0$. [step 1.1, step 4.1, L2, L6, L7, L11]

5.3 That forces $c_j = b-1$ and $c'_j = 0$ for every $j > n$, since the difference of two digits attains $-(\beta-1)$ only at those values; so $(c_j)$ is terminal, contrary to hypothesis. Hence the two digit sequences agree, which is claim 2. [step 1.2, step 4.2, L1]

6.1 By step 5.1 the partial sums of $\sum_j \iota(d_j)/\beta^{\,j+1}$ equal $x - r_n/\beta^{\,n}$, which converges to $x$; so the series converges with sum $x$. [step 5.1, step 5.2, L9, L11]

7.1 Applying step 5.1 and step 6.1 to the residue $r_J$ in place of $x$, whose recursion produces the digits $d_{J+i}$, gives $r_J = \sum_{i \ge 0} \iota(d_{J+i})/\beta^{\,i+1}$ for every $J$. [step 4.1, step 6.1, L5]

8.1 The constructed sequence is not terminal: if $d_j = b-1$ for every $j \ge J$, then by step 7.1 and the geometric series, $r_J = \sum_{i\ge0} (\beta-1)/\beta^{\,i+1} = \frac{\beta-1}{\beta}\cdot\frac{1}{1 - 1/\beta} = 1$, contradicting $r_J < 1$; here $\iota(b-1) = \beta - 1$ by [L1]. With step 6.1 this proves claim 1. [step 6.1, step 7.1, L1, L2, L6, L9]

9.1 Claim 1 is step 6.1 with step 8.1 and claim 2 is step 5.3, so every $x \in [0,1)$ has exactly one non-terminal base-$b$ expansion. [step 6.1, step 8.1, step 5.3, discharge-construct] ∎

## Remarks

- **Where each tool is used, and the floor function is not among them.** The well-ordering principle appears once, in step 2.1, to pick out the digit from the finitely many candidates $0, \dots, b$; the recursion theorem appears once, in step 4.1, to turn the one-step residue map into a sequence. Everything else is the geometric series and the ordering of $\mathbb{R}$. The usual formula $d_n = \lfloor \beta r_n \rfloor$ would need the integer part of a real, which is developed later in the reading order.

- **The exclusion of terminal sequences is exactly one equivalence class.** Step 4.2 shows that two distinct expansions of the same number must differ by one at the first place where they differ and then be all $b-1$ against all $0$. So each real in $(0,1)$ whose expansion terminates in zeros has exactly two expansions and every other real exactly one; forbidding the all-$(b-1)$ tails picks one from each pair.

- **The hypothesis $x < 1$ is not a restriction on the theorem so much as on the notation.** The all-$(b-1)$ sequence sums to $1$, as step 8.1 computes, and $1$ is not in $[0,1)$; a base-$b$ expansion of a general nonnegative real is an integer part together with an expansion of the fractional part, and the integer part is not available here.
