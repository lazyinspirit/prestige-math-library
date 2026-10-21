# Batch 105 authoring notes — alternating diagrams and crossing-number minimality

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Batch: `105` · dependency level `2` · prerequisite batches `58`, `82`  
Scheduling input SHA-256: `a01ad0599f0865ce0072a50b1b0f05caedae7edd714cb6f3f6a0efce40ef1d05`  
Owner direction: `research/inverse-problems-knot-theory-all-109-2026-10-19-owner-authoring-direction.md`  
Manifest: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-105.pages.json`

## Controlling directions and recorded conflicts

The owner direction is binding for draft-only scope, complete uninterrupted
statements, proof format, source history, and frontmatter-only A/B pages. The
KT-50 design section at `research/plan-knot-theory-track.md` lines 1545–1567
controls the mathematical inventory and proof route: its statements and
prerequisite map specify crossing minimality, Jones-span adequacy, the Tait
flyping theorem, and the two B items. Both assigned design locations (lines
1545 and 1547) were read as part of this section. The corresponding
`research/plan-spec.json` registration has the correct page IDs, titles,
category, order, companions, and page `requires`, but its `items` arrays are
empty. The explicit KT-50 prose controls item inventory; the empty arrays are
recorded as an inventory mismatch, not as deletion of the planned claims.

The plan makes state adequacy and Jones span the crossing-minimality route;
flyping is for classifying diagrams. Therefore the flyping theorem and flype
definition remain in the inventory but are not inserted as logical prerequisites
of the crossing-minimality argument. The prerequisite map omits the actual
batch-82 bridge
`thm-bracket-state-sum-matches-library-jones-specialization`, which the Jones
span arguments need to identify the library polynomial and the convention
`t=A^{-4}`; that supplier is declared in the relevant item dependencies. The
map's linking-number/writhe edge is not used in the local alternating-adequacy
proof. The connected-alternating nonsplitting step was added as a local supplier
because the general link theorem must apply the connected-diagram bracket bound
to every competing diagram. That proof uses Menasco's crossing-ball argument,
not the batch-58 linking-number theorem. These dependency choices preserve the
planned claims and the actual proof route.

## Run state and write boundary

The native status was recomputed from `.autopilot/` on 2026-10-18 at
21:51:02 UTC. The run is `running`; stage `1-scaffold` reports 39/109 batches
covered, no workers in flight, and work deferred until authoring coverage is
complete. Existing run blockers are outside this batch: an owner repair and
recertification hold, plus invalid unit prerequisites because
`def-based-string-link-and-labeled-link-peripheral-system` has malformed YAML
(`deps: []` followed by an indented list). No `.autopilot` state, shared plan,
published content, verdict, or other pair's carrier was edited. The recent
repository head at inspection was `50139bdcb6` (`Defer compact construction
artifact scans until author drain`).

The two supplier batch inventories were inspected before authoring. Batch 58
supplies the oriented crossing-sign convention and the linking-number theorem;
batch 82 supplies the bracket smoothing convention, normalized-bracket
invariance, and the Jones specialization. Their actual supplier statements and
proofs were checked. Batch-82's bridge states
`V_K(t)=f_K(t^{-1/4})` with `t=A^{-4}` under full AC. The local crossing-number
definition uses ACω to ensure a diagram exists; finite-state, checkerboard, and
planar-graph arguments are choice-free. Full AC is used where the library Jones
bridge is invoked. The unfinished flyping theorem has a declared AC dependency,
but no proof is claimed for it.

## Item inventory, logical edges, and levels

There are 16 A items and 2 B items. Levels are recomputed from in-run item
dependencies: zero when there is no in-run supplier, otherwise one plus the
largest in-run supplier level. The manifest records the full dependency arrays;
the table gives their in-run edges.

| Level | Items and in-run suppliers |
|---:|---|
| 0 | `def-crossing-number-of-link`; `def-flype-crossing-ball-and-alternating-tangle-data`; `def-reduced-alternating-link-diagram`; `def-split-link`; `def-tait-graph-of-a-link-diagram`; `lem-connected-regular-link-diagram-has-checkerboard-coloring`; `lem-disconnected-projection-components-separated-by-jordan-curve`; `lem-kauffman-smoothing-operators-for-braid-crossings` — no in-run suppliers |
| 1 | `lem-connected-alternating-link-is-nonsplit` ← `def-split-link`, `def-reduced-alternating-link-diagram`, `def-flype-crossing-ball-and-alternating-tangle-data`; `lem-connected-projection-has-connected-tait-graphs` ← checkerboard-coloring lemma, Tait-graph definition; `lem-disconnected-link-diagram-represents-a-split-link` ← split-link definition, separated-projection lemma; `cex-knot-kt-50-boundary-case` ← crossing-number definition, reduced-alternating definition |
| 2 | `lem-connected-diagram-bracket-span-bound-and-alternating-equality` ← reduced-alternating definition, checkerboard lemma, Tait-graph definition, connected-Tait-graphs lemma; `thm-tait-flyping-theorem` ← reduced-alternating definition, flype/crossing-ball definition, connected-alternating nonsplitting lemma |
| 3 | `lem-alternating-state-adequacy-and-jones-span` ← reduced-alternating definition, bracket-span lemma; `thm-reduced-alternating-diagram-minimizes-crossings` ← crossing-number definition, reduced-alternating definition, disconnected-diagram split lemma, connected-alternating nonsplitting lemma, bracket-span lemma |
| 4 | `cor-jones-span-detects-crossing-number-for-reduced-alternating-knots` ← crossing-number definition, reduced-alternating definition, alternating-state adequacy/Jones-span lemma |
| 5 | `ex-knot-kt-50-worked-cases` ← crossing-number definition, reduced-alternating definition, braid-smoothing lemma, Tait-graph definition, connected-Tait-graphs lemma, Jones-span corollary |

The levels check returned 18 items, no errors, maximum level 5. The extra local
items make the crossing-number domain, split convention, checkerboard/Tait
notation, separated projection components, braid smoothing operators, and
connected-diagram bracket bound explicit before use. Both pages are below the
100-item cap.

## Source reading and disposition

The source-coverage ledger is
`research/inverse-problems-knot-theory-all-109-2026-10-19-batch-105.source-coverage.json`.
It records item-level support, locators, included/out-of-scope dispositions,
retrieval attempts, and source-resolution decisions.

| Source | Full-text locator and support | Fetch stamp |
|---|---|---|
| Danny Calegari, *Introduction to Knot Theory*, [lecture notes](https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf) | Complete notes; §1.9, pp. 7–8, for crossing number; §5.2, pp. 42–45, for degree/state-circle bounds, adequacy, and alternating span. | 48 PDF pages; 12,780,609 bytes; SHA-256 prefix `2b38476c9471585b` |
| Louis H. Kauffman, *New Invariants in the Theory of Knots*, [Astérisque 163–164 (1988)](https://www.numdam.org/item/AST_1988__163-164__137_0.pdf) | Complete source; §II, pp. 155–160, for bracket/smoothing conventions; §III, pp. 160–168 including Theorem 3.1, for extreme-state and alternating-span arguments. | 84 PDF pages; 4,007,236 bytes; SHA-256 prefix `f25dc4d80d09f337` |
| Louis H. Kauffman, *Combinatorial Knot Theory and the Jones Polynomial* (2022), [arXiv:2204.12104v2](https://arxiv.org/pdf/2204.12104v2) | Complete paper; §2 supports the bracket/Jones convention only, not the adequacy proof. | 49 PDF pages; 3,952,456 bytes; SHA-256 prefix `766c51c27abedff7` |
| Thomas Kindred, *A geometric proof of the flyping theorem* (2020), [arXiv:2008.06490v3](https://arxiv.org/pdf/2008.06490v3) | Complete paper; §§2.1, 2.2, 3.1 and Theorem 5.5 for definitions, crossing-ball conventions, alternate proof route, and prime-link scope. | 51 PDF pages; 14,645,968 bytes; SHA-256 prefix `8cc620f4a9b53ae9` |
| William W. Menasco, *Closed incompressible surfaces in alternating knot and link complements*, [Topology 23 (1984), 37–44](https://www.scribd.com/document/471863717/1-s2-0-0040938384900235-main-2) | Complete article text; §2, Theorem 1(a), Lemma 1 and proof, pp. 38–41, for connected alternating projection implies nonsplit and the crossing-ball/innermost-circle argument. | HTML; 1,137,432 bytes; 2,429 extracted text characters; SHA-256 prefix `3602fed09bd2bf7a` |

All five active-source stamps and the subsequent `source-fetch-check` check mode
passed 5/5. Two independent treatments are recorded on the A page; additional
sources are assigned to convention, flyping, and nonsplitting claims as shown
in the ledger.

The primary Menasco–Thistlethwaite 1993 full proof remains unavailable after
five prior routes: a guessed Annals PDF path returned 404, JSTOR served a
client-challenge page, the linked UTK route failed certificate validation, the
non-`www` UTK host served a maintenance page, and the AMS announcement PDF
returned 403. Exact failed UTK/AMS endpoint paths and timestamps were not
retained and are not invented here. The full Kindred alternative was read, but
its Theorem 5.5 is prime-link scoped and does not establish the registered
composite-link claim or the KT-50 decreasing-complexity route. The ledger marks
the theorem `owner-escalation`; the item has a complete statement and explicit
escalation but no invented proof or proof contract. This is a mathematical
blocker, not a source-history waiver.

## Item results and readiness

The main local result `thm-reduced-alternating-diagram-minimizes-crossings`
has a complete proof: the nonsplitting lemma and the separated-projection lemma
ensure every competing diagram is connected; the connected-diagram bracket
span bound and normalized-bracket invariance then force its crossing count to
be at least that of the reduced alternating diagram. The proof declares ACω
where the crossing-number minimum is formed. The knot Jones-span corollary and
both B items use the full-AC library Jones specialization. The boundary
counterexample is the positive one-crossing type-I kink of the unknot: its raw
bracket is `−A^3`, normalized Jones polynomial is `1`, and its displayed
crossing count 1 exceeds the unknot's crossing number 0. The worked cases
enumerate all 8 trefoil and 16 figure-eight states; the displayed Jones
polynomials have spans 3 and 4, respectively.

`node tools/step1-decisions.mjs record` produced 17 `ready` author-completion
records and one `escalated` record, without `--owner` or overwriting an
escalation. The ready records bind the current item hashes and list examined
dependencies; they are authoring completion, not independent approval. The
escalated item is `thm-tait-flyping-theorem`, because the composite-link proof
and required primary source route remain unresolved. No item carrier was
changed after these records were created. The native `itemHash` calculation
was rerun for all 18 records: 17 ready and 1 escalated, with no fingerprint
mismatches.

## Final scoped checks and blockers

All scoped checks were rerun after the final item edits:

- Dependency levels: 18 items, no errors, max level 5.
- `node tools/proof-layout.mjs`: 18 items, 46 proof steps, 0 defects.
- Strict proof contracts: 17/17 proof-bearing items, 0 errors/warnings. The
  flyping theorem has no supplied proof, so it is intentionally excluded.
- Precheck: 18 item files, 17 proof-bearing passed, flyping theorem
  `not-applicable`, 0 failures.
- Rendercheck: 20 files (18 items and 2 pages), no errors/warnings.
- Content policy: 18-item scope, 0 errors/warnings.
- Source-fetch check: 5/5 stamped sources verified.
- Statement/page audit: no hyperlinks interrupt statement text; references
  immediately follow complete statements; both page bodies are empty.

The full-run `proof-contract-coverage` attempt stopped before batch scope because
the unrelated `khovanov-to-floer-spectral-sequence` frontier page has an empty
or invalid inventory. The full `step1-decisions check` also remains open at run
scope (578 items, 306 ready; other work still has missing readiness records and
empty scaffold inventories). That check recognizes this batch's flyping
escalation as owner work; the 17 ready items have current fingerprints. The
batch's own 18 decisions are recorded above; global blockers were not repaired
because they are outside this batch's write boundary.

At handoff: 17 items are author-ready and one is escalated for owner resolution.
The checks establish scoped authoring consistency only; they do not constitute
independent review, acceptance, or publication.
