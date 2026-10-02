---
id: def-picard-group-scheme
kind: definition
title: "Picard group of a scheme"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-invertible-sheaf
  - lem-invertible-sheaf-dual-tensor-inverse
  - def-sheaf-tensor-product
  - def-sheaf-hom
  - def-sheafification
  - thm-sheafification-universal-property
  - def-sheaf-on-topological-space
  - thm-symmetry-and-associativity-over-a-commutative-ring
  - thm-unit-isomorphisms-for-module-tensor-products
  - prop-functoriality-of-module-tensor-products
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-10-02
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Ravi Vakil, The Rising Sea: Foundations of Algebraic Geometry, October 21, 2011 draft, §14.1.G"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2111public.pdf"
---

## Definition

Let $X$ be a scheme. The **Picard group** $\operatorname{Pic}(X)$ is the set
of isomorphism classes $[\,\mathcal L\,]$ of invertible
$\mathcal O_X$-modules ([[def-invertible-sheaf]]), with product
$$[\,\mathcal L\,]\,[\,\mathcal M\,]:=[\,\mathcal L\otimes_{\mathcal O_X}\mathcal M\,].$$
Its identity is $[\mathcal O_X]$, and its inverse operation is
$$[\,\mathcal L\,]^{-1}=[\,\mathcal L^\vee\,],\quad \mathcal L^\vee=\mathcal Hom_{\mathcal O_X}(\mathcal L,\mathcal O_X).$$
This is an abelian group. The source states this construction as the Picard
group definition and leaves the group-law verification as an exercise
(Vakil, §14.1.G, PDF p. 308); the proof below supplies that verification.

## Facts & Assumptions

**Given:** A scheme $X$ and invertible $\mathcal O_X$-modules
$\mathcal L,\mathcal M,\mathcal N$.

[F1] Each invertible sheaf is locally isomorphic to $\mathcal O_X$;
$\mathcal O_X$ is itself invertible ([[def-invertible-sheaf]]).

[F2] The tensor-product sheaf is the sheafification of the sectionwise module tensor presheaf ([[def-sheaf-tensor-product]], [[def-sheafification]]).

[F3] A compatible morphism from a presheaf to a sheaf induces a unique sheaf
morphism from its sheafification ([[thm-sheafification-universal-property]]).

[F4] Compatible local sections of a sheaf glue uniquely
([[def-sheaf-on-topological-space]]).

[F5] Module tensor products have the natural associativity and symmetry
isomorphisms $(a\otimes b)\otimes c\mapsto a\otimes(b\otimes c)$ and
$a\otimes b\mapsto b\otimes a$
([[thm-symmetry-and-associativity-over-a-commutative-ring]]).

[F6] The module-tensor unit maps $R\otimes_RM\to M$ and
$M\otimes_RR\to M$ are isomorphisms with inverses $m\mapsto1\otimes m$ and
$m\mapsto m\otimes1$ ([[thm-unit-isomorphisms-for-module-tensor-products]]).

[F7] Tensoring morphisms is functorial and preserves identities and
compositions ([[prop-functoriality-of-module-tensor-products]]).

[F8] The dual of an invertible sheaf is invertible and evaluation gives the
isomorphism $\mathcal L^\vee\otimes\mathcal L\cong\mathcal O_X$
([[lem-invertible-sheaf-dual-tensor-inverse]]).

## Proof

**Proof technique:** local trivializations and transition functions.

1.1 Choose a common trivializing open cover for $\mathcal L$ and $\mathcal M$, with transition units $g_{ij}$ and $h_{ij}$. By [F2] and the module tensor-unit isomorphism [F6], $\mathcal L\otimes\mathcal M$ is locally $\mathcal O_U\otimes_{\mathcal O_U}\mathcal O_U\cong\mathcal O_U$ and has transition units $g_{ij}h_{ij}$; hence it is invertible. [F1, F2, F6]

1.2 If $\varphi:\mathcal L\to\mathcal L'$ and $\psi:\mathcal M\to\mathcal M'$ are isomorphisms, the local tensor maps induce a sheaf map by [F2, F3]. Tensoring their inverses gives its inverse by [F7], so the product is well-defined on isomorphism classes. [F2, F3, F7]

1.3 On a common trivializing cover for $\mathcal L,\mathcal M,\mathcal N$, the local map $((a\otimes b)\otimes c)\mapsto a\otimes(b\otimes c)$ is the module associator [F5]. It commutes with transition units because $(g_{ij}h_{ij})k_{ij}=g_{ij}(h_{ij}k_{ij})$; the maps and their inverses therefore glue to an associativity isomorphism. [F1, F2, F4, F5]

1.4 The local map $a\otimes b\mapsto b\otimes a$ from [F5] commutes with transition units because $g_{ij}h_{ij}=h_{ij}g_{ij}$. It and its reverse-order map glue by [F4] to inverse sheaf maps, giving the commutativity isomorphism. [F1, F2, F4, F5]

1.5 The local maps $a\otimes b\mapsto ab$ and their inverses $s\mapsto1\otimes s$, $s\mapsto s\otimes1$ define the left and right unit maps. They commute with transitions because the structure-sheaf transition factor is $1$, and are the module unit maps [F6]; hence they glue to inverse isomorphisms. [F1, F2, F4, F6]

2.1 By [F8], evaluation identifies $\mathcal L^\vee\otimes\mathcal L$ with $\mathcal O_X$; the commutativity isomorphism of step 1.4 gives also $\mathcal L\otimes\mathcal L^\vee\cong\mathcal O_X$. Thus every class has the displayed two-sided inverse, and the associativity and unit maps of steps 1.3 and 1.5 make the symmetric product an abelian group. [F8, step 1.3, step 1.4, step 1.5]

3.1 If $X=\varnothing$, the empty-cover sheaf axiom forces the module of sections on its only open set to be the one-element zero module. Hence there is exactly one sheaf of modules, namely $\mathcal O_\varnothing$; it is locally free of rank one vacuously, so $\operatorname{Pic}(\varnothing)$ is the trivial group. [F1, F4] ∎

On a nonempty scheme, the zero sheaf is not locally free of rank one, so it
contributes no class. The definition and proof impose no reducedness,
Noetherianity, or connectedness assumption on $X$. They make no additional
product-decomposition claim for disconnected schemes.

This item defines only the ordinary group of isomorphism classes. It defines
no Picard scheme, representing scheme, or Picard functor; every occurrence of
$\operatorname{Pic}(X)$ here refers to this group.
