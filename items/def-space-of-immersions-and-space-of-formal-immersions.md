---
id: def-space-of-immersions-and-space-of-formal-immersions
kind: definition
title: "Space of immersions and space of formal immersions"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-formal-immersion-between-smooth-manifolds, def-weak-compact-open-smooth-topology-on-mapping-spaces, def-immersion-submersion-and-constant-rank-map, def-smooth-manifold, def-product-topology, def-countable-choice]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery, Ch. 7 §7.4 “The Smale–Hirsch classification of immersions”, printed pp. 142–146 (Theorem 7.35, Proposition 7.39)"
      url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    - title: "John Francis, The h-Principle, Lecture 3: Immersion theory (notes by O. Gwilliam), PDF pp. 1–4: Proposition 2.2 (disk), Definition 2.5 (Serre fibration), Definition 2.6 and Proposition 2.7 (flexible sheaves)"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/3immersions.pdf
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Ch. 7 §2 “Obstructions to the existence of embeddings and immersions, the Hirsch–Smale theorem”, printed pp. 226–232 (Theorem 7.5, Corollary 7.6)"
      url: http://math.stanford.edu/~ralph/bookR4.pdf
dependency_level: 1
---

## Definition

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the canonical smooth tangent bundles and the weak topology on their total spaces. For smooth manifolds $M^m,N^n$ with $m\le n$, let $\operatorname{Imm}(M,N)\subseteq C^\infty(M,N)$ be the set of immersions and let $\operatorname{FImm}(M,N)\subseteq C^\infty(M,N)\times C^\infty(TM,TN)$ be the set of formal immersions $(f,F)$. Both carry the subspace topology inherited from the weak compact-open $C^\infty$ topologies on $C^\infty(M,N)$ and $C^\infty(TM,TN)$ defined above (for $\operatorname{FImm}$ the product topology). The projection $\operatorname{FImm}(M,N)\to C^\infty(M,N)$, $(f,F)\mapsto f$, is continuous and its image contains $\operatorname{Imm}(M,N)$ under $f\mapsto(f,df)$. The formal-immersion space fibres over $C^\infty(M,N)$ with fibre over $f$ the set of injective smooth bundle maps $TM\to f^*TN$; this description is recorded but the fibre structure is not used until the normal-bundle items.
