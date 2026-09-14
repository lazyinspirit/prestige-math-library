# Step 3b pair report: Banach-valued integration and the RNP

- Run: `phase-2-next-18`
- Role: `alpha-high`
- Owned A page: `banach-valued-integration-and-the-radon-nikodym-property`
- Owned B page: `banach-valued-integration-and-the-radon-nikodym-property-examples`
- Shared batch: `research/phase-2-next-18-batch-1.pages.json`

## Scaffold audit

The Step 3a scope is mathematically adequate after local repairs. The audit
added the missing well-definedness links for the simple and Bochner integrals;
made Countable Choice explicit in Bochner dominated convergence and in the
local minimizing-sequence proof of Hilbert reflexivity; added strict separation
to the nondentability construction; strengthened that construction to expose
its Lebesgue-interval, separable-range witness; and supplied the scalar
Lebesgue differentiation, scalar absolutely-continuous FTC, dual separation,
complex scalar Radon--Nikodym, Bochner-commutation, canonical-bidual, $c_0^*=\ell^1$,
Lebesgue completeness, and absolute-continuity-of-the-integral dependencies at
their exact consumers. The density-induced vector-measure proof was narrowed
to a choice-free scalar-continuity argument. An unused uniform-boundedness
dependency was removed from Dunford--Pettis. The stale B-page Hilbert escalation
summary was replaced by the now-local supplier relationship.

The sources read for this pair are Teschl, *Topics in Real and Functional
Analysis*, Section 11.6 (printed pp. 332--336); Pisier, *Martingales in Banach
Spaces*, Chapter 2, Section 2.1 (printed pp. 33--44); Brezis, *Functional
Analysis, Sobolev Spaces and Partial Differential Equations*, Theorem 4.30 and
Problem 23 with solution (printed pp. 122--124, 315, 397--400); and
Cheeger--Kleiner, *Differentiating maps into $L^1$, and the geometry of BV
functions*, introduction and Appendix Section 6 (printed pp. 2--3, 21--23).
The relevant complete proof passages were checked, not merely their theorem
labels.

Confirmed published concern (not edited):

- `thm-hahn-banach-norm-preserving-extension` and
  `thm-complex-hahn-banach-norm-preserving-extension` omit AC from their
  Statements, but the first proof invokes
  `thm-hahn-banach-dominated-extension`, whose Statement explicitly assumes
  AC, and the complex proof invokes the real norm-preserving result. Confidence:
  high. Required supplier/repair: add `def-axiom-of-choice`, begin both
  Statements with “Assume AC”, and propagate the assumption to consumers; or
  replace the extension supplier by an explicitly weaker-choice theorem and
  prove that theorem. This pair does not consume the defective unstated
  corollaries: it assumes AC and cites the correctly annotated dominated form.

The published-consumer-supplier ledger remains untouched for serial
reconciliation.

## Item checkpoints

### `def-banach-valued-simple-function-and-integral` — repaired

- Claim and conventions: finite disjoint nonzero-level representation;
  integrability requires finite measure exactly on nonzero fibres; the empty
  representation is the zero function; $\int_Es$ is defined by intersection.
- Source: Teschl Section 11.6, definition preceding Lemma 11.28, printed p. 332.
- Dependencies examined: `def-banach-space`, `def-measure-space`; local
  well-definedness supplier `lem-banach-valued-simple-integral-is-well-defined`
  is registered through `justified_by`.
- Checks: explicit-path precheck (definition, zero proof bodies), rendercheck,
  and strict selected proof-contract all pass. Item decision recorded as
  `repaired`, confidence 1.
- Open gap: representation independence, linearity, null-insensitivity, and the
  norm inequality are deliberately the next lemma, not silently assumed here.

### Next action

### `lem-banach-valued-simple-integral-is-well-defined` — repaired

- Claim: representation independence, linearity, null-insensitivity, and the
  simple norm inequality. The proof uses an actual common refinement and checks
  the zero fibre rather than appealing to a strategy label.
- Source: Teschl Section 11.6, Lemmas 11.28--11.29, printed pp. 332--333.
- Dependencies examined: the preceding local definition, `def-measure`, and
  `def-integral-of-a-nonnegative-simple-function` (added locally because the
  scalar norm integral is used in the conclusion).
- Checks: explicit-path precheck, rendercheck, and strict selected contract all
  pass; item decision `repaired`, confidence 1.
- Boundary evidence: complements and empty partitions, null cells, one-cell
  partitions, and infinite-measure zero fibres are explicit. No open gap.

### Next action

### `def-strongly-measurable-banach-valued-function` — accepted

- Claim: a.e. pointwise norm convergence of measurable simple functions, with
  one measurable exceptional null set. Weak and Borel measurability are
  explicitly not substituted for this definition.
- Source: Teschl Section 11.6, definition and Lemma 11.30, pp. 332--333.
- Dependencies examined: the local simple-function definition and
  `def-measure-null-set-and-almost-everywhere`.
- Checks: explicit precheck (definition), rendercheck, strict selected contract;
  all pass. Item decision `accept`, confidence 1. Zero, single-simple-function,
  and null-modification cases are explicit. No open gap.

### Next action

### `thm-pettis-measurability-criterion-for-strong-measurability` — repaired

- Claim: on a complete measure space and under AC, strong measurability is
  equivalent to weak measurability plus an essentially separable range.
- Argument: simple ranges yield the forward direction; in reverse, real
  Hahn--Banach extensions (complexified explicitly) form a countable norming
  family, make distance-to-centre functions measurable, and yield finite
  nearest-centre simple approximants. The zero subspace is separate.
- Source: Teschl Theorem 11.34 with complete proof, pp. 335--336.
- Dependencies examined and added where missing: `def-complete-measure-space`,
  `def-measurable-function-between-measurable-spaces`, and
  `def-separable-space`, besides the original strong-measurability, dual, AC,
  and dominated Hahn--Banach inputs.
- AC use: the Hahn--Banach extensions and their simultaneous countable
  selection. The local theorem states and propagates AC. Explicit precheck,
  rendercheck, and strict contract pass; decision `repaired`, confidence 1.
- Published concern: the two norm-preserving Hahn--Banach corollaries omit this
  inherited assumption; exact IDs and repair are in the scaffold audit above.

### Next action

### `def-bochner-integrable-function` — repaired

- Claim: strong measurability plus $L^1$ approximation by integrable simple
  functions; the Bochner integral is the limit of their simple integrals.
- The local Cauchy estimate proves existence of that norm limit. Independence
  and the norm-integrability criterion remain explicitly delegated to
  `thm-bochner-integrability-criterion` through `justified_by`.
- Source: Teschl, definition preceding Lemma 11.31, p. 333.
- Dependencies examined: the strong-measurability definition and simple
  integral well-definedness lemma, plus the registered next supplier. Explicit
  precheck (definition), rendercheck, and strict contract pass; decision
  `repaired`, confidence 1. Zero, empty-restriction, and simple cases explicit.

### Next action

### `thm-bochner-integrability-criterion` — repaired

- Claim: a strongly measurable function is Bochner integrable iff its norm has
  finite scalar integral; its integral is approximation-independent.
- Argument: necessity is the scalar triangle estimate. For sufficiency, a
  pointwise simple approximation is cut down on
  $\{\|u_n\|\leq2\|f\|\}$, preserving finite range, giving integrable nonzero
  levels and domination by $3\|f\|$; scalar DCT yields $L^1$ convergence.
- Source: Teschl Lemmas 11.30--11.31, complete proofs, pp. 333--335.
- Added exact scalar suppliers: nonnegative integral order/scalar rules and
  additivity, measurability of pointwise limits, and scalar DCT (with the
  original monotone-convergence dependency retained). Exceptional-null-set,
  empty, zero, simple, and both iff directions are explicit.
- Explicit precheck, rendercheck, strict contract pass; decision `repaired`,
  confidence 1. No open gap.

### Next action

### `lem-bochner-integral-norm-inequality` — repaired

- Claim: $\|\int_Ef\|\leq\int_E\|f\|$ for every measurable $E$.
- Argument: restrict a defining simple approximation to $E$, apply the local
  simple inequality, use exact scalar order/additivity, and pass to the norm
  limit. Empty $E$, zero $f$, and degenerate measures are explicit.
- Source: Teschl Lemmas 11.28(v) and 11.29, pp. 332--333.
- Dependencies examined and direct scalar suppliers added. Explicit precheck,
  rendercheck, and strict contract pass; decision `repaired`, confidence 1.

### Next action

### `thm-bochner-dominated-convergence` — repaired

- Claim: under $\mathrm{AC}_\omega$, norm-a.e. convergence under one integrable
  scalar dominator gives Bochner integrability, $L^1$ convergence, and integral
  convergence.
- Argument: Countable Choice selects one strong-simple witness sequence per
  $f_n$; their combined countable range gives measurable finite nearest-centre
  approximants to $f$. Scalar DCT and the Bochner norm inequality finish.
- Source: Teschl Theorem 11.33 with complete proof, p. 335.
- Exact additions: strong-measurability definition, scalar pointwise-limit
  measurability, and simple linearity. Empty space and zero dominator explicit.
  Precheck, rendercheck, and strict contract pass; decision `repaired`,
  confidence 1. No open gap.

### Next action

### `thm-bounded-linear-maps-commute-with-bochner-integration` — repaired

- Claim: bounded linear maps preserve Bochner integrability and commute with
  every restricted integral.
- Argument: apply $T$ to a simple approximation, use its operator bound for
  $L^1$ convergence, prove the identity on finite sums, and pass through the
  norm-continuous map. Zero operator, zero integrand, and empty $E$ explicit.
- Source: Teschl Theorem 11.32, bounded case and proof, p. 335.
- Added direct simple-integral supplier. Explicit precheck, rendercheck, strict
  contract pass; decision `repaired`, confidence 1. No open gap.

### Next action

### `def-banach-valued-vector-measure-and-variation` — accepted

- Claim/conventions: norm-countably additive $X$-valued measure; variation as
  the supremum over finite measurable partitions; bounded variation and
  $\nu\ll\mu$ separately defined. Empty and one-cell partitions explicit.
- Source: Pisier Chapter 2, Section 2.1, definitions before Proposition 2.1,
  p. 33. Dependencies `def-banach-space` and `def-measure` examined.
- Explicit precheck (definition), rendercheck, strict contract pass; decision
  `accept`, confidence 1. No open gap.

### Next action

### `lem-bounded-variation-of-a-vector-measure-is-a-finite-measure` — accepted

- Claim: $|\nu|$ is a finite positive measure and
  $|x^*\nu|\leq\|x^*\||\nu|$.
- Argument: both finite-additivity inequalities are proved by joining and
  refining partitions; both countable-additivity inequalities are proved using
  finite partial sums and norm-countable additivity. Functional domination is
  partitionwise. Empty set and zero functional explicit.
- Source: Pisier Section 2.1, bounded-variation convention, p. 33. Added direct
  dual-space dependency. Explicit precheck, rendercheck, strict contract pass;
  decision `accept`, confidence 1. No open gap.

### Next action

### `lem-bochner-density-defines-an-absolutely-continuous-vector-measure` — repaired

- Claim: $\nu_f(E)=\int_Ef$ is norm-countably additive, absolutely continuous,
  and has $|\nu_f|(E)=\int_E\|f\|$.
- Argument: the finite scalar measure $\rho(E)=\int_E\|f\|$ controls tails and
  gives countable additivity without sequence DCT. One defining simple
  approximation and its finite level partition give the reverse variation
  bound. Empty, zero, and one-level cases calculated.
- Source: Pisier Proposition 2.1 and (2.2), pp. 33--34. Added exact scalar
  indefinite-measure, simple-integral, and Bochner-definition dependencies.
  Precheck, rendercheck, strict contract pass; decision `repaired`, confidence
  1. No open gap and no new choice use.

### Next action

### `def-radon-nikodym-property` — accepted

- Claim/conventions: every bounded-variation $X$-valued measure absolutely
  continuous with respect to a finite scalar measure has a Bochner density,
  with equality on every measurable set. Zero target and empty space explicit.
- Source: Pisier Section 2.1, definition after Proposition 2.1, p. 34.
  Dependencies on vector measures and Bochner integrability examined.
- Explicit precheck (definition), rendercheck, strict contract pass; decision
  `accept`, confidence 1. No open gap.

### Next action

### `def-dentable-bounded-set-and-slice` — repaired

- Claim/conventions: slices of nonempty bounded sets use complex real parts,
  positive width, strict supremum inequality, and norm diameter; dentability
  requires arbitrarily small slices.
- Degenerate repair: the zero functional is allowed when the whole set already
  has diameter zero, so the zero-space singleton is dentable. Any proper slice
  of a positive-diameter set necessarily uses a nonzero functional.
- Source: Pisier Remark 2.2, p. 34. Dual-space dependency examined. Explicit
  precheck (definition), rendercheck, strict contract pass; decision `repaired`,
  confidence 1. No open gap.

### Next action

### `lem-dentable-average-ranges-give-vector-measure-densities` — repaired

- Claim: under AC, dentability of every nonempty bounded closed convex set
  implies RNP.
- Complete argument: normalize by $|\nu|$; pass small slices to average ranges;
  prove the small-average-range lemma by a maximal disjoint exhaustion; build
  $g_\varepsilon$ with a quantitative variation error; telescope
  $g_{2^{-n}}$ in $L^1$; identify the limit density; transfer it from
  $|\nu|=w\mu$ back to $\mu$.
- Source: Pisier Theorem 2.3 and complete proof, pp. 36--38.
- Added exact suppliers for variation finiteness, scalar RN, density
  integration, variation identity, monotone convergence, and simple
  integration. Full AC uses: scalar RN, maximal disjoint families, and
  simultaneous sequence selection. Zero variation, null remainders, one-piece
  exhaustions, and convergence in the Banach target explicit.
- Precheck, rendercheck, strict contract pass; decision `repaired`, confidence
  1. No open gap.

### Next action

### `lem-nondentability-produces-a-vector-measure-without-density` — repaired

- Claim: a nondentable bounded closed convex set yields a bounded-variation,
  Lebesgue-absolutely-continuous vector measure on $[0,1]$, with range in a
  closed separable subspace and no Bochner density.
- Complete argument: strict separation produces a uniform convex bush after
  Pisier's enlargement; recursive finite interval partitions realize its
  separated martingale while inserted dyadic grids generate Borel sets; the
  dominated algebra measure extends by symmetric-difference approximation;
  any density's atom averages would converge in $L^1$, contradicting the fixed
  increment lower bound.
- Source: Pisier Lemma 2.4 and Theorem 2.5, relevant complete proof, pp. 37--40.
- Repaired dependencies replace unused Bochner DCT with exact Bochner-simple,
  norm, countable-algebra approximation, Lebesgue-completion, and strict
  separation suppliers. Full AC covers separation, recursive bush/partition
  choices, and extension approximants. Endpoints are null; one-child branching
  is impossible; empty/zero bounds explicit.
- Precheck, rendercheck, strict contract pass; decision `repaired`, confidence
  1. No open gap.

### Next action

### `thm-rnp-dentability-characterization` — repaired

- Claim: under AC, $X$ has RNP iff every nonempty bounded closed convex subset
  is dentable.
- Both directions cite the now-complete local constructions; the converse uses
  the exact RNP definition to contradict the Lebesgue witness. Zero-space,
  singleton, zero-density, and inherited AC cases explicit.
- Source: Pisier Theorems 2.3 and 2.5, pp. 36--40. Added direct RNP-definition
  dependency. Precheck, rendercheck, strict contract pass; decision `repaired`,
  confidence 1. No open gap.

### Next action

### `lem-rnp-is-invariant-under-banach-space-isomorphism` — repaired

- Claim: a bounded linear bijection with bounded inverse preserves RNP in both
  directions.
- Argument: compose vector measures with the inverse, bound variation by its
  operator norm, obtain a density, and transport it through the map using
  Bochner commutation; repeat for the inverse. Zero/empty cases explicit.
- Added `def-topological-isomorphism-of-normed-spaces`. Precheck, rendercheck,
  strict contract pass; decision `repaired`, confidence 1. No open gap.

### Next action

### `lem-rnp-is-separably-determined` — repaired

- Claim: under AC, $X$ has RNP iff every closed separable subspace has RNP.
- Forward: restrict ambient denting functionals to a closed subspace. Reverse:
  use the local density-free measure with separable range; RNP in that range
  gives a subspace density whose bounded inclusion is an ambient density.
- Source: Pisier Corollary 2.8 and proof, p. 41. Both iff directions,
  zero-subspace/zero-space cases, and inherited AC explicit. Precheck,
  rendercheck, strict contract pass; decision `repaired`, confidence 1.

### Next action

### `lem-rnp-may-be-tested-on-the-lebesgue-interval` — repaired

- Claim: under AC, RNP is equivalent to the density condition solely for
  Lebesgue-absolutely-continuous bounded-variation measures on $[0,1]$.
- Forward is specialization of the definition; reverse uses the already
  authored nondentability interval witness. This replaces the scaffold's
  redundant unproved dyadic-approximation sketch.
- Source: Pisier Corollaries 2.9--2.10, p. 41. Both iff directions, zero target,
  zero measure, finite interval, endpoints, and inherited AC explicit.
  Precheck, rendercheck, strict contract pass; decision `repaired`, confidence
  1. No open gap.

### Next action

Build the equivalence between Lipschitz curves based at zero and interval
vector measures dominated in variation by Lebesgue measure. Check the extension
from the rational interval algebra and the exact $\mathrm{AC}_\omega$ cost.

### Dependency refresh for `lem-nondentability-produces-a-vector-measure-without-density`

- Replaced `lem-finite-measure-sets-are-approximable-by-a-countable-generating-algebra`,
  which only supplies some dense algebra and therefore did not justify density
  of the construction's particular dyadic-generated algebra. The item now
  proves that algebra's Borel density directly from
  `thm-continuity-from-below-for-measures` and
  `prop-measure-of-a-set-difference`, then invokes
  `cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure`.
- Refreshed the proof contract and item decision against the new exact
  dependency set. Explicit-path precheck, rendercheck, and strict selected
  contract pass. No mathematical gap remains.

### Next action

Finish and certify `lem-lipschitz-curves-and-dominated-interval-vector-measures`
using the same item-specific rational-algebra approximation argument.

### `lem-lipschitz-curves-and-dominated-interval-vector-measures` — repaired

- Claim: under Countable Choice, based Lipschitz curves on $[0,1]$ correspond
  bijectively to vector measures dominated in variation by $L\lambda$.
- Complete argument: rational increments define a finitely additive algebra
  measure; an item-specific symmetric-difference approximation proof and
  Lebesgue completion extend it uniquely; domination yields countable
  additivity and the variation bound. Conversely interval values of a dominated
  measure form a Lipschitz curve and uniqueness recovers the measure.
- Sources: Cheeger--Kleiner, introduction, pp. 2--3; Pisier, Corollary 2.10,
  printed p. 41. Dependencies examined: `def-countable-choice`, the Lipschitz
  definition, the vector-measure/variation definition, continuity from below,
  set-difference calculus, and Lebesgue completion.
- Countable Choice selects the approximation sequence and is also an explicit
  hypothesis of the completion supplier. Rational and arbitrary endpoints,
  the atom at zero, empty sets, one intervals, and $L=0$ are explicit.
  Explicit-path precheck, rendercheck, and strict selected contract pass;
  decision `repaired`, confidence 1. No open gap.

### Next action

Author `thm-rnp-lipschitz-differentiability-characterization` from the tested
interval-measure criterion and the scalar Lebesgue differentiation/FTC
suppliers, checking both directions and the exact AC propagation.

### `thm-rnp-lipschitz-differentiability-characterization` — repaired

- Claim: under AC, $X$ has RNP iff every Lipschitz curve
  $[0,1]\to X$ has a norm derivative almost everywhere.
- Forward argument: the interval measure has a Bochner density; a countable
  family of scalar differentiation statements for simple level indicators and
  approximation errors proves that almost every point is a vector Lebesgue
  point, hence the indefinite integral is norm differentiable there.
- Reverse argument: scalar RN decomposes the variation density into bounded
  disjoint levels. The corresponding interval curves are Lipschitz. Explicit
  finite-difference simple approximants make their a.e. derivatives strongly
  measurable; scalar FTC after every dual functional identifies each derivative
  as a level density; the disjoint fields paste under the integrable bound
  $g+1$.
- Sources: Cheeger--Kleiner, RNP passage, printed pp. 2--3; Pisier,
  Corollary 2.10, printed p. 41. Added the exact AC-to-DC/Countable-Choice,
  scalar hierarchy/FTC, countable-null-union, strong-measurability,
  Bochner-DCT, variation, and commutation suppliers used by the written proof.
- Both iff directions, $L=0$, endpoints, null residual levels, zero target,
  empty/one-point cases, and the exact choice uses are explicit. Explicit-path
  precheck, rendercheck, and strict selected contract pass; decision
  `repaired`, confidence 1. No open gap.

### Next action

Author `thm-separable-dual-spaces-have-rnp`, including the simultaneous scalar
RN representatives, pointwise extension from a countable dense subspace, and
strong-measurability proof.

### `thm-separable-dual-spaces-have-rnp` — repaired

- Claim: under AC, every norm-separable continuous dual $Y^*$ has RNP.
- Complete argument: AC supplies Countable Choice and the relative
  Hahn--Banach instances needed to make $Y$ separable. Scalar RN densities are
  selected on a countable rational/Gaussian-rational dense subspace of $Y$;
  uniqueness and scalar variation make them simultaneously linear and bounded
  by $g\|y\|$ off one null set. They extend pointwise to $f(\omega)\in Y^*$.
  Coordinate measurability gives measurable norm distances, and norm
  separability of $Y^*$ supplies finite nearest-point simple approximants, so
  $f$ is strongly measurable and Bochner integrable. Evaluation on the dense
  test subspace identifies every vector-measure value.
- Source: Pisier, Corollary 2.11 and complete separable-dual proof, printed
  pp. 41--42. Exact additions include AC-to-choice, AC Hahn--Banach,
  rational-span countability, scalar variation-density, and sequential
  measurability suppliers.
- Real and complex fields, zero dual, zero measure, null ambient measure,
  singleton dense sets, common null representatives, and every measurable test
  set are explicit. Precheck, rendercheck, strict selected contract pass;
  decision `repaired`, confidence 1. No open gap.

### Next action

Author `thm-hilbert-spaces-are-reflexive-by-riesz-representation`, checking the
library's inner-product linearity convention, the minimizing-sequence use of
Countable Choice, and complex conjugations in the bidual surjectivity step.

### `thm-hilbert-spaces-are-reflexive-by-riesz-representation` — repaired

- Claim: under Countable Choice, every complete real or complex inner-product
  space is reflexive in the canonical-map sense.
- Complete argument: a Countable-Choice minimizing sequence in
  $\varphi^{-1}(1)$ is Cauchy by the parallelogram identity. Its minimum is
  orthogonal to $\ker\varphi$, giving the unique linear-first Riesz
  representation. The induced conjugate-linear isometry transports a
  linear-first Hilbert product to $H^*$; applying the representation again
  gives $\Phi(\varphi)=\varphi(x)$, exactly canonical evaluation.
- Source: Brezis, Theorem 5.5 and Remark 4, complete relevant passage, printed
  pp. 135--137. Added exact infimum/epsilon, dual-norm, and dual-completeness
  suppliers used by the argument.
- The zero functional is separated before division; positivity of the minimum,
  the zero space, real trivial conjugation, complex double conjugation, and the
  two applications of the same Countable Choice hypothesis are explicit.
  Precheck, rendercheck, strict selected contract pass; decision `repaired`,
  confidence 1. No open gap.

### Next action

Author `thm-reflexive-spaces-have-rnp`, validating every assumption of the
closed-subspace, dual-reflexivity, separability, and isomorphism suppliers.

### `thm-reflexive-spaces-have-rnp` — repaired

- Claim: under AC, every real or complex reflexive Banach space has RNP.
- Scaffold repair: the original detour through reflexivity and separability of
  the subspace dual did not itself identify the subspace as a separable dual.
  The authored proof instead uses the canonical surjective isometry
  $J_Y:Y\to Y^{**}$ for each closed separable subspace $Y$. Thus $Y^{**}$ is
  a norm-separable dual, has RNP, and transfers RNP back to $Y$; separable
  determination finishes.
- Source: Pisier, Corollary 2.11, printed pp. 41--42. AC explicitly supplies
  relative Hahn--Banach and Countable Choice; the proof uses the correctly
  assumption-labelled relative bidual-isometry supplier rather than the
  published unstated-choice corollary already reported above.
- Zero subspace/target, both scalar fields, canonical rather than abstract
  isomorphism, and all supplier hypotheses are explicit. Precheck,
  rendercheck, strict selected contract pass; decision `repaired`, confidence
  1. No open gap.

### Next action

Author `thm-c0-fails-the-radon-nikodym-property`, calculating the diameter-two
slice witnesses from the $c_0^*=\ell^1$ representation.

### `thm-c0-fails-the-radon-nikodym-property` — repaired

- Claim: under AC, real and complex $c_0$ fail RNP.
- Complete argument: an arbitrary unit-ball slice is represented by an
  $\ell^1$ coefficient sequence. A remote coordinate with sufficiently small
  coefficient can be changed independently to $1$ and $-1$ while retaining
  the strict slice inequality; the two resulting points are distance two.
  Hence every slice of the unit ball has diameter two, so the ball is
  nondentable and the RNP--dentability characterization applies.
- Source: Pisier, remark after Corollary 2.11, printed p. 42, explicitly states
  that $c_0$ fails RNP; the item supplies the direct dentability proof.
  Dependencies examined include the bilinear $c_0^*=\ell^1$ theorem,
  truncation density, the real/complex Banach fact, slice definition, and the
  AC-labelled characterization.
- Zero functional, zero remote coefficient, strict boundary margin, complex
  real-part convention, closed/convex/bounded ball, and exact diameter are
  explicit. Explicit-path precheck, rendercheck, and strict selected contract
  pass; decision `repaired`, confidence 1. No open gap.

### Next action

Author `thm-l-one-of-zero-one-fails-rnp`, checking the exact nondentability or
vector-measure witness and distinguishing the nonatomic $L^1[0,1]$ space from
the RNP sequence space $\ell^1$.

### `thm-l-one-of-zero-one-fails-rnp` — repaired

- Claim: under AC, real and complex $L^1([0,1],\lambda)$ fail RNP.
- Scaffold repair: `def-l-one-of-a-measure` names raw integrable
  representatives, not the Banach quotient required as an RNP target. Replaced
  it by the exact real/complex quotient-norm and completeness interfaces and
  made the restricted Lebesgue measure model explicit.
- Complete argument: $F(t)=[\mathbf1_{(0,t)}]$ is isometric because interval
  measure is length. At every interior $t$, the positive quotients $q_h$ and
  $q_{h/2}$ have $L^1$ distance exactly one, so no norm derivative exists.
  The AC-labelled Lipschitz characterization then gives failure of RNP.
- Source: Cheeger--Kleiner's complete example, introduction, printed pp. 2--3;
  Pisier's confirming remark after Corollary 2.11, printed p. 42.
- Real/complex quotient classes, Banach completeness, the same-ambient
  Lebesgue restriction, endpoint-null changes, every interior point, and exact
  AC/Countable-Choice uses are explicit. Explicit-path precheck, rendercheck,
  and strict selected contract pass; decision `repaired`, confidence 1. No
  open gap.

### Next action

Author `cor-c0-is-not-isomorphic-to-a-dual-space`, verifying separability of
$c_0$ over both fields and transporting RNP across the hypothesized Banach-space
isomorphism.

### `cor-c0-is-not-isomorphic-to-a-dual-space` — repaired

- Claim: under AC, real or complex $c_0$ is not topologically isomorphic to
  the continuous dual of any normed space.
- Complete argument: rational or Gaussian-rational finite-support sequences
  form an explicitly countable dense subset of $c_0$. A hypothesized
  topological isomorphism carries this separability to the dual. The separable
  dual theorem gives RNP there, and isomorphism invariance transfers it to
  $c_0$, contradicting the preceding theorem.
- Source: Pisier, Corollary 2.11 and following remarks, printed pp. 41--42.
  Added exact rational-density, finite-product/countable-union, separability,
  and topological-isomorphism dependencies required by the proof.
- Both scalar fields, continuity of the inverse, the zero-dual case, and AC's
  precise uses are explicit. Explicit-path precheck, rendercheck, and strict
  selected contract pass; decision `repaired`, confidence 1. No open gap.

### Next action

Audit and author `thm-dunford-pettis-for-l-one-on-a-finite-measure-space`,
checking both directions, the real $L^1$ quotient, the role of AC, and every
compactness/duality supplier before completing the A page.

### `thm-dunford-pettis-for-l-one-on-a-finite-measure-space` — repaired

- Claim: under AC, a subset of real $L^1$ on a finite measure space is
  relatively weakly compact iff it is uniformly integrable.
- Scaffold repairs: replaced raw-function $L^1$ language by the quotient
  Banach space and replaced the published unstated-choice canonical-bidual
  supplier by `cor-relative-hahn-banach-bidual-isometry`. AC now explicitly
  supplies DC, Countable Choice, the ultrafilter lemma, and HB at their actual
  uses.
- Complete forward argument: the indicator classes form a complete metric
  space; Baire gives uniform absolute continuity for weakly null sequences;
  weak convergence gives uniform integrability; Eberlein--Smulian turns a
  hypothetical non-uniform family into the contradiction sequence. Complete
  reverse argument: $L^2$ truncations approximate the family uniformly by
  weakly compact sets, and the compact weak-star bidual closure is trapped at
  every norm radius around the norm-closed canonical image.
- Source: Brezis, Theorem 4.30 and Problem 23 A--B with partial solutions,
  complete relevant passages, printed pp. 115, 466--468, and 544--547.
  Dependencies examined include the real $L^1$ quotient/duality and
  completeness results, Eberlein--Smulian, Baire, $L^2$ reflexivity and weak
  compactness, Alaoglu, weak/weak-star topology, and compactness calculus.
- Empty family, null measure, finite initial sequence terms, positive
  truncation levels, arbitrary approximation radii, real-only duality, and
  exact choice uses are explicit. Explicit-path precheck, rendercheck, and
  strict selected contract pass; decision `repaired`, confidence 1. No open
  gap.

### Next action

Author `ex-bochner-integral-of-a-countably-valued-function`, calculating its
simple truncations, integrability criterion, and integral rather than merely
asserting the expected series formula.

### `ex-bochner-integral-of-a-countably-valued-function` — repaired

- Claim: disjoint countably valued data with
  $\sum_n\mu(A_n)\lVert x_n\rVert<\infty$ define a Bochner-integrable function,
  with the unrestricted and every restricted integral equal to the associated
  absolutely convergent vector series.
- Complete calculation: finite simple truncations converge pointwise; monotone
  convergence gives the exact $L^1$ tail; the Bochner definition identifies
  the vector limit. The manifest now directly registers the simple-integral,
  Bochner-definition, and monotone-convergence suppliers missing from the
  scaffold.
- Source: Teschl Section 11.6, formulas (11.40)--(11.44) and Lemma 11.28,
  printed pp. 332--333. Empty sets, zero data, one nonzero level,
  infinite-measure zero levels, and Banach completeness of the vector series
  are explicit.
- Explicit-path precheck, rendercheck, and strict selected contract pass;
  decision `repaired`, confidence 1. No open gap.

### Next action

Author `cex-weakly-measurable-need-not-be-strongly-measurable`, checking
countable support in $\ell^2([0,1])$, scalar measurability, completeness of the
Lebesgue domain, and the nonseparable essential range.

### `cex-weakly-measurable-need-not-be-strongly-measurable` — repaired

- Claim: under AC, $t\mapsto e_t$ from the completed Lebesgue unit interval to
  real or complex $\ell^2([0,1])$ is weakly measurable but not strongly
  measurable.
- Scaffold repair: the proposed Hilbert-reflexivity dependency did not state
  that the arbitrary-index target exists or is complete. The item now defines
  its finite-subset norm and proves the norm axioms and completeness locally.
  A finite-coordinate dual estimate proves that every functional's values on
  $(e_t)$ have countable support, so their scalar maps are measurable.
- Failure witness: deleting a null set leaves uncountably many pairwise
  $\sqrt2$-separated unit vectors, which cannot lie in a separable subspace;
  Pettis then rules out strong measurability. The complete trace measure,
  countable/null support, zero functional, both scalar fields, and the exact
  AC-to-Countable-Choice uses are explicit.
- Source: Teschl Section 11.6, range-separability discussion and Theorem 11.34,
  printed pp. 333--336. Explicit-path precheck, rendercheck, and strict selected
  contract pass; decision `repaired`, confidence 1. No open gap.

### Next action

Author `ex-vector-measure-induced-by-an-l-one-function`, applying the density
lemma and calculating a nontrivial countably valued special case including its
variation.

### `ex-vector-measure-induced-by-an-l-one-function` — repaired

- Claim: a Bochner density induces an absolutely continuous norm-countably
  additive vector measure with variation density $\lVert f\rVert$; for
  countably valued disjoint data, both the vector measure and variation are
  given by explicit convergent series on every measurable set.
- Complete calculation: the general result is applied at its exact hypotheses;
  the special case independently uses finite simple truncations, scalar
  monotone convergence, and the Bochner definition. The scaffold gained these
  direct suppliers. An initial attempt to cite the preceding AI-generated
  example was rejected by strict contract policy and removed; the final item
  contains the required mathematics locally.
- Source: Pisier Section 2.1, formulas (2.2)--(2.3) and their complete proof,
  printed pp. 34--35. Empty, zero, one-level, cancellation, and
  infinite-measure zero-level cases are explicit.
- Explicit-path precheck, rendercheck, and strict selected contract pass;
  decision `repaired`, confidence 1. No open gap.

### Next action

Author `ex-hilbert-spaces-have-rnp`, propagating the exact choice assumption
from Hilbert reflexivity into the AC-labelled reflexive-space RNP theorem.

### `ex-hilbert-spaces-have-rnp` — repaired

- Claim: under AC, every real or complex Hilbert space has RNP.
- Argument: AC explicitly supplies Countable Choice for the local
  Riesz/reflexivity theorem, and the same AC hypothesis is retained when the
  reflexive-space RNP theorem is applied. The scaffold manifest was repaired
  to register both assumption suppliers.
- Sources: Brezis Theorem 5.5 and Remark 4, printed pp. 135--137; Pisier
  Corollary 2.11 and following remark, printed pp. 41--42. Both scalar fields,
  zero dimension, arbitrary dimension/nonseparability, and the completeness
  boundary are explicit.
- Explicit-path precheck, rendercheck, and strict selected contract pass;
  decision `repaired`, confidence 1. No open gap.

### Next action

Author `cex-c0-unit-ball-is-not-dentable`, reproducing the exact diameter-two
slice calculation rather than citing RNP failure as a converse shortcut.

### `cex-c0-unit-ball-is-not-dentable` — repaired

- Claim: over either scalar field, every slice of the closed $c_0$ unit ball
  has diameter exactly two, hence the ball is nondentable.
- Scaffold repair and calculation: removed `thm-c0-fails-the-radon-nikodym-property`
  as a non-supplying shortcut and registered the direct $c_0$ definition,
  completeness, truncation, and $c_0^*=\ell^1$ inputs. A remote coefficient
  smaller than the strict slice margin allows one coordinate to be changed to
  $1$ and $-1$, producing two slice points at distance two.
- Source: Pisier's dentability criterion and $c_0$ remark, printed pp. 34 and
  42. Zero functional, zero remote coefficient, strict-boundary margin,
  complex real-part/bilinear-pairing convention, and all closed-ball properties
  are explicit.
- Explicit-path precheck, rendercheck, and strict selected contract pass;
  decision `repaired`, confidence 1. No open gap.

### Next action

Author `rem-l-one-sequence-versus-l-one-nonatomic-rnp`, verifying separately
that $\ell^1$ is a norm-separable dual before contrasting it with the already
proved nonatomic $L^1[0,1]$ obstruction.

### `rem-l-one-sequence-versus-l-one-nonatomic-rnp` — repaired

- Claim: under AC, real and complex sequence $\ell^1$ have RNP, while the
  nonatomic quotient spaces $L^1([0,1],\lambda)$ do not.
- Complete argument: rational/Gaussian-rational finite-support sequences are
  proved countable and norm dense; the isometric identification
  $\ell^1=c_0^*$ and dual completeness put sequence $\ell^1$ under the
  separable-dual theorem. The nonatomic conclusion comes from the separate
  indicator-curve obstruction. The manifest now records the missing AC,
  countability/density, and dual-completeness inputs.
- Source: Pisier, two remarks following Corollary 2.11, printed p. 42. Both
  scalar fields, zero elements, the distinction between sequence and function
  notation, and exact AC/Countable-Choice uses are explicit.
- Explicit-path precheck, rendercheck, and strict selected contract pass;
  decision `repaired`, confidence 1. No open gap.

### Next action

Author `rem-rnp-is-not-the-scalar-radon-nikodym-theorem`, spelling out the
different domains, variations, additivity modes, and density notions without
claiming that a scalar theorem proves a vector target property.

### `rem-rnp-is-not-the-scalar-radon-nikodym-theorem` — repaired

- Claim: under AC, the scalar signed-measure theorem supplies exactly the real
  scalar instance, whereas RNP is an additional arbitrary-Banach-target
  property requiring norm-countable additivity, bounded variation, and a
  Bochner density.
- Complete comparison: the scalar common-exhaustion and finite-variation
  hypotheses, measurable $L^1$ density, uniqueness, and $|f|$ variation are
  set beside the vector quantifiers and norm-partition variation. The manifest
  now registers the missing AC, vector-measure definition, and scalar
  variation-density theorem.
- Sources: Pisier Section 2.1, printed pp. 33--35; Bass Theorem 13.4. The real
  scalar overlap, finite versus exhausted control measures, empty/zero cases,
  and absence of an unsupported complex conclusion are explicit.
- Explicit-path precheck, rendercheck, and strict selected contract pass;
  decision `repaired`, confidence 1. No open gap.

### Next action

Author `ex-dunford-pettis-uniformly-integrable-and-concentrating-families`,
proving the dominated-family criterion and calculating the concentrating spike
family on the same finite Lebesgue measure model.

### `ex-dunford-pettis-uniformly-integrable-and-concentrating-families` — repaired

- Claim: under AC, every family dominated by one nonnegative real $L^1$
  function is uniformly integrable and relatively weakly compact, while
  $f_n=n\mathbf1_{(0,1/n)}$ is norm bounded but has neither property.
- Complete calculations: domination supplies a common norm bound and the
  dominator's absolute continuity supplies one common $\delta$. Each spike has
  norm one but has integral one on a set of measure $1/n$, explicitly violating
  uniform absolute continuity. Dunford--Pettis supplies the two compactness
  conclusions. The scaffold gained the exact Lebesgue restriction, quotient,
  interval-length, simple-integral, and choice dependencies.
- Source: Brezis Theorem 4.30 and Problem 23 with complete relevant solutions,
  printed pp. 115, 466--468, and 544--547. Empty family, zero dominator,
  endpoint-null changes, real-only scope, and exact AC/Countable-Choice uses
  are explicit.
- Explicit-path precheck, rendercheck, and strict selected contract pass;
  decision `repaired`, confidence 1. No open gap.

### Next action

Assemble the two owned pages in manifest order, then refresh coverage and the
containing batch's dependency-ledger row before running pair-wide checks.

### Owned pages — authored

- `banach-valued-integration-and-the-radon-nikodym-property` lists all 30 A
  items in prerequisite order and summarizes the simple/Bochner integral,
  vector-measure/dentability, interval/differentiability, RNP examples, and
  Dunford--Pettis arcs.
- `banach-valued-integration-and-the-radon-nikodym-property-examples` lists all
  eight B items in manifest order and summarizes their concrete calculations
  and counterexamples.
- Explicit-path rendercheck passes for both pages. The repository has no
  `tools/pagecheck.mjs`; the attempted optional command failed only because
  that tool does not exist, so it is not reported as a validation pass.
- `coverage-checklist` on the containing batch passes with 2 A pages, 63
  harvested results, 0 errors, and 0 warnings. No additional unplanned item was
  created, so the existing source coverage remains the authoritative batch
  record.

### Next action

Refresh the unchanged empty batch-1 cross-batch input into the unified ledger,
then run dependency, forward-reference, citation, plan, decision, contract,
content-policy, precheck, and render gates on explicit owned paths.

### Final receipt refresh: `def-banach-valued-simple-function-and-integral`

- The initial receipt was stale only because its `justified_by` supplier was
  authored afterward. Rechecked the finished definition and the current
  `lem-banach-valued-simple-integral-is-well-defined` closure.
- Explicit-path precheck, rendercheck, and strict selected contract pass. A
  current `repaired`, confidence-1 item decision is recorded with the exact
  three dependency IDs. No open gap.

### Next action

Refresh `def-bochner-integrable-function` against its now-complete criterion.

### Final receipt refresh: `def-bochner-integrable-function`

- The initial receipt was stale only because its `justified_by` criterion was
  authored afterward. Rechecked the finished definition, norm-limit argument,
  and current `thm-bochner-integrability-criterion` closure.
- Explicit-path precheck, rendercheck, and strict selected contract pass. A
  current `repaired`, confidence-1 item decision is recorded with the exact
  three dependency IDs. No open gap.

### Next action

Refresh `thm-rnp-dentability-characterization` against both completed local
construction lemmas.

### Final receipt refresh: `thm-rnp-dentability-characterization`

- Rechecked both iff directions against the completed dentable-average and
  nondentability-witness lemmas, including the stated AC propagation and
  zero/singleton cases.
- Explicit-path precheck, rendercheck, and strict selected contract pass. A
  current `repaired`, confidence-1 decision is recorded with the exact four
  dependencies. No open gap.

### Next action

Refresh `lem-rnp-is-separably-determined` against the current characterization
and separable-range witness.

### Final receipt refresh: `lem-rnp-is-separably-determined`

- Rechecked both directions against the current characterization and completed
  separable-range density-free witness, including density transport through
  the bounded inclusion and all inherited AC uses.
- Explicit-path precheck, rendercheck, and strict selected contract pass. A
  current `repaired`, confidence-1 decision is recorded with the exact five
  dependencies. No open gap.

### Next action

Refresh `lem-rnp-may-be-tested-on-the-lebesgue-interval` against the completed
Lebesgue-interval witness.

### Final receipt refresh: `lem-rnp-may-be-tested-on-the-lebesgue-interval`

- Rechecked specialization and converse against the completed interval witness,
  including endpoint-null, zero-measure, zero-target, and inherited AC cases.
- Explicit-path precheck, rendercheck, and strict selected contract pass. A
  current `repaired`, confidence-1 decision is recorded with the exact four
  dependencies. No open gap.

### Next action

Refresh `thm-separable-dual-spaces-have-rnp` after its exact rational-density
dependency correction.

### Final receipt refresh: `thm-separable-dual-spaces-have-rnp`

- Registered and rechecked `lem-q-and-irrationals-dense-r`, the exact density
  supplier used to build the real and Gaussian-rational countable test spaces.
  The simultaneous scalar RN representatives, pointwise extension, norm
  measurability, Bochner integrability, and all AC uses remain complete.
- Explicit-path precheck, rendercheck, and strict selected contract pass. A
  current `repaired`, confidence-1 decision is recorded with all 18 examined
  dependencies. No open gap.

### Next action

Refresh `thm-reflexive-spaces-have-rnp` against the current separable-dual and
separable-determination suppliers.

### Final receipt refresh: `thm-reflexive-spaces-have-rnp`

- Rechecked the repaired canonical-bidual route against the current
  separable-determination and separable-dual suppliers. Each closed separable
  subspace is handled through the explicitly AC-labelled relative
  Hahn--Banach bidual isometry, with zero and both-field cases retained.
- Explicit-path precheck, rendercheck, and strict selected contract pass. A
  current `repaired`, confidence-1 decision is recorded with all ten examined
  dependencies. No open gap.

### Next action

Confirm that no owned receipt remains stale, refresh the batch dependency
ledger, and run final pair-wide validation.

### Owned decision closure

- At this checkpoint the final Step 3 checker reported no open scope or item
  work for either owned page or any of the original 37 items. The later-added
  local choice lemma is governed by the dispatch-created-item exception.

### Next action

Refresh the dependency ledger and run the final explicit-path and batch/plan
gates, recording all owned or pre-splice mismatches exactly.

### `lem-ac-supplies-countable-and-dependent-choice-for-banach-integration` — added and repaired

- The forward-reference gate confirmed that ten assigned consumers depended
  load-bearingly on `thm-choice-implies-dependent-implies-countable-choice`,
  whose planned page has order 665, later than this page at order 288.069.
  A load-bearing forward reference is forbidden on spine theorems, so merely
  declaring `forward_refs` could not repair the scaffold.
- Claim and proof: AC gives Countable Choice by restricting one choice
  function to the image of a countable family. For a serial relation, AC gives
  one choice function on all successor fibres; ordinary recursion iterates the
  resulting fixed self-map from the prescribed point. This proves precisely
  the Countable Choice and prescribed-start DC used below.
- Source: Jech, *The Axiom of Choice*, §2.4, printed pp. 20--23. The complete
  relevant passage was read; it gives the exact Countable Choice and DC
  formulations and proves DC implies Countable Choice. The stronger direct AC
  restrictions are derived in the item rather than attributed to an unstated
  excerpt.
- Dependencies: `def-axiom-of-choice`, `def-countable-choice`,
  `def-dependent-choice`, and `thm-recursion`, all already available before
  this page. Repeated sets, empty subfamilies, singleton fibres, singleton
  serial spaces, the excluded empty serial domain, and the prescribed start
  are explicit.
- Registered in the A manifest/page, coverage (with a genuine reused
  full-book fetch stamp), proof-contract scope and contract. Explicit precheck,
  rendercheck, strict contract, coverage, and content-policy pass. The current
  enriched scope is recorded `sufficient`. In accordance with the explicit
  dispatch-created-item exception, no Step 3 self-review item receipt is kept;
  the engine supplies its post-author item certification after successful
  dispatch. No open gap.

### Next action

Rewire and recertify each of the ten affected consumers, one at a time, from
the later general theorem to this preceding local supplier.

### Forward-order refresh: `thm-rnp-lipschitz-differentiability-characterization`

- Replaced the later AC hierarchy theorem with the preceding local lemma.
  The exact DC/Countable-Choice use in the two-direction proof is unchanged.
- Contract refreshed; explicit precheck, rendercheck, and strict contract pass.
  Current `repaired`, confidence-1 decision recorded with all 17 dependencies.
  No open gap.

### Next action

Rewire `thm-separable-dual-spaces-have-rnp`.

### Forward-order refresh: `thm-separable-dual-spaces-have-rnp`

- Replaced the later choice-hierarchy theorem with the preceding local lemma.
  Also made `lem-q-and-irrationals-dense-r`, already present in the manifest,
  explicit in the item facts where rational and Gaussian-rational spans are
  proved dense.
- Contract refreshed; explicit precheck, rendercheck, and strict contract pass.
  Current `repaired`, confidence-1 decision recorded with all 18 dependencies.
  No open gap.

### Next action

Rewire `thm-reflexive-spaces-have-rnp`.

### Forward-order refresh: `thm-reflexive-spaces-have-rnp`

- Replaced the later choice-hierarchy theorem with the preceding local lemma;
  the canonical-bidual and separable-determination argument is unchanged.
- Contract refreshed; explicit precheck, rendercheck, and strict contract pass.
  Current `repaired`, confidence-1 decision recorded with all ten dependencies.
  No open gap.

### Next action

Rewire `thm-l-one-of-zero-one-fails-rnp`.

### Forward-order refresh: `thm-l-one-of-zero-one-fails-rnp`

- Replaced the later choice-hierarchy theorem with the preceding local lemma;
  the indicator-curve obstruction and quotient-space hypotheses are unchanged.
- Contract refreshed; explicit precheck, rendercheck, and strict contract pass.
  Current `repaired`, confidence-1 decision recorded with all 14 dependencies.
  No open gap.

### Next action

Rewire `cor-c0-is-not-isomorphic-to-a-dual-space`.

### Forward-order refresh: `cor-c0-is-not-isomorphic-to-a-dual-space`

- Replaced the later choice-hierarchy theorem with the preceding local lemma;
  rational-density, separability transfer, and RNP contradiction are unchanged.
- Contract refreshed; explicit precheck, rendercheck, and strict contract pass.
  Current `repaired`, confidence-1 decision recorded with all 14 dependencies.
  No open gap.

### Next action

Rewire `thm-dunford-pettis-for-l-one-on-a-finite-measure-space`.

### Forward-order refresh: `thm-dunford-pettis-for-l-one-on-a-finite-measure-space`

- Replaced the later choice-hierarchy theorem with the preceding local lemma;
  the proof still identifies separately its DC/Countable-Choice, ultrafilter,
  and Hahn--Banach uses.
- Contract refreshed; explicit precheck, rendercheck, and strict contract pass.
  Current `repaired`, confidence-1 decision recorded with all 29 dependencies.
  No open gap.

### Next action

Rewire `cex-weakly-measurable-need-not-be-strongly-measurable`.

### Forward-order refresh: `cex-weakly-measurable-need-not-be-strongly-measurable`

- Replaced the later choice-hierarchy theorem with the preceding local lemma;
  the arbitrary-index $\ell^2$ construction and countable-support argument are
  unchanged.
- Contract refreshed; explicit precheck, rendercheck, and strict contract pass.
  Current `repaired`, confidence-1 decision recorded with all ten dependencies.
  No open gap.

### Next action

Rewire `ex-hilbert-spaces-have-rnp`.

### Forward-order refresh: `ex-hilbert-spaces-have-rnp`

- Replaced the later choice-hierarchy theorem with the preceding local lemma;
  the Hilbert-reflexivity-to-RNP deduction is unchanged.
- Contract refreshed; explicit precheck, rendercheck, and strict contract pass.
  Current `repaired`, confidence-1 decision recorded with all four dependencies.
  No open gap.

### Next action

Rewire `rem-l-one-sequence-versus-l-one-nonatomic-rnp`.

### Forward-order refresh: `rem-l-one-sequence-versus-l-one-nonatomic-rnp`

- Replaced the later choice-hierarchy theorem with the preceding local lemma;
  the separable-dual sequence-space argument and nonatomic contrast are
  unchanged.
- Contract refreshed; explicit precheck, rendercheck, and strict contract pass.
  Current `repaired`, confidence-1 decision recorded with all 13 dependencies.
  No open gap.

### Next action

Rewire `ex-dunford-pettis-uniformly-integrable-and-concentrating-families`.

### Forward-order refresh: `ex-dunford-pettis-uniformly-integrable-and-concentrating-families`

- Replaced the later choice-hierarchy theorem with the preceding local lemma;
  the dominator and spike calculations are unchanged.
- Contract refreshed; explicit precheck, rendercheck, and strict contract pass.
  Current `repaired`, confidence-1 decision recorded with all 12 dependencies.
  No open gap.

### Next action

Run the forward-reference gate again, then refresh every receipt transitively
invalidated by the new local supplier before the final pair-wide checks.

### Dependency parity refresh: `cor-c0-is-not-isomorphic-to-a-dual-space`

- The final manifest/frontmatter comparison found that the item cited and used
  `lem-q-and-irrationals-dense-r` while the manifest alone omitted it. Added
  that existing earlier supplier to the manifest; no proof text changed.
- Item and manifest dependency declarations now agree for all 38 owned items.
  Explicit precheck, rendercheck, and strict contract pass; the current
  `repaired`, confidence-1 decision lists all 14 dependencies. No open gap.

### Next action

Run all final gates across the 38 owned items and two pages, refresh the empty
cross-batch ledger input, and record the expected pre-splice plan difference.

## Final validation and handoff

- Completed inventory: 30 A items and eight B items. The only new item beyond
  the immutable pre-author inventory is
  `lem-ac-supplies-countable-and-dependent-choice-for-banach-integration`,
  added to close the forbidden load-bearing forward edge before all consumers.
  Both owned pages agree exactly with their manifests and preserve manifest
  order.
- Completed A IDs, in prerequisite order:
  `def-banach-valued-simple-function-and-integral`,
  `lem-banach-valued-simple-integral-is-well-defined`,
  `def-strongly-measurable-banach-valued-function`,
  `thm-pettis-measurability-criterion-for-strong-measurability`,
  `def-bochner-integrable-function`, `thm-bochner-integrability-criterion`,
  `lem-bochner-integral-norm-inequality`, `thm-bochner-dominated-convergence`,
  `thm-bounded-linear-maps-commute-with-bochner-integration`,
  `def-banach-valued-vector-measure-and-variation`,
  `lem-bounded-variation-of-a-vector-measure-is-a-finite-measure`,
  `lem-bochner-density-defines-an-absolutely-continuous-vector-measure`,
  `def-radon-nikodym-property`, `def-dentable-bounded-set-and-slice`,
  `lem-dentable-average-ranges-give-vector-measure-densities`,
  `lem-nondentability-produces-a-vector-measure-without-density`,
  `thm-rnp-dentability-characterization`,
  `lem-rnp-is-invariant-under-banach-space-isomorphism`,
  `lem-rnp-is-separably-determined`,
  `lem-rnp-may-be-tested-on-the-lebesgue-interval`,
  `lem-lipschitz-curves-and-dominated-interval-vector-measures`,
  `lem-ac-supplies-countable-and-dependent-choice-for-banach-integration`,
  `thm-rnp-lipschitz-differentiability-characterization`,
  `thm-separable-dual-spaces-have-rnp`,
  `thm-hilbert-spaces-are-reflexive-by-riesz-representation`,
  `thm-reflexive-spaces-have-rnp`,
  `thm-c0-fails-the-radon-nikodym-property`,
  `thm-l-one-of-zero-one-fails-rnp`,
  `cor-c0-is-not-isomorphic-to-a-dual-space`, and
  `thm-dunford-pettis-for-l-one-on-a-finite-measure-space`.
- Completed B IDs, in prerequisite order:
  `ex-bochner-integral-of-a-countably-valued-function`,
  `cex-weakly-measurable-need-not-be-strongly-measurable`,
  `ex-vector-measure-induced-by-an-l-one-function`,
  `ex-hilbert-spaces-have-rnp`, `cex-c0-unit-ball-is-not-dentable`,
  `rem-l-one-sequence-versus-l-one-nonatomic-rnp`,
  `rem-rnp-is-not-the-scalar-radon-nikodym-theorem`, and
  `ex-dunford-pettis-uniformly-integrable-and-concentrating-families`.
- Explicit-path precheck was invoked on all 38 owned item paths and reported
  32 proof-bearing items checked, zero failures; the six definitions were
  parsed but are not proof-layer targets. Rendercheck passed all 38 items and
  both pages (40 paths). Strict proof-contract checking passed 38/38, and
  citecheck passed 38/38.
- Batch content-policy passed on 79 scoped items with zero errors or warnings,
  preserving the sibling pair. Coverage passed with two A pages, 64 harvested
  results, zero errors and zero warnings. Source-fetch checking passed 11/11
  sources; source-backing found all 42 included authored results backed.
- Repo-wide `depcheck` reported zero errors and 269 pre-existing/global
  warnings, with no finding naming an owned item or page. Repo-wide `fwdcheck`
  reported zero errors and zero warnings after the local choice repair. The
  manifest/frontmatter comparison found exact equality of `deps`,
  `justified_by`, and `forward_refs` on all 38 owned items.
- `validate-plan research/plan-spec.json --repo .` passed: declared page order
  is acyclic and consistent with no item cycle, forward reference, B-page
  dependency, or unresolved ID among pages whose plan item lists are present.
  The exact pre-splice mismatch retained for Step 4 is that both owned plan
  pages still have zero items, while the batch manifest has 30 A items and
  eight B items; their `order`, `kind`, `category`, `title`, `companion`, and
  `requires` fields otherwise agree. Step 4 must splice the manifest inventory,
  including the one new local choice lemma and the repaired dependencies.
- `research/phase-2-next-18-batch-1.cross-batch-dependencies.json` remains the
  exact empty array: all assigned consumers use published earlier suppliers or
  suppliers inside this pair. The unified frontier dependency ledger was
  refreshed and deduplicated without altering this result.
- The final Step 3 checker reports current scope and current decisions for all
  37 baseline owned items. Its sole owned work row is the expected
  `current item audit required` row for the dispatch-created local choice
  lemma; the engine's immutable-baseline exception supplies that certification
  after successful dispatch. Remaining run-wide work belongs to sibling pairs;
  no owner-held escalation applies to this pair.
  The observed final-state summary was 18 pairs, 563 items, 371 accepted,
  `closed: false`; filtering to the 38 owned items returned exactly that one
  new-lemma row and no scope or baseline-item row.

Open obligations outside this pair: the serial reconciler must handle the
confirmed published Hahn--Banach AC omission recorded above, and Step 4 must
perform the stated plan splice. No assigned mathematical item remains
unresolved.
