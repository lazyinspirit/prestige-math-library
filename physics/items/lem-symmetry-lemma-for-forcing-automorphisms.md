---
id: lem-symmetry-lemma-for-forcing-automorphisms
kind: lemma
title: Symmetry lemma for forcing automorphisms
status: published
origin: pipeline
deps: [def-forcing-name-automorphism-action, def-symmetric-forcing-system-and-hereditarily-symmetric-names, def-forcing-relation-for-atomic-formulas, def-forcing-relation-for-formulas]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, Lemma 10.8 (Symmetry Lemma)", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Statement

For every forcing automorphism $\pi$ and formula $\varphi$, the ordinary forcing relation satisfies $p\Vdash\varphi(\vec\tau)$ iff $\pi p\Vdash\varphi(\pi\vec\tau)$ for every tuple of $P$-names. In a symmetric system with automorphism group $G$, if $\pi\in G$ and the parameter names $\vec\tau$ are hereditarily symmetric, then $\pi\vec\tau$ are hereditarily symmetric and the same ordinary-forcing equivalence applies to these tuples. No separate forcing relation with existential quantifiers restricted to HS names is asserted.

## Facts & Assumptions

**Given:** A forcing automorphism $\pi$ for the ordinary relation; for the assertion about HS parameter tuples, a symmetric system, $\pi\in G$, and HS names $\vec\tau$.

[F1] [[def-forcing-name-automorphism-action]] defines the action of an arbitrary forcing automorphism on all $P$-names, its inverse action, and preservation of name rank, order and compatibility.

[F2] [[def-forcing-relation-for-atomic-formulas]] defines the atomic forcing clauses with the library's name-first pair convention.

[F3] [[def-forcing-relation-for-formulas]] defines the recursive clauses for compound formulas.

[F4] [[def-symmetric-forcing-system-and-hereditarily-symmetric-names]] gives $\pi``\mathrm{HS}=\mathrm{HS}$ when $\pi\in G$ in the stated symmetric system.

## Proof

1.1 Simultaneously induct on the ranks of $\sigma,\tau$. In the atomic membership and equality clauses, $q\le p$ iff $\pi q\le\pi p$, compatible extensions correspond under $\pi$, and subnames correspond rank-preservingly. Therefore $p\Vdash\sigma\in\tau$ iff $\pi p\Vdash\pi\sigma\in\pi\tau$, and likewise for equality. [F1, F2]

2.1 Induct on formula complexity. Boolean clauses commute with the bijection of conditions. For an existential, F1 maps the class of all $P$-names bijectively to itself, so witnesses correspond; applying the inverse automorphism from F1 gives the reverse implication. This is a syntactic induction on the stated forcing clauses; no semantic-generic existence hypothesis is used. [F1, F3, step 1.1]

3.1 Now assume $\pi\in G$ and $\vec\tau\in\mathrm{HS}$. F4 makes $\pi\vec\tau$ an HS tuple. Apply the already-proved ordinary forcing equivalence of step 2.1 to these parameter tuples; its existential name quantifier still ranges over all $P$-names, exactly as F3 specifies. This proves the asserted parameter-preserving specialization and makes no claim about an unintroduced HS-restricted forcing relation. [F3, F4, step 2.1] ∎
