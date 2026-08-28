# frontier-22 — Alpha group `d` — Step 3 scaffold review

Group `d` covers batches `6` and `7`: CA-11, CA-15, and SC-3. I read the
current `research/frontier-22-batch-{6,7}.pages.json`,
`research/frontier-22-batch-{6,7}.coverage.json`, and
`research/frontier-22-batch-{6,7}.notes.md` artifacts against the controlling
design sections in `research/plan-complex-analysis-track.md` and the live
`research/plan-spec.json`. I also refreshed
`research/frontier-22-alpha-d-scope-decisions.json` and resolved all `13`
current decline rows.

All three owned A pages are now **sufficient** for authoring on the current
bytes. One in-scope scaffold defect was repaired during this review on Friday,
August 28, 2026: `normal-families-and-montels-theorem` now requires the earlier
published page `ascoli-arzela`, because its current item deps already cite
`cor-ascoli-arzela-for-compact-metric-domains`. The refreshed scope receipt now
contains **5** `stands` rows and **8** `owner-decision` rows.

No owned A page is near the step-3 split ceiling: CA-11 has `22` A items,
CA-15 has `18`, and SC-3 has `27`.

| A page | batch | A items | verdict | notes |
|---|---|---:|---|---|
| `the-riemann-sphere-and-mobius-transformations` | 6 | 22 | **sufficient** | CA-11 route and deferrals close as written |
| `normal-families-and-montels-theorem` | 6 | 18 | **sufficient** | repaired after B6-1 backward prerequisite fix |
| `holomorphic-inverse-and-weierstrass-preparation` | 7 | 27 | **sufficient** | SC-3 route closes on current manifest |

## Findings

| id | page | severity | disposition |
|---|---|---|---|
| B6-1 | `normal-families-and-montels-theorem` | high | repaired in manifest |

### B6-1 — repaired: CA-15 cited the published compact-metric Ascoli corollary without requiring its home page

The current CA-15 manifest already used the published item
`cor-ascoli-arzela-for-compact-metric-domains` twice:

- `thm-montel-theorem-for-holomorphic-functions`
- `thm-chordal-arzela-ascoli-criterion-for-meromorphic-families`

That corollary is homed on the earlier published page `ascoli-arzela`
(order `285`), but `research/frontier-22-batch-6.pages.json` still listed only

- `harmonic-functions-and-the-poisson-integral`
- `the-riemann-sphere-and-mobius-transformations`
- `the-argument-principle-and-rouche`
- `approximation-and-compactness-in-ck`

as page-level `requires` for `normal-families-and-montels-theorem`.

This was a real scaffold-closure defect on the current bytes. The design text at
`research/plan-complex-analysis-track.md:2151-2240` says the earlier
`approximation-and-compactness-in-ck` supplier should suffice, but the live
manifest no longer follows that narrower route: its actual deps cite the later
published compact-metric corollary by id. I repaired the manifest in the
smallest coherent way by adding the earlier published prerequisite
`ascoli-arzela`. After that edit, a local closure audit over the group-`d`
manifests reports zero missing prerequisite homes.

## Page review

### `the-riemann-sphere-and-mobius-transformations`

CA-11 is breadth-sufficient as scaffolded. The page has the one-point
compactification setup, holomorphic charts, stereographic projection, chordal
metric, sphere meromorphy, Möbius maps, cross-ratios, circlines, the
`PGL_2(C)` identification, three-point transitivity, cross-ratio invariance,
the circline/reflection theorem, the rational-function characterization,
degree/fibre counting, the sphere/plane/punctured-plane automorphism results,
and the fixed-point classification theorem. The B page is also substantive: it
contains the Cayley transform, three-point reconstruction, fixed-point
classification examples, stereographic coordinates, and the chordal-distance
formula.

The source harvest is honest for the page actually being built. Ahlfors,
Weber, and Stein-Shakarchi all support the Möbius/cross-ratio/circline core,
and the rational-map tail closes from explicit published dependencies inside the
current closure. The exact later-home deferrals to CA-12 stand. The two extra
Ahlfors branches with no exact current page home on disk, Steiner-circle nets
and the length/area formulas, are correctly recorded as `owner-decision`
omissions rather than treated as hidden prerequisites.

**Verdict: sufficient.**

### `normal-families-and-montels-theorem`

CA-15 is sufficient after B6-1. The page has the canonical compact exhaustion,
local-uniform-convergence and metric dictionary, completeness and closedness,
local boundedness and equicontinuity, Montel, the converse local-boundedness
result, Vitali-Porter, continuity of derivatives, and the chordal meromorphic
normal-family tail that later pages need. The B page is real and boundary-aware:
it distinguishes normality on `D` versus `C`, writes out a diagonal extraction,
and keeps the `nz` versus chordal `e^{nz}` contrast explicit.

The source harvest is also sufficient. Weber, Stein-Shakarchi, and
Axler-Bourdon-Ramey cover the Montel/Vitali normal-family machinery, while the
page's chordal packaging is an honest library synthesis on top of CA-11 and the
published compactness suppliers. The one deferred Weber section, `5.2 The
Riemann Mapping Theorem`, has an exact later home on `the-riemann-mapping-theorem`
and therefore stands as an ordinary later-page deferment.

**Verdict: sufficient after repair.**

### `holomorphic-inverse-and-weierstrass-preparation`

SC-3 is sufficient on the current manifest. The page carries the several-variable
biholomorphic dictionary, the real-versus-complex Jacobian determinant lemma,
the local inverse / implicit / constant-rank arc, the germ-ring and unit
dictionary, regular germs and Weierstrass polynomials, the preparation and
division route through slice zero counts and local Newton recurrences, the
Noetherian and UFD consequences, the no-isolated-zero theorem, and the
hypersurface Riemann extension theorem. The B page is likewise real, with the
prepared `z_1^2-z_2` example, the coordinate-change witness for `z_1 z_2`, a
division example, the holomorphic implicit-function computation, and the
noninjective exponential counterexample.

The source replacement in batch 7 is acceptable. Lebl remains a full primary
treatment for the page's core, Korevaar-Wiegerinck is an honest replacement for
the unrecovered Freitag full text, and Conrad plus Stacks are narrow but
appropriate algebra supports for the Gauss/atomicity auxiliaries. The important
closure point here is the opposite of CA-15: the batch-7 manifest already added
the earlier published pages `the-field-of-fractions-and-localisation` and
`constant-rank-submersions-and-regular-level-sets`, so the live scaffold closes
even though `research/plan-spec.json` will not carry those edges until splice.

Among the scope rows, only the duplicate associates result has an exact current
published home and therefore stands. The local analytic-hypersurface geometry
rows and the stronger global inverse / injective-map theorems still have no
exact current page id in `research/plan-spec.json`, so they are correctly
recorded as `owner-decision` scope exclusions rather than disguised omissions.

**Verdict: sufficient.**

## Scope and checks

The resolved scope receipt is current on disk:

- `stands`: 5 rows
- `owner-decision`: 8 rows

Checks run on the exact reviewed artifacts:

- `node tools/scope-decisions.mjs check --run frontier-22 --group d` — pass, `13` current decline(s), `0` error(s).
- `node tools/content-policy.mjs --manifest-only research/frontier-22-batch-6.pages.json research/frontier-22-batch-7.pages.json` — pass, `99` scoped item(s), `0` error(s), `0` warning(s).
- `node tools/coverage-checklist.mjs research/frontier-22-batch-6.coverage.json research/frontier-22-batch-7.coverage.json` — pass, `3` page(s), `87` harvested result(s), `0` error(s), `0` warning(s).
- Local closure audit over the group-`d` manifests after B6-1 — `0` missing prerequisite homes outside the manifest-local items or the transitive `requires` closure.
