---
id: rem-free-product-and-amalgamation-conventions
kind: remark
title: "Conventions and proved scope for free products and amalgamation"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-free-product-of-a-family-of-groups, def-pushout-of-group-homomorphisms, def-free-product-with-amalgamation, thm-normal-form-for-free-products-with-amalgamation, prop-kernels-of-amalgamating-maps-collapse-in-the-pushout]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "George D. Torres, Combinatorial Group Theory, §2"
      url: "https://web.ma.utexas.edu/users/gdavtor/notes/comb_group_theory.pdf"
    - title: "B. H. Neumann, Lectures on Topics in the Theory of Infinite Groups, Ch. 9"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr21.pdf"
pipeline_run: null
---
## Remark

Free products here allow arbitrary index sets, and group pushouts allow arbitrary homomorphisms. The notation $G\ast_KH$ is reserved for injective maps from $K$; only in that setting do the normal-form, factor-embedding, and intersection theorems apply. The kernel-collapse proposition explains why those conclusions fail for general pushouts. HNN extensions, Kurosh and Grushko theorems, and Bass-Serre theory require machinery outside this development's declared prerequisites.
