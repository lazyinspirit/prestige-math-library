# wave 0 · linear-algebra · Audit-Beta findings (A1 + A2)

Batch: `research/audit/wave0-linear-algebra.pages.json` — both pairs owned by this
Beta.

| pair | kind | items in scope |
|---|---|---|
| `vector-spaces-and-subspaces` | A | 17 |
| `vector-spaces-and-subspaces-examples` | B | 8 |

Artifacts written: `wave0-linear-algebra.provenance.jsonl` (25 rows),
`wave0-linear-algebra.proof-contracts.json` (18 proof-bearing items, passes
`proof-contract.mjs --strict` with 0 errors / 0 warnings), and this file.
No file under `items/` or `library/` was touched.

---

## 0. Coverage statement

Every one of the 25 in-scope items was read in full from disk: frontmatter,
Statement / Statement refuted / Definition / Example, Facts & Assumptions, every
numbered proof step, and every Remark. Both page composition files were read with
proof-step suspicion.

- **Every numbered proof step was read** — 159 steps across the 18 proof-bearing
  items — and each is mapped, exactly once, to a `derivations` entry in the
  contract file with its stated inputs.
- **Every dependency citation was read against the target on disk** — all 155
  `[F#]/[A#]/[L#]`-to-item edges, each carrying an exact quote from the target's
  own Statement / Statement refuted / Definition / Example section, mechanically
  verified by `proof-contract.mjs`. Cross-category targets in
  `abstract-algebra`, `foundations`, `number-theory` and `real-analysis`
  (`def-field`, `def-group`, `def-subgroup`, `def-subfield`,
  `def-monoid-finite-product`, `def-natural-numbers`, `lem-nat-order-is-membership`,
  `thm-induction-principle`, `thm-nat-linear-order`, `def-nat-order`,
  `def-ordered-field`, `def-field-homomorphism`, `lem-of-q-embeds`,
  `lem-of-zero-mult`, `lem-of-square-positive`, `lem-group-cancellation`,
  `lem-of-inverse-unique`, `def-real-numbers`, `thm-reals-field`,
  `thm-reals-ordered-field`, `thm-rat-field`) were opened and checked against
  their on-disk mathematical text; their missing provenance tags are their own
  waves' business and are not recorded as defects here.
- **No exceptions.** No proof step and no dependency citation went unread.

**No fatal defect was found in either pair.** No unambiguous falsehood, no
unlicensed inference, no missing hypothesis, no invalid witness, and no
dependency cited for more than it states. Everything below is nonfatal and is
recorded rather than chased, except the two Alpha escalations in §2.

---

## 1. A1 — provenance determination

Ledger: `wave0-linear-algebra.provenance.jsonl`, one row per item, all 25 present,
no extras. Evidence-class census:

| evidence | `provenance.statement` | count |
|---|---|---|
| `exact-source` | `literature-derived` | 1 |
| `semantic-source` | `ai-altered` | 22 |
| `established-knowledge` | `ai-altered` (pending Alpha) | 2 |
| `trivial` / `none` | `ai-generated` | 0 |

Proof-component census: `ai-generated` 19, `ai-altered` 4
(`lem-vector-space-elementary-consequences`, `def-function-space`,
`def-linear-subspace`, `def-linear-combination-and-span` — each visibly tracks a
located sourced argument), `not-applicable` 2 (`def-vector-space` and
`def-matrix-space`, which supply no verification of their own;
`def-matrix-space` explicitly defers everything to `def-function-space`).

**No item was tagged `ai-generated`.** Applying the owner rule of 2026-08-02:
every statement in this batch is either a located sourced statement or a
recoverable restatement, specialisation, merge or reindexing of one. Nothing here
is an invented bridge claim or a bespoke construction with no counterpart in
established mathematics.

### Sources actually located (all verified HTTP 200 by WebFetch this session)

- `https://linear.axler.net/` and `https://linear.axler.net/LADR4e.pdf` — Axler,
  *Linear Algebra Done Right*, 4th ed. (CC BY-NC, free PDF). The PDF text was
  extracted and read; the numbered results relied on are 1.20, 1.23–1.25,
  1.30–1.34, 1.36, 1.40–1.46, 2.2, 2.4, 2.6, and Exercises 1B.2, 1C.8, 1C.11,
  1C.12.
- `https://en.wikipedia.org/wiki/Vector_space`,
  `.../Linear_subspace`, `.../Linear_span`, `.../Function_space`,
  `.../Examples_of_vector_spaces`, `.../Matrix_(mathematics)`,
  `.../Restriction_of_scalars`, `.../Sequence_space`, `.../Closure_operator`,
  `.../Subgroup`, `.../Direct_sum_of_modules`.
- `https://encyclopediaofmath.org/wiki/Direct_sum` — supplies condition (c),
  the (D2) form of the internal direct sum, which Wikipedia's article omits.
- `https://math.libretexts.org/.../2.06%3A_Subspaces` (Margalit–Rabinoff,
  *Interactive Linear Algebra*) — the first-quadrant counterexample, verbatim.
- `https://www.andreaminini.net/math/the-union-of-vector-subspaces` — the
  union-of-the-two-axes witness and the containment criterion.

Rejected as unusable: `proofwiki.org/wiki/Intersection_Condition_for_Direct_Sum_of_Subspaces`
(HTTP 403) and `math.ucla.edu/~andrewsack/Winter21/115AH/115AHWeek3ThursdayNotes.pdf`
(HTTP 404). No unverified URL entered the ledger.

### The one `exact-source`

`def-linear-subspace`. Its (W1)/(W2)/(W3) are Axler 1.34's three conditions
verbatim in content, its "linear subspace" naming is Axler's own noted synonym
and the Wikipedia article title, and its third Remark is Axler's own margin note
that (W1) may be replaced by nonemptiness given (W3).

### Convention deltas worth carrying forward

Recorded per item in the ledger; the recurring ones are:

1. **Indexing from 0.** Every index set here is a von Neumann natural, so `F^n`
   has coordinates `x_0 … x_{n-1}` where Axler's `F^n` and `F^∞` index from 1,
   and matrices are `a_{00}`-based. Consistent across all 25 items and both pages.
2. **Genuine empty cases.** `F^0`, `span(∅)`, `Σ_{i<0} U_i` and `⊕_{i<0} U_i` are
   real cases here; Axler 1.25 requires `S` nonempty and Axler 2.4 *stipulates*
   `span( ) = {0}` where this library derives it from the empty monoid product.
3. **ℚ is not a subset of ℝ** in this library, so `ex-r-as-a-vector-space-over-q`
   works with the image `ι[ℚ]` for restriction of scalars and proves the
   ℚ-structure separately. That is a real construction delta, not a slip.
4. **(D2), not the pairwise condition,** is the *definition* of an internal direct
   sum here (Encyclopedia of Mathematics form), where Axler and Wikipedia define
   it by unique decomposition and derive the intersection conditions. The library
   proves the equivalence in `lem-direct-sum-criterion`, so no content differs.

---

## 2. Alpha escalations (2 items)

Both are `evidence: established-knowledge`, `alpha_concurred: false`, and both
therefore currently fail `content-policy --audit` with
`audit-ledger-alpha-concurrence` until Alpha rules. Neither is a mathematical
concern; the question is purely the evidence class.

**E1 · `cex-pairwise-trivial-intersection-is-not-a-direct-sum`.** The proposition
being witnessed is squarely sourced — Axler, remark after 1.46: *"When asking
about a possible direct sum with more than two subspaces, it is not enough to
test that each pair of the subspaces intersect only at 0"*, with Example 1.44 as
its witness (three subspaces of `F³`, all pairwise intersections `{0}`, sum all of
`F³`, decompositions not unique). No source was located for **this** witness, the
three lines `span{e₀}`, `span{e₁}`, `span{e₀+e₁}` in `F²`. Beta's judgement: this
is the standard minimal separation, obtained from the sourced proposition by
taking the smallest ambient space, and it is fully checkable in the item's own two
displayed decompositions of `d`. Recorded `ai-altered` under the D2 waiver rather
than `ai-generated`. **Alpha decides:** concur (`ai-altered`, no URL) or decline
(falls back to `ai-generated`, which would also require `generation.role:
counterexample` and would make the item ineligible as a future `deps` target — it
is currently cited by nothing).

**E2 · `ex-sum-and-intersection-in-f-three`.** The construction — the two
coordinate hyperplanes `{x₂ = 0}` and `{x₀ = 0}` of `F³`, with `U + W = F³` and
`U ∩ W = span{e₁}`, so the sum is not direct — is the standard "a sum can be
everything without being direct" computation, and Axler Examples 1.37, 1.42 and
1.44 are the same genus over `F³`; but no source was located for this exact pair
of subspaces. Every assertion is verified by explicit coordinate computation in
the item. Same disposition and same question for Alpha.

If Alpha declines either, the corresponding row must be rewritten to
`statement: ai-generated`, `evidence: trivial` (both are directly checkable from
their stated dependencies), and the item needs a `generation.role` of
`counterexample` (E1) / `example` (E2).

---

## 3. A2 — citation-precision and accuracy findings

Nothing in this section is fatal. Class letters follow the brief: (a) unambiguous
falsehood, (b) citation-precision, (c) provenance retag, (d) debatable
restatement.

### 3.1 Citation-precision observations (class b) — all nonfatal

**B1 · `lem-vector-space-elementary-consequences`, Proof step 1.5.** The step
reads *"The vector `λv` has an additive inverse `-(λv)` with `λv + (-(λv)) = 0_V`,
and it is the unique vector with that property. [L2]"*. `[L2]` is the (V1) fact,
which asserts only **existence** of an additive inverse; uniqueness is not in it.
Uniqueness is nonetheless available two ways — `lem-inverse-unique` is cited in
`def-vector-space` for exactly this, and `[L3]` (cancellation) gives it in one
line — and, decisively, **the uniqueness clause is never used**: steps 4.1 and 5.1
each perform the cancellation themselves rather than appealing to it. A 30-second
gap over an unused clause.
*Proposed repair (optional, lowest priority):* delete the eight words *"and it is
the unique vector with that property"* from step 1.5. This is a proof-text edit,
so it would void `verification.judge`; given that the clause is unused, **Beta
recommends no change** and records the observation instead.

**B2 · `lem-restriction-of-scalars`, `[L2]`.** The fact states *"multiplication
distributes over addition, so that `x(y+z) = xy+xz` **and** `(y+z)x = yx+zx`"*,
attributing both forms to `def-field`. `def-field`'s axiom (D) is the left form
only; the right form is a one-step consequence of commutativity on all of `F`,
which the same axiom (M) supplies, and `def-field`'s own Remark records exactly
this. The item is transparent about it — `[L2]` is prefixed *"read as they are
read throughout this library"*, and the item's first Remark spells out that step
1.4 is where the right form is spent. Nonfatal, no repair proposed.

**B3 · `ex-r-as-a-vector-space-over-q`, `[L4]`.** The fact lists `φ(0) = 0`,
`φ(-x) = -φ(x)` and `φ(x⁻¹) = φ(x)⁻¹` under `def-field-homomorphism`. Those three
live in that item's **Remarks**, not its Definition. The fact marks them
"consequently", which is accurate, and the target's Remarks derive them. The
proof contract quotes the three defining equations from the Definition, as
required. Nonfatal, no repair proposed.

**B4 · `ex-sequence-space-and-eventually-zero-subspace`, `[L6]`.** The fact
restates the order of ℕ as *"total and reflexive"* and omits transitivity, but
steps 1.3, 1.4 and 1.5 use transitivity (`k < σ(k) ≤ n` giving `k < n`; two
witnesses `N₁, N₂ ≤ N`). Transitivity **is** in the cited target —
`thm-nat-linear-order` states *"reflexive, antisymmetric, transitive, and
total"* — so this is an understated fact, never an overstated one, which is the
harmless direction. *Proposed repair (optional, low priority, class b):* in
`[L6]`, replace "total and reflexive" with "total, reflexive and transitive". A
Facts-line edit is material for the judge, so Beta recommends deferring it unless
Alpha wants the fact tightened.

**B5 · `cex-subset-closed-under-addition-but-not-scaling`, step 2.2.** The step
concludes "it is not the case that `0 ≤ -1`" from trichotomy applied to `-1`.
Under `def-ordered-field`, `a < b` means `b - a ∈ P`, so `0 < -1` unfolds to
`-1 - 0 ∈ P`; `[L1]` records the shorthand `x > 0 ⟺ x ∈ P` but not the
subtraction form, leaving the identification `-1 - 0 = -1` implicit. A 30-second
gap. No repair proposed.

**B6 · `ex-r-as-a-vector-space-over-q`, step 1.3.** The subfield criterion in
`[L5]` asks for `a - b ∈ K`; step 1.3 establishes closure under addition and
under negatives instead. One step apart. No repair proposed.

### 3.2 Checks that came back clean, and are worth recording

- **`lem-direct-sum-criterion` is correct in every direction.** The cycle
  (a)⇒(c)⇒(b)⇒(a) closes; the mixed identity (F2) is applied at `λ = -1_F` in the
  right argument order in step 1.4; the cancellations in steps 1.4 and 2.1 are
  licensed by `lem-group-cancellation` as cited; step 2.2 correctly notes that a
  list admissible for `U^{(j)}` is admissible for `U` because `U_j` contains `0_V`.
- **`def-sum-of-linear-subspaces` (F1)/(F2)/(F3) were each re-derived.** (F3)'s
  induction splits `j = n` from `j < n` correctly and the `j = n` branch uses
  commutativity exactly where it must. The `n = 2` reduction
  `Σ_{i<2} u_i = (0_V + u_0) + u_1` is right against the recursion.
- **`def-vector-space`'s independence witness for (V5) checks out.** With
  `λv := 0_V` on any abelian group, (V2), (V3), (V4) all read `0_V = 0_V`, and
  (V5) fails as soon as `V ≠ {0_V}`.
- **The `{0_V}`-substitution device** used by `def-internal-direct-sum` for "the
  sum of the other summands" is coherent: `{0_V}` really is a linear subspace, and
  `Σ_{i≠j} U_i` really does contain each `U_i` for `i ≠ j`, by the clause of
  `lem-sum-is-span-of-union`'s Statement that is cited for it.
- **Boundary behaviour is genuinely handled, not asserted.** `n = 0` is a live
  case in `def-function-space` (`F^0`), `lem-span-is-the-set-of-linear-combinations`
  (`span(∅)`), `def-sum-of-linear-subspaces` (`Σ_{i<0} U_i = {0_V}`),
  `def-internal-direct-sum` (`⊕_{i<0} U_i` iff `V = {0_V}`) and
  `lem-sum-is-span-of-union`'s Remark, and all five agree.
- **Nonemptiness hypotheses are load-bearing and are spent where claimed.**
  `lem-linear-subspace-criterion` step 1.2 and `lem-intersection-of-linear-subspaces`
  step 1.1 are the exact places.
- **No cycle and no forward reference.** `def-internal-direct-sum` depends on
  `lem-sum-is-span-of-union`, which does not depend back; every in-batch citation
  points to an item earlier in the A page's reading order, and the B page cites
  only the A page and earlier categories. No item in either pair declares
  `forward_refs`, `external_refs`, `justified_by`, or `proved_here: false`.
- **No published-claim decay found.** Two forward-looking prose claims were
  checked against the current corpus: `def-matrix-space`'s "a later page must add
  the product to *this* object rather than introduce a second notion of matrix"
  (no competing matrix-space definition exists — `def-summability-matrix` and
  `def-jacobian-matrix-and-gradient` are different objects), and
  `def-linear-combination-and-span`'s claim that the general
  description-from-inside of a generated subgroup is "deferred to a later page"
  (no item now proves it; only `lem-cyclic-subgroup-is-the-set-of-powers`, the
  single-generator case, exists).

### 3.3 Page prose (recorded per triage, not chased)

- **A page, closing paragraph:** *"Seventeen items make up this page, seven
  definitions and ten lemmas, six of them marked as landmarks in the flowchart
  above."* This is a count plus a self-referential structural claim, the class
  SCHEMA §6 bans for A-page summaries. It is **accurate** (17 items = 7 `def-` +
  10 `lem-`; exactly 6 carry `landmark: true`), so it is a prose-contract defect
  rather than a false claim. Recorded, not chased. Note that it is also fragile:
  adding any item to the page would falsify all three numbers at once.
- **B page, opening paragraph:** *"Four examples, three counterexamples and one
  false statement are recorded here."* Same class, also accurate (4 `ex-`,
  3 `cex-`, 1 `fs-`).
- Neither page makes an unsupported reading-position claim or a survey claim
  about other pages. Every mathematical assertion in both page bodies was checked
  against the items and is accurate, including the A page's summary of
  `lem-direct-sum-criterion` ("the second half of that condition is not on its own
  equivalent to the first"), its description of the `(V5)` independence witness,
  its `def-finite-sum`-cannot-serve claim, and the B page's account of why (D2)
  fails at the third summand in `cex-pairwise-trivial-intersection-is-not-a-direct-sum`.

### 3.4 Owner-queue candidates

**None.** No deletion, id rename or reading-order change is proposed by this
batch.

---

## 4. Repairs proposed, in priority order

| # | class | item | change | Beta recommendation |
|---|---|---|---|---|
| R-1 | (c) retag | all 25 | write the `provenance` block from the ledger row; no legacy `authorship` line exists on any of the 25, so decision D5 is a no-op here | apply at A4 |
| R-2 | (c) retag | 23 items | add the ledger's source URL(s) to `sources.references` where not already present; the two `established-knowledge` items take no URL | apply at A4, after Alpha rules on E1/E2 |
| R-3 | (b) | `ex-sequence-space-and-eventually-zero-subspace` `[L6]` | "total and reflexive" → "total, reflexive and transitive" | defer unless Alpha wants it; material for the judge |
| R-4 | (b) | `lem-vector-space-elementary-consequences` step 1.5 | drop the unused "and it is the unique vector with that property" | **decline** — the clause is unused and removing it voids a judge stamp for no mathematical gain |

Every existing `sources.references` URL already on the 25 items is a Wikipedia or
`linear.axler.net` URL from the verified set above, with two exceptions not
re-verified this session because nothing in the ledger rests on them:
`https://en.wikipedia.org/wiki/Ordered_field` and
`https://en.wikipedia.org/wiki/Union_(set_theory)`. Flagged for A4 so the
orchestrator can decide whether reader-visible URLs already on disk need their own
200 check.

---

## 5. Proof contracts

`wave0-linear-algebra.proof-contracts.json`, version 1, level
`audit-wave0-linear-algebra`. Scope = the 18 proof-bearing items (the 10 A-page
lemmas plus all 8 B-page items). The 7 definitions have no numbered-step section
and are correctly out of contract scope.

- 155 `citations`, each with the exact clause quoted from the target's own
  Statement / Statement refuted / Definition / Example section and the complete
  `uses` list, mechanically cross-checked against the step text.
- 159 `derivations`, covering every numbered step exactly once, each naming every
  fact and earlier step the step cites.
- 144 boundary dispositions — all eight standard cases for each of the 18 items,
  each `checked` with a step or statement anchor, or `not_applicable` with a
  specific reason.
- `finite_smoke`: empty. Nothing in this batch is a finite/combinatorial claim
  for which one of the four implemented checks (`tree-characterisation`,
  `forest-edge-component-count`, `induced-complement-commutes`,
  `cyclic-subgroup-lagrange`) applies; every result is over an arbitrary field
  and an arbitrary vector space.
- `risk_review`: `pending` on all 18, awaiting Alpha. `risk-report.mjs` routes all
  18 (15 CRITICAL, 2 HIGH, 1 MODERATE) — unsurprising, since the scorer counts
  dependency and step volume and every item here is biconditional-heavy and
  boundary-explicit. Beta found no proof defect in any of them; the routing is
  triage, not evidence.

Gate results run by Beta (read-only, non-mutating):

```
node tools/proof-contract.mjs research/audit/wave0-linear-algebra.proof-contracts.json --strict
  -> 0 error(s), 0 warning(s), 18/18 item(s) checked
node tools/risk-report.mjs research/audit/wave0-linear-algebra.proof-contracts.json
  -> 0 error(s), 18 item(s) routed
```

---

## 6. A4 — repairs applied (2026-08-02)

Authorised by `research/audit/wave0-linear-algebra.A3.md`. The orchestrator took
the pre-A4 `touchlog` snapshot; this Beta did not run `touchlog`. No id was
renamed or removed; no page prose was touched.

### R-1 (class c, retag) — APPLIED to 23 of 25

A `provenance` block was inserted immediately after `origin: session` in each of
the 23 approved items, with exactly the `statement`/`proof` pair from that item's
ledger row. No item carried a legacy one-axis `authorship` line, so owner
decision D5 was a no-op for this batch. These are pure retags that change no
mathematical claim, so `verification.judge` and the publish stamps were left
intact, per SCHEMA's material-rewrite test.

**HELD, not written:** `cex-pairwise-trivial-intersection-is-not-a-direct-sum`
and `ex-sum-and-intersection-in-f-three` carry no `provenance` block, awaiting
Alpha's A6 concurrence on the `established-knowledge` evidence class (§2). Both
were left byte-identical.

### R-2 (class c, source URLs) — APPLIED

Added only where the ledger's supporting source was not already reader-visible;
every added URL was WebFetch-verified 200 this session.

| added URL | items |
|---|---|
| `https://linear.axler.net/LADR4e.pdf` (Axler 4e, free PDF, CC BY-NC) | `def-function-space`, `lem-linear-subspace-is-a-subgroup`, `def-linear-combination-and-span`, `def-sum-of-linear-subspaces`, `lem-sum-is-span-of-union`, `ex-f-n-and-its-coordinate-subspaces`, `ex-sequence-space-and-eventually-zero-subspace`, `cex-subset-closed-under-scaling-but-not-addition`, `fs-union-of-two-subspaces-is-a-subspace` |
| `https://encyclopediaofmath.org/wiki/Direct_sum` | `def-internal-direct-sum`, `lem-direct-sum-criterion` |
| LibreTexts *Interactive Linear Algebra* 2.6 Subspaces | `cex-subset-closed-under-addition-but-not-scaling` |
| `https://www.andreaminini.net/math/the-union-of-vector-subspaces` | `cex-subset-closed-under-scaling-but-not-addition`, `fs-union-of-two-subspaces-is-a-subspace` |

The other 12 items already carried a reader-visible URL covering their ledger
evidence; nothing was added to them, and no existing URL was altered or removed.

### URL verification — no replacement needed

The three reader-visible URLs not previously re-checked all return HTTP 200 and
still support the text that cites them, so all three were left in place:

- `https://en.wikipedia.org/wiki/Ordered_field` (on `cex-subset-closed-under-addition-but-not-scaling`) — live; the article gives both the total-order and the Artin–Schreier positive-cone definitions, and the positive-cone form is the one this library uses.
- `https://en.wikipedia.org/wiki/Union_(set_theory)` (on `fs-union-of-two-subspaces-is-a-subspace`) — live.
- `https://en.wikipedia.org/wiki/Linear_combination` (on `def-linear-combination-and-span`) — live; this one was missed by the §4 note at A2 and is recorded here for completeness.

### R-4 (class b, citation-precision) — APPLIED, **material**

`items/lem-vector-space-elementary-consequences.md`, Proof step 1.5. A3 approved
the minimal form. The lemma's Statement does not need step 1.5 to supply
uniqueness — the definite article in `-(\lambda v)` is already licensed by
`def-vector-space`, which cites `lem-inverse-unique` for exactly that — and steps
4.1 and 5.1 obtain their equalities by cancellation under `[L3]` rather than by
appeal to uniqueness. The smallest correction is therefore to delete the
unlicensed clause rather than to add a derivation.

- **old:** `1.5 The vector $\lambda v$ has an additive inverse $-(\lambda v)$ with $\lambda v + (-(\lambda v)) = 0_V$, and it is the unique vector with that property. [L2]`
- **new:** `1.5 The vector $\lambda v$ has an additive inverse $-(\lambda v)$ with $\lambda v + (-(\lambda v)) = 0_V$. [L2]`
- **class:** (b) citation-precision — the step now claims exactly what `[L2]`
  licenses. No other line of the item was edited; the fact list, every other step
  and every step tag are unchanged, so no downstream citation of this item is
  affected.
- **stamps:** the repair is material, so `verification.judge` (the stale
  `z-ai/glm-5.2` pass, on text the judge no longer sees) and the obsolete
  `verification.audited: 2026-07-28` were both deleted. `verification.precheck:
  pass` remains and was re-established below. **This Beta wrote no replacement
  stamp** — the independent A6 reading owes `verification.verified` with
  `scope: published-audit` and `delegated_by: owner`. Until then `depcheck`
  reports `published-unaudited` on this item, which is the correct protocol state,
  not a defect.
- **provenance:** the item was already `proof: ai-altered` from the ledger, and a
  deletion of an unlicensed clause does not change that label; `statement` is
  untouched, the Statement itself being unedited.
- **contract:** the step-1.5 `derivations` claim was updated to the final text and
  now records that only existence is claimed. Step 1.5's tag list is still
  `[L2]`, so no `citations.uses` entry changed.

`reflow.mts` was then run on the item and rewrapped the Remarks bullets to single
lines (typography only, no claim touched).

### R-3 — declined at A3, not applied. Page counts — A10 owner queue, prose untouched.

### Gate outputs after A4

```
tools/reflow.mts   items/lem-vector-space-elementary-consequences.md
  -> reflowed
tools/precheck.mts items/lem-vector-space-elementary-consequences.md
  -> PASS items/lem-vector-space-elementary-consequences.md (direct)
     1 checked, 0 failing — all clean
tools/proof-contract.mjs research/audit/wave0-linear-algebra.proof-contracts.json --strict
  -> 0 error(s), 0 warning(s), 18/18 item(s) checked
tools/content-policy.mjs --audit --ledger …provenance.jsonl …pages.json
  -> 25 scoped item(s), 10 error(s), 0 warning(s)
     ALL 10 are the two HELD items (5 each: provenance-statement-missing,
     provenance-proof-missing, audit-ledger-mismatch,
     audit-ledger-evidence-mismatch, audit-ledger-alpha-concurrence).
     The 23 retagged items are clean.
tools/citecheck.mjs / rendercheck.mjs / extcheck.mjs / fwdcheck.mjs
  -> no error touching any item in this batch
tools/depcheck.mjs
  -> 11 repo-wide [published-unaudited] errors, of which exactly one is this
     batch's (lem-vector-space-elementary-consequences); the other ten belong to
     sibling wave-0 batches in the same mid-A4 state. Expected until A6.
```

---

## 7. Checkpoint

- **Substage:** A1, A2 and A4 complete for both pairs. A6 (Alpha audit) is next.
- **Owned artifacts:** `research/audit/wave0-linear-algebra.provenance.jsonl`,
  `research/audit/wave0-linear-algebra.findings.md`,
  `research/audit/wave0-linear-algebra.proof-contracts.json`.
- **Items modified at A4:** 23 pure retags (+4 of them also gaining source URLs,
  plus 5 more URL-only additions) and one material proof repair to
  `items/lem-vector-space-elementary-consequences.md`. Nothing under `library/`
  was touched. Two items deliberately left byte-identical (the A3 hold).
- **Completed checks:** all 25 items read in full; all 159 proof steps mapped;
  all 155 dependency citations quote-verified against target sections; both page
  bodies read; every recorded URL WebFetch-verified 200; contract passes
  `--strict` against the final text; precheck clean on the repaired item.
- **Open items owed to Alpha at A6:** (1) concurrence on escalations E1 and E2
  (§2) — until then `content-policy --audit` fails on those two and only those
  two; (2) an independent reader must certify the step-1.5 repair and write
  `verification.verified` (`scope: published-audit`, `delegated_by: owner`) on
  `lem-vector-space-elementary-consequences`, which this Beta may not self-certify
  and which is why `depcheck` currently reports `published-unaudited` on it;
  (3) a `risk_review` disposition on all 18 contracts.
- **Exact next action:** hand off to Alpha for A6. If Alpha declines E1 or E2,
  rewrite that ledger row to `statement: ai-generated`, `evidence: trivial`, add
  `generation.role` (`counterexample` for E1, `example` for E2), record the
  truth-risk verification, and only then write the provenance block.
- **Working-tree baseline:** the three namespaced files above, plus the 24
  item files named in §6.
