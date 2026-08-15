# frontier-13 — step 3 orchestrator decisions

Every recommendation below was **verified from disk**, never adjudicated on the
Beta's report alone (CLAUDE.md §"Step-3 decisions belong to the orchestrator").
Priority order applied: (1) mathematical and citational accuracy;
(2) minimise forward references; (3) preserve mathematical richness.

Decision ids are `D<batch>.<n>`. `D1` (step 0, the `adjunctions-units-and-counits`
`requires` amendment) is recorded in `research/frontier-13-step0-batching.md` §5a
and is not repeated here.

## Split adjudication — all seven batches, settled here

The 60-item ceiling (`validate-plan` error `size`) must be settled at step 3: a
split costs a spec edit now and a rewrite after step 5. Counts read directly from
each `*.pages.json`:

| batch | A page | A items | B items | split? |
|---|---|---|---|---|
| 1 | `symmetric-polynomials` | 26 | 9 | no |
| 1 | `algebraic-extensions-degree-and-finite-fields` | 35 | 14 | no |
| 2 | `primitive-roots-and-unit-groups-modulo-n` | 26 | 11 | no |
| 2 | `semidirect-products-and-automorphism-groups` | 23 | 15 | no |
| 3 | `diagonalisation-and-the-minimal-polynomial` | 23 | 12 | no |
| 3 | `inner-product-spaces-and-orthogonality` | 33 | 16 | no |
| 6 | `adjunctions-units-and-counits` | 48 | 9 | no |
| 7 | `linear-recurrences-and-rational-generating-functions` | 32 | 14 | no |
| 4 | *(pending)* | | | |
| 5 | *(pending)* | | | |

**None of the five split candidates flagged at step 0 needs a split.** Batch 6 at
48 is the closest to the ceiling and the only one worth a second look — see
§"Batch 6 density" once its artifacts land.

---

## Batch 7 — `linear-recurrences-and-rational-generating-functions` (order 195)

Beta finished cleanly in 46m40s, exit 0. Gates it ran: `validate-plan` green,
`coverage-checklist` 60 results / 0 errors, manifest-only content policy 46 items
/ 0 errors, 37 proof contracts, dependency reconciliation with no unresolved,
forward, cross-batch or B-leaf edge. Re-ran `coverage-checklist.mjs` myself:
`1 page(s), 60 harvested result(s), 0 error(s), 0 warning(s)`.

### D7.1 — reuse the published adjugate chain rather than minting it. **APPROVED**

Beta reports that the enriched CB-5 design instructs it to mint minors, cofactors
and the adjugate here, because `determinants-of-matrices-over-a-commutative-ring`
(order 82) stops short of them — but that `the-determinant-of-a-linear-operator`
(order 84) already publishes the whole chain and is transitively in this pair's
closure.

**Verified from disk, all three claims independently:**

- `def-matrix-minors-cofactors-and-adjugate`, `thm-laplace-cofactor-expansion`,
  `thm-adjugate-identity-over-a-commutative-ring` and
  `cor-inverse-matrix-by-adjugate` are all `status: published`.
- All four are listed on `library/linear-algebra/the-determinant-of-a-linear-operator.md`,
  itself `status: published`.
- `the-determinant-of-a-linear-operator` **is in the transitive closure** of
  `linear-recurrences-and-rational-generating-functions` (closure size 42),
  reached through the order-86 eigenvalue page.

Approved. Reuse is correct on all three priorities at once: it cites audited
published statements rather than fresh ai-altered ones (accuracy), adds no
forward reference, and duplicating ids would breach the id-reuse rule. The design
block is stale, not the scaffold.

### D7.2 — `CB-15` is a planning label with no page id. **APPROVED as recorded**

Beta could not resolve `CB-15` to a live page and treated it as a future
recommendation rather than a prerequisite, building the finite-word and
prefix-automaton machinery locally instead.

**Verified from disk:** `grep -c "CB-15" research/plan-spec.json` → `0`;
`grep -ci "combinatorial-classes\|symbolic-method"` → `0`. No such page exists in
a 1176-page spec.

Approved. Adding a nonexistent `requires` target would fail `validate-plan`
outright. The suggested future id (`combinatorial-classes-and-the-symbolic-method`)
is carried forward as a planning note only — **no spec edit**, since minting page
ids and reading order is an owner decision.

### D7.3 — no split. **APPROVED**

32 A items against a 60 ceiling, and the recurrence/rational and transfer-matrix
halves are joined by Cayley–Hamilton, Hadamard closure and finite-state word
counting. Beta pre-recorded the exact cut line should it ever be needed (after
`cor-cayley-hamilton-recurrences-for-matrix-powers`, items 1–18 / 19–32). Count
verified from `pages.json`. Approved; no spec edit.

### Declines to test at step 6 (routed to group B)

Beta recorded three source headings as declined. None is a step-3 blocker, but
each must be tested against the 2026-08-11 "build the machinery" rule, which
retired "it needs a later result" as an automatic disposition:

1. Stanley's entrywise real-symmetric eigenvalue formula — declined as needing
   the spectral theorem. **That is batch 3 of this very run** (`inner-product-spaces-and-orthogonality`,
   order 94, which is *below* 195), so at a future frontier it is a legitimate
   citation, but it is not in this pair's closure now. Decline stands at step 3;
   group B should confirm the coverage row names the licensing page.
2. Stanley's higher-tuple Fibonacci-tiling factorisations — deferred to
   free-monoid factorisation.
3. Waldschmidt's exponential-generating-function / differential-equation
   development — out of scope for a rational-generating-function page.

---

---

## Batch 3 — `diagonalisation-and-the-minimal-polynomial` (88) · `inner-product-spaces-and-orthogonality` (94)

Beta finished in 54m44s, exit 0. 23/12 and 33/16 items, 72 proof contracts.
Re-ran `coverage-checklist.mjs`: `2 page(s), 126 harvested result(s), 0 error(s),
0 warning(s)`.

### D3.1 — add `field-extensions-and-the-complex-numbers` to the `requires` of `diagonalisation-and-the-minimal-polynomial`. **APPROVED AND APPLIED**

The only `requires` amendment recommended in the run so far. Beta's argument: the
requested theorem that $\mu_T$ and $\chi_T$ have the same irreducible factors
needs, for an irreducible factor $q\mid\chi_T$, the root field $F[x]/(q)$ and the
published evaluation-kernel theorem — and the diagonalisation page's declared
closure reaches neither.

**Verified from disk on six axes before applying:**

| check | result |
|---|---|
| target `status: published` | yes — `library/abstract-algebra/field-extensions-and-the-complex-numbers.md` |
| named results actually live there | yes — `thm-evaluation-kernel-and-minimal-polynomial` and `thm-irreducible-quotient-adjoins-a-root` are both in its `items` list |
| `prereq-order` (strictly lower) | order **54** < 88 |
| genuinely absent today | not in the order-88 closure (which grew 36 → 37) |
| not built in this run | correct — no serialisation of batches |
| **zero-cross-batch-seam preserved** | simulated the edit across all 11 closures: **0 seams**, and no closure member of order ≥ 88 |

Applied to `research/plan-spec.json` with the rationale in a `note` field, the
same pattern as D1. `validate-plan.mjs` re-run: **exit 0**.

*Side effect, accepted:* the page now carries a second `redundant-prereq`
**warning** (`euclidean-domains-pids-and-unique-factorisation` is reachable via
the new edge as well as via the eigenvalue page). It already carried one before
this edit, it is a warning and not an error, and the same pattern appears on
`categories-functors-and-natural-transformations`. I am **not** dropping the
direct edge to silence it: an explicit `requires` entry documents what the page
actually uses and is what keeps `undeclared-prereq` honest.

### D3.2 — no split (23 and 33 items). **APPROVED**

### Declines to test at step 6 (routed to group B)

Six declines against 126 headings — the lowest rate in the run. The two worth a
look are the **spectral theorem** (correctly downstream, but group B should
confirm the coverage row names its licensing page rather than merely calling it
out of scope) and **Conrad Cor. 4.13** on diagonalising an invertible positive
power over $\mathbb{C}$, deferred as needing all complex $k$-th roots from the
planned fundamental-theorem-of-algebra page. Conrad Thm 4.17
(triangularisability) is a clean out-of-scope: it is the headline result of
`triangularisation-and-jordan-canonical-form`, which is order 90 — this pair's
immediate downstream neighbour.

---

## Batch 1 — `symmetric-polynomials` (58) · `algebraic-extensions-degree-and-finite-fields` (96)

Beta finished in 56m07s, exit 0. 26/9 and 35/14 items, 70 proof contracts, 95
exact published quotations verified against disk. `coverage-checklist.mjs`:
`2 page(s), 97 harvested result(s), 0 error(s), 0 warning(s)`.

### D1.1 — no `requires` amendment and no split. **APPROVED**

Beta explicitly checked and recommends neither; item counts 26 and 35 verified
from `pages.json`. Nothing to adjudicate.

### Declines to test at step 6 (routed to group A — highest decline rate in the run)

**15 declines against 97 headings (8 `deferred`, 7 `out-of-scope`) — the highest
rate of any batch so far**, and therefore the batch where the 2026-08-11 "build
the machinery" rule is most likely to have been under-applied. Beta's own summary
names five: the Sylvester-determinant form of the resultant, the cardinal-valued
infinite tower law, geometric constructibility, cyclotomic regular-polygon
theory, and algebraic closures.

Four of those five are genuine subject-boundary declines. **The Sylvester
resultant is the one to press**: batch 1 already has determinants over a
commutative ring in its closure, so "it needs a determinant" is not by itself a
licence to decline, and a resultant page is exactly the kind of prerequisite the
rule now says to *build* rather than route around. Group A must read that
specific coverage row and decide whether the recorded reason names a real
obstruction or an inconvenience.

---

## Batch 6 — FINAL (supersedes the provisional read below)

Beta finished in 75m40s, exit 0 — the longest lane in the run. **51 A items, 9 B
items** (the provisional 48/9 was mid-write). `coverage-checklist.mjs`:
`1 page(s), 194 harvested result(s), 0 error(s), 0 warning(s)`. 49/49
proof-bearing items contracted, 100 exact source-clause citations, all 88 direct
published dependencies opened.

### D6.1 — the 43-deferral alarm does NOT survive contact with the rows. **RESOLVED, no action**

Final dispositions are 91 `included`, 36 `inline`, 4 `already-published`, **43
`deferred`**, 20 `out-of-scope` — even more declines than the provisional read,
and still the largest count in the run by a wide margin. I read the deferral
reasons rather than the count. **They collapse into exactly two well-founded
buckets, both with a named licensing page:**

1. **Tensor products (≈7 rows).** Every one names
   `tensor-products-of-modules` — batch 5 of this run — as the missing
   interface. This is the disposition step 0 *instructed*, not an evasion.
2. **The adjoint functor theorems (≈6 rows).** Deferred to
   `reflective-subcategories-and-the-adjoint-functor-theorems`. **Verified in the
   spec: that page exists at order 365.003 and its `requires` is
   `adjunctions-units-and-counits-examples` (365.002)** — it is the immediate
   downstream neighbour of this very pair. GAFT, SAFT, weakly initial sets and
   solution sets are its principal results. Moving them here would erase a
   deliberate plan seam, exactly as the rows say.

The remainder are two-variable / closed-monoidal / topos material routed to the
monoidal and homological tracks. **A high deferral count on a foundational page
with a chartered successor page is the correct shape, not a defect.** I was
wrong to raise it as group C's primary charge; the density figure that prompted
it (0.66 by the final file) is likewise healthy.

### D6.2 — MA-1 item 40 was dropped exactly as instructed. **VERIFIED**

The step-0 brief required the tensor-side restriction-of-scalars adjoint to fall
back to the Hom side and the drop to be recorded *visibly*. Both halves confirmed
from `pages.json` and `coverage.json`:

- **Included:** `thm-coextension-of-scalars-is-right-adjoint-to-restriction-of-scalars`,
  supported by a locally built `lem-coextension-of-scalars-carries-a-module-structure`.
- **Deferred, with the reason naming the licensing page:** "The specific left
  adjoint is `S ⊗_R −`, whose tensor-product construction is assigned to the
  unbuilt `tensor-products-of-modules` page in frontier-13 batch 5 and is not in
  this page's closure."

Neither a cross-batch citation nor a silent drop. This closes the second of the
two step-0 risks.

### D6.3 — the three "easy to lose" MA-1 requirements survived. **VERIFIED**

1. `rem-why-this-library-takes-unit-counit-as-the-definition` — present.
2. **The RAPL split is intact**, which was the subtlest of the three:
   `thm-right-adjoints-preserve-limits` (the unit/counit proof, no size
   hypothesis) and `thm-representable-second-proof-of-rapl-under-local-smallness`
   are **separate items**, reconciled by `rem-rapl-carries-no-size-hypothesis`.
   Merging them would have gratuitously weakened the theorem.
3. The choice-scope wording in items 9/11/12 is prose-level and stays with group
   C at step 6.

### D6.4 — no split. **APPROVED**

51 items against 60, nine of headroom. Beta pre-recorded the natural cut (after
the diagonal-functor theorem) should step-6 growth demand one. Approved, but
**this is the one page in the run where step-5 authoring could still cross the
ceiling**, so group C should hold the recorded cut line ready.

### Still open for group C — the Riehl locators

Beta did consult the 2nd edition (it corrected the Frobenius example to
finite-support induction on that basis). But the harvest carries **13 references
to §4.6 against 2 to §4.7.1**, and the step-0 risk was precisely that the 2nd
edition renumbered the adjoint functor theorems to §4.7. I have **not** verified
the numbering against the PDF and am not asserting it — that is group C's charge,
and it needs the PDF opened directly rather than fetched, since WebFetch cannot
read PDFs.

---

## Batch 6 — provisional read, superseded (Beta still running at the time)

`coverage.json` is on disk and parses. Two things it settles early:

- **The density worry is answered.** 74 `included` headings behind 57 items
  (density 0.77), plus 23 `inline` — that is a real source read, not a
  transcribed table of contents. My step-0 concern that 48 items against MA-1's
  45 designed items looked thin was wrong; the harvest genuinely re-derived the
  page.
- **A new and sharper concern replaces it: 32 `deferred` rows** — more than
  batches 1, 3 and 7 combined (8 + 2 + 0). On the highest-fan-out page in the
  library, a 32-deferral scaffold is precisely what the "build the machinery"
  rule exists to catch. This goes to group C as its primary charge, above the
  Riehl locator check. Provisional until the Beta exits and the file is final.

---

---

## Batch 2 — `primitive-roots-and-unit-groups-modulo-n` (57.001) · `semidirect-products-and-automorphism-groups` (68)

Beta finished in 65m47s, exit 0 — the longest lane so far. 26/11 and 23/15 items,
65 proof contracts. `coverage-checklist.mjs`: `2 page(s), 96 harvested result(s),
0 error(s), 0 warning(s)`. Harvest: 63 `included`, 18 `inline`, 5
`already-published`, 10 `out-of-scope`, **0 `deferred`**.

### D2.1 — the step-0 cross-pair risk is CLOSED CLEAN. **VERIFIED, no action**

This was the run's flagged "likeliest illegal edge": `semidirect-products-…`
needs $\operatorname{Aut}(\mathbb{Z}/n)\cong(\mathbb{Z}/n)^\times$, which is the
headline of `primitive-roots-…` — **the other pair in its own batch**, and not in
its closure. Beta asserts independence; an assertion is not evidence, so I
checked the dependency graph directly.

`thm-automorphisms-of-a-finite-cyclic-group` is scaffolded **on the semidirect
page itself**, resting on four dependencies that are all `status: published` on
disk:

```
def-group-isomorphism-and-automorphism   published
thm-classification-of-cyclic-groups      published
thm-unit-criterion-modulo-n              published
lem-order-characterisation               published
```

That is the legal disposition — build the result locally from published
machinery — rather than a cross-batch citation or a `requires` recommendation.

**Whole-run graph check, all five landed batches at once: 0 cross-pair edges, 0
unresolved dependencies.** (My first pass ran this per *page* and printed 38
hits; every one was a B examples item citing its own A page, which is exactly
what a B companion is for. The meaningful unit is the pair, and at pair
granularity the count is zero.)

### D2.2 — no split, no `requires` edge. **APPROVED**

26 and 23 items, verified from `pages.json`.

### Declines to test at step 6 (routed to group A)

Ten `out-of-scope`, zero `deferred` — the healthiest decline profile in the run,
and the reason is that its declines are almost all *computational apparatus*
rather than mathematics: modulus-40487 searches, Sage transcripts, decimal-period
applications, specialised complete-group exercises. Those are genuinely not
library content. Two are worth a confirming glance: the quaternion-specific
nonsplitting example and the later-interface matrix examples, both of which are
mathematics rather than apparatus.

---

## Batch 5 — `tensor-products-of-modules` (106)

Beta finished in 90m19s, exit 0. 38 A items, 11 B items, 41 proof contracts.
`coverage-checklist.mjs`: `1 page(s), 121 harvested result(s), 0 error(s),
0 warning(s)`. Dispositions: 96 `included`, 13 `inline`, 8 `already-published`,
2 `deferred`, 2 `out-of-scope` — **the lowest decline rate in the run** (4/121).

### D5.1 / D5.2 — add two published `requires` edges. **BOTH APPROVED AND APPLIED**

Beta proposed `dual-spaces-bilinear-forms-and-inertia` (order 92) and
`field-extensions-and-the-complex-numbers` (order 54), and — unusually and
usefully — **named the exact block to remove if either were declined**, which is
what let me price the decision rather than guess at it:

| edge | licenses | cost if declined |
|---|---|---|
| `dual-spaces-…` (92) | `thm-hom-from-a-finite-dimensional-space-as-a-tensor-product`, `cor-trace-is-tensor-contraction` | lose both items |
| `field-extensions-…` (54) | `ex-complex-tensor-square-over-the-reals` ($\mathbb C\otimes_{\mathbb R}\mathbb C\cong\mathbb C\times\mathbb C$) | lose that example |

**Verified from disk before applying:** both pages `status: published`; both
strictly below order 106; neither in the prior closure (37 → 39); the named
support really lives there — the dual page carries
`def-algebraic-dual-and-linear-functional`,
`thm-dual-family-is-a-basis-in-finite-dimension` and
`def-transpose-of-a-linear-map`, and the field page carries
`def-complex-numbers-and-arithmetic`, `thm-complex-numbers-form-a-field` and
`cor-complex-numbers-are-a-quadratic-real-extension`. **Simulated both edges at
once against all 11 run closures: 0 seams, no `prereq-order` violation.**

Approved on priority (3), mathematical richness: the edges are free — published,
seam-free, order-legal — and each buys real content. Applied to `plan-spec.json`
with a `note`; `validate-plan.mjs` **exit 0**.

*Note:* `dual-spaces-bilinear-forms-and-inertia` is now a shared published
prerequisite of batch 3's `inner-product-spaces-and-orthogonality` (94) and batch
5 (106). Shared *published* prerequisites create no seam — only run-page-to-run-page
edges do, and the simulation confirms zero.

### D5.3 — the stale enough-injectives request. **APPROVED as resolved**

The MOD-3 design asks batch 5 to build "every module embeds in an injective
module". Beta declined to mint it, on the ground that the prerequisite page
already publishes it. **Verified:** `thm-module-categories-have-enough-injectives`
is `status: published` and listed on `free-modules-and-exact-sequences`. Citing
it rather than minting a duplicate stable id is correct. The character-dual
theorem built locally is the distinct flat-implies-injective result, not a
duplicate.

### D5.4 — no split (38 items). **APPROVED**

### Design-document amendments — DEFERRED TO STEP 4 (lead Alpha)

Beta wrote exact find/replace amendments for
`research/plan-algebra-track-expansion.md` §II.4 block MOD-3 (stale order 102 →
106, the `requires` line, the A/B estimate, the enough-injectives clause, the
complex-example sentence). It correctly did **not** apply them — the prose
scaffolds are the lead Alpha's to write at step 4. Queued there verbatim.

---

## Batch 4 — `erdos-hajnal-property-and-homogeneous-sets` (395) · `regular-pairs-and-induced-counting` (399)

Beta finished in 91m33s, exit 0 — the longest lane in the run. 52 items total,
43 proof contracts. `coverage-checklist.mjs`: `2 page(s), 93 harvested result(s),
0 error(s), 0 warning(s)`. Dispositions: 61 `included`, 19 `inline`, 1
`already-published`, 5 `deferred`, 7 `out-of-scope`.

### D4.1 — the induced removal lemma was BUILT, not deferred. **VERIFIED**

This was the step-0 risk on this batch: the induced removal lemma is genuinely
harder than the removal lemma, and a decline would have had to survive the
"build the machinery" rule. Beta built it — "fully scaffolded through strong
regularity, energy approximation, self-regular extraction, representative
selection, and induced counting". That is the rule applied correctly rather than
routed around.

### D4.2 — the random-graph lower bound was proved, not asserted. **VERIFIED**

`finite-probability-and-the-probabilistic-method` is published precisely so this
can be proved here. Beta's dependency list confirms the route:
`def-erdos-renyi-random-graph`, `lem-random-graph-fixed-pattern-probability`,
`thm-linearity-of-expectation`, `thm-first-moment-method`, `thm-markov-inequality`,
`lem-cauchy-schwarz-for-finite-random-variables`, all opened on disk. It records
"the honest proved random bound $3\log_2 n$" — a bound it can actually prove
rather than the sharper constant it might have asserted.

### D4.3 — no split, no cross-pair edge. **APPROVED**

`ERDOS.md` schedules the two pairs as independent members of one cycle; Beta
confirms independence and the whole-run graph check agrees.

### Routed to group C at step 6 — the regularity-lemma bound

The declines include "the ordinary and strong-regularity lower bounds" — i.e. the
tower-type lower bounds. Declining to *prove* them is defensible; what is not
negotiable is that **neither the title nor the Statement may claim more than the
proof gives.** A title asserting more than the proof is a fatal class at step 6
and the judge cannot see a false title. Group C reads both A-page titles and
Statements against their proofs specifically for this.

---

## Whole-run step-2 gate results — ALL GREEN

```
validate-plan.mjs                    exit 0  (after D1, D3.1, D5.1, D5.2)
coverage-checklist  x7               787 harvested results, 0 errors, 0 warnings
content-policy --manifest-only x7    450 scoped items,      0 errors, 0 warnings
```

Whole-run dependency graph over all 450 scaffolded items:

```
cross-pair edges : 0
B-leaf deps      : 0
unresolved deps  : 0
duplicate ids    : 0
```

**450 items — 323 on A pages, 127 on B pages, across 11 pairs.** The zero-seam
property the run was batched for holds on the finished scaffold, not just on the
plan.

Betas still running. Adjudications appended here as each `result.json` lands.

---

# Step-3 Alpha scaffold review — group C (batches 4, 6)

Landed in 19m13s, exit 0. Report:
`research/frontier-13-alpha-c-step3-scaffold-review.md`. Verdicts: order 399
**sufficient**, order 365.001 **sufficient**, order 395 **insufficient**.

## D4.4 — order 395 is INSUFFICIENT. **CONFIRMED, routed to Beta 4**

The strongest finding of the run. `erdos-hajnal-property-and-homogeneous-sets`
has 11 A items and **never proves that any forbidden graph has the Erdős–Hajnal
property**. It defines the property, refutes it for the class of all graphs,
proves three invariances, states the conjecture — and stops. There is no positive
instance anywhere on the page.

Group C also caught the thing that made this easy to miss:
`ex-complete-and-empty-hereditary-classes-have-constant-one` *looks* like a
positive instance and is not. "Complete graphs have EH constant 1" only says a
complete graph is a clique. The real statement is "$K_t$-**free** graphs are EH"
— Ramsey's theorem — and it is absent.

Three additions, all provable from published items already in closure (11 → 14
items, no `requires` change, no split):

1. **$K_t$-free ⇒ EH** from `thm-finite-graph-ramsey-binomial-bound`, which group
   C read on disk and confirmed is the off-diagonal form
   $\binom{s+t-2}{s-1}\to(s,t)^2$.
2. **$P_3$-free ⇒ $\hom(G)\ge\sqrt n$** — components are cliques, so
   $n\le\alpha\omega\le\hom^2$.
3. **Every graph on ≤ 3 vertices is EH**, from those two plus the scaffolded
   complement invariance.

This is exactly what step 3 is for: a scaffold edit now, a rewrite later.

## D1-amend — MY step-0 D1 decision was one-third wrong. **CORRECTED AND APPLIED**

Group C found the D1 edge on `conjugacy-and-simplicity-in-the-symmetric-groups`
cited by no item. **Verified independently before acting**, and the picture is
exact:

| D1 edge | citations from batch 6 | verdict |
|---|---|---|
| `free-modules-and-exact-sequences` | **2** (`thm-universal-property-of-free-modules`, `def-free-module-on-a-set-and-standard-basis`) | stands |
| `tychonoff-embedding-and-stone-cech` | **3** (`def-stone-cech-compactification`, …) | stands |
| `conjugacy-and-simplicity-in-the-symmetric-groups` | **0** of its 18 items | **removed** |

My step-0 rationale was wrong about the abelianisation adjunction:
`def-abelianisation-of-a-group` is homed on `free-groups-and-presentations`,
**which was already in the closure** and is cited 5 times without any new edge.
Removal re-verified safe — every batch-6 dependency stays in closure afterwards
(size 76). Applied with a `note`; `validate-plan.mjs` **exit 0**.

Two of three D1 edges were load-bearing, so the decision was right to make; the
third was a guess I should have checked against the item's actual home page, the
same check D3.1 later passed.

## D6.5 — the Riehl locator alarm was a FALSE POSITIVE. **CLOSED**

Group C downloaded the PDF (build `D:20260728`) and read Chapter 4 rather than
reasoning about it. **§4.6 in the 2nd edition genuinely is "Adjunctions, limits,
and colimits"**; the adjoint functor theorems are Thms 4.7.3/4.7.10/4.7.17 in
§4.7, which Beta cites only for Lemma 4.7.1. Every page boundary in the locator
is exact, and the 12 numbers that looked missing from the harvest are
displayed-equation numbers, not environments. No first-edition locator was
carried over.

My step-0 risk was raised on the right grounds and is now retired on evidence.

## D6.6 — three batch-6 corrections. **ACCEPTED, routed to Beta 6 (edits, not additions)**

1. **`cor-a-galois-connection-satisfies-fgf-equals-f-and-gfg-equals-g` claims
   more than its hypotheses give** — it asserts *equality* while depending only
   on a **preorder** definition. Riehl Cor. 4.2.10 says "If $A$ and $B$ are
   **posets**…"; without antisymmetry only $FGF\cong F$ follows. This is the
   title-claims-more-than-the-proof class, which is fatal at step 6 — caught at
   step 3 where it costs a scaffold edit.
2. The ideal/variety example is **antitone** but cites the monotone
   `def-galois-connection`. Fixing it also gives
   `def-mutually-left-and-mutually-right-adjoint-contravariant-functors` its only
   consumer.
3. `ex-the-maximal-subgroupoid-and-fractions-adjoint-triple` claims an adjoint
   **triple** with no dependency supporting the groupoid-of-fractions left
   adjoint, and there is no localisation page anywhere in `plan-spec.json`.
   Narrow to the right adjoint.

## D4.5 — batch 4's B-page summaries must be DROPPED at step 4. **ROUTED TO LEAD ALPHA**

Batch 4's notes §"Two-paragraph page summaries for step 4" drafts two-paragraph
summaries for **all four** pages, including both `-examples` companions. The
page-summary contract is explicit: **"A B page has no authored summary body at
all."** Checked the other six batches — **batch 4 is the only one that did this**;
no `pages.json` in the run carries a summary field, so nothing has leaked into a
manifest. The lead Alpha must splice the two A summaries and drop the two B ones
at step 4.

*Also for the lead Alpha:* batch 3's notes append a third paragraph about the B
pages after its two A-page summaries. Whether that is a third summary paragraph
or a separate note is ambiguous in the file; the contract is exactly two
paragraphs, so resolve it when splicing.

## D4.6 — the tower-bound titles are honest. **VERIFIED, one wording fix**

Group C confirmed the decline is real — Zhao's Thm 2.1.17 says verbatim "We do
not include the proof here" — and that the titles claim no more than the proofs
give. One fix required: `rem-tower-and-wowzer-bounds-in-regularity` says "gives
tower bounds" and must say ***upper*** bounds. One coverage gap: Zhao Exercises
2.1.22–2.1.25 sit inside §2.1 but outside the stated locator, and 2.1.24 is the
half graph the notes already cite.

## Independent re-derivation

Group C re-derived **318 dependency edges across all six of its pages: 0
unresolved, 0 out-of-closure, 0 unpublished, 0 B-leaf.** Batch 4's pairs do not
cite each other; batch 6 does not cite batch 5. This agrees with my whole-run
check and was computed independently.
