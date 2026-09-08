---
id: lem-derivation-finite-support-and-concatenation
kind: lemma
title: "Finite support, weakening, and composition of derivations"
status: published
origin: pipeline
deps: [def-set-coded-formal-derivation, thm-induction-principle, def-first-order-syntactic-consistency]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Moschovakis, Lemma 1H.3 pp35–36 and Lemma 1H.12 p38; local all-three-rule and empty-chain arguments."
      url: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf
proof_strategy: direct
---

## Statement

In ZF, every derivation from a sentence theory uses finitely many assumptions. Weakening, concatenation and replacement of proved sentence premises by their proofs preserve derivability. The union of an inclusion-chain of consistent sentence theories in one fixed signature is consistent, including the empty chain.

## Facts & Assumptions

**Given:** Finite annotated derivations in the fixed calculus, and an inclusion-chain of sentence theories.

[F1] The axioms and rules are those of [[def-set-coded-formal-derivation]].

[F2] Consistency means absence of a proof of $\bot=\exists v_0\neg(v_0=v_0)$. ([[def-first-order-syntactic-consistency]])

[F3] Induction on natural numbers is available. ([[thm-induction-principle]])

## Proof

1.1 Assign to an assumption line its singleton support, to an axiom the empty support, to an MP line the union of its two preceding supports, and to either quantifier-rule line the support of its one preceding premise. Induction on line number shows each support is finite and that the prefix derives the line from that support: no rule gains assumptions, and all side conditions are unchanged. In particular the last line has finite support. [F1, F3]

1.2 Enlarging a sentence theory retains every assumption and line annotation. To concatenate proofs, add the length of the first list to every reference in the second. To replace proved sentence assumptions, insert their finite proofs before their uses and redirect each later reference to the new index of its premise. Induction on the old list gives a valid new list. Only finitely many proofs are inserted; a finite family of existing proofs can be selected by finite induction in ZF. Quantifier parameters and their free-variable restrictions are unchanged, and the new base assumptions are sentences. [F1, F3]

2.1 For a nonempty inclusion-chain, every finite subset of its union lies in one member: choose a member containing each of its finitely many sentences, and repeatedly retain the larger of two comparable members; for the empty finite subset use any one member. A proof of $\bot$ from the union would thus, by its finite support and weakening, be a proof from a consistent member, which is impossible. [F2, step 1.1, step 1.2]

3.1 For the empty chain define a syntactic Boolean valuation $V$: every atom has value $1$, negation and conjunction have their Boolean values, and $V(\exists x\phi)=V(\phi)$. Induction on formula construction shows $V(\phi[t/x])=V(\phi)$, since every atomic value is unchanged and substitution commutes with the Boolean constructors and either retains or traverses a quantifier. Consequently $V(\forall x\phi)=V(\phi)$. All six axiom schemes have value $1$: the substitution axioms reduce to $a\to a$, distribution to $(a\to b)\to(a\to b)$, reflexivity to $1$, equality substitution to $1\to(a\to a)$, and Boolean tautologies to true Boolean instances. MP preserves $1$, generalization does not change the value, and existential elimination leaves its premise's value unchanged. But $V(\bot)=0$. Induction on proof length therefore rules out an empty-theory proof of $\bot$, proving consistency also for the empty union. [F1, F2, F3] ∎
