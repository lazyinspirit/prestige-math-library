# Step 3a scope review — countability-and-uncountability

- Run: `frontier-44-special-representation-examples-28` (batch 2), role alpha,
  label `step3a-pair-countability-and-uncountability-73606c9ad63c8543`.
- A page: `countability-and-uncountability` (order 17, `real-analysis`, 22
  items: 21 registered items plus `fs-uncountable-contains-interval` in
  `examples:`).
- B page: `countability-and-uncountability-examples` (order 18, 12 planned
  items: 11 examples/counterexamples plus one B-local lemma). Companion pointer
  A -> B is present; the B page omits the reverse pointer, which the loader
  permits.
- Decision: **sufficient** for both pages of the pair, recorded with
  `tools/step3-decisions.mjs record-scope` (non-owner review) at the current
  pair content hash. Receipt:
  `research/frontier-44-special-representation-examples-28-step3a-review-countability-and-uncountability.json`.
  Scope only: this is not item or proof approval, and it edits no scaffold,
  item, plan row or owner record.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-44-special-representation-examples-28-batch-2.pages.json` | Current pair manifest: all 34 items (A 22, B 12) with id, kind, title, statement, strategy, `deps`, provenance, per-item sources and computed dependency levels; page `requires`. I checked the A item order against the published page's `items:` + `examples:` lists — exact match (21 + 1). |
| `research/frontier-44-special-representation-examples-28-batch-2.coverage.json` | Two page entries, six source records (the two primary PDFs plus two extended-locator records for the four added B items), 54 harvested rows with dispositions and reasons; fetch stamps for both primary carriers. |
| `research/frontier-44-special-representation-examples-28-batch-2.notes.md` and its owner addenda | Step-1 scaffold record plus the binding owner corrections: F1–F3 repair (restored the three published page-homed items to plan and manifest), the RA-03 B coverage correction (added the four B records), and the stable readiness r2 (34/34 current). |
| `research/plan-realanalysis-pages.md` RA-03 (lines 112–118) | Controlling prose design: equinumerosity, finite/countable/uncountable, countable unions and subsets, Z and Q countable, Cantor's diagonal argument, R uncountable, every interval uncountable, irrationals uncountable and dense, power-set theorem, Schröder–Bernstein; B: explicit Q enumeration, the diagonal construction, algebraic numbers countable. |
| `research/plan-spec.json` rows 17/18, 181, 200, 348/349 | Page identity/order/kind/category/companion/`requires`; the A page's canonical 22-item list; consumer rows `sequences-and-limits`, `topology-of-r`, the ordinals pair. B page canonical inventory is still the historical empty placeholder (splice-stage materialisation). |
| `research/frontier-44-special-representation-examples-28-batch-2.cross-batch-dependencies.json` and the derived run ledger | The pair's only declared outgoing edge is the verified page edge B -> `roots-and-rational-powers`; incoming consumer rows are owned by batches 3 and 4. I re-derived consumer edges from all batch manifests (see Role below). |
| Published carriers: `library/real-analysis/countability-and-uncountability.md`; `library/real-analysis/topology-of-r.md`; `library/real-analysis/{suprema-and-infima,roots-and-rational-powers}.md`; `library/foundations/order-zorn-and-the-axiom-of-choice.md`; items `thm-n-cross-n-countable`, `thm-rationals-countable`, `cor-irrationals-uncountable`, `lem-q-and-irrationals-dense-r`, `def-finite-sum`, `lem-finite-sum-laws`, `def-integer-power` | Published page inventory/status; prerequisite pages; the exact published interfaces the pair consumes (`def-finite-sum`, `lem-finite-sum-laws`, `def-integer-power`) and the exhibited pairing `J(m,n) = 2^m(2n+1)` used by the B enumeration items. |
| Re-fetched carriers `/tmp/s3a-hunter.pdf` (2 628 085 bytes, sha256_16 `0f660721c17cd5d9`, 307 pp.) and `/tmp/s3a-lebl.pdf` (1 901 622 bytes, sha256_16 `9c204ae1f1ee1641`, 312 pp.) | Byte/size match to the coverage fetch stamps; complete relevant passages read (below). |

## Inventory against the prose design

Every RA-03 clause is realised, in most cases by preserved published A items and
for the three promised B themes by the four owner-added B records:

- **Equinumerosity, finite/countable/uncountable** — `def-equinumerous`,
  `def-countable` (with the F1-restored `lem-nat-order-is-membership` and
  `lem-pigeonhole` as their on-page preliminaries).
- **Countable unions and subsets** — `thm-countable-union-of-countable` (with
  the Axiom of Countable Choice as an explicit hypothesis and the exact spent
  step flagged) and `lem-subset-of-countable`.
- **Z and Q countable** — `thm-rationals-countable` (choice-free; its Statement
  also records that the same device handles Z) and the B example
  `ex-integers-are-countably-infinite`.
- **Cantor's diagonal argument** — `thm-cantor-powerset` on power sets, with the
  literal missed-sequence construction added as
  `ex-cantor-diagonal-misses-every-listed-binary-sequence`; the A page's choice
  of Cantor's 1874 nested-interval proof for R (not decimals) is the documented,
  load-bearing boundary of the published page.
- **R uncountable; every interval uncountable** — `thm-r-uncountable`,
  `cor-interval-uncountable` (F1-restored).
- **Irrationals uncountable and dense** — uncountable on this pair
  (`cor-irrationals-uncountable`); dense downstream on the published
  `topology-of-r` (order 200), whose plan row requires this A page and whose
  item `lem-q-and-irrationals-dense-r` consumes `cor-interval-uncountable`,
  `lem-subset-of-countable`, `def-countable`, `thm-rationals-countable`. The
  design line is therefore split across the pair and its named consumer, with a
  backward dependency — not an omission.
- **Schröder–Bernstein** — `thm-schroder-bernstein` (choice-free); used by the B
  integers, power-set and algebraic-number examples.
- **B promises: explicit enumeration of Q, diagonal construction, algebraic
  numbers countable** — `ex-explicit-enumeration-of-the-rationals` (a fully
  specified total surjection N -> Q from the published pairing, then least-new-
  index deletion; no gcd or unresolved enumeration),
  `ex-cantor-diagonal-misses-every-listed-binary-sequence`, and
  `ex-real-algebraic-numbers-are-countably-infinite` (real algebraicity defined
  by finite nonzero integer coefficient lists, injection by least witness code
  plus increasing root rank, choice-free), with the B-local finite root bound
  `lem-finite-real-coefficient-lists-have-at-most-degree-many-roots` supplying
  exactly that step. The algebraic-number convention is explicitly the REAL
  one, with no claim about complex algebraic closures — correct for this
  real-analysis page and consistent with the sources.

The remaining B records (deleting a point, power set of N uncountable, binary
sequences uncountable, rationals in an interval, complement of a countable set,
the two boundary counterexamples on the onto criterion) are examples and
counterexamples of the companion A page's concepts and boundary cases, as the
owner direction for the four example companions requests. No A -> B edge
exists, the three B-internal dependencies are strictly backward in page order,
and no other batch or page in this run consumes any B item (checked across all
50 run manifests).

## Source coverage assessment

Focused checks (fresh, on the current files):

- `coverage-checklist --require-destination`: 2 pages, 54 harvested results,
  0 errors, 1 warning (`coverage-low-yield` 6/30 on the A entry —
  "confirm the declines with Alpha"). I inspected every declined row: the two
  `inline` rows (Hunter Example 1.43; Lebl Example 0.3.30) are subsumed by
  `ex-deleting-a-point-from-a-countably-infinite-set` and the Prop 1.44
  boundary counterexample; the three `out-of-scope` rows (Lebl Exercise 0.3.25,
  the general Dedekind-infinite argument; Hunter/Lebl Exercise 1.5.5,
  `R ~ P(N)` via binary expansions) require machinery deliberately beyond this
  order and remove no promised clause. The advisory is expected for a preserved
  published A page; no scope action follows.
- `source-fetch-check`: 6/6 sources fetch-verified and 6/6 resolved.
- I re-downloaded both primary carriers and matched the stamped size and
  sha256_16, then read the load-bearing passages at the promised locators:
  Hunter §1.6 Definition 1.41, Proposition 1.44 (nonempty hypothesis explicit),
  Proposition 1.45, Theorem 1.46, Theorem 1.47, Corollary 1.48 with the binary
  diagonal paragraph, Hypothesis 1.49; §2.3 Theorem 2.5; §2.6 Theorem 2.19
  (Cantor 1874); §2.8 Lemma 2.30 / Theorem 2.31 with the closing remark that
  the irrationals are dense; §4.6 (printed pp. 89–90) Cantor's countable
  polynomial/root observation for algebraic numbers. Lebl §0.3 Definitions
  0.3.28/0.3.29, Example 0.3.30, Examples 0.3.31/0.3.32, Definition 0.3.33,
  Theorem 0.3.34; §1.2 Theorem 1.2.4; §1.4 Theorem 1.4.2 and Exercise 1.4.9
  (both parts and the polynomial-root hint); §1.5 Theorem 1.5.2 and Exercise
  1.5.5. Every row I checked matches its claimed content and locator.

Two non-blocking coverage notes for the item author: (i) the two B items
`ex-integers-are-countably-infinite` and
`cex-the-empty-set-is-not-a-surjective-image-of-n` carry exact per-item source
locators in the manifest but no destination row in the coverage file; their
claims are the standard Z countability and the explicit nonemptiness boundary
of Hunter's Proposition 1.44, so this is bookkeeping, not a source gap. (ii) The
`ex-integers-are-countably-infinite` locator describes Hunter's Theorem 2.5
proof as deriving Z's countability; Hunter's text presupposes it ("they contain
the countably infinite set of integers") and instead displays Q as a countable
union of countable row sets. The standard local route (`Z` as a surjective
image of `N x N`, via `thm-n-cross-n-countable` / `thm-product-of-countable`) is
available on the page, so the claim stands; the locator wording should be
tightened in authoring.

## Role in the library

- Prerequisite pages are published with nonempty inventories and earlier orders:
  `suprema-and-infima` (order 13), `order-zorn-and-the-axiom-of-choice` (9),
  `roots-and-rational-powers` (15; supplies `def-finite-sum`,
  `lem-finite-sum-laws`, `def-integer-power`, all `status: published`).
- Declared consumers whose targets exist among the 22 A items (fresh scan of all
  run manifests): `sequences-and-limits` (order 181) via `rem-sequence-conventions`
  (`def-countable`, `lem-subset-of-countable`, `lem-pigeonhole`); the ordinals
  pair (348/349) via `def-cardinal` -> `lem-nat-order-is-membership`,
  `lem-pigeonhole`, `rem-choice-ledger` -> `def-countable-choice`,
  `def-dependent-choice`, the Hartogs examples -> `thm-schroder-bernstein`,
  `def-equinumerous`, `lem-subset-of-countable`, `def-countable`, and
  `cex-transfinite-induction-fails-when-the-minimum-is-exempted` /
  `ex-the-one-point-extension-of-a-well-order` -> `lem-nat-order-is-membership`,
  `def-equinumerous`; batches 30, 31, 35, 37, 39, 40, 42 and 46 consume
  `thm-choice-implies-dependent-implies-countable-choice` as their AC source.
  All consumed ids are present and published; the B page supplies nothing
  outside itself.
- Dependency audit: 106 distinct declared dependency ids across the pair; 103
  resolve to `status: published` item files, the remaining three
  (`ex-power-set-of-the-naturals-is-uncountable`,
  `ex-explicit-enumeration-of-the-rationals`,
  `lem-finite-real-coefficient-lists-have-at-most-degree-many-roots`) are
  same-B-page scaffold suppliers at earlier B positions. Every `[[...]]` link
  in the statements and strategies resolves to a published item or an in-run
  manifest item (0 unresolved). `manifest-deps` 34 items/0 errors;
  `content-policy --manifest-only` 34/0 errors/0 warnings; `validate-plan` on
  the pair passes at page level and reports no item-level cycles, forward
  references, B-page dependencies or unresolved ids for the A page (the B page's
  item-level validation is owed after the ordinary canonical splice, since the
  plan still carries the empty B placeholder).

## Unmet prerequisites

**None confirmed.** Every prerequisite the 34 planned items declare is present
either as a published item (103 distinct ids) or as an earlier same-B-page
scaffold item (3 ids); every named supplier in the statements/strategies
resolves; the two external require-edges (B -> `roots-and-rational-powers`; the
pair's own B -> A edge) point to published or in-pair material; and the
consumers' exact targets (`def-countable`, `lem-subset-of-countable`,
`lem-pigeonhole`, `def-equinumerous`, `thm-schroder-bernstein`,
`lem-nat-order-is-membership`, `def-countable-choice`, `def-dependent-choice`,
`thm-choice-implies-dependent-implies-countable-choice`) all exist on the A
page. The one source-level prerequisite the owner records as added for this
pair — the finite real-coefficient root bound consumed by the algebraic-number
example — is itself scaffolded on the B page with its own suppliers
(`def-finite-sum`, `lem-finite-sum-laws`, `def-integer-power`, field and
induction items), so no absent prerequisite remains. Uncertainty: proof-level
prerequisites that surface only while authoring (Step 3b) cannot be excluded
here; I verified availability, not sufficiency of every proof step.

## Non-blocking observations for the item author

1. The published A page frontmatter title is "Countability and Uncountability"
   while the canonical plan/manifest title is "Countability and the
   Uncountability of R". Identity fields (id, order, kind, category, companion)
   agree; the published file is frozen, so this is a naming consistency
   question for the B page file only.
2. The `ex-explicit-enumeration-of-the-rationals` statement writes the pairing
   as `J(a,b) = 2^a(2b+1) - 1`; the published `thm-n-cross-n-countable`
   exhibits `J(m,n) = 2^m(2n+1)` as a bijection onto `N \ {0}` with the
   successor inverse giving `N x N -> N`. Authoring should cite the composition
   explicitly; the interface exists.
3. The coverage low-yield advisory on the A entry is explained by the preserved
   published inventory; no row needs re-disposition.
4. The four RA-03 B additions and the two restored A preliminaries are
   owner-recorded corrections of the current design; the pair contains no
   unreviewed scope expansion. The Do-NOT clause of the owner direction — B
   pages must not host load-bearing suppliers for other pages — holds: the one
   lemma on B has a single consumer, the same-B algebraic-number example.

## Uncertainty statement

I verified page identity, inventory, design coverage, source locators and
content at the stamped bytes, dependency availability, the B-leaf shape,
consumer interfaces, and the owner repair/readiness records. I did not re-derive
the 34 proof strategies and claim no proof acceptance; that is Step 3b/Step 5
work. My source reading covers the passages named above in full, but not every
page of the two books. The only open items are the non-blocking observations
above; none removes a definition, result or example from the intended subject.

## Decision

**sufficient** for both pages of the pair. The A page's 22 preserved published
items and the B page's 12 scaffolded examples and counterexamples realise every
RA-03 clause (with density of the irrationals deliberately carried by the
downstream `topology-of-r` page that requires this pair); both primary sources
were re-fetched hash-identical and read at the promised locators; all 106
declared dependencies and all named suppliers resolve; and the pair's consumers
(`sequences-and-limits`, the ordinals pair, the choice-consuming batches and the
published `topology-of-r`) find their targets present. No enrichment or merger
is needed, and Step 3b may author the 12 B items against this scope.
