---
id: "thm-every-smooth-manifold-admits-a-riemannian-metric"
kind: "theorem"
title: "Every smooth manifold admits a riemannian metric"
deps: ["def-riemannian-metric-and-riemannian-manifold", "thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric", "def-countable-choice", "thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary", "thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Ved Datar, Lectures on Riemannian Geometry, September 2025"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Under countable choice, every smooth manifold, also with boundary, admits a Riemannian metric.

## Facts & Assumptions

**Given:** A smooth manifold $M$ and countable choice.

[F1] [[def-riemannian-metric-and-riemannian-manifold]]: A **Riemannian metric** on a Hausdorff second-countable smooth manifold $M$ is a smooth symmetric covariant two-tensor $g$ such that $g_p(v,v)>0$ for every point $p$ and every nonzero $v\in T_pM$. A **Riemannian manifold** is the pair $(M,g)$. This is a def-smooth-tensor-field giving a def-smooth-bundle-metric on $TM$. Dimension zero is allowed: its zero bilinear form is positive definite because there are no nonzero vectors. The empty manifold has its unique empty metric. Boundaries are allowed where stated, with smoothness understood up to the boundary.

[F2] [[thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric]]: Every smooth vector bundle admits a smooth bundle metric.

[F3] [[def-countable-choice]]: The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following statement. > For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets indexed by > $\mathbb{N}$ there is a function $f$ with domain $\mathbb{N}$ such that > $f(n) \in X_n$ for every $n \in \mathbb{N}$. Equivalently, in the vocabulary of def-choice-function: every at most countable family of nonempty sets (def-countable) has a choice function.

[F4] [[thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary]]: For a smooth $n$-manifold with boundary, derivations of smooth boundary germs form an $n$-dimensional tangent space at every point, and the usual tangent and cotangent bundles have smooth boundary-chart transition maps.

[F5] [[thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary]]: Assume $\mathrm{AC}_\omega$. Every open cover of a smooth manifold with boundary admits a smooth partition of unity subordinate to it.

## Proof

**Proof technique:** direct.

1.1 Apply the bundle-metric construction to $TM$; in the boundary case the boundary tangent theorem supplies its smooth rank-$n$ bundle. The needed chart selections can be made countably: form all nested relatively compact chart/frame tuples (half-balls at boundary), fix a countable basis, and use countable choice to select one eligible tuple over each basis member contained in such a chart. Their domains cover $M$. [F2, F3, F4, given]

2.1 In that countable cover, finite unions of compact closures exhaust $M$; choose least increasing indices putting each union in the interior of the next. Each compact annulus has a nonempty set of finite nested covering lists whose outer closures lie in a labelled trivialization and the adjacent open annular band. Countable choice selects these lists and then the corresponding compact-set bumps. The bands make the outer sets locally finite. Dividing the bump family by its positive smooth sum gives weights $\rho_i$ summing to one with closed supports inside their labelled charts. The boundary partition construction uses the same argument with restricted half-space bumps. Thus the bundle-metric supplier’s selections need only the assumed countable choice. [F2, F3, F5, step 1.1]

3.1 On chart $i$ take the Euclidean frame metric $g_i$ and extend $\rho_i g_i$ by zero; this is smooth because its support is closed inside the chart. The locally finite sum $g=\sum_i\rho_i g_i$ is smooth and symmetric. For $v\ne0$ at $p$, each term is nonnegative and some $\rho_i(p)>0$, whence $g_p(v,v)\ge\rho_i(p)(g_i)_p(v,v)>0$. Thus $g$ is Riemannian. Empty $M$ uses the empty metric; rank zero uses the zero fibre form. [F1, step 2.1] ∎

## Source locator

Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 13, pp.328–332 and 341–342.
