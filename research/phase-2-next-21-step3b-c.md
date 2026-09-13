# Step 3b group c — author checkpoint and handoff

Run: `phase-2-next-21`  
Role: `alpha-high`  
Label: `step3b-c-373d3263e601ae3f`  
Owned batches: 2, 3, 1  
Owned A pages: `reflexivity-and-eberlein-smulian` (lead), plus integration and certification for the helper-owned Banach--Alaoglu, tempered-distribution, and ergodic pairs.

## Live checkpoint — 2026-09-13 12:55 AEST

The repository instructions, schema, active-run status, Step-3a group review, all four pair scope receipts, the complete owner authoring direction, batch manifests/coverage/notes, and the three helper tasks have been read. The owner has renewed `proceed` for the current FA-10 scope. Do not restore the stale Step-1 or Step-3a claims that FA-10 remains held.

The lead-owned FA-10 pair is authored through `thm-bishop-phelps`; the existing item files, exact manifest promises, proof-contract entries, and recorded decisions must be preserved and checked rather than re-authored. Owner-resolved items `thm-milman-pettis` and `lem-james-norm-attainment-compactness-criterion` must not receive duplicate author decisions. The normal item decisions already on disk through `thm-bishop-phelps` are retained. The next item in manifest order is `thm-separable-dual-implies-separable-primal`, followed by its corollary, the Clarkson lemma and its corollary, then the six B-page items and both FA-10 pages.

FA-10 conventions and obligations retained from the current manifest and owner direction:

- `thm-a-banach-space-is-reflexive-iff-its-dual-is-reflexive` and `thm-quotients-of-reflexive-spaces-are-reflexive` assume relative Hahn--Banach and `AC_omega`; their exact uses are the selected published closedness/completeness interfaces.
- The bounded-sequence criterion and `cor-ell-one-is-not-reflexive` carry ultrafilter lemma + DC + HB exactly through compact-unit-ball/Eberlein--Smulian.
- `thm-milman-pettis` carries HB + `AC_omega`; the owner has already recorded its current repaired receipt.
- James's noncompactness lemma remains real and assumes ultrafilter lemma + DC + HB. The compactness criterion is the owner-read DC+HB convex-block proof with the ultrafilter-lemma nonreflexive consequence; its owner repaired receipt is current.
- The source-only complex Bishop--Phelps boundary remains a `proved_here: false` remark and cannot become a supplier.
- The two Hilbert examples are now locally proved from the published inner-product page named by the B-page prerequisite, so the stale Step-1 relocation request is superseded by Step 3a's current sufficient decision.

The owner reports three host-side Sol/xhigh helpers for c-1 Banach--Alaoglu, c-2 tempered distributions, and c-3 ergodic theorems. Do not duplicate-launch them. Their item/page files are exclusively helper-owned until a completed helper report/result is present. The lead alone updates shared batch JSON, contracts, decisions, dependency inputs and this report.

## Item checkpoints

### `thm-separable-dual-implies-separable-primal`

- Claim/conventions: under explicit `AC_omega` and relative HB, norm
  separability of the continuous dual of a real or complex normed space implies
  norm separability of the space. Completeness is not used. The proof uses
  rational coefficients over the reals and Gaussian-rational coefficients over
  the complexes.
- Source locators read completely: Brezis, Section 3.6, printed pp. 72--74,
  Theorem 3.26 and Corollary 3.27 (physical PDF pp. 82--84); Bühler--Salamon,
  Theorem 2.73(i), printed p. 93. Brezis supplies the real Banach-space
  almost-norming/annihilator proof; the authored proof checks the normed-space
  and complex extensions directly.
- Dependencies examined: `def-dual-space-of-a-normed-space`,
  `def-separable-space`, `thm-relative-hahn-banach-geometric-separation`,
  `def-countable-choice`, `def-hahn-banach-extension-principle-relative`,
  `lem-countable-iff-surjection-from-n`, `thm-rationals-countable`,
  `lem-rat-embeds-dense`, `thm-product-of-countable`, and
  `thm-countable-union-of-countable`.
- Scaffold repair: confirmed that the old row omitted separability/countability
  suppliers and did not expose the relative-HB hypothesis used by annihilator
  separation. The manifest, item, and following corollary row now state and
  propagate `AC_omega` and HB, and the missing suppliers are registered.
- Proof and boundaries: `X={0}` and zero functionals are separate; every
  half-norming set is proved nonempty before the sole arbitrary countable
  selection; countability of the finite span uses the explicit product and
  countable-union suppliers; a proper closure is contradicted by HB separation,
  with real-part scaling and the complex `iM=M` step written out. Empty, one,
  degenerate, endpoint, choice, and both non-applicable iff cases are in the
  contract.
- Checks: explicit-path precheck passed; rendercheck passed; strict selected-item
  proof-contract validation passed with zero errors and zero warnings.
- Decision obligation: no item receipt was written. Because the repair changes
  the promised statement, the prior owner scope receipt
  `phase-2-next-21-step3a-owner-reflexivity-and-eberlein-smulian.json` no longer
  hashes the live pair. `step3-decisions` correctly reports an owner-held stale
  scope. The owner must inspect this exact hypothesis repair and renew `proceed`;
  only then may the author record `repaired`, confidence 1, for this item.

### `cor-separable-reflexive-space-has-separable-dual`

- Claim/conventions: under `AC_omega` and relative HB, a real or complex
  separable reflexive Banach space has norm-separable continuous dual.
- Source locators read completely: Brezis, Section 3.6, printed pp. 73--74,
  Corollary 3.27 and its complete proof; Bühler--Salamon, Theorem 2.73(ii),
  printed p. 93.
- Dependencies examined: `thm-separable-dual-implies-separable-primal`,
  `def-reflexive-banach-space`, `def-separable-space`,
  `def-countable-choice`, and
  `def-hahn-banach-extension-principle-relative`. The missing direct
  separability dependency was added to the manifest without changing the
  promised claim.
- Proof and boundaries: an at most countable dense set is transported by the
  surjective isometry `J_X` to a dense set in `X**`; the preceding theorem is
  then applied to `Y=X*`. The zero and one-dimensional cases, finite dense
  sets, positive approximation tolerance, and the exact inherited choice/HB
  use are explicit. Brezis's `L^1`/`L^infinity` warning is recorded only as
  source context, not consumed as a supplier.
- Checks: explicit-path precheck passed; rendercheck passed; strict selected-item
  proof-contract validation passed with zero errors and zero warnings.
- Decision obligation: the item is mathematically complete, but no receipt was
  written because the pair's repaired promised statements still await renewed
  owner `proceed`.

Open next action: read the complete Kuriyama--Miyagi--Okada--Miyoshi source
argument and author `lem-clarkson-inequalities-for-real-and-complex-lp` before
its uniform-convexity corollary.

### Scope renewal and completed receipts

At 2026-09-13 13:22 AEST the owner replaced the stale FA-10 receipt with
`phase-2-next-21-step3a-owner-reflexivity-and-eberlein-smulian.json`, hash
`e51491b0d7edf323e4a91b31d99921baa89ce189e81199ae29331be80a215e8c`.
Its reason explicitly reviews and accepts the repaired separability statements,
their `AC_omega`/relative-HB propagation, and the completed proofs.  The
previous two checkpoint obligations are therefore discharged.  After their
already-recorded focused checks, author receipts with decision `repaired` and
confidence 1 were written for
`thm-separable-dual-implies-separable-primal` and
`cor-separable-reflexive-space-has-separable-dual`.

### `lem-clarkson-inequalities-for-real-and-complex-lp`

- Claim/conventions: for real or complex scalar $L^p$ over an arbitrary measure
  space, the upper Clarkson inequality is proved for $p\ge2$ and the conjugate-
  exponent form for $1<p\le2$; at $p=q=2$ both are the integrated
  parallelogram equality.  No completeness or choice principle is used.
- Source locator read completely: Kuriyama--Miyagi--Okada--Miyoshi,
  *Elementary proof of Clarkson's inequalities and their generalization*,
  Lemmas 2.1--2.4 and Theorem 2.5, pp. 120--121; Lemma 3.1 and Theorems 3.2
  and 3.4, pp. 122--124.  The full seven-page article, pp. 119--125, was
  inspected; the proof reproduces rather than merely names the derivative-sign
  chain.
- Dependencies examined: `def-conjugate-exponents`, `def-real-power`,
  `def-natural-logarithm`,
  `def-complex-conjugate-real-imaginary-part-and-modulus`,
  `lem-complex-conjugation-and-modulus-laws`, `thm-real-power-laws`,
  `thm-real-power-continuity-and-derivatives`,
  `thm-natural-logarithm-laws`, `thm-logarithm-derivative-and-integral`,
  `thm-algebra-of-derivatives`, `thm-chain-rule`,
  `thm-monotonicity-from-the-derivative`, `thm-intermediate-value`,
  `thm-holder-finite-real-exponents`,
  `def-calligraphic-l-p-on-a-measure-space`,
  `def-complex-lp-and-euclidean-test-function-conventions`, both real and
  complex quotient-norm suppliers, and the order/homogeneity/additivity rules
  for the nonnegative integral.
- Scaffold repair: removed the unused forward consumer
  `def-uniformly-convex-banach-space` and registered the actual scalar-calculus,
  complex-modulus, two-coordinate Holder, $L^p$, and integration suppliers.
  The manifest statement itself is unchanged, so the current owner scope
  receipt remains valid.
- Proof and boundaries: the $p\ge2$ scalar estimate follows from the scalar
  parallelogram identity and a two-coordinate power comparison.  For
  $1<p<2$, the complete $G_1,H,G_2,G_3,\Phi$ sign argument includes explicit
  small-$t$ and near-one bounds and both endpoint values.  The complex case is
  reduced to aligned phase by monotonicity in
  $|\operatorname{Re}(b/a)|/|b/a|$.  The integral step writes out the dual
  weights in finite Holder instead of importing an undeclared vector-valued
  Minkowski theorem.  Zero scalars, $M=0$, empty/zero measure, coincident and
  opposite inputs, and the overlap $p=2$ are explicit.
- Checks/decision: explicit-path precheck passed; renderer/YAML/KaTeX check
  passed; strict selected-item proof-contract validation passed with zero
  errors and zero warnings.  An author receipt was recorded as `repaired`,
  confidence 1, with all examined dependency IDs and concrete evidence.

Open next action: author
`cor-lp-is-uniformly-convex-for-one-less-p-less-infinity`, then continue in
manifest order through the six FA-10 B-page items and both page assemblies.

### `cor-lp-is-uniformly-convex-for-one-less-p-less-infinity`

- Claim/conventions: assuming countable choice, for every measure space and
  every $1<p<\infty$, both real and complex scalar $L^p$ with their usual
  norms are uniformly convex.  The proof records the explicit Clarkson
  modulus, uses the $q=p/(p-1)$ branch for $1<p\le2$, the $p$ branch for
  $p\ge2$, and verifies that they agree at $p=2$.
- Source locator read completely: Kuriyama--Miyagi--Okada--Miyoshi, Theorem
  3.4 and the uniform-convexity conclusion on printed p. 124, together with
  the full supporting scalar and integrated argument on printed pp. 120--124.
  Coverage now has a separate row for this corollary.
- Dependencies examined: `def-countable-choice`,
  `def-norm-and-normed-space`, `def-uniformly-convex-banach-space`, the
  preceding Clarkson lemma, `def-real-power`, `thm-real-power-laws`,
  `thm-real-power-continuity-and-derivatives`,
  `thm-monotonicity-from-the-derivative`,
  `cor-exponential-reciprocal-and-positivity`, both real/complex quotient-norm
  suppliers, and both real/complex $L^p$ completeness suppliers.
- Confirmed scaffold defect and repair: the original manifest promised the
  conclusion unconditionally, but `def-uniformly-convex-banach-space` is
  explicitly a property of Banach spaces, while both published real and
  complex $L^p$ completeness interfaces assume countable choice.  The live
  manifest and item therefore now state `AC_omega`, the exact completeness and
  norm suppliers are direct dependencies, and the proof states that this is
  the sole choice use.  This statement change stales the owner scope receipt;
  the owner must inspect and renew `proceed` before an author receipt can be
  written.  No owner ruling has been invented and no item decision is recorded
  while Step 3a is stale.
- Proof and boundaries: norm homogeneity gives the half-difference lower
  bound; strict monotonicity and the iterated law for positive real powers give
  the two roots and prove each modulus positive.  The zero radicand and
  $\varepsilon=2$ give modulus one explicitly.  Empty/zero measure spaces,
  the zero Banach space, zero/coincident/opposite inputs, the overlap $p=2$,
  exclusion of $p=1,\infty$, and the exact choice boundary are in the proof
  contract.  No division by a function norm occurs.
- Checks: explicit-path precheck passed directly; renderer/YAML/KaTeX check
  passed; strict selected-item proof-contract validation passed with zero
  errors and zero warnings.

Open next action: after retaining this owner-scope obligation, continue in
manifest order with the FA-10 companion-page items, beginning with
`ex-hilbert-spaces-are-uniformly-convex`.

### `ex-hilbert-spaces-are-uniformly-convex`

- Claim/conventions: a Hilbert space is defined locally, in the statement, as
  a real or complex inner-product space complete for its induced norm.  Every
  such space is uniformly convex with
  $\delta(\varepsilon)=1-\sqrt{1-\varepsilon^2/4}$ for
  $0<\varepsilon\le2$.
- Evidence and provenance: the generated leaf example uses the complete local
  statements/proofs on the published inner-product page and the Brezis §3.7
  uniform-convexity definition already recorded in coverage.  Coverage now
  labels the parallelogram/modulus calculation as a local derivation rather
  than falsely attributing it to the Brezis passage.  No later FA-13 item is
  cited.
- Dependencies examined and scaffold repair: retained the actual inner-product
  definition but replaced the indirect standalone Cauchy--Schwarz dependency
  with the directly used induced-norm and norm-axiom suppliers; added
  `def-banach-space`, `thm-of-square-roots`, and
  `lem-of-square-monotone`.  The promise is unchanged.
- Proof and boundaries: direct real/complex expansion proves the
  parallelogram identity.  Completeness makes the induced normed space Banach;
  strict monotonicity of squaring proves the root is below one.  The zero
  Hilbert space, coincident/opposite vectors, zero radicand, $\varepsilon=2$,
  real/complex scalars, and absence of choice are explicit.  The statement is
  one-way and makes no Jordan--von Neumann converse claim.
- Checks/decision: explicit-path precheck passed directly; renderer/YAML/KaTeX
  check passed; strict selected-item proof-contract validation passed with zero
  errors and zero warnings.  The item is mathematically complete, but no
  author receipt can be written until the owner renews the FA-10 scope after
  the preceding $L^p$ corollary's statement repair.

Open next action: author `ex-reflexivity-of-ell-p-and-lp`.

### `lem-real-and-complex-c-zero-are-banach` (new local supplier)

- Reason for addition: the owned $c_0$ reflexivity examples consume the
  definition of a reflexive *Banach* space, but their original dependency rows
  supplied the sequence dualities without supplying completeness of $c_0$.
  The existing `ex-c0-is-a-banach-space` sits on another B page and cannot be
  imported because B pages are plan leaves.  A necessary A-page supplier was
  therefore added before its consumers, as authorized by the dispatch.
- Claim/conventions: for both real and complex scalars, $c_0$ with the
  supremum norm is Banach, without any choice principle.  Coordinates begin at
  zero, matching `def-c-zero-and-ell-infinity`.
- Source locator read completely: Teschl, §4.3, Problem 4.17(i), printed
  p. 118, which asks for the real completeness result.  The complex extension
  is checked directly from the published complex scalar completeness theorem;
  the proof is not attributed to the exercise text.
- Dependencies examined: `def-c-zero-and-ell-infinity`,
  `thm-reals-cauchy-complete`, `thm-complex-plane-is-complete`,
  `def-axiom-schema-of-replacement`, and `def-banach-space`.
- Proof and boundaries: each coordinate has a unique scalar limit;
  Replacement forms the graph of the resulting sequence without selecting
  from non-singleton sets.  A fixed Cauchy tail proves boundedness and uniform
  convergence, and comparison with one fixed null sequence preserves the
  $c_0$ condition.  Constant/zero sequences, a designated coordinate,
  absence of exponent endpoints, choice, and both inapplicable iff cases are
  recorded.
- Registration/checks: the item is in the A-page manifest, coverage, and
  proof-contract scope.  Explicit-path precheck and rendercheck pass, and its
  strict selected-item proof contract passes with zero errors and warnings.
  Per the dispatch's new-item rule, it is not sent through Step-3 self-review
  and receives no manually invented decision receipt.

### `ex-reflexivity-of-ell-p-and-lp`

- Claim/conventions: under `AC_omega`, arbitrary-measure real and complex
  $L^p$, and hence counting-measure $\ell^p$, are reflexive for
  $1<p<\infty$.  Real and complex $c_0$ are nonreflexive without choice.  The
  selected $\ell^1$ endpoint proof separately assumes the ultrafilter lemma,
  DC, and relative HB in addition to the statement's ambient `AC_omega`.
- Source locator read completely: Teschl, §4.3, sequence-space examples after
  Theorem 4.20, printed p. 116.  This passage states the open-range $\ell^p$
  example and identifies the canonical $c_0$ bidual image as the proper
  inclusion into $\ell^\infty$; the arbitrary-measure/complex claims use the
  stronger named local suppliers.
- Scaffold repairs: added the exact counting-measure identification rather
  than treating duality alone as an $\ell^p=L^p$ supplier; exposed
  `AC_omega` on the positive theorem; exposed ultrafilter lemma + DC + HB on
  the selected $\ell^1$ proof; and added the preceding choice-free Banach
  supplier for $c_0$.  These are statement/dependency repairs and leave the
  current FA-10 owner scope stale pending a renewed `proceed`.
- Proof and boundaries: arbitrary-measure reflexivity specializes through
  counting measure.  For $c_0$, the real and complex bilinear dualities turn
  canonical evaluation into the inclusion $c_0\hookrightarrow\ell^\infty$;
  the constant-one sequence is the explicit missing bidual element.  Empty
  and null measure spaces, the zero sequence, the constant-one witness,
  exponent endpoints, exact choice allocation, and both inapplicable iff
  cases are in the contract.  No claim about arbitrary-measure $L^1$ or
  $L^\infty$ is made.
- Checks/decision: explicit-path precheck and rendercheck pass; strict
  selected-item proof-contract validation passes with zero errors and
  warnings.  No item receipt is written while the repaired pair awaits owner
  scope renewal.

Open next action: author `cex-c0-is-not-reflexive`, reusing only A-page and
published suppliers (not the preceding B-page example).

### `cex-c0-is-not-reflexive`

- Claim/conventions: the real and complex supremum-norm Banach spaces $c_0$
  are not reflexive; under the published bilinear, no-conjugation sequence
  dualities, the canonical bidual map is the proper inclusion
  $c_0\hookrightarrow\ell^\infty$.
- Source locators read completely: Bühler--Salamon Example 2.72(iv), printed
  p. 92, including the canonical-inclusion exercise, and Teschl's final
  sequence-space example after Theorem 4.20, printed p. 116.  Both sources
  state the real example; the complex extension is derived from the published
  complex sequence-duality theorem.
- Dependencies examined/scaffold repair: added
  `lem-real-and-complex-c-zero-are-banach` because the reflexivity definition
  applies to Banach spaces, and added the directly used sequence-space
  definition.  Retained the real counting-measure duality and the separate
  complex $\ell^1$ dual theorem; the proof does not depend on the preceding B
  item.
- Proof and boundaries: canonical evaluation is computed against an arbitrary
  represented $c_0$ functional; the representing bidual sequence is exactly
  $x$.  The norm-one constant sequence is bounded but not null and witnesses
  non-surjectivity.  The zero sequence, fixed nonempty natural index set,
  fixed-norm/no-endpoint case, exact absence of choice, and both inapplicable
  iff cases are recorded.
- Checks/decision: explicit-path precheck and rendercheck pass; strict
  selected-item proof-contract validation passes with zero errors and
  warnings.  No receipt is written until the owner renews the repaired FA-10
  scope.

Open next action: author
`cex-weak-and-norm-topologies-differ-on-ell-one-despite-identical-convergent-sequences`.

### `cex-weak-and-norm-topologies-differ-on-ell-one-despite-identical-convergent-sequences`

- Claim/conventions: on infinite-dimensional real and complex $\ell^1$, the
  weak topology is strictly coarser than the norm topology even though a
  sequence converges in either topology exactly when it converges in the
  other.  The last equivalence concerns sequences only, not nets.
- Source locator read completely: Teschl §4.4, printed pp. 128--129, including
  the Schur-property example and its gliding-hump proof.  This source supports
  the sequence assertion; the strict-topology witness is an honestly generated
  local leaf argument and is not attributed to that passage.
- Dependencies examined/scaffold repair: retained
  `thm-ell-one-has-the-schur-property` and
  `def-weak-topology-on-a-normed-space`; added the directly used norm/metric
  interface, the explicit $\ell^1$ coordinate model, and finite-dimensional
  rank--nullity.
- Proof and boundaries: if the norm unit ball were weakly open, a finite basic
  weak neighborhood would lie inside it.  For $m$ defining functionals,
  rank--nullity on the span of $e_0,\ldots,e_m$ produces a nonzero common-
  kernel vector; its formula-defined norm-two multiple remains in the weak
  neighborhood.  The empty list, one functional, zero/repeated functionals,
  both scalar fields, absence of choice, and both directions of sequential
  convergence are explicit.
- Checks/decision: explicit-path precheck and rendercheck pass; strict
  selected-item proof-contract validation passes with zero errors and
  warnings.  No receipt is written while FA-10 awaits renewed owner scope.

Open next action: verify and retain the source-only
`rem-complex-bishop-phelps-for-general-convex-sets`, then author the final
norm-attaining Hilbert-space example.

### `rem-complex-bishop-phelps-for-general-convex-sets`

- Exact recorded boundary: Lomonosov constructs one complex Banach space
  $X_1$ and one closed bounded convex subset $S_1$ for which the zero
  functional is the only functional attaining its maximum modulus; because a
  support functional is nonzero, $S_1$ has no support points.  Thus the real
  general-convex-set theorem has no unrestricted complex analogue.  The local
  complex unit-ball conclusion under DC + relative HB is retained exactly and
  is not contradicted.
- Source read completely: all five pages of Lomonosov, *A Counterexample to
  the Bishop-Phelps Theorem in Complex Spaces*.  Lemmas 1--2 are on pp. 2--3,
  Theorem 1 is on pp. 3--4, and Theorem 2 and its proof are on pp. 4--5.  The
  manifest's former `pp.3-4` locator for both theorems was repaired to these
  exact page ranges.
- External prerequisites retained: the source uses a predual of $H^\infty$,
  maximum-modulus powers, a norm-preserving extension, Riesz representation on
  the maximal ideal space, and a quotient by point evaluation.  These are not
  locally reconstructed.  The item remains `proved_here: false`, includes the
  exact external-dependency record, and is load-bearing for nothing.
- Registration/checks: the item is present in the manifest, coverage, and
  proof-contract scope.  Precheck correctly finds no proof body; rendercheck
  passes, and the strict contract (with no invented local derivations) passes
  with zero errors and warnings.  No normal author acceptance is claimed for
  the external proof while the pair scope is stale.

Open next action: author `ex-norm-attaining-functionals-on-a-hilbert-space`.

### `ex-norm-attaining-functionals-on-a-hilbert-space`

- Claim/conventions: assuming `AC_omega`, every bounded scalar-linear
  functional on a real or complex Hilbert space has a unique Riesz vector and
  attains its norm on the closed unit ball; the zero functional is represented
  by zero and attains its norm everywhere on that ball.  The library's
  linear-first inner-product convention is used throughout.
- Sources read completely: Bühler--Salamon, Definition 1.41 and Theorems
  1.43--1.44, printed pp. 39--41, including the real Riesz and nearest-point
  proofs; and Teschl's Riesz variational example, printed p. 135, including
  its complex real/imaginary variation.  The local proof adapts these
  arguments and does not cite the forward FA-13 Riesz item.
- Scaffold repairs/dependencies: added the induced-norm and norm-axiom
  suppliers, Banach and dual definitions, infimum and infimum-epsilon results,
  the reciprocal Archimedean corollary, and the closed-subspace completeness
  lemma.  The declared `def-countable-choice` dependency is retained and its
  exact use exposed.
- Proof and boundaries: the kernel is proved closed by an explicit disjoint
  ball estimate.  Its affine translate has positive distance from zero.  One
  countable choice selects approximate minimizers; the parallelogram identity
  gives an explicit Cauchy estimate, completeness gives the closest point,
  and real plus `iu` variations prove orthogonality in both scalar fields.
  The representing vector then gives the exact norm and an explicit unit-ball
  maximizer.  The zero space, zero functional, trivial kernel, boundary point,
  uniqueness, and inapplicable iff directions are recorded.
- Checks/decision: after adopting the precheck's canonical dependency-layer
  numbering, explicit-path precheck passes directly; render/YAML/KaTeX passes;
  and the strict selected-item proof contract passes with zero errors and zero
  warnings.  No item receipt is written while the repaired FA-10 scope awaits
  a renewed owner decision.

Open next action: assemble and check the FA-10 A/B pages, then refresh the
pair's scope and item decisions if the owner-held scope mechanism permits it.

## Integrated checkpoint — ergodic A/B pair

The complete item-by-item mathematical checkpoints, exact locators, direct
dependency lists, boundary analyses, and repair history are preserved in
`research/phase-2-next-21-step3b-helper-c-3.md`.  I reconciled that handoff
against the newer owner direction: the helper's cylinder-readiness warning was
stale, because the current owner `ready` record for
`lem-base-b-expansion-cylinders-match-orbits-away-from-terminating-endpoints`
already covers its five direct dependencies.  The separate published A--P
analytic debt remains visible and is not represented as repaired here.

All 35 items are authored and the A/B page order matches the current manifest.
The new choice-free supplier
`lem-unit-interval-circle-is-a-nonempty-compact-metric-space` is registered in
the A page, manifest, coverage, and proof contract before the irrational-
rotation consumer.  It receives no manual Step-3 item receipt under the
auditor-authored-item rule.  The other 34 items received current `accept` or
`repaired` receipts, in manifest order, with confidence 1 and their exact
examined dependency arrays.  The repairs include the complex-$L^p$ interfaces,
the compact-metric and distance-function suppliers, exact interval-measure
uses, explicit choice propagation, and the checked rational bounds in the
square-root-two calculation.

Current checks: Batch-1 explicit-path author check passes all four components;
strict proof contract is 35/35 with zero errors and warnings; boundary audit is
280 rows with no template reuse or contradicted disposition; manifest deps are
explicit; and both pages render.  The global plan validator passes with its
pre-existing redundant-prerequisite warnings.  No pair-local cross-batch
consumer edge exists.  Next: integrate and certify the Banach--Alaoglu pair.

## Integrated checkpoint — Banach--Alaoglu/Goldstine/Krein--Milman pair

The 24 item checkpoints and complete source audit are preserved in
`research/phase-2-next-21-step3b-helper-c-1.md`.  I integrated its seven item
repairs without changing either page's promised inventory: corrected the
absolute-polar, Goldstine, and extreme-point source locators; replaced the
misleading polar “closed subspace” phrase by “closed subset”; supplied the
local-compactness interface for probability measures; and removed the B-page
dependency from the Dirac extreme-point example.  The shared coverage and
proof contracts now contain the exact Bühler--Salamon, Teschl, Hanche-Olsen,
Ball, and Fremlin locators and the current numbered steps.

All 24 items and both pages are authored in manifest order.  Current
confidence-1 decisions were recorded one item at a time: seven `repaired` and
seventeen `accept`, each carrying the exact dependency array.  Batch 2's full
explicit-path author check passes after the later FA10 integration; its strict
contract is 58/58 with zero errors and warnings.  The boundary audit is clean
after changing the empty-product disposition for
`lem-dual-ball-as-a-closed-subset-of-a-product` from inapplicable to checked:
the index set is a normed space and therefore contains zero, including when
$X=\{0\}$.  No local supplier or published-item defect was found.  Next:
finish the current FA10 decisions while preserving owner-resolved receipts.

## Integrated checkpoint — reflexivity/Eberlein--Smulian pair

Both FA10 pages now contain all 34 manifest items in prerequisite order.  The
item-by-item checkpoints above retain the exact Megginson, Teschl,
Bühler--Salamon, Brezis, Kuriyama--Miyagi--Okada--Miyoshi, and Lomonosov
locators, direct dependencies, choice allocation, proof boundaries, and local
repairs.  In particular, full AC, `AC_omega`, DC, the ultrafilter lemma, and
relative Hahn--Banach are stated only where their named suppliers require them;
the incompatible assumptions are not collapsed into an unstated common base.

The new choice-free A-page supplier `lem-real-and-complex-c-zero-are-banach`
is registered in the manifest, coverage, contract, item, and page before both
$c_0$ consumers; it receives no manual Step-3 receipt.  Seven pre-existing
current repaired receipts were preserved.  Twenty-four remaining current
items received `repaired`, confidence-1 receipts with their exact examined
dependency arrays, including the external-only, non-load-bearing Lomonosov
remark.  I did not overwrite the owner receipts for `thm-milman-pettis` or
`lem-james-norm-attainment-compactness-criterion`.  At this checkpoint the
decision checker says those two owner receipts have stale input hashes and
require a fresh owner decision; their proofs and selected/full batch checks
pass, but they are not represented here as closed.

Batch 2's explicit-path author check passes precheck, real rendering/YAML/KaTeX,
content policy, and strict proof contracts.  The full strict contract is 58/58
with zero errors and warnings; its 464-row boundary audit now has no template
reuse or contradicted disposition.  Next: certify the tempered-distributions
pair, then rerun final decision and dependency-ledger gates.

## Integrated checkpoint — tempered distributions/Fourier pair

The complete 33 item checkpoints and exact Dyatlov, Gelca, Hörmander, and
supporting local-supplier audit are preserved in
`research/phase-2-next-21-step3b-helper-c-2.md`.  I integrated every proposed
direct edge: the real-exponent $p$-series bound for polynomial-growth regular
distributions, the integral triangle inequality for parameter interchange,
the Gaussian transform for the Dirac-comb example, and the tempered Fourier
automorphism plus delta/constants table for the fundamental-solution example.
The inclusion map in
`thm-tempered-distributions-embed-continuously-in-distributions` was renamed
from reserved applied `\iota` notation to $j$, without changing its claim.

All 33 items and both pages are authored in exact manifest order.  Five items
received current `repaired` receipts and twenty-eight received `accept`, one at
a time with confidence 1 and exact examined dependency arrays.  The Fourier
normalization is consistently $e^{-2\pi i x\cdot\xi}$ with complex-bilinear
distribution pairing; all choice uses are propagated from the cited Fourier
and integration suppliers.  Arbitrary distribution products/convolutions,
unrestricted symbol division, Paley--Wiener theory, and microlocal theory remain
explicitly outside the proved interface.

Batch 3's explicit-path author check passes all four components.  Its strict
contract checks 33/33 with zero errors and one justified heuristic warning on
`cex-product-of-two-distributions-is-not-canonically-defined`: step 1.1 really
does use four facts to compute $H'=\delta_0$, while the next two steps use only
the hypothetical algebra axioms.  The warning does not identify an omitted
premise.  The 264-row boundary audit has no template reuse or contradicted
disposition.  No local supplier or published-item defect was found.  Next:
rerun current-hash author, decision, plan, and dependency-ledger checks.

## Final dispatch handoff — 2026-09-13

The four assigned A/B pairs are fully authored: 126 items and all eight page
assemblies are present in manifest order.  The two necessary local A-page
suppliers are
`lem-unit-interval-circle-is-a-nonempty-compact-metric-space` and
`lem-real-and-complex-c-zero-are-banach`.  Both are complete and registered in
their manifests, coverage files, proof contracts, items and A pages before
their consumers.  In accordance with the explicit new-item rule, neither was
given a manual Step-3 decision receipt; the driver must certify them from the
immutable pre-author baseline after this successful dispatch.

The eight completed pages are:

- `the-ergodic-theorems-of-von-neumann-and-birkhoff`
- `the-ergodic-theorems-of-von-neumann-and-birkhoff-examples`
- `banach-alaoglu-goldstine-and-krein-milman`
- `banach-alaoglu-goldstine-and-krein-milman-examples`
- `reflexivity-and-eberlein-smulian`
- `reflexivity-and-eberlein-smulian-examples`
- `tempered-distributions-and-the-fourier-transform`
- `tempered-distributions-and-the-fourier-transform-examples`

### Exact completed item IDs

Ergodic pair, 35 items:

- `def-ergodic-partial-sums-time-averages-and-invariant-l-two-subspace`
- `prop-ergodic-averages-are-well-defined-and-l-p-contractive`
- `thm-maximal-ergodic-theorem`
- `lem-sigma-finite-ergodic-oscillation-sets-have-finite-measure`
- `thm-birkhoff-ergodic-theorem`
- `thm-birkhoff-limit-identification-on-finite-measure-spaces`
- `lem-ergodic-averages-converge-in-l-p-on-finite-measure-spaces`
- `cor-birkhoff-ergodic-theorem-for-ergodic-probability-systems`
- `thm-von-neumann-mean-ergodic-theorem-in-l-two`
- `def-unique-ergodicity`
- `lem-continuous-functions-determine-borel-probabilities-on-compact-metric-spaces`
- `thm-unique-ergodicity-is-equivalent-to-uniform-ergodic-averages`
- `lem-unit-interval-circle-is-a-nonempty-compact-metric-space`
- `thm-irrational-circle-rotations-are-uniquely-ergodic`
- `def-equidistribution-mod-one`
- `thm-weyl-equidistribution-for-irrational-rotations`
- `def-canonical-base-b-expansion-and-normality`
- `lem-base-b-expansion-cylinders-match-orbits-away-from-terminating-endpoints`
- `thm-borels-normal-number-theorem`
- `thm-fair-coin-frequency-strong-law`
- `fs-birkhoff-ergodic-averages-converge-at-every-point`
- `fs-every-measure-preserving-system-has-space-mean-ergodic-limits`
- `fs-birkhoff-limit-is-always-constant`
- `fs-von-neumann-mean-convergence-implies-birkhoff-pointwise-convergence`
- `fs-weyl-equidistribution-holds-for-every-rotation-angle`
- `fs-every-real-number-is-normal`
- `fs-birkhoff-ergodic-theorem-holds-for-every-measurable-function`
- `ex-borels-binary-normality-exception-is-uncountable-and-null`
- `ex-weyl-equidistribution-for-square-root-two-initial-terms`
- `ex-rational-half-rotation-has-a-nonconstant-ergodic-average`
- `ex-kac-reciprocal-return-frequency-from-birkhoff`
- `ex-fair-coin-strong-law-from-the-shift`
- `ex-zero-point-one-zero-one-is-not-normal-in-base-two`
- `cex-nonintegrable-observable-has-divergent-ergodic-averages`
- `ex-nonergodic-half-rotation-l-two-projection`

Banach--Alaoglu/Goldstine/Krein--Milman pair, 24 items:

- `lem-dual-ball-as-a-closed-subset-of-a-product`
- `thm-banach-alaoglu`
- `def-absolute-polar-in-a-normed-dual-pair`
- `thm-weak-star-compactness-of-polar-sets`
- `thm-dual-ball-weak-star-metrizable-for-separable-predual`
- `cor-separable-banach-dual-ball-is-weak-star-sequentially-compact`
- `thm-goldstine`
- `cor-goldstine-finite-data-approximation`
- `thm-banach-dieudonne-linear-subspace-criterion`
- `def-extreme-point-and-face`
- `lem-minimizer-face-of-a-continuous-affine-functional`
- `thm-krein-milman-existence-of-extreme-points`
- `thm-krein-milman-closed-convex-hull-form`
- `def-upper-semicontinuous-real-map-on-a-topological-space`
- `cor-bauer-maximum-principle`
- `thm-milman-converse-for-compact-generating-sets`
- `cor-dual-unit-ball-has-extreme-points`
- `ex-weak-star-compactness-of-probability-measures`
- `ex-extreme-points-of-the-probability-measures-are-dirac-masses`
- `ex-extreme-points-of-the-ell-infinity-unit-ball`
- `cex-the-c0-unit-ball-has-no-extreme-points`
- `cor-c0-is-not-isometrically-a-dual-space`
- `cex-weak-star-compact-does-not-imply-weak-star-sequentially-compact`
- `rem-banach-alaoglu-versus-sequential-alaoglu`

Reflexivity/Eberlein--Smulian pair, 34 items:

- `thm-reflexive-iff-unit-ball-weakly-compact`
- `thm-a-banach-space-is-reflexive-iff-its-dual-is-reflexive`
- `thm-closed-subspaces-of-reflexive-spaces-are-reflexive`
- `thm-quotients-of-reflexive-spaces-are-reflexive`
- `lem-complex-lp-duality-from-real-lp-duality`
- `thm-reflexivity-of-lp-for-one-less-p-less-infinity`
- `def-relative-weak-compactness-and-three-sequential-notions`
- `lem-eberlein-smulian-separable-reduction`
- `lem-eberlein-smulian-metrization-on-the-relevant-dual-ball`
- `lem-eberlein-smulian-countable-compactness-closes-in-the-bidual`
- `thm-eberlein-smulian`
- `cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence`
- `def-schur-property`
- `thm-ell-one-has-the-schur-property`
- `cor-ell-one-is-not-reflexive`
- `def-uniformly-convex-banach-space`
- `lem-uniform-convexity-gives-unique-asymptotic-centers`
- `thm-milman-pettis`
- `lem-james-noncompactness-sequence`
- `lem-james-norm-attainment-compactness-criterion`
- `thm-james-reflexivity-theorem`
- `lem-bishop-phelps-support-cone-construction`
- `thm-bishop-phelps`
- `thm-separable-dual-implies-separable-primal`
- `cor-separable-reflexive-space-has-separable-dual`
- `lem-clarkson-inequalities-for-real-and-complex-lp`
- `cor-lp-is-uniformly-convex-for-one-less-p-less-infinity`
- `lem-real-and-complex-c-zero-are-banach`
- `ex-hilbert-spaces-are-uniformly-convex`
- `ex-reflexivity-of-ell-p-and-lp`
- `cex-c0-is-not-reflexive`
- `cex-weak-and-norm-topologies-differ-on-ell-one-despite-identical-convergent-sequences`
- `rem-complex-bishop-phelps-for-general-convex-sets`
- `ex-norm-attaining-functionals-on-a-hilbert-space`

Tempered-distributions/Fourier pair, 33 items:

- `def-tempered-distribution`
- `thm-finite-seminorm-bound-characterizes-tempered-distributions`
- `def-weak-and-strong-topologies-on-tempered-distributions`
- `thm-polynomial-growth-functions-define-tempered-distributions`
- `def-fourier-transform-of-a-tempered-distribution`
- `lem-fourier-transform-on-tempered-distributions-is-well-defined-and-continuous`
- `thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions`
- `thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms`
- `def-convolution-of-a-tempered-distribution-with-a-schwartz-function`
- `def-dirac-comb`
- `thm-unit-lattice-dirac-comb-is-fourier-invariant-in-tempered-distributions`
- `lem-test-function-inclusion-in-schwartz-space-is-continuous`
- `thm-compactly-supported-distributions-are-tempered`
- `thm-tempered-distributions-embed-continuously-in-distributions`
- `lem-smooth-polynomially-bounded-multipliers-on-schwartz-space`
- `thm-differentiation-and-polynomial-multiplication-preserve-tempered-distributions`
- `thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions`
- `thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials`
- `thm-constant-coefficient-differential-operators-become-polynomial-multipliers`
- `lem-schwartz-parameter-pairing-and-integral-interchange`
- `thm-tempered-convolution-is-smooth-with-polynomial-growth`
- `thm-fourier-transform-of-a-compactly-supported-distribution-is-a-smooth-polynomially-bounded-multiplier`
- `lem-compact-distribution-convolution-preserves-schwartz-and-tempered-spaces`
- `thm-fourier-transform-converts-allowed-tempered-convolutions-to-products`
- `ex-fourier-transform-of-dirac-and-one`
- `ex-fourier-transform-of-a-plane-wave`
- `ex-fourier-transform-of-delta-derivatives-and-monomials`
- `ex-principal-value-one-over-x-is-tempered-and-its-fourier-transform`
- `ex-dirac-comb-and-poisson-summation`
- `ex-fundamental-solution-by-division-of-a-fourier-symbol`
- `cex-product-of-two-distributions-is-not-canonically-defined`
- `cex-convolution-of-two-tempered-distributions-need-not-exist`
- `rem-paley-wiener-and-microlocal-analysis`

### Final checks actually run

- `author-check.mts phase-2-next-21 1`: pass, current fingerprint
  `cd1c4eadf53641ae3dc6984fe449ea74214c70ff2e948485786194bb57418d21`;
  precheck 31/31 proof-bearing items, rendering/YAML/KaTeX 37 files, content
  policy 35 items, strict contracts 35/35 with zero errors and warnings.
- `author-check.mts phase-2-next-21 2`: pass, current fingerprint
  `d1814234469bb4435d368dca9fad1e12692d89e0fe319cdc640089a79b3a67d7`;
  precheck 50/50 proof-bearing items, rendering/YAML/KaTeX 62 files, content
  policy 58 items, strict contracts 58/58 with zero errors and warnings.
- `author-check.mts phase-2-next-21 3`: pass, current fingerprint
  `0f68448f9be5ab66496ef53c69568fb28057c10952879a0429be651c627aa654`;
  precheck 27/27 proof-bearing items, rendering/YAML/KaTeX 35 files, content
  policy 33 items, strict contracts 33/33 with zero errors.  Its sole warning
  is the justified `shotgun-bracket` heuristic on
  `cex-product-of-two-distributions-is-not-canonically-defined`: step 1.1 uses
  F1, F2, F3 and F5 to derive $H'=\delta_0$; the subsequent steps use the
  hypothetical algebra axioms, and F4 only delimits the conclusion.
- Combined `boundary-audit.mjs` with both failure flags: 1,008 rows, 262
  `not_applicable`, no template-reuse cluster and no contradicted disposition.
- `manifest-deps.mjs` on Batches 1, 2 and 3: 126 items, zero errors.
- `coverage-checklist.mjs` on Batches 1, 2 and 3: four A-page harvests, 125
  results, zero errors and warnings.  The final audit repaired two coverage-only
  defects: the Stacks entry now uses the admitted `reference-work` kind, and
  the dropped-source alternative for `thm-eberlein-smulian` no longer lists
  Tychonoff as a direct dependency of that theorem when it is consumed through
  the preceding bidual-closure lemma.
- `validate-plan.mjs research/plan-spec.json`: pass.  Only the existing
  redundant-prerequisite diagnostics remain; there is no item cycle, forward
  reference, B-page dependency or unresolved ID in the validated item lists.
- `step3-decisions.mjs check --phase scope`: all 21 pair scopes closed at the
  current 763-item inventory, including all four owned scopes.

### Item-decision state and owner actions

There are 122 current normal or owner decisions among the 126 assigned items.
The two new suppliers above are intentionally awaiting the driver's
auditor-authored certification.  Two pre-existing owner decisions were not
overwritten and are now stale because their transitive inputs changed:

- `thm-milman-pettis`: owner receipt
  `1f37287a457502bfbb04e79c12c167978cb3f12c99cd2b2979e1fab0afa96cb2`;
  current input hash
  `077d5c76fd14b019db3ed5fbaf31e3dc19b0b5e2b67159b9678208bf868210a6`.
- `lem-james-norm-attainment-compactness-criterion`: owner receipt
  `9e5daa764e122ad5d0742954e41213ae92bd7cf4ef8d7e5649a1d3b50e9881d3`;
  current input hash
  `e205ee5ecbc3043fc0ad8dd6c3545f30f0d6e2de44ca45891c5b5924321e9873`.

Both items and their current transitive closures pass the Batch-2 precheck,
render, content-policy and strict-contract gates.  The owner must reread the
current inputs and renew each `repaired` receipt if satisfied; this author has
no authority to replace those owner receipts.  No other owned item is open.

### Cross-batch dependency reconciliation

The Batch-1, Batch-2 and Batch-3 input files are each `[]`: there is no
cross-frontier edge whose consumer belongs to an owned batch.  A fresh
`frontier-dependency-ledger.mjs refresh --require-reviewed` recomputed all 12
batch inputs but did not close because eleven consumer-owner reviews are still
absent.  One is a downstream review of the new Batch-1 supplier; the other ten
belong entirely to Batches 7 and 8:

- `cex-an-irrational-real-action-on-the-torus-that-is-free-but-not-proper` ->
  `lem-unit-interval-circle-is-a-nonempty-compact-metric-space`
- `def-adjoint-representation-of-a-lie-algebra` ->
  `def-representation-of-a-lie-algebra`
- `def-fundamental-vector-field-of-a-left-action` ->
  `thm-the-lie-group-exponential-map-is-smooth-with-identity-differential-at-zero`
- `ex-the-free-proper-integer-translation-action-on-the-line` -> `def-lie-group`
- `prop-an-ideal-integrates-to-a-connected-immersed-normal-subgroup` ->
  `cor-the-exponential-map-is-a-local-diffeomorphism-at-zero`
- `prop-an-ideal-integrates-to-a-connected-immersed-normal-subgroup` ->
  `prop-adjoint-exponential-identity`
- `prop-an-ideal-integrates-to-a-connected-immersed-normal-subgroup` ->
  `prop-adjoint-is-a-smooth-lie-group-representation`
- `thm-cartans-closed-subgroup-theorem` -> `def-baker-campbell-hausdorff-series`
- `thm-cartans-closed-subgroup-theorem` ->
  `lem-local-convergence-of-the-baker-campbell-hausdorff-series`
- `thm-cartans-closed-subgroup-theorem` ->
  `prop-exponential-scales-one-parameter-subgroups`
- `thm-continuous-homomorphisms-between-lie-groups-are-smooth` ->
  `prop-exponential-map-is-natural-for-lie-group-homomorphisms`

These rows must be reviewed by their consumer owners.  I did not edit another
group's cross-batch input merely to make the global gate green.

### Published-item report to the owner

No new published defect was discovered in these four audits.  The inherited
analytic A-P cluster remains visible because 28 assigned ergodic items consume
its interfaces directly or through their local predecessors.  This is a
confirmed prior dependency invalidation, confidence 1, rather than a new
defect claim about the authored ergodic arguments.  The three published root
items `lem-well-definedness-of-the-simple-integral`,
`prop-basic-properties-of-the-nonnegative-simple-integral` and
`prop-order-and-scalar-rules-for-the-nonnegative-integral` were repaired by the
owner on 2026-09-13, but the ledger explicitly records no independent judge and
the downstream A-P rows have not yet been revalidated.  The exact pending
published items are:

- Page `the-lebesgue-integral-and-the-convergence-theorems`:
  `def-integral-of-a-nonnegative-simple-function`,
  `def-nonnegative-lebesgue-integral`,
  `prop-the-nonnegative-integral-agrees-with-the-simple-integral`,
  `thm-simple-indefinite-integral-is-a-measure`,
  `thm-monotone-convergence-for-the-integral`,
  `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`,
  `def-integrable-real-and-complex-functions-and-their-integrals`,
  `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-fatou-lemma`,
  `thm-dominated-convergence`, and `thm-integral-triangle-inequality`.
- Page `measure-preserving-systems-and-mixing-criteria`:
  `thm-integrals-are-invariant-under-measure-preserving-maps`.
- Page `the-lp-spaces-holder-minkowski-and-riesz-fischer`:
  `def-calligraphic-l-p-on-a-measure-space`,
  `def-l-p-space-as-a-quotient-by-null-functions`,
  `thm-minkowski-inequality-for-integrals`,
  `thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space`,
  and `thm-finite-measure-l-r-includes-into-l-p-for-p-less-r`.
- Page `the-radon-nikodym-theorem-and-lebesgue-decomposition`:
  `thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures` and
  `thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality`.

Exact stable evidence is in
`research/phase-2-frontier-22-published-nonnegative-integral-foundation-audit.md`,
`research/phase-2-frontier-22-published-ergodic-lp-integral-propagation-audit.md`,
`research/phase-2-frontier-22-published-active-martingale-integral-propagation-audit.md`,
and `research/phase-2-frontier-22-published-integral-rn-propagation-audit.md`,
with current classifications in `research/published-consumer-supplier-ledger.md`
under “Nonnegative-integral foundation audit,” “Ergodic Lp integral-propagation
audit,” and “Integral and Radon--Nikodym propagation audit.”  The root evidence
was the missing zero-coefficient complement cells when refining arbitrary
finite simple-function representations, plus formerly undefined
$0\cdot(+\infty)$ homogeneity expressions.  The owner repair supplies the
finite, choice-free zero-complement refinement and splits the zero-scalar
case.  The remaining strategy is to independently validate that repair, rerun
each exact downstream proof path, retain the separate `thm-fatou-lemma`
proof-marker relocation, and only then move those index rows out of A-P.  No
new Phase-2 supplier or pair is required, and the serial reconciler—not this
group—owns the canonical published ledger update.

The 28 current authored consumers carrying that inherited obligation are:

- `def-ergodic-partial-sums-time-averages-and-invariant-l-two-subspace`
- `prop-ergodic-averages-are-well-defined-and-l-p-contractive`
- `thm-maximal-ergodic-theorem`
- `lem-sigma-finite-ergodic-oscillation-sets-have-finite-measure`
- `thm-birkhoff-ergodic-theorem`
- `thm-birkhoff-limit-identification-on-finite-measure-spaces`
- `lem-ergodic-averages-converge-in-l-p-on-finite-measure-spaces`
- `cor-birkhoff-ergodic-theorem-for-ergodic-probability-systems`
- `thm-von-neumann-mean-ergodic-theorem-in-l-two`
- `lem-continuous-functions-determine-borel-probabilities-on-compact-metric-spaces`
- `thm-unique-ergodicity-is-equivalent-to-uniform-ergodic-averages`
- `thm-irrational-circle-rotations-are-uniquely-ergodic`
- `thm-weyl-equidistribution-for-irrational-rotations`
- `thm-borels-normal-number-theorem`
- `thm-fair-coin-frequency-strong-law`
- `fs-birkhoff-ergodic-averages-converge-at-every-point`
- `fs-every-measure-preserving-system-has-space-mean-ergodic-limits`
- `fs-birkhoff-limit-is-always-constant`
- `fs-von-neumann-mean-convergence-implies-birkhoff-pointwise-convergence`
- `fs-weyl-equidistribution-holds-for-every-rotation-angle`
- `fs-birkhoff-ergodic-theorem-holds-for-every-measurable-function`
- `ex-borels-binary-normality-exception-is-uncountable-and-null`
- `ex-weyl-equidistribution-for-square-root-two-initial-terms`
- `ex-rational-half-rotation-has-a-nonconstant-ergodic-average`
- `ex-kac-reciprocal-return-frequency-from-birkhoff`
- `ex-fair-coin-strong-law-from-the-shift`
- `cex-nonintegrable-observable-has-divergent-ergodic-averages`
- `ex-nonergodic-half-rotation-l-two-projection`

There is no unresolved source uncertainty or additional mathematical
qualification in the assigned pairs.  The only open handoff actions are the
driver certifications for the two new local suppliers, the two exact owner
receipt refreshes, the eleven consumer-owned cross-batch reviews, and the
serial published-debt revalidation above.
