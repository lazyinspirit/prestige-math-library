---
id: thm-injective-regular-c-one-map-is-a-diffeomorphism-onto-its-image
kind: theorem
title: "An injective regular $C^1$ map is a diffeomorphism onto its image"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-regular-locus-of-a-c-one-map, cor-c-one-local-diffeomorphisms-are-open-maps, def-c-one-map-and-local-inverse, thm-euclidean-inverse-function-theorem, def-homeomorphism-and-open-maps]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "University of Toronto MAT237, §3.3"
      url: "https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter3/S3.3.html"
    - title: "J. Lebl, Basic Analysis II, §8.5"
      url: "https://jirilebl.github.io/ra/realanal2.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open, and let $f:U\to\mathbb R^n$ be injective and $C^1$. Suppose $Df(x)$ is invertible for every $x\in U$, equivalently $U=\operatorname{Reg}(f)$ ([[def-regular-locus-of-a-c-one-map]]). Then $f[U]$ is open and $f:U\to f[U]$ is a $C^1$ diffeomorphism. Its inverse $g$ satisfies

$$Dg(f(x))=Df(x)^{-1}\qquad(x\in U).$$

## Facts & Assumptions

**Given:** The hypotheses in the Statement and the definitions of a local inverse and diffeomorphism ([[def-c-one-map-and-local-inverse]], [[def-homeomorphism-and-open-maps]]).

[L1] Let $f:U\to\mathbb R^n$ be $C^1$ and suppose $Df(x)$ is invertible for every $x\in U$. Then $f$ maps every open subset of $U$ to an open subset of $\mathbb R^n$ ([[cor-c-one-local-diffeomorphisms-are-open-maps]]).

[L2] For the local inverse $g$ supplied by the inverse function theorem, $$Dg(y)=Df(g(y))^{-1}\qquad(y\in W).$$ ([[thm-euclidean-inverse-function-theorem]])

## Proof

**Proof technique:** direct.

1.1 By [L1], $f[U]$ is open and the continuous bijection $f:U\to f[U]$ is open. Therefore its inverse $g:f[U]\to U$ is continuous. [L1, given]

2.1 Fix $y\in f[U]$. The unique global inverse agrees near $y$, by injectivity, with the local inverse from [L2]. Hence $g$ is $C^1$ near every image point and satisfies $Dg(y)=Df(g(y))^{-1}$ there. This proves the stated global $C^1$ diffeomorphism and derivative formula. [step 1.1, L2, given] ∎
