---
id: def-induced-homomorphism-on-fundamental-groups
kind: definition
title: "The homomorphism on fundamental groups induced by a pointed continuous map"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-based-loops-and-fundamental-group, thm-fundamental-group-laws, def-continuous-map-top,
       def-group-homomorphism]
justified_by: [thm-induced-fundamental-group-map-functoriality]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Chapter 1, Induced Homomorphisms"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
pipeline_run: null
---

## Definition

Let $f:X\to Y$ be continuous and let $x_0\in X$. Composition sends a loop
$\alpha$ at $x_0$ to the loop $f\circ\alpha$ at $f(x_0)$. Using the loop
classes and fundamental group of [[def-based-loops-and-fundamental-group]],
the proposed
**induced homomorphism** is

$$f_*:\pi_1(X,x_0)\longrightarrow\pi_1(Y,f(x_0)),\qquad f_*([\alpha]):=[f\circ\alpha].$$

The next theorem proves that this value is independent of the representative,
that it is a group homomorphism in the sense of [[def-group-homomorphism]], and
that induced maps respect identities, composition and homotopies that fix the
basepoint.
