---
id: def-hh-hopf-algebra-and-antipode
kind: definition
title: "Hopf algebras and antipodes"
status: published
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 2
deps: [def-hh-bialgebra-and-bialgebra-map, lem-hh-convolution-algebra-associativity-and-unit]
justified_by: [thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication, lem-hh-group-and-polynomial-hopf-algebras-exist]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a

sources:
  references:
    - title: "Hans-Jürgen Schneider, Lectures on Hopf algebras, notes by Sonia Natale"
      url: "https://www.famaf.unc.edu.ar/~andrus/papers/Schn1.pdf"
      locator: "§1, printed pp. 8 and 14–16: Hopf algebra definition as a convolution inverse and antipode properties"
    - title: "Pavel Etingof and Mykola Semenyakin, A brief introduction to quantum groups"
      url: "https://arxiv.org/pdf/2106.05252"
      locator: "§2.1.3–2.2.2, PDF pp. 3–5: antipode equations, the noninvertibility warning, and examples"

---
## Definition

A **Hopf algebra over $k$** is a bialgebra $H$ together with a $k$-linear map $S:H\to H$, called its **antipode**, such that

$$S*\mathrm{id}_H=u\varepsilon=\mathrm{id}_H*S,$$

where $*$ is the convolution product on $\operatorname{Hom}_k(H,H)$, $u:k\to H$ is the unit, and $\varepsilon:H\to k$ is the counit. Equivalently, $m(S\otimes\mathrm{id})\Delta=u\varepsilon=m(\mathrm{id}\otimes S)\Delta$. Thus $S$ is the two-sided inverse of $\mathrm{id}_H$ in the convolution algebra. This definition imposes no compositional bijectivity condition on $S$.
