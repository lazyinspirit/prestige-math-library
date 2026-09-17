# Step 3a scope review — Banach algebras, spectrum and holomorphic functional calculus

- Run: `phase-2-remaining-27` — role `alpha`, this pair only (batch 4).
- A page: `banach-algebras-spectrum-and-holomorphic-functional-calculus`
  (plan order 288.079, `functional-analysis`).
- B page: `banach-algebras-spectrum-and-holomorphic-functional-calculus-examples`
  (order 288.080; `requires` only its A companion, as required).
- Scope decision: **sufficient**, recorded with
  `tools/step3-decisions.mjs record-scope` (receipt
  `research/phase-2-remaining-27-step3a-review-banach-algebras-spectrum-and-holomorphic-functional-calculus.json`).
- Scope only: no item approval, owner record, or edit to any scaffold, manifest,
  coverage, plan, item or page. One non-blocking authoring obligation is flagged
  below; it does not make the scope inadequate.

## Artifacts read

| Artifact | Use |
|---|---|
| `research/phase-2-remaining-27-batch-4.pages.json` | Live A inventory (31 items, order 288.079) and B inventory (9 items); page `requires` |
| `research/phase-2-remaining-27-batch-4.coverage.json` | Two fetch-verified complete treatments; 17 harvested rows with dispositions |
| `research/phase-2-remaining-27-batch-4.notes.md` | Scaffolder construction, ordering, choice and cross-batch statements |
| `research/phase-2-remaining-27-batch-4.cross-batch-dependencies.json` | Five owned rows (FA-17 page edge to batch 3; Calkin/Atkinson item edges to batch 2) |
| `research/plan-functional-analysis-track.md` | Prose design §5 FA-17 (lines 1295–1362), conventions §9 (lines 1969–1971), harvest row (line 2390), binding amendment (lines 3194–3199) |
| `research/phase-2-remaining-27-owner-authoring-direction.md` | Binding run direction; §14.4–14.5 of the FA track controls |
| `research/phase-2-remaining-27-alpha-step1-drift.md` | `no-drift`; all declared edges backward and closed |
| `research/plan-spec.json` | Pages 288.079/.080 agree on id, title, kind, category, companion and exact `requires` |
| `research/published-consumer-supplier-ledger.md` (8417–8455) | Published consumers and their mapped planned suppliers |
| Fetch-verified caches (B&S sha256-16 `8ffd5f868b480006`, Shirbisheh `50372d5215737bfe`, both matching the coverage stamps) | Independent read of B&S §5.2.4 Theorem 5.25 and Shirbisheh Chapter 2 §2.5 |
| `research/phase-2-remaining-27-step1-<item>.json` (40 files) | All 40 owned items carry current `ready` receipts |

## Inventory against the prose design and the binding amendment

Checked id-by-id against the plan text: all 28 FA-17 design items are present,
and all 9 B-page design examples are present in design order — nothing designed
is missing and nothing was added beyond the amendment. The A page adds exactly
three helpers, each required by the design's own proof routes or by the binding
amendment (lines 3194–3199):

- `lem-submultiplicative-root-limit` — amendment-required root limit consumed by
  `thm-spectral-radius-formula`;
- `lem-admissible-cycle-around-a-compact-plane-set` — amendment-required
  admissible cycle consumed by `def-holomorphic-functional-calculus` and the
  homomorphism theorem;
- `lem-canonical-banach-complexification-of-a-real-banach-space` — the norm,
  completeness and canonical-independence proofs the amendment requires for
  complexification, underwriting `def-complexification-and-spectrum-of-a-real-operator`.

Ordering obligations hold: `thm-polynomial-spectral-mapping` precedes
`thm-spectral-radius-formula` (the selected radius proof uses it); the
complexification comparison precedes the real-spectrum definition; the
admissible-cycle lemma precedes the calculus and its homomorphism. The design's
hard-proof plan is reflected in the strategies: quantitative Neumann series and
open invertibles; Liouville nonemptiness with Neumann norm-bound compactness;
Banach-valued Cauchy vanishing by scalarisation and dual separation; contour
independence before `f(a)` is used; multiplicative via two separated nested
cycles; Riesz projections stated for operators with empty spectral parts
handled without inventing a normalized zero algebra; and the Mu
point/continuous/residual partition kept distinct from the possibly overlapping
approximate-point and compression sets. The B page carries exactly the
designed C(K), B(X), matrix, multiplication-operator, unilateral-shift,
norm-vs-radius, spectrum-shrink, unitization and Riesz-projection examples, and
the design's Calkin/Atkinson caution is satisfied (the restatement lives on the
FA-17 A page; the FA-15 B page does not restate it, so no cycle exists).

## Source coverage

Two complete, fetch-verified independent treatments back this pair:
Bühler–Salamon, *Functional Analysis*, Chapter 5 §§5.1–5.2, printed pp. 209–239
(author URL recovered after HTTP 403; 452-page copy, sha256-16
`8ffd5f868b480006`), and Shirbisheh, *Lectures on C-star Algebras* v2, Chapter 2
§§2.3/2.5, printed pp. 30–33 and 46–50 (sha256-16 `50372d5215737bfe`). All 17
harvested rows are disposed: 11 `included`, 3 `inline`, 1 `already-published`
(circle integrals, on disk), 1 `deferred` with destination
`compact-operators-and-riesz-schauder-theory` (in this run), and 1 reasoned
`out-of-scope` (the later Hilbert-space spectral-theory chapters, which belong
to FA-19/FA-20). No harvested result lacks a home, and the deferred destination
is a live page in the run.

I read the two sources' own statements and proofs at the relevant places to
check the one delicate row. The coverage disposes Shirbisheh Theorem 2.5.5's
second sentence (the composition law `g(f(a))=(g∘f)(a)`) as `inline` on
`thm-holomorphic-functional-calculus-homomorphism`, with the support note
"Retain the composition property as an additional obligation. Proof requires
cycles around the appropriate compact images, not the whole preimage of an
outer contour." Both complete sources state this as part of the same labeled
theorem: Bühler–Salamon Theorem 5.25(v), printed p. 228 (proved pp. 230–232 by
the change-of-cycles computation), and Shirbisheh Theorem 2.5.5, printed
pp. 49–50 (nested-contour computation). Under the coverage-checklist contract
for `inline` (`the item whose proof absorbs it`), this result is inside the
pair's planned scope; the host item's manifest statement does not restate the
clause, so it is flagged as an authoring obligation below. The
"already-published" row is genuine: `thm-circle-integrals-of-integer-monomials`
is on disk.

## Role in the library

The pair is the Banach-algebra and holomorphic-calculus supplier for the
functional-analysis track. Ten in-run items in four sibling pairs declare its
interfaces: FA-18's character continuity, maximal ideals, spectrum-as-character
values, GKZ, Gleason–Kahane–Żelazko, closed-ideal quotient and C\*-spectral-radius
items (definitions of unital Banach algebra/spectrum, Neumann series,
Gelfand–Mazur, polynomial spectral mapping, radius formula); FA-19's polynomial
isometry (polynomial spectral mapping); FA-20's isolated-eigenvalue Riesz
projection example (Riesz projection definition and properties); and FA-21's
Kato–Rellich (Neumann series). The published consumers mapped in the
published-consumer ledger (`thm-wiener-lemma-for-absolutely-convergent-fourier-series`,
`cor-holomorphic-functional-calculus-in-the-wiener-algebra`) need FA-18's
character items and this pair's homomorphism theorem respectively, and those
planned suppliers exist. No consumer needs a result the scaffold does not plan.

All 40 item dependency arrays resolve either to in-run items or to items on
disk (0 missing), the five page prerequisites are earlier in `plan-spec.json`
(288.077 and 288.07803–288.07813; the complex-analysis pages are published with
nonempty inventories, matching the amendment's note that the stale "empty
inventory" sentence is superseded), and the five cross-batch rows in the batch
ledger match the derived ledger.

## Boundary observations for Step 3b (not item approvals)

1. Composition law. `thm-holomorphic-functional-calculus-homomorphism` must
   state and prove the coverage's inline obligation
   `g(f(a))=(g∘f)(a)` (nested admissible cycles around the compact images of
   `f`). If the author prefers to give it a separate item or restate it in the
   host statement, that changes the scope hash and requires a refreshed scope
   decision (no owner scope receipt exists on this pair, so the authoring lane
   may refresh it); dropping the obligation would break the coverage promise.
2. The complexification comparison is stated with isometry only for the
   rotation-supremum model and bounded complex-linear conjugacy otherwise, in
   line with the coverage note that Exercise 5.4 does not give isometric
   uniqueness across arbitrary compatible norms; the real-operator definition
   inherits exactly that qualification. Keep the two statements in sync.

## Checks run

- `node tools/manifest-deps.mjs research/phase-2-remaining-27-batch-*.pages.json`
  → 1006 items, 0 normalized, 0 errors.
- `node tools/content-policy.mjs research/phase-2-remaining-27-batch-*.pages.json --manifest-only`
  → 1006 scoped items, 0 errors, 0 warnings.
- `node tools/coverage-checklist.mjs research/phase-2-remaining-27-batch-4.coverage.json --require-destination`
  → 2 pages, 102 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/phase-2-remaining-27-batch-4.coverage.json`
  → 9/10 fetch-verified, 10/10 resolved; the one documented drop belongs to the
  sibling FA-18 pair, not this one (both of this pair's sources are stamped).
- `node tools/validate-plan.mjs research/plan-spec.json` → exit 0; declared page
  order acyclic and consistent over 1138 pages with item lists (481 planned
  pages still carry empty item arrays).
- Owned dependency resolution: 0 of the 40 items' declared dependencies missing;
  40/40 Step-1 receipts current `ready`; no Step-3a owner receipt on this page.

## Limits of this review

This is a scope determination; it does not audit item proofs, statement
precision, choice accounting or source-pulling mechanics. I did not re-fetch
the two PDFs from the network; I read the relevant sections from cached copies
whose byte counts and sha256-16 prefixes match the coverage fetch stamps
exactly, and I verified the composition-law statement in both. Item-level
correctness remains Step 3b/Step 5 work.

## Decision

`sufficient`: the scaffold realizes the FA-17 design and its binding amendment
item-for-item, its sources are complete, fetch-verified and fully disposed, and
its interfaces satisfy every declared in-run and published consumer. The single
record caveat (composition clause assigned inline but not restated in the host
item's manifest statement) is an authoring obligation carried into Step 3b, not
a scope omission.
