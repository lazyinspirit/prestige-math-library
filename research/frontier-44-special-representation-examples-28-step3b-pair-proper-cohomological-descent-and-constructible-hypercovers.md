# Step 3b — pair `proper-cohomological-descent-and-constructible-hypercovers` (batch 45)

Run `frontier-44-special-representation-examples-28`; role alpha-high; label
`step3b-pair-proper-cohomological-descent-and-constructible-hypercovers-361e21a03abe0fae`.
Owned A page: `proper-cohomological-descent-and-constructible-hypercovers`
(order 1824, category `special-topics-in-representation-theory`, 3 scaffolded
items). Owned B page:
`proper-cohomological-descent-and-constructible-hypercovers-examples`
(order 1827, 2 scaffolded items). Batch 45 (`…-batch-45.pages.json`) contains
only this pair, so the shared batch files carry no sibling rows.

## Owned IDs and open obligations (entry checkpoint)

Authoring order is the dispatch's dependency-level order (ties by page order
and item ID); all five items are scaffold-only (no item files on disk at
entry; both pages absent):

1. `lem-bicosimplicial-derived-total-complex-agrees-with-diagonal-totalization`
   (A, level 0; author with item 1 by dispatch order).
2. `lem-proper-surjective-maps-have-cohomological-descent-for-constructible-field-sheaves`
   (A, level 17).
3. `thm-proper-hypercovers-compute-constructible-derived-cohomology`
   (A, level 18).
4. `ex-proper-cech-descent-does-not-require-acyclic-fibers`
   (B, level 18; same level as item 3, ordered after it by page order).
5. `ex-hypercover-total-degree-uses-only-a-finite-matching-truncation`
   (B, level 19).

Open obligations at entry:

1. author all five item files in the order above and both pages
   `library/special-topics-in-representation-theory/proper-cohomological-descent-and-constructible-hypercovers.md`
   and `…-examples.md`;
2. audit each scaffold statement, hypothesis, declared supplier and proof
   route against the current inputs, repairing local gaps and rechecking the
   Step-3a findings (F1 reconciled, F2 wording, F3 analytic properness, F4 B
   depth) against current files;
3. sync the batch-45 manifest deps/provenance to the authored items without
   disturbing sibling batches, and register the pair in the batch-45 proof
   contracts;
4. run the explicit-path checks on the changed set (proof-layout batched at
   the end, precheck, rendercheck, content-policy, depcheck, depsource,
   manifest-deps, item-dependency-levels, validate-plan, coverage-checklist,
   source checks, proof-contract `--strict`, boundary-audit,
   citation-fidelity, pathcheck, prosecheck) and record one
   `tools/step3-decisions.mjs record-item` decision per owned ID;
5. flag every still-unfinished in-run supplier with exact supplier ID,
   consumer ID and consuming step, and keep that consumer's decision
   escalated until the supplier and its actual proof use are verified.

Unfinished in-run suppliers checked on disk at entry (exact IDs and the
consumers they are declared for):

- `thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace`
  (batch 40, `analytic-derived-six-operations-and-duality`) — no item file on
  disk; declared for A items 2 and 3 (proof steps 1.1–2.1 and 3.1) and it also
  underwrites the proper base-change identification used at step 2.1 of item 2.
- `lem-analytic-constructible-sheaves-admit-coherent-six-operations`
  (batch 40) — no item file on disk; declared for A items 2 and 3 (the
  bounded-constructible restriction and coefficient lower-bound clauses).
- `thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications`
  (batch 37, `complex-algebraic-stratified-topology`) — no item file on disk;
  declared for B example 1 step 2 (projective algebraic morphism proper in the
  analytic topology).

In-run suppliers that are already authored and will be read directly:
`lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent` (batch 36),
`def-algebraically-constructible-complex-of-analytic-field-sheaves` and
`def-analytic-topology-and-finite-smooth-algebraic-stratifications` (batch 30).
All published declared suppliers exist on disk and were read at entry:
`lem-simplicial-normalization-prism-and-trivial-fibration-criterion`,
`prop-sum-and-product-totalisations-agree-on-finite-diagonal-double-complexes`,
`def-direct-sum-total-complex-of-a-double-complex`,
`def-chain-complex-in-an-abelian-category`, `def-axiom-of-choice`,
`thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology`,
`def-simplicial-object-and-simplicial-commutative-ring`,
`cor-homology-of-spheres`,
`cor-cohomology-over-a-field-is-dual-to-homology-over-that-field`,
`def-classical-algebraic-prevariety-regular-maps-and-varieties`,
`def-one-point-compactification`, `thm-one-point-compactification-properties`,
`thm-stereographic-projection-riemann-sphere-homeomorphism`,
`thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology`,
`def-projective-morphism-classical`,
`def-product-varieties-universal-property`.

## Entry audit notes (Step-3a findings rechecked against current inputs)

- **F3 (analytic properness, open).** Example 1 needs `S→pt` proper in the
  analytic topology for `S=ℙ¹(ℂ)`. Rechecked on disk: there is still no
  standalone classical analytic properness definition; the route is the
  batch-37 clause, whose item file is absent. The example is authored with
  this exact obligation stated and its decision escalated; no silent
  weakening.
- **F1 (supplier-id reconciliation).** The current design, `plan-spec.json`
  and both manifest carriers name the arbitrary-field batch-40 items, not the
  char-0 equivariant theorem; the cross-batch ledger carries the same rows.
  No action required beyond keeping the replacement edges in the manifest.
- **F2 (coverage wording).** The A-page row 1 disposition `included`
  describes a diagonal comparison stated in DHI via homotopy colimits; the
  authored item 1 reconstructs the chain-level comparison locally from the
  Stacks §23/§27.1 prism material, so the "explicit local contractions"
  wording is accurate for what is authored. No coverage edit needed.
- **F4 (B depth).** Both B items are boundary checks exactly as designed; no
  enrichment owed.

## Checkpoint log

(one entry per item, in the dispatch dependency order; the level labels were
recomputed from the live manifests at handoff, see the levels section)

### Item 1 (level 0): `lem-bicosimplicial-derived-total-complex-agrees-with-diagonal-totalization`

- **Authored** `items/lem-bicosimplicial-derived-total-complex-agrees-with-diagonal-totalization.md`
  (draft, `origin: pipeline`, `dependency_level: 0`, deps exactly the
  manifest's four, provenance literature-derived/ai-altered with the two
  DHI/Stacks URLs).
- **Claim/conventions.** The manifest statement verbatim; the Given fixes the
  reading of "bicosimplicial complex" (structure operators pairwise commuting,
  the internal `d` squaring to zero and commuting with all of them, signs
  squaring to zero) and the cosimplicial variance is produced in-corpus by an
  arrow-reversal step.
- **Route.** Yoneda-recursion construction of natural comparison maps on the
  representable models $Q_{p,r}$ with specified contractions (prism of [F1] on
  the diagonal model; the two-factor tensor contraction verified by direct
  expansion, including the vanishing cross term $e\partial=0$); the general
  degree-zero-anchored homotopy recursion gives the two inverse identities;
  arrow reversal covers the cochain/cosimplicial variance, and bidegree parity
  covers the internal differential with the stated $(-1)^{p+r}$/$(-1)^n$ twists
  (the homotopy's `d`-terms cancel as $(-1)^{p+r}(Hd-dH)$). [F2] covers
  sum=product on finite diagonals, [F1] covers normalization on either side.
  No choice, no coefficient-finiteness.
- **Checks.** `precheck` PASS after adopting the checker's canonical layer
  numbering (1.1-6.1; no content change); `proof-layout` 6 steps, 0 defects;
  `rendercheck` OK.
- **Decision.** `accept` (defects `[]`); the receipt was still current at the
  final check because all four suppliers are published and stable.

### Item 2 (level 19): `lem-proper-surjective-maps-have-cohomological-descent-for-constructible-field-sheaves`

- **Authored** `items/lem-proper-surjective-maps-have-cohomological-descent-for-constructible-field-sheaves.md`
  (draft, `dependency_level: 19`, deps exactly the manifest's seven).
- **Claim/conventions.** Manifest statement verbatim (analytic topology,
  normalized or unnormalized alternating-face total, one fixed lower bound,
  arbitrary base change, non-acyclic fibers allowed).
- **Route.** Strict bounded model with the uniform bound $a$; cone of the
  augmented Cech map, filtered by $p$, finite in each total degree, stalk
  functors exact and commuting with the finite columns; at a stalk the proper
  base change of the batch-40 suppliers identifies the first page with
  $H^q(K)\to H^q(S,K)\to H^q(S^2,K)\to\cdots$; one chosen point $y\in S$ gives
  the insertion maps with $d_0\,\mathrm{ins}_{r+1}=\mathrm{id}$,
  $d_i\,\mathrm{ins}_{r+1}=\mathrm{ins}_r d_{i-1}$, hence
  $h_{p+1}\delta_p+\delta_{p-1}h_p=\mathrm{id}$ and $h_0\delta_{-1}=\mathrm{id}$;
  the degreewise-finite spectral sequence [F3] then kills the stalk cone, and a
  complex with acyclic stalks is acyclic. Base change/coefficient naturality
  from the [F1] Cartesian-pasting clause; global form by the composition
  clause; AC inherited exactly through [A1].
- **Correction made during authoring.** The augmentation map
  $\delta_{-1}$ is the constant pullback of the projection $S\to\mathrm{pt}$
  (with $h_0$ the chosen-point pullback), not the insertion pullback; the
  identity $h_0\delta_{-1}=\mathrm{id}$ uses that the projection followed by
  the chosen point is the identity of the point.
- **Checks.** `precheck` PASS after canonical layering (1.1, 1.2, 2.1, 3.1);
  `proof-layout` 4 steps, 0 defects; `rendercheck` OK; contract entry written
  with batch-40 quotes now available.
- **Decision.** `escalate` / defects `["dependency"]`; exact in-flight
  supplier IDs and consuming steps in the escalations section below.

### Item 3 (level 20): `thm-proper-hypercovers-compute-constructible-derived-cohomology`

- **Authored** `items/thm-proper-hypercovers-compute-constructible-derived-cohomology.md`
  (draft, `dependency_level: 20`, deps exactly the manifest's ten).
- **Claim/conventions.** Manifest statement verbatim; the Given fixes the
  augmented-coskeleton convention (degree $-1$ object $X$, matching objects as
  the finite limits), so that height-zero hypercovers are Cech nerves.
- **Route (bounded-height induction, reconstructed on chain totals).**
  Height zero is [F1]; $V=\operatorname{cosk}_nU$ is a proper hypercover of
  height $\le n$; $U_j\to V_j$ is the identity for $j\le n$ and a finite
  product/pullback of the matching surjection in higher degrees; the
  bisimplicial Cech model is totalized with [F1] on the rows and the induction
  hypothesis on the columns, the finite diagonals identify iterated and full
  totals, and [F2] replaces the double total by the diagonal
  $D_j=W_{j,j}$; $U$ is a retract over $X$ of $D$ ($i$ repeats, $r$ projects
  the first factor in degree $n+1$ and is extended by $U=\operatorname{cosk}_{n+1}U$),
  so the $U$-cone is a retract of an acyclic cone. Arbitrary height: the
  truncation $\operatorname{cosk}_N\operatorname{sk}_N$ agrees through degree
  $N$, and total degrees $m-1,m,m+1$ use only levels $p\le m-a+1$; the
  spectral sequence and refinements follow.
- **Checks.** `precheck` PASS after canonical layering (1.1-6.1);
  `proof-layout` 7 steps, 0 defects; `rendercheck` OK; contract entry written.
- **Decision.** `escalate` / `["dependency"]` (transitive consumption of the
  in-flight batch-40 items at step 2.1).

### Item 4 (level 20): `ex-proper-cech-descent-does-not-require-acyclic-fibers`

- **Authored** `items/ex-proper-cech-descent-does-not-require-acyclic-fibers.md`
  (draft, `dependency_level: 20`, deps exactly the manifest's twelve;
  ai-generated statement with `generation.role: example`).
- **Claim/conventions.** Manifest statement verbatim.
- **Route.** Two-chart classical model of $\mathbb P^1(\mathbb C)$ with the
  analytic topology, identified with the Riemann sphere (compact); the
  terminal map is projective via the identity closed immersion into
  $\mathrm{pt}\times\mathbb P^1(\mathbb C)$ and proper in the analytic topology
  by the batch-37 clause; the fiber is not acyclic by
  $S\cong S^2$ (stereographic homeomorphism), homotopy invariance,
  $H_2(S^2;k)\cong k$ and field duality $H^2(S;k)\cong k\ne0$; the augmented
  rows are contracted by inserting one point as first coordinate, including
  the $q=2$ row with $H^2(S;k)\cong k$ at $p=0$; [F1] gives the unaugmented
  total: $k$ in degree 0, zero elsewhere.
- **Checks.** `precheck` PASS after canonical layering (1.1, 1.2, 1.3, 2.1,
  3.1); `proof-layout` 5 steps, 0 defects; `rendercheck` OK; contract entry
  written including the batch-37 quote.
- **Decision.** `escalate` / `["dependency"]` (batch-37 properness clause).

### Item 5 (level 21): `ex-hypercover-total-degree-uses-only-a-finite-matching-truncation`

- **Authored** `items/ex-hypercover-total-degree-uses-only-a-finite-matching-truncation.md`
  (draft, `dependency_level: 21`, deps the manifest's two; ai-generated
  statement with `generation.role: example`).
- **Claim/conventions.** Manifest statement verbatim.
- **Route.** Bidegree $(p,q)$, $q\ge a$, gives $0\le p\le m-a$ for total
  degree $m$ and $p\le m-a+1$ for the differentials in and out of degree $m$;
  the truncation $\operatorname{cosk}_N\operatorname{sk}_N$ with
  $N\ge m-a+1$ agrees with the hypercover through degree $N$ and therefore in
  degrees $m-1,m,m+1$; sharpness for $F=k_X$: the term $(n,0)$ has outgoing
  differential into the level $n+1$ term $(n+1,0)$, so level $n$ alone does
  not determine $H^n$.
- **Checks.** `precheck` PASS after canonical layering (1.1, 2.1, 3.1);
  `proof-layout` 3 steps, 0 defects; `rendercheck` OK; contract entry written.
- **Decision.** `escalate` / `["dependency"]`: the direct in-pair supplier
  (item 3) is authored and used at step 1.1, but item 3 itself stays escalated
  pending the batch-40 chain; kept open until that chain drains and the
  receipt closure is current.

## Pages, registrations and records

- **Pages authored.** `library/special-topics-in-representation-theory/proper-cohomological-descent-and-constructible-hypercovers.md`
  (A page, items in dependency order, `requires` exactly the plan's seven) and
  `…-examples.md` (B page, the two examples in order, `requires` exactly the
  plan's three). Both `status: draft`; B is a leaf page.
- **Manifest sync.** `research/…-batch-45.pages.json`: the five item entries
  keep the scaffold statements/strategies/deps/provenance (the item files match
  the deps exactly; `manifest-deps` 5 items, 0 normalized, 0 errors) and their
  `dependency_level` values were refreshed from the live graph (below).
- **Coverage.** Unchanged and current: 20 harvested rows over 5 source
  instances; `coverage-checklist --require-destination` 2 pages, 0 errors, the
  one previously explained `coverage-low-yield` warning; `source-fetch-check`
  5/5 fetch-verified and 5/5 resolved against the recorded stamps.
- **Contracts.** Wrote `research/…-batch-45.proof-contracts.json` (version 1,
  the five owned IDs) with exact source-section quotes for every resolvable
  cited fact, one derivation entry per numbered step (inputs = the step's
  actual fact/step tokens plus its trailing justification words), and all eight
  standard boundary dispositions per item. `proof-contract --strict`: **0
  errors, 0 warnings, 5/5 items**; `citation-fidelity --fail-on-missing-quote`:
  no missing quote, no widening candidate; `boundary-audit
  --fail-on-contradicted --fail-on-template`: no contradicted disposition and
  no template reuse.
- **Cross-batch ledger.** `research/…-batch-45.cross-batch-dependencies.json`
  keeps its 15 rows (3 page edges, 12 item edges), all `verified`, with the
  evidence strings rewritten to name the actual authored consumer steps and
  supplier clauses; `frontier-dependency-ledger refresh` rerun successfully.

## Dependency-level recomputation (17/18/18/19 -> 19/20/20/21)

The scaffold labels were computed before the suppliers existed. While this pair
was authored, the batch-40 items (now levels 17/18) and the batch-36 item
(level 9) were written, so the repository's own computation
(`item-dependency-levels.mjs`, which derives levels from the live manifests)
gives:

| item | scaffold | computed now | recorded |
|---|---|---|---|
| `lem-bicosimplicial-…-diagonal-totalization` | 0 | 0 | 0 |
| `lem-proper-surjective-…-field-sheaves` | 17 | 19 | 19 |
| `thm-proper-hypercovers-…-cohomology` | 18 | 20 | 20 |
| `ex-proper-cech-descent-…-acyclic-fibers` | 18 | 20 | 20 |
| `ex-hypercover-total-degree-…-truncation` | 19 | 21 | 21 |

Both the item frontmatter and the batch-45 manifest entries carry the recorded
values; the authoring order is unchanged (ties: A page before B page; item ID).
At the final check no `dependency-level` finding names any owned item; the
run-wide check still reports pre-existing findings in sibling batches
(`thm-proper-cohomology-…`, quiver-flag, projective-perverse, compact-support
and cyclotomic-KLR items), none owned by this pair.

## Checks actually run (final state)

- `node tools/proof-layout.mjs` over the five changed item paths (single
  batched run after the last edit): **5 items, 25 steps, 0 defects**.
- `precheck.mts` over the five paths: **5 checked, 0 failing** (all PASS).
- `rendercheck.mjs` over the five items plus both pages: **7 files OK**
  (wikilinks, delimiters, display blocks, KaTeX and YAML all parse).
- `content-policy.mjs` batch-45 manifest, item mode and `--manifest-only`:
  **5 scoped items, 0 errors, 0 warnings** in both modes.
- `depcheck.mjs --items-file` (the five IDs): **OK** (focused item checks; the
  selected page/prerequisite cycle checks pass).
- `depsource.mjs --run … --items-file`: **5/5 consumer coverage, 0
  unresolved**; 19 links to published pages, 16 to in-run draft pages.
- `manifest-deps.mjs` batch-45 manifest: **5 items, 0 errors**.
- `item-dependency-levels.mjs check --run …`: no finding names an owned item
  (table above).
- `validate-plan.mjs research/plan-spec.json --run …`: exit non-zero on
  **4 pre-existing sibling errors** (`complex-algebraic-stratified-topology`,
  `logarithmic-hodge-…`, `equivariant-borel-moore-…-examples`,
  `proper-hyperresolutions-…`); **no finding involves either owned page**.
  `frontier-item-gate --run … --tool validate-plan` reports the same sibling
  errors plus one sibling `b-leaf` finding, again none for this pair.
- `coverage-checklist.mjs … --require-destination`: 2 pages, 20 harvested,
  0 errors, 1 explained warning.
- `source-fetch-check.mjs --coverage …`: 5/5 fetch-verified, 5/5 resolved.
- `proof-contract.mjs … --strict`: 0 errors, 0 warnings, 5/5 items.
- `citation-fidelity.mjs … --fail-on-missing-quote`: clean.
- `boundary-audit.mjs … --fail-on-contradicted --fail-on-template`: 40 rows,
  10 not-applicable, no contradicted disposition, no template reuse.
- `pathcheck.mjs --pages-file` (both pages): 1 pathway file, 0 errors,
  1 known `draft-unplaced` warning (pathway-sync places the draft page).
- `prosecheck.mjs` over the five items and both pages: 0 errors, 0 warnings.
- `finite-smoke.mjs` batch-45 contract: 0 checks over 0/5 obligated items
  (this pair registers no finite obligation).
- `manifest-integrity.mjs --run …`: 100/100 owed pages present, no scope
  drift.
- `gate-liveness.mjs --run …`: whole-run observation only — the merged
  whole-run proof-contract/coverage/finite-smoke inputs are not present yet
  and the run-wide precheck summary is unparsed while sibling batches are in
  flight; not an owned-pair defect.
- `step3-decisions.mjs check --run … --phase final`: item 1 closes with its
  current receipt; items 2-5 are open in the states recorded in the
  escalations section (the engine's final acceptance counts move while the
  run is being written by other workers).

## Supplier reconciliation and escalations (exact IDs, consumers, steps)

At entry the two batch-40 items and the batch-37 item had no files. During
this dispatch the sibling authors wrote them, so the escalation trigger was
re-checked against the files now on disk:

- `thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace`
  (batch 40, level 17): consumed by **item 2 steps 1.1-2.1** (exact inverse
  image, ordinary proper base change, face/degeneracy naturality, fiber
  identification, composition) and by **item 3 step 2.1** (composition and
  finite-sum compatibility). The authored Statement ("ordinary proper and
  extraordinary proper base change", "The comparisons commute with Cartesian
  pasting, composition of maps, evaluation and trace") and its [F3] fact
  ("exactness of f^*") were read on 2026-10-10 and match the use.
- `lem-analytic-constructible-sheaves-admit-coherent-six-operations`
  (batch 40, level 18): consumed by **item 2 step 1.1** and **item 3 step
  2.1** for the arbitrary-field bounded-constructible restriction with pulled
  coefficients again bounded below; the authored Statement was read and
  matches.
- `thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications`
  (batch 37, level 3): consumed by **item 4 step 1.2** for "projective
  algebraic morphism => proper in the analytic topology"; its Statement was
  read, including the reduced quasi-projective hypotheses, which both $S$ and
  $\mathrm{pt}$ satisfy.

Because the batch-40 and batch-37 writers were still writing their batches at
handoff (files modified within minutes of the final check), the reachability
hashes of items 2-5 changed after each receipt was recorded. The recorded item
states are therefore: item 1 `accept` (current, closed); item 2 `escalate`
(defect type `dependency`); item 3 `escalate`; item 4 `escalate`; item 5
`escalate`, each with the exact supplier chain in its reason. This is the
dispatch's prescribed state for consumers of still-in-flight suppliers: author
the consumer (done, checks green) and keep the decision escalated until the
supplier batches drain and the declaration-level uses are re-reconciled on the
frozen closure. No genuine mathematical blocker was found in the suppliers'
current statements; the open items are bookkeeping-bound to concurrent writer
activity, not to a defect identified here.

## Published concerns and Step-4 notes

- No published item was edited; no published defect was found in the items
  this pair consumes (all suppliers cited are in-run drafts or published items
  read in full).
- Coverage wording (Step-3a F2) is accurate for the authored item 1: its
  diagonal comparison is reconstructed locally from the Stacks §23/§27.1 prism
  material, so no coverage edit is owed.
- Interface note for Steps 5-7: item 4 identifies the fiber powers of the
  terminal map with the products $S^{p+1}$ (the fiber product over the point),
  instantiated inside the descent lemma's own construction; no separate
  product-existence item is declared beyond the lemma and the classical-variety
  definition that the item already deps on.
- No plan or prose amendment for Step 4 is requested from this pair; the
  pre-splice plan mismatches reported by `validate-plan` belong to sibling
  batches, not to either page of this pair.

## Handoff status

- **Completed.** All five assigned IDs authored in the dispatch order
  (levels 0, 19, 20, 20, 21) and both pages created; manifest entries synced
  (levels), coverage and source stamps current, batch-45 proof contracts
  written (strict-clean), cross-batch ledger refreshed; item decisions
  recorded for all five IDs (one accept, four escalations bound to in-flight
  supplier batches with exact IDs and steps).
- **Checks actually run.** The full battery above: proof-layout (batched),
  precheck, rendercheck, content-policy (both modes), depcheck, depsource,
  manifest-deps, item-dependency-levels, validate-plan (pair-clean),
  frontier-item-gate (pair-clean), coverage-checklist, source-fetch-check,
  proof-contract `--strict`, citation-fidelity, boundary-audit, pathcheck,
  prosecheck, finite-smoke, manifest-integrity, gate-liveness (whole-run
  observation), step3-decisions check.
- **Added suppliers.** None (no new item IDs beyond the five scaffold IDs).
- **Open obligations.** (1) Re-record current item receipts for items 2-5
  once the batch-40 and batch-37 writers drain (their reasons name the exact
  supplier IDs and consuming steps); this is the only reason those four rows
  remain open. (2) The whole-run `gate-liveness` parity items and the sibling
  `validate-plan` errors belong to the run aggregate and sibling pairs, not to
  this pair.
