---
id: def-tubular-neighbourhood-of-an-embedded-submanifold
kind: definition
title: "Tubular neighbourhoods of embedded submanifolds"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-normal-and-conormal-bundles-of-an-embedded-submanifold,
       prop-normal-and-conormal-bundles-are-smooth-vector-bundles,
       def-smooth-embedding]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 11, Definition 3.53"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-11.pdf"
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Tubular Neighborhoods"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Definition

Let $i:S\hookrightarrow M$ be a smooth embedding, and suppose its normal bundle
$\nu(S)$ ([[def-normal-and-conormal-bundles-of-an-embedded-submanifold]]) has
been equipped with its standard smooth-vector-bundle structure. Under
$\mathrm{AC}_\omega$ the existence of this structure is supplied by
[[prop-normal-and-conormal-bundles-are-smooth-vector-bundles]].

A **tubular neighbourhood of $S$ in $M$** consists of:

1. an open neighbourhood $\Omega\subseteq \nu(S)$ of the zero section, and
2. a smooth embedding $\Phi:\Omega\to M$

such that:

- $\Phi(0_p)=i(p)$ for every $p\in S$, and
- $\Phi(\Omega)$ is an open neighbourhood of $i(S)$ in $M$.

Equivalently, $\Phi$ is a diffeomorphism from $\Omega$ onto an ambient open
neighbourhood of $S$, and its restriction to the zero section is the original
inclusion.
