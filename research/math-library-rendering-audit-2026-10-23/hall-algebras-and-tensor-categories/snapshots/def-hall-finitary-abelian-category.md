---
id: def-hall-finitary-abelian-category
kind: definition
title: "Small finitary abelian categories for Hall multiplication"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-small-locally-small-and-large-category
  - def-abelian-category
  - def-exact-sequence-and-short-exact-sequence-in-an-abelian-category
  - def-extension-of-an-object-by-an-object-in-an-abelian-category
  - def-n-fold-yoneda-extension
  - def-subobject-and-quotient-object
  - def-the-quotient-of-an-object-by-a-subobject
  - def-equivalence-of-n-fold-extensions
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2, §§1.1 and 1.3"
      url: "https://arxiv.org/pdf/math/0611617v2"
    - title: "Matthew B. Young, Degenerate versions of Green’s theorem for Hall modules, arXiv:1810.08238v2, §2.1"
      url: "https://arxiv.org/pdf/1810.08238v2"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

A **small finitary abelian category** for Hall multiplication is a small
abelian category $\mathcal A$ (its object and morphism collections are sets,
by [[def-small-locally-small-and-large-category]]), with abelian structure as
in [[def-abelian-category]], in which the
following sets are finite for every pair of objects $M,N$:

1. $\operatorname{Hom}_{\mathcal A}(M,N)$;
2. $\operatorname{YExt}^{1}_{\mathcal A}(M,N)$, the set of Yoneda classes of
   short exact sequences $0\to N\to E\to M\to0$. Equivalence is the
   one-fold instance of the generated endpoint-fixed chain-map relation in
   [[def-equivalence-of-n-fold-extensions]]: chain maps are the identity on
   $N$ and $M$, and the relation is closed under reflexivity, symmetry and
   transitivity. A short exact sequence and its endpoint order use
   [[def-exact-sequence-and-short-exact-sequence-in-an-abelian-category]],
   [[def-extension-of-an-object-by-an-object-in-an-abelian-category]] and
   [[def-n-fold-yoneda-extension]].

One may instead supply a small skeleton $\mathcal A_0$ of an essentially
small abelian category and perform the construction on $\mathcal A_0$. Here
“essentially small” means that such a small equivalent category is part of the
given data; the construction does not select representatives by an unstated
choice principle. The isomorphism classes $\operatorname{Iso}(\mathcal A_0)$
then form a set.

No $\mathbb F_q$-linear structure, enough projectives or injectives, finite
number of subobjects of every object, or identification with derived
$\operatorname{Ext}^{1}$ is included in this definition. Subobjects are the
monomorphism classes of [[def-subobject-and-quotient-object]], and quotients
are the cokernels specified in [[def-the-quotient-of-an-object-by-a-subobject]].
