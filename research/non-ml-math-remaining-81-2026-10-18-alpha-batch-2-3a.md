# Step 3a adjudication — batch 2

Run: non-ml-math-remaining-81-2026-10-18; group: batch-2.

Published carriers remain read-only. Pre/post inventories, item/contract hashes and page hashes are identical; there are no touched or page obligations and no reader repairs to accept. Six reader and four refuter obligations are owed. No historical-preimage workaround is used.

## Dependency-ordered review

### def-baire-class-one

The asserted singleton indicator is sound but has no supplied approximation. On [0,1], phi_n(x)=max(0,1-n|x-a|) is continuous, equals 1 at a, and is eventually 0 at each x != a; arbitrarily close points different from a prove discontinuity, including a=0,1. This is nonfatal omitted elementary verification. Published source retained; owner editorial strategy: add this witness and limit/discontinuity check. Decisions: reader:2:3, refuter:2:1. Defect: non-ml-math-remaining-81-2026-10-18-3a-b2-baire-witness.

### def-dirichlet-and-thomae-functions

The parenthetical lem-of-naturals-positive proves positivity and natural arithmetic, not identification of an integer quotient with real division. The preceding declared embedding chain preserves multiplication: q=dk implies E(q)=E(d)E(k), hence E(k)=E(q)/E(d) since d>=1. Thus the mathematics is sound by an elementary derivation but the exact citation is inaccurate. Published source retained; owner strategy: cite the embedding chain already declared and show this identity. Decisions: reader:2:1. Defect: non-ml-math-remaining-81-2026-10-18-3a-b2-quotient-citation.

### def-dirichlet-and-thomae-functions

The sentence d divides q(x), so q(x)/d is a natural >=1 omits the sign/identification argument. Write q(x)=dk with k integer; q(x)>0 and d>0 imply k>0, and lem-nat-embeds-int identifies k with a unique nonzero natural. This is elementary nonfatal polish; p(x)=0 and negative numerators cause no exception. The least-denominator proof and coprime converse are otherwise sound, including q(0)=1. Published source retained; owner strategy: insert this short derivation. Decisions: reader:2:2, refuter:2:2. Defect: non-ml-math-remaining-81-2026-10-18-3a-b2-quotient-positive.

Level-0 disposition complete; subsequent review records follow the generated dependency order.

### lem-baire-category-in-a-closed-interval

Reviewed every proof step: intersect F_n with [a,b], use no-interval assumption to make complements dense open in R, then Baire meets (a,b), contradicting the cover. a<b is essential; no countable choices are made. Current exact topology and Baire supplier statements support all uses. Additional false explanatory sentence in Remarks (a nowhere dense closed set can fill an interval) is reported for published maintenance; it is not used by the valid proof.

### lem-hamel-basis-exists

Reviewed 1.1–11.1 against scalar restriction, basis existence under explicit AC, injective finite-list span, coordinate uniqueness on each finite span, and two-summand direct-sum criterion. Nonzero b_star follows from independence; its complement intersection is zero, coefficients are unique and Q-linear, range Q and kernel W follow directly. If W were zero, rational enumeration would surject onto R, contradicting uncountability. Empty finite list and zero-vector cases are valid. AC enters only basis existence, no later selection family. No mathematical proof defect found.

### cor-cantor-function-is-continuous

Checked 1.1–3.1: monotonicity and surjection onto [0,1] are precisely claims 2–3 of thm-cantor-function-properties. Domain and image are order-convex, so the earlier interval-image criterion proves relative continuity, including both endpoints, without circular IVT use.

### fs-intermediate-value-property-implies-continuity

Checked all 11 steps: nearest-integer distance is 1-Lipschitz; reciprocal composition is continuous away from zero. Positive and negative points +/-1/(k+y) realize each y in [0,1/2] arbitrarily near zero, including y=0 and y=1/2, within [-1,1]. This proves Darboux across zero and discontinuity at zero. Reader/refuter missing quantifier in 4.2 is confirmed nonfatal: explicitly quantify a<b in [-1,1] and y in [0,1/2]. Published repair remains owner maintenance; theorem is not blocked.

### lem-additive-is-q-linear

Checked 1.1–6.1: zero, negatives, induction including n=0, signed integer multiples, and n f(qx)=m f(x) for q=m/n, n>=1, prove exactly Q-homogeneity. Positive denominators are nonzero through the canonical embeddings. No real homogeneity is inferred.

### lem-oscillation-superlevel-sets-are-closed

Checked all seven steps: canonical ambient U uses set oscillation even when its neighborhood intersection with A is empty (-infinity); nesting by half-radius proves U open. Infimum order gives both directions E_epsilon=A intersect complement(U). Empty A and isolated points cause no exception; no ambient-closed claim is made for general A.

### thm-continuity-iff-oscillation-zero

Checked all six steps and both directions: continuity with epsilon/2 bounds each pair difference by epsilon (supremum <=epsilon, not strictly less); nonnegative infimum then vanishes. Infimum zero supplies a neighborhood with oscillation <epsilon and c belongs to it, yielding continuity. Infinite oscillations are excluded only after the finite bound; isolated c works. Introductory shorthand about closed superlevel sets must be read relatively, as in the cited supplier.

### thm-continuous-injection-on-an-interval-is-strictly-monotone

Checked 12 steps: IVT on the two segments gives distinct preimages if middle value is not between the others. One oriented pair and the three-point property cover all positions of an arbitrary pair; contradiction forces strict monotonicity. Empty and singleton domains are vacuously increasing/decreasing; no unjustified fixed pair is chosen outside the contradiction assumption.

### thm-monotone-one-sided-limits-exist

Checked 11 steps and exact one-sided definitions: nonempty side plus convexity makes c an accumulation point, sup(left values)<=f(c) and inf(right values)>=f(c) are finite. Epsilon approximants and monotonicity squeeze all nearby values. Absent endpoint sides are never assigned limits, singleton domain is vacuous, and negation transfers the reversed case.

### thm-semicontinuity-level-set-characterisation

Checked nine steps: half-radius argument makes canonical ambient U_alpha open, unpunctured neighborhoods prove its intersection with A equals {f<alpha}, and alpha=f(c)+epsilon gives converse. Negation gives lower semicontinuity and conjunction gives continuity. Empty A and isolated points work. First Remark contains a false explanatory necessity that a relatively open subset cannot be ambient-open unless A is open; this does not affect the proof and is separately reported for owner maintenance.

### ex-locally-unbounded-finite-everywhere

Checked six steps: for distinct rationals denominator separation is >=1/(q1 q2). A rational y just to the right of x1, closer than min(1/(q1 N),b-x1), must have denominator>N>M. Values are finite for all inputs, including integer denominator 1; local unboundedness holds on every nondegenerate interval with no choice family.

### lem-additive-bounded-above-on-an-interval-is-linear

Checked seven steps: subtract c x to get additive g vanishing on Q; bound it above on [p,r], translate any x into that interval using rational q, and use positive integer multiples of a nonzero g(x0) to contradict the global bound. Only upper boundedness is required; negative values handled by x0 -> -x0, zero included, p<r essential. All Q-linearity/density/Archimedean hypotheses are available.

### thm-continuous-inverse

Checked 10 steps: strict monotonicity from continuous injection, convexity of image from IVT, unique set inverse; inverse preserves strict orientation. Apply interval-image criterion to increasing case and compose G(-u) in decreasing case. Empty/singleton, endpoints, unbounded domains all satisfy the actual hypotheses; no compactness needed.

### thm-dirichlet-and-thomae-continuity-sets

Checked 12 steps: density refutes Dirichlet continuity with epsilon=1. Explicit positive d_q(c) separates c from distinct p/q; finite minimum excludes all denominators <=N near c. Irrational value 0 gives lower oscillation bound t(c); upper bound max(t(c),epsilon) gives equality separately for rational/irrational c. c itself is retained in neighborhoods; no punctured/unpunctured confusion. Reader:2:6 is false positive: this carrier has no step 4.2, psi or g; its 4.1 is the correctly quantified bound on t.

### thm-discontinuity-set-is-f-sigma

Checked eight steps: D={omega>0}, thresholds 1/(n+1) are positive/decreasing, both union inclusions hold, complements give the relative G_delta set. Infinite omega is handled by threshold 1; empty A and isolated points work. Reader/refuter correctly identify an omitted elementary natural predecessor citation in 2.1; lem-nat-nonzero-is-successor supplies exactly m=n+1. Nonfatal maintenance recorded, current published source unchanged. Canonical G_epsilon was explicitly constructed by the supplier, so selecting G_n need not spend countable choice.

### thm-monotone-discontinuities-are-jumps

Checked seven steps and endpoints: available one-sided limits are finite by monotone supplier; at a two-sided interior point their sandwich around f(c) proves continuity iff equality. Unequal limits are strictly ordered, hence jump. One-sided endpoints have only first-kind discontinuities, not jumps; singleton points continuous. Negation reverses orientation without changing continuity.

### thm-semicontinuous-evt

Checked nine steps: canonical nested open sublevels give a finite compact cover by integer thresholds, bounding f above. Sublevels at M-1/n have no finite cover (empty subfamily handled), so compactness yields x0 outside all; reciprocal Archimedean estimate proves f(x0)=M. Negation gives lower semicontinuous minimum. K nonempty is used both for finite cover nonemptiness and supremum; no sequence selection or countable choice.

### ex-cantor-function-maps-a-null-set-onto-the-unit-interval

Checked all five verification steps: null C and non-null [0,1] are exact supplier conclusions. Surjectivity gives an x for each y; an x outside C lies in a constant closed gap with endpoints in C, giving c(u)=y. Therefore c[C]=[0,1], with continuity already supplied. End values and gap endpoints included; no global selection made.

### cor-no-function-is-continuous-exactly-on-q

Checked three steps: hypothesized continuity set exactly Q contradicts exact G_delta conclusion for A=R and cor-q-is-meager-and-not-g-delta claim 3. No symmetry of Q and its complement is assumed. Earlier supplier nonfatal natural-index omission does not invalidate this used theorem.

### thm-baire-one-continuity-points

Checked all 16 steps: closed tail-Cauchy sets E_N cover each nondegenerate [c,d] by pointwise convergence; Baire yields an interval with uniform epsilon/4 closeness to f_N after taking the pointwise limit. Continuity of f_N gives a smaller interval with oscillation <=epsilon. Refinement at epsilon/2 excludes intervals from D_epsilon, proving nowhere density, meagerness, density via Baire on each endpoint-aware neighborhood, and relative G_delta. No countable choices needed. False ancillary Statement prose says C need not be ambient G_delta; in fact [a,b] is G_delta and its intersection with V is G_delta. Core claims 1–4 and proof remain sound; owner maintenance recorded separately.

### thm-cauchy-functional-equation-regularity

Checked all 12 steps and each of six cases: continuity at one point bounds above on a neighborhood; monotonicity, lower bound, and sign each reduce to the proved upper-bound lemma. For nonlinear additive f, vectors (1,c) and (x2,f(x2)) have nonzero determinant; exact inverse coefficients and rational approximation put a graph point in every sup-norm ball. A permissible eta is epsilon/(1+|x1|+|x2|+|f(x1)|+|f(x2)|), including vanishing second-coordinate bounds. No AC used by this theorem.

### thm-continuity-set-realisation

Checked eight steps: decreasing finite intersections W_n, least failure index, and rational/irrational opposite signs define f. At x in G, a neighborhood inside W_m forces n(y)>m, hence |f(y)|<epsilon; outside G, opposite rationality yields a point with distance >=|f(x)| in every neighborhood. G empty and G=R produce correct extremes; no enumeration choices beyond one given G_delta representation.

### thm-froda

Checked 10 steps: reduce sign, fix one rational enumeration, partition interior/endpoint discontinuities. For c<c_prime, an intervening domain point gives L_plus(c)<=L_minus(c_prime), so jump gaps disjoint. Least rational indices inject interior discontinuities into N; odd codes plus 0,2 for at most two endpoints give full injection. Empty/singleton intervals and absent endpoints work; no family of arbitrary rational choices.

### cex-continuous-injection-on-a-non-interval-need-not-be-monotone

Checked seven steps: identity on [0,1] and 5-x on [2,3] have disjoint images; delta=min(1,epsilon) keeps each neighborhood in its component even at 1 and 2. Opposite orientations refute both weak monotonicities, and 3/2 witnesses failure of convexity. Injectivity, continuity and all witness values verified.

### cex-upper-semicontinuous-need-not-attain-its-infimum

Checked six steps: f(0)=1, f(x)=x for x>0 is upper semicontinuous at zero by the global bound and elsewhere by delta=min(c,epsilon). All values positive, reciprocal points in (0,1] approach zero, so infimum zero is unattained; maximum 1 is attained. Compactness of [0,1] needs an explicit Heine–Borel citation/dependency at 4.1; that nonfatal debt is recorded below; no use of the incorrect opposite semicontinuity direction.

### ex-continuous-inverse-gives-the-nth-root

Checked five steps: n>=1 makes x^n strictly increasing on nonnegative reals; polynomial continuity and unique nonnegative roots give the exact onto image [0,infinity). Continuous inverse gives continuous increasing root including a=0 and n=1. n=0 is correctly excluded, even exponents stay on the restricted domain.

### ex-thomae-values-and-oscillation-computed

Checked six steps: integers have denominator 1, 1/q has least denominator q by integer discreteness, and 2/3 excludes denominators 1 and 2. Half-integer denominators are 2, even for negative integers; irrational values are zero. Exact supplier omega_t(c)=t(c) gives every listed oscillation and continuity value.

### fs-additive-implies-linear

Checked six steps under explicit AC: nonempty Hamel basis supplies a coefficient map with rational range and value 1 on b_star. If f=c x then c!=0 and x=c^{-1}theta for an irrational theta gives impossible irrational output. AC is used only by basis existence, with no claim of a choice-free counterexample.

### thm-monotone-with-prescribed-discontinuity-set

Checked 16 steps: E empty gives zero; otherwise one surjection enumerates E, repetitions permitted. Nonnegative terms bounded by dyadic weights give finite sum in [0,1]; telescoping and geometric series give tail <=2^{-n}. Finite head stabilizes on the left at every c and on the right if c not in E, proving continuity there. An enumerated c has a positive right jump at least its single weight, while left limit equals f(c). Boundary n=0 uses empty head, finite E repeats safely, no self-edge or recursion over dependencies.

### ex-indicator-of-q-is-baire-class-two-not-one

Checked 11 steps: finite initial rational images have distance function rho_m, nonnegative with zeros exactly at that finite set and 1-Lipschitz. Continuous tents max(0,1-n rho_m) converge pointwise to each finite indicator (including n=0); those indicators converge pointwise to D by eventual inclusion of each rational. Relative density at both endpoints proves D nowhere continuous on [0,1], contradicting Baire-one dense continuity. Only two nested limits asserted.

### ex-froda-is-sharp

Checked five steps: k->1-1/(k+1) is strictly increasing, hence bijects N with E subset [0,1). Prescribed-discontinuity theorem supplies bounded nondecreasing f with exactly those jumps. k=0 gives zero without dividing by zero; 1 is an accumulation point outside E and therefore a continuity point.

### ex-hamel-basis-additive-function

Checked eight steps under explicit AC: supplier gives rational range, additive nonlinear coefficient map and nonzero rational subspace kernel. Nonzero w0 gives dense Qw0, and translating W proves each rational level set dense; irrational level sets empty. Contraposition of all six regularity clauses gives the asserted pathologies and dense graph. For negative w0, quotient order reverses and multiplication still gives u<q w0<v; the word between is read symmetrically. Remark overstates dependence only on additive nonlinearity for level-set conclusions; those also need the coefficient-map kernel/range. This ancillary Remark maintenance issue is recorded; main claims have complete elementary support.

### ex-monotone-function-discontinuous-exactly-at-the-rationals

Checked four steps and exact displayed construction: rational enumeration is a surjection onto countable canonical Q; prescribed-jump theorem gives range [0,1], discontinuities exactly Q, each a jump, and continuity on its complement. Strict inequality e(k)<x matches left-continuous supplier; Froda bounds cardinality, not density.

### ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous

Checked nine steps under AC: phi denominator 1+|u| is always positive, strict increase verified on positive/negative/cross-sign cases, and values strictly between 0 and 1. Dense levels r-1 and r+1 give fixed lower/higher values in every neighborhood. Their positive gaps refute upper/lower semicontinuity with equality at the epsilon threshold and refute both local extrema. No inference that lack of extrema alone implies nowhere semicontinuity.

## Additional published maintenance findings

These are bounded ancillary prose errors; they do not invalidate the numbered core claims or their downstream uses. All remain for owner maintenance, with no claim of repair.

- `lem-baire-category-in-a-closed-interval` (remark), defect `non-ml-math-remaining-81-2026-10-18-3a-b2-baire-remark`: Remarks first bullet says a closed set may be nowhere dense in R and yet fill an interval. A nowhere dense set contains no nondegenerate interval: such an interval has a nonempty open interior contained in the closure. This contradicts def-nowhere-dense-meager and even this item's correct Proof 2.1. The lemma and its consumers use only the sound Statement and proof. Owner strategy: replace the false sentence by the localization argument actually proved; preserve a<b. Published read-only; nonfatal explanatory maintenance pending.

- `thm-semicontinuity-level-set-characterisation` (remark), defect `non-ml-math-remaining-81-2026-10-18-3a-b2-relative-open-remark`: Remarks first bullet says a subset S_alpha of A cannot be open in R unless A is open. Counterexample A=[0,1], f=0, alpha=-1 gives S_alpha empty, open in R with A not open. A nonempty example: f(x)=-x(1-x), alpha=0 gives S_alpha=(0,1). Owner strategy: say relative openness need not imply ambient openness, rather than asserting necessity of A being open. Claims 1–3 and the full proof are sound. Suppliers def-open-and-closed-in-r, def-continuity-real, def-semicontinuity. Published read-only; nonfatal explanatory maintenance pending.

- `thm-baire-one-continuity-points` (statement), defect `non-ml-math-remaining-81-2026-10-18-3a-b2-ambient-gdelta-prose`: The paragraph On the phrase dense G_delta says neither ambient G_delta nor ambient density is true in general since C is contained in [a,b]. Ambient density indeed fails, but ambient G_delta always holds: [a,b]=intersection over n of (a-1/(n+1), b+1/(n+1)), and C=[a,b] intersect V with V G_delta by claim 4. Interleave the two open sequences to get C G_delta. Owner strategy: remove the false denial of ambient G_delta and retain the relative density qualifier. Numbered claims 1–4 and the proof are valid. Suppliers def-f-sigma-g-delta, cor-archimedean-reciprocal, thm-discontinuity-set-is-f-sigma. Published read-only; nonfatal ancillary prose maintenance pending.

- `ex-hamel-basis-additive-function` (remark), defect `non-ml-math-remaining-81-2026-10-18-3a-b2-coefficient-remark`: The first Remark says every other property follows only from additivity and nonlinearity. The rational range and dense rational level sets also require this specific coefficient map and its nonzero kernel, proved using lem-hamel-basis-exists claims 4–5. A Q-linear automorphism swapping two independent Hamel basis vectors is additive, nonlinear and bijective, hence has singleton level sets instead. Owner strategy: restrict the Remark to regularity failures and dense graph, and retain coefficient-map-specific justification for claim 4. Negative w0 in Proof 2.3 is sound: multiplying a rational between v/w0 and u/w0 yields u<q w0<v; between endpoint wording is read symmetrically. Published source read-only; nonfatal explanatory maintenance pending.

- `cex-upper-semicontinuous-need-not-attain-its-infimum` (Proof 4.1), defect `non-ml-math-remaining-81-2026-10-18-3a-b2-compact-interval-citation`: Proof 4.1 calls [0,1] compact without a compact-interval fact or dependency. The displayed witness is correct, but neither the semicontinuous EVT nor the definition of an interval establishes this premise. thm-heine-borel-characterisation-r states compact iff closed and bounded, and its L3 records thm-heine-borel-r for closed bounded intervals. Owner strategy: add thm-heine-borel-r (or the characterisation with the elementary closed/bounded checks) to deps and Facts and cite it at 4.1; update the manifest/contract mirrors. This is nonfatal citation maintenance for an available published prerequisite, not a missing mathematical theorem. No item edit made.

## Routed decisions

| Obligation | Verdict | Closed ledger row |
|---|---|---|
| `reader:2:1` | confirmed_nonfatal | `non-ml-math-remaining-81-2026-10-18-3a-b2-quotient-citation` |
| `reader:2:2` | confirmed_nonfatal | `non-ml-math-remaining-81-2026-10-18-3a-b2-quotient-positive` |
| `reader:2:3` | confirmed_nonfatal | `non-ml-math-remaining-81-2026-10-18-3a-b2-baire-witness` |
| `reader:2:4` | confirmed_nonfatal | `non-ml-math-remaining-81-2026-10-18-3a-b2-natural-predecessor` |
| `reader:2:5` | confirmed_nonfatal | `non-ml-math-remaining-81-2026-10-18-3a-b2-ivp-quantifier` |
| `reader:2:6` | false_positive | `non-ml-math-remaining-81-2026-10-18-3a-b2-thomae-wrong-location` |
| `refuter:2:1` | confirmed_nonfatal | `non-ml-math-remaining-81-2026-10-18-3a-b2-baire-witness` |
| `refuter:2:2` | confirmed_nonfatal | `non-ml-math-remaining-81-2026-10-18-3a-b2-quotient-positive` |
| `refuter:2:3` | confirmed_nonfatal | `non-ml-math-remaining-81-2026-10-18-3a-b2-ivp-quantifier` |
| `refuter:2:4` | confirmed_nonfatal | `non-ml-math-remaining-81-2026-10-18-3a-b2-natural-predecessor` |

## Evidence, sources, and limits

The exact dispatch scope, generated order task, reader Markdown/findings JSON, refuter JSON, pre/post snapshots, current batch manifest and proof contracts were read. Every routed carrier and every HIGH/CRITICAL proof was independently reviewed, with the current definitions/statements of its cited suppliers. The contract `citations` arrays retain the detailed local item IDs, source-section locators and exact statement quotations; no citation quotes or proof worksheets were changed. All 109 distinct external direct supplier interfaces were consulted, plus `lem-nat-nonzero-is-successor` (Statement) and `thm-heine-borel-characterisation-r` (Statement and Facts L3). This is not a full transitive proof audit of the external suppliers. The mathematics was familiar and checked locally; no web reading is claimed.

All 43 current item hashes equal the dispatched pre/post item hashes, and all ten routed composite observation hashes reproduce from those snapshots. In particular reader:2:6 refers to the wrong current proof, rather than a repaired historical proof; there is no unbound original observation or unknown historical delta here. Risk-review enrichment changes the current contract carrier only; the engine must bind current hashes. No item/page, manifest, Statement, Definition, provenance or verification stamp was edited. No repairs are claimed, so no repair_confidence or consumer-repair propagation is claimed.

Published maintenance is recorded in `research/published-consumer-supplier-ledger.md`, including exact defect IDs, suppliers, evidence and owner strategies, with nine deduplicated A-P item classifications. Each edit acquired `research/.published-consumer-ledger.lock`, reread and merged the current ledger, then released only its own lock. Existing historical receipt markers/evidence were preserved. The four ancillary explanatory errors and one additional compactness citation omission are not extra routed obligations. They add five maintenance rows beyond the five distinct confirmed routed defects; one further row closes the false positive.

The owning cross-batch dependency input `research/non-ml-math-remaining-81-2026-10-18-batch-2.cross-batch-dependencies.json` is already `[]` and is retained: the current batch consumes no supplier owned by another batch of this run. External published interfaces remain prerequisite context. No proposed withdrawal was removed.

## Local checks and handoff

- Initial risk report: exit 0, 34 HIGH/CRITICAL items. Complete item-specific risk reviews are recorded in the owning contract.
- Final risk report with `--require-reviewed`: exit 0, 34 items, zero errors (rerun after the last risk-note edit).
- Explicit source/scope/decision checks: 43 current source hashes match pre/post; all 10 observation hashes match; exactly 10 owed decisions, one closed ledger reference per finding; shared reader/refuter findings reference one defect with explicit same-defect evidence.
- Local schema check of this dispatch's 11 defect-ledger rows: zero errors. No whole-run gate is claimed.
- No changed item paths: reflow, proof precheck and final proof-layout command are inapplicable. Published mathematics stayed read-only.

No substantial unmet mathematical prerequisite or unresolved mathematical uncertainty blocks these bounded decisions. The nine affected published carriers retain nonfatal maintenance debt for the owner; this handoff does not certify those edits as performed. The engine owns decision stamping, gate execution and transitions; none was initiated here.
