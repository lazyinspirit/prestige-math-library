---
id: "cex-a-degenerate-pullback-metric-under-a-constant-map"
kind: "counterexample"
title: "A degenerate pullback metric under a constant map"
deps: ["def-pullback-riemannian-metric", "prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions", "def-smooth-manifold", "def-topological-manifold-without-boundary"]
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
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement refuted

A constant smooth map always pulls a Riemannian metric back to a Riemannian metric.

## Facts & Assumptions

**Given:** $F:M\to\mathbb R$ is constant, $M$ is a smooth manifold of dimension $n>0$, and the target metric is $dy^2$.

[F1] [[def-pullback-riemannian-metric]]: For smooth $F:M\to N$ and a Riemannian metric $h$ on $N$, its **pullback tensor** is $(F^*h)_p(v,w)=h_{F(p)}(dF_pv,dF_pw)$. This is def-pullback-of-a-covariant-tensor-field for the tensor in def-riemannian-metric-and-riemannian-manifold. It is always symmetric and positive semidefinite; the name does not assert positive definiteness. Smoothness and the precise immersion criterion are established next.

[F2] [[prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions]]: $F^*h$ is Riemannian if and only if $F$ is an immersion. In general it is positive semidefinite, with radical $\ker dF_p$ at $p$.

[F3] [[def-smooth-manifold]]: A **smooth $n$-manifold** is a pair $(M,\mathcal S)$ in which $M$ is a topological $n$-manifold (def-topological-manifold-without-boundary) and $\mathcal S$ is a **smooth structure** on $M$: a maximal smooth atlas (thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas). Because thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas sends every smooth atlas to the unique maximal atlas containing it, a smooth manifold is equivalently specified by a topological manifold $M$ together with any one smooth atlas $\mathcal A$, the structure being the generated $[\mathcal A]$. A chart $(U,\varphi)\in\mathcal S$ is called a **smooth chart** (or a **chart of the smooth structure**); its domain is a **coordinate domain** and its coordinate functions are **smooth coordinates** on $U$. When the structure is clear from context, the manifold itself is written $M$ in place of $(M,\mathcal S)$.

[F4] [[def-topological-manifold-without-boundary]]: Let $n\in\mathbb N$. For $n\ge1$, put $\mathbb R^n:=\prod_{k<n}\mathbb R$ with its usual topology; for $n=0$ put $\mathbb R^0:=\{0\}$, the one-point space. A **topological $n$-manifold without boundary** (or briefly an **$n$-manifold**) is a topological space $M$ satisfying: 1. $M$ is Hausdorff (def-hausdorff-space); 2. $M$ is second countable (def-second-countable-space); 3. $M$ is **locally Euclidean of dimension $n$**: every $p\in M$ has an open neighbourhood $U\subseteq M$ homeomorphic to an open subset of $\mathbb R^n$ (def-homeomorphism-and-open-maps). The empty space satisfies all three conditions vacuously, so $M=\varnothing$ is an $n$-manifold for every $n$; this degenerate instance is kept, and statements about nonempty manifolds name the hypothesis. In dimension zero, condition 3 forces the one-point neighbourhoods of points to be open singletons, so a $0$-manifold is exactly a discrete second-countable space with at most countably many points.

## Counterexample

**Proof technique:** direct.

1.1 In each coordinate chart, the component of $F$ is constant, so its differential is zero. The pullback formula gives $(F^*dy^2)_p(v,w)=dy^2_{F(p)}(0,0)=0$ for all tangent vectors at every point. Thus the pullback is the zero smooth tensor. [F1, given]

2.1 If $M$ is nonempty, fix a point $p$ and a chart there. Its first coordinate tangent vector is nonzero because $n>0$. The zero tensor has quadratic value zero on that vector and is not positive definite, so is not Riemannian. Equivalently $dF_p=0$ is not injective on the positive-dimensional tangent space. In particular $M=\mathbb R$ and $F(x)=0$ provide an explicit counterexample: $(F^*dy^2)_0(\partial_x,\partial_x)=0$. [F2, F3, F4, step 1.1]

3.1 If $M$ is empty, its unique tensor is smooth and the requirement of positive definiteness at every point has no instances, so the pullback is vacuously Riemannian. Together with step 2.1, this shows that for the stated positive dimension it is not Riemannian exactly when $M$ is nonempty. The counterexample uses the nonempty real line, so the empty case does not rescue the universal assertion. [F3, F4, step 1.1, step 2.1] ∎

## Source locator

Lee, pp. 330–331, pullback metrics and Proposition 13.9; the empty-manifold convention is that of the cited library definitions.
