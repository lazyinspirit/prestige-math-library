# Batch 14 scaffold notes — Harmonic Functions and Mean Values in Rn

## Scope, plan comparison, and source record

This is a scaffold-only record for `frontier-32`, batch 14. The authorised
artifacts are this note, `frontier-32-batch-14.pages.json`, and
`frontier-32-batch-14.coverage.json`; no item, page, plan, workflow, or
published artifact has been edited.

The design block is `research/plan-pde-track.md`, PDE-3, lines 633–684. It
gives the relative label PDE-3 rather than an absolute order, so it does not
conflict with the spec's `458.003`. Its prerequisite sentence names
`mixed-partials-taylor-and-extrema`, MT-8/MT-11/MT-15, FA-24, and published
Euclidean topology/compactness material; the current spec declares
`quasilinear-characteristics-and-cauchy-kovalevskaya-examples` as the direct
predecessor. The completed Step-0 review found all required inputs in that
page's declared transitive closure and recorded `no-drift`. The manifest retains
the current spec's `requires` unchanged. It does not depend on the unscaffolded FA-24
distribution page: the narrow test-function, distributional-Laplacian, and
local-convolution definitions actually needed by Weyl's lemma are included in
this page, as the task's self-contained rule requires.

Two independent full lecture-note treatments were read in the stated ranges.
Both have harvestable tables of contents, exact HTTP(S) URLs, page locators,
and per-result dispositions in the coverage file.

- John K. Hunter, *Notes on Partial Differential Equations*, revised 18 June
  2014, [full PDF](https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf).
  Read the contents (PDF pp. 3–4); §1.6 (printed p. 8 / PDF p. 13); §1.9
  (printed pp. 12–13 / PDF pp. 16–17); §2.1 (printed pp. 20–21 / PDF pp.
  25–26); and §3.3 plus the derivative definitions at the opening of §3.4
  (printed pp. 51–53 / PDF pp. 56–58). Hunter supplies the adopted
  minus-Laplacian Poisson sign, averaged sphere/ball normalizations, radial
  mollification proof of the mean-value converse, and the distributional
  vocabulary seam.

- Armin Schikorra, *Partial Differential Equations*, version 4 December 2019,
  [full PDF](https://sites.pitt.edu/~armin/pde1_2019/pde_script.pdf). Read the
  contents (PDF p. 3); I.2 opening (printed pp. 12–13 / PDF pp. 11–12);
  I.2.2 (printed pp. 18–20 / PDF pp. 17–19); and I.2.4 (printed pp. 24–30 /
  PDF pp. 23–29). It independently treats the mean-value implications,
  weak/classical agreement, Weyl's lemma, mollification on shrunken domains,
  and the representative issue.

The source contents were read in full over those bounded ranges. The coverage
harvest retains every read section and named result with its concrete
disposition. Source-fetch stamps are not asserted in this note; they remain a
validator obligation until `source-fetch-check --stamp` writes them.

## Conventions and non-duplication decisions

- Work on an open set `Omega` of `R^n`, with `n >= 1`, and use the classical
  sign `Delta u = sum_i partial_i^2 u`; Poisson is `-Delta u = f`. Classical
  harmonic means `u in C^2(Omega)` and `Delta u=0`. Distributional harmonicity
  is a separate assertion about a distribution acting on test functions.
- The published `def-laplacian-of-a-c2-function` already defines the classical
  Laplacian and harmonicity. The new first definition therefore contributes
  only the Poisson/distributional extension; it does not mint a duplicate
  Laplacian definition.
- The published polar-surface-measure, polar-coordinate, positive-finite-ball
  measure, global ball-average, and mollifier items are reused. The new mean
  definition supplies the nonduplicate local-domain and spherical-average
  layer that the PDE proofs need. The new radial mollifier is a specialization,
  not a replacement, of the published arbitrary bump family.
- Surface averages are normalized by the polar surface measure. Ball and
  spherical averages are used only when the closed ball needed by the integral
  is compactly contained in `Omega`; all mollified identities state the
  corresponding shrunken-domain margin.
- The radial derivative is proved from the polar formula, not from the later
  general divergence theorem. The exact target is
  `M_u'(a,r) = (r/n) fint_{B(a,r)} Delta u`.
- A radial unit-mass mollifier fixes any continuous local ball-mean function:
  first differentiate its ball identity to recover the spherical identity,
  then use polar coordinates. This lemma is used both to make the continuous
  converse smooth and to make Weyl regularizations agree on overlaps.
- Weyl's lemma is an interior result. For `Delta T=0`, local radial
  regularizations are smooth and harmonic; double convolution plus the
  mean-value property identifies them on nested interiors, yielding one
  representative rather than an epsilon-dependent family. Two continuous
  representatives inducing the same regular distribution agree everywhere.
- The `n=2` plane remains in the dimension-uniform results, but holomorphic
  refinements, disc Poisson kernels, Perron theory, and conformal invariance
  stay in the published complex-analysis development. The companion's
  holomorphic-monomial example links to that development without reproving it.

## Item ledger

### A page — order 458.003

| ID | Exact claim and proposed proof route | Explicit dependencies |
|---|---|---|
| `def-distributional-harmonicity-and-poisson-equation-in-rn` | Define `C_c^infty(Omega)`, distributions, distributional derivatives/Laplacian, distributional `-Delta T=F`, and distinguish them from the published `C^2` harmonic and classical Poisson equations. | `def-laplacian-of-a-c2-function` |
| `def-spherical-averages-and-local-ball-means-in-rn` | Define translated/dilated spherical averages using the published polar measure and local ball means only on compactly contained balls; name the two mean-value properties. | `def-ball-average-operator-on-r-n`, `def-polar-surface-measure-on-the-unit-sphere`, `thm-polar-coordinates-formula-for-lebesgue-measure` |
| `lem-sphere-and-ball-measures-scale` | From polar coordinates prove `|partial B_r|=|S^(n-1)|r^(n-1)` and `|B_r|=|S^(n-1)|r^n/n`, including finite positivity. | `def-spherical-averages-and-local-ball-means-in-rn`, `thm-polar-coordinates-formula-for-lebesgue-measure` |
| `lem-radial-derivative-of-a-spherical-average` | Differentiate the parametrized sphere average and integrate radially by polar coordinates to prove the exact flux identity without a divergence theorem. | `def-spherical-averages-and-local-ball-means-in-rn`, `lem-sphere-and-ball-measures-scale`, `thm-polar-coordinates-formula-for-lebesgue-measure` |
| `thm-spherical-mean-value-property-for-harmonic-functions` | Apply the radial identity to `Delta u=0` and take the zero-radius limit. | `def-laplacian-of-a-c2-function`, `def-spherical-averages-and-local-ball-means-in-rn`, `lem-radial-derivative-of-a-spherical-average` |
| `cor-ball-mean-value-property-for-harmonic-functions` | Radially integrate the spherical identity and normalize by the established ball volume. | `def-spherical-averages-and-local-ball-means-in-rn`, `lem-sphere-and-ball-measures-scale`, `thm-spherical-mean-value-property-for-harmonic-functions` |
| `def-radial-mollifier-family-in-rn` | Fix the radial, nonnegative, unit-mass smooth bump and its rescalings required by both regularization arguments. | `def-mollifier-family-generated-by-a-unit-mass-smooth-bump` |
| `lem-radial-mollification-fixes-local-mean-value-functions` | Convert the ball property to spherical means, integrate against the radial profile, and use unit mass to prove `rho_epsilon*u=u` on the shrunken domain. | `def-radial-mollifier-family-in-rn`, `def-spherical-averages-and-local-ball-means-in-rn`, `lem-sphere-and-ball-measures-scale` |
| `thm-continuous-mean-value-functions-are-harmonic` | The preceding lemma makes the continuous function smooth; the exact second-order ball expansion has `r^2 Delta u/(2(n+2))`, which forces `Delta u=0`. | `def-laplacian-of-a-c2-function`, `def-spherical-averages-and-local-ball-means-in-rn`, `lem-radial-mollification-fixes-local-mean-value-functions`, `cor-second-order-taylor-expansion-with-the-hessian` |
| `cor-local-mean-value-property-is-enough` | Localize the small-ball argument at an arbitrary point. | `thm-continuous-mean-value-functions-are-harmonic` |
| `lem-distributional-laplacian-commutes-with-mollification` | Pair local convolution against a test function, verify the support margin, and move `Delta` through the convolution/distribution pairing. | `def-distributional-harmonicity-and-poisson-equation-in-rn`, `def-radial-mollifier-family-in-rn` |
| `thm-weyl-lemma-for-the-laplacian` | Smooth harmonic local convolutions, radial reproduction, and double convolution on nested interiors produce one unique smooth harmonic representative of a harmonic distribution. | `def-distributional-harmonicity-and-poisson-equation-in-rn`, `cor-ball-mean-value-property-for-harmonic-functions`, `lem-radial-mollification-fixes-local-mean-value-functions`, `lem-distributional-laplacian-commutes-with-mollification` |
| `cor-locally-integrable-weakly-harmonic-functions-are-smooth` | Regard the weak solution as its regular distribution and apply Weyl; retain the a.e.-equal representative convention. | `def-distributional-harmonicity-and-poisson-equation-in-rn`, `thm-weyl-lemma-for-the-laplacian` |
| `lem-derivatives-of-harmonic-functions-are-harmonic` | Commute constant-coefficient derivatives with `Delta` for the Weyl representative, then identify distributional derivatives. | `def-distributional-harmonicity-and-poisson-equation-in-rn`, `thm-weyl-lemma-for-the-laplacian` |
| `thm-uniform-limits-on-compacta-of-harmonic-functions-are-harmonic` | Pass a compactly contained ball average through locally uniform convergence and invoke the continuous converse, never differentiating the limit. | `def-spherical-averages-and-local-ball-means-in-rn`, `cor-ball-mean-value-property-for-harmonic-functions`, `thm-continuous-mean-value-functions-are-harmonic` |
| `rem-plane-harmonic-theory-is-owned-by-complex-analysis` | Bound the scope and point to the published plane mean-value and conformal-invariance items without repeating their sharper conclusions. These are navigational links, not logical prerequisites. | (none) |

### B page — order 458.004

| ID | Exact claim and proposed proof route | Explicit dependencies |
|---|---|---|
| `ex-affine-and-harmonic-polynomial-functions` | Verify every affine function and `x_i x_j` for `i != j` is harmonic by direct diagonal-second-derivative calculation. | `def-laplacian-of-a-c2-function` |
| `ex-real-and-imaginary-parts-of-holomorphic-monomials` | Exhibit both components of selected `z^m`; apply the published facts that complex polynomials are holomorphic and that the real and imaginary components of a `C^2` holomorphic function are harmonic. | `thm-complex-polynomials-and-rational-functions-are-holomorphic`, `thm-c2-holomorphic-components-are-harmonic` |
| `ex-radial-harmonic-functions-away-from-the-origin` | Compute the radial Laplacian and solve `U''+(n-1)U'/r=0`, separating `n=2`, `n>=3`, and the one-dimensional affine restriction. | `def-laplacian-of-a-c2-function` |
| `cex-harmonic-on-a-punctured-domain-need-not-extend` | For `n>=2`, use `log r` or `r^(2-n)` to show blow-up prevents a continuous/harmonic extension across the deleted point. | `ex-radial-harmonic-functions-away-from-the-origin` |
| `cex-one-centred-ball-mean-identity-does-not-force-harmonicity` | For the prescribed radius use polar moments to verify the exact quartic's one centred identity and calculate its nonzero Laplacian. | `def-ball-average-operator-on-r-n`, `thm-polar-coordinates-formula-for-lebesgue-measure` |
| `ex-distributional-harmonicity-removes-an-apparent-corner` | Contrast `|x_1|`, whose distributional Laplacian has a hyperplane singular term, with Weyl's smooth-representative conclusion. | `def-distributional-harmonicity-and-poisson-equation-in-rn`, `thm-weyl-lemma-for-the-laplacian` |

## Source-to-item support and deferred material

Hunter supports the conventions and all three proof routes: direct polar
calculation for the radial identity, radial mollification for the continuous
converse, and the test-function/distribution seam. Schikorra independently
supports the mean-value conclusions and supplies a full mollification proof of
Weyl's lemma. Its sub/superharmonic inequalities are deferred, with the
specific reason and resolvable destination, to
`maximum-principles-harnack-and-liouville-in-rn`; its Cauchy estimates are
deferred to `poisson-problems-and-interior-harmonic-estimates`. Hunter's
Lebesgue differentiation theorem is recorded as already published rather than
being silently dropped. The exact harvest rows and their item mappings are in
the coverage JSON.

## Page-size decision, limits, and validation checkpoint

The A page has 16 items and the B page has 6 items. The A page is well below
the mandatory 60-item split threshold; no split is proposed. The two inserted
radial-mollification results are necessary proof interfaces, not padding: one
fixes a local mean-value function and is used twice, while the other new
definition fixes the radial-kernel convention that published arbitrary
mollifier material does not provide.

Known authoring obligations:

- Retain the exact `r^2 Delta u/(2(n+2))` small-ball term.
- Do not invoke PDE-5's divergence theorem in the radial derivative proof.
- Do not turn a family of Weyl regularizations into a representative without
  the nested-interior/double-convolution equality argument.
- Keep `n=2` logarithmic and `n>=3` power singularities distinct; restrict the
  puncture counterexample to `n>=2`.
- Mark the one-centred quartic counterexample as an independently checked,
  non-load-bearing generated example when it is authored.
- Preserve the complex-analysis boundary: no plane Poisson/Perron/conformal
  proof is to be restated here.

Validation checkpoint (2026-09-06): `node tools/manifest-deps.mjs
research/frontier-32-batch-14.pages.json` reports 22 items, 0 normalized and
0 errors. `node tools/coverage-checklist.mjs
research/frontier-32-batch-14.coverage.json --require-destination` reports 1
page, 29 harvested results, 0 errors and 0 warnings. The whole-run
manifest-only content-policy invocation is currently blocked before it reaches
this batch by a pre-existing parse error in the non-owned
`research/frontier-32-batch-13.pages.json` (bad JSON escape at line 141,
column 75); it is not repaired here.

The batch-local command `node tools/content-policy.mjs --manifest-only
research/frontier-32-batch-14.pages.json` passes (22 scoped items, 0 errors,
0 warnings), and `node tools/validate-plan.mjs research/plan-spec.json` exits
0 with its final acyclicity/consistency result. `git diff --check` on the three
authorised artifacts also passes. The no-flag source-fetch check on 2026-09-06
passes for both exact URLs; both coverage sources carry current
`fetch_verified` receipts. After the final dependency-boundary correction, the
batch-local dependency, content-policy, coverage, and diff checks were rerun
and passed.

## Step-3 fix pass

The controlling review is
`research/frontier-32-alpha-c-step3-scaffold-review.md`, whose batch-14
verdict is sufficient. It supplies no separate numeric finding identifier for
the dependency repair below, so its stable target-item identifier is retained
verbatim rather than inventing or renumbering one.

- Finding id: `ex-real-and-imaginary-parts-of-holomorphic-monomials`.
  Disposition: applied already; no new item, page, or forward edge is needed.
  Evidence: the review's PDE-3 record identifies the missing declaration for
  the claimed complex-analysis cross-reference. The current B-page manifest
  record has explicit `deps` entries for
  `thm-complex-polynomials-and-rational-functions-are-holomorphic` and
  `thm-c2-holomorphic-components-are-harmonic`; both are published backward
  results. The B-page ledger above states the same route and does not reprove
  either result. Changed scaffold record: existing
  `harmonic-functions-and-mean-values-in-rn-examples.items`
  / `ex-real-and-imaginary-parts-of-holomorphic-monomials.deps`; it was
  already repaired when this pass began, so the manifest and coverage bytes
  require no duplicate edit.

- Finding id: `2ab49f510fb7a4d2eb66ce18e26b37ab1350da22e56bdd17db7d67728aa83ed0`.
  Disposition: stands deferred. Evidence: this is Schikorra Theorem I.2.5's
  subharmonic/superharmonic mean inequalities; the coverage record retains its
  exact locator (printed p. 18 / PDF p. 17), destination
  `maximum-principles-harnack-and-liouville-in-rn`, and result-specific reason.
  The equality/Weyl route has no dependency on that inequality. Changed
  scaffold record: none; the current coverage disposition is retained.

- Finding id: `80009ed8a4599056012a12a643e0f3bbddd9cd8e5b93a31ac0cb2e18190dce54`.
  Disposition: stands deferred. Evidence: this is Schikorra Lemma I.2.17,
  Cauchy estimates (printed pp. 25–27 / PDF pp. 25–26); the coverage record
  sends it to `poisson-problems-and-interior-harmonic-estimates` because the
  selected mean-value/Weyl proof needs only the compactly-contained
  regularisation argument. Changed scaffold record: none; the current coverage
  disposition is retained.

Source recheck: both exact PDF URLs were opened as complete documents (Hunter,
242 pages; Schikorra, 185 pages). I re-read the contents plus Hunter §§1.6,
1.9, 2.1, 3.3–3.4 and Schikorra I.2 opening, I.2.2, and I.2.4 at the precise
locators recorded in the coverage file. Their named results support the
normalised means, radial mollification on shrunken domains, the mean-value
directions, distributional/weak definitions, convolution commutation, and
Weyl regularity. The two existing `fetch_verified` receipts remain accurate.
An attempted local forced `source-fetch-check --stamp --force` could not
resolve either host (`EAI_AGAIN`); that is an environment DNS failure, not a
failed document URL, so it made no coverage change and no unverified source
claim was retained.

This supersedes the earlier checkpoint's anticipated whole-run policy block:
`node tools/content-policy.mjs --manifest-only research/frontier-32-batch-*.pages.json`
now reports 676 scoped items with 0 errors and 0 warnings. This pass also
reports: manifest dependencies, 22 items with 0 errors; coverage checklist, 1
page and 29 harvested results with 0 errors and 0 warnings; retained
source-fetch receipts, 2/2 verified; and `validate-plan research/plan-spec.json --repo . --max-items 60`, acyclic and consistent with no item-level cycle, forward
reference, B-page dependency, or unresolved-id error. The plan's
redundant-prerequisite messages remain advisory and are outside this batch.

## Step-5 authoring

Authored the two draft pages `harmonic-functions-and-mean-values-in-rn` and
`harmonic-functions-and-mean-values-in-rn-examples`, with all 22 manifest
items: the 16 A-page definitions/results/remark and the six B-page examples
and counterexamples.  The proof-bearing scope contains 18 items, recorded in
`research/frontier-32-batch-14.proof-contracts.json`; every numbered proof row
is mapped, with boundary dispositions retained there.

The source basis remains Hunter, *Notes on Partial Differential Equations*,
§§1.6, 1.9, 2.1, 3.3–3.4, and Schikorra, *Partial Differential Equations*,
§§I.2, I.2.2, I.2.4, at the exact PDF locators enumerated in the coverage file.
The items retain the intended direct polar-coordinate route (without the later
divergence theorem), the $r^2\Delta u/(2(n+2))$ small-ball coefficient, and the
nested-interior double-convolution step in Weyl's lemma.  The radial example
separates $n=2$ logarithmic and $n\ge3$ power profiles; the puncture example is
restricted to $n\ge2$.  The one-centred quartic is marked ai-generated,
non-load-bearing counterexample; the holomorphic-monomial example uses only
the declared published complex-analysis dependencies.

The design's historical/transitive prerequisite list differs from the current
manifest's declared page requirements; as directed, this was recorded without
adjudication and the current plan/spec was followed.  No claims were dropped
or narrowed beyond the planned $n\ge2$ puncture restriction.  No blockers
remain.

Checks run after canonical phase-number repair:

- `node tools/tsx-run.mjs tools/precheck.mts` with all 22 explicit item paths:
  18 proof-bearing files checked, 0 failures.
- `node tools/content-policy.mjs research/frontier-32-batch-14.pages.json`:
  22 scoped items, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/frontier-32-batch-14.proof-contracts.json --strict`:
  18/18 checked, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json --repo . --max-items 60`:
  exit 0; acyclic/consistent.  Its repository-wide redundant-prerequisite
  messages are advisory.
