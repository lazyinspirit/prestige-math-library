---
id: def-partition-arrow-notation
kind: definition
title: "Partition arrows and homogeneous sets"
status: published
origin: pipeline
deps: [def-cardinal]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Monk, Set theory following Jech (2024), Chapter 29 opening partition definitions, printed p647; zero-arity and empty-subset conventions made explicit"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
---

## Definition

Let $\kappa,\lambda$ be cardinals as in [[def-cardinal]], let $n<\omega$, and let $r$ be a nonzero cardinal of colors. Write $[X]^n=\{u\subseteq X:|u|=n\}$. A set $H\subseteq X$ is **homogeneous for** $c:[X]^n\to r$ if some $i<r$ satisfies $c(u)=i$ for all $u\in[H]^n$. The cardinal partition arrow

$$\kappa\longrightarrow(\lambda)^n_r$$

means that every map $c:[\kappa]^n\to r$ admits such an $H$ with $|H|=\lambda$. The negated arrow asserts that some coloring has no such homogeneous set. Here the size target is a cardinal; an ordinal order-type target would require a separately stated convention.

The parameter $n$ is fixed before the coloring is quantified; this is not a simultaneous homogeneity assertion for all finite arities. The color cardinal $r$ may be infinite, while the infinite Ramsey theorem below restricts it to a positive finite integer. If $r=1$, every subset is homogeneous. If $n=0$, $[H]^0=\{\varnothing\}$ for every $H$, so every subset is homogeneous, with color $c(\varnothing)$. If $|H|<n$ and $n>0$, the homogeneous requirement is vacuous, with any color $i<r$. These conventions include $H=\varnothing$. We exclude $r=0$ to avoid vacuous nonexistence of colorings. If $\lambda>\kappa$, the arrow fails: the constant-zero coloring exists since $r\ne0$, but there is no subset of cardinality $\lambda$.
