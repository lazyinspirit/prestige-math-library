# Independent reader 6 — `frontier-16`, Step 6a

Scope: every item on the four pages in `research/frontier-16-batch-6.pages.json`. I opened all 39 assigned item files and checked every numbered proof step, title, Statement/Example, Fact citation, provenance pair, and contract boundary disposition. The citation pass opened 102 unique cited item targets on disk and checked 193 contract citation rows. I did not judge, edit `research/plan-spec.json`, touch another batch, edit a published dependency, or make a stage transition.

## Fatal findings

### R6-1 — `thm-fundamental-group-of-a-product` — Statement and end of Proof — fatal — fixed

The Statement called the coordinate isomorphism **natural**, but the Proof stopped after constructing mutually inverse homomorphisms. It never quantified over pointed maps in either variable or proved the naturality square. This was a Statement asserting more than the supplied proof established, so the 30-second rule did not apply.

I added step 4.1. For arbitrary pointed maps $f:X\to X'$ and $g:Y\to Y'$, it establishes the induced homomorphisms from the loop-class definition, computes both routes around the square on an arbitrary product-loop class, and obtains the same pair $([f\pi_X\gamma],[g\pi_Y\gamma])$. The proof contract now records F5, the new step, its inputs, and the canonical phase number 4.1. The existing `provenance.proof: ai-altered` remains accurate.

### R6-2 — `prop-covering-morphism-subgroup-criterion` — Proof step 3.1 — fatal — fixed

The original step proved that the covering morphism was a surjective local homeomorphism and then said “Therefore [F4] gives a surjective covering map.” [F4] is only the definition of a covering map; it does not license the false general implication that every surjective local homeomorphism is a covering.

I replaced the inference with the needed full-sheet argument. After proving surjectivity by path lifting, the proof takes a common path-connected neighbourhood evenly covered by both $p_1$ and $p_2$. For each $p_1$-sheet $U$, uniqueness of lifts identifies $f|_U$ with $(p_2|_V)^{-1}p_1|_U$ for the appropriate $p_2$-sheet $V$. It then proves that $f^{-1}(V)$ is exactly the disjoint union of all such $U$, each mapped homeomorphically onto $V$. The proof contract records the rewritten step and its use of F3.

## Nonfatal and polish findings

### R6-3 — `prop-covering-morphism-subgroup-criterion` — Facts and Proof step 1.1 — polish — fixed within R6-2

The forward implication invoked functoriality of induced fundamental-group maps, and the dependency was present in frontmatter, but no Fact stated it and step 1.1 omitted it from its inputs. This was a sub-30-second bridge. While repairing R6-2, I added faithful Fact F7 from `thm-induced-fundamental-group-map-functoriality`, cited it in step 1.1, and synchronized the contract. No separate polish-only repair cycle was opened.

### R6-4 — `lem-subgroup-quotient-of-universal-cover` — Proof step 1.1 — polish — recorded, not edited

Step 1.1 invokes one-point determination of deck transformations. The correct published dependency, `prop-deck-transformations-are-determined-by-one-point-and-act-freely`, is already in `deps`, but the result is absent from Facts and from the step’s explicit inputs. The cited theorem closes the gap immediately. Under the 30-second rule this is polish, so I recorded it and did not open an item repair cycle solely for it.

### R6-5 — `ex-fundamental-groups-of-once-and-twice-punctured-two-sphere` — Example display — polish — fixed

The display contained literal `,qquad` rather than `,\qquad`, causing stray letters between the two group computations. I corrected the TeX command. The verification itself was already mathematically correct.

### R6-6 — `cor-real-line-is-universal-cover-of-circle` — Statement display — polish — fixed

The displayed quotient projection contained literal `,qquad` rather than `,\qquad`. I corrected the TeX command; the map and proof were otherwise correct.

### R6-7 — `lem-covering-basepoint-change-conjugates-subgroup` — Proof step 1.1 — polish — fixed

The projected conjugate was printed as `$g\,p_*[\lambda],g^{-1}$`. I replaced the comma by multiplication, giving `$g\,p_*[\lambda]g^{-1}$`, and synchronized the contract claim. Step 2.1 and the Statement already used the intended conjugacy formula.

### R6-8 — batch-6 proof contracts, all proof-bearing item ids — citation evidence — nonfatal — fixed

The durable contract contained quote fields that were only opening words or unfinished fragments rather than the exact cited clause. Examples were `lem-open-cover-loop-generation` F1 (“a Lebesgue number … such that every nonempty”), its F7 ending before the required inequality, and `lem-subgroup-quotient-of-universal-cover` F2 recording only “no path reversal is inserted” although the Fact also uses the isomorphism and endpoint assignment.

The item-level Facts were faithful when checked against the opened dependencies; the defect was the inadequate durable evidence. I expanded 123 contract quote rows to complete on-disk clauses carrying the relevant hypotheses and conclusions. `proof-contract --strict` and `citation-fidelity --fail-on-missing-quote` now both pass.

### R6-9 — `lem-open-cover-loop-generation` — contract boundary `degenerate` — polish — fixed

The row claimed that step 1.1 produced repeated subdivision vertices, but the uniform subdivision is strictly increasing. I replaced it with the boundary actually checked: if the loop is constant on a retained subinterval, step 3.1 and F3 make the resulting constant loop factor an identity.

### R6-10 — `lem-van-kampen-factorization-invariance` — contract boundary `zero` — polish — fixed

The row said step 1.1 explicitly assigned the identity to a constant-loop factorization, which the step did not say. I replaced it with the actual disposition: the common basepoint lies in both cover members, so the constant loop has a one-factor subordinate factorization whose value is the identity by F3.

### R6-11 — `ex-fundamental-groups-of-once-and-twice-punctured-two-sphere` — contract boundary `one` — polish — fixed

The row said steps 1.1–1.2 handled exactly one puncture, although step 1.2 is the twice-punctured case. It now points only to step 1.1 and its pole-complement homeomorphism with $\mathbb R^2$.

### R6-12 — `lem-subgroup-quotient-of-universal-cover` — contract boundaries `zero` and `one` — polish — fixed

The rows overclaimed that step 1.1 itself identified the trivial-subgroup quotient as the universal cover and the $H=G$ quotient as one-sheeted. I narrowed both to what the proof establishes locally: the construction remains valid for $H=\{1\}$ and $H=G$, and step 3.1 proves respectively that the induced subgroup is trivial or the whole base group.

## Changes made

- Repaired two proof-bearing items: `thm-fundamental-group-of-a-product` and `prop-covering-morphism-subgroup-criterion`.
- Corrected TeX/proof notation in `ex-fundamental-groups-of-once-and-twice-punctured-two-sphere`, `cor-real-line-is-universal-cover-of-circle`, and `lem-covering-basepoint-change-conjugates-subgroup`.
- Updated `research/frontier-16-batch-6.proof-contracts.json` for every changed proof/citation/step and for the defective quote and boundary rows.
- Added no item, deleted no item, changed no page composition, and changed no batch-manifest dependency. None of the changed draft items carried `verification.judge`, so there was no stale judge block to delete.

## Validation

- Required reflow was run on all five changed item files; all were already in canonical one-paragraph-per-step form.
- Targeted precheck: 5 checked, 0 failing.
- Strict proof contract: 35/35 proof-bearing items, 0 errors, 0 warnings.
- Citation fidelity: 193 citations over 35 authored items; no missing quote and no widening candidate.
- Boundary audit: 280 rows; no template reuse or contradicted disposition. The 97 `not_applicable` rows were also read individually in the boundary pass.
- Content policy: 39 scoped items, 0 errors, 0 warnings; no `ai-generated` Statement/Construction is load-bearing.
- The two AI-generated examples were independently instantiated: the reduced words $a$ and $b^{-1}ab$ are distinct, and the explicit $S_3$ stabilizer-preimage subgroup is index three and nonnormal. No counterexample to either construction was found.
- Render checks: all five changed items and all four page files pass real KaTeX and YAML parsing.
- Prose check: the four pages plus five changed items have 0 errors and 0 warnings. The A-page summaries have exactly two paragraphs (48/53 and 43/68 words); both B pages have no authored body.
- Citecheck on changed items: no warning. Depcheck: no hard errors; repo-wide legacy warnings remain outside this batch repair.
- Finite smoke: 0 applicable checks, so its clean exit is not treated as mathematical evidence. Risk report reroutes all 35 proof-bearing items for the already-required Alpha review.
- `git diff --check` on the licensed changed paths: clean.

## Per-page verdicts

- `the-seifert-van-kampen-theorem` — **clean after repair**. All 15 items opened. Fatal R6-1 was fixed; contract findings R6-8 through R6-10 were fixed. No unresolved fatal or nonfatal mathematical defect.
- `the-seifert-van-kampen-theorem-examples` — **clean after repair**. All 5 items opened. R6-5 and R6-11 were fixed. No unresolved mathematical defect.
- `classification-of-covering-spaces` — **clean for publication-blocking defects after repair**. All 16 items opened. Fatal R6-2 and polish R6-3/R6-6/R6-7/R6-12 were fixed. R6-4 remains recorded as a deliberately unedited 30-second polish gap.
- `classification-of-covering-spaces-examples` — **clean read**. All 3 items opened; no finding was manufactured.

Assigned items actually opened: **39/39**.
