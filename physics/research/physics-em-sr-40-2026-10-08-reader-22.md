# Reader 22 — batch 22

Run: `physics-em-sr-40-2026-10-08`. Scope: the assigned A/B pair. This report records independent reading and scoped repairs; it is not a judge stamp, publication decision, or whole-library audit.

## Opened inventory

Read `../CLAUDE.md`, local `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md` including statistical-evidence guidance, `briefs/reader.md`, the run owner direction, batch-22 manifest inventory, cross-batch ledger, proof contracts, and relevant pinned-import records in `research/math-imports.json`. Initially truncated combined instruction output was completed with bounded reads. Contract citation clauses were rendered with the evidence-bundle module's `citedClauses` and matched to opened source sections. Author decisions and earlier ledger verdicts were treated as evidence, not mathematical acceptance.

Assigned pages, opened completely:

- `library/classical-electromagnetism-mathematics/em-retarded-point-prerequisites.md` (A).
- `library/classical-electromagnetism-mathematics/em-retarded-point-prerequisites-examples.md` (B, prose read-only).

Assigned items, opened completely, theorem before its example consumer:

- `items/thm-em-retarded-root-and-fields.md`: title, metadata, four Statement clauses, all facts and proof steps.
- `items/ex-em-wave-equation-prerequisites-hypothesis-boundaries.md`: title, metadata, three Example clauses, all facts and verification steps.

Substantial suppliers opened completely before completing the assigned consumer check:

- `items/def-em-potential-gauge-and-field-conventions.md`.
- `items/lem-em-global-retarded-root.md`.
- `items/lem-em-point-current-continuity.md`.
- `items/lem-em-point-retarded-potential-and-fields.md`.
- `items/lem-em-retarded-wave-kernel.md`.
- `items/thm-em-wave-cauchy-kirchhoff.md`.

Additional suppliers opened at the relevant Definition/Statement interfaces (and displayed facts where applicable), without claiming full proof audits:

- `items/cor-c-one-change-of-variables-for-l-one-functions.md`.
- `items/cor-continuous-functions-are-borel-measurable.md`.
- `items/cor-differentiable-implies-continuous.md`.
- `items/cor-mean-value-theorem.md`.
- `items/cor-vector-valued-ftc-and-lipschitz-bound.md`.
- `items/def-borel-and-lebesgue-measurable-function-on-rn.md`.
- `items/def-ck-and-multi-index-notation-in-several-variables.md`.
- `items/def-ck-euclidean-maps-and-diffeomorphisms.md`.
- `items/def-continuity-real.md`.
- `items/def-countable-choice.md`.
- `items/def-cross-product-in-r3.md`.
- `items/def-directional-and-partial-derivatives.md`.
- `items/def-distribution.md`.
- `items/def-distributional-derivative.md`.
- `items/def-divergence-and-curl-of-a-c1-vector-field.md`.
- `items/def-euclidean-inner-product.md`.
- `items/def-fixed-support-test-function-frechet-space.md`.
- `items/def-jacobian-matrix-and-gradient.md`.
- `items/def-laplacian-of-a-c2-function.md`.
- `items/def-regular-distribution-from-a-locally-integrable-function.md`.
- `items/def-test-function-space-d-of-an-open-set.md`.
- `items/def-test-function-topology.md`.
- `items/def-vector-valued-derivative-and-integral.md`.
- `items/def-wave-energy-and-energy-flux.md`.
- `items/def-wave-equation-cauchy-data-and-wave-speed.md`.
- `items/lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness.md`.
- `items/lem-cross-product-is-bilinear-alternating-and-orthogonal.md`.
- `items/lem-euclidean-balls-have-positive-finite-lebesgue-measure.md`.
- `items/lem-reverse-triangle-inequality-in-a-normed-space.md`.
- `items/prop-order-and-scalar-rules-for-the-nonnegative-integral.md`.
- `items/thm-algebra-of-derivatives.md`.
- `items/thm-borel-products-of-euclidean-spaces-are-euclidean-borel.md`.
- `items/thm-borel-sets-are-lebesgue-measurable.md`.
- `items/thm-cauchy-schwarz-and-the-euclidean-norm.md`.
- `items/thm-chain-rule-for-total-derivatives.md`.
- `items/thm-ck-euclidean-maps-closed-under-algebra-and-composition.md`.
- `items/thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces.md`.
- `items/thm-integral-triangle-inequality.md`.
- `items/thm-intermediate-value.md`.
- `items/thm-lebesgue-measure-of-a-box-of-every-kind.md`.
- `items/thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets.md`.
- `items/thm-local-finite-order-characterization-of-distributions.md`.
- `items/thm-nonnegative-integral-zero-iff-zero-almost-everywhere.md`.
- `items/thm-parametrized-implicit-function-theorem-with-higher-regularity.md`.
- `items/thm-polar-coordinates-formula-for-lebesgue-measure.md`.
- `items/thm-real-power-continuity-and-derivatives.md`.
- `items/thm-tonelli-theorem-for-sigma-finite-product-spaces.md`.

Also opened the producer's `research/physics-em-sr-40-2026-10-08-step5-hash-21-pre.json` after source drift, and the relevant reader-21 checkpoint. Current point-potential Facts F2/F14 and Proof 1.5/4.1/5.1, and current kernel Proof 5.1, were then opened to check the concurrent corrections directly.

## Independent deductions checked

The theorem's hypotheses imply `0 <= v_* < c` from the derivative norm at zero. The root supplier proves global existence via the all-time Lipschitz bound and intermediate value theorem, strict uniqueness via reverse triangle inequality, and matching C^k root regularity using the squared-equation implicit function theorem. At an instantaneous graph event the root is `s=t`; off that graph it is strictly earlier. The event domain does not exclude spatial points visited at other times. Differentiating the emission map gives `1-n·z'(s)/c=κ`, with positive uniform lower bound.

The point-potential proof bounds history on a finite cylinder depending on the observation-test support. The map `(s,w) -> (z(s)+w,s+|w|/c)` has absolute Jacobian κ and is a C^1 diffeomorphism off `w=0`; the substitution gives the exact `(κr)^-1` pairing. The same bound and graph nullity establish locally integrable zero extensions. Choice qualifications are carried through the polar, product-measure, measurability and substitution interfaces. The vector prefactor is `μ0qc/(4π)=C/c` under `μ0c²ε0=1`.

Recomputed the retarded derivatives of `D=κr=r-R·β`, the acceleration numerator `d(n-β)-κ dotβ`, and `B=n×E/c`, using the explicit coordinate cross product. The velocity estimate uses `|1-|β|²| <= 1`, `|n-β| <= 1+v_*/c` and the lower bound for κ. On every specified ray, uniqueness gives the exact root s0 and excludes the graph. The remainder is exactly the velocity field; its bound multiplied by r proves the direction-uniform rate. No acceleration bound, self-force, singular self-work, finite energy, radiation flux, physical Maxwell coupling or empirical assertion is supplied by this mathematics.

For the example, differentiated the travelling profile to obtain `u_tt=c²f''`, `Δu=f''`, and `Wu=0`. The nonzero set is unbounded in transverse directions, and a positive-profile interval gives the box lower bound growing as `(2R)²`. Infinite wave energy is independently established from a nonzero derivative-profile interval, obtained by the mean value theorem; it does not follow merely from infinite displacement L² norm. The zero profile is handled separately. For the explicit positive square-root curve, speed is below c at each finite time but tends to c; the origin root equation contradicts `a>0` after squaring. The on-graph root is exactly `s=t`. These are conditional mathematical computations with no observations or statistical inference.

## Every local edit and its evidence

1. **A-page clause-(b) summary.** Replaced “locally integrable C² zero extensions” with C² functions off the graph whose zero extensions are locally integrable and define regular distributions. Both opened item Statements distinguish these properties. A nonzero static source gives `φ=C/|x|`, whose zero extension is not even continuous on the graph; the original prose was false.

2. **Theorem Facts F3.** Replaced the ambiguous “multi-index sense” by the exact word-derivative definition, including continuity and the zero-length word. The opened C^k supplier explicitly uses words and does not presuppose mixed-partial interchange. Updated its step-1.1 proof-contract derivation. The public Statement and field conclusions are unchanged.

3. **Example Facts F13 and Verification 1.2.** The power theorem supplies continuity and a first derivative, not an explicit smoothness clause. Removed the unsupported smoothness attribution and proved it locally: repeated differentiation gives the m-th derivative of `y^(1/2)` as the finite product of `(1/2-j)` times `y^(1/2-m)`, continuous for `y>0`. The positive polynomial `c²s²+a²` then composes with the proved smooth square root. Added the real-valued map type and compact-support meaning of `C_c^∞(R)`. Updated the step-1.2 contract derivation and positive-domain boundary evidence. No original curve, root boundary, or wave conclusion was weakened.

The affected contract is `research/physics-em-sr-40-2026-10-08-batch-22.proof-contracts.json`. Neither changed item contained a judge record to remove; none was added. No physical public interface changed. The example definition expansion introduces no consuming prerequisite. No another-batch carrier, import, mathematical original, B-page prose, plan, or publication field was edited.

## Defects outside edit scope and concurrent correction

Three defects were observed in batch-21 draft suppliers directly consumed by `thm-em-retarded-root-and-fields`:

- `lem-em-point-retarded-potential-and-fields`, Facts F2: `r=x-z(s)` is a vector/scalar type error. The actual root Statement says `r=|x-z(s)|`; the point-potential Statement likewise distinguishes R from r. The malformed recorded fact requires correction, not merely a short omitted proof step. Classified fatal ill-formed on the observed source.
- The same supplier, final Proof 5.1: QED preceded the trailing tags, contrary to the required `[tags] ∎` source form. Classified nonfatal ill-formed; the field algebra is readable.
- `lem-em-retarded-wave-kernel`, final Proof 5.1: the same QED-before-tags source violation. Classified nonfatal ill-formed; no invalid kernel deduction is alleged.

The rendered proof-layout tool originally reported zero defects for these suppliers, so the last two findings concern the explicit source-format rule, not missing blue chips.

While preparing the report, another writer corrected all three locations. Direct current reading confirms restored norm bars and QED after tags. The point-potential supplier additionally removes the unsupported triple-product attribution from F14 and supplies the coordinate expansion in new step 1.5, cited in step 4.1; its first-component expansion and cyclic completion were independently checked. These changes preserve the supplier Statement and the assigned theorem's uses. Reader-21's checkpoint corroborates the repair ownership but is not the basis of this conclusion.

- `lem-em-point-retarded-potential-and-fields`: observed/pre `281ee0f8f4a5e60520c9c52ffe449f91be1b0f44962421666fa856033e33d1ef`; corrected current `912d5efcd4ee4a2743989e2c649be2f88135cdfee11d1143bb3c22c5e718833d`.
- `lem-em-retarded-wave-kernel`: observed/pre `267d454c7e95cbbc862833f9a1e8da4aee9592495b7a8fe227c2139fdf6a250f`; corrected current `15785b4b6e5310671be54dc9fef4c320ff6a069f01f20ddf90761608c4ea9e00`.

The old hashes were computed directly from the source bytes read during this review, before the concurrent corrections. They exactly match the producer's immutable pre-reader fingerprint. Historical observations are therefore routed with `observed_source.snapshot: pre`, never with the corrected current hash. The findings evidence explicitly records that current text is corrected. There is no missing-byte limitation for these observations, and no remaining current defect is alleged at these locations.

## Source reading and limits

Read [David Tong, Electromagnetism](https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf), §§6.4.1 and 6.4.3, printed pp. 158–159 and 161–164, equations (6.33)–(6.36) and (6.38)–(6.45). These support the emission Jacobian, potential prefactors, field split and magnetic relation. The stronger global hypotheses and rigorous distributional pairings are established locally. The PDF identifies Lent Term 2015; this report does not certify a separate edition year. The DAMTP web URL timed out; the alternate cited author-hosted PDF was successfully read via the web PDF extractor. Local download succeeded, but local text extraction was unavailable and supplies no separate reading claim. Landau/Lifshitz and Griffiths were not retrieved; whole source books and all transitive imported proofs were not audited.

## Validation and page verdicts

Reflow reported unchanged on each changed item. Each required precheck passed (direct, one checked, zero failing). After the final item edits and reflow, the single batched proof-layout command on both changed items reported **2 items, 15 steps, 0 defects**. Scoped rendercheck on both changed items and the changed A page reported **3 files OK**, with actual KaTeX and YAML parsing. Strict proof-contract checking restricted to the two assigned IDs reported **0 errors, 0 warnings, 2/2 checked**. The post-correction read-only supplier proof-layout check reported **2 items, 21 steps, 0 defects**. These are mechanical checks, not independent mathematical audits or empirical certainty.

**A — `em-retarded-point-prerequisites`: repaired, no unresolved current defect identified.** All four conditional claims are supported; its zero-extension summary and exact internal regularity definition are repaired. Historical supplier defects are recorded with pre-source binding and their current corrections.

**B — `em-retarded-point-prerequisites-examples`: assigned item repaired, prose requires no edit.** All three computations and the separate infinite-energy argument are supported after explicitly deriving square-root smoothness. Supplier corrections were checked in the relevant closure.

No remaining blocker or proposed withdrawal. Coverage is the complete assigned content, named supplier interfaces and full local proofs above, with targeted current-supplier correction checks; it is not a full transitive library audit. Historical uneditable observations are in `research/physics-em-sr-40-2026-10-08-reader-findings-22.json`. Repaired reader-owned carriers are excluded from that array.
