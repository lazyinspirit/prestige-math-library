# Frontier 31a — Step 6b group c adjudication

Run: `frontier-31a`  
Group: `c`  
Batches: `11`, `13`, `14`

## Evidence and repairs

- Exact dispatch, all three scope files, reader findings/reports, refuter reports, current carriers, cited dependencies, and prior batch-14 recovery evidence read.
- Initial risk reports run without `--require-reviewed`: batch 11 has 20 HIGH/CRITICAL items, batch 13 has 1, and batch 14 has 4.
- Published repair claim acquired for `lem-sheaf-condition-check-on-basis` at pre-hash `817549ba8d8b24fa3647160e150e3acd5ff3a5c997d195057d6999f98ec327f2`.
- `lem-sheaf-condition-check-on-basis`: repaired the invalid proof order by proving basis-overlap compatibility before invoking gluing, made the proof's global choices explicit through an Axiom-of-Choice hypothesis, and removed stale audit/judge verification. Dependencies remain `def-sheaf-on-topological-space` and `def-topology-basis-subbasis`; source locators remain Stacks, *Sheaves on Spaces*, Lemmas 30.3–30.4, and Vakil, Class 4. Reflow and precheck pass; the exact current published repair receipt records post-hash `8baab786a2cb58b808c6c84b108e5f9a1d2be32871ec5a273805f955a3e830ee`.
- `lem-regular-sequence-koszul-acyclicity-induction`: narrowed the claim to the actual cone-induction hypothesis (acyclic preceding Koszul complex plus injectivity on its degree-zero homology) and supplied the exact long-exact-sequence argument; dependencies are now `thm-basic-koszul-homology` and `lem-koszul-mapping-cone-homology-exact-sequence`. Reflow/precheck pass.
- `thm-regular-sequences-give-acyclic-koszul-complexes`: added the empty-sequence case, an explicit one-element base, and a valid induction through the repaired cone lemma; dependencies now include `cor-empty-koszul-complex-is-the-coefficient-module` and `lem-regular-one-element-koszul-acyclicity`. Reflow/precheck pass.
- `lem-local-koszul-h-one-detects-first-regularity-failure`: replaced the unsupported Nakayama sentence with the exact annihilator identification at the first failed prefix and the iterative injection $H_1/yH_1\hookrightarrow H_1$; dependency on forward Koszul acyclicity added. Reflow/precheck pass.
- `lem-local-koszul-acyclicity-inductive-converse`: made the cone indices explicit, proved finite positive homology is killed by Nakayama, and then derived injectivity on $H_0$. Reflow/precheck pass.
- `thm-koszul-acyclicity-characterises-local-regular-sequences`: handled the empty sequence and spelled out the reverse induction, including persistence of the nonzero quotient. Reflow/precheck pass.
- `lem-h-one-regular-local-implies-koszul-regular`: removed the invalid generator-homotopy inference and instead used Nakayama plus the repaired first-failure detector, with the zero-module case separated. Reflow/precheck pass.
- `lem-regular-sequence-permutation-adjacent-swap`: licensed order invariance through the invertible-generator-change isomorphism and the local acyclicity criterion. Reflow/precheck pass.
- `lem-koszul-resolution-minimality-maximal-ideal-sequence`: added the necessary finite-free hypothesis on $M$ and justified finite freeness of every Koszul term. Reflow/precheck pass.
- `thm-regularity-notions-and-permutation-invariance-local`: added the missing nonzero terminal-quotient hypothesis to the equivalence clause. Reflow/precheck pass.
- `ex-koszul-complex-polynomial-variables`: removed the undefined nonlocal use of “minimal” and now claims only the established finite free resolution. Reflow/precheck pass.
- `thm-global-regular-functions-projective-variety`: replaced the unproved “homogeneous no-poles” assertion with a complete graded-coordinate-ring argument: dehomogenization identifies each affine chart ring with $S(X)_{(x_i)}$, affine-chart regularity gives $x_i^{N_i}f\in S(X)$, a high graded piece is finite-dimensional and stable under multiplication by $f$, and Cayley--Hamilton plus algebraic closedness forces $f\in k$. The Axiom of Choice is explicit; dependencies now include `def-homogeneous-coordinate-ring`, `lem-standard-projective-opens-are-affine-spaces`, `lem-homogenization-dehomogenization-correspondence`, and `thm-global-regular-functions-affine-variety-coordinate-ring`. Reflow/precheck pass.
- `projective-algebraic-sets-projective-morphisms-and-cones-examples`: corrected the summary so this page is the examples companion and the paired page is the infrastructure page. Focused prose and render checks pass.
- `lem-structure-presheaf-basic-open-well-defined`: repaired the finite-cover/arbitrary-cover gap by assuming Choice and applying `lem-spectrum-compactness-open-cover-to-unit-ideal` inside $A_f$, which supplies a finite unit expression before the localization gluing calculation. Reflow/precheck pass.
- `ex-dual-numbers-one-point-nonreduced`: narrowed [F1] to the exact nilradical-quotient dependency and repaired the malformed `\operatorname{Nil}` expression. Reflow/precheck pass.
- Prior-retry verification: batch 13's corrected reader-findings artifact has the same normalized routed finding as the scope, but the scope retained a stale pre-correction file hash. Updated only `reader_report_sha256` to the current corrected artifact hash `ed247e43d6fdec861eec53c99d5570a1b8d3082e617d6c2a03fa66a090061393`; the queue, finding, observed carrier hash, and all other scope fields are unchanged.
- Focused boundary gate: corrected three stale nonfatal proof-contract dispositions—`lem-koszul-differential-coordinate-formula` at the empty sum, plus both iff axes for `lem-projective-irreducibility-homogeneous-prime` and `lem-projective-regular-function-chart-compatibility`. The underlying proofs were already correct; strict contract validation and the contradicted-boundary gate now pass.
- `thm-affine-scheme-ring-anti-equivalence`: the focused renderer found a hard line break inside display delimiters. Collapsed the display to one source line without changing the claim; this is a purely mechanical rendering repair and therefore has no invented mathematical defect row. Reflow, precheck, and focused rendering pass.

## Decisions

The exact routed queue has 56 obligations: 45 `touched`, no `page`, three
reader findings, and eight refuter findings. The machine-readable artifact
contains exactly one decision for each, plus eight supplemental gate decisions
for defects found during Alpha review.

- Touched carriers: 35 `accepted_repair` and 10 `amended_repair`.
- Routed findings: nine `confirmed_fatal` and two `confirmed_nonfatal`.
- Supplemental gates: three `confirmed_fatal` mathematical proof defects and
  five `confirmed_nonfatal` proof/contract boundary omissions.
- Total decisions: 64 (`accepted_repair` 35, `amended_repair` 10,
  `confirmed_fatal` 12, `confirmed_nonfatal` 7).

The amended touched carriers are:

- batch 11: `cor-koszul-complex-resolves-a-regular-quotient`,
  `cor-local-koszul-acyclicity-iff-regular-sequence`,
  `lem-koszul-resolution-minimality-maximal-ideal-sequence`, and
  `lem-local-koszul-acyclicity-inductive-converse`;
- batch 14: `cex-nonclosed-scheme-point-no-k-valued-coordinate`,
  `ex-dual-numbers-one-point-nonreduced`, `ex-spectrum-field-one-point`,
  `ex-spectrum-integers-generic-and-closed-points`,
  `lem-structure-presheaf-basic-open-well-defined`, and
  `thm-affine-scheme-ring-anti-equivalence`.

All other touched carriers are accepted. For batch 14, the 33 touched carriers
not repaired by the reader arose because the pre-reader snapshot raced the
authorized author-recovery process. Those decisions cite closed
`scheduler-race` rows and accept the completed post-reader carriers only after
current mathematical review; they do not invent item defects for formatting
changes.

The reader/refuter findings are all confirmed. In batch 11 the undefined
nonlocal minimality claim, invalid $H_1$ inference, missing finite-free
hypothesis, and missing nonzero-terminal-quotient hypothesis are fatal. In
batch 13 the reversed page summary is nonfatal and the global-functions proof
gap is fatal. In batch 14 the published proof-order defect and both dual-number
defects are fatal. There are no proposed withdrawals and no unresolved
blockers.

Sixty-six unique closed rows were appended through the required locked
`defect-ledger.mjs append` interface. This includes one row per routed carrier
or finding, two additional repaired defects attached to already-routed touched
carriers, and eight supplemental gate rows. The published dependency repair
also has the required ownership claim and Step-8 repair receipt.

The decision file intentionally has no `subject_sha256` fields: the authorized
stage, not this Alpha, owns those stamps.

## HIGH/CRITICAL risk review

Every item reported HIGH or CRITICAL has a specific completed `risk_review`
record with reviewer `alpha-c`. Batch 11 records 20 reviews covering the
differential, regular-sequence induction and converse chain, local equivalence,
permutation/powers, minimality, and the five high-risk examples. Batch 13
records the required homogeneous-zero-locus review and, after the repaired
global-functions proof itself became HIGH, a second review for that theorem.
Batch 14 records the four required reviews for the field, integer-spectrum,
dual-number, and generic-point examples. The three final
`risk-report.mjs --require-reviewed` invocations report zero errors.

## Focused validation

- Reflow and focused precheck pass on every materially edited item.
- Strict proof contracts pass: batch 11 `57/57`, batch 13 `15/15`, and batch
  14 `24/24`, with zero errors and warnings.
- Required risk reports pass with zero missing reviews in all three batches.
- Manifest dependencies: 132 items, zero errors.
- Content policy: 132 scoped items, zero errors and warnings.
- Citation fidelity: 27 citations, every quote found, no widening candidate.
- Boundary audit: 768 rows, no contradicted disposition after the three
  nonfatal contract repairs.
- Coverage checklists: 61, 61, and 38 harvested results, each with zero errors
  and warnings.
- Focused page prose check: zero errors and warnings.
- Render check: all 138 owned item/page files parse and render cleanly.
- Frontier-31a defect-ledger validation: 237 run rows, zero errors.
- Step-6 adjudication invariants were checked against the current carriers and
  ledger with zero errors for batches 11, 13, and 14; the stage-owned hashes
  were then left absent as required.

## Gate repair cycle 1 — `step6-routing-adjudicate`

The live gate was reproduced on September 6, 2026. I reread the 21 named
batch-11/13/14 carriers against `research/frontier-31a-reader-{11,13,14}.md`,
their current dependencies, manifests, and proof contracts. Every named item
and manifest hash initially equalled its frozen post-reader value; only the
contract component had changed during later 6b reconciliation. The current
Koszul rank count, projective closure/saturation argument, affine-spectrum
localization and stalk arguments, zero-ring and product boundaries, Yoneda
argument, and reduced/nonreduced one-point witness remain mathematically
sound.

The reread found one additional fatal defect in
`cex-inhomogeneous-equation-not-projectively-well-defined`: reader step 1.2
chose a nontrivial unit in every characteristic-two field, but no such unit
exists in `F_2`. The counterexample is now coherently narrowed to a field of
characteristic not equal to two; equivalent representatives `(1,0)` and
`(-1,0)` give the values `2` and `0`. Its contract now records that exact
witness and checked characteristic boundary. Reflow, precheck, focused strict
contract validation, and real renderer/KaTeX validation pass.

All 21 touched decisions are retagged from `accepted_repair` to
`amended_repair`. Twenty-one nonfatal routing decisions plus the separate
fatal field-two decision and their matching rows were added through
`research/frontier-31a-alpha-c-6b-gate-ledger-rows.json`; all current carrier
hashes were restamped. Focused adjudication checks for batches 11, 13, and 14
have zero errors. The full primary gate now reports `910 item(s) routed, 374
adjudication obligation(s), 0 error(s)`. No group-c blocker remains.

The first routing row for the repaired counterexample used present-tense
item-hash wording copied from the initial comparison. The final item no longer
matches that snapshot because of the separately recorded fatal repair. The
append-only correction payload
`research/frontier-31a-alpha-c-6b-gate-ledger-rows-correction.json` and its
supplemental gate decision preserve the original row while recording the exact
sequence; group C therefore adds 22 nonfatal gate rows and one fatal gate row
in this repair cycle.
