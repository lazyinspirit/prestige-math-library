---
id: "lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric"
kind: "lemma"
title: "Local comparison of a riemannian metric with the euclidean metric"
deps: ["prop-coordinate-criterion-for-a-riemannian-metric", "def-pointwise-norm-and-angle-from-a-riemannian-metric", "thm-finite-products-of-compact-spaces", "cor-heine-borel-in-the-product-topology", "thm-extreme-value-metric", "thm-compactness-agrees-with-metric-compactness"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For a compact set $K$ contained in one coordinate chart of an $n$-dimensional Riemannian manifold, there are $0<c\le C<\infty$ such that $c|v|^2\le g_x(v,v)\le C|v|^2$ for $x\in K$. The dimension-zero assertion is vacuous.

## Facts & Assumptions

**Given:** A compact set $K$ in a single chart.

[F1] [[prop-coordinate-criterion-for-a-riemannian-metric]]: A tensor $g=\sum_{i,j}g_{ij}\,dx^i\otimes dx^j$ is Riemannian exactly when its coordinate matrix $G=(g_{ij})$ has smooth entries and is symmetric positive definite. Under $J=\partial x/\partial y$ it transforms by $G_y=J^TG_xJ$.

[F3] [[thm-finite-products-of-compact-spaces]]: For every $n \in \mathbb{N}$ (def-natural-numbers) and every family $(X_k)_{k < n}$ of compact topological spaces (def-compact-space, def-topological-space), the product $$\prod_{k < n} X_k$$ with the product topology (def-product-topology) is compact. In particular a binary product $X \times Y$ of compact spaces is compact, and the empty product, a one-point space, is compact. **No choice principle is used beyond lem-finite-choice**, which is a theorem of ZF. That is what separates the finite case from the arbitrary one, where the Axiom of Choice is genuinely spent.

[F4] [[cor-heine-borel-in-the-product-topology]]: Let $n \in \mathbb{N}$ with $n \ge 1$, let $\mathbb{R}^n$ be the set of functions $n \to \mathbb{R}$ (lem-metrics-on-rn) carrying the product topology of $n$ copies of the usual topology of $\mathbb{R}$ (def-product-topology), and let $d_2$ be the Euclidean metric. Then: 1. The product topology on $\mathbb{R}^n$ **is** the metric topology of $d_2$ (def-metric-topology), so $\mathbb{R}^n$ as a product and $\mathbb{R}^n$ as a metric space are one topological space, and it is metrizable (def-metrizable-space). 2. A subset $K \subseteq \mathbb{R}^n$ is a compact subset for the product topology (def-compact-space) **if and only if** $K$ is closed in $\mathbb{R}^n$ and bounded (def-metric-bounded-diameter). The hypothesis $n \ge 1$ is inherited from lem-metrics-on-rn, which defines $\mathbb{R}^n$ and its three metrics only there; for $n = 0$ the product is a one-point space and is compact. **No choice principle is used**: the metric statement it is read off from is proved by bisection (thm-heine-borel-rn).

[F5] [[thm-extreme-value-metric]]: Let $(X,d)$ be a nonempty compact metric space (def-metric-compactness, def-metric-space) and let $f : X \to \mathbb{R}$ be continuous (def-metric-continuity), $\mathbb{R}$ carrying its usual metric $d_{\mathbb{R}}(s,t) = |s-t|$ (lem-real-line-is-a-metric-space). Then the image $f[X]$ is bounded above and below (def-bounded-set), and it has a maximum and a minimum (def-max-min): there are points $x_{\max}, x_{\min} \in X$ with $$f(x_{\min}) \;\le\; f(x) \;\le\; f(x_{\max}) \qquad \text{for every } x \in X,$$ and then $f(x_{\max}) = \sup f[X]$ and $f(x_{\min}) = \inf f[X]$ (def-complete-ordered-field, def-infimum). Nonemptiness of $X$ is a hypothesis and not an oversight: for $X = \emptyset$ the image is empty and has neither a supremum nor a maximum. No choice principle is used.

[F6] [[thm-compactness-agrees-with-metric-compactness]]: Let $(X,d)$ be a metric space (def-metric-space) and let $\mathcal{T}_d$ be its metric topology (def-metric-topology), so that $(X, \mathcal{T}_d)$ is a topological space (def-topological-space) and is metrizable (def-metrizable-space). Then: 1. $(X,d)$ is a compact metric space (def-metric-compactness) **if and only if** $(X, \mathcal{T}_d)$ is a compact topological space (def-compact-space). 2. For every $A \subseteq X$: $A$ is a compact subset of the metric space $(X,d)$ if and only if $A$ is a compact subset of the topological space $(X, \mathcal{T}_d)$, the two readings of "compact subset" being the metric subspace $(A, d_A)$ (def-isometry-and-metric-embedding) and the topological subspace $(A, (\mathcal{T}_d)_A)$ (def-subspace-topology-top). **Nothing here is a coincidence and nothing is transported.** The open-cover condition of def-metric-compactness quantifies over families of subsets open in $(X,d)$, and by def-metric-topology those are exactly the members of $\mathcal{T}_d$; so the two conditions are not merely equivalent, they are the same condition written twice. No choice principle is used.

## Proof

**Proof technique:** direct.

1.1 If $K$ is empty or $n=0$, take $c=C=1$. Otherwise $K\times S^{n-1}$ is nonempty and compact: the sphere is closed bounded in Euclidean space, and finite products preserve compactness. Euclidean product and metric topologies agree, so the compactness-agreement theorem makes it a compact metric space. [F3, F4, F6, given]

2.1 The function $q(x,v)=v^TG(x)v$ is continuous and strictly positive on that space. The extreme-value theorem gives an attained minimum $c>0$ and a finite maximum $C\ge c$. For $v\ne0$, use $v=|v|(v/|v|)$ and bilinearity to multiply these bounds by $|v|^2$. For $v=0$ both inequalities are equalities. Thus the bounds hold on all tangent vectors over $K$. [F1, F5, step 1.1] ∎

## Source locator

Lee, Chapter 13, pp.337–340, Proposition 13.25, Lemma 13.28 and Theorem 13.29; finite piecewise $C^1$ refinements and pauses are treated explicitly here.
