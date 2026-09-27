# Step 3a scope review — algebraic-differentials-separability-and-smooth-local-presentations

- Run: `frontier-35-ten-categories` (batch 3), role alpha, label
  `step3a-pair-algebraic-differentials-separability-and-smooth-local-presentations-4a1249ea2f8e6541`.
- A page: `algebraic-differentials-separability-and-smooth-local-presentations`
  (order 366.0581, category `algebraic-geometry`, 24 planned items).
- B page: `algebraic-differentials-separability-and-smooth-local-presentations-examples`
  (order 366.0582, 7 planned items), companion pointer A↔B consistent.
- Decision: **sufficient**, recorded with `tools/step3-decisions.mjs
  record-scope` (non-owner review) at the current pair content hash. Receipt:
  `research/frontier-35-ten-categories-step3a-review-algebraic-differentials-separability-and-smooth-local-presentations.json`;
  re-verify with `node tools/step3-decisions.mjs check --run frontier-35-ten-categories --phase scope`.
- Scope only: this review decides whether the planned definitions, results and
  examples cover the intended subject. It is not item or proof approval, and it
  edits no scaffold, item, plan row or owner record.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-35-ten-categories-batch-3.pages.json` | Current A inventory (24 items) and B inventory (7 items) with every statement, strategy, `deps`, provenance and source locator; page `requires`; companion pairing |
| `research/frontier-35-ten-categories-batch-3.coverage.json` | Two source records (Stacks *Commutative Algebra* July-2026 edition; Vakil 29-Aug-2022 author draft) with locators, row dispositions, item destinations and fetch stamps |
| `research/frontier-35-ten-categories-batch-3.notes.md` | Step-1 construction record: design/plan conflicts (AV-5 B-page vs A-page edge; 366.065; AV-6 seam), the three local additions, dependency audit, gate results |
| `research/frontier-35-ten-categories-batch-3.cross-batch-dependencies.json` (`[]`) and `research/frontier-35-ten-categories-cross-batch-dependencies.json` | Four verified edges, all consumer batch 6 (Kähler pair): one page edge plus three item edges; no consumer edge into batch 3 |
| `research/frontier-35-ten-categories-alpha-step1-drift.md` (AV-5a entry) and `…-drift-evidence.json` | Drift verdict `no-drift`; 194-page prerequisite closure; canonical A-page edge retained over the design's B-page edge |
| `research/plan-algebraic-geometry-track.md` §AV-5a (lines 412–510) | Controlling prose design: role, boundary, source locators, proof boundary, A inventory (21 items), B inventory (7 leaves), consumer seam |
| `research/plan-spec.json` rows 366.0581/366.0582 (plus consumer rows 366.059, 366.065, 366.071, 366.073) | Page identity/order/kind/category/companion/`requires`; empty item lists, so the manifest controls item order; consumer rows |
| `research/frontier-35-ten-categories-owner-authoring-direction.md`, `…-deferred-pairs.json`, `…-deferred-items.json`, `…-scope-ledger.json` | Binding owner direction affects batch 8 and one batch-13 item only; both pages of this pair remain owed by batch 3 |
| `research/frontier-35-ten-categories-batch-6.pages.json` | In-run consumer (Kähler pair): exact consuming items and uses of three A-page items |
| Published pages in `library/`: `algebraic-geometry/dimension-constructible-images-and-dimensions-of-fibres{,-examples}`, `commutative-algebra/{regular-local-rings-and-homological-dimension,flatness-and-faithful-flatness,noetherian-rings-and-hilbert-basis}`, `homological-algebra/tor-flatness-and-global-dimension`, `abstract-algebra/algebraic-closure-embeddings-and-separability` | Prerequisite and supplier pages: `status: published`, nonempty inventories (AV-5 A page 46 items, AV-5 B page 10 examples) |
| Fetch-stamped extracts `/tmp/frontier35-b3-stacks-algebra.{pdf,txt}` (sha256 prefix `b035a1f02104906a`, 469 pp.) and `/tmp/frontier35-b3-vakil.{pdf,txt}` (prefix `989b0d912cf31206`) | Locator re-verification at the exact bytes the coverage file stamped |
| `research/published-consumer-supplier-ledger.md` | Current dispositions of the pair's load-bearing published suppliers |

## Inventory against the prose design

All 21 designed A items are present, in design order, with the design kinds; all
7 designed B items are present in design order. No designed item was dropped,
renamed or re-kinded, and no extra claim was added. The plan-spec rows agree
with the manifest on id, title, order, kind, category, companion and `requires`,
and carry no competing item order.

- The three inventory additions are local prerequisites of designed claims,
  placed immediately before their consumers (manifest positions 11, 16, 17):
  `def-ag-geometrically-regular-algebra-and-fibre` (designed items use
  "geometrically regular" for algebras and for fibre points; the design only
  cites the notion), `lem-ag-flat-local-regularity-ascent-descent` (regularity
  ascent/descent used by `lem-ag-geometric-regularity-field-tests`), and
  `lem-ag-finite-field-extension-separable-factorization` (the finite
  purely-inseparable/separable factorization of Stacks 04KM used by the same
  field-test lemma). Each is a well-definedness or proof prerequisite of a
  designed claim, not a scope expansion.
- Boundary clauses are preserved: transitivity and conormal sequences are
  asserted right-exact only, with the non-injective left map illustrated by
  `k → k[x] → k`; the local flatness criterion is the finite-**S**-module form
  with "M need not be finite over R" (the design's explicit warning; Stacks
  00MP is not used as a substitute); localization/tensor base change is
  separated from arbitrary algebra-map functoriality;
  `lem-ag-geometrically-regular-fibres-local-presentation` states the converse
  (flat plus geometrically regular fibre yields a local standard smooth chart)
  rather than the easy direction only; `def-ag-standard-smooth-algebra` includes
  `c = 0` and the localized-presentation form; geometric regularity is kept
  distinct from ordinary regularity and from smoothness.
- Choice discipline at scope level: 13 A items declare `def-axiom-of-choice`
  where the strategy names a concrete use (maximal ideals and gluing,
  transcendence bases, Krull-intersection/Koszul suppliers, resolution choices);
  `thm-ag-standard-smooth-base-change-composition` states that no AC is used;
  no B item declares AC. Proof-level AC justification remains Step 3b/5 work.
- B page shape: every B dependency is an A item or a published item; there are
  no A→B edges, no B→B edges and no unresolved dependency; all seven B ids occur
  only in this batch's manifest, so B supplies nothing outside itself (checked
  across all 17 batch manifests). Examples and counterexamples are carried as
  `items` entries with kinds `example`/`counterexample`, the same convention as
  batches 5 and 6.

## Source coverage assessment

`coverage-checklist --require-destination` on the owned coverage file reports
1 page, 61 harvested rows, 0 errors, 0 warnings; `source-fetch-check` reports
2/2 sources fetch-verified and resolved. I re-read the load-bearing results in
the stamped texts:

- Stacks, *Commutative Algebra* (July 2026 PDF): Lemma 10.99.6 (00MJ) and
  10.99.7 (00MK), the local criterion for flatness, whose proof runs through
  finite-length Tor propagation, the `I`, `m^n`, `I+m^n` comparison, Artin–Rees
  and the finite-`S`-module `I⊗_R M` Krull-intersection step — exactly the
  design's required route; Definition 10.137.5 (00T6) and Lemma 10.137.6 (00T7)
  standard smooth presentations; Lemma 10.137.9 (00TA) local standard charts for
  smooth maps; 10.137.15 (00TE) the minor test; 10.137.16 (00TF) finite
  presentation plus flatness plus smooth fibre yields smoothness at a point;
  10.140.1–10.140.5 (00TR–00TV) cotangent comparison, Jacobian and regularity
  criteria, injectivity of `m/m² → Ω⊗κ` for separable residue, and
  smooth ⇔ regular with separable residue; 10.42.4 (04KM) finite purely
  inseparable factorization; 10.44.1 (0H71) the separating-basis exchange step
  and 10.44.2 (030W) p-power independence; 10.45.2–10.45.3 (030Z, 030R) perfect
  fields and the finite inseparable/separable diagram; 10.110.9 (00OF)
  regularity descent for flat local maps, 10.163.10 (07NF) regularity ascent
  along smooth maps, 10.164.4 (07NG) faithfully flat regularity descent;
  10.166.1–10.166.4 (0381, 0382, 07NH, 07QF) geometric regularity: equivalence of
  the all-finitely-generated-extension and finite-purely-inseparable tests, the
  definition, faithfully flat descent, and stability under smooth base change.
- Vakil, *The Rising Sea* (29 Aug 2022 draft): §22.2.3 "Key fact", §22.2.17
  universal property, §22.2.M separably generated field differentials, §25.6.2
  Theorem (local criterion for flatness, finitely generated A-module) with the
  §25.6.3 proof using Artin–Rees twice, §26.2.4 the proof of the smoothness
  equivalence, §26.2.F the submersion exercise — all found at the recorded
  printed pages.
- Two locator observations, both non-blocking. First, the design's Vakil
  locator "Chs. 23 and 25, pp. 473–566" does not match the accessible 2022
  author draft; the batch used the verified §22.2/§22.3/§25.6/§26.2 locators
  instead, already recorded in the batch notes. Second, the design names
  *More on Algebra* §15.42 (tag 07BY, "Regular ring maps") among the
  authoritative checks. I confirmed 07BY defines a regular ring map as flat
  with geometrically regular fibres, which is the exact content of the
  scaffolded `thm-ag-standard-smooth-geometric-regularity`; no 07BY row is
  harvested, but the underlying rows are 10.166.1–3 and 10.137.16. This is a
  locator-granularity note for the owner, not a coverage gap.

## Role in the library

- Prerequisites: the five declared `requires` pages are all published with
  nonempty inventories. The design's AV-5 B-page edge is the only difference
  from the plan; the drift review retained the canonical A-page edge (both pages
  are published), so the prerequisite is materially available.
- Declared dependencies: 65 distinct ids across the pair — 20 are the pair's own
  items, 45 are published items; none is missing, none is a B page, none is a
  Recorded/catalogue item, and no dependency points forward in page order.
  `validate-plan.mjs research/plan-spec.json` passes (acyclic order, no item
  cycles, forward references, B-page dependencies or unresolved ids among the
  1,188 item-bearing pages); `manifest-deps` on the batch manifest reports
  31 items, 0 errors.
- In-run consumers: the batch-6 Kähler pair
  `kahler-differentials-conormal-sequences-and-infinitesimal-lifting` requires
  this A page, with four verified cross-batch edges:
  `thm-kahler-differentials-existence-presentation ← def-ag-universal-algebraic-differentials`,
  `lem-etale-residue-extensions-finite-separable ← lem-ag-separable-residue-cotangent-sequence`,
  `def-smooth-relative-dimension-via-differentials ← def-ag-standard-smooth-algebra`,
  plus the page edge. The consumed clauses (existence and generators of Ω, the
  separable-residue cotangent comparison at a closed point, and the
  standard-smooth local presentation with relative dimension) are exactly what
  the three supplier statements provide; the scheme-level conormal and lifting
  material is deliberately the Kähler page's own scope.
- Planned consumers: 366.059 AV-6
  `zariski-tangent-spaces-regular-points-smoothness-and-bertini` requires this A
  page directly, so the design's "B page or an equivalent explicit backward
  path" seam is real in the current plan (the design text names the B page, but
  B is a leaf and cannot be a proof supplier); 366.071 requires the pair and the
  published `fibre-products-base-change-and-scheme-theoretic-fibres`; 366.073
  reaches the pair through 366.071. The deferred batch-8 pair
  `smooth-projective-serre-duality-and-flag-variety-line-bundles` reaches this
  pair transitively through 366.071, so its owner-ratified deferral does not
  affect this scope.
- Observed design/plan/state mismatch (owner information, already in the Step-1
  batch note): the design says the later fibre-products/base-change page
  (366.065) "must reuse this earlier pair", but
  `fibre-products-base-change-and-scheme-theoretic-fibres` is already published
  and its `requires` do not name this pair. Published content is read-only, so
  that aspiration cannot bind; nothing in this pair depends on it. The A page's
  `thm-ag-field-extension-of-schemes` is the local field-extension base change
  the page needs, and it partially overlaps that published page's base-change
  material: overlap by design, not a duplication of scope.
- No published page currently requires this A page, and the pair is not named in
  the Phase-3 published-defect ledger (it has no published content yet).

## Published-supplier notes (exact evidence, no defect claimed)

I checked the ledger rows of the load-bearing published suppliers. Two rows on
the AB–Serre/Koszul route of `lem-ag-flat-local-regularity-ascent-descent` carry
current bounded owner-delegated acceptances from 2026-09-23–24, with earlier
findings explicitly retained as historical: line 30353
`thm-auslander-buchsbaum-serre-regularity-criterion` ("Accepted existing
AC-qualified four-way criterion after repaired height, regular-local, depth and
projective-dimension suppliers") and line 33064
`lem-height-theorem-first-generator-reduction` ("Replaced asserted two-step
chain move with finite descending replacement …"), which is not a declared
dependency of this pair. No direct supplier of this pair appears among the six
currently listed A-P carriers (the O'Nan–Scott and bull-free Berge chains). I
did not audit the ledger's global counts or those chains; if any supplier's
Statement changes before authoring, Step 3b/5 must revalidate the consumer.

## Non-blocking observations for the item author

1. `def-ag-separating-transcendence-basis` should also fix the adjective
   "separably generated" (admits a separating transcendence basis), which two
   theorem statements use without a local definition.
2. `def-finitely-presented-module-and-algebra` (published on
   `commutative-algebra/noetherian-rings-and-hilbert-basis`, inside the pair's
   194-page closure) is used by several A statements but not declared among
   their dependencies — a dependency-audit item, not a scope gap.
3. Relative dimension should be pinned where it is used: `n−c` in
   `def-ag-standard-smooth-algebra` and
   `thm-ag-standard-smooth-base-change-composition`, versus the pointwise
   `ht(q′)−c` fibre dimension in
   `lem-ag-standard-smooth-regular-geometric-fibres`, which the statement
   already distinguishes.
4. The scaffold refined five design dependency targets (for example dropping
   `thm-generic-fibre-dimension` and `thm-ag-field-extension-of-schemes` from
   specific item proof routes, and using
   `thm-polynomial-quotient-is-a-field-iff-irreducible` plus separability
   lemmas in the two field examples). The claims are unchanged; the design's
   proof-route text is indicative, not a constraint.
5. The pair has no item files on disk yet; Step 3b authors all 31 items.
   Nothing in this review endorses any proof strategy.

## Uncertainty statement

I verified inventory, page identity, dependency availability, source
locators/content, consumer interfaces and the B-leaf shape. I read the complete
relevant Stacks lemmas and Vakil sections named above, but I did not re-derive
the 31 proof strategies and did not audit the proofs of the 45 published
suppliers; that is Step 3b/Step 5 work. The two source-level observations (07BY
row, Vakil chapter locator) are the only coverage discrepancies I found, and
neither removes a claim, result or example from the pair's intended subject. I
found no omitted topic and therefore name no omission and propose no merger.

## Decision

**sufficient** for both pages of the pair. The planned definitions, results and
examples realise all 21 designed A items and all 7 designed B examples; the
three additions are source-backed prerequisites of designed claims; the sources
cover every clause at the promised locators; the pair's prerequisite closure and
its in-run Kähler consumer interface are intact; and the pair's role — the
algebraic field-change, differential, separability and local
smooth-presentation supplier for AV-6 and the later Kähler/smooth pages — is
preserved. No enrichment or pair merger is needed, and Step 3b may author
against this scope.
