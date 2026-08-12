# Frontier 12 batch 4 — Beta scaffold notes

## Outcome and split decision

The scaffold contains four pages and 59 items: `pi-the-equivalent-characterizations` has 12 A-page items, its companion has 7; `line-integrals-and-the-gradient-theorem` has 31 A-page items, its companion has 9. Neither A page approaches the active 60-item ceiling. **No split is proposed.** The exact cut is therefore not applicable, and no result was trimmed to avoid a split.

The two A pages have no dependency on one another. Each cites the published arc-length material directly through its own declared `requires` closure. The B pages remain leaves: no A-page item depends on either companion.

## Two-paragraph summaries for step 4

### `pi-the-equivalent-characterizations`

The library defines pi as twice the least positive zero of cosine. This page proves that the same number is the least positive zero of sine, half the least common period of sine and cosine, the length of a unit semicircle, every circle's circumference-to-diameter ratio, and the Riemann area of the unit disc. “Once around” and the local graph-area convention are explicit, preventing traversal and measure-theory ambiguities.

Three analytic representations are proved without assuming a geometric formula: the Gregory–Leibniz series with a finite integral remainder, Wallis's product from its integral recurrence and squeeze, and Viète's product from the finite double-angle identity and the published small-angle limit. A final ledger records every equivalence and the precise theorem establishing it.

### `line-integrals-and-the-gradient-theorem`

This page defines scalar and vector line integrals on piecewise-C1 paths and proves independence of the chosen smooth partition. It establishes reparametrization, reversal, concatenation, and length-estimate laws, identifies the integral of one with arc length, and differentiates the arc-length accumulation function. Regularity, orientation, constant paths, and repeated traversals are treated explicitly.

The gradient theorem yields path independence and zero circulation for conservative fields. Conversely, path independence constructs a potential on a nonempty piecewise-C1 path-connected open domain. Closed and exact C1 fields are separated carefully; mixed partials give exact implies closed, while a radial potential proves the converse on star-shaped domains. Type I and Type II boundary identities and finite shared-arc cancellation then give Green's theorem and the area formula for finite unions of elementary regions. The companion exposes the punctured-plane obstruction and other sign, path, and domain errors.

Both summaries are exactly two paragraphs and under 150 words.

## Applyable prose-scaffold amendments

The dispatch identifies `research/plan-complex-analysis-track.md`. Its only line-integral scaffold is the dependency-table row at line 158.

Exact old text:

> `| 181 | line integrals and the gradient theorem | Green's theorem, the Poincaré lemma on star-shaped domains, exact/closed forms, and **the vortex field $(-y, x)/(x^2+y^2)$** — the real-variable shadow of the winding number, already scaffolded there |`

Exact replacement:

> `| 241 | line integrals and the gradient theorem | scalar $ds$ and vector line integrals on piecewise-$C^1$ paths; partition and parametrisation independence, reversal and concatenation; the gradient theorem; Green's theorem for elementary regions and finite gluings; conservative/path-independent/zero-loop equivalence; exact versus closed fields; the Poincaré lemma on star-shaped domains; and **the vortex field $(-y,x)/(x^2+y^2)$** on the punctured plane |`

Decision D2 keeps the old row's Green-theorem promise in a precise elementary-region form. The orchestrator amended the page to require `fubini-and-change-of-variables`, whose closure supplies the graph-region and Jordan-integration machinery. The scaffold now defines Type I and Type II graph-bounded regions, requires each elementary piece to admit both descriptions, defines positive orientation by explicit graph-arc traversal, proves the two coordinate identities separately, proves cancellation and integral additivity for a nonempty finite gluing along complete shared boundary arcs, and combines them into Green's theorem and the boundary formula for area.

**Named limitation — arbitrary Jordan domains.** The theorem does not start from an arbitrary simple closed curve or infer its interior. Its hypothesis supplies a nonempty finite decomposition into compact elementary pieces with pairwise disjoint interiors, piecewise-C1 graph boundaries, and intersections consisting only of complete shared boundary arcs and endpoints; every positive-length internal arc belongs to exactly two pieces with opposite induced orientations, and the boundary orientation is inherited after those paired arcs are cancelled. Extending this to arbitrary Jordan domains would require the Jordan curve theorem and further decomposition geometry. The library's `rem-jordan-curve-theorem` records that result with `proved_here: false`, so it is not used as a dependency or hidden premise.

The older block in `research/plan-realanalysis-pages.md` at RA-40 makes the same Green-theorem promise and additionally asks for a simply-connected theorem, a solenoidal three-dimensional example, and an unrelated differentiation-under-the-integral counterexample. The dispatch supersedes those additions. The star-shaped Poincaré theorem is fully proved here; simple connectedness is mentioned only as a later-topology outlook, never used as an unproved implication.

No prose scaffold exists for the pi page. Step 4 should use the two-paragraph summary above as its new prose record rather than inventing one from the short dispatch description.

## Mathematical design and authoring obligations

### Pi pair

- Preserve the published convention: if `gamma` is the least positive cosine zero, then pi is `2 gamma`; the page begins by repackaging, not redefining, that constant.
- The unit-disc calculation uses only the local Riemann area between continuous graphs. It is not a definition of Jordan or Lebesgue area for arbitrary planar sets.
- The unit semicircle and circumference proofs start from the polygonal-supremum definition of length and invoke the published C1 speed theorem. The word “circumference” means one traversal.
- Gregory–Leibniz must be proved from the finite geometric identity with its signed integral remainder. Do not integrate an infinite series at the endpoint without a convergence theorem.
- Wallis must retain the recurrence, the even/odd closed forms, and the squeeze between neighbouring integrals; the product theorem may then take the limit.
- Viète must retain the finite identity before the limiting step. Use repeated double-angle identities and `sin x/x -> 1`; do not use polygon areas or circumference, which would make the equivalence circular.
- The ledger is a theorem, not a remark: it states one constant and names the exact zero, period, length, area, ratio, series, and product equalities already proved.

### Line-integral pair

- “Path-connected” always means connected by a piecewise-C1 path on this page. Bare topological connectedness is neither sufficient by definition nor silently substituted.
- Scalar line integrals contain speed and ignore orientation; vector line integrals contain the signed velocity and reverse sign. Bijective regular reparametrizations are distinguished from multiple covers.
- The potential construction fixes a basepoint and compares paths by a terminal coordinate segment. Openness licenses that small segment, path independence licenses well-definedness, and continuity of the field gives the difference-quotient limit.
- Exactness is stated for a C1 field with a C2 potential, so the mixed partials invoked in exact-implies-closed exist and are continuous. The rectangular-difference lemma supplies Clairaut instead of silently citing an unavailable mixed-partial theorem.
- The star-shaped potential is `phi(x)=integral_0^1 <F(a+t(x-a)),x-a> dt`. At authoring, localize around each `x` before differentiating under the integral, use closedness to identify a total `t` derivative, and keep the `t=0` boundary term.
- The companion vortex calculation must verify all three facts separately: its domain is piecewise-C1 path-connected, its cross partials agree, and its unit-circle integral is `2 pi`. That integral, plus the gradient theorem, is the non-exactness proof.
- The common physics convention `F=-grad V` is not used. Here a potential for a conservative field means `F=grad phi`.
- A Type I piece proves only the `P dx` half of Green's formula, and a Type II piece proves only the `Q dy` half. The theorem applies each half to an elementary piece that admits both descriptions; never claim that one graph description alone proves the full formula.
- Positive orientation is not inferred from a Jordan curve. Author it from the explicit lower/right/upper/left traversal (or its Type II analogue), delete paired internal arcs in a finite gluing, and verify that every surviving arc keeps the region locally on the left.
- The gluing lemma has two independent obligations: reversed shared arcs cancel in the line-integral sum, while zero extensions and content-zero overlaps make the region integrals additive. Pairwise disjoint interiors, complete shared arcs, and exactly two oppositely oriented incident pieces per internal arc are hypotheses, not consequences.
- The Green theorem assumes `P,Q` are C1 on an open neighbourhood of the whole compact union. The area corollary uses `(P,Q)=(-y/2,x/2)`, and also records the one-sided choices `(0,x)` and `(-y,0)`.

## Canonical-coverage harvest and source ledger

`frontier-12-batch-4.coverage.json` records 75 source-anchored headings/results: 48 `included`, 12 `inline`, 5 `already-published`, and 10 `out-of-scope`. Thus 60 source entries feed new scaffolded items, 5 were confirmed on disk, and 10 were declined. The canonical checklist adds 17 `included` entries. There are no `deferred` entries.

### Pi sources actually read

1. Jiří Lebl, *Basic Analysis II*, §11.4.2 Proposition 11.4.2(8)–(13), §11.4.3 through polar coordinates, and Exercise 11.4.11(1)–(4): <https://www.jirka.org/ra/html/sec_complexexp.html>. This supplies an independent analysis-text treatment of the zero/period/circle convention and the finite-remainder route to Gregory–Leibniz.
2. Imperial College London, *History of Mathematics, Problems VI solutions*, PDF pp. 1–2, Questions 1–3: <https://www.ma.imperial.ac.uk/~bin06/HoM/HoM17/m3hsoln6.pdf>. This supplies the named Viète and Wallis developments and exposes, but does not import, Girard and de Moivre.
3. H. Jerome Keisler, *Elementary Calculus: An Infinitesimal Approach*, Chapter 4A §4.4, PDF pp. 213–214: <https://people.math.wisc.edu/~hkeisler/chapter_4a.pdf>. Keisler takes unit-disc area as the definition of pi, making it a useful independent convention check against this library's zero-based definition.

### Line-integral sources actually read

1. Jiří Lebl, *Basic Analysis II*, §9.2 Definition 9.2.5 through Example 9.2.18 and the following arc-length paragraph: <https://www.jirka.org/ra/html/sec_pathintegral.html>.
2. Jiří Lebl, *Basic Analysis II*, §9.3 opening through Definition 9.3.8: <https://www.jirka.org/ra/html/sec_pathind.html>.
3. Jean-Baptiste Campesato, *Poincaré Lemma* (University of Toronto MAT237 notes), §§1–2, Definition 1 through Proposition 12, PDF pp. 1–7: <https://www.math.toronto.edu/campesat/ens/1920/poincare.pdf>. This is the independent full-note treatment of exactness, closedness, star-shaped domains, coordinate and radial potential constructions, and the punctured-plane counterexample.
4. Jiří Lebl, *Basic Analysis II*, §10.6 Definition 10.6.1 through Example 10.6.5 and Exercises 10.6.4–10.6.5: <https://www.jirka.org/ra/html/sec_mvgreenstheorem.html>. This supplies the positive-orientation convention, Type I/II graph regions, the two half-proofs, the proved Type III theorem, shared-arc cancellation, and the area formulas. Its broader general-domain statement is not imported.
5. Nathaniel Donaldson, *Math 2E*, §16.4, the Definition and Green theorem on PDF p. 1, the Calculating Areas corollary on p. 3, and A Sketch Proof on p. 5: <https://www.math.uci.edu/~ndonalds/math2e/16-4-green.pdf>. This is the independent Green-theorem treatment: it separates the Type I and Type II identities, then glues pieces by cancelling oppositely oriented internal arcs.

The three Lebl URLs are separate real locators in one textbook and count as one treatment, not three. Campesato is independent for the Poincaré material; Donaldson is the second independent treatment at Green-theorem depth.

OpenStax *Calculus Volume 3* §§6.2–6.3 and David Guichard's *Calculus* §§16.2–16.3 were also read as supplementary convention checks, not used as primary harvest sources. Guichard's converse from matching cross partials is phrased without an adequate global domain hypothesis; this scaffold follows the precise star-shaped theorem instead.

### Licensing and reuse

Lebl's book carries its Creative Commons notice on the book site; OpenStax is openly licensed. No explicit redistribution licence was found in the Imperial, Keisler-chapter, Toronto, or Donaldson PDFs at the passages read. Those sources are therefore used only for factual research and locator-backed paraphrase. No proof text, figures, exercises, or source-specific prose is copied into the scaffold. Item titles name classical results; final statements and proofs will be newly worded and will retain source-reference URLs.

### Declines most likely to be challenged

- Lebl's complex-exponential periodicity is declined because complex exponentiation is outside the declared closure; the real least-period theorem is already published and is used instead.
- Lebl's polar-coordinate paragraph and inverse-tangent function construction are adjacent coordinate/inverse-function topics. The finite integral remainder needed for Gregory–Leibniz is retained.
- Imperial Question 2 (Girard) requires spherical geometry and gives no Euclidean pi characterization.
- The de Moivre/central-binomial asymptotic requires an additional asymptotic-enumeration proof; Wallis's exact recurrence and squeeze already establish the requested product.
- The global estimate `|sin x| <= |x|` is not a pi characterization and is not smuggled into a proof; Viète uses the already published local limit.
- Lebl's general bounded-domain definition and measurability proposition are not imported: this fix is deliberately limited to supplied Type I/Type II elementary decompositions, so the stronger geometry remains outside the theorem's claim.
- Lebl's triangle-area exercise is not added to the already accepted companion page; the general boundary-area corollary that licenses that computation is included on the A page.

Every decline has a result-specific reason of at least 40 characters in the machine harvest. No prerequisite lemma needed by a retained theorem was declined.

## Convention disagreements

- The library defines pi from the first positive cosine zero; Lebl uses the same route, Keisler uses unit-disc area, and classical geometry texts often start from circumference/diameter. The page proves equality rather than switching definitions.
- Some sources use “smooth path” to mean regular C1, excluding zero velocity. The published arc-length theorem permits a continuous derivative extension that may vanish. This scaffold permits such paths and imposes nonzero derivative only on the bijective reparametrizing map where substitution/orientation needs it.
- Scalar `ds` integrals are unoriented; vector-field/one-form integrals are oriented. Repeated traversal is not a reparametrization because the parameter map is not bijective.
- “Connected domain” in informal calculus sources often hides polygonal/path connectivity of open Euclidean sets. This page states piecewise-C1 path-connectedness at every equivalence that uses a connecting path.
- Cross-partial symmetry is local; existence of a global potential is not. The Toronto notes and Lebl impose star-shapedness for the converse, whereas Guichard's terse converse omits the required global hypothesis.
- Mathematics uses `F=grad phi` for the potential convention here; physics often writes a force as `F=-grad V`.
- A region being Type I supplies the vertical-section half of Green's proof, while Type II supplies the horizontal-section half. Full Green on one elementary piece uses both descriptions; a finite union then uses explicit gluing data.
- “Positively oriented” means that the region stays locally on the left. For a union with holes this makes outer boundary components counterclockwise and inner components clockwise, generated here by cancellation rather than a general Jordan-domain theorem.

## Published dependencies opened on disk and confidence route

All 44 external item dependencies below were opened from `items/<id>.md`, and every file says `status: published`. There is no unambiguously false published dependency.

### Pi pair — exact statement confirmed on disk and independently checked against the listed analysis sources or standard derivation

`cor-pi-is-the-first-positive-sine-zero`, `cor-sin-x-over-x-limit`, `cor-trigonometric-parity-and-pythagorean-identity`, `def-darboux-integral`, `def-p-norms-on-rn`, `def-path-polygonal-length-and-rectifiability-in-rn`, `def-pi-via-first-positive-cosine-zero`, `def-sequence`, `def-series`, `def-tangent-cotangent-secant-cosecant`, `lem-integral-elementary-bounds`, `thm-algebra-of-limits`, `thm-arc-length-is-invariant-under-monotone-reparametrization`, `thm-c1-paths-have-length-equal-to-the-integral-of-speed`, `thm-continuous-implies-integrable`, `thm-integration-by-parts`, `thm-of-square-roots`, `thm-quarter-turn-values-and-shift-formulas`, `thm-sine-and-cosine-addition-formulas`, `thm-sine-and-cosine-derivatives`, `thm-sine-cosine-signs-monotonicity-and-ranges`, `thm-sine-cosine-zero-sets-and-fundamental-period`, `thm-squeeze`, `thm-substitution`, and `thm-tangent-cotangent-secant-cosecant-derivatives-and-periods`.

The precise statement, hypotheses, and convention were checked in each file. For legacy AI-authored trigonometric proofs, only the displayed published statement is load-bearing; I independently confirmed it against Lebl's analysis text and elementary derivations from the published addition/derivative identities. `def-sequence` has no audit stamp, so its exact indexing convention was confirmed directly on disk; it is used only to state convergence of explicit partial-sum/product sequences. `thm-of-square-roots` is published on disk even though a local manifest-only lookup can miss it; its existence/uniqueness statement and audit record were checked directly.

### Line-integral pair — exact statement confirmed on disk and independently checked against Lebl/Toronto

`cor-mean-value-theorem`, `cor-piecewise-c1-paths-have-additive-speed-integral-length`, `def-arc-length-function`, `def-convex-subset-of-euclidean-space`, `def-directional-and-partial-derivatives`, `def-euclidean-inner-product`, `def-jacobian-matrix-and-gradient`, `lem-integral-elementary-bounds`, `thm-additivity-over-subintervals`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-chain-rule-for-total-derivatives`, `thm-continuous-partial-derivatives-imply-total-differentiability`, `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle`, `thm-ftc-first-part`, and `thm-newton-leibniz-with-interior-derivative`.

The shared dependencies `def-path-polygonal-length-and-rectifiability-in-rn`, `thm-c1-paths-have-length-equal-to-the-integral-of-speed`, `thm-continuous-implies-integrable`, and `thm-substitution` were opened once and checked for both pairs. Their exact conventions, not their scaffold summaries, control the new statements.

`lem-integral-elementary-bounds`, `thm-additivity-over-subintervals`, `thm-cauchy-schwarz-and-the-euclidean-norm`, and `thm-integration-by-parts` carry published-audit verification on disk. The remaining dependencies carry an audit record and/or literature references; I also confirmed the exact clause used by direct mathematical inspection. `thm-integration-by-parts`, `lem-integral-elementary-bounds`, `thm-squeeze`, and the shared integral/limit items are used by the pi pair; their published-audit route supplements the independent Wallis/Gregory source check.

Decision D2 adds five direct published dependencies, all reached through `fubini-and-change-of-variables`: `def-riemann-integral-over-a-jordan-set`, `thm-fubini-over-a-region-between-continuous-graphs`, `thm-graphs-of-continuous-functions-have-content-zero`, `thm-jordan-fubini-by-sections`, and `thm-multidimensional-integral-properties`. Their exact statements were opened above: graph-bounded regions are compact Jordan sets with the vertical Fubini formula; Jordan-Fubini explicitly includes the symmetric coordinate-block assertion; zero extensions define region integrals; multidimensional integrals are linear; and continuous graphs have content zero. These are precisely the clauses used in the two half-proofs and the gluing lemma.

## Proof-contract status

`frontier-12-batch-4.proof-contracts.json` begins a version-1 contract for all 48 proof-bearing items (theorems, lemmas, corollaries, examples, counterexamples, and false statements). It records the exact scaffold strategy as the planned main derivation, every planned direct dependency as a citation-plan entry, and all eight boundary dispositions. At step 5, each generic planned block must be replaced by the final numbered-step map, exact on-disk quotations, and exact citation uses; the current empty `citations` arrays are intentional scaffold-time placeholders.

## Component-provenance plan and per-item rationale

No Statement or Construction is classified `ai-generated`. Classical sourced statements are `literature-derived`; library-specific packaging, ledgers, corollaries, and diagnostic examples are `ai-altered`. Proofs are planned `ai-altered` because the final author must synthesize the cited source routes with this library's earlier definitions and boundary conventions. Definitions and the scope remark have `proof: not-applicable`.

| Item | Statement | Proof | Rationale |
|---|---|---|---|
| `def-circular-arcs-circumference-and-diameter` | `literature-derived` | `not-applicable` | Lebl §11.4.3 plus the published polygonal and C1 arc-length theorems. The wording is normalized to this library’s conventions; it makes no independent proof claim. |
| `def-riemann-area-between-continuous-graphs` | `ai-altered` | `not-applicable` | Keisler §4.4, checked against the published substitution and trigonometric identities. The wording is normalized to this library’s conventions; it makes no independent proof claim. |
| `thm-pi-zero-and-period-characterizations` | `literature-derived` | `ai-altered` | Lebl §11.4.2 plus the three published zero/period items. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `thm-unit-semicircle-arc-length-is-pi` | `literature-derived` | `ai-altered` | Lebl §11.4.3 plus the published polygonal and C1 arc-length theorems. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `thm-circle-circumference-diameter-ratio-is-pi` | `literature-derived` | `ai-altered` | Lebl §11.4.3 plus the published polygonal and C1 arc-length theorems. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `thm-disc-area-is-pi-r-squared` | `literature-derived` | `ai-altered` | Keisler §4.4, checked against the published substitution and trigonometric identities. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `thm-gregory-leibniz-series-for-pi-from-a-finite-remainder` | `literature-derived` | `ai-altered` | Lebl Exercise 11.4.11, with its finite remainder retained. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `lem-wallis-integrals-recurrence-and-squeeze` | `literature-derived` | `ai-altered` | Imperial Problems VI Question 3 and the published integration-by-parts/squeeze machinery. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `thm-wallis-product-for-pi` | `literature-derived` | `ai-altered` | Imperial Problems VI Question 3 and the published integration-by-parts/squeeze machinery. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `lem-viete-finite-cosine-product-and-nested-radicals` | `literature-derived` | `ai-altered` | Imperial Problems VI Question 1, recast by finite double-angle identities and the published small-angle limit. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `thm-viete-product-for-pi` | `literature-derived` | `ai-altered` | Imperial Problems VI Question 1, recast by finite double-angle identities and the published small-angle limit. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `thm-pi-equivalent-characterizations-ledger` | `ai-altered` | `ai-altered` | a checkable synthesis of the separately sourced A-page equivalences. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `ex-unit-circle-pi-calibration-table` | `ai-altered` | `ai-altered` | Lebl §11.4.3 plus the published polygonal and C1 arc-length theorems. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `ex-gregory-leibniz-partial-sums-with-certified-error` | `ai-altered` | `ai-altered` | Lebl Exercise 11.4.11, with its finite remainder retained. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `ex-wallis-partial-products-and-integral-bounds` | `ai-altered` | `ai-altered` | Imperial Problems VI Question 3 and the published integration-by-parts/squeeze machinery. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `ex-viete-first-nested-radical-approximants` | `ai-altered` | `ai-altered` | Imperial Problems VI Question 1, recast by finite double-angle identities and the published small-angle limit. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `fs-any-positive-zero-of-sine-characterizes-pi` | `ai-altered` | `ai-altered` | Lebl §11.4.2 plus the three published zero/period items. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `fs-circumference-to-radius-ratio-is-pi` | `ai-altered` | `ai-altered` | Lebl §11.4.3 plus the published polygonal and C1 arc-length theorems. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `cex-a-multiple-traversal-has-the-same-circle-trace-but-greater-length` | `ai-altered` | `ai-altered` | Lebl §11.4.3 plus the published polygonal and C1 arc-length theorems. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `def-piecewise-c1-path-operations-and-oriented-reparametrizations` | `literature-derived` | `not-applicable` | Lebl §9.2, Definitions 9.2.5–9.2.14 and Propositions 9.2.10–9.2.15. The wording is normalized to this library’s conventions; it makes no independent proof claim. |
| `def-scalar-and-vector-line-integrals-along-piecewise-c1-paths` | `literature-derived` | `not-applicable` | Lebl §9.2 and the published arc-length/integral estimates. The wording is normalized to this library’s conventions; it makes no independent proof claim. |
| `lem-line-integrals-are-independent-of-the-piecewise-c1-partition` | `literature-derived` | `ai-altered` | Lebl §9.2, Definitions 9.2.5–9.2.14 and Propositions 9.2.10–9.2.15. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `thm-line-integrals-under-oriented-reparametrization` | `literature-derived` | `ai-altered` | Lebl §9.2, Definitions 9.2.5–9.2.14 and Propositions 9.2.10–9.2.15. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `thm-line-integrals-under-reversal-and-concatenation` | `literature-derived` | `ai-altered` | Lebl §9.2, Definitions 9.2.5–9.2.14 and Propositions 9.2.10–9.2.15. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `thm-scalar-and-vector-line-integral-estimates` | `literature-derived` | `ai-altered` | Lebl §9.2 and the published arc-length/integral estimates. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `cor-scalar-line-integral-of-one-is-arc-length` | `ai-altered` | `ai-altered` | Lebl §9.2 and the published arc-length/integral estimates. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `cor-arc-length-accumulation-derivative-is-speed` | `ai-altered` | `ai-altered` | Lebl §9.2 and the published arc-length/integral estimates. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `def-piecewise-c1-path-connected-conservative-and-path-independent` | `literature-derived` | `not-applicable` | Lebl Propositions 9.3.3–9.3.4 and Toronto Theorem 3. The wording is normalized to this library’s conventions; it makes no independent proof claim. |
| `thm-gradient-theorem-for-line-integrals` | `literature-derived` | `ai-altered` | the standard FTC-for-line-integrals argument in Lebl §9.3, rebuilt from the published total chain rule and Newton–Leibniz theorem. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `cor-conservative-fields-are-path-independent-and-have-zero-circulation` | `ai-altered` | `ai-altered` | Lebl Propositions 9.3.3–9.3.4 and Toronto Theorem 3. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `thm-path-independence-iff-zero-closed-loop-integrals` | `literature-derived` | `ai-altered` | Lebl Propositions 9.3.3–9.3.4 and Toronto Theorem 3. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `thm-path-independent-field-has-a-potential-by-line-integrals` | `literature-derived` | `ai-altered` | Lebl Propositions 9.3.3–9.3.4 and Toronto Theorem 3. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `thm-conservative-path-independent-and-zero-loop-equivalence` | `literature-derived` | `ai-altered` | Lebl Propositions 9.3.3–9.3.4 and Toronto Theorem 3. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `cor-potentials-differ-by-a-componentwise-constant` | `ai-altered` | `ai-altered` | Lebl Propositions 9.3.3–9.3.4 and Toronto Theorem 3. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `lem-potentials-glue-over-a-path-connected-overlap` | `ai-altered` | `ai-altered` | Lebl Propositions 9.3.3–9.3.4 and Toronto Theorem 3. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `def-closed-and-exact-c1-vector-fields` | `literature-derived` | `not-applicable` | Toronto Propositions 4, 7, and 10, with the mixed-partial proof made explicit. The wording is normalized to this library’s conventions; it makes no independent proof claim. |
| `lem-clairaut-for-c2-potentials-by-rectangular-differences` | `literature-derived` | `ai-altered` | Toronto Propositions 4, 7, and 10, with the mixed-partial proof made explicit. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `thm-exact-c1-vector-fields-are-closed` | `literature-derived` | `ai-altered` | Toronto Propositions 4, 7, and 10, with the mixed-partial proof made explicit. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `def-star-shaped-open-subset-of-rn` | `literature-derived` | `not-applicable` | Lebl Theorem 9.3.6 and Toronto Theorems 5, 8, and 11. The wording is normalized to this library’s conventions; it makes no independent proof claim. |
| `thm-poincare-lemma-for-star-shaped-domains` | `literature-derived` | `ai-altered` | Lebl Theorem 9.3.6 and Toronto Theorems 5, 8, and 11. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `cor-closed-exact-and-conservative-equivalence-on-star-shaped-domains` | `ai-altered` | `ai-altered` | Lebl Propositions 9.3.3–9.3.4 and Toronto Theorem 3. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `def-type-i-type-ii-and-elementary-green-regions` | `literature-derived` | `not-applicable` | Lebl §10.6 and Donaldson §16.4 define the two graph-region types and use their conjunction in the elementary proof. The finite-union wording is normalized to the dispatch's explicit gluing hypothesis. |
| `def-positive-orientation-for-elementary-region-boundaries` | `literature-derived` | `not-applicable` | Lebl Definition 10.6.2 and Donaldson's opening definition give the region-on-the-left convention. The graph-arc traversal makes it usable without the Jordan curve theorem. |
| `lem-green-type-i-boundary-identity` | `literature-derived` | `ai-altered` | Lebl's Type I half-proof and Donaldson's sketch stage 1. The final proof is reorganized around the library's graph-region Fubini theorem and explicit piecewise-C1 boundary convention. |
| `lem-green-type-ii-boundary-identity` | `literature-derived` | `ai-altered` | Lebl's Type II half-proof and Donaldson's sketch stage 2. The final proof is reorganized around the published symmetric Jordan-Fubini assertion. |
| `lem-green-boundary-cancellation-under-finite-gluing` | `literature-derived` | `ai-altered` | Lebl Example 10.6.5 and Donaldson's sketch stage 3 both cancel oppositely traversed internal arcs. The scaffold also states the separate zero-extension proof of region-integral additivity. |
| `thm-greens-theorem-for-finite-unions-of-elementary-regions` | `literature-derived` | `ai-altered` | Lebl Theorem 10.6.4's locally proved Type III case and Donaldson's elementary decomposition proof support the exact narrowed theorem. Arbitrary Jordan domains are excluded. |
| `cor-area-as-a-line-integral-for-elementary-regions` | `literature-derived` | `ai-altered` | Lebl Exercise 10.6.4 and Donaldson's Calculating Areas corollary give the three standard coordinate boundary formulas. The final derivation uses the local Green theorem and Jordan content. |
| `rem-greens-theorem-jordan-domain-limitation` | `ai-altered` | `not-applicable` | This is a source-grounded, library-specific scope record: both treatments distinguish the elementary proof from a general-domain claim, and the local Jordan curve theorem is not proved here. |
| `rem-domain-hypotheses-for-closed-versus-exact` | `ai-altered` | `not-applicable` | Toronto Propositions 4, 7, and 10, with the mixed-partial proof made explicit. The wording is normalized to this library’s conventions; it makes no independent proof claim. |
| `ex-scalar-line-integral-over-a-unit-semicircle` | `literature-derived` | `ai-altered` | Lebl Examples 9.2.16 and 9.2.18. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `ex-line-segment-scalar-and-vector-line-integrals` | `literature-derived` | `ai-altered` | Lebl Examples 9.2.16 and 9.2.18. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `ex-gradient-theorem-for-a-polynomial-potential` | `ai-altered` | `ai-altered` | the standard FTC-for-line-integrals argument in Lebl §9.3, rebuilt from the published total chain rule and Newton–Leibniz theorem. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `ex-constructing-a-potential-on-an-open-rectangle` | `literature-derived` | `ai-altered` | Toronto Propositions 6, 9, and 12. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `cex-the-one-form-y-dx-is-path-dependent` | `literature-derived` | `ai-altered` | Lebl Example 9.3.1. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `cex-vortex-field-is-closed-but-not-exact-on-the-punctured-plane` | `literature-derived` | `ai-altered` | Lebl Example 9.3.7 and the Toronto d’Alembert counterexample. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `fs-every-closed-c1-field-on-a-connected-open-set-is-exact` | `ai-altered` | `ai-altered` | Toronto Propositions 4, 7, and 10, with the mixed-partial proof made explicit. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `fs-vector-line-integrals-are-invariant-under-reversal` | `ai-altered` | `ai-altered` | Lebl §9.2, Definitions 9.2.5–9.2.14 and Propositions 9.2.10–9.2.15. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |
| `ex-a-vector-line-integral-counts-multiple-traversals` | `ai-altered` | `ai-altered` | Lebl §9.2, Definitions 9.2.5–9.2.14 and Propositions 9.2.10–9.2.15. The final proof will be newly organized around the listed on-disk dependencies, so it is altered rather than copied. |

## Blockers and step-5 handoff

No shell, web, edit, git, or other permission prompt was requested. No indispensable operation was blocked by the sandbox. The two individual required gates are green at handoff; the prohibited wrapper `tools/gates.mjs` was not run. Decision D2 is fully reflected in all four batch artifacts, with the arbitrary-Jordan-domain limitation recorded explicitly.
