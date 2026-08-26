# Frontier 14 batch 1 — Beta scaffold notes

Run: `frontier-14`  
Batch: complex-analysis foundation (`complex-power-series-and-analytic-functions`; `contour-integration`)  
Role: Beta, steps 1–2; returning step-5 author

## Continuity checkpoint

- **Owned artifacts:** `research/frontier-14-batch-1.pages.json`, `research/frontier-14-batch-1.notes.md`, `research/frontier-14-batch-1.coverage.json`, and `research/frontier-14-batch-1.proof-contracts.json`.
- **Current substage:** source harvest and exact published-dependency audit are complete enough to fix the page architecture; item manifests, coverage dispositions, and proof-contract skeletons remain to be written and checked.
- **Checks completed:** read the normative repository documents and active audit resume; read CA-2 and CA-3 prose scaffolds; searched all proposed ids against `items/` and `research/plan-spec.json`; read the cited Ahlfors, Stein–Shakarchi, Howell–Mathews, and Weber ranges; opened the published power-series, complex-differentiability, convergence, arc-length, Riemann–Stieltjes, and neighboring real vector-line-integral items used to settle conventions.
- **Open mathematical/dependency question:** the rectifiable complex integral closes componentwise through real Riemann–Stieltjes theory, but an agreement theorem with the already-published piecewise-$C^1$ real vector-line-integral construction requires a backward `requires` edge to `line-integrals-and-the-gradient-theorem`, which is not currently in CA-3's declared closure.
- **Exact next action:** write the four-page item manifest with no cross-pair dependencies, write the source-by-source coverage dispositions, then populate one proof-contract skeleton per proof-bearing item and run the individual gates.

## Architectural decisions

### CA-2: complex power series and analytic functions

The page reuses `def-complex-series-power-series-and-absolute-convergence` and `thm-cauchy-hadamard-for-complex-power-series`; it does not remint the radius or Hadamard formula. It adds the missing analytic-function definition, the complex-valued uniform-convergence dictionary, the complex M-test, local uniform convergence, derivative-radius and termwise-differentiation machinery, coefficient recovery and uniqueness, interior re-expansion, algebra/composition/reciprocal closure, local primitives, the trigonometric and hyperbolic series consequences, and Ahlfors's angular Abel limit theorem. The identity theorem and holomorphic-implies-analytic direction remain licensed to `identity-theorem-and-zeros-of-holomorphic-functions` (CA-5), not this page.

The long re-expansion proof is decomposed into an absolutely convergent binomial double-series lemma and the re-expansion theorem. The local analytic algebra theorem is decomposed into sum/scalar, Cauchy-product, composition, and reciprocal results. Abel's theorem is decomposed into a complex summation-by-parts lemma and the Stolz-region theorem. The corollary pass adds coefficient uniqueness, analyticity of every power-series sum at each interior point, local primitives, derivative/addition formulas for the complex trigonometric functions, and their zero sets.

### CA-3: contour integration

**Generality chosen.** A contour is allowed to be any rectifiable complex path for the primary Riemann–Stieltjes line integral. For a continuous $f=u+iv$ and $gamma=x+iy$, the definition expands $\int f\,d\gamma$ into the four real Riemann–Stieltjes integrals against $x$ and $y$; existence follows because rectifiability is equivalent to bounded variation of both coordinates. The absolute integral is the Riemann–Stieltjes integral of $|f\circ\gamma|$ against the published arc-length function. A separate agreement theorem recovers the familiar piecewise-$C^1$ formula $\int f(\gamma(t))\gamma'(t)\,dt$. Thus the page does not silently assume smoothness and does not carry two unconnected notions.

The fundamental inequality and ML estimate are proved at rectifiable generality by passing the triangle inequality for tagged polygonal sums to the componentwise Stieltjes limit. The primitive theorem is also planned at rectifiable generality: continuity of the primitive's derivative makes its linearization uniform on the compact trace, and the accumulated remainder is bounded by path length times that uniform error. The path-independence criterion uses published polygonal connectedness of complex domains and does not depend on the power-series page.

The long primitive/path-independence development is decomposed into the fundamental theorem, its closed-contour corollary, and the equivalence between endpoint independence, zero closed integrals, and existence of a primitive. The corollary pass adds the ML estimate, the absolute integral of $1$ as length, uniform-limit interchange, the circle monomial formula, and its normalized centre-circle value.

## Findings for the orchestrator

### F1 — add a backward CA-3 prerequisite edge

**Problem.** `line-integrals-and-the-gradient-theorem` (order 241) already publishes piecewise-$C^1$ path operations, scalar/vector line integrals, reparametrization, reversal/concatenation, estimates, the gradient theorem, and the path-independence/potential equivalence. It is earlier than CA-3 but is outside CA-3's current declared `requires` closure. CA-3 must define a genuinely broader rectifiable complex Riemann–Stieltjes integral, yet the seam rule also requires it to state agreement with the existing piecewise-$C^1$ construction.

**Recommendation.** Add `line-integrals-and-the-gradient-theorem` to the `requires` list of `contour-integration` at step 4. Keep the rectifiable complex definition and agreement theorem in this scaffold; use the published real line-integral definition only as the comparison target, not as a replacement for the new extension.

**If declined.** The page can still prove its componentwise parametric formula from real Riemann integration, but it cannot cite the already-published special-case construction. That leaves a silent duplicate at precisely the real/complex seam the workflow requires us to close.

### F2 — Weber Chapter 1 is not a CA-2 power-series locator

**Problem.** The CA-2 prose names “Weber Ch. 1” as a power-series source. The actual chapter's sections are complex arithmetic, topology, differentiability, elementary functions, and path integrals; its power-series development begins in Chapter 2 after a Cauchy-integral treatment.

**Recommendation.** Do not use Weber Chapter 1 as backing for CA-2. Retain Ahlfors Chapter 2 and Stein–Shakarchi Chapter 1 as its independent textbook treatments. Use Weber §1.7 only for CA-3, where the locator is faithful.

**If declined.** A CA-2 reference would assert that a range contains results it does not contain, recreating the locator defect named in the run preventions.

## Cross-pair and split decisions

- No item on either pair depends on the other pair. CA-2 proves power-series results without contour integration; CA-3 computes its circle and primitive results directly without power series. No `307 -> 305` edge is recommended.
- Neither A page approaches the schema's current 100-item ceiling or the dispatch's conservative 60-item split trigger. No page split is proposed.
- B-page items are leaves. In particular, no A-page proof depends on an example, counterexample, or false statement homed on an `-examples` page.

## Web source ledger

### Ahlfors, *Complex Analysis*, third edition

- URL: https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf
- CA-2 range read: Chapter 2 §§2.1–2.5, printed pp. 33–42, from “Sequences” through Theorem 3 and the Stolz-angle remark, stopping before the exercises. Supports the convergence preliminaries, uniform convergence, radius/Hadamard formula, termwise differentiation, coefficient formula, uniqueness, and angular Abel theorem.
- CA-3 range read: Chapter 4 §§1.1–1.3, printed pp. 101–108, from “Line Integrals” through Theorem 1 and the circle monomial computation, stopping before the exercises. Supports piecewise-smooth and rectifiable line integrals, reparametrization, length, the fundamental inequality, primitives, endpoint independence, and the circle integral.
- Convention notes: Ahlfors uses “analytic” for holomorphic and initially writes arcs in a piecewise-differentiable language before extending to rectifiable arcs. This scaffold reserves analytic for local power-series representability and makes the rectifiable Riemann–Stieltjes construction primary.

### Stein and Shakarchi, *Complex Analysis*

- URL read: https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf
- CA-2 range read: Chapter 1 §§2.2–2.3, printed pp. 8–18, including Propositions 2.2–2.3, Theorems 2.4–2.6, and Corollary 2.7. Supports the holomorphic/analytic convention comparison, Cauchy–Hadamard, termwise differentiation, smoothness, and analytic-implies-holomorphic.
- CA-3 range read: Chapter 1 §3 through Corollary 3.4, printed pp. 18–24, stopping before the exercises. Supports curve operations, contour integration, reparametrization, length/ML, primitives, the contour FTC, and the unit-circle integral of $1/z$.
- Retrieval note: the university-hosted URL named in the prose scaffold exposed only a truncated extract to the available reader. The full edition above was the copy actually read and is therefore the URL recorded in coverage rather than a merely HTTP-200 locator.
- Convention notes: Stein–Shakarchi define a curve as smooth when its derivative is nonzero; this scaffold allows zero-speed pieces and constant paths, matching the published arc-length page. Their “analytic” is local power-series representability, matching this scaffold.

### Howell and Mathews, *Complex Analysis*

- URLs read: https://complexanalysis.org/web/sec_complex-integrals.html and https://complexanalysis.org/web/sec_contour-integrals.html
- Range read: §§6.1–6.2, through Theorem 6.2.19 and before the exercises. Supports componentwise complex integration, contour definitions, parametric transformation, reversal/concatenation, the absolute-value inequality, ML, and worked path-dependence examples.
- Convention notes: Howell–Mathews call a piecewise-smooth curve a contour; this scaffold uses the broader rectifiable convention and records agreement. An introductory sentence on the site attributes contour independence to Cauchy–Goursat without stating the needed domain hypothesis; no item in this scaffold uses that sentence.

### Weber, *Lecture Notes in Complex Analysis*

- URL: https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download
- Range read: Chapter 1 §1.7, “Complex path integrals,” including Definition 1.7.1, Lemmas 1.7.2–1.7.3, Example 1.7.1, and the primitive calculation.
- Supports CA-3 reparametrization, the ML estimate, integer monomial circle integrals, and the primitive endpoint formula.
- Convention notes: Definition 1.7.1 unnecessarily assumes the integrand is holomorphic for the path integral itself; this scaffold assumes only continuity for existence and reserves holomorphy for primitive/derivative results.

## Published dependency audit and confidence routes

Every item below was opened on disk; the quoted domain, hypotheses, conclusion, and direction were checked rather than inferred from its title.

### CA-2 published dependencies

- `def-complex-series-power-series-and-absolute-convergence` — exact complex sequence/series, absolute convergence, power-series, center, and radius definitions. `provenance.statement: ai-altered`; source-checked against Ahlfors Chapter 2 and Stein–Shakarchi §2.3.
- `thm-cauchy-hadamard-for-complex-power-series` — absolute convergence for $|z-a|<R$, divergence for $|z-a|>R$, no boundary assertion, and all $R=0,+\infty$ conventions. `ai-altered`; source-checked against Ahlfors Theorem 2 and Stein–Shakarchi Theorem 2.5.
- `thm-absolute-convergence-of-complex-series` — absolute convergence implies convergence and rearrangements preserve the sum. `ai-altered`; source-checked against the componentwise finite-dimensional theorem and standard textbook treatment.
- `lem-cauchy-product-of-absolutely-convergent-complex-series` — absolute Cauchy product converges to the product. `ai-altered`; source-checked against its displayed statement and the standard Mertens/Fubini argument.
- `thm-complex-plane-is-complete` — completeness and componentwise convergence in $\mathbb C$. `ai-altered`; established from the Euclidean-plane identification.
- `def-pointwise-uniform-and-uniformly-cauchy-convergence`, `thm-uniform-cauchy-criterion-real-functions`, `thm-weierstrass-m-test-for-function-series`, and `thm-uniform-limit-continuous-real-functions` — real-valued uniform convergence machinery only. Their real codomain is preserved; the new page proves the complex componentwise dictionary rather than widening these statements.
- `def-complex-differentiability-holomorphic-and-entire`, `thm-algebra-of-complex-derivatives`, and `thm-chain-rule-for-complex-derivatives` — exact pointwise derivative, holomorphy, algebra, and chain-rule clauses. Literature-derived statements; source-checked against the URLs already carried by the items and Stein–Shakarchi §2.2.
- `def-complex-trigonometric-and-hyperbolic-functions`, `thm-complex-trigonometric-hyperbolic-dictionary`, `thm-complex-exponential-is-entire-with-derivative-itself`, and `thm-kernel-and-fibres-of-complex-exponential` — exact exponential definitions/dictionary, derivative, and kernel/fibre formula. Mixed literature-derived/ai-altered statements; source-checked against the displayed formulas and Ahlfors/Stein conventions.
- `lem-binomial-theorem-over-complex-numbers` — exact finite binomial identity. `ai-altered`; established from knowledge after checking its stated index range. Its legacy applied canonical-embedding notation will be quoted only if required and will not be reproduced in new prose.
- `cex-smooth-function-not-equal-to-its-maclaurin-series` — exact smooth flat witness and zero Maclaurin series. Literature-derived; source-checked through the Hunter and Trench references already recorded on the item. It is used only by a B-page counterexample and is not load-bearing.

### CA-3 published dependencies

- `def-path-polygonal-length-and-rectifiability-in-rn`, `thm-rectifiable-iff-coordinate-functions-have-bounded-variation`, `def-arc-length-function`, and `lem-arc-length-function-is-continuous-and-nondecreasing` — exact path, rectifiability, coordinate-BV, and length-function clauses, including singleton intervals. Literature-derived/ai-altered; source-checked against Ahlfors §4.1.2 and the items' cited arc-length sources.
- `thm-c1-paths-have-length-equal-to-the-integral-of-speed` and `cor-piecewise-c1-paths-have-additive-speed-integral-length` — exact smooth-piece hypotheses, endpoint derivative extensions, corners, and singleton convention. Literature-derived/ai-altered; source-checked against Ahlfors and Howell–Mathews.
- `def-riemann-stieltjes-sum-and-integral`, `thm-riemann-stieltjes-existence-continuous-bv`, `cor-riemann-stieltjes-integral-bound`, `thm-riemann-stieltjes-linearity-and-additivity`, `thm-riemann-stieltjes-c1-integrator-reduction`, and `thm-riemann-stieltjes-change-of-variable` — real-valued Stieltjes definitions and exact existence/change-of-variable hypotheses. Literature-derived/ai-altered; source-checked against the on-disk statements. Every complex use is explicitly componentwise; none widens the real codomain silently.
- `def-complex-domain`, `def-complex-integer-powers`, `def-polygonal-path-and-polygonal-connectedness`, and `thm-open-connected-subsets-of-rn-are-polygonally-connected` — domain, integer-power, and polygonal-connectivity clauses. Literature-derived/ai-altered; established from knowledge after checking the exact boundary conventions and source-checked for the domain convention against Howell–Mathews.
- `def-piecewise-c1-path-operations-and-oriented-reparametrizations`, `def-scalar-and-vector-line-integrals-along-piecewise-c1-paths`, `thm-line-integrals-under-oriented-reparametrization`, `thm-line-integrals-under-reversal-and-concatenation`, `thm-scalar-and-vector-line-integral-estimates`, `thm-gradient-theorem-for-line-integrals`, and `thm-conservative-path-independent-and-zero-loop-equivalence` — the existing real-vector special case and its structural theorems. Literature-derived statements; source-checked against Lebl's linked sections and the on-disk clauses. They become citable only if finding F1 is approved.

No published dependency opened during this audit contains an unambiguous mathematical falsehood requiring a repair. The issues found are a missing declared page edge and a prose-source locator mismatch, both recorded above.

## Exact page-summary replacements

At step 4, replace the page-summary placeholder for `complex-power-series-and-analytic-functions` in `research/plan-complex-analysis-track.md` with the following exact text, preserving the schema-required paragraph structure (the B page receives no body):

> A complex power series converges absolutely inside its Cauchy–Hadamard radius and uniformly on every smaller closed disc. Its derived series has the same radius, so it may be differentiated repeatedly term by term; the derivatives recover the coefficients and force uniqueness of a representation about a fixed centre.
>
> Analytic means locally representable by a convergent complex power series. Interior re-expansion makes every power-series sum analytic, and analytic functions are holomorphic, closed under the usual local algebra and composition operations, and locally possess primitives. The exponential definitions of the trigonometric and hyperbolic functions agree with their entire series. Abel's theorem controls boundary recovery along Stolz approaches; the identity theorem is not used here.

At step 4, replace the page-summary placeholder for `contour-integration` in `research/plan-complex-analysis-track.md` with the following exact text, preserving the schema-required paragraph structure (the B page receives no body):

> A complex line integral is defined for a continuous integrand along any rectifiable path by four real Riemann–Stieltjes integrals. The absolute integral uses the path's arc-length function. This construction agrees with the familiar parametric formula on piecewise-$C^1$ contours and makes linearity, reversal, concatenation, reparametrization invariance, the fundamental inequality, and the ML estimate precise.
>
> A continuous primitive evaluates every rectifiable contour integral by its endpoint increment, so closed integrals vanish. Conversely, on a complex domain, vanishing on closed contours constructs a primitive and is equivalent to endpoint independence. Uniform limits pass through a fixed contour integral. Direct circle parametrization computes all integer monomials and gives normalized value one for a circle about its centre without invoking Cauchy's theorem or global winding-number theory.

## Per-item expected component provenance

The `statement` label covers the definition, claim, or witness. The `proof` label covers only the planned local derivation. No `ai-generated` statement below is a dependency target; the generated examples, counterexamples, and false statements are checkable leaves. The normalized-circle corollary is source-backed because it is intended to remain available to downstream winding-number pages.

### complex-power-series-and-analytic-functions

| Item | statement | proof | Rationale and Step-5 reference route |
|---|---|---|---|
| `def-complex-analytic-function` | `literature-derived` | `not-applicable` | Statement is harvested from Ahlfors Chapter 2 or Stein–Shakarchi Chapter 1; the planned proof adapts their standard argument to the library's zero-based and componentwise conventions. References are the two URLs in the coverage ledger. |
| `def-uniform-convergence-of-complex-valued-functions` | `ai-altered` | `not-applicable` | Statement is harvested from Ahlfors Chapter 2 or Stein–Shakarchi Chapter 1; the planned proof adapts their standard argument to the library's zero-based and componentwise conventions. References are the two URLs in the coverage ledger. |
| `thm-uniform-cauchy-criterion-complex-functions` | `literature-derived` | `ai-altered` | Statement is harvested from Ahlfors Chapter 2 or Stein–Shakarchi Chapter 1; the planned proof adapts their standard argument to the library's zero-based and componentwise conventions. References are the two URLs in the coverage ledger. |
| `thm-uniform-limit-continuous-complex-functions` | `literature-derived` | `ai-altered` | Statement is harvested from Ahlfors Chapter 2 or Stein–Shakarchi Chapter 1; the planned proof adapts their standard argument to the library's zero-based and componentwise conventions. References are the two URLs in the coverage ledger. |
| `thm-weierstrass-m-test-for-complex-function-series` | `literature-derived` | `ai-altered` | Statement is harvested from Ahlfors Chapter 2 or Stein–Shakarchi Chapter 1; the planned proof adapts their standard argument to the library's zero-based and componentwise conventions. References are the two URLs in the coverage ledger. |
| `thm-complex-power-series-converge-locally-uniformly` | `literature-derived` | `ai-altered` | Statement is harvested from Ahlfors Chapter 2 or Stein–Shakarchi Chapter 1; the planned proof adapts their standard argument to the library's zero-based and componentwise conventions. References are the two URLs in the coverage ledger. |
| `lem-derived-complex-power-series-has-the-same-radius` | `literature-derived` | `ai-altered` | Statement is harvested from Ahlfors Chapter 2 or Stein–Shakarchi Chapter 1; the planned proof adapts their standard argument to the library's zero-based and componentwise conventions. References are the two URLs in the coverage ledger. |
| `thm-termwise-differentiation-of-complex-power-series` | `literature-derived` | `ai-altered` | Statement is harvested from Ahlfors Chapter 2 or Stein–Shakarchi Chapter 1; the planned proof adapts their standard argument to the library's zero-based and componentwise conventions. References are the two URLs in the coverage ledger. |
| `cor-complex-power-series-sums-have-derivatives-of-all-orders` | `literature-derived` | `ai-altered` | Statement is harvested from Ahlfors Chapter 2 or Stein–Shakarchi Chapter 1; the planned proof adapts their standard argument to the library's zero-based and componentwise conventions. References are the two URLs in the coverage ledger. |
| `cor-complex-power-series-coefficient-formula` | `literature-derived` | `ai-altered` | Statement is harvested from Ahlfors Chapter 2 or Stein–Shakarchi Chapter 1; the planned proof adapts their standard argument to the library's zero-based and componentwise conventions. References are the two URLs in the coverage ledger. |
| `cor-uniqueness-of-complex-power-series-coefficients` | `literature-derived` | `ai-altered` | Statement is harvested from Ahlfors Chapter 2 or Stein–Shakarchi Chapter 1; the planned proof adapts their standard argument to the library's zero-based and componentwise conventions. References are the two URLs in the coverage ledger. |
| `thm-complex-analytic-functions-are-holomorphic` | `literature-derived` | `ai-altered` | Statement is harvested from Ahlfors Chapter 2 or Stein–Shakarchi Chapter 1; the planned proof adapts their standard argument to the library's zero-based and componentwise conventions. References are the two URLs in the coverage ledger. |
| `lem-complex-power-series-reexpansion-double-series` | `ai-altered` | `ai-altered` | Complex-field adaptation of the published real power-series theorem, supported by Ahlfors/Stein for the convergence machinery and by https://personal.colby.edu/~erandles/papers/Past_Courses/Supplementary_Notes.pdf or https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf for the corresponding construction. |
| `thm-complex-power-series-reexpansion-at-an-interior-point` | `ai-altered` | `ai-altered` | Complex-field adaptation of the published real power-series theorem, supported by Ahlfors/Stein for the convergence machinery and by https://personal.colby.edu/~erandles/papers/Past_Courses/Supplementary_Notes.pdf or https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf for the corresponding construction. |
| `cor-complex-power-series-sums-are-analytic` | `ai-altered` | `ai-altered` | Statement is harvested from Ahlfors Chapter 2 or Stein–Shakarchi Chapter 1; the planned proof adapts their standard argument to the library's zero-based and componentwise conventions. References are the two URLs in the coverage ledger. |
| `prop-sums-and-scalar-multiples-of-complex-power-series` | `ai-altered` | `ai-altered` | Complex-field adaptation of the published real power-series theorem, supported by Ahlfors/Stein for the convergence machinery and by https://personal.colby.edu/~erandles/papers/Past_Courses/Supplementary_Notes.pdf or https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf for the corresponding construction. |
| `prop-cauchy-products-of-complex-power-series` | `ai-altered` | `ai-altered` | Complex-field adaptation of the published real power-series theorem, supported by Ahlfors/Stein for the convergence machinery and by https://personal.colby.edu/~erandles/papers/Past_Courses/Supplementary_Notes.pdf or https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf for the corresponding construction. |
| `lem-local-composition-of-complex-power-series` | `ai-altered` | `ai-altered` | Complex-field adaptation of the published real power-series theorem, with the outer radius made explicitly positive and the proof using the absolute coefficient majorant below that radius; supported by Ahlfors/Stein for the convergence machinery and by https://personal.colby.edu/~erandles/papers/Past_Courses/Supplementary_Notes.pdf or https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf for the corresponding construction. |
| `lem-local-reciprocal-of-complex-power-series` | `ai-altered` | `ai-altered` | Complex-field adaptation of the published real power-series theorem, supported by Ahlfors/Stein for the convergence machinery and by https://personal.colby.edu/~erandles/papers/Past_Courses/Supplementary_Notes.pdf or https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf for the corresponding construction. |
| `thm-complex-analytic-functions-closed-under-algebra-quotients-and-composition` | `ai-altered` | `ai-altered` | Complex-field adaptation of the published real power-series theorem, supported by Ahlfors/Stein for the convergence machinery and by https://personal.colby.edu/~erandles/papers/Past_Courses/Supplementary_Notes.pdf or https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf for the corresponding construction. |
| `cor-complex-analytic-functions-have-local-primitives` | `literature-derived` | `ai-altered` | Statement is harvested from Ahlfors Chapter 2 or Stein–Shakarchi Chapter 1; the planned proof adapts their standard argument to the library's zero-based and componentwise conventions. References are the two URLs in the coverage ledger. |
| `thm-complex-trigonometric-and-hyperbolic-power-series` | `literature-derived` | `ai-altered` | Statement is harvested from Ahlfors Chapter 2 or Stein–Shakarchi Chapter 1; the planned proof adapts their standard argument to the library's zero-based and componentwise conventions. References are the two URLs in the coverage ledger. |
| `cor-complex-trigonometric-and-hyperbolic-derivatives` | `literature-derived` | `ai-altered` | Statement is harvested from Ahlfors Chapter 2 or Stein–Shakarchi Chapter 1; the planned proof adapts their standard argument to the library's zero-based and componentwise conventions. References are the two URLs in the coverage ledger. |
| `cor-complex-trigonometric-and-hyperbolic-addition-formulas` | `literature-derived` | `ai-altered` | Statement is harvested from Ahlfors Chapter 2 or Stein–Shakarchi Chapter 1; the planned proof adapts their standard argument to the library's zero-based and componentwise conventions. References are the two URLs in the coverage ledger. |
| `thm-complex-sine-and-cosine-zero-sets` | `literature-derived` | `ai-altered` | Statement is harvested from Ahlfors Chapter 2 or Stein–Shakarchi Chapter 1; the planned proof adapts their standard argument to the library's zero-based and componentwise conventions. References are the two URLs in the coverage ledger. |
| `def-stolz-approach-region-at-one` | `literature-derived` | `not-applicable` | Statement is harvested from Ahlfors Chapter 2 or Stein–Shakarchi Chapter 1; the planned proof adapts their standard argument to the library's zero-based and componentwise conventions. References are the two URLs in the coverage ledger. |
| `lem-abel-summation-for-complex-series` | `literature-derived` | `ai-altered` | Statement is harvested from Ahlfors Chapter 2 or Stein–Shakarchi Chapter 1; the planned proof adapts their standard argument to the library's zero-based and componentwise conventions. References are the two URLs in the coverage ledger. |
| `thm-abel-limit-theorem-for-complex-series-in-stolz-regions` | `literature-derived` | `ai-altered` | Statement is harvested from Ahlfors Chapter 2 or Stein–Shakarchi Chapter 1; the planned proof adapts their standard argument to the library's zero-based and componentwise conventions. References are the two URLs in the coverage ledger. |

### complex-power-series-and-analytic-functions-examples

| Item | statement | proof | Rationale and Step-5 reference route |
|---|---|---|---|
| `ex-geometric-series-reexpanded-about-an-arbitrary-complex-point` | `ai-altered` | `ai-altered` | Complex-field adaptation of the published real power-series theorem, supported by Ahlfors/Stein for the convergence machinery and by https://personal.colby.edu/~erandles/papers/Past_Courses/Supplementary_Notes.pdf or https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf for the corresponding construction. |
| `ex-alternating-harmonic-power-series-at-the-boundary` | `literature-derived` | `ai-altered` | Statement is the explicit source-backed example or specialization; proof is adapted rather than copied. References: Ahlfors/Stein plus the exact published real evaluation named in its dependencies. |
| `ex-square-summable-coefficient-power-series-on-the-closed-disc` | `ai-generated` | `ai-generated` | Checkable direct corollary or explicit witness designed for this scaffold; it is not a dependency target. Step 5 must add `generation` metadata and verify the displayed calculation independently. |
| `cex-complex-power-series-not-uniform-on-its-open-disc` | `ai-altered` | `ai-altered` | Statement is harvested from Ahlfors Chapter 2 or Stein–Shakarchi Chapter 1; the planned proof adapts their standard argument to the library's zero-based and componentwise conventions. References are the two URLs in the coverage ledger. |
| `cex-radius-does-not-determine-boundary-convergence-of-a-complex-power-series` | `ai-generated` | `ai-generated` | Checkable direct corollary or explicit witness designed for this scaffold; it is not a dependency target. Step 5 must add `generation` metadata and verify the displayed calculation independently. |
| `ex-lacunary-factorial-exponent-power-series` | `ai-generated` | `ai-generated` | Checkable direct corollary or explicit witness designed for this scaffold; it is not a dependency target. Step 5 must add `generation` metadata and verify the displayed calculation independently. |
| `ex-real-rational-function-with-finite-taylor-radius` | `ai-generated` | `ai-generated` | Checkable direct corollary or explicit witness designed for this scaffold; it is not a dependency target. Step 5 must add `generation` metadata and verify the displayed calculation independently. |
| `ex-abel-limit-along-a-nonradial-stolz-approach` | `ai-generated` | `ai-generated` | Checkable direct corollary or explicit witness designed for this scaffold; it is not a dependency target. Step 5 must add `generation` metadata and verify the displayed calculation independently. |
| `fs-convergence-at-one-noncentral-point-forces-entire-convergence` | `ai-altered` | `ai-generated` | The false claim is the source-backed Cauchy–Hadamard radius clause with one interior convergence point incorrectly widened to convergence everywhere; the explicit geometric-series refutation is new and the item is not a dependency target. |

### contour-integration

| Item | statement | proof | Rationale and Step-5 reference route |
|---|---|---|---|
| `rem-complex-contours-as-planar-rectifiable-paths` | `ai-altered` | `not-applicable` | Statement is harvested from Ahlfors Chapter 4, Stein–Shakarchi §3, Howell–Mathews §6.2, or Weber §1.7; any extension from piecewise-C1 to rectifiable paths is the componentwise Riemann–Stieltjes adaptation recorded in the generality decision. Use the exact coverage URLs at Step 5. |
| `def-complex-contours-reversal-concatenation-and-closedness` | `ai-altered` | `not-applicable` | Statement is harvested from Ahlfors Chapter 4, Stein–Shakarchi §3, Howell–Mathews §6.2, or Weber §1.7; any extension from piecewise-C1 to rectifiable paths is the componentwise Riemann–Stieltjes adaptation recorded in the generality decision. Use the exact coverage URLs at Step 5. |
| `def-complex-line-integral-over-a-rectifiable-path` | `ai-altered` | `not-applicable` | Statement is harvested from Ahlfors Chapter 4, Stein–Shakarchi §3, Howell–Mathews §6.2, or Weber §1.7; any extension from piecewise-C1 to rectifiable paths is the componentwise Riemann–Stieltjes adaptation recorded in the generality decision. Use the exact coverage URLs at Step 5. |
| `def-absolute-line-integral-over-a-rectifiable-path` | `ai-altered` | `not-applicable` | Statement is harvested from Ahlfors Chapter 4, Stein–Shakarchi §3, Howell–Mathews §6.2, or Weber §1.7; any extension from piecewise-C1 to rectifiable paths is the componentwise Riemann–Stieltjes adaptation recorded in the generality decision. Use the exact coverage URLs at Step 5. |
| `thm-existence-of-complex-line-integrals-on-rectifiable-paths` | `ai-altered` | `ai-altered` | Statement is harvested from Ahlfors Chapter 4, Stein–Shakarchi §3, Howell–Mathews §6.2, or Weber §1.7; any extension from piecewise-C1 to rectifiable paths is the componentwise Riemann–Stieltjes adaptation recorded in the generality decision. Use the exact coverage URLs at Step 5. |
| `thm-riemann-stieltjes-and-parametric-contour-integrals-agree` | `ai-altered` | `ai-altered` | Statement is harvested from Ahlfors Chapter 4, Stein–Shakarchi §3, Howell–Mathews §6.2, or Weber §1.7; any extension from piecewise-C1 to rectifiable paths is the componentwise Riemann–Stieltjes adaptation recorded in the generality decision. Use the exact coverage URLs at Step 5. |
| `prop-linearity-of-complex-line-integrals` | `literature-derived` | `ai-altered` | Statement is harvested from Ahlfors Chapter 4, Stein–Shakarchi §3, Howell–Mathews §6.2, or Weber §1.7; any extension from piecewise-C1 to rectifiable paths is the componentwise Riemann–Stieltjes adaptation recorded in the generality decision. Use the exact coverage URLs at Step 5. |
| `prop-reversal-and-concatenation-of-complex-line-integrals` | `literature-derived` | `ai-altered` | Statement is harvested from Ahlfors Chapter 4, Stein–Shakarchi §3, Howell–Mathews §6.2, or Weber §1.7; any extension from piecewise-C1 to rectifiable paths is the componentwise Riemann–Stieltjes adaptation recorded in the generality decision. Use the exact coverage URLs at Step 5. |
| `thm-invariance-of-complex-line-integrals-under-increasing-reparametrization` | `literature-derived` | `ai-altered` | Statement is harvested from Ahlfors Chapter 4, Stein–Shakarchi §3, Howell–Mathews §6.2, or Weber §1.7; any extension from piecewise-C1 to rectifiable paths is the componentwise Riemann–Stieltjes adaptation recorded in the generality decision. Use the exact coverage URLs at Step 5. |
| `thm-fundamental-inequality-for-complex-line-integrals` | `literature-derived` | `ai-altered` | Statement is harvested from Ahlfors Chapter 4, Stein–Shakarchi §3, Howell–Mathews §6.2, or Weber §1.7; any extension from piecewise-C1 to rectifiable paths is the componentwise Riemann–Stieltjes adaptation recorded in the generality decision. Use the exact coverage URLs at Step 5. |
| `cor-ml-estimate-for-complex-line-integrals` | `literature-derived` | `ai-altered` | Statement is harvested from Ahlfors Chapter 4, Stein–Shakarchi §3, Howell–Mathews §6.2, or Weber §1.7; any extension from piecewise-C1 to rectifiable paths is the componentwise Riemann–Stieltjes adaptation recorded in the generality decision. Use the exact coverage URLs at Step 5. |
| `cor-absolute-integral-of-one-is-path-length` | `literature-derived` | `ai-altered` | Statement is harvested from Ahlfors Chapter 4, Stein–Shakarchi §3, Howell–Mathews §6.2, or Weber §1.7; any extension from piecewise-C1 to rectifiable paths is the componentwise Riemann–Stieltjes adaptation recorded in the generality decision. Use the exact coverage URLs at Step 5. |
| `def-complex-primitive` | `literature-derived` | `not-applicable` | Statement is harvested from Ahlfors Chapter 4, Stein–Shakarchi §3, Howell–Mathews §6.2, or Weber §1.7; any extension from piecewise-C1 to rectifiable paths is the componentwise Riemann–Stieltjes adaptation recorded in the generality decision. Use the exact coverage URLs at Step 5. |
| `thm-fundamental-theorem-for-complex-line-integrals` | `literature-derived` | `ai-altered` | Statement is harvested from Ahlfors Chapter 4, Stein–Shakarchi §3, Howell–Mathews §6.2, or Weber §1.7; any extension from piecewise-C1 to rectifiable paths is the componentwise Riemann–Stieltjes adaptation recorded in the generality decision. Use the exact coverage URLs at Step 5. |
| `cor-closed-contour-integral-of-a-derivative-is-zero` | `literature-derived` | `ai-altered` | Statement is harvested from Ahlfors Chapter 4, Stein–Shakarchi §3, Howell–Mathews §6.2, or Weber §1.7; any extension from piecewise-C1 to rectifiable paths is the componentwise Riemann–Stieltjes adaptation recorded in the generality decision. Use the exact coverage URLs at Step 5. |
| `cor-contour-integral-of-a-constant-is-an-endpoint-increment` | `literature-derived` | `ai-altered` | Statement is harvested from Ahlfors Chapter 4, Stein–Shakarchi §3, Howell–Mathews §6.2, or Weber §1.7; any extension from piecewise-C1 to rectifiable paths is the componentwise Riemann–Stieltjes adaptation recorded in the generality decision. Use the exact coverage URLs at Step 5. |
| `thm-path-independence-and-complex-primitive-criterion` | `literature-derived` | `ai-altered` | Statement is harvested from Ahlfors Chapter 4, Stein–Shakarchi §3, Howell–Mathews §6.2, or Weber §1.7; any extension from piecewise-C1 to rectifiable paths is the componentwise Riemann–Stieltjes adaptation recorded in the generality decision. Use the exact coverage URLs at Step 5. |
| `thm-uniform-limit-interchanges-complex-line-integrals` | `ai-altered` | `ai-altered` | Statement is harvested from Ahlfors Chapter 4, Stein–Shakarchi §3, Howell–Mathews §6.2, or Weber §1.7; any extension from piecewise-C1 to rectifiable paths is the componentwise Riemann–Stieltjes adaptation recorded in the generality decision. Use the exact coverage URLs at Step 5. |
| `thm-circle-integrals-of-integer-monomials` | `literature-derived` | `ai-altered` | Statement is harvested from Ahlfors Chapter 4, Stein–Shakarchi §3, Howell–Mathews §6.2, or Weber §1.7; any extension from piecewise-C1 to rectifiable paths is the componentwise Riemann–Stieltjes adaptation recorded in the generality decision. Use the exact coverage URLs at Step 5. |
| `cor-normalized-circle-integral-about-its-centre-is-one` | `ai-altered` | `ai-altered` | Direct normalized specialization of the integer-monomial circle formula harvested independently from Ahlfors §4.1.3 and Weber Example 1.7.1; its statement is source-backed because later winding-number pages may cite it. |
| `fs-every-continuous-complex-function-on-a-domain-has-a-primitive` | `literature-derived` | `ai-altered` | Statement is harvested from Ahlfors Chapter 4, Stein–Shakarchi §3, Howell–Mathews §6.2, or Weber §1.7; any extension from piecewise-C1 to rectifiable paths is the componentwise Riemann–Stieltjes adaptation recorded in the generality decision. Use the exact coverage URLs at Step 5. |

### contour-integration-examples

| Item | statement | proof | Rationale and Step-5 reference route |
|---|---|---|---|
| `ex-exponential-contour-integral-by-riemann-sum-and-parametrization` | `literature-derived` | `ai-altered` | Statement and witness are harvested from Howell–Mathews §6.1–6.2 or Weber §1.7; the local calculation is adapted to the library's rectifiable-path conventions. Use the exact coverage URL at Step 5. |
| `ex-polynomial-contour-integral-along-a-line-segment` | `literature-derived` | `ai-altered` | Statement and witness are harvested from Howell–Mathews §6.1–6.2 or Weber §1.7; the local calculation is adapted to the library's rectifiable-path conventions. Use the exact coverage URL at Step 5. |
| `ex-contour-integral-of-conjugation-depends-on-the-path` | `literature-derived` | `ai-altered` | Statement and witness are harvested from Howell–Mathews §6.1–6.2 or Weber §1.7; the local calculation is adapted to the library's rectifiable-path conventions. Use the exact coverage URL at Step 5. |
| `ex-ml-estimate-on-a-semicircle` | `literature-derived` | `ai-altered` | Statement and witness are harvested from Howell–Mathews §6.1–6.2 or Weber §1.7; the local calculation is adapted to the library's rectifiable-path conventions. Use the exact coverage URL at Step 5. |
| `ex-circle-integral-of-one-over-z-minus-a` | `literature-derived` | `ai-altered` | Statement and witness are harvested from Howell–Mathews §6.1–6.2 or Weber §1.7; the local calculation is adapted to the library's rectifiable-path conventions. Use the exact coverage URL at Step 5. |
| `ex-keyhole-contour-assembly-without-cauchys-theorem` | `ai-generated` | `ai-generated` | Checkable direct corollary or explicit witness designed for this scaffold; it is not a dependency target. Step 5 must add `generation` metadata and verify the displayed calculation independently. |
| `ex-riemann-stieltjes-integral-on-a-polygonal-contour` | `ai-altered` | `ai-altered` | Howell–Mathews Example 6.2.4 supplies the exact three-segment corner parametrization; the affine-integrand Stieltjes computation is this scaffold's explicit adaptation and remains a B-page leaf. |
| `cex-reversing-orientation-preserves-a-contour-integral` | `ai-generated` | `ai-generated` | Checkable direct corollary or explicit witness designed for this scaffold; it is not a dependency target. Step 5 must add `generation` metadata and verify the displayed calculation independently. |
| `fs-absolute-value-passes-through-a-contour-integral` | `ai-altered` | `ai-generated` | The false claim changes the source-backed fundamental inequality into equality; the constant-on-a-circle refutation is new and the item is not a dependency target. |
| `fs-contour-length-is-the-length-of-its-trace` | `ai-altered` | `ai-generated` | The false claim drops the bijective monotone-reparametrization restriction from the source-backed length invariance theorem and thereby ignores multiplicity; the double-traversal refutation is new and the item is not a dependency target. |
| `fs-parametrization-independence-includes-orientation-reversal` | `ai-altered` | `ai-generated` | The false claim drops the increasing/orientation-preserving hypothesis from the source-backed reparametrization theorem; the reversed-segment refutation is new and the item is not a dependency target. |

## New-id collision search

Every id in the batch manifest was searched verbatim with `rg -l --fixed-strings <id> items research/plan-spec.json` before insertion. No proposed id existed. A second whole-manifest collision pass is required immediately before step 4 because other batches share the filesystem.

## Proof-contract state at scaffold time

`research/frontier-14-batch-1.proof-contracts.json` scopes every item with a planned proof, refutation, counterexample, or verification strategy. Its numbered entries decompose the current strategy sentences and all eight boundary axes are disposed now. The `citations` arrays are intentionally empty at step 2: planned internal source statements do not yet exist on disk, so exact quotation would be fabricated. At step 5, after each item's Facts & Assumptions and numbered proof are written, replace the planned map with exact source-section quotations and exact uses before running the strict proof-contract gate.

## Final step-2 report

### Yield and page sizes

- `complex-power-series-and-analytic-functions` (A, order 305): **28 entries**.
- `complex-power-series-and-analytic-functions-examples` (B, order 306): **9 entries**.
- `contour-integration` (A, order 307): **21 entries**.
- `contour-integration-examples` (B, order 308): **11 entries**.
- Total: **69 entries**. The A pages are far below the 60-entry split trigger, so **no split is proposed**.
- Harvest: **89 source results/headings**: 56 `included`, 11 `inline`, 22 `already-published`, and **0 declined**. Thus 67 harvested results route into the new scaffold and 22 are discharged by exact published items. There are no deferred/out-of-scope dispositions and therefore no decline expected to be challenged.

### Dependency confidence register

Every one of the following **61 direct published dependencies** was opened on disk, including its actual Statement, Definition, or Remark clause. Two routes were used: **S** means the clause was also matched to one of the exact Ahlfors, Stein–Shakarchi, Howell–Mathews, or Weber ranges actually read; **K** means the exact on-disk clause, including domain and endpoint conventions, was independently confirmed from mathematical knowledge. Neither route treats legacy component provenance as evidence that a statement is generated.

**Route S:** `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`; `cor-continuous-complex-derivative-gives-c1-components`; `cor-piecewise-c1-paths-have-additive-speed-integral-length`; `def-arc-length-function`; `def-complex-conjugate-real-imaginary-part-and-modulus`; `def-complex-differentiability-holomorphic-and-entire`; `def-complex-domain`; `def-complex-exponential`; `def-complex-series-power-series-and-absolute-convergence`; `def-complex-trigonometric-and-hyperbolic-functions`; `def-path-polygonal-length-and-rectifiability-in-rn`; `def-piecewise-c1-path-operations-and-oriented-reparametrizations`; `def-scalar-and-vector-line-integrals-along-piecewise-c1-paths`; `lem-arc-length-function-is-continuous-and-nondecreasing`; `rem-complex-plane-euclidean-dictionary`; `thm-absolute-convergence-of-complex-series`; `thm-algebra-of-complex-derivatives`; `thm-arc-length-is-invariant-under-monotone-reparametrization`; `thm-cauchy-hadamard-for-complex-power-series`; `thm-complex-exponential-addition-and-real-extension`; `thm-complex-exponential-is-entire-with-derivative-itself`; `thm-complex-polynomials-and-rational-functions-are-holomorphic`; `thm-kernel-and-fibres-of-complex-exponential`; `thm-line-integrals-under-oriented-reparametrization`; `thm-line-integrals-under-reversal-and-concatenation`; `thm-rectifiable-iff-coordinate-functions-have-bounded-variation`; `thm-scalar-and-vector-line-integral-estimates`.

**Route K:** `cor-chord-length-is-at-most-arc-length`; `cor-riemann-stieltjes-integral-bound`; `def-complex-integer-powers`; `def-complex-metric-convergence-and-continuity`; `def-factorial-and-falling-factorial`; `def-higher-derivatives-and-smoothness`; `def-monoid-finite-product`; `def-pointwise-uniform-and-uniformly-cauchy-convergence`; `def-polygonal-path-and-polygonal-connectedness`; `def-riemann-stieltjes-sum-and-integral`; `def-vector-valued-derivative-and-integral`; `lem-binomial-theorem-over-complex-numbers`; `lem-cauchy-product-of-absolutely-convergent-complex-series`; `lem-complex-conjugation-and-modulus-laws`; `lem-derived-and-integrated-power-series-have-the-same-radius`; `lem-nth-term-test`; `lem-power-series-reexpansion-double-series`; `lem-punctured-rn-is-polygonally-connected`; `thm-algebra-of-derivatives`; `thm-complex-numbers-form-a-field`; `thm-complex-plane-is-complete`; `thm-componentwise-limits-and-continuity`; `thm-conservative-path-independent-and-zero-loop-equivalence`; `thm-ftc-second-part`; `thm-gradient-theorem-for-line-integrals`; `thm-log-one-plus-x-power-series`; `thm-open-connected-subsets-of-rn-are-polygonally-connected`; `thm-p-series-real-exponents`; `thm-riemann-stieltjes-c1-integrator-reduction`; `thm-riemann-stieltjes-change-of-variable`; `thm-riemann-stieltjes-existence-continuous-bv`; `thm-riemann-stieltjes-linearity-and-additivity`; `thm-uniform-limit-continuous-real-functions`; `thm-weierstrass-m-test-for-function-series`.

The fidelity sweep found one important non-citation: `lem-power-difference-factorisation` is real-valued, so it cannot justify a complex monomial or geometric identity. It was removed from both planned dependency lists; those finite identities are now proved inline over the complex field.

### Conventions, findings, and blockers

- Analytic means locally power-series representable; holomorphic retains the published complex-differentiability meaning. This makes analytic-implies-holomorphic ours and leaves the converse/identity theorem to CA-5.
- Contours are rectifiable paths, constant and zero-speed pieces are allowed, and the primary integral is componentwise Riemann–Stieltjes. Piecewise-$C^1$ parametrization is an agreement theorem, not the definition.
- Increasing reparametrizations preserve orientation; reversal changes the sign. Endpoint, singleton, radius-zero, zero-length, and boundary-circle cases are separately disposed in the proof contracts.
- Ahlfors initially uses “analytic” for holomorphic; Stein–Shakarchi require nonzero speed for a smooth curve; Howell–Mathews use contour for piecewise-smooth curves; Weber assumes holomorphy where continuity suffices for defining an integral. The scaffold records and resolves each disagreement above.
- **Step-3 adjudication required:** finding F1 recommends the legal backward edge `contour-integration -> line-integrals-and-the-gradient-theorem`. The in-memory plan overlay with that edge is green. Without it, the agreement theorem cannot cite the already-published real-vector construction. No `307 -> 305` cross-pair edge is needed.
- **Source correction:** Weber Chapter 1 is not a CA-2 power-series range; it is used only at §1.7 for CA-3. This is a locator correction, not a mathematical blocker.
- No published dependency was found false. No external operation was blocked. Nothing outside the four authorised batch artifacts was edited.

### Check record

- Authoritative current plan: `node tools/validate-plan.mjs research/plan-spec.json` — green.
- Candidate item overlay plus proposed F1 edge: `validate-plan.mjs` — green; no unresolved IDs, forward references, cycles, undeclared prerequisites, or B-page dependencies.
- `coverage-checklist.mjs` — 2 A pages, 89 harvested results, 0 errors, 0 warnings.
- `content-policy.mjs --manifest-only` — 69 scoped items, 0 errors, 0 warnings.
- `prosecheck.mjs` on this notes file — 0 errors, 0 warnings.
- `boundary-audit.mjs` — 488 rows, 0 template clusters, 0 contradicted candidates; all 61 scoped proof contracts are correctly reported as not yet authored.
- `citation-fidelity.mjs` — 0 widening candidates at scaffold time; 61 contracts refer to entries not yet authored, so exact authored citations remain a mandatory Step-5 check.
- The proof-contract JSON has exactly 61 contracts and eight anchored boundary rows per contract. The strict authored-item proof-contract gate cannot run before those item files exist and was not represented as completed. Per instruction, `tools/gates.mjs` was not run.

### Canonical per-page item inventory

#### `complex-power-series-and-analytic-functions` (28)

| Kind | ID | Title |
|---|---|---|
| definition | `def-complex-analytic-function` | Complex analytic functions as locally representable by convergent power series |
| definition | `def-uniform-convergence-of-complex-valued-functions` | Uniform convergence and the uniformly Cauchy condition for complex-valued functions, with the componentwise dictionary |
| theorem | `thm-uniform-cauchy-criterion-complex-functions` | A sequence of complex-valued functions converges uniformly if and only if it is uniformly Cauchy |
| theorem | `thm-uniform-limit-continuous-complex-functions` | A uniform limit of continuous complex-valued functions is continuous |
| theorem | `thm-weierstrass-m-test-for-complex-function-series` | Weierstrass M-test for complex-valued function series |
| theorem | `thm-complex-power-series-converge-locally-uniformly` | A complex power series converges absolutely and uniformly on every closed subdisc strictly inside its disc of convergence |
| lemma | `lem-derived-complex-power-series-has-the-same-radius` | A complex power series, its formal derivative, and its zero-constant-term formal antiderivative have the same radius |
| theorem | `thm-termwise-differentiation-of-complex-power-series` | Inside its disc of convergence a complex power series is holomorphic and may be differentiated term by term |
| corollary | `cor-complex-power-series-sums-have-derivatives-of-all-orders` | A complex power-series sum has complex derivatives of every order, obtained by repeated termwise differentiation |
| corollary | `cor-complex-power-series-coefficient-formula` | The coefficients of a complex power series are its derivatives at the centre divided by the corresponding factorials |
| corollary | `cor-uniqueness-of-complex-power-series-coefficients` | A complex power-series representation about a fixed centre has unique coefficients |
| theorem | `thm-complex-analytic-functions-are-holomorphic` | Every complex analytic function is holomorphic |
| lemma | `lem-complex-power-series-reexpansion-double-series` | The binomial double series for re-expanding a complex power series is absolutely convergent and may be regrouped |
| theorem | `thm-complex-power-series-reexpansion-at-an-interior-point` | A complex power-series sum re-expands about every interior point, at least to the distance from that point to the original boundary |
| corollary | `cor-complex-power-series-sums-are-analytic` | The sum of a complex power series is analytic throughout its open disc of convergence |
| proposition | `prop-sums-and-scalar-multiples-of-complex-power-series` | Sums and scalar multiples of convergent complex power series are represented coefficientwise on the common disc |
| proposition | `prop-cauchy-products-of-complex-power-series` | Products of convergent complex power series are represented by their Cauchy-product coefficients on the common disc |
| lemma | `lem-local-composition-of-complex-power-series` | A composition of convergent complex power series has a convergent local power-series expansion when the inner sum maps the centre to the outer centre |
| lemma | `lem-local-reciprocal-of-complex-power-series` | A convergent complex power series with nonzero constant term has a convergent reciprocal power series locally |
| theorem | `thm-complex-analytic-functions-closed-under-algebra-quotients-and-composition` | Complex analytic functions are closed under finite linear combinations, products, quotients with nonzero denominator, and composition |
| corollary | `cor-complex-analytic-functions-have-local-primitives` | Every complex analytic function has a primitive on a neighbourhood of each point |
| theorem | `thm-complex-trigonometric-and-hyperbolic-power-series` | The exponential definitions of complex sine, cosine, hyperbolic sine, and hyperbolic cosine equal their entire power series |
| corollary | `cor-complex-trigonometric-and-hyperbolic-derivatives` | Complex sine, cosine, hyperbolic sine, and hyperbolic cosine are entire with their standard derivatives |
| corollary | `cor-complex-trigonometric-and-hyperbolic-addition-formulas` | The addition formulas for complex trigonometric and hyperbolic functions |
| theorem | `thm-complex-sine-and-cosine-zero-sets` | The zeros of complex sine are the integer multiples of pi, and the zeros of complex cosine are the odd half-integer multiples of pi |
| definition | `def-stolz-approach-region-at-one` | Stolz approach regions at the boundary point 1 of the unit disc |
| lemma | `lem-abel-summation-for-complex-series` | Abel summation by parts for complex coefficients and their partial sums |
| theorem | `thm-abel-limit-theorem-for-complex-series-in-stolz-regions` | Abel's limit theorem: a convergent complex series is recovered by its power series along every Stolz approach to 1 |

#### `complex-power-series-and-analytic-functions-examples` (9)

| Kind | ID | Title |
|---|---|---|
| example | `ex-geometric-series-reexpanded-about-an-arbitrary-complex-point` | The geometric series re-expanded about an arbitrary point of the unit disc |
| example | `ex-alternating-harmonic-power-series-at-the-boundary` | The alternating harmonic power series tends to log 2 at the boundary point 1 |
| example | `ex-square-summable-coefficient-power-series-on-the-closed-disc` | A power series with reciprocal-square coefficients converges uniformly on the closed unit disc |
| counterexample | `cex-complex-power-series-not-uniform-on-its-open-disc` | The complex geometric series is not uniformly convergent on its open unit disc |
| counterexample | `cex-radius-does-not-determine-boundary-convergence-of-a-complex-power-series` | Equal radii do not determine convergence on the boundary circle |
| example | `ex-lacunary-factorial-exponent-power-series` | The lacunary power series with factorial exponents has radius one and diverges at 1 |
| example | `ex-real-rational-function-with-finite-taylor-radius` | The real function 1/(1+x^2) is smooth on the real line but its Maclaurin series has radius one |
| example | `ex-abel-limit-along-a-nonradial-stolz-approach` | Abel convergence of the alternating harmonic power series along a nonradial Stolz approach |
| false-statement | `fs-convergence-at-one-noncentral-point-forces-entire-convergence` | FALSE: convergence of a complex power series at one point other than its centre forces convergence everywhere |

#### `contour-integration` (21)

| Kind | ID | Title |
|---|---|---|
| remark | `rem-complex-contours-as-planar-rectifiable-paths` | Complex contours as planar rectifiable paths: the Euclidean, coordinate-BV, and piecewise-C1 dictionaries |
| definition | `def-complex-contours-reversal-concatenation-and-closedness` | Rectifiable complex contours, reversal, concatenation, closedness, and orientation |
| definition | `def-complex-line-integral-over-a-rectifiable-path` | The complex line integral over a rectifiable path as a componentwise Riemann–Stieltjes integral |
| definition | `def-absolute-line-integral-over-a-rectifiable-path` | The absolute line integral over a rectifiable path using its arc-length function |
| theorem | `thm-existence-of-complex-line-integrals-on-rectifiable-paths` | Continuous integrands have complex and absolute line integrals along every rectifiable path |
| theorem | `thm-riemann-stieltjes-and-parametric-contour-integrals-agree` | For piecewise-C1 contours the Riemann–Stieltjes integral agrees with the parametric complex integral and the published real line integrals |
| proposition | `prop-linearity-of-complex-line-integrals` | Complex line integrals are linear in the integrand |
| proposition | `prop-reversal-and-concatenation-of-complex-line-integrals` | Complex line integrals change sign under reversal and add under concatenation |
| theorem | `thm-invariance-of-complex-line-integrals-under-increasing-reparametrization` | Complex and absolute line integrals are invariant under increasing continuous reparametrization |
| theorem | `thm-fundamental-inequality-for-complex-line-integrals` | The fundamental inequality: the modulus of the integral is at most the absolute line integral for rectifiable contours |
| corollary | `cor-ml-estimate-for-complex-line-integrals` | ML estimate: a contour integral is bounded by a supremum bound times path length |
| corollary | `cor-absolute-integral-of-one-is-path-length` | The absolute line integral of the constant function 1 is the length of the path |
| definition | `def-complex-primitive` | A primitive of a complex function on an open set |
| theorem | `thm-fundamental-theorem-for-complex-line-integrals` | The line integral of a function with a continuous primitive is the primitive's endpoint increment along every rectifiable path |
| corollary | `cor-closed-contour-integral-of-a-derivative-is-zero` | The integral of a continuous complex derivative over every closed rectifiable contour is zero |
| corollary | `cor-contour-integral-of-a-constant-is-an-endpoint-increment` | The contour integral of a constant c is c times the endpoint displacement |
| theorem | `thm-path-independence-and-complex-primitive-criterion` | For a continuous function on a complex domain, endpoint independence, zero closed-contour integrals, and existence of a primitive are equivalent |
| theorem | `thm-uniform-limit-interchanges-complex-line-integrals` | A uniformly convergent sequence of continuous integrands on a fixed contour permits passage of the limit through the complex line integral |
| theorem | `thm-circle-integrals-of-integer-monomials` | On a positively oriented circle about a, the integral of (z-a)^m is zero for every integer m except -1, and is 2 pi i for m=-1 |
| corollary | `cor-normalized-circle-integral-about-its-centre-is-one` | The normalized integral around a positively oriented circle centred at a is 1 |
| false-statement | `fs-every-continuous-complex-function-on-a-domain-has-a-primitive` | FALSE: every continuous complex-valued function on a domain has a primitive |

#### `contour-integration-examples` (11)

| Kind | ID | Title |
|---|---|---|
| example | `ex-exponential-contour-integral-by-riemann-sum-and-parametrization` | An exponential contour integral approximated by Riemann sums and evaluated by parametrization and a primitive |
| example | `ex-polynomial-contour-integral-along-a-line-segment` | Integrating a complex polynomial along a segment and a parabola by a primitive and by parametrization |
| example | `ex-contour-integral-of-conjugation-depends-on-the-path` | The integral of complex conjugation from -1 to 1 differs along a semicircle and a polygonal path |
| example | `ex-ml-estimate-on-a-semicircle` | ML bounds for rational integrands on a semicircular arc and a line segment |
| example | `ex-circle-integral-of-one-over-z-minus-a` | Direct computation of the integral of 1/(z-a) around a semicircle and a full circle centred at a |
| example | `ex-keyhole-contour-assembly-without-cauchys-theorem` | Assembling a keyhole contour from two radial segments and two circular arcs |
| example | `ex-riemann-stieltjes-integral-on-a-polygonal-contour` | The rectifiable Riemann–Stieltjes definition on an explicit polygonal contour with corners |
| counterexample | `cex-reversing-orientation-preserves-a-contour-integral` | Reversing orientation does not preserve a complex contour integral |
| false-statement | `fs-absolute-value-passes-through-a-contour-integral` | FALSE: the modulus of a contour integral always equals the absolute line integral |
| false-statement | `fs-contour-length-is-the-length-of-its-trace` | FALSE: contour length depends only on the trace and ignores multiplicity |
| false-statement | `fs-parametrization-independence-includes-orientation-reversal` | FALSE: parametrization independence makes orientation reversal leave every contour integral unchanged |

## Step-3 fix pass — superseded routing attempt

No finding id matching the dispatch's stable `B1-*` pattern appears in
`research/frontier-14-alpha-a-step3-scaffold-review.md`; an exact fixed-string
search returned zero matches. The report instead uses the unprefixed ids
`A1`–`A4` and `B1`–`B3` for this batch's two pairs and supplies no mapping to
the required `B1-*` namespace. Following the dispatch's explicit no-renumbering
and no-match exit instructions, no finding was translated or silently assigned,
and no pages, coverage rows, or proof contracts were changed in this pass.

## Step-3 fix pass

### Routed re-dispatch

The addendum to
`research/frontier-14-alpha-a-step3-scaffold-review.md` now supplies the literal
batch-1 routing map and therefore supersedes the no-match exit recorded above.
The stable ids remain exactly `A1`–`A4` and `B1`–`B3`; none has been renumbered.

### Stable finding dispositions

- **A1 — applied.** Added
  `thm-complex-sine-and-cosine-are-unbounded` immediately after the complex
  trigonometric/hyperbolic addition formulas, and added the corresponding
  Stein–Shakarchi Chapter 1 §2.3 harvest row. The proof route quotes the
  published trigonometric–hyperbolic dictionary, explicitly bridges the complex
  and real exponentials through
  `thm-complex-exponential-addition-and-real-extension`, and then uses the
  published real exponential limits. A matching proof contract with all eight
  boundary axes was added.
- **B1 — applied.** Added
  `ex-exponential-over-z-unit-circle-integral-by-series` to the contour B page,
  with independent Ahlfors Chapter 4 §1.3 and Howell–Mathews §6.2 harvest rows.
  Its dependency list exercises
  `thm-uniform-limit-interchanges-complex-line-integrals` directly and uses no
  dependency on page 305. A matching proof contract was added.
- **A2 — applied.** Added the B-page false statement
  `fs-complex-sine-and-cosine-are-bounded` and the boundary-comparison example
  `ex-harmonic-complex-power-series-on-the-unit-circle`, with canonical-coverage
  rows and proof contracts for both. The exact worked computation
  $\sin(iy)=i\sinh y$ already exists as published item
  `ex-complex-sine-is-unbounded-on-the-imaginary-axis`; it was opened on disk and
  recorded `already-published`. Because it is a B-page leaf, the new scaffold
  neither cites it nor duplicates it.
- **B2 — applied.** Opened
  `cex-graph-of-x-sin-one-over-x-is-not-rectifiable` and recorded it
  `already-published`, with an explicit note that its examples-page home makes
  it an uncitable B leaf. No duplicate construction was minted.
- **A3 — applied.** Opened
  `cex-smooth-function-not-equal-to-its-maclaurin-series` and added the missing
  `already-published` coverage disposition. Its note records both its B-leaf
  status and its home outside page 305's closure.
- **A4 — applied.** Annotated the existing `already-published` rows for
  `ex-complex-geometric-power-series` and
  `fs-real-differentiability-implies-complex-differentiability`: both are
  coverage records only and neither licenses a dependency on a B-page item.
- **B3 — already correct at scaffold time; step-5 watch recorded.** The report
  expressly requests no scaffold edit. At authoring, each of the four direct
  dependencies from `line-integrals-and-the-gradient-theorem` must occur in a
  numbered proof step or be removed from `deps`; a comparison-only mention will
  not count as use.

### Provenance for the four new items

| Item | statement | proof | Rationale and Step-5 obligation |
|---|---|---|---|
| `thm-complex-sine-and-cosine-are-unbounded` | `literature-derived` | `ai-altered` | Stein–Shakarchi Chapter 1 §2.3 carries the complex trigonometric formulas and imaginary-axis growth; the statement is the standard sourced result. The local proof is adapted to the library's published dictionary, real-extension theorem, and exponential-limit theorem. |
| `ex-harmonic-complex-power-series-on-the-unit-circle` | `ai-generated` | `ai-generated` | This exact unit-circle construction was formulated locally from the design's requested three-series comparison. It is an examples-page leaf with a checkable witness and may never be a dependency target. Step 5 must add `generation.role: example`, verify the $z=1$ and $z\ne1$ cases independently, and retain the explicit exclusion of division by zero. |
| `fs-complex-sine-and-cosine-are-bounded` | `ai-altered` | `ai-altered` | The misconception is materially reformulated from the sourced contrast between bounded real restrictions and Stein–Shakarchi's imaginary-axis growth; its refutation is adapted to the new A-page theorem. It is a B-page leaf and is not a dependency target. |
| `ex-exponential-over-z-unit-circle-integral-by-series` | `literature-derived` | `ai-altered` | The exact computation is carried independently by Ahlfors Chapter 4 §1.3 and Howell–Mathews §6.2. The local derivation is adapted to the scaffold's finite-linearity, uniform-limit-interchange, and integer-monomial circle theorems. |

### Step-3 report

- Page sizes are now **29 / 11 / 21 / 12**, in orders 305–308 respectively,
  for **73 total items**. The A pages remain well below the 60-item split trigger;
  **no split is proposed**.
- The harvest now contains **97 rows**: 61 `included`, 11 `inline`, and 25
  `already-published`. Thus 72 rows route into scaffolded items or their inline
  proofs, 25 are discharged by exact published items, and **0 are deferred or
  out of scope**. There are no declines to challenge. The three new
  `already-published` records most likely to receive scrutiny are the worked
  complex-sine example, the smooth nonanalytic real function, and the
  non-rectifiable graph; all three were checked on disk and are deliberately
  uncited B leaves.
- Proof-contract scope is **65 items**, with 65 matching contracts and exactly
  eight anchored boundary dispositions per contract.

Every new direct published dependency was opened at its actual item file and
its exact Statement or Definition checked. **S** below means the clause also
matches the harvested/source-backed complex-analysis treatment; **K** means its
exact hypotheses and conclusion were independently confirmed as the standard
result. The routes are:

- **S:** `thm-complex-trigonometric-hyperbolic-dictionary`;
  `def-complex-trigonometric-and-hyperbolic-functions`;
  `thm-complex-exponential-addition-and-real-extension`;
  `def-complex-exponential`;
  `lem-complex-exponential-series-converges-everywhere`.
- **K:** `thm-exponential-limits-and-range`;
  `thm-p-series-real-exponents`; `cor-archimedean-reciprocal`;
  `lem-complex-conjugation-and-modulus-laws`.

The five coverage-only published items opened in this pass were
`ex-complex-sine-is-unbounded-on-the-imaginary-axis`,
`cex-smooth-function-not-equal-to-its-maclaurin-series`,
`ex-complex-geometric-power-series`,
`fs-real-differentiability-implies-complex-differentiability`, and
`cex-graph-of-x-sin-one-over-x-is-not-rectifiable`. Their exact constructions
were confirmed from disk; their B-page homes are the reason none appears in a
new dependency list.

The only new convention issue found was the possible ambiguity between the
real and complex exponentials in A1. It is resolved explicitly by the added
real-extension dependency rather than by treating the shared notation as an
unstated identification. Ahlfors and Howell–Mathews use piecewise-smooth circle
parametrisations for B1; that creates no conflict because this explicit unit
circle is also a rectifiable contour under the scaffold's broader convention.

No published dependency was found false, and no operation inside the authorised
batch scope was blocked. The pre-existing splice prerequisite remains outside
this Beta's write authority: `research/plan-spec.json` still lacks the proposed
backward edge
`contour-integration -> line-integrals-and-the-gradient-theorem`, although the
batch manifest already records it. The authoritative plan gate is currently
green because frontier-14 item lists have not yet been spliced; the orchestrator
must settle that edge before step 4.

Required gates after these edits:

- `coverage-checklist.mjs`: **2 pages, 97 harvested results, 0 errors, 0 warnings**.
- `content-policy.mjs --manifest-only`: **73 scoped items, 0 errors, 0 warnings**.
- `validate-plan.mjs research/plan-spec.json`: **OK** — declared order acyclic
  and consistent, with no item-level cycles, forward references, B-page
  dependencies, or unresolved ids among pages whose items are present.
- `boundary-audit.mjs`: **520 rows**, no template-reuse cluster and no
  contradicted disposition; contradiction detectors correctly skipped the 65
  items that are not authored yet.
- The four new ids have no collision in published items, `plan-spec.json`, or
  batches 2–6; the batch has no internal duplicate id and no dependency edge to
  one of its B-page items. `git diff --check` is clean.

Only the four authorised batch-1 artifacts were changed. `tools/gates.mjs` was
not run, as instructed.

## Continuity checkpoint — Step 5 authoring in progress

All four batch page files and all 73 spliced item files have been drafted with
`status: draft`, `origin: session`, the scaffolded immutable ids, and separate
statement/proof provenance. The two A-page summaries use the exact prose
recorded in this batch's `Exact page-summary replacements` section; the two
B-page bodies are empty after frontmatter. No `verification.audited` field has
been introduced.

The remaining work is mechanical and corrective verification: reflow the proof
items, run targeted precheck and adopt any printed canonical stratification,
regenerate the 65 proof-contract entries from the final proofs, run strict
contract/citation/boundary checks, run every requested batch gate, fix all
in-scope failures, and replace this in-progress record with the required
`## Step-5 authoring` report and verbatim gate output. No claim has yet been
narrowed or dropped, and no blocker has been found.

## Step-5 authoring

This section supersedes the in-progress continuity checkpoint above. All **73**
spliced items were authored under their immutable ids, with `status: draft`,
`origin: session`, and no `verification.audited` field. The four page files were
also authored: the two A pages carry the exact approved two-paragraph summaries,
and each B page has zero body bytes after frontmatter.

### Items authored

#### `complex-power-series-and-analytic-functions` (29)

`def-complex-analytic-function`,
`def-uniform-convergence-of-complex-valued-functions`,
`thm-uniform-cauchy-criterion-complex-functions`,
`thm-uniform-limit-continuous-complex-functions`,
`thm-weierstrass-m-test-for-complex-function-series`,
`thm-complex-power-series-converge-locally-uniformly`,
`lem-derived-complex-power-series-has-the-same-radius`,
`thm-termwise-differentiation-of-complex-power-series`,
`cor-complex-power-series-sums-have-derivatives-of-all-orders`,
`cor-complex-power-series-coefficient-formula`,
`cor-uniqueness-of-complex-power-series-coefficients`,
`thm-complex-analytic-functions-are-holomorphic`,
`lem-complex-power-series-reexpansion-double-series`,
`thm-complex-power-series-reexpansion-at-an-interior-point`,
`cor-complex-power-series-sums-are-analytic`,
`prop-sums-and-scalar-multiples-of-complex-power-series`,
`prop-cauchy-products-of-complex-power-series`,
`lem-local-composition-of-complex-power-series`,
`lem-local-reciprocal-of-complex-power-series`,
`thm-complex-analytic-functions-closed-under-algebra-quotients-and-composition`,
`cor-complex-analytic-functions-have-local-primitives`,
`thm-complex-trigonometric-and-hyperbolic-power-series`,
`cor-complex-trigonometric-and-hyperbolic-derivatives`,
`cor-complex-trigonometric-and-hyperbolic-addition-formulas`,
`thm-complex-sine-and-cosine-are-unbounded`,
`thm-complex-sine-and-cosine-zero-sets`,
`def-stolz-approach-region-at-one`,
`lem-abel-summation-for-complex-series`, and
`thm-abel-limit-theorem-for-complex-series-in-stolz-regions`.

#### `complex-power-series-and-analytic-functions-examples` (11)

`ex-geometric-series-reexpanded-about-an-arbitrary-complex-point`,
`ex-alternating-harmonic-power-series-at-the-boundary`,
`ex-harmonic-complex-power-series-on-the-unit-circle`,
`ex-square-summable-coefficient-power-series-on-the-closed-disc`,
`cex-complex-power-series-not-uniform-on-its-open-disc`,
`cex-radius-does-not-determine-boundary-convergence-of-a-complex-power-series`,
`ex-lacunary-factorial-exponent-power-series`,
`ex-real-rational-function-with-finite-taylor-radius`,
`ex-abel-limit-along-a-nonradial-stolz-approach`,
`fs-convergence-at-one-noncentral-point-forces-entire-convergence`, and
`fs-complex-sine-and-cosine-are-bounded`.

#### `contour-integration` (21)

`rem-complex-contours-as-planar-rectifiable-paths`,
`def-complex-contours-reversal-concatenation-and-closedness`,
`def-complex-line-integral-over-a-rectifiable-path`,
`def-absolute-line-integral-over-a-rectifiable-path`,
`thm-existence-of-complex-line-integrals-on-rectifiable-paths`,
`thm-riemann-stieltjes-and-parametric-contour-integrals-agree`,
`prop-linearity-of-complex-line-integrals`,
`prop-reversal-and-concatenation-of-complex-line-integrals`,
`thm-invariance-of-complex-line-integrals-under-increasing-reparametrization`,
`thm-fundamental-inequality-for-complex-line-integrals`,
`cor-ml-estimate-for-complex-line-integrals`,
`cor-absolute-integral-of-one-is-path-length`, `def-complex-primitive`,
`thm-fundamental-theorem-for-complex-line-integrals`,
`cor-closed-contour-integral-of-a-derivative-is-zero`,
`cor-contour-integral-of-a-constant-is-an-endpoint-increment`,
`thm-path-independence-and-complex-primitive-criterion`,
`thm-uniform-limit-interchanges-complex-line-integrals`,
`thm-circle-integrals-of-integer-monomials`,
`cor-normalized-circle-integral-about-its-centre-is-one`, and
`fs-every-continuous-complex-function-on-a-domain-has-a-primitive`.

#### `contour-integration-examples` (12)

`ex-exponential-contour-integral-by-riemann-sum-and-parametrization`,
`ex-polynomial-contour-integral-along-a-line-segment`,
`ex-contour-integral-of-conjugation-depends-on-the-path`,
`ex-ml-estimate-on-a-semicircle`,
`ex-circle-integral-of-one-over-z-minus-a`,
`ex-exponential-over-z-unit-circle-integral-by-series`,
`ex-keyhole-contour-assembly-without-cauchys-theorem`,
`ex-riemann-stieltjes-integral-on-a-polygonal-contour`,
`cex-reversing-orientation-preserves-a-contour-integral`,
`fs-absolute-value-passes-through-a-contour-integral`,
`fs-contour-length-is-the-length-of-its-trace`, and
`fs-parametrization-independence-includes-orientation-reversal`.

### Provenance and obligation rationale

The per-item table under **Per-item expected component provenance** above is the
component-by-component ledger; the authored frontmatter totals are:

- statements: 40 `literature-derived`, 25 `ai-altered`, and 8
  `ai-generated`;
- proofs/constructions: 53 `ai-altered`, 12 `ai-generated`, and 8
  `not-applicable` definitions/remarks.

`literature-derived` is used where the mathematical proposition is directly
harvested from the cited complex-analysis or published-library source.
`ai-altered` records adaptation to this library's notation, zero-based series,
rectifiable-path Riemann–Stieltjes generality, or a deliberately false claim
whose exact correction is source-backed. `ai-generated` is confined to eight
explicit, independently checked B-page examples/counterexamples. None of those
eight is a dependency target in this batch, so no generated Statement or
Construction is load-bearing.

Four initially generated false-statement tags were corrected after their real
source propositions were opened:
`fs-convergence-at-one-noncentral-point-forces-entire-convergence`,
`fs-absolute-value-passes-through-a-contour-integral`,
`fs-contour-length-is-the-length-of-its-trace`, and
`fs-parametrization-independence-includes-orientation-reversal` now have
`provenance.statement: ai-altered`, harvested references, and synchronized
proof-contract citations. Their dependency and coverage routes remain the
source routes that actually refute them.

All 65 proof-bearing items have multi-step input maps. The final contract has
202 load-bearing citation records and 520 separately considered boundary rows.
Every checked boundary row quotes its current exact proof step; the empty,
zero, one, degenerate, endpoint, nonempty-choice, and both iff axes were each
disposed of on the actual item rather than by a shared template. Every item
dependency is both present in the spliced manifest and linked in its authored
body. A separate title-versus-Statement-versus-proof pass found no overclaiming
title.

### Claim changes

No claim was dropped. One claim was narrowed/clarified:
`lem-local-composition-of-complex-power-series` now requires the outer series
to converge on `|w|<R` for an explicit `R>0`; its proof chooses an absolute
coefficient majorant before composition instead of inferring the needed bound
from continuity alone. Its item dependencies, manifest dependencies,
proof-contract input map, and provenance rationale were changed with the
Statement. The harvested coverage entry is page/source-level rather than
item-specific, so its already assigned supplementary-notes route remains the
correct row and required no textual change.

The false-statement wordings listed above were corrected, not weakened. Other
substantive authoring repairs closed proof obligations without changing the
claim: reciprocal-series coefficient uniqueness, Cauchy-product local uniform
convergence, the rectifiable-contour primitive theorem, zero/constant contour
cases, circle normalization, and unit-interval keyhole parametrizations.

The splice receipt omitted the promised `summary_corrections` map. This did not
block authoring because the exact binding replacements were already preserved
verbatim in **Exact page-summary replacements** above and were the same prose
reviewed by Alpha. Those exact paragraphs were used; no B summary was restored.

### Gate output

Batch-targeted precheck after adopting every printed canonical repair:

```text
65 checked, 0 failing — all clean
```

Plan validation:

```text
OK — declared page order is acyclic and consistent; no item-level cycles, forward
references, B-page dependencies, or unresolved ids among the 282 page(s) with item lists.
NOTE: 889 planned page(s) carry no item list yet (marked * above). Their reading
order is guaranteed; their item dependencies are not yet asserted, so re-run this
after writing each page's items.
```

Batch content and coverage:

```text
content-policy: 73 scoped item(s), 0 error(s), 0 warning(s)
coverage-checklist: 2 page(s), 97 harvested result(s), 0 error(s), 0 warning(s)
```

Batch render and prose checks over all 73 items plus four pages:

```text
OK — 77 file(s): no wikilink inside math, no nested or unbalanced
delimiters, no multiline display block, every math span parses under the real
KaTeX, and every frontmatter block parses under the renderer's
YAML parser.

77 file(s) checked. 0 error(s), 0 warning(s).

OK — no positional claim contradicts the spec.
```

Proof contract, boundary audit, and citation fidelity:

```text
proof-contract: 0 error(s), 0 warning(s), 65/65 item(s) checked

boundary-audit: 520 rows over 1 contract file(s); 263 marked not_applicable

TEMPLATE REUSE — none at or above 3 members.

CONTRADICTED DISPOSITIONS — none found by the three detectors.

Every line above is a candidate for a human read, not a verdict.

citation-fidelity: 202 citation(s) over 65 authored item(s)

QUOTE NOT FOUND — none; every recorded quote appears in its cited item.

WIDENING CANDIDATES — none found by the three detectors.

Every line above is a candidate for a human read, not a verdict.
```

The targeted citation heuristic emitted two warnings because it tokenized the
words `symmetric` and `antisymmetric` in the definitions of complex
trigonometric functions as order axioms. Both are case (c): no order-theoretic
move is made, so no dependency was added merely to silence them. Its exact
summary was:

```text
citecheck: 73 item(s) scanned

2 warning(s). HEURISTIC: triage each one, do not just count them.
```

Repository-wide dependency, forward-reference, extension, rendering, and prose
checks all exited zero. Their exact final output was:

```text
OK — no cycles, all references resolve, no draft items on published pages.

OK — every forward reference is declared, points strictly forward, is closed by a planned later page, stays off the spine unless orientation only, and introduces no cycle.

OK — every recorded-not-proved statement is a cited remark with no proof, and every consequence is marked.

OK — 5250 file(s): no wikilink inside math, no nested or unbalanced
delimiters, no multiline display block, every math span parses under the real
KaTeX, and every frontmatter block parses under the renderer's
YAML parser.

5250 file(s) checked. 0 error(s), 569 warning(s).
  library-scope-denial: 206
  count-in-prose: 189
  count-of-this-page: 174

(re-run with --warnings to list them; warnings are heuristic and have legitimate cases)

OK — no positional claim contradicts the spec.
```

`git diff --check` exited zero with no output. `tools/gates.mjs` was not run.

The required bare repository-wide precheck was rerun after the other active
batches finished their repairs. Its exact final summary is:

```text
3919 checked, 0 failing — all clean
```

### Blocker

None. No batch-1 mathematical, provenance, coverage, rendering, schema, or
repository-wide gate blocker remains. Nothing was audited, judged, published,
or committed.
