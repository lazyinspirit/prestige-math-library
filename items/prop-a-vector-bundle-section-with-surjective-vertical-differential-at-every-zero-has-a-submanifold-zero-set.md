---
id: prop-a-vector-bundle-section-with-surjective-vertical-differential-at-every-zero-has-a-submanifold-zero-set
kind: proposition
title: "A vector bundle section with surjective vertical differential at every zero has a submanifold zero set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-the-zero-section-is-a-smooth-embedding, prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components, def-differential-of-a-smooth-map, thm-a-regular-level-set-is-an-embedded-submanifold]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---
## Statement

Let $\pi:E\to M$ be a smooth rank-$r$ vector bundle and let $s:M\to E$ be a
smooth section. For a zero $p$ of $s$, define the **vertical differential**
$D^vs_p:T_pM\to E_p$ as the induced map from $ds_p:T_pM\to T_{0_p}E$ after
quotienting by the tangent space to the zero section. If $D^vs_p$ is surjective
at every zero of $s$, then the zero set $Z(s)=\{p\in M:s(p)=0_p\}$ is an
embedded submanifold of codimension $r$.

## Facts & Assumptions

**Given:** A smooth section $s:M\to E$ of a smooth rank-$r$ vector bundle.

[L1] In a local frame, smoothness of a section is equivalent to smoothness of its
component map to $\mathbb R^r$
([[prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components]]).

[L2] A regular level set is an embedded submanifold
([[thm-a-regular-level-set-is-an-embedded-submanifold]]).

## Proof

**Proof technique:** direct.

1.1 Let $p\in Z(s)$ and choose a local frame near $p$. Then $s(x)=\sum_i f_i(x)e_i(x)$ for a smooth map $f=(f_1,\dots,f_r):U\to\mathbb R^r$. Because $s(p)=0_p$, one has $f(p)=0$. Under a change of frame by a matrix $A(x)$, the new component map is $A(x)f(x)$, whose derivative at $p$ is $A(p)df_p$ because the term $(dA)_p f(p)$ vanishes. Thus surjectivity of the vertical differential is exactly surjectivity of $df_p$, independent of the chosen frame. [L1, given]

2.1 Near $p$, the zero set of $s$ is therefore the zero set of the component map $f$, and $0\in\mathbb R^r$ is a regular value because $df_p$ is surjective. By [L2], $f^{-1}(0)$ is an embedded submanifold of codimension $r$. Doing this at every zero proves that $Z(s)$ is an embedded submanifold of codimension $r$. [L2, step 1.1, algebra] ∎