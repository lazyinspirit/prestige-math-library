### boolean-circuits-and-nonuniform-complexity

Read `research/plan-computability-theory-track.md` §3 and TC-26. The design
states `the-cook-levin-theorem` and
`finite-counting-and-binomial-coefficients` as the page prerequisites, and both
are in the current transitive spec closure. TC-27 is downstream: its design
requires this circuit page, while TC-26 expressly has no forward references.

VERDICT: no-drift

### counting-complexity-and-sharpp

Read `research/plan-computability-theory-track.md` §3 and TC-29. The design
routes the counting definitions, parsimonious Cook--Levin construction, and PP
results through `randomized-complexity-and-amplification` and
`the-cook-levin-theorem`; both declared prerequisites are in the current
transitive spec closure. The nearby later advanced-complexity pages are
consumers, not prerequisites.

VERDICT: no-drift

### interactive-proof-systems-and-public-coins

Read `research/plan-computability-theory-track.md` §3 and TC-30. The design
states `randomized-complexity-and-amplification` and
`space-complexity-savitch-and-tqbf` as prerequisites, and both are in the
current transitive spec closure; that closure also supplies the graph
foundation used by the graph-nonisomorphism protocol. TC-31 and its finite-field
input are downstream of this page rather than inputs to it.

VERDICT: no-drift

### kolmogorov-complexity-and-algorithmic-randomness

Read `research/plan-computability-theory-track.md` §3 and TC-37. The design
states `acceptable-numberings-smn-and-the-recursion-theorem`,
`randomized-complexity-and-amplification`, and
`finite-probability-spaces-and-random-variables` as prerequisites. All three,
together with the countability and Cantor-space foundations reached through
them, are in the current transitive spec closure; the nearby PCP and interactive
proof pages are unrelated reading-list noise.

VERDICT: no-drift
