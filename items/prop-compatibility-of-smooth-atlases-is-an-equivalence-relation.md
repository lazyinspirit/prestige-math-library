---
id: prop-compatibility-of-smooth-atlases-is-an-equivalence-relation
kind: proposition
title: "Compatibility of smooth atlases is an equivalence relation, and smooth Euclidean maps compose"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-smooth-atlas, lem-the-union-of-two-compatible-smooth-atlases-is-a-smooth-atlas,
       def-ck-and-multi-index-notation-in-several-variables,
       def-total-derivative-in-euclidean-space,
       thm-chain-rule-for-total-derivatives,
       thm-total-derivative-computes-directional-and-partial-derivatives,
       thm-continuous-partial-derivatives-imply-total-differentiability,
       thm-total-differentiability-gives-a-local-linear-bound-and-continuity,
       lem-continuity-is-local-and-pastes]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §2"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.2"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
pipeline_run: null
---

## Statement

Let $M$ be a topological manifold.

1. Compatibility of smooth atlases on $M$ is an equivalence relation.
2. Let $W\subseteq\mathbb R^a$, $W'\subseteq\mathbb R^b$, $W''\subseteq\mathbb R^c$
   be open. If $u:W\to W'$ is smooth and $g:W'\to W''$ is of class $C^r$
   ($r\in\mathbb N\cup\{\infty\}$), then $g\circ u$ is $C^r$; and if
   $h:W\to W'$ is of class $C^r$ and $v:W'\to W''$ is smooth, then $v\circ h$ is
   $C^r$.

## Facts & Assumptions

**Given:** A topological manifold $M$; open Euclidean subsets $W,W',W''$; smooth maps $u,v$ and $C^r$ maps $g,h$ as in the Statement, where for finite $r$ a map is $C^r$ when every component has every iterated coordinate derivative through order $r$ existing and continuous.

[F1] Compatibility of atlases is defined cross-pairwise, and the union of two compatible atlases is a smooth atlas ([[def-smooth-atlas]], [[lem-the-union-of-two-compatible-smooth-atlases-is-a-smooth-atlas]]).

[L1] If $f$ and $g$ are totally differentiable at the matching points, then $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$ ([[thm-chain-rule-for-total-derivatives]]).

[L2] A total derivative computes partial derivatives: $\partial_j f(a)=Df(a)e_j$ ([[thm-total-derivative-computes-directional-and-partial-derivatives]]).

[L3] Continuous first partials near a point make a map totally differentiable there ([[thm-continuous-partial-derivatives-imply-total-differentiability]]).

[L4] Total differentiability gives continuity ([[thm-total-differentiability-gives-a-local-linear-bound-and-continuity]]).

[L5] Composites of continuous maps are continuous ([[lem-continuity-is-local-and-pastes]], claim 1).

[L6] Total differentiability at $a$ is the linear-approximation condition $\|f(a+h)-f(a)-Lh\|_2/\|h\|_2\to0$ ([[def-total-derivative-in-euclidean-space]]).

[A1] Iterated partial derivatives are additive and homogeneous; and a scalar function is $C^k$ when every iterated coordinate derivative through order $k$ exists and is continuous ([[def-ck-and-multi-index-notation-in-several-variables]]).

## Proof

**Proof technique:** direct.

1.1 Reflexivity and symmetry: $\mathcal A\cup\mathcal A=\mathcal A$ is an atlas, [F1, given] so $\mathcal A$ is compatible with itself; and compatibility is cross-pairwise over the two atlases, so interchanging $\mathcal A$ and $\mathcal B$ leaves the same cross-pair conditions. [F1, given]

1.2 Claim 2 for $r=0$: by [A1] a $C^0$ map is continuous, and $u$, being smooth, [given, A1, L3, L4, L5] has continuous first partials by [A1], is totally differentiable by [L3], and is continuous by [L4]; the composite is continuous by [L5]. The post-composition half is the same with $h$ and $v$. [given, A1, L3, L4, L5]

1.3 Multiplication $\mu(a,b)=ab$ is totally differentiable at every point with [given, L6, L4] $D\mu(a,b)(s,t)=sb+at$: the difference $\mu(a+s,b+t)-\mu(a,b)-(sb+at)$ equals $st$, whose absolute value is at most the squared Euclidean norm of $(s,t)$, so the normalized remainder of [L6] tends to zero; hence $\mu$ is continuous by [L4]. [given, L6, L4]

2.1 Let $p,q:W\to\mathbb R$ be scalar $C^k$ maps. [step 1.3, L1, L2, L3, L5, A1] The case $k=0$ follows from step 1.3 and [L5], since $pq=\mu\circ(p,q)$ with both factors continuous. For $k\ge1$, [L3] makes $(p,q)$ totally differentiable, [L1] applies to $\mu\circ(p,q)$, and [L2] gives $\partial_i(pq)=(\partial_i p)q+p(\partial_i q)$. Induction on $k$ shows the right-hand side is $C^{k-1}$, so $pq$ is $C^k$ by [A1]. [step 1.3, L1, L2, L3, L5, A1]

3.1 Finite sums of scalar $C^k$ functions are $C^k$: [step 2.1, A1] sums are handled by the additivity and homogeneity in [A1], and products by step 2.1. [step 2.1, A1]

4.1 Claim 2, for finite $r$, follows by induction on $r$. [step 1.2, step 3.1, L1, L2, L3, A1, given] The base case $r=0$ is step 1.2. For $r\ge1$, the partials of each component $g_l$ are $C^{r-1}$ by [A1], so [L3] makes $g$ and $u$ totally differentiable and [L1], [L2] give $\partial_i(g\circ u)_l=\sum_j((\partial_j g_l)\circ u)\cdot\partial_i u_j$. The induction hypothesis makes each $(\partial_j g_l)\circ u$ of class $C^{r-1}$, smoothness of $u$ makes each $\partial_i u_j$ of class $C^{r-1}$, and step 3.1 makes the sum $C^{r-1}$. With step 1.2 this proves $g\circ u$ is $C^r$ by [A1]. The post-composition half with $v\circ h$ is the same argument, and the case $r=\infty$ follows by applying the finite case to every finite $r$. [step 1.2, step 3.1, L1, L2, L3, A1, given]

5.1 For transitivity, let $\mathcal A\sim\mathcal B$ and [F1, step 4.1, choose] $\mathcal B\sim\mathcal C$. Fix charts $(U,\varphi)\in\mathcal A$ and $(W,\chi)\in\mathcal C$, and let $p\in U\cap W$. Choose $(V,\psi)\in\mathcal B$ with $p\in V$, which exists because $\mathcal B$ covers $M$ by [F1]. On the open set $\varphi(U\cap V\cap W)$ one has $\chi\circ\varphi^{-1}=(\chi\circ\psi^{-1})\circ(\psi\circ\varphi^{-1})$, so step 4.1 with $r=\infty$ makes this transition smooth on a neighbourhood of $\varphi(p)$. [F1, step 4.1, choose]

6.1 Every point of $\varphi(U\cap W)$ has such a neighbourhood, so [step 5.1, A1] $\chi\circ\varphi^{-1}$ is smooth on all of $\varphi(U\cap W)$ because the iterated partial derivatives exist and are continuous locally at every point. The same argument with the charts interchanged makes $\varphi\circ\chi^{-1}$ smooth. [step 5.1, A1]

7.1 Thus every chart of $\mathcal A$ is compatible with every chart of [F1, step 1.1, step 4.1, step 6.1] $\mathcal C$, so $\mathcal A\cup\mathcal C$ is a smooth atlas by [F1]. This is exactly the transitivity of atlas compatibility. Together with step 1.1, compatibility of smooth atlases is an equivalence relation, and claim 2 was proved in step 4.1. [F1, step 1.1, step 4.1, step 6.1] ∎
