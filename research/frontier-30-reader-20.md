# frontier-30 reader-20 report

Date: Friday, September 4, 2026.

## Opened scope

- Control and batch artifacts: `AGENTS.md`, `CLAUDE.md`, `README.md`, `research/frontier-30-reader.task.md`, `research/frontier-30-beta-20.task.md`, `research/frontier-30-batch-20.pages.json`, `research/frontier-30-batch-20.coverage.json`, `research/frontier-30-batch-20.proof-contracts.json`, `research/frontier-30-batch-20.notes.md`.
- Assigned pages: `library/computability-theory/classical-np-completeness-reductions.md`, `library/computability-theory/classical-np-completeness-reductions-examples.md`.
- Assigned A-page items: `def-reduction-gadget-and-interface-invariant`, `def-clique-independent-set-and-vertex-cover-problems`, `thm-three-sat-reduces-to-clique`, `cor-clique-is-np-complete`, `thm-clique-independent-set-and-vertex-cover-are-polynomially-interreducible`, `cor-independent-set-and-vertex-cover-are-np-complete`, `def-directed-hamiltonian-path-and-cycle-problems`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-directed-reduces-to-undirected-hamiltonian-cycle`, `cor-hamiltonian-path-and-cycle-are-np-complete`, `def-subset-sum-and-partition`, `thm-three-sat-reduces-to-subset-sum`, `thm-subset-sum-reduces-to-partition`, `def-set-cover`, `thm-vertex-cover-reduces-to-set-cover`, `def-three-colourability`, `thm-three-sat-reduces-to-three-colourability`, `fs-gadget-correctness-needs-only-one-direction`, `fs-pseudopolynomial-is-polynomial-in-bit-length`.
- Assigned B-page items: `ex-clique-is-np-complete`, `ex-three-sat-reduces-to-three-colourability`, `cex-gadget-correctness-needs-only-one-direction`.
- Dependency items opened to verify cited claims: `def-polynomial-time-many-one-reduction`, `def-np-hard-and-np-complete`, `thm-three-sat-is-np-complete`, `def-graph-isomorphism-and-complement`, `def-finite-cardinality`, `def-finite-simple-graph`, `def-graph-adjacency-incidence-neighbourhood-and-degree`, `def-graph-walk-trail-path-and-cycle`, `def-multigraph-loop-and-digraph`, `def-worst-case-time-and-space-complexity`.
- Dependency pages opened for page-level context: `library/computability-theory/the-cook-levin-theorem.md`, `library/combinatorics/graphs-walks-and-connectivity.md`.
- External source evidence reopened in the web reader for the repaired Hamiltonian route: MIT 6.045J Lecture 16 PDF at the recorded canonical URL, specifically the DHAMPATH and UHAMPATH discussion around PDF pages 26-49 / web lines 726-1159.

## Repairs made

1. `items/thm-three-sat-reduces-to-directed-hamiltonian-cycle.md`
   Replaced the previous proof sketch's bare appeal to a "standard Hamiltonian-path gadget" with an explicit description of the variable gadgets, clause-pair detours, source-to-target witness map, and reverse readback of a satisfying assignment.
2. `items/cor-hamiltonian-path-and-cycle-are-np-complete.md`
   Replaced the old handwavy undirected-path hardness transfer with the explicit `DHAMPATH <=p UHAMPATH` construction using `s_3`, `t_1`, and the forced traversal of each `v_1-v_2-v_3` triple.
3. `research/frontier-30-batch-20.proof-contracts.json`
   Regenerated the citation and derivation entries for the two repaired Hamiltonian items so the contract matches current disk.

No `verification.judge` block was present on either repaired item, so no stale judge record needed removal.

## Defects found

- Repaired in-flight defect: `items/thm-three-sat-reduces-to-directed-hamiltonian-cycle.md`
  The old step `1.1` did not specify enough of the gadget construction to license steps `2.1` and `2.2`; it functioned as a literature pointer rather than a current-disk proof.
- Repaired in-flight defect: `items/cor-hamiltonian-path-and-cycle-are-np-complete.md`
  The old step `1.3` asserted the directed-to-undirected Hamiltonian-path transfer with only a vague "same degree-two argument" reference and no endpoint-specific construction.
- Uneditable defects remaining: none.

## Page verdicts

- `classical-np-completeness-reductions`: passes after the two Hamiltonian repairs. The remaining reduction, definition, false-statement, and complexity-transfer items read coherently against the opened dependencies and current contracts.
- `classical-np-completeness-reductions-examples`: passes unchanged. The worked clique example, three-colourability example, and forward-only reduction counterexample all match the current A-page claims.

## Checks run

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-three-sat-reduces-to-directed-hamiltonian-cycle.md items/cor-hamiltonian-path-and-cycle-are-np-complete.md`
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-three-sat-reduces-to-directed-hamiltonian-cycle.md items/cor-hamiltonian-path-and-cycle-are-np-complete.md`
- `node tools/regen-contract-entries.mjs research/frontier-30-batch-20.proof-contracts.json thm-three-sat-reduces-to-directed-hamiltonian-cycle cor-hamiltonian-path-and-cycle-are-np-complete`
- `node tools/tsx-run.mjs tools/precheck.mts items/def-reduction-gadget-and-interface-invariant.md items/def-clique-independent-set-and-vertex-cover-problems.md items/thm-three-sat-reduces-to-clique.md items/cor-clique-is-np-complete.md items/thm-clique-independent-set-and-vertex-cover-are-polynomially-interreducible.md items/cor-independent-set-and-vertex-cover-are-np-complete.md items/def-directed-hamiltonian-path-and-cycle-problems.md items/thm-three-sat-reduces-to-directed-hamiltonian-cycle.md items/thm-directed-reduces-to-undirected-hamiltonian-cycle.md items/cor-hamiltonian-path-and-cycle-are-np-complete.md items/def-subset-sum-and-partition.md items/thm-three-sat-reduces-to-subset-sum.md items/thm-subset-sum-reduces-to-partition.md items/def-set-cover.md items/thm-vertex-cover-reduces-to-set-cover.md items/def-three-colourability.md items/thm-three-sat-reduces-to-three-colourability.md items/fs-gadget-correctness-needs-only-one-direction.md items/fs-pseudopolynomial-is-polynomial-in-bit-length.md items/ex-clique-is-np-complete.md items/ex-three-sat-reduces-to-three-colourability.md items/cex-gadget-correctness-needs-only-one-direction.md`
  Result: `16 checked, 0 failing -- all clean`.
- `node tools/proof-contract.mjs research/frontier-30-batch-20.proof-contracts.json --strict`
  Result: `proof-contract: 0 error(s), 0 warning(s), 16/16 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-30-batch-20.proof-contracts.json --fail-on-missing-quote`
  Result: `QUOTE NOT FOUND -- none`.
- `node tools/boundary-audit.mjs research/frontier-30-batch-20.proof-contracts.json --fail-on-contradicted`
  Result: `CONTRADICTED DISPOSITIONS -- none found by the three detectors`.
- `git diff --check -- items/thm-three-sat-reduces-to-directed-hamiltonian-cycle.md items/cor-hamiltonian-path-and-cycle-are-np-complete.md research/frontier-30-batch-20.proof-contracts.json`
  Result: clean.

## Blockers

- None.
