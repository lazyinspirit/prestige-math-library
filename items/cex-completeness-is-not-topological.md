---
id: cex-completeness-is-not-topological
kind: counterexample
title: "On the positive integers the metrics $|m-n|$ and $|1/m - 1/n|$ both induce the discrete topology, and only the first is complete"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [fs-completeness-is-a-topological-property, def-complete-metric-space,
       def-equivalent-metrics, def-metric-topology, cor-archimedean-reciprocal,
       thm-of-archimedean, lem-of-inverse-positive, lem-real-line-is-a-metric-space,
       def-isometry-and-metric-embedding, def-metric-ball, def-cauchy-in-metric,
       def-metric-convergence, def-metric-space, lem-of-abs-value,
       lem-of-naturals-positive, def-natural-numbers, lem-of-q-embeds,
       def-metric-uniform-continuity, thm-uniform-continuity-preserves-cauchy,
       lem-rat-embeds-dense, thm-complete-subspace-iff-closed]
justified_by: []
aliases: []
landmark: true
short: "same topology, one complete metric"
proof_strategy: direct
cx_machine_verified: false
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
    - title: "Complete metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_metric_space"
    - title: "Equivalence of metrics (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_of_metrics"
    - title: "Discrete space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Discrete_space"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** completeness is determined by the topology, so topologically
equivalent metrics are either both complete or both incomplete
([[fs-completeness-is-a-topological-property]],
[[def-equivalent-metrics]]).

Let $P := \{\, n \in \mathbb{N} : n \ge 1 \,\}$ be the positive integers,
regarded inside $\mathbb{R}$ through the canonical embedding, and put

$$d(m,n) := |m - n|, \qquad d'(m,n) := \Big|\tfrac{1}{m} - \tfrac{1}{n}\Big| \qquad (m,n \in P).$$

Then both are metrics on $P$, both induce the **discrete** topology, so
$\mathcal{T}_d = \mathcal{T}_{d'}$; $(P,d)$ is complete and $(P,d')$ is not; and
consequently $d$ and $d'$ are not uniformly equivalent either
([[def-equivalent-metrics]]).

## Facts & Assumptions

**Given:** The set $P$ of positive integers inside $\mathbb{R}$; the functions $d$ and $d'$ above; the sequence $a_k := k+1$ in $P$; a real $\varepsilon > 0$.

[L1] The absolute value makes $\mathbb{R}$ a metric space, a restriction of a metric to a subset is a metric, and the pullback of a metric along an injection is a metric ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]], [[def-metric-space]], [[lem-of-abs-value]]).

[L2] Reciprocation is strictly decreasing on the positive reals, hence injective there ([[lem-of-inverse-positive]]).

[L3] For distinct naturals $m \ne n$ one has $|m-n| \ge 1$ ([[lem-of-naturals-positive]], [[def-natural-numbers]], [[lem-of-q-embeds]]).

[L4] For every real $\eta > 0$ there is a natural $N \ge 1$ with $1/N < \eta$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L5] Open sets, balls, Cauchyness and convergence, tested with real $\varepsilon > 0$ ([[def-metric-topology]], [[def-metric-ball]], [[def-cauchy-in-metric]], [[def-metric-convergence]], [[lem-rat-embeds-dense]]).

[L6] Uniform equivalence of two metrics says exactly that both identity maps are uniformly continuous, and a uniformly continuous map sends Cauchy sequences to Cauchy sequences ([[def-equivalent-metrics]], [[def-metric-uniform-continuity]], [[thm-uniform-continuity-preserves-cauchy]]).

## Counterexample

**Proof technique:** direct.

1.1 $d$ is a metric on $P$, being the restriction of the usual metric of $\mathbb{R}$; and $d'$ is a metric on $P$, since it is the pullback of that metric along the injective map $m \mapsto 1/m$. [L1, L2]

2.1 The $d$-topology is discrete: $B_d(m,1/2) = \{m\}$ for every $m \in P$, because $d(m,n) = |m-n| \ge 1 > 1/2$ for $n \ne m$; so every subset of $P$ is a union of open balls, hence open. [step 1.1, L3, L5]

2.2 The $d'$-topology is discrete as well. Fix $m \in P$ and put $r := 1/m - 1/(m+1) = 1/(m(m+1)) > 0$. If $n > m$ then $1/n \le 1/(m+1)$, so $d'(m,n) = 1/m - 1/n \ge r$; if $n < m$ then $m \ge 2$ and $1/n \ge 1/(m-1)$, so $d'(m,n) = 1/n - 1/m \ge 1/(m-1) - 1/m = 1/(m(m-1)) > r$. Hence $B_{d'}(m,r) = \{m\}$ and every subset of $P$ is $d'$-open. [step 1.1, L2, L5]

2.3 $(P,d)$ is complete: a $d$-Cauchy sequence tested at $\varepsilon = 1$ has an index $K$ with $|x_k - x_l| < 1$ for all $k,l \ge K$, which by [L3] forces $x_k = x_l$; so the sequence is constant from $K$ on and converges in $P$. [step 1.1, L3, L5]

2.4 The sequence $a_k = k+1$ is $d'$-Cauchy: given a real $\varepsilon > 0$, take $N \ge 1$ with $1/N < \varepsilon/2$; for $k,l \ge N$ we have $k+1 > N$ and $l+1 > N$, so $d'(a_k,a_l) \le 1/(k+1) + 1/(l+1) < 2/N < \varepsilon$. [step 1.1, L2, L4, L5]

3.1 Therefore $\mathcal{T}_d = \mathcal{T}_{d'}$: both are the collection of all subsets of $P$, so $d$ and $d'$ are topologically equivalent. [step 2.1, step 2.2, L5]

3.2 It has no $d'$-limit in $P$: if $p \in P$ then $1/p > 0$, and taking $N \ge 1$ with $1/N < 1/(2p)$ gives, for every $k \ge N$, $1/(k+1) < 1/N < 1/(2p)$ and hence $d'(a_k,p) = |1/(k+1) - 1/p| \ge 1/p - 1/(k+1) > 1/(2p) > 0$; so from no index on is $d'(a_k,p)$ below $1/(2p)$, and $a_k \not\to p$. Hence $(P,d')$ is not complete. [step 2.4, L2, L4, L5]

3.3 The same sequence is not $d$-Cauchy, since $d(a_K, a_{K+1}) = 1$ for every $K$; so if $d$ and $d'$ were uniformly equivalent, the identity map $(P,d') \to (P,d)$ would be uniformly continuous and would carry the $d'$-Cauchy sequence $(a_k)$ to a $d$-Cauchy sequence, which it is not. Hence $d$ and $d'$ are not uniformly equivalent. [step 2.4, L3, L6]

4.1 So $d$ and $d'$ are topologically equivalent metrics on one set of which exactly one is complete, which refutes the claim above; and step 3.3 locates the reason, namely that topological equivalence is strictly weaker than uniform equivalence. [step 3.1, step 2.3, step 3.2, step 3.3] ∎

## Remarks

- **The two spaces are the same set with the same open sets and different geometry.** In $(P,d)$ the points are uniformly spaced, at distance at least $1$; in $(P,d')$ they crowd together, the distance from $n$ to $n+1$ being $1/(n(n+1))$, which tends to $0$. A discrete topology cannot see that difference, and completeness can.
- **What $(P,d')$ is missing.** Under $m \mapsto 1/m$ it is isometric to the set $\{1, 1/2, 1/3, \dots\}$ inside $\mathbb{R}$, which is not closed there: the point $0$ is missing ([[thm-complete-subspace-iff-closed]]). The sequence $(a_k)$ of step 4.1 is exactly the sequence heading for that missing point.
- **Reciprocal metrics on $\mathbb{N}$ would not work.** $0 \in \mathbb{N}$ in this library, and $1/0$ does not exist, which is why the underlying set here is the **positive** integers and the sequence is $a_k = k+1$ rather than $a_k = k$.
- **The same pair of phenomena, one level down.** That these two metrics do not share their Cauchy sequences is the statement refuted by [[fs-equivalent-metrics-share-cauchy-sequences]], witnessed on the half-line by [[cex-same-topology-different-cauchy-sequences]]; completeness fails here for precisely that reason.
