# Frontier 8 — Batch 4 repair receipt

**Scope:** the Matchings, Covers, Menger and Network Flows A/B pair only.
This is an authorized post-adjudication repair; it does not record a new judge
or independent author audit.

## Changed item ids

| Item | Repair made |
| --- | --- |
| `def-bipartite-neighbourhood-hall-condition-and-sdr` | The finite incidence graph now uses disjoint tagged left and right copies. It explicitly requires both finite index set and finite union, so shared underlying values cannot make the two bipartition classes overlap. |
| `cor-hall-sdr-finite-families` | The statement now requires finite union as well as finite index set; the proof applies finite Hall to the tagged incidence graph and translates saturated matchings to SDRs. |
| `thm-menger-finite-directed-and-undirected-path-forms` | The proof now performs source/sink preprocessing, treats directed and bidirected edge forms separately, cancels opposed bidirected flow, and gives the vertex-splitting reduction with capacity-one vertex arcs, capacity-$|V|$ transport arcs, the finite cut bound, separator correspondence, and path recovery. |
| `cor-whitney-k-connected-path-characterisation` | The adjacent-terminal case now works in $G-xy$ and distinguishes a nontrivial $x$-side from the singleton $x$-side; the latter supplies the degree/neighbourhood contradiction. The connectivity citation is restricted to its connected, at-least-two-vertex domain. |
| `cex-konig-fails-on-triangle` | Repaired the unmatched inline math delimiter in the matching-number computation. |
| `lem-flow-cut-identity-and-weak-duality` | Reflowed its displayed flow-cut identity onto one source line, removing the Batch-4 multiline-display render failure without changing the mathematical content or its contract. |
| `ex-finite-set-system-sdr` | Synchronized its cited Hall-SDR fact with the repaired finite-index-set and finite-union hypothesis. |

## Contract synchronization

`research/frontier-8-batch-4.proof-contracts.json` was updated for exactly
these proof-bearing ids:

- `cor-hall-sdr-finite-families`
- `thm-menger-finite-directed-and-undirected-path-forms`
- `cor-whitney-k-connected-path-characterisation`
- `cex-konig-fails-on-triangle`
- `ex-finite-set-system-sdr`

Their fact citations, derivation claims, and boundary evidence now track the
repaired proof steps. Statement and proof provenance labels remain unchanged;
no AI-generated item was introduced as a load-bearing dependency. The merged
`research/frontier-8-proof-contracts.json` is intentionally left for the
orchestrator's normal merge/regeneration step.

## Mechanical checks run

- Scoped reflow: unchanged for the original five repaired item files; the
  flow-cut display was then manually reflowed.
- Scoped precheck: the four fatal-proof repairs and the flow-cut lemma passed.
- Scoped rendercheck: every Batch-4 manifest item file passed, including real KaTeX parsing.
- Scoped prosecheck: 6 changed item files, 0 errors and 0 warnings.
- Strict proof-contract: 4/4 updated entries, 0 errors and 0 warnings.
- Finite-smoke: 0 supported checks and 0 errors.
- `depcheck`, `extcheck`, `citecheck`, and Batch-4 content policy passed;
  citecheck retained its pre-existing global heuristic warnings.

## Residual handoff

- The other 20 Batch-4 proof-contract entries were outside this
  confirmed-fatal repair set. They retain the Alpha-recorded generic
  derivation and boundary metadata and need a separate metadata-repair pass.
- The Alpha-recorded nonfatal concerns remain untouched: the strong-induction
  presentation in `thm-hall-marriage-finite-bipartite`, the pure-circulation
  branch in `lem-integral-unit-flow-decomposition`, the general-source gap in
  `thm-gallai-matching-edge-cover-identity`, and short citation/step-anchor
  gaps.
- Global `fwdcheck` still fails outside Batch 4 with four duplicate
  undeclared-forward-reference reports in
  `cex-complex-continuous-multiplicative-map-not-the-standard-exponential` and
  `lem-complex-polynomial-growth-and-minimum-modulus`; neither file was
  touched.

## Step-8 adjudicated definition repairs

This separate repair addresses only the two current-context fatal definition
findings for the Batch 4 flows/connectivity interface.

- `def-integral-network-flow-cut-and-residual-network` — now requires
  $s,t\in V$ with $s\ne t$ and types both endpoint maps as
  $\operatorname{tail},\operatorname{head}:A\to V$. It defines the residual
  endpoint and residual-capacity maps on the labelled copies, and defines an
  $x$-$y$ residual path as a sequence of those copies with matching endpoints
  and no repeated vertex. Thus a path records which parallel copy it uses, and
  a reverse copy remains distinct from an antiparallel forward copy.
- `def-local-path-packings-and-separators` — now defines directed and
  undirected path occurrences as alternating vertex/label lists. Arc- and
  edge-disjointness, arc/edge separator deletion, and vertex separator deletion
  are all stated in terms of those labels and their incidence, so parallel arcs
  or edges cannot be conflated by a vertex-only path list.

The Batch-4 proof contract was synchronized for the five direct proof consumers
of these definitions: `lem-flow-cut-identity-and-weak-duality`,
`lem-residual-augmentation`, `lem-no-augmenting-path-gives-tight-cut`,
`lem-integral-unit-flow-decomposition`, and
`thm-menger-finite-directed-and-undirected-path-forms`. Their definition-source
quotes now name the typed terminal/endpoint or labelled-occurrence clauses. The
two definition ids, titles, statuses, provenance labels, and `precheck: n/a`
remain unchanged.

Scoped mechanical checks after the repair:

- `node tools/rendercheck.mjs` on the two changed definitions: 2 checked,
  0 errors, 0 warnings.
- `node tools/prosecheck.mjs ... --warnings` on the two definitions: 2 checked,
  0 errors, 0 warnings.
- Strict `proof-contract` on the five affected consumer contracts: 5 checked,
  0 errors, 0 warnings.
- `node tools/content-policy.mjs research/frontier-8-batch-4.pages.json --json`:
  Batch 4 scope 31, 0 errors, 0 warnings.
- `jq empty research/frontier-8-batch-4.proof-contracts.json`: valid JSON.

No judge, author audit, rejudge, commit, push, publication, plan, page-prose,
or out-of-scope item action was performed.
