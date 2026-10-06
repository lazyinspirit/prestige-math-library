# Step 3a scope review — codimension-one-foliations-and-secondary-classes

- Run: `frontier-41-ha-dt-29` (batch 23), role alpha, label
  `step3a-pair-codimension-one-foliations-and-secondary-classes-7d9a61cfd5be1149`.
- A page: `codimension-one-foliations-and-secondary-classes` (order 577,
  category `differential-topology`; 99 scaffold items: 13 definitions,
  76 lemmas, 2 propositions, 3 theorems, 2 corollaries, 3 remarks).
- B page: `codimension-one-foliations-and-secondary-classes-examples` (order
  578; 5 items: 4 examples, 1 counterexample). Companion pointers A↔B are
  consistent in the manifest and in `plan-spec.json`.
- Decision: **sufficient** (non-owner review), recorded with
  `tools/step3-decisions.mjs record-scope` against the current pair scope hash.
  Receipt: `research/frontier-41-ha-dt-29-step3a-review-codimension-one-foliations-and-secondary-classes.json`;
  re-verify with `node tools/step3-decisions.mjs check --run frontier-41-ha-dt-29 --phase scope`.
- Scope only: this review decides whether the planned definitions, results and
  examples cover the intended subject. It is not item or proof approval, and it
  edits no scaffold, item, plan row or owner record.

## Evidence read

| Artifact | Use |
|---|---|
| `research/plan-differential-topology-track.md` §DT-31, lines 1539–1585 | Controlling prose design: 21 A claims, 5 B examples, sources (MMF §1.2/§3.2, Hurder–Langevin §§2–3.1, Calegari §§4.4–4.6), hard-proof closure (GV closedness, both choice changes, concordance invariance; tautness hypotheses retained; Novikov split and 3-dimensional). |
| `research/plan-spec.json` rows 577/578 | Page identity, order, kind, category, companion; `requires`; empty item lists, so the batch manifest controls the inventory. Both `requires` arrays byte-match the manifest. |
| `research/frontier-41-ha-dt-29-batch-23.pages.json` | A inventory (99 items) and B inventory (5 items) with every statement, strategy, `deps`, provenance; companion pairing; page `requires`. |
| `research/frontier-41-ha-dt-29-batch-23.coverage.json` | 11 A-page sources and 5 B-page sources with locators, fetch stamps and dispositions (126 harvested rows). |
| `research/frontier-41-ha-dt-29-batch-23.notes.md` | Step-1 construction/repair record: same-pair support inventory, local-prerequisite closure, ACω/C² contracts, final "99A/5B, below the 100A cap" certification. |
| `research/frontier-41-ha-dt-29-batch-23.cross-batch-dependencies.json` | 131 reviewed rows (89 `verified`, 42 `open`) for this pair's cross-batch edges. |
| `research/frontier-41-ha-dt-29-alpha-step1-drift.md` lines 19–23 | Drift verdict for this pair: DT-29 (order 573) and DT-30 (order 575) precede order 577; "remaining uncertainty: none about prerequisite closure". |
| `research/frontier-41-ha-dt-29-step1-final-certification.json` | 883/883 run items construction-ready, 0 escalations (2026-10-05T12:56:51Z); re-confirmed by `node tools/step1-decisions.mjs check`. |
| re-fetched sources this session | Calegari (4,302,239 B, sha256_16 `4827ccafc1cc5b53`), Novikov translation (943,628 B, `9267c190c5a0a0aa`), Hurder–Langevin (1,312,364 B, `3e9d2d5821511aad`), Bott (2,447,541 B, `63679d3bf3830489`), Venugopalan (408,813 B, `7f20a07db9810ad8`) — all five match the coverage stamps exactly; locators re-read (see below). |

## Inventory against the prose design

All planned claims are delivered.

- **A page.** 20 of the design's 21 A items are homed here with their designed
  content and kinds: Frobenius divisibility, closedness of η∧dη, both choice
  changes of the GV form, the GV class definition, the closed-form vanishing
  corollary, concordance invariance, the C²-regularity remark, the Reeb
  component definition, tautness and dead-end machinery, Reeb-obstructs-tautness,
  the transverse-volume-flow and leafwise-calibration criteria, the vanishing
  cycle definition, the simple-cycle / compact-leaf / Reeb-component chain,
  Novikov's theorem, its π₁-injectivity corollary, and the two scope remarks.
  The 21st design item (`def-transversely-oriented-codimension-one-foliation-by-a-global-one-form`)
  is supplied in-run by batch 22's `def-transversely-oriented-codimension-one-foliation`
  (order 575, present in the scaffold; coverage row "MMF §1.2 … supplied in-run
  by the batch-22 definition"). It is a same-run home for the designed claim,
  not an omission: the definition states the nowhere-vanishing defining form
  with `TF = ker ω` and the co-orientation conventions consumed here.
- **B page.** All 5 designed examples are present in design order and with the
  design kinds: fibre bundle over S¹ has zero GV; the explicit rescaling
  calculation; the Reeb foliation of S³ is not taut; the mapping-torus fibre
  foliation is taut; the noncompact counterexample to Novikov's compactness
  conclusions.
- **Additions (79 A items).** Every addition is a same-pair prerequisite of a
  designed claim, placed before its consumer: GV/Frobenius support
  (`lem-forms-annihilated-by-a-nowhere-vanishing-one-form-are-divisible-by-it`,
  the foliated-concordance definition); tautness/dead-end/accessibility support
  and the single-transversal lemma; the characteristic-disk package, the Π₁
  limit-cycle and limitwise-nullhomotopy machinery, and the §7/§8
  compact-boundary-leaf / Reeb-identification carriers for Novikov; and the
  Bott-vanishing chain (Bott partial connection, well-definedness/flatness,
  curvature in the transverse ideal, and the vanishing theorem), which matches
  the pair's role statement "transverse orientation, Bott vanishing,
  Godbillon–Vey and Novikov boundary" in the drift evidence. No designed claim
  is dropped or narrowed, and no added claim leaves the pair's subject.
- **Hypotheses and caveats are explicit**: ACω and C² regularity throughout the
  foliation interface; compact/closed/oriented/co-oriented 3-manifold
  hypotheses on the tautness criteria and Novikov; GV named only as a real
  de Rham class (no integral refinement); Novikov stated only in dimension 3
  with both alternatives and the Reebless corollary by contraposition.
- **Documented source-gap reconstructions** (route substitutions, not scope
  changes): Novikov's "entirely similar" compressible-disk step, Ranz
  Propositions 3.4/3.6 and §3.1.1–3.1.2, and Candel–Conlon §9.2 are recorded
  as deferred coverage rows mapped to extant items whose proofs the batch
  reconstructs locally; the refuted Haefliger shortcuts were removed, not kept.

## Source coverage

`node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-23.coverage.json`
reports **2 pages, 126 harvested results, 0 errors, 0 warnings**.

- A page: 11 sources, 114 rows — 89 `included`, 7 `inline`, 11 `deferred`,
  7 `out-of-scope`. All three design sources are mapped: MMF §1.2/§3.2,
  Hurder–Langevin §§2–3.1 (GV definition and concordance invariance), and
  Calegari §§4.3–4.7 (Reeb component, tautness, dead ends, volume-preserving
  flow, Rummler–Sullivan calibration, Novikov–Rosenberg). Nine further sources
  were read for the Novikov/Bott chain: Novikov's translation, Ranz's thesis,
  Bott's lectures, Venugopalan, Haefliger (1962), Brittenham class 11,
  Candel–Conlon (route lead), and Teschl §7.3/§9.2.
- Every decline carries a specific reason and none removes a designed claim:
  the minimal-surface/Alexander taut-case route (the page uses the limit-cycle
  route), the Godbillon measure and ergodic/dynamical §§3.2–7, the Haefliger
  homotopy classification §§8–10, Novikov §§3–5, and Ranz Chapter 4.
- The 11 deferred rows are same-page local reconstruction duties mapped to
  extant items (compressible leaf, null-transversal, compact boundary leaf,
  Reeb identification, simple vanishing cycle), plus three source-route leads
  with no item; none is an unbuilt claim.
- B page: 5 sources, 12 rows, all `included`.
- Fetch status: 14 of 16 source records are fetch-verified; the two exceptions
  are MMF (design's first treatment; publisher full text not retrievable) and
  Candel–Conlon (AMS preview/Google snippets only, kept as a route lead). Both
  are corroborated by the verified treatments, and no designed claim rests on
  them alone.
- Independent re-read this session, at the exact stamped bytes: Calegari
  Definition 4.25 / Lemma 4.26 / Lemma 4.28 and Theorem 4.37 (Novikov for
  Reebless foliations, vanishing-cycle remark); Hurder–Langevin Definition 3.1
  and Theorem 3.2 (`GV(F)=[η∧dη]∈H³(M)`, foliated-concordance invariance);
  Novikov Theorems 6.1, 7.1, Lemma 7.2, Theorem 8.1, Corollary 8.1
  (boundary leaf is a torus), Theorem 8.2 (Reeb component) and Theorem 9.1
  (3-dimensional scope); Bott §6 "basic connection" and Theorem (*)
  (`Pont_k(Q)=0` for `k>2q`).

## Prerequisites and dependency closure

- `node tools/manifest-deps.mjs …batch-23.pages.json` → 104 items, 0 errors.
- 697 dependency references, 253 distinct targets: 143 published items and 110
  current-run scaffold items; **0 unresolved, 0 forward references** (all
  cross-page suppliers sit at orders 573/575, before 577, or are same-page).
- `node tools/depcheck.mjs --items-file <143 published direct deps>` → exit 0,
  no `published-unaudited` finding.
- All 15 `requires` pages resolve: 13 published pages exist in `library/`, and
  the two foliation pages (`foliation-holonomy-and-the-holonomy-groupoid`,
  `reeb-stability-and-global-foliation-constructions`) are in-run batches
  21/22 at orders 573/575. Ten are item-reached; the other five
  (`smooth-cobordism-relations-groups-and-rings`,
  `singular-cohomology-and-coefficient-theorems`,
  `orientations-poincare-lefschetz-and-alexander-duality`,
  `stiefel-whitney-and-euler-classes-by-universal-constructions`,
  `chern-and-pontryagin-classes-by-splitting-and-complexification`) are
  reached through the declared `requires` of already-reached pages; Step-1
  drift validated the closure.
- Cross-batch ledger: 131 rows, 89 `verified` and 42 `open`. The open rows are
  declared uses of sibling-page items that are present in the current scaffold
  (`def-holonomy-representation-and-holonomy-group-of-a-leaf`,
  `def-transversely-oriented-codimension-one-foliation`,
  `def-c1-regular-codimension-one-foliation-and-transverse-orientation`,
  `def-countable-choice-principle-for-foliation-pair`,
  `lem-holonomy-germ-is-independent-of-the-foliation-chart-chain`,
  `prop-reeb-foliation-of-the-solid-torus-has-the-boundary-as-a-leaf`); "open"
  records pending later-stage proof verification, not absence.
- The pair is terminal in the plan: only the B page consumes the A page, and no
  other batch consumes a batch-23 item as a cross-batch supplier.
- `node tools/step1-decisions.mjs check --run frontier-41-ha-dt-29` → 883 items,
  883 ready, 0 work; the batch-23 certification of 2026-10-05T12:56:51Z records
  the same.

## Unmet prerequisites

**No prerequisite is absent from both the published library and the current
scaffold.** The exhaustive direct-dependency resolution above finds 0 missing
targets among the 253 distinct dependencies, 0 forward references, and every
`requires` page present (published or in-run). No scaffold addition is
recommended by this review.

Three items of uncertainty are recorded for the owner (none is a confirmed
gap and none blocks scope):

1. **Unretrieved full texts (uncertainty, mitigated).** MMF (the design's first
   treatment) and Candel–Conlon Chapter 9 are not fetch-verified; Candel–Conlon
   is documented as a route lead only. Every designed claim is corroborated by
   at least one fully read, stamp-verified source, so this does not reduce
   coverage.
2. **42 open cross-batch review rows (declared, scaffold-available).** These
   are uses of sibling-page items awaiting later-stage proof verification. They
   are not missing claims; the suppliers exist in this run's scaffold.
3. **Optional enrichment, not requested.** The pair has no computation of a
   *nonzero* Godbillon–Vey class (the classical Reeb-foliation-of-S³ value
   would be the natural exhibit). The prose design plans no such item and does
   not make GV nonvanishing part of the intended subject, so this is not an
   insufficiency; it is flagged only in case the owner later wants the
   nontriviality exhibit. No merger is warranted: the pair's subject and its
   examples are self-contained.

## Uncertainty statement

I read the complete DT-31 design section, the two page manifests (all 104 item
statements and dependencies), the full coverage file, the batch notes, the
cross-batch ledger, the drift verdict for this pair, the plan rows, and the
mechanical checks reported above. I re-fetched and hash-matched five
load-bearing sources and re-read the specific locators they supply. I did not
re-derive the 104 proof strategies and did not audit the 143 published or 110
in-run suppliers (Step 3b/Step 5 work); in particular, the deferred
same-page reconstruction rows are proof-authoring duties recorded in the batch
notes, and their success is not certified by this review.

## Decision

**sufficient** for both pages of the pair. The planned definitions, results and
examples cover the design's full DT-31 subject — transverse orientation,
Frobenius divisibility, the Godbillon–Vey class with closedness, both choice
changes and concordance invariance, the closed-form vanishing corollary, the C²
regularity threshold, Bott vanishing for real Pontryagin monomials of a
codimension-q foliation, tautness with dead-end, flow and calibration criteria,
and the 3-dimensional Novikov Reeb-component theorem with its Reebless
corollary and scope remarks — the additions are source-backed prerequisites of
designed claims, the sources cover the claims at the promised locators, and the
pair's prerequisite closure and in-run interfaces are intact. Step 3b may
author against this scope.
