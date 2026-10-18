---
id: def-untwisted-hall-algebra
kind: definition
title: "The untwisted Hall algebra of a finitary abelian category"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-hall-finitary-abelian-category
  - def-category
  - def-small-locally-small-and-large-category
  - def-monomorphism-and-epimorphism
  - def-isomorphism-groupoid-and-connected-category
  - def-subobject-and-quotient-object
  - def-the-quotient-of-an-object-by-a-subobject
  - thm-mutual-factorisation-defines-subobject-and-quotient-object-equivalence
  - thm-the-quotient-is-independent-of-the-representing-monomorphism
justified_by:
  - lem-untwisted-hall-product-finiteness
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2, §1.3"
      url: "https://arxiv.org/pdf/math/0611617v2"
    - title: "Matthew B. Young, Degenerate versions of Green’s theorem for Hall modules, arXiv:1810.08238v2, §2.1"
      url: "https://arxiv.org/pdf/1810.08238v2"
verification:
  precheck: n/a
---

## Definition

Let $\mathcal A$ be a small finitary abelian category in the sense of
[[def-hall-finitary-abelian-category]], and let $R$ be a commutative ring
with unit. Define the free $R$-module
$$ H_{\mathcal A,R}:=\bigoplus_{[M]\in\operatorname{Iso}(\mathcal A)}R[M], $$
where $[M]$ is a basis symbol for the isomorphism class of $M$. For objects $N,L$, let
$$\operatorname{Mon}_{\mathcal A}(N,L):=\{f\in\operatorname{Hom}_{\mathcal A}(N,L): f\text{ is monic}\}.$$
This is a finite set by the Hom condition in
[[def-hall-finitary-abelian-category]]. For $f,g$ in this set, write
$f\sim_N g$ when $g=f\circ u$ for an isomorphism $u:N\to N$; this is an
equivalence relation by [[def-isomorphism-groupoid-and-connected-category]].
The quotient set $\operatorname{Mon}_{\mathcal A}(N,L)/\sim_N$ represents
exactly the subobjects of $L$ isomorphic to $N$: each class gives the usual
subobject class from [[def-subobject-and-quotient-object]], and the mutual-
factorisation theorem says two such monomorphisms give the same subobject
exactly when they differ by such an isomorphism
([[thm-mutual-factorisation-defines-subobject-and-quotient-object-equivalence]]).
Every subobject class with domain isomorphic to $N$ is represented by composing
its monomorphism with an isomorphism from $N$, one class at a time. The
cokernel quotient is independent of that representative by
[[thm-the-quotient-is-independent-of-the-representing-monomorphism]] and
[[def-the-quotient-of-an-object-by-a-subobject]]. Define $g^L_{M,N}$ to be the
number of classes $[f]_{\sim_N}$ for which $\operatorname{coker}(f)\cong M$.
The finiteness lemma below also proves that the resulting product has finite
support. Extend the operation
$$ [M]*[N]:=\sum_{[L]\in\operatorname{Iso}(\mathcal A)}g^L_{M,N}[L] $$
$R$-bilinearly, mapping each natural number coefficient to its multiple of
$1_R$. The order is fixed: the counted short exact sequence is
$$ 0\longrightarrow N\longrightarrow L\longrightarrow M\longrightarrow0. $$

This is the **untwisted Hall product**. It does not use an Euler form, a square
root of a field size, or division by automorphism cardinalities. The finite
coefficient and finite-support claims needed for the operation to define a
bilinear product are established in
[[lem-untwisted-hall-product-finiteness]].
