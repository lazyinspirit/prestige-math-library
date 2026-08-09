---
id: thm-double-series-fubini
kind: theorem
title: "Fubini for double series: if $\\sum_i \\sum_j |a_{ij}|$ converges then both iterated sums and the sum along every bijection $\\mathbb{N} \\to \\mathbb{N} \\times \\mathbb{N}$ converge to one and the same value"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-dirichlet-rearrangement, def-rearrangement-and-unconditional-convergence, def-absolute-and-conditional-convergence, lem-absolute-convergence-implies-convergence, thm-n-cross-n-countable, def-injection-surjection-bijection, thm-nonnegative-series-bounded-partial-sums, thm-direct-comparison-test, lem-triangle-inequality-finite, lem-of-abs-value, thm-induction-principle, def-finite-sum, lem-finite-sum-laws, thm-algebra-of-limits, lem-limit-preserves-order, def-series, def-real-limit]
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
    - title: "Fubini's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fubini%27s_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 8"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. C. Gunning, Analytic Functions of Several Complex Variables"
      url: "https://web.math.princeton.edu/~gunning/bk.pdf"
    - title: "John K. Hunter, An Introduction to Real Analysis, Chapter 4"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch4.pdf"
pipeline_run: null
---

## Statement

Let $a : \mathbb{N} \times \mathbb{N} \to \mathbb{R}$ be a doubly indexed array
of reals, written $a_{ij}$. Assume:

> **(H)** for every $i$ the series $\sum_j |a_{ij}|$ converges, with sum $A_i$;
> and the series $\sum_i A_i$ converges, with sum $L$.

Then, with $J : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$ any bijection
([[thm-n-cross-n-countable]], [[def-injection-surjection-bijection]]):

1. $\sum_n a_{J(n)}$ converges absolutely
   ([[def-absolute-and-conditional-convergence]]), and its sum $S$ is the same
   for every such bijection ([[thm-dirichlet-rearrangement]]);
2. for every $i$ the series $\sum_j a_{ij}$ converges, say to $R_i$; the series
   $\sum_i R_i$ converges absolutely; and $\sum_{i=0}^{\infty} R_i = S$;
3. for every $j$ the series $\sum_i |a_{ij}|$ converges and $\sum_i a_{ij}$
   converges, say to $C_j$; the series $\sum_j C_j$ converges absolutely; and
   $\sum_{j=0}^{\infty} C_j = S$.

In particular the two iterated sums exist and agree:

$$\sum_{i=0}^{\infty}\Bigl(\sum_{j=0}^{\infty} a_{ij}\Bigr) \;=\; \sum_{j=0}^{\infty}\Bigl(\sum_{i=0}^{\infty} a_{ij}\Bigr) \;=\; \sum_{n=0}^{\infty} a_{J(n)} .$$

**The hypothesis is on the absolute values, and it is stated as an iterated
condition, not as an unqualified "double sum".** Each row must be absolutely
summable, and the row totals must themselves be summable. Without it the two
iterated sums may both exist and differ, which is
[[fs-iterated-double-sums-always-agree]].

## Facts & Assumptions

**Given:** An array $a : \mathbb{N} \times \mathbb{N} \to \mathbb{R}$ satisfying (H), with row totals $A_i$ and $L = \sum_{i=0}^{\infty} A_i$, and a bijection $J : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$.

[L1] Finite sums: the empty sum is $0$, $\sum_{k<n+1}x_k = \sum_{k<n}x_k + x_n$, finite sums are additive, monotone in their terms, and may be split at any intermediate index ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L2] For a series of nonnegative terms, convergence is equivalent to the range of the partial sums being bounded above; then the sum is the supremum of that range, every partial sum is at most the sum, and the partial sums converge to it ([[thm-nonnegative-series-bounded-partial-sums]], [[def-series]]).

[L3] Direct comparison ([[thm-direct-comparison-test]]).

[L4] $\bigl|\sum_{k<n}x_k\bigr| \le \sum_{k<n}|x_k|$ ([[lem-triangle-inequality-finite]]).

[L5] Absolute value: $|x| \ge 0$, $-|x| \le x \le |x|$, and $|x| = 0$ exactly when $x = 0$ ([[lem-of-abs-value]]).

[L6] The principle of induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L7] A bijection is an injective surjection; $\mathbb{N} \times \mathbb{N}$ admits a bijection with $\mathbb{N}$ ([[def-injection-surjection-bijection]], [[thm-n-cross-n-countable]]).

[L8] If $\sum |x_k|$ converges then $\sum x_k$ converges ([[lem-absolute-convergence-implies-convergence]], [[def-absolute-and-conditional-convergence]]).

[L9] An absolutely convergent series has the same sum along every rearrangement ([[thm-dirichlet-rearrangement]], [[def-rearrangement-and-unconditional-convergence]]).

[L10] Algebra of limits, and limits preserve non-strict inequalities holding eventually ([[thm-algebra-of-limits]], [[lem-limit-preserves-order]], [[def-real-limit]]).

## Proof

**Proof technique:** direct.

1.1 **Rectangles are bounded by $L$.** For all $P, Q \in \mathbb{N}$ one has $\sum_{i<P}\sum_{j<Q}|a_{ij}| \le \sum_{i<P} A_i \le L$, since each inner sum is a partial sum of the convergent nonnegative series $\sum_j |a_{ij}|$ and so is at most $A_i$, and finite sums are monotone. [given, L1, L2]

1.2 **Single points.** Let $d : \mathbb{N}\times\mathbb{N} \to \mathbb{R}$ vanish except at one pair $(p,q)$, let $N \in \mathbb{N}$ and let $\rho$ be injective on $\{n : n<N\}$ with values in $\mathbb{N}\times\mathbb{N}$. If $(p,q) = \rho(n_0)$ for some (necessarily unique) $n_0 < N$, then $\sum_{n<N} d_{\rho(n)} = d_{pq}$; otherwise $\sum_{n<N} d_{\rho(n)} = 0$. Both follow by splitting the sum at $n_0$ and at $n_0+1$, all remaining terms being $0$. [L1, L7]

1.3 **List dominated by a rectangle.** For every $N \in \mathbb{N}$, every array $(c_{ij})$ of nonnegative reals, all $P, Q \in \mathbb{N}$ and every injective $\rho$ on $\{n : n<N\}$ with values in $\{(i,j) : i<P,\ j<Q\}$, one has $\sum_{n<N} c_{\rho(n)} \le \sum_{i<P}\sum_{j<Q} c_{ij}$. Induction on $N$, everything else universally quantified: at $N = 0$ the left side is $0$ and the right side is nonnegative; and passing from $N$ to $N+1$, put $(p,q) := \rho(N)$ and let $c''$ agree with $c$ except that $c''_{pq} := 0$, so that the induction hypothesis applied to $c''$ and $\rho$ restricted gives $\sum_{n<N} c_{\rho(n)} \le \sum_{i<P}\sum_{j<Q}c_{ij} - c_{pq}$, the subtraction coming from splitting the outer sum at $p$ and the inner one at $q$; adding $c_{pq}$ closes the induction. [L1, L6]

1.4 **Bounding indices.** For every $N$ there are $P, Q$ with $J(n) \in \{(i,j) : i<P,\ j<Q\}$ for all $n < N$; and for all $P, Q$ there is $N$ with $\{(i,j) : i<P,\ j<Q\} \subseteq \{J(n) : n<N\}$. Both are inductions using that the order on $\mathbb{N}$ is total, so that finitely many naturals have a strict upper bound; the second uses surjectivity of $J$ to name, for each pair, the index mapping onto it. [L6, L7]

1.5 For every $i$ the series $\sum_j a_{ij}$ converges, since $\sum_j |a_{ij}|$ does; write $R_i$ for its sum, so $|R_i| \le A_i$ by [L4] and [L10]. Hence $\sum_i |R_i|$ converges by comparison with $\sum_i A_i$, and $\sum_i R_i$ converges absolutely. [given, L2, L3, L4, L8, L10]

1.6 Let $\varepsilon > 0$ be real. Choose $P_0 \ge 1$ with $L - \sum_{i<P_0} A_i < \varepsilon$, possible because the partial sums of $\sum_i A_i$ converge to $L$; then choose, for each $i < P_0$, an index $Q_i$ with $A_i - \sum_{j<Q_i}|a_{ij}| < \varepsilon/P_0$, and let $Q_0$ be an upper bound of the finitely many $Q_i$, so that $A_i - \sum_{j<Q_0}|a_{ij}| < \varepsilon/P_0$ for every $i < P_0$. [given, L2, L6, choose]

2.1 **Rectangle to list.** Let $c$ be an array, let $P, Q, N \in \mathbb{N}$ and let $\rho$ be injective on $\{n : n<N\}$ with $\{(i,j) : i<P,\ j<Q\} \subseteq \{\rho(n) : n<N\}$. Let $c'$ agree with $c$ on that rectangle and vanish off it. Then $\sum_{i<P}\sum_{j<Q} c_{ij} = \sum_{n<N} c'_{\rho(n)}$. This is proved by induction on $P$, with an inner induction on $Q$: enlarging the rectangle by one column adds the single term $c_{PQ}$ to the left side, and changes $c'$ by an array vanishing except at $(P,Q)$, which by step 1.2 adds exactly $c_{PQ}$ to the right side; at $P = 0$ or $Q = 0$ both sides are $0$. [step 1.2, L1, L6]

2.2 By step 1.3 and step 1.4, every partial sum $\sum_{n<N}|a_{J(n)}|$ is at most $\sum_{i<P}\sum_{j<Q}|a_{ij}| \le L$; hence $\sum_n |a_{J(n)}|$ converges, with sum $\Lambda \le L$, and $\sum_n a_{J(n)}$ converges, say to $S$. Any two bijections $\mathbb{N} \to \mathbb{N}\times\mathbb{N}$ differ by a bijection of $\mathbb{N}$, so by [L9] the value $S$ does not depend on $J$; this is claim 1. [step 1.1, step 1.3, step 1.4, L2, L8, L9]

2.3 Write $D := \sum_{i<P_0}\sum_{j<Q_0} a_{ij}$ and $E := \sum_{i<P_0}\sum_{j<Q_0} |a_{ij}|$. By step 1.6 and monotonicity, $E > \sum_{i<P_0}(A_i - \varepsilon/P_0) = \sum_{i<P_0}A_i - \varepsilon > L - 2\varepsilon$, so $L - E < 2\varepsilon$. [step 1.6, L1]

2.4 By step 1.4 fix $N$ with $\{(i,j) : i<P_0,\ j<Q_0\} \subseteq \{J(n) : n<N\}$, and by step 1.4 again fix $P \ge P_0$, $Q \ge Q_0$ with $J(n)$ in the rectangle $\{(i,j) : i<P,\ j<Q\}$ for all $n<N$. [step 1.4, choose]

2.5 The transposed array $a^{\mathsf{T}}_{ij} := a_{ji}$ satisfies (H): its $i$-th row total is $\sum_j |a_{ji}|$, which converges because its partial sums $\sum_{j<Q}|a_{ji}|$ are bounded by $L$ by step 1.1; and the partial sums $\sum_{i<P}\sum_j |a_{ji}|$ are limits of the rectangle sums $\sum_{i<P}\sum_{j<Q}|a_{ji}|$, again bounded by $L$ by step 1.1, so the series of row totals converges. [step 1.1, L1, L2, L10]

3.1 For every $N$, $\bigl|S - \sum_{n<N}a_{J(n)}\bigr| \le \Lambda - \sum_{n<N}|a_{J(n)}|$: for $M > N$ the triangle inequality gives $\bigl|\sum_{n<M}a_{J(n)} - \sum_{n<N}a_{J(n)}\bigr| \le \sum_{n<M}|a_{J(n)}| - \sum_{n<N}|a_{J(n)}| \le \Lambda - \sum_{n<N}|a_{J(n)}|$, and letting $M$ grow, the limit preserves the two non-strict inequalities bounding the left side. [step 2.2, L1, L4, L10]

3.2 Let $a'$ agree with $a$ on the rectangle $\{(i,j) : i<P_0,\ j<Q_0\}$ and vanish off it. By step 2.1, $D = \sum_{n<N} a'_{J(n)}$ and $E = \sum_{n<N} |a'_{J(n)}|$; since $|a'_{J(n)}| \le |a_{J(n)}|$ termwise, monotonicity gives $E \le \sum_{n<N}|a_{J(n)}| \le \Lambda \le L$. [step 2.1, step 2.2, step 2.4, L1, L2]

4.1 By step 3.1 and step 3.2, $\bigl|S - \sum_{n<N} a_{J(n)}\bigr| \le \Lambda - \sum_{n<N}|a_{J(n)}| \le L - E < 2\varepsilon$. [step 3.1, step 2.3, step 3.2]

4.2 Also $\bigl|\sum_{n<N}a_{J(n)} - D\bigr| = \bigl|\sum_{n<N}(a - a')_{J(n)}\bigr| \le \sum_{n<N}|(a-a')_{J(n)}| \le \sum_{i<P}\sum_{j<Q}|(a-a')_{ij}| = \sum_{i<P}\sum_{j<Q}|a_{ij}| - E \le L - E < 2\varepsilon$, the middle inequality by step 1.3 and the following equality by splitting the iterated sum at $P_0$ and at $Q_0$, the array $a - a'$ agreeing with $a$ off the small rectangle and vanishing on it. [step 1.1, step 2.1, step 1.3, step 2.3, step 2.4, step 3.2, L1, L4]

4.3 For each $i < P_0$, $\bigl|R_i - \sum_{j<Q_0}a_{ij}\bigr| \le A_i - \sum_{j<Q_0}|a_{ij}| < \varepsilon/P_0$, by the argument of step 3.1 applied to the row $i$; summing over $i < P_0$ gives $\bigl|\sum_{i<P_0}R_i - D\bigr| < \varepsilon$. [step 3.1, step 1.6, L1, L4]

4.4 Writing $\Sigma R$ for the sum of $\sum_i R_i$, the same argument applied to the series $\sum_i R_i$ and the comparison $|R_i| \le A_i$ gives $\bigl|\Sigma R - \sum_{i<P_0}R_i\bigr| \le \sum_{i=0}^{\infty}|R_i| - \sum_{i<P_0}|R_i| \le L - \sum_{i<P_0}A_i < \varepsilon$. [step 3.1, step 1.5, step 1.6, L1, L2]

5.1 Combining step 4.1, step 4.2, step 4.3 and step 4.4, $|\Sigma R - S| < \varepsilon + \varepsilon + 2\varepsilon + 2\varepsilon = 6\varepsilon$. As $\varepsilon > 0$ was arbitrary and $|\Sigma R - S| \ge 0$, this forces $\Sigma R = S$, which with step 1.5 is claim 2. [step 1.5, step 4.1, step 4.2, step 4.3, step 4.4, L5]

6.1 Applying claims 1 and 2 to $a^{\mathsf{T}}$ and to the bijection $J^{\mathsf{T}}$ obtained by exchanging the coordinates of $J$ gives claim 3, since $a^{\mathsf{T}}_{J^{\mathsf{T}}(n)} = a_{J(n)}$ for every $n$, so the two linear series are the same series and have the same sum $S$. [step 2.2, step 5.1, step 2.5, L7] ∎

## Remarks

- **What the finite bookkeeping of steps 1.2 to 1.5 does, and why it is proved.** Three facts are needed and none of them is among the laws of [[lem-finite-sum-laws]], all of which compare sums term by term over the same index range: that a sum along an injective list picks up an isolated term exactly once; that an iterated sum over a rectangle equals the sum along any injective list containing that rectangle, of the array cut down to it; and that a sum of nonnegative terms along an injective list into a rectangle is at most the iterated sum over the rectangle. Each is proved by zeroing out one entry at a time, which keeps the argument inside those laws.

- **Where the hypothesis is used.** Only through step 1.1, which bounds every rectangle by $L$, and through step 1.6, which makes a single rectangle capture all but $2\varepsilon$ of the total mass. Everything else is bookkeeping. This is why the hypothesis has to be an absolute one: for a signed array no rectangle captures the mass, and the two iterated sums can disagree.

- **The independence of the enumeration is [[thm-dirichlet-rearrangement]] and nothing more.** Two bijections $\mathbb{N} \to \mathbb{N}\times\mathbb{N}$ differ by a bijection of $\mathbb{N}$, and an absolutely convergent series is unconditionally convergent. So the "sum of the array" is a well-defined real number attached to the array itself, and the theorem says the two iterated sums compute it.
