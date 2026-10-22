---
id: thm-finite-table-coloring-termination-and-correctness
kind: theorem
title: "The finite-table coloring algorithm terminates and is correct"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [ alg-finite-rack-quandle-coloring-from-table, def-rack-fundamental-quandle-and-adjoint-group, def-regular-oriented-link-diagram ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sam Nelson, Link invariants from finite racks, §§2.1–2.2, arXiv:0808.0029v3, pp. 2–5"
      url: "https://arxiv.org/pdf/0808.0029"
    - title: "J. Scott Carter, A Survey of Quandle Ideas, §2, arXiv:1002.4429v2, pp. 3–8"
      url: "https://arxiv.org/pdf/1002.4429"
dependency_level: 3
---

## Statement

For $m\ge1$, a table on $\{1,\ldots,m\}$, either rack or quandle mode, and
a finite regular oriented diagram $D$ with $a$ arcs and $c$ crossings, the
finite-table algorithm terminates. It reports the first failed table-format
condition or rack/quandle axiom with a witness; if every selected axiom holds,
it returns exactly all rack or quandle colorings of $D$, each once, and their
count. It performs at most $m^3+2m^2+2m$ row-shape, table-entry, and triple checks for the
format, rack, and quandle conditions and
tests at most $m^a$ arc assignments, each against the $c$ crossing rules.

## Statement references

[[alg-finite-rack-quandle-coloring-from-table]].

[[def-rack-fundamental-quandle-and-adjoint-group]].

[[def-regular-oriented-link-diagram]].

## Facts & Assumptions

**Given:** The finite table, selected mode, and diagram described in the Statement.

[F1] [[alg-finite-rack-quandle-coloring-from-table]]: the algorithm checks table format, right-translation columns, all ordered triples for self-distributivity, and (in quandle mode) the diagonal before enumerating all arc assignments.

[F2] [[def-rack-fundamental-quandle-and-adjoint-group]]: a rack has bijective right translations and is right self-distributive; a quandle also satisfies $x*x=x$.

[F3] [[def-regular-oriented-link-diagram]]: the diagram has finite crossings and arcs.

## Proof

1.1 The shape check inspects the $m$ row lengths. The range check inspects the finite $m^2$ entries. Each column-permutation check inspects $m$ entries, so all columns use $m^2$ inspections. Thus these checks use at most $2m^2+m$ inspections and terminate after finitely many tests, returning the first specified witness if one fails. [given, F1, F3, algebra]

2.1 The triple loop visits exactly $m^3$ ordered triples and checks the right self-distributive identity of [F2]. In quandle mode the diagonal loop visits $m$ entries and checks exactly $T[x,x]=x$. Thus, after table format is valid, the algorithm accepts exactly the tables satisfying the selected rack axioms, with idempotency required precisely in quandle mode. [F1, F2, step 1.1]

3.1 If a column passes its permutation check, it defines a bijective right translation and its inverse column is completely determined. The assignment loop enumerates every one of the $m^a$ functions from the ordered arc set to the table elements once. At each crossing it tests exactly the relation from [F2], using that inverse column if required; hence an assignment is retained if and only if it is a coloring. [F1, F2, F3, step 2.1]

4.1 Every loop has a finite range, so the procedure terminates; it returns the exact failure witness at the first failed check or the complete coloring set and count when all checks pass. For the empty diagram the unique empty assignment is tested once, and for a diagram with zero crossings every one of the $m^a$ assignments passes. [given, step 1.1, step 2.1, step 3.1] ∎

## Sources

[[alg-finite-rack-quandle-coloring-from-table]].

[[def-rack-fundamental-quandle-and-adjoint-group]].

[[def-regular-oriented-link-diagram]].
