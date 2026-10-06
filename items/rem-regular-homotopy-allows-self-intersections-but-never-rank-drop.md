---
id: rem-regular-homotopy-allows-self-intersections-but-never-rank-drop
kind: remark
title: "Regular homotopy allows self-intersections but never rank drop"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-regular-homotopy-of-immersions, def-immersion-submersion-and-constant-rank-map, cor-the-immersion-and-submersion-loci-are-open, def-smooth-family-of-maps-and-evaluation-map, rem-sphere-eversion-cannot-be-an-isotopy-through-embeddings]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ralph L. Cohen, Immersions of Manifolds and Homotopy Theory (Harvard CMSA Math-Science Literature Lecture write-up, June 30 2022), §2.1 eversion paragraph"
      url: https://math.stanford.edu/~ralph/immersions-final.pdf
      locator: "PDF pp. 4–10; during an eversion the slices must acquire self-intersections while remaining immersions"
    - title: "John Francis, The h-Principle, Lecture 9: Immersions into Euclidean space, from Smale to Cohen (notes by M. Hoyois)"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/9euclidean.pdf
      locator: "PDF pp. 1–3; the immersion condition is open in the strong topology on a compact source"
dependency_level: 16
---

## Remark

A regular homotopy $H:M\times[0,1]\to N$ of immersions requires every slice
$H_t$ to be immersive ([[def-regular-homotopy-of-immersions]],
[[def-smooth-family-of-maps-and-evaluation-map]]): the rank of $dH_t$ is
$\dim M$ at every point of every slice
([[def-immersion-submersion-and-constant-rank-map]]), and no slice may contain a
point of rank drop, a cusp of the parametrised family or a point whose
derivative degenerates.

Self-intersections, by contrast, are permitted: an immersion may identify two
distinct points $x\ne y$ with $H_t(x)=H_t(y)$ as long as the differential is injective at each point. Their tangent
images may coincide; transversality is not required by the immersion condition. During an eversion of $S^2$ in $\mathbb R^3$ the slices must
acquire self-intersections and cannot be embeddings
([[rem-sphere-eversion-cannot-be-an-isotopy-through-embeddings]]), while no
slice may have a rank drop, so the two phenomena are logically independent.

For a fixed smooth map, the set of source points where its differential has
full rank is open ([[cor-the-immersion-and-submersion-loci-are-open]]).
This is a statement about the source, rather than about a topology on a space
of maps. A smooth family is a regular homotopy exactly when every slice is an
immersion; immersive slices for $t<1$ do not guarantee an immersive final slice.
