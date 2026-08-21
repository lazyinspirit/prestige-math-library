---
id: def-ck-euclidean-maps-and-diffeomorphisms
kind: definition
title: "$C^k$ Euclidean maps and diffeomorphisms"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-ck-and-multi-index-notation-in-several-variables, def-c-one-map-and-local-inverse, def-injection-surjection-bijection, thm-continuous-partial-derivatives-imply-total-differentiability]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, §§8.5–8.6"
      url: "https://jirilebl.github.io/ra/realanal2.pdf"
    - title: "University of Toronto MAT237, §3.3"
      url: "https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter3/S3.3.html"
pipeline_run: null
---

## Definition

Let $k\in\mathbb N$, let $m,q\ge1$, let $U\subseteq\mathbb R^m$ be open, and let $f:U\to\mathbb R^q$. A map $f:U\to\mathbb R^q$ is of class $C^k$ when each component is of class $C^k$. Each scalar component uses the word-derivative convention of [[def-ck-and-multi-index-notation-in-several-variables]], whose source dimension is positive. The map is **smooth**, or $C^\infty$, when it is $C^k$ for every $k\in\mathbb N$.

Let $n\ge1$ and let $U,V\subseteq\mathbb R^n$ be open. A bijection $f:U\to V$ is a **$C^k$ diffeomorphism** when both $f$ and $f^{-1}$ are $C^k$. For $k\ge1$, a **local $C^k$ diffeomorphism at $a\in U$** is a restriction $f|_P:P\to Q$ between open neighbourhoods of $a$ and $f(a)$ that is a $C^k$ diffeomorphism. At $k=1$ this agrees with [[def-c-one-map-and-local-inverse]]: continuous first partial derivatives give the required total derivative by [[thm-continuous-partial-derivatives-imply-total-differentiability]], while continuity of the total derivative gives continuity of its matrix entries and hence of the first partial derivatives.
