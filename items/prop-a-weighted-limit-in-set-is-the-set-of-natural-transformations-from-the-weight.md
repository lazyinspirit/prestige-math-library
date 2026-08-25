---
id: prop-a-weighted-limit-in-set-is-the-set-of-natural-transformations-from-the-weight
kind: proposition
title: "A weighted limit of a set-valued diagram is the set of natural transformations from the weight"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-set-weighted-limit-and-weighted-colimit, prop-sets-and-functions-form-category-set, def-functor-category, prop-size-of-functor-categories, def-hom-functors-and-hom-bifunctor, def-natural-transformation, def-unordered-pair-and-singleton]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory (TAC Reprints 10), (3.7)"
      url: "https://tac.mta.ca/tac/reprints/articles/10/tr10.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal J$ be a small category and let $W,D:\mathcal J\to\mathbf{Set}$ be
functors ([[prop-sets-and-functions-form-category-set]]). Then the weighted
limit of $D$ by $W$ in $\mathbf{Set}$ exists, and a weighted limit of a
set-valued diagram is the set of natural transformations from the weight
([[def-set-weighted-limit-and-weighted-colimit]],
[[def-functor-category]]):

$$\{W,D\}=[\mathcal J,\mathbf{Set}](W,D)=\operatorname{Nat}(W,D).$$

Its counit cylinder is $\kappa_j(w)(\alpha)=\alpha_j(w)$, and its elements are
exactly the natural transformations $W\Rightarrow D$
([[def-natural-transformation]]).

## Facts & Assumptions

**Given:** A small category $\mathcal J$ and two functors $W,D:\mathcal J\to\mathbf{Set}$.

[F2] Sets as objects and functions as morphisms form a large locally small category $\mathbf{Set}$ ([[prop-sets-and-functions-form-category-set]]).

[F6] The functor category $[\mathcal C,\mathcal D]$ has functors $\mathcal C\to\mathcal D$ as objects and natural transformations as morphisms ([[def-functor-category]]).

[L1] If $\mathcal C$ is small and $\mathcal D$ is locally small, then $[\mathcal C,\mathcal D]$ is locally small ([[prop-size-of-functor-categories]]).

[F4] The covariant hom-assignment $\mathcal C(a,-)$ sends $u:b\to c$ to $u_*:\mathcal C(a,b)\longrightarrow\mathcal C(a,c),\qquad f\longmapsto u\circ f$ ([[def-hom-functors-and-hom-bifunctor]]).

[F1] A weighted limit $\{W,D\}$ is an object that represents the functor sending an object to the set of natural transformations from the weight, that is $\mathcal M(m,\{W,D\})\cong[\mathcal J,\mathbf{Set}](W,\mathcal M(m,D-))$ naturally in $m$, the counit cylinder corresponding to the identity ([[def-set-weighted-limit-and-weighted-colimit]]).

[F5] A natural transformation $\alpha:F\Rightarrow G$ is a family $\alpha_A:FA\to GA$ such that every $f:A\to B$ satisfies the naturality equation $Gf\circ\alpha_A=\alpha_B\circ Ff$ ([[def-natural-transformation]]).

[F3] The singleton $\{x\}$ is the set whose only element is $x$: $t \in \{x\} \leftrightarrow t = x$ ([[def-unordered-pair-and-singleton]]).

## Proof

**Proof technique:** direct.

1.1 Since $\mathcal J$ is small and $\mathbf{Set}$ is locally small, [L1] and [F6] make $N:=[\mathcal J,\mathbf{Set}](W,D)$ a set, and likewise $\Phi(X):=[\mathcal J,\mathbf{Set}](W,\mathbf{Set}(X,D-))$ a set for every set $X$, the functor $\mathbf{Set}(X,D-)$ being the covariant hom-functor of [F4] composed with $D$. [F1, F2, F4, F6, L1]

2.1 For a set $X$ the assignments $h\mapsto\alpha$ with $\alpha_j(w)(x)=h(x)_j(w)$, and $\alpha\mapsto h$ with $h(x)_j(w)=\alpha_j(w)(x)$, are mutually inverse bijections between $\mathbf{Set}(X,N)$ and $\Phi(X)$: each is defined by the same formula read in the two directions, and each side of the correspondence satisfies its naturality condition exactly when the other does, since $D(u)(h(x)_j(w))=h(x)_k(W(u)(w))$ for all $x$ is the same family of equations as $\mathbf{Set}(X,D(u))\circ\alpha_j=\alpha_k\circ W(u)$. [F4, F5, step 1.1]

3.1 The bijection of step 2.1 is natural in $X$: for $g:X'\to X$ the family attached to $h\circ g$ has components $w\mapsto(x'\mapsto h(g(x'))_j(w))$, which is the family attached to $h$ postcomposed with $\mathbf{Set}(g,Dj)$. So $N$ represents $\Phi$ in the sense of [F1] and is a weighted limit $\{W,D\}$; its counit cylinder is the family attached to the identity of $N$, namely $\kappa_j(w)(\alpha)=\alpha_j(w)$. [F1, F5, step 2.1]

4.1 Taking $X$ to be a one-element set $\{*\}$ reads off the elements: by [F3] a function $\{*\}\to Y$ is determined by its single value, so $\mathbf{Set}(\{*\},N)$ is in bijection with $N$ and $\Phi(\{*\})$ with $[\mathcal J,\mathbf{Set}](W,D)$, and step 3.1 identifies the two. Hence an element of $\{W,D\}$ is exactly a natural transformation $W\Rightarrow D$. [F3, F4, step 3.1] ∎

## Remarks

Naturality in the test object is what makes this an identification of the represented functors rather than a bijection of two sets that happen to have the same size. Step 4.1 alone, evaluating at a one-element set, would compute the underlying set of a weighted limit already known to exist; it is step 3.1 that produces one.

The proposition is the reason the weighted limit is called a limit "weighted by $W$": in $\mathbf{Set}$ it is literally the set of $W$-shaped families in $D$, and every other target is compared to this case through a representable, which is [[thm-representable-functors-carry-weighted-limits-to-weighted-limits]].
