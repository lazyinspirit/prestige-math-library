---
id: alg-enumerate-diagrams-up-to-crossing-bound
kind: algorithm
title: "Enumerate diagrams up to a crossing bound"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-planar-diagram-gauss-and-dowker-codes
  - alg-planar-code-validation-and-diagram-reconstruction
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Joel Hass, Jeffrey C. Lagarias, and Nicholas Pippenger, The Computational Complexity of Knot and Link Problems, Journal of the ACM 46 (1999), sections 1 and 7"
      url: "https://arxiv.org/pdf/math/9807016"
      locator: "§1, web text lines 92–105 (finite diagram input); §7 Triangulations, lines 758–854 (polygonal realization of a diagram)"
    - title: "Jeff Erickson, Planar Graphs, Computational Topology lecture notes (2023)"
      url: "https://jeffe.web.engr.illinois.edu/teaching/comptop/2023/notes/09-planar-graphs.html"
      locator: "Rotation Systems and Formalities and Trivialities, lines 49–72"
---

## Definition

**Input:** A nonnegative integer crossing bound $N$.

**Output:** A finite ordered list of reconstructed knot-diagram candidates. A
candidate is a `Valid` output of the planar-code validation procedure whose
code is a normalized planar-diagram code with one oriented component and at
most $N$ crossings. Repeated candidates up to crossing relabeling or planar
isotopy are allowed; the list is not a list of knot types.

**Instructions:**

1. If $N$ is not a nonnegative integer, return `invalid-bound`.
2. Initialize the output list empty. Pass the two normalized crossingless
   one-component codes, with `ccw` and `cw` orientation markers in that order,
   through the validator and append both outputs first.
3. For each $c=1,\ldots,N$ in increasing order, use crossing labels
   $\{1,\ldots,c\}$ and the four normalized dart positions at each crossing.
   Enumerate every crossing-sign vector in lexicographic order, with
   $-1<+1$. The sign determines the incoming and outgoing positions at each
   crossing by the normalized-code convention.
4. For each sign vector, enumerate every bijection from the set of its
   $2c$ outgoing darts to its $2c$ incoming darts in lexicographic order.
   Pair each outgoing dart with its image to obtain the edge involution, and
   assign edge labels by the normalized-code rule.
5. Compute the cycles of $\phi=\alpha\circ\sigma$ for each pairing. For each
   cycle, in increasing order of its least dart, select that cycle in turn as
   the outer face and form the corresponding normalized PD code.
6. Pass each code through the planar-code validation procedure. Append its
   reconstructed output if and only if the validator returns `Valid` and the
   directed component tracing has exactly one cycle. Return the list after
   the finite loops end.

This procedure enumerates normalized finite codes and reconstructed diagrams;
it neither identifies equivalent codes nor decides whether two candidates
represent isotopic knots.

## Definition references

[[def-planar-diagram-gauss-and-dowker-codes]] — normalized PD codes, local sign arrows, edge labels, and face selectors.

[[alg-planar-code-validation-and-diagram-reconstruction]] — validation and reconstruction of each candidate code.

[Hass–Lagarias–Pippenger, §§1, 7](https://arxiv.org/pdf/math/9807016) — finite diagram inputs and reconstruction context.

[Erickson, “Planar Graphs”](https://jeffe.web.engr.illinois.edu/teaching/comptop/2023/notes/09-planar-graphs.html) — rotation systems and face selection.
