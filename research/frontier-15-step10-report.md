# frontier-15 — Step 10 fatal-error report

**This is the owner pause.** Nothing in this run is `status: published`. All 398
items and 16 pages are `status: draft`, `origin: session`. Flipping status is the
publish action and is yours alone.

**Headline, stated before the evidence.** Unlike `frontier-14`, this level's
mathematics is closed: **86 confirmed fatal defects were found and all 86 were
repaired**, `level-coverage --verify-current-context` is **green** (398 items,
398/398 current judge pairs, exit 0), and judge closure is `closed: true` with
`needs_rejudge`, `unadjudicated` and `open_fatal` all empty. **One gate is red**,
and it is red by design rather than by accident: `defect-ledger check --no-open`
fails on a single deliberately-open nonfatal row (§"Publish readiness"). Two
things I could not verify are real and named in §Caveats — independent refuter
coverage on 141 of 398 items, and the defect ledger's own coverage of batches 1–3.

---

## What was built

| | |
|---|---|
| pairs | **8** A/B pairs across number theory, abstract algebra (×3), measure theory, topology, complex analysis, category theory |
| items | **398** — 309 on A pages, 89 on B companions (392 authored at step 5, 6 built at step 9) |
| pages | 16, all `draft`; **`library/measure-theory/` is a new library category** |
| proof-bearing items | 329 |
| judge verdict rows | **1,688** over **3,387** lane attempts |
| items judged | **398** — every item, both live lanes, 0 nulls at the latest attempt |

| batch | A page | order | items (A + B) | category |
|---|---|---|---|---|
| 1 | `quadratic-reciprocity-and-the-jacobi-symbol` | 57.005 | 18 + 9 | number-theory |
| 2 | `sylow-theorems-and-nilpotent-groups` | 70 | 46 + 11 | abstract-algebra |
| 2 | `chain-conditions-and-semisimple-modules` | 108 | 43 + 12 | abstract-algebra |
| 3 | `algebraic-closure-embeddings-and-separability` | 98 | 60 + 12 | abstract-algebra |
| 4 | `sigma-algebras-and-borel-sets` | 288.001 | 45 + 16 | measure-theory |
| 5 | `the-fundamental-group-of-the-circle` | 295 | 21 + 7 | topology |
| 6 | `goursat-and-cauchys-theorem-in-a-convex-domain` | 309 | 17 + 8 | complex-analysis |
| 7 | `monads-comonads-and-their-algebras` | 365.005 | 59 + 14 | category-theory |

Kinds: 135 theorem, 64 definition, 58 example, 46 corollary, 39 lemma, 29
false-statement, 13 proposition, 9 counterexample, 5 remark. 148 carry
`landmark: true`.

**Dependency shape, recomputed from disk at step 10** (not carried from 6c, which
measured 1,409 edges before steps 8–9 added theirs):

| | |
|---|---|
| `deps` edges out of the run's items | **1,442** |
| into other run items | 672 |
| cross-level into published pages | **770**, reaching **361 distinct published items** |
| **cross-batch, inside the run** | **0** — forced by the plan; §"Things the run did not need" |
| unresolved targets | 0 |
| declared `forward_refs` | 0 · declared `external_refs` | 0 |
| `proved_here: false` | **1** (`rem-the-borel-hierarchy-never-stabilizes`) |

**Provenance, all 398 items, from disk.** `statement`: 289 `literature-derived`,
90 `ai-altered`, **19 `ai-generated`**. `proof`: 269 `ai-altered`, 33
`ai-generated`, 68 `not-applicable`, 27 `literature-derived`, 1 `not-supplied`.
**All 19 `ai-generated` statements are `example` or `counterexample`, and none is
a `deps` target of anything** — I recomputed the full target set at step 10 rather
than taking 6c's word for it.

Step 0 scoped 8 pairs from a 13-pair buildable frontier (owner instruction: build
everything except combinatorics). One further pair,
`the-fundamental-theorem-of-algebra`, was deliberately dropped at step 0 on a
design/spec route conflict — see machinery finding 3.

---

## Publish readiness — one open item

### The only red gate: `defect-ledger check --no-open`

```
ERROR f15-a-rr-005 (nonfatal) is still open at the terminal stage:
  518 boundary rows across 88 batch-2 items are generated from the item's
  title and statement rather than written as dispositions
defect-ledger: 91 defect row(s) checked for frontier-15, 1 error(s)
```

Everything else in the terminal gate set passes. Without `--no-open` the same
check reports **91 rows, 0 errors**, so this is precisely and only the open row.

**What the row is.** In batch 2, 26 items have a proof-contract boundary
worksheet generated end to end from the item's own title and Statement, and 62
more are partly generated. The shape is `"<title>: <stock clause for this axis>
for <statement>"`, with `not_applicable` reasons drawn from a fixed set of seven
phrasings. Batches 1 and 3–7 have none of it, so this is one Beta's habit, not a
level convention. `boundary-audit --fail-on-template` reports **zero clusters**
over all of them, because interpolating each item's own title makes every row
textually unique and the normalizer strips the id but not the title.

**What was established about it, so you are not reading a bare "unfinished".**
Alpha-b measured it (454 of batch 2's 720 rows match a stock tail under a
conservative detector — a floor, not the row's own 518); a targeted detector for
the one sub-class whose falsity is airtight — a `not_applicable` iff row on an
item whose Statement carries two directions — was run across **all seven
batches** and returned 18 candidates, **16 over-fires and 2 real**, both in batch
2, both repaired (`f15-S9-006`); and **neither of the two concealed a
mathematical defect** — each item's own proof discharges exactly the obligation
its row denied existed.

**Why it is open rather than closed.** Its recorded closing condition is a
rewrite of those worksheets by the owning Beta, with its sources to hand. No Beta
runs at step 9. Both Alpha-b and the step-9 lead declined to bulk-rewrite them on
the ground that a sweep by a different hand reproduces the original defect in new
wording, and I have no evidence to overturn that. **On the evidence, this is
contract quality, not a hidden fatal defect** — which is the opposite of
`frontier-13` and `frontier-14`, where a false boundary row hid a confirmed-fatal
defect three times out of three that anyone looked.

**This is the one thing in the run I would put in front of you as a decision.**
Three options, and they are genuinely different: dispatch a Beta to rewrite the
~450 rows; accept the row as a known deviation and close it with that reason on
the record; or leave it open and publish anyway, which requires you to override
the terminal gate.

### Nothing else is open

- **No confirmed-fatal judge finding is unrepaired.** All 6 fatal adjudication
  rows over 5 items are `fixed`, all 5 items rejudged, 3 of 5 passing both lanes
  on the repaired text and the other 2 carrying only nonfatal follow-up findings.
- **No unadjudicated rejection.** 149 adjudication rows cover **every** current
  rejection from both live lanes.
- **Both receipts are real and validating.** The spine receipt is 58/58 `read`
  with a per-item note naming that proof's actual route; the audit-coverage
  receipt carries a concrete attestation and **39 plan-reconciliation rows, none
  with a blank reason**.
- **Zero published items were modified.** Verified independently: every modified
  or new file under `items/` carries `status: draft`.

---

## Fatal defects, by defect type

**86 confirmed fatal defects, 86 repaired, 0 open.** Evidence: the seven reader
reports, the three group-Alpha 6b reports, the lead Alpha's 6c, step-8 and step-9
reports, `research/defect-ledger.jsonl` and
`research/frontier-15-judge-adjudications.jsonl`.

| where found | count | who |
|---|---|---|
| step 6a — independent readers, all confirmed from disk by the owning group Alpha | **75** | 6 + 37 + 15 + 5 + 4 + 5 + 3 across batches 1–7 |
| step 6b — group Alpha's own read | 3 | group a (batch 2) |
| step 6b — read-only refuters | 2 | group c (batch 7) |
| step 6c — lead Alpha, cross-level citation audit | 1 | |
| step 8 — paired judges | 5 | 5 DeepSeek, 1 of them also Sonnet |
| step 9 — scope-denial sweep | 0 fatal (3 false declines, all richness) | |

**Where step 6 caught 81 of 86 — that is the shape the process wants.** A defect
found at step 6 costs an edit; the five found at step 8 each cost an
adjudication, a repair and a rejudge.

**A caveat about this section's precision, stated once.** The group Alphas for
batches 4–7 wrote one defect-ledger row per adjudicated finding, so every one of
those defects is individually typed and located. **Group a, which owned batches
1–3 (207 items and 58 of the 75 reader-found fatal defects), did not** — see
machinery finding 1. For those batches I classify by the class its report and its
readers' reports actually assert, and name the ids they name. Where a report
grouped findings into a class without typing each id, I report the class and its
size and do not manufacture a per-id split.

### Incorrect, inflated or truncated dependency citation — the dominant class again

The same shape as `frontier-13` and `frontier-14`: the `[F#]`/`[L#]` restatement
claims more (occasionally less) than the cited item's Statement, and a numbered
step leans on the difference.

**Batch 2 (reader 2) — 22 of its 37 fatal findings are this class**: a fact
ending at "so that", "then", "with", "Write", "and:" or "Moreover" immediately
before the operative clause the proof uses. Named in the report: R2-13, R2-15,
R2-17–R2-23, R2-25–R2-30, R2-36, and the citation halves of R2-11, R2-16, R2-37,
R2-38. Group a spot-checked eleven against the cited items on disk and confirmed
each omitted clause is load-bearing; `citation-fidelity` now reports every quote
present and no widening candidate.

**Batch 1 (reader 1) — 4 findings, one shape.** R1-2 (`thm-jacobi-symbol-multiplicativity`),
R1-3 (`thm-jacobi-symbol-reciprocity`), R1-4 (`thm-unit-square-criterion-modulo-n`),
R1-5 (`cor-number-of-square-roots-of-a-unit-modulo-n`): each decomposed an
arbitrary integer into prime powers citing `thm-canonical-prime-factorisation`,
whose Statement *begins from* a supplied factor list and does not prove one
exists. `thm-fundamental-theorem-of-arithmetic` now supplies existence in each.
Group a additionally checked that step 1.1 of `thm-jacobi-symbol-multiplicativity`
needs no such input, because `[L1]` is the definition of the symbol and carries
the factorisation with it.

**Batch 4 (reader 4) — 3.** `thm-transfinite-description-of-generated-sigma-algebras`
`[L4]` attributed existence *and* leastness of the generated σ-algebra to
`def-generated-sigma-algebra`, which fixes notation and explicitly defers both
(B2). `thm-cardinality-bound-for-generated-sigma-algebras` `[L2]` asserted
cardinal exponentiation monotone in the exponent without the source's nonzero-base
proviso — real, since `0^0 = 1` while `0^1 = 0` (B3).
`thm-cardinality-of-the-borel-sigma-algebra-on-rn` `[L7]` claimed
`def-axiom-of-choice` makes every cardinal and cardinal exponent available; that
item defines choice functions and the product form only, so step 1.2 used a claim
absent from its cited input (B4).

**Batch 5 (reader 5) — 2.** `lem-circle-loops-of-equal-degree-are-path-homotopic`
`[L2]` dropped `lem-straight-line-homotopies-are-continuous`'s opening "Let
`n ≥ 1`" (B15); `thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle`
`[L4]` restated componentwise continuity without the source's `m ≥ 1`, metric
domain, subspace and codomain (B16). Both applied at legal parameters, so nothing
downstream was wrong — the *Fact as written* asserted a wider theorem.

**Batch 6 (reader 6) — 4.** `ex-goursat-four-triangle-boundary-cancellation`
`[L1]` cited the lemma's **proof** as its Statement (B29);
`ex-cauchy-integral-formula-exponential-over-z-minus-one` `[L2]` and
`ex-cauchy-integral-formula-cosine-third-order-pole` `[L1]` erased the disc,
radius, interior-point and index hypotheses of the Cauchy formulas (B30, B31);
`cex-holomorphic-function-on-an-annulus-with-nonzero-closed-contour-integral`
`[L3]` attributed `z = r e^{iθ}` to `thm-polar-form-with-unique-principal-argument`,
whose Statement gives the Cartesian form — Euler's identity was used with no home
(B32).

**Batch 7 (reader 7) — 2.**
`thm-algebras-for-the-covariant-power-set-monad-are-posets-with-all-small-suprema`
`[L1]` stated the T-algebra unit, multiplication and homomorphism equations while
citing two items that state none of them; `def-t-algebra-and-algebra-homomorphism`
does, and was not in `deps` (C02).
`ex-the-interior-comonad-on-a-topological-space` `[L1]` attributed "interior is
monotone, contractive and idempotent" to `def-interior-closure-boundary-top`,
which states only the largest-open-subset, containment and open-fixed-point
clauses (C03). Alpha-c re-derived both from the quoted clauses alone, as did two
refuters independently.

**Step 6c — 1, and it is the only defect in the run where a fact line says
*less* than its source.** `cor-classification-of-groups-of-order-one-hundred-five`
`[L11]` reproduced the antecedent and the first conjunct of
`thm-internal-external-semidirect-product-equivalence`'s consequent and then
ended with the words "and the resulting map." — no predicate. Step 3.1 concludes
`G ≅ C_5 × H` and cites `[L11]` for it, so the step's stated support asserts
nothing about the map at all. **No gate can see this**: `citation-fidelity`
compares the contract's recorded quote against the *source*, which is intact, and
`truncated-citation.mjs` missed it because the line paraphrases before truncating
and so is not a prefix. The item's mathematics was correct throughout.

### False or overstrong statement, title or definition

The class the judges structurally cannot see: they read Statements, and a false
title is invisible to them. **21 of the 86 sit here, in three tiers of severity.**

| item | defect | disposition |
|---|---|---|
| `cor-cokleisli-and-coeilenberg-moore-have-the-dual-extremal-universal-properties` | **the inverted duality, and the run's most consequential false Statement.** It made co-Eilenberg–Moore the resolution every adjunction factors *into* and co-Kleisli the one everything factors *out of* — both backwards. Step 2.1 justified it by claiming that passing to opposite categories "reverses the two comparison directions", which is false: `L ⊣ R` inducing `G` becomes `R^op ⊣ L^op` inducing `G^op`, and a morphism of adjunctions `K` becomes `K^op` between the same two adjunctions in the same order | Statement corrected to mirror its own sibling and Riehl Prop. 5.2.13 (co-Kleisli initial, co-EM terminal); step 2.1's false sentence replaced by the explicit translation. **Verified on disk at step 10** |
| `cor-algebraic-closures-are-isomorphic-over-the-base` | title read "…base-isomorphic, **generally nonuniquely**", Statement repeated it, and step 3.1 says "The argument proves existence only and makes no uniqueness assertion." `landmark: true`, so the false half was reader-facing on the flowchart | **narrowed** — title stops at "base-isomorphic"; Statement says "No uniqueness of the isomorphism is asserted." The claim is not lost: `fs-algebraic-closure-is-unique-up-to-unique-isomorphism` on the same pair actually proves nonuniqueness. **Verified on disk** |
| `thm-separable-closures-exist-and-are-isomorphic-over-the-base` | same shape, same page, added at authoring rather than inherited from the scaffold | Statement narrowed. **Verified on disk** |
| `thm-transfinite-description-of-generated-sigma-algebras` | **Statement false at the empty generator.** Seeded `E_0 := E`; with `E = ∅` there is no sequence into `E_0`, so every stage stayed empty while `σ_X(∅) = {∅, X}`. The contract carried a `checked` empty-family row asserting the opposite | seed changed to `E ∪ {∅}`; Alpha-b re-instantiated `E = ∅` and `X = ∅` against the current text and both evaluate correctly (B1) |
| `library/category-theory/monads-comonads-and-their-algebras.md` | **A-page summary asserted a false theorem** — "Preorders turn monads and comonads into closure and interior operators", dropping the poset hypothesis both items keep. Counterexample verified: on the indiscrete preorder on `{0,1}` the swap map is a monad and is not idempotent | summary repaired; still exactly two paragraphs, 60 and 87 words. **Found by a refuter, in page prose no mechanical tier reads** (C07) |
| `rem-the-universal-properties-of-kleisli-and-eilenberg-moore-are-schematic` | Remark said `[C,D]` "is formed only under the hypotheses of `prop-size-of-functor-categories`". That proposition gives sufficient conditions for *smallness*; formation is `def-functor-category` and needs only a small source. Witness: `C` empty, `D` non-locally-small | corrected; `def-functor-category` added to `deps`. A Remark's prose is its whole mathematical content (C08) |
| `library/number-theory/quadratic-reciprocity-and-the-jacobi-symbol.md` | summary claimed the proof "uses only integer division, rational inequalities, and finite sets" — false; Gauss's lemma and the half-system permutation are essential inputs | sentence rescoped to the rectangle argument after Gauss's lemma (R1-1) |
| `library/abstract-algebra/algebraic-closure-embeddings-and-separability.md` | A-page summary, second paragraph — part of batch 3's choice class below | repaired (R3-1) |
| `ex-goursat-triangle-integral-of-z-squared` | title said the integral "vanishes edge by edge"; the three edge integrals are `1/3`, `(−i−1)/3`, `i/3`, none zero — only the sum. A title contradicted by its own construction | retitled to the sum claim, in item and manifest; Alpha-b recomputed all three from `z³/3` (B28) |
| `rem-circle-quotient-model-agrees-with-published-examples` | Remark asserted two published examples use the projection `p(x) = [x]`. Both use `q`, and in `ex-circle-as-r-mod-z` `p` is a *different* projection — the claim was false of both items it named | restated symbol-independently; Alpha-b re-checked each surviving clause against both published items (B14) |
| `rem-the-borel-hierarchy-never-stabilizes` + `fs-the-borel-hierarchy-closes-after-two-steps` | Statement and `external_dependency.exact_statement` quantified over "every countable ordinal `α < ω₁`", including `α = 0` — extending Marker Cor. 2.38 to an undefined `Σ⁰₀` level. An overbroad restatement of a `proved_here: false` source is the worst place for one | narrowed to `1 ≤ α < ω₁` in the Remark, its external record and its consumer's `[L1]`. Confirmed against Marker's own extracted text (B5) |
| `thm-matrix-rings-over-division-rings-are-semisimple` | the cited matrix definition opens "Let `R` be a commutative ring" | construction moved into the Statement; group a checked the noncommutative details, where such a repair usually fails (R2-11) |
| `cor-integral-elements-form-a-subring`, `thm-integrality-and-finite-module-equivalences` | title and Statement admitted the zero ring, where nothing is monic and no element is integral while the third condition holds vacuously | `A ≠ 0` established as a **necessary** narrowing, not a cautious one (R2-14, R2-16, R2-34) |
| `def-p-core-of-a-finite-group`, `def-fitting-subgroup-of-a-finite-group` | well-definedness prose in the Definitions | repaired (R2-32, R2-33) |
| `thm-correspondence-theorem-modules`, `cor-length-is-additive-in-short-exact-sequences` | a Statement clause ("They preserve … successive quotients"; the iff clause) with no proof behind it | repaired (R2-5, R2-8) |
| `thm-submodules-and-quotients-of-semisimple-modules`, `thm-socle-is-the-largest-semisimple-submodule` | title *and* Statement — see choice scope below | repaired (R2-37, R2-38) |
| `def-separable-degree`, `thm-purely-inseparable-extension-characterizations` | Definition paragraph / Statement condition 3, in batch 3's choice class | repaired (R3-7, R3-10) |

Two further false titles were found at **step 3**, before any proof existed, and
repaired there for the price of a scaffold edit — the cheapest this class ever
gets. `ex-sylow-subgroups-of-gl-two-over-a-finite-prime-field`'s planned title
asserted `Aut((ℤ/p)²) ≅ GL₂(𝔽_p)`, an isomorphism to an object undefined until
order 78 on a page at order 71; and `thm-sylow-second-theorem`'s planned Statement
asserted less than the harvest and three consumers claimed. Both are in
`research/frontier-15-alpha-a-recheck.md`.

### Missing hypothesis or choice scope

**The systematic class of this run, and it is a whole batch.**

**Batch 3 — all 15 of reader 3's fatal findings are one class**, and it is the
right class: an unconditional title, `Given`, Statement or fact restatement over a
proof that uses a Choice-dependent result. `thm-one-step-simultaneous-root-extension`,
`thm-existence-of-algebraic-closures`, `thm-algebraic-embedding-extension` and
`cor-algebraic-closures-are-isomorphic-over-the-base` all explicitly assume
Choice, and the hypothesis was dropped in every consumer (R3-1 through R3-15).
**23 titles and 12 Statements repaired.** Group a verified reader 3's riskiest
repair in full — R3-8 replaced a Choice-dependent proof of
`thm-separable-degree-is-independent-of-the-algebraic-closure` with a choice-free
finite one, and the re-derivation confirms it is correct and genuinely choice-free
(two single instantiations, no transfinite selection).

**Batch 2 — 2 more, and the detector that found them.** Reader 2 applied exactly
this reasoning twice (R2-37, R2-38, on AC) and did not carry it two pages away.
Group a then wrote the detector rather than hand-reading: *an item whose
Proof/Verification/Refutation body names a choice principle while neither its
title nor its Statement declares one.* Three hits over 207 items:

- `thm-composition-series-iff-noetherian-and-artinian` — biconditional asserted
  unconditionally while step 2.1 read "dependent choice gives a descending chain".
  **Narrowed, not widened**: the forward direction is genuinely choice-free, so DC
  is scoped to the converse only, and group a confirmed from disk that neither
  consumer inherits it because both use only the forward direction
  (`f15-a-6b-002`).
- `thm-finitely-generated-nonzero-modules-have-maximal-proper-submodules` —
  unconditional over a proof whose step 3.1 was "Zorn supplies a maximal proper
  submodule", with its own `[L3]` restating `thm-zorn` from "Assume the Axiom of
  Choice." AC added to Statement and title; all four steps rewritten, including
  **the empty chain**, bounded by `0` only because `M ≠ 0`. Propagation: the
  consumer's `[L2]` had to be repaired in the same pass or adding the hypothesis
  at the source would have turned that Fact into a citation that drops it
  (`f15-a-6b-003`).
- One **false positive**, `thm-finite-length-semisimple-module-characterizations`,
  whose Statement advertises choice-freeness — verified genuinely choice-free (at
  most `n` selections bounded by Jordan–Hölder; finitely many summands in a fixed
  order).

Batches 4–6 contribute B3, B5, B15, B16 (above, counted once each under
citation).

### Invalid inference

| item | defect | disposition |
|---|---|---|
| `thm-sylow-first-theorem` | **the run's worst single defect: a landmark whose proof did not establish its Statement.** Step 1.1 was "We use strong induction on `\|G\|` and Wielandt's left action on the `p^a`-element subsets of `G`"; step 3.1 was, in full, "We apply induction to that stabilizer." Both load-bearing inferences were absent — nothing showed the stabilizer is proper unless `G` is a `p`-group, and nothing showed the induction hypothesis applies to it. **The gates were green because the contract's input map recorded all six facts as used at step 1.1, the announcement step**, so exactly-once coverage passed over a step that used none of them | proof rewritten by group a. Route verified against Idelhaj §3 and Conrad §2 **by extracting the PDF text**, not by HTTP status; Idelhaj's Lemma 3.6 *is* the library's `lem-wielandt-sylow-binomial-valuation`. The item's reference had also pointed at Conrad's *Consequences of the Sylow Theorems*, which does not prove Sylow I — corrected. **I read the rewritten proof in full at step 10 and it is correct**, including the `a = 0` and trivial-group boundaries (`f15-a-6b-001`) |
| `thm-extension-generated-by-separable-elements-is-separable` | **circular.** Step 1.2 showed only that each generator has separable minimal polynomial over the preceding field, then applied `thm-separability-is-transitive`, which needs each adjacent extension separable *elementwise* — obtainable only from the one-generator case of the theorem being proved. **The only defect both judge lanes found, and both stated it precisely** | **proof written afresh** on the separable-degree route the library already supports and its own sibling uses for the identical move. Six deps added and verified acyclic by transitive closure; `thm-separability-is-transitive` **removed** from `deps` because the corrected proof does not use it. Both lanes pass the rewritten text. **Verified on disk** (`frontier-15-S8-03`) |
| `thm-a-distributive-law-makes-the-composite-a-monad` | step 3.1 replaced the whole associativity verification with the assertion that the axioms "move the two occurrences of `S` past the two occurrences of `T` in the same order" — no typed equality chain, no commutative cells, and this was the theorem's load-bearing inference | proof replaced by the reader with the lift-and-compose route. Alpha-c **re-derived the entire replacement independently** rather than checking the narrative, and checked it against Cheng's Theorem 2.2 by extracting the paper's text; two refuters read the replacement adversarially and found no defect (C01) |
| `cor-geometric-unit-circle-has-fundamental-group-z` | step 1.1 inferred that `h_*` and `(h^{-1})_*` are group homomorphisms from an `[L3]` stating only the identity and composition equations — a separate clause of the cited theorem | `[L3]` expanded to carry the well-defined-group-homomorphism clause (B17) |
| `cor-infinitely-many-primes-congruent-to-one-modulo-three` | step 2.1 inferred `q \| P` from `q` occurring among the factors using only permutation invariance, which can reorder a product but cannot expose `P = P'q` | `[L3]` expanded to quote the product recursion; step 2.1 rewritten. Group a re-derived the arithmetic including the `r = 0` empty-product case, `N = 13` (R1-6) |
| batch 2, **12 further substantive proof defects** | reader 2's non-citation fatals: R2-1 (an iff whose converse is never proved, with the contract marking both directions checked), R2-2, R2-3, R2-4, R2-6, R2-7 (an unlicensed induction call in Jordan–Hölder), R2-8, R2-9, R2-10, R2-12, R2-24, R2-35 (an invalid transpose mnemonic in Wedderburn–Artin) | all confirmed from disk and repaired. Group a re-derived R2-7, R2-8, R2-11 and R2-35 in full — for R2-35 verifying from scratch that `(A ⋆ B)^T = A^T ⊙ B^T` entrywise, so `R` is recovered rather than `R^op` |

### Invalid witness

`fs-subgroups-of-equal-p-power-order-are-conjugate` — the refutation's witnesses
were the subgroups of `S_4` generated by `(12)` and `(12)(34)`, while the item's
own `[L2]` quotes `def-finite-symmetric-group-and-permutation-notation`, which
fixes `S_n = Sym({0,…,n−1})`. The symbol `4` is not in the domain, so `(12)(34)`
names no element of the group, and since a false-statement item **is** its
counterexample the refutation had no second witness. Relabelled to `(0 1)` and
`(0 1)(2 3)`. **Checked to be an instance, not a class**: a detector over all 392
items found exactly one out-of-range permutation symbol, this one, so the repair
leaves the level internally consistent rather than half-converted. **Verified on
disk** (`frontier-15-S8-05`).

### False boundary dispositions — the class that hid a fatal defect three times before

It recurred, in a **new form**, and this time it hid one.

**The prose form.** A closing step reading *"We include the trivial group and the
one-prime case. This proves the stated claim."* names cases and checks none —
and the contract's boundary `evidence` string was built **by quoting the proof's
final step**, so where that step was an announcement the boundary row quoted the
announcement and the non-disposition appeared twice, confirming itself.
`boundary-audit`'s template detector cannot cluster it, because each announcement
is worded differently. Group a's detector — *a numbered proof step containing no
LaTeX math whose text opens with a method-announcement verb* — returned 50
candidates across batches 1–3, triaged to **21 real non-dispositions, of which
exactly one was fatal: `thm-sylow-first-theorem`**. 15 items and **32 contract
boundary rows** were re-anchored with per-case evidence, each row stating its own
case rather than all pointing at the rewritten closing step. Two of the 15 were
**leaked authoring instructions** rather than proof text ("Also point to the
explicit descending chain rather than a scope claim").

A later lane repaired **17 more announcement steps**, of which **two items had no
proof at all** — every numbered step was an announcement: `prop-endomorphisms-form-a-ring`
named four ring axioms and verified none, and
`thm-endomorphism-ring-of-a-finite-direct-sum-as-hom-matrices` announced the
matrix-multiplication verification. Both proofs were written. And the same lane
found `thm-sylow-second-theorem`'s `zero` and `degenerate` rows marked `checked`
with evidence *"is resolved in step 4.1"*, quoting the announcement verbatim —
`boundary-audit`'s `checked` detector only tested that the credited step *number*
exists, and 4.1 did.

**Two new detectors came out of this**, both wired and documented:
`tools/announcement-steps.mjs` (the item side) and a fourth contradiction signal
in `boundary-audit.mjs` (a `checked` row crediting a step that is an
announcement).

---

## Fatal defects, by location

| location | items |
|---|---|
| **Title only** (Statement correct) | `cor-algebraic-closures-are-isomorphic-over-the-base`, `ex-goursat-triangle-integral-of-z-squared`, plus **23 titles in batch 3's choice class** and, at step 3, `ex-sylow-subgroups-of-gl-two-over-a-finite-prime-field` |
| **Statement / Definition** | `cor-cokleisli-and-coeilenberg-moore-have-the-dual-extremal-universal-properties`, `thm-separable-closures-exist-and-are-isomorphic-over-the-base`, `thm-transfinite-description-of-generated-sigma-algebras`, `rem-the-borel-hierarchy-never-stabilizes`, `thm-composition-series-iff-noetherian-and-artinian`, `thm-finitely-generated-nonzero-modules-have-maximal-proper-submodules`, `thm-matrix-rings-over-division-rings-are-semisimple`, `cor-integral-elements-form-a-subring`, `thm-integrality-and-finite-module-equivalences`, `def-p-core-of-a-finite-group`, `def-fitting-subgroup-of-a-finite-group`, `def-separable-degree`, `thm-purely-inseparable-extension-characterizations`, `thm-correspondence-theorem-modules`, `cor-length-is-additive-in-short-exact-sequences`, `thm-submodules-and-quotients-of-semisimple-modules`, `thm-socle-is-the-largest-semisimple-submodule`, plus **12 Statements in batch 3's choice class** and `thm-sylow-second-theorem` at step 3 |
| **Proof / verification steps** | `thm-sylow-first-theorem`, `thm-extension-generated-by-separable-elements-is-separable`, `thm-a-distributive-law-makes-the-composite-a-monad`, `fs-subgroups-of-equal-p-power-order-are-conjugate`, `cor-infinitely-many-primes-congruent-to-one-modulo-three`, `prop-endomorphisms-form-a-ring`, `thm-endomorphism-ring-of-a-finite-direct-sum-as-hom-matrices`, and batch 2's twelve substantive proof defects (R2-1, R2-2, R2-3, R2-4, R2-6, R2-7, R2-8, R2-9, R2-10, R2-12, R2-24, R2-35) |
| **Facts blocks (`[F#]`/`[L#]`)** | the whole citation class above — batch 2's 22, batch 1's 4, `thm-transfinite-description-of-generated-sigma-algebras` `[L4]`, `thm-cardinality-bound-…` `[L2]`, `thm-cardinality-of-the-borel-…` `[L7]`, `lem-circle-loops-of-equal-degree-…` `[L2]`, `thm-real-line-mod-integers-is-homeomorphic-…` `[L4]`, `cor-geometric-unit-circle-…` `[L3]`, `ex-goursat-four-triangle-boundary-cancellation` `[L1]`, both Cauchy-formula examples, `cex-holomorphic-function-on-an-annulus-…` `[L3]`, `thm-algebras-for-the-covariant-power-set-monad-…` `[L1]`, `ex-the-interior-comonad-…` `[L1]`, `cor-classification-of-groups-of-order-one-hundred-five` `[L11]` |
| **Remark** | `rem-the-universal-properties-of-kleisli-and-eilenberg-moore-are-schematic` (false formation claim), `rem-circle-quotient-model-agrees-with-published-examples` (false about both items it named). **Both were found by reading Remark prose with a numbered step's suspicion, and neither is visible to any gate** |
| **Page prose / summary** | `library/category-theory/monads-comonads-and-their-algebras.md` (a false theorem in the summary, found by a refuter), `library/number-theory/quadratic-reciprocity-and-the-jacobi-symbol.md` (false exclusivity claim), `library/abstract-algebra/algebraic-closure-embeddings-and-separability.md` (batch 3 choice class) |
| **Contract boundary rows** | 32 re-anchored in batches 1–3 under the announcement class, 4 more under the later lane, 3 empty-set rows in batch 7, ~10 anchor rows across batches 4–6, 2 false iff rows repaired at step 9 — and **~450 batch-2 rows still generated (the one open row)** |

All eight A-page summaries are, on disk at step 10, exactly two nonempty prose
paragraphs of 75/93, 46/57, 49/60, 59/82, 66/69, 63/71, 61/67 and 60/87 words.
All eight B pages have **zero** authored body bytes.

---

## Items repaired more than once — the twice-touched escalation

`touchlog report --min 2` reports **0 items with ≥ 2 repairs**, and
`touchlog audit` prints an escalation set of **30 items, every one of them
"refuted 2×, repaired 0×"**. Neither number means what it looks like, and both
reasons are worth your attention.

The 30 are exactly the items **both lanes rejected on the same text** — each
both-lane rejection counts as two refutations. That is agreement, not a repair
history. It is the same artefact `frontier-14` reported at 131 items, and it
remains the escalation instrument's weakest signal.

The `0 repairs` figure is worse: it is **blind by construction**. Only three
touch snapshots exist — `pre-author`, `post-6b`, `pre-step8` — so authoring plus
every 6a and 6b repair collapses into one transition (a new item reads as
"created", not "repaired"), and **nothing after `pre-step8` is snapshotted at
all**. Step 8's five repairs and step 9's six builds are invisible to the tool.
The six items it does report at 1 repair are exactly 6c's six citation repairs.

So the twice-touched reading below is assembled from the reports, and I say so
rather than quoting a tool that cannot see it:

| item | touches | my reading |
|---|---|---|
| `thm-a-distributive-law-makes-the-composite-a-monad` | 2 (reader replaced the proof; Alpha-c restated three facts and fixed a wrong axiom name in step 2.1 **introduced by the replacement**) | **converged, and well covered.** The second touch is exactly the class the first repair created. Two independent refuters read the result and found no defect, and Alpha-c re-derived the whole replacement rather than the diff. |
| `thm-composition-series-iff-noetherian-and-artinian` | 2 (reader repair, then group a's DC narrowing) | **converged.** The second touch adds scope the first missed; it does not correct the first. |
| `thm-finitely-generated-nonzero-modules-have-maximal-proper-submodules` | 2 (reader repair, then group a's AC scoping and a four-step rewrite) | **converged**, same shape. |
| `fs-every-module-has-a-composition-series`, `thm-equivalent-characterizations-of-semisimple-modules` | 2 each (reader repair, then group a's propagation of F2/F3) | **converged.** Both second touches are forced consequences of a source repair, which is the propagation working. |
| `cor-classification-of-groups-of-order-one-hundred-five` | 3 (minted at the step-3 recheck; `[L11]` truncation repaired at 6c; two boundary rows rewritten at step 9) | **worth a glance.** Three touches in three stages, each a different defect class, each smaller than the last. The item was *added* by a step-3 repair, so it has had less cumulative reading than its page-mates. |
| `prop-complement-and-disjoint-union-axioms-for-a-lambda-system` | 2, both at step 9 (built, then repaired on a DeepSeek rejection) | **converged.** The rejection was adjudicated `confirmed_nonfatal` and repaired anyway, because step-9 text is not frozen. Both lanes pass the repaired text. |
| `thm-separable-closures-exist-and-are-isomorphic-over-the-base`, `cor-cokleisli-and-coeilenberg-moore-…` | **rejected** twice, **repaired** once each | not twice-touched. Both round-1 findings were nonfatal and neither item was edited. |

**No item on this level was repaired twice for the same defect, and none was
repaired to correct an earlier repair's mathematics.** The one repair-introduced
defect (the axiom name in the distributive-law proof) was caught inside the same
stage by the adjudicating Alpha.

---

## Findings about the machinery, not the mathematics

This run is the `tools/autopilot/` engine's first end-to-end drive. These outlive
it.

**1. One of three group Alphas did not write its defect-ledger rows, and no gate
can see it.** Groups b and c wrote a row per adjudicated finding — 41 and 19.
Group a, owning batches 1–3 (207 items, the run's largest group), wrote **13
rows total and not one for the 58 fatal reader findings it audited and
accepted**. Batch 1 has **zero** rows of its own; batch 3 has four. The
consequence is concrete: the ledger's headline for this run — 91 rows, 28 fatal —
**understates the run's real 86 confirmed fatal defects by a factor of three**,
and any future query of `stats --by subclass` or `--leakage` for `frontier-15`
will be wrong about half the level. The `check` gate cannot catch it: its
step-6 clause requires only that step-6-caught rows *exist* whenever a 6b report
exists, and group a's 13 satisfy that. **Remedy: the clause has to compare
against something — the count of fatal findings the reader reports assert, or the
adjudication set — not against zero.** This is the run's most important
machinery finding, because the ledger is the artifact that was built precisely so
this account would be a query rather than archaeology.

**2. `judge-compare.mjs` cannot read this run.** The lane switch to
`deepseek+sonnet` (commit `ea0c10db`) updated the judge executors and
`level-coverage.mjs`. It did not update
`judge-compare.mjs`, whose `JUDGE_LINEUPS` still carries only
`deepseek+terra` — so `JUDGE_LINEUP=deepseek+sonnet` exits 2 with *"must be one
of deepseek+terra"*, and the default run dies at adjudication line 93, the first
`claude-sonnet-5` row, because `!models.includes(row.model)`. **This is the tool
the step-10 agreement table is supposed to come from.** I computed the agreement
and the per-lane outcomes directly from the ledger instead, and did **not** patch
the tool — changing a tool at the reporting stage to produce my own report's
numbers is the wrong direction. One-line fix: add
`"deepseek+sonnet": [DEEPSEEK, SONNET]` and default to it, as the other four
tools do.

**3. Step-0 findings, carried forward as the dispatch requires.** Three defects
were found and fixed before the run started:
- **The drift review was never dispatched.** `plan` wrote the task file, printed
  "dispatched as the first audit node", and no stage dispatched it and no gate
  read it. Now stage 1's `drift` unit plus a `drift-review-check.mjs` gate — which
  at step 10 reports *"8 page(s) reviewed, 2 spec edit(s) applied, no blocked
  edges"*, so the mechanism is live rather than merely present.
- **`plan --force` had a silent stale-ledger path.** `--force` was not forwarded
  to `manifest-integrity --write-ledger` and its stderr refusal was discarded, so
  `plan` reported success over a ledger owing 18 pages while the manifests carried
  16. Now forwarded, surfaced and fatal.
- **A design/spec route conflict removed a pair from scope.**
  `the-fundamental-theorem-of-algebra` (order 139): `plan-algebra-track.md` §II.8
  chose the Artin–Galois route requiring two unbuilt pages, while the spec still
  declared Part I's symmetric-polynomials route. Building either way was wrong —
  the design route cannot be built this run, and overriding a design's explicit
  route decision is not a session's call. The spec was corrected per §II.8 and the
  pair re-enters the frontier once the Galois pages publish. **This is the
  `design-spec-requires-drift` class caught at step 0 instead of at step 4**,
  which is what that stage is for.

**4. The drift review earned its keep twice more.** Two of the eight pages had
prerequisites the spec did not declare, and **neither was visible to a mechanical
pass** — both are design prose naming a notion rather than an id.
`algebraic-closure-embeddings-and-separability` needed
`def-algebraically-closed-field` (published at order 86, outside a closure that
stopped at 74) and a rational function field (order 53.2); without the second its
two central `𝔽_p(t)` counterexamples cannot be cited and the only alternative is
re-minting `Frac`. `the-fundamental-group-of-the-circle` needed
`fundamental-trigonometric-identities` (order 185) for the *surjectivity* half of
the circle parametrisation, which its declared trig page does not carry — the
design's own trap (i) asked for exactly that check, and on disk it failed.

**5. The step-3 loop is self-correcting, and it fired on 5 of 8 pairs.** All
three group Alphas returned `insufficient` on at least one pair: batch 2 (two
items resting on order-78 matrix machinery at order 71 — rebuilt natively in
coordinates), batches 4, 5 and 6 (well-definedness results five items consumed
but nothing established; an illegal `kind: "false_statement"` that would have
failed the step-4 splice; a missing rectangle theorem), and batch 7 (**four
blocks developed with no instance of the thing they define** — the comonad half
never exhibited a comonad, the distributive-law block never a distributive law,
the ultrafilter monad never computed). Every pair reached `sufficient` before the
splice. Three of those step-3 findings were **repaired by the Alpha itself** under
the 2026-08-16 licence, including a false planned title and a broken prerequisite
route — work that would have cost a rewrite at step 6.

**6. Three of the five step-8 fatal defects were already visible in the step-3
scaffold**, in the `title` or the `strategy`, before any proof existed:
`cor-algebraic-closures-…`'s title read "generally nonuniquely" verbatim;
`thm-extension-generated-by-separable-elements-is-separable`'s strategy read
"Iteratively adjoining separable elements and using transitivity" — the route
that does not close; `fs-subgroups-of-equal-p-power-order-are-conjugate`'s
strategy named "(12) and (12)(34)" verbatim. That is a direct hit on the three
questions the step-3 brief asks by name, and the stage was run by me. A fourth,
`cor-cokleisli-…`, had `formal-duality` as its entire `strategy` — which the
step-3 brief itself calls a finding. **Each would have cost a scaffold edit
there; each cost an adjudication, a repair and a rejudge here.**

**7. The chartered refuter lane died mid-run and the substitute has a silent
output ceiling.** GPT 5.6 Sol hit its Codex quota after group c's eight refuters
completed, locked until 2026-08-20; **8 of 16 Sol dispatches failed**, and every
failure was probed live rather than assumed. Groups a and b correctly refused to
silently substitute a model. The documented DeepSeek `audit-refuter` substitute
was then used **as a recorded cross-family substitution**, with
`tools/pack-refuter-task.mjs` (new) packing the item, its contract entry and its
dependencies' claim sections into the tool-less lane's `--task` file. It works,
but its output budget is the binding constraint: **7 items per dispatch returned
`finish_reason: length` with no report 5 times in 6**; re-packed at 3 items the
largest prompt fell from 212 KB to 56 KB, and even then **40 of 92 items could
not fit a reading in the output budget**. Of 38 DeepSeek dispatches, 24
succeeded. **A single item fits comfortably (31 KB, 362 s, exit 0).** The lesson
is the packing ratio, not the lane.

**8. A gate can be red for a real reason and still be the wrong gate — twice.**
`risk-report --require-reviewed` reported 125 unreviewed items while **33 of them
carried complete, substantive Alpha reviews under the key `disposition` instead of
`notes`**. The reviews were read before the key was renamed; nothing was
weakened or invented to clear it (`f15-a-rr-004`). Separately,
`defect-ledger check` was permanently red at step 8 for a structural reason: its
clause (d) cross-checked **every** `disposition: open` row against
`closure.open_fatal`, a field populated only from `confirmed_fatal`
adjudications, so a nonfatal open row could never satisfy it. Step 8 declined
both remedies — *"changing a gate that governs my own stage in order to make it
green is the anti-pattern the brief warns about"* — and it was fixed properly out
of band (commit `72465202`: scope the cross-check to fatal rows, `--no-open` as
the terminal backstop). **That refusal is the correct instinct and it produced the
right fix.**

**9. `finite-smoke` went from vacuous to live, and the missing piece was
judgement, not mechanism.** It reported *"0 error(s), 0 check(s) over 0/N
items"* across every batch — a green tick over an empty scope, flagged
independently by all three group Alphas. `gate-liveness` already reported
`VACUOUS` with a nonzero exit and commit `1a63bc0b` already routed that vacuity to
an Alpha; what was missing was *which check probes which claim*. Four checks were
then selected against the bar "the registry check must be able to **falsify that
item's own asserted claim**", and the selecting Alpha **verified its own
verifier**: it changed one word of one `asserts` field ("exactly two" → "exactly
three") and confirmed the tool dropped to 3 checks with `smoke-assertion-mismatch`,
then recomputed all the counts with an independent script. It also wrote down what
each check *cannot* reach — the `k ≥ 3` four-root clause of
`thm-unit-square-criterion-modulo-two-powers` has no primitive root and is outside
the search by construction, and it was checked by hand for exactly that reason.
**4 live checks over 4 of 329 items is still thin** (§Caveats), but it is 4 rather
than 0, and every decline carries its evidence.

**10. `splice-plan` is blind in two directions.** It refuses only on
manifest-declared edges the plan lacks — never on a **plan-missing** edge that an
item's `deps` induces, which is how `cor-cauchy-inequalities`' undeclared
`pi-the-equivalent-characterizations` prerequisite reached step 4 unflagged. And
its drift test (`--verify`, and `--dry-run`'s `same` test) compares **item ids
only**, so a `deps`-or-`strategy`-only change in a manifest is reported "already
correct" and never propagates to the plan. Step 4 mirrored two repaired item
objects into `plan-spec.json` programmatically to work around it. Both are engine
notes the step-4 report already raised; neither is fixed.

**11. `b-leaf` is a real trap the scaffold cannot see, and it fired four times.**
A dep on a published **examples-page** item is a hard `validate-plan` error
whatever the page-level `requires` says. Two of step 4's three splice refusals
were this defect wearing a reading-order costume — applying the refused edge would
have left the gate red and hidden the real problem — and two more surfaced in
batch 3, on a batch that spliced cleanly. All four were repaired by building the
route natively from A-homed items. It bit again at 6b, where Alpha-b's first
repair of `fs-every-subset-of-r-is-borel` cited `ex-the-cardinality-of-the-continuum`
and `depcheck` rejected it — **the gate doing its job and forcing the honest
route** (through the Cantor set, both of whose inputs are A-page results) rather
than the convenient one.

**12. Two detectors were written only after a class appeared twice, and both
found more than the hand-read sample.** The choice-principle detector found F2 and
F3 plus one false positive over 207 items; the announcement-step detector found 50
candidates triaged to 21 real, one of them the Sylow I fatal. Both are the
`alpha-finding-lists-become-fix-scope` rule working. **And two scans were
themselves broken on first run** and reported meaningless zeros: a title-drift
regex matched the very title it was meant to flag (it became evidence only after a
self-test asserting the known-bad title flags and the repaired one clears), and a
manifest-versus-item comparison reported 30 phantom mismatches by comparing raw
YAML against JSON-parsed values. Both were caught by their own authors. **A
zero-hit scan with no positive control is not a finding**, and that sentence is
now in a ledger `prevention` field.

**13. A source can be wrong and a harvest can silently repair it.** Batch 4's
harvested heading read *"Definition 1.1.36, equivalent complement-and-disjoint-union
formulation of a lambda-system"*. Dembo's Remark, read from the PDF at printed
p. 15, offers complement-closure **instead of** the difference clause while
keeping increasing limits — **and that system is not equivalent**: on
`X = {1,2,3,4}`, `𝒟 = {∅,{1},{1,2},{3,4},{2,3,4},X}` contains `X`, is closed
under complements and under increasing unions (finite `X`), yet
`{1,2}∖{1} = {2} ∉ 𝒟`. The harvest had silently written the form that *is*
equivalent. Two defects in one row, and the harvest's version is the true one.
This survived the step-6 harvest-faithfulness read **because the heading is more
plausible than the source.** Nothing mechanical will catch that; opening the exact
locator will. The independent DeepSeek refuter checked the witness element by
element and added the correct precision that it refutes that form only.

**14. A reader-facing citation and the artifact a gate reads can disagree
indefinitely.** `rem-plane-star-shaped-and-convex-dictionary` cited a dead
archive snapshot of Lebl's `ca.pdf`. Commit `1be001f2` swapped the **coverage
row** to the recovered origin with a `fetch_verified` byte count — and **the item
was never swapped**, so the reader-facing citation stayed broken while the file
`url-sweep` reads was green. Closed at step 9 as a URL swap under RECOVER BEFORE
REPLACE (same document, same source, no re-harvest, no provenance change) once
the okstate host outage ended; verified by hand at 200, `application/pdf`,
2,078,845 bytes matching the coverage row exactly. **The gate's scope was the
gap, not its verdict.**

**15. `precheck`'s canonical stratification interleaves an iff proof's two
branches, and a branch label in a heading is then false.** A DeepSeek rejection
of the step-9 λ-system proposition read *"Step 2.1 is placed after the
'Conversely' switch but cites step 1.1, which was proved only under the
lambda-system assumption."* The citations make the branch unambiguous, so the
mathematics was licensed — but the lane read the prose correctly: stratification
orders steps by citation depth, not narrative direction, so the branches
interleave as 1.1/2.1/3.1 and 1.2/2.2/4.1 and step 1.2's opening "Conversely"
appears to scope everything after it. **Generalisable: in any two-direction
proof the branch label must be inside each step, never in a heading or a single
opening word.**

**16. The Sonnet judge lane is reliable at the verdict and unreliable at the
transport.** 626 attempts produced 434 completed responses and **192 process
failures**; of the completed ones, **92 wrote a null verdict — 64 a session-limit
`NO_CONTENT` and 28 `UNPARSEABLE`**. The 28 are the interesting ones: every one
begins *"Flagged: keep=false"* or *"Verdict: **keep=false**"* — real rejections
lost to verdict parsing. All 92 were resolved by the mechanical re-sweep and
**0 nulls remain at the latest attempt**, so nothing was lost; but a lane that
loses a stated rejection to a parse is one re-sweep away from losing it for good.
By contrast DeepSeek took 409 attempts for 406 responses.

**17. `defect-ledger.mjs`'s `caught_by_role` enum has no `judge-sonnet`.** It
carries `judge-deepseek` and `judge-terra`, from the mid-run lane switch. It did
not bite — all five step-8 fatals were DeepSeek's — but **the next Sonnet-only
fatal cannot be attributed honestly.**

**18. `content-policy --manifest-only` structurally cannot pass after
authoring**, and correctly is not a step-10 gate. Run at step 10 it reports
`batch-item-already-exists` on all 398 ids, because `--manifest-only` is the
*pre-authoring* shape. The item-mode form is the one that matters and it is green
at 398 scoped, 0 errors. Recorded because a session that reaches for the wrong
form reads 398 errors as a catastrophe — 6c hit exactly that and said so.

---

## Verification state

Every gate below was re-run by me at step 10 against the current disk state.

```
### the terminal stage's own gate set
precheck                4269 checked, 0 failing        exit 0
depcheck                exit 0 — no cycles, all refs resolve, no draft on a published page
fwdcheck                exit 0        extcheck        exit 0
rendercheck             exit 0 — 5692 files, real KaTeX, real YAML
prosecheck              exit 0 — 5692 files, 0 errors, 571 heuristic warnings
depsource               exit 0 — 0 unresolved over 24753 deps
manifest-integrity      exit 0 — 16 page(s) owed, 16 in the manifests, no scope drift
splice-verify           exit 0 — 16 pages across 7 manifests, plan and manifests agree
level-coverage --verify-current-context
                        exit 0 — 398 items, 329 proof-bearing, 1451 declared
                        relationships, 398/398 required judge pairs; 142 warnings,
                        every one `judge-verdict-adjudicated-nonfatal`
judge-closure           exit 0 — 398/398 current pairs; needs_rejudge [], 
                        unadjudicated [], open_fatal []; closed: true, no allowances
defect-ledger check     exit 0 — 91 rows, 0 errors
defect-ledger check --no-open
                        FAIL exit 1 — 1 error, f15-a-rr-005 open (§Publish readiness)

### the quality-control gates (step 9's set, re-run here)
proof-contract --strict         exit 0 — 0 errors, 0 warnings, 329/329
finite-smoke                    exit 0 — 4 checks over 4/329 items; see caveat 3
risk-report --require-reviewed  exit 0 — 0 errors, 329 items routed
boundary-audit --fail-on-contradicted --fail-on-template
                                exit 0 — 2632 rows, 1533 not_applicable, no cluster
                                ≥3, no contradicted row, 2 upheld on the record
citation-fidelity --fail-on-missing-quote
                                exit 0 — 1213 citations over 329 items, no missing
                                quote, no widening candidate
gate-liveness --min-checks 1    exit 0 — finite-smoke 4 · proof-contract 329 ·
                                coverage-checklist 740 · precheck 4269, all live
coverage-checklist × 7          exit 0 — 84/157/108/65/57/92/177 = 740 harvested, 0 errors
content-policy (item mode)      exit 0 — 398 scoped, 0 errors, 0 warnings
url-sweep --recover --fail-on-dead
                                exit 0 — 42/42 live, 0 failed, 0 recoverable, 0 suspect
source-fetch-check              exit 0 — 42/42 sources fetch-verified
validate-plan                   exit 0 — 300 pages with item lists, acyclic, no
                                forward refs, no B-page deps, no unresolved ids
drift-review-check              8 pages reviewed, 2 spec edits, no blocked edges
spine-audit --receipt           exit 0 — 58 proof-bearing items in the top-100 cones

### gates from earlier stages, re-run for the record (not step-10 gates)
impact-audit --receipt          FAIL — receipt is one stage stale; see caveat 5
step8-guard --baseline pre-step8
                                FAIL — one `nonfatal-edit`; see caveat 6
content-policy --manifest-only  FAIL by construction after authoring; machinery finding 18
```

### Judge outcomes, not rates

**1,688 verdict rows over 3,387 lane attempts.** Latest attempt per (item, lane):

| | DeepSeek V4 Pro | Claude Sonnet 5 | GPT 5.6 Terra (retired) |
|---|---|---|---|
| items with a latest verdict | 398 | 398 | 392 |
| passes / rejections | **309 / 89** | **345 / 53** | 0 / 0 |
| nulls at latest attempt | **0** | **0** | **392** |
| ledger rows / attempts | 406 / 409 | 498 / 626 | 784 / 2,352 |

**Terra contributed zero usable verdicts.** All 2,352 of its attempts failed with
`codex_exit` — the throttled Codex account that caused the mid-run lineup change.
Its 784 null rows stay in the ledger as append-only evidence and satisfy no
coverage.

Latest-attempt agreement over the 398 items: **both pass 286, both reject 30,
DeepSeek-only 59, Sonnet-only 23, incomplete or null 0.**

**Adjudication — 149 rows over 116 distinct items:**

| outcome | DeepSeek | Sonnet |
|---|---|---|
| `confirmed_nonfatal` | 88 | 53 |
| `confirmed_fatal` | **5** | **1** |
| `false_positive` | 2 | 0 |

**6 fatal rows over 5 distinct items — 3 `logic`, 3 `other`.** DeepSeek found all
five; Sonnet found one, which DeepSeek also found
(`thm-extension-generated-by-separable-elements-is-separable`, and both stated it
precisely). **No Sonnet-only rejection was fatal.** Sonnet shares the Anthropic
family with me, and step 8 weighted its findings accordingly as CLAUDE.md
requires; it made no difference to the outcome. **On this run the cross-family
screen is the one that bit** — the reverse of `frontier-14`, where the GPT lane
found more.

The rate is **6 fatal rows against 149 adjudicated rejections, 4.0%** (step 8
computed 4.1% against the 145 it read in round 0; round 1 added 3 and step 9 one
more, all nonfatal). `frontier-13` and `frontier-14` resolved 41%/31%/33%
rejection rates to 2.7%/7% confirmed fatal.
The band is the only thing that number is evidence for — that the 30-second
threshold was applied roughly where it was applied before. **What matters is the
five defects and what changed on disk**, above.

**The dominant nonfatal class, named because it is mechanically detectable and
was not detected.** Nearly all 141 nonfatal rejections are one shape: step 1.1
carries every `[L#]` the item declares and steps 2.1 onward carry only
`[step 1.1, given, algebra]`, even where they use a specific named fact printed
three lines above. Both lanes flagged it independently on
`cor-classification-of-groups-of-order-one-hundred-five`,
`thm-groups-of-order-thirty-…`, `thm-frattini-argument`,
`thm-fitting-subgroup-of-the-frattini-quotient`, `thm-wedderburn-artin-theorem`
and a dozen more. It is nonfatal item by item and it is **the single largest
reason this level drew 145 rejections.** A `proof-contract` check flagging a step
whose input bracket names more than half the item's declared facts would find it;
that shotgun bracket is also how the Sylow I contract passed its coverage check
over an announcement step.

### The defect ledger

`node tools/defect-ledger.mjs stats --run frontier-15 --leakage --recurrence` and
`render` were both run; `research/DEFECT-LEDGER.md` is regenerated and its
fingerprint matches.

| | |
|---|---|
| rows for this run | **91** — 28 fatal, 49 nonfatal, 14 polish |
| dispositions | 80 `fixed`, 8 `nonfatal-recorded`, 1 `narrowed`, 1 `false-positive`, **1 `open`** |
| class | 83 `accuracy`, 6 `richness`, 2 `silent-runtime` |
| caught at | 44 `6a-read`, 29 `6b-adjudicate`, 6 `6c-cross`, 6 `9-scope`, 5 `8-adjudicate`, 1 `7-judge` |
| caught by | 44 reader, 20 group-alpha, 12 lead-alpha, 9 refuter, 6 judge-deepseek |
| top subclasses | 16 `false-boundary-disposition`, 16 `citation-missing`, 12 `citation-inflated`, 9 `citation-misattributed`, 7 `false-or-overstrong-statement`, 5 `invalid-inference` |
| **recurrence flags** | **none** |

**Leakage: 32 of 33 rows carrying a `should_have_caught` leaked past it.** The
two pairs that matter:

- **`3-review → 8-adjudicate`, 3 rows** — the three step-8 fatals already visible
  in the scaffold (machinery finding 6).
- **`3-review → 9-scope`, 4 rows** — the four false declines step 9 overturned,
  each of which step 3 could have seen from the coverage file.
- `6a-read → 6b/6c/8/9`, 21 rows — the largest bucket, and the expected one: a
  reader misses, the adjudicating Alpha catches.

**Read every ledger number in this run against machinery finding 1.** The row
count, the fatal count, the subclass histogram and the leakage pairs are all
correct about batches 4–7 and materially incomplete about batches 1–3.

---

## Caveats — everything I could not verify, or verified thinly

1. **Independent refuter coverage is absent on 141 of 398 items, and partial on
   112 more.** Precise, from the 213 `risk_review` records on disk:

   | batch | items | reviews | independent refuter |
   |---|---|---|---|
   | 1 | 27 | 21 | **none** (7 records say so; 14 have no refuter field) |
   | 2 | 112 | 67 | 39 name a DeepSeek refuter; 27 say "none — lane quota-locked" |
   | 3 | 72 | 42 | **all 42** name a DeepSeek refuter |
   | 4–6 | 114 | 58 | **none** — 53 of the 58 notes say so explicitly |
   | 7 | 73 | 25 | **24 of 25** name their `c-refuter-N` (8 Sol refuters, full coverage) |

   So **batch 7 has genuine full independent refutation, batch 3 nearly so, batch
   2 partially, and batches 1, 4, 5 and 6 have none.** Those 141 items have one
   independent reader plus the owning group Alpha's own adversarial read — which is
   a real read, and the group Alphas were right to refuse a silent model
   substitution — but the *independence of the evidence* is missing, and it
   includes group a's own three repairs. **Nobody adversarially read the Sylow I
   proof group a wrote.** I read it myself at step 10 and it is correct, which is
   one more reader and still not an independent refuter. Group b's eight refuter
   task files are written and ready to dispatch after 2026-08-20.

2. **The group Alphas' 6b adjudications were not re-verified**, by 6c or by me.
   ~180 findings were adjudicated from disk by three Alphas; the lead took their
   verdicts and closed only what they referred up. I spot-verified six of the
   highest-stakes repairs on disk at step 10 (all five step-8 repairs, the Sylow I
   rewrite and the monads page summary) and all six are what their reports say
   they are. That is a sample, not a re-audit.

3. **`finite-smoke` covers 4 of 329 proof-bearing items.** It is live rather than
   vacuous, every check can genuinely falsify its item's own claim, and each
   decline carries evidence — but 4/329 is not coverage, and the batches with the
   most bounded-finite material (batch 2's Sylow numerics, batch 7's finite monad
   computations) carry none. What substitutes for it in batch 7 is hand
   computation by refuters, recorded in the reports. **Report it as thin, not as a
   passed gate.** Extending the registry is an owner decision.

4. **`boundary-audit`'s template detector is defeated by this run's templates, in
   two different ways.** Batch 2's ~450 generated rows interpolate each item's
   own title, so no cluster forms; batch 7's 70 rows share the tail *"… is a
   one-way theorem or computation; adding a forward/reverse half would create a
   biconditional absent from its Statement"* and escape for the same reason. It
   reports **0 clusters** over both. Batch 7's 70 were independently re-tested
   with a wider biconditional net over all seven of the tool's patterns plus four
   more and returned nothing, so on the evidence they are a style concern. **A
   green result from that detector is not evidence about templating on this run.**

5. **The impact receipt is one stage stale.** `research/frontier-15-impact.json`
   records 392 changed interfaces and 347 dispositions from 6c; the same
   `pre-author → post-6b` window computes **350 affected today**, and
   `impact-audit --receipt` fails with three `receipt-missing-impact` rows — all
   three step-9 items that cite changed interfaces
   (`ex-the-group-action-monad-and-its-algebras`,
   `prop-complement-and-disjoint-union-axioms-for-a-lambda-system`,
   `thm-fitting-subgroup-contains-its-centralizer-in-a-finite-solvable-group`).
   **`impact-audit` is not a step-10 gate**, so this does not block; and I
   verified the *conclusion* independently rather than assuming it: every modified
   and every new file under `items/` carries `status: draft`, so **zero published
   items were touched**. Unlike `frontier-13`, the baseline here was taken
   correctly — at step 4, before any authoring, over 4,986 items.
   Its 347 dispositions are 342 `still-licensed` and 5 `repaired`, 0 pending, and
   6c's own note is explicit that the *semantic* reading of the 347 in-batch edges
   is attributed to the 6a reader and the owning group Alpha, not claimed by 6c.

6. **`step8-guard` reports one `nonfatal-edit`, and it is a stage-scope artefact
   rather than an unlicensed repair.** `rem-plane-star-shaped-and-convex-dictionary`
   changed after the `pre-step8` baseline with no fatal adjudication. I read the
   diff: it is **the one-line Lebl URL swap** described in machinery finding 14,
   made at step 9 under RECOVER BEFORE REPLACE — no mathematical content moved.
   `step8-guard` is a step-8 gate and legitimately cannot distinguish a step-9
   edit from an unlicensed step-8 one; the six step-9 creations appear as `WARN
   step8-creation` for the same reason. The item's hash moved, so it rejudged, and
   both lanes pass — which is why `judge-closure` is green.

7. **Harvest faithfulness is verified by text extraction for four sources and
   spot-checked for the rest.** Extracted and confirmed at their stated locators:
   Marker `dst.pdf` (Cor. 2.38 verbatim, and the repaired narrowing confirmed
   against Marker's own Definition 2.4), Riehl chapter 5 (100 rows spread
   25/25/7/10/16/17 across §§5.1–5.6, no section skipped), Richter chapter 6,
   Mac Lane VI§§1–5, Cheng §2, Judson pp. 220–228, Idelhaj §3 and Conrad `sylowpf`.
   **Not extracted:** batch 2's chain-conditions locators, batch 3's Milne and
   Clark ranges, and eight of batch 4–6's sources (Tao, Fremlin, Hatcher, May,
   Wise, Stein–Shakarchi, Lee, Howell–Mathews). The readers report having read
   them and every item's mathematics was verified independently of its source, but
   *does `contents` reflect the stated range* remains spot-checked for those.
   Machinery finding 13 is the reason this matters: the one place anyone opened a
   locator that nobody had opened, the source itself was wrong.

8. **Two source-quality deviations are recorded and not closed.** Batch 2's Sylow
   pair has a textbook (Judson) covering only three printed pages, so its
   **primary** backing remains lecture notes; the Alpha read pp. 222–228 itself
   and confirmed nothing standard is absent from the pair, so no result was lost,
   but the deviation from the batch task's own bar stands. And batch 7's Riehl
   §5.4 harvest names "Example 5.4.9 / Proposition 5.4.10 / Corollary 5.4.11"
   where the PDF snapshot has Proposition 5.4.9 / Corollary 5.4.10 — an off-by-one
   confined to *deferred* rows, no authored item citing a 5.4.x locator, on a
   living `context.pdf`. Flagged for the MA-4 scaffold.

9. **86 of 168 scope declines name no destination**, and nothing on disk records
   where they went. All 168 were tested against disk at step 9 and 161 stand, but
   the next sweep repeats this work. `coverage-checklist` requires a *reason* for
   every `deferred`/`out-of-scope` and does not require it to **resolve** to a
   page id in `plan-spec.json` or an item id on disk — the check that would have
   caught the Craven hole at step 2 rather than step 9. The
   `stands-no-destination-in-plan` count of **21 is a candidate total from a
   keyword pass**, not a finding count; **7 were individually verified** and are
   in §"Owner decisions".

10. **Batch 5's three excluded topology results live in the batch notes, not the
    coverage file.** π₁(Sⁿ) for n ≥ 2, van Kampen and the classification of
    covering spaces were excluded at *source-range selection* — the Hatcher
    locator stops before §1.2 — and the exclusion is recorded in prose at
    `research/frontier-15-batch-5.notes.md:452–455` naming
    `the-seifert-van-kampen-theorem` (297) and `classification-of-covering-spaces`
    (299), both of which exist. **The destinations are right and the reasoning is
    sound, and no gate reads that file.** Not repaired, because retro-fitting
    harvest rows for headings the declared range never covered would be inventing
    a harvest.

11. **`prosecheck`, `depcheck` and `citecheck` emit heuristic warnings that
    nobody triaged item by item.** 571 prosecheck warnings (206
    `library-scope-denial`, 190 `count-in-prose`, 175 `count-of-this-page`) and
    `depcheck`'s `cited-not-in-deps` warnings. I checked their scope rather than
    assuming it: **exactly one prosecheck warning lands on a run item**, and it is
    a false positive — `def-p-core-of-a-finite-group` trips `count-of-this-page`
    on the phrase *"If $A$ and $B$ are two of them"*, where "them" is the normal
    `p`-subgroups and not the page's items. The other 570, and every
    `cited-not-in-deps` line, are on legacy published items outside this run.

12. **28 items are missing a real `deps` edge, recorded and not repaired.** A
    judge named an existing library id appearing in neither the item's `deps` nor
    its Facts block, on 26 items at step 8 plus 2 more on rejudged text. Each is
    nonfatal — the target exists and a reader closes the step — but together they
    are a dependency graph that understates what the level rests on, and `deps` is
    what `depcheck`, the flowchart and the reader-facing `requires` are built from.
    **This is the level's most-repeated finding**, and it is step-6 work: declaring
    an edge is free before the text freezes. The full list is in
    `research/frontier-15-alpha-step8.md` §"Honest residue".

13. **A matrix-index convention drift across three items, deliberately not
    repaired.** `ex-matrix-ring-decomposition-into-minimal-left-ideals`,
    `thm-matrix-rings-over-division-rings-are-semisimple` and
    `fs-semisimple-rings-are-commutative` all use 1-based matrix indexing,
    agreeing with each other and disagreeing with the published `def-matrix-units`
    (`i < m`, `j < n`). Only one was judged. **Repairing that one would have fixed
    an instance and shipped the class**, so step 8 repaired none: this is a
    convention decision over a coherent cluster, and `def-matrix-units` or the
    three items should move together. Your call.

14. **A house-voice deviation, 90 items wide.** 90 of the 398 items end their
    Statement/Definition with a bare "See [[some-id]]" pointer. In the published
    corpus that pattern appears in **9 of 4,935 items** — 23% against 0.18%.
    `depcheck` reports 0 `cited-not-in-deps` on the run, so every pointer is a
    properly declared citation and renders as one; it is not a correctness defect
    and no ledger row was written for it (filing it as an accuracy defect would
    corrupt the statistic). But it is a visible stylistic shift across 16 pages,
    applied by more than one Beta, and **fixing it later is 90 real edits.**

15. **Corpus-wide "hom-set" usage, 34 published items.** `def-category` says
    "hom-collection"; 36 items say "hom-set", of which the two in batch 7 were
    repaired. Whether the published 34 should follow is a convention decision and a
    real edit per item, never a `sed` pass.

16. **"Morphism of adjunctions" is still undefined in the library.** Batch 7
    removed the *dependence* on it from the two Statements that carried it, so
    nothing rests on an undefined term, but the term appears in three items' prose.
    Defining it properly needs the category of adjunctions the library
    deliberately does not form; MA-4 is where Richter's Definition 6.3.8 would
    land if you want it.

17. **`library/measure-theory/` is a new library category and nothing in this
    repo can verify it renders.** `ARCHITECTURE.md` §7 says
    `library-categories.ts` carries a style for all 27 renderable groups and
    `loadCategories()` walks directories, so the two new pages should appear in the
    index with their hue and name immediately — but that file is in the app repo
    and `rendercheck` checks math and YAML, not category styling. **Check it in
    preview before publishing. This is a verification, not a restyle.**

18. **The run's content is largely uncommitted.** 392 of 398 items are tracked
    (commit `fc81a7f1`, steps 5–6b); the 6 step-9 builds, the 12 items edited at
    6c/8/9, and **all 16 `library/` page files** exist only in the working tree.
    Nothing publishes from git and the live site reads this directory, so this is
    not a correctness problem — but a `git clean` or a fresh clone loses the pages,
    and the commit is owed.

---

## Things the run did *not* need, which are worth knowing

- **Zero published items were modified.** No unambiguous falsehood was found in
  any published item this level cites, so
  `research/frontier-15-published-dependency-repairs.md` was never created and no
  certification is owed.
- **Zero cross-batch citations**, and 6c checked that this is the *correct* number
  rather than assuming it: no A page in the run declares another run A page in its
  `requires`, so a cross-batch citation would be an undeclared-prerequisite error.
  It then screened for the real risk — duplication — over ~66,000 normalised
  statement comparisons, and **the highest cross-batch overlap in the run is
  0.219**, on shared "smallest object containing" vocabulary. The three specific
  rhymes the group assignment named (σ-algebra generation ↔ closure-operator
  monad; circle degree ↔ winding number; batch 1's unit-group facts ↔ batches 2–3)
  were each read and recorded as deliberate non-edges.
- **Zero `forward_refs`, zero `external_refs`, one `proved_here: false`.** That
  one — `fs-the-borel-hierarchy-closes-after-two-steps` →
  `rem-the-borel-hierarchy-never-stabilizes` — has a complete, concrete
  `external_dependency` block: the URL matches a `sources.references` entry
  (Marker Cor. 2.38), `exact_statement` reproduces the strictness clause,
  `local_proof_attempt` names the specific obstruction (the diagonal proof needs
  universal Borel sets, which this level does not develop, and cardinality cannot
  separate the levels), and `necessity` explains why. `extcheck` passes.
- **Machinery was built rather than results dropped, four times.** Step 4 rebuilt
  the covariant power-set monad's naturality natively rather than citing a
  B-page-homed example; step 4 rebuilt the finite-ultrafilter argument from
  `lem-ultrafilter-prime` and A-homed items; the step-3 recheck rebuilt the
  Heisenberg and `Aut((ℤ/p)²)` examples in coordinates rather than reaching
  forward to order-78 matrix machinery; and step 9 built
  `def-centralizer-of-a-subgroup` — a definition the library simply lacked (it had
  only `C_G(x)`) — to rescue a declined theorem.
- **Step 9 overturned three scope declines and built all three**, plus three
  supporting items: the Philip Hall self-centralizing theorem for finite solvable
  groups (Craven Thm. 2.13 — **the only decline inside a fully harvested block**,
  which made the hole structurally visible without reading any mathematics), the
  group-action monad and its algebras (declined to a page at order 42 that could
  not receive a construction defined at 365.005), and the λ-system axiomatisation
  (declined for "no consumer" on a characterisation of a definition made on that
  same page). **All six proofs were authored by the lead Alpha, contracted, gated,
  risk-reviewed and rejudged.** Four of the six are high or critical tier and carry
  a complete `risk_review`, each written from the Alpha's own verification **before
  any refuter returned**, with the three DeepSeek refuters returning exit 0 and no
  findings as corroboration on the record.
- **One decline was rescued from being overturned by checking a rule rather than
  a claim.** Riehl's free-category monad on quivers looked like an overturn until
  the B-page leaf rule turned out to be a real and checkable obstruction: the
  published adjunction is B-homed, so no A-page item may cite it. It stands, and it
  is an owner decision because closing it needs a re-home.
- **Four declines stood on substance while resting on a claim false of disk**, and
  a reader following the reason would have looked in the wrong place. The Snake
  Lemma is **published at order 104**, *earlier* than the page declining it to "the
  later homological-algebra development"; Milne's choice-strength remark was sent
  to `order-zorn-and-the-axiom-of-choice`, whose 21 items contain nothing about
  weaker principles; Tao's Exercise 1.4.11 was sent to MT-5 when its content is
  MT-4 and Jordan content is already published, **the neighbouring row in the same
  file saying MT-4 correctly**; and the free-category monad was sent to a
  "categorical-graphs track" that does not exist. All four reasons rewritten.

### Owner decisions on scope — seven results with a real statement and nowhere to put them

Recorded, not invented around. Step 9 does not mint pages or change reading order.
Each was verified individually against `plan-spec.json`.

| result | source | what the plan lacks |
|---|---|---|
| Solovay–Strassen primality test | Shoup Ex. 12.6 | no `primality*`, `probabilistic-primality*` or cryptography page |
| Character sums over a complete residue system | Gorodnik Ex. 1.8, §2, Thm 2.1 | no `character-sum*` page |
| Which integers occur as Sylow counts | Conrad Rem. 2.9 | genuinely open research — no destination, and none should be invented |
| The free ring / monoid ring / tensor algebra | Cheng Ex. 2.3 | no `free-ring*`, `monoid-ring*` or `tensor-algebra*` page; the decline's claim that the library builds commutative polynomial rings only is true of disk |
| Lawvere theories, category of models | Riehl 5.5.5, 5.5.vii | no `lawvere*` or `universal-algebra*` page |
| Affine spaces | Riehl 5.2.1–5.2.3 | no `affine-geometry*` or `affine-space*` page |
| Free-category monad on quivers | Riehl 5.1.4(vi) | no quiver page, **and** it needs a re-home of a published B-page item, which is owner-only |

A near miss worth naming: the Giry monad and Markov kernels (Riehl 5.1.5(iv),
5.2.11(iv)). `markov-kernels-and-markov-chains` is planned at **288.125**, well
before MA-3 at 365.005, so the prerequisites will exist — but they are not in
MA-3's `requires` and no categorical-probability page exists to host the monad.
The decline is right today and will not be right forever.

---

## What I recommend you read personally

1. **The open row, `f15-a-rr-005`** (§"Publish readiness"). It is the only thing
   in the run asking you for a decision, and the decision is genuinely yours: a
   Beta rewrite, an accepted deviation, or an overridden gate.
2. **`cor-cokleisli-and-coeilenberg-moore-have-the-dual-extremal-universal-properties`**
   — the run's one outright inverted Statement, on the sole basis that both
   universal properties pointed the wrong way and step 2.1 asserted a false
   principle to justify it. It is correct now and matches its own sibling and
   Riehl; it is worth your eye because *nothing but a judge could have found it*
   and only one lane did.
3. **`thm-sylow-first-theorem`** — a landmark whose proof announced its two
   load-bearing inferences instead of performing them, and whose contract's
   shotgun citation bracket is what let every gate pass over it. The rewrite is
   correct (I read it), it is source-verified against two extracted PDFs, and
   **no independent refuter has ever read it.**
4. **The batch-3 choice class, in outline** — 15 fatal findings, 23 titles and 12
   Statements. It is the single largest coherent defect class in the level and it
   is the class `frontier-14` also had; it is worth confirming you agree with the
   convention of putting the choice principle in the title, since ~40 published
   items already do.
5. **Two `not_applicable` boundary rows of your choosing, from batch 2.**
   `frontier-13` and `frontier-14` both asked this and both found a false row
   concealing a fatal defect. This run's targeted detector found 2 real false rows
   out of 18 candidates and **neither concealed a mathematical defect** — which is
   the first time that answer has come back clean, and worth one independent
   sample.
6. **The matrix-index convention** (caveat 13) and the **90 "See [[…]]" trailing
   pointers** (caveat 14). Both are cheap now and expensive later, and both are
   convention calls that are not mine.

---

## What has to happen before this level can publish

In order. Only item 1 is an owner decision.

1. **Decide `f15-a-rr-005`** — dispatch a Beta to rewrite batch 2's ~450
   generated boundary rows, or close the row as an accepted deviation with that
   reason on the record. Until one of those happens, the terminal
   `defect-ledger check --no-open` gate is red.
2. **Optionally, re-run the refuter lane after 2026-08-20** over batches 1 and
   4–6 (141 items). Group b's eight task files are written and ready.
   `pack-refuter-task.mjs` should pack **one item per dispatch**, not three.
3. Regenerate `research/frontier-15-impact.json` from `pre-author → post-6b` and
   disposition the three step-9 consumers (mechanical; the conclusion is already
   verified).
4. Commit the working tree — the 16 page files, the 6 step-9 items and the 12
   edited items.
5. Verify in preview that `library/measure-theory/` renders with a hue and a name
   (caveat 17).
6. `level-coverage --verify-current-context` re-run green after any of the above
   changes text, then `apply-judge-stamps --apply`, then the owner audit sets
   `verification.audited` and `status: published`.

**Nothing I have written flips a `status` field.** On the mathematics: 86
confirmed fatal defects found, 86 repaired, none open; both judge lanes current
on all 398 items with no unadjudicated rejection and no open fatal finding. **The
level is publishable on its mathematics.** The one thing standing in front of it
is a contract-quality row that needs your decision, and the one thing I would
want closed before I called it finished is independent refutation of the 141 items
that never got any.
