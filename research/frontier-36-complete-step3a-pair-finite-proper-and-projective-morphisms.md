# Step 3a scope review — pair `finite-proper-and-projective-morphisms`

Run `frontier-36-complete`, role alpha (Step 3a scope), batch 5, label
`step3a-pair-finite-proper-and-projective-morphisms-e29c302698d9e836`.
A page `finite-proper-and-projective-morphisms` (scheme-theory, 366.069, 41
items). B page `finite-proper-and-projective-morphisms-examples` (366.070,
9 items, dependency leaf). Companion pointers agree in the manifest, the plan
shell and the scope ledger.

**Decision: `sufficient`.** Scope only; no claim about proof correctness, no
item approval, no owner record, no scaffold edit. Recorded with
`node tools/step3-decisions.mjs record-scope --run frontier-36-complete --page
finite-proper-and-projective-morphisms --decision sufficient ...`; the receipt
`research/frontier-36-complete-step3a-review-finite-proper-and-projective-morphisms.json`
binds the current scope hash.

## Inputs read

- Manifest and batch evidence: `research/frontier-36-complete-batch-5.pages.json`,
  `.coverage.json` (50 harvest rows), `.notes.md`,
  `.cross-batch-dependencies.json` (`[]`); all 50
  `research/frontier-36-complete-step1-<item>.json` readiness records (50/50
  `ready`, no open escalation).
- Design: `research/plan-algebraic-geometry-track.md` §AV-15 L1022–1095
  (owner resolution L1030, "Proposed A-page inventory (28 items)" L1037,
  owner placement L1071–1081, B inventory L1083–1095, source table L1890);
  the page's entry in `research/frontier-36-complete-drift-evidence.json`;
  `research/plan-spec.json` orders/requires; `research/frontier-36-complete-scope-ledger.json`
  (60 owed pages); `research/frontier-36-complete-planning-notes.md`.
- Owner/operator decisions: `research/frontier-36-complete-owner-authoring-direction.md`;
  `research/frontier-36-complete-operator-record.md` (drift resolution of the
  AV-15 relative-Spec deferral; 11:37–14:23 UTC batch-5 reconciliation of the
  three Step-1 escalations).
- Consumer manifests for the role check: batches 5, 6, 8, 9 (`requires` and
  item-level `deps`).

## Design → manifest reconciliation

All 30 rows of the AV-15 A-table are realised in the library — 29 as manifest
items plus the already-published `def-affine-morphism-schemes`
(`items/def-affine-morphism-schemes.md`, `status: published`), which is
deliberately not duplicated. All 9 designed B leaves are present with the
designed IDs, and no designed item was dropped or weakened. One item is
renamed with unchanged content: design
`lem-relative-spectrum-glues-over-affine-base-cover` → manifest
`lem-relative-spec-glues-affine-algebras`.

Twelve A items are additions beyond the design table, each licensed by the
owner direction or required as local support and recorded in the batch-5
notes:

| Added item | Basis |
|---|---|
| `lem-closed-immersion-affine-quotient-and-base-change` | local replacement for the published affine-quotient proof-locality debt; used by this pair's closed-immersion and projective-space arguments |
| `lem-quasi-compact-scheme-image-specialization-closed`, `lem-universally-closed-valuative-existence-quasicompact` | Stacks *Schemes* §26.19–26.20 support for the designed valuative criterion |
| `lem-integral-finite-type-scheme-function-field`, `lem-relative-algebraic-constants-fg-field-finite` | support for the designed global-functions theorem |
| `def-fpqc-morphism-schemes`, `lem-fpqc-cover-submersive`, `lem-fpqc-descent-properness-components` | the design's `thm-properness-descent-fpqc` had proof provenance `not-supplied`; the manifest now backs it locally (Stacks *Descent* §35.23) |
| `def-quasi-finite-morphism-schemes` | owner placement L1078–1081; uses the published affine-algebra quasi-finite-at-a-prime definition |
| `lem-proper-source-to-separated-target-proper` | Stacks 29.42.7; declared by batch-6 consumers (`lem-elementary-etale-neighbourhood-finite-decomposition`, `thm-proper-quasi-finite-is-finite`) and used by the global-functions theorem |
| `lem-closed-gluing-of-two-projective-three-spaces-is-proper`, `lem-line-bundles-on-projective-three-space-restrict-by-degree` | owner's repair of the proper-nonprojective B example (operator record 11:37–14:23 UTC) |

Size: A 41 items, B 9 items, both below the 100-item cap. Dependency levels are
internally consistent (0–8); the 31 in-run dependencies all live on this same
A page, and the two page-level `requires` are published pages
(`diagonals-separated-morphisms-and-valuative-uniqueness`,
`algebraic-zariski-main-for-quasi-finite-morphisms`; both `status: published`
in `library/`).

Owner-directed relocations were verified in their named carriers, so they are
relocations and not omissions of this pair: the scheme-level Zariski Main
factorization and the proper-quasi-finite-is-finite theorem are present in
batch 6 `flat-smooth-and-etale-morphisms` as
`lem-scheme-zariski-main-factorization-quasi-finite` and
`thm-proper-quasi-finite-is-finite` (batch 6 requires this A page); the Stacks
29.44.1(1) projective-bundle convention belongs to the in-run Proj pair
(batch 8, `lem-projective-morphism-relative-proj-presentation`,
`thm-projective-bundle-represents-line-quotients`).

## Source coverage

- 50 harvest rows: 26 `included`, 15 `inline`, 2 `already-published`,
  6 `deferred`, 1 `out-of-scope`. Six fetch-stamped full texts (Stacks
  *Morphisms of Schemes*, *Descent*, *Varieties*, *Schemes*, Stacks Zariski
  Main HTML, Vakil).
- I re-hashed 4 of the 6 cached fetch bodies on disk (`/tmp`):
  morphisms `0bebe1d93baa7e4e`, Vakil `57ce73e13c3fd56c`, descent
  `28e718bac216bb7c`, schemes `fa2b63e8fd245fcd` — byte-identical to the
  stamps. The *Varieties* PDF and Zariski Main HTML caches are gone, so those
  two rows rest on the recorded stamps only.
- I re-fetched and read live Stacks tags `01S8`, `01W0`, `0BX5`, `01W8`,
  `01WG` and confirmed the rows they back: proper = separated + finite type +
  universally closed with no Noetherian hypothesis (29.42.1); valuative
  criterion under finite type + quasi-separated over arbitrary valuation rings
  (29.43.1); finite = affine + module-finite (29.45.1); affine ⇔ relative
  Spec of a quasi-coherent algebra (29.11.3); and the 29.44.1 split
  (1) projective-bundle convention / (2) H-projective closed immersion into
  P^n_S, which is exactly the convention this page adopts and the declined row
  reserves for the Proj pair.
- Five of the six deferred rows are the owner-relocated Zariski Main chain
  (Vakil 8.3.13, 11.3.7; Stacks 37.43.1–3) and exist in batch 6. The sixth
  (Stacks 29.45.11) is discussed as observation 1 below.
- Every one of the 50 items carries explicit `sources.references`; every
  proof-bearing item has `ai-altered` provenance plus a proof strategy, and no
  `not-supplied` row remains. The design also names Milne (Ch. 7 complete
  varieties; Ch. 8 §§d–f finite-map fibres, Zariski Main, Stein — confirmed
  from the live TOC of Milne's *Algebraic Geometry*) and Tong; neither is
  harvested. The harvested Stacks/Vakil set covers the designed inventory, and
  the Milne chapters span material partly owned here (proper maps,
  projective ⇒ complete), partly in batch 6 (Zariski Main) and partly outside
  this pair's design inventory altogether (elimination theory, Chow's lemma —
  present in run batch 9 as `lem-chow-lemma-proper-noetherian` — and Nagata's
  embedding theorem, which no run manifest carries); I found no
  subject-matter gap, and record the non-harvest only for transparency.

## Role in the library and closure

- In-run consumers (all declared IDs exist on the A page): batch 6 requires
  this page and uses `def-proper-morphism`, `thm-proper-morphism-closed-image`,
  `def-quasi-finite-morphism-schemes`, `def-finite-morphism-schemes`,
  `lem-finite-morphism-affine`, `lem-proper-source-to-separated-target-proper`,
  `lem-closed-immersion-affine-quotient-and-base-change`,
  `def-fpqc-morphism-schemes`; batch 8 requires this page and uses
  `def-projective-morphism-pre-proj`, `def-finite-morphism-schemes`,
  `lem-finite-morphism-affine`, `lem-proper-source-to-separated-target-proper`,
  `thm-proper-morphism-closed-image`; batch 9 uses
  `def-universally-closed-morphism`, `def-proper-morphism`,
  `def-projective-morphism-pre-proj`, `lem-closed-immersion-proper`,
  `lem-proper-stable-base-change`, `lem-proper-stable-composition`,
  `lem-proper-source-to-separated-target-proper`.
- The B page is a leaf: only it requires the A page, and no page requires the
  B page.
- No published consumer: no file under `items/` references any of the 50 IDs,
  no `library/` page or `articles/` file mentions either page, and
  `research/published-consumer-supplier-ledger.md` names neither. No
  published-side obligation attaches to this pair.
- Dependency closure: 86 distinct direct dependencies; 55 are out-of-run and
  every one has a `status: published` item file; 31 are in-run on this A page;
  no dangling ID. This is consistent with the pair's consumers waiting only on
  published prerequisites plus this page.

## Observations and uncertainty (honest)

1. Stacks Lemma 29.45.11 ("finite ⇔ affine + proper", tag `01WG` §29.45) is
   recorded `deferred` with the same reason as the Zariski Main rows, but
   batch 6 does not carry that equivalence. This pair realises the forward
   half only: finite ⇒ affine (`lem-finite-morphism-affine`), finite ⇒ proper
   (`cor-finite-morphism-proper`). The converse (affine + proper ⇒ finite) is
   not in the AV-15 design inventory and no in-run item or consumer declares
   it, so I do not treat it as a scope omission. For the owner's information:
   if wanted, it is a small local addition well inside the cap; otherwise the
   coverage disposition could be corrected to record that the design never
   owned it. This is an observation, not a blocker.
2. `thm-global-functions-proper-integral-variety` states a stronger split than
   the design's prose (finite extension of `k` for the integral case, `= k`
   under geometric integrality). It stays inside the page's subject; statement
   correctness is a Step-3b/Step-5 matter, not part of this scope decision.
3. This review is scope-only. I verified no proof, and the source re-checks
   above are not item approvals. Source-read confidence rests on the recorded
   hash-stamped fetches plus my live re-fetch of the five Stacks tags; two
   expired caches could not be re-hashed.

## Decision

`sufficient` — the planned definitions, results and examples cover the
intended subject (AV-15 as amended by the owner), every consumer-declared
interface is present, source coverage is adequate with all deferrals traced to
owner decisions, and the pair has no published-consumer obligations. No
merger or enrichment is required; no owner action is needed.
