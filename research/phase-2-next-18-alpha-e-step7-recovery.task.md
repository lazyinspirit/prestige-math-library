# Step 7 adjudication — group **e**, run `phase-2-next-18`

You are the group Alpha for batches **1**: 2 A/B pair(s), 4 page(s), 80 item(s), 0 open rejection(s) over 0 item(s).

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

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/phase-2-next-18-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — exact closure recovery, `phase-2-next-18`

Read `research/phase-2-next-18-judge-closure.json`,
`research/phase-2-next-18-judge.jsonl`,
`research/phase-2-next-18-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/phase-2-next-18-step7-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/phase-2-next-18-step7-cross-group.jsonl`, never repair that item.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Do not use a descriptive
defect-ledger subclass in that field.

Write `research/phase-2-next-18-alpha-step7-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.
