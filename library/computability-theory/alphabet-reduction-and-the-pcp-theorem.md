---
page: alphabet-reduction-and-the-pcp-theorem
title: "Alphabet Reduction and the PCP Theorem"
status: published
requires: [gap-amplification-and-assignment-testing, arithmetization-and-the-sum-check-protocol, the-cook-levin-theorem]
items:
  - def-pcp-verifier-randomness-query-and-proof-length
  - def-pcp-class-with-completeness-and-soundness
  - lem-two-query-pcps-and-constraint-graphs-are-equivalent
  - def-walsh-hadamard-encoding-and-relative-distance
  - lem-walsh-hadamard-code-has-distance-one-half
  - def-robust-codeword-blocks-for-constraint-graphs
  - lem-robust-edge-circuit-has-distance-gap
  - lem-random-subsum-detects-a-nonzero-binary-vector
  - def-quadratic-equation-instance-and-tensor-code-oracles
  - lem-boolean-circuits-reduce-to-quadratic-equation-systems-with-a-fixed-input-prefix
  - lem-blr-testing-supplies-nearby-linear-decoders
  - lem-tensor-consistency-test-soundness
  - lem-random-subsum-verifies-all-quadratic-equations-with-constant-error
  - thm-constant-query-exponential-pcp-for-quadratic-equations
  - def-pcp-of-proximity-and-concatenation-test
  - lem-concatenation-test-enforces-a-shared-prefix
  - thm-two-piece-pcp-of-proximity
  - def-composition-with-an-assignment-tester
  - lem-composition-preserves-perfect-completeness
  - lem-composition-transfers-rejection-ratio
  - lem-bounded-arity-boolean-csp-to-binary-constraint-graph
  - thm-alphabet-reduction-step
  - lem-alphabet-reduction-controls-size-and-degree
  - def-dinur-pcp-transformation
  - lem-one-transformation-preserves-satisfiability
  - lem-one-transformation-amplifies-gap
  - lem-one-transformation-has-constant-factor-growth
  - lem-logarithmically-many-iterations-reach-constant-gap
  - lem-three-sat-to-binary-constraint-graph
  - thm-gap-csp-is-np-hard
  - thm-pcp-theorem-np-equals-pcp-log-n-o-one
  - thm-pcp-error-amplification
  - fs-gap-amplification-alone-controls-alphabet
  - fs-pcp-proofs-are-randomized-strings
examples: []
---

The PCP theorem gives an alternative way to verify an NP certificate: a
polynomial-time verifier reads a fixed proof string at only a constant number
of locations chosen with $O(\log n)$ random bits. This page fixes the proof
length, completeness, soundness and nonadaptive-query conventions before
turning two-query verifiers into binary constraint graphs.

The alphabet-reduction argument first encodes graph labels as shared
Walsh–Hadamard blocks. A violated decoded edge stays far from the accepting
inputs of its edge circuit. Linear and tensor consistency tests, random
subsum checks, and a two-piece PCP of proximity supply a constant-query
assignment tester. Composing the tester with each edge preserves perfect
completeness and transfers a constant fraction of the original unsatisfaction
to a Boolean bounded-arity system. A binary-star conversion then gives one
fixed $66$-symbol alphabet, with controlled graph size and degree.

The fixed-alphabet transformation combines that reduction with the earlier
graph gap-amplification step. One iteration doubles sufficiently small
unsatisfaction while growing the explicit graph by only a constant factor;
$O(\log m)$ iterations reach a constant gap at polynomial size. The
three-CNF graph reduction and Cook–Levin theorem make this gap promise
NP-hard. Sampling a random graph edge proves
$\mathrm{NP}=\operatorname{PCP}(\log n,O(1))$ with perfect completeness and
constant soundness below one. Independent repetition amplifies soundness on
the same fixed proof. The two false statements delimit the construction:
graph powering alone can enlarge its view alphabet, and the PCP proof string is
not sampled afresh for each verifier run.

The gap-CSP and PCP theorems assume the Axiom of Choice for the current
expander spectral proof route through algebraic embedding extension. Their
finite reductions retain deterministic polynomial-time constructions.
