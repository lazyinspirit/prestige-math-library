---
id: lem-abelian-scheme-fibrewise-constant-morphism-rigidity
kind: lemma
title: "Fibrewise constant morphisms from an abelian scheme factor through the base"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-abelian-scheme
  - lem-abelian-scheme-universal-structure-sheaf-sections
  - thm-proper-morphism-closed-image
  - lem-proper-stable-base-change
  - thm-morphisms-into-affine-scheme-global-sections
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "J. S. Milne, Abelian Varieties, v2.00 (2008), Chapter I sections 3, 5, 8 (rigidity)"
      url: "https://www.jmilne.org/math/CourseNotes/AV.pdf"
---

## Statement

Assume AC and DC. Let $A\to S$ be an abelian scheme ([[def-abelian-scheme]]), let $T\to S$ be any morphism, write $A_T=A\times_ST$ with structure morphism $f_T:A_T\to T$ and unit section $e_T:T\to A_T$, and let $Z$ be any scheme. If a morphism $u:A_T\to Z$ sends each geometric fibre of $f_T$ to a single point, then
$$u=u\circ e_T\circ f_T$$
as morphisms $A_T\to Z$.

## Facts & Assumptions

**Given:** AC and DC, an abelian scheme $A\to S$, a morphism $T\to S$, a scheme $Z$ and a morphism $u:A_T\to Z$ which is constant on geometric fibres over $T$.

[F1] $\mathcal O_T\to f_{T,*}\mathcal O_{A_T}$ is an isomorphism for every base change, with inverse evaluation along the identity section ([[lem-abelian-scheme-universal-structure-sheaf-sections]], assuming AC and DC).

[F2] A proper morphism has closed image, and properness is stable under base change; the base change $f_T$ is proper ([[thm-proper-morphism-closed-image]], [[lem-proper-stable-base-change]], [[def-abelian-scheme]]).

[F3] Morphisms into an affine scheme correspond to ring maps on global sections ([[thm-morphisms-into-affine-scheme-global-sections]]).

## Proof

**Proof technique:** direct: shrink the target to an affine neighbourhood of each fibre image and factor the restriction through the base.

1.1 Fix $t\in T$ and choose an affine open $W=\operatorname{Spec}B\subseteq Z$ containing the image point of the fibre $A_t$; this is possible because the fibre image is a single point. The complement $Z\setminus W$ is closed, and since $f_T$ is proper by [F2] the set $u^{-1}(Z\setminus W)$ has closed image in $T$; by construction that image misses $t$. Choose an affine neighbourhood $V=\operatorname{Spec}R$ of $t$ disjoint from the image; then $f_T^{-1}(D)$ for $D=T\setminus V$ is closed in $A_T$ and disjoint from $A_V$, so $u|_{A_V}$ lands in $W$. Thus over an affine neighbourhood of every point the map factors through an affine target. [F2, given, construct]

2.1 On $A_V$ the structure morphism $f_V:A_V\to V$ is proper and the restriction $u_V:A_V\to W=\operatorname{Spec}B$ corresponds by [F3] to a ring map $B\to\Gamma(A_V,\mathcal O_{A_V})$. The universal-sections lemma [F1] identifies $\Gamma(A_V,\mathcal O_{A_V})=\Gamma(V,\mathcal O_V)=R$, so this ring map factors through $R$ and defines a morphism $g_V:V\to W=\operatorname{Spec}B$ with $u|_{A_V}=g_V\circ f_V$. Evaluating along the unit section gives $u|_{A_V}\circ e_V=g_V$, so $u|_{A_V}=u|_{A_V}\circ e_V\circ f_V$. [F1, F3, step 1.1, algebra]

3.1 The local factorizations of step 2.1 agree on overlaps: on $V_1\cap V_2$ both $g_{V_1}$ and $g_{V_2}$ equal $u\circ e$ evaluated there, because $f$ restricted to the unit section is an isomorphism onto the base; hence they glue to a morphism $g:T\to Z$ with $u=g\circ f_T$, and $g=u\circ e_T$ by the same evaluation. Therefore $u=u\circ e_T\circ f_T$. This controls nilpotents: the factorization is an identity of morphisms, not merely of geometric points. [F1, step 2.1, algebra] ∎ 