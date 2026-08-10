# `frontier-10` — Alpha report

Alpha-frontier-10. Claude Opus 5, `xhigh`, build `alpha` role (owner,
2026-08-10). Kept current across stages; append, do not rewrite history.

## Stage 0 — step 3, scaffold breadth and depth review — **COMPLETE**

Output: `research/frontier-10-alpha-step3-scaffold-review.md`.
Scope: batches 1–8, twelve A/B pairs. Batch 9 excluded by dispatch; it gets its
own Stage-0 check when it lands.

**Result: 5 `sufficient`, 7 `insufficient`. No finding requires a page split.**

| pair | verdict |
|---|---|
| `symmetric-groups-and-the-sign-homomorphism` | sufficient |
| `matrices-and-the-matrix-of-a-linear-map` | insufficient |
| `the-structure-of-finite-abelian-groups` | insufficient |
| `free-products-and-amalgamation` | insufficient |
| `polynomial-rings-and-roots` | insufficient |
| `bounded-variation-and-riemann-stieltjes` | sufficient |
| `improper-integrals` | sufficient |
| `fubini-and-change-of-variables` | insufficient |
| `ramsey-theory` | insufficient |
| `plane-graphs-euler-and-the-five-colour-theorem` | sufficient |
| `categories-functors-and-natural-transformations` | insufficient |
| `group-actions-and-cayleys-theorem` | insufficient |

### The three findings that matter most

1. **F1, run-wide.** `def-finite-sum-in-a-commutative-monoid` and
   `lem-finite-sum-reindexing-and-fubini` are published at **order 203**, and
   batches 1, 3 and 8 cite them from orders 78, 52 and 42 — seven forward
   references, four of them on landmark theorems, none noticed by any Beta or
   gate. Batch 3's notes assert "Forward references kept: none", which is false
   against disk. Batch 8's two edges are avoidable immediately (redirect to the
   order-20 `def-sum-over-a-finite-index-set` it already cites). Batches 1, 3
   and 9 genuinely need a commutative-monoid-valued sum, and the clean remedy
   touches published content, so it is an **owner decision recorded as a
   blocker**.
2. **Batch 8 repeats the frontier-9 failure shape one section further on.**
   Conrad's *Group Actions* §6 is in the batch's own ledger and was not read; it
   carries Theorem 6.8 (Poincaré) and Corollary 6.4, both of which follow from
   machinery this page already builds. Two A items to add (27 → 29, no split),
   plus explicit dispositions for §6's remaining results.
3. **Three declines are invalidated by this run's own scope** — batch 3's
   "finite subgroups of units are cyclic" (batch 2 lands at order 40 < 52), and
   batch 7's Riehl Example 1.5.12 and determinant natural transformation (batch
   1 at 78 and batch 9 at 82, both far below 359).

### D2, routed to me explicitly

**Beta-7's claim survives scrutiny and the split does not fire.** I extracted
Riehl Ch. 1 and compared every numbered item against the 91 recorded rows;
§§1.1–1.5 and 1.7 are complete, the single unrecorded numbered item
(Definition 1.4.3) is scaffolded anyway as A item 43, and nothing was trimmed to
reach 60. **Both of my batch-7 additions are B-page items**, so the A page stays
at 60 and the D2 contingency split stays unarmed.

### Boundaries respected

Authored nothing. Edited no batch file, item, page or `plan-spec.json`. No
permission prompt raised; two blockers recorded instead (F1's owner decision,
and the not-yet-created `research/frontier-10-published-amendments.md`, which is
correctly deferred to the publishing commit).

### Verification method

Sources extracted and compared row-by-row against `coverage.json`: Brosnan
§3.14, Judson Ch. 14 structure, Conrad *Group Actions* (all six sections),
Conrad *Decomposition of Finite Abelian Groups*, Milne *Group Theory* Ch. 4,
Riehl *Category Theory in Context* Ch. 1, Diestel *Graph Theory* Ch. 4. Every
scaffolded dependency edge resolved from disk against `plan-spec.json` and
`library/`, and compared for reading order — that check is what surfaced F1.
`coverage-checklist.mjs` re-run over all twelve ledgers: 720 results, 0 errors,
0 warnings, confirming every finding above is invisible to the gate.

### Next action

Await the orchestrator's routing of findings to Beta-1, -2, -3, -5, -6, -7, -8
(batch 4 gets a non-blocking ledger correction; batch 9 gets two additional
determinant interfaces). **Re-check every `insufficient` pair before step 4
splices**, and run Stage 0 on batch 9 when it lands.

## Stage 0, second pass — re-check + batch 9 — **COMPLETE**

Appended to `research/frontier-10-alpha-step3-scaffold-review.md` under
`## Re-check (post-repair)`. The original verdicts were not rewritten.

**7 of 8 repairs resolved; 3 pairs still short, each by a named amount.**

| pair | verdict |
|---|---|
| `matrices-and-the-matrix-of-a-linear-map` | resolved |
| `the-structure-of-finite-abelian-groups` | resolved |
| `free-products-and-amalgamation` | resolved |
| `polynomial-rings-and-roots` | resolved |
| `fubini-and-change-of-variables` | resolved |
| `ramsey-theory` | resolved |
| `categories-functors-and-natural-transformations` | resolved |
| `group-actions-and-cayleys-theorem` | **still insufficient** (R2) |
| `gaussian-elimination-and-row-reduction` (new) | **insufficient** (R3) |
| `determinants-of-matrices-over-a-commutative-ring` (new) | **insufficient** (R4) |

Count correction to my own first-pass summary line: it said "five sufficient,
seven insufficient"; the table said four and eight, and the table is right. The
dispatch's "seven" is the number of pairs owing a *Beta repair* — pair 2 was
`insufficient` for F1 alone, which the owner's re-home resolved without a Beta
edit. Nothing was lost.

### F1 fully closed, verified the way it was found

Re-ran the dependency-resolution check that surfaced F1, with the re-home
applied: 579 in-run items against 2,895 mapped published items,
**0 unresolved dependencies and 0 forward references in every batch**.
`coverage-checklist.mjs`: 14 pages, 875 harvested results, 0 errors, 0 warnings.

### R1 — a step-4 blocker in the re-home that nobody owns

The receipt checked the moved items' dependency **orders** (all 5.3–24 < 46).
`validate-plan.mjs` also enforces `undeclared-prereq` against the **transitive
closure of declared `requires`**, and `rings-subrings-and-integral-domains`
declares only `divisibility-gcd-and-bezout`, whose 12-page closure omits
`finite-counting-and-binomial-coefficients` (order 20) — home of
`def-finite-cardinality`, `def-sum-over-a-finite-index-set`, `thm-product-rule`
and `thm-sum-rule`. Four `undeclared-prereq` errors the moment the re-home
lands. One-line remedy; `research/frontier-10-splice.mjs` unions `requires` for
in-run pages only, so it will not do this by itself.

The receipt's two open follow-ups both came back **clear**: no forward wikilinks
in either moved item, and no positional prose claim falsified — including the
source page's paragraph-1 summary sentence, which the move makes more apt rather
than false.

### R2, R3, R4 — what goes back

- **R2, batch 8.** Two of fifteen Conrad §6 declines name a home that does not
  exist ("the later permutation-group development", "the structural study of
  subgroup coverings"), and both are 3–4 line corollaries of theorems on the
  page: Theorem 6.6 from item 29 (Cauchy–Frobenius), Theorem 6.10 from item 17
  (`thm-conjugate-subgroups-are-counted-by-the-normalizer`). Theorem 6.9's reason
  ("not consumed by this pair") is not a permitted ground. Add 6.6 and 6.10
  (29 → 31 A items, no split); include 6.9 or rewrite its reason.
  Everything else on this pair landed, and **Beta-8's one disagreement is
  upheld** — my suggested citation of `ex-a-four-has-no-subgroup-of-order-six`
  would have been both a forward edge and a citation into a B-page leaf (order
  45 from order 43). Its self-contained replacement is correct.
- **R3, batch 9 / gaussian.** A page complete; B page has no witness for the
  explicit "over an infinite field" hypothesis of
  `cor-solution-count-trichotomy-over-an-infinite-field` ($x+y=0$ over
  $\mathbb F_2$ has exactly two solutions). Plus `canonical` disposition rows for
  LU factorisation and the rank normal form, which appear in no source's
  `contents` at all — rows, not items.
- **R4, batch 9 / determinants.** The cofactor/adjugate/Cramer deferral is
  **licensed by the plan**, not invented: order 84 is titled "The Determinant of
  a Linear Operator, Cofactors and Cramer's Rule". Ring-level source backing is
  genuine (New's MATH 146 works over a commutative ring throughout). Two asks: a
  witness that $\det$ is not additive, marking multilinearity's boundary; and the
  decline naming the nonexistent page `invertibility-and-adjugate` corrected to
  order 84.

The ring-versus-field boundary the dispatch asked me to check is **right**:
Beta-9 shipped `cor-invertible-matrix-has-unit-determinant` as the ring-level ⟹
half and `thm-real-square-matrix-invertible-iff-determinant-nonzero` as the real
specialisation, declining unprompted to state "nonzero" over a ring. The
ring-level converse needs the adjugate, which lives at order 84, and no in-run
consumer needs it. `symmetric-groups-and-the-sign-homomorphism` carries
everything the Leibniz route needs, cited at the exact items that consume it.

### Boundaries respected

Authored nothing. Edited no batch file, item, page or `plan-spec.json`. No
permission prompt raised; R1 recorded as a blocker instead.

## Stage 0, third pass — final re-check of the three repaired pairs — **COMPLETE**

Output: `## Final re-check` in
`research/frontier-10-alpha-step3-scaffold-review.md`.
Scope: batch 8 (R2) and batch 9's two pairs (R3, R4) only; the other eleven were
settled in the second pass and I reopened nothing.

**All three read `resolved`. Stage 0 is complete and step 4 may splice.**

| pair | verdict |
|---|---|
| `group-actions-and-cayleys-theorem` (R2) | resolved — non-blocking ledger correction L2 |
| `gaussian-elimination-and-row-reduction` (R3) | resolved |
| `determinants-of-matrices-over-a-commutative-ring` (R4) | resolved |

- **R2.** `thm-jordans-derangement-theorem` (A 31, after Cauchy–Frobenius) and
  `thm-conjugates-of-proper-subgroup-do-not-cover-finite-group` (A 18, after the
  normalizer count) are built at the positions I named, with Conrad §6 harvest
  rows naming the exact ids, `literature-derived`/`ai-altered` provenance, and
  proof contracts on the routes I gave — including the one-conjugate and
  trivial-subgroup boundaries. A page 29 → 31, 37 with the published items. All
  nine §6 headings now disposed.
- **R3.** `cex-solution-count-trichotomy-fails-over-a-finite-field` (B 8 → 9)
  marks the one explicitly hypothesised theorem on the page; both required
  `canonical` rows for LU and the rank normal form exist, in the `canonical`
  list rather than inflating a source's `contents`.
- **R4.** `fs-determinant-is-additive-on-matrices` (B 6 → 7) is the page's first
  `false-statement` and marks the one false inference multilinearity invites;
  `invertibility-and-adjugate` has 0 occurrences on disk and the decline now
  names `the-determinant-of-a-linear-operator` (84).

**L2, non-blocking, same class as L1.** Batch 8's Theorem 6.9 decline is now
checkable — and checking it, the named home `monoids-groups-and-subgroups` (24)
carries no index material; `def-index`, `thm-lagrange` and `cor-index-tower-finite`
live on `cosets-and-lagranges-theorem` (32). The substance of the reason is
correct and only the page id is wrong. It changes no item; I verify it at step 6
with the rest of the harvest-faithfulness check.

**R1 is closed as a step-4 blocker**, verified from disk rather than taken from
the dispatch: `research/frontier-10-splice.mjs` carries the
`rings-subrings-and-integral-domains` → `finite-counting-and-binomial-coefficients`
entry in `EXTRA_REQUIRES` and hard-errors if that page is absent from the spec,
which is the case that matters since no batch manifest contains it.

Verification this pass: full dependency resolution over 583 in-run items against
2,895 published items with the re-home applied — **0 unresolved, 0 forward
references**; `coverage-checklist.mjs` 14 pages / 877 results / 0 errors;
`gates.mjs --step 0` **CLEAR**; every decline reason in all nine ledgers
re-scanned for page-id claims, with no nonexistent home remaining; all four new
items read in full.

### Boundaries respected

Authored nothing. Edited no batch file, item, page or `plan-spec.json` — only
this report and my own scaffold review. No permission prompt raised.

## Stage 1 — step 4, propagation — not started

## Stage 2 — step 6, whole-level audit — **IN PROGRESS**

### Correction to the dispatch's fatal tally

The dispatch table lists batch 6 as "2 proposed" fatal families. Its findings file
reports **six**: F1 (false title), F2 (binomial theorem outside its hypothesis),
F8, F10, F11, F12 (four unsupported case reductions on the Kuratowski spine).
The run's fatal-family total is therefore **19, not 15**. Batch 6's four extra
families are the load-bearing ones under
`thm-kuratowski-wagner-planarity-characterisation`, and its own reader records
that theorem as clean *only once F10–F12 are supplied* — so the correctness of
that landmark is exactly the question of whether those repairs hold. They are
assigned to the `kuratowski` refuter.

### Fatal adjudications completed from disk

**Batch 5 F1 — `lem-finite-jordan-cover-sum-bounds` — CONFIRMED fatal,
repair ACCEPTED, new Statement independently verified true.**
The reader's counterexample to the original is correct. I did not take the new
Statement on the strength of its proof. Verifying it directly: for $x\in E$ the
cover supplies some $i$ with $x\in E_i$, so $E\cap E_i\neq\emptyset$ and
$M_i\ge\sup_{E\cap E_i}h\ge h(x)$, while every other term is $\ge0$ because
every $M_j\ge0$; for $x\notin E$ the zero extension gives $0\le$ RHS. The
pointwise majorant is therefore valid on and off $E$, which is exactly what the
original lacked. Claim 2 needs no sign condition on $m_i$ and correctly does not
impose one — the asymmetry is real, because the $E_i$ may protrude from $E$ while
the $F_i$ may not. Boundary cases checked: empty $E$, $h\equiv0$, a cover member
disjoint from $E$, overlapping cover members, empty $F_i$, negative $m_i$.

**Batch 5 F2 — `thm-linear-images-scale-jordan-content-by-absolute-determinant`
— CONFIRMED fatal, repair ACCEPTED, and checked for circularity by a longer
route.** The original's Cavalieri invocation was genuinely circular. In the
repair, step 1.1 establishes Jordan measurability of $E_0F$ for *every*
elementary $E_0$ — via $\partial(E_0F)=E_0(\partial F)$, which uses only that
$E_0$ is a linear homeomorphism, plus Lipschitz preservation of null sets and the
boundary criterion — **before** [L3] Cavalieri is used for the shear. A shear is
an elementary matrix, so its image is already known Jordan at the point of
invocation. No fact used before that invocation mentions the content of $E_0F$,
and `depcheck` reports the dependency graph acyclic, so no longer route closes
the loop either. I also checked the singular branch separately: it does not use
the invertible factorisation, the zero row of the echelon form puts the range in
a coordinate hyperplane, and the field hypotheses of [L6]/[L7] are satisfied over
$\mathbb R$.

**Batch 6 F1 — the false title — CONFIRMED fatal, repair ACCEPTED and verified
run-wide.** `thm-r-three-three-equals-six` now reads "The Ramsey number
$R(3,3)=6$". The string "first exact" has zero occurrences anywhere in `items/`,
the batch manifest, or `plan-spec.json`. This class is Alpha's alone because the
step-7 judges never see a title; a dedicated `titles` refuter is sweeping every
A and B page in the run for the remaining instances.

### §6b.0 — harvest faithfulness

All 14 pairs satisfy the structural rule: every page has at least two independent
treatments and at least one textbook, monograph, or full note set. No page is
primarily backed by encyclopedia entries (batch 7 has one encyclopedia entry among
six sources, with Riehl and Mac Lane primary).

I read **all 81 `deferred`/`out-of-scope` dispositions** across the nine ledgers
against the narrowed rule. Seventy-eight are properly grounded — another page's
topic (the Yoneda page, the dual-spaces page, `sylow-theorems-and-nilpotent-groups`,
`conjugacy-and-simplicity-in-the-symmetric-groups`, `the-determinant-of-a-linear-operator`)
or a whole subject area the library has not reached (Lebesgue integration, Galois
theory, the trigonometric and logarithmic functions, the Four Colour Theorem's
discharging machinery, the classification of finite simple groups).

**Three rows in batch 4 declined on process grounds, which is not a permitted
ground, and the real reason in each case is different from the recorded one.**
The underlying fact none of the three reasons stated: **this page defines the
Riemann–Stieltjes integral as a MESH limit, while Rudin's Chapter 6 uses the
REFINEMENT integral.** That divergence, not scaffold scope, is what governs all
three.

- **Rudin 6.12(c), unrestricted interval additivity — decline UPHELD, reason
  REWRITTEN.** Under the mesh definition this clause is not merely unbuilt, it is
  **false**: when $f$ and the integrator share a jump at the cut point, the two
  pieces can be integrable while no mesh limit exists on $[a,b]$, which is the
  page's own `cex-common-jump-prevents-riemann-stieltjes-integrability`. The
  authored theorem's hypothesis "$f$ continuous at $c$" is the correct one for
  this definition. Recording it as a missing result would have invited a future
  agent to "build the machinery" for a false statement.
- **Rudin 6.17, Riemann-integrable derivative — decline UPHELD, reason
  REWRITTEN.** `thm-riemann-stieltjes-darboux-criterion` supplies the
  refinement-versus-mesh bridge only for a nondecreasing integrator plus a
  continuity side condition that this hypothesis does not give. The $C^1$ case,
  where the side condition is automatic, is proved. The obstruction is
  definitional, not an unbuilt lemma.
- **Rudin 6.16, countable pure-step integrator — decline REJECTED; the result is
  BUILT.** Its recorded reason ("would exceed the adjudicated scaffold") is
  exactly the lazy-decline shape the owner's 2026-08-11 rule forbids, and the
  result is true under the mesh definition and buildable from items already on
  the page. Only the **finite** step case existed, and it sits on the B page,
  which is a leaf and cannot be cited.

**I personally authored `thm-riemann-stieltjes-countable-step-integrator`** and
its proof: pointwise convergence and monotonicity of $\alpha$ by monotone
convergence; the single interior jump evaluated directly from the mesh definition
(exactly one partition cell has $t_i\le s<t_{i+1}$, and its tag is within the
mesh of $s$); the finite case by repeated integrator-linearity; the tail
$\beta_N$ shown nondecreasing with $\operatorname{Var}=\sum_{n\ge N}c_n$
because $s_n\in(a,b)$ forces $\beta_N(a)=0$ and $\beta_N(b)=\sum_{n\ge N}c_n$;
and the integral-bound corollary closing the estimate. The proof needs no
distinctness of the $s_n$, so I dropped Rudin's distinctness hypothesis and
tagged the Statement `ai-altered` rather than `literature-derived`, recording the
divergence in the Remark. The Remark also disposes of both endpoints: $s=a$ would
be harmless, $s=b$ genuinely breaks the identity, which is why the hypothesis is
the open interval. Item, page file, batch manifest, `plan-spec.json`, proof
contract and the coverage row are all updated; precheck, strict proof contract
(71/71 batch, 475/475 merged), content-policy (584 items), coverage-checklist
(887 headings), validate-plan, rendercheck, prosecheck and depcheck are all clean.
**No independent reader has seen this item**, so it is assigned to the
`w2-bv-rest` refuter with that fact stated in the brief.

### L1 and L2 — both verified corrected on disk

L1: batch 4's `bounded-variation-and-riemann-stieltjes` source ledger now cites
**W. Rudin, *Principles of Mathematical Analysis*, Chapter 6, 6.1–6.22,
pp. 120–136** directly; the MIT syllabus row is gone. L2: batch 8's Theorem 6.9
decline now names `cosets-and-lagranges-theorem`, and that page genuinely carries
`def-index`, `thm-lagrange` and `cor-index-tower-finite`, so the disposition is
now both correctly reasoned and correctly homed.

### Cross-batch and cross-level citations

`research/frontier-10-audit-manifest.json`: 2,540 edges — 1,337 published-backward,
1,143 same-batch, **60 cross-batch**.

- **Dependency-eligibility holds run-wide: 0 edges target an `ai-generated`
  Statement.** Targets split 1,499 `literature-derived` / 1,041 `ai-altered`.
- **All 60 cross-batch edges are backward and I read every one.** They are four
  clusters: batch 3 → batch 2 (the structure theorem, 4 edges), batch 5 → batch 9
  (determinants and Gaussian elimination, 15), batch 7 → batches 1 and 9 (matrices
  and determinants, 13), batch 9 → batches 1 and 3 (matrices, symmetric groups,
  polynomial rings, 28). Zero forward edges among them, confirmed against
  `plan-spec.json` orders.
- The edge I created at Stage 0 by overturning a decline —
  `cor-finite-subgroups-of-units-in-a-domain-are-cyclic` citing the invariant-factor
  form at order 40 from order 52 — is **correct**. I checked its proof line by
  line: the exponent equals the largest invariant factor, the root bound over a
  domain gives $|G|\le e$, and $e=n_r\le n_1\cdots n_r=|G|$ forces equality and
  hence $r=1$. Every dependency is used exactly as its Statement permits.

### Page summaries

All 14 A pages: exactly two prose paragraphs, longest 78 words, all under the
150-word bound. All 14 B pages: no authored summary body. No violation.

### The re-home follow-ups (dispatch item 7)

`def-finite-sum-in-a-commutative-monoid` and `lem-finite-sum-reindexing-and-fubini`
are on `rings-subrings-and-integral-domains` (order 46) in **both** `library/` and
`plan-spec.json`, and both remain `status: published`, so no
`draft-on-published-page` error arises. Their own wikilinks are clean: all eight
distinct dependency targets resolve to orders 5.3–24, every one below 46, so the
move created no forward reference. `depcheck` confirms no cycles and no
unresolved references repo-wide; the 112 `cited-not-in-deps` warnings it prints
are legacy and **zero of them are in-run**.

### Read-only proof refuters

`risk-report.mjs` routes **316 of 475** items as high or critical (138 critical,
178 high). Coverage is being taken in two waves of eight, the `refuter` lane cap.

Wave 1 (running): `fubini-fatal`, `bv-fatal`, `cat-foundations`, `cat-groupoid`,
`kuratowski`, `finite-abelian`, `polyrings`, and a dedicated `titles` sweep of
every A and B page in the run. The six proof clusters are built around the 19
repaired fatal items and are told explicitly that the reader did not certify its
own repair.

Wave 2 (briefs written, launching as wave 1 drains) covers the remaining **220**
high/critical items, grouped by page: `w2-group-actions` (30), `w2-improper` (31),
`w2-bv-rest` (23), `w2-fubini-rest` (21), `w2-graphs-ramsey` (26), `w2-linalg` (25),
`w2-det-cat` (24), `w2-algebra-rest` (40).

Every brief carries the no-permission-prompt block verbatim, and the lane is
`--sandbox read-only` enforced by `dispatch.mjs`, not by instruction.

### Still open

`risk_review` dispositions for the 316 high/critical items (they are due at step 6,
where `--require-reviewed` binds, and each needs my adjudication informed by the
refuter that read it); adjudication of both refuter waves; the audit and spine
receipts; `gates.mjs --step 6`.

## Stage 3 — step 8, judge adjudication — not started

## Stage 3 — step 8, judge adjudication — not started
