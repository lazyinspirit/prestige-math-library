# frontier-13 — Alpha group a, step 6b adjudication (batches 1, 2, 5)

Reader reports adjudicated: `frontier-13-reader-1.md` (batch 1),
`frontier-13-reader-2.md` (batch 2), `frontier-13-reader-5.md` (batch 5). The
dispatch named a single file `research/frontier-13-reader-1 2 5.md`; no such file
exists. The seven reader reports are `frontier-13-reader-<n>.md` and reader *n*
audits batch *n*, so batches 1, 2 and 5 are readers 1, 2 and 5. Recorded here
rather than silently reinterpreted.

**34 findings adjudicated: 6 `confirmed_fatal`, 28 `confirmed_nonfatal`, 0
`false_positive`.** 38 items repaired. Every fatal claim the readers made in
these batches survived checking; two reader *remedies* did not, and one reader
under-called a defect. Details below.

---

## 1. Confirmed fatal (6)

Each was checked by opening the item and the cited dependency.

### F1 · `cor-symmetric-polynomial-values-on-roots-lie-in-the-base-field` (reader 1, finding 1)

False uniqueness in **both the title and the Statement**. The Statement asserted a
unique `Q` satisfying only the *evaluated* equality; evaluation at a fixed tuple
is not injective. Reader's countermodel reproduced: `R=Z`, `n=1`, `f(t)=t`,
`α₁=0`, `P(x₁)=x₁` — both `Q=0` and `Q=T₁` satisfy it.

**Changed:** uniqueness moved to the formal identity `P=Q(e₁,…,eₙ)` that
`thm-fundamental-theorem-of-symmetric-polynomials` actually supplies; the
evaluated equality is now stated *for that Q*; the title drops "unique"; step 3.1
states plainly that the evaluated equality alone does not determine `Q`.

### F2 · `lem-leading-multidegrees-of-elementary-symmetric-monomials` (reader 1, finding 2)

Missing hypothesis. `def-ring` explicitly admits the zero ring ("Nothing above
requires `1 ≠ 0`"), and `def-lexicographic-order-and-polynomial-multidegree`
defines a leading multidegree **only for a nonzero polynomial** — its title says
so. Over the zero ring every `eₖ` is `0`, so the asserted leading multidegree does
not exist.

**Changed:** Statement and Given now assume `1 ≠ 0` and say why. Both consumers
were opened and **remain true for every commutative ring**: each invokes the
lemma only after producing a nonzero polynomial, which itself forces `1 ≠ 0`.
That one-clause observation is now written into
`thm-elementary-symmetric-polynomials-are-algebraically-independent` step 2.1 and
`thm-fundamental-theorem-of-symmetric-polynomials-existence` step 1.1, so no
theorem was weakened.

### F3 · `prop-elementary-and-complete-generating-series-identity` (reader 1, finding 3)

Inflated citation. `def-elementary-symmetric-polynomials` gives the subset-sum
formula, `e₀=1`, `eₖ=0` for `k>n` — and **not** the product identity
`Σ(−1)ⁱeᵢtⁱ = Π(1−x_j t)` that `[L1]` attributed to it and that step 3.1 needs.

**Changed:** `[L1]` restates the definition faithfully; a new step 1.1 *proves*
the product identity by the subset expansion. Alpha chose the inline derivation
over the reader's suggested `thm-vieta-expansion-in-elementary-symmetric-polynomials`
because the Vieta form needs a reindexing this item does not carry — citing it
would have replaced one inexact citation with another.

### F4 · `cor-discriminant-as-a-resultant-with-the-derivative` (reader 1, finding 5)

Inflated citation. `def-formal-derivative-of-a-polynomial` defines the
coefficientwise derivative only; it does **not** state the product rule that
`[L3]` claimed and that step 1.1 needs to differentiate the split product.

**Changed:** `[L3]` restated faithfully; new `[L4]` cites
`prop-formal-derivative-laws` clause 3, which does state `(fg)'=f'g+fg'`; step 1.1
derives `f' = Σᵢ Π_{j≠i}(t−α_j)` by iterating Leibniz over the `n` factors.

### F5 · `ex-matrix-algebra-extension-of-scalars` (reader 5, finding 1)

Inflated citation carrying the whole isomorphism claim.
`thm-tensor-product-basis-from-bases` gives an **R-basis of `M⊗_R N` from
R-bases of both factors over the same ring**. `[L4]` inflated this into the
*scalar-extension* statement that an `F`-basis `(uᵢ)` yields the `K`-basis
`(1⊗uᵢ)` — a different theorem, with no `F`-basis of `K` among the inputs.

**Changed** per the brief (citation not inflated further, no unused dep added):
the basis route is replaced by an **explicit inverse** `S(B)=Σ b_ij ⊗ E_ij`.
`[L4]` now cites `prop-elementary-tensor-formulas-descend-exactly-when-balanced`
for the descent of `T`; `[L6]` cites `def-restriction-and-extension-of-scalars`
for the `K`-action and for moving an `F`-scalar across the balanced tensor. Both
composites checked on generators.

### F6 · `ex-extension-of-scalars-of-coordinate-modules` (reader 5, finding 2)

Same inflation: `[L3]` read a `K`-basis of `K⊗_F Fⁿ` out of the same-ring
product-basis theorem. The "in particular" is not an instance of that Statement.

**Changed:** explicit inverse `S((k_j)) = Σ_j k_j ⊗ e_j`; `[L3]` recited to the
descent proposition; both composites checked on generators; `n=0` handled by the
empty sum.

---

## 2. Confirmed nonfatal (28), all polished here

Step 8 will not permit these later, so they were closed now.

**Batch 1 (reader 1).** `thm-newtons-identities` (4) — step 3.1 justified a *true*
identity by differentiating `E(−t)H(t)=1`, which needs a derivative of the
infinite series `H` and literally yields `−E'(−t)H+E(−t)H'=0`; the ambiguous
`E'(−t)` notation is replaced by `G(t):=E(−t)`, a polynomial, `[L4]` now cites
`prop-formal-derivative-laws` for the Leibniz rule step 1.1 really uses, and
step 3.1 multiplies step 2.1 by `G(t)` instead, taking no derivative of `H`.
`thm-finite-fields-have-prime-power-order` (6) — uniqueness of `(p,n)` was not
proved; now via `cor-euclids-lemma-for-finite-products`.
`thm-factorization-of-x-qn-minus-x` (7) — root existence, "`P` is the minimal
polynomial", and minimal-polynomial divisibility all supplied
(`lem-adjoining-one-root-reduces-the-unsplit-degree`,
`thm-evaluation-kernel-and-minimal-polynomial`).
`cor-irreducible-polynomials-exist-over-finite-fields-in-every-degree` (8) —
algebraicity of `a` now established before its minimal polynomial is named.
`thm-quadratic-tower-characterization-of-algebraic-constructibility` (9) — degree
exactly two now argued by divisibility of `t²−a`.
`ex-f-eight-as-a-polynomial-quotient` (10) — four literal `quad` fixed.

**Batch 2 (reader 2).** Nine provenance retags `literature-derived → ai-altered`
(PR-1…PR-6, SD-1…SD-3), each a material abstraction, domain extension,
convention change or added boundary case relative to the cited source. Plus
citation repairs: `thm-structure-of-the-unit-group-modulo-n` (PR-7, both halves),
`lem-primitive-roots-pass-between-odd-n-and-twice-n` (PR-8),
`thm-automorphisms-of-a-finite-cyclic-group` (SD-4),
`lem-groups-of-order-pq-have-a-normal-q-subgroup` (SD-5, both halves),
`lem-order-p-actions-on-a-cyclic-q-group` (SD-6),
`prop-holomorph-recognises-regular-normal-subgroups` (SD-7),
`thm-internal-external-semidirect-product-equivalence` (SD-8),
`thm-carmichael-function-formula` (PR-9, `qquad` typo).

**Batch 5 (reader 5).** Findings 3–7 were one class: a **first-variable**
direct-sum / right-exactness theorem applied in the **second** variable. Rather
than bridging with symmetry separately in three consumers, the second-variable
clause was proved **once at the source**:
`thm-tensor-products-commute-with-arbitrary-direct-sums` now also states
`Φ′: ⊕ᵢ(N⊗Mᵢ) → N⊗⊕ᵢMᵢ`, proved in a new step 5.1 by conjugating `Φ` with the
symmetry `σ` of `thm-symmetry-and-associativity-over-a-commutative-ring` — item 11
on the page against item 14, and not a dependency of it, so no cycle and no
forward reference. Findings 4 and 7 (`cor-tensor-product-with-a-quotient-ring`,
`cor-flat-modules-preserve-intersections-of-ideals`) took local `σ` bridges.

---

## 3. Where the readers were wrong

No finding was a `false_positive`, but three reader claims did not survive as
stated, and acting on them unchecked would have introduced defects.

1. **Reader 1, finding 6 — wrong remedy.** The reader proposed citing
   `thm-canonical-prime-factorisation`, "as the later
   `thm-uniqueness-of-finite-fields` already does". Opening it shows clause 1 is
   **conditional on a supplied injective covering list of primes**; it does not
   assert that every integer *has* a factorisation. Reader 2 independently caught
   the same misreading as PR-7. Euclid's lemma was used instead.
2. **Reader 2, SD-7 — half wrong.** "The proof silently upgrades this to a Given
   base point" is inaccurate: the Given already listed a base point and the
   Statement already said "After choosing `ω₀`". The *substantive* half was right —
   `def-group-action` defines transitivity as "every `x,y ∈ X` satisfy `g·x=y`
   for some `g`", vacuous on `∅`, so a faithful regular action on `Ω=∅` meets
   every hypothesis while no `ω₀` exists. `Ω ≠ ∅` added.
3. **Reader 2, SD-3 — under-called.** Filed as a nonfatal provenance label. The
   real defect was larger: the Statement asserted `Dₙ ≅ Cₙ⋊C₂` for every `n≥1`,
   but the library's only `Dₙ` is `ex-presentation-of-a-dihedral-group`, defined
   for `n≥3` as a subgroup of `Sym(Z/n)`, and **the proof never connected the
   two** — it constructs `Dih(Cₙ)` and reads off its structure. See §4.

---

## 4. A repair of mine that a gate caught

For SD-3 I first *proved* the `n≥3` identification `Dih(Cₙ) ≅ Dₙ` via von Dyck and
equal finite orders. `depcheck` rejected it — error `b-leaf-content`: an A-page
item may not depend on `ex-presentation-of-a-dihedral-group`, which lives only on
a B/examples page. The proof was sound; the dependency was not permitted.

I therefore **narrowed the claim** rather than patching around the gate, which is
what the brief prescribes when the honest route does not license the step: the
Statement is now about `Dih(Cₙ) = Cₙ⋊C₂`, fixes the notation `Dₙ` explicitly as
its own convention, and records the degenerate values (`Dih(C₁)≅C₂`;
`Dih(C₂)≅C₂×C₂`, inversion on `C₂` being the identity). All three consumers were
opened — each needs only `Dih(Cₙ)` — and their `[L]` restatements were aligned.

---

## 5. Source verification

Reader 2's provenance findings turn on source locators, so they were checked
rather than accepted:

- **Conrad, *Semidirect Products*** fetched and read with `pypdf`. **3.1 is
  "Definition 3.1"** of the external semidirect product; the recognition theorem
  is **Theorem 4.1**, stated in the **forward direction only**. The item's
  reference "Theorem 3.1" was wrong on both counts, and the `iff` packaging is a
  material extension. Corrected to "Definition 3.1 and Theorem 4.1". The batch's
  own source ledger independently records the same range.
- **PR-4 and PR-6** are corroborated verbatim by the batch notes: "Hackman starts
  from maximal element order; the scaffold proves those descriptions equivalent
  rather than silently identifying them", and "Several sources state the
  classification only for `n>1`".

---

## 6. Detectors written instead of hand-read samples

Two defect classes appeared twice, so each got a detector rather than a sampled fix.

- **Missing-backslash TeX macros** (reader 1 finding 10, reader 2 PR-9). Swept all
  213 group-a items and all ten page files against a macro list. Exactly **two**
  real instances corpus-wide in scope, both fixed; the other three hits were
  correct math (`\text{in }`, `(-1)^n e_n`, the composite `pi`). Page prose clean.
- **Citation faithfulness** — the dominant class this run
  (`tools/citation-faithfulness-screen.mjs`, new). Screens every `[F#]/[A#]/[L#]`
  restatement for operators and named functions absent from the cited item's own
  statement. Run over all 109 routed items: **91 clean, 18 candidates, 0 real
  defects** — every candidate was a notation artifact (`\cong` where the source
  states the isomorphism in words; unbraced `\mathbb`). Reported as candidates,
  never as a count of defects; the tool has low precision and is a screen, not a
  proof.

---

## 7. `risk_review` dispositions

`risk-report` routed **109** high/critical items in batches 1, 2 and 5 (60
critical, 49 high). **All 109 now carry a complete `risk_review`**
(`status: complete`, reviewer, notes) in the batch-1/2/5 contracts, written by
`research/frontier-13-alpha-a-risk-reviews.mjs`.

The records are per-item, not boilerplate: the 30 items with a step-6a finding
carry that finding, its verdict and the exact repair; the rest carry the tier, the
scoring signals, the reader's coverage and the screen result.

**Each record states its own limitation explicitly**, because a `risk_review` that
overclaims is worse than none: the disposition rests on the independent reader's
full read (87/87, 77/77, 49/49 items plus cited dependencies), on Alpha's
adjudication of every finding raised, and on the gate set — **not** on a line-by-line
re-derivation of all 109 proofs by Alpha. The gap the gates do not close is
precisely the one this run exploited: `proof-contract` checks that a citation's
*quote* matches its source, not that the surrounding `[L#]` *prose* restates the
quote faithfully. That is why the readers, not the gates, found the ten
inflations, and why every flagged citation here was re-read against its source by
hand.

---

## 8. Gates after repair

Run from the repo root after all edits.

| gate | result |
|---|---|
| `precheck.mts` (all items) | `3646 checked, 0 failing — all clean` |
| `proof-contract --strict` | `0 error(s), 0 warning(s), 390/390 item(s) checked` |
| `content-policy` (batches 1/2/5) | `213 scoped item(s), 0 error(s), 0 warning(s)` |
| `coverage-checklist` (batches 1/2/5) | `5 page(s), 351 harvested result(s), 0 error(s), 0 warning(s)` |
| `finite-smoke` (edited items) | `0 error(s), 3 check(s)` |
| `risk-report --require-reviewed` | 0 errors inside batches 1/2/5; 109/109 reviewed |
| `depcheck` | `OK — no cycles, all references resolve, no draft items on published pages` |
| `fwdcheck` | `OK — every forward reference is declared, points strictly forward…` |
| `extcheck` | `OK — every recorded-not-proved statement is a cited remark…` |
| `rendercheck` | `OK — 4916 file(s)` |
| `url-sweep --recover --fail-on-dead` | `19/19 live; 0 failed; 0 recoverable` |

Two notes on the shared artifacts, so the numbers are not misread:

- Contract entries were regenerated for **77** items — the 38 edited plus 39 whose
  `[L#]` quotes cite an item whose statement changed — using
  `tools/regen-contract-entries.mjs` (new), then re-merged with
  `merge-proof-contracts.mjs`. Regenerating the quote is required: a changed
  Statement silently breaks every contract quoting it.
- `proof-contract --strict` reported **172 errors in batches 4 and 6** partway
  through this session, none of them in my batches and none tracing to anything I
  changed (verified: no failing item cited an item I edited). Those files were
  written at 14:43:46 and 14:44:11 by the group b/c Alphas running concurrently,
  immediately before my final merge at 14:44:27, and the level-wide `0 errors`
  above is therefore a **joint** result, not mine alone. The merged file is shared
  state under concurrent write; it is deterministic from the seven batch files, so
  it converges as long as each group re-merges from them.

---

## 9. Per-page verdicts

| page | kind | items | verdict |
|---|---|---:|---|
| `symmetric-polynomials` | A | 29 | **PASS after repair** — 4 fatal confirmed and repaired (F1–F4), 1 nonfatal polished |
| `symmetric-polynomials-examples` | B | 9 | **CLEAN** — no finding raised, none found |
| `algebraic-extensions-degree-and-finite-fields` | A | 35 | **PASS after polish** — no fatal; 4 nonfatal closed |
| `algebraic-extensions-degree-and-finite-fields-examples` | B | 14 | **PASS after polish** — 1 rendering defect fixed |
| `primitive-roots-and-unit-groups-modulo-n` | A | 28 | **PASS after polish** — no fatal; 6 provenance retags, 3 citation/typo repairs |
| `primitive-roots-and-unit-groups-modulo-n-examples` | B | 11 | **CLEAN** |
| `semidirect-products-and-automorphism-groups` | A | 23 | **PASS after repair** — no fatal; 3 provenance retags, 5 citation repairs, 1 Statement narrowed (§4) |
| `semidirect-products-and-automorphism-groups-examples` | B | 15 | **CLEAN** (3 consumer restatements aligned to the narrowed §4 Statement) |
| `tensor-products-of-modules` | A | 38 | **PASS after repair** — no fatal; second-variable clause proved at source, 2 local `σ` bridges |
| `tensor-products-of-modules-examples` | B | 11 | **PASS after repair** — 2 fatal confirmed and repaired (F5, F6) |

**Findings adjudicated: 34** (6 `confirmed_fatal`, 28 `confirmed_nonfatal`,
0 `false_positive`). **Items repaired: 38.** **`risk_review` written: 109.**

## 10. Open items for the orchestrator

- Nothing is blocked in batches 1, 2 or 5; all gates pass and the level can
  proceed to step 7 for these pages as far as group a is concerned.
- Two new tools are checked in and are generally useful, not run-specific:
  `tools/regen-contract-entries.mjs` and
  `tools/citation-faithfulness-screen.mjs`. If they are to be kept,
  `ARCHITECTURE.md` §3 needs an entry each, in the same commit, per the
  keep-the-docs-current rule.
- `tools/regen-contract-entries.mjs` encodes a real constraint discovered here and
  worth knowing: `proof-contract` reads only a numbered step's **first line**, so a
  step with a mid-step display whose `[…]` tag lands on a later line loses every
  citation in that tag. Three of my repairs hit this and were rewritten inline.
