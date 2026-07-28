---
id: cex-compact-convergence-without-uniform-convergence
kind: counterexample
title: "Refuted: convergence uniformly on every compact subset of $\\mathbb{R}$ implies uniform convergence. The maps $x \\mapsto x/(n+1)$ separate the two"
status: draft
origin: session
deps: [def-topology-of-compact-convergence, def-topology-of-uniform-convergence,
       lem-uniform-convergence-in-the-uniform-metric, lem-uniform-metric-on-a-function-space,
       thm-comparison-of-the-three-function-space-topologies, def-metric-compactness,
       thm-heine-borel-rn, def-interval, lem-real-line-is-a-metric-space,
       def-metrizable-space, def-canonical-natural, cor-archimedean-reciprocal,
       def-lipschitz-holder-contraction, thm-metric-regularity-hierarchy,
       def-metric-bounded-diameter, def-metric-ball, def-metric-topology,
       lem-bounded-remetrisation, def-max-min, lem-finite-set-has-max,
       lem-of-naturals-positive, lem-of-inverse-positive, def-abs-value,
       def-complete-ordered-field, lem-sup-unique, def-metric-continuity,
       def-continuous-map-top]
justified_by: []
aliases: []
landmark: false
short: "compact convergence without uniform convergence"
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
    - title: "Compact convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_convergence"
    - title: "Uniform convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_convergence"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** if a sequence $(g_k)$ in $C(X,\mathbb{R})$ converges to $g$
uniformly on every compact subset of $X$, that is in the topology of compact
convergence ([[def-topology-of-compact-convergence]]), then it converges to $g$
uniformly ([[def-topology-of-uniform-convergence]]).

The witness is $X = \mathbb{R}$ with its usual metric and

$$g_k(x) := \frac{x}{\iota(k+1)} \qquad (k \in \mathbb{N},\ x \in \mathbb{R}),$$

$\iota$ being the canonical natural of $\mathbb{R}$ ([[def-canonical-natural]]),
so that $\iota(k+1) \ge 1 > 0$ and the quotient is defined. These converge to the
constant function $\mathbf{0}$ uniformly on every compact subset of $\mathbb{R}$
and satisfy $\bar\rho(g_k,\mathbf{0}) = 1$ for every $k$, so they do not converge
uniformly.

This is the strictness of the **right-hand** inclusion of
[[thm-comparison-of-the-three-function-space-topologies]]; the left-hand one is
separated on the companion example of this page. Note that the domain has to be
non-compact for such a witness to exist, since on a compact domain the two
topologies coincide.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with the usual metric $d(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]]), the maps $g_k(x) = x/\iota(k+1)$, the constant function $\mathbf{0}$, and the truncated metric $\bar d = \min\{d,1\}$ with the uniform metric $\bar\rho$ on $\mathbb{R}^{\mathbb{R}}$ ([[lem-uniform-metric-on-a-function-space]]).

[L1] $\iota$ is strictly increasing on $\mathbb{N}$ with $\iota(n) > 0$ for $n \ge 1$, and $0 < u \le v$ gives $0 < 1/v \le 1/u$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L2] For every real $\varepsilon > 0$ there is a natural $m \ge 1$ with $1/\iota(m) < \varepsilon$ ([[cor-archimedean-reciprocal]]).

[L3] A map $x \mapsto cx$ of $\mathbb{R}$ is Lipschitz with constant $|c|$, hence continuous, and $|cx| = |c||x|$ ([[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]], [[def-metric-continuity]], [[def-continuous-map-top]], [[def-abs-value]], [[def-metrizable-space]]).

[L4] A compact subset of $\mathbb{R}$ is closed and bounded, and a bounded subset lies in some ball $B(0,r)$, so $|x| < r$ for all its points ([[thm-heine-borel-rn]], claim 3, [[def-metric-compactness]], [[def-metric-bounded-diameter]], [[def-metric-ball]], [[def-metric-topology]], [[def-interval]]).

[L5] The sets $B_K(f,\varepsilon)$ centred at $f$ form a neighbourhood base at $f$ in the topology of compact convergence, and $B_K(f,\varepsilon) = \{\, h : |f(x)-h(x)| < \varepsilon$ for every $x \in K \,\}$ ([[def-topology-of-compact-convergence]], fact (U4)).

[L6] $\bar d \le d$; $\bar d(u,v) = |u-v|$ whenever $|u-v| \le 1$; $\bar\rho(f,h)$ is the least upper bound of $\{\, \bar d(f(x),h(x)) : x \in \mathbb{R} \,\}$; and convergence in $\bar\rho$ is uniform convergence ([[lem-bounded-remetrisation]], [[lem-uniform-metric-on-a-function-space]], [[lem-uniform-convergence-in-the-uniform-metric]], [[lem-finite-set-has-max]], [[def-max-min]], [[def-complete-ordered-field]], [[lem-sup-unique]]).

## Counterexample

**Proof technique:** direct.

1.1 Each $g_k$ is continuous, being Lipschitz with constant $1/\iota(k+1)$, so $g_k \in C(\mathbb{R},\mathbb{R})$; and $\mathbf{0}$ is continuous, being constant. [L1, L3]

1.2 Let $K \subseteq \mathbb{R}$ be compact and let $\varepsilon > 0$ be real; $K$ is bounded, so fix a real $r > 0$ with $|x| < r$ for every $x \in K$. [L4, choose]

1.3 On the other hand, for each $k \in \mathbb{N}$ the point $x_k := \iota(k+1)$ satisfies $|g_k(x_k) - \mathbf{0}(x_k)| = \iota(k+1)/\iota(k+1) = 1$, so $\bar d(g_k(x_k),\mathbf{0}(x_k)) = 1$ and therefore $\bar\rho(g_k,\mathbf{0}) \ge 1$; since $\bar\rho \le 1$ always, $\bar\rho(g_k,\mathbf{0}) = 1$. [L1, L6]

2.1 By [L2] fix a natural $m \ge 1$ with $1/\iota(m) < \varepsilon/r$. [step 1.2, L2, choose]

2.2 So no index $K_0$ makes $\bar\rho(g_k,\mathbf{0}) < 1/2$ for all $k \ge K_0$, and $(g_k)$ does not converge to $\mathbf{0}$ in the uniform metric, that is not uniformly. [step 1.3, L6]

3.1 For every $k \ge m$ and every $x \in K$: $|g_k(x) - \mathbf{0}(x)| = |x|/\iota(k+1) < r/\iota(k+1) \le r/\iota(m) < \varepsilon$, using $k+1 > m$ and the monotonicity of $\iota$ and of reciprocals. [step 1.2, step 2.1, L1, L3]

4.1 Hence $g_k \in B_K(\mathbf{0},\varepsilon)$ for every $k \ge m$; as $K$ and $\varepsilon$ were arbitrary and the sets $B_K(\mathbf{0},\varepsilon)$ are a neighbourhood base at $\mathbf{0}$, the sequence $(g_k)$ converges to $\mathbf{0}$ in the topology of compact convergence. [step 3.1, L5]

5.1 The sequence $(g_k)$ therefore satisfies the hypothesis of the claim and violates its conclusion, so the claim is false. [step 4.1, step 2.2] ∎

## Remarks

- **What goes wrong is arbitrarily far out.** On any fixed bounded region the maps $g_k$ do flatten to $0$, and a compact subset of $\mathbb{R}$ is bounded; the discrepancy $|g_k(x)| = |x|/(k+1)$ reaches $1$ only at $x = k+1$, which escapes every compact set as $k$ grows. Uniform convergence asks for control at every point at once, including those.

- **The same family shows the two topologies are different as topologies**, not merely that one sequence behaves differently in them: a topology is determined by its convergent sequences only in a first countable space, but here the difference is already visible in a basic neighbourhood, since $B_{\bar\rho}(\mathbf{0},1/2)$ contains no $g_k$ while every compact-convergence neighbourhood of $\mathbf{0}$ contains a tail of them.

- **The index shift is the usual one.** $\mathbb{N}$ contains $0$, so the family is written with $\iota(k+1)$; at $k = 0$ this is $1$ and $g_0$ is the identity, which is exactly the intended first term. Writing $x/\iota(k)$ would divide by $0$ at $k = 0$.
