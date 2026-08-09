## Selection reasons

- critical risk (15): 17 declared dependencies; 17 cited facts; 19 numbered proof steps; existence, choice, uniqueness, or well-definedness; boundary-sensitive language; induction, recursion, or minimality; analytic limiting/completeness language

## Target item — `thm-double-series-fubini`

Normalized current SHA-256: `cd0bb9cc9ced17413ec8f29c1ea42654adb57a893f4daacf78ae96942b1fff70`

The complete current item follows, including frontmatter:

````markdown
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
````

## Wave 8 provenance row for the target

```json
{
  "id": "thm-double-series-fubini",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://web.math.princeton.edu/~gunning/bk.pdf",
    "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch4.pdf"
  ],
  "rationale": "The cited Princeton text gives the exact absolute double-series theorem and equality of both iterated sums; the proof is adapted to the library's enumeration.",
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
      "fact": "L1",
      "source": "def-finite-sum",
      "source_section": "Definition",
      "quote": "empty product $\\Pi_0 = 1$; the index $-1$ never occurs as an element of",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "2.1",
        "2.3",
        "2.5",
        "3.1",
        "3.2",
        "4.2",
        "4.3",
        "4.4"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-finite-sum-laws",
      "source_section": "Statement",
      "quote": "$\\lambda \\in \\mathbb{R}$, and let $m, n \\in \\mathbb{N}$, with finite sums and",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "2.1",
        "2.3",
        "2.5",
        "3.1",
        "3.2",
        "4.2",
        "4.3",
        "4.4"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-nonnegative-series-bounded-partial-sums",
      "source_section": "Statement",
      "quote": "2. $\\sum a_k$ converges **if and only if** $S$ is bounded above",
      "uses": [
        "1.1",
        "1.5",
        "1.6",
        "2.2",
        "2.5",
        "3.2",
        "4.4"
      ]
    },
    {
      "fact": "L2",
      "source": "def-series",
      "source_section": "Definition",
      "quote": "**Partial sums.** Let $(a_k)$ be a sequence of reals. Its **sequence of partial",
      "uses": [
        "1.1",
        "1.5",
        "1.6",
        "2.2",
        "2.5",
        "3.2",
        "4.4"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-direct-comparison-test",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ and $(b_k)$ be sequences of reals and suppose there is",
      "uses": [
        "1.5"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-triangle-inequality-finite",
      "source_section": "Statement",
      "quote": "Let $a : \\mathbb{N} \\to \\mathbb{R}$ be a sequence of reals and $n \\in \\mathbb{N}$,",
      "uses": [
        "1.5",
        "3.1",
        "4.2",
        "4.3"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "$|x|$ the absolute value ([[def-abs-value]]). Then",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L6",
      "source": "thm-induction-principle",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{N}$. If $0 \\in S$ and $\\sigma(n) \\in S$ whenever $n \\in S$, then $S = \\mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \\Rightarrow P(\\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \\in \\mathbb{N}$. This is the induction principle, the basis of proof by induction.",
      "uses": [
        "1.3",
        "1.4",
        "1.6",
        "2.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-injection-surjection-bijection",
      "source_section": "Definition",
      "quote": "- $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all",
      "uses": [
        "1.2",
        "1.4",
        "6.1"
      ]
    },
    {
      "fact": "L7",
      "source": "thm-n-cross-n-countable",
      "source_section": "Statement",
      "quote": "Then $J$ is a bijection from $\\mathbb{N} \\times \\mathbb{N}$ onto",
      "uses": [
        "1.2",
        "1.4",
        "6.1"
      ]
    },
    {
      "fact": "L8",
      "source": "lem-absolute-convergence-implies-convergence",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ be a sequence of reals. If the series $\\sum |a_k|$ converges",
      "uses": [
        "1.5",
        "2.2"
      ]
    },
    {
      "fact": "L8",
      "source": "def-absolute-and-conditional-convergence",
      "source_section": "Definition",
      "quote": "**Absolute convergence.** The series $\\sum a_k$ **converges absolutely** when the",
      "uses": [
        "1.5",
        "2.2"
      ]
    },
    {
      "fact": "L9",
      "source": "thm-dirichlet-rearrangement",
      "source_section": "Statement",
      "quote": "Consequently an absolutely convergent series converges unconditionally",
      "uses": [
        "2.2"
      ]
    },
    {
      "fact": "L9",
      "source": "def-rearrangement-and-unconditional-convergence",
      "source_section": "Definition",
      "quote": "**Rearrangement.** The **rearrangement of $(a_k)$ along $\\sigma$** is the",
      "uses": [
        "2.2"
      ]
    },
    {
      "fact": "L10",
      "source": "thm-algebra-of-limits",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ and $(y_k)$ be sequences of reals ([[def-sequence]]) converging to",
      "uses": [
        "1.5",
        "2.5",
        "3.1"
      ]
    },
    {
      "fact": "L10",
      "source": "lem-limit-preserves-order",
      "source_section": "Statement",
      "quote": "$x$ and $y$ respectively ([[def-real-limit]]). If $x_k \\le y_k$ eventually, that",
      "uses": [
        "1.5",
        "2.5",
        "3.1"
      ]
    },
    {
      "fact": "L10",
      "source": "def-real-limit",
      "source_section": "Definition",
      "quote": "A sequence $(x_k)$ of reals **converges** to $x \\in \\mathbb{R}$ when for",
      "uses": [
        "1.5",
        "2.5",
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Verified the stated inference at step 1.1.",
      "step": "1.1",
      "inputs": [
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "Verified the stated inference at step 1.2.",
      "step": "1.2",
      "inputs": [
        "L1",
        "L7"
      ]
    },
    {
      "id": "step-1-3",
      "claim": "Verified the stated inference at step 1.3.",
      "step": "1.3",
      "inputs": [
        "L1",
        "L6"
      ]
    },
    {
      "id": "step-1-4",
      "claim": "Verified the stated inference at step 1.4.",
      "step": "1.4",
      "inputs": [
        "L6",
        "L7"
      ]
    },
    {
      "id": "step-1-5",
      "claim": "Verified the stated inference at step 1.5.",
      "step": "1.5",
      "inputs": [
        "L4",
        "L10",
        "L2",
        "L3",
        "L8"
      ]
    },
    {
      "id": "step-1-6",
      "claim": "Verified the stated inference at step 1.6.",
      "step": "1.6",
      "inputs": [
        "L2",
        "L6"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Verified the stated inference at step 2.1.",
      "step": "2.1",
      "inputs": [
        "1.2",
        "L1",
        "L6"
      ]
    },
    {
      "id": "step-2-2",
      "claim": "Verified the stated inference at step 2.2.",
      "step": "2.2",
      "inputs": [
        "1.3",
        "1.4",
        "L9",
        "1.1",
        "L2",
        "L8"
      ]
    },
    {
      "id": "step-2-3",
      "claim": "Verified the stated inference at step 2.3.",
      "step": "2.3",
      "inputs": [
        "1.6",
        "L1"
      ]
    },
    {
      "id": "step-2-4",
      "claim": "Verified the stated inference at step 2.4.",
      "step": "2.4",
      "inputs": [
        "1.4"
      ]
    },
    {
      "id": "step-2-5",
      "claim": "Verified the stated inference at step 2.5.",
      "step": "2.5",
      "inputs": [
        "1.1",
        "L1",
        "L2",
        "L10"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "Verified the stated inference at step 3.1.",
      "step": "3.1",
      "inputs": [
        "2.2",
        "L1",
        "L4",
        "L10"
      ]
    },
    {
      "id": "step-3-2",
      "claim": "Verified the stated inference at step 3.2.",
      "step": "3.2",
      "inputs": [
        "2.1",
        "2.2",
        "2.4",
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "Verified the stated inference at step 4.1.",
      "step": "4.1",
      "inputs": [
        "3.1",
        "3.2",
        "2.3"
      ]
    },
    {
      "id": "step-4-2",
      "claim": "Verified the stated inference at step 4.2.",
      "step": "4.2",
      "inputs": [
        "1.3",
        "1.1",
        "2.1",
        "2.3",
        "2.4",
        "3.2",
        "L1",
        "L4"
      ]
    },
    {
      "id": "step-4-3",
      "claim": "Verified the stated inference at step 4.3.",
      "step": "4.3",
      "inputs": [
        "3.1",
        "1.6",
        "L1",
        "L4"
      ]
    },
    {
      "id": "step-4-4",
      "claim": "Verified the stated inference at step 4.4.",
      "step": "4.4",
      "inputs": [
        "3.1",
        "1.5",
        "1.6",
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-5-1",
      "claim": "Verified the stated inference at step 5.1.",
      "step": "5.1",
      "inputs": [
        "4.1",
        "4.2",
        "4.3",
        "4.4",
        "1.5",
        "L5"
      ]
    },
    {
      "id": "step-6-1",
      "claim": "Verified the stated inference at step 6.1.",
      "step": "6.1",
      "inputs": [
        "2.2",
        "5.1",
        "2.5",
        "L7"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "Statement and step 1.1 account for the empty-index case."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Statement and step 1.2 include the zero boundary."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Statement and step 1.1 include the unit boundary."
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
      "evidence": "Step 1.4 supplies its choice."
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
    "source": "thm-double-series-fubini",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-dirichlet-rearrangement",
    "declared_target": "thm-dirichlet-rearrangement",
    "target_statement_provenance": "literature-derived",
    "targetPage": "absolute-convergence-and-rearrangement",
    "targetBatch": "wave8-real-analysis-absolute-convergence",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-double-series-fubini",
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
    "source": "thm-double-series-fubini",
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
    "source": "thm-double-series-fubini",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "lem-absolute-convergence-implies-convergence",
    "declared_target": "lem-absolute-convergence-implies-convergence",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-double-series-fubini",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-n-cross-n-countable",
    "declared_target": "thm-n-cross-n-countable",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-double-series-fubini",
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
    "source": "thm-double-series-fubini",
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
    "source": "thm-double-series-fubini",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-direct-comparison-test",
    "declared_target": "thm-direct-comparison-test",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-double-series-fubini",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "lem-triangle-inequality-finite",
    "declared_target": "lem-triangle-inequality-finite",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-double-series-fubini",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "lem-of-abs-value",
    "declared_target": "lem-of-abs-value",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-double-series-fubini",
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
    "source": "thm-double-series-fubini",
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
    "source": "thm-double-series-fubini",
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
    "source": "thm-double-series-fubini",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-algebra-of-limits",
    "declared_target": "thm-algebra-of-limits",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-double-series-fubini",
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
    "source": "thm-double-series-fubini",
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
    "source": "thm-double-series-fubini",
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

## Full text of every cited or declared item (18)

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

### `fs-iterated-double-sums-always-agree`

````markdown
---
id: fs-iterated-double-sums-always-agree
kind: false-statement
title: "FALSE: whenever both iterated sums of a double array exist, they are equal"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-double-series-fubini, def-absolute-and-conditional-convergence, def-finite-sum, lem-finite-sum-laws, def-series, def-real-limit]
justified_by: []
aliases: []
landmark: false
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
    - title: "Series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
    - title: "R. C. Gunning, Analytic Functions of Several Complex Variables"
      url: "https://web.math.princeton.edu/~gunning/bk.pdf"
    - title: "John K. Hunter, An Introduction to Real Analysis, Chapter 4"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch4.pdf"
pipeline_run: null
---

## Statement

**False claim:** for every array $a : \mathbb{N}\times\mathbb{N} \to \mathbb{R}$
such that every row series $\sum_j a_{ij}$ converges, every column series
$\sum_i a_{ij}$ converges, and both series of those sums converge, one has

$$\sum_{i=0}^{\infty}\Bigl(\sum_{j=0}^{\infty} a_{ij}\Bigr) \;=\; \sum_{j=0}^{\infty}\Bigl(\sum_{i=0}^{\infty} a_{ij}\Bigr) .$$

What is true is [[thm-double-series-fubini]], whose hypothesis is on the
**absolute** values: each row must be absolutely summable and the row totals of
absolute values must themselves be summable. Without that hypothesis both
iterated sums can exist and differ.

The witness is the array

$$a_{ij} := \begin{cases} 1 & \text{if } j = i, \\ -1 & \text{if } j = i-1 \text{ (that is } i = j+1), \\ 0 & \text{otherwise.} \end{cases}$$

Every row and every column has at most two nonzero entries, so every row series
and every column series converges. Row $0$ sums to $1$ and every later row to
$0$, giving iterated sum $1$; every column sums to $0$, giving iterated sum $0$.

## Facts & Assumptions

**Given:** The array $a$ with $a_{ii} = 1$ for every $i$, $a_{i+1,i} = -1$ for every $i$, and $a_{ij} = 0$ for all other pairs.

[A1] The refuted claim: whenever all the row and column series and both series of their sums converge, the two iterated sums are equal.

[L1] Finite sums: the empty sum is $0$ and $\sum_{k<n+1}x_k = \sum_{k<n}x_k + x_n$; a finite sum of zeros is $0$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L2] A series whose partial sums are constant from some index on converges to that constant, directly from the definition of a limit ([[def-series]], [[def-real-limit]]).

[L3] Fubini for double series, whose hypothesis is that each $\sum_j |a_{ij}|$ converges and that the series of those row totals converges ([[thm-double-series-fubini]], [[def-absolute-and-conditional-convergence]]).

## Refutation

**Proof technique:** direct.

1.1 Fix $i$. The only nonzero entries in row $i$ are $a_{ii} = 1$ and, when $i \ge 1$, $a_{i,i-1} = -1$, the latter being the entry $a_{(i-1)+1,\,i-1}$. Both have column index below $i+1$, so the partial sums $\sum_{j<Q} a_{ij}$ are constant for $Q \ge i+1$, every further term being $0$. [given, L1]

1.2 Fix $j$. The only nonzero entries in column $j$ are $a_{jj} = 1$ and $a_{j+1,j} = -1$, so $\sum_{i<P}a_{ij} = 0$ for $P \ge j+2$, and the column series converges with sum $C_j = 0$. [given, L1, L2]

2.1 Hence every row series converges: row $0$ has $\sum_{j<Q}a_{0j} = 1$ for $Q \ge 1$, so $R_0 = 1$; and for $i \ge 1$, $\sum_{j<Q}a_{ij} = -1 + 1 = 0$ for $Q \ge i+1$, so $R_i = 0$. [step 1.1, L1, L2]

2.2 The series $\sum_j C_j$ has all terms $0$, so it converges with sum $0$. [step 1.2, L1, L2]

3.1 The series $\sum_i R_i$ has partial sums equal to $1$ from index $1$ on, so it converges with sum $1$. [step 2.1, L1, L2]

4.1 All four convergence requirements of the claim hold, by step 2.1, step 3.1, step 1.2 and step 2.2, while the two iterated sums are $1$ and $0$, which are different. So the claim [A1] is false. [step 3.1, step 2.2, A1]

5.1 The hypothesis of [L3] is what fails: the row totals of absolute values are $A_0 = 1$ and $A_i = 2$ for $i \ge 1$, so $\sum_i A_i$ has unbounded partial sums and diverges, and Fubini's theorem does not apply. [step 4.1, L1, L3] ∎

## Remarks

- **The array is as small as such an array can be.** Every row and every column has at most two nonzero entries, and every entry is $0$, $1$ or $-1$; nothing is hidden in the size of the numbers. What makes the two iterated sums differ is only that the $-1$ in each column lies one row lower than the $+1$, so the cancellation happens along columns but is deferred along rows.

- **Both iterated sums exist, and that is the whole difficulty.** A claim of this shape is not refuted by an array for which one of the sums fails to exist; the point is that existence of both is not enough, and only an absolute hypothesis makes them agree.

- **The failure has the same shape as rearrangement.** By [[thm-double-series-fubini]] the common value, when the absolute hypothesis holds, is also the sum along any enumeration of $\mathbb{N}\times\mathbb{N}$; an iterated sum is one particular way of exhausting the array, and choosing a different exhaustion is exactly choosing a different order of summation. The companion examples page develops the same array.
````

### `lem-absolute-convergence-implies-convergence`

````markdown
---
id: lem-absolute-convergence-implies-convergence
kind: lemma
title: "If $\\sum |a_k|$ converges then $\\sum a_k$ converges"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-series, thm-series-cauchy-criterion, lem-triangle-inequality-finite, lem-finite-sum-laws, def-finite-sum, lem-of-abs-value, def-real-limit]
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.45)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §7.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "Stephen Semmes, Elements of Analysis"
      url: "https://math.rice.edu/~semmes/math331.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals. If the series $\sum |a_k|$ converges
([[def-series]]) then the series $\sum a_k$ converges.

A series with the property that $\sum |a_k|$ converges is called **absolutely
convergent**; the lemma says that absolute convergence implies convergence.

The same statement holds for a family from a general starting index $m$, being
this statement applied to the shifted sequence $j \mapsto a_{j+m}$
([[def-series]]).

**The converse is false**, and the standard witness is the alternating harmonic
series. That witness is not available on this page: its convergence is the
alternating series test, which is not proved here. Nothing below asserts a
converse, and no item on this page uses one.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals such that the series $\sum |a_k|$ converges, with partial sums as in [[def-series]] and finite sums as in [[def-finite-sum]].

[L1] The Cauchy criterion for series: $\sum d_k$ converges if and only if for every real $\varepsilon > 0$ there is $N \in \mathbb{N}$ with $\big|\sum_{k=p+1}^{n} d_k\big| < \varepsilon$ for all $n > p \ge N$ ([[thm-series-cauchy-criterion]], [[def-series]]).

[L2] Triangle inequality for finite sums: $\big|\sum_{k<d} u_k\big| \le \sum_{k<d}|u_k|$ ([[lem-triangle-inequality-finite]]); the block $\sum_{k=p+1}^{n} u_k$ is by definition the finite sum $\sum_{t < n-p} u_{p+1+t}$ ([[def-finite-sum]]), so applying the inequality to the shifted sequence $t \mapsto u_{p+1+t}$ gives $\big|\sum_{k=p+1}^{n} u_k\big| \le \sum_{k=p+1}^{n} |u_k|$ for all naturals $n > p$.

[L3] Monotonicity of finite sums: if $x_t \ge 0$ for all $t < d$ then $\sum_{t<d} x_t \ge 0$ ([[lem-finite-sum-laws]]).

[L4] Absolute value: $|u| \ge 0$ for every real $u$, and $|u| = u$ whenever $u \ge 0$ ([[lem-of-abs-value]]).

[L5] Convergence of a real sequence, and the fact that the real and rational formulations of a tolerance agree ([[def-real-limit]]).

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon > 0$ be an arbitrary real; since $\sum |a_k|$ converges, the Cauchy criterion applied to the sequence $(|a_k|)$ supplies $N \in \mathbb{N}$ with $\big|\sum_{k=p+1}^{n} |a_k|\big| < \varepsilon$ for all $n > p \ge N$. [L1, L5, choose]

1.2 For all naturals $n > p$ the block $\sum_{k=p+1}^{n} |a_k|$ is a finite sum of nonnegative terms, hence nonnegative, hence equal to its own absolute value. [L2, L3, L4]

2.1 So for all $n > p \ge N$ one has $\big|\sum_{k=p+1}^{n} a_k\big| \le \sum_{k=p+1}^{n} |a_k| = \big|\sum_{k=p+1}^{n} |a_k|\big| < \varepsilon$. [step 1.1, step 1.2, L2]

3.1 As $\varepsilon > 0$ was arbitrary, the sequence $(a_k)$ satisfies the Cauchy criterion, so $\sum a_k$ converges. [step 2.1, L1] ∎

## Remarks

- **Nothing here identifies the two sums**, and they are in general different. What is proved is that the second series converges, not that it converges to the same value; the bound $\big|\sum_{k=0}^{\infty} a_k\big| \le \sum_{k=0}^{\infty}|a_k|$ is true and is not needed anywhere on this page, so it is not proved here.

- **Why the Cauchy criterion is the right instrument.** The terms have no sign, so [[thm-nonnegative-series-bounded-partial-sums]] does not apply to $\sum a_k$ and boundedness of its partial sums would prove nothing. The Cauchy criterion is the one convergence test on this page that never names a candidate sum and never asks for a sign, and the whole proof is the observation that its hypothesis for $(|a_k|)$ implies its hypothesis for $(a_k)$, term by term, through one application of the finite triangle inequality.

- **What this unlocks on this page.** The root test ([[thm-root-test]]) and the ratio test ([[thm-ratio-test]]) each produce convergence of $\sum |a_k|$ directly, by comparison with a geometric series; with this lemma both reach their standard conclusion, the convergence of $\sum a_k$ itself. Without it their convergence halves would be strictly weaker than the classical statements.

- **The systematic theory is elsewhere.** Rearrangement, the Riemann series theorem, conditional convergence and products of series all belong with absolute convergence and are developed on a later page of this track. This lemma is only the one implication those two tests need.
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

### `lem-of-abs-value`

````markdown
---
id: lem-of-abs-value
kind: lemma
title: "Basic properties of the absolute value"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-abs-value, def-ordered-field, lem-of-mult-neg, lem-of-sign-rules]
aliases: []
landmark: false
short: "|x| properties"
proof_strategy: cases
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Purdue University analysis notes: Ordered fields and absolute value"
      url: "https://www.math.purdue.edu/~gcavigli/Swanson.pdf"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \in F$, with
$|x|$ the absolute value ([[def-abs-value]]). Then

$$|x| \ge 0; \quad |x| = 0 \iff x = 0; \quad -|x| \le x \le |x|; \quad |-x| = |x|; \quad |xy| = |x|\,|y|;$$

and, for every $c > 0$, one has $|x| < c \iff -c < x < c$.

## Facts & Assumptions

**Given:** An ordered field $F$ and elements $x, y \in F$.

[L1] Absolute value: $|u| = u$ if $u \ge 0$, and $|u| = -u$ if $u < 0$ ([[def-abs-value]]).

[L2] Ordered-field order: trichotomy holds (for each $u$ exactly one of $u > 0$, $u = 0$, $u < 0$), $a < b$ means $b - a$ is positive, and sums and products of positives are positive ([[def-ordered-field]]).

[L3] Signs in products: $(-a)b = -(ab)$ and $(-a)(-b) = ab$ ([[lem-of-mult-neg]]).

[L4] Sign rules: a product of two elements of the same sign is positive, and a product of two elements of opposite sign is negative ([[lem-of-sign-rules]]).

## Proof

**Proof technique:** cases.

1.1 Case $x > 0$: by [L1] $|x| = x > 0$, so $|x| \ge 0$ and $|x| \ne 0$; since $-x < 0$ we get $|-x| = -(-x) = x = |x|$ by [L1], and $-|x| = -x < 0 < x = |x|$, so $-|x| \le x \le |x|$. [assume-case pos, L1, L2, algebra]

1.2 Case $x = 0$: then $|x| = |0| = 0$, so $|x| \ge 0$ holds with $|x| = 0$ and $x = 0$, while $|-x| = |0| = |x|$ and $-|x| = 0 \le 0 \le 0 = |x|$. [assume-case zero, L1]

1.3 Case $x < 0$: by [L1] $|x| = -x$, and [L2] gives $-x > 0$, so $|x| > 0$ and $|x| \ne 0$; here $|-x| = -x = |x|$ by [L1], and $-|x| = -(-x) = x \le x$ while $x < 0 < -x = |x|$, so $-|x| \le x \le |x|$. [assume-case neg, L1, L2, algebra]

1.4 Case $x = 0$ or $y = 0$: then $xy = 0$, so $|xy| = 0$, and one of $|x|, |y|$ is $0$, whence $|x|\,|y| = 0 = |xy|$. [assume-case zerofactor, L1]

1.5 Case $x, y$ have the same sign (both positive or both negative): by [L4] $xy > 0$, so $|xy| = xy$, while $|x|\,|y| = xy$ by [L3] (for $x, y < 0$ this is $(-x)(-y) = xy$), hence $|xy| = |x|\,|y|$. [assume-case same, L1, L3, L4]

1.6 Case $x, y$ have opposite signs (one positive, one negative): by [L4] $xy < 0$, so $|xy| = -(xy)$, while $|x|\,|y| = -(xy)$ by [L3] (namely $x(-y)$ or $(-x)y$), hence $|xy| = |x|\,|y|$. [assume-case opposite, L1, L3, L4]

2.1 By trichotomy [L2] each $x$ lies in exactly one of the cases 1.1-1.3, and in each we verified $|x| \ge 0$, that $|x| = 0 \iff x = 0$, that $|-x| = |x|$, and that $-|x| \le x \le |x|$; hence all four hold for every $x$. [step 1.1, step 1.2, step 1.3, cases-exhaustive]

2.2 By trichotomy [L2] each pair $x, y$ lies in exactly one of the cases 1.4-1.6, and in each $|xy| = |x|\,|y|$; hence $|xy| = |x|\,|y|$ for all $x, y$. [step 1.4, step 1.5, step 1.6, cases-exhaustive]

3.1 Let $c > 0$: if $|x| < c$ then $-c < -|x| \le x \le |x| < c$ by [step 2.1] and [L2], so $-c < x < c$; conversely if $-c < x < c$ then both $x < c$ and $-x < c$, and since $|x|$ equals $x$ or $-x$ by [L1], we get $|x| < c$, so $|x| < c \iff -c < x < c$. [step 2.1, L1, L2] ∎
````

### `lem-triangle-inequality-finite`

````markdown
---
id: lem-triangle-inequality-finite
kind: lemma
title: "Triangle inequality for finite sums"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-finite-sum, lem-of-triangle-inequality, thm-induction-principle, lem-of-abs-value, lem-of-add-order, def-abs-value, def-ordered-field]
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
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "Young, Hölder, and Minkowski inequalities (Oregon State University)"
      url: "https://math.oregonstate.edu/~show/old/142_Luenberger.pdf"
    - title: "Triangle inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Triangle_inequality"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $a : \mathbb{N} \to \mathbb{R}$ be a sequence of reals and $n \in \mathbb{N}$,
with finite sums as in [[def-finite-sum]] and the absolute value as in
[[def-abs-value]]. Then

$$\Big|\sum_{k<n} a_k\Big| \le \sum_{k<n} |a_k|.$$

## Facts & Assumptions

**Given:** A sequence $a : \mathbb{N} \to \mathbb{R}$ and a natural $n$.

[L1] Recursion clauses ([[def-finite-sum]]): $\sum_{k<0} a_k = 0$ and $\sum_{k<n+1} a_k = \sum_{k<n} a_k + a_n$.

[L2] Two-term triangle inequality: $|x + y| \le |x| + |y|$ ([[lem-of-triangle-inequality]]).

[L3] Basic absolute value facts: $|x| \ge 0$ and $|0| = 0$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L4] Adding a constant preserves the order: [[lem-of-add-order]] gives $x < y \Rightarrow x + c < y + c$ and states no nonstrict form, so the form used below, $x \le y \Rightarrow x + c \le y + c$, is that statement together with the case $x = y$, which trichotomy settles; and $\le$ is transitive ([[def-ordered-field]]).

[L5] Induction principle ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction.

1.1 Base case $n = 0$: both sides are $0$, since $\big|\sum_{k<0} a_k\big| = |0| = 0$ and $\sum_{k<0}|a_k| = 0$, so the inequality holds. [base, L1, L3]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume $\big|\sum_{k<n} a_k\big| \le \sum_{k<n} |a_k|$. [ih]

2.1 Splitting off the last term and applying the two-term triangle inequality: $\big|\sum_{k<n+1} a_k\big| = \big|\sum_{k<n} a_k + a_n\big| \le \big|\sum_{k<n} a_k\big| + |a_n|$. [step 1.2, L1, L2]

3.1 Adding $|a_n|$ to both sides of the inductive hypothesis gives $\big|\sum_{k<n} a_k\big| + |a_n| \le \sum_{k<n}|a_k| + |a_n| = \sum_{k<n+1}|a_k|$, so transitivity yields $\big|\sum_{k<n+1} a_k\big| \le \sum_{k<n+1}|a_k|$. [step 1.2, step 2.1, L1, L4]

4.1 By the induction principle the inequality holds for every $n \in \mathbb{N}$. [step 1.1, step 3.1, L5, discharge-induction] ∎
````

### `thm-algebra-of-limits`

````markdown
---
id: thm-algebra-of-limits
kind: theorem
title: "Algebra of limits: sums, scalar multiples, products and quotients"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-limit, def-sequence, lem-convergent-implies-bounded, lem-null-times-bounded, lem-of-triangle-inequality, lem-of-abs-value, cor-of-reverse-triangle, thm-of-archimedean, lem-of-inverse-positive, lem-rat-embeds-dense, lem-of-add-order, lem-of-sign-rules, cor-of-one-positive, thm-rat-ordered-field, thm-nat-linear-order, def-field, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "limits respect $+$, $\\cdot$, $/$"
proof_strategy: direct
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
    - title: "OpenStax Calculus Volume 2, §5.1 Sequences"
      url: "https://openstax.org/books/calculus-volume-2/pages/5-1-sequences"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(x_k)$ and $(y_k)$ be sequences of reals ([[def-sequence]]) converging to
$x$ and $y$ respectively ([[def-real-limit]]), and let $c \in \mathbb{R}$. Then

$$x_k + y_k \to x + y, \qquad c\,x_k \to c\,x, \qquad x_k - y_k \to x - y, \qquad x_k y_k \to x y,$$

and if in addition $y \ne 0$ and $y_k \ne 0$ for every $k \in \mathbb{N}$, then

$$\frac{1}{y_k} \to \frac{1}{y} \qquad \text{and} \qquad \frac{x_k}{y_k} \to \frac{x}{y}.$$

The quotient case rests on an eventual lower bound for $|y_k|$, proved below
rather than assumed: $|y_k| > |y|/2$ for all sufficiently large $k$.

## Facts & Assumptions

**Given:** Sequences $(x_k)$, $(y_k)$ of reals with $(x_k)$ converging to $x$ and $(y_k)$ converging to $y$, and a real $c$ ([[def-sequence]], [[def-real-limit]]). For the last two claims we assume in addition $y \ne 0$ and $y_k \ne 0$ for every $k$.

[L1] Convergence, quantified over rational $\varepsilon > 0$ ([[def-real-limit]]).

[L2] Absolute value and the triangle inequality: $|uv| = |u|\,|v|$, $|u| \ge 0$, $|u| = 0$ if and only if $u = 0$, $|-u| = |u|$, and $|a + b| \le |a| + |b|$ ([[lem-of-abs-value]], [[lem-of-triangle-inequality]]).

[L3] Real versus rational $\varepsilon$: for every real $\eta > 0$ there is a rational $\varepsilon$ with $0 < \varepsilon < \eta$, by density ([[lem-rat-embeds-dense]]) or by the Archimedean property ([[thm-of-archimedean]]) applied to $1/\eta$ ([[lem-of-inverse-positive]]); consequently the convergence test of [[def-real-limit]] may equivalently be run with real $\varepsilon > 0$ ([[def-sequence]]).

[L4] Convergent sequences are bounded ([[lem-convergent-implies-bounded]]), and a constant sequence $(c)$ is bounded by $|c|$ ([[def-sequence]]).

[L5] A null sequence times a bounded sequence is null ([[lem-null-times-bounded]]).

[L6] Reverse triangle inequality: $\bigl||u| - |v|\bigr| \le |u - v|$, hence $|u| \ge |v| - |v - u|$ ([[cor-of-reverse-triangle]]).

[L7] Inverses and order: $a > 0$ implies $a^{-1} > 0$; $0 < a < b$ implies $0 < b^{-1} < a^{-1}$; $(u^{-1})^{-1} = u$ for $u \ne 0$ ([[lem-of-inverse-positive]], [[def-field]]).

[L8] Order arithmetic in $\mathbb{R}$: adding a constant and adding inequalities preserve the order, multiplying a strict inequality by a positive factor preserves it, and $\le$ and $<$ compose transitively; trichotomy holds, and since $u \ge 0$ means $u > 0$ or $u = 0$, an element with $u \ge 0$ and $u \ne 0$ satisfies $u > 0$ ([[lem-of-add-order]], [[lem-of-sign-rules]], [[def-complete-ordered-field]], [[def-ordered-field]]). Moreover $2 = 1 + 1 > 0$ and $2$ is invertible: $0 < 1$ in any ordered field ([[cor-of-one-positive]]) and the positives are closed under addition, so $2 > 0$ and in particular $2 \ne 0$ ([[def-ordered-field]]), whence $2^{-1}$ exists ([[def-field]]).

[L9] Rational arithmetic: $\varepsilon/2$ is a rational $> 0$ whenever $\varepsilon$ is, and $\varepsilon/2 + \varepsilon/2 = \varepsilon$ ([[thm-rat-ordered-field]]); the order on $\mathbb{N}$ is total, so finitely many thresholds admit a common index ([[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 Reduction to null sequences: for any sequence $(z_k)$ of reals and any real $z$, the statements "$(z_k)$ converges to $z$" and "$(z_k - z)$ converges to $0$" are literally the same condition, because $|(z_k - z) - 0| = |z_k - z|$ for every $k$. [L1, L2]

1.2 Sum rule, in general form. Let $(u_k) \to u$ and $(v_k) \to v$ be any convergent sequences of reals and let $\varepsilon > 0$ be rational; take $K_1$ with $|u_k - u| < \varepsilon/2$ for $k \ge K_1$ and $K_2$ with $|v_k - v| < \varepsilon/2$ for $k \ge K_2$, and let $K$ be an index at least as large as both. For $k \ge K$, $|(u_k + v_k) - (u + v)| = |(u_k - u) + (v_k - v)| \le |u_k - u| + |v_k - v| < \varepsilon/2 + \varepsilon/2 = \varepsilon$; hence $u_k + v_k \to u + v$, and in particular $x_k + y_k \to x + y$. [L1, L2, L8, L9, algebra]

1.3 Boundedness: every convergent sequence of reals is bounded, and every constant sequence $(d)$ is bounded by $|d|$. [L4]

1.4 Quotient preparation. Assume $y \ne 0$ and $y_k \ne 0$ for every $k$. Then $|y| > 0$ by [L2], so $|y|/2 > 0$; running the convergence test of $(y_k)$ with the real number $|y|/2$ as tolerance, which [L3] licenses, produces $K_0 \in \mathbb{N}$ with $|y_k - y| < |y|/2$ for all $k \ge K_0$. [L1, L2, L3, L7, L8, choose]

2.1 Scalar rule, in general form. Let $(u_k) \to u$ and let $d \in \mathbb{R}$. By step 1.1 the sequence $(u_k - u)$ is null and by step 1.3 the constant sequence $(d)$ is bounded, so $(d(u_k - u)) = (d u_k - d u)$ is null by [L5]; by step 1.1 again, $d u_k \to d u$, and in particular $c x_k \to c x$. [step 1.1, step 1.3, L5, algebra]

2.2 Product rule, in general form. Let $(u_k) \to u$ and $(v_k) \to v$, and write $u_k v_k - u v = u_k(v_k - v) + v(u_k - u)$. By step 1.1 both $(v_k - v)$ and $(u_k - u)$ are null; by step 1.3 both $(u_k)$ and the constant sequence $(v)$ are bounded; so both $(u_k(v_k - v))$ and $(v(u_k - u))$ are null by [L5], and their sum is null by step 1.2 applied with both limits equal to $0$. By step 1.1, $u_k v_k \to u v$, and in particular $x_k y_k \to x y$. [step 1.1, step 1.2, step 1.3, L5, algebra]

2.3 Eventual lower bound. For every $k \ge K_0$, the reverse triangle inequality gives $|y_k| \ge |y| - |y - y_k| = |y| - |y_k - y| > |y| - |y|/2 = |y|/2 > 0$; so $|y_k| > |y|/2$ for all $k \ge K_0$, and in particular $|y_k| \ne 0$ there. [step 1.4, L2, L6, L8]

3.1 Difference rule. Applying step 2.1 to the sequence $(y_k)$ with $d = -1$ gives $-y_k \to -y$; the sum rule of step 1.2 applied to $(x_k)$ and $(-y_k)$ then gives $x_k - y_k = x_k + (-y_k) \to x + (-y) = x - y$. [step 1.2, step 2.1, L8, algebra]

3.2 Reciprocal estimate. For $k \ge K_0$ we have $y_k \ne 0$ and $|y_k| > |y|/2 > 0$, so [L7] applied to $0 < |y|/2 < |y_k|$ gives $0 < |y_k|^{-1} < 2/|y|$, and therefore $\left|\dfrac{1}{y_k} - \dfrac{1}{y}\right| = \dfrac{|y - y_k|}{|y_k|\,|y|} \le \dfrac{2}{|y|^2}\,|y_k - y|$. [step 2.3, L2, L7, L8, algebra]

4.1 Reciprocal rule. Let $\varepsilon > 0$ be an arbitrary real and put $\eta := \varepsilon |y|^2/2$, a real $> 0$; by [L3] there is $K_1$ with $|y_k - y| < \eta$ for all $k \ge K_1$. For every $k$ at least as large as both $K_0$ and $K_1$, step 3.2 gives $\left|\dfrac{1}{y_k} - \dfrac{1}{y}\right| \le \dfrac{2}{|y|^2}|y_k - y| < \dfrac{2}{|y|^2}\,\eta = \varepsilon$; hence $1/y_k \to 1/y$. [step 3.2, L1, L3, L7, L8, L9, algebra]

5.1 Quotient rule. By step 4.1 the sequence $(1/y_k)$ converges to $1/y$, so the product rule of step 2.2 applied to $(x_k)$ and $(1/y_k)$ gives $x_k/y_k = x_k \cdot (1/y_k) \to x \cdot (1/y) = x/y$. [step 2.2, step 4.1, algebra]

6.1 All the claims are established: the sum rule in step 1.2, the scalar rule in step 2.1, the difference rule in step 3.1, the product rule in step 2.2, and the reciprocal and quotient rules in steps 4.1 and 5.1. [step 1.2, step 2.1, step 2.2, step 3.1, step 4.1, step 5.1] ∎

## Remarks

- **The quotient case is where proofs usually cheat.** The estimate $|1/y_k - 1/y| = |y - y_k| / (|y_k||y|)$ is worthless until $|y_k|$ is known to stay away from $0$: without a lower bound the denominator can be arbitrarily small and the fraction arbitrarily large, even while $|y - y_k|$ shrinks. Step 2.3 supplies that bound, $|y_k| > |y|/2$ for $k \ge K_0$, and it is proved from the reverse triangle inequality, not assumed.

- The hypothesis $y_k \ne 0$ for every $k$ is only there so that $1/y_k$ is defined for every index. It is not needed for the limit: step 2.3 shows $|y_k| > |y|/2 > 0$ from $K_0$ on, so a sequence with $y \ne 0$ has at most finitely many zero terms, and by [[lem-limit-of-tail]] one may pass to the $K_0$-th tail and read the conclusion there.

- The hypothesis $y \ne 0$ cannot be dropped. With $x_k = 1$ and $y_k = 1/(k+1)$, both sequences converge: the first is constant ([[def-sequence]]) and the second is null ([[fs-limit-preserves-strict-inequality]]), so $y = 0$. Yet $x_k/y_k = k+1$, and no real $M$ bounds every $k+1$, by the Archimedean property ([[thm-of-archimedean]]); so the quotient sequence is unbounded, hence not convergent by [[lem-convergent-implies-bounded]].

- Nothing in the proof uses completeness of $\mathbb{R}$ beyond the Archimedean property invoked in [L3], so the same rules hold verbatim for sequences of rationals.
````

### `thm-direct-comparison-test`

````markdown
---
id: thm-direct-comparison-test
kind: theorem
title: "If $0 \\le a_k \\le b_k$ eventually, convergence of $\\sum b_k$ gives convergence of $\\sum a_k$, and divergence of $\\sum a_k$ gives divergence of $\\sum b_k$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-nonnegative-series-bounded-partial-sums, lem-series-tail-invariance, def-series, lem-finite-sum-laws, def-bounded-set, def-finite-sum]
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
    - title: "Direct comparison test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Direct_comparison_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.25)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ and $(b_k)$ be sequences of reals and suppose there is
$K \in \mathbb{N}$ with

$$0 \;\le\; a_k \;\le\; b_k \qquad \text{for all } k \ge K .$$

Then:

1. if $\sum b_k$ converges then $\sum a_k$ converges ([[def-series]]);
2. if $\sum a_k$ diverges then $\sum b_k$ diverges.

The same statement holds verbatim for series with a general starting index $m$,
applied to the shifted sequences of [[def-series]].

The hypothesis is on the terms from some index on, not on all of them: finitely
many terms of either sequence may violate it, or be negative, without affecting
the conclusion. What may not be dropped is nonnegativity of $(a_k)$ from that
index on.

## Facts & Assumptions

**Given:** Sequences $(a_k)$, $(b_k)$ of reals and $K \in \mathbb{N}$ with $0 \le a_k \le b_k$ for all $k \ge K$; the partial sums $\alpha_j = \sum_{i<j} a_{K+i}$ and $\beta_j = \sum_{i<j} b_{K+i}$ of the $K$-th tail series ([[def-series]], [[def-finite-sum]]).

[L1] Monotonicity of finite sums: if $x_i \le y_i$ for all $i < j$ then $\sum_{i<j} x_i \le \sum_{i<j} y_i$ ([[lem-finite-sum-laws]]).

[L2] A series converges if and only if its $K$-th tail series converges ([[lem-series-tail-invariance]]).

[L3] For a series of nonnegative terms: it converges if and only if the range of its partial sums is bounded above, and in the convergent case every partial sum is at most the sum ([[thm-nonnegative-series-bounded-partial-sums]], [[def-bounded-set]]).

## Proof

**Proof technique:** direct.

1.1 For every $i \in \mathbb{N}$ the index $K + i$ is at least $K$, so $0 \le a_{K+i} \le b_{K+i}$; in particular both tail series have nonnegative terms. [given]

1.2 Assume $\sum b_k$ converges. Then its $K$-th tail series $\sum_{k \ge K} b_k$ converges. [given, L2]

2.1 By monotonicity of finite sums, $\alpha_j \le \beta_j$ for every $j \in \mathbb{N}$. [step 1.1, L1]

2.2 That tail series has nonnegative terms, so its partial sums satisfy $\beta_j \le B$ for every $j$, where $B$ is its sum. [step 1.2, step 1.1, L3]

3.1 Hence $\alpha_j \le \beta_j \le B$ for every $j$, so the range of $(\alpha_j)$ is bounded above by $B$. [step 2.1, step 2.2]

4.1 The tail series $\sum_{k \ge K} a_k$ has nonnegative terms and partial sums bounded above, so it converges. [step 3.1, step 1.1, L3]

5.1 Therefore $\sum a_k$ converges, which is claim 1. [step 4.1, L2]

6.1 Claim 2 is the contrapositive of claim 1: if $\sum a_k$ diverges then $\sum b_k$ cannot converge. [step 5.1] ∎

## Remarks

- **Both nonnegativity hypotheses are used, and in different places.** $a_k \ge 0$ is what lets convergence of $\sum_{k \ge K} a_k$ be read off from boundedness of its partial sums, and $b_k \ge a_k \ge 0$ is what makes the sum of $\sum_{k \ge K} b_k$ an upper bound for the partial sums $\beta_j$. Drop the sign hypothesis and the theorem is false, not merely unproved; the companion page exhibits a pair with $a_k \le b_k$ for every $k$, $\sum b_k$ convergent and $\sum a_k$ divergent.

- **The comparison is with a series, not with a limit.** No quotient $a_k/b_k$ appears and no $b_k$ is required to be nonzero, which is what distinguishes this test from the limit comparison test proved next.
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

### `thm-n-cross-n-countable`

````markdown
---
id: thm-n-cross-n-countable
kind: theorem
title: "$\\mathbb{N} \\times \\mathbb{N} \\approx \\mathbb{N}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable, def-equinumerous, def-injection-surjection-bijection, lem-nat-no-zero-divisors, thm-strong-induction, thm-recursion, thm-induction-principle, thm-omega-is-peano-system, lem-nat-nonzero-is-successor, def-nat-addition, def-nat-multiplication, def-nat-order, def-natural-numbers, lem-nat-add-commutative, lem-nat-add-associative, lem-nat-add-cancellative, lem-nat-add-identity, lem-nat-add-successor-left, lem-nat-mult-commutative, lem-nat-mult-associative, lem-nat-mult-distributive, lem-nat-mult-identity, lem-nat-mult-cancellative, lem-nat-order-add-compatible, lem-nat-trichotomy, thm-nat-linear-order, lem-nat-discrete]
justified_by: []
aliases: [pairing-bijection]
landmark: false
short: "$(m,n)\\mapsto 2^m(2n+1)$ is a bijection"
proof_strategy: direct
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
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Pairing function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pairing_function"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
pipeline_run: null
---

## Statement

$\mathbb{N} \times \mathbb{N} \approx \mathbb{N}$ ([[def-equinumerous]]): the
plane of pairs of naturals is countably infinite ([[def-countable]]).

The bijection is exhibited, not merely asserted to exist. Define $2^m$ by
recursion on $m$ ([[thm-recursion]]) by $2^0 = 1$ and $2^{\sigma(m)} = 2^m + 2^m$,
and set

$$J(m,n) = 2^m \cdot \sigma(n + n), \qquad \text{that is} \qquad J(m,n) = 2^m(2n+1).$$

Then $J$ is a bijection from $\mathbb{N} \times \mathbb{N}$ onto
$\mathbb{N} \setminus \{0\}$, and $\sigma$ is a bijection from $\mathbb{N}$ onto
$\mathbb{N} \setminus \{0\}$, so $\sigma^{-1} \circ J$ is a bijection
$\mathbb{N} \times \mathbb{N} \to \mathbb{N}$. What makes $J$ bijective is the
decomposition of a nonzero natural into a power of two times an odd number,
existence and uniqueness both.

## Facts & Assumptions

**Given:** Addition and multiplication on $\mathbb{N}$ with $m + 0 = m$, $m + \sigma(k) = \sigma(m + k)$, $m \cdot 0 = 0$ and $m \cdot \sigma(k) = m \cdot k + m$ ([[def-nat-addition]], [[def-nat-multiplication]]); $1 := \sigma(0)$. Call $k \in \mathbb{N}$ **even** if $k = j + j$ for some $j$ and **odd** if $k = \sigma(j + j)$ for some $j$.

[L1] Recursion: for a set $X$, $x_0 \in X$ and $F : X \to X$ there is $h : \mathbb{N} \to X$ with $h(0) = x_0$ and $h(\sigma(m)) = F(h(m))$ ([[thm-recursion]]).

[L2] Peano: $\sigma(k) \ne 0$ and $\sigma$ is injective ([[thm-omega-is-peano-system]]); every nonzero natural is a successor ([[lem-nat-nonzero-is-successor]]).

[L3] Arithmetic laws: $+$ and $\cdot$ are commutative and associative, $1 \cdot n = n = n \cdot 1$, $0 + n = n$, $a(b + c) = ab + ac$ and $\sigma(a) + n = \sigma(a + n)$ ([[lem-nat-add-commutative]], [[lem-nat-add-associative]], [[lem-nat-add-identity]], [[lem-nat-mult-commutative]], [[lem-nat-mult-associative]], [[lem-nat-mult-identity]], [[lem-nat-mult-distributive]], [[lem-nat-add-successor-left]]).

[L4] Order laws: exactly one of $a < b$, $a = b$, $b < a$ holds ([[lem-nat-trichotomy]]); $\le$ is reflexive, antisymmetric, transitive and total ([[thm-nat-linear-order]]), so $<$ is transitive and mixes with $\le$, in the sense that each of $a < b < c$, $a \le b < c$ and $a < b \le c$ gives $a < c$: transitivity of $\le$ gives $a \le c$ in every case, while $a = c$ would force $b = c$ or $a = b$ by antisymmetry, contradicting whichever of the two hypotheses is strict; and $<$ is irreflexive, because $a < a$ would demand $a \ne a$ ([[def-nat-order]]); $a \le b \iff a + k \le b + k$ and $a < b \iff a + k < b + k$ ([[lem-nat-order-add-compatible]]); $a < b \iff \sigma(a) \le b$, so $a < \sigma(a)$ ([[lem-nat-discrete]]); and $a \le b$ means $a + c = b$ for some $c$ ([[def-nat-order]]), where moreover $a < b$ holds exactly when that $c$ is nonzero, since $c = 0$ gives $b = a$, while $c \ne 0$ with $a = b$ would give $c + a = a + c = a = 0 + a$ and hence $c = 0$ by additive cancellation ([[lem-nat-add-cancellative]], [[lem-nat-add-commutative]], [[lem-nat-add-identity]]).

[L5] Cancellation: $a \cdot k = b \cdot k$ with $k \ne 0$ gives $a = b$ ([[lem-nat-mult-cancellative]]); and $a \cdot b = 0$ forces $a = 0$ or $b = 0$ ([[lem-nat-no-zero-divisors]]).

[L6] Induction ([[thm-induction-principle]]) and strong induction ([[thm-strong-induction]]).

[L7] Bijections, injections, surjections, composition and inverses ([[def-injection-surjection-bijection]]); $A \approx B$ means a bijection $A \to B$ exists ([[def-equinumerous]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] with $X = \mathbb{N}$, $x_0 = 1$ and $F(x) = x + x$: this defines $m \mapsto 2^m$ with $2^0 = 1$ and $2^{\sigma(m)} = 2^m + 2^m$ for all $m$. [L1, construct]

1.2 Every natural is even or odd: by induction, $0 = 0 + 0$ is even; and if $k = j + j$ is even then $\sigma(k) = \sigma(j + j)$ is odd, while if $k = \sigma(j + j)$ is odd then $\sigma(k) = \sigma(\sigma(j+j)) = \sigma(\sigma(j) + j) = \sigma(j) + \sigma(j)$ is even, using $\sigma(j) + j = \sigma(j + j)$ and $x + \sigma(y) = \sigma(x + y)$. [L3, L6, given]

1.3 No natural is both even and odd, that is $j + j \ne \sigma(i + i)$ for all $i, j$: if $j \le i$ then $j + j \le i + j = j + i \le i + i < \sigma(i + i)$; if $i < j$ then $\sigma(i) \le j$, so $\sigma(i+i) < \sigma(\sigma(i+i)) = \sigma(\sigma(i) + i) = \sigma(i) + \sigma(i) \le j + j$; in both cases the two sides differ by irreflexivity of $<$. [L3, L4, given]

1.4 $\sigma$ is a bijection from $\mathbb{N}$ onto $\mathbb{N} \setminus \{0\}$: it is injective by [L2], its values are nonzero by [L2], and every nonzero natural is a value of $\sigma$ by [L2]. [L2, L7]

2.1 $2^m \ne 0$ for every $m$: by induction, $2^0 = \sigma(0) \ne 0$; and if $2^m \ne 0$ then $2^m = \sigma(a)$ for some $a$ by [L2], so $2^{\sigma(m)} = 2^m + 2^m = 2^m + \sigma(a) = \sigma(2^m + a) \ne 0$. [step 1.1, L2, L6, given]

2.2 $2^{m + d} = 2^m \cdot 2^d$ for all $m, d$: by induction on $d$, at $d = 0$ both sides are $2^m$ since $m + 0 = m$ and $2^m \cdot 1 = 2^m$; and if $2^{m+d} = 2^m \cdot 2^d$ then $2^{m + \sigma(d)} = 2^{\sigma(m+d)} = 2^{m+d} + 2^{m+d} = 2^m 2^d + 2^m 2^d = 2^m (2^d + 2^d) = 2^m \cdot 2^{\sigma(d)}$. [step 1.1, L3, L6, given]

3.1 Define $J : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$ by $J(m,n) = 2^m \cdot \sigma(n+n)$. Its values are nonzero: $2^m \ne 0$ by step 2.1 and $\sigma(n+n) \ne 0$ by [L2], so $J(m,n) \ne 0$ by [L5]. Thus $J$ maps into $\mathbb{N} \setminus \{0\}$. [step 1.1, step 2.1, L2, L5, construct]

4.1 $J$ is injective. Suppose $2^m \sigma(n+n) = 2^{m'} \sigma(n'+n')$; by [L4] we may assume $m \le m'$, the other case being symmetric, and write $m' = m + d$. By step 2.2 the right side is $2^m (2^d \sigma(n'+n'))$, so cancelling the nonzero factor $2^m$ with [L5] and [L3] gives $\sigma(n+n) = 2^d \cdot \sigma(n'+n')$. If $d \ne 0$ then $d = \sigma(e)$ by [L2] and $2^d = 2^e + 2^e$, so the right side equals $w + w$ with $w = 2^e \sigma(n'+n')$, by [L3]; that would make $\sigma(n+n)$ both odd and even, contradicting step 1.3. Hence $d = 0$ and $m' = m$, and then $\sigma(n+n) = \sigma(n'+n')$ gives $n + n = n' + n'$ by injectivity of $\sigma$, whence $n = n'$ because $n < n'$ would force $n + n < n' + n = n + n' < n' + n'$ by [L4] and [L3], and symmetrically for $n' < n$. [step 1.1, step 1.3, step 2.1, step 2.2, step 3.1, L2, L3, L4, L5]

4.2 $J$ is surjective onto $\mathbb{N} \setminus \{0\}$: by strong induction [L6] we show every $k$ is $0$ or a value of $J$. Let $k \ne 0$ and assume the claim for all $j < k$. By step 1.2, $k$ is odd or even. If $k = \sigma(j+j)$ then $k = 1 \cdot \sigma(j+j) = 2^0 \sigma(j+j) = J(0,j)$ by [L3]. If $k = j + j$ then $j \ne 0$, since $j = 0$ would give $k = 0$; also $j < j + j = k$ by [L4], because $j + j = k$ with $j \ne 0$; so the hypothesis at $j$ and $j \ne 0$ give $j = 2^m \sigma(n+n)$ for some $m, n$, and then $k = j + j = 2^m \sigma(n+n) + 2^m \sigma(n+n) = (2^m + 2^m) \sigma(n+n) = 2^{\sigma(m)} \sigma(n+n) = J(\sigma(m), n)$ by [L3] and step 1.1. [step 1.1, step 1.2, step 3.1, L3, L4, L6]

5.1 Therefore $J$ is a bijection from $\mathbb{N} \times \mathbb{N}$ onto $\mathbb{N} \setminus \{0\}$, and composing with the inverse of the bijection $\sigma$ of step 1.4 yields the bijection $\sigma^{-1} \circ J : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$; hence $\mathbb{N} \times \mathbb{N} \approx \mathbb{N}$ and $\mathbb{N} \times \mathbb{N}$ is countably infinite. [step 1.4, step 4.1, step 4.2, L7] ∎

## Remarks

- Written out, $\sigma^{-1}(J(m,n)) = 2^m(2n+1) - 1$, the standard bijection. The detour through $\mathbb{N} \setminus \{0\}$ avoids subtraction, which the naturals do not have as a total operation.

- The proof is a proof of unique factorisation into a power of two times an odd number: step 4.2 is existence and step 4.1 is uniqueness. Nothing weaker would do, and no appeal to a picture of the diagonal enumeration is made anywhere. Nothing here uses any choice principle.

- The Cantor pairing polynomial $(m,n) \mapsto \tfrac{(m+n)(m+n+1)}{2} + n$ is an alternative bijection. It is not used because halving is not available in $\mathbb{N}$ without first developing division with remainder, whereas doubling, which is all $2^m$ needs, is immediate from addition.
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

