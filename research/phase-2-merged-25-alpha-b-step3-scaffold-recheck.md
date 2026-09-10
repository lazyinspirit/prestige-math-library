# Final scaffold adjudication — group b, batch 2

Date: 2026-09-09. Decision: **repaired**, confidence 1. Ordinary verdict: **sufficient**.
Pair: `sequential-uniform-boundedness-with-countable-choice` and its examples companion.

## Authority and inputs

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md, the frontier ledger brief,
assigned final dispatch, initial review/verdict, Beta fix notes, current manifests,
coverage, scope decisions, Functional Analysis design §14.1/§14.3, canonical plan,
and relevant published prerequisite definitions/proofs. No owner scaffold decision
exists for this pair. Active state is `.autopilot/phase-2-catchup-24`, in Step 3;
HEAD inspected was `76afd32f7`. Historical RESUME files were not used.
Only owned scaffold/evidence files and the tool-derived frontier ledger were written.
Published items, shared plan and prose were not edited.

## Applied repairs and initial findings

The Beta dependency additions satisfy the initial review: real LUB completeness,
induction, finite sums, integer powers, reciprocal convergence, vector finite sums,
Banach and bounded-operator interfaces, and finite-support/subspace machinery are
now explicit. All four commissioned items remain, in the same A/B order.

Two final repairs were applied to the B manifest:

- `cex-sequential-uniform-boundedness-needs-a-complete-domain`: the finite-support
  induction previously mentioned `f(r+1)` when the domain was `r+1`. It now proves
  boundedness for every finite list by induction on its length, restricting to `r`
  and comparing the earlier bound with the valid final value `f(r)`. The empty-list
  bound is 0. No choice is used and no claim was weakened.
- `ex-sequential-uniform-boundedness-for-coordinate-partial-sums`: added
  `def-axiom-schema-of-replacement` for the explicitly proposed unique-coordinate
  assembly. Its exact instance takes each j to the uniquely specified pair
  `(j,x_j)`, producing the graph of x. The published schema and its language
  definition were read; no choice assumption is hidden in unique existence.

Coverage now distinguishes successful canonical run source evidence from this
worker's failed DNS probe. Historical failures and genuine fetch stamps remain.

## Mathematical and dependency adjudication

The two-sign lemma follows from `2Tu=T(x+u)-T(x-u)`, triangle inequality and
homogeneity. The bounded-operator definition supplies linearity and both scalar
conventions. No completeness or choice is used.

For the theorem, nonempty subsets of N have unique least indices k_n; this uses
`thm-well-ordering-principle`, not arbitrary-set well-ordering. The finite unit-ball
supremum and rescaling give nonempty unit-vector sets E_n with strict 2/3 norm
attainment from below. Apply the primary N-indexed clause of `def-countable-choice`
once. Its consistency comparisons and external references are not proof premises.
The fixed vector sequence and tie rule define an everywhere-defined map on N×X;
`thm-recursion` therefore supplies the signs without DC. No increasing-subsequence
claim about k_n is needed. The finite geometric tail is at most `3^(-n)/2`.
Completeness gives one limit x, and the reverse triangle estimate gives
`||S_n x|| > (1/6)(4/3)^n`. Induction gives `(4/3)^n >= 1+n/3`, contradicting the
pointwise bound by Archimedean cofinality. Y need not be complete; HB is unused.

The c_0 example constructs scalar limits via tail infima and LUB, reduces the
complex case to real coordinates, and assembles unique limits with Replacement.
Uniform Cauchy estimates yield uniform convergence; the epsilon/2 null-tail argument
puts the limit in c_0. Coordinate truncation has norm at most 1 and attains 1 on e_0,
including N=0. Its error is the null tail. Only the optional qualitative application
of the new theorem spends AC_omega.

The c_00 counterexample uses the repaired finite-list induction and
`thm-subset-of-a-finite-set` clause 1 to identify finite support with eventual zero.
The inherited norm is legitimate. T_0=0, and e_n attains norm n for n>=1. Every orbit
is eventually zero. Truncations of `1/(j+1)` have mutual distances `1/(N+2)` for
M>N and cannot converge to an eventually-zero sequence. Thus precisely the complete
domain hypothesis fails, without any choice-based counterclaim.

Critical transitive interfaces were read at the clauses actually consumed:
Banach → complete metric → Cauchy/convergence definitions; operator norm → bounded
operator → linear map/norm and scalar conventions; LUB → real Cauchy completeness,
rational approximation and Archimedean machinery; complex modulus → square-root
existence and square monotonicity; recursion → Peano/induction; finite sums and
powers → their recursive definitions and algebraic laws. Integer-power
`justified_by: lem-power-laws` is discharged by its independent nonvanishing
induction, not circular use of negative powers. Real Cauchy completeness uses least
admissible rational triples, not countable representative choices. The current
`lem-null-maximal` uses the valid non-strict reciprocal comparison. The LUB proof's
bisection is deterministic. These uses preserve ZF + AC_omega for the theorem and
choice-free direct B calculations.

The A requires closure has 141 pages including itself and excludes the deferred
set-theory catalogue. A declared deps/justified_by graph screen reached 302 items,
with no missing IDs and no other-run-batch item intersection. This graph screen is
not a semantic certification of every co-resident claim. The actual routes above
use no recorded theorem, B-page supplier, forward result, HB family theorem, or
DC-based Sokal theorem. All four owned items have explicit deps and empty
justified_by/forward_refs/external_refs. The new Replacement supplier is on the
already-required earlier ZFC page. The integrated-plan check verifies actual item
placement despite the canonical inventories still awaiting Step 4 splice.

The initial published supremum debt is already repaired on disk and recorded in
`research/published-consumer-supplier-ledger.md` (UC34 entries for
`def-operator-norm` and `def-c-zero-and-ell-infinity`). Both now explicitly use
`cor-cauchy-reals-lub-complete`. This adjudication checked those current clauses;
it made no published repair and does not close unrelated Phase-3 consumer debt.
Batch 2's cross-batch input remains correctly `[]`; the derived ledger was refreshed.

## Full-text source evidence and scope

Independently opened the complete five-page [Sokal paper](https://staff.fnwi.uva.nl/r.p.stevenson/1005.1585.pdf),
reading its theorem, lemma, equations (1)–(2), complete proof, all seven remarks and
bibliography. The proof is on printed p.2; all remarks are on printed p.3. The
independent-vector refinement remains attributed to the library.

Read [MIT's complete notes](https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf),
Definition 14 through the c_0 exercise, printed pp.5–6, including the entire
completeness proof, and Theorem 36 with its full proof, printed p.17. Read
[Teschl's complete manuscript](https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf),
§4.1 through Corollary 4.4, printed pp.101–103 (PDF pages 114–116). The textbook
Baire routes corroborate the analytic conclusion; their reported textual slips
and stronger-choice selections are not imported.

All 18 harvested/canonical dispositions remain accounted for. The eight exclusions
stand after current refresh: moving-ball machinery, quantitative plank strengthening,
category variants/examples, TVS extensions, and bibliographic directions are not
missing prerequisites of the commissioned four items. Scope evidence now uses the
correct printed Sokal locators. No source was dropped or replaced.

## Checks actually run after repairs

- manifest-deps, all 16 run manifests: 691 items, 0 normalized, 0 errors.
- content-policy, owned manifest, --manifest-only: 4 items, 0 errors/warnings.
- coverage-checklist, --require-destination: 18 results, 0 errors; one reviewed
  low-yield warning (6/18 scaffolded; inline/published/excluded dispositions explain it).
- source-fetch-check --stamp: 3/3 verified and resolved, 0 new stamps, 0 drops.
- source-backing --require-verified using the canonical run liveness JSON: pass,
  both harvested A results backed. That genuine receipt is dated
  2026-09-09T11:27:53.834Z and reports all three relevant URLs live.
- Extra worker-only url-sweep --recover --fail-on-dead: FAIL, DNS error 6 for all
  three hosts; source-backing against that failed probe reports backing-lost.
  Browser full-text access succeeds. This local network failure does not establish
  open-web absence or invalidate the separate successful run receipt. Both receipts
  are preserved in owned coverage; no fictional recovery/drop was substituted.
- validate-plan on canonical plan: exit 0; existing warnings/unspliced inventories.
- validate-plan on `/tmp/final-b-integrated-plan.json`, current plan with only the
  repaired owned pair overlaid: exit 0; no missing/order/cycle/B-leaf/boundary error.
- extcheck --quiet: exit 0, 57 existing unproved-on-published warnings outside these
  actual proof routes.
- scope-decisions refresh/check --group b: 8 current exclusions, all stands, 0 errors.
- frontier-dependency-ledger refresh: successful merge/deduplication.

No precheck, rendercheck, authoring contract, item judge, publication, or whole-run
mathematical certification is claimed. No remaining scaffold blocker was found for
this pair. The terminal repaired decision is recorded only after these edits/checks.
