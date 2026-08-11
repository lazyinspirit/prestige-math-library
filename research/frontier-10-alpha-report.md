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

### Refuter wave 1 — what it caught that nobody else did

Eight refuters returned. **They found five fatal defects that both the nine
independent readers and my own adjudication had missed**, which is the clearest
evidence in this run that the role earns its cost. All five are repaired.

1. **`thm-linear-images-scale-jordan-content-by-absolute-determinant` — the
   Cavalieri gap was only half fixed.** I had checked the *ordering* circularity
   the reader repaired and confirmed it. The refuter checked the *other*
   hypothesis: `cor-cavalieri-principle-for-jordan-content` requires the target's
   sections to be Jordan measurable outside a content-zero parameter set, and
   step 1.1 applied it to an arbitrary bounded Jordan $F$. It supplied a
   counterexample showing that hypothesis is not implied by Jordan
   measurability — enumerate $q_k\in[0,1]$, take compact nowhere-dense $C_k
   \subseteq[0,2^{-k}]$ of positive content containing $0$, and set
   $F=([0,1]\times\{0\})\cup\bigcup_k(\{q_k\}\times C_k)$. I verified it:
   $F$ is compact with outer content $0$, hence Jordan, while $F_{q_k}=C_k$ is
   non-Jordan on a dense, non-content-zero parameter set. **Confirmed fatal.**
   Repaired on the refuter's own suggested route: Cavalieri is now applied only
   to the rectangular figures $P,Q$ and their images, whose sections are finite
   unions of intervals and therefore do satisfy the hypothesis, and the
   already-Jordan $E_0F$ is squeezed between them.

2. **`def-category` and the concrete categories — morphisms had no well-defined
   codomain.** `def-function` in this library states explicitly that the codomain
   is *not* part of a function, and that the empty function is a function
   $\varnothing\to B$ for **every** $B$ at once. So $\varnothing^\varnothing
   =\{\varnothing\}=\{\varnothing\}^\varnothing$, and reading
   $\mathbf{Set}$'s morphisms as bare functions gives one morphism two
   codomains, contradicting `def-category`'s requirement that `cod` be a
   function. The refuter gave the analogous collisions in the functor category
   (one natural family being a morphism $F\Rightarrow F$ and $F\Rightarrow G$)
   and in the comma category. **Confirmed fatal.** I repaired it at the root
   rather than in fifteen places: `def-category` now states that when a category
   is presented by its hom-collections the morphism class is their **disjoint
   union**, so a morphism is a triple and `dom`/`cod` are projections. That one
   convention legitimises Set, Grp, Ring, Vect, RMod, Top, Poset, the functor
   category and the comma/slice/coslice categories at once. I also corrected
   `prop-sets-and-functions-form-category-set`, whose `[L1]` had inflated
   `def-function` into saying a function *has* a codomain.

3. **`ex-change-of-basepoint-isomorphism-for-fundamental-groups` — the reader's
   own F7-05 repair introduced a b-leaf violation.** It routed the repair through
   `ex-fundamental-groupoid`, and both items live on the same **B page**. B pages
   are leaves. **Confirmed fatal**, and worth recording *why no gate caught it*:
   `validate-plan` reads `plan-spec.json`, which still carried the pre-repair
   dependency list, so the durable artifact concealed the edge. The gate was
   green on stale data. Repaired by proving the arbitrary-endpoint groupoid laws
   inline from published dependencies — concatenation well defined on
   rel-endpoint classes by pasting, associativity and unit laws by
   reparametrisation, and $\lambda*\bar\lambda\simeq c$ by an explicit
   contraction. Inlining rather than re-homing was forced: the A page sits at
   exactly the 60-item ceiling, so absorbing the groupoid there would have
   required a page split at step 6.

4. **`ex-amalgamation-along-a-whole-factor` — a second false title.** The title
   claimed "Amalgamating along a whole factor recovers the other group", but the
   Example takes an arbitrary homomorphism $h$ and displays the noninjective
   reduction $C_4\to C_2$, while the page's own
   `def-free-product-with-amalgamation` reserves "amalgamation" for **injective**
   maps. **Confirmed fatal** and retitled to what the proof gives: "A pushout
   along an isomorphism recovers the other group." This is the second instance of
   the class the judges structurally cannot see.

5. **`thm-riemann-stieltjes-darboux-criterion` — the equivalence fails at
   $a=b$.** The Statement carried no $a<b$. On $[a,a]$ the definition fixes the
   integral at $0$, so every bounded $f$ is integrable, while
   `def-partition-and-refinement` admits no partition of a singleton, so
   condition 2 asserts the existence of something that cannot exist.
   **Confirmed fatal**; $a<b$ added, with the reason recorded in the Statement.
   The same refuter found that `thm-riemann-stieltjes-continuous-composition`'s
   `[L1]` had dropped this criterion's continuity-at-integrator-discontinuities
   clause, and gave a counterexample ($\alpha=\mathbf1_{[c,1]}$,
   $f=\mathbf1_{(c,1]}$) proving the clause essential. **Confirmed fatal as a
   dependency-citation defect**; the Fact now states what its target states, and
   the Statement survives because the proof restores the clause itself at
   step 3.1.

Nonfatal findings I accepted and repaired while the text is unfrozen: the two
surviving natural-isomorphism citations left stale by the F7-26 repair; the
$k\ge1$ domain of `lem-successive-p-multiple-quotients-recover-elementary-divisors`
(the formula $d_{k-1}-d_k$ is undefined at $k=0$); the zero-ring case of
`cor-factor-theorem-over-a-commutative-ring` (there $x-a=0$ is not monic, so the
division theorem is inapplicable, though the conclusion holds trivially); and the
empty-set boundary of `lem-finite-jordan-cover-sum-bounds`, since this library
adopts no extended-real convention for $\sup\varnothing$.

### The contract-integrity finding, measured

Three refuters independently reported that boundary attestations quote deleted
pre-repair proof text and that citation quotes are mechanically truncated. Rather
than accept or dismiss the claim, I wrote a checker that normalises whitespace and
tests every quoted boundary fragment against the current item text. The real
scale is **14 entries across 6 items, out of 1,700 with evidence** — all in
batch 4, whose proofs the reader rewrote most heavily. All 14 are re-anchored to
the step that now discharges the case, and the checker reports zero.

The truncated-quote criticism is correct and is **structural, not local**: the
contract generators slice a fixed number of characters, so a long Statement is
recorded as a prefix. `proof-contract --strict` verifies the prefix genuinely
occurs in the cited section, so no quote is *false*; but a prefix is weaker
evidence than the exact clause the standard asks for. I am recording this as a
known limitation of the artifact rather than silently regenerating 475 contracts,
and my own new item's contract has the same property.

### Refuter wave 1, the last cluster — two more fatals on the planar spine

`kuratowski` returned last and found two more.

6. **`lem-separation-augmentation-for-kuratowski-free-graphs` — a third false
   title.** It claimed the graph augments "**each** proper separation", while the
   Statement, every proof step, and Diestel's cited lemma are all restricted to a
   **minimum** proper separation of order at most two. Retitled to what is
   proved. The Statement and proof themselves passed the order-zero, order-one,
   $xy\in E(G)$, rerouting and two-sided edge-maximality checks.

7. **`prop-face-boundaries-in-three-connected-plane-graphs` — the same step,
   wrong a second time.** The reader's F8 correctly removed a false "at most two
   of three internally disjoint paths can meet the cycle" claim. Its replacement
   then inferred arc-containment from the *absence of four alternating
   attachments*, and that implication fails when two components share three
   attachments: $A(D_1)=A(D_2)=\{a,b,c\}$ has no alternating quadruple, yet
   neither set lies in an arc between consecutive attachments of the other. The
   refuter marked this fatal at medium confidence and explicitly left the
   30-second call to me. **I judge it fatal**: it is a distinct plane
   configuration needing its own Jordan invocation rather than omitted algebra,
   and it is the second defect found in this one load-bearing step, which sits
   directly under `thm-kuratowski-wagner-planarity-characterisation`. Replaced
   with a direct region argument — a spanning tree of one component plus one edge
   to each of its $k$ attachments cuts the facial side into $k$ regions, each
   bounded by an arc between **consecutive** attachments, so every other
   component lies in one region with all its neighbours on that arc; the open arc
   together with the components inside it then has exactly those two attachments
   as outside neighbours, which is the 2-cut. This reaches the shared-attachment
   case that no alternation argument can.

I also verified reader F10 independently and from first principles before the
refuter did: the weighted-centre walk cannot backtrack (moving into a component
of weight $\ge3$ leaves the side you came from at weight $\le1$) and terminates,
and the claimed $K_{3,3}$ bipartition $\{a,u_3,u_4\}\mid\{b,u_1,u_2\}$ really
does carry all nine edges over six disjoint connected branch sets.

One further nonfatal arithmetic slip repaired while unfrozen: step 4.1 of
`lem-bv-functions-are-regulated` bounded an enlarged component's oscillation by
$\varepsilon/4+\varepsilon/2+\varepsilon/2$ and called it $<\varepsilon$. The
continuity neighbourhoods are now taken at $\varepsilon/4$.

### Fatal tally so far

**Nine fatal defects confirmed and repaired at Stage 2 that no reader had
caught** — five in wave 1's first six clusters, two from `kuratowski`, plus the
`def-category` and `prop-sets-and-functions-form-category-set` pair. Three of the
nine are **false titles**, the class the step-7 judges structurally cannot see,
which is now the single most common fatal class in this run.

### Consolidated fatal-error ledger for step 10

Grouped by defect type, then location. Mechanical and 30-second-gap edits are
excluded per the owner rule. "R" = found by an independent step-6 reader,
"F" = found by a read-only refuter, "A" = found by Alpha.

**False title or Statement asserting more than the proof gives — 8 items.**
This is the run's most common fatal class and the step-7 judges cannot see a
title at all.

| id | location | found | disposition |
|---|---|---|---|
| `thm-r-three-three-equals-six` | title | R | restated: dropped "the first exact Ramsey number" |
| `ex-amalgamation-along-a-whole-factor` | title | F | restated: it is a pushout along an isomorphism, not an amalgamation |
| `lem-separation-augmentation-for-kuratowski-free-graphs` | title | F | restated: minimum proper separation of order ≤ 2, not "each" |
| `cor-orbit-stabilizer-cardinality` | title | F | restated: finiteness qualifier restored |
| `thm-conjugacy-class-cardinality` | title | F | restated: finiteness qualifier restored |
| `cor-solution-count-trichotomy-over-an-infinite-field` | Statement | F | hypothesis added: consistency, with the witness recorded |
| `thm-improper-convergence-implies-principal-value` | Statement | F | proof supplied: both converses now refuted inline |
| `lem-finite-jordan-cover-sum-bounds` | Statement | R | restated: every $M_i\ge0$; the original was false |

**Invalid inference or unlicensed case reduction — 6 items.**

| id | location | found | disposition |
|---|---|---|---|
| `thm-linear-images-scale-jordan-content-by-absolute-determinant` | proof | R+F | proof replaced twice: circular Cavalieri, then its unmet sectional hypothesis |
| `prop-face-boundaries-in-three-connected-plane-graphs` | proof | R+F | proof replaced twice: false path claim, then the shared-attachment case |
| `lem-kuratowski-minors-are-topological-minors` | proof | R | proof replaced: false attachment-leaf reduction |
| `lem-edge-maximal-kuratowski-free-is-three-connected` | proof | R | proof replaced: unsupported obstruction analysis |
| `lem-bv-functions-are-regulated` | proof | R | proof replaced: one-sided neighbourhoods are not an open cover at a jump |
| `prop-maximal-plane-triangulation-characterisation` | Statement | F | hypothesis added: two-connectivity, so facial boundaries are cycles |

**Missing hypothesis, ill-typed Statement, or domain error — 7 items.**

| id | location | found | disposition |
|---|---|---|---|
| `def-category` (+ `prop-sets-and-functions-form-category-set`) | Definition | F | convention added: morphisms carry domain and codomain; `cod` was undefined |
| `def-functor-category`, `def-natural-isomorphism` | Definition | R+F | restricted to a small source; natural isomorphism made intrinsic |
| `def-comma-slice-and-coslice-categories` | Definition | R | restated through the terminal category and selector functor |
| `thm-riemann-stieltjes-darboux-criterion` | Statement | F | hypothesis added: $a<b$; the iff failed on a singleton |
| `cor-riemann-stieltjes-agrees-with-riemann` | Statement | F | typed on the sorted interval; the reversed clause was empty |
| `thm-riemann-stieltjes-change-of-variable` | Statement | F | hypotheses added: $c<d$, $a<b$ |
| `thm-plane-dual-exists-and-double-dual-recovers-primal` | Statement | F | hypothesis added: $G^*$ simple, else the double dual is not formed |
| 14 items on `fubini-and-change-of-variables` | Statement | R | hypothesis added: $n\ge1$ |

**Incorrect or inflated dependency citation — 5 items.**

| id | location | found | disposition |
|---|---|---|---|
| `thm-riemann-stieltjes-existence-bv-no-common-discontinuities` | Facts + proof | R | three failures: a bound on the wrong object, a Cauchy **net** treated as a sequence, and uncontrolled step approximants |
| `thm-riemann-stieltjes-continuous-composition` | `[L1]` | F | Fact restated: it had dropped the criterion's continuity clause |
| `thm-row-rank-equals-column-rank` | `[L2]` | F | Fact restated: it had dropped the RREF hypothesis |
| `ex-conditionally-convergent-step-function-integral` | `[L3]` | F | Fact restated + subinterval additivity added |
| `ex-fundamental-groupoid`, `ex-change-of-basepoint-isomorphism-for-fundamental-groups` | Facts + deps | R+F | loop-only results applied to arbitrary endpoint paths; then a **b-leaf** dependency introduced by the repair itself |

**Unbuilt machinery asserted — 2 items.**

| id | location | found | disposition |
|---|---|---|---|
| `ex-free-group-and-free-module-functors` | proof | F | lemma supplied: $R^{(X)}$ constructed inline and the infinite index set corrected |
| `lem-separation-augmentation-for-kuratowski-free-graphs` | Statement | R | definitions supplied: proper separation, separator, order; inflated Menger citation removed |

**Coverage omission — 1 item added.**

| id | found | disposition |
|---|---|---|
| `thm-riemann-stieltjes-countable-step-integrator` | A (§6b.0) | **new result added and proved by Alpha**: Rudin 6.16 had been declined on process grounds and was buildable |

**Two items were twice-touched and require the orchestrator's personal audit**
per WORKFLOW.md: `thm-linear-images-scale-jordan-content-by-absolute-determinant`
and `prop-face-boundaries-in-three-connected-plane-graphs`. Both had a reader
repair that was itself defective and a second Alpha repair on top. The touchlog
reports 36 items repaired more than once overall; these two are the ones where
both touches were *fatal* repairs to the same argument.

### Stage 2 status — COMPLETE, step 6 gate CLEAR

`node tools/gates.mjs --step 6 --run frontier-10` → **15/15 gates pass**.
584 items, 475 proof contracts, 887 harvested headings, 2,559 relationships.

Done: all 19 reader fatal families adjudicated from disk; 16 read-only refuters
dispatched and adjudicated; **22 items carry a confirmed-fatal adjudication and
every one is repaired**; §6b.0 harvest faithfulness including all 81 declines;
L1 and L2 verified; all 60 cross-batch edges read; page summaries verified; the
re-home follow-ups closed; `risk_review` complete for all **317** high/critical
items with `--require-reviewed` passing; spine receipt; manifest-bound audit
coverage receipt; impact receipt with all 339 affected items disposed.

### Honest remaining gaps

1. **Proof-contract citation quotes are prefixes, not exact clauses.** The
   generators slice a fixed character count, so a long Statement is recorded as
   its opening. `proof-contract --strict` verifies the prefix really occurs in
   the cited section, so no quote is *false*, but a prefix is weaker evidence
   than `QUALITY-CONTROLS.md` asks for. Three refuters raised this independently
   and they are right. I re-anchored the 14 boundary entries that quoted
   *deleted* text (measured with a purpose-built checker; it now reports zero),
   but I did not regenerate 475 contracts' citation quotes. My own new item has
   the same property.
2. **Boundary attestations are templated in places.** Several contracts claim a
   named step "explicitly handles" a case in wording the step does not contain.
   Where a refuter named one, I fixed it; a systematic sweep would need a
   semantic check no tool currently performs.
3. **Two refuter clusters had not returned when this line was written**
   (`w2-fubini-rest`, `w2-algebra-rest`). Their sibling clusters found nineteen
   fatal defects between them, so these two should be read and adjudicated before
   step 7 spends judge calls. **This is the one thing I would not skip.**
4. **Reader 6 could not fetch its source URLs** (sandboxed DNS), so its
   source-provenance check rested on the durable harvest alone. I covered that
   gap at §6b.0 for the declines and the Conrad/Brosnan/Judson harvest, but not
   for every Diestel row.

### Twice-touched, for the orchestrator's personal audit

`thm-linear-images-scale-jordan-content-by-absolute-determinant` and
`prop-face-boundaries-in-three-connected-plane-graphs`. Each had a reader repair
that was itself fatally defective and a second Alpha repair on top. The touchlog
counts 36 items repaired more than once; these two are where both touches were
fatal repairs to the same argument.

## Stage 3 — step 8, judge adjudication — **IN PROGRESS**

Baseline `pre-step8` was taken before any adjudication. Working set:
`research/frontier-10-step8-triage.json`, 322 live rejections over 28 page-units
(117 both-lane, 27 DeepSeek-only, 178 Terra-only) built from the latest verdict
per (item, model) in `research/frontier-10-judge.jsonl`. Ledger rows go to
`research/frontier-10-judge-adjudications.jsonl`, one per rejecting model, with
`item_sha256` recomputed from disk **before** any repair.

Reading aids, both committed so a later reader can reproduce the working set:
`research/frontier-10-dispatch/step8-show.mjs` prints a page-unit's rejections
with both lanes' verdict text and the item's current hash;
`step8-adj.mjs` appends ledger rows, expanding one line per item into one row
per rejecting lane and taking each lane's own `context_sha256`. It accepts
`<id>@ds` / `<id>@terra` because the two lanes often reject the same item for
unrelated reasons and only one of them is fatal.

### The line I am adjudicating on

Settled on the first two page-units and applied unchanged since. R1 makes the
cost of getting this wrong asymmetric, so it is written down rather than felt:

**Fatal.** A title or Statement asserting more than the proof gives; a step
whose stated content is false on a concrete configuration; an inflated `[L#]`
whose extra content the proof actually leans on and which nothing in the frozen
context establishes.

**Nonfatal.** A citation tag that omits a fact the item already declares as a
dependency or that sits on the same page; an inflated `[L#]` where the proof
only uses the weaker true content; a true, standard step compressed at roughly
the level the source text compresses it; a gap a competent reader closes in 30
seconds.

**False positive.** The judge's own claim is wrong — the fact it says is missing
is present, its counterexample does not arise, or it contradicts a library
convention it did not check.

The third category is not a formality. Five of the first 44 adjudications are
false positives, and two of them were confident, specific, cross-family
DeepSeek findings that would have licensed a real edit to a correct proof.

### Page-unit 1 — `symmetric-groups-and-the-sign-homomorphism` — 12 rejections, **0 fatal**

11 nonfatal, 1 false positive, no edits. The pattern is almost entirely
citation-tag precision: `def-group-homomorphism` and `def-symmetric-group` are
declared dependencies that the step tags do not repeat; `sgn(\tau)=-1` is
`thm-parity-of-transposition-factorisations-is-well-defined` at `r=1`, two items
earlier on the same page; `\operatorname{Inv}(\sigma)` is a subset of the finite
set `n \times n`.

False positive: `cex-overlapping-cycles-need-not-commute`. Terra called `[L1]`
an inaccurate restatement for dropping finiteness — but `[L1]` reproduces the
cited lemma's own opening sentence verbatim, and the counterexample lives in
`S_3` anyway.

### Page-unit 2 — `plane-graphs-euler-and-the-five-colour-theorem` — 32 rejections, **5 fatal**

The densest both-lane page in the run (17), and the one where the fatals are.
Four false positives here too, all on the hardest material.

**Fatal 1 and 2 — the two-connectivity chain.** Both lanes, independently, on
two items. `prop-maximal-plane-triangulation-characterisation` was narrowed to
**two-connected** plane graphs at some earlier stage — its Statement even
explains why ("two-connectivity is what makes every facial boundary a cycle",
which is what the Jordan-chord argument in its step 1.1 needs) — but its
**title** still asserted the unrestricted Diestel 4.2.8 form. That is a title
asserting more than the proof gives, `LEVELS.md` §Step 6's named fatal.
`prop-maximally-planar-edge-characterisation` then quoted that title as its
`[L2]` and leaned on the dropped hypothesis in step 1.1 — an inflated
restatement the proof actually uses, so `dependency_citation`.

Repairs: title narrowed to match the Statement; `[L2]` restated faithfully;
`prop-maximally-planar-edge-characterisation` restated so the `3n-6 \Rightarrow`
maximal direction stays unrestricted (its proof never needed the hypothesis) and
only the converse carries two-connectivity, with the title following. I also
corrected the same unrestricted claim where it had propagated into
`cor-planar-simple-graph-edge-bound`'s Statement prose, which no judge caught.

**Honest gap this leaves.** Diestel 4.2.8/4.4.1 hold without two-connectivity,
because a maximal plane graph of order at least three *is* two-connected. Proving
that needs a re-embedding lemma ("any face can be made the outer face") the page
does not have, so building it is a rewrite, not a step-8 repair. The narrowed
statements are true and proved; the unrestricted forms are a scope item for a
later run.

**Fatal 3 and 4 — the disconnected-augmentation construction.** DeepSeek on
`cor-planar-simple-graph-edge-bound` step 2.1 and Terra on
`cor-triangle-free-planar-edge-bound` step 3.1, each finding it in the item the
other did not read closely. Both steps said to join the components of a
disconnected plane graph "through the unbounded face". A component drawn inside
a **bounded** face of another never meets the unbounded face, so for a fixed
embedding the construction does not exist. Repaired by redrawing first: each
component drawing is a finite union of segments and so bounded, so the
components translate and scale into pairwise disjoint discs, which puts every
one of them on the unbounded face without changing the abstract graph the bound
is about.

**Fatal 5 — another false title.** DeepSeek on
`thm-plane-dual-exists-and-double-dual-recovers-primal`: the title asserted the
double-dual identification unconditionally, while the item's **own Statement**
makes it conditional on `G^*` being simple and names `G=K_2` as the case where
it fails. Title narrowed to match.

False titles are now, as at step 6, the most common fatal class in this run.

**The four false positives, and why they matter.**

- `lem-three-connected-kuratowski-free-is-planar` (DeepSeek). It claimed step 3.1
  overlooks two `Y`-vertices "separated on `C` by another `X` vertex". Separated
  on **one** side means they are consecutive in `X`, so they share the other
  arc and the condition holds; separated on **both** sides *is* the alternating
  case that yields `TK_{3,3}`. No gap.
- `lem-separation-augmentation-for-kuratowski-free-graphs` (DeepSeek). It called
  "deleting one edge from a subdivision leaves its branch vertices connected"
  false, citing an internal edge of a subdivided path. That breaks the path, but
  `K_5 - e` and `K_{3,3} - e` are connected, so the branch vertices stay
  connected through the others. The claim is true.
- `lem-three-connected-graph-has-a-contractible-edge` and
  `thm-kuratowski-wagner-planarity-characterisation` (Terra, both). Both alleged
  a dropped finiteness hypothesis. `def-finite-simple-graph` ends: "When no
  qualifier is present, the word **graph** has this meaning." Terra did not check
  the base convention.
- `thm-plane-dual-...` (Terra). It said steps 3.1 and 4.1 form `(G^*)^*` without
  assuming `G^*` simple. The Statement assumes exactly that and discusses `K_2`
  explicitly; Terra rejected the item for the defect the item is written around.

**The rest — 23 nonfatal.** This page builds polygonal plane topology from
scratch, and most of what both lanes found is that its topological steps are
compressed: relative non-separation asserted from the absolute lemma, the
regular-neighbourhood construction asserted, "a tree meeting the boundary cycle
in `k` points cuts the side into `k` regions" asserted. Every one of those is
true and standard, and demanding the relative Jordan-Schoenflies development at
step 8 is a rewrite of the page, not a repair of it. Two worth naming for a
future reader:

- `lem-polygonal-crossing-parity-is-locally-constant` step 1.2 lists "crossing an
  edge tangentially creates or destroys two intersections". For straight edges
  that event does not arise — Terra is right — but it is vacuous, and the vertex
  event analysis that actually carries the proof is correct.
- `def-polygonal-arc-and-polygon` does not pin a canonical vertex set: a straight
  run admits extra breakpoints. Real imprecision, and Terra found it. It is
  nonfatal only because every downstream use needs merely *some* finite
  admissible list, never a canonical one.

### Page-units 3 to 14 — the rest

**`categories-functors-and-natural-transformations` (36) — 1 fatal.**
`def-isomorphism-groupoid-and-connected-category` asserted that in a groupoid,
connectedness is equivalent to having an isomorphism between every ordered pair
of objects. Both lanes gave the same counterexample: the **empty groupoid**
satisfies the right-hand condition vacuously and is not connected, because the
same definition's own first clause requires nonemptiness. Repaired by putting
nonemptiness into the equivalence and recording why it cannot be dropped.

One false positive: `ex-free-group-and-free-module-functors`, where DeepSeek
argued the basis proof fails over the zero ring because `1 = 0` there. The
coordinate argument gives `c_y` directly and is valid over every ring; over the
zero ring every coefficient is already `0`, so nothing fails.

Two both-lane findings on this page are real and I want them recorded even
though they are nonfatal. `def-full-faithful-and-essentially-surjective-functor`
and `lem-isomorphism-characterised-by-composition-bijections` both apply
`injective`/`surjective`/`bijective` to hom-collections that
`rem-category-theory-class-and-size-conventions` explicitly allows to be proper
classes, while `def-injection-surjection-bijection` is stated for functions
between sets. Injectivity of a definable class-function schema is the same
formula, so no statement becomes false and no step becomes unlicensed — but the
page should carry one sentence saying so, and that was step-6 work.

**`bounded-variation-and-riemann-stieltjes` (33) — 1 fatal.**
`ex-finite-step-integrator-weighted-jump-sum` placed its jump points in the
closed interval `[a,b]` "with the endpoint conventions of the one-jump example",
and the one-jump example has no endpoint convention: it fixes `a<c<b`. DeepSeek
found it through the degenerate case `a=b`; the sharper witness is `c_1=a`, where
`H_a` takes the value `1` at every point of `[a,b]`, so every increment is zero
and the integral is `0` while the claimed sum is `w_1f(a)`. Repaired by putting
the jump points in the open interval and saying, in the step, why the boundary is
excluded.

This page's recurring `a=b` complaints are all nonfatal for one reason worth
recording: `def-riemann-stieltjes-sum-and-integral` states "On `[a,a]` the
integral is `0`" and `def-oriented-integral` is titled with that convention. The
singleton cases the judges call unproved are true by a stated convention they did
not open.

**`improper-integrals` (30) — 1 fatal.**
`thm-dirichlet-test-for-improper-integrals`, clause 2, assumed only that
`int_a^inf |g'|` converges. By this library's own definition of an improper
integral, that presupposes `|g'|` is Riemann integrable on each compact
subinterval — **not** `g'`. The proof then applies integration by parts, which
needs `g'` integrable, and a bounded derivative need not be Riemann integrable.
Both lanes found it from different directions: DeepSeek at the hypothesis,
Terra at the `[L3]` restatement of integration by parts. Repaired by making local
integrability of `g'` an explicit hypothesis and saying why it does not follow
from the other one.

Terra's counterexample on `thm-absolute-improper-convergence-implies-convergence`
(the rational-irrational sign function, `|f|=1` and `f` not integrable) does not
apply: the Statement's subject is *an improper integral*, which already
presupposes local integrability. Nonfatal.

**`fubini-and-change-of-variables` (25) — 1 fatal.**
`ex-cavalieri-shear-preserves-jordan-content` stated `[L1]` as "Cavalieri computes
content by integrating sectional contents", dropping the cited corollary's
explicit hypothesis that the sections are Jordan measurable outside a
content-zero parameter set, and then applied it to an **arbitrary** bounded
Jordan set. Step 6 of this same run already established, with a verified
counterexample, that an arbitrary Jordan set need not have Jordan sections. So
this is the same defect the run has already paid for once, in a second item.
Repaired by restating `[L1]` faithfully and reordering the proof: the determinant
argument, which was step 3.1 and is complete on its own, now carries the
statement, and the sectional computation is explicitly a second reading rather
than a second proof.

By contrast `thm-linear-images-scale-jordan-content-by-absolute-determinant` —
the item the step-6 refuter repaired for exactly this — is **clean**: its step 1.1
verifies the sectional hypothesis for `P, Q, E_0P, E_0Q` and explicitly declines
to claim it for `F`. Only its `[L3]` wording is loose. That is the difference
between a repaired proof and a repaired sentence, and it is why Terra's rejection
there is nonfatal and DeepSeek's here is not.

**`ramsey-theory` (11) — 1 fatal.**
`lem-colour-focussing-for-arithmetic-progressions` fixes `m>=2`, but for `m=2`
step 1.2 applies `V(1, k^{2n})` and obtains a **one-term** progression of block
indices, which carries no difference `t`. Steps 2.1 and 3.1 both need `t`. The
`r>1, m=2` regime is therefore not proved. DeepSeek found it; Terra did not.
Repaired by discharging `m=2` outright at the head of step 1.2 — among any `k+1`
points two share a colour, and two same-coloured points are a monochromatic
two-term progression, so `F(2,k,r)=k+1` and the first alternative always holds.

**`free-products-and-amalgamation` (23) — 1 fatal.**
`lem-factor-elements-act-on-reduced-syllable-words` defined `P_{i,g}` by
"prepending `(i,g)` when the word is empty or begins in another factor", with no
case for `g=e_i`. `(i,e_i)` is not a syllable, so `P_{i,e_i}` sends the empty word
outside the set of reduced words and is not an operation on it — and step 3.1
then asserts `P_{i,e_i}=id`. This is the action that carries the normal-form
theorem for free products, so it is load-bearing. Both lanes. Repaired by
defining `P_{i,e_i}` to be the identity and saying why.

The amalgamated twin, `lem-factor-elements-act-on-amalgamated-normal-words`, does
**not** have this hole: it is written in the transversal formulation, which
multiplies the terminal `K` coefficient and rewrites uniquely. DeepSeek's
complaint there is about compression, not well-definedness.

**`gaussian-elimination-and-row-reduction` (18) — 1 fatal.**
`ex-row-echelon-form-is-not-unique-but-rref-is` fixes no field anywhere, and its
whole content is that `R` and `S` are distinct because one has `-1` where the
other has `1`. Over `F_2` they coincide — and the sibling example on the very same
page works over `Z/2`. Terra found it; DeepSeek did not. Repaired by fixing `Q`
and recording, in the step, that the ground field is load-bearing here and
nowhere else in the example.

**Four page-units with no fatal finding at all.**
`matrices-and-the-matrix-of-a-linear-map` (23),
`determinants-of-matrices-over-a-commutative-ring` (13),
`polynomial-rings-and-roots` (25),
`the-structure-of-finite-abelian-groups` (24, one false positive),
`group-actions-and-cayleys-theorem` (17), `symmetric-groups` (12, one false
positive). On these the rejections are almost entirely step tags that omit a fact
the item already declares as a dependency. "A field is an integral domain" alone
was rejected four times on the polynomial page.

Two false positives worth naming because they were confident and specific:
`lem-three-connected-graph-has-a-contractible-edge` and
`thm-kuratowski-wagner-planarity-characterisation`, both rejected by Terra for a
dropped finiteness hypothesis. `def-finite-simple-graph` ends: "When no qualifier
is present, the word **graph** has this meaning." And
`lem-elementary-divisors-regroup-into-invariant-factors`, where DeepSeek said
uniqueness was never proved — step 3.1 *is* the uniqueness half, recovering the
exponent columns from any invariant-factor list, which is injectivity.

### Final tally

**322 rejections, 439 ledger rows** (one per rejecting lane), all recorded with
`item_sha256` taken from disk before any repair.

| outcome | rows |
|---|---|
| `confirmed_fatal` | 18 |
| `confirmed_nonfatal` | 412 |
| `false_positive` | 9 |

**12 items carried a fatal defect** — 5.6% of the 322 rejections, on a level of
584 items. By defect type: `logic` 6, `dependency_citation` 4, `other` (a title
asserting more than the proof gives) 2.

| page-unit | rejections | fatal | false positive |
|---|---|---|---|
| plane-graphs | 32 | 5 | 4 |
| categories | 36 | 1 | 1 |
| bounded-variation | 33 | 1 | 0 |
| improper-integrals | 30 | 1 | 0 |
| fubini | 25 | 1 | 0 |
| free-products | 23 | 1 | 0 |
| gaussian-elimination | 18 | 1 | 0 |
| ramsey | 11 | 1 | 0 |
| finite-abelian-groups | 24 | 0 | 1 |
| symmetric-groups | 12 | 0 | 1 |
| matrices | 23 | 0 | 0 |
| polynomial-rings | 25 | 0 | 0 |
| group-actions | 17 | 0 | 0 |
| determinants | 13 | 0 | 0 |

**What the lane split actually showed.** Terra rejected at roughly twice
DeepSeek's rate and found 3 of the 12 fatal items alone; DeepSeek found 4 alone;
both found 5 together. The 117 both-lane rejections contained 9 of the 12 fatals,
which is where the dispatch predicted they would be. But DeepSeek also produced 6
of the 9 false positives, and two of those were confident structural claims about
the hardest proofs on the planar page. Cross-family independence bought real
findings and real noise in the same pass; neither lane could have been trusted
without adjudication.

**Fatal-only cost nothing here.** Of the 412 nonfatal closures, I judge that
perhaps 300 are citation tags that omit a fact the item already declares. Under
the pre-R1 rule those were polishable, and polishing them would have voided 300
judge pairs and resampled 300 refuters. Twelve rejudges is the whole bill.

### The rejudge set — 12 items, and nothing else

**These are the items I edited. Rejudge exactly this list.** Every one is a
`confirmed_fatal` repair; no item was touched for any other reason.

```
prop-maximal-plane-triangulation-characterisation
prop-maximally-planar-edge-characterisation
cor-planar-simple-graph-edge-bound
cor-triangle-free-planar-edge-bound
thm-plane-dual-exists-and-double-dual-recovers-primal
def-isomorphism-groupoid-and-connected-category
ex-finite-step-integrator-weighted-jump-sum
thm-dirichlet-test-for-improper-integrals
ex-cavalieri-shear-preserves-jordan-content
lem-colour-focussing-for-arithmetic-progressions
lem-factor-elements-act-on-reduced-syllable-words
ex-row-echelon-form-is-not-unique-but-rref-is
```

All 12 pass `precheck`. None carried a `verification.judge` block to delete —
step-7 stamps have not been applied to disk. `impact-audit.mjs` reports **0
changed public interfaces and 0 affected items**: every repair is a title
narrowing, a hypothesis made explicit, or a proof step, and no `deps` line moved,
so no downstream consumer needs a disposition.

### Gate state at the end of stage 3

`node tools/gates.mjs --step 8 --run frontier-10`:

- `step8-guard.mjs` — **OK. 12 changed, 12/12 licensed by a confirmed_fatal
  adjudication.** No `nonfatal-edit`, no `judge-adjudication-unhashed`.
- `impact-audit.mjs` — **OK**, 0 changed public interfaces.
- `level-coverage.mjs --verify-current-context` — **13 errors remaining**, and
  every one is expected:
  - 12 × `judge-coverage-missing`, exactly the 12 repaired items. These clear
    when the targeted rejudge lands.
  - 1 × `spine-receipt-invalid` / `receipt-scope`. The spine receipt is
    hash-bound and lapses on mathematical-content change; 12 items changed.
    **Refresh it after the rejudge, not before** — refreshing now produces a
    receipt this same gate invalidates again, and it needs an independent read,
    which is not something the repairer supplies for its own repairs.

**Two errors I did close, because they were mine to reason about and were
pre-existing.** `level-coverage` also reported
`audit-receipt-plan-reconciliation-missing` for
`prop-maximal-plane-triangulation-characterisation` and
`ex-free-group-and-free-module-functors`, plus `audit-receipt-manifest`. None was
caused by step 8 — I changed no `deps` line all stage. They are two step-6
licensing repairs that landed after
`research/frontier-10-audit-coverage.json` was written: the relationship count is
now 2,563 against the receipt's 2,559, and the four extra edges are exactly those
two items'. I read both from disk, wrote their reconciliation rows with reasons,
and rebound `manifest_sha256`. The receipt's `item_scope` (584) and `proof_scope`
(475) were unchanged, so nothing about the scope itself was restamped.

For the record, `ex-free-group-and-free-module-functors` lists
`def-finite-sum-in-a-commutative-monoid` **twice** in its `deps`. It is harmless
and removing it would be an unlicensed step-8 edit, so I left it. It should be
cleaned at the next legitimate opportunity.

### Honest gaps this stage leaves

1. **The unrestricted Diestel 4.2.8 / 4.4.1 forms are not in the library.**
   `prop-maximal-plane-triangulation-characterisation` and
   `prop-maximally-planar-edge-characterisation` are now stated for two-connected
   plane graphs. Both hold without that hypothesis, because a maximal plane graph
   of order at least three *is* two-connected — but proving that needs a
   re-embedding lemma ("any face can be made the outer face") the page does not
   have. Building it is a rewrite, not a step-8 repair. Scope item for a later
   run.
2. **`def-polygonal-arc-and-polygon` does not pin a canonical vertex set.** A
   straight run admits extra breakpoints, so "its vertices" depends on the chosen
   admissible parametrisation. Terra found this and it is real. It is nonfatal
   only because every downstream use needs merely *some* finite admissible list.
3. **`lem-polygonal-crossing-parity-is-locally-constant` step 1.2 lists a
   non-event.** "Crossing an edge tangentially creates or destroys two
   intersections" cannot happen for a straight ray and a straight segment. The
   vertex analysis that actually carries the proof is correct, so the clause is
   vacuous rather than wrong, but it should not be there.
4. **The class-map hygiene sentence the category page needs** (item 2 under
   `categories` above).
5. **`ex-set-arithmetic-isomorphisms-are-natural` never names its functors.**
   They are determined by the displayed formulas, and the naturality check is a
   routine element chase, so it is nonfatal — but a naturality claim should say
   between which functors.

None of these is a fatal defect and none of them is repairable at step 8 without
voiding a verdict for no gain. They belong in the step-10 rundown as known,
recorded, non-blocking.


---

## Stage 3, round 2 — step 8 rejudge adjudication — **COMPLETE**

The 12 round-1 repairs were rejudged on both lanes: **10 `keep`, 14 rejections
across 10 items.** Two items cleared both lanes outright
(`prop-maximally-planar-edge-characterisation`,
`def-isomorphism-groupoid-and-connected-category`) and are done.

All 14 rejections are adjudicated in
`research/frontier-10-judge-adjudications.jsonl`, one row per rejecting lane,
every row carrying `item_sha256` at the pre-edit state. All ten pre-edit hashes
were verified to match **both** the `pre-step8b` touch snapshot and the
`item_sha256` the judges themselves recorded, so the text I adjudicated is
provably the text they read.

**10 `confirmed_fatal` over 8 items; 4 `confirmed_nonfatal`; 0 `false_positive`.**

### The four nonfatal closures — no mutation of any kind

- **`lem-colour-focussing-for-arithmetic-progressions` (deepseek).** Step 3.1
  asserts the new colour differs from every $A_i$ colour "since equality would
  give an $m$-term progression". The lemma's conclusion is a disjunction, so the
  equality case lands in its *first* alternative and the conclusion still holds;
  only the sentence is elliptical. (The item is repaired anyway under Terra's
  separate fatal row, and that repair spells the disjunction out.)
- **`ex-cavalieri-shear-preserves-jordan-content` (terra).** Step 2.1 uses,
  uncited, that translating a one-dimensional Jordan section preserves its
  content. True, elementary, and sitting in prose the item **itself** labels "a
  second reading of the result and not a second proof of it", with step 1.1
  carrying the statement outright from the determinant-1 linear image. DeepSeek
  passed the item and said as much.
- **`thm-plane-dual-exists-and-double-dual-recovers-primal` (terra).** Steps 3.1
  and 4.1 form $(G^*)^*$ without restating that $G^*$ is simple. The Statement
  hypothesises it explicitly and even names $G=K_2$ as the excluded case. Terra
  is asking for the hypothesis to be repeated inside the conditional's proof.
- **`lem-factor-elements-act-on-reduced-syllable-words` — NOT nonfatal.** See
  below; DeepSeek's finding here was confirmed fatal.

### The eight fatal repairs

**`cor-planar-simple-graph-edge-bound` — both lanes, `dependency_citation`.**
Step 3.1 read [L2] as an equality. `lem-plane-face-handshake-by-girth` states
only $g|F|\le2|E|$; the equality case needs the face-handshake **identity**
$\sum_f\ell(f)=2|E|$, which that lemma proves in its own step 1.1 and does not
export. New step 1.2 derives the identity inline from
`lem-plane-edge-face-incidence` (two local sides per edge) and
`thm-double-counting`. [L2] also had "connected" restored. **The Statement and
title were narrowed to a *connected* plane triangulation** — Euler's formula is a
connected-graph statement and the proof uses nothing that would give
connectedness for free.

**`cor-triangle-free-planar-edge-bound` — deepseek, `dependency_citation`.**
[L2] restated `lem-plane-face-handshake-by-girth` without its connectedness
hypothesis, asserting at a generality the library has not established. One word;
the proof's own use was already inside the connected case.

**`prop-maximal-plane-triangulation-characterisation` — both lanes.** The forward
direction rested on two claims with no cited licence: that two boundary vertices
of a face can be joined by an arc through the face, and that two-connectivity
makes the facial boundary a cycle. Round 1 repaired only the title here, so this
is the first round in which the proof body itself was challenged — progress, not
a loop. Rewritten in five steps from the page's own polygonal toolkit: the face
is a region of its boundary cycle (clopen argument); a local sector construction
gives an accessible radius at each boundary vertex; polygonal connectedness of
the region joins two radii into an arc; and the asserted "chords must cross" is
replaced by a **crossing-parity** argument — one general-position ray for
$C\cup e$ serves $C$, $J_1$ and $J_2$ at once, their parities satisfy
$J_1+J_2=C$ modulo two, and local constancy at $u_4\notin J_1$ and $u_2\notin J_2$
forces the chord $e'$ into $f$ itself. Six deps added, all already reachable;
`validate-plan` is clean.

**`thm-dirichlet-test-for-improper-integrals` — both lanes,
`dependency_citation`.** Step 1.2 applied [L3] integration by parts, whose
hypothesis is $F'=f$, without ever establishing it. Clause 2 assumes $f$
continuous, so the first fundamental theorem supplies it; `thm-ftc-first-part`
added as [L5] and cited at the step that consumes it.

**`ex-finite-step-integrator-weighted-jump-sum` — terra,
`dependency_citation`.** [L1] dropped the cited example's $a<c<b$. Without it the
fact is **false**: under the displayed convention $H_a\equiv1$ on $[a,b]$, so a
jump at $a$ contributes $0$, not $f(a)$ — which is the very defect round 1
repaired in this item's Statement, still live in its fact restatement.

**`ex-row-echelon-form-is-not-unique-but-rref-is` — terra,
`dependency_citation`.** [L1] said "every matrix has a unique reduced row echelon
form"; the cited theorem says "every **finite** matrix **over a field**". False
as restated, and this run also builds
`determinants-of-matrices-over-a-commutative-ring`, where it would be read.

**`lem-colour-focussing-for-arithmetic-progressions` — terra, `logic`.** Step 2.1
applied the induction hypothesis to "the first selected block", of length $2n$,
and step 3.1 then needed the focus $f$ to lie in that block — which the $2n$
length buys only if the hypothesis is applied to the **first half**. Step 1.1
already performs exactly that manoeuvre explicitly. Now stated, with
$a_i,d_i\le n$ and $f\le2n$ derived, and the disjunction of DeepSeek's finding
spelled out in the same step.

**`lem-factor-elements-act-on-reduced-syllable-words` — deepseek, `logic`.**
Steps 2.1 and 3.1 *named* the three seam cases and asserted the outcome. That
case check **is** the entire mathematical content of the lemma, and it carries
the free-product normal form. All three cases are now written out for both the
inverse law and the composition law; case (c) is where "reduced" is load-bearing,
and it now says so.

### The shared planar weakness, named once

Two of the four planar rejections have one root cause:
**`lem-plane-face-handshake-by-girth` exports only the inequality $g|F|\le2|E|$
while proving the identity $\sum_f\ell(f)=2|E|$ internally, and states itself for
connected graphs while consumers restate it without that word.** Every consumer
needing equality then improvises. The right fix is at the root — record the
identity in that lemma's Statement — but **no rejection licenses editing it**, so
R1 correctly withheld the root fix and I repaired the consumers instead. That
root edit belongs to the next unfrozen moment, and it is worth doing: the
identity is proved, unexported, and reached for by more than one consumer.

The remaining two planar items are not part of that pattern:
`prop-maximal-plane-triangulation-characterisation` is a genuine plane-topology
gap, now closed from the page's own toolkit, and
`thm-plane-dual-exists-and-double-dual-recovers-primal` is nonfatal.

### Statements re-examined under the twice-touched rule

All eight repaired Statements were re-read for truth before the proof was touched
again. **All eight are true**, and none needed narrowing on truth grounds. One
was narrowed on *provability* grounds: `cor-planar-simple-graph-edge-bound`'s
equality clause now says "connected plane triangulation". A plane triangulation
of order at least three is in fact connected, but proving it needs the "a face
meeting two components has a disconnected boundary subgraph" argument, which is a
new lemma, not a step-8 repair.

### What that narrowing costs, and what I could not do about it

`prop-maximally-planar-edge-characterisation`'s [L1] now reads "with equality for
a triangulation" where its source says "connected plane triangulation" — the same
hypothesis-dropping class I confirmed fatal twice above, and **caused by my
edit**. Its *use* is fully licensed: the step applies it to a graph the same step
has just called two-connected. But the restatement is inflated, the item cleared
both lanes this round, and **R1 gives me no licence to touch it.** One word,
blocked. Flagging it for the owner at step 10 rather than making an unlicensed
edit. The alternative — leaving `cor-planar-simple-graph-edge-bound` claiming
equality for every triangulation — would have left a Statement asserting more
than its proof gives, which is worse.

### The contract and receipt closure, and a mechanism finding

`proof-contract --strict` was failing on **9 errors before I made any round-2
edit** — I verified this by stashing my changes and re-running at HEAD. They are
the residue of round 1 and of the step-6 repairs before it: `ex-cavalieri-shear`'s
contract still named a step 3.1 that round 1 had merged away, and six consumers
quoted Statements that had since changed. `risk-report --require-reviewed` was
likewise already failing, on a `risk_review` for `ex-cavalieri-shear` that round 1
dropped.

**The mechanism finding: step 8's gate table runs `step8-guard`, `impact-audit`
and `level-coverage` — and no `proof-contract`, `finite-smoke` or `risk-report`.**
So a step-8 fatal repair can silently invalidate its own contract, and did.
`QUALITY-CONTROLS.md` requires those three after step 5 and after step-6 repairs;
step 8 was never added. That is a real gap and it should be closed in
`gates.mjs`, not by remembering to run them by hand.

All of it is now closed. Contracts for the eight repaired items were rewritten to
match disk, the nine pre-existing errors were fixed, the missing `risk_review` was
written from my own round-2 reading, and the batch files — not just the merged
file — carry the changes, so a re-merge cannot clobber them. The patch is
committed as `research/frontier-10-dispatch/step8b-contract-refresh.mjs` so the
work is reproducible rather than hand-edited. `proof-contract --strict`: 0 errors.
`risk-report --require-reviewed`: 0 errors. `finite-smoke`: 0 errors.

Three `audit-receipt-*` errors were also closed: my dep additions to
`cor-planar-simple-graph-edge-bound`, `prop-maximal-plane-triangulation-characterisation`
and `thm-dirichlet-test-for-improper-integrals` moved the planned-versus-authored
drift set from 72 rows to 74. All three carry reasoned `plan_reconciliation` rows
naming the exact steps that consume the new edges, the 71 prior reasons were
carried forward unchanged, and `manifest_sha256` is rebound. `item_scope` (584)
and `proof_scope` (475) are unchanged.

### Gate state at the end of round 2

- `step8-guard.mjs` — **OK. 8 changed, 8/8 licensed.**
- `impact-audit.mjs` — **OK.**
- `validate-plan.mjs` — **OK**; no `undeclared-prereq`, `b-leaf` or forward
  reference from the nine added dependency edges.
- `precheck` — **8/8 clean**, canonical stratification adopted where it
  renumbered steps.
- `level-coverage.mjs --verify-current-context` — **9 errors, all expected**:
  8 × `judge-coverage-missing` (the 8 repaired items) and 1 ×
  `spine-receipt-invalid`. Both clear after the rejudge; the spine receipt must
  be refreshed **after** it, by a reader independent of the repairer.

### The round-2 rejudge set — 8 items

```
prop-maximal-plane-triangulation-characterisation
cor-planar-simple-graph-edge-bound
cor-triangle-free-planar-edge-bound
thm-dirichlet-test-for-improper-integrals
ex-finite-step-integrator-weighted-jump-sum
ex-row-echelon-form-is-not-unique-but-rref-is
lem-colour-focussing-for-arithmetic-progressions
lem-factor-elements-act-on-reduced-syllable-words
```

The four items whose rejections closed nonfatal changed by not a single byte and
need no rejudge — that is R1's exit, and taking it is what ends the loop.

### Blockers recorded, not prompted

1. **`prop-maximally-planar-edge-characterisation` [L1]** needs "connected"
   added. Unlicensed at step 8. Owner call at step 10.
2. **`lem-plane-face-handshake-by-girth`** should export the handshake identity
   its own proof establishes. Unlicensed at step 8; root fix for the next
   unfrozen moment.
3. **`gates.mjs` step 8 should run `proof-contract`, `finite-smoke` and
   `risk-report`.** A mechanism change, so it is the orchestrator's to make, with
   `ARCHITECTURE.md` updated in the same commit.

## Stage 3, round 3 — close or park, the terminal round — **COMPLETE**

Five items entered this round. **Three closed with no mutation, two were repaired
once more, and nothing was parked.** Baseline `pre-step8c` (touch snapshot 9,
taken 2026-08-11T04:03:41Z, after the round-3 sweep and before any edit here).
Seven adjudication rows appended, ledger now 460; every row carries the full
`item_sha256` of the pre-edit text, each verified equal to that item's
`pre-step8c` snapshot prefix.

| item | rejecting lane(s) | outcome |
|---|---|---|
| `ex-row-echelon-form-is-not-unique-but-rref-is` | both | **repaired** — `confirmed_fatal`, `dependency_citation` |
| `prop-maximal-plane-triangulation-characterisation` | both | **repaired** — `confirmed_fatal`, `logic` |
| `cor-planar-simple-graph-edge-bound` | Terra | **closed** — `confirmed_nonfatal` |
| `thm-dirichlet-test-for-improper-integrals` | Terra | **closed** — `confirmed_nonfatal` |
| `lem-colour-focussing-for-arithmetic-progressions` | DeepSeek | **closed** — `confirmed_nonfatal` |

### The three closures, and why each is honest rather than tired

I read all three verdict histories end to end before closing anything. The
pattern that decided all three is the same one R1's rationale predicts: each
lane's *substantive* finding was fixed in round 1 or 2, and round 3's finding is
a different, smaller thing found on a fresh stochastic pass over the same text.

**`thm-dirichlet-test-for-improper-integrals`** — Terra's round-1 finding was
two-part: `[L3]` misstates integration by parts, *and* the proof never
establishes the integrability of $g'$. Round 2 fixed the substance — `[L5]`
(FTC, first part) was added to supply $F'=f$, and $g'$'s local integrability
became an explicit Statement hypothesis with a written note that it does not
follow from convergence of $\int|g'|$. Round 3 Terra repeats only the `[L3]`
wording half. **DeepSeek now passes and calls the facts block faithful.** I read
`thm-integration-by-parts` on disk: its hypotheses are that $u,v$ are
differentiable on $[a,b]$ with $u',v'$ integrable. Step 1.2 verifies *every one
of them at the point of use* — it names $g$ differentiable, names $g'$ integrable
on $[u,v]$, and derives $F'=f$ from `[L5]`. No inference in the proof is
unlicensed. What is left is a fact-block shortening that omits hypotheses the
step itself supplies, which is a step-6 polish and is exactly what R1 forbids me
to spend a judge pair on.

**`cor-planar-simple-graph-edge-bound`** — rounds 1 and 2 were both lanes on the
real defect: step 3.1 read `lem-plane-face-handshake-by-girth` as an equality
when it exports only an inequality. **Round 2's repair worked.** DeepSeek now
passes with "correctly applies Euler's formula, face-handshake lemma, double
counting … equality case is correct. All citations accurate." Terra's round-3
finding is new and elsewhere: step 1.1's tree branch uses $m=n-1$ without
citation. The fact is true, standard, and *published in this library* as
`cor-tree-edge-count`; the arithmetic it feeds ($n-1\le3n-6$ for $n\ge3$) is one
line. A competent reader closes that in well under thirty seconds, so it is
nonfatal by the owner's rule. It is a real polish and it is recorded below.

**`lem-colour-focussing-for-arithmetic-progressions`** — rounds 1 and 2 found
four genuine defects (the $m=2$ degeneracy with no block difference; the focus
not shown to lie in the first block; the colour-distinctness case). All were
repaired, and **Terra now passes**, having verified the induction construction,
the block-vector count, the focus alignment and the final colour cases.
DeepSeek's sole remaining objection is that "among any $k+1$ points two share a
colour" cites no pigeonhole theorem. That is the archetypal thirty-second gap.
The library does prove it, as `lem-pigeonhole` — which makes this a missing
citation of an available result, not a missing argument. Nonfatal, recorded
below.

All three closed with **no content, page, frontmatter, contract, impact or judge
mutation**, and none is rejudged: their text is byte-identical to what the
current verdicts were cast against.

### `ex-row-echelon-form-is-not-unique-but-rref-is` — repaired, both lanes agreed

This one is not a nitpick and I did not treat it as one. The two lanes named two
halves of a single defect:

- Terra: step 1.1 uses that the displayed replacements are elementary row
  operations, hence that $R$ and $S$ are row equivalent to $A$ — and **neither
  cited fact establishes row operations or row equivalence at all.** The item's
  `deps` contained no such definition.
- DeepSeek: `[L2]` "does not restate the row echelon definition but says it has
  the stated conditions", so step 1.1's claim that $R$ and $S$ are echelon forms
  is not justified by the fact it cites.

DeepSeek is describing a direct violation of the house citation rule — `[L2]`
read *"Echelon form and reduced echelon form have the stated pivot conditions"*,
which is precisely the synthetic summary of what a definition is *for* that
`CLAUDE.md` forbids in a `[F#]`/`[A#]`/`[L#]` fact. And the missing
row-equivalence dependency is load-bearing in the **Statement**, not merely the
proof: the Example asserts that $A$ *has* those two echelon forms.

Repair: `[L2]` now reproduces the three echelon conditions and the reduced
condition verbatim from `def-row-echelon-reduced-row-echelon-and-pivots`; a new
`[L3]` reproduces the elementary-operation list and the definition of row
equivalence from `def-elementary-row-operations-and-row-equivalence`, which is
added to `deps`. Steps 1.1 and 2.1 now name which kind of elementary operation
each replacement is, assert row equivalence from `[L3]`, and check the echelon
and reduced conditions against `[L2]` entry by entry. The $\mathbb Q$ versus
$\mathbb F_2$ observation from round 2 is untouched.

The new edge is safe and I verified it on disk rather than assuming it:
`def-elementary-row-operations-and-row-equivalence` is **item 0** of the A page
`gaussian-elimination-and-row-reduction`, the very pair this example companions,
so no page prerequisite moved and it is not a forward reference. Its
`provenance.statement` is `literature-derived`.

### `prop-maximal-plane-triangulation-characterisation` — repaired, both lanes agreed

Both lanes named the *same* inference, in the same step, in almost the same
words: step 5.1 concludes that $e'$ meets the region of $C$ containing $f$ from
the fact that their $C$-parities agree — which needs **the two regions of $C$ to
have different parities**. `[L3]` says only that parity is constant on each
region; `[L1]` says only that there are two. Nothing supplied the distinctness.
That is a genuine load-bearing gap in the contradiction, not a citation nicety,
and it is fatal.

**This is a second instance of the exact pattern I named at round 2 for
`lem-plane-face-handshake-by-girth`: a result that proves more than it
exports.** `thm-polygonal-jordan-curve`'s own step 1.1 proves that the even and
odd crossing classes are each nonempty and open, and its step 3.1 proves that
*they are precisely the two regions* — the unbounded one even, the bounded one
odd. Its **Statement** exports only the region count and the frontier equality.
So the fact the consumer needs is proved one page away and is unavailable to
cite. Under R1 I cannot edit that theorem: it carries no rejection.

I considered parking, and rejected it, for a reason I want on the record. Parking
this item is not parking one item. Its transitive consumer set is **12 further
draft items**, including `thm-five-colour-theorem`,
`thm-kuratowski-wagner-planarity-characterisation`,
`thm-six-colour-theorem-for-planar-graphs`, `cor-planar-simple-graph-edge-bound`
and `prop-maximally-planar-edge-characterisation` — that is the headline content
of `plane-graphs-euler-and-the-five-colour-theorem`. Parking costs 14 items with
certainty; repairing costs 14 items only if the repair fails. Parking now is
strictly dominated, so the only question was whether an honest repair exists
**without** the root fix.

It does, and it needs no new fact. The missing statement is derivable from four
facts the item **already cites**, in one step:

> Let $p$ be a nonvertex point in the relative interior of a segment of the
> polygon $P$. By `[L6]` a small disc $D$ about $p$ meets $P$ only in that
> segment, so $D\setminus P$ is two open half-discs, each connected and disjoint
> from $P$ and hence inside a single region (`[L4]`). By `[L1]` there are exactly
> two regions and each has frontier $P\ni p$, so each meets $D$; hence the two
> half-discs lie in *different* regions. Only finitely many directions fail
> general position for $P$ (`[L3]`) and only two run along the segment, so pick
> $d$ avoiding both finite sets, and set $q=p-\varepsilon d$, $q'=p+\varepsilon
> d$ inside $D$. Then $q,q'$ lie in the two different half-discs and $[q,q']$
> meets $P$ only at $p$. The ray from $q$ in direction $d$ is $[q,q']$ followed
> by the ray from $q'$ in direction $d$, so its crossing count exceeds that one
> by exactly the single transverse crossing at $p$. By `[L3]` those counts are
> the parities of $q$ and $q'$, which therefore differ; and parity is constant
> on each region.

That is the new **step 1.3**. It cites `[L1]`, `[L3]`, `[L4]`, `[L6]` and no
proof step, so the canonical stratification puts it in phase 1; `precheck`
confirms. Step 5.1 now cites `step 1.3` and states the inference explicitly
instead of assuming it. **No dependency edge was added** — every fact it uses was
already declared and already cited elsewhere in this proof.

I am reporting the root fix regardless, because the repair above is the
consumer's local proof of something the library ought to state once.

### The question the dispatch asked, answered

The dispatch asked whether the planar cluster can be closed without the
`lem-plane-face-handshake-by-girth` root fix. **Yes, and that lemma is no longer
the live defect.** Round 2's repair to `cor-planar-simple-graph-edge-bound` —
deriving the handshake identity inline from `lem-plane-edge-face-incidence` and
`thm-double-counting` — worked, and DeepSeek's round-3 verdict validates the
equality case by name. Neither round-3 planar rejection mentions the handshake
lemma. The root fix remains worth making, but it is now a tidiness item, not a
blocker.

What replaced it is the *same kind* of defect one level up:
`thm-polygonal-jordan-curve` exporting less than it proves. Two independent
instances of one pattern in one page is a finding about how these pages were
scaffolded, not about either lemma.

### Blockers recorded, not prompted — carried forward and extended

1. **`prop-maximally-planar-edge-characterisation` [L1]** needs "connected"
   added. Unlicensed at step 8 (the item passed both lanes). Owner call at step 10.
2. **`lem-plane-face-handshake-by-girth`** should export the handshake identity
   $\sum_f\ell(f)=2|E|$ its own step 1.1 establishes, and should not be restated
   by consumers without the word "connected". Now demoted from root cause to
   tidiness — no round-3 rejection depends on it.
3. **`thm-polygonal-jordan-curve` should export the parity characterisation its
   own proof gives** — that the two complementary regions are exactly the even
   and the odd crossing-parity classes, the unbounded one even and the bounded
   one odd. Its steps 1.1 and 3.1 prove this; the Statement stops at the region
   count. Adding one clause there lets `prop-maximal-plane-triangulation-
   characterisation` delete its new step 1.3 and cite instead, and it is the
   honest home for a fact any future planar proof will want. **Unlicensed at
   step 8** — that theorem carries no rejection. Next unfrozen moment.
4. **`cor-planar-simple-graph-edge-bound` step 1.1 should cite
   `cor-tree-edge-count`** for $m=n-1$. Nonfatal, closed; step-6 polish.
5. **`lem-colour-focussing-for-arithmetic-progressions` step 1.2 should cite
   `lem-pigeonhole`.** Nonfatal, closed; step-6 polish.
6. **`thm-dirichlet-test-for-improper-integrals` `[L3]`** should restate
   `thm-integration-by-parts` with both differentiability and both integrability
   hypotheses. Nonfatal, closed; step-6 polish. Step 1.2 already verifies all of
   them at the point of use.
7. **`gates.mjs` step 8 now runs the contract trio** — closed by the orchestrator
   at `bba68bac`, and it earned its place immediately: this round's repairs
   changed one fact block, one dependency edge and one proof step, and
   `proof-contract --strict` re-validated all 475 contracts against them.

### Round-3 outcome — both repairs cleared both lanes

The two repaired items were rejudged on the `deepseek+terra` lineup against their
new frozen pair contexts. **Both pass on both lanes**, and each lane's pass names
the thing it had rejected:

- `ex-row-echelon-form-is-not-unique-but-rref-is` — Terra: "Verified the row
  operations, echelon conditions, distinctness over Q, and reduction of both
  forms to I2; all cited facts faithfully support the argument." DeepSeek: "all
  transformations verified as elementary row operations per [L3] and the forms
  checked against [L2]. No logical gaps or mis-citations."
- `prop-maximal-plane-triangulation-characterisation` — Terra: "crossing parity
  rules out facial cycles of length at least four in a maximal plane graph."
  DeepSeek: "**The parity argument in step 5.1 is logically sound.** No defect."

DeepSeek's verdict on the second needed its documented single 80k retry after a
`finish_reason: length` at 40k — 718 s on the first attempt, on a proof that grew
by one step. That is the ledger working as designed: an empty length-truncated
response was requeued, not recorded as a mathematical verdict.

### Gate state at the end of round 3 — STEP 8 CLEAR

```
step8-guard        OK — 3480 items at baseline, 2 changed, 2/2 licensed
proof-contract     0 errors, 0 warnings, 475/475 contracts
finite-smoke       0 errors
risk-report        --require-reviewed clean
impact-audit       clean
level-coverage     clean (421 WARNs, all adjudicated-nonfatal notices)
```

Receipts closed on the way, in this order: the merged contract was rebuilt from
the batch files (`research/frontier-10-dispatch/step8c-contract-refresh.mjs`, so
a later re-merge cannot clobber it); `research/frontier-10-audit-coverage.json`
gained the one new drift row and rebound `manifest_sha256`
(`bb3f45af…` → `82d5a8bb…`), with `item_scope` 584 and `proof_scope` 475
unchanged; and `research/frontier-10-spine-audit.json` was rebound
(`f68443f6…` → `12b82640…`). **The spine rebind carried all 60 attestations
forward and is not a re-reading**: the 60-item scope set is identical and not one
`content_sha256` moved. What changed was six `transitive_consumers` counts,
each by exactly one — `lem-nat-discrete`, `lem-nat-successor-neq-self`,
`lem-nat-order-is-membership`, `thm-well-ordering-principle`, `lem-pigeonhole`
and `lem-nat-embeds-int` — the downstream trace of the single dependency edge
this round added. Touch snapshot `after-step8c` recorded.

**Nothing was parked, and step 8 is closed.** No item entered a fourth repair
round.

## Stage 4 — step 9, scope-denial sweep — **COMPLETE WITH ONE WRAPPER BLOCKER**

Output: `research/frontier-10-step9-scope-denial.md`.

This was a corpus read, not a grep disposition. The structural entry point found
218 scope-denial warnings in 195 files before repair. I read every candidate in
context, widened the pass to 231 further files with semantic denial language,
then directly swept every subject this run added, every `not-proved-here` page,
both ends of the order-203 to order-46 finite-sum re-home, the incidence page,
and the published group-actions pair.

### Findings and mutations

- **10 draft files repaired.** The stale clusters were absolute continuity,
  normed-space prerequisites for functional analysis, the fundamental-group and
  simple-connectivity core, the polygonal/general Jordan split, and rational
  versus real Hölder exponents. All repaired files were reread in full after the
  final edit.
- **33 published files queued, not edited.** Six are directly falsified by this
  run: absolute continuity and its deferred catalogue, the earlier integral
  scope page, the sine-integral promise, the rings-page count after the re-home,
  and the summing-directions affine-subspace denial. The other 27 are inherited
  stale denials exposed by the same read: real powers, extended reals, topology
  vocabulary, Baire/category prerequisites, GCD, and aleph/cofinality
  vocabulary. The step-9 report gives exact old and exact replacement text for
  every one.
- **No stale determinant or category-theory denial.** The old determinant
  remarks are page-local. No old prose says category theory is globally absent.
- **No stale order claim after the finite-sum re-home.** The only false text is
  the rings page's 26/11 count, now 28/13. The incidence page contains no late-
  arrival assertion.
- **No additional early group-actions edit.** Its six-item published prose is
  truthful, and the 31 A-item/16-example enrichment remains staged for the
  publishing commit.

### Verification and blocker

`git diff --check`, `depcheck` and `fwdcheck` pass. Direct
`node tools/prosecheck.mjs` checks 3,690 files with **0 errors** and 579 heuristic
warnings; `--warnings` exits 0 and reports the post-repair 215 scope candidates
dispositioned in the report.

The official wrapper `node tools/gates.mjs --step 9 --run frontier-10` cannot
spawn its nested `/usr/bin/node` under this execution runtime and reports
`spawnSync /usr/bin/node EPERM` for both rows. I did not seek permission or
escalation. Its required and advisory constituent commands were run directly
and both pass. This is an infrastructure receipt blocker, not a prosecheck
failure, and must be carried plainly into step 10.

No published file was mutated. No permission prompt was raised.

## Stage 3, round 4 — step 8d, the two remaining rejections — **COMPLETE**

Dispatch: `research/frontier-10-alpha-step8d.task.md`. Four rejections on two
items. **Three confirmed fatal and repaired; one false positive closed with no
mutation.**

### Baseline — `pre-step8d` could not be used

`pre-step8d` was taken at `06:27:40Z`; commit `044c15b4` ("owner item 3 — all 33
published scope-denial edits applied") landed at `16:29:11 +1000` = `06:29:11Z`,
**inside that window**. So the snapshot straddles an owner-directed step-9/10
application, and `step8-guard --baseline pre-step8d` reports
`ERROR nonfatal-edit: rem-real-exponents-deferred` — an owner-approved
scope-denial edit (title plus the closing paragraph), not a step-8 polish. That
is exactly the case the guard's own docstring says must sit outside the window.

R1 requires a dedicated baseline taken *immediately before* adjudication, so I
took **`pre-step8e`** (`06:35:48Z`), adjudicated against it, and snapped
`after-step8e` afterwards. `step8-guard --baseline pre-step8e`:
`2 changed, 0 created, 0 deleted; 2/2 licensed by a confirmed_fatal`.

### `cor-planar-simple-graph-edge-bound`

`item_sha256` at adjudication `650a414d…`, after repair `92e32f39…`.

**Terra — `confirmed_fatal` (`logic`).** Step 1.2 applied [L4] double counting to
a face-indexed relation without establishing that the face set is finite.
Finiteness is a hypothesis of the cited theorem, it is nowhere given, and
`$\sum_{f\in F}$` needs a finite index set besides. It is not a 30-second gap:
the fact is its own inductive lemma on this page, resting on the polygonal
Jordan curve theorem.

**Repair — at the root, not at the symptom.** The cited lemma
`lem-plane-face-handshake-by-girth` **states the equality**
`∑_{f∈F} ℓ(f) = 2|E|` for a connected plane graph and derives `g|F|≤2|E|` from
it. This item's [L2] reported only the derived inequality. That under-citation is
what produced step 1.2 in the first place: three earlier rejections (Terra ×2,
DeepSeek ×1) all said "[L2] is only an inequality, so step 3.1's equality is
unestablished", and the previous repair answered them by re-deriving the equality
by hand — importing the finiteness hypothesis Terra has now caught.

So rather than bolt the finiteness lemma on beside the hand derivation, I
restated [L2] faithfully (equality first, inequality as its consequence, near
verbatim from the lemma) and reduced step 1.2 to citing it. The double count is
gone, and with it the unmet hypothesis; face-finiteness now lives where it is
proved, inside the lemma, which carries its own `[L3]` finiteness fact after
Beta-6's repair. `thm-double-counting` left `deps` with its last use.

`lem-plane-edge-face-incidence` went with it. I first kept it as an uncited
supporting fact, and `proof-contract.mjs --strict` was right to reject that:
a fact no numbered step cites is exactly the "unused edge" the Beta
dependency-discipline rule forbids, and the contract has nowhere to map it. So
the facts are now `[L1]` Euler, `[L2]` handshake, `[L3]` triangulation-connected,
with step 3.1 retagged. Steps 1.1 and 2.1 untouched. The batch-6 proof contract
was rewritten to match — citations, both changed step claims, both input maps —
re-merged, and `proof-contract.mjs --strict` and `finite-smoke.mjs` both come
back at 0 errors over all 476 items.

**DeepSeek — `false_positive`, no mutation.** It says step 2.1's redrawing
"claims placing components into disjoint discs makes each meet the unbounded
face, which is false". The claim is true. After the components are separated into
pairwise disjoint discs, the complement of the union of those discs is connected
and unbounded, hence inside the unbounded face; and for each component the
point of its drawing with largest first coordinate has an open ray to the right
meeting no drawing at all, so it lies on the frontier of that face. Every
component therefore does meet the unbounded face. DeepSeek passed this same
construction in an earlier round (`64482e17…`, "reduction of disconnected case
via redrawing is valid") and its nested-component objection two rounds before
that is precisely what the redrawing answers.

There is a residual gap it did not name: the joining arcs need a **vertex** on
that frontier, not merely a point. It closes immediately — if the extreme point
is interior to an edge, `lem-plane-edge-face-incidence` puts the whole edge, and
so its endpoints, in the frontier. Well inside the 30-second rule, therefore
nonfatal, and under R1 not a licence to edit. Recorded as `false_positive`
because the named defect — falsity of the construction — is not present.

### `rem-riemann-stieltjes-conventions-and-scope`

`item_sha256` at adjudication `baed18a9…`, after repair `2b6f881f…`.

**DeepSeek — `confirmed_fatal` (`dependency_citation`).** The forward reference
was to `thm-holder-finite-real-exponents`, which is **Hölder's inequality for
finite sums with conjugate real exponents** — an inequality about sums, nothing
to do with the Hölder-*continuity* exponent in Young's theorem. A name collision
produced a false claim about what the library supplies.

The *reason* the remark gives survives scrutiny and I checked it against
`plan-spec.json` rather than assuming: this page is order **163**, real powers
arrive on `the-logarithm-and-general-powers` at order **177**, and
`thm-young-riemann-stieltjes-existence-rational` really does rest on
`def-rational-power` and its laws. Only the pointer was wrong. Repaired to
`[[def-real-power]]`, the item that actually introduces arbitrary real
exponents; `forward_refs` updated to match, which is the same target
`rem-real-exponents-deferred` already forward-references. `fwdcheck` marks the
item `direct` forward-dependent, as before.

**Terra — `confirmed_fatal` (`logic`).** The Darboux summary asserted an
equivalence while dropping the cited theorem's `a<b`. On `[a,a]` the two sides
genuinely part company: the integral is `0` by convention so every bounded
integrand is integrable, while no partition of a singleton exists, so the
Darboux condition fails. A conventions-and-scope remark that already rules on
singletons in its first sentence cannot omit this. Repaired by stating the
hypothesis and, in one added sentence, why it is not cosmetic — mirroring the
paragraph `thm-riemann-stieltjes-darboux-criterion` itself carries.

I did **not** add the "bounded integrand" hypothesis Terra raised in an earlier
round (`af9b09b2…`): that rejection is closed `confirmed_nonfatal` on its ledger
row, and R1 gives no licence to reopen it while repairing a different defect in
the same sentence.

### Gates

`precheck` PASS on both (adopted its canonical stratification for the corollary).
`step8-guard --baseline pre-step8e` OK. `depcheck` OK, `extcheck` OK. Neither
item carried a `verification.judge` stamp, so there was none to delete.
`depcheck`'s single mention of the remark is the pre-existing advisory
`cited-not-in-deps` for a forward reference, which the old wrong pointer produced
identically — verified by stashing the edit and re-running.

### Second blocker — `lem-plane-triangulation-is-connected` has no `risk_review`

`risk-report.mjs --require-reviewed` errors `risk-review-missing` on it. It is
**CRITICAL 8** (7 declared dependencies; 6 cited facts; 6 numbered proof steps;
boundary-sensitive language) — the highest tier on this run — and a critical item
routes to an additional Alpha proof-refuter *and* requires the Alpha
`risk_review` record. It is the lemma built today for owner item 4, so it never
went through the step-6 refuter wave that produced everyone else's dispositions.
Not caused by these repairs, and not in this dispatch's scope.

I did read its proof closely here, because step 3.1 of the corollary now rests on
it, and I found nothing false: the contradiction runs from a component `C` and
the rest `H`, gets a vertex `y` of `H` on the frontier of a face `f` of `G`, gets
a vertex of `C` on the same frontier, and closes because a triangle boundary is
connected while a path between two components is impossible. That is my reading,
not a refuter's, so I have **not** written the `risk_review` — the record would
claim evidence the control requires and I do not have. Dispatch a refuter on it
and the review can be written immediately.

### Third blocker — `fwdcheck` now FAILS at HEAD

Not from these repairs. `node tools/fwdcheck.mjs` exits **1** with **16
`forward-undeclared` errors**, none of them on either item I touched. All 16 are
committed at HEAD, in files rewritten by commit `044c15b4` (owner item 3), and
`fwdcheck` passed when I verified at step 9 before that commit. The scope-denial
edits introduced wikilinks that point forward without a `forward_refs`
declaration, so the reader-facing sky/↗ marking those references require is not
being applied. Affected ids include `ex-square-root-is-half-holder`,
`ex-x-to-the-beta-separates-the-holder-classes`,
`thm-holder-exponent-above-one-forces-constancy`, `lem-power-over-geometric-null`
(all → `def-real-power` / `thm-real-power-continuity-and-derivatives`),
`rem-absolutely-continuous-function`, `rem-monotone-convergence-theorem`,
`fs-continuous-bijection-is-a-homeomorphism`,
`thm-countable-subsets-of-omega-one-are-bounded`. The fix is frontmatter-only —
declare each link in `forward_refs` — but it is outside this dispatch and it
touches published items, so I am recording it rather than doing it.

The step-9 `gates.mjs` wrapper blocker is unchanged: the nested `/usr/bin/node`
spawn still fails `EPERM` under this runtime, so I ran the constituent gates
directly. No permission prompt was raised, and no published file was mutated.
