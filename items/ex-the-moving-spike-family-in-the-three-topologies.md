---
id: ex-the-moving-spike-family-in-the-three-topologies
kind: example
title: "The moving spikes on $[0,1]$ converge pointwise to $0$, do not converge uniformly, and do not converge in the topology of compact convergence"
status: draft
origin: session
deps: [def-topology-of-pointwise-convergence, lem-convergence-in-the-pointwise-topology,
       def-topology-of-uniform-convergence, lem-uniform-convergence-in-the-uniform-metric,
       def-topology-of-compact-convergence, thm-comparison-of-the-three-function-space-topologies,
       fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets,
       lem-uniform-metric-on-a-function-space, lem-continuity-is-local-and-pastes,
       def-interval, lem-real-line-is-a-metric-space, def-metrizable-space,
       def-canonical-natural, cor-archimedean-reciprocal, def-max-min,
       lem-finite-set-has-max, lem-bounded-remetrisation, def-metric-compactness,
       thm-heine-borel-rn, def-metric-ball, def-metric-topology,
       def-isometry-and-metric-embedding, def-complete-ordered-field, lem-sup-unique]
justified_by: []
aliases: []
landmark: false
short: "moving spikes in the three topologies"
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
    - title: "Uniform convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_convergence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 7"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Example

Let $I := [0,1]$ with the metric inherited from $\mathbb{R}$, let
$a_k := 1/\iota(k+2)$ for $k \in \mathbb{N}$ ([[def-canonical-natural]]), and let
$f_k : I \to \mathbb{R}$ be the **moving spike**

$$f_k(t) = \frac{t}{a_k} \ \ (0 \le t \le a_k), \qquad f_k(t) = 2 - \frac{t}{a_k} \ \ (a_k \le t \le 2a_k), \qquad f_k(t) = 0 \ \ (2a_k \le t \le 1),$$

which is exactly the family built in
[[fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets]]: each
$f_k$ is continuous, and $(f_k)$ converges pointwise to the constant function
$\mathbf{0}$, which is continuous. Write $\bar\rho$ for the uniform metric on
$\mathbb{R}^{I}$ ([[lem-uniform-metric-on-a-function-space]]).

This example traces the one family through all three topologies of the A page:

1. $f_k \to \mathbf{0}$ in the topology of pointwise convergence
   ([[def-topology-of-pointwise-convergence]]);
2. $\bar\rho(f_k, \mathbf{0}) = 1$ for **every** $k$, so $(f_k)$ does not converge
   to $\mathbf{0}$ in the topology of uniform convergence
   ([[def-topology-of-uniform-convergence]]);
3. $(f_k)$ does not converge to $\mathbf{0}$ in the topology of compact
   convergence either ([[def-topology-of-compact-convergence]]).

So the two inclusions of
[[thm-comparison-of-the-three-function-space-topologies]] are **strict** on
$C(I,\mathbb{R})$ at the leftmost step: pointwise convergence is strictly weaker
than convergence on compact sets. The two rightmost topologies coincide here,
because $I$ is itself compact; separating those two needs a domain that is not
compact, and the next counterexample on this page does it on $\mathbb{R}$.

## Facts & Assumptions

**Given:** $I = [0,1]$ with the metric $d(s,t) = |s-t|$, the reals $a_k = 1/\iota(k+2)$, the spikes $f_k$ displayed above, the constant function $\mathbf{0}$, and the truncated metric $\bar d = \min\{d,1\}$ on $\mathbb{R}$.

[L1] Each $f_k$ is a well-defined continuous function $I \to \mathbb{R}$, $(f_k)$ converges pointwise to $\mathbf{0}$, $f_k(a_k) = 1$, and $0 < a_k \le 1/2$ ([[fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets]], steps of its refutation, [[lem-continuity-is-local-and-pastes]], [[def-canonical-natural]], [[cor-archimedean-reciprocal]], [[def-interval]], [[lem-real-line-is-a-metric-space]], [[def-metrizable-space]], [[def-isometry-and-metric-embedding]]).

[L2] $0 \le f_k(t) \le 1$ for every $t \in I$: on $[0,a_k]$ the value $t/a_k$ lies between $0$ and $1$, on $[a_k,2a_k]$ the value $2 - t/a_k$ does, and on $[2a_k,1]$ it is $0$ ([[def-max-min]], [[lem-finite-set-has-max]]).

[L3] $\bar d(u,v) = \min\{|u-v|, 1\}$ equals $|u-v|$ whenever $|u-v| \le 1$, and $\bar\rho(g,h)$ is the least upper bound of $\{\, \bar d(g(t),h(t)) : t \in I \,\}$ ([[lem-bounded-remetrisation]], [[lem-uniform-metric-on-a-function-space]], [[lem-finite-set-has-max]], [[def-max-min]], [[def-complete-ordered-field]], [[lem-sup-unique]]).

[L4] Convergence in the uniform metric is exactly uniform convergence, and convergence in a metric space means the distances tend to $0$ ([[lem-uniform-convergence-in-the-uniform-metric]], [[def-topology-of-uniform-convergence]]).

[L5] A sequence converges in the topology of pointwise convergence exactly when it converges at every point ([[lem-convergence-in-the-pointwise-topology]]).

[L6] The topology of uniform convergence is finer than the topology of compact convergence, which is finer than the topology of pointwise convergence, so convergence in a finer topology implies convergence in a coarser one ([[thm-comparison-of-the-three-function-space-topologies]]).

[L7] $I$ is a compact subset of $\mathbb{R}$ and the sets $B_K(g,\varepsilon)$ centred at $g$ are a neighbourhood base at $g$ in the topology of compact convergence ([[thm-heine-borel-rn]], [[def-metric-compactness]], [[def-topology-of-compact-convergence]], fact (U4), [[def-metric-ball]], [[def-metric-topology]]).

## Verification

**Proof technique:** direct.

1.1 $(f_k)$ converges to $\mathbf{0}$ at every point of $I$, hence in the topology of pointwise convergence; this is claim 1. [L1, L5]

1.2 For every $k$ and every $t \in I$: $|f_k(t) - \mathbf{0}(t)| = f_k(t) \le 1$, so $\bar d(f_k(t),\mathbf{0}(t)) = f_k(t)$. [L2, L3]

2.1 Hence $1$ is an upper bound of $\{\, \bar d(f_k(t),\mathbf{0}(t)) : t \in I \,\}$ and the value $1$ is attained at $t = a_k \in I$, so $\bar\rho(f_k,\mathbf{0}) = 1$ for every $k \in \mathbb{N}$. [step 1.2, L1, L2, L3]

3.1 Therefore no index $K$ makes $\bar\rho(f_k,\mathbf{0}) < 1/2$ for $k \ge K$, so $(f_k)$ does not converge to $\mathbf{0}$ in the uniform metric and hence not in the topology of uniform convergence; this is claim 2. [step 2.1, L4]

3.2 $I$ is compact and $|f_k(a_k) - \mathbf{0}(a_k)| = 1$, so $f_k \notin B_I(\mathbf{0}, 1/2)$ for every $k$, while $B_I(\mathbf{0},1/2)$ is a member of a neighbourhood base at $\mathbf{0}$ in the topology of compact convergence; so no tail of $(f_k)$ lies in that neighbourhood and $(f_k)$ does not converge to $\mathbf{0}$ there, which is claim 3. [step 2.1, L1, L7]

4.1 Claims 1 and 3 together show that convergence in the topology of pointwise convergence does not imply convergence in the topology of compact convergence, so the leftmost inclusion of the comparison theorem is strict on $C(I,\mathbb{R})$. [step 1.1, step 3.2, L6] ∎

## Remarks

- **Nothing is lost and nothing is gained by the truncation.** The uniform metric truncates distances at $1$, and here the spikes never exceed $1$, so $\bar\rho(f_k,\mathbf{0})$ is the honest supremum of $|f_k|$. A family of spikes of height $5$ would have $\bar\rho = 1$ as well, which is exactly the sense in which the uniform metric records "not close" without recording how far.

- **The failure is at a moving point.** For each fixed $t$ the values $f_k(t)$ are eventually $0$; what prevents a single index from serving every $t$ is that the place where $f_k$ equals $1$ depends on $k$ and never disappears. That is the quantifier order of [[def-topology-of-uniform-convergence]], seen in one family.

- **On this domain the two right-hand topologies cannot be separated.** Since $I = [0,1]$ is compact, $K = I$ is an admissible compact set and convergence on every compact subset of $I$ is convergence on $I$ itself, that is uniform convergence. Separating them needs a domain that is not compact, and the next counterexample on this page uses $\mathbb{R}$.
