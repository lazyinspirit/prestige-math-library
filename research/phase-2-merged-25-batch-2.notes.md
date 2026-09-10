# Batch 2 scaffold — phase-2-catchup-24

Status: **Final scaffold repaired; sufficient. See the current group-b recheck report.**
Date: 2026-09-09. Role beta, covers 2. No independent review or publication claim.

Supervisor recovery, 2026-09-09: root reran the genuine fetch-stamp tool
from a working network environment; all three active sources now verify.
The worker's source-access failures below remain historical evidence, not
current fetch blockers. Normal coverage, backing and mathematical review
gates remain required; no proof approval is inferred from successful fetching.

## Authority and current state

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md, briefs/beta-scaffold.md,
briefs/tasks/frontier-dependency-ledger.md, the generated beta-2 task and the
run's beta-batch task. The latter limits edits to this batch's manifest,
coverage and notes. Read the complete assigned §14.3 design and §14.1 placement
table in research/plan-functional-analysis-track.md, current plan-spec entries,
and the Step-0 no-drift receipt. The active engine status identifies
phase-2-catchup-24 in Step 1; git HEAD at inspection was 209eaa2f1, following the
Phase-2-wave-1 publication. Historical RESUME claims were not used. Existing
unrelated edits were left in place.

**Design/plan conflicts: none for this pair.** A/B orders remain 288.0601 and
288.0602, category functional-analysis, unchanged partners and requirements.
Canonical plan inventories are empty pending the engine's splice; the batch
manifest is populated without writing the plan. All four design IDs were unused
and are now reserved here. The A page contains two items, far below 60; there is
no need for a new prerequisite pair or scope expansion.

## Exact deliverable

- A: lem-two-signs-detect-an-operator-increment;
  thm-sequential-uniform-boundedness-under-countable-choice, in that order.
- B: ex-sequential-uniform-boundedness-for-coordinate-partial-sums;
  cex-sequential-uniform-boundedness-needs-a-complete-domain.
- All four records have full statements, detailed proof strategies, explicit
  deps, and empty justified_by/forward_refs/external_refs. Source provenance
  distinguishes the library's altered sequence proof from source statements;
  the concrete B constructions are marked generated examples/counterexamples
  and are not supplier items.
- Coverage has three active full-text sources and 18 explicit dispositions,
  including the two canonical B results. No original result was dropped.

The sequence theorem is over ZF + AC_omega. The original operator sequence has
indices k≥0; n≥1 is a separate auxiliary index. Least k_n with norm ≥4^n need
not form a strictly increasing subsequence, and no proof step needs that claim.
Choose independent unit vectors with image norm greater than 2/3 of the
operator norm once, using AC_omega. A comparison of two real norms chooses the
sign, with +1 on equality. Recursion on the set N×X supplies the whole sequence
without DC. The finite geometric tail is at most 3^(−n)/2, yielding the lower
bound (1/6)(4/3)^n on one orbit. Induction and the Archimedean property prove
all required geometric limits inline. Completeness of Y, HB, DC and full AC
are absent from the theorem's assumptions and actual proof.

The c_0 example proves completeness locally using unique coordinate limits and
a uniform Cauchy estimate. Scalar completeness is proved inline by tail infima
and a supremum, with real/imaginary parts in the complex case. This avoids a
B-leaf dependency on ex-c0-is-a-banach-space. The exact projection norm is 1
(including N=0); convergence follows from the null tail. Invoking the new
sequence theorem is explicitly under AC_omega, while these direct calculations
are choice-free. The counterexample retains exactly T_nx=nx_n on c_00, including
T_0=0, with ||T_n||=n and eventual vanishing on each finite support. Truncations
of (1/(j+1)) prove incompleteness and do not require a completion theorem.

## Dependency audit and proof uses

Both named prerequisite pages are published. The A page's transitive requires
closure contains 140 earlier pages, including all actual supplier homes. It
does not include deferred-set-theory-beyond-choice. The temporary integrated
plan validation also checks the four new inventories, so the empty canonical
plan alone is not the basis of this result. No actual dependency comes from
another batch in this run. At the authorized Step-3 ledger stage, the owning
input for this consumer batch should therefore be `[]`; this Step-1 dispatch
does not write the ledger or its unified output.

Actual interfaces checked against current item statements and relevant proofs:

| Supplier / path | Exact use and adequacy |
|---|---|
| lemma → def-bounded-linear-operator → def-linear-map | Same scalar field, linearity of both sums and differences. The definition bounds ||Tx|| by C||x||; the lemma itself uses only linearity. |
| bounded operator → def-norm-and-normed-space → def-vector-space, lem-vector-space-elementary-consequences | Triangle inequality and absolute homogeneity, including (-1)v=-v and the zero vector; these are exactly the hypotheses of the sign estimate. Nonnegativity follows from separation, homogeneity and triangle inequality as proved in the norm definition. No finite-dimensional assumption is used. |
| bounded operator → rem-real-and-complex-normed-space-convention | Complex scalar homogeneity uses modulus. The argument multiplies vectors only by real powers of 3 and signs ±1, which have the same modulus over both fields. No conjugate-linear dual convention enters. |
| sequence theorem → def-operator-norm → def-bounded-linear-operator | Finite unit-ball supremum, zero-domain value 0, positive rescaling to the sphere, and ||Tx||≤||T||||x||. The nonempty near-norming set follows from the supremum definition with a strict 2/3 threshold, not from norm attainment or Hahn–Banach. |
| sequence theorem → def-banach-space → def-complete-metric-space → def-cauchy-in-metric, def-metric-convergence | Completeness means convergence of each displayed Cauchy sequence, not a stronger choice-sensitive completeness notion. The geometric estimate proves the condition for every real epsilon and hence for the rational tests in these definitions. One resulting limit is enough. Its norm-tail bound is proved directly by triangle inequality; no sequential-closure equivalence is used. |
| sequence theorem → def-countable-choice | Use only its primary N-indexed assertion on the nonempty sets E_(n+1). The metadata edge to def-axiom-of-choice names a principle for comparison; it does not assert AC. No consistency result or external_refs in its remarks is a proof premise. |
| sequence theorem → thm-well-ordering-principle | Every nonempty subset of N has a least element. This is the natural-number well-order principle, not the arbitrary-set well-ordering theorem equivalent to AC. Its induction/discreteness/trichotomy proof was read. |
| sequence theorem → thm-recursion → thm-induction-principle, def-peano-system, def-natural-numbers | The exact theorem requires a fixed function A→A and initial element. Take A=N×X; the already fixed S_n,v_n and deterministic tie rule define that function. The published proof constructs the minimal closed relation and proves totality and uniqueness by induction, without choice. |
| sequence theorem and counterexample → thm-of-archimedean → def-complete-ordered-field, lem-of-naturals-positive, cor-of-one-positive, def-ordered-field | Cofinality of positive canonical naturals in a complete ordered field. The supremum-minus-one contradiction, positivity and successor arithmetic supply the exact property used for 3^(−n)→0, divergence of (4/3)^n, and reciprocal tails. The geometric inequalities and finite-sum identity are proved inline, not imported from later series results. |
| B example and counterexample → def-c-zero-and-ell-infinity | Real or complex sequences indexed from zero, coordinatewise vector operations and supremum norm. The B example proves its own completeness; the counterexample defines the finite-support subspace inline. Neither uses the co-resident duality or separation results. |
| B example → def-complete-ordered-field | Tail infima exist by applying the supremum property to negatives. The bounded monotone family of tail infima has a supremum. This directly constructs each real scalar limit; unique limits assemble by ZF set formation, not simultaneous arbitrary choices. |
| B example → lem-complex-conjugation-and-modulus-laws | Multiplicativity and subadditivity of modulus justify the scalar norm and coordinate estimates. The published proof uses coordinate expansion, nonnegative square-root uniqueness and (av−bu)^2≥0. Its complete proof and square-root prerequisites were read. |

The foundational continuations of these interfaces were checked separately from
co-resident FA theorems: field/vector-space axioms, scalar order and positivity,
natural recursion/induction, and the complex-coordinate/square-root construction.
The complex-modulus path reaches cor-cauchy-reals-lub-complete and the current
thm-reals-cauchy-complete. The latter's 2026-09-09 proof now selects rational
approximations by least triples (h,b,j), so the concrete scalar completeness
path does not spend hidden countable choice. cor-cauchy-reals-lub-complete uses
deterministic bisection. The current lem-null-maximal proof has the non-strict
reciprocal comparison needed when two terms coincide. These current texts,
not their old audit stamps, were inspected. No published repair was made here.

A preliminary declared-deps traversal of nine candidate roots (including the
ultimately unused thm-cauchy-criterion-via-lub) found 294 existing items, no
missing or proved_here:false targets, and no DC definition. This is a graph
screen, not a claim that 294 whole items were semantically recertified. The
final proofs use the clause-specific interfaces above. The root
thm-cauchy-criterion-via-lub is not used: scalar completeness is supplied inline
from LUB, avoiding an unnecessary Bolzano–Weierstrass branch. Similarly no
lem-geometric-sequence-null or lem-finite-truncations-are-dense-in-c0-and-ell-one
edge is retained: finite geometric identities and null-tail estimates are
proved locally. Nothing was removed from any published item's declarations.

In particular, the proof never uses thm-sokal-gliding-hump-uniform-boundedness
or its local-ball lemma: the former explicitly assumes AC_omega and DC, and
its recursive point selections would not prove this item's sharper contract.
The structural norming/duality prerequisites remain as the binding plan says;
their Hahn–Banach, transpose and closed-range theorems are not mathematical
premises of any owned proof. No semantic clearance of every co-resident item
is inferred or needed. There are no load-bearing external or forward references
in the owned pair and no new well-definedness obligations left unproved.

## Consumer routing / published-consumer ledger reconciliation

The design routes the future thm-weakly-convergent-sequences-are-norm-bounded to
this new theorem plus the published cor-relative-hahn-banach-bidual-isometry.
The exact strategy is evaluation T_n=J_X x_n on the Banach space X*: scalar
convergence makes every evaluation orbit bounded, the new theorem bounds
||J_X x_n|| under AC_omega, and relative HB supplies ||J_X x_n||=||x_n||.
HB must remain a separate hypothesis at that consumer. The norming equality
must not be replaced by the contractive inequality in the wrong direction.

The named weak-sequence item was not present in items/ or the current plan
inventory when searched; this is a future consumer instruction, not a newly
confirmed published defect. Step 3 did identify the separate clause-specific
published supplier debt recorded in the fix pass below; no published content,
ledger totals, or audit classes were changed by this batch writer. Existing
general FA-8 debt remains outside this batch. Supplying this scaffold does not
close any future consumer repair.

## Sources, actual recovery and limits

See coverage for every URL, exact locator, disposition and source support.

1. Sokal's university-hosted PDF was readable through the browser as the full
   five-page v2 paper, including the complete proof and all seven remarks.
2. MIT's official course page linked the complete 125-page notes. Read the
   full selected completeness passage (Definition 14 through the c_0 exercise)
   and Theorem 36 with its entire proof. It corroborates the analytic sequence
   theorem, not the weaker-choice proof. Its textual slips are noted in
   coverage; the local proof does not reproduce them.
3. Initial attempted Teschl author URL
   https://www.mat.univie.ac.at/~gerald/ftp/book-fa/fa.pdf returned 404 through
   the browser. The author landing page was consulted and reports publication
   withdrawal. Search query `"Teschl" "fa.pdf" functional analysis pdf` and
   the existing institutional mirror citation recovered the complete 563-page
   older manuscript at the active coverage URL. Recovery stopped once that
   full text was available; no unavailable-source drop is claimed. Read the
   complete §4.1 passage through Corollary 4.4. Its Baire proof explicitly
   invokes choice, so it is not used for the sharpened axiom claim. A screenshot
   request for the Teschl page failed with a browser cache miss; coverage
   labels the textual proof slips as extracted-text observations, not a
   confirmed inspection of the typeset page.

The independent-vector/deterministic-sign refinement is the library's
adaptation, not attributed verbatim to Sokal. The sharper plank theorem,
nonmeager testing-set version, general TVS versions, category definitions and
historical references were given specific out-of-scope dispositions. They
are not missing steps in the selected proof. Alpha should review these
source-level exclusions; adding them to a two-item supplier page would alter
its commissioned scope, not close a proof gap.

Command-line curl could not resolve any of the three hosts, and pdftotext is
not installed. `source-fetch-check --stamp` made the initial attempt plus five
actual retries per active source, recorded automatically in recovery_attempts;
each returned EAI_AGAIN. The browser recovery establishes that the texts are
available, so those DNS failures are **not** evidence of open-web absence.
No source_resolution drop, manufactured confidence, fetch stamp, or owner
mathematical escalation was written. The coverage status remains blocked.

## Checks actually run

| Check | Result |
|---|---|
| coverage-checklist, owned coverage, --require-destination --json | Pass, 0 errors; 1 low-yield warning (6 of 18 source/canonical rows included, plus inline and already-published rows). Exclusions explained above. |
| manifest-deps, all 16 run manifests | Pass at inspection: 85 items, 0 normalized, 0 errors. Other batches were concurrently being populated; this is not a final whole-run inventory total. |
| content-policy, owned manifest, --manifest-only --json | Pass: 4 items, 0 errors, 0 warnings. |
| validate-plan, current research/plan-spec.json | Pass; existing redundant-prerequisite warnings. Canonical inventories are not yet spliced. |
| validate-plan, /tmp/batch2-integrated-plan.json with only these two pages overlaid | Pass; verifies closure, ordering, prefix, B-leaf, identity, cycles and Foundations boundary with the four new items. |
| extcheck --quiet | Pass; existing unproved-on-published warnings outside this pair. |
| source-fetch-check, owned coverage, --stamp | FAIL: 0/3 sources verified, all EAI_AGAIN, six actual attempts each. No stamps written. |
| url-sweep, owned coverage, --fail-on-dead | FAIL: 0/3 command-line live, all curl DNS error 6. Receipt embedded under coverage.checks.url_liveness; working copy was /tmp/batch2-url-liveness.json. |
| source-backing, owned coverage, above liveness, --require-verified | FAIL: two harvested A result IDs reported backing-lost because every active URL failed the command-line liveness check. This is not a browser text-availability or mathematical finding. |

No precheck, rendercheck, item judge, publication or proof-contract check is
claimed at scaffold time. No authored item/page file exists from this dispatch.

Next action: the engine must rerun source-fetch-check --stamp, URL liveness and
source-backing in a working network environment before treating this scaffold
as ready. Keep the existing coverage recovery attempts; do not restart a
fictional six-attempt recovery or drop available sources. The Step-3 reviewer
then independently checks the AC_omega argument, the B proofs and the source
exclusions. After any reset, reread these notes, the current owned manifest and
coverage, the actual supplier texts and the open source gate before proceeding.

Final recheck after adding the explicit complex-modulus dependency: integrated
validate-plan passed (938 populated pages / 681 still empty); owned
manifest-only content policy passed with 4 items and no warnings; owned
manifest-deps passed with 4 items; coverage remained 18 dispositions, 0 errors
and the same single low-yield warning. No mathematical edits followed these
checks. The source gates remain failed for the recorded environmental reason.

## Step-3 fix pass

Date: 2026-09-09. This section supersedes the earlier source-readiness wording
above where it conflicts with the current records. No source was dropped, no
new A/B pair was needed, and no published item, page, plan, or shared prose
file was edited.

### Verdict `missing[0]` — resolved

**Evidence.** `cor-cauchy-reals-lub-complete` proves that the library's
Cauchy-sequence real field has the least-upper-bound property, hence is a
complete ordered field. This discharges both the unit-ball-supremum premise in
`def-operator-norm` and the complete-ordered-field hypothesis of
`thm-of-archimedean`. `def-finite-sum` and `lem-finite-sum-laws` define and
give the splitting/telescoping laws for the scalar geometric sum;
`def-integer-power` and `lem-power-laws` give the negative-exponent and quotient
identities; `thm-induction-principle` gives the two displayed geometric
inductions; and `cor-archimedean-reciprocal` supplies the reciprocal-to-zero
step. These are all published earlier than the owned page, have the required
real-field direction, and add no choice principle.

**Changed record.** The theorem manifest entry now directly declares
`cor-cauchy-reals-lub-complete`, `thm-induction-principle`,
`def-finite-sum`, `lem-finite-sum-laws`, `def-integer-power`,
`lem-power-laws`, and `cor-archimedean-reciprocal`, while retaining
`thm-of-archimedean` for the final cofinal-natural contradiction. The proof
remains ZF + `AC_omega` only: the sole indexed selection is the already fixed
family of near-norming vectors.

**Remaining blocker.** None for the theorem's dependency closure.

### Verdict `missing[1]` — resolved

**Evidence.** The `c_0` proof uses the concrete least-upper-bound property of
the library's reals, not the bare predicate `def-complete-ordered-field`.
The vector expression for `P_N` is the monoid-valued finite vector sum in
`def-linear-combination-and-span`; `def-bounded-linear-operator` supplies the
upper bound and `def-operator-norm` turns the bound and the `e_0` witness into
the exact norm one. `def-banach-space` is the exact name for the locally proved
norm-metric completeness conclusion.

**Changed record.** The example removes the inadequate direct
`def-complete-ordered-field` edge and adds direct dependencies on
`cor-cauchy-reals-lub-complete`, `def-banach-space`,
`def-bounded-linear-operator`, `def-operator-norm`, and
`def-linear-combination-and-span`. Its strategy now states the real-completeness
reroute and the vector-sum interface explicitly.

**Remaining blocker.** None for this example's dependency closure.

### Verdict `missing[2]` — resolved

**Evidence.** `def-normed-subspace` supplies the inherited `c_00` norm;
`def-bounded-linear-operator` and `def-operator-norm` supply the exact
operator interface; and `cor-cauchy-reals-lub-complete` discharges the real
supremum and Archimedean premises. The new inline finite-support argument is
choice-free: define `c_00` by eventual vanishing, show its support is a subset
of a finite von Neumann natural by `thm-subset-of-a-finite-set`, and conversely
enumerate a finite support via `def-countable`. Induction on that finite domain,
with the comparisons from `lem-nat-trichotomy` in the order of
`def-nat-order`, produces one natural upper bound. Thus eventual zero and
finite support are equivalent, and every `T_n x` is eventually zero.
`cor-archimedean-reciprocal` proves `1/(N+2)` tends to zero; the retained
`thm-of-archimedean` proves that the norms `n` are unbounded.

**Changed record.** The counterexample adds direct dependencies on
`def-normed-subspace`, `def-bounded-linear-operator`,
`cor-cauchy-reals-lub-complete`, `cor-archimedean-reciprocal`,
`def-countable`, `def-nat-order`, `lem-nat-trichotomy`,
`thm-induction-principle`, and `thm-subset-of-a-finite-set`; its strategy now
contains the finite-support proof rather than treating a last index as an
unstated fact.

**Remaining blocker.** None for this counterexample's dependency closure.

### Verdict `missing[3]` — resolved locally; Phase-3 published debt recorded

**Evidence.** The new direct `cor-cauchy-reals-lub-complete` edges reroute all
owned uses of the affected clauses without relying on a defective published
supplier declaration. The actual paths are
`thm-sequential-uniform-boundedness-under-countable-choice → def-operator-norm`
for unit-ball supremum, near-norming, and operator rescaling, and each B item
through `def-c-zero-and-ell-infinity` for the supremum norm. No other
co-resident Functional Analysis item is used by an owned proof.

**Record for published-consumer-supplier reconciliation.** A Phase-3 owner
must audit and repair published `def-operator-norm` by adding the concrete
real-completeness/LUB supplier `cor-cauchy-reals-lub-complete` for its claimed
supremum clauses, and published `def-c-zero-and-ell-infinity` by adding the
same supplier for its supremum-norm clause. The proposed supplier is already
published; this batch has not changed either published item. The local reroutes
mean this debt does not block the current supplier pair.

**Remaining blocker.** The two published-item repairs remain Phase-3 debt;
they are not an owned proof prerequisite after the reroute.

### Verdict `missing[4]` — partly resolved; current liveness blocker recorded

**Evidence.** Every active source retains its genuine `fetch_verified` receipt,
and `source-fetch-check --stamp` on the repaired coverage reports 3/3
fetch-verified and 3/3 resolved, with zero new stamps. Coverage now says
`blocked-url-liveness`, its scope note identifies the verified receipts, and
its `source_fetch` field records the successful current fetch check. The
initial EAI_AGAIN attempt plus five retries per source remains unchanged in
`recovery_attempts` as history.

**Changed record.** `research/phase-2-catchup-24-batch-2.coverage.json` no
longer claims `blocked-source-fetch`, pending verification, or 0/3 fetches.

**Remaining blocker.** A fresh `url-sweep --recover --fail-on-dead` still got
DNS error 6 for all three hosts (0/3 live and no archive recovery), and the
corresponding `source-backing --require-verified` therefore reports the two A
results as `backing-lost`. This is an external liveness failure after full text
was already recovered and stamped, not evidence of open-web absence. No drop,
invented retry, or source replacement is justified; re-run liveness/backing in
a working network environment.

### Dependency ledger and checks

Batch 2 still has no same-frontier item or page supplier: its consumer input is
correctly `[]`. `node tools/frontier-dependency-ledger.mjs refresh --run
phase-2-catchup-24` completed after the dependency edits and preserved that
classification.

Checks run after the repair:

- `coverage-checklist --require-destination`: 18 results, 0 errors, 1 existing
  low-yield warning.
- Whole-run `manifest-deps` over batches 1–16: 691 items, 0 normalized,
  0 errors.
- Manifest-only `content-policy`: 4 scoped items, 0 errors, 0 warnings.
- `validate-plan`: exit 0; page order and declared prerequisites are acyclic.
  The canonical pair inventory is still unspliced, as required at this stage.
- `extcheck --quiet`: exit 0; 57 pre-existing recorded-not-proved warnings,
  none owned by this pair.
- `source-fetch-check --stamp`: 3/3 fetch-verified, 3/3 resolved, 0 newly
  stamped.
- `url-sweep --recover --fail-on-dead`: 0/3 live because of DNS error 6; and
  the dependent strict `source-backing` check failed as described above.

## Final adjudication, 2026-09-09

Current report: `research/phase-2-catchup-24-alpha-b-step3-scaffold-recheck.md`.
Applied the finite-list induction indexing repair and explicit Replacement dependency
for the coordinate-limit graph. All required scaffold checks pass, with source-backing
using the genuine shared run liveness receipt; the worker DNS failure remains historical
evidence in coverage. The published supremum definitions have now been repaired by
the owner-authorized writer, as the canonical UC34 ledger records; earlier open-debt
notes above describe the historical fix pass, not the current supplier clauses.
No cross-batch dependencies, new pair, or shared plan amendment is needed.

## Step-5 authoring

Date: 2026-09-10. Author batch 2 only. Current plan inventories equal the assigned manifest; no design conflict or missing input. Step-3 final verdict is sufficient (group-b scaffold-recheck), superseding the initial insufficient review. Read SCHEMA and all direct supplier statements, including the now-repaired real-supremum definitions. Sources reopened successfully in the browser: Sokal complete five-page v2, especially printed p.2 equation (2) and proof; MIT printed pp.5–6 Definition 14 through the c_0 exercise and p.17 Theorem 36 with proof; Teschl §4.1 printed pp.101–103 through Corollary 4.4. No new fetch or review stamps.

Checkpoint: lem-two-signs-detect-an-operator-increment authored. Same real/complex field, arbitrary x,u, no choice/completeness. Steps 1.1–1.2 derive the difference identity and maximum estimate. Sole dependency def-bounded-linear-operator unchanged. Source: Sokal p.2 eq.(2); altered statement/proof provenance retained. No mathematical gap. Checks pending; next: sequence theorem and its axiom accounting.

Checkpoint: thm-sequential-uniform-boundedness-under-countable-choice authored, retaining every manifest dependency and exact ZF + AC_omega scope. Steps 1.1–1.4 prove norm existence, zero cases, least-index selection and nonempty unit-vector sets; only 1.4 spends AC_omega. Step 1.5 defines the total state map and proves its index coordinate; 1.6 and 2.1–2.4 establish the strict increment and limit-tail estimates; 3.1–3.2 contradict the one orbit bound. No increasing-subsequence, codomain completeness, HB, DC, or full AC premise. Sources: Sokal p.2; MIT Thm36 p.17; Teschl Cor4.4 p.103, the latter two comparison only. No mathematical gap; checks/contracts pending. Next: complete c_0 verification.

Checkpoint: ex-sequential-uniform-boundedness-for-coordinate-partial-sums authored. Zero-based c_0 over R/C, P_N includes coordinates 0 through N. Steps 1.1–1.2 construct unique scalar limits by tail infima and complex coordinates; 1.3 applies Replacement to the coordinate-pair graph; 1.4–1.5 prove boundedness, uniform convergence, and the null tail. Steps 2.1–2.3 calculate the coordinate formula, exact norm 1 (also N=0), and convergence. Only 2.4 assumes AC_omega to illustrate the new theorem. Dependencies unchanged; generated example is never a supplier. MIT Thm16 and following c_0 exercise, pp.5–6, support the method, not attribution of the full construction. No gap; checks/contracts pending. Next: finite-support counterexample.

Checkpoint: cex-sequential-uniform-boundedness-needs-a-complete-domain authored. Steps 1.1–1.2 define the subspace and prove both finite-support/eventual-zero directions, including the empty support and the valid last index f(r). Steps 2.1–2.2 compute ||T_n||=n, T_0=0, and the explicit orbit bound M||x||, then prove norm unboundedness. Steps 3.1–3.2 calculate the exact reciprocal-truncation distances and rule out every c_00 norm limit. Dependencies unchanged; R/C and zero-based nx_n conventions retained. MIT pp.5–6 support the setting only; generated counterexample provenance retained. No choice or unresolved mathematical gap. Next: compose both pages, contracts from these completed arguments, and run the required checks.

### Final Step-5 checkpoint and authoring report

All four assigned arguments and both pages are complete as drafts. The manifest
and current plan agree exactly; all IDs and promised scope are preserved.
No scope change, narrowing, removal, new prerequisite, or Alpha escalation is proposed.
The authoring conclusions below are local mathematical work, not an independent
review or publication decision.

Completed item IDs:

- `lem-two-signs-detect-an-operator-increment`
- `thm-sequential-uniform-boundedness-under-countable-choice`
- `ex-sequential-uniform-boundedness-for-coordinate-partial-sums`
- `cex-sequential-uniform-boundedness-needs-a-complete-domain`

Completed page IDs and canonical paths:

- `sequential-uniform-boundedness-with-countable-choice` at
  `library/functional-analysis/sequential-uniform-boundedness-with-countable-choice.md`
- `sequential-uniform-boundedness-with-countable-choice-examples` at
  `library/functional-analysis/sequential-uniform-boundedness-with-countable-choice-examples.md`

Created `research/phase-2-catchup-24-batch-2.proof-contracts.json` (previously
absent), with 29 individually described derivations, complete exact local-source
excerpts and their actual uses, external source locators and attribution limits,
and 32 item-specific boundary dispositions. No generic strategy sentence is used
as proof evidence. Each supporting step is mapped once. No diagram or finite test
substitutes for an argument.

Canonical precheck repair reordered independent rows into phases and renumbered
references. The per-item checkpoints above record their initial numbering;
these FINAL locations and the current contracts supersede those numbers:

- Lemma: 1.1 difference identity; 2.1 norm maximum inequality.
- Theorem: 1.1 norm scaling/zero spaces; 1.2 geometric decay; 2.1 least indices;
  3.1 nonempty E_n; 4.1 sole AC_omega use; 5.1 deterministic recursion;
  6.1 increment; 7.1 finite geometric tail; 8.1 Banach limit; 9.1 limit-tail
  bound; 10.1 divergent image lower bound; 11.1 contradiction with M_x.
- Example: 1.1 real scalar limits; 1.2 coordinate formula and bounded linearity;
  2.1 complex limits; 2.2 exact norm one; 2.3 convergence; 3.1 Replacement;
  4.1 uniform limit bound; 5.1 null tail/completeness; 6.1 optional theorem use.
- Counterexample: 1.1 subspace; 2.1 both finite-support equivalence directions;
  2.2 exact norms; 3.1 pointwise bounds versus unbounded operator norms;
  3.2 reciprocal Cauchy witness; 4.1 impossibility of a c_00 limit.

**Checks actually run and outcomes.**

- Explicit-path `node tools/tsx-run.mjs tools/precheck.mts` on the four
  above `items/ID.md` paths: initial result required canonical phase repairs
  on all four; adopted the normative checker's reordered rows and references.
  Rerun passed 4/4. Final rerun after the counterexample heading clarification
  also passed 4/4, zero failures.
- Bare `node tools/validate-plan.mjs`: exit 2, usage requires a plan path.
  Correct invocation `node tools/validate-plan.mjs research/plan-spec.json`:
  exit 0, acyclic/consistent, no item-level cycle, forward-use, B-page dependency,
  or unresolved-ID error among the 978 populated pages. Existing redundant-page
  prerequisite warnings remain, and 641 other planned pages lack inventories;
  those are explicit limits of this whole-plan structural result.
- `node tools/content-policy.mjs research/phase-2-catchup-24-batch-2.pages.json`:
  initial and final runs pass, 4 scoped items, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/phase-2-catchup-24-batch-2.proof-contracts.json --strict`:
  initial and final runs pass, 4/4 items, 0 errors, 0 warnings.
- `node tools/rendercheck.mjs` with the four explicit item files and both
  explicit page files: pass, 6 files; every math span parsed with actual KaTeX,
  and every frontmatter block parsed with the renderer's YAML parser.
- Read-only declaration comparison: all four authored dependency arrays equal
  their manifest arrays; all items are draft and have no judge/audit/verified
  stamp. Intersection with every other batch's item inventory is empty.

**Provenance decisions.** Both A statements and proofs retain `ai-altered`:
Sokal p.2 equation (2) supplies the algebraic estimate; the theorem is a sequence
specialization with a locally proved sharper axiom account. MIT Theorem 36 p.17
and Teschl Corollary 4.4 p.103 corroborate the analytic conclusion without
supplying the AC_omega audit. Both B statements retain `ai-generated` and their
matching example/counterexample generation roles; their proofs retain
`ai-altered`. MIT pp.5–6 supports the completeness method and setting, not
attribution of the exact witnesses or a claim that its c_0 exercise is proved
there. No source was dropped. No generated statement is a dependency target.
No load-bearing forward or recorded-not-proved reference is used.

**Dependency input.** No dependency was changed during Step 5. The current
consumer input `research/phase-2-catchup-24-batch-2.cross-batch-dependencies.json`
is already `[]` and remains mathematically correct. The two A-page prerequisite
pages are earlier published pages, the B page requires this batch's A page, and
all item suppliers are earlier published items or the earlier owned A items.
Therefore no input mutation or derived-ledger refresh was necessary. The ledger
brief itself and the shared unified ledger were not edited.

**Unresolved obligations.** None in this batch's mathematics or promised scope.
The theorem assumes precisely ZF + AC_omega; the direct B constructions are ZF,
and only the optional example application invokes AC_omega. All zero, empty,
one, degenerate, endpoint, selection, and applicable iff cases are addressed
in the contracts. The older source-fetch/dependency-debt notes above are
historical and superseded by the final Step-3 report and the current source
readings/supplier statements. Published content, other batches, plan, workflow
state, and independent reviews were not edited. No review stamps were written.
Next action belongs to the build driver's authored-content review stage.
