---
id: cex-an-infinite-generating-set-destroys-the-comparison-of-word-metrics
kind: counterexample
title: "Taking $\\mathbb Z$ itself as a generating set gives a word metric of diameter one, not bilipschitz equivalent to the standard one"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-word-length-with-respect-to-a-generating-set, def-word-metric, prop-word-metric-balls-are-finite-exactly-when-the-generating-set-is-finite, thm-two-finite-generating-sets-of-a-group-give-bilipschitz-equivalent-word-metrics, def-metric-bounded-diameter]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), 264 pp."
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "C. Drutu and M. Kapovich, Geometric Group Theory (with an appendix by B. Nica), 837 pp."
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
---
## Statement refuted

The comparison theorem for word metrics remains true for arbitrary generating sets.

## Facts & Assumptions

**Given:** The proposed claim together with the witness named in the Statement refuted.

[F1] The word length $|g|_S$ is the least $n$ such that $g$ is a product of $n$ elements of $S\cup S^{-1}$ ([[def-word-length-with-respect-to-a-generating-set]]).

[L1] The word metric of $G$ with respect to $S$ is $d_S(g,h)=|g^{-1}h|_S$ ([[def-word-metric]]).

[L2] Balls of a word metric are finite if and only if the generating set is finite ([[prop-word-metric-balls-are-finite-exactly-when-the-generating-set-is-finite]]).

[L3] The identity map between the word metrics of two finite generating sets of a group is a bilipschitz equivalence ([[thm-two-finite-generating-sets-of-a-group-give-bilipschitz-equivalent-word-metrics]]).

[L4] **Bounded subset.** $A$ is **bounded** if $A = \emptyset$ or there are $x_0 \in X$ and a real $r > 0$ with $A \subseteq B(x_0, r)$. ([[def-metric-bounded-diameter]]).


## Counterexample

**Proof technique:** direct.

1.1 Taking the whole group of integers as generating set gives every nonzero integer word length one. [F1, L1]

2.1 So that word metric has diameter one, while the metric for the generating set $\{1\}$ is unbounded: the distance from $0$ to $n$ is $|n|$. Its individual balls are finite, as [L2] requires, but their radii are not bounded uniformly. [L1, L2, L4, step 1.1]

3.1 The two are therefore not bilipschitz equivalent; the failing hypothesis of the comparison theorem is the finiteness used to take a maximum over the symmetrised set. [L3, step 2.1] ∎
