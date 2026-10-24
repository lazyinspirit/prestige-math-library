---
id: "thm-three-sat-completeness-interface"
kind: "theorem"
title: "3SAT is NP-complete"
status: published
origin: "pipeline"
deps: ["def-boolean-formulas-cnf-and-satisfiability-interface", "thm-cook-levin-sat-completeness-interface"]
justified_by: []
landmark: true
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, \u00a72.3.5"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
    - title: "Kabanets, CMPT 710 Lecture 8, Theorem 3"
      url: https://www.cs.sfu.ca/~kabanets/710_2007/new_lectures/l8.pdf
proof_strategy: "direct"
---

## Statement

3SAT, with clauses of size at most three, is NP-complete. Arbitrary CNF has a polynomial-time equisatisfiable conversion to this form, including empty clauses.

## Facts & Assumptions

**Given:** The fixed encoding of formulas and literal lists.

[F1] A CNF is a conjunction of literal-list clauses; empty clauses are false and empty conjunctions true ([[def-boolean-formulas-cnf-and-satisfiability-interface]]).

[F2] SAT is NP-complete, and its hardness reductions output CNF formulas ([[thm-cook-levin-sat-completeness-interface]]).

## Proof

1.1 For a clause $l_1\vee\cdots\vee l_m$ with $m>3$, use distinct fresh variables $y_1,\ldots,y_{m-3}$ and replace it by the clauses $l_1\vee l_2\vee y_1$, then $\neg y_j\vee l_{j+2}\vee y_{j+1}$ for $1\le j\le m-4$, then $\neg y_{m-3}\vee l_{m-1}\vee l_m$. All variables used for different clauses are distinct. Leave clauses of lengths zero, one, two and three unchanged. [F1, construct]

2.1 If the original clause is true, set $y_j=1$ exactly when $l_1,\ldots,l_{j+1}$ are all false. The first clause holds by this definition. In a middle clause, either $y_j=0$, or the first $j+1$ literals are false and then either $l_{j+2}=1$ or $y_{j+1}=1$. In the last clause, either $y_{m-3}=0$ or the first $m-2$ literals are false, forcing one of the last two true. This explicitly extends every satisfying assignment. [step 1.1]

3.1 If all original literals were false, the first new clause would force $y_1=1$, the middle clauses successively force every next $y_j=1$, and the last would be false. Therefore a satisfying extension implies the original clause is true. For $m=4$ there are no middle clauses and the same first/last argument applies. Separate fresh variables let the extensions be performed for all clauses simultaneously. [step 1.1, step 2.1]

4.1 The replacement has $m-2$ clauses for a long clause. Summing lengths gives linear literal count; the encoded indices and a finite scan for unused indices give polynomial bit length and construction time. Malformed CNF strings map to the fixed CNF containing an empty clause. To reduce an arbitrary NP language, first use F2's CNF output and then this map; composition of two polynomial running-time bounds is polynomial, and the two membership equivalences compose. Membership in NP guesses one bit per distinct variable and evaluates clauses. Empty CNF remains satisfiable, and any retained empty clause makes both formulas unsatisfiable. Hence 3SAT is NP-complete. [F1, F2, step 1.1, step 2.1, step 3.1] ∎
