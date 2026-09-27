---
id: def-supersolvable-groups-and-monomial-characters
kind: definition
title: Supersolvable groups and monomial characters
status: published
origin: pipeline
deps: [def-subnormal-normal-series-refinement-and-equivalence, def-normal-subgroup, def-quotient-group, def-subrepresentation-and-irreducible-representation, def-induced-character-of-a-complex-representation]
verification:
  audited: 2026-09-24
sources:
  references:
    - title: Tammo tom Dieck, Representation Theory, Section 4.3
      url: https://www.uni-math.gwdg.de/tammo/d01.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
---

## Definition

A finite group $G$ is **supersolvable** if it has a normal series $1=G_0\triangleleft G_1\triangleleft\cdots\triangleleft G_r=G$ whose factors $G_i/G_{i-1}$ have prime order. Here “normal series” means that **every $G_i$ is normal in $G$**, not merely in $G_{i+1}$ ([[def-subnormal-normal-series-refinement-and-equivalence]]). An irreducible complex character $\chi$ of $G$ is **monomial** if $\chi=\operatorname{Ind}_H^G\lambda$ for some subgroup $H$ and linear character $\lambda$ of $H$; $G$ is monomial if all its irreducible complex characters are monomial.
