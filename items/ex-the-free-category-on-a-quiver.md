---
id: ex-the-free-category-on-a-quiver
kind: example
title: 'Finite directed paths form the free category on a quiver'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-category, thm-the-adjunction-hom-set-bijection-under-local-smallness, thm-induction-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Example 4.1.13'
      url: 'https://emilyriehl.github.io/files/context.pdf'
pipeline_run: null
---

## Example

A small quiver consists of sets $Q_0$ of vertices and $Q_1$ of directed edges with source and target maps $s,t:Q_1\to Q_0$. Its free category $P(Q)$ has vertices as objects and finite composable edge paths as morphisms. The empty path is an identity and path concatenation is composition. This construction is left adjoint to the functor sending a small category to its underlying quiver.

## Facts & Assumptions

**Given:** A small quiver $Q$ and a small category $\mathcal C$.

[F1] A category has associative composition and a two-sided identity at each object; its object class may be empty ([[def-category]]).

[F2] If a property holds at $0$ and passes from $n$ to $n+1$, then it holds for every natural number ([[thm-induction-principle]]).

[L1] A natural bijection $\mathcal D(Fc,d)\cong\mathcal C(c,Gd)$ presents $F$ as left adjoint to $G$ in locally small categories ([[thm-the-adjunction-hom-set-bijection-under-local-smallness]]).

## Verification

**Proof technique:** direct.

1.1 A path of length $n$ is a composable $n$-tuple of edges. Concatenation of paths is associative, and the length-zero path at a vertex is a two-sided identity. Thus these data form a category $P(Q)$ by [F1], including when $Q_0$ is empty. [F1, construct]

2.1 Given a quiver map $q:Q\to U(\mathcal C)$, define $\widehat q:P(Q)\to\mathcal C$ on vertices by $q$ and on a path by composing the images of its edges in order; send an empty path to the appropriate identity. Associativity in [F1] makes this a functor. [F1, step 1.1, construct]

2.2 For a quiver map $f=(f_0,f_1):Q\to Q'$ define $P(f):P(Q)\to P(Q')$ by $f_0$ on objects and by $(e_1,\ldots,e_n)\mapsto(f_1e_1,\ldots,f_1e_n)$ on paths; the image tuple is composable because $f$ commutes with source and target. It sends empty paths to empty paths and concatenations to concatenations, so it is a functor, and $P(1_Q)=1_{P(Q)}$ and $P(gf)=P(g)P(f)$ hold componentwise. Thus $P$ is a functor. [step 1.1, F1, construct]

3.1 Any functor extending $q$ must have the values in step 2.1: induction on path length using [F2] forces the empty path to an identity and each longer path to the composite of its edge images. Hence the extension is unique. [step 2.1, F2]

4.1 Both $\mathbf{Quiv}$ and $\mathbf{Cat}$ here consist of *small* quivers and *small* categories, so a quiver map is a pair of functions between sets and a functor is a pair of functions between sets; each morphism collection is a subset of a set of functions and hence a set, making both categories locally small as [L1] requires. Restriction to vertices and edges and the extension $q\mapsto\widehat q$ are inverse by steps 2.1 and 3.1, and they commute with the actions of step 2.2 and with postcomposition by functors, so the bijection $\mathbf{Cat}(P(Q),\mathcal C)\cong\mathbf{Quiv}(Q,U(\mathcal C))$ is natural and [L1] yields $P\dashv U$. [step 2.1, step 2.2, step 3.1, L1] ∎
