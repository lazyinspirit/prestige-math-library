---
page: gap-amplification-and-assignment-testing
title: "Gap Amplification and Assignment Testing"
status: draft
requires: [expander-graphs-and-constraint-graphs, the-cook-levin-theorem, randomized-complexity-and-amplification, algebraic-extensions-degree-and-finite-fields]
items: [def-gap-preserving-csp-reduction, lem-complete-linear-blowup-reductions-compose, def-degree-reduction-by-expander-clouds, lem-cloud-consistency-forces-near-constant-labels, thm-degree-reduction-preserves-unsatisfaction, def-constraint-graph-powering, lem-canonical-local-view-lift-preserves-perfect-satisfiability, def-plurality-decoding-of-powered-local-views, lem-lazy-walk-lengths-within-root-t-have-close-endpoint-laws, lem-plurality-consistency-along-middle-walk-positions, lem-expander-walk-violated-edge-collision-bound, lem-overlap-controlled-union-lower-bound, lem-powering-preserves-perfect-satisfiability, lem-powering-amplifies-small-gaps, thm-gap-amplification-step, def-explicit-constant-rate-constant-distance-code, def-reed-solomon-outer-code-and-binary-linear-inner-code, lem-reed-solomon-outer-code-has-constant-rate-and-distance, lem-random-linear-inner-code-has-fewer-than-one-bad-codeword-in-expectation, lem-conditional-expectation-constructs-the-inner-code-in-polynomial-time, lem-concatenated-code-multiplies-rate-and-distance, thm-explicit-code-construction-and-distance, def-assignment-tester-and-rejection-ratio, def-hadamard-linearity-constraint-system, thm-linearity-test-rejects-proportionally-to-distance, def-quadratic-consistency-test, lem-quadratic-test-soundness, lem-circuit-satisfaction-is-linear-quadratic-consistency, lem-exponential-base-assignment-tester-from-quadratic-oracles, lem-trivial-circuit-constraint-system-is-a-weak-assignment-tester, lem-constant-alphabet-assignment-tester-composition, lem-proximity-gap-amplification-preserves-input-coordinates, thm-constant-query-assignment-tester, lem-tester-size-and-construction-time-are-polynomial, fs-repeating-constraints-amplifies-the-gap]
examples: []
---

This page proves Dinur's gap-amplification step and the constant-query
assignment tester built on it. It first fixes the published conventions for
binary constraint graphs, their value and unsatisfaction fractions, and
complete uniform gap-preserving CSP reductions, which compose with multiplied
blowup and iterated gap maps. Degree reduction then replaces every vertex by
one port per incidence, installs an expander cloud of equality edges inside
each vertex and a tautological overlay at every port, and outputs a
$387$-regular graph whose unsatisfaction bounds that of the original through
plurality decoding of the ports.

Powering turns a labeling into a table of local views on a radius
$t+\lceil\sqrt t\rceil$ ball, with one slot per lazy walk of length $2t+1$. The
page proves the canonical lift of a satisfying labeling, plurality decoding of
powered labelings, and the walk estimates: close endpoint laws for nearby
lengths, plurality agreement along middle positions, controlled collisions of
violated-edge positions, and an overlap-controlled union lower bound. Together
they give $\operatorname{UNSAT}(G_t)\ge\beta_0\sqrt t\min(\operatorname{UNSAT}(G),1/t)$,
so that composing degree reduction with powering is a complete uniform
linear-blowup gap-amplification step with gap map $\beta\sqrt t\min(\varepsilon,c/t)$.

The assignment-testing half of the page records an explicit constant-rate
constant-distance binary code, built by concatenating a Reed-Solomon outer code
with a linear inner code produced by conditional expectation, and then defines
assignment testers and their rejection ratios. It proves the BLR linearity
test, the quadratic tensor test and the circuit-to-linear-quadratic reduction,
builds an exponential-size constant-query base tester and an $O(m+n)$ gate
tester, composes constant-alphabet testers, and proves the proximity
amplification map that preserves the raw input coordinates and their incidence
balance. Iterating that map from the gate tester yields a polynomial-size
constant-query assignment tester for every Boolean circuit, with the explicit
size and construction-time accounting; the page's false statement records that
duplicating constraints alone cannot amplify a gap.
