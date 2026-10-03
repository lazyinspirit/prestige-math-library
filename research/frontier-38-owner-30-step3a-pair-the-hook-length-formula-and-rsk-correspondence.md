# Step 3a scope review — pair `the-hook-length-formula-and-rsk-correspondence`

- Run: `frontier-38-owner-30` (stage `3a-scope`), dispatch label
  `step3a-pair-the-hook-length-formula-and-rsk-correspondence-fdb1adf336e67173`
  (the earlier identical dispatch `-7b06be4500a1956e` left no artifact).
- Role: alpha (scope reviewer only — not owner, not item author).
- A page: `the-hook-length-formula-and-rsk-correspondence` (batch 9, order
  510.051, 20 items: 5 definitions, 9 lemmas, 3 theorems, 3 corollaries).
- B page: `the-hook-length-formula-and-rsk-correspondence-examples` (batch 9,
  order 510.052, 5 examples).
- Decision: **`sufficient`** — recorded through
  `node tools/step3-decisions.mjs record-scope --run frontier-38-owner-30
  --page the-hook-length-formula-and-rsk-correspondence --decision sufficient`.
- Date: 2026-10-03. This report decides scope only. It is not an item approval,
  not a proof judgement and not an owner record. No scaffold, manifest,
  coverage or library file was edited.

## 1. Intended subject and role in the library

Controlling prose design: RG-11 in
`research/plan-representation-theory-groups-track.md` lines 719–793 (summary
row line 42; source table row line 2327; source-heading crosswalk lines
2417–2421; page-dependency row line 2718). Registry: `research/plan-spec.json`
both pages (empty item inventories pre-splice, `requires` and companion
matching the manifest); run scope: `frontier-38-owner-30-scope-ledger.json`
(pair in scope, batch 9); Step-1 drift verdict for this pair: **no-drift**
(`frontier-38-owner-30-alpha-step1-drift.md` lines 169–172; keep the empty
partition/permutation, the distinct-letter hypotheses and the two-line-array
ordering convention). Constructed scaffold:
`frontier-38-owner-30-batch-9.pages.json` with coverage
`frontier-38-owner-30-batch-9.coverage.json` and notes
`frontier-38-owner-30-batch-9.notes.md`.

Intended subject: hook lengths and the Frame–Robinson–Thrall hook-length
formula by the removable-node deletion recursion, and the Robinson–Schensted
correspondence: row insertion and the bumping route, the recording tableau,
reverse deletion with a two-sided inverse, the permutation bijection, basic
subsequences, the LIS/LDS theorem, row/column insertion commutation, the
reversal-transpose theorem, the semistandard two-line-array correspondence,
inversion symmetry, the sum-of-squares identity and the involution count, with
five worked examples on the B page. The design deliberately excludes the
Young–Frobenius/determinant route (owned later by the Frobenius-characteristic
page) and Schensted's enumeration theorem (owned later by the Plancherel page).

Role in the library (supplier). Exact declared consumer imports were checked
against the consumer plans:

- KL-1 `kazhdan-lusztig-bases-polynomials-and-cells` imports
  `thm-robinson-schensted-correspondence` and
  `cor-rsk-symmetry-under-inversion` for
  `lem-left-cell-equivalence-forces-equality-of-recording-tableaux-in-type-a`
  (`research/plan-kazhdan-lusztig-track.md` lines 45–47;
  `research/kl-cross-library-reconciliation-2026-09-08.md` line 82). Both are
  in the A inventory.
- SYMR-4 `rim-hooks-and-the-murnaghan-nakayama-rule` consumes
  `def-hook-arm-leg-and-hook-length` and `thm-hook-length-formula`
  (`research/symmetric-group-planning/proposed-inventory.md` lines 105, 112).
  Both present.
- SYMR-16 `plancherel-measure-and-asymptotic-young-diagrams` consumes
  `thm-hook-length-formula`, `thm-robinson-schensted-correspondence`,
  `cor-sum-of-squares-of-standard-tableau-numbers` and
  `thm-schensted-longest-increasing-and-decreasing-subsequence-theorem`
  (same inventory, lines 474–476, 484, 499; `plan-symmetric-group-
  representations-track.md` lines 65–66, 93). All present.
- RG-13 `principal-series-representations-of-gl-n-over-a-finite-field` has a
  page-level `requires` edge only (plan line 2720); no item-level import of
  this pair is declared anywhere.
- The B companion is a dependency leaf. No other batch of this run depends on
  any item of this pair (checked mechanically; see §4).

## 2. Design-to-manifest mapping

All 20 designed A item ids and all 5 designed B item ids are present, in
design order, with the designed kinds and roles:

| # | A item (kind) | design row | note |
|---|---|---|---|
| 1 | `def-hook-arm-leg-and-hook-length` (def) | RG-11 A1 | anchor off-by-one and hook product $P(\lambda)$ |
| 2 | `lem-standard-tableau-removal-recursion` (lemma) | A2 | $f^\lambda=\sum_x f^{\lambda-x}$, $f^\varnothing=1$ |
| 3 | `lem-hook-product-change-under-corner-removal` (lemma) | A3 | arm/leg boxes change by $-1$; ratio $R(x)$ |
| 4 | `lem-hook-product-branching-identity` (lemma) | A4 | $\sum_x R(x)=n$ |
| 5 | `thm-hook-length-formula` (theorem) | A5 | includes $n=0,1$ and $\dim_{\mathbb C}S^\lambda=f^\lambda$ |
| 6 | `def-row-insertion-and-bumping-route` (def) | A6 | termination proved in the definition |
| 7 | `lem-row-bumping-route-monotonicity` (lemma) | A7 | route monotone, output standard, new box addable |
| 8 | `lem-robinson-schensted-recording-tableau-is-standard` (lemma) | A8 | well-definedness of $Q$ |
| 9 | `def-reverse-row-deletion` (def) | A9 | reverse bumping from a removable box |
| 10 | `lem-row-insertion-and-reverse-deletion-are-inverse` (lemma) | A10 | both directions |
| 11 | `thm-robinson-schensted-correspondence` (theorem) | A11 | constructive inverse, no cardinality count |
| 12 | `lem-first-row-insertion-basic-subsequences` (lemma) | A12 | both LIS bounds |
| 13 | `def-column-insertion-for-distinct-letters` (def) | A13 | transpose form and termination |
| 14 | `lem-row-and-column-insertion-commute` (lemma) | A14 | Schensted's displacement cases |
| 15 | `lem-word-reversal-transposes-the-insertion-tableau` (lemma) | A15 | no recording-tableau assertion |
| 16 | `thm-schensted-longest-increasing-and-decreasing-subsequence-theorem` (thm) | A16 | $\lambda_1$, $\lambda'_1$, empty word $0$ |
| 17 | `thm-rsk-correspondence-for-two-line-arrays` (theorem) | A17 | lexicographic two-line arrays, semistandard $P,Q$, transpose clause, word case |
| 18 | `cor-rsk-symmetry-under-inversion` (corollary) | A18 | $P(w^{-1})=Q(w)$, $Q(w^{-1})=P(w)$ |
| 19 | `cor-sum-of-squares-of-standard-tableau-numbers` (corollary) | A19 | $\sum_\lambda(f^\lambda)^2=n!$ |
| 20 | `cor-involutions-are-counted-by-standard-tableaux` (corollary) | A20 | $w=w^{-1}\iff P=Q$; count $\sum_\lambda f^\lambda$ |
| B1 | `ex-hook-table-for-shape-three-two-one` | B1 | hooks, $45$, $f=16$, recursion check |
| B2 | `ex-hook-lengths-for-row-column-and-hook-shapes` | B2 | $(n)$, $(1^n)$, $(n-1,1)$ |
| B3 | `ex-rsk-insertion-and-reverse-deletion` | B3 | full run for $(1\,6\,3)(2\,4)$ |
| B4 | `ex-rsk-for-involutions` | B4 | $P=Q$ examples and $n=3$ count |
| B5 | `ex-empty-and-singleton-rsk-boundaries` | B5 | $n=0,1$ conventions |

No designed item is dropped, renamed to another claim or weakened, and no item
beyond the design list was minted. Orders, companion pointers and both
`requires` lists match the plan and the scope ledger (A requires the published
`young-diagrams-tableaux-and-permutation-modules`,
`specht-modules-and-the-irreducibles-of-the-symmetric-group` and
`the-branching-rule-and-the-young-graph`; B requires only the A page). Page
sizes 20 and 5 are far below the 100-item ceiling. The design-to-manifest
deltas recorded in the batch notes are proof-route or convention details
inside designed claims, not scope changes:

1. Etingof locator corrected to PDF pp. 17–18 of the 32-page chapter file (the
   design's table said pp. 16–17); the verified locator is used.
2. Repeated letters: the two-line-array theorem states the insertion/deletion
   extension to arbitrary letters inline (the design requires exactly this
   extension); the distinct-letter hypotheses of the commutation and reversal
   lemmas are kept as the drift review instructs.
3. `lem-hook-product-branching-identity` proves the finite identity by
   Lagrange interpolation instead of Craven's residue computation (proof
   provenance `ai-altered`; the source proposition stays in the coverage).
4. Chan's determinant route (Remark 7.1, Lemma 7.2, Theorem 7.3(a)) and
   Schensted's Theorem 3 are `deferred` with destinations
   `frobenius-characteristic-and-the-symmetric-group-character-dictionary`
   and `plancherel-measure-and-asymptotic-young-diagrams`; Knuth's dual and
   plactic sections are `out-of-scope` with reasons. None of these is needed
   by any designed claim of the pair.

## 3. Source coverage

`frontier-38-owner-30-batch-9.coverage.json` carries 9 fetch-stamped source
entries (6 on A: Craven, Chan, Schensted, Knuth, Etingof, Martin; 3 on B:
Craven, Chan, Martin) with byte counts, page counts and SHA-256 prefixes, and a
`reading_verification` paragraph per entry. 87 harvested source headings are
all disposed: 53 `included`, 19 `inline`, 4 `already-published`, 8
`out-of-scope` with reasons, 3 `deferred` to live planned pages. I re-ran the
mechanical checks on the delivered artifacts:

- `node tools/source-fetch-check.mjs --coverage ...batch-9.coverage.json` →
  9/9 fetch-verified, 9/9 resolved, exit 0 (check mode; stamps already present).
- `node tools/coverage-checklist.mjs ... --require-destination` → 2 pages, 87
  results, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs ...batch-9.pages.json` → 25 items, 0 missing,
  0 errors.
- `node tools/content-policy.mjs --manifest-only ...batch-9.pages.json` → 25
  items, 0 errors, 0 warnings.

The design's three named treatments (Chan §§7–8, Craven §§1.4–1.5, Etingof
§4.17) are all present; Schensted, Knuth and Martin were added to cover the
2026-09-07 enrichment (the five Schensted joints) and the two-line-array
material, and independently state or prove those claims. Honest uncertainty
carried from the batch notes and not resolved by me: the permutation symmetry
$P(w^{-1})=Q(w)$ is stated without proof by Chan (Remark 8.3) and Martin
(Proposition 9.10.9), so Knuth's Theorem 3 is the single complete proof among
the sources read; this is a Step-5 redundancy concern for
`cor-rsk-symmetry-under-inversion` and its dependents, not a scope omission
(the claim itself is designed and is carried locally). I did not re-download
or re-read the six full PDFs in this review; I verified their stamps and
dispositions and checked the manifest statements and published interfaces
directly, so the scope assessment below does not rest on a proof
re-verification. Spot recomputation of the B-page hook table and both RSK runs
confirms the examples exercise the designed conventions.

## 4. Prerequisite examination (unmet-prerequisite check)

All 30 distinct `deps` ids across the two pages resolve: 18 are this pair's own
in-run A items, and 12 are published item files, every one with
`status: published`. The load-bearing published interfaces were opened and
checked for claim direction and hypotheses:
`thm-standard-polytabloid-basis` (basis of standard polytabloids, hence
$\dim_{\mathbb C}S^\lambda=f^\lambda$ — exactly the dimension clause of the
hook theorem), `def-semistandard-tableau-and-kostka-number` (semistandard
tableaux and content counts — the objects of the two-line-array theorem),
`def-removable-and-addable-nodes-of-a-partition` (row form of
$\operatorname{Rem}$/$\operatorname{Add}$, including
$\operatorname{Rem}(\varnothing)=\varnothing$),
`def-young-tableau-standard-tableau-and-shape`,
`lem-largest-entry-of-a-standard-tableau-is-removable`,
`def-partition-young-diagram-and-conjugate-partition`,
`def-finite-symmetric-group-and-permutation-notation` (its one-line form is
$0$-based; the scaffold's explicit $\sigma(i)+1$ identification is
consistent), and the polynomial interface
(`def-polynomial-ring-over-a-commutative-ring`,
`def-polynomial-degree-leading-coefficient-and-monic`,
`def-polynomial-evaluation-and-root`,
`prop-polynomial-degree-laws-over-a-commutative-ring`,
`thm-root-bound-for-polynomials-over-a-domain`) used for the
Lagrange-interpolation step. No consumed item is a `proved_here: false`
Recorded result. The three page-level `requires` targets are published pages
in `library/representation-theory/`.

Dependency records: `frontier-38-owner-30-batch-9.cross-batch-dependencies.json`
is `[]`; the unified `frontier-38-owner-30-cross-batch-dependencies.json` lists
all 30 batches reviewed and 0 edges touching either page or any of the 25 item
ids; a direct scan of all other current batch manifests finds no consumer of
this pair's items. No consumer page of §1 is built yet, but each declared
import was matched to an item present in this scaffold. **No unmet
prerequisite was found** (confirmed gaps: none; residual uncertainty: none
material to scope).

## 5. Scope decision

The planned definitions, results and examples adequately cover the intended
subject of RG-11: the hook-length formula with its deletion recursion and
finite identity, and the RSK correspondence in the permutation, word and
two-line-array forms, with the LIS/LDS, symmetry, sum-of-squares and involution
consequences and five boundary/worked examples. Source coverage is complete
and mechanically validated, all prerequisites are published or local to the
pair, and no promised claim is missing or weakened. Decision: **`sufficient`**.
No owner action is requested; the only item carried forward is the Step-5
single-treatment note for the inversion-symmetry proof in §3.
