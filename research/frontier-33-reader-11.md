# Frontier 33 — Independent reader report, batch 11

## Scope opened

- Manifest and current contracts: `research/frontier-33-batch-11.pages.json` and
  `research/frontier-33-batch-11.proof-contracts.json`.
- Draft A page: `library/combinatorics/co-bird-free-comb-structure.md`; all 13
  assigned items were read in full.
- Draft B page: `library/combinatorics/co-bird-free-comb-structure-examples.md`;
  all four assigned examples were read in full.
- Direct dependency closure needed for the proofs: the current Bird, co-Bird, E,
  comb, purity, anticonnectedness, mixed-quotient, quotient-descent, pattern, and
  well-ordering items. The published prerequisite pages
  `co-e-free-comb-structure` and `quotient-blockades-and-mixing-relations` were
  also opened to check the reused quotient conventions and descent interface.
- Primary source: Huang--Ju--Zhou, *Erdős-Hajnal beyond the five-vertex path*,
  current HTML §6, especially Lemmas 6.1--6.2 and Lemma 6.5 with Claims
  6.5.1--6.5.3 (lines 920--961 and 1052--1126 of the retrieved HTML). Its
  co-Bird-free Lemma 6.5, not the preceding subsection's introductory typo,
  matches the current statements. Diestel, *Graph Theory*, Ch. 1 §§1.1 and 1.4
  was opened as the cited foundation for finite simple graphs, induced subgraphs,
  complements, and connectivity.

## Review and edit

The two local co-Bird witnesses were checked pair-by-pair against the Bird
edge set. The terminal-edge and complete-nonedge-pair arguments retain every
complete/nonadjacent-pair hypothesis; their displayed edge-plus-isolate and
path-plus-isolate subgraphs have the required directions. The E-overlap
relation is an equivalence relation, its classes are anticonnected, quotient
termination is finite, and the external-purity descent has the required
anticonnected no-forward-mixing hypothesis at every descent level. The terminal
pattern argument correctly lifts both pattern edges and nonedges. The singleton
empty-overlap construction covers the one-block boundary case.

I also independently enumerated the 62 nonconstant E-neighbourhood masks in
`ex-co-bird-e-neighbourhood-case-table`: every row has the claimed induced
configuration and adjacency bit pattern; masks 0 and 63 are the only rows not
rejected by either local test.

One confirmed wording defect was repaired in the in-flight B example
`items/ex-co-bird-path-plus-isolate-adjacency-witness.md`, verification step
2.1. The displayed co-Bird is a six-vertex witness, but the full obstruction
configuration also requires the seventh vertex `x`. The text now makes that
distinction and explicitly gives the extension by `x`. This is a local
clarification, not a material mathematical change; the proof contract did not
need alteration. The item has no stale `verification.judge` record.

No other defect remains. No published content, B-page prose, another batch,
plan, or verification stamp was edited.

## Page verdicts and blocker

- A `co-bird-free-comb-structure`: **pass after repair**.
- B `co-bird-free-comb-structure-examples`: **pass after repair**.
- Blocker: none.

## Validation

- PASS — reflow and focused precheck on the changed path-plus-isolate example.
- PASS — focused precheck across all 15 proof-bearing assigned items.
- PASS — rendercheck across both assigned pages and all 17 assigned items:
  19 files, no malformed math or frontmatter.
- PASS — `manifest-deps`: 17 items, 0 normalized, 0 errors.
- PASS — strict proof-contract check: 15/15 proof-bearing items, 0 errors and
  0 warnings.
