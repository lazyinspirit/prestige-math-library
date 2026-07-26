---
id: fs-completeness-is-a-topological-property
kind: false-statement
title: "FALSE: completeness of a metric space is determined by its topology"
status: draft
origin: session
deps: [def-complete-metric-space, def-equivalent-metrics, def-metric-topology,
       lem-real-line-is-a-metric-space, def-isometry-and-metric-embedding,
       lem-of-inverse-positive, cor-archimedean-reciprocal, def-metric-ball,
       def-cauchy-in-metric, def-metric-convergence, def-metric-space,
       lem-of-abs-value, thm-of-archimedean, lem-of-naturals-positive,
       def-natural-numbers, lem-rat-embeds-dense, lem-of-q-embeds,
       def-metric-uniform-continuity, thm-uniform-continuity-preserves-cauchy]
justified_by: []
forward_refs: [cex-completeness-is-not-topological]
aliases: []
landmark: true
short: "FALSE: completeness is topological"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Complete metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_metric_space"
    - title: "Equivalence of metrics (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_of_metrics"
    - title: "Discrete space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Discrete_space"
pipeline_run: null
---

## Statement

**The following statement is FALSE.**

> Let $d$ and $d'$ be metrics on the same set $X$ that are topologically
> equivalent, that is $\mathcal{T}_d = \mathcal{T}_{d'}$
> ([[def-equivalent-metrics]], [[def-metric-topology]]). Then $(X,d)$ is complete
> if and only if $(X,d')$ is complete ([[def-complete-metric-space]]).

Equivalently, and this is the form in which the error is usually made:
completeness is a topological property of a metrisable space, so that it makes
sense to call a topological space "complete".

## Facts & Assumptions

**Given:** The set $P := \{\, n \in \mathbb{N} : n \ge 1 \,\}$ of positive naturals, regarded inside $\mathbb{R}$ through the canonical embedding; the functions $d(m,n) := |m - n|$ and $d'(m,n) := |1/m - 1/n|$ on $P \times P$; a real $\varepsilon > 0$.

[A1] The false claim: topologically equivalent metrics on one set are either both complete or both incomplete.

[L1] The absolute value makes $\mathbb{R}$ a metric space, so $|x-y|$ satisfies (M1), (M2) and (M3), and its balls are the intervals $(x-r,x+r)$; a restriction of a metric to a subset is a metric ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]], [[def-metric-space]], [[lem-of-abs-value]]).

[L2] Reciprocation is strictly decreasing on the positive reals, so $0 < a < b$ gives $0 < 1/b < 1/a$; in particular $m \mapsto 1/m$ is injective on $P$ ([[lem-of-inverse-positive]]).

[L3] Positive naturals sit in $\mathbb{R}$ in their own order, and for naturals $m \ne n$ one has $|m - n| \ge 1$, since one of them is at least the successor of the other ([[lem-of-naturals-positive]], [[def-natural-numbers]], [[lem-of-q-embeds]]).

[L4] For every real $\eta > 0$ there is a natural $N \ge 1$ with $1/N < \eta$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L5] Open sets, balls, Cauchyness and convergence in a metric space, tested with real $\varepsilon > 0$ ([[def-metric-topology]], [[def-metric-ball]], [[def-cauchy-in-metric]], [[def-metric-convergence]], [[lem-rat-embeds-dense]]).

## Refutation

**Proof technique:** direct.

1.1 $d$ is a metric on $P$, being the restriction to $P \times P$ of the usual metric of $\mathbb{R}$. [L1]

1.2 $d'$ is a metric on $P$: symmetry and the triangle inequality are inherited from the absolute value applied to the reals $1/m$, and $d'(m,n) = 0$ forces $1/m = 1/n$ and hence $m = n$, because $m \mapsto 1/m$ is injective on $P$. [L1, L2]

2.1 Every subset of $P$ is open for $d$: for $m \in P$ the ball $B_d(m,1/2)$ is $\{m\}$, since $d(m,n) = |m-n| \ge 1 > 1/2$ for $n \ne m$; so every subset is a union of open balls. [step 1.1, L3, L5]

2.2 Every subset of $P$ is open for $d'$: fix $m \in P$ and put $r := 1/m - 1/(m+1)$, a positive real. If $n > m$ then $1/n \le 1/(m+1)$, so $d'(m,n) = 1/m - 1/n \ge r$; and if $n < m$ then $m \ge 2$ and $1/n \ge 1/(m-1)$, so $d'(m,n) = 1/n - 1/m \ge 1/(m-1) - 1/m > 1/m - 1/(m+1) = r$. Hence $B_{d'}(m,r) = \{m\}$ and every subset is a union of open balls. [step 1.2, L2, L4, L5]

2.3 $(P,d)$ is complete: let $(x_k)$ be $d$-Cauchy and apply the definition with $\varepsilon = 1$ to get $K$ with $|x_m - x_n| < 1$ for all $m,n \ge K$; by [L3] this forces $x_m = x_n$ for $m,n \ge K$, so the sequence is constant from $K$ on and converges to $x_K \in P$. [step 1.1, L3, L5]

2.4 $(P,d')$ is not complete. Put $a_k := k+1$, a sequence in $P$. Given a real $\varepsilon > 0$, [L4] gives $N \ge 1$ with $1/N < \varepsilon/2$; for $k,l \ge N$ we have $k+1 > N$ and $l+1 > N$, hence $1/(k+1) < 1/N$ and $1/(l+1) < 1/N$, so $d'(a_k,a_l) = |1/(k+1) - 1/(l+1)| \le 1/(k+1) + 1/(l+1) < 2/N < \varepsilon$. Hence $(a_k)$ is $d'$-Cauchy. [step 1.2, L2, L4, L5]

3.1 Therefore $\mathcal{T}_d = \mathcal{T}_{d'}$: both are the collection of all subsets of $P$, so $d$ and $d'$ are topologically equivalent. [step 2.1, step 2.2, L5]

3.2 Suppose $a_k \to p$ in $(P,d')$ for some $p \in P$. Since $1/p > 0$, [L4] gives $N \ge 1$ with $1/N < 1/(2p)$, and then for every $k \ge N$ we have $1/(k+1) \le 1/N < 1/(2p)$, so $d'(a_k,p) = |1/(k+1) - 1/p| \ge 1/p - 1/(k+1) > 1/p - 1/(2p) = 1/(2p) > 0$. So $d'(a_k,p)$ never drops below $1/(2p)$ from any index on, contradicting convergence to $p$; as $p \in P$ was arbitrary, $(a_k)$ has no limit in $(P,d')$. [step 2.4, L2, L4, L5]

4.1 So $d$ and $d'$ are topologically equivalent metrics on $P$ with $(P,d)$ complete and $(P,d')$ not, which refutes [A1]. The displayed statement is false. [step 3.1, step 2.3, step 2.4, step 3.2, A1] ∎

## Remarks

- **What is true instead.** Completeness is preserved by *uniform* equivalence, not by topological equivalence, because uniform equivalence says exactly that both identity maps are uniformly continuous ([[def-metric-uniform-continuity]], [[def-equivalent-metrics]]) and uniformly continuous maps preserve Cauchy sequences ([[thm-uniform-continuity-preserves-cauchy]]). The two metrics above are therefore not uniformly equivalent, even though they are topologically equivalent; that is another way to read the counterexample.
- **Where exactly the failure sits.** Convergence of a sequence is topological ([[def-metric-convergence]]), but Cauchyness is not: it compares two terms of the sequence with each other rather than with a point of the space, and the comparison is metric. The two metrics above have the same convergent sequences and different Cauchy sequences ([[fs-equivalent-metrics-share-cauchy-sequences]]).
- **The topological invariant that does exist is a weaker one.** A topological space is *completely metrisable* when at least one metric inducing its topology is complete, and the class of completely metrisable spaces is genuinely a topological class. Nothing about it is proved here; the orientation is [[rem-complete-metrizability-is-the-topological-shadow]].
- **The fully worked witness**, with both topologies computed and both completeness verdicts verified, is [[cex-completeness-is-not-topological]] on the companion page.
