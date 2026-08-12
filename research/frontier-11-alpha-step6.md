# frontier-11 — Alpha step 6b: adjudication, refutation, risk review, impact

- Alpha: Claude Opus 5, `claude-opus-5[1m]`, `xhigh`, 1,000,000-token window
- Date: 2026-08-12
- Scope: all 240 items of the run, five reader findings files, eight read-only refuter reports

---

## Verdict on freezing

**The item text is ready to freeze for the step-7 judge sweep. The proof-contract
artifacts are not, and they need one artifact-only Beta reconciliation round.**

Everything the judges actually read is repaired: every fatal defect surfaced by
the five independent readers and the eight read-only refuters has been
adjudicated from disk and either confirmed and repaired, or refuted with
evidence. Two false claims were found *after* the readers finished — one false
theorem and one false hypothesis-free criterion — and both are fixed. All twelve
gates are green, including `risk-report --require-reviewed`, which passes for the
first time in this run because the 150 `risk_review` records below now exist.

What is **not** sound is the evidence record. Six of the eight refuters, plus
reader-5 independently, found that `research/frontier-11-*.proof-contracts.json`
contains rows that are *false of the text they claim to certify*: boundary rows
citing a step that does not treat the boundary, `iff` rows marked
`not_applicable` on genuine biconditionals, and `quote` fields truncated before
the clause they are meant to support. `proof-contract --strict` reports 206/206
and 0 errors throughout, because it checks that a quoted substring exists and
that facts and steps map — it cannot check that the quote *supports* the fact or
that boundary evidence names the step that does the work. That is a gate blind
spot, not evidence of contract integrity, and §6 below specifies the repair.

The judges never read the contracts, so this does not block the sweep on
correctness grounds; it blocks calling the level's quality controls satisfied.
My recommendation is to run the reconciliation round and the step-7 sweep
concurrently, with the hard condition in §6 that the reconciliation is
**artifact-only**.

---

## 1. What I did

| stage | result |
|---|---|
| Adjudicated five reader findings files | every reported defect and every applied repair checked from disk |
| Dispatched eight read-only refuters (GPT 5.6 Sol, `--sandbox read-only`) | 240/240 items covered; 8/8 returned; ~19,000s of adversarial reading |
| Adjudicated every refuter finding | confirmed, repaired, or refuted with evidence |
| Applied repairs | **39 items** edited, all prechecked and gated |
| Wrote `risk_review` records | **150** high/critical items, into the owning batch contracts |
| Impact disposition | 241 rows, receipt at `research/frontier-11-impact.json`, exit 0 |
| Cross-batch / cross-level manifest | `research/frontier-11-audit-manifest.json`, 986 edges |

---

## 2. The three claim-changing repairs I was asked to rule on

### 2.1 `ex-sparse-spikes-ftc-conclusion-at-a-discontinuity` — **CONFIRMED, and the repair was required**

The reader changed the construction so that `f(0)=0` and the item now proves
`F'(0)=f(0)=0`. This is right, and the decisive evidence is the step-4 scaffold,
which says verbatim:

> "Define the value at zero to be zero … nevertheless its derivative there
> equals the chosen value zero."

The step-5 author deviated from its own scaffold, set `f(0)=1`, and concluded
`F'(0) ≠ f(0)` — which contradicts the scaffold, contradicts the item's title,
and would have put a counterexample to the FTC conclusion on a page that wanted
an example of it holding. I verified the new claim from scratch: the indicator of
`{2^-n : n ≥ 0}` on `[0,1]` is bounded with countable discontinuity set, every
lower Darboux sum is `0`, and step 1.2's covering drives the upper sums below any
`ε`, so `F ≡ 0`, `F'(0)=0=f(0)`, and `f` is discontinuous at `0`.

### 2.2 `thm-operator-determinant-is-basis-independent` — **CONFIRMED**

`def-determinant-of-a-square-matrix` is stated only for `n ≥ 1`, and
`def-determinant-of-a-linear-operator` separately stipulates `det(T) := 1` for
`V = {0}`. The pre-repair Statement therefore asserted an equality between
determinants of `0×0` matrices that the library never defines. The narrowed
Statement is correct and the unchanged title stays true, because in dimension
zero there is exactly one ordered basis and basis independence holds vacuously.
I checked all five items citing the theorem for a step that silently needs the
matrix equality at dimension zero; none does.

I extended the repair, on the `determinant` refuter's evidence: the **title** of
`def-determinant-of-a-linear-operator` still said the determinant is "defined
from its matrix in an ordered basis", which is false at `V={0}` for exactly the
same reason. Fixed. `provenance.statement` on both repaired items was still
`literature-derived` after a material Statement change; retagged `ai-altered`.

### 2.3 `ex-doubling-integers-has-nonunit-determinant` — **CONFIRMED**

The old title said the inverse of `[2]` exists "only over `Q`". That is false:
`[2]` is invertible over `R`, and over `Z/3Z` where `2·2 = 1`. Since a step-7
judge reads Statements and cannot see a title at all, this was catchable only
here. The new title claims existence after extending scalars to `Q`, which step
2.2 actually exhibits, and the Example body carries no residual exclusivity
claim.

---

## 3. The two false claims found after the readers finished

These are the most important findings of the stage. Both survived the author,
the independent reader, and the artifact reconciliation.

### 3.1 `thm-formal-composition-laws` asserted a FALSE associativity theorem

Title and Statement both claimed that *admissible* formal composition is
associative. The `formal-series` refuter produced a counterexample and I verified
it completely against the library's own `def-formal-series-composition`.

Over `Q`, put `q = x − x²`, let `w = q⟨−1⟩` be its compositional inverse, and
`h = 1 + x`. All four displayed compositions are admissible under the library's
definition: `w∘q` because `q(0)=0`; `(w∘q)∘h = x∘h` because `x` is a polynomial;
`q∘h` because `q` is a polynomial; and `w∘(q∘h)` because `q∘h = −x−x²` has zero
constant coefficient. But

```
(w∘q)∘h = x∘h   = 1 + x
w∘(q∘h) = w(q(−x)) = −x
```

and I confirmed the second by expanding `w∘(−x−x²)` coefficientwise through
`x⁴`: the `x²`, `x³` and `x⁴` coefficients cancel to `0` and the `x` coefficient
is `−1`. Admissibility of each composition individually does **not** give
associativity; the standard sufficient hypothesis is that both inner series have
zero constant coefficient.

**Repair.** Title and Statement now assert associativity under the hypothesis
`[x⁰]g = [x⁰]h = 0`, with an explicit sentence that admissibility alone is not
enough. Step 1.2 now derives the local finiteness from that hypothesis and says
where it is used. The two facts citing the theorem —
`thm-formal-compositional-inverse [F1]` and
`ex-reversion-of-x-over-one-minus-x [F1]` — restated accordingly. Both items'
actual uses lie inside the safe zero-constant zone, so neither is otherwise
affected, which I checked.

### 3.2 `thm-alternating-conjugacy-class-splitting-criterion` was false for `n ≤ 1`

The Statement quantified over `σ ∈ A_n` with no lower bound on `n`, while its
`[F3]` instantiates a lemma whose hypothesis is that `A_n` has **index 2** in
`S_n`. That fails exactly at `n = 0, 1`, where `A_n = S_n`. At `n = 1` the
identity's cycle type is a single `1`-cycle — odd and distinct — so the criterion
predicts a split, but the class is a singleton in a trivial group and no split
exists. The `symgroups` refuter found it; I verified `n = 0`, `n = 1`, and
checked that `n = 2` and `n = 3` behave correctly under the repaired hypothesis.

**Repair.** `n ≥ 2` added to the title, the Statement and the Given, with the
index-2 point stated where `[F3]` needs it. Propagated to the four consumers that
restate the criterion (`cor-three-cycles-form-one-conjugacy-class-in-a-n`,
`fs-same-cycle-type-implies-conjugate-in-a-n`,
`ex-s-five-conjugacy-classes-and-class-equation`,
`ex-a-five-conjugacy-classes-and-split-five-cycles`); each has `n ≥ 5` or `n = 5`
available, so no consumer loses anything.

---

## 4. Adjudication of the reader findings

All five readers' reported defects were real and their repairs were correct,
**with one exception**, and I re-graded one severity.

**Verified target-by-target from disk.** For each replacement citation the
readers made, I opened the new target and checked it states what the repaired
fact claims: `thm-number-of-bijections-of-a-finite-set` and `thm-product-rule`
(reader-5's centralizer repair); `thm-class-equation`'s actual formula;
`thm-continuous-implies-integrable`, `thm-heine-borel-rn`,
`thm-heine-cantor-metric`, `lem-variation-additive-on-subintervals`,
`cor-archimedean-reciprocal`, `lem-standard-basis-of-f-n` (reader-1);
`def-ring-matrix-product-identity-and-transpose` — which does state
`(AB)_ik = Σ_j a_ij b_jk`, while `thm-ring-matrix-arithmetic-laws` does not, so
reader-3's four "inaccurate entry-formula" findings were all real; and
`thm-natural-logarithm-laws`, which indeed lacks `log(e) = 1`;
`def-integers-modulo-n`, `def-addition-and-multiplication-modulo-n`,
`thm-formal-power-series-unit-criterion`,
`prop-coefficient-extraction-linearity-and-extensionality` (reader-2).

**I re-derived the two repairs that changed proof mathematics.**
`lem-conjugacy-class-splitting-over-an-index-two-normal-subgroup` step 3.3: the
old `c = th` route genuinely does not yield `txt⁻¹ = h⁻¹xh`; the reader's
`c = h⁻¹t` gives `txt⁻¹ = hxh⁻¹` directly, and both forms are available because
`[G:H] = 2` makes `G∖H` equal to `tH` and `Ht`. I checked the criterion against
`A_5` (5-cycles split into two classes of 12, 3-cycles do not split) and `A_4`.
`ex-four-by-four-determinant-by-cofactors-and-row-reduction`: I recomputed the
determinant by both stated routes and got 30 each time, and confirmed the
pre-repair row operation produced `(0,−12,0,5)`, which is not triangular.

**One reader repair was wrong, and I fixed it.**
`ex-the-one-point-space-represents-the-underlying-set-functor-on-top`: reader-4
upgraded `provenance.statement` from `ai-generated` to `literature-derived` and
relocated the source to "Riehl Example 2.1.6(ii)". I fetched Riehl's text.
Example 2.1.6 is the list of representable **contravariant** functors, and item
(ii) is the open-set functor `O: Top^op → Set` represented by the **Sierpiński
space** — not this example at all. The correct locator is Example **2.1.5(ii)**,
in the covariant list: "The forgetful functor `U: Top → Set` is represented by
the singleton space." So the provenance upgrade is **sustained** — Riehl does
state this example, `literature-derived` is right, and removing the `generation`
block was right — but the locator had been replaced by another wrong number,
which is worse than the original because it looks audited. Corrected.

I swept the rest of reader-4's locator work against the actual PDFs rather than
spot-checking: Riehl 2.1.3, 2.1.4, 2.1.5(i), 2.1.6(iv), 2.2.3, 2.2.4, 2.2.7,
2.2.8, 2.3.1, 2.3.2, 2.3.3, 2.4.1, 2.4.2, 2.4.8, 2.4.12(vi), 4.2.7(v)–(vi), and
Leinster 1.1.8(e), 1.2.4, 4.1.1, 4.1.3, 4.1.16, 4.1.17, 4.1.21, 4.1.22, 4.1.25,
4.2.1, 4.3.2, 4.3.3, 4.3.7, 4.3.10 all check out. I found one further stale
locator the reader missed: `def-universal-element` cited "Leinster Definition
4.1.17", which is contravariant representability, not universal elements;
corrected to Corollaries 4.3.2 and 4.3.3.

**One severity re-graded.** Reader-5 classified the missing "σ is itself a
3-cycle" branch in `lem-nontrivial-normal-subgroup-of-a-n-contains-a-three-cycle`
as fatal. It is a real gap in the exhaustion but one any competent reader closes
instantly, so under the owner's 30-second rule I record it **nonfatal**. It was
nevertheless correct to tidy at step 6, where the edit is free and where step 8
would forbid it. The `[F4]` fidelity repair in the same item is a genuine fatal
citation defect and stands.

**Reader escalations, closed.** Reader-2's Flajolet–Sedgewick harvest gap is
closed: A.10, A.11 and A.12 now carry result-specific dispositions, and
`coverage-checklist` passes on all five batches (515 headings). On A.11 I sustain
the `out-of-scope` disposition on substance — it is a specialisation of the
general Lagrange–Bürmann formula the page proves, not absent machinery — while
noting the written reason argues from non-use, which is not the rule's test.
Reader-2's batch-wide empty-citation defect is closed by the reconciliation; see
§6 for what the closure did and did not achieve.

---

## 5. Refuter dispatches and their verdicts

Eight clusters, GPT 5.6 Sol, `--sandbox read-only` enforced by the runner, every
one of the run's 240 items assigned to exactly one. Batch 3 got **two** refuters,
and the reason is recorded in §6.

| cluster | items | outcome |
|---|---|---|
| `complex` | 28 | 4 fatal, 1 nonfatal — **all confirmed**, all repaired |
| `symgroups` | 26 | 7 fatal incl. the false criterion — confirmed, repaired |
| `ftc-arc` | 39 | no fatal item defect |
| `determinant` | 28 | 3 fatal (2 titles, 1 domain), 1 artifact class, 2 provenance — confirmed |
| `logarithm` | 24 | **"No fatal mathematical defect found"** |
| `yoneda` | 35 | 3 fatal fact-fidelity, 1 artifact class — confirmed, repaired |
| `formal-series` | 31 | 3 fatal incl. the false theorem — confirmed, repaired |
| `extremal` | 29 | 4 fatal, 6 nonfatal — confirmed; fatal repaired |

Selected rulings beyond §2 and §3:

- **`lem-cauchy-product-of-absolutely-convergent-complex-series` (fatal, and I
  missed it).** The `complex` refuter found that this published consumer uses
  "complex addition and multiplication are coordinatewise polynomial formulas"
  and cites `def-complex-numbers-and-arithmetic` for it — but the D12 rewrite
  moved coordinate arithmetic out of that definition into
  `thm-complex-numbers-form-a-field`. My own impact pass had waved this through
  on the strength of the item's conventions list. **Confirmed.** Disposition in
  §7: it is real, it is caused by this build, and it cannot be repaired now.
- **`def-matrix-minors-cofactors-and-adjugate` (fatal).** It defined
  `C_ij = (−1)^{i+j} M_ij` over an arbitrary commutative ring citing
  `def-integer-power`, which is defined only for reals. Repaired by defining the
  sign in `R` by parity of `i+j`; the real-power dependency is removed.
- **`thm-mantel-exact-and-unique [F3]` and five chromatic-number facts
  (fatal, batch 3).** The Beta's mechanical conversion of aggregate `[given]`
  paragraphs into labelled facts kept one clause of a multi-clause target and
  dropped the clause the step actually uses — the exact `e(T_{n,r})` formula in
  Mantel, and `χ(G) = min{k : G is k-colourable}` in five items. All repaired
  against the targets' own words.
- **`lem-kst-common-neighbour-double-count` (fatal).** `s,t` were never
  quantified, so a load-bearing lemma was not a closed proposition. Typed
  `s,t ≥ 1`.
- **Yoneda fact fidelity (fatal ×3).** `ex-yoneda-lemma-for-a-monoid-action`
  `[L1]` asserted a composition convention that appears only in its target's
  *proof* — and that convention decides left versus right action; `[L2]` and
  `cor-contravariant-yoneda-lemma [L1]` attributed the Yoneda *inverse formula*
  to the naturality theorem, which states naturality, while the inverse is in
  `lem-yoneda-evaluation-bijection`; `ex-representable-presheaf-on-a-poset [L1]`
  took the thin-category iff from its target's proof rather than its Statement.
  All three repaired.
- **Nonfatal, repaired anyway because step 6 is where it is free.**
  `def-integral-logarithm`'s well-definedness paragraph claimed
  `thm-continuous-implies-integrable` applies for every `x > 0`, but that theorem
  assumes `a < b`; at `x = 1` the interval is degenerate and it is
  `def-oriented-integral` that stipulates `∫₁¹ f = 0`. Split into the two cases.
  `thm-integral-logarithm-product-law` and
  `thm-logarithm-differentiable-functional-equation-characterisation`
  differentiated a difference with no differentiation-algebra fact; both now cite
  `thm-algebra-of-derivatives`. Two declared-but-unused dependencies removed
  (`cor-turan-ramsey-lower-bound`, `ex-five-cycle-k-two-two-free`).
- **`cex-the-koch-curve-is-not-rectifiable`, the run's only reader-authored
  item.** No party had ever read it independently. I verified it line by line —
  both rotation identities, all four replacement edge lengths including
  `(v−Rv)/3`, the node-difference bounds, the telescoped `3/(4·3ⁿ)` estimate, and
  the retained-vertex argument — and the `ftc-arc` refuter read it again. I
  checked `lem-geometric-sequence-null` before accepting `[L4]`: it does state
  divergence to `+∞` for `|r| > 1`, so the fact is faithful. Two repairs: the
  complete-ordered-field hypothesis of `thm-of-square-roots` was undischarged for
  `√3` while five sibling items in the run discharge it, and `landmark: true` made
  it the only example-class landmark in the run, contrary to the curation rule.

**Where I refused to follow a refuter.** The `yoneda` refuter and I both queried
whether `ex-polynomial-ring-represents-the-underlying-set-functor-on-rings`
confuses `Ring` with `CRing`. It does not: `Z[x]` represents the underlying-set
functor on **all** unital rings, because the image of an evaluation at `r` is
generated by `r` and integer multiples of `1`, which commute. Riehl states it for
`Ring` at 2.1.5(v). No repair.

---

## 6. What is NOT resolved: the proof contracts

Six refuters and reader-5 independently found the same class of defect, in every
batch. Representative confirmed instances:

- **Invented boundary evidence.** The bridge theorem's `one` row claimed "Step
  3.1 applies the multiplication formula to the coordinate identity `(1,0)`";
  step 3.1 never specialises to `(1,0)`. (I fixed this one.)
- **`iff` rows marked `not_applicable` on genuine biconditionals** —
  `thm-turan-exact-and-unique`, `cor-chromatic-number-extremal-density`,
  `cor-representable-presheaves-detect-isomorphism-of-objects`,
  `thm-universal-arrows-are-initial-or-terminal-in-comma-categories`.
- **Boundary rows citing a step that does not treat the boundary** — Laplace
  `zero`/`degenerate` citing a step that only collates; rank-one-update `one`
  citing a step that never mentions `n = 1`; `ex-log-two-from-four-characterisations`
  and `ex-unit-hyperbolic-area-brackets-e` denying that any endpoint occurs, when
  both use closed-interval endpoints; `thm-lagrange-burmann-inversion`'s `zero`
  row claiming step 4.1 handles `n = 0`, where `1/n` is undefined.
- **Quotes truncated before the clause they support** — roughly fifteen in the
  determinant pair alone (`[L1]` ending at "then", `[F1]` at "define", several
  stopping after "For every row `i` and every column `j`,"), six in the logarithm
  pair, and several in the Yoneda pair.
- **Prospective boilerplate as evidence** — reader-5 counted **167** batch-1
  boundary rows whose "evidence" is an instruction ("Step 1.1 *must* isolate…"),
  and the `formal-series` refuter found 84 boilerplate rows of which it verified
  6 outright false and did not assess the other 78.

`proof-contract --strict` reports **0 errors, 206/206** through all of it. It
verifies that a quoted substring exists in the named section and that facts and
steps map onto each other. It cannot verify that the quote *supports* the fact,
or that a boundary row's named step does the work. That gap is why this artifact
has an Alpha check at all.

**Required before the level's quality controls can be called satisfied:** one
Beta reconciliation round, each Beta on its own batch, that (a) extends every
truncated `quote` to include the clause its fact uses, (b) replaces every
boundary row whose evidence is prospective or names the wrong step with either
honest `not_applicable` and a true reason or evidence anchored to the step that
does the work, and (c) sets `iff-forward`/`iff-reverse` correctly on every
biconditional Statement.

**Hard condition: that round is ARTIFACT-ONLY.** No item file may be touched. If
a Beta finds a contract row that cannot be made true without changing an item,
that is a new mathematical finding and it comes back to me for adjudication —
it must not be papered over by editing the proof to match the contract. I would
also not accept the round on a self-report: the same Betas wrote the rows.

**Related, and the reason batch 3 got two refuters.** The step-6a reconciliation
converted 49 batch-3 items from an aggregate `[given]` paragraph to labelled
facts — authored by the batch's **own Beta**, after its independent reader had
finished, so that text had no independent read at all. I established from the
commit diff that **no numbered proof-step body changed** in that batch, only
Facts blocks and tag lists, so reader-2's mathematical read still holds; what was
unaudited was the new fact text. That is exactly where the `extremal` and
`formal-series` refuters found six fatal fidelity defects, including the false
theorem in §3.1. The apparatus worked, but only because the conversion was
caught and targeted.

---

## 7. Impact disposition

**On the baseline.** The orchestrator flagged that no `after-authoring` snapshot
exists. I also found that its `probe-post-step6` snapshot is stamped
`2026-08-12T07:43:05Z`, which is *before* the step-6a readers finished — so the
"exactly 4 changed" measurement it reported did not cover the reader repairs at
all. I took two fresh snapshots, `alpha-step6-current` and `alpha-step6-final`,
and re-measured against `pre-d1-rewrite`.

**Result, measured to the final state.** Of the **3,482** items that existed
before this build, exactly **4** changed at all — not merely in public surface,
in any content — and they are the four D1/D12 complex-number items. Every other
"changed interface" in the 240-row report is a newly created draft, which the
coarse baseline cannot distinguish from a change. The receipt says so per row
rather than claiming a review I did not perform.

**The real blast radius is the 40-item transitive cone of those four.** I read
all 16 direct consumers and confirmed the clauses they cite — field structure,
unique `a+bi` form, the arithmetic formulas, integer powers, `|uv| = |u||v|`, the
triangle inequality, `v·conj(v) = |v|²`, `|z| = √(a²+b²)` — are all stated in the
new text. I then scanned the whole cone for literal plane-model language and
found **seven** items that use the identification `ℂ = ℝ²`.

That identification was *definitional* under the old construction and is now a
*theorem*, `thm-complex-numbers-are-the-real-coordinate-plane`, proved at order
54 — strictly earlier in the reading order than any of the seven. **The bridge
does carry them**, and it does not overreach: it states the coordinate bijection
and coordinate arithmetic only, with no modulus-equals-Euclidean-norm claim,
which would be an order-167 forward reference. `def-complex-metric-convergence-and-continuity`
makes the norm identification itself, at order ≥ 167 where it is legal.

**Two published-side citation repairs are owed, and both are blocked until step
10.** Neither is a false statement and neither breaks a proof; each is a citation
whose warrant this build moved:

1. **`def-complex-metric-convergence-and-continuity`** and the six other
   plane-model consumers should cite the bridge. They cannot yet: the bridge is
   `status: draft` until step 10, and a published item must not carry a
   reader-facing citation the public cannot open.
2. **`lem-cauchy-product-of-absolutely-convergent-complex-series`** should cite
   `thm-complex-numbers-form-a-field` for the coordinate arithmetic it uses.
   `def-complex-exponential` is a weaker second instance. This one is *not*
   blocked by draft status — the field theorem is published — but adding a
   dependency to a published item is a material rewrite under SCHEMA §3, which
   would void its judge stamp and open its own impact wave mid-build.

**So I did not make a partial published repair**, per the rule that a correction
leaving an impact queue open "is not obvious: report it for the owner rather than
applying a partial public repair". Both become clean and cheap immediately after
the step-10 publish commit. **This belongs in the step-10 report and needs an
owner decision.**

Receipt: `research/frontier-11-impact.json`, 241 dispositions, `impact-audit`
exit 0.

---

## 8. Cross-batch and cross-level edges

`research/frontier-11-audit-manifest.json`: **986 edges — 590 backward to
published content, 396 same-batch, 0 cross-batch.**

A zero cross-batch count is a finding to interrogate, not a clean bill, so I
asked where two of these nine pairs *should* connect and do not. The one real
candidate is the symmetric-group pair (order 64) and the determinant pair (order
84): the Leibniz determinant formula uses `sgn(σ)`. But the sign homomorphism and
the matrix determinant are both published at orders ≤ 82, so a cross-batch edge
would be redundant rather than missing. The FTC pair (239) cannot cite arc length
(181) or the integral logarithm (178.1) in the only direction that would make
sense, and all three correctly use the published order-161 integral page. Zero is
correct by construction here: the five batches were selected at step 0 for mutual
independence across five subject areas and dependency levels 18–22.

**RA-27b non-circularity, verified semantically rather than by text scan.**
Reader-3 checked it by scanning proof regions for `exp`/`log`. I computed the
full transitive dependency cone of the ten pre-bridge items: **272 items**, and
**not one** of their Statements or Definitions mentions `exp`, `log`, `e^`, the
natural logarithm, the exponential function, or Euler. The integral-logarithm
development is genuinely independent of the published exponential until
`thm-integral-exponential-agrees-with-exponential`, which the `logarithm` refuter
separately confirmed applies `thm-exponential-ivp-uniqueness` only after
verifying all three of its hypotheses.

**D10 respected.** A corpus-wide search finds no new item in this run asserting a
field of fractions, a fraction field, a rational function field, or a
localisation. The only hits are two published items with unrelated "localised"
prose. `thm-formal-power-laurent-dictionary` claims the embedding, the image
characterisation and the unit factorisation — never that `K((x))` is a fraction
field.

---

## 9. Page contracts

Checked mechanically across all nine pairs: **every A page has exactly two
nonempty prose paragraphs, each under 150 words** (largest: 76), and **every B
page has no authored body**. No exceptions.

---

## 10. `risk_review` records

**150 written** — 79 critical, 71 high — into the owning batch contracts, not
only the merged file, so a re-merge cannot silently drop them.
`risk-report --require-reviewed` now returns **0 errors, 206 items routed**.

Each record names the risk tier and its scoring signals, the independent step-6
reader for that batch, the read-only refuter cluster that read it adversarially,
and my disposition. **26 of them carry item-specific reasoning** where my
disposition rests on more than two clean adversarial reads — a claim I re-derived
personally, a source I fetched and checked, or a repair I applied. The generator
is `research/frontier-11-write-risk-reviews.mjs` and its per-item text is
`research/frontier-11-risk-review-notes.json`, both committed so the reasoning is
recoverable.

---

## 11. Fatal-error ledger for step 10

Grouped by defect type; Beta and reader duplicates reconciled.

**False or overstrong Statement / title** (judge-invisible, catchable only here)
- `thm-formal-composition-laws` — associativity false as stated; hypothesis added.
- `thm-alternating-conjugacy-class-splitting-criterion` — false for `n ≤ 1`; `n ≥ 2` added.
- `ex-doubling-integers-has-nonunit-determinant` — "only over Q" false; title corrected.
- `thm-operator-determinant-is-basis-independent` — `0×0` determinant undefined; narrowed.
- `def-determinant-of-a-linear-operator` — title false at `V = {0}`; corrected.
- `cor-operator-determinant-by-row-reduction` — title and Statement both overstated; restated with the explicit recovery formula.
- `lem-kst-common-neighbour-double-count` — `s,t` unquantified; typed.
- `ex-sparse-spikes-ftc-conclusion-at-a-discontinuity` — construction contradicted its own title and scaffold; restored.

**Invalid inference**
- `lem-conjugacy-class-splitting-over-an-index-two-normal-subgroup` step 3.3 — coset element rewritten; conclusion now follows.
- `cor-operator-determinant-by-row-reduction` — reverse scaling factor was `c`, is `c⁻¹`.
- `ex-four-by-four-determinant-by-cofactors-and-row-reduction` — wrong row indices under zero-based indexing.
- `thm-operator-invertible-iff-determinant-nonzero` — converse held only for `L_A`; new converse proof written by the reader, audited by me.
- `cex-graph-of-x-sin-one-over-x-is-not-rectifiable` — partition not licensed; rebuilt.

**Incorrect dependency citation** (the largest class: ~35 items)
- Batch 1: centralizer counting, class equation, sign multiplicativity, cycle-type indexing, real completeness for `thm-of-square-roots` (5 items), `i² = −1` attribution (3 items), Lagrange for index and class size (2 items), purpose-descriptions in three `S_4`/`S_5`/`A_5` examples.
- Batch 2: continuous-implies-integrable (3 items), Heine–Cantor on `ℝ` vs a metric space, variation additivity, chord bound, norm comparisons.
- Batch 3: shift formula, unit criterion, modulo-`n` equality and product, asymptotic notation, Mantel's edge count, five chromatic-number facts, binomial coefficients, Lagrange–Bürmann change of variables, Laurent-domain promotion.
- Batch 4: matrix entry formula (4 items), `log(e) = 1` (2 items), zero-dimensional determinant value (2 items), real integer powers over a ring.
- Batch 5: ten source locators, function extensionality (5 items), continuity characterisation, Yoneda inverse formula (2 items), monoid composition convention, thin-category iff.

**Missing hypothesis**
- `thm-alternating-conjugacy-class-splitting-criterion` (`n ≥ 2`), `thm-formal-composition-laws` (zero constant coefficients), `thm-lagrange-burmann-inversion [F3]` (zero constant coefficient in the change of variables), `lem-kst-common-neighbour-double-count` (`s,t ≥ 1`), `def-integral-logarithm` (`a < b` at `x = 1`).

**Provenance**
- `ex-the-one-point-space-…` — upgrade sustained, locator corrected.
- `thm-operator-determinant-is-basis-independent`, `cor-operator-determinant-by-row-reduction` — retagged `ai-altered` after material Statement repair.

**Deviations to report at step 10**
- `depcheck --pending-audit-ok` used from step 5, per D13, on measured evidence.
- D8: RA-27b's B-page citation replaced by its A-page source.
- The two published-side citation repairs in §7, which need an owner decision.

---

## 12. Honest remaining gaps

1. **The proof contracts are not sound** (§6). One artifact-only Beta round is
   required, and 78 formal-series and 167 batch-1 boilerplate boundary rows have
   not been individually assessed by anyone.
2. **Two published items owe a citation** (§7), blocked until after step 10.
3. **`finite-smoke` is vacuous on this run** — it runs clean at 0 errors because
   **0 checks were registered** by any batch. The 14 finite enumeration claims in
   batch 1 were verified by reader-5 by hand, and I verified several arithmetic
   claims myself, but the mechanical control contributed nothing here.
4. **Nonfatal items I consciously did not chase**: the `extremal` cluster's
   under-cited routine binomial estimates (`C(m,s) ≤ mˢ/s!`, the Jensen step) and
   its `o`-notation stated as a limit rather than with explicit quantifiers; a
   handful of `formal-series` tag omissions. Each is a 30-second gap by the
   owner's rule; each is listed here so a step-7 judge finding one is met with a
   recorded position rather than a surprise.
5. **My own 39 repairs are uncertified by an independent reader.** For the
   38 draft items the step-7 paired judges are that independent check, by design.
   The one published item among them,
   `lem-complex-conjugation-and-modulus-laws`, carries no judge stamp and is in
   the level's step-7 scope, so it is covered too.
6. **Leinster Example 2.1.3(b) and 1.2.4(a)** — I confirmed 2.1.3 is "Algebra:
   free ⊣ forgetful" and 1.1.8(e) is preorders-as-categories, but did not resolve
   those two sub-item letters. The mathematics of the items citing them was
   checked directly.

---

## 13. Items I changed

39 items. All prechecked; `citecheck`, `rendercheck`, `prosecheck`, `fwdcheck`,
`extcheck`, `depcheck --pending-audit-ok`, `depsource`, `content-policy` (all
five manifests), `coverage-checklist` (all five), `proof-contract --strict`
(206/206) and `risk-report --require-reviewed` all green afterwards.

```
cex-the-koch-curve-is-not-rectifiable
cor-complex-numbers-are-a-quadratic-real-extension
cor-contravariant-yoneda-lemma
cor-only-proper-nontrivial-normal-subgroup-of-s-n
cor-operator-determinant-by-row-reduction
cor-symmetric-group-class-equation-by-cycle-type
cor-three-cycles-form-one-conjugacy-class-in-a-n
cor-turan-ramsey-lower-bound
def-determinant-of-a-linear-operator
def-integral-logarithm
def-matrix-minors-cofactors-and-adjugate
def-universal-element
ex-a-five-conjugacy-classes-and-split-five-cycles
ex-five-cycle-k-two-two-free
ex-odd-cycle-extremal-density
ex-petersen-extremal-density
ex-representable-presheaf-on-a-poset
ex-reversion-of-x-over-one-minus-x
ex-s-five-conjugacy-classes-and-class-equation
ex-s-four-conjugacy-classes-and-class-equation
ex-the-one-point-space-represents-the-underlying-set-functor-on-top
ex-yoneda-lemma-for-a-monoid-action
fs-complex-numbers-form-an-ordered-field
fs-erdos-stone-simonovits-determines-the-extremal-number-for-every-graph
fs-same-cycle-type-implies-conjugate-in-a-n
lem-colouring-embeds-a-graph-in-a-balanced-blowup
lem-complex-conjugation-and-modulus-laws
lem-kst-common-neighbour-double-count
thm-alternating-conjugacy-class-splitting-criterion
thm-erdos-stone-simonovits
thm-every-complex-number-has-a-square-root
thm-extremal-graph-supersaturation
thm-formal-composition-laws
thm-formal-compositional-inverse
thm-integral-logarithm-product-law
thm-logarithm-differentiable-functional-equation-characterisation
thm-mantel-exact-and-unique
thm-operator-determinant-is-basis-independent
thm-real-automorphisms-of-the-complex-numbers
```

No item was added or deleted at this stage. I authored no new result, so no new
proof is mine to certify. I did not touch
`library/real-analysis/the-complex-exponential-and-eulers-formula.md`, did not
re-add `verification.audited`, and added no `verification.judge`.

**Twice-touched.** The touch ledger reports exactly 3 items repaired more than
once across the run's snapshots:

- `cex-the-koch-curve-is-not-rectifiable` — authored by reader-1, then repaired
  by me (completeness citation, `landmark`).
- `cor-operator-determinant-by-row-reduction` — repaired by reader-3 (reverse
  scaling factor), then by me (Statement and title).
- `lem-complex-conjugation-and-modulus-laws` — rewritten under D12 at step 5,
  then repaired by me (completeness citation).

In each case the second touch was mine and is recorded above with its evidence.
The escalation is advisory; I flag them for the orchestrator's step-9 sweep
rather than treating them as blocking.
