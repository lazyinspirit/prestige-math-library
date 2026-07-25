---
id: fs-bounded-implies-convergent
kind: false-statement
title: "FALSE: every bounded sequence converges"
status: published
origin: session
deps: [def-real-limit, def-sequence, lem-convergent-implies-bounded, lem-subsequence-inherits-limit, lem-index-map-grows, thm-recursion, thm-induction-principle, lem-of-abs-value, def-abs-value, def-real-order, cor-of-one-positive, lem-of-add-order, lem-nat-successor-neq-self, def-nat-order, def-nat-addition, thm-nat-linear-order, def-natural-numbers, def-field, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
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
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "Subsequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

**False claim:** every bounded sequence of reals converges
([[def-sequence]], [[def-real-limit]]).

The implication in the opposite direction is true and is
[[lem-convergent-implies-bounded]]: every convergent sequence is bounded. The
claim above asserts the converse, and it is refuted below by the alternating
sequence whose terms are $1$ and $-1$.

The sequence usually written $x_k = (-1)^k$ is introduced here by recursion
([[thm-recursion]]), as the unique $(s_k)$ with $s_0 = 1$ and
$s_{\sigma(k)} = -s_k$. That is the same sequence under a different presentation,
and it is chosen because the three inductions of the refutation read straight off
those two recursion equations, whereas the power notation would first have to be
unwound into them.

## Facts & Assumptions

**Given:** By the recursion theorem ([[thm-recursion]]) applied to the set $\mathbb{R}$, the element $1$ and the function $u \mapsto -u$, there is a unique sequence $(s_k)$ of reals with $s_0 = 1$ and $s_{\sigma(k)} = -s_k$ for every $k$. Applied to the set $\mathbb{N}$, the element $0$ and the function $i \mapsto \sigma(\sigma(i))$, it gives a unique $n : \mathbb{N} \to \mathbb{N}$ with $n_0 = 0$ and $n_{\sigma(j)} = \sigma(\sigma(n_j))$; applied to $\mathbb{N}$, the element $\sigma(0) = 1$ and the same function, it gives a unique $m : \mathbb{N} \to \mathbb{N}$ with $m_0 = \sigma(0)$ and $m_{\sigma(j)} = \sigma(\sigma(m_j))$ ([[def-natural-numbers]], [[def-sequence]]).

[L1] Recursion theorem ([[thm-recursion]]) and the induction principle ([[thm-induction-principle]]).

[L2] Absolute value and field arithmetic: $|-u| = |u|$ ([[lem-of-abs-value]]); $|1| = 1$, because $1 > 0$ ([[cor-of-one-positive]]) and $|v| = v$ whenever $v \ge 0$ by the definition of the absolute value ([[def-real-order]], [[def-abs-value]]); and $-(-u) = u$ ([[def-field]]).

[L3] Order in $\mathbb{R}$: $0 < 1$, sums of positives are positive, and adding a constant preserves the order, so $1 - (-1) = 1 + 1 > 0$ and hence $-1 < 1$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[def-complete-ordered-field]], [[def-ordered-field]]).

[L4] Order on $\mathbb{N}$: $i < \sigma(i)$ for every $i$, because $\sigma(i) = i + 1$ and $\sigma(i) \ne i$; and the order is transitive ([[def-nat-order]], [[def-nat-addition]], [[lem-nat-successor-neq-self]], [[thm-nat-linear-order]]).

[L5] Consecutive comparisons suffice for strict increase ([[lem-index-map-grows]]).

[L6] Convergence, and the fact that a constant sequence converges to its value ([[def-real-limit]], [[def-sequence]]).

[L7] Divergence test: a sequence with two subsequences converging to different limits does not converge ([[lem-subsequence-inherits-limit]]).

[L8] Boundedness of a sequence ([[def-sequence]]).

## Refutation

**Proof technique:** direct.

1.1 By induction, $|s_k| = 1$ for every $k$: the base case is $|s_0| = |1| = 1$, and if $|s_k| = 1$ then $|s_{\sigma(k)}| = |-s_k| = |s_k| = 1$. Hence $|s_k| \le 1$ for every $k$, so $(s_k)$ is bounded. [L1, L2, L8]

1.2 By induction, $s_{n_j} = 1$ for every $j$: the base case is $s_{n_0} = s_0 = 1$, and if $s_{n_j} = 1$ then $s_{n_{\sigma(j)}} = s_{\sigma(\sigma(n_j))} = -s_{\sigma(n_j)} = -(-s_{n_j}) = s_{n_j} = 1$. [L1, L2]

1.3 By induction, $s_{m_j} = -1$ for every $j$: the base case is $s_{m_0} = s_{\sigma(0)} = -s_0 = -1$, and if $s_{m_j} = -1$ then $s_{m_{\sigma(j)}} = s_{\sigma(\sigma(m_j))} = -(-s_{m_j}) = s_{m_j} = -1$. [L1, L2]

1.4 Both $n$ and $m$ are strictly increasing: for every $j$ we have $n_j < \sigma(n_j) < \sigma(\sigma(n_j)) = n_{\sigma(j)}$ by [L4], and likewise $m_j < m_{\sigma(j)}$, so [L5] applies to each. [L1, L4, L5]

1.5 The reals $1$ and $-1$ are distinct, since $1 - (-1) = 1 + 1 > 0$. [L3]

2.1 By step 1.4 the maps $n$ and $m$ define subsequences $(s_{n_j})_j$ and $(s_{m_j})_j$ of $(s_k)$; by steps 1.2 and 1.3 these are the constant sequences $1$ and $-1$, so they converge to $1$ and to $-1$ respectively, and by step 1.5 those two limits differ. [step 1.2, step 1.3, step 1.4, step 1.5, L6, L8]

3.1 By the divergence test, $(s_k)$ does not converge. [step 2.1, L7]

4.1 So $(s_k)$ is a bounded sequence of reals that does not converge, by steps 1.1 and 3.1; the claim that every bounded sequence converges is therefore false. [step 1.1, step 3.1] ∎

## Remarks

- The refutation is self-contained: the witness is constructed by recursion, its boundedness and its two subsequential limits are each proved by induction, and the failure of convergence comes from the divergence test of [[lem-subsequence-inherits-limit]] together with uniqueness of limits ([[lem-limit-unique]]).

- **What is true in this direction** is the Bolzano-Weierstrass theorem: every bounded sequence of reals has a convergent *subsequence*. That is a genuine theorem and it needs the least-upper-bound property. It is **not proved anywhere in this library as things stand**: it is the subject of the next page of this track, *Monotone Sequences, Bolzano-Weierstrass, and Cauchy Completeness*, which is planned and not yet written. It is named here only to say what the correct statement is; nothing above uses it, and no item of this library may be cited for it. The false claim above is what one gets by deleting the word "subsequence" from it.

- The error is tempting because boundedness feels like "no room to escape". It is not: boundedness forbids running away, but it does not forbid oscillating forever, and oscillation is exactly what $(s_k)$ does.

- The same witness refutes [[fs-subsequence-convergence-implies-convergence]], and it is the sequence referred to in the remarks of [[lem-limit-abs]].
