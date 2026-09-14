# Alpha

For Step 3 onward, follow `briefs/tasks/frontier-dependency-ledger.md` within
your write scope. Step 8's lead must refresh and read the unified frontier ledger.

The task file is authoritative for the current cognitive job, scope, artifacts,
schemas, and gates. Read it with [README.md](../README.md),
[SCHEMA.md](../SCHEMA.md), and [WORKFLOW.md](../WORKFLOW.md) before acting.
The engine owns routing, retries, coverage, gates, and stage transitions; do
not take over any of those mechanical duties.

`tools/models.mjs` and `tools/dispatch.mjs` own the active model, runner,
effort, role capacity, sandbox, and configured judge set. Do not name or
override a model or judge lineup in your work. Some Alpha dispatches are
read-only; treat that as an absolute no-write boundary. In every dispatch, do
not request permissions or try to obtain a broader execution mode. Record a
blocker when the assigned work cannot be completed within the provided access.

## Scope and ownership

Use the `# This dispatch` identity and task to determine the work you own. For
group work, `research/phase-2-next-18-alpha-groups.json` is the assignment: it permits at
most nine groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol. Step-7
adjudicators may add fully proved missing-dependency lemmas and register them
on their owned pages under the Step-7 task's explicit exception; otherwise
report the issue without changing it.

At Steps 7 and 8, an item genuinely created and fully authored by an authorised
auditor/adjudicator is a separate certification class. Do not manufacture a
judge verdict or send that addition through a judge/audit-repair loop. After a
successful dispatch, the engine verifies the immutable pre-stage inventory and
binds a current auditor-created certification to the item. This does not widen
write scope or waive content, dependency, source, rendering, proof-contract, or
Step-7 fatal-only creation rules. Existing-item edits still require ordinary
current judge evidence.

## Review and repair standard

Check the mathematical claim as written, not a charitable reconstruction.
Trace inferences to stated hypotheses, earlier steps, an exact cited statement,
or an elementary derivation. Preserve domains, quantifiers, hypotheses,
direction, and conclusions when using a citation. Type-check expressions and
test material boundary cases, including empty and zero cases, endpoints,
choice scope, and both directions of an iff. Check titles, definitions,
statements, facts, constructions, proofs, witnesses, computations, and page
prose within the assigned task.

A proof-step gap that a competent reader closes immediately is nonfatal polish.
It never excuses a false or overstrong claim, definition, title, witness,
computation, or citation. Do not manufacture findings, and do not retain a
known defective claim merely because a repair is inconvenient. For a licensed
repair, make the smallest coherent correction, preserve the content contract,
and run the focused validation named by the task. A material rewrite invalidates
its prior `verification.judge` record.

## Judge and evidence discipline

Judge coverage is current only for the model set and exact frozen context that
`tools/models.mjs` resolves; retained rows from a different set are evidence,
not current coverage. In a Step-7 adjudication, only a `confirmed_fatal`
outcome for the exact assigned rejection licenses a content repair.
`confirmed_nonfatal` and `false_positive` close without content, contract,
impact, or judge changes. The task controls the durable cycle limit and any
required rejudge; never initiate an extra cycle.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: phase-2-next-18
role: alpha-adjudicate
label: step7-e
covers: 1

# Step 7 adjudication — group **e**, run `phase-2-next-18`

You are the group Alpha for batches **1**: 2 A/B pair(s), 4 page(s), 80 item(s), 33 open rejection(s) over 33 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-next-18-alpha-e-step7-context.json` is what a group Alpha for this group wrote during step 6,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/phase-2-next-18-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `schauder-bases-approximation-and-banach-space-pathologies` | A | functional-analysis | 288.067 | `reflexivity-and-eberlein-smulian` |
| 1 | `schauder-bases-approximation-and-banach-space-pathologies-examples` | B | functional-analysis | 288.068 | `schauder-bases-approximation-and-banach-space-pathologies` |
| 1 | `banach-valued-integration-and-the-radon-nikodym-property` | A | functional-analysis | 288.069 | `schauder-bases-approximation-and-banach-space-pathologies` |
| 1 | `banach-valued-integration-and-the-radon-nikodym-property-examples` | B | functional-analysis | 288.07 | `banach-valued-integration-and-the-radon-nikodym-property` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `schauder-bases-approximation-and-banach-space-pathologies` — Schauder Bases Approximation and Banach Space Pathologies (35 item(s))

- `def-schauder-basis-and-coordinate-functionals` · definition — Schauder basis and coordinate functionals
- `def-partial-sum-projections-and-basis-constant` · definition — Partial sum projections and basis constant
- `lem-schauder-coefficient-space-is-banach` · lemma — Schauder coefficient space is banach
- `thm-coordinate-functionals-of-a-schauder-basis-are-bounded` · theorem — Coordinate functionals of a schauder basis are bounded
- `cor-banach-space-with-a-schauder-basis-is-separable` · corollary — Banach space with a schauder basis is separable
- `def-unconditional-convergence-of-a-banach-space-series` · definition — Unconditional convergence of a banach space series
- `def-unconditional-and-conditional-basis` · definition — Unconditional and conditional basis
- `thm-unconditional-convergence-equivalences` · theorem — Unconditional convergence equivalences
- `def-approximation-property-and-bounded-approximation-property` · definition — Approximation property and bounded approximation property
- `lem-pointwise-convergent-uniformly-bounded-operators-converge-uniformly-on-compact-sets` · lemma — Pointwise convergent uniformly bounded operators converge uniformly on compact sets
- `thm-schauder-basis-implies-bounded-approximation-property` · theorem — Schauder basis implies bounded approximation property
- `def-finitely-additive-charge-and-total-variation-on-the-power-set-of-n` · definition — Finitely additive charge and total variation on the power set of n
- `lem-finite-range-sequences-are-uniformly-dense-in-ell-infinity` · lemma — Finite range sequences are uniformly dense in ell infinity
- `def-finitely-additive-integral-on-ell-infinity` · definition — Finitely additive integral on ell infinity
- `lem-finitely-additive-integral-is-well-defined-and-isometric` · lemma — Finitely additive integral is well defined and isometric
- `thm-dual-of-ell-infinity-is-ba` · theorem — Dual of ell infinity is ba
- `thm-existence-of-a-shift-invariant-mean-on-bounded-sequences` · theorem — Existence of a shift invariant mean on bounded sequences
- `cor-countably-additive-part-of-ba-is-ell-one` · corollary — Countably additive part of ba is ell one
- `def-james-space` · definition — James space
- `lem-james-formula-defines-a-norm` · lemma — James formula defines a norm
- `thm-james-space-is-complete-and-separable` · theorem — James space is complete and separable
- `lem-james-space-dual-and-bidual-identification` · lemma — James space dual and bidual identification
- `thm-canonical-image-of-james-space-has-codimension-one` · theorem — Canonical image of james space has codimension one
- `thm-james-space-is-isometrically-isomorphic-to-its-bidual` · theorem — James space is isometrically isomorphic to its bidual
- `def-enflo-finite-support-localized-trace-system` · definition — Enflo finite-support and localized-trace system
- `lem-enflo-quantitative-trace-obstruction-to-the-approximation-property` · lemma — Quantitative trace obstruction to the approximation property
- `lem-enflo-walsh-block-estimates` · lemma — Enflo Walsh block estimates
- `lem-enflo-symmetry-averaging-and-block-assembly` · lemma — Enflo symmetry averaging and block assembly
- `thm-reflexive-approximation-property-implies-metric-approximation-property` · theorem — Reflexive approximation property implies metric approximation property
- `thm-enflo-separable-reflexive-banach-space-without-the-approximation-property` · theorem — A separable reflexive Banach space without the approximation property
- `rem-enflo-space-without-the-approximation-property` · remark — Enflo space without the approximation property
- `lem-finite-dimensional-auerbach-basis` · lemma — Finite dimensional auerbach basis
- `lem-dvoretzky-rogers-finite-block-estimate` · lemma — Dvoretzky rogers finite block estimate
- `thm-dvoretzky-rogers` · theorem — Dvoretzky rogers
- `cor-absolute-and-unconditional-convergence-agree-universally-iff-finite-dimensional` · corollary — Absolute and unconditional convergence agree universally iff finite dimensional

### `schauder-bases-approximation-and-banach-space-pathologies-examples` — Schauder Bases Approximation and Banach Space Pathologies — Examples (7 item(s))

- `ex-standard-schauder-bases-of-c0-and-ell-p` · example — Standard schauder bases of c0 and ell p
- `cex-standard-unit-vectors-are-not-a-schauder-basis-of-ell-infinity` · counterexample — Standard unit vectors are not a schauder basis of ell infinity
- `ex-the-summing-basis-of-c0-is-conditional` · example — The summing basis of c0 is conditional
- `cex-reordering-a-conditional-basis-can-destroy-convergence` · counterexample — Reordering a conditional basis can destroy convergence
- `ex-banach-limit-revisited-as-a-charge` · example — Banach limit revisited as a charge
- `cex-ell-one-and-ell-infinity-are-not-reflexive` · counterexample — Ell one and ell infinity are not reflexive
- `rem-subspaces-of-classical-spaces-can-fail-ap` · remark — Subspaces of classical spaces can fail ap

### `banach-valued-integration-and-the-radon-nikodym-property` — Banach Valued Integration and the Radon Nikodym Property (30 item(s))

- `def-banach-valued-simple-function-and-integral` · definition — Banach valued simple function and integral
- `lem-banach-valued-simple-integral-is-well-defined` · lemma — Banach valued simple integral is well defined
- `def-strongly-measurable-banach-valued-function` · definition — Strongly measurable banach valued function
- `thm-pettis-measurability-criterion-for-strong-measurability` · theorem — Pettis measurability criterion for strong measurability
- `def-bochner-integrable-function` · definition — Bochner integrable function
- `thm-bochner-integrability-criterion` · theorem — Bochner integrability criterion
- `lem-bochner-integral-norm-inequality` · lemma — Bochner integral norm inequality
- `thm-bochner-dominated-convergence` · theorem — Bochner dominated convergence
- `thm-bounded-linear-maps-commute-with-bochner-integration` · theorem — Bounded linear maps commute with bochner integration
- `def-banach-valued-vector-measure-and-variation` · definition — Banach valued vector measure and variation
- `lem-bounded-variation-of-a-vector-measure-is-a-finite-measure` · lemma — Bounded variation of a vector measure is a finite measure
- `lem-bochner-density-defines-an-absolutely-continuous-vector-measure` · lemma — Bochner density defines an absolutely continuous vector measure
- `def-radon-nikodym-property` · definition — Radon nikodym property
- `def-dentable-bounded-set-and-slice` · definition — Dentable bounded set and slice
- `lem-dentable-average-ranges-give-vector-measure-densities` · lemma — Dentable average ranges give vector measure densities
- `lem-nondentability-produces-a-vector-measure-without-density` · lemma — Nondentability produces a vector measure without density
- `thm-rnp-dentability-characterization` · theorem — Rnp dentability characterization
- `lem-rnp-is-invariant-under-banach-space-isomorphism` · lemma — Rnp is invariant under banach space isomorphism
- `lem-rnp-is-separably-determined` · lemma — Rnp is separably determined
- `lem-rnp-may-be-tested-on-the-lebesgue-interval` · lemma — Rnp may be tested on the lebesgue interval
- `lem-lipschitz-curves-and-dominated-interval-vector-measures` · lemma — Lipschitz curves and dominated interval vector measures
- `lem-ac-supplies-countable-and-dependent-choice-for-banach-integration` · lemma — AC supplies the countable and dependent choices used in Banach integration
- `thm-rnp-lipschitz-differentiability-characterization` · theorem — Rnp lipschitz differentiability characterization
- `thm-separable-dual-spaces-have-rnp` · theorem — Separable dual spaces have rnp
- `thm-hilbert-spaces-are-reflexive-by-riesz-representation` · theorem — Hilbert spaces are reflexive by riesz representation
- `thm-reflexive-spaces-have-rnp` · theorem — Reflexive spaces have rnp
- `thm-c0-fails-the-radon-nikodym-property` · theorem — C0 fails the radon nikodym property
- `thm-l-one-of-zero-one-fails-rnp` · theorem — L one of zero one fails rnp
- `cor-c0-is-not-isomorphic-to-a-dual-space` · corollary — C0 is not isomorphic to a dual space
- `thm-dunford-pettis-for-l-one-on-a-finite-measure-space` · theorem — Dunford pettis for l one on a finite measure space

### `banach-valued-integration-and-the-radon-nikodym-property-examples` — Banach Valued Integration and the Radon Nikodym Property — Examples (8 item(s))

- `ex-bochner-integral-of-a-countably-valued-function` · example — Bochner integral of a countably valued function
- `cex-weakly-measurable-need-not-be-strongly-measurable` · counterexample — Weakly measurable need not be strongly measurable
- `ex-vector-measure-induced-by-an-l-one-function` · example — Vector measure induced by an l one function
- `ex-hilbert-spaces-have-rnp` · example — Hilbert spaces have rnp
- `cex-c0-unit-ball-is-not-dentable` · counterexample — C0 unit ball is not dentable
- `rem-l-one-sequence-versus-l-one-nonatomic-rnp` · remark — L one sequence versus l one nonatomic rnp
- `rem-rnp-is-not-the-scalar-radon-nikodym-theorem` · remark — Rnp is not the scalar radon nikodym theorem
- `ex-dunford-pettis-uniformly-integrable-and-concentrating-families` · example — Dunford pettis uniformly integrable and concentrating families

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-6 reader warnings

14 warning(s) a Step-6 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-bf3dedb0fcec9995a7fdd6e9 · `ex-the-summing-basis-of-c0-is-conditional`** (from group e, gap-a-reader-closes) — Indexing mismatch with the cited c0 convention. Published def-c-zero-and-ell-infinity indexes sequences by N including 0, so the item's data x_n = (-1)^n/n is undefined at n = 0 and its coefficient formula a_n = x_n - x_{n+1} (and the coordinate identity 'k-th coordinate is x_k - x_{N+1} for k <= N') only holds in a 1-based labelling. In the published convention one needs x_0 = 0 and a_n = x_{n-1} - x_n. The conditional-basis conclusion is unaffected, but the displayed verification is off by one as written.
- **s8a-c7f0f7e8b1d6c6bcaed67d0a · `lem-nondentability-produces-a-vector-measure-without-density`** (from group e, gap-a-reader-closes) — Citation too weak: [L2] asserts 'Under AC, a point outside a nonempty closed convex set can be strictly separated from it by a bounded functional' and cites thm-strict-separation-of-a-point-from-a-closed-convex-set, but that published theorem is stated only for nonempty closed convex C in R^n with n>=1. The step is used for an arbitrary bounded closed convex C in a Banach space. The needed result is available in-library as thm-relative-hahn-banach-geometric-separation part (ii) under HB (and AC supplies HB via thm-hahn-banach-dominated-extension), so the repair is a re-citation plus the HB hypothesis, not new mathematics.
- **s8a-2fc1556379f4b50289d7ff59 · `lem-nondentability-produces-a-vector-measure-without-density`** (from group e, gap-a-reader-closes) — Step 1.1 algebra slip: with z = x+y and sum_i alpha_i x_i = x + e, the printed definition z_i = x_i + e + y gives sum_i alpha_i z_i = z + 2e, so the asserted convex-combination identity z = sum_i alpha_i z_i is false as written; the distance bound ||z_i - z|| >= r - ||e|| > r/2 is correct for both readings. The identity is restored by z_i = x_i + y - e.
- **s8a-a0ff085012ecee3340f3035e · `thm-reflexive-approximation-property-implies-metric-approximation-property`** (from group e, gap-a-reader-closes) — Step 1.2's vector-density fact asserts, without proof or citation, that the restriction of a weakly compact T:L^1(mu)->Y to the separable L^1 space of a countably generated sigma-algebra 'has separable range'; the surrounding argument then uses complete continuity of representable maps, which paragraph A had established only for weakly compact operators with separable range. The assertion is true (standard routes: DFJP factorization through a reflexive space, or the Dunford-Pettis property of L^1), but no in-library supplier is cited and the Dunford-Pettis property is only developed later on the same page (thm-dunford-pettis-for-l-one-on-a-finite-measure-space). Step 7 should check whether the needed fact is available in the library or must be added.
- **s8a-9754e21489dc841ab1c656ee · `lem-enflo-symmetry-averaging-and-block-assembly`** (from group e, gap-a-reader-closes) — The identification in step 6.1 between the localized traces Tr~(N_{m,j},T), Tr~(M_{m+1,j},T) and the two-layer Walsh model of lem-enflo-walsh-block-estimates is not spelled out: it needs the lift of the model vector f into E with coefficients 1/t_{m+1}, injectivity of the restriction to the block K_{m+1,j}, and the incidence conditions 4-5 to bound the spillover of the K_m and K_{m+2} components. Steps 7.1-8.2 construct the incidences only in outline (the 'first k_{m+1} successive blocks' enumeration, the multiplicity estimate sigma(e) = q_m + O(1), and the congruence count for condition 4). The statement and constants are consistent, but a reader must reconstruct these steps.
- **s8a-a1e6b9065d286acdb2461388 · `lem-enflo-walsh-block-estimates`** (from group e, gap-a-reader-closes) — Item 3 is proved by a coefficient-integral argument whose intermediate cases are compressed: the intermediate range 2<r<2n-2 is bounded by the geometric mean of the endpoint integrals, and the item claims |F_{n-1}(a)| = |F_{n+1}(a)| 'by item 4', whereas item 4 (complement symmetry) relates F_m(a) to F_m(complement a) at the same m; the actual reason is that the two coefficient integrals are complex conjugates (I verified the equality numerically for n = 2..7). Step 4.1's trace identity needs the extra fact that translation averaging makes the operator diagonal in the Walsh basis; diagonal-constancy on each layer alone does not give |Tr~(W^{n-1},T) - Tr~(W^{n+1},T)| <= ||Ttilde f||_infinity (the identity is correct once the diagonalization is used, and I verified ||f||_infinity = 2/n as claimed).
- **s8a-d8e960d3c68ed973f909f7c9 · `def-james-space`** (from group e, gap-a-reader-closes) — Indexing clash with the declared dependency: def-james-space takes c_0 = c_0(N;R) from def-c-zero-and-ell-infinity (coordinates indexed from 0), but the derived items list the standard unit vectors as (e_n)_{n>=1} and the truncations as Pi_N x = (x_1,...,x_N,0,...), which omits the coordinate of index 0. All arguments are invariant under relabelling, but the statements as written are off by one relative to the cited convention.
- **s8a-0d4aa59770f07b68456cea81 · `thm-james-space-is-complete-and-separable`** (from group e, gap-a-reader-closes) — Two compressed estimates are load-bearing: step 2.1's comparison ||x||_J <= sqrt(2) R(x) is stated as 'direct expansion' (it follows from q_p(x)^2 = r_p(x)^2 - x_{p_1}x_{p_k} and |x_{p_1}x_{p_k}| <= r_p(x)^2, which the item does not display), and step 3.1's finite-support density estimate (the concatenation inequalities R(x)^2 > (R(x)-delta)^2 - delta^2 + r_{q'}(x)^2 and r_{q'}(x)^2 < 2 delta R(x)) is asserted without the tuple-deletion details.
- **s8a-3f92da06440002777e596948 · `lem-james-space-dual-and-bidual-identification`** (from group e, gap-a-reader-closes) — Presentation defects in a load-bearing item: the label sequence of Facts & Assumptions jumps from [L1] to [L3] (no [L2]); the Statement defines the bidual model using r_p 'from the proof below', i.e. a forward reference inside the item; step 5.1's finite-Euclidean-duality step ('the gradients of q_p and r_p are explicit finite-support functionals of J^* of norm at most one') and step 7.1's truncation-case analysis of ||Pi_N z||_J <= B are only sketched, and step 5.1 as printed needs the observation that evaluating such a gradient g at z equals Lambda(g), not just ||g||_{J^*} <= 1.
- **s8a-0e016ac8f336435cd6cbda28 · `thm-bochner-dominated-convergence`** (from group e, presentation) — Step 5.1 uses linearity of the Bochner integral, int(f_n - f) = int f_n - int f, which is not stated by any item in the group; the proof gives the derivation (combine simple approximations and use approximation independence), so it is closable, but the page has no linearity item to cite.
- **s8a-7c5c4995e799eb3299bc46a2 · `lem-ac-supplies-countable-and-dependent-choice-for-banach-integration`** (from group e, presentation) — Frontmatter is missing fields the schema expects for in-flight items: no status, no verification.precheck, no aliases/landmark (only id, kind, title, origin, deps, proof_strategy, provenance, sources). Content and proof are fine; the record is inconsistent with sibling items.
- **s8a-5828d82e56da2bc9dbc33e52 · `thm-separable-dual-spaces-have-rnp`** (from group e, presentation) — Step 5.1 proves strong measurability of the pointwise functional f via nearest-point Voronoi cells in the separable dual X; this is correct but the preceding step 4.1 constructs f only as the unique continuous extension of a K_0-linear bounded map on the countable set D, so the measurability of the distances ||f(omega) - x^*|| depends on step 3.1's almost-everywhere linearity/boundedness being available at every retained omega; the item does state and use exactly that common null set, so this is only a density-of-exposition point, not a gap.
- **s8a-8242e229f6131b2a8325bff6 · `thm-unconditional-convergence-equivalences`** (from group e, presentation) — Step 6.1 says a finite layer-cake decomposition shows sum_{n in F} t_n x_n 'is a convex combination of subset sums of F' for 0<=t_n<=1; strictly it is a limit of convex combinations (or an exact convex combination when the t_n take finitely many values), which is what the displayed bound uses. The bound ||sum lambda_n x_n|| <= 4M sup_{A subset F}||sum_{n in A} x_n|| is correct (2M over R), including the complex factor.
- **s8a-e0eecfbd30fb50427097f611 · `thm-hilbert-spaces-are-reflexive-by-riesz-representation`** (from group e, presentation) — Step 5.1 defines <phi,psi>_* = <R psi, R phi>_H and asserts this is an inner product whose norm is the existing dual norm; the assertion is correct for the bilinear (non-conjugating) dual pairing used in this library, but the item should be read together with rem-real-and-complex-normed-space-convention because the 'conjugate-linear' bookkeeping depends on that convention.

Append one owning-group disposition per warning to `research/phase-2-next-18-step7-alert-decisions.jsonl`.
A Step-6 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-7 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-ell-one-and-ell-infinity-are-not-reflexive` | `schauder-bases-approximation-and-banach-space-pathologies-examples` | gpt-5.6-terra | `fc4432c462f014be14b30046062567a8ac9760fb00f58d60a1cdced5de018a44` |
| `cex-reordering-a-conditional-basis-can-destroy-convergence` | `schauder-bases-approximation-and-banach-space-pathologies-examples` | gpt-5.6-terra | `382c7890bb3f981a08a236d3867ce2dbf3204cbb48bbdf5db34d6d53e6ab0036` |
| `cor-c0-is-not-isomorphic-to-a-dual-space` | `banach-valued-integration-and-the-radon-nikodym-property` | gpt-5.6-terra | `81a32a21791ef656b971dd2784b018146719ac3e584af477ae5452617fef9d97` |
| `cor-countably-additive-part-of-ba-is-ell-one` | `schauder-bases-approximation-and-banach-space-pathologies` | gpt-5.6-terra | `e6047574fbd24c8eed2c88fe240adf67ccb22f3e20930ab58959a8f8f07ef4a3` |
| `def-approximation-property-and-bounded-approximation-property` | `schauder-bases-approximation-and-banach-space-pathologies` | gpt-5.6-terra | `24acb3ecbbed8eec5c34bae22949e0e050a7762837fcdbc30f411a4fbb5e0eaa` |
| `def-finitely-additive-integral-on-ell-infinity` | `schauder-bases-approximation-and-banach-space-pathologies` | gpt-5.6-terra | `5e2b9cae8e38fc019d79989994075eeabf75b9ea26945406ed83f36a1f211048` |
| `def-james-space` | `schauder-bases-approximation-and-banach-space-pathologies` | gpt-5.6-terra | `f4ff2e4f3dc70a59fbee5f3af6fb9fbb4dc108a9ece2a37081f040f6e1604ddb` |
| `def-partial-sum-projections-and-basis-constant` | `schauder-bases-approximation-and-banach-space-pathologies` | gpt-5.6-terra | `b5f2e5b99e13ce431aaa0d609a0c2d352aa4c64044cffed8e2a9164f06dfd391` |
| `def-schauder-basis-and-coordinate-functionals` | `schauder-bases-approximation-and-banach-space-pathologies` | gpt-5.6-terra | `25c5f4529e6d243ddc6c3115ad427007896198904379666adad5220cc4e33ad6` |
| `def-unconditional-convergence-of-a-banach-space-series` | `schauder-bases-approximation-and-banach-space-pathologies` | gpt-5.6-terra | `5b8575a413a05680b958765e84305b74601621ac02c26952a00a8fc50c7f08d5` |
| `ex-standard-schauder-bases-of-c0-and-ell-p` | `schauder-bases-approximation-and-banach-space-pathologies-examples` | gpt-5.6-terra | `6f86870e1c13fd398e1c04de50f9757a86a27da48d8404b9c9ec9450c179698b` |
| `ex-the-summing-basis-of-c0-is-conditional` | `schauder-bases-approximation-and-banach-space-pathologies-examples` | gpt-5.6-terra | `78dbb6306231785837fff799aebc4bd9be39ebd665d98e42178b102befb11063` |
| `lem-banach-valued-simple-integral-is-well-defined` | `banach-valued-integration-and-the-radon-nikodym-property` | gpt-5.6-terra | `baaade8bf9f4b21ff38669c3cf0de016830cf43579ae9624f7194934744d408b` |
| `lem-bochner-density-defines-an-absolutely-continuous-vector-measure` | `banach-valued-integration-and-the-radon-nikodym-property` | gpt-5.6-terra | `ab03abf29f084bf4e4e8472436289a737ee1433b3ca2d29ed7348e5d188c8b07` |
| `lem-bochner-integral-norm-inequality` | `banach-valued-integration-and-the-radon-nikodym-property` | gpt-5.6-terra | `3c17634d9f84d24377db754ff909d2c3f41344ad37cafd97c221c4c674750da2` |
| `lem-dvoretzky-rogers-finite-block-estimate` | `schauder-bases-approximation-and-banach-space-pathologies` | gpt-5.6-terra | `3f01e767e2f2b0c23123e1f5decf290c389202adf70a51062720df17cfdbbca6` |
| `lem-enflo-symmetry-averaging-and-block-assembly` | `schauder-bases-approximation-and-banach-space-pathologies` | gpt-5.6-terra | `039da7caf85ac1c8c5cd43d0011b326b1434a84145ca4b664502829283d3c5ae` |
| `lem-enflo-walsh-block-estimates` | `schauder-bases-approximation-and-banach-space-pathologies` | gpt-5.6-terra | `b55a2f2bf598dba243b6340fade369d87cc6c958ac42880c01965ba91fa4071f` |
| `lem-james-space-dual-and-bidual-identification` | `schauder-bases-approximation-and-banach-space-pathologies` | gpt-5.6-terra | `6c66b6ede2d439cf20ea1bd1148c056b7bd7eee0cd8bb1acfffd1920caac5368` |
| `lem-lipschitz-curves-and-dominated-interval-vector-measures` | `banach-valued-integration-and-the-radon-nikodym-property` | gpt-5.6-terra | `8ddf076cfc2242ea2ba8b648c2f2d6dd4b1fc3b5776599164be972693452e51f` |
| `lem-nondentability-produces-a-vector-measure-without-density` | `banach-valued-integration-and-the-radon-nikodym-property` | gpt-5.6-terra | `89b3214981f16dd0b5950e762b3acefb18de1feb0362307c2c8a6b21a022b431` |
| `lem-rnp-is-invariant-under-banach-space-isomorphism` | `banach-valued-integration-and-the-radon-nikodym-property` | gpt-5.6-terra | `5e81d00d39a122631894034b31e3eb49d586d0de60082f3158d626e82dc9dd95` |
| `lem-schauder-coefficient-space-is-banach` | `schauder-bases-approximation-and-banach-space-pathologies` | gpt-5.6-terra | `c389e6804d168e4f967c066a10a7d469a96490dd82bfd88ec27fb30c1d18817f` |
| `rem-l-one-sequence-versus-l-one-nonatomic-rnp` | `banach-valued-integration-and-the-radon-nikodym-property-examples` | gpt-5.6-terra | `dcfc14ace8b6dd7619cedf7be2cd750e1e8815c70d75b0391de6176227616d48` |
| `rem-rnp-is-not-the-scalar-radon-nikodym-theorem` | `banach-valued-integration-and-the-radon-nikodym-property-examples` | gpt-5.6-terra | `6d5e5532b64ed5168e602a79afa18fd3a3355895f591338c5cd9c7a948681d2a` |
| `thm-dvoretzky-rogers` | `schauder-bases-approximation-and-banach-space-pathologies` | gpt-5.6-terra | `c6a139301aebc0f90a4d910f72e7086d8b9c3f383a2ab505ce44654a34ab02fa` |
| `thm-enflo-separable-reflexive-banach-space-without-the-approximation-property` | `schauder-bases-approximation-and-banach-space-pathologies` | gpt-5.6-terra | `3c88c65fb510c75e582c34dd6719864bb642ad58e9fe5be54dbba3d81942b364` |
| `thm-james-space-is-complete-and-separable` | `schauder-bases-approximation-and-banach-space-pathologies` | gpt-5.6-terra | `be4c0ee5418cb2b92c7cee551d76d1d57b726d4a65ccb71cb9b9109c9c35f9b6` |
| `thm-james-space-is-isometrically-isomorphic-to-its-bidual` | `schauder-bases-approximation-and-banach-space-pathologies` | gpt-5.6-terra | `4648e1bb8e66a56506cf3463e906cad7665bcfad2d24e2d2072ddde168e7a52f` |
| `thm-reflexive-approximation-property-implies-metric-approximation-property` | `schauder-bases-approximation-and-banach-space-pathologies` | gpt-5.6-terra | `d6257c2afb395c79448552ba7e28ae9c364b28f6c0eed27ef75cc01d674d9617` |
| `thm-reflexive-spaces-have-rnp` | `banach-valued-integration-and-the-radon-nikodym-property` | gpt-5.6-terra | `ba6b559265dc1f13aa419d53cb0d8e913a766d406da9304496098dd6aa77d1fa` |
| `thm-separable-dual-spaces-have-rnp` | `banach-valued-integration-and-the-radon-nikodym-property` | gpt-5.6-terra | `ccfccd6040f7017305fbd21ac2e30643ea72db264c0e8d8e28df6a8363c0e797` |
| `thm-unconditional-convergence-equivalences` | `schauder-bases-approximation-and-banach-space-pathologies` | gpt-5.6-terra | `7233cb2424f2b53c0322859ae086319723d7a2ce5eedff51a2105522c3acc255` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 7 — fatal-only judge and reader-warning adjudication, `phase-2-next-18`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Audit one item, record its decision, complete its authorized repair and focused
checks, then continue to the next item. Do not run judges or final adjudicators.
The engine runs repair checks, one rejudge, then one terminal adjudication pass
after every group finishes. On resume, retain completed decisions and repairs.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/phase-2-next-18-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set after preflight.

You may add and author new lemma items when a licensed fatal repair needs a
genuinely missing dependency. Prove each lemma fully, verify unfamiliar or
uncertain mathematics against authoritative sources, and cite it in the
consumer's `deps` and proof. Supporting chains of new lemmas are permitted.
Place the lemmas on an owned page before their consumers and update that page,
the owning batch manifest and proof contract, and the Step-7 scope's group item
list and `by_item` entries. Record the missing dependency and its consuming
fatal repair in your report. This is an authorized scope addition; do not
invent a rejection or adjudication for a new lemma. New lemmas enter the
engine's normal coverage and targeted judgment checks.

Every entry under **Step-6 reader warnings** also requires an owning-group
decision in `research/phase-2-next-18-step7-alert-decisions.jsonl`. Use `not_defect` or
`nonfatal` when no content change is warranted, and `covered_by_rejection` when
an exact judge rejection already licenses the same repair. If a Step-6 reader
warning is independently `confirmed_fatal`, record `defect_type`, the full
pre-edit `itemHashGuard` digest as `item_sha256`, the full repaired digest as
`post_sha256`, repair the item before returning, and add exactly one matching
defect-ledger row whose structured `adjudication_ref` contains this `alert_id`,
`item`, and `item_sha256`. Only Step-6 reader warnings have this direct fatal
licence; later cross-group alerts raised while
adjudicating a judge rejection still require a targeted judge rejection.

A warning may name an owned page, for example a missing prerequisite page.
Read the page and its declared prerequisites and retain an explicit disposition.
The frontier policy permits unbuilt cross-category prerequisites. Check actual
item dependencies and citations before classifying such an absence as fatal;
the scheduling allowance does not excuse a missing fact used in a proof.
A page warning grants no item-edit authority: identify the affected item and its
fatal evidence, or report an unresolved page defect with
`confirmed_fatal_unlicensed`. Never dismiss it merely because it names a page.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For every reader warning, append the owning-group disposition to
`research/phase-2-next-18-step7-alert-decisions.jsonl`. A defect in another group is a
`research/phase-2-next-18-step7-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-7 baseline or rewrite shared ledgers. Run the Step-7 guard
and scope check, then write `research/phase-2-next-18-alpha-step7-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.


## Mathematical honesty

Be honest about your understanding of the mathematics. If unsure, search the web
and consult authoritative sources, reading the complete relevant argument.
Report unresolved uncertainty and potentially defective published items to the
owner with exact evidence. Never invent confidence, source reading or proof
completion. This rule applies to every workflow role, including reviewers.


## Mathematical context continuity

Read exact task paths first. Search current owned artifacts before historical runs;
exclude dispatch logs from routine content searches. Fetch complete relevant source
sections and dependency statements, using bounded output chunks. A truncated result
is not evidence of absence; continue reading until the required argument is complete.
Do not dump entire ledgers, source books, or repository-wide search results into context.

For writing roles, after each completed item update the task-authorized notes or report with the
current item IDs, exact claim and conventions, source paths/URLs and locators,
dependency IDs, decisions, validation results, unresolved obligations, and next action.
Automatic compaction can occur mid-proof. After compaction or handoff, reread the
current item, relevant dependency statements, source passages, and these obligations
before continuing a proof or repair. A summary is a navigation aid, never a substitute
for mathematical evidence. If a hypothesis or source qualification cannot be
recovered, record the blocker rather than infer it. Preserve all independent reviews
and exact-hash gates. Never mark an unfinished obligation complete to save context.
Checkpoint only in the task-authorized notes/report; do not create transcripts or alter other owners’ artifacts.
