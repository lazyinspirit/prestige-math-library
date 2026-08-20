# Frontier 16 — Alpha group c step-3 scaffold review

**Dispatch:** `step3-c`  
**Owned batches:** 3, 4, 7  
**Group rationale:** these pages share the one-variable analytic toolkit used by
ODEs, gauge integration, oscillatory examples, and elementary holomorphic
function theory.

I read the governing design sections, the current `plan-spec.json`, and each
owned batch's `.pages.json`, `.notes.md`, and `.coverage.json` together. I also
opened the published dependencies at the route-sensitive uses, checked all 180
distinct external dependency targets mechanically for `status: published` and
eligible statement provenance, and inspected the cited source bodies at the
claimed locators. All 180 targets are statement-provenance eligible: 71 are
`literature-derived` and 109 are `ai-altered`; none is `ai-generated` or
legacy-unclassified.

## Severity and disposition

| finding | pair | severity | disposition at this review |
|---|---|---|---|
| B3-1 | `the-gauge-integral-and-cousins-lemma` | publish-blocking | Route to Beta 3: repair the incomplete Fonda harvest and restore the missing indefinite-integral consequence. |
| B3-2 | `the-gauge-integral-and-cousins-lemma` | publish-blocking | Route to Beta 3: license or replace the countable-choice step in the HK Cauchy-criterion strategy. |
| B4-1 | `trigonometric-and-oscillatory-examples-in-one-variable` | publish-blocking if left unresolved | Repaired here: added the verified backward prerequisite `further-trigonometric-identities-and-inverses` to `plan-spec.json`; `validate-plan.mjs` is clean. |
| B7-1 | `analyticity-liouville-and-morera` | publish-blocking | Route to Beta 7: replace the rem-only FTA entry with the required distinct Liouville-proof theorem and retain an agreement remark. |

## Batch 3

### `picard-lindelof-and-first-order-odes` — sufficient

The controlling design is RC-10 in
`plan-realanalysis-completion-track.md`; the DG-8 occurrence is a downstream
seam reserving smooth dependence. The live specification's two direct
prerequisites already reach the other two prerequisites named by RC-10.

The standard development is present: the IVP/integral-equation equivalence,
the invariant Picard ball and contraction, Picard–Lindelöf, Weissinger's
criterion and factorial error estimates, Grönwall, stability, common local
existence, maximal gluing and continuation, compact escape, global existence
under global Lipschitz control, the scalar linear equation, Euler polygons,
Peano existence, and Osgood uniqueness. The proof decomposition is real. In
particular, Peano is routed through Euler polygons and a specialised
finite-dimensional Arzelà–Ascoli argument, not the invalid compactness claim
for raw Picard iterates.

Teschl Chapter 2 §§2.1–2.7 was harvested through Problem 2.25, and the smooth
dependence, Carathéodory, perturbation, and numerical-analysis dispositions
match their named destinations. Lebl §6.3 independently supplies the scalar
theorem, exponential and blow-up examples, the nonuniqueness and discontinuous
right-hand-side boundaries, and the integrating-factor exercise. Its selected
locator and headings are faithful. The companion is substantive: it contains
explicit existence, blow-up, nonexistence, nonuniqueness, and necessity-boundary
examples rather than token entries.

I approve Beta amendments B3-1 through B3-4: the Euler-polygonal Peano route,
reuse of the published Volterra witness, deferral of the premature Lebesgue
comparison, and replacement of the old thin RC-11 backing description by the
actual Fonda/BBT sources. I also approve the Weissinger, Osgood, and specialised
vector-valued compactness additions. No title overclaims its planned route and
the 26-item A page needs no split.

### `the-gauge-integral-and-cousins-lemma` — insufficient

The mathematical spine is otherwise strong: gauges, Cousin's lemma, compact HK
integration, uniqueness, linearity, monotonicity, restriction/additivity, the
Cauchy criterion, Saks–Henstock, Riemann agreement, the derivative FTC,
integration by parts and substitution, noncompact integrals, tail criteria,
comparison, and Hake are all represented. The companion gives genuine boundary
examples, including non-Riemann, unbounded, non-absolute, and non-derivative HK
integrands. No split is needed.

#### B3-1 — Fonda's claimed range is under-harvested

The coverage file claims all of Fonda Chapter 1 §§1.1–1.16 but omits named
results inside that range. Most importantly, Fonda Corollary 1.15 states that
the indefinite HK integral of a primitivable function is itself a primitive.
The checklist instead marks it `already-published` through
`cor-primitives-of-a-continuous-function`, which is only the continuous-Riemann
case and does not cover an arbitrary, possibly discontinuous derivative. The
scaffold must include this conclusion as a corollary or explicitly strengthen
`thm-every-derivative-is-henstock-kurzweil-integrable` to state and prove it.

The same harvest omits Fonda Proposition 1.16 (primitivable functions form a
vector space), Corollary 1.27 (the subdivision form of the Saks–Henstock
estimate), Corollaries 1.31–1.34 (closure and lattice consequences for the
absolute/L-integrable class), Theorem 1.35 (monotone convergence), Lemma 1.37,
and Theorem 1.38 (dominated convergence). Proposition 1.16 and Corollary 1.27
may be `inline` in the already planned integration-by-parts and Saks–Henstock
items. The absolute and convergence results may remain deferred to the named
measure-theory pages, but each needs its own truthful row. Fonda Proposition
1.14 should point to `cor-zero-derivative-implies-constant`, not the narrower
continuous-integrand primitive corollary.

Source carrying the omitted results: Alessandro Fonda, *The
Kurzweil–Henstock Integral for Undergraduates*, Chapter 1 §§1.6 and 1.11–1.14,
<https://dmi.units.it/~fonda/p2017_book_KH.pdf>.

#### B3-2 — the HK Cauchy-criterion route silently uses countable choice

The planned sufficiency strategy chooses successively finer gauges for a
sequence of tolerances. Avoiding a chosen fine partition does not remove the
first countable selection. Fonda's proof of Theorem 1.19 explicitly selects
both a gauge and a fine partition for every positive integer. The scaffold
lists neither `def-countable-choice` nor a choice-free replacement argument.

Beta 3 must do one of two honest things: add the published
`def-countable-choice` dependency (and the corresponding legal backward page
prerequisite if the closure does not already contain it), or replace the
strategy by a fully specified choice-free envelope/filter proof. Merely saying
that no partition was selected does not close the gauge selection. Source:
Fonda Theorem 1.19 in §1.8 at the URL above.

## Batch 4

### `trigonometric-and-oscillatory-examples-in-one-variable` — sufficient

This is a genuine B-heavy pair. The A page carries exactly the reusable
machinery: unit Lipschitz bounds for sine and cosine, uniform convergence of the
classical Weierstrass series, the probe/low-frequency/tail decomposition of the
nowhere-differentiability proof, the continuous Riemann–Lebesgue lemma, and the
finite sine-harmonic sum. The B page applies that machinery to reciprocal
oscillators, sine harmonics, the topologist's sine curve, elliptic arc length,
tangent, and the harmonic sine series, with explicit false implications.

Hunter and Calder give independent treatments of the Weierstrass material;
Lebl, Hutchinson, Gruenhage–Guest, Hall, Hu–Li–Li–Yan, Coffman–Pan–Zhang, Tao,
the NCSU Fourier text, and Lam carry the narrow supporting locators recorded in
the checklist. The harvest matches those ranges. The Hardy-range decline is
real: the selected elementary proof establishes the original restrictive
condition, while the sharper theorem needs unbuilt Fourier machinery. The
non-elementarity statement is separated into a source-cited
`proved_here: false` remark with a concrete local reduction and necessity
record; no later item depends on it.

I approve amendments RA4-2 through RA4-6, including the correction of
"pointwise divergent", reuse of immutable published B-page witnesses, the
Weierstrass and sine-curve decompositions, and the exact elliptic-integral
fallback. The A page has 11 items and needs no split.

#### B4-1 — backward prerequisite repaired

The tangent example uses `def-principal-inverse-tangent`, whose home is
`further-trigonometric-identities-and-inverses`; that page was not in the
declared closure. I added it as a direct backward prerequisite in
`research/plan-spec.json`, matching the batch manifest and amendment RA4-1.
`node tools/validate-plan.mjs research/plan-spec.json` then passed with no plan
errors.

## Batch 7

### `analyticity-liouville-and-morera` — insufficient

Apart from B7-1, the page has the standard development and a credible proof
decomposition: Taylor expansion on the distance-to-complement disc,
holomorphic iff analytic, planar real analyticity and smoothness, zero order
and factorisation, coefficient estimates, Liouville, polynomial growth,
Morera with its continuity boundary, a concentric-subdisc estimate,
Weierstrass convergence of all derivatives, parameter integrals, the mean-value
property, and the dense-image corollary. The companion has real boundary cases,
not token examples. The declared compact-convergence prerequisite is a verified
legal backward edge, and the Riemann–Fubini input is transitive in the current
closure. No split is needed.

The corrected Ahlfors ranges, Stein–Shakarchi §§4–5.3, Weber §§2.1–2.4,
Shabat pp. 69–72, Taylor's planar real-analytic exercise, and Krantz
§§3.1.3–3.1.6 match the harvested headings and dispositions. I approve Beta
findings F1–F8 and prose amendments 1–5, subject to replacing their old FTA
entry as follows.

#### B7-1 — the Liouville FTA proof is still only a remark

The manifest contains `rem-fundamental-theorem-of-algebra-via-liouville`.
That is thinner than both the design's analytic-FTA landmark and the explicit
run-specific owner ruling. Add a distinct theorem, proposed id
`thm-fundamental-theorem-of-algebra-liouville-proof`, stating the published
FTA claim and proving it by the Liouville route. Ahlfors Chapter 4 §2.3,
Stein–Shakarchi Chapter 2 Corollary 4.6, Weber Corollary 2.3.3, and Krantz
§3.1.4 all carry this proof.

The new proof must not list
`thm-fundamental-theorem-of-algebra-minimum-modulus-proof` as a logical
dependency: that would make the second proof depend on the first theorem it is
supposed to establish. Use Liouville, holomorphy of a zero-free reciprocal, and
polynomial growth to bound the reciprocal outside and inside a disc. Retain a
separate agreement remark linking the minimum-modulus and Liouville routes.
The reciprocal backlink from the already-published minimum-modulus theorem is
outside this group Alpha's ordinary published-item write boundary and must be
queued explicitly rather than silently omitted.

## Per-pair verdicts

| A page | verdict | reason |
|---|---|---|
| `picard-lindelof-and-first-order-odes` | sufficient | Standard ODE development, faithful two-source harvest, real companion, and honest decomposition. |
| `the-gauge-integral-and-cousins-lemma` | insufficient | Fonda's selected range is under-harvested, its indefinite-integral corollary is missing, and the Cauchy-criterion route has an unlicensed countable selection. |
| `trigonometric-and-oscillatory-examples-in-one-variable` | sufficient | Standard and design-specific examples are present; the missing backward prerequisite was repaired and validated. |
| `analyticity-liouville-and-morera` | insufficient | The required distinct Liouville proof of the fundamental theorem of algebra is absent. |

