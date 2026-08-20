# frontier-16 independent reader report — batch 2

Reader: `reader-2`  
Run: `frontier-16`  
Step: 6a  
Batch: 2

## Scope and method

The scope of record is `research/frontier-16-batch-2.pages.json`: four pages containing 42 authored items, of which 35 are proof-bearing and appear in `research/frontier-16-batch-2.proof-contracts.json`. I read the final item files on disk after `author-batch-2` completed. For each item I check title and Statement against the proof; each numbered proof step against its explicit facts, earlier steps, hypotheses, or elementary algebra; every direct `[F#]`/`[A#]`/`[L#]` citation against the cited item on disk; standard boundary cases; component provenance; and page prose.

Finding identifiers are stable and will not be renumbered.

## Fatal findings

### R2-1 — `lem-simple-polygon-has-an-interior-diagonal` — fatal

Location: proof steps 1.1 and 2.2. The proof treats local sidedness at a convex boundary vertex, the implication from a blocked neighbor chord to a polygon vertex inside the adjacent triangle, and the claim that the selected segment stays in the polygon as consequences of `[L1]`, but `[L1]` is only the definition of a diagonal. These are substantive planar-separation assertions. The cited Erickson source explicitly says the definition of a diagonal requires the Jordan polygon theorem and invokes the Jordan triangle theorem in this proof; neither result is a dependency available to this item. The proof therefore does not license the existence conclusion. **Fixed:** the unsupported item was deleted from the in-flight page and contract; both harvested diagonal rows were marked `deferred` with the page-order reason; no consumer remains.

### R2-2 — `thm-simple-polygon-admits-a-triangulation` — fatal

Location: proof step 1.2. `[L1]` asserts only that an interior diagonal exists. It does not assert that the diagonal splits the filled set into two smaller simple polygonal regions, that their union is the original region, or that their intersection is exactly the diagonal. Those are the entire induction step, not a 30-second bridge. The source proof uses point-in-polygon parity at this point. **Fixed:** the definition now distinguishes general finite face-to-face triangulations from the frugal special case, and the theorem has a personally authored constructive proof using a generic projection, finitely many affine boundary bands, a common trapezoidal-cell refinement, and triangle subdivision. It has no load-bearing forward edge.

### R2-3 — `cor-simple-polygon-triangulation-has-n-minus-two-triangles` — fatal

Location: title, Statement, and proof step 1.2. Once general triangulations are distinguished from frugal ones, the unqualified title and Statement are false: adding subdivision vertices changes the triangle count. Even under the original frugal convention, `[L1]` does not license the asserted connected face-adjacency graph, separating internal edge, smaller polygonal regions, or the relation $n_1+n_2=n+2$. An attempted Euler repair was rejected during the page-order pass because Euler’s formula is homed on page order 357, later than this page at 288, and would create a load-bearing forward cycle. **Fixed:** the corollary was deleted from the in-flight page and contract and both source-count rows were marked `deferred`; it had no downstream consumer.

### R2-4 — `thm-triangle-content-and-base-height-formula` — fatal

Location: frontmatter title. The title says without qualification that the content is “equal to half base times height,” but the page defines the chosen base/height only for a nonzero side, and the Statement and proof correctly impose $A\ne B$. The title therefore asserts more than the Statement. **Fixed:** “when the chosen side is nonzero” was added to the item and manifest titles.

### R2-5 — `lem-uniform-tail-control-for-dominated-improper-multiple-integrals` — fatal

Location: Statement and proof steps 1.1–3.1. The displayed quantities $\int_D f_t$, $\int_D(f_t-f_s)$, and their compact-core counterparts are used without hypotheses that $D$ is open, $f:D\times I\to\mathbb R$, and the relevant slices are locally Riemann integrable. The proof also selects an exhaustion without citing its existence and passes signed limits without the absolute-exhaustion theorem. **Fixed:** all domain/local-integrability hypotheses are explicit; comparison establishes every signed integral before use; the open-set exhaustion and signed absolute-exhaustion theorems are cited; all resulting contract edges and boundaries were updated.

### R2-6 — page `areas-of-elementary-plane-figures` — fatal

Location: second summary paragraph, opening sentence. Grammatically, “Translation invariance first identifies graph area with Jordan content and gives the disc content” attributes both conclusions to translation invariance. The identification is instead `prop-riemann-graph-area-equals-jordan-content`, and the disc value also uses the separate Riemann-area theorem. **Fixed:** the sentence now names translation invariance, graph/Jordan identification, and the disc formula as separate successive moves; the paragraph also reflects the repaired vertical-decomposition triangulation route.

### R2-7 — `thm-continuity-of-dominated-parameter-dependent-improper-integrals` — fatal

Location: Fact `[L1]` and its proof-contract citation. The Fact repeats only the opening slogan of the tail lemma, omitting its domain, local-integrability, domination, finiteness, quantifiers, and the actual estimates used in steps 1.1 and 2.1. A clause’s opening words are not a faithful citation. **Fixed:** `[L1]` now gives the quantified hypotheses and estimate, its exact source clause is in the contract, and the proper-integral Fact used on the core now states monotonicity as well as the absolute-value estimate.

### R2-8 — `thm-differentiation-under-dominated-improper-multiple-integrals` — fatal

Location: Facts `[L2]` and `[L3]` and their proof-contract citations. `[L2]` is only the tail lemma’s slogan although steps 1.2–2.1 need its quantified estimates; `[L3]` omits the continuity theorem’s continuity and local-domination hypotheses. **Fixed:** both Facts and contract quotes are faithful; the proof now also writes the exhaustion-limit argument that identifies $\int_Dq_h$ with the difference quotient and explicitly closes absolute integrability under sums.

### R2-9 — `cex-differentiation-under-an-improper-integral-without-domination` — fatal

Location: Fact `[L1]` and step 2.1. The Fact quotes only the final slogan of the dominated-differentiation theorem, then step 2.1 uses its contrapositive. The citation omits the theorem’s continuity, base-slice, open-interval, and compact-parameter domination hypotheses; those are essential to that contrapositive. **Fixed:** `[L1]` and its contract carry the complete sufficient condition, step 2.1 restricts to the open half-line and verifies every other hypothesis, and step 1.1 now proves $\int_0^\infty e^{-u}\,du=1$ from exact FTC/chain-rule/normalization/limit inputs.

### R2-10 — `ex-scaled-gaussian-parameter-integral` — fatal

Location: Fact `[L2]` and step 1.2. The Fact again cites only the dominated-differentiation theorem’s final slogan, not the conditions under which differentiation is licensed. **Fixed:** the complete compact theorem is cited, and step 1.2 verifies one Gaussian base slice and a single integrable derivative dominator on every compact $C\subset(0,\infty)$.

## Nonfatal findings

### R2-11 — `thm-open-subsets-of-rn-admit-jordan-exhaustions` — nonfatal

Location: proof step 2.1. `[L1]` guarantees a finite union of closed grid rectangles, not rational-endpoint rectangles, while the least-code construction enumerates only rational endpoint lists. Rational density and the positive compact-to-complement margin close the gap in well under 30 seconds, but that derivation was not written. **Polished:** the proof now preserves both positive margins while moving the finitely many common grid endpoints to rational values; the contract map is current.

### R2-12 — `thm-absolute-improper-multiple-integral-by-exhaustion` — nonfatal

Location: proof step 1.1. Finiteness of the $f^+$ and $f^-$ improper integrals uses proper monotonicity from `[L3]` before taking suprema, but the step cited only `[L1,L2]` and `[L3]` was restated as linearity alone. **Polished:** monotonicity is stated and cited, and the contract use is mapped.

### R2-13 — `thm-differentiation-under-dominated-improper-multiple-integrals` — nonfatal

Location: transition in step 2.1 from $\int_Dq_h$ to the difference quotient of $F$. It requires linearity of absolutely convergent improper integrals, whereas `[L6]` stated only proper linearity. Exhaustion independence plus proper linearity closes this immediately. **Polished:** `thm-absolute-improper-multiple-integral-by-exhaustion` is now a dependency/Fact and the equality is proved on one exhaustion before passing to $D$.

### R2-14 — `lem-plane-gaussian-integral-in-polar-coordinates` — nonfatal

Location: proof steps 2.1 and 5.1. Change of variables gives a proper integral on a parameter rectangle, but its conversion to the displayed product integral was not licensed; differentiating $-\tfrac12e^{-r^2}$ silently used the chain rule; and the bound $e^{-(x^2+y^2)}\le1$ lacked the normalization $\exp(0)=1$. **Polished:** the product-function theorem, chain rule, square derivative, and normalized positive exponential are explicit Facts and contract citations.

### R2-15 — `thm-simple-polygon-content-is-the-sum-of-triangle-contents` — nonfatal

Location: proof step 1.2. `[L4]` gives content zero to a continuous graph, but the step silently used monotonicity to handle a singleton/empty face intersection. **Polished:** `[L5]` now states and cites that content zero passes to subsets; the repaired face-to-face definition ensures every intersection is exactly one of these cases.

### R2-16 — `cex-differentiation-under-an-improper-integral-without-domination` — nonfatal

Location: proof step 1.1. The substitution reduces the value to $t\int_0^\infty e^{-u}\,du$, but no cited fact evaluated that last integral as $1$. **Polished:** the antiderivative and limit are now proved from the derivative, chain rule, FTC, normalization, and exponential limit, all recorded in the contract.

### R2-21 — batch manifest dependency records — nonfatal

Location: `research/frontier-16-batch-2.pages.json`. Before the repair pass, the manifest dependency arrays disagreed with the authored frontmatter for `thm-parallelogram-content-and-base-height-formula`, `cex-linear-bijection-need-not-preserve-jordan-content`, `thm-open-subsets-of-rn-admit-jordan-exhaustions`, `thm-nonnegative-improper-multiple-integral-by-exhaustion`, `lem-uniform-tail-control-for-dominated-improper-multiple-integrals`, `thm-continuity-of-dominated-parameter-dependent-improper-integrals`, `thm-differentiation-under-dominated-improper-multiple-integrals`, `lem-plane-gaussian-integral-in-polar-coordinates`, `ex-unequal-iterated-improper-integrals-on-the-unit-square`, `cex-zero-iterated-integrals-without-a-double-integral`, `cex-differentiation-under-an-improper-integral-without-domination`, and `ex-scaled-gaussian-parameter-integral`. This would make the later manifest-bound receipt false even where the item proof was sound. **Fixed:** all 40 surviving manifest rows now agree exactly with item titles and dependency arrays; the two withdrawn items are absent. Alpha 6b must mechanically apply this licensed manifest change to `research/plan-spec.json` with `splice-plan --update`; this reader did not touch the plan.

## Polish

### R2-17 — `cor-disc-jordan-content-is-pi-r-squared` — polish

The `nonempty-choice` contract row said “the shrinking square cover is explicit,” but no shrinking-square cover occurs in this proof. No mathematical case was missed. **Fixed:** the row now says that both radius cases use fixed sets/functions and make no selection.

### R2-18 — `thm-nonnegative-improper-multiple-integral-by-exhaustion` — polish

The `one` boundary row claimed that a one-member exhaustion of a compact domain stabilizes. Under the strict nesting clause $K_j\subseteq\operatorname{int}K_{j+1}$, a nonempty compact exhaustion generally cannot stabilize at the whole domain. **Fixed:** the row now checks the one-dimensional ambient case against steps 1.1–1.2.

### R2-19 — `thm-absolute-improper-multiple-integral-by-exhaustion` — polish

Its `one` boundary row repeated the same false stabilizing-exhaustion rationale. **Fixed:** it now records the one-dimensional positive/negative-part argument at step 1.1.

### R2-20 — proof-contract citation records — polish

The contract quotes for `fs-a-bounded-plane-set-has-an-area` `[L3]`, `lem-determinant-base-height-identity-in-r2` `[L2]`, `ex-unit-disc-has-jordan-content-pi` `[L2]`, `ex-irregular-pentagon-area-by-triangulation-and-shoelace` `[L2]`, and `lem-riemann-integral-unchanged-by-content-zero-modification` `[L2]` stopped at an introductory clause, a colon, or a pronoun whose antecedent was outside the quote. **Fixed:** each quote now contains the operative formula/definition and passes exact substring and widening checks.

## Changes made

- Deleted and deferred `lem-simple-polygon-has-an-interior-diagonal`; the proof relied on unavailable polygonal separation.
- Deleted and deferred `cor-simple-polygon-triangulation-has-n-minus-two-triangles`; its original proof was unsupported, the statement is false for the repaired general convention, and the honest Euler repair would be a load-bearing forward dependency.
- Reworked `def-simple-polygonal-region-and-triangulation` to distinguish a general finite face-to-face triangulation from the frugal no-subdivision-vertex special case.
- Personally rewrote the full proof of `thm-simple-polygon-admits-a-triangulation` by generic vertical decomposition and updated `thm-simple-polygon-content-is-the-sum-of-triangle-contents` and `thm-shoelace-formula-for-simple-polygons` for subdivision vertices.
- Corrected the title of `thm-triangle-content-and-base-height-formula` and the mathematical summary of `areas-of-elementary-plane-figures`.
- Repaired hypotheses, Facts, proof steps, and/or citations in `thm-open-subsets-of-rn-admit-jordan-exhaustions`, `thm-absolute-improper-multiple-integral-by-exhaustion`, `lem-uniform-tail-control-for-dominated-improper-multiple-integrals`, `thm-continuity-of-dominated-parameter-dependent-improper-integrals`, `thm-differentiation-under-dominated-improper-multiple-integrals`, `lem-plane-gaussian-integral-in-polar-coordinates`, `cex-differentiation-under-an-improper-integral-without-domination`, and `ex-scaled-gaussian-parameter-integral`.
- Synchronized all surviving titles/dependency arrays in `research/frontier-16-batch-2.pages.json`; final scope is 40 items, 33 proof-bearing.
- Updated `research/frontier-16-batch-2.coverage.json`: all four source rows for the two withdrawn results are durably `deferred`, and stale rationales referring to a retained diagonal were corrected.
- Updated `research/frontier-16-batch-2.proof-contracts.json` for every changed citation, proof step, dependency, scope row, and boundary disposition. Final contract size is 33 proofs, 155 exact citations, and 264 boundary rows.
- No item was added. Neither withdrawn id was on `main`; both removals are represented in the manifest/coverage artifacts and are to be transcribed mechanically by Alpha 6b. No `verification.judge` block existed on a changed item, so there was no stale judge block to delete.

### Verification

- `tools/reflow.mts`: all changed surviving items already canonical.
- Targeted and full batch `tools/precheck.mts`: 33/33 proof-bearing items pass.
- `proof-contract --strict`: 33/33, 0 errors, 0 warnings.
- `citation-fidelity --fail-on-missing-quote`: 155 citations, no missing quote and no widening candidate.
- `boundary-audit`: 264 rows, no template cluster. Its sole detector candidate is the reviewed shoelace empty-sum false positive: the Statement has $n\ge3$, so the finite sum cannot be empty.
- `content-policy`: 40 scoped items, 0 errors, 0 warnings.
- `coverage-checklist`: 84 harvested rows, 0 errors; the existing area low-yield warning remains for Alpha’s already-required source-decline review.
- `finite-smoke`: 0 registered checks apply to these 33 contracts; this is recorded as non-applicability, not evidence. `risk-report`: 0 errors; Alpha 6b still owns the required high/critical `risk_review` dispositions.
- `rendercheck`: all changed surviving items clean. `prosecheck`: all four pages clean.
- `depcheck`, `fwdcheck`, `extcheck`, and `citecheck`: hard-clean; the only owned citecheck messages are the known false positives that parse set translation as order translation.
- Manifest/frontmatter parity: 40/40 surviving items, no title or dependency mismatch. Batch-scoped `git diff --check` is clean.

## Page verdicts

- `areas-of-elementary-plane-figures`: **repaired; clean**. Final scope is 15 items. The unsupported diagonal and frugal-count results are withdrawn/deferred; the remaining polygon chain is dependency-closed at this page order.
- `areas-of-elementary-plane-figures-examples`: **clean**. All six constructions were recomputed, remain non-load-bearing where AI-generated, and their citations/contracts are current.
- `improper-and-parameter-dependent-multiple-integrals`: **repaired; clean**. All 15 items have title/Statement/proof agreement, explicit domain and boundary hypotheses, faithful citations, and current contracts.
- `improper-and-parameter-dependent-multiple-integrals-examples`: **repaired; clean**. All four witnesses/formulas were independently recomputed and the dominated-differentiation uses now state every hypothesis.

Coverage statement: I opened all 42 originally dispatched items in full, including all 110 original numbered steps, 146 original direct fact citations, 280 original boundary rows, both A-page summaries, both B-page bodies, and every component-provenance record. I then reread every materially changed surviving item and every new/changed dependency clause. Final scope is 40 items with 103 numbered steps, 155 direct citations, and 264 boundary rows. No scoped item, proof step, dependency citation, title/Statement comparison, page body, or provenance record was skipped. No unresolved mathematical concern remains.
