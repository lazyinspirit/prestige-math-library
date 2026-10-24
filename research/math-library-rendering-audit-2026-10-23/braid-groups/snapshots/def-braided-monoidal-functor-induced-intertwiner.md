---
id: def-braided-monoidal-functor-induced-intertwiner
kind: definition
title: "The intertwiner induced by a braided monoidal functor"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 5
deps: [def-braided-monoidal-functor, def-lax-strong-and-strict-monoidal-functor, cor-an-object-of-a-braided-category-carries-canonical-braid-actions]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories (AMS Mathematical Surveys and Monographs 205), author's final version"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§8.1 Definition 8.1.7 and Remark 8.1.8, and diagram (8.5), printed pp. 195--196"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $F\colon\mathcal C\to\mathcal D$ be a braided monoidal functor between
braided monoidal categories ([[def-braided-monoidal-functor]]), with binary
tensor constraint $J_{X,Y}\colon F(X)\otimes F(Y)\to F(X\otimes Y)$ and unit
constraint $J_0\colon\mathbf 1\to F(\mathbf 1)$, which are isomorphisms because
$F$ is strong monoidal ([[def-lax-strong-and-strict-monoidal-functor]]). Let
$X\in\mathcal C$.

For $n\ge1$ the **$n$-fold constraint** is the canonical isomorphism

$$J_n\colon F(X)^{\otimes n}\longrightarrow F(X^{\otimes n}),$$

defined in a strict model of both categories by the recursion
$J_1=1_{F(X)}$ and
$J_{n+1}=J_{X^{\otimes n},X}\circ(J_n\otimes1_{F(X)})$; in general the
associativity and unit isomorphisms of the two monoidal structures are inserted
in the same composite, and $J_n$ is independent of those insertions by Mac Lane
coherence for the monoidal structure.

We call $J_n$ the **intertwiner induced by $F$** at $X$. It conjugates the
canonical braid action on $F(X)^{\otimes n}$
([[cor-an-object-of-a-braided-category-carries-canonical-braid-actions]]) to
$F$ of the canonical braid action on $X^{\otimes n}$: the precise statement is
that $J_n\circ\rho^{\mathcal D}_n(\beta)=F(\rho^{\mathcal C}_n(\beta))\circ
J_n$ for every $\beta\in B_n$, which is proved in the companion theorem. Each
$J_n$ is an isomorphism because it is a composite of the structure isomorphisms
$J_{X,Y}$ and $J_0$, which are invertible by strong monoidality; in particular
$J_n$ is a natural isomorphism between the two tensor-power functors.
