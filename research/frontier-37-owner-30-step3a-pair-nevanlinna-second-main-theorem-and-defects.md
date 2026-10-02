# Step 3a scope review — nevanlinna-second-main-theorem-and-defects

- Run `frontier-37-owner-30`, batch 26, role alpha, label
  `step3a-pair-nevanlinna-second-main-theorem-and-defects-20fc9db5b721fb55`,
  covers `nevanlinna-second-main-theorem-and-defects`.
- A page `nevanlinna-second-main-theorem-and-defects` (order 841,
  complex-analysis, 13 items). B page
  `nevanlinna-second-main-theorem-and-defects-examples` (order 842, 5 items).
  Companion pointers agree A↔B; the B page `requires` is the singleton A id;
  the A page `requires` is exactly `measures-and-their-basic-properties`,
  `lebesgue-measure-on-euclidean-space`,
  `jensen-theory-and-nevanlinnas-first-main-theorem`.
- Decision: **insufficient** — owner action required; Step 3b stays blocked
  for this pair.
- Scope only: no proof-correctness judgment, no item approval, no owner record,
  no edit to any scaffold, manifest, coverage, plan or page.

## Evidence read

- `research/frontier-37-owner-30-batch-26.pages.json` (13 A + 5 B items with
  statements, `deps`, `dependency_level` 0–5, provenance),
  `research/frontier-37-owner-30-batch-26.coverage.json` (one A-page entry,
  three sources, 36 source rows plus 5 canonical rows),
  `research/frontier-37-owner-30-batch-26.notes.md`, and
  `research/frontier-37-owner-30-batch-26.cross-batch-dependencies.json` = `[]`.
- Prose design: `research/plan-complex-analysis-track.md` CA-NV-2 section
  L3798–3829 (7-row A table, companion list, proof strategy); §E repaired
  enrichment row L5380 and additive row L5430–5433; §M binding splice table
  L5688, A-inventory rule and CA-NV-2 insertion §M.1 L5704–5719 (L5717–5719),
  exact B inventory §M.2 L5787–5792, §M.3 zero published consumers. Plan
  contract `research/plan-spec.json` rows 841/842 (empty item arrays,
  `requires` fixed as above).
- Run records: `research/frontier-37-owner-30-scope-ledger.json` (pair present,
  batch 26), `research/frontier-37-owner-30-drift-evidence.json` (page 25 entry:
  declared requires and the three design locations), all 18
  `research/frontier-37-owner-30-step1-<item>.json` readiness records, and the
  owner recertifications of
  `lem-nevanlinna-exterior-three-value-extension` and
  `cor-nevanlinna-picard-theorems` (`owner: true`, 2026-09-29T20:08:57/58Z,
  "Schottky exterior-extension and SMT Picard routes"). The Step-1 research
  note is `research/frontier-37-owner-30-step1-nevanlinna-exterior-repair.md`.
  `research/frontier-37-owner-30-owner-authoring-direction.md` is absent; no
  Step-3a owner receipt exists for this page.
- Prerequisites: CA-NV-1 `library/complex-analysis/jensen-theory-and-nevanlinnas-first-main-theorem.md`
  and both measure pages are `status: published`; every nonlocal `deps` id of
  the 18 items resolves to an existing `items/<id>.md` file (18 local ids, zero
  missing nonlocal deps).
- Sources re-verified at review time (2026-09-30): Eremenko 337,053 B
  `a0de520912ea9817` (18 pp.), Goldberg–Ostrovskii 4,847,869 B
  `57977e671d5bf1b8` (495 pp.), Laine 1,488,600 B `07e3e6c50805821f` (62 pp.)
  — all byte counts and sha256_16 stamps match the coverage records exactly.

## Scope against the prose design

All seven base CA-NV-2 design results are present with the designed content:
`def-nevanlinna-exceptional-radius-notation`,
`lem-nevanlinna-logarithmic-derivative`,
`thm-nevanlinna-second-main-theorem` (truncated form
$(q-2)T\le\sum_j\overline N(r,a_j;f)+S$),
`def-nevanlinna-deficiency-and-ramification-index`,
`thm-nevanlinna-defect-relation`,
`cor-nevanlinna-picard-theorems`,
`thm-nevanlinna-five-value-theorem`. Five support additions are ordinary proof
machinery for those results and match the design's "prove the
logarithmic-derivative lemma … reduce the SMT to it through partial fractions
and ramification counting":
`def-nevanlinna-truncated-and-ramification-counts`,
`lem-borel-nevanlinna-growth-increment`,
`lem-nevanlinna-poisson-jensen-derivative-bound`,
`lem-nevanlinna-ramification-counting-identity`,
`lem-nevanlinna-growth-dominates-logarithm`.

The sixth addition, `lem-nevanlinna-exterior-three-value-extension`, is not
support machinery: it fills the slot immediately before
`cor-nevanlinna-picard-theorems` with a substitute route to the punctured-disc
Great Picard claim (Schottky/normal-family exterior extension, owner-repaired
and recertified in Step 1).

## The A-page omission: the planned local Second Main Theorem

The binding splice §M.1 is explicit: "The existing A inventory table … is
binding in printed order. … Apply these five changes, which are the only
exceptions: … 2. CA-NV-2 inserts
`thm-local-second-main-theorem-on-a-punctured-disc` (theorem; title "The local
Second Main Theorem on a punctured disc") immediately before
`cor-nevanlinna-picard-theorems`" (L5717–5719). §E adds why: the item is added
"with its rescaling, characteristic, and exceptional-radius error stated,
before deriving great Picard. An entire-plane SMT alone does not prove the
punctured-disc claim" (L5430–5433). That planned result is **absent**: it
occurs nowhere in this run's 30 batch files, nowhere in `items/`, and nowhere
in the published library (checked on disk, not inferred from a preview). The
slot it was to occupy is filled by `lem-nevanlinna-exterior-three-value-extension`,
a different claim that bypasses the local-SMT route; the same substitution is
recorded in the Step-1 repair note ("This route does not derive Great Picard
from the new plane SMT; it bypasses the exterior-boundary problem") and in the
owner's recertification of the two escalated items.

The Step-1 records are item-readiness decisions (`ready`), not a scope
decision: no owner receipt records that §M.1's insertion is superseded, and
the repair note itself keeps the Nevanlinna-only option open ("If the
requirement is specifically a Nevanlinna-only proof, keep the escalation until
an actual annular/exterior formula controls the inner-boundary contribution
and a complete exterior growth-to-extension argument is supplied"). The
punctured-disc *claim* is still carried by `cor-nevanlinna-picard-theorems`, so
the pair is not missing the consequence; it is missing the planned result that
the binding inventory names.

## B-page omissions and deviations

§M.2 lists six exact ids for CA-NV-2: `ex-nevanlinna-omitted-values-of-exponential`;
`ex-nevanlinna-deficiencies-of-elementary-functions`;
`ex-truncated-versus-full-nevanlinna-counting`;
`cex-nevanlinna-error-bound-without-exceptional-radii`;
`ex-sharpness-of-nevanlinna-q-minus-two`;
`ex-nevanlinna-and-normal-family-picard-proofs` (L5787–5792). The manifest has
five items:

- Covered (renamed): `ex-truncated-counts-for-power-map` ↔ planned truncated-vs-full
  counting; `ex-exponential-defects-and-sharp-second-main-theorem` ↔ planned
  exponential omitted values and the q=3 sharpness (its claim includes
  asymptotic equality in the q=3 truncated SMT);
  `ex-sine-deficiency-ramification-saturation` plus the exponential item ↔ the
  "deficiencies of elementary functions" topic (δ(∞)=1 for e^z, sine saturating
  the ramification budget with ε(±1)=1/2).
- Kind deviation: planned `cex-nevanlinna-error-bound-without-exceptional-radii`
  is carried as kind `example` under
  `ex-hayman-lacunary-counterexample-to-uniform-s-estimate`, although its
  written claim is the negative existence assertion and Laine/GO record it as a
  counterexample to an all-radii estimate (SCHEMA.md L12–14 ties `counterexample`
  to the `cex-` prefix).
- Addition: `ex-five-value-bound-is-sharp` (four shared values do not force
  equality; Laine §6 remark p. 43). Consistent with the design's sharpness
  topics; not the issue.
- **Absent:** `ex-nevanlinna-and-normal-family-picard-proofs`, the design
  companion's closing bullet "comparison with CA-23's normal-family proof".
  The published CA-23 page carries only the reverse-direction remark
  `rem-agreement-between-classical-and-nevanlinna-picard-theorems`
  (`library/complex-analysis/bloch-schottky-and-picard.md`); the CA-NV-2 B-page
  comparison itself does not exist.

## Source coverage

Coverage is one A-page entry with three sources and 36 harvested rows (all
included/inline or out-of-scope with a specific reason) plus five canonical
rows; the recorded locators for every manifest item's load-bearing source are
plausible and the stamps re-verify. Two coverage-record deltas to reconcile:

- The repaired exterior-extension item's manifest `sources.references` now
  cites Simonič, *The Ahlfors lemma and Picard's theorems*, arXiv:1506.07019v1,
  §5.3 Theorem 11 and §5.4 Theorems 13–14 (stamped full text: 302,585 B,
  SHA-256 `90ecc7e2…`, per the Step-1 repair note), but the coverage file has
  no Simonič source row.
- The coverage `canonical` row for
  `lem-nevanlinna-exterior-three-value-extension` still reads "unproved local
  supplier identified from design scope" / "no complete exterior proof is
  claimed", which is stale relative to the owner-repaired manifest.

Bounded review-time source read (load-bearing locators only, not a proof
audit): Eremenko PDF pp. 12–14 — §5 "Second main theorem of the unit disc"
with error $S(r)=O(\log T(r)+\log\frac1{1-r})$, $r\notin E$,
$\int_E dr/(1-r)<\infty$, the corollary $T_f(r)=O(\log(1-r)^{-1})$ for
$0,1$-omitting disc functions, and §6's logarithmic-derivative theorem with the
SMT derivation; Goldberg–Ostrovskii pp. 93–95 — the lacunary counterexample
(1.14)–(1.16), the $n_1/\overline n$ definitions and SMT start; Laine
pp. 35–40 and 42–43 — Theorem 5.3, Borel Lemma 5.4, Lemma 5.6, Theorems
5.7–5.9, Definition 5.11, Theorem 5.12, and the §6 five-value theorem with the
remark that five is best possible. Eremenko §5 pp. 12–13 is the design's own
candidate template for the missing local SMT (a disc result with a
boundary-distance error); the coverage currently disposes of it as
out-of-scope under the exterior-route rationale.

## Role in the library

The pair is planned-only: §M.3 and `research/published-consumer-supplier-ledger.md`
(Complex analysis section, planned list) record zero direct and zero
transitive published consumers for every item. A scan of the run's 30 batch
files finds no in-run consumer of any batch-26 id, and
`frontier-37-owner-30-batch-26.cross-batch-dependencies.json` is `[]`. The B
page is a dependency leaf. Enrichment would therefore have no published
impact and no downstream obligation is blocked by this pair.

## What the owner must decide

- **Enrich and re-review**: add the §M.1 A row `thm-local-second-main-theorem-on-a-punctured-disc`
  (theorem; title "The local Second Main Theorem on a punctured disc")
  immediately before `cor-nevanlinna-picard-theorems`, with a one-line
  statement that states the rescaling, the local characteristic and the
  exceptional-radius error, and a source row for it (Eremenko §5 pp. 12–13 is
  the natural candidate; re-dispose that coverage row accordingly); add the
  §M.2 B row `ex-nevanlinna-and-normal-family-picard-proofs`; reconcile the
  B ids/kinds with §M.2 (notably the `cex-` counterexample) and commission a
  Simonič coverage row (or equivalent) for the repaired exterior lemma. Then
  re-run the pair scope decision for the new scope.
- **Or record `proceed` for the current scope**, explicitly accepting (i) the
  Schottky exterior-extension substitution for the planned local SMT, noting
  that the Step-1 recertifications are item-level readiness and not a scope
  ruling, and (ii) the 5-item B page whose normal-family comparison is covered
  only by the published CA-23 remark. If §M.1's insertion is to be superseded
  for this run, the owner should say so in the proceed reason.

No merger is warranted: the omissions are inside one pair, and every external
supplier is published. I did not choose between enrichment and proceed, and I
made no edits to any scaffold, manifest, coverage, plan or page.

## Uncertainty and honesty

The plan prints only the missing item's title and the §E clause "with its
rescaling, characteristic, and exceptional-radius error stated"; it does not
print its one-line statement, so the exact intended claim cannot be recovered
from the plan alone. I did not verify a complete proof for the planned local
SMT (nor for the owner-repaired exterior lemma); my decision rests on the
written inventory of record — a planned result absent from the manifest with
no owner scope decision covering its replacement — not on proof correctness.
The `ex-nevanlinna-and-normal-family-picard-proofs` omission may be partly
mitigated by the published CA-23 agreement remark, but §M.2 lists it as this
pair's B item and it is absent here.
