# Batch 28 notes — `em-magnetostatics-in-vacuum` / `-examples`

Run `physics-em-sr-40-2026-10-08`, role beta, Step 1 scaffold construction, 2026-10-09.
Scope: exactly one A/B pair, A page order **335**, B page order **336**, category
`classical-electromagnetism`, library `physics`. Final inventory: **9 A items + 3 B items**
(the six design A items, the three design B items, and three new local mathematical
prerequisites on the A page). No item file, page, published item, shared plan, engine
state or verdict was edited. Files written: this manifest
(`research/physics-em-sr-40-2026-10-08-batch-28.pages.json`, published through a
sibling temporary file and an atomic rename), the coverage file
(`...-batch-28.coverage.json`), the cross-batch dependency input
(`...-batch-28.cross-batch-dependencies.json`), the twelve `step1-<item>` readiness
records, this note, and the tool-refreshed unified dependency ledger. The binding
owner direction `research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md`
was read before constructing any item; its relevant clauses are checked under
"Owner-direction interfaces".

## Design vs plan

Design section `research/plan-classical-electromagnetism-track.md` L1838 ("Magnetostatics
in vacuum"), read together with the four required sources named at the head of that track
file: `prose-scaffold.md`, `proposed-inventory.json`, `completed-expansion-arguments.md`
(S1–S3) and `definition-contracts.md` (`def-em-steady-current-regime`,
`def-em-magnetic-moment`), plus the exact completed arguments in
`core-conditional-proofs.md#K4` and the companion-example verifications in
`worked-example-verifications.md#X3`.

Compared with `research/plan-spec.json` orders 335/336: page ids, kinds, orders, category,
library `physics`, titles, companion links and the declared `requires`
(`em-expanded-analysis-prerequisites`, `em-maxwell-integral-and-constraints` for the A
page; the A page for the B page) agree exactly, and the design-reserved inventories
(6 A items, 3 B items) are preserved with their exact ids and promise content. **No
page-metadata plan conflict.** The design's own `dependency_level` labels
(5, 6, 7, 6, 8, 8 / 6, 8, 9) were computed over a pre-run dependency set; under the run's
in-run convention the twelve computed levels are 0, 0, 1, 17, 18, 18, 19, 19, 20 (A) and
20, 18, 21 (B), and `item-dependency-levels check --run` confirms them.

## Inventory decisions (recorded, item by item)

The six design A items and three design B items keep their promised claims with exact
statements and complete proof strategies. Three local mathematical items were added to
the A page before their consumers, as the mandate requires for actual closure; no claim
was dropped and none weakened.

1. **`lem-em-ideal-line-current-field`** (new local prerequisite, mathematics, level 0).
   Needed because the declared ideal infinite-wire model has no home in the framework's
   existing source types (`def-em-weak-sources`(c) explicitly excludes line currents),
   and its admissibility requires the distributional identity
   `curl T_f = 2 pi e_3 delta_Z` for `f = rho^{-1} e_varphi`. The lemma states local
   integrability, the off-axis pointwise identities, the two distributional pairings and
   the circulation `2 pi`; the proof is a single finite-excision computation on the
   cylinder shell with the divergence theorem, the vanishing outer faces, the `O(eps)`
   inner-cylinder estimate and dominated convergence. No physical premise is used.
2. **`lem-em-ideal-cylindrical-sheet-field`** (new local prerequisite, mathematics,
   level 0). Needed for the declared ideal solenoid sheet, whose field is the piecewise
   constant cylinder field. The lemma proves `curl T_g = e_varphi delta_S` and
   `div T_g = 0` distributionally by one divergence-theorem application on the
   half-cylinder, and records the equivalent jump data. No physical premise.
3. **`lem-em-newtonian-kernel-curl-identity`** (new local prerequisite, mathematics,
   level 1). Needed because the Biot–Savart representation requires differentiating the
   Newtonian kernel at its singularity; the design's `thm-differentiation-under-the-integral-sign`
   cannot be applied directly (its hypothesis needs a dominating function for the
   parameter derivative, which fails near the pole), and the design itself allows "S1's
   integrable first derivative" as an alternative route. The lemma states
   `div A = N(div f)` and `curl A(x) = (1/4 pi) int f(y) x (x-y)/|x-y|^3 dy` for
   `f in C_c^infty(R^3;R^3)`, at every point including the support, with a complete
   finite-annulus excision proof. Its only in-run dependency is
   `lem-em-smooth-newtonian-upgrade` (batch 16).
4. **`def-em-steady-current-regime`** (design item, level 17). Clause (a) fixes the
   steady reduction of the adopted smooth Maxwell branch and derives `div J = 0` from
   continuity; clause (b) fixes the compact smooth current class exactly as the design
   contract states it for the compact kernel theorems; clauses (c1)–(c3) declare the
   three ideal models (closed thin loop, infinite straight wire, infinite cylindrical
   sheet) with their explicit distributional pairings, as the design requires ("ideal
   infinite wire/solenoid examples instead declare their noncompact distributions and
   symmetry/boundary data"); clause (c4) fixes admissibility (local integrability,
   `C^1` off the source, pointwise and distributional magnetostatic equations, declared
   symmetry, transverse far-zone decay); clause (d) records the exclusions. Deps
   reconciled: the design dep `pthm-em-charge-continuity` is kept and used only for
   `div J = 0` under `d_t rho = 0`; the formulation suppliers read from the batch-23/24
   manifests are `def-em-lab-geometry` (6), `def-em-si-conventions` (7),
   `def-em-fields` (8), `def-em-sources` (12), `post-em-vacuum-maxwell` (13),
   `def-em-weak-sources` (14), `post-em-distributional-vacuum-maxwell` (15) and
   `pthm-em-charge-continuity` (16); the remaining deps are published mathematics.
   Role reconciliation recorded (finding 1). The design's phrase "select no additional
   homogeneous field" is implemented as the *transverse* far-zone decay condition: the
   wire and solenoid fields do not decay at spatial infinity along their axes, so a
   literal "at infinity" reading would have been false; this is a correction of an
   over-strong reading, not a reduction of any promised claim (finding 3).
5. **`def-em-magnetic-moment`** (design item, level 18). Clause (a) defines
   `m = (1/2) int y x J dy` for the compact smooth class with its well-definedness and
   unit A m^2; clause (b) defines `m = (I/2) int gamma x gamma' ds` for the declared
   ideal thin loop (with the circle instance `I pi a^2 e_3` computed in the strategy);
   clause (c) records the status (a source moment, not rest mass, intrinsic spin or an
   observed quantity) and the scope (no far-field property, no equivalence between the
   two clauses, no higher multipole). The design's dep on
   `def-em-steady-current-regime` is kept; the design role `physical-result` is
   inadmissible for a definition supplier and is `formulation-prerequisite` here
   (finding 1).
6. **`pthm-em-magnetostatic-vector-potential`** (design item, level 18). Result
   `A = mu_0 N J` smooth, `-Delta A = mu_0 J` pointwise, `div A = 0` (Coulomb gauge),
   and `B = curl A` with `div B = 0`, `curl B = mu_0 J`. `div J = 0` is used exactly in
   the step `div A = mu_0 N(div J) = 0`. Deps: `def-em-steady-current-regime`,
   `def-em-si-conventions`, `post-em-vacuum-maxwell` (physical-assumption),
   `lem-em-smooth-newtonian-upgrade` and published mathematics
   (`def-divergence-and-curl-of-a-c1-vector-field`,
   `thm-the-divergence-of-a-curl-vanishes`, `cor-the-curl-of-a-curl-of-a-c2-field`,
   `def-laplacian-of-a-c2-function`, `def-directional-and-partial-derivatives`).
   The design dep `thm-newtonian-potential-solves-poisson-distributionally` is consumed
   transitively through S1 and is not used directly (finding 2).
7. **`pthm-em-biot-savart`** (design item, level 19). The design's first conclusion
   (the differentiated-kernel representation at every point) is transported from
   `lem-em-newtonian-kernel-curl-identity`; the design's S2 clause is a second assertion
   with the exact uniform-on-compacta convergence of `lem-em-thin-current-limit`.
   Deps: `pthm-em-magnetostatic-vector-potential`, `def-em-steady-current-regime`,
   `def-em-si-conventions`, the new lemma, `lem-em-thin-current-limit` and published
   mathematics. The design's `thm-differentiation-under-the-integral-sign` is replaced
   with the same conclusion (finding 2); the replacement lemma performs the
   differentiation with a finite excision rather than a dominated parameter derivative.
8. **`pthm-em-magnetic-dipole-field`** (design item, level 19). The uniform two-term
   far-field estimates for `A` and `B = curl A`, `r >= 2a`, with absolute constants and
   the explicit remainders, transported from the scaffolded
   `lem-em-magnetic-dipole-remainder` (batch 16, level 1) whose statement contains
   exactly them and whose `m` is the moment of `def-em-magnetic-moment`(a). Deps:
   `def-em-steady-current-regime`, `def-em-magnetic-moment`,
   `pthm-em-magnetostatic-vector-potential`, the remainder lemma, `def-cross-product-in-r3`.
   The design dep `lem-em-coulomb-dipole-remainder` (consumed inside S3) and the
   closure-ledger dep `pthm-em-biot-savart` are not used directly by the transport and
   were dropped rather than padded (finding 2).
9. **`pthm-em-magnetic-loop-force-torque`** (design item, level 20). Under the
   explicitly adopted thin-wire coupling (W) (the continuum Lorentz density of
   `post-em-lorentz-coupling`(ii) on the declared line-current distribution with
   vanishing line charge): the force and torque integrals; the exact constant-field
   results `F = 0`, `N = m x B`; the slowly varying results
   `F = grad(m . B)(0) + R_F` with `|R_F| <= |I| L a^2 M_2 / 2` and
   `N = m x B(0) + R_N` with `|R_N| <= |I| L a^2 M_1`; the discharge of (c)'s
   hypotheses for the external field of a compact smooth conserved current; and the
   scope. `div B = 0` (from `post-em-vacuum-maxwell`) is required for the first-order
   force identity: without it the identity carries `- m div B`, which was checked
   explicitly. The design dep `pthm-em-biot-savart` is retained with a genuine use in
   the sufficient-condition clause (d). Role corrections for the definition suppliers
   recorded (finding 1).
10. **`ex-em-circular-loop-axis-field`** (design item, level 20). The axis field
    `mu_0 I a^2 / (2 (a^2+z^2)^{3/2}) e_3` of the declared ideal loop, with the explicit
    integral evaluation; identified with the Biot–Savart field and the thin-current
    limit. Note that `lem-em-thin-current-limit`'s statement already contains the circle
    axis value, so the example re-derives the integral explicitly instead of quoting it.
    Deps: `pthm-em-biot-savart`, `lem-em-thin-current-limit`, `def-em-steady-current-regime`,
    `def-em-magnetic-moment` and published mathematics.
11. **`ex-em-infinite-wire-and-solenoid`** (design item, level 18). The declared ideal
    infinite wire (explicit field, local integrability, pointwise off-source equations,
    symmetry, transverse decay, circulation `mu_0 I`, distributional source equations)
    and the declared ideal cylindrical sheet (interior/exterior fields, jump
    `n x [B] = mu_0 K e_varphi` matched to the framework's tangential-sheet interface
    condition, distributional equations), with the scope clause. The design dep
    `pthm-em-integral-maxwell` is dropped because the declared line current and
    noncompact sheet lie outside its smooth test-geometry class; the identities it would
    motivate are verified directly instead (finding 2).
12. **`ex-em-wire-force-coupling`** (design item, level 21). The force per unit length
    `-(mu_0 I_1 I_2 / 2 pi d) e_1` between two declared ideal parallel wires, computed
    from wire 1's external field (the earlier B-page example) and the coupling (W) of
    the loop theorem applied to compact segments of wire 2, with the per-length limit
    from `x_3`-independence of the integrand. Self-fields and support forces excluded.

## Dependency verification (actual transitive uses, not declared edges)

All dep targets resolve: published imported items on disk, plus the in-run suppliers
`def-em-lab-geometry` (6), `def-em-si-conventions` (7), `def-em-fields` (8),
`def-em-sources` (12), `post-em-vacuum-maxwell` (13), `def-em-weak-sources` (14),
`post-em-distributional-vacuum-maxwell` (15), `pthm-em-charge-continuity` (16) and
`pthm-em-fixed-vacuum-jumps` (16) from batches 23/24, and
`lem-em-smooth-newtonian-upgrade` (0), `lem-em-thin-current-limit` (0),
`lem-em-magnetic-dipole-remainder` (1) from batch 16. Interfaces were checked by
reading the supplier statements in the batch manifests:

- **`lem-em-smooth-newtonian-upgrade`**: exact statement read (smooth compact data,
  `-Delta Nf = f` pointwise, `D^alpha Nf = N(D^alpha f)`); the graded derivative
  identity with `alpha = e_i` is the step that converts `div A` into `N(div J)` and
  `curl A` into the differentiated kernel.
- **`lem-em-thin-current-limit`**: exact statement read (divergence-free tangent
  distribution, smooth compact divergence-free mollifications, every-derivative uniform
  convergence on compacta disjoint from the curve, the explicit circle axis value and
  the explicit self-energy exclusion); consumed by `pthm-em-biot-savart`'s second
  assertion and by the circular-loop example, in both cases only away from the curve.
- **`lem-em-magnetic-dipole-remainder`**: exact statement read (the two uniform
  estimates, absolute constants, `B = curl A`, `m = (1/2) int y x J dy`); consumed
  verbatim by the dipole-field theorem.
- **`pthm-em-charge-continuity`**, **`def-em-weak-sources`**,
  **`post-em-distributional-vacuum-maxwell`**, **`pthm-em-fixed-vacuum-jumps`**: read
  for their exact hypotheses (smooth and distributional continuity statements; the
  distributional-source architecture with the explicit statement that line currents and
  noncompact sheets are excluded; the adopted singular-source equations; the
  stationary-sheet jumps with the normal from the minus to the plus side and
  `[F] = F_+ - F_-`). Every use on this page lies inside those statements' scopes, and
  the exclusions were carried into this page's own scope clauses.
- **Axioms**: no item of this batch uses the Axiom of Choice. Countable Choice enters
  only through published polar-coordinate/surface-measure interfaces
  (`thm-polar-coordinates-formula-for-lebesgue-measure`,
  `lem-euclidean-chart-measure-agrees-with-polar-surface-measure`), and the two new
  distributional lemmas and the kernel-identity lemma record it. No use of Recorded
  results and no `deferred-set-theory-beyond-choice` path.
- No missing, circular, forward or inadequate dependency was found at scaffold level.

## Owner-direction interfaces checked

- The direction's rule "Singular-source equations must be explicitly adopted under
  their own distributional scope; no point/sheet source is covered by the current
  L1-only Maxwell branch" is implemented in `def-em-steady-current-regime`(c)–(d): the
  declared line and noncompact-sheet models carry their own pairings and their own
  adopted distributional magnetostatic equations, the framework's
  `post-em-distributional-vacuum-maxwell` is cited as the precedent for that adoption,
  and no product of distributions is ever formed (every pairing is between a
  distribution and a smooth compact test).
- The direction's "Define, do not merely name" rule: every technical object is defined
  in place (steady-current regime, compact smooth class, the three ideal models,
  admissibility, magnetic moment in both model classes, the thin-wire coupling (W), the
  loop moment and its antisymmetric integrals). No reference frame or worldline is
  needed on this pair: the loop and the wires are static geometric curves, and the
  laboratory frame is the one of `def-em-lab-geometry`; no relativistic structure is
  imported.
- Fifth-reconciliation EM-primitive conventions (`F_{0i} = -E_i/c`, `j = (c rho, J)`)
  are not used here beyond the current density of `def-em-sources`.
- The fourth-reconciliation tensor/current corrections concern `def-em-sources` only
  through its frame-density interface; this page uses `rho`, `J` as densities and never
  the `rho_0 U^0` factorization.
- No published defects were found in any supplier used by this batch.

## Findings for owner reconciliation

1. **Role-label corrections (mechanical).** The design and closure-ledger assign role
   `physical-result` to dependencies on the *definitions*
   `def-em-steady-current-regime` (consumers 6, 9) and `def-em-magnetic-moment`
   (consumers 8, 9). `tools/physics-support/physics-content.mjs` rejects
   `physical-result` unless the supplier is a physics-theorem or thought-experiment, so
   those roles are `formulation-prerequisite` in the current manifests. No mathematical
   content changes.
2. **Dependency reconciliations (exact uses).** (i) `pthm-em-magnetostatic-vector-potential`:
   `thm-newtonian-potential-solves-poisson-distributionally` dropped (consumed inside
   S1); `def-em-si-conventions`, `def-directional-and-partial-derivatives` and the
   Laplacian/curl identities added as actual uses. (ii) `pthm-em-biot-savart`:
   `thm-differentiation-under-the-integral-sign` is not applied directly because its
   dominating-derivative hypothesis fails at the singular kernel; the new lemma
   `lem-em-newtonian-kernel-curl-identity` proves the same conclusion by a finite
   excision. (iii) `pthm-em-magnetic-dipole-field`: `lem-em-coulomb-dipole-remainder`
   and `pthm-em-biot-savart` dropped (S3 already contains both estimates and consumes the
   Coulomb-dipole remainder internally). (iv) `pthm-em-magnetic-loop-force-torque`:
   `post-em-vacuum-maxwell` added (required for `div B = 0` in the first-order force
   identity); the design dep `pthm-em-biot-savart` retained through the
   sufficient-condition clause. (v) `ex-em-infinite-wire-and-solenoid`:
   `pthm-em-integral-maxwell` dropped (the declared models lie outside its class);
   the direct verifications are strictly stronger for these models. Each row of the
   cross-batch input records the exact claim, use and status.
3. **Decay reading corrected.** The direction's "Select no additional homogeneous
   field" was implemented as transverse far-zone decay, not decay at spatial infinity:
   the infinite-wire and infinite-solenoid fields are translation invariant along the
   axis and do not decay at infinity in that direction. The definition and examples
   therefore use the transverse condition and never assert global decay for those
   models. This corrects a false strengthened reading; no promised content is dropped.
4. **Run-level observations, not this batch's.** At the time of writing,
   `physics-check --run --plan` reports one error on
   `ex-em-polarization-examples` (`role-supplier`: `def-em-polarization-definition` is
   not an established physical result) from a concurrent in-flight batch, and 22
   planned pages still carry no item list. `frontier-item-gate extcheck --manifest-only`
   cannot run while any batch manifest has an empty inventory (it throws on
   `physics-em-sr-40-2026-10-08-batch-25.pages.json`). No finding names any batch-28
   page or item; the batch-28 items declare no `forward_refs`, `external_refs` or
   `proved_here: false`, so the eventual scoped external check is vacuous for this
   pair.
5. **New local mathematics added.** Three mathematics items (`lem-em-ideal-line-current-field`,
   `lem-em-ideal-cylindrical-sheet-field`, `lem-em-newtonian-kernel-curl-identity`) sit
   on the A page before their consumers, as the mandate's preferred placement. The
   design/plan reserved inventories are unchanged (6 A + 3 B design items; 9 A + 3 B
   after the additions, far below the 100-item cap). If the owner prefers these
   identities on a mathematics prerequisites page, a re-home is required and the
   consumers' deps would be unchanged.
6. **`lem-em-thin-current-limit` overlap noted.** Its statement already contains the
   circular-loop axis value; the example `ex-em-circular-loop-axis-field` re-derives the
   integral explicitly (its verification is the computation, not a quotation). This is
   a deliberate duplicate check, not a second claim.
7. **Left/Landau transient retrieval failure recorded.** The Landau–Lifshitz URL
   returned an IIS "AW Special Error" HTML body under a generic browser user agent and
   then served the full 11900733-byte PDF; the failed attempt and the successful
   recovery are recorded in the coverage file, and the fetch stamp was obtained in
   `source-fetch-check --stamp`.

## Sources (four treatments, all full-text stamped 2026-10-09)

1. **D. J. Griffiths**, *Introduction to Electrodynamics*, 3rd edition, Prentice Hall 1999
   (textbook). Full scanned PDF (596 pp., 13484424 bytes, sha256_16 `ab7b67a3f6d60049`).
   Read: §5.1.3 pp. 208–214, §5.2.1–5.2.2 pp. 215–219, §5.3.1–5.3.3 pp. 221–231,
   §5.4.1–5.4.3 pp. 234–247, §6.1.2 pp. 255–260 (printed pages; offset 15).
2. **D. Tong**, *Electromagnetism*, Cambridge Part II lecture notes, 2026 printing
   (lecture-notes). Full-text PDF (236 pp., 1882418 bytes, sha256_16
   `b99b41156dfe6cd9`). Read: Ch. 3 pp. 41–66, with §§3.1.1–3.1.2, 3.2–3.2.4,
   3.3.1–3.3.2, 3.4.1–3.4.2, 3.5.
3. **L. D. Landau, E. M. Lifshitz**, *The Classical Theory of Fields*, Third Revised
   English Edition, Pergamon 1971 (monograph). Full-text PDF (387 pp., 11900733 bytes,
   sha256_16 `57de03326f8ebe4a`). Read: §§42–45 printed pp. 100–107 (Gaussian units
   re-expressed in SI).
4. **W. C. Chew**, *Lectures on Electromagnetic Field Theory*, Purdue University Fall
   2020 (lecture-notes). Full-text PDF (497 pp., 6558677 bytes, sha256_16
   `51495b51fe349871`). Read: Lecture 4 pp. 39–48 (§§4.1, 4.1.1, 4.3–4.3.4), Lecture 5
   pp. 49–52 (§5.1).

All eight source rows (four sources × two pages) are fetch-verified in the coverage file
(see "Checks run"); the three already-stamped by earlier batches (Griffiths, Tong,
Chew) carry the same byte hashes as their earlier stamps.

## Checks run (actual results)

- `manifest-deps` on batch 28: 12 items, 0 normalized, 0 errors.
- `item-dependency-levels check --run`: the twelve items compute 0, 0, 1, 17, 18, 18,
  19, 19, 20 (A) and 20, 18, 21 (B), matching their declared labels; the remaining
  errors are `empty scaffold inventory` rows for pages of batches still in flight
  (24 rows at the time of the first run and 22 rows in the final run, as concurrent
  batches publish); no error names a batch-28 page or item.
- `content-policy --manifest-only` over all forty manifests: 361 scoped items,
  0 errors, 0 warnings.
- `physics-check --run … --plan research/plan-spec.json`: 361 items checked, 1 error —
  the unrelated `role-supplier` finding on `ex-em-polarization-examples` (finding 4);
  no error names a batch-28 page or item.
- `coverage-checklist --require-destination` on batch 28: 2 pages, 46 harvested results,
  0 errors, 0 warnings.
- `source-fetch-check --stamp`, then check mode: 8/8 source rows fetch-verified (all
  newly stamped), 8/8 resolved; no drop or alternative source was needed.
- `step1-decisions record` ×12 (all `ready`) + `check --run`: 361 items, 361 ready; the
  22 remaining work rows are the empty inventories of pages still in flight, and none
  names a batch-28 page or item.
- `manifest-integrity --run`: 80 pages owed, 80 in the manifests, no scope drift.
- `drift-review-check --run`: 40 pages reviewed, 0 spec edits, no blocked edges;
  52 same-category requires edges checked, every owed A and B page strictly above
  95% published-or-earlier-in-run.
- `frontier-dependency-ledger refresh --run`: refreshed and deduplicated; the batch-28
  input contains 22 rows (2 page rows and 20 item rows), one per declared cross-batch
  edge, with 0 edges lacking a review row and 0 orphaned reviews.
- `frontier-item-gate … --tool validate-plan`: 0 errors, 23 warnings, none naming a
  batch-28 page; the run passes with "no item-level cycles, forward references, B-page
  dependencies, or unresolved ids among the 58 page(s) with item lists".
- `frontier-item-gate … --tool extcheck -- --manifest-only`: cannot run at Step 1
  (empty inventories in a concurrent batch's manifest; finding 4).
- KaTeX parse of every `$…$` and `$$…$$` expression in the batch-28 manifest:
  590 expressions checked, 0 errors; no wikilinks inside math; no multiline display
  delimiters.

## Honest uncertainty

- The twelve items are scaffolded with complete statements and proof strategies and
  with exact cited uses, but **no item file exists yet and no independent review has
  occurred**; Step 3 provides that. The lines to check at authoring time are: the
  inner-boundary limit and the surface-measure normalisation in the two excision
  lemmas; the cylinder-parametrisation/inside-outside conventions of
  `lem-em-ideal-cylindrical-sheet-field` versus `pthm-em-fixed-vacuum-jumps`; the
  quantitative Taylor constants `M_1, M_2` and the operator-norm reading of `D^2B` in
  the loop theorem; the neutral-wire reading of the coupling (W) and the exclusion of
  self-fields; and the transverse-decay formulation of the ideal-model selection.
- The design's dependency lists and the closure-ledger roles were written before the
  batch-16/23/24 suppliers were scaffolded; the reconciliations recorded above are the
  scaffolder's reading of the actual uses and must be re-verified against the authored
  supplier texts at Step 3, not treated as certification.
- The physics-content gate's scope settings (`--manifest-only` for policy, `--plan` for
  content) mean the item-level provenance and body checks run only after authoring;
  this note records Step-1 readiness, not a proof audit.
