# Step 3a scope review: pair `sl2-r-principal-and-complementary-series`

- Run `frontier-43-complex-representation-15`, stage `3a-scope`, dispatch label
  `step3a-pair-sl2-r-principal-and-complementary-series-f96338edc7fac0e6`
  (two further task files for this pair, `...-aee0239f831d5136` and
  `...-8b2b97ce44f03fb6`, are byte-identical to this dispatch; no separate
  artifact is owed for them).
- Role alpha, scope reviewer only. No item approval, no owner record, no edit
  to any scaffold, manifest, coverage, plan, item, library or engine file. The
  only writes made are this report and the Step-3a review receipt below.
- A page `sl2-r-principal-and-complementary-series` (batch 3, order 1236;
  16 items: 3 definitions, 5 lemmas, 7 theorems, 1 corollary; item dependency
  levels 0–9, maximum on the corollary). B page
  `sl2-r-principal-and-complementary-series-examples` (order 1237; 4 items:
  3 examples, 1 counterexample; levels 2, 5, 9, 9).
- Batch 3 holds only this pair, so no other pair shares its manifest files.
- Decision: **`sufficient`**, recorded through
  `node tools/step3-decisions.mjs record-scope --run
  frontier-43-complex-representation-15 --page
  sl2-r-principal-and-complementary-series --decision sufficient` with the
  scope evidence and this report's path in the reason; the current-hash review
  closes the pair in `tools/step3-decisions.mjs check --phase scope`. The owner
  retains the authority to proceed, merge or enrich (a merger or enrichment
  stays blocked until applied and an owner `proceed` is recorded for the
  resulting scope), and any change to the pair's id/kind/title/statement
  inventory reopens this decision.
- Date 2026-10-07. Scope only: no proof-correctness judgement, no source
  re-reading claim beyond the checks listed in section 6, no scaffold edit.

## 1. Intended subject and role in the library

Controlling prose design: the RG-28 block of
`research/plan-representation-theory-groups-track.md` — track index row L61
("Iwasawa model, intertwiners, unitarity ranges, reducibility points"), section
L1967–L2014 (`Requires` L1971–L1974, A-page item table L1981–L1996, hard proof
plan L1998–L2005, B-page item table L2009–L2014), design source matrix L2392
and per-hypothesis crosswalk L2550–L2554. `research/plan-spec.json` rows 1236
and 1237 agree with the manifest on ids, kinds, titles, companions and
`requires` (the plan-spec item inventories are empty; the batch manifest is the
item contract, as for every run page).

Intended subject: the representation theory of the one concrete noncompact
group `G = SL_2(R)`. The pair fixes the Iwasawa/minimal-parabolic data and
normalized induction `I_{eps,nu} = Ind_P^G(sgn^eps (x) e^nu (x) 1)` with its
single half-modular shift; proves the KAN diffeomorphism and Haar formula;
builds the compact picture on parity-eps functions on the circle with the
Iwasawa-cocycle action; identifies the one-dimensional K-types `f_n`,
`n = eps (mod 2)`, and the derived action with the ladder coefficients
`(1+nu+-n)/2`; locates irreducibility off the parity-compatible exceptional
lattice `W_eps` and the composition structure at those parameters; constructs
the standard intertwiner `A(nu)` with meromorphic continuation, K-type
diagonalisation, the explicit eigenvalue recurrence/closed form and its exact
vanishing pattern; proves unitarity of the unitary principal series
(`nu` in `iR`) and of the spherical complementary series `0 < |nu| < 1` with
the exact endpoints `nu = +-1` and the sharpness of the interval; proves
`I_{eps,nu} = I_{eps,-nu}` off `W_eps`; and records the Fell/weak-containment
limit of the spherical complementary family to the trivial class.

Intended role: RG-28 is the track's concrete noncompact nonabelian case study
(track plan L61, L122). It is the declared supplier of RG-29's property (T)
failure (`prop-sl2-r-does-not-have-property-t` and
`cex-sl2-r-complementary-series-destroys-property-t`, batch 4) and of RG-30's
unitary dual/temperedness/Plancherel layer
(`sl2-r-discrete-series-and-unitary-dual`, batch 5). The Step-1 drift verdict
for this page
(`research/frontier-43-complex-representation-15-alpha-step1-drift.md`
L94–L101) is **no-drift**; the design's `RL-n` placeholder is resolved to
published highest-weight/Verma and Harish–Chandra items.

## 2. Design-to-manifest mapping

All 14 designed A-page item ids are present with design-matching statements,
and all 4 designed B-page ids are present:

| design item (A) | manifest status |
|---|---|
| `def-iwasawa-and-minimal-parabolic-data-for-sl2-r` | present |
| `thm-iwasawa-decomposition-for-sl2-r` | present |
| `def-normalized-principal-series-i-epsilon-nu` | present |
| `thm-compact-picture-of-the-sl2-principal-series` | present |
| `lem-k-type-decomposition-of-the-sl2-principal-series` | present |
| `lem-sl2-raising-and-lowering-formulas-in-the-compact-picture` | present |
| `thm-generic-irreducibility-and-the-exceptional-parameter-lattice` | present |
| `def-standard-intertwining-operator-for-sl2-r` | present |
| `thm-meromorphic-continuation-and-intertwining-identity-for-a-nu` | present |
| `lem-k-type-eigenvalue-recurrence-for-the-sl2-intertwiner` | present |
| `thm-unitarity-of-the-sl2-unitary-principal-series` | present |
| `thm-unitarity-of-the-sl2-complementary-series` | present |
| `thm-equivalence-i-epsilon-nu-is-i-epsilon-minus-nu` | present |
| `cor-complementary-series-converge-to-the-trivial-representation` | present |

The manifest adds two A-page items that the design's hard proof plan requires
but does not list separately:
`lem-k-finite-vectors-detect-nonzero-closed-invariant-subspaces` (global
irreducibility of the compact-picture `G`-representation from
`(g,K)`-irreducibility) and
`lem-dual-pairing-between-opposite-principal-series-parameters` (the `G`-stable
smooth pairing that anchors the weighted forms). Both are supporting, not
scope-widening. The B page carries the four designed examples/counterexample
exactly: Iwasawa coordinates and Haar density; first K-types and ladder
coefficients; intertwiner eigenvalue positivity in the spherical range; and the
sharpness counterexample beyond the unitary interval.

Parameter conventions are pinned inside the pair and reconciled with the
primary source: the library's `nu` is Kerr's `lambda` (ladder coefficients
`(1+nu+-n)/2`, exceptional lattice `W_0` = odd integers, `W_1` = even
integers), and the library Casimir value `(nu^2-1)/8` is the Killing-form
normalization of Kerr's `(1-lambda^2)/4`, recorded in the batch-3 note with its
consumer agreement (batch-5 items use the same normalization). The
design/manifest `requires` divergence (design: RG-23–RG-25 + `RL-n`; manifest:
`induced-unitary-representations-of-locally-compact-groups`,
`mackeys-imprimitivity-theorem`,
`group-c-star-algebras-and-the-fell-unitary-dual`,
`harish-chandra-isomorphism-casimir-and-central-characters`,
`verma-modules-and-shapovalov-forms`) is the recorded design/plan conflict
resolved in favour of the plan; all five are published pages.

## 3. Source coverage

`research/frontier-43-complex-representation-15-batch-3.coverage.json` records
one coverage page (the A page), 4 sources and 34 harvested result rows with 0
errors/0 warnings: 24 `included`, 2 `already-published`, 5 `deferred`, 2
`out-of-scope`, 1 `inline`. Every deferred row is explicitly mapped to the
companion RG-30 page of this run (Kowalski Prop 7.4.3(4) regular-representation
atoms and the Bargmann classification; Etingof Theorem 9.3 classification, the
discrete-series disk realizations, and Exercise 9.6's kernel model), i.e. to
material the RG-28 design does not promise. The two `out-of-scope` rows carry
reasons (Kowalski's no-finite-dimensional-unitary-representation proposition;
Knapp's general semisimple theory).

Independently re-verified in this review (2026-10-07): all four source URLs
resolve and their `sha256_16` stamps reproduce exactly — Kerr
`153f341424f965e4` (562 553 bytes), Kowalski `f63d9c26ec965b9c` (1 838 207),
Etingof `421fa52f61680e63` (3 494 075), Knapp `5ba1b91db9174613` (5 047 479).
I read the primary source sections directly rather than trusting the harvest
rows: Kerr §2, printed pp. 10–12 (ladder relations (2.6), Casimir Exercise
2.5, Examples 2.6–2.7 with the finite-dimensional quotient and the `lambda` in
`Z-` reversal, the unitarity list containing "complementary series `I_{+,l}`,
`0<|l|<1` — we will not treat these", and Exercise 2.8(i)–(iii) for `J` and its
failure exactly on the opposite-parity integer lattice); Etingof §9.3, printed
pp. 51–53 (the positivity criterion and Theorem 9.3 listing the discrete
series/limits, the unitary principal series, the complementary series
`P_+(s)`, `0<|s|<1`, and the trivial representation, with
`P_+(s) = P_+(-s)` and no other isomorphisms). Both confirm the pair's
convention choices and its claim inventory.

The coverage record is honest about its limits: the complementary-series
construction is not treated in Kerr, and the
`thm-unitarity-of-the-sl2-complementary-series` row says so, attributing only
the unitarity list/adjoint criterion to the sources and the complete
construction to the local proof plan; the
`cor-complementary-series-converge-to-the-trivial-representation` row is
`inline` because Etingof Exercise 9.5 is a general coefficient exercise, not a
printed proof of the fixed-parameter statement. The B page (three examples and
one counterexample) has no coverage row in this file; each of its four items
carries its own Kerr/Etingof reference and locator in the manifest. That
pattern matches several other batches of this run and is non-blocking, but the
Step-5a source reader should treat B-page backing as item-level evidence.

Two non-blocking observations for the owner: (i) the design's "source backing
read" line names Kowalski/Lang/Kerr, while the manifest's coverage uses
Kerr/Kowalski/Etingof/Knapp and Lang is absent — the material is covered by up
to four independent treatments, so this is a substitution of recorded
treatments, not a coverage gap; (ii) the two advisory `redundant-prereq`
warnings reported by `validate-plan` for this page (RG-28 reaching
`induced-unitary-representations-of-locally-compact-groups` through
`mackeys-imprimitivity-theorem`, and
`harish-chandra-isomorphism-casimir-and-central-characters` through
`verma-modules-and-shapovalov-forms`) are owned by the shared plan and were
already recorded as such in the batch-3 note.

## 4. Prerequisites and dependency records

Prerequisite scan over all 20 pair items: 73 distinct dependency ids, of which
58 are published library items and 15 are in-run items on this same A page;
**0 unresolved**. Every published dependency is listed on exactly one page (no
double-hosting), every hosting page has `status: published`, and every hosting
page lies inside the 371-page closure recorded for this page in
`research/frontier-43-complex-representation-15-drift-evidence.json`. All five
page-level `requires` are published:

- `library/representation-theory/induced-unitary-representations-of-locally-compact-groups.md`
  (supplies `def-covariant-function-model-of-unitary-induction`,
  `lem-radon-nikodym-cocycle-of-a-homogeneous-measure`,
  `thm-unitary-induction-from-a-closed-subgroup`, the density/unitarity/
  continuity lemmas and the independence theorem — 9 of the 58 deps);
- `library/representation-theory/mackeys-imprimitivity-theorem.md`;
- `library/representation-theory/group-c-star-algebras-and-the-fell-unitary-dual.md`
  (dual, Fell topology, weak containment and its trivial-representation
  characterization — 5 deps, used by the Fell corollary);
- `library/lie-theory/harish-chandra-isomorphism-casimir-and-central-characters.md`
  (Casimir element, centrality, eigenvalue on highest-weight modules, central
  characters and the highest-weight classification — 5 deps);
- `library/lie-theory/verma-modules-and-shapovalov-forms.md`.

Remaining published deps resolve to the expected published pages (Haar measure,
modular function, rho functions, real Gamma/Beta, Fourier series, compact-group
decomposition, manifolds/derivatives, ZFC/AC). The B page's only page-level
requirement is its own A page. No dependency points forward into batch 4 or
batch 5, and no dependency lies outside the declared closure.

Cross-batch dependency records: the aggregate ledger
`research/frontier-43-complex-representation-15-cross-batch-dependencies.json`
lists 193 edges, `unreviewed_batches: []`, `orphaned_reviews: []`; 56 of them
have a supplier on this A page (batch-4 and batch-5 consumers), each carrying a
review row in the consumer batch's cross-batch input. All reviews are in the
expected Step-3a state (`open` until the supplier items are authored). Reading
the consumer statements confirms the A page's planned outputs are exactly the
interfaces they need: batch 4 uses the compact-uniform convergence
`phi_nu -> 1` (unit `f_0`), the Fell convergence and the absence of an
invariant vector (generic irreducibility plus non-triviality); batch 5 uses
`def-normalized-principal-series-i-epsilon-nu`, the irreducibility/lattice
theorem, the two unitarity theorems, the equivalence theorem and the Fell
corollary.

Step-1 readiness: `node tools/step1-decisions.mjs check --run
frontier-43-complex-representation-15` reports 371 items, 371 `ready`, closed,
work empty, including the previously repaired
`thm-unitarity-of-the-sl2-complementary-series` and the ladder-normalization
items, whose records cite the exact owner disposition. **No unmet prerequisite
was found**: nothing consumed by this pair is absent from both the published
library and the current scaffold.

## 5. Uncertainty, clarity notes and non-scope observations

1. **Exceptional-parameter sentence in the complementary-series theorem.**
   The final paragraph of `thm-unitarity-of-the-sl2-complementary-series`
   states that at positive even `nu = 2m` the tail weights `|n| >= 2m+1`
   vanish and at negative even `nu = -2m` the central weights `|n| <= 2m-1`
   vanish. I checked these against the item's own recurrence
   `(1+nu+n)b_{n+2} = (n+1-nu)b_n` and against
   `lem-k-type-eigenvalue-recurrence-for-the-sl2-intertwiner`'s vanishing
   pattern: they are correct **for the odd-parity class** `eps = 1` (for which
   `nu = +-2m` lies in `W_1` and is exceptional), which is the class the
   immediately preceding sentences establish. They would be false if misread
   as statements about the spherical weights `a_{+-2j}`, where `nu = +-2m` is
   non-exceptional, nothing vanishes, and the form is the unique nondegenerate
   (indefinite) invariant form. Because the paragraph switches from the
   `a`-weights to the odd-class recurrence without restating the parity, I
   recommend the Step-3b author write "for the odd-parity K-type class"
   explicitly. Clarity only: no scope consequence and no statement change is
   required by this review.
2. **Definition with deferred well-definedness.** The statement of
   `def-standard-intertwining-operator-for-sl2-r` asserts absolute convergence,
   K-finiteness and K-diagonalisability, while its `deps` are the compact-picture
   items and its strategy defers those assertions to
   `lem-k-type-eigenvalue-recurrence-for-the-sl2-intertwiner` and
   `thm-meromorphic-continuation-and-intertwining-identity-for-a-nu`, which
   depend on the definition. No cycle exists in the declared graph and the
   convergence estimate is elementary from the compact picture; this is an
   authoring-order note for Step 3b, not a prerequisite finding.
3. **Source substitution and B-page coverage row** — see section 3; both are
   non-blocking and were left for the owner/Step-5a rather than treated as
   omissions.

## 6. Checks run

- `node tools/coverage-checklist.mjs research/frontier-43-complex-representation-15-batch-3.coverage.json --require-destination`
  → 1 page, 34 harvested results, 0 errors, 0 warnings (exit 0).
- `node tools/manifest-integrity.mjs --run frontier-43-complex-representation-15`
  → 30 pages owed, 30 in the manifests, no scope drift (exit 0).
- `node tools/manifest-deps.mjs research/frontier-43-complex-representation-15-batch-3.pages.json`
  → 20 items, 0 normalized, 0 errors (exit 0).
- `node tools/item-dependency-levels.mjs check --run frontier-43-complex-representation-15`
  → 371 items across 30 pages, maximum level 28 (exit 0).
- `node tools/step1-decisions.mjs check --run frontier-43-complex-representation-15`
  → 371 ready, closed, work empty (exit 0).
- `node tools/frontier-item-gate.mjs --run frontier-43-complex-representation-15 --tool validate-plan`
  → declared page order acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies or unresolved ids reported; exit 0 (the
  selector files were already current and unchanged by this run). The batch-3
  note records the corresponding item-level `validate-plan` pass with this
  manifest's item lists; the item-level content checks reproduced here are
  `manifest-deps` plus `item-dependency-levels`.
- Independent scans run for this report: dependency resolution over all 20
  items (73 ids; published/in-run/unresolved split); published-hosting and
  requires-closure scan via the drift-evidence closure; cross-batch edge and
  review-row scan over the aggregate ledger; independent re-fetch and
  `sha256_16` comparison for all 4 coverage sources; direct reads of Kerr §2
  (printed pp. 10–12) and Etingof §9.3 (printed pp. 51–53) from the fetched
  PDFs.
- Not done (out of scope here): no proof audit, no full-text read of
  Kowalski/Knapp, no re-derivation of the Fourier/intertwining arguments. No
  item approval, owner record or gate is implied by this report.

## 7. Scope decision

**`sufficient`**: the planned definitions, results and examples adequately
cover the intended subject. The A page implements every designed RG-28 item
(plus two supporting lemmas required by the design's hard proof plan), the B
page carries all four designed examples/counterexample, the source coverage
matches the design's backing with four independently re-verified fetch stamps
and explicit deferrals to the companion page, and every dependency resolves to
the published library or to this same page's scaffold, inside the declared
`requires` closure. No omitted topic was found that would justify enrichment or
a pair merger, and no unmet prerequisite was found to flag.

Recorded via `node tools/step3-decisions.mjs record-scope --run
frontier-43-complex-representation-15 --page
sl2-r-principal-and-complementary-series --decision sufficient` with the scope
evidence and this report's path in the reason. The pair is closed in the
engine's Step-3a scope check on this current-hash review; the owner keeps full
authority to amend, merge or enrich the scope, and nothing in this report is an
item approval or owner decision.

## Appendix: inventory bound to this decision

A page `sl2-r-principal-and-complementary-series` (16 items):
`def-iwasawa-and-minimal-parabolic-data-for-sl2-r`,
`thm-iwasawa-decomposition-for-sl2-r`,
`def-normalized-principal-series-i-epsilon-nu`,
`thm-compact-picture-of-the-sl2-principal-series`,
`lem-k-type-decomposition-of-the-sl2-principal-series`,
`lem-sl2-raising-and-lowering-formulas-in-the-compact-picture`,
`lem-k-finite-vectors-detect-nonzero-closed-invariant-subspaces`,
`thm-generic-irreducibility-and-the-exceptional-parameter-lattice`,
`def-standard-intertwining-operator-for-sl2-r`,
`lem-k-type-eigenvalue-recurrence-for-the-sl2-intertwiner`,
`lem-dual-pairing-between-opposite-principal-series-parameters`,
`thm-meromorphic-continuation-and-intertwining-identity-for-a-nu`,
`thm-unitarity-of-the-sl2-unitary-principal-series`,
`thm-unitarity-of-the-sl2-complementary-series`,
`thm-equivalence-i-epsilon-nu-is-i-epsilon-minus-nu`,
`cor-complementary-series-converge-to-the-trivial-representation`.

B page `sl2-r-principal-and-complementary-series-examples` (4 items):
`ex-iwasawa-coordinates-and-haar-density-on-sl2-r`,
`ex-first-k-types-and-ladder-coefficients-in-i-epsilon-nu`,
`ex-intertwiner-eigenvalues-in-the-spherical-complementary-range`,
`cex-the-complementary-form-loses-positivity-beyond-the-unitary-interval`.

The scope receipt stores the hash of the pair's current
id/kind/title/statement inventory; any later change to those inputs reopens
this scope decision and requires a fresh owner `proceed`.
