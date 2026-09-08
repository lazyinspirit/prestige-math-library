---
id: "lem-classical-morphism-inverse-image-of-closed-is-closed"
kind: "lemma"
title: "A classical morphism pulls Zariski closed sets back to closed sets"
status: published
origin: "pipeline"
deps: ["thm-classical-affine-zero-loci-form-zariski-closed-sets", "def-classical-regular-function-on-open-set", "def-classical-affine-variety-morphism"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, §3d and Proposition 3.26, pp. 64–67"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
proof_strategy: direct
---

## Statement

An affine-target morphism $\phi:U\to Y$ pulls every Zariski closed subset of $Y$ back to a relatively closed subset of $U$, hence is continuous. The zero set of every regular function on any open of an affine algebraic set is relatively closed. For every open $W\subseteq Y$ and every regular function $s$ on $W$, $s\circ\phi$ is regular on $\phi^{-1}(W)$.

## Facts & Assumptions

**Given:** An algebraically closed field $k$, an open $U$ in an affine algebraic set $X$, an affine algebraic target $Y$, and a morphism $\phi:U\to Y$ in the global-pullback definition.

[F1] Closed subsets of Y are simultaneous coordinate polynomial zero loci ([[thm-classical-affine-zero-loci-form-zariski-closed-sets]]).

[F2] Regular functions are locally quotients of polynomial functions ([[def-classical-regular-function-on-open-set]]).

[F3] Global regular functions pull back to regular functions ([[def-classical-affine-variety-morphism]]).

## Proof

**Proof technique:** direct.

1.1 If $r$ is regular on an open $U$ and $r(x)\ne0$, write $r=a/b$ near $x$ with $b$ nowhere zero. Intersect that neighbourhood with $D(a)$; it is a neighbourhood of $x$ where $r$ is nowhere zero. Thus the nonvanishing set of $r$ is open, and its zero set is relatively closed in $U$. [F2, given]

2.1 Write $C=Y\cap V(S)$. Each coordinate polynomial restricted to $Y$ is globally regular (its denominator is 1), so F3 makes its pullback regular. Therefore $\phi^{-1}(C)$ is the intersection of their closed zero sets by step 1.1. This proves continuity, including empty and full closed sets. [F1, F3, step 1.1]

3.1 For $x\in\phi^{-1}(W)$, take a neighbourhood $W_0\subseteq W$ of $\phi(x)$ where $s=g/h$ with $h$ nowhere zero. On the open $\phi^{-1}(W_0)$, $g\circ\phi,h\circ\phi$ are regular and the latter is nowhere zero. Near $x$, write them as $a/b,c/d$ with $b,d$ nonzero. Shrink further to where $c\ne0$ using step 1.1. Then $s\circ\phi=ad/(bc)$ is a valid local quotient, proving the local pullback property. [F2, F3, step 1.1, step 2.1, algebra] ∎


## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, §3d and Proposition 3.26, pp. 64–67. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
