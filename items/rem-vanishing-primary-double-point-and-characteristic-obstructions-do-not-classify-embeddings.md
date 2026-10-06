---
id: rem-vanishing-primary-double-point-and-characteristic-obstructions-do-not-classify-embeddings
kind: remark
title: Vanishing primary and characteristic obstructions do not classify embeddings
status: draft
origin: session
dependency_level: 10
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
- lem-the-second-homotopy-group-of-so-three-vanishes
- thm-oriented-clutching-classifies-oriented-bundles-over-spheres
- def-pontryagin-classes-by-complexification
- def-stiefel-whitney-classes-from-the-projective-bundle-relation
- def-axiom-of-choice
- def-primary-double-point-obstruction-to-removing-self-intersections
- prop-whitney-disjunction-removes-algebraically-cancelling-double-points-in-the-stable-range
- def-smooth-embedding
- def-regular-homotopy-of-immersions
- def-immersion-submersion-and-constant-rank-map
- thm-isotopy-extension
justified_by: []
external_refs:
- rem-metastable-embedding-classification-requires-additional-deleted-product-machinery
aliases: []
landmark: false
sources:
  references:
  - title: Arkadiy Skopenkov, Embedding and Knotting of Manifolds in Euclidean Spaces (arXiv:math/0604045), §1,
      article pp. 2–5 (self-intersection set; ambient versus non-ambient isotopy) and §2, article pp. 6–14 (Theorems
      2.1–2.3 and 2.8; the modulo 2 and integral Whitney obstruction; the Whitney invariant); §3 and §5 used only
      for the recorded knotting boundary
    url: https://arxiv.org/pdf/math/0604045
  - title: C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, Cambridge University
      Press 2016; full text retrieved from the Internet Archive Wayback Machine snapshot of the ETH Zürich course
      copy), Chapter 6 §§6.2–6.4, printed pp. 169–192 (Theorem 6.2.1; Propositions 6.3.1 and 6.3.3; Theorems 6.3.2,
      6.3.4, 6.3.6, 6.4.5, 6.4.8 and 6.4.9; Lemma 6.3.5)
    url: https://web.archive.org/web/20241113132819/https://people.math.ethz.ch/~dkosanovic/24-FS/Wall-Differential-Topology.pdf
---
## Remark

Assume AC for the characteristic-class clauses ([[def-axiom-of-choice]]). Every embedding is an immersion with empty double point set ([[def-smooth-embedding]], [[def-immersion-submersion-and-constant-rank-map]]), so the primary double point obstruction of [[def-primary-double-point-obstruction-to-removing-self-intersections]] vanishes for every embedding; and its normal bundle satisfies the usual rank restrictions on characteristic classes. A rank-$k$ real bundle has $w_i=0$ for $i>k$ and $p_i=0$ for $2i>k$; the cohomological degree $4i$ of $p_i$ need not be at most $k$ ([[def-stiefel-whitney-classes-from-the-projective-bundle-relation]], [[def-pontryagin-classes-by-complexification]]). Nevertheless these vanishings do not classify embeddings up to isotopy, and Smale–Hirsch theory for immersions must not be applied to embeddings without additional knotting data.

The standard witness is codimension three: the standard embedding $S^3\hookrightarrow\mathbb R^6$ and a knotted embedding $S^3\hookrightarrow\mathbb R^6$ (Haefliger's trefoil) are both injective immersions with empty double point sets and trivial normal bundles — their normal bundles are oriented rank-three bundles, classified by $[S^2,SO(3)]=0$ by [[thm-oriented-clutching-classifies-oriented-bundles-over-spheres]] and [[lem-the-second-homotopy-group-of-so-three-vanishes]] — and they are not isotopic; in the strict metastable classification range the Haefliger–Weber isovariant (deleted-product) invariant supplies the additional data, and this boundary is recorded, not proved, in [[rem-metastable-embedding-classification-requires-additional-deleted-product-machinery]]. This witness shows that these primary and characteristic data do not classify embeddings in general. It does not assert that every characteristic class must vanish for every embedding, or that no restricted embedding problem can be classified by such data.

Consequently the disjunction statement of [[prop-whitney-disjunction-removes-algebraically-cancelling-double-points-in-the-stable-range]] is a statement about regularly homotoping a self-transverse immersion, not about isotoping embeddings, and [[thm-isotopy-extension]] converts isotopies of embeddings into ambient isotopies only for families that are already given. The cancellation criterion concerns the finite branch-pair count and admissible Whitney circles, with self-transverse endpoints. In the simply connected oriented even-dimensional stable range it supplies a regular homotopy to an embedding after first separating triple images; it does not supply an isotopy between two given embeddings.
