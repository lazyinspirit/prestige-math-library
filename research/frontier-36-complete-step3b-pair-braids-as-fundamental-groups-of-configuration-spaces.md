# Step 3b — braids as fundamental groups of configuration spaces

Run: `frontier-36-complete`  
Batch: 24  
A page: `braids-as-fundamental-groups-of-configuration-spaces`  
B page: `braids-as-fundamental-groups-of-configuration-spaces-examples`

## Checkpoint — level 0

### `def-motion-of-an-unordered-point-configuration`

- **Scaffold audit:** accepted. The item is a definition of continuous paths in
  the quotient configuration space, with basedness at the exact geometric
  tuple and interiority as a separate condition. Its open/closed assertion is
  supplied by the published radial-homotopy lemma at the same basepoint.
- **Dependencies examined:**
  `def-unordered-configuration-space`,
  `def-based-loops-and-fundamental-group`,
  `def-braid-group-from-unordered-configurations`, and
  `def-geometric-braid-with-setwise-endpoints`; the inclusion-isomorphism
  statement was checked in
  `lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent`.
- **Exact claim/conventions:** `Q` is the published geometric tuple, identified
  between the real and complex unit disks. Closed-disc based motion means a
  path in `C_n(D²)` from `[Q]` to `[Q]`; “interior” means every slice lies in
  `C_n(int D²)`. The closed loop class is `B_n^conf` when the parameter in its
  published definition is specialized to this same `Q`. No claim is made that
  an individual closed-disc path remains interior.
- **Sources read:** Gonzalez-Meneses, *Basic results on braid groups*,
  §§1.1–1.3, printed pp. 3–6 (cached complete 45-page PDF, verified SHA-256
  prefix `8fef987df3601d1e`); Birman–Brendle, *Braids: A Survey*, §1.1,
  author manuscript pp. 3–5 (cached complete 91-page PDF, verified SHA-256
  prefix `22f52d9961a3f0fc`). The latter's inaccurate sentence claiming an
  arbitrary unordered loop lifts to a loop at the original ordered tuple is
  not used; endpoint permutations are handled by the published covering
  monodromy definition.
- **Boundary/choice audit:** `n=0` and `n=1` are explicit. Endpoints are fixed
  at `[Q]`; no Axiom of Choice or nonempty-fibre choice is used.
- **Decision/checkpoint:** `accept`, confidence `1`, recorded in
  `research/frontier-36-complete-step3b-review-def-motion-of-an-unordered-point-configuration.json`
  after the completed item and contract passed. The explicit-path precheck
  examined 0 proof-bearing files (definition only); `rendercheck` checked the
  item with 0 errors/warnings; the strict proof-contract check covered this
  item with 0 errors/warnings.
- **Open gaps:** none for this item. The later comparison theorem must maintain
  the same basepoint, or use an explicitly chosen path for a basepoint change.
- **Checkpoint continuation:** the next item after this level 0 definition was
  `lem-a-configuration-loop-traces-a-geometric-braid`; its completed audit,
  repair, proof and checks are recorded in the following checkpoint.

## Checkpoint — level 1, first item

### `lem-a-configuration-loop-traces-a-geometric-braid`

- **Scaffold audit and repair:** the original strategy omitted a justified
  Hausdorff premise for applying the coordinate-neighborhood covering lemma to
  the open disk and omitted the quotient-space definition needed to read the
  endpoint orbit. Repaired this item's dependency row and strategy in the
  batch manifest. Added the closed-disk Hausdorff, hereditary-Hausdorff,
  complex-metric, unordered-configuration, and ordered-configuration inputs;
  the derived dependency order remains level 1. The pair's sufficient scope
  was refreshed; its scope hash matches the existing owner `proceed` receipt.
- **Exact claim/conventions:** a based path in
  `C_n(int D²)` starting at `[Q]` lifts uniquely under the ordered-to-unordered
  quotient from the one specified tuple `Q`. Its coordinate graphs give a
  level-preserving braid; the endpoint tuple belongs to the permutation orbit
  of `Q`, and every slice is exactly the original quotient path.
- **Argument and evidence:** identify `int D²` with the open unit disk in
  `C`, a subspace of the Hausdorff closed disk; hereditary Hausdorffness then
  justifies the published evenly-covered-neighborhood result. Apply path
  lifting from `Q`. Coordinate projections of the continuous lift are
  continuous and remain collision-free/interior. The quotient fibre at the
  final `[Q]` is precisely the coordinate-permutation orbit, proving the
  setwise top condition. Sources read in full relevant sections: González-
  Meneses, *Basic results on braid groups*, §§1.1–1.3, printed pp. 3–6;
  Birman–Brendle, *Braids: A Survey*, §1.1, manuscript pp. 3–5; published
  quotient, covering-neighborhood, path-lifting, and braid-definition items
  cited in the proof contract. The arbitrary-loop endpoint sentence in BB is
  not used.
- **Boundary/choice audit:** `n=0` uses the one-point ordered and unordered
  spaces and the empty braid; for `n=1`, the quotient is the identity and the
  single lifted path is the braid. The lift is unique from the fixed `Q`; no
  Choice is used.
- **Decision and checks:** scaffold decision `repaired`, confidence `1`, with
  all nine manifest dependencies examined, recorded after authoring in
  `research/frontier-36-complete-step3b-review-lem-a-configuration-loop-traces-a-geometric-braid.json`.
  Explicit-path precheck passed; rendercheck passed (1 item, no warnings or
  errors); strict item proof-contract check passed; dependency-level check
  passed (923 items/60 pages, max level 18). The item records
  `verification.precheck: pass`.
- **Open issue for serial reconciliation:** the prose-plan row still lists
  only the original two inputs for this item. The repaired manifest has real
  additional quotient, metric/Hausdorff, ordered-configuration, covering,
  and path-lifting dependencies. Preserve this as a pre-splice plan mismatch
  for Step 4; do not edit the shared plan here.
- **Next:** `lem-a-geometric-braid-slices-to-a-configuration-loop` (level 1).

## Checkpoint — level 1, second item

### `lem-a-geometric-braid-slices-to-a-configuration-loop`

- **Scaffold audit and repair:** the continuity route was described using the
  product topology but did not declare its product-topology input directly.
  Added `def-product-topology` to this item's manifest dependencies and
  recomputed dependency levels: all 923 items on 60 pages still check, maximum
  level 18, and this item remains level 1. The canonical coverage row already
  listed this item as included. Refreshed the pair's sufficient scope receipt;
  the owner's `proceed` decision remains current.
- **Exact claim/conventions:** for the given labelled motions
  `z_j:I→D°`, the ordered tuple path is mapped through the orbit quotient to
  `S(β)(t)=[(z_1(t),…,z_n(t))]`. It is a continuous based loop at `[Q]`, and
  the value at height `t` is exactly the unordered slice of the braid. The
  real disk is identified with the complex disk as fixed by the motion
  definition; the level parameter is unchanged.
- **Argument and evidence:** coordinate continuity gives a continuous map to
  the finite product; collision-freeness factors it continuously through the
  ordered configuration subspace. The continuous quotient map then gives a
  continuous unordered path. The bottom tuple is `Q`; the setwise top tuple
  lies in its permutation orbit, so both quotient endpoints equal `[Q]`.
  By the strand-graph definition, its slice at each height is the same orbit.
  Read complete relevant source passages: González-Meneses, *Basic results
  on braid groups*, §1.2 p. 4 (point paths as strand graphs) and §1.3 p. 5
  (general braids allow a permuted top endpoint); Birman–Brendle, *Braids: A
  Survey*, §1.1 author manuscript p. 3 (configuration quotient and graph of
  simultaneous paths). Exact library excerpts and uses are in the strict
  proof contract.
- **Boundary/choice audit:** for `n=0`, the product and quotient are the
  one-point empty configuration and the slice is empty. For `n=1`, there is
  no pairwise collision condition and the sole coordinate starts and ends at
  `q_1`. The input labels already specify the coordinates; no lift,
  enumeration, or choice is used.
- **Decision and checks:** scaffold decision `repaired`, confidence `1`, with
  all five declared dependencies examined, recorded after authoring in
  `research/frontier-36-complete-step3b-review-lem-a-geometric-braid-slices-to-a-configuration-loop.json`.
  Explicit-path precheck passed; final rendercheck passed (1 item, no errors
  or warnings); strict item proof-contract check passed. The proof contract
  records the product-topology dependency and all standard boundary cases.
- **Open gaps:** none for this item. The item records
  `verification.precheck: pass`.
- **Next:** `lem-path-homotopy-traces-braid-isotopy` (level 2).

## Checkpoint — level 2, first item

### `lem-path-homotopy-traces-braid-isotopy`

- **Scaffold audit and repair:** the strategy described a bespoke finite-strip
  construction instead of applying the already published covering homotopy
  lifting theorem. It did not declare the ordered/product topology needed to
  pass from the joint lift to joint continuity of its coordinate strands, and
  carried a redundant direct local-covering dependency even though the prior
  completed trace lemma states that the quotient is a covering. Replaced the
  ad hoc strategy with the theorem applied to `Y=I_s`, height `t`, and the
  specified constant initial lift; added ordered/product topology dependencies
  and removed that redundant edge. Recomputed order: this item stays level 2;
  923 items on 60 pages remain valid, maximum level 18. The pair's sufficient
  scope receipt was refreshed; owner `proceed` remains current.
- **Exact claim/conventions:** a jointly continuous family
  `H(s,t)` of based interior configuration loops has `s` as homotopy/isotopy
  parameter and `t` as braid height, with `H(s,0)=H(s,1)=[Q]`. Lift the square
  with initial edge constantly `Q`; the two boundary lifts from `s=0,1` are
  braid-isotopic relative to bottom and top.
- **Argument and evidence:** the prior trace lemma supplies the quotient
  covering and unique lift of each path. The covering homotopy lifting theorem
  extends the continuous constant initial edge to a unique jointly continuous
  lift into `F_n(int D²)`. Each height path is the unique braid trace of its
  based loop. Product projections make all strand coordinates jointly
  continuous; every slice has bottom `Q` and setwise top `Q`; the braid-isotopy
  definition confirms the top coordinate is then constant per label. Boundary
  restrictions are the unique lifts of the endpoint loops. Full relevant
  source read: González-Meneses, *Basic results on braid groups*, §1.3 printed
  p. 5; the configuration-loop equivalence passage in §1.1 of Birman–Brendle
  was reread but its inaccurate arbitrary-loop endpoint sentence is not used.
  The exact cited library excerpts are recorded in the strict contract.
- **Boundary/choice audit:** `n=0` yields the unique empty lift/isotopy;
  `n=1` has no collision conditions and the endpoint is the sole point. The
  initial lift is explicitly `s↦Q`; covering homotopy uniqueness is used and
  no Axiom of Choice is needed.
- **Decision and checks:** scaffold `repaired`, confidence `1`, all six
  declared dependencies examined, recorded after authoring in
  `research/frontier-36-complete-step3b-review-lem-path-homotopy-traces-braid-isotopy.json`.
  Explicit-path precheck passed; rendercheck passed (1 item, no errors or
  warnings); strict proof-contract check passed; dependency-level check passed
  (923 items/60 pages, max level 18). `verification.precheck` is `pass`.
- **Open gaps:** none for this item. A/B scope and claim inventory are
  unchanged.
- **Checkpoint continuation:** the next level 2 item after this path-homotopy
  lemma was `lem-stacking-corresponds-to-loop-concatenation`; it is completed
  in the next checkpoint below.

## Checkpoint — level 2, second item

### `lem-stacking-corresponds-to-loop-concatenation`

- **Scaffold audit and repair:** the formula strategy is valid, but the
  upper-half calculation uses that coordinate permutations have the same
  image in the unordered quotient. Added the published
  `def-unordered-configuration-space` dependency for that actual use; this
  item remains level 2 after recomputation. The pair's sufficient scope receipt
  was refreshed and the owner `proceed` decision remains current.
- **Exact claim/conventions:** if `γ★β` stacks `β` below `γ`, then
  `S(γ★β)=S(β)*S(γ)` pointwise as based paths, where the library product runs
  its left loop first. Taking classes gives
  `[S(γ★β)]=[S(β)][S(γ)]`, so raw slicing reverses the stacking order.
- **Argument and evidence:** the published stacking formula gives
  `z_j(2t)` on the lower half and `w_{π(β)(j)}(2t−1)` on the upper. Slicing
  gives `S(β)(2t)` below. Above, the tuple is a reordering of `γ`'s tuple, so
  the quotient gives `S(γ)(2t−1)`. The two formulas agree at the seam `[Q]`;
  they are precisely the same rescalings as the defined loop product. The
  group-law theorem licenses passing to the product in `π₁`. Full relevant
  source read: González-Meneses, *Basic results on braid groups*, §1.3 printed
  p. 5, on concatenation and stacking. The exact coordinate proof and
  dependency excerpts are in the strict proof contract.
- **Boundary/choice audit:** `n=0` gives the unique empty loop; for `n=1`
  the endpoint permutation is the identity and the same calculation applies.
  The unique endpoint permutation comes from the given braid; no arbitrary
  coordinate ordering or Choice is used.
- **Decision and checks:** scaffold `repaired`, confidence `1`, all five
  declared dependencies examined, recorded after authoring in
  `research/frontier-36-complete-step3b-review-lem-stacking-corresponds-to-loop-concatenation.json`.
  Explicit-path precheck passed; final rendercheck passed (1 item, no errors
  or warnings); strict item proof-contract check passed; dependency-level check
  passed (923 items/60 pages, max level 18). `verification.precheck` is pass.
- **Open gaps:** none for this item.
- **Pre-splice mismatch:** the prose-plan row lists only
  `prop-stacking-of-geometric-braids-is-well-defined` and
  `lem-a-geometric-braid-slices-to-a-configuration-loop`; the manifest also
  lists `def-based-loops-and-fundamental-group`,
  `thm-fundamental-group-laws`, and the locally added
  `def-unordered-configuration-space`. Preserve this difference for Step 4;
  the shared plan is not edited here.
- **Next:** `cex-a-crossing-diagram-without-height-monotonicity-does-not-define-a-configuration-loop` (level 2, B page).

## Checkpoint — level 2, first B-page item

### `cex-a-crossing-diagram-without-height-monotonicity-does-not-define-a-configuration-loop`

- **Scaffold audit and repair:** the proposed PL vertices give the claimed
  folded witness. The scaffold did not declare the definition needed to
  conclude that four distinct points are not an element of `C_2`; added
  `def-unordered-configuration-space`. Recomputed order: the item remains
  level 2. Its B-page canonical coverage row already marks it included.
- **Exact witness/conclusion:** with `n=2`, `h=1/12`, and `a=h/4`, the first
  arc runs through `P0=(-h,0,0)`, `P1=(-h+a,0,3/4)`,
  `P2=(-h+2a,a,1/4)`, `P3=(-h,0,1)`; the second is vertical at `q2=(h,0)`.
  The endpoint sets at heights 0 and 1 are both `{q1,q2}`. The first arc has
  a local maximum and minimum, and its three intersections at height `1/2`,
  together with the vertical strand, give four distinct spatial points.
- **Argument and evidence:** direct affine interpolation gives the three
  points `(-h+2a/3,0)`, `(-h+3a/2,a/2)`, and
  `(-h+4a/3,2a/3)`. The PL arc is embedded: its nonadjacent segments are
  disjoint; the two middle/upper segments satisfy respectively
  `x+h-y=a` and `x+h=2y`, meeting only at `P2`. All points lie within
  `sqrt(5)a < 3a < 2h` of `q1`, so the folded arc remains interior and misses
  the vertical arc. At the half-height slice there are four distinct points,
  hence no element of `C_2(D°)` can be assigned there. This violates the
  one-point-per-height requirement for a geometric strand, so the valid-braid
  slicing lemma does not apply. No external source is used for the witness;
  the exact library definition excerpts are in the strict proof contract.
- **Boundary/choice audit:** this is specifically a two-strand witness with
  `a>0`; its endpoint sets and all four interior slice points are computed
  explicitly. It does not assert analogous zero- or one-strand claims. No
  choice principle is used.
- **Decision and checks:** scaffold `repaired`, confidence `1`, all three
  declared dependencies examined, recorded after authoring in
  `research/frontier-36-complete-step3b-review-cex-a-crossing-diagram-without-height-monotonicity-does-not-define-a-configuration-loop.json`.
  Explicit-path precheck passed; final rendercheck passed (1 item, no errors
  or warnings); strict item proof-contract check passed. Coverage is included
  and `verification.precheck` is pass.
- **Pre-splice mismatch:** the prose-plan row lists only
  `lem-a-geometric-braid-slices-to-a-configuration-loop`; the manifest also
  uses `def-geometric-braid-with-setwise-endpoints` and the locally added
  `def-unordered-configuration-space`. Preserve this for Step 4.
- **Next:** `cex-forgetting-labels-can-close-a-nonlooping-coordinate-path` (level 2, B page).

## Run-wide dependency-level diagnostic

After the counterexample dependency repair, the required run-wide check
reported stored-level mismatches outside this pair in batch 30:
`lem-classical-derivatives-are-weak-derivatives` (stored 4, computed 3),
`lem-sobolev-norm-is-well-defined-and-definite` (stored 5, computed 4), and
`thm-sobolev-spaces-are-banach-spaces` (stored 6, computed 5). These are
sibling-owned items; they were not edited. Re-run the required dependency
check at handoff and preserve any remaining exact diagnostics for the owner.

## Pre-splice plan mismatches for Step 4

- `lem-a-configuration-loop-traces-a-geometric-braid`: plan lists only
  `def-motion-of-an-unordered-point-configuration` and
  `def-geometric-braid-with-setwise-endpoints`; repaired manifest also uses
  `def-complex-metric-convergence-and-continuity`,
  `def-ordered-configuration-space`, `def-unordered-configuration-space`,
  `lem-disjoint-coordinate-neighborhoods-evenly-cover-unordered-configurations`,
  `lem-the-closed-disk-is-a-manifold-with-boundary`,
  `lem-t0-t1-and-hausdorff-are-hereditary`, and
  `thm-path-lifting-for-covering-maps`.
- `lem-a-geometric-braid-slices-to-a-configuration-loop`: plan lists the
  geometric-braid and motion definitions; repaired manifest also uses
  `def-product-topology`, `def-ordered-configuration-space`, and
  `def-unordered-configuration-space`.
- `lem-path-homotopy-traces-braid-isotopy`: plan lists the trace lemma and two
  homotopy/isotopy definitions; repaired manifest also uses
  `def-ordered-configuration-space`, `def-product-topology`, and
  `thm-homotopy-lifting-for-covering-maps`. The redundant direct
  evenly-covered-neighborhood edge was removed because the prior trace lemma
  establishes the covering.

## Run-level dependency input

Batch 24 has no declared or implicit cross-batch dependencies at this
checkpoint; preserve `research/frontier-36-complete-batch-24.cross-batch-dependencies.json`
as `[]` unless a later authored proof introduces such an edge.

## Checkpoint — level 2, second B-page item

### `cex-forgetting-labels-can-close-a-nonlooping-coordinate-path`

- **Scaffold audit and repair:** the witness strategy is sound. The endpoint
  test depends on the definition of a based loop (equal endpoints), which was
  missing from the original direct dependencies; the manifest now declares
  `def-based-loops-and-fundamental-group`, and the authored item frontmatter
  matches it. The other direct dependencies are the ordered and unordered
  configuration definitions, the elementary half-twist definition, and the
  slice lemma. The dependency level stays 2.
- **Exact witness/conclusion:** take `n=2`, `h=1/12`, `q_1=(-h,0)`,
  `q_2=(h,0)`, and `Q=(q_1,q_2)`. The published positive half twist has
  midpoint zero and ordered coordinate path
  `(rho(t),-rho(t))`. Since `rho` is continuous, nonzero, has endpoints
  `(-h,0)` and `(h,0)`, and norm at most `h<1`, this path remains in
  `F_2(D°)` and has endpoints `Q` and `(q_2,q_1) != Q`. Its quotient image is
  continuous, both endpoints are `[Q]`, and it is exactly the slice of the
  geometric half twist. Thus the ordered path is not a based loop at `Q`, but
  forgetting labels produces the claimed unordered based loop.
- **Evidence and boundaries:** reread the complete local definition passages
  for based loops, ordered and unordered configurations, the positive
  half-twist formula, and the slicing formula. The strict contract quotes the
  exact excerpts and maps them to steps 1.1, 2.1, 2.2, and 3.1. The explicit
  nonzero and norm bounds establish collision-freeness and interiority; both
  endpoint equalities/inequalities are computed. The witness fixes `n=2`, so
  empty/zero/one-strand claims are inapplicable; no arbitrary choice is used;
  no iff claim is made. The source list points to González-Meneses, §1.5,
  Figure 2, printed pp. 7–8; the proof relies on the exact published local
  half-twist definition, not an unverified extra literature claim.
- **Decision and checks:** the item records `verification.precheck: pass`.
  Explicit-path precheck passed (1 item); rendercheck passed (1 item, no
  warnings or errors); strict item proof-contract check passed (0 errors,
  0 warnings). The repaired item decision, confidence `1`, with all five
  manifest dependencies examined, is recorded in
  `research/frontier-36-complete-step3b-review-cex-forgetting-labels-can-close-a-nonlooping-coordinate-path.json`.
  No local supplier was added. The canonical coverage row already marks the
  counterexample included.
- **Pre-splice mismatch:** the B-page prose-plan row lists only
  `def-unordered-configuration-space`; the actual manifest also requires
  `def-ordered-configuration-space`,
  `def-elementary-geometric-half-twist`,
  `lem-a-geometric-braid-slices-to-a-configuration-loop`, and
  `def-based-loops-and-fundamental-group`. Preserve for Step 4; shared plan
  files remain untouched.
- **Latest run-wide diagnostics:** a dependency-level check after this item
  passed returned one sibling-owned stale label:
  `lem-oriented-real-two-plane-splitting-with-injective-real-pullback`
  (stored level 1, computed level 2). It was not edited. The run-wide scope
  decision check also reports a missing current review for the sibling pair
  `recurrence-transience-and-hitting-times-for-markov-chains`; this pair is not
  edited. Re-run both diagnostics at handoff because sibling work is active.
- **Potential published wording defect for the owner:**
  `def-endpoint-monodromy-of-a-configuration-loop` on page
  `ordered-and-unordered-configuration-spaces` defines
  `\tilde\alpha(1)_i=q_{e_\alpha(i)}`, then glosses this as “the point standing
  at position `i` at the end is the one that carried label `e_\alpha(i)` at
  the start.” Under the spatial-base-position reading, the point ending at
  `q_i` has initial label `e_\alpha^{-1}(i)`, not `e_\alpha(i)`; under a
  coordinate-slot reading the sentence is ambiguous because slot `i` tracks
  initial strand label `i`. The displayed equation, inverse convention, and
  later proof use the right formula. Confidence `0.9`: this is an explanatory
  wording ambiguity/suspected inverse-label error, not a confirmed defect in
  the formula. No new supplier is required. Suggested repair: say “the strand
  initially labelled `i` ends at base position `e_\alpha(i)`,” retaining the
  equation and subsequent inverse convention. Route this published-consumer
  concern to the owner/serial reconciler; do not edit the published item or
  shared ledger here.
- **Next:** `lem-slicing-and-tracing-are-mutually-inverse-on-classes` (level 3,
  A page). Recompute order if its dependency audit repairs an edge.

## Checkpoint — level 3, first item

### `lem-slicing-and-tracing-are-mutually-inverse-on-classes`

- **Scaffold audit and repair:** the original proof route was sound in outline,
  but its dependency row omitted direct inputs for the class conventions and
  for proving that a jointly continuous braid isotopy induces a continuous
  family in the unordered configuration quotient. Added the based-loop,
  path-homotopy, real/complex disk identification, geometric-braid,
  product-topology, ordered-configuration, and unordered-configuration
  definitions. Kept the original four lemma/isotopy inputs and the promised
  claim. All added dependencies are published/out of this frontier, so the
  item remains level 3. The run-wide dependency recomputation after the
  manifest repair passed 924 items on 60 pages, maximum level 18.
- **Exact claim/conventions:** at the same fixed `n,Q`, `T` takes a based
  path-homotopy class in `C_n(int D²)` to the braid-isotopy class of the unique
  trace lift from `Q`; `S` takes a braid-isotopy class to the class of its
  unordered coordinate slice. Path homotopy makes `T` independent of its loop
  representative. From a braid isotopy `Z(s,t)`, product continuity,
  collision-freeness, subspace continuity, and the continuous orbit projection
  give `H(s,t)=p_n(Z_1(s,t),...,Z_n(s,t))`; its bottom and top edges are
  constantly `[Q]`, and swapping the square parameters gives a path homotopy
  between the slices. Thus `S` is independent of the braid representative.
  Slicing the trace returns the original loop pointwise. Tracing a braid's
  slice returns the same tuple because that tuple is already the ordered lift
  from `Q`, which is unique. Both composites are exact in this tuple model;
  no reparametrization is needed.
- **Sources and qualifications:** reread the complete relevant local proofs
  for the unique trace lift, path-homotopy-to-braid-isotopy implication, and
  braid slicing, plus the full definitions of braid isotopy, based/path
  homotopy, product/subspace topology, and both configuration quotients.
  González-Meneses, *Basic results on braid groups*, §§1.1–1.3, printed pp.
  3–6, was reread from the complete cached 45-page PDF; §1.3 p. 5 supports
  the strand-homotopy interpretation. Birman–Brendle, *Braids: A Survey*,
  §1.1, author manuscript pp. 3–5, was reread from the complete cached
  91-page PDF. Its simultaneous-homotopy discussion is contextual, but its
  nearby assertion that every unordered loop lifts to a loop at the original
  ordered tuple is false outside the pure case and is not used. The source
  treatment uses the complex plane; this proof's real open-disk model is
  connected to it only through the explicit local disk identification and
  completed local lemmas, not by an unstated source transfer.
- **Boundary/choice audit:** `n=0` gives one-point ordered/unordered spaces
  and the unique empty braid/class; `n=1` has no collision condition and both
  configuration spaces canonically identify with the disk. Bottom/top
  endpoints are fixed at `[Q]` for the induced path homotopy. The trace uses
  the unique lift from specified `Q`; no arbitrary lift, ordering or Choice is
  used. The proof contract records empty, zero, one, degenerate, endpoint,
  choice, and both iff dispositions.
- **Decision and checks:** explicit-path precheck passed (1 item);
  rendercheck passed (1 item, zero errors/warnings); strict selected
  proof-contract check passed (zero errors/warnings). The item decision is
  `repaired`, confidence `1`, with all eleven declared dependencies examined,
  recorded in
  `research/frontier-36-complete-step3b-review-lem-slicing-and-tracing-are-mutually-inverse-on-classes.json`.
  Canonical coverage already includes the item. No local supplier was added.
- **Pre-splice mismatch:** the plan row lists the three trace/slice lemmas and
  says the second composite is “straightened by its height parametrization.”
  The manifest originally also required the braid-isotopy definition; the
  repaired manifest now declares the class, product/subspace, disk
  identification, and quotient inputs listed on the item. In the actual tuple
  proof both composites are exact, by the slice identity and uniqueness of
  the ordered lift. Preserve this difference for Step 4; the shared plan is
  untouched.
- **Latest shared-state diagnostic:** the subsequent whole-run dependency
  check encountered invalid JSON while another worker was writing
  `research/frontier-36-complete-batch-10.pages.json` (trailing data at line
  689, column 2). That sibling-owned file was not edited. Re-run the global
  check after concurrent writes settle; the last valid run-wide recomputation
  after this pair's dependency repair passed.
- **Next:** `ex-a-half-twist-loop-traces-the-standard-generator` (level 3,
  B page). Recompute order if its dependency audit repairs an edge.

## Checkpoint — level 3, second item

### `ex-a-half-twist-loop-traces-the-standard-generator`

- **Scaffold audit and repair:** the proposed round path and lower-diamond
  interpolation are mathematically sound. The dependency list was missing the
  direct braid, motion, ordered/unordered quotient, product/subspace topology,
  path-homotopy and braid-isotopy definitions, along with continuity,
  exponential, and sine facts used in the formulas. Added these seventeen
  direct inputs; the exact claim and role remain an example, at level 3.
- **Exact claim/conventions:** for `n≥2`, `1≤i<n`, and the published `Q,h,m_i`,
  the unordered orbit of `m_i±v(t)`, with `v(t)=h exp(iπ(1+t))` and all other
  points fixed, is an interior based loop at `[Q]`; its unique geometric-braid
  trace is braid-isotopic to the published positive `σ_i`. The endpoints of
  `v` are `−h,+h`, so the ordered coordinates exchange and the unordered orbit
  closes. The sign agrees with the published lower diamond path `ρ` because
  both lie strictly below the real axis between those same nonzero endpoints.
  The interpolation `w_s=(1−s)ρ+s v` stays nonzero and satisfies
  `|w_s|≤h<3h/2`; the moving pair stays inside `U_i`, while all other points
  stay outside it. Its quotient is a homotopy through based loops, and the
  trace and path-homotopy lemmas identify the boundary braids.
- **Sources and qualifications:** reread the complete published local
  elementary-half-twist definition, including its base spacing, support-disc
  bounds, path formula, and sign convention. Also reread González-Meneses,
  *Basic results on braid groups*, §1.5, printed p. 7, Figure 2; the source
  identifies the `σ_i` as standard/Artin generators. This is corroboration
  only; the isotopy and sign are proved explicitly above. The full relevant
  earlier source passages and the current local trace, path-homotopy, quotient,
  continuity, and isotopy prerequisites were read. No source uncertainty or
  mathematical gap remains for this item.
- **Boundary/choice audit:** `n=2` is included with the outside coordinates
  vacuous; `n=0,1` are excluded by the explicit adjacent-index hypotheses.
  The round and interpolating relative paths are nonzero, and both path and
  isotopy endpoints are checked. Every coordinate is prescribed, and tracing
  uses the unique lift from specified `Q`; AC is not used. The contract records
  the zero, empty, one, degenerate, endpoint, choice, and both iff cases.
- **Decision and checks:** `verification.precheck: pass`; explicit-path
  precheck passed (1 item), rendercheck passed (1 item, no errors/warnings),
  and the strict selected proof-contract check passed (0 errors/warnings).
  The dependency-level recomputation after manifest repair passed for 924
  items on 60 pages, maximum level 18; this item remains at level 3. The batch
  coverage entry was already `included`. No local supplier was added.
  `record-item repaired confidence 1` is current in
  `research/frontier-36-complete-step3b-review-ex-a-half-twist-loop-traces-the-standard-generator.json`.
  It records all 18 direct dependencies examined. The owner scope receipt now
  matches this pair's current claim inventory. The latest pair-wide checks are
  recorded in the dispatch handoff below.
- **Pre-splice mismatch:** `plan-braid-groups-track.md` lists only the trace
  lemma and half-twist definition for this example. The repaired manifest also
  declares the direct braid/motion/configuration/topology/homotopy definitions
  and analytic continuity/sine/exponential inputs listed in the item. Keep the
  difference for Step 4; the shared plan was not edited.
- **Batch content-policy status:** the current full batch check passed for all
 14 scoped items with 0 errors and 0 warnings.
- **Next:** `thm-geometric-braids-are-the-fundamental-group-of-unordered-configurations`
 (level 4, A page).

## Checkpoint — level 4 theorem

### `thm-geometric-braids-are-the-fundamental-group-of-unordered-configurations`

- **Scaffold and dependency order:** the proposed map was sound in outline but
  its direct inputs omitted the explicit geometric base tuple/interface and
  the based induced map and isomorphism criteria. Added
  `def-geometric-braid-with-setwise-endpoints`,
  `def-motion-of-an-unordered-point-configuration`,
  `def-based-loops-and-fundamental-group`,
  `def-induced-homomorphism-on-fundamental-groups`,
  `def-group-homomorphism`, `def-injection-surjection-bijection`, and
  `def-group-isomorphism-and-automorphism`. No new supplier was needed. The
  run-wide dependency-level check passed for 924 items on 60 pages (maximum
  level 18); this theorem remains level 4. The sufficient pair-scope review was
  refreshed after the final dependency repair; the owner-held `proceed` scope
  remains unchanged.
- **Exact claim and conventions:** instantiate the parameterized
  `B_n^{conf}` definition at exactly `q=Q`, the explicit tuple fixed by the
  geometric braid definition. The class map
  `S:G_n -> pi_1(C_n(int D²),[Q])` is bijective and satisfies
  `S([gamma][beta])=[S(beta)][S(gamma)]` because `gamma★beta` runs beta below
  gamma and the loop product is first-then-second. The based inclusion
  `iota^C_*` is an isomorphism at this same `[Q]`. For
  `Phi([beta])=(iota^C_*[S(beta)])^{-1}`, setting
  `a=iota^C_*[S(gamma)]`, `b=iota^C_*[S(beta)]` gives the product `ba`; the
  two-sided inverse check proves `(ba)^(-1)=a^(-1)b^(-1)`, so Phi preserves
  products and is bijective. No arbitrary change-of-basepoint path is involved;
  another basepoint needs a chosen path. No Artin-presentation claim is made.
- **Source reading and qualification:** the complete relevant argument in
  González-Meneses, *Basic results on braid groups*, §§1.1–1.3, printed
  pp. 3–5, was read. It defines the unordered configuration-space group and
  describes its strand and stacking interpretation; the exact fixed-disc
  class bijection and product order are derived from our completed local
  lemmas. Birman–Brendle, *Braids: A Survey*, §1.1, author manuscript p. 3,
  was also read in full. Its simultaneous-homotopy discussion is contextual;
  the nearby sentence that an arbitrary unordered-loop lift ends at its
  original ordered tuple is false for nonpure loops and is not used. No source
  uncertainty remains for this proof.
- **Boundary and choice audit:** `n=0` gives the unique empty braid and
  one-point open/closed configuration spaces; `n=1` has no collision
  condition, and the same maps and product argument apply. The common orbit
  `[Q]` is fixed at both ends, and the braid top condition is setwise. The
  tuple is specified and tracing uses its unique lift. No AC or arbitrary
  connecting path is used. The contract records empty, zero, one, degenerate,
  endpoint, choice, and both iff dispositions.
- **Decision and checks:** coverage already marks the item `included`. Explicit
  path precheck passed (1 item); explicit rendercheck passed (1 item, no
  warnings/errors); strict selected proof-contract check passed (1/1 item,
  zero errors/warnings). The repaired item decision is recorded with
  confidence `1` and all thirteen declared dependencies examined.
- **Pre-splice mismatch:** the BG-3 design row lists only slicing/tracing,
  stacking, and the configuration-braid definition as inputs. The repaired
  manifest also names the direct based-map, fixed-basepoint, group-operation,
  bijection, and isomorphism interfaces above. The plan's exact `Q_n` claim is
  followed by specializing the parameterized definition at `q=Q`; shared plan
  prose remains untouched for Step 4 reconciliation.
- **Cross-batch input:** the new edges are to earlier items within this pair or
  already-published library items; no new cross-batch pair supplier is
  introduced. Preserve the existing batch-24 row in
  `briefs/tasks/frontier-dependency-ledger.md`.
- **Next:** `cor-pure-geometric-braids-are-the-fundamental-group-of-ordered-configurations`
  (level 5, A page). Its proof must use the just completed common-basepoint
  theorem and the precise kernel/action conventions; recompute levels if that
  dependency audit repairs an edge.

## Checkpoint — level 5 corollary

### `cor-pure-geometric-braids-are-the-fundamental-group-of-ordered-configurations`

- **Scaffold audit and repair:** accepted only after adding the direct inputs
  omitted by the proposed scaffold: `lem-a-geometric-braid-slices-to-a-configuration-loop`,
  `def-ordered-configuration-space`, `def-product-topology`,
  `lem-stacking-corresponds-to-loop-concatenation`,
  `thm-geometric-braids-form-a-group`,
  `def-induced-homomorphism-on-fundamental-groups`,
  `def-based-loops-and-fundamental-group`, `thm-fundamental-group-laws`,
  `def-kernel-and-image-of-group-homomorphism`,
  `thm-image-subgroup-and-kernel-normal`,
  `def-injection-surjection-bijection`, and
  `def-group-isomorphism-and-automorphism`. The complete direct input set is
  `thm-geometric-braids-are-the-fundamental-group-of-unordered-configurations`,
  `def-pure-braid-group-from-ordered-configurations`,
  `def-braid-group-from-unordered-configurations`,
  `def-geometric-braid-with-setwise-endpoints`,
  `def-endpoint-monodromy-of-a-configuration-loop`,
  `thm-configuration-braid-pure-braid-short-exact-sequence`,
  `lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent`,
  `lem-a-geometric-braid-slices-to-a-configuration-loop`,
  `def-ordered-configuration-space`, `def-product-topology`,
  `lem-stacking-corresponds-to-loop-concatenation`,
  `thm-geometric-braids-form-a-group`,
  `def-induced-homomorphism-on-fundamental-groups`,
  `def-based-loops-and-fundamental-group`, `thm-fundamental-group-laws`,
  `def-kernel-and-image-of-group-homomorphism`,
  `thm-image-subgroup-and-kernel-normal`, `def-injection-surjection-bijection`,
  and `def-group-isomorphism-and-automorphism`. No new item supplier was
  created; the global recomputation passed for 925 items on 60 pages (maximum
  level 18), and this corollary remains level 5.
- **Exact claim and conventions:** at the exact tuple `Q`, the inverse-loop
  isomorphism `Phi([beta]) = (iota^C_*[S(beta)])^{-1}` carries pure geometric
  classes onto `ker(pi_conf) = im(p_*)`; the quotient map identifies
  `PB_n = pi_1(F_n(D²),Q)` with that kernel. For pure `beta`, its prescribed
  coordinate path is a based ordered loop and the resulting map is
  `Psi([beta]) = (iota^F_*[z_beta])^{-1}`. Under the local convention
  `z_j(1)=q_{pi_geo(beta)(j)}`, the monodromy label record is
  `e=pi_geo(beta)=sigma^{-1}`; therefore the raw sliced loop has monodromy
  `pi_geo(beta)^{-1}`, and inversion in `Phi` restores `pi_geo(beta)`. The
  `gamma`-above-`beta` stacking convention slices as `[S(beta)][S(gamma)]`,
  so the two-sided inverse of `ba` is `a^{-1}b^{-1}` in the displayed order.
- **Source reading and qualifications:** the local endpoint definition's full
  unique-lift and inverse-label passages were reread, together with the full
  short exact sequence statement and its kernel identification. González-Meneses,
  *Basic results on braid groups*, §§1.1–1.3, printed pp. 3–5, was reread for
  the configuration-space model; §2.1, equation (2.1), printed p. 11, was
  reread for the pure-kernel claim. These are corroboration; the fixed-disc
  basepoint, quotient square, inverse convention, and product order are proved
  from the exact local interfaces listed above. Birman–Brendle, *Braids: A
  Survey*, §1.1, author manuscript pp. 3–4, was reread. Its passage describing
  a general unordered loop lift as ending at the original ordered tuple is
  false for nonpure loops; the proof here does not use it. No unresolved source
  or mathematical uncertainty remains for this corollary.
- **Boundary and choice audit:** steps 6.1 and the contract treat `n=0` and
  `n=1`; the two implications in the pure/kernel equivalence are both proved
  in step 2.1. The fixed tuple and coordinate paths are given, the lift from
  `Q` is unique, and `p_*` is injective, so no choice principle, arbitrary
  ordering, representative, or basepoint path is used.
- **Decision and checks:** `verification.precheck: pass`; explicit-path
  precheck passed (1/1), rendercheck passed (1/1 with no errors/warnings),
  strict selected proof-contract check passed (1/1, zero errors/warnings), and
  the run-wide item-dependency-level recomputation passed (925 items, 60 pages,
  maximum level 18). Coverage already marks this item `included`. The repaired
  item decision is recorded with confidence `1` and all 19 direct dependencies
  examined. The pair scope receipt remains current: scope hashing covers page
  claims/inventory and is unchanged by the dependency repair; the scope check
  has no outstanding work for this pair (four unrelated pair reviews remain
  open run-wide).
- **Pre-splice mismatch:** the BG-3 design row gives only the unordered braid
  theorem and the ordered pure-braid definition as inputs. The repaired
  manifest also declares the endpoint monodromy and inverse-label convention,
  slice lift, quotient/inclusion square, group and kernel laws, product order,
  and bijection/isomorphism interfaces above. Shared plan prose remains
  untouched for Step 4.
- **Source qualification:** `def-endpoint-monodromy-of-a-configuration-loop`
  says that the point in terminal coordinate position `i` has original label
  `e_alpha(i)`. The equation `e_alpha=sigma_alpha^{-1}` is consistent with its
  coordinate permutation action and is used exactly as defined here; the
  source's adjacent informal wording remains a suspicion only, not a confirmed
  defect. The owner has already been informed in the dispatch report; no
  published file was edited.
- **Cross-batch input:** no new cross-batch pair supplier was introduced; the
  existing batch-24 input remains `[]` and the sibling rows in
  `briefs/tasks/frontier-dependency-ledger.md` are preserved.
- **Related structural repair:** to let the strict contract quote the completed
  level-4 theorem from its claim section, changed only its heading from
  `## Theorem` to the schema's `## Statement`. Its mathematical text is
  unchanged. Explicit precheck, rendering, and its strict contract passed;
  its repaired decision was refreshed against all 13 dependencies.
- **Next:** `prop-geometric-endpoint-permutation-equals-covering-monodromy`
  (level 5, A page). The proof above derives monodromy from the earlier local
  definition; it does not rely on that later proposition.

## Checkpoint — level 5 proposition

### `prop-geometric-endpoint-permutation-equals-covering-monodromy`

- **Scaffold audit and repair:** the proposed raw-slicing equation applied
  `pi_conf` to `[S(beta)]` before mapping that class into its stated domain
  `B_n^conf=pi_1(C_n(D²),[Q])`. Repaired the claim to write
  `pi_conf(iota^C_*[S(beta)])=pi_geo([beta])^{-1}` explicitly, followed by
  `pi_conf(Phi([beta]))=pi_geo([beta])`. Added the eight omitted direct inputs:
  `lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent`,
  `def-induced-homomorphism-on-fundamental-groups`,
  `def-ordered-configuration-space`, `def-product-topology`,
  `thm-geometric-braids-form-a-group`,
  `def-based-loops-and-fundamental-group`, `thm-fundamental-group-laws`, and
  `def-motion-of-an-unordered-point-configuration`. The complete 12 direct
  dependencies are those eight plus
  `thm-geometric-braids-are-the-fundamental-group-of-unordered-configurations`,
  `def-endpoint-monodromy-of-a-configuration-loop`,
  `def-geometric-braid-with-setwise-endpoints`, and
  `lem-a-geometric-braid-slices-to-a-configuration-loop`. No new local supplier
  was needed. The run-wide dependency check passed for 925 items on 60 pages,
  maximum level 18; this proposition remains level 5.
- **Exact argument and conventions:** the prescribed coordinate tuple is a
  path in `F_n(int D²)` by coordinate continuity and pairwise distinctness.
  The inclusion/quotient square makes `iota^F o z_beta` a lift from `Q` of the
  closed-disc image of the raw slice, hence it is the unique lift. The terminal
  coordinate convention `z_j(1)=q_{pi_geo([beta])(j)}` makes the endpoint
  record `e=pi_geo([beta])`; the published left-action convention has
  `e=sigma^{-1}`, so raw monodromy is `pi_geo([beta])^{-1}`. Since
  `Phi([beta])` is the inverse loop and `pi_conf` is a homomorphism, its
  monodromy is `pi_geo([beta])`. The formulas apply to `n=0` (one empty braid
  and `S_0` trivial) and `n=1` (both permutation targets trivial).
- **Source reading and qualifications:** the full local monodromy-definition
  passages on unique lifting, the endpoint action and `e=sigma^{-1}` were
  reread, as were the geometric endpoint definition, the slice proof, the
  fixed-basepoint isomorphism proof, and the inclusion/quotient-square proof.
  González-Meneses, *Basic results on braid groups*, §§1.1–1.3, printed
  pp. 3–6, was reread for its ordered/unordered configuration model and strand
  interpretation. Birman–Brendle, *Braids: A Survey*, §1.1, author manuscript
  pp. 3–5, was reread. Its statement that a lift of a general unordered loop
  ends at its starting ordered tuple is false for nonpure loops and is not
  used. The endpoint computation here is derived from the local covering
  definition. No source or proof uncertainty remains for the proposition.
- **Boundary and choice audit:** step 3.1 checks the empty and one-strand
  cases. Step 1.1 checks the common basepoint, unique lift, and terminal
  labels. No iff claim is present, and no arbitrary lift, ordering,
  representative, or connecting path is selected; AC is not used.
- **Decision and checks:** `verification.precheck: pass`; explicit-path
  precheck passed (1/1), rendercheck passed (1/1 without errors/warnings), the
  strict selected contract passed (1/1, zero errors/warnings), and the global
  dependency-level check passed. Coverage already marks the item `included`.
  The current owner `proceed` receipt binds the corrected claim inventory at
  hash `4f50cefacc4fead8411a4826340dbf666411565782dea8b65e0e3fc94f892731`.
  `record-item repaired confidence 1` is current in
  `research/frontier-36-complete-step3b-review-prop-geometric-endpoint-permutation-equals-covering-monodromy.json`.
  The pair-wide checks are current as reported in the dispatch handoff.
- **Pre-splice mismatch:** the BG-3 row in `research/plan-braid-groups-track.md`
  lists only the unordered braid theorem and endpoint-monodromy definition.
  The repaired manifest adds the geometric endpoint interface, slice path,
  quotient/inclusion square, induced map, ordered path topology, and group
  inverse law. The generated plan statement also leaves the raw-loop inclusion
  implicit. Shared plan prose remains untouched for Step 4 reconciliation.
- **Cross-batch input:** no new cross-batch supplier was introduced; batch 24's
  cross-batch dependency input remains `[]`, preserving the sibling rows in
  `briefs/tasks/frontier-dependency-ledger.md`.
- **Next:** `thm-geometric-and-configuration-braid-models-are-canonically-isomorphic`
  (level 6, A page). Recheck this completed proposition as a provisional local
  dependency; do not use the theorem or the level-6 example to justify it.

## Checkpoint — level 6 theorem

### `thm-geometric-and-configuration-braid-models-are-canonically-isomorphic`

- **Scaffold audit:** accepted. Its three declared direct suppliers are the
  fixed-`Q` configuration isomorphism theorem, the pure/ordered corollary, and
  the endpoint/monodromy proposition. All three were reread before this
  packaging theorem was authored. In particular, the proposition's corrected
  inclusion-typed claim and its inverse endpoint-label convention were
  rechecked as a provisional supplier: its explicit-path precheck, renderer,
  and strict contract all pass, while its own item decision remains blocked
  solely by the stale owner scope hash recorded above. No supplier or new local
  result was added. The run-wide dependency-level check passed for 925 items
  on 60 pages (maximum level 18); this theorem remains level 6.
- **Exact claim and maps:** at the exact explicit tuple `Q`, the inverse-loop
  slicing map `Phi([beta])=(iota^C_*[S(beta)])^{-1}` is the group isomorphism
  `G_n -> B_n^conf`. Its restriction sends the pure subgroup onto
  `ker(pi_conf)=im(p_*)`; composing with `p_*^{-1}` gives
  `Psi([beta])=(iota^F_*[z_beta])^{-1}` from pure geometric braids to `PB_n`.
  The square with vertical maps `pi_geo`, `pi_conf` and bottom identity on
  `S_n` commutes. No arbitrary basepoint path or Artin-presentation claim is
  made.
- **Source reading and qualifications:** the three local suppliers are the
  load-bearing evidence. Their exact statements and completed proofs were
  reread; they already provide the basepoint, product convention, group
  isomorphism, pure kernel identification, coordinate formula, endpoint
  convention, and zero/one-strand cases. The earlier source qualification
  remains: Birman–Brendle §1.1, printed p. 3 (PDF page 4), incorrectly describes
  a general unordered-loop lift as returning to its starting ordered tuple;
  this theorem relies on the local inverse-label proposition instead. No
  mathematical uncertainty remains in the packaging step.
- **Boundary and choice audit:** the component claims explicitly include
  `n=0` and `n=1`; the common basepoint remains `Q`, and all component maps
  use specified loops and their unique lifts. There is no iff statement beyond
  the pure/kernel identity inherited from the corollary, which supplies both
  directions. No AC is used.
- **Decision and checks:** `verification.precheck: pass`; explicit-path
  precheck passed for all four earlier/current items (4/4), rendercheck passed
  for all four (4/4, no errors/warnings), selected strict contracts passed
  for all four (4/4, zero errors/warnings), and item-dependency-levels passed
  globally. Coverage already marks this theorem `included`. Its scaffold was
  accepted and `record-item accept confidence 1` is current in
  `research/frontier-36-complete-step3b-review-thm-geometric-and-configuration-braid-models-are-canonically-isomorphic.json`.
  The three supplier claims and package proof were rechecked at the current
  owner-approved scope.
- **Pre-splice mismatch:** the BG-3 design row in
  `research/plan-braid-groups-track.md` lists only the unordered braid theorem
  as this theorem's prerequisite. The repaired/retained manifest depends also
  on the pure/ordered corollary and the endpoint/monodromy proposition, which
  supply two additional clauses in the claim. Keep this difference for Step 4;
  shared plan prose remains untouched.
- **Cross-batch input:** no cross-batch pair supplier was introduced; preserve
  the existing batch-24 input and sibling rows.
- **Next:** `ex-a-pure-full-twist-as-an-ordered-configuration-loop` (level 6,
  B page), whose displayed ordered path must be calculated and checked against
  the pure map above.

## Checkpoint — level 6, final B-page item and dispatch handoff

### `ex-a-pure-full-twist-as-an-ordered-configuration-loop`

- **Scaffold audit and repair:** the strategy supplied a two-stage isotopy
  from the stacked diamond braid to the displayed round loop. I checked its
  coordinate conventions against the published half-twist and stacking
  definitions, and wrote out the quadrant-by-quadrant nonvanishing argument,
  endpoint checks, continuity, and disk bounds in the proof. The strategy was
  a route, not proof text. The proof contract already listed all used inputs;
  four of them were missing from this item's batch-manifest dependency row.
  Added `lem-complex-conjugation-and-modulus-laws`,
  `thm-quarter-turn-values-and-shift-formulas`,
  `cor-pi-is-the-first-positive-sine-zero`, and
  `lem-continuity-is-local-and-pastes` so the manifest, item, and contract
  agree. Recomputed the run order: the item remains level 6 and last in this
  pair's assigned order.
- **Exact claim and calculation:** with $h=1/12$, $Q=(-h,h)$, and
  $\omega(t)=\exp(2\pi i t)$, the path
  $\eta(t)=(-h,-h+2h\omega(t))$ is a loop in
  $F_2(\operatorname{int}D^2)$: its coordinate difference is nonzero and
  $|-h+2h\omega(t)|\le3h=1/4<1$. The orbit loop has unique lift $\eta$, so
  its trace is pure and its endpoint permutation is the identity. For the
  stack $\sigma_1\star\sigma_1$, the second-minus-first coordinate is
  $D_0(t)=-2\rho(2t)$ on the lower half and $2\rho(2t-1)$ on the upper half.
  On the four quarter intervals, $D_0$ and $2h\omega$ lie in the same
  successive closed quadrants, are both nonzero, and have modulus at most
  $2h$. Their straight interpolation therefore stays nonzero and yields an
  isotopy to $(-h\omega,h\omega)$. The explicit centre interpolation
  $C_s(t)=s(-h+h\omega(t))$ then moves that pair to $\eta$; its coordinate
  difference remains $2h\omega(t)$ and both coordinates have modulus at most
  $3h<1$. Pasting the isotopies gives
  $[\beta_\eta]=[\sigma_1\star\sigma_1]=[\sigma_1]^2$. Applying the pure
  isomorphism gives
  $\Psi([\beta_\eta])=(\iota^F_*[\eta])^{-1}$ with the fixed basepoint and
  product conventions.
- **Sources and dependencies:** all 22 direct dependencies in the manifest
  were examined and are listed in the contract. The completed local half-twist,
  stacking, group, trace, configuration, topology, exponential, modulus,
  trigonometric, and pasting items supply the proof inputs. González-Meneses,
  *Basic results on braid groups*, §1.2, printed pp. 4–5, is contextual; the
  exact isotopy and its bounds are proved locally. Birman–Brendle,
  *Braids: A Survey*, §1.1, printed p. 3 (PDF page 4), was reread at the
  configuration-lift passage; its overbroad lift-return sentence is not used.
- **Boundary and choice audit:** the statement fixes $n=2$; zero and one
  strands are inapplicable, and the zero/noncollision, degenerate, and endpoint
  cases are checked by the explicit formulas. All paths, lifts, and isotopies
  are specified; no Axiom of Choice is used. The pure-map inverse is included
  in the proof and contract.
- **Decision and checks:** `verification.precheck: pass`; coverage marks the
  item included; its contract records scaffold disposition `repaired` and all
  22 examined dependency IDs. Pair-wide checks passed after the manifest and
  page repairs: explicit-path precheck (13 proof-bearing items, 0 failures),
  rendercheck (16 item/page files, no errors or warnings), content policy (14
  scoped items, 0 errors/warnings), and strict contracts (14/14, 0
  errors/warnings). Run-wide item dependency levels passed (925 items across
  60 pages, maximum level 18); `validate-plan research/plan-spec.json` exited
  0 with no cycles, forward references, B-page dependencies, or unresolved
  IDs among pages with item lists. It notes that 379 planned pages still have
  no item list.
- **Pre-splice mismatch:** the BG-3 example row lists only the pure-braid
  corollary. The manifest additionally lists
  `def-elementary-geometric-half-twist`,
  `prop-stacking-of-geometric-braids-is-well-defined`,
  `def-ordered-configuration-space`, `def-product-topology`,
  `def-subspace-topology-top`, `def-geometric-braid-with-setwise-endpoints`,
  `def-braid-isotopy-relative-top-and-bottom`,
  `def-unordered-configuration-space`,
  `def-motion-of-an-unordered-point-configuration`,
  `lem-a-configuration-loop-traces-a-geometric-braid`,
  `thm-geometric-braids-form-a-group`,
  `lem-vector-operations-are-continuous-in-a-normed-space`,
  `lem-complex-conjugation-and-modulus-laws`,
  `thm-complex-exponential-is-entire-with-derivative-itself`,
  `cor-complex-differentiability-implies-continuity`,
  `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`,
  `thm-complex-exponential-addition-and-real-extension`,
  `thm-sine-cosine-signs-monotonicity-and-ranges`,
  `thm-quarter-turn-values-and-shift-formulas`,
  `cor-pi-is-the-first-positive-sine-zero`, and
  `lem-continuity-is-local-and-pastes`. Keep this actual dependency set for
  Step 4; shared plan prose remains untouched.

## Pair handoff

- **Authored pages:** added draft A and B library pages at
  `library/braid-groups/braids-as-fundamental-groups-of-configuration-spaces.md`
  and its `-examples.md` companion. Their frontmatter item/example inventories
  match the 10 A-page and 4 B-page manifest entries. All 14 assigned item files
  are authored and included in coverage.
- **Completed IDs in dispatch order:**
  `def-motion-of-an-unordered-point-configuration`,
  `lem-a-configuration-loop-traces-a-geometric-braid`,
  `lem-a-geometric-braid-slices-to-a-configuration-loop`,
  `lem-path-homotopy-traces-braid-isotopy`,
  `lem-stacking-corresponds-to-loop-concatenation`,
  `cex-a-crossing-diagram-without-height-monotonicity-does-not-define-a-configuration-loop`,
  `cex-forgetting-labels-can-close-a-nonlooping-coordinate-path`,
  `lem-slicing-and-tracing-are-mutually-inverse-on-classes`,
  `ex-a-half-twist-loop-traces-the-standard-generator`,
  `thm-geometric-braids-are-the-fundamental-group-of-unordered-configurations`,
  `cor-pure-geometric-braids-are-the-fundamental-group-of-ordered-configurations`,
  `prop-geometric-endpoint-permutation-equals-covering-monodromy`,
  `thm-geometric-and-configuration-braid-models-are-canonically-isomorphic`,
  `ex-a-pure-full-twist-as-an-ordered-configuration-loop`.
- **Decision gate closed (history preserved):** the local repackaging of
  `prop-geometric-endpoint-permutation-equals-covering-monodromy` once left the
  A-pair scope hash at
  `4f50cefacc4fead8411a4826340dbf666411565782dea8b65e0e3fc94f892731` while
  the then-current owner `proceed` receipt named
  `a3978f223189e0af8835b673f763b29790b383e5b2c625b39b0240fb140bdb55`; six
  item audits were held by that stale scope. The owner then recorded a current
  `proceed` scope receipt for hash
  `4f50cefacc4fead8411a4826340dbf666411565782dea8b65e0e3fc94f892731` at
  `2026-09-28T09:01:01.423Z`, and the six remaining audits were recorded at
  `2026-09-28T09:14–09:15Z`. Re-checked on disk at the current content state:
  all fourteen item decisions are present, current and closed
  (`step3-decisions check --phase final` lists no work row for either page of
  this pair). No owner stamp, judge stamp or escalation receipt was fabricated.
- **Owner authoring direction:** read in full. It adds no braid-specific
  supplier obligation beyond this assigned BG-3 pair. No new local supplier
  or cross-batch dependency was added; batch 24's cross-batch input remains
  `[]`, and sibling rows in the shared dependency ledger are preserved.
- **Published concern for owner review (re-examined, no confirmed defect):**
  `def-endpoint-monodromy-of-a-configuration-loop` on
  `ordered-and-unordered-configuration-spaces` has the endpoint formula
  $\widetilde\alpha(1)_i=q_{e_\alpha(i)}$, followed by the gloss “the point
  standing at position $i$ at the end of the lifted motion is the one that
  carried label $e_\alpha(i)$ at the start.” Reading “position” as the tuple
  coordinate position fixed by the immediately preceding clause (“reading the
  endpoint tuple position by position”) the gloss is correct: coordinate slot
  $i$ at time $1$ holds $q_{e_\alpha(i)}$, which at time $0$ occupied slot
  (carried label) $e_\alpha(i)$. Reading “position $i$” spatially as the base
  point $q_i$ would instead give the inverse label $e_\alpha^{-1}(i)$, so the
  sentence carries a genuine ambiguity for that reading. Current disposition:
  no mathematical defect in the displayed equation, in $e_\alpha
  =\sigma_\alpha^{-1}$, or in its use by this pair's items (whose proofs were
  re-derived from the slot reading). Residual risk is presentational only;
  optional clarification for the owner: “the strand that starts at
  $q_{e_\alpha(i)}$ ends in coordinate position $i$.” No supplier is required
  and nothing is blocked. This supersedes the earlier “suspected
  inverse-label error” reading, which arose from the spatial reading of
  “position”.
- **External-source qualification:** Birman–Brendle, *Braids: A Survey*,
  §1.1, printed p. 3 (PDF page 4), says an arbitrary loop in the unordered
  configuration space lifts to a path in the ordered space with both endpoints
  the original tuple. This fails for nonpure loops, whose lifts end at a
  permuted tuple; the source's surrounding statement is thus overgeneralized.
  Confidence 1. The local proofs use unique path lifting and the endpoint
  permutation instead. This is an external-source issue, not a required local
  supplier or a claim consumed as proof.

## Continuation verification — author resume, 2026-09-28

This dispatch (`f174ec97bd9c0ebf`) continues the same pair-author work after
the owner's Step-3b pause and profile switch. Everything below was rechecked
against the current on-disk content state, not against the earlier summaries.

- **Resume reading:** `CLAUDE.md`, `README.md`, `SCHEMA.md`, the owner
  authoring direction, the BG-3 design rows in
  `research/plan-braid-groups-track.md`, the batch manifest, coverage,
  contracts and both pages, all fourteen authored item files, and the
  load-bearing published suppliers
  (`def-geometric-braid-with-setwise-endpoints`,
  `def-elementary-geometric-half-twist`,
  `def-braid-isotopy-relative-top-and-bottom`,
  `prop-stacking-of-geometric-braids-is-well-defined`,
  `def-endpoint-monodromy-of-a-configuration-loop`,
  `thm-configuration-braid-pure-braid-short-exact-sequence`,
  `lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent`,
  `def-ordered-configuration-space`, `def-unordered-configuration-space`).
- **Independent spot-checks at resume:** (a) the trace/slice/isotopy chain
  including the covering-lift and homotopy-lifting interfaces; (b) the
  stacking-formula reversal with the lower-braid permutation; (c) the
  two-strand full-twist interpolation, re-derived quadrant by quadrant (on
  each quarter interval $D_0$ and $D_1=2h\omega$ lie in the same closed
  quadrant, convexity keeps the straight interpolation there, and no closed
  quadrant contains a pair of opposite nonzero vectors); (d) the folded-arc
  witness (embeddedness of the three segments, interior disk bounds, and the
  four distinct points at height $1/2$); (e) both endpoints of the
  label-forgetting witness; (f) the endpoint/monodromy inverse convention
  $e_\alpha=\sigma_\alpha^{-1}$ and its propagation into the pure/ordered
  corollary and the packaging theorem. No mathematical gap was found.
- **Checks actually run on the current state:** explicit-path precheck on the
  13 proof-bearing items (13 checked, 0 failing); rendercheck on the 14 items
  plus 2 pages (16 files, no errors or warnings); content-policy on the batch
  24 manifest (14 scoped items, 0 errors, 0 warnings); strict proof-contract
  check on the batch 24 contracts (14/14 checked, 0 errors, 0 warnings);
  `item-dependency-levels check --run frontier-36-complete` (926 items over 60
  pages, maximum level 18); `validate-plan research/plan-spec.json
  --max-items 100` (exit 0; the 379 planned pages without item lists are the
  expected unfinished suppliers); coverage checklist on batch 24 (0 errors,
  1 low-yield warning: the B page scaffolds 4 of 12 harvested rows, whose
  declines now carry decisions); `manifest-deps` on batch 24 (14 items, 0
  errors); `source-fetch-check --coverage` on batch 24 (4/4 sources
  fetch-verified, 0 drops); `author-check.mts frontier-36-complete 24` (exit
  0, fingerprint `c411bcbb31a48081…` unchanged from the pre-resume receipt);
  `scope-decisions check --group b` (3 declines, 0 errors);
  `step3-decisions check --phase scope` (this pair closed) and `--phase final`
  (no work row for either page of this pair).
- **Scope-decline decisions recorded at resume:** in
  `research/frontier-36-complete-alpha-b-scope-decisions.json`, all three
  batch-24 declines were refreshed and then decided `stands` with
  item-specific evidence: the two BG-4 destinations (Birman–Brendle §1.3
  Theorem 1 mapping-class isomorphism; González-Meneses §1.4 boundary-fixed
  mapping-class interpretation) and the BG-6 destination (Birman–Brendle
  §1.2 Artin and Birman–Ko–Lee presentations). Each destination is a later
  planned page (plan orders 735 and 739 against this page's 733) and no
  authored item on this pair consumes a declined result.
- **Cross-batch input:** `research/frontier-36-complete-batch-24.cross-batch-dependencies.json`
  remains `[]`, verified against the dependency closure: every out-of-pair
  dependency of the fourteen items is an already-published item from earlier
  runs, and no sibling pair shares batch 24.
- **Unrelated debt observed, not touched:** the repo-wide `depcheck` currently
  reports 12 errors, all in other pairs' files (missing B-page items on
  `finite-proper-and-projective-morphisms-examples` and four B-leaf
  dependencies on Fredholm/trace-class, random-walk, schemes and series
  pages). None concerns this pair; they remain for their owners.
- **Open obligations after resume:** none for this pair. The pre-splice plan
  mismatches listed above remain the Step-4 reconciliation input, and the
  published wording-ambiguity note on
  `def-endpoint-monodromy-of-a-configuration-loop` remains a
  presentational item for the owner; neither blocks this dispatch.
