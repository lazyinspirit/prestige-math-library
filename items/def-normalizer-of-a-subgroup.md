---
id: def-normalizer-of-a-subgroup
kind: definition
title: 'The normalizer $N_G(H)=\{g\in G:gHg^{-1}=H\}$ of a subgroup'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-subgroup, thm-conjugation-is-an-automorphism]
justified_by: [lem-centralizers-and-normalizers-are-subgroups]
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "P. Brosnan, Undergraduate Algebra Notes, 3.14: G-Sets"
      url: "https://www.math.umd.edu/~pbrosnan/notes/ugalg/sect0035.html"
pipeline_run: null
---

## Definition

Let $H\le G$ be a subgroup ([[def-subgroup]]). The **normalizer** of $H$ in
$G$ is

$$N_G(H):=\{g\in G:gHg^{-1}=H\}.$$

Thus $g\in N_G(H)$ exactly when the conjugation automorphism $c_g$ preserves
$H$ setwise ([[thm-conjugation-is-an-automorphism]]). The subgroup property is
proved in [[lem-centralizers-and-normalizers-are-subgroups]].
