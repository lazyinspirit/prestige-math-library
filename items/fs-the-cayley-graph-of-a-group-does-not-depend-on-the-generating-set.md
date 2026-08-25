---
id: fs-the-cayley-graph-of-a-group-does-not-depend-on-the-generating-set
kind: false-statement
title: "FALSE: the Cayley graph of a group is independent of the chosen generating set"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cayley-graph, prop-a-cayley-graph-is-regular-and-is-locally-finite-exactly-when-its-defining-subset-is-finite]
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), 264 pp."
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "C. Drutu and M. Kapovich, Geometric Group Theory (with an appendix by B. Nica), 837 pp."
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
---
## Statement refuted

the Cayley graph of a group is independent of the chosen generating set.

## Facts & Assumptions

**Given:** The proposed claim together with the witness named in the Statement refuted.

[F1] The Cayley graph of a group $G$ with respect to a subset $S$ has vertex set $G$ and edge set $\{\{g,gs\}:g\in G,\ s\in(S\cup S^{-1})\setminus\{e\}\}$ ([[def-cayley-graph]]).

[L1] Every vertex of a Cayley graph has the same degree, and the graph is locally finite exactly when the symmetrised generating set is finite ([[prop-a-cayley-graph-is-regular-and-is-locally-finite-exactly-when-its-defining-subset-is-finite]]).


## Refutation

**Proof technique:** contradiction.

1.1 The claim asserts that the isomorphism type of the Cayley graph depends only on the group. [F1, assume-contra]

2.1 For the integers the generating sets $\{1\}$ and $\{2,3\}$ give graphs of degree two and four, so the claim fails. [F1, L1, step 1.1, discharge-contradiction] ∎
