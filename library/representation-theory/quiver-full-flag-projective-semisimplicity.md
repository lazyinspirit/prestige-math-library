---
page: quiver-full-flag-projective-semisimplicity
title: "Quiver Full Flag Projective Semisimplicity"
status: draft
items: [lem-quiver-full-flag-incidence-has-a-smooth-projective-compactification,
        cor-quiver-full-flag-pushforwards-are-semisimple-in-characteristic-zero]
requires:
  - complex-algebraic-stratified-topology
  - equivariant-constructible-perverse-foundations
  - finite-proper-and-projective-morphisms
  - products-segre-and-veronese-embeddings-and-grassmannians
  - proj-projective-schemes-twisting-sheaves-and-ampleness
  - projective-perverse-hard-lefschetz-and-decomposition
  - relations-functions-and-quotients
---

**Objective.** This page builds the geometric input for semisimple pushforwards
along quiver full-flag incidence maps. For a finite loopless complex quiver with
arbitrary finite arrow multiplicities, a dimension vector and a color word, the
incidence of stable flags inside the representation space is a vector subbundle
of the product of the representation space with the full graded flag variety;
the first lemma computes its rank
$\sum_{h:i\to j}\#\{(p,q):\nu_p=i,\nu_q=j,q<p\}$ and dimension, proves that the
projection is projective, and exhibits explicit smooth projective
compactifications, both on the original incidence and on the finite
Grassmannian models formed from tautological bundles, obtained by adjoining a
trivial line and projectivizing.

The corollary then shows that for every coefficient field of characteristic
zero the proper pushforward of the constant sheaf along the incidence
projection, shifted by the dimension of the incidence, is a finite direct sum
of shifts of simple equivariant perverse sheaves in the bounded equivariant
constructible derived category, and that the finite sum over all color words is
semisimple. The proof avoids semismallness of the fibers entirely: it bounds the
ordinary amplitude through the finite conical cochain models, transports the
pushforwards across one sufficiently large Stiefel frame model, decomposes them
on that model by the compact smooth-source projective semisimplicity theorem,
restricts back along the open chart and lifts the resulting idempotents through
the perverse normalization. No finite-ADE hypothesis and no affine paving of
the fibers of the incidence projection is used. The companion page records the
two boundary phenomena: a one-vertex empty-arrow flag variety whose incidence
map to a point is not semismall, and the full multiplicity range of the two-vertex
incidence compactifications.
