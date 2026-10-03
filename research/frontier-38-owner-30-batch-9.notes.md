# Batch 9 scaffold notes — run `frontier-38-owner-30`

Pair: `the-hook-length-formula-and-rsk-correspondence` (A, order 510.051) /
`the-hook-length-formula-and-rsk-correspondence-examples` (B, order 510.052),
category `representation-theory`. Dispatch role: beta, label `batch-9`
(attempt 2; attempt 1 left no artifacts).

## Scope and deliverables

- `research/frontier-38-owner-30-batch-9.pages.json` — A page 20 items, B page
  5 items (the complete RG-11 inventory of the design; no local additions, no
  omission). Every item carries `id`, `kind`, `title`, explicit `deps`,
  `statement`, `strategy`, `provenance`, `sources.references` with URLs and
  exact locators, and a recomputed `dependency_level`.
- `research/frontier-38-owner-30-batch-9.coverage.json` — 2 pages, 87 harvested
  source headings, all disposed; 9 source entries fetch-stamped.
- `research/frontier-38-owner-30-batch-9.cross-batch-dependencies.json` — `[]`
  (see the ledger section).
- `research/frontier-38-owner-30-batch-9.notes.md` — this file.
- 25 Step-1 readiness records `research/frontier-38-owner-30-step1-<id>.json`,
  all `ready`, none `owner`.

Nothing else was written: no item files, no shared plan, no published content,
no `.autopilot` state, no verdict files. The pair's pages stay well below the
100-item cap (20 and 5).

**In-run dependency levels** (computed by the manifest and re-checked with
`tools/item-dependency-levels.mjs`; published/out-of-run suppliers do not raise
a level):

| level | items |
|---|---|
| 0 | `def-hook-arm-leg-and-hook-length`, `lem-standard-tableau-removal-recursion`, `def-row-insertion-and-bumping-route` |
| 1 | `lem-hook-product-change-under-corner-removal`, `lem-row-bumping-route-monotonicity`, `def-reverse-row-deletion` |
| 2 | `lem-hook-product-branching-identity`, `lem-robinson-schensted-recording-tableau-is-standard`, `lem-row-insertion-and-reverse-deletion-are-inverse`, `lem-first-row-insertion-basic-subsequences`, `def-column-insertion-for-distinct-letters` |
| 3 | `thm-hook-length-formula`, `thm-robinson-schensted-correspondence`, `lem-row-and-column-insertion-commute`, `thm-rsk-correspondence-for-two-line-arrays` |
| 4 | `lem-word-reversal-transposes-the-insertion-tableau`, `cor-rsk-symmetry-under-inversion`, `cor-sum-of-squares-of-standard-tableau-numbers`, `ex-hook-table-for-shape-three-two-one`, `ex-hook-lengths-for-row-column-and-hook-shapes`, `ex-rsk-insertion-and-reverse-deletion`, `ex-empty-and-singleton-rsk-boundaries` |
| 5 | `thm-schensted-longest-increasing-and-decreasing-subsequence-theorem`, `cor-involutions-are-counted-by-standard-tableaux` |
| 6 | `ex-rsk-for-involutions` |

Maximum level 6. B items depend only on A items of the same pair and (for
`ex-rsk-for-involutions`) on earlier A corollaries; no A item depends on a B
item, no cycles, no forward edges. The whole-run
`item-dependency-levels check --run frontier-38-owner-30` reports errors only
for other batches' still-empty inventories — no batch-9 item appears.

## Controlling documents and recorded conflicts

Read before construction: `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`,
`briefs/beta-scaffold.md`, the binding
`research/frontier-38-owner-30-owner-authoring-direction.md`, the batch task,
the complete RG-11 design section
`research/plan-representation-theory-groups-track.md` L719–L793 (including the
"Hard proof plan" and the 2026-09-07 Schensted dependency enrichment), and
`research/frontier-38-owner-30-alpha-step1-drift.md` (verdict for this pair:
**no-drift**; keep the empty partition/permutation, the distinct-letter
hypotheses for reversal/commuting insertion, the prescribed
ordering/repetition convention for two-line arrays, and the Schensted
displacement cases as local proof obligations).

Conflicts and deviations recorded (plan controls; none changes scope):

1. **Etingof locator.** The design's source table says "Etingof et al. §4.17,
   pp. 16–17". The actual OCW Chapter 4 file has 32 pages; §4.17 "The hook
   length formula" occupies PDF pp. 17–18 (Thm 4.53 on PDF p. 18). The manifest
   and coverage use the verified locator "PDF pp. 17–18 of the 32-page file".
2. **Distinct letters.** The design's `def-row-insertion-and-bumping-route` is
   for distinct letters, and the two-line-array theorem needs the same rule for
   repeated letters. Rather than weaken the theorem, its statement extends
   insertion/deletion to semistandard tableaux (the rule is unchanged: bump the
   leftmost strictly larger entry) and proves the extension, exactly as the
   design's item description "the row-insertion construction extends to the
   source's lexicographically ordered two-line arrays" requires.
3. **Proof method for the branching identity.** The design's
   `lem-hook-product-branching-identity` ("supplies the nontrivial finite
   identity") is Craven Proposition 1.12, proved in Craven by residues. The
   scaffold keeps the statement and the complete first-column rewriting, but
   proves the finite identity by the equivalent Lagrange-interpolation
   computation over a field (no complex analysis on a representation-theory
   page). Proof provenance is recorded as `ai-altered` with Craven's URL; the
   source proposition and its residue proof are preserved in the coverage as
   history.
4. **Chan's §7 determinant route** (Young–Frobenius formula, Lemma 7.2,
   Theorem 7.3(a)) is not used: the design's hard proof plan prescribes the
   removal-recursion route, which is what the items prove. Those headings are
   disposed `deferred` (Frobenius-characteristic page) or `out-of-scope` with
   reasons in the coverage file.
5. Item ordering follows the design's A list; `deps` were added only where a
   proof or well-definedness use requires them (checked against the actual
   statements below).

## Sources actually fetched and read

The design's four sources were re-fetched and read; two further treatments
were added for the two-line array (Knuth is primary; Martin is an independent
convention/statement check). All nine coverage entries (six treatments on the A
page, three on the B page) are fetch-stamped.

| Source | Bytes / pages / SHA-256 prefix | Sections read | Supported items |
|---|---|---|---|
| Craven, *Groups, Geometries and Representation Theory* (lecture notes) | 369,993 / 42 / `b2b190e9a1928b17` | §1.4 pp. 7–11 (Lemma 1.9, Def. 1.10, removal recursion, Lemma 1.11 with no-repetition proof, Prop. 1.12, Thm 1.13), §1.5 pp. 11–13 (Thm 1.14, Cor. 1.15) | hook definition; removal recursion; hook-product change; branching identity (statement); hook length formula; insertion; recording tableau; RSK; sum of squares; the worked example |
| Chan, *Representation Theory of Symmetric Groups* (lecture notes) | 303,971 / 40 / `8a3cac907770c66d` | §7 pp. 27–28, §8 pp. 29–30 complete | recursion statement; hook formula statement; RSK statements incl. Remark 8.3 (symmetry and involution statement, proof cited to Sagan); deletion algorithm; bijection; sum of squares |
| Schensted, *Longest Increasing and Decreasing Subsequences* (1961) | 2,719,792 / 13 / `43b255a106be8615` | Part I pp. 179–188 (definitions, Lemmas 1–7, Theorems 1–2), Part II opening pp. 189–190 | row/column insertion; standardness; Q standard; RSK bijection; basic subsequences; LIS/LDS theorem; commutation; reversal-transpose; word case |
| Knuth, *Permutations, Matrices, and Generalized Young Tableaux* (1970) | 1,984,341 / 23 / `24110cfb5d82f479` | §§2–4 pp. 711–720 complete (INSERT/DELETE, Thm 1, constructions A/B, Thm 2, inversion digraph Lemma 1, Thm 3); §§5–7 pp. 720–727 for dispositions | two-line-array correspondence; semistandard Q; transpose interchange (the proof used for the symmetry corollary); plactic/dual material declined with reasons |
| Etingof et al., *Introduction to Representation Theory*, MIT 18.712 Ch. 4 (book chapter) | 516,260 / 32 / `116dea942178e72d` | §4.17 PDF pp. 17–18 (Thm 4.53 with its determinant/Frobenius route) | hook definition and hook formula statement check; determinant route declined |
| Martin, *Lecture Notes on Algebraic Combinatorics* | 3,261,488 / 263 / `ef5b5b0165937753` | §9.10 pp. 195–200 (Def. 9.10.1, Thm 9.10.5, Cor. 9.10.6, Ex. 9.10.7–9.10.8, Prop. 9.10.9, Def. 9.10.10, gRSK (9.22)) | independent statement checks for RSK, sum of squares, row/column counts, symmetry/involutions, and the generalized two-line-array bijection |

Chan, Craven and Etingof give three independent treatments of the hook
formula; Schensted, Knuth and Martin give three of the RSK material; Knuth and
Martin independently state/prove the two-line-array correspondence. The
transpose-interchange theorem has only one complete treatment among the
sources read (Knuth Theorem 3); this is recorded as an unresolved
source-coverage observation below, not as a mathematical gap, because the
scaffold includes the digraph proof.

## Mathematical closure notes

The two hard joints were worked out before recording readiness:

1. **Hook side.** `lem-hook-product-change-under-corner-removal` proves that
   exactly the arm/leg boxes change and each by one, so
   `P(lambda)/P(lambda-x) = R(x) = prod_{arm∪leg} h/(h-1)`. The branching
   identity then (i) rewrites `R(x)` in first-column hooks using the
   no-repetition set identity
   `{h(a,1..lambda_a)} ∪ {h_{a,1}-h_{i,1}: i>a} = {1,...,h_{a,1}}` (Craven
   Lemma 1.11's argument), (ii) observes that non-corner rows contribute a zero
   factor `1+1/(h_{a+1,1}-h_{a,1}) = 0`, and (iii) proves the finite identity
   `Σ z_i Π_{j≠i}(1+1/(z_j-z_i)) = Σz_i - C(r,2)` by Lagrange interpolation
   (polynomial `g(t)=tQ(t-1)-(t-r)Q(t)`; coefficient `t^{r-1}` equals
   `C(r,2)-Σz_i`; `Q(z_i-1)/Π_{j≠i}(z_i-z_j) = -Π_{j≠i}(1+1/(z_j-z_i))`).
   With `z_i = h_{i,1}` and `Σh_{i,1} = n + C(r,2)`, the sum is `n`.
   Independent numerical verification (local, not a proof): for every
   `λ ⊢ n`, `n ≤ 10`, the two formulas for `R(x)` agree, `Σ_{x∈Rem} R(x) = n`,
   and `F(λ) = n!/P(λ)` satisfies `F(λ) = Σ_x F(λ-x)`; the corner-row
   inequality `h_{a,1}-h_{i,1} ≥ 2` (i>a) and the non-corner-row factor
   `h_{a,1}-h_{a+1,1} = 1` also check out.
2. **RSK side.** Termination (position bound `r_{i+1} ≤ r_i`), standardness of
   the output, standardness of the recording tableau, reverse deletion,
   two-sided inversion, the bijection, basic subsequences, commutation
   (Schensted's displacement cases), reversal-transpose (via the first-letter
   recursion `P(x_1,…,x_n) = x_1 → P(x_2,…,x_n)` proved from commutation), and
   the LIS/LDS theorem are all laid out in the item strategies. For the
   two-line array theorem the strategy records Knuth's full chain: INSERT and
   DELETE for generalized tableaux, Theorem 1, constructions A/B (Theorem 2),
   the inversion digraph, Lemma 1 by induction, the `D_{i+1}` construction and
   the line-swap isomorphism giving `A^T ↔ (Q,P)` (Theorem 3); the permutation
   symmetry and the involution count are then short specializations.
   Independent numerical verification: `P(w^{-1}) = Q(w)`, `Q(w^{-1}) = P(w)`
   for all permutations of size ≤ 7; `P=P` for involutions; `Σ_λ f^λ =`
   involution count and `Σ_λ (f^λ)² = n!` for `n ≤ 6`; the worked example
   tables (Craven's `(1,6,3)(2,4)` run) recomputed forward and backward.
3. **Examples.** During verification the first transcription of Craven's
   worked example in `ex-rsk-insertion-and-reverse-deletion` was found wrong
   (columns had been collapsed into rows) and was corrected in the manifest
   before the final readiness records; the corrected tables were recomputed
   independently. All other example data (`(3,2,1)` hooks and `f=16`; one-row,
   one-column and hook-shape values; the two involution runs) were checked.

No Axiom of Choice is used anywhere in the pair: every construction is finite
and canonical (no selection from nonempty families, no infinite products). No
Recorded (`proved_here: false`) result is consumed; the page is not in the
Foundations category, so the Foundational restriction is vacuous here.

**Prerequisite examination.** Every published supplier named in a `deps` array
was opened and its statement checked for direction, hypotheses, convention and
axiom strength before use: `def-partition-young-diagram-and-conjugate-partition`,
`def-young-tableau-standard-tableau-and-shape`,
`def-removable-and-addable-nodes-of-a-partition`,
`lem-largest-entry-of-a-standard-tableau-is-removable`,
`def-semistandard-tableau-and-kostka-number`,
`def-finite-symmetric-group-and-permutation-notation`,
`thm-standard-polytabloid-basis` (gives `dim_C S^λ = f^λ`),
`def-polynomial-ring-over-a-commutative-ring`,
`def-polynomial-degree-leading-coefficient-and-monic`,
`def-polynomial-evaluation-and-root`,
`prop-polynomial-degree-laws-over-a-commutative-ring`,
`thm-root-bound-for-polynomials-over-a-domain`. No published defect was found;
no published item is edited, and none is treated as a replacement for a
Recorded result.

## Checks actually run (final state, after the last manifest edit and re-record)

- `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-9.pages.json`
  → 25 item(s), 0 missing, 0 error(s), exit 0.
- `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-*.pages.json`
  → 714 item(s), 0 missing, 0 error(s), exit 0.
- `node tools/content-policy.mjs --manifest-only research/frontier-38-owner-30-batch-9.pages.json`
  → 25 scoped item(s), 0 error(s), 0 warning(s), exit 0;
  whole-run `--manifest-only research/frontier-38-owner-30-batch-*.pages.json`
  → 714 scoped item(s), 0 error(s), 0 warning(s).
- `node tools/coverage-checklist.mjs research/frontier-38-owner-30-batch-9.coverage.json --require-destination`
  → 2 page(s), 87 harvested result(s), 0 error(s), 0 warning(s), exit 0.
- `node tools/source-fetch-check.mjs --coverage research/frontier-38-owner-30-batch-9.coverage.json --stamp`
  → 9/9 source(s) fetch-verified (9 newly stamped) and 9/9 resolved, 0 drops;
  the check-mode rerun reports 9/9 fetch-verified, exit 0. Stamped page counts
  and sizes: Craven 42/369,993; Chan 40/303,971; Schensted 13/2,719,792;
  Knuth 23/1,984,341; Etingof 32/516,260; Martin 263/3,261,488.
- `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30`
  → exit 1 with 8 error lines, all `empty scaffold inventory` for other
  batches' pages; no line mentions a batch-9 item, and the batch-9 labels match
  the recomputed levels.
- `node tools/step1-decisions.mjs check --run frontier-38-owner-30`
  → 0 open rows for the batch-9 items and pages (the remaining open rows belong
  to other, still-running batches).
- `node tools/validate-plan.mjs research/plan-spec.json` → exit 0 (the NOTE
  about 289 item-less planned pages is the normal pre-splice state and includes
  this pair).
- `node tools/extcheck.mjs` → exit 0, "every recorded-not-proved statement is a
  cited remark with no proof, and every consequence is marked".

- KaTeX parse smoke test on the delivered manifest using the renderer's own
  KaTeX build (throwOnError): all 815 math segments of the 25 statements and
  strategies parse, 0 failures.

The manifest was not edited after the final readiness records; the record
hashes bind the manifest as delivered (three consumer records were re-recorded
once after a wording-precision edit to
`def-column-insertion-for-distinct-letters`, and one after the worked-example
correction; both edits pre-date the final check battery above).

## Published defects and unresolved findings

No defective published prerequisite was found. Two source-coverage
observations are recorded for Alpha/owner reconciliation and do not block the
pair:

- The permutation symmetry `P(w^{-1}) = Q(w)` is stated by Chan (Remark 8.3,
  citing Sagan Theorem 3.6.6) and by Martin (Proposition 9.10.9), but **neither
  source prints a proof**; Martin explicitly says he has not written one up.
  The scaffold's proof is Knuth's Theorem 3 (inversion digraph). That is a
  complete primary argument, but it is a single treatment among the sources
  read, so Step 5 should pay specific attention to
  `cor-rsk-symmetry-under-inversion` and its dependents. (Local numerical
  checks up to n = 7 are evidence only, not a substitute for the proof.)
- Etingof's §4.17 locator in the design is off by one page (verified PDF
  pp. 17–18, not 16–17); the verified locator is used in the artifacts.

Proof provenance for `lem-hook-product-branching-identity` is `ai-altered`
(the source's residue proof is replaced by an equivalent Lagrange-interpolation
proof); this is honest tagging, not a defect, and the source proposition and
its proof remain in the coverage history.

No owner escalation is requested. Nothing promised by the design was dropped
or weakened; the only additions are the proved claims inside existing item
strategies (the first-column rewriting, the Lagrange identity, the
first-letter column-insertion recursion, and the inversion-digraph argument),
all of which are necessary prerequisites of the contracted claims.

## Ledger and readiness closure

- `research/frontier-38-owner-30-batch-9.cross-batch-dependencies.json` is an
  empty array: this pair's only in-run prerequisites are its own A-page items,
  and every mathematical supplier is a published out-of-run item. The pair has
  no in-run consumer batches either (the pages listing it as a `requires`
  target — the B companion, `principal-series-representations-of-gl-n-over-a-finite-field`,
  `kazhdan-lusztig-bases-polynomials-and-cells`,
  `rim-hooks-and-the-murnaghan-nakayama-rule`,
  `plancherel-measure-and-asymptotic-young-diagrams` — are outside this run or
  are the companion itself).
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-38-owner-30`
  ran to completion; the unified ledger now lists batch 9 among the reviewed
  inputs with no edges touching it and no orphaned review.
- All 25 items were recorded `ready` through
  `node tools/step1-decisions.mjs record --run frontier-38-owner-30 ...` with
  their examined dependency IDs, one at a time in prerequisite order; a final
  check shows zero open batch-9 rows. These are local author readiness records,
  not independent mathematical approval: Step 3 authoring and Step 5 review
  remain required.

## Same-lane post-author repair closure

The initial scaffold preservation/closure statements above describe the
pre-author snapshot. Current local repair evidence is
`frontier-38-owner-30-batch-9-local-repair.md` and `.json`: three missing actual
supplier declarations, complete commutation and repeated-letter RSK proofs,
shorter-row prerequisite bounds, inverse/basic-subsequence consumer arguments,
and correct R_x/n=0 manifest reconciliation. Original true authored theorem
Statements are unchanged; the row-insertion Definition's false explanatory
append clause is transparently corrected and all13 direct consumers reviewed.
No new item or pair. Eight item paths edited; ten scoped readiness records
current. Parent owns shared integration and the mandatory all-item recertification.
