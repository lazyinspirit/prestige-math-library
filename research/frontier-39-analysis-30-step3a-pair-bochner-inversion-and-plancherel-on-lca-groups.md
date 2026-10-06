# Step 3a scope review — pair `bochner-inversion-and-plancherel-on-lca-groups`

- Run `frontier-39-analysis-30`; role alpha; label
  `step3a-pair-bochner-inversion-and-plancherel-on-lca-groups-f04454eea9361ae6`.
- Pair: A `bochner-inversion-and-plancherel-on-lca-groups` (order 510.06503,
  batch 26) / B `bochner-inversion-and-plancherel-on-lca-groups-examples`
  (order 510.06504, batch 26), category `fourier-analysis`. A has 20 items
  (2 definitions, 14 lemmas, 3 theorems, 1 corollary); B has 5 (3 examples,
  2 counterexamples).
- Decision: **`sufficient`**, recorded with `tools/step3-decisions.mjs
  record-scope`.
- At review time the pair had no earlier scope review and no owner scope
  receipt in this run (`research/frontier-39-analysis-30-step3a-owner-<page>.json`
  absent). No scaffold, manifest, coverage, plan, item or engine artifact was
  edited; the only writes are this report and the scope receipt.

## 1. Design comparison — A page (item-for-item)

Controlling design: `research/plan-fourier-analysis-track.md` §FR-16
(L1044–1279; summary rows L46 and L77; source matrix L328; mandatory local
proof routes L1111; local supplier-edge table L1233–1248). Drift for this
pair: `drift-applied — gelfand-theory-and-commutative-c-star-algebras`
(`research/frontier-39-analysis-30-alpha-step1-drift.md` L375 ff.), whose
resolution — keep the Gelfand A page as a general Banach-algebra prerequisite
and prove the LCA algebra/character/spectrum package locally in rows 1a–1e —
is exactly what the manifest carries.

All fifteen designed A rows (1–15) and all five mandated local rows (1a–1e)
are present with the designed ids, kinds and order
(1, 1a, 1b, 1c, 2, 1d, 1e, 3, 5, 6–11, 4, 12–15):
`def-fourier-transform-on-an-lca-group`;
`lem-lca-lone-convolution-is-a-commutative-banach-star-algebra`;
`lem-lca-translations-and-normalised-local-approximate-identities`;
`lem-nonzero-multiplicative-functionals-on-lca-lone-are-fourier-evaluations`;
`lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution`;
`lem-lca-lone-character-topology-is-the-compact-open-topology`;
`lem-lca-scalar-unitization-character-space-and-spectrum`;
`thm-riemann-lebesgue-lemma-on-lca-groups`;
`lem-fourier-stieltjes-transforms-determine-finite-radon-measures`;
`def-positive-definite-function-on-an-abelian-group`;
`lem-fourier-stieltjes-transform-of-a-positive-measure-is-positive-definite`;
`lem-positive-definite-functions-give-positive-bounded-functionals-on-the-transform-core`;
`lem-bochner-functional-extends-and-has-a-radon-representing-measure`;
`thm-bochner-theorem-for-lca-groups`;
`cor-normalised-positive-definite-functions-correspond-to-probability-measures`;
`lem-lca-positive-convolution-squares-form-an-inversion-core`;
`thm-compatible-dual-haar-normalisation`;
`thm-lca-fourier-inversion-for-integrable-transform`;
`lem-lca-parseval-pairing-on-the-integrable-core`;
`thm-lca-plancherel-isometric-extension`.
No designed claim was dropped, weakened or duplicated.

The mandatory local supplier-edge table is satisfied: I checked each of the
nine consumer rows and every required local supplier id occurs in the
consumer's `deps` (9/9, 0 missing). The design's boundary obligations are
visible in the statements: item 4 explicitly withholds the dual-integrability
claim until normalisation; item 12 is the reciprocal-scale normalisation and
its uniqueness clause; item 13 returns the continuous representative and
claims no pointwise recovery for an arbitrary representative; item 15 asserts
only the isometric extension and explicitly disclaims surjectivity (left to
the FR-17 pair); Bochner keeps continuity plus uniqueness and mass
`μ(Ĝ)=φ(0)`; the positive-definite definition includes repeated points, the
empty sum and complex coefficients. Rows 1a–1e remove the external
LCA/Gelfand character-space assumptions locally, and no dep of any item points
at RG-19 noncommutative group-algebra material or at a C\*-unitisation
theorem. The design's ordered authoring route (1, 1a, 1b, 1c, 2, 1d, 1e, 3, 5,
6–11, 4, 12–15) is the manifest order.

## 2. Design comparison — B page

All five designed B leaves (design L1259–1267) are present and correctly
typed: `ex-haar-normalisations-on-the-circle-and-the-integers`,
`ex-haar-normalisations-on-a-finite-abelian-group-and-its-dual`,
`ex-a-character-is-positive-definite`,
`cex-a-continuous-function-of-modulus-at-most-one-need-not-be-positive-definite`,
`cex-lca-fourier-inversion-is-not-an-everywhere-statement-for-arbitrary-lone-functions`.
The recorded scaffold conflict for B4 stands and is not a scope change: EW
Appendix C.3 contains no explicit bounded-continuous non-positive-definite
example, so the manifest keeps the standard `1_{[-1,1]}` example on `R` and
verifies it by the displayed `3×3` determinant `-1`; the statement is sound.
B5 tests exactly the representative language of item 13. No B item is a
supplier anywhere: a scan of all 30 run manifests found 0 dependency edges on
the five B ids, and no published item references them. B's `requires` is the A
page alone.

## 3. Source coverage

- `coverage-checklist` (with and without `--require-destination`): 2 pages,
  72 harvested rows, 0 errors, 0 warnings. Dispositions — A: 26 `included`,
  5 `inline`, 5 `already-published`, 5 `deferred`, 1 `out-of-scope`; B: 14
  `included`, 7 `inline`, 3 `already-published`, 5 `deferred`, 1
  `out-of-scope`. Every deferral names a destination
(`fourier-transform-convolution-and-approximate-identities`,
`pontryagin-duality-for-locally-compact-abelian-groups`,
`character-groups-and-elementary-lca-duals`); the single out-of-scope row
carries its own reason.
- `source-fetch-check`: 6/6 source rows fetch-verified, 6/6 resolved
(0 documented drops).
- Independent re-fetch, 2026-10-05: all four documents are byte- and
  sha256_16-identical to their stamps — Loomis 8 691 521 B /
  `05a32c7db1e616af`; Koerner (Internet Archive snapshot) 227 927 B /
  `5697a7d11ed62968`; Einsiedler–Ward 1 024 475 B / `c8e8b3e47226ca27`;
  Taylor 603 921 B / `e85e7a4e882a278d`.
- Load-bearing statements re-read in the fetched bodies: Loomis 30C
  (translation continuity of `L^1`), 31A–C (convolution algebra, norm
  inequality), 34A (character ratio `α_M`, joint continuity, approximate-identity
  convergence), 34C (compact-open topology), 36A (positivity), 36B (`[L^1 ∩ P]`
  dense in `L^1` and `L^2`; `L^1` inversion theorem), 36D (Plancherel);
  Koerner Theorems 10.6, 11.2/B and 12.1–12.7 — confirmed to be statements
  and exercises only, no proofs, exactly as the design's source-read
  limitation records; EW Theorems C.8 (Parseval), C.9 (Herglotz–Bochner) and
  C.10 (Inversion); Taylor §1 for the torus/Fourier-series convention.
- Honest qualification: EW C.9 as printed omits the continuity hypothesis in
  the converse direction of Herglotz–Bochner; the scaffold's
  `thm-bochner-theorem-for-lca-groups` keeps `φ` continuous explicitly, so the
  pair is not weaker than the correct statement. Koerner's missing proofs are
  a design-level fact the scaffold already records; the proof cost sits on
  Loomis and the local routes.

## 4. Prerequisites and intended role in the library

- All six A-page `requires` are published and earlier in reading order:
  `character-groups-and-elementary-lca-duals` (510.06501, FR-15),
  `fourier-transform-convolution-and-approximate-identities` (288.089),
  `banach-algebras-spectrum-and-holomorphic-functional-calculus` (288.079),
  `gelfand-theory-and-commutative-c-star-algebras` (288.081),
  `radon-measures-and-the-riesz-markov-kakutani-theorem` (288.039),
  `haar-measure-existence-and-uniqueness` (506.1). B requires its A page.
- Transitive dependency closure of the 25 items: 1 169 ids — 25 in-run (this
  pair), 1 144 published, **0 missing**; every published node has
  `status: published`. 79 distinct direct deps (61 published, 18 intra-pair)
  all resolve, and no dep lies on a page ordered ≥ 510.06503 (no forward
  reference). All 25 Step-1 readiness records exist and the run's Step-1
  check is closed over its 899 items.
- Intended role and consumers. FR-17 (batch 27,
  `pontryagin-duality-for-locally-compact-abelian-groups`) has six items with
  30 declared item-level edges onto 14 of this page's items: the
  neighbourhood-basis lemma (12 deps), the transform bump (4), Pontryagin
  biduality (2), point separation (5), range density (6), and the full
  Plancherel theorem (1). FR-18 (batch 28, finite Fourier analysis) requires
  the A page at page level only. The supplier clauses each consumer names
  (inversion, Bochner, Fourier–Stieltjes uniqueness, isometric extension,
  intertwining, approximate identities, positive core) are all present in the
  scaffold; the consumer-side cross-batch records mark the edges `open`
  pending Step 3 authoring, which is the expected state at 3a.
- **Unmet prerequisites: none confirmed.** No item of this pair consumes an id
  absent from both the published library and this run's scaffold, and no
  prerequisite is missing from both. Two non-blocking authoring notes (not
  scope findings) for Step 3b: (i) item 15's isometry claim on all of
  `L^1 ∩ L^2` is sourced directly (Koerner Theorem 12.6) and its `deps`
  include item 14, whose core pairing is stated on the narrower class with
  integrable transforms — the bridging step (approximate identity in `L^2` and
  dominated convergence, via rows 1b/14 or Loomis 36D) is available; (ii) item
  15's proof-provenance label reads `literature-derived` while Koerner carries
  statements only, so the authored proof should cite Loomis §36B–D/26J as the
  design's own limitation directs.

## 5. Checks run (2026-10-05)

- `manifest-deps` on the batch → 25 items, 0 errors.
- `content-policy --manifest-only` on the batch → 25 items, 0 errors,
  0 warnings.
- `coverage-checklist` and `coverage-checklist --require-destination` →
  2 pages, 72 rows, 0/0.
- `source-fetch-check --coverage ...` → 6/6 fetch-verified, 6/6 resolved.
- `item-dependency-levels check --run frontier-39-analysis-30` → 899 items
  across 60 pages, maximum level 22, exit 0; no batch-26 finding.
- `step1-decisions check --run frontier-39-analysis-30` → 899 items,
  `closed: true`; 0 batch-26 work rows.
- `validate-plan` → OK (no cycles, forward references, B-page dependencies or
  unresolved ids among the 1420 item-bearing planned pages).
- `manifest-integrity --run frontier-39-analysis-30` → 60/60 pages owed and
  present, no scope drift.
- Local supplier-edge audit 9/9 satisfied; B-supplier scan 0 hits;
  B-dependency scan 0 hits. `fwdcheck` (repo-wide) reports 4 pre-existing
  undeclared forward references in unrelated items; none is in batch 26.

## 6. Decision at initial scaffold review

`sufficient`. The planned definitions, results and examples cover the
design's intended subject — Bochner's theorem, the compatible dual Haar
normalisation, Fourier inversion for integrable transforms with the
continuous representative, and the one-way Plancherel isometry, with the
pre-biduality boundary kept exactly as designed — source coverage is complete
and independently re-verified, and the full prerequisite closure is published
or scaffolded in dependency order. This decision covered the initial 20-item A
manifest and five B leaves; the post-authoring scope delta is audited below.

## 7. Post-authoring scope audit (2026-10-05; no receipt or gate recorded)

The current manifests contain 21 A items and five B leaves. The original 20
planned A items and all five B leaves remain present. One local support lemma,
`lem-lca-haar-measure-is-inversion-invariant`, was added so the planned
convolution-algebra item can prove that its involution is isometric under DC.
The added proof compares the Haar integral with its inversion on
compactly-supported continuous kernels, using the DC-level Riesz--Markov
uniqueness theorem; it avoids the published Haar uniqueness theorem, which
assumes AC. The helper has one consumer, the convolution-algebra item, stays on
the A page, and creates no cross-pair or B-page dependency. Keep this addition:
inlining its full comparison proof would be a substantial expansion of the
planned algebra proof, while removing it would force the convolution item to
inherit AC and weaken its original DC-level interface.

The authoring route for `thm-riemann-lebesgue-lemma-on-lca-groups` uses the
AC-dependent compact character-space theorem through the scalar-unitisation
supplier. The item now states AC and DC, matching the actual proof route. Its
six direct consumers in batches 26 and 27 already state AC and DC, so this
premise correction requires no consumer Statement/Definition edits. The FR-16
design inventory now records this premise and the local support lemma. The
analytic conclusion is unchanged under the declared foundation.

Choice declarations were also reconciled with the item proof routes. The two
DC-level A lemmas now state DC; their direct mathematical consumers already
state AC and DC. The circle/integer example states Countable Choice and uses
direct formulas plus the published Fejer $L^1$ convergence theorem. The finite
group example is now derived from finite orthogonality without choice. The
point-modification counterexample was extended to every nondiscrete LCA group
using the choice-free fact that Haar singletons are null there; it no longer
depends on the AC/DC Fourier-inversion theorem. These B leaves have no item
consumers.

The B-page counterexample
`cex-a-continuous-function-of-modulus-at-most-one-need-not-be-positive-definite`
also now uses the continuous trapezoid witness rather than the discontinuous
indicator in the original scaffold; its promised counterexample claim is
preserved, and it has no consumers. The A/B page inventories, page boundary,
required-page interfaces, and all other original claims are unchanged.

The existing review receipt JSON still describes the post-authoring state as
having no scope changes and all 21 A items preserving frozen IDs. That wording
does not match the verified 20-plus-one inventory and the subsequent declared
choice assumptions; this section records the content audit only and does not
alter or create a workflow receipt.
