---
id: ex-the-quasi-isometry-group-of-a-metric-space-of-finite-diameter-is-trivial
kind: example
title: "A nonempty metric space of finite diameter has trivial quasi-isometry group"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-quasi-isometry-group-of-a-metric-space, prop-the-quasi-isometry-group-is-a-group-and-quasi-isometric-spaces-have-isomorphic-quasi-isometry-groups, def-metric-bounded-diameter, def-bounded-distance-between-maps]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), 264 pp."
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "C. Drutu and M. Kapovich, Geometric Group Theory (with an appendix by B. Nica), 837 pp."
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
---
## Example

A nonempty metric space of finite diameter has trivial quasi-isometry group.

## Facts & Assumptions

**Given:** The objects and hypotheses in the Example.

[F1] The quasi-isometry group of a metric space is the set of quasi-isometries of it modulo bounded distance ([[def-quasi-isometry-group-of-a-metric-space]]).

[L1] The quasi-isometry group is a group under composition, and a quasi-isometry induces an isomorphism between the quasi-isometry groups of its source and target ([[prop-the-quasi-isometry-group-is-a-group-and-quasi-isometric-spaces-have-isomorphic-quasi-isometry-groups]]).

[L2] **Bounded subset.** $A$ is **bounded** if $A = \emptyset$ or there are $x_0 \in X$ and a real $r > 0$ with $A \subseteq B(x_0, r)$. ([[def-metric-bounded-diameter]]).

[L3] Two maps into a metric space are at bounded distance when the distance between their values is bounded uniformly ([[def-bounded-distance-between-maps]]).


## Verification

**Proof technique:** direct.

1.1 In a space of finite diameter every self-map is at distance at most the diameter from the identity. [F1, L2, L3]

2.1 So there is exactly one bounded-distance class, and the quasi-isometry group is trivial. [F1, L1, step 1.1] ∎
