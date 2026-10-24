---
id: lem-finite-formula-witness-criterion
kind: lemma
title: "A finite witness criterion for reflection"
status: published
origin: pipeline
deps: [def-set-theoretic-levy-hierarchy-and-absoluteness, thm-structural-recursion-on-set-coded-syntax]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Freiburg, Course Notes for Set Theory and Independence Proofs (2024) — Proposition 3.5.9 pp52–53; Geschke Lemma 4.1 p10"
      url: "https://home.mathematik.uni-freiburg.de/maxwell/coursenotes-settheoryandindependenceproofs.pdf"
---


## Statement

Let $\Phi$ be a finite family of membership formulas closed under subformulas, and let $\varnothing\ne C\subseteq D$ have actual restricted membership. All formulas of $\Phi$ agree between $C,D$ iff whenever $\exists x\,\psi(x,\bar a)\in\Phi$ is true in $D$ with $\bar a\in C$, some $b\in C$ satisfies $\psi^D(b,\bar a)$. Definable-class versions are schemes.

## Facts & Assumptions

[F1] [[thm-structural-recursion-on-set-coded-syntax]]: Constructor induction is valid for the term and formula sets: a property true of leaves and preserved by each licensed constructor holds of every expression.

## Proof

**Given:** Finite subformula-closed $\Phi$, nonempty $C\subseteq D$, and actual membership.

1.1 Assume agreement. A true existential in $D$ transfers to $C$, where its satisfaction provides $b\in C$ with $\psi^C(b,\bar a)$. Since $\psi\in\Phi$, agreement for the matrix transfers this to $\psi^D(b,\bar a)$. This proves necessity. [given, algebra]

1.2 Conversely assume the witness condition. Atomic equality and membership agree by restriction. Constructor induction (F1) gives agreement for negation and conjunction from agreement of their subformulas, since the Boolean truth tables are the same. [F1, given]

2.1 For an existential with parameters in $C$, a witness in $C$ for its truth in $C$ satisfies the matrix in $D$ by induction, so also witnesses truth in $D$. If it is true in $D$, the stipulated witness condition gives $b\in C$ satisfying the matrix in $D$, and induction transfers the matrix to $C$. Thus the existential agrees in both directions. Subformula closure licenses each invocation of induction. This proves sufficiency and the equivalence; the finite class version uses the same fixed list of relativizations. [step 1.1, step 1.2, given] ∎
