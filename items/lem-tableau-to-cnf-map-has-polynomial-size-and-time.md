---
id: "lem-tableau-to-cnf-map-has-polynomial-size-and-time"
kind: "lemma"
title: "Tableau formulas have polynomial-size polynomial-time CNF encodings"
status: "draft"
origin: "pipeline"
deps: ["def-boolean-formulas-cnf-and-satisfiability-interface", "def-bounded-turing-computation-tableau-interface", "lem-tableau-formula-is-satisfiable-exactly-for-accepting-computations"]
justified_by: []
landmark: false
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
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, \u00a72.3.2"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
    - title: "Kabanets, CMPT 710 Lecture 7, \u00a71"
      url: https://www.cs.sfu.ca/~kabanets/710_2007/new_lectures/l7.pdf
proof_strategy: "direct"
---

## Statement

For a fixed verifier and polynomial certificate and time bounds, $x\mapsto\Phi_{M,x}$ is a polynomial-time map to a polynomial-size CNF. More generally a finite Boolean formula, or a finite acyclic Boolean gate list, has a polynomial-time equisatisfiable CNF encoding with one extension variable per internal gate and a unit clause requiring its output. All sizes count encoded bits.

## Facts & Assumptions

**Given:** A fixed verifier and the tableau bounds, or a formula with its gates listed in dependency order.

[F1] The binary formula encoding counts variable-index bits and permits empty clauses and conjunctions ([[def-boolean-formulas-cnf-and-satisfiability-interface]]).

[F2] The tableau has $(T+1)(T+2)$ cells over a fixed alphabet and the listed finite local clause families ([[def-bounded-turing-computation-tableau-interface]]).

[F3] Satisfiability of that tableau characterizes accepting computations ([[lem-tableau-formula-is-satisfiable-exactly-for-accepting-computations]]).

## Proof

1.1 Put $a=|A|$, a constant of the fixed verifier. There are $a(T+1)(T+2)$ cell variables. Each cell contributes one size-$a$ clause and at most $a(a-1)/2$ binary clauses. Each update contributes at most $a^4$ clauses of width at most four. The pinning clauses number $O(T^2)$ and the accepting clause has at most $a(T+2)$ literals. Thus the literal count is $O(T^2)$; indices take $O(\log(T+2))$ bits. Enumerate times, cells and the constant symbol tuples with binary counters, and output each clause. Counter arithmetic, the initial input lookup and evaluation of the fixed polynomials cost polynomial time. The binary list headers add only linear overhead in the number of entries. [F1, F2]

1.2 For completeness, the gate clauses can be written explicitly. For $v=\neg u$ use $(v\vee u)\wedge(\neg v\vee\neg u)$. For $v=u\wedge w$ use $(\neg v\vee u)\wedge(\neg v\vee w)\wedge(v\vee\neg u\vee\neg w)$. For $v=u\vee w$ use $(v\vee\neg u)\wedge(v\vee\neg w)\wedge(\neg v\vee u\vee w)$. The two possible values of $v$ show that each conjunction holds exactly for the indicated equality: for AND, $v=1$ forces both inputs true and $v=0$ forces at least one false; OR is dual, and NOT forces opposite bits. Constants are pinned by a positive or negative unit clause. Finite list connectives are first expanded as binary trees, using the appropriate constant for an empty list. Finally require the output wire by a unit clause. [F1, given]

2.1 Assign gate values in order after a satisfying assignment to the original variables. Each equality clause and the output unit then holds. Conversely any satisfying CNF assignment obeys every gate equality; induction through the acyclic gate order identifies each gate bit with its evaluated value. The output unit makes the original formula true. These arguments also handle an output that is a lone literal or a constant. No assignment to fresh variables is asserted to work unless it obeys the gate equations. [step 1.2]

3.1 Number the original distinct variables first and new gate variables next, retaining an explicit renaming list; alternatively take new indices above the largest original index. Their bit length is bounded by the input length plus $O(\log(g+2))$ for $g$ gates. There are $O(g)$ clauses after binary expansion, and they can be written by finite scans in polynomial time. Thus the conversion preserves satisfiability in both directions and the tableau's accepting-computation meaning. Zero gates, an empty CNF and an empty clause are handled respectively by the literal output, true constant and false constant rules. [step 1.1, step 1.2, step 2.1, F1, F3] ∎
