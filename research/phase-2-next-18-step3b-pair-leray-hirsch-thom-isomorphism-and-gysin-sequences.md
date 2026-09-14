# Step 3b dispatch report — Leray–Hirsch, Thom isomorphism, and Gysin sequences

- Run: `phase-2-next-18`
- Batch: `research/phase-2-next-18-batch-3.pages.json`
- Owned pages: `leray-hirsch-thom-isomorphism-and-gysin-sequences`, `leray-hirsch-thom-isomorphism-and-gysin-sequences-examples`
- State: complete locally; owner/serial obligations are listed at handoff

## Evidence and scaffold audit

Read in full: `CLAUDE.md`, `README.md`, `SCHEMA.md`, and `WORKFLOW.md`; AT-18
in `research/plan-algebraic-topology-track.md`; the live batch manifest,
coverage, proof contracts, notes, dependency input and frontier ledger; the
Step 3a report and the current owner `proceed` receipt; and every declared
cross-batch vector-bundle supplier.  No
`research/phase-2-next-18-owner-authoring-direction.md` exists.

Authoritative passages read completely for the uses below:

- Miller, *Algebraic Topology II*, Lectures 33–35, cached as
  `/tmp/phase-2-next-18-b3-sources/miller-18906.txt`, especially lines
  3580–3905 and 4280–4555 (printed pp. 122–132).
- May, *A Concise Course in Algebraic Topology*, Chapter 23 §5, cached as
  `/tmp/phase-2-next-18-b3-sources/may-concise.txt`, lines 1390–1550
  (printed pp. 194–196).
- Hatcher, *Vector Bundles and K-Theory*, the Leray–Hirsch, Thom, Euler, and
  product passages recorded in batch coverage (printed pp. 77–81 and 88–91).

The owner-approved scaffold has 25 items (19 A, 6 B), all absent before this
dispatch.  It is retained, and one necessary local A-page supplier is added,
for a final inventory of 26 items (20 A, 6 B).  The owner repair replaces the inadequate
finite-cover-only route by a relative Serre argument for CW and paracompact
CW-type bases.

Repairs retained in the workload:

1. The first Leray–Hirsch lemma inherits AC from the strict-fiber
   cohomology-local-system supplier; AC is used there and nowhere in the
   supplied finite basis.
2. The orientation local system is defined for an arbitrary commutative ring.
   The scaffold's published local-coordinate dependency proves the needed
   calculation only for `Z` or `F2`; the authored definition therefore gives
   the arbitrary-`R` disk-pair calculation from excision, the pair sequence,
   and finite Mayer–Vietoris, without invoking arbitrary additivity or AC.
3. Disk/sphere/Thom spaces are defined from a supplied metric, so the metric
   existence theorem is not a prerequisite of that definition.
4. The general Thom proof uses the fiberwise one-point compactification and
   its infinity section.  The section splits the bottom row and kills the one
   possible cross-row differential; the relative quotient is therefore a
   one-row calculation.  The paracompact CW-type clause is transported along
   a CW homotopy equivalence using bundle pullback invariance.
5. External products use the radial homeomorphism from the product pair to the
   disk/sphere pair of the ordered Whitney sum.  No over-strong Künneth ring
   isomorphism is needed.
6. The pair-LES Gysin sequence covers ranks `n >= 0`; rank zero has
   `S(0)=empty` and Euler class `1`.  The comparison with the earlier
   sphere-fibration Serre transgression is asserted only for `n >= 2`, since
   that supplier assumes a path-connected sphere fiber.

No potentially defective published item has been identified so far.  This
finding will be revisited at handoff.

## Item checkpoints

### `lem-global-fiber-basis-trivializes-serre-monodromy`

- Claim/convention: under AC, restrictions of the supplied homogeneous global
  classes are fixed by every cohomological fiber transport, hence their basis
  matrices are identities componentwise.
- Actual proof: the endpoint fiber inclusions are homotopic after transport;
  cohomological contravariance gives the displayed equality on each basis
  vector.  Empty basis, zero ring, degree zero, components, and constant paths
  are explicit.
- Dependencies examined: the completed strict-fiber transport functor, ordinary
  cohomological contravariance, and `def-axiom-of-choice`.
- AC: used exactly by the strict-fiber cohomological comparison; no member of
  the supplied finite basis is selected.
- Source: Miller, Lecture 33, Theorem 33.5 and proof, printed pp. 122–123.
- Checks: explicit-path precheck pass; strict item contract pass.
- Open gaps: none.  This file is an auditor-created item relative to the
  immutable baseline, so its Step 3 certification is reserved to the engine's
  post-dispatch created-item path.

Next action: author
`lem-leray-hirsch-isomorphism-on-associated-graded-modules-lifts-without-extension-ambiguity`.

### `lem-leray-hirsch-isomorphism-on-associated-graded-modules-lifts-without-extension-ambiguity`

- Claim/proof: the displayed cup-product map itself is filtered; degreewise
  finite complete filtration lifting turns its graded isomorphism into an
  isomorphism, without choosing complements.
- Dependencies examined: cohomological and multiplicative Serre theorems,
  finite complete filtered-isomorphism lifting, and AC.
- Boundaries/AC: empty and one-summand sources, zero ring, repeated pieces and
  both filtration endpoints are explicit.  AC is inherited only from the
  cohomological Serre construction.
- Source: Miller, Lecture 33, printed pp. 122–123.  Explicit-path precheck and
  strict item contract pass; no open gap.

Next action: author `thm-leray-hirsch-module-isomorphism`.

### `thm-leray-hirsch-module-isomorphism`

- Claim/proof: the constant local system gives the tensor-basis map on $E_2$;
  global classes are permanent edge classes, multiplicativity propagates the
  basis isomorphism, and the preceding filtered lemma lifts the actual map.
- Naturality is precisely relative to maps carrying the chosen global classes;
  no canonical choice of such classes is asserted.
- Dependencies examined: both local Leray–Hirsch lemmas, the cohomological and
  multiplicative Serre theorems, and AC.  Empty/one-element bases, zero ring,
  low degrees, and all filtration endpoints are checked.
- Source: Miller, Lecture 33, pp. 122–123; Hatcher, printed pp. 77–81.
  Explicit-path precheck and strict item contract pass; no open gap.

Next action: author `def-disk-sphere-and-thom-space-of-a-metric-vector-bundle`.

### `def-disk-sphere-and-thom-space-of-a-metric-vector-bundle`

- Definition/convention: $D_h$, $S_h$, and the based quotient are defined for
  a supplied metric, with $X/\varnothing=X_+$.  The radial map
  $v\mapsto(\lVert v\rVert_h/\lVert v\rVert_k)v$ is verified at zero, on the
  boundary, under inversion, and through the positive-definite metric
  interpolation.
- Repair: removed the metric-existence prerequisite.  This item is
  choice-free; existence is consumed only by later theorems.
- Boundaries: empty base, rank zero/one, equal metrics, zero section, sphere
  boundary, and quotient basepoint are explicit.  Definition contract passes;
  proof precheck correctly has no proof-bearing body.  No open gap.

Next action: author `prop-thom-space-of-zero-and-trivial-bundles`.

### `prop-thom-space-of-zero-and-trivial-bundles`

- Claim/proof: direct quotient calculation gives $B_+$ in rank zero and
  $B_+\wedge S^n=\Sigma^nB_+$ for the product bundle, naturally in $B$.
- Dependency examined: the preceding disk/sphere/Thom definition.
- Boundaries: empty base, $n=0,1$, $S^{-1}$, two interval endpoints, zero/unit
  radii and quotient basepoint are explicit.  Source: May, pp. 194–195.
  Explicit-path precheck and strict contract pass; no open gap.

### Local supplier addition

The arbitrary-`R` orientation definition cannot cite the scaffold's published
`lem-local-coordinate-cup-products-generate-top-relative-cohomology`: its
statement assumes AC and restricts $R$ to `Z` or `F2`.  The required finite,
choice-free calculation is therefore added as
`lem-disk-pair-cohomology-over-an-arbitrary-commutative-ring`, immediately
before the definition.  This is a new auditor-created local supplier and will
be registered in the manifest, page, coverage inventory, and proof contract.

Next action: author
`lem-disk-pair-cohomology-over-an-arbitrary-commutative-ring`.

### `lem-disk-pair-cohomology-over-an-arbitrary-commutative-ring`

- Claim/proof: for all commutative $R$ and $n\geq0$, finite hemisphere
  Mayer–Vietoris recursion and the disk/sphere pair sequence give one copy of
  $R$ in relative degree $n$ and zero elsewhere.  Ordered connectors normalize
  $1_R$, and any linear pair automorphism acts by a unit.
- Dependencies examined: the published choice-free cohomology axioms outside
  arbitrary additivity, the two-open Mayer–Vietoris theorem, and the pair LES.
- Boundaries: $S^{-1}$, $S^0$, rank/degree zero and one, zero ring, both
  hemispheres and connector endpoints, coordinate reversal, and identity maps
  are explicit.  No arbitrary family or AC is used.
- Source: May, Chapter 23 §5, pp. 194–196.  Explicit-path precheck and strict
  contract pass; no open mathematical gap.  The added inventory item requires
  the engine's created-item certification at dispatch close.

Next action: author `def-r-oriented-vector-bundle-and-orientation-local-system`.

### `def-r-oriented-vector-bundle-and-orientation-local-system`

- Definition: overlap actions on the arbitrary-`R` disk-pair top group define
  the rank-one orientation local system; an orientation is a supplied section
  of generators.  Metric independence uses radial pair maps.
- Consequences checked: the unique nonzero generator makes every real bundle
  canonically `F2`-oriented, while integral `-1` monodromy forbids a compatible
  generator.  Empty base, rank zero/one, zero ring, identity/reversed paths and
  both equivalents in the section/family definition are explicit.
- Dependencies examined: metric disk-pair definition, local systems, and the
  new arbitrary-ring calculation.  The definition is choice-free.  Its strict
  contract passes; no open gap.

Next action: author `def-thom-class-by-fiberwise-normalization`.

### `def-thom-class-by-fiberwise-normalization`

- Definition: a relative degree-$n$ class is normalized exactly when every
  fiber-pair restriction equals the supplied orientation generator.  It does
  not presuppose existence or uniqueness.
- Dependencies examined: the orientation local system and relative singular
  cochains.  Empty base, rank zero, zero ring, a point base, identity
  restrictions, and empty sphere fibers are explicit.  No representative is
  selected.  Definition contract passes; no open gap.

Next action: author `thm-thom-isomorphism-for-a-trivial-oriented-bundle`.

### `thm-thom-isomorphism-for-a-trivial-oriented-bundle`

- Claim/proof: projection pulls the ordered disk generator to a normalized
  class.  The interval pair sequence is the cokernel of the diagonal
  $H^q(B)\to H^q(B)^2$; connector compatibility identifies it, up to an
  invertible sign, with cup by the interval generator.  Iterating the ordered
  coordinates gives the rank-$n$ result over arbitrary commutative $R$.
- Scaffold repair: removed the AC/PID Künneth supplier, whose hypotheses did
  not cover the claim.  Only finite additivity and finite connector iteration
  are used, so the theorem is choice-free.
- Boundaries: empty base, ranks zero/one, zero ring, negative/zero degree,
  both interval endpoints and all signs are explicit.  Source: May,
  pp. 194–196.  Explicit-path precheck and strict contract pass; no open gap.

Next action: author `lem-thom-isomorphisms-glue-over-two-trivializing-opens`.

### `lem-thom-isomorphisms-glue-over-two-trivializing-opens`

- Claim/proof: a relative small-chain Mayer–Vietoris sequence is derived for
  the disk/sphere pair; exactness first lifts the compatible local classes,
  then a cup-product ladder and the five lemma prove the global isomorphism.
  The resulting isomorphism proves uniqueness from fiber normalization.
- Dependencies examined: trivial Thom, absolute MV and its small-chain
  construction, relative cochains, connector-compatible products, five lemma.
- Boundaries: empty/disjoint/coincident opens, one-set cover, rank zero, zero
  ring/class, both difference endpoints and connector signs.  A single
  existential lift is not an indexed choice; the proof is choice-free.
- Source: May, pp. 195–196.  Explicit-path precheck and strict contract pass;
  no open gap.

Next action: author
`lem-thom-isomorphism-extends-over-a-finite-numerable-trivializing-cover`.

### `lem-thom-isomorphism-extends-over-a-finite-numerable-trivializing-cover`

- Claim/proof: finite induction on one enumeration witnessing finiteness;
  uniqueness forces the two restrictions to agree on each intersection, and
  the two-open lemma supplies the successor stage.
- Repair: no shrinking or numeration is actually used.  The result is
  choice-free, and uniqueness makes it independent of the finite enumeration.
- Boundaries: empty/one/repeated cover members, empty intersections, ranks
  zero/one, zero ring, base, successor and final induction stages.  Source:
  May, pp. 195–196.  Explicit-path precheck and strict contract pass; no gap.

Next action: author
`lem-general-thom-isomorphism-from-the-relative-serre-spectral-sequence`.

### `lem-general-thom-isomorphism-from-the-relative-serre-spectral-sequence`

- Claim/proof: the Serre skeletal construction is repeated on relative
  disk/sphere cochains.  The arbitrary-ring fiber calculation leaves the
  single orientation row, so every differential and extension vanishes.  The
  surviving unit is the normalized Thom class and multiplicativity identifies
  its edge with cup product.
- CW-type extension: a CW homotopy equivalence, functorial pullback and
  homotopy invariance of vector bundles give homotopy-inverse disk/sphere pair
  maps and transport the result.
- Dependencies examined: cohomological/multiplicative Serre, numerable
  fibration and metric suppliers, local disk calculation/orientation,
  relative products, pullback functoriality and bundle homotopy invariance.
- AC: used exactly for the metric, cohomological Serre comparison, and the
  bundle pullback homotopy theorem.  Rank zero, empty/disconnected/point bases,
  zero ring and both filtration/pullback endpoints are explicit.
- Sources: Miller, pp. 124–130; May, pp. 194–196.  Explicit-path precheck and
  strict contract pass; no open mathematical gap.

Next action: author `thm-thom-isomorphism-for-oriented-vector-bundles`.

### `thm-thom-isomorphism-for-oriented-vector-bundles`

- Claim/proof: the relative one-row lemma yields the unique normalized class
  and cup isomorphism.  Leaving the row untrivialized gives the canonical
  twisted isomorphism with $H^k(B;\mathcal O_R(\xi))$.  The finite-cover class
  agrees by uniqueness.
- Dependencies examined: general relative-Serre lemma, metric supplier,
  local-coefficient cohomology and finite-cover lemma.
- Boundaries/AC: empty/point/disconnected bases, rank zero, zero ring,
  negative/zero input, twisted/untwisted rows and both filtration endpoints.
  AC propagates from metric, cohomological Serre and pullback; the finite-cover
  branch remains choice-free.
- Sources: Miller, pp. 129–130; May, pp. 194–196.  Explicit-path precheck and
  strict contract pass; no gap.

Next action: author `thm-naturality-and-uniqueness-of-thom-classes`.

### `thm-naturality-and-uniqueness-of-thom-classes`

- Claim/proof: pullback preserves each fiber generator, so uniqueness identifies
  the pulled-back class; reversing the integral orientation makes $-u$ the
  unique newly normalized class.
- Dependencies examined: the general Thom theorem, pullback bundle definition,
  and AC.  Empty/point bases, rank zero, identity/composite pullbacks, zero
  classes and characteristic-two sign coincidence are explicit.  AC is
  inherited only from the general theorem.
- Source: May, pp. 195–196.  Explicit-path precheck and strict contract pass;
  no gap.

Next action: author
`thm-external-product-and-whitney-sum-formulas-for-thom-classes`.

### `thm-external-product-and-whitney-sum-formulas-for-thom-classes`

- Claim/proof: the explicit maximum-norm/product-pair to sum-norm disk-pair
  radial homeomorphism transports the external product.  Its fiber restriction
  is the ordered connector generator, so uniqueness identifies it.  Diagonal
  pullback gives the Whitney-sum cup formula; swapping blocks gives
  $(-1)^{nm}$.
- Scaffold repair: removed additive Künneth bijectivity entirely; the proof
  uses only relative products, normalization and uniqueness.
- Boundaries: empty bases, ranks zero/one, zero ring/class/vector,
  maximum/sum unit spheres, identity diagonal and both orders.  AC is inherited
  only from general Thom existence.  Source: May, pp. 195–196.  Explicit-path
  precheck and strict contract pass; no gap.

Next action: author `def-thom-diagonal-and-zero-section-collapse`.

### `def-thom-diagonal-and-zero-section-collapse`

- Definition: the disk formula $v\mapsto\pi(v)\wedge[v]$ is constant on the
  sphere in the smash factor and descends to the Thom diagonal.  The zero
  section is explicit.  A Pontryagin–Thom collapse is defined only when
  tubular data are supplied; existence is not smuggled in.
- Dependencies examined: disk/Thom definition, bundle sections and quotient
  universal property.  Empty base, rank zero, sphere/complement points,
  quotient basepoints, identity charts and zero vectors are explicit.  The
  definition is choice-free and its strict contract passes; no gap.

Next action: author `def-thom-euler-class-of-an-oriented-vector-bundle`.

### `def-thom-euler-class-of-an-oriented-vector-bundle`

- Definition: $e_{\rm Th}=s^*j^*u$ with the pair map and zero section typed
  explicitly; naturality and integral orientation reversal follow from the
  preceding Thom theorem, without a forward characteristic-class dependency.
- Boundaries: $e(0_B)=1$, empty/point bases, zero ring, rank one, identity
  pullback and both composite endpoints.  The formula is choice-free after
  the Thom class is supplied; AC is inherited only for general existence.
  Strict definition contract passes; no gap.

Next action: author
`def-gysin-pushforward-for-an-oriented-vector-bundle-zero-section`.

### `def-gysin-pushforward-for-an-oriented-vector-bundle-zero-section`

- Definition: $s_!(a)=j^*(\pi^*a\smile u)$; radial retraction identifies its
  target with base cohomology and gives $s^*s_!(a)=a\smile e_{\rm Th}$.
- Dependencies examined: general Thom, zero section, Euler definition and cup
  naturality.  Empty base, rank zero/one, zero ring/input, unit, negative
  degrees and both radial/composite endpoints are explicit.  The formula is
  choice-free after the Thom class; AC is inherited only for existence.
  Strict definition contract passes; no gap.

Next action: author
`thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle`.

### `thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle`

- Claim/proof: the disk/sphere pair LES is rewritten by radial retraction and
  Thom; its relative-to-absolute map is cup by $e_{\rm Th}$.  This gives every
  exactness position and the natural Gysin connector.
- Serre comparison: for $n\geq2$, the same filtered cochain extending the
  sphere generator represents both $d_n$ and $j^*u$, fixing the sign via the
  positive pair connector.  The earlier sphere-fiber theorem then matches the
  sequences.  Its homological relative-transgression proposition was not
  misused as a cohomological proof.
- Boundaries: rank zero gives identity/zero terms; rank one remains a valid
  pair sequence but is excluded from the path-connected-sphere comparison.
  Empty base, zero ring, zero/unit Euler, negative degrees, both connector
  endpoints and identity pullbacks are explicit.  AC is inherited from Thom
  and cohomological Serre only.
- Sources: Hatcher, pp. 88–91; Miller, pp. 89–92 and 129–132.  Explicit-path
  precheck and strict contract pass; no open gap under the stated rank split.

Next action: author
`prop-thom-and-gysin-constructions-are-compatible-with-pullback-and-composition`.

### `prop-thom-and-gysin-constructions-are-compatible-with-pullback-and-composition`

- Claim/proof: pullback commutes with the Thom class, pair map and cup product,
  hence with Thom, Euler, pushforward and the exact ladder.  For composable
  zero sections, ordered local normal coordinates give
  $\xi\oplus s_\xi^*\eta$; associativity and the Whitney-sum Thom formula make
  the two pushforwards equal the composite.
- Boundaries: empty/point bases, either rank zero, rank one, zero ring/input,
  identity pullbacks, both composite stages, both possible normal orders and
  all exact endpoints.  AC is inherited only from general existence.
- Source: May, pp. 195–196.  Explicit-path precheck and strict contract pass;
  no open gap.

All A-page mathematical items are now authored and individually contracted.
Next action: author `ex-leray-hirsch-for-a-trivial-product-bundle`.

### `ex-leray-hirsch-for-a-trivial-product-bundle`

- Calculation: $e_i=1\times b_i$ restricts literally to $b_i$; the
  Leray–Hirsch formula becomes $\sum a_i\times b_i$, exactly the finite-free
  cohomological Künneth map.
- Boundaries: empty/one-element bases, empty/point fiber, point base, degree
  zero, zero classes and finite-sum endpoints.  The supplied basis requires no
  selection; AC is exactly the Künneth and cohomological Serre use.
- Source: Miller, pp. 122–123.  Explicit-path precheck and strict contract
  pass; no gap.

Next action: author `ex-thom-space-of-a-trivial-line-and-plane-bundle`.

### `ex-thom-space-of-a-trivial-line-and-plane-bundle`

- Calculation: ranks one and two give the once- and twice-suspended based
  spaces.  The endpoint-difference connector and its ordered iteration identify
  the Thom classes with suspended units and the maps with relative suspension.
- Boundaries: empty/point bases, zero ring/class, both interval endpoints,
  both coordinate orders and both suspension stages.  The computation is
  choice-free.  Source: May, pp. 194–195.  Explicit-path precheck and strict
  contract pass; no gap.

Next action: author `ex-mod-two-thom-class-of-the-mobius-line-bundle`.

### `ex-mod-two-thom-class-of-the-mobius-line-bundle`

- Calculation: the endpoint connector for the interval fiber changes sign
  under reflection, so Möbius monodromy is `-1` integrally and trivial modulo
  two.  The canonical mod-two orientation therefore gives the normalized
  degree-one class and Thom shift.
- Boundaries/choice: rank one, both interval endpoints, the zero vector, base
  loop endpoints, degree-zero/zero inputs and the mod-two sign degeneration
  are explicit.  The monodromy computation is finite and choice-free; AC is
  used only for general Thom existence.
- Source: May, Chapter 23 §5, pp. 194–196.  Explicit-path precheck and strict
  contract pass; no gap.

Next action: author
`ex-thom-isomorphism-for-the-tautological-complex-line-over-cp-infinity`.

### `ex-thom-isomorphism-for-the-tautological-complex-line-over-cp-infinity`

- Calculation: the unit-circle principal bundle gives a support-subordinate
  numeration of the tautological line; the ordered real basis `(v,iv)` is
  preserved because complex multiplication has determinant `|z|^2>0`.
  Applying the rank-two integral Thom theorem gives the promised degree shift.
- Dependencies examined: the A-page definition of the stable one-plane
  Grassmannian and tautological bundle, the published numerable Milnor
  `ES^1 -> BS^1` model, the local orientation
  definition, general Thom theorem, and AC.  The extra suppliers repair the
  scaffold's previously unproved numerability assertion.
- Final dependency repair: the proof derives the projective-space
  identification directly from the A-page Grassmannian definition rather than
  consuming the sibling B-page tautological-line example.
- Boundaries/choice: the nonempty base, one complex line, zero vector,
  `CP^0` stage, degree-zero unit, negative-degree and zero inputs are explicit.
  Orientation and the supplied numeration are choice-free; AC is used only by
  general Thom existence.
- Sources: Hatcher, *Vector Bundles and K-Theory*, printed pp. 8–9 and 77–81;
  the completed local Milnor model.  Explicit-path precheck and strict contract
  pass; no open gap.

Next action: author
`cex-leray-hirsch-fails-without-a-global-restricting-fiber-basis`.

### `cex-leray-hirsch-fails-without-a-global-restricting-fiber-basis`

- Witness/calculation: the reflection mapping torus is the Klein-bottle
  bundle.  Its monodromy is `-1` in fiber degree one, so the global-basis
  lemma forbids a restricting integral generator.  Wang gives
  `H_1(K;Z)=Z + Z/2`, with an explicit fixed-point section splitting the
  sequence; integral UCT then gives `H^1(K;Z)=Z`.  A falsely constant fiber
  basis predicts `Z^2` in degree one.
- Dependencies examined: the completed global-basis lemma and Wang theorem,
  the published reflection-degree and sphere-homology calculations, integral
  UCT, and AC.  The sibling Wang proof and its endpoint/sign conventions were
  rechecked before use.
- Boundaries/choice: nonempty spaces, one base loop, both seam endpoints,
  degree-zero unit, multiplication-by-two kernel, identity and reflection
  actions, the false identity-monodromy degeneration and the full Wang segment
  are explicit.  AC is isolated to cohomological transport and UCT.
- Source: Miller, Lecture 33, Theorem 33.5, pp. 122–123.  Explicit-path
  precheck and strict contract pass; no open gap.

Next action: author
`cex-an-unoriented-real-bundle-has-no-integral-thom-class`.

### `cex-an-unoriented-real-bundle-has-no-integral-thom-class`

- Witness/proof: pulling a putative integral relative class to the interval
  product makes its endpoint restrictions equal by the relative prism
  identity.  The Möbius seam identifies the second restriction with reflection
  of the first, which is its negative.  A generator of `Z` cannot satisfy
  `g=-g`.  Modulo two the same clutching obstruction vanishes, the orientation
  definition supplies the canonical orientation, and the general A-page Thom
  theorem supplies the positive class.
- Dependencies examined: the orientation and normalization definitions,
  relative cochains, the singular prism identity, the local disk-pair
  calculation, the general oriented Thom theorem, and AC.  The total pair map
  and both contravariant composites
  are typed explicitly.
- Final dependency repair: the reflection sign is recalculated from the
  A-page disk-pair lemma and mod-two existence is obtained directly from the
  A-page Thom theorem; no B-page item is used as a supplier.
- Boundaries/choice: rank one, zero vector/class, both fiber and base-loop
  endpoints, identity and reflected transport, degree-one generator and
  mod-two sign degeneration are explicit.  Integral nonexistence is
  choice-free; AC occurs only in positive mod-two existence.
- Source: May, Chapter 23 §5, pp. 194–196.  Explicit-path precheck and strict
  contract pass; no open gap.

All 26 owned mathematical items (20 A, 6 B, including one necessary local
supplier beyond the 25-item owner scaffold) are now authored and individually
contracted.  The authored pages and reconciled shared records are summarized
below.

## Final reconciliation and handoff

Both library pages are authored at `draft` status.  Manifest order, page
frontmatter order, item frontmatter IDs and dependency arrays, and proof-contract
scope agree for all 26 owned items.  The new arbitrary-ring disk-pair supplier is
also present in the coverage harvest.  The B page is a dependency leaf: its six
items consume only A-page or earlier published suppliers.  In particular, the
projective-space example now derives the $\mathbb {CP}^{\infty}$ identification
from the A-page Grassmannian definition, and the final Möbius counterexample
recomputes the reflection sign and invokes the A-page Thom theorem directly.

Completed A-page IDs, in prerequisite order:

1. `lem-global-fiber-basis-trivializes-serre-monodromy`
2. `lem-leray-hirsch-isomorphism-on-associated-graded-modules-lifts-without-extension-ambiguity`
3. `thm-leray-hirsch-module-isomorphism`
4. `def-disk-sphere-and-thom-space-of-a-metric-vector-bundle`
5. `prop-thom-space-of-zero-and-trivial-bundles`
6. `lem-disk-pair-cohomology-over-an-arbitrary-commutative-ring` (local supplier added in this dispatch)
7. `def-r-oriented-vector-bundle-and-orientation-local-system`
8. `def-thom-class-by-fiberwise-normalization`
9. `thm-thom-isomorphism-for-a-trivial-oriented-bundle`
10. `lem-thom-isomorphisms-glue-over-two-trivializing-opens`
11. `lem-thom-isomorphism-extends-over-a-finite-numerable-trivializing-cover`
12. `lem-general-thom-isomorphism-from-the-relative-serre-spectral-sequence`
13. `thm-thom-isomorphism-for-oriented-vector-bundles`
14. `thm-naturality-and-uniqueness-of-thom-classes`
15. `thm-external-product-and-whitney-sum-formulas-for-thom-classes`
16. `def-thom-diagonal-and-zero-section-collapse`
17. `def-thom-euler-class-of-an-oriented-vector-bundle`
18. `def-gysin-pushforward-for-an-oriented-vector-bundle-zero-section`
19. `thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle`
20. `prop-thom-and-gysin-constructions-are-compatible-with-pullback-and-composition`

Completed B-page IDs:

1. `ex-leray-hirsch-for-a-trivial-product-bundle`
2. `ex-thom-space-of-a-trivial-line-and-plane-bundle`
3. `ex-mod-two-thom-class-of-the-mobius-line-bundle`
4. `ex-thom-isomorphism-for-the-tautological-complex-line-over-cp-infinity`
5. `cex-leray-hirsch-fails-without-a-global-restricting-fiber-basis`
6. `cex-an-unoriented-real-bundle-has-no-integral-thom-class`

Checks actually run on the final text:

- Explicit-path precheck: 20 proof-bearing items checked, zero failures; the six
  definition-only items were correctly skipped.
- Explicit-path rendering: all 26 items and both pages, 28 files total, passed
  frontmatter parsing, delimiter checks, real KaTeX parsing, and multiline-display checks.
- Owned strict proof contracts: zero errors and zero warnings, 26/26 owned items.
- Batch content policy: 58 scoped items, zero errors and zero warnings.
- Coverage checklist with required deferred destinations: two pages and 46
  harvested results, zero errors and zero warnings.
- Manifest dependency normalization: 58 batch items, zero missing and zero errors.
- Owned citation heuristic: 26 items, no warning.
- Owned manifest/page/item/contract parity: two pages and 26 items, zero errors;
  the local supplier's coverage registration was also checked.
- Cross-batch input refreshed into the unified ledger: 13 preserved Batch-3
  rows, comprising 12 verified rows and one documented removed edge; no row is open.
- `validate-plan` with `research/plan-spec.json`: exit zero.  `depcheck`,
  `fwdcheck`, and `extcheck` also exit zero; `extcheck` reports 55 unrelated
  pre-existing warnings on published items, none in this pair.  A direct source
  hygiene scan of the 26 items, two pages, and five shared/report files found no
  trailing whitespace, missing final newline, or conflict marker.
- A final strict check of the complete shared Batch-3 contract checked all 58
  items and found four stale exact-quote entries in the Serre sibling pair.
  Those non-owned entries and their repair are recorded below; none of the four
  errors occurs in this pair's 26-entry strict scope.

### Published concerns

No suspected or confirmed defective published item was found while reading the
declared suppliers and the complete source arguments used here.  The 55 global
`extcheck` advisories are unrelated recorded-not-proved debt and do not supply
this pair.  Accordingly there is no published repair request from this dispatch.

### Open owner and serial obligations

1. The final Step-3 decision check has 540/566 accepted and leaves exactly these
   26 post-baseline created items on the engine's `current item audit required`
   path.  Per the dispatch's created-item exception, no `record-item` self-review
   command was run.  The engine must apply the created-item certifications after
   accepting this successful dispatch.
2. The owner-held current-scope row remains open verbatim:
   `leray-hirsch-thom-isomorphism-and-gysin-sequences: owner proceed; apply amendments and record proceed for current scope`.
   It was not overridden.
3. Pre-splice `research/plan-spec.json` still shows both owned pages with zero
   items.  Step 4 must splice the 20 A and six B entries.  Its validator also
   advises that the A page's direct prerequisite
   `cup-cap-cross-products-and-cohomology-rings` is reachable through each of
   `orientations-poincare-lefschetz-and-alexander-duality`,
   `the-serre-spectral-sequence-and-applications`, and
   `topological-vector-bundles-and-grassmannian-classification`, while
   `orientations-poincare-lefschetz-and-alexander-duality` is reachable through
   each of the latter two.  These five redundant-prerequisite advisories are
   recorded for the serial reconciler; the shared plan was not edited here.
4. The live `.autopilot/` state recomputes as run `frontier-23`, currently in
   stage 5, not `phase-2-next-18`; current `git log` likewise has no committed
   Batch-3 artifact for this older run.  The mathematical files and dispatch
   records are complete, but the owner/driver must ingest them through the
   intended `phase-2-next-18` dispatch context rather than treating the live
   `frontier-23` state as evidence of this run's completion.
5. The shared Batch-3 strict-contract gate is blocked by four sibling-owned
   quote mismatches, all citing the `Definition` of
   `def-serre-edge-homomorphisms-and-transgression`: F3 of
   `thm-gysin-sequence-from-a-sphere-fiber-serre-spectral-sequence`, F5 of
   `ex-path-loop-serre-computation-of-cp-infinity`, and F4 of each of
   `ex-serre-spectral-sequence-of-the-complex-hopf-fibration` and
   `ex-serre-spectral-sequence-of-the-quaternionic-hopf-fibration`.  Their
   stored quote ends “Neither definition is an iff assertion,” while the
   current supplier ends “Neither definition states a biconditional.”  This is
   a confirmed stale-contract defect, not evidence of a mathematical defect.
   The Serre owner should regenerate exactly those four entries with
   `node tools/regen-contract-entries.mjs research/phase-2-next-18-batch-3.proof-contracts.json`
   followed by the four IDs, then rerun the full `--strict` check.  I did not
   edit another pair's contract entries.
