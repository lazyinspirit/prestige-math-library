---
id: def-regular-locus-of-a-c-one-map
kind: definition
title: "The regular locus of a square-dimensional $C^1$ map"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-c-one-map-and-local-inverse, def-invertible-euclidean-linear-map]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, §8.5"
      url: "https://jirilebl.github.io/ra/realanal2.pdf"
    - title: "University of Toronto MAT237, §3.3"
      url: "https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter3/S3.3.html"
pipeline_run: null
---

## Definition

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open, and let $f:U\to\mathbb R^n$ be $C^1$ in the sense of [[def-c-one-map-and-local-inverse]]. A point $a\in U$ is **regular** when the linear map $Df(a)$ is invertible ([[def-invertible-euclidean-linear-map]]). The **regular locus** is

$$\operatorname{Reg}(f):=\{a\in U:Df(a)\text{ is invertible}\}.$$

Its complement in $U$ is the **singular locus** of $f$.
