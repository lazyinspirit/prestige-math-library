---
id: fs-every-value-of-an-irreducible-complex-character-is-real
kind: false-statement
title: "FALSE: every value of an irreducible complex character is real"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [ex-the-character-table-of-a-four]
justified_by: []
aliases: []
proof_strategy: construct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Section 3.5"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
---

## Statement

The statement "every value of an irreducible complex character is real" is
false: the nontrivial one-dimensional characters of $A_4$ take the primitive
cube root of unity $\omega=e^{2\pi i/3}$, which is not real, on the
$3$-cycles.

## Facts & Assumptions

**Given:** The group $A_4$, a primitive cube root of unity $\omega$, and the irreducible character $\chi$ of the character table with $\chi((123))=\omega$.

[F1] The character table of $A_4$ contains the irreducible character $\chi$ with $\chi((123))=\omega$ and $\chi((132))=\omega^{2}$ ([[ex-the-character-table-of-a-four]]).

[A1] A primitive cube root of unity $\omega$ satisfies $\omega\notin\mathbb R$: its imaginary part is nonzero.

## Refutation

**Proof technique:** construct.

1.1 By [F1], the irreducible character $\chi$ of $A_4$ satisfies $\chi((123))=\omega$. [F1, given]

2.1 By [A1], $\omega\notin\mathbb R$, so this value of the irreducible character $\chi$ is not real. [A1, step 1.1]

3.1 Hence the claimed statement, that every value of an irreducible complex character is real, is refuted by the character $\chi$ at $(123)$. [step 2.1, discharge-construct: counterexample] ∎
