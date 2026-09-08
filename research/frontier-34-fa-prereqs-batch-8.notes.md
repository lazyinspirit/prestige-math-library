# Batch 8 — blocked scaffold handoff

Run `frontier-34-fa-prereqs`, role beta. This is NOT a readiness certificate. The authorized manifest and coverage are populated, but source fetching, transitive dependency closure and the interpolation interface remain fatal release obligations. Do not author/publish these pages from this scaffold yet.

## Scope and controlling documents

Read CLAUDE.md as the canonical instructions, README.md, SCHEMA.md, WORKFLOW.md, the beta task, current plan, the active `.autopilot/frontier-34-fa-prereqs/` status, and the assigned designs. Baseline HEAD: `12927d03a` (`plan: add frontier prerequisite scaffolds`). The controller owns transitions; no controller transition, published item, plan, or prose-design file was changed. Only this batch's `.pages.json`, `.coverage.json`, and `.notes.md` were written in the repository. Scratch scripts/logs live in `/tmp` and are not durable handoff dependencies: material findings are reproduced below.

FA-22 and FA-23 in `research/plan-functional-analysis-track.md`, lines 1615–1734, control the mathematical inventory and proof route. The complex-analysis location around line 161 and Fourier-analysis location around line 114 are consumer prerequisite ledgers, not alternative designs. The FA opening around line 51 explicitly places these prerequisites in the FA ownership range. All three listed locations were read. The current plan controls orders and page prerequisites: A/B orders 288.089/.090 and .091/.092; each B requires its A, and the A chain is exactly the dispatched chain through the preceding unbounded-operator B page.

Design/plan conflicts and reconciliations:

- Design descriptions of prerequisites as merely planned, and opening status text saying not yet spliced, are stale against the current plan and published measure-theory items. No concluded RESUME file was treated as a live-run instruction.
- The design's `lem-fourier-transform-of-a-gaussian` is already published on `primitive-dirichlet-l-functions-and-functional-equations` at order 348.011. It cannot supply these pages. The new earlier n-dimensional lemma has the unused ID `lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization` and an independent ODE/tensor-product proof. The published item was not rehomed or edited.
- The design expressly says to reuse existing multi-index notation. No duplicate `def-multi-index-notation-for-euclidean-fourier-analysis` was created; the existing calculus definition is reused, with complex derivatives taken componentwise.
- Published MT14 Lp and MT15 test-function definitions are real-valued. The design implicitly uses complex spaces. Three explicit complex-interface items are staged at the beginning of FA-22. They are not a redefinition of the real suppliers or of the already complex integral. See the proposed prerequisite pair below for the required upstream placement of the broader interpolation interface.
- The design assumes earlier smooth cutoff functions. `def-the-standard-smooth-step-function` is later, order 445; the local cutoff lemma instead proves flatness of exp(-1/t), constructs the smooth step and the radial cutoff. Its support is in the CLOSED radius-two ball. Exercise 11.1 in Dyatlov assumes a cutoff; it does not construct one, and the manifest now says so.
- MT17's `thm-riesz-thorin-interpolation` requires 1<q0,q1<infinity. It cannot supply the q0=infinity Fourier endpoint. The finite-endpoint theorem is cited accurately, the intended Hausdorff–Young orientation is preserved, and the missing endpoint supplier is a fatal interface finding. No replacement Riesz–Thorin theorem was minted in FA, respecting FA-22 item 17.

## Inventory and proof route

The manifest has 57 items: FA-22 A 22, B 8; FA-23 A 19, B 8. Both A pages are below the plan's default 60-item limit; no split or padding was used. Every item has an explicit deps array (including the empty Wiener orientation array), a statement, a proof/definition route, provenance and source locators.

Added supporting mathematics: the complex scalar/space interface; a radial-majorant Lebesgue-point kernel lemma (general norm approximate identities alone are inadequate); Gaussian smoothing of finite complex measures; explicit smooth cutoffs; simultaneous L1/L2 smooth approximation; Schwartz product/convolution laws; and periodic continuous-function uniqueness from the earlier complex Stone–Weierstrass theorem. These support rather than replace the design inventory.

Normalization throughout is Ff(ξ)=∫f(x)exp(-2πix·ξ)dx; inner products are linear in the first variable. The Gaussian is exp(-πt|x|²), with transform t^(-n/2)exp(-π|ξ|²/t). Translation is f(x-a); arbitrary invertible dilations carry |det A|^-1, including orientation reversal. The probability dictionary is φX(t)=F(PX)(-t/(2π)).

The proof order is complex interfaces → L1 definition/well-definedness → bounds/laws/convolution → Gaussian → Riemann–Lebesgue via translation continuity → Gaussian kernels and the local radial-majorant lemma → summability → L1 inversion/product/uniqueness → finite-measure smoothing/uniqueness. Schwartz topology/completeness and cutoff density precede transform invariance/inversion/Parseval; dense completion and surjectivity precede L1/L2 agreement and L2 inversion; ordinary periodization plus the local periodic uniqueness lemma precede Poisson summation. No later Fejer theorem or Dirac-comb theorem supplies Poisson summation.

Essential proof checks encoded in the manifest:

- Uniform continuity uses an integral bound independent of the frequency, not merely pointwise dominated convergence.
- Every Fourier Fubini step has a proposed absolute majorant. The undamped double inversion integral is not absolutely integrable; Gaussian damping is essential.
- The L1 inversion theorem recovers the continuous representative a.e. and its Lebesgue-point values, not every arbitrary representative value.
- Finite complex measures use RN relative to variation plus the absolute-value density theorem to justify the polar density; real/imaginary Jordan components and regularity reduce uniqueness to the published RMK uniqueness step 2.1 (testing Cc suffices).
- Product transformation requires an integrable transform for one L1 factor. No general L1 product closure is claimed.
- Complex L2 Cauchy–Schwarz and its phase-sensitive equality are supplied locally; the published modulus-only Holder equality is insufficient for the Gaussian equality classification.
- Hermite normalization is h0=2^(1/4)exp(-πx²), creation operator sqrt(π)x−(2sqrt(π))^-1 d/dx, eigenvalues (-i)^m. The completeness route uses Gaussian-weighted moments, exponential-series domination and L1 uniqueness, not a later harmonic-oscillator theorem.
- The radial Heisenberg inequality has n/(4π), with equality exactly at the stated isotropic translated/modulated Gaussians. A one-coordinate equality condition in higher dimension would allow arbitrary factors in other coordinates and must not be confused with this statement.
- Cross-pair B dependencies were removed. The sinc calculation is repeated inline where Plancherel needs it; the smooth non-Schwartz counterexample uses its elementary tail estimate directly.

## Source evidence and limitations

The coverage ledger contains the source URLs, exact selected ranges, named-result dispositions and item links. It records 144 disposition rows across two A-page entries; shared texts are repeated per page, so this is not 144 distinct theorems. It is a harvest of selected complete sections/results, not a claim to have read every chapter of each book.

Primary independent treatments for each A are Gerald Teschl's full 563-page textbook and Semyon Dyatlov's full 266-page MIT lecture set. Selected ranges were read in full, including the complete inversion arguments; Dyatlov Exercises 11.1 and 11.8 were also read in full. Teschl §14.5 was used only through Lemma 14.29, not claimed read through all distributions. Teschl Theorem 15.1 through Corollary 15.4, pp.414–415, were subsequently read completely to verify the endpoint defect. The exact copied-text provenance of a pre-existing `/tmp/teschl-functional.pdf` cache is not asserted as a fresh download; it provides full readable text, while matching selected web full-text views establish the content consulted. No hash stamp was fabricated from that cache.

Teschl uses the angular unitary convention (2π)^(-n/2)∫exp(-ip·x)f(x)dx; Dyatlov uses ∫exp(-ix·ξ)f(x)dx. Neither has the target constants without conversion. Dyatlov's C^0 continuity is not a C0 decay statement. The typo S′ in the seminorm-convergence sentence must not be copied into the Schwartz definition.

Supplementary full selected treatments: Elkies, Theorem 2 and its full periodization proof, pp.10–11 (51-page note; positive Fourier sign); Stroock, full Hermite Theorems 10.1 and 11.1 with definitions, pp.22–24 (73-page notes; rescaling/sign conversion required); Dall’Ara, complete §3 including Theorem 3.1, Lemmas 3.2–3.3 and Corollary 3.4 (nine-page author note). Dall’Ara supports the Wiener L1 orientation; Teschl Problem 14.8 only concerns L2 totality and is not a substitute. The source's §2 determinant-sign slip is not used.

Fetch attempts are distinct from reading. The Node source-fetch stamp attempt returned EAI_AGAIN for every source; curl liveness returned DNS resolution errors for all five unique URLs. The liveness recovery attempt likewise could not establish an archived copy. This is a network-execution failure, NOT proof that the public texts are dead or absent from archives. Source-backing therefore reports lost backing mechanically. All seven per-page source entries remain unstamped and release-blocking.

Knapp Basic Real Analysis's author-hosted PDF was attempted but the browser fetch failed because of its size and shell curl failed DNS. Knapp Advanced Real Analysis opened but its relevant section was not read in full in this dispatch and is not credited as harvested evidence. These design source candidates were not silently represented as read. The independent Dyatlov treatment was actually read and harvested with its own locators.

The no-universal-rate counterexample is retained with the explicit proposed modulated-Gaussian series. For r(R)>0 tending to zero choose increasing ξk with r(ξk)<2^(-2k), and take sum 2^(-k)exp(2πiξk x)exp(-πx²). L1 summability and positive Gaussian transforms give Ff(ξk)≥2^(-k). A primary-paper search found “On the decay and the smoothness behavior of the Fourier transform” at https://mediatum.ub.tum.de/doc/1311435/document.pdf, but three full-text attempts (including HTTP redirect) timed out, and the repository record did not open. Its abstract/snippet is NOT evidence. Independent full-text verification of this construction is still fatal; the result was not deleted to pass a gate.

## Dependency audit: evidence, fatal findings, and limits

The audit combined the current plan, ALL current run manifests, published library item homes, and published item frontmatter. A custom graph pass traversed deps, justified_by and forward_refs; a separate deps-only pass avoids treating orientation as a proof. The first scratch version incorrectly read `id` rather than the library frontmatter's `page` key for order lookup; that version's ordering findings were discarded and the corrected scan was rerun. A scratch JSON date serialization error affected the first optional body dump, not the persisted graph; it was corrected. No proof was certified on the basis of those failed scratch operations.

The corrected snapshot has 210 pages in the required-page closure, no missing page IDs, 4 still-empty required run page inventories, 4,531 items in the broad page/item closure, 1,496 items in the owned broad closure, and 1,253 items in the owned deps-only closure. It detects no owned ordinary deps cycle and no owned path to an item on the forbidden set-theory catalogue, even in the broad traversal. These counts are snapshot evidence, not a semantic certification. Other betas are changing inventories concurrently.

All direct external supplier statements were read for hypotheses, directions and conventions; selected proof bodies were read for the sensitive interfaces above. The COMPLETE 1,253-item transitive semantic audit is NOT certified. Unreviewed transitive proof adequacy and axiom use remain a fatal obligation under the scaffold contract, even where IDs resolve.

Concrete release blockers:

1. In MT14 (order 288.027), Holder and Minkowski use `prop-essential-supremum-is-attained-as-the-least-essential-bound`, which is listed after them (plan indices 8, 13 versus 16). Generalized Holder also reaches that proposition. These are actual declared forward deps in the transitive closure. They cannot be fixed by editing this batch, and the mathematics must not be removed to hide them.
2. Published `rem-sup-conventions` has a deps edge to later `fs-every-set-has-sup`. Published `def-field-homomorphism` has a deps edge to later `lem-of-inverse-unique`. The complete recorded paths appear below. Even where a later link explains an elementary fact, the declared graph violates the required strict closure. No published file was edited.
3. The required page chain includes unpopulated Hilbert geometry/Riesz and Banach-valued integration A/B pairs. Missing item paths include the unitary-group definition → `def-hilbert-space`, and Laplace resolvents → Bochner dominated convergence / bounded-map integration. Existing planned pair owners must supply them; they are not grounds to duplicate Hilbert or Bochner theory in this batch.
4. The final whole-run content-policy snapshot flags the earlier batch's `ex-momentum-operator-under-the-fourier-transform` depending on later `thm-fourier-transform-maps-schwartz-space-continuously-to-itself`. Its page is in the required chain. The earlier owner must prove the needed action without a forward Fourier supplier, or an authorized plan/design writer must reorder it. This beta cannot repair the other pair.
5. MT17 interpolation endpoint gap, source-fetch failures, and no-rate full-text verification remain as described above.

Axiom reading: the Euclidean Lebesgue suppliers explicitly assume countable choice. Reaching `def-axiom-of-choice` from `def-countable-choice` is a definitional vocabulary edge, not a use of full AC. A recorded path also reaches `def-dependent-choice` through the Euclidean norm/metric dictionary and `thm-metric-compactness-equivalences`. The latter explicitly uses DC only for sequential compactness ⇒ total boundedness; the norm dictionary's proof is a comparison of formulas and mentions the compactness theorem as a consequence with its hypotheses inherited. That does not automatically charge these Fourier proofs with DC, but the exact selected-clause audit must be completed before asserting a countable-choice-only closure. No silent axiom strengthening was used to clear the issue.

Foundations boundary: the full required-page graph does not reach the catalogue page by requires. Broad traversal over all earlier page items encounters recorded Baire/Hahn–Banach orientation paths into the catalogue; these were not mistaken for local Fourier suppliers. The repository extcheck passed with no Foundations forbidden-dependency errors. No new item in this batch references the catalogue. Full semantic classification of all legacy forward_refs remains part of the uncompleted transitive audit, so a graph pass is not advertised as blanket release approval.

## Required prerequisite pair proposal (not materialized)

Fatal F-INTERPOLATION: the current designs explicitly reserve Riesz–Thorin to measure theory, but its existing theorem lacks the infinite target endpoint. The prose scaffold and plan are not writable in this dispatch. An authorized writer must either provide the complete missing endpoint interface in its owned measure-theory supplier or add the following prerequisite pair. The intended consumer remains blocked until that is done.

Proposed A `complex-lp-spaces-and-endpoint-interpolation`; B `complex-lp-spaces-and-endpoint-interpolation-examples`; category `measure-theory`; placement A 288.0341, B 288.0342, after `the-maximal-function-and-lebesgue-differentiation-examples` (288.034), before the next A at 288.035. Requires that MT17 B page and the earlier complex exponential/three-lines inputs already in its closure. FA-22 must reach the new B through the authorized plan/prose update.

A inventory in proof order:

1. `def-complex-lp-and-euclidean-test-function-conventions` — relocate this batch's staged definition, do not publish a duplicate.
2. `lem-complex-lp-completeness-density-and-inner-product` — relocate the staged modulus/component proof.
3. `lem-complex-translation-and-approximate-identity-interfaces` — relocate the staged MT15 interface proof.
4. `lem-complex-lq-norm-from-finite-simple-dual-tests` — on sigma-finite spaces, recover the Lq norm, including q=infinity, from finite-support simple dual tests; modulus truncation and phase choice, using the complex interface and real Holder.
5. `lem-endpoint-interpolation-simple-analytic-families` — construct the coefficientwise entire finite-simple families for finite p endpoints and 1≤q endpoints≤infinity; show the boundary norm estimates with zero coefficients handled explicitly; requires the norming lemma and complex exponential/three-lines theorem.
6. `thm-complex-riesz-thorin-with-infinite-target-endpoints` — interpolate finite input endpoints and possibly infinite target endpoints from finite-simple bounds on sigma-finite spaces; apply three-lines, the norming lemma, then complex Lp density/completeness. Source: Teschl Theorem 15.2 and Corollary 15.3, read fully; exact endpoint statement must be independently source-backed and fetch-verified for the new A.
7. `cor-complex-interpolation-extensions-agree-on-intersections` — simultaneous simple approximants identify the extensions on common domains; prerequisites the endpoint theorem and complex density.

B inventory:

1. `ex-endpoint-interpolation-for-a-finite-matrix` — a concrete finite matrix with l1→linfinity and l2→l2 bounds; compute the intermediate bound from the new theorem.
2. `ex-complex-phase-in-lq-dual-norming` — a two-valued complex function where conjugate phase gives the norming test; contrast with a real-only test.
3. `cex-finite-target-interpolation-does-not-state-an-infinite-endpoint` — the exact q0=infinity hypothesis mismatch as a counterexample to an alleged theorem application, not a false mathematical interpolation conclusion.
4. `ex-interpolation-of-an-integral-averaging-operator` — finite-measure averaging into constant functions, checking the two endpoints and common-domain agreement.

The first three IDs already exist ONLY as staged owned scaffold items and must be MOVED atomically when this proposal is materialized; the additional proposed IDs and page orders were checked against the current plan and published filenames. The proposal is not itself a complete source-certified new pair. It names the exact missing work rather than inventing a supplier ID in deps. No authorization beyond this dispatch was requested.

## Checks actually run

| Check | Result |
|---|---|
| `coverage-checklist ...batch-8.coverage.json --require-destination` | Exit 0; final 2 pages, 144 harvest rows, 0 errors/warnings. |
| whole-run `manifest-deps ...batch-*.pages.json` | Exit 0; final 560 items, 0 normalized, 0 errors. Resolution/normalization is not semantic adequacy. |
| whole-run `content-policy --manifest-only ...batch-*.pages.json` | Exit 1; final 560 scoped items, 66 errors, 0 warnings. Full error output reproduced below. Earlier snapshots had 276/43 and 555/65 while other batches were being written. |
| `validate-plan research/plan-spec.json` | Exit 0; 1,486 pages, 15,116 planned items; 892/1,481 planned page inventories populated. Does not splice this untracked scaffold into the plan. |
| `extcheck` | Exit 0; 63 warnings about existing published external-material consequences; no hard error. This scans published content, not a proof certification of the new manifest. |
| `url-sweep --coverage ...batch-8.coverage.json --out /tmp/fa8-url-liveness.json --recover --fail-on-dead` | Exit 1; all five unique URL probes fail DNS; archive recovery unsuccessful under the same network restriction. |
| `source-backing --coverage ... --liveness /tmp/fa8-url-liveness.json` | Exit 1; final 56 per-page item-backing entries lack a mechanically openable source. |
| `source-fetch-check --coverage ... --stamp --timeout-sec 10` | Exit 1; 0/7 verified, all EAI_AGAIN, no stamps written. |
| `source-fetch-check --coverage ...` | Exit 1; 0/7 stamped, seven missing stamps. |
| custom corrected closure/ordering scan | Completed; counts, paths and limitations above. It is not a replacement for complete semantic review. |

No authoring, content proofs, publication, build-controller actions or wider checks are claimed. A tool-orchestration JavaScript syntax error occurred before one attempted parallel check group; no commands ran from that call, and the corrected call ran the checks recorded above. A mistaken `python` invocation was recovered with `python3`; attempted nonexistent `pages/` and category paths were corrected to the actual `items/` and `library/` homes. Those failed reads are not verification evidence.

## Durable snapshot evidence

### Owned inventory

**fourier-transform-convolution-and-approximate-identities**

- `def-complex-lp-and-euclidean-test-function-conventions` — Complex Lp and complex Euclidean test functions
- `lem-complex-lp-completeness-density-and-inner-product` — Complex Lp completeness, density and the L2 inner product
- `lem-complex-translation-and-approximate-identity-interfaces` — Translation and approximate identities on complex Lp
- `def-fourier-transform-on-l-one-of-rn` — Fourier transform on complex L1 classes
- `lem-l-one-fourier-transform-is-well-defined` — The integral transform is representative independent
- `thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions` — The L1 transform is bounded and uniformly continuous
- `thm-fourier-translation-modulation-dilation-and-reflection-laws` — Translation, modulation, linear dilation and reflection laws
- `thm-fourier-transform-converts-convolution-to-products` — Fourier transform turns L1 convolution into multiplication
- `lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization` — Euclidean Gaussian transform with the 2π normalization
- `thm-riemann-lebesgue` — Riemann–Lebesgue lemma
- `lem-gaussian-fourier-summability-kernel-is-an-approximate-identity` — Gaussian summability kernels
- `lem-radial-majorized-kernels-recover-lebesgue-point-values` — Lebesgue-point convergence for radial-majorized kernels
- `thm-fourier-inversion-at-lebesgue-points-under-summability` — Gaussian Fourier summability at Lebesgue points
- `thm-l-one-fourier-inversion` — L1 Fourier inversion with an integrable transform
- `thm-fourier-transform-of-a-product-under-an-integrable-transform-hypothesis` — Fourier transform of a product with one integrable transform
- `cor-uniqueness-of-the-l-one-fourier-transform` — Uniqueness of the L1 Fourier transform
- `cor-convolution-approximate-identities-from-fourier-multipliers` — Fourier multipliers of approximate identities
- `thm-fourier-transform-of-a-finite-complex-measure` — Fourier transform of a finite complex Borel measure
- `lem-gaussian-smoothing-of-finite-complex-measures` — Gaussian smoothing of finite measures
- `cor-uniqueness-of-finite-borel-measures-from-their-fourier-transforms` — Uniqueness of finite Borel measures from their Fourier transforms
- `rem-probability-characteristic-function-normalization` — Characteristic-function normalization
- `rem-riesz-thorin-supplied-by-measure-theory` — The interpolation input belongs to measure theory

**fourier-transform-convolution-and-approximate-identities-examples**

- `ex-fourier-transform-of-an-interval-indicator` — Transform of an interval indicator
- `ex-fourier-transform-of-a-gaussian` — Scaled and tensor Gaussian examples
- `ex-fourier-transform-of-the-poisson-kernel` — Poisson kernel transform and Abel summability on the line
- `ex-fourier-transform-of-a-compactly-supported-triangle-function` — Triangle function and squared sinc
- `cex-fourier-transform-of-an-l-one-function-need-not-be-integrable` — An L1 transform need not be integrable
- `cex-fourier-inversion-need-not-hold-at-every-point-of-an-l-one-representative` — Null-set modifications defeat everywhere representative recovery
- `cex-riemann-lebesgue-has-no-universal-rate` — There is no universal Riemann–Lebesgue decay rate
- `rem-wiener-tauberian-theorem` — Wiener Tauberian orientation

**schwartz-space-and-the-plancherel-theorem**

- `def-schwartz-space-and-its-seminorms` — Schwartz space and its seminorms
- `def-schwartz-topology-and-convergence` — Schwartz topology and convergence
- `thm-schwartz-space-is-frechet` — Schwartz space is Fréchet
- `lem-schwartz-functions-and-all-derivatives-are-integrable` — Schwartz derivatives are integrable
- `lem-schwartz-cutoffs-from-the-standard-smooth-step` — Explicit compactly supported smooth cutoffs
- `lem-smooth-compactly-supported-functions-are-dense-in-schwartz-space` — Smooth compact supports are dense in Schwartz space
- `thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space` — Basic operations are continuous on Schwartz space
- `thm-fourier-transform-maps-schwartz-space-continuously-to-itself` — Fourier transform acts continuously on Schwartz space
- `thm-fourier-inversion-on-schwartz-space` — Fourier inversion on Schwartz space
- `cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space` — Fourier transform is a topological automorphism of Schwartz space
- `cor-schwartz-convolution-and-product-transform-laws` — Schwartz convolution and product laws
- `thm-parseval-pairing-on-schwartz-space` — Parseval pairing on Schwartz space
- `lem-schwartz-space-is-dense-in-l-two` — Schwartz space is dense in L2
- `thm-plancherel` — Plancherel theorem
- `lem-simultaneous-smooth-approximation-in-l-one-and-l-two` — Simultaneous L1 and L2 smooth approximation
- `thm-l-one-l-two-agreement-of-fourier-transform` — Agreement of the integral and L2 transforms
- `thm-l-two-fourier-inversion` — L2 Fourier inversion
- `lem-periodic-continuous-functions-are-determined-by-their-fourier-coefficients` — Fourier uniqueness for continuous functions on the Euclidean torus
- `thm-poisson-summation-for-schwartz-functions` — Poisson summation for Schwartz functions

**schwartz-space-and-the-plancherel-theorem-examples**

- `ex-gaussians-and-polynomials-times-gaussians-are-schwartz` — Polynomial Gaussians are Schwartz
- `cex-a-smooth-integrable-function-need-not-be-schwartz` — Smooth and integrable does not imply Schwartz
- `cex-a-schwartz-function-need-not-have-compact-support` — A Schwartz function need not have compact support
- `ex-hermite-functions-as-fourier-eigenfunctions` — Normalized Hermite Fourier eigenfunctions
- `ex-plancherel-for-an-interval-indicator` — Sinc-square integral from Plancherel
- `ex-poisson-summation-for-the-gaussian-and-theta-functional-equation` — Gaussian Poisson summation and theta inversion
- `thm-heisenberg-uncertainty-inequality` — Heisenberg uncertainty and Gaussian equality
- `rem-hausdorff-young-and-interpolation` — Hausdorff–Young and interpolation orientation

### Strict logical ordering findings

- forward: `lem-complex-lp-completeness-density-and-inner-product` → `thm-holder-inequality-for-integrals` → `prop-essential-supremum-is-attained-as-the-least-essential-bound`
- forward: `lem-complex-lp-completeness-density-and-inner-product` → `thm-minkowski-inequality-for-integrals` → `prop-essential-supremum-is-attained-as-the-least-essential-bound`
- forward: `lem-complex-translation-and-approximate-identity-interfaces` → `thm-young-convolution-inequality` → `thm-generalized-holder-inequality-for-products` → `prop-essential-supremum-is-attained-as-the-least-essential-bound`
- forward: `thm-l-two-fourier-inversion` → `prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets` → `def-metric-bounded-diameter` → `rem-sup-conventions` → `fs-every-set-has-sup`
- forward: `thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space` → `def-ck-and-multi-index-notation-in-several-variables` → `def-finite-sum` → `lem-of-q-embeds` → `def-field-homomorphism` → `lem-of-inverse-unique`

### Missing earlier suppliers at the graph snapshot

- `def-hilbert-schmidt-operator` → `def-hilbert-space`
- `def-extreme-point-and-face` → `def-locally-convex-topological-vector-space`
- `lem-orthogonal-complement-of-an-eigenspace-is-invariant` → `def-orthogonality-and-orthogonal-complement`
- `lem-spectrum-of-a-self-adjoint-operator-is-real` → `def-self-adjoint-positive-unitary-and-normal-operator`
- `thm-lidskii-for-trace-class-operators` → `lem-fa5-generalized-eigenspace-trace-decomposition`
- `thm-lidskii-for-trace-class-operators` → `lem-fa5-quasinilpotent-trace-class-has-zero-trace`
- `lem-spectrum-of-a-self-adjoint-operator-is-real` → `lem-kernel-range-orthogonality-for-hilbert-adjoints`
- `lem-weak-and-strong-additivity-of-orthogonal-projections` → `lem-orthogonal-projection-is-linear-self-adjoint-contractive`
- `lem-finite-bessel-inequality` → `lem-pythagorean-theorem-and-finite-orthogonal-sums`
- `lem-laplace-resolvents-of-a-unitary-group` → `thm-bochner-dominated-convergence`
- `ex-spectral-projection-of-an-isolated-eigenvalue-agrees-with-the-riesz-projection` → `thm-bounded-linear-maps-commute-with-bochner-integration`
- `lem-norm-of-a-self-adjoint-operator-from-its-quadratic-form` → `thm-cauchy-schwarz-in-an-inner-product-space`
- `thm-parseval-equivalences-for-a-complete-orthonormal-family` → `thm-double-orthogonal-complement-is-closure`
- `def-c-star-algebra-generated-by-a-normal-operator` → `thm-hilbert-adjoint-properties`
- `thm-numerical-radius-is-an-equivalent-operator-norm` → `thm-jordan-von-neumann-polarization`
- `cor-bauer-maximum-principle` → `thm-locally-convex-continuous-dual-separates-points`
- `thm-krein-milman-closed-convex-hull-form` → `thm-locally-convex-strict-separation`
- `thm-spectral-theorem-for-compact-self-adjoint-operators` → `thm-orthogonal-decomposition-by-a-closed-subspace`
- `def-adjoint-of-a-densely-defined-unbounded-operator` → `thm-riesz-representation-for-hilbert-space`
- `thm-weakly-convergent-sequences-are-norm-bounded` → `thm-sequential-uniform-boundedness-under-countable-choice`

### Final whole-run content-policy errors

```text
ERROR batch-dependency-missing [thm-weakly-convergent-sequences-are-norm-bounded]: thm-weakly-convergent-sequences-are-norm-bounded depends on thm-sequential-uniform-boundedness-under-countable-choice, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-extreme-point-and-face]: def-extreme-point-and-face depends on def-locally-convex-topological-vector-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-krein-milman-existence-of-extreme-points]: thm-krein-milman-existence-of-extreme-points depends on thm-locally-convex-continuous-dual-separates-points, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-krein-milman-closed-convex-hull-form]: thm-krein-milman-closed-convex-hull-form depends on thm-locally-convex-strict-separation, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [cor-bauer-maximum-principle]: cor-bauer-maximum-principle depends on thm-locally-convex-continuous-dual-separates-points, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-milman-converse-for-compact-generating-sets]: thm-milman-converse-for-compact-generating-sets depends on def-locally-convex-topological-vector-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]: def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis depends on def-hilbert-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]: def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis depends on def-orthogonality-and-orthogonal-complement, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-finite-bessel-inequality]: lem-finite-bessel-inequality depends on lem-pythagorean-theorem-and-finite-orthogonal-sums, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums]: lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums depends on lem-pythagorean-theorem-and-finite-orthogonal-sums, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums]: lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums depends on thm-cauchy-schwarz-in-an-inner-product-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums]: lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums depends on def-hilbert-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-parseval-equivalences-for-a-complete-orthonormal-family]: thm-parseval-equivalences-for-a-complete-orthonormal-family depends on thm-double-orthogonal-complement-is-closure, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-l-two-with-the-integral-pairing-is-a-hilbert-space]: lem-l-two-with-the-integral-pairing-is-a-hilbert-space depends on def-hilbert-space, which is neither declared by this batch nor an item on disk
ERROR batch-forward-dependency [ex-hilbert-schmidt-kernel-operator-is-compact-on-l-two]: ex-hilbert-schmidt-kernel-operator-is-compact-on-l-two depends on later item def-hilbert-schmidt-operator (compact-self-adjoint-hilbert-schmidt-and-trace-class-operators)
ERROR batch-forward-dependency [ex-hilbert-schmidt-kernel-operator-is-compact-on-l-two]: ex-hilbert-schmidt-kernel-operator-is-compact-on-l-two depends on later item thm-l-two-kernels-give-hilbert-schmidt-operators (compact-self-adjoint-hilbert-schmidt-and-trace-class-operators)
ERROR batch-forward-dependency [ex-hilbert-schmidt-kernel-operator-is-compact-on-l-two]: ex-hilbert-schmidt-kernel-operator-is-compact-on-l-two depends on later item thm-hilbert-schmidt-operators-are-compact (compact-self-adjoint-hilbert-schmidt-and-trace-class-operators)
ERROR batch-dependency-missing [lem-norm-of-a-self-adjoint-operator-from-its-quadratic-form]: lem-norm-of-a-self-adjoint-operator-from-its-quadratic-form depends on def-self-adjoint-positive-unitary-and-normal-operator, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-norm-of-a-self-adjoint-operator-from-its-quadratic-form]: lem-norm-of-a-self-adjoint-operator-from-its-quadratic-form depends on thm-hilbert-adjoint-properties, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-norm-of-a-self-adjoint-operator-from-its-quadratic-form]: lem-norm-of-a-self-adjoint-operator-from-its-quadratic-form depends on thm-cauchy-schwarz-in-an-inner-product-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal]: lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal depends on def-self-adjoint-positive-unitary-and-normal-operator, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-orthogonal-complement-of-an-eigenspace-is-invariant]: lem-orthogonal-complement-of-an-eigenspace-is-invariant depends on def-self-adjoint-positive-unitary-and-normal-operator, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-orthogonal-complement-of-an-eigenspace-is-invariant]: lem-orthogonal-complement-of-an-eigenspace-is-invariant depends on def-orthogonality-and-orthogonal-complement, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-spectral-theorem-for-compact-self-adjoint-operators]: thm-spectral-theorem-for-compact-self-adjoint-operators depends on thm-orthogonal-decomposition-by-a-closed-subspace, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-positive-square-root-of-a-compact-positive-operator]: lem-positive-square-root-of-a-compact-positive-operator depends on def-self-adjoint-positive-unitary-and-normal-operator, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-absolute-value-and-singular-values-of-a-compact-operator]: def-absolute-value-and-singular-values-of-a-compact-operator depends on thm-hilbert-adjoint-properties, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-singular-value-decomposition-for-compact-operators]: thm-singular-value-decomposition-for-compact-operators depends on thm-hilbert-adjoint-properties, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-hilbert-schmidt-operator]: def-hilbert-schmidt-operator depends on def-hilbert-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-hilbert-schmidt-norm-is-basis-independent]: thm-hilbert-schmidt-norm-is-basis-independent depends on thm-hilbert-adjoint-properties, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-lidskii-for-trace-class-operators]: thm-lidskii-for-trace-class-operators depends on lem-fa5-quasinilpotent-trace-class-has-zero-trace, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-lidskii-for-trace-class-operators]: thm-lidskii-for-trace-class-operators depends on lem-fa5-generalized-eigenspace-trace-decomposition, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-bounded-hilbert-operators-form-a-c-star-algebra]: lem-bounded-hilbert-operators-form-a-c-star-algebra depends on thm-hilbert-adjoint-properties, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-spectrum-of-a-self-adjoint-operator-is-real]: lem-spectrum-of-a-self-adjoint-operator-is-real depends on thm-hilbert-adjoint-properties, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-spectrum-of-a-self-adjoint-operator-is-real]: lem-spectrum-of-a-self-adjoint-operator-is-real depends on lem-kernel-range-orthogonality-for-hilbert-adjoints, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-spectrum-of-a-self-adjoint-operator-is-real]: lem-spectrum-of-a-self-adjoint-operator-is-real depends on def-self-adjoint-positive-unitary-and-normal-operator, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-order-on-bounded-self-adjoint-operators]: def-order-on-bounded-self-adjoint-operators depends on def-self-adjoint-positive-unitary-and-normal-operator, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-c-star-algebra-generated-by-a-normal-operator]: def-c-star-algebra-generated-by-a-normal-operator depends on thm-hilbert-adjoint-properties, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-isometry-coisometry-and-partial-isometry]: def-isometry-coisometry-and-partial-isometry depends on thm-hilbert-adjoint-properties, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-isometry-coisometry-and-partial-isometry]: def-isometry-coisometry-and-partial-isometry depends on thm-orthogonal-decomposition-by-a-closed-subspace, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-partial-isometry-characterizations]: thm-partial-isometry-characterizations depends on lem-kernel-range-orthogonality-for-hilbert-adjoints, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-partial-isometry-characterizations]: thm-partial-isometry-characterizations depends on thm-orthogonal-decomposition-by-a-closed-subspace, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-numerical-range-and-numerical-radius]: def-numerical-range-and-numerical-radius depends on def-hilbert-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-numerical-radius-is-an-equivalent-operator-norm]: thm-numerical-radius-is-an-equivalent-operator-norm depends on thm-jordan-von-neumann-polarization, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-polynomial-calculus-is-isometric-for-self-adjoint-operators]: lem-polynomial-calculus-is-isometric-for-self-adjoint-operators depends on thm-hilbert-adjoint-properties, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-absolute-value-of-a-bounded-operator]: def-absolute-value-of-a-bounded-operator depends on thm-hilbert-adjoint-properties, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-polar-decomposition-for-bounded-operators]: thm-polar-decomposition-for-bounded-operators depends on thm-orthogonal-decomposition-by-a-closed-subspace, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-toeplitz-hausdorff]: thm-toeplitz-hausdorff depends on thm-orthogonal-decomposition-by-a-closed-subspace, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-projection-valued-measure]: def-projection-valued-measure depends on def-hilbert-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-projection-valued-measure]: def-projection-valued-measure depends on thm-hilbert-adjoint-properties, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-weak-and-strong-additivity-of-orthogonal-projections]: lem-weak-and-strong-additivity-of-orthogonal-projections depends on lem-orthogonal-projection-is-linear-self-adjoint-contractive, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-scalar-and-complex-measures-from-a-pvm]: lem-scalar-and-complex-measures-from-a-pvm depends on thm-cauchy-schwarz-in-an-inner-product-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-bounded-borel-pvm-integral]: thm-bounded-borel-pvm-integral depends on def-hilbert-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-positive-continuous-calculus-yields-a-regular-pvm]: lem-positive-continuous-calculus-yields-a-regular-pvm depends on thm-riesz-representation-for-hilbert-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-maximal-orthogonal-family-of-cyclic-reducing-subspaces]: lem-maximal-orthogonal-family-of-cyclic-reducing-subspaces depends on thm-orthogonal-decomposition-by-a-closed-subspace, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-stone-resolvent-formula-for-spectral-projections]: thm-stone-resolvent-formula-for-spectral-projections depends on thm-bounded-linear-maps-commute-with-bochner-integration, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [ex-spectral-projection-of-an-isolated-eigenvalue-agrees-with-the-riesz-projection]: ex-spectral-projection-of-an-isolated-eigenvalue-agrees-with-the-riesz-projection depends on thm-bounded-linear-maps-commute-with-bochner-integration, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-unbounded-linear-operator-domain-and-graph]: def-unbounded-linear-operator-domain-and-graph depends on def-hilbert-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-adjoint-of-a-densely-defined-unbounded-operator]: def-adjoint-of-a-densely-defined-unbounded-operator depends on thm-riesz-representation-for-hilbert-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-closable-iff-adjoint-domain-is-dense]: thm-closable-iff-adjoint-domain-is-dense depends on thm-double-orthogonal-complement-is-closure, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-cayley-correspondence]: thm-cayley-correspondence depends on thm-hilbert-adjoint-properties, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-strongly-continuous-one-parameter-unitary-group]: def-strongly-continuous-one-parameter-unitary-group depends on def-hilbert-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-laplace-resolvents-of-a-unitary-group]: lem-laplace-resolvents-of-a-unitary-group depends on thm-bochner-dominated-convergence, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-laplace-resolvents-of-a-unitary-group]: lem-laplace-resolvents-of-a-unitary-group depends on thm-bounded-linear-maps-commute-with-bochner-integration, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-von-neumann-self-adjoint-extension-parameterization]: thm-von-neumann-self-adjoint-extension-parameterization depends on thm-double-orthogonal-complement-is-closure, which is neither declared by this batch nor an item on disk
ERROR batch-forward-dependency [ex-momentum-operator-under-the-fourier-transform]: ex-momentum-operator-under-the-fourier-transform depends on later item thm-plancherel (schwartz-space-and-the-plancherel-theorem)
ERROR batch-forward-dependency [ex-momentum-operator-under-the-fourier-transform]: ex-momentum-operator-under-the-fourier-transform depends on later item thm-fourier-transform-maps-schwartz-space-continuously-to-itself (schwartz-space-and-the-plancherel-theorem)
content-policy: 560 scoped item(s), 66 error(s), 0 warning(s)
```

### Input and output fingerprints

- `CLAUDE.md`: SHA256 `b27e9d28fedc5267faf6824b4bc2e2f1b8f269148e01eeb5344e513fe6d9f48c`
- `SCHEMA.md`: SHA256 `2379b8061a5838b36d7270acbbdb8ace0793572de1027f1b8ecef12450da4fb4`
- `WORKFLOW.md`: SHA256 `6e59892a0c15b36bffb420f903b14ee4bf1e42047288bcada60a73e0b93bc8e2`
- `research/plan-spec.json`: SHA256 `daddd3754adbe449a54bc9a359a44715bdc50595fbb79de00569389cb08f890a`
- `research/plan-functional-analysis-track.md`: SHA256 `8efac88e23b6a6581ad90df6f92782762d223631b1b8e869593eb0d2450cd814`
- `research/plan-fourier-analysis-track.md`: SHA256 `260b273e7f4ebbfe07913ca17eab1bebaa2889e52f92f6cb28a67073cd6e9bc3`
- `research/plan-complex-analysis-track.md`: SHA256 `79de4b651c957b1431f15a797bae4cf40f68a2b50fc3179a0988d69d34099dd8`
- `research/frontier-34-fa-prereqs-batch-8.pages.json`: SHA256 `6dc5e0fd0b598658ac6f61bd5b2df6d972d956d68315f781eab402d29ac9793b`
- `research/frontier-34-fa-prereqs-batch-8.coverage.json`: SHA256 `735f5d2d49fa7fedd257fa8bf478747720b1edc5683f987a714069f0f567a079`

Run-manifest fingerprints at the corrected graph snapshot (concurrent writes may make later files differ):

- `research/frontier-34-fa-prereqs-batch-1.pages.json`: `11cc83c2ea2b4c137463d797f5079307aa4a87c61a02b6e5ef52787739954d06`
- `research/frontier-34-fa-prereqs-batch-2.pages.json`: `2d18364b9bb49d4738b1222aa96b3192c772a1fbb29d66d5981dfc0d1d597c81`
- `research/frontier-34-fa-prereqs-batch-3.pages.json`: `4eeebb3fa598e36067cdba6ad61fde6363c6b404602d745a990b344ab7868118`
- `research/frontier-34-fa-prereqs-batch-4.pages.json`: `af8838c7e9b41a04a34a3cc82615214aa7002e56819f9db5226ec7e540dbe883`
- `research/frontier-34-fa-prereqs-batch-5.pages.json`: `abf8d66766b2100034bfe39e42fad09ee4179fc3d70410cfbcf02cbf02dfee39`
- `research/frontier-34-fa-prereqs-batch-6.pages.json`: `aa2a032fde7a22d6d001636c531bf2a3df25b8c6620a6b14825f214823e80355`
- `research/frontier-34-fa-prereqs-batch-7.pages.json`: `5ca130206233cb274639e61272a59ea3455d34f9f02efcbeb101200ba4ea29b3`
- `research/frontier-34-fa-prereqs-batch-8.pages.json`: `1e357d4410c863100e7a3522416058bedff2c4fbadadf0974aede2271b2a9b82`
- `research/frontier-34-fa-prereqs-batch-9.pages.json`: `eeb788487301401aefd2a185208c05d68ef4e337feaf1f81c8f69067cc2fa2e9`

On handoff, reread the current manifest, coverage, dependency suppliers and all open obligations. Recompute against current upstream inventories; do not treat these snapshot counts as controller state. All fatal findings must be discharged before readiness.

Final inventory consistency check: all 57 owned IDs are absent from published item filenames; every owned item has an explicit deps array; no final content-policy error names an owned item. This does not cancel the recorded upstream and semantic blockers. The ten proposed new prerequisite page/item IDs have no collision in the plan, published items, or current run manifests; proposed orders 288.0341 and 288.0342 are unused. The three proposed relocated IDs remain staged only in this batch, pending an authorized atomic move.
