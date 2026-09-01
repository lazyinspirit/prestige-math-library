---
id: def-canonical-map-to-the-profinite-completion
kind: definition
title: "The canonical map sends g to its coherent system of residue classes"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-profinite-completion-of-an-abstract-group]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Brian Osserman, Math 6112 notes on inverse limits and profinite groups"
      url: "https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf"
    - title: "H. W. Lenstra, Profinite groups and Galois groups"
      url: "https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf"
---

## Definition

For an abstract group $G$, the **canonical map** to the profinite completion is

$$\iota_G:G\to \widehat G, \qquad \iota_G(g):=(gN)_N,$$

where the $N$th coordinate is the coset of $g$ in $G/N$. Compatibility of these
coordinates is immediate from the quotient-transition maps in
[[def-profinite-completion-of-an-abstract-group]].
