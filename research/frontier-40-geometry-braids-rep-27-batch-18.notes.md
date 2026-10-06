# Batch 18 notes — Unipotent and Solvable Groups and Borel Fixed Points

- Run: `frontier-40-geometry-braids-rep-27` (role: beta; batch 18).
- Pair: A889 `unipotent-solvable-groups-and-borel-fixed-points` (order 889,
  `algebraic-geometry`) and B890 `unipotent-solvable-groups-and-borel-fixed-points-examples`.
- Design row: `research/plan-algebraic-geometry-expansion-track.md` line 216,
  section **AG-GRP-3**. Binding direction read first:
  `research/frontier-40-geometry-braids-rep-27-owner-authoring-direction.md`
  (27 selected pairs; in-run lower-order dependencies permitted; publication is
  an owner action).
- Deliverables written: `.pages.json` (46 A + 3 B items), `.coverage.json`
  (2 pages, 5 source rows, 88 harvest rows), this notes file, the batch
  cross-batch dependency review, and 49 Step-1 readiness records.

## Design compliance and recorded conflicts

- **No plan conflict on scope.** The manifest page fields (order, kind, category,
  title, companion, `requires`) match `research/plan-spec.json` exactly for both
  pages; `manifest-integrity` reports "no scope drift". The design `requires`
  AG-GS-1/2, AG-ACT-1, AG-GRP-2 and "projectivity/complete schemes as
  appropriate"; the plan's five-entry `requires` list is preserved unchanged.
- **Inventory preserved and closed locally.** All seven design-inventory ids are
  present verbatim (`thm-unipotent-group-triangular-criterion`,
  `thm-lie-kolchin-for-smooth-connected-solvable-groups`,
  `thm-borel-fixed-point-for-complete-schemes`,
  `thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field`;
  `ex-upper-triangular-unipotent-groups`,
  `ex-borel-fixed-point-on-projective-space`,
  `cex-borel-fixed-point-needs-completeness`). The remaining 42 A items and 0 B
  items are local prerequisites required to prove the design inventory; they are
  marked `local_addition: true` and `design_row: AG-GRP-3`.
- **Design warnings honoured.** Every principal statement now names smoothness,
  connectedness, affineness, algebraic closedness and completeness where the
  proof uses them (see the repair list). No characteristic-zero Lie/unipotent
  equivalence (Milne 14.37, Ado/Engel) is imported or claimed; the char-zero
  Cartier material stays on the AG-GS-3 page. The existing complex AG-LIE
  Borel-fixed-point page is treated as a specialization, never as a replacement.
- **Second-source gate (design: "Second-source gate open").** The pair's main
  claims now have two independent treatments in full text: Milne, *Algebraic
  Groups* (2022 corrected printing, textbook) and Herzig, *Linear Algebraic
  Groups* (Toronto lecture notes, 2013), whose §2.1-2.3 and §5.1-5.5 prove the
  unipotent criterion, Lie-Kolchin, the Borel fixed-point theorem, the structure
  of solvable groups and the conjugacy statements. **Residual shortfall,
  recorded honestly:** the Hochschild cohomology/Ext apparatus (Milne Ch. 15)
  and the G_a-torsor triviality (Milne 2.68/2.72) have only Milne among the
  sources read; Herzig's notes contain no cohomology, no torsors and no flag
  varieties. No second independent treatment of those local prerequisites was
  retrieved in this dispatch, and none is claimed. Under the owner's current
  rule a complete local proof and dependency chain is required for such items;
  the Step-3 author owns the missing second treatment or an explicit
  escalation.
- **Milne 2022 vs 2015 discrepancy (recorded, binding for the proof route).**
  The 2022 proof of Theorem 17.1 writes "In the contrary case, $N \stackrel{\rm
  def}{=} G^0\cdot H$ is a proper normal algebraic subgroup of $G$, which is
  smooth and connected (6.41)" (iAG2022.pdf, extracted text line 24147). The
  claim that the product of the subgroups $G^0$ and $H$ — as a scheme, the image
  of the multiplication morphism — is smooth was not independently verified
  here. The 2015 edition proves the fixed-point theorem directly by Borel's
  original induction (Corollary 18.4 and Notes 18.8; iAG200.pdf), and that is
  the route the scaffold uses. This is a recorded source uncertainty about one
  step of the 2022 rendering, not a claim that Theorem 17.1 is false.

## Mathematical repairs made during construction

1. **Affineness made explicit.** Milne's standing convention in Chapters 12-17
   is "all algebraic groups are affine", while this library's `def-group-scheme-
   over-a-field` allows non-affine algebraic groups. Statements that use rational
   representations, comodules, Chevalley's theorem, Borel/flag theory or
   quotients now say "affine algebraic group (an affine group scheme of finite
   type)" and depend on `def-affine-scheme` where needed. Without this,
   `lem-dimension-one-smooth-connected-group-is-ga-or-gm` is false for an
   elliptic curve, and `thm-borel-fixed-point-for-complete-schemes` is false for
   an elliptic curve acting on itself by translation (smooth connected solvable,
   complete X, no fixed point).
2. `def-unipotent-algebraic-group` no longer uses the not-yet-defined symbol
   $U_n$; the matrix formulation is written out. The finite-dimensional
   reduction depends explicitly on the batch-13 item
   `lem-finite-dimensional-subcomodules-contain-elements`.
3. `thm-unipotent-group-triangular-criterion` no longer claims that "every
   algebraic group is affine after choosing an affine chart"; the affine
   hypothesis is stated, and the equivalence with a faithful unipotent
   representation is kept.
4. `lem-smooth-finite-type-schemes-have-schematically-dense-rational-points`
   had a false statement (a nonreduced $X$, e.g. $\operatorname{Spec}k[\varepsilon]
   /(\varepsilon^2)$, with $Z=\operatorname{Spec}k$ refutes the old
   "$Z(k)=S$" form). It now assumes $X$ reduced and concludes from
   $Z(k)\supseteq S$; density of $k$-points is supplied by the published
   `lem-nonempty-smooth-scheme-finite-separable-point`, and $\mathrm{AC}$ is
   declared.
5. `lem-closed-finite-index-subgroup-of-connected-group-points`: the false claim
   that $|X|$ is homeomorphic to its set of closed points was removed. The proof
   now uses that $G(k)$ is a dense subspace of the irreducible space $|G|$, so
   $G(k)$ is irreducible, and that cosets are closed.
6. `cex-borel-fixed-point-needs-completeness` no longer depends on the batch-14
   **B-page** item `ex-additive-and-infinitesimal-group-schemes` (a B-leaf
   violation) and no longer asserts an unsupported claim about orbits being
   non-closed. It is self-contained via the same-page $G_a\cong U_2$ example,
   the group-scheme definition and `def-proper-morphism`.
7. `thm-maximal-diagonalizable-subgroups-of-trigonalizable-groups-are-conjugate`
   (c) is restricted to smooth $G$: otherwise $D=G/G_u$ can be a finite
   diagonalizable group (e.g. $G=\mu_p$), and the images of sections are not
   tori.
8. `thm-trigonalizable-extensions-split-over-algebraically-closed-fields`: the
   garbled pull-back sentence was repaired. Its Proposition 15.34(a) input is
   stated over an **arbitrary field**, because cases (b) and (c) need perfect
   (not algebraically closed) fields.
9. `lem-central-ga-subgroup-of-smooth-connected-unipotent-group`: centrality of
   the last term is now derived from the central series of $U_n$ (6.49), not from
   normality alone.
10. Borel-subgroup ordering repaired: `lem-borel-subgroup-is-the-stabilizer-of-
    a-maximal-flag` now speaks only about subgroups of largest possible
    dimension, and `thm-borel-and-maximal-torus-conjugacy-...` first proves
    completeness of $G/B_0$ for a largest-dimension Borel, then conjugates every
    Borel subgroup to $B_0$, and only then claims completeness for all $B$. This
    removes the apparent circularity in Milne 17.9.
11. `thm-borel-fixed-point-for-complete-schemes` uses faithful flatness of the
    orbit map (smooth $G$) for the quotient step; the earlier Chevalley
    reference belongs to the flag-stabilizer lemma, not to this proof.
12. Source-locator audit: Herzig's notes contain no torsors, no flag varieties,
    no "trigonalizable" and no density statements, so the references naming such
    content were **removed** from those items
    (`def-trigonalizable-algebraic-group`,
    `lem-upper-unitriangular-central-series`,
    `lem-smooth-finite-type-schemes-have-schematically-dense-rational-points`,
    `lem-closed-finite-index-subgroup-of-connected-group-points`,
    `lem-flag-variety-of-a-vector-space`,
    `lem-borel-subgroup-is-the-stabilizer-of-a-maximal-flag`,
    `lem-ga-torsors-over-affine-schemes-are-trivial`). Surviving Herzig locators
    were corrected to the sections actually present in the notes (§2.1, §2.2,
    §2.3, §5.1, §5.2, §5.3, §5.4, §5.5). Milne A.75(g) is on printed p. 588
    (not 559), and the fixed-point/isotropy material is Milne 2022 Chapter 7
    §§7(b)-(c), not "§9".

## Sources and verification evidence

| Source | URL | Verified full text |
|---|---|---|
| Milne, *Algebraic Groups*, corrected 2022 printing (textbook) | https://www.jmilne.org/math/Books/iAG2022.pdf | 4,838,013 bytes, 659 pages, SHA-256 `f2ddd8fa4d263085…` (stamp) |
| Milne, *Algebraic Groups*, v2.00 (2015) (textbook) | https://www.jmilne.org/math/CourseNotes/iAG200.pdf | 3,981,038 bytes, 529 pages, SHA-256 `385dd0d5a65db056…` (stamp) |
| Herzig, *Linear Algebraic Groups*, Toronto 2013 (lecture notes) | https://www.math.toronto.edu/~herzig/lin-alg-groups13.pdf | 743,596 bytes, 88 pages, SHA-256 `23e6c6d133264dbe…` (stamp) |

All three documents were read in full over the ranges recorded in the coverage
locators (extracted text inspected; the locators were corrected against those
extracts). The 2015 edition is retained as a source of the actual Borel fixed
point proof route and is **not** counted as an independent second treatment of
Milne 2022.

## Dependencies

- **Levels.** `max dependency_level` on the A page is 14
  (`thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field`),
  on the B page 15 (`ex-borel-fixed-point-on-projective-space`); the minimum is
  0. No cycle exists in batch 18 (checked by direct recomputation and by the
  item-dependency-levels tool: it reports no batch-18 error).
- **In-run suppliers.** Batch 18 consumes A items of batch 13 (order 873,
  `affine-group-schemes-…`) and batch 15 (order 877,
  `algebraic-group-actions-…`), both scaffolded in this run and not yet
  published. The reviewed cross-batch file records 41 open edges (2 page edges
  plus 39 item edges) with no orphaned reviews; every consumer item lists the
  supplier in `deps`. Batches 13/15 must be certified before these consumers are
  final. One earlier edge into batch 14's B page was removed (see repair 6).
- **Out-of-run suppliers.** `group-schemes-of-finite-type-over-a-field`,
  `groups-of-multiplicative-type-and-arithmetic-tori`,
  `nonaffine-algebraic-groups-…`, `finite-proper-and-projective-morphisms` and
  the supporting published items are treated as published content; they do not
  raise in-run levels.

## Axiom of Choice inventory

Fifteen items declare `def-axiom-of-choice` and say "Assume the Axiom of
Choice." in the statement:
`lem-smooth-finite-type-schemes-have-schematically-dense-rational-points` (via
the published finite-separable-point lemma), its consumers
`lem-closed-finite-index-subgroup-of-connected-group-points`,
`prop-smooth-commutative-algebraic-groups-are-trigonalizable`,
`lem-fixed-locus-and-normal-orbit-closure`,
`thm-lie-kolchin-for-smooth-connected-solvable-groups`,
`lem-borel-subgroup-is-the-stabilizer-of-a-maximal-flag`,
`lem-power-map-on-unipotent-groups-is-bijective` (field-point functor),
`prop-crossed-homomorphisms-from-diagonalizable-to-unipotent-are-principal`,
`thm-trigonalizable-extensions-split-over-algebraically-closed-fields`,
`thm-maximal-diagonalizable-subgroups-of-trigonalizable-groups-are-conjugate`,
`thm-maximal-tori-in-smooth-connected-solvable-groups-are-conjugate`,
`thm-borel-fixed-point-for-complete-schemes` (minimal-dimension orbit and the
geometric dimension suppliers), `thm-quotient-by-a-borel-subgroup-is-complete`,
`thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field`, and
`ex-borel-fixed-point-on-projective-space`. The counterexample
`cex-borel-fixed-point-needs-completeness` performs a choice-free computation
and cites the fixed-point theorem only as the contrast; it deliberately does
not declare AC. Definitions never declare AC.

## Gate results (actual, run in this dispatch)

| Check | Result |
|---|---|
| `manifest-deps.mjs` (batch 18) | 49 items, 0 missing deps, 0 errors |
| `coverage-checklist.mjs --require-destination` | 2 pages, 88 harvested results, 0 errors, 0 warnings |
| `content-policy.mjs --manifest-only` (all 27 batch manifests) | 673 scoped items, 0 errors, 0 warnings |
| `manifest-integrity.mjs --run` | 54 pages owed, 54 present, no scope drift |
| `item-dependency-levels.mjs check --run` | batch 18 clean (no batch-18 id appears in the error list); **run-wide failure is external**: other units still have empty inventories and in-flight items with stale `dependency_level` labels (38 errors at the last run, all in other units) |
| `source-fetch-check.mjs --stamp` (batch 18 coverage) | 5/5 sources fetch-verified |
| `url-sweep.mjs --recover --fail-on-dead` (batch 18 coverage) | 3/3 URLs live, 0 failed |
| `source-backing.mjs` (batch 18 coverage, temp liveness file) | 48 authored results, all backed by an openable source |
| `frontier-dependency-ledger.mjs refresh --run` | batch-18 edges all reviewed; no orphaned reviews; other batches (`11,17,19,20,24,26`) still unreviewed |
| `step1-decisions.mjs check --run` | batch-18 items: 0 flagged, all 49 receipts closed; run-wide check still fails on other units (15 changed-input records, 4 owner escalations, empty-inventory pages) |
| `extcheck.mjs` (repo-wide) | OK; only pre-existing `unproved-on-published` warnings on unrelated pages |

## Unresolved findings and escalations

- No batch-18 item is escalated; all 49 readiness records are `ready`.
- Residual source shortfall for the Milne-only cohomology/Ext/torsor
  prerequisites (see "Second-source gate" above); the Step-3 author must
  retrieve a second treatment or record an explicit escalation.
- The Milne 2022 proof step $N=G^0\cdot H$ (smoothness of the product) is
  recorded as unverified; the scaffold avoids it.
- In-run suppliers from batches 13 and 15 are not yet published or certified;
  their Step-3 closure is a precondition for this batch's consumers.
- The run-wide failures listed above belong to other units and were not touched.
