---
id: def-decomposition-map-from-ordinary-to-modular-grothendieck-groups
kind: definition
title: "Decomposition map from ordinary to modular Grothendieck groups"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-og-lattice-and-reduction-modulo-the-maximal-ideal, lem-reduction-of-an-og-lattice-is-a-finite-dimensional-kg-module, thm-brauer-character-is-additive-on-short-exact-sequences]
justified_by: [thm-decomposition-map-is-independent-of-the-stable-lattice]
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

Let $R_K(G)$ be the Grothendieck group of finite-dimensional $KG$-modules and
$R_k(G)$ the Grothendieck group of finite-dimensional $kG$-modules. If
$V$ is a finite-dimensional $KG$-module and $L\subseteq V$ is a $G$-stable
$\mathcal O G$-lattice, define

$$d([V]):=[L/\mathfrak mL]\in R_k(G).$$

The map $d:R_K(G)\to R_k(G)$ is called the **decomposition map**. Its
well-definedness with respect to the chosen stable lattice is proved in
[[thm-decomposition-map-is-independent-of-the-stable-lattice]].

If $\chi$ is the ordinary character of $V$, then the restriction $\chi^0$ to
$G^0$ is the Brauer character of the modular class $d([V])$.
