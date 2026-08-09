## Selection reasons

- critical risk (16): 19 declared dependencies; 18 cited facts; 29 numbered proof steps; biconditional / both-direction claim; boundary-sensitive language; induction, recursion, or minimality; analytic limiting/completeness language
- top-20 dependency-cone consumer (19 generated manifest edges)

## Target item — `thm-riemann-series-theorem`

Normalized current SHA-256: `ba34916be40907b340b228a8751aa920327ab5b7f756c3fa21e0f4f310fc2eca`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-riemann-series-theorem
kind: theorem
title: "The Riemann series theorem: a conditionally convergent real series has, for every $c \\in \\mathbb{R}$, a rearrangement with sum $c$, and rearrangements diverging to $+\\infty$, to $-\\infty$, and oscillating with any prescribed $\\liminf \\le \\limsup$ in $\\overline{\\mathbb{R}}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-positive-and-negative-parts, def-rearrangement-and-unconditional-convergence, def-absolute-and-conditional-convergence, lem-nth-term-test, thm-recursion, thm-well-ordering-principle, def-injection-surjection-bijection, def-divergence-to-infinity, def-limsup-liminf, def-extended-reals, def-extended-limits, thm-convergence-iff-limsup-equals-liminf, thm-nonnegative-series-bounded-partial-sums, def-series, def-finite-sum, lem-finite-sum-laws, lem-limit-preserves-order, thm-induction-principle, def-real-limit]
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
    - title: "Riemann series theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_series_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "N. Donaldson, Math 140A: Real Analysis notes"
      url: "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf"
    - title: "John K. Hunter, An Introduction to Real Analysis, Chapter 4"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch4.pdf"
    - title: "W. Fisher, Introduction to Analysis"
      url: "https://math.berkeley.edu/~willfisher/teaching/104sm24/main.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals whose series converges conditionally
([[def-absolute-and-conditional-convergence]]). Let $\alpha, \beta \in
\overline{\mathbb{R}}$ ([[def-extended-reals]]) with $\alpha \le \beta$. Then
there is a bijection $\sigma : \mathbb{N} \to \mathbb{N}$
([[def-injection-surjection-bijection]]) such that the partial sums
$T_n = \sum_{k<n} a_{\sigma(k)}$ of the rearranged series
([[def-rearrangement-and-unconditional-convergence]]) satisfy

$$\liminf_{n} T_n = \alpha, \qquad \limsup_{n} T_n = \beta$$

([[def-limsup-liminf]]). In particular:

1. for every $c \in \mathbb{R}$, taking $\alpha = \beta = c$, there is a
   rearrangement of $\sum a_k$ that converges with sum $c$;
2. taking $\alpha = \beta = +\infty$, there is a rearrangement whose partial sums
   diverge to $+\infty$ ([[def-divergence-to-infinity]]), and taking
   $\alpha = \beta = -\infty$, one whose partial sums diverge to $-\infty$;
3. taking $\alpha < \beta$, there is a rearrangement whose partial sums oscillate,
   with limit inferior exactly $\alpha$ and limit superior exactly $\beta$.

So the sum of a conditionally convergent series is an artefact of the order in
which its terms are written, and every prescribed asymptotic behaviour is
attainable. Contrast [[thm-dirichlet-rearrangement]], where absolute convergence
makes the sum independent of the order.

**The construction.** Write $P := \{k : a_k \ge 0\}$ and $N := \{k : a_k < 0\}$,
which partition $\mathbb{N}$, and enumerate each increasingly as $(p_i)$ and
$(q_l)$. Fix real sequences $(u_j)$ and $(v_j)$ with $u_j \le v_j$ and
$u_j \le v_{j+1}$ for every $j$; these are the *targets*. The rearrangement is
produced one index at a time by a greedy rule: **while the running sum is at most
the current upper target, take the next unused nonnegative term; once it exceeds
that target, take negative terms until the running sum falls below the current
lower target; then move to the next pair of targets and repeat.** Both supplies
are inexhaustible, because for a conditionally convergent series both
$\sum a_k^{+}$ and $\sum a_k^{-}$ diverge to $+\infty$
([[lem-positive-and-negative-parts]]); and the overshoot at each turning point is
at most the term just used, which tends to $0$ because $a_k \to 0$
([[lem-nth-term-test]]). Those two facts are the whole theorem.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with $\sum a_k$ convergent and $\sum |a_k|$ divergent; the positive and negative parts $a_k^{+}$, $a_k^{-}$; the sets $P = \{k : a_k \ge 0\}$ and $N = \{k : a_k < 0\}$; and extended reals $\alpha \le \beta$.

[A1] $P$ and $N$ are disjoint with union $\mathbb{N}$, since the order on $\mathbb{R}$ is total; $a_k^{+} = a_k$ and $a_k^{-} = 0$ for $k \in P$, while $a_k^{+} = 0$ and $a_k^{-} = -a_k$ for $k \in N$ ([[lem-positive-and-negative-parts]]).

[L1] For a conditionally convergent series, the partial sums of $\sum a_k^{+}$ and of $\sum a_k^{-}$ both diverge to $+\infty$ ([[lem-positive-and-negative-parts]], [[def-divergence-to-infinity]]).

[L2] The terms of a convergent series tend to $0$ ([[lem-nth-term-test]]).

[L3] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L4] The recursion theorem: for a set $A$, an element $a \in A$ and a function $f : A \to A$ there is a unique $g : \mathbb{N} \to A$ with $g(0) = a$ and $g(n+1) = f(g(n))$ ([[thm-recursion]]).

[L5] The principle of induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L6] Finite sums: $\sum_{k<0} x_k = 0$, $\sum_{k<n+1}x_k = \sum_{k<n}x_k + x_n$, splitting at an intermediate index, and $\sum_{k<n} 0 = 0$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L7] Partial sums of a series and their recursion $s_{n+1} = s_n + a_n$ ([[def-series]]).

[L8] Limits preserve non-strict inequalities holding eventually ([[lem-limit-preserves-order]], [[def-real-limit]]).

[L9] A bijection is an injective surjection ([[def-injection-surjection-bijection]]).

[L10] $\limsup_n x_n = \inf\{\, \sup\{x_m : m \ge n\} : n \in \mathbb{N} \,\}$ and $\liminf_n x_n = \sup\{\, \inf\{x_m : m \ge n\} : n \in \mathbb{N}\,\}$, both taken in $\overline{\mathbb{R}}$ ([[def-limsup-liminf]], [[def-extended-reals]]).

[L11] A sequence converges to a real $L$ exactly when its limit inferior and limit superior both equal $L$, and diverges to $\pm\infty$ exactly when both equal $\pm\infty$ ([[thm-convergence-iff-limsup-equals-liminf]], [[def-extended-limits]]).

[L12] For nonnegative terms, a series diverges exactly when the range of its partial sums is unbounded above, and then those partial sums diverge to $+\infty$ ([[thm-nonnegative-series-bounded-partial-sums]]).

## Proof

**Proof technique:** constructive.

1.1 Since $\sum a_k$ converges, $a_k \to 0$. [given, L2]

1.2 For every $K \in \mathbb{N}$ there is $k \ge K$ with $k \in P$: otherwise $a_k < 0$ for every $k \ge K$, so $a_k^{+} = 0$ for every $k \ge K$, so the partial sums of $\sum a_k^{+}$ are constant from $K$ on and hence bounded, contradicting [L1]. The same argument with $a_k^{-}$ shows that for every $K$ there is $k \ge K$ with $k \in N$. [A1, L1, L6, L12]

2.1 In particular $P$ and $N$ are nonempty, and for every $k$ the sets $\{m \in P : m > k\}$ and $\{m \in N : m > k\}$ are nonempty; so by [L3] each has a least element. [step 1.2, L3]

3.1 Define $p : \mathbb{N} \to \mathbb{N}$ by $p_0 := \min P$ and $p_{i+1} := \min\{m \in P : m > p_i\}$, and $q : \mathbb{N} \to \mathbb{N}$ by $q_0 := \min N$ and $q_{l+1} := \min\{m \in N : m > q_l\}$; both are legitimate applications of the recursion theorem, the "next element" operations being total functions $\mathbb{N} \to \mathbb{N}$ by step 2.1. Both $p$ and $q$ take values in $P$, respectively $N$, and are strictly increasing. [step 2.1, L3, L4, construct]

4.1 An induction gives $p_i \ge i$ and $q_l \ge l$ for every index, since $p_0 \ge 0$ and $p_{i+1} > p_i \ge i$ forces $p_{i+1} \ge i+1$. [step 3.1, L5]

4.2 An induction on $i$ gives $P \cap \{k : k < p_i\} = \{p_{i'} : i' < i\}$: at $i = 0$ both sides are empty because $p_0$ is the least element of $P$; and passing from $i$ to $i+1$ adds exactly $p_i$, since $p_{i+1}$ is the least element of $P$ strictly greater than $p_i$, so no element of $P$ lies strictly between them. The same holds for $q$ and $N$. [step 3.1, L5]

4.3 Fix real sequences $(u_j)$ and $(v_j)$ with $u_j \le v_j$ and $u_j \le v_{j+1}$ for every $j$. Put $A := \mathbb{N} \times \mathbb{N} \times \mathbb{N} \times \mathbb{R} \times \{0,1\}$, whose elements are written $(i, l, j, s, m)$, and define $\mathrm{out} : A \to \mathbb{N}$ and $f : A \to A$ by: if $m = 0$ and $s \le v_j$, then $\mathrm{out} := p_i$ and $f := (i+1, l, j, s + a_{p_i}, 0)$; if $m = 0$ and $s > v_j$, then $\mathrm{out} := q_l$ and $f := (i, l+1, j, s + a_{q_l}, 1)$; if $m = 1$ and $s \ge u_j$, then $\mathrm{out} := q_l$ and $f := (i, l+1, j, s + a_{q_l}, 1)$; if $m = 1$ and $s < u_j$, then $\mathrm{out} := p_i$ and $f := (i+1, l, j+1, s + a_{p_i}, 0)$. The four cases are exhaustive and mutually exclusive, the order on $\mathbb{R}$ being total, so $f$ and $\mathrm{out}$ are functions. [step 3.1, construct]

5.1 Every element of $P$ is some $p_i$, and every element of $N$ is some $q_l$: given $k \in P$, the set $\{i : p_i > k\}$ is nonempty by step 4.1, so it has a least element $i_0$; $i_0 \ne 0$ since $p_0 = \min P \le k$, and $p_{i_0 - 1} \le k < p_{i_0}$, so $k \in P \cap \{m : m < p_{i_0}\} = \{p_{i'} : i' < i_0\}$ by step 4.2. Together with step 3.1 this says that $p$ is a bijection onto $P$ and $q$ a bijection onto $N$; both are injective because they are strictly increasing. [step 3.1, step 4.1, step 4.2, L3, L9]

5.2 An induction on $i$ gives $\sum_{i' < i} a_{p_{i'}} = \sum_{k < p_i} a_k^{+}$: at $i = 0$ every $k < p_0$ lies in $N$, so $a_k^{+} = 0$ and both sides are $0$; and splitting $\sum_{k<p_{i+1}} a_k^{+}$ at $p_i$ and at $p_i + 1$ isolates the single term $a_{p_i}^{+} = a_{p_i}$, all remaining indices $k$ with $p_i < k < p_{i+1}$ lying in $N$ by step 4.2 and contributing $0$. The same argument gives $\sum_{l' < l} a_{q_{l'}} = -\sum_{k<q_l} a_k^{-}$. [A1, step 3.1, step 4.2, L5, L6]

5.3 By the recursion theorem let $g : \mathbb{N} \to A$ satisfy $g(0) = (0,0,0,0,0)$ and $g(n+1) = f(g(n))$, write $g(n) = (i_n, l_n, j_n, s_n, m_n)$, and define $\sigma(n) := \mathrm{out}(g(n))$. [step 4.3, L4, construct]

5.4 For general $\alpha \le \beta$ choose real sequences with $u_j \le v_j$ and $u_j \le v_{j+1}$ as follows: if $\alpha, \beta$ are real, $u_j := \alpha$ and $v_j := \beta$; if $\alpha = -\infty$ and $\beta$ is real, $u_j := \beta - (j+1)$ and $v_j := \beta$; if $\alpha$ is real and $\beta = +\infty$, $u_j := \alpha$ and $v_j := \alpha + (j+1)$; if $\alpha = \beta = +\infty$, $u_j := j$ and $v_j := j+1$; if $\alpha = \beta = -\infty$, $u_j := -(j+2)$ and $v_j := -(j+1)$; and if $\alpha = -\infty$, $\beta = +\infty$, $u_j := -(j+1)$ and $v_j := j+1$. In every case $(u_j)$ tends to $\alpha$ and $(v_j)$ to $\beta$ in $\overline{\mathbb{R}}$, and both conditions of step 4.3 hold. [step 4.3, L11, choose]

6.1 Hence $\sum_{i'<i} a_{p_{i'}} \to +\infty$ as $i \to \infty$ and $\sum_{l'<l} a_{q_{l'}} \to -\infty$ as $l \to \infty$: the left-hand sides are the values of the partial sums of $\sum a_k^{+}$, respectively of $-\sum a_k^{-}$, at the strictly increasing indices $p_i$, respectively $q_l$, and by step 4.1 those indices are at least $i$, respectively $l$. [step 4.1, step 5.2, L1]

6.2 An induction on $n$ gives $i_n + l_n = n$ and $s_n = \sum_{k<n} a_{\sigma(k)}$: both hold at $n = 0$, and each transition increases exactly one of $i, l$ by one and adds to $s$ exactly the term $a_{\sigma(n)}$ indexed by the emitted natural. So $s_n = T_n$, the $n$-th partial sum of the rearranged series. [step 4.3, step 5.3, L5, L7]

7.1 Consequently, for every $i_0 \in \mathbb{N}$ and every real $M$ there is $i > i_0$ with $\sum_{i'=i_0}^{i-1} a_{p_{i'}} > M$, and for every $l_0$ and every real $M$ there is $l > l_0$ with $\sum_{l' = l_0}^{l-1} a_{q_{l'}} < M$; this is step 6.1 together with splitting of finite sums, the omitted initial block being a fixed real. [step 6.1, L6]

7.2 An induction on $n$ gives that $\sigma(n) = p_{i_n}$ at every step that increments $i$, and $\sigma(n) = q_{l_n}$ at every step that increments $l$; since $(i_n)$ and $(l_n)$ are nondecreasing and increase by one exactly at those steps, distinct steps of the first kind carry distinct values of $i_n$ and distinct steps of the second kind distinct values of $l_n$. As $p$ and $q$ are injective with disjoint ranges $P$ and $N$, the map $\sigma$ is injective. [step 4.3, step 6.2, step 5.1, L5]

8.1 There are infinitely many steps of each kind: if from some step $n_0$ on no step increments $l$, then $m_n$ is eventually constantly $0$, because a step with $m = 1$ that does not increment $l$ sets $m$ to $0$ and a step with $m = 0$ that does not increment $l$ leaves $m$ at $0$; then $j_n$ is eventually constant, say $j$, and every subsequent step satisfies $s_n \le v_{j}$, while by step 7.1 the values $s_n$, which from $n_0$ on increase by the successive terms $a_{p_i}$, exceed $v_j$ for some $n$. Symmetrically, if from some step on no step increments $i$, then $m_n$ is eventually constantly $1$, $j_n$ is eventually constant $j$, every subsequent step satisfies $s_n \ge u_j$, and step 7.1 makes $s_n$ fall below $u_j$. [step 7.1, step 4.3, step 6.2, L5]

9.1 Hence $i_n \to \infty$ and $l_n \to \infty$, so every $p_i$ and every $q_l$ occurs as some $\sigma(n)$; since $P \cup N = \mathbb{N}$ and $p, q$ enumerate $P$ and $N$, the map $\sigma$ is surjective, and with step 7.2 it is a bijection of $\mathbb{N}$. [A1, step 5.1, step 7.2, step 8.1, L9]

9.2 Likewise $j_n \to \infty$: if $j_n$ were eventually constant $j$, then from some step on no round is completed, so no step has $m = 1$ and $s < u_j$; by the argument of step 8.1 the mode is then eventually constant, and either it is $0$ forever, whence $s_n \le v_j$ always while $s_n$ increases past $v_j$, or it is $1$ forever, whence $s_n \ge u_j$ always while $s_n$ falls below $u_j$. [step 7.1, step 4.3, step 8.1]

10.1 For each $j \ge 1$ let $\beta_j$ be the step at which the mode of round $j$ changes from $0$ to $1$, that is the unique $n$ with $j_n = j$, $m_n = 0$ and $s_n > v_j$, and let $\alpha_j$ be the step at which round $j$ is completed, the unique $n$ with $j_n = j$, $m_n = 1$ and $s_n < u_j$; both exist by step 8.1 and step 9.2, and $\alpha_{j-1} < \beta_j < \alpha_j$. [step 4.3, step 8.1, step 9.2, choose]

11.1 The step $\beta_j$ is preceded, within round $j$, either by a step that added a term $a_{p_i} \ge 0$ to a value $s \le v_j$, or by the completing step $\alpha_{j-1}$ of the previous round, which added a term $a_{p_i} \ge 0$ to a value $s < u_{j-1} \le v_j$. In both situations $v_j < T_{\beta_j} \le v_j + a_{p_i}$ for the index $i$ used at the immediately preceding step. [step 4.3, step 10.1]

11.2 Likewise the step $\alpha_j$ is preceded within round $j$ by a step that added a term $a_{q_l} < 0$ to a value $s \ge u_j$, that step being either an earlier descent step or the switch $\beta_j$ itself, at which $s > v_j \ge u_j$; so $u_j - |a_{q_l}| \le T_{\alpha_j} < u_j$ for the index $l$ used at that step. [step 4.3, step 10.1]

11.3 For $\alpha_{j-1} \le n \le \beta_j$ the partial sums increase, every step of the climb adding a term $a_{p_i} \ge 0$; for $\beta_j \le n \le \alpha_j$ they decrease, every step of the descent adding a term $a_{q_l} < 0$. Hence for every $n$ with $\alpha_{j-1} \le n \le \alpha_j$ one has $\min\{T_{\alpha_{j-1}}, T_{\alpha_j}\} \le T_n \le T_{\beta_j}$. [A1, step 4.3, step 10.1]

12.1 Put $\delta_j := \max\{a_{p_{i(j)}},\, |a_{q_{l(j)}}|\}$ for the two indices appearing in step 11.1 and step 11.2. As $j \to \infty$ those indices tend to infinity, by step 8.1 and step 9.2, so $p_{i(j)} \to \infty$ and $q_{l(j)} \to \infty$ by step 4.1, and $\delta_j \to 0$ by step 1.1. Thus $v_j < T_{\beta_j} \le v_j + \delta_j$ and $u_j - \delta_j \le T_{\alpha_j} < u_j$ for every $j \ge 1$. [step 1.1, step 4.1, step 8.1, step 9.2, step 11.1, step 11.2]

12.2 Fix $n$ and let $J$ be least with $\alpha_{J-1} \ge n$, which exists because the $\alpha_j$ are strictly increasing. By step 11.3 every $m \ge \alpha_{J-1}$ satisfies $T_m \le \sup\{T_{\beta_j} : j \ge J\}$, and only the finitely many indices $m$ with $n \le m < \alpha_{J-1}$ are unaccounted for; each of those lies in a round of index at most $J-1$ and so is at most $\max\{T_{\beta_j} : 1 \le j \le J-1\}$ together with $T_n$ itself. Hence $\sup\{T_m : m \ge n\}$ is finite or $+\infty$ according as $\sup\{T_{\beta_j} : j \ge J\}$ is, and taking the infimum over $n$, which drives $J$ to infinity, gives $\limsup_n T_n = \limsup_j T_{\beta_j}$. [step 10.1, step 11.3, L10]

13.1 Take $u_j = v_j = c$ for all $j$, which satisfies the two conditions of step 4.3. Then $c < T_{\beta_j} \le c + \delta_j$ and $c - \delta_j \le T_{\alpha_j} < c$, so by step 11.3 every $n$ with $\alpha_{j-1} \le n \le \alpha_j$ has $|T_n - c| \le \max\{\delta_{j-1}, \delta_j\}$. Given a real $\varepsilon > 0$, choose $J \ge 2$ with $\delta_j < \varepsilon$ for all $j \ge J-1$; then $|T_n - c| < \varepsilon$ for all $n \ge \alpha_{J-1}$, so $T_n \to c$ and the rearranged series converges with sum $c$. This is claim 1. [step 12.1, step 11.3, L8]

13.2 Take $v_j = j+1$ and $u_j = j$, which satisfy the two conditions. Then $T_{\alpha_j} \ge u_j - \delta_j = j - \delta_j$, so by step 11.3 every $n$ with $\alpha_{j-1} \le n \le \alpha_j$ has $T_n \ge \min\{j-1-\delta_{j-1},\, j - \delta_j\}$, a quantity that exceeds any prescribed real for all large $j$; hence $T_n \to +\infty$. Taking instead $v_j = -(j+1)$ and $u_j = -(j+2)$, which also satisfy the two conditions, gives $T_n \le T_{\beta_j} \le v_j + \delta_j = -(j+1) + \delta_j$ on the same ranges, hence $T_n \to -\infty$. This is claim 2. [step 12.1, step 11.3, L8]

13.3 By step 12.1 the subsequence $(T_{\beta_j})_{j \ge 1}$ tends to $\beta$ and $(T_{\alpha_j})_{j\ge1}$ tends to $\alpha$, in $\overline{\mathbb{R}}$: when the target sequence is real-valued and convergent the two-sided bound of step 12.1 with $\delta_j \to 0$ gives it, and when the target sequence diverges the one-sided bound does. [step 12.1, step 5.4, L8, L11]

14.1 By step 13.3 and [L11], $\limsup_j T_{\beta_j} = \beta$; so $\limsup_n T_n = \beta$. The same argument applied to infima, with $\alpha_j$ in place of $\beta_j$ and the lower bound of step 11.3 in place of the upper one, gives $\liminf_n T_n = \liminf_j T_{\alpha_j} = \alpha$. [step 13.3, step 12.2, L10, L11]

15.1 The bijection $\sigma$ of step 5.3, built from the targets chosen in step 5.4, is therefore a rearrangement of $\sum a_k$ whose partial sums have limit inferior $\alpha$ and limit superior $\beta$; claims 1 and 2 are the special cases computed directly in step 13.1 and step 13.2, and claim 3 is the case $\alpha < \beta$. [step 9.1, step 13.1, step 13.2, step 14.1, discharge-construct] ∎

## Remarks

- **Only two properties of the series are used.** That both part series diverge to $+\infty$ ([[lem-positive-and-negative-parts]]), which is what keeps the two supplies inexhaustible, and that $a_k \to 0$ ([[lem-nth-term-test]]), which is what makes the overshoot at each turning point vanish. Both hold for every conditionally convergent series and neither holds for an absolutely convergent one, whose part series both converge.

- **Where the well-ordering principle is used, and where it is not.** It appears in step 2.1 and step 3.1, to define the increasing enumerations of $P$ and $N$, and in step 5.1. It does *not* appear in the greedy rule: "take terms until the running sum crosses the target" is implemented as a one-step recursion whose state carries the two counters, the round and the running sum, so no least crossing index is ever selected. No choice principle is used anywhere; every object is determined by the data.

- **Zero terms are not a special case.** They are collected into $P$, so a run of zeros is consumed during a climb without moving the running sum, and the climb still terminates because the tail sums of $\sum_i a_{p_i}$ are unbounded. Had $P$ been defined as $\{k : a_k > 0\}$, the zero-indexed terms would have had to be inserted separately for $\sigma$ to be surjective.

- **The oscillating case is genuinely more than the two divergences.** With $\alpha < \beta$ both finite, the partial sums visit every neighbourhood of $\alpha$ and of $\beta$ infinitely often and are eventually confined to a neighbourhood of $[\alpha, \beta]$; the subsequential limit set of $(T_n)$ is then the whole interval, though nothing on this page needs that refinement.
````

## Wave 8 provenance row for the target

```json
{
  "id": "thm-riemann-series-theorem",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf",
    "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch4.pdf",
    "https://math.berkeley.edu/~willfisher/teaching/104sm24/main.pdf"
  ],
  "rationale": "Donaldson and Hunter support the classical real Riemann rearrangement theorem. Fisher's Theorem 4.9.4 explicitly gives the stronger prescribed extended-real liminf/limsup form; the item expands it into a bespoke recursive construction with local conventions.",
  "alpha_concurred": false,
  "at": "2026-08-09",
  "ledger": "wave8-real-analysis-absolute-convergence.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "A1",
      "source": "lem-positive-and-negative-parts",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ be a sequence of reals ([[def-series]]) and define its **positive",
      "uses": [
        "1.2",
        "5.2",
        "9.1",
        "11.3"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-positive-and-negative-parts",
      "source_section": "Statement",
      "quote": "$\\sum a_k^{-}$ converges, and the partial sums of each diverge to $+\\infty$",
      "uses": [
        "1.2",
        "6.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-divergence-to-infinity",
      "source_section": "Definition",
      "quote": "- $(x_k)$ **diverges to $+\\infty$**, written $x_k \\to +\\infty$, when for every",
      "uses": [
        "1.2",
        "6.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-nth-term-test",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ be a sequence of reals. If the series $\\sum a_k$ converges",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-well-ordering-principle",
      "source_section": "Statement",
      "quote": "Every nonempty subset $S \\subseteq \\mathbb{N}$ has a least element: there is $\\ell \\in S$ with $\\ell \\le s$ for all $s \\in S$.",
      "uses": [
        "2.1",
        "3.1",
        "5.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-recursion",
      "source_section": "Statement",
      "quote": "Let $(N,0,\\sigma)$ be a Peano system ([[def-peano-system]]), in particular the natural numbers $\\mathbb{N}$ ([[def-natural-numbers]]). For any set $A$, any element $a \\in A$, and any function $f : A \\to A$, there is a unique function $g : N \\to A$ such that $g(0) = a$ and $g(\\sigma(n)) = f(g(n))$ for all $n \\in N$.",
      "uses": [
        "3.1",
        "5.3"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-induction-principle",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{N}$. If $0 \\in S$ and $\\sigma(n) \\in S$ whenever $n \\in S$, then $S = \\mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \\Rightarrow P(\\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \\in \\mathbb{N}$. This is the induction principle, the basis of proof by induction.",
      "uses": [
        "4.1",
        "4.2",
        "5.2",
        "6.2",
        "7.2",
        "8.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-finite-sum",
      "source_section": "Definition",
      "quote": "$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the",
      "uses": [
        "1.2",
        "5.2",
        "7.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-finite-sum-laws",
      "source_section": "Statement",
      "quote": "$\\lambda \\in \\mathbb{R}$, and let $m, n \\in \\mathbb{N}$, with finite sums and",
      "uses": [
        "1.2",
        "5.2",
        "7.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-series",
      "source_section": "Definition",
      "quote": "**Partial sums.** Let $(a_k)$ be a sequence of reals. Its **sequence of partial",
      "uses": [
        "6.2"
      ]
    },
    {
      "fact": "L8",
      "source": "lem-limit-preserves-order",
      "source_section": "Statement",
      "quote": "$x$ and $y$ respectively ([[def-real-limit]]). If $x_k \\le y_k$ eventually, that",
      "uses": [
        "13.1",
        "13.2",
        "13.3"
      ]
    },
    {
      "fact": "L8",
      "source": "def-real-limit",
      "source_section": "Definition",
      "quote": "A sequence $(x_k)$ of reals **converges** to $x \\in \\mathbb{R}$ when for",
      "uses": [
        "13.1",
        "13.2",
        "13.3"
      ]
    },
    {
      "fact": "L9",
      "source": "def-injection-surjection-bijection",
      "source_section": "Definition",
      "quote": "- $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all",
      "uses": [
        "5.1",
        "9.1"
      ]
    },
    {
      "fact": "L10",
      "source": "def-limsup-liminf",
      "source_section": "Definition",
      "quote": "the supremum and infimum taken in $\\overline{\\mathbb{R}}$, which exist for every",
      "uses": [
        "12.2",
        "14.1"
      ]
    },
    {
      "fact": "L10",
      "source": "def-extended-reals",
      "source_section": "Definition",
      "quote": "**The order.** For $a, b \\in \\overline{\\mathbb{R}}$ declare",
      "uses": [
        "12.2",
        "14.1"
      ]
    },
    {
      "fact": "L11",
      "source": "thm-convergence-iff-limsup-equals-liminf",
      "source_section": "Statement",
      "quote": "sequence that neither converges nor diverges to $\\pm\\infty$ is exactly one for",
      "uses": [
        "5.4",
        "13.3",
        "14.1"
      ]
    },
    {
      "fact": "L11",
      "source": "def-extended-limits",
      "source_section": "Definition",
      "quote": "$\\overline{\\operatorname{SL}}(x)$ exactly when some subsequence converges to $L$",
      "uses": [
        "5.4",
        "13.3",
        "14.1"
      ]
    },
    {
      "fact": "L12",
      "source": "thm-nonnegative-series-bounded-partial-sums",
      "source_section": "Statement",
      "quote": "3. if $S$ is not bounded above then $s_n \\to +\\infty$",
      "uses": [
        "1.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Verified the stated inference at step 1.1.",
      "step": "1.1",
      "inputs": [
        "L2"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "Verified the stated inference at step 1.2.",
      "step": "1.2",
      "inputs": [
        "L1",
        "A1",
        "L6",
        "L12"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Verified the stated inference at step 2.1.",
      "step": "2.1",
      "inputs": [
        "L3",
        "1.2"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "Verified the stated inference at step 3.1.",
      "step": "3.1",
      "inputs": [
        "2.1",
        "L3",
        "L4"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "Verified the stated inference at step 4.1.",
      "step": "4.1",
      "inputs": [
        "3.1",
        "L5"
      ]
    },
    {
      "id": "step-4-2",
      "claim": "Verified the stated inference at step 4.2.",
      "step": "4.2",
      "inputs": [
        "3.1",
        "L5"
      ]
    },
    {
      "id": "step-4-3",
      "claim": "Verified the stated inference at step 4.3.",
      "step": "4.3",
      "inputs": [
        "3.1"
      ]
    },
    {
      "id": "step-5-1",
      "claim": "Verified the stated inference at step 5.1.",
      "step": "5.1",
      "inputs": [
        "4.1",
        "4.2",
        "3.1",
        "L3",
        "L9"
      ]
    },
    {
      "id": "step-5-2",
      "claim": "Verified the stated inference at step 5.2.",
      "step": "5.2",
      "inputs": [
        "4.2",
        "A1",
        "3.1",
        "L5",
        "L6"
      ]
    },
    {
      "id": "step-5-3",
      "claim": "Verified the stated inference at step 5.3.",
      "step": "5.3",
      "inputs": [
        "4.3",
        "L4"
      ]
    },
    {
      "id": "step-5-4",
      "claim": "Verified the stated inference at step 5.4.",
      "step": "5.4",
      "inputs": [
        "4.3",
        "L11"
      ]
    },
    {
      "id": "step-6-1",
      "claim": "Verified the stated inference at step 6.1.",
      "step": "6.1",
      "inputs": [
        "4.1",
        "5.2",
        "L1"
      ]
    },
    {
      "id": "step-6-2",
      "claim": "Verified the stated inference at step 6.2.",
      "step": "6.2",
      "inputs": [
        "4.3",
        "5.3",
        "L5",
        "L7"
      ]
    },
    {
      "id": "step-7-1",
      "claim": "Verified the stated inference at step 7.1.",
      "step": "7.1",
      "inputs": [
        "6.1",
        "L6"
      ]
    },
    {
      "id": "step-7-2",
      "claim": "Verified the stated inference at step 7.2.",
      "step": "7.2",
      "inputs": [
        "4.3",
        "6.2",
        "5.1",
        "L5"
      ]
    },
    {
      "id": "step-8-1",
      "claim": "Verified the stated inference at step 8.1.",
      "step": "8.1",
      "inputs": [
        "7.1",
        "4.3",
        "6.2",
        "L5"
      ]
    },
    {
      "id": "step-9-1",
      "claim": "Verified the stated inference at step 9.1.",
      "step": "9.1",
      "inputs": [
        "7.2",
        "A1",
        "5.1",
        "8.1",
        "L9"
      ]
    },
    {
      "id": "step-9-2",
      "claim": "Verified the stated inference at step 9.2.",
      "step": "9.2",
      "inputs": [
        "8.1",
        "7.1",
        "4.3"
      ]
    },
    {
      "id": "step-10-1",
      "claim": "Verified the stated inference at step 10.1.",
      "step": "10.1",
      "inputs": [
        "8.1",
        "9.2",
        "4.3"
      ]
    },
    {
      "id": "step-11-1",
      "claim": "Verified the stated inference at step 11.1.",
      "step": "11.1",
      "inputs": [
        "4.3",
        "10.1"
      ]
    },
    {
      "id": "step-11-2",
      "claim": "Verified the stated inference at step 11.2.",
      "step": "11.2",
      "inputs": [
        "4.3",
        "10.1"
      ]
    },
    {
      "id": "step-11-3",
      "claim": "Verified the stated inference at step 11.3.",
      "step": "11.3",
      "inputs": [
        "A1",
        "4.3",
        "10.1"
      ]
    },
    {
      "id": "step-12-1",
      "claim": "Verified the stated inference at step 12.1.",
      "step": "12.1",
      "inputs": [
        "11.1",
        "11.2",
        "8.1",
        "9.2",
        "4.1",
        "1.1"
      ]
    },
    {
      "id": "step-12-2",
      "claim": "Verified the stated inference at step 12.2.",
      "step": "12.2",
      "inputs": [
        "11.3",
        "10.1",
        "L10"
      ]
    },
    {
      "id": "step-13-1",
      "claim": "Verified the stated inference at step 13.1.",
      "step": "13.1",
      "inputs": [
        "4.3",
        "11.3",
        "12.1",
        "L8"
      ]
    },
    {
      "id": "step-13-2",
      "claim": "Verified the stated inference at step 13.2.",
      "step": "13.2",
      "inputs": [
        "11.3",
        "12.1",
        "L8"
      ]
    },
    {
      "id": "step-13-3",
      "claim": "Verified the stated inference at step 13.3.",
      "step": "13.3",
      "inputs": [
        "12.1",
        "5.4",
        "L8",
        "L11"
      ]
    },
    {
      "id": "step-14-1",
      "claim": "Verified the stated inference at step 14.1.",
      "step": "14.1",
      "inputs": [
        "13.3",
        "L11",
        "11.3",
        "12.2",
        "L10"
      ]
    },
    {
      "id": "step-15-1",
      "claim": "Verified the stated inference at step 15.1.",
      "step": "15.1",
      "inputs": [
        "5.3",
        "5.4",
        "13.1",
        "13.2",
        "9.1",
        "14.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "Statement and step 2.1 account for the empty-index case."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Statement and step 1.2 include the zero boundary."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Statement and step 4.3 include the unit boundary."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Statement and step 1.1 retain all admissible degenerate cases."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "No interval threshold endpoint occurs."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.2 supplies its choice."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The item is not an equivalence."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The item is not an equivalence."
    }
  ]
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "thm-riemann-series-theorem",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "lem-positive-and-negative-parts",
    "declared_target": "lem-positive-and-negative-parts",
    "target_statement_provenance": "ai-altered",
    "targetPage": "absolute-convergence-and-rearrangement",
    "targetBatch": "wave8-real-analysis-absolute-convergence",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-riemann-series-theorem",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "def-rearrangement-and-unconditional-convergence",
    "declared_target": "def-rearrangement-and-unconditional-convergence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "absolute-convergence-and-rearrangement",
    "targetBatch": "wave8-real-analysis-absolute-convergence",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-riemann-series-theorem",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "def-absolute-and-conditional-convergence",
    "declared_target": "def-absolute-and-conditional-convergence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "absolute-convergence-and-rearrangement",
    "targetBatch": "wave8-real-analysis-absolute-convergence",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-riemann-series-theorem",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "lem-nth-term-test",
    "declared_target": "lem-nth-term-test",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-riemann-series-theorem",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-recursion",
    "declared_target": "thm-recursion",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-riemann-series-theorem",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-well-ordering-principle",
    "declared_target": "thm-well-ordering-principle",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-riemann-series-theorem",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "def-injection-surjection-bijection",
    "declared_target": "def-injection-surjection-bijection",
    "target_statement_provenance": "ai-altered",
    "targetPage": "relations-functions-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-riemann-series-theorem",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "def-divergence-to-infinity",
    "declared_target": "def-divergence-to-infinity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-riemann-series-theorem",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "def-limsup-liminf",
    "declared_target": "def-limsup-liminf",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-riemann-series-theorem",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "def-extended-reals",
    "declared_target": "def-extended-reals",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-riemann-series-theorem",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "def-extended-limits",
    "declared_target": "def-extended-limits",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-riemann-series-theorem",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-convergence-iff-limsup-equals-liminf",
    "declared_target": "thm-convergence-iff-limsup-equals-liminf",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-riemann-series-theorem",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-nonnegative-series-bounded-partial-sums",
    "declared_target": "thm-nonnegative-series-bounded-partial-sums",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-riemann-series-theorem",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "def-series",
    "declared_target": "def-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-riemann-series-theorem",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "def-finite-sum",
    "declared_target": "def-finite-sum",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-riemann-series-theorem",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "lem-finite-sum-laws",
    "declared_target": "lem-finite-sum-laws",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-riemann-series-theorem",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "lem-limit-preserves-order",
    "declared_target": "lem-limit-preserves-order",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-riemann-series-theorem",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-induction-principle",
    "declared_target": "thm-induction-principle",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-riemann-series-theorem",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "def-real-limit",
    "declared_target": "def-real-limit",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (20)

### `def-absolute-and-conditional-convergence`

````markdown
---
id: def-absolute-and-conditional-convergence
kind: definition
title: "Absolutely convergent and conditionally convergent series, and the general starting index"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-series, lem-absolute-convergence-implies-convergence, def-abs-value, lem-of-abs-value, def-real-limit]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Absolute convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Absolute_convergence"
    - title: "Conditional convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Conditional_convergence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "N. Donaldson, Math 140A: Series"
      url: "https://www.math.uci.edu/~ndonalds/math140a/3series.html"
pipeline_run: null
---

## Definition

Let $(a_k)$ be a sequence of reals, with series $\sum a_k$ and partial sums
$s_n = \sum_{k<n} a_k$ as in [[def-series]], and let $|x|$ be the absolute value
([[def-abs-value]]).

**Absolute convergence.** The series $\sum a_k$ **converges absolutely** when the
series $\sum |a_k|$ converges ([[def-series]]). Since $|a_k| \ge 0$ for every $k$
([[lem-of-abs-value]]), this is a statement about a series of nonnegative terms.

**Conditional convergence.** The series $\sum a_k$ **converges conditionally**
when it converges ([[def-series]], [[def-real-limit]]) and does *not* converge
absolutely.

So a convergent series is exactly one of the two: absolutely convergent or
conditionally convergent, according as $\sum |a_k|$ converges or not.

**One implication is already proved, and is not reproved anywhere on this page.**
[[lem-absolute-convergence-implies-convergence]] states that if $\sum |a_k|$
converges then $\sum a_k$ converges. That lemma was coined and proved on the
previous page of this track, where the root and ratio tests need it; this page
names it and builds on it. In particular an absolutely convergent series is a
convergent series, so the two words above really do partition the convergent
series, and "conditionally convergent" is not vacuous by accident: the alternating
harmonic series is a witness, and the witness is exhibited in
[[fs-convergent-implies-absolutely-convergent]].

**General starting index.** Let $m \in \mathbb{N}$ and let $(a_k)_{k \ge m}$ be a
family from $m$ ([[def-series]]). The series $\sum_{k \ge m} a_k$ **converges
absolutely** when $\sum_{k \ge m} |a_k|$ converges, and **converges
conditionally** when it converges and does not converge absolutely. By
[[def-series]] both statements are the corresponding statements for the shifted
sequence $j \mapsto a_{j+m}$, so nothing new is being defined and every result
below transfers to a general starting index in the same way, exactly as
[[lem-absolute-convergence-implies-convergence]] already records for the one
implication it proves.

## Remarks

- **Absolute convergence is a condition on the terms, not on the sum.** It says
  the series of absolute values converges, and it says nothing about the value of
  $\sum_{k=0}^{\infty} a_k$. The two sums are in general different, and no
  statement here identifies them.

- **Why the distinction earns a page.** Every result on this page separates the
  two classes. An absolutely convergent series may be reordered at will
  ([[thm-dirichlet-rearrangement]]) and multiplied by another
  ([[thm-mertens]]); a conditionally convergent one may be reordered to any sum
  whatever ([[thm-riemann-series-theorem]]). The difference is not one of degree.

- **A series of nonnegative terms converges absolutely if it converges at all**,
  since then $|a_k| = a_k$. So the distinction is invisible for the comparison,
  condensation, Raabe, Gauss and Kummer tests of the previous page, all of which
  assume terms of one sign. It is not invisible on that page as a whole: the root
  and ratio tests are stated for terms of arbitrary sign and reach convergence of
  $\sum a_k$ precisely through
  [[lem-absolute-convergence-implies-convergence]], which is where the word
  *absolutely convergent* is first used. What that page does not develop, and this
  one does, is everything that separates the two classes rather than the one
  implication those two tests need.
````

### `def-divergence-to-infinity`

````markdown
---
id: def-divergence-to-infinity
kind: definition
title: "Divergence to $+\\infty$ and to $-\\infty$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-sequence, def-real-order, def-real-limit, def-complete-ordered-field, lem-convergent-implies-bounded, thm-of-archimedean, lem-of-abs-value]
justified_by: []
aliases: []
landmark: false
short: "$x_k\\to+\\infty$"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis, Ch. 3"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch3.pdf"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "Extended real number line (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extended_real_number_line"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with $\mathbb{R}$ ordered
as in [[def-real-order]] and [[def-complete-ordered-field]].

- $(x_k)$ **diverges to $+\infty$**, written $x_k \to +\infty$, when for every
  $M \in \mathbb{R}$ there is $K \in \mathbb{N}$ such that $x_k > M$ for all
  $k \ge K$.
- $(x_k)$ **diverges to $-\infty$**, written $x_k \to -\infty$, when for every
  $M \in \mathbb{R}$ there is $K \in \mathbb{N}$ such that $x_k < M$ for all
  $k \ge K$.

Equivalently, in the language of [[def-sequence]]: $x_k \to +\infty$ when the
property $x_k > M$ holds eventually, for every real $M$.

## Remarks

- **This is divergence, not convergence.** The symbols $+\infty$ and $-\infty$
  are **not real numbers**: $\mathbb{R}$ is the complete ordered field
  ([[def-complete-ordered-field]]) and contains no element larger than every
  element of itself. Nothing above claims that $(x_k)$ has a limit in the sense
  of [[def-real-limit]], and nothing above defines an object named $+\infty$.
  The whole phrase "$x_k \to +\infty$" is a single abbreviation for the
  displayed condition, exactly as "$(x_k)$ is Cauchy" is an abbreviation for a
  condition and not a claim that some object called a Cauchy value exists.

- **A sequence diverging to $+\infty$ really does diverge.** Suppose
  $x_k \to +\infty$. Given any real $M$, there is $K$ with $x_k > M$ for all
  $k \ge K$; in particular $x_K > M$, so no real $M$ satisfies $x_k \le M$ for
  all $k$. Since $x_k \le |x_k|$ always ([[lem-of-abs-value]]), a bound
  $|x_k| \le M$ valid for all $k$ would give $x_k \le M$ for all $k$, which has
  just been excluded, so no such $M$ exists either. Thus
  $(x_k)$ is unbounded, and an unbounded sequence cannot converge, since
  convergent sequences are bounded ([[lem-convergent-implies-bounded]]). The
  same argument applies to $-\infty$. So the two notions never overlap: a
  sequence that diverges to $\pm\infty$ has no limit whatever.

- **Consequently $\lim_k x_k$ is not written here.** Many texts write
  $\lim_k x_k = +\infty$. This library does not, for the reason recorded in
  [[rem-sup-conventions]] about $\sup S = +\infty$: writing an equation whose
  right-hand side is not an element of $\mathbb{R}$ silently moves the discussion
  into the extended real line, a structure that is not a field, and every
  subsequent algebraic step then needs its own justification. In particular none
  of the rules of [[thm-algebra-of-limits]] may be applied to a divergence to
  $\pm\infty$; the familiar slogans "$\infty + \infty = \infty$" and
  "$\infty \cdot \infty = \infty$" are separate statements about this definition
  and would need separate proofs.

- **Testing against naturals suffices.** Since $\mathbb{R}$ is Archimedean
  ([[thm-of-archimedean]]), every real $M$ is below some canonical natural $n$,
  so the condition "for every real $M$" may equivalently be read as "for every
  natural $n \ge 1$"; the two formulations of $x_k \to +\infty$ agree.

- **Divergence to $+\infty$ is much stronger than divergence.** A sequence
  alternating between $1$ and $-1$ diverges ([[fs-bounded-implies-convergent]])
  but goes to neither $+\infty$ nor $-\infty$, since it is bounded. Divergence
  is the negation of convergence; divergence to $+\infty$ is a positive
  statement about growth.
````

### `def-extended-limits`

````markdown
---
id: def-extended-limits
kind: definition
title: "Convergence in $\\overline{\\mathbb{R}}$ and the extended subsequential limit set: $L \\in \\overline{\\mathbb{R}}$ is an extended subsequential limit when some subsequence converges to $L$, or diverges to $L = \\pm\\infty$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-extended-reals, def-sequence, def-real-limit, def-divergence-to-infinity, def-subsequential-limit, lem-limit-unique]
justified_by: []
forward_refs: [cex-limsup-infinite-not-attained-in-r]
aliases: []
landmark: false
short: "$\\overline{\\operatorname{SL}}(x)$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Subsequential limit (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequential_limit"
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.15 to 3.17)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "N. Donaldson, Math 140A: Real Analysis notes"
      url: "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf"
pipeline_run: null
---

## Definition

Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let
$L \in \overline{\mathbb{R}}$ ([[def-extended-reals]]). Say that $(x_k)$
**converges to $L$ in $\overline{\mathbb{R}}$** when one of the following holds,
according to which of the three kinds of element $L$ is:

- $L \in \mathbb{R}$ and $(x_k)$ converges to $L$ in the sense of [[def-real-limit]];
- $L = +\infty$ and $x_k \to +\infty$ in the sense of [[def-divergence-to-infinity]];
- $L = -\infty$ and $x_k \to -\infty$ in the sense of [[def-divergence-to-infinity]].

Then $L$ is an **extended subsequential limit** of $(x_k)$ when some subsequence
of $(x_k)$ converges to $L$ in $\overline{\mathbb{R}}$: when there is a strictly
increasing $n : \mathbb{N} \to \mathbb{N}$ ([[def-sequence]]) such that
$(x_{n_j})_{j \in \mathbb{N}}$ converges to $L$ in the sense just given. The
**extended subsequential limit set** of $(x_k)$ is

$$\overline{\operatorname{SL}}(x) \;:=\; \{\, L \in \overline{\mathbb{R}} : L \text{ is an extended subsequential limit of } (x_k) \,\} \subseteq \overline{\mathbb{R}}.$$

**This extends the published [[def-subsequential-limit]] and does not replace
it.** That definition is finite by design: there $L$ ranges over $\mathbb{R}$ and
$\operatorname{SL}(x) \subseteq \mathbb{R}$. Its clause is quoted verbatim as the
first of the three clauses above, so

$$\overline{\operatorname{SL}}(x) \cap \mathbb{R} = \operatorname{SL}(x),$$

immediately from the definitions: a real $L$ lies in
$\overline{\operatorname{SL}}(x)$ exactly when some subsequence converges to $L$
in the sense of [[def-real-limit]], which is exactly the condition
$L \in \operatorname{SL}(x)$. The extended set is therefore
$\operatorname{SL}(x)$ together with at most the two extra points $\pm\infty$,
each present exactly when some subsequence diverges to it. Nothing about
$\operatorname{SL}(x)$ is redefined, and every statement proved about
$\operatorname{SL}(x)$ elsewhere in the library remains a statement about the
same set.

**Neither is [[def-divergence-to-infinity]] reinterpreted.** The phrase
"$x_k \to +\infty$" keeps exactly the meaning fixed there, an abbreviation for
"for every real $M$, eventually $x_k > M$". What is new is only that the phrase
is now allowed to appear as one of three clauses in a single definition whose
parameter $L$ ranges over $\overline{\mathbb{R}}$, so that the three situations
can be quantified over together. In particular the warning recorded there stands:
a sequence diverging to $+\infty$ has no limit in $\mathbb{R}$, and none of the
rules of [[thm-algebra-of-limits]] applies to it.

## Remarks

- **An extended limit is unique.** Suppose $(x_k)$ converges to $L$ and to $L'$ in
  $\overline{\mathbb{R}}$. If both are real, $L = L'$ by uniqueness of real limits
  ([[lem-limit-unique]]). If one is real and the other is $\pm\infty$, that is
  impossible, because a sequence diverging to $\pm\infty$ is unbounded and so does
  not converge, as [[def-divergence-to-infinity]] records. If $L = +\infty$ and
  $L' = -\infty$ then, taking $M = 0$ in both conditions, there are $K$ and $K'$
  with $x_k > 0$ for $k \ge K$ and $x_k < 0$ for $k \ge K'$; any index at least as
  large as both gives $0 < x_k < 0$, which is impossible. So the three clauses are
  mutually exclusive and each determines $L$.

- **Why the extended set is the right object for a $\limsup$ theorem.** The
  greatest subsequential limit of an arbitrary real sequence need not be a real
  number: the sequence that alternates between $0$ and larger and larger values
  has $\operatorname{SL}(x) = \{0\}$, whose greatest element is $0$, while the
  behaviour that dominates it is a subsequence running off to $+\infty$. That is
  exactly the content of [[cex-limsup-infinite-not-attained-in-r]], and it is why
  [[thm-limsup-is-greatest-subsequential-limit]] is stated for
  $\overline{\operatorname{SL}}(x)$ rather than for $\operatorname{SL}(x)$.

- **A tail changes nothing.** A strictly increasing index map satisfies
  $n_j \ge j$ ([[lem-index-map-grows]]), so all three clauses depend only on the
  behaviour of $(x_k)$ at arbitrarily large indices, and a sequence and each of
  its tails have the same extended subsequential limit set. This is the same
  observation made for $\operatorname{SL}(x)$ in [[def-subsequential-limit]], with
  the two divergence clauses added.
````

### `def-extended-reals`

````markdown
---
id: def-extended-reals
kind: definition
title: "The extended real line $\\overline{\\mathbb{R}} = \\mathbb{R} \\cup \\{-\\infty, +\\infty\\}$, its order, and the arithmetic that is left undefined"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, def-real-order, def-complete-ordered-field, def-divergence-to-infinity, def-partial-order, lem-of-add-order]
justified_by: []
forward_refs: [cex-zero-times-infinity-indeterminate]
aliases: [def-extended-real-line]
landmark: true
short: "$\\overline{\\mathbb{R}}$"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Extended real number line (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extended_real_number_line"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (1.23, the extended real number system)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.2 (the extended real number system)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. K. Hunter, Measure Theory notes"
      url: "https://www.math.ucdavis.edu/~hunter/m206/ch0_measure.pdf"
pipeline_run: null
---

## Definition

Fix two objects $-\infty$ and $+\infty$, distinct from one another and neither of
them a real number ([[def-real-numbers]]), and set

$$\overline{\mathbb{R}} := \mathbb{R} \cup \{-\infty, +\infty\}.$$

This is a **new object**, introduced here explicitly with its own order and its
own partial arithmetic. It is not an enlargement of the field $\mathbb{R}$, and
no operation of $\mathbb{R}$ ([[def-complete-ordered-field]]) is redefined by
anything below.

**The order.** For $a, b \in \overline{\mathbb{R}}$ declare

$$a \le b \quad :\Longleftrightarrow \quad a = -\infty \ \text{ or } \ b = +\infty \ \text{ or } \ \big(a, b \in \mathbb{R} \text{ and } a \le b \text{ in } \mathbb{R}\big),$$

with $\mathbb{R}$ ordered as in [[def-real-order]], and write $a < b$ for
"$a \le b$ and $a \ne b$" as usual ([[def-partial-order]]).

**$(\overline{\mathbb{R}}, \le)$ is a totally ordered set, and the inclusion of
$\mathbb{R}$ preserves and reflects the order.** All four checks are immediate
from the displayed clauses.

- *Reflexive.* For $a = \pm\infty$ one of the first two clauses applies; for
  $a \in \mathbb{R}$ the third does, since $a \le a$ in $\mathbb{R}$.
- *Antisymmetric.* Suppose $a \le b$ and $b \le a$. If $a = -\infty$ then
  $b \le a$ forces $b = -\infty$, since the clause $a = +\infty$ fails and $b, a$
  are not both real. Symmetrically $b = -\infty$ forces $a = -\infty$, and
  $a = +\infty$ or $b = +\infty$ forces the other to be $+\infty$. In the one
  remaining situation $a$ and $b$ are both real and antisymmetry is that of
  $\mathbb{R}$.
- *Transitive.* Let $a \le b \le c$. If $a = -\infty$ or $c = +\infty$ the
  conclusion is one of the first two clauses. Otherwise $a \ne -\infty$ forces,
  in $a \le b$, either $b = +\infty$ or $a, b \in \mathbb{R}$; and $c \ne +\infty$
  forces, in $b \le c$, either $b = -\infty$ or $b, c \in \mathbb{R}$. The value
  $b = +\infty$ is incompatible with the second alternative pair, so $b$ is real,
  hence so are $a$ and $c$, and transitivity is that of $\mathbb{R}$.
- *Total.* If $a = -\infty$ or $b = +\infty$ then $a \le b$; if $b = -\infty$ or
  $a = +\infty$ then $b \le a$; otherwise both are real and the order of
  $\mathbb{R}$ is total.
- *Preserved and reflected.* For $a, b \in \mathbb{R}$ the first two clauses fail,
  so $a \le b$ in $\overline{\mathbb{R}}$ says exactly $a \le b$ in $\mathbb{R}$.

In particular $-\infty$ is the least and $+\infty$ the greatest element of
$\overline{\mathbb{R}}$, and $-\infty < x < +\infty$ for every $x \in \mathbb{R}$.

**Reflection.** Extend negation by

$$-(+\infty) := -\infty, \qquad -(-\infty) := +\infty,$$

keeping the field negative on $\mathbb{R}$. The resulting map
$\nu : \overline{\mathbb{R}} \to \overline{\mathbb{R}}$, $\nu(a) = -a$, satisfies
$\nu(\nu(a)) = a$ and

$$a \le b \iff -b \le -a \qquad (a, b \in \overline{\mathbb{R}}).$$

For $a$ and $b$ real this is the elementwise order reversal in $\mathbb{R}$:
translation invariance ([[lem-of-add-order]]) applied with the constant $-a-b$
turns $a < b$ into $-b < -a$ and, applied with the constant $a+b$, turns it back,
while $a = b$ holds exactly when $-a = -b$. In every other case both sides are
decided by the first two clauses of the order: $a = -\infty$ makes both sides
true, as does $b = +\infty$, and if $a \ne -\infty$, $b \ne +\infty$ and $a, b$
are not both real then one of $a = +\infty$, $b = -\infty$ holds and both sides
are false.

**Partial addition.** For $a, b \in \overline{\mathbb{R}}$ the sum $a + b$ is
defined by

- $a + b$ = the field sum, when $a, b \in \mathbb{R}$;
- $a + b := +\infty$ when $a = +\infty$ and $b \ne -\infty$, or $b = +\infty$ and $a \ne -\infty$;
- $a + b := -\infty$ when $a = -\infty$ and $b \ne +\infty$, or $b = -\infty$ and $a \ne +\infty$;

and **the two sums $(+\infty) + (-\infty)$ and $(-\infty) + (+\infty)$ are left
undefined**. Addition is commutative where defined, and

$$-(a + b) = (-a) + (-b),$$

each side being defined exactly when the other is: the excluded pairs
$\{+\infty, -\infty\}$ are exchanged by $\nu$, and the three clauses above are
exchanged accordingly.

**Partial multiplication.** For $a, b \in \overline{\mathbb{R}}$ the product $ab$
is defined by

- $ab$ = the field product, when $a, b \in \mathbb{R}$;
- $ab := +\infty$ when one of $a, b$ is $\pm\infty$, the other is $\ne 0$, and both are $> 0$ or both are $< 0$;
- $ab := -\infty$ when one of $a, b$ is $\pm\infty$, the other is $\ne 0$, and one is $> 0$ and the other $< 0$;

and **every product with one factor $0$ and the other $\pm\infty$ is left
undefined**. The comparisons $> 0$ and $< 0$ here are taken in the order above,
under which $+\infty > 0 > -\infty$.

**Nothing else is defined.** There is no subtraction, no division, no
exponentiation and no absolute value on $\overline{\mathbb{R}}$ in this library;
where such an expression is wanted it is written out in the two defined
operations, and where a case falls in the undefined list the statement carries an
explicit hypothesis saying so.

## Remarks

- **$\overline{\mathbb{R}}$ is not a field, and not an ordered field.** It has no
  additive inverse for $+\infty$: $(+\infty) + b$ is $+\infty$ whenever it is
  defined and is never $0$. So none of the field axioms
  ([[def-complete-ordered-field]]) is available here, and no algebraic
  manipulation valid in $\mathbb{R}$ may be transported to
  $\overline{\mathbb{R}}$ without a separate justification.

- **Why the excluded cases are excluded.** The three defined clauses of each
  operation are exactly the cases in which the value is forced by the limiting
  behaviour of the sequences involved, and the excluded cases are exactly the
  ones in which it is not. For the product this is proved on the companion page:
  [[cex-zero-times-infinity-indeterminate]] exhibits a null sequence and two
  sequences diverging to $+\infty$ whose products behave differently, so no value
  assigned to $0 \cdot (+\infty)$ could be compatible with products of limits.
  The same phenomenon rules out a value for $(+\infty) + (-\infty)$: with
  $a_k = k$ and $b_k = -k$ the sum is constantly $0$, while with $b_k = -2k$ it
  diverges to $-\infty$. Leaving them undefined is not squeamishness, it is the
  only option that keeps every later statement about limits true without a
  side condition hidden inside the arithmetic.

- **This is the separate introduction that [[rem-sup-conventions]] points to.**
  That remark refuses the conventions $\sup S = +\infty$ and
  $\inf \emptyset = +\infty$ inside $\mathbb{R}$, and records that the extended
  real line is introduced explicitly here, with its own order and its own partial
  arithmetic kept separate from $\mathbb{R}$ rather than quietly extending it.
  This is that introduction. The suprema and infima of [[def-complete-ordered-field]],
  [[def-infimum]] and the whole suprema page remain real numbers with their
  nonempty and bounded hypotheses intact; what is new is a *separate* supremum
  operation, taken in $\overline{\mathbb{R}}$ and named as such, supplied by
  [[lem-extended-reals-complete]].

- **The symbols were already in circulation, and this definition does not change
  what they meant.** [[def-divergence-to-infinity]] defines the single phrase
  "$x_k \to +\infty$" as an abbreviation for a condition on $(x_k)$, and says in
  as many words that it does not define an object named $+\infty$. That reading
  is still correct: nothing in [[def-divergence-to-infinity]] is restated or
  reinterpreted here, and [[def-extended-limits]] is where the two are related, by
  a definition that quotes the old one rather than replacing it. Likewise the
  interval notation $(a, \infty)$ of [[def-interval]] is notation for a condition
  on one side, not an endpoint, and stays that way.

- **Why the order is defined by three clauses rather than by a picture.** The
  clauses are what the verifications above actually use, and they make the two
  facts that later proofs lean on immediate: every element is $\le +\infty$ and
  every element is $\ge -\infty$, with no case analysis at the point of use.
````

### `def-finite-sum`

````markdown
---
id: def-finite-sum
kind: definition
title: "Finite sums and finite products, by recursion"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-recursion, thm-induction-principle, def-ordered-field, def-natural-numbers, def-nat-addition, def-field, def-complete-ordered-field, lem-of-naturals-positive, lem-of-q-embeds]
justified_by: []
aliases: [def-finite-product]
landmark: false
verification:
  precheck: n/a
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
    - title: "J. Aspnes, Summation Notation"
      url: "https://www.cs.yale.edu/homes/aspnes/pinewiki/SummationNotation.html"
    - title: "M. Fochler, Recursive sums, products, and powers"
      url: "https://people.math.binghamton.edu/mfochler/bu-mfx/bu-math-arv/math-330-arv/math-330-2019-08/html/lec-notes/bu-ln-330-m330-solns-2019-12-03.pdf"
    - title: "Empty sum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Empty_sum"
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Throughout this page $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]), in particular an ordered field
([[def-ordered-field]]) and a field ([[def-field]]), and $\mathbb{N}$ is the set
of natural numbers ([[def-natural-numbers]]) with successor $\sigma(n) = n + 1$
([[def-nat-addition]]).

Let $a : \mathbb{N} \to \mathbb{R}$ be a sequence of reals, written $a_k$ for
$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the
upper index**, which is legitimate because of the recursion theorem
([[thm-recursion]]). That theorem produces a function of one variable, so the
running index has to be carried along inside the value: applying it to the set
$A = \mathbb{N} \times \mathbb{R}$, the starting element $(0, 0)$ and the function
$f(n, s) = (\sigma(n),\, s + a_n)$ gives a unique
$g : \mathbb{N} \to \mathbb{N} \times \mathbb{R}$ with

$$g(0) = (0, 0), \qquad g(\sigma(n)) = f(g(n)) \quad (n \in \mathbb{N}).$$

Write $g(n) = \big(\pi_1(g(n)),\, \Sigma_n\big)$ for its two coordinates.

**The first coordinate is the index itself, and that is a small induction, not an
observation** ([[thm-induction-principle]]). Indeed $\pi_1(g(0)) = 0$; and if
$\pi_1(g(n)) = n$, then
$g(\sigma(n)) = f\big(\pi_1(g(n)), \Sigma_n\big) = \big(\sigma(\pi_1(g(n))),\, \Sigma_n + a_{\pi_1(g(n))}\big) = \big(\sigma(n),\, \Sigma_n + a_n\big)$,
so $\pi_1(g(\sigma(n))) = \sigma(n)$. By induction $\pi_1(g(n)) = n$ for every
$n \in \mathbb{N}$. Only now may the second coordinate of the two displayed
clauses be read off, and doing so gives

$$\Sigma_0 = 0, \qquad \Sigma_{\sigma(n)} = \Sigma_n + a_n .$$

$\Sigma$ is moreover the **unique** function $\mathbb{N} \to \mathbb{R}$ with those
two properties: if $\Sigma'$ also has them then $n \mapsto (n, \Sigma'_n)$ satisfies
the two clauses defining $g$, hence equals $g$ by the uniqueness clause of
[[thm-recursion]], so $\Sigma' = \Sigma$.

We write $\sum_{k < n} a_k := \Sigma_n$. The same construction with starting
element $(0, 1)$ and $f(n, p) = (\sigma(n),\, p \cdot a_n)$, with the same
induction on the first coordinate and the same uniqueness argument, gives the
unique $\Pi : \mathbb{N} \to \mathbb{R}$ with

$$\Pi_0 = 1, \qquad \Pi_{\sigma(n)} = \Pi_n \cdot a_n ,$$

and we write $\prod_{k < n} a_k := \Pi_n$.

**Notation.** For $m, n \in \mathbb{N}$ we abbreviate

$$\sum_{k=0}^{n} a_k := \sum_{k < n+1} a_k, \qquad \prod_{k=0}^{n} a_k := \prod_{k < n+1} a_k,$$

and, for a general lower index $m$ with $m \le n + 1$, writing $d = n + 1 - m$
for the number of terms,

$$\sum_{k=m}^{n} a_k := \sum_{j < d} a_{m+j}, \qquad \prod_{k=m}^{n} a_k := \prod_{j < d} a_{m+j} .$$

When $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while
the empty product has value $1$. In the same spirit $\sum_{k=0}^{-1} a_k$ is
notation for the empty sum $\Sigma_0 = 0$ and $\prod_{k=0}^{-1} a_k$ for the
empty product $\Pi_0 = 1$; the index $-1$ never occurs as an element of
$\mathbb{N}$ and is only a way of writing "no terms".

Only finitely many values of $a$ enter $\sum_{k<n} a_k$, so the notation
$\sum_{k<n} a_k$ and $\prod_{k<n} a_k$ is also used for a list
$a_0, \dots, a_{n-1}$ of reals given without reference to any extension of the
list to all of $\mathbb{N}$: extend the list by $a_k = 0$ (respectively
$a_k = 1$) for $k \ge n$ and apply the definition above.

## Remarks

- **Why recursion and not "$a_0 + a_1 + \cdots + a_{n-1}$".** The dots are not a
  definition: they presuppose that the displayed pattern determines a value for
  every $n$, which is exactly what the recursion theorem
  ([[thm-recursion]]) supplies, and its uniqueness clause is what makes
  $\sum_{k<n} a_k$ a single well-determined real rather than a family of choices.
  Associativity and commutativity of addition are *not* used in the definition;
  they are used in the laws proved from it ([[lem-finite-sum-laws]]).
- **Naturals and rationals inside $\mathbb{R}$ (a convention used on the whole
  page).** A natural number $n$ and a rational number $r$ are not literally
  elements of $\mathbb{R}$: they enter $\mathbb{R}$ through the canonical
  embedding $\iota : \mathbb{Q} \to \mathbb{R}$, which is an injective,
  order-preserving field homomorphism ([[lem-of-q-embeds]]), restricting on
  positive naturals to $n \mapsto n \cdot 1_{\mathbb{R}} = 1_\mathbb{R} + \cdots + 1_\mathbb{R}$
  ([[lem-of-naturals-positive]]). Following ordinary practice, and only where no
  confusion is possible, we write $n$ for $\iota(n)$ and $r$ for $\iota(r)$; so,
  for instance, $\frac{1}{n}\sum_{k<n} a_k$ means
  $\iota(n)^{-1} \cdot \sum_{k<n} a_k$, which makes sense because
  $\iota(n) > 0$ for $n \ge 1$. Exponents are the one place where the
  identification is deliberately NOT made: in $a^n$ and $a^r$ the exponent stays
  a natural, an integer or a rational ([[def-integer-power]],
  [[def-rational-power]]), never a real.
- The two indexings are related by $\sum_{k=0}^{n} a_k = \sum_{k < n+1} a_k$, so
  a statement proved for one is available for the other. Sums over $k < n$ are
  the primitive form here because $\Sigma_0$, the empty sum, is then the base
  case of every induction, and no index outside $\mathbb{N}$ is ever needed.
````

### `def-injection-surjection-bijection`

````markdown
---
id: def-injection-surjection-bijection
kind: definition
title: "Injection, surjection, bijection"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function, def-image-and-preimage-under-a-relation]
justified_by: []
aliases: [def-injective, def-surjective, def-bijective]
landmark: false
short: "injective, surjective, bijective"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: published-rehoming-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Bijection, injection and surjection (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bijection,_injection_and_surjection"
    - title: "T. Tao, Analysis I, 3rd ed., §3.3 (Functions)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Let $A$ and $B$ be sets and let $f : A \to B$ be a function ([[def-function]]).

- $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all
  $x, y \in A$.
- $f$ is **surjective** (onto) if for every $b \in B$ there is some $x \in A$
  with $f(x) = b$; equivalently, the image $f[A] := \{ f(x) : x \in A \}$ equals
  $B$.
- $f$ is **bijective** if it is both injective and surjective.

For $S \subseteq A$ we write $f[S] = \{ f(x) : x \in S \}$ for the image of $S$,
and for $T \subseteq B$ we write $f^{-1}[T] = \{ x \in A : f(x) \in T \}$ for the
preimage of $T$; these are the image and preimage of a set under $f$ read as a
relation ([[def-image-and-preimage-under-a-relation]]).

## Remarks

- **Composition.** If $f : A \to B$ and $g : B \to C$ are both injective then so
  is $g \circ f$, since $g(f(x)) = g(f(y))$ forces $f(x) = f(y)$ and then
  $x = y$; if both are surjective then so is $g \circ f$, since any $c \in C$ is
  $g(b)$ for some $b \in B$ and that $b$ is $f(a)$ for some $a \in A$. Hence a
  composition of bijections is a bijection. These verifications, together with the
  two partial converses, are
  [[prop-composition-preserves-injectivity-surjectivity-and-bijectivity]].

- **Inverses.** $f : A \to B$ is bijective exactly when there is a function
  $f^{-1} : B \to A$ with $f^{-1}(f(x)) = x$ for all $x \in A$ and
  $f(f^{-1}(b)) = b$ for all $b \in B$; that two-sided inverse is unique, and it
  is itself a bijection. Injectivity alone gives a bijection from $A$ onto the
  image $f[A]$, and hence an inverse defined on $f[A]$ only. No choice principle
  is involved: the value $f^{-1}(b)$ is the *unique* $x$ with $f(x) = b$, so it
  is determined rather than selected. The full statement, with the uniqueness of the
  two-sided inverse, is
  [[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]; the
  corresponding statement for an arbitrary surjection is not available at this point
  in the reading order, because a right inverse for every surjection is equivalent
  to the Axiom of Choice.

- **What this item does and does not do.** A function $A \to B$ is a set of ordered
  pairs, single valued and total on $A$ ([[def-function]]); ordered pairs, Cartesian
  products, images and preimages are fixed by [[def-ordered-pair]],
  [[def-cartesian-product]] and [[def-image-and-preimage-under-a-relation]]. This
  item only fixes the three adjectives and the notation used for them. Nothing here
  is proved.
````

### `def-limsup-liminf`

````markdown
---
id: def-limsup-liminf
kind: definition
title: "Limit superior and limit inferior of a real sequence as $\\inf_n \\sup_{k \\ge n} x_k$ and $\\sup_n \\inf_{k \\ge n} x_k$ in $\\overline{\\mathbb{R}}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-extended-reals, def-sequence, def-complete-ordered-field, thm-infimum-property, def-bounded-set, def-infimum, lem-extended-reals-complete]
justified_by: []
aliases: [def-limsup, def-liminf]
landmark: true
short: "$\\limsup$, $\\liminf$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.16)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §2.3"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Definition

Let $(x_k)$ be a sequence of reals ([[def-sequence]]). For $n \in \mathbb{N}$ let

$$T_n \;:=\; \{\, x_k : k \in \mathbb{N},\ k \ge n \,\} \subseteq \mathbb{R}$$

be the **$n$-th tail range** of $(x_k)$, a nonempty subset of $\mathbb{R}$ since
$x_n \in T_n$. Regard $T_n$ as a subset of $\overline{\mathbb{R}}$
([[def-extended-reals]]) and put

$$s_n \;:=\; \sup T_n \in \overline{\mathbb{R}}, \qquad i_n \;:=\; \inf T_n \in \overline{\mathbb{R}},$$

the supremum and infimum taken in $\overline{\mathbb{R}}$, which exist for every
$n$ and for every sequence by [[lem-extended-reals-complete]]. The **limit
superior** and **limit inferior** of $(x_k)$ are then

$$\limsup_{k} x_k \;:=\; \inf \{\, s_n : n \in \mathbb{N} \,\}, \qquad \liminf_{k} x_k \;:=\; \sup \{\, i_n : n \in \mathbb{N} \,\},$$

again taken in $\overline{\mathbb{R}}$ and again existing by
[[lem-extended-reals-complete]], since $\{s_n : n \in \mathbb{N}\}$ and
$\{i_n : n \in \mathbb{N}\}$ are subsets of $\overline{\mathbb{R}}$ on which no
hypothesis is needed. Both are elements of $\overline{\mathbb{R}}$, and either may
be $+\infty$ or $-\infty$. The notations $\limsup_{k \to \infty} x_k$,
$\varlimsup_k x_k$ and $\overline{\lim}_k x_k$ all denote the first of them
elsewhere; this library writes $\limsup_k x_k$.

**Every quantity written here exists, and that is why the extended line was
introduced.** Each of the four operations above is an application of
[[lem-extended-reals-complete]] to a subset of $\overline{\mathbb{R}}$ carrying no
hypothesis whatever. Written with the real supremum of
[[def-complete-ordered-field]] and the real infimum of [[thm-infimum-property]]
instead, the definition would be available only for sequences that are bounded
([[def-bounded-set]]): $\sup T_n$ needs $T_n$ bounded above, and
$\inf\{s_n\}$ needs $\{s_n\}$ nonempty, bounded below, and made of real numbers
([[def-infimum]]). None of those is automatic, and the discipline recorded in
[[rem-sup-conventions]] forbids papering over the gap with a convention. The
extended supremum is a different operation in a different ordered set, and it is
total.

**Values, when the sequence is bounded.** If $(x_k)$ is bounded, say
$|x_k| \le M$ for every $k$, then each $T_n$ is a nonempty subset of $\mathbb{R}$
bounded above by $M$ and below by $-M$, so by the agreement clause of
[[lem-extended-reals-complete]] each $s_n$ and each $i_n$ is the *real* supremum
or infimum of $T_n$, and lies in $[-M, M]$. The family $\{s_n\}$ is then a
nonempty set of reals bounded below by $-M$, so $\limsup_k x_k$ is likewise the
real infimum of $\{s_n\}$ and lies in $[-M, M]$; dually for $\liminf_k x_k$. So
for a bounded sequence both quantities are ordinary real numbers computed with
the ordinary real supremum and infimum, and the extended line is doing no work.
It is only for unbounded sequences that the values $\pm\infty$ occur.

## Remarks

- **The order of the two operations is not symmetric and must be kept straight.**
  $\limsup$ is an infimum of suprema and $\liminf$ a supremum of infima. Taking
  them in the other order gives $\sup_n \sup_{k \ge n} x_k = \sup_k x_k$ and
  $\inf_n \inf_{k \ge n} x_k = \inf_k x_k$, which are the extreme values of the
  whole sequence and carry no information about its behaviour at large indices.
  The point of the definition is that the inner operation looks at a tail and the
  outer one lets the tail recede.

- **Why tails at all.** Each $s_n$ is a bound on the whole tail from index $n$ on,
  so it forgets the first $n$ terms; letting $n$ grow forgets any fixed finite
  number of them. That is what makes $\limsup$ and $\liminf$ tail quantities in
  the sense of [[lem-limit-of-tail]], and it is the reason they can characterise
  convergence, which is itself a tail property.

- **Neither quantity is a limit, and neither is claimed to be one.** The symbols
  $\limsup$ and $\liminf$ are single pieces of notation for the two displayed
  expressions, exactly as "$x_k \to +\infty$" is a single abbreviation in
  [[def-divergence-to-infinity]]. That the family $(s_n)$ does decrease to
  $\limsup_k x_k$ in a precise sense is a theorem, not part of this definition;
  the monotonicity half is [[lem-limsup-exists]].

- **The tail ranges are sets, not sequences.** $T_n$ is the range of the $n$-th
  tail, so repetitions and order are forgotten ([[def-sequence]]). That is
  harmless here, since a supremum depends only on the set of values, and it is
  what lets the whole definition be phrased with the order-theoretic operations of
  [[lem-extended-reals-complete]] and nothing else.
````

### `def-real-limit`

````markdown
---
id: def-real-limit
kind: definition
title: "Limits and Cauchy sequences of reals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, def-real-order]
aliases: []
verification:
  precheck: n/a
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
pipeline_run: null
---

## Definition

A sequence $(x_k)$ of reals **converges** to $x \in \mathbb{R}$ when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x| < \hat\varepsilon$ for all $k \ge K$. It is **Cauchy** when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x_l| < \hat\varepsilon$ for all $k, l \ge K$.

## Remarks

- Quantifying over rational $\varepsilon$ loses nothing: below any real
  $\varepsilon > 0$ lies a positive rational ([[lem-rat-embeds-dense]]).
- $|\cdot|$ is the absolute value of [[def-real-order]].
````

### `def-rearrangement-and-unconditional-convergence`

````markdown
---
id: def-rearrangement-and-unconditional-convergence
kind: definition
title: "Rearrangement of a series along a bijection of $\\mathbb{N}$, and unconditional convergence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-series, def-sequence, def-injection-surjection-bijection, def-absolute-and-conditional-convergence]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Riemann series theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_series_theorem"
    - title: "Unconditional convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Unconditional_convergence"
    - title: "N. Donaldson, Math 140A: Real Analysis notes"
      url: "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf"
    - title: "John K. Hunter, An Introduction to Real Analysis, Chapter 4"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch4.pdf"
pipeline_run: null
---

## Definition

Let $(a_k)$ be a sequence of reals ([[def-sequence]]) and let
$\sigma : \mathbb{N} \to \mathbb{N}$ be a bijection
([[def-injection-surjection-bijection]]).

**Rearrangement.** The **rearrangement of $(a_k)$ along $\sigma$** is the
composite sequence $k \mapsto a_{\sigma(k)}$, again a function
$\mathbb{N} \to \mathbb{R}$ and so again a sequence of reals. The
**rearrangement of the series $\sum a_k$ along $\sigma$** is the series
$\sum a_{\sigma(k)}$ of that sequence ([[def-series]]).

A rearrangement uses each term of the original sequence exactly once: injectivity
of $\sigma$ says no term is repeated, surjectivity says none is omitted. That is
the whole content of the word, and it is why the definition is stated with a
bijection rather than with an informal "reordering".

**Unconditional convergence.** The series $\sum a_k$ **converges
unconditionally** when it converges and, for **every** bijection
$\sigma : \mathbb{N} \to \mathbb{N}$, the rearranged series $\sum a_{\sigma(k)}$
converges with

$$\sum_{k=0}^{\infty} a_{\sigma(k)} \;=\; \sum_{k=0}^{\infty} a_k .$$

## Remarks

- **Unconditional convergence implies convergence, by definition and also by
  instance.** The identity map is a bijection of $\mathbb{N}$ and the
  rearrangement along it is the original sequence, so the clause about all
  bijections already contains the clause about the series itself.

- **Rearranging twice is rearranging once.** If $\sigma$ and $\tau$ are bijections
  of $\mathbb{N}$ then so is $\sigma \circ \tau$, and the rearrangement of
  $(a_{\sigma(k)})$ along $\tau$ is $k \mapsto a_{\sigma(\tau(k))}$, the
  rearrangement of $(a_k)$ along $\sigma \circ \tau$. Likewise the inverse
  $\sigma^{-1}$ is a bijection, and rearranging along it undoes $\sigma$. Both
  facts are used in [[thm-dirichlet-rearrangement]].

- **A weaker-looking condition, which turns out to be the same one.** One could
  ask only that every rearrangement *converge*, without requiring the sums to
  agree. Over $\mathbb{R}$ that is not weaker:
  [[cor-unconditional-iff-absolute-in-r]] identifies both conditions with absolute
  convergence ([[def-absolute-and-conditional-convergence]]), because
  [[thm-riemann-series-theorem]] produces, for a series that converges but not
  absolutely, both a rearrangement with a different sum and a rearrangement that
  does not converge at all.

- **The definition says nothing about which series have the property.** That is
  the subject of the two theorems that follow, and the answer over $\mathbb{R}$ is
  exactly the absolutely convergent series.
````

### `def-series`

````markdown
---
id: def-series
kind: definition
title: "Series, partial sums, convergence and the sum, divergence, and the tail series"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-finite-sum, def-sequence, def-real-limit, def-real-numbers, lem-limit-unique]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §7.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field ([[def-real-numbers]]) and
a **sequence of reals** is a function $a : \mathbb{N} \to \mathbb{R}$
([[def-sequence]]), written $(a_k)$; recall that $\mathbb{N}$ contains $0$.

**Partial sums.** Let $(a_k)$ be a sequence of reals. Its **sequence of partial
sums** is

$$s_n \;:=\; \sum_{k < n} a_k \qquad (n \in \mathbb{N}),$$

the finite sum of [[def-finite-sum]]. In particular $s_0 = 0$, the empty sum, and
$s_{n+1} = s_n + a_n$ for every $n$, those being exactly the two recursion clauses
that define the finite sum. Note that $s_n$ is the sum of the $n$ terms
$a_0, \dots, a_{n-1}$, so the index $n$ counts terms rather than naming the last
one.

**Convergence, the sum, divergence.** The **series** of $(a_k)$, written
$\sum a_k$, **converges** when the sequence $(s_n)$ of partial sums converges
([[def-real-limit]]), and then the **sum of the series** is

$$\sum_{k=0}^{\infty} a_k \;:=\; \lim_{n} s_n .$$

The series **diverges** when $(s_n)$ does not converge. A convergent sequence of
reals has exactly one limit ([[lem-limit-unique]]), so the displayed symbol names
a single real number and nothing further has to be checked for it to be
well defined.

**Series with a general starting index.** Let $m \in \mathbb{N}$ and let $a$ be a
function on $\{\, k \in \mathbb{N} : k \ge m \,\}$, which we call a **family from
$m$** and write $(a_k)_{k \ge m}$. The series

$$\sum_{k \ge m} a_k$$

is by definition the series of the sequence $b_j := a_{j + m}$,
$j \in \mathbb{N}$, which is a genuine sequence of reals; it converges exactly
when that series converges, and its sum is then written
$\sum_{k = m}^{\infty} a_k$. Its partial sums are

$$\sum_{k=m}^{n-1} a_k \;=\; \sum_{j < n-m} a_{m+j} \qquad (n \ge m),$$

in the notation of [[def-finite-sum]], the value at $n = m$ being the empty sum
$0$. A sequence on $\mathbb{N}$ is the case $m = 0$, and the two readings of
$\sum a_k$ agree there, since $b_j = a_j$.

**This clause is not a convenience.** Sequences in this library are functions on
$\mathbb{N}$ and $\mathbb{N}$ contains $0$ ([[def-sequence]]), while many of the
classical series are built from expressions that are undefined at the index $0$:
$1/k$, $1/k^{p}$ and $|a_k|^{1/k}$ all require $k \ge 1$. Writing such a series as
$\sum_{k \ge 1} a_k$ names an honest object, whereas writing it as a sequence on
$\mathbb{N}$ would require a value at an index where the defining expression has
none. Every statement on this page says which starting index it uses.

**Tail series.** For $N \in \mathbb{N}$, the **$N$-th tail series** of
$\sum a_k$ is $\sum_{k \ge N} a_k$, that is the series of the $N$-th tail
$a^{(N)}$ of [[def-sequence]], whose terms are $a^{(N)}_j = a_{j+N}$. The
$0$-th tail series is the series itself.

## Remarks

- **"Diverges" here means "does not converge", and nothing more.** A divergent
  series may have partial sums that run away to $+\infty$, or to $-\infty$, or
  that oscillate without settling anywhere. The three behaviours are not
  distinguished by the word, and no statement on this page uses "diverges" to
  mean "the partial sums are unbounded" unless it says so.

- **The symbol $\sum_{k=0}^{\infty} a_k$ is defined only for a convergent
  series.** It denotes a real number, not a formal object, and it is illegitimate
  to write it down before convergence has been established. Where a proof needs
  to speak of the series without knowing whether it converges, it speaks of
  $(a_k)$ and of $(s_n)$.

- **Two indices, doing different work.** The index $k$ runs over the terms and is
  bound; the index $n$ runs over the partial sums and is the variable in which the
  limit is taken. Confusing them is the commonest slip in the subject, and it is
  the reason the definition above fixes $s_n = \sum_{k<n} a_k$ rather than
  $\sum_{k \le n} a_k$: with this choice the recursion $s_{n+1} = s_n + a_n$ is
  the one supplied by [[def-finite-sum]], with no shift anywhere.
````

### `lem-finite-sum-laws`

````markdown
---
id: lem-finite-sum-laws
kind: lemma
title: "Laws of finite sums and finite products"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-finite-sum, thm-induction-principle, def-ordered-field, def-field, lem-of-add-order, lem-of-sign-rules, lem-of-zero-mult, cor-of-one-positive, lem-of-q-embeds, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
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
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "J. Aspnes, Summation Notation"
      url: "https://www.cs.yale.edu/homes/aspnes/pinewiki/SummationNotation.html"
    - title: "M. Fochler, Recursive sums, products, and powers"
      url: "https://people.math.binghamton.edu/mfochler/bu-mfx/bu-math-arv/math-330-arv/math-330-2019-08/html/lec-notes/bu-ln-330-m330-solns-2019-12-03.pdf"
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Telescoping series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Telescoping_series"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $a, b, c : \mathbb{N} \to \mathbb{R}$ be sequences of reals, let
$\lambda \in \mathbb{R}$, and let $m, n \in \mathbb{N}$, with finite sums and
finite products as in [[def-finite-sum]]. Then:

1. **Additivity.** $\displaystyle\sum_{k<n}(a_k + b_k) = \sum_{k<n} a_k + \sum_{k<n} b_k$.
2. **Scaling.** $\displaystyle\sum_{k<n} \lambda a_k = \lambda \sum_{k<n} a_k$; in particular $\displaystyle\sum_{k<n} \lambda = n\lambda$, where $n$ denotes the canonical natural $\iota(n) \in \mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).
3. **Splitting.** If $m \le n$ then $\displaystyle\sum_{k<n} a_k = \sum_{k<m} a_k + \sum_{k=m}^{n-1} a_k$, and $\displaystyle\prod_{k<n} a_k = \Big(\prod_{k<m} a_k\Big)\Big(\prod_{k=m}^{n-1} a_k\Big)$.
4. **Monotonicity.** If $a_k \le b_k$ for all $k < n$ then $\displaystyle\sum_{k<n} a_k \le \sum_{k<n} b_k$. In particular, if $a_k \ge 0$ for all $k < n$ then $\sum_{k<n} a_k \ge 0$, every single term satisfies $a_j \le \sum_{k<n} a_k$ for $j < n$, and $\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$.
5. **Telescoping.** $\displaystyle\sum_{k<n}\big(c_{k+1} - c_k\big) = c_n - c_0$.
6. **Products.** $\displaystyle\prod_{k<n}(a_k b_k) = \Big(\prod_{k<n} a_k\Big)\Big(\prod_{k<n} b_k\Big)$; if $a_k \ge 0$ for all $k < n$ then $\prod_{k<n} a_k \ge 0$, and if $a_k > 0$ for all $k < n$ then $\prod_{k<n} a_k > 0$.

## Facts & Assumptions

**Given:** Sequences $a, b, c : \mathbb{N} \to \mathbb{R}$, a real $\lambda$, and naturals $m, n$. Write $\Sigma_n = \sum_{k<n} a_k$ and $\Pi_n = \prod_{k<n} a_k$.

[L1] Recursion clauses ([[def-finite-sum]]): $\sum_{k<0} a_k = 0$ and $\sum_{k<n+1} a_k = \sum_{k<n} a_k + a_n$; $\prod_{k<0} a_k = 1$ and $\prod_{k<n+1} a_k = \big(\prod_{k<n} a_k\big) \cdot a_n$; and $\sum_{k=m}^{n-1} a_k = \sum_{j < n-m} a_{m+j}$ for $m \le n$, likewise for products.

[L2] Field axioms: addition and multiplication are associative and commutative, $0$ and $1$ are the identities, $x - x = 0$, and multiplication distributes over addition ([[def-field]], [[def-ordered-field]]); and $0 \cdot x = 0$, which is not an axiom but a lemma ([[lem-of-zero-mult]]).

[L3] Induction principle: a property holding at $0$ and inherited by successors holds at every natural ([[thm-induction-principle]]).

[L4] Adding inequalities: $x \le y$ and $u \le v$ imply $x + u \le y + v$. [[lem-of-add-order]] states the STRICT forms and only those ($x < y \Rightarrow x + c < y + c$, and $x < y$ with $u < v$ giving $x + u < y + v$); the nonstrict form used throughout below is those two together with the cases $x = y$ and $u = v$, which are settled by trichotomy, the order being total and transitive ([[def-ordered-field]]).

[L5] The canonical embedding $\iota : \mathbb{Q} \to \mathbb{R}$ is a field homomorphism, so $\iota(0) = 0$ and $\iota(n+1) = \iota(n) + 1$, and $\iota(n) > 0$ for $n \ge 1$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).

[L6] Sign rules: a product of two positives is positive ([[lem-of-sign-rules]], claim 1), and a product of two nonnegatives is nonnegative, since a factor equal to $0$ makes the product $0$ ([[lem-of-zero-mult]]) and otherwise both factors are positive; and $1 > 0$, which is proved in [[cor-of-one-positive]] and stated by none of the items named above.

## Proof

**Proof technique:** induction.

1.1 Base case $n = 0$: every claim holds at $n = 0$, since both sides of claim 1 are $0 = 0 + 0$, both sides of claim 2 are $0 = \lambda \cdot 0$ and $0 = \iota(0)\lambda$, claim 4 reads $0 \le 0$ with no term to bound and the hypothesis $\sum_{k<0} a_k = 0$ giving nothing to prove, claim 5 reads $0 = c_0 - c_0$, and claim 6 reads $1 = 1 \cdot 1$ with $1 > 0$. [base, L1, L2, L5, L6]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume claims 1, 2, 4, 5 and 6 hold for this $n$ and for all sequences $a, b, c$ and all $\lambda$. [ih]

1.3 Splitting, claim 3, by a separate induction on the number of trailing terms $d = n - m$ with $m$ fixed: for $d = 0$ the claim reads $\sum_{k<m} a_k = \sum_{k<m} a_k + 0$ and $\prod_{k<m} a_k = \big(\prod_{k<m} a_k\big) \cdot 1$, which hold; and if $\sum_{k<m+d} a_k = \sum_{k<m} a_k + \sum_{j<d} a_{m+j}$, then $\sum_{k<m+d+1} a_k = \sum_{k<m+d} a_k + a_{m+d} = \sum_{k<m} a_k + \big(\sum_{j<d} a_{m+j} + a_{m+d}\big) = \sum_{k<m} a_k + \sum_{j<d+1} a_{m+j}$ by associativity, and identically for products with $1$ in place of $0$ and multiplication in place of addition, so induction on $d$ gives claim 3 for every $m \le n$. [L1, L2, L3]

2.1 Additivity at $n+1$: $\sum_{k<n+1}(a_k + b_k) = \sum_{k<n}(a_k + b_k) + (a_n + b_n) = \big(\sum_{k<n} a_k + \sum_{k<n} b_k\big) + (a_n + b_n) = \big(\sum_{k<n} a_k + a_n\big) + \big(\sum_{k<n} b_k + b_n\big) = \sum_{k<n+1} a_k + \sum_{k<n+1} b_k$, using the recursion clause, the hypothesis, and commutativity with associativity of addition. [step 1.2, L1, L2]

2.2 Scaling at $n+1$: $\sum_{k<n+1} \lambda a_k = \sum_{k<n} \lambda a_k + \lambda a_n = \lambda \sum_{k<n} a_k + \lambda a_n = \lambda\big(\sum_{k<n} a_k + a_n\big) = \lambda \sum_{k<n+1} a_k$ by the recursion clause, the hypothesis and distributivity; taking $a_k = 1$ for all $k$ gives $\sum_{k<n+1} \lambda = \sum_{k<n} \lambda + \lambda = \iota(n)\lambda + \lambda = (\iota(n) + 1)\lambda = \iota(n+1)\lambda$. [step 1.2, L1, L2, L5]

2.3 Monotonicity at $n+1$: assume $a_k \le b_k$ for all $k < n+1$; then $a_k \le b_k$ for all $k < n$, so the hypothesis gives $\sum_{k<n} a_k \le \sum_{k<n} b_k$, and adding the inequality $a_n \le b_n$ gives $\sum_{k<n+1} a_k = \sum_{k<n} a_k + a_n \le \sum_{k<n} b_k + b_n = \sum_{k<n+1} b_k$. [step 1.2, L1, L4]

2.4 Telescoping at $n+1$: $\sum_{k<n+1}(c_{k+1} - c_k) = \sum_{k<n}(c_{k+1} - c_k) + (c_{n+1} - c_n) = (c_n - c_0) + (c_{n+1} - c_n) = c_{n+1} - c_0$, by the recursion clause, the hypothesis and the field identities. [step 1.2, L1, L2]

2.5 Products at $n+1$: $\prod_{k<n+1}(a_k b_k) = \big(\prod_{k<n}(a_k b_k)\big)(a_n b_n) = \big(\prod_{k<n} a_k\big)\big(\prod_{k<n} b_k\big)(a_n b_n) = \big(\prod_{k<n+1} a_k\big)\big(\prod_{k<n+1} b_k\big)$ by the recursion clause, the hypothesis, and commutativity with associativity of multiplication; and if every $a_k \ge 0$ for $k < n+1$ then $\prod_{k<n+1} a_k = \big(\prod_{k<n} a_k\big) a_n$ is a product of two nonnegatives, hence nonnegative, with the same argument giving positivity from positivity since $\prod_{k<0} a_k = 1 > 0$. [step 1.2, L1, L2, L6]

3.1 Consequences of monotonicity, completing claim 4: monotonicity itself holds at every $n$, by the induction principle applied to the base case of step 1.1 and the successor step 2.3, so it is available for an arbitrary $n$ in what follows; if $a_k \ge 0$ for all $k < n$ then comparing with the zero sequence gives $\sum_{k<n} a_k \ge \sum_{k<n} 0 = 0$; for $j < n$ splitting at $j$ and then at $j+1$ writes $\sum_{k<n} a_k = \sum_{k<j} a_k + a_j + \sum_{k=j+1}^{n-1} a_k$ with the first and third summands $\ge 0$, so $a_j \le \sum_{k<n} a_k$; and if moreover $\sum_{k<n} a_k = 0$ then $0 \le a_j \le 0$ for every $j < n$, so $a_j = 0$. [step 1.1, step 2.3, step 1.3, L3, L4, L2]

4.1 By the induction principle claims 1, 2, 4, 5 and 6 hold for every $n \in \mathbb{N}$, and claim 3 was proved in step 1.3 with its consequences in step 3.1, so all six laws hold. [step 1.1, step 2.1, step 2.2, step 2.3, step 2.4, step 2.5, step 1.3, step 3.1, L3, discharge-induction] ∎
````

### `lem-limit-preserves-order`

````markdown
---
id: lem-limit-preserves-order
kind: lemma
title: "Limits preserve non-strict inequalities"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-limit, def-sequence, lem-limit-unique, thm-algebra-of-limits, thm-of-archimedean, lem-of-add-order, lem-rat-embeds-dense, lem-of-inverse-positive, lem-of-abs-value, thm-nat-linear-order, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "$x_k\\le y_k$ gives $\\lim x_k\\le\\lim y_k$"
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
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis, Ch. 3"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch3.pdf"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(x_k)$ and $(y_k)$ be sequences of reals ([[def-sequence]]) converging to
$x$ and $y$ respectively ([[def-real-limit]]). If $x_k \le y_k$ eventually, that
is for all $k$ from some index on, then

$$\lim_{k} x_k \;\le\; \lim_{k} y_k .$$

In particular, if $x_k \ge 0$ eventually then $\lim_k x_k \ge 0$, and if
$a \le x_k \le b$ eventually then $a \le \lim_k x_k \le b$.

The conclusion is **not** strict, and cannot be made strict; see the remarks
below and the false statement at the end of this page.

## Facts & Assumptions

**Given:** Sequences $(x_k)$, $(y_k)$ of reals with $(x_k)$ converging to $x$, $(y_k)$ converging to $y$, and an index $K_0 \in \mathbb{N}$ with $x_k \le y_k$ for every $k \ge K_0$ ([[def-sequence]], [[def-real-limit]]). Write $z_k := y_k - x_k$ and $z := y - x$.

[L1] Convergence, quantified over rational $\varepsilon > 0$ ([[def-real-limit]]).

[L2] Difference rule: $(z_k) = (y_k - x_k)$ converges to $y - x = z$ ([[thm-algebra-of-limits]]).

[L3] Small rationals: for every real $\eta > 0$ there is a rational $\varepsilon$ with $0 < \varepsilon < \eta$, by density ([[lem-rat-embeds-dense]]) or by the Archimedean property ([[thm-of-archimedean]]) applied to $1/\eta$ ([[lem-of-inverse-positive]]).

[L4] Absolute value: $|u| < c$ if and only if $-c < u < c$, for $c > 0$ ([[lem-of-abs-value]]).

[L5] Order arithmetic in $\mathbb{R}$: adding a constant preserves $<$ and $\le$; $u \le v$ and $v < w$ give $u < w$; trichotomy, so exactly one of $z < 0$, $z = 0$, $z > 0$ holds and the negation of $z < 0$ is $z \ge 0$; $u \le v$ if and only if $v - u \ge 0$; and $u < u$ is impossible ([[lem-of-add-order]], [[def-complete-ordered-field]], [[def-ordered-field]]).

[L6] The order on $\mathbb{N}$ is total, so any two indices admit a common upper bound ([[thm-nat-linear-order]]).

[L7] For $c \in \mathbb{R}$ the constant sequence $(c)$ converges to $c$ ([[def-sequence]], [[def-real-limit]]).

[L8] A sequence of reals has at most one limit ([[lem-limit-unique]]), which is what licenses writing $\lim_k x_k$ and $\lim_k y_k$ for the limits named in the statement; without it those symbols would not denote.

## Proof

**Proof technique:** contradiction.

1.1 By [L2] the sequence $(z_k)$ converges to $z = y - x$, and by hypothesis $z_k = y_k - x_k \ge 0$ for every $k \ge K_0$. [given, L2, L5]

1.2 Suppose, for contradiction, that $z < 0$. [assume-contra]

2.1 Then $-z > 0$, so by [L3] we may choose a rational $\varepsilon$ with $0 < \varepsilon < -z$. [step 1.2, L3, L5, choose]

3.1 Applying convergence of $(z_k)$ to this $\varepsilon$ gives $K_1 \in \mathbb{N}$ with $|z_k - z| < \varepsilon$ for all $k \ge K_1$, hence $z_k - z < \varepsilon$ and so $z_k < z + \varepsilon$ for all such $k$. [step 1.1, step 2.1, L1, L4, L5]

4.1 Fix an index $k$ with $k \ge K_0$ and $k \ge K_1$. Then $0 \le z_k < z + \varepsilon < z + (-z) = 0$, so $0 < 0$, which is impossible. [step 1.1, step 2.1, step 3.1, L5, L6]

5.1 The assumption $z < 0$ is therefore untenable; by trichotomy $z \ge 0$, that is $y - x \ge 0$, that is $x \le y$; since $x$ and $y$ are the unique limits of $(x_k)$ and $(y_k)$ by [L8], that is exactly $\lim_k x_k \le \lim_k y_k$. Since $(x_k)$ and $(y_k)$ were an arbitrary pair satisfying the hypotheses, the conclusion applies to every such pair, and the two stated special cases are instances of it. Let $(w_k)$ be convergent. If $w_k \ge 0$ from some index on, apply the conclusion to the pair consisting of the constant sequence $0$, which converges to $0$ by [L7], and of $(w_k)$: it gives $0 \le \lim_k w_k$. If $a \le w_k \le b$ from some index on, apply it first to the constant sequence $a$ and $(w_k)$, then to $(w_k)$ and the constant sequence $b$: it gives $a \le \lim_k w_k$ and $\lim_k w_k \le b$. [step 4.1, L5, L7, L8, discharge-contradiction] ∎

## Remarks

- The two special cases are instances of the main claim, discharged in step 5.1 by taking one of the two sequences constant; that a constant sequence converges to its value ([[def-sequence]]) is the only extra ingredient they need.

- **The inequality does not become strict.** From $x_k < y_k$ for every $k$ one may conclude only $\lim x_k \le \lim y_k$; the witness $x_k = 0 < 1/(k+1) = y_k$ has equal limits ([[fs-limit-preserves-strict-inequality]]). Intuitively, the order relation $<$ is not preserved by passage to a limit because a strict gap may shrink to nothing, while $\le$ is preserved because it is closed under that shrinking.

- The proof routes through the single sequence $(z_k) = (y_k - x_k)$ and the difference rule of [[thm-algebra-of-limits]]. That is not an economy of writing only: it isolates the one thing being proved, namely that a sequence eventually $\ge 0$ cannot have a negative limit.
````

### `lem-nth-term-test`

````markdown
---
id: lem-nth-term-test
kind: lemma
title: "If a series converges then its terms tend to $0$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-series, thm-algebra-of-limits, def-real-limit, def-finite-sum, lem-limit-of-tail, def-sequence]
justified_by: []
aliases: []
landmark: true
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
    - title: "Term test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Term_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals. If the series $\sum a_k$ converges
([[def-series]]) then the sequence $(a_k)$ converges ([[def-real-limit]]), with

$$\lim_{k} a_k \;=\; 0 .$$

Equivalently, in the contrapositive form in which the lemma is almost always
used: **if $(a_k)$ does not converge to $0$ then $\sum a_k$ diverges.**

The same statement holds for a series $\sum_{k \ge m} a_k$ with a general
starting index, with the conclusion that $(a_{j+m})_{j \in \mathbb{N}}$ converges
to $0$: that series is by definition the series of the sequence
$b_j = a_{j+m}$ ([[def-series]]), so it is the statement above applied to $(b_j)$.

The converse is false; it is refuted by [[fs-nth-term-test-converse]].

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals whose series converges, with partial sums $s_n = \sum_{k<n} a_k$ ([[def-series]], [[def-finite-sum]]).

[A1] $(s_n)$ converges to some real $S$ ([[def-series]], [[def-real-limit]]).

[L1] The recursion clause of the finite sum: $s_{n+1} = s_n + a_n$ for every $n \in \mathbb{N}$ ([[def-finite-sum]], [[def-series]]).

[L2] Convergence depends only on the tail: if $(x_n)$ converges to $x$ then so does its $1$-st tail $(x_{n+1})_{n}$ ([[lem-limit-of-tail]], [[def-sequence]]).

[L3] Algebra of limits: if $x_n \to x$ and $y_n \to y$ then $x_n - y_n \to x - y$ ([[thm-algebra-of-limits]]).

## Proof

**Proof technique:** direct.

1.1 The sequence $(s_{n+1})_{n \in \mathbb{N}}$ is the $1$-st tail of $(s_n)$, and it converges to $S$. [A1, L2]

1.2 From the recursion clause, $a_n = s_{n+1} - s_n$ for every $n \in \mathbb{N}$. [L1, algebra]

2.1 Hence $(a_n)$ is the difference of two sequences converging to $S$, so it converges to $S - S = 0$. [step 1.1, step 1.2, A1, L3]

3.1 That is the claim, and its contrapositive is the assertion that a series whose terms do not tend to $0$ diverges. [step 2.1] ∎

## Remarks

- **This is a necessary condition and never a sufficient one.** It rules a series out; it never rules one in. The harmonic series has terms tending to $0$ and diverges, which is exactly the content of [[fs-nth-term-test-converse]].

- **What the proof actually uses.** Only that the partial sums converge and that consecutive partial sums differ by a term. No sign hypothesis is placed on $(a_k)$, and none is available at this point on the page.
````

### `lem-positive-and-negative-parts`

````markdown
---
id: lem-positive-and-negative-parts
kind: lemma
title: "Positive and negative parts: $a_k = a_k^{+} - a_k^{-}$ and $|a_k| = a_k^{+} + a_k^{-}$; a series converges absolutely iff both $\\sum a_k^{+}$ and $\\sum a_k^{-}$ converge, and for a conditionally convergent series both diverge to $+\\infty$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-absolute-and-conditional-convergence, def-series, def-max-min, def-abs-value, lem-of-abs-value, thm-nonnegative-series-bounded-partial-sums, lem-series-linearity, thm-direct-comparison-test, def-divergence-to-infinity, def-real-limit]
justified_by: []
aliases: []
landmark: true
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
    - title: "Absolute convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Absolute_convergence"
    - title: "Positive and negative parts (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Positive_and_negative_parts"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "N. Donaldson, Math 140A: Series"
      url: "https://www.math.uci.edu/~ndonalds/math140a/3series.html"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals ([[def-series]]) and define its **positive
part** and **negative part** by

$$a_k^{+} \;:=\; \frac{|a_k| + a_k}{2}, \qquad a_k^{-} \;:=\; \frac{|a_k| - a_k}{2} \qquad (k \in \mathbb{N}),$$

with $|x|$ the absolute value ([[def-abs-value]]). Then:

1. $a_k^{+} = \max\{a_k, 0\}$ and $a_k^{-} = \max\{-a_k, 0\}$ ([[def-max-min]]);
   in particular $a_k^{+} \ge 0$ and $a_k^{-} \ge 0$, and
   $$a_k = a_k^{+} - a_k^{-}, \qquad |a_k| = a_k^{+} + a_k^{-} .$$
2. $\sum a_k$ converges absolutely
   ([[def-absolute-and-conditional-convergence]]) **if and only if** both
   $\sum a_k^{+}$ and $\sum a_k^{-}$ converge.
3. If $\sum a_k$ converges conditionally, then neither $\sum a_k^{+}$ nor
   $\sum a_k^{-}$ converges, and the partial sums of each diverge to $+\infty$
   ([[def-divergence-to-infinity]]).

Claim 3 is the engine of the rearrangement theory: a conditionally convergent
series carries an unlimited supply of positive terms and an unlimited supply of
negative ones, and its convergence is nothing but a cancellation between them.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals, its positive and negative parts $a_k^{+}$ and $a_k^{-}$ as displayed above, and the partial sums of the associated series ([[def-series]]).

[L1] Absolute value: $|x| \ge 0$, $-|x| \le x \le |x|$, and $|x| = x$ when $x \ge 0$ while $|x| = -x$ when $x < 0$ ([[def-abs-value]], [[lem-of-abs-value]]).

[L2] A maximum of a subset of $\mathbb{R}$ is its greatest element, and there is at most one ([[def-max-min]]).

[L3] Linearity of series: if $\sum x_k$ and $\sum y_k$ converge then so does $\sum (x_k + y_k)$, and $\sum c\,x_k$ converges for every real $c$ ([[lem-series-linearity]]).

[L4] Direct comparison: if $0 \le x_k \le y_k$ from some index on and $\sum y_k$ converges, then $\sum x_k$ converges ([[thm-direct-comparison-test]]).

[L5] For a series of nonnegative terms, convergence is equivalent to the range of the partial sums being bounded above; and if that range is not bounded above then the partial sums diverge to $+\infty$ ([[thm-nonnegative-series-bounded-partial-sums]], [[def-divergence-to-infinity]]).

[L6] $\sum a_k$ converges absolutely means $\sum |a_k|$ converges, and converges conditionally means it converges while $\sum |a_k|$ does not ([[def-absolute-and-conditional-convergence]], [[def-real-limit]]).

## Proof

**Proof technique:** direct.

1.1 For every $k$, $|a_k| + a_k \ge 0$ and $|a_k| - a_k \ge 0$, since $-|a_k| \le a_k \le |a_k|$; dividing by the positive real $2$ gives $a_k^{+} \ge 0$ and $a_k^{-} \ge 0$. [L1, algebra]

1.2 For every $k$, $a_k^{+} - a_k^{-} = \bigl((|a_k| + a_k) - (|a_k| - a_k)\bigr)/2 = a_k$ and $a_k^{+} + a_k^{-} = \bigl((|a_k| + a_k) + (|a_k| - a_k)\bigr)/2 = |a_k|$. [algebra]

1.3 Assume now that $\sum a_k$ converges conditionally, so $\sum a_k$ converges and $\sum |a_k|$ diverges. [L6]

2.1 If $a_k \ge 0$ then $|a_k| = a_k$, so $a_k^{+} = a_k$ and $a_k^{-} = 0$; if $a_k < 0$ then $|a_k| = -a_k$, so $a_k^{+} = 0$ and $a_k^{-} = -a_k$. In both situations $a_k^{+}$ is the greater of $a_k$ and $0$ and $a_k^{-}$ is the greater of $-a_k$ and $0$, which is claim 1 together with step 1.1 and step 1.2. [L1, L2, step 1.1, step 1.2, algebra]

2.2 From step 1.1 and step 1.2, $0 \le a_k^{+} \le a_k^{+} + a_k^{-} = |a_k|$ and $0 \le a_k^{-} \le |a_k|$ for every $k$. [step 1.1, step 1.2, algebra]

2.3 If both $\sum a_k^{+}$ and $\sum a_k^{-}$ converge, then $\sum |a_k| = \sum (a_k^{+} + a_k^{-})$ converges. [step 1.2, L3]

3.1 If $\sum |a_k|$ converges then, by comparison with $\sum |a_k|$ using step 2.2, both $\sum a_k^{+}$ and $\sum a_k^{-}$ converge. [step 2.2, L4]

3.2 If $\sum a_k^{+}$ converged, then $\sum a_k^{-} = \sum \bigl(a_k^{+} + (-1)a_k\bigr)$ would converge by linearity, whence $\sum |a_k|$ would converge by step 2.3; since $\sum |a_k|$ diverges, $\sum a_k^{+}$ diverges. [step 1.3, step 1.2, step 2.3, L3]

3.3 If $\sum a_k^{-}$ converged, then $\sum a_k^{+} = \sum (a_k^{-} + a_k)$ would converge by linearity, whence again $\sum |a_k|$ would converge; since $\sum |a_k|$ diverges, $\sum a_k^{-}$ diverges. [step 1.3, step 1.2, step 2.3, L3]

4.1 Claim 2 is the conjunction of step 2.3 and step 3.1, read through the definition of absolute convergence. [step 2.3, step 3.1, L6]

5.1 Both $\sum a_k^{+}$ and $\sum a_k^{-}$ are series of nonnegative terms by step 1.1, so each diverges only if the range of its partial sums fails to be bounded above, and then those partial sums diverge to $+\infty$; this is claim 3. [step 1.1, step 3.2, step 3.3, L5] ∎

## Remarks

- **The two parts are determined by the terms, with no choice anywhere.** The displayed formulas define $a^{+}$ and $a^{-}$ outright, and step 2.1 identifies them with the two maxima; nothing in the proof selects one of several candidates.

- **Claim 3 is sharp in both directions.** Absolute convergence makes both part series converge, and then $\sum_{k=0}^{\infty} a_k$ is the difference of their sums. Conditional convergence makes both part series diverge to $+\infty$, and the difference of their partial sums is what converges. There is no third possibility for a convergent series, because claim 2 covers the case where one of them converges: if exactly one converged, $\sum a_k = \sum(a_k^{+} - a_k^{-})$ could not converge, since the sum of a convergent and a divergent series diverges.

- **Why $\max$ is mentioned at all.** The formulas with $|a_k|$ are what the algebra uses, while $\max\{a_k, 0\}$ is what the name "positive part" means and what makes claims about signs immediate. Step 2.1 records that they agree, so either may be used later without further comment.
````

### `thm-convergence-iff-limsup-equals-liminf`

````markdown
---
id: thm-convergence-iff-limsup-equals-liminf
kind: theorem
title: "A real sequence converges to $L \\in \\mathbb{R}$ iff $\\liminf x_k = \\limsup x_k = L$, and diverges to $\\pm\\infty$ iff both equal $\\pm\\infty$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-limsup-liminf, lem-limsup-epsilon-characterisation, lem-liminf-le-limsup, lem-limsup-reflection, lem-limsup-exists, lem-extended-reals-complete, def-real-limit, def-divergence-to-infinity, def-extended-reals, def-extended-limits, def-upper-bound, def-partial-order, def-sequence, lem-rat-embeds-dense, lem-of-abs-value, lem-of-add-order, cor-of-one-positive, thm-nat-linear-order, def-ordered-field, def-complete-ordered-field]
justified_by: []
forward_refs: [ex-limsup-of-alternating-sequence]
aliases: []
landmark: true
short: "convergence $\\iff \\liminf = \\limsup$"
proof_strategy: direct
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
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.17)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §2.3"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with $\limsup$ and
$\liminf$ as in [[def-limsup-liminf]].

1. For $L \in \mathbb{R}$: $(x_k)$ converges to $L$ ([[def-real-limit]]) **if and
   only if** $\liminf_k x_k = \limsup_k x_k = L$.
2. $x_k \to +\infty$ ([[def-divergence-to-infinity]]) **if and only if**
   $\liminf_k x_k = \limsup_k x_k = +\infty$. Moreover $\liminf_k x_k = +\infty$
   on its own already forces $\limsup_k x_k = +\infty$.
3. $x_k \to -\infty$ **if and only if** $\liminf_k x_k = \limsup_k x_k = -\infty$,
   and $\limsup_k x_k = -\infty$ on its own already forces
   $\liminf_k x_k = -\infty$.

The three clauses combine into one statement about the extended line: for
$L \in \overline{\mathbb{R}}$, the sequence $(x_k)$ converges to $L$ in
$\overline{\mathbb{R}}$ ([[def-extended-limits]]) if and only if

$$\liminf_{k} x_k = \limsup_{k} x_k = L .$$

Since $\liminf_k x_k \le \limsup_k x_k$ always ([[lem-liminf-le-limsup]]), the
single equation $\liminf_k x_k = \limsup_k x_k$ is therefore equivalent to
convergence in $\overline{\mathbb{R}}$, and the common value is the limit. A
sequence that neither converges nor diverges to $\pm\infty$ is exactly one for
which the inequality is strict.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals, its tail ranges $T_n = \{x_k : k \ge n\}$, the extended tail bounds $s_n = \sup T_n$ and $i_n = \inf T_n$, and the quantities $\limsup_k x_k = \inf\{s_n\}$, $\liminf_k x_k = \sup\{i_n\}$ ([[def-limsup-liminf]]).

[L1] All of $s_n$, $i_n$, $\limsup_k x_k$ and $\liminf_k x_k$ exist in $\overline{\mathbb{R}}$ for every sequence; $i_n$ is the greatest lower bound of $T_n$ and $\liminf_k x_k$ the least upper bound of $\{i_n\}$, with the dual descriptions for $s_n$ and $\limsup_k x_k$ ([[lem-limsup-exists]], [[lem-extended-reals-complete]], [[def-upper-bound]], [[def-partial-order]]).

[L2] The order on $\overline{\mathbb{R}}$ is total, so the failure of $a \le b$ is $b < a$; it restricts on $\mathbb{R}$ to the order of $\mathbb{R}$; $+\infty$ is the greatest element and $-\infty$ the least; and every real is $< +\infty$ and $> -\infty$ ([[def-extended-reals]], [[def-partial-order]]).

[L3] Epsilon characterisation, for a real $L$: $L = \limsup_k x_k$ exactly when for every real $\varepsilon > 0$ one has $x_k < L + \varepsilon$ eventually and $x_k > L - \varepsilon$ frequently; and $L = \liminf_k x_k$ exactly when for every real $\varepsilon > 0$ one has $x_k > L - \varepsilon$ eventually and $x_k < L + \varepsilon$ frequently ([[lem-limsup-epsilon-characterisation]]).

[L4] $\liminf_k x_k \le \limsup_k x_k$ ([[lem-liminf-le-limsup]]).

[L5] Reflection: $\limsup_k(-x_k) = -\liminf_k x_k$ and $\liminf_k(-x_k) = -\limsup_k x_k$ ([[lem-limsup-reflection]]). Also $x_k \to -\infty$ if and only if $-x_k \to +\infty$: the condition $x_k < M$ for all $k \ge K$ is equivalent to $-x_k > -M$ for all $k \ge K$ by order reversal, and $M$ runs over all reals exactly when $-M$ does ([[def-divergence-to-infinity]]); the order reversal used here is strict, and the form stated in [[lem-of-add-order]] is likewise strict, so nothing nonstrict is being borrowed from it.

[L6] Convergence to a real $L$ means: for every rational $\varepsilon > 0$ there is $K$ with $|x_k - L| < \varepsilon$ for all $k \ge K$; and the same relation is obtained by testing every real $\varepsilon > 0$ instead, since below any positive real lies a positive rational ([[def-real-limit]], [[def-sequence]], [[lem-rat-embeds-dense]]).

[L7] Divergence: $x_k \to +\infty$ means that for every real $M$ there is $K$ with $x_k > M$ for all $k \ge K$ ([[def-divergence-to-infinity]]).

[L8] Eventually and frequently, and the fact that a property holding eventually holds frequently, since indices beyond any two given thresholds exist by totality of the order on $\mathbb{N}$; likewise two properties each holding eventually hold together from the larger threshold on ([[def-sequence]], [[thm-nat-linear-order]]).

[L9] Absolute value: for $c > 0$, $|a| < c$ if and only if $-c < a < c$ ([[lem-of-abs-value]]).

[L10] Order arithmetic in $\mathbb{R}$: $0 < 1$, so $t < t + 1$ for every real $t$, and no real is above every real; adding a constant preserves the order ([[cor-of-one-positive]], [[lem-of-add-order]], [[def-ordered-field]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 For the forward implication of claim 1, assume $L \in \mathbb{R}$ and that $(x_k)$ converges to $L$. [assume-hyp, L6]

1.2 For the converse implication of claim 1, assume $L \in \mathbb{R}$ and $\liminf_k x_k = \limsup_k x_k = L$. [assume-hyp, L1]

1.3 For the forward implication of claim 2, assume $x_k \to +\infty$. [assume-hyp, L7]

1.4 For the converse implication of claim 2, assume $\liminf_k x_k = +\infty$. [assume-hyp, L1]

2.1 Under the assumption of step 1.1, let $\varepsilon > 0$ be an arbitrary real. Testing convergence at $\varepsilon$ gives $K$ with $|x_k - L| < \varepsilon$, hence $L - \varepsilon < x_k < L + \varepsilon$, for all $k \ge K$. So $x_k < L + \varepsilon$ eventually and $x_k > L - \varepsilon$ eventually, and each of the two therefore also holds frequently. Both halves of each characterisation in [L3] are met, so $\limsup_k x_k = L$ and $\liminf_k x_k = L$. [step 1.1, L3, L6, L8, L9]

2.2 Under the assumption of step 1.2, let $\varepsilon > 0$ be an arbitrary real. The forward halves of the two characterisations in [L3] give $x_k < L + \varepsilon$ for all $k$ beyond some $K_1$ and $x_k > L - \varepsilon$ for all $k$ beyond some $K_2$; beyond the larger of $K_1$ and $K_2$ both hold, so $|x_k - L| < \varepsilon$ there. This holds for every real $\varepsilon > 0$, in particular for every rational one, so $(x_k)$ converges to $L$. [step 1.2, L3, L6, L8, L9]

2.3 Under the assumption of step 1.3, let $M$ be an arbitrary real and take $K$ with $x_k > M$ for all $k \ge K$. Then $M$ is a lower bound of $T_K$, so $M \le i_K$, and $i_K \le \liminf_k x_k$ because $\liminf_k x_k$ is an upper bound of $\{i_n\}$; hence $M \le \liminf_k x_k$. Since $M$ was an arbitrary real, $\liminf_k x_k$ is not $-\infty$, which lies below every real, and it is not a real $t$ either, since $M = t + 1$ would give $t + 1 \le t$. So $\liminf_k x_k = +\infty$. [step 1.3, L1, L2, L7, L10]

2.4 Under the assumption of step 1.4, let $M$ be an arbitrary real. Since $\sup\{i_n\} = +\infty$ and $M < +\infty$, the real $M$ is not an upper bound of $\{i_n\}$, for otherwise the least upper bound would satisfy $+\infty \le M$; by totality there is $n$ with $i_n > M$. Every $k \ge n$ satisfies $x_k \ge i_n > M$, so $x_k > M$ eventually. As $M$ was arbitrary, $x_k \to +\infty$. [step 1.4, L1, L2, L7]

3.1 Steps 2.1 and 2.2 are the two implications of claim 1. [step 2.1, step 2.2, L3]

3.2 For claim 2: if $x_k \to +\infty$ then $\liminf_k x_k = +\infty$ by step 2.3, and then $+\infty = \liminf_k x_k \le \limsup_k x_k$ forces $\limsup_k x_k = +\infty$ since $+\infty$ is the greatest element; conversely if $\liminf_k x_k = \limsup_k x_k = +\infty$ then in particular $\liminf_k x_k = +\infty$ and step 2.4 gives $x_k \to +\infty$. The same use of [L4] is the additional assertion that $\liminf_k x_k = +\infty$ alone forces $\limsup_k x_k = +\infty$. [step 2.3, step 2.4, L2, L4]

4.1 For claim 3, reflection gives $x_k \to -\infty$ exactly when $-x_k \to +\infty$, which by claim 2 holds exactly when $\liminf_k(-x_k) = \limsup_k(-x_k) = +\infty$, that is $-\limsup_k x_k = -\liminf_k x_k = +\infty$, that is $\limsup_k x_k = \liminf_k x_k = -\infty$; and $\limsup_k x_k = -\infty$ alone forces $\liminf_k x_k \le -\infty$, hence $\liminf_k x_k = -\infty$, since $-\infty$ is least. Claims 1, 2 and 3 together say that for $L \in \overline{\mathbb{R}}$ the sequence converges to $L$ in $\overline{\mathbb{R}}$ exactly when $\liminf_k x_k = \limsup_k x_k = L$, since the three clauses of that definition are convergence to a real $L$, divergence to $+\infty$ and divergence to $-\infty$. [step 3.1, step 3.2, L2, L4, L5] ∎

## Remarks

- **This is the theorem that makes $\limsup$ and $\liminf$ worth defining.** They
  exist for every sequence, with no hypothesis, and their coincidence is exactly
  convergence in $\overline{\mathbb{R}}$. So a question about convergence becomes
  a question about two computable quantities, and a proof of convergence can be
  assembled from one-sided estimates without a candidate limit in hand.

- **The equation is between elements of $\overline{\mathbb{R}}$, and reading it in
  $\mathbb{R}$ would lose two thirds of the content.** Clauses 2 and 3 are
  statements about divergence, and they are true statements about
  [[def-divergence-to-infinity]], not a redefinition of it: nothing above claims
  that a sequence diverging to $+\infty$ has a limit in $\mathbb{R}$, and the
  symbol $+\infty$ occurring in them is the element of $\overline{\mathbb{R}}$
  introduced in [[def-extended-reals]].

- **A sequence with $\liminf < \limsup$ does neither.** The alternating sequence
  is the standard witness, with the two values $-1$ and $1$
  ([[ex-limsup-of-alternating-sequence]]); it is bounded, so it also does not
  diverge to $\pm\infty$, and the theorem says its failure to converge is exactly
  the gap between the two quantities.
````

### `thm-dirichlet-rearrangement`

````markdown
---
id: thm-dirichlet-rearrangement
kind: theorem
title: "Dirichlet's rearrangement theorem: an absolutely convergent series converges unconditionally, and every rearrangement of it has the same sum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-rearrangement-and-unconditional-convergence, def-absolute-and-conditional-convergence, lem-absolute-convergence-implies-convergence, lem-positive-and-negative-parts, thm-nonnegative-series-bounded-partial-sums, lem-series-linearity, thm-induction-principle, def-finite-sum, lem-finite-sum-laws, lem-limit-preserves-order, def-injection-surjection-bijection, def-series, def-real-limit]
justified_by: []
aliases: []
landmark: true
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
    - title: "Absolute convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Absolute_convergence"
    - title: "Riemann series theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_series_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "N. Donaldson, Math 140A: Real Analysis notes"
      url: "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf"
    - title: "John K. Hunter, An Introduction to Real Analysis, Chapter 4"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch4.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals whose series converges absolutely
([[def-absolute-and-conditional-convergence]]), and let
$\sigma : \mathbb{N} \to \mathbb{N}$ be a bijection
([[def-injection-surjection-bijection]]). Then:

1. $\sum |a_{\sigma(k)}|$ converges, with
   $\sum_{k=0}^{\infty} |a_{\sigma(k)}| = \sum_{k=0}^{\infty} |a_k|$; that is,
   the rearranged series again converges absolutely;
2. $\sum a_{\sigma(k)}$ converges, with
   $$\sum_{k=0}^{\infty} a_{\sigma(k)} \;=\; \sum_{k=0}^{\infty} a_k .$$

Consequently an absolutely convergent series converges unconditionally
([[def-rearrangement-and-unconditional-convergence]]).

The engine of the proof is a single statement about series of **nonnegative**
terms: for those, the sum is the supremum of the partial sums
([[thm-nonnegative-series-bounded-partial-sums]]), a quantity that cannot see the
order of the terms. The general case is reduced to that one through the positive
and negative parts ([[lem-positive-and-negative-parts]]), which is why no
manipulation of signed finite sums over shuffled index sets occurs anywhere below.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with $\sum |a_k|$ convergent, and a bijection $\sigma : \mathbb{N} \to \mathbb{N}$.

[L1] Finite sums: $\sum_{k<0} x_k = 0$, $\sum_{k<n+1} x_k = \sum_{k<n} x_k + x_n$, and a finite sum may be split at any intermediate index ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L2] Monotonicity of finite sums: if $x_k \le y_k$ for all $k < n$ then $\sum_{k<n} x_k \le \sum_{k<n} y_k$; in particular a finite sum of nonnegative terms is nonnegative ([[lem-finite-sum-laws]]).

[L3] For a series of nonnegative terms, convergence is equivalent to the range of the partial sums being bounded above, and then the sum is the supremum of that range; in particular every partial sum is at most the sum ([[thm-nonnegative-series-bounded-partial-sums]], [[def-series]]).

[L4] Limits preserve non-strict inequalities holding eventually ([[lem-limit-preserves-order]], [[def-real-limit]]).

[L5] The principle of induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L6] A bijection is injective and surjective; $f[S]$ and $f^{-1}[T]$ denote image and preimage ([[def-injection-surjection-bijection]]).

[L7] Positive and negative parts: $a_k^{+} = (|a_k| + a_k)/2$ and $a_k^{-} = (|a_k| - a_k)/2$ are nonnegative, $a_k = a_k^{+} - a_k^{-}$, $|a_k| = a_k^{+} + a_k^{-}$, and $\sum |a_k|$ converges if and only if both $\sum a_k^{+}$ and $\sum a_k^{-}$ converge ([[lem-positive-and-negative-parts]]).

[L8] Linearity of series ([[lem-series-linearity]]).

[L9] If $\sum |x_k|$ converges then $\sum x_k$ converges ([[lem-absolute-convergence-implies-convergence]]).

[L10] Unconditional convergence means every rearrangement converges to the same sum ([[def-rearrangement-and-unconditional-convergence]]).

## Proof

**Proof technique:** direct.

1.1 **Finite domination.** For every $n \in \mathbb{N}$ the following holds: for every sequence $(c_k)$ of nonnegative reals, every $Q \in \mathbb{N}$ and every injective map $\tau$ from $\{k : k < n\}$ into $\{k : k < Q\}$, one has $\sum_{k<n} c_{\tau(k)} \le \sum_{k<Q} c_k$. This is proved by induction on $n$, the sequence, $Q$ and $\tau$ being universally quantified inside the induction statement. At $n = 0$ the left side is the empty sum $0$ and the right side is nonnegative. Assume the statement at $n$, and let $\tau$ be injective from $\{k : k < n+1\}$ into $\{k : k < Q\}$; put $p := \tau(n)$, so $p < Q$, and let $(c'_k)$ agree with $(c_k)$ except that $c'_p := 0$, again a nonnegative sequence. The restriction of $\tau$ to $\{k : k < n\}$ is injective into $\{k : k < Q\}$ and never takes the value $p$, so $c'_{\tau(k)} = c_{\tau(k)}$ for $k < n$, and the induction hypothesis gives $\sum_{k<n} c_{\tau(k)} = \sum_{k<n} c'_{\tau(k)} \le \sum_{k<Q} c'_k$. Splitting the sum $\sum_{k<Q}$ at $p$ and at $p+1$ shows $\sum_{k<Q} c'_k = \sum_{k<Q} c_k - c_p$, so adding $c_p$ to both sides gives $\sum_{k<n+1} c_{\tau(k)} \le \sum_{k<Q} c_k$. [L1, L2, L5, L6]

1.2 **Bounding index.** For every injective $\rho : \mathbb{N} \to \mathbb{N}$ and every $n \in \mathbb{N}$ there is $Q \in \mathbb{N}$ with $\rho(k) < Q$ for all $k < n$: at $n = 0$ take $Q = 0$, and if $Q$ works for $n$ then the greater of $Q$ and $\rho(n)+1$ works for $n+1$, the order on $\mathbb{N}$ being total. [L5, L6]

1.3 Since $\sigma$ is a bijection, for every $j \in \mathbb{N}$ there is exactly one $k$ with $\sigma(k) = j$; write $\sigma^{-1}(j)$ for that $k$. Then $\sigma^{-1}$ is a bijection of $\mathbb{N}$, with $\sigma(\sigma^{-1}(j)) = j$ for every $j$. [L6, choose]

1.4 By [L7] both $\sum a_k^{+}$ and $\sum a_k^{-}$ converge; write $U$ and $V$ for their sums. Since $a_k = a_k^{+} - a_k^{-}$, linearity gives $\sum_{k=0}^{\infty} a_k = U - V$. [given, L7, L8]

1.5 The positive and negative parts are defined pointwise from the value of the term, so the positive part of $a_{\sigma(k)}$ is $a_{\sigma(k)}^{+}$ and its negative part is $a_{\sigma(k)}^{-}$; both are nonnegative sequences in the index $k$. [L7]

2.1 **The nonnegative case, one inequality.** Let $(c_k)$ be a sequence of nonnegative reals with $\sum c_k$ convergent of sum $M$, and let $\rho$ be a bijection of $\mathbb{N}$. For each $n$ pick $Q$ as in step 1.2; then $\rho$ restricted to $\{k : k<n\}$ is injective into $\{k : k<Q\}$, so $\sum_{k<n} c_{\rho(k)} \le \sum_{k<Q} c_k \le M$ by step 1.1 and [L3]. The terms $c_{\rho(k)}$ are nonnegative, so the partial sums of $\sum c_{\rho(k)}$ are bounded above by $M$; hence that series converges, and since each partial sum is at most $M$ its sum is at most $M$. [step 1.1, step 1.2, L2, L3, L4]

3.1 **The nonnegative case, equality.** With $(c_k)$, $M$ and $\rho$ as in step 2.1, write $M'$ for the sum of $\sum c_{\rho(k)}$, so $M' \le M$. The sequence $(c_{\rho(k)})_k$ is nonnegative with convergent series of sum $M'$, and its rearrangement along the bijection $\rho^{-1}$ is $j \mapsto c_{\rho(\rho^{-1}(j))} = c_j$; so step 2.1, applied to that sequence and that bijection, gives $M \le M'$. Hence $M' = M$. [step 1.3, step 2.1]

4.1 Applying step 3.1 to the nonnegative sequence $(|a_k|)$, whose series converges by hypothesis, and to $\sigma$: the series $\sum |a_{\sigma(k)}|$ converges with the same sum as $\sum |a_k|$, which is claim 1. [given, step 3.1]

4.2 Applying step 3.1 to $(a_k^{+})$ and to $(a_k^{-})$, each with the bijection $\sigma$: the series $\sum a_{\sigma(k)}^{+}$ and $\sum a_{\sigma(k)}^{-}$ converge, with sums $U$ and $V$ respectively. [step 3.1, step 1.4, step 1.5]

5.1 Since $a_{\sigma(k)} = a_{\sigma(k)}^{+} - a_{\sigma(k)}^{-}$ for every $k$, linearity gives that $\sum a_{\sigma(k)}$ converges with sum $U - V$, which by step 1.4 equals $\sum_{k=0}^{\infty} a_k$; this is claim 2. [step 1.4, step 1.5, step 4.2, L8]

6.1 The same conclusion is available from claim 1 alone: $\sum |a_{\sigma(k)}|$ converges, so $\sum a_{\sigma(k)}$ converges; step 5.1 is what identifies its sum. [step 4.1, L9]

7.1 Claims 1 and 2 hold for an arbitrary bijection $\sigma$, so $\sum a_k$ converges and every rearrangement of it converges to the same sum, that is, $\sum a_k$ converges unconditionally. [step 4.1, step 5.1, L9, L10] ∎

## Remarks

- **Why the nonnegative case is the whole theorem.** For nonnegative terms the sum is the supremum of the set of partial sums ([[thm-nonnegative-series-bounded-partial-sums]]), and step 2.1 shows that each partial sum of a rearrangement is bounded by the original sum, and conversely. No cancellation can occur, so nothing depends on the order. Everything genuinely signed in the theorem is handled by [[lem-positive-and-negative-parts]], which splits the series into two nonnegative ones.

- **What step 1.1 is, and why it is proved rather than assumed.** It says that a finite sum of nonnegative terms taken along an injective list of indices is at most the sum over an initial segment containing all those indices. This is the one piece of finite combinatorics the theorem needs, and it is not among the laws of [[lem-finite-sum-laws]], all of which compare sums term by term over the same index range. The proof zeroes out one term at a time, which is what keeps it inside those laws.

- **The hypothesis cannot be weakened.** [[thm-riemann-series-theorem]] shows that for a conditionally convergent series every real number, and $\pm\infty$ besides, is the sum of some rearrangement; and [[cor-unconditional-iff-absolute-in-r]] turns the two theorems together into an exact characterisation.
````

### `thm-induction-principle`

````markdown
---
id: thm-induction-principle
kind: theorem
title: "The principle of mathematical induction"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-natural-numbers, def-inductive-set, lem-omega-smallest-inductive]
aliases: [principle-of-induction, induction-principle]
landmark: true
short: "$0\\in S$, $\\sigma$-closed $\\Rightarrow S=\\mathbb N$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "Set-theoretic definition of natural numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{N}$. If $0 \in S$ and $\sigma(n) \in S$ whenever $n \in S$, then $S = \mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \Rightarrow P(\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \in \mathbb{N}$. This is the induction principle, the basis of proof by induction.

## Facts & Assumptions

**Given:** $\mathbb{N} = \omega$ is the smallest inductive set ([[def-inductive-set]], [[def-natural-numbers]], [[lem-omega-smallest-inductive]]); $0 = \varnothing$, $\sigma(n) = n \cup \{n\}$.

[L1] $\omega$ is contained in every inductive set ([[lem-omega-smallest-inductive]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $S \subseteq \mathbb{N}$ with $0 = \varnothing \in S$ and ($x \in S \Rightarrow \sigma(x) = x \cup \{x\} \in S$). [given]

2.1 Then $S$ contains $\varnothing$ and is closed under $x \mapsto x \cup \{x\}$, so $S$ is an inductive set. [step 1.1]

3.1 $\mathbb{N} = \omega \subseteq S$ because $\omega$ is a subset of every inductive set. [L1, step 2.1]

4.1 With $S \subseteq \mathbb{N}$ by hypothesis, $S = \mathbb{N}$. [step 3.1, given]

5.1 The property form is the set case with $S = \{n \in \mathbb{N} : P(n)\}$: $P(0)$ and $P(n) \Rightarrow P(\sigma(n))$ give $0 \in S$ and $\sigma$-closure, so $S = \mathbb{N}$, i.e. $P$ holds for all $n$; conversely the set form is the property form applied to $P(n) :\equiv n \in S$, so the two are equivalent. [step 4.1] ∎
````

### `thm-nonnegative-series-bounded-partial-sums`

````markdown
---
id: thm-nonnegative-series-bounded-partial-sums
kind: theorem
title: "A series of nonnegative terms converges iff its partial sums are bounded, and then the sum is their supremum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-series, def-monotone-sequence, thm-monotone-convergence, cor-monotone-converges-iff-bounded, lem-monotone-unbounded-diverges, def-bounded-set, def-finite-sum, lem-finite-sum-laws, def-sequence, def-divergence-to-infinity, def-complete-ordered-field]
justified_by: []
forward_refs: [cex-comparison-needs-nonnegativity]
aliases: []
landmark: true
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
    - title: "Series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.24)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals with $a_k \ge 0$ for every $k \in \mathbb{N}$,
let $s_n = \sum_{k<n} a_k$ be its partial sums and let
$S = \{\, s_n : n \in \mathbb{N} \,\}$ be the range of $(s_n)$ ([[def-series]]).
Then:

1. $(s_n)$ is nondecreasing ([[def-monotone-sequence]]) and $s_n \ge 0$ for every
   $n$;
2. $\sum a_k$ converges **if and only if** $S$ is bounded above
   ([[def-bounded-set]]), and in that case
   $$\sum_{k=0}^{\infty} a_k \;=\; \sup S ,$$
   so in particular $s_n \le \sum_{k=0}^{\infty} a_k$ for every $n$;
3. if $S$ is not bounded above then $s_n \to +\infty$
   ([[def-divergence-to-infinity]]) and $\sum a_k$ diverges.

This is the theorem that makes the nonnegative theory work: for terms of one
sign, convergence is a boundedness question and no candidate limit is ever
needed. Every comparison test on this page is an application of it.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with $a_k \ge 0$ for every $k$, its partial sums $s_n = \sum_{k<n} a_k$, and the range $S = \{s_n : n \in \mathbb{N}\}$ ([[def-series]], [[def-finite-sum]], [[def-sequence]]).

[L1] The recursion clause of the finite sum: $s_{n+1} = s_n + a_n$ ([[def-finite-sum]]).

[L2] Consecutive comparisons suffice for monotonicity: $(x_k)$ is nondecreasing if and only if $x_k \le x_{k+1}$ for every $k$; and a nondecreasing sequence is bounded below by its first term ([[def-monotone-sequence]]).

[L3] Monotonicity of finite sums: if $a_k \ge 0$ for all $k < n$ then $\sum_{k<n} a_k \ge 0$ ([[lem-finite-sum-laws]]).

[L4] A monotone sequence converges if and only if it is bounded, that is if and only if there is $M$ with $|x_k| \le M$ for every $k$ ([[cor-monotone-converges-iff-bounded]], [[def-sequence]]).

[L5] A nondecreasing sequence bounded above converges to the supremum of its range, which exists by the least-upper-bound property ([[thm-monotone-convergence]], [[def-complete-ordered-field]], [[def-bounded-set]]).

[L6] A nondecreasing sequence whose range is not bounded above diverges to $+\infty$ ([[lem-monotone-unbounded-diverges]], [[def-divergence-to-infinity]]).

## Proof

**Proof technique:** direct.

1.1 For every $n$, $s_{n+1} - s_n = a_n \ge 0$, so $s_n \le s_{n+1}$ and $(s_n)$ is nondecreasing. [given, L1, L2]

1.2 For every $n$, $s_n = \sum_{k<n} a_k \ge 0$, all terms being nonnegative. [given, L3]

2.1 Claim 1 is steps 1.1 and 1.2 together. [step 1.1, step 1.2]

2.2 Since $s_n \ge 0$ we have $|s_n| = s_n$, so $(s_n)$ is bounded in the sense of [L4] if and only if $S$ is bounded above. [step 1.2, L4]

3.1 By [L4] applied to the monotone sequence $(s_n)$, the series converges if and only if $(s_n)$ is bounded, hence if and only if $S$ is bounded above. [step 1.1, step 2.2, L4]

4.1 If $S$ is bounded above then $(s_n)$ converges to $\sup S$, so $\sum a_k$ converges with sum $\sup S$; and since $\sup S$ is an upper bound of $S$, $s_n \le \sup S$ for every $n$. [step 1.1, step 3.1, L5]

4.2 If $S$ is not bounded above then $s_n \to +\infty$, and by step 3.1 the series diverges. [step 1.1, step 3.1, L6]

5.1 The equivalence and the identification of the sum as the supremum together make claim 2, and the divergence statement is claim 3. [step 3.1, step 4.1, step 4.2] ∎

## Remarks

- **"Bounded" and "bounded above" coincide here, and only here.** The equivalence used in step 2.2 rests on $s_n \ge 0$, which rests on every term being nonnegative. For a series with terms of both signs the partial sums can be bounded above and still fail to converge, so nothing in this theorem survives the loss of the sign hypothesis. That failure is exhibited by [[cex-comparison-needs-nonnegativity]] on the companion page.

- **Claim 3 is a strictly stronger statement than "diverges".** Divergence alone permits oscillation ([[def-series]]); for nonnegative terms it cannot occur, and the partial sums necessarily run to $+\infty$. This is what licenses the phrase "the series diverges to $+\infty$" for nonnegative terms, and it is what the Abel-Dini theorem later on this page uses.

- **This criterion is the monotone convergence property, worn differently.** The proof above is monotone convergence for $\mathbb{R}$ applied to the nondecreasing sequence of partial sums, and nothing is lost going back the other way. Given a nondecreasing sequence $(x_n)$ of reals, put $y_n := x_n - x_0 \ge 0$ and let $a_0 := 0$, $a_{k+1} := y_{k+1} - y_k \ge 0$; then $s_{n+1} = y_n$ ([[def-series]]), the partial sums are bounded exactly when $(x_n)$ is bounded above, and claim 1 returns the convergence of $(y_n)$ and so of $(x_n)$. Testing boundedness of partial sums is therefore not a device special to series. Read in the vocabulary of [[def-completeness-properties]] it is the property (MCT), which in an arbitrary ordered field already forces the Archimedean property on its own ([[lem-mct-implies-archimedean]]) and with it the least-upper-bound property ([[lem-mct-implies-lub]]). The translation just given is carried out in $\mathbb{R}$, since [[def-series]] is stated for sequences of reals and this library defines no series over a general ordered field.
````

### `thm-recursion`

````markdown
---
id: thm-recursion
kind: theorem
title: "The recursion theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-peano-system, def-natural-numbers, thm-induction-principle]
aliases: [dedekind-recursion, recursion-theorem]
landmark: true
short: "$g(0)=a,\\ g(\\sigma n)=f(g n)$ unique"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §2.1-2.3 (Peano axioms, recursion, arithmetic)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
    - title: "W. Aitken, MATH 378 Ch. 1: The Peano Axioms (CSU San Marcos)"
      url: "https://public.csusm.edu/aitken_html/m378_S2016/Ch1PeanoAxioms.pdf"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

Let $(N,0,\sigma)$ be a Peano system ([[def-peano-system]]), in particular the natural numbers $\mathbb{N}$ ([[def-natural-numbers]]). For any set $A$, any element $a \in A$, and any function $f : A \to A$, there is a unique function $g : N \to A$ such that $g(0) = a$ and $g(\sigma(n)) = f(g(n))$ for all $n \in N$.

## Facts & Assumptions

**Given:** a Peano system $(N,0,\sigma)$, a set $A$, an element $a \in A$, and a function $f : A \to A$. Call a set $R \subseteq N \times A$ **closed** when $(0,a) \in R$ and, for all $n \in N$ and $x \in A$, $(n,x) \in R$ implies $(\sigma(n),f(x)) \in R$.

[L1] Induction holds in $N$: any $S \subseteq N$ with $0 \in S$ that is closed under $\sigma$ equals $N$ (axiom P3, [[thm-induction-principle]]).

[L2] In a Peano system $\sigma(n) \ne 0$ (P1) and $\sigma$ is injective (P2) ([[def-peano-system]]).

## Proof

**Proof technique:** direct.

1.1 The set $N \times A$ is closed, so the collection of closed subsets of $N \times A$ is nonempty; let $g := \bigcap \{ R : R \subseteq N \times A \text{ closed} \}$, which is itself closed, since if every closed $R$ contains $(0,a)$ then so does $g$, and if $(n,x) \in g$ then $(n,x) \in R$ for each closed $R$, whence $(\sigma(n),f(x)) \in R$ for each such $R$, so $(\sigma(n),f(x)) \in g$. [given, construct]

2.1 Let $D = \{ n \in N : \exists x \in A,\ (n,x) \in g \}$; then $0 \in D$ since $(0,a) \in g$, and if $n \in D$ with $(n,x) \in g$ then $(\sigma(n),f(x)) \in g$ by closure, so $\sigma(n) \in D$; by induction $D = N$, hence $g$ relates every $n$ to at least one $x$. [L1, step 1.1]

2.2 Suppose $(0,b) \in g$ with $b \ne a$; then $g \setminus \{(0,b)\}$ still contains $(0,a)$ and is closed, since any generated pair $(\sigma(m),f(z))$ has $\sigma(m) \ne 0$ by P1 and so is never equal to $(0,b)$; this contradicts the minimality of $g$, so $a$ is the unique second coordinate paired with $0$. [L2, step 1.1]

3.1 Let $U = \{ n \in N : \text{there is exactly one } x \text{ with } (n,x) \in g \}$; then $0 \in U$ by step 2.2. [step 2.2]

4.1 Assume $n \in U$ with unique value $x$, so $(n,x) \in g$ and $(\sigma(n),f(x)) \in g$ by closure; if $(\sigma(n),c) \in g$ with $c \ne f(x)$, then $g \setminus \{(\sigma(n),c)\}$ contains $(0,a)$ because $\sigma(n) \ne 0$, and is closed, because a generated pair $(\sigma(m),f(z))$ with $(m,z) \in g \setminus \{(\sigma(n),c)\}$ can equal $(\sigma(n),c)$ only if $\sigma(m) = \sigma(n)$ and $f(z) = c$, but $\sigma(m) = \sigma(n)$ forces $m = n$ by injectivity, then $z = x$ by uniqueness at $n$, giving $f(z) = f(x) \ne c$, a contradiction; hence $g \setminus \{(\sigma(n),c)\}$ is closed and smaller than $g$, contradicting minimality, so $f(x)$ is the unique value at $\sigma(n)$ and $\sigma(n) \in U$. [L2, step 3.1, step 1.1]

5.1 By induction $U = N$, so together with the totality from step 2.1 the relation $g$ is a function $g : N \to A$; it satisfies $g(0) = a$, and closure with uniqueness gives $g(\sigma(n)) = f(g(n))$ for all $n$. [L1, step 2.1, step 3.1, step 4.1]

6.1 If $h : N \to A$ also satisfies $h(0) = a$ and $h(\sigma(n)) = f(h(n))$, then the set $\{ n : g(n) = h(n) \}$ contains $0$ and is closed under $\sigma$, since $g(n) = h(n)$ implies $g(\sigma(n)) = f(g(n)) = f(h(n)) = h(\sigma(n))$, so by induction it equals $N$, that is $h = g$. [L1, step 5.1] ∎
````

### `thm-well-ordering-principle`

````markdown
---
id: thm-well-ordering-principle
kind: theorem
title: "The well-ordering principle"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-natural-numbers, def-nat-order, thm-induction-principle, lem-nat-discrete, lem-nat-trichotomy, thm-omega-is-peano-system, lem-nat-add-successor-left, lem-nat-add-identity]
aliases: [well-ordering]
landmark: true
short: "every nonempty $S\\subseteq\\mathbb N$ has a least element"
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Well-ordering principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Well-ordering_principle"
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

Every nonempty subset $S \subseteq \mathbb{N}$ has a least element: there is $\ell \in S$ with $\ell \le s$ for all $s \in S$.

## Facts & Assumptions

**Given:** A nonempty subset $S \subseteq \mathbb{N}$. Define $T = \{\, n \in \mathbb{N} : \text{every } m \text{ with } m \le n \text{ satisfies } m \notin S \,\}$ (informally, no element of $S$ is $\le n$).

[L1] Induction principle: a subset of $\mathbb{N}$ that contains $0$ and is closed under $\sigma$ equals $\mathbb{N}$ ([[thm-induction-principle]]).

[L2] $m < n \iff \sigma(m) \le n$; consequently no $k$ satisfies $n < k < \sigma(n)$ ([[lem-nat-discrete]]).

[L3] Exactly one of $s < n$, $s = n$, $n < s$ holds ([[lem-nat-trichotomy]]); and $n < s \iff \sigma(n) \le s$ ([[lem-nat-discrete]]).

[L4] $\sigma$ is injective (Peano axiom P2) ([[thm-omega-is-peano-system]]).

[L5] $\sigma(a) + i = \sigma(a + i)$ for all $a, i$ (the left successor law, [[lem-nat-add-successor-left]]).

[L6] $0 + k = k$ for all $k$ ([[lem-nat-add-identity]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $S$ is nonempty but has no least element. [assume-contra]

1.2 If $m < \sigma(n)$ then $m \le n$: by [L2] applied to $m$ and $\sigma(n)$ we get $\sigma(m) \le \sigma(n)$, say $\sigma(m) + i = \sigma(n)$; then $\sigma(m + i) = \sigma(m) + i = \sigma(n)$ [L5], so $m + i = n$ by injectivity [L4], hence $m \le n$. [L2, L4, L5]

2.1 First, $0 \in T$: if $0 \in S$ then $0 \le s$ for all $s \in S$, since $0 + s = s$ [L6], making $0$ a least element, contrary to the assumption; hence $0 \notin S$; moreover $m \le 0$ forces $m = 0$, because $m \ne 0$ would give $0 < m$ (as $0 + m = m$ [L6] with $m \ne 0$) while $m \le 0$ gives $m < 0$, and [L3] admits at most one of these; so every $m \le 0$ lies outside $S$. [step 1.1, L3, L6, given]

2.2 Next, $T$ is closed under $\sigma$: assume $n \in T$; if $\sigma(n) \in S$ then no $s \in S$ satisfies $s < \sigma(n)$ (else $s \le n$ by step 1.2, so $s \notin S$ because $n \in T$, a contradiction), hence $\sigma(n) \le s$ for all $s \in S$ by [L3], making $\sigma(n)$ a least element, contrary to the assumption; therefore $\sigma(n) \notin S$, and any $m$ with $m \le \sigma(n)$ satisfies $m = \sigma(n)$ or $m \ne \sigma(n)$; in the second case $m \le \sigma(n)$ together with $m \ne \sigma(n)$ gives $m < \sigma(n)$ by the definition of the strict order, hence $m \le n$ by step 1.2 and $m \notin S$ because $n \in T$, while in the first case $m = \sigma(n) \notin S$; so every $m \le \sigma(n)$ lies outside $S$, giving $\sigma(n) \in T$. [step 1.1, step 1.2, L3]

3.1 By the induction principle [L1], from $0 \in T$ and closure under $\sigma$, $T = \mathbb{N}$; then for every $n$, taking $m = n \le n$ shows $n \notin S$, so $S = \varnothing$, contradicting nonemptiness; therefore $S$ has a least element. [step 2.1, step 2.2, L1, discharge-contradiction] ∎
````

