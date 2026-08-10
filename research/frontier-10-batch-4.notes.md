# Beta-frontier-10-4 — scaffold notes (steps 1–2)

This is the durable reasoning record for orders 163–166. The only repo outputs in scope are the batch manifest, this note, the coverage harvest, and the proof-contract file. No published item, library page, normative document, or plan specification was edited.

## 1. Result and reading order

| order | page | kind | items |
|---:|---|---|---:|
| 163 | `bounded-variation-and-riemann-stieltjes` | A | 32 |
| 164 | `bounded-variation-and-riemann-stieltjes-examples` | B | 12 |
| 165 | `improper-integrals` | A | 24 |
| 166 | `improper-integrals-examples` | B | 12 |

The batch has 80 items. Both A pages are below the hard 60-item limit, so **no split is proposed**. The precise cut remains the dispatched cut: bounded variation/Riemann–Stieltjes through Young integration at 163–164, then improper endpoint and infinite-interval integrals at 165–166. Bounded variation supplies the intended earlier-page machinery for `arc-length-and-rectifiable-curves` and for the later sharp fundamental-theorem page.

All same-page A edges point backward. A B item depends only on its A page, an earlier page, or an earlier item on the same B page. There are no cross-batch edges and no forward load-bearing references.

## 2. Exact prose-scaffold amendments

### 2.1 `research/plan-realanalysis-pages.md`

Replace this exact old RA-20 block:

> **RA-20 Bounded Variation and the Riemann-Stieltjes Integral** <- RA-19
> bounded variation, total variation, positive and negative variation; the
> **Jordan decomposition**; BV is closed under sums and products; BV implies
> Riemann integrable; the Riemann-Stieltjes integral (refinement and mesh
> definitions); existence for a continuous integrand against a BV integrator;
> **Rudin's existence ladder**; RS integration by parts; reduction to the Riemann
> integral for a C^1 integrator; **Young's Holder condition for RS existence**
> (f in C^{0,alpha}, g in C^{0,beta}, alpha + beta > 1); the inclusion chain
> C^1 < Lipschitz < AC < continuous and BV. B: the Cantor function as an
> integrator, with int 1 dC = 1 while C' = 0 a.e.; **RS additivity FAILS when f and
> alpha share a discontinuity**; a continuous function that is not BV
> (x psi(1/x)); a continuous monotone g and continuous f with
> int f dg != int f g' dx.

with these exact two A-page summary paragraphs (each is under 150 words):

> Bounded variation is developed from partition sums through additivity of variation, the canonical positive and negative variations, Jordan decomposition, and the jump structure of the variation function. The page proves the seminorm laws, algebra closure, countability and first-kind nature of discontinuities, and Riemann integrability. It also defines absolute continuity and proves the elementary hierarchy $C^1subseteqmathrm{Lipschitz}subseteq ACsubseteq Ccap BV$, while the companion examples distinguish the classes without importing measure-theoretic differentiation.
>
> Riemann–Stieltjes sums are defined in mesh and Darboux forms, followed by uniqueness, refinement estimates, bounds, linearity, additivity, and integration by parts. The existence ladder covers continuous integrands against BV integrators, BV integrands against continuous integrators, finitely discontinuous integrands, continuous composition, and BV pairs with no common discontinuities. Ordinary-integral agreement, continuously differentiable reduction, change of variable, and rational-exponent Young integration complete the page. The companion treats step and Cantor integrators, common jumps, unbounded integrands, strict regularity examples, and concrete computations.

Replace this exact old RA-21 block:

> **RA-21 Improper Integrals** <- RA-19
> improper integrals of the first, second and mixed kinds; absolute versus
> conditional convergence; the **Cauchy principal value**; the p-test; tail
> invariance; comparison; the Cauchy criterion; **Dirichlet's and Abel's tests for
> integrals** (from the second MVT); **Frullani's integral**. B: a divergent
> improper integral with a finite principal value; **a convergent improper integral
> whose positive continuous integrand does not tend to 0** (the integral analogue
> of the n-th term test is FALSE); one whose integrand is unbounded in every tail;
> 1/sqrt x on (0,1].

with these exact two A-page summary paragraphs (each is under 150 words):

> Improper integrals are defined at finite singular endpoints, at infinity, and across mixed or interior singularities, with every component required to converge separately. The page proves splitting and tail invariance, linearity, the Cauchy criterion, the bounded-primitive criterion for nonnegative integrands, and that absolute convergence implies convergence. Comparison, limit comparison, the proper-integral form of the integral test, truncated rational-power formulas, and the rational $p$-test provide the main convergence toolkit.
>
> Cauchy principal value is kept distinct from ordinary improper convergence, and ordinary convergence is shown to imply the corresponding principal value. Dirichlet and Abel tests are accompanied by divergence-transfer and uniform-tail-mass divergence criteria, so oscillation is handled in both directions. An improper substitution theorem and the source-backed Frullani identity with a proper integral factor complete the theory. The companion supplies conditional, principal-value, unbounded-spike, rational-power, interior-singularity, substitution, and comparison examples without using logarithmic, trigonometric, or exponential functions before their pages.

The B pages remain bodyless, as required by `SCHEMA.md`.

### 2.2 `research/plan-complex-analysis-track.md`

Apply these exact mechanical order repairs wherever the exact text occurs:

- replace `bounded-variation-and-riemann-stieltjes` (141) with `bounded-variation-and-riemann-stieltjes` (163);
- replace `improper-integrals` (143) with `improper-integrals` (165);
- replace `| CA-9 | 143 (`improper-integrals`) | 139 |` with `| CA-9 | 165 (`improper-integrals`) | 139 |`.

No mathematical dependency changes: these are stale pre-renumber annotations. In particular, CA-3's rectifiable/Riemann–Stieltjes comparison still cites the BV page, CA-9 still cites the principal-value definition, and CA-21 still cites improper-integral convergence.

## 3. Canonical-coverage harvest

The machine harvest enumerates 90 source/canonical headings. Its dispositions are:

- BV/RS: 34 included, 2 inline, 2 already published, 2 out of scope.
- Improper integrals: 34 included, 2 inline, 12 deferred, 2 out of scope.
- Combined yield: **72 incorporated** (68 included + 4 inline), **2 already published**, and **16 declined**.

The initial Trench dispositions for the finite-step integrator and an unbounded Stieltjes-integrable function were not defensible as declines. They are now explicit B items, `ex-finite-step-integrator-weighted-jump-sum` and `ex-unbounded-integrand-stieltjes-integrable`.

Every remaining decline rests on a later whole function theory or a whole later subject, not on a locally buildable missing lemma:

| page | disposition | source heading | exact scope reason |
|---|---|---|---|
| bounded-variation-and-riemann-stieltjes | out-of-scope | Christopher Heil, Absolute Continuity and the Banach–Zaretsky Theorem: Lemma 14: an indefinite Lebesgue integral is absolutely continuous, differentiable a.e., and has integrable derivative | This named result is a Lebesgue-integration theorem using null sets and almost-everywhere differentiation, a whole subject not yet present in the declared prerequisite closure. |
| bounded-variation-and-riemann-stieltjes | out-of-scope | canonical coverage pass: Lebesgue–Stieltjes measure correspondence and a.e. BV differentiation | Both conclusions require the measure, null-set, and almost-everywhere machinery of a later subject, not a missing elementary lemma that this page could locally build. |
| improper-integrals | deferred | William F. Trench, Introduction to Real Analysis: Example 3.4.4: a logarithmic endpoint kernel | Its statement and evaluation use the logarithm, whose canonical construction and integral identity occur on the later logarithm page rather than in this page's prerequisites. |
| improper-integrals | deferred | William F. Trench, Introduction to Real Analysis: Example 3.4.5: divergence of the cosine integral by oscillation | The example requires the trigonometric-function development scheduled after this page; the general nonconvergence mechanism is already represented by the step-function counterexample. |
| improper-integrals | deferred | William F. Trench, Introduction to Real Analysis: Example 3.4.6: improper integrability of log x at zero | The logarithm is not yet defined at order 165, so this exact example belongs on the later logarithm and exponential examples page. |
| improper-integrals | deferred | William F. Trench, Introduction to Real Analysis: Example 3.4.13: absolute convergence range for a trigonometric power kernel | The exact kernel uses sine and its periodic integral, material developed on the later trigonometric pages; the absolute-comparison mechanism itself is included here. |
| improper-integrals | deferred | William F. Trench, Introduction to Real Analysis: Example 3.4.14: conditional convergence of a trigonometric power kernel | The source's witness depends on sine, cosine, and their antiderivatives, all scheduled after this page; a checkable alternating-step witness supplies conditional convergence now. |
| improper-integrals | deferred | William F. Trench, Introduction to Real Analysis: Example 3.4.15: divergence of x^q sin x | This exact oscillatory witness requires the later trigonometric function theory; its source-named abstract divergence transfer theorem is nevertheless built here. |
| improper-integrals | deferred | John K. Hunter, The Riemann Integral: Example 1.76: Gaussian integral convergence and its double-integral evaluation | The Gaussian uses the later exponential page, while its exact evaluation uses double integration and polar coordinates, a multivariable subject not yet reached. |
| improper-integrals | deferred | John K. Hunter, The Riemann Integral: Example 1.77: absolute convergence of sin x/(1+x^2) | The rational comparison is built here, but this exact numerator requires the sine function and its bound from the later trigonometric development. |
| improper-integrals | deferred | John K. Hunter, The Riemann Integral: Example 1.78: conditional convergence of the sine integral | The exact witness and value require later trigonometric and complex-analytic machinery; conditional convergence is represented now by an alternating-step integral. |
| improper-integrals | out-of-scope | John K. Hunter, The Riemann Integral: Example 1.79: Fresnel integral | Its exact value and standard proof use trigonometric oscillation plus complex analysis, an entire later subject beyond this elementary improper-integral page. |
| improper-integrals | deferred | John K. Hunter, The Riemann Integral: Example 1.83: the exponential integral Ei as an improper/principal-value integral | The exponential and logarithm used to define and analyse Ei are both constructed on later pages, so the named special function cannot yet be stated faithfully. |
| improper-integrals | out-of-scope | John K. Hunter, The Riemann Integral: Example 1.84: Hilbert transform as a principal-value integral | The Hilbert transform belongs to harmonic analysis and needs function-space and singular-integral machinery far beyond this page's prerequisite closure. |
| improper-integrals | deferred | canonical coverage pass: Full real-exponent p-test | Real powers are canonically defined on the later exponential/logarithm pages; this page proves the complete theorem for the rational exponents presently available. |
| improper-integrals | deferred | canonical coverage pass: Frullani's logarithmic value log(b/a) | The convergence theorem and proper factor are built now, while identifying that factor with log(b/a) belongs to the later logarithm construction. |

The declines most likely to be challenged are the full real-exponent $p$-test and the logarithmic value in Frullani's formula. The page builds the complete rational-exponent theorem and the Frullani convergence/proper-factor identity now; it defers only the claims whose canonical statements require the later real-power/logarithm construction. The trigonometric examples are likewise represented by the abstract Dirichlet/divergence results and step-function witnesses now, while their exact named functions stay on the later trigonometric pages.

## 4. Source ledger, locators, and licences

- **[T] William F. Trench, _Introduction to Real Analysis_.** <https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf>. Read Chapter 3, Definition 3.1.5 and Exercises 3.1.13–17 (pp. 125–128), Exercises 3.2.7–10 (pp. 135–136), and §3.4 Definitions/Theorems 3.4.1–3.4.13 with Examples 3.4.1–17. This is the textbook backing for both pairs. The official USF record is <https://digitalcommons.usf.edu/oa_textbooks/6/> and identifies the open textbook licence as CC BY-NC-SA; Step 5 will still paraphrase rather than copy source prose.
- **[M] MIT 18.100B Spring 2004 lecture outline (Rudin treatment).** <https://math.mit.edu/~rbm/18.100-S04/node2.html>. Read Lectures 16–19, explicitly keyed to Rudin pp. 120–136. It independently backs the Stieltjes definition, criterion, existence ladder, properties, integration by parts, and the already-published FTC statements. No reuse licence was relied on; paraphrase only.
- **[H] Christopher Heil, “Absolute Continuity and the Banach–Zaretsky Theorem.”** <https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf>. Read §§2.1 and 3.2, pp. 30–31 and 39–41: Definition 2 (BV), Theorem 3 (Jordan decomposition), Definition 13 (AC), and Lemma 14. This independently backs the BV/AC spine. The author-hosted paper is used as a mathematical source only; paraphrase only.
- **[Y] Nourdin, Nualart, and Peccati, “The Breuer–Major theorem in total variation: improved rates under minimal regularity.”** <https://alea.math.cnrs.fr/articles/v16/16-23.pdf>. Read §2.2, “The Young integral,” p. 636, including the $alpha+eta>1$ condition and integration-by-parts equation. The library narrows exponents to available rational Hölder parameters. Use as a mathematical source; paraphrase only.
- **[D] John K. Hunter, _The Riemann Integral_.** <https://www.math.ucdavis.edu/~hunter/m125b/ch1.pdf>. Read §§1.10.1–1.10.3, Definitions 1.67–1.81, Theorem 1.75, and Examples 1.68–1.84. This is the independent full-note treatment for improper integrals and principal values. No reuse licence was found in the read excerpt; paraphrase only.

An encyclopedia was not used as either pair's primary backing. No external fallback or `proved_here: false` item is planned.

## 5. Planned component provenance

Codes [T]–[D] are the exact URLs above. “ai-generated” Statements below are allowed only for explicit checkable examples/counterexamples and are not dependency targets. All source-backed Step-5 items must carry the listed URL(s) in `sources.references`.

| item | statement | proof/construction | source | rationale |
|---|---|---|---|---|
| `def-bounded-variation-and-total-variation` | literature-derived | not-applicable | [H], [T] | standard source definition |
| `lem-basic-properties-of-total-variation` | literature-derived | ai-generated | [T], [M] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `lem-variation-additive-on-subintervals` | literature-derived | ai-generated | [T], [M] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `def-variation-function-and-positive-negative-variation` | literature-derived | not-applicable | [H], [T] | standard source definition |
| `lem-variation-function-and-jordan-identities` | literature-derived | ai-generated | [H], [T] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `thm-jordan-decomposition-for-bv-functions` | literature-derived | ai-generated | [H], [T] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `cor-bv-discontinuities-are-countable-and-of-first-kind` | literature-derived | ai-generated | [H], [T] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `lem-jumps-of-the-variation-function` | literature-derived | ai-generated | [H], [T] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `lem-total-variation-seminorm-laws` | literature-derived | ai-generated | [T], [M] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `thm-bv-functions-form-an-algebra` | literature-derived | ai-generated | [T], [M] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `cor-bv-functions-are-riemann-integrable` | literature-derived | ai-generated | [T], [M] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `def-absolutely-continuous-function` | ai-altered | not-applicable | [H], [T] | source-backed convention restricted to the available library vocabulary |
| `thm-c1-lipschitz-ac-bv-hierarchy` | ai-altered | ai-generated | [H], [T] | source-backed theorem narrowed or recombined to match rational/elementary scope |
| `def-riemann-stieltjes-sum-and-integral` | ai-altered | not-applicable | [T], [M] | source-backed convention restricted to the available library vocabulary |
| `thm-riemann-stieltjes-darboux-criterion` | literature-derived | ai-generated | [T], [M] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `lem-riemann-stieltjes-integral-unique` | literature-derived | ai-generated | [T], [M] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `lem-riemann-stieltjes-refinement-estimate` | literature-derived | ai-generated | [T], [M] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `thm-riemann-stieltjes-existence-continuous-bv` | literature-derived | ai-generated | [T], [M] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `cor-riemann-stieltjes-integral-bound` | literature-derived | ai-generated | [T], [M] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `thm-riemann-stieltjes-linearity-and-additivity` | literature-derived | ai-generated | [T], [M] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `thm-riemann-stieltjes-integration-by-parts` | literature-derived | ai-generated | [T], [M] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `cor-riemann-stieltjes-existence-bv-continuous` | literature-derived | ai-generated | [T], [M] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `thm-riemann-stieltjes-existence-finitely-discontinuous` | literature-derived | ai-generated | [T], [M] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `thm-riemann-stieltjes-continuous-composition` | literature-derived | ai-generated | [T], [M] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `lem-bv-functions-are-regulated` | literature-derived | ai-generated | [T], [M] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `thm-riemann-stieltjes-existence-bv-no-common-discontinuities` | literature-derived | ai-generated | [T], [M] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `cor-riemann-stieltjes-agrees-with-riemann` | literature-derived | ai-generated | [T], [M] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `thm-riemann-stieltjes-c1-integrator-reduction` | literature-derived | ai-generated | [T], [M] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `thm-riemann-stieltjes-change-of-variable` | literature-derived | ai-generated | [T], [M] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `lem-young-partition-sum-estimate-rational` | ai-altered | ai-generated | [Y] | source-backed theorem narrowed or recombined to match rational/elementary scope |
| `thm-young-riemann-stieltjes-existence-rational` | ai-altered | ai-generated | [Y] | source-backed theorem narrowed or recombined to match rational/elementary scope |
| `rem-riemann-stieltjes-conventions-and-scope` | ai-altered | not-applicable | [T], [M] | scope/convention synthesis; no proof |
| `ex-absolute-value-lipschitz-not-c1` | ai-generated | ai-generated | — (generated witness; no source claim) | explicit checkable witness; must remain a dependency leaf |
| `ex-square-root-ac-not-lipschitz` | ai-generated | ai-generated | — (generated witness; no source claim) | explicit checkable witness; must remain a dependency leaf |
| `ex-cantor-function-bv-not-absolutely-continuous` | literature-derived | ai-generated | [H], [T] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `cex-continuous-function-of-unbounded-variation` | ai-generated | ai-generated | — (generated witness; no source claim) | explicit checkable witness; must remain a dependency leaf |
| `ex-step-integrator-evaluates-at-the-jump` | literature-derived | ai-generated | [T], [M] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `ex-finite-step-integrator-weighted-jump-sum` | literature-derived | ai-generated | [T], [M] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `ex-unbounded-integrand-stieltjes-integrable` | literature-derived | ai-generated | [T], [M] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `ex-cantor-function-as-riemann-stieltjes-integrator` | ai-generated | ai-generated | — (generated witness; no source claim) | explicit checkable witness; must remain a dependency leaf |
| `cex-common-jump-prevents-riemann-stieltjes-integrability` | literature-derived | ai-generated | [T], [M] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `ex-riemann-stieltjes-polynomial-computation` | ai-generated | ai-generated | — (generated witness; no source claim) | explicit checkable witness; must remain a dependency leaf |
| `ex-riemann-stieltjes-substitution` | ai-generated | ai-generated | — (generated witness; no source claim) | explicit checkable witness; must remain a dependency leaf |
| `ex-young-integral-beyond-bounded-variation` | ai-altered | ai-generated | [Y] | source-backed theorem narrowed or recombined to match rational/elementary scope |
| `def-improper-integral-at-infinity` | literature-derived | not-applicable | [T], [D] | standard source definition |
| `def-improper-integral-at-a-finite-endpoint` | literature-derived | not-applicable | [T], [D] | standard source definition |
| `def-mixed-improper-integral` | ai-altered | not-applicable | [T], [D] | source-backed convention restricted to the available library vocabulary |
| `lem-improper-integral-splitting-and-tail-invariance` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `thm-linearity-of-improper-integrals` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `thm-cauchy-criterion-for-improper-integrals` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `def-absolute-and-conditional-improper-convergence` | literature-derived | not-applicable | [H], [T] | standard source definition |
| `thm-nonnegative-improper-integral-bounded-primitive-criterion` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `thm-absolute-improper-convergence-implies-convergence` | literature-derived | ai-generated | [H], [T] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `cor-improper-integral-tails-tend-to-zero` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `thm-comparison-test-for-improper-integrals` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `cor-limit-comparison-test-for-improper-integrals` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `cor-improper-integral-test-for-series` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `lem-truncated-integrals-of-rational-powers` | ai-altered | ai-generated | [T], [D] | source-backed theorem narrowed or recombined to match rational/elementary scope |
| `thm-improper-p-test-rational` | ai-altered | ai-generated | [T], [D] | source-backed theorem narrowed or recombined to match rational/elementary scope |
| `def-cauchy-principal-value` | literature-derived | not-applicable | [T], [D] | standard source definition |
| `thm-improper-convergence-implies-principal-value` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `thm-dirichlet-test-for-improper-integrals` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `cor-abel-test-for-improper-integrals` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `thm-dirichlet-divergence-transfer` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `thm-absolute-divergence-from-uniform-tail-mass` | literature-derived | ai-generated | [H], [T] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `thm-substitution-for-improper-integrals` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `thm-frullani-integral-proper-factor` | ai-altered | ai-generated | [T], [D] | source-backed theorem narrowed or recombined to match rational/elementary scope |
| `rem-improper-integral-conventions-and-scope` | ai-altered | not-applicable | [T], [D] | scope/convention synthesis; no proof |
| `ex-principal-value-of-one-over-x` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `ex-conditionally-convergent-step-function-integral` | ai-generated | ai-generated | — (generated witness; no source claim) | explicit checkable witness; must remain a dependency leaf |
| `ex-convergent-positive-continuous-unbounded-integrand` | ai-generated | ai-generated | — (generated witness; no source claim) | explicit checkable witness; must remain a dependency leaf |
| `ex-one-over-square-root-improper-integral` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `ex-rational-p-integrals-at-both-endpoints` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `ex-frullani-rational-kernel` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `ex-absolutely-convergent-rational-integral-on-the-line` | ai-generated | ai-generated | — (generated witness; no source claim) | explicit checkable witness; must remain a dependency leaf |
| `ex-improper-substitution-reciprocal` | ai-generated | ai-generated | — (generated witness; no source claim) | explicit checkable witness; must remain a dependency leaf |
| `cex-oscillatory-step-function-improper-integral-diverges` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `ex-interior-square-root-singularity` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `cex-principal-value-one-over-x-squared-diverges` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `ex-beta-kernel-convergence-rational` | ai-generated | ai-generated | — (generated witness; no source claim) | explicit checkable witness; must remain a dependency leaf |

Truth-risk checks for the generated witnesses are concrete: unequal one-sided quotients for $|x|$; an initial-segment/away-from-zero proof for $sqrt{x}$; explicit distance-to-$mathbb Z$ zeros and peaks for unbounded variation; partition sums for the Cantor, polynomial, and substitution examples; alternating-harmonic truncations; explicitly rational locally finite spikes with geometric areas; rational comparisons; and endpoint exponent checks. None of these ids appears in another item's `deps`.

## 6. Published prerequisite and direct-dependency audit

I opened `library/real-analysis/properties-of-the-integral-and-the-working-ftc.md` once in full, then opened the actual items used from it. The BV/RS pair uses `def-oriented-integral`, `thm-linearity-of-the-integral`, `cor-integrability-of-absolute-values-products-and-lattice-operations`, and `thm-ftc-second-part`. The improper pair uses those plus `thm-monotonicity-of-the-integral`, `thm-additivity-over-subintervals`, `lem-changing-a-function-at-finitely-many-points`, `cor-primitives-of-a-continuous-function`, `thm-substitution`, `thm-second-mean-value-theorem-for-integrals`, and `thm-integral-test-for-series`. The definition and separate first-FTC item were also read to check conventions and source overlap.

I additionally opened `rem-absolutely-continuous-function` to audit semantic overlap. It is a non-proof remark that promises the elementary AC/BV hierarchy; this batch supplies the local definition and proofs rather than citing that remark.

Every direct external dependency below was opened on disk at its actual Definition, Statement, or Example. All are `status: published`; every statement provenance is literature-derived or ai-altered, never ai-generated. “Certified” and “audit” are confidence routes recorded in the item's own verification metadata, supplemented here by the direct section read.

| dependency | status | statement / proof provenance | confidence route |
|---|---|---|---|
| `cor-archimedean-reciprocal` | published | ai-altered / ai-altered | published judge pass (z-ai/glm-5.2) plus audit 2026-07-26; exact section re-opened |
| `cor-bounded-derivative-implies-lipschitz` | published | literature-derived / ai-altered | published judge pass (z-ai/glm-5.2) plus audit 2026-07-28; exact section re-opened |
| `cor-boundedness-theorem-r` | published | literature-derived / ai-generated | published judge pass (z-ai/glm-5.2) plus audit 2026-07-27; exact section re-opened |
| `cor-integrability-of-absolute-values-products-and-lattice-operations` | published | ai-altered / ai-generated | published judge pass (z-ai/glm-5.2) plus audit 2026-07-29; exact section re-opened |
| `cor-mean-value-theorem` | published | literature-derived / ai-altered | published judge pass (z-ai/glm-5.2) plus audit 2026-07-28; exact section re-opened |
| `cor-monotone-converges-iff-bounded` | published | literature-derived / ai-altered | published-audit certification (claude-sonnet-5, 2026-08-06); exact section re-opened |
| `cor-of-reverse-triangle` | published | literature-derived / ai-altered | published judge pass (openai/gpt-5.4) plus audit 2026-07-25; exact section re-opened |
| `cor-primitives-of-a-continuous-function` | published | ai-altered / ai-generated | published judge pass (z-ai/glm-5.2) plus audit 2026-07-29; exact section re-opened |
| `def-abs-value` | published | literature-derived / not-applicable | published audit 2026-07-25; exact section re-opened |
| `def-bounded-set` | published | literature-derived / not-applicable | published-audit certification (claude-opus-5, 2026-07-26); exact section re-opened |
| `def-canonical-natural` | published | ai-altered / not-applicable | published audit 2026-07-27; exact section re-opened |
| `def-complete-ordered-field` | published | literature-derived / not-applicable | published audit 2026-07-25; exact section re-opened |
| `def-continuity-real` | published | ai-altered / not-applicable | published judge pass (z-ai/glm-5.2) plus audit 2026-07-27; exact section re-opened |
| `def-darboux-integral` | published | literature-derived / not-applicable | published judge pass (z-ai/glm-5.2) plus audit 2026-07-28; exact section re-opened |
| `def-darboux-sums` | published | ai-altered / not-applicable | published judge pass (z-ai/glm-5.2) plus audit 2026-07-28; exact section re-opened |
| `def-derivative` | published | ai-altered / not-applicable | published judge pass (z-ai/glm-5.2) plus audit 2026-07-28; exact section re-opened |
| `def-finite-sum` | published | ai-altered / not-applicable | published-audit certification (claude-opus-5, 2026-07-26); exact section re-opened |
| `def-integer-power` | published | ai-altered / not-applicable | published-audit certification (claude-opus-5, 2026-07-26); exact section re-opened |
| `def-integers` | published | literature-derived / not-applicable | published audit 2026-07-24; exact section re-opened |
| `def-interval` | published | ai-altered / not-applicable | published judge pass (z-ai/glm-5.2) plus audit 2026-07-26; exact section re-opened |
| `def-limits-at-infinity` | published | ai-altered / not-applicable | published judge pass (z-ai/glm-5.2) plus audit 2026-07-27; exact section re-opened |
| `def-lipschitz-holder-contraction` | published | ai-altered / not-applicable | published-audit certification (gpt-5.6-sol-codex-subscription, 2026-08-03); exact section re-opened |
| `def-metric-bounded-diameter` | published | ai-altered / not-applicable | published-audit certification (claude-opus-5, 2026-08-02); exact section re-opened |
| `def-monotone-function` | published | ai-altered / not-applicable | published judge pass (z-ai/glm-5.2) plus audit 2026-07-28; exact section re-opened |
| `def-one-sided-limits` | published | ai-altered / not-applicable | published judge pass (z-ai/glm-5.2) plus audit 2026-07-27; exact section re-opened |
| `def-oriented-integral` | published | literature-derived / not-applicable | published judge pass (z-ai/glm-5.2) plus audit 2026-07-29; exact section re-opened |
| `def-partition-and-refinement` | published | ai-altered / not-applicable | published judge pass (z-ai/glm-5.2) plus audit 2026-07-28; exact section re-opened |
| `def-rational-power` | published | ai-altered / not-applicable | published-audit certification (gpt-5.6-sol-codex-subscription, 2026-08-04); exact section re-opened |
| `def-real-limit` | published | ai-altered / not-applicable | published audit 2026-07-24; exact section re-opened |
| `def-sequence` | published | ai-altered / not-applicable | published-audit certification (claude-opus-5, 2026-07-26); exact section re-opened |
| `def-series` | published | ai-altered / not-applicable | published judge pass (z-ai/glm-5.2) plus audit 2026-07-27; exact section re-opened |
| `def-tagged-partition-and-riemann-sum` | published | ai-altered / not-applicable | published judge pass (z-ai/glm-5.2) plus audit 2026-07-28; exact section re-opened |
| `lem-abel-summation-by-parts` | published | literature-derived / ai-altered | published judge pass (z-ai/glm-5.2) plus audit 2026-07-27; exact section re-opened |
| `lem-alternating-sequence` | published | ai-altered / ai-generated | published judge pass (z-ai/glm-5.2) plus audit 2026-07-26; exact section re-opened |
| `lem-changing-a-function-at-finitely-many-points` | published | literature-derived / ai-generated | published judge pass (z-ai/glm-5.2) plus audit 2026-07-29; exact section re-opened |
| `lem-convergent-implies-cauchy` | published | ai-altered / literature-derived | published-audit certification (gpt-5.6-sol-codex-subscription, 2026-08-05); exact section re-opened |
| `lem-distance-to-set-is-lipschitz` | published | ai-altered / ai-generated | published judge pass (z-ai/glm-5.2) plus audit 2026-07-26; exact section re-opened |
| `lem-finite-sum-laws` | published | ai-altered / ai-altered | published-audit certification (claude-opus-5, 2026-07-26); exact section re-opened |
| `lem-geometric-sequence-null` | published | ai-altered / ai-altered | published judge pass (z-ai/glm-5.2) plus audit 2026-07-26; exact section re-opened |
| `lem-integer-part` | published | literature-derived / ai-generated | published judge pass (z-ai/glm-5.2) plus audit 2026-07-27; exact section re-opened |
| `lem-limit-preserves-order` | published | ai-altered / ai-altered | published-audit certification (claude-opus-5, 2026-07-26); exact section re-opened |
| `lem-of-abs-value` | published | ai-altered / ai-altered | published judge pass (openai/gpt-5.4) plus audit 2026-07-25; exact section re-opened |
| `lem-of-inverse-positive` | published | ai-altered / ai-altered | published judge pass (openai/gpt-5.4) plus audit 2026-07-25; exact section re-opened |
| `lem-of-naturals-positive` | published | ai-altered / ai-generated | published judge pass (openai/gpt-5.4) plus audit 2026-07-25; exact section re-opened |
| `lem-of-square-monotone` | published | ai-altered / ai-generated | published judge pass (openai/gpt-5.4) plus audit 2026-07-25; exact section re-opened |
| `lem-of-triangle-inequality` | published | literature-derived / ai-altered | published judge pass (z-ai/glm-5.2) plus audit 2026-07-25; exact section re-opened |
| `lem-rational-power-laws` | published | ai-altered / ai-altered | published-audit certification (gpt-5.6-sol-codex-subscription, 2026-08-04); exact section re-opened |
| `lem-rational-power-monotone` | published | ai-altered / ai-altered | published-audit certification (claude-opus-5, 2026-07-26); exact section re-opened |
| `lem-real-and-metric-notions-agree` | published | ai-altered / ai-generated | published judge pass (z-ai/glm-5.2) plus audit 2026-07-27; exact section re-opened |
| `lem-real-line-is-a-metric-space` | published | ai-altered / ai-generated | published-audit certification (claude-opus-5, 2026-08-02); exact section re-opened |
| `lem-series-tail-invariance` | published | ai-altered / ai-generated | published judge pass (z-ai/glm-5.2) plus audit 2026-07-27; exact section re-opened |
| `lem-sign-preservation-near-a-limit` | published | ai-altered / ai-generated | published judge pass (z-ai/glm-5.2) plus audit 2026-07-27; exact section re-opened |
| `lem-sup-unique` | published | literature-derived / literature-derived | published-audit certification (claude-opus-5, 2026-07-26); exact section re-opened |
| `thm-additivity-over-subintervals` | published | ai-altered / ai-generated | published-audit certification (gpt-5.6-terra-codex-subscription, 2026-08-10); exact section re-opened |
| `thm-algebra-of-derivatives` | published | literature-derived / ai-altered | published judge pass (z-ai/glm-5.2) plus audit 2026-07-28; exact section re-opened |
| `thm-algebra-of-function-limits` | published | literature-derived / ai-generated | published judge pass (z-ai/glm-5.2) plus audit 2026-07-27; exact section re-opened |
| `thm-alternating-series-test` | published | literature-derived / ai-altered | published judge pass (z-ai/glm-5.2) plus audit 2026-07-27; exact section re-opened |
| `thm-cantor-function-properties` | published | ai-altered / ai-altered | published judge pass (z-ai/glm-5.2) plus audit 2026-07-27; exact section re-opened |
| `thm-cauchy-criterion-via-lub` | published | literature-derived / ai-altered | published judge pass (z-ai/glm-5.2) plus audit 2026-07-26; exact section re-opened |
| `thm-continuous-inverse` | published | literature-derived / ai-altered | published judge pass (z-ai/glm-5.2) plus audit 2026-07-28; exact section re-opened |
| `thm-darboux-equals-riemann` | published | literature-derived / ai-altered | published judge pass (z-ai/glm-5.2) plus audit 2026-07-28; exact section re-opened |
| `thm-ftc-second-part` | published | literature-derived / ai-generated | published-audit certification (gpt-5.6-terra-codex-subscription, 2026-08-10); exact section re-opened |
| `thm-geometric-series` | published | literature-derived / ai-altered | published judge pass (z-ai/glm-5.2) plus audit 2026-07-27; exact section re-opened |
| `thm-heine-borel-r` | published | literature-derived / ai-generated | published judge pass (z-ai/glm-5.2) plus audit 2026-07-26; exact section re-opened |
| `thm-heine-cantor-r` | published | literature-derived / ai-altered | published judge pass (z-ai/glm-5.2) plus audit 2026-07-27; exact section re-opened |
| `thm-integral-test-for-series` | published | ai-altered / ai-generated | published judge pass (z-ai/glm-5.2) plus audit 2026-07-29; exact section re-opened |
| `thm-linearity-of-the-integral` | published | literature-derived / ai-generated | published-audit certification (gpt-5.6-terra-codex-subscription, 2026-08-10); exact section re-opened |
| `thm-monotone-discontinuities-are-jumps` | published | ai-altered / ai-altered | published judge pass (z-ai/glm-5.2) plus audit 2026-07-28; exact section re-opened |
| `thm-monotone-implies-integrable` | published | literature-derived / ai-altered | published judge pass (z-ai/glm-5.2) plus audit 2026-07-28; exact section re-opened |
| `thm-monotonicity-of-the-integral` | published | literature-derived / ai-generated | published-audit certification (gpt-5.6-terra-codex-subscription, 2026-08-10); exact section re-opened |
| `thm-nth-roots-exist` | published | ai-altered / ai-altered | published-audit certification (claude-opus-5, 2026-07-26); exact section re-opened |
| `thm-of-archimedean` | published | literature-derived / ai-altered | published judge pass (openai/gpt-5.4) plus audit 2026-07-25; exact section re-opened |
| `thm-p-series-rational` | published | ai-altered / ai-altered | published judge pass (z-ai/glm-5.2) plus audit 2026-07-27; exact section re-opened |
| `thm-second-mean-value-theorem-for-integrals` | published | ai-altered / ai-generated | published judge pass (z-ai/glm-5.2) plus audit 2026-07-29; exact section re-opened |
| `thm-substitution` | published | ai-altered / ai-generated | published judge pass (z-ai/glm-5.2) plus audit 2026-07-29; exact section re-opened |

There are 75 unique published dependency targets. All mapped targets lie on strictly earlier pages; the few pre-plan foundations are published and earlier in the canonical foundation sequence. No dependency was found unambiguously false, so no published repair is proposed.

## 7. Convention decisions and disagreements

1. **Stieltjes definition.** The page takes tagged mesh-limit sums as primary for general BV integrators and also defines upper/lower sums only for bounded integrands against nondecreasing integrators. This reconciles Trench's tagged definition with the Rudin/Darboux criterion without pretending the weighted upper/lower construction works for signed variation.
2. **“Increasing.”** Source uses of “increasing” are normalized to the library's nondecreasing convention; strict increase is named explicitly if needed.
3. **Orientation and jumps.** Reversed/singleton intervals follow `def-oriented-integral`. Step integrators state their right/left endpoint convention, and endpoint jumps are not silently counted twice.
4. **Absolute continuity.** Heil states the standard disjoint-interval definition; the page uses finite families, which is the elementary form needed here and makes the empty family explicit. Countable-family/Lebesgue consequences are not imported.
5. **Principal value.** Hunter's symmetric principal value is kept separate from ordinary improper convergence, whose left and right pieces must converge independently. A finite principal value never licenses an improper integral.
6. **Exponent scope.** Trench/Hunter often state real-$p$ examples. The library presently has rational powers, so the page proves exact rational thresholds and does not smuggle in logarithms or general real powers.
7. **Young scope.** The cited paper uses real Hölder exponents. The library states the rational-exponent specialization and proves the partition estimate needed for it.
8. **Frullani.** The convergence identity with a proper-integral factor is proved now; identifying the factor with $log(b/a)$ waits for the canonical logarithm page.
9. **Notation.** Natural numbers are written directly. No new artifact applies the canonical embedding symbol to a natural number.

## 8. Proof-obligation checkpoint for Step 5

The proof-contract file covers all **69 proof-bearing items**, with 442 direct dependency clauses, 186 planned derivation blocks, all eight boundary dispositions per item, and no inapplicable finite-model smoke test forced onto analytic claims. Quotes from the 75 published dependency targets are exact excerpts from their current Definition/Statement/Example sections. Quotes for planned same-batch dependencies are explicitly labelled `Planned Statement`; Step 5 must replace them with exact authored clauses and refine the conservative all-step `uses` maps as item proofs acquire final numbering.

The proof-sensitive routes to preserve are:

- prove variation additivity before Jordan decomposition, and prove the one-sided jump formula for the variation function rather than merely asserting continuity transfer;
- in $ACRightarrow BV$, refine an arbitrary partition by finitely many short blocks before applying the disjoint-family definition;
- derive continuous-integrand/BV-integrator existence through Jordan decomposition and track total-variation bounds;
- prove the finite-discontinuity and no-common-discontinuity Stieltjes theorems with explicit small-variation neighbourhoods and regulated step approximations;
- keep both directions of the Darboux criterion and every endpoint/jump convention;
- prove Young's rational estimate at partition level before taking limits;
- define mixed improper convergence componentwise, prove Cauchy criteria with two independently moving truncations, and keep principal value logically separate;
- obtain Dirichlet/Abel from the published second mean-value theorem with boundary terms controlled explicitly;
- state improper substitution with the exact monotonicity/orientation/end-limit hypotheses used by truncation; and
- prove the Frullani proper-factor identity without naming an unavailable logarithm.

No planned external fallback or mathematical blocker remains at scaffold time.

## 9. Step-2 gate record and sandbox blocker

The two directly requested constituent checks and the dependency-source constituent are green:

- `node tools/validate-plan.mjs research/plan-spec.json` — **OK**: the declared order is acyclic and consistent, with no unresolved ids, item cycles, forward references, or B-page dependency errors among pages whose item lists are present;
- `node tools/coverage-checklist.mjs research/frontier-10-batch-4.coverage.json` — **OK**: 2 pages, 90 harvested results, 0 errors, 0 warnings; and
- `node tools/depsource.mjs research/plan-spec.json` — **OK**: 16,688 external dependencies, all published, with 0 homeless, planned-later, or unresolved targets.

Because the four dispatched page slots are intentionally still empty in `plan-spec.json` at Step 2, I also streamed an in-memory copy of the spec with only this batch's four item arrays inserted into `validate-plan.mjs`. That stronger local check is **OK** across 180 pages with item lists: no item cycles, forward references, B-page dependency violations, unresolved ids, size errors, or undeclared prerequisite edges. The streamed check did not write `plan-spec.json` or any temporary repo artifact.

The aggregate command `node tools/gates.mjs --step 2 --run frontier-10` could not itself turn green in this managed sandbox. Its wrapper attempted `spawnSync /usr/bin/node` for each of the same three scripts and received `EPERM`, reporting three wrapper failures before any child script ran. The individual scripts run successfully from the shell as recorded above. Per the owner's no-permission-prompt instruction, I did not request escalation or edit the gate tool. This environment-only wrapper failure is the sole remaining blocker.
