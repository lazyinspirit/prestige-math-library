---
id: def-enriched-natural-transformation
kind: definition
title: "Enriched natural transformation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-enriched-functor]
aliases: []
landmark: true
verification:
  audited: 2026-09-05
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, equation (1.7)"
      url: "https://www.scribd.com/document/891660167/tr10"
    - title: "Geoffrey Cruttwell, Normed Spaces and the Change of Base for Enriched Categories, Section 2.2.2"
      url: "https://www.reluctantm.com/gcruttw/publications/thesis4.pdf"
---

## Definition

Let $T,S:\mathcal A\to\mathcal B$ be $\mathcal V$-functors
([[def-enriched-functor]]).

A **$\mathcal V$-natural transformation** $\alpha:T\Rightarrow S$ is a family
of morphisms in $\mathcal V$

$$\alpha_A:\mathbf 1\longrightarrow\mathcal B(TA,SA)$$

indexed by the objects $A$ of $\mathcal A$, such that for every pair $A,B$ the
following two composites from
$\mathcal A(A,B)\cong\mathbf 1\otimes\mathcal A(A,B)$ to
$\mathcal B(TA,SB)$ agree:

$$M^\mathcal B_{TA,SA,SB}\circ(\mathcal B(SA,SB)\otimes\alpha_A)\circ(S_{A,B}\otimes 1),$$

$$M^\mathcal B_{TA,TB,SB}\circ(\alpha_B\otimes\mathcal B(TA,TB))\circ(1\otimes T_{A,B}),$$

with the unitors inserted in the evident way to identify
$\mathcal A(A,B)$ with $\mathbf 1\otimes\mathcal A(A,B)$ and with
$\mathcal A(A,B)\otimes\mathbf 1$.

Equivalently, once the convention of
[[rem-the-order-of-the-tensor-factors-in-composition]] is fixed, the same
naturality law may be rewritten in the compact square form proved later on this
page.
