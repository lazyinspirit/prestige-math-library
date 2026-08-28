---
id: def-modular-lattice
kind: definition
title: "Modular lattice"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-lattice-distributive-lattice-and-order-ideal]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Daniel Murfet, Abelian Categories, Section 4.1"
      url: "https://therisingsea.org/notes/AbelianCategories.pdf"
pipeline_run: frontier-22
---

## Definition

A lattice $L$ ([[def-lattice-distributive-lattice-and-order-ideal]]) is
**modular** when for every $x,y,z\in L$ with $x\le z$ one has

$$x\vee(y\wedge z)=(x\vee y)\wedge z.$$

The hypothesis $x\le z$ is part of the law. Without it, the displayed identity
need not hold.
