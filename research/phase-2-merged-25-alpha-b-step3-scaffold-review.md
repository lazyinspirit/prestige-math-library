# Phase 2 catchup 24, Alpha group b, Step 3 scaffold review

Date: 2026-09-09

Assignment: batch 2. Reviewed the A/B pair `sequential-uniform-boundedness-with-countable-choice` and `sequential-uniform-boundedness-with-countable-choice-examples`.

## Outcome

The pair is `insufficient`. The proposed gliding-hump proof and both examples are mathematically sound in outline, the design inventory is present in the manifest in legal order, and the three full-text sources adequately support the retained claims. Publication is blocked by missing direct dependencies and by stale source-state evidence:

- the main theorem does not declare the real-completeness premise needed by its operator-norm and Archimedean suppliers, nor the finite-sum, power, induction, and reciprocal interfaces used explicitly in its proof;
- the `c_0` example omits the Banach-space, bounded-operator, operator-norm, vector-sum, and actual real-completeness interfaces it proves with;
- the `c_00` counterexample omits bounded-operator, inherited-subspace, reciprocal, real-completeness, and finite-support boundedness support;
- the coverage status and check narrative still report a source-fetch block after all three records were stamped successfully.

No new A/B prerequisite pair is needed. Beta 2 can repair the manifest, coverage, and notes within the existing four-item design. The eventual plan splice must carry the repaired inventories and dependencies. This review did not edit the batch manifest, coverage, notes, plan, prose design, published items, or dependency ledgers.

## Inputs and boundaries

I read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`, `briefs/tasks/frontier-dependency-ledger.md`, the active-run status, group assignment, Step-0 receipt, Functional Analysis design sections 14.1 and 14.3, current `plan-spec.json`, the batch manifest, coverage, notes, cross-batch input, the exact published suppliers used by the proposed bodies, and the complete relevant source passages.

The current plan has the commissioned IDs, orders 288.0601 and 288.0602, category `functional-analysis`, companions, and page `requires`. Its item arrays remain empty pending the build driver's splice; the manifest has exactly the two A and two B items specified by the design. The A-page `requires` closure has 141 pages including itself, the B-page closure 142. Both are earlier and acyclic, and neither reaches `deferred-set-theory-beyond-choice`. The two declared Functional Analysis prerequisite pages are structural placement prerequisites; no owned proof pretends their Hahn--Banach or adjoint results are mathematical inputs.

## Mathematical audit

### Two-sign lemma

`lem-two-signs-detect-an-operator-increment` is ready. From

`2Tu = T(x+u) - T(x-u)`

the triangle inequality gives the claimed maximum bound over both real and complex scalars. Its sole direct dependency `def-bounded-linear-operator` supplies linearity and reaches the scalar/norm conventions. Boundedness is stronger than this one algebraic estimate needs but matches the page interface and causes no proof gap.

### Sequential theorem

The substantive proof route is correct. Unbounded operator norms make each set defining the least `k_n` nonempty; natural-number well-ordering selects the unique least index without choice. The unit-sphere supremum makes each near-norming set `E_n` nonempty. One use of `AC_omega` selects the independent vectors. With those vectors fixed, comparison of two real norm values determines each sign, including the stated deterministic tie rule, and ordinary recursion on `N x X` constructs the partial sums without Dependent Choice.

The constants also close. The two-sign lemma gives

`||S_n x_n|| > (2/3) 3^(-n) ||S_n||`.

The finite geometric tail is at most `3^(-n)/2`; Banach completeness supplies one limit `x`; and the direct tail argument gives `||x-x_n|| <= 3^(-n)/2`. Therefore

`||S_n x|| > (1/6) 3^(-n) ||S_n|| >= (1/6)(4/3)^n`,

which contradicts pointwise boundedness after the stated Bernoulli-style induction and Archimedean choice of `n`. Completeness of `Y`, Hahn--Banach, DC, and full Choice are not used.

The current dependency list nevertheless does not license that body:

1. Path `thm-sequential-uniform-boundedness-under-countable-choice -> def-operator-norm` uses existence of a real supremum, its near-supremum property, and the least-bound estimate. `def-operator-norm` says the supremum exists because the set is bounded, but its deps do not prove that the library's real field has the least-upper-bound property.
2. Path `thm-sequential-uniform-boundedness-under-countable-choice -> thm-of-archimedean` uses the theorem on real-valued norms. `thm-of-archimedean` assumes a complete ordered field, while `def-complete-ordered-field` only defines that property.
3. The body directly invokes two inductions, finite sums and a finite geometric identity, integer negative powers, power quotient laws, and reciprocal convergence. Those uses are absent from `deps` even though the applicable published items exist earlier.

Required repair: add direct `cor-cauchy-reals-lub-complete` to discharge the real-completeness premises; add `thm-induction-principle`, `def-finite-sum`, `lem-finite-sum-laws`, `def-integer-power`, `lem-power-laws`, and `cor-archimedean-reciprocal`. Retain `thm-of-archimedean` for the cofinal-natural contradiction. This preserves the exact ZF + `AC_omega` statement and introduces no stronger choice principle.

### Coordinate projections on `c_0`

The proposed completeness argument is valid once its premise is supplied. A real Cauchy sequence is bounded; the tail infima form an increasing bounded family; their supremum is the limit. Taking real and imaginary parts transfers the result to complex scalars without choice. For a Cauchy sequence in `c_0`, each coordinate has a unique limit, so Replacement assembles the limiting sequence without a countable selection. Passing the uniform Cauchy estimate to each coordinate gives norm convergence, and comparison with one null sequence proves the limit is in `c_0`. Coordinate truncation then has norm one and converges by the null tail.

But `def-complete-ordered-field` is a definition, not proof that the chosen real field satisfies it. The example also claims the domain is Banach and the maps are bounded operators of norm one without declaring the corresponding interfaces. Required repair: add direct `cor-cauchy-reals-lub-complete`, `def-banach-space`, `def-bounded-linear-operator`, and `def-operator-norm`. Add `def-linear-combination-and-span` for the displayed finite vector sum, or define `P_N` coordinatewise and prove that formula from the monoid-valued finite-sum interface. The real-only `def-finite-sum` is not an adequate definition of a sum of vectors.

### Incomplete-domain counterexample

The counterexample itself is correct. For `T_n x = n x_n` on finite-support sequences, `||T_n||=n` (with `T_0=0`), every orbit is eventually zero, and truncations of `(1/(j+1))` are Cauchy with no finite-support norm limit.

Its current proof still has undeclared work. It proves each `T_n` bounded but omits `def-bounded-linear-operator`; it uses the inherited normed-subspace construction but omits `def-normed-subspace`; and both the operator supremum and real reciprocal estimates need actual real completeness. Add `cor-cauchy-reals-lub-complete` and `cor-archimedean-reciprocal`. Finally, “a finite support has a last index” is not supplied by the listed deps. Add `def-countable`, `def-nat-order`, and `thm-induction-principle` (or an exact earlier lemma, if Beta identifies one) and expand the finite-enumeration induction proving every finite subset of `N` is bounded. No new standalone item is necessary if that short proof is made explicit.

## Published supplier debt and the Phase-2 boundary

This is clause-specific published debt, not a semantic rejection of all co-resident items:

- `thm-sequential-uniform-boundedness-under-countable-choice -> def-operator-norm` uses the affected supremum-existence and near-supremum clauses;
- `ex-sequential-uniform-boundedness-for-coordinate-partial-sums -> def-c-zero-and-ell-infinity` and `cex-sequential-uniform-boundedness-needs-a-complete-domain -> def-c-zero-and-ell-infinity` use the affected supremum-norm clause;
- all three items use actual properties of the library's real field, not merely the definition of a complete ordered field.

Adding `cor-cauchy-reals-lub-complete` directly to the owned items is an adequate local reroute. The missing completeness edges in published `def-operator-norm` and `def-c-zero-and-ell-infinity` should be reconciled as Phase-3 consumer/supplier debt by an authorized published-content owner. The rest of those definitions remains usable, and unrelated published Functional Analysis debt is not a supplier verdict blocker.

The inspected actual dependency continuations contain no missing ID, item cycle, forward use, `proved_here: false` target, or route to the deferred set-theory ledger. The Countable Choice item is used only for the one indexed selection; the natural well-order and recursion items are choice-free in the exact directions required.

## Sources and dispositions

There is no `source_resolution` drop or owner escalation. I independently read the relevant complete texts:

- Alan D. Sokal, *A really simple elementary proof of the uniform boundedness theorem*, complete five-page arXiv v2, theorem, lemma, equations (1)--(2), proof, and Remarks 1--7, <https://arxiv.org/pdf/1005.1585>. Equation (2) and the `4^n`/`3^(-n)` gliding-hump estimates support the two A items; the precise `AC_omega` bookkeeping is correctly attributed to the library adaptation.
- Andrew Lin and Casey Rodriguez, *MIT 18.102 Complete Lecture Notes*, complete 125-page notes, Definition 14 through Theorem 16 and the `c_0` exercise at printed pp. 5--6, and Theorem 36 with proof at printed p. 17, <https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf>. This independently supports the Banach-domain/normed-codomain theorem and the coordinatewise completeness route, but not the sharpened choice audit.
- Gerald Teschl, *Topics in Real and Functional Analysis*, complete 563-page mirror, Section 4.1, Theorem 4.1 through Corollary 4.4 at PDF pp. 113--115, <https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf>. Corollary 4.4 corroborates the analytic statement. The preceding Baire results and stronger dichotomy are comparison material, not suppliers.

All 18 harvested records have dispositions. The eight declined records were independently adjudicated in `research/phase-2-catchup-24-alpha-b-scope-decisions.json`; all stand. They are historical remarks, category examples, the unused local-ball form, or stronger Baire/plank/TVS results. None is a missing premise of an included item. The checklist's low-yield warning therefore does not identify a mathematical omission.

The live fetch evidence is now positive: each active coverage source has a `fetch_verified` stamp and `source-fetch-check --stamp` reports 3/3 verified and resolved, with zero newly stamped. The batch coverage still says `blocked-source-fetch`, its `checks.source_fetch` string says 0/3, and its `scope_notes` says verification is pending. Beta 2 must update those current-state fields while preserving the genuine earlier DNS failures in `recovery_attempts` as history.

## Same-frontier dependencies

No owned item depends on an item proposed by another `phase-2-catchup-24` batch. Every actual supplier is already published or is the earlier item in this A/B pair. The existing batch-2 consumer input `[]` is therefore correct. Under the ledger brief, this read-only reviewer did not rewrite the batch input or unified frontier ledger; this review is the owner-facing reconciliation record.

## Checks run

- `node tools/scope-decisions.mjs refresh --run phase-2-catchup-24 --group b`: 8 declines, initially 8 pending.
- `node tools/scope-decisions.mjs check --run phase-2-catchup-24 --group b`: 8 current declines, 0 errors after all were resolved as `stands` with item-specific evidence.
- `node tools/source-fetch-check.mjs --coverage research/phase-2-catchup-24-batch-2.coverage.json --stamp`: 3/3 fetch-verified, 3/3 resolved, 0 newly stamped.
- `node tools/coverage-checklist.mjs research/phase-2-catchup-24-batch-2.coverage.json --require-destination`: 18 results, 0 errors, one reviewed low-yield warning.
- `node tools/content-policy.mjs --manifest-only research/phase-2-catchup-24-batch-2.pages.json`: 4 scoped items, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/phase-2-catchup-24-batch-{1..16}.pages.json`: 691 items, 0 normalized, 0 errors. This resolves declared IDs but does not detect the semantic premise gaps above.
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0; 1624 pages, acyclic and mechanically consistent. It reports 663 planned pages without item lists, including this unspliced pair, so it does not yet validate the owned item edges.
- `node tools/extcheck.mjs`: exit 0; 15,843 items, 163 recorded-not-proved, 57 warnings. None of the 57 listed consequences is an owned proposed item or an actual supplier used here.

## Handoff

Beta 2 owns the manifest dependency additions, expanded finite-support proof, and coverage/notes reconciliation. The build driver's later plan splice must use the repaired manifest. An authorized published-content/consumer-ledger writer should record the missing real-completeness edges in `def-operator-norm` and `def-c-zero-and-ell-infinity` for Phase 3. Re-run Step 3 after those batch-local repairs; no scope weakening, source drop, or new page pair is warranted.
