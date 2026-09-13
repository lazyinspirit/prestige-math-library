# Step 3b authoring checkpoint — group a

Run: `phase-2-next-21`

Role/label: `alpha-high` / current continuation `step3b-a-9895f87f0810435c`

Batches: 7, 8, 10

Pages, in prerequisite/order sequence:

1. `riemann-curvature-and-riemannian-submanifolds` and its B page (batch 7)
2. `lie-groups-invariant-fields-and-the-exponential-map` and its B page (batch 7)
3. `lie-subgroups-actions-and-homogeneous-spaces` and its B page (batch 8)
4. `lie-algebra-representations-enveloping-algebras-and-pbw` and its B page (batch 8)
5. `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory` and its B page (batch 10)
6. `hamiltonian-mechanics-and-completely-integrable-systems` and its B page (batch 10)

## Current continuation and owner direction

- This continuation resumed from the item-level checkpoint below; no completed
  item was re-authored.
- `research/phase-2-next-21-owner-authoring-direction.md` now exists and was
  read completely. It supersedes the historical starting-state observation
  below that no direction file existed at that earlier checkpoint.
- Per that direction, the lead retains the two batch-7 pairs. Host-side helpers
  own Lie subgroups/actions, Lie-algebra representations/PBW, and both batch-10
  pairs. The first nested attempts failed before repository access. Host relaunch
  logs were created at 12:53 AEST and were still empty when this continuation
  resumed; no duplicate helper was launched and no helper-owned file was edited.

## Verified starting state

- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `briefs/group-author.md`, and
  `briefs/tasks/frontier-dependency-ledger.md` completely.
- The live `.autopilot/phase-2-next-21` state recomputes at Step 3b with the
  immutable pre-author baseline complete and no unit in flight.
- The working tree already contains changes made by earlier roles, including
  shared plan and published-ledger changes. They are preserved and are not
  claimed by this dispatch.
- No `research/phase-2-next-21-owner-authoring-direction.md` exists.
- Read the current batch notes, manifests, coverage, cross-batch inputs,
  `research/phase-2-next-21-step3a-a.md`, and all six current Step 3a receipts.
  Step 3a records all six pairs as scope-sufficient; this is not an item or
  proof approval.
- The current owned inventory is 370 items: batch 7 has 123, batch 8 has 125,
  and batch 10 has 122. No owned item or page file existed at this checkpoint.
- Batch 8 has two verified same-run page edges and 22 item interfaces into
  batch 7. Batches 7 and 10 currently have empty same-run inputs. These inputs
  must be rechecked against authored proofs before handoff.

## Current mathematical audit

The complete DG-21 design section (`research/plan-differential-geometry-track.md`
lines 5454–5704) has been read. Its controlling convention is

`R(X,Y)Z = nabla_X nabla_Y Z - nabla_Y nabla_X Z - nabla_[X,Y] Z`,

so the round sphere has positive sectional curvature and the shape operator is
`S_nu X = -(bar nabla_X nu)^top`. The batch-7 manifest correctly repairs the
design's internal ordering by proving first Bianchi before deriving all
Riemann-tensor symmetries. The spectral-theorem and several-complex-variables
page prerequisites identified in Step 1 are present in the current manifest
and plan.

One local scaffold qualification is confirmed for repair before authoring
`prop-first-variation-of-volume-for-a-normal-variation`: the compact domain
must contain `supp(V)` in its interior, not merely as a subset, for the boundary
term to vanish without an additional boundary hypothesis. This clarification
preserves the promised compactly supported formula but changes the manifest
statement and therefore requires a refreshed non-owner sufficient scope receipt
after the pair is complete.

The displayed finite-dimensional and point-local DG-21 calculations make no
new family choice once their smooth interfaces are supplied, but those current
library interfaces are not unconditional.  In particular, the First-Bianchi
coordinate/bracket path reaches the `AC_omega`-conditioned smooth tangent-bundle
definition, and the compact-fibre flow path reaches the same definition through
compact completeness.  The owner-directed audit therefore propagates
`AC_omega` through each actual consumer of those interfaces.  Direct
action-angle calculations that do not consume the compact-flow theorem remain
choice-free.

## Published concerns for owner reconciliation

- **Confirmed, high confidence:**
  `thm-smooth-partitions-of-unity-exist-on-manifolds` states its conclusion
  without a choice hypothesis, but proof step 2.1 says to choose one smooth
  bump `g_k` for every member of a countable family, with no canonical
  selector. Its required supplier is `def-countable-choice`; the repair is to
  state `AC_omega`, cite that supplier, and propagate the assumption to its
  consumers.
- **Confirmed, high confidence:**
  `lem-a-vector-field-along-an-embedded-submanifold-extends-to-a-neighbourhood-and-globally-when-closed`
  omits the `AC_omega` required by its partition-of-unity construction and by
  the explicitly choice-bearing smooth Urysohn and tubular-neighbourhood
  suppliers in its global clause. The repair is to state and register
  `AC_omega` and propagate it. Item
  `def-induced-connection-and-second-fundamental-form` will not consume this
  defective global lemma: it instead gives the needed point-local slice-chart
  extension and independence calculation directly.
- **Confirmed, high confidence:** `thm-vector-fields-form-a-lie-algebra`
  states no choice hypothesis, although its subject is the library's space of
  smooth vector fields and `def-smooth-vector-field-as-a-tangent-bundle-section`
  explicitly assumes `AC_omega` for the canonical smooth tangent bundle. Its
  dependency closure reaches that definition through the derivation-to-vector-
  field supplier, but its statement and direct dependencies do not declare or
  propagate the assumption. The repair is to state `AC_omega`, add
  `def-countable-choice`, identify the canonical smooth tangent-bundle/vector-
  field use, and propagate the assumption to consumers. The present tangent-
  Lie-algebra theorem will consume the algebraic conclusion under an explicit
  `AC_omega` assumption; that does not edit or conceal the published defect.

These are published items, so this group has not edited them or the serial
published-consumer ledger.

## Item checkpoints

### `def-curvature-of-an-affine-connection`

- Claim/conventions: defines the corrected covariant-derivative commutator with
  the page's fixed sign and defines flatness as its vanishing; it makes no
  metric or torsion assumption.
- Source locators read: Lee Chapter 7, page 117 through Proposition 7.1; Datar
  Lecture 11, Section 11.1. The bracket correction and sign agree exactly.
- Dependencies read: `def-affine-connection-on-a-smooth-manifold` and
  `def-lie-bracket-of-smooth-vector-fields`.
- Choice/boundaries: no choice; empty, zero-dimensional, one-dimensional, and
  boundary-manifold interpretations are recorded in the item and its contract.
- Checks: explicit-path precheck (definition, therefore zero proof-bearing
  sections), rendercheck, strict selected-item proof-contract check, and global
  depcheck all exit 0. Depcheck prints unrelated pre-existing warnings.
- Decision: `accept`, confidence 1, with both dependency IDs examined; current
  receipt is `research/phase-2-next-21-step3b-review-def-curvature-of-an-affine-connection.json`.

### `lem-curvature-is-c-infinity-linear-in-all-three-vector-fields`

- Claim/conventions: curvature is separately $C^\infty(M)$-linear in the two
  differentiating fields and in the output field, for an arbitrary affine
  connection with the fixed bracket-corrected sign convention.
- Source locators read: Lee Chapter 7, Proposition 7.1, printed pages 117–118;
  Datar Lecture 11, Section 11.1, printed page 72. Lee's complete cancellation
  argument and Datar's displayed identities agree with the authored proof.
- Dependencies read: `def-curvature-of-an-affine-connection`,
  `prop-connection-laws-in-directional-form`, and
  `prop-leibniz-rules-for-the-lie-bracket-with-function-multiples`.
- Proof: step 1.1 expands both differentiating slots and displays the two
  derivative-of-function cancellations; step 2.1 expands the third slot and
  cancels `X(Yf)-Y(Xf)-[X,Y]f` by the defining bracket action.
- Choice/boundaries: no choice or dimension assumption occurs. The empty,
  zero-function, one-dimensional, boundary, and both non-applicable iff cases
  are recorded with item-specific evidence.
- Checks: explicit-path precheck, rendercheck, and strict selected-item
  proof-contract validation all exit 0.
- Decision: `accept`, confidence 1, with all three dependency IDs examined;
  current receipt is
  `research/phase-2-next-21-step3b-review-lem-curvature-is-c-infinity-linear-in-all-three-vector-fields.json`.

### `thm-curvature-is-a-type-one-three-tensor`

- Claim/conventions: the value `R_p(u,v)w` is independent of local extensions,
  is trilinear and smooth, and its covector pairing is the type `(1,3)` tensor
  under the library's scalar-valued tensor-bundle convention.
- Source locators read: Lee Chapter 7, Proposition 7.1, printed pages 117–118;
  Datar Lecture 11, Section 11.1, printed page 72.
- Dependencies read: the completed curvature tensoriality lemma and
  `def-smooth-tensor-field`, including that definition's tensor-bundle and
  smooth-section meaning.
- Proof: step 1.1 expands the difference of two extensions in a local frame and
  uses vanishing coefficients at the point in each slot. Step 2.1 proves
  smoothness of all local components and performs the canonical covector
  pairing needed for the library's `(1,3)` convention.
- Choice/boundaries: only one coordinate chart at one supplied point is used;
  no family choice principle occurs. Dimension zero, dimension one, boundary
  charts, and the non-applicable degeneracy/iff axes are recorded exactly.
- Checks: explicit-path precheck, rendercheck, and strict selected-item
  proof-contract validation all exit 0.
- Decision: `accept`, confidence 1, with both dependency IDs examined; current
  receipt is
  `research/phase-2-next-21-step3b-review-thm-curvature-is-a-type-one-three-tensor.json`.

### `prop-curvature-is-skew-in-its-first-two-arguments`

- Claim/conventions: `R(X,Y)Z=-R(Y,X)Z` for every affine connection, before
  imposing either a metric or a torsion condition.
- Source locators read: Datar Proposition 11.3.2(1), printed page 75; Lee
  Proposition 7.4(a), printed pages 121–122.
- Dependency read: `def-curvature-of-an-affine-connection`.
- Proof: step 1.1 interchanges the two fields in the corrected commutator;
  step 2.1 uses `[Y,X]=-[X,Y]` and real linearity to factor the negative sign.
- Choice/boundaries: the identity is dimension-free, valid on the empty and
  boundary cases, and makes no choices; degeneracy and iff axes do not arise.
- Checks: explicit-path precheck, rendercheck, and strict selected-item
  proof-contract validation all exit 0.
- Decision: `accept`, confidence 1, with the sole dependency examined; current
  receipt is
  `research/phase-2-next-21-step3b-review-prop-curvature-is-skew-in-its-first-two-arguments.json`.

### `prop-coordinate-formula-for-the-curvature-tensor`

- Claim/conventions: with the manifest's order
  `R(partial_i,partial_j)partial_k=R^ell_{kij}partial_ell`, the formula has
  derivative terms `partial_i Gamma^ell_{jk}-partial_j Gamma^ell_{ik}` and
  product terms `Gamma^m_{jk}Gamma^ell_{im}-Gamma^m_{ik}Gamma^ell_{jm}`.
- Source locator read: Datar Lecture 11, Section 11.1, printed pages 71–72,
  through the complete displayed coordinate formula. Lee Chapter 7,
  equations (7.3)–(7.4), was read for the matching sign/index convention.
- Dependencies read: `def-curvature-of-an-affine-connection`,
  `def-christoffel-symbols-of-an-affine-connection`, and
  `prop-coordinate-vector-fields-commute` including its complete proof.
- Proof: step 1.1 expands both iterated derivatives with the connection
  Leibniz rule; step 2.1 invokes coordinate commutativity exactly to eliminate
  the bracket and collects all four coefficients.
- Choice/boundaries: no choices occur. The zero- and one-dimensional index
  cases and boundary charts are explicit; the empty-chart case, degeneracy,
  and iff directions are item-specifically inapplicable.
- Checks: explicit-path precheck and strict selected-item proof-contract
  validation exit 0. The first rendercheck found two multiline display blocks;
  those were repaired to single source lines and the rerun exits 0.
- Decision: mathematically ready for `accept`, confidence 1, with all three
  dependencies examined, but no receipt has been written yet. The recorder is
  temporarily blocked because unrelated pages
  `martingale-inequalities-and-convergence` and
  `stopping-times-and-optional-stopping` acquired current-scope changes in the
  shared run after this group's preceding decision. Their owners must refresh
  their own Step 3a receipts; this group will not issue decisions for them.

### `def-curvature-of-a-vector-bundle-connection`

- Claim/conventions: defines the bracket-corrected curvature operator on an
  arbitrary smooth vector bundle using the same sign as affine curvature; it
  does not prematurely assume the End(E)-valued two-form conclusion.
- Source locators read: Datar Lecture 6, Section 6.1, printed pages 37–39,
  through Lemma 6.1.2 and its tensoriality argument; the manifest's Merry
  Lecture 35 locator remains registered.
- Dependencies read: `def-connection-on-a-smooth-vector-bundle` and
  `def-lie-bracket-of-smooth-vector-fields`.
- Choice/boundaries: the definition explicitly covers empty base, rank zero,
  dimension zero, rank one, and manifolds with boundary; no metric or choice
  occurs.
- Checks: explicit-path precheck (zero proof-bearing sections), rendercheck,
  and strict selected-item proof-contract validation all exit 0 after replacing
  three vague `final paragraph` boundary locators with the exact `Definition`
  anchor.
- Decision: mathematically ready for `accept`, confidence 1, with both
  dependencies examined; receipt remains pending on the same two unrelated
  stale Step 3a scope receipts recorded above.

### `prop-vector-bundle-curvature-is-an-endomorphism-valued-two-form`

- Claim/conventions: bundle curvature is separately function-linear in both
  tangent inputs and the bundle section, alternating in the tangent inputs,
  smooth, and consequently a section of
  `Lambda^2 T^*M tensor End(E)`.
- Source locators read: Datar Lecture 6, Lemma 6.1.2 and Proposition 6.1.3,
  printed pages 38–39, including the tensoriality and local-frame formulas;
  the manifest's Merry Examples 36.11/Theorem 36.19 locators remain registered.
- Dependencies read: `def-curvature-of-a-vector-bundle-connection`, the full
  connection and bracket Leibniz propositions, `def-smooth-differential-k-form`,
  and `def-dual-and-hom-vector-bundles`.
- Proof: step 1.1 displays both tangent-slot derivative cancellations and
  alternation; step 2.1 cancels the section-slot coefficient; step 3.1 builds
  smooth alternating local coefficients in the Hom bundle.
- Choice/boundaries: rank/base dimensions zero and one, boundary charts, and
  the lack of metric degeneracy are handled. One pair of local frames is used,
  with no family choice.
- Checks: explicit-path precheck, rendercheck, and strict selected-item
  proof-contract validation all exit 0.
- Decision: mathematically ready for `accept`, confidence 1, with all five
  dependencies examined; receipt remains pending on the unrelated Step 3a
  scope blocker.

### `thm-curvature-two-form-structure-equation`

- Claim/conventions: in the row-frame/column-coefficient convention, the
  curvature matrix is `Omega=d omega+omega wedge omega`, with component order
  `(omega wedge omega)^i_j=sum_k omega^i_k wedge omega^k_j`.
- Source locators read: Datar Lecture 6, Proposition 6.1.3 and Remark 6.1.4,
  printed pages 38–39, including the complete coefficient expansion; the
  manifest's Merry Lecture 36 locator remains registered. Datar packages the
  quadratic term with a bracket convention, so the authored proof checks the
  unambiguous component order directly rather than copying that shorthand.
- Dependencies read: the End(E)-valued two-form proposition, connection-one-form
  definition, local connection formula, local exterior-derivative formula, and
  wedge-product definition.
- Proof: step 1.1 computes the coefficient of each frame vector on a coordinate
  pair; step 2.1 identifies the derivative and quadratic terms separately and
  uses equality of two-forms on the coordinate frame.
- Choice/boundaries: empty/rank-zero matrices, zero-dimensional bases, the
  rank-one reduction `Omega=d omega`, and boundary charts are explicit; no
  family choice or metric occurs.
- Checks: explicit-path precheck, rendercheck, and strict selected-item
  proof-contract validation all exit 0.
- Decision: mathematically ready for `accept`, confidence 1, with all five
  dependencies examined; receipt remains pending on the unrelated Step 3a
  scope blocker.

### `thm-second-bianchi-identity-for-a-bundle-connection`

- Claim/conventions: for the induced Hom connection and the covariant exterior
  derivative defined by its full alternating formula, bundle curvature obeys
  `d^nabla Omega=0`.
- Source locator read: Datar Lecture 6, Proposition 6.1.5, printed pages 39–40,
  through its complete commutator/Jacobi calculation; the manifest's Merry
  Theorem 36.21 locator remains registered.
- Dependencies read: the structure equation, product/Hom connection, induced
  exterior-power derivation, graded Leibniz theorem, and `d^2=0` theorem,
  including the full existing proofs of the latter three propositions.
- Proof: step 1.1 derives the frame formula
  `d^nabla A=dA+omega wedge A-(-1)^k A wedge omega`; step 2.1 substitutes the
  structure equation and explicitly cancels every derivative and cubic term.
- Choice/boundaries: empty/rank-zero and low-dimensional forms, line bundles,
  and boundary charts are handled; no metric or choice occurs.
- Checks: explicit-path precheck, rendercheck, and strict selected-item
  proof-contract validation all exit 0.
- Decision: mathematically ready for `accept`, confidence 1, with all five
  dependencies examined; receipt remains pending on the unrelated Step 3a
  scope blocker.

### `prop-flat-connections-have-locally-path-independent-parallel-transport-on-a-coordinate-ball`

- Claim/qualification: for a flat bundle connection, parallel transport inside
  a sufficiently small convex coordinate ball depends only on endpoints. This
  is explicitly local and says nothing about holonomy on larger
  non-simply-connected domains.
- Source locator read: Datar Proposition 11.2.1 proof, printed pages 73–74,
  including its complete coordinate-slice ODE argument, adapted here to a
  general bundle. The manifest's Merry Theorem 33.9 locator remains registered.
- Dependencies read: bundle-curvature tensoriality, full parallel-section
  existence/uniqueness proof, parallel-transport definition, and smooth ODE
  parameter dependence proof.
- Proof: step 1.1 constructs the fixed-endpoint piecewise-smooth linear homotopy
  in a convex chart and its smooth family of transported vectors; step 2.1
  derives the variation equation
  `nabla_t(nabla_s V)=-R(H_s,H_t)V` and propagates zero through every rectangle;
  step 3.1 uses the fixed terminal point to obtain equality of transport maps.
- Choice/boundaries: rank/base dimension zero and one, compact parameter
  endpoints, and boundary half-balls are handled. The proof fixes one arbitrary
  point and one local chart/trivialization, not a family of choices.
- Checks: explicit-path precheck, rendercheck, and strict selected-item
  proof-contract validation all exit 0.
- Decision: mathematically ready for `accept`, confidence 1, with all four
  dependencies examined; receipt remains pending on the unrelated Step 3a
  scope blocker.

### `thm-a-flat-connection-admits-local-parallel-frames`

- Claim/conventions: a bundle connection is flat iff every point has a local
  frame all of whose sections are parallel.
- Source locators read: Datar Lemma 11.2.3 and its use in Proposition 11.2.1,
  printed pages 73–74, including the complete induction/ODE argument; the
  manifest's Merry Theorem 33.9 locator remains registered.
- Dependencies read: endpoint-dependent transport, the transport definition,
  local-frame definition, smooth ODE parameter dependence, and (after the
  repair below) explicit curvature endomorphism tensoriality.
- Local scaffold repair: the reverse implication needs curvature to act
  fibrewise on a basis. Added the already-authored direct dependency
  `prop-vector-bundle-curvature-is-an-endomorphism-valued-two-form` to this
  item's manifest and frontmatter; this is a same-page earlier edge and does
  not change the promised claim or pair scope hash.
- Proof: step 1.1 transports one trivialization basis from the center, proves
  smoothness and fibrewise basis preservation; step 2.1 proves the sections
  parallel via endpoint independence along curve segments; step 3.1 proves the
  converse by evaluating curvature on the parallel frame basis.
- Choice/boundaries: both iff directions, rank/base dimension zero, rank one,
  boundary coordinate balls, and the finite-basis choice from one
  trivialization are explicit. No AC is used.
- Checks: explicit-path precheck and rendercheck exit 0. Strict proof-contract
  initially exposed the undeclared curvature-tensoriality use; after the
  manifest/frontmatter dependency repair and contract regeneration, the strict
  selected-item check exits 0.
- Decision: mathematically ready for `repaired`, confidence 1, with all five
  current dependencies examined; receipt remains pending on the unrelated
  Step 3a scope blocker.

### `def-riemann-curvature-four-tensor`

- Claim/conventions: lowers the output of the `(1,3)` curvature by
  `Rm(X,Y,Z,W)=g(R(X,Y)Z,W)` for the unique Levi–Civita connection. The argument
  and component orders are spelled out, and `Rm(u,v,v,u)` is positive for the
  round-sphere convention.
- Source locators read: Datar Lecture 11, Section 11.1, printed pages 71–72;
  Lee Chapter 7, equation (7.4), printed page 118, including Lee's surrounding
  sign-convention warning.
- Dependencies read: the completed curvature tensor theorem, Riemannian metric
  definition, and complete proof of the fundamental theorem of Riemannian
  geometry.
- Choice/boundaries: the unique Levi–Civita connection and metric contraction
  use no frame choice. Empty, dimensions zero and one, positive-definite
  (therefore nondegenerate), and boundary cases are explicit.
- Checks: explicit-path precheck (zero proof-bearing sections), rendercheck,
  and strict selected-item proof-contract validation all exit 0.
- Decision: mathematically ready for `accept`, confidence 1, with all three
  dependencies examined; receipt remains pending on the unrelated Step 3a
  scope blocker.

### `thm-first-bianchi-identity`

- Claim/qualification: the cyclic curvature sum vanishes for the torsion-free
  Levi–Civita connection; metric compatibility is not used, so the proof in
  fact applies to any torsion-free affine connection.
- Source locators read: Datar Proposition 11.3.2(3), printed pages 75–76;
  Lee Proposition 7.4(d), complete proof on printed pages 122–123.
- Dependencies read: affine-curvature definition, Levi–Civita definition, and
  the complete published proof that vector fields form a Lie algebra.
- Proof: step 1.1 groups the cyclic curvature expansion into the three torsion
  differences; step 2.1 applies torsion freeness again and closes with the
  Jacobi identity.
- Choice/boundaries: dimension-free local algebra covers empty, zero, one, and
  boundary cases; no metric degeneracy or choice occurs.
- Checks: explicit-path precheck, rendercheck, and strict selected-item
  proof-contract validation all exit 0.
- Decision: mathematically ready for `accept`, confidence 1, with all three
  dependencies examined; receipt remains pending on the unrelated Step 3a
  scope blocker.

### `thm-algebraic-symmetries-of-the-riemann-tensor`

- Claim/conventions: proves first-pair and last-pair skewness, cyclic Bianchi,
  and pair interchange for the fixed `Rm(X,Y,Z,W)=g(R(X,Y)Z,W)` order.
- Source locators read: Datar Proposition 11.3.2, printed pages 75–76; Lee
  Proposition 7.4 and its complete proof, printed pages 121–123.
- Dependencies read: four-tensor definition, first-pair skew proposition,
  completed first Bianchi theorem, and Levi–Civita metric compatibility.
- Proof: step 1.1 imports first-pair skew and pairs the vector Bianchi identity;
  step 1.2 expands the metric-compatibility commutator and cancels mixed terms
  to prove last-pair skew; step 2.1 writes the four cyclic identities and
  records the exact remaining two-term equality yielding pair interchange.
- Choice/boundaries: the tensor algebra covers dimensions zero and one, empty
  and boundary cases, and uses neither a frame nor a choice principle;
  degeneracy is excluded by the Riemannian hypothesis.
- Checks: rendercheck and strict selected-item proof-contract validation exit
  0. The first precheck requested canonical phase numbering; the proof was
  renumbered from `1.1,2.1,3.1` to `1.1,1.2,2.1`, its contract regenerated,
  and the rerun exits 0.
- Decision: mathematically ready for `accept`, confidence 1, with all four
  dependencies examined; receipt remains pending on the unrelated Step 3a
  scope blocker.

### `thm-differential-second-bianchi-identity`

- Claim/conventions: specializes bundle Bianchi to `TM`, identifies the
  alternating covariant derivative with the cyclic tensor derivative using
  zero torsion, and records the equivalent index-lowered `Rm` identity.
- Source locators read: Datar Proposition 11.3.3 and its full expansion,
  printed pages 76–77; Lee Proposition 7.5 and complete normal-frame proof,
  printed pages 123–124; the manifest's Merry Theorem 36.21 remains registered.
- Dependencies read: bundle second Bianchi, Riemann four-tensor definition, and
  the complete contraction/permutation compatibility proposition.
- Proof: step 1.1 expands all bracket and argument-derivative terms and uses
  torsion freeness to identify `d^nabla R` with the cyclic sum; step 2.1 invokes
  bundle Bianchi and commutes metric lowering with covariant differentiation.
- Choice/boundaries: empty, zero, one, boundary, positive-definite metric, and
  no-choice cases are explicit; the two displays are presentations of one
  identity, not iff directions.
- Checks: explicit-path precheck, rendercheck, and strict selected-item
  proof-contract validation all exit 0.
- Decision: mathematically ready for `accept`, confidence 1, with all three
  dependencies examined; receipt remains pending on the unrelated Step 3a
  scope blocker.

### `def-sectional-curvature`

- Claim/conventions: for a tangent two-plane, defines
  `K=Rm(X,Y,Y,X)/det Gram(X,Y)`; the denominator is proved positive for a
  basis and the round unit sphere sign is `+1`.
- Source locators read: Datar Definition 12.1.3 and Example 12.1.4, printed
  pages 82–83; Lee Chapter 8, Proposition 8.8, printed page 146. The manifest
  incorrectly said Datar Definition 12.1.4 and Lee Chapter 7; these provenance
  locators were corrected without changing the claim or dependencies.
- Dependencies read: four-tensor definition and completed algebraic-symmetries
  theorem.
- Choice/boundaries: the Gram determinant excludes a zero/degenerate basis;
  dimensions below two and the empty manifold have no input planes, and the
  same fibrewise definition applies at boundary points. A single supplied
  basis is not a global choice.
- Checks: explicit-path precheck (zero proof-bearing sections), rendercheck,
  and strict selected-item proof-contract validation all exit 0.
- Decision: mathematically ready for `repaired`, confidence 1, with both
  dependencies examined; receipt remains pending on the unrelated Step 3a
  scope blocker.

### `lem-sectional-curvature-is-independent-of-the-basis-of-the-plane`

- Claim/conventions: every invertible `2 x 2` change of ordered basis leaves
  the sectional-curvature quotient unchanged.
- Source locators read: Datar's determinant calculation in Proposition 12.1.1
  and Definition 12.1.3, printed pages 81–82; Lee Chapter 8, Proposition 8.8,
  printed page 146.
- Dependencies read: sectional-curvature definition and completed Riemann
  algebraic symmetries.
- Proof: step 1.1 shows the numerator scales by `(det A)^2`, one determinant
  from each alternating pair; step 2.1 computes `G'=AGA^T`, so the Gram
  determinant has exactly the same scale and cancels.
- Choice/boundaries: noninvertible changes are excluded by the basis
  hypothesis; dimensions below two have no input. Boundary tangent spaces and
  the finite supplied change-of-basis matrix need no choice.
- Checks: explicit-path precheck, rendercheck, and strict selected-item
  proof-contract validation all exit 0.
- Decision: mathematically ready for `accept`, confidence 1, with both
  dependencies examined; receipt remains pending on the unrelated Step 3a
  scope blocker.

### `thm-sectional-curvatures-determine-the-riemann-tensor`

- Claim/conventions: two algebraic curvature four-tensors on the same
  finite-dimensional inner-product space are equal if their sectional
  quotients agree on every two-plane.
- Source locators read: Datar Proposition 12.1.6 and Corollary 12.1.7, complete
  proofs on printed pages 83–84; Lee Lemma 8.9 and complete proof on printed
  pages 146–147. The manifest's incorrect `Lee Lemma 7.3` locator was repaired
  to `Lee Lemma 8.9`.
- Dependencies read: completed basis independence and Riemann algebraic
  symmetries.
- Proof: step 1.1 treats independent pairs by the positive Gram denominator
  and dependent pairs by alternation; step 2.1 performs the first polarization;
  step 3.1 performs the second polarization and uses Bianchi to obtain
  `3T(X,Y,Z,W)=0`.
- Choice/boundaries: dimensions zero and one are handled despite the empty
  family of planes because alternation forces every curvature tensor to zero.
  Degenerate vector pairs are separated before dividing, and no basis or plane
  family is chosen.
- Checks: explicit-path precheck, rendercheck, and strict selected-item
  proof-contract validation all exit 0.
- Decision: mathematically ready for `repaired`, confidence 1, with both
  dependencies examined; receipt remains pending on the unrelated Step 3a
  scope blocker.

### `def-constant-sectional-curvature-and-space-form`

- Claim/conventions: distinguishes a single global constant `K` from
  pointwise plane-independence `K(p)` and calls a connected, boundaryless,
  geodesically complete constant-curvature manifold a space form.
- Source locators read: Datar Section 12.3, printed pages 86–87, and Lecture 24
  opening, printed page 174; Lee Chapter 8, printed page 148, and the paragraph
  after Corollary 11.13 on printed page 206. The manifest's vague/incorrect Lee
  Chapter 7 locator was repaired accordingly.
- Dependencies read: sectional-curvature definition and the complete
  geodesic-completeness definition.
- AC: the item explicitly assumes `AC_omega`, inherited only through the
  supplier's maximal-geodesic domains used to interpret completeness. The
  constant-sectional-curvature predicate itself is choice-free.
- Boundaries: dimensions zero and one make the constant-`K` predicate vacuous
  for every `K`, so no distinguished value exists. The empty manifold follows
  the library's connected-empty convention; space forms are expressly
  boundaryless to match the completeness supplier.
- Checks: explicit-path precheck (zero proof-bearing sections), rendercheck,
  and strict selected-item proof-contract validation all exit 0.
- Decision: mathematically ready for `repaired`, confidence 1, with both
  dependencies examined; receipt remains pending on the unrelated Step 3a
  scope blocker.

### `prop-curvature-tensor-of-constant-sectional-curvature`

- Claim/conventions: proves the full iff between constant sectional curvature
  `K`, the vector formula `R(X,Y)Z=K(g(Y,Z)X-g(X,Z)Y)`, and its index-lowered
  four-tensor formula.
- Source locators read: Datar Proposition 12.3.1, equation (12.1), printed
  pages 86–87; Lee Lemma 8.10, printed pages 148–149. The manifest's incorrect
  Lee Chapter 7 locator was repaired to Lemma 8.10.
- Dependencies read: constant-curvature/space-form definition and the complete
  sectional-reconstruction theorem.
- Proof: step 1.1 verifies every algebraic curvature symmetry and numerator of
  the metric model; step 2.1 proves both sectional/tensor directions; step 3.1
  proves equivalence with the vector-valued formula by metric nondegeneracy.
- AC/boundaries: `AC_omega` is propagated from the definition dependency and
  is not otherwise used. Both iff directions, positive Gram denominators,
  boundary points, empty manifold, and dimensions zero and one are explicit;
  in dimension one the alternating metric model vanishes for every `K`.
- Checks: explicit-path precheck, rendercheck, and strict selected-item
  proof-contract validation all exit 0.
- Decision: mathematically ready for `repaired`, confidence 1, with both
  dependencies examined; receipt remains pending on the unrelated Step 3a
  scope blocker.

### `def-ricci-curvature`

- Claim/conventions: defines `Ric(X,Y)` as the basis-independent trace of the
  endomorphism `Z -> R(Z,X)Y`, i.e. contraction of the first curvature input
  with its output; no orthonormal frame is baked into the definition.
- Source locators read: Datar Definition 12.2.1, printed page 85; Lee Chapter 7,
  Ricci and Scalar Curvatures, printed pages 124–125.
- Dependencies read: Riemann four-tensor definition and the complete
  basis-independent trace definition.
- Choice/boundaries: no bases are selected over `M`; empty trace, empty
  manifold, dimension one, and boundary points are explicit. No metric inverse
  is needed for this contraction.
- Checks: explicit-path precheck (zero proof-bearing sections), rendercheck,
  and strict selected-item proof-contract validation all exit 0.
- Decision: mathematically ready for `accept`, confidence 1, with both
  dependencies examined; receipt remains pending on the unrelated Step 3a
  scope blocker.

### `lem-ricci-curvature-is-symmetric-and-basis-independent`

- Claim/conventions: proves that the trace-defined Ricci curvature is a
  smooth symmetric covariant two-tensor, gives its orthonormal-frame formula,
  and proves that formula independent of the chosen basis.
- Source locators read: Datar Proposition 12.2.2 and its complete proof,
  printed pages 85–86; Lee Chapter 7, Lemma 7.6 and the surrounding Ricci
  convention discussion, printed pages 124–125.
- Dependencies read: the completed Ricci definition, full Riemann algebraic
  symmetries, and the published basis-independence proof for contraction.
- Proof: step 1.1 identifies the trace with the dual-basis contraction and
  proves basis independence, bilinearity, and smoothness in a local frame;
  step 2.1 specializes to an orthonormal basis and uses pair interchange plus
  both pair skew symmetries to interchange the two Ricci inputs.
- Choice/boundaries: empty and zero-dimensional sums, dimension one,
  boundary points, metric nondegeneracy, and the absence of a global frame
  choice are explicit in the proof contract.
- Checks: explicit-path precheck, rendercheck, and strict selected-item
  proof-contract validation all exit 0 after contract regeneration.
- Decision: mathematically ready for `accept`, confidence 1, with all three
  dependencies examined; receipt remains pending on the unrelated Step 3a
  scope blocker.

### `def-scalar-curvature`

- Claim/conventions: defines scalar curvature intrinsically as the trace of
  the Ricci endomorphism obtained by raising one index, and derives the
  orthonormal-basis sum.
- Source locators read: Datar Definition 12.2.3, printed page 86; Lee Chapter
  7, Ricci and Scalar Curvatures, printed pages 124–125.
- Dependencies read: the completed smooth symmetric Ricci lemma, published
  intrinsic contraction definition, and published proof that the musical
  maps are smooth inverse bundle isomorphisms.
- Scaffold repair: the planned dependencies invoked the inverse metric
  without supplying its existence or smoothness. Added
  `thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms` to the item and
  batch-7 manifest. This changes neither the promised claim nor pair scope.
- Choice/boundaries: the definition records the empty and zero-dimensional
  cases, dimension one, boundary points, metric nondegeneracy, and the absence
  of a global basis choice.
- Checks: explicit-path precheck (zero proof-bearing sections), rendercheck,
  and strict selected-item proof-contract validation all exit 0.
- Decision: mathematically ready for `repaired`, confidence 1, with all three
  dependencies examined; receipt remains pending on the unrelated Step 3a
  scope blocker.

### `prop-scalar-curvature-is-twice-the-sum-of-sectional-curvatures-of-coordinate-planes`

- Claim/conventions: for any orthonormal tangent basis, proves that scalar
  curvature is twice the sum over the unordered coordinate two-planes.
- Source locators read: Datar Proposition 12.2.2 and Definition 12.2.3,
  printed pages 85–86; Lee's complete trace computation in Chapter 8,
  printed pages 147–148. The manifest's `Lee Chapter 7` locator was corrected
  to the actual Chapter 8 argument.
- Dependencies read: scalar curvature, sectional curvature, and the complete
  Riemann algebraic-symmetries theorem.
- Proof: step 1.1 expands the scalar and Ricci traces and kills the diagonal;
  step 2.1 identifies off-diagonal terms as sectional curvatures and pairs
  $(i,j)$ with $(j,i)$.
- Choice/boundaries: the contract checks empty, zero-, and one-dimensional
  sums, positive definiteness, boundary points, and the use of only one
  supplied finite basis.
- Checks: explicit-path precheck, rendercheck, and strict selected-item
  proof-contract validation all exit 0 after correcting one initially
  unanchored contract boundary description.
- Decision: mathematically ready for `repaired`, confidence 1, with all three
  dependencies examined; receipt remains pending on the unrelated Step 3a
  scope blocker.

### `def-kulkarni-nomizu-product-trace-free-ricci-and-weyl-curvature`

- Claim/conventions: fixes the library's Kulkarni–Nomizu order as `\odot`,
  identifies the constant-curvature tensor, defines `Ric_0` for positive
  dimensions with a separate zero-dimensional convention, and defines the
  Weyl residual only for `n >= 3`.
- Source locators read: Datar Definitions 13.1.1–13.1.2 and 13.1.6–13.1.8,
  Lemmas 13.1.5 and 13.1.7, and Theorem 13.2.1, complete surrounding
  development on printed pages 89–95. Lee Chapter 7 contains the Ricci/scalar
  convention but not this decomposition, so it is no longer represented as
  the mathematical source of the combined definition.
- Dependencies read: Ricci curvature, scalar curvature, and the published
  tensor-product definition; the next Ricci-decomposition proposition remains
  the registered well-definedness supplier.
- Scaffold repairs: qualified `Ric_0=Ric-(S/n)g` by `n >= 1`, assigned the
  unique zero-dimensional tensor separately, and made the `n >= 3` domain of
  the Weyl formula explicit. The manifest statement and source locator were
  repaired; the A53/B12 scope remains unchanged and a fresh `sufficient`
  non-owner scope receipt was recorded for hash
  `6c80f3f4eb9adaccb0b305ae72eddc20bf1e4ce289fc831f020bf4b934ac3348`.
- Choice/boundaries: empty, zero-, one-, and two-dimensional distinctions,
  boundary points, positive definiteness, and absence of basis choice are
  explicit.
- Checks: explicit-path precheck, strict selected-item proof-contract
  validation, and rendercheck exit 0. Rendercheck first rejected unsupported
  `\owedge`/`\circledwedge` commands; the supported `\odot` notation now
  renders the manifest's `⊙` symbol without changing the operation.
- Decision: mathematically ready for `repaired`, confidence 1, with all three
  declared dependencies examined; receipt remains pending on the unrelated
  Step 3a scope blocker.

### `prop-ricci-decomposition-of-the-riemann-tensor-in-dimension-at-least-three`

- Claim/conventions: proves the unique Weyl/trace-free-Ricci/scalar
  decomposition for `n >= 3`, `W=0` in dimension three, and the separate
  `Rm=(S/4)(g odot g)` identity in dimension two.
- Source locators read: Datar Lemmas 13.1.5 and 13.1.7, Remark 13.1.9, and
  Theorem 13.2.1 with their complete computations, printed pages 91–95.
  Lee Chapter 7 does not contain this decomposition and is identified in the
  manifest only as support for the inherited Ricci/scalar convention.
- Dependencies read: the combined definition, Riemann symmetries,
  basis-independent contraction, Ricci and scalar definitions, and the
  published finite-dimensional orthonormal-basis corollary.
- Scaffold repairs: registered the Ricci/scalar and orthonormal-basis
  suppliers used by the actual argument, and replaced the scaffold's
  unregistered appeal to sectional determination by a direct component proof.
- Proof: steps 1.1–2.1 establish the algebraic symmetries and contraction
  formula `c(h odot g)=(n-2)h+tr(h)g`; steps 3.1–3.2 prove trace-freeness and
  uniqueness; step 4.1 kills the six independent components of `W` in
  dimension three; step 5.1 computes the sole exterior-square component in
  dimension two.
- Choice/boundaries: the stated dimensional domains, empty manifolds,
  boundary points, positive definiteness, and use of a single finite basis
  are explicit.
- Checks: after adopting canonical proof-phase numbering requested by the
  first precheck, explicit-path precheck, rendercheck, and strict selected-item
  proof-contract validation all exit 0.
- Decision: mathematically ready for `repaired`, confidence 1, with all six
  dependencies examined; receipt remains pending on the unrelated Step 3a
  scope blocker.

### `thm-contracted-second-bianchi-identity`

- Claim/conventions: defines divergence of a covariant two-tensor as the
  first/derivative-slot contraction and proves both `div Ric=(1/2)dS` and the
  divergence-free Einstein-tensor form.
- Source locators read: Datar Proposition 12.2.4 and its full computation,
  printed page 86; Lee Lemma 7.7 and its contraction statement, printed page
  125.
- Dependencies read: differential Bianchi, scalar curvature, symmetric Ricci
  contraction, connection/contraction compatibility, basis-independent
  contraction, Riemann pair skews, and Levi–Civita metric compatibility.
- Scaffold repairs: registered the last three suppliers, which the proposed
  contraction and product-rule argument used implicitly.
- Proof: step 1.1 makes both contractions intrinsic; step 2.1 contracts the
  differential Bianchi identity and checks both minus signs; step 3.1 uses
  `nabla g=0` to obtain the Einstein-tensor form.
- AC/choice: the proof deliberately uses the tensor `nabla Rm` at a point,
  rather than normal coordinates. It therefore imports no `AC_omega`; one
  supplied finite orthonormal basis is sufficient.
- Boundaries: empty, zero-, and one-dimensional cases, boundary points, and
  metric nondegeneracy are explicit in the contract.
- Checks: explicit-path precheck, rendercheck, and strict selected-item
  proof-contract validation all exit 0.
- Decision: mathematically ready for `repaired`, confidence 1, with all seven
  dependencies examined; receipt remains pending on the unrelated Step 3a
  scope blocker.

### `thm-schurs-lemma-for-pointwise-constant-sectional-curvature`

- Claim/conventions: for connected `n >= 3`, derives the smooth function
  `k=S/[n(n-1)]` from mere pointwise plane-independence and proves it is the
  common sectional value and is globally constant.
- Source locators read: Merry Theorem 48.12 and its complete normal-coordinate
  proof, lecture 48 pages 2–4; Datar Corollary 12.2.5 and Proposition 12.3.1
  with complete proofs, printed pages 86–87; Lee Proposition 7.8, printed
  pages 125–126, for the Einstein contraction step. The manifest's `Lee
  Theorem 7.8` was corrected to `Proposition 7.8` and its limited use stated.
- Dependencies read: sectional reconstruction and definition, Ricci and
  scalar contractions, contracted Bianchi, metric compatibility, and the
  connected-component constancy proposition.
- Scaffold/AC repair: removed the dependency on the constant-curvature/
  space-form item, whose unrelated completeness clause carries `AC_omega`.
  Step 1.1 reconstructs the metric curvature model locally instead. The
  resulting proof is choice-free, and smoothness of the pointwise value is a
  conclusion rather than an extra hypothesis.
- Proof: step 1.1 compares with the algebraic metric model; step 2.1 contracts
  it to obtain `Ric=(n-1)kg` and `S=n(n-1)k`; step 3.1 uses contracted Bianchi
  and `n>=3`; step 4.1 applies connectedness and treats the empty convention.
- Checks: explicit-path precheck, rendercheck, and strict selected-item
  proof-contract validation all exit 0.
- Decision: mathematically ready for `repaired`, confidence 1, with all seven
  dependencies examined; receipt remains pending on the unrelated Step 3a
  scope blocker.

### `thm-a-riemannian-manifold-is-flat-iff-it-is-locally-isometric-to-euclidean-space`

- Claim/conventions: for a boundaryless Riemannian manifold, proves that
  vanishing Riemann curvature is equivalent to having a Euclidean local
  isometry near every point.
- Source locators read: Datar Proposition 11.2.1 and Lemma 11.2.3 with their
  complete proofs, printed pages 73–74; Lee Theorem 7.3 and its complete
  proof, printed pages 119–121; Merry Theorem 33.9 for local triviality of a
  flat connection. The manifest's Lee locator was corrected from Theorem
  7.10 to Theorem 7.3.
- Dependencies read: local parallel frames for flat connections, the Riemann
  four-tensor definition, Levi–Civita torsion-freeness and metric
  compatibility, the commuting-frame coordinate theorem, local-isometry
  definition, finite Gram–Schmidt, and componentwise constancy of a function
  with zero differential.
- Scaffold repairs: the original unqualified statement was false at boundary
  points because no neighborhood of such a point is diffeomorphic to an open
  subset of `R^n`; the statement now explicitly assumes a boundaryless
  manifold. Replaced the too-weak Frobenius dependency by the exact
  commuting-independent-frame coordinate theorem and registered the finite
  Gram–Schmidt and zero-differential suppliers used by the proof. A fresh
  `sufficient` non-owner scope receipt was recorded for statement hash
  `3342379e4b8396c11558ca776d52d94fe84494ccddc3ce6cc6a4014383762bf3`.
- Proof: steps 1.1 and 2.1 prove the Euclidean-to-flat implication from
  constant metric coefficients; step 1.2 constructs a local parallel frame
  and proves its Gram matrix constant; step 2.2 orthonormalizes it by one
  constant finite matrix; step 3.1 integrates the commuting frame to
  Euclidean coordinates.
- Choice/boundaries: the proof uses only finite supplied bases and finite
  Gram–Schmidt, so imports no choice axiom. Empty, zero-, and one-dimensional
  cases and the reason for excluding boundary points are explicit in the
  proof and contract.
- Checks: after repairing a step tag and adopting the precheck's proof-phase
  stratification, explicit-path precheck, rendercheck, and strict
  selected-item proof-contract validation all exit 0.
- Decision: mathematically ready for `repaired`, confidence 1, with all seven
  dependencies examined; receipt remains pending on the unrelated Step 3a
  scope blocker.

### `def-tangential-and-normal-projections-along-a-riemannian-submanifold`

- Claim/conventions: assuming `AC_omega`, defines the orthogonal normal
  realization `nu M=(TM)^perp`, the smooth splitting
  `T Mbar|_M=TM direct-sum nu M`, and the tangential and normal components of
  every smooth field along the submanifold.
- Source locators read: Terng Section 2.1 from the chapter introduction
  through the definition of the normal connection, printed pages 23–25;
  Datar Lecture 14, Section 14.1 through the normal bundle, orthogonal
  decomposition, and two projection maps, printed page 101.
- Dependencies read: the quotient normal/conormal definition, the published
  metric identification of quotient and orthogonal normal bundles, and the
  smooth-orthogonal-complement proposition with its proof.
- Scaffold/AC repair: the planned statement consumed a supplier that assumes
  `AC_omega` but omitted that hypothesis. The item and manifest now state it
  and identify its exact inherited use: construction of the smooth restricted
  ambient tangent bundle. The metric projections are canonical and add no
  choice. The local adapted orthonormal-frame formulas explicitly verify their
  smoothness. A fresh `sufficient` non-owner page-scope receipt was recorded
  at hash
  `cf6446ab42ce09fed44f2f56e1c8ba8ce94def63695a821b0bf97f444bc47891`.
- Boundaries: the definition records empty sums, zero tangent rank,
  codimension zero, rank one, boundary points, metric nondegeneracy, and the
  absence of any global-frame choice.
- Checks: explicit-path precheck, rendercheck, and strict selected-item
  proof-contract validation all exit 0 after putting each display on one
  physical source line.
- Decision: mathematically ready for `repaired`, confidence 1, with all three
  dependencies examined; the attempted item receipt was rejected because the
  unrelated Step 3a scope blocker remains.

### `def-induced-connection-and-second-fundamental-form`

- Claim/conventions: assuming `AC_omega`, defines the ambient covariant
  derivative of two tangent fields along the submanifold, proves it is
  independent of local ambient extensions, and defines its tangent and normal
  projections as the induced connection and second fundamental form.
- Source locators read: Terng Section 2.1, printed pages 24–25; Datar Lecture
  14, Section 14.1 from restriction locality through Definition 14.1.2 and
  the Gauss formula, printed pages 101–102; Lee Chapter 8 from equation (8.1)
  through Lemma 8.1(a), printed pages 133–135.
- Dependencies read: the completed orthogonal-projection definition, the
  ambient Levi–Civita/affine connection laws, and the embedded-submanifold
  slice-chart definition.
- Scaffold repair: removed reliance on
  `lem-a-vector-field-along-an-embedded-submanifold-extends-to-a-neighbourhood-and-globally-when-closed`,
  whose statement does not carry the choice assumption used in its proof.
  The authored definition instead constructs extensions point-locally in a
  slice chart and calculates that changing either extension changes the
  derivative by zero. Registered the slice-chart and affine-connection
  suppliers used by that calculation.
- AC/boundaries: `AC_omega` is inherited exactly from the smooth projection
  supplier; the point-local extension argument makes no simultaneous choice.
  Empty, zero-rank, rank-one, codimension-zero, degenerate-metric, and boundary
  cases are explicit. A fresh `sufficient` non-owner page-scope receipt was
  recorded at hash
  `94544242e6b2c64f62b8747a4dfee023e3170027072926733054cfa224a0a006`.
- Checks: explicit-path precheck, rendercheck, and strict selected-item
  proof-contract validation all exit 0.
- Decision: mathematically ready for `repaired`, confidence 1, with all four
  dependencies examined; the attempted item receipt was rejected because the
  unrelated Step 3a scope blocker remains.

### `thm-the-induced-connection-is-levi-civita`

- Claim/conventions: assuming `AC_omega`, proves that the tangential
  projection of the ambient Levi–Civita derivative is the unique
  Levi–Civita connection of the induced metric.
- Source locators read: Terng Section 2.1 through equation (2.1.4), printed
  pages 25–26; Datar Proposition 14.1.1 with complete proof, printed pages
  101–102; Lee Theorem 8.2 with complete proof, printed pages 134–135. The
  manifest's `Lee Proposition 8.2` locator was corrected to `Theorem 8.2`.
- Dependencies read: the completed induced-connection definition and its
  local well-definedness argument, the fundamental theorem of Riemannian
  geometry, and the Levi–Civita definition.
- Proof: step 1.1 projects every affine-connection law; step 1.2 verifies in a
  slice chart that the bracket of tangent fields is tangent and proves
  torsion-freeness; step 1.3 projects ambient metric compatibility; step 2.1
  invokes uniqueness.
- AC/boundaries: `AC_omega` is inherited only through the completed smooth
  projection/induced-connection supplier. Empty, zero-, and one-dimensional,
  boundary, and nondegenerate-metric cases are explicit. A fresh
  `sufficient` non-owner page-scope receipt was recorded at hash
  `94887573cd81c28e1147943f98097c8decc7109caee310adc275f60b15228b0d`.
- Checks: after adopting canonical proof-phase numbering, explicit-path
  precheck, rendercheck, and strict selected-item proof-contract validation
  all exit 0.
- Decision: mathematically ready for `repaired`, confidence 1, with all three
  dependencies examined; the attempted item receipt was rejected because the
  unrelated Step 3a scope blocker remains.

### `lem-the-second-fundamental-form-is-a-symmetric-normal-bundle-valued-two-tensor`

- Claim/conventions: assuming `AC_omega`, proves both
  `C-infinity(M)`-linearity identities and symmetry of `II`, and concludes it
  is a smooth section of `S^2 T^*M tensor nu M`.
- Source locators read: Terng Proposition 2.1.1 and the subsequent
  identification of `II`, printed pages 24–25; Datar Proposition 14.1.3 with
  complete proof, printed page 102; Lee Lemma 8.1 with complete proof, printed
  pages 134–135.
- Dependencies read: the completed definition and Gauss decomposition, the
  induced Levi–Civita theorem, and the complete directional connection laws.
- Proof: steps 1.1 and 1.2 calculate function-linearity in each slot, with the
  derivative term in the second slot killed by normal projection; step 1.3
  subtracts the ambient and induced torsion identities to prove symmetry; step
  2.1 records smooth tensor-valuedness.
- AC/boundaries: `AC_omega` is inherited exactly through the preceding two
  submanifold suppliers and no new selection is made. Empty, zero- and
  one-dimensional, normal-rank-one, codimension-zero, boundary, and metric
  degeneracy cases are explicit. A fresh `sufficient` non-owner page-scope
  receipt was recorded at hash
  `3f25c4fecfd66e23a417c11ba055c7aa5c6170625649709947eace42d23a4454`.
- Checks: after adopting canonical proof-phase numbering, explicit-path
  precheck, rendercheck, and strict selected-item proof-contract validation
  all exit 0.
- Decision: mathematically ready for `repaired`, confidence 1, with all three
  dependencies examined; the attempted item receipt was rejected because the
  unrelated Step 3a scope blocker remains.

### `def-normal-connection`

- Claim/conventions: assuming `AC_omega`, defines the normal projection of the
  ambient derivative, and verifies both connection laws and compatibility with
  the induced normal metric.
- Source locator read: Terng Section 2.1 from the pointwise normal-connection
  definition through its adapted-frame expression, printed pages 25–26. A
  search of the full Lee source found no normal-connection definition, so the
  scaffold's unsupported `Lee Chapter 8` reference was removed rather than
  represented as evidence.
- Dependencies read: the smooth projection definition, the completed local
  extension-independence calculation, ambient Levi–Civita definition,
  directional connection laws, and metric-compatible-connection definition.
- Scaffold repairs: registered the well-definedness and metric-compatibility
  suppliers required by the proposed strategy. The definition explicitly
  calculates both connection laws and the normal metric identity.
- AC/boundaries: `AC_omega` is inherited exactly through the normal-bundle
  projection; no new choice is made. Empty, tangent-rank-zero,
  normal-rank-zero, rank-one, boundary, and nondegeneracy cases are explicit.
  A fresh `sufficient` non-owner page-scope receipt was recorded at hash
  `b6482320f589ed810ac752d3f8e62017cc6ed900c48ca279b14970a509fbaa6d`.
- Checks: explicit-path precheck, rendercheck, and strict selected-item
  proof-contract validation all exit 0.
- Decision: mathematically ready for `repaired`, confidence 1, with all five
  dependencies examined; the attempted item receipt was rejected because the
  unrelated Step 3a scope blocker remains.

### `def-shape-operator`

- Claim/conventions: assuming `AC_omega`, defines
  `S_nu X=-(bar nabla_X nu)^top` with the required minus sign, and proves that
  it depends smoothly and fibrewise bilinearly on the normal and tangent
  values.
- Source locators read: Terng Section 2.1 from the general-codimension
  definition through pointwise normal-linearity, printed pages 23–24; Datar
  Proposition 14.1.4(1), printed page 103, and the hypersurface specialization
  Definition 14.2.1, printed page 104.
- Dependencies read: the completed normal-connection definition, smooth
  tangential projection, and directional connection laws.
- Scaffold repair: registered the connection-law supplier used to kill the
  derivative term `X(f)nu` under tangential projection. The item now verifies
  both input slots and the resulting bundle map, without assuming the
  self-adjointness proved next.
- AC/boundaries: `AC_omega` is inherited only through the smooth normal
  projection. Empty, tangent-rank-zero, normal-rank-zero, rank-one, boundary,
  and degenerate-metric cases are explicit. A fresh `sufficient` non-owner
  page-scope receipt was recorded at hash
  `41fcae2224419b5cd0e3103d45a58cfc482fe67a3093a119b66ce959f9e6d75f`.
- Checks: explicit-path precheck, rendercheck, and strict selected-item
  proof-contract validation all exit 0.
- Decision: mathematically ready for `repaired`, confidence 1, with all three
  dependencies examined; the attempted item receipt was rejected because the
  unrelated Step 3a scope blocker remains.

### `thm-weingarten-equation-and-adjointness-of-the-shape-operator`

- Claim/conventions: assuming `AC_omega`, proves the signed Weingarten
  decomposition, the adjoint pairing
  `g(S_nu X,Y)=gbar(II(X,Y),nu)`, and self-adjointness of every shape operator.
- Source locators read: Terng Proposition 2.1.1 with complete proof, printed
  pages 24–25; Datar Proposition 14.1.4(1) with complete proof, printed page
  103; Lee Lemma 8.3 with complete proof, printed pages 135–136.
- Dependencies read: shape operator, normal connection, symmetric `II`, Gauss
  decomposition, and ambient Levi–Civita metric compatibility.
- Scaffold repair: registered the Gauss-decomposition and ambient
  metric-compatibility suppliers actually used by the pairing argument.
- Proof: step 1.1 is the orthogonal decomposition with the fixed minus sign;
  step 2.1 differentiates `gbar(nu,Y)=0`; step 3.1 uses symmetry of `II` to
  prove self-adjointness.
- AC/boundaries: `AC_omega` is inherited exactly through the smooth projection
  suppliers. Empty, tangent/normal-rank-zero, rank-one, boundary, and metric
  nondegeneracy cases are explicit. A fresh `sufficient` non-owner page-scope
  receipt was recorded at hash
  `bd265f0d27f9a9ff519a5461b70d12067609bb419877757d1ccc5ededb57c8ec`.
- Checks: explicit-path precheck, rendercheck, and strict selected-item
  proof-contract validation all exit 0.
- Decision: mathematically ready for `repaired`, confidence 1, with all five
  dependencies examined; the attempted item receipt was rejected because the
  unrelated Step 3a scope blocker remains.

### `thm-gauss-equation-for-a-riemannian-submanifold`

- Claim/conventions: assuming `AC_omega` and the fixed positive-sphere
  curvature convention, proves
  `Rm^M=Rm^Mbar+<II(X,W),II(Y,Z)>-<II(X,Z),II(Y,W)>` with exactly that term
  order.
- Source locators read: Terng equations (2.1.7) and (2.1.10), printed pages
  26–27; Datar Proposition 14.1.4(2) with complete proof, printed page 103;
  Lee Theorem 8.4 with complete proof, printed pages 136–137. Lee states the
  ambient-curvature form; algebraic rearrangement gives the promised
  intrinsic-curvature form with the same signs.
- Dependencies read: Weingarten/shape adjointness, Gauss decomposition, the
  induced Levi–Civita theorem, the curvature commutator, and Riemann
  four-tensor definition.
- Scaffold repair: registered the intrinsic-connection and curvature-
  commutator suppliers needed by the expansion.
- Proof: step 1.1 calculates the tangential component of each iterated ambient
  derivative; step 2.1 forms the curvature commutator; step 3.1 pairs with the
  last tangent argument and converts shape terms to `II` pairings.
- AC/boundaries: `AC_omega` is inherited through the smooth submanifold
  projections. Empty, tangent-rank-zero, tangent-rank-one, normal-rank-zero,
  boundary, and metric nondegeneracy cases are explicit. A fresh `sufficient`
  non-owner page-scope receipt was recorded at hash
  `e2784fc873e0926d698265e1b3dd767f1a99a1e1d3cd37aa93a0ad7eab44e775`.
- Checks: explicit-path precheck, rendercheck, and strict selected-item
  proof-contract validation all exit 0.
- Decision: mathematically ready for `repaired`, confidence 1, with all five
  dependencies examined; the attempted item receipt was rejected because the
  unrelated Step 3a scope blocker remains.

### `thm-codazzi-equation-for-a-riemannian-submanifold`

- Claim/conventions: assuming `AC_omega`, defines the connection induced on
  the normal-valued two-tensor `II` and proves that its skew in the derivative
  and first tensor slots is the normal component of ambient curvature, with
  the fixed curvature sign.
- Source locator read: Terng Section 2.1 from the adapted-frame definitions
  through the general ambient Codazzi equation (2.1.8), printed pages 25–27.
  A search of the complete Lee source found no moving-frame Codazzi equation,
  so the scaffold's unsupported Lee locator was removed.
- Dependencies read: normal connection, Gauss decomposition, smooth tensorial
  `II`, the induced torsion-free connection, and the curvature commutator.
- Scaffold repair: registered the induced Levi–Civita supplier needed to
  replace `nabla_XY-nabla_YX` by `[X,Y]`.
- Proof: step 1.1 computes all normal iterated-derivative terms; step 2.1 forms
  the ambient commutator including its bracket term; step 3.1 uses induced
  torsion-freeness and regroups exactly into the two covariant derivatives of
  `II`.
- AC/boundaries: `AC_omega` is inherited only through the tangent and normal
  projections. Empty, tangent-rank-zero, tangent-rank-one, normal-rank-zero,
  boundary, and nondegeneracy cases are explicit. A fresh `sufficient`
  non-owner page-scope receipt was recorded at hash
  `26024b83930ce75837b3930b7d77f59f21f100b5bc8632a67958663ce97294f0`.
- Checks: explicit-path precheck, rendercheck, and strict selected-item
  proof-contract validation all exit 0.
- Decision: mathematically ready for `repaired`, confidence 1, with all five
  dependencies examined; the attempted item receipt was rejected because the
  unrelated Step 3a scope blocker remains.

### `thm-ricci-equation-for-the-normal-connection`

- Claim/conventions: assuming `AC_omega`, fixes
  `[S_nu,S_mu]=S_nu S_mu-S_mu S_nu` and proves the normal-curvature equation
  with correction `-g([S_nu,S_mu]X,Y)` under the page's bracket-corrected
  curvature sign.
- Source locator read: Terng Section 2.1, equations (2.1.9) and (2.1.11) with
  the surrounding adapted-frame and curvature conventions, printed pages
  26–28. A search of the complete Lee source found no normal connection or
  Ricci moving-frame equation, so the unsupported scaffold locator was
  removed.
- Dependencies read: normal connection, pointwise-linear shape operator,
  Weingarten decomposition and self-adjointness, and vector-bundle curvature.
- Proof: step 1.1 expands each twice-differentiated normal field; step 2.1
  groups the three normal-connection terms into `R^perp`; step 3.1 pairs with
  a normal field and uses self-adjointness to obtain the exact commutator sign.
- AC/boundaries: `AC_omega` is inherited through smooth projection suppliers.
  Empty, tangent/normal-rank-zero, tangent-rank-one, normal-line, boundary, and
  nondegeneracy cases are explicit. A fresh `sufficient` non-owner page-scope
  receipt was recorded at hash
  `e411dbe6bb0872e29c080c12a02e86715f1d39cf1a101c8b2a13cef84ea5fa6a`.
- Checks: explicit-path precheck, rendercheck, and strict selected-item
  proof-contract validation all exit 0.
- Decision: mathematically ready for `repaired`, confidence 1, with all four
  dependencies examined; the attempted item receipt was rejected because the
  unrelated Step 3a scope blocker remains.

### `def-totally-geodesic-submanifold`

- Claim/conventions: assuming `AC_omega`, defines total geodesicity by the
  pointwise vanishing of the normal-valued tensor `II`, independently of
  frames, field extensions, and normal orientations.
- Source locator read: Lee Chapter 8, definition of total geodesicity and the
  `II=0` characterization in Exercise 8.4(c), printed page 139. The full Datar
  text contains no `totally geodesic` definition, so that unsupported scaffold
  reference was removed.
- Dependencies read: the Gauss-decomposition definition and the completed
  smooth symmetric tensor theorem for `II`.
- Scaffold repair: registered tensoriality of `II`, needed for the claimed
  pointwise/frame-independent interpretation. The geodesic characterizations
  are explicitly deferred rather than built into this local definition.
- AC/boundaries: `AC_omega` is inherited through the smooth projection
  defining `II`. Empty, tangent/normal-rank-zero, rank-one, boundary, and
  nondegeneracy cases are explicit. A fresh `sufficient` non-owner page-scope
  receipt was recorded at hash
  `066006aef2cad0b6ec550ae85d197504d13d62f93062f17eba451d4f8ededa15`.
- Checks: explicit-path precheck, rendercheck, and strict selected-item
  proof-contract validation all exit 0.
- Decision: mathematically ready for `repaired`, confidence 1, with both
  dependencies examined; the attempted item receipt was rejected because the
  unrelated Step 3a scope blocker remains.

### `thm-equivalent-characterizations-of-a-totally-geodesic-submanifold`

- Claim/conventions: assuming `AC_omega` and explicitly requiring both the
  submanifold and ambient manifold to be boundaryless, proves the three-way
  equivalence among `II=0`, preservation of tangent fields by ambient
  differentiation, and preservation of affinely parametrized geodesics on
  common intervals.
- Source locator read: Lee Chapter 8, definition and Exercise 8.4, printed
  page 139. The scaffold's `Lee Proposition 8.10` locator does not exist for
  this claim, and the Datar text contains no corresponding named result; both
  locators were repaired honestly.
- Dependencies read: totally geodesic definition, Gauss decomposition,
  induced Levi–Civita theorem, symmetric bilinearity of `II`, geodesic and
  curvewise-derivative definitions, and the geodesic initial-value theorem.
- Scaffold repairs: added the boundaryless hypotheses required by the
  library's geodesic definition and registered the curvewise derivative,
  induced-connection, and polarization suppliers. The curvewise Gauss formula
  is derived locally rather than assumed.
- Proof: step 1.1 proves the first two conditions equivalent; step 1.2 proves
  `II=0` sends intrinsic geodesics to ambient ones; step 2.1 realizes every
  tangent vector as initial velocity and obtains `II(v,v)=0`; step 3.1
  polarizes to recover all of `II`.
- AC/boundaries: `AC_omega` is inherited through smooth projections and the
  geodesic existence theorem, with only one supplied initial vector used at a
  time. Empty, zero- and one-dimensional, codimension-zero, manifold-boundary,
  parameter-endpoint, and nondegeneracy cases are explicit. A fresh
  `sufficient` non-owner page-scope receipt was recorded at hash
  `e0246adf43c132b5f1ec4403fc08427369fc281008f975703f32152686397c3f`.
- Checks: after adopting canonical proof-phase numbering, explicit-path
  precheck, rendercheck, and strict selected-item proof-contract validation
  all exit 0.
- Decision: mathematically ready for `repaired`, confidence 1, with all seven
  dependencies examined; the attempted item receipt was rejected because the
  unrelated Step 3a scope blocker remains.

### `def-principal-curvatures-gaussian-curvature-and-mean-curvature-of-an-oriented-hypersurface`

- Claim/conventions: assuming `AC_omega`, for a positive-dimensional
  hypersurface with a supplied smooth unit normal, defines principal
  curvatures as an unordered pointwise eigenvalue multiset, extrinsic
  Gauss–Kronecker curvature as `det S`, and scalar mean curvature as the
  average `(1/m)tr S`; it gives every normal-reversal law.
- Source locators read: Datar Definition 14.2.1, Corollary 14.2.2,
  Definition 14.2.7, and Remarks 14.2.8–14.2.9, printed pages 104–107; Lee
  Chapter 8 from the scalar second fundamental form through principal,
  Gaussian, and mean curvatures, printed pages 139–142.
- Dependencies read: hypersurface definition, pointwise normal-linearity of
  the shape operator, Weingarten self-adjointness, real spectral theorem, and
  basis-independent determinant and trace.
- Scaffold repairs: added `m>=1` because `(1/m)tr S` is undefined at `m=0`;
  distinguished the pointwise unordered eigenvalue multiset from nonexistent
  globally smooth eigenvalue orderings; registered normal-linearity to justify
  `S_{-nu}=-S_nu`. Trace/determinant smoothness is verified without choosing
  eigenvectors smoothly.
- AC/boundaries: `AC_omega` is inherited through the smooth shape field; the
  spectral theorem is used only at a supplied point. Empty fixed-positive-
  dimensional, excluded dimension-zero, dimension-one, boundary, and metric
  nondegeneracy cases are explicit. A fresh `sufficient` non-owner page-scope
  receipt was recorded at hash
  `09c867ced6230b0908070d4a08cebf580ac82022b996c552fcd2be8575f513eb`.
- Checks: explicit-path precheck, rendercheck, and strict selected-item
  proof-contract validation all exit 0.
- Decision: `repaired`, confidence 1, with all six dependencies examined;
  current item receipt is
  `research/phase-2-next-21-step3b-review-def-principal-curvatures-gaussian-curvature-and-mean-curvature-of-an-oriented-hypersurface.json`.

### Receipt reconciliation

- The unrelated batch-4 scope blocker cleared before this item. Current
  `accept`/`repaired` receipts have now been written for every completed item
  through this checkpoint, including the formerly pending items 5–41. Their
  historical checkpoint notes retain the fact that their first attempts were
  rejected; the later receipts are authoritative for current state.

### `prop-euclidean-hypersurface-sectional-curvature-from-principal-curvatures`

- Claim/conventions: assuming `AC_omega`, for `m>=2` and two distinct supplied
  orthonormal principal directions, proves that their tangent two-plane has
  sectional curvature `kappa_i kappa_j`.
- Source locators read: Datar Corollary 14.2.2(4) including its sectional-
  curvature specialization, printed pages 104–105; Lee's Euclidean
  hypersurface Gauss equation (8.4) and principal-curvature diagonalization,
  printed pages 140–142.
- Dependencies read: principal-curvature definition, shape/`II` pairing,
  submanifold Gauss equation, Euclidean flatness from the local-Euclidean
  theorem, and sectional-curvature definition.
- Scaffold repairs: added `m>=2` and `i!=j`, without which the displayed plane
  may not exist; registered the three suppliers for the mixed `II` term,
  ambient flatness, and conversion from `Rm` to `K`.
- Proof: step 1.1 calculates all four relevant `II` values from the principal
  direction equations; step 2.1 substitutes them into Gauss with exact slot
  order and uses the unit Gram denominator.
- AC/boundaries: `AC_omega` is inherited through the hypersurface suppliers;
  the principal directions are supplied. Empty and boundary cases are
  explicit, while dimensions zero and one are item-specifically excluded. A
  fresh `sufficient` non-owner page-scope receipt was recorded at hash
  `3deff16b65b04604cf9877a35e94eebc7f3db502867ac0bdd3b20e82d5c56a93`.
- Checks: explicit-path precheck and strict proof contract pass. Rendercheck
  first warned about a stray nonbreaking space in a math span; it was removed
  and the clean rerun exits 0.
- Decision: mathematically ready for `repaired`, confidence 1, with all five
  dependencies examined. Its first receipt attempt was rejected because the
  unrelated page `bocksteins-steenrod-squares-and-cohomology-operations`
  changed after the preceding reconciliation and now needs its own current
  Step 3a scope receipt.

### `thm-gausss-theorema-egregium`

- Claim/conventions: assuming `AC_omega`, for a Riemannian surface in
  Euclidean three-space and either supplied smooth local unit normal, proves
  `det S_nu=K(T_pM)`, including normal-sign independence and the intrinsic
  dependence on the induced metric.
- Source locators read: Datar Proposition 14.2.12 with its complete pointwise
  proof, printed page 108; Lee Chapter 8, Theorem 8.6 and its complete proof,
  printed pages 143–144.
- Dependencies read: the submanifold Gauss equation, Weingarten adjointness,
  Euclidean flatness via the local-Euclidean characterization, uniqueness of
  the Levi–Civita connection, basis-independent determinant, and sectional
  curvature.
- Scaffold repairs: registered Euclidean flatness and uniqueness of the
  Levi–Civita connection, which the intrinsic conclusion actually uses. The
  proof computes the determinant in an arbitrary orthonormal tangent basis,
  so it does not need to select or smoothly order principal directions.
- Proof: step 1.1 identifies the normal-valued second fundamental form with
  the scalar matrix of `S_nu`; step 2.1 applies Gauss with exact slot order and
  identifies the resulting quadratic expression with the determinant; step
  3.1 proves sign independence and intrinsic dependence.
- AC/boundaries: `AC_omega` is inherited through the submanifold projection
  suppliers, while only one finite tangent basis and the supplied normal are
  used. The empty case is vacuous, dimensions zero and one are excluded by
  the surface hypothesis, and the pointwise computation remains valid at a
  boundary point. A fresh `sufficient` non-owner page-scope receipt was
  recorded at hash
  `7fce530fce1f3026d2e315d97087b8552a65a5c6845f11a25e0e4a1da8c0880b`.
- Checks: explicit-path precheck, rendercheck, and strict selected-item
  proof-contract validation all exit 0.
- Decision: mathematically ready for `repaired`, confidence 1, with all six
  dependencies examined. Its item-receipt attempt was rejected because the
  unrelated page `bocksteins-steenrod-squares-and-cohomology-operations`
  currently lacks a matching Step 3a scope receipt.

### `def-mean-curvature-vector`

- Claim/conventions: assuming `AC_omega`, for a supplied smooth immersion
  `f:M^m -> Mbar` with `m>=1` and its induced metric defines the immersion
  normal bundle, the locally glued `II_f`, and the averaged vector
  `H_f=(1/m)tr_g II_f`; it proves smoothness and independence from the tangent
  orthonormal basis and from every normal orientation or frame.
- Source locators read: Calegari Chapter 3, Section 2.2 from the definition
  preceding Proposition 2.1 through normalization Warning 2.4, printed pages
  12–13; Terng Section 2.1 from the unnormalized trace definition through
  first-variation formula (2.1.22), printed pages 30–31. Both sources use the
  unnormalized trace; Calegari explicitly identifies `(1/m)tr II` as the more
  usual averaged convention, so their vector is `m H` here.
- Dependencies read: the completed embedded normal-bundle-valued tensor
  theorem for `II`, contraction and its basis-independence lemma, the smooth
  inverse metric, existence of finite-dimensional orthonormal bases, the
  pullback-metric immersion criterion, smooth orthogonal complements,
  pullback-connection functoriality, and the local-embedding theorem for
  immersions.
- Scaffold repairs: added `m>=1` because the promised average is undefined at
  `m=0`; registered the actual basis-independence, inverse-metric smoothness,
  and orthonormal-basis suppliers; and extended the original embedded-only
  prerequisite interface to arbitrary supplied immersions, as the next
  promised result requires. The pullback-connection formula proves that the
  locally embedded second fundamental forms agree on overlaps. The source
  normalization conversion needed by that consumer is explicit.
- Definition calculations: an explicit orthogonal-change calculation proves
  basis independence, while the local formula
  `(1/m) sum g^{ij} II(X_i,X_j)` proves smoothness componentwise without any
  normal frame in the definition.
- AC/boundaries: `AC_omega` is inherited exactly through construction of
  `II`, and a finite trace makes no new family choice. The empty fixed-
  positive-dimensional, dimension-one, codimension-zero, and boundary cases
  are explicit; dimension zero and degenerate metrics are item-specifically
  excluded. A fresh `sufficient` non-owner page-scope receipt was recorded at
  hash
  `0193760853b408e4df05ba1e6d32c488692c4be865f624cb20b961d4c7d86edd`.
- Checks: explicit-path definition precheck reports zero checkable bodies and
  zero failures; rendercheck and strict selected-item proof-contract
  validation both exit 0.
- Decision: `repaired`, confidence 1, with all nine dependencies examined;
  the current item receipt was written successfully after the unrelated scope
  blocker cleared.

### `prop-first-variation-of-volume-for-a-normal-variation`

- Claim/conventions: assuming `AC_omega`, for a smooth family of immersions
  of an `m>=1` manifold with normal compactly supported variation field,
  defines volume by the pullback Riemannian density and proves
  `A_K'(0)=-m int <V,H_f>`, independence from every eligible compact domain,
  and the compact-total-volume specialization.
- Source locators read: Calegari Chapter 3, Section 2.2, complete density
  calculation and Proposition 2.1 through normalization Warning 2.4, printed
  pages 12–13; Terng Section 2.1, the unnormalized trace convention and
  first-variation formula (2.1.22), printed pages 30–31.
- Dependencies read: the repaired immersion mean-curvature definition,
  Riemannian density and its compact-support integration, boundary smoothness,
  the pullback-metric immersion criterion, Jacobi's determinant formula,
  dominated differentiation under the integral, Levi–Civita torsion and
  metric compatibility, symmetric coordinate Christoffel symbols, local
  embeddedness of immersions, the Weingarten identity, completeness and
  diffeomorphic time maps for compactly supported tangent fields, and
  diffeomorphism invariance of intrinsic density integration.
- Scaffold repairs: added `m>=1`; required
  `supp V subset int_M K`; defined `Vol(F_t(K))` as the intrinsic integral of
  the pullback density (so self-intersections are counted with multiplicity);
  removed the unused oriented divergence theorem; and registered every
  supplier used by the actual normal-variation proof.
- Proof: steps 1.1–3.1 commute the variation/tangent derivatives, differentiate
  the Gram determinant by Jacobi, and use Weingarten plus the averaged trace
  to obtain the pointwise density derivative with the exact factor `m`.
  Step 4.1 verifies dominated differentiation on a fixed compact domain;
  step 5.1 uses support locality for domain independence; step 6.1 gives total
  stationarity for arbitrary compactly supported variations on boundaryless
  `M` by flowing away the tangential component without changing volume; step
  6.2 gives total volume when `M` is compact.
- AC/boundaries: `AC_omega` is inherited through the immersion normal
  projections, embedded Weingarten supplier, and intrinsic density integral.
  Empty fixed-positive-dimensional, dimension-one, zero-field, compact-domain
  boundary, and interior parameter cases are explicit; dimension zero and
  degenerate pullback metrics are item-specifically excluded. A fresh
  `sufficient` non-owner page-scope receipt was recorded at hash
  `116fe119f962003a4120ce989fa4e357b78a6f93826cd994e2a6b84624c594ef`.
- Checks: after adopting canonical one-phase-per-step numbering,
  explicit-path precheck, rendercheck, and strict selected-item proof-contract
  validation all exit 0.
- Decision: `repaired`, confidence 1, with all fourteen dependencies examined;
  the current item receipt was written successfully.

### `rem-mean-curvature-and-minimal-submanifolds`

- Claim/conventions: assuming `AC_omega`, defines a positive-dimensional
  immersion to be minimal when `H_f=0`; on a boundaryless source records
  stationarity under all compactly supported variations, and carefully limits
  the boundary case to the proved normal-variation statement.
- Source locators read: Calegari Chapter 3, Section 2.2, Proposition 2.1
  through Definition 2.2, Example 2.3, and Warning 2.4, printed pages 12–13;
  Lee Chapter 8, the complete Gaussian/mean-curvature and minimal-
  hypersurface discussion, printed pages 142–143.
- Dependencies read: the completed mean-curvature and first-variation items,
  totally geodesic and shape-operator definitions, Weingarten adjointness,
  Riemannian density, and the explicit round-sphere Levi–Civita formula.
- Scaffold repairs: replaced bare warnings by two calculated witnesses and
  stated exactly which variation class is covered when the source has a
  boundary.
- Calculations: the Clifford torus in `S^3` has unit normal derivative giving
  shape eigenvalues `-1,+1`, hence `H=0` but nonzero `II`; the equator in
  `S^{m+1}` has zero shape, while its latitude variation has metric
  `cos^2(t)g` and volume `(cos t)^m Vol(S^m)`, strictly smaller for every
  sufficiently small nonzero `t`.
- AC/boundaries: `AC_omega` is inherited only through the mean-curvature and
  first-variation suppliers. Empty fixed-positive-dimensional, dimension-one,
  and nondegenerate cases are explicit; dimension zero is excluded, and no
  boundary-moving conclusion is claimed. A fresh `sufficient` non-owner
  page-scope receipt was recorded at hash
  `1479111873a4ee100540ace08abcf20f5c172e07a3ece5f9ad410bbcdff5a61a`.
- Checks: explicit-path definition-style precheck reports zero checkable bodies
  and zero failures; rendercheck and strict selected-item proof-contract
  validation both exit 0.
- Decision: mathematically ready for `repaired`, confidence 1, with all seven
  dependencies examined. Its item-receipt attempt was rejected because a new
  unrelated Step 3a scope mismatch appeared concurrently.

### `fs-curvature-is-obtained-by-commuting-two-covariant-derivatives-without-a-bracket-correction`

- Claim/conventions: refutes tensoriality of the raw commutator
  `C(X,Y)Z=nabla_X nabla_Y Z-nabla_Y nabla_X Z` and identifies the exact
  cancellation supplied by `-nabla_[X,Y] Z`.
- Source locators read: Datar Lecture 11, Section 11.1, curvature definition
  and coordinate formula, printed pages 71–72; Lee Chapter 7, flatness
  criterion (7.3), curvature definition, and complete Proposition 7.1 proof,
  printed pages 117–118.
- Dependencies read: the curvature definition and completed tensoriality
  lemma, affine-connection and directional connection laws, and the Lie-
  bracket Leibniz rules.
- Scaffold repair: registered the actual connection and bracket-law suppliers
  used by the promised expansion, and added a concrete counterexample rather
  than treating a formal obstruction as a witness.
- Refutation: step 1.1 derives
  `C(X,fY)Z=fC(X,Y)Z+X(f)nabla_YZ`; step 2.1 takes the flat line with
  `X=Y=partial_x`, `f=x`, `Z=x partial_x` and obtains
  `C(X,fX)Z=partial_x != 0=fC(X,X)Z`; step 2.2 displays the bracket term that
  cancels the defect.
- Boundaries/choice: the witness is nonempty, boundaryless, and one-
  dimensional; empty and zero-dimensional manifolds cannot witness it. The
  calculation is local, needs no metric, and is choice-free. The current page
  scope hash remains
  `1479111873a4ee100540ace08abcf20f5c172e07a3ece5f9ad410bbcdff5a61a`.
- Checks: after adopting canonical proof-phase numbering, explicit-path
  precheck, rendercheck, and strict selected-item proof-contract validation all
  exit 0.
- Decision: mathematically ready for `repaired`, confidence 1, with all five
  dependencies examined. Its item-receipt attempt was rejected by the
  unrelated current Step 3a scope blocker.

## Open obligations / next action

### `fs-christoffel-symbols-vanishing-at-one-point-implies-curvature-vanishes-there`

- Claim/conventions: assuming `AC_omega`, refutes the coordinate-dependent
  implication that vanishing Levi–Civita Christoffel values at a point forces
  vanishing curvature there. The curvature convention is the page convention
  `R(partial_i,partial_j)partial_k=R^ell_{kij}partial_ell`.
- Source locators read: Datar Lemma 11.3.1 and its full calculation, printed
  pages 74–75; Lee Proposition 5.11, printed pages 77–78, and equations
  (7.3)–(7.4), printed pages 117–119. Coverage now records both exact source
  results; the batch coverage check reports 83 harvested results with no
  errors or warnings.
- Dependencies read: the completed coordinate curvature formula; normal-
  neighbourhood/coordinate existence and centre properties; `AC_omega`; the
  regular-level-set theorem and tangent-kernel proposition; the shape and
  principal-curvature definitions; the completed Euclidean hypersurface
  curvature formula; and sectional curvature.
- Scaffold repairs: added all eight missing mathematical suppliers for the
  promised round-sphere witness and replaced the strategy-only prose by a
  complete calculation. The point and tangent basis are explicit, avoiding an
  unrecorded eigenbasis choice.
- Refutation: `S^2=F^{-1}(1)` for `F(q)=|q|^2` has
  `T_qS^2=q^perp` and smooth unit normal `nu(q)=q`. At
  `p=(0,0,1)`, the supplied orthonormal vectors `e_1,e_2` satisfy
  `S_nu e_i=-e_i`, so `K=1`. Their normal coordinates have `Gamma(p)=0`,
  while the exact component formula gives
  `partial_1 Gamma^1_22(p)-partial_2 Gamma^1_12(p)=1`.
- AC/boundaries: countable choice is used exactly by the library's normal-
  coordinate construction. The witness is nonempty, boundaryless,
  two-dimensional and positive definite; zero and one dimensions have no
  sectional-curvature witness, normal-chart domains are open, and no
  biconditional is asserted.
- Checks: explicit-path precheck, rendercheck, strict selected-item proof-
  contract validation, dependency resolution, and the current batch coverage
  checklist all pass. A fresh `sufficient` page-scope receipt retains hash
  `1479111873a4ee100540ace08abcf20f5c172e07a3ece5f9ad410bbcdff5a61a`.
- Decision: `repaired`, confidence 1, with all ten dependency IDs examined;
  the item receipt was written successfully.

### `fs-sectional-curvature-depends-on-an-ordered-basis-of-the-plane`

- Claim/conventions: refutes dependence of sectional curvature on either the
  choice or ordering of a supplied basis; the result is attached to the
  unoriented tangent two-plane.
- Source locators read: Datar Proposition 12.1.1 and Definition 12.1.3,
  printed pages 81–82; Lee Proposition 8.8 and its complete proof, printed
  pages 145–146. The owned coverage was corrected from the false Lee
  `Lemmas 7.2–7.3` label to Proposition 8.8 and Lemma 8.9 and now reports 84
  harvested results with no errors or warnings.
- Dependency read: the completed
  `lem-sectional-curvature-is-independent-of-the-basis-of-the-plane`,
  including its two alternating-pair expansions and Gram-matrix determinant
  calculation.
- Refutation: for an arbitrary basis-change matrix `A`, the Riemann numerator
  and Gram denominator both acquire `(det A)^2`; the common nonzero factor
  cancels. The explicit swap matrix has determinant `-1`, so orientation
  reversal has factor one and two curvature alternations restore the original
  numerator.
- Boundaries/choice: empty, zero-dimensional, and one-dimensional manifolds
  have no tangent two-planes; positive definiteness excludes a zero Gram
  determinant; there is no parameter endpoint. Both bases are supplied and
  no choice axiom or biconditional occurs.
- Checks: explicit-path precheck, rendercheck, strict selected-item proof-
  contract validation, and the batch coverage checklist all pass. The current
  non-owner `sufficient` scope receipt retains hash
  `1479111873a4ee100540ace08abcf20f5c172e07a3ece5f9ad410bbcdff5a61a`.
- Decision: `repaired`, confidence 1, with the sole dependency examined; the
  item receipt was written successfully.

### `fs-ricci-curvature-and-scalar-curvature-determine-the-full-riemann-tensor-in-every-dimension`

- Claim/conventions: refutes pointwise determination of the full Riemann
  tensor by its Ricci and scalar contractions in every dimension. It uses the
  page's sign convention and supplies a genuine local four-dimensional
  Riemannian metric with nonzero Weyl curvature and zero Ricci contraction.
- Source locators read: Datar Proposition 12.1.1, printed pages 80–82;
  Lemma 11.3.1 and proof, printed pages 74–75; and the complete algebraic
  decomposition from Lecture 13, printed pages 89–95. The scaffold's Lee
  Chapter 7 citation was removed because that chapter contains curvature
  symmetries and flatness, not the promised Weyl decomposition. Datar supplies
  the complete authoritative argument, so no source uncertainty remains.
- Dependencies read: Ricci decomposition, all algebraic Riemann symmetries,
  Ricci/scalar definitions, the four-tensor convention, the coordinate metric
  criterion, Levi–Civita Christoffel and curvature coordinate formulas, and
  the exterior-square basis theorem.
- Scaffold repairs: registered eight missing suppliers and closed the gap
  between an abstract algebraic tensor and actual Riemannian curvature by
  constructing a local metric that realizes it.
- Construction: the specified diagonal operator on the ordered orthonormal
  wedge basis has eigenvalues `(1,-1,0,1,-1,0)`. Diagonality proves Bianchi in
  the four-distinct cases, pair skewness handles repetitions, all off-diagonal
  Ricci entries vanish, and the four diagonal sums are respectively
  `1-1+0`, `1-1+0`, `-1+1+0`, and `0+1-1`. The nonzero algebraic tensor `A`
  is realized at the origin by
  `g_ij=delta_ij+(1/3)A_ikjl x^k x^l`; direct substitution in the coordinate
  curvature formula gives `Rm_g(0)=A`. The Euclidean metric has the same zero
  Ricci/scalar data there but zero full curvature.
- Boundaries/choice: the witness is a nonempty boundaryless open four-ball,
  shrunk so the polynomial metric is positive definite. Dimensions zero and
  one are flat, and dimensions two and three are correctly recorded as true
  low-dimensional special cases. There is no endpoint or choice principle and
  no biconditional.
- Checks: explicit-path precheck, rendercheck, strict selected-item contract,
  and coverage checklist all pass. Coverage now records 85 harvested results;
  the current `sufficient` scope receipt retains hash
  `1479111873a4ee100540ace08abcf20f5c172e07a3ece5f9ad410bbcdff5a61a`.
- Decision: `repaired`, confidence 1, with all nine dependency IDs examined;
  the item receipt was written successfully.

### `fs-the-second-fundamental-form-is-intrinsic-to-the-abstract-riemannian-manifold`

- Claim/conventions: assuming `AC_omega`, refutes intrinsic determination of
  the vector-valued second fundamental form even when the ambient space is the
  same and the induced abstract metric is fixed.
- Source locators read: Lee Chapter 1, complete explicit plane-to-half-
  cylinder comparison, printed pages 5–6, and Chapter 8 equations (8.2)–(8.4),
  printed pages 139–140; Datar Examples 14.2.5–14.2.6 and Remark 14.2.9,
  printed pages 105–107. The manifest and owned coverage corrected the
  scaffold's erroneous `Example 14.2.4` cylinder locator.
- Dependencies read: the vector-valued `II` definition and its local
  well-definedness calculation, Theorema Egregium with its exact intrinsic
  conclusion, and the Euclidean Christoffel formula.
- Counterexample: on `U=R times (0,pi)`, the plane embedding
  `P(x,y)=(x,y,0)` and half-cylinder embedding
  `C(x,y)=(x,cos y,sin y)` both pull back the Euclidean metric to
  `dx^2+dy^2`. Direct ambient differentiation gives `II_P=0`, whereas with
  `N=(0,cos y,sin y)` it gives `II_C(partial_y,partial_y)=-N`. Their shape
  determinants and intrinsic Gaussian curvatures are both zero.
- AC/boundaries: the strip is nonempty, boundaryless and two-dimensional,
  with positive-definite induced metric; `(0,pi)` excludes both angular
  endpoints. `AC_omega` is inherited exactly through the two submanifold
  suppliers; all geometric data are explicit and make no further selection.
- Checks: explicit-path precheck, rendercheck, strict selected-item contract,
  and coverage checklist all pass. Coverage now records 87 harvested results;
  the current `sufficient` scope receipt retains hash
  `1479111873a4ee100540ace08abcf20f5c172e07a3ece5f9ad410bbcdff5a61a`.
- Decision: `repaired`, confidence 1, with all three dependency IDs examined;
  the item receipt was written successfully.

### `fs-zero-mean-curvature-implies-a-submanifold-is-totally-geodesic`

- Claim/conventions: refutes the implication from vanishing normalized mean-
  curvature vector to total geodesicity for submanifolds of dimension at least
  two; it separately records that the implication is true for curves.
- Source locators read: Calegari, *Chapter 3: Minimal Surfaces*, Lemma 1.2 and
  Example 1.6, printed pages 4–7, together with Section 2.2 and equation (2.1),
  printed pages 12–14; Lee, *Introduction to Riemannian Manifolds*, the mean-
  curvature discussion on printed pages 142–143. The manifest and coverage
  were repaired to these exact locations.
- Dependencies read: normalized mean-curvature vector, total geodesicity,
  second fundamental form, the Euclidean Christoffel formula, and the stated
  trigonometric and hyperbolic identities and derivative results.
- Counterexample: on `U=(-pi,pi) times R`, the catenoid parametrization
  `X(u,v)=(cosh(v)cos(u),cosh(v)sin(u),v)` is an injective immersion and hence
  an embedding onto its image. Its induced metric is
  `cosh(v)^2(du^2+dv^2)`. With
  `N=(sech(v)cos(u),sech(v)sin(u),-tanh(v))`, the scalar second-fundamental-
  form coefficients are `(-1,0,1)`, so on the associated orthonormal frame
  the vector-valued diagonal entries are `-sech(v)^2 N` and
  `sech(v)^2 N`. Their normalized trace is zero, while `II` is nonzero at
  every point; at `(0,0)`, `II(partial_u,partial_u)=-N=(-1,0,0)`.
- Boundaries/choice: the parameter domain is nonempty, open and boundaryless,
  and the excluded angular endpoints make injectivity explicit. In dimension
  one the normalized trace equals the sole diagonal value, so zero mean
  curvature does force `II=0`; dimensions zero and the empty case supply no
  counterexample. No choice principle or biconditional is used.
- Checks: explicit-path precheck, rendercheck, strict selected-item proof-
  contract validation, dependency resolution, and the batch coverage
  checklist all pass. Coverage reports 88 harvested results with no errors or
  warnings. The fresh non-owner `sufficient` scope receipt retains hash
  `1479111873a4ee100540ace08abcf20f5c172e07a3ece5f9ad410bbcdff5a61a`.
- Decision: `repaired`, confidence 1, with all seven dependency IDs examined;
  item receipt SHA
  `dae4fb58f97b56ddc8ea9b248e6d0f785f317b12319fa8ee70e0f661212252f5`
  was written successfully.

### `ex-euclidean-space-has-zero-curvature`

- Claim/conventions: for every integer `n >= 0`, the standard Euclidean
  metric on `R^n` has zero curvature endomorphism in the page's sign and index
  convention.
- Source locators read: Datar Example 11.1.2, printed page 72; Lee equation
  (7.3) and the Euclidean-to-flat direction of Theorem 7.3, printed pages
  117–120. Both results are now registered in the owned coverage, which
  reports 90 harvested results with no errors or warnings.
- Dependencies read: the coordinate criterion for a Riemannian metric, the
  Levi–Civita Christoffel formula, and the completed coordinate curvature
  formula.
- Scaffold repair and calculation: added the first two missing suppliers.
  The constant matrix `delta_ij` is smooth symmetric positive definite; all
  its first derivatives vanish, so the Christoffel formula gives every
  `Gamma^k_ij=0`, including their derivatives. Every derivative and quadratic
  term in `R^l_kij` is therefore zero.
- Boundaries/choice: `R^0` is the one-point zero-dimensional manifold and its
  empty index ranges give its unique zero curvature field; the same calculation
  gives the sole component in dimension one. The standard metric is explicitly
  nondegenerate, the global chart has no boundary or endpoint, no choice is
  used, and no biconditional is asserted.
- Checks: explicit-path precheck, rendercheck, strict selected-item proof
  contract, and coverage checklist pass. The current non-owner `sufficient`
  scope receipt retains hash
  `1479111873a4ee100540ace08abcf20f5c172e07a3ece5f9ad410bbcdff5a61a`.
- Decision: `repaired`, confidence 1, with all three dependency IDs examined;
  item receipt SHA
  `6a33fc1636d4e3b003d65c73f8bb9f6445bd452e38b89271681146d87a13d1c8`
  was written successfully.

### `ex-the-round-sphere-has-positive-constant-sectional-curvature`

- Claim/conventions: assuming `AC_omega`, for `r>0` and `n>=2` the
  induced round metric on `S^n_r` has constant sectional curvature `1/r^2`;
  for dimensions zero and one the sectional-curvature domain is empty. The
  page's Weingarten sign makes the outward-normal shape operator `-I/r`.
- Source locators read: Datar Corollary 14.2.2 and Example 14.2.3, printed
  pages 104–105; Lee equations (8.2)–(8.4), printed pages 140–141. Coverage
  now assigns Datar's sphere example to this item instead of conflating it
  with the cylinder, and reports 92 harvested results without errors or
  warnings.
- Dependencies read: countable choice, the regular-level-set and tangent-
  kernel results, the Euclidean Christoffel and connection laws, Weingarten,
  Gauss, the completed Euclidean-flat example, and sectional curvature.
- Scaffold repairs and calculation: proved `S^n_r=Q^{-1}(r^2)` is a
  nonempty regular level of `Q(y)=|y|^2` and that its tangent space is
  `y^perp`. The outward normal `nu=y/r` obeys
  `nabla-bar_u nu=u/r`, hence `S_nu=-I/r` and
  `II(u,v)=-(1/r)g(u,v)nu`. Gauss gives exactly `1/r^2` times the Gram
  determinant, which sectional curvature divides by.
- AC/boundaries: `AC_omega` is assumed and declared because Weingarten and
  Gauss inherit it through their smooth orthogonal projection construction;
  the witness, normal and basis are explicit or supplied. The explicit point
  `(r,0,...,0)` proves nonemptiness. The endpoint `r=0` is excluded because
  the level ceases to be regular and `1/r^2` is undefined. Positive
  definiteness handles degeneracy; no biconditional is asserted.
- Checks: explicit-path precheck, rendercheck, strict selected-item proof
  contract, and coverage checklist pass. The refreshed non-owner
  `sufficient` scope receipt has hash
  `16327ae038c00497f9c6280c266bc336d278a6f76c0b9a4254415e1110b2a1a1`.
- Decision: `repaired`, confidence 1, with all nine dependency IDs examined;
  item receipt SHA
  `9656f285102152a9b6c0a3cd62e3b982763118da5dd0ccb4084b249aa366ff6f`
  was written successfully.

### `ex-hyperbolic-space-has-negative-constant-sectional-curvature`

- Claim/conventions: for `r>0` and `n>=2`, the Poincare upper-half-space
  metric `r^2 (x^n)^(-2) delta_ij` has sectional curvature `-1/r^2`; for
  `n=1` the sectional-curvature domain is empty. The computation is
  choice-free and uses the page's curvature index order.
- Source locators read: Datar Example 8.2.6, printed page 49; Lee Proposition
  3.5(c), printed pages 38–42, and the model-space sectional-curvature
  calculation, printed pages 148–149. This repairs the scaffold's incorrect
  `Datar Lecture 11 examples` locator. Coverage reports 94 harvested results
  without errors or warnings.
- Dependencies read: the coordinate Riemannian-metric criterion, Levi–Civita
  Christoffel formula, coordinate curvature formula, curvature tensoriality,
  the four-tensor definition, and sectional curvature. The unnecessary
  AC-bearing constant-curvature equivalence was removed to keep the coordinate
  argument choice-free.
- Calculation: with `h=x^n`, the exact symbols are
  `Gamma^k_ij=-h^(-1)(delta_in delta^k_j + delta_jn delta^k_i - delta_ij
  delta^k_n)`. Expanding both derivative terms and all contracted quadratic
  terms gives
  `R^l_kij=h^(-2)(delta_ik delta^l_j-delta_jk delta^l_i)`, hence
  `R(X,Y)Z=-(1/r^2)(g(Y,Z)X-g(X,Z)Y)`. Pairing and dividing gives the promised
  value. A finite index enumerator independently confirmed the displayed
  Kronecker contraction in dimensions 1 through 5.
- Boundaries/choice: the half-space is explicitly nonempty and boundaryless;
  dimension zero is inapplicable because `x^n` requires `n>=1`, and dimension
  one has no two-plane. Positive definiteness and the Gram determinant exclude
  degeneracy. `h=0` and `r=0` are the singular/degenerate endpoints and are
  excluded; no limit is asserted. All data are explicit or supplied, so no
  choice is used, and no biconditional is asserted.
- Checks: explicit-path precheck, rendercheck, strict selected-item proof
  contract, coverage checklist, and the finite index check pass. The refreshed
  non-owner `sufficient` scope receipt has hash
  `0ae20385a6dd1747d0521ca2df0663ec78d99ff004429909d1e31061e4feb20f`.
- Decision: `repaired`, confidence 1, with all six dependency IDs examined;
  item receipt SHA
  `c273de979d268c4deda5ae974304c11f7dc110229842d82682f336e93ddbd812`
  was written successfully.

### `ex-curvature-of-a-riemannian-product`

- Claim/conventions: the product Levi–Civita connection splits on canonical
  factor lifts, the curvature tensor splits pointwise on arbitrary tangent
  triples, and a two-plane spanned by one nonzero pure vector from each factor
  has zero sectional curvature. The connection statement is deliberately not
  misstated for arbitrary component fields that may depend on both factors.
- Source locators read: Datar Example 8.2.8, printed page 49; Lee product
  metric (3.3), printed pages 26–27, and Problem 8-7(a)–(b), printed page 151.
  Coverage now records these exact results and reports 96 harvested results
  with no errors or warnings.
- Dependencies read: the product metric, canonical tangent/cotangent product
  splitting, uniqueness of Levi–Civita, the Christoffel and directional
  connection laws, coordinate curvature formula and tensoriality, the
  four-tensor, and sectional curvature.
- Scaffold repairs and calculation: replaced the ambiguous unqualified
  connection split by the exact factor-lift identities. In product coordinates
  the metric and inverse are block diagonal and each block depends only on its
  own coordinates. Christoffel's formula gives precisely the two factor symbol
  families and zero mixed symbols. Pure curvature components reproduce the
  factors; every mixed component has a zero mixed symbol or cross derivative.
  Tensorial expansion gives the direct sum, and the mixed-plane numerator is
  zero over the positive denominator `g(u,u)h(v,v)`.
- Boundaries/choice: an empty factor gives a vacuous empty product; a
  zero-dimensional factor contributes an empty block and no mixed plane, while
  one-dimensional blocks are covered normally. Positive definiteness handles
  degeneracy. There is no interval, scale endpoint or boundary claim. All
  charts and vectors are supplied and Levi–Civita is unique, so no choice is
  used; no biconditional is asserted.
- Checks: canonical explicit-path precheck, rendercheck, strict selected-item
  contract, and coverage checklist pass. The refreshed non-owner `sufficient`
  scope receipt has hash
  `361bd49607ddb5a4a46b1234c259a71ac20596747437e89783dbd93d56224382`.
- Decision: `repaired`, confidence 1, with all nine dependency IDs examined;
  item receipt SHA
  `d255762db6b0bd94a4761ad87cf9250a6b5b8fc773ebb4515adddddba4e1c112`
  was written successfully.

- Read the actual relevant DG-21 source arguments and the exact statements and
  proofs of each dependency while authoring in manifest order.
- Retry the coordinate-formula item decision after the two unrelated Step 3a
  scope receipts are refreshed. In the meantime, continue completing and
  checkpointing items locally in prerequisite order, but keep their item
  receipts pending rather than modifying another group's scope records.
- Next local item:
  `ex-gaussian-curvature-of-a-surface-of-revolution`.
- Do not edit the serial published-consumer ledger. Report any published
  concern here for Step 4 reconciliation.

### `ex-gaussian-curvature-of-a-surface-of-revolution`

- Claim/conventions: for a smooth unit-speed profile `(r,z)` with `r>0`, the
  induced metric on each surface-of-revolution chart is `du^2+r^2dv^2` and
  its intrinsic Gaussian (sectional) curvature is `-r''/r`. No value or limit
  is asserted at an axis `r=0`, where this angular parametrization degenerates.
- Source locators read: Lee Exercise 3.3(b)–(c), printed pages 25–26; Problem
  5-2(a), printed page 87; and Problem 8-1(a), printed page 150. The proposed
  `Datar Lecture 14 exercises` locator was removed because a full-text search
  of the fetched Datar source found no surface-of-revolution result.
- Dependencies read: pullback metric versus immersion, the Levi–Civita
  Christoffel formula, the coordinate curvature formula with its exact index
  convention, the Riemann four-tensor, and sectional curvature. The proposed
  Theorema Egregium and general induced-connection dependencies were removed:
  both carry `AC_omega` through the general projection construction, whereas
  this supplied local parametrization has a direct choice-free computation.
- Calculation: `X_u` and `X_v` are orthogonal with squared norms `1` and
  `r^2`. The only nonzero symbols are `Gamma^1_22=-rr'` and
  `Gamma^2_12=Gamma^2_21=r'/r`; direct substitution gives
  `R^1_{2 1 2}=-(r'^2+rr'')+r'^2=-rr''`. Lowering the output and dividing by
  the positive Gram determinant `r^2` gives `K=-r''/r`.
- Boundaries/choice: empty parameter domains are vacuous; every nonempty chart
  is two-dimensional, making dimensions zero and one inapplicable. `r>0`
  proves immersion and nondegeneracy. Parameter intervals are open and the
  singular axis is explicitly excluded. The finite supplied-coordinate
  calculation uses no choice, and no biconditional is asserted.
- Checks: canonical explicit-path precheck, rendercheck, strict selected-item
  proof contract, and coverage checklist pass; coverage reports 97 harvested
  results without errors or warnings. A full-batch content-policy invocation
  was also run and currently reports only the expected missing-file errors for
  later unauthored manifest items; it must be rerun after batch completion.
  The refreshed non-owner `sufficient` scope receipt has hash
  `6e7743dc309bc742b2d47ceea155cdfecbfb2d0a843014342b686105ad84cc09`.
- Decision: `repaired`, confidence 1, with all five dependency IDs examined;
  item receipt SHA
  `4c200f87c8646fe761af7b4f56998760d80469716bc4a8c89bdb474199759e5b`
  was written successfully.

- Next local item: `ex-principal-curvatures-of-a-round-sphere`.

### `ex-principal-curvatures-of-a-round-sphere`

- Claim/conventions: assuming `AC_omega`, for `n>=1` and `r>0` the outward
  normal `nu(x)=x/r` and convention `S_nu=-bar-nabla nu` give
  `S_nu=-(1/r)Id`, hence all `n` principal curvatures are `-1/r`; the inward
  normal gives `+1/r`.
- Source locators read: Datar Example 14.2.3, printed page 105, including the
  full radial-normal derivative; Lee's principal-curvature definition and
  round two-sphere calculation, printed pages 141–142.
- Dependencies read: countable choice, the shape-operator definition and its
  normal-linearity, the principal-curvature definition, the Christoffel
  formula, and directional connection laws. The manifest statement was
  repaired to state `n>=1`, `r>0`, and the exact inherited choice assumption.
- Calculation: differentiating the sphere equation proves each tangent vector
  is perpendicular to `x`. Cartesian Euclidean symbols vanish, so
  `bar-nabla_u(x/r)=u/r`; this is tangent and the fixed minus sign yields the
  claimed scalar shape map. Its sole eigenvalue has multiplicity `n`, and
  normal-linearity handles reversal.
- Boundaries/choice: the admitted spheres are nonempty; dimension zero and
  radius zero are excluded, while the circle verifies dimension one. There is
  no parameter endpoint or boundary. The supplied radial normal requires no
  selection. `AC_omega` is inherited exactly through the general shape and
  principal-curvature constructions; the explicit calculation adds none. No
  biconditional is asserted.
- Checks: canonical explicit-path precheck, rendercheck, strict selected-item
  proof contract, and coverage checklist pass; coverage reports 99 harvested
  results without errors or warnings. The refreshed non-owner `sufficient`
  scope receipt has hash
  `e2abe141bf4dccfac8ae0e0cab87d5a1bbb1f8fea575a4c150b1baf47f1c901a`.
- Decision: `repaired`, confidence 1, with all five dependency IDs examined;
  item receipt SHA
  `6a7c06087c0c8f611fcfdb9a4e52f91ee830cd3a05b3654179396bdd400587e7`
  was written successfully.

- Next local item:
  `ex-the-cylinder-has-zero-gaussian-curvature-but-nonzero-second-fundamental-form`.

### `ex-the-cylinder-has-zero-gaussian-curvature-but-nonzero-second-fundamental-form`

- Claim/conventions: assuming `AC_omega` and `r>0`, the outward cylinder
  normal and convention `S_nu=-bar-nabla nu` give circumferential and axial
  principal curvatures `-1/r` and `0`. Thus intrinsic sectional and extrinsic
  Gaussian curvature are both zero, while `II` is nonzero.
- Source locators read: Datar Examples 14.2.5–14.2.6, printed pages 105–106,
  including the parametrized shape computation; Lee's plane/half-cylinder
  comparison, printed pages 5–6. The scaffold's `Datar Example 14.2.4`
  locator was incorrect and was repaired.
- Dependencies read: countable choice, shape operator, Weingarten/II pairing,
  principal and extrinsic Gaussian curvatures, Euclidean hypersurface
  sectional curvature from principal directions, Christoffel formula, and
  directional connection laws.
- Calculation: with unit fields `e_theta=(-sin theta,cos theta,0)` and
  `e_z=(0,0,1)`, the outward normal is `(cos theta,sin theta,0)`.
  Euclidean differentiation gives `S e_theta=-e_theta/r`, `S e_z=0`.
  Their product is zero intrinsically and extrinsically, while
  `<II(e_theta,e_theta),nu>=-1/r` is an explicit nonzero witness.
- Boundaries/choice: the cylinder is a nonempty fixed two-manifold; zero and
  one dimensions are inapplicable. `r=0` is the collapsed excluded axis. The
  angular and axial directions have no boundary endpoint. The frame and normal
  are explicit; `AC_omega` is inherited exactly through the general shape,
  Weingarten, and curvature suppliers, with no additional selection. No
  biconditional is asserted.
- Checks: canonical explicit-path precheck, rendercheck, strict selected-item
  proof contract, and coverage checklist pass; coverage reports 100 harvested
  results without errors or warnings. The refreshed non-owner `sufficient`
  scope receipt has hash
  `2b59f76fe92df5c9082bf3b27c31760f454779eb8776a96205bef466cc10e5fc`.
- Decision: `repaired`, confidence 1, with all seven dependency IDs examined;
  item receipt SHA
  `59574f2d3a302c26df4f3433fd1e0a327b2f9f6d98ae10823aa711cbcec897d5`
  was written successfully.

- Next local item:
  `ex-the-catenoid-has-zero-mean-curvature-but-is-not-totally-geodesic`.

### `ex-the-catenoid-has-zero-mean-curvature-but-is-not-totally-geodesic`

- Claim/conventions: assuming `AC_omega` and `a>0`, the catenoid on
  `S^1 x R` has principal curvatures
  `-1/(a cosh^2(v/a))` and `+1/(a cosh^2(v/a))` for the displayed normal.
  Both the scalar averaged mean curvature and averaged mean-curvature vector
  vanish, but `II` is nonzero everywhere, so the surface is not totally
  geodesic.
- Source locators read: Calegari Lemma 1.2 and Example 1.6, printed pages 4–7,
  including the harmonic-coordinate argument and the unit-scale
  parametrization; Lee's parametrized Euclidean shape formulas, printed pages
  142–143, and Problem 8-4, printed page 150. The original broad locators were
  made exact; the scale-`a` principal values are derived in the item.
- Dependencies read: countable choice, pullback metric/immersion criterion,
  induced connection and `II`, Weingarten pairing, vector mean curvature,
  total geodesicity, scalar mean/principal curvatures, Christoffel formula, and
  directional connection laws.
- Calculation: with `c=cosh(v/a)`, `s=sinh(v/a)`, the first form is
  `diag(a^2 c^2,c^2)`. The normal
  `N=c^(-1)(cos u,sin u,-s)` gives scalar second form `diag(-a,1/a)`.
  Dividing along the orthogonal coordinate directions yields the stated
  opposite eigenvalues. Their averaged trace is zero, but
  `II(e_u,e_u)=-(a c^2)^(-1)N` is an explicit nonzero witness.
- Boundaries/choice: the domain and image are nonempty fixed two-manifolds;
  zero and one dimensions are inapplicable. `a>0` and `cosh>0` prove
  immersion and nondegeneracy, and neither domain factor has a boundary
  endpoint. Normal reversal changes both principal signs but not either
  zero-mean conclusion or `II!=0`. `AC_omega` is inherited exactly through
  the general projection/shape suppliers; the explicit calculation adds no
  selection. No biconditional is asserted.
- Checks: after adopting canonical sequential proof numbering, explicit-path
  precheck, rendercheck, strict selected-item proof contract, and coverage
  checklist pass; coverage reports 102 harvested results without errors or
  warnings. The refreshed non-owner `sufficient` scope receipt has hash
  `ddd6b759a78c219da3cdedc27b04fe3bc16c68b355705648bace738daef913a6`.
- Decision: `repaired`, confidence 1, with all nine dependency IDs examined;
  item receipt SHA
  `1ccc788f95aeeb241543a9c07f2e3744acec4ad200517ffc6d2f671dca7d1464`
  was written successfully.

- Next local item: `ex-a-great-sphere-is-totally-geodesic`.

### prerequisite repair before `ex-a-great-sphere-is-totally-geodesic`

- Confirmed and repaired a notation defect in the assigned draft supplier
  `thm-equivalent-characterizations-of-a-totally-geodesic-submanifold`: its
  first displayed condition used `$mathrm{II}=0$` rather than
  `$\\mathrm{II}=0$`. No claim, hypothesis, dependency, or proof argument
  changed.
- Regenerated the supplier's proof contract. Explicit-path precheck,
  rendercheck, and strict selected-item contract pass. Its refreshed
  `repaired` item receipt SHA is
  `0665e41a696a03ed63bfced22abbe72d147bcc04824a056777a91adc1ed55f67`;
  the sufficient scope hash remains
  `ddd6b759a78c219da3cdedc27b04fe3bc16c68b355705648bace738daef913a6`.
- Continue with `ex-a-great-sphere-is-totally-geodesic` using the repaired
  supplier.

### `ex-a-great-sphere-is-totally-geodesic`

- Claim/conventions: assuming `AC_omega`, for `n>=1` and every
  `0<=k<=n`, the equatorial unit sphere
  `S^k=S^n intersection (R^{k+1} x {0})` is totally geodesic in `S^n`.
- Source locators read: Lee Proposition 5.13 with complete proof, printed
  pages 82–83, and Exercise 8.4, printed page 139; Datar Proposition 15.3.1
  with complete proof, printed pages 117–118. This repairs the scaffold's
  nonexistent/incorrect `Lee Proposition 8.10 examples; Datar Lecture 14`
  locators.
- Dependencies read: countable choice, the published choice-free explicit
  classification of unit-sphere geodesics as great circles, and the repaired
  total-geodesicity equivalence. The exact implication used is condition 3
  (intrinsic geodesics remain ambient) to condition 1 (`II=0`).
- Argument: the tangent inclusion is
  `T_x S^k=R^{k+1} intersection x^perp subset T_x S^n`. For `k>=1`, an
  intrinsic geodesic lies in a two-plane contained in `R^{k+1}` and hence is
  the same ambient great circle. Constant curves, `k=0`, and the identity case
  `k=n` are handled separately.
- Boundaries/choice: all admitted spheres are nonempty; dimensions zero and
  one are explicitly checked, metrics are nondegenerate, and both manifolds
  are boundaryless. Common parameter intervals are exactly those in the
  supplier. The geodesic plane is determined by supplied initial data rather
  than selected from a family. `AC_omega` is inherited at the equivalence
  theorem's use; no additional choice is made. The item itself is not an iff.
- Checks: explicit-path precheck, rendercheck, strict selected-item proof
  contract, and coverage checklist pass; coverage reports 104 harvested
  results without errors or warnings. The refreshed non-owner `sufficient`
  scope receipt has hash
  `3e93518d8d0c15edbc0b2b79a7baa67fceaaed191bbf2d591e36852ec523afe9`.
- Decision: `repaired`, confidence 1, with all three dependency IDs examined;
  item receipt SHA
  `639f2143fdfcd3df57135fc88eb981b408a90221dd97d057a304a23b835b92e8`
  was written successfully.

- Next local item:
  `cex-same-intrinsic-plane-with-different-extrinsic-curvature-after-bending`.

### `cex-same-intrinsic-plane-with-different-extrinsic-curvature-after-bending`

- False claim/witness: assuming `AC_omega` and `r>0`, the plane and
  half-cylinder embeddings of `U=(0,pi r) x R` induce the identical flat
  metric `du^2+dv^2`, but the plane has `II=0` and the cylinder has
  `II(partial_u,partial_u)=-(1/r)N`. This explicitly refutes determination of
  `II` by the intrinsic metric.
- Source locators read: Lee's explicit plane-to-half-cylinder isometry and
  principal-curvature comparison, printed pages 5–6; Datar's cylinder shape
  calculation, Examples 14.2.5–14.2.6, printed pages 105–106. This repairs the
  scaffold's incorrect `Datar Example 14.2.4; Lee Chapter 8` locators.
- Dependencies read: countable choice, pullback metric/immersion criterion,
  induced connection and `II`, Euclidean Christoffel/connection laws, and the
  local-Euclidean flatness criterion. Theorema Egregium was removed because
  neither the metric equality nor the unequal second forms uses it.
- Calculation: both derivative pairs are orthonormal. The open angular range
  makes the half-cylinder map injective and the induced comparison an
  isometry. Plane second derivatives vanish; the cylinder has
  `G_uu=-(1/r)N_G`, already normal, with its other second derivatives zero.
- Boundaries/choice: both images are nonempty fixed two-manifolds. `r>0`
  proves immersion and excludes collapse. The open angular interval omits the
  seam endpoints and yields no manifold boundary. All embeddings, normals,
  and the isometry are explicit. `AC_omega` is inherited exactly only through
  the general `II` construction; no new selection is made. This is a witness
  to a failed universal conclusion, not a biconditional.
- Checks: after adopting canonical unique proof numbering, explicit-path
  precheck, rendercheck, strict selected-item proof contract, and coverage
  checklist pass; coverage reports 106 harvested results without errors or
  warnings. The refreshed non-owner `sufficient` scope receipt has hash
  `486fb8fc9d306b54e6df0dbc4ead2f5b8e5d88b45a9dfced521352036aa8884d`.
- Decision: `repaired`, confidence 1, with all six dependency IDs examined;
  item receipt SHA
  `08856ab67af4810ee7231e1f1387604d8659b844442c4528643af7a4af0e9a0f`
  was written successfully.

- Next local item: `cex-zero-scalar-curvature-does-not-imply-flatness`.

### `cex-zero-scalar-curvature-does-not-imply-flatness`

- False claim/witness: assuming `AC_omega` and `r>0`, the product
  `S^2_r x H^2_r` has scalar curvature identically zero but a nonzero Riemann
  tensor at every point, so it is not flat.
- Source locators read: Datar Examples 8.2.6 and 8.2.8, printed page 49;
  Proposition 12.2.2 and Definition 12.2.3, printed pages 85–86; Example
  14.2.3, printed page 105. Lee Proposition 3.5(c), printed pages 38–42;
  scalar and constant-curvature model formulas, printed pages 147–149; and
  Problem 8-7(a)–(b), printed page 151.
- Dependencies read: countable choice, curvature/flatness, the
  finite-dimensional orthonormal-basis corollary, the round-sphere and
  hyperbolic curvature examples, product curvature, and the scalar-as-twice-
  sectional-sum formula. The orthonormal-basis supplier was added explicitly
  rather than leaving the two tangent bases implicit.
- Calculation: at an arbitrary product point, factor orthonormal bases give
  six coordinate planes with curvatures `+1/r^2`, `-1/r^2`, and four zeros.
  Thus `Scal=2(1/r^2-1/r^2)=0`, while the pure sphere component
  `Rm(E_1,E_2,E_2,E_1)=1/r^2` is nonzero.
- Boundaries/choice: the factors have fixed dimension two and their product
  dimension four; all are nonempty. The assumption `r>0` excludes metric
  collapse and defines the reciprocal. The sphere is boundaryless and the
  upper-half-space model excludes its height-zero ideal boundary. The proof
  fixes one point before making two finite basis choices, not a point-indexed
  family. `AC_omega` is inherited exactly through the round-sphere supplier;
  the remaining steps add no choice. This is a one-way counterexample rather
  than an iff.
- Checks: explicit-path precheck, rendercheck, strict selected-item proof
  contract, and coverage checklist pass; coverage reports 108 harvested
  results without errors or warnings. The refreshed non-owner `sufficient`
  scope receipt has hash
  `476250a64deed7ca36d299aa1c8aed9830e4b77e6ee18ba4cd197675161ffb4b`.
- Decision: `repaired`, confidence 1, with all seven dependency IDs examined;
  item receipt SHA
  `88babee25bf75916c4a9c32e45d4c45d9eff132df91c06bb39d451f1a152f969`
  was written successfully.

- Next local item:
  `ex-curvature-two-form-of-a-connection-on-a-trivial-plane-bundle`.

### `ex-curvature-two-form-of-a-connection-on-a-trivial-plane-bundle`

- Claim/conventions: on the trivial rank-two bundle over `R^2`, the explicit
  connection matrix `omega=By dx+Ax dy` has
  `Omega=(A-B+xy(BA-AB)) dx wedge dy`; matrix order follows the page's row-
  frame/column-coefficient convention.
- Source locators read: Datar Proposition 6.1.3 and its complete proof plus
  Remark 6.1.4, printed pages 38–39; Merry Lecture 36, Definition 36.18 and
  Theorem 36.19 with the displayed ordered End(E)-valued wedge product and
  curvature action. The vague scaffold locators were made exact, and the
  coverage typo `Proposition 6.1.4` was corrected to `Proposition 6.1.3 and
  Remark 6.1.4`.
- Dependencies read: the definition of a bundle connection, curvature
  structure equation, coordinate formula for exterior derivative, wedge
  product, and ordered matrix multiplication.
- Construction/calculation: for the standard global frame, define
  `nabla(eu)=e(du+omega u)` and verify real-linearity and the section Leibniz
  rule. Entrywise differentiation gives `d omega=(A-B) dx wedge dy`; ordered
  multiplication gives `omega wedge omega=xy(BA-AB) dx wedge dy`. For the
  explicit matrices `A=[[0,1],[0,0]]`, `B=[[0,0],[1,0]]`, the commutator term
  is `diag(-1,1)`, so it is genuinely nonzero when `xy!=0`.
- Boundaries/choice: base dimension and fibre rank are fixed at two and both
  are nonempty. No inverse or division occurs, so zero coordinates, zero
  matrices, and commuting matrices all specialize correctly. The base is all
  of `R^2` with no boundary or endpoints. All data are explicit and the proof
  is choice-free. No iff is asserted.
- Checks: after adopting canonical proof numbering and single-line display
  syntax, explicit-path precheck, rendercheck, strict selected-item proof
  contract, and coverage checklist pass; coverage reports 110 harvested
  results without errors or warnings. The refreshed non-owner `sufficient`
  scope receipt remains
  `476250a64deed7ca36d299aa1c8aed9830e4b77e6ee18ba4cd197675161ffb4b`.
- Decision: `repaired`, confidence 1, with all five dependency IDs examined;
  item receipt SHA
  `d66ff9abbd6409f412329176d288b0517428462b9c776c43452a21742f8ab115`
  was written successfully.

- Next local item: `def-lie-group`.

### DG-25 transition and `def-lie-group`

- Reread the complete controlling DG-25 section
  (`research/plan-differential-geometry-track.md:6448` through the separator
  before DG-26), the current batch-7 notes and empty same-run cross-batch
  dependency input, the current Step 3a scope report/receipt, and the page's
  manifest/coverage records. The binding conventions are: real,
  finite-dimensional, boundaryless Lie groups unless explicitly stated;
  brackets transported from left-invariant fields; all local ODE/algebra work
  choice-free; complex groups only in the later explicit branch.
- Definition: a group whose finite-dimensional real smooth-manifold
  multiplication and inversion maps are smooth; identity notation is `e`.
  The definition cannot have an empty carrier, allows zero-dimensional
  countable discrete groups and dimension one, and assumes no metric.
- Source locators read: Knapp's introductory definition, printed page 17,
  with the smooth conventions of Chapter I section 10; Kirillov Definition
  2.1 and adjoining smoothness convention, printed page 14. These replace the
  scaffold's vague chapter-only locators and are registered in coverage.
- Dependencies read: the published definitions of a group and of a smooth
  map between manifolds with boundary. The page convention specializes the
  latter to boundaryless manifolds.
- Boundaries/choice: identity proves nonemptiness; dimensions zero and one are
  admitted; degeneracy is inapplicable; manifold boundary is excluded by
  convention; supplied structure maps require no selection; no iff is
  asserted.
- Checks: definition precheck has zero proof items and no failure; explicit
  rendercheck, strict selected-item contract, and coverage checklist pass.
  Coverage reports 112 harvested results without errors or warnings. The
  non-owner `sufficient` scope receipt remains
  `0bf949f14fa43b175aaef94fa819eda164a20cae32ed1177185ead4c54f42599`.
- Decision: `repaired`, confidence 1, with both dependency IDs examined; item
  receipt SHA
  `d53d984036b33be302872e75aa84137eefa6a7294f07b40ff023a4d3ec13cc45`
  was written successfully.

- Next local item:
  `def-lie-group-homomorphism-isomorphism-and-automorphism`.

### `def-lie-group-homomorphism-isomorphism-and-automorphism`

- Definition: a Lie-group homomorphism is a smooth group homomorphism; an
  isomorphism is a bijective Lie-group homomorphism with smooth inverse; an
  automorphism is an isomorphism from a group to itself. Merely continuous
  homomorphisms are not smooth *by definition* here; automatic regularity is
  a later theorem.
- Source locators read: Kirillov's paragraph immediately after Definition
  2.1, printed page 14; Knapp Chapter I section 10's smooth-homomorphism
  discussion, especially printed pages 72–73. Both are now explicit in the
  manifest and coverage.
- Dependencies read: the just-authored Lie-group definition, the published
  group-homomorphism definition, and the published lemma that a bijective
  group homomorphism's set-theoretic inverse is a group homomorphism. The last
  was added to discharge an implicit well-definedness use in the scaffold.
- Boundaries/choice: Lie-group inputs are nonempty; dimensions zero and one
  are admitted; degeneracy is irrelevant; groups are boundaryless by the page
  convention; all maps are supplied data and no choice is used. This is
  terminology, not an iff theorem.
- Checks: definition precheck has zero proof items and no failure; explicit
  rendercheck, strict selected-item contract, and coverage checklist pass.
  Coverage reports 114 harvested results without errors or warnings. The
  `sufficient` scope receipt remains
  `0bf949f14fa43b175aaef94fa819eda164a20cae32ed1177185ead4c54f42599`.
- Decision: `repaired`, confidence 1, with all three dependency IDs examined;
  item receipt SHA
  `7c05e1d4b44ae281c9c54d7f33fbf02e70a4bcf7b956e3b58aaf86d28105b56f`
  was written successfully.

- Next local item: `def-left-and-right-translations-on-a-lie-group`.

### `def-left-and-right-translations-on-a-lie-group`

- Definition/convention: `L_g(h)=gh` and the ordinary right translation
  `R_g(h)=hg`; both are smooth by fixing one argument of the Lie-group
  multiplication map.
- Source locators read: Knapp Chapter I section 10, printed page 69; Kirillov
  section 2.6, printed page 21. Kirillov parametrizes the *right action* as
  `h -> h g^{-1}`, so the item explicitly records that its `R_g` is
  Kirillov's right action by `g^{-1}` rather than silently conflating the two
  conventions.
- Dependency read: the just-authored Lie-group definition, including smooth
  multiplication.
- Boundaries/choice: the supplied group is nonempty; dimensions zero and one
  are allowed; no metric or nondegeneracy issue occurs; groups are
  boundaryless; fixing one supplied `g` uses no choice. No iff is asserted.
- Checks: definition precheck has zero proof items and no failure; explicit
  rendercheck, strict selected-item contract, and coverage checklist pass.
  Coverage reports 116 harvested results without errors or warnings. The
  `sufficient` scope receipt remains
  `0bf949f14fa43b175aaef94fa819eda164a20cae32ed1177185ead4c54f42599`.
- Decision: `repaired`, confidence 1, with its single dependency examined;
  item receipt SHA
  `ccb520c3f6a327c3c841243b28c10663e4e80a8056a9c861e246fc4cae0b938b`
  was written successfully.

- Next local item:
  `prop-translations-are-diffeomorphisms-and-their-differentials-trivialize-the-tangent-bundle`.

### `prop-translations-are-diffeomorphisms-and-their-differentials-trivialize-the-tangent-bundle`

- Claim/conventions: assuming `AC_omega`, every ordinary left and right
  translation is a diffeomorphism with the group-theoretic inverse, and the
  maps `(g,X) -> d(L_g)_e X` and `(g,X) -> d(R_g)_e X` are smooth
  vector-bundle isomorphisms from `G x T_eG` to `TG`. The right translation
  remains `R_g(h)=hg`, not Kirillov's right-action parametrization
  `h -> hg^{-1}`.
- Source locators read: Knapp Chapter I section 10, printed page 69, through
  the translation and tangent-space conventions; Kirillov section 2.6 and
  Theorem 2.27 with its complete proof, printed pages 21–22. The latter source
  supplies the invariant-field consequence rather than all bundle-smoothness
  details, which are proved locally in the item.
- Dependencies read: countable choice, the completed translation definition,
  the published smooth-global-differential theorem, the differential-of-a-
  diffeomorphism corollary, and the fibrewise-bijective bundle-map criterion.
- Proof/repair: group identities give the inverse translations. In product
  coordinates, the local matrices of the two trivializations are the relevant
  partial Jacobians of multiplication and therefore vary smoothly. Each is a
  fibrewise linear isomorphism, so the published local-matrix criterion gives
  the bundle isomorphisms; their fibrewise inverse formulas are displayed.
  The original scaffold's choice-free description was incorrect because its
  declared smooth-global-differential supplier assumes `AC_omega`. The item
  now states that assumption, adds `def-countable-choice`, identifies the
  exact supplier use, and requires the same propagation in later consumers.
- Boundaries/choice: Lie groups are nonempty; dimensions zero and one are
  handled, no metric degeneracy occurs, and the page convention excludes
  boundary. The local coordinate calculation makes no additional selection;
  the sole choice cost is inherited through the supplied canonical tangent-
  bundle/global-differential theorem. No biconditional is asserted.
- Checks: after canonical proof-step renumbering and regenerated contract
  anchors, explicit-path precheck, rendercheck, strict selected-item proof
  contract, and coverage checklist pass; coverage reports 118 harvested
  results without errors or warnings. The refreshed non-owner `sufficient`
  scope receipt has hash
  `f87a12141cefe7dc8e4ca0777c6a5257b8f3dbf0777b8a7077e17dda739b5bd1`.
- Decision: `repaired`, confidence 1, with all five dependency IDs examined;
  item receipt SHA
  `4ab3ca38604018479cf01897560e2a1c01b0d6028f31a8f694bea85114e4848e`
  was written successfully.

- Next local item: `def-left-and-right-invariant-vector-fields`.

### `def-left-and-right-invariant-vector-fields`

- Definition/conventions: assuming `AC_omega`, a smooth field is left
  invariant when `d(L_g)_h X_h=X_{gh}` and right invariant when
  `d(R_g)_h X_h=X_{hg}` for every `g,h`. The ordinary convention
  `R_g(h)=hg` is retained. The item derives, in both directions, the equivalent
  formulas `X_g=d(L_g)_eX_e` and `X_g=d(R_g)_eX_e`.
- Source locators read: Knapp Chapter I section 10, printed page 69; Kirillov
  section 2.6 through Definition 2.26 and Theorem 2.27, printed pages 21–22.
  The manifest's incorrect `Kirillov §3.1` locator was repaired to Definition
  2.26.
- Dependencies read: countable choice, the completed translation-
  trivialization proposition, the published smooth-vector-field-as-section
  definition, and the complete published chain-rule proof. The last dependency
  was added because the scaffold's claimed equivalence silently used it.
- Derivation: specializing invariance at `h=e` gives the identity-value
  formulas. Conversely the chain rule with `L_g o L_h=L_{gh}` and
  `R_g o R_h=R_{hg}` gives the two invariance identities, including the correct
  order on the right.
- Boundaries/choice: Lie groups are nonempty; dimensions zero and one are
  explicit, no metric degeneracy occurs, and the convention is boundaryless.
  `AC_omega` is inherited exactly through the smooth tangent-bundle/vector-
  field and translation-trivialization suppliers; the pointwise chain-rule
  calculation adds no selection. Both directions of each stated equivalence
  are proved.
- Checks: explicit-path definition precheck, rendercheck, strict selected-item
  contract, and coverage checklist pass; coverage reports 120 harvested
  results without errors or warnings. The refreshed non-owner `sufficient`
  scope receipt has hash
  `d4ecd2ca6f66eeb2923c0f8604dff78e4b1b613eacea373b69f72fe930d7d92e`.
- Decision: `repaired`, confidence 1, with all four dependency IDs examined;
  item receipt SHA
  `c6bcce2626d7b0b29e2f0ff25549bba8d5394e041b79926e66cd05c08908347d`
  was written successfully.

- Next local item:
  `thm-left-invariant-vector-fields-evaluate-isomorphically-at-the-identity`.

### `thm-left-invariant-vector-fields-evaluate-isomorphically-at-the-identity`

- Claim/conventions: assuming `AC_omega`, evaluation at `e` is a linear
  isomorphism from each of the left- and right-invariant smooth-field spaces
  to `T_eG`; its inverses are the fields `v^L_g=d(L_g)_e v` and
  `v^R_g=d(R_g)_e v` in the page's ordinary right-translation convention.
- Source locators read: Knapp Chapter I section 10, printed page 69; Kirillov
  Theorem 2.27 with its complete proof, printed pages 21–22. The manifest's
  incorrect `Kirillov §3.1` locator was repaired.
- Dependencies read: countable choice, the completed invariant-field
  definition with its two identity-value equivalences, and the completed
  smooth left/right translation trivializations.
- Proof: pointwise vector operations preserve invariant smooth fields and
  make evaluation linear. Each constant section `g -> (g,v)` composed with
  the appropriate smooth trivialization gives a smooth invariant extension
  with identity value `v`. The identity-value characterization forces every
  invariant field to equal that extension, proving uniqueness and both inverse
  compositions on the left and the right.
- Boundaries/choice: in dimension zero, all three relevant spaces are zero;
  dimension one is unchanged. Lie groups are nonempty and boundaryless, and
  no metric degeneracy occurs. `AC_omega` is inherited exactly through the
  two supplied choice-bearing results; fixing a supplied `v` and pointwise
  linear operations add no selection. The item asserts explicit isomorphisms,
  not a biconditional.
- Checks: after canonical proof-step renumbering, explicit-path precheck,
  rendercheck, strict selected-item proof contract, and coverage checklist
  pass; coverage reports 122 harvested results without errors or warnings.
  The refreshed non-owner `sufficient` scope receipt has hash
  `b095487e95411a385432bdaac0d811c79ebded33cc9418000ad00704c9f69314`.
- Decision: `repaired`, confidence 1, with all three dependency IDs examined;
  item receipt SHA
  `7238e2171e659c0b497e723d8bd28007c9eada98a55bf871d505ac7519240e72`
  was written successfully.

- Next local item:
  `prop-the-lie-bracket-of-left-invariant-fields-is-left-invariant`.

### `prop-the-lie-bracket-of-left-invariant-fields-is-left-invariant`

- Claim/conventions: assuming `AC_omega`, the Lie bracket of two left-
  invariant smooth vector fields is left invariant.
- Source locators read: Knapp Chapter I section 10, printed page 69, which
  states this closure directly; Kirillov Definition 2.26, printed page 21,
  for the invariance convention. The scaffold's `Kirillov §3.3` locator
  concerns the tangent commutator and Jacobi identity, not this closure proof,
  and was replaced by the exact convention locator rather than treated as
  proof evidence.
- Dependencies read: countable choice, the completed invariant-field
  definition, the completed proposition that translations are
  diffeomorphisms, and the full published proof that diffeomorphism
  pushforwards preserve Lie brackets. The first and third were added because
  the scaffold's naturality strategy implicitly requires both.
- Proof: for arbitrary `g`, left invariance is exactly
  `(L_g)_*X=X` and `(L_g)_*Y=Y`; `L_g` is a diffeomorphism. Bracket naturality
  therefore gives `(L_g)_*[X,Y]=[X,Y]`, and arbitrariness of `g` proves left
  invariance.
- Boundaries/choice: dimension-zero brackets vanish, dimension one is
  unchanged, Lie groups are nonempty and boundaryless, and no metric occurs.
  `AC_omega` is inherited through the invariant-field and smooth translation-
  trivialization results; one arbitrary `g` and naturality add no family
  selection. This is a one-way closure assertion.
- Checks: explicit-path precheck, rendercheck, strict selected-item proof
  contract, and coverage checklist pass; coverage reports 123 harvested
  results without errors or warnings. The refreshed non-owner `sufficient`
  scope receipt has hash
  `5147b0abdedf7cf098bce435c023b38fef776a16423fecc7106682588e69c8c1`.
- Decision: `repaired`, confidence 1, with all four dependency IDs examined;
  item receipt SHA
  `6ee364de935f275493f9b139c3a0d77a286f16d42946fdf41baa6e049280dc64`
  was written successfully.

- Next local item: `def-lie-bracket-on-the-tangent-space-of-a-lie-group`.

### `def-lie-bracket-on-the-tangent-space-of-a-lie-group`

- Definition/conventions: assuming `AC_omega`, for `u,v in T_eG` the bracket
  is `[u,v]_G=[u^L,v^L]_e`, where the extensions are the unique left-
  invariant smooth fields. The field bracket is exactly the library's
  commutator `[X,Y]f=X(Yf)-Y(Xf)`, fixing all later signs.
- Source locator read: Knapp Chapter I section 10, printed page 69, through the
  transported tangent-bracket definition. Kirillov sections 3.2–3.3 define
  the tangent commutator through logarithmic multiplication while using the
  opposite sign for the vector-field commutator (see his Remark 3.24); that
  source was removed from this item's provenance rather than conflated with
  the library's transport convention.
- Dependencies read: countable choice, the completed invariant-extension
  evaluation theorem, the completed closure of left-invariant fields under
  bracket, and the published definition of the vector-field commutator. The
  last and `def-countable-choice` were added to make actual inputs direct.
- Well-definedness: unique left extensions make the defining value
  unambiguous. Bracket closure also gives
  `[u^L,v^L]=[u,v]_G^L`, so the definition provides the exact transport
  identity needed by later Lie-algebra proofs.
- Boundaries/choice: `T_eG=0` gives the unique zero bracket in dimension zero;
  dimension one is admitted. Lie groups are nonempty and boundaryless and no
  metric occurs. `AC_omega` is inherited exactly through invariant extension
  and bracket closure; evaluation at `e` adds no choice. No iff is asserted.
- Checks: explicit-path definition precheck, rendercheck, strict selected-item
  contract, and coverage checklist pass; coverage reports 124 harvested
  results without errors or warnings. The refreshed non-owner `sufficient`
  scope receipt has hash
  `b2e8c44d697db65bc8d77f21a7f19dc0a96e4ea800825bf78c3ed6669bc2a3cf`.
- Decision: `repaired`, confidence 1, with all four dependency IDs examined;
  item receipt SHA
  `c216325a219ad44454b5c259d20ee38821658d5c5df8fcee264a2360fed9cebb`
  was written successfully.

- Next local item: `def-finite-dimensional-lie-algebra`.

### `def-finite-dimensional-lie-algebra`

- Definition/conventions: over `F=R` or `C`, a finite-dimensional vector
  space with an `F`-bilinear alternating bracket satisfying the cyclic Jacobi
  identity. Complex brackets are explicitly complex-bilinear.
- Source locators read: Knapp Introduction section 1, printed pages 4–5;
  Kirillov Definition 3.17, printed page 33. These replace the scaffold's
  inaccurate `Knapp Introduction §5; Kirillov §3.3` locators.
- Dependencies read: the published vector-space definition and the complete
  published finite-dimensionality/dimension definition. The latter was added
  because the scaffold used finite-dimensionality without declaring it.
- Qualifications: over `R` and `C`, alternation implies skew-symmetry by
  expanding `[X+Y,X+Y]`, and skew-symmetry implies alternation because
  characteristic zero permits cancellation of `2`. Both directions are
  written. The zero space has its unique zero bracket, and every alternating
  bracket in dimension one is zero.
- Boundaries/choice: vector spaces are nonempty; dimensions zero and one are
  explicit. The zero bracket is allowed, so nondegeneracy is not relevant.
  This is algebraic, with no boundary or endpoints. All operations are supplied
  and asserting finite-dimensionality selects no basis, so the definition is
  choice-free.
- Checks: explicit-path definition precheck, rendercheck, strict selected-item
  contract, and coverage checklist pass; coverage reports 126 harvested
  results without errors or warnings. The refreshed non-owner `sufficient`
  scope receipt has hash
  `b2e8c44d697db65bc8d77f21a7f19dc0a96e4ea800825bf78c3ed6669bc2a3cf`.
- Decision: `repaired`, confidence 1, with both dependency IDs examined; item
  receipt SHA
  `2f7194faa7e97f806726bf8ec6bf048310b938fb2f4f2b792358676c30462373`
  was written successfully.

- Next local item: `thm-the-tangent-space-at-the-identity-is-a-lie-algebra`.

### `thm-the-tangent-space-at-the-identity-is-a-lie-algebra`

- Claim/conventions: assuming `AC_omega`, `Lie(G)=T_eG` with the completed
  left-invariant-field bracket is a finite-dimensional real Lie algebra under
  the library's fixed vector-field commutator sign.
- Source locators read: Knapp Chapter I section 10, printed page 69, for the
  direct left-invariant-field construction; Kirillov Theorem 3.16 and its full
  proof, printed page 33, for the Jacobi identity of his logarithmic-product
  tangent commutator. Kirillov's vector-field sign is not used to justify this
  item's transport proof.
- Dependencies read: countable choice, the Lie-group definition, tangent-space
  dimension corollary, completed tangent-bracket and finite-dimensional Lie-
  algebra definitions, completed evaluation isomorphism, and the full
  published vector-field Lie-algebra proof. The scaffold omitted the first,
  Lie-group, dimension, and evaluation dependencies; all were made direct.
- Proof: `T_eG` has real dimension `dim G`. Linearity of the inverse evaluation
  isomorphism and bilinearity of the field bracket give bilinearity downstairs;
  field alternation gives tangent alternation. The identity
  `[v,w]_G^L=[v^L,w^L]` turns the tangent Jacobi sum into the identity value of
  the full vector-field Jacobi sum, which vanishes.
- Published supplier qualification: `thm-vector-fields-form-a-lie-algebra`
  omits the choice hypothesis required by the library's smooth-vector-field
  definition. The present item assumes `AC_omega` explicitly before using its
  algebraic conclusion; the published defect and its required repair are now
  recorded above for the owner.
- Boundaries/choice: the zero-dimensional bracket is uniquely zero and the
  one-dimensional bracket vanishes by alternation. Lie groups are nonempty
  and boundaryless, and no metric occurs. `AC_omega` is inherited through the
  tangent bracket, evaluation, and smooth-field supplier; algebraic transport
  adds no selection. No iff is asserted.
- Checks: after canonical proof-step renumbering, explicit-path precheck,
  rendercheck, strict selected-item proof contract, and coverage checklist
  pass; coverage reports 127 harvested results without errors or warnings.
  The refreshed non-owner `sufficient` scope receipt has hash
  `738d902d673af56b7d377f14737658a79c0f815d3023bfcd32287558b6ae70c3`.
- Decision: `repaired`, confidence 1, with all seven dependency IDs examined;
  item receipt SHA
  `d052695f44740ef0aaea1d1eb2318844248523d2c203bddb1ff33962fb4bc3d9`
  was written successfully.

- Next local item: `prop-right-invariant-fields-carry-the-opposite-lie-bracket`.

### `prop-right-invariant-fields-carry-the-opposite-lie-bracket`

- Claim/conventions: assuming `AC_omega`, ordinary right-invariant extensions
  satisfy `[X^R,Y^R]=-[X,Y]_G^R` for the tangent bracket transported from
  left-invariant fields. Hence evaluation identifies ordinary right-invariant
  fields with the opposite Lie algebra. The field bracket retains the
  library's convention `[U,V]f=U(Vf)-V(Uf)`.
- Source locators read: Knapp Chapter I section 10, printed page 69, for the
  left-invariant sign convention; Bryant Lecture 3, Proposition 1 and its
  proof, printed pages 44–45, for the inversion pushforward and the resulting
  right-invariant sign. Bryant's complete proof was used; Kirillov's
  right-action notation and opposite vector-field commutator convention were
  not silently substituted.
- Dependencies read: countable choice, Lie-group multiplication and inversion,
  the tangent bracket, left/right invariant extensions, evaluation
  isomorphism, bracket naturality under diffeomorphisms, the chain rule,
  product tangent splitting, differential definition and linearity, and the
  vector-field commutator definition. The scaffold's short dependency list
  omitted the differential computation needed to establish the sign; all
  eleven actual inputs are now direct.
- Proof: product inclusions and the chain rule first give
  `dm_(e,e)(A,B)=A+B`. Differentiating `g iota(g)=e` gives
  `d iota_e=-id`. The identity
  `iota o L_h=R_(h^-1) o iota` then proves
  `iota_*(Z^L)=-Z^R`. Bracket naturality, bilinearity of the commutator, and
  `[X^L,Y^L]=[X,Y]_G^L` give the displayed negative sign.
- Boundaries/choice: a Lie group is nonempty; in dimension zero all relevant
  fields vanish, while in dimension one the tangent bracket vanishes by
  alternation. Lie groups are boundaryless and no metric or nondegeneracy
  enters. `AC_omega` is inherited exactly through the invariant-field and
  tangent-bracket suppliers; the canonical differential computation makes no
  additional selection. This is a one-way identity, not an iff.
- Checks: after canonical proof-step numbering, explicit-path precheck,
  rendercheck, strict selected-item proof contract, and coverage checklist
  pass; coverage reports 127 harvested results without errors or warnings.
  The refreshed non-owner `sufficient` scope receipt has hash
  `49b00d65dd15a5f14fee542f13d0b0ddb6d7e041fc5bc32319c7538921642dd8`.
- Decision: `repaired`, confidence 1, with all eleven dependency IDs examined;
  item receipt SHA
  `be2b90f73d323d7f9add060b0d304e95e34bd76fb903b38ecf8939c2aa8f3c71`
  was written successfully.

- Next local item: `def-left-maurer-cartan-form`.

### `def-left-maurer-cartan-form`

- Definition/conventions: assuming `AC_omega`, a `g=T_eG`-valued one-form is
  explicitly a smooth fibrewise-linear map `TG -> g`, equivalently a bundle
  map `TG -> G x g` over the identity. The left Maurer--Cartan form is
  `theta_g=d(L_(g^-1))_g`. This repairs the scaffold's ill-typed dependency on
  the library definition of scalar-valued differential forms.
- Source locator read: Bryant Lecture 2, Definition 9 and the following
  smoothness assertion, printed page 27. The source gives precisely the fibre
  formula and target and asserts smoothness. Knapp Chapter I section 10 does
  not state this definition at the scaffold's locator and was removed from
  this item's provenance rather than treated as evidence.
- Dependencies read: countable choice, the Lie-group definition, the bundle-
  map definition, and the completed smooth left-trivialization proposition.
  The scalar-valued form definition was removed; the first, second, and third
  dependencies were added to state the actual type and inherited hypothesis.
- Well-definedness: `L_(g^-1)` maps `g` to `e`. The map
  `V_g -> (g,d(L_(g^-1))_g V_g)` is exactly the inverse bundle isomorphism to
  the supplied left trivialization, so its second component is smooth and
  fibrewise linear. At the identity, `theta_e=id_g`.
- Boundaries/choice: Lie groups are nonempty and boundaryless. In dimension
  zero the map is the unique map between zero tangent fibres; the same formula
  applies in dimension one. No metric, nondegeneracy, endpoint, or iff occurs.
  `AC_omega` is used exactly through the smooth left-trivialization supplier;
  the pointwise formula and projection make no further selections. This
  corrects the Step 3a assertion that the item was choice-free after that
  supplier's actual proof had required countable choice.
- Checks: explicit-path definition precheck, rendercheck, strict selected-item
  proof contract, and coverage checklist pass; coverage reports 128 harvested
  results without errors or warnings. The refreshed non-owner `sufficient`
  scope receipt has hash
  `36c1fbe3aa6725943798e9a8976040a112c9ebca22fc82456a8343ea7f1dddff`.
- Decision: `repaired`, confidence 1, with all four dependency IDs examined;
  item receipt SHA
  `6814944a95d2044daf4de1181518168f54e94a52f0d8673c54263c4616287359`
  was written successfully.

- Next local item:
  `prop-maurer-cartan-form-is-a-pointwise-isomorphism-and-left-invariant`.

### `prop-maurer-cartan-form-is-a-pointwise-isomorphism-and-left-invariant`

- Claim/conventions: assuming `AC_omega`, every `theta_g` is a linear
  isomorphism with inverse `d(L_g)_e`. For this vector-valued form the pullback
  is stated explicitly as
  `(L_h^*theta)_g(V)=theta_(hg)(d(L_h)_g V)`; it equals `theta`, and
  `theta_g(X^L_g)=X` for all `X in g`.
- Source locator read: Bryant Lecture 2, Definition 9 and the two sentences
  immediately following it, printed page 27. They state smoothness, left
  invariance, the identity value, and uniqueness. The proof does not treat
  those sentences as a substitute for the chain-rule calculation. The
  scaffold's Knapp section 10 citation was removed because that passage
  supplies invariant-field evaluation but not this form or its pullback.
- Dependencies read: countable choice, left translations, the completed
  Maurer--Cartan definition, the full chain-rule proof, and the completed
  evaluation/invariant-extension theorem. The scaffold omitted the first,
  second, and fifth actual inputs.
- Proof: inverse left trivialization gives the fibre inverse. The group identity
  `L_((hg)^-1) o L_h=L_(g^-1)` and the chain rule give the pullback identity.
  Finally `X^L_g=d(L_g)_eX`, followed by the fibre inverse, yields
  `theta_g(X^L_g)=X`.
- Boundaries/choice: a Lie group is nonempty and boundaryless; the unique maps
  on zero tangent spaces satisfy all identities, and the proof is unchanged
  in dimension one. No metric, degeneracy, or endpoint enters. `AC_omega` is
  inherited through the Maurer--Cartan definition and invariant extension;
  pointwise chain rules add no selection. This is not an iff.
- Checks: after canonical proof-step renumbering, explicit-path precheck,
  rendercheck, strict selected-item proof contract, and coverage checklist
  pass; coverage reports 129 harvested results without errors or warnings.
  The refreshed non-owner `sufficient` scope receipt has hash
  `6ba7cda1712ed9ca1b4e21026b3eac8940381afd5fb3dc6804effc9ddaaf65d0`.
- Decision: `repaired`, confidence 1, with all five dependency IDs examined;
  item receipt SHA
  `52de1ec283b83c110f6c4721d10fb3fa6712187cd8dc358fbe743a1a9eaa9bb0`
  was written successfully.

- Next local item: `thm-maurer-cartan-structure-equation`.

### Added local supplier:
`def-finite-dimensional-vector-valued-forms-and-their-exterior-derivative`

- Necessity/definition: the existing scalar-form definition does not make
  `d theta` meaningful for the `g`-valued Maurer--Cartan form. Before its
  consumer, this added A-page definition now defines a smooth finite-
  dimensional `V`-valued `k`-form through all scalar dual evaluations and
  defines `d_V alpha` by
  `lambda o d_V alpha=d(lambda o alpha)` for every `lambda in V*`.
- Source locator read: Bryant Lecture 2, Definition 9 and Proposition 9 with
  the component expansion immediately after the proof, printed pages 27–28.
  Bryant uses a `g`-valued form, differentiates it, and expands it in a basis;
  the added item supplies the basis-independent definition and actual
  well-definedness argument rather than treating that usage as a proof.
- Dependencies read: the full vector-space and finite-dimensionality
  definitions, the scalar smooth-form definition, the invariant formula for
  scalar exterior differentiation, and the full proof that the formula is a
  smooth form.
- Well-definedness: in a finite basis `v_i` with dual `lambda^i`, write
  `alpha=sum v_i alpha^i` and set `d_V alpha=sum v_i d alpha^i`. Real
  linearity of the scalar formula gives the defining dual identity. Dual
  functionals separate points, so that identity proves both uniqueness and
  basis independence. Smoothness by all dual evaluations is equivalent in
  both directions to smooth components in one basis.
- Boundaries/choice: the empty base makes all assignments vacuous; `V=0` has
  only the zero form; `dim V=1` reduces to scalar forms. No metric,
  nondegeneracy, boundary, or endpoint occurs. A finite basis exists by the
  hypothesis and the result is independent of it; existential use of one
  finite basis requires no choice axiom.
- Checks: explicit-path definition precheck, rendercheck, strict selected-item
  proof contract, and coverage checklist pass; coverage reports 130 harvested
  results without errors or warnings. The refreshed non-owner `sufficient`
  scope receipt has hash
  `9cf28e9159adf13c5e80abaea13b02cf929cda42e59e4fb23c00ee314cc31cd3`.
- Decision handling: this item was created and fully authored during the
  dispatch, so under the dispatch's new-item exception it was registered in
  the manifest, coverage, contract, and item inventory but was not sent
  through a Step 3 item self-review decision; the engine will certify the
  post-author addition after a successful dispatch.

- Next local item remains `thm-maurer-cartan-structure-equation`.

### `thm-maurer-cartan-structure-equation`

- Claim/conventions: assuming `AC_omega`, `d theta` means the componentwise
  exterior derivative supplied immediately above, and
  `[theta wedge theta](A,B)=[theta(A),theta(B)]_G-[theta(B),theta(A)]_G`
  equals twice the first bracket. With that explicit normalization,
  `d theta+(1/2)[theta wedge theta]=0`.
- Source locator read: Bryant Lecture 2, Proposition 9 and its complete proof,
  printed pages 27–28. This is the exact source assigned by DG-25 for items
  12–14; the design explicitly says Knapp's cited sections are not a source
  for the Maurer--Cartan form or equation, so the scaffold's Knapp citation
  was removed.
- Dependencies read: countable choice, the new componentwise vector-valued-
  form supplier, the completed Maurer--Cartan isomorphism/invariance
  proposition, the tangent bracket and tangent Lie-algebra theorem, invariant
  extension, and the full scalar invariant exterior-derivative formula.
- Proof: bracket bilinearity and smoothness of `theta` make the bracket wedge a
  smooth alternating `g`-valued two-form. For every dual functional `lambda`,
  the scalar one-form formula on `X^L,Y^L` has zero derivative terms because
  `theta(X^L)=X` and `theta(Y^L)=Y` are constant; bracket transport leaves
  `lambda(d theta(X^L,Y^L))=-lambda([X,Y]_G)`. Dual separation fixes the
  vector identity and the half wedge cancels it. For arbitrary `U,V in T_pG`,
  take `X=theta_pU`, `Y=theta_pV`; injectivity and the inverse formula give
  `U=X^L_p`, `V=Y^L_p`, completing the pointwise proof.
- Boundaries/choice: a Lie group is nonempty and boundaryless. In dimension
  zero both two-forms are uniquely zero; in dimension one all alternating
  two-forms vanish. No metric, degeneracy, or endpoint occurs. `AC_omega` is
  propagated through the Maurer--Cartan, tangent-bracket, and invariant-field
  suppliers; dual evaluation and pointwise spanning add no choice. No iff is
  asserted.
- Checks: after canonical proof-step renumbering, explicit-path precheck,
  rendercheck, strict selected-item proof contract, and coverage checklist
  pass; coverage reports 130 harvested results without errors or warnings.
  The refreshed non-owner `sufficient` scope receipt has hash
  `b38da47f596d1e8b99a7e89c3cffef0a9b1462d185e5797c8a785948780c837d`.
- Decision: `repaired`, confidence 1, with all seven dependency IDs examined;
  item receipt SHA
  `35230e9c205407f31e69a6026b668b37b77b36886a9f89b4dc327a46eb4bd448`
  was written successfully.

- Next local item: `def-one-parameter-subgroup-of-a-lie-group`.

### `def-one-parameter-subgroup-of-a-lie-group`

- Definition/conventions: a one-parameter subgroup is a smooth Lie-group
  homomorphism `gamma:(R,+)->G` defined for every real parameter. Its law is
  `gamma(s+t)=gamma(s)gamma(t)`, and the identity and inverse laws give
  `gamma(0)=e` and `gamma(-t)=gamma(t)^-1`. A merely local interval curve is
  not one, and embeddedness or closedness of its image is not asserted.
- Source locator read: Kirillov's note following Theorem 2.29, printed page 23,
  which explicitly calls group morphisms from the additive scalar group one-
  parameter subgroups. The scaffold's Proposition 3.1 locator is the later
  existence/uniqueness theorem, not the definition, and was corrected. Knapp
  page 75 describes the smooth homomorphism `R->G` arising from an exponential
  but was removed from this definition's provenance because Kirillov is the
  exact terminology source.
- Dependencies read: the Lie-group definition and the completed Lie-group-
  homomorphism definition. The former was added directly. Standard real
  addition and negation are smooth in the global coordinate, so `(R,+)` has
  the required one-dimensional Lie-group structure.
- Boundaries/choice: both domain and codomain are nonempty and boundaryless;
  a zero-dimensional codomain permits the constant homomorphism, and the
  definition is unchanged in dimension one. The parameter domain is all of
  `R` and has no finite endpoints. No metric or degeneracy enters, and the
  supplied map and operations require no choice. No iff is asserted.
- Checks: after repairing a physical multiline-display line, explicit-path
  definition precheck, rendercheck, strict selected-item proof contract, and
  coverage checklist pass; coverage reports 131 harvested results without
  errors or warnings. The refreshed non-owner `sufficient` scope receipt has
  hash
  `e3f956cf0b7af1fdf077ecccb6529b7ffbbf5956d5bc20758401be1e6e8896e2`.
- Decision: `repaired`, confidence 1, with both dependency IDs examined; item
  receipt SHA
  `a71723811a55106b1d64c5ac3ae3735780806750e63ad48dcdbcd4fe6bc1223d`
  was written successfully.

- Next local item: `thm-left-invariant-vector-fields-are-complete`.

### `thm-left-invariant-vector-fields-are-complete`

- Claim/conventions: assuming `AC_omega`, every left-invariant smooth field
  on a finite-dimensional real Lie group is complete; equivalently its
  maximal flow domain is `R x G`. The proof uses only prior ODE uniqueness and
  translations, not the later exponential or one-parameter-subgroup results.
- Source locators read: Bryant Lecture 2, Proposition 4 and proof, printed
  pages 17–18; Kirillov Proposition 3.1 and proof of the real case, printed
  page 29. Bryant leaves the last domain-extension step to standard arguments
  and Kirillov calls global extension obvious; the authored proof fills that
  step explicitly. Knapp equation (1.80) identifies an exponential curve as
  an integral curve but does not prove completeness, so it was removed from
  this item's provenance.
- Dependencies read: countable choice, invariant-field definition,
  completeness, integral curves, the full maximal-integral-curve theorem,
  the chain rule, and the full completeness/global-flow equivalence. The
  scaffold omitted four actual inputs and the inherited choice hypothesis.
- Proof: let `c:I->G` be the maximal identity curve and choose one
  `delta>0` with `(-delta,delta) subset I`. For each `s in I`,
  `eta_s(t)=c(s)c(t-s)` is an integral curve on
  `(s-delta,s+delta)` by the chain rule and left invariance; uniqueness makes
  it agree with `c` on the overlap. If either endpoint of `I` were finite,
  choosing one `s` within `delta/2` of it would splice `eta_s` past that
  endpoint, contradicting maximality. Hence `I=R`. Then `c_p(t)=p c(t)` is a
  global integral curve through arbitrary `p`, so the field is complete and
  the supplied equivalence makes its maximal flow global.
- Boundaries/choice: Lie groups are nonempty and boundaryless. In dimension
  zero every field is zero with constant global curves; dimension one needs
  no change. Both possible finite time endpoints are explicitly excluded.
  No metric or degeneracy enters. `AC_omega` is inherited through the smooth
  invariant-field framework; choosing one local radius and one point near a
  single endpoint is ordinary existential instantiation, not family choice.
  Both directions of the cited complete/global equivalence are available.
- Checks: after canonical proof-step renumbering, explicit-path precheck,
  rendercheck, strict selected-item proof contract, and coverage checklist
  pass; coverage reports 132 harvested results without errors or warnings.
  The refreshed non-owner `sufficient` scope receipt has hash
  `3b6e02cf0995d320e1851570029c90ea9d60097524588ae2216961fbbb7e944d`.
- Decision: `repaired`, confidence 1, with all seven dependency IDs examined;
  item receipt SHA
  `08b7a6a990850069e35daa998e42ab8236c1a93b86994628b0d7f767d0105350`
  was written successfully.

- Next local item:
  `thm-one-parameter-subgroups-are-integral-curves-of-left-invariant-fields`.

### `thm-one-parameter-subgroups-are-integral-curves-of-left-invariant-fields`

- Claim/conventions: assuming `AC_omega`, a one-parameter subgroup with initial
  velocity `X` is the integral curve of the unique left-invariant field `X^L`;
  conversely the complete identity integral curve of `X^L` is a one-parameter
  subgroup, so existence and uniqueness hold for every `X in T_eG`.
- Source locator reread: Kirillov Proposition 3.1 and its complete real-case
  proof, printed page 29 (PDF page 29), including the derivative identity, ODE
  uniqueness, invariant-flow construction, local product law, and global
  extension. Kirillov's final extension sentence is supplied here by the
  already-completed global completeness theorem rather than treated as proof.
- Dependencies read: countable choice, one-parameter subgroup and integral
  curve definitions, the invariant-field evaluation isomorphism, left-invariant
  completeness, maximal integral-curve uniqueness, and the smooth chain rule.
- Scaffold repair: added the six omitted direct inputs beyond the original
  one-parameter-subgroup definition, propagated `AC_omega` exactly through the
  smooth invariant-field and completeness suppliers, corrected the differential
  base point, and replaced the loose Knapp locator by Kirillov's exact complete
  real-case proof.
- Proof: step 1.1 differentiates
  `gamma(t+s)=L_{gamma(t)} gamma(s)`. Steps 1.2--2.1 compare the global curves
  `c(s+t)` and `c(s)c(t)` through `c(s)` and use left invariance plus ODE
  uniqueness to obtain the product law. Step 3.1 proves existence and uniqueness.
- Boundaries/choice: the zero-dimensional subgroup is the constant identity
  curve, dimension one is unchanged, completeness covers both time directions,
  and no metric or degeneracy occurs. `AC_omega` is inherited only through the
  two named smooth-field suppliers; fixing one tangent vector and one parameter
  adds no family choice. Both directions are explicit.
- Checks: after adopting canonical proof-phase numbering, explicit-path
  precheck, rendercheck, strict selected-item proof-contract validation,
  coverage checklist, and batch manifest dependency validation all exit 0.
  Coverage remains 132 harvested results with no errors or warnings.
- Decision: `repaired`, confidence 1, with all seven dependency IDs examined;
  item receipt SHA
  `3d8c8a2929955cc0121ca4441c2f4a6a2ca5d088b15a9a6a933234c8173de8d7`
  was written successfully. The refreshed non-owner `sufficient` scope receipt
  has hash
  `98a4c6a866546005d8ec562515d86afa4a278c7b1843d5b2fb6fbe9c89125ad7`.

- Next local item: `def-exponential-map-of-a-lie-group`.

### `def-exponential-map-of-a-lie-group`

- Definition/conventions: assuming `AC_omega`, for each `X in T_eG` the
  completed preceding theorem supplies the unique global one-parameter subgroup
  `gamma_X`, and `exp_G(X)=gamma_X(1)`. The same supplier identifies its left
  translates as the integral curves through arbitrary group points.
- Source locator reread: Kirillov Definition 3.2 and its immediate surrounding
  explanation, printed page 30 (PDF page 30).
- Dependencies read: countable choice and the completed global
  one-parameter-subgroup existence-and-uniqueness theorem.
- Scaffold repair: propagated `AC_omega` from the actual well-definedness
  supplier, registered `def-countable-choice`, and replaced the loose Knapp
  citation by the exact Kirillov definition.
- Boundaries/choice: a Lie group is nonempty and boundaryless; if its dimension
  is zero, the domain is the zero vector space and `exp_G(0)=e`; dimension one
  is unchanged. Time `1` lies inside the global real parameter domain. No
  metric or nondegeneracy enters. The only choice use is inherited through the
  preceding theorem, and evaluation at one fixed time adds none.
- Checks: explicit-path definition precheck, rendercheck, strict selected-item
  proof-contract validation, coverage checklist, and batch manifest dependency
  validation all exit 0. Coverage remains 132 rows without errors or warnings.
- Decision: `repaired`, confidence 1, with both dependency IDs examined; item
  receipt SHA
  `49c696fc0d30c915db466db1179e72dcb65baf0f7d925f90bb8833bdbf329441`
  was written successfully. The refreshed non-owner `sufficient` scope receipt
  has hash
  `ccd8330aeaf80d90174e4bf10bd564d912b4d0ea3a0f617306dbcea0585366da`.

- Next local item: `prop-exponential-scales-one-parameter-subgroups`.

### `prop-exponential-scales-one-parameter-subgroups`

- Claim/conventions: assuming `AC_omega`, for every `X in g` and real `a`,
  `gamma_X(a)=exp_G(aX)`; consequently
  `exp_G((s+t)X)=exp_G(sX)exp_G(tX)` for every pair of real parameters.
- Source locator reread: Kirillov's note immediately following Definition 3.2
  and Theorem 3.7(3), printed page 30 (PDF page 30). The note contains the full
  reparameterization-and-uniqueness argument, and the theorem states the
  resulting additive-parameter law. The loose Knapp locator was removed.
- Dependencies read: countable choice, the completed exponential definition,
  the completed existence-and-uniqueness theorem for one-parameter subgroups,
  the one-parameter-subgroup definition and product law, and the chain rule.
- Scaffold repair: propagated `AC_omega` exactly through the
  existence-and-uniqueness supplier and added the omitted subgroup-law and
  chain-rule inputs as direct dependencies.
- Proof: step 1.1 reparameterizes `gamma_X` by `u |-> au`, verifies the
  homomorphism law, and calculates initial velocity `aX`. Step 2.1 applies
  uniqueness and evaluates at time one. Step 3.1 applies the homomorphism law
  and the scaling identity to prove the exponential product formula.
- Boundaries/choice: in dimension zero `X=0` and every curve is constant;
  dimension one is unchanged. Global parameter domains cover zero, negative
  and arbitrary finite scalars. There is no metric or degeneracy. The stated
  `AC_omega` is inherited only through the exponential and
  existence-and-uniqueness suppliers; fixing finitely many vectors and scalars
  adds no choice. The two conclusions are identities, not an iff.
- Checks: explicit-path precheck, rendercheck, strict selected-item
  proof-contract validation, coverage checklist, and manifest-dependency
  validation all exit 0. Coverage now reports 133 harvested results without
  errors or warnings.
- Decision: `repaired`, confidence 1, with all five dependency IDs examined;
  item receipt SHA
  `0038950d18d3776ae26122531a065be04e9126ee1167de0906c7d3903e6c4a71`.
  The refreshed non-owner `sufficient` scope receipt has SHA
  `e84568762fe0b9db6d112d04228e1742113a7500194e017453372f49510f71d2`.

- Next local item:
  `thm-the-lie-group-exponential-map-is-smooth-with-identity-differential-at-zero`.

### `thm-the-lie-group-exponential-map-is-smooth-with-identity-differential-at-zero`

- Claim/conventions: assuming `AC_omega`, `exp_G:g->G` is smooth, sends zero
  to the identity, and has differential `id_g` at zero under the canonical
  identification `T_0g = g`.
- Source passages read in full: Conrad--Landesman Appendix G.1, printed pages
  182--183, gives the complete product-manifold global-flow proof; Kirillov
  Theorem 3.7(1) and its proof, printed pages 30--31, state the value and
  identity differential and outline smooth ODE dependence. Conrad--Landesman
  accidentally calls `g |-> d(L_g)_e` the adjoint representation; that label
  is false, so the proof instead cites the already-completed smooth left
  translation trivialization for the precise mathematical assertion.
- Dependencies read: countable choice, exponential definition, smooth
  translation trivialization, one-parameter-subgroup integral-curve theorem,
  fundamental theorem on flows, scaling proposition, one-parameter-subgroup
  identity law, and chain rule. The two local ODE results in the scaffold were
  replaced by the stronger directly used global-flow theorem.
- Proof: on `M=G x g`, step 1.1 constructs the smooth field
  `(g,Y) |-> (d(L_g)_eY,0)`. Step 2.1 calculates that its global curve through
  `(g,Y)` is `(g gamma_Y(t),Y)` and invokes smoothness of the maximal flow.
  Step 3.1 restricts the flow to `g=e,t=1`. Step 4.1 derives `exp(0)=e` and
  differentiates `a |-> exp(aX)=gamma_X(a)` to obtain the identity
  differential.
- Boundaries/choice: in dimension zero the exponential and its differential
  are the unique maps on the zero space; dimension one is unchanged. The
  global product flow eliminates endpoint issues, and there is no metric or
  degeneracy. `AC_omega` is inherited through the exponential,
  one-parameter-subgroup and especially smooth tangent-trivialization
  suppliers; the product-field construction and restrictions add no choice.
  No iff is asserted.
- Checks: explicit-path precheck, rendercheck, strict selected-item contract,
  coverage checklist, and manifest-dependency validation all exit 0. Coverage
  now reports 134 harvested results without errors or warnings.
- Decision: `repaired`, confidence 1, with all eight dependency IDs examined;
  item receipt SHA
  `c56dc8e3bc7b1dd3f269eec60dd480a14569d9b0a4574476cc958ffd9f67b085`.
  The refreshed non-owner `sufficient` scope receipt has SHA
  `35fb6a5af30a276689e5e4ce9ef91e8e6916091ed5608e9730ebb1e0f82a6b34`.

- Next local item:
  `cor-the-exponential-map-is-a-local-diffeomorphism-at-zero`.

### `cor-the-exponential-map-is-a-local-diffeomorphism-at-zero`

- Claim/conventions: assuming `AC_omega`, there are open neighborhoods `V`
  of zero in `g` and `U` of `e` in `G` for which
  `exp_G|_V:V->U` is a diffeomorphism.
- Source passages reread: Conrad--Landesman Lemma 6.7 and its explicit inverse
  function theorem consequence, printed pages 28--29; Kirillov Theorem 3.7(2)
  and proof, printed pages 30--31.
- Dependencies read: countable choice, the completed smoothness/value/
  differential theorem, and the full manifold inverse function theorem.
- Scaffold repair and proof: the statement now propagates `AC_omega` exactly
  from the first supplier, and step 2.1 applies the inverse function theorem to
  the already-proved isomorphism `d(exp_G)_0=id_g`. The loose Knapp locator was
  replaced by the complete Conrad--Landesman and Kirillov locators.
- Boundaries/choice: in dimension zero the singleton neighborhoods `{0}` and
  `{e}` are open and the restriction is the unique diffeomorphism; dimension
  one is covered by the same theorem. Open neighborhoods create no endpoint
  case, and no metric or degeneracy occurs. `AC_omega` is inherited only from
  the smoothness theorem; one inverse-function-theorem application adds no
  choice. No iff is asserted.
- Checks: explicit-path precheck, rendercheck, strict selected-item contract,
  coverage checklist, and manifest-dependency validation all exit 0. Coverage
  now reports 135 harvested results without errors or warnings.
- Decision: `repaired`, confidence 1, with all three dependency IDs examined;
  item receipt SHA
  `268f33fe2f7a99aa06da44a8dced6b78c7fe611278d95304d2c4368506fe436b`.
  The refreshed non-owner `sufficient` scope receipt has SHA
  `c16dafeee9de21448627b6040b5174ca8302df34a43af1056d15dfa5352acb43`.

- Next local item: `def-local-logarithm-on-a-lie-group`.

### `def-local-logarithm-on-a-lie-group`

- Definition/conventions: assuming `AC_omega`, fix one supplied exponential
  diffeomorphism `exp_G|_V:V->U` and define `log_G:U->V` as its smooth
  inverse. Both inverse identities are stated; the pair `(V,U)` is part of the
  notation, and no value or global inverse is claimed outside `U`.
- Source locator reread: Kirillov Theorem 3.7(2), printed page 30, including
  the explicit local inverse notation. The loose Knapp locator was removed.
- Dependencies read: countable choice and the completed local-diffeomorphism
  corollary. The scaffold now propagates `AC_omega` exactly from that supplier.
- Boundaries/choice: `U` contains `e`. In dimension zero the local logarithm
  is the unique inverse `{e}->{0}`; dimension one is unchanged. Open
  neighborhoods create no endpoint case and no metric or degeneracy occurs.
  Fixing one existential witness pair is not a family choice and adds nothing
  beyond the inherited `AC_omega`. The two displayed inverse identities unpack
  an inverse map and do not form a biconditional theorem.
- Checks: explicit-path definition precheck, rendercheck, strict selected-item
  contract, coverage checklist, and manifest-dependency validation all exit 0.
  Coverage now reports 136 harvested results without errors or warnings.
- Decision: `repaired`, confidence 1, with both dependency IDs examined; item
  receipt SHA
  `9f34d0a481248a2a0ad7ea59eafcbe2f323325368f1c4a40d6e44231e2d0a600`.
  The refreshed non-owner `sufficient` scope receipt has SHA
  `8d73cd5574d0fdfea75601443eeec87750b238be6fb66e09bf11df74a732ab12`.

- Next local item: `thm-one-parameter-subgroups-are-exactly-exponentials`.

### `thm-one-parameter-subgroups-are-exactly-exponentials`

- Claim/conventions: assuming `AC_omega`, a smooth curve is a one-parameter
  subgroup iff it is `t |-> exp_G(tX)` for a unique `X`, necessarily its
  derivative at zero.
- Source passages reread: Kirillov Proposition 3.1 and proof, printed page 29,
  and Definition 3.2 with its full reparameterization argument, printed page
  30. The loose Knapp locator was removed.
- Dependencies read: countable choice, completed exponential scaling,
  one-parameter-subgroup definition, and completed existence/uniqueness at a
  prescribed initial velocity. The last supplier was omitted by the scaffold
  but is needed for the forward direction and uniqueness.
- Proof: step 1.1 assigns `X=gamma'(0)`, applies uniqueness to identify
  `gamma=gamma_X`, invokes scaling, and proves uniqueness of `X` by
  differentiating at zero. Step 1.2 identifies every exponential curve with
  the supplied subgroup `gamma_X`.
- Boundaries/choice: in dimension zero the only exponential curve is constant;
  dimension one is unchanged. All curves are global on `R`, and no metric or
  degeneracy occurs. `AC_omega` is inherited through the scaling and
  existence/uniqueness suppliers; a single derivative adds no choice. Both iff
  directions are explicit.
- Checks: after adopting canonical proof-step numbering, explicit-path
  precheck, rendercheck, strict selected-item contract, coverage checklist, and
  manifest-dependency validation all exit 0. Coverage now reports 137
  harvested results without errors or warnings.
- Decision: `repaired`, confidence 1, with all four dependency IDs examined;
  item receipt SHA
  `871a99f5f8bb23df9000755b12bdfb25672c9dc8453558612ef29702377ced4d`.
  The refreshed non-owner `sufficient` scope receipt has SHA
  `33ff54c15f50d1470ebe8ef6b76af52b75e67434276e017039a685f43d58fb01`.

- Next local item:
  `prop-commuting-lie-algebra-elements-have-multiplicative-exponentials`.

### `prop-commuting-lie-algebra-elements-have-multiplicative-exponentials`

- Claim/conventions: assuming `AC_omega`, if `[X,Y]_G=0`, then
  `exp_G(X+Y)=exp_G(X)exp_G(Y)=exp_G(Y)exp_G(X)`.
- Source passage read completely: Kirillov Theorem 3.36 and its full flow
  proof, printed/PDF page 39. The proof asserts but compresses the product
  curve's initial-velocity computation; the authored argument expands it.
  The loose Knapp locator was removed.
- Dependencies read: countable choice, smooth Lie-group multiplication,
  tangent bracket, commuting-flow iff theorem, one-parameter integral curves,
  exponential scaling, one-parameter-subgroup definition, exact exponential
  characterization, and chain rule. The scaffold omitted six actual direct
  inputs and the inherited choice hypothesis.
- Proof: step 1.1 transports tangent-bracket zero to the left-invariant fields.
  Step 2.1 evaluates their commuting global flows to prove that every
  `exp(tX)` commutes with every `exp(sY)`. Step 3.1 proves the product curve is
  a smooth homomorphism. Step 4.1 derives `dm_(e,e)(X,Y)=X+Y` from the two unit
  laws and linearity, hence calculates its initial velocity. Step 5.1 applies
  the completed exponential-curve characterization and evaluates at time one.
- Boundaries/choice: in dimension zero both vectors vanish and all terms are
  `e`; dimension one is unchanged. All curves and flows are global, with no
  metric or degeneracy. `AC_omega` is inherited through the tangent-bracket,
  invariant-field and exponential suppliers; two fixed fields and finitely
  many parameters add no choice. No iff is asserted.
- Checks: after canonical proof-step renumbering, explicit-path precheck,
  rendercheck, strict selected-item contract, coverage checklist, and
  manifest-dependency validation all exit 0. Coverage remains 137 harvested
  results without errors or warnings.
- Decision: `repaired`, confidence 1, with all nine dependency IDs examined;
  item receipt SHA
  `8de3cef19ed08b86255edc78f0e909373e48f559833e61aa05bc0b35269a369c`.
  The refreshed non-owner `sufficient` scope receipt has SHA
  `565fa4abe4a48963db6f89429ba5e069239fed50779242d69f684704823c05b2`.

- Next local item: `def-lie-algebra-homomorphism`.

### `def-lie-algebra-homomorphism`

- Definition/conventions: for Lie algebras over the same field, a
  homomorphism is a linear map preserving the source and target brackets. For
  complex Lie algebras the map must be complex-linear.
- Source locator read: Kirillov Definition 3.17 and the following sentence,
  printed/PDF page 33. The scaffold's Kirillov section 3.8 locator was wrong
  and was repaired; the loose Knapp citation was removed.
- Dependencies read: finite-dimensional Lie algebra and linear map. Both
  linearity and bracket preservation are separately required.
- Boundaries/choice: zero brackets are allowed; the unique linear map from the
  zero algebra is a homomorphism, and one-dimensional Lie algebras have zero
  bracket. The source and target contain zero, and a supplied map plus two
  universal identities require no choice. There is no metric, boundary or
  endpoint and no iff theorem.
- Checks: after repairing a physical multiline-display line, explicit-path
  definition precheck, rendercheck, strict selected-item contract, coverage
  checklist, and manifest-dependency validation all exit 0. Coverage now
  reports 138 harvested results without errors or warnings.
- Decision: `repaired`, confidence 1, with both dependency IDs examined; item
  receipt SHA
  `de378a47ec8db52706576cc5a6fb3a83162d3811784885153d66aac91514cf54`.
  The refreshed non-owner `sufficient` scope receipt has SHA
  `75d1f014a4cbbfbb903e23da0311f5acca6e583a16f5221472b1b584d18e49b0`.

- Next local item:
  `thm-differential-of-a-lie-group-homomorphism-is-a-lie-algebra-homomorphism`.

### `thm-differential-of-a-lie-group-homomorphism-is-a-lie-algebra-homomorphism`

- Claim/conventions: assuming `AC_omega`, a Lie-group homomorphism
  `F:G->H` differentiates at the identity to a linear bracket-preserving map
  `dF_e:g->h`.
- Source passage read completely: Kirillov Proposition 3.12(1), statement and
  proof, printed/PDF page 32. Kirillov's proof uses exponential naturality,
  which is the next item and would be circular here; the authored proof instead
  uses related invariant fields. The loose Knapp locator was removed and this
  qualification is recorded in provenance and coverage.
- Dependencies read: countable choice, Lie-algebra and Lie-group homomorphism
  definitions, related-bracket naturality, invariant-field evaluation,
  tangent bracket, differential linearity, and the chain rule. The scaffold
  omitted the choice, tangent-bracket, linearity, and chain-rule inputs.
- Proof: step 1.1 differentiates
  `F o L_g = L_{F(g)} o F` to prove that `X^L` and `(dF_eX)^L` are
  `F`-related. Step 2.1 applies naturality of vector-field brackets and
  evaluates at the identity. Step 3.1 combines bracket preservation with
  supplied linearity.
- Boundaries/choice: zero-dimensional source or target algebras cause no
  change, and dimension one is unchanged. There is no metric, degeneracy,
  interval, endpoint or iff. `AC_omega` is inherited through the smooth
  invariant-field and tangent-bracket suppliers; fixing two tangent vectors
  adds no choice.
- Checks: explicit-path precheck, rendercheck, strict selected-item contract,
  coverage checklist, and manifest-dependency validation all exit 0. Coverage
  now reports 139 harvested results without errors or warnings.
- Decision: `repaired`, confidence 1, with all eight dependency IDs examined;
  item receipt SHA
  `d876d75b899dd056f268c471e7ce67044b3ce76bd99b1f556567810aff7180fb`.
  The refreshed non-owner `sufficient` scope receipt has SHA
  `fe387a8066478b532d388064a5ebfce6243e1de1a7b59e2d6978b798bbfcf6d7`.

- Next local item:
  `prop-exponential-map-is-natural-for-lie-group-homomorphisms`.

### `prop-exponential-map-is-natural-for-lie-group-homomorphisms`

- Claim/conventions: assuming `AC_omega`, every Lie-group homomorphism
  satisfies `F(exp_G X)=exp_H(dF_eX)`.
- Source passage reread: Kirillov Theorem 3.7(4) and its complete
  one-parameter-subgroup uniqueness proof, printed pages 30--31. The loose
  Knapp locator was removed.
- Dependencies read: countable choice, the exact exponential-curve
  characterization, Lie-group homomorphism definition, and chain rule. The
  scaffold's differential-is-a-Lie-algebra-homomorphism supplier is true but
  unused here; it was replaced by the actual homomorphism and chain-rule
  inputs.
- Proof: step 1.1 composes `t |-> exp_G(tX)` with `F` and verifies it is a
  one-parameter subgroup of `H`; step 2.1 calculates initial velocity
  `dF_eX`; step 3.1 invokes uniqueness in `H` and evaluates at time one.
- Boundaries/choice: zero-dimensional source or target and dimension one need
  no change, including `X=0`. Both curves are global, with no metric or
  degeneracy. `AC_omega` is inherited only through the exponential-curve
  characterization; composition and evaluation at one add no choice. No iff
  is asserted.
- Checks: after correcting one JSON escape in the contract, explicit-path
  precheck, rendercheck, strict selected-item contract, coverage checklist,
  and manifest-dependency validation all exit 0. Coverage remains 139
  harvested results without errors or warnings.
- Decision: `repaired`, confidence 1, with all four dependency IDs examined;
  item receipt SHA
  `cb80b307f602b7ced736cd5c04f3611012e2b590e2279b472909ec0b3de28f60`.
  The refreshed non-owner `sufficient` scope receipt has SHA
  `1a2ef69fac11c1bdca903b2ec89c4c64a00df18ebabcb29f0d94788c2685410d`.

- Next local item:
  `thm-a-homomorphism-from-a-connected-lie-group-is-determined-by-its-differential-at-the-identity`.

### `thm-a-homomorphism-from-a-connected-lie-group-is-determined-by-its-differential-at-the-identity`

- Claim/conventions: assuming `AC_omega`, two Lie-group homomorphisms from a
  connected finite-dimensional real Lie group with the same identity
  differential are equal.
- Source passage reread completely: Kirillov Proposition 3.9 and proof,
  printed/PDF page 31. The source cites its neighborhood-generation corollary;
  the authored proof supplies the complete open-subgroup/clopen argument
  locally. The loose Knapp locator was removed.
- Dependencies read: countable choice, exponential naturality, the local
  diffeomorphism of the exponential at zero, Lie-group homomorphism laws, and
  connectedness as absence of a nontrivial clopen partition. The scaffold
  omitted the choice, homomorphism, and connectedness inputs.
- Proof: step 1.1 gives equality on the exponential identity neighborhood.
  Step 2.1 proves the equalizer is a subgroup. Step 3.1 writes it as a union
  of translates of that neighborhood and writes its complement as a union of
  open outside cosets. Step 4.1 uses connectedness to make the equalizer all
  of `G`.
- Boundaries/choice: a connected zero-dimensional Lie group is a one-point
  discrete space, and dimension one is unchanged. There is no metric,
  degeneracy, interval, endpoint, or iff. `AC_omega` is inherited through the
  exponential suppliers; fixing one neighborhood pair and taking unions over
  specified sets add no family choice.
- Checks: after putting every proof-step citation on its canonical physical
  line, explicit-path precheck, rendercheck, strict selected-item contract,
  coverage checklist, and manifest-dependency validation all exit 0. Coverage
  remains 139 harvested results without errors or warnings.
- Decision: `repaired`, confidence 1, with all five dependency IDs examined;
  item receipt SHA
  `f1ba320c1053a0997e1b62f0f046413c4b5a953a886f8516a445c3e7b5cc9a74`.
  The refreshed non-owner `sufficient` scope receipt has SHA
  `70132c50096bb33e8535e04c32f7a4bc37bdc7807aa0ce8c7432179454f7180c`.

- Next local item: `def-conjugation-and-the-adjoint-representation-of-a-lie-group`.

### `def-conjugation-and-the-adjoint-representation-of-a-lie-group`

- Definition/conventions: `C_g(h)=ghg^{-1}` is a smooth automorphism;
  `Ad_g=d(C_g)_e` is its invertible identity differential, and `Ad` maps `G`
  into the abstract group `GL(g)`. The definition also constructs the standard
  smooth structure on `GL(g)` as the determinant-nonzero open matrix locus in
  any one basis and checks basis independence under matrix conjugation.
- Source passages read completely: Kirillov Section 2.6 and formula (2.4),
  printed page 21; Knapp's definition preceding formula (1.88), printed page
  79. The scaffold's Kirillov section 3.3 locator was replaced, and its matrix
  `GL_n` dependency was replaced by the required abstract linear-map and smooth
  open-locus interface.
- Dependencies read: Lie group and homomorphism definitions, the differential,
  differential of a diffeomorphism, invertible linear maps, dimension and
  linear-map coordinates, determinant polynomial/nonzero invertibility, and
  the restricted smooth structure on open subsets.
- Boundaries/choice: in dimension zero every `Ad_g` is the unique automorphism
  of the zero space even for a nonabelian discrete group; dimension one is
  unchanged. No metric, degeneracy, endpoint, or iff occurs. One finite basis
  is a single finite witness, not a family choice.
- Checks: definition precheck, rendercheck, strict selected-item contract,
  coverage checklist, and manifest-dependency validation all exit 0 after the
  dependent smoothness audit added the missing `GL(g)` smooth structure.
  Coverage now reports 140 harvested results without errors or warnings.
- Refreshed decision: `repaired`, confidence 1, with all eleven current
  dependency IDs examined; item receipt SHA
  `e17496cabdf975252280347ee0b14487e9204c034a73525122a4e8447ee50bdd`.

### `prop-adjoint-is-a-smooth-lie-group-representation`

- Claim/conventions: `Ad_{gh}=Ad_g Ad_h`, `Ad_e=id`, and the map into the
  standard smooth `GL(g)` is smooth. No choice assumption is required.
- Source passages read completely: Knapp Proposition 1.89 with the definition,
  formula (1.88), and full proof, printed page 79; Kirillov formula (3.4) and
  its preceding paragraph, printed page 33.
- Dependencies read: the completed conjugation/adjoint definition, Lie-group
  smooth operations, the finite-dimensional representation definition, and
  the differential chain rule. The scaffold's global-differential theorem was
  unnecessary and would have introduced an avoidable `AC_omega` assumption.
- Proof: step 1.1 proves `C_{gh}=C_g o C_h`; step 1.2 shows that in a fixed
  basis the entries of `Ad_g` are second-variable partial derivatives of the
  jointly smooth conjugation map; step 2.1 differentiates the composition law;
  step 3.1 combines the group and smoothness conclusions.
- Boundaries/choice: `GL(0)` is a point; dimension one is unchanged. There is
  no metric, degeneracy, interval, endpoint, or iff. A finite basis and a
  finite local-chart test require no choice axiom.
- Checks: after adopting the precheck's canonical independent-step layering
  and repairing one multiline display, explicit-path precheck, rendercheck,
  strict selected-item contract, coverage checklist, and manifest-dependency
  validation all exit 0.
- Decision: `repaired`, confidence 1, with all four dependency IDs examined;
  item receipt SHA
  `01c3d5cc9a940f6229b0b52f55f9d6cd5b974f9116cf7041155ed02bbb8c74cb`.
  The current non-owner `sufficient` scope receipt remains SHA
  `70132c50096bb33e8535e04c32f7a4bc37bdc7807aa0ce8c7432179454f7180c`.

- Next local item: `def-adjoint-representation-of-a-lie-algebra`.

### `def-adjoint-representation-of-a-lie-algebra`

- Definition/conventions: `ad_X(Y)=[X,Y]`; bracket bilinearity makes each
  `ad_X` an endomorphism and makes `X |-> ad_X` linear. Jacobi gives
  `[ad_X,ad_Y]=ad_[X,Y]`, so the named map is genuinely a Lie-algebra
  representation rather than merely a pending notation.
- Source passages read completely: Knapp's definition and Jacobi
  reformulation (1.1), printed page 24; Kirillov Theorem 3.16 and the last
  identity in (3.6), printed page 33. The scaffold's references to Knapp
  Introduction section 5 and Kirillov Lemma 3.15 did not locate the abstract
  definition and were replaced.
- Dependencies read: finite-dimensional Lie algebra, vector space of linear
  maps, and the now-completed sibling definition of a Lie-algebra
  representation. The sibling claim was rechecked after its helper handoff.
- Boundaries/choice: zero and one-dimensional algebras have zero adjoint
  representation. Degenerate maps are explicitly allowed and no faithfulness
  is asserted. No manifold, metric, endpoint, choice, or iff occurs.
- Checks: definition precheck, rendercheck (after separating a nested bracket
  from wikilink syntax), strict selected-item contract, coverage checklist,
  and manifest-dependency validation all exit 0. Coverage now reports 141
  harvested results without errors or warnings.
- Decision: `repaired`, confidence 1, with all three dependency IDs examined;
  item receipt SHA
  `d8e3d40b9a9c93ab085c4b07085c7e5ab8d27c5a03545627fc73210fafb081cd`.
  The current non-owner `sufficient` scope receipt remains SHA
  `70132c50096bb33e8535e04c32f7a4bc37bdc7807aa0ce8c7432179454f7180c`.

- Next local item: `thm-the-differential-of-adjoint-is-ad`.

### `thm-the-differential-of-adjoint-is-ad`

- Claim/conventions: assuming `AC_omega`, under
  `T_I GL(g)=End(g)`, the identity differential of the group adjoint map is
  `X |-> ad_X`; consequently `[ad_X,ad_Y]=ad_[X,Y]`.
- Source passages read completely: Knapp Proposition 1.91 and proof, printed
  pages 80--81; Kirillov Lemma 3.15(1) and proof, printed page 33; Bryant
  Lecture 2 Proposition 7 and proof, printed pages 21--22. All three source
  arguments use a second-order local product/BCH expansion that appears later
  in this page, so the authored argument uses an earlier noncircular supplier
  route and records that qualification.
- Dependencies read: countable choice, completed group `Ad` and algebra `ad`,
  translations/invariant fields and their evaluation, the tangent bracket,
  exponential integral curves, vector-field pushforward and Lie derivative,
  and the chain rule. The scaffold's differential-homomorphism supplier was
  unused because the completed `ad` definition already establishes the final
  representation identity.
- Proof: step 1.1 proves `(C_g)_*Y^L=(Ad_gY)^L`. Step 1.2 identifies the
  `X^L` flow as right translation by `exp(tX)` and uses commuting left/right
  translations to rewrite conjugation pushforward as inverse-time right
  translation. Step 2.1 differentiates using the library's inverse-time Lie
  derivative sign and gets `[X^L,Y^L]`. Step 3.1 evaluates at `e` and applies
  the chain rule to obtain `(dAd_eX)(Y)=[X,Y]`.
- Boundaries/choice: dimensions zero and one reduce to zero maps/brackets;
  degenerate adjoint maps are allowed. Flows are global, so there is no
  endpoint issue, and no metric occurs. `AC_omega` is propagated through the
  invariant-field, tangent-bracket, exponential and pushforward interfaces;
  two fixed tangent vectors add no choice.
- Checks: explicit-path precheck, rendercheck, strict selected-item contract,
  coverage checklist, and manifest-dependency validation all exit 0.
- Decision: `repaired`, confidence 1, with all thirteen dependency IDs
  examined; item receipt SHA
  `57994aed4e87a9af5c50b210e1b3a640a8efffd4125cdcc436b2153d10bc0dc3`.
  The refreshed non-owner `sufficient` scope receipt has SHA
  `ecf7765e0bdafa75297ef0477f5ceb5162c352f34b278d65153e1b1ba0625691`.

- Next local item: `prop-adjoint-intertwines-the-exponential-map`.

### `prop-adjoint-intertwines-the-exponential-map`

- Claim/conventions: assuming `AC_omega`,
  `g exp_G(X) g^{-1}=exp_G(Ad_gX)` for every `g,X`.
- Source passages reread completely: Knapp formula (1.88) and preceding
  definition, printed page 79; Kirillov Theorem 3.7(5) and proof, printed
  pages 30--31.
- Dependencies read: countable choice, the completed conjugation/adjoint
  definition, and exponential naturality. The scaffold omitted the inherited
  choice hypothesis.
- Proof: apply exponential naturality to the automorphism `C_g` and substitute
  `d(C_g)_e=Ad_g`.
- Boundaries/choice: dimension zero, dimension one, and `X=0` are included.
  No metric, degeneracy, interval, endpoint, or iff occurs. `AC_omega` is
  inherited exactly from naturality; fixed `g,X` add no choice.
- Checks: explicit-path precheck, rendercheck, strict selected-item contract,
  coverage checklist, and manifest-dependency validation all exit 0. Coverage
  now reports 142 harvested results without errors or warnings.
- Decision: `repaired`, confidence 1, with all three dependency IDs examined;
  item receipt SHA
  `79d77faa712f9349c391b9c95140934c0431d4158e88b6c9ad50abd1b9e63eac`.
  The refreshed non-owner `sufficient` scope receipt has SHA
  `e07490ed38ed9cce22b637a8b06652a1d37ccabf2d5b4fd390b1a12af4d39e02`.

- Next local item: `prop-adjoint-exponential-identity`.

### `prop-adjoint-exponential-identity`

- Claim/conventions: assuming `AC_omega`,
  `Ad_{exp_G X}=e^{ad_X}`, where the exponential on the right is explicitly
  the unique global solution of `E'=ad_X E`, `E(0)=I`; this avoids silently
  importing a power-series convention not yet available on the page.
- Source passages read completely: Knapp Proposition 1.91, formula (1.92),
  and proof, printed pages 80--81; Kirillov Lemma 3.15(2) and proof, printed
  page 33; Bryant Lecture 2 Proposition 7 and proof, printed pages 21--22.
  Those references use second-order local multiplication or BCH, so the
  authored proof deliberately takes the earlier ODE route.
- Dependencies read: countable choice, the completed smooth group `Ad`
  representation, one-parameter subgroups as exponentials, the completed
  identity `dAd=ad`, and the published compact-interval linear matrix ODE
  theorem.
- Proof: `A(t)=Ad_{exp(tX)}` is a smooth one-parameter matrix subgroup with
  `A'(0)=ad_X`. Differentiating `A(t+s)=A(s)A(t)` at `s=0` gives
  `A'=ad_X A`. Unique solutions on compact intervals containing zero agree on
  overlaps, hence canonically define the global ODE exponential; uniqueness
  gives `A(t)=e^{t ad_X}` and evaluation at `t=1` proves the claim.
- Boundaries/choice: dimension zero is the unique zero-space endomorphism;
  in dimension one the Lie bracket vanishes and both sides are `I`.
  Degenerate endomorphisms are allowed. Compact-interval gluing treats all
  endpoints. `AC_omega` is inherited through the exponential and `dAd`
  suppliers; one basis and unique solutions add no choice. No metric or
  biconditional occurs.
- Checks: JSON parse, explicit-path precheck, rendercheck, strict selected-item
  proof contract, coverage checklist, and manifest-dependency validation all
  exit 0. Coverage remains 142 harvested results without errors or warnings.
- Decision: `repaired`, confidence 1, with all five current dependency IDs
  examined; item receipt SHA
  `087406909360d4304518e1dc6fe836f7b64a2d263fbd338e4fbecbacf41cf396`.
  The refreshed non-owner `sufficient` scope receipt has SHA
  `1fc0fe2eb56d91ff853a74b442a1b5d09774705719c8896d193e3e58daccd2ed`.

- Next local item: `def-baker-campbell-hausdorff-series`.

### `def-baker-campbell-hausdorff-series`

- Definition/conventions: for each degree `N`, the item gives Dynkin's full
  finite block sum with coefficient `(-1)^(k-1)/(kN)`, defines the word
  `X^mY^n` convention, and fixes right-nested commutators recursively. BCH is
  the formal sequence of these homogeneous Lie polynomials until convergence
  is supplied; only then does the notation denote an infinite vector sum.
- Source passages read completely: Müger Theorem 1.3, formula (1.4), and
  Remark 1.4, printed pages 3--4; Knapp Appendix B Section 4, Theorem B.22 and
  formulas (B.23)--(B.24), printed pages 669--671.
- Dependencies read: the finite-dimensional real Lie-algebra definition and
  the completed adjoint-representation definition. The latter is used to
  identify the recursively nested word with a composition of adjoint maps.
- Low-degree evidence: the two degree-one blocks give `X+Y`. In degree two,
  the sole nonzero one-block term gives `(1/2)[X,Y]`, while the two mixed
  two-block terms cancel as `-(1/4)([X,Y]+[Y,X])`; repeated-letter brackets
  vanish. The finite degree-three collection gives the two displayed `1/12`
  terms.
- Boundaries/choice: the zero algebra gives the zero series; every
  one-dimensional real Lie algebra is abelian and gives `X+Y`. Fixed-degree
  sums are finite, so no family choice occurs. No metric, nondegeneracy,
  interval, endpoint, or biconditional is asserted.
- Checks: JSON parse, explicit-path precheck, rendercheck, strict selected-item
  contract, coverage checklist, and manifest-dependency validation all exit
  0. Coverage remains 142 harvested results without errors or warnings.
- Decision: `repaired`, confidence 1, with both current dependency IDs
  examined; item receipt SHA
  `6642d8b355aba63f7e879a38b74fc5d562845519a2c270bdcb46536645f454d7`.
  The refreshed non-owner `sufficient` scope receipt has SHA
  `9f599c86743c6f96ca9b0fc061c8acdc9065e239d24d46b4e0a11648a72a3fc0`.

- Next local item: `lem-local-convergence-of-the-baker-campbell-hausdorff-series`.

### `lem-local-convergence-of-the-baker-campbell-hausdorff-series`

- Claim/conventions: for any norm on a finite-dimensional real Lie algebra,
  Dynkin's series converges absolutely on some open sum-norm ball and its
  partial sums converge uniformly on every smaller closed sum-norm ball. The
  item explicitly does not yet identify the sum with
  `log(exp(X)exp(Y))`.
- Source passages read completely: Müger Proposition 2.4, Remark 2.5(2), and
  Theorem 2.14 with complete proof, printed pages 5 and 10--11; Knapp Appendix
  B Section 4, Theorem B.22 and formulas (B.23)--(B.24), printed pages
  669--671.
- Dependencies read: the completed Dynkin definition, finite-dimensional Lie
  algebra, bounded coordinate isomorphism, finite-dimensional completeness,
  real exponential convergence/addition, binomial theorem with factorial
  coefficients, and the geometric series.
- Proof: one finite basis gives `||[U,V]|| <= C||U||||V||`; induction gives
  the `C^(N-1)` bound for every right-nested word. If `C=0`, only `H_1`
  survives. Otherwise use `epsilon=1/(4C)`. On a smaller ball, each positive
  block's scalar weights have degree sum `(a+b)^d/d!`, dominated by
  `R^d/d!`; their total is at most `sum_(d>=1)(1/4)^d=1/3`. The complete
  `k`-block Dynkin sum is therefore dominated degreewise by
  `(1/C) sum_(k>=1)q^k/k`, hence by a geometric series. Completeness gives
  the sums, and the same scalar tails give uniform convergence.
- Boundaries/choice: the zero and all one-dimensional algebras are abelian;
  `C=0` is handled explicitly and arbitrary degenerate brackets remain
  allowed. The norm is arbitrary. One finite basis is a single witness and
  needs no choice axiom. No interval, endpoint, or biconditional occurs.
- Checks: JSON parse, explicit-path precheck after adopting canonical step
  layering, rendercheck, strict selected-item contract, coverage checklist,
  and manifest-dependency validation all exit 0. Coverage remains 142
  harvested results without errors or warnings.
- Decision: `repaired`, confidence 1, with all nine current dependency IDs
  examined; item receipt SHA
  `86c73b3ac508f1adb5519947e5315efd864da7004817267ed1cb99830e9f702a`.
  The current non-owner `sufficient` scope receipt has SHA
  `9f599c86743c6f96ca9b0fc061c8acdc9065e239d24d46b4e0a11648a72a3fc0`.

- Next local item: `thm-baker-campbell-hausdorff`.

### `lem-right-trivialized-differential-of-the-lie-group-exponential` (new local supplier)

- Claim/conventions: assuming `AC_omega`, right translation identifies
  `dexp_Z(V)` with `sum_(n>=0) ad_Z^n(V)/(n+1)!`. The quotient notation
  `(e^(ad_Z)-I)/ad_Z` is explicitly defined by this entire series and never
  divides by a potentially singular endomorphism.
- Source passages read completely: Müger Proposition 2.7, Remark 2.8(5), and
  the first proof through formula (2.6), printed pages 6--7; Knapp's errata
  insertion giving the left-trivialized differential formula for printed page
  110, errata printed page 814.
- Dependencies read: countable choice, translations, exponential smoothness
  and one-parameter integral curves, the completed adjoint exponential
  identity, compact-interval linear matrix ODE uniqueness, bounded finite
  coordinates, scalar exponential convergence, termwise power-series
  differentiation, vector-valued FTC, and the chain rule.
- Proof: the operator power series solves `S'=ad_Z S`, `S(0)=I`, so ODE
  uniqueness identifies it with the ODE exponential. For
  `F(s,t)=exp(t(Z+sV))`, the right-trivialized variational field satisfies
  `xi'=Ad_(exp(tZ))V`, `xi(0)=0`; substituting the adjoint identity and
  integrating the operator series gives the formula at `t=1`.
- Boundaries/choice: dimensions zero and one are explicit; singular `ad_Z` is
  allowed. The compact interval `[0,1]` includes both endpoints. `AC_omega`
  is propagated from the exact exponential suppliers; one basis adds no
  family choice. No metric dependence or biconditional occurs.
- Checks: JSON parse, explicit-path precheck after adopting canonical step
  layering, rendercheck, strict selected-item contract, coverage checklist,
  and manifest-dependency validation all exit 0. Coverage now reports 143
  harvested results and the manifest 125 items, without errors or warnings.
- Decision class: auditor-created and fully authored in this dispatch, so no
  Step 3 self-review decision was recorded. The refreshed non-owner
  `sufficient` scope receipt has SHA
  `a40954b1c8ee40d9512e15095b51f564928cec068040380e5c33c147f25b8ec3`.

- Next local item: `thm-baker-campbell-hausdorff`.

### `thm-baker-campbell-hausdorff`

- Claim/conventions: assuming `AC_omega`, for every fixed local logarithm
  there is one neighborhood of `(0,0)` on which Dynkin's series converges and
  `log(exp X exp Y)=BCH(X,Y)`, hence
  `exp X exp Y=exp(BCH(X,Y))`.
- Source passages read completely: Müger Theorem 2.14 and proof, together
  with formulas (1.4), (1.5), and (2.6), printed pages 3--4, 7, and 10--11;
  Knapp Appendix B Section 4, Theorem B.22 and formulas (B.23)--(B.24),
  printed pages 669--671. Kirillov Theorem 3.37 is a corroborating locator;
  the completed derivation follows Müger's full analytic proof.
- Scaffold repair: replaced the circular/unproved dexp strategy with the
  completed local right-trivialized dexp supplier; removed unused smooth ODE
  parameter dependence; added the exact local-log, adjoint, formal-series,
  tube, coordinate, integration, chain-rule, and choice dependencies. The
  new dexp supplier's statement/proof provenance was corrected from
  `ai-generated` to `ai-altered`, because its formula is literature-derived
  and it is a load-bearing supplier.
- Proof: the tube lemma keeps `g(t)=exp(tX)exp(tY)` in one logarithm
  domain. For `H=log g`, right trivialization gives
  `D(ad_H)H'=X+e^(t ad_X)Y`. The representation law identifies
  `e^(ad_H)-I` with `e^(t ad_X)e^(t ad_Y)-I`; the formal
  `log(exp z)=z` identity and absolute operator convergence invert `D`.
  Uniform expansion into positive blocks and integration of `t^(N-1)`
  yields exactly every Dynkin coefficient `(-1)^(k-1)/(kN)`.
- Boundaries/choice: dimensions zero and one, singular `ad_H`, the two
  endpoints of `[0,1]`, and the arbitrary auxiliary norm are explicit.
  `AC_omega` is propagated exactly through the local-logarithm, exponential,
  and adjoint-exponential suppliers; the finitely many shrinkings add no
  choice. No biconditional occurs.
- Checks: JSON parse, explicit-path precheck, real rendercheck, strict
  selected-item proof contract, coverage checklist, and manifest-dependency
  validation all exit 0. Coverage reports 143 harvested results and the
  manifest 125 items without errors or warnings.
- Decision: `repaired`, confidence 1, with all seventeen current direct
  dependency IDs examined; item receipt SHA
  `d54f2e9396b08536d4eb16b58115fadf14fcceea84f2b09203d4be281c5bd847`.
  The refreshed non-owner `sufficient` scope receipt has SHA
  `d3c895537ac73ac990536039b940889b0b31679b814703eb1825c23d6b4a8c9d`.

- Next local item:
  `cor-the-local-lie-group-law-is-determined-by-the-lie-bracket`.

### `cor-the-local-lie-group-law-is-determined-by-the-lie-bracket`

- Authored the exact exponential-coordinate multiplication formula by applying
  the completed BCH logarithmic identity on its already-shrunk domain.
  `AC_omega` is propagated through BCH and the local logarithm; zero, one,
  singular-adjoint, and no-iff cases are explicit.
- Source locators: Müger Theorem 2.14, printed pp. 10--11; Kirillov
  Corollary 3.38, printed p. 38. Explicit precheck and rendercheck pass.
- Next:
  `cor-commuting-nearby-group-elements-have-commuting-logarithms-under-the-stated-domain-hypotheses`.

### `cor-commuting-nearby-group-elements-have-commuting-logarithms-under-the-stated-domain-hypotheses`

- Authored the full domain-controlled argument: shrink so both exponents stay
  in the local injectivity chart and `D(ad_X)` is invertible; commutation
  gives `Ad_gY=Y`, then
  `(e^(ad_X)-I)Y=D(ad_X)[X,Y]=0`. This allows singular `ad_X`.
- `AC_omega` is propagated through the exact local-log, adjoint, and dexp
  suppliers. Knapp pp. 80--81 and Kirillov pp. 37--38 were used. Explicit
  precheck and rendercheck pass. Next: `def-real-and-complex-lie-groups`.

### `def-real-and-complex-lie-groups`

- Authored the real/complex terminology, holomorphic operation requirement,
  underlying real group, and complex-bilinearity consequence from
  biholomorphic translations and the holomorphic chain rule. Zero dimension
  and all non-choice boundary clauses are explicit.
- Knapp Chapter I Section 10 and Kirillov Section 3.1 were checked. Definition
  precheck and rendercheck pass. Next:
  `fs-the-exponential-map-of-a-lie-group-is-a-group-homomorphism`.

### `fs-the-exponential-map-of-a-lie-group-is-a-group-homomorphism`

- Repaired the scaffold to a choice-free direct matrix calculation:
  `X=E12`, `Y=E23` give
  `e^(X+Y)=I+X+Y+E13/2` but
  `e^X e^Y=I+X+Y+E13`. This avoids an A-to-later-B dependency and does
  not consume BCH. Müger pp. 3--4 and Kirillov pp. 37--38 support the
  convention. Explicit precheck and rendercheck pass.
- Next: `fs-the-exponential-map-is-globally-injective-on-every-connected-lie-group`.

### `fs-the-exponential-map-is-globally-injective-on-every-connected-lie-group`

- Authored the standard connected one-dimensional witness
  `G=R/Z`: `exp_G(X)=[X]`, so zero and one have the same image.
  Quotient smoothness and connectedness are checked, with no choice use.
  Kirillov Example 3.5 was used. Explicit precheck/rendercheck pass.
- Next: `fs-the-exponential-map-is-surjective-on-every-connected-lie-group`.

### `fs-the-exponential-map-is-surjective-on-every-connected-lie-group`

- Authored the connected `GL_2^+(R)` witness
  `diag(-2,-1/2)`. Polar decomposition supplies connectedness; a
  hypothetical logarithm must commute with the diagonal matrix, hence be
  diagonal, whose real exponential has positive entries. The explicit path,
  matrix-ODE identification, and choice-free metric witness are checked.
- Gallier Theorem 3.4 was read for the precise obstruction. After canonical
  numbering, explicit precheck/rendercheck pass. Next:
  `fs-right-invariant-fields-identify-t-e-g-with-the-same-bracket-as-left-invariant-fields`.

### `fs-right-invariant-fields-identify-t-e-g-with-the-same-bracket-as-left-invariant-fields`

- Authored the concrete upper-unitriangular sign witness:
  `[E12,E23]=E13` for left invariants and `-E13` for right
  invariants. The exact `AC_omega` hypothesis of the sign supplier is
  propagated. Explicit precheck/rendercheck pass.
- Next: `fs-every-continuous-group-homomorphism-is-smooth-by-definition`.

### `fs-every-continuous-group-homomorphism-is-smooth-by-definition`

- Authored the precise refutation: smoothness is an explicit clause of the
  library definition, while automatic regularity from continuity is a separate
  theorem, not a definitional consequence. No mathematical theorem is being
  silently substituted for that distinction. Explicit precheck/rendercheck
  pass. Next:
  `fs-differential-at-the-identity-determines-a-homomorphism-from-a-disconnected-lie-group`.

### `fs-differential-at-the-identity-determines-a-homomorphism-from-a-disconnected-lie-group`

- Authored the exact zero-dimensional witness on `Z/2`: identity and
  trivial endomorphisms differ, but both identity differentials are the unique
  map `0 -> 0`. This isolates connectedness without importing the
  connected theorem or choice. Explicit precheck/rendercheck pass.
- Next B item: `ex-the-additive-and-multiplicative-real-lie-groups`.

### `ex-the-additive-and-multiplicative-real-lie-groups`

- Checked smooth operations and solved the invariant one-parameter curves,
  obtaining identity for the additive exponential and ordinary `e^x`
  for both multiplicative groups, with image in the positive component.
  `AC_omega` is propagated from the Lie exponential definition.
  Explicit precheck/rendercheck pass.
- Next: `ex-general-and-special-linear-lie-groups`.

### `ex-general-and-special-linear-lie-groups`

- Authored the open-matrix Lie group, differentiated determinant to trace,
  proved the regular-level tangent kernel for `SL_n`, and computed the
  commutator bracket from invariant matrix fields. Rank zero/one and
  `AC_omega` propagation are explicit. Canonical precheck numbering and
  rendercheck pass. Next: `ex-orthogonal-and-special-orthogonal-lie-groups`.

### `ex-orthogonal-and-special-orthogonal-lie-groups`

- Authored the surjective differential of `A -> A^T A`, its regular
  level, the skew-symmetric tangent kernel, commutator closure, and the
  determinant component defining `SO(n)`. Cases `n=0,1` and
  inherited `AC_omega` are explicit. Precheck/rendercheck pass.
- Next: `ex-unitary-and-special-unitary-lie-groups`.

### `ex-unitary-and-special-unitary-lie-groups`

- Authored the Hermitian regular-level argument for `U(n)`, the
  determinant differential for `SU(n)`, and the skew-Hermitian/
  trace-zero Lie algebras, including ranks zero and one. Exact inherited
  `AC_omega` is stated. Precheck/rendercheck pass.
- Next: `ex-the-real-symplectic-matrix-group`.

### `ex-the-real-symplectic-matrix-group`

- Authored the constant-rank calculation for `A^TJA=J`, including the
  explicit preimage `Z=J^{-1}S/2`, subgroup laws, tangent kernel, and
  commutator closure. Rank zero and choice propagation are explicit.
  Precheck/rendercheck pass. Next: `ex-the-heisenberg-lie-group-and-algebra`.

### `ex-the-heisenberg-lie-group-and-algebra`

- Authored the polynomial multiplication/inverse laws and the complete
  matrix-unit bracket table, including central `E13` and the degenerate
  two-step-nilpotent boundary. Exact choice propagation is stated.
  Precheck/rendercheck pass. Next: `ex-the-affine-group-of-the-line`.

### `ex-the-affine-group-of-the-line`

- Authored the coordinate group laws, connected `(log a,b)` chart,
  tangent matrices, and `[E11,E12]=E12` computation. The ideal and all
  choice/boundary clauses are explicit. Precheck/rendercheck pass.
- Next: `ex-the-n-torus-and-its-exponential-lattice`.

### `ex-the-n-torus-and-its-exponential-lattice`

- Authored the quotient group, the one-parameter curve `t -> [tX]`, and
  the exact kernel `Z^n`, with both the zero-dimensional and circle cases
  and the alternate unit-circle normalization stated. The inherited
  `AC_omega` assumption is explicit. Precheck/rendercheck pass after
  repairing a multiline display. Next:
  `ex-matrix-exponential-as-the-lie-group-exponential`.

### `ex-matrix-exponential-as-the-lie-group-exponential`

- Compared the Lie one-parameter subgroup with the entire matrix series by
  transposing both equations into the supplied linear-matrix ODE form. This
  proves both equality and membership in the subgroup, including rank zero and
  zero matrix cases. `AC_omega` is inherited only from the Lie exponential.
  Knapp Proposition 1.84 and Kirillov Theorem 2.29/Examples 3.3-3.4 are the
  exact locators. Precheck/rendercheck pass. Next:
  `ex-adjoint-and-ad-for-a-matrix-lie-group`.

### `ex-adjoint-and-ad-for-a-matrix-lie-group`

- Differentiated matrix conjugation to obtain `Ad_g X = gXg^{-1}`, then
  differentiated conjugation by `e^{tX}` and invoked the already proved
  `dAd=ad` identification to obtain `ad_X Y = XY-YX`. Rank-zero, zero-vector,
  endpoint and exact `AC_omega` behavior are explicit. Knapp formulas
  (1.88)-(1.92) and Kirillov Lemma 3.15 are the locators.
  Precheck/rendercheck pass. Next:
  `cex-a-real-invertible-matrix-with-no-real-logarithm`.

### `cex-a-real-invertible-matrix-with-no-real-logarithm`

- Verified `diag(-2,-1/2)` has determinant one and proved it has no real
  logarithm: a hypothetical logarithm commutes with the matrix, preserves its
  one-dimensional eigenspaces, and would exponentiate a real scalar to a
  negative number. Repaired the scaffold's connectedness gap with an explicit
  two-dimensional QR/path argument for all of `GL_2^+`. The mathematical
  obstruction is choice-free; `AC_omega` is inherited only by the library Lie
  exponential. Gallier Theorem 3.4 and Knapp's discussion after Proposition
  1.84 are the locators. Precheck/rendercheck pass. Next:
  `cex-bch-truncation-fails-when-higher-commutators-do-not-vanish`.

### `cex-bch-truncation-fails-when-higher-commutators-do-not-vanish`

- Computed every surviving bracket for `X=E12+E23`, `Y=E34` and verified
  the omitted `E14/12` cubic term. Also expanded both exponentials directly:
  the exact product has `E14` coefficient `1/2`, while the exponential of the
  quadratic truncation has `5/12`. This proves inequality without leaning on
  an injectivity shortcut. The calculations are choice-free; `AC_omega` is
  propagated from the supplied Lie exponential and BCH theorem. Müger pages
  3-4 and Knapp Appendix B pages 669-671 are the exact locators.
  Precheck/rendercheck pass. Next: construct and verify the Lie-groups A/B
  pages, then reconcile this pair's manifest, coverage, contracts and item
  decisions.

### Lie-groups pair checkpoint

- Authored both A/B pages with exact manifest inventories; both rendercheck.
- Reconciled the two owned manifest rows from each item's actual frontmatter;
  the Riemann sibling rows were preserved.
- Added item-specific proof contracts for the final 21 items and regenerated
  their exact citation excerpts and numbered-step contracts from the completed
  texts. Strict proof-contract check: 21/21, zero errors or warnings.
- Recorded current confidence-1 Step 3b decisions for all 21 final original
  items (13 accept, 8 repaired); the locally added right-differential lemma is
  correctly excluded from self-review. The previously completed first 39
  items retain their current decisions/contracts.
- Next: re-open the completed claim for the dependent Batch-8 Lie-subgroup pair,
  then author its 33 items that were deferred pending `dAd=ad` and BCH.

### `thm-fundamental-vector-fields-form-a-lie-algebra-homomorphism`

- Rechecked Lee Theorem 20.18(a), printed pages 529-530, including its
  opposite plus-exponential convention. For the library's minus convention,
  proved linearity, identified the global action flow, computed
  `(g dot)_*Y_M=(Ad_gY)_M`, and differentiated with the inverse-time Lie
  derivative to get the positive sign. Added the exact Lie-derivative and
  pushforward interfaces and deliberately did not consume the potentially
  defective published vector-field-Lie-algebra closure theorem. `AC_omega`
  is propagated through the exponential and `dAd=ad` suppliers.
  Precheck/rendercheck pass. Next: stabilizers.

### `thm-stabilizers-are-closed-embedded-lie-subgroups`

- Read Lee Theorem 21.18's closed-fibre argument and Etingof Proposition 4.12.
  Made the implicit separation step explicit: manifolds are Hausdorff, hence
  `T1`, so the orbit fibre over `x` is closed. Cartan then gives the unique
  embedded structure. The theorem inherits exactly Cartan's `AC_omega`.
  Precheck/rendercheck pass. Next: infinitesimal orbit kernel.

### `prop-kernel-of-the-infinitesimal-orbit-map-at-a-point-is-the-stabilizer-lie-algebra`

- Proved constant rank of the orbit map by equivariance, used its local normal
  form to identify the fibre tangent with `Lie(G_x)`, and accounted for the
  minus sign in `dPhi_e(X)=-X_M(x)`. Factoring through the already constructed
  quotient, with local sections proving smoothness, also constructs the
  canonical immersed orbit and identifies its tangent image. Read Etingof
  Proposition 4.12/Corollary 4.13 and Lee Theorem 21.18 in full.
  `AC_omega` is inherited through the stabilizer/quotient suppliers.
  Precheck/rendercheck pass. Next: package the orbit homogeneous-space theorem.

### `thm-every-orbit-is-an-injectively-immersed-homogeneous-space`

- Packaged the coset factor as a well-defined equivariant bijection, used the
  preceding tangent result for injective immersion, and transported the unique
  quotient structure to the orbit. The proof keeps the essential distinction
  between immersed and embedded orbits. Lee 21.18 and Etingof 4.12-4.13 were
  checked. `AC_omega` is propagated. Precheck/rendercheck pass.
- Next: repair and prove the transitive-action diffeomorphism corollary.

### `cor-transitive-smooth-actions-identify-m-with-g-mod-h`

- Repaired the scaffold's unsupported equality-of-dimensions step.  The
  homogeneous-orbit theorem gives a bijective immersion
  `G/G_x -> M`.  In positive target dimension a strictly smaller source would
  make every target point a critical value, contradicting Morse--Sard and the
  dense-complement property for null sets; dimension zero is handled
  separately.  Equal dimensions and the manifold inverse-function theorem
  then give a bijective local diffeomorphism, hence a diffeomorphism.
- Lee Theorems 7.25 and 21.18 (printed pages 165--166 and 552--553) and
  Etingof Proposition 4.12 (printed pages 30--31) were read for the complete
  quotient/orbit argument.  `AC_omega` is propagated exactly through the
  earlier orbit and quotient suppliers.  Explicit-path precheck and real
  rendercheck pass.
- Next: refute universal embeddedness of homomorphism images.

### `fs-the-image-of-a-lie-group-homomorphism-is-always-embedded`

- Used the irrational winding `i:R -> T^2`, whose canonical image carries the
  intrinsic topology of `R`.  For each `j`, leastness selects a positive
  integer `q_j` with `||q_j alpha||<1/j`; irrationality forces `q_j ->
  infinity`, while `i(q_j) -> i(0)` in the torus.  Continuity of the inverse
  required by an embedding is therefore impossible.  This supplies a witness
  and failed conclusion, and the least-integer construction uses no choice.
- Lee Example 21.3 and Theorem 21.27 (printed pages 542 and 556--557) and
  Etingof Examples 3.14(2), 4.6(1), and Proposition 4.7 (printed pages 26 and
  29) are the locators.  Explicit-path precheck (after canonical layer
  numbering) and real rendercheck pass.
- Next: refute the quotient-group claim for a closed nonnormal subgroup.

### `fs-g-mod-h-is-a-quotient-lie-group-for-every-closed-subgroup-h`

- Used the finite discrete Lie group `S_3` and the closed subgroup
  `H={e,(12)}`.  The homogeneous quotient is a zero-dimensional smooth
  manifold, but `H` is not normal because conjugation by `(123)` sends `(12)`
  to `(23)`.  If the coset map were a homomorphism, its kernel would be `H`
  and hence normal, a contradiction.  This avoids importing an unproved
  sphere-homogeneous-space identification into the refutation.
- Lee Theorem 21.26 (printed pages 555--556) and Etingof Theorem 4.1 and
  Proposition 4.7 (printed pages 28--29) are the locators.  The finite
  obstruction is choice-free; `AC_omega` is used only for the library's
  general smooth homogeneous-quotient supplier.  Explicit-path precheck and
  real rendercheck pass.
- Next: refute the plus-exponential fundamental-field convention.

### `fs-the-exp-tx-fundamental-field-convention-is-a-bracket-homomorphism-for-left-actions`

- Wrote the exact sign calculation `hat X=-X_M`, hence
  `[hat X,hat Y]=-hat([X,Y])`.  The left-translation action of the Heisenberg
  group supplies a genuine failure: `[E12,E23]=E13` and the plus field of
  `E13` is nonzero at the identity.  Thus the proof does not confuse an
  antihomomorphism formula with a counterexample in an abelian action.
- Lee Theorem 20.18(a) and its proof (printed pages 529--530) and Etingof
  Proposition 9.1 (printed page 53) are the locators.  `AC_omega` is
  propagated from the standing fundamental-field theorem; the finite matrix
  calculation is choice-free.  Explicit-path precheck and real rendercheck
  pass.
- Rechecked and restored the preceding fundamental-field theorem's direct
  action-flow proof after a provisional draft reintroduced the potentially
  defective published vector-field-closure supplier.  Its current proof uses
  pushforward equivariance, the inverse-time Lie derivative, and `dAd=ad`, as
  recorded above; precheck and rendercheck pass.
- Next: author the irrational-winding B example.

### `ex-an-irrational-line-as-a-dense-immersed-lie-subgroup-of-a-torus`

- Verified the injective immersion and dense canonical image using the local
  irrational-flow lemma; exhibited `(1,exp(pi i alpha))` outside the image;
  and reused the least-return sequence to prove the intrinsic `R` topology
  differs from the torus subspace topology.  This establishes properness,
  nonclosedness, and nonembeddedness by witnesses, not by the scaffold's
  invalid compact/noncompact shortcut.
- Lee Example 21.3 and Theorem 21.27 (printed pages 542 and 556--557) and
  Etingof Examples 3.14(2) and 4.6(1) (printed pages 26 and 29) are the
  locators.  `AC_omega` is inherited only by the general image supplier; the
  concrete calculation is choice-free.  Explicit-path precheck and real
  rendercheck pass.
- Next: the special-linear closed-subgroup example.

### `ex-special-linear-as-a-closed-lie-subgroup-of-general-linear`

- For `F=R` or `C` and `n>=1`, verified that `GL_n(F)` is the open
  determinant-nonzero matrix Lie group, determinant is a smooth homomorphism,
  and its identity fibre is closed, embedded and normal.  The Leibniz formula
  gives `d(det)_I=tr`; an explicit diagonal matrix proves surjectivity, so the
  regular-level tangent computation agrees with the kernel theorem.
- Lee's special-linear example and Theorem 21.27 (printed pages 544 and 556)
  and Etingof Examples 3.2--3.3 and Corollary 9.5 (printed pages 25--26 and
  53--54) are the locators.  `n=1` and the complex-as-real manifold convention
  are explicit.  `AC_omega` is propagated through the kernel theorem.
  Explicit-path precheck and real rendercheck pass.
- Next: determinant kernel, image, and factorization.

### `ex-the-kernel-and-image-of-the-determinant-homomorphism`

- For `n>=1`, the diagonal representatives
  `diag(a,1,...,1)` prove that real determinant has image `R^x`, and the
  positive restriction has image `R_{>0}`.  Direct algebra identifies both
  kernels with `SL_n(R)` and every fibre with a left kernel coset; the smooth
  diagonal sections make the two corestrictions explicit.
- Lee's special-linear example and Theorem 21.27 (printed pages 544 and 556)
  and Etingof Example 3.3 and Proposition 4.7 (printed pages 25 and 29) are
  the locators.  The `n=1` and excluded zero-determinant cases are explicit.
  `AC_omega` is inherited through the two Lie-homomorphism suppliers.
  Explicit-path precheck (after canonical layer numbering) and real
  rendercheck pass.
- Next: the sphere homogeneous-space example.

### `ex-spheres-as-so-n-plus-one-mod-so-n`

- Proved smoothness of the standard orthogonal action, transitivity by
  extending two unit vectors to equally oriented orthonormal bases, and the
  exact block stabilizer `diag(B,1)` with `B in SO(n)`.  The orbit theorem then
  gives `SO(n+1)/SO(n) ~= S^n`.  The `n=1` case is explicit and `n=0` is
  excluded because the corresponding action on `S^0` is not transitive.
- Lee Example 21.19(b) and Theorem 21.18 (printed pages 553 and 552--553) and
  Etingof Theorem 4.1 (printed page 28) are the locators.  Basis extensions are
  finite; `AC_omega` is inherited through the matrix-group and orbit
  suppliers.  Explicit-path precheck and real rendercheck pass.
- Next: real and complex projective homogeneous spaces.

### `ex-real-and-complex-projective-spaces-as-homogeneous-spaces`

- Verified the standard complex affine atlas, including openness,
  second-countability, Hausdorff separation by rank-one projections, and
  smooth transitions.  The real and complex matrix actions are smooth in
  affine ratios and transitive by adapted orthonormal bases.  Their exact line
  stabilizers are `S(O(1)xO(n))` and `U(1)xU(n)`.
- Lee Examples 1.5 and 1.33, Problem 21-10, and Theorem 21.18 (printed pages
  6--7, 21, 562, and 552--553) are the locators.  `n=1`, nonzero scalar
  representatives, and finite basis choices are explicit.  `AC_omega` is
  inherited through the matrix-group and orbit suppliers.  Explicit-path
  precheck (after canonical layer numbering) and real rendercheck pass.
- Next: Grassmannian and flag homogeneous spaces.
### `ex-grassmannians-and-flag-manifolds-as-homogeneous-spaces`

- Claim/conventions: for real and complex scalars, the natural actions identify
  the $k$-plane Grassmannians with
  $O(n)/(O(k)\times O(n-k))$ and
  $U(n)/(U(k)\times U(n-k))$, and identify a partial flag manifold with the
  quotient by the product of the corresponding orthogonal or unitary block
  groups.
- Source locators read: Lee, *Introduction to Smooth Manifolds*, Example 1.36,
  printed pages 22--24, and Examples 21.21--21.22, printed pages 554--555;
  Etingof, MIT 18.745 notes, Example 4.17(3), printed pages 31--32.
- Dependencies read: the standard Grassmann graph-chart lemma, the orthogonal
  and unitary Lie-group examples, finite-dimensional orthogonal decomposition
  and orthonormal-basis suppliers, the closed-subgroup quotient theorem, and
  the transitive-action quotient corollary.
- Proof: graph-coordinate changes establish smoothness of the actions; adapted
  orthonormal bases establish transitivity; preserving the successive
  orthogonal blocks computes the stabilizers and their closedness; the quotient
  theorem supplies the displayed diffeomorphisms.
- Choice/boundaries: all basis choices made in this proof are finite. The item
  explicitly propagates the $\mathrm{AC}_\omega$ assumed by its existing
  smooth-group and quotient suppliers. It treats $k=0$ and $k=n$ as point
  quotients and records that the displayed flag convention deliberately has
  strictly positive block dimensions.
- Checks: explicit-path precheck and rendercheck both exit 0 after canonical
  verification-layer numbering was restored.
- Decision: ready to be recorded after the batch-level manifest and contract
  synchronization.
- Next item: `ex-su-two-to-so-three-as-a-covering-homomorphism`.

### ex-su-two-to-so-three-as-a-covering-homomorphism

- Claim/conventions: under the unit-quaternion identification of $SU(2)$,
  conjugation on $\operatorname{Im}\mathbb H$ is a surjective two-sheeted
  covering homomorphism onto $SO(3)$ with kernel $\{1,-1\}$.
- Source locators read: Etingof, Exercise 3.9 and both parts, printed page 26,
  and Proposition 6.7 with proof, printed page 40; Knapp, Introduction,
  Problems 6--9, printed pages 20--21.
- Dependencies read: the quaternion definition and division-ring theorem,
  regular-level and closed-subgroup theorems, the manifold inverse-function
  theorem, determinant and transpose definitions, the unit-circle
  parametrization, and the covering-homomorphism definition.
- Proof: an explicit matrix map identifies unit quaternions with $SU(2)$;
  direct multiplication gives Rodrigues' conjugation formula; a determinant
  identity gives a fixed axis for every $R\in SO(3)$ and the planar rotation
  supplies a quaternion preimage; commutation with $i,j,k$ computes the
  kernel. The differential $r\mapsto(v\mapsto2r\times v)$ is an isomorphism,
  and an inverse-function neighborhood together with the exact kernel yields
  two explicit sheets, which translate over every target point.
- Choice/boundaries: the axis and adapted planar basis are finite choices.
  $\mathrm{AC}_\omega$ is assumed exactly because the current Cartan
  closed-subgroup supplier uses it to construct the embedded Lie-group
  structure on $SO(3)$. Both groups are nonempty and three-dimensional, and
  the two fibres are proved rather than inferred from cardinality.
- Checks: explicit-path precheck and real rendercheck both exit 0 after
  adopting the canonical prerequisite-layer numbering.
- Decision: ready to be recorded after batch-level manifest and contract
  synchronization.
- Next item: ex-the-mobius-line-bundle-as-an-associated-bundle.

### ex-the-mobius-line-bundle-as-an-associated-bundle

- Claim/conventions: the square map $p:S^1\to S^1$ with right
  $\{\pm1\}$-action, associated through the sign representation on
  $\mathbb R$, gives the Möbius real line bundle.
- Source locators read: Lee, Example 10.3 in full, printed pages 251--252,
  including the quotient model and local trivializations; Problem 21-9,
  printed pages 560--561, for the quotient-action formulation.
- Dependencies read: the generic principal-bundle definition, the associated
  quotient and its right/left action convention, and the completed
  associated-vector-bundle theorem.
- Proof: two explicit smooth square-root sections on the punctured-circle
  cover produce equivariant principal charts. The convention
  $[ph,v]=[p,\rho(h)v]$ gives $(z,t)\sim(-z,-t)$; the two section coordinates
  have transition $+1$ on the upper overlap and $-1$ on the lower overlap.
  The fundamental domain $z=e^{\pi ix}$ then gives precisely
  $(0,t)\sim(1,-t)$.
- Choice/boundaries: the structure group is the discrete zero-dimensional
  two-point group, the zero vector is fixed by the relation, and the finite
  two-chart construction uses no choice principle.
- Checks: explicit-path precheck and real rendercheck both exit 0.
- Decision: ready to be recorded after batch-level manifest and contract
  synchronization.
- Next item: ex-the-tangent-bundle-of-g-mod-h-as-an-associated-bundle.

### ex-the-tangent-bundle-of-g-mod-h-as-an-associated-bundle

- Claim/conventions: for a closed subgroup $H\le G$, using the right principal
  bundle $G\to G/H$ and the left $H$-representation
  $X+\mathfrak h\mapsto\operatorname{Ad}_hX+\mathfrak h$, there is a canonical
  bundle isomorphism
  $G\times_H(\mathfrak g/\mathfrak h)\cong T(G/H)$.
- Source locators read: Etingof, Theorem 4.1 and its full local-product/tangent
  proof, printed page 28, plus the isotropy action in Section 9.1, printed
  page 53; Lee, Homogeneous Space Construction and Characterization Theorems
  21.17--21.18 with proofs, printed pages 551--553.
- Dependencies read: the associated-quotient convention and smooth
  associated-vector-bundle theorem, the homogeneous principal-bundle theorem,
  the quotient tangent-space proposition, and the isotropy-as-adjoint
  proposition.
- Proof: the map sends $[g,X+\mathfrak h]$ to the left translate by $g$ of
  $\overline{dq_e}(X+\mathfrak h)$. The isotropy identity verifies the exact
  relation $[gh,v]=[g,\operatorname{Ad}_h v]$. Fibrewise it is a composite of
  linear isomorphisms; in a principal section its displayed coordinate map and
  inverse are both smooth.
- Choice/boundaries: $\mathrm{AC}_\omega$ is inherited through the homogeneous
  quotient/principal and tangent suppliers. The proof adds no family choice.
  It treats $H=G$ as the zero bundle over a point, $H=\{e\}$ as the standard
  left trivialization, and expressly does not assume normality.
- Checks: explicit-path precheck, real rendercheck, and a focused dependency
  scan all exit clean for this item.
- Decision: ready to be recorded after batch-level manifest and contract
  synchronization.
- Next action: reconcile all Batch 8 item frontmatter into the shared manifest
  while preserving the sibling pair, register the two local A suppliers, then
  build contracts, decisions, pages, and run the batch gates.

### `thm-first-bianchi-identity` repair

- Confirmed the owner-direction defect: the proof cited the published
  `thm-vector-fields-form-a-lie-algebra`, whose construction of vector fields
  from derivations reaches the published countable-choice defect while this
  statement had not declared that assumption.
- Replaced that use locally.  In coordinates the commutator formula has smooth
  coefficients, and direct expansion of the operator commutators proves
  Jacobi; the curvature cyclic sum then vanishes by torsion freeness.  Direct
  dependencies are now the curvature and Levi-Civita definitions, the bracket
  definition, and the coordinate smoothness criterion.  No choice principle is
  used.
- Explicit-path precheck and real rendercheck pass after canonical layer
  numbering.  Manifest and proof-contract synchronization remain batch-level
  work.
- Next repair: remove the B-example dependency from the fundamental-field
  convention false statement.

### `fs-the-exp-tx-fundamental-field-convention-is-a-bracket-homomorphism-for-left-actions` repair

- Removed the forward A-to-B dependency on
  `ex-the-heisenberg-lie-group-and-algebra`.
- The counterexample is now local: the open matrix Lie group
  $\operatorname{GL}_2(\mathbb R)$ acts on itself, and
  $[E_{12},E_{21}]=E_{11}-E_{22}\ne0$.  At the identity its plus-sign
  fundamental field is nonzero, so the previously proved sign computation
  contradicts the claimed homomorphism identity.  The new direct suppliers are
  the Lie-group, determinant, and matrix-unit definitions; all are A-level.
- $\mathrm{AC}_\omega$ remains declared exactly through the general
  fundamental-field homomorphism supplier.  The finite matrix witness adds no
  choice.  Explicit-path precheck and rendercheck pass.
- Next repair: construct the Riemannian product metric locally on its A item.

### `ex-curvature-of-a-riemannian-product` repair

- Removed the forward dependency on the B example
  `ex-the-product-riemannian-metric`.
- Constructed the product metric in the first proof step from the canonical
  tangent splitting, proved its block coefficients smooth and its quadratic
  form positive definite, and invoked the coordinate metric criterion.  The
  remaining Christoffel, curvature, and mixed-sectional-curvature calculations
  now consume this local construction.
- Added direct A-level dependencies on the product smooth structure and the
  coordinate metric criterion.  Empty and zero-dimensional factors and the
  mixed-plane Gram denominator remain explicit.  The construction is
  choice-free.  Explicit-path precheck and rendercheck pass.
- Next repair: prove the great sphere totally geodesic without consuming the
  B great-circle example.

### `ex-a-great-sphere-is-totally-geodesic` repair

- Removed the forward dependency on
  `ex-great-circles-as-round-sphere-geodesics`; the proof no longer routes
  through a geodesic classification.
- The norm-square regular-level calculation gives the tangent spaces.  The
  fixed vectors $e_{k+2},\ldots,e_{n+1}$ form a finite global normal frame for
  $S^k\subset S^n$.  Their Euclidean derivatives vanish, so the induced
  sphere connection makes all corresponding shape operators zero; Weingarten
  then pairs $\mathrm{II}$ to zero against a basis of the normal space.
- The $k=0$ zero tangent-rank case and $k=n$ zero normal-rank case are explicit.
  $\mathrm{AC}_\omega$ remains declared through the regular-level and
  submanifold projection interfaces; the finite frame adds no choice.
  Explicit-path precheck and rendercheck pass after canonical layering.
- Next repair: remove the unrelated great-circle example from the mean-curvature
  remark.

### `rem-mean-curvature-and-minimal-submanifolds` repair

- Removed the unused forward dependency on the B great-circle example.
- Made the Clifford-torus derivative calculation's actual suppliers explicit:
  Euclidean covariant differentiation followed by tangential projection to the
  round sphere.  Added the direct countable-choice definition because the
  remark states and propagates $\mathrm{AC}_\omega$ through its submanifold
  interfaces.
- The Clifford-torus and latitude witnesses remain finite calculations.  Real
  rendercheck passes; this remark has no phase-format proof body for precheck.
- Next repair: ground the tautological one-form in the A-level canonical
  cotangent-bundle construction.

### `def-tautological-one-form-on-a-cotangent-bundle` repair

- Removed the forward dependency on the B tangent/cotangent vector-bundle
  example and now use the A-level canonical smooth cotangent-manifold theorem.
- Added the local calculation
  $\lambda=\sum_i p_i\,dq^i$, which proves that the pointwise evaluation
  formula defines a smooth one-form, and registered the exterior-derivative
  theorem used to define $\omega_{\mathrm{can}}=-d\lambda$.
- The $n=0$ and empty cases are explicit.  $\mathrm{AC}_\omega$ is used only
  through the cotangent-manifold construction; the evaluation formula adds no
  choice.  Real rendercheck passes after putting the displayed coordinate
  identity on one source line.
- Next repairs: the three owner-listed notation defects.

### `thm-contracted-second-bianchi-identity` notation repair

- Replaced the stray literal comma in
  $\operatorname{div}\operatorname{Ric}=\frac12\,dS$ with the intended TeX
  thin space.  The formula now agrees with the contracted identity used in the
  proof.  Explicit-path precheck and rendercheck pass.
- Next repair: restore the missing multiplication between the two principal
  curvatures.

### `prop-euclidean-hypersurface-sectional-curvature-from-principal-curvatures` notation repair

- Replaced the raw text `kappa_ikappa_j` in the Gauss-equation substitution
  with the intended $\kappa_i\kappa_j$.  The explanatory sentence now matches
  the displayed conclusion.  Explicit-path precheck and rendercheck pass.
- Next repair: restore the determinant notation in Theorema Egregium.

### `thm-gausss-theorema-egregium` notation repair

- Replaced both raw `det` occurrences in the normal-sign calculation with
  $\det$.  The line now consistently states
  $\det(-S_\nu)=(-1)^2\det S_\nu=\det S_\nu$.  Explicit-path precheck and
  rendercheck pass.
- Next action: re-run the owned A-to-B dependency scan, then inspect PBW's
  regular-representation linear-independence argument and its source passage.

### `lem-pbw-linear-independence-by-the-regular-representation-on-the-symmetric-algebra`
and `thm-poincare-birkhoff-witt` recheck

- Read Etingof, Theorems 13.1–13.2 and the complete proof of Lemma 13.11,
  printed pages 74–77, including all three adjacent-transposition relations
  and the Jacobi critical case.  Also read Kirillov, Theorems 5.11–5.12 and
  the regular-representation outline, printed pages 74–75.
- Verified the local proof independently.  The rewrite
  $yx\rightsquigarrow xy+[y,x]$ terminates by the lexicographic
  (length, inversion-number) measure.  Disjoint ambiguities commute; the sole
  three-letter overlap has difference equal, after lower-length normalization,
  to the displayed Jacobi sum.  Well-founded induction therefore gives a
  unique normal form.  Left normalized multiplication then satisfies
  $[L_x,L_y]=L_{[x,y]}$, so the enveloping universal property supplies the
  action whose evaluation on the empty word detects every ordered-monomial
  coefficient.
- Removed the unused spanning dependency from the independence lemma and added
  the directly used linear-basis supplier for finite bracket expansions.
  Repaired both source records to store exact locators in `locator` fields.
  The PBW theorem then follows degreewise from its separately proved spanning
  and independence lemmas.
- Empty basis and empty product are explicit; the basis and total order are
  supplied, so no choice principle is invoked.  Explicit-path prechecks and
  renderchecks pass for both items.
- Next action: synchronize all current owned frontmatter into Batches 7, 8,
  and 10, then build or refresh proof contracts from the finished arguments.

### `thm-quotient-manifold-by-a-closed-lie-subgroup` contract-driven repair

- Split the original four-input first proof step into the finite-dimensional
  complement construction and the exponential product-chart construction, so
  each step now exposes its actual inputs rather than citing a fact bundle.
- Added the direct A-level supplier
  `thm-constant-rank-theorem-for-manifolds`.  Its local projection normal form
  supplies smooth local sections of every submersion, which is the precise
  fact used in the uniqueness argument; the earlier proof had invoked this
  result without declaring it.
- Renumbered all consumers in prerequisite order.  The constructed quotient
  is locally a projection before the smooth action and uniqueness arguments
  use local sections.  Countable choice remains confined to Cartan's closed
  subgroup theorem and the exponential-map supplier; the linear complement,
  inverse/constant-rank theorems, and topology facts add no choice.
- Explicit-path precheck and rendercheck pass.  Next action: resynchronize the
  Batch 8 manifest, rebuild the Batch 8/10 contract shells from the final
  authored proofs, and run strict contract validation.

### Biconditional-contract repairs

- `cor-discrete-subgroups-of-lie-groups-are-closed-embedded-zero-dimensional-subgroups`:
  removed `lem-no-small-subgroups-in-a-lie-group`, which the proof itself
  correctly identified as unused.  Discreteness directly supplies an identity
  neighborhood meeting the subgroup only at the identity; steps 1.1--3.1 prove
  the forward implication and step 4.1 proves the reverse.  Countable choice
  is used only by the closed-subgroup theorem.  Explicit-path precheck and
  rendercheck pass.
- `thm-poincare-birkhoff-witt`: the existing proof established the ordered PBW
  basis and derived the graded symbol isomorphism, but the word
  “Equivalently” also promises the reverse implication.  Added a filtered
  induction proving that a graded symbol isomorphism makes ordered monomials
  span, and a largest-degree argument proving their independence.  The
  degree-zero/empty-product case is explicit and no choice is introduced.
  Explicit-path precheck and rendercheck pass after canonical layering.
- `cex-poisson-commuting-functions-with-dependent-differentials-do-not-give-liouville-arnold-coordinates`:
  replaced a merely expository “Equivalently” with the direct Hamiltonian-field
  calculation, so its contract no longer invents two implication obligations
  unrelated to the counterexample's refuted claim.  Explicit-path precheck and
  rendercheck pass.
- Batch 7 strict contracts pass for all 125 items; Batch 8 and Batch 10 strict
  contracts passed for all 127 and 122 items before these final three text
  repairs.  Next action: resynchronize and regenerate their affected contract
  entries, then replace the generated biconditional summaries with exact
  direction-specific evidence.

### Whole-scope dependency repair and contract closure

- Global `depcheck` exposed two remaining A-to-B dependencies:
  `ex-a-great-sphere-is-totally-geodesic` and
  `rem-mean-curvature-and-minimal-submanifolds` still cited the published B
  example `ex-the-euclidean-levi-civita-connection`.  Replaced it in both
  items with the A-level suppliers
  `prop-christoffel-formula-for-the-levi-civita-connection` and
  `prop-connection-laws-in-directional-form`.  Both texts now explicitly use
  the constant Cartesian metric matrix to obtain zero Christoffel symbols and
  ordinary component differentiation before applying the induced-connection
  theorem.  The great-sphere precheck passes and both items render; `depcheck`
  now ends `OK — no cycles, all references resolve, no draft items on published
  pages.`
- Rebuilt Batch 8 and 10 contracts from the final proofs, regenerated exact
  fact citations and step inputs, and manually replaced generated biconditional
  summaries with direction-specific evidence for the Lie-subgroup
  correspondence, discrete-subgroup criterion, representation/module
  equivalences, PBW, the Lagrangian criteria, Hamiltonian equivalences, and
  Legendre trajectory equivalence.  Corrected the Batch 7 conjugation
  definition's determinant biconditional and all ten boundary-audit false
  alarms with exact item evidence.
- Strict proof contracts now pass with zero errors and zero warnings for all
  125 Batch 7, 127 Batch 8, and 122 Batch 10 items.  `boundary-audit
  --fail-on-contradicted` reports no contradicted dispositions; its remaining
  output is advisory template clustering.
- Whole-manifest explicit-path precheck passes for every proof-bearing item
  (93/93, 97/97, 97/97), and real rendercheck passes for every item
  (125/125, 127/127, 122/122) and all twelve A/B page files.
- Next action: run coverage, content-policy, manifest-integrity, page-manifest,
  and plan gates, then update the owned frontier-dependency rows and record
  post-author item decisions.

### Final notation and exact-contract reconciliation

- Replaced the inversion map's ambiguous `\iota` notation by
  `\operatorname{inv}` in `def-lie-group` and
  `prop-right-invariant-fields-carry-the-opposite-lie-bracket`, and by
  `\widetilde{\operatorname{inv}}` in
  `thm-a-connected-covering-space-of-a-connected-lie-group-carries-a-unique-lifted-lie-group-structure`.
  The covering theorem now uses only the based lifting criterion, loop-product
  lemma, and uniqueness of lifts; unused product-cover, homotopy-lifting, and
  fundamental-group-abelianity suppliers were removed.
- Replaced the unqualified canonical enveloping-algebra map by
  `\iota_{\mathfrak g}` throughout the assigned enveloping/PBW subsystem.  This
  distinguishes it from the library's canonical natural-number map without
  changing any statement.  All 17 proof-bearing affected items pass
  explicit-path precheck, and all 22 affected files render.
- Refreshed only the affected contract boundary evidence from the completed
  proofs.  In particular, external citation text involving the unrelated
  natural-number map was preserved verbatim, the connected-cover evidence no
  longer refers to removed facts, and the PBW forward/reverse evidence remains
  direction-specific.
- Final strict proof-contract checks pass with zero errors and warnings for
  Batch 7 (125/125), Batch 8 (127/127), and Batch 10 (122/122).  Final applied
  content-policy checks also pass with zero errors and warnings for all three
  batches.
- Next action: run the composite author checks and remaining whole-run
  reconciliation gates before recording decisions.

### `def-adjoint-representation-of-a-lie-algebra` ordering repair

- The refreshed frontier ledger exposed a Batch 7 consumer dependency on the
  later Batch 8 definition `def-representation-of-a-lie-algebra`.  This was a
  real prerequisite-order defect in the scaffold, not merely a ledger issue.
- Removed that dependency and supplied the exact finite-dimensional meaning
  locally: a representation is a linear bracket-preserving map into the
  commutator Lie algebra of endomorphisms.  The displayed Jacobi calculation
  already proves that `ad` has this property.  The later arbitrary-dimensional
  definition is now a compatible forward orientation link, not a proof input.
- The zero and one-dimensional cases, absence of faithfulness, and lack of any
  choice use remain unchanged.  Next action: resynchronize Batch 7, re-run its
  author receipt, and then review every newly derived cross-batch edge.

### `thm-cartans-closed-subgroup-theorem` dependency repair

- While rechecking the derived Batch 8 interfaces, confirmed that
  `lem-no-small-subgroups-in-a-lie-group` was an unused alternative rather than
  an input to the completed exponential-slice proof.  Removed it from the
  frontmatter and removed the sentence that attempted to retain an unused
  manifest dependency.
- The actual proof inputs remain the local exponential diffeomorphism, local
  BCH formula with convergence control, integer exponential powers, a finite
  linear complement, inverse-function and compactness facts, and countable
  choice for the explicit sequence selection.  No statement or proof claim
  changed.
- Next action: synchronize Batch 8 and re-run its item and batch checks before
  finalizing the cross-batch review input.

### Cross-batch dependency closure

- Recomputed the run-wide dependency ledger from current manifests and item
  frontmatter, then read each newly exposed consumer use and supplier
  statement.  Batch 7 and Batch 10 have no current same-run cross-batch input;
  Batch 8 has 38 declared interfaces into Batches 1 and 7, plus one historical
  edge correctly retained with status `removed`.
- Added exact `verified` evidence for the 15 interfaces introduced by the final
  proofs and dependency repairs, refreshed both page-level Batch 8 → Batch 7
  reviews against the completed supplier page, and changed the obsolete
  subgroup-correspondence/exponential-naturality row from `verified` to
  `removed` because the current proof no longer declares or uses it.
- Removed the only backward Batch 7 → Batch 8 declaration by locally defining
  the finite-dimensional representation terminology in the Batch 7 adjoint
  item.  The recomputed ledger now has zero owned backward edges, zero owned
  open or unreviewed edges, zero orphaned reviews, and all twelve run batches
  reviewed.  `frontier-dependency-ledger ... --require-reviewed` exits 0.
- The Cartan dependency repair passes item precheck, rendercheck, and strict
  selected-contract validation; refreshed Batch 7 and Batch 8 composite author
  receipts both pass after their respective repairs.
- Next action: run the remaining run-wide manifest, coverage, dependency, and
  plan gates, then record eligible post-author decisions.

### Post-author item decisions

- Reconciled the current inventory against the immutable pre-author auditor
  baseline before recording any decision.  The owned scope contains 374 items:
  370 baseline items and exactly four suppliers created and fully authored by
  this auditor.  The four created suppliers are
  `def-finite-dimensional-vector-valued-forms-and-their-exterior-derivative`,
  `lem-right-trivialized-differential-of-the-lie-group-exponential`,
  `lem-connected-covers-of-smooth-manifolds-have-a-canonical-smooth-structure`,
  and `lem-irrational-torus-flow-is-free-with-dense-orbits`.
- Recorded current confidence-1 decisions for all 369 open baseline items, one
  at a time in their manifest order, with the current declared dependency IDs,
  exact contract counts, the applicable composite author-check fingerprint,
  and the durable repair checkpoint in every receipt.  Preserved the one
  already-current baseline decision instead of rewriting it.  The resulting
  baseline totals are 189 `accept` and 181 `repaired`; no item is escalated.
- Current owned closure is therefore 370/374.  The only four entries without a
  Step 3 item decision are the four auditor-created suppliers above.  This is
  intentional: the dispatch explicitly forbids putting those additions through
  Step 3 self-review, and the build driver must issue their auditor-authored
  certifications after this successful dispatch.
- Next action: re-run the final composite and run-wide gates against these exact
  receipts, then add the terminal handoff summary and outstanding serial-driver
  obligations.

## Late owner-direction closure and terminal handoff

This section supersedes the earlier terminal counts where they differ.  It
supplements, rather than replaces, the item checkpoints above: the exact claim,
conventions, external source locators, and source passages recorded there did
not change.  The late work changed library-interface accounting and two exact
proof dependencies, so no new external citation was used as a substitute for a
proof.

### Two focused supplier repairs

- `thm-differential-second-bianchi-identity`: the claim and sign convention are
  unchanged.  Step 1.1 replaces each bracket by
  $[A,B]=\nabla_A B-\nabla_B A$; `def-levi-civita-connection` is now a direct
  dependency and [F4] is cited at that replacement.  The external checks remain
  Merry, Theorem 36.21; Datar, Proposition 11.3.3, printed pages 76--77; and
  Lee, Proposition 7.5, complete proof on printed pages 123--124.  Decision:
  `repaired`, confidence 1; manifest, exact contract, precheck, rendering and
  Batch 7 author check pass; no open gap, then work moved to the First-Bianchi
  chain.
- `thm-kernel-of-a-lie-group-homomorphism-is-a-closed-embedded-normal-lie-subgroup`:
  the claim remains that, under `AC_omega`, the kernel is closed, embedded and
  normal with Lie algebra `ker(dF_e)`.  The unused and inapplicable regular-level
  supplier was removed; the proof now declares only constant rank, Cartan's
  closed-subgroup theorem, countable choice and the manifold constant-rank
  theorem.  The source locators remain Lee, Theorem 21.27 and proof, printed
  page 556, and Etingof, Corollary 9.5 and proof, printed pages 53--54.
  Decision: `repaired`, confidence 1; manifest, exact contract, precheck,
  rendering and Batch 8 author check pass; no open gap.

### Batch 7 choice-interface checkpoints, in prerequisite order

Every row below now has a direct `def-countable-choice` dependency and states
`AC_omega`.  For proof-bearing rows, [A1] is cited at the first load-bearing
step.  The listed supplier is the exact conditional interface actually used;
the remaining displayed algebra is finite or local.  Each row was recorded
`repaired` at confidence 1 after its manifest and exact contract were
synchronized; its item precheck, rendercheck, strict contract and Batch 7
author check pass, with no open gap before proceeding to the next row.

| Item | Conditional supplier(s) and first exact use |
|---|---|
| `thm-first-bianchi-identity` | coordinate-component smoothness at step 1.1; Jacobi is derived locally rather than imported |
| `thm-algebraic-symmetries-of-the-riemann-tensor` | First Bianchi at step 1.1 |
| `def-sectional-curvature` | algebraic Riemann symmetries in the definition boundary |
| `lem-sectional-curvature-is-independent-of-the-basis-of-the-plane` | sectional-curvature definition and algebraic symmetries at step 1.1 |
| `thm-sectional-curvatures-determine-the-riemann-tensor` | basis independence and algebraic symmetries at step 1.1 |
| `def-constant-sectional-curvature-and-space-form` | sectional-curvature definition in the definition boundary |
| `prop-curvature-tensor-of-constant-sectional-curvature` | constant-curvature definition and determination theorem at step 1.1 |
| `lem-ricci-curvature-is-symmetric-and-basis-independent` | algebraic Riemann symmetries at step 2.1 |
| `def-scalar-curvature` | symmetric/basis-independent Ricci supplier in the definition boundary |
| `prop-scalar-curvature-is-twice-the-sum-of-sectional-curvatures-of-coordinate-planes` | scalar curvature, sectional curvature and algebraic symmetries at step 1.1 |
| `def-kulkarni-nomizu-product-trace-free-ricci-and-weyl-curvature` | scalar curvature in the definition boundary |
| `prop-ricci-decomposition-of-the-riemann-tensor-in-dimension-at-least-three` | Kulkarni--Nomizu/Weyl definition, algebraic symmetries and scalar curvature at step 1.1 |
| `thm-contracted-second-bianchi-identity` | scalar curvature, Ricci symmetry and algebraic symmetries at step 1.1 |
| `thm-schurs-lemma-for-pointwise-constant-sectional-curvature` | sectional determination/definition, Ricci/scalar curvature and contracted Bianchi at step 1.1 |
| `prop-euclidean-hypersurface-sectional-curvature-from-principal-curvatures` | sectional-curvature definition at step 2.1 |
| `thm-gausss-theorema-egregium` | sectional-curvature definition at step 2.1 |
| `fs-christoffel-symbols-vanishing-at-one-point-implies-curvature-vanishes-there` | Euclidean hypersurface formula and sectional curvature at step 2.1 |
| `fs-sectional-curvature-depends-on-an-ordered-basis-of-the-plane` | basis-independence lemma at step 1.1 |
| `fs-ricci-curvature-and-scalar-curvature-determine-the-full-riemann-tensor-in-every-dimension` | Ricci decomposition, algebraic symmetries and scalar curvature at step 1.1 |
| `fs-the-second-fundamental-form-is-intrinsic-to-the-abstract-riemannian-manifold` | induced connection/second fundamental form at step 2.1; the unused Theorema Egregium corroboration edge was removed |
| `ex-the-round-sphere-has-positive-constant-sectional-curvature` | sectional-curvature definition at step 3.1 |
| `ex-hyperbolic-space-has-negative-constant-sectional-curvature` | sectional-curvature definition at step 4.1 |
| `ex-curvature-of-a-riemannian-product` | sectional-curvature definition at step 4.1 |
| `ex-gaussian-curvature-of-a-surface-of-revolution` | sectional-curvature definition at step 4.1 |
| `ex-the-cylinder-has-zero-gaussian-curvature-but-nonzero-second-fundamental-form` | Euclidean hypersurface curvature formula at step 3.1 |
| `cex-zero-scalar-curvature-does-not-imply-flatness` | the positive/negative model examples, product formula and scalar-curvature sum at step 1.1 |

The strict boundary re-read also replaced three heuristic `not_applicable`
empty-case rows by item-specific checked evidence: `(r,0,0)` witnesses the
cylinder's nonemptiness; the basis-independence lemma is given two actual bases
of a supplied plane; and alternating curvature tensors vanish when the family
of two-planes is empty in dimensions zero or one.  This changes no item claim.

### Batch 10 compact-flow checkpoints, in prerequisite order

The compact-flow chain spends `AC_omega` through the published compact-
completeness interface.  Each genuine consumer below now has a direct
`def-countable-choice` dependency, a statement-level premise, [A1], and the
first-use citation shown.  Each decision is `repaired`, confidence 1; the item,
manifest and contract agree, and precheck, rendering, strict contract and the
Batch 10 author check pass with no open gap.

| Item | Conditional supplier(s) and first exact use |
|---|---|
| `lem-stabilizer-of-the-r-n-action-on-a-compact-connected-regular-fibre-is-a-full-lattice` | compact vector-field completeness at step 1.1 |
| `thm-compact-connected-regular-fibres-are-tori` | full-lattice lemma at step 1.1 |
| `thm-liouville-arnold-action-angle-theorem` | compact-fibre torus theorem and direct compact completeness at step 1.1 |
| `prop-period-lattice-monodromy-obstructs-global-action-angle-coordinates` | Liouville--Arnold theorem at step 1.1 |
| `fs-liouville-arnold-gives-global-action-angle-coordinates-on-the-entire-manifold` | Liouville--Arnold and monodromy obstruction at step 2.1 |
| `ex-spherical-pendulum-monodromy-obstructs-global-action-angle-coordinates` | monodromy obstruction at step 2.1 |

Two provisional fanout edges were not load-bearing and were removed rather
than spreading an artificial hypothesis.  In
`cor-motion-of-a-completely-integrable-hamiltonian-is-linear-on-invariant-tori`,
step 1.1 computes the vector field directly from supplied action-angle
coordinates and `H=h(I)`.  In
`ex-action-angle-coordinates-for-the-harmonic-oscillator`, steps 1.1--2.1
compute the coordinate change and normalization directly.  Their source
locators remain Meinrenken, Theorem 6.21, page 75, and Cannas da Silva,
Lecture 18, pages 110--111.  Both decisions remain `repaired` for their sign
and normalization work, but both proofs are choice-free and no longer depend
on Liouville--Arnold.

### Scope-decline and dependency records

- Refreshed only group `a`'s scope-decline file.  All 24 current deferred or
  out-of-scope source rows were reread against the completed inventories and
  dependency closures and recorded `stands` with item-specific evidence;
  `scope-decisions ... --group a` reports 24 current declines and zero errors.
  No row uses an invented owner decision.
- Batch 7 and Batch 10 have no same-run cross-batch edges.  Batch 8 has 38
  verified interfaces into Batches 1 and 7 plus one accurately retained
  `removed` historical row.  The derived ledger has all 12 batches reviewed,
  no unreviewed batch, no orphaned review and no backward owned edge;
  `frontier-dependency-ledger ... --require-reviewed` exits 0.
- No plan amendment is requested from Step 4 for these pairs.  The late
  dependency changes are published or same-page edges, so the containing
  batch input rows required no further change.

### Final checks actually run

- Composite explicit-scope author checks pass: Batch 7 has 93/93 proof-bearing
  prechecks, 129/129 item/page renders, content policy 125/125 and strict
  contracts 125/125, fingerprint
  `ce0d6b7d6bacf54e0f67a5b1495807790c70ccd43a48f2d961d8fb053394f6cc`;
  Batch 8 has 97/97, 131/131, 127/127 and 127/127, fingerprint
  `6096fcc93a06219e63c2e09435449829a865eaf1ad20d4487b182ec820e94135`;
  Batch 10 has 97/97, 126/126, 122/122 and 122/122, fingerprint
  `7ded7aa47f9905d2849df2a424c19a7def331ad9210ab413b0d30848e1a561f3`.
- Coverage passes for all six A pages: 358 harvested source results, zero
  errors and warnings.  `manifest-deps` checks all 765 run items with zero
  missing arrays or errors.  `manifest-integrity` finds all 42 owed pages and
  no scope drift.  The full twelve-batch `audit-manifest` resolves 3,163
  declared relationships over all 765 items with zero defects.
- `boundary-audit --fail-on-contradicted` checks 2,992 rows, with 988
  item-specific `not_applicable` dispositions and no detector contradiction.
  Its template-clustering report remains advisory.
- `validate-plan research/plan-spec.json` exits 0: declared page order is
  acyclic and consistent, with no item cycle, forward reference, B-page
  dependency or unresolved ID among the 1,056 pages that currently have item
  lists.  Its note that 563 future planned pages still have no item list is an
  expected advisory, not a hidden dependency.

### Terminal decisions and open obligations

- Owned inventory is 374 items: all 370 immutable-baseline items have current
  confidence-1 decisions (181 `accept`, 189 `repaired`, zero `escalate`), and
  all six scope receipts are current.  The four post-baseline suppliers listed
  below intentionally have no Step 3 self-review receipt, exactly as required:
  `def-finite-dimensional-vector-valued-forms-and-their-exterior-derivative`,
  `lem-right-trivialized-differential-of-the-lie-group-exponential`,
  `lem-connected-covers-of-smooth-manifolds-have-a-canonical-smooth-structure`,
  and `lem-irrational-torus-flow-is-free-with-dense-orbits`.  The build driver
  must certify these additions after this successful dispatch.
- The run-wide final decision gate currently reports 755/765 item decisions
  and ten open item records; the separate scope phase is now closed for all 21
  pairs.  Four open items are the intentional additions above.  The six sibling
  post-baseline additions are:
  `lem-unit-interval-circle-is-a-nonempty-compact-metric-space`,
  `lem-real-and-complex-c-zero-are-banach`,
  `def-orientation-local-system-on-a-manifold-with-boundary`,
  `lem-canonical-twisted-fundamental-classes-over-compact-subsets`,
  `lem-finite-join-models-for-circle-and-two-point-groups`, and
  `lem-integral-mackey-and-higman-for-og-lattices`.  These ten additions must
  receive the build driver's post-dispatch certifications rather than Step 3
  self-review receipts.
- The final whole-library `depcheck --quiet` exits 0: no cycle remains, every
  reference resolves, and no published page contains a draft item.  Its 269
  legacy warnings are advisory and contain no error involving an owned item or
  page.
- The all-group scope-decline check has 70 current rows and 46 missing
  decisions after group `a` closed its 24.  Those 46 belong to groups `b`, `c`
  and `d`; this dispatch preserved their files and did not fabricate decisions
  for them.
- The three confirmed published concerns recorded earlier in this report
  remain owner/serial-reconciler obligations: the partition-of-unity theorem,
  the global vector-field extension lemma, and the vector-fields Lie-algebra
  theorem each omit an `AC_omega` premise required by their actual interface or
  construction.  This dispatch did not edit those published items or the
  published-consumer-supplier ledger.

All owned items, pages, manifests, coverage, contracts, scope decisions and
cross-batch inputs are complete.  The next action is the serial Step 4 splice
after the build driver certifies the ten post-baseline additions and sibling
owners close their 46 scope-decline decisions; no further group-`a` authoring
obligation is open.
