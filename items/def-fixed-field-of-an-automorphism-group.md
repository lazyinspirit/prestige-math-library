---
id: def-fixed-field-of-an-automorphism-group
kind: definition
title: "The fixed field $K^G$ of a group of field automorphisms"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-relative-field-automorphism-group]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Section 3"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "K. Conrad, The Galois Correspondence, Sections 4-5"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/galoiscorr.pdf"
pipeline_run: null
---

## Definition

Let $K$ be a field and let $G$ be a subgroup of its automorphism group. The
**fixed field** of $G$ is

$$K^G:=\{x\in K:\sigma(x)=x\text{ for every }\sigma\in G\}.$$

This is a subfield of $K$. Every field automorphism fixes $0$ and $1$, so these
elements lie in $K^G$. If $x,y\in K^G$ and $\sigma\in G$, then
$\sigma(x-y)=x-y$ and $\sigma(xy)=xy$; if also $x\ne0$, then
$\sigma(x^{-1})=\sigma(x)^{-1}=x^{-1}$. Thus $K^G$ is closed under subtraction,
multiplication, and inverses of nonzero elements. In particular, when
$G\le\operatorname{Aut}(K/F)$ ([[def-relative-field-automorphism-group]]), one
has $F\subseteq K^G\subseteq K$.
