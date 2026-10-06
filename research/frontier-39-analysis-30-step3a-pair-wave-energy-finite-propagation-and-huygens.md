# Step 3a scope review — pair `wave-energy-finite-propagation-and-huygens`

- Run: `frontier-39-analysis-30` · role: alpha (step 3a) · batch: 3
- A page: `wave-energy-finite-propagation-and-huygens` (order 458.017, `pde`)
- B page: `wave-energy-finite-propagation-and-huygens-examples` (order 458.018)
- Decision recorded on the A page: **insufficient** (one exact omission, F1 below);
  the pair stays blocked for Step 3b until the owner records `proceed`.

## Inputs read

- `research/frontier-39-analysis-30-batch-3.pages.json` (pair: 19 A + 9 B items),
  `research/frontier-39-analysis-30-batch-3.coverage.json`,
  `research/frontier-39-analysis-30-batch-3.notes.md`,
  `research/frontier-39-analysis-30-batch-3.cross-batch-dependencies.json`.
- Controlling design `research/plan-pde-track.md` §PDE-10, lines 1238–1288, and the
  PDE-10 enrichment additions, lines 3537–3548. (The drift report's locator
  3513–3525 is stale by ~24 lines as the batch notes record; the content verified
  at 3537–3548 is the PDE-10 table.)
- `research/frontier-39-analysis-30-alpha-step1-drift.md` (PDE-10: `no-drift`, with
  the binding `c^2`-weight, cone-sign and zero-energy guidance),
  `research/frontier-39-analysis-30-scope-ledger.json`
  (`allow_in_run_dependencies: true`),
  `research/frontier-39-analysis-30-step1-owner-resolution.md`,
  `research/frontier-39-analysis-30-step1-thm-conservation-of-total-wave-energy.json`
  and the other pair readiness records.
- Batch-2 manifest `research/frontier-39-analysis-30-batch-2.pages.json` (in-run
  supplier pair `wave-equation-representation-formulas`), published `items/` on disk
  for every declared supplier, and the run state `.autopilot/frontier-39-analysis-30/state.json`
  (this pair has exactly one live 3a dispatch, `5fac4d2900fe99bc`).
- Source check for F1: Teschl archived manuscript fetched independently to `/tmp`
  (sha256_16 `cea9939acea1858e`, matching the coverage `fetch_verified` record) and
  printed p. 176 (PDF page 188) read directly.

## Scope vs design, sources and role

- **A page, 19 items, levels 0–7.** All 14 design rows are realized by same-ID items
  (energy definition and local law; total conservation; Cauchy uniqueness; energy
  continuous dependence; cones and dual causal notions; truncated-cone energy
  identity; finite propagation; compact-support expansion; domain of dependence and
  local uniqueness; Huygens definition; odd-dimensional strong Huygens; tails in
  dimension 1 and even dimensions; independence remark). The two enrichment rows
  `cor-time-reversed-energy-uniqueness-from-final-data` and
  `thm-energy-uniqueness-for-homogeneous-dirichlet-waves-on-bounded-domains` are
  present; the other four enrichment rows are realized inside design items 2, 5, 7,
  8 as the batch notes record (unit-speed/forced forms), which the statements confirm.
  The three declared local prerequisites (divergence-integral lemma, frustum
  geometry/normals, constancy on convex sets) are present before their consumers.
  The design's three hard obligations are carried: case-by-case vanishing boundary
  term (thm (a)–(c)), the completed-square lateral flux with the sign
  (`lem-energy-identity-on-a-truncated-wave-cone`), and failure of strong Huygens
  witnessed by data strictly inside the base ball
  (`thm-wave-tails-in-one-and-even-spatial-dimensions`). Exceptions to the design
  (sharpened Huygens wording, regularised division instead of Gronwall, unit-speed
  enrichment forms) are recorded in the batch notes and do not reduce subject scope.
- **B page, 9 items, levels 1–8, leaf.** All 7 design rows are realized by same-ID
  items (travelling-packet energy split; Dirichlet reflection; 3-D quiet shell; 2-D
  interior tail; finite-speed-without-Huygens counterexample; open-boundary energy
  loss; global-energy integrability) plus the two enrichment rows
  `ex-plane-wave-shows-the-characteristic-speed-is-sharp` and
  `ex-zero-wave-energy-means-spatial-constant-before-data-fix-the-constant`. No
  design row is missing, and every B item is anchored to an A-page claim or to the
  representation formulas.
- **Role.** PDE-10 is the classical capstone of the wave block (energy, uniqueness,
  dependence, finite propagation, Huygens); the in-run page-requires scan of all 60
  batch manifests shows no other pair consumes its items, and its only page-level
  prerequisite is the in-run pair `wave-equation-representation-formulas` (batch 2,
  separate 3a dispatch `957fe2209918a1e8`).
- **Source coverage.** Four independent A-page treatments (Teschl, Ivrii, Hunter,
  Speck) and three B-page treatments; 48 harvested headings all dispositioned;
  `coverage-checklist` reports 0 errors / 0 warnings. Minor observation F3 on the
  design's `[E]` primary backing is below.

## Findings

### F1 — confirmed omission (drives `insufficient`): the homogeneous **Neumann** half of the boundary-data energy theorem is claimed as included but is scaffolded nowhere.

- Consuming planned result: `thm-conservation-of-total-wave-energy` (A page), whose
  setting (c) reads "bounded domain with **Dirichlet** data" and whose readiness
  record enumerates exactly "three admissible settings (fixed compact support,
  integrable flux, bounded domain with Dirichlet data)". No other item in the pair
  states Neumann energy conservation; a statement scan of all 899 run items finds
  no wave-energy Neumann item (the run's Neumann items are elliptic/weak, batches
  10–15).
- The pair's own artifacts claim the omitted half:
  - coverage Teschl rows: "§7.3 energy (7.27) and Lemma 7.10 (**Dirichlet/Neumann**
    energy constant)" → `included thm-conservation-of-total-wave-energy`, and
    "§7.3 Problem 7.15: prove Lemma 7.10 (**Dirichlet and Neumann** energy
    conservation)" → `included thm-conservation-of-total-wave-energy`;
  - the item's own source locator: "§7.3, printed p. 176, Lemma 7.10 and Problem
    7.15: constant energy under **Dirichlet (and Neumann)** boundary conditions";
  - design row 3: "…compact support, sufficient decay, or **homogeneous boundary
    data**, the total energy is constant" (not restricted to Dirichlet).
- Source verification (read directly, not inferred): Teschl, archived manuscript
  printed p. 176, "(7.27) A straightforward calculation verifies that if $u$
  satisfies Dirichlet (or Neumann) boundary conditions on $\partial U$, then
  $\dot E(t)=0$ … (Problem 7.15). **Lemma 7.10.** … The same result holds if
  $u\in C^2(\mathbb R\times U)\cap C^1(\mathbb R\times\bar U)$ satisfies Neumann
  boundary conditions $\partial u/\partial\nu\,(t,\cdot)|_{\partial U}=0$." The
  Neumann case kills the boundary flux because $q\cdot\nu=-c^2u_t\,\partial_\nu u=0$;
  it is the standard companion of case (c), not new mathematics.
- Secondary instance of the same root cause: B-page coverage Ivrii row
  "…Problem 1 (**Dirichlet/Neumann conservation on the half-line**)" →
  `included cex-wave-energy-need-not-be-conserved-through-an-open-boundary`, but that
  counterexample needs only the flux balance and states no half-line Neumann
  conservation.
- Proposed owner action (enrichment, no merger): extend
  `thm-conservation-of-total-wave-energy` setting (c) to homogeneous Dirichlet **or**
  homogeneous Neumann data (in the Neumann case require
  $\partial_\nu u(\cdot,t)|_{\partial U}=0$, with Teschl's up-to-the-boundary
  regularity $C^2\cap C^1$; the pair's existing deps
  `def-bounded-c-one-domain-boundary-charts-and-outward-normal`,
  `thm-divergence-theorem-for-bounded-c-one-euclidean-domains` and the local flux
  identity already suffice, so no new prerequisite item is needed), and align the
  three coverage rows (or, alternatively, record the Neumann restriction as a
  deliberate scope reduction and correct those rows from `included` to an explicit
  reason). A pair merger is not recommended: the omission is local to one case of
  one theorem, and the pair is a coherent PDE-10 unit.

### F2 — no unmet prerequisite confirmed.

- Dependency closure from both pages: 135 direct dependency references (72 to
  published `items/*.md` on disk, 63 to in-run items), transitive closure of 96
  carrier items (28 in this pair, 19 in batch-2's `wave-equation-representation-formulas`,
  49 published) with **zero missing nodes**; no cycle, and
  `item-dependency-levels check` passes for the whole run (899 items, max level 22).
  In-run dependencies are permitted by the scope ledger.
- The consumed batch-2 interfaces (odd/even formulas with normalisations and
  regularity, Kirchhoff/Poisson/d'Alembert, time-reversal) are documented claim by
  claim in `…-batch-3.cross-batch-dependencies.json`; the page-level prerequisite
  pair's own scope decision is a separate dispatch and is not made here. If that
  pair is reduced or merged, the affected consumers are the Huygens items 12–13, the
  caution in `def-strong-huygens-principle`, and B items 3–5 (exact mapping in the
  cross-batch file).
- Recorded neighbouring defect, **not** an unmet prerequisite of this pair: batch-2
  `thm-support-dichotomy-for-free-wave-fundamental-solutions` clause (i) is false as
  phrased (evidence and repair options in the batch-3 notes §Cross-batch finding).
  No item of this pair depends on it (closure check), and batch 3 proves its Huygens
  statements from `thm-odd-dimensional-wave-formula-by-spherical-means` directly; it
  remains owner-visible debt for the batch-2 pair.
- No dependency path reaches `library/not-proved-here/deferred-set-theory-beyond-choice`;
  the other dependency, home and level gates were re-run and pass for this batch.

### F3 — minor, non-blocking: the design's `[E]` primary backing has no coverage entry.

The design's "Primary backing" names `[E]` (Evans) §2.4.3 and the plan's source
ledger disposes "§2.4 Wave equation … energy and finite propagation" to PDE-9–PDE-10,
but the coverage ledger records no Evans entry; the four recorded treatments cover
the same named results. Either add the Evans treatment to the coverage ledger or
record the substitution in the batch notes. I did not read Evans §2.4.3 for this
review and make no claim about results unique to it. This finding is not the basis
of the decision.

## Decision

`insufficient` — F1 only. Everything else in the pair is scope-sufficient and the
remedy is a local enrichment of one theorem's setting (c) plus coverage alignment,
or an owner-recorded reduction with corrected coverage. Per Step 3a the pair is
blocked at this point; no scaffold was edited by this review, and the owner decides
whether to enrich, reduce, or proceed.
