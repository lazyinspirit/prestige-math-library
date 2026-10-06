# Step 3a scope review — `poisson-summation-sampling-and-lattice-duality`

- Run: `frontier-39-analysis-30` (batch 29), role alpha, label
  `step3a-pair-poisson-summation-sampling-and-lattice-duality-644c76fd5ab29c93`.
- A page: `poisson-summation-sampling-and-lattice-duality` (order 510.06509,
  category `fourier-analysis`, 17 scaffolded items).
- B page: `poisson-summation-sampling-and-lattice-duality-examples` (order
  510.06510, 5 scaffolded items); companion pointers A↔B consistent.
- Page `requires`: A = FR-1 `dirichlet-kernel-localisation-and-pointwise-fourier-convergence`,
  FR-2 `fejer-and-poisson-summability-of-fourier-series`, FR-15
  `character-groups-and-elementary-lca-duals` (all published in `library/fourier-analysis/`),
  FR-17 `pontryagin-duality-for-locally-compact-abelian-groups` (batch 27, 20 items),
  FR-18 `finite-fourier-analysis-and-the-fast-fourier-transform` (batch 28, 14 items),
  and the published `tempered-distributions-and-the-fourier-transform`
  (`library/functional-analysis/`); B = the A page.
- Decision: **sufficient**. Scope only: this review decides coverage of the
  intended subject, not item or proof correctness; it edits no scaffold, item,
  plan row or owner record.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-39-analysis-30-batch-29.pages.json` | Current A inventory (17 items) and B inventory (5 items): every statement, kind, `deps`, `design_row: FR-19`, provenance, `proved_here`, strategy, source locators; page `requires`; companion pairing |
| `research/frontier-39-analysis-30-batch-29.coverage.json` | 5 source records (Laugesen, Taylor, Sutherland, Silberman, Elkies) with locators, 39 harvested rows, dispositions and destinations |
| `research/frontier-39-analysis-30-batch-29.notes.md` | Step-1 construction record: design reconciliation, 8 recorded conflicts/notes, the 5 local additions, dependency and choice audit, checks |
| `research/frontier-39-analysis-30-batch-29.cross-batch-dependencies.json`; `research/frontier-39-analysis-30-cross-batch-dependencies.json` | Two page-scope edges (batch 27, batch 28), both `open` with the recorded "page-scope interface only, no item consumption" evidence; `orphaned_reviews` empty |
| `research/plan-fourier-analysis-track.md` FR-19 (L1370–L1411): 12 A rows + 5 B leaves and the hard proof/boundary obligations; plus L49 (summary), L80 (reconciliation ledger row), L329/L331 (source matrix), L1521–L1522 (harvest crosswalk rows 50–51), L1578 and L1592 (deliberately-not-decomposed rows) | Controlling prose design, ordering and source architecture |
| `research/plan-spec.json` rows 510.06509/510.06510 | Page identity/order/kind/category/companion/`requires`; both carry empty `items` arrays |
| `research/frontier-39-analysis-30-alpha-step1-drift.md` (and `-initial`) §`poisson-summation-sampling-and-lattice-duality` | `no-drift` verdict and the route constraints the scaffold must keep |
| `research/frontier-39-analysis-30-step1-owner-resolution.md`; `research/frontier-39-analysis-30-owner-authoring-direction.md` (does not exist) | Owner decisions: no pair-specific finding for FR-19 |
| 22 × `research/frontier-39-analysis-30-step1-<id>.json` | All 22 readiness records present and `ready` |
| Published suppliers, statement level (argument routes where load-bearing): `thm-poisson-summation-for-schwartz-functions`, `lem-periodic-continuous-functions-are-determined-by-their-fourier-coefficients`, `thm-unit-lattice-dirac-comb-is-fourier-invariant-in-tempered-distributions`, `def-dirac-comb`, `thm-fourier-transform-converts-allowed-tempered-convolutions-to-products`, `def-convolution-of-a-tempered-distribution-with-a-schwartz-function`, `thm-riesz-fischer-for-fourier-coefficients`, `thm-l-two-fourier-inversion`, `def-fourier-coefficients-and-trigonometric-polynomials`, `def-the-one-dimensional-torus-and-normalized-haar-integral`, `def-fourier-transform-on-l-one-of-rn`, `ex-fourier-transform-of-an-interval-indicator` | Hypothesis match for the declared uses, in the library's $2\pi$-free/$h$ convention |
| Laugesen, arXiv:0903.3845, re-fetched PDF (887,135 bytes, 176 pp, sha256_16 `b1ef00490b91e492` — byte-identical to the coverage's fetch stamp): ch. 22 Theorem 22.3 statement and proof, printed pp. 131–133; ch. 23 Theorem 23.5 and proof, printed pp. 137–138 | Independent re-reading of the two load-bearing source theorems (sampling convergence claim; two-sided-decay Poisson hypotheses/conclusion) |
| Read-only checks rerun: `manifest-deps` → 22 items/0 errors; `content-policy --manifest-only` → 22/0/0; `coverage-checklist --require-destination` → 2 pages/39 results/0/0; `step3-decisions check --phase scope` → FR-19 awaited a review before this one | Current bytes of the batch are still clean |

## Design crosswalk

All 12 designed A rows and all 5 designed B leaves are present, in design
order, with the designed kinds and proof dispositions:

1. `def-full-rank-lattice-covolume-and-dual-lattice` (L/T rows 1);
2. `lem-schwartz-periodisation-over-a-lattice-is-smooth-and-uniformly-summable`;
3. `lem-fourier-coefficients-of-lattice-periodisation`;
4. `rem-schwartz-poisson-formula-is-owned-by-functional-analysis` (`proved_here:false`);
5. `thm-poisson-summation-for-a-full-rank-lattice`;
6. `thm-poisson-summation-under-two-sided-polynomial-decay`;
7. `lem-dirac-comb-of-a-full-rank-lattice-transforms-to-the-dual-comb`;
8. `lem-sampling-produces-periodisation-in-frequency`;
9. `lem-bandlimited-samples-are-fourier-coefficients-on-the-band-interval`;
10. `thm-shannon-sampling-for-bandlimited-ltwo-functions`;
11. `cor-nyquist-no-aliasing-condition`;
12. `rem-aliasing-above-the-nyquist-rate`.
B leaves: `rem-gaussian-theta-reciprocity-is-already-instantiated-on-functional-analysis`
(`proved_here:false`), `ex-dual-lattice-and-covolume-for-a-diagonal-scaling`,
`ex-shannon-reconstruction-of-a-sinc-function`,
`rem-lone-integrability-alone-does-not-license-pointwise-poisson-summation`
(`proved_here:false`), `cex-undersampling-identifies-two-distinct-pure-frequencies`.

Five A ids are local additions, each a prerequisite of designed claims with an
identifiable consumer: `def-normalized-sinc-function` (rows 10/B3),
`lem-invertible-linear-substitutions-preserve-schwartz-space` (row 2's
lattice-to-$\mathbb Z^n$ reduction), `lem-lattice-fundamental-parallelotope-partitions-euclidean-space`
(rows 3, 5, 6, 9), `lem-character-orthogonality-on-a-lattice-fundamental-domain`
(rows 5, 6) and `lem-lattice-periodic-continuous-functions-are-determined-by-their-lattice-fourier-coefficients`
(rows 5, 6). These close genuine gaps in the design's dependency chain and do
not expand the subject.

The one design deviation is recorded and scope-preserving: design row 7's
unit-lattice claim $\widehat{\operatorname{comb}_{\mathbb Z^n}}=\operatorname{comb}_{\mathbb Z^n}$
is already published as `thm-unit-lattice-dirac-comb-is-fourier-invariant-in-tempered-distributions`,
so the manifest keeps the row's purpose but states the general full-rank form
$\mathcal F\operatorname{comb}_\Lambda=c^{-1}\operatorname{comb}_{\Lambda^*}$
with the published unit case as its explicit specialization and cross-check.
The claim is strictly stronger at $\Lambda=\mathbb Z^n$ and is exactly what
row 8 (sampling at $\Lambda=h\mathbb Z^n$, scale $h^{-n}$) consumes. No
designed definition, result or example is dropped, weakened or moved.

## Source coverage

- Five sources back the pair: Laugesen chs. 22–23 (band-limited $L^2$ sampling
  and Nyquist/aliasing; periodisation, coefficients and the two-sided-decay
  Poisson theorem), Taylor §7 (period lattice, translate tiling, method of
  images), Sutherland §16.1 (the one-dimensional published interface and
  theta/Gaussian), Silberman §§1–4 (lattices, dual lattices, fundamental
  domains, orthogonality and the $1/\operatorname{covol}$ Poisson identity)
  and Elkies §2 (general-lattice Poisson normalisation). The design's three
  named source ranges are all covered; Silberman and Elkies are added
  corroborating reads with recorded locators.
- 39 harvested rows: 17 `included`, 11 `already-published` (the FA-23
  Schwartz Poisson/Gaussian/theta material), 3 `inline`, 7 `out-of-scope`
  (each with a written reason: Paley–Wiener holomorphy, PDE method-of-images
  applications, periodised convolutions, $L^1(V)$ convolution, lattice theta
  series, gamma/zeta continuation, boundary-value exercises), and 1
  `deferred` to the in-run page `uncertainty-principles-for-fourier-analysis`
  (FR-20, batch 30) for Laugesen ch. 24. The uncertainty-principles boundary
  is deliberate and FR-20 is a separate selected pair.
- I re-read the two load-bearing source theorems on the fetch-verified bytes:
  Theorem 23.5's hypotheses (continuous $f\in L^1$ plus two-sided
  $(d+\varepsilon)$ decay) and conclusion (periodisation equals its Fourier
  series at every point) match
  `thm-poisson-summation-under-two-sided-polynomial-decay`, including the
  absolute/uniform convergence reasoning.
- Recorded pagination note (no mathematical difference): the design cites
  "T §7, PDF pp. 59–68", but in the current author PDF §7 sits at printed
  pp. 71–74 / PDF pp. 70–73; the coverage reads the correct location and the
  mismatch is recorded in the batch notes.

## Intended role in the library

FR-19 is the Euclidean lattice/scaling/sampling extension of the functional
analysis Schwartz Poisson theorem: it owns the lattice definitions
(covolume, dual lattice), the pair (periodisation $\leftrightarrow$ Fourier
coefficients), the distributional comb/periodisation algebra behind sampling,
the $L^2$ Shannon theorem with its exact convergence modes, and the
Nyquist/aliasing boundary; the Gaussian/theta instance and the unit-lattice
comb identity stay owned by their published pages and are cited, not
duplicated. Downstream: no page or item of the other 29 run pairs consumes
any FR-19 item (scanned all batch manifests for item deps and page `requires`),
and the B page is a dependency leaf. Upstream ordering is satisfied:
FR-1/FR-2/FR-15 and tempered distributions are published, FR-17/FR-18 are
earlier in-run pairs (batches 27/28).

## Prerequisite check (unmet prerequisites)

**Method.** Transitive closure of the `deps` of all 22 pair items against the
published `items/` front matter (23,395 `status: published` ids) and all 30
run manifests (899 in-run ids), plus the page-level `requires`.

**Result.** 0 missing ids. The only non-published dependency targets are the
14 in-run A items of this very pair (the pair closes on the published library
plus its own scaffold). All six page-level `requires` resolve to published
pages or earlier in-run scaffolds. Load-bearing hypothesis checks:

- `thm-poisson-summation-for-schwartz-functions` (published): its statement
  asserts exactly the local uniform convergence with every derivative of the
  $\mathbb Z^n$ periodisation that
  `lem-schwartz-periodisation-over-a-lattice-is-smooth-and-uniformly-summable`
  pulls back by the invertible substitution;
- `lem-periodic-continuous-functions-are-determined-by-their-fourier-coefficients`
  (published): continuous $\mathbb Z^n$-periodic functions with all cube
  coefficients zero vanish, exactly the clause the local uniqueness lemma
  transports to $\Lambda$;
- `thm-unit-lattice-dirac-comb-is-fourier-invariant-in-tempered-distributions`
  and `def-dirac-comb` (published): same convention ($\widehat f=\int f e^{-2\pi ix\xi}$)
  and the unit case that the general comb lemma specialises to;
- `thm-fourier-transform-converts-allowed-tempered-convolutions-to-products`
  and `def-convolution-of-a-tempered-distribution-with-a-schwartz-function`
  (published): the exact product-to-convolution clause and pairing convention
  used by `lem-sampling-produces-periodisation-in-frequency`;
- the Riesz–Fischer/Plancherel/$L^2$-inversion group and
  `def-fourier-coefficients-and-trigonometric-polynomials` with the normalised
  Haar integral: the coefficient computation and square summability in
  `lem-bandlimited-samples-are-fourier-coefficients-on-the-band-interval`
  match the library's $e_k$, $dm_{\mathbb T}$ conventions.

**Recorded, not a gap.** The FR-19 prose says "the FR-1, FR-2, FR-15--FR-18 A
pages", while the plan's own reconciliation ledger (L80) and
`plan-spec.json` omit FR-16; the manifest keeps the plan's six `requires`
entries. No FR-19 item consumes any batch-26 item, so this divergence cannot
block authoring or closure (already recorded as conflict 2 in the batch
notes).

**Open interface edges (recorded, not a defect).** The two page-scope edges
into batches 27 and 28 remain `open` with the explicit evidence that nothing
is consumed from either pair; both supplier pages and their inventories exist
in-run, so they cannot block this pair.

**No confirmed unmet prerequisite and no material uncertainty about one.**

## Caveats and uncertainty (honest limits)

1. **Laugesen Theorem 22.3's uniform clause — confirmed source caveat.** The
   printed statement claims $L^2$ *and* uniform convergence. I read the
   printed proof (arXiv PDF pp. 132–133): it asserts (22.2) with convergence
   in $L^2$ and in $L^1$ of the cube Fourier series, then invokes $L^1$
   inversion for the $L^\infty$ claim; for an arbitrary band-limited $L^2$
   function the $\ell^1$ property of the sample sequence is not available from
   Bessel alone. The scaffold therefore states the $L^2$ identity
   unconditionally and the locally uniform/pointwise clause only under the
   explicit hypothesis $\sum_k|f(hk)|<\infty$ (which B3's $\operatorname{sinc}$
   example satisfies). This is correct statement-level handling of a source
   gap, not a scope omission.
2. **Not verified here.** Planned proofs and any proof-correctness claim are
   Step 3b/Step 5 business; this review is statement-level plus supplier
   hypothesis matching. No published defect was established in the suppliers
   examined. The published near-duplicates (unit-comb invariance,
   Gaussian/theta, number-theory comb example) are recorded cross-checks, not
   omissions or defects.
3. **No owner record pending.** There is no Step-3a owner receipt for this
   pair and no partner-specific owner direction beyond the run's Step-1
   resolution; the decision below is a review decision only.

## Decision

The planned definitions (full-rank lattice, covolume, dual lattice,
normalised sinc), results (periodisation smoothness, lattice coefficients,
Schwartz and two-sided-decay Poisson summation, comb duality, sampling
periodisation, band-limited coefficient lemma, $L^2$ Shannon reconstruction,
Nyquist disjointness, aliasing failure) and examples (diagonal dual lattice,
sinc reconstruction, undersampling witness, midpoint/$L^1$ warning, theta
ownership remark) adequately cover the intended subject; source coverage is
complete and justified; and no prerequisite required by a planned item is
absent from both the published library and the current scaffold.

**Decision: `sufficient`**, recorded with
`tools/step3-decisions.mjs record-scope` against the current scope hash and
this report.

Receipt: `research/frontier-39-analysis-30-step3a-review-poisson-summation-sampling-and-lattice-duality.json`
(`decision: sufficient`, `owner: false`, sha256
`3f0ee1b618201b7afcd79043bb610f532e2e8184d4155e9518f8af33737d42e1`, recorded
2026-10-04T19:18:59Z). `step3-decisions check --phase scope` reports no
remaining work for this page.
