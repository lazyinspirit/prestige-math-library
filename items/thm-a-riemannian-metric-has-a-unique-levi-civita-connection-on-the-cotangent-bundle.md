---
id: thm-a-riemannian-metric-has-a-unique-levi-civita-connection-on-the-cotangent-bundle
kind: theorem
title: "A Riemannian metric has a unique Levi-Civita connection on the cotangent bundle"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-riemannian-metric-symmetric-cotangent-connection-and-covariant-hessian]
justified_by: []
aliases: []
landmark: false
proof_strategy: local coefficient construction
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
---

## Statement

Let $g$ be a Riemannian metric on a smooth manifold $M$. Then there is a unique
symmetric cotangent-bundle connection on $M$ that is metric-compatible with
$g$. In a coordinate chart its Christoffel symbols are

$$\Gamma^k_{ij}=\frac12\sum_\ell g^{k\ell}\left(\frac{\partial g_{j\ell}}{\partial x^i}+\frac{\partial g_{i\ell}}{\partial x^j}-\frac{\partial g_{ij}}{\partial x^\ell}\right),$$

where $(g^{k\ell})$ is the inverse matrix of $(g_{k\ell})$. This connection is
the **Levi-Civita connection** of $g$ on the cotangent bundle.

## Facts & Assumptions

**Given:** A smooth manifold $M$ with a Riemannian metric $g$.

[F1] Symmetric cotangent-bundle connections, metric compatibility, and covariant Hessians are defined by the coordinate formulas in [[def-riemannian-metric-symmetric-cotangent-connection-and-covariant-hessian]].

## Proof

**Proof technique:** local coefficient construction.

1.1 Fix a coordinate chart and let $(g_{ij})$ be the metric matrix there. Since $g$ is positive definite, $(g_{ij})$ is invertible at each point; write $(g^{ij})$ for the inverse matrix, define $\Gamma_{ijk}:=\frac12(\partial_i g_{jk}+\partial_j g_{ik}-\partial_k g_{ij})$ and $\Gamma^k_{ij}:=\sum_\ell g^{k\ell}\Gamma_{ij\ell}$, and use [F1] to obtain a local cotangent-bundle connection. [F1, given, construct]

2.1 The formula for $\Gamma_{ijk}$ is symmetric in $i$ and $j$, so $\Gamma^k_{ij}=\Gamma^k_{ji}$. Hence the local connection is symmetric. [step 1.1, algebra]

2.2 Adding $\Gamma_{ijk}$ and $\Gamma_{ikj}$ gives $\Gamma_{ijk}+\Gamma_{ikj}=\partial_i g_{jk}$, so the local connection is metric-compatible with $g$ in the sense of [F1]. [F1, step 1.1, algebra]

2.3 Let $x=(x^i)$ and $y=(y^a)$ be overlapping charts, and let $\nabla^x,\nabla^y$ be the local connections from step 1.1 on those chart domains. On the overlap, write $$\partial_{y^b}=\sum_i\frac{\partial x^i}{\partial y^b}\partial_{x^i}, \qquad dy^a=\sum_k\frac{\partial y^a}{\partial x^k}dx^k.$$ Using the connection formula from [F1] and the Leibniz rule gives $$\nabla^x_{\partial_{y^b}}dy^a =-\sum_c\widetilde\Gamma^a_{bc}\,dy^c,$$ where $$\widetilde\Gamma^a_{bc} =\sum_{i,j,k}\frac{\partial y^a}{\partial x^k}\Gamma^k_{ij} \frac{\partial x^i}{\partial y^b}\frac{\partial x^j}{\partial y^c} +\sum_k\frac{\partial y^a}{\partial x^k} \frac{\partial^2x^k}{\partial y^b\partial y^c}.$$ Thus $\nabla^x$ is also a cotangent-bundle connection in the $y$-chart, with coefficients $\widetilde\Gamma^a_{bc}$. [F1, step 1.1, algebra]

3.1 Conversely, let $\widetilde\Gamma^k_{ij}$ be the coefficients of any symmetric metric-compatible cotangent connection in this chart, and write $\widetilde\Gamma_{ijk}:=\sum_\ell g_{k\ell}\widetilde\Gamma^\ell_{ij}$. Symmetry and metric compatibility give $\partial_i g_{jk}=\widetilde\Gamma_{ijk}+\widetilde\Gamma_{ikj}$, $\partial_j g_{ik}=\widetilde\Gamma_{jik}+\widetilde\Gamma_{jki}$, and $\partial_k g_{ij}=\widetilde\Gamma_{kij}+\widetilde\Gamma_{kji}$; substituting $\widetilde\Gamma_{ijk}=\widetilde\Gamma_{jik}$ and $\widetilde\Gamma_{ikj}=\widetilde\Gamma_{kij}$ yields $2\widetilde\Gamma_{ijk}=\partial_i g_{jk}+\partial_j g_{ik}-\partial_k g_{ij}$, hence $\widetilde\Gamma_{ijk}=\Gamma_{ijk}$ and $\widetilde\Gamma^k_{ij}=\Gamma^k_{ij}$. [F1, step 2.1, step 2.2, algebra]

3.2 The coefficients from step 2.3 are symmetric in $b,c$: the first term is symmetric because $\Gamma^k_{ij}=\Gamma^k_{ji}$ by step 2.1, and the second is symmetric by equality of mixed partials. If $$\widehat g_{cd}=\sum_{r,s}g_{rs} \frac{\partial x^r}{\partial y^c}\frac{\partial x^s}{\partial y^d}$$ are the metric coefficients in the $y$-chart, then differentiating this identity and using step 2.2 in the $x$-chart yields $$\frac{\partial\widehat g_{cd}}{\partial y^b} =\widetilde\Gamma_{bcd}+\widetilde\Gamma_{bdc},$$ where $\widetilde\Gamma_{bcd}:=\sum_a\widehat g_{da}\widetilde\Gamma^a_{bc}$. So $\nabla^x$ is symmetric and metric-compatible in the $y$-chart as well. [F1, step 2.1, step 2.2, step 2.3, algebra]

4.1 Step 3.1 now applies in the $y$-chart: the $y$-coefficients of $\nabla^x$ are exactly the Christoffel symbols computed from the metric in that chart. But that is how $\nabla^y$ was defined in step 1.1, so $\nabla^x=\nabla^y$ on the overlap. Therefore the local operators glue to a global cotangent-bundle connection, and the same chartwise uniqueness proves global uniqueness. [step 1.1, step 3.1, step 3.2]

5.1 Thus $g$ has a unique symmetric metric-compatible cotangent-bundle connection, whose coordinate coefficients are the displayed Christoffel symbols. [step 1.1, step 4.1] ∎
