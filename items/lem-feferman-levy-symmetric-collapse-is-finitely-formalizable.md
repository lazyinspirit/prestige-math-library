---
id: lem-feferman-levy-symmetric-collapse-is-finitely-formalizable
kind: lemma
title: The Feferman–Levy collapse argument is finitely formalizable
status: draft
origin: pipeline
deps: [cor-countable-union-and-omega-one-regularity-fail-in-the-feferman-levy-model, lem-forcing-transfer-for-finite-zfc-fragments, thm-hereditarily-symmetric-interpretations-form-a-zf-model, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - {title: "Thomas Jech, The Axiom of Choice, Theorem 10.6 and the book's relative-consistency convention", url: "https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf"}
---

## Statement

For every externally fixed finite fragment $\Delta$ of ZF together with the
three sentences established in the preceding corollary, ZFC+GCH proves that
the Feferman–Levy symmetric-collapse construction yields a set model of
$\Delta$.

## Facts & Assumptions

**Given:** Externally, one finite list $\Delta$ of formulas consisting of
finitely many ZF axiom instances and the three displayed failure sentences.

[F1] [[cor-countable-union-and-omega-one-regularity-fail-in-the-feferman-levy-model]]
completes the mathematical forcing and symmetry derivations of all three
sentences.

[F2] [[lem-forcing-transfer-for-finite-zfc-fragments]] proves that a fixed
finite forcing verification uses only a fixed finite source fragment and that
ZFC constructs a countable transitive model of that fragment with a generic.

[F3] [[thm-hereditarily-symmetric-interpretations-form-a-zf-model]] gives the
rank recursions and the formula-by-formula ZF verification for an HS
interpretation.

[F4] [[def-axiom-of-choice]] records the ambient Choice used by the reflected
source-model construction; it is not an axiom of the target fragment.

## Proof

**Proof technique:** direct finite proof tracing.

1.1 Expand the proofs of the finitely many formulas in $\Delta$. For the three extra sentences, expand F1 and every dependency used in its collapse, Boolean-value, cardinal, cofinality, and truth-lemma arguments. For each ZF formula in $\Delta$, expand only the corresponding instance of F3's HS verification. Every displayed proof is finite and every schema occurrence has one fixed formula, so this traversal produces a finite list $\Gamma$ of ground ZFC+GCH axioms and schema instances. [F1, F3, given]

2.1 Include in $\Gamma$ the finite definitions and absoluteness instances for the collapse order, automorphism action, normal filter, Boolean completion, name ranks, forcing relation, HS predicate, and evaluation that actually occur in step 1.1. Include also the finitely many Separation and Replacement instances used to collect the bounded layers and the selected $\Delta$-axioms. This is a finite syntactic union; rank recursion contributes its one fixed formula instance, not one axiom for every rank. [F3, step 1.1]

3.1 Apply F2 to this fixed source fragment and forcing specification. In ambient ZFC+GCH obtain a countable transitive set $M\models\Gamma$ containing the required parameters and an $M$-generic $G$. Inside the set extension $M[G]$, form the interpretations of the HS names from $M$. Since $M$ is a set, their interpretations form an externally bounded set $N_M\subseteq M[G]$. The retained instances from steps 1.1–2.1 prove that $N_M$ satisfies every ZF formula in $\Delta$ and all three extra sentences. [F2, F3, step 1.1, step 2.1]

4.1 The quantifier over $\Delta$ is external: for each one fixed finite list, the preceding finite trace supplies its corresponding $\Gamma$ and proof. If the ZF part of $\Delta$ is empty, the same construction still gives the three explicit sentences in a nonempty set model. Nothing here asserts a single model of full ZFC, a countable transitive model of full ZF, or a uniform truth predicate. Ambient AC is used only through F2 as recorded by F4; the constructed target satisfies the negative choice sentence. [F2, F4, step 3.1] ∎
