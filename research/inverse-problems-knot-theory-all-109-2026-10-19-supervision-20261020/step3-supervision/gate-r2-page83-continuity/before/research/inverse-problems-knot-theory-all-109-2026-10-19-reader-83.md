# Step 3a reader report — batch 83

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader (`reader-83`)  
Scope: batch `83`

## Opened inventory

The batch manifest lists two pages and 17 items. I read the assigned items in their manifest dependency order, then checked the page carriers and relevant suppliers.

**Assigned A page:** `kauffman-and-dubrovnik-polynomials-from-bmw-algebras` (draft, `compact-v1`). Its item inventory is `def-kauffman-regular-isotopy-and-dubrovnik-conventions`, `def-bmw-dubrovnik-coefficient-extension`, `lem-kauffman-dubrovnik-writhe-component-conversion`, `lem-bmw-relations-dubrovnik-parameter-dictionary`, `def-dubrovnik-tangle-skein-algebra`, `lem-bmw-presentation-tangle-evaluation-is-well-defined`, `lem-bmw-descending-tangle-spanning`, `lem-bmw-finite-source-normal-form-over-dubrovnik-extension`, `lem-bmw-closure-pairing-independence`, `lem-bmw-markov-trace-stabilization`, `lem-bmw-descending-tangle-spanning-and-independence`, `alg-kauffman-polynomial-from-bmw-braid-closure`, `thm-bmw-markov-trace-gives-dubrovnik-invariant`, `thm-kauffman-polynomial-from-bmw-braid-closure-procedure-properties`, and `thm-kauffman-and-dubrovnik-conversion`.

**Assigned B page:** `kauffman-and-dubrovnik-polynomials-from-bmw-algebras-examples` (draft, `compact-v1`). Its examples inventory is `cex-knot-kt-30-boundary-case` and `ex-knot-kt-30-worked-cases`.

Both assigned pages have frontmatter only, and their page inventories and status match the manifest.

**Additional item suppliers opened:** `def-axiom-of-choice`; `def-brauer-and-partition-diagram-categories`; `def-bmw-algebra-with-fixed-kauffman-skein-convention`; `def-closure-of-a-geometric-braid`; `def-exponent-sum-of-a-braid`; `def-kauffman-bracket-smoothing-and-loop-value`; `def-markov-conjugation-and-stabilization-moves`; `def-oriented-crossing-sign-writhe-and-blackboard-framing`; `def-oriented-reidemeister-moves`; `def-regular-oriented-link-diagram`; `lem-brauer-and-partition-diagram-basis-ranks`; `lem-framed-kauffman-link-evaluation`; `lem-gauss-lemma-over-a-ufd`; `thm-alexanders-closed-braid-theorem`; `thm-bmw-kauffman-tangle-basis`; `thm-fundamental-theorem-of-arithmetic`; `thm-markovs-closed-braid-equivalence-theorem`; `thm-oriented-reidemeister-equivalence-theorem`; `thm-polynomial-ring-over-a-field-is-a-ufd`; and `thm-right-exactness-of-tensor-products`.

**Page prerequisites opened:** `crossing-signs-writhe-and-linking-number` (current-run batch 58); `kauffman-bracket-state-sum-and-jones-polynomial` (current-run batch 82); and the published `brauer-bmw-and-partition-diagram-algebras` page in `quantum-algebra-and-representation-theory`.

## Mathematical and source review

I checked the local universal ring substitution. Goodman–Hauschild, [*Affine Birman–Wenzl–Murakami Algebras and Tangles in the Solid Torus*](https://arxiv.org/pdf/math/0411155), use `lambda^{-1} - lambda = z_GH (delta - 1)` and `g_i - g_i^{-1} = z_GH(e_i - 1)` (Definitions 2.6 and 3.1, PDF pp. 7 and 15). The batch's substitution `z_GH = -z_B`, followed by `z_B = z_D`, is compatible with the displayed BMW coefficient relation and the batch's Dubrovnik skein chart. Goodman–Hauschild's Definition 2.3 places inputs at the top (PDF p. 4), and its `G_i` generator diagram (PDF p. 6) agrees with the right-over positive crossing used by the assigned tangle map.

Kauffman's [*An Invariant of Regular Isotopy*](https://homepages.math.uic.edu/~kauffman/IRH.pdf) gives the bracket relation in §III (PDF pp. 15–17, printed pp. 430–432) and the Dubrovnik local skein and curl rules and conversion formula in §VII (PDF pp. 51–54, printed pp. 466–469). Definition 2.4 (PDF p. 7, printed p. 422) defines the writhe correction `F_K = a^{-w(K)} L_K`. These passages agree with the local conversion statements. The Alexander and Markov statements used in the assigned trace theorem were checked against Birman–Brendle, [*Braids: A Survey*](https://www.math.columbia.edu/~jb/Handbook-21.pdf), Theorems 2 and 4 (printed pp. 13–19); the assigned local proofs preserve the required orientation and stabilization conventions.

The diagrams in assigned items were checked against their text: the determinant-sign illustration, bracket crossing and its two smoothings, BMW generator and cup-cap, closure-pairing graph, unknot counterexample, and two-component unlink illustration. They are consistent with their stated local uses. No proof relies on a diagram.

## Repairs and validation

- In `alg-kauffman-polynomial-from-bmw-braid-closure`, I removed the embedded correctness and termination proof. The algorithm now has `proof_strategy: not-applicable` and `provenance.proof: not-applicable`; its procedure properties remain in the separate theorem. The old traversal could fail to determine a direction after smoothing when inherited segment orientations no longer joined coherently. Step 4 now anchors each closed-component traversal at its least-labelled segment and follows the current strand or smoothing pairings deterministically. The old Step 5 searched over arbitrary exterior arcs, which did not select one closure isotopy class. It now uses explicit rational, nested exterior arcs `C_j` for the fixed untwisted trace closure.
- In `thm-kauffman-polynomial-from-bmw-braid-closure-procedure-properties`, I updated the proof to establish rational representative existence for the Step 3 enumeration, verify the explicit closure arcs, and use the deterministic Step 4 traversal in the termination measure.
- I updated the batch proof contract. The removed algorithm proof rows and uses were cleared; contracts for the algorithm, its property theorem, and the worked example were regenerated with `tools/regen-contract-entries.mjs`. Neither changed item had a `verification.judge` record to remove.
- Reflow reported both changed items unchanged. Precheck reported the algorithm with 0 checked and 0 failing; the procedure-properties theorem passed induction with 1 checked and 0 failing. The required final layout check reported `2 items, 4 steps, 0 defects` for both changed item paths.

## Uneditable finding

The published prerequisite page `brauer-bmw-and-partition-diagram-algebras` states that the left input passes over the right in its `g_i` sketch, and draws the top-left-to-bottom-right branch uninterrupted. Its own typed diagram convention puts inputs on the top edge. This conflicts with the cited Goodman–Hauschild `G_i` diagram (PDF p. 6), which has the top-right-to-bottom-left branch uninterrupted, and with the batch's right-over positive Artin convention. With the page's stated BMW relation, treating its left-over sketch as the same generator reverses the local skein sign. The page is published and outside batch 83, so I did not edit it. The finding is recorded in the JSON output.

## Page verdicts

- `kauffman-and-dubrovnik-polynomials-from-bmw-algebras`: the assigned carrier is frontmatter-only and its inventory is correct. Its required published BMW page has the uneditable convention-diagram finding above, so readers should not use that sketch as the generator convention until the owner resolves it.
- `kauffman-and-dubrovnik-polynomials-from-bmw-algebras-examples`: the assigned carrier is frontmatter-only and the two example IDs match the manifest. No page-local defect found.

## Blocker and coverage limit

There is no batch-local mathematical or execution blocker. The autopilot status refreshed at `2026-10-21T09:52:36.444Z` showed the run active, no in-flight worker, and an unrelated `3a-collect` blocker: `collect-71` failed three times (covers batch 71). Batch 83 remained pending in `3a-read` at 89/109 at that snapshot, before this result was collected. The current Git log head was `fbced08465` (`Preserve prerequisite drafts and repair guarded Step 3 context routing`).

I checked the direct supplier proofs and the transitive suppliers needed for the scalar coefficient-domain and tangle-basis arguments, but did not recursively audit every dependency beneath all previously published Alexander, Markov, and Reidemeister theorems. Their exact statements, local proofs, and cited theorem locations used by batch 83 were read.
