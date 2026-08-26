---
id: cor-polynomials-of-degree-at-most-four-are-solvable-by-radicals
kind: corollary
title: "Every polynomial of degree at most four is solvable by radicals"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-symmetric-groups-up-to-four-are-solvable, thm-solvable-galois-group-implies-solvable-by-radicals, thm-galois-group-embeds-in-the-symmetric-group-on-the-roots, thm-subgroups-and-quotients-of-solvable-groups-are-solvable]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Section 7"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
    - title: "J. Ash, Basic Abstract Algebra, Section 6.8"
      url: "https://faculty.math.illinois.edu/~r-ash/Algebra.html"
pipeline_run: null
---

## Statement

Every polynomial over a field of characteristic $0$ of degree at most four is
solvable by radicals.

## Facts & Assumptions

**Given:** A characteristic-$0$ field $F$ and a polynomial $f\in F[x]$ of degree at most four.

[L1] The groups $S_n$ are solvable for $n\le4$ ([[lem-symmetric-groups-up-to-four-are-solvable]]).

[L2] The Galois group of a separable degree-$m$ polynomial embeds in $S_m$ ([[thm-galois-group-embeds-in-the-symmetric-group-on-the-roots]]).

[L3] Subgroups of solvable groups are solvable ([[thm-subgroups-and-quotients-of-solvable-groups-are-solvable]]).

[L4] In characteristic $0$, a polynomial with solvable Galois group is solvable by radicals ([[thm-solvable-galois-group-implies-solvable-by-radicals]]).

## Proof

**Proof technique:** direct.

1.1 Let $E/F$ be the splitting field of $f$, and let $G$ be its Galois group. Since $f$ is separable in characteristic $0$, [L2] embeds $G$ in $S_m$ for some $m\le4$. By [L1] and [L3], the group $G$ is solvable. [L1, L2, L3]

2.1 Apply [L4] to $G$: the polynomial $f$ is solvable by radicals. [step 1.1, L4] ∎
