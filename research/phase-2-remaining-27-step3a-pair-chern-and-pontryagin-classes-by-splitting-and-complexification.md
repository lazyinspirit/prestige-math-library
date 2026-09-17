# Phase 2 remaining 27 — Step 3a scope review: Chern and Pontryagin classes by splitting and complexification

Run: `phase-2-remaining-27`
Dispatch: `step3a-pair-chern-and-pontryagin-classes-by-splitting-and-complexification-7c94f6c14fe9e10f`
Batches: 9 (both pages)

Scope review only: this report decides scope and records no item approval and
no owner decision.

## Pair reviewed

| page | kind | planned items | decision |
| --- | --- | ---: | --- |
| `chern-and-pontryagin-classes-by-splitting-and-complexification` | A | 29 | **sufficient** |
| `chern-and-pontryagin-classes-by-splitting-and-complexification-examples` | B | 7 | companion, covered by the A decision |

A inventory in page order: `def-complex-projective-bundle-and-tautological-complex-line`,
`lem-complex-tautological-euler-class-restricts-to-the-projective-fiber-generator`,
`thm-integral-complex-projective-bundle-theorem`,
`def-chern-classes-from-the-projective-bundle-relation`,
`def-complex-flag-bundle-and-chern-roots`,
`thm-complex-splitting-principle-with-integral-injective-pullback`,
`thm-naturality-normalization-and-whitney-sum-for-chern-classes`,
`thm-uniqueness-of-chern-classes-from-the-splitting-principle`,
`lem-universal-complex-flag-bundle-is-bt-n`,
`thm-integral-cohomology-of-bu-n`,
`thm-first-chern-class-classifies-complex-line-bundles`,
`prop-first-chern-class-of-tensor-dual-and-conjugate-lines`,
`thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle`,
`thm-mod-two-reduction-of-chern-classes`,
`prop-complexification-is-conjugation-invariant`,
`cor-odd-chern-classes-of-a-complexified-real-bundle-are-two-torsion`,
`def-pontryagin-classes-by-complexification`,
`thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes`,
`thm-pontryagin-whitney-product-away-from-two`,
`thm-top-pontryagin-class-is-the-square-of-the-euler-class`,
`lem-universal-oriented-sphere-bundle-has-bso-n-minus-one-total-space`,
`lem-rational-transfer-identifies-a-finite-regular-cover-with-deck-invariants`,
`thm-rational-cohomology-of-bo-and-bso-by-pontryagin-and-euler-classes`,
`def-chern-character-of-a-complex-vector-bundle`,
`thm-chern-character-is-a-natural-ring-homomorphism-on-k-zero`,
`def-graded-chern-character-by-suspension-and-bott-periodicity`,
`lem-graded-chern-character-respects-relative-maps-and-skeletal-filtrations`,
`lem-chern-character-induces-the-rational-isomorphism-on-ahss-e-two`,
`thm-rational-chern-character-isomorphism-for-finite-cw-complexes`.

B inventory in page order:
`ex-chern-class-of-tautological-and-hyperplane-lines-on-complex-projective-space`,
`ex-chern-classes-of-a-sum-of-universal-complex-lines`,
`ex-complex-line-bundles-over-the-two-sphere-by-clutching-degree`,
`ex-realification-of-a-complex-line-compares-c-one-w-two-and-euler`,
`ex-stability-and-rank-cutoff-under-adding-a-trivial-summand`,
`lem-integral-powers-of-the-complexified-universal-real-line`,
`cex-integral-total-pontryagin-multiplicativity-cannot-ignore-two-torsion`.

The A page is the plan inventory (25 items, plan L2260-2322) plus four local
suppliers that the plan's own proofs need
(`lem-complex-tautological-euler-class-restricts-to-the-projective-fiber-generator`,
`lem-universal-complex-flag-bundle-is-bt-n`,
`lem-universal-oriented-sphere-bundle-has-bso-n-minus-one-total-space`,
`lem-rational-transfer-identifies-a-finite-regular-cover-with-deck-invariants`);
the B page is the plan B list (6 items) plus one local supplier for the
two-torsion counterexample
(`lem-integral-powers-of-the-complexified-universal-real-line`). No planned ID
was dropped and no companion or category changed.

## Evidence reviewed

- Current artifacts: `research/phase-2-remaining-27-batch-9.pages.json` (this
  pair plus co-batch AT-17; 66 items total, this pair 29 + 7),
  `research/phase-2-remaining-27-batch-9.coverage.json`,
  `research/phase-2-remaining-27-batch-9.notes.md`,
  `research/phase-2-remaining-27-batch-9.cross-batch-dependencies.json`,
  `research/phase-2-remaining-27-cross-batch-dependencies.json`,
  `research/phase-2-remaining-27-scope-ledger.json` (both pages owed, batch 9),
  `research/phase-2-remaining-27-drift-evidence.json` (A-page row
  `no-drift`, "Remaining uncertainty: none"; the four declared edges are
  `topological-vector-bundles-and-grassmannian-classification` (366.029),
  `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence`
  (366.033), `leray-hirsch-thom-isomorphism-and-gysin-sequences` (366.035) and
  `stiefel-whitney-and-euler-classes-by-universal-constructions` (366.037)),
  `research/phase-2-remaining-27-alpha-step1-drift.md` section
  `chern-and-pontryagin-classes-by-splitting-and-complexification`
  ("The graded Chern character and AHSS comparison are explicitly local
  obligations, not evidence for another supplier"), the plan-spec entries
  (orders 366.039/366.040, with `requires` arrays identical to the manifest
  and the B page requiring only its A companion), and the batch-9 beta task
  (design locators L2260 and L2301).
- Binding prose: `research/plan-algebraic-topology-track.md` AT-20 L2260-2322
  (adopted convention: projectivisation parametrises lines, `x=c_1(gamma)`,
  top Chern equals the Euler class of the complex-oriented underlying real
  bundle, and the AG warning that consumers must negate or dualise the
  positive `c_1(gamma*)` generator), the AT-20 table row L57 ("complex
  projective-bundle construction, splitting and real/complex comparison"),
  the coverage table rows L2517 (Chern character), L2526 (Chern classes and
  complex splitting principle) and L2527 (Pontryagin classes), the suppression
  row L2579 ("Unconditional integral Whitney multiplicativity for Pontryagin
  classes | false in the suppressed two-torsion form; AT-20 states only the
  source-correct qualification"), the boundary table (Milnor-Stasheff
  sections 16-20 characteristic numbers are DT-owned; Appendix C is DG-owned,
  Chern-Weil representatives), and the prerequisite table L2807 whose four
  IDs are exactly the manifest `requires`. Owner direction
  `research/phase-2-remaining-27-owner-authoring-direction.md`, AT-20
  paragraph: the reduced/odd Chern character must be built through suspension
  and Bott periodicity before any graded rational statement, must commute
  with relative maps and skeletal filtrations, and must identify the induced
  rational map on the AHSS `E_2` page, with rational collapse alone not
  identifying the filtered groups. The manifest contains exactly the four
  items that carry that obligation and (via
  `prop-ahss-collapse-determines-only-the-associated-graded-object`) an
  explicit refusal of the collapse shortcut.
- Source coverage: five independent full treatments, all fetch-stamped in the
  coverage record and all five re-downloaded and re-hashed today with the
  recorded stamps reproduced exactly: Hatcher, *Vector Bundles & K-Theory*
  (`https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf`, 1 563 812 bytes,
  sha256_16 `04282b30dfa63051`, 124 pages; section 3.1 pp. 77-88, section 3.2
  pp. 88-98, section 4.1 "The Chern Character" pp. 109-111); Miller, MIT
  18.906 notes
  (`https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf`,
  1 467 813 bytes, `6fb68a6d53af20b4`, 162 pages; Lectures 34-36, printed
  pp. 123-137); Hatcher, *Algebraic Topology*
  (`https://pi.math.cornell.edu/~hatcher/AT/AT.pdf`, 8 121 741 bytes,
  `bebb3032bf9021b9`, 560 pages; section 3.G transfer, pp. 321-326); May,
  *A Concise Course in Algebraic Topology*
  (`https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf`,
  1 715 976 bytes, `6724f02748ed1f2f`, 251 pages; Ch. 23 section 7
  pp. 197-200, Ch. 24 section 3 pp. 208-210, Ch. 24 section 4 pp. 211-212);
  Milnor-Stasheff, *Characteristic Classes*
  (`https://www.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf`, 13 204 109
  bytes, `e5a712237dd7959a`, 326 pages; sections 14-15 and Problem 16-B).
  AT-20 harvests 31 results (22 `included`, 1 `inline`, 1 deliberate
  `out-of-scope` on the A page; 7 `included` on the B page). I read the
  relevant passages directly rather than relying on the row list: Hatcher
  section 3.1 (Theorems 3.1-3.2 with the projective-bundle construction, the
  sign-convention paragraph, and the Grassmannian ring), Hatcher section 3.2
  (the complexification definition of `p_i`, Proposition 3.15(a)-(b) with the
  `(-1)^n` orientation comparison, Theorem 3.16 over `Z[1/2]`), Hatcher
  section 4.1 (ch defined by Newton polynomials, Propositions 4.2-4.5),
  Miller Lecture 36 (Lemma 36.2 conjugation, Definition 36.3, the Whitney-sum
  derivation that discards the odd 2-torsion terms, Lemma 36.4, Theorem 36.5
  and the generator table), Milnor-Stasheff section 14 headings (Lemma 14.1
  canonical orientation, construction of Chern classes, Grassmannian
  cohomology, product theorem, conjugate bundles, Theorem 14.10 on `c(tau^n)`),
  and May Ch. 23 section 7 / Ch. 24 sections 3-4 headings (axioms and
  uniqueness, splitting principle and lemma, Chern character as a formal
  power series and its isomorphism on `K~(S^{2n})`, `c_n(tau)=chi(tau)`).
- Dependency records: one page-level cross-batch edge
  (`chern-and-pontryagin-classes-by-splitting-and-complexification` requires
  `stiefel-whitney-and-euler-classes-by-universal-constructions`, batch 9 to
  batch 10) reviewed `verified`; 12 item-level batch-9 to batch-10 uses, all
  reviewed `verified`; every dependency ID of all 36 items resolves either to
  a published `items/` file or to an in-run batch-9/10 scaffold item (no
  unknown or dropped supplier); the AT-17 items the A page consumes are
  co-batch. No published item anywhere in `items/` mentions any of the 36
  planned IDs, so this pair creates and closes no published item-level
  forward-reference debt. The B page is a leaf and requires only its A
  companion.
- Role consumers: within the run, the only consumers of these items are the
  pair's own B page (13 intra-pair edges); no other in-run page consumes
  AT-20 items. Planned and published consumers are DT-12, DT-19 to DT-20,
  DT-28, DT-31 to DT-32 (via `smooth-cobordism-relations-groups-and-rings`,
  `thom-spaces-normal-data-and-collapse-maps`,
  `characteristic-numbers-and-cobordism-obstructions`,
  `the-hirzebruch-signature-theorem`,
  `characteristic-class-obstructions-to-immersions-and-embeddings`,
  `codimension-one-foliations-and-secondary-classes`,
  `exotic-smooth-structures-and-milnor-spheres`) and DG-38
  (`chern-weil-theory-and-characteristic-forms`). Their stated needs are met
  by this inventory: the DT-28 note "modulo the two-torsion qualification
  supplied by AT-20" is exactly
  `thm-pontryagin-whitney-product-away-from-two` plus the B-page
  counterexample; the signature/cobordism and Chern-Weil consumers need the
  sign convention, `p_n=e^2`, rational `BO/BSO`, and the Chern character
  interfaces, all present. The Phase-3 published-page edge recorded in
  `research/published-consumer-supplier-ledger.md`
  (`affine-algebraic-sets-and-coordinate-rings` to this examples page) is
  labelled there "a placement accident, not mathematics", with the AG
  replacement pair as the Phase-3 cutover; it imposes no scope action on this
  pair.
- Checks re-run for this review: `coverage-checklist --require-destination`
  on the batch-9 coverage (4 pages, 127 harvested results, 0 errors,
  0 warnings); `manifest-deps` on the batch-9 manifest (66 items, 0
  normalized, 0 errors); `step1-decisions check --run phase-2-remaining-27`
  (1006 items, 1006 ready, closed), which covers all 36 owned items and is
  consistent with the batch note's claim of 66/66 current `ready` receipts.

## Why the scope is sufficient

The design's declared subject is the complex projective-bundle construction,
the splitting principle, and the real/complex comparison (plan L57). The A
inventory covers each part completely and without duplicating AT-19's
Stiefel-Whitney/Euler material:

- *Construction and axioms.* Projective bundle and tautological line with
  `x=e((gamma_E)_R)` (the plan's adopted `x=c_1(gamma)` convention), the
  fiber-normalization lemma, the integral projective bundle theorem with the
  monic relation, Chern classes as the unique coefficients, naturality,
  normalization, Whitney sum and uniqueness, `H^*(BU(n);Z)=Z[c_1,...,c_n]`
  via the universal flag bundle `EU(n)/T^n=BT^n`, and `c_1`-classification of
  complex lines with the line tensor/dual/conjugate laws. Hatcher Theorems
  3.1-3.2, the Grassmannian ring, and May Ch. 23 section 7 uniqueness back
  these items.
- *Splitting.* Flag bundle with Chern roots and the splitting principle with
  injective pullback over `Z` and every `F_p`, including the multi-bundle
  version; this is the deliberately strengthened integral statement the
  pair's proofs require.
- *Real/complex comparison.* Top Chern equals Euler class, mod-two reduction
  `w_{2i}=rho_2 c_i` and `w_{2i+1}=0`, conjugation invariance
  `c_i(Vbar)=(-1)^i c_i(V)`, and the exact `2 c_{2j+1}(E_C)=0` corollary with
  integral vanishing explicitly not claimed. This is the honest form of the
  comparison, matching Hatcher Propositions 3.8/3.15 and Miller 36.2.
- *Pontryagin classes.* Definition by complexification with the `(-1)^i` sign
  and rank cutoff, naturality/stability, `rho_2 p_i=w_{2i}^2`,
  multiplicativity over `Z[1/2]`-algebras only (with the integral failure left
  as a proved counterexample, per the plan's suppression row L2579),
  `p_n=e^2` for oriented rank `2n` with the orientation-sign bookkeeping, the
  universal oriented sphere bundle `BSO(n-1)` to `BSO(n)`, the rational
  transfer lemma, and the rational `BO/BSO` polynomial presentations by rank
  parity. Miller 36.2-36.5, Hatcher 3.15 and Theorem 3.16, and Milnor-Stasheff
  section 15 back these.
- *Chern character.* Definition by exponential of roots with Newton
  polynomials in `c_i`, ring homomorphism on `K^0`, the owner-mandated graded
  construction through suspension and Bott periodicity *before* the graded
  theorem, compatibility with relative maps and skeletal filtrations, the
  `E_2` identification, and the rational isomorphism as a filtered
  `Z/2`-graded ring map for finite CW complexes, with the associated-graded
  caveat item carried. Hatcher Propositions 4.2-4.5, May Ch. 24 section 4,
  and Milnor-Stasheff Problem 16-B back these.

The B inventory is a genuine companion rather than filler: it exercises the
adopted sign convention (`c_1(gamma)=-x` against the positive `c_1(gamma*)`
generator, exactly the AG-interface warning of the design), the universal
elementary-symmetric computation, `c_1` on `S^2` against clutching degree, the
rank-one realification comparison of `c_1`, `w_2` and `e`, stability with rank
cutoff, and the two-torsion phenomenon. I re-derived the concluding
counterexample myself and it is correct: for the universal real line `lambda`
over `RP^infinity`, `a=c_1(lambda_C)` satisfies `2a=0` and
`rho_2(a)=w_2(lambda direct-sum lambda)=u^2` with `u=w_1(lambda)`, so `a` and
all its powers are nonzero of exact order two; `p(lambda)=1` by the rank-one
cutoff, while `p_1(lambda direct-sum lambda)=-c_2(lambda_C direct-sum
lambda_C)=-a^2` is nonzero, so integral multiplicativity genuinely fails and
the pair's `Z[1/2]` theorem is the correct unrestricted statement. This is
the intended guard flagged by the plan's suppression row.

Source coverage is adequate and honestly recorded: five independent,
fetch-verified full treatments, every harvested heading dispositioned (0
errors/0 warnings), the one deliberate `out-of-scope` row (May Ch. 24
section 4 "Almost-complex structures on spheres") documented with a reason
that matches the pair's remit, and the one `inline` row (Milnor-Stasheff
Problem 16-B, Chern-character formulas absorbed into the definition item). No
item is backed only by an encyclopedia entry. The un-rowed items are
definitional constructions and locally supplied lemmas whose statements and
proof plans are self-contained in the manifest, and each of them has a
plan-level source locator (Hatcher/Milnor-Stasheff/Miller/May) recorded in the
AT-20 design block.

## Observations and residual uncertainty (do not change the decision)

- *Chern classes of tensor powers are not items.* There is no `c(E tensor F)`
  or `c(Lambda^k E)` formula item. This matches the pair's declared subject
  and its cited range: Hatcher's sections 3.1-3.2 contain no such result
  (tensor-product machinery lives in his K-theory chapters), and May/Miller
  advertise the splitting principle itself, not the formula list. The tensor
  product is nevertheless exercised through the Chern-character
  multiplicativity theorem (`ch(E tensor F)=ch(E)ch(F)` after splitting).
  Candidate enrichment only.
- *Canonical complex orientation of `E_R` is used but not named anywhere.*
  `def-complex-projective-bundle-and-tautological-complex-line` and
  `thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle`
  invoke "the complex orientation" of an underlying real bundle, and no
  published or in-run item states the general lemma that a complex bundle's
  underlying real bundle carries a canonical preferred orientation
  (Milnor-Stasheff Lemma 14.1). Only the rank-one instance is published
  (`ex-thom-isomorphism-for-the-tautological-complex-line-over-cp-infinity`,
  which derives the orientation of the tautological line's underlying real
  plane), and the rank-two normalization appears on the AT-19 B page
  (`ex-euler-class-of-the-universal-oriented-two-plane`, stated "under
  BSO(2) = CP^infinity and the standard complex orientation"). This is a local
  supply decision for the Step 3b author, who may add the general lemma to
  this A page (Step 3 explicitly permits necessary local definitions and
  lemmas): determinant positivity for complex transition matrices gives it in
  one paragraph, and the `(-1)^n` bookkeeping it feeds is already written into
  the top-Chern and `p_n=e^2` proof plans. Not a scope gap, but the author
  should not assume a named supplier exists.
- *Milnor-Stasheff coverage rows are thin relative to the claimed sections
  14-15 range.* The Milnor-Stasheff rows carry only section 15
  (`thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes`)
  and Problem 16-B (`def-chern-character-of-a-complex-vector-bundle`), while
  section 14's named results (Lemma 14.1, Theorems 14.4-14.6, 14.10) have no
  rows. Nothing is lost: the same results are covered by fuller
  Hatcher/Miller/May rows (Chern classes, splitting, `BU(n)`, Grassmannians,
  conjugate bundles), and Milnor-Stasheff is recorded as an independent
  treatment. `c(tau^n)=(1+gamma)^{n+1}` (Milnor-Stasheff Theorem 14.10) is
  deliberately not built here: the boundary table assigns characteristic
  numbers to DT, and DT-20 owns its own `CP^{2k}` Pontryagin-class
  computation. Locator nit for a future coverage edit: the Hatcher VBKT row
  says "section 4.1, printed pp.109-111" while the plan's own AT-20 source
  block says pp. 109-114.
- *The rational transfer lemma is homed here.*
  `lem-rational-transfer-identifies-a-finite-regular-cover-with-deck-invariants`
  is a general finite-covering statement (Hatcher AT section 3.G) placed on a
  characteristic-class page because the `BO/BSO` computation needs it. It is
  a legitimate local supplier; a later pass could rehome it beside the
  covering-space material. Placement note only.
- *No Chern-character example on the B page.* The graded character theorem is
  the largest block of content the owner direction added, yet the B inventory
  exercises no instance of it (nothing computes `ch` on `K^1`/spheres or a
  projective space). The design's B list does not request one and the
  theorem's own proof plan is concrete, so the pair is not short of its
  design; optional enrichment only.
- *Honesty boundary.* This review checked scope, coverage, dependencies and
  consumer interfaces, and read the cited source passages listed above. It
  did not independently audit proofs or re-derive the recorded arguments
  beyond the counterexample recomputed above. Unresolved uncertainty
  affecting the decision: none.

## Recorded decision

`node tools/step3-decisions.mjs record-scope --run phase-2-remaining-27
--page chern-and-pontryagin-classes-by-splitting-and-complexification
--decision sufficient` with this report as the evidence path. The B page
`chern-and-pontryagin-classes-by-splitting-and-complexification-examples` is
its A page's companion and is covered by this single A-page scope decision.
