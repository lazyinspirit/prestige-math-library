---
id: lem-cyclotomic-projective-covers-and-dualities-descend-through-the-quotient
kind: lemma
title: "Cyclotomic projective covers and dualities descend through the quotient"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 16
deps: [def-cyclotomic-klr-quotient-at-a-dominant-weight,
       def-divided-power-klr-idempotents-and-projectives,
       def-the-klr-cartan-pairing,
       lem-cyclotomic-klr-dot-annihilators-and-finite-root-strings,
       lem-klr-maximal-tail-restriction-and-induction-have-a-unique-simple-head,
       lem-klr-module-categories-are-krull-schmidt-with-shift-orbit-bases,
       lem-klr-projective-duality-and-positive-divided-string-leading-terms]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Seok-Jin Kang and Masaki Kashiwara, Categorification of Highest Weight Modules via Khovanov-Lauda-Rouquier Algebras, arXiv:1102.4677v4"
      url: "https://arxiv.org/pdf/1102.4677v4"
      locator: "Section 4 and Section 6: the relation between R(beta)-projectives and R^Lambda(beta)-projectives, and the perfect pairing between [Proj] and [Rep]."
    - title: "Mikhail Khovanov and Aaron D. Lauda, A diagrammatic approach to categorification of quantum groups I, Representation Theory 13 (2009) 309-347, arXiv:0803.4121v2"
      url: "https://arxiv.org/pdf/0803.4121"
      locator: "Section 2.5 and Section 3.1: Krull-Schmidt, the local endomorphism rings and the normalized self-dual divided-power projectives."
---

## Statement

Let $A=R(\beta)$ and $B=A/J$ be the standard homogeneous cyclotomic quotient.
For an indecomposable finite graded projective generic cover $P(S)$,
$B\otimes_AP(S)$ is its same-head indecomposable $B$-cover if $JS=0$, and is
zero otherwise. Every graded simple/indecomposable projective $B$-orbit arises
this way, and distinct surviving heads do not merge. Finite projective Hom
duality commutes with this base change, and finite vector duality commutes with
inflation. Thus generic normalized $\#$-self-dual covers and $D_\psi$-self-dual
simples supply unique normalized $B$-covers/simples. For these labels
$h(P,S)=\operatorname{gdim}\operatorname{HOM}_B(P,S)$ and
$T(P,S)=\operatorname{gdim}(P^\psi\otimes_BS)$ are both $\delta_{P,S}$; $T$ is
bilinear and $h$ first-bar sesquilinear. Extension induces a surjection on
projective $K_0$. No Frobenius, geometric basis or cyclotomic crystal premise
is used.

## Facts & Assumptions

**Given:** The generic KLR algebra $A=R(\beta)$ for a real symmetrizable Cartan datum, a homogeneous $\psi$-stable ideal $J$ (the standard cyclotomic ideal of [[def-cyclotomic-klr-quotient-at-a-dominant-weight]]), and $B=A/J$.

[F1] $A$ has the Krull-Schmidt property, finite graded simples are absolutely simple with endomorphism ring $k$, every simple has a finitely generated projective cover, and the local endomorphism ring of an indecomposable projective is local ([[lem-klr-module-categories-are-krull-schmidt-with-shift-orbit-bases]], [[lem-klr-maximal-tail-restriction-and-induction-have-a-unique-simple-head]]).

[F2] The normalized $\#$-self-dual divided-power covers and their positive divided-string leading terms, with the choice-free finite-module normalization clauses only ([[lem-klr-projective-duality-and-positive-divided-string-leading-terms]], [[def-divided-power-klr-idempotents-and-projectives]]).

[F3] The dot-annihilator lemma ([[lem-cyclotomic-klr-dot-annihilators-and-finite-root-strings]]) supplies finite dimensionality of $B$-blocks, hence every nonzero finite $B$-module has a simple quotient; the Cartan pairing conventions are [[def-the-klr-cartan-pairing]].

## Proof

**Proof technique:** apply the quotient adjunction to projective covers, control indecomposability through the local degree-zero endomorphism rings, then compare the two dualities and the two pairing forms.

1.1 Base change of projectives and covers. A finite graded projective $P$ is a retract of a finite sum of shifted copies of $A$, so $B\otimes_AP$ is a retract of a finite sum of shifted copies of $B$: it is finite graded projective. The quotient adjunction identifies $\operatorname{Hom}_A(P,B\otimes_AP')=\operatorname{Hom}_B(B\otimes_AP,B\otimes_AP')$, and every degree-zero endomorphism of $B\otimes_AP$ lifts through the canonical map $P\to B\otimes_AP$; endomorphisms preserve $JP$, so the induced map $\operatorname{End}^0_A(P)\to\operatorname{End}^0_B(B\otimes_AP)$ is a surjective ring homomorphism. If $P$ is indecomposable, its finite-dimensional local degree-zero endomorphism ring has no nontrivial idempotent, so a nonzero quotient has none either: $B\otimes_AP$ is zero or indecomposable. If $JS=0$, the old cover map factors through $P/JP$ and remains essential (a submodule of $B\otimes_AP$ mapping onto $S$ pulls back to a submodule of $P$ mapping onto $S$; essentiality of the old cover makes it all of $P$), so $B\otimes_AP$ is the projective cover of $S$ with the same head. If $JS\ne0$ and $B\otimes_AP\ne0$, finite dimension [F3] supplies a simple quotient, which must be the unique head $S$; as a $B$-module that quotient is annihilated by $J$, forcing $JS=0$ and contradicting the assumption, so $B\otimes_AP=0$. [F1, F3]

2.1 Every $B$-orbit arises and heads do not merge. Every simple $B$-module is a simple $A$-module by inflation, and its descended cover $B\otimes_AP(S)$ is a nonzero cover, so every $B$-simple/projective orbit arises this way. Distinct surviving heads remain distinct after quotienting because an isomorphism of the descended covers induces an isomorphism of their simple heads as $B$-modules, hence also as $A$-modules after inflation; hence the surviving projective-cover shift orbits cannot merge, and extension of scalars is surjective on projective $K_0$. [step 1.1, F1]

3.1 Dualities. For finite $P$, evaluation on shifted free modules and restriction to retracts identifies $\operatorname{HOM}_B(B\otimes_AP,B)=\operatorname{HOM}_A(P,A)\otimes_AB$, and applying the generator-fixing anti-involution $\psi$ gives $(B\otimes_AP)^\#=B\otimes_AP^\#$. Inflation does not change the finite vector duality $D_\psi$ of a simple, since the underlying vector space and the $\psi$-action are unchanged. The choice-free normalization clauses of [F2] therefore carry the unique $\#$-self-dual generic covers and $D_\psi$-self-dual simples to unique normalized $B$-covers and simples. [step 2.1, F2]

4.1 The two pairings. For normalized labels, $h(P,S)=\operatorname{gdim}\operatorname{HOM}_B(P,S)=q^a$ in a single shift $a$ because $\operatorname{End}(S)=k$ absolutely, while distinct heads give zero; assigning the simple's shift makes $h=\delta_{P,S}$. Similarly $T(P,S)=\operatorname{gdim}(P^\psi\otimes_BS)=\delta_{P,S}$ by finite-projective evaluation and $D(P^\psi\otimes S)=\operatorname{HOM}_B(P,D_\psi S)$ for evaluation of a tensor functional; $T$ is bilinear in the two arguments and $h(P,M)=T(P^\#,M)$ is first-bar sesquilinear. Extension of scalars induces the surjection on projective $K_0$ by step 2.1. No Frobenius, geometric basis or cyclotomic crystal statement is used. [step 2.1, step 3.1, F2] ∎
