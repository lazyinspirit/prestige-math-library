---
id: lem-rouquier-derived-comparisons-give-unique-normalized-homotopy-maps
kind: lemma
title: "Derived comparisons give unique normalized homotopy maps"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
deps: [def-rouquier-complex-of-a-braid-word, lem-rouquier-complexes-satisfy-far-commutativity, lem-rouquier-complexes-satisfy-the-three-term-braid-relation, lem-opposite-rouquier-generator-complexes-are-homotopy-inverse, def-rouquier-canonical-comparisons-between-standard-graph-tensors, lem-rouquier-generator-complexes-have-canonical-derived-graph-models, def-derived-category-of-an-abelian-category, prop-the-localization-functor-sends-quasi-isomorphisms-to-isomorphisms, def-homotopy-category-of-chain-complexes, def-type-a-standard-graph-bimodules-support-filtrations-and-character, def-equivalence-and-adjoint-equivalence-of-categories, thm-every-equivalence-can-be-made-an-adjoint-equivalence, prop-an-adjoint-equivalence-is-an-adjunction-with-invertible-unit-and-counit, thm-equivalent-encodings-of-an-adjunction, thm-bounded-bimodule-tensor-associativity-unit-and-cone-compatibility, thm-homology-factors-uniquely-through-the-homotopy-category, thm-the-canonical-pair-is-a-t-structure, def-braid-group-by-the-artin-presentation]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Raphaël Rouquier, Categorification of the braid groups, arXiv:math/0409593v1 (30 September 2004), §3 \"The 2-braid group\""
      url: "https://arxiv.org/pdf/math/0409593"
      locator: "§3.3.1 (the isomorphism $\\mathrm{Hom}_{K^b}\\cong\\mathrm{Hom}_{D^b}$ and the unique $\\gamma_{t,u}$), arXiv p. 10"
verification:
  precheck: pass
---

## Statement

Let $t$ and $u$ be signed words with the same product $w\in B_n$, and let
$F(t),F(u)$ be the corresponding word complexes of
[[def-rouquier-complex-of-a-braid-word]]. Then:

1. $\operatorname{Hom}_{K^b}(F(t),F(u))=\mathbb Q\cdot[\gamma_{t,u}]$ is
   one-dimensional over $\mathbb Q$, its generator being represented by a
   morphism of internal degree zero;
2. the canonical localization map
   $$\operatorname{Hom}_{K^b}(F(t),F(u))\longrightarrow\operatorname{Hom}_{D^b}(F(t),F(u))$$
   is an isomorphism of one-dimensional $\mathbb Q$-vector spaces;
3. the comparison element of
   [[def-rouquier-canonical-comparisons-between-standard-graph-tensors]] read
   through the derived graph models
   ([[lem-rouquier-generator-complexes-have-canonical-derived-graph-models]])
   is a nonzero element of the one-dimensional
   $\operatorname{Hom}_{D^b}(F(t),F(u))$, and there is a unique element
   $$\gamma_{t,u}\in\operatorname{Hom}_{K^b}(F(t),F(u))$$
   mapping to it. In particular $\gamma_{t,u}$ is a homotopy equivalence with
   $\gamma_{u,t}\gamma_{t,u}=\mathrm{id}$ and
   $\gamma_{t,u}\gamma_{u,t}=\mathrm{id}$, and its class is the unique
   normalized comparison between the two words.

## Facts & Assumptions

**Given:** Signed words $t,u$ with product $w$, the word complexes $F(t),F(u)$ of [[def-rouquier-complex-of-a-braid-word]], and the generator relations of [[lem-opposite-rouquier-generator-complexes-are-homotopy-inverse]], [[lem-rouquier-complexes-satisfy-far-commutativity]], [[lem-rouquier-complexes-satisfy-the-three-term-braid-relation]].

[F1] *Invertibility of word complexes.* Every word complex $F(t)$ is invertible in $K^b(R^e\text{-grmod})$: $F(t)\otimes_RF(t^{-1})\simeq R\simeq F(t^{-1})\otimes_RF(t)$, where $t^{-1}$ is the reversed word with inverted signs; this follows from the generator relations by induction on the length of the word, tensoring the identities $F_i\otimes_RF_i^{-1}\simeq R$, $F_i\otimes_RF_j\cong F_j\otimes_RF_i$ for distant $i,j$ and the three-term relation. By the Artin presentation [[def-braid-group-by-the-artin-presentation]], equal braid words differ by finitely many relation replacements and inverse-pair insertions or deletions: their quotient in the free group is a finite product of conjugates of relators. Tensoring the generator equivalences in those word contexts therefore compares any two words for the same braid. The same relations hold after localization, with tensoring by these two-sided finite-free complexes computed by ordinary totalization. ([[lem-opposite-rouquier-generator-complexes-are-homotopy-inverse]], [[lem-rouquier-complexes-satisfy-far-commutativity]], [[lem-rouquier-complexes-satisfy-the-three-term-braid-relation]], [[def-rouquier-complex-of-a-braid-word]])

[F2] *The unit and its endomorphisms.* A degree-zero bimodule map $R\to R$ is multiplication by its value at $1$, which must lie in $R_0=\mathbb Q$. The unit complexes have no possible nonzero chain homotopies, so $\operatorname{Hom}_{K^b}(R,R)=\mathbb Q\cdot\mathrm{id}$. Since both objects are modules in degree zero, their degree-zero derived-category Hom is the ordinary module Hom, giving $\operatorname{Hom}_{D^b}(R,R)=\mathbb Q\cdot\mathrm{id}$ as well: apply the boundary Hom formula of [[thm-the-canonical-pair-is-a-t-structure]] with $a=b=0$ to graded $R^e$-modules, so both cohomological and internal degrees are zero ([[def-homotopy-category-of-chain-complexes]], [[def-derived-category-of-an-abelian-category]], [[def-type-a-standard-graph-bimodules-support-filtrations-and-character]]). For $Z\simeq R$, an isomorphism in the homotopy category transports $\operatorname{Hom}_{K^b}(R,Z)$ to $\operatorname{Hom}_{K^b}(R,R)$; it does not assert a generic identification with all of $H^0(Z)_0$.

[F3] *Tensoring with an invertible object.* Let $\mathcal C$ be a monoidal category and let $X\in\mathcal C$ admit a two-sided inverse $X^{-1}$: isomorphisms $X\otimes X^{-1}\to\mathbf 1$ and $X^{-1}\otimes X\to\mathbf 1$. Using the associativity and unit isomorphisms of $\mathcal C$, these exhibit natural isomorphisms $(-\otimes X^{-1})(-\otimes X)\cong\mathrm{id}_{\mathcal C}$ and $(-\otimes X)(-\otimes X^{-1})\cong\mathrm{id}_{\mathcal C}$; hence $-\otimes X$ is an equivalence of categories with quasi-inverse $-\otimes X^{-1}$ in the sense of [[def-equivalence-and-adjoint-equivalence-of-categories]]. By [[thm-every-equivalence-can-be-made-an-adjoint-equivalence]] the pair can be equipped as an adjoint equivalence, and the adjunction then gives, by [[prop-an-adjoint-equivalence-is-an-adjunction-with-invertible-unit-and-counit]] together with [[thm-equivalent-encodings-of-an-adjunction]], a natural bijection $$\operatorname{Hom}(U\otimes X,W)\cong\operatorname{Hom}(U,W\otimes X^{-1}).$$ In $K^b(R^e\text{-grmod})$ and $D^b(R^e\text{-grmod})$ the associativity and unit isomorphisms are those of [[thm-bounded-bimodule-tensor-associativity-unit-and-cone-compatibility]] and their images under localization, so the bijection is available in both categories.

[F4] *Derived graph models.* $F(t)\cong R_{\pi(w)}(-e(t))$ and $F(u)\cong R_{\pi(w)}(-e(u))$ in $D^b(R^e\text{-grmod})$, and the comparison $c_{t,u}$ of the two words induces an isomorphism of these models whose class in $\operatorname{Hom}_{D^b}$ is nonzero; since the two Artin relations have equal exponent sums on both sides and inverse pairs have exponent zero, the exponent is invariant on braid words and $e(t)=e(u)$ and the two graph models coincide. ([[lem-rouquier-generator-complexes-have-canonical-derived-graph-models]], [[def-rouquier-canonical-comparisons-between-standard-graph-tensors]])

## Proof

**Proof technique:** direct.

1.1 By [F1] the object $F(t)$ is invertible with inverse $F(t^{-1})$, so by [F3] the functor $-\otimes_RF(t)$ is an equivalence with quasi-inverse $-\otimes_RF(t^{-1})$ and the adjunction gives a natural bijection; applied with $U=R$ and $W=F(u)$ it identifies $\operatorname{Hom}_{K^b}(F(t),F(u))$ with $\operatorname{Hom}_{K^b}(R,F(u)\otimes_RF(t^{-1}))$. The same argument applies in $D^b$ with the derived tensor product. [F1, F3]

1.2 The complex $Z:=F(u)\otimes_RF(t^{-1})$ is a word complex for the word $ut^{-1}$, which represents the trivial braid because $t$ and $u$ represent the same element; by the relations of [F1] it is homotopy equivalent to the unit complex $R$, and likewise isomorphic to $R$ in $D^b$. [F1]

2.1 By step 1.2 choose a homotopy equivalence $e:Z\to R$ and its homotopy inverse. Composition with $e$ gives a vector-space isomorphism $\operatorname{Hom}_{K^b}(R,Z)\to\operatorname{Hom}_{K^b}(R,R)=\mathbb Q$ by [F2]. Combining with step 1.1 proves that $\operatorname{Hom}_{K^b}(F(t),F(u))$ is one-dimensional in internal degree zero. [F1, F2, step 1.1, step 1.2]

3.1 Localizing the equivalence $e$ and its inverse gives the same Hom transport in $D^b$. Together with the localized tensor equivalences of step 1.1, this identifies the target Hom with $\operatorname{Hom}_{D^b}(R,R)=\mathbb Q$. The localization square commutes with these transports, and its map on $\operatorname{Hom}(R,R)$ sends the identity to the identity. It is therefore an isomorphism; hence so is the localization map on $\operatorname{Hom}(F(t),F(u))$. [F2, F3, step 1.1, step 1.2, step 2.1]

4.1 By [F4] the comparison element of the graph models is a nonzero element of the one-dimensional $\operatorname{Hom}_{D^b}(F(t),F(u))$ computed in step 3.1, so it has a unique preimage $\gamma_{t,u}$ under the localization isomorphism. Applying step 3.1 also to the pairs $(u,t)$ and $(t,t)$ shows that the localization maps $\operatorname{Hom}_{K^b}(F(u),F(t))\to\operatorname{Hom}_{D^b}(F(u),F(t))$ and $\operatorname{Hom}_{K^b}(F(t),F(t))\to\operatorname{Hom}_{D^b}(F(t),F(t))$ are isomorphisms; since the comparisons satisfy $c_{u,t}c_{t,u}=c_{t,t}=\mathrm{id}$ by [F4], the unique preimages satisfy $\gamma_{u,t}\gamma_{t,u}=\mathrm{id}$, and symmetrically $\gamma_{t,u}\gamma_{u,t}=\mathrm{id}$. Hence $\gamma_{t,u}$ is a homotopy equivalence and its class is the unique normalized comparison. [F4, step 3.1] ∎

## Remarks

The argument is Rouquier's §3.3.1: the invertibility of the word complexes makes $-\otimes_RF(t)$ an equivalence and hence $\operatorname{Hom}(F(t),F(u))\cong\operatorname{Hom}(R,F(u)\otimes_RF(t^{-1}))$ one-dimensional, and the localization isomorphism transfers the canonical comparison from $D^b$ to a unique homotopy class. The degree-zero requirement is essential: the graded endomorphism object of the unit is the polynomial ring $R$, not $\mathbb Q$, and only its internal-degree-zero part is used. The map $\gamma_{t,u}$ is normalized by the derived condition of matching $c_{t,u}$ through the graph models, and this normalization pins it down uniquely by step 4.1. No choice principle is needed: the invertibility data are fixed by the generator relations, the equivalence-to-adjunction conversion is constructive, and $\gamma_{t,u}$ is the unique preimage of $c_{t,u}$.
