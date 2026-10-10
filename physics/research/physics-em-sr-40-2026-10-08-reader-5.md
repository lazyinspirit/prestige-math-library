# Reader 5 — batch 5

Run: `physics-em-sr-40-2026-10-08`. This is an independent Step 5a reading and repair report, not a judge stamp, publication audit, or proof of empirical applicability. No content outside this batch was edited.

## Opened inventory

Rules read: `../CLAUDE.md`, local `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md` including statistical guidance, and `briefs/reader.md`. Also opened the exact batch manifest, current proof contracts, relevant owner direction, relevant records of `research/math-imports.json`, and the batch-1/3/5 pre-reader fingerprint records. Author/source-retrieval records were used only for navigation and provenance, not as verdicts.

Pages read in full:

- `library/special-relativity/sr-causality-and-signals.md` (A).
- `library/special-relativity/sr-causality-and-signals-examples.md` (B).

All sixteen assigned carriers were read, suppliers before consumers. The definition and coordinate-cone lemma preceded the reachability theorem and physical conclusions; the boost-family lemma preceded its examples; the mathematical relay example was checked independently of the physical thought experiment. The item inventory is:

- `items/def-sr-causal-reachability-in-affine-minkowski-space.md` — unchanged.
- `items/lem-sr-future-causal-sums-and-inertial-coordinate-criterion.md` — unchanged.
- `items/thm-sr-future-cone-and-flat-domain-of-dependence.md` — repaired.
- `items/lem-sr-spacelike-pairs-have-frame-dependent-time-order.md` — repaired.
- `items/post-sr-causal-signal-propagation.md` — repaired.
- `items/pthm-sr-causal-signal-order-and-composition.md` — repaired.
- `items/texp-sr-superluminal-relay-antitelephone.md` — repaired.
- `items/ex-sr-causal-diamond-in-one-plus-one.md` — repaired.
- `items/ex-sr-null-legs-compose-to-a-timelike-displacement.md` — repaired.
- `items/ex-sr-parallel-null-displacements-compose-to-null.md` — unchanged.
- `items/ex-sr-boost-makes-spacelike-events-simultaneous.md` — unchanged.
- `items/cex-sr-spacelike-time-order-is-not-absolute.md` — unchanged.
- `items/cex-sr-null-separated-events-are-not-timelike-joinable.md` — unchanged.
- `items/ex-sr-causal-classification-of-explicit-displacements.md` — repaired.
- `items/ex-sr-superluminal-sweep-has-no-causal-connection.md` — unchanged.
- `items/ex-sr-antitelephone-relay-arrival-time.md` — repaired.

Supplier context opened (exact definitions/statements and relevant proof arguments; this is not a whole-library transitive audit):

- `items/cor-differentiable-implies-continuous.md`.
- `items/cor-mean-value-theorem.md`.
- `items/cor-triangle-inequality-for-inner-product-norm.md`.
- `items/cor-vector-valued-ftc-and-lipschitz-bound.md`.
- `items/cor-zero-derivative-implies-constant.md`.
- `items/def-affine-space-and-displacement.md`.
- `items/def-causal-classification-of-lorentz-vectors.md`.
- `items/def-derivative.md`.
- `items/def-euclidean-inner-product.md`.
- `items/def-inertial-frame-and-inertial-chart.md`.
- `items/def-interval.md`.
- `items/def-linear-isomorphism-and-invertible-linear-map.md`.
- `items/def-lorentz-boost.md`.
- `items/def-lorentz-form-and-inertia.md`.
- `items/def-lorentz-map-and-lorentz-group.md`.
- `items/def-oriented-integral.md`.
- `items/def-spatial-euclidean-structure-of-an-inertial-frame.md`.
- `items/def-sr-affine-minkowski-model.md`.
- `items/def-sr-piecewise-proper-time.md`.
- `items/def-sr-proper-time.md`.
- `items/def-sr-regular-causal-curve-and-worldline.md`.
- `items/def-sr-si-units-and-coordinate-conventions.md`.
- `items/def-time-orientation-and-future-causal-sets.md`.
- `items/def-vector-valued-derivative-and-integral.md`.
- `items/def-vector-valued-functions-limits-and-continuity.md`.
- `items/lem-affine-minkowski-charts-form-a-smooth-atlas.md`.
- `items/lem-boost-is-proper-orthochronous-with-inverse.md`.
- `items/lem-euclidean-linear-maps-have-matrices-and-are-bounded.md`.
- `items/lem-future-oriented-inertial-frames-exist.md`.
- `items/lem-lorentz-form-has-orthonormal-basis.md`.
- `items/lem-lorentz-map-preserves-metric-and-causal-structure.md`.
- `items/lem-sr-weak-piecewise-causal-integrability.md`.
- `items/lem-timelike-cone-has-two-convex-components.md`.
- `items/post-sr-ideal-clocks-and-light.md`.
- `items/post-sr-inertial-covariance.md`.
- `items/pthm-sr-interval-and-cone-invariance.md`.
- `items/thm-additivity-over-subintervals.md`.
- `items/thm-algebra-of-continuous-functions.md`.
- `items/thm-continuous-implies-integrable.md`.
- `items/thm-ftc-second-part.md`.
- `items/thm-intermediate-value.md`.
- `items/thm-linearity-of-the-integral.md`.
- `items/thm-monotonicity-of-the-integral.md`.
- `items/thm-nonnegative-continuous-with-zero-integral-vanishes.md`.
- `items/thm-norm-inequality-for-the-vector-valued-integral.md`.
- `items/thm-real-power-continuity-and-derivatives.md`.
- `items/thm-sr-proper-orthochronous-lorentz-algebra.md`.
- `items/thm-unique-coordinates-with-respect-to-an-ordered-basis.md`.

Additional consumer review: `items/pthm-sr-rindler-horizons-and-radar.md` was opened in full to check uses of the changed signal formulation and reachability theorem; `items/pthm-em-general-wave-ivp.md` was opened at Statement (c) and [F10] for its precise reachability-supplier use. Neither carrier was edited. These are focused interface checks, not independent audits of their unrelated mathematics.

## Independent mathematical assessment and repairs

Conventions throughout: affine displacement space is four-dimensional; signature is `(-+++)`; `C+` is the open future timelike component and `cl(C+)` includes its null boundary and zero. “Causal vector” excludes zero. The curve class allows C1 derivatives only on open pieces with finite one-sided quotient tangents; continuous derivative limits at corners were not added. Truncated FTC, positivity of the time derivative and domination supply finite improper integrals. The proper-time maximum is proved in the rest frame of the endpoint displacement by integrating the pointwise density bound, with equality forcing constant spatial coordinates. No Choice or empirical premise enters these arguments.

Every local edit and its evidence:

1. **`lem-sr-spacelike-pairs-have-frame-dependent-time-order`, title.** Replaced “pure spatial separation in every inertial chart” with the actual spacelike coordinate inequality. The unchanged Statement (a) proves only `|D0|<|Ds|`; step 4.1 explicitly allows nonzero time differences. The worked pair `(11,13,0,0)` gives time differences 4 and -13/5 in the named frames, so the old title was stronger than the result.
2. **`thm-sr-future-cone-and-flat-domain-of-dependence`, title, Statement (b), [L3]/[L6]/new [L12], Proof 2.1/2.3/5.1.** Removed the undefined domain-of-dependence promise from the display title while preserving the existing ID and every valid stated conclusion. No subset of an initial hypersurface or inextendible-path definition was present, and scope (g) explicitly disclaims PDE statements. Made reflexivity/transitivity explicit using zero and finite cone sums (fulfilling the reachability definition's later-property reference). Separated `a'=b'` before invoking the nondegenerate path theorem; corrected the fact that called every compact interval nondegenerate. Added the exact published intermediate-value supplier, with continuity and endpoint values, to justify that the increasing equality-case parameter maps onto `[0,1]`. The maximum and full weak-curve equality class are preserved.
3. **`post-sr-causal-signal-propagation`, Postulate (i)–(ii).** Defined admitted endpoint pairs as a relation `T subset A x A`, with the adopted condition `T subset {(p,q):q in J+(p)}`. Explicitly stated that this is necessary and does not promise a transmitter for every causal pair. Qualified the null-light displacement clause to distinct endpoints. This formalizes the original only-if restriction without adding an existence or covariance postulate.
4. **`pthm-sr-causal-signal-order-and-composition`, title, Statement (iv)–(v), Proof 2.2–2.4.** The only-if signal postulate and cone invariance prove invariance of the necessary causal condition; they do not prove existence or invariance of an arbitrary separately selected transmission relation. Replaced those overclaims with the exact condition proved. Included coincident endpoints in the equivalence with observer-independent order, since the adopted restriction allows zero displacement. Included zero-leg and one-leg finite chains in the proof and contract rather than claiming that no finite-chain boundary exists. The future-order, strict relay, no-loop and spacelike exclusion claims remain intact.
5. **`texp-sr-superluminal-relay-antitelephone`, Statement S1/setup/(d), Given and dependency role.** Defined the hypothetical rays as smooth emitter-chart maps on nonnegative parameter intervals with constant spatial direction, and supplied full smooth future timelike transmitter worldlines on R, including zero transverse coordinates. Removed the causal restriction as a simultaneous Given premise of the incompatible S1–S4 model: it is introduced only as the contradiction supposition at step 5.1. Recorded its formulation role accordingly. Clarified the use of cone composition plus antisymmetry, and aligned the return-displacement direction with the calculation. Retained the exact arrival formula and strict threshold, immediate relay, positivity of the emitter-frame return parameter and all non-empirical qualifications.
6. **`ex-sr-causal-diamond-in-one-plus-one`, Example introductory conventions/(b)–(d), new [L6], Verification 1.1–3.1.** Restricted the parallelogram and area assertion to the planar section, leaving the full 4D diamond and interior calculations intact. Defined coordinate topology, the interval magnitude `sqrt(|eta(D,D)|)` (which is not a norm), numerical metre/conversion-factor conventions, and triangle area for the actual polygon triangulations. Supplied the explicit 2-Lipschitz coordinate-ball argument for the interior. Computed square area from four triangles instead of silently assuming the diagonal-area formula, and corrected a reversed spatial-diagonal direction. The boost area remains exactly 2 square metres for all `|b|<1` in the section plane.
7. **`ex-sr-null-legs-compose-to-a-timelike-displacement`, [L2]/[L3], Verification 3.1.** The cited cone-sum lemma did not prove the general strict result for nonparallel null summands. Added a local derivation: for `(a,p),(b,q)` future null, `eta(sum,sum)=-ab|p/a-q/b|^2`, strictly negative for nonparallel vectors. Declared the earlier Euclidean suppliers and attributed the general claim to this calculation. Expanded [L3] to include the actual tangent-to-displacement implication used at step 4.1. The explicit weak corner example and its non-equivalence conclusion are unchanged.
8. **`ex-sr-causal-classification-of-explicit-displacements`, [L2], Verification 2.3–2.4.** Restored the nonzero qualification in the future-causal vector criterion; corrected `-D_C=p-q_C`; and proved the strict reversed inequality for the companion, giving `q_E in I-(p)` as claimed rather than stopping at the weaker causal past. All integer values are retained.
9. **`ex-sr-antitelephone-relay-arrival-time`, Example/Given, Verification 1.1/5.1.** Made all numerical SI conventions explicit so a displayed factor `1/c` followed by seconds means `c` is the numerical speed in metres/second. Defined both full transmitter curves. Replaced the undefined “future spacelike” classification with “spacelike with positive time component in x,” and established strict chronological-past arrival by the strict cone criterion. The rational arrival value, both leg increments and squared intervals are unchanged.
10. **A-page prose.** Corrected the mistaken identification of `J±` as futures and `I±` as pasts; both signs mean future/past, with J causal and I chronological. Replaced the pure-spatial and transmission-existence descriptions with the exact proved inequality and necessary causal condition. B-page prose was not edited.
11. **Current batch proof contracts.** Updated derivation rows for changed proof carriers, added the new intermediate-value and Euclidean citations, corrected the affected zero/singleton/endpoint and planar-area boundaries, refreshed stale exact source excerpts (including excerpts affected by concurrent supplier repairs), and updated the nonproof formulation record. Prior independent author-review records were preserved; no new judgment or acceptance record was issued. Changed items contained no `verification.judge` entry to retain, and no judge stamp was added.

The seven unchanged items were checked for their stated witnesses and constructions. In particular: the cone-sum induction handles zero and the strict summand case; the parallel-null example proves both directions of the two-summand characterization using equality of normalized spatial vectors; the `(11,13)` boost example has spatial differences sqrt(48), 8 and 37/5; the two counterexamples supply the exact null and time-order witnesses; and the sweep formula freezes all events at boost parameter `c/w` without assuming signal transfer.

## Consumer/interface checks

The changed signal postulate still supplies exactly a necessary future-cone restriction. Its two assigned consumers were repaired/read after it. The other direct current-run consumer, `pthm-sr-rindler-horizons-and-radar`, uses this restriction only to exclude impossible radar legs ([L1], step 3.4); its positive radar construction uses its separate ideal-ray/reflector premises. It remains compatible. The causal theorem's additional transitivity and explicit equality-case justification preserve all original valid interfaces. The outside direct consumers `pthm-sr-rindler-horizons-and-radar` ([L5]) and `pthm-em-general-wave-ivp` (Statement (c), [F10]) use preserved straight-segment/cone/time-order claims, not the former undefined display-title promise. No outside edit was needed or authorized. No other current-run direct consumers of the physically changed assigned statements were found in the manifests. Exact current source snippets in the batch contracts were refreshed after the supplier owners' concurrent changes.

## Sources actually consulted

- BIPM, [SI defining constants](https://www.bipm.org/en/measurement-units/si-defining-constants): table row c and surrounding exactness/no-uncertainty statements. These establish the unit-definition qualification, not the physical truth of the ideal-light postulate.
- Carroll, [Lecture Notes on General Relativity](https://arxiv.org/pdf/gr-qc/9712019), printed pp. 6–7, equations (1.19)–(1.21) and light-cone classification; printed pp. 125–126, definition of D+(S) using all past-directed inextendible causal curves meeting S and the signal principle. Read through the web PDF extraction. This is the exact distinction between causal futures and domains of dependence that resolves the title issue.
- Crowell, [Special Relativity](https://archive.org/download/sr_20220102/sr.pdf), PDF/printed pp. 22–23 (§1.3.2, planar light rectangles), pp. 43–45 (§2.1, especially P1), pp. 110–113 (§4.7 starts p.111; qualified FTL/antitelephone discussion). Direct Archive.org web open failed; the exact previously recorded archive mirror was downloaded successfully and the named pages were independently extracted/read with PyMuPDF. Raw PDF SHA-256: `4c11e8f367267d537fd6ef9c35ec8cc2be2115eb8c2fee8c770cec67c0ba1369`.
- Tolman, [1917 book text](https://archive.org/download/theoryrelativmot00tolmrich/theoryrelativmot00tolmrich_djvu.txt), §52, printed pp.54–55, formulas (28)–(29) and the independently triggered blocks discussion (downloaded OCR lines 2973–3041). The web open failed but direct download succeeded. Raw OCR SHA-256: `83138ba2544cf7341b4e58ab9ab91a85ce275e99b74eda64338f029262ddb1f1`. Text/formula ordering is imperfect OCR; the relay formula was independently derived from the exact local Lorentz boost and is not attributed to a complete two-leg derivation in Tolman.

Only these relevant source sections were read; no full-book reading or Reall retrieval is claimed. No tachyon-search measurements were incorporated into any item.

## Defects outside edit scope and concurrent changes

The routing JSON retains all independently observed uneditable defects, including historical supplier defects subsequently repaired by their own batch writers. They are not alleged to remain in corrected current source. No supplier was edited by this reader.

- **`lem-sr-weak-piecewise-causal-integrability` — false-claim, fatal.** Location: Pre-reader ## Remarks, final bullet, displayed D in C+ minus {0}. Historically observed: the remark put every causal-path displacement in the open timelike cone C+, although Statement (d) permits null displacement. The straight path with coordinates (s,s,0,0), 0<=s<=1, satisfies all hypotheses and has null displacement (1,1,0,0). Required correction: cl(C+) minus {0}. A concurrent batch-3 writer has now made this correction; this finding binds the earlier personally observed and hashed pre bytes, not the corrected current bytes.
- **`lem-sr-weak-piecewise-causal-integrability` — citation-inaccurate, nonfatal.** Location: Pre-reader ## Proof, step 4.3, application of steps 3.1 and 3.2 to g=|z'| and g=f. Historically observed: steps 3.1 and 3.2 establish only the time-derivative integral; they do not establish the dominated-integrand limits invoked for |z'| and f. The immediately preceding steps 4.1 and 4.2 supply the missing general argument, so this is a nonfatal short citation omission. Required correction: invoke 4.1–4.2 and the domination/continuity in 3.3. The concurrent batch-3 repair now does so at current step 5.1.
- **`def-sr-si-units-and-coordinate-conventions` — false-claim, fatal.** Location: Pre-reader ## Definition, clause 1 and final Status paragraph: numerical value of c called empirical. Historically observed: the SI convention calls the numerical value of c an empirical parameter. BIPM, https://www.bipm.org/en/measurement-units/si-defining-constants, table row c and accompanying exactness statements fix c=299792458 m/s with no numerical uncertainty. Physical applicability and practical unit realizations remain empirical. Required correction: distinguish exact SI numerical convention from tested light-model interpretation. A concurrent batch-1 writer has now corrected these clauses; the bound bytes are the earlier observed pre version.
- **`post-sr-ideal-clocks-and-light` — false-claim, fatal.** Location: Pre-reader ## Postulate (ii), final sentence: numerical value of c called empirical. Historically observed: the final sentence calls the numerical value of c an empirical parameter despite adopting SI. BIPM defining-constants page fixes its SI value exactly; the ideal-light interpretation is a separate adopted model assumption. Required correction: carry the corrected SI qualification. A concurrent batch-1 writer has now corrected this sentence. The finding binds the earlier observed pre source, not current source.
- **`def-sr-proper-time` — false-claim, fatal.** Location: Historically observed ## Definition, Scope paragraph; ## Remarks, Well-definedness (iv). The initial source said that a null point makes the integral constant, and that changing base point s0 to s1 adds c^-1 integral(s0,s1). An isolated zero density does not imply constancy: the C1 coordinate curve (s,s-s^3/3,0,0), |s|<=1/2, has density |s|sqrt(2-s^2), zero only at 0. Changing base point subtracts the displayed integral, by oriented additivity; for c=1 and x(s)=p+s e0, the functions based at 0 and 1 are s and s-1. Both clauses have now been corrected by a concurrent batch-3 writer and the relevant current clauses were reread. No raw hash was independently captured for the initial observation of this particular supplier; observed_source is null and the producer baseline alone is not claimed as an observation binding.
- **`sr-causality-and-signals-examples` — overstrong-title-or-statement, fatal.** Location: Body, first paragraph, sentence beginning The causal diamond J+(p) intersection J-(q), ending invariant coordinate area 2 m^2. The prose attaches a two-dimensional coordinate area to the full diamond in four-dimensional A without restricting to x2=x3=0. The item now explicitly computes the full diamond in (a) and the planar section and its area in (b)–(c). For example x^-1(1,0,1/2,0) is in the full diamond and outside that section. Required repair: say that the 1+1 section has area 2 m^2 and that this area is invariant under boosts in its (0,1) plane. B-page prose is outside reader edit authority and remains byte-identical to the pre snapshot.

The three independently captured initial raw hashes listed below match their producers' immutable pre-reader fingerprint records. This binding is based on the actual session observation and hash capture, not just on the stored baseline. The proper-time initial observation has no independently captured raw hash and remains explicitly unbound. Current corrected clauses were reread before handoff.

| Outside supplier | Observed initial raw SHA-256 | Latest reread raw SHA-256 |
|---|---|---|
| `lem-sr-weak-piecewise-causal-integrability` | `676b08de86e7407df6fe541cf3541e78e3223ae39d8c4914b85a42af532fcfde` | `1e26aa0ebbecfa5bbae98cf1dbb3c49fb2c0201ab384c6453943b8fd5683ac02` |
| `def-sr-si-units-and-coordinate-conventions` | `da887998c9dde9875a57ea4241a09afa8ad5e85a232407e63664eaba9a86fb26` | `083ed42bffb1207a3bfa1ab067cad6ea78d32e7ae434e8401a146faaa268deaa` |
| `post-sr-ideal-clocks-and-light` | `3b204ec83ed6ca7c7551fc11698dff4fca748d656bed60653f938f0437080661` | `3f69ebfcd81c72a51574fd5ccf0cb991305ef9fad61e96458c90d688c892594e` |
| `def-sr-proper-time` | `not captured` | `d2ce1fab5dae3e67bb8abb21bbe84983cc086911f579f69b8ba37bc17f162930` |

Closing supplier drift was also read as an exact section diff: the proper-time supplier now explicitly qualifies worldline reparametrization invariance by everywhere-positive derivative; the covariance postulate now defines tensor transformations and covariance of each specified model's solution configurations. These clarifications preserve the uses made here (geometric proper Lorentz maps and the necessary signal condition). The current contract excerpts were refreshed again; no assigned item edit was needed.

## Page verdicts and blockers

- **`sr-causality-and-signals` (A): revised; no remaining current assigned-content mathematical defect identified.** Definitions, weak path reachability, proper-time maximum, conditional signal theorem and hypothetical relay deduction are sound at the reviewed scope, with the repairs above and compatible corrected supplier clauses. This is a reader assessment, not acceptance or empirical confirmation.
- **`sr-causality-and-signals-examples` (B): needs the prose qualification routed above.** All nine examples/counterexamples were read; repaired items retain the valid calculations. The page's unqualified 4D-diamond area summary remains outside edit authority. Its raw hash is unchanged from pre: `c4df72aabb6320243a44e26bf8ac571149a04ed7c3405f2eda3cfb1c28f7f5e5`.

No unresolved mathematical blocker in the repaired assigned items was found. The B-page prose defect requires the Step 5b lead. Supplier changes occurred during review; historical findings must be reconciled with those producers' repairs rather than interpreted as defects in current corrected bytes. This report does not freeze other writers or certify subsequent drift.

## Validation

After all item edits:

- Reflow: `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts` with all nine changed item paths; exit 0, all nine unchanged by formatter.
- Precheck: `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts` with the same nine paths; exit 0, `9 checked, 0 failing`, including the nonproof structure check for the postulate.
- Final rendered proof layout: `node tools/physics-support/proof-layout.mjs` with the same nine paths; exit 0, `9 items, 48 steps, 0 defects`. An initial invocation's asynchronous result was not collected; the collected final batched invocation supplies this result. No item edit or formatter followed the collected final invocation.
- Rendercheck: `node tools/physics-support/rendercheck.mjs` with those nine items and both page paths; exit 0, eleven files checked with no YAML, wikilink/math-delimiter or KaTeX defect.

Contracts were refreshed after the concurrent suppliers changed, without changing the validated item carriers. The author/scaffold manifests and plan-spec were not edited; all sixteen IDs and both pages remain present. No imported mathematics or published carrier was changed.

## Coverage limitations

Opened both assigned pages and all 16 assigned items, the exact current batch contracts and claim-relevant supplier definitions/statements/proofs. Nine assigned items and A-page prose repaired; reflow/precheck passed all nine, proof-layout passed 48 steps, rendercheck passed eleven carriers. Four outside-batch suppliers changed concurrently: historical defects are retained with independently observed pre hashes where available; the proper-time historical observation lacks a raw-byte binding. Current relevant corrected clauses were reread and contract excerpts refreshed. The current remaining B-page area qualification is uneditable. Published suppliers were reviewed as exact premise interfaces, not exhaustively audited through every transitive proof. Carroll, Crowell and Tolman relevant sections were read; Reall was not independently retrieved or read. No empirical dataset or apparatus review was needed or performed.
