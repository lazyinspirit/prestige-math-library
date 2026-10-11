---
id: thm-indecomposable-projective-functors-are-indexed-by-the-weyl-group
kind: theorem
title: Indecomposable projective functors are indexed by the Weyl group
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 6
deps: [def-projective-functors-on-a-regular-integral-category-o-block,
       lem-wall-crossing-compositions-produce-the-projective-with-the-top-standard-label,
       lem-wall-crossing-functors-act-on-the-grothendieck-group-by-right-multiplication-by-one-plus-s,
       lem-finite-dimensional-tensors-reach-every-block-simple,
       thm-category-o-has-enough-projectives,
       prop-projective-covers-in-o-are-indecomposable-and-unique,
       def-axiom-of-choice,
       lem-kostant-adjoint-isotypic-multiplicities-have-zero-weight-rank,
       thm-duflo-joseph-g-finite-endomorphisms-of-verma-modules,
       thm-wedderburn-artin-theorem,
       lem-the-coinvariant-algebra-is-a-gorenstein-algebra-with-one-dimensional-socle,
       def-wall-crossing-functor-and-unit-counit,
       lem-dominant-integral-dot-translates-embed-in-the-verma-module,
       thm-bgg-reciprocity, def-grothendieck-group-and-character-of-category-o]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. N. Bernstein, S. I. Gelfand, Tensor products of finite and infinite dimensional representations of semisimple Lie algebras, Compositio Math. 41 (1980) 245-285 (Numdam full text)"
      url: "https://www.numdam.org/item/CM_1980__41_2_245_0.pdf"
      locator: "Sections 0.2-0.3; Theorem 3.3(i)-(ii) with the bijection Xi -> indecomposable projective functors, Theorems 3.4(i) and 3.5, Corollary 3.8, and the proofs in Sections 3.6-3.10 (pp. 260-268)"
    - title: "Arthur Garnier, The classical theory of Soergel bimodules and the link with Lusztig's conjecture, Oberwolfach Arbeitsgemeinschaft note (2022)"
      url: "https://www.lamfa.u-picardie.fr/agarnier/talks/soergel_notes.pdf"
      locator: "Corollary 4.11: the P_x are the indecomposable projective functors, indexed by W (printed p. 9)"
---

## Statement

Assume the Axiom of Choice. In a regular integral block with dominant
representative $\lambda$:

1. Projective functors form a Krull-Schmidt category.
2. Their indecomposables are indexed by $W$, with $\Theta_w$ characterized by
$\Theta_w\Delta(\lambda)\cong P(w\cdot\lambda)$. For a reduced word
$w=s_1\cdots s_k$, the functor $\Theta_w$ is a multiplicity-one summand of
$\theta_{s_k}\cdots\theta_{s_1}$, and every other indecomposable summand has a
label $x<w$. In particular every indecomposable projective functor is generated
as a summand by wall crossings.
3. Two projective functors are naturally equivalent exactly when their induced
operators on the Grothendieck group agree.

The characterization concerns evaluation on the dominant projective Verma; no
faithfulness of that evaluation on all natural maps of arbitrary
endofunctors is asserted.

## Facts & Assumptions

**Given:** The regular integral block $\mathcal O_\lambda$ with dominant representative $\lambda$, its projective functors, and the wall-crossing functors $\theta_s$.

[F1] Duflo–Joseph identifies the finite adjoint part of $\operatorname{End}M(\lambda)$ with $U_\chi$, and the harmonic isotypic modules of $U$ surject onto those of $U_\chi$ ([[thm-duflo-joseph-g-finite-endomorphisms-of-verma-modules]], [[lem-kostant-adjoint-isotypic-multiplicities-have-zero-weight-rank]]). Tensor-Hom adjunction expresses a $\mathfrak g$-map $E\otimes M(\lambda)\to F\otimes M(\lambda)$ as a $\mathfrak g$-map $F^*\otimes E\to\operatorname{End}M(\lambda)$, so these suppliers lift its matrix coefficients to $U$.

[F2] Every standard $\Delta(y\cdot\lambda)$ embeds in the dominant standard $\Delta(\lambda)$ ([[lem-dominant-integral-dot-translates-embed-in-the-verma-module]], [[thm-bgg-reciprocity]]).

[F3] Every indecomposable projective of the block is a summand of a word of wall crossings applied to $\Delta(\lambda)$, the top summand $P(w\cdot\lambda)$ occurring once and all other summands having labels $x<w$ ([[lem-wall-crossing-compositions-produce-the-projective-with-the-top-standard-label]], [[def-wall-crossing-functor-and-unit-counit]]).

[F4] The class map $c:K_0(\mathcal O_\lambda)\to\mathbb Z[W]$ is an isomorphism and the BGG matrix $[P(x):\Delta(y)]$ is unitriangular for the Bruhat order, so a projective is determined up to isomorphism by its class ([[lem-wall-crossing-functors-act-on-the-grothendieck-group-by-right-multiplication-by-one-plus-s]], [[thm-bgg-reciprocity]], [[def-grothendieck-group-and-character-of-category-o]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal A$ be the class of projective functors and evaluate a natural transformation $\alpha$ at $\Delta(\lambda)$. For ambient tensor functors, lift the finite equivariant coefficient map in [F1] to $U$. Its tensor coefficients act on every module by the same formula, yielding a natural $\mathfrak g$-map. For projected functors, extend a map between projected evaluations by inclusion and projection to the ambient tensors, lift it there, then project on the output and include on the input. The same inclusion/retraction procedure handles functor summands. Thus evaluation is surjective on Hom spaces. [F1]

2.1 The evaluation kernel is nilpotent. If $\alpha$ vanishes on $\Delta(\lambda)$, then by exactness and naturality it vanishes on every standard, since each standard embeds in $\Delta(\lambda)$ by [F2] and exactness preserves the embedding; on a fixed projective generator with a finite Verma flag of length $k$, vanishing on the standard factors strictly lowers the flag, so a composition of $k$ such maps is zero. Hence $\ker$ is a nilpotent ideal on every finite additive functor sum. [F2, step 1.1]

3.1 Idempotents lift across a nilpotent ideal (if $e^2-e=d$ lies in a nilpotent ideal, replace $e$ by $e+(1-2e)d$; its idempotent error lies in the square of the previous error ideal, so finitely many repetitions give an idempotent) and an element $1+$nilpotent is invertible by a finite geometric series; hence decompositions and isomorphism classes of projective functors coincide with those of their evaluations at $\Delta(\lambda)$, and the endomorphism algebra of an indecomposable is local exactly when its evaluation is. Hom spaces are finite-dimensional for a separate reason: a natural transformation between right-exact functors is determined by its value on a finite projective generator $H=\bigoplus_xP(x\cdot\lambda)$, since every object has a finite presentation by sums of $H$. Its component is a member of the finite-dimensional space $\operatorname{Hom}(FH,F'H)$ (maps are determined by images of finitely many weight-homogeneous generators into finite-dimensional weight spaces). Thus the functor category has finite-dimensional endomorphism algebras and split idempotents. Nilpotent-kernel lifting matches its indecomposable decompositions to those of the evaluations, proving Krull–Schmidt. [step 2.1, algebra]

4.1 By [F3] the wall word $\theta_{s_k}\cdots\theta_{s_1}$ evaluated at $\Delta(\lambda)$ has the decompositions $P(w\cdot\lambda)\oplus\bigoplus_{x<w}P(x\cdot\lambda)^{m_x}$; by step 3.1 this decomposition lifts uniquely to a decomposition of the functor, producing $\Theta_w$ with $\Theta_w\Delta(\lambda)\cong P(w\cdot\lambda)$ and with all other summands labelled $x<w$; conversely every indecomposable projective functor is a summand of such a word, so the labels $w\in W$ exhaust the indecomposables. This proves (1) and (2). [F3, step 3.1]

5.1 If two projective functors have the same class operator on $K_0$, then their evaluations at $\Delta(\lambda)$ are projectives with the same class; by the unitriangular BGG matrix [F4] their indecomposable decompositions agree, so the evaluations are isomorphic, and by step 3.1 the functors are naturally equivalent; the converse is formal. This proves (3). [F4, step 3.1] ∎
