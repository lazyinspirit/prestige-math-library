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

**Given:** A topological manifold $M$; open Euclidean subsets $W,W',W''$; smooth
maps $u,v$ and $C^r$ maps $g,h$ as in the Statement, where for finite $r$ a map
is $C^r$ when every component has every iterated coordinate derivative through
order $r$ existing and continuous.

[F1] Compatibility of atlases is defined cross-pairwise, and the union of two
compatible atlases is a smooth atlas ([[def-smooth-atlas]],
[[lem-the-union-of-two-compatible-smooth-atlases-is-a-smooth-atlas]]).

[L1] If $f$ and $g$ are totally differentiable at the matching points, then
$D(g\circ f)(a)=Dg(f(a))\circ Df(a)$ ([[thm-chain-rule-for-total-derivatives]]).

[L2] A total derivative computes partial derivatives: $\partial_j f(a)=Df(a)e_j$
([[thm-total-derivative-computes-directional-and-partial-derivatives]]).

[L3] Continuous first partials near a point make a map totally differentiable
there ([[thm-continuous-partial-derivatives-imply-total-differentiability]]).

[L4] Total differentiability gives continuity ([[thm-total-differentiability-gives-a-local-linear-bound-and-continuity]]).

[L5] Composites of continuous maps are continuous
([[lem-continuity-is-local-and-pastes]], claim 1).

[L6] Total differentiability at $a$ is the linear-approximation condition
$\|f(a+h)-f(a)-Lh\|_2/\|h\|_2\to0$ ([[def-total-derivative-in-euclidean-space]]).

[A1] Iterated partial derivatives are additive and homogeneous; and a scalar
function is $C^k$ when every iterated coordinate derivative through order $k$
exists and is continuous ([[def-ck-and-multi-index-notation-in-several-variables]]).

## Proof

**Proof technique:** direct.

1.1 Reflexivity and symmetry: $\mathcal A\cup\mathcal A=\mathcal A$ is an atlas,
so $\mathcal A$ is compatible with itself; and compatibility is cross-pairwise
over the two atlases, so interchanging $\mathcal A$ and $\mathcal B$ leaves the
same cross-pair conditions. [F1, given]

1.2 Claim 2 for $r=0$: by [A1] a $C^0$ map is continuous, and $u$, being smooth,
has continuous first partials by [A1], is totally differentiable by [L3], and is
continuous by [L4]; the composite is continuous by [L5]. The post-composition
half is the same with $h$ and $v$. [given, A1, L3, L4, L5]

1.3 Multiplication $\mu(a,b)=ab$ is totally differentiable at every point with
$D\mu(a,b)(s,t)=sb+at$: the difference
$\mu(a+s,b+t)-\mu(a,b)-(sb+at)$ equals $st$, whose absolute value is at most the
squared Euclidean norm of $(s,t)$, so the normalized remainder of [L6] tends to
zero; hence $\mu$ is continuous by [L4]. [given, L6, L4]

2.1 The product of two $C^k$ scalar functions is $C^k$: the case $k=0$ is the
composite $\mu\circ(p,q)$ with both factors continuous, $\mu$ continuous by
step 1.3, and the composite continuous by [L5]; for $k\ge1$, [L1] applied to
$\mu\circ(p,q)$ together with [L2] and the derivative from step 1.3 give
$\partial_i(pq)=(\partial_i p)q+p(\partial_i q)$, and the induction hypothesis
for products applied to the two terms on the right shows $\partial_i(pq)$ is
$C^{k-1}$, while the $k=0$ case shows $pq$ is continuous; so $pq$ is $C^k$ by
[A1]. [step 1.3, L1, L2, L5, A1]

3.1 Sums of $C^k$ functions are $C^k$ by the additivity and homogeneity in [A1];
with step 2.1, finite sums of products of $C^k$ functions are $C^k$. [step 2.1, A1]

4.1 Claim 2, induction on finite $r$. The base $r=0$ is step 1.2. For $r\ge1$
with the claim assumed for $r-1$: the partials of $g$ are $C^{r-1}$ by [A1], so
[L3] makes $g$ and $u$ totally differentiable, [L1] applies, and [L2] expands
the entries to $\partial_i(g\circ u)_l=\sum_j((\partial_j g_l)\circ u)\cdot\partial_i u_j$;
each $\partial_i u_j$ is smooth hence $C^{r-1}$, each $(\partial_j g_l)\circ u$
is $C^{r-1}$ by the induction hypothesis, and steps 2.1 and 3.1 make the sum
$C^{r-1}$; step 1.2 makes $g\circ u$ continuous, so $g\circ u$ is $C^r$ by [A1].
The post-composition half runs the same induction on
$\partial_i(v\circ h)_l=\sum_j((\partial_j v_l)\circ h)\cdot\partial_i h_j$.
The case $r=\infty$ follows by applying the finite case to every finite $r$.
[step 1.2, step 2.1, step 3.1, L1, L2, L3, A1, given]

5.1 Transitivity: let $\mathcal A\sim\mathcal B$ and $\mathcal B\sim\mathcal C$.
For charts $(U,\varphi)\in\mathcal A$ and $(W,\chi)\in\mathcal C$ with
$p\in U\cap W$, choose a chart $(V,\psi)\in\mathcal B$ with $p\in V$, which
exists because $\mathcal B$ covers $M$ by [F1]. On the open set
$\varphi(U\cap V\cap W)$ the transition factors as
$\chi\circ\varphi^{-1}=(\chi\circ\psi^{-1})\circ(\psi\circ\varphi^{-1})$, the
composition of two smooth maps by the two compatibilities, hence smooth by
step 4.1 with $r=\infty$. [F1, step 4.1, choose]

6.1 Every point of the overlap has such a neighbourhood on which
$\chi\circ\varphi^{-1}$ is smooth, and smoothness is local: the partials through
every finite order exist and are continuous near every point, hence on all of
$\varphi(U\cap W)$, by [A1]. The reverse transition is the same argument with
the charts interchanged. [step 5.1, A1]

7.1 Therefore every chart of $\mathcal A$ is compatible with every chart of
$\mathcal C$, so $\mathcal A\cup\mathcal C$ is an atlas by [F1], which is the
statement $\mathcal A\sim\mathcal C$; with step 1.1 compatibility is an
equivalence relation, and with step 4.1 both claims are proved. [F1, step 1.1,
step 4.1, step 6.1] ∎
