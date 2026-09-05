---
id: def-decomposition-numbers-and-decomposition-matrix
kind: definition
title: "Decomposition numbers and the decomposition matrix"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-decomposition-map-from-ordinary-to-modular-grothendieck-groups, thm-decomposition-map-is-independent-of-the-stable-lattice, thm-irreducible-brauer-characters-form-a-basis-of-p-regular-class-functions]
verification:
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

Let $\chi$ run through the ordinary irreducible characters of $G$, and let
$\varphi$ run through the irreducible Brauer characters. If $[V_\chi]$ is the
class of the ordinary irreducible affording $\chi$, the well-defined
decomposition map of
[[thm-decomposition-map-is-independent-of-the-stable-lattice]] has a unique
expansion

$$d([V_\chi])=\sum_\varphi d_{\chi\varphi}[S_\varphi],$$

where $S_\varphi$ is the simple $kG$-module affording $\varphi$.
The classes of the simple modules form the integral basis of the Grothendieck
group, so the coefficients $d_{\chi\varphi}$ are integers. Additivity of Brauer
characters on composition series gives the equivalent character identity

$$\chi^0=\sum_\varphi d_{\chi\varphi}\varphi.$$

The integers $d_{\chi\varphi}$ are the **decomposition numbers**, and the
matrix $D=(d_{\chi\varphi})$ is the **decomposition matrix** of $G$ at $p$.
