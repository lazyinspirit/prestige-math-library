# Step 3a scope review — `zariski-tangent-spaces-regular-points-smoothness-and-bertini`

- Run: `frontier-36-complete` (batch 4), role alpha, label
  `step3a-pair-zariski-tangent-spaces-regular-points-smoothness-and-bertini-332b6417dffcb2c2`.
- Pair: A `zariski-tangent-spaces-regular-points-smoothness-and-bertini`
  (order 366.059, category `algebraic-geometry`, 43 items) / B
  `zariski-tangent-spaces-regular-points-smoothness-and-bertini-examples`
  (order 366.060, 17 items). Companion pointers A↔B are consistent, the A
  manifest `requires` matches `plan-spec.json` row 366.059, and
  `research/frontier-36-complete-scope-ledger.json` owes both pages to batch 4.
- Decision: **sufficient**, recorded with `tools/step3-decisions.mjs
  record-scope` (non-owner review) at the current pair content hash. Receipt:
  `research/frontier-36-complete-step3a-review-zariski-tangent-spaces-regular-points-smoothness-and-bertini.json`;
  re-verify with `node tools/step3-decisions.mjs check --run frontier-36-complete --phase scope`.
- Scope only: this review decides whether the planned definitions, results and
  examples cover the intended subject. It is not item or proof approval, and it
  edits no scaffold, item, plan row, coverage row or owner record.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-36-complete-batch-4.pages.json` | Current A inventory (43 items) and B inventory (17 items): every statement, `deps`, `status`, `dependency_level`, provenance, source references; page order/kind/category/title/companion/`requires` |
| `research/frontier-36-complete-batch-4.coverage.json` | 10 source records, 112 harvested rows with locators, dispositions, item destinations and written reasons; page `status: ready` |
| `research/frontier-36-complete-batch-4.notes.md` | Step-1 construction record: design/plan reconciliation, the one added A item, clause-level audit notes, supplier checks, AC accounting, check results |
| `research/frontier-36-complete-batch-4.cross-batch-dependencies.json` (`[]`) | No in-run item edges out of batch 4; the A page's requirements are published pages |
| `research/plan-algebraic-geometry-track.md` §AV-6 (lines 511–565) and the revision instruction at line 2678; future-`requires` table at lines 2798–2799, 2804 | Controlling prose design (original 27 A / 9 B proposal), the binding replacement by the audited 42-A/17-B manifest, and the pair's place in the AG order |
| `research/plan-spec.json` rows 366.059/366.06 and 366.061/366.073 | Page identity, order, kind, category, companion, `requires`; empty item arrays, so the manifest controls item order |
| `research/frontier-34-batch-7.pages.json` (42 A / 17 B) and `research/frontier-34-batch-7.notes.md` | The carried-forward audited AV-6 manifest the plan names, with its historical `BLOCKED` reasons (missing AV-5a supplier pair, missing source-fetch receipts) |
| `research/frontier-36-complete-alpha-step1-drift.md` (AV-6 entry) | Drift verdict `no-drift`; AV-2/AV-5/local-ring/Nakayama/Krull inputs occur in the declared closure |
| `research/frontier-36-complete-owner-authoring-direction.md` | Binding owner direction: preserves the 30 pairs, no pair-specific instruction for this one; this run has no deferred-pair/deferred-item file, and no owner scope receipt or amendment for this page exists |
| `research/frontier-36-complete-batch-6.pages.json`, `research/frontier-36-complete-batch-16.pages.json` | In-run consumers and the exact consuming items |
| Published prerequisites: `library/algebraic-geometry/algebraic-differentials-separability-and-smooth-local-presentations.md`, `library/scheme-theory/fibre-products-base-change-and-scheme-theoretic-fibres.md`, and the 54 out-of-run supplier items | `status: published`, nonempty inventories |

## Inventory against the design

The controlling prose is §AV-6 of `plan-algebraic-geometry-track.md`: the
original 27-A/9-B proposal is expressly superseded by the audited 42-A/17-B
inventory (line 2678: "Replace the obsolete inventory by the audited 42-A/17-B
manifest recorded in the AV-6 frontier amendment.").

- **A page.** Current 43 items = the audited 42 carried forward in
  `frontier-34-batch-7.pages.json` plus `lem-zero-scheme-of-line-bundle-section`,
  recorded in the batch notes as a necessary local prerequisite of the linear
  system/Bertini route (harvested from the Vakil §3.9–§3.10 row "section zero
  subscheme used by a linear system"). An item-by-item diff of the two
  manifests found **no removed audited item**; every other statement difference
  is an added "Assume the Axiom of Choice" clause, a wording refinement, or the
  deliberate `cor-smooth-projective-complete-intersections-general`
  pure-dimension hypothesis (the published classical convention allows
  reducible `X`, for which the `r=0` assertion would otherwise fail).
  One design row changed id only: the malformed
  `cex-regular-not-smooth-imperfect-field-theorem` (a counterexample documented
  in the design as a `thm` row "because later definitions depend on the
  distinction") is implemented as the theorem
  `thm-regular-not-smooth-imperfect-field`, as the batch notes record; its
  subject is retained.
- **Designed clauses all present.** Intrinsic cotangent/tangent spaces and their
  localization; dual-number and square-zero-extension descriptions at rational
  points; Jacobian matrix with equation-row convention, Jacobian-kernel
  theorem, functoriality/chain rule and products; regular-local-ring
  definition, embedding-dimension inequality, Jacobian criterion at closed
  points over perfect fields, hypersurface gradient corollary, openness and
  density of the regular locus, one-component lemma, minimal tangent dimension
  and homogeneous-space regularity; smoothness over a field by geometric
  regularity, regular = smooth over perfect fields, the purely inseparable
  counterexample theorem, smooth morphisms by standard smooth presentations,
  the submersion criterion, transverse hyperplane slice, tangent directions
  realized by curves and product stability; source-open and target-open generic
  smoothness (the latter with a smooth source, with the constant cusp family
  counterexample on the B page); zero subscheme of a section, linear systems and
  base loci, smoothness of the incidence away from the base locus, Bertini in
  characteristic zero with a general linear system, the complete-intersection
  corollary, and the convention remark. Tangent cone (scheme-theoretic
  `Spec gr_m O`), initial-ideal presentation, span, hypersurface multiplicity
  and multiplicity-one smoothness are present as designed.
- **B page.** Exactly the audited 17 examples/counterexamples, in order:
  parabola, node, cusp, smooth quadric, nonreduced-hypersurface Jacobian
  caution, purely inseparable regular-not-smooth point, characteristic-`p`
  Frobenius linear system, product origin, projective cone vertex, cusp family
  showing the target-open theorem needs a smooth source, determinantal quadric
  cone, `GL_n`/`SL_n` tangent spaces, three-line-configuration tangent
  dimensions, higher plane-curve tangent cones, orthogonal/symplectic tangent
  matrices, monomial curve with arbitrary embedding dimension, and the
  nonradical-ideal tangent-space caution. No B item is a topic extension beyond
  the design's examples/counterexamples role.
- **Leaf shape.** All B dependencies are A items or published items; there are
  no A→B edges and no B→B edges, and no other batch manifest in this run
  declares a B-page id. The page therefore supplies no later proof, as required.
- **Hygiene.** All 60 item ids are new (no collision with `items/`); no
  duplicate ids; 33 items (27 A, 6 B) carry an AC clause and exactly those
  declare `def-axiom-of-choice`; no dependency reaches the recorded
  `not-proved-here` catalogue. The 43-item A page is well under the 100-item
  cap, so no split or merger is indicated by size.

## Source coverage assessment

`research/frontier-36-complete-batch-4.coverage.json` harvests 10 sources into
112 rows: 86 `included`, 3 `already-published`, 17 `deferred`, 6 `out-of-scope`
(= 112). Re-run on 2026-09-28:
`node tools/coverage-checklist.mjs research/frontier-36-complete-batch-4.coverage.json --require-destination`
reports 1 page, 112 rows, 0 errors, 0 warnings, and
`node tools/source-fetch-check.mjs --coverage research/frontier-36-complete-batch-4.coverage.json`
reports 10/10 fetch-verified and resolved. The three `already-published` rows
point at published items (`thm-associated-graded-ring-of-a-regular-local-ring`,
`lem-ag-flat-local-regularity-ascent-descent`,
`lem-ag-local-flatness-regular-parameters`), all verified `status: published`.

Independent harvest check (2026-09-28), reading the current source bytes rather
than the coverage summary alone:

- **Milne, *Algebraic Geometry* v6.10, Ch. 4 "Local Study", printed pp. 81–99.**
  The text contains paragraphs 4.1–4.49 and Exercises 4-1–4-10, and every one
  has a coverage disposition: e.g. 4.18 (real analytic aside) `out-of-scope`;
  4.20 (dimension-one regular local ring is a PID) deferred to
  `valuation-rings-and-discrete-valuation-rings`; 4.21 (plane-curve DVR
  criterion) deferred to the plane-curve pair; 4.41–4.42 deferred to the
  normalization examples; 4.45 included; 4.46–4.47 included; 4.48's tangent
  computation included with the global symplectic dimension deferred;
  Exercises 4-1 through 4-10 each appear: 4-3, 4-4, 4-5, 4-9 and 4-10 included;
  4-2 included as the transverse-slice lemma with its converse/reduced-fibre
  warning deferred; 4-8's cone-singularity part included with normality
  deferred; 4-1, 4-6 and 4-7 deferred to named destinations or
  `owner-decision`.
- **Arapura, *Algebraic Geometry*, Ch. 5 §5.1–§5.4, printed pp. 34–40.** The
  numbered results 5.1.1–5.4.5 exist and each is covered: 5.1.1–5.1.5,
  5.2.1–5.2.4, 5.4.1–5.4.5 included; 5.2.5 (Grassmannians) deferred to the
  Grassmannian examples; §5.3 `out-of-scope` with a written reason.
- **Vakil, classes 51–52 packet (12 pp., 141,520 bytes).** §3.1–§3.11 are
  present; §3.1/§3.3 (source- and target-open generic smoothness), §3.4, §3.9
  (improved Bertini), §3.10 and §3.11 are included; §3.5–§3.8 (Kleiman–Bertini
  general-translates theorem) is deferred to `owner-decision`.
- **Milne, AG10 §f, pp. 16–19.** 10.58–10.73 all exist with dispositions
  (10.63, 10.66, 10.72–10.73 deferred; 10.72's regular-case associated-graded
  theorem already published).
- **Stacks.** Tags 00TU, 00TV, 07DY resolve exactly to Lemmas 10.140.4,
  10.140.5 and 10.128.2 as recorded; 00MK and 00MP are recorded with the
  correct local-criterion content, and 00MP is rejected with an explicit reason
  (it assumes `R`-flatness).

Deferrals with named destinations: 4.41, 4.42, Exercise 4-8 and the second
example of Stacks 33.12.7 → `normal-varieties-normalization-and-zariskis-main-theorem-examples`;
4.13–4.14, Exercises 4-1 and 4-2 → `plane-curves-local-intersection-multiplicity-and-bezout-examples`;
4.20 → `valuation-rings-and-discrete-valuation-rings`; 4.21 → the plane-curve
pair; Exercise 4-7 and 10.73 → the flat/smooth/étale pair (batch 6 of this run);
5.2.5 → the Grassmannian examples; 10.63, 10.66 →
`kahler-differentials-conormal-sequences-and-infinitesimal-lifting`. All named
destinations resolve in `plan-spec.json` (or the published library for 4.20).
Three rows go to `owner-decision` instead of a page: Milne Exercise 4-6
(dimension of the symplectic group as a scheme, whose tangent-space computation
is already on the B page), AG10 10.72 (cone dimension for arbitrary Noetherian
local rings) and the Vakil §3.5–§3.8 Kleiman–Bertini theorem; see the
observations below.

## Role in the library

- **Prerequisites.** The A page `requires`
  `algebraic-differentials-separability-and-smooth-local-presentations` and
  `fibre-products-base-change-and-scheme-theoretic-fibres`; both are published
  pages with nonempty inventories. The AV-2/AV-5/local-ring/Nakayama/Krull
  interfaces named in the design lie in the `requires`-closure (195 plan pages;
  `regular-local-rings-and-homological-dimension`,
  `krull-dimension-and-height-theorems`, `flatness-and-faithful-flatness` and
  `algebraic-closure-embeddings-and-separability` are all present). This is the
  interface the Step-1 drift review already accepted as `no-drift`.
- **Declared dependencies.** Across the 60 items there are 54 distinct
  out-of-run item ids; all 54 exist with `status: published`. No missing id, no
  forward page edge, no catalogue item.
- **Consumers.** In-run: batch 6 `flat-smooth-and-etale-morphisms`
  (`cor-smooth-variety-classical-scheme-conventions-agree` uses
  `def-smooth-morphism-to-field-classical` and
  `thm-regular-equals-smooth-over-perfect-field`) and batch 16
  `smooth-projective-serre-duality-and-flag-variety-line-bundles`
  (`lem-semisimple-projective-orbit-flag-quotients` uses
  `thm-regular-equals-smooth-over-perfect-field`). In the prose track: AV-7
  normalization (366.061) and AV-17 (366.073). The consumed clauses — the
  classical/geometric convention for smoothness over a field and
  regular = smooth over perfect fields — are exactly what those two items
  state.
- **No duplicate scope.** No published library page carries this subject
  (no published Bertini page; nothing in `library/` is a Zariski-tangent-space
  or classical regular-locus page). The differential and smooth-local
  presentation side is deliberately owned by the published AV-5a pair, and the
  general scheme-level flat/smooth/étale theory by batch 6. The B page stays a
  leaf and supplies no later proof.

## Observations for the owner (non-blocking; no scope action requested)

1. **Three `owner-decision` deferrals.** Milne Exercise 4-6's global dimension
   statement (needs regularity/reducedness of the group scheme, not tangent
   dimension alone), AG10 10.72 (`dim gr_m R = dim R` for arbitrary Noetherian
   local rings, which the page does not use), and the Vakil §3.5–§3.8
   Kleiman–Bertini theorem (general translates on homogeneous spaces, beyond
   the linear-system incidence route). Each carries a written reason, none is a
   dependency of any item in this pair, and none is needed by the pair's design
   or by its current consumers. They are flagged here so the owner can place
   them deliberately rather than treat them as silently dropped.
2. **Coverage pointer precision.** The Milne 4.45 row ("nonsingular iff the
   local ring is regular") links to `lem-regular-point-lies-on-one-component`,
   while the equivalence itself is carried by
   `def-regular-local-ring-geometric-point` plus
   `thm-embedding-dimension-at-least-local-dimension`. Content is present; the
   pointer is imprecise. Not a scope gap.
3. **Record note.** The prose track's future-`requires` table (line 2798) lists
   only `algebraic-differentials-…` for the A page, while `plan-spec.json`
   adds the published `fibre-products-…`; the manifest matches `plan-spec.json`
   and Step 1 found no drift. Recorded only so the two tables are not confused
   later.
4. **Historical context.** The frontier-34 batch-7 record carried this
   inventory as `BLOCKED` pending the AV-5a prerequisite pair and real source
   fetch receipts. Both conditions are now satisfied on disk (the AV-5a pair
   is published; 10/10 sources are fetch-verified), so that historical stance
   does not constrain the scope; it remains a reminder that this scope review
   certifies none of the 60 proofs.

## Uncertainty statement

I verified pair identity, inventory completeness against the design and the
audited amendment, coverage dispositions and destination resolution, source
fetch state and the numbered headings of the four main treatments, prerequisite
publication, and the consumer interfaces. I did not re-derive proofs, judge
mathematical correctness, or audit the published suppliers' proofs — that is
Step 3b/Step 5 work — and I did not re-read all 112 harvested rows against the
sources line by line; my source check is at numbered-heading/disposition level
plus tag-to-lemma correspondence for the Stacks rows named above. On that
evidence I found no omitted topic, result or example of the pair's intended
subject, and I propose no merger or enrichment. The three `owner-decision` rows
are the only harvested content without a page home; they are reported, not
treated as a scope failure of this pair.

## Decision

**sufficient** for both pages of the pair. The planned definitions, results and
examples realise the audited 42-A/17-B AV-6 inventory (plus one declared local
prerequisite in the Bertini route), the plan and manifest identities agree,
the 10 sources are fetch-verified with complete dispositions for all 112
harvested rows, the two prerequisite pages and all 54 direct out-of-run
suppliers are published, and the pair's role — the library's classical
tangent-space, regularity, smoothness and Bertini supplier for the
normalization, flat/smooth/étale, curves and Serre-duality consumers — is
preserved. No enrichment or pair merger is needed, and Step 3b may author
against this scope.
