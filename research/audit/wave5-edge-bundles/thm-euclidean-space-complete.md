# Citation-precision audit — everything that cites `thm-euclidean-space-complete`

## The target, as it actually stands on disk

`items/thm-euclidean-space-complete.md` — theorem — $\\mathbb{R}$ and $\\mathbb{R}^n$ for $n \\ge 1$ with the Euclidean metric are complete, componentwise from the Cauchy criterion in $\\mathbb{R}$

#### Statement

1. $(\mathbb{R}, d_{\mathbb{R}})$ with the usual metric $d_{\mathbb{R}}(x,y) = |x-y|$
   ([[lem-real-line-is-a-metric-space]]) is a complete metric space
   ([[def-complete-metric-space]]).
2. Let $n \in \mathbb{N}$ with $n \ge 1$ and let $d_2$ be the Euclidean metric on
   $\mathbb{R}^n$ ([[lem-metrics-on-rn]]). Then $(\mathbb{R}^n, d_2)$ is complete.

**The hypothesis $n \ge 1$ is inherited and is not decoration.**
[[lem-metrics-on-rn]] defines $\mathbb{R}^n$ and its three metrics only for
$n \ge 1$, because at $n = 0$ the metric $d_\infty$ would be a maximum over the
empty index set. Every statement about $\mathbb{R}^n$ in this library carries the
hypothesis, and this one does too.

## The 1 citing use(s), quoted verbatim from the citing items

### `ex-continuous-functions-on-the-unit-interval-with-the-sup-metric` (published-backward, page function-space-topologies-examples)

Title: $C([0,1], \\mathbb{R})$ is complete, and on it the uniform metric and the supremum metric induce the same topology

- [L6] $(\mathbb{R}, d)$ is complete ([[thm-euclidean-space-complete]], claim 1), and for a nonempty topological domain and a complete metric target $C(X,Y)$ is complete in the uniform metric ([[thm-function-space-is-complete-for-a-complete-target]], claim 2, [[thm-uniform-limit-theorem]], [[def-topology-of-uniform-convergence]], [[def-continuous-map-top]], [[def-metrizable-space]], [[def-metric-space]]).
