---
id: def-e8-and-d16plus-rank16-lattices
kind: definition
title: E8 ⊕ E8 and D16+ rank-16 lattice models
domain: mathematics
library: physics
category: string-theory
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
deps:
  - def-positive-even-unimodular-lattice
  - def-euclidean-inner-product
dependency_roles:
  def-positive-even-unimodular-lattice: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
justified_by:
  - lem-e8-d16plus-are-even-unimodular
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Paul Ginsparg, Applied Conformal Field Theory, arXiv:hep-th/9108028v1"
      url: "https://arxiv.org/pdf/hep-th/9108028v1"
      locator: "Chapter 7, printed pp. 104-107; the E8 root lattice and the even self-dual rank-16 lattice construction."
    - title: "Timo Weigand, Introduction to String Theory, Heidelberg lecture notes, winter term 2011/12"
      url: "https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf"
      locator: "Chapter 6.9, printed pp. 151-154, and §7.2, printed pp. 157-160; source-reported ten-dimensional heterotic alternatives."
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

For any positive integer $n$, use the following coordinate labels: for a vector $x:\{0,\ldots,n-1\}\to\mathbb R$, write $x=(x_1,\ldots,x_n)$ with $x_i:=x(i-1)$ for $1\le i\le n$. Thus $\mathbb Z^n$ consists of those vectors whose labeled coordinates are integers, and the standard inner product is $\langle x,y\rangle=\sum_{i=1}^n x_i y_i=\sum_{k=0}^{n-1}x(k)y(k)$. Write $e_i$ for the vector whose $i$-th labeled coordinate is $1$ and whose other coordinates are $0$.

For $n\in\{8,16\}$ let $D_n:=\{z=(z_1,\ldots,z_n)\in\mathbb Z^n:\sum_{i=1}^n z_i\in2\mathbb Z\}$ and $h_n:=(1/2,\ldots,1/2)\in\mathbb R^n$. In $\mathbb R^8$ with its standard inner product define $E_8:=D_8\cup(D_8+h_8)$. In $\mathbb R^{16}$ with its standard inner product define $D_{16}^{+}:=D_{16}\cup(D_{16}+h_{16})$. Define $E_8\oplus E_8:=\{(x,y)\in\mathbb R^8\oplus\mathbb R^8:x\in E_8,\ y\in E_8\}$ with the orthogonal product inner product. These are specified full lattices; their evenness and unimodularity, and the nonisometry of the two rank-16 models, are separate mathematical claims.

## Definition references

[[def-positive-even-unimodular-lattice]]

[[def-euclidean-inner-product]]
