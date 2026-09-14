---
id: lem-solovay-construction-is-uniformly-formalizable
kind: lemma
title: Fixed finite-fragment verification for the Solovay construction
status: draft
origin: pipeline
deps: [def-solovay-levy-collapse-setup, thm-solovay-inner-model-satisfies-zf-and-real-ordinal-definability, thm-solovay-inner-model-satisfies-dependent-choice, thm-every-solovay-model-set-of-reals-is-lebesgue-measurable, thm-every-solovay-model-set-of-reals-has-the-baire-property, thm-every-uncountable-solovay-model-set-of-reals-has-a-perfect-subset, cor-solovay-model-has-no-vitali-or-bernstein-set, thm-solovay-model-has-no-hamel-basis-or-discontinuous-additive-function, cor-solovay-model-has-no-banach-tarski-decomposition, thm-solovay-model-fails-full-choice, thm-montague-levy-finite-reflection, thm-countable-elementary-submodels-and-transitive-collapses, lem-finite-fragment-l-interpretation-with-gch, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: fixed-fragment-model-transfer
sources: {references: [{title: "Solovay 1970, p. 2 formal-consistency remark and Parts I–III", url: "https://people.math.ethz.ch/~fdalio/ZKmodel.pdf"}]}
---

## Statement

For every externally fixed finite fragment $\Delta$ of the stated
$\mathrm{ZF}+\mathrm{DC}$ universal-regularity theory, including failure of
Choice and any of the named exclusions proved on this page,
$T=\mathrm{ZFC}+$“there is an inaccessible cardinal” supplies a finite source
fragment $\Gamma$ and proves both that a suitable countable transitive
$\Gamma$-model exists and that its Solovay construction is a set model of
$\Delta$.  In particular $T$ proves that a set model of $\Delta$ exists.  The
source fragment and proof may depend on $\Delta$; no PA-verified uniform
proof-code transformer is asserted.

## Facts & Assumptions

**Given:** One externally fixed finite list $\Delta$ of target axioms and named consequences, including the actual formulas in its Separation and Replacement instances.

[F0] [[def-solovay-levy-collapse-setup]] gives the exact constructible forcing ground, inaccessible parameter, and Lévy collapse used by the construction.

[F1] [[thm-solovay-inner-model-satisfies-zf-and-real-ordinal-definability]], [[thm-solovay-inner-model-satisfies-dependent-choice]], [[thm-every-solovay-model-set-of-reals-is-lebesgue-measurable]], [[thm-every-solovay-model-set-of-reals-has-the-baire-property]], [[thm-every-uncountable-solovay-model-set-of-reals-has-a-perfect-subset]], [[cor-solovay-model-has-no-vitali-or-bernstein-set]], [[thm-solovay-model-has-no-hamel-basis-or-discontinuous-additive-function]], [[cor-solovay-model-has-no-banach-tarski-decomposition]], and [[thm-solovay-model-fails-full-choice]] give every target conclusion used below.

[F2] [[thm-montague-levy-finite-reflection]] and [[thm-countable-elementary-submodels-and-transitive-collapses]]: a fixed finite family can be reflected above a prescribed parameter and, under ambient Choice, reduced to a countable transitive set model retaining that parameter and the reflected sentences.

[F3] [[lem-finite-fragment-l-interpretation-with-gch]] translates each fixed finite ZFC+GCH fragment needed in the constructible forcing ground.  Preservation of the inaccessible when passing to $L$ is proved directly below from the definition in F0; it is not part of F3's interface.

[F4] [[def-axiom-of-choice]]: ambient source Choice supplies the countable hull and the enumeration of dense subsets of a countable forcing model; it is not an axiom of the target model.

## Proof

1.1 Expand the finitely many formulas in $\Delta$ and the particular proofs in F1 that establish them. Retain only the finitely many source axioms, forcing-recursion clauses, relativized-satisfaction formulas, Borel-code inductions, and closure instances that occur in those finite derivations.  If $\kappa$ is inaccessible in the ambient source, then it remains inaccessible in $L$: regularity is downward absolute, and an $L$-cofinal map or an $L$-injection $\kappa\to\mathcal P^L(\lambda)$ for $\lambda<\kappa$ would be the same forbidden map or injection in the ambient universe.  Apply F3 to the fixed ZFC+GCH part interpreted in $L$, adjoining the finitely used instances of this direct preservation proof. This produces one finite source family $\Gamma$, depending on $\Delta$, together with a finite verification of the F0 construction over any transitive model of $\Gamma$ containing an inaccessible cardinal. [F0, F1, F3, Given]

2.1 Work in $\mathrm{ZFC}+$“there is an inaccessible cardinal” and choose such a $\kappa$. Apply finite reflection to the formulas of $\Gamma$ together with the assertion that $\kappa$ is inaccessible, taking a reflected stage above $\kappa$. Then take a countable elementary submodel containing $\kappa$ and collapse it. The result is a countable transitive set model $C$ of $\Gamma$ in which the collapsed image $\bar\kappa$ is inaccessible. The setup in F0 identifies this as the exact parameter required by the retained construction. Only the fixed finite formulas are reflected; no model of the full source theory is claimed. [F0, F1, F2, F4, step 1.1]

3.1 Enumerate in the ambient source universe the dense subsets, belonging to $C$, of the Lévy collapse computed in the constructible ground of $C$, and recursively build a generic filter. Execute inside the resulting set extension the fixed construction retained at step 1.1. Because $C$ and its extension are sets, the retained F1 derivations from step 1.1 show that the hereditary definability predicate cuts out a set structure satisfying every sentence in $\Delta$.  Thus $T$ proves both required assertions: the countable transitive source model $C$ exists, and the displayed construction converts it into a set model of $\Delta$. [F1, F3, F4, step 1.1, step 2.1]

4.1 The argument is indexed externally by the fixed finite $\Delta$. An empty $\Delta$ is handled by any nonempty reflected structure. Nothing selects all such proofs inside arithmetic, constructs a model of full ZFC from consistency, or establishes a primitive-recursive all-proof transformer. [step 2.1, step 3.1] ∎
