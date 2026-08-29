---
id: fs-distinct-irreducible-complex-characters-of-a-finite-group-have-distinct-degrees
kind: false-statement
title: "FALSE: distinct irreducible complex characters of a finite group have distinct degrees"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [ex-the-character-table-of-q-eight]
justified_by: []
aliases: []
proof_strategy: construct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Chapter 3"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Statement

The statement "distinct irreducible complex characters of a finite group
have distinct degrees" is false: the group $Q_8$ has four distinct
irreducible characters of degree $1$.

## Facts & Assumptions

**Given:** The group $Q_8$ and its character table.

[F1] The character table of $Q_8$ has the four distinct irreducible characters $\chi_1$, $\chi_2$, $\chi_3$, $\chi_4$, whose rows all begin with the value $1$ ([[ex-the-character-table-of-q-eight]]).

[A1] The degree of an irreducible character is its value at the identity, the first column of the table.

## Refutation

**Proof technique:** construct.

1.1 By [F1], the four characters $\chi_1,\chi_2,\chi_3,\chi_4$ of $Q_8$ are distinct irreducible characters. [F1, given]

2.1 By [F1] and [A1], each of these four has degree $1$, since each row begins with the value $1$ at the identity. [F1, A1, step 1.1]

3.1 Hence four distinct irreducible characters share the degree $1$, so the claimed statement is refuted. [step 2.1, discharge-construct: counterexample] ∎
