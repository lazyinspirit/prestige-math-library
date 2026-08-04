# Wave 3 combinatorics-graphs — Audit-Beta findings

## Continuity checkpoint

- Substage: A1/A2 evidence collection complete; artifact construction and validation in progress.
- Scope verified: all 74 manifest items across both assigned pairs were read in full, including all 53 proof-bearing items.
- Dependency audit complete: every direct item citation was followed to the current on-disk target and its cited clause read. This includes all four cross-category edges into `countability-and-uncountability`.
- External-source audit complete: sources used for provenance were opened through the model-side web route because shell DNS was unavailable. No shell DNS failure was treated as evidence that a source was absent.
- Mathematical triage: no false mathematical statement or debatable mathematical restatement identified. One repeated citation-precision defect affects nine minimum-spanning-tree items; the cited P. T. Wood Lecture 8 page is about Prüfer codes rather than minimum spanning trees. A separate legacy ISGCI URL cannot be verified through either available route; the official current ISGCI URL and a semantically relevant graph-classes thesis were opened successfully and will be proposed as replacements where applicable.
- Artifacts: this findings file has been initialized. The provenance JSONL and proof-contract JSON have not yet been written.
- Exact next action: generate one provenance row for each of the 74 manifest items, generate contracts for all 53 proof-bearing items, append itemized repair proposals and coverage, then run the provenance, proof-contract, finite-smoke, and JSON validators.

## A1 provenance determination

The provenance ledger contains one row for each of the 74 manifest items. The proposed final component labels are:

| component | determination | count |
|---|---:|---:|
| statement | `ai-altered` | 74 |
| proof | `ai-generated` | 50 |
| proof | `ai-altered` | 9 |
| proof | `not-applicable` | 15 |
| evidence | `semantic-source` | 74 |

No statement was assigned `ai-generated`. In particular, the induced-copy-count items were upgraded from a preliminary local-construction hypothesis after a recoverable semantic source was found. No statement was assigned `established-knowledge`, so no D2 URL waiver or Alpha concurrence is requested.

Every URL in the ledger was verified on 2026-08-04 by a model-side web open that returned document/page content. The shell had no outbound DNS; its failures were not treated as evidence of nonexistence and did not cause any fallback label. The nine distinct verified ledger URLs are the White Rose hereditary-classes thesis, current ISGCI self-complementary and cluster-class pages, Chudnovsky's cograph survey, Diestel Chapter 1, the Toronto induced-subgraph-count notes, and the ISI spanning-tree sections 4.1, 4.3, and 4.4.

## A2 mathematical and citation audit

All statements, definitions, examples, counterexamples, refutations, Remarks, and both A-page summaries were read skeptically. No mathematical falsehood or convention-sensitive restatement requiring a class (d) proposal was found. The current proofs license their mathematical conclusions. Three declared proof facts are unused, and one external MST reference repeatedly points to the wrong lecture; those citation-precision defects are itemized below.

The proof-contract scope is 59 rather than the 53 stated by A0. Current disk has 53 items with `Proof`, `Verification`, or `Refutation` sections plus six numbered `Counterexample` sections. `QUALITY-CONTROLS.md` expressly includes proof-bearing counterexamples, so all six were contracted rather than silently omitted.

## Repair proposals for A3

No repair has been applied.

### (a) Unambiguous falsehood

None.

### (b) Citation precision

#### B1 — wrong external source on nine MST items

The currently cited P. T. Wood Lecture 8 URL returns content, but that content is the Prüfer-code lecture, not “Minimum spanning trees” as the item metadata says. Model-side web open was the verification route.

Affected items:

- `cex-minimum-spanning-tree-not-unique`
- `cor-distinct-edge-weights-give-a-unique-minimum-spanning-tree`
- `def-weighted-graph-and-minimum-spanning-tree`
- `ex-fundamental-cycle-and-cut`
- `ex-kruskal-and-prim-on-a-weighted-graph`
- `lem-spanning-tree-exchange`
- `thm-cut-and-cycle-properties-for-minimum-spanning-trees`
- `thm-kruskals-minimum-spanning-tree-algorithm`
- `thm-prims-minimum-spanning-tree-algorithm`

Proposed repair: replace the mismatched reference according to subject matter. Use the verified ISI [minimum-spanning-tree section](https://www.isibang.ac.in/~d.yogesh/Course_Notes/DM1/Ch4.S3.html) for definitions, exchange, cut/cycle properties, distinct-weight uniqueness, and nonuniqueness; the verified ISI [Kruskal and other algorithms section](https://www.isibang.ac.in/~d.yogesh/Course_Notes/DM1/Ch4.S4.html) for Kruskal, Prim, and the worked algorithm example; and verified [Diestel Chapter 1](https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch1.pdf) for the fundamental-cycle/cut example.

#### B2 — three unused fact citations and matching excess dependencies

These declarations are not cited by any numbered proof step. The strict proof-contract checker correctly reports all three as `citation-uses` errors rather than allowing invented uses.

| item | unused declaration | proposed repair |
|---|---|---|
| `lem-edge-addition-to-a-tree` | `[L1]` → `lem-edge-deletion-in-a-tree` | Delete `[L1]` and remove the matching unused dependency. The proof uses unique paths, not edge deletion. |
| `lem-fundamental-cut-of-a-spanning-tree` | `[F1]` → `thm-tree-characterisations` | Delete `[F1]` and remove the matching unused dependency. Connectivity and acyclicity are established from `[L1]` and the two components. |
| `cor-distinct-edge-weights-give-a-unique-minimum-spanning-tree` | `[L1]` → `thm-cut-and-cycle-properties-for-minimum-spanning-trees` | Delete `[L1]` and remove the matching unused dependency. The written proof is the symmetric-difference exchange proof and never invokes the cut property. |

#### B3 — legacy ISGCI reference is not independently verifiable

The legacy SFU ISGCI reference carried by 21 items could not be opened through the model-side route, and shell DNS was unavailable. No nonexistence inference was made. The current [ISGCI site](https://www.graphclasses.org/index.html), its relevant class pages, and an exact hereditary-classes thesis all returned content through model-side web open.

Affected items:

- `cor-h-free-complement-dictionary`
- `cor-nonempty-hereditary-class-contains-the-null-graph`
- `def-complement-of-a-graph-class`
- `def-h-free-and-family-free-graph`
- `def-hereditary-graph-class`
- `def-induced-copy-number`
- `def-induced-embedding-and-induced-copy`
- `def-minimal-forbidden-induced-subgraph`
- `ex-cluster-graphs-are-p-three-free`
- `ex-complementary-forbidden-bases`
- `ex-complete-graphs-as-a-hereditary-class`
- `ex-edgeless-graphs-as-a-hereditary-class`
- `ex-induced-k-two-copy-count`
- `fs-every-hereditary-class-has-a-finite-forbidden-basis`
- `fs-hereditary-classes-are-closed-under-all-subgraphs`
- `lem-forbidden-induced-subgraph-classes-are-hereditary`
- `lem-induced-copy-number-isomorphism-and-complement`
- `lem-induced-embeddings-compose`
- `lem-induced-freeness-passes-to-induced-subgraphs`
- `thm-complementation-preserves-hereditary-classes-and-bases`
- `thm-hereditary-classes-have-a-unique-minimal-forbidden-basis`

Proposed repair: replace the legacy reference with the verified item-specific source(s) recorded in the provenance ledger: the [White Rose thesis](https://etheses.whiterose.ac.uk/id/eprint/23386/1/main.pdf) for induced-subgraph, hereditary, forbidden-family, clique/stable-set, complete/anticomplete, and anticomponent terminology; current ISGCI pages for [self-complementary classes](https://www.graphclasses.org/classes/self_complementary.html) and [cluster graphs](https://www.graphclasses.org/classes/gc_1237.html); and the [Toronto subgraph-count notes](https://www.math.toronto.edu/swastik/courses/rutgers/graphtheory-F11/homs.pdf) for induced-copy counting and the labelled $K_2$ count.

#### B4 — eight items carry an externally inaccessible bull-survey reference

The current `bullsurvey.pdf` reference could not be opened by either available route, so it is not eligible for the final provenance record. This is not a claim that the document does not exist. Equivalent or more precise current sources were verified.

Affected items:

- `def-anticonnected-graph-and-anticonnected-component`
- `def-edges-between-sets-and-pure-mixed-pairs`
- `ex-p-four-is-connected-and-anticonnected`
- `ex-pure-and-mixed-pairs-in-p-four`
- `lem-anticonnected-components-are-complement-components`
- `lem-components-are-anticomplete-and-anticomponents-complete`
- `lem-purity-symmetry-and-complementation`
- `thm-every-nontrivial-graph-is-connected-or-anticonnected`

Proposed repair: use the verified White Rose thesis for anticomponent and complete/anticomplete terminology and the verified [cograph survey](https://web.math.princeton.edu/~mchudnov/cographs.pdf) for the connected-or-anticonnected theorem and the $P_4$ example, exactly as recorded in the ledger.

### (c) Provenance retag

Apply the 74 proposed rows in `wave3-combinatorics-graphs.provenance.jsonl` to the corresponding item frontmatter and replace/add `sources.references` with each row's verified semantic source URLs. This is a pure provenance/source-metadata proposal except where an item also receives an approved class (b) cleanup. The exact per-item determinations and rationales are the ledger of record; no bulk default is intended.

### (d) Debatable restatement

None.

## Workflow-record note for the orchestrator

`wave3-A0.md` reports 53 proof-bearing items for this batch. Current disk contains 59 under the binding quality-control definition; the six-item delta is exactly the six numbered `Counterexample` sections listed below. A0 was not edited because it is outside Audit-Beta's writable scope.

- `cex-a-subgraph-copy-need-not-be-induced`
- `cex-connected-graphs-are-not-hereditary`
- `cex-regular-graphs-are-not-hereditary`
- `cex-acyclic-disconnected-graph`
- `cex-n-minus-one-edges-without-a-tree`
- `cex-minimum-spanning-tree-not-unique`

## Validation and coverage

- JSONL/JSON integrity: 74 unique provenance rows; 59 proof-scope ids; 59 contract entries.
- Proof-contract strict check: 59/59 entries checked; the only three errors are the deliberately truthful empty `uses` lists for the unused facts in B2. Those errors should close automatically after the approved A4 item cleanup and contract refresh.
- Finite smoke: all three selected checks passed — complement/induced-subgraph commutation through four vertices, the forest edge/component formula through five vertices, and the tree characterization through five vertices.
- Manifest reconciliation: no missing or extra provenance ids, and no missing or extra proof-contract ids relative to the current disk definition (59 including counterexamples).
- The audit content-policy gate is expected to fail before A4 because every scoped item is intentionally still untagged; no item repair or retag was authorized at A1/A2.

**Explicit coverage statement:** all 74 in-scope items, all 224 numbered proof/verification/refutation/counterexample steps, all 280 manifest dependency edges to 77 distinct target items, and all 218 fact-to-source proof citation edges were read. This includes the four edges into the current on-disk `countability-and-uncountability` targets. Both A-page summaries and every Remark were also read. There are no reading exceptions.

## A4 continuity checkpoint (2026-08-04)

The binding A3 adjudication, the A4 brief, the published-item repair protocol, repository rules, provenance contract, all 74 item files, the existing findings/ledger, and the three B2 proof contracts have been re-read and checked against disk. Source-clause re-evaluation is complete: the 10 counterexample/false-statement rows will cite the true clause or omitted hypothesis that their local witness tests, the 15 definition rows have been individually assessed for exactness, and all remaining rationales will name their particular source clause. No item edit, snapshot, or repository-state mutation had been made at this checkpoint; next is the A3-approved A4 edit set only.

## A4 applied-repair record

A3-approved work has now been applied. No id, reading order, page prose, proof step, theorem statement, or unapproved proposal was changed. No snapshot command was run.

### Class (b): old text and applied replacement

- B1: on the nine items listed in B1 above, the old `https://ptwiddle.github.io/MAS341-Graph-Theory-2017/lecturenotes/lecture8.html` reference (the Prüfer-code lecture) was replaced by ISI §4.3 for the MST definition/exchange/cut/uniqueness/nonuniqueness items, ISI §4.4 for Kruskal/Prim/the algorithm example, and Diestel Chapter 1 for the fundamental-cycle/cut example.
- B3: on the 21 items listed in B3 above, the old HTTP-404 `https://www.cs.sfu.ca/~pavol/graphclasses/` reference was replaced by the item-specific White Rose, current ISGCI, or Toronto reference recorded in the ledger and table below.
- B4: on the eight items listed in B4 above, the old HTTP-404 `bullsurvey.pdf` reference was replaced by the item-specific White Rose or Princeton cographs reference recorded below.
- A3-added portal repair: on all 29 affected items, the old `https://diestel-graph-theory.com/basic.html?level=1` landing portal was replaced by the Diestel Chapter 1 PDF. Where the provenance determination also needs a more specific source clause, that source is retained alongside the mandated Chapter 1 redirect.

The three material B2 cleanups were the smallest possible deletions:

| item | old text | new text | derivation/source record |
|---|---|---|---|
| `lem-edge-addition-to-a-tree` | dependency `lem-edge-deletion-in-a-tree` and unused `[L1] Deleting an edge of a tree separates its endpoints` | both absent | Steps 1.1–3.1 already derive uniqueness from connectedness, acyclicity, and path/cycle definitions; no replacement fact or step was invented. |
| `lem-fundamental-cut-of-a-spanning-tree` | dependency `thm-tree-characterisations` and unused `[F1] A graph is a tree exactly when every two vertices have a unique path` | both absent | Steps 1.1–3.1 use the two components supplied by edge deletion and the spanning-tree vertex clause; no replacement fact or step was invented. |
| `cor-distinct-edge-weights-give-a-unique-minimum-spanning-tree` | dependency `thm-cut-and-cycle-properties-for-minimum-spanning-trees` and unused `[L1] A uniquely minimum edge of a cut belongs to every MST` | both absent | The written symmetric-difference argument uses the fundamental-cycle and exchange lemmas directly; no replacement fact or step was invented. |

For those three material items, the obsolete `verification.audited: 2026-08-01` stamp was removed and the matching zero-use citation was deleted from the merged proof contract. None had a `verification.judge` block. Their existing proof labels were retained (`ai-generated`, `ai-generated`, and `ai-altered`, respectively), as required.

### Class (c): re-determined provenance evidence

Before A4, every one of the 74 items lacked a `provenance` block; all also lacked the legacy `authorship` field. Each now has the statement/proof labels below, and its `sources.references` matches the ledger URLs. The individual ledger rationale names the exact source clause used. Six definition statements survived the exactness test as `literature-derived/exact-source`: `def-h-free-and-family-free-graph`, `def-hereditary-graph-class`, `def-minimal-forbidden-induced-subgraph`, `def-tree-forest-and-leaf`, `def-spanning-tree`, and `def-number-of-spanning-trees`. The other nine definition candidates materially add conventions, bundled clauses, or notation and remain `ai-altered/semantic-source`.

All 10 counterexample/false-statement rationales now identify a true source clause or omitted hypothesis and then name the local witness that tests it. In particular, the MST nonuniqueness row relies on ISI Proposition 4.18’s injective-weight hypothesis, the Cayley row relies on the source’s explicit word “labelled,” and no rationale claims that a source establishes the false assertion being refuted. The other 49 rationales likewise identify an item-specific source clause rather than quoting item text into a template.

The required `reflow.mts` pass found all proof steps already canonical, but its known post-proof TikZ edge case collapsed eight `## Remarks` code blocks (`cex-a-subgraph-copy-need-not-be-induced`, `ex-cluster-graphs-are-p-three-free`, `cex-connected-graphs-are-not-hereditary`, `cex-regular-graphs-are-not-hereditary`, `ex-p-four-is-connected-and-anticonnected`, `ex-pure-and-mixed-pairs-in-p-four`, `fs-every-hereditary-class-has-a-finite-forbidden-basis`, and `ex-complementary-forbidden-bases`). Those Remarks were restored byte-for-byte from their pre-edit `HEAD` text. All 59 proof-bearing items then passed precheck with no REPAIR output, and the 74-item rendercheck passed after restoration.

### Complete per-item applied-change ledger

| item | applied class(es) | old source metadata | new provenance; new reference(s) |
|---|---|---|---|
| `def-induced-embedding-and-induced-copy` | (c) retag; (b) B3 | dead SFU ISGCI URL | `ai-altered/not-applicable`, `semantic-source`; White Rose thesis |
| `lem-induced-embeddings-compose` | (c) retag; (b) B3 | dead SFU ISGCI URL | `ai-altered/ai-generated`, `semantic-source`; White Rose thesis |
| `def-induced-copy-number` | (c) retag; (b) B3 | dead SFU ISGCI URL | `ai-altered/not-applicable`, `semantic-source`; Toronto subgraph-count notes |
| `lem-induced-copy-number-isomorphism-and-complement` | (c) retag; (b) B3 | dead SFU ISGCI URL | `ai-altered/ai-generated`, `semantic-source`; Toronto subgraph-count notes |
| `def-h-free-and-family-free-graph` | (c) retag; (b) B3 | dead SFU ISGCI URL | `literature-derived/not-applicable`, `exact-source`; White Rose thesis |
| `lem-induced-freeness-passes-to-induced-subgraphs` | (c) retag; (b) B3 | dead SFU ISGCI URL | `ai-altered/ai-generated`, `semantic-source`; White Rose thesis |
| `def-hereditary-graph-class` | (c) retag; (b) B3 | dead SFU ISGCI URL | `literature-derived/not-applicable`, `exact-source`; White Rose thesis |
| `lem-forbidden-induced-subgraph-classes-are-hereditary` | (c) retag; (b) B3 | dead SFU ISGCI URL | `ai-altered/ai-generated`, `semantic-source`; White Rose thesis |
| `def-minimal-forbidden-induced-subgraph` | (c) retag; (b) B3 | dead SFU ISGCI URL | `literature-derived/not-applicable`, `exact-source`; White Rose thesis |
| `thm-hereditary-classes-have-a-unique-minimal-forbidden-basis` | (c) retag; (b) B3 | dead SFU ISGCI URL | `ai-altered/ai-generated`, `semantic-source`; White Rose thesis |
| `cor-nonempty-hereditary-class-contains-the-null-graph` | (c) retag; (b) B3 | dead SFU ISGCI URL | `ai-altered/ai-generated`, `semantic-source`; White Rose thesis |
| `def-complement-of-a-graph-class` | (c) retag; (b) B3 | dead SFU ISGCI URL | `ai-altered/not-applicable`, `semantic-source`; ISGCI self-complementary page |
| `lem-complement-commutes-with-induced-subgraphs` | (c) retag; (b) A3 portal redirect | Diestel landing portal | `ai-altered/ai-generated`, `semantic-source`; Diestel Ch1 PDF |
| `thm-complementation-preserves-hereditary-classes-and-bases` | (c) retag; (b) B3 | dead SFU ISGCI URL | `ai-altered/ai-generated`, `semantic-source`; White Rose thesis + ISGCI self-complementary page |
| `cor-h-free-complement-dictionary` | (c) retag; (b) B3 | dead SFU ISGCI URL | `ai-altered/ai-generated`, `semantic-source`; White Rose thesis + ISGCI self-complementary page |
| `def-clique-stable-set-and-numbers` | (c) retag; (b) A3 portal redirect | Diestel landing portal | `ai-altered/not-applicable`, `semantic-source`; Diestel Ch1 PDF + White Rose thesis |
| `lem-complement-swaps-cliques-and-stable-sets` | (c) retag; (b) A3 portal redirect | Diestel landing portal | `ai-altered/ai-generated`, `semantic-source`; Diestel Ch1 PDF + White Rose thesis + ISGCI self-complementary page |
| `def-anticonnected-graph-and-anticonnected-component` | (c) retag; (b) B4 | dead `bullsurvey.pdf` | `ai-altered/not-applicable`, `semantic-source`; White Rose thesis |
| `lem-anticonnected-components-are-complement-components` | (c) retag; (b) B4 | dead `bullsurvey.pdf` | `ai-altered/ai-generated`, `semantic-source`; White Rose thesis |
| `thm-every-nontrivial-graph-is-connected-or-anticonnected` | (c) retag; (b) B4 | dead `bullsurvey.pdf` | `ai-altered/ai-generated`, `semantic-source`; Princeton cographs PDF |
| `def-edges-between-sets-and-pure-mixed-pairs` | (c) retag; (b) B4 | dead `bullsurvey.pdf` | `ai-altered/not-applicable`, `semantic-source`; White Rose thesis |
| `lem-purity-symmetry-and-complementation` | (c) retag; (b) B4 | dead `bullsurvey.pdf` | `ai-altered/ai-generated`, `semantic-source`; White Rose thesis + ISGCI self-complementary page |
| `lem-components-are-anticomplete-and-anticomponents-complete` | (c) retag; (b) B4 | dead `bullsurvey.pdf` | `ai-altered/ai-generated`, `semantic-source`; White Rose thesis |
| `cex-a-subgraph-copy-need-not-be-induced` | (c) retag; (b) A3 portal redirect | Diestel landing portal | `ai-altered/ai-generated`, `semantic-source`; Diestel Ch1 PDF |
| `ex-induced-k-two-copy-count` | (c) retag; (b) B3 | dead SFU ISGCI URL | `ai-altered/ai-generated`, `semantic-source`; Toronto subgraph-count notes |
| `ex-complete-graphs-as-a-hereditary-class` | (c) retag; (b) B3 | dead SFU ISGCI URL | `ai-altered/ai-generated`, `semantic-source`; White Rose thesis |
| `ex-edgeless-graphs-as-a-hereditary-class` | (c) retag; (b) B3 | dead SFU ISGCI URL | `ai-altered/ai-generated`, `semantic-source`; White Rose thesis + ISGCI self-complementary page |
| `ex-cluster-graphs-are-p-three-free` | (c) retag; (b) B3 | dead SFU ISGCI URL | `ai-altered/ai-generated`, `semantic-source`; ISGCI cluster-graph page |
| `cex-connected-graphs-are-not-hereditary` | (c) retag; (b) A3 portal redirect | Diestel landing portal | `ai-altered/ai-generated`, `semantic-source`; Diestel Ch1 PDF + White Rose thesis |
| `cex-regular-graphs-are-not-hereditary` | (c) retag; (b) A3 portal redirect | Diestel landing portal | `ai-altered/ai-generated`, `semantic-source`; Diestel Ch1 PDF + White Rose thesis |
| `ex-p-four-is-connected-and-anticonnected` | (c) retag; (b) B4 | dead `bullsurvey.pdf` | `ai-altered/ai-generated`, `semantic-source`; Princeton cographs PDF |
| `ex-pure-and-mixed-pairs-in-p-four` | (c) retag; (b) B4 | dead `bullsurvey.pdf` | `ai-altered/ai-generated`, `semantic-source`; White Rose thesis |
| `fs-every-hereditary-class-has-a-finite-forbidden-basis` | (c) retag; (b) B3 | dead SFU ISGCI URL | `ai-altered/ai-generated`, `semantic-source`; White Rose thesis + Diestel Ch1 PDF |
| `fs-hereditary-classes-are-closed-under-all-subgraphs` | (c) retag; (b) B3 | dead SFU ISGCI URL | `ai-altered/ai-generated`, `semantic-source`; White Rose thesis |
| `ex-complementary-forbidden-bases` | (c) retag; (b) B3 | dead SFU ISGCI URL | `ai-altered/ai-generated`, `semantic-source`; White Rose thesis + ISGCI self-complementary page |
| `def-tree-forest-and-leaf` | (c) retag; (b) A3 portal redirect | Diestel landing portal | `literature-derived/not-applicable`, `exact-source`; Diestel Ch1 PDF |
| `lem-nonempty-forest-has-low-degree-vertex` | (c) retag; (b) A3 portal redirect | Diestel landing portal | `ai-altered/ai-generated`, `semantic-source`; Diestel Ch1 PDF + ISI §4.1 |
| `thm-forest-edge-component-count` | (c) retag; (b) A3 portal redirect | Diestel landing portal | `ai-altered/ai-generated`, `semantic-source`; Diestel Ch1 PDF + ISI §4.1 |
| `cor-tree-edge-count` | (c) retag; (b) A3 portal redirect | Diestel landing portal | `ai-altered/ai-generated`, `semantic-source`; Diestel Ch1 PDF + ISI §4.1 |
| `lem-edge-deletion-in-a-tree` | (c) retag; (b) A3 portal redirect | Diestel landing portal | `ai-altered/ai-generated`, `semantic-source`; Diestel Ch1 PDF |
| `lem-edge-addition-to-a-tree` | (c) retag; (b) B2 material; (b) A3 portal redirect | Diestel landing portal | `ai-altered/ai-generated`, `semantic-source`; Diestel Ch1 PDF |
| `thm-tree-characterisations` | (c) retag; (b) A3 portal redirect | Diestel landing portal | `ai-altered/ai-altered`, `semantic-source`; Diestel Ch1 PDF |
| `cor-nontrivial-tree-has-two-leaves` | (c) retag; (b) A3 portal redirect | Diestel landing portal | `ai-altered/ai-generated`, `semantic-source`; Diestel Ch1 PDF + ISI §4.1 |
| `def-rooted-tree` | (c) retag; (b) A3 portal redirect | Diestel landing portal | `ai-altered/not-applicable`, `semantic-source`; Diestel Ch1 PDF |
| `lem-rooted-tree-parent-and-levels` | (c) retag; (b) A3 portal redirect | Diestel landing portal | `ai-altered/ai-generated`, `semantic-source`; Diestel Ch1 PDF |
| `def-spanning-tree` | (c) retag; (b) A3 portal redirect | Diestel landing portal | `literature-derived/not-applicable`, `exact-source`; Diestel Ch1 PDF |
| `lem-maximal-acyclic-spanning-subgraph-is-a-spanning-tree` | (c) retag; (b) A3 portal redirect | Diestel landing portal | `ai-altered/ai-generated`, `semantic-source`; Diestel Ch1 PDF |
| `thm-connected-iff-has-spanning-tree` | (c) retag; (b) A3 portal redirect | Diestel landing portal | `ai-altered/ai-generated`, `semantic-source`; Diestel Ch1 PDF |
| `lem-fundamental-cycle-of-a-spanning-tree` | (c) retag; (b) A3 portal redirect | Diestel landing portal | `ai-altered/ai-generated`, `semantic-source`; Diestel Ch1 PDF |
| `lem-fundamental-cut-of-a-spanning-tree` | (c) retag; (b) B2 material; (b) A3 portal redirect | Diestel landing portal | `ai-altered/ai-generated`, `semantic-source`; Diestel Ch1 PDF |
| `lem-spanning-tree-set-is-finite` | (c) retag; (b) A3 portal redirect | Diestel landing portal | `ai-altered/ai-generated`, `semantic-source`; Diestel Ch1 PDF |
| `def-number-of-spanning-trees` | (c) retag; (b) A3 portal redirect | Diestel landing portal | `literature-derived/not-applicable`, `exact-source`; Diestel Ch1 PDF + ISI §4.1 |
| `def-prufer-code` | (c) retag | ISI §4.1 (reference unchanged) | `ai-altered/not-applicable`, `semantic-source`; ISI §4.1 |
| `lem-prufer-decoding-produces-a-tree` | (c) retag | ISI §4.1 (reference unchanged) | `ai-altered/ai-altered`, `semantic-source`; ISI §4.1 |
| `thm-prufer-code-bijection` | (c) retag | ISI §4.1 (reference unchanged) | `ai-altered/ai-altered`, `semantic-source`; ISI §4.1 |
| `thm-cayley-formula` | (c) retag | ISI §4.1 (reference unchanged) | `ai-altered/ai-altered`, `semantic-source`; ISI §4.1 |
| `def-weighted-graph-and-minimum-spanning-tree` | (c) retag; (b) B1 | wrong Prüfer-code Lecture 8 | `ai-altered/not-applicable`, `semantic-source`; ISI §4.3 |
| `lem-spanning-tree-exchange` | (c) retag; (b) B1 | wrong Prüfer-code Lecture 8 | `ai-altered/ai-altered`, `semantic-source`; ISI §4.3 |
| `thm-cut-and-cycle-properties-for-minimum-spanning-trees` | (c) retag; (b) B1 | wrong Prüfer-code Lecture 8 | `ai-altered/ai-altered`, `semantic-source`; ISI §4.3 |
| `cor-distinct-edge-weights-give-a-unique-minimum-spanning-tree` | (c) retag; (b) B1; (b) B2 material | wrong Prüfer-code Lecture 8 | `ai-altered/ai-altered`, `semantic-source`; ISI §4.3 |
| `thm-kruskals-minimum-spanning-tree-algorithm` | (c) retag; (b) B1 | wrong Prüfer-code Lecture 8 | `ai-altered/ai-altered`, `semantic-source`; ISI §4.4 |
| `thm-prims-minimum-spanning-tree-algorithm` | (c) retag; (b) B1 | wrong Prüfer-code Lecture 8 | `ai-altered/ai-altered`, `semantic-source`; ISI §4.4 |
| `ex-trees-on-at-most-five-vertices` | (c) retag; (b) A3 portal redirect | Diestel landing portal | `ai-altered/ai-generated`, `semantic-source`; Diestel Ch1 PDF |
| `ex-prufer-code-and-decoding` | (c) retag | ISI §4.1 (reference unchanged) | `ai-altered/ai-generated`, `semantic-source`; ISI §4.1 |
| `ex-spanning-trees-of-a-cycle` | (c) retag; (b) A3 portal redirect | Diestel landing portal | `ai-altered/ai-generated`, `semantic-source`; Diestel Ch1 PDF |
| `ex-spanning-trees-of-k-four` | (c) retag | ISI §4.1 (reference unchanged) | `ai-altered/ai-generated`, `semantic-source`; ISI §4.1 |
| `ex-fundamental-cycle-and-cut` | (c) retag; (b) B1 | wrong Prüfer-code Lecture 8 | `ai-altered/ai-generated`, `semantic-source`; Diestel Ch1 PDF |
| `ex-two-spanning-trees-of-one-graph` | (c) retag; (b) A3 portal redirect | Diestel landing portal | `ai-altered/ai-generated`, `semantic-source`; Diestel Ch1 PDF |
| `ex-kruskal-and-prim-on-a-weighted-graph` | (c) retag; (b) B1 | wrong Prüfer-code Lecture 8 | `ai-altered/ai-generated`, `semantic-source`; ISI §4.4 |
| `cex-acyclic-disconnected-graph` | (c) retag; (b) A3 portal redirect | Diestel landing portal | `ai-altered/ai-generated`, `semantic-source`; Diestel Ch1 PDF |
| `cex-n-minus-one-edges-without-a-tree` | (c) retag; (b) A3 portal redirect | Diestel landing portal | `ai-altered/ai-generated`, `semantic-source`; Diestel Ch1 PDF |
| `cex-minimum-spanning-tree-not-unique` | (c) retag; (b) B1 | wrong Prüfer-code Lecture 8 | `ai-altered/ai-generated`, `semantic-source`; ISI §4.3 |
| `fs-cayley-formula-counts-unlabelled-trees` | (c) retag | ISI §4.1 (reference unchanged) | `ai-altered/ai-generated`, `semantic-source`; ISI §4.1 |
| `fs-every-edge-lies-in-every-spanning-tree` | (c) retag; (b) A3 portal redirect | Diestel landing portal | `ai-altered/ai-generated`, `semantic-source`; Diestel Ch1 PDF + ISI §4.3 |

### Items deliberately left untouched

- No in-manifest item was left unchanged: all 74 required the approved class (c) retag.
- Both A-page prose files were left untouched because A3 declined the proposed summary rewrites.
- All mathematical statements and proof steps other than the three approved unused-Fact/dependency deletions were left untouched because A3 authorized citation repair and retagging, not mathematical rewriting.
- No item or artifact from another wave-3 batch was edited by this Audit-Beta.

## A4 gate and integrity record

- Snapshot discipline: no `touchlog snap` command was run; the orchestrator-owned `wave3-touches.json` was not edited.
- Required normalization/precheck: `reflow.mts` was run on all 59 proof-bearing items. Its eight unintended TikZ-Remark collapses were restored byte-for-byte as recorded above. The final precheck result was **59 checked, 0 failing**, with no REPAIR output.
- Strict proof contract: **0 errors, 0 warnings, 59/59 items checked**. The three zero-use citation records are absent and every other contract entry remains synchronized with disk.
- Finite smoke: **0 errors, 3 checks** — induced-subgraph/complement commutation through four vertices, the forest edge/component formula through five vertices, and the tree characterizations through five vertices.
- Audit content policy: **74 scoped items, 0 errors, 0 warnings**; item provenance and ledger evidence agree.
- Scoped citation/render/prose gates: `citecheck` scanned 74 items with no warning; `rendercheck` passed all 74 files and every KaTeX span; `prosecheck` reported 0 errors and 0 warnings.
- Whole-tree dependency adjuncts: `fwdcheck --quiet` passed. `extcheck --quiet` had no error and reported 83 standing `unproved-on-published` warnings. `depcheck --quiet` stopped only on 17 `published-unaudited` items awaiting A6: exactly this batch's three material repairs plus 14 concurrently repaired sibling-batch items; it reported no other hard-error class.
- Reconciliation/invariants: 74 unique manifest ids equal 74 unique ledger ids; all 74 frontmatter tags and ordered reference URL lists match their ledger rows; all 74 rationales are distinct; the statement/evidence census is 6 `literature-derived/exact-source` and 68 `ai-altered/semantic-source`; the contract has 59 scope ids and 59 matching entries.
- Repair integrity: all 29 former Diestel-portal items contain the mandated Chapter 1 PDF; none of the four replaced legacy URLs remains in an owned item or ledger row. All 71 pure-retag item bodies are byte-identical to `HEAD`, and all 71 retain their exact pre-edit verification block. Each material body equals its pre-edit body after only its one approved unused Fact paragraph is deleted; all three lack `audited`, `judge`, and self-written `verified` stamps.
- JSON, JSONL, scoped `git diff --check`, and owned-artifact trailing-whitespace checks passed. The changed in-manifest item set is exactly 74/74.
