# Phase 2 remaining 27 — Step 3a scope review: compact operators and Riesz–Schauder theory

Run: `phase-2-remaining-27`
Dispatch: `step3a-pair-compact-operators-and-riesz-schauder-theory-0500675682b01a1f`
Batches: 2 (both pages)

Scope review only: this report decides scope and records no item approval and
no owner decision.

## Pair reviewed

| page | kind | planned items | decision |
| --- | --- | ---: | --- |
| `compact-operators-and-riesz-schauder-theory` | A | 25 | **sufficient** |
| `compact-operators-and-riesz-schauder-theory-examples` | B | 7 | companion, covered by the A decision |

A inventory in page order: `def-compact-linear-operator`,
`thm-sequential-characterization-of-compact-operators`,
`lem-finite-rank-operators-are-compact`,
`lem-compositions-with-a-compact-operator-are-compact`,
`lem-linear-combinations-of-compact-operators-are-compact`,
`thm-norm-limit-of-compact-operators-is-compact`, `def-approximable-operator`,
`thm-schauder-compact-adjoint-theorem`,
`thm-compact-operator-sends-weakly-convergent-sequences-to-norm-convergent-sequences`,
`lem-kernel-of-identity-minus-compact-is-finite-dimensional`,
`lem-range-of-identity-minus-compact-is-closed`,
`lem-riesz-schauder-ascent-and-descent-stabilize`,
`thm-fredholm-alternative-for-identity-minus-compact`,
`lem-neumann-series-and-small-perturbations-of-bounded-inverses`,
`def-spectrum-and-resolvent-of-a-bounded-operator`,
`thm-riesz-schauder-spectrum-of-a-compact-operator`,
`cor-spectrum-of-a-compact-operator-is-countable-with-only-zero-as-possible-accumulation`,
`def-fredholm-operator-cokernel-and-index`,
`lem-fredholm-splitting-and-parametrix`,
`lem-a-compact-remainder-estimate-forces-closed-range`, `thm-atkinson`,
`thm-fredholm-index-is-additive`, `thm-fredholm-index-is-locally-constant`,
`thm-fredholm-index-is-stable-under-compact-perturbations`,
`cor-lambda-identity-minus-compact-has-index-zero`.

B inventory in page order:
`ex-diagonal-operator-on-ell-p-is-compact-iff-diagonal-tends-to-zero`,
`ex-continuous-kernel-integral-operator-is-compact-on-c-of-an-interval`,
`cex-identity-is-compact-iff-the-space-is-finite-dimensional`,
`cex-a-compact-operator-can-have-nondense-range`,
`ex-fredholm-alternative-for-an-integral-equation`,
`cex-compactness-is-not-preserved-by-strong-operator-limits`,
`rem-approximation-property-controls-finite-rank-density-in-compact-operators`.

## Evidence reviewed

- Current artifacts: `research/phase-2-remaining-27-batch-2.pages.json` (both
  pages of this pair, plus the co-batch square-kernel pair this A page feeds),
  the plan-spec entries (orders 288.075/288.076 and their exact `requires`
  arrays), the scope ledger, the drift-evidence entry with the 162-page
  declared closure, `research/phase-2-remaining-27-alpha-step1-drift.md`
  (`no-drift` for this A page: "Its closure contains FA15's explicit FA2, FA3,
  FA5–FA10, FA13, finite-dimensional, and compactness inputs"), the batch-2
  scaffold notes, the batch-2 coverage record, the Step-1 receipts (all 32
  owned items `ready`; run-wide `step1-decisions check` closed with 1006/1006
  hash-current ready), the cross-batch dependency file, and
  `research/phase-2-remaining-27-cross-batch-dependencies.json`.
- Binding prose: `research/plan-functional-analysis-track.md` §5 FA-15
  (lines 1170–1230: 21 A items, 8 B items, and the hard proof plan), §14.1
  (page table plus change 4 of the existing-page requirement list: the rehoming of
  `ex-hilbert-schmidt-kernel-operator-is-compact-on-l-two` with the explicit
  "do not add a B-to-B page edge, and do not make FA-15 require FA-16" rule),
  §14.4 (the four FA-15 insertions in proof order, the Banach-target
  requirement for norm closure, the weak-star rather than norm closure note,
  and the §14.5 routing of the Hilbert–Schmidt kernel example), §9 (the
  `rem-compact-operators` and `rem-fredholm-theory` discharge rows), and
  §11.8 (two-treatment backing row FA-15). Owner direction
  `research/phase-2-remaining-27-owner-authoring-direction.md` (FA-16
  amendment, no-LLM-orchestrator rule) was read and matches the manifest for
  this pair. `research/plan-differential-topology-track.md` §12.2/§12.5 and
  `research/plan-representation-theory-groups-track.md` line 149 name this
  page only as a prerequisite, adding no compact-operator content.
- Source coverage: two independent full treatments, both re-downloaded today
  from the coverage URLs with exactly reproduced stamps — T. Bühler and
  D. Salamon, *Functional Analysis* (1 912 109 bytes, sha256_16
  `8ffd5f868b480006`, 452 pages), §§4.2–4.4 and §5.2.3, printed pp. 183–198
  and 224–226; G. Teschl, *Topics in Real and Functional Analysis*
  (2 619 066 bytes, sha256_16 `d172dae775f1274f`, 563 pages), §3.1, §6.5,
  §6.6, printed pp. 69–72 and 183–192. I read the result lists of both
  ranges, every heading the coverage harvests, and the complete load-bearing
  arguments (Bühler–Salamon Lemma 4.19 through Theorem 4.28 and Examples
  4.22–4.26; Theorem 4.33, Lemma 4.39, Theorems 4.38/4.40/4.41, Remark 4.42,
  Theorem 5.21, Remark 5.23; Teschl Theorems 3.1–3.2, Lemmas 3.3–3.4,
  Definition 6.21 through Theorem 6.30, Lemmas 6.31–6.33).
- Role consumers, item-exact: 26 declared in-run consumer item edges — the
  co-batch square-kernel pair (3), batch-3 FA-16 (10), batch-3 Banach
  differential calculus (6), batch-4 FA-17 Calkin algebra (4), and batch-6
  FA-21 relative compactness/Weyl (3). Verified against the consumer
  statements: FA-17 `def-calkin-algebra` needs exactly the ideal,
  linear-combination, and norm-closure items; FA-16 needs the compactness
  definition, the local operator spectrum, the ideal property, finite rank,
  and the compact-spectrum theorem; FA-D needs the Neumann lemma, the
  Fredholm definition, the splitting lemma, and local constancy. No published
  item declares a forward reference to any planned item id here.
- Checks re-run for this review: `coverage-checklist
  --require-destination` on the batch-2 coverage (2 pages, 46 harvested
  results, 0 errors, 0 warnings); `manifest-deps` on the batch-2 manifest
  (41 items, 0 normalized, 0 errors); `step1-decisions check` (closed, 1006
  ready).

## Why the scope is sufficient

The A inventory is exactly the FA-15 §5 item list 1–21 in proof order plus
the four §14.4 insertions (`lem-linear-combinations-of-compact-operators-are-compact`,
`lem-neumann-series-and-small-perturbations-of-bounded-inverses`,
`def-spectrum-and-resolvent-of-a-bounded-operator`,
`lem-a-compact-remainder-estimate-forces-closed-range`), and each insertion
is load-bearing for a declared consumer rather than optional breadth. The
result set covers every part of the intended subject: the compactness
definition with the closure-not-precompactness caveat and its sequential
characterization under the exact DC label; finite rank, composition ideal,
linear combinations, norm closure with the required Banach target, and
approximable operators without the false converse; Schauder's compact-adjoint
theorem in both directions; weak-to-norm convergence; the kernel, closed
range, chain-stabilization, and direct-sum decomposition steps of
Riesz–Schauder; the Fredholm alternative with the adjoint solvability
condition and equal finite defect dimensions; the compact-operator spectrum
theorem (isolated nonzero eigenvalues of finite algebraic multiplicity,
finitely many spectral values outside any positive radius, `0` spectral in
infinite dimension) and its countability corollary; and the Fredholm
definition, splitting/parametrix, compact-remainder estimate, Atkinson
characterization, index additivity, local constancy, compact-perturbation
stability, and the index-zero corollary for `lambda I - K`. That is the whole
of the design's declared subject and of the two recorded catalogue rows
(`rem-compact-operators`, `rem-fredholm-theory`) this page must discharge;
the self-adjoint and singular-value continuation is deliberately homed on the
in-run batch-3 page FA-16, and the Calkin-algebra reformulation on batch-4
FA-17, both of which consume this inventory as recorded above.

The B inventory is the §5 B list minus the moved Hilbert–Schmidt kernel
example, and I confirmed that example is present as item 4 of
`square-integrable-kernels-and-hilbert-schmidt-compactness-examples` with no
B-to-B edge and no added FA-16 requirement. What remains is a genuine
example/counterexample companion: the diagonal `ell^p` multiplier for
`1 <= p <= infinity` (matching Bühler–Salamon Example 4.26, including its
finite-rank truncation proof and the explicit `p = infinity` convention), the
continuous-kernel `C([a,b])` operator through the published real
compact-metric Ascoli theorem, the finite-dimensional identity criterion, a
compact operator with proper closed range, the Fredholm alternative for an
integral equation kept in the abstract `C(K)` setting, failure of
compactness under strong limits, and the approximation-property remark tied
to the published FA-11 definition.

Source coverage is adequate and honestly recorded: 21 of the 32 items map
directly to a harvested source heading, and the 11 unmapped items are locally
constructed definitions, corollaries, and examples/counterexamples whose
complete proof routes are written in the manifest and certified by
hash-current Step-1 `ready` receipts. No pair item is backed only by an
encyclopedia, and 47 of the 48 published dependency items have a home page
inside the declared prerequisite closure; the single exception, the
`AC => DC => AC_omega` bridge, is a run-wide foundations convention (78 items
declare it; 3 of 27 pair closures list its page), not a gap this pair
creates. The load-bearing published suppliers (`thm-bounded-inverse-theorem`,
`lem-closed-range-iff-quotient-estimate`, `thm-arzela-ascoli-for-real-ck`,
the FA-7 transpose/annihilator items, the finite-dimensional and metric
compactness items) are published, in closure, and carry no open defect entry
in `research/published-consumer-supplier-ledger.md` that would change this
pair's scope.

## Observations and residual uncertainty (do not change the decision)

- Bühler–Salamon Theorem 4.33 / Teschl Theorem 6.24 (Fredholm transpose
  duality: `A` Fredholm iff `A*` is, with `ind(A*) = -ind(A)`) is not a
  separate item in this pair, and neither the design inventory nor the owner
  amendments include it. The
  equivalence follows by transposing the declared Atkinson parametrix and
  applying Schauder's theorem, both items here; the index relation follows
  from the annihilator identity already declared as a dependency of the
  Fredholm alternative plus finite-dimensional duality. No declared in-run
  consumer uses a stated form. Candidate enrichment, not a scope gap.
- No B-page item exhibits a Fredholm operator of nonzero index (Teschl's right
  shift example immediately after Theorem 6.24); all stated examples here
  have index zero. A nonzero-index example does exist in-run on the FA-D B
  page (`ex-a-projection-with-finite-dimensional-kernel-is-fredholm`, index
  `dim N`), so the library as a whole is not short. Optional enrichment only.
- Locator nit for the owner's next coverage edit: the batch-2 Teschl locator
  is "§3.1, pp. 69–72; §6.5, pp. 183–189; §6.6, pp. 189–192", but the two
  owner-added items `lem-neumann-series-and-small-perturbations-of-bounded-inverses`
  and `def-spectrum-and-resolvent-of-a-bounded-operator` cite Teschl §6.1,
  printed pp. 163–164 (Lemma 6.1 and Corollary 6.2; resolvent/spectrum
  definitions (6.11)–(6.12)). The citations are apt and the source is
  fetch-verified; the declared locator should be widened to §6.1 on the next
  touch of that record.
- Read but not planned as items: Bühler–Salamon 4.21(ii)/4.22 (reflexive
  converse; the `ell^1` completely-continuous identity), 4.24, 4.25, 4.30,
  4.43–4.45, and Exercises 4.46–4.49; Teschl Lemma 3.3 (completion
  extension), Lemmas 6.22/6.23 (closed-range redundancy, superseded by the
  definition's explicit closed-range clause), and Problems 6.23–6.28. Each is
  either absorbed by an included item, homed on an adjacent page (weak
  topology/reflexivity, FA-11, FA-17), or outside the pair's declared
  subject. I do not judge these omissions to leave the pair short of its
  design or of any declared consumer.
- This review checked scope, coverage, and consumer adequacy; it did not
  independently audit proofs or re-derive the recorded arguments. The source
  reading above reproduces the recorded fetch stamps and all harvested
  headings but is not an independent proof review. Unresolved uncertainty
  affecting the decision: none.

## Recorded decision

`node tools/step3-decisions.mjs record-scope --run phase-2-remaining-27
--page compact-operators-and-riesz-schauder-theory --decision sufficient`
with this report as the evidence path. The B page
`compact-operators-and-riesz-schauder-theory-examples` is its own A page's
companion and is covered by this single A-page scope decision.

## Step 3b refresh (2026-09-17)

The Step 3b author of this pair refreshed the sufficient-scope decision after a
local scaffold repair. One further item was added and fully authored on the A
page: `lem-dependent-choice-implies-countable-choice`, the ZF finite-history
proof that DC implies AC_omega. It replaces, for the DC-hypothesis consumers,
the citation of `thm-choice-implies-dependent-implies-countable-choice`, which
the current plan places on the later page
`weak-choice-principles-and-sierpinskis-theorem` (order 665 versus this pair's
288.075) and which fwdcheck therefore reports as an undeclared forward
reference for these items; the AC-hypothesis consumers instead cite the
published earlier-page item
`lem-ac-supplies-countable-and-dependent-choice-for-banach-integration`
(order 288.069). The repair strengthens the pair's declared choice-cost
accounting and adds no new claim beyond the standard DC => AC_omega interface
that the design already assumed. The A inventory is now 26 items, the B
inventory remains the 7 recorded items, no promised claim was dropped, and the
manifest, coverage (`canonical` row), proof contracts, cross-batch dependency
input and page item list were updated together.
