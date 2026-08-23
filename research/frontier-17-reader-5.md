# Frontier 17 — independent reader 5 report

Run `frontier-17`, Step 6a, batch 5. This report is the durable record of the independent read. Finding ids are stable and will not be renumbered.

## Fatal findings

### R5-1 — `lem-product-of-content-zero-set-and-interval-has-content-zero` — fatal

**Location:** Fact list and proof step 1.2.

**Defect:** Step 1.2 defines (N_i=\lceil L/\ell_i\rceil) and says that “the integer-part lemma” gives the two ceiling inequalities. The cited published item `lem-integer-part` defines only the floor and explicitly says that the ceiling is not defined there. Thus the displayed symbol is undefined in the cited vocabulary and the cited lemma does not state the claimed ceiling clause.

**Evidence:** `lem-integer-part` states the unique (m\in\mathbb Z) with (m\le x<m+1), names it (\lfloor x\rfloor), and its Remark says “The ceiling is not defined here.” The repair is to use (N_i=1+\lfloor L/\ell_i\rfloor) and cite the exact floor inequality.

### R5-2 — ball items citing a positive-radius-only definition at radius zero — fatal

**Items and locations:** `cor-volume-of-a-closed-three-ball`, Statement/Given; `thm-volume-of-a-closed-three-ball-cavalieri-proof`, Statement/Given; `thm-volume-recursion-for-closed-euclidean-balls`, Statement/Given.

**Defect:** These items quantify over (r\ge0) and identify (\overline B_n(0,r)) with the ball of `def-euclidean-spheres-and-closed-balls`. That published definition assumes (r>0); it does not define the zero-radius notation. The in-flight citations therefore widen the dependency’s domain.

**Evidence:** The published Definition begins “For (c\in\mathbb R^n) and (r>0), put …”. The batch proofs actively use (r=0), so the mismatch is load-bearing. The licensed repair is to define the (r=0) extension explicitly in each in-flight interface. The published dependency itself will not be edited.

### R5-3 — `thm-volume-of-a-closed-three-ball-cavalieri-proof` — fatal

**Location:** Proof steps 1.1–2.1 and the `zero`/`degenerate` contract rows.

**Defect:** Step 2.1 invokes Cavalieri to equate the ball and comparison-solid contents without first proving that either set is a bounded Jordan set. The cited Cavalieri corollary requires both compared sets to be bounded Jordan sets with the stated sectional hypotheses. Equal section areas alone do not supply Jordan measurability.

**Evidence:** `cor-cavalieri-principle-for-jordan-content` begins with bounded Jordan sets. The current proof only computes sections and volumes of the auxiliary cylinder/cones; it never establishes the ball’s Jordan measurability or the comparison solid’s. The contract’s radius-zero row consequently claims applicability that the proof has not licensed.

### R5-4 — `thm-cylindrical-shell-formula-for-solids-of-revolution` — fatal

**Location:** Proof step 4.1 and the `degenerate` boundary-contract row.

**Defect:** The proof says its Darboux/Riemann-sum argument permits (a=b), but step 2.1 requires a strict partition (a=r_0<\cdots<r_N=b), and [F4] cites a theorem stated only for a nondegenerate rectangle. Thus the declared (a=b) boundary case is sent through an inapplicable cited theorem.

**Evidence:** `thm-multidimensional-darboux-equals-riemann` explicitly assumes a nondegenerate rectangle. The contract row saying steps 2.1–4.1 give zero sums at (a=b) is contradicted by those steps. The case must be separated before [F4] is used.

### R5-5 — `thm-cylindrical-shell-formula-for-solids-of-revolution` — fatal

**Location:** Proof steps 2.1–4.1.

**Defect:** [F5] is the monotonicity theorem for functions on a nondegenerate rectangle, but step 2.1 applies it directly to integrals over Jordan subannuli. The proof then squeezes the integral over the full annulus between sums of subannular bounds without citing or deriving finite additivity/cover bounds for Jordan-set integrals. It also introduces minima and maxima on each compact radial subinterval without an input establishing their existence.

**Evidence:** `thm-multidimensional-integral-properties` is stated for functions on a rectangle; it does not itself state the finite Jordan-cover inequalities used here. The published `lem-finite-jordan-cover-sum-bounds` supplies exactly the missing upper-cover and interior-disjoint lower-family clauses, and the extreme-value theorem supplies the extrema.

### R5-6 — `thm-solid-between-continuous-graphs-fubini-formula` — fatal

**Location:** Fact [F3].

**Defect:** [F3] says Jordan Fubini applies whenever “the relevant sections are Jordan measurable and the section restrictions are integrable,” omitting the cited theorem’s hypotheses that the ambient set is bounded Jordan, the ambient function is integrable, and the section conditions hold outside a content-zero exceptional set. As written, [F3] is wider than its source.

**Evidence:** The exact Statement of `thm-jordan-fubini-by-sections` includes all three ambient/exceptional-set hypotheses before concluding the iterated formula. They happen to be available in the local proof, so the repair is an exact restatement, not a change of theorem.

### R5-7 — inflated Cavalieri restatements — fatal

**Items and locations:** `thm-volume-of-a-solid-of-revolution-by-discs` [F3], `cor-washer-method-for-solids-of-revolution` [F5], `thm-volume-of-a-closed-three-ball-cavalieri-proof` [F1], `thm-volume-recursion-for-closed-euclidean-balls` [F3], and `fs-equal-cross-sections-force-congruence` [F1].

**Defect:** These facts abbreviate Cavalieri as an unconditional rule that sectional contents integrate, or that equal sectional contents imply equal total content. The cited result requires bounded Jordan ambient sets and Jordan sections outside content-zero exceptional parameter sets; the comparison clause requires both sets to meet those hypotheses.

**Evidence:** Those hypotheses appear explicitly in `cor-cavalieri-principle-for-jordan-content`. The local applications can meet them, but the current [F] restatements do not preserve them and must be narrowed.

### R5-8 — `thm-real-gamma-is-smooth` — fatal

**Location:** Fact [F1] and proof step 2.1.

**Defect:** [F1] restates dominated differentiation as if an integrable uniform derivative bound were the only hypothesis. The cited theorem additionally requires continuity of the integrand and parameter derivative and one absolutely improperly integrable slice. Omitting these hypotheses widens the cited theorem.

**Evidence:** All omitted hypotheses are explicit in `thm-differentiation-under-dominated-improper-multiple-integrals`. They are true for the logarithmic-moment integrands and should be stated and discharged.

### R5-9 — `thm-real-beta-gamma-identity` — fatal

**Location:** Fact [F2] and proof step 1.2.

**Defect:** [F2] says change of variables applies to an injective (C^1) map with invertible derivative, but omits that the source set must be compact Jordan inside the open domain, that the integrand is bounded on the image, and that integrability of the integrand/pullback is part of the equivalence. This is a wider rule than the cited theorem states.

**Evidence:** `thm-change-of-variables-for-compact-jordan-sets` states those domain and integrability hypotheses explicitly. The compact interior rectangles in the proof satisfy them, so an exact restatement repairs the citation.

### R5-10 — `cor-volume-of-a-radius-r-n-ball` — fatal

**Location:** Fact [F1] and proof step 1.2.

**Defect:** [F1] merely names “the one-coordinate slicing recursion” instead of stating it. Step 1.2 needs the exact formula, including (n\ge2), (r\ge0), the integration limits, exponent, and factor (V_{n-1}(1)). A result-name is not a faithful citation clause.

**Evidence:** The complete formula is in `thm-volume-recursion-for-closed-euclidean-balls` and should replace the label-only paraphrase.

### R5-11 — `cor-volume-of-the-unit-n-ball` — fatal

**Location:** Fact [F1] and proof step 1.1.

**Defect:** Step 1.1 cites [F1] for (V_1(1)=2), but [F1] as written states only the (n\ge2) recursion. The base value is in the cited theorem’s Statement but was omitted from the Fact, so the step does not follow from the inputs it names.

**Evidence:** `thm-volume-recursion-for-closed-euclidean-balls` separately states (V_1(r)=2r). [F1] must include that clause and the contract must quote it.

### R5-12 — `fs-one-existing-iterated-integral-guarantees-multiple-riemann-integrability` — fatal

**Location:** Refutation step 2.1.

**Defect:** The two citations are swapped in the prose: the step says density comes from [F1], although density is [F2], and says [F2] rules out multiple integrability, although that contrapositive comes from [F1].

**Evidence:** [F2] cites the rational/irrational density definition; [F1] cites the Fubini envelope equality for a multiple-integrable function. Correcting the labels restores the intended valid argument.

### R5-13 — `cex-compact-solid-without-jordan-volume` — fatal

**Location:** Title versus Statement and witness.

**Defect:** The title asserts a “compact solid,” but the Statement refuted and proof establish only a compact subset, namely (S\times[0,1]^2). This witness has empty interior and is not a solid of either solid definition developed on the A page. The proof therefore does not establish the title’s stronger geometric wording.

**Evidence:** Step 1.1 explicitly proves that the witness has empty interior. The title must be narrowed to “compact subset.”

### R5-14 — `fs-every-compact-solid-has-a-volume` — fatal

**Location:** Title versus Statement and refutation.

**Defect:** The title says the false claim concerns every compact solid, while the Statement and witness concern every compact subset. Because the cited witness has empty interior and is not shown to be a solid, it does not refute the title’s wording.

**Evidence:** The preceding counterexample refutes “every compact subset of (\mathbb R^3) is Jordan measurable.” The title must use that same domain.

### R5-16 — batch-5 proof-contract citation clauses — fatal

**Location:** `research/frontier-17-batch-5.proof-contracts.json`, citation `quote` fields throughout all four pages.

**Defect:** Many contract rows contain only opening words or isolated fragments rather than the exact clause used: examples include “A subset (K\subseteq\mathbb R^n) is a compact subset,” “The symmetric assertion holds for the other coordinate block,” “When either condition holds,” and bare equation fragments stripped of their hypotheses. These do not meet the contract requirement to record the exact cited source clause and are not durable evidence of domain/quantifier fidelity.

**Evidence:** Every fragment occurs in its target, so the substring-only mechanical gate passes, but the surrounding source paragraph contains the omitted hypotheses or conclusion. All 147 citation rows require a semantic exact-clause pass; opening fragments must be expanded or replaced.

### R5-24 — `thm-volume-recursion-for-closed-euclidean-balls` — fatal

**Location:** Proof steps 1.1–2.1.

**Defect:** Step 2.1 assumes the ((n-1))-ball is compact so that the solid-between-graphs theorem applies, but the induction base in step 1.1 established only Jordan measurability and content for ([-r,r]), not compactness. The compact part of the induction hypothesis therefore had no base input.

**Evidence:** `thm-solid-between-continuous-graphs-fubini-formula` requires a compact Jordan base. The repair cites Heine--Borel in step 1.1 and establishes the closed bounded interval as compact before induction begins.

### R5-25 — `thm-cylindrical-shell-formula-for-solids-of-revolution` — fatal

**Location:** Proof step 1.1.

**Defect:** Step 1.1 called the annular base compact merely after saying it was closed and bounded, but no input licensed the Euclidean Heine--Borel inference. Compactness is required by [F1], so this was an unlicensed load-bearing step.

**Evidence:** The exact closed-and-bounded equivalence is in `thm-heine-borel-rn`. It is now [F12] and is cited before the solid theorem is applied.

## Nonfatal and polish findings

### R5-15 — `ex-unit-n-ball-volumes-through-eight-from-gamma` — nonfatal

**Location:** Former verification step 2.1.

**Defect:** After steps 1.1–1.2 had already proved all eight values from the Gamma formula, step 2.1 asserted that the slicing recursion independently reproduced the first five without supplying the four integral evaluations needed to do so. The unsupported extra check was not load-bearing for the Example, so this is nonfatal.

**Disposition:** Fixed. The unproved independent-check claim and its unused dependency were removed; step 2.1 now only combines the two completed substitution blocks.

### R5-17 — the two A-page summaries — nonfatal

**Locations:** Final sentence of `volumes-of-elementary-solids-and-solids-of-revolution.md`; second paragraph of `the-real-gamma-and-beta-functions.md`.

**Defect:** The first summary claimed how another page uses the ball recursion, contrary to the page-summary no-survey rule. The second grammatically routed Gautschi's inequality through the factorial squeeze, whereas the proof derives Gautschi directly from strict log-convexity.

**Disposition:** Fixed. The cross-page usage claim was removed, and the Gamma summary now separates the direct Gautschi route from the squeeze-to-Bohr--Mollerup route.

### R5-18 — inaccurate boundary-contract anchors — nonfatal

**Locations:** Boundary rows for the graph-null theorem, cone volume, strict log-convexity, Bohr--Mollerup integer shift, radius scaling, washer empty case, and related changed rows.

**Defect:** Several rows named the wrong step, said the cone Statement required (h>0) although it allows (h=0), referred to an undefined “floor/ceiling construction,” or treated a degenerate nonempty interval as the empty case. The proofs were either correct or repaired elsewhere, but the dispositions were not the determinations actually made.

**Disposition:** Fixed. All 408 boundary rows received a semantic pass; the affected evidence/reasons now name the actual step or Statement and the true boundary treatment.

### R5-19 — `ex-torus-volume-by-washers` — polish

**Location:** Verification step 3.1.

**Defect:** The step identifies the semicircle integral with half the disc content without labeling `prop-riemann-graph-area-equals-jordan-content`, although that exact published result is already in `deps`.

**Disposition:** Left unchanged under the 30-second rule: this is a one-citation bridge a competent reader closes immediately, not a fatal gap.

### R5-20 — `ex-unit-ball-volumes-through-five-from-slicing` — polish

**Location:** Verification steps 1.1–2.1.

**Defect:** The upper-semicircle identification and the substitution (t=\sin\theta) are compressed rather than assigned explicit Facts.

**Disposition:** Left unchanged under the 30-second rule; the disc-area and Wallis inputs are declared and the elementary substitutions close immediately.

### R5-21 — `lem-bohr-mollerup-factorial-squeeze` — polish

**Location:** Proof step 1.1.

**Defect:** The monotonicity of convex secant slopes is invoked without writing the two one-line convex-combination derivations at (n) and (n+x).

**Disposition:** Left unchanged under the 30-second rule; both inequalities follow directly from [F1] and elementary algebra.

### R5-22 — `lem-stirling-formula-up-to-a-positive-constant` — polish

**Location:** Proof step 1.1.

**Defect:** Termwise integration of the logarithm power series on (|u/r|\le1/2) is compressed into the phrase “the remaining absolutely convergent even series.”

**Disposition:** Left unchanged under the 30-second rule: uniform absolute convergence on that fixed half-radius interval and the (O(r^{-2})) bound are immediate from the displayed series.

### R5-23 — `thm-real-gamma-endpoint-behaviour-and-unique-minimum` — polish

**Location:** Proof step 2.1.

**Defect:** The step uses the standard fact that the derivative of a differentiable strictly convex function is strictly increasing without expanding its secant-slope proof.

**Disposition:** Left unchanged under the 30-second rule; it is a short bridge between the cited strict convexity and smoothness inputs.

## Coverage checkpoint

- Scoped pages opened: 4 of 4.
- Scoped mathematical-content items opened: 56 of 56 (51 proof-bearing).
- Every numbered proof/verification/refutation/counterexample step received a first adversarial read.
- Every `[F#]` target and every additional external `deps` target was opened on disk; 89 distinct external dependencies were checked for status and Statement provenance. No load-bearing dependency has `provenance.statement: ai-generated` or missing component provenance.
- All four page files were opened. Both A summaries have two paragraphs below the word limit; both B pages have no authored body.
- Final state: all fatal findings repaired in assigned in-flight files; no unresolved batch-5 fatal remains.

## Fatal finding dispositions and changes

- `R5-1`: replaced the undefined ceiling by (1+\lfloor L/\ell_i\rfloor), added the exact floor Fact, and updated its contract.
- `R5-2`: explicitly defined the radius-zero ball extension in the three in-flight interfaces and retagged their materially altered Statements `ai-altered`; the published positive-radius-only definition was not edited.
- `R5-3`: rebuilt the Cavalieri proof. The ball, cylinder, cones, and comparison solid are now compact Jordan solids before section comparison; annular sections are proved Jordan; finite additivity and Cavalieri are then applied on their exact domains.
- `R5-4`, `R5-5`, `R5-25`: separated (a=b), added Heine--Borel, finite Jordan-cover bounds, extreme values, and Jordan finite additivity, and rewrote the shell squeeze with canonical phase stratification.
- `R5-6`, `R5-7`: restored the bounded-Jordan, ambient-integrability, exceptional-set, and section hypotheses in every Fubini/Cavalieri Fact.
- `R5-8`: restored all dominated-differentiation hypotheses and discharged continuity, one absolutely integrable slice, and the uniform derivative bound.
- `R5-9`: restored the compact-Jordan domain, bounded-integrand, and integrability-equivalence hypotheses of change of variables.
- `R5-10`, `R5-11`, `R5-24`: stated the exact ball recursion and base value, and supplied the compact induction base.
- `R5-12`: corrected the swapped density/Fubini labels and the step inputs.
- `R5-13`, `R5-14`: narrowed both titles from “compact solid” to “compact subset” in the item files and batch manifest.
- `R5-16`: expanded/replaced every contract citation fragment with an exact, hypothesis-bearing source clause. The final contract has 160 citation rows; every quote was reread against its target.
- No lemma, theorem, corollary, example, counterexample, or false-statement item was added or deleted. One redundant verification step and one unused dependency were removed from `ex-unit-n-ball-volumes-through-eight-from-gamma`.
- Material changes affected 23 item files, two A-page summaries, `research/frontier-17-batch-5.pages.json`, and `research/frontier-17-batch-5.proof-contracts.json`. No changed item carried `verification.judge`, so there was no stale judge block to delete. `research/plan-spec.json` was not touched.

## Validation

- `tools/reflow.mts`: all 23 changed items reported `unchanged` (already canonical).
- Targeted `tools/precheck.mts`: 23/23 changed items pass; the two rewritten proofs were reflowed and rechecked again after their final edits.
- `proof-contract --strict`: 51/51 proof-bearing items, 0 errors, 0 warnings.
- `citation-fidelity`: 160 citations, no missing quote, no widening candidate.
- `boundary-audit`: 408 rows, 201 `not_applicable`, no template cluster, no contradicted disposition.
- `content-policy`: 56 scoped items, 0 errors, 0 warnings.
- `coverage-checklist`: 2 A pages / 82 harvested results, 0 errors, 0 warnings.
- `prosecheck`: 6 scoped manifest/contract/page files, 0 errors, 0 warnings; no positional contradiction.
- `audit-manifest`: 273 relationships over 56 items, 0 defects.
- `finite-smoke`: 0 errors and 0 registered checks; no item in this analytic batch carried a finite-smoke obligation, so this is not counted as affirmative proof evidence.
- `risk-report`: 51 items routed, 0 errors. High/critical `risk_review` dispositions remain Alpha's Step-6 responsibility and were not fabricated here.
- Whole-tree `depcheck` remains red only on the out-of-batch published item `rem-sine-period-arc-length-integrand-is-nonelementary` lacking `verification.sources_checked`. Whole-tree `rendercheck` remains red only on the out-of-batch in-flight item `cor-surface-area-of-revolution-formula` with unparsable YAML. The 33 global `citecheck` warnings name no batch-5 item. These are recorded blockers, not permission requests and not edits within reader-5 authority.

## Per-page verdicts

- `volumes-of-elementary-solids-and-solids-of-revolution`: **clean after repairs**. All 15 items opened; every proof step and Fact citation reread on final text. No unresolved fatal.
- `volumes-of-elementary-solids-and-solids-of-revolution-examples`: **clean after repairs, with polish R5-19/R5-20 recorded**. All 9 items opened. No unresolved fatal.
- `the-real-gamma-and-beta-functions`: **clean after citation repairs, with polish R5-21/R5-22/R5-23 recorded**. All 25 items opened. No unresolved fatal.
- `the-real-gamma-and-beta-functions-examples`: **clean after R5-15**. All 7 items opened. No unresolved fatal.

**Opened-item count:** 56/56 scoped items, plus 89 distinct external dependency items, for 145 item files opened in this audit. Every numbered proof step and every `[F#]` citation in batch 5 was read; there is no coverage exception.
