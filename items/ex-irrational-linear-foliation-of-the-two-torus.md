---
id: ex-irrational-linear-foliation-of-the-two-torus
kind: example
title: "The irrational linear foliation of the two-torus"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-regular-foliations-and-integrable-distributions-correspond,
       def-two-dimensional-torus,
       prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Keith Conrad, Local and global Frobenius theorems"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/frobthm.pdf"
---

## Example

Let $\alpha \in \mathbb R \setminus \mathbb Q$. On
$\mathbb T^2 = \mathbb R^2/\mathbb Z^2$, the constant vector field induced by
$(1,\alpha)$ defines a regular foliation. Its leaves are the images of
$$t \longmapsto [p+(t,\alpha t)] \qquad (p\in\mathbb R^2),$$
and each leaf is dense in the torus.

## Facts & Assumptions

**Given:** An irrational number $\alpha$.

[A1] Translation by $(1,\alpha)$ on $\mathbb R^2$ descends to the torus.

[A2] Equip $\mathbb R^2/\mathbb Z^2$ with its standard quotient smooth
structure, equivalently the product smooth structure on two circles.

## Verification

**Proof technique:** direct.

1.1 On the smooth torus of [A2], the constant line field spanned by $(1,\alpha)$ [A2]
is smooth and nowhere zero, so it gives a regular one-dimensional distribution
on $\mathbb T^2$. [A2, given]

1.2 The integral curve through $[p]$ is the projected affine line [given]
$t\mapsto[p+(t,\alpha t)]$. For $p=0$, fix a point $[(u,v)]$ of the torus and
a neighborhood of it. Because $\alpha$ is irrational, the set of classes
$\{[n\alpha]:n\in\mathbb Z\}$ is dense in $\mathbb R/\mathbb Z$. Choose $n$
so that $[n\alpha]$ is arbitrarily close to $[v-\alpha u]$, and set $t=u+n$.
Then $$[(t,\alpha t)]=[(u,\alpha u+n\alpha)]$$ has first coordinate $[u]$ and
second coordinate arbitrarily close to $[v]$. Thus the leaf through $[0]$ is
dense. Every other leaf is a torus translate of this one, and translations are
homeomorphisms, so every leaf is dense. [given, algebra]

2.1 Therefore the torus carries a regular foliation with dense, nonembedded [given] leaves. [given] ∎
