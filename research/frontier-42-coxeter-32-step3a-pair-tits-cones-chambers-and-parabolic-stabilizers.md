# Step 3a scope review — tits-cones-chambers-and-parabolic-stabilizers

- Run: `frontier-42-coxeter-32` (batch 9), role alpha, label
  `step3a-pair-tits-cones-chambers-and-parabolic-stabilizers-71176e4e50b56f32`.
- A page: `tits-cones-chambers-and-parabolic-stabilizers` (order 1734,
  `coxeter-groups`, 4 items) — 1 definition + 3 theorems:
  `def-cg-tits-cone-and-fundamental-chamber`,
  `thm-cg-tits-cone-finite-negativity-and-convexity`,
  `thm-cg-dual-chamber-intersections-and-point-stabilizers`,
  `thm-cg-tits-cone-interior-and-local-finiteness`.
- B page: `tits-cones-chambers-and-parabolic-stabilizers-examples` (order 1735,
  3 examples): `ex-cg-tits-cone-of-infinite-dihedral-type`,
  `ex-cg-chamber-face-stabilizers-in-a2`,
  `ex-cg-outside-tits-cone-point-with-infinite-stabilizer`. Companion pointers
  agree A↔B; the B page's only `requires` is the A page.
- Decision: **sufficient** at the current pair scope hash, recorded with
  `tools/step3-decisions.mjs record-scope` as a non-owner review. Scope only:
  no item approval, no owner record, no scaffold, plan, manifest or page edit.

## Evidence read

- `research/frontier-42-coxeter-32-batch-9.pages.json` (all 4 A + 3 B items,
  full statements, strategies and sources), `...-batch-9.coverage.json`
  (2 sources, 25 harvested rows), `...-batch-9.notes.md` (scaffold record,
  recorded clarifications, two verification passes), `...-batch-9.cross-batch-dependencies.json`
  (55 rows: 1 page edge, 52 declared item edges, 2 `removed` uniform-proposal
  rows).
- Prose design and binding inputs: `research/plan-coxeter-groups-track.md`
  §CG-06 (lines 212–226, four named A contracts and the three B companion
  tasks); the native prose scaffolds `library/coxeter-groups/tits-cones-chambers-and-parabolic-stabilizers{,-examples}.md`
  (empty item lists; the four contracts and the three checks restated);
  `research/plan-spec.json` rows 1734/1735 (empty item arrays; `requires` and
  companion equal the manifests); `research/coxeter-scaffold/inventory.json`
  CG-06 contracts; `research/coxeter-scaffold/definition-justifications.json`
  (the definition's justifier is the finite-negativity theorem);
  `research/coxeter-scaffold/independent-audit.md` (interior route:
  infinite-parabolic negative perturbations); `research/coxeter-scaffold/geometric-source-report.md`
  §"Canonical representation and Tits cone".
- Owner inputs: `research/frontier-42-coxeter-32-owner-scope.json` (this pair is
  a selected Coxeter pair), `research/frontier-42-coxeter-32-owner-authoring-direction.md`;
  `research/frontier-42-coxeter-32-alpha-step1-drift.md` §this page (verdict
  `no-drift`, "No prerequisite gap"); the seven step-1 readiness records
  `research/frontier-42-coxeter-32-step1-<item>.json` (all `decision: ready`,
  examined dependencies equal the manifest `deps`).
- Sources re-verified for this review (downloaded fresh; byte-identical to the
  coverage stamps): M. W. Davis, *The Geometry and Topology of Coxeter Groups*
  (author manuscript), 600 pp, 4 220 570 bytes, sha256_16 `ccefbb950fdcfce9` —
  read Lemma D.1.5 Cases 1–2 (printed pp. 440–441), Examples D.2.1(i)–(ii),
  Lemmas D.2.2–D.2.5, Theorems D.2.6(i)–(iii), D.2.7(i)–(ii), D.2.8–D.2.10 and
  the D.2 notes (printed pp. 442–446); N. Perrin, *Introduction to Kac–Moody
  groups and Lie algebras*, 279 pp, 1 703 352 bytes, sha256_16 `c273a40a1801bbcb`
  — read §6.5 Definition 6.5.1 and the complete Theorem 6.5.2(i)–(vi) with
  proof (printed pp. 55–56).
- Checks I ran: recursive resolution of the seven items' 104 declared `deps`
  entries (67 in-run suppliers, 37 published `items/*.md`, 0 unresolved); a scan
  of all 32 run manifests for consumers of the pair and for the deferral
  destinations; the consumer-side cross-batch ledger rows declaring the
  required supplier clauses; a scan for in-run promises of the out-of-scope
  Davis clauses (segment crossing, centre) — none found.

## Scope against the prose design

All four CG-06 design contracts are present with their exact ids and kinds, and
each manifest statement carries the design's clauses:

1. `def-cg-tits-cone-and-fundamental-chamber` — U=⋃_{w∈W} wC, U° as the
   ordinary finite-dimensional interior (with the coordinate metric on V* and
   basis-independence), Neg(f) for f∈V*, and the explicit abstentions: no
   convexity, no boundary/local-finiteness assertion, no finiteness of Neg(f) —
   exactly the design's "definition, asserts neither convexity nor local
   finiteness". The recorded justifier is the finite-negativity theorem, as
   `definition-justifications.json` requires.
2. `thm-cg-tits-cone-finite-negativity-and-convexity` — the criterion
   f∈U ⇔ Neg(f) finite, the chamber clause Neg(f)=∅ ⇔ f∈C, the one-letter
   reduction Neg(s·f)=r_s(Neg(f)∖{e_s}) with the iteration into C, convexity
   and nonnegative scaling, and the inversion-set bounds Neg(f)⊆N(w^{-1}),
   |Neg(f)|≤ℓ(w). These are the design's clauses, including the endpoint t=0,1
   and the reduction step.
3. `thm-cg-dual-chamber-intersections-and-point-stabilizers` — walls are root
   hyperplanes; the open-chamber side rule with the left/right convention
   wC°⊆{f(e_s)>0} ⇔ ℓ(sw)>ℓ(w); the collision theorem (f,g∈C, w·f=g ⇒ f=g and
   w∈W_{S(f)}) proved by the left-descent induction, not by a faithful-action
   shortcut; the point-stabilizer formula Stab_W(f)=W_{S(f)} and its conjugate
   form on U; the intersection rule wC∩C=⋃_{T⊆S, w∈W_T} \overline{C_T}; and
   the strict fundamental domain. This is the design's contract including the
   explicit instruction to give the general intersection rule.
4. `thm-cg-tits-cone-interior-and-local-finiteness` — f∈U° ⇔ W_{S(f)} finite
   for f∈C; U°=⋃_w w·C^f; the neighbourhood/compact-set local finiteness of
   chambers and walls in U°; the boundary clause (perturbations f−tδ_I outside
   U arbitrarily close to f; infinitely many chambers meet every neighbourhood)
   with the explicit "no local finiteness is claimed at the boundary"; and
   0∈U° ⇔ W finite. This is the design's contract, including the infinite-case
   argument and the ban on boundary local finiteness.

The B page has exactly one item per design promise: the D∞ Tits cone with its
boundary and stabilizers (design: "draw the Tits cone of infinite dihedral type
and compare its boundary with the interior"); the A₂ wall/face stabilizers with
the orbit and intersection checks (design: "check a wall stabilizer in A₂");
and the product-type point outside U with infinite stabilizer (design: "show
why an arbitrary vector outside the Tits cone need not have a finite parabolic
stabilizer"). Nothing designed was dropped, weakened or moved, and no item
beyond the four contracts and three companion tasks was added. The manifest is
therefore the complete current inventory (`plan-spec.json` carries empty item
arrays for both pages).

## Source coverage

The coverage block names 2 fetch-verified treatments and 25 harvested rows:
11 `included`, 6 `inline`, 3 `deferred` and 5 `out-of-scope`, each with a
specific reason or destination. My independent re-read of the two sources
confirms the load-bearing locators and dispositions:

- Davis D.1.5 Case 1 (dual-basis formulas, the affine line x₁+x₂=1, the cones
  Cₙ over its unit intervals) and Case 2 (m finite: 2m sectors) → the D∞ and A₂
  examples; D.2.1(i) → the D∞ example; D.2.2 → the side rule of the collision
  theorem; D.2.3/Cor. D.2.4/D.2.6(ii)–(iii) → the interior theorem; D.2.5 and
  Lemma 6.6.8 → the collision theorem; D.2.6(i) `inline` (the bijection/fibres
  content is clauses (3) and (6)); D.2.7(i) → convexity; D.2.7(ii)
  `out-of-scope` (no item of the run promises a segment face-crossing count);
  D.2.8–D.2.9 `deferred` to `davis-cat-zero-geometry-and-finite-subgroup-fixed-points`
  (batch 30), which contains the promised
  `thm-cg-finite-subgroups-lie-in-spherical-parabolics`; D.2.10 `out-of-scope`
  (no in-run item promises the centre theorem); Lemma 4.2.2 `inline` in the
  collision theorem; and Remark 4.8.1 with Tits' Lemma 4.8.3 `deferred` to
  `canonical-roots-signs-and-faithful-reflections` (batch 7), which carries
  the `(P_n),(Q_n)` rank-two induction item.
- Perrin 6.5.1 → the definition; 6.5.2(i),(ii) → stabilizers and the
  fundamental-domain clause; 6.5.2(iii) → the finite-negativity criterion and
  convexity; 6.5.2(v) `deferred` to
  `finite-coxeter-diagrams-and-complete-classification` (batch 13, containing
  `thm-cg-finite-type-positive-definite-criterion`); 6.5.2(vi) `inline` in the
  interior theorem; 6.5.2(iv) `out-of-scope` (coroot-difference clause, used by
  no item).

Two source caveats are recorded and correctly handled; I verified both against
the fetched texts:

1. **Davis D.2.1(i) erratum (recorded; not imported).** The printed sentence
   "U is the half-plane x₁+x₂⩾0" is inconsistent with the same example's
   "C^f=C−{0} ... and I is the corresponding open half-plane" (I=⋃_w wC^f=U∖{0}
   forces U={x₁+x₂>0}∪{0}) and with Lemma D.2.3/Corollary D.2.4. Case 1's own
   computation (cones over the unit intervals of x₁+x₂=1) gives the same correct
   union. The pair's D∞ example proves U={Δ>0}∪{0} directly and does not import
   the slip. Recorded in the batch-9 notes (item 4) and again as a source
   erratum in the batch-17 notes (item 2).
2. **Perrin 6.5.2(vi) notation (recorded; stabilizer form proved).** The
   printed `|Wh|<∞` is the isotropy subgroup in the proof (`S′` = simple
   reflections in `Wh`); the item proves the stabilizer criterion (clause (1)),
   matching the design. The orbit reading would be false in the source's own
   setting: for W=D∞×ℤ/2 and f with f(e_s)=f(e_t)=0, f(e_u)=1 one has
   W·f={f,u·f} of size 2 while W_f=W_{s,t}≅D∞ is infinite, so f∉U°. The
   batch-9 notes (item 5) record the same reading without a verbatim import.

## Dependencies, consumers and unmet prerequisites

- All 104 declared `deps` entries of the seven items resolve: 67 in-run
  suppliers (batches 2, 4, 7 and same-batch 9) and 37 published items, with 0
  missing. The cross-batch ledger carries the declared page edge (B and CG-10
  require the A page), 52 item edges and 2 `removed` uniform-proposal rows, all
  consistent with the manifest `deps`.
- The in-run suppliers were read and do promise the consumed clauses:
  `def-hh-coxeter-matrix-word-group-and-length` (presented group, length, W_J,
  parity/exchange/deletion); batch 4's `def-cg-real-coxeter-form-and-reflection`
  (B(e_s,e_t)=−cos(π/m), −1 for m=∞; reflection formula),
  `def-cg-canonical-reflection-homomorphism` (ρ, Φ, V₊),
  `def-cg-dual-chambers-and-reflection-hyperplanes` (dual action, C, C°, C_I,
  H_α) and `lem-cg-dual-action-and-chamber-faces-exist` (rank-two chamber
  pictures); batch 7's root-sign, root-length/faithfulness, inversion-set and
  |N(w)|=ℓ(w)/strong-exchange items. Each consumer-side interface row
  (batches 13, 17, 25, 26, 27, 29) declares required clauses that the pair's
  statements contain.
- Consumers: 7 in-run items on 6 later pages use this pair
  (`thm-cg-finite-type-positive-definite-criterion`; the CG-14 tiling theorem
  and D∞ degeneration example; `lem-cg-fundamental-weight-orbit-and-schreier-distance`;
  `thm-cg-davis-complex-cell-incidence-and-stabilizers`;
  `lem-cg-affine-slice-simplex-and-wall-reflections`;
  `lem-cg-finite-dihedral-subsystems-and-canonical-roots`), and the B page is a
  consumption leaf (no page or item outside the pair depends on its examples).
  The coverage's deferral destinations are live scaffold pages with the
  promised results. No consumer needs a clause this pair does not state, and
  no prerequisite of the pair is absent from both the published library and
  the current scaffold: **no confirmed unmet prerequisite**.
- Considered and set aside: the geometric source report's candidate contract
  list also mentions a finite segment face-crossing count (Davis D.2.7(ii)) and
  compact-set properness of the interior action. The design's CG-06 contract
  list does not include them; the coverage disposes of D.2.7(ii) as
  out-of-scope with a reason, and no in-run item promises either. The interior
  theorem's clause (3) is the local-finiteness statement that downstream items
  consume, and compact-set properness is a two-line consequence of it together
  with the trivial setwise stabilizer of a chamber. No scope action is needed.

## Flagged findings for the owner (non-blocking)

1. **In-run supplier defect already routed: `lem-cg-dual-action-and-chamber-faces-exist`
   (batch 4, page `real-forms-and-reflection-geometry`), clause (3)(ii).** The
   item states that for m(s,t)=∞ "the union [of the chambers] is the closed
   half-plane {f:f(e_s+e_t)⩾0}". The correct union is {Δ>0}∪{0}: every chamber
   is the cone over a unit interval of the affine line {Δ=1}, so it lies in
   {Δ⩾0} and meets {Δ=0} only at the origin (C∩{Δ=0}={0}, and u^k, s preserve
   Δ with u^k·f=f on {Δ=0}). The same slip appears in the source (Davis
   D.2.1(i)), is recorded as an in-run defect in the batch-17 notes (item 1,
   with the planned repair "replace the union sentence in the statement and
   strategy of clause (3)(ii) by the correct union") and in the batch-17
   consumer-side ledger rows. This pair does **not** consume the defective
   sentence: its D∞ example cites (3)(ii) only for the correct "traces are unit
   intervals / these are the chambers" part and computes the union itself; the
   A₂ example uses the finite-m clause (3)(i); the interior theorem uses clause
   (2). The batch-4 scope review recorded 2026-10-07T07:25:28Z does not mention
   the defect. Recommended owner action: apply the recorded repair before any
   Step-3b author cites the union sentence, and align the loose phrase
   "chambers tile the half-plane" in the strategy of batch-7
   `lem-cg-rank-two-prefix-and-chamber-length-induction` at the same time (its
   actual use — the open-chamber dichotomy — is unaffected).
2. **Source erratum (recorded).** Davis D.2.1(i) prints the closed half-plane as
   U for D∞; the scaffold proves the correct statement and cites the correct
   clauses. No item imports the erratum.
3. **Source notation caveat (recorded).** Perrin 6.5.2(vi)'s `|Wh|` is the
   isotropy subgroup of the proof; the orbit reading would be false, and the
   pair's stabilizer form (clause (1)) is the correct reading.

## Unresolved uncertainty

None material to the scope decision. The only open item is the timing of the
already-recorded batch-4 repair (finding 1), which is owner/cross-batch work
and does not change this pair's scope; if the owner prefers not to repair it,
Step-3b authors must still cite only the correct parts of clause (3)(ii).

## Recording

Decision **sufficient** recorded with
`node tools/step3-decisions.mjs record-scope --run frontier-42-coxeter-32
--page tits-cones-chambers-and-parabolic-stabilizers --decision sufficient`
at scope hash `e789e0f92140cb3538fac9503fb9e0c62fa64f33ace92365f8e2e07e55e76f32`
(2026-10-07T07:27:36Z); the reason names this report and the finding above.
Receipt:
`research/frontier-42-coxeter-32-step3a-review-tits-cones-chambers-and-parabolic-stabilizers.json`.
`node tools/step3-decisions.mjs check --run frontier-42-coxeter-32 --phase scope`
no longer lists this pair among the open work items.
