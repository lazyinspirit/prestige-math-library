# frontier-19 · Beta-8 · batch notes — `isolated-singularities-and-laurent-series` and `harmonic-functions-and-the-poisson-integral` (steps 1–2)

Run `frontier-19`, batch `8`, two A/B pairs, category `complex-analysis`.
Author: Beta-8 (dispatched as Claude Opus 5 via the claude CLI at `xhigh` with a 1,000,000-token context window; the working session here is Codex, which kept to the batch brief and did not substitute an audit role).
Design sections: `research/plan-complex-analysis-track.md` §"CA-8. Isolated Singularities and Laurent Series" and §"CA-13. Harmonic Functions and the Poisson Integral".

Artifacts owned by this batch and written here: `research/frontier-19-batch-8.pages.json`, `research/frontier-19-batch-8.coverage.json`, `research/frontier-19-batch-8.proof-contracts.json`, and this file. Nothing else in the repository was written.

Fetch-verification blocker recorded on Tuesday, August 25, 2026: `node tools/source-fetch-check.mjs --coverage research/frontier-19-batch-8.coverage.json --stamp` failed in the sandbox with `EAI_AGAIN` for every URL, so no `fetch_verified` stamps could be minted from inside this workspace session. The same URLs were readable through the web tool while scaffolding, so this is a workspace-network blocker rather than a harvested-source failure.

## Continuity checkpoint

- Current substage: Step-5 authoring, after reading `CLAUDE.md`, `SCHEMA.md`, `README.md`, `WORKFLOW.md`, the house exemplar, the recent published comparison items, batch-8 scaffold artifacts, the CA-8 / CA-13 design sections, Alpha group-c step-3 scaffold review, and Alpha step-4 prerequisite adjudication.
- Owned artifact paths: `research/frontier-19-batch-8.pages.json`, `research/frontier-19-batch-8.coverage.json`, `research/frontier-19-batch-8.proof-contracts.json`, `research/frontier-19-batch-8.notes.md`, plus the future authored page files `library/complex-analysis/isolated-singularities-and-laurent-series*.md`, `library/complex-analysis/harmonic-functions-and-the-poisson-integral*.md`, and the future authored `items/<id>.md` for the 65 scoped ids in those four pages.
- Completed gates / context checks: repo instructions read; Alpha step-3 verdict is `sufficient` for both batch-8 A pages; Alpha step-4 prerequisite repairs are already reflected in `plan-spec.json`; batch-8 `coverage.json` and `scope-decisions` were already repaired by Alpha for the stale CA-8 deferred destinations.
- Frozen-text state: nothing authored yet for batch-8 items or pages; only this checkpoint has been appended to the notes.
- Open mathematical constraints:
  - CA-8 must keep residue-at-infinity and meromorphic local-quotient material out of scope except for the already approved deferments.
  - CA-13 must keep the homologically-simply-connected convention, must include the CA-1 agreement remark, and must state Harnack convergence with the `or diverges to +infinity` clause.
  - No load-bearing dependency may target an `ai-generated` statement; current external deps checked so far are eligible.
  - Every proof step in authored items must stay one physical line after reflow, and every final proof-contract boundary row must be item-specific rather than templated.
- Exact next action: author the CA-8 A page items first, then its B page items and page files, then move to CA-13, after reopening the specific published dependency items each proof cites for exact fact text.

## Continuity checkpoint

- Current substage: Step-5 authoring, with the CA-8 pair fully drafted on disk and mechanically clean under scoped `precheck` and `prosecheck`, and the CA-13 pair drafted through `thm-converse-mean-value-property-for-plane-functions`.
- Newly owned authored paths on disk:
  - CA-8 A/B items and page files: `items/def-complex-annulus.md` through `items/cex-a-laurent-series-on-a-punctured-disc-can-have-infinitely-many-negative-terms.md`, plus `library/complex-analysis/isolated-singularities-and-laurent-series*.md`.
  - CA-13 drafted so far: `items/def-plane-harmonic-function.md`, `items/rem-agreement-with-c2-holomorphic-components-are-harmonic.md`, `items/thm-local-holomorphic-potential-for-harmonic-functions.md`, `items/def-harmonic-conjugate.md`, `items/thm-harmonic-conjugate-on-homologically-simply-connected-domains.md`, `items/cor-harmonic-conjugates-differ-by-a-real-constant.md`, `items/thm-plane-harmonic-functions-are-smooth-and-real-analytic.md`, `items/def-mean-value-property-for-plane-functions.md`, `items/thm-mean-value-property-for-plane-harmonic-functions.md`, `items/thm-maximum-and-minimum-principles-for-plane-harmonic-functions.md`, `items/cor-uniqueness-for-the-bounded-plane-dirichlet-problem.md`, `items/cor-liouville-theorem-for-plane-harmonic-functions.md`, `items/thm-identity-principle-for-plane-harmonic-functions.md`, `items/thm-conformal-invariance-of-plane-harmonicity.md`, `items/def-poisson-kernel-on-the-disc.md`, `items/lem-poisson-kernel-properties-on-the-disc.md`, `items/def-poisson-integral-on-the-disc.md`, `items/lem-poisson-integrals-are-harmonic.md`, `items/lem-poisson-kernel-is-a-boundary-approximate-identity.md`, `items/thm-poisson-integral-solves-the-disc-dirichlet-problem.md`, `items/thm-poisson-representation-for-disc-harmonic-functions.md`, `items/thm-converse-mean-value-property-for-plane-functions.md`.
- Completed gates since the previous checkpoint:
  - Scoped `reflow` + `precheck` clean for all drafted CA-8 proof-bearing items.
  - Scoped `reflow` + `precheck` clean for drafted CA-13 proof-bearing items through the Poisson/converse-mean-value block.
  - `prosecheck` clean for the CA-8 A/B page files.
- Open mathematical constraints:
  - CA-13 still needs `thm-removable-isolated-singularity-for-bounded-plane-harmonic-functions`, `thm-harnack-inequality-on-a-disc`, `thm-harnack-convergence-principle-for-plane-harmonic-functions`, `thm-harmonic-and-holomorphic-schwarz-reflection-principles`, the nine CA-13 B-page items, and the two CA-13 page files.
  - The bounded-removable harmonic theorem remains the hardest remaining proof route; if the gradient/residue argument does not close honestly from current deps, the item must be narrowed or its deps widened rather than waved through.
  - The Harnack and Schwarz-reflection items may still need honest dep additions beyond the scaffold if their written proofs invoke specific Poisson or holomorphic machinery not already declared.
- Exact next action: finish the last four CA-13 A-page theorems, then draft the CA-13 examples/counterexamples and page files, then rewrite `research/frontier-19-batch-8.proof-contracts.json`, `research/frontier-19-batch-8.coverage.json`, and the step-5 report section of these notes to match the authored disk state.

---

## 1. Per-page item list

### A page `isolated-singularities-and-laurent-series` — order 317 — 21 items

| # | id | kind | title |
|---|---|---|---|
| 1 | `def-complex-annulus` | definition | Annuli in the complex plane |
| 2 | `def-convergent-complex-laurent-series` | definition | Convergent Laurent series on an annulus |
| 3 | `def-principal-part-laurent-series` | definition | The principal part of a Laurent series |
| 4 | `def-isolated-singularity-types` | definition | Isolated singularities: removable, poles, and essential singularities |
| 5 | `def-simple-pole` | definition | Simple poles |
| 6 | `def-meromorphic-function-complex-domain` | definition | Meromorphic functions on a plane domain |
| 7 | `thm-laurent-expansion-annulus` | theorem | Laurent expansion on an annulus |
| 8 | `thm-laurent-coefficient-formula-and-uniqueness` | theorem | Laurent coefficients are given by contour integrals and are unique |
| 9 | `cor-laurent-coefficients-independent-of-radius` | corollary | Laurent coefficients are independent of the intermediate radius |
| 10 | `def-residue-isolated-singularity` | definition | The residue of an isolated singularity |
| 11 | `thm-laurent-regular-principal-decomposition` | theorem | Laurent series split into regular and principal parts |
| 12 | `thm-removable-singularity-characterizations` | theorem | Characterizations of removable singularities |
| 13 | `thm-pole-characterizations` | theorem | Characterizations of poles |
| 14 | `thm-isolated-singularity-trichotomy` | theorem | Every isolated singularity is removable, a pole, or essential |
| 15 | `thm-casorati-weierstrass` | theorem | Casorati-Weierstrass theorem |
| 16 | `cor-residue-contour-integral-formula` | corollary | The residue is the normalized small-circle integral |
| 17 | `lem-residue-simple-pole` | lemma | At a simple pole the residue is the limit of (z-a)f(z) |
| 18 | `thm-residue-pole-derivative-formula` | theorem | Residue formula for a pole of order m |
| 19 | `cor-residue-quotient-simple-zero` | corollary | Residues of p over q at a simple zero of q |
| 20 | `def-singularity-at-infinity` | definition | Isolated singularities at infinity |
| 21 | `thm-poles-meromorphic-function-are-discrete-and-countable` | theorem | Poles of a meromorphic function form a closed discrete set and are at most countable |

### B page `isolated-singularities-and-laurent-series-examples` — order 318 — 9 items

| # | id | kind | title |
|---|---|---|---|
| 1 | `ex-one-rational-function-has-three-laurent-series` | example | The same rational function has different Laurent series on different annuli |
| 2 | `ex-singularities-at-infinity-for-polynomials-and-reciprocals` | example | Polynomials have poles at infinity and reciprocal polynomials have removable singularities there |
| 3 | `ex-residue-of-exp-over-z-cubed-by-derivative-formula` | example | The residue of e^z/z^3 from the pole-derivative formula |
| 4 | `ex-residue-of-p-over-q-at-a-simple-zero` | example | A residue of p over q at a simple zero is p(a)/q'(a) |
| 5 | `cex-zero-residue-does-not-force-a-removable-singularity` | counterexample | Zero residue does not imply a removable singularity |
| 6 | `cex-exp-one-over-z-is-essential-and-omits-zero` | counterexample | e^{1/z} has an essential singularity at 0 and omits the value 0 |
| 7 | `cex-sine-one-over-z-is-essential` | counterexample | sin(1/z) has an essential singularity at 0 |
| 8 | `cex-one-over-sine-one-over-z-has-a-nonisolate-singularity-at-zero` | counterexample | 1/sin(1/z) has a nonisolated singularity at 0 |
| 9 | `cex-a-laurent-series-on-a-punctured-disc-can-have-infinitely-many-negative-terms` | counterexample | A Laurent series on a punctured disc can have infinitely many negative powers |

### A page `harmonic-functions-and-the-poisson-integral` — order 327 — 26 items

| # | id | kind | title |
|---|---|---|---|
| 1 | `def-plane-harmonic-function` | definition | Plane harmonic functions |
| 2 | `rem-agreement-with-c2-holomorphic-components-are-harmonic` | remark | Agreement with the earlier C^2 holomorphic-components theorem |
| 3 | `thm-local-holomorphic-potential-for-harmonic-functions` | theorem | Every plane harmonic function is locally the real part of a holomorphic function |
| 4 | `def-harmonic-conjugate` | definition | Harmonic conjugates |
| 5 | `thm-harmonic-conjugate-on-homologically-simply-connected-domains` | theorem | Harmonic conjugates exist on homologically simply connected plane domains |
| 6 | `cor-harmonic-conjugates-differ-by-a-real-constant` | corollary | Two harmonic conjugates differ by a real constant |
| 7 | `thm-plane-harmonic-functions-are-smooth-and-real-analytic` | theorem | Plane harmonic functions are smooth and real analytic |
| 8 | `def-mean-value-property-for-plane-functions` | definition | The circle and disc mean-value properties |
| 9 | `thm-mean-value-property-for-plane-harmonic-functions` | theorem | Plane harmonic functions satisfy the mean-value property |
| 10 | `thm-maximum-and-minimum-principles-for-plane-harmonic-functions` | theorem | Maximum and minimum principles for plane harmonic functions |
| 11 | `cor-uniqueness-for-the-bounded-plane-dirichlet-problem` | corollary | The bounded plane Dirichlet problem has at most one continuous harmonic solution |
| 12 | `cor-liouville-theorem-for-plane-harmonic-functions` | corollary | A plane harmonic function bounded above or below is constant |
| 13 | `thm-identity-principle-for-plane-harmonic-functions` | theorem | A plane harmonic function that vanishes on a nonempty open set vanishes everywhere on the domain |
| 14 | `thm-conformal-invariance-of-plane-harmonicity` | theorem | Plane harmonicity is preserved by holomorphic and antiholomorphic changes of coordinate |
| 15 | `def-poisson-kernel-on-the-disc` | definition | The Poisson kernel on the unit disc |
| 16 | `lem-poisson-kernel-properties-on-the-disc` | lemma | The Poisson kernel is positive, has total mass one, and concentrates at a boundary point |
| 17 | `def-poisson-integral-on-the-disc` | definition | The Poisson integral on the unit disc |
| 18 | `lem-poisson-integrals-are-harmonic` | lemma | Poisson integrals are harmonic on the unit disc |
| 19 | `lem-poisson-kernel-is-a-boundary-approximate-identity` | lemma | The Poisson kernel is a boundary approximate identity |
| 20 | `thm-poisson-integral-solves-the-disc-dirichlet-problem` | theorem | The Poisson integral gives the unique continuous harmonic extension on the closed unit disc |
| 21 | `thm-poisson-representation-for-disc-harmonic-functions` | theorem | A harmonic function is recovered from its values on any containing circle by the Poisson formula |
| 22 | `thm-converse-mean-value-property-for-plane-functions` | theorem | A continuous plane function with the local mean-value property is harmonic |
| 23 | `thm-removable-isolated-singularity-for-bounded-plane-harmonic-functions` | theorem | A bounded harmonic function near an isolated puncture extends harmonically |
| 24 | `thm-harnack-inequality-on-a-disc` | theorem | Positive harmonic functions on a disc satisfy Harnack's inequality |
| 25 | `thm-harnack-convergence-principle-for-plane-harmonic-functions` | theorem | An increasing harmonic sequence converges locally uniformly to a harmonic limit or diverges to +infinity |
| 26 | `thm-harmonic-and-holomorphic-schwarz-reflection-principles` | theorem | Harmonic and holomorphic Schwarz reflection across the real axis |

### B page `harmonic-functions-and-the-poisson-integral-examples` — order 328 — 9 items

| # | id | kind | title |
|---|---|---|---|
| 1 | `ex-log-modulus-is-harmonic-on-the-punctured-plane` | example | log|z| is harmonic on the punctured plane |
| 2 | `ex-real-parts-of-z-powers-are-harmonic` | example | The real parts of z^n are harmonic polynomials |
| 3 | `ex-a-harmonic-conjugate-of-x-squared-minus-y-squared` | example | 2xy is a harmonic conjugate of x^2-y^2 |
| 4 | `ex-poisson-integral-of-cos-theta` | example | The Poisson integral of cos(theta) is r cos(theta) |
| 5 | `ex-harnack-inequality-for-a-poisson-kernel` | example | The Poisson kernel realizes the sharp Harnack bounds on concentric discs |
| 6 | `cex-log-modulus-has-no-harmonic-conjugate-on-the-punctured-plane` | counterexample | log|z| has no global harmonic conjugate on C\{0} |
| 7 | `cex-a-harmonic-function-can-vanish-on-a-line-without-vanishing-identically` | counterexample | A harmonic function can vanish on a line without being zero everywhere |
| 8 | `cex-the-product-of-harmonic-functions-need-not-be-harmonic` | counterexample | The product of two harmonic functions need not be harmonic |
| 9 | `cex-an-unbounded-harmonic-function-need-not-extend-across-a-puncture` | counterexample | Re(1/z) is harmonic on a punctured disc and does not extend harmonically across 0 |

Both A pages stay well below the 60-item hard ceiling, so no split is proposed.

---

## 2. Per-pair richness report

### CA-8 pair

Both passes were run.

Proof-decomposition pass: Laurent existence and coefficient uniqueness were split rather than hidden in one theorem; the singularity classification was decomposed into removable, pole, trichotomy, and Casorati–Weierstrass items; and the residue computations were split into the contour formula, the simple-pole limit, the pole-order derivative formula, and the simple-zero quotient corollary.

Corollary pass: it added `cor-laurent-coefficients-independent-of-radius`, `cor-residue-contour-integral-formula`, and `cor-residue-quotient-simple-zero`. No page split is needed.

### CA-13 pair

Both passes were run.

Proof-decomposition pass: the harmonic-conjugate route was split into local holomorphic potential, global conjugate existence, conjugate uniqueness, and smooth/analytic regularity; the mean-value / maximum-principle chain was separated from the Poisson-kernel / Dirichlet chain; and Harnack convergence and Schwarz reflection were kept as terminal results rather than being buried inside the Poisson theorem.

Corollary pass: it added `cor-harmonic-conjugates-differ-by-a-real-constant`, `cor-uniqueness-for-the-bounded-plane-dirichlet-problem`, and `cor-liouville-theorem-for-plane-harmonic-functions`. No split is needed.

---

## 3. Findings for the step-3 Alpha

### Finding 1 — fix the CA-13 simply-connected terminology drift (approve)

**What is wrong.** The CA-13 item table says `thm-harmonic-conjugate-on-simply-connected-domains`, but CA-7 fixed the library's active notion at this stage as **homologically** simply connected, and the CA-13 trap paragraph itself repeats that convention. Shipping the unqualified title would reintroduce the level-7 two-notions defect inside the complex-analysis track.

**Proposed amendment**, in `research/plan-complex-analysis-track.md`, §CA-13, item table.

Exact old text:

> | `thm-harmonic-conjugate-on-simply-connected-domains` | thm | A harmonic function on a simply connected plane domain has a global conjugate. |

Exact new text:

> | `thm-harmonic-conjugate-on-homologically-simply-connected-domains` | thm | A harmonic function on a homologically simply connected plane domain has a global conjugate. |

**If declined.** The scaffold would advertise a stronger topological notion than the page is allowed to use before CA-17, and the author would have to choose between contradicting CA-7 or contradicting the design row.

### Finding 2 — widen the CA-13 prerequisite list to the pages it actually cites (approve)

**What is wrong.** The design line says ``requires`: CA-7, CA-6, `mixed-partials-taylor-and-extrema`` and the current spec says `the-winding-number-and-the-global-cauchy-theorem`, `the-identity-theorem-and-the-open-mapping-theorem`, and `mixed-partials-taylor-and-extrema`. The actual scaffold uses five more earlier pages: `complex-differentiability-and-cauchy-riemann` for the CA-1 agreement item and antiholomorphic-change statement, `analyticity-liouville-and-morera` for harmonic smoothness and the holomorphic mean-value input, and `isolated-singularities-and-laurent-series` for the bounded removable-harmonic-singularity proof, which is earlier in this same batch.

**Proposed amendment**, in `research/plan-complex-analysis-track.md`, §CA-13 header.

Exact old text:

> `requires`: CA-7, CA-6, `mixed-partials-taylor-and-extrema`

Exact new text:

> `requires`: CA-1, CA-5, CA-6, CA-7, CA-8, `mixed-partials-taylor-and-extrema`

The matching `pages.json` `requires` list for this batch is:

> `complex-differentiability-and-cauchy-riemann`, `analyticity-liouville-and-morera`, `the-identity-theorem-and-the-open-mapping-theorem`, `the-winding-number-and-the-global-cauchy-theorem`, `mixed-partials-taylor-and-extrema`, `isolated-singularities-and-laurent-series`.

**If declined.** The author would either hide load-bearing citations from the judge context or have to redesign the page around weaker proofs than the design intends.

### Finding 3 — replace the CA-8 cotangent/cosecant example cluster rather than hiding a new sine-zero prerequisite (approve)

**What is wrong.** The design's B-page sentence includes residues of `cot z` and `1/sin z`, and the trap paragraph correctly says those residues need the complex zero set of sine. That page is not in the current CA-8 prerequisite list. Leaving the examples in place without widening the pair context would create the exact hidden-dependency defect step 2 is supposed to remove.

**Proposed amendment**, in `research/plan-complex-analysis-track.md`, §CA-8, the B-page sentence.

Exact old text:

> B: the Laurent expansions of $1/(z(z-1))$ in the three annuli $0<\lvert z\rvert<1$, $1<\lvert z\rvert$, and about $z=1$ — **the same function with three different Laurent series, which is what "in an annulus" means**; residues of $e^z/z^3$, $\cot z$, $1/\sin z$; a pole of order $3$ handled by the derivative formula.

Exact new text:

> B: the Laurent expansions of $1/(z(z-1))$ in the two annuli about $0$ and in the punctured disc about $1$; singularities at $\infty$ for $z^m$ and $1/z^m$; the residue of $e^z/z^3$ by the pole-derivative formula; a concrete $p/q$ residue at a simple zero; and the counterexamples from $e^{1/z}$, $\sin(1/z)$, $1/\sin(1/z)$, and $1/z^2$ that separate essential, nonisolated, and zero-residue phenomena without adding a hidden sine-zero prerequisite to the pair.

**If declined.** Either the examples page grows a new undeclared prerequisite, or the author has to drop the cotangent/cosecant computations ad hoc at step 5 after the scaffold has already promised them.

### Finding 4 — keep the Toronto “residue at infinity” heading deferred, not silently merged into the singularity-at-infinity definition (approve)

**What is wrong.** The Toronto source bundles “Residue at infinity” with the Laurent/residue notes. The CA-8 design, by contrast, deliberately wants only the **classification at infinity** here and explicitly warns against conflating it with the later residue-calculus convention. That distinction has to be recorded as a deliberate deferment, not collapsed away in the coverage harvest.

**Proposed disposition.** Keep the source row harvested as a `deferred` result with `destination: owner-decision` until the CA-9 residue-theorem page is spliced into `plan-spec.json` under a stable page id.

**If declined.** The coverage file will claim a source heading was built here when the actual scaffold intentionally omits the residue-at-infinity statement.

---

## 4. Expected provenance by planned item

### `isolated-singularities-and-laurent-series` and companion

| id | statement | proof | rationale / obligation |
|---|---|---|---|
| `def-complex-annulus` | literature-derived | not-applicable | Standard annulus definition from the harvested CA-8 notes. |
| `def-convergent-complex-laurent-series` | literature-derived | not-applicable | Standard Laurent-series definition specialized to convergent analytic series on an annulus. |
| `def-principal-part-laurent-series` | literature-derived | not-applicable | Standard principal-part definition from Laurent-series sources. |
| `def-isolated-singularity-types` | literature-derived | not-applicable | Classical isolated-singularity definitions from Toronto/Rutgers/UMD notes. |
| `def-simple-pole` | literature-derived | not-applicable | Standard order-one pole definition from the pole-characterization sources. |
| `def-meromorphic-function-complex-domain` | literature-derived | not-applicable | Standard plane-domain meromorphicity definition from UMD section 3.10. |
| `thm-laurent-expansion-annulus` | literature-derived | ai-altered | Classical Laurent theorem; proof uses the CA-7 homology/Cauchy route chosen in the design. |
| `thm-laurent-coefficient-formula-and-uniqueness` | literature-derived | ai-altered | Classical coefficient formula and uniqueness; proof is adapted to the library's circle-integral infrastructure. |
| `cor-laurent-coefficients-independent-of-radius` | literature-derived | ai-altered | Standard corollary of the coefficient formula via homological Cauchy invariance. |
| `def-residue-isolated-singularity` | literature-derived | not-applicable | Standard residue definition as the Laurent coefficient a_{-1}. |
| `thm-laurent-regular-principal-decomposition` | literature-derived | ai-altered | Classical regular-plus-principal split of a Laurent series, proved in the page's coefficient-first order. |
| `thm-removable-singularity-characterizations` | literature-derived | ai-altered | Riemann removable-singularity theorem with equivalent conditions, via the Laurent principal-part route. |
| `thm-pole-characterizations` | literature-derived | ai-altered | Standard equivalent characterizations of a pole and its order. |
| `thm-isolated-singularity-trichotomy` | literature-derived | ai-altered | Classical removable/pole/essential trichotomy derived from the Laurent decomposition. |
| `thm-casorati-weierstrass` | literature-derived | ai-altered | Standard dense-image theorem for essential singularities, proved by the bounded reciprocal contrapositive. |
| `cor-residue-contour-integral-formula` | literature-derived | ai-altered | Standard residue-integral formula as the n=-1 coefficient case. |
| `lem-residue-simple-pole` | literature-derived | ai-altered | Standard simple-pole residue limit formula. |
| `thm-residue-pole-derivative-formula` | literature-derived | ai-altered | Standard pole-order derivative formula for residues. |
| `cor-residue-quotient-simple-zero` | literature-derived | ai-altered | Standard quotient residue formula at a simple zero, using the local difference-quotient extension. |
| `def-singularity-at-infinity` | literature-derived | not-applicable | Standard classification-at-infinity definition via f(1/w) near w=0. |
| `thm-poles-meromorphic-function-are-discrete-and-countable` | literature-derived | ai-altered | Source-backed discrete/countable pole-set statement; proof uses a rational-disc countability argument. |
| `ex-one-rational-function-has-three-laurent-series` | literature-derived | ai-altered | Standard Laurent-series example from MIT/Toronto notes. |
| `ex-singularities-at-infinity-for-polynomials-and-reciprocals` | ai-generated | ai-generated | Checkable generated example built directly from the definition at infinity; witness verification is explicit and non-load-bearing. |
| `ex-residue-of-exp-over-z-cubed-by-derivative-formula` | literature-derived | ai-altered | Standard residue-computation example using the pole-order derivative formula. |
| `ex-residue-of-p-over-q-at-a-simple-zero` | ai-generated | ai-generated | Checkable generated example chosen to exercise the simple-zero quotient formula; non-load-bearing witness. |
| `cex-zero-residue-does-not-force-a-removable-singularity` | ai-generated | ai-generated | Checkable generated counterexample with witness 1/z^2; non-load-bearing and fully local. |
| `cex-exp-one-over-z-is-essential-and-omits-zero` | literature-derived | ai-altered | Classical essential-singularity witness appearing in every harvested treatment. |
| `cex-sine-one-over-z-is-essential` | literature-derived | ai-altered | Classical essential-singularity witness via the complex sine series. |
| `cex-one-over-sine-one-over-z-has-a-nonisolate-singularity-at-zero` | literature-derived | ai-altered | Classical accumulation-of-poles witness using zeros 1/(n pi). |
| `cex-a-laurent-series-on-a-punctured-disc-can-have-infinitely-many-negative-terms` | ai-altered | ai-altered | Classical misconception refuted with the same standard essential-singularity witnesses; no load-bearing use. |

### `harmonic-functions-and-the-poisson-integral` and companion

| id | statement | proof | rationale / obligation |
|---|---|---|---|
| `def-plane-harmonic-function` | literature-derived | not-applicable | Standard Laplace-equation definition for real C^2 functions on plane domains. |
| `rem-agreement-with-c2-holomorphic-components-are-harmonic` | literature-derived | not-applicable | Expository agreement remark tying this page to the earlier C^2 holomorphic-components theorem. |
| `thm-local-holomorphic-potential-for-harmonic-functions` | literature-derived | ai-altered | Classical local real-part theorem for harmonic functions; proof is adapted to the library's mixed-partial and primitive infrastructure. |
| `def-harmonic-conjugate` | literature-derived | not-applicable | Standard harmonic-conjugate definition. |
| `thm-harmonic-conjugate-on-homologically-simply-connected-domains` | ai-altered | ai-altered | Source-backed simply-connected theorem retagged to the library's homological convention from CA-7. |
| `cor-harmonic-conjugates-differ-by-a-real-constant` | literature-derived | ai-altered | Standard uniqueness-up-to-constant corollary. |
| `thm-plane-harmonic-functions-are-smooth-and-real-analytic` | literature-derived | ai-altered | Standard regularity theorem via local holomorphic potentials and the published analyticity theorem. |
| `def-mean-value-property-for-plane-functions` | literature-derived | not-applicable | Standard circle and disc mean-value definitions. |
| `thm-mean-value-property-for-plane-harmonic-functions` | literature-derived | ai-altered | Standard harmonic mean-value theorem via local holomorphic potentials. |
| `thm-maximum-and-minimum-principles-for-plane-harmonic-functions` | literature-derived | ai-altered | Standard maximum/minimum principles for harmonic functions via real parts of holomorphic functions. |
| `cor-uniqueness-for-the-bounded-plane-dirichlet-problem` | literature-derived | ai-altered | Standard uniqueness corollary from the harmonic maximum principle. |
| `cor-liouville-theorem-for-plane-harmonic-functions` | literature-derived | ai-altered | Standard harmonic Liouville theorem using a global conjugate and bounded entire exponentials. |
| `thm-identity-principle-for-plane-harmonic-functions` | literature-derived | ai-altered | Classical open-set identity theorem for harmonic functions, adapted to the page's local-potential route. |
| `thm-conformal-invariance-of-plane-harmonicity` | literature-derived | ai-altered | Standard conformal/anticonformal invariance statement for plane harmonicity. |
| `def-poisson-kernel-on-the-disc` | literature-derived | not-applicable | Standard Poisson-kernel definition on the unit disc. |
| `lem-poisson-kernel-properties-on-the-disc` | literature-derived | ai-altered | Standard positivity, unit-mass, and concentration properties of the Poisson kernel. |
| `def-poisson-integral-on-the-disc` | literature-derived | not-applicable | Standard boundary-convolution definition of the Poisson integral. |
| `lem-poisson-integrals-are-harmonic` | literature-derived | ai-altered | Standard differentiation-under-the-integral proof of harmonicity. |
| `lem-poisson-kernel-is-a-boundary-approximate-identity` | literature-derived | ai-altered | Standard approximate-identity boundary convergence estimate for the Poisson kernel. |
| `thm-poisson-integral-solves-the-disc-dirichlet-problem` | literature-derived | ai-altered | Standard disc Dirichlet theorem via Poisson integrals and harmonic uniqueness. |
| `thm-poisson-representation-for-disc-harmonic-functions` | literature-derived | ai-altered | Standard Poisson representation on smaller discs from enclosing boundary data. |
| `thm-converse-mean-value-property-for-plane-functions` | literature-derived | ai-altered | Standard converse mean-value theorem via the disc Dirichlet problem. |
| `thm-removable-isolated-singularity-for-bounded-plane-harmonic-functions` | literature-derived | ai-altered | Standard bounded removable-singularity theorem for harmonic functions, with the proof routed through the CA-8 holomorphic removable theorem. |
| `thm-harnack-inequality-on-a-disc` | literature-derived | ai-altered | Standard disc Harnack inequality from the Poisson representation and kernel bounds. |
| `thm-harnack-convergence-principle-for-plane-harmonic-functions` | literature-derived | ai-altered | Standard Harnack convergence theorem, sourced from the Encyclopedia of Mathematics bounded-domain statement and adapted to plane domains by applying it on relatively compact discs. |
| `thm-harmonic-and-holomorphic-schwarz-reflection-principles` | ai-altered | ai-altered | Source-backed reflection principles consolidated into one library item and phrased on the chosen half-disc route. |
| `ex-log-modulus-is-harmonic-on-the-punctured-plane` | literature-derived | ai-altered | Classical harmonic example with direct Laplacian verification. |
| `ex-real-parts-of-z-powers-are-harmonic` | ai-generated | ai-generated | Checkable generated family of examples; the witness is explicit and non-load-bearing. |
| `ex-a-harmonic-conjugate-of-x-squared-minus-y-squared` | literature-derived | ai-altered | Standard z^2 example of a harmonic conjugate pair. |
| `ex-poisson-integral-of-cos-theta` | literature-derived | ai-altered | Standard Poisson-integral example specialized to the first Fourier mode. |
| `ex-harnack-inequality-for-a-poisson-kernel` | ai-generated | ai-generated | Checkable generated sharpness example for the Harnack constants; non-load-bearing witness. |
| `cex-log-modulus-has-no-harmonic-conjugate-on-the-punctured-plane` | literature-derived | ai-altered | Standard obstruction example tied to the no-global-logarithm theorem. |
| `cex-a-harmonic-function-can-vanish-on-a-line-without-vanishing-identically` | ai-generated | ai-generated | Checkable generated counterexample with witness u(x,y)=x; non-load-bearing. |
| `cex-the-product-of-harmonic-functions-need-not-be-harmonic` | ai-generated | ai-generated | Checkable generated counterexample with witness x·x=x^2; non-load-bearing. |
| `cex-an-unbounded-harmonic-function-need-not-extend-across-a-puncture` | literature-derived | ai-altered | Standard Re(1/z) counterexample to bounded removable extension. |

AI-generated statement/construction obligations for step 5: verify the witness explicitly for `ex-singularities-at-infinity-for-polynomials-and-reciprocals`, `ex-residue-of-p-over-q-at-a-simple-zero`, `cex-zero-residue-does-not-force-a-removable-singularity`, `ex-real-parts-of-z-powers-are-harmonic`, `ex-harnack-inequality-for-a-poisson-kernel`, `cex-a-harmonic-function-can-vanish-on-a-line-without-vanishing-identically`, and `cex-the-product-of-harmonic-functions-need-not-be-harmonic`. None of them may become a dependency target.

---

## 5. Forward references, new ids, and cross-batch edges

Forward references kept: none.

New-id grep, CA-8 block:

```text
rg -n 'def-complex-annulus|def-convergent-complex-laurent-series|def-principal-part-laurent-series|def-isolated-singularity-types|def-simple-pole|def-meromorphic-function-complex-domain|thm-laurent-expansion-annulus|thm-laurent-coefficient-formula-and-uniqueness|cor-laurent-coefficients-independent-of-radius|def-residue-isolated-singularity|thm-laurent-regular-principal-decomposition|thm-removable-singularity-characterizations|thm-pole-characterizations|thm-isolated-singularity-trichotomy|thm-casorati-weierstrass|cor-residue-contour-integral-formula|lem-residue-simple-pole|thm-residue-pole-derivative-formula|cor-residue-quotient-simple-zero|def-singularity-at-infinity|thm-poles-meromorphic-function-are-discrete-and-countable|ex-one-rational-function-has-three-laurent-series|ex-singularities-at-infinity-for-polynomials-and-reciprocals|ex-residue-of-exp-over-z-cubed-by-derivative-formula|ex-residue-of-p-over-q-at-a-simple-zero|cex-zero-residue-does-not-force-a-removable-singularity|cex-exp-one-over-z-is-essential-and-omits-zero|cex-sine-one-over-z-is-essential|cex-one-over-sine-one-over-z-has-a-nonisolate-singularity-at-zero|cex-a-laurent-series-on-a-punctured-disc-can-have-infinitely-many-negative-terms' items research/plan-spec.json
```

Result: no hits on disk or in the current plan spec.

New-id grep, CA-13 block:

```text
rg -n 'def-plane-harmonic-function|rem-agreement-with-c2-holomorphic-components-are-harmonic|thm-local-holomorphic-potential-for-harmonic-functions|def-harmonic-conjugate|thm-harmonic-conjugate-on-homologically-simply-connected-domains|cor-harmonic-conjugates-differ-by-a-real-constant|thm-plane-harmonic-functions-are-smooth-and-real-analytic|def-mean-value-property-for-plane-functions|thm-mean-value-property-for-plane-harmonic-functions|thm-maximum-and-minimum-principles-for-plane-harmonic-functions|cor-uniqueness-for-the-bounded-plane-dirichlet-problem|cor-liouville-theorem-for-plane-harmonic-functions|thm-identity-principle-for-plane-harmonic-functions|thm-conformal-invariance-of-plane-harmonicity|def-poisson-kernel-on-the-disc|lem-poisson-kernel-properties-on-the-disc|def-poisson-integral-on-the-disc|lem-poisson-integrals-are-harmonic|lem-poisson-kernel-is-a-boundary-approximate-identity|thm-poisson-integral-solves-the-disc-dirichlet-problem|thm-poisson-representation-for-disc-harmonic-functions|thm-converse-mean-value-property-for-plane-functions|thm-removable-isolated-singularity-for-bounded-plane-harmonic-functions|thm-harnack-inequality-on-a-disc|thm-harnack-convergence-principle-for-plane-harmonic-functions|thm-harmonic-and-holomorphic-schwarz-reflection-principles|ex-log-modulus-is-harmonic-on-the-punctured-plane|ex-real-parts-of-z-powers-are-harmonic|ex-a-harmonic-conjugate-of-x-squared-minus-y-squared|ex-poisson-integral-of-cos-theta|ex-harnack-inequality-for-a-poisson-kernel|cex-log-modulus-has-no-harmonic-conjugate-on-the-punctured-plane|cex-a-harmonic-function-can-vanish-on-a-line-without-vanishing-identically|cex-the-product-of-harmonic-functions-need-not-be-harmonic|cex-an-unbounded-harmonic-function-need-not-extend-across-a-puncture' items research/plan-spec.json
```

Result: no hits on disk or in the current plan spec.

Cross-batch dependencies: none on the other batches of `frontier-19`. The only nonpublished edge discovered here is internal to this batch: `harmonic-functions-and-the-poisson-integral` uses `isolated-singularities-and-laurent-series` as an earlier same-batch prerequisite for the bounded removable-harmonic-singularity theorem.

---

## 6. Web research ledger and dependency-closure statement

### CA-8 source ledger

- `https://www.math.toronto.edu/campesat/mat334.html` supports the isolated-singularity definitions, the removable and pole characterizations, Laurent's theorem, residues, and the distinction between singularity-at-infinity and residue-at-infinity. Convention note: the Toronto page lists “Residue at infinity”; this scaffold keeps only the classification-at-infinity item here and defers the residue-calculus statement.
- `https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/dff6a0c70eefb1e23bb87f8524361801_MIT18_04S18_topic7.pdf` supports Laurent expansions, Laurent examples, poles, and residue computation. Convention note: the MIT notes talk in the simpler “pole” language without the page's separate homology-based Cauchy prerequisites; the statement content agrees.
- `https://sites.math.rutgers.edu/~greenfie/mill_courses/math403/diary2.html` supports the removable/pole/essential classification and Casorati-Weierstrass. Convention note: the diary is theorem-first and not page-structured; the scaffold decomposes its classification material into separate theorem items.
- `https://www.math.umd.edu/~pbrosnan/notes/complex/sect0019.html` supports the local definition of meromorphicity and flags, by harvest, the later quotient/argument-principle directions not built on this page. Convention note: the UMD section packages meromorphicity with the local quotient picture; the current scaffold keeps the definition and defers the quotient theorem.
- `https://sites.math.rutgers.edu/~greenfie/mill_courses/math503/diary.html` supports the discreteness and countability of pole sets. Convention note: the countability step is stated there in R^2 language; this page phrases it in the complex-plane language.

### CA-13 source ledger

- `https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/2e739bb156efb0bc7103fc43d0897dda_MIT18_04S18_topic5.pdf` supports the harmonic definition, harmonic conjugates, mean-value property, and regularity. Convention note: it says “simply connected”; the scaffold retags that statement to the library's CA-7 “homologically simply connected” convention and records the change explicitly.
- `https://ocw.mit.edu/courses/18-112-functions-of-a-complex-variable-fall-2008/414780e0991d20cd338320d3784fae4d_lecture16.pdf` supports harmonic-as-real-part, the mean-value theorem, Poisson representation, and Poisson boundary convergence. Convention note: its annulus-average theorem is harvested and deferred rather than silently dropped.
- `https://ocw.mit.edu/courses/18-156-differential-analysis-spring-2004/2d5342d2f35b2d991e8a284c5ab1e325_lec1.pdf` supports mean value, maximum principle, uniqueness, and Harnack inequality. Convention note: the derivative-estimate and Green-representation headings were harvested and deferred to keep the page on the Poisson/Harnack track the design chose.
- `https://ocw.mit.edu/courses/18-156-differential-analysis-spring-2004/7bc7bb25dccb29a54eff57f0ac7cfcfd_lec2.pdf` supports the Poisson integral, the disc Dirichlet problem, the converse mean-value theorem, and harmonic analyticity. Convention note: Green-function headings are harvested and deferred to CA-14.
- `https://encyclopediaofmath.org/wiki/Harnack_theorem` supports Harnack's second theorem, which is the source-backed core of the Harnack-convergence item. Convention note: the article states the bounded-domain version; this scaffold keeps the plane-domain statement by applying that theorem on relatively compact discs, so the statement/proof pair stays `literature-derived` / `ai-altered`.
- `https://www.math.stonybrook.edu/~scott/mat536.spr23/schedule/` supports the inclusion of the harmonic and holomorphic Schwarz reflection principles on this page rather than leaving them implicit.
- `https://www.math.umd.edu/~pbrosnan/notes/complex/sect0011.html` supports the holomorphic Schwarz reflection formula and its exact boundary-value convention.

Dependency-closure statement: every published dependency that this scaffold makes load-bearing was opened from disk during this run. The concrete items opened were `thm-primitives-homologically-simply-connected-domains`, `thm-holomorphic-logarithms-homologically-simply-connected-domains`, `cor-global-cauchy-formula-higher-derivatives`, `thm-isolated-zeros-holomorphic-function`, `cor-local-holomorphic-roots-nonvanishing-function`, `thm-c2-holomorphic-components-are-harmonic`, `thm-clairaut-schwarz-mixed-partials`, `thm-no-continuous-logarithm-on-the-punctured-complex-plane`, `cor-holomorphic-mean-value-property`, `thm-open-mapping-theorem-holomorphic-functions`, `thm-identity-theorem-holomorphic-functions`, `lem-local-holomorphic-logarithm-nonvanishing-function-on-disc`, `cor-maximum-principle-real-part-holomorphic-function`, `thm-boundary-maximum-modulus-principle`, `thm-minimum-modulus-principle`, and `thm-conjugate-difference-quotient-characterizes-antiholomorphic-maps`. Every load-bearing dependency in the batch is either earlier on the same A page, on the earlier CA-8 page of this same batch, or already published content. No forward reference is load-bearing and no other batch is needed.

---

## 7. Confidence statement

High confidence in the item lists, the major dependency edges, and the identified design defects. Medium confidence in the final proof route for `thm-removable-isolated-singularity-for-bounded-plane-harmonic-functions` and in the exact reflected-disc formulation of `thm-harmonic-and-holomorphic-schwarz-reflection-principles`: both are source-backed and dependency-closed at scaffold level, but they are the two authoring points most likely to need step-5 tightening. I did not run `validate-plan.mjs` or `depsource.mjs` against a spliced spec because step 4 has not happened yet, and I could not obtain `fetch_verified` stamps because the workspace-side fetch tool had no DNS on Tuesday, August 25, 2026. `content-policy.mjs` and `proof-contract.mjs --strict` were both exercised and failed only for the expected pre-step-5 reason that none of this batch's planned `items/*.md` files exists yet.

---

## Continuity checkpoint

- Current substage: step 1–2 scaffolding complete; the proof-contract skeleton is written and should be revised only if Alpha changes the manifest.
- Owned artifact paths: `research/frontier-19-batch-8.pages.json`, `research/frontier-19-batch-8.coverage.json`, `research/frontier-19-batch-8.proof-contracts.json`, `research/frontier-19-batch-8.notes.md`.
- Completed checks: `pages.json` parses; all item deps resolve against published+planned ids; all page `requires` resolve; `coverage-checklist` passed with 0 errors and 0 warnings; `prosecheck` ran with warnings only; `content-policy` and `proof-contract --strict` were probed and fail only because step 5 has not authored the scoped item files yet.
- Open constraints: `source-fetch-check --stamp` could not run to completion because every URL failed with `EAI_AGAIN`; the CA-13 removable-harmonic-singularity proof route depends on the earlier CA-8 page and should stay that way unless Alpha deliberately broadens the page's prerequisites; the proof-contract file is a scaffold-stage skeleton and needs real fact-quote rows once the item texts exist.
- Exact next action: hand the batch to the step-3 Alpha for scaffold adjudication; if the manifest survives unchanged, use the current `pages.json`, `coverage.json`, and proof-contract skeleton as the step-5 authoring baseline.

## Re-harvest round

Dead-source check and scouting order followed:

- `https://sites.math.rutgers.edu/~greenfie/vnx/math503/diary.html` returned 404 in the batch liveness ledger. I searched Rutgers-hosted variants of the same diary before replacing the source and found the live alternate URL `https://sites.math.rutgers.edu/~greenfie/mill_courses/math503/diary.html`, which is the same Math 503 fall-2004 diary under a different path. I kept `original_url` in the coverage row.
- `https://ocw.mit.edu/courses/18-156-differential-analysis-spring-2004/8eec4d81f4a5f80f3fcefd0f3ed632c2_lec2.pdf` returned 404. I checked the current OCW lecture-notes index and the `lec2` resource page first, then recovered the same lecture PDF at `https://ocw.mit.edu/courses/18-156-differential-analysis-spring-2004/7bc7bb25dccb29a54eff57f0ac7cfcfd_lec2.pdf`. I kept `original_url` in the coverage row.
- `https://mathweb.ucsd.edu/~doprea/220s21.html` failed the liveness sweep with an SSL-certificate error. Before re-harvesting I checked the original course page, the `http` variant to inspect the lecture list, the linked Lecture 5 and Lecture 6 PDF targets, and nearby course-year pages by the same instructor. I did not recover a stable live full-text document for the 2021 source, and the other course years are different sources rather than alternate URLs for the same document.

Replacement sources, exact ranges read, and orphaned results:

- For `thm-poles-meromorphic-function-are-discrete-and-countable`, the replacement is the live Rutgers diary URL above. I re-read the October 13, 2004 entry, specifically the meromorphic-function discussion through the paragraph asserting that the zero set and pole set of a non-zero meromorphic function are discrete and that discrete subsets of open subsets of `R^2` are at most countable. This is the same source treatment that originally backed the item, so the mathematics of the item does not move.
- For `thm-converse-mean-value-property-for-plane-functions`, the replacement is the live MIT 18.156 Lecture 2 PDF above. I re-read the full four-page lecture, especially Theorem 2 on page 4, which states that a continuous function satisfying the local mean-value property is harmonic. This recovers the same source treatment, so the item statement does not move.
- For `thm-harnack-convergence-principle-for-plane-harmonic-functions`, no live alternate of the UCSD 2021 course page yielded full text, so this is a genuine re-harvest. I replaced that dead backing with `https://encyclopediaofmath.org/wiki/Harnack_theorem` and re-read the article in full, especially the paragraphs headed "Harnack's first theorem" and "Harnack's second theorem, the Harnack principle". The included harvested result is the second theorem, which explicitly gives monotone convergence to a harmonic limit together with local uniform convergence on closed subdomains. The source states the bounded-domain version; the planned page keeps the plane-domain formulation by applying the bounded-domain theorem on relatively compact discs, so the proof route remains `ai-altered` but the statement did not need to be narrowed.

Item-statement movement forced by the re-harvest: none.

Local gate status after the re-harvest:

- `node tools/source-backing.mjs --coverage research/frontier-19-batch-8.coverage.json --liveness research/frontier-19-url-liveness.json` passed after the coverage repair.
- `node tools/coverage-checklist.mjs research/frontier-19-batch-8.coverage.json --require-destination` passed after the coverage repair.
- `node tools/source-fetch-check.mjs --coverage research/frontier-19-batch-8.coverage.json --stamp` still failed in the workspace shell with `EAI_AGAIN` on the three newly introduced live URLs, so I could not mint fresh `fetch_verified` stamps from this sandboxed session on Tuesday, August 25, 2026.
- `url-sweep.mjs` was probed against the repaired coverage with a `/tmp` output path to respect the batch write boundary, but the shell-side network calls stalled without yielding a completed report before interruption. I therefore do not claim a local `url-sweep` pass from this session.

## Step-3 fix pass

### B8-1 — already correct

Evidence on disk as of Tuesday, August 25, 2026:

- `research/frontier-19-batch-8.coverage.json` already records the Toronto `Residue at infinity` row with `destination: "the-residue-theorem"` and the Brosnan `The argument principle and logarithmic derivatives of meromorphic functions` row with `destination: "the-argument-principle-and-rouche"`.
- `research/frontier-19-alpha-c-scope-decisions.json` records both exact declines as `decision: "stands"` under those same concrete destination page ids.
- Re-checks after reading Alpha's report:
  - `node tools/coverage-checklist.mjs research/frontier-19-batch-8.coverage.json` → `0 error(s), 0 warning(s)`.
  - `node tools/content-policy.mjs --manifest-only research/frontier-19-batch-*.pages.json` → `0 error(s), 0 warning(s)`.
  - `node tools/validate-plan.mjs research/plan-spec.json` exited `0` and ended with `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 376 page(s) with item lists.`

No change to `pages.json`, `coverage.json`, or `proof-contracts.json` was needed for this finding because the repaired destinations were already present on disk before this fix pass; the required Step-3 action here was to verify that state from disk and record it.

## Step-5 authoring

### Per-item list

The authored id set is exactly the four page inventories already recorded in section 1 above.

`verification.precheck: n/a`

- `def-complex-annulus`, `def-convergent-complex-laurent-series`, `def-principal-part-laurent-series`, `def-isolated-singularity-types`, `def-simple-pole`, `def-meromorphic-function-complex-domain`, `def-residue-isolated-singularity`, `def-singularity-at-infinity`
- `def-plane-harmonic-function`, `rem-agreement-with-c2-holomorphic-components-are-harmonic`, `def-harmonic-conjugate`, `def-mean-value-property-for-plane-functions`, `def-poisson-kernel-on-the-disc`, `def-poisson-integral-on-the-disc`

`verification.precheck: pass`

- `thm-laurent-expansion-annulus`, `thm-laurent-coefficient-formula-and-uniqueness`, `cor-laurent-coefficients-independent-of-radius`, `thm-laurent-regular-principal-decomposition`, `thm-removable-singularity-characterizations`, `thm-pole-characterizations`, `thm-isolated-singularity-trichotomy`, `thm-casorati-weierstrass`, `cor-residue-contour-integral-formula`, `lem-residue-simple-pole`, `thm-residue-pole-derivative-formula`, `cor-residue-quotient-simple-zero`, `thm-poles-meromorphic-function-are-discrete-and-countable`
- `ex-one-rational-function-has-three-laurent-series`, `ex-singularities-at-infinity-for-polynomials-and-reciprocals`, `ex-residue-of-exp-over-z-cubed-by-derivative-formula`, `ex-residue-of-p-over-q-at-a-simple-zero`, `cex-zero-residue-does-not-force-a-removable-singularity`, `cex-exp-one-over-z-is-essential-and-omits-zero`, `cex-sine-one-over-z-is-essential`, `cex-one-over-sine-one-over-z-has-a-nonisolate-singularity-at-zero`, `cex-a-laurent-series-on-a-punctured-disc-can-have-infinitely-many-negative-terms`
- `thm-local-holomorphic-potential-for-harmonic-functions`, `thm-harmonic-conjugate-on-homologically-simply-connected-domains`, `cor-harmonic-conjugates-differ-by-a-real-constant`, `thm-plane-harmonic-functions-are-smooth-and-real-analytic`, `thm-mean-value-property-for-plane-harmonic-functions`, `thm-maximum-and-minimum-principles-for-plane-harmonic-functions`, `cor-uniqueness-for-the-bounded-plane-dirichlet-problem`, `cor-liouville-theorem-for-plane-harmonic-functions`, `thm-identity-principle-for-plane-harmonic-functions`, `thm-conformal-invariance-of-plane-harmonicity`, `lem-poisson-kernel-properties-on-the-disc`, `lem-poisson-integrals-are-harmonic`, `lem-poisson-kernel-is-a-boundary-approximate-identity`, `thm-poisson-integral-solves-the-disc-dirichlet-problem`, `thm-poisson-representation-for-disc-harmonic-functions`, `thm-converse-mean-value-property-for-plane-functions`, `thm-removable-isolated-singularity-for-bounded-plane-harmonic-functions`, `thm-harnack-inequality-on-a-disc`, `thm-harnack-convergence-principle-for-plane-harmonic-functions`, `thm-harmonic-and-holomorphic-schwarz-reflection-principles`
- `ex-log-modulus-is-harmonic-on-the-punctured-plane`, `ex-real-parts-of-z-powers-are-harmonic`, `ex-a-harmonic-conjugate-of-x-squared-minus-y-squared`, `ex-poisson-integral-of-cos-theta`, `ex-harnack-inequality-for-a-poisson-kernel`, `cex-log-modulus-has-no-harmonic-conjugate-on-the-punctured-plane`, `cex-a-harmonic-function-can-vanish-on-a-line-without-vanishing-identically`, `cex-the-product-of-harmonic-functions-need-not-be-harmonic`, `cex-an-unbounded-harmonic-function-need-not-extend-across-a-puncture`

### Ledger

Dependency-list changes from the scaffold were real and localized. The changed ids are:

- CA-8 A page: `thm-laurent-expansion-annulus`, `thm-laurent-coefficient-formula-and-uniqueness`, `cor-laurent-coefficients-independent-of-radius`, `thm-laurent-regular-principal-decomposition`, `thm-removable-singularity-characterizations`, `thm-pole-characterizations`, `thm-isolated-singularity-trichotomy`, `thm-poles-meromorphic-function-are-discrete-and-countable`
- CA-8 B page: `ex-one-rational-function-has-three-laurent-series`, `cex-exp-one-over-z-is-essential-and-omits-zero`, `cex-a-laurent-series-on-a-punctured-disc-can-have-infinitely-many-negative-terms`
- CA-13 A page: `thm-local-holomorphic-potential-for-harmonic-functions`, `thm-harmonic-conjugate-on-homologically-simply-connected-domains`, `cor-harmonic-conjugates-differ-by-a-real-constant`, `thm-mean-value-property-for-plane-harmonic-functions`, `thm-maximum-and-minimum-principles-for-plane-harmonic-functions`, `cor-liouville-theorem-for-plane-harmonic-functions`, `lem-poisson-kernel-properties-on-the-disc`, `lem-poisson-integrals-are-harmonic`, `thm-poisson-integral-solves-the-disc-dirichlet-problem`, `thm-poisson-representation-for-disc-harmonic-functions`, `thm-converse-mean-value-property-for-plane-functions`, `thm-removable-isolated-singularity-for-bounded-plane-harmonic-functions`, `thm-harnack-inequality-on-a-disc`, `thm-harnack-convergence-principle-for-plane-harmonic-functions`, `thm-harmonic-and-holomorphic-schwarz-reflection-principles`
- CA-13 B page: `ex-log-modulus-is-harmonic-on-the-punctured-plane`, `cex-log-modulus-has-no-harmonic-conjugate-on-the-punctured-plane`

Nature of those changes:

- The Laurent spine now uses the actual annular-cycle, winding-number, and uniform-limit-through-integral machinery written in the proofs, not the thinner scaffold placeholders.
- The harmonic/Poisson spine now uses the actual local-potential, holomorphic-parameter-integral, Cauchy-estimate, Heine-Borel, and polygonal-connectedness machinery written in the proofs, not the slimmer scaffold routes.
- The only title-level change from the literal scaffold text is the YAML-escaping repair of `C\\{0}` in `cex-log-modulus-has-no-harmonic-conjugate-on-the-punctured-plane`; the mathematical title on render is unchanged.

Component provenance in the authored frontmatter follows the expectations table of section 4: literature-backed theorem/definition items are tagged `literature-derived` or `ai-altered` exactly where the proof route genuinely adapted the harvested sources; the deliberately non-load-bearing witness items kept `ai-generated` statement/construction tags only for explicit checkable examples/counterexamples.

AI-generated statement/construction items retained:

- `ex-singularities-at-infinity-for-polynomials-and-reciprocals`
- `ex-residue-of-p-over-q-at-a-simple-zero`
- `cex-zero-residue-does-not-force-a-removable-singularity`
- `ex-real-parts-of-z-powers-are-harmonic`
- `ex-harnack-inequality-for-a-poisson-kernel`
- `cex-a-harmonic-function-can-vanish-on-a-line-without-vanishing-identically`
- `cex-the-product-of-harmonic-functions-need-not-be-harmonic`

Counterexample search / witness-check scope for those items: local explicit algebra on the named witnesses only; no counterexample to the written claims was found.

### Gates

Clean on Tuesday, August 25, 2026:

- Scoped `reflow` + `precheck` on every authored proof-bearing item.
- `node tools/content-policy.mjs research/frontier-19-batch-8.pages.json`
- `node tools/validate-plan.mjs research/plan-spec.json` (exit `0`; it still prints repository-wide `redundant-prereq` notes, including on the CA-13 prerequisite closure)
- `node tools/coverage-checklist.mjs research/frontier-19-batch-8.coverage.json`
- `node tools/depcheck.mjs` after removing the duplicated example ids from the two A-page frontmatters
- `node tools/fwdcheck.mjs`
- `node tools/extcheck.mjs`
- `node tools/prosecheck.mjs library/complex-analysis/isolated-singularities-and-laurent-series*.md library/complex-analysis/harmonic-functions-and-the-poisson-integral*.md --warnings`

Not clean:

- `node tools/proof-contract.mjs research/frontier-19-batch-8.proof-contracts.json --strict`
  - after `node tools/regen-contract-entries.mjs research/frontier-19-batch-8.proof-contracts.json <all scope ids>`, the failure count dropped to `146 error(s)`
  - the remaining failures are now concentrated in boundary rows (`boundary-evidence-unanchored`) plus a small number of example-step-id mismatches such as the two tiny harmonic counterexamples and `ex-one-rational-function-has-three-laurent-series`
- `node tools/citecheck.mjs`
  - run only at repository scope
  - warning-only output was not fully triaged down to batch-8-only signal after authoring

### Escalations

- Real blocker: `research/frontier-19-batch-8.proof-contracts.json` still needs a full boundary-and-examples rewrite against the authored text. The automated citation/derivation regeneration succeeded for `48` of the `51` scoped entries, but the remaining `146` strict-contract errors were not repaired in this run.

### Confidence

Moderate on the authored mathematics and high on the local item/page mechanics. Every authored proof-bearing item now exists on disk and passes scoped `precheck`; the A/B page shapes match the published pattern after the A-page `examples: []` repair; `content-policy`, `coverage-checklist`, `depcheck`, `fwdcheck`, `extcheck`, and the scoped `prosecheck` runs listed above are all clean.

Low on step-5 completeness because the proof-contract artifact is still red after partial automated repair, and I did not complete a batch-specific `citecheck` triage after the authored text was in place.
