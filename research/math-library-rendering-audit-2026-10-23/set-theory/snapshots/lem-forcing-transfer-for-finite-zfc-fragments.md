---
id: "lem-forcing-transfer-for-finite-zfc-fragments"
kind: "lemma"
title: "Forcing transfer for finite ZFC fragments"
deps: ["thm-semantic-generic-extension-theorem-for-countable-transitive-models", "cor-countable-transitive-models-of-fixed-zfc-fragments", "thm-finite-fragment-relative-consistency-transfer", "def-coded-first-order-zf-theory", "def-axiom-of-choice"]
justified_by: []
forward_refs: []
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Neeman, Forcing (2011), section 1, Theorem 1.16 and its complete atomic/formula proof, Lemmas 1.17 and 1.25–1.28, pp.4–9; section 2.1, Lemma 2.2 through Theorem 2.6, pp.10–11"
      url: "https://www.math.ucla.edu/~ineeman/223s.1.11s/223s-spring11-lecture-notes-6-5.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Fix externally a finite target fragment $\Delta$ and a formal ZFC forcing verification for it: a specified definition of a nonempty preorder P, proofs of its required parameter and preorder properties, and, for each $\delta\in\Delta$, a finite formal derivation that every condition forces $\delta$. Then some fixed finite $\Gamma\subseteq\mathrm{ZFC}$ suffices for that verification and the construction over a countable transitive $\Gamma$-model: ZFC proves the existence of such a model and a generic extension satisfying $\Delta$.

The source fragment includes all closure, absoluteness and parameter requirements used by the specified construction. A parameterized forcing requires the corresponding formally proved source existence assertion; an arbitrary external poset need not belong to the reflected model. This is an externally indexed finite-fragment assertion, not a claim that ZFC proves a full ZFC CTM or one internal model-existence sentence for all fragments.

## Facts & Assumptions

**Given:** The finite target and finite formal verification data in the statement; ambient ZFC for reflection and the countable elementary submodel construction.

[F1] [[thm-semantic-generic-extension-theorem-for-countable-transitive-models]] has a proof assembled from generic enumeration, valuation, forcing truth, extension-axiom and ordinal arguments.

[F2] [[cor-countable-transitive-models-of-fixed-zfc-fragments]] gives, for each fixed finite source fragment, a ZFC proof of a countable transitive model of that fragment.

[F3] [[thm-finite-fragment-relative-consistency-transfer]] identifies the two required proofs: source-model existence and conversion into a target-fragment model.

[F4] [[def-coded-first-order-zf-theory]] specifies finite formula instances rather than a class of axiom objects.

[F5] [[def-axiom-of-choice]] is used in F2's countable elementary-submodel construction.

## Proof

1.1 For each target sentence retain the supplied finite forcing-verification derivation, expanding its theorem invocations into their finite proofs. Also retain the finite truth-lemma proof for each subformula of those finitely many sentences, the defining recursions on names and valuations, and the generic-enumeration construction used in F1. Only these fixed formulas are involved. In particular the existential clause needs Separation for its specific witness-forcing predicate; the atomic clauses need the specific descendant-cone recursions; a target Replacement instance needs the specific least-witness-rank Replacement from the extension proof. Each invoked Separation or Replacement schema therefore contributes a particular finite formula instance from F4. [F1, F4, given]

2.1 Take the union of all ground axiom instances occurring in the retained finite derivations, also including the finitely used namehood, rank, finite-syntax and valuation absoluteness instances, Infinity and Extensionality, and the supplied proofs of the forcing-definition/parameter requirements. This is a finite list of ZFC axioms, denoted Gamma. The proof is a finite syntactic traversal: at a cited theorem expand the fixed proof actually used, and at a schema invocation retain its instantiated formula. Recursion or induction on ranks uses its finitely stated instance, not one axiom for each ordinal. Thus every retained ground argument is valid in any transitive model of Gamma. No application of the full-ZFC hypothesis of F1 is made to a mere Gamma-model. [F1, F4, step 1.1]

3.1 F2 gives a ZFC proof of a countable transitive M satisfying Gamma, and the parameter/preorder construction retained in step 2.1 produces $P^M$ there. Use the external countable enumeration with least-index refinements to obtain a generic. The retained valuation and truth arguments are valid over this M by step 2.1. For each $\delta\in\Delta$, its retained verification makes every condition force delta; the generic is nonempty, so the truth lemma makes delta true in M[G]. Hence this is a set model of Delta. Ambient AC enters through the countable elementary-submodel construction in F2; the generic enumeration itself uses no further choice. [F1, F2, F5, step 2.1]

4.1 The two proofs just obtained are precisely the source-existence and model-conversion data in F3. All references to Gamma and Delta were to these fixed finite lists. If Delta is empty the same elementary setup gives a nonempty set model without any target forcing assertions. No conclusion that M satisfies all ZFC follows, and no uniform arithmetic verification of all proof constructors has been asserted. [F3, step 3.1] ∎
