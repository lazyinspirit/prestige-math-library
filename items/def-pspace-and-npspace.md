---
id: def-pspace-and-npspace
kind: definition
title: "The classes PSPACE and NPSPACE"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-dtime-ntime-dspace-and-nspace]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Eric Blais, Models of Computation, 17. Space Complexity"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w25/space"
---

## Definition

The class **PSPACE** is the union of all deterministic polynomial-space classes:

$$\mathrm{PSPACE}:=\bigcup_{p\text{ polynomial}}\mathrm{DSPACE}(p(n)).$$

The class **NPSPACE** is the union of all nondeterministic polynomial-space
classes:

$$\mathrm{NPSPACE}:=\bigcup_{p\text{ polynomial}}\mathrm{NSPACE}(p(n)).$$

Equivalently, a language $L$ lies in PSPACE when there is a deterministic
multitape Turing machine deciding $L$ using at most $O(n^c)$ space for some
constant $c$, and similarly $L$ lies in NPSPACE when there is such a
nondeterministic decider. The meanings of $\mathrm{DSPACE}(s(n))$ and
$\mathrm{NSPACE}(s(n))$ are those of [[def-dtime-ntime-dspace-and-nspace]].

## Remarks

- The page uses polynomial space rather than a single fixed bound because
  closure and completeness statements are stated for the whole class.
- No closure under complement is built into the definition of NPSPACE; that is
  a later theorem.
