# frontier-16 batch 7 — Step-2 scaffold report

## State and scope

- Role: Beta-7, scaffolding `analyticity-liouville-and-morera` and its companion at orders 311 and 312.
- Design/spec drift: adjudicated at Step 0 while this scaffold was in flight. The design says CA-4 and CA-2; the current `research/plan-spec.json` retains those published pages and adds the legal backward prerequisite `function-space-topologies` for the compact-convergence dictionary. The batch manifest follows the current spec. The transient edge to the unbuilt order-139 FTA page was removed. After Step-3 finding B7-1, this page instead proves the same FTA statement by a distinct Liouville route and keeps the already-published minimum-modulus theorem only in a separate agreement remark.
- Owned artifacts: `research/frontier-16-batch-7.pages.json`, `research/frontier-16-batch-7.notes.md`, `research/frontier-16-batch-7.proof-contracts.json`, and the canonically required `research/frontier-16-batch-7.coverage.json`.
- The A page has 22 items and the B page has 8 items. Neither approaches the 60-item ceiling, so no split is proposed.
- There is no external fallback, no `proved_here: false` item, no forward reference, and no cross-batch dependency.

## Findings for Step-3 Alpha, ordered by severity

### F1 — approve the planar real-analytic definition

**Problem.** The design requires the corollary “holomorphic functions are real analytic and smooth” and the false statement that a smooth function of two real variables is analytic. The published `def-real-analytic-function` is expressly one-dimensional, on an open subset of the real line. Without a planar definition, both proposed items use an undefined term.

**Recommendation.** Approve `def-real-analytic-map-on-the-plane`, the source-backed Taylor-series definition for smooth maps between open subsets of the coordinate plane. It is deliberately planar rather than an unnecessary general theory of power series on arbitrary finite-dimensional spaces.

**If declined.** `cor-holomorphic-functions-are-real-analytic-and-smooth` and `fs-every-smooth-map-of-the-plane-is-real-analytic` must both be removed or materially weakened; leaving either unchanged would be a schema-level mathematical defect.

### F2 — approve the corrected endpoint convention for the (t^z) example

**Problem.** The prose says Morera proves holomorphy of \(\int_0^1t^z\,dt\), but the finite-interval parameter theorem requires an integrand defined and jointly continuous at (t=0). Principal complex powers are defined only for nonzero bases. Treating the integral as improper would use a different theorem.

**Recommendation.** Approve `ex-holomorphy-of-integral-of-t-to-z` on the half-plane `Re z>1`, defining the endpoint value (0^z:=0) only inside this example. Then |(t^z)|=(t^{\operatorname{Re}z}le t) on (0le tle1), so joint continuity at the endpoint is elementary and the authored item genuinely uses the finite Riemann parameter theorem.

**If declined.** The example either invokes an unavailable improper-parameter theorem or silently applies a definition at the zero base where it is not defined.

### F3 — approve the concentric-subdisc Cauchy estimate as a decomposition lemma

**Problem.** The design's derivative-convergence half of Weierstrass needs a bound uniform over a smaller disc, not only the published centre estimate `cor-cauchy-inequalities`. Citing that centre-only result would not license uniform convergence of derivatives.

**Recommendation.** Approve `lem-cauchy-estimates-on-concentric-subdiscs`, with the exact bound

\[
|f^{(n)}(z)|\le \frac{n!RM}{(R-r)^{n+1}}
\qquad (|z-a|\le r<R).
\]

It is harvested directly from Weber Theorem 2.4.2 and is also the standard estimate used in Stein–Shakarchi Theorem 5.3.

**If declined.** `thm-weierstrass-convergence-holomorphic-functions` must lose the locally uniform convergence of derivatives, contradicting the design and the harvested sources.

### F4 — approve the exact distance-to-complement Taylor domain

**Problem.** A weaker “some neighbourhood” Taylor theorem would fail the design's explicit sharp-domain decision and would weaken the zero and identity machinery that consumes it.

**Recommendation.** Keep `thm-taylor-expansion-holomorphic-function` on the entire largest open disc centred at (a) and contained in the given domain. Define its radius as (d(a,\mathbb C\setminus\Omega)) when the complement is nonempty and as (+\infty) when Ω is the whole plane. Do not claim that this is always the exact convergence radius of the formal Taylor series beyond Ω.

**If declined.** The next pair receives a needlessly weak local expansion and cannot quote the promised boundary-distance form.

### F5 — approve the source-locator correction

**Problem.** The design lists Ahlfors Chapter 5 §§1.1–1.3 as the Ahlfors source for the whole pair, but Ahlfors places Morera, Liouville, the fundamental theorem of algebra, and Cauchy's estimates in Chapter 4 §2.3. Chapter 5 supplies Weierstrass convergence, Taylor series, Hurwitz, and Laurent series.

**Recommendation.** Amend the source paragraph to name both exact Ahlfors ranges. Keep Laurent material deferred to `isolated-singularities-and-laurent-series`, and Hurwitz deferred to `normal-families-and-montels-theorem`.

**If declined.** The prose scaffold attributes core results to a range that does not contain them, and the coverage ledger and design would disagree.

### F6 — approve the local-uniform/compact-convergence dictionary item

**Problem.** The library already defines compact convergence on maps between metric spaces. Minting a second locally uniform convergence definition would create two notions without an agreement seam.

**Recommendation.** Keep `rem-locally-uniform-convergence-dictionary`: on an open subset of the complex plane, uniform convergence on each compact subset is equivalent to every point having a neighbourhood on which convergence is uniform. The two directions use a compactly contained closed disc and a finite subcover, respectively.

**If declined.** Weierstrass would either silently switch conventions or duplicate the published topology.

### F7 — decline new items duplicating the already-published elementary expansions

**Problem.** The prose B inventory asks again for the exact expansions of $e^z$, $\sin z$, and $1/(1-z)$. They already exist as `def-complex-exponential`, `thm-complex-trigonometric-and-hyperbolic-power-series`, and `ex-complex-geometric-power-series` with their radii.

**Recommendation.** Do not mint duplicate B-page items. The Taylor coefficient agreement remark links the published series formulas to the new Cauchy/Taylor formula. Retain the genuinely new worked zero-order example `ex-sine-minus-z-zero-of-order-three`.

**If declined.** Immutable ids would be minted for statements already present under other ids, violating the reuse rule.

### F8 — approve Morera's continuity counterexample

**Problem.** Morera's continuity hypothesis is a real boundary condition, and the main theorem otherwise invites the false reading that zero triangle integrals alone suffice.

**Recommendation.** Add the narrow source-backed definition `def-edgewise-riemann-integral-around-complex-triangle`, because the published contour integral is defined only for continuous integrands. It defines the sum of the three parametric Riemann edge integrals whenever those pullbacks are integrable and records agreement with the published contour integral in the continuous case. Then add `cex-morera-without-continuity`, using the function equal to one at the origin and zero elsewhere. A nonconstant affine edge hits the origin at most once, while a constant edge has zero velocity, so every edgewise integral is zero even for degenerate triangles.

**If declined.** The page loses the cheapest source-backed witness for an essential hypothesis.

### F9 — mechanical full-text stamping is blocked in this sandbox

**Problem.** `node tools/source-fetch-check.mjs --coverage research/frontier-16-batch-7.coverage.json --stamp` was run twice after the final source list was assembled. The shell runtime returned `EAI_AGAIN` before an HTTP request for Weber, Shabat, Taylor, and Krantz. The browser research channel opened and read every one of those full PDFs, but that does not create the mechanical byte/hash stamp the gate requires.

**Recommendation.** Treat this as an engine-side retry obligation, not as permission work. The exact Ahlfors and Stein URLs already carried mechanically created stamps in `frontier-15-batch-6.coverage.json`; those existing exact-URL stamps were reused, not invented. The final command reports `2/6 source(s) fetch-verified, 4 FAILED`.

**If declined.** Step 2 remains mechanically red despite a structurally complete and manually harvested source ledger. No claim is made that the fetch gate passed.

## Applyable prose-scaffold amendments

### Amendment 1 — source paragraph

- File: `research/plan-complex-analysis-track.md`
- Section: `## CA-5. Analyticity of Holomorphic Functions; Liouville and Morera`
- Exact old text:

~~~text
Pair sources (exact harvested locators): Ahlfors Ch. 5 §§1.1--1.3
(“Weierstrass's Theorem,” “Taylor Series,” “Laurent Series”);
Stein--Shakarchi Ch. 2, “Applications” (“Morera,” “Sequences of holomorphic
functions,” “Holomorphic functions defined by integrals”); Weber Ch. 2
§§2.1--2.4 (“Cauchy Integral Formula” through “Sequences of Holomorphic
Functions”).
~~~

- Exact new text:

~~~text
Pair sources (exact harvested locators): Ahlfors Ch. 4 §2.3 and Ch. 5
§§1.1--1.3 (higher derivatives, Morera, Liouville, Cauchy's estimate;
“Weierstrass's Theorem,” “Taylor Series,” “Laurent Series”);
Stein--Shakarchi Ch. 2 §§4--5.3, printed pp. 45--57 (“Cauchy's integral
formulas” through “Holomorphic functions defined in terms of integrals”);
Matthias Weber Ch. 2 §§2.1--2.4, printed pp. 16--22 (“Cauchy's Integral
Formula” through “Convergence of Sequences of Holomorphic Functions”);
B. V. Shabat Ch. 2, printed pp. 69--72 (Morera, the Riemann--Cauchy--
Weierstrass equivalence, boundary power-series examples, and zero order);
Michael Taylor Ch. 2 §2.2, Exercise 4 and its following remark (the
multivariable real-analytic convention); and Krantz Ch. 3 §§3.1.3--3.1.6,
printed pp. 40--43 (Liouville, polynomial growth, convergence and Taylor
representation).
~~~

### Amendment 2 — proposed A-page inventory

- File: `research/plan-complex-analysis-track.md`
- Section: the table introduced by `Proposed A-page inventory (dependency order; 18 items):`
- Exact old text begins with that heading and ends with the row for `cor-nonconstant-entire-function-has-dense-image`.
- Exact replacement:

~~~markdown
Proposed A-page inventory (dependency order; 22 items):

| id | kind | one-line statement |
|---|---|---|
| `rem-locally-uniform-convergence-dictionary` | rem | Locally uniform convergence on an open subset of the complex plane is exactly compact convergence. |
| `def-real-analytic-map-on-the-plane` | def | Define planar real analyticity by equality with the total-degree Taylor series of each smooth coordinate function. |
| `def-taylor-series-holomorphic-function` | def | Define the Taylor series at (a) from the complex derivatives and the CA-2 coefficient convention. |
| `def-order-of-zero-holomorphic-function` | def | Define the least nonzero Taylor coefficient index, with (+\infty) reserved for the zero germ. |
| `thm-taylor-expansion-holomorphic-function` | thm | A holomorphic function equals its Taylor series on the largest centred disc contained in its domain, with the whole-plane convention. |
| `thm-holomorphic-if-and-only-if-analytic` | thm | Holomorphy and local convergent-power-series representability are equivalent. |
| `cor-holomorphic-functions-are-real-analytic-and-smooth` | cor | Every holomorphic function is real analytic and smooth in its two real coordinates. |
| `rem-taylor-coefficient-formula-agreement` | rem | Record agreement between the CA-2 derivative coefficient formula and the Cauchy-integral coefficient formula. |
| `thm-zero-order-factorization-holomorphic-function` | thm | Finite zero order (m) is equivalent to (f(z)=(z-a)^m g(z)) locally with (g(a)\ne0); infinite order is the zero germ. |
| `cor-cauchy-estimates-taylor-coefficients` | cor | Cauchy's inequalities bound every Taylor coefficient by the circle supremum. |
| `thm-liouville-bounded-entire-function` | thm | Every bounded entire function is constant. |
| `thm-entire-polynomial-growth-is-polynomial` | thm | If |(f(z))|(le C(1+|z|)^N) for real (C,N\ge0), then (f) is a polynomial of degree at most (lfloor N\rfloor). |
| `thm-fundamental-theorem-of-algebra-liouville-proof` | thm | Every nonconstant complex polynomial has a complex root, proved by bounding its zero-free reciprocal and applying Liouville's theorem. |
| `rem-fundamental-theorem-of-algebra-via-liouville` | rem | Record agreement between the new Liouville proof and the published minimum-modulus proof. |
| `def-edgewise-riemann-integral-around-complex-triangle` | def | Extend triangle-boundary notation to functions whose three affine edge pullbacks are Riemann integrable, agreeing with the published contour integral for continuous integrands. |
| `thm-morera-triangle-theorem` | thm | A continuous function is holomorphic exactly when every contained triangle-boundary integral vanishes. |
| `lem-cauchy-estimates-on-concentric-subdiscs` | lem | Bound derivatives uniformly on a smaller concentric disc by values on the larger circle. |
| `thm-weierstrass-convergence-holomorphic-functions` | thm | A locally uniform limit of holomorphic functions is holomorphic and every derivative order converges locally uniformly. |
| `cor-locally-uniformly-convergent-holomorphic-series` | cor | A locally uniformly convergent holomorphic series may be differentiated term by term. |
| `thm-holomorphic-parameter-riemann-integral` | thm | A jointly continuous finite-interval integral of holomorphic parameter slices is holomorphic; differentiation under it carries the stated stronger derivative hypothesis. |
| `cor-holomorphic-mean-value-property` | cor | A holomorphic function equals every compactly contained circular average. |
| `cor-nonconstant-entire-function-has-dense-image` | cor | A nonconstant entire function has dense image, since omission of a positive-radius disc would make a reciprocal bounded. |
~~~

### Amendment 3 — definitions sentence

- File: `research/plan-complex-analysis-track.md`
- Exact old text:

~~~text
DEFS: the **Taylor series** of a holomorphic function at a point; the **order**
of a zero (#7); **locally uniform convergence** on an open set.
~~~

- Exact new text:

~~~text
DEFS: the **Taylor series** of a holomorphic function at a point; the **order**
of a zero (#7); and **real-analytic maps on the coordinate plane**. Locally
uniform convergence is not redefined: record its agreement with the published
topology of compact convergence.
~~~

### Amendment 4 — companion inventory

- File: `research/plan-complex-analysis-track.md`
- Exact old text:

~~~text
B: $e^z$, $\sin z$, $1/(1-z)$ expanded with exact radii; Liouville applied to
show a nonconstant entire function has dense image (a cheap precursor to CA-23);
Morera used to prove holomorphy of $\int_0^1 t^{z}\,dt$; the FTA proof written
out.
CEX: $\sum z^n/n^2$ converges uniformly on $\overline{\mathbb{D}}$ and its sum
is not holomorphic on any larger disc; $z^n\to0$ locally uniformly on
$\mathbb D$ but not uniformly on the closed disc, showing why every convergence
statement names its compact subsets and domain.
~~~

- Exact new text:

~~~text
B: the third-order zero of $\sin z-z$; Morera used to prove holomorphy of
$z\mapsto\int_0^1t^z\,dt$ on $\operatorname{Re}z>1$, with $0^z=0$ justified
as a continuous endpoint value; the Liouville proof of the fundamental theorem
of algebra is a distinct theorem on the A page, followed by an agreement remark
linking it to the published minimum-modulus proof.
The already-published exact expansions of $e^z$, $\sin z$, and $1/(1-z)$ are
linked through the Taylor-coefficient agreement remark rather than duplicated.
CEX: $\sum_{n\ge1} z^n/n^2$ converges uniformly on the closed unit disc and has
no holomorphic extension to any larger centred disc; $z^n\to0$ locally uniformly
on the open unit disc but not uniformly on the closed disc; and Morera's theorem
fails without continuity, witnessed by the function supported only at the origin.
~~~

### Amendment 5 — traps

- File: `research/plan-complex-analysis-track.md`
- Section: append after trap (iv), before `Forward references: NONE load-bearing.`
- Exact old text at insertion point:

~~~text
(iv) `rem-open-mapping-theorem` (‡, functional analysis) is a different theorem;
the disambiguation belongs on CA-6, but the judge may flag it here.

Forward references: NONE load-bearing.
~~~

- Exact new text:

~~~text
(iv) `rem-open-mapping-theorem` (‡, functional analysis) is a different theorem;
the disambiguation belongs on CA-6, but the judge may flag it here. (v) The
finite-interval parameter theorem does not apply to $t^z$ at $t=0$ until an
endpoint value is defined and proved jointly continuous; restricting to
$\operatorname{Re}z>1$ makes the bound $|t^z|\le t$ available. (vi) “Real
analytic” for a map of two real variables is not the published one-variable
definition; build the planar Taylor-series definition before using the phrase.

Forward references: NONE load-bearing.
~~~

## Exact A-page summary for Step 5

Cauchy's circle formula and its higher-derivative form recover a holomorphic function from values on a compactly contained circle. Complex power-series sums are already known to be holomorphic, with unique derivative coefficients, while Goursat's theorem supplies zero integrals around contained triangles. Compact convergence provides the precise meaning of local uniform convergence used for sequences and series of holomorphic functions.

Expanding the Cauchy kernel proves that holomorphic and analytic functions are the same and identifies zero order with local factorization. Cauchy's estimates then yield Liouville's theorem, polynomial rigidity under algebraic growth, and the analytic proof of the fundamental theorem of algebra. Morera gives the converse triangle criterion; concentric-disc estimates give Weierstrass convergence with derivative convergence. Finite parameter integrals remain holomorphic, holomorphic functions satisfy the circular mean-value property, and every nonconstant entire function has dense image.

The companion page has no authored summary body.

## Planned component provenance and source rationale

URL keys used below:

- A — Ahlfors: <https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf>
- S — Stein–Shakarchi: <https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf>
- W — Weber: <https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download>
- Sh — Shabat: <https://math.stanford.edu/~ryzhik/shabat-all.pdf>
- T — Taylor: <https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf>
- K — Krantz: <https://www.math.wustl.edu/~sk/books/guide.pdf>

Every URL named for a source-backed component must appear verbatim in that item's Step-5 `sources.references`. A and S carry prior exact-URL mechanical fetch stamps; W, Sh, T and K are the four unstamped sources recorded in finding F9.

### A page

| Item | Statement | Proof | Rationale and Step-5 references |
|---|---|---|---|
| `rem-locally-uniform-convergence-dictionary` | `ai-altered` | `not-applicable` | W Definition 2.4.1 and A/S compact-uniform formulations, adapted to prove agreement with the published topology. References W, A, S. |
| `def-real-analytic-map-on-the-plane` | `ai-altered` | `not-applicable` | T Exercise 2.2.4 supplies the Taylor-series definition; the vector-valued planar form is its componentwise adaptation. Reference T. |
| `def-taylor-series-holomorphic-function` | `literature-derived` | `not-applicable` | A §1.2, S Theorem 4.4, W Theorem 2.2.3 and Sh formulas. References A, S, W, Sh. |
| `def-order-of-zero-holomorphic-function` | `literature-derived` | `not-applicable` | Sh Definition 2.30, including first nonzero derivative/Taylor coefficient. Reference Sh. |
| `thm-taylor-expansion-holomorphic-function` | `literature-derived` | `ai-altered` | A Theorem 3, S Theorem 4.4, W Theorem 2.2.3 and K §3.1.6; proof expands the Cauchy kernel with the library's contour conventions. References A, S, W, K. |
| `thm-holomorphic-if-and-only-if-analytic` | `literature-derived` | `ai-altered` | Sh Theorem 2.24 and W's displayed equivalence; reverse direction is already published. References Sh, W. |
| `cor-holomorphic-functions-are-real-analytic-and-smooth` | `ai-altered` | `ai-altered` | T's real-analytic convention plus the sourced Taylor theorem, materially adapted to the coordinate-plane and published (C^k) convention. References T, A, S. |
| `rem-taylor-coefficient-formula-agreement` | `ai-altered` | `not-applicable` | A/ W/ Sh give the contour coefficients, while CA-2 gives derivatives divided by factorials; the remark is an explicit seam. References A, W, Sh. |
| `thm-zero-order-factorization-holomorphic-function` | `literature-derived` | `ai-altered` | Sh Theorems 2.27 and 2.31, with the infinite-order zero-germ boundary made explicit locally. Reference Sh. |
| `cor-cauchy-estimates-taylor-coefficients` | `literature-derived` | `ai-altered` | A Cauchy estimate, S Corollary 4.3, W Corollary 2.2.4 and K §3.1.2. References A, S, W, K. |
| `thm-liouville-bounded-entire-function` | `literature-derived` | `ai-altered` | A §2.3, S Corollary 4.5, W Theorem 2.3.2 and K §3.1.3. References A, S, W, K. |
| `thm-entire-polynomial-growth-is-polynomial` | `ai-altered` | `ai-altered` | K states the integer-exponent theorem; the scaffold faithfully extends it to real (N\ge0) by the floor bound and the same Cauchy-estimate proof. Reference K. |
| `thm-fundamental-theorem-of-algebra-liouville-proof` | `literature-derived` | `ai-altered` | A §2.3, S Corollary 4.6, W Corollary 2.3.3, and K §3.1.4 all state the FTA and prove it by applying Liouville to a zero-free reciprocal. The local proof makes the inside/outside boundedness split explicit and does not depend on the published minimum-modulus FTA theorem. References A, S, W, K. |
| `rem-fundamental-theorem-of-algebra-via-liouville` | `ai-altered` | `not-applicable` | This is the owner-required cross-reference between two source-backed proofs: the new A/S/W/K Liouville route and the published minimum-modulus route. It makes no independent theorem claim. References A, S, W, K. |
| `def-edgewise-riemann-integral-around-complex-triangle` | `ai-altered` | `not-applicable` | The parametric edge formula is the standard contour integral in Sh and in the published parametric-agreement theorem, extended narrowly to Riemann-integrable pullbacks so the continuity counterexample is well-formed. References Sh and the published Howell–Mathews source already carried by the dependency. |
| `thm-morera-triangle-theorem` | `literature-derived` | `ai-altered` | A §2.3, S Theorem 5.1, W Theorem 2.3.4 and Sh Theorem 2.21; local proof uses the published triangle-to-primitive proposition. References A, S, W, Sh. |
| `lem-cauchy-estimates-on-concentric-subdiscs` | `literature-derived` | `ai-altered` | W Theorem 2.4.2 and S Theorem 5.3. References W, S. |
| `thm-weierstrass-convergence-holomorphic-functions` | `literature-derived` | `ai-altered` | A Theorem 1, S Theorems 5.2–5.3, W Theorem 2.4.4 and K §3.1.5. References A, S, W, K. |
| `cor-locally-uniformly-convergent-holomorphic-series` | `literature-derived` | `ai-altered` | A's series form of Weierstrass and S §5.2. References A, S. |
| `thm-holomorphic-parameter-riemann-integral` | `literature-derived` | `ai-altered` | S Theorem 5.4 gives holomorphy; the derivative clause is added only under the stronger jointly continuous derivative hypothesis. Reference S. |
| `cor-holomorphic-mean-value-property` | `literature-derived` | `ai-altered` | W Corollary 2.2.1; local proof reparametrizes the published circle formula. Reference W. |
| `cor-nonconstant-entire-function-has-dense-image` | `ai-generated` | `ai-generated` | Direct non-load-bearing Liouville corollary from the design: omission of a disc makes (1/(f-w)) bounded. `generation.role: direct-corollary`. Truth-risk search found no counterexample; the proof closes in four elementary steps. References A, S for Liouville. |

### B page

| Item | Statement/construction | Verification/refutation | Rationale and Step-5 references |
|---|---|---|---|
| `ex-sine-minus-z-zero-of-order-three` | `literature-derived` | `ai-altered` | Exact Sh Example 2.32; check both series coefficients and derivatives. Reference Sh. |
| `ex-holomorphy-of-integral-of-t-to-z` | `ai-generated` | `ai-generated` | Local endpoint-corrected version of the design example. `generation.role: example`; truth risk is the (t=0) joint-continuity check, discharged by |(t^z)|(le t) on `Re z>1`. Reference S for the parameter theorem. |
| `cex-boundary-convergent-power-series-no-larger-holomorphic-disc` | `literature-derived` | `ai-altered` | Exact Sh Remark 2.25 series and obstruction, with uniform closed-disc convergence made explicit by the M-test. Reference Sh. |
| `cex-powers-locally-uniform-not-uniform-on-closed-disc` | `ai-generated` | `ai-generated` | Direct checkable witness from the design. `generation.role: counterexample`; truth risk is closed by the compact maximum (q<1) and the boundary value at (1). References A/S/W for the convergence convention. |
| `cex-morera-without-continuity` | `literature-derived` | `ai-altered` | Exact Sh Remark 2.22, with degenerate triangle edges checked using the new edgewise Riemann definition because the published contour integral itself requires continuity. Reference Sh. |
| `fs-every-smooth-map-of-the-plane-is-real-analytic` | `ai-altered` | `ai-altered` | Standard smooth-not-analytic flat witness, adapted to T's planar Taylor convention. Reference T. |
| `fs-entire-bounded-on-real-axis-is-constant` | `ai-altered` | `ai-altered` | Source-backed contrast with Liouville using complex sine and its real restriction. References A, S. |
| `fs-every-entire-function-with-antiderivative-is-polynomial` | `ai-altered` | `ai-altered` | Source-backed exponential witness; the no-zero argument and FTA rule out polynomiality. References A, S, K. |

No AI-generated statement or construction is a dependency target. The generated corollary and generated examples/counterexample are leaves. No generated theorem, proposition, definition, lemma, false statement, or remark is planned.

## Proof decomposition, corollary pass, and boundary obligations

Both required passes were performed separately for this A/B pair.

Long-proof decomposition:

- The Taylor theorem retains its geometric-kernel expansion inline because it is one coherent argument, but coefficient agreement and coefficient bounds are separated into `rem-taylor-coefficient-formula-agreement` and `cor-cauchy-estimates-taylor-coefficients`.
- Zero multiplicity is separated into its definition and `thm-zero-order-factorization-holomorphic-function`; the identity theorem is not pulled forward.
- The fundamental theorem of algebra is now a proof-bearing theorem rather than a proof sketch inside a remark. Its Liouville route separates the exterior bound from polynomial growth, the interior bound from compactness and the extreme value theorem, and the final constancy contradiction; the agreement remark is non-load-bearing and keeps the independent minimum-modulus proof visible.
- Weierstrass convergence is decomposed by `lem-cauchy-estimates-on-concentric-subdiscs`, isolating the uniform derivative bound that the published centre inequality does not provide.
- Parameter integrals separate basic holomorphy from differentiation under the integral: the latter is asserted only with the jointly continuous slice derivative and has its own proof steps.
- Morera's discontinuous witness is preceded by `def-edgewise-riemann-integral-around-complex-triangle`; this keeps the counterexample well-formed without pretending the published continuous-integrand contour integral already covers it.
- The flat planar counterexample keeps the one-variable exponential-domination induction inline because no other planned result consumes it and a generated decomposition lemma would be prohibited.

Useful corollaries added or retained by the corollary pass:

- `cor-holomorphic-functions-are-real-analytic-and-smooth` records the real-coordinate regularity consequence.
- `cor-cauchy-estimates-taylor-coefficients` records the coefficient form actually used by Liouville and polynomial growth.
- `cor-locally-uniformly-convergent-holomorphic-series` records termwise differentiation of series.
- `cor-holomorphic-mean-value-property` records the circular average formula.
- `cor-nonconstant-entire-function-has-dense-image` records the direct Liouville consequence and remains a generated non-load-bearing leaf.

The proof-contract artifact covers all 23 proof-bearing items, every planned numbered step, direct fact citations, and all eight standard boundary cases. No registered finite-smoke model applies to these analytic arguments; every `finite_smoke` array is empty, and this is not reported as evidence.

Highest-risk boundaries:

- empty open sets in the holomorphic/analytic equivalence and convergence theorems;
- the whole-plane (+\infty) distance convention in the Taylor theorem;
- (z=a), (n=0), (m=0), and the infinite-order zero germ;
- (C=0), (N=0), and the first vanishing coefficient beyond (lfloor N\rfloor);
- the root-free reciprocal in the Liouville proof of FTA, nonemptiness of the closed disc, and the shared boundary (|z|=R) of the inside and outside estimates;
- degenerate triangles in both Morera directions and in its discontinuous counterexample;
- (r=0) allowed only for the inner subdisc and (r<R) required before division;
- the degenerate parameter interval (a=b), plus the endpoint (t=0) in the (t^z) example;
- compact (K=\varnothing) and the boundary point (z=1) in the convergence counterexamples;
- both directions of the holomorphic/analytic and Morera equivalences.

## Exact same-batch clauses bound by proof contracts

These clauses must occur verbatim in the Step-5 source items:

- `def-real-analytic-map-on-the-plane`: `A smooth map $F=(u,v):U\to\mathbb R^2$ on an open set $U\subseteq\mathbb R^2$ is real analytic when, at every $a\in U$, both components equal their total-degree Taylor series on some neighbourhood of $a$.`
- `def-taylor-series-holomorphic-function`: `The Taylor series of $f$ at $a$ is $\sum_{n\ge0}f^{(n)}(a)(z-a)^n/n!$.`
- `def-order-of-zero-holomorphic-function`: `The order $\operatorname{ord}_a(f)$ is the least natural $n$ for which the $n$th Taylor coefficient is nonzero, and is $+\infty$ when every Taylor coefficient is zero.`
- `def-edgewise-riemann-integral-around-complex-triangle`: `For an ordered complex triangle and a function on its boundary trace, if the pullback along each affine edge multiplied by that edge's constant velocity is Riemann integrable, define the edgewise triangle integral to be the sum of those three complex Riemann integrals.`
- `thm-taylor-expansion-holomorphic-function`: `Every holomorphic function equals its Taylor series throughout the largest centred open disc contained in its domain.`
- `thm-zero-order-factorization-holomorphic-function`: `A holomorphic function has finite order $m$ at $a$ if and only if, on some neighbourhood of $a$, it has the form $f(z)=(z-a)^m g(z)$ with $g$ holomorphic and $g(a)\ne0$.`
- `cor-cauchy-estimates-taylor-coefficients`: `If $|f(\zeta)|\le M$ on $|\zeta-a|=r$, then the $n$th Taylor coefficient $c_n$ satisfies $|c_n|\le M/r^n$.`
- `thm-liouville-bounded-entire-function`: `Every bounded entire function is constant.`
- `thm-fundamental-theorem-of-algebra-liouville-proof`: `Every nonconstant complex polynomial has a complex root.`
- `thm-morera-triangle-theorem`: `A continuous function on an open subset of $\mathbb C$ is holomorphic if and only if its integral around the boundary of every filled triangle contained in the open set is zero.`
- `lem-cauchy-estimates-on-concentric-subdiscs`: `If $0\le r<R$, $M$ bounds $|f|$ on $|\zeta-a|=R$, and $|z-a|\le r$, then $|f^{(n)}(z)|\le n!RM/(R-r)^{n+1}$.`
- `thm-weierstrass-convergence-holomorphic-functions`: `A locally uniform limit of holomorphic functions is holomorphic, and for every natural $k$ the $k$th derivatives converge locally uniformly to the $k$th derivative of the limit.`
- `thm-holomorphic-parameter-riemann-integral`: `If $\varphi:[a,b]\times\Omega\to\mathbb C$ is jointly continuous and $\varphi(t,\cdot)$ is holomorphic for every $t$, then $F(z)=\int_a^b\varphi(t,z)\,dt$ is holomorphic on $\Omega$.`

## Published dependency audit and closure

Every proposed published dependency was opened from disk and its status and primary Statement/Definition were read. All are `status: published`. Every target has `provenance.statement` equal to `literature-derived` or `ai-altered`; there is no AI-generated target and no legacy-unclassified target.

Analysis-specific AI-altered statements were source-checked against the harvested Ahlfors, Stein–Shakarchi, Weber, Shabat, Taylor, or Krantz ranges where applicable. The remaining AI-altered dependencies were established-from-knowledge after exact on-disk inspection: they are the standard complex-plane dictionary, compactness, Euclidean connectedness, real powers and their laws, exponential limits, extreme values, Heine–Borel/Heine–Cantor, Riemann–Fubini with its nondegenerate-rectangle hypothesis, the componentwise complex Riemann integral, and elementary algebra/continuity statements. No exact claim, domain, quantifier, direction, or endpoint convention raised enough doubt to require a dependency repair.

Complete external dependency set:

`cor-cauchy-inequalities`; `cor-complex-differentiability-implies-continuity`; `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`; `cor-complex-power-series-coefficient-formula`; `cor-complex-trigonometric-and-hyperbolic-derivatives`; `cor-exponential-reciprocal-and-positivity`; `cor-ml-estimate-for-complex-line-integrals`; `cor-rn-is-polygonally-connected-and-locally-path-connected`; `cor-trigonometric-parity-and-pythagorean-identity`; `def-ck-and-multi-index-notation-in-several-variables`; `def-complex-analytic-function`; `def-complex-domain`; `def-complex-logarithms-principal-logarithm-and-complex-powers`; `def-complex-metric-convergence-and-continuity`; `def-complex-series-power-series-and-absolute-convergence`; `def-dense-top`; `def-extended-reals`; `def-factorial-and-falling-factorial`; `def-finite-sum`; `def-metric-bounded-diameter`; `def-natural-logarithm`; `def-oriented-complex-triangle-and-boundary`; `def-real-power`; `def-series`; `def-topology-of-compact-convergence`; `def-uniform-convergence-of-complex-valued-functions`; `def-vector-valued-derivative-and-integral`; `def-vector-valued-functions-limits-and-continuity`; `lem-binomial-theorem-over-complex-numbers`; `lem-changing-a-function-at-finitely-many-points`; `lem-compactness-is-intrinsic`; `lem-complex-conjugation-and-modulus-laws`; `lem-complex-polynomial-growth-and-minimum-modulus`; `lem-geometric-sequence-null`; `lem-integer-part`; `prop-triangle-integrals-give-a-primitive-on-a-star-shaped-domain`; `rem-complex-plane-euclidean-dictionary`; `thm-algebra-of-complex-derivatives`; `thm-algebra-of-derivatives`; `thm-cauchy-integral-formula-circle`; `thm-cauchy-integral-formula-higher-derivatives`; `thm-chain-rule`; `thm-circle-circumference-diameter-ratio-is-pi`; `thm-complex-analytic-functions-are-holomorphic`; `thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann`; `thm-complex-exponential-addition-and-real-extension`; `thm-complex-exponential-is-entire-with-derivative-itself`; `thm-complex-numbers-are-the-real-coordinate-plane`; `thm-complex-polynomials-and-rational-functions-are-holomorphic`; `thm-complex-trigonometric-and-hyperbolic-power-series`; `thm-complex-trigonometric-hyperbolic-dictionary`; `thm-derivative-of-exponential`; `thm-exponential-beats-every-polynomial`; `thm-exponential-is-strictly-increasing`; `thm-exponential-limits-and-range`; `thm-extreme-value-metric`; `thm-fundamental-theorem-for-complex-line-integrals`; `thm-fundamental-theorem-of-algebra-minimum-modulus-proof`; `thm-goursat-triangle-theorem`; `thm-heine-borel-rn`; `thm-heine-cantor-metric`; `thm-normalized-exponential-functional-equation`; `thm-p-series-rational`; `thm-real-power-laws`; `thm-riemann-fubini-on-product-rectangles`; `thm-riemann-stieltjes-and-parametric-contour-integrals-agree`; `thm-termwise-differentiation-of-complex-power-series`; `thm-uniform-limit-continuous-complex-functions`; `thm-uniform-limit-interchanges-complex-line-integrals`; `thm-weierstrass-m-test-for-complex-function-series`; `thm-well-ordering-principle`; `thm-zero-complex-derivative-on-a-domain-implies-constant`.

Every load-bearing dependency is either earlier inside this A/B pair or published on a strictly earlier page. There are no exceptions and no published falsehoods requiring the Step-5 dependency-repair protocol.

## New-id report

For each of the 30 proposed ids, this exact search was run before writing the manifest:

~~~sh
rg -n -F "<id>" items research/plan-spec.json
test -e "items/<id>.md"
~~~

All 30 searches found no item or planned id. For the Step-3 addition, `rg -n -F "thm-fundamental-theorem-of-algebra-liouville-proof" items research/plan-spec.json research/frontier-16-batch-*.pages.json` returned no match before the manifest edit. The proposed ids are exactly the ids in the two per-page lists below.

## Per-page item list

### `analyticity-liouville-and-morera` — 22 items

1. `rem-locally-uniform-convergence-dictionary` — remark — Locally uniform convergence on an open subset of the complex plane is compact convergence
2. `def-real-analytic-map-on-the-plane` — definition — Real-analytic maps between open subsets of the coordinate plane
3. `def-taylor-series-holomorphic-function` — definition — The Taylor series of a holomorphic function at a point
4. `def-order-of-zero-holomorphic-function` — definition — The order of a zero of a holomorphic function
5. `thm-taylor-expansion-holomorphic-function` — theorem — A holomorphic function equals its Taylor series throughout the largest centred disc in its domain
6. `thm-holomorphic-if-and-only-if-analytic` — theorem — A complex function is holomorphic if and only if it is analytic
7. `cor-holomorphic-functions-are-real-analytic-and-smooth` — corollary — Holomorphic functions are real analytic and smooth in their two real coordinates
8. `rem-taylor-coefficient-formula-agreement` — remark — Agreement of the power-series and Cauchy-integral formulas for Taylor coefficients
9. `thm-zero-order-factorization-holomorphic-function` — theorem — The order of a zero is the exponent in its local holomorphic factorization
10. `cor-cauchy-estimates-taylor-coefficients` — corollary — Cauchy's inequalities bound the Taylor coefficients by the circle supremum
11. `thm-liouville-bounded-entire-function` — theorem — Liouville's theorem: every bounded entire function is constant
12. `thm-entire-polynomial-growth-is-polynomial` — theorem — An entire function of polynomial growth is a polynomial
13. `thm-fundamental-theorem-of-algebra-liouville-proof` — theorem — Fundamental theorem of algebra by Liouville's theorem
14. `rem-fundamental-theorem-of-algebra-via-liouville` — remark — Agreement of the Liouville and minimum-modulus proofs of the fundamental theorem of algebra
15. `def-edgewise-riemann-integral-around-complex-triangle` — definition — The edgewise Riemann integral around a complex triangle for an integrable pullback
16. `thm-morera-triangle-theorem` — theorem — Morera's theorem: vanishing triangle integrals characterize holomorphy among continuous functions
17. `lem-cauchy-estimates-on-concentric-subdiscs` — lemma — Cauchy estimates on a smaller concentric disc
18. `thm-weierstrass-convergence-holomorphic-functions` — theorem — Locally uniform limits of holomorphic functions are holomorphic and their derivatives converge locally uniformly
19. `cor-locally-uniformly-convergent-holomorphic-series` — corollary — A locally uniformly convergent series of holomorphic functions may be differentiated term by term
20. `thm-holomorphic-parameter-riemann-integral` — theorem — A jointly continuous finite-interval parameter integral of holomorphic functions is holomorphic
21. `cor-holomorphic-mean-value-property` — corollary — A holomorphic function equals its average on every compactly contained circle
22. `cor-nonconstant-entire-function-has-dense-image` — corollary — Every nonconstant entire function has dense image in the complex plane

### `analyticity-liouville-and-morera-examples` — 8 items

1. `ex-sine-minus-z-zero-of-order-three` — example — $\sin z-z$ has a zero of order three at the origin
2. `ex-holomorphy-of-integral-of-t-to-z` — example — Morera proves holomorphy of the integral of (t^z) on `Re z>1`
3. `cex-boundary-convergent-power-series-no-larger-holomorphic-disc` — counterexample — Uniform convergence on the closed unit disc does not give a holomorphic extension to a larger disc
4. `cex-powers-locally-uniform-not-uniform-on-closed-disc` — counterexample — (z^n) tends locally uniformly to zero on the unit disc but not uniformly on the closed disc
5. `cex-morera-without-continuity` — counterexample — Morera's theorem fails without continuity
6. `fs-every-smooth-map-of-the-plane-is-real-analytic` — false statement — FALSE: every smooth map between open subsets of the plane is real analytic
7. `fs-entire-bounded-on-real-axis-is-constant` — false statement — FALSE: an entire function bounded on the real axis is constant
8. `fs-every-entire-function-with-antiderivative-is-polynomial` — false statement — FALSE: every entire function with an antiderivative is a polynomial

## Forward references and cross-batch dependencies

Forward references kept: none.

Cross-batch dependencies: none. The declared prerequisite pages and every other external dependency used here are already published at strictly smaller orders. The other batches of `frontier-16` need no item from this batch to close their current manifests.

## Gate record and confidence

- `node tools/coverage-checklist.mjs research/frontier-16-batch-7.coverage.json` reports 1 page, 70 harvested results, 0 errors, and 0 warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-16-batch-7.pages.json` reports 30 scoped items, 0 errors, and 0 warnings after the Step-3 fix.
- `node tools/source-fetch-check.mjs --coverage research/frontier-16-batch-7.coverage.json --stamp` does not pass: 2 of 6 exact URLs carry mechanical stamps and 4 fail at sandbox DNS with `EAI_AGAIN` as recorded in F9.
- `node tools/proof-contract.mjs research/frontier-16-batch-7.proof-contracts.json --strict` was run. It reports the expected 23 `item-missing` errors because Step 5 has not authored any item file. A separate structural check confirms 23 contracts, unique numbered steps, valid citation-use step ids, declared citation facts, and all eight boundary rows per contract. This is not a proof-contract gate pass.
- `node tools/finite-smoke.mjs research/frontier-16-batch-7.proof-contracts.json` reports 0 checks over 0 authored items; this is not evidence of a mathematical pass.
- The authoritative `validate-plan` and `depsource` gates cannot assess this manifest until Step 4 splices it. No claim is made that either passed.

Confidence is high in the mathematical scaffold, dependency order, source-heading harvest, and proof decomposition. I directly checked the fragile points: the distance-to-complement convention, zero and infinite zero order, the subdisc derivative estimate, real (N) in polynomial growth, Morera's continuity counterexample on degenerate edges, both (a=b) and (t=0) in parameter integrals, and the boundary power-series obstruction. I did not mechanically fetch-stamp four full texts because the sandbox blocks shell DNS, did not author or precheck the item files, did not run the spliced plan gates, and did not independently recompute a rendered page.

## Step-3 fix pass

### B7-1 — applied

The rem-only FTA entry was replaced by the proof-bearing
`thm-fundamental-theorem-of-algebra-liouville-proof`, with the exact published
statement “Every nonconstant complex polynomial has a complex root.” Its
contradiction proof uses the earlier same-page Liouville theorem, holomorphy of
the zero-free reciprocal, polynomial growth for the exterior estimate,
continuity plus Heine--Borel and the extreme value theorem for the closed-disc
estimate, and the fact that a nonzero constant reciprocal forces the original
polynomial to be constant. The shared boundary (|z|=R), the nonempty compact
disc, constant and zero-polynomial exclusions, and the degree-one case are
explicit in the strategy and proof contract.

The new theorem does **not** list
`thm-fundamental-theorem-of-algebra-minimum-modulus-proof` as a dependency. The
existing `rem-fundamental-theorem-of-algebra-via-liouville` remains immediately
after it as a separate agreement remark and depends on both independent theorem
ids. The A page now has 22 items; the companion remains unchanged. The four
harvested Ahlfors, Stein--Shakarchi, Weber, and Krantz FTA headings now dispose
to the new theorem. Its expected component provenance is
`statement: literature-derived`, `proof: ai-altered`, with all four existing
source URLs required in the authored item's `sources.references`. The agreement
remark is `statement: ai-altered`, `proof: not-applicable`; it makes no new
theorem claim.

The proof-contract scope and map now contain 23 proof-bearing items. The new
contract assigns all nine planned steps exactly once, records eight direct fact
citations, disposes all eight boundary cases, and selects no finite smoke check
because none of the registered bounded models applies. An exact-substring check
found every published citation quote in its named source section; the same-page
Liouville quote is bound to the exact Step-5 clause already recorded above.

**Published reciprocal-backlink queue.** No published item was edited in this
fix pass. Once the new theorem is authored and spliced, the authorised later
stage should update
`items/thm-fundamental-theorem-of-algebra-minimum-modulus-proof.md` with the
orientation-only `forward_refs` entry
`thm-fundamental-theorem-of-algebra-liouville-proof` and append this exact
Remark sentence: “A distinct proof using Liouville's theorem is given in
[[thm-fundamental-theorem-of-algebra-liouville-proof]].” This must be a forward
reference, never a logical dependency, because the new proof is on the
order-311 page. The queue is required by B7-1's reciprocal-link instruction but
is outside this batch-scaffold write boundary.

The collision search for
`thm-fundamental-theorem-of-algebra-liouville-proof` returned no match in
`items/`, `research/plan-spec.json`, or any frontier-16 batch manifest before
the edit. No other batch currently supplies or consumes the new id, and no
load-bearing forward reference was introduced.

Post-fix checks:

- `coverage-checklist.mjs`: exit 0; 1 page, 70 harvested results, 0 errors, 0 warnings.
- `content-policy.mjs --manifest-only`: exit 0; 30 scoped items, 0 errors, 0 warnings.
- `validate-plan.mjs research/plan-spec.json`: exit 0 on the current plan; this checks the unspliced specification and is not a claim that the new id has already been spliced.
- `prosecheck.mjs --warnings`: exit 0; 0 errors and only count heuristics inside this required scaffold report.
- `git diff --check` on the four batch-7 scaffold artifacts: exit 0.
- `proof-contract.mjs --strict`: expected non-pass at Step 3, with 23 `item-missing` errors and no authored items to inspect. The separate manifest/contract structural check reports 23 scopes, 23 contracts, no missing or extra contract, no duplicate step map, no undeclared citation source, and all boundary rows present.

Confidence is high that B7-1 is closed at scaffold level. I verified the new
route against the exact published dependency statements and the four already
harvested source treatments. I did not author or precheck the new item, splice
the manifest, apply the queued published backlink, or run Step-6/Step-7 review.

## Step-5 authoring

### Authored artifacts

The A page library/complex-analysis/analyticity-liouville-and-morera.md and the
companion
library/complex-analysis/analyticity-liouville-and-morera-examples.md are
authored as drafts. Their item lists agree with the spliced specification. Every
owned item is status: draft and origin: session; no item carries an owner audit,
delegated verification, or judge verdict. The A-page summary is the approved
two-paragraph scaffold summary, rechecked against the final items. The companion
has no authored summary body.

### Per-item precheck and component-provenance ledger

| id | precheck | statement / proof | source and edit history |
|---|---|---|---|
| rem-locally-uniform-convergence-dictionary | n/a | ai-altered / not-applicable | Weber's locally uniform definition and the Ahlfors/Stein compact-uniform formulation were adapted into an agreement proof with the published compact-convergence topology. |
| def-real-analytic-map-on-the-plane | n/a | ai-altered / not-applicable | Taylor's planar Taylor-series convention was adapted componentwise to maps into the coordinate plane, with convergence and finite-sum conventions made explicit. |
| def-taylor-series-holomorphic-function | n/a | literature-derived / not-applicable | The Ahlfors, Stein--Shakarchi, Weber, and Shabat coefficient convention was followed; the definition records that higher derivatives make every coefficient well-defined. |
| def-order-of-zero-holomorphic-function | n/a | literature-derived / not-applicable | Shabat's least-nonzero-coefficient definition was followed, with the published extended-real value for the zero germ and well-ordering discharge written inline. |
| thm-taylor-expansion-holomorphic-function | pass | literature-derived / ai-altered | The sourced maximal-disc statement was retained; the local proof expands the Cauchy kernel and adds explicit compact-circle boundedness before passing the uniform limit through the integral. |
| thm-holomorphic-if-and-only-if-analytic | pass | literature-derived / ai-altered | Shabat and Weber carry the equivalence; the proof combines the new Taylor theorem with the published analytic-implies-holomorphic direction and explicitly includes the empty domain. |
| cor-holomorphic-functions-are-real-analytic-and-smooth | pass | ai-altered / ai-altered | Taylor's real-analytic convention was materially adapted to complex Taylor coefficients; the proof identifies every coordinate-derivative word and uses absolute convergence inside the Taylor disc. |
| rem-taylor-coefficient-formula-agreement | n/a | ai-altered / not-applicable | The literature's derivative and contour coefficient formulas were joined to the already-published power-series coefficient formula without asserting a new theorem. |
| thm-zero-order-factorization-holomorphic-function | pass | literature-derived / ai-altered | Shabat's factorization and multiplicity results supply the statement; the local proof treats both finite directions and the infinite-order zero-germ boundary. |
| cor-cauchy-estimates-taylor-coefficients | pass | literature-derived / ai-altered | The Ahlfors, Stein--Shakarchi, Weber, and Krantz estimate was rewritten for the Taylor coefficient convention, including derivative order zero and zero bound. |
| thm-liouville-bounded-entire-function | pass | literature-derived / ai-altered | The standard sourced Liouville statement was proved from the published Cauchy inequality and zero-derivative theorem, with an explicit contradiction radius. |
| thm-entire-polynomial-growth-is-polynomial | pass | ai-altered / ai-altered | Krantz's integer-growth result was extended to real nonnegative exponent by the floor bound; the proof derives decay from the published exp-log definition and qualifies the degree only for a nonzero polynomial. |
| thm-fundamental-theorem-of-algebra-liouville-proof | pass | literature-derived / ai-altered | Ahlfors, Stein--Shakarchi, Weber, and Krantz carry the FTA and Liouville route; the proof separately closes exterior boundedness, compact-disc boundedness, the shared boundary, and constancy. |
| rem-fundamental-theorem-of-algebra-via-liouville | n/a | ai-altered / not-applicable | The owner-required agreement seam names the independent Liouville and minimum-modulus routes and makes no independent mathematical claim. |
| def-edgewise-riemann-integral-around-complex-triangle | n/a | ai-altered / not-applicable | Shabat's discontinuous Morera witness motivated a narrow extension of the standard parametric edge formula to integrable pullbacks; agreement with the published continuous contour integral is stated. |
| thm-morera-triangle-theorem | pass | literature-derived / ai-altered | The Ahlfors, Stein--Shakarchi, Weber, and Shabat equivalence was proved locally from the published triangle-primitive construction and Goursat, with each implication self-scoped after canonical stratification. |
| lem-cauchy-estimates-on-concentric-subdiscs | pass | literature-derived / ai-altered | Weber and Stein--Shakarchi supply the subdisc estimate; the proof writes the reverse-triangle denominator and ML calculation, including inner radius zero. |
| thm-weierstrass-convergence-holomorphic-functions | pass | literature-derived / ai-altered | The Ahlfors, Stein--Shakarchi, Weber, and Krantz theorem was proved by compact contour convergence plus Morera, followed by the subdisc estimate for every derivative order. |
| cor-locally-uniformly-convergent-holomorphic-series | pass | literature-derived / ai-altered | The Ahlfors and Stein--Shakarchi series form was derived from Weierstrass applied to finite partial sums, including the empty partial sum and derivative order zero. |
| thm-holomorphic-parameter-riemann-integral | pass | literature-derived / ai-altered | Stein--Shakarchi supplies holomorphy of the parameter integral; the proof verifies Riemann integrability before Fubini, continuity before Morera, and the derivative formula only under joint continuity of the slice derivative. |
| cor-holomorphic-mean-value-property | pass | literature-derived / ai-altered | Weber's mean-value formula was obtained by the published positive circle parametrization and Cauchy formula. |
| cor-nonconstant-entire-function-has-dense-image | pass | ai-generated / ai-generated | This direct non-load-bearing Liouville corollary was derived locally: an omitted ball bounds a zero-free reciprocal, whose constancy forces the original function to be constant. |
| ex-sine-minus-z-zero-of-order-three | pass | literature-derived / ai-altered | Shabat's example was checked by the sine series, local factorization, and an independent derivative computation through the third derivative. |
| ex-holomorphy-of-integral-of-t-to-z | pass | ai-generated / ai-generated | The scaffold example was endpoint-corrected locally: principal power is used for positive base, the zero-base slice is defined separately, and joint continuity follows from the bound $|t^z|\le t$ on the stated half-plane. |
| cex-boundary-convergent-power-series-no-larger-holomorphic-disc | pass | literature-derived / ai-altered | Shabat's boundary-convergent series was supplemented by an M-test and an explicit harmonic-partial-sum proof that the derivative is unbounded toward the boundary. |
| cex-powers-locally-uniform-not-uniform-on-closed-disc | pass | ai-generated / ai-generated | The explicit witness was checked on arbitrary compact subsets, including the empty set, and at the boundary point $1$, where pointwise convergence already fails. |
| cex-morera-without-continuity | pass | literature-derived / ai-altered | Shabat's point-supported witness was adapted to the edgewise Riemann definition; nonconstant, constant, repeated, and collinear edge cases are all discharged. |
| fs-every-smooth-map-of-the-plane-is-real-analytic | pass | ai-altered / ai-altered | The standard flat exponential witness was adapted to Taylor's planar definition; the polynomial-times-exponential derivative induction and every derivative at the origin are written locally. |
| fs-entire-bounded-on-real-axis-is-constant | pass | ai-altered / ai-altered | The sourced Liouville contrast uses complex sine, its real restriction and bound, and its nonzero derivative at the origin. |
| fs-every-entire-function-with-antiderivative-is-polynomial | pass | ai-altered / ai-altered | The sourced exponential witness uses $\exp'=\exp$, the addition law for nonvanishing, and the published minimum-modulus FTA to exclude a nonconstant polynomial. |

The proof values label only the local derivations. An AI-altered or
AI-generated proof does not change a source-backed statement label.

### Scaffold-delta ledger

No id, kind, title, reading-order position, landmark statement, or coverage
disposition was dropped or renamed. Every harvested included row still names an
authored item. The final statements keep the scaffold's intended scope: Taylor
expansion stops at the largest disc contained in the given domain, parameter
differentiation retains its stronger joint-continuity hypothesis, and the
$t^z$ example remains on $\operatorname{Re}z>1$ with its endpoint value proved
continuous.

The following dependency declarations changed because the written proof uses
the added facts:

- thm-taylor-expansion-holomorphic-function adds
  cor-complex-differentiability-implies-continuity, thm-heine-borel-rn, and
  thm-extreme-value-metric to license boundedness of the integrand on the
  compact circle before uniform integration.
- cor-holomorphic-functions-are-real-analytic-and-smooth adds
  thm-complex-power-series-converge-locally-uniformly for absolute convergence
  of the binomially expanded total-degree series.
- thm-weierstrass-convergence-holomorphic-functions adds
  def-oriented-complex-triangle-and-boundary, thm-heine-borel-rn, and
  thm-continuous-image-of-a-compact-space-is-compact to prove compactness of
  the contour trace and the nested discs actually used.
- thm-holomorphic-parameter-riemann-integral adds
  thm-continuous-on-a-rectangle-is-riemann-integrable,
  thm-norm-inequality-for-the-vector-valued-integral,
  thm-complex-numbers-are-the-real-coordinate-plane, and
  lem-integral-elementary-bounds to license the Fubini input and the
  uniform-error integral estimates.
- ex-holomorphy-of-integral-of-t-to-z adds thm-natural-logarithm-laws,
  cor-complex-differentiability-implies-continuity, and
  thm-chain-rule-for-complex-derivatives; it drops thm-real-power-laws because
  the final endpoint estimate is proved directly from
  $\exp((\operatorname{Re}z)\log t)\le\exp(\log t)=t$ and does not use
  real-power algebra.
- cex-boundary-convergent-power-series-no-larger-holomorphic-disc adds
  thm-complex-polynomials-and-rational-functions-are-holomorphic,
  thm-heine-borel-rn, lem-complex-conjugation-and-modulus-laws, and
  thm-cauchy-integral-formula-higher-derivatives to license continuity of the
  finite monomial family and boundedness of the hypothetical extension's
  derivative on $[0,1]$.

No dependency was added merely to silence a checker. The namespaced proof
contract records each added direct fact, its exact on-disk source excerpt, and
all step uses.

### Generated-claim truth checks

- For cor-nonconstant-entire-function-has-dense-image, the search scope was a
  missing metric ball and the reciprocal $1/(f-w)$. The denominator is bounded
  below by the positive ball radius, so the reciprocal is entire and bounded;
  constant functions are the excluded counterexamples. No counterexample to
  the stated nonconstant result was found.
- For ex-holomorphy-of-integral-of-t-to-z, the search scope was joint
  continuity at $t=0$ and branch use at positive real base. Principal power has
  no branch ambiguity there, and $|t^z|\le t$ uniformly near each parameter
  point of the half-plane closes the endpoint. No counterexample was found on
  the stated domain.
- For cex-powers-locally-uniform-not-uniform-on-closed-disc, the search scope
  included empty and singleton compact sets, the initial index, and the boundary
  point $1$. The compact maximum is strictly below $1$, while the boundary value
  remains $1$ at every index, so the witness is valid.

These generated statements are leaves and no item depends on them.

### Escalations and boundaries

The reciprocal backlink requested for the independent FTA proofs remains
outside this batch's write authority. The published item
thm-fundamental-theorem-of-algebra-minimum-modulus-proof is mathematically
correct, so the obvious-published-dependency-repair exception cannot authorize
an expository forward-reference edit. The exact queued edit remains in the
Step-3 section above for an authorised later stage.

No scaffold claim was dropped, narrowed, or found false during authoring. No
published dependency required repair. No external fallback, forward reference,
or cross-batch logical dependency was introduced.

### Gate record and confidence

- Reflow left every owned file unchanged. Scoped precheck passes every
  proof-bearing item; definitions and remarks correctly record n/a.
- proof-contract.mjs --strict reports no errors across the owned scope. Its
  sole warning is the truthful five-fact citation cluster in the contour-trace
  step of the Weierstrass proof.
- boundary-audit.mjs --fail-on-contradicted reports no contradicted
  dispositions and no repeated template cluster. citation-fidelity.mjs
  --fail-on-missing-quote finds every recorded quote and no widening candidate.
- finite-smoke.mjs runs no registered check for these analytic items. This is
  recorded as no evidence, not as a mathematical pass.
- Step-5 risk-report.mjs routes the proof-bearing scope for Step-6 review. No
  risk_review was written, because that disposition belongs to Alpha.
- Batch content policy, coverage checklist, plan validation, scoped prosecheck,
  and scoped rendercheck pass. Fwdcheck, extcheck, and citecheck exit clean;
  citecheck's warnings are outside this batch.
- The global depcheck invocation is presently red on concurrently authored
  files outside batch 7. The latest re-run has one hard YAML-escape error in
  items/ex-distinct-basepoint-change-isomorphisms-on-two-circle-wedge.md, plus
  advisory dependency rows in other batches. Its reported issue lines contain
  no batch-7 item or page id. This session did not edit another Beta's files to
  clear a parallel authoring failure and does not claim that global gate passed.

Confidence is high in the statements, local proofs, dependency fidelity,
boundary handling, page composition, and coverage truthfulness. I re-opened
every direct cited source item through the contract audit and mechanically
confirmed each exact quote. I did not run a judge, perform Step-6 independent
review, apply the queued published backlink, refresh the external source bytes
beyond the existing coverage stamps, or certify the parallel batches.
