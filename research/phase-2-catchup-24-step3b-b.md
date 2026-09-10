# Step 3b — group b

Run `phase-2-catchup-24`; batch 2; sequential uniform boundedness A/B pair.
Current Step-3a `sufficient` receipt checked against its scope hash before audit.
The four commissioned items match `research/plan-functional-analysis-track.md`
§§14.1, 14.3 and the current plan. No previous Step-3b item or owner receipts
exist for these items. Contracts are audited in dependency order, one at a time.

## 1. lem-two-signs-detect-an-operator-increment — accept

Claim: over R or C, max(||T(x+u)||,||T(x-u)||) >= ||Tu|| for a
bounded linear map between normed spaces; no completeness or choice.
Linearity gives the difference 2Tu; triangle inequality and homogeneity
bound its norm by twice the displayed maximum. All quantities are finite.
Boundedness is harmless surplus, and complex homogeneity at 2 is identical.
Examined dependencies: `def-bounded-linear-operator`, `def-linear-map`,
`def-norm-and-normed-space`, `rem-real-and-complex-normed-space-convention`.
Read their current published clauses. Source: Sokal, complete pp.2–3,
equation (2), <https://staff.fnwi.uva.nl/r.p.stevenson/1005.1585.pdf>.
The complete five-page browser extraction was available; the algebra was
checked directly. No repair or outstanding obligation. Contract unchanged.
Next: record acceptance, then examine the sequential theorem.

## 2. thm-sequential-uniform-boundedness-under-countable-choice — accept

Claim: a given pointwise bounded sequence X -> Y has bounded operator norms,
assuming ZF + AC_omega, X Banach and Y merely normed over R or C.
The zero domain is separated. Least indices k_n exist for each threshold 4^n;
strict increase is unnecessary. Positive operator norm and sphere rescaling
make E_n nonempty. Reindexing the AC_omega selection on (E_{n+1}) gives
v_n in E_n for n >= 1. Thereafter the sign comparison defines a total
function (n,z) -> (n+1,z+epsilon*3^{-(n+1)}v_{n+1}) on N x X.
The recursion theorem applies to this set and (0,0); no dependent selection
or Hahn–Banach enters. Finite geometric sums give the Cauchy bound
3^{-n}/2. Completeness supplies a single limit; the triangle inequality
passes that bound to the limit. Rescaling and the first item yield the
strict lower bound (4/3)^n/6. The two elementary inductions and the
Archimedean premise prove both needed limits and the contradiction.
No completeness of Y is used.

Examined every declared dependency in the manifest: the first lemma;
`cor-cauchy-reals-lub-complete`, `def-operator-norm`, `def-banach-space`,
`def-countable-choice`, `thm-well-ordering-principle`, `thm-recursion`,
`thm-induction-principle`, `def-finite-sum`, `lem-finite-sum-laws`,
`def-integer-power`, `lem-power-laws`, `thm-of-archimedean`,
`cor-archimedean-reciprocal`. Also examined implicit/transitive clauses in
`def-bounded-linear-operator`, `def-norm-and-normed-space`,
`rem-real-and-complex-normed-space-convention`, `def-complete-metric-space`,
`def-cauchy-in-metric`, `def-metric-convergence`, and
`thm-reals-cauchy-complete` (its current canonical rational selections are
choice-free). The complete-ordered-field premise is supplied, not inferred
from its bare definition. Only the indexed axiom clause of countable choice
is used; its recorded consistency remarks are not proof suppliers.

Sources read: Sokal pp.2–3 above; Fellhauer §3.2, complete Theorem 3.2.1
proof and following remark, pp.11–13,
<https://math.hawaii.edu/home/jla/258-968-1-PB.pdf>; MIT complete Theorem 36
proof, printed p.17,
<https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf>.
Fellhauer independently corroborates the fixed-vector/deterministic-recursion
method. Its proof opens with Banach Y, but no Y-limit occurs; the owned
normed-Y proof was checked directly. MIT's Baire proof is comparison only.
No repair or unresolved obligation; contract unchanged. Next: record acceptance,
then audit the c_0 example.

## 3. ex-sequential-uniform-boundedness-for-coordinate-partial-sums — accept

Claim: zero-based c_0(K) is Banach, P_N x = sum_{j=0}^N x_j e_j
converges to x, and ||P_N||=1 for every N>=0, all choice-free; the
qualitative application of item 2 separately assumes AC_omega.
The scalar tail-infimum construction is valid: boundedness of a Cauchy
sequence gives finite infima of every nonempty tail; they are increasing
and bounded above, and their supremum is its limit by the diameter bound.
For complex coordinates the modulus inequalities transfer Cauchyness and
convergence to/from the two real coordinates. Uniqueness makes Replacement
applicable to j -> (j,x_j), so no choice is spent on coordinate limits.
Uniform Cauchy estimates pass to each coordinate, yield boundedness of x,
and give supremum-norm convergence (use eta<epsilon). The epsilon/2
null-tail argument proves membership in c_0. Thus completeness is supplied
locally before applying the theorem. Coordinate truncation is linear,
finite-support and contractive; e_0 witnesses norm one even at N=0.
The tail supremum tends to zero directly from the null-sequence definition.

Examined all ten declared dependencies: item 2,
`def-c-zero-and-ell-infinity`, `cor-cauchy-reals-lub-complete`,
`def-banach-space`, `def-bounded-linear-operator`, `def-operator-norm`,
`def-linear-combination-and-span`,
`rem-real-and-complex-normed-space-convention`,
`lem-complex-conjugation-and-modulus-laws`,
`def-axiom-schema-of-replacement`. Also examined the previously read
metric convergence/Cauchy definitions, induction, and countable-choice clause.
The vector sum is legitimately monoid-valued, not the scalar-only sum.
Current published supremum definitions already declare the real LUB supplier.
No B-page completeness example, HB result, recorded result, or general
Schauder-basis theorem is used.

Source: MIT notes at the URL in §2, complete Definition 14 through Theorem 16
and its following c_0 exercise, printed pp.5–6. The exercise is motivation;
the owned argument supplies its proof and the explicit projections locally.
No repair or unresolved obligation; contract unchanged. Next: record acceptance,
then examine the incomplete-domain counterexample.

## 4. cex-sequential-uniform-boundedness-needs-a-complete-domain — repaired

Claim: on zero-based c_00(K) with the supremum norm, T_n x = n x_n
has norm n, every orbit is eventually zero, and the domain is incomplete,
without choice. The eventual-zero definition precedes use of c_00. Its
support is a subset of a finite natural; conversely a finite enumeration
has a natural upper bound by induction, with successor entry f(r) at
length r+1. This is finite induction, not a countable sequence of choices.
The subspace and operator estimates follow coordinatewise. e_n gives
norm n for n>=1, while T_0=0. A finite initial orbit is bounded; the
Archimedean property makes the operator norms unbounded. For M>N the
truncated reciprocal vectors have distance exactly 1/(N+2), attained at
coordinate N+1. Any putative norm limit must have every coordinate
1/(j+1), contradicting eventual vanishing. Completeness of the ambient
c_0 is unnecessary in this argument.

Examined all thirteen original declared dependencies: `def-c-zero-and-ell-infinity`,
`def-normed-subspace`, `def-bounded-linear-operator`, `def-operator-norm`,
`def-banach-space`, `cor-cauchy-reals-lub-complete`, `thm-of-archimedean`,
`cor-archimedean-reciprocal`, `def-countable`, `def-nat-order`,
`lem-nat-trichotomy`, `thm-induction-principle`,
`thm-subset-of-a-finite-set` (its finite-subset clause and proof).
Also examined `def-cauchy-in-metric`, `def-metric-convergence`,
`rem-real-and-complex-normed-space-convention`, and
`lem-complex-conjugation-and-modulus-laws`.

Local repair: add the last two complex-scalar suppliers as direct deps and
state their precise use in the strategy. The published c_0 definition uses
complex scalar triangle inequality and homogeneity but its declared deps
only supply the real norm convention, sequence vocabulary and real LUB.
The new direct edges supply the omitted complex clauses locally, just as
in the already accepted projection example. No claim, axiom assumption,
source coverage or accepted item changed. This is a fully understood
interface repair, with no need for another mathematical review.

Validation after repair: owned manifest-deps 4 items / 0 errors;
manifest-only content policy 4 items / 0 errors or warnings;
coverage checklist 18 rows / 0 errors / one explained low-yield warning;
validate-plan with only this pair overlaid in a temporary plan passes
(975 populated pages; 644 empty planned pages). Initial tool attempts found
no `python` executable and used an unsupported `--manifest` policy flag;
no edit occurred in that attempt. The Node edit and corrected checks above
succeeded. Source: the MIT completeness/sequence-space passage read in §3
supports the setting; the explicit witness is the design's local construction,
not attributed to a textbook proof. No unresolved item obligation.
Next: record repaired, refresh scope/dependency records, run final mechanics.

## Published supplier reconciliation finding

Reopen `def-c-zero-and-ell-infinity` for a declaration-only complex-scalar
repair. Current `deps` are `[def-norm-and-normed-space, def-sequence,
cor-cauchy-reals-lub-complete]`; its last paragraph invokes scalar triangle
inequality and absolute homogeneity for K=C. Required already-published
suppliers: `rem-real-and-complex-normed-space-convention` and
`lem-complex-conjugation-and-modulus-laws` (current complete proof read).
Add these edges at the published definition; preserve its choice-free proof.
Existing canonical ledger rows at lines 508 and 28507 classify it A-R for
the prior LUB repair. That repair remains valid, but the new complex-clause
finding needs reconciliation with that same entry/index, not a duplicate.
This owned report is the authorized reconciliation input; no published file
or shared ledger counts were changed. All owned consumers now supply the
complex clauses directly; this debt does not block the new pair.

## Final mechanical gate and handoff

Outcome: **3 accept, 1 repaired, 0 item escalations**. All four current
content/dependency hashes close in the Step-3b checker. Accepted contracts
were left unchanged. No owner decision was created or overwritten.

| Check actually run | Result |
|---|---|
| manifest-integrity --run | Pass: 48/48 owed pages, no scope drift. |
| manifest-deps, all 16 manifests | Pass: 735 items, 0 errors. |
| content-policy, all manifests, --manifest-only | Pass: 735 items, 0 errors/warnings. |
| owned coverage-checklist --require-destination | Pass: 18 rows, 0 errors; 6/18 low-yield warning explained by retained dispositions. |
| scope-decisions refresh/check --group b | Pass: 8 declines, 0 pending/errors. Current `stands` evidence retained; no scope change or invented ruling. |
| frontier-dependency-ledger refresh --require-reviewed | Pass. Batch-2 input remains `[]`. |
| canonical validate-plan | Pass: 973 populated pages, 646 empty planned inventories. |
| owned-pair overlay validate-plan | Pass: 975 populated pages, 644 empty inventories. No splice performed. |
| extcheck --quiet | Pass, existing recorded-result warnings elsewhere. |
| source-fetch-check, owned coverage | Pass: 3/3 verified/resolved, no source drops or new stamps. |
| source-backing --require-verified, canonical run liveness receipt | Pass: both harvested A results backed. Receipt timestamp remains 2026-09-09T11:27:53.834Z. |
| fresh owned url-sweep --recover --fail-on-dead | FAIL: all three URLs return curl error 6 (DNS resolution); 0/3 live. No archive recovered through this worker. |
| source-backing against that fresh worker sweep | FAIL: both A results `backing-lost` because of those DNS failures. Browser full-text access to Sokal and MIT succeeds; the failed network probe does not establish source absence. |
| broader published depcheck --quiet | FAIL: four published audit-stamp errors listed below; no owned item error. |
| step3-decisions check --phase final | Whole-run exit 1: 116/735 current item decisions closed at the check, 619 outstanding outside group b. Group-b work list empty; 4/4 individual decisions current and closed. |

The broader depcheck errors are missing `verification.audited` or
`verification.verified` in published `cex-separately-continuous-not-jointly-continuous`,
`def-metric-continuity`,
`lem-boundary-label-of-a-van-kampen-diagram-is-null-in-the-presented-group`, and
`lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams`. They are mechanical
metadata failures in concurrent published work, not a discovered false clause
used by this pair. No audit stamps were manufactured.

The declared deps/justified_by closure has 302 IDs, no unresolved ID and no
supplier from another current batch; neither owned page has a cross-batch page
edge. The actual proof-use audit above also found no implicit cross-batch use.
Thus the existing empty consumer input is accurate, including same-group edges.
This structural screen is not a proof certification of every transitive item.
Only relevant dependency clauses were audited; irrelevant recorded consistency
remarks and co-resident Hahn–Banach/duality results were not imported.

Next action belongs to the engine: finish other groups and rerun the final
mechanical join, including fresh URL liveness in a network-capable environment.
The local fresh URL gate and broader published metadata gate have **not** passed.
Reconcile the complex-scalar published declaration debt above with its canonical
ledger entry. A later published-supplier content change invalidates affected
hashes and requires only the corresponding decision refresh/review. No authoring,
precheck, rendering, publication, or whole-run completion is claimed here.
