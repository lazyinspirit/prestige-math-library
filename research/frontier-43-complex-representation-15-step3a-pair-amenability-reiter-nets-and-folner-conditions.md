# Step 3a dispatch report — `amenability-reiter-nets-and-folner-conditions`

- Run: `frontier-43-complex-representation-15` (batch 2, orders 1234/1235,
  `representation-theory`).
- Pair: A `amenability-reiter-nets-and-folner-conditions` (26 items) / B
  `amenability-reiter-nets-and-folner-conditions-examples` (4 items); companion
  pointers agree A↔B and the B page requires only its A page.
- Role: alpha scope review of this pair only. No scaffold, manifest, coverage or
  owner record was edited; this report and the `record-scope` receipt are the
  only outputs.
- **Decision: `sufficient`** — all 18 design ids are present id-for-id with
  their full LCH claims, the 12 added items are recorded local suppliers of the
  design's own hard proof plan, sources are fetch-verified with load-bearing
  passages re-read live, and no unmet prerequisite was found. Non-blocking
  owner observations are in §6.

## 1. Inputs read

- Manifests: `research/frontier-43-complex-representation-15-batch-2.pages.json`
  (both pages; all 30 items with statement, strategy, kind, level, deps,
  provenance, sources), `...-batch-2.coverage.json` (4 A source rows, 3 B source
  rows, 83 harvested results), `...-batch-2.notes.md` (scope, supplier-first
  repair, coverage and final-review records), `...-batch-2.cross-batch-dependencies.json`
  (`[]`), `...-scope-ledger.json` (both pages owed in batch 2),
  `...-closeout-scope.json`.
- Design/prose: `research/plan-representation-theory-groups-track.md` RG-27 —
  section heading line 1910, A page line 1912, Requires paragraph and source
  backing, A table (14 rows), **Hard proof plan**, B page line 1958 and B table
  (4 rows); crosswalk rows RG-27/H1–H5 at lines 2545–2549 (18 ids); independent
  source row line 2391 (BHV App. G; Paterson Ch. 1/4); §15.5 inventory count
  line 2907 (“RG-27 18”); binding `requires` row line 2783. Placement/plan:
  `research/plan-spec.json` rows 1234/1235 (empty item arrays; the scaffold
  inventory is new and displaces nothing).
- Owner records: `...-owner-authoring-direction.md` “Batch 2: general-LCH
  amenability stability” (keep unrestricted LCH, sup-norm UCB, no countability
  or measurable global coset section); `...-alpha-step1-drift.md` lines 9–13
  (VERDICT `drift-applied`: add `amenable-groups-and-folner-criteria` order 650;
  owner scaffold repair adds `induced-unitary-representations-of-locally-compact-groups`
  order 1226); `...-drift-evidence.json` (declaredRequires and closure).
- Readiness: `research/frontier-43-complex-representation-15-step1-<item>.json`
  for all 30 pair items — **30/30 `ready`**, none escalated or source-dropped.
- Sources: fetch stamps in the coverage (BHV 523 pp, sha256_16
  `0281823290dfb42e`; Thomas L19 19 pp `70b196bbfa98d69e`; Thomas L20 18 pp
  `5cfd79ea65cc06db`; Daws–Runde 23 pp `be20ee004d875216`; Garrido 17 pp
  `651181b513aca4c5`). The earlier author-side full reads are recorded in
  `...-amenability-subgroup-resolution.md` and the batch notes; §3 lists what
  this review re-read live.

## 2. Design ∶ scaffold comparison (scope only)

All 14 design A ids are present with the same id and kind: the invariant-mean
definition and amenability definition; Reiter's (P1); the two conversion lemmas
(`lem-an-invariant-mean-produces-a-reiter-net`, `lem-a-reiter-net-has-an-invariant-mean-cluster-point`);
`thm-amenability-is-equivalent-to-reiter-p1`; the left Følner definition; both
directions to it (`lem-folner-nets-give-reiter-nets`,
`lem-reiter-functions-can-be-cut-down-to-folner-sets`); the Følner criterion;
the compactly-generated sequence corollary; the Hulanicki weak-containment
criterion; compact/abelian amenability; and closed-subgroup/quotient/extension
stability. The four design B ids are present exactly. Statements match the
design rows: means are norm-one positive functionals on $L^\infty(G)$ invariant
under $L_gf(x)=f(g^{-1}x)$; (P1) is the compact-uniform $L^1$ net form; the
Følner condition uses left translates $gF$ and finite positive measure; the
criterion and the Hulanicki equivalence are stated for arbitrary locally compact
Hausdorff $G$ with no countability, discreteness or unimodularity hypothesis;
sequences appear only in the second-countable compactly-generated corollary
(whose statement records that compact generation alone suffices).

The 12 further A items beyond the design table are the local suppliers the
design's hard proof plan explicitly presupposes (nets/choice bookkeeping, the
UCB route from an invariant mean to (P1), the layer-cake step for Følner
extraction, Markov–Kakutani and the fixed-point-property-to-amenability
direction for the base classes, and the closed-subgroup regular-restriction
lemma): see the appendix. Each is inside the pair's subject, each is disposed
`included` in the coverage, and each carries a recorded proof route; none
asserts a result beyond the page's needs. Counts: 26 A + 4 B.

Page metadata equals `plan-spec.json` exactly (ids, titles, kinds, category,
companions, orders 1234/1235), and the 9-entry `requires` list equals both the
binding table row 2783 and the plan-spec entry, including the backward published
prerequisite `induced-unitary-representations-of-locally-compact-groups`
(order 1226 < 1234). The design prose's looser “Requires” sentence omits the
three functional-analysis pages, but the binding table and the drift evidence
declare them, and the manifest follows the binding table.

## 3. Source coverage

`coverage-checklist … --require-destination` → 2 pages, 83 harvested results,
0 errors, 0 warnings; every `included`/`inline` row names an existing item.
The page is backed by the design's primary source (BHV Appendix G §§G.1–G.3,
G.5, Exercise G.6.2, and Appendix F §F.1) plus three independent treatments
(Thomas Lectures 19–20, Garrido's amenability notes, Daws–Runde §1). Load-bearing
passages re-read live in this review:

- BHV **Theorem G.3.1** (exact statement retrieved from the author-hosted PDF):
  the five equivalent properties — (i) amenable, (ii) topological invariant mean
  on $L^\infty(G)$, (iii) Reiter (P1) with compact $Q$, (iv) Reiter (P$_1^*$)
  with finite $Q$, (v) invariant mean on $L^\infty(G)$. This is exactly the
  content consumed by `thm-amenability-is-equivalent-to-reiter-p1` together
  with the intermediate items 11–12; the proof tail re-read (“G.3 Weak
  containment and amenability 457”, the $|a-b|^2\le|a^2-b^2|$ estimate) backs
  the Hulanicki item G.3.2.
- Thomas Lecture 19 (full text): mean and $L^1(G)_{1,+}$ definitions, weak$^*$
  density of $L^1(G)_{1,+}$ in the mean set via Hahn–Banach, the layer-cake
  identity, and the complete Reiter⇒Følner extraction ($K=Q^2$, choice of $f$
  with $\sup_{k\in K}\lVert k\cdot f-f\rVert_1\le \varepsilon\mu(Q)/(2\mu(K))$,
  the layer-cake average, $A=\{k:\mu(kE_t\triangle E_t)/\mu(E_t)\le\varepsilon\}$,
  $Q\subset AA^{-1}$, final $2\varepsilon$) — matching items 9, 17, 18.
- Thomas Lecture 20 (full text): UCB, $f*\varphi\in\mathrm{UCB}(G)$, the mean
  $\widetilde m(\varphi)=m(f_0*\varphi)$ and its topological invariance, the
  convex set $\Sigma$ and the Mazur/closure step producing
  $\lVert f*g_j-g_j\rVert_1\to0$ uniformly on norm-compacta, and the final
  compact-orbit step to (P1) — matching items 5, 10, 11, 12, 13.

Out-of-scope rows were reviewed and are genuinely unused by this pair: BHV
G.1.7 full fixed-point equivalence (only the direction needed for the base
classes is proved locally), G.3.8 amenable homogeneous spaces (owned by the
induced-representation page, which the pair does require), G.4 Kesten
(random walks/Markov operators), G.5 subexponential growth (owned by the
published `amenable-groups-and-folner-criteria` page, which has
`thm-subexponential-growth-implies-amenability` and
`cex-amenability-does-not-imply-subexponential-growth`), F.2–F.5 (group
$C^*$-algebra page), and the SL$_2$/Banach–Tarski, quantum-group and Grigorchuk
rows in the lecture-note sources. No promised item consumes any of them.

## 4. Prerequisite audit (unmet-prerequisite duty)

- The 30 items declare **93 distinct dependency ids**: 24 are items of this same
  A page, **69 resolve to published item files, every one carrying
  `status: published`**, and 0 resolve to another in-run batch or to nothing;
  `...-batch-2.cross-batch-dependencies.json` is `[]`.
- All 9 page-level `requires` exist as published `library/` pages, with orders
  485, 490, 502, 650, 1130, 1218, 1220, 1226, 1230 — all earlier than 1234.
- Wikilink closure: every `[[…]]` reference in the 30 items' statements and
  strategies resolves to a pair item or a published item (0 unresolved);
  dependency levels have 0 mismatches against `1 + max(level of in-page deps)`,
  hence no cycle; `validate-plan.mjs` on `plan-spec.json` is clean for the 1599
  pages carrying item lists.
- No published item or `library/` page anywhere in the corpus references any of
  the 30 new ids (scripted scan: 0 hits), so nothing published is left dangling
  by this pair and Step 4 need only add the forward edges.
- The pair's only in-run consumer was checked supplier-side: batch 4
  `kazhdans-property-t-and-spectral-gap` item
  `thm-an-amenable-property-t-locally-compact-group-is-compact` declares
  `def-amenable-locally-compact-group` and
  `thm-hulanicki-weak-containment-criterion-for-amenability`, both present in
  this inventory; no other item-level dependency on this pair exists in the run.
- **Finding: no confirmed unmet prerequisite.** One declared published supplier
  carries pending published maintenance rather than a gap:
  `thm-sigma-finite-duality-for-bounded-functionals-on-l-p` (dep of item 12) is
  classified **A-P** in `research/published-consumer-supplier-ledger.md` (batch-15
  review 2026-10-06; item index line 33878, finding line 13, reader row
  `reader:15:3`): its proof asserts a measurable gluing of quotient densities
  without an explicit choice premise and the standalone choice-free interface
  remains pending owner repair. Item 12 assumes AC (`def-axiom-of-choice` in its
  deps and its `axiom_use` note) and its recorded strategy reconstructs the
  bounded-functional-as-$L^\infty$-pairing locally on clopen $\sigma$-compact
  cosets using the $\sigma$-finite case, so the present use is not blocked; the
  pending item remains an owner-side maintenance note, exactly as recorded in
  the ledger.

## 5. Intended role in the library

- The pair is the locally compact amenability station of the
  representation-theory track: invariant means, Reiter (P1), Følner sets and
  the Hulanicki weak-containment criterion, with the closure and base-class
  results. Its designed consumer is RG-29 (property (T)), which uses exactly the
  amenability definition and the Hulanicki criterion to prove that an amenable
  property-(T) locally compact group is compact.
- The discrete specialization remains with the published
  `amenable-groups-and-folner-criteria` page (invariant means, discrete Følner
  criterion, Tarski alternative, the free-group non-amenability theorem the B
  counterexample cites); the nonunimodular example uses the published RG-19
  modular-function items. The pair neither duplicates nor starves those pages.
- The B page is a leaf requiring only its A page; its four items are the
  design's standard illustrations (expanding cubes in $\mathbb R^n$, constant
  Reiter net on compact groups, amenable nonunimodular $ax+b$ group, $F_2$
  non-amenable).

## 6. Non-blocking owner notes

1. Coverage attribution granularity (§3): the BHV G.3.1 row is disposed
   `included` against the (P1) equivalence although the source theorem also
   contains clause (iv) Reiter (P$_1^*$); the pair deliberately promises only
   (P1) and proves the topological-mean machinery as items 11–12. Optionally
   record the (P$_1^*$) clause as `inline` for precision; no scope action.
2. The BHV locator for `ex-folner-sets-in-rn` attributes “the elementary Folner
   estimate for cubes in $\mathbb R^n$” to Example G.5.4; in a bounded live
   check I could only confirm the source's $\mathbb Z$-interval material there.
   The estimate is elementary, the item's strategy proves it locally from the
   published Lebesgue-measure items, and Garrido's notes supply the discrete
   Følner material; the owner may relabel the row if desired. Recorded as
   reading uncertainty, not as a scope defect.
3. The design's §12 independent-source row names Paterson Ch. 1/4; the built
   coverage instead uses Thomas Lectures 19–20, Garrido and Daws–Runde, all
   fetch-verified full texts, with Paterson recorded in the batch notes as an
   unchecked alternative. The independent-treatment requirement is met.
4. Choice bookkeeping is a Step 3b/5 contract detail: the two B items
   `ex-folner-sets-in-rn` and `cex-the-free-group-on-two-generators-is-not-amenable`
   have no `axiom_use` field and declare no `def-axiom-of-choice` dependency,
   while their suppliers inherit AC (Haar existence/uniqueness; the published
   discrete non-amenability theorem); the other two B items do declare AC. All A
   items that use choice carry an `axiom_use` note.
5. Proof correctness, statement-level source fidelity and dependency minimality
   were not judged here; those belong to Step 3b and Step 5. No owner decision
   (proceed/merge/enrich) is implied by this review.

## 7. Checks run

| Check | Result |
|---|---|
| `coverage-checklist.mjs … --require-destination` | exit 0: 2 pages, 83 harvested results, 0 errors, 0 warnings |
| `manifest-deps.mjs` on the batch manifest | exit 0: 30 items, 0 errors |
| Design-to-scaffold id diff (RG-27) | 18/18 design ids present, id-for-id; 12 recorded local suppliers |
| Page metadata vs `plan-spec.json` (id/order/title/kind/category/companion/requires) | equal for both pages |
| Declared deps resolution | 93 distinct: 24 in-page + 69 published (`status: published`), 0 missing, 0 cross-batch |
| Page `requires` availability | 9/9 published, all orders < 1234 |
| Wikilink resolution across the 30 items | 0 unresolved |
| Dependency levels | 0 mismatches; no cycle |
| Published references to the 30 new ids (`items/`, `library/`) | 0 hits |
| `validate-plan.mjs research/plan-spec.json` | exit 0; no cycles, forward references, B-page deps or unresolved ids |
| In-run consumers | 1 item (batch 4) with 2 deps, both present |

## 8. Decision and receipt

`sufficient`: the planned definitions, results and examples cover the pair's
intended subject — invariant means, Reiter (P1), Haar–Følner criteria and
regular weak containment in full locally compact Hausdorff generality, with the
designed base classes, closure properties and illustrations — at design
breadth, with verified sources, no unmet prerequisite and no dropped or weakened
claim. Receipt:
`research/frontier-43-complex-representation-15-step3a-review-amenability-reiter-nets-and-folner-conditions.json`
(recorded with `tools/step3-decisions.mjs record-scope`).

## Appendix — inventory this decision is bound to

A page (26 items, manifest order): `def-left-invariant-mean-on-l-infinity-of-a-locally-compact-group`
(definition), `def-amenable-locally-compact-group` (definition),
`def-reiter-condition-p1` (definition),
`def-left-folner-net-for-a-locally-compact-group` (definition),
`def-left-uniformly-continuous-bounded-functions-on-a-locally-compact-group`
(definition, added), `lem-an-lch-group-has-an-open-sigma-compact-subgroup`
(lemma, added),
`lem-positive-measure-subsets-of-haar-measure-contain-finite-positive-measure-subsets`
(lemma, added), `lem-averages-over-probability-densities-attain-the-essential-supremum`
(lemma, added), `lem-l1-probability-densities-are-weak-star-dense-in-the-mean-set`
(lemma, added), `lem-l1-convolution-with-an-l-infinity-function-is-left-uniformly-continuous`
(lemma, added), `lem-a-ucb-invariant-mean-yields-a-topological-invariant-mean`
(lemma, added), `lem-a-topological-invariant-mean-yields-norm-approximately-invariant-densities`
(lemma, added), `lem-an-invariant-mean-produces-a-reiter-net` (lemma),
`lem-a-reiter-net-has-an-invariant-mean-cluster-point` (lemma),
`thm-amenability-is-equivalent-to-reiter-p1` (theorem),
`lem-folner-nets-give-reiter-nets` (lemma),
`lem-layer-cake-identity-for-nonnegative-integrable-functions` (lemma, added),
`lem-reiter-functions-can-be-cut-down-to-folner-sets` (lemma),
`thm-folner-criterion-for-locally-compact-groups` (theorem),
`cor-folner-sequences-for-second-countable-compactly-generated-groups`
(corollary), `thm-hulanicki-weak-containment-criterion-for-amenability`
(theorem), `lem-markov-kakutani-fixed-point-theorem-for-abelian-affine-actions`
(lemma, added), `lem-a-group-with-the-fixed-point-property-is-amenable`
(lemma, added), `prop-compact-and-locally-compact-abelian-groups-are-amenable`
(proposition), `lem-restricted-regular-representation-is-weakly-contained-in-subgroup-regular-representation`
(lemma, added), `thm-amenability-is-stable-under-closed-subgroups-quotients-and-extensions`
(theorem). Items marked “added” are the 12 local suppliers discussed in §2; the
other 14 are the design's RG-27 A rows.

B page (4 items): `ex-folner-sets-in-rn` (example),
`ex-compact-groups-have-a-constant-reiter-net` (example),
`ex-the-real-affine-group-is-amenable-and-nonunimodular` (example),
`cex-the-free-group-on-two-generators-is-not-amenable` (counterexample) — the
design's B inventory in full.
