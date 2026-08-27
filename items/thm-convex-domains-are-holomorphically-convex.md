---
id: thm-convex-domains-are-holomorphically-convex
kind: theorem
title: "Convex domains are holomorphically convex"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-convex-subset-of-euclidean-space,
       def-holomorphically-convex-hull-and-domain,
       lem-finite-dimensional-separation-of-a-compact-convex-set-and-a-point]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Exercise 2.1.7"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables, Example 12"
      url: "https://haroldpboas.gitlab.io/courses/650-2007c/notes.pdf"
pipeline_run: null
---

## Statement

Let $\Omega\subseteq\mathbb C^m$ be a convex domain, and let $K\Subset\Omega$ be
compact. Then

$$\widehat K_\Omega\subseteq\operatorname{conv}(K).$$

In particular, $\Omega$ is holomorphically convex.

## Facts & Assumptions

**Given:** A convex domain $\Omega\subseteq\mathbb C^m$ and a compact set
$K\Subset\Omega$.

[L1] A point outside a compact convex set can be strictly separated from it by
the real part of a complex-linear functional
([[lem-finite-dimensional-separation-of-a-compact-convex-set-and-a-point]]).

[L2] The holomorphic hull is defined by inequalities against all holomorphic
functions on $\Omega$
([[def-holomorphically-convex-hull-and-domain]]).

[L3] Convex subsets contain the line segment between any two of their points
([[def-convex-subset-of-euclidean-space]]).

## Proof

**Proof technique:** direct.

1.1 Let $p\in\Omega\setminus\operatorname{conv}(K)$. Since $\operatorname{conv}(K)$ is compact and convex, [L1] gives a complex-linear functional $L$ such that $\operatorname{Re}L(z)\le\beta<\operatorname{Re}L(p)$ for every $z\in\operatorname{conv}(K)$, hence in particular for every $z\in K$. The holomorphic function $h(z):=\exp(L(z))$ then satisfies $|h(z)|\le e^\beta<|h(p)|$ on $K$. By [L2], this excludes $p$ from $\widehat K_\Omega$. [L1, L2, given]

2.1 Step 1.1 proves $\widehat K_\Omega\subseteq\operatorname{conv}(K)$. Because $\Omega$ is convex, [L3] gives $\operatorname{conv}(K)\subseteq\Omega$. In finite-dimensional Euclidean space the convex hull of a compact set is compact, so $\widehat K_\Omega$ is contained in a compact subset of $\Omega$. Therefore $\widehat K_\Omega\Subset\Omega$, and $\Omega$ is holomorphically convex. [L3, step 1.1] ∎
