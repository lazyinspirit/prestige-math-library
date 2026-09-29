---
id: thm-proper-quasi-finite-is-finite
kind: theorem
title: "A proper quasi-finite morphism is finite"
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-axiom-of-choice
  - def-proper-morphism
  - def-quasi-finite-morphism-schemes
  - def-finite-morphism-schemes
  - lem-finite-morphism-affine
  - lem-affine-morphism-separated
  - lem-proper-source-to-separated-target-proper
  - lem-closed-immersion-affine-quotient-and-base-change
  - lem-scheme-zariski-main-factorization-quasi-finite
  - thm-proper-morphism-closed-image
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Section 29.44 (finite morphisms)"
      url: https://stacks.math.columbia.edu/tag/01WG
---

## Statement

Assume the Axiom of Choice. Every proper quasi-finite morphism of schemes
$f:X\to S$ is finite ([[def-proper-morphism]],
[[def-quasi-finite-morphism-schemes]], [[def-finite-morphism-schemes]]).
No Noetherian or nonemptiness hypothesis is imposed, and the assertion is
local on the base.

This proof depends on the scheme-level Zariski Main factorization
[[lem-scheme-zariski-main-factorization-quasi-finite]]. Its relative-normalization and finite-stage inputs are proved locally; the reduction from that factorization to finiteness is completed below.

## Facts & Assumptions
**Given:** AC and a proper quasi-finite morphism $f:X\to S$.

[F1] A quasi-finite separated morphism factors Zariski locally on the base
as an open immersion $j:X\hookrightarrow\overline X$ followed by a finite
morphism $g:\overline X\to S$; the supplier proves the étale descent and finite-stage construction ([[lem-scheme-zariski-main-factorization-quasi-finite]]).

[F2] A finite morphism is affine ([[lem-finite-morphism-affine]]) and an
affine morphism is separated ([[lem-affine-morphism-separated]]).

[F3] If $X\to S$ is proper and $Y\to S$ separated, every $S$-morphism
$X\to Y$ is proper ([[lem-proper-source-to-separated-target-proper]]).
A proper morphism is closed ([[thm-proper-morphism-closed-image]]).

[F4] On an affine target $\operatorname{Spec}B$, a closed immersion has
source $\operatorname{Spec}(B/I)$ for an ideal $I$, compatibly with base
change ([[lem-closed-immersion-affine-quotient-and-base-change]]). A quotient
of a module-finite $A$-algebra is module-finite over $A$.

[F5] A morphism is finite exactly when it is affine with finite module
algebras over affine target opens ([[def-finite-morphism-schemes]]). It is
proper when separated, of finite type and universally closed; in particular
properness supplies separatedness ([[def-proper-morphism]]).

[F6] AC is the choice-function axiom ([[def-axiom-of-choice]]).



## Proof

**Proof technique:** factor through a finite scheme, then make the open immersion closed using properness.

1.1 Finiteness is local on the base by [F5], so replace $S$ by an affine open in a cover on which [F1] supplies $f=g\circ j$ with $j:X\hookrightarrow \overline X$ open and $g:\overline X\to S$ finite. Since $f$ is proper it is separated, as required by [F1]. By [F2] the finite morphism $g$ is separated, so [F3] applied to the $S$-map $j$ makes $j$ proper. [F1, F2, F3, F5]

2.1 The image $j(X)$ is open in $\overline X$ because $j$ is an open immersion, and closed because $j$ is proper and hence a closed map by [F3]. Thus it is open and closed. An open immersion identifies $X$ with the open subscheme $j(X)$; because its complement is also open, the same inclusion is a closed immersion. On any affine open $\operatorname{Spec}B$ of $\overline X$, [F4] therefore writes the corresponding part of $X$ as $\operatorname{Spec}(B/I)$. [F3, F4, step 1.1]

3.1 For an affine open $\operatorname{Spec}A\subseteq S$, finiteness of $g$ gives $g^{-1}(\operatorname{Spec}A)=\operatorname{Spec}B$ with $B$ finite as an $A$-module. By step 2.1 the inverse image under $f$ is $\operatorname{Spec}(B/I)$ for an ideal $I$, and $B/I$ is a quotient of the finite $A$-module $B$. Hence $f$ is finite over this affine base by [F5]. The base-local conclusions glue to give finiteness over all of $S$. [F4, F5, step 1.1, step 2.1]

4.1 If $X=\varnothing$, the coordinate algebra is the zero ring, finite as an $A$-module, and the argument still applies. No reducedness or Noetherian hypothesis is used. AC enters only through the invoked suppliers in [F1] and [F4]; the scheme-level factorization is supplied by [F1]. [F1, F4, F5, F6, step 3.1] ∎
