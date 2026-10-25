---
id: def-retraction-and-deformation-retract
kind: definition
title: "Retractions and deformation retracts, with a deformation retraction required to fix the retract pointwise"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-homotopy-relative-and-path-homotopy, def-continuous-map-top, def-subspace-topology-top]
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Section 0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
pipeline_run: null
---

## Definition

Let $A\subseteq X$ carry the subspace topology, and let $i:A\hookrightarrow X$ be the inclusion ([[def-subspace-topology-top]]).

A continuous map $r:X\to A$ is a **retraction of $X$ onto $A$** if

$$r\circ i=\operatorname{id}_A,$$

equivalently, if $r(a)=a$ for every $a\in A$. When such an $r$ exists, $A$ is a **retract** of $X$.

The subspace $A$ is a **deformation retract** of $X$ if there are a retraction $r:X\to A$ and a homotopy

$$H:\operatorname{id}_X\simeq_A i\circ r.$$

Thus $H(x,0)=x$, $H(x,1)=i(r(x))$, and $H(a,t)=a$ for all $a\in A$ and $t\in I$ ([[def-homotopy-relative-and-path-homotopy]]). The pair $(r,H)$ is a **deformation retraction**.

Some sources call the pointwise-fixed condition a *strong deformation retract*. In this library the word *deformation retract* always includes it.
