---
id: thm-complex-exponential-surjects-onto-the-punctured-plane
kind: theorem
title: "The complex exponential maps $\\mathbb C$ onto $\\mathbb C\\setminus\\{0\\}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-polar-form-with-unique-principal-argument, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, def-natural-logarithm, thm-natural-logarithm-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I: Complex Numbers and the Complex Exponential"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: null
---

## Statement

The complex exponential maps $\mathbb C$ onto $\mathbb C\setminus\{0\}$. The conventions and prerequisite facts used below are recorded in [[thm-polar-form-with-unique-principal-argument]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[def-natural-logarithm]], [[thm-natural-logarithm-laws]].

## Facts & Assumptions

**Given:** $z\in\mathbb C\setminus\{0\}$.

## Proof

**Proof technique:** constructive.

1.1 Write $z=r(\cos\theta+i\sin\theta)$ with $r>0$. [given]

1.2 Put $w=\log r+i\theta$. [construct]

2.1 Cartesian exponential form and $e^{\log r}=r$ give $\exp w=z$. [discharge-construct] ∎
