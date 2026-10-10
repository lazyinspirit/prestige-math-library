# Step 3a scope report — pair `em-wave-equation-prerequisites`

- Run: `physics-em-sr-40-2026-10-08` (role alpha, Step 3a scope review)
- A page: `em-wave-equation-prerequisites` (order 311, category
  `classical-electromagnetism-mathematics`, library `mathematics`)
- B page: `em-wave-equation-prerequisites-examples` (order 312)
- Batch: 17. Current inventory: **2 A items + 1 B item** (run total: 40 pairs,
  471 items).
- Scope decision: **sufficient** (recorded with `step3-decisions.mjs record-scope`).
- Date of review: 2026-10-09.

## 1. Design, plan and manifest congruence

Compared the manifest (`research/physics-em-sr-40-2026-10-08-batch-17.pages.json`)
with the prose design `research/plan-classical-electromagnetism-track.md`
L516–L561 (the reservation backed by
`research/first-principles-2026-10-03/classical-electromagnetism/scaffold/proposed-inventory.json`),
the plan (`research/plan-spec.json` orders 311/312), the batch notes
(`…-batch-17.notes.md`), the coverage file (`…-batch-17.coverage.json`) and the
Step-1 drift report (`…-alpha-step1-drift.md`).

- Page metadata agrees exactly: ids, kind A/B, orders 311/312, titles, companion
  links, category, `library: mathematics`, and `requires` exactly
  `[em-expanded-analysis-prerequisites (order 310), wave-equation-representation-formulas
  (order 81, published P entry)]`; the B page requires the A page. The drift
  verdict for this page is `no-drift`.
- Designed A item retained in full: `thm-em-wave-cauchy-kirchhoff` (design W2,
  `completed-expansion-arguments.md#W2`) with every promised clause —
  (a) $C^\infty$ solution of $Wu=h$ attaining the Cauchy data, (b) uniqueness
  among $C^2$ solutions, (c) domain of dependence, (d) compact-support
  propagation — and the design's explicit disclaimers (no finite-domain
  boundary condition, no finite-total-energy hypothesis, no spatial decay).
  The design's dependency on
  `thm-distributional-differentiation-is-continuous-and-commutes` was dropped
  because the classical smooth branch never enters distribution theory; that
  item serves `lem-em-retarded-wave-kernel`, homed on page 321. Dropping an
  unused prerequisite does not narrow the claim; the change is recorded in the
  batch notes.
- Scaffolder-added A prerequisite: `lem-em-spherical-mean-family-smoothness`
  (joint $C^\infty$ smoothness in $(x,s,v)$ of the spherical-mean family, with
  the differentiated-integral formulas and the composition with
  $(t,v)\mapsto(t-v,c(t-v),v)$). It is genuine, not padding: the design's W2
  proof uses exactly this parameter differentiation silently ("uniform bounds
  on the compact region of arguments"), and the published
  `lem-spherical-means-of-smooth-data-are-smooth` covers one fixed datum only.
  It carries a complete local branch argument, is placed before its consumer,
  and declares its $\mathrm{AC}_\omega$ use and source rows. Recorded in the
  batch notes (decision 1).
- B item: the design reserved no B item (`B_inventory: []`,
  `B_item_count: 0`), while the manifest gate requires a nonempty inventory.
  The design's promised example
  `ex-em-wave-equation-prerequisites-hypothesis-boundaries` is **not** moved or
  duplicated: the current plan homes it on
  `em-retarded-point-prerequisites-examples` (order 324, batch 22, with
  `thm-em-retarded-root-and-fields` and `thm-em-wave-cauchy-kirchhoff` among its
  deps), and it is present there. Page 312 receives instead the locally
  constructed example `ex-em-wave-equation-prerequisites-source-and-support-boundaries`,
  a genuine three-clause check of the A theorem's hypothesis boundaries
  (constant source witnesses that clause (d)'s compact-support hypothesis
  cannot be dropped; a ball-supported source gives the explicit propagation
  bound; the linear velocity datum gives a smooth solution with divergent total
  energy, witnessed against the finite-energy uniqueness corollary). It is a B
  leaf: no A item and no other page depends on it. Recorded in the batch notes
  (decision 2); its provenance is `ai-generated` with `generation.role:
  example`, which is permitted for examples in build batches and excludes it
  from being a `deps` target.
- No designed claim of this pair was dropped or narrowed. The only additions
  (one prerequisite lemma, one B check) are documented, dependency-ordered and
  consistent with the pair's declared subject.

## 2. Coverage of the intended subject

Intended subject: the mathematical wave-Cauchy prerequisites of the EM track —
whole-space, smooth-data existence/uniqueness/representation for
$W=c^{-2}\partial_t^2-\Delta$, with uniqueness, domain of dependence and
compact-support propagation — routed through the already-published wave
development, and used by the later causal-kernel, gauge, potentials,
vacuum-wave and radiation pages.

- The A-page coverage file documents two independently fetched full-text
  treatments with section/page locators, per-result disposition tables and
  harvest-time fetch stamps (`recovery_attempts`, `fetch_verified`): Teschl,
  *PDE*, §7.1–§7.3 (2 912 992 bytes, sha256_16 `cea9939a…`, 392 pp) and Ivrii,
  *PDE*, Ch. 9 §9.1.1–§9.2.3 (4 626 594 bytes, sha256_16 `02c9eb1e…`,
  415 pp), 27 harvested results in total.
- Dispositions: `already-published` rows name exact published item ids (a
  spot-check of 13 of them confirms they exist with `status: published`, e.g.
  `thm-kirchhoff-formula-for-the-three-dimensional-wave-equation`,
  `thm-wave-duhamel-principle`, `thm-domain-of-dependence-and-local-uniqueness`,
  `def-spherical-mean-of-space-dependent-data`,
  `lem-euler-poisson-darboux-equation-for-spherical-means`); `inline` rows
  record the W2 source-term computation (Teschl Cor. 7.3 / Ivrii
  (9.1.11)–(9.1.12), no spatial compact support required); the `deferred` row
  sends the retarded potential to `em-causal-wave-kernel-prerequisites`, which
  matches the design home of W3; `out-of-scope` rows carry written reasons
  (Huygens-principle remark, textbook exercises, bounded-domain energy theory,
  spatial-domain initial-boundary value problem). The two `canonical` rows
  honestly mark the locally added lemma as "not a named textbook theorem" and
  the W2 computation as the two-source Duhamel derivation.
- Mechanical: `coverage-checklist` on batch 17 → 0 errors, 1 warning
  `coverage-low-yield` (1/27 scaffolded). At scope level this is the expected
  shape for a prerequisites page whose harvested material is largely already
  published; every decline names a concrete disposition and a reason, and none
  of the declines removes a result this pair's consumers need (section 4).
  This is a scope confirmation of the declines, not a source-faithfulness
  audit: that reading remains with Alpha at Step 5 and the ordinary source
  gates.
- B page 312 has no coverage entry. The coverage gate requires entries only for
  A pages (`coverage-checklist.mjs` checks `page.kind === 'A'`), so this is not
  a defect; the B example is locally constructed (no literature claim), its
  verification strategy is in the manifest, and its construction is recorded
  in the batch notes. Observation for the owner (optional enrichment, not a
  scope gap): a B-page `canonical` row, as in batch 21's precedent, would make
  the record uniform.

## 3. Prerequisites and unmet-prerequisite assessment

- All 26 unique `deps` of the three items resolve:
  - 22 pinned published imports, each `status: published`, and each first
    placement homed on a library page whose order (7–81) lies inside the
    `requires` closure of page 311 — notably
    `wave-equation-representation-formulas` (order 81) carrying
    `def-wave-equation-cauchy-data-and-wave-speed`,
    `lem-derivative-of-an-integral-with-moving-endpoints`,
    `lem-first-moment-of-the-unit-sphere-vanishes`,
    `thm-wave-duhamel-principle`; and `wave-energy-finite-propagation-and-huygens`
    carrying `cor-energy-uniqueness-for-the-wave-cauchy-problem`,
    `def-wave-energy-and-energy-flux`,
    `def-forward-and-backward-wave-cones-…`,
    `thm-domain-of-dependence-and-local-uniqueness`; plus the calculus, measure
    and topology imports (orders 7–75).
  - 3 in-run scaffolds: `lem-em-parameter-integrals` (batch 13, page
    `em-elementary-mathematical-prerequisites`, order 305),
    `lem-em-spherical-mean-wave-identity` (batch 16, page
    `em-expanded-analysis-prerequisites`, order 310),
    `lem-em-spherical-mean-family-smoothness` (same A page, earlier item).
  - Owners' Step-1 records for all three items of this pair say `ready`, and
    each recorded dependency list equals the current manifest list
    (checked item by item).
- No dependency resolves to an item absent from both the published library and
  the current scaffold: **no unmet prerequisite found**. To distinguish
  honestly: the two external in-run scaffolds are not yet authored — they are
  present in the current scaffold with `ready` records, which is the Step-1
  state; their authoring is ordinary later work, not a missing prerequisite.
- Ordering: every dependency home precedes pages 311/312, and the same-page
  lemma→theorem edge follows item list order.
  `node tools/physics-support/validate-plan.mjs research/plan-spec.json --run
  physics-em-sr-40-2026-10-08` → exit 0, with the run's item graph free of
  unresolved ids, item cycles, forward references, B-page dependencies and
  intra-page order violations (advisory `redundant-prereq` warnings only,
  involving other pages). `step3-decisions.mjs check --phase scope` reports
  40 pairs / 471 items with this pair among the pending reviews and no
  structural error.
- Owner decisions read: `…-owner-authoring-direction.md` contains no direction
  specific to this pair (its wave-related entries concern the plane-wave,
  wave-interface, cavity and retarded-point pages). Reconciliation10 reviewed
  `ex-em-wave-equation-prerequisites-hypothesis-boundaries` as a public seed at
  its page-324 home; no amendment touches pages 311/312. The Step-1 readiness
  records carry owner reconciliation context refreshes (reconciliations 6/7/9/10)
  that explicitly claim only context/hash changes to unchanged items.

## 4. Intended role and consumer fit

- Declared consumers: pages `em-causal-response-and-radiation-prerequisites`
  (batch 19), `em-causal-wave-kernel-prerequisites` (21),
  `em-potentials-and-gauge` (31) and `em-vacuum-waves-and-polarization` (33)
  all declare `requires: em-wave-equation-prerequisites`; item-level rows
  consume `thm-em-wave-cauchy-kirchhoff`: `thm-em-radiation-asymptotic-flux`
  (19), `lem-em-retarded-wave-kernel`, `lem-em-gauge-wave-reachability`,
  `lem-em-smooth-forced-maxwell-cauchy-system` (21),
  `ex-em-wave-equation-prerequisites-hypothesis-boundaries` (22),
  `pthm-em-general-wave-ivp` (33), `pthm-em-retarded-potentials` (36).
- The recorded cross-batch evidence rows show every use falls inside the
  theorem's clauses (a)–(d) and its displayed formula: existence/smoothness for
  forced problems, $C^2$ uniqueness (zero-data homogeneous comparison for
  gauge and constraint preservation), domain of dependence, and compact-support
  propagation. Nothing in those rows requires a claim this pair does not make;
  the retarded-kernel/convolution content is homed on page 321 (exactly the
  recorded deferral), and the one-/two-dimensional formulas and the energy
  results are published imports. The pair's scope therefore covers its
  intended role.

## 5. Unresolved uncertainty / honesty notes

- I did not re-download the two source books in this scope pass. The coverage
  rows' fetch stamps (byte counts, page counts, sha256_16 prefixes) are
  harvest-time records used here as navigation evidence, not as my own
  re-reading; source-faithfulness review remains with the ordinary
  authoring/review gates.
- The decline confirmation in section 2 is a scope judgment, not a source
  audit; the `coverage-low-yield` warning is expected for this page type and
  does not indicate an omitted required result.
- Optional owner-directed enrichment: a B-page coverage `canonical` row for
  page 312. Bookkeeping uniformity only; the scope is sufficient without it.

## Scope decision

**sufficient** — design, plan and manifest are congruent; the single designed
item is retained with every promised clause; the added lemma is a genuine,
documented prerequisite for the source term; the promised B example is
preserved at its current design home and page 312 carries only a new, distinct
leaf check; coverage documents two stamped full-text treatments with reasoned
dispositions; all 26 dependencies resolve inside the page-311 `requires`
closure; no unmet prerequisite is absent from both the published library and
the current scaffold. Recorded via
`tools/physics-support/step3-decisions.mjs record-scope`.
