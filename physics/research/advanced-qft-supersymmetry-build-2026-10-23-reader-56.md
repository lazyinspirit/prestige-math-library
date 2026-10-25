# Step 3a reader report — batch 56

Run: advanced-qft-supersymmetry-build-2026-10-23  
Role: reader  
Scope: batch 56

## Opened inventory

The batch manifest lists the A/B pair qftx-sobolev-gauge-orbit-geometry and
qftx-sobolev-gauge-orbit-geometry-examples, with seven items.

Assigned pages opened:

- library/quantum-field-theory-mathematics/qftx-sobolev-gauge-orbit-geometry.md
  (draft A page; five listed items).
- library/quantum-field-theory-mathematics/qftx-sobolev-gauge-orbit-geometry-examples.md
  (draft B page; two listed examples).

Both assigned pages have frontmatter only, retain page_layout: compact-v1,
and match the manifest inventories. The ten pages named by the A-page
prerequisites were also opened: qftx-gauge-geometry,
banach-space-differential-calculus-and-banach-manifolds,
compact-laplace-type-operators-and-hodge-representatives,
compact-operators-and-riesz-schauder-theory,
gauge-groups-and-representation-theory-interfaces,
relations-functions-and-quotients,
sobolev-poincare-and-morrey-inequalities,
unitary-representations-positive-type-and-gns,
picard-lindelof-and-first-order-odes, and
interior-and-boundary-sobolev-elliptic-regularity.

Assigned items opened in dependency order:

1. def-qftx-smooth-sobolev-gauge-configuration
2. lem-qftx-gauge-sobolev-calculus
3. lem-qftx-gauge-stabilizer-and-properness
4. lem-qftx-covariant-laplacian-sobolev-splitting
5. thm-qftx-sobolev-smooth-irreducible-gauge-bundle
6. ex-qftx-covariantly-constant-stabilizer
7. ex-qftx-coulomb-chart-linearization

Direct item prerequisites opened for this review:

- def-qftx-nonabelian-gauge-data
- def-qftx-principal-connection-form
- def-qftx-associated-covariant-derivative
- def-qftx-lie-algebra-valued-form-bracket
- def-gauge-group-of-a-smooth-principal-bundle
- def-principal-connection-and-vertical-curvature
- def-axiom-of-choice
- thm-higher-order-sobolev-embedding
- def-equivalence-relation
- prop-gauge-transformations-act-on-principal-connections
- lem-formal-adjoints-of-differential-operators-exist-and-are-unique
- cor-sobolev-algebra-above-the-critical-index
- thm-inverse-function-theorem-for-banach-spaces
- thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity
- thm-schurs-lemma-for-unitary-representations
- thm-continuous-dependence-of-odes-on-initial-data-and-parameters
- lem-equicontinuous-bounded-rn-valued-curves-have-a-uniformly-convergent-subsequence
- thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition
- lem-neumann-series-and-small-perturbations-of-bounded-inverses
- thm-fredholm-index-is-stable-under-compact-perturbations
- lem-interpolation-absorbs-lower-order-sobolev-terms-in-elliptic-estimates
- thm-implicit-function-theorem-for-banach-spaces

The batch proof-contract file was checked against all seven item contents.
For the six proof-bearing items, its citation, derivation, and boundary
records match the current arguments; the definition has no proof derivations.
No numbered proof step or supplier edge was changed, so no proof-contract
derivation or judge record required a repair.

## Mathematical and source review

The configuration definition fixes the compact Riemannian SU(N) data, the
right-action convention, Sobolev spaces, based evaluation, center quotient,
formal adjoint, holonomy, and irreducibility. The Sobolev calculus proof uses
the stated strict threshold and derives the smooth gauge action and its
one-derivative loss. The stabilizer proof gives the evaluation/holonomy
centralizer correspondence, the finite-center stabilizer in the irreducible
case, openness, and the Sobolev compactness argument for properness. The
covariant-Laplacian proof uses a smooth reference operator and proves the
rough-coefficient result by compact perturbation, index zero, vanishing kernel,
and the resulting bounded inverse; its Green operator gives the asserted
Coulomb splitting. The slice theorem proves its derivative isomorphism,
uses properness to exclude distant gauge returns, and supplies the stated
smooth-space regularity argument. The two examples follow from these
suppliers. I found no unresolved proof gap or false claim in the assigned
items.

The cited source material was checked at the locators used by the items.
Walpuski, Differential Geometry III: Gauge Theory, §§5.13.1–5.13.3,
PDF pp. 113–117, supplies the compact-group Sobolev action and the
properness/stabilizer/slice interfaces; the properness argument there is a
proof sketch, and the authored items give the detailed SU(N) arguments.
Williams, Geometry, Spin, and Seiberg-Witten Theory, §4.2, PDF pp. 25–26,
uses the abelian U(1) setting for Sobolev gauge spaces and action; §4.3,
PDF p. 27, cites another source for the properness lemma; §4.4,
PDF pp. 31–32, gives an abelian local-slice argument and refers elsewhere
for analytic surjectivity. Those passages are comparative context, not proof
of the non-Abelian claims.

## Edits and evidence

- In thm-qftx-sobolev-smooth-irreducible-gauge-bundle, corrected the four
  TikZ labels in Remarks from doubled backslashes to single TeX command
  prefixes: $\Phi_A$, $\operatorname{pr}_1$, $\pi_k$, and $\varphi_A$.
  The diagram's source/destination objects and arrows agree with the
  principal-bundle square described in the remark and proved in step 4.1.
- In ex-qftx-covariantly-constant-stabilizer, made the Example formulation
  state the inherited configuration, basepoint lift, Sobolev gauge groups,
  center quotient, standard representation, and holonomy irreducibility
  condition explicitly.
- In ex-qftx-coulomb-chart-linearization, made the Example formulation
  identify the exact earlier configuration and state the relevant Sobolev
  connection space, covariant derivative, right-action convention,
  formal-adjoint convention, irreducibility meaning, and source of the
  bounded Green inverse.

The two statement edits clarify existing prerequisites and do not change
either example's conclusion. A search of current item carriers found no
consumer of either example.

## Checks

- reflow.mts reported all three changed items unchanged.
- precheck.mts passed all three changed items.
- rendercheck.mjs passed all three changed items for YAML and KaTeX.
- The required batched proof-layout.mjs check reported 3 items, 13 steps,
  and 0 defects.
- A local pdflatex compile was attempted for the corrected TikZ diagram,
  but the environment lacks tikz-cd.sty; compilation stopped before parsing
  the diagram. I checked the diagram's objects, arrow directions, labels, and
  commutativity against the item text manually. rendercheck.mjs does not
  compile TikZ.

## Page verdicts

- qftx-sobolev-gauge-orbit-geometry: pass. Its frontmatter-only A-page
  presentation and five-item inventory match the batch manifest; its
  prerequisite page list resolves to the intended pages.
- qftx-sobolev-gauge-orbit-geometry-examples: pass. Its frontmatter-only
  B-page presentation and two-example inventory match the batch manifest;
  its same-pair and quotient-prerequisite edges are present.

## Uneditable findings and blocker

No confirmed defect remains in an out-of-scope supplier. There is no
mathematical or workflow blocker. Full TikZ compilation remains unverified
because tikz-cd.sty is unavailable in this environment.
