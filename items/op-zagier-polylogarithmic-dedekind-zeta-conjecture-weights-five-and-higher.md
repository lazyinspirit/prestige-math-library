---
id: op-zagier-polylogarithmic-dedekind-zeta-conjecture-weights-five-and-higher
kind: open-problem
title: "Zagier's Polylogarithmic Dedekind-Zeta Conjecture in Weights Five and Higher"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-number-field
  - def-higher-quillen-k-group-of-ring-of-integers
  - def-borel-regulator-of-a-number-field
  - thm-borel-ranks-of-higher-k-groups-of-number-fields
  - def-dedekind-zeta-function
  - def-discriminant-of-a-number-field-basis-and-order
  - def-zagier-higher-bloch-prequotient-and-polylogarithm
  - thm-zagier-polylog-regulator-well-defined
  - def-zagier-higher-bloch-group-and-polylogarithmic-regulator
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Don Zagier, Polylogarithms, Dedekind zeta functions, and the algebraic K-theory of fields"
      url: "https://people.mpim-bonn.mpg.de/zagier/files/scanned/PolylogsDedekindZetaAndKTheory/fulltext.pdf"
      locator: "§8, printed pp. 415–418, the canonical-map and regulator-lattice main conjecture."
    - title: "Steven Charlton, Herbert Gangl, and Danylo Radchenko, Explicit formulas for Grassmannian polylogarithms in weights 4 and 5"
      url: "https://arxiv.org/pdf/1909.13869"
      locator: "Introduction, printed pp. 1–3; the 2022 full author text records the proved weights 2–4 and open range $m\\ge5$."
    - title: "Steven Charlton, Herbert Gangl, and Danylo Radchenko, Explicit formulas for Grassmannian polylogarithms in weights 4 and 5"
      url: "https://doi.org/10.1016/j.jnt.2025.08.011"
      locator: "Journal of Number Theory 280 (2026), 537–582; published record and indexed introduction confirm the weight-five frontier."
verification: {}
---

## Open problem

Let $F$ be a number field and let $m\ge5$. Does there exist a canonical homomorphism

$$\mathcal B_m(F)\longrightarrow K_{2m-1}(F)$$

with finite kernel and cokernel whose composite with the Borel regulator is Zagier's polylogarithmic regulator $\rho_{m,F}$? Equivalently, is the image of $\rho_{m,F}$ a full lattice commensurable with the Borel regulator lattice, with covolume a nonzero rational multiple of

$$\frac{|D_F|^{1/2}\zeta_F(m)}{\pi^{m e_m(F)}},\qquad e_m(F)=\begin{cases}r_2,&m\text{ even},\\r_1+r_2,&m\text{ odd},\end{cases}$$

where $D_F$ is the absolute discriminant and $\mathcal B_m(F)$ and $\rho_{m,F}$ use the stated higher-Bloch-group and source-normalized regulator conventions?

## Open problem references

[[def-higher-quillen-k-group-of-ring-of-integers]]

[[def-borel-regulator-of-a-number-field]]

[[def-zagier-higher-bloch-group-and-polylogarithmic-regulator]]

[Don Zagier, *Polylogarithms, Dedekind zeta functions, and the algebraic K-theory of fields*, §8](https://people.mpim-bonn.mpg.de/zagier/files/scanned/PolylogsDedekindZetaAndKTheory/fulltext.pdf)

[Charlton, Gangl, and Radchenko, *Explicit formulas for Grassmannian polylogarithms in weights 4 and 5*, introduction](https://arxiv.org/pdf/1909.13869)

## Status

The general conjecture is open for $m\ge5$ as of the 2026 published article. The article confirms that the zeta-value conjecture is known in weights three and four and presents the weight-five Grassmannian formula as a step toward, rather than a proof of, the classical-polylogarithm conjecture. The source group's regulator well-definedness and its local comparison with the Borel regulator remain prerequisites for a fully ready formulation in this library.
