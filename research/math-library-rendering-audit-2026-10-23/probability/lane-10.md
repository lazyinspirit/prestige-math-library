# Probability rendering audit — lane 10

Reviewed all 68 assigned items and all 110 listed PNG tiles. Every tile was opened individually at original resolution. Current source files, frozen snapshots, local rendered HTML, and PNG capture hashes match their manifests. Exact per-item and per-tile coverage is in `lane-10.json`.

Confirmed rendering findings: 1. Uncertain editorial candidates: 3.

## ex-empirical-laws-of-a-finite-valued-iid-sample

- Section: Verification
- Source lines: 48, 50
- Kind: raw-ascii-math-in-proof
- Symptom: The frequency symbol q_{n,j} and convergence arrow are emitted as literal ASCII text in the rendered proof, while neighboring p_j expressions are typeset. The rendered formula therefore has an unformatted subscript and -> arrow.
- Screenshot: `screenshots/ex-empirical-laws-of-a-finite-valued-iid-sample--01.png`
- Suggested repair: Typeset both frequency occurrences consistently, for example $q_{n,j}\to p_j$, including the sentence identifying the empirical integral.

## Editorial candidate: cex-a-stationary-chain-need-not-be-ergodic

- Section: Counterexample
- Source lines: 26, 31, 52, 62
- Kind: missing-two-state-transition-diagram
- Rationale: A two-node state diagram would make the counterexample immediate: each state has only a self-loop, so paths stay at their initial state and the initial mixture remains visible. The source fully specifies all vertices, transition edges, and weights.
- Labels and relations to draw/check: Draw nodes 0 and 1, a probability-one self-loop at each, and no edge between them. Mark initial mass 1/2 at each node. If a path-space annotation is included, show the supported constant paths (0,0,...) and (1,1,...) and the event selecting the first path with mass 1/2. Do not imply irreducibility.
- Screenshots: `screenshots/cex-a-stationary-chain-need-not-be-ergodic--01.png`, `screenshots/cex-a-stationary-chain-need-not-be-ergodic--02.png`

## Editorial candidate: cex-modifying-a-process-at-each-time-can-destroy-path-continuity-on-an-uncountable-index-set

- Section: Statement and Counterexample
- Source lines: 27, 34, 58, 62, 64
- Kind: missing-sample-path-spike-diagram
- Rationale: The distinction between pointwise modifications and pathwise indistinguishability is the central contrast, and one path plot can communicate it much faster than the epsilon-delta argument. The source determines the complete path shapes and endpoint behavior.
- Labels and relations to draw/check: For one fixed ω∈[0,1], plot time t∈[0,1], X_t(ω)=0 as the zero line, and Y_t(ω)=1 at t=ω and 0 elsewhere; label the isolated spike and indicate that the same construction applies for interior and endpoint ω. State in the caption that every fixed t has P(U=t)=0, while for every ω the two paths differ at t=ω, so no sample path pair is identical.
- Screenshots: `screenshots/cex-modifying-a-process-at-each-time-can-destroy-path-continuity-on-an-uncountable-index-set--01.png`, `screenshots/cex-modifying-a-process-at-each-time-can-destroy-path-continuity-on-an-uncountable-index-set--02.png`

## Editorial candidate: ex-period-two-of-simple-random-walk-on-a-bipartite-graph

- Section: Example and Proof
- Source lines: 34, 40, 70, 83
- Kind: missing-bipartite-walk-parity-diagram
- Rationale: A graph schematic naturally presents the defining bipartition, alternating support, and positive two-step return that establish the period claim. All shown relations are explicitly required by the source.
- Labels and relations to draw/check: Draw an illustrative connected bipartite graph with V_0 and V_1 in separate columns or colors, x_0∈V_0 adjacent to z∈V_1, and the backtrack x_0→z→x_0. Show an arbitrary graph path alternating sides and label odd-time support in V_1 and even-time support in V_0. Mark that there are no within-part edges and that connectivity transfers the period to every y; avoid implying the graph is finite or that all paths have a fixed length.
- Screenshots: `screenshots/ex-period-two-of-simple-random-walk-on-a-bipartite-graph--01.png`, `screenshots/ex-period-two-of-simple-random-walk-on-a-bipartite-graph--02.png`

Receipt metadata reports no TikZ failures, KaTeX errors, or diagram failures in this lane. No standalone tile showed a clipped formula or other visible clipping; no horizontal overflow was reported as clipping. All items have an item-level diagram check in the JSON inventory.
