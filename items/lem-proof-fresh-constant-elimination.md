---
id: lem-proof-fresh-constant-elimination
kind: lemma
title: "Fresh constants may be eliminated from a finite proof"
status: draft
origin: pipeline
deps: [def-set-coded-formal-derivation, lem-fresh-bound-variable-renaming, lem-derivation-finite-support-and-concatenation]
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Moschovakis, Lemma 1H.6 pp36–37 and Lemma 1I.4 pp40–41; local proof transformation including existential rules."
      url: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf
proof_strategy: direct
---

## Statement

In ZF, if a constant $c$ occurs in neither a sentence theory $T$ nor an $L$-sentence $\sigma$, any $L(c)$-proof $T\vdash\sigma$ yields an $L$-proof. More generally replace $c$ uniformly in a finite proof by a variable $z$ absent from its formulas and annotations: this gives a proof from $T$ of the replaced conclusion, which may then be universally generalized in $z$. Expanding a signature by any set of fresh constants is conservative for original-language sentences.

## Facts & Assumptions

**Given:** A finite proof from sentence assumptions omitting $c$.

[F1] The axioms, free-for restrictions and three inference rules are those of [[def-set-coded-formal-derivation]].

[F2] Proof support and composition are finite. ([[lem-derivation-finite-support-and-concatenation]])

## Proof

1.1 The finite proof and its finitely many finite annotations mention only finitely many variables. Choose the least-index variable $z$ not mentioned. Replace every token $c$ in formulas and substitution data by $z$, leaving binders unchanged. No binder is $z$, so every inserted $z$ remains free. Assumption lines are unchanged since $c$ is absent from $T$. [F1, F2]

2.1 A Boolean axiom remains the same tautology pattern with transformed substituted formulas; reflexivity remains reflexivity. For either quantifier substitution axiom and the equality substitution axiom, token replacement commutes with the indicated free-variable substitution. Its new term can gain only the free variable $z$, and no binder in the transformed matrix is $z$, so every former free-for condition still holds. Universal distribution's restricted variable is an old variable: replacing $c$ by $z$ creates no free occurrence of that old variable in its antecedent. Thus every transformed axiom is an axiom of the smaller signature. [F1, step 1.1]

2.2 MP retains the identical implication/premise matching. A generalization in an old variable still generalizes that variable after replacement. For existential elimination the eliminated variable is old and distinct from $z$; the consequent gains no occurrence of it, so its restriction persists. Therefore induction along the unchanged reference indices gives a valid transformed derivation. Generalization in $z$ may be appended because the base assumptions are sentences. [F1, step 1.1]

3.1 If the conclusion omits $c$, it is unchanged by this operation; we obtain the asserted smaller-language proof. A proof in an expansion by any set of fresh constants mentions only finitely many of them. Remove them one at a time by the operation above, each time taking a new variable outside the finite current proof. The final proof uses only the original signature. Conversely every original proof is still a proof in the expansion. Hence the expansion is conservative. [F2, step 2.1, step 2.2] ∎
