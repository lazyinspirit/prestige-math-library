---
id: thm-cantor-function-properties
kind: theorem
title: "The Cantor function is well defined, satisfies $c(x) \\le c(y)$ whenever $x \\le y$, is surjective onto $[0,1]$, and is constant on every interval removed from the Cantor set"
status: published
origin: session
deps: [def-cantor-function, thm-cantor-set-ternary-description, thm-cantor-set-properties, def-cantor-set, def-series, thm-geometric-series, thm-nonnegative-series-bounded-partial-sums, lem-series-linearity, def-interval, def-bounded-set, lem-sup-unique, lem-sup-epsilon, def-infimum, lem-inf-epsilon, thm-infimum-property, def-integer-power, lem-power-laws, thm-recursion, thm-induction-principle, thm-well-ordering-principle, lem-geometric-sequence-null, def-real-limit, lem-limit-unique, def-sequence, def-open-and-closed-in-r, thm-closure-characterisations-r, def-interior-closure-boundary-r, def-neighbourhood-r, lem-finite-set-has-max, def-max-min, def-injection-surjection-bijection, lem-of-abs-value, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
forward_refs: [ex-cantor-function-values]
aliases: []
landmark: true
short: "Cantor function: monotone, onto, flat on gaps"
proof_strategy: direct
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
    - title: "Cantor function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_function"
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
pipeline_run: null
---

## Statement

Let $C$ be the Cantor set, $\gamma : C \to [0,1]$ and $c : [0,1] \to \mathbb{R}$
as in [[def-cantor-function]]. Then:

1. $c$ is well defined with values in $[0,1]$, and $c(t) = \gamma(t)$ for every
   $t \in C$, so $c$ extends $\gamma$;
2. $c(x) \le c(y)$ whenever $0 \le x \le y \le 1$;
3. $c$ is surjective onto $[0,1]$
   ([[def-injection-surjection-bijection]]), and $c(0) = 0$, $c(1) = 1$;
4. $c$ is constant on $[u,v]$ whenever $u < v$, $u, v \in C$ and
   $(u,v) \cap C = \varnothing$; and every $x \in [0,1] \setminus C$ lies in the
   open interval of such a pair, so $c$ is constant on a whole neighbourhood of
   every point of $[0,1]$ outside $C$.

Claim 2 is what "monotone" names for a function; that word is not used here,
because [[def-monotone-sequence]] is about sequences and no definition of a
monotone function is available at this point in the reading order. Claim 4 is
what "constant on every interval removed in the construction" means: the removed
intervals are gaps of $C$ in the sense of claim 4, as
$(\tfrac13, \tfrac23)$ illustrates. **No claim whatever is made here about
continuity**, for which no definition is available at this point in the reading
order.

## Facts & Assumptions

**Given:** The Cantor set $C$, the set $D$ of $\{0,2\}$-valued sequences, the bijection $\Phi : D \to C$, and the functions $\gamma$ and $c$ of [[def-cantor-function]]. For $x \in C$ write $\Phi^{-1}(x)$ for its digit sequence.

[L1] $\Phi(a) = \sum_{k \ge 0} a_k 3^{-k-1}$ is a bijection from $D$ onto $C$, with two-sided inverse $\Phi^{-1}$; $\gamma(x) = \sum_{k \ge 0}(a_k 2^{-1})2^{-k-1}$ for $a = \Phi^{-1}(x)$, with values in $[0,1]$; $c(x) = \sup\{\gamma(t) : t \in C,\ t \le x\}$, the supremum of a nonempty set bounded above by $1$ and containing $\gamma(0)$ ([[thm-cantor-set-ternary-description]], [[def-cantor-function]], [[def-injection-surjection-bijection]], [[def-complete-ordered-field]], [[def-bounded-set]], [[lem-sup-unique]]).

[L2] $\sum_{k=0}^{\infty} r^{k} = 1/(1-r)$ for $|r|<1$, so $\sum_{k \ge m} 2^{-k-1} = 2^{-m}$ and $\sum_{k \ge m} 2 \cdot 3^{-k-1} = 3^{-m}$; convergent series add and scale termwise; a series of nonnegative terms has nonnegative sum and all partial sums at most the sum ([[thm-geometric-series]], [[lem-series-linearity]], [[thm-nonnegative-series-bounded-partial-sums]], [[def-series]], [[def-integer-power]], [[lem-power-laws]]).

[L3] $C$ is closed and $0, 1 \in C$; $\overline{A}$ is the set of points every neighbourhood of which meets $A$, and a closed set equals its closure ([[thm-cantor-set-properties]], [[def-cantor-set]], [[def-open-and-closed-in-r]], [[thm-closure-characterisations-r]], [[def-interior-closure-boundary-r]], [[def-neighbourhood-r]]).

[L4] Suprema: $u = \sup S$ exactly when $u$ is an upper bound and for every $\varepsilon > 0$ some $s \in S$ has $u - \varepsilon < s$; infima exist for nonempty sets bounded below, and $\ell = \inf S$ exactly when $\ell$ is a lower bound and for every $\varepsilon > 0$ some $s \in S$ has $s < \ell + \varepsilon$; both are unique; a supremum is monotone in the set, since an upper bound of a larger set bounds a smaller one ([[lem-sup-epsilon]], [[lem-inf-epsilon]], [[thm-infimum-property]], [[def-infimum]], [[lem-sup-unique]], [[def-complete-ordered-field]], [[def-bounded-set]]).

[L5] Recursion and induction on $\mathbb{N}$; every nonempty subset of $\mathbb{N}$ has a least element ([[thm-recursion]], [[thm-induction-principle]], [[thm-well-ordering-principle]]).

[L6] $2^{-n} \to 0$; convergence is tested against rational $\varepsilon > 0$; a convergent sequence has exactly one limit; $|z| \ge 0$ and $|z| = z$ for $z \ge 0$ ([[lem-geometric-sequence-null]], [[def-real-limit]], [[lem-limit-unique]], [[def-sequence]], [[lem-of-abs-value]]).

[L7] Every nonempty finite set of reals has a minimum ([[lem-finite-set-has-max]], [[def-max-min]]).

[L8] $[u,v]$ and $(u,v)$ are the intervals of [[def-interval]], and $N_\varepsilon(x) = (x-\varepsilon,x+\varepsilon)$ ([[def-neighbourhood-r]]).

[L9] Ordered-field arithmetic: $0 < 1$, so $2 > 0$, $3 > 0$ and $2^{-1} > 0$; adding a constant and multiplying by a positive preserve an inequality; the order is total and transitive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 **Comparison of two digit sequences.** Let $a \ne b$ in $D$ and let $k$ be the least index with $a_k \ne b_k$, which exists by [L5]; suppose $a_k = 0$ and $b_k = 2$. Then $\Phi(b) - \Phi(a) = \sum_{j \ge 0}(b_j - a_j)3^{-j-1}$ by [L2], the terms with $j < k$ vanish, and the tail $R := \sum_{j \ge k+1}(b_j - a_j)3^{-j-1}$ satisfies $|R| \le \sum_{j \ge k+1} 2 \cdot 3^{-j-1} = 3^{-k-1}$ by [L2], since $|b_j - a_j| \le 2$; hence $\Phi(b) - \Phi(a) \ge 2 \cdot 3^{-k-1} - 3^{-k-1} = 3^{-k-1} > 0$. The same computation with the halved digits gives $\gamma(\Phi(b)) - \gamma(\Phi(a)) = 2^{-k-1} + R'$ with $|R'| \le \sum_{j \ge k+1} 2^{-j-1} = 2^{-k-1}$, so $\gamma(\Phi(b)) \ge \gamma(\Phi(a))$. Consequently, for $s, t \in C$ with $s \le t$ one has $\gamma(s) \le \gamma(t)$: this is trivial if $s = t$, and otherwise the least index $k$ at which the digit sequences differ must have the digit of $t$ equal to $2$, by the first computation applied both ways. [given, L1, L2, L5, L9]

1.2 **Values at the endpoints.** The constant sequence $\bar 0$ has $\Phi(\bar 0) = 0$ and $\gamma(0) = 0$; the constant sequence $\bar 2$ has $\Phi(\bar 2) = \sum_{k \ge 0} 2 \cdot 3^{-k-1} = 1$ and $\gamma(1) = \sum_{k \ge 0} 2^{-k-1} = 1$, by [L2]. Both $0$ and $1$ lie in $C$ by [L3]. [L1, L2, L3]

2.1 **Claims 1 and 2.** For $x \in [0,1]$ the set $A_x := \{\gamma(t) : t \in C,\ t \le x\}$ is nonempty and bounded above by $1$ by [L1], so $c(x) = \sup A_x$ exists, is unique and lies in $[0,1]$ by [L1] and [L4]; that is claim 1 apart from the extension property. If $0 \le x \le y \le 1$ then $A_x \subseteq A_y$, so $c(x) \le c(y)$ by [L4], which is claim 2. And for $t \in C$: $\gamma(t) \in A_t$, while $\gamma(t)$ is an upper bound of $A_t$ by step 1.1, so $\gamma(t) = \sup A_t = c(t)$ by [L4]. [step 1.1, step 1.2, L1, L4]

2.2 **The two endpoints of a gap carry the same value of $\gamma$.** Let $u < v$ with $u, v \in C$ and $(u,v) \cap C = \varnothing$, and put $a := \Phi^{-1}(u)$, $b := \Phi^{-1}(v)$, with $k$ the least index where they differ; by step 1.1 and $u < v$ we have $a_k = 0$ and $b_k = 2$. If some $j > k$ had $a_j = 0$, let $a'$ agree with $a$ except that $a'_j = 2$; then $\Phi(a') \in C$, $\Phi(a') > u$ by step 1.1, and $a'$ still differs from $b$ first at $k$ with $a'_k = 0 < 2 = b_k$, so $\Phi(a') < v$ by step 1.1, putting $\Phi(a')$ in $(u,v) \cap C$, which is empty. Hence $a_j = 2$ for every $j > k$. Symmetrically, if some $j > k$ had $b_j = 2$, replacing it by $0$ gives $b'$ with $\Phi(b') < v$ and $\Phi(b') > u$, again impossible; hence $b_j = 0$ for every $j > k$. Writing $P := \sum_{j<k}(a_j 2^{-1})2^{-j-1} = \sum_{j<k}(b_j 2^{-1})2^{-j-1}$, [L2] now gives $\gamma(u) = P + 0 + \sum_{j \ge k+1} 2^{-j-1} = P + 2^{-k-1}$ and $\gamma(v) = P + 2^{-k-1} + 0 = P + 2^{-k-1}$, so $\gamma(u) = \gamma(v)$. [step 1.1, L1, L2, L9]

3.1 **Claim 4, first half.** Let $u < v$ with $u,v \in C$ and $(u,v) \cap C = \varnothing$, and let $x \in [u,v]$. Every $t \in C$ with $t \le x$ satisfies $t \le u$ or $t = v$: indeed if $t > u$ then $t \le x \le v$ and $t \notin (u,v)$ force $t = v$. In the first case $\gamma(t) \le \gamma(u)$ by step 1.1, and in the second $\gamma(t) = \gamma(v) = \gamma(u)$ by step 2.2. So $\gamma(u)$ is an upper bound of $A_x$ and belongs to it, whence $c(x) = \gamma(u)$ by [L4]: $c$ is constant on $[u,v]$, with the value $c(u)$ given by step 2.1. [step 1.1, step 2.1, step 2.2, L4, L9]

3.2 **Claim 3.** Let $s \in [0,1]$. Let $T : \mathbb{R} \to \mathbb{R}$ be $T(r) := 2r$ for $r < 2^{-1}$ and $T(r) := 2r - 1$ for $r \ge 2^{-1}$, a definition by cases on the total order, and by [L5] let $(r_n)$ satisfy $r_0 = s$ and $r_{n+1} = T(r_n)$; put $\beta_n := 0$ when $r_n < 2^{-1}$ and $\beta_n := 1$ otherwise, so $r_{n+1} = 2r_n - \beta_n$. An induction ([L5]) gives $r_n \in [0,1]$ for every $n$, since $0 \le r < 2^{-1}$ gives $0 \le 2r < 1$ and $2^{-1} \le r \le 1$ gives $0 \le 2r - 1 \le 1$ by [L9]; a second induction gives $s = \sum_{k<n}\beta_k 2^{-k-1} + 2^{-n} r_n$ for every $n$, the step being $\sum_{k<n+1}\beta_k2^{-k-1} + 2^{-n-1}r_{n+1} = \sum_{k<n}\beta_k2^{-k-1} + \beta_n 2^{-n-1} + 2^{-n-1}(2r_n - \beta_n) = \sum_{k<n}\beta_k2^{-k-1} + 2^{-n}r_n$. Hence $0 \le s - \sum_{k<n}\beta_k2^{-k-1} \le 2^{-n}$, so by [L6] the partial sums converge to $s$ and $s = \sum_{k \ge 0}\beta_k 2^{-k-1}$. Now $a := (2\beta_k)_k$ lies in $D$, the point $x := \Phi(a)$ lies in $C$ by [L1], and $\gamma(x) = \sum_k \beta_k 2^{-k-1} = s$; by step 2.1, $c(x) = \gamma(x) = s$. With step 1.2 and step 2.1 this also gives $c(0) = \gamma(0) = 0$ and $c(1) = \gamma(1) = 1$. [step 1.2, step 2.1, L1, L2, L5, L6, L9]

4.1 **Claim 4, second half.** Let $x \in [0,1] \setminus C$. The set $A := \{t \in C : t \le x\}$ is nonempty by [L3] and bounded above by $x$, so $u := \sup A$ exists by [L4]; by [L4] every $N_\varepsilon(u)$ meets $A \subseteq C$, so $u \in \overline{C} = C$ by [L3], and $u \le x$ with $u \ne x$, so $u < x$. The set $B := \{t \in C : t \ge x\}$ is nonempty by [L3], since $1 \in C$ and $x \le 1$, and is bounded below by $x$, so $v := \inf B$ exists by [L4]; likewise $v \in C$ and $v > x$. If $t \in C$ satisfied $u < t < v$, then $t \le x$ would put $t \in A$ and force $t \le u$, while $t \ge x$ would put $t \in B$ and force $t \ge v$, and one of the two holds by totality of the order ([L9]); so $(u,v) \cap C = \varnothing$. By step 3.1 the function $c$ is constant on $[u,v]$, and $N_\delta(x) \subseteq (u,v)$ for $\delta := \min\{x - u,\ v - x\} > 0$ by [L7], [L8] and [L9]. [step 3.1, L3, L4, L7, L8, L9]

5.1 Claims 1 and 2 are step 2.1, claim 3 is step 3.2, and claim 4 is steps 3.1 and 4.1 together; so all four hold. [step 2.1, step 3.1, step 3.2, step 4.1] ∎

## Remarks

- **The gap $(\tfrac13,\tfrac23)$ worked out.** $\tfrac13 = \Phi(0,2,2,2,\dots)$
  and $\tfrac23 = \Phi(2,0,0,0,\dots)$, both in $C$, and
  $C \subseteq C_1 = [0,\tfrac13] \cup [\tfrac23,1]$ ([[def-cantor-set]]) shows
  $(\tfrac13,\tfrac23) \cap C = \varnothing$. Step 2.2 gives
  $\gamma(\tfrac13) = \gamma(\tfrac23) = \tfrac12$, so $c \equiv \tfrac12$ on
  $[\tfrac13, \tfrac23]$; this and three further values are computed in
  [[ex-cantor-function-values]].

- **Where each hypothesis is used.** Step 1.1 is the only place the ternary
  comparison is made, and everything else rests on it: monotonicity of $c$ comes
  from monotonicity of the set $A_x$, and the constancy across gaps comes from
  step 2.2, which is a statement about digit sequences and not about the topology
  of $C$.

- **What is deliberately absent.** Continuity, differentiability and any
  statement about the derivative of $c$ are outside the vocabulary available at
  this point in the reading order and none of them is asserted anywhere above.
  What is proved is that $c$ climbs from $0$ to $1$, never decreases, misses no
  value of $[0,1]$, and is locally constant off a set of measure zero
  ([[thm-cantor-set-properties]]). That combination is already the paradoxical
  content of the example.

- **Surjectivity is a binary expansion theorem in disguise.** Step 3.2 constructs
  the binary digits of an arbitrary $s \in [0,1]$ by the same canonical recursion
  that [[thm-cantor-set-ternary-description]] uses for ternary digits, so no
  general expansion theorem is presupposed and no choice is made.
