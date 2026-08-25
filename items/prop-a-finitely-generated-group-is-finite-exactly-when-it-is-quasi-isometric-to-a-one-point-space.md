---
id: prop-a-finitely-generated-group-is-finite-exactly-when-it-is-quasi-isometric-to-a-one-point-space
kind: proposition
title: "A finitely generated group is finite if and only if it is quasi-isometric to a point"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-word-metric-balls-are-finite-exactly-when-the-generating-set-is-finite, prop-a-metric-space-is-quasi-isometric-to-a-one-point-space-exactly-when-it-is-nonempty-of-finite-diameter, def-quasi-isometry-type-of-a-finitely-generated-group, def-metric-bounded-diameter, def-finite-cardinality]
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
## Statement

A finitely generated group is finite if and only if it is quasi-isometric to a point.

## Facts & Assumptions

**Given:** The hypotheses of the Statement.

[F1] A finitely generated group is quasi-isometric to a metric space when its word metric for some, equivalently every, finite generating set is ([[def-quasi-isometry-type-of-a-finitely-generated-group]]).

[L1] Balls of a word metric are finite if and only if the generating set is finite ([[prop-word-metric-balls-are-finite-exactly-when-the-generating-set-is-finite]]).

[L2] The nonempty metric spaces quasi-isometric to a one-point space are exactly those of finite diameter ([[prop-a-metric-space-is-quasi-isometric-to-a-one-point-space-exactly-when-it-is-nonempty-of-finite-diameter]]).

[L3] **Bounded subset.** $A$ is **bounded** if $A = \emptyset$ or there are $x_0 \in X$ and a real $r > 0$ with $A \subseteq B(x_0, r)$. ([[def-metric-bounded-diameter]]).

[L4] A set $A$ is **finite** when $A \approx n$ for some $n \in \mathbb{N}$. ([[def-finite-cardinality]]).


## Proof

**Proof technique:** direct.

1.1 A finite group has finite diameter in any word metric, hence is quasi-isometric to a point. [F1, L2, L3, L4]

2.1 Conversely finite diameter with a finite generating set makes the whole group a ball of finite radius, and such balls are finite. [F1, L1, L2, L3, L4, step 1.1] ∎
