# Step 3a dispatch report — `bergman-and-szego-kernels`

- Run: `frontier-43-complex-representation-15` (batch 15, orders 1626/1627,
  `complex-analysis`).
- Pair: A `bergman-and-szego-kernels` (20 items) / B
  `bergman-and-szego-kernels-examples` (8 items).
- Role: alpha scope review of this pair only. No scaffold was edited; this report and the
  `record-scope` receipt are the only outputs.
- **Decision: `sufficient`.** All design ids are present, source coverage passes with all
  its locators re-verified, and no unmet prerequisite was found. Non-blocking owner
  observations are in §6.

## 1. Inputs read

- Manifests: `research/frontier-43-complex-representation-15-batch-15.pages.json` (both
  pages, all 28 items with statements, strategies, kinds, deps, levels), `...-batch-15.coverage.json`
  (both source rows, stamps, dispositions, 4 canonical rows), `...-batch-15.notes.md`
  (Step-1 design reconciliation and corrections), `...-batch-15.cross-batch-dependencies.json`
  (`[]`), `...-scope-ledger.json` (both pages owed), `...-covers.json`.
- Design/prose: `research/plan-complex-analysis-track.md` §SC-7 (line 4313 ff., the 9-row A
  inventory, the companion list, the source/proof-strategy paragraph and its explicit
  scope denials), line 3239 (SC-1's orientation remark: Poincaré inequivalence belongs on
  SC-7 "where the Bergman invariant supplies a proof"), lines ~5000–5008 (Błocki source
  mapping) and line 5469 (`requires` row). `research/plan-spec.json` rows 1626/1627 (ids,
  orders, titles, companions, `requires`; both `items` arrays empty, so the scaffold
  inventory is new and displaces nothing).
- Owner/run records: `...-owner-authoring-direction.md` (no batch-15 clause; its
  cross-run prohibitions — no `proved_here: false`, no `not-supplied` fallbacks, no
  `external_refs`, no external-dependency substitutes — hold in this manifest: zero
  occurrences), `...-alpha-step1-drift-native.md` (this page: VERDICT `no-drift`).
- Sibling availability: the pair's item dependencies resolve to published items or to its
  own A items only, so no sibling in-run pair had to be inspected; the whole-run
  `...-cross-batch-dependencies.json` contains no edge touching this pair.
- Sources: both cited documents re-fetched live on 2026-10-07 and the cited regions
  extracted and read (§3).

## 2. Design ∶ scaffold comparison (scope only)

Every design id is present on A, in the design's proof order; three ids were renamed with
the batch notes' recorded equivalence (claims, hypotheses and scope preserved):

| design row (SC-7) | batch-15 item |
|---|---|
| `def-bergman-space-and-kernel` | `def-bergman-space-and-kernel` (definition) |
| `thm-bergman-kernel-well-defined-and-basis-expansion` | `thm-bergman-basis-expansion-and-closedness` (theorem; closedness of $A^2$, basis independence, compact-normal expansion, holomorphy/conjugate symmetry) |
| `thm-bergman-reproducing-and-extremal-properties` | `thm-bergman-reproducing-projection-and-extremal` (theorem) |
| `thm-bergman-kernel-biholomorphic-transformation` | `thm-bergman-kernel-biholomorphic-transformation` (theorem) |
| `def-bergman-metric-bounded-domain` | `def-bergman-metric-bounded-domain` (definition) |
| `thm-bergman-metric-positive-and-biholomorphically-invariant` | `thm-bergman-metric-positivity-and-biholomorphic-invariance` (theorem) |
| `def-szego-kernel-smooth-bounded-domain` | `def-szego-kernel-smooth-bounded-domain` (definition) |
| `thm-model-domain-bergman-and-szego-kernels` | `thm-model-domain-bergman-and-szego-kernels` (theorem) |
| `thm-poincare-ball-and-polydisc-not-biholomorphic` | `thm-poincare-ball-and-polydisc-not-biholomorphic` (theorem) |

The remaining 11 A items are supporting lemmas that package exactly the steps the design's
proof strategy names (mean-value/evaluation bounds, closedness, smoothness and diagonal
positivity, Hessian domination, invariant quotient `det g/K`, monomial integrals and
monomial bases for disc/ball/polydisc, sphere/torus integrals, disc and ball Hardy trace
lemmas, model metric determinants). Nothing in the design table is dropped: bounded point
evaluation and closedness are carried by `lem-bergman-evaluation-bound-on-compact-subsets`
+ `thm-bergman-basis-expansion-and-closedness`; the extremal formula, projection and
reproducing property are carried by `thm-bergman-reproducing-projection-and-extremal`; the
scaffold's Poincaré theorem concludes non-biholomorphism for every $m\ge2$.

The eight B items are exactly the design's companion inventory: orthonormal monomial
expansions with a disc reproducing check (`ex-disc-monomial-bergman-basis-and-reproducing-check`),
ball monomial norms and model kernels (`ex-ball-monomial-norms-and-model-kernels`),
biholomorphic transport to the half-plane (`ex-half-plane-bergman-kernel-by-mobius-transport`),
Bergman-versus-Szegő normalization (`ex-bergman-versus-szego-normalization-on-the-disc`),
the unbounded contrast with trivial $A^2$ (`ex-square-integrable-entire-functions-vanish`,
against the disc examples), the polydisc Bergman product and distinguished-torus warning
(`ex-polydisc-bergman-product-and-distinguished-torus-kernel`), the nonsmooth-boundary
limitation (`ex-polydisc-boundary-and-the-smooth-szego-hypotheses`), and the false
ball/polydisc claim (`fs-ball-and-polydisc-are-biholomorphic-for-n-at-least-two`).

Page metadata matches `plan-spec.json` exactly (orders, titles, kinds, category,
companions, and the seven-entry `requires` list). Counts 20 A + 8 B are within cap; no
over-claim beyond the design's subject is asserted, and no design item is moved to the
companion page.

## 3. Source coverage

Both treatment rows are stamped `fetch_verified` and I reproduced the stamps byte-for-byte
from live downloads on 2026-10-07:

- **Błocki, *The Bergman Kernel and Metric*** —
  <https://gamma.im.uj.edu.pl/~blocki/publ/ln/bergman.pdf>, 319 767 B, sha256_16
  `9b4a305d42572ff8`, 32 pp. Verified in the extracted text: the opening mean-value bound
  and (1.1) with the closedness consequence (p. 1), the Riesz representer, the
  transformation law (1.2) (pp. 2–3), the annulus example (1.3), the product formula, the
  diagonal supremum formula, the Bergman metric definition and Theorem 1.1 with its proof
  (pp. 4–5), Theorems 1.5 and 1.6. 18 harvested headings: 6 `included`, 6 `inline`,
  5 `out-of-scope` (annulus kernel; Kobayashi projective embedding; curvature; monotone
  domains; §2 Green-function representation), each with a result-specific reason, and
  1 `already-published` (§§5–7 redirected to the published Hörmander page material
  `thm-hormander-l2-dbar-existence`).
- **Lebl, *Tasty Bits of Several Complex Variables*** —
  <https://www.jirka.org/scv/scv.pdf>, 1 652 309 B, sha256_16 `729cdb8a00685da5`,
  248 pp. Verified: Exercise 1.2.10 (printed p. 26), Theorem 1.4.4 with the
  biholomorphism corollary (printed pp. 32–33), Lemma 5.2.1 (p. 161), Proposition 5.2.2
  and Example 5.2.3 (p. 162), Exercises 5.2.4–5.2.10 (pp. 163–165), §5.3 with formula
  (5.2), Exercise 5.3.1 and Example 5.3.1 (read in the text; the book prints the disc
  Szegő kernel as $1/(2\pi(1-z\bar\zeta))$ against arc length, which becomes
  $1/(1-z\bar w)$ under the scaffold's declared normalized Haar measure), and Exercise
  5.3.3. 22 harvested headings: 10 `included`, 9 `inline`, 2 `out-of-scope`
  (boundary-continuity density; infinite-dimensionality of $H^2$), 1
  `already-published` (`thm-cauchy-estimates-on-a-polydisc`).

Four canonical rows (local mean-value/closedness packaging, Hessian domination, model
metric determinants and the invariant quotient, distinguished-torus warning) are all
`included`. `coverage-checklist … --require-destination` on the batch-15 file:
`1 page(s), 44 harvested result(s), 0 error(s), 0 warning(s)`. B-pages are not required to
carry a coverage entry (the checklist harvests every A page and each `included` row names
a scaffolded item; all do). Lebl §5.1 (Bochner–Martinelli) is handled exactly as the plan
directs — `I(SC-5)`, not this page — and the design itself says the small-ball Stokes
argument belongs to SC-5. A convention adaptation is handled explicitly rather than
silently: Lebl's Hardy pairing is bilinear, while the scaffold uses the library's
first-variable-linear $L^2$ convention required by the design key at plan line 504 (the
scaffold prints $f(w)=\langle f|_{\partial\Omega},S_w\rangle$).

## 4. Prerequisite audit (unmet-prerequisite duty)

- The 28 items declare **103 distinct dependency ids: 83 published items and 20 in-batch
  A items; 0 missing, 0 non-`published`**. Every published dependency is homed on a
  `published` library page (checked page-by-page), including the nine whose home pages my
  first single-line index did not resolve: `def-biholomorphic-map-several-complex-variables`
  and `lem-real-jacobian-determinant-of-a-complex-linear-map`
  (holomorphic-inverse-and-weierstrass-preparation), `lem-a-twice-differentiable-local-minimiser-has-nonnegative-second-variation`
  (the-direct-method-and-euler-lagrange-equations),
  `def-bounded-c-one-domain-boundary-charts-and-outward-normal` and
  `def-surface-integral-on-a-compact-c-one-hypersurface`
  (euclidean-surface-measure-divergence-and-green-identities), and the four Hardy suppliers
  (analytic-hardy-spaces-and-canonical-factorisation).
- All seven `requires` pages exist in `library/` with `status: published`
  (`complex-lp-spaces-and-test-function-conventions`, `hilbert-space-geometry-and-riesz-representation`,
  `orthonormal-bases-parseval-and-fourier-series`, `the-dbar-complex-and-integral-solutions`,
  `hormander-estimates-and-the-levi-problem`, `harmonic-hardy-classes-and-fatou-boundary-limits`,
  `analytic-hardy-spaces-and-canonical-factorisation`), and the manifest list equals the
  plan-spec list. The B page's only prerequisite is the A page, an in-run pair allowed by
  the scope ledger (`allow_in_run_dependencies: true`).
- `batch-15.cross-batch-dependencies.json` is `[]`, and the refreshed run-level ledger
  contains no edge touching this pair. There is no B→B dependency and no in-batch cycle;
  `item-dependency-levels.mjs check` passes run-wide (371 items, no error on this batch);
  `manifest-integrity` reports 30/30 pages owed and present, "no scope drift".
- No published item or page references any of the 28 new ids, so the pair creates no
  dangling published consumer (checked `items/` and `library/`). The design's forward
  reference is inward: SC-1's remark that Poincaré inequivalence is proved here, and the
  A-page theorem supplies it.
- Load-bearing published suppliers whose statements I opened and matched against their
  declared use: `cor-holomorphic-mean-value-property`,
  `cor-modulus-powers-of-holomorphic-functions-are-subharmonic` with
  `def-plane-subharmonic-function` (defined by the disc sub-mean inequality),
  `thm-cauchy-estimates-on-a-polydisc` (sup over the distinguished boundary),
  `lem-l-two-with-the-integral-pairing-is-a-hilbert-space` and
  `def-complex-l-two-inner-product` (first-variable-linear complex pairing),
  `thm-hilbert-space-fourier-expansion`, `lem-real-jacobian-determinant-of-a-complex-linear-map`
  ($\det_{\mathbb R}L=|\det_{\mathbb C}A|^2$) with `cor-c-one-change-of-variables-for-l-one-functions`,
  `thm-osgood-lemma-in-several-complex-variables` and `thm-locally-bounded-separate-holomorphy`,
  `thm-c-two-levi-criterion-for-plurisubharmonicity`,
  `lem-a-twice-differentiable-local-minimiser-has-nonnegative-second-variation`,
  `lem-determinant-rank-one-update-over-a-commutative-ring`, the polar-coordinate/sphere
  measure suppliers `thm-polar-coordinates-formula-for-lebesgue-measure`,
  `def-polar-surface-measure-on-the-unit-sphere`, `cor-volume-of-the-unit-n-ball`,
  `def-real-beta-integral`, `thm-multinomial-theorem`, and the disc Hardy suppliers
  (`def-analytic-hardy-space-disc`, `thm-fatou-boundary-theorem-analytic-hardy-spaces`,
  `cor-hardy-one-cauchy-representation`, `lem-hardy-radial-means-are-monotone`).
- Independent arithmetic re-derivation of the pair's own headline constants (not a proof
  audit): disc/ball/polydisc kernels, monomial norms, diagonal values, Bergman metric
  matrices, $\det g_{\mathbb B^m}=(m+1)^m(1-|z|^2)^{-(m+1)}$,
  $\det g_{\mathbb D^m}=2^m\prod(1-|z_j|^2)^{-2}$, the invariant constants
  $\frac{(m+1)^m\pi^m}{m!}$ and $2^m\pi^m$, their inequality for $m\ge2$, and the
  half-plane kernel $-1/(\pi(z-\bar w)^2)$ — all consistent with the cited sources.

## 5. Unmet prerequisites

**No confirmed unmet prerequisite.** Every prerequisite the scaffold declares — page-level
and item-level — is already published (or is an item of this same pair), with the exact
claim and hypotheses its consumer needs; the mechanical closure, the item-level statement
spot checks and the plan's own prerequisite review all agree. Residual uncertainty, stated
honestly: this review verifies that suppliers exist with the needed interfaces, not that
each supplier's own proof is correct; any defect there is a Step-5 subject, not a Step-3a
scope gap. No branch of this pair depends on a not-yet-scaffolded sibling pair, so there is
nothing to flag for enrichment on that account.

## 6. Non-blocking owner observations

1. The plan's Błocki mapping routes Theorem 1.5's curvature calculation to
   `IN(thm-poincare-ball-and-polydisc-not-biholomorphic)`, while the scaffold proves
   Poincaré through the invariant quotient `det g/K` and declines the curvature row.
   The promised claim and the design's own instruction ("compares a biholomorphically
   invariant Bergman-geometric quantity, not their Euclidean boundary shapes") are both
   preserved, and the excluded curvature material would add Riemannian-curvature
   prerequisites outside the declared closure; recorded for the owner, not a scope loss.
2. The design's "sufficiently smooth bounded domain / declared surface measure" Szegő
   definition is realized as a pair $(\Omega,\sigma)$ with an explicit Szegő-regular
   hypothesis, under which the representers exist; this is the reconciliation recorded in
   the batch notes and it does not weaken any promised claim (the model theorem
   instantiates the disc and ball).
3. The `requires` list includes SC-5 and SC-6, but no item proof cites an SC-5/SC-6 item:
   those are declared orientation edges, consistent with the design sentence that the
   Bochner–Martinelli argument lives on SC-5.
4. The A-only coverage entry is the contract (only A pages are harvested); no B-page
   coverage is missing.

## 7. Recording

Scope receipt: `research/frontier-43-complex-representation-15-step3a-review-bergman-and-szego-kernels.json`
via `node tools/step3-decisions.mjs record-scope --run frontier-43-complex-representation-15
--page bergman-and-szego-kernels --decision sufficient`.
