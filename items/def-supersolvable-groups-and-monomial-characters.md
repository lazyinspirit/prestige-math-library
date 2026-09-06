---
id: def-supersolvable-groups-and-monomial-characters
kind: definition
title: Supersolvable groups and monomial characters
status: draft
origin: pipeline
deps: [def-normal-subgroup, def-quotient-group, def-subrepresentation-and-irreducible-representation, def-induced-character-of-a-complex-representation]
sources:
  references:
    - title: Tammo tom Dieck, Representation Theory, Section 4.3
      url: https://www.uni-math.gwdg.de/tammo/d01.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
---

## Definition

A finite group $G$ is **supersolvable** if it has a normal series $1=G_0\triangleleft G_1\triangleleft\cdots\triangleleft G_r=G$ whose factors $G_i/G_{i-1}$ have prime order. An irreducible complex character $\chi$ of $G$ is **monomial** if $\chi=\operatorname{Ind}_H^G\lambda$ for some subgroup $H$ and linear character $\lambda$ of $H$; $G$ is monomial if all its irreducible complex characters are monomial.
