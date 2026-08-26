# Step 8 — group **c**, run `frontier-19`

You are the group Alpha for batches **7**, **8**: 3 A/B pair(s), 6 page(s), 97 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-19-alpha-c-step8-context.json` is what a group Alpha for this group wrote during step 7,
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

**You may read the entire library.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-19-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 7 | `non-measurable-sets-and-the-cost-of-choice` | A | measure-theory | 288.009 | `lebesgue-measure-on-euclidean-space-examples` |
| 7 | `non-measurable-sets-and-the-cost-of-choice-examples` | B | measure-theory | 288.01 | `non-measurable-sets-and-the-cost-of-choice` |
| 8 | `isolated-singularities-and-laurent-series` | A | complex-analysis | 317 | `the-winding-number-and-the-global-cauchy-theorem` |
| 8 | `isolated-singularities-and-laurent-series-examples` | B | complex-analysis | 318 | `isolated-singularities-and-laurent-series`, `the-complex-exponential-and-eulers-formula`, `sine-cosine-and-the-definition-of-pi`, `complex-differentiability-and-cauchy-riemann` |
| 8 | `harmonic-functions-and-the-poisson-integral` | A | complex-analysis | 327 | `complex-differentiability-and-cauchy-riemann`, `analyticity-liouville-and-morera`, `the-identity-theorem-and-the-open-mapping-theorem`, `the-winding-number-and-the-global-cauchy-theorem`, `mixed-partials-taylor-and-extrema`, `isolated-singularities-and-laurent-series` |
| 8 | `harmonic-functions-and-the-poisson-integral-examples` | B | complex-analysis | 328 | `harmonic-functions-and-the-poisson-integral`, `the-complex-exponential-and-eulers-formula`, `complex-differentiability-and-cauchy-riemann` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `non-measurable-sets-and-the-cost-of-choice` — Non Measurable Sets and the Cost of Choice (21 item(s))

- `def-lebesgue-inner-measure-on-r` · definition — Lebesgue inner measure on the real line
- `thm-bounded-subsets-of-r-are-lebesgue-measurable-exactly-when-inner-and-outer-measures-agree` · theorem — For bounded subsets of $\mathbb{R}$, Lebesgue measurability is equivalent to equality of inner and outer measure
- `def-vitali-set-on-the-unit-interval` · definition — Vitali set on $[0,1]$
- `thm-vitali-sets-exist-under-choice-on-r-over-q` · theorem — Assuming choice on the cosets of $\mathbb{Q}$ in $\mathbb{R}$, a Vitali set in $[0,1]$ exists
- `thm-a-vitali-set-is-not-lebesgue-measurable` · theorem — Assuming the Axiom of Choice, a Vitali set is not Lebesgue measurable
- `thm-no-translation-invariant-measure-on-all-subsets-of-r-is-finite-and-nonzero-on-unit-interval` · theorem — Assuming the Axiom of Choice, no translation-invariant measure on $\mathcal{P}(\mathbb{R})$ is both finite and nonzero on $[0,1]$
- `cor-every-subset-of-r-of-positive-outer-measure-contains-a-nonmeasurable-subset` · corollary — Every subset of $\mathbb{R}$ of positive Lebesgue outer measure contains a nonmeasurable subset
- `lem-x-plus-the-cantor-function-is-a-homeomorphism-from-zero-one-onto-zero-two` · lemma — The map $x \mapsto x + c(x)$ is a homeomorphism from $[0,1]$ onto $[0,2]$
- `lem-this-homeomorphism-sends-the-cantor-set-onto-a-set-of-lebesgue-measure-one` · lemma — The homeomorphism $x \mapsto x + c(x)$ sends the Cantor set onto a compact set of Lebesgue measure $1$
- `cor-a-continuous-image-of-a-lebesgue-measurable-set-can-be-nonmeasurable` · corollary — A continuous image of a Lebesgue measurable subset of $\mathbb{R}$ can be nonmeasurable
- `cor-a-continuous-preimage-of-a-lebesgue-measurable-set-can-be-nonmeasurable` · corollary — A continuous preimage of a Lebesgue measurable subset of $\mathbb{R}$ can be nonmeasurable
- `cor-there-is-a-lebesgue-measurable-subset-of-r-that-is-not-borel` · corollary — There is a Lebesgue measurable subset of $\mathbb{R}$ that is not Borel
- `def-bernstein-set-on-r` · definition — Bernstein subset of $\mathbb{R}$
- `thm-every-nonempty-perfect-subset-of-r-has-cardinality-continuum` · theorem — Every nonempty perfect subset of $\mathbb{R}$ has the cardinality of the continuum
- `thm-bernstein-sets-exist-under-a-well-ordering-of-r` · theorem — Assuming the real line can be well ordered, a Bernstein set exists
- `lem-compact-subsets-of-a-bernstein-set-are-countable` · lemma — Every compact subset of a Bernstein set is countable
- `thm-a-bernstein-set-has-inner-measure-zero-and-full-outer-measure-in-every-interval` · theorem — A Bernstein set has inner measure $0$, and in every nondegenerate interval its intersection has full outer measure
- `cor-a-bernstein-set-is-not-lebesgue-measurable` · corollary — A Bernstein set is not Lebesgue measurable
- `lem-finite-binary-digit-changes-do-not-alter-zero-one-measure` · lemma — A Lebesgue measurable subset of $[0,1]$ that is invariant under changing finitely many binary digits has measure $0$ or $1$
- `thm-a-free-ultrafilter-on-n-is-not-lebesgue-measurable` · theorem — A free ultrafilter on $\mathbb{N}$, viewed as a subset of $\{0,1\}^{\mathbb{N}}$ and hence of $[0,1]$, is not Lebesgue measurable
- `rem-choice-costs-of-vitali-bernstein-and-free-ultrafilters` · remark — What the Vitali set, Bernstein sets and free ultrafilters cost in choice

### `non-measurable-sets-and-the-cost-of-choice-examples` — Non Measurable Sets and the Cost of Choice — Examples (11 item(s))

- `ex-cosets-of-q-in-r-and-the-vitali-translates-on-unit-interval` · example — The cosets of $\mathbb{Q}$ in $\mathbb{R}$ meet $[0,1]$ in pairwise disjoint classes, and rational translates of a Vitali set count them
- `ex-the-homeomorphism-x-plus-cx-carries-the-cantor-set-to-a-measure-one-compact-set` · example — The map $x \mapsto x+c(x)$ carries the Cantor set onto a compact set of Lebesgue measure $1$ inside $[0,2]$
- `cex-a-vitali-set` · counterexample — A Vitali set shows that not every subset of $\mathbb{R}$ is Lebesgue measurable
- `cex-a-bernstein-set` · counterexample — A Bernstein set is dense in every interval, has inner measure $0$, and is not Lebesgue measurable
- `cex-two-disjoint-nonmeasurable-sets-can-have-a-measurable-union` · counterexample — Two disjoint nonmeasurable subsets of $[0,1]$ can have the measurable union $[0,1]$
- `cex-a-proper-subgroup-of-r-can-be-nonmeasurable` · counterexample — Assuming Choice, a proper subgroup of $(\mathbb{R},+)$ can be nonmeasurable
- `fs-every-subset-of-r-is-lebesgue-measurable` · false-statement — FALSE: assuming the Axiom of Choice, every subset of $\mathbb{R}$ is Lebesgue measurable
- `fs-continuous-images-of-lebesgue-measurable-subsets-of-r-are-lebesgue-measurable` · false-statement — FALSE: every continuous image of a Lebesgue measurable subset of $\mathbb{R}$ is Lebesgue measurable
- `fs-continuous-preimages-of-lebesgue-measurable-subsets-of-r-are-lebesgue-measurable` · false-statement — FALSE: every continuous preimage of a Lebesgue measurable subset of $\mathbb{R}$ is Lebesgue measurable
- `fs-a-dense-set-of-outer-measure-zero-and-a-dense-set-of-full-inner-measure-cannot-coexist` · false-statement — FALSE: a dense subset of $\mathbb{R}$ of outer measure zero and a dense subset of full inner measure cannot both meet every open interval
- `fs-a-nonmeasurable-set-can-be-constructed-without-the-axiom-of-choice` · false-statement — FALSE, relative to an inaccessible cardinal: ZF + DC proves that a nonmeasurable subset of $\mathbb{R}$ exists

### `isolated-singularities-and-laurent-series` — Isolated Singularities and Laurent Series (21 item(s))

- `def-complex-annulus` · definition — Annuli in the complex plane
- `def-convergent-complex-laurent-series` · definition — Convergent Laurent series on an annulus
- `def-principal-part-laurent-series` · definition — The principal part of a Laurent series
- `def-isolated-singularity-types` · definition — Isolated singularities: removable, poles, and essential singularities
- `def-simple-pole` · definition — Simple poles
- `def-meromorphic-function-complex-domain` · definition — Meromorphic functions on a plane domain
- `thm-laurent-expansion-annulus` · theorem — Laurent expansion on an annulus
- `thm-laurent-coefficient-formula-and-uniqueness` · theorem — Laurent coefficients are given by contour integrals and are unique
- `cor-laurent-coefficients-independent-of-radius` · corollary — Laurent coefficients are independent of the intermediate radius
- `def-residue-isolated-singularity` · definition — The residue of an isolated singularity
- `thm-laurent-regular-principal-decomposition` · theorem — Laurent series split into regular and principal parts
- `thm-removable-singularity-characterizations` · theorem — Characterizations of removable singularities
- `thm-pole-characterizations` · theorem — Characterizations of poles
- `thm-isolated-singularity-trichotomy` · theorem — Every isolated singularity is removable, a pole, or essential
- `thm-casorati-weierstrass` · theorem — Casorati-Weierstrass theorem
- `cor-residue-contour-integral-formula` · corollary — The residue is the normalized small-circle integral
- `lem-residue-simple-pole` · lemma — At a simple pole the residue is the limit of (z-a)f(z)
- `thm-residue-pole-derivative-formula` · theorem — Residue formula for a pole of order m
- `cor-residue-quotient-simple-zero` · corollary — Residues of p over q at a simple zero of q
- `def-singularity-at-infinity` · definition — Isolated singularities at infinity
- `thm-poles-meromorphic-function-are-discrete-and-countable` · theorem — Poles of a meromorphic function form a closed discrete set and are at most countable

### `isolated-singularities-and-laurent-series-examples` — Isolated Singularities and Laurent Series — Examples (9 item(s))

- `ex-one-rational-function-has-three-laurent-series` · example — The same rational function has different Laurent series on different annuli
- `ex-singularities-at-infinity-for-polynomials-and-reciprocals` · example — Polynomials have poles at infinity and reciprocal polynomials have removable singularities there
- `ex-residue-of-exp-over-z-cubed-by-derivative-formula` · example — The residue of e^z/z^3 from the pole-derivative formula
- `ex-residue-of-p-over-q-at-a-simple-zero` · example — A residue of p over q at a simple zero is p(a)/q'(a)
- `cex-zero-residue-does-not-force-a-removable-singularity` · counterexample — Zero residue does not imply a removable singularity
- `cex-exp-one-over-z-is-essential-and-omits-zero` · counterexample — e^{1/z} has an essential singularity at 0 and omits the value 0
- `cex-sine-one-over-z-is-essential` · counterexample — sin(1/z) has an essential singularity at 0
- `cex-one-over-sine-one-over-z-has-a-nonisolate-singularity-at-zero` · counterexample — 1/sin(1/z) has a nonisolated singularity at 0
- `cex-a-laurent-series-on-a-punctured-disc-can-have-infinitely-many-negative-terms` · counterexample — A Laurent series on a punctured disc can have infinitely many negative powers

### `harmonic-functions-and-the-poisson-integral` — Harmonic Functions and the Poisson Integral (26 item(s))

- `def-plane-harmonic-function` · definition — Plane harmonic functions
- `rem-agreement-with-c2-holomorphic-components-are-harmonic` · remark — Agreement with the earlier C^2 holomorphic-components theorem
- `thm-local-holomorphic-potential-for-harmonic-functions` · theorem — Every plane harmonic function is locally the real part of a holomorphic function
- `def-harmonic-conjugate` · definition — Harmonic conjugates
- `thm-harmonic-conjugate-on-homologically-simply-connected-domains` · theorem — Harmonic conjugates exist on homologically simply connected plane domains
- `cor-harmonic-conjugates-differ-by-a-real-constant` · corollary — Two harmonic conjugates differ by a real constant
- `thm-plane-harmonic-functions-are-smooth-and-real-analytic` · theorem — Plane harmonic functions are smooth and real analytic
- `def-mean-value-property-for-plane-functions` · definition — The circle and disc mean-value properties
- `thm-mean-value-property-for-plane-harmonic-functions` · theorem — Plane harmonic functions satisfy the mean-value property
- `thm-maximum-and-minimum-principles-for-plane-harmonic-functions` · theorem — Maximum and minimum principles for plane harmonic functions
- `cor-uniqueness-for-the-bounded-plane-dirichlet-problem` · corollary — The bounded plane Dirichlet problem has at most one continuous harmonic solution
- `cor-liouville-theorem-for-plane-harmonic-functions` · corollary — A plane harmonic function bounded above or below is constant
- `thm-identity-principle-for-plane-harmonic-functions` · theorem — A plane harmonic function that vanishes on a nonempty open set vanishes everywhere on the domain
- `thm-conformal-invariance-of-plane-harmonicity` · theorem — Plane harmonicity is preserved by holomorphic and antiholomorphic changes of coordinate
- `def-poisson-kernel-on-the-disc` · definition — The Poisson kernel on the unit disc
- `lem-poisson-kernel-properties-on-the-disc` · lemma — The Poisson kernel is positive, has total mass one, and concentrates at a boundary point
- `def-poisson-integral-on-the-disc` · definition — The Poisson integral on the unit disc
- `lem-poisson-integrals-are-harmonic` · lemma — Poisson integrals are harmonic on the unit disc
- `lem-poisson-kernel-is-a-boundary-approximate-identity` · lemma — The Poisson kernel is a boundary approximate identity
- `thm-poisson-integral-solves-the-disc-dirichlet-problem` · theorem — The Poisson integral gives the unique continuous harmonic extension on the closed unit disc
- `thm-poisson-representation-for-disc-harmonic-functions` · theorem — A harmonic function is recovered from its values on any containing circle by the Poisson formula
- `thm-converse-mean-value-property-for-plane-functions` · theorem — A continuous plane function with the local mean-value property is harmonic
- `thm-removable-isolated-singularity-for-bounded-plane-harmonic-functions` · theorem — A bounded harmonic function near an isolated puncture extends harmonically
- `thm-harnack-inequality-on-a-disc` · theorem — Positive harmonic functions on a disc satisfy Harnack's inequality
- `thm-harnack-convergence-principle-for-plane-harmonic-functions` · theorem — An increasing harmonic sequence converges locally uniformly to a harmonic limit or diverges to +infinity
- `thm-harmonic-and-holomorphic-schwarz-reflection-principles` · theorem — Harmonic and holomorphic Schwarz reflection across the real axis

### `harmonic-functions-and-the-poisson-integral-examples` — Harmonic Functions and the Poisson Integral — Examples (9 item(s))

- `ex-log-modulus-is-harmonic-on-the-punctured-plane` · example — log|z| is harmonic on the punctured plane
- `ex-real-parts-of-z-powers-are-harmonic` · example — The real parts of z^n are harmonic polynomials
- `ex-a-harmonic-conjugate-of-x-squared-minus-y-squared` · example — 2xy is a harmonic conjugate of x^2-y^2
- `ex-poisson-integral-of-cos-theta` · example — The Poisson integral of cos(theta) is r cos(theta)
- `ex-harnack-inequality-for-a-poisson-kernel` · example — The Poisson kernel realizes the sharp Harnack bounds on concentric discs
- `cex-log-modulus-has-no-harmonic-conjugate-on-the-punctured-plane` · counterexample — log|z| has no global harmonic conjugate on C\{0}
- `cex-a-harmonic-function-can-vanish-on-a-line-without-vanishing-identically` · counterexample — A harmonic function can vanish on a line without being zero everywhere
- `cex-the-product-of-harmonic-functions-need-not-be-harmonic` · counterexample — The product of two harmonic functions need not be harmonic
- `cex-an-unbounded-harmonic-function-need-not-extend-across-a-puncture` · counterexample — Re(1/z) is harmonic on a punctured disc and does not extend harmonically across 0

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: both
lanes may have passed every item you own. Verify it against
`research/frontier-19-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — exact closure recovery, run `frontier-19`

You are a **group Alpha**. The step-8 judge-closure gate found current rejection
rows that the preceding adjudication did not cover. This is a narrow recovery
dispatch, not a second audit.

Your group is named in the context above. If you are reading this file
standalone, open `research/frontier-19-step8-scope.json` and find the group whose
batches you were dispatched against before anything else — every scope rule below
is relative to it.

## Exact scope

Read `research/frontier-19-judge-closure.json`. Its `unadjudicated_rows` array names
each `(id, model, context_sha256)` rejection with no exact Alpha outcome.
Recompute that join against `research/frontier-19-judge.jsonl` and
`research/frontier-19-judge-adjudications.jsonl`; exclude null, capacity, transport
and already-adjudicated rows.

**The receipt is level-wide and you are not.** Step 8 is partitioned: keep only
the rows whose `id` belongs to your group, using `by_item` in
`research/frontier-19-step8-scope.json`. A row belonging to another group is that
group's to answer and the engine dispatches it there — taking it yourself
produces two adjudications of one rejection, which is the state the partition
exists to prevent. A row belonging to **no** group is different and you must not
drop it silently: adjudicate it if you can decide it honestly, and say so
explicitly in your report either way.

For a legacy receipt without `unadjudicated_rows`, use its `unadjudicated` ids
only to reconstruct the missing exact keys from those two ledgers. Do not widen
the scope to other rejections. Preserve the existing step-8 reports and every
existing adjudication as durable prior work — including other groups' — and do
not redo, replace or reinterpret them.

## Fatal-only adjudication

For every exact missing row in your scope:

1. Read the frozen verdict, current item, and every cited target needed to
   decide it. You may read the entire library; you may write only inside your
   own batches.
2. **Append** exactly one row to
   `research/frontier-19-judge-adjudications.jsonl` with
   `{id, model, context_sha256, item_sha256, outcome, defect_type?}`. The file is
   shared with the other groups and is append-only: never rewrite it, and never
   remove a row another group wrote.
3. Compute `item_sha256` from the pre-edit item using the step-8 guard/touchlog
   normalization, which excludes the entire `verification:` block. Do not copy
   the differently normalized hash from the judge ledger.
4. A `confirmed_nonfatal` or `false_positive` outcome licenses no mutation.
5. Only `confirmed_fatal` licenses a coherent repair. Apply that repair, append
   its defect-ledger row in the same act, and update only the established
   contract, manifest, plan, impact and rejudge artifacts the repair makes
   stale. Never broaden the rejudge set to an unchanged page-mate.
6. If the real defect lies in another group's item, record it in
   `research/frontier-19-step8-cross-group.jsonl` as
   `{from_group, item, owning_group, model, context_sha256, finding}` and
   adjudicate your own row on what is true. Do not repair it.

Run the step-8 guard from the `pre-step8` baseline and recompute judge closure
with pending rejudge allowed. **Both are level-wide and will report other
groups' open work as well as yours** — that is expected while the other
recoveries are still running, and it is not yours to close. Your part is complete
when no row in *your* scope is unadjudicated and no fatal of yours is open;
materially repaired ids may remain in `needs_rejudge` for the engine-owned
rejudge stage.

## Output

`research/frontier-19-alpha-step8-closure-recovery-<label>.md`, where `<label>` is
your group. **The label is not optional.** Four groups can be recovering at once,
and a shared filename means the last writer destroys the others' findings —
which is exactly how eleven fatal findings were lost once when reader-7 wrote
over reader-1's report.

List every exact row you took, its evidence and outcome, every licensed repair,
the resulting rejudge targets, any cross-group finding you raised, any row you
found belonging to no group, and the gate results. Do not append this recovery
onto a stale or earlier step-8 report.

No permission prompts of any kind.
