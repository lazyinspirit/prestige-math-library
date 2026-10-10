# Batch 31 notes — `em-potentials-and-gauge` / `-examples`

Run `physics-em-sr-40-2026-10-08`, role beta, Step 1 scaffold construction, 2026-10-09.
Scope: exactly one A/B pair, A page order **341**, B page order **342**, category
`classical-electromagnetism`, library `physics`. Final inventory: **5 A items + 3 B items**.
No item file, page, plan, published item, engine state or verdict was edited. Files written:
this manifest (`research/physics-em-sr-40-2026-10-08-batch-31.pages.json`, published by atomic
rename from a sibling temporary file per the batch-11 direction), coverage, the cross-batch
dependency input, the `step1-*` readiness records for the eight items, this note, and the
tool-refreshed unified ledger. The binding owner direction
`research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md` was read first; its EM
interfaces were checked against every supplier this page consumes.

## Design vs plan

Design section `research/plan-classical-electromagnetism-track.md` L1938–L1964 (“Potentials and
gauge”), quoting the reservation in `proposed-inventory.json` and the research contracts in
`definition-contracts.md#def-em-gauge-transformation`, `core-conditional-proofs.md#K7`,
`completed-expansion-arguments.md#W6` and `worked-example-verifications.md#X5`. Compared with
`research/plan-spec.json` orders 341/342: page ids, kinds, orders, category, library `physics`,
titles, companion links, the declared `requires` (`em-boundary-and-spectral-prerequisites`,
`em-primitives-and-postulates`, `em-wave-equation-prerequisites`, `mixed-partials-taylor-and-extrema`)
and the reservation counts (5 A items, 3 B items) agree exactly. **No page-metadata plan
conflict.** Conflicts and supersessions recorded:

1. **Historical deps vs current interfaces.** The design's dependency lists were written before
   the mathematics prerequisites of this run existed. They are superseded, item by item, by the
   current native interfaces: `pthm-em-spacetime-potentials` now uses
   `lem-em-joint-smooth-potentials` (batch 13) and `def-em-potential-gauge-and-field-conventions`
   (batch 21); `pthm-em-gauge-reachability`'s wave branch is the batch-21
   `lem-em-gauge-wave-reachability` (which itself consumes `thm-em-wave-cauchy-kirchhoff`,
   batch 17), and its bounded-domain branch is closed locally with `thm-em-elliptic-boundary-existence`
   (batch 18) plus the published higher-order Dirichlet estimates, as the owner's reconciliation-2/3
   corrections require. The design's old `dependency_level` labels (4–8 over a pre-run set) are
   superseded by the run's computed in-run levels **14, 15, 16, 17, 18 (A)** and **15, 17, 18 (B)**;
   `item-dependency-levels check --run` reports no mismatch for any of the eight items.
2. **The mathematics of the gauge transformation moved to a mathematics item.** The historical
   design's `def-em-gauge-transformation` contract is now supplied in its mathematical content by
   `def-em-potential-gauge-and-field-conventions` (batch 21: potential pairs, field formulas,
   Lorenz divergence, wave expression, transform with its class drop). The physics item
   `def-em-gauge-transformation` therefore **adopts** those formulas and supplies only the
   framework-specific content: representations of the framework's field pairs, gauge equivalence
   as a relation, the smooth group action `T_{chi1}T_{chi2}=T_{chi1+chi2}`, the two gauge
   conditions, and the physical-status scope. No promised claim was dropped.
3. **Regularity bookkeeping made explicit.** The design says “smooth” everywhere. The scaffold
   states exact joint classes (C^k pairs, C^k generators giving C^{k-1} transforms; C^2 standing
   regularity for the wave-form identities; C^k, k>=3, for the decoupling equivalence through
   `pthm-em-spacetime-potentials`). This is a strengthening of the conventions, not a narrowing.
4. **Fifth-reconciliation C1-potential note.** The owner direction's “C1 potential representation
   of a C1 field” clause is carried by `def-em-electromagnetic-tensor` clause (c) on batch 23; this
   page cross-references it in the notes only and does not duplicate it or declare a dependency on
   it.
5. **B-leaf constraint on the examples (see Findings 2).** Four published example items and one
   homed on a B/examples page could not be consumed from this pair's B page; their content is
   proved inline from A-homed suppliers instead. The design's example claims are preserved in full.

## Inventory decisions (recorded, item by item)

All eight reservation items are kept with their promised content. Levels below are the computed
in-run levels; every `[[link]]` in a statement or strategy is in that item's `deps`.

1. **`pthm-em-spacetime-potentials`** (level 14). Physics theorem: on a star-shaped open
   `Omega`, for jointly C^k fields (k>=2) satisfying the two source-free Maxwell equations
   `div B = 0`, `curl E = -d_t B`, there are jointly C^k `A` and C^{k-1} `phi` with `B = curl A`,
   `E = -grad phi - d_t A`; C-infinity data give C-infinity potentials; the smooth converse is
   included. Route: `lem-em-joint-smooth-potentials` applied to `B` and then to `C = E + d_t A`
   (which is curled-free by commuting `d_t` with curl on the C^2 field `A`). Deps were extended
   beyond the design's list with the two exact calculus suppliers used by that commutation
   (`thm-clairaut-schwarz-mixed-partials`, `lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules`)
   and with the converse's `thm-the-divergence-of-a-curl-vanishes` and
   `thm-the-curl-of-a-gradient-vanishes`. No claim was weakened.
2. **`def-em-gauge-transformation`** (level 15). Physics definition with clauses (a) representations
   of a field pair, (b) gauge functions, transforms and equivalence with the smooth group action,
   (c) Lorenz and Coulomb conditions, (d) physical status and units. Reachability is excluded by
   contract, exactly as `definition-contracts.md` demands.
3. **`pthm-em-gauge-invariance`** (level 16). Physics theorem: for k>=2 a C^k generator sends a
   C^k pair to a C^{k-1} pair with the same field pair. Proof uses `curl grad chi = 0` and
   `grad d_t chi = d_t grad chi` (Clairaut). The physical clause is the gauge invariance of the
   framework's field pair.
4. **`pthm-em-lorenz-gauge-wave-form`** (level 17). Physics theorem with the exact identities
   `div E = W phi - d_t G` and `curl B - c^{-2} d_t E = W A + grad G`, the gauge-shift
   `G(T_chi) = G - W chi`, the decoupling equivalence (sourced Maxwell in Lorenz gauge = the two
   sourced wave equations, with the source-free pair automatic for a potential pair), and residual
   generators `W chi = 0`. The sign conventions were re-derived from
   `def-em-potential-gauge-and-field-conventions` (`E = -grad phi - d_t A`, `G = div A + c^{-2} d_t phi`,
   `W = c^{-2} d_t^2 - Delta`); no solvability is claimed.
5. **`pthm-em-gauge-reachability`** (level 18). Physics theorem in three clauses plus scope:
   (a) all-space slab Lorenz branch — the batch-21 `lem-em-gauge-wave-reachability` read for
   framework pairs, with AC_omega carried; (b) bounded C-infinity domain Coulomb branch — for a
   fixed time-independent smooth Dirichlet datum `g`, the generator
   `psi = h + R(eps_0 div A(.))` (with `h` the harmonic extension of `g` and `R` the zero-trace
   Dirichlet solution operator of `-Delta`) is jointly C-infinity and makes `div(A + grad psi) = 0`;
   the parameter argument is the difference-quotient argument using the boundedness of `R`
   (`L^2 -> L^2` by the zero-boundary coercivity; `H^k -> H^{k+2}` by the published higher-order
   Dirichlet estimate) and Sobolev embedding, and uniqueness is the elliptic uniqueness;
   (c) star-shaped residual classification — two C^2 Lorenz representations of the same field pair
   differ by a gauge generator with `W chi = 0`; (d) scope — no arbitrary prescribed boundary or
   initial restrictions, the Neumann variant is not claimed, and the instantaneous appearance of
   the Coulomb potential is an artefact of the representation, not a signal.
6. **`ex-em-topological-potential-obstructions`** (level 15; B item, physics domain because it
   consumes the physics potential theorem). Three clauses: (a) the curl-free field
   `(-y,x,0)/(x^2+y^2)` on the punctured line has circulation `2 pi` on the unit circle, hence is
   no gradient; (b) the divergence-free field `x/|x|^3` on `R^3 \ {0}` has unit-sphere flux `4 pi`,
   and patch Stokes on the two hemispherical rectangles with cancelling internal edges forbids a
   global C^1 vector potential; (c) `R^3 \ {0}` is simply connected, proved by the loop-level
   scaling reduction and the unit radial homotopy plus simple connectivity of `S^2`. Every supplier
   is A-homed; see Findings 2.
7. **`ex-em-pure-gauge-fields`** (level 17). Nonzero pairs `(-d_t chi, grad chi) = T_chi(0,0)`
   with zero field pair; explicit constant instance `(phi,A) = (beta,a)`.
8. **`ex-em-residual-lorenz-example`** (level 18). `chi = cos(k.x - omega t)` with `omega = c|k|`
   satisfies `W chi = 0`; by the wave-form and invariance items it changes Lorenz pairs while
   preserving `G` and the field pair, with the explicit transformed components. Free-space scope.

## Dependency verification (actual uses, not declared edges)

All 8 items' `deps` resolve against the run manifests and the published imported items on disk;
`manifest-deps` on the manifest reports 8 items, 0 errors; the run-level
`physics-check --run --plan` reports 0 errors; `content-policy --manifest-only` over all forty
manifests reports 0 errors and 0 warnings. The key interfaces were read on disk at the manifest
level and checked for hypotheses, direction, conventions and class bookkeeping:

- `lem-em-joint-smooth-potentials` (batch 13): exact star-shaped/joint-C^k statement, vector and
  scalar clauses, no global claim; used exactly.
- `post-em-vacuum-maxwell`, `def-em-fields`, `def-em-sources`, `def-em-lab-geometry`,
  `def-em-si-conventions` (batch 23): the source-free pair, the C^k field classes, the densities
  and units, the restricted chart; used with the same conventions (F_0i = -E_i/c etc. are not
  consumed by this page).
- `def-em-potential-gauge-and-field-conventions` (batch 21): potential pairs, E/B, G, W, T_chi,
  Lorenz gauge and the explicit no-solvability clause; adopted verbatim.
- `lem-em-gauge-wave-reachability` (batch 21): C-infinity extension class on the slab, zero Cauchy
  data at `t_0`, AC_omega carried, same-field conclusion, homogeneous difference; the consumer's
  clause (a) is this statement read for framework pairs.
- `thm-em-elliptic-boundary-existence` (batch 18): the Dirichlet branch with the C-infinity
  solution and uniqueness, the AC/AC_omega declaration; used for `h` and for the zero-trace
  solution operator.
- `lem-em-zero-boundary-coercivity` (batch 16): the (2L)^2 squared Poincare bound and its
  nonsquared consequence; used to bound `R` in L^2.
- Published `thm-higher-order-boundary-regularity-for-dirichlet-problems` and
  `thm-higher-order-sobolev-embedding`: the `H^{k+2}` estimate for zero-trace weak solutions of
  `-Delta u = f` on the bounded C-infinity domain and the embedding control used for joint
  continuity of mixed derivatives.
- For the examples, all consumed items were checked to be A-homed (see Findings 2): the line
  integral and gradient-theorem suppliers, the regular-surface and Stokes suppliers, the rectangle
  elementary-Green-region data, the radial homotopy and `S^2` simple-connectivity suppliers, and
  the finite-dimensional linear-map continuity suppliers.
- No missing, circular, forward or inadequate dependency was found; `item-dependency-levels
  check --run` shows no cycle and no label mismatch among the eight items. No choice principle is
  introduced beyond the AC/AC_omega declared in `pthm-em-gauge-reachability` and carried from its
  suppliers. No Recorded result is consumed and no `deferred-set-theory-beyond-choice` path exists.

## Findings for owner reconciliation

1. **Undeclared prerequisite pages (`validate-plan` FAIL, 7 rows, all naming this pair).**
   `frontier-item-gate --tool validate-plan` reports exactly seven `[undeclared-prereq]` rows and
   no other row for any other page at the time of this scaffold:
   - `em-potentials-and-gauge` needs **`em-causal-wave-kernel-prerequisites`** (in-run page,
     order 321: `def-em-potential-gauge-and-field-conventions`, `lem-em-gauge-wave-reachability`);
   - `em-potentials-and-gauge` needs **`sobolev-poincare-and-morrey-inequalities`**
     (`thm-higher-order-sobolev-embedding`);
   - `em-potentials-and-gauge-examples` (inherits from the A page) needs
     **`sine-cosine-and-the-definition-of-pi`** (`thm-sine-and-cosine-derivatives`,
     `cor-trigonometric-parity-and-pythagorean-identity`, `thm-quarter-turn-values-and-shift-formulas`,
     `thm-sine-cosine-signs-monotonicity-and-ranges`),
     **`fundamental-trigonometric-identities`** (`thm-sine-and-cosine-parametrize-the-unit-circle`),
     **`the-seifert-van-kampen-theorem`** (`thm-higher-dimensional-spheres-are-simply-connected`),
     **`partitions-of-unity-and-paracompactness`**
     (`lem-algebra-of-continuous-real-maps-on-a-space`), and
     **`em-causal-wave-kernel-prerequisites`**.
   The minimal repair is to add these six pages to page 341's `requires` (the B page inherits
   them); every named page is either an earlier in-run page or an imported published mathematics
   page. The plan's own three `redundant-prereq` warnings for `mixed-partials-taylor-and-extrema`
   on page 341 are unchanged and owner-held. All named suppliers are real, used, and were read;
   this is a plan-level `requires` declaration, not a missing mathematical prerequisite.
2. **B-leaf blockers forced inline re-proofs (recorded placement decision).** The pair's B page may
   not depend on items homed on B/examples pages. The following published items the research design
   wanted to use are homed on `the-divergence-theorem-and-classical-stokes-examples` (a B page):
   `cex-a-curl-free-c1-field-on-an-open-subset-of-r3-that-is-not-conservative`, the two
   inverse-square flux examples, and
   `ex-the-closed-ball-is-an-elementary-solid-region-with-the-octant-presentation`; and
   `ex-change-of-basepoint-isomorphism-for-fundamental-groups` is homed on
   `categories-functors-and-natural-transformations-examples`. The example therefore proves the
   corresponding content inline from A-homed suppliers (parameter pullback and the gradient
   theorem; the direct flux computation `4 pi`; the rectangle elementary-Green-region data and
   classical Stokes with edge cancellation; the loop-level scaling reduction and the unit radial
   homotopy with `S^2` simple connectivity). If the owner re-homes any of these five items to an A
   page (or authorizes a same-topic B-to-B exception), the example could be shortened; the
   scaffolded proof does not need them. This is the same discipline batch 23 recorded for its
   B-homed counterexample.
3. **Bounded-branch formulation decision (within the promise).** The Coulomb branch of
   `pthm-em-gauge-reachability` is stated for a **time-independent** smooth Dirichlet datum `g`
   (including `g = 0`), not for a general smoothly time-dependent datum, and the Neumann variant is
   explicitly not claimed. Reason: the parameter-smoothness argument is fully closed with the
   published suppliers for a fixed datum via the fixed harmonic extension and the zero-trace
   solution operator; a time-dependent datum would additionally need a constructed smooth
   extension family of the boundary data (or a continuity theorem for the datum-to-solution map),
   which is a deeper prerequisite than the design's "specified admissible boundary data" requires.
   The design's warnings are kept verbatim in spirit: no claim that arbitrary incompatible
   boundary or initial restrictions can be met, and no claim of a global Lorenz gauge on a bounded
   domain with prescribed data.
4. **Published defects: none found** among the suppliers consumed. The checked interfaces
   (`lem-em-joint-smooth-potentials`, `post-em-vacuum-maxwell`, the batch-21 gauge items, the
   batch-18 elliptic existence theorem, the batch-16 coercivity and regularity items, and the
   published calculus/surface/topology suppliers) state what this page uses; no statement was
   found false, mistyped or directionally wrong, and no imported snapshot was altered.

## Sources (five treatments; 9/9 fetch stamps at scaffold time)

1. **D. Tong, Electromagnetism, Cambridge Part II lecture notes, 2026 printing** (lecture-notes;
   author-hosted full PDF, 236 pp., 1 882 418 bytes, fetched and stamped). Read: §3.2.1 p. 47
   (magnetic monopoles and the inverse-square field), §3.2.2 pp. 48–49 (gauge transformation, the
   Coulomb-gauge Poisson construction), §3.2.4 pp. 52–53 (linking number), §5.3.1 pp. 105–106
   (potential representation, (5.13)), §6.1 pp. 134–135 (the Lorenz condition, the claim that
   `□chi = f` is solvable, (6.1)–(6.4)), §6.1.3 pp. 142–143 (checking Lorenz gauge). Dispositions:
   included for the definition, invariance, wave-form, reachability, pure-gauge and obstruction
   items; the conserved-current retarded statement is out of scope (retarded page).
2. **L. D. Landau and E. M. Lifshitz, The Classical Theory of Fields, 3rd revised English edition,
   Pergamon 1971** (monograph; 387-page full text mirror, fetched and stamped). Read: §16 pp. 44–45
   (four-potential), §17 pp. 46–48, (17.3)–(17.4) (E and H from the potentials), §18 pp. 49–50,
   (18.1)–(18.3) (gauge transformation, field invariance, “only gauge-invariant quantities have
   physical meaning”, the single auxiliary condition). Dispositions: included for the definition,
   invariance and reachability scope.
3. **G. Teschl, Partial Differential Equations, archived 2025 author manuscript** (textbook;
   fetched and stamped from the Internet Archive copy of the author PDF). Read: §7.1 pp. 167–170,
   (7.1)–(7.4), Theorem 7.2, Corollary 7.3, (7.11)–(7.12) (wave operator, Cauchy problem, Duhamel).
   Dispositions: inline for the wave-operator normalization, included for the slab solvability
   through the in-run wave supplier; §7.2–§7.3 out of scope.
4. **D. J. Griffiths, Introduction to Electrodynamics, 3rd edition, Prentice Hall 1999** (textbook;
   scanned full text mirror, fetched and stamped). Read: §10.1.1 pp. 416–418, §10.1.2 pp. 419–420
   (gauge transformations), §10.1.3 pp. 421–423 (Coulomb and Lorentz gauges, the Poisson equation
   for the Coulomb scalar potential, and the remark that `V` alone is not measurable). Dispositions:
   included for the wave form, invariance, reachability and the two gauge examples. The scan's OCR
   is noisy; every cited formula was cross-checked against Tong and Landau–Lifshitz.
5. **J. K. Hunter, Notes on Partial Differential Equations, UC Davis 2014** (lecture-notes;
   242-page author PDF, fetched and stamped). Read: §4.12 pp. 116–117, Theorem 4.31 and
   Corollary 4.32 (higher-order `H^{k+2}` Dirichlet estimate; smooth data give smooth solutions).
   Disposition: included as the exact quantitative supplier of the parameter-smoothness argument;
   §4.13 out of scope.

No retrieval failure occurred: `source-fetch-check --stamp` reports **9/9 fetch-verified**
(5 sources on the A page, 4 on the B page; all newly stamped), and check mode reports 9/9 resolved.
`coverage-checklist --require-destination` reports 2 pages, 28 harvested results, 0 errors,
0 warnings.

## Checks run (actual results)

- `manifest-deps` on batch 31: 8 items, 0 normalized, 0 errors.
- `item-dependency-levels check --run`: computed levels 14, 15, 16, 17, 18 (A) and 15, 17, 18 (B),
  matching the labels; the only errors are `empty scaffold inventory` rows for the pages of
  batches 24–30 and 33–40 still in flight at check time (no row names a batch-31 page or item).
- `content-policy --manifest-only` over all forty manifests: 325 scoped items, 0 errors,
  0 warnings.
- `physics-check --run physics-em-sr-40-2026-10-08 --plan research/plan-spec.json`: 0 errors,
  325 items checked.
- `coverage-checklist --require-destination` on batch 31: pass (above).
- `source-fetch-check --stamp` then check mode: 9/9 stamped, 9/9 resolved.
- `step1-decisions record` ×8 (all `ready`) + `check --run`: 325 items, 315 ready; no work row
  names this pair’s pages; the remaining rows are other batches’ empty inventories and missing
  readiness records.
- `frontier-dependency-ledger refresh --run`: refreshed and deduplicated; the batch-31 input has
  28 rows (25 item rows and 3 page rows — one more item row set than the initial 24 because four
  remaining vocabulary edges were reviewed as well), all 28 batch-31 edges carry an `open` review,
  0 orphaned reviews, no error.
- `manifest-integrity --run`: 80 pages owed, 80 in the manifests, no scope drift.
- `drift-review-check --run`: 40 pages reviewed, 0 spec edits, no blocked edges; 52 same-category
  requires edges checked, every owed A and B page strictly above 95% published-or-earlier-in-run.
- `frontier-item-gate --tool extcheck -- --manifest-only`: cannot run at check time;
  `readRunManifestPages` throws `Invalid or empty current page in
  physics-em-sr-40-2026-10-08-batch-25.pages.json` because batches 24–30 and 33–40 still have
  empty inventories (the same run-level limitation batches 20–23 recorded). The forward-reference
  rules that do apply to a scaffold are enforced by `content-policy --manifest-only`
  (`batch-forward-dependency`, `batch-b-leaf-target`), which passes over all forty manifests; no
  `fwdcheck` mode is offered by `frontier-item-gate` (its flag whitelist rejects it). These
  external-reference and later-page checks must be rerun by the owner once every batch inventory
  is populated.
- `frontier-item-gate --tool validate-plan`: FAIL with the seven `[undeclared-prereq]` rows of
  Finding 1 (all naming page 341 or 342; the three `redundant-prereq` warnings on page 341 are
  inherited from the plan and unchanged). No `b-leaf` row remains after the Finding-2 rewrite, and
  no error names any other page at check time.

## Honest uncertainty

- The eight items are scaffolded with complete statements and proof strategies and exact cited
  uses, but they are not authored item files and have not received independent review; Step 3
  provides that. In particular the following need line-by-line care at authoring time: the exact
  class bookkeeping of the two-step radial construction (A and phi may differ by one order); the
  pointwise derivation of the two identities of `pthm-em-lorenz-gauge-wave-form` including the
  `curl curl` identity and the constant `eps_0 = (mu_0 c^2)^{-1}`; the difference-quotient parameter
  argument of `pthm-em-gauge-reachability`(b), where the use of the `H^{k+2}` estimate, the L^2
  bound and the Sobolev embedding must be written out with their exact constants-dependence and the
  C-infinity-ness of `psi` concluded only after all mixed derivatives are shown jointly continuous;
  the residual classification's `h(t)` integration and its use of `lem-em-joint-smooth-potentials`;
  and the inline computations of the B examples (the 2 pi circulation, the 4 pi flux with the
  spherical seam, the induced boundary-chain cancellation on the two hemispheres, and the endpoint
  and basepoint details of the simple-connectivity argument).
- The bounded-branch scope decision (Finding 3) is a formulation choice inside the promised
  claim; if the owner prefers the general time-dependent datum, an additional smooth
  extension-of-boundary-data prerequisite must be scaffolded and proved first.
- The sources are third-party mirrors or author copies of printed works (Landau–Lifshitz mirror,
  Griffiths scan, Teschl archived manuscript); locators are the printed pages as shown by those
  documents, and OCR-suspect formulas were cross-checked between at least two treatments. The
  read extents above are the sections actually inspected, not the whole books.
- Findings 1–4 concern plan-level `requires` declarations, one placement constraint and one
  formulation scope; they are reported, not repaired. This scaffolder owns only batch 31.
