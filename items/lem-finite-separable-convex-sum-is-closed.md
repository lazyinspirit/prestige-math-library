---
id: lem-finite-separable-convex-sum-is-closed
kind: lemma
title: "Finite separable sums preserve proper closed convexity"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-proper-closed-convex-function-on-rn
  - thm-euclidean-semicontinuity-level-set-characterisations
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Neal Parikh and Stephen Boyd, Proximal Algorithms, §1.1"
      url: "https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf"
    - title: "Amir Beck, First-Order Methods in Optimization, Chapter 6"
      url: "https://epubs.siam.org/doi/book/10.1137/1.9781611974997"
---

## Statement

Let $d_1,\ldots,d_n\ge1$ be finite block dimensions, and let each $g_i:\mathbb R^{d_i}\to(-\infty,+\infty]$ be proper, closed and convex. On $\mathbb R^{d_1}\times\cdots\times\mathbb R^{d_n}$ define $g(x)=\sum_{i=1}^n g_i(x_i)$. Then $g$ is proper, closed and convex.

## Facts & Assumptions

**Given:** The finite family of functions in the Statement.

[F1] [[def-proper-closed-convex-function-on-rn]]: proper means nonempty effective domain, convex means the extended-real Jensen inequality, and closed means closed epigraph.

[F2] [[thm-euclidean-semicontinuity-level-set-characterisations]]: for a real Euclidean domain, closed epigraph is equivalent to lower semicontinuity, and lower semicontinuity gives eventual lower bounds along convergent sequences.

## Proof

1.1 Each $\operatorname{dom}g_i$ is nonempty by [F1]. Because the family is finite, induction on $i$ constructs a tuple $x$ with $x_i\in\operatorname{dom}g_i$ for every $i$; hence $g(x)<+\infty$ and $g$ is proper. [F1, construct]

1.2 If $x,y$ have finite $g$ and $0\le\theta\le1$, apply convexity of each $g_i$ to $(1-\theta)x_i+\theta y_i$ and add the $n$ inequalities. If either endpoint has infinite value, the extended-real convexity inequality is automatic. Thus $g$ is convex. [F1, given, algebra]

2.1 Let $(x^m,t_m)\in\operatorname{epi}g$ converge to $(x,t)$. If $g_i(x_i)=+\infty$ for some $i$, lower semicontinuity in [F2] makes $g_i(x_i^m)$ eventually exceed any fixed real bound. For each other block $j$, [F2] gives an eventual finite lower bound for $g_j(x_j^m)$ (use $g_j(x_j)-1$ when finite, and $0$ when infinite). Their finite sum then forces $g(x^m)>t_m$ eventually, contradicting $g(x^m)\le t_m$ and $t_m\to t$. Hence all $g_i(x_i)$ are finite. [F1, F2, given, assume-contra]

2.2 For any $\varepsilon>0$, lower semicontinuity in [F2] gives, for each of the finitely many blocks, an index after which $g_i(x_i^m)\ge g_i(x_i)-\varepsilon/n$. Beyond the maximum of those finitely many indices, $t_m\ge g(x^m)\ge g(x)-\varepsilon$. Taking the real limit gives $t\ge g(x)-\varepsilon$ for every $\varepsilon>0$, hence $g(x)\le t$ and $(x,t)\in\operatorname{epi}g$. Thus the epigraph is sequentially closed, hence closed in Euclidean space; [F1] now proves $g$ is closed. [F1, F2, step 2.1, algebra] ∎
