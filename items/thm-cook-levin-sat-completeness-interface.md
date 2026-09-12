---
id: "thm-cook-levin-sat-completeness-interface"
kind: "theorem"
title: "Cook-Levin: SAT is NP-complete"
status: "draft"
origin: "pipeline"
deps: ["def-boolean-formulas-cnf-and-satisfiability-interface", "lem-tableau-formula-is-satisfiable-exactly-for-accepting-computations", "lem-tableau-to-cnf-map-has-polynomial-size-and-time", "def-polynomial-time-verifier-and-reduction-interface"]
justified_by: []
landmark: true
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, Theorem 2.10"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
    - title: "Kabanets, CMPT 710 Lecture 7, Theorem 1"
      url: https://www.cs.sfu.ca/~kabanets/710_2007/new_lectures/l7.pdf
proof_strategy: "direct"
---

## Statement

SAT is NP-complete under polynomial-time many-one reductions. For each verifier-defined language $L$ there is a total polynomial-time map $x\mapsto\Phi_x$ to CNF encodings such that $x\in L$ iff $\Phi_x$ is satisfiable.

## Facts & Assumptions

**Given:** The fixed binary syntax and a verifier for an arbitrary $L$ in NP.

[F1] SAT permits general formulas and CNF list encodings and rejects malformed words ([[def-boolean-formulas-cnf-and-satisfiability-interface]]).

[F2] Guarded witnesses have an equivalent fixed-length polynomial certificate format, and polynomial reductions compose ([[def-polynomial-time-verifier-and-reduction-interface]]).

[F3] The bounded tableau is satisfiable iff a permitted certificate gives acceptance ([[lem-tableau-formula-is-satisfiable-exactly-for-accepting-computations]]).

[F4] This tableau CNF can be written in polynomial time and size ([[lem-tableau-to-cnf-map-has-polynomial-size-and-time]]).

## Proof

1.1 Parse the proposed SAT input. Reject if malformed. Otherwise enumerate distinct variable names by first occurrence, read that many certificate bits and recursively evaluate the formula. There are at most as many variables and nodes as input bits, and even repeated scans and pairwise name comparisons take polynomial time. Accept exactly when evaluation is true. The empty conjunction and true constant need no certificate bits, while an empty clause and false constant never pass. Thus SAT belongs to verifier-defined NP. [F1, F2]

1.2 Fix the verifier of $L$ and normalize its guarded certificates using the explicit length field. The tableau lemma then gives, for every binary $x$, $x\in L$ iff $\Phi_{M,x}$ is satisfiable. All strings are legitimate source inputs; there is no implicit promise to parse $x$ as a machine or formula. The fixed verifier itself determines any desired rejection of special source encodings. [F2, F3]

2.1 Output the CNF encoding from F4. Its polynomial construction bound includes the whole input and witness length, and it always returns a well-formed formula. The equivalence in step 1.2 makes this a total many-one reduction to SAT. At length zero the same normalized verifier and enlarged polynomial bound apply; no exceptional input is omitted. Since $L$ was arbitrary, SAT is NP-hard, and step 1.1 proves NP-completeness. [F1, F2, F4, step 1.2, step 1.1] ∎
