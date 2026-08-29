---
id: fs-a-complex-character-of-a-finite-group-is-always-a-homomorphism
kind: false-statement
title: "FALSE: a complex character of a finite group is always a group homomorphism"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [ex-the-character-table-of-s-three]
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
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Chapter 3"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Statement

The statement "a complex character of a finite group is always a group
homomorphism" is false: the standard character $\chi_2$ of $S_3$ is not a
homomorphism $S_3\to\mathbb C^{\times}$.

## Facts & Assumptions

**Given:** The group $S_3$ and its standard character $\chi_2$.

[F1] The character table of $S_3$ gives $\chi_2((12))=0$ on the class of the transposition $(12)$ ([[ex-the-character-table-of-s-three]]).

[A1] A group homomorphism $\varphi:S_3\to\mathbb C^{\times}$ takes values in the multiplicative group $\mathbb C^{\times}$, in which $0$ is not an element.

## Refutation

**Proof technique:** construct.

1.1 By [F1], $\chi_2((12))=0$. [F1, given]

2.1 If $\chi_2$ were a homomorphism $S_3\to\mathbb C^{\times}$, then by [A1] its value at $(12)$ would be an element of $\mathbb C^{\times}$, in particular nonzero, contradicting step 1.1. [A1, step 1.1]

3.1 Hence $\chi_2$ is not a group homomorphism, so the claimed statement is refuted. [step 2.1, discharge-construct: counterexample] ∎
