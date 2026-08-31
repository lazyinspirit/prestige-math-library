---
id: def-dovetailing-schedule
kind: definition
title: "A dovetailing schedule"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-sequence]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 17: More undecidable languages; reductions"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.17.pdf"
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Definition

For each stage $s\in\mathbb N$, let
$$ S_s:=\{(i,t)\in\mathbb N^2:i+t=s\}. $$
Inside $S_s$, order the pairs lexicographically by $i$ and then by $t$.

The sequence
$$ S_0,S_1,S_2,\dots $$
is the **stage-sum dovetailing schedule**. Running task $i$ for one more local
step at each occurrence of a pair $(i,t)$ means that global stage $s$ performs
exactly the finitely many local simulations whose task index and local time sum
to $s$.

## Remarks

- Every stage is finite, so one global stage can be completed before the next
  begins.

- The point of the schedule is fairness: no fixed finite amount of work on a
  fixed task is postponed forever.
