---
id: thm-hyperbolicity-is-invariant-under-quasi-isometry-for-geodesic-spaces
kind: theorem
title: "Hyperbolicity is a quasi-isometry invariant of geodesic spaces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-coarsely-dense-subset-and-quasi-isometry, lem-hyperbolicity-is-transported-by-a-quasi-isometry, def-axiom-of-choice]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Clara Löh, Geometric Group Theory, Section 6.2.3"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
    - title: "Brian H. Bowditch, A course on geometric group theory, Section 2.2"
      url: "https://www.math.ucdavis.edu/~kapovich/280-2009/bhb-ggtcourse.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-06-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Assume the Axiom of Choice. If two geodesic metric spaces are quasi-isometric and one of them is
hyperbolic, then so is the other.

## Facts & Assumptions

**Given:** AC and a quasi-isometry between geodesic metric spaces $X$ and $Y$.

[F1] Under AC, a quasi-isometric embedding of geodesic spaces transports slimness from its target to its source, with an explicit bound. A quasi-isometry also has a controlled coarse inverse, so the implication works in both directions ([[lem-hyperbolicity-is-transported-by-a-quasi-isometry]]).

[A1] AC is used by [F1] for the Morse bound and construction of the controlled inverse ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Let $f:X\to Y$ be the given quasi-isometry. If $Y$ is $\delta$-slim, [F1] first extracts uniform quasi-isometric embedding constants for $f$ and then gives an explicit slimness constant for $X$. The extraction uses the supplied coarse inverse and both bounded composite errors; the transport uses the two Hausdorff inclusions of Morse stability. [given, F1, A1]

2.1 If instead $X$ is hyperbolic, [F1] gives a controlled quasi-isometric inverse $g:Y\to X$. Applying the same transport assertion to $g$ makes $Y$ hyperbolic. In the empty-space case the quasi-isometry convention forces both spaces empty and the claim is vacuous. Thus hyperbolicity is invariant in both directions. [F1, A1, step 1.1] ∎
