# frontier-13 — step 9, scope-denial sweep (lead Alpha, group A)

Sweep only; the build was not paused. Every decline in the run's seven
`coverage.json` files was re-tested against the 2026-08-11 rule, two owed items
were built, and the four new items were carried through both judge lanes so the
level stays closable.

**Headline.** 136 declines re-tested (not ~90 — the brief's figure was stale).
**Seven reasons were false or misattributed**, two of them decisively so, and both
of those results are now built and judged. **Every one of the 63 surviving
deferrals now names a licensing page id that exists in `plan-spec.json`**; before
this sweep 52 of them named none. The Chernikov/Zhao section titles were already
fixed on disk and are now verified against the source PDFs rather than against a
prior agent's report. No item in the run rests on the external fallback.

---

## 1. Method, and what "re-tested" means row by row

136 rows carry `deferred` (68) or `out-of-scope` (68). I did not read 136 sources.
I separated the rows by the *kind of claim their reason makes*, and then tested the
claim mechanically or against the source:

| claim kind | rows | how tested |
|---|---:|---|
| "page X is outside this page's closure" / "later than order N" | 41 | closure computed from `plan-spec.json` `requires`; item resolved to its home page on disk |
| "the library has no such definition/interface" | 9 | resolved the named object in `items/` and its home page, then tested closure membership |
| "belongs to page/topic Y" | 44 | `plan-spec.json` lookup of Y by exact id, order comparison |
| "the source states but does not prove it" | 3 | downloaded the PDF, extracted with `pypdf`, read the passage |
| "not a mathematical result" (history, exercise prompt, Sage transcript) | 14 | read the harvested heading |
| "duplicates a retained item" | 12 | opened the named retained item |
| "whole subject area not reached" | 13 | searched `plan-spec.json` for any page in that subject |

The closure test is the strong one and it is the one that caught the real errors:
**resolve the dependency to its home page on disk, then ask whether that page is in
the pair's declared `requires` closure** — the test the RESUME records the
orchestrator getting wrong earlier in this run.

---

## 2. False reasons — the two that were decisive, both now built

### 2.1 Batch 6, Riehl Example 4.1.7 — floor and ceiling adjoint to ℤ ↪ ℝ

Recorded reason: *"The required real floor-and-ceiling definition is absent on
disk."*

**FALSE.** `lem-integer-part` is **published**, homed on `limits-of-real-functions`,
and that page **is** inside `closure(adjunctions-units-and-counits)`. Its statement
is exactly the floor: *"for every real x there is exactly one integer m with
m ≤ x < m+1 … written ⌊x⌋"*. The reason was true only of the *other* item it
looked at, `def-the-ceiling-of-a-quotient-of-naturals`.

Built: **`ex-ceiling-and-floor-are-adjoint-to-the-inclusion-of-the-integers`** on
the B page. It proves the full adjoint triple ⌈−⌉ ⊣ J ⊣ ⌊−⌋ between (ℝ,≤) and
(ℤ,≤), using `def-galois-connection` and `def-adjoint-triple` from the pair's own
A page. All fourteen dependencies verified in closure before authoring. Row is now
`included`.

### 2.2 Batch 2, Milne Example 3.9(c) — the Q₈ nonsplitting witness

The *first* reason (nothing on the pair rests on it) holds, as the brief says. The
*surviving* reason did not: it said the construction of Q₈ "is finite-group-example
material belonging to a group-examples page" — the disposition the 2026-08-11 rule
retired, and it **named no page**. `def-quaternions` and
`thm-quaternions-form-a-division-ring` are published on
`rings-subrings-and-integral-domains` (order 46), verified inside `closure(68)`, and
clause 4 of that theorem supplies the group ℍ^× outright. The multiplication table
`i²=j²=k²=−1, ij=k, …` is printed in `def-quaternions` itself, so Q₈ costs a
centrality observation, not 64 products.

Built, three items:

- `def-quaternion-group-of-order-eight` (A page)
- `prop-the-quaternion-group-has-order-eight-and-a-unique-element-of-order-two` (A page)
- `cex-the-quaternion-extension-of-c-two-by-c-four-does-not-split` (B page)

It refutes a **strictly narrower** statement than the existing C_{p²} witness —
cyclic kernel *and* cyclic quotient, with a nonabelian middle group — so it is not a
duplicate. Page 68 goes 23 → 25 A items against the ceiling of 60.

### 2.3 Batch 5, "tensor square of the real quaternion algebra is Mat₄(ℝ)"

Recorded reason: *"no quaternion-algebra page or dependency exists in the current
library spine."* **FALSE** on the same evidence as §2.2 — and
`rings-subrings-and-integral-domains` is in `closure(106)` too. The decline itself
survives on different, checked ground, now written into the row: this page builds
the tensor product of **modules**, while H ⊗_ℝ H ≅ M₄(ℝ) is a statement about the
tensor product of **algebras**, whose multiplication no item here constructs.

### 2.4 Batch 6, Mac Lane contravariant vector-space duality

Recorded reason called the dual-spaces development "later". `dual-spaces-bilinear-forms-and-inertia`
is **order 92 — earlier** than 365.001. The operative fact is closure, not lateness;
corrected, and the page id named.

### 2.5 Batch 6, "Corollary 4.6.15, Cat is complete and cocomplete"

Recorded reason read as if limits and colimits were unavailable. `limits-and-colimits`
is order 363 and **is** in `closure(365.001)` (via `limits-and-colimits-examples`).
The real obstacle is narrower and now stated: nothing published or planned
constructs products, equalizers and coequalizers **in Cat**. No plan page carries it,
so the row is reclassified `deferred` → `out-of-scope`.

### 2.6 Batch 1, the two "squaring the circle" rows

Both said the transcendence proof "is scheduled far beyond this algebra page".
**There is no transcendence page anywhere in `plan-spec.json`** — a deferral to a
page that does not exist is a drop. The mathematics survives (the conclusion needs
transcendence of π, not the quadratic-tower degree bound this page proves), so both
are reclassified `deferred` → `out-of-scope` with that stated.

### 2.7 Batch 3, Conrad Corollary 4.13 — destination made exact

Reason substantively **correct**, attribution loose: it named "the separately planned
fundamental-theorem-of-algebra page" in prose but not the id. Verified both routes
are closed at order 88 — `the-fundamental-theorem-of-algebra` (139) and
`the-complex-exponential-and-eulers-formula` (189, home of
`thm-complex-nth-roots-and-roots-of-unity`) are both outside `closure(88)`; what *is*
in closure is only `thm-every-complex-number-has-a-square-root`, which gives no k-th
roots for k > 2. Row now names the exact page id.

### 2.8 Batch 4, Zhao Exercise 2.1.25 — an overstatement inside a true reason

The row called Theorem 2.1.26 "stronger" than the exercise; group C's step-3 reading
of Zhao records them as **siblings**. Reason rewritten to the checkable claim: the
induced-removal chain runs through 2.1.26 (`thm-large-self-regular-subset`) and its
partition corollary, and nothing on the page consumes the exercise.

---

## 3. Reasons that survived checking — the ones worth naming

- **Zhao Theorem 2.1.17 (tower lower bound).** Downloaded `2.pdf` (38 pp.) and read
  the passage: *"We do not include the proof here. See Moshkovitz and Shapira (2016)
  for a short proof."* The decline's claim that the source states but does not prove
  it is **verbatim confirmed**.
- **Conlon–Fox lower-bound rows.** Downloaded `1211.3487` (35 pp.). §2.1: *"The
  constructions of Gowers [52] and the authors [24] show that the tower-type bound …
  is indeed necessary"* — cited, not reproduced. Wowzer: *"This follows from recent
  results of Conlon and Fox [24] and, independently, Kalyanasundaram and Shapira
  [61]."* Both **confirmed**.
- **Batch 1's determinant row.** `determinants-of-matrices-over-a-commutative-ring`
  is order 82 > 58 and outside `closure(58)`. True. (This is the shape of the
  Sylvester decline that was overturned earlier — this one holds.)
- **Batch 1's infinite-basis row.** Opened `def-dimension`: *"No number is attached
  to such a space here … the expression dim_F V = ∞ is not used."* True as recorded.
- **Batch 2's matrix-group rows.** `matrices-and-the-matrix-of-a-linear-map` (78)
  and `linear-independence-bases-and-dimension` are both outside `closure(68)`. True.
- **Batch 3's seven integration rows.** Worth stating precisely, because the obvious
  reading is wrong: **the library does publish the Riemann/Darboux integral** (page
  `the-riemann-integral`). The rows are correct only because they say *closure* —
  that page is not in `closure(94)`. Had they said "the library has no integration"
  they would have been false.
- **Batch 7's free-monoid rows.** No free-monoid page exists at any order, and the
  only free-monoid items in the library are homed on `adjunctions-units-and-counits`
  — batch 6 of this same run, order 365.001, far after 195. True.
- **Batch 1's trisection rows.** Page 96 does carry the full algebraic obstruction
  (`thm-quadratic-tower-characterization-of-algebraic-constructibility`,
  `cor-algebraically-constructible-numbers-have-power-of-two-degree`,
  `cex-cube-root-of-two-is-not-algebraically-constructible`). What is missing is the
  geometric constructibility equivalence, and no Euclidean-geometry page exists in
  the plan. True as recorded.

---

## 4. Every `deferred` row now names its licensing page (brief §3)

Before: **52 of 68** deferrals named no page id — only a prose gesture ("the later
monoidal track", "downstream homological-algebra pages", "the next planned AFT page").
A deferral naming no destination is indistinguishable from a drop, which is exactly
what §3 exists to prevent.

Applied via `research/frontier-13-alpha-a-step9-apply.mjs`, which keys every edit to
an exact harvested heading and **throws if a key matches no row** — a silently
dropped correction is the failure this step exists to catch. 69 row edits landed.

Destinations verified to exist in `plan-spec.json` with that id, e.g.
`closed-monoidal-categories-and-the-internal-hom` (365.027, and note **no page is
named for cartesian closed categories** — that is now written into those rows),
`reflective-subcategories-and-the-adjoint-functor-theorems` (365.003),
`presheaves-sheaves-stalks-and-sheafification` (366.057), `abelian-categories`
(365.015), `chain-complexes-and-homology` (365.037),
`higher-homotopy-groups-and-cofiber-sequences` (366.019),
`algebraic-closure-embeddings-and-separability` (98),
`finite-fields-and-cyclotomic-extensions` (101.2),
`cardinal-arithmetic-and-cofinality` (247),
`cographs-perfect-patterns-and-pure-pairs` (413),
`modules-substitution-and-prime-graphs` (397),
`classical-and-loglog-erdos-hajnal-bounds` (403).

Where a named page is **earlier** in the reading order (free products 62, dual
spaces 92, tensor products 106, representations 149), the row now says so explicitly
and gives closure, not lateness, as the reason.

Final state: **63 deferred, 0 naming no page id.** Verified mechanically.

---

## 5. The Chernikov/Zhao section titles (brief §2) — already done, now verified

The brief lists these as never routed. They are **already correct on disk**; some
later fix pass landed them. I did not take that on trust — I verified against the
source PDFs with `pypdf`:

| recorded on disk | PDF says | |
|---|---|---|
| Chernikov "Section 3.1, Erdős-Hajnal conjecture" | `3.1. Erdős-Hajnal conjecture` | ✓ |
| Zhao "Section 2.6, Graph Counting and Removal Lemmas" | `2.6 Graph Counting and Removal Lemmas` | ✓ |
| Zhao "Section 2.8, Induced Graph Removal and Strong Regularity" | `2.8 Induced Graph Removal and Strong Regularity` | ✓ |

The stale "Graphs with no order" and the two in-section subheadings group C flagged
are gone. Nothing to route.

---

## 6. `proved_here: false` records (brief §4)

Across the run's **467** items: **0** with `proved_here: false`, **0** with an
`external_dependency` record, **0** with a non-empty `forward_refs`. The narrow
external fallback was never exercised, so nothing is owed here.

I checked the eight `rem-` items by hand rather than trusting the frontmatter scan.
The one that could hide an external dependency is
`rem-tower-and-wowzer-bounds-in-regularity`, and it closes with *"These are upper
bounds delivered by the displayed proofs, not claims of optimality"* — it records
what the page proves and asserts no unproved lower bound. No ‡ marking is owed.

---

## 7. Judging the four new items — and an escalation I have to report

New items were unjudged, which would have left the level un-closable, so I ran the
targeted paired sweep (`--items`, the use `CLAUDE.md` reserves for Alpha-selected
rejudges after a complete sweep).

**Both lanes now pass all four.** But the counterexample took **five repair rounds**,
far past the twice-touched threshold, and that is worth stating plainly:

| round | Terra | DeepSeek | finding |
|---|---|---|---|
| 1 | reject | reject | `[L6]` attributed "every group of prime order is cyclic" to `thm-classification-of-cyclic-groups`, which says nothing of the kind |
| 2 | reject | pass | quotient map asserted surjective with kernel ⟨i⟩ with no cited quotient-group fact |
| 3 | reject | pass | `ord(x)=2` inferred from `x²=1, x≠1` using the order *characterisation*, which presupposes the order |
| 4 | reject | pass | "every group in sight is abelian" in the comparative remark — nothing cited that C_{p²} is abelian |
| 5 | reject | pass | excluding `x²=x` uses cancellation, uncited |
| 6 | **pass** | **pass** | — |

**Every one of the five was a real citation-licensing defect, and I wrote all five.**
Round 1 is the run's dominant class — an inflated dependency restatement — committed
by the Alpha adjudicating that class. The mathematics was correct from round 1; not
one finding touched the argument. Rounds 4 and 5 are at the 30-second boundary and I
could legitimately have adjudicated them `confirmed_nonfatal`; I repaired instead
because at step 9 the repair is free and each fix was a single faithful citation
(`cor-groups-of-order-p-squared-are-abelian`,
`cor-order-of-element-divides-group-order`). Round 5's repair *removed* the
elementary manipulation rather than citing it, which is what terminated the loop.

The `ex-ceiling-and-floor…` item took two rounds: Terra caught `[F7]` claiming
non-strict translation and negation reversal from `lem-of-add-order`, which states
only the **strict** forward direction. Confirmed fatal, same class. Repaired by
restating `[F7]` faithfully and adding step 1.0, which derives the three non-strict
forms by adjoining the equality case — the precedent already published on
`ex-integral-of-the-floor-function`. `lem-of-sign-rules` was dropped from `deps`
because negation reversal turned out to be a translation by −t−u and needed no sign
rule at all.

**Lane asymmetry worth carrying to step 10:** Terra produced 6 of the 7 findings;
DeepSeek passed 5 of the 6 rounds Terra rejected. On this sample the cross-family
screen was the weaker reader, which is the opposite of the assumption behind the
lineup.

---

## 8. Gate output after every repair, verbatim

```
precheck (4 new items)     3 checked, 0 failing — all clean   (def- item is n/a)
merge-proof-contracts      393 scoped item(s) from 7 batch contract(s)
proof-contract --strict --require-reviewed
                           0 error(s), 0 warning(s), 393/393 item(s) checked
finite-smoke               0 error(s), 16 check(s)
risk-report                0 error(s), 393 item(s) routed
content-policy (b2, b6)    141 scoped item(s), 0 error(s), 0 warning(s)
coverage-checklist x7      130/100/267/107/121/195/68 results, 0 errors, 0 warnings
url-sweep --recover --fail-on-dead (b2, b6)   9/9 live; 0 failed
validate-plan              OK — acyclic and consistent, no item-level cycles,
                           forward references, B-page dependencies or unresolved ids
depcheck                   OK — no cycles, all references resolve, no draft items
                           on published pages
rendercheck                OK — 4920 file(s)
fwdcheck / extcheck        0 errors each
citecheck                  26 warnings, none against the four new items
```

All three new proof-bearing items route **CRITICAL** on `risk-report`, so each
carries a `risk_review` I wrote as Alpha; `--require-reviewed` passes.

**Standing closure check re-run over the enlarged corpus** (the correct test — resolve
each dependency to its home page, then test closure membership, not merely "is it
published"):

```
467 items, 1572 dependency edges:
  out-of-closure 0, cross-pair 0, B-leaf 0, unresolved 0
```

---

## 9. Counts

| | before | after |
|---|---:|---:|
| declines re-tested | — | 136 |
| reasons false or misattributed | — | **7** |
| results built | — | **4 items** (1 definition, 1 proposition, 1 counterexample, 1 example) |
| rows reclassified to `included` | — | 2 |
| rows reclassified `deferred` → `out-of-scope` | — | 3 |
| deferrals naming no licensing page | 52 | **0** |
| run item count | 463 | **467** |
| `proved_here: false` items | 0 | 0 |
| coverage row edits applied | — | 69 |

---

## 10. For step 10

1. **The dominant defect class was still live in this step, in my own writing.** Five
   of seven judge findings were inflated or unlicensed citations in items authored by
   the Alpha whose step-6b charge was that exact class. Any step-10 account of the
   class should say so.
2. **The lane asymmetry in §7** — Terra 6 findings, DeepSeek 1 — is the sharpest
   signal this run produced about the judge lineup, and it points the opposite way to
   the lineup's rationale.
3. **`research/frontier-13-RESUME.md` is dangerously stale** and still reads "Steps
   1–3 COMPLETE. Step 3 Alpha scaffold review in flight" with pre-splice counts. The
   6c report already flagged this; it is now four steps further out of date. A session
   recovering from it would replay step 3.
4. **No page is named for cartesian closed categories** anywhere in `plan-spec.json`,
   though six batch-6 declines point at that topic. Worth a plan decision.
5. **`research/frontier-13-alpha-a-step9-apply.mjs`** is checked in and is the record
   of exactly which rows were edited and why. If it is kept, `ARCHITECTURE.md` §3
   needs an entry, per the keep-the-docs-current rule.

## Blockers

None.
