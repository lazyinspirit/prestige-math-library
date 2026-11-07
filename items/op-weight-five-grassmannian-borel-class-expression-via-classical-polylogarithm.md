---
id: op-weight-five-grassmannian-borel-class-expression-via-classical-polylogarithm
kind: open-problem
title: "Weight-Five Grassmannian Borel Class in Classical Polylogarithms"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-borel-regulator-of-a-number-field
  - def-zagier-higher-bloch-prequotient-and-polylogarithm
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Steven Charlton, Herbert Gangl, and Danylo Radchenko, Explicit formulas for Grassmannian polylogarithms in weights 4 and 5"
      url: "https://arxiv.org/pdf/1909.13869"
      locator: "Full 2 August 2022 author version, introduction and §5, including Theorem 19 and Conjecture 22."
    - title: "Steven Charlton, Herbert Gangl, and Danylo Radchenko, Explicit formulas for Grassmannian polylogarithms in weights 4 and 5"
      url: "https://doi.org/10.1016/j.jnt.2025.08.011"
      locator: "Final published record, Journal of Number Theory 280 (2026), 537–582; Theorem 13 and Conjecture 16 status checked from the official indexed article page."
verification: {}
---

## Open problem

Let $v_1,\dots,v_{10}\in\mathbb C^5$ be in general position, meaning every five are linearly independent, and put $\Delta(i_1,\dots,i_5)=\det(v_{i_1},\dots,v_{i_5})$. Use the projected cross-ratio and triple-ratio

$$\operatorname{cr}(abc|defg)=\frac{\Delta(abcdf)\Delta(abceg)}{\Delta(abcdg)\Delta(abcef)},\qquad r_3(ab|cde,fgh)=\frac{\Delta(abcdf)\Delta(abceh)\Delta(abdeg)}{\Delta(abcdg)\Delta(abcef)\Delta(abdeh)},$$

and set $r_3^{\pm}(ab|cde,fgh)=[r_3(ab|cde,fgh)]\pm[r_3(ab|fgh,cde)]$, where $[z]$ is the formal symbol of $z$. Let $\operatorname{Alt}_{10}$ be the signed sum over all permutations of the ten labels. The depth-two iterated integral is $I_{4,1}(x,y)=I(0;x,0,0,0,y;1)$, with $I$ the iterated integral along the source's path convention; $\operatorname{Gr}_5$ is the source-normalized weight-five Grassmannian polylogarithm. Define the corrected combination

$$T_5:=\frac{1}{640}\operatorname{Gr}_5+\frac{5}{3}\operatorname{Alt}_{10}\!\left(2I_{4,1}(\operatorname{cr}(136|2459),r_3^+(12|345,678))+I_{4,1}(\operatorname{cr}(346|1279),r_3^-(12|345,678))\right),$$

whose two-part cobracket vanishes. Is there a formal rational linear combination $Q_5(v_1,\dots,v_{10})$ of rational functions on this configuration space such that

$$\operatorname{Li}_5(Q_5(v_1,\dots,v_{10}))\equiv T_5(v_1,\dots,v_{10})\pmod{\text{products}},$$

where “modulo products” means equality in the weight-five iterated-integral quotient by products of positive weights summing to five, and such that the associated function $\phi(g_1,\dots,g_{10})=\mathcal L_5(Q_5(g_1v,\dots,g_{10}v))$ is a bounded measurable $9$-cocycle on $\mathrm{GL}_5(\mathbb C)$ whose class is a nonzero rational multiple of the weight-five Borel class $b_5^{(5)}\in H^9_{\mathrm{cts}}(\mathrm{GL}_5(\mathbb C),\mathbb R)$?

## Open problem references

[[def-borel-regulator-of-a-number-field]]

[[thm-borel-ranks-of-higher-k-groups-of-number-fields]]

[[def-zagier-higher-bloch-prequotient-and-polylogarithm]]

[Charlton, Gangl, and Radchenko, *Explicit formulas for Grassmannian polylogarithms in weights 4 and 5*, §5, Theorem 19 and Conjecture 22](https://arxiv.org/pdf/1909.13869)

[Charlton, Gangl, and Radchenko, *Explicit formulas for Grassmannian polylogarithms in weights 4 and 5*, published record](https://doi.org/10.1016/j.jnt.2025.08.011)

## Status

The 2026 published article proves an explicit depth-two iterated-integral formula for the weight-five Grassmannian polylogarithm (Theorem 13) and states a separate conjectural expression for the Borel class using weight-four depth-two integrals and functional equations (Conjecture 16). Its introduction says the further reduction to classical $\mathcal L_5$ follows only assuming the conjectural weight-five motivic Lie-coalgebra structure. Thus the classical-polylogarithm Borel-class expression in the Open problem remains conjectural. The full final journal PDF was not retrieved in this pass; the complete 2022 author preprint was read and the 2026 official publication metadata and indexed article text were checked. This item is a status formulation, not a theorem supplier.
