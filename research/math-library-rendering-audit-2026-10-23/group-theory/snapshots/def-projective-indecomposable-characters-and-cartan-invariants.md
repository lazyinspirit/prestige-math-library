---
id: def-projective-indecomposable-characters-and-cartan-invariants
kind: definition
title: "Projective indecomposable characters and Cartan invariants"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-decomposition-numbers-and-decomposition-matrix, thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras, thm-indecomposable-projective-kg-modules-correspond-to-simple-kg-modules]
justified_by: [thm-brauer-reciprocity]
verification:
  audited: 2026-09-05
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "J. Miquel Martinez, Modular Representation Theory of Finite Groups"
      url: "https://www.uv.es/jomimar8/pdfs/course%20notes.pdf"
    - title: "Tudor Ciurca, Representation Theory"
      url: "https://www.scribd.com/document/951548499/ModRep"
---

## Definition

For each irreducible Brauer character $\varphi$, let $S_\varphi$ be the
corresponding simple $kG$-module and let $P_\varphi\to S_\varphi$ be its
projective cover. The module $P_\varphi$ is an indecomposable projective
$kG$-module, and these exhaust the indecomposable projectives up to isomorphism.

Choose a projective $\mathcal O G$-lattice $\widehat P_\varphi$ whose reduction
is $P_\varphi$. Its ordinary character $\Phi_\varphi$ is called the
**projective indecomposable character** attached to $\varphi$. The existence of
such a projective lift and the independence of its ordinary character are
proved in [[thm-brauer-reciprocity]].

For irreducible Brauer characters $\varphi,\psi$, the multiplicity of
$S_\psi$ as a composition factor of $P_\varphi$ is denoted $c_{\varphi\psi}$.
The matrix $C=(c_{\varphi\psi})$ is the **Cartan matrix** of $G$ at $p$.
