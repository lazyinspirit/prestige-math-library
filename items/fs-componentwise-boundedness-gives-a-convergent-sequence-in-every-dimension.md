---
id: fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension
kind: false-statement
title: "FALSE: a sequence in $\\mathbb{R}^{n}$ whose coordinate sequences are each bounded converges"
status: draft
origin: session
deps: [cor-bolzano-weierstrass-in-rn, thm-componentwise-convergence-and-completeness, lem-limit-unique, lem-subsequence-inherits-limit, thm-convergence-iff-limsup-equals-liminf, lem-alternating-sequence, def-metric-convergence, def-sequence, def-real-limit, lem-metrics-on-rn, def-p-norms-on-rn, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, lem-p-norms-are-norms-and-induce-the-published-metrics, def-integer-power, lem-convergent-implies-bounded, lem-standard-basis-of-f-n, def-isometry-and-metric-embedding, def-metric-bounded-diameter, lem-of-naturals-positive, def-canonical-natural, lem-index-map-grows, lem-of-abs-value]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Bolzano-Weierstrass theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bolzano%E2%80%93Weierstrass_theorem"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
pipeline_run: null
---

## Statement

**False claim:** let $n \ge 1$ and let $\bigl(x^{(k)}\bigr)$ be a sequence in
$\mathbb{R}^{n}$ such that every coordinate sequence
$k \mapsto x^{(k)}_j$ $(j<n)$ is bounded ([[def-sequence]]). Then
$\bigl(x^{(k)}\bigr)$ converges in $(\mathbb{R}^{n}, d_2)$
([[def-metric-convergence]], [[lem-metrics-on-rn]]).

**The claim conflates two theorems.** What is true about boundedness is
[[cor-bolzano-weierstrass-in-rn]]: a bounded sequence has a convergent
**subsequence**. What is true componentwise is
[[thm-componentwise-convergence-and-completeness]] clause 1, which is about
**convergence** of the coordinate sequences and says nothing about boundedness.
The false claim takes the hypothesis of the first and the conclusion of the
second.

**The witness is the smallest possible.** Take $n = 1$ and let
$x^{(k)} \in \mathbb{R}^{1}$ be the function $1 \to \mathbb{R}$ with value
$\varepsilon_k$ at $0$, where $(\varepsilon_k)$ is the alternating sequence
([[lem-alternating-sequence]]).

## Facts & Assumptions

**Given:** The alternating sequence $(\varepsilon_k)$, with $\varepsilon_0 = 1$, $\varepsilon_{k+1} = -\varepsilon_k$ and $|\varepsilon_k| = 1$; its even and odd index maps $e$ and $o$, strictly increasing with $\varepsilon_{e_l} = 1$ and $\varepsilon_{o_l} = -1$ for every $l$ ([[lem-alternating-sequence]]); and the sequence $x^{(k)} \in \mathbb{R}^{1}$ with $x^{(k)}_0 = \varepsilon_k$.

[A1] The refuted claim, at $n = 1$ and this sequence: $\bigl(x^{(k)}\bigr)$ converges in $(\mathbb{R}^{1},d_2)$.

[L1] The alternating sequence and its index maps, and $|\varepsilon_k| = 1$ ([[lem-alternating-sequence]], [[lem-of-abs-value]], [[lem-index-map-grows]]).

[L2] Convergence in $\mathbb{R}^{n}$ for $n \ge 1$ is componentwise ([[thm-componentwise-convergence-and-completeness]] clause 1, [[lem-standard-basis-of-f-n]], [[def-p-norms-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]], [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]).

[L3] A subsequence of a convergent real sequence converges to the same limit, and a real sequence has at most one limit ([[lem-subsequence-inherits-limit]], [[lem-limit-unique]], [[def-real-limit]]).

[L4] A constant real sequence converges to its value ([[def-real-limit]]).

[L5] $1 \ne -1$, since $1-(-1) = \iota(2) > 0$ ([[lem-of-naturals-positive]], [[def-canonical-natural]]).

[L6] A bounded sequence in $\mathbb{R}^{n}$ has a convergent subsequence ([[cor-bolzano-weierstrass-in-rn]], [[def-metric-bounded-diameter]], [[def-isometry-and-metric-embedding]]); and a convergent real sequence is bounded ([[lem-convergent-implies-bounded]]).

[L7] A real sequence converges to $L$ exactly when its limit inferior and limit superior are both $L$ ([[thm-convergence-iff-limsup-equals-liminf]], [[def-integer-power]]).

## Refutation

**Proof technique:** direct.

1.1 The only coordinate sequence of $\bigl(x^{(k)}\bigr)$ is $k \mapsto \varepsilon_k$, and it is bounded: $|\varepsilon_k| = 1$ for every $k$, so $M = 1$ works. So the hypothesis of the refuted claim is met. [L1]

1.2 The subsequence $l \mapsto \varepsilon_{e_l}$ is constantly $1$ and converges to $1$; the subsequence $l \mapsto \varepsilon_{o_l}$ is constantly $-1$ and converges to $-1$; both index maps are strictly increasing. [L1, L4]

2.1 The real sequence $(\varepsilon_k)$ does not converge: if it converged to $L$, both subsequences of step 1.2 would converge to $L$, so $L = 1$ and $L = -1$ by uniqueness of limits, contradicting $1 \ne -1$. [step 1.2, L3, L5]

3.1 By the componentwise criterion, $\bigl(x^{(k)}\bigr)$ converges in $(\mathbb{R}^{1},d_2)$ if and only if $(\varepsilon_k)$ converges in $\mathbb{R}$; by step 2.1 it does not. So [A1] fails while the hypothesis holds, and the claim is false. [step 1.1, step 2.1, A1, L2]

4.1 The true statement in this neighbourhood is that the sequence has a convergent **subsequence**: its range is bounded, so [L6] applies, and step 1.2 exhibits two convergent subsequences with different limits. [step 1.1, step 1.2, L6] ∎

## Remarks

- **The same witness separates the two notions on the real line.** Boundedness of a real sequence gives a convergent subsequence and nothing more, and the alternating sequence has limit inferior $-1$ and limit superior $1$, so by [[thm-convergence-iff-limsup-equals-liminf]] it cannot converge. That is a second route to step 2.1; the one taken above uses only uniqueness of limits.

- **Componentwise boundedness and boundedness agree, so nothing is gained by weakening the hypothesis.** For $n \ge 1$ the comparison chain $\lVert y\rVert_\infty \le \lVert y\rVert_2 \le \iota(n)\lVert y\rVert_\infty$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 3) shows that a sequence in $\mathbb{R}^{n}$ has bounded range if and only if every coordinate sequence is bounded. So the refuted claim is exactly the claim that a bounded sequence converges, restated coordinatewise.

- **The converse direction is fine.** A convergent sequence in $\mathbb{R}^{n}$ does have bounded coordinate sequences, each coordinate sequence being convergent by [[thm-componentwise-convergence-and-completeness]] clause 1 and a convergent real sequence being bounded ([[lem-convergent-implies-bounded]]). Only the direction asserted above fails.
