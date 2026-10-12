---
id: def-cohomological-mixed-hodge-complex
kind: definition
title: "Cohomological mixed Hodge complexes"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-rational-mixed-hodge-structure]
sources:
  references:
    - title: "Pierre Deligne, Theorie de Hodge II"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0/"
    - title: "Pierre Deligne, Theorie de Hodge III"
      url: "https://www.numdam.org/item/PMIHES_1974__44__5_0/"
---

## Definition

A rational cohomological mixed Hodge complex consists of a bounded-below complex $(K_{\mathbb Q},W)$, a complex $(K_{\mathbb C},W,F)$ and a filtered comparison quasi-isomorphism $K_{\mathbb Q}\otimes\mathbb C\simeq K_{\mathbb C}$. Each weight graded complex must have finite-dimensional cohomology, and its differential must be strict for $F$; its degree-$r$ cohomology with the induced $F$ and rational comparison is a pure Hodge structure of weight $r+w$ on $H^r(\operatorname{Gr}^W_wK)$. Strictness for $F$ here equivalently says the $F$ spectral sequence of the graded complex degenerates at its first page. Filtrations are finite in the range contributing to each cohomological degree. Morphisms preserve the filtrations and comparisons, with compatible filtered homotopies permitted.

For a complex of sheaves the same definition is made after derived global sections, using resolutions preserving graded pieces; a Godement resolution does so since its terms and successive cokernels are exact in the sheaf. All sheaf comparisons and global sections are derived. The weight filtration on $H^n(K)$ is the shifted filtration $W_mH^n(K)=\operatorname{im}(H^n(W_{m-n}K)\to H^n(K))$. This shift is essential; pole-count weight on a logarithmic complex is not the weight on its degree-$n$ cohomology.
