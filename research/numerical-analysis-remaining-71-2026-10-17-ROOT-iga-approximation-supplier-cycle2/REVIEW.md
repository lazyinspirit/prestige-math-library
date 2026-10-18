# Second/final IGA approximation review and focused repairs

Run: `numerical-analysis-remaining-71-2026-10-17`. Root reported genuine native69 continuation success at 15:13:25Z and completion of the sequential geometry final review before dispatching this review. This is the SECOND/final approximation review→repair cycle. No third cycle is proposed. The actual integrated canonical sources, rather than the first research proposals, were reviewed.

**Result:** the actual Greville comparison, all-H1_0 variational projector, smooth-numerator matching-patch energy estimates, sharper original Q1 branch and conditional higher-order L2 branch are supported after the focused corrections below. No unresolved mathematical defect remains in this lane under the now-explicit hypotheses. Root still owns mechanical checks, bookkeeping and native transitions; no acceptance stamp or gate result is claimed here.

`CLAUDE.md` and `README.md` were reread fully. The actual Codex config has `model_auto_compact_token_limit = 500000`, scope `total`; it was read without changing configuration or starting another agent. No live batch57/68/71 source, runtime, control file or engine transition was touched.

## Exact changed files and preimages

Eight canonical files changed:

1. `items/thm-nurbs-quotient-best-approximation-transfer.md`
2. `items/lem-matching-nurbs-patch-traces-give-h1-conformity.md`
3. `items/lem-boundary-preserving-tensor-schoenberg-h1-approximation.md`
4. `items/def-isogeometric-galerkin-patch-space-and-refinement.md`
5. `items/thm-nurbs-p1-tensor-spline-h1-error-rate.md`
6. `items/thm-nurbs-tensor-product-l2-approximation.md`
7. `items/thm-boundary-preserving-nurbs-projector-and-h1-rate.md`
8. `items/cex-multipatch-trace-mismatch-not-h1.md`

Every immediately preceding full carrier is archived under `before/items/` with its exact canonical filename. The pre-repair Strang carrier is also archived as inspected consumer context. These are actual disk preimages copied before these edits, not reconstructed native versions. No page, manifest, proof contract, level, hash/readiness artifact or historical native note was changed. The only frontmatter changes are the four actual `def-countable-choice` dependencies root specifically authorized in the quotient, trace, Schoenberg and space-definition carriers. No verification marker was refreshed. In particular existing `pass` fields are historical native markers and do not certify these new edits.

## Confirmed defects and smallest repairs

### Quotient transfer: inherited axiom and a false unstated denominator premise

The original Statement began “Let F … be an admissible NURBS map and W its denominator”, without Countable Choice or continuity of W. Its proof invoked the mapped-H1 theorem (which explicitly assumes CC) and asserted that W's traces match. Admissibility of F alone does not imply that latter assertion.

Concrete counterexample to that old premise: on the unit square use degree one in both coordinates, with x knots `(0,0,1/2,1/2,1,1)` and y knots `(0,0,1,1)`. Represent the identity map separately on the left/right x strips, using all homogeneous weights 1 on the left and 2 on the right and the corresponding identity control points. Then F is exactly the globally admissible identity, but W is 1 on the left and 2 on the right. The right-cell knot convention fixes its value on x=1/2. Choose target uhat=0 and numerator spline s=1. Both target and s have matching traces; g-s=-1 has finite H1 norm. Nevertheless s/W jumps from 1 to 1/2 and is not H1, by the same direct weak-derivative jump test proved in this pair's counterexample. Thus the original conclusion was actually false, rather than merely missing a citation.

The corrected Statement explicitly assumes Countable Choice and a **continuous** positive denominator. It also spells out the regularity needed by the actual conformity supplier: target and spline are C1 up to each cell boundary on the common refinement of the geometry and analysis knot grids. This closes the possible open-cell/unbounded-gradient interpretation and guarantees the original H1 norms are defined. Every originally claimed analytic estimate and every constant is retained; no degree, knot ratio or continuity-order restriction is added. Fully repeated analysis knots remain allowed. No restriction is imposed on the original definition of admissible NURBS maps. Root explicitly confirmed that making this necessary denominator premise explicit preserves the approved actual approximation branches; no artificial discontinuous-denominator fallback theorem was added.

The proof now establishes H1 membership of g, s, e=g-s, s/W and e/W using their actual finite-cell regularity before taking global norms. It explicitly pushes s/W to v_h with the mapped-H1 supplier. Given/A1/deps carry CC. Both real consumers already had CC, continuous W and exactly this cell regularity; their Facts/uses were synchronized below.

### Trace, Greville and space: exact inherited CC without restricting finite algebra

The original trace lemma omitted CC, although its actual divergence supplier explicitly assumes AC_omega and its Sobolev convention also assumes CC. Its Statement/Given now say Countable Choice, A1 identifies the exact use, and its dependency is declared. The finite cell-cancellation proof is otherwise unchanged.

The integrated Schoenberg lemma had deliberately replaced the first research packet's AC-dependent univariate-rate application by a direct mean-value/Taylor estimate. That replacement is sound and preserves the constants. However its H1 conclusion still invokes the trace lemma and Sobolev convention. The repair makes **only H1 membership and the H1 norm estimate conditional on CC**. Finite sums, polynomial/Greville identities, pointwise cell estimates, repeated-knot continuity and face/reflection compatibility remain choice-free. A1/deps identify the analytic use precisely.

The patch-space Definition now makes **only the cited trace-based conformity verification** conditional on CC. Its finite rational spaces, imposed H1/H1_0 membership, finite coefficient products and h/p/k representation conventions are unchanged. The geometry-only refinement labels acquire no unnecessary axiom. This is the only Definition changed; the complete old/new versions are in the preimage/current carriers.

### Conditional L2: incorrect telescoping identity

Original step 2.1 printed
`I-Q_d...Q_1 = sum Q_d...Q_(r+1) (I-Q_r) Q_(r-1)...Q_1`,
which is false already for two coordinates. The claimed error bound nevertheless remains sound. The repaired proof uses the correct one-sided identity
`I-Q_d...Q_1 = sum Q_d...Q_(r+1) (I-Q_r)`.
It proves S_j>=1 because Q_j fixes the constant one and has operator norm at most S_j, then enlarges the partial stability product to the original displayed product over all j≠r. It uses the sectionwise error estimate already proved in step 1.1. No regularity, bounded-extension, commutation or measurability premise was removed; no L2 Statement or constant changed.

### Projector's reference Strang use: comparison versus projector error

Original final step 6.1 referred to step 1.4's explicit reference comparison error as though it were already the reference projector error. The correction explicitly constructs w_h=Sg/W in the reference rational space, applies the same proved zero-boundary closure, obtains its comparison bound from step 1.4, and then invokes the reference projector's best approximation from step 1.1. Only then does it choose Pi_h u in the original Strang bound. All form, quadrature, load, map and discrete-coercivity hypotheses/terms remain. Its Statement is unchanged.

### Trace-jump example: integration limit typo

The proof said v=1 on x>1 but printed its integral over x in (0,1), then used the negative endpoint value belonging to (1,2). The repaired integral is over (1,2), producing exactly `-psi(0) int eta` as required. The counterexample's Statement is unchanged. Its trace-sufficiency Fact now states the supplier's CC qualification; the counterexample still proves failure directly through the distributional test and does not assume that sufficient criterion.

## Independent disposition of the complete actual proofs

The actual Schoenberg lemma was read fully and checked independently. The Greville identity is the k=1 specialization of the actual canonical polynomial reproduction proof; positive partition gives sup stability. The local mean-value remainder is bounded by M_g times the square of the expanded support length, and telescoping the commuting sup contractions gives the stated E. The derivative identity is summed with zero-support lower-degree terms **omitted**, rather than evaluating 0/0. Adjacent Greville gaps equal the denominator divided by p; the mean-value point lies in the same support interval, and the remaining coordinates lie in their actual supports. Thus each derivative component error is bounded by M_g R, and the vector bound is sqrt(d) M_g R. No inverse minimum-span or neighboring-knot-ratio bound is hidden.

At multiplicity p+1, the two endpoint Greville samples coincide, so sampled tensor face restrictions match even though individual B-spline functions can jump. Repeating coordinatewise handles intersections of such faces. Reflection is first checked on open cells; continuity of the sampled sum extends equality at repeated knots, where the right-cell convention of an individual basis need not commute with reflection. Endpoint basis values give exactly the tangential face formula. Under its explicit CC analytic branch, the trace lemma and full Sobolev norm then give the stated H1 estimate. These facts preserve arbitrary finite clamped degrees p_r>=1, grading and multiplicities through p_r+1.

The full current projector theorem was read and checked. The full-H1 inner product on H1_0 is Hilbert under CC; Céa with boundedness/coercivity one gives the finite rational projector for **every H1_0 input and every finite conforming space, including zero**. Uniqueness gives linearity/fixing/idempotence, and testing gives contraction. No point value of arbitrary H1 data is used.

Its smooth approximation branch is separate: actual C1,1 numerators, continuous positive piecewise-polynomial denominators, explicit weight/gradient/map constants, aligned tangential knots/degrees and proportional denominator traces are stated. Greville restriction and constant scaling make rational patch traces agree. The value-truncation proof of zero-boundary closure is complete: nonzero derivatives at zeros are isolated on coordinate lines; least rational-interval codes make those sets countable; completed-product Fubini and null finite faces give gradient zero almost everywhere on the zero set. The explicit scalar C1 truncations have compact support inside D, and dominated convergence plus compact-support closure gives H1_0. It does not apply a C1-domain trace-kernel theorem to an arbitrary Lipschitz domain.

The repaired quotient transfer then gives each actual C_a M_a B_a, disjoint-patch squared summation gives epsilon_h, and the exact scalar and finite-Lamé Céa suppliers give precisely their original factors. First order is asserted only for fixed bounded degrees/uniform displayed constants; varying-degree convergence uses the actual epsilon_h. No optimal hp, universal incompatible-multipatch, degree-independent or locking-free statement was added.

The original Q1 interpolation lemma/rate and their full proofs were read. The compact support margin indeed kills the boundary-cell nodal values, gives compact support of the comparison and discharges the closure/pullback assumptions. Its sharper constant, Countable Choice branch and original Statement are retained. Its quotient Fact and proof now explicitly discharge the repaired supplier conditions.

The original conditional tensor L2 statement/proof and exact published local-Q and Sobolev-rate suppliers were read fully, including AC, sectionwise hypotheses and local overlap/stability. The corrected telescoping establishes its exact existing bound; it remains an L2-only conditional higher-order result.

The actual trace lemma, NURBS definition, space definition, rational-basis lemma, full mapped-H1 proof, exact Poisson/elasticity carriers and current Strang carrier were read fully. Scalar coercivity/boundedness and finite-Lamé factors are used with their real stated data. The Strang comparison retains the exact/reference spaces, physical gradient-bounded data, coercivity and all defects. The geometry helper's completed final review was read fully; no geometry-supplier source or Strang source was changed in this lane. The adapter/data-generation/tensor additions stay one-way suppliers and are not converted into an approximation theorem for the special PE17 parabolic family.

## Full old/current consumer closure and actual repairs

Reference searches were made in active `items/` and `library/` for the changed suppliers and every transitive interface. The full pre-repair sources were inspected before these edits; the archive binds the actual changed old sources. No changed subject declares an alias.

| Changed original interface | Direct item consumers in the old/current graph | Further item consumers | Disposition owned by this reviewer |
|---|---|---|---|
| quotient-transfer Statement | Q1 H1 rate; new projector theorem | none | Both complete proofs read. Both already assume CC and continuous W. Their numerator targets are closed-box C1 and their comparisons cellwise polynomial; on the common refinement, positive W gives the required C1-up-to-cell target. Facts/uses synchronized in these two files. Neither consumer Statement changed. |
| trace-conformity Statement | space Definition; quotient transfer; Schoenberg lemma; Q1 rate; new projector; exact Poisson; exact elasticity; trace-jump example | tensor L2; Strang; k-refinement example (through space and other paths) | All eleven distinct consumer bodies read in full. Every analytic theorem use has CC or AC: quotient now explicit, Schoenberg analytic branch now conditional, Q1/projector/Poisson/elasticity/Strang already CC, L2 already AC. Space's verification and the example's sufficiency Fact now qualify the imported conclusion. The counterexample's own weak-derivative contradiction is direct. |
| Schoenberg Sobolev Statement | new projector theorem | none | Its Statement already assumes CC, and uses only the declared C1,1 numerator/continuous-weight branch. Finite face identities remain choice-free. No further hypothesis or consumer Statement repair. |
| space Definition's conformity verification | exact Poisson; exact elasticity; Strang; tensor L2; Q1 rate; new projector; trace-jump example; k-refinement example | new projector and Q1 through the exact-form carriers, already listed | All eight direct bodies read fully. Analytic conformity applications discharge CC/AC. The k-refinement example uses only h/k labels, its explicit degree-two Bernstein identity and homogeneous insertion preservation; it imports no H1 consequence. Those finite geometry/algebra branches remain unchanged. |

The changed tensor L2 theorem and projector have no further item consumers found. The trace-jump example has no item consumers. The common A page and full B page were read: A-page prose accurately distinguishes the all-H1_0 projector from the C1,1 rate, retains the sharper Q1 and conditional L2 claims, and makes no unsupported universal or optimal-hp assertion. B-page prose/diagrams use the trace-jump counterexample's unchanged conclusion. No page repair is required.

The first-cycle historical consumer observation had no existing projector/Schoenberg carrier; the drained native current graph includes them. Both histories are retained as histories rather than treating the first research inventory as a current seal. No outside live batch item occurs in the changed-interface consumer closure found here.

## Source reading and remaining root work

The first research report records the exact authoritative Lyche PDF retrieval and excerpt extent: complete 39-page PDF retrieved, full derivative proof on PDF pp.7–8, full Greville/coefficient discussion displayed on pp.16–19, and the relevant §2.2 opening/Theorem32/Example33 on pp.26–29 read. It was not read cover to cover. This review adds no claim of full Takacs/Buffa/Guermond external-text reading. The new quantitative arguments are the actual local proofs checked above; no source exercise or approximation remark substitutes for them.

Canonical source proofs actually read in full in this review include both new carriers, all eleven trace/space consumer bodies, the actual B-spline definition/reproduction, local-Q definition/Sobolev-rate theorem, mapped-H1/rational basis/compact-support suppliers, H1 Hilbert/Céa/first-Strang proofs, completed-product Fubini/Euclidean product identification/dominated convergence, mean-value theorem and null-image theorem. Countable Choice's actual definition and finite piecewise-C1 convention were read. The elementary rational-countability/compactness interfaces in the new theorem were inspected at their actual uses and source conventions; no recursive audit of all their foundational proofs is claimed. The full geometry final report was read, without claiming an independent second geometry audit. A combined native-notes/source read returned a truncated middle; its continuation was recovered by separately reading the full final notes tail. No unread full-text claim or successful validator result is invented.

Root must mirror the four added CC dependency edges and changed Statement/Definition quotations in its manifest/contracts/other bookkeeping, synchronize the five proof/consumer deltas, recompute current hashes/readiness and perform required explicit formatting/render/gates at the proper frontier stage. This reviewer did not run tests, validators, proof-layout, rendering, or gates under root's explicit lane restriction, did not refresh any verification field, and did not change levels or readiness. All 71 original pairs remain together. These mathematical repairs and complete consumer dispositions close the assigned final approximation review; they do not constitute engine or publication acceptance.
