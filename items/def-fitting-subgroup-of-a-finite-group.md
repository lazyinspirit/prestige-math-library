---
id: def-fitting-subgroup-of-a-finite-group
kind: definition
title: "The Fitting subgroup $F(G)=\\prod_p O_p(G)$ of a finite group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-p-core-of-a-finite-group, def-internal-direct-product-of-subgroups]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Rachel K. Carleton, The Commuting and Cyclic Graphs of Solvable A-Groups, Chapter 2 Section 2.1"
      url: "https://etd.ohiolink.edu/acprod/odb_etd/ws/send_file/send?accession=kent1713384046910533&disposition=inline"
pipeline_run: null
---

## Definition

For a finite group $G$, the **Fitting subgroup** is $$F(G):=\prod_{p\mid |G|}O_p(G),$$ the product of its $p$-cores ([[def-p-core-of-a-finite-group]]). If $A,B\trianglelefteq G$, then $AB$ is a subgroup, is normal because $gABg^{-1}=AB$, and satisfies $AB=BA$: indeed $ab=(aba^{-1})a\in BA$, and the reverse inclusion is symmetric. Induction therefore shows that the finite product of the normal factors $O_p(G)$ is a normal subgroup independent of their order. For the trivial group the product is empty and equals $1$.
