# Independent reader 3 findings — `frontier-12`, step 6

I read all 61 dispatched items, all four page files, the batch notes, and the
50 proof contracts. I opened the cited on-disk propositions and compared them
with the authored Facts and their uses. The strict mechanical contract gate
also passes 50/50, but the findings below include semantic defects that gate
does not detect.

## Fatal findings

### `def-circular-arcs-circumference-and-diameter`

- **Location:** Definition, especially the first two sentences.
- **Severity:** fatal.
- **Finding:** A circular arc is defined as a **trace** (a set), but “its
  length” is then defined as the path length of an unspecified restriction.
  That length is not determined by the trace.
- **Evidence:** `def-path-polygonal-length-and-rectifiability-in-rn` explicitly
  says that the map, domain, and parametrization are part of a path and that
  its trace is only the image set. In this batch,
  `cex-a-multiple-traversal-has-the-same-circle-trace-but-greater-length`
  exhibits restrictions with the same unit-circle trace and lengths `2 pi`
  and `4 pi`. Thus the later warning about repeated traversal confirms rather
  than removes the ambiguity in the first sentence.
- **Proposed repair:** Define a circular arc as a parametrized restriction (or
  as a trace together with a specified simple once-traversed parameter
  interval). Only then attach path length to that object.

### `thm-line-integrals-under-reversal-and-concatenation`

- **Location:** Statement and the `Given` line.
- **Severity:** fatal.
- **Finding:** The Statement contains the free symbols `f` and `F` but never
  introduces them or assumes the continuity and domain hypotheses required
  for their line integrals to exist. The following `Given` line says “the
  paths and fields in the Statement”, although there are no fields introduced
  in the Statement.
- **Evidence:** `def-scalar-and-vector-line-integrals-along-piecewise-c1-paths`
  defines these integrals for a continuous scalar field and continuous vector
  field on a set containing the path trace. The proof invokes that definition
  and the oriented-reparametrization theorem, whose Statement likewise says
  “for continuous fields on the trace”. Those hypotheses are absent from the
  theorem being proved.
- **Proposed repair:** Quantify a continuous scalar field `f` and continuous
  vector field `F` on the trace of `gamma` for reversal and on the relevant
  union of traces for concatenation.

### `def-closed-and-exact-c1-vector-fields`

- **Location:** Definition of the component list and closedness equation.
- **Severity:** fatal.
- **Finding:** The definition changes the repository's coordinate convention
  from zero-based to one-based: it writes `F=(F_1,...,F_n)` and quantifies
  `1 <= i,j <= n`. This omits coordinate `0` and invokes nonexistent
  coordinate `n` under the cited local definitions.
- **Evidence:** `def-jacobian-matrix-and-gradient` defines the Jacobian with
  `i<n,j<m` and the gradient as
  `(partial_0 f,...,partial_{m-1} f)`. `lem-standard-basis-of-f-n` defines
  `R^n` on `{0,...,n-1}`, expressly says every index starts at zero, and warns
  that importing one-based notation loses one coordinate and introduces a
  vector outside the space. `def-directional-and-partial-derivatives`, cited
  by the new definition, uses those standard basis vectors. For example, at
  `n=1`, `partial_1 F_1` is not a partial derivative supplied by the cited
  interface.
- **Proposed repair:** Write `F=(F_0,...,F_{n-1})` and quantify `i,j<n`
  throughout this definition, its direct Facts, and every downstream explicit
  component calculation.

### `def-positive-orientation-for-elementary-region-boundaries`

- **Location:** Second paragraph of the Definition; downstream manifestation
  in `lem-green-boundary-cancellation-under-finite-gluing`, Statement and step
  2.1.
- **Severity:** fatal.
- **Finding:** The finite-union boundary integral is not defined when the
  surviving boundary has more than one component. The definition deletes
  shared arcs and “retain[s] the orientations of all surviving arcs”, but it
  never defines the integral over that oriented list. It only cites reversal
  and concatenation, and concatenation requires meeting endpoints.
- **Evidence:** A finite elementary Green region is not required to be
  connected and may also have holes, so its surviving exterior arcs need not
  form one parametrized path. The base item
  `def-scalar-and-vector-line-integrals-along-piecewise-c1-paths` defines an
  integral only along one path. The cited concatenation theorem applies to
  paths `alpha,beta:[0,1]` with `alpha(1)=beta(0)` and cannot concatenate
  distinct boundary components. Nevertheless the gluing lemma's step 2.1 says
  concatenation turns the surviving oriented list into
  `integral_(partial D)`, and Green's theorem and the area corollary use that
  undefined quantity.
- **Proposed repair:** Define a finite boundary chain and define its integral
  as the finite sum over all supplied surviving oriented arcs (or over all
  oriented boundary cycles), including the multiple-component case. Then use
  that finite-sum definition, not single-path concatenation, in the gluing
  proof.

### `ex-line-segment-scalar-and-vector-line-integrals`

- **Location:** Example and its `Given` line.
- **Severity:** fatal.
- **Finding:** The displayed Example introduces only `p`, `q`, and `gamma`.
  The symbols `f` and `F` are free, have no declared domains or codomains, and
  are not assumed continuous, although both displayed integrals require those
  hypotheses. The `Given` line inaccurately claims that continuous fields were
  given in the Example.
- **Evidence:** The only cited item, the line-integral Definition, requires a
  continuous scalar field and continuous vector field on a set containing the
  trace. The proof contract then treats these missing hypotheses as `given`;
  they do not occur in the contracted Example text.
- **Proposed repair:** Introduce a continuous scalar field
  `f` and continuous vector field `F` on the segment (or on a set containing
  it), with their scalar/vector codomains, before the formulas.

### `ex-constructing-a-potential-on-an-open-rectangle`

- **Location:** Example, Fact L1, and Verification steps 1.1 and 2.1.
- **Severity:** fatal.
- **Finding:** The coordinate-segment formula and closedness calculation use
  `F_1,F_2`, but the local `R^2` convention has components `F_0,F_1`.
  Consequently `F_2` is not a component of the displayed field under the
  cited interface.
- **Evidence:** The Example explicitly cites
  `def-closed-and-exact-c1-vector-fields`, whose one-based indexing is itself
  defective as documented above, while the published Jacobian/gradient and
  standard-basis definitions are zero-based.
- **Proposed repair:** After repairing the definition, use the first and
  second components as `F_0,F_1` consistently in the integrals, cross-partial
  equation, and gradient verification.

### `cex-vortex-field-is-closed-but-not-exact-on-the-punctured-plane`

- **Location:** Fact L1 and Counterexample step 1.1.
- **Severity:** fatal.
- **Finding:** The indispensable proof that the vortex is closed uses
  `partial_y F_1=partial_x F_2`. Under the cited repository convention for a
  field in `R^2`, `F_2` does not exist, so the text has not established that
  its witness satisfies the refuted statement's “closed” hypothesis.
- **Evidence:** The cited closedness definition uses the same incompatible
  one-based range, while the published gradient/Jacobian interface is
  zero-based. The nonzero loop calculation is otherwise correct.
- **Proposed repair:** Reindex the two components and the cross-partial
  calculation to `F_0,F_1` after repairing the definition.

### `fs-every-closed-c1-field-on-a-connected-open-set-is-exact`

- **Location:** Fact L1 and Refutation step 1.1.
- **Severity:** fatal.
- **Finding:** As in the preceding counterexample, the only verification that
  the vortex is closed uses nonexistent component `F_2` under the cited local
  coordinate convention. Thus the written witness has not met the false
  statement's antecedent as the library defines it.
- **Evidence:** `R^2`, the standard basis, partial derivatives, and gradients
  are all indexed `0,1` on disk; Fact L1 instead imports the defective
  `1,2` equation.
- **Proposed repair:** Reindex the field and cross-partial equation to
  `F_0,F_1` consistently.

## Nonfatal findings

### `thm-archimedean-polygon-perimeter-characterization-of-pi`

- **Location:** Proof step 2.1.
- **Severity:** nonfatal (the missing geometry is a sub-30-second standard
  completion).
- **Finding:** The circumscribed-perimeter formula is attributed to “the two
  tangent lines at adjacent vertices” and immediately to a right triangle,
  without defining which polygon's vertices/tangency points are meant or
  licensing the tangent-radius/right-triangle geometry from a dependency.
  Interpreting these as tangents at adjacent unit-circle contact points makes
  the intended derivation `half-side=tan(pi/n)` correct, but that interpretation
  is not what the step literally says.
- **Proposed repair:** Say “tangents at adjacent contact points on the unit
  circle” and include the one-sentence radius-perpendicular/right-triangle
  derivation.

### `lem-wallis-integrals-recurrence-and-squeeze`

- **Location:** Fact L4 and proof step 1.3.
- **Severity:** nonfatal (the gap closes immediately).
- **Finding:** Step 1.3 says “the integral bounds in [L4]” preserve the
  pointwise inequalities between powers of sine. Fact L4 states only
  linearity and the value of a constant integral. Neither cited proposition
  in L4 states monotonicity of integration.
- **Evidence:** The on-disk proposition that directly supplies the inference
  is `thm-monotonicity-of-the-integral`, which is not cited by this item. One
  can also derive the result quickly from linearity plus nonnegativity of the
  differences, but that derivation is absent.
- **Proposed repair:** Add `thm-monotonicity-of-the-integral` to L4/deps, or
  write the short difference/nonnegativity derivation.

### `thm-path-independence-iff-zero-closed-loop-integrals`

- **Location:** Proof steps 1.2 and 2.1.
- **Severity:** nonfatal (affine normalization closes it quickly).
- **Finding:** The paths `alpha` and `beta` are arbitrary paths quantified by
  the path-independence definition, so their parameter intervals need not be
  `[0,1]`. The expression `alpha*beta^-` and cited concatenation theorem are
  defined only for paths on `[0,1]`.
- **Proposed repair:** Affinely reparametrize both comparison paths to
  `[0,1]` using the preceding oriented-reparametrization theorem before
  concatenating them (with the singleton case handled separately).

### `thm-path-independent-field-has-a-potential-by-line-integrals`

- **Location:** Proof steps 1.2 and 2.1.
- **Severity:** nonfatal (the same affine normalization is routine).
- **Finding:** Step 1.2 appends the coordinate segment `sigma_q:[0,1]` to
  “any path” from `a` to `x`. Path-connectedness does not say that chosen path
  has domain `[0,1]`, while the cited concatenation operation requires both
  inputs to have that domain.
- **Proposed repair:** Choose or affinely reparametrize the first path on
  `[0,1]` before applying concatenation.

### `cor-potentials-differ-by-a-componentwise-constant`

- **Location:** Fact L1 (also the term used in the Statement).
- **Severity:** nonfatal.
- **Finding:** L1 says the cited definition states what a “piecewise-C1 path
  component” is. The cited
  `def-piecewise-c1-path-connected-conservative-and-path-independent` only
  defines when an entire open set is path-connected; it never defines path
  components or their equivalence classes.
- **Evidence:** The proof uses the standard intended relation “joined by a
  piecewise-C1 path”, so the mathematical result is sound once that one-line
  definition is supplied, but the citation is not faithful as written.
- **Proposed repair:** Define the path-equivalence relation/components inline
  or add a dependency that actually defines them.

### `thm-unit-semicircle-arc-length-is-pi` — proof-contract evidence

- **Location:** `frontier-12-batch-4.proof-contracts.json`, boundary case
  `degenerate` for this item.
- **Severity:** nonfatal.
- **Finding:** The contract marks `degenerate` as checked using the unit-radius
  Statement and proof step 4.1 about translation, rotation, reversal, and
  monotone reparametrization. None of that evidence treats a degenerate
  parameter or radius; radius is fixed at `1` and the displayed interval is
  nondegenerate.
- **Proposed repair:** Mark this boundary not applicable with the actual
  exclusion, unless a specific degenerate reading is intended and added.

### `thm-scalar-and-vector-line-integral-estimates` — proof-contract evidence

- **Location:** proof contract, boundary case `empty`.
- **Severity:** nonfatal.
- **Finding:** The contract marks `empty` checked using proof step 4.1, but
  that step checks `M=0` and `L(gamma)=0`. Neither is an empty family, carrier,
  or path, and the Statement has no empty object parameter.
- **Proposed repair:** Mark `empty` not applicable with an item-specific
  reason; retain step 4.1 for the zero/degenerate rows.

### `cor-scalar-line-integral-of-one-is-arc-length` — proof-contract evidence

- **Location:** proof contract, especially boundary case `degenerate`.
- **Severity:** nonfatal.
- **Finding:** The contract anchors the degenerate case to step 2.1, but step
  1.1 (on which 2.1 depends) explicitly assumes a nondegenerate interval. The
  singleton and constant-path cases are actually discharged only in step 3.1.
- **Proposed repair:** Anchor the degenerate case to step 3.1 (and likewise
  use it for any zero row intended to mean zero speed/length).

### `cor-conservative-fields-are-path-independent-and-have-zero-circulation` — proof-contract evidence

- **Location:** proof contract, boundary cases `zero` and `degenerate`.
- **Severity:** nonfatal.
- **Finding:** Both rows cite step 2.1, which only identifies the already
  proved equal-endpoint comparison as path independence. The zero closed-loop
  calculation is in step 1.2, and the no-connectedness boundary observation
  is in step 3.1.
- **Proposed repair:** Re-anchor the zero/closed-loop boundary evidence to
  step 1.2 (and step 3.1 if the intended degeneracy is disconnected domains).

## Coverage

Fully read, with every proof step and direct Fact citation checked on disk:

- `pi-the-equivalent-characterizations` (14/14):
  `def-circular-arcs-circumference-and-diameter`,
  `def-riemann-area-between-continuous-graphs`,
  `thm-pi-zero-and-period-characterizations`,
  `thm-unit-semicircle-arc-length-is-pi`,
  `thm-circle-circumference-diameter-ratio-is-pi`,
  `thm-archimedean-polygon-perimeter-characterization-of-pi`,
  `thm-disc-area-is-pi-r-squared`,
  `thm-gregory-leibniz-series-for-pi-from-a-finite-remainder`,
  `lem-wallis-integrals-recurrence-and-squeeze`,
  `thm-wallis-product-for-pi`,
  `cor-central-binomial-coefficient-asymptotic-from-wallis`,
  `lem-viete-finite-cosine-product-and-nested-radicals`,
  `thm-viete-product-for-pi`, and
  `thm-pi-equivalent-characterizations-ledger`.
- `pi-the-equivalent-characterizations-examples` (7/7):
  `ex-unit-circle-pi-calibration-table`,
  `ex-gregory-leibniz-partial-sums-with-certified-error`,
  `ex-wallis-partial-products-and-integral-bounds`,
  `ex-viete-first-nested-radical-approximants`,
  `fs-any-positive-zero-of-sine-characterizes-pi`,
  `fs-circumference-to-radius-ratio-is-pi`, and
  `cex-a-multiple-traversal-has-the-same-circle-trace-but-greater-length`.
- `line-integrals-and-the-gradient-theorem` (31/31):
  `def-piecewise-c1-path-operations-and-oriented-reparametrizations`,
  `def-scalar-and-vector-line-integrals-along-piecewise-c1-paths`,
  `lem-line-integrals-are-independent-of-the-piecewise-c1-partition`,
  `thm-line-integrals-under-oriented-reparametrization`,
  `thm-line-integrals-under-reversal-and-concatenation`,
  `thm-scalar-and-vector-line-integral-estimates`,
  `cor-scalar-line-integral-of-one-is-arc-length`,
  `cor-arc-length-accumulation-derivative-is-speed`,
  `def-piecewise-c1-path-connected-conservative-and-path-independent`,
  `thm-gradient-theorem-for-line-integrals`,
  `cor-conservative-fields-are-path-independent-and-have-zero-circulation`,
  `thm-path-independence-iff-zero-closed-loop-integrals`,
  `thm-path-independent-field-has-a-potential-by-line-integrals`,
  `thm-conservative-path-independent-and-zero-loop-equivalence`,
  `cor-potentials-differ-by-a-componentwise-constant`,
  `lem-potentials-glue-over-a-path-connected-overlap`,
  `def-closed-and-exact-c1-vector-fields`,
  `lem-clairaut-for-c2-potentials-by-rectangular-differences`,
  `thm-exact-c1-vector-fields-are-closed`,
  `def-star-shaped-open-subset-of-rn`,
  `thm-poincare-lemma-for-star-shaped-domains`,
  `cor-closed-exact-and-conservative-equivalence-on-star-shaped-domains`,
  `def-type-i-type-ii-and-elementary-green-regions`,
  `def-positive-orientation-for-elementary-region-boundaries`,
  `lem-green-type-i-boundary-identity`,
  `lem-green-type-ii-boundary-identity`,
  `lem-green-boundary-cancellation-under-finite-gluing`,
  `thm-greens-theorem-for-finite-unions-of-elementary-regions`,
  `cor-area-as-a-line-integral-for-elementary-regions`,
  `rem-greens-theorem-jordan-domain-limitation`, and
  `rem-domain-hypotheses-for-closed-versus-exact`.
- `line-integrals-and-the-gradient-theorem-examples` (9/9):
  `ex-scalar-line-integral-over-a-unit-semicircle`,
  `ex-line-segment-scalar-and-vector-line-integrals`,
  `ex-gradient-theorem-for-a-polynomial-potential`,
  `ex-constructing-a-potential-on-an-open-rectangle`,
  `cex-the-one-form-y-dx-is-path-dependent`,
  `cex-vortex-field-is-closed-but-not-exact-on-the-punctured-plane`,
  `fs-every-closed-c1-field-on-a-connected-open-set-is-exact`,
  `fs-vector-line-integrals-are-invariant-under-reversal`, and
  `ex-a-vector-line-integral-counts-multiple-traversals`.

The four page prose files were also read in full. Nothing was sampled, and
nothing in the dispatched scope was uncheckable. No item or library content
was edited.
