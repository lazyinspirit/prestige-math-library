# Batch 4 Step-3a adjudication

Run: `physics-td-qft-rpm-62-2026-10-14`. Group: `batch-4`. Scope: batch 4 only.

Read the normative instructions, generated item order, scope, reader report/findings, refuter report, and pre/post snapshots. The scope owes four touched decisions and one refuter decision; no page or reader decisions. Reports are evidence, not verdicts. All reviewed claims here are mathematical and supply no empirical evidence.

## Dependency-ordered review

### `lem-tdmath-closed-convex-separation`

Checked steps 1.1–4.1: the closed bounded nonempty truncated set has a nearest point by positive-dimensional Heine–Borel and extreme value; the explicit t=min(1,<u,v>/||v||²) contradicts a positive projection for both branches. u is nonzero since z is excluded. Nonempty and closed hypotheses are essential; singleton and unbounded E are covered. Read each cited supplier Statement/Definition. Bianchi–Fercoq–Hachem §1.1.1, Proposition 1.3 and Proposition 1.4, pp.3–4, match the projection and separation conclusions; apparent sign typos in their displayed Prop.1.4 proof are not imported by the sound local derivation. No AC or physics premise.

### `lem-tdmath-concave-affine-maximizer-and-hessian`

Checked steps 1.1–3.1 and all six exact cited supplier statements/definitions. One-sided differentiation of the stated segment inequality gives the supporting bound; affine stationarity kills y−x*, and the midpoint argument gives uniqueness only with strict concavity and convex F. The line restriction is C² by the cited derivative and chain rules; MVT on R gives the o(t²) remainder also for negative t. Zero h and coincident endpoints are harmless. The local midpoint condition yields only nonpositive curvature, with no strictness or global convexity inferred. Bianchi §1.5 is context; the argument is complete locally. No AC or physics premise.

### `lem-tdmath-constrained-curvature`

Checked steps 1.1–3.1 and all nine cited suppliers: the pointwise directional identity at every x gives twice differentiable line restrictions, so MVT for phi and phi prime is legitimate. Positive curvature has a uniform positive minimum on the nonempty compact sphere in ker A; finite entry continuity gives a uniform neighborhood bound. Negative curvature gives arbitrarily close lower feasible values. The ker A={0} branch avoids an empty sphere and is vacuously a strict minimum; k=0 is permitted by the bounded-linear-map statement, while d≥1 matches Heine–Borel. Reader dimension clarification accepted; no proof change or AC. Cornell Bindel §6.1.3–6.1.4 provides context, while local proof supplies the precise affine test.


### `lem-tdmath-lever-rule`

Checked both steps and the exact ordered-field and interval definitions: v−va=lambda(vb−va), with vb−va>0, yields the necessary quotient, interval membership, converse and uniqueness. Fractions 0 and 1 give the endpoints; outside values cannot be admissible. Coincident endpoints are explicitly excluded; there is no hidden division by zero or choice. Bianchi §1.1 Definition 1.1 is convex-combination context; the scalar algebra is supplied locally.

### `lem-tdmath-stoichiometric-tangent-cone`

Checked all five steps and six cited exact suppliers. Active rows give nonnegative limiting changes by matrix continuity; inactive positive amounts permit a common positive finite minimum step bound, including the case of no restrictions. Constant h and t_k=epsilon/(k+1) witness the reverse inclusion without AC. Every tangent has a feasible ray, so differentiation gives necessity at a relative local minimum; convexity gives global sufficiency through the correctly directed secant inequality. Chain rule on the open amount domain yields nu transpose mu; zero h, empty active set and rank-deficient nu are covered. Cornell Bindel §6.1.4 is context; the local proof supplies the exact polyhedral formula. No empirical premise.

### `thm-tdmath-local-implicit-rank`

Checked steps 1.1–3.1 and all seven cited supplier statements/definitions. The chosen column permutation is a linear homeomorphism with constant derivative; the chosen minor becomes the invertible v block. q<n ensures both IFT dimensions are positive, and the supplier allows shrinking to keep that block invertible along the graph. The graph/projection maps give precisely the locally defined graph dimension, not a global phase count. q=n uses the separate inverse-function result and injectivity, avoiding a nonexistent R^0 IFT. The stipulated minor is an input, so no rank theorem or choice gap.


### `lem-tdmath-extended-convex-epigraph-equivalence`

Reviewed all four steps, the two exact dependencies and Bianchi §§1.2,1.4. Both chord/epigraph directions handle infinite values and t=0,1 with the explicit 0·infinity convention. Step 1.3 gives a direct Euclidean-ball proof for weak sublevels; step 2.1 uses an intermediate finite height even when f(x)=infinity and an explicit product neighborhood. Empty sublevels, empty epigraph and identically infinite f are permitted; properness is not needed. No AC. Current expanded step 1.3 is sound but differs from the abbreviated contract derivation, which is synchronized to the current carrier below.

### `lem-tdmath-fenchel-young-equality`

Reviewed both steps and the exact conjugate/subgradient definition; Bianchi §2.3 Proposition 2.9 agrees at finite x. The supremum bounds each defining value even when infinite. Equality with the finite value at x is equivalent to all finite-domain upper bounds, and outside the domain the subgradient inequality is automatic. Conversely the attained finite upper bound yields equality, so no convexity, lsc, uniqueness, or unassumed existence is needed. No AC.

### `thm-tdmath-finite-dimensional-biconjugation`

Reviewed six steps and all seven exact suppliers; Bianchi §2.2 Theorem 2.5 and its full proof, pp.15–16, agree with the stated finite-dimensional closed proper convex claim. Upper bound includes an empty finite-conjugate domain initially. At a finite-domain point the separator height coefficient is positive, yielding a finite affine minorant and nonempty conjugate domain. Outside the domain, upward closure again rules out negative height coefficients; positive coefficients handle any prescribed height. The zero coefficient case explicitly builds an independent affine minorant at y0, then adds k(c−<a,y>), remaining a minorant on the entire domain. Its value at x is unbounded by the exact Archimedean supplier. This covers vertical separators and infinite boundary values without assuming interior points or global lower bounds; no AC.


### `thm-tdmath-fenchel-attainment`

Reviewed seven steps and all fourteen exact suppliers. Properness supplies a finite x0; coercivity isolates the search in a nonempty compact ball. The bounded shear maps epi(g) to epi(f), and its explicit ball estimate proves lsc. Relatively open sets {g>−r} cover the ball, yielding a finite lower bound with a nonempty finite maximum; the family of closed near-infimum sublevels has FIP including the empty subfamily. Compact FIP gives a finite attained infimum; outside-ball coercivity gives the global minimum, and Fenchel equality yields the finite conjugate maximum and subgradient. No countable selection or uniqueness is inferred. d≥1 is the exact Heine–Borel scope. Bianchi §1.5 Proposition 1.23 and §2.3 Proposition 2.9 are consistent source context.

### `thm-tdmath-finite-mixture-envelope`

Reviewed six steps and all twelve exact suppliers. Positive integers m,d make the simplex and Euclidean compactness legal. Nonempty fibers on P are compact and the linear objective attains a finite minimum. The compact image C plus upward ray has exactly the minimized epigraph; the explicit continuous distance-to-ray formula has positive compact minimum off C+V, proving closedness without subsequence choice. Convexity is direct; the finite-weight induction includes N=1 and divides only by 1−theta_j>0. Greatest-minorant inequality is automatic outside P. Biconjugation requires precisely the established closed proper convex hypotheses. Fenchel equality and zero weighted slack force equality only on occupied data points. Repeated points, zero weights, one datum and boundary fibers are covered. No AC, infinite-family claim or physical conclusion.

Consumer search in items/ and library/: curvature has no item consumer; attainment is used only by the one-dimensional flat-face example; mixture is used only by the positive-dimensional ordered corollary. The only page reference is the A summary. No outside consumer repair is required by the reader dimension clarifications.

### `ex-tdmath-vertical-separation-biconjugate`

Checked four steps and all five already reviewed exact suppliers. The indicator domain and epigraph are the closed convex nonnegative half-line and quadrant. u=(-1,0),c=0 has zero height coefficient and separates (-1,0) with strict gap 1. For p≤0 the conjugate is zero attained at 0; for p>0 it is infinite. At x=−1, explicit admissible negative p beats every finite bound; ell_k=−ky are minorants and have value k there, including k=0. This directly validates the vertical case without importing an assumed positive height coefficient. No AC or physics premise.

### `ex-tdmath-flat-face-nonunique-minimizer`

Checked three steps and all five reviewed exact suppliers. The indicator of [-1,1] is proper closed convex, and every finite-domain point attains the zero tilt and zero-slope conjugate. The subgradient inequalities are checked both inside and outside the interval, including endpoints. R=2 verifies coercivity for every finite threshold despite infinitely many minimizers; the attainment supplier now explicitly permits d=1 and asserts no uniqueness. The face means precisely this zero-slope contact interval. No AC or physical inference.


### `cor-tdmath-ordered-finite-mixture-envelope`

Reviewed both steps and all five direct suppliers, including the current draft batch-3 point-mass, mass, comparison, additive-representation carriers and the signed/cancellation/reference-supremum proof chain. Finite coefficients S(s_i) are supplied by the explicitly assumed strict-reference representation. Unit point masses have mass one; zero coefficients are omitted rather than used in a positive-scaling axiom. Distinct states make theta -> M_theta injective even with coincident q_i, so each coordinate fiber is exactly Theta_x. The affine chi hypothesis and explicit a_i:=S(s_i) instantiate the finite-mixture theorem in positive dimensions, with its empty-fiber convention. Normalization, attainment, lsc, convexity, biconjugation and occupied-point support all inherit that same finite data. No empirical conclusion or independent acceptance of the draft representation is claimed. One-state, zero-weight, coincident-coordinate and empty-coordinate-fiber cases are covered; no AC. The refuter correctly identified the former unbound a_i, a nonfatal specification defect now repaired.

Verdicts: `touched:4:cor-tdmath-ordered-finite-mixture-envelope` is `amended_repair`; `refuter:4:1` is `confirmed_nonfatal`, both with repair confidence 1. All three other touched repairs are accepted with confidence 1.

The pre-reader statements are recoverable without guessing: substituting the old manifest Statement into each post-reader carrier reproduces its frozen pre-reader raw SHA-256. Direct reversal also recovers curvature and finite-mixture. Current raw hashes matched all four frozen post-reader carriers before the corollary repair. There is no missing historical-byte escalation or unbound observation in this dispatch.

## Current prerequisite evidence and consumer dispositions

The batch-3 chain was independently checked from `items/`, with its exact manifest interfaces and contract citations/derivations in `research/physics-td-qft-rpm-62-2026-10-14-batch-3.pages.json` and `research/physics-td-qft-rpm-62-2026-10-14-batch-3.proof-contracts.json`. No batch-3 carrier or evidence was edited. The direct suppliers are `def-tdmath-tagged-scalable-compound`, `lem-tdmath-compound-mass-well-defined`, `def-tdmath-comparison-and-stability`, and `thm-tdmath-additive-entropy-representation`. The additional actual chain read consists of `def-tdmath-signed-comparison`, `lem-tdmath-spectator-cancellation`, `lem-tdmath-reference-order`, `lem-tdmath-reference-supremum-bounds`, and `lem-tdmath-reciprocal-naturals-tend-zero`.

The coefficient-map definition explicitly defines point masses and empty compounds. Finite sum recursion, real-sum linearity and finite reindexing prove mass independence, additivity and zero-mass equivalence. The comparison definition stipulates equal-mass preorder, consistency, strictly positive scaling, stability with fixed positive equal-mass spectators, and CH. Signed differences have equal positive/negative mass. The finite replacement cancellation argument uses the explicit reciprocal-successor sequence; translation preserves the difference, and subtracting the common pointwise minimum proves signed transitivity and additive closure. Positive scaling of signed comparisons follows immediately because `(td)^±=t d^±` for t>0. Reference order follows by the three sign cases for the coefficient difference. The supremum proof uses CH to obtain a nonempty bounded reference lower set, and its two stability limits have fixed nonnegative bases after translating by the negative part of the limiting reference map. No selection of a sequence of witnesses is needed: each reciprocal perturbation itself is shown to lie below the supremum. The additive theorem then reduces every finite compound to a reference map; zero coefficients and mass zero are handled separately. These are complete mathematical arguments under explicit adopted mathematical assumptions. The corollary also expressly assumes the representation conclusion, so this consumer review does not certify producer publication or native acceptance.

The exact imported statements read include the ordered-field/completeness, inner-product, convexity, finite-sum, natural embedding/order/reciprocal-sign, real-limit, total-derivative/C1/C2, bounded-linear-map, mean-value, compactness/FIP, extreme-value, infimum, and inverse/implicit-function suppliers cited by these arguments. They were used only at the displayed hypotheses. Imported and original mathematics remain unchanged. No defective published item was found, so the published-consumer-supplier ledger requires no row or lock.

The direct/reference consumer search was `rg -l 'lem-tdmath-constrained-curvature|thm-tdmath-fenchel-attainment|thm-tdmath-finite-mixture-envelope|cor-tdmath-ordered-finite-mixture-envelope' items library`. Its actual uses were inspected. There is no item consumer of curvature or the corollary. The flat-face example consumes attainment in dimension one; the ordered corollary consumes the mixture theorem with positive integer dimensions. The A-page prose describes the same conditional conclusions and does not bind separate values a_i. None needs a further public-interface change, so no second-hop or outside-owner resolution is needed. The owning cross-batch input preserves historical open evidence and records the current reviewed uses; the frontier dependency ledger was refreshed. Stable IDs, inventory and pages are retained, with no withdrawal.

## Sources actually consulted

- [Bianchi, Fercoq and Hachem, Elements of Convex Analysis and Optimization](https://bianchi.wp.imt.fr/files/2023/11/m2ds.pdf): §1.1.1, Propositions 1.3–1.4, printed pp.3–4; §1.2, Proposition 1.8, p.6; §1.4, Proposition 1.20, p.10; §1.5, Proposition 1.23, pp.10–11; §2.1 conjugate/minorant definitions and Proposition 2.4, pp.14–15; §2.2, Theorem 2.5 and its proof, pp.15–16; §2.3, Proposition 2.9 and proof, p.17. The local proofs supply the explicit finite-data envelope and choice-free attainment details. Potential transcription/sign errors in the source's projection-separation exposition are not adopted as inferences.
- [David Bindel, Optimization Theory](https://www.cs.cornell.edu/~bindel/nmds/00-Background/05-Optimization.html): §§6.1.3–6.1.4, second-order and tangent-cone context. The local curvature and stoichiometric proofs establish their more explicit hypotheses and conclusions directly.
- [Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics](https://arxiv.org/pdf/cond-mat/9708200v2): §II.D, Theorem 2.2, generalized signed ordering, Lemmas 2.1–2.3 and the theorem's representation proof, printed pp.23–26. This supplies context for the separately authored finite coefficient-map model, not an empirical premise or a substitute for its local proofs.

Other bibliography URLs and the reader's Rockafellar retrieval are retained as provenance/context. I do not claim independent retrieval of those sources.

## Repairs and metadata

Only `items/cor-tdmath-ordered-finite-mixture-envelope.md` was edited by this adjudicator: its Statement now binds a_i:=S(s_i), and its precheck record reflects the actual successful check. No proof paragraph or conclusion changed; no judge record was present to invalidate. The reader's four dimension/interface clarifications remain intact. All completed repairs have confidence 1.

The owning manifest's four stale Statements and reviewed proof transcriptions were synchronized to current carriers. The owning contract's stale reviewed derivation text was synchronized, its corollary L3 and flat-face L2 quotations were updated to the exact current supplier Statements, and L2 was added to corollary step 2.1's inputs because the proof text cites it. These are bookkeeping corrections to the actual reviewed content; no extra mathematical defect or routed obligation is invented. Five closed nonfatal defect-ledger rows, all owned at `3a-adjudicate`, record the four accepted reader omissions and the confirmed refuter omission. The touched corollary references its dimension row; the flagged decision alone owns the value-binding row, avoiding duplicate ledger ownership.

## Local checks and handoff

- Initial `risk-report.mjs` on the owning contract routed fourteen HIGH/CRITICAL reviews; all fourteen now contain specific complete notes. Final invocation with `--require-reviewed` returned exit 0, `0 error(s), 17 item(s) routed` (the other three are ordinary/moderate context).
- `node tools/tsx-run.mjs tools/physics-support/reflow.mts items/cor-tdmath-ordered-finite-mixture-envelope.md`: exit 0, unchanged.
- `node tools/tsx-run.mjs tools/physics-support/precheck.mts` on the four touched items: exit 0, 4 checked, 0 failing. After the final corollary edit, the scoped corollary invocation again passed, 1 checked, 0 failing.
- `node tools/physics-support/rendercheck.mjs` on the four touched items: exit 0, real KaTeX and renderer YAML pass; final corollary invocation also passed.
- `node tools/physics-support/proof-contract.mjs research/physics-td-qft-rpm-62-2026-10-14-batch-4.proof-contracts.json --strict --items` followed by the fourteen dispatched risk IDs: final exit 0, 0 errors, 0 warnings, 14/14 checked. Its first run identified the two stale quotations and missing L2 input noted above; all were corrected before this passing check.
- Required final proof-layout command: `NODE_OPTIONS='--import=/tmp/physics-b4-register.mjs' node tools/physics-support/proof-layout.mjs items/cor-tdmath-ordered-finite-mixture-envelope.md`: exit 0, 1 item, 2 steps, 0 defects. The unmodified invocation initially failed before rendering because the fallback TypeScript loader could not resolve the app's `@/` imports, then an extensionless relative import. The temporary Node resolver mapped `@/` to the actual read-only web checkout and resolved existing .ts/.tsx files for relative imports. It did not alter renderer/components/check logic or any checkout. The final run used the actual application renderer; temporary files were removed afterward.
- `defect-ledger.mjs append` used a temporary structured JSON input: exit 0, five rows appended and the derived ledger view refreshed. `frontier-dependency-ledger.mjs refresh --run physics-td-qft-rpm-62-2026-10-14`: exit 0.
- A scoped JSON consistency check confirmed exactly the five owed obligations, unique ledger ownership, fixed rows, confidence 1, and all fourteen required complete risk reviews.

No blocker, unresolved mathematical prerequisite, missing historical preimage, outside consumer repair or published finding remains in this dispatch. No judgment, stamp, certification, agent dispatch, transition or gate battery was initiated. The engine owns current decision hashes and its subsequent checks.
