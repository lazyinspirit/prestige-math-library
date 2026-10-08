# Step 3a scope review — `divisors-riemann-roch-and-duality`

Run: `frontier-43-complex-representation-15` · Batch: 10 · Role: alpha
(scope only; no item or proof approvals, no owner records, no scaffold edits)

Pair under review:

- A page `divisors-riemann-roch-and-duality` (order 1612, 16 items),
- B page `divisors-riemann-roch-and-duality-examples` (order 1613, 5 items).

**Decision: `sufficient`.** The A inventory realizes the controlling design
(with the one design-recorded move to the CA-RS-H page), the B inventory
realizes the design's companion list, every planned prerequisite resolves to a
published item or to the scaffolded batch-9 Hodge page, and the four harvested
treatments are live and covered. No merger and no enrichment are needed. One
naming-contract discrepancy against the design's exact B inventory (§7.1) and
three McMullen locator labels (§7.2) are recorded for the owner; neither is a
scope omission. Step 3b may author this pair as a scope.

## 1. Review basis

Files read for this review:

- `research/frontier-43-complex-representation-15-batch-10.pages.json`
  (21 items), `.coverage.json`, `.notes.md`,
  `.cross-batch-dependencies.json` (17 rows);
- controlling design `research/plan-complex-analysis-track.md`: the CA-RS-2
  section (L4002–L4045, table + companion + sources/proof route), the direct
  requirements table (L5461), the consumer/Phase-2 map (L5537–L5573), and the
  exact-inventory section M.1/M.2 (L5820–L5905); the earlier Hodge-page
  reconciliation (L5472–L5480);
- `research/plan-spec.json` entries orders 1612/1613 (ids, category,
  companion, `requires`, empty `items` arrays) and the plan rows for all seven
  required pages;
- `research/frontier-43-complex-representation-15-owner-authoring-direction.md`
  (no batch-10 provision; its Beltrami/RG-26/29/30 clauses do not touch this
  pair), the drift review
  `research/frontier-43-complex-representation-15-alpha-step1-drift.md`
  (this page: `VERDICT: no-drift`, "No additional prerequisite is missing"),
  the drift-evidence row for this page, the run scope ledger, the derived
  frontier ledger `…-cross-batch-dependencies.json`, the batch-9 manifest and
  its five supplier items, and the batch-11 manifest consumer items;
- published items named on this page (spot-read, listed in §4/§6).

No owner `proceed`/merge/enrich record exists for this pair; nothing was
assumed. No scaffold, item, page or other pair was edited.

## 2. Inventory versus the design

**A page.** The manifest's 16 A ids equal the design's exact 17-id CA-RS-2
table (L4004–L4045) minus exactly the move the design itself records in M.1
item 3 (L5793–L5798): `def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface`
is placed first on the CA-RS-H page (order 1610, earlier in-run) and is
consumed here. I verified this programmatically: the manifest A list is
exactly `design_ids − {line-bundle id}` in the design's order, with no missing
or extra id. The design's one-line statements are realized as the item
statements (divisors/orders/linear equivalence; `O(D)`; Čech `H¹`;
Čech–Dolbeault comparison; finiteness; point-divisor step; `χ(O_X)=1−g`;
residue pairing; nondegeneracy; Serre duality; Riemann–Roch; prescribed
principal parts; existence of a meromorphic function; `ℙⁿ(ℂ)`; linear-system
map; projective embedding).

**B page.** Five items, one per design companion group: sphere + torus
divisors/Riemann–Roch; hyperelliptic canonical divisors; low-degree
Riemann–Roch; a failed principal-parts problem detected by residues; an
explicit linear system (Veronese) on the sphere. This is exactly the design
`Companion` list (L4038–L4039), and the "counterexample-like" item is the
failed principal-parts example (B4), matching the design's intent.

**One discrepancy, non-blocking for scope (§7.1):** the design's M.2 list
(L5901–L5905) states the binding *exact* B ids; the scaffold used four
paraphrased ids (and one exact match). Content maps 1:1; see §7.1 for the
exact ids and the recommended owner action.

The plan's `requires` for the A page is preserved verbatim (7 pages); plan and
design otherwise agree, as the batch notes record, and `plan-spec.json`'s
empty item arrays mean the scaffold displaces no plan row.

## 3. Subject coverage

The intended subject — divisors, line bundles, Čech/Dolbeault cohomology,
Serre duality, Riemann–Roch, prescribed principal parts, and the
linear-system/projective-embedding interface for compact Riemann surfaces —
is covered by the planned definitions, results and examples:

- **Definitions:** divisor/degree/principal/canonical divisor/linear
  equivalence and `L(D)` (A1); `O(D)` with canonical section, functoriality
  and choice-independence (A2); Čech `H¹` of `O_X(E)` on finite good covers
  as a bridge to the published Čech construction (A3); `ℙⁿ(ℂ)` and its
  holomorphic charts, lines and projective linear maps (A14).
- **Results:** Čech–Dolbeault comparison and cover-independence (A4);
  finite-dimensionality of `H⁰,H¹` and the notation `ℓ,i,χ` (A5); the
  point-divisor six-term sequence and `χ(O(D+p))=χ(O(D))+1` (A6); the
  cut-system computation `χ(O_X)=1−g` (A7); residue pairing with the
  residue formula for Mittag-Leffler representatives (A8); nondegeneracy
  (A9); Serre duality `H¹(X,O(D))* ≅ H⁰(X,K−D)` (A10); Riemann–Roch
  `ℓ(D)−ℓ(K−D)=deg D+1−g` (A11); the prescribed-principal-parts solvability
  criterion (A12); existence of a nonconstant meromorphic function via
  `ℓ(2g·p)=g+1` (A13); the base-point-free linear-system map and its basis
  independence (A15); projective embedding for `deg D ≥ 2g+1` (A16).
- **Examples (B page):** all five design companions, each exercising the
  page's results (B1 uses A10/A11/A5; B2 uses A10/A11 plus the published
  algebraic-geometry canonical-map item; B3 is the low-degree table for
  A10/A11; B4 tests A12; B5 exercises A15/A14).

Named boundaries, not omissions: the bilinear relations and the period
lattice belong to the CA-RS-3 pair (order 1614, batch 11, the only in-run
consumer); Riemann–Hurwitz is already published on CA-RS-1 and is recorded
`out-of-scope` in the coverage with that reason; general coherent analytic
sheaves/Oka/Cartan theory is explicitly excluded by the design (L526);
hyperelliptic and canonical-map algebraic inputs are consumed from the
published AG library rather than rebuilt here, as the coverage and B2 record.

## 4. Dependencies and intended role

- The 21 manifest items declare 100 distinct dependency ids; every one
  resolves either to a published item on disk or to an in-run item. There is
  no unresolved dependency, no dependency on batch 11+ (no forward edge), and
  the A page's analytic chain is ordered 0→16 by `dependency_level`; the
  projective section is a separate choice-free 0/2/15/16 chain.
- Page `requires` (7 entries) is exactly the plan's CA-RS-2 row: six published
  pages (`mittag-leffler-and-runges-theorem` 682,
  `presheaves-sheaves-stalks-and-sheafification` 876,
  `sheaf-operations-exactness-ringed-spaces-and-module-pullback` 878,
  `sheaf-cohomology-cech-cohomology-and-comparison` 926,
  `riemann-surfaces-branched-maps-and-differentials` 1602,
  `the-dbar-complex-and-integral-solutions` 1608) plus the in-run
  `hodge-theory-on-compact-riemann-surfaces` (1610, batch 9). All six
  published pages are `status: published`; the Hodge page is scaffolded
  earlier in the run and its Step-1 readiness record is closed.
- The A page's only in-run supplier edges are 16 edges from 8 consumers to
  the batch-9 items `def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface`,
  `def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface`,
  `def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface`,
  `cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional`,
  `thm-harmonic-star-duality-for-line-bundle-valued-dolbeault-cohomology`.
  I read those five statements in the batch-9 manifest; they supply exactly
  what A2–A5, A7–A9 and A15 use (bundles/sections; metric and L² pairing;
  maximal ∂̄ operator and adjoint; Dolbeault finite-dimensionality and
  harmonic representatives; `H^{0,1}(E) ≅ H⁰(X,K⊗E*)` star duality). The
  page-level edge batch10→batch9 is recorded with its review row in the
  derived ledger (the Step-1 `step1-dependency-ledger` gate failed at
  2026-10-07T10:27Z on two unreviewed edges, was refreshed, and passed at
  11:03Z).
- **Consumers:** batch 11 `periods-jacobians-and-abel-jacobi-theory` declares
  26 item edges from 13 items plus its page edge on this pair (5 distinct
  batch-10 suppliers: A1, A2, A5, A11, A10). Batch 11's items were read
  where they name this pair; the needed claims (divisors, `O(D)`, RR, Serre
  duality, finiteness) are stated on the A page. The B items are leaves:
  no run item and no published item declares a dependency on any B id.
- **Published consumers:** none. No file under `library/` and no published
  `items/*.md` references any of the 21 new item ids or the two page ids —
  consistent with the design's consumer map (CA-RS-2 has zero direct and zero
  transitive published consumers). The pair is a Phase-3 splice subject, not
  a published-repair subject.

## 5. Source coverage

The coverage lists four independent treatments and 56 harvested rows (50 on
the A page: Forster 25, McMullen 12, Looijenga 9, Deopurkar 4; 6 on the B
page), every row with a disposition: `included`/`inline`/`already-published`,
except one explicit `out-of-scope` (Forster §17.14 Riemann–Hurwitz, already
published on CA-RS-1, with reason). `coverage-checklist --require-destination`
was re-run by me: "2 page(s), 56 harvested result(s), 0 error(s),
0 warning(s)"; `manifest-deps` was re-run: "21 item(s), 0 normalized,
0 error(s)".

I independently re-fetched all four source files and matched the recorded
`fetch_verified` stamps exactly (byte count and sha256-16):

| source | bytes | pages | sha256-16 | match |
|---|---|---|---|---|
| Forster, *Lectures on Riemann Surfaces* | 19,052,171 | 262 | `a7734adc75598d2b` | ✓ |
| McMullen, Math 213b notes (Apr 28, 2026) | 1,128,808 | 183 | `1442374a6f3a389a` | ✓ |
| Looijenga, *Riemann Surfaces* (2007) | 443,320 | 63 | `0e56ac4ff91be48e` | ✓ |
| Deopurkar, *Riemann–Roch* (2017 course notes) | 141,887 | 6 | `3e3e751a8e27fd6d` | ✓ |

Locator spot-checks against the stamped files (not against the ledger text):

- **Forster**: §16 "The Riemann–Roch Theorem" contains §16.1 divisors
  (printed p. 127), §16.7 the `D → D+p` exact sequence and its cohomology
  sequence (printed p. 129), §16.8–16.9 RR (printed pp. 130–131); §17 "The
  Serre Duality Theorem" contains §17.2 Mittag-Leffler distributions of
  forms and §17.9 "The Duality Theorem of Serre: … `I_D: H⁰(X,Ω_D) →
  H¹(X,O_D)*` … is an isomorphism" (printed p. 138); §18 (printed
  pp. 147–152) proves the Mittag-Leffler solvability theorem and the basis
  residue criterion. These match the coverage rows.
- **Looijenga**: Ch. 6 §1 Proposition 6.1 (the exact sequence) and §4
  Theorem 6.7 (`Res_D: L¹(−D) → H¹(D)*` is an isomorphism) appear in the
  stamped file (PDF pp. 56–57), matching the coverage rows.
- **Deopurkar**: §2.1 (the three statements; the Euler step Lemma 2.2),
  §2.2 residues and the pairing via summation of residues, §2.3 the duality
  proof (injectivity, then surjectivity by the multiplication-map dimension
  count), §2.4 the Laurent-tail interpretation ("τ arises from a global
  meromorphic function iff the sum of residues of τω vanishes"), all match;
  the coverage's caveat is accurate: the note invokes ample-divisor Serre
  vanishing (Theorem 1.1) without proof, and the page does not use that step.
- **McMullen**: Theorem 8.9 (Dolbeault ≅ sheaf cohomology), Theorem 8.10
  (`H¹(X,O)* ≅ Ω(X)`, finite-dimensionality), Theorem 9.1 (RR Euler form),
  Theorem 9.4-area skyscraper induction, the torus example
  `h⁰(nP)=1,1,2,3,…`, Chapter 12 maps-to-projective-space material, and
  Corollary 14.4 (`L ≅ L_D`) all appear; but three coverage rows carry wrong
  chapter labels — §7.2.

## 6. Unmet prerequisites

None found. Explicitly checked and resolved:

- every declared dependency id (100 distinct) resolves to a published item
  or an in-run scaffold item (§4); the five in-run suppliers' statements
  were read and match their uses;
- the design names SC-5 (`the-dbar-complex-and-integral-solutions`) as a
  direct required page — it is published (order 1608) and the design's
  forward-reference rule ("SC-5 must be placed earlier") is satisfied;
- the design's shorthand suppliers CA-19, DG-2/DG-5/DG-11–DG-12 are reached
  through the published transitive closure (Mittag-Leffler/Runge; partition
  of unity; smooth bundles; forms/Stokes; finite-dimensional and
  functional-analytic duality interfaces), as the drift review verified;
- the design's requirement that A7 avoid Riemann–Roch and the bilinear
  relations holds in the scaffold (cut system + holomorphic de Rham +
  harmonic-star duality from the preceding in-run page); the bilinear
  relations live on CA-RS-3 and are not used here;
- no prerequisite is needed from the B page elsewhere, and no published item
  gains a new unmet requirement from this pair (no published consumer).

The two Step-1 cross-batch blockers that once touched this pair (the page
edge batch10→batch9 and an item edge in batches 5→3) are cleared in the
current derived ledger: all 15 batch inputs are present and every declared
edge has a review row; the reviews are declaration/edge-mapping checks with
`status: open` (downstream proof closure remains for later stages), not
mathematical certificates.

## 7. Observations and uncertainty (non-blocking, owner-held)

### 7.1 B-item id drift against the design's exact B inventory

The design section M.2 (`research/plan-complex-analysis-track.md` L5828–L5836)
declares "Every following list … in binding display order" and gives the
exact CA-RS-2 B ids (L5901–L5905). The manifest uses:

| design M.2 exact id | scaffold id |
|---|---|
| `ex-divisors-on-sphere-and-complex-torus` | `ex-divisors-and-riemann-roch-on-the-riemann-sphere-and-the-torus` |
| `ex-canonical-divisor-of-a-hyperelliptic-surface` | `ex-hyperelliptic-canonical-divisors` |
| `ex-low-degree-riemann-roch-computations` | (identical) |
| `ex-principal-parts-obstruction-from-residue-pairing` | `ex-failed-principal-parts-problem-detected-by-residues` |
| `ex-linear-systems-on-the-riemann-sphere` | `ex-veronese-linear-system-on-the-riemann-sphere` |

Evidence and impact: the content mapping is 1:1 (no design example is
omitted or replaced); the design ids are used nowhere on disk; the plan-spec
item arrays are empty, and no run tool reads the design document, so no
mechanical gate is violated; the deviating ids have zero consumers (B items
are leaves, verified) and zero published references, so renaming now would
be mechanical and cheap. The same pattern appears on sibling pairs in this
run (batches 11, 13, 15 use paraphrased B ids; batches 9, 12, 14 match M.2
exactly), which suggests a run-wide reconciliation rather than a one-pair
oversight.

Recommended owner action (owner decides; nothing was edited): either
(a) treat the scaffold ids as canonical and record a design/plan amendment
at splice, or (b) rename the four B ids to the design's exact ids before
Step 3b authors them (B ids have no consumers, so the rename is local to
`…-batch-10.pages.json` and the coverage/notes rows). This is a
naming-contract question, not a scope omission, and does not change the
verdict below.

### 7.2 McMullen locator chapter labels

Three coverage rows cite McMullen chapters that do not match the stamped
April 28, 2026 file (hash `1442374a6f3a389a`): the "maps to projective
space … Veronese" row says Ch. 10 but the material is Ch. 12 (pp. 98–107,
Theorems 12.4–12.6, Cor. 12.8); the "holomorphic line bundles, frames,
cocycles …" row says Ch. 11 but the material is Ch. 14 ("Line bundles",
pp. 118–126, Cor. 14.4–14.5); the B-page torus row says Ch. 6 but
`h⁰(nP)=1,1,2,3,…` is in Ch. 9 (p. 85). The source-level locator
"Chapters 5–11, pp. 76–103" also omits the used Ch. 12 and 14 spans. The
content is present and adequate in every case; this is a label defect
(source-faithfulness/Step-5 or owner-directed coverage correction), not a
scope gap.

### 7.3 Overlap with published algebraic-geometry Riemann–Roch/duality

The published library already contains scheme-theoretic developments of
Riemann–Roch and Serre duality for curves
(`library/scheme-theory/riemann-roch-for-curves-via-euler-characteristics.md`,
`…/residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem.md`,
and the AG items such as `thm-full-riemann-roch-divisor`,
`thm-serre-duality-curves-line-bundles`). This pair is the complex-analytic
track's local Dolbeault/Čech development and cites no AG black box, per the
design (L4019–L4021); the subject overlap is deliberate and, per the
design's consumer map, creates no published dependency. Flagged only for
canonical reconciliation awareness after publication; B2 additionally
consumes published AG inputs (`def-hyperelliptic-curve`,
`thm-canonical-map-nonhyperelliptic-curve` — whose clause 3 states exactly
`L^{⊗(g−1)} ≅ ω_C` and the Veronese factorization — and
`lem-nonsingular-complex-algebraic-curve-holomorphic-charts` as the
chart bridge), which the batch notes already record.

### 7.4 Recorded route deviations (not scope changes)

A7 realizes the design's cut-system instruction through the polygonal schema
for topology and the holomorphic de Rham sequence plus the preceding page's
harmonic-star duality for the dimension count (the design's additive-Cousin
input enters through the flasque resolutions); A5 uses the Hodge page's
Dolbeault finiteness rather than a standalone Cauchy-estimate argument. Both
deviations are recorded in the batch notes and are consistent with the
design's prerequisite set — the conclusions and hypotheses are preserved.

### 7.5 What this review did not audit

Scope only: I did not audit proofs, proof strategies, contract text, or
harvest faithfulness beyond the checks above; those are Steps 3b/5. My
confidence in the scope verdict is high. The item statements, dependency
levels and source stamps I cite are from the current on-disk manifests and
the re-fetched sources; no mathematical acceptance is implied.

## 8. Decision

`sufficient` (A16 + B5). The planned definitions, results and examples
adequately cover the intended subject (divisors, Riemann–Roch, duality and
the projective interface for compact Riemann surfaces), with every exclusion
named as a boundary or owned by a specified page, all prerequisites resolved
to published or scaffolded in-run suppliers, and four live source
treatments. Recommend neither a merger nor enrichment; the B-id drift
(§7.1) and McMullen locator labels (§7.2) are recorded for owner
reconciliation and do not block Step 3b authoring of this scope.
