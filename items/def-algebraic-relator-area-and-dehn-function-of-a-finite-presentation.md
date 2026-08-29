---
id: def-algebraic-relator-area-and-dehn-function-of-a-finite-presentation
kind: definition
title: "Algebraic relator area and the Dehn function of a finite presentation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-word-problem-for-a-fixed-finite-presentation, prop-normal-closure-is-products-of-conjugates]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-29
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "John Meier, Groups, Graphs and Trees"
      url: "https://web.archive.org/web/20260221182226if_/https://www.scribd.com/document/971180914/Groups-graphs-and-trees-An-introduction-to-the-geometry-of-infinite-groups-1st-Edition-John-Meier"
    - title: "Dexter Chua after H. Wilton, Topics in Geometric Group Theory"
      url: "https://dec41.user.srcf.net/h/IV_M/topics_in_geometric_group_theory/full"
pipeline_run: null
---

## Definition

Fix a finite presentation $\mathcal P=\langle X\mid R\rangle$. If a word $w$ on
$X\sqcup X^{-1}$ is trivial in the presented group, then by
[[prop-normal-closure-is-products-of-conjugates]] it can be written in the free
group as

$$w=\prod_{j=1}^m u_j r_j^{\varepsilon_j} u_j^{-1},$$

where each $r_j\in R$ and each $\varepsilon_j\in\{1,-1\}$.

The **algebraic relator area** $\operatorname{Area}_{\mathcal P}(w)$ is the
least such integer $m$. The **Dehn function** of $\mathcal P$ is

$$\delta_{\mathcal P}(n)=\max\{\operatorname{Area}_{\mathcal P}(w): w=_{\mathcal P}1,\ |w|\le n\}.$$

It is defined on $\mathbb N$ and only measures null words.
