---
id: thm-residue-translation-functors-give-the-integrable-fock-space-action
kind: theorem
title: "The residue translation functors give the integrable Fock-space action"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 26
deps:
  - def-residue-translation-functors-on-the-sum-of-parabolic-o-blocks
  - def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality
  - thm-higher-level-wedge-tensor-fock-module-has-the-column-monomial-basis
  - def-higher-level-wedge-tensor-fock-module
  - def-kashiwara-crystal-operators
  - def-crystal-graph-epsilon-phi-and-weight
  - def-tensor-product-of-crystals
  - thm-crystal-basis-tensor-product-rule
  - def-quantum-weight-module-and-integrability
  - thm-bgg-reciprocity
  - lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags
  - def-verma-flag-and-its-multiplicities
  - prop-translation-functors-are-exact-and-biadjoint-across-a-wall
  - def-axiom-of-choice
  - lem-residue-casimir-operators-give-local-affine-hecke-actions
  - lem-the-local-affine-hecke-socle-argument-for-residue-translations
  - thm-parabolic-category-o-is-a-highest-weight-category
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Schur-Weyl duality for higher levels, Selecta Math. (N.S.) 14 (2008) 1-57 (complete 50-page arXiv article)"
      url: "https://arxiv.org/pdf/math/0605217"
      locator: "Lemma 4.3 and Theorem 4.5 with their discussion (printed pp. 19-21): the multiplicity-free parabolic Verma flags of $f_iN(A)$, $e_iN(A)$ and the crystal description of the functor action on irreducibles; complete passage read."
    - title: "Jonathan Brundan and Alexander Kleshchev, The degenerate analogue of Ariki's categorification theorem, Math. Z. 266 (2010) 877-919 (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Section 3.1, Theorem 3.1(iii)-(iv) and its proof (printed pp. 21-22): the identification of the Grothendieck-group endomorphisms with the Chevalley generators and the socle/head statement; complete passage read."
    - title: "Volodymyr Mazorchuk, Lectures on Algebraic Categorification, QGM Master Class Series, European Mathematical Society 2012 (complete 77-page arXiv lecture-note set)"
      url: "https://arxiv.org/pdf/1011.0144"
      locator: "Sections 4.5-4.6 (printed pp. 20-21): translation through walls and the parabolic structural objects, used for the exactness/biadjunction bookkeeping; complete passage read."
    - title: "Joseph Chuang and Raphael Rouquier, Derived equivalences for symmetric groups and sl2-categorification (complete45-page arXiv0407205)"
      url: "https://arxiv.org/pdf/math/0407205"
      locator: "Sections3.2–3.3 (pp5–10),4.3 (pp13–14),5.1–5.4 (pp14–21), especially Lemma3.6 and Proposition5.20 full proofs; Grassmannian duality replaced by the explicit local partial-coinvariant complete-intersection proof."
    - title: "Masaki Kashiwara, Global crystal bases of quantum groups, Duke Math. J.69 (1993)455–485 (complete33-page author PDF)"
      url: "https://www.kurims.kyoto-u.ac.jp/~kenkyubu/kashiwara/global-crystal.pdf"
      locator: "Printedpp462–474, Sections3.1–3.2 upper/lower operators and Sections5.1–5.3 balanced kernel/string filtrations and Proposition5.3.1 with complete proof; Section5 explicitly concerns upper crystal charts."
    - title: "Jonathan Brundan and Alexander Kleshchev, Representations of shifted Yangians and finite W-algebras (complete109-page arXiv0508003)"
      url: "https://arxiv.org/pdf/math/0508003"
      locator: "Sections4.2–4.4 (printedpp38–45), especially equations4.3/4.6/4.8/4.34–4.37 and Theorems4.4–4.5 with their actual CR dependency; full needed passages read."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). The exact residue
functors of
[[def-residue-translation-functors-on-the-sum-of-parabolic-o-blocks]] on the
genuine finite-$n$ parabolic blocks have multiplicity-free
generalized-standard flags given by the valid single-entry moves $i\to i+1$ and
$i+1\to i$.

(1) Their $K_0$ operators are the full integrable $\mathfrak{gl}_{I^+}$ Fock
Chevalley action, satisfying the integral Chevalley/Serre relations on the
standard basis.

(2) For each simple $L(A)$, a residue translate vanishes exactly when the
corresponding crystal edge is absent; otherwise it is a self-dual
indecomposable with simple equal head and socle $L(\tilde f_iA)$, respectively
$L(\tilde e_iA)$.

(3) The full tensor Fock module is represented by all standard classes; the
ground-state class, with
$M(A_\Lambda)=L(A_\Lambda)=P(A_\Lambda)$, generates only its multiplicity-one
highest constituent.

No action on labels alone proves the $K_0$ relations or the head/socle
statement.

## Facts & Assumptions

**Given:** The exact residue functors $e_i,f_i$ on the finite classical blocks, the standard and simple bases of the block Grothendieck group, and the local affine-Hecke head/socle lemma.

[F1] Casimir action ([[lem-residue-casimir-operators-give-local-affine-hecke-actions]]): multiplicity-free generalized-standard flags for the entry moves, the standard-class isomorphism $[\Delta(A)]\mapsto M_A$, the integral Fock $K_0$ action with Chevalley/Serre relations, local integrability and positivity.

[F2] Head/socle lemma ([[lem-the-local-affine-hecke-socle-argument-for-residue-translations]]): nonzero residue translates of simples are self-dual indecomposables with simple isomorphic head and socle at the labels $\tilde e_iA,\tilde f_iA$, and vanishing is exactly the absence of the crystal edge.

[F3] Structure and duality ([[def-residue-translation-functors-on-the-sum-of-parabolic-o-blocks]], [[def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality]], [[thm-parabolic-category-o-is-a-highest-weight-category]], [[thm-bgg-reciprocity]]): exactness, biadjunction, duality compatibility, flags and the ground-state identification $M(A_\Lambda)=L(A_\Lambda)=P(A_\Lambda)$.

[F4] Crystal labels ([[def-higher-level-wedge-tensor-fock-module]], [[def-kashiwara-crystal-operators]], [[def-crystal-graph-epsilon-phi-and-weight]], [[def-tensor-product-of-crystals]], [[thm-crystal-basis-tensor-product-rule]]): the Fock Chevalley operators, the crystal graph with its edges and the label dictionary.

[F5] Axiom of Choice ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 **Flags and the $K_0$ action.** By [F1] the tensoring and block-projection functors are exact and biadjoint, their generalized-standard flags are multiplicity-free and given by the valid single-entry moves, and the standard-class map is an isomorphism of the block Grothendieck group with the integral Fock module. Checking the induced operators on the standard basis gives the full integrable $\mathfrak{gl}_{I^+}$ Chevalley action and its integral Chevalley/Serre relations; this is a statement about $K_0$, not yet about heads and socles. [F1, F3, F5]

1.2 **The ground state.** For the ground multiset the column-strict admitted label is unique: successive strict entries are at least their row ground values and the minimal total weight forces equality, so the ground label is the only one of its central character. By [F3] its standard, simple and projective coincide; the entire highest constituent $V(\Lambda)$ is generated by its ground class, and the tensor Fock module is represented by all standard classes, so the ground class generates only that multiplicity-one constituent and not the whole Fock module. [F1, F3, algebra]

2.1 **Head and socle.** Apply the local lemma [F2] to the positive biadjoint pair $E=f_i$, $F=e_i$ (and to the swapped root orientation for the dual direction). Since the flags of step 1.1 are multiplicity-free and the string argument is categorical, every nonzero translate of a simple is a self-dual indecomposable whose head and socle are isomorphic simples at the labels $\tilde f_iA$, respectively $\tilde e_iA$ of [F4]; by the same lemma the translate vanishes exactly when the crystal edge is absent. Restricted duality commutes with the functors by [F3], so the head and socle statements are preserved under dualization. [F2, F3, F4, step 1.1]

3.1 **Conclusion.** The residue functors have multiplicity-free generalized-standard flags, induce the full integral Chevalley Fock action on $K_0$, vanish on a simple exactly when the crystal edge is missing, and otherwise produce a self-dual indecomposable with simple equal head and socle at the stated crystal label; the ground-state class generates exactly its multiplicity-one highest constituent. [step 1.1, step 2.1, step 1.2] ∎
