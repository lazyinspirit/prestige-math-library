---
id: def-yang-baxter-operator-on-an-object
kind: definition
title: "Yang–Baxter operators on an object"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps: [def-braided-monoidal-category, thm-in-a-strict-braided-monoidal-category-the-braiding-satisfies-the-yang-baxter-equation, thm-mac-lane-strictification]
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
      locator: "§8.1 Definition 8.1.1 and §8.2 Remark 8.2.5, printed pp. 195 and 198"
    - title: "V. G. Turaev, Quantum Invariants of Knots and 3-Manifolds (de Gruyter Studies in Mathematics 18, 1994)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/turaev5.pdf"
      locator: "Chapter I §1.6; strict ribbon categories and the graphical calculus, printed pp. 22--26"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $\mathcal C$ be a monoidal category and let $X$ be an object of $\mathcal C$.
Write $X^{\otimes3}$ for the triple tensor product and write
$1_X^{\otimes k}$ for the $k$-fold tensor power of $\operatorname{id}_X$. The
equation below is interpreted in a strict model of $\mathcal C$: fix a
monoidal equivalence from $\mathcal C$ to a strict monoidal category, as in
[[thm-mac-lane-strictification]], with tensor constraint $J_{A,B}:E(A)\otimes E(B)\to E(A\otimes B)$. Put
$X'=E(X)$ and $R'=J_{X,X}^{-1}E(R)J_{X,X}$, and read the displayed
equation with $X',R'$ in that strict category.
When $\mathcal C$ is strict the display below is literal.

A **Yang–Baxter operator** on $X$ is an invertible morphism
$R\colon X\otimes X\to X\otimes X$ such that

$$(R\otimes1_X)(1_X\otimes R)(R\otimes1_X)=(1_X\otimes R)(R\otimes1_X)(1_X\otimes R) .$$

Both sides are endomorphisms of $X^{\otimes3}$ in the strict model, so the
display is a well-formed equality of morphisms of the strict model; transported
back along the equivalence it is a well-formed statement about $X$. It is the
**Yang–Baxter equation**, and an invertible solution $R$ is also called an
$R$-matrix on $X$ in the categorical sense. Invertibility is part of the data:
a solution of the cubic equation that is not invertible is not a Yang–Baxter
operator in this sense.

In a strict braided monoidal category the braiding gives the basic example
$R=c_{X,X}$ on any object $X$ ([[def-braided-monoidal-category]]): the
Yang–Baxter equation for the braiding is
[[thm-in-a-strict-braided-monoidal-category-the-braiding-satisfies-the-yang-baxter-equation]],
and $c_{X,X}$ is invertible with inverse $c_{X,X}^{-1}$ because each component
of a braiding is an isomorphism. In a general braided monoidal category the
same example is read in a strict model via the braided strictification of the
category.
