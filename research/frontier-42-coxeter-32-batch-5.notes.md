# Batch 5 Step 1 scaffold — Finite Lattice Projections and Coxeter Chain Labels

Run: `frontier-42-coxeter-32` · pair `finite-lattice-projections-and-coxeter-chain-labels`
(A order 1726, B order 1727, `coxeter-groups`, label CG-02). Outputs:
`research/frontier-42-coxeter-32-batch-5.pages.json` (4 A + 3 B items), this note,
`research/frontier-42-coxeter-32-batch-5.coverage.json`,
`research/frontier-42-coxeter-32-batch-5.cross-batch-dependencies.json` (`[]`), and seven
item-readiness records `research/frontier-42-coxeter-32-step1-<id>.json`.

## Scope and design reconciliation

- **Controlling direction.** `research/frontier-42-coxeter-32-owner-authoring-direction.md`
  (binding; read first) plus the design `research/plan-coxeter-groups-track.md` §CG-02
  (lines 150–161) and the binding proof-design inputs `research/coxeter-scaffold/inventory.json`
  (CG-02) and `definition-justifications.json`. `independent-audit.md` carries no
  CG-02-specific selected route; the audit-repaired routes begin at later pairs, so nothing
  there overrides §CG-02.
- **Preserved.** The four planned local supplier contracts keep their exact ids and kinds:
  `def-cg-finite-lattice-congruence-and-interval-projections`,
  `lem-cg-lattice-quotient-descent-and-class-intervals`,
  `thm-cg-finite-lattice-interval-congruence-criterion`,
  `lem-cg-lexicographic-chain-shelling-and-mobius-cancellation`, with the design's routes
  (finite meets/joins of class members for endpoints and quotient descent; monotone-endpoint
  sandwich for the interval criterion; first-divergence/first-reunion lexicographic shelling
  and the falling-chain Möbius formula) and the design's caveats (the definition asserts no
  existence or representative-independence; finiteness is used precisely for the class
  meet/join; rank-zero, rank-one and empty-open-interval conventions included).
- **B companion (3 items, all new ids).** `ex-cg-interval-congruence-criterion-on-a-chain-and-a-diamond`,
  `cex-cg-interval-partition-with-nonmonotone-endpoints-is-not-a-congruence`,
  `ex-cg-rank-three-chain-labeling-and-order-complex-facets`, matching the three promised
  B-page tasks (criterion on a chain and a diamond; an interval partition with non-monotone
  endpoints; a rank-three chain labeling translated into order-complex facets).
- **Plan-spec comparison.** `research/plan-spec.json` agrees with the task on the pair ids,
  orders 1726/1727, category, companion and both `requires` lists (A: `order-zorn-and-the-axiom-of-choice`,
  `simplicial-subdivision-and-simplicial-approximation`, `relations-functions-and-quotients`,
  `chains-antichains-sperner-and-dilworth`, `incidence-algebras-and-mobius-inversion`;
  B: the A page). Its item arrays are empty, so no item-level plan text can conflict.
  **No design-versus-plan conflict exists**, and no plan text was changed.
- **Recorded clarifications (no conflict).** The design's page note says to import the
  order-complex and barycentric-realization definitions; the four contracts consume only
  `def-face-poset-and-order-complex` from that material, and the page-level `requires` keeps
  `simplicial-subdivision-and-simplicial-approximation` as the design specifies. No claim of
  the pair presupposes a barycentric-realization item, so none is declared. The definition's
  `justified_by` target is
  `thm-cg-finite-lattice-interval-congruence-criterion`, exactly as
  `definition-justifications.json` requires; the lemma (iii) also proves representative
  independence, but the binding target was retained.

## Dependency levels (in-run only)

Computed with the shared tool logic over this manifest only (published/out-of-run suppliers do
not raise a level); re-verified after the self-review corrections below.

| level | item |
|---|---|
| 0 | `def-cg-finite-lattice-congruence-and-interval-projections` |
| 1 | `lem-cg-lattice-quotient-descent-and-class-intervals`; `lem-cg-lexicographic-chain-shelling-and-mobius-cancellation` |
| 2 | `thm-cg-finite-lattice-interval-congruence-criterion`; `ex-cg-rank-three-chain-labeling-and-order-complex-facets` |
| 3 | `ex-cg-interval-congruence-criterion-on-a-chain-and-a-diamond`; `cex-cg-interval-partition-with-nonmonotone-endpoints-is-not-a-congruence` |

No item depends on a B-page item, on a later A item, or on a page later than 1726; the A page
is internally in prerequisite order (definition → quotient lemma / shelling lemma → criterion),
and the three B examples point only backwards at A items.

## Inventory and mathematical audit

**A page (4 items).**

1. `def-cg-finite-lattice-congruence-and-interval-projections` — lattice congruences with
   proposed quotient operations and class endpoints, plus descending rooted-chain labelings,
   label words read top-down relative to the root chain above, no-tie (N) and lex-increasing
   (L). Depends on `def-partial-order`, `def-chain`,
   `def-lattice-distributive-lattice-and-order-ideal`, `def-graded-poset-and-rank`,
   `def-poset-interval-and-finiteness-conditions`. No existence claim; the standard
   equivalence "maximal chain = saturated chain of length ρ(x,y)" is a definition-internal
   remark using only the rank function (every cover raises rank by one), so no separate lemma
   is needed. Ordinary edge labeling is the root-independent special case.
2. `lem-cg-lattice-quotient-descent-and-class-intervals` — closure of classes under finite
   meets/joins; unique endpoints; class = interval; quotient operations independent of
   representatives and a lattice; monotone endpoint maps. The finite class is listed by a
   bijection with a natural number and the binary meet/join is iterated along the listing
   (`def-finite-cardinality`, `thm-subset-of-a-finite-set`); **no choice principle is used and
   `lem-finite-choice` is deliberately not declared**.
3. `thm-cg-finite-lattice-interval-congruence-criterion` — an equivalence whose classes are
   intervals is a congruence iff the endpoint maps are order-preserving; necessity is item 2(iv),
   sufficiency sandwiches `x∨z ≤ y∨z ≤ u(x∨z)` and its dual, and arbitrary equivalent `x,y`
   reduce to comparable pairs through `x∧y`, which lies in the class interval of `x` and of `y`.
4. `lem-cg-lexicographic-chain-shelling-and-mobius-cancellation` — (i) the lexicographic order
   of maximal chains satisfies the pairwise facet criterion for a shelling of Δ([x,y]) and,
   after deleting the endpoints, of Δ((x,y)); (ii) `μ(v,w) = (−1)^{ρ(v,w)} × #(strictly
   falling maximal chains)` for every rooted interval, with the rank-0/rank-1 conventions.
   Deps: the definition, `def-graded-poset-and-rank`, `def-poset-interval-and-finiteness-conditions`,
   `def-face-poset-and-order-complex`, `def-poset-mobius-function`, `lem-poset-mobius-recurrence`,
   `def-boolean-lattice-and-levels`, `thm-mobius-function-of-a-boolean-lattice`,
   `cor-mobius-inversion-for-finite-posets`. Philip Hall's chain-sum identity is derived from
   the published recurrence by induction, not assumed.

**B page (3 items).** Direct finite checks, all re-verified during scaffolding: the three-element
chain has exactly four interval partitions (all congruences; quotients `C`, two two-element
chains, one point); the diamond has exactly eight interval partitions, exactly four with
monotone endpoints (discrete, the two 2+2 partitions, all-one), and these are exactly its four
congruences; the non-monotone `{0,a}|{b}|{1}` fails directly (`0 ≡ a`, `0∨b = b`, `a∨b = 1`,
`b ≢ 1`) and fails the criterion at `0 ≤ b` with `u(0)=a ≰ b=u(b)`; in B₃ the element-added
edge labeling is a root-independent labeling satisfying (N) and (L), the six maximal chains
have the six permutation words, the unique increasing (lex-first) word is `(1,2,3)`, the unique
strictly falling word is `(3,2,1)`, `μ(∅,[3]) = −1` agrees with the recurrence, and the
replacement for the pair `(1,3,2) ≺ (2,1,3)` is the chain with word `(1,2,3)`
(`m′∩m ⊆ k∩m`, `|k∩m| = 3 = |m|−1`).

**Dependency verification (examined, not assumed).** Every declared `deps` target was opened
and checked to say what the consumer needs: `def-partial-order`, `def-chain`,
`def-lattice-distributive-lattice-and-order-ideal`, `def-graded-poset-and-rank`,
`def-poset-interval-and-finiteness-conditions`, `def-finite-cardinality`,
`thm-subset-of-a-finite-set`, `def-face-poset-and-order-complex`,
`def-poset-mobius-function`, `lem-poset-mobius-recurrence`, `def-boolean-lattice-and-levels`,
`thm-mobius-function-of-a-boolean-lattice`, `cor-mobius-inversion-for-finite-posets` — all
published on disk with the used statements. No missing, circular, forward or inadequate
dependency was found; no dependency path reaches `deferred-set-theory-beyond-choice` through the
statements consumed, and no Recorded/unproved result is consumed. **Axiom strength (checked, not
assumed).** All seven items are choice-free: the only external finiteness input is the
finiteness of a subset of a finite set used by item 2, and the dependency-only closure of the seven items contains exactly one
AC-adjacent published item, `thm-well-ordering-principle`, reached through
`thm-subset-of-a-finite-set`. The clauses consumed here are clauses 1–2 of
`thm-subset-of-a-finite-set` (a subset of a finite set is finite, with `|B| ≤ |A|`), proved by
induction on the ambient cardinal in its Proof 6.1 with no choice; clause 4 of that item
(the surjective half, its Proof 9.1, a surjection of a finite set onto itself is a bijection)
is the only place the well-ordering of the naturals is invoked, and clause 4 is not consumed
here. The
pair therefore consumes a choice-free proof path and states no choice hypothesis; no other
declared supplier uses AC in the statements consumed (the larger input-closure of the readiness
hash additionally traverses `justified_by`/`forward_refs` pointers, which are not proof uses).

## Sources (full text fetched and stamped)

Four complete treatments back the A page — one book plus three full lecture-note sets, so the
two-independent-treatments-per-A-page rule is met — each downloaded in full, stamped and
inspected at the locators recorded in the coverage file:

1. **A. Björner and F. Brenti, _Combinatorics of Coxeter Groups_** (GTM 231), author/class-hosted
   full text `https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf`
   (fetch `sha256_16 ad1e7d9260127bb2`, 370 PDF pages). Read §2.7 "Interval structure",
   printed pp. 48–55, and Appendix A2.2–A2.4, printed pp. 300–304: the deletion labeling,
   Lemmas 2.7.2/2.7.4, the full proof of Theorem 2.7.5, Definition A2.4.1 and its shelling
   equivalence. 16 harvested results; 4 inline, 1 included, 2 already published, 1 deferred,
   8 out of scope with reasons.
2. **M. L. Wachs, _Poset topology: tools and applications_** (PCMI 2004, arXiv:math/0602226),
   `https://arxiv.org/pdf/math/0602226` (fetch `sha256_16 c23fb90ff3cb3973`, 118 PDF pages).
   Read Lecture 3 §§3.1–3.4, printed pp. 41–66: Definition 3.2.1 (EL), Theorem 3.2.2,
   Remark 3.2.5, Definition 3.3.1 (CL, rooted intervals, unique increasing lex-first chain),
   the §3.4 descent set of a maximal chain. 10 harvested results; 5 inline, 1 deferred,
   4 out of scope with reasons.
3. **R. P. Stanley, _An Introduction to Hyperplane Arrangements_** (PCMI, 26 Feb 2006 version),
   `https://www.cis.upenn.edu/~cis6100/sp06stanley.pdf` (fetch `sha256_16 d3cc5d2586e773d1`,
   114 PDF pages). Read Lecture 1 §1.2 and Lecture 4 §4.1, printed pp. 41–45, including
   Definition 4.10, Lemma 4.4 (Philip Hall), Definition 4.11 and the **complete proof of
   Theorem 4.11** with its flag f-vector Claim (27) and the inclusion–exclusion evaluation
   (28)–(29). 7 harvested results; 2 inline, 1 included, 1 already published, 3 out of scope
   with reasons.
4. **N. Reading, _Lattice congruences of the weak order: algebra, combinatorics, and geometry_**
   (Triangle Lectures in Combinatorics 2019), author-hosted slides
   `https://nreadin.math.ncsu.edu/papers/TLC.pdf` (fetch `sha256_16 6edf3d06363ab085`,
   150 PDF pages). Read the "lattice congruences for combinatorialists" part, slides 2–9:
   the order-theoretic characterization, the quotient construction
   `[x]∨[y]=[x∨y]`, `[x]∧[y]=[x∧y]`, and the take-home fibre test. 4 harvested results;
   2 included, 1 inline, 1 deferred (least-elements lattice, destination
   `sortable-projections-and-finite-cambrian-lattices`).

Deferred destinations are planned page ids (`bruhat-interval-labels-shellings-and-mobius-functions`
for the Bruhat-specific corollaries; `sortable-projections-and-finite-cambrian-lattices` for the
least-elements lattice); every other harvested result is out of scope with a specific reason
(homotopy type/CW/PL, Cohen–Macaulayness, k-crowns, matroid broken circuits, rank-selection
homotopy, restriction/h-vector theory) in the coverage file. The one coverage warning is
`coverage-low-yield` (4 of 37 harvested results scaffolded; the tool counts the four results marked
`included`, one per A item, while 12 further results are used `inline` and 3 more are already
published suppliers consumed by the same items): this pair
keeps exactly the four design contracts plus three new companion examples, and the declines are
the historical results of the same sections that the design explicitly excludes.

**Source recovery.** An initial guess at a Reading deck URL returned a non-PDF author-site
response; the author-hosted `https://nreadin.math.ncsu.edu/papers/TLC.pdf` was located, fetched
in full and read at the locator above within the first retry, so no source was dropped and no
`source_resolution` row is needed. All four sources carry `fetch_verified` stamps with sizes and
hashes in the coverage file; snippet/preview evidence was not used.

## Checks run (actual results)

| check | command (prefix `node`) | result |
|---|---|---|
| manifest dependency fields (batch) | `tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-5.pages.json` | `7 item(s), 0 normalized, 0 error(s)`, exit 0 |
| scaffold policy (batch) | `tools/content-policy.mjs --manifest-only research/frontier-42-coxeter-32-batch-5.pages.json` | `7 scoped item(s), 0 error(s), 0 warning(s)`, exit 0 |
| whole-run manifests | `tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-*.pages.json` | `30 item(s), 0 normalized, 0 error(s)`, exit 0 |
| whole-run policy | `tools/content-policy.mjs --manifest-only research/frontier-42-coxeter-32-batch-*.pages.json` | `30 scoped item(s), 0 error(s), 0 warning(s)`, exit 0 |
| coverage | `tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-5.coverage.json --require-destination` | `1 page(s), 37 harvested result(s), 0 error(s), 1 warning(s)`, exit 0; warning is the low-yield note above |
| full-text fetch | `tools/source-fetch-check.mjs --coverage research/frontier-42-coxeter-32-batch-5.coverage.json` | `4/4 source(s) fetch-verified`; `4/4 source(s) resolved (0 documented drops)`, exit 0 |
| URL liveness | `tools/url-sweep.mjs --coverage ...batch-5.coverage.json --out /tmp/batch5-url-liveness.json --recover --fail-on-dead` | `4/4 live; 0 failed`, exit 0 (output in `/tmp`, no shared artifact touched) |
| source backing | `tools/source-backing.mjs --coverage ...batch-5.coverage.json --liveness /tmp/batch5-url-liveness.json --reharvest-plan /tmp/batch5-reharvest.json` | `3 authored result(s) across 1 file(s), every one still backed`, exit 0 |
| plan | `tools/frontier-item-gate.mjs --run frontier-42-coxeter-32 --tool validate-plan` | exit 0: declared page order acyclic and consistent (the 64 planned pages carry no item lists in `plan-spec.json`; item-level plan validation re-runs after authoring) |
| dependency levels (batch-local) | shared `dependencyLevels` logic over this manifest | 0 errors; levels as tabled above |
| dependency levels (whole run) | `tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | exit 1 with 58 errors, **all** `empty scaffold inventory` for the 29 sibling pairs not yet scaffolded; no label/dependency/cycle error mentions this batch |
| readiness (whole run) | `tools/step1-decisions.mjs check --run frontier-42-coxeter-32` | exit 1, `items 30, ready 30`, 58 page-level `Empty scaffold inventory` entries and **no item-level work entry**; all seven batch-5 records are current for the manifest bytes on disk |
| dependency ledger | `tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` | exit 0; the batch-5 cross-batch input is `[]`, so no cross-batch edge was added or reviewed |
| external-reference probe | `tools/frontier-item-gate.mjs --run frontier-42-coxeter-32 --tool extcheck --quiet` | exploratory check (not a separate batch gate): `focus-item-unknown` for scaffolded-but-unwritten ids (see below) |
| forward-reference probe | `tools/frontier-item-gate.mjs --run frontier-42-coxeter-32 --tool fwdcheck --quiet` | exploratory check (not part of `1-scaffold`); same `focus-item-unknown` on absent files |

### Owner-reviewed gate finding and disposition (engine scope, not a scaffold defect)

The included `extcheck` gate was a confirmed pre-author blocker: its selector correctly
contained manifest IDs, but the corresponding item files are not created until `3b-author`.
`fwdcheck` was separately probed but is not in the `1-scaffold` gate battery. Exact
evidence for the included check:

```
$ node tools/frontier-item-gate.mjs --run frontier-42-coxeter-32 --tool extcheck --quiet
frontier-item-gate: extcheck; 30 item(s), 64 frontier page(s)
30 ERROR(s): [focus-item-unknown] --items-file names unknown item "<id>"  (all scaffolded ids)
FAIL
```

The manifest-only `content-policy-scaffold` gate checks the retired external-record fields
available from the planned entries. The orchestrator removed only `extcheck` from
`1-scaffold`; the normal authored-item `extcheck` remains after `3b-author` creates the
carriers. The controller accepted this stage-table reload at 2026-10-06T17:35:42.807Z,
without a stage-order change. `depsource` failures against planning-shell siblings were
another exploratory observation and not a failing gate of this batch or of `1-scaffold`.

## Self-review corrections before hand-off

A final read of the strategies found four defects, all corrected in the manifest before the
readiness records were refreshed (the recorder refuses to overwrite a current record, so each
affected item was re-recorded with its unchanged examined-dependency list):

1. The definition's rooted-interval sentence had garbled indices and a reversed cover
   (`λ(c+w_0≲…≲w_{i−2}; w_{i−1}≲w_{i−2})`); it now states that the `i`-th entry is the label
   of the `i`-th step counted from the top, the cover `w_{k−i} ≲ w_{k−i+1}`, paired with
   `c + w_{k−1} ≳ ⋯ ≳ w_{k−i+1}` (empty for `i=1`).
2. The criterion's reduction of arbitrary equivalent `x,y` to comparable pairs read as if it
   applied the meet-property being proved (`x∧y ≡ x∧x`); it now uses only the interval
   hypothesis, `d(x)=d(y) ≤ x∧y ≤ x ≤ u(x)=u(y)`, and combines the comparable cases by
   transitivity.
3. The shelling replacement's root chain was described as "the part of `m` above `m_{e−1}`
   with the step `m_{e−1} ≳ m_e` adjoined"; the step does not belong to the root chain, which
   must end at the rooted interval's top `m_{e−1}`. Corrected.
4. The flag f-vector claim was stated with the wrong orientation: it claimed
   `α(S) = #{m : D(m) ⊆ S}`, but the refinement/filtration bijection gives
   `α(S) = f(k−S)` (equivalently `f(T) = α(k−T)`), which is Stanley Lecture 4 Claim (27)
   dualized to the descending convention. Since only the self-complementary full set
   `{1,…,k−1}` is used, the final Möbius formula was already correct, but the intermediate
   claim as written was false for general `S`; the claim, the inverse-construction sentence,
   the Möbius-inversion step and the chain notation in the evaluation (strict `>` for chains
   that need not be saturated) were corrected accordingly.

All seven batch-5 readiness records were re-recorded after the edits; `step1-decisions check`
reports `30/30` items ready with no work entry for this batch.

## Published-defect scan

The published suppliers consumed by this pair were read for adequacy:
`def-partial-order`, `def-chain`, `def-lattice-distributive-lattice-and-order-ideal`,
`def-graded-poset-and-rank`, `def-poset-interval-and-finiteness-conditions`,
`def-finite-cardinality`, `thm-subset-of-a-finite-set`, `def-face-poset-and-order-complex`,
`def-poset-mobius-function`, `lem-poset-mobius-recurrence`, `def-boolean-lattice-and-levels`,
`thm-mobius-function-of-a-boolean-lattice`, `cor-mobius-inversion-for-finite-posets`. **No
published defect was found** and nothing is routed to the canonical defect ledger: each says
what the consumers use, at the needed generality and with the needed hypotheses. No cross-batch
change or new prerequisite pair is needed — all in-run suppliers for this pair are on this pair,
so the owned cross-batch input is `[]` and there is no escalation for placement.

## Completion

- All seven items recorded `ready` with their examined direct dependency ids as evidence;
  `dependency_level` labels recomputed after the corrections (0,1,2,1 A; 3,3,2 B).
- The pair is mathematically scaffolded (proof contracts and strategies with full local closure
  over published suppliers) but **not proved**: the seven items are contracts for Step-3
  authoring, and owner/operator reconciliation and the engine gate follow construction.
- No published content, shared plan, engine state or verdict was edited. Written files: the
  batch-5 manifest, this note, the batch-5 coverage, the batch-5 cross-batch input (`[]`) and
  the seven readiness records.
- Remaining whole-run blockers are the 58 empty sibling page inventories (29 pairs still to be
  scaffolded); neither is a defect of this batch. The premature Step-1 `extcheck` gate was
  removed after owner review, and item-scoped `extcheck` remains at Step 3b.
