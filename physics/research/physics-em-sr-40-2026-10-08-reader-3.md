# Reader 3 — batch 3

Run: `physics-em-sr-40-2026-10-08`. Role: independent Step 5a reader. This report records
reading, repairs and limitations; it is not a judge, audit or publication stamp.

## Page verdicts

| Page | Reader verdict |
| --- | --- |
| `library/special-relativity/sr-worldlines-and-clocks.md` | Claims and A-page summary are sound after the assigned-item repairs below. No page prose edit was needed. |
| `library/special-relativity/sr-worldlines-and-clocks-examples.md` | Worked items are sound after repair; **hold the page** for its uneditable null-curve terminology defect at lines 42–45. |

## Assigned inventory opened

Every carrier below was opened in full. The geometry and calculus supplier
interfaces were read before their substantive worldline consumers; this report
does not claim a rereview of the entire foundational closure.


### sr-worldlines-and-clocks

- `items/def-sr-regular-causal-curve-and-worldline.md` — unchanged carrier; definition/statement, facts, argument or nonproof exposition, and remarks checked.
- `items/lem-sr-weak-piecewise-causal-integrability.md` — repaired; definition/statement, facts, argument or nonproof exposition, and remarks checked.
- `items/def-sr-proper-time.md` — repaired; definition/statement, facts, argument or nonproof exposition, and remarks checked.
- `items/def-sr-piecewise-proper-time.md` — unchanged carrier; definition/statement, facts, argument or nonproof exposition, and remarks checked.
- `items/lem-sr-piecewise-proper-time-reparametrization-invariance.md` — unchanged carrier; definition/statement, facts, argument or nonproof exposition, and remarks checked.
- `items/lem-sr-proper-time-parametrization.md` — repaired; definition/statement, facts, argument or nonproof exposition, and remarks checked.
- `items/lem-sr-proper-time-reparametrization-invariance.md` — repaired; definition/statement, facts, argument or nonproof exposition, and remarks checked.
- `items/def-sr-four-velocity-and-four-acceleration.md` — repaired; definition/statement, facts, argument or nonproof exposition, and remarks checked.
- `items/thm-sr-proper-time-and-observer-decomposition.md` — repaired; definition/statement, facts, argument or nonproof exposition, and remarks checked.
- `items/post-sr-free-trajectories-and-clock-hypothesis.md` — repaired; definition/statement, facts, argument or nonproof exposition, and remarks checked.
- `items/pthm-sr-four-velocity-norm-and-orthogonality.md` — repaired; definition/statement, facts, argument or nonproof exposition, and remarks checked.

### sr-worldlines-and-clocks-examples

- `items/ex-sr-clock-at-rest-in-a-chart.md` — repaired; definition/statement, facts, argument or nonproof exposition, and remarks checked.
- `items/ex-sr-proper-time-of-a-straight-worldline.md` — repaired; definition/statement, facts, argument or nonproof exposition, and remarks checked.
- `items/ex-sr-proper-time-reparametrization.md` — unchanged carrier; definition/statement, facts, argument or nonproof exposition, and remarks checked.
- `items/ex-sr-four-velocity-and-acceleration-of-a-circular-worldline.md` — repaired; definition/statement, facts, argument or nonproof exposition, and remarks checked.
- `items/ex-sr-observer-split-worked.md` — unchanged carrier; definition/statement, facts, argument or nonproof exposition, and remarks checked.
- `items/cex-sr-null-curves-have-no-proper-time-parametrization.md` — repaired; definition/statement, facts, argument or nonproof exposition, and remarks checked.
- `items/cex-sr-spacelike-curves-have-no-proper-time.md` — repaired; definition/statement, facts, argument or nonproof exposition, and remarks checked.
- `items/cex-sr-past-directed-timelike-parametrization-is-not-a-worldline.md` — repaired; definition/statement, facts, argument or nonproof exposition, and remarks checked.

## Repairs and exact reasons

| Carrier | Defect and repair | Mathematical/source evidence |
| --- | --- | --- |
| `lem-sr-weak-piecewise-causal-integrability` | The original steps 4.3 and 5.1 pointed to the time-coordinate endpoint calculation instead of the generic domination argument. Corrected those references, adopted mechanically equivalent canonical phase numbering (now steps 5.1 and 6.1), and changed the final remark's open-cone membership to closed-cone membership. | Steps 4.1–4.2 prove finite improper integrals for every continuous nonnegative density dominated by the time derivative. A future null straight line has null displacement, so the correct general conclusion is membership in `cl(C+)` minus zero, not `C+`. The finite quotient-tangent class is unchanged. |
| `def-sr-proper-time` | Corrected the sign when replacing the base point, the density/factor and interval in the integral-function explanation, and the claim that a single null point forces the whole integral to be constant. Restricted the worldline invariance sentence to positive derivatives and used the actual supplier heading rather than a nonexistent clause label. | Oriented additivity gives `tau_new(s)=tau_old(s)-tau_old(s1)`. The increment is the integral of `c^-1 sqrt(g_x)` on `[a,b]`. An isolated zero of a continuous nonnegative density does not force its integral to be constant. The null-curve density vanishes identically. |
| `lem-sr-proper-time-parametrization` | Repaired the affine/vector type equality in step 10.1. | The coordinate representative is `y=x_A o x`; the affine curve is `o+E(y)`, not `E(y)`. Its displacement difference quotients are `E` applied to coordinate quotients, proving the same derivative formula. |
| `lem-sr-proper-time-reparametrization-invariance` | Repaired the title to distinguish the broad length identity from proper-time invariance for regular increasing maps. | The existing proof retains vanishing derivatives and decreasing maps for the broad identity; an actual composed worldline requires positive derivative everywhere. No theorem branch was removed. |
| `def-sr-four-velocity-and-four-acceleration` | Made the previously compressed C1 regularity justification for the denominator explicit. | For C2 coordinates, `g_x` is C1 by the finite quadratic expression; positivity and the square-root chain rule make `tau'` C1. The quotient/product rules then give continuous `U'` and `A`. |
| `thm-sr-proper-time-and-observer-decomposition` | Made the basis of step 1.2 future before using positive time coordinates; replaced the unsupported transfer of spatial Cauchy–Schwarz to an arbitrary observer complement in step 4.3 by the short quadratic proof; corrected the unit-hyperboloid subject and made the spatial identification of relative velocity explicit. | Flip the first orthonormal vector if necessary using the two-cone description. On the positive-definite complement, evaluate `eta(w-tz,w-tz)>=0` at `t=eta(w,z)/eta(z,z)` to obtain Cauchy–Schwarz and the triangle inequality. It is `U/c`, not dimensional `U`, that has squared norm -1. A rest-space vector has chart coordinates `(0,w)`. |
| `post-sr-free-trajectories-and-clock-hypothesis` | Specified the free curve's interval and base point and corrected source notes which blurred the smooth literature with the locally adopted weak piecewise class. | The sources below describe the smooth conventions. The weak quotient-tangent extension is explicitly adopted here and has earlier local integrability/substitution support; it is not attributed verbatim to those sources. No empirical claim or clock postulate was derived. |
| `pthm-sr-four-velocity-norm-and-orthogonality` | Corrected Statement (ii), step 1.2 and scope wording from unit dimensional velocity to unit dimensionless `U/c`; added the exact proper-time derivative supplier to L4 and dependency roles. | `eta(U,U)=-c^2` and `eta(U/c,U/c)=-1`. The derivative formula is established in `lem-sr-proper-time-parametrization`, whereas its definition expressly defers that proof. |
| `ex-sr-clock-at-rest-in-a-chart` | Specified `c>0`, spatial data and the parameter domain R in the example and Given. | The explicit affine path is globally smooth; its constant future tangent gives the displayed proper time and zero acceleration. |
| `ex-sr-proper-time-of-a-straight-worldline` | Specified the global domain and positive c, and corrected the type of relative velocity in the example and step 4.1. | `c h(u)/gamma` is `(0,3c/5,0,0)` in the rest subspace; its spatial coordinate triple is `(3c/5,0,0)`. All rational values remain unchanged. |
| `ex-sr-four-velocity-and-acceleration-of-a-circular-worldline` | Specified the parameter domain and positive c; defined sine/cosine by an exact earlier supplier and declared the derivative, Pythagorean and chain-rule prerequisites in L6 and metadata. | The imported power-series definition, derivative theorem and parity/Pythagorean corollary give smoothness, both differentiations and constant speed. Their raw bytes match the pinned import record. Both omega=0 and the nonzero specialization are retained. |
| `cex-sr-null-curves-have-no-proper-time-parametrization` | Replaced an outside-domain proper-time function with the explicit formal length integral; specified the global domain; proved that every scalar multiple remains null; corrected the coordinate origin offset and separated the geometric speed from a physical light interpretation. | `L(s)=c^-1 integral_0^s 0=0`, while the restricted proper-time definition assigns no function to this null curve. Bilinearity gives `eta(lambda k,lambda k)=0`. Coordinates are `x_A(p)+(s,s,0,0)`, so the coordinate speed is c without invoking a physical postulate. |
| `cex-sr-spacelike-curves-have-no-proper-time` | Specified the event and global curve domain. | The explicit constant tangent has squared norm 3; its proposed proper-time radicand is -3 and has no real square root. |
| `cex-sr-past-directed-timelike-parametrization-is-not-a-worldline` | Repaired the false same-image assertion in Given and step 2.1. | On `[0,1]`, `p-sd` and `p+sd` have different images. The actual orientation reversal is `z(s)=p-d+sd=x(1-s)`; it has the same image, opposite future tangent and the same constant length density. |

The affected contract file is
`research/physics-em-sr-40-2026-10-08-batch-3.proof-contracts.json`.
Refreshed changed derivations, their numbered inputs and every affected fact use;
refreshed stale exact quotes throughout the batch, including quotes affected by
other readers' supplier corrections. Added the circular calculus citations and
the physical theorem's derivative citation. Corrected the null-extension,
endpoint and pointwise-iff boundary records. The postulate's nonproof source
review now distinguishes the local weak-class extension. Definition carriers
have no proof worksheets in this batch; their changed interfaces are recorded
here and in their consuming contracts. No judge record was present on any
changed carrier; none was created or retained as a new certification.

## Uneditable finding

`sr-worldlines-and-clocks-examples`, body lines 42–45: the final paragraph
assigns “constant proper time” to a future null line. This conflicts with the
restricted domain of `def-sr-proper-time` and with the repaired counterexample,
which explicitly uses a constant **formal length integral** and states that the
proper-time function is undefined on the null curve. Replace those words with
“constant formal length integral.” Class: **ill-formed**, severity: **fatal**
(the defective subject is page prose, not a short proof omission). The page
remains present and unchanged because B-page prose is outside this reader's
repair scope. This is the only outstanding JSON finding.

## Historical supplier defects corrected concurrently

I initially read the batch-1 suppliers
`def-sr-si-units-and-coordinate-conventions` (Definition clause 1 and Status)
and `post-sr-ideal-clocks-and-light` (Postulate clause ii), which called the SI
numerical value of c empirical. The observed raw hashes were respectively
`da887998c9dde9875a57ea4241a09afa8ad5e85a232407e63664eaba9a86fb26` and
`3b204ec83ed6ca7c7551fc11698dff4fca748d656bed60653f938f0437080661`.
The authoritative [BIPM metre definition](https://www.bipm.org/en/si-base-units/metre)
states the exact SI relation c=299792458 m/s; measurement realization and model
applicability remain empirical questions.

The owning reader corrected both while this review was underway. I opened the
updated passages and checked their use by the assigned postulate and physical
theorem; both now separate exact numerical unit convention from physical
applicability. Current checked raw hashes are
`083ed42bffb1207a3bfa1ab067cad6ea78d32e7ae434e8401a146faaa268deaa` and
`3f69ebfcd81c72a51574fd5ccf0cb991305ef9fad61e96458c90d688c892594e`.
I did not edit either supplier and do not claim their corrected bytes are the
observed defective bytes. No immutable old-byte snapshot was recovered; the
historical readings and hashes above are the retained evidence. No live defect
of this kind remains to route.

## Consumer review

The dimensional normalization correction in the physical theorem has no direct
item consumers in the current workspace. The free-trajectory postulate's domain
clarification preserves the same straight histories and weak-piecewise reading
rule. Checked the affected uses in its assigned physical theorem and the
outside-batch direct consumers `rem-sr-twin-acceleration-and-synchronization-caveats`,
`pthm-sr-same-endpoint-clock-comparison`, and `texp-sr-piecewise-inertial-twin-reunion`:
the latter three consume clause (ii)'s unchanged weak-piecewise reading rule,
and their conditional qualifications remain compatible. Those were targeted
interface checks, not whole-proof reviews of another batch, and no outside
carrier was changed.

## Source passages read

- [Carroll, Lecture Notes on General Relativity](https://arxiv.org/pdf/gr-qc/9712019),
  printed pp.25–27, equations (1.95)–(1.99), read via the retrieved PDF;
  printed pp.68–71, equations (3.47)–(3.59), read in
  `research/first-principles-2026-10-03/relativity/reader-carroll/carroll-layout.txt`.
  Natural-unit normalization is restored to dimensional c explicitly.
- Reall, October 12, 2022, sections2.2–2.3, printed pp.27–30 (PDF28–31),
  equations (2.11)–(2.25), read in
  `research/first-principles-2026-10-03/relativity/reader-gourgoulhon/sources/reall-part3-gr.txt`.
- Crowell, December10,2020, sections3.5–3.7, pp.60–68, read in
  `research/first-principles-2026-10-03/relativity/reader-taylor/source/crowell-sr.txt`.
  The projection and velocity/acceleration conventions require the documented
  conversion from (+---), c=1 to (-+++), x0=ct. The Archive PDF retrieval failed
  in the browser; no new full-text retrieval is claimed for that URL.
- BIPM's current metre definition was retrieved and read to resolve the SI
  question. The local cached relativity texts were inspected directly, rather
  than accepting prior reading ledgers as a verdict.

## Opened supplier inventory

All entries below refer to `items/<id>.md`. For external suppliers, reading was
of the definition/statement and relevant argument or used clause; this inventory
does not assert full transitive audits. The draft affine/Lorentz suppliers and
their argument sections were inspected; published calculus interfaces were
matched to the exact uses in the assigned proofs.


### Affine, Lorentz, frame and physical interfaces

- `def-vector-space`
- `def-linear-isomorphism-and-invertible-linear-map`
- `def-affine-space-and-displacement`
- `def-dimension`
- `def-bilinear-symmetric-skew-and-alternating-forms`
- `def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form`
- `def-definiteness-inertia-and-signature-data-over-the-reals`
- `def-lorentz-form-and-inertia`
- `def-causal-classification-of-lorentz-vectors`
- `def-time-orientation-and-future-causal-sets`
- `def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space`
- `def-sr-affine-minkowski-model`
- `thm-sylvesters-law-of-inertia`
- `lem-lorentz-form-has-orthonormal-basis`
- `def-orientation-of-a-finite-dimensional-real-vector-space`
- `prop-orientations-and-positive-basis-classes-agree-in-positive-dimension`
- `thm-unique-coordinates-with-respect-to-an-ordered-basis`
- `def-inertial-frame-and-inertial-chart`
- `thm-determinant-sign-detects-orientation-change`
- `lem-timelike-cone-has-two-convex-components`
- `lem-future-oriented-inertial-frames-exist`
- `lem-affine-minkowski-charts-form-a-smooth-atlas`
- `def-spatial-euclidean-structure-of-an-inertial-frame`
- `def-lorentz-orthogonality-and-orthogonal-complement`
- `def-linear-map`
- `thm-cauchy-schwarz-finite`
- `def-sr-si-units-and-coordinate-conventions`
- `post-sr-ideal-clocks-and-light`
- `post-sr-inertial-covariance`

### Continuity, one-variable and integral calculus

- `def-vector-valued-functions-limits-and-continuity`
- `def-vector-valued-derivative-and-integral`
- `def-interval`
- `lem-euclidean-linear-maps-have-matrices-and-are-bounded`
- `cor-differentiable-implies-continuous`
- `thm-continuous-implies-integrable`
- `thm-ftc-second-part`
- `thm-monotonicity-of-the-integral`
- `thm-linearity-of-the-integral`
- `thm-additivity-over-subintervals`
- `thm-norm-inequality-for-the-vector-valued-integral`
- `cor-integrability-of-absolute-values-products-and-lattice-operations`
- `def-complete-ordered-field`
- `thm-real-power-continuity-and-derivatives`
- `thm-algebra-of-continuous-functions`
- `def-rational-power`
- `thm-componentwise-limits-and-continuity`
- `lem-rational-power-monotone`
- `thm-nth-roots-exist`
- `thm-nonnegative-continuous-with-zero-integral-vanishes`
- `lem-integral-elementary-bounds`
- `def-oriented-integral`
- `def-the-integral-function`
- `thm-composition-of-continuous-functions`
- `def-continuity-real`
- `thm-chain-rule`
- `thm-substitution`
- `thm-continuous-inverse`
- `thm-algebra-of-derivatives`
- `cor-mean-value-theorem`
- `thm-ftc-first-part`
- `cor-continuous-image-of-an-interval-is-an-interval`
- `thm-derivative-of-an-inverse`
- `cor-zero-derivative-implies-constant`
- `def-monotone-function`
- `def-derivative`

### Topology, smooth charts and spatial algebra clauses

- `def-convex-subset-of-euclidean-space`
- `cor-triangle-inequality-for-inner-product-norm`
- `ex-convex-subsets-of-rn-are-path-connected`
- `thm-intermediate-value`
- `def-euclidean-inner-product`
- `def-metric-space`
- `def-metric-topology`
- `def-connected-space`
- `def-connected-component-and-quasicomponent`
- `def-subspace-topology-top`
- `thm-path-connected-implies-connected`
- `def-topological-space`
- `def-homeomorphism-and-open-maps`
- `def-topological-manifold-without-boundary`
- `def-smooth-atlas`
- `def-smooth-manifold`
- `def-diffeomorphism-and-local-diffeomorphism-of-manifolds`
- `def-c-r-and-smooth-maps-between-smooth-manifolds`
- `prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure`
- `def-ck-and-multi-index-notation-in-several-variables`
- `thm-algebra-of-total-derivatives`
- `thm-continuous-partial-derivatives-imply-total-differentiability`
- `def-hausdorff-space`
- `def-second-countable-space`
- `thm-metric-hausdorff-separation`
- `thm-rational-points-and-boxes-in-rn`
- `lem-product-topology-on-rn`
- `def-manifold-chart-coordinate-domain-and-coordinate-functions`
- `def-smoothly-compatible-charts`
- `thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas`
- `def-directional-and-partial-derivatives`
- `def-inner-product-space`
- `def-determinant-of-a-square-matrix`

### Trigonometric suppliers and power-series interfaces inspected during supplier search

- `def-real-power-series-and-radius-of-convergence`
- `lem-exponential-series-has-infinite-radius`
- `thm-termwise-differentiation-of-a-real-power-series`
- `cor-power-series-sums-are-smooth-with-coefficient-formula`
- `thm-direct-comparison-test`
- `lem-absolute-convergence-implies-convergence`
- `lem-sine-and-cosine-series-converge-everywhere`
- `def-sine-and-cosine-by-power-series`
- `thm-sine-and-cosine-derivatives`
- `cor-trigonometric-parity-and-pythagorean-identity`
- `thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions`

Also opened the published supplier-home pages
`library/real-analysis/sine-cosine-and-the-definition-of-pi.md` and
`library/real-analysis/fundamental-trigonometric-identities.md`. Only the former
is needed for the newly declared circular prerequisites. Other read-only
context: workspace/root instructions and content model, reader brief, current
owner directions relevant to SR, batch page manifest, batch contracts and the
math-import receipt. The aggregate contract was inspected for its scope/shape;
it was not edited. No rendered Step5 reader evidence bundle was found in the
current owned artifacts; exact carriers and contract clauses were used.

## Validation and limits

- Ran reflow and precheck for every changed carrier in the 14-item inventory
  above, after final edits. Eleven proof-bearing items passed phase checks;
  the postulate passed nonproof structure, and the two definitions returned
  not-applicable for phase proofs. Reflow was unchanged on the final pass.
- `node tools/physics-support/proof-contract.mjs research/physics-em-sr-40-2026-10-08-batch-3.proof-contracts.json --strict --json`
  passed all15 contracted subjects with no errors or warnings.
- Scoped rendercheck passed the14 changed carriers and both assigned pages:
 16 files, no errors or warnings, actual YAML/math parsing used.
- Ran the required single final batched
  `node tools/physics-support/proof-layout.mjs` on all14 changed item paths,
  after all item edits/reflow: **14 items,91 steps,0 defects**.
- A read-only dependency traversal from the19 assigned subjects resolved an
  acyclic logical closure of785 items. This is a structural check, not reading
  or acceptance of all785 arguments. The three new trigonometric supplier
  hashes agree with `research/math-imports.json`.

No item withdrawals were proposed. No imported or published content, another
batch's carrier, page prose, plan-spec or aggregate contract was edited. The
remaining blocker is the B-page wording above. The output findings JSON contains
only that uneditable page defect. Source passages and focused outside-consumer
interfaces, rather than whole books or whole outside batches, were reviewed;
no empirical observations, measurement uncertainty estimates, statistical tests,
source retrievals, independent judgments or whole-corpus audits were invented.
