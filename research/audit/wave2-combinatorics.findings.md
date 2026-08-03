# Wave 2 `combinatorics` Audit-Beta findings

Scope: A1 provenance determination, A2 citation-precision, mathematical-accuracy, and proof-contract audit, and A4 application of the orchestrator-approved repairs.

## Continuity checkpoint — 2026-08-03

- Substage: A1/A2 evidence collation and proof-contract construction after the complete first reading pass.
- Owned artifacts: `research/audit/wave2-combinatorics.provenance.jsonl`, `research/audit/wave2-combinatorics.findings.md`, and `research/audit/wave2-combinatorics.proof-contracts.json`.
- Completed checks: all six binding inputs were read in full; all 83 manifest items and all four published pages were read; every step of all 59 proof-bearing items was read; every in-scope dependency citation was inspected; and the three cited targets in the unaudited `countability-and-uncountability` pair were checked directly against their on-disk text without treating their missing provenance tags as defects.
- Evidence state: all 13 URLs already present in the batch were checked successfully, including the two PDFs through indexed direct-URL retrieval after the page parser did not render them. Additional sources used for precision decisions were opened or retrieved successfully before inclusion.
- Provisional findings requiring final citation wording: two facts conflate the definition of a cycle with the definition of a cycle graph; one component-partition fact omits the exact already-proved target; and one extremal edge-count citation supports only the complete-graph equality case, not the general simple-graph upper bound. No mathematical falsehood has surfaced.
- Remaining checks: freeze all 83 statement/proof provenance determinations, generate the 59 complete proof contracts, validate exact source-section quotations and proof-step coverage mechanically, recheck recorded URLs, and replace this provisional section with the final classified proposals and coverage statement.
- Exact next action: construct the provenance ledger and proof-contract document from the manifest and item texts, run the strict proof-contract gate, then finalize the evidence and triage record below.

## Final A1–A2 result

This section supersedes the provisional wording in the continuity checkpoint. The batch contains 83 items, of which 59 are proof-bearing and 24 are definitions or a convention remark without a separate proof component. No repair has been applied.

The mathematical audit found no false theorem, invalid counterexample, or proof gap exceeding the standing triage allowance. It found six citation-precision defects and one bulk provenance-retag proposal. There are no class (a) falsehood proposals and no class (d) debatable-restatement proposals.

## A4 blocker disposition — source liveness

The required shell liveness check was attempted first, before any item edit:

```text
curl -sS -o /dev/null -w "%{http_code}" -L <url>
```

For the CMU alternate, the dead MIT PDF, and the forbidden Chicago PDF, this workspace returned `curl: (6) Could not resolve host` and HTTP code `000`; external DNS is unavailable to non-escalated shell commands. No permission prompt was raised. The browser retrieval available to this session did open the retained 71-page CMU PDF and its Erdős–Ko–Rado section, and the orchestrator's A3 record independently reports that exact URL as HTTP 200. The dead MIT duplicate was removed from the theorem row and the CMU alternate retained as expressly directed.

The other standard rows were changed to `statement: ai-altered`, evidence `established-knowledge`, `urls: []`, and `alpha_concurred: false`, so none carries a sourced label resting on an unreachable URL. They are `def-intersecting-family`, `lem-katona-cyclic-interval-bound`, `fs-erdos-ko-rado-without-the-ground-set-bound`, `ex-an-erdos-ko-rado-star`, `cex-erdos-ko-rado-fails-below-two-k`, `def-sunflower`, `lem-sunflower-maximal-disjoint-subfamily`, and `thm-erdos-rado-sunflower-lemma`. The locally selected witness `ex-a-four-petal-sunflower-with-nonempty-core` remains `ai-generated` with evidence `trivial`; its dead URL was removed because its written-out finite verification, not a literature source, is its evidence. Alpha concurrence at A6 is therefore required for the eight new established-knowledge waivers.

## W2-COMB-PROV-001 — provenance determination for all 83 legacy items

Class: **(c) provenance retag**. Recommended A3 disposition: approve the 83 exact ledger rows for later A4 application, subject to Alpha concurrence where the workflow requires it.

The ledger is exhaustive and is the proposal of record: 15 statements are literature-derived with exact-source evidence, 62 are AI-altered semantic restatements of established mathematics, and six are positively identified locally composed finite witnesses with trivial direct verification. Proof provenance is 22 AI-altered, 37 AI-generated, and 24 not-applicable. No statement is classified from failure to find a source, no row uses established-knowledge as an uncertainty sink, and no genuinely undecidable provenance case remains.

### Exact-source statements (15)

- thm-mirsky-finite-posets — proof AI-altered.
- thm-dilworth-finite-posets — proof AI-altered.
- lem-maximal-chains-of-the-boolean-lattice — proof AI-altered.
- thm-lym-inequality — proof AI-altered.
- lem-katona-cyclic-interval-bound — proof AI-altered.
- thm-erdos-ko-rado — proof AI-altered.
- thm-erdos-rado-sunflower-lemma — proof AI-altered.
- thm-birkhoff-representation-finite-distributive-lattices — proof AI-altered.
- lem-every-graph-walk-contains-a-path-between-its-endpoints — proof AI-altered.
- thm-bipartite-iff-no-odd-cycle — proof AI-altered.
- thm-handshake-lemma-for-finite-simple-graphs — proof AI-generated.
- cor-a-graph-has-an-even-number-of-odd-degree-vertices — proof AI-generated.
- lem-edge-connectivity-at-most-minimum-degree — proof AI-generated.
- lem-vertex-connectivity-at-most-edge-connectivity — proof AI-generated.
- thm-whitney-connectivity-inequalities — proof AI-generated.

### Positive novelty determinations with direct finite verification (6)

- ex-width-three-poset-and-a-minimum-chain-cover.
- ex-a-four-petal-sunflower-with-nonempty-core.
- ex-walk-trail-path-and-cycle-in-one-small-graph.
- ex-components-distance-and-girth-in-a-disconnected-graph.
- cex-strict-whitney-connectivity-inequalities.
- ex-deletion-contraction-and-a-minor-model.

These six determinations concern the particular locally selected finite witnesses, not novelty of their governing definitions or theorems. Each witness was recomputed directly. The other 62 statements are all recoverable semantic restatements and are therefore AI-altered, even where their exact local packaging did not surface in a source.

All 13 distinct URLs recorded by the ledger returned HTTP 200 through the permitted web-retrieval path on 2026-08-03. The Fox and Babai–Frankl PDFs did not render in the general page parser, but exact direct-URL searches returned their indexed mathematical content at those same URLs; both direct resources were checked before being retained. The shell sandbox has no external DNS and was not used as evidence.

## A2 citation-precision proposals

### W2-COMB-001 — unused Dilworth decomposition fact

Class: **(b) citation-precision repair**. Recommended A3 disposition: remove the unused fact and its redundant direct dependency.

In items/thm-dilworth-finite-posets.md, fact L2 cites lem-dilworth-maximal-antichain-decomposition, but no numbered proof step cites L2. The only step needing the down-set/up-set construction is step 2.1, which cites L1; L1 is the stronger induction-step lemma and already states all facts that step uses. The contract therefore correctly records an empty uses array for L2.

Smallest proposed repair: delete L2 and remove lem-dilworth-maximal-antichain-decomposition from this theorem's direct deps. Do not alter the theorem or proof. The target remains a dependency of lem-dilworth-induction-step, where it is genuinely used.

### W2-COMB-002 — unused finiteness fact in Katona's cyclic-interval lemma

Class: **(b) citation-precision repair**. Recommended A3 disposition: remove the unused fact and its redundant dependency.

In items/lem-katona-cyclic-interval-bound.md, F2 says that the ground set is finite of cardinality n and cites def-finite-cardinality. No proof step cites F2; the finite cyclic order and its size are already Given data. The contract therefore correctly records an empty uses array.

Smallest proposed repair: delete F2 and remove def-finite-cardinality from deps. No mathematical text outside that dead fact changes.

### W2-COMB-003 — component-partition clause lacks its exact target

Class: **(b) citation-precision repair**. Recommended A3 disposition: add the exact same-page target.

In items/lem-vertex-connectivity-at-most-edge-connectivity.md, F2 says that components of a disconnected graph partition its vertex set. Its links are def-connected-graph-and-connected-component and lem-every-graph-walk-contains-a-path-between-its-endpoints. Those targets define reachability and convert walks to paths, but neither states the partition theorem. The exact already-proved source is cor-connected-components-partition-the-vertex-set.

Smallest proposed repair: add cor-connected-components-partition-the-vertex-set to deps and link it in F2 for the partition clause. Retain the existing reachability/walk support for the crossing-edge clause. The proof itself is sound.

### W2-COMB-004 — complete-graph count is cited as a general simple-graph upper bound

Class: **(b) citation-precision repair**. Recommended A3 disposition: make the subset-count route explicit.

In items/thm-dense-finite-graph-is-connected.md, L1 claims that every simple graph on q vertices has at most binom(q,2) edges, with equality for the complete graph, but cites only cor-complete-graph-edge-count. That corollary states the equality count for the complete graph; it does not state the universal upper bound used at step 2.1.

Smallest faithful repair: add def-finite-simple-graph, thm-two-element-subsets-count, and thm-subset-of-a-finite-set to deps and to L1's support. These give E(H) as a subset of [V(H)]², the cardinality binom(q,2) of that ambient edge set, and the finite-subset inequality. Retain cor-complete-graph-edge-count for the equality case. The extremal algebra and contradiction proof are correct.

### W2-COMB-005 — a cycle is not the cited definition of a cycle graph

Class: **(b) citation-precision repair**. Recommended A3 disposition: retarget the fact.

In items/fs-all-even-degrees-force-one-cycle.md, F3 says every vertex of a cycle graph has two neighbours but links def-graph-walk-trail-path-and-cycle. That target defines a cycle as a closed walk substructure; it does not define the graph C_n. The exact same-page target is def-standard-complete-bipartite-path-and-cycle-graphs, which defines C_n.

Smallest proposed repair: replace def-graph-walk-trail-path-and-cycle by def-standard-complete-bipartite-path-and-cycle-graphs in F3 and deps. The bowtie refutation is otherwise correct.

### W2-COMB-006 — the companion bowtie counterexample repeats the cycle-graph miscitation

Class: **(b) citation-precision repair**. Recommended A3 disposition: retarget the fact.

In items/cex-connected-even-degree-bowtie-is-not-a-cycle.md, F2 makes the same cycle-graph degree claim and links the same cycle-as-walk definition. Replace that link and dependency with def-standard-complete-bipartite-path-and-cycle-graphs. The explicit graph is connected, has degree sequence (4,2,2,2,2), and is not a cycle graph, so no counterexample claim changes.

## Explicit triage dispositions

- In lem-every-graph-walk-contains-a-path-between-its-endpoints, F3 compresses the elementary facts that a finite list has finitely many segment-deletion descendants and that a nonempty finite set of their natural lengths has a least member. The linked finite-cardinality definition does not spell out both consequences, but a competent reader closes them immediately; this is within the binding 30-second allowance and is not proposed for repair.
- In thm-minimum-degree-forces-a-long-path, F3 similarly compresses finiteness of the family of vertex-simple paths and existence of a greatest length. The graph is explicitly finite and paths have no repeated vertices. This is the same allowed elementary finite-enumeration inference, not a load-bearing citation mismatch.
- The meet/order equivalence used in lem-join-irreducible-is-join-prime is an immediate unpacking of greatest lower bound, and the parity arithmetic in the odd-degree corollary is written out. Both are accepted under the same triage rule.
- The single scoped citecheck warning is a false positive: “Reflexivity” in cor-connected-components-partition-the-vertex-set refers to the equivalence relation already supplied by L1, not an order axiom.
- The single scoped prosecheck warning is a false positive: “one of these” in lem-an-odd-closed-walk-contains-an-odd-cycle counts the two closed walks created by a mathematical split, not items on a page.

## Mathematical and page-level result

The Dilworth induction, Mirsky colouring, LYM and local-LYM double counts, Sperner equality analysis, symmetric-chain induction, Katona/Erdős–Ko–Rado argument, sunflower induction, Birkhoff representation, odd-walk induction, bipartite equivalence, connectivity inequalities, extremal path and dense-graph arguments, and every finite example/counterexample were checked step by step. The Petersen verification was checked separately through both displayed spanning paths, the girth argument, every small-side boundary-edge estimate, and both connectivity lower bounds. No mathematical repair is proposed.

Both A-page summaries satisfy the current shape contract: chains has two paragraphs of 50 and 66 words, and graphs has two paragraphs of 53 and 73 words. Both B/examples pages have empty authored bodies. No page-prose proposal is needed.

The three countability/uncountability target items named by the cross-wave finite-set edges—def-finite-cardinality, thm-subset-of-a-finite-set, and cor-cardinality-of-the-power-set—were read directly from disk. Their current missing wave-3 provenance state was not treated as a defect in this batch.

## Proof-contract and gate record

- Scope: 59 proof-bearing items, exactly matching the manifest-derived proof-bearing set.
- Contract content: 180 exact fact/source citation records, 254 numbered derivation records, zero routine-step shortcuts, and 472 boundary dispositions—eight for every contract.
- Each source quote is an exact excerpt from the target's Statement, Statement refuted, Definition, or Example section and includes the clause relevant to the fact, not merely a matching phrase.
- Scoped precheck: 59 checked, zero failures.
- Audit manifest: 243 declared relationships, comprising 152 same-batch and 91 published-backward relationships, with no unresolved target.
- Finite smoke: pass, zero selected checks; none of the four available enumerators matches these poset/set-family/connectivity claims.
- Risk routing: 11 critical, 15 high, 16 moderate, and 17 ordinary contracts. The 26 high/critical contracts retain pending Alpha risk-review records, as required.
- Strict proof-contract gate: 59/59 entries and all steps, boundaries, quotes, and declared uses were checked. It reports exactly two errors and no warnings: the empty uses arrays for W2-COMB-001 and W2-COMB-002. No honest current-text contract can invent a using step. Those two expected pre-repair failures are preserved for A3/A4 rather than papered over.
- Ledger integrity: 83 rows, 83 unique scoped ids, no missing or extra id, and 13 distinct verified URLs.

## Coverage statement

**Every one of the 83 scoped mathematical-content items was read; every numbered step in all 59 proofs, refutations, counterexamples, and verifications was read; every Facts & Assumptions citation and every declared dependency or well-definedness relationship in the four page pairs was checked against its on-disk target; all four page bodies and all Remarks were read. There are no coverage exceptions.**

## A4 applied-repair record

### W2-COMB-PROV-001 — 83 provenance retags

Class: **(c) provenance retag**. Old text for every named item: no `provenance` block. New text: the `provenance.statement` and `provenance.proof` values in the final ledger row for that id. The final census is 64 `ai-altered`, 13 `literature-derived`, and six `ai-generated` statements; evidence is 56 `semantic-source`, 13 `exact-source`, eight `established-knowledge`, and six `trivial`. Proof provenance remains 22 `ai-altered`, 37 `ai-generated`, and 24 `not-applicable`. The source URL or written-out trivial/established-knowledge rationale for each retag is the corresponding ledger row. None of the 83 items carried legacy `authorship`, so D5 required no removal.

The 83 applied retags, grouped by page, are:

- `chains-antichains-sperner-and-dilworth`: `def-antichain-and-poset-covers`, `def-height-and-width-of-a-finite-poset`, `def-graded-poset-and-rank`, `def-boolean-lattice-and-levels`, `def-lattice-distributive-lattice-and-order-ideal`, `def-join-irreducible-element`, `def-shadow-of-a-uniform-family`, `def-intersecting-family`, `def-sunflower`, `thm-mirsky-finite-posets`, `lem-dilworth-maximal-antichain-decomposition`, `lem-dilworth-induction-step`, `thm-dilworth-finite-posets`, `cor-erdos-szekeres-from-mirsky`, `lem-maximal-chains-of-the-boolean-lattice`, `thm-lym-inequality`, `thm-local-lym-inequality`, `lem-binomial-coefficients-symmetric-and-unimodal`, `cor-sperner-theorem-with-equality-cases`, `lem-symmetric-chain-decomposition-induction-step`, `thm-symmetric-chain-decomposition-of-the-boolean-lattice`, `cor-sperner-from-symmetric-chains`, `lem-katona-cyclic-interval-bound`, `thm-erdos-ko-rado`, `lem-sunflower-maximal-disjoint-subfamily`, `thm-erdos-rado-sunflower-lemma`, `lem-finite-lattice-join-irreducible-decomposition`, `lem-join-irreducible-is-join-prime`, `lem-order-ideals-form-a-distributive-lattice`, `thm-birkhoff-representation-finite-distributive-lattices`, `fs-maximal-antichain-need-not-be-maximum`, `fs-erdos-ko-rado-without-the-ground-set-bound`.

- `chains-antichains-sperner-and-dilworth-examples`: `ex-boolean-lattice-on-four-elements`, `ex-width-three-poset-and-a-minimum-chain-cover`, `ex-divisor-lattice-of-sixty`, `ex-a-four-petal-sunflower-with-nonempty-core`, `ex-an-erdos-ko-rado-star`, `cex-a-maximal-antichain-that-is-not-maximum`, `cex-erdos-ko-rado-fails-below-two-k`, `cex-the-diamond-and-pentagon-lattices-are-not-distributive`.

- `graphs-walks-and-connectivity`: `def-finite-simple-graph`, `rem-finite-simple-graph-convention`, `def-multigraph-loop-and-digraph`, `def-graph-adjacency-incidence-neighbourhood-and-degree`, `def-subgraph-induced-subgraph-and-spanning-subgraph`, `def-graph-walk-trail-path-and-cycle`, `lem-every-graph-walk-contains-a-path-between-its-endpoints`, `def-connected-graph-and-connected-component`, `lem-graph-reachability-is-an-equivalence-relation`, `cor-connected-components-partition-the-vertex-set`, `def-graph-distance-and-girth`, `lem-graph-distance-is-a-metric-on-each-component`, `def-bipartite-graph`, `lem-an-odd-closed-walk-contains-an-odd-cycle`, `thm-bipartite-iff-no-odd-cycle`, `def-standard-complete-bipartite-path-and-cycle-graphs`, `def-petersen-graph`, `def-graph-isomorphism-and-complement`, `def-graph-deletion-contraction-minor-and-subdivision`, `def-line-graph`, `thm-handshake-lemma-for-finite-simple-graphs`, `cor-a-graph-has-an-even-number-of-odd-degree-vertices`, `cor-complete-graph-edge-count`, `cor-number-of-labelled-simple-graphs`, `def-vertex-and-edge-connectivity`, `lem-edge-connectivity-at-most-minimum-degree`, `lem-vertex-connectivity-at-most-edge-connectivity`, `thm-whitney-connectivity-inequalities`, `thm-minimum-degree-forces-a-long-path`, `cor-minimum-degree-two-forces-a-cycle`, `thm-dense-finite-graph-is-connected`, `fs-degree-sequence-determines-a-simple-graph`, `fs-all-even-degrees-force-one-cycle`, `fs-vertex-and-edge-connectivity-always-agree`, `fs-a-shortest-walk-need-not-be-a-path`.

- `graphs-walks-and-connectivity-examples`: `ex-walk-trail-path-and-cycle-in-one-small-graph`, `ex-components-distance-and-girth-in-a-disconnected-graph`, `ex-complete-and-complete-bipartite-graphs-k5-and-k33`, `ex-petersen-graph-basic-invariants`, `cex-c6-and-two-triangles-share-a-degree-sequence`, `cex-connected-even-degree-bowtie-is-not-a-cycle`, `cex-strict-whitney-connectivity-inequalities`, `ex-deletion-contraction-and-a-minor-model`.

The source-liveness subrepairs are part of this class-(c) work. Old source text was the dead MIT reference in six items and the unconfirmable Chicago reference in four items. New source text is `references: []` for the nine rows now justified by `established-knowledge` or `trivial` evidence, while `thm-erdos-ko-rado` retains only the CMU reference. The exact ten ids and the shell/browser evidence are recorded in the A4 blocker section above.

### W2-COMB-001 — remove the unused Dilworth fact

Class: **(b) citation-precision repair**.

- Old: `deps` included `lem-dilworth-maximal-antichain-decomposition`, and `[L2]` restated that lemma, but no numbered step cited `[L2]`.
- New: the direct dependency and `[L2]` paragraph are absent; `[L1]`, which states the full induction-step input consumed by step 2.1, remains.
- Elementary derivation: the proof's only down-set/up-set use is step 2.1, and that step cites `[L1]`; deleting an unused declaration changes no inference.
- Provenance: statement `literature-derived`, proof `ai-altered`, unchanged. The obsolete `audited: 2026-07-31` stamp was removed; no judge or verifier stamp was written.

### W2-COMB-002 — remove the unused Katona finiteness fact

Class: **(b) citation-precision repair**.

- Old: `deps` included `def-finite-cardinality`, and `[F2]` said “The ground set is finite of cardinality $n$,” but no numbered step cited `[F2]`.
- New: the direct dependency and `[F2]` paragraph are absent; the finite cyclic order and its size remain in the Given data.
- Elementary derivation: every use of $n$ and finiteness is already licensed by the Given cyclic order on an $n$-element set; deleting the unused fact changes no inference.
- Provenance: statement and proof `ai-altered`, unchanged after the source-liveness reclassification. The obsolete `audited: 2026-07-31` stamp was removed; no judge or verifier stamp was written.

### W2-COMB-003 — cite the component-partition result

Class: **(b) citation-precision repair**.

- Old: `[F2]` cited only `def-connected-graph-and-connected-component` and `lem-every-graph-walk-contains-a-path-between-its-endpoints` for both its partition and crossing-edge clauses.
- New: `[F2]` and `deps` also cite `cor-connected-components-partition-the-vertex-set` for the partition clause; the two earlier targets remain for reachability and the path argument.
- Elementary derivation: connected components are the equivalence classes of reachability; equivalence classes are nonempty, cover the vertex set, and are pairwise equal or disjoint. The added corollary states exactly that conclusion.
- Provenance: statement `literature-derived`, proof `ai-generated`, unchanged. The obsolete `audited: 2026-07-31` stamp was removed; no judge or verifier stamp was written.

### W2-COMB-004 — license the universal simple-graph edge bound

Class: **(b) citation-precision repair**.

- Old: `[L1]` cited only `cor-complete-graph-edge-count`, which states the equality count for the complete graph and not the upper bound consumed by step 2.1.
- New: `[L1]` and `deps` also cite `def-finite-simple-graph`, `thm-two-element-subsets-count`, and `thm-subset-of-a-finite-set`; the complete-graph corollary remains for equality.
- Elementary derivation: for a simple graph $H=(V,E)$, the definition gives $E\subseteq[V]^2$; if $|V|=q$, the two-element-subset theorem gives $|[V]^2|=\binom q2$; the finite-subset theorem gives $|E|\le|[V]^2|$; equality is attained when $E=[V]^2$, the complete graph.
- Provenance: statement `ai-altered`, proof `ai-generated`, unchanged. The obsolete `audited: 2026-07-31` stamp was removed; no judge or verifier stamp was written.

### W2-COMB-005 — retarget the false-statement cycle-graph fact

Class: **(b) citation-precision repair**.

- Old: `[F3]` and `deps` cited `def-graph-walk-trail-path-and-cycle`, which defines a cycle as a closed walk substructure.
- New: `[F3]` and `deps` cite `def-standard-complete-bipartite-path-and-cycle-graphs`, which defines the graph $C_n$.
- Elementary derivation: in the displayed definition of $C_n$, each vertex is incident with its preceding and succeeding cyclic edge and with no other edge, so each has exactly two neighbours.
- Provenance: statement `ai-altered`, proof `ai-generated`, unchanged. The obsolete `audited: 2026-07-31` stamp was removed; no judge or verifier stamp was written.

### W2-COMB-006 — retarget the companion bowtie fact

Class: **(b) citation-precision repair**.

- Old: `[F2]` and `deps` cited the cycle-as-closed-walk definition.
- New: `[F2]` and `deps` cite `def-standard-complete-bipartite-path-and-cycle-graphs` for the graph $C_n$.
- Elementary derivation: the same explicit $C_n$ edge list gives degree two at every vertex, whereas the bowtie's shared vertex has degree four.
- Provenance: statement `ai-altered`, proof `ai-generated`, unchanged. The obsolete `audited: 2026-07-31` stamp was removed; no judge or verifier stamp was written.

The namespaced proof contract was synchronized with all six repairs: the two unused citation records were deleted, the component-partition and three subset-count records were added with exact target clauses and uses, and both cycle-graph records were retargeted. It now passes strict validation with 59/59 contracts.

## A4 gate and integrity record

- Touchlog: 83 dedicated labels `pre-<id>`, exactly one for every item above. The shared ledger was concurrently receiving sibling-Beta snapshots; the final validation nevertheless found every combinatorics label exactly once. No item was edited before its label existed.
- URL liveness attempt: shell `curl -L` returned code `000` with `Could not resolve host` because external DNS is unavailable in this non-escalated workspace. No new URL was added. The retained CMU PDF was opened through the browser retrieval and is independently recorded as HTTP 200 in A3; the eight unsourced standard rows remain explicit A6 concurrence debt.
- `node tools/reflow.mts <59 proof files>`: 54 unchanged; five TikZ-bearing Remarks were syntactically collapsed by the helper, so those five code fences were restored byte-for-byte from the pre-edit text. This restoration changed no mathematics.
- Final scoped precheck using the required TSX loader: **59 checked, 0 failing**.
- `proof-contract.mjs --strict`: **0 errors, 0 warnings, 59/59 checked**.
- `citecheck.mjs` over all 83 items: exit 0; one already-triaged false positive, “Reflexivity” in `cor-connected-components-partition-the-vertex-set`, where `[L1]` supplies an equivalence relation rather than an order axiom.
- `rendercheck.mjs` over all 83 items: exit 0; all math spans and restored fences clean.
- `prosecheck.mjs` over all 83 items: exit 0; 0 errors and the already-triaged false-positive phrase “one of these” in `lem-an-odd-closed-walk-contains-an-odd-cycle`. The optional `--strict` form exits 1 solely because it promotes that one known heuristic warning.
- Whole-tree `fwdcheck.mjs --quiet`: exit 0.
- Whole-tree `extcheck.mjs --quiet`: exit 0 with 83 standing `unproved-on-published` warnings outside this repair's substance.
- Whole-tree `depcheck.mjs --quiet`: exit 1 only for 15 `published-unaudited` items awaiting A6; the six owned entries are precisely the six material repairs above, and the other nine belong to sibling batches. This is the intended no-self-certification stop.
- `content-policy.mjs --audit` for this batch: exit 1 with exactly 16 expected errors—missing-source plus pending-Alpha-concurrence for each of the eight `established-knowledge` rows—and six legacy generated-role warnings. No ledger mismatch, missing row, retained authorship, or dead sourced label was reported.
- JSON/JSONL parsing and `git diff --check`: pass.
- Final invariant audit: 83/83 item provenance blocks match the ledger; all 77 pure-retag bodies are byte-identical to `HEAD` and preserve their pre-existing verification fields; exactly the six material items have no `audited`, `judge`, or self-written `verified` stamp; no MIT or Chicago dead URL remains in any owned item or ledger row.

## A4 coverage statement

**Changed items are exactly the 83 ids named under W2-COMB-PROV-001. Seventy-seven received only provenance/source-frontmatter retags; the six additionally receiving the approved material citation repairs are `thm-dilworth-finite-posets`, `lem-katona-cyclic-interval-bound`, `lem-vertex-connectivity-at-most-edge-connectivity`, `thm-dense-finite-graph-is-connected`, `fs-all-even-degrees-force-one-cycle`, and `cex-connected-even-degree-bowtie-is-not-a-cycle`. The only other owned files changed are `wave2-combinatorics.provenance.jsonl`, `wave2-combinatorics.proof-contracts.json`, and this findings file; the shared `wave2-touches.json` received the required snapshots. No page, id, reading order, item count, or item body outside the six approved Facts/dependency edits changed.**
