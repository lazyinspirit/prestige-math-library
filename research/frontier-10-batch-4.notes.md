# Beta-frontier-10-4 — scaffold and Step-5 authoring notes

This is the durable reasoning record for orders 163–166. Step 5 authored the 81 manifest-declared item files and the four draft page files, then reconciled this note, the coverage harvest, and the proof-contract file. No published artifact, normative document, plan specification, or out-of-batch item was edited.

## 1. Result and reading order

| order | page | kind | items |
|---:|---|---|---:|
| 163 | `bounded-variation-and-riemann-stieltjes` | A | 32 |
| 164 | `bounded-variation-and-riemann-stieltjes-examples` | B | 12 |
| 165 | `improper-integrals` | A | 25 |
| 166 | `improper-integrals-examples` | B | 12 |

The batch has 81 items. Both A pages are below the hard 60-item limit, so **no split is proposed**. The precise cut remains the dispatched cut: bounded variation/Riemann–Stieltjes through Young integration at 163–164, then improper endpoint and infinite-interval integrals at 165–166. Bounded variation supplies the intended earlier-page machinery for `arc-length-and-rectifiable-curves` and for the later sharp fundamental-theorem page.

All same-page A edges point backward. A B item depends only on its A page, an earlier page, or an earlier item on the same B page. There are no cross-batch edges and no forward load-bearing references.

## 2. Historical Step-2 prose-scaffold proposal

This section preserves the Step-2 plan-file proposal. Step 5 refined the summaries into direct mathematical prose after the settled items were authored; the current A-page bodies are authoritative. Neither plan prose file was writable or edited at Step 5.

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
> Cauchy principal value is kept distinct from ordinary improper convergence, and ordinary convergence is shown to imply the corresponding principal value. Dirichlet and Abel tests are accompanied by divergence-transfer and uniform-tail-mass divergence criteria, so oscillation is handled in both directions. A proper monotone change-of-variable theorem, its improper counterpart, and the source-backed Frullani identity complete the theory. The companion supplies conditional, principal-value, unbounded-spike, rational-power, interior-singularity, substitution, and comparison examples without using logarithmic, trigonometric, or exponential functions before their pages.

The B pages remain bodyless, as required by `SCHEMA.md`.

### 2.2 `research/plan-complex-analysis-track.md`

Apply these exact mechanical order repairs wherever the exact text occurs:

- replace `bounded-variation-and-riemann-stieltjes` (141) with `bounded-variation-and-riemann-stieltjes` (163);
- replace `improper-integrals` (143) with `improper-integrals` (165);
- replace `| CA-9 | 143 (`improper-integrals`) | 139 |` with `| CA-9 | 165 (`improper-integrals`) | 139 |`.

No mathematical dependency changes: these are stale pre-renumber annotations. In particular, CA-3's rectifiable/Riemann–Stieltjes comparison still cites the BV page, CA-9 still cites the principal-value definition, and CA-21 still cites improper-integral convergence.

## 3. Canonical-coverage harvest

The reconciled checklist enumerates **100** source/canonical headings. BV/Riemann–Stieltjes has 33 included, 6 inline, 5 already published, 3 deferred, and 2 out of scope. Improper integrals has 35 included, 2 inline, 12 deferred, and 2 out of scope. The combined authored yield is therefore **76 incorporated** (68 included + 8 inline), with **5 already published** and **19 declined** (15 deferred + 4 out of scope). Every `included` row names an item that exists in this batch.

The initial Trench dispositions for the finite-step integrator and an unbounded Stieltjes-integrable function were corrected to explicit authored B items, `ex-finite-step-integrator-weighted-jump-sum` and `ex-unbounded-integrand-stieltjes-integrable`. The Rudin harvest was also corrected from a secondary syllabus pointer to the primary Chapter 6 numbered treatment, 6.1–6.22. Three Rudin results are honestly deferred rather than overstated: unrestricted Darboux interval additivity in 6.12(c), the infinite pure-step series theorem in 6.16, and the full merely-Riemann-integrable derivative reduction in 6.17. The authored page proves, respectively, the BV/continuity-at-cut mesh theorem, the finite-step formula, and the continuously differentiable special case settled by the manifest.

The remaining declines are recorded row by row with exact reasons in `research/frontier-10-batch-4.coverage.json`. They require later logarithm/real-power, trigonometric, exponential, measure-theoretic, multivariable, complex, or harmonic-analysis machinery rather than a locally buildable prerequisite. The rational $p$-test and the Frullani proper-integral factor are built now; only the full real-exponent theorem and identification of the factor with $\log(b/a)$ wait for the logarithm page.

## 4. Source ledger, locators, and licences

- **[T] William F. Trench, _Introduction to Real Analysis_.** <https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf>. Read Chapter 3, Definition 3.1.5 and Exercises 3.1.13–17 (pp. 125–128), Exercises 3.2.7–10 (pp. 135–136), the proper monotone substitution theorem 3.3.18 (pp. 148–150), and §3.4 Definitions/Theorems 3.4.1–3.4.13 with Examples 3.4.1–17. This is the textbook backing for both pairs. The official USF record is <https://digitalcommons.usf.edu/oa_textbooks/6/> and identifies the open textbook licence as CC BY-NC-SA; Step 5 paraphrased rather than copied source prose.
- **[R] W. Rudin, _Principles of Mathematical Analysis_.** <https://archive.org/details/principlesofmath00rudi>. Read Chapter 6, numbered treatment 6.1–6.22, pp. 120–136. It independently backs the Stieltjes definition, criterion, existence ladder, properties, integration by parts, reduction, and change of variable. No reuse licence was relied on; paraphrase only.
- **[H] Christopher Heil, “Absolute Continuity and the Banach–Zaretsky Theorem.”** <https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf>. Read §§2.1 and 3.2, pp. 30–31 and 39–41: Definition 2 (BV), Theorem 3 (Jordan decomposition), Definition 13 (AC), and Lemma 14. This independently backs the BV/AC spine. The author-hosted paper is used as a mathematical source only; paraphrase only.
- **[Y] Nourdin, Nualart, and Peccati, “The Breuer–Major theorem in total variation: improved rates under minimal regularity.”** <https://alea.math.cnrs.fr/articles/v16/16-23.pdf>. Read §2.2, “The Young integral,” p. 636, including the $\alpha+\beta>1$ condition and integration-by-parts equation. The authored theorem specializes the exponents to available rational Hölder parameters. Used as a mathematical source and paraphrased.
- **[D] John K. Hunter, _The Riemann Integral_.** <https://www.math.ucdavis.edu/~hunter/m125b/ch1.pdf>. Read §§1.10.1–1.10.3, Definitions 1.67–1.81, Theorem 1.75, and Examples 1.68–1.84. This is the independent full-note treatment for improper integrals and principal values. No reuse licence was found in the read excerpt; paraphrase only.

An encyclopedia was not used as either pair's primary backing. No external fallback or `proved_here: false` item is planned.

## 5. Authored component provenance and rationale

Codes [T]–[D] are the exact URLs above. “ai-generated” Statements below occur only on explicit checkable examples/counterexamples and are not dependency targets. Every row records the authored component provenance and the reason for that choice; source-backed items carry the corresponding URL in `sources.references`.

| item | statement | proof/construction | source | rationale |
|---|---|---|---|---|
| `def-bounded-variation-and-total-variation` | literature-derived | not-applicable | [H], [T] | standard source definition |
| `lem-basic-properties-of-total-variation` | literature-derived | ai-generated | [T], [R] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `lem-variation-additive-on-subintervals` | literature-derived | ai-generated | [T], [R] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `def-variation-function-and-positive-negative-variation` | literature-derived | not-applicable | [H], [T] | standard source definition |
| `lem-variation-function-and-jordan-identities` | literature-derived | ai-generated | [H], [T] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `thm-jordan-decomposition-for-bv-functions` | literature-derived | ai-generated | [H], [T] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `cor-bv-discontinuities-are-countable-and-of-first-kind` | literature-derived | ai-generated | [H], [T] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `lem-jumps-of-the-variation-function` | literature-derived | ai-generated | [H], [T] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `lem-total-variation-seminorm-laws` | literature-derived | ai-generated | [T], [R] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `thm-bv-functions-form-an-algebra` | literature-derived | ai-generated | [T], [R] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `cor-bv-functions-are-riemann-integrable` | literature-derived | ai-generated | [T], [R] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `def-absolutely-continuous-function` | ai-altered | not-applicable | [H], [T] | source-backed convention restricted to the available library vocabulary |
| `thm-c1-lipschitz-ac-bv-hierarchy` | ai-altered | ai-generated | [H], [T] | source-backed theorem narrowed or recombined to match rational/elementary scope |
| `def-riemann-stieltjes-sum-and-integral` | ai-altered | not-applicable | [T], [R] | source-backed convention restricted to the available library vocabulary |
| `thm-riemann-stieltjes-darboux-criterion` | ai-altered | ai-generated | [T], [R] | source-backed Darboux criterion reconciled with the stronger mesh-limit definition by the necessary jump-continuity condition; local proof |
| `lem-riemann-stieltjes-integral-unique` | literature-derived | ai-generated | [T], [R] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `lem-riemann-stieltjes-refinement-estimate` | literature-derived | ai-generated | [T], [R] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `thm-riemann-stieltjes-existence-continuous-bv` | literature-derived | ai-generated | [T], [R] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `cor-riemann-stieltjes-integral-bound` | literature-derived | ai-generated | [T], [R] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `thm-riemann-stieltjes-linearity-and-additivity` | literature-derived | ai-generated | [T], [R] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `thm-riemann-stieltjes-integration-by-parts` | literature-derived | ai-generated | [T], [R] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `cor-riemann-stieltjes-existence-bv-continuous` | literature-derived | ai-generated | [T], [R] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `thm-riemann-stieltjes-existence-finitely-discontinuous` | literature-derived | ai-generated | [T], [R] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `thm-riemann-stieltjes-continuous-composition` | literature-derived | ai-generated | [T], [R] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `lem-bv-functions-are-regulated` | literature-derived | ai-generated | [T], [R] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `thm-riemann-stieltjes-existence-bv-no-common-discontinuities` | literature-derived | ai-generated | [T], [R] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `cor-riemann-stieltjes-agrees-with-riemann` | literature-derived | ai-generated | [T], [R] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `thm-riemann-stieltjes-c1-integrator-reduction` | literature-derived | ai-generated | [T], [R] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `thm-riemann-stieltjes-change-of-variable` | literature-derived | ai-generated | [T], [R] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `lem-young-partition-sum-estimate-rational` | literature-derived | ai-generated | [Y] | source-backed rational specialization; local dependency-closed proof |
| `thm-young-riemann-stieltjes-existence-rational` | literature-derived | ai-generated | [Y] | source-backed rational specialization; local dependency-closed proof |
| `rem-riemann-stieltjes-conventions-and-scope` | ai-altered | not-applicable | [T], [R] | source-backed scope/convention synthesis reconciled with the mesh-limit convention; no proof |
| `ex-absolute-value-lipschitz-not-c1` | literature-derived | ai-generated | [H] | source-backed strictness witness; local verification |
| `ex-square-root-ac-not-lipschitz` | literature-derived | ai-generated | [H] | source-backed strictness witness; local verification |
| `ex-cantor-function-bv-not-absolutely-continuous` | literature-derived | ai-generated | [H], [T] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `cex-continuous-function-of-unbounded-variation` | ai-generated | ai-generated | — (generated witness; no source claim) | explicit checkable witness; must remain a dependency leaf |
| `ex-step-integrator-evaluates-at-the-jump` | literature-derived | ai-generated | [T], [R] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `ex-finite-step-integrator-weighted-jump-sum` | literature-derived | ai-generated | [T], [R] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `ex-unbounded-integrand-stieltjes-integrable` | literature-derived | ai-generated | [T], [R] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `ex-cantor-function-as-riemann-stieltjes-integrator` | literature-derived | ai-generated | [H] | source-backed Cantor-integrator example; local verification |
| `cex-common-jump-prevents-riemann-stieltjes-integrability` | literature-derived | ai-generated | [T], [R] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `ex-riemann-stieltjes-polynomial-computation` | literature-derived | ai-generated | [R] | source-backed reduction example; local computation |
| `ex-riemann-stieltjes-substitution` | literature-derived | ai-generated | [R] | source-backed substitution example; local computation |
| `ex-young-integral-beyond-bounded-variation` | ai-generated | ai-generated | — (generated witness; no source claim) | explicit Hölder tent construction; must remain a dependency leaf |
| `def-improper-integral-at-infinity` | literature-derived | not-applicable | [T], [D] | standard source definition |
| `def-improper-integral-at-a-finite-endpoint` | literature-derived | not-applicable | [T], [D] | standard source definition |
| `def-mixed-improper-integral` | literature-derived | not-applicable | [T], [D] | standard componentwise-convergence definition |
| `lem-improper-integral-splitting-and-tail-invariance` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `thm-linearity-of-improper-integrals` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `thm-cauchy-criterion-for-improper-integrals` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `def-absolute-and-conditional-improper-convergence` | literature-derived | not-applicable | [T], [D] | standard source definition |
| `thm-nonnegative-improper-integral-bounded-primitive-criterion` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `thm-absolute-improper-convergence-implies-convergence` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `cor-improper-integral-tails-tend-to-zero` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `thm-comparison-test-for-improper-integrals` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `cor-limit-comparison-test-for-improper-integrals` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `cor-improper-integral-test-for-series` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `lem-truncated-integrals-of-rational-powers` | literature-derived | ai-generated | [T], [D] | source-backed rational-power formula; local proof |
| `thm-improper-p-test-rational` | literature-derived | ai-generated | [T], [D] | source-backed rational specialization; local proof |
| `def-cauchy-principal-value` | literature-derived | not-applicable | [T], [D] | standard source definition |
| `thm-improper-convergence-implies-principal-value` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `thm-dirichlet-test-for-improper-integrals` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `cor-abel-test-for-improper-integrals` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `thm-dirichlet-divergence-transfer` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `thm-absolute-divergence-from-uniform-tail-mass` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `thm-monotone-change-of-variable-for-riemann-integrals` | literature-derived | ai-generated | [T] | Trench Theorem 3.3.18; local machinery required by the full improper theorem |
| `thm-substitution-for-improper-integrals` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `thm-frullani-integral-proper-factor` | literature-derived | ai-generated | [T], [D] | source-backed proper-factor form; local proof without logarithms |
| `rem-improper-integral-conventions-and-scope` | literature-derived | not-applicable | [T], [D] | source-backed scope/convention synthesis; no proof |
| `ex-principal-value-of-one-over-x` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `ex-conditionally-convergent-step-function-integral` | ai-generated | ai-generated | — (generated witness; no source claim) | explicit checkable witness; must remain a dependency leaf |
| `ex-convergent-positive-continuous-unbounded-integrand` | ai-generated | ai-generated | — (generated witness; no source claim) | explicit checkable witness; must remain a dependency leaf |
| `ex-one-over-square-root-improper-integral` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `ex-rational-p-integrals-at-both-endpoints` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `ex-frullani-rational-kernel` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `ex-absolutely-convergent-rational-integral-on-the-line` | literature-derived | ai-generated | [T] | source-backed comparison example; local verification |
| `ex-improper-substitution-reciprocal` | literature-derived | ai-generated | [T] | source-backed substitution example; local verification |
| `cex-oscillatory-step-function-improper-integral-diverges` | ai-generated | ai-generated | [T], [D] | explicit source-motivated step witness; local verification and dependency leaf |
| `ex-interior-square-root-singularity` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `cex-principal-value-one-over-x-squared-diverges` | literature-derived | ai-generated | [T], [D] | source-backed claim; Step 5 supplies a dependency-closed local proof |
| `ex-beta-kernel-convergence-rational` | literature-derived | ai-generated | [T] | source-backed comparison example; local verification |

Truth-risk checks for the generated witnesses are concrete: unequal one-sided quotients for $|x|$; an initial-segment/away-from-zero proof for $\sqrt{x}$; explicit distance-to-$\mathbb Z$ zeros and peaks for unbounded variation; a normalized Hölder tent construction whose variation is a harmonic sum; partition sums for the Cantor, polynomial, and substitution examples; alternating-harmonic truncations; explicitly rational locally finite spikes with geometric areas; rational comparisons; and endpoint exponent checks. None of these ids appears in another item's `deps`.

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
| `thm-algebra-of-continuous-functions` | published | ai-altered / ai-altered | published judge pass (z-ai/glm-5.2) plus audit 2026-07-27; exact section re-opened |
| `thm-algebra-of-function-limits` | published | literature-derived / ai-generated | published judge pass (z-ai/glm-5.2) plus audit 2026-07-27; exact section re-opened |
| `thm-alternating-series-test` | published | literature-derived / ai-altered | published judge pass (z-ai/glm-5.2) plus audit 2026-07-27; exact section re-opened |
| `thm-cantor-function-properties` | published | ai-altered / ai-altered | published judge pass (z-ai/glm-5.2) plus audit 2026-07-27; exact section re-opened |
| `thm-cauchy-criterion-via-lub` | published | literature-derived / ai-altered | published judge pass (z-ai/glm-5.2) plus audit 2026-07-26; exact section re-opened |
| `thm-continuous-inverse` | published | literature-derived / ai-altered | published judge pass (z-ai/glm-5.2) plus audit 2026-07-28; exact section re-opened |
| `thm-continuous-implies-integrable` | published | literature-derived / ai-altered | published judge pass (z-ai/glm-5.2) plus audit 2026-07-28; exact section re-opened |
| `thm-darboux-equals-riemann` | published | literature-derived / ai-altered | published judge pass (z-ai/glm-5.2) plus audit 2026-07-28; exact section re-opened |
| `thm-ftc-second-part` | published | literature-derived / ai-generated | published-audit certification (gpt-5.6-terra-codex-subscription, 2026-08-10); exact section re-opened |
| `thm-geometric-series` | published | literature-derived / ai-altered | published judge pass (z-ai/glm-5.2) plus audit 2026-07-27; exact section re-opened |
| `thm-heine-borel-r` | published | literature-derived / ai-generated | published judge pass (z-ai/glm-5.2) plus audit 2026-07-26; exact section re-opened |
| `thm-heine-cantor-r` | published | literature-derived / ai-altered | published judge pass (z-ai/glm-5.2) plus audit 2026-07-27; exact section re-opened |
| `thm-integral-test-for-series` | published | ai-altered / ai-generated | published judge pass (z-ai/glm-5.2) plus audit 2026-07-29; exact section re-opened |
| `thm-integration-by-parts` | published | literature-derived / ai-generated | published-audit certification (gpt-5.6-terra-codex-subscription, 2026-08-10); exact section re-opened |
| `thm-linearity-of-the-integral` | published | literature-derived / ai-generated | published-audit certification (gpt-5.6-terra-codex-subscription, 2026-08-10); exact section re-opened |
| `thm-monotone-discontinuities-are-jumps` | published | ai-altered / ai-altered | published judge pass (z-ai/glm-5.2) plus audit 2026-07-28; exact section re-opened |
| `thm-monotone-implies-integrable` | published | literature-derived / ai-altered | published judge pass (z-ai/glm-5.2) plus audit 2026-07-28; exact section re-opened |
| `thm-monotonicity-of-the-integral` | published | literature-derived / ai-generated | published-audit certification (gpt-5.6-terra-codex-subscription, 2026-08-10); exact section re-opened |
| `thm-nth-roots-exist` | published | ai-altered / ai-altered | published-audit certification (claude-opus-5, 2026-07-26); exact section re-opened |
| `thm-of-archimedean` | published | literature-derived / ai-altered | published judge pass (openai/gpt-5.4) plus audit 2026-07-25; exact section re-opened |
| `thm-p-series-rational` | published | ai-altered / ai-altered | published judge pass (z-ai/glm-5.2) plus audit 2026-07-27; exact section re-opened |
| `thm-second-mean-value-theorem-for-integrals` | published | ai-altered / ai-generated | published judge pass (z-ai/glm-5.2) plus audit 2026-07-29; exact section re-opened |
| `thm-substitution` | published | ai-altered / ai-generated | published judge pass (z-ai/glm-5.2) plus audit 2026-07-29; exact section re-opened |

There are 78 unique published dependency targets: 21 carry a current published-audit certification and 57 carry a published judge-pass/audit route; none relies on precheck alone. All mapped targets lie on strictly earlier pages; the few pre-plan foundations are published and earlier in the canonical foundation sequence. No dependency was found unambiguously false, so no published repair is proposed.

## 7. Convention decisions and disagreements

1. **Stieltjes definition.** The page takes tagged mesh-limit sums as primary for general BV integrators and also defines upper/lower sums only for bounded integrands against nondecreasing integrators. This reconciles Trench's tagged definition with the Rudin/Darboux criterion without pretending the weighted upper/lower construction works for signed variation.
2. **“Increasing.”** Source uses of “increasing” are normalized to the library's nondecreasing convention; strict increase is named explicitly if needed.
3. **Orientation and jumps.** Reversed/singleton intervals follow `def-oriented-integral`. Step integrators state their right/left endpoint convention, and endpoint jumps are not silently counted twice.
4. **Absolute continuity.** Heil states the standard disjoint-interval definition; the page uses finite families, which is the elementary form needed here and makes the empty family explicit. Countable-family/Lebesgue consequences are not imported.
5. **Principal value.** Hunter's symmetric principal value is kept separate from ordinary improper convergence, whose left and right pieces must converge independently. A finite principal value never licenses an improper integral.
6. **Exponent scope.** Trench/Hunter often state real-$p$ examples. The library presently has rational powers, so the page proves exact rational thresholds and does not smuggle in logarithms or general real powers.
7. **Young scope.** The cited paper uses real Hölder exponents. The library states the rational-exponent specialization and proves the partition estimate needed for it.
8. **Frullani.** The convergence identity with a proper-integral factor is proved now; identifying the factor with $log(b/a)$ waits for the canonical logarithm page.
9. **Notation.** Natural numbers are written directly throughout the batch-authored mathematical prose. Exact proof-contract quotations can preserve applied canonical-embedding notation from cited legacy items; those quotations are source evidence, not a new use by this batch.

## 8. Step-5 authoring reconciliation

All **81** manifest rows were authored under their settled ids, kinds, titles, and reading order: 32 + 12 items for the BV/Riemann–Stieltjes pair and 25 + 12 for the improper-integral pair. Nothing was dropped, renamed, or merged. Both A pages remain below 60 items. Every item is `status: draft`, `origin: session`, and has both provenance components; generated Statements also declare `generation.role`. The two A bodies each contain exactly two nonempty prose paragraphs under 150 words, and both B bodies are empty.

Six local prerequisite additions were necessary to make the authored proofs honest; there were no dependency removals:

| item | added dependency | reason |
|---|---|---|
| `cor-bv-discontinuities-are-countable-and-of-first-kind` | `thm-froda` | The published monotone-discontinuity theorem establishes first-kind jumps but not countability; Froda supplies the missing countability result. |
| `lem-jumps-of-the-variation-function` | `def-series`, `cor-monotone-converges-iff-bounded`, `lem-series-tail-invariance`, `lem-geometric-sequence-null` | A geometric-annulus variation series and its vanishing tails replace an unjustified shrinking-interval assertion. |
| `thm-riemann-stieltjes-darboux-criterion` | `def-continuity-real`, `thm-monotone-discontinuities-are-jumps` | For the repository's all-fine-mesh definition, the Darboux gap must be paired with continuity of the integrand at integrator jumps; these dependencies prove that exact compatibility condition. |
| `lem-bv-functions-are-regulated` | `cor-interval-uncountable` | Breakpoints must be chosen outside a prescribed countable discontinuity set. |
| `thm-riemann-stieltjes-linearity-and-additivity` | `def-bounded-variation-and-total-variation`, `thm-cauchy-criterion-via-lub` | Mesh-limit interval additivity is proved with BV control and continuity of the integrand at the cut, using the Cauchy criterion for the two restricted sum families. |
| `thm-monotone-change-of-variable-for-riemann-integrals` | `thm-ftc-second-part` | The signed-function reduction shifts by a constant and needs the exact identity $\int_c^d\phi'=\phi(d)-\phi(c)$. |

The reconciled proof contract covers all **70 proof-bearing items** with 304 exact fact-to-source citations, 185 numbered derivations, 118 distinct cited item sources, and all eight standard boundary dispositions for every contract (274 checked and 286 specifically not applicable). No `Planned Statement` quotation or conservative placeholder remains. The strict checker reports 0 errors and 0 warnings.

The proof-sensitive routes were implemented: variation additivity precedes Jordan decomposition; jump variation is controlled by summable annuli; $AC\Rightarrow BV$ uses finite disjoint short intervals; Stieltjes existence uses Jordan decomposition, regulated approximation, and explicit small-variation neighborhoods; integration by parts uses an exact refined local sum identity; Young's rational estimate is proved before existence; mixed improper convergence keeps each end separate; Dirichlet/Abel retain boundary control; monotone substitution treats flat and decreasing pieces; and Frullani remains in proper-integral-factor form without importing logarithms.

## 9. Boundary-case disposition

The per-item contract is the exhaustive worksheet. The cross-page cases most likely to be missed were disposed as follows:

| family | authored disposition |
|---|---|
| Intervals and orientation | Total variation is zero on a singleton; reversed ordinary and Stieltjes integrals use the declared oriented convention; interval additivity names the BV and continuity-at-cut hypotheses needed by the mesh definition. |
| Jumps | One-sided variation jumps equal absolute function jumps; finite-step formulas state endpoint conventions; the common-jump counterexample proves the no-common-discontinuity hypothesis is sharp. |
| Regularity | Constant/zero-variation cases, endpoint one-sided limits, zero Hölder increments, strict $C^1$/Lipschitz/AC/BV separations, and a continuous unbounded-variation witness are explicit. |
| Improper ends | Finite endpoints, $+\infty$, $-\infty$, whole-line, and interior singularities are defined componentwise; changing split points preserves values but cannot cancel divergent pieces. |
| Thresholds and convergence modes | The rational $p$-test includes $p=1$ and the divergent side; absolute, conditional, ordinary improper, and principal-value convergence are kept distinct, with witnesses in both directions needed by the scaffold. |
| Substitution and Frullani | Monotone substitution permits flat pieces and handles decreasing orientation; improper substitution moves singular ends explicitly; Frullani treats $a=b$ and $a>b$ by zero and orientation. |
| Examples | The spike construction is positive, continuous, integrable, and unbounded on every tail; the alternating-step examples check arbitrary real truncations rather than only integer subsequences; rational kernels check each singular endpoint separately. |

No batch-owned item or page applies `\iota` to a natural number. Exact proof-contract quotations preserve the wording of cited legacy items where necessary.

## 10. Historical Step-2 gate record and sandbox blocker

The two directly requested constituent checks and the dependency-source constituent are green:

- `node tools/validate-plan.mjs research/plan-spec.json` — **OK**: the declared order is acyclic and consistent, with no unresolved ids, item cycles, forward references, or B-page dependency errors among pages whose item lists are present;
- `node tools/coverage-checklist.mjs research/frontier-10-batch-4.coverage.json` — **OK**: 2 pages, 91 harvested results, 0 errors, 0 warnings; and
- `node tools/depsource.mjs research/plan-spec.json` — **OK**: 16,688 external dependencies, all published, with 0 homeless, planned-later, or unresolved targets.

Because the four dispatched page slots are intentionally still empty in `plan-spec.json` at Step 2, I also streamed an in-memory copy of the spec with only this batch's four item arrays inserted into `validate-plan.mjs`. That stronger local check is **OK** across 180 pages with item lists: no item cycles, forward references, B-page dependency violations, unresolved ids, size errors, or undeclared prerequisite edges. The streamed check did not write `plan-spec.json` or any temporary repo artifact.

The aggregate command `node tools/gates.mjs --step 2 --run frontier-10` could not itself turn green in this managed sandbox. Its wrapper attempted `spawnSync /usr/bin/node` for each of the same three scripts and received `EPERM`, reporting three wrapper failures before any child script ran. The individual scripts run successfully from the shell as recorded above. Per the owner's no-permission-prompt instruction, I did not request escalation or edit the gate tool. This was the sole blocker to invoking the aggregate Step-2 wrapper; it is not a Step-5 content blocker.

## 11. Step-5 check record

The final required individual checks are green:

- `node tools/tsx-run.mjs tools/precheck.mts` — **OK**, 2,675 proof-bearing items checked and 0 failing;
- `node tools/depcheck.mjs` — **OK**, no cycles, all references resolve, and no draft item is listed on a published page;
- `node tools/rendercheck.mjs` — **OK**, 3,689 files checked;
- `node tools/prosecheck.mjs` — **OK**, 3,689 files checked, 0 errors, and 583 nonblocking heuristic warnings;
- `node tools/content-policy.mjs research/frontier-10-batch-4.pages.json` — **OK**, 81 scoped items, 0 errors, and 0 warnings;
- `node tools/coverage-checklist.mjs research/frontier-10-batch-4.coverage.json` — **OK**, 2 pages and 100 harvested results, 0 errors, and 0 warnings; and
- `node tools/proof-contract.mjs research/frontier-10-batch-4.proof-contracts.json --strict` — **OK**, 70/70 proof-bearing items, 0 errors, and 0 warnings.

The aggregate `tools/gates.mjs` wrapper was not run, exactly as the Step-5 dispatch requires. There is no batch-local content, dependency, rendering, coverage, proof-contract, or sandbox blocker.
