# Wave 0 — Audit-Alpha report (step A6)

Alpha: Opus 5 (`claude-opus-5`) at high reasoning effort, via the Claude runtime.
Date: 2026-08-02. Sole adjudicator per `briefs/audit-alpha.md` and
`AUDIT-WORKFLOW.md` §7 (A6) / §9.

All readers and refuters dispatched below were independent read-only Opus 5
agents. None certified content it authored; no reader ever wrote to disk.

---

## 0. Summary

| duty | result |
|---|---|
| Independent certification of every material repair | **49 A4 repairs certified**, plus 2 items I made material at A6; `verification.verified` written on **51** items; `depcheck` now fully clean |
| D2 concurrences (6 held rows) | **all six concurred**; ledger rows amended, provenance blocks written |
| Classification reviews (3) | all three **upheld** with recorded reasoning |
| Deferred debatable restatements (R1) | 6 decided; 5 applied, 1 declined |
| Cross-batch / backward / forward edge audit | **1,104 of 1,104 audited — zero fatal citation defects** |
| Risk reviews (`risk-report --require-reviewed`) | 177 high/critical items refuted in 7 grouped sweeps |
| `genrisk` dispositions | 2 load-bearing seeds disposed `verified-generated`; `--receipt` passes |
| `impact-audit` receipt | 270 changed interfaces, **2,451 dispositions**, signed; `--receipt` passes |

**One fatal-class defect was found at A6, and it was in an A4 repair itself:**
the topology R4 repair replaced one false claim about the library with another.
Adjudicated, repaired by Alpha, independently certified. Details in §4.

**One Alpha repair was refuted by its own certifying reader** (variable capture)
and re-repaired; the second attempt was certified. Details in §5.

---

## 1. Certification of the material repairs (49 items)

The certification scope is exactly the set `depcheck` reported as
`published-unaudited` after A4 — 49 items, matching the eight batches' own A4
stamp records item for item. The 65 "material" entries in
`wave0-impact-classification.json` exceed this because 16 of them changed only
frontmatter (deps, `justified_by`, source URLs), which is not a material rewrite
under SCHEMA's test and correctly kept its stamps.

Six independent readers, grouped so that no reader saw a batch twice and each
read the A3 authorization, the A4 old/new record, and the final on-disk text:

| reader | scope | verdict |
|---|---|---|
| 1 | foundations, 16 items + 2 metadata-only | 18 CERTIFY, 0 REFUTE, 9 nonfatal notes |
| 2 | combinatorics, 8 items + 3 URL fixes | 10 CERTIFY, 0 REFUTE, 3 nonfatal notes |
| 3 | real-analysis/dedekind, 6 items | 6 CERTIFY, 0 REFUTE, 2 nonfatal notes |
| 4 | topology, 9 items | 6 CERTIFY, **3 REFUTE** (see §4) |
| 5 | number-theory, 5 items | 5 CERTIFY, 0 REFUTE, 3 nonfatal notes |
| 6 | abstract-algebra + linear-algebra + cauchy, 5 items + 8 metadata | all CERTIFY, 6 nonfatal notes |

`verification.verified` written on all 49 with
`model: claude-opus-5`, `verdict: certify`, `date: 2026-08-02`,
`scope: published-audit`, `delegated_by: owner`.

### Delegated calls I was asked to confirm or reverse

- **`ex-gcd-with-zero` fact deletion (number-theory A4-3, a delegated call).**
  **UPHELD.** Reader 5 independently re-derived the call step by step and
  confirmed no step (1.1, 1.2, 1.3, 2.1, 3.1, 4.1) uses totality, antisymmetry
  or transitivity of the ℤ order, and that step 4.1's `0 ≥ 0` comes from `[L4]`
  (`gcd(0,0) = 0` together with `gcd(u,v) ≥ 0`) by substitution, not from an
  order axiom. The Beta's *disposition* is right; one clause of its written
  *rationale* is wrong and I correct it here for the record: the Beta wrote that
  `[L2]` "could not have supplied [0 ≥ 0] anyway, since reflexivity is not among
  the three properties it lists". That is mistaken — `thm-int-ordered-ring`
  calls the relation a **total order**, and a total order is reflexive. The
  deletion stands on the two correct grounds only.
- **`ex-symmetries-of-a-square` step 3.2 left untagged.** **UPHELD.** Reader 6
  independently read step 3.2 and concurred: its distinctness argument runs
  through `[L6]` (order of `r`) and `[L4]` (cancellation) on the *exponents*
  `0,1,2,3`, never through `[L1]`'s distinctness of the four *points*. Tagging
  `L1` there would have been an inflated citation.
- **`fs-gcd-times-lcm-equals-the-product`: removal of the older
  `verified: {model: claude-sonnet-5, scope: page}` block.** **CONFIRMED.** A3
  named only `judge` and `audited`, but that enumeration lists the stamps the
  Beta expected to meet, not an exhaustion of the stale-attestation rule. The
  A4 edit changed exactly the *licensing* of step 2.1 — the step now names
  cancellation and tags `[L7]`, where before it named nothing — and citation
  precision is the axis this audit measures, so retaining a certification that
  predates the citation would be self-undermining. The condition reader 5
  attached is met: `verification.verified` (`scope: published-audit`) is written
  on the item in this pass, so it is not left published with no gate.

### Foundations: the three in-flight augmentations beyond the A3 letter

1. **D3b added `lem-nat-add-successor-left` besides the A3-named
   `thm-omega-is-peano-system`. KEPT.** Reader 1 verified the added dependency
   is genuinely load-bearing for the bridge as written (`σ(m) + i = σ(m+i)` is
   exactly that lemma) and that the fact text is exact. It also confirmed the
   cheaper trichotomy-only route exists and closes with no new dependency. I
   keep the P2 route: A3 explicitly preferred it, the text is verified correct,
   and swapping now would substitute fresh unreviewed text for certified text to
   save one true, already-declared edge. Recorded so the alternative stays
   inspectable.
2. **D4a/D4b added `lem-nat-add-commutative`. KEPT — required, not optional.**
   `lem-nat-add-cancellative` on disk cancels a **right** summand only ("if
   `m + k = n + k` then `m = n`"); both repairs cancel on the left. Faithful
   smallest correction.
3. **`[L3]` of `thm-well-ordering-principle` strengthened to full trichotomy.
   KEPT.** `lem-nat-trichotomy` states "exactly one of `m < n`, `m = n`,
   `m > n`"; the old `[L3]` ("either `s ≤ n` or `n < s`") was a strictly weaker
   paraphrase, so this is a faithfulness repair, not a strengthening of what is
   claimed. Both uses remain licensed — new step 2.1 needs exclusivity, existing
   step 2.2 needs only comparability.

---

## 2. D2 concurrences — all six concurred

For each, I independently decided whether the statement is a standard
established result. Amended rows appended to the batch `provenance.jsonl`
(last row per id wins) with `alpha_concurred: true`, `alpha_reviewer`, and my
rationale; the `ai-altered` provenance block written to the item.

| id | decision | ground |
|---|---|---|
| `lem-null-is-cauchy` | **concur** | "Every convergent sequence is Cauchy" is bedrock (Rudin 3.11(a), Tao §6.1); this is its limit-zero instance in ℚ with the standard ε/2 argument |
| `ex-one-over-n-null` | **concur** | The canonical first null sequence, and a direct restatement of the Archimedean property the item already cites |
| `lem-rat-inverse-well-defined` | **concur** | Representative-independence of the reciprocal is a named step in every construction of ℚ (Landau Ch. 2, Enderton Ch. 5, Tao §4.2) |
| `cex-pairwise-trivial-intersection-is-not-a-direct-sum` | **concur** | Refuted proposition sourced verbatim (Axler 4e, remark after 1.46); the witness — three distinct lines through the origin of a plane — is the canonical minimal separation |
| `ex-sum-and-intersection-in-f-three` | **concur** | Two coordinate hyperplanes of `F³` with `U+W = F³` and `U∩W` a coordinate line is the standard "a sum can be everything without being direct" computation (Axler Examples 1.37/1.42/1.44) |
| `ex-euclidean-algorithm-on-consecutive-fibonacci-numbers` | **concur** | Both halves standard: `gcd(F_{k+1}, F_k) = 1`, and the Lamé worst-case count (on `(F_{n+2}, F_{n+1})`, exactly `n` divisions) which is the item's claim at `n = m+1`. I verified the claim numerically at `m = 0,1,2`: `(2,1)` → 1 division `q=2`; `(3,2)` → 2, `q = 1,2`; `(5,3)` → 3, `q = 1,1,2`. The item states its `F₀ = 0` convention and explicitly disclaims Lamé's optimality theorem |

No refusals, so no fallback to `ai-generated` and no new genrisk seed from D2.

**Post-A6 provenance census** (276 distinct scoped items across the eight
ledgers, after my concurrences and classification amendments):

| `provenance.statement` | n | | `provenance.proof` | n | | ledger `evidence` | n |
|---|---|---|---|---|---|---|---|
| `ai-altered` | 205 | | `ai-generated` | 139 | | `semantic-source` | 199 |
| `literature-derived` | 64 | | `ai-altered` | 81 | | `exact-source` | 64 |
| `ai-generated` | 7 | | `not-applicable` | 56 | | `trivial` | 7 |
| | | | | | | `established-knowledge` | 6 |

All six `established-knowledge` rows carry `alpha_concurred: true`; all seven
`ai-generated` statements sit in the `trivial` evidence class.

**Gate state after A6.** `content-policy --audit --ledger` over the six
single-page batch manifests: **219 scoped items, 0 errors, 1 warning** (the
expected `generated-kind` note on `rem-counting-conventions-and-scope`, routed to
its genrisk disposition). The real-analysis manifest run adds 22
`batch-duplicate-item` errors and **nothing else** — that manifest holds both
construction pages and the 22-item ℤ/ℚ prelude is listed on both, a manifest
scoping artefact for the orchestrator, not a content defect.

---

## 3. Classification reviews — all three upheld

- **`cex-same-cardinality-without-a-canonical-bijection`: UPHELD
  `ai-generated` / `trivial`, `generation.role: counterexample`.** The label
  classifies the *witness the item constructs*, not the surrounding observation.
  `A := 2 = {0,1}`, `B := [2]¹ = {{0},{1}}` is a bespoke pair no source picks,
  and the refuted claim ("two equinumerous finite sets admit exactly one
  bijection") is a constructed foil rather than a proposition any text states —
  precisely the bespoke/checkable-witness species the §6 table assigns to
  `ai-generated`. This is the deliberate contrast with the two linear-algebra D2
  concurrences above, where the refuted proposition is a sourced textbook remark
  and the witness is the canonical named picture. **Truth-risk discharged by me
  directly:** `|A| = 2`; `|B| = C(2,1) = 2`; `{0} = {∅}` and `{1} = {{∅}}` are
  distinct; `2! = 2`; `f(0)={0}, f(1)={1}` and `g(0)={1}, g(1)={0}` are both
  bijections and differ at `0`. Blast radius nil (zero `deps` consumers).
- **Number-theory E2 (`def-common-divisor-and-gcd`, `def-lcm`, and by extension
  `def-int-abs`): UPHELD `provenance.proof: not-applicable`.** SCHEMA's proof
  component is the local Proof / Verification / Refutation section; these items
  have none and carry `precheck: n/a`, and the owner's component-provenance rule
  states in terms that definitions and remarks use `not-applicable`. The inline
  existence argument is real but lives in the Definition, which the honest
  `statement: ai-altered` tag already covers; retagging would make these two
  outliers against every other definition in the wave. I also considered moving
  the discharge to `justified_by` and **declined on a structural ground**:
  SCHEMA line 101 requires a `justified_by` target to transitively *depend on*
  this item, and `depcheck` raises `justification-duplicated` for an id in both
  lists — both `lem-divisor-bound` and `lem-int-bounded-above-has-greatest` are
  backward `deps` here, so `justified_by` is the wrong field.
- **Number-theory E3 (`lem-coprime-divides-product` clause 2): UPHELD
  `ai-altered` / `semantic-source`.** Clause 1 is located verbatim; clause 2
  (`a|c`, `b|c`, `gcd(a,b)=1` ⇒ `ab|c`) is standard and, decisively, is *proved
  in this item from clause 1 in two steps*, so the merged statement introduces
  no unsourced content. `semantic-source` explicitly covers a statement
  "specialised/**merged** without changing content", and it keeps a
  reader-visible URL on the item rather than spending the D2 waiver.

---

## 4. The one fatal-class finding at A6: the topology R4 repair

The A4 R4 repair corrected three "there is no extended real line" sentences to
"the extended real line is **not used for suprema**". Reader 4 refuted that as a
second false claim about the library, and **I confirmed it from disk**:

- `items/lem-extended-reals-complete.md` (published), line 55:
  `$\sup \emptyset = -\infty$, $\inf \emptyset = +\infty$ in $\overline{\mathbb{R}}$`
- `items/def-limsup-liminf.md` (published), line 45:
  "the supremum and infimum taken in $\overline{\mathbb{R}}$"

So both clauses of the repaired `def-metric-bounded-diameter` sentence and the
`lem-sup-metric-is-a-metric` clause were false as written. Classification:
**confirmed fatal, defect type `other` (false claim about the library in
published prose) at location "page prose / Remark"** — the same
published-claim-decay class F1 was created to fix, reintroduced by its own fix.

**My repair (three items), using the R8 "later page" pattern the same batch
already applied correctly.** Reading order verified from `research/plan-spec.json`:
`metric-spaces` = 116, `metric-spaces-examples` = 117, `limsup-and-subsequential-limits`
(home of `def-extended-reals`) = 122, so "introduced on a later page" is true.

| item | old (post-A4, false) | new |
|---|---|---|
| `def-metric-bounded-diameter` | "the extended real line is not used for suprema, and there is no convention $\sup \emptyset = -\infty$" | "the extended real line is introduced on a later page and is not used for the suprema and infima taken here, and no convention $\sup \emptyset = -\infty$ is in force in this development" |
| `lem-sup-metric-is-a-metric` | "which this library does not use for suprema" | "which is introduced on a later page and is not used for the suprema taken here" |
| `lem-real-line-is-a-metric-space` | "is a claim about this library's conventions … the extended real line is not used for them" | "is a claim about the conventions of this development … the extended real line, which is introduced on a later page, is not used for them" |

Independently certified (all three CERTIFY) by a fresh reader, which verified
from disk that every `\infty` in the 26 items of `metric-spaces.md` and the 12
of `metric-spaces-examples.md` is a subscript or interval notation and that no
supremum in the development takes a value in `ℝ̄`. `reflow` and `precheck`
clean; stamps written.

**Root cause, and an owner-queue item.** All three sentences inherited the false
premise from `items/rem-sup-conventions.md` (page `suprema-and-infima`, order
14), which still says "**This library does not adopt them.**" and "$\sup
\emptyset$ and $\inf \emptyset$ are simply undefined". That item is **out of
wave-0 scope** (different page, different wave), so I did not repair it. It is
the clearest published-claim-decay finding of the wave and belongs in the A10
owner queue / the wave that owns page 14. The fix there is small: the remark's
own closing paragraph already contains the correct scoping ("If a later page
needs $\overline{\mathbb{R}}$ … it will introduce it explicitly"), and only the
two absolute sentences need narrowing.

**Topology R3 linkage decision (deferred to me at A3): DO NOT wikilink
`def-extended-reals` from `rem-metric-axiom-conventions`.** Evidence: the target
is on a strictly later page, so a bare wikilink is a hard `fwdcheck`
`forward-undeclared` error; declaring it in `forward_refs` would make the edge
load-bearing, because `rem-metric-axiom-conventions` has no `## Remarks` section
and `fwdcheck` treats everything outside one as load-bearing — the reader
computed that this would seed the sky ↗ forward-dependent chip across a
**197-item** transitive cone, including spine definitions like
`def-norm-and-normed-space`, none of which rests on the extended real line. The
honesty gain is near zero: the corrected passage already writes
`ℝ̄ = ℝ ∪ {−∞, +∞}` out in full and already carries an
"Extended real number line (Wikipedia)" reference.

---

## 5. Deferred debatable restatements (R1) — my adjudications

I am the final adjudicator; every edit below was authored by me and certified by
an independent reader who did not write it.

| ref | decision | what I did and why |
|---|---|---|
| dedekind **D6** (Bernoulli folded into `lem-cut-reciprocal` [L5]) | **restate** | The fact imported a *named theorem the library never proves*, attributed to nothing — an invisible unproved dependency inside a critical-risk proof, which is exactly what the ‡ machinery exists to make visible. Replaced the bare "(Bernoulli, by induction from ℚ arithmetic)" with the explicit induction: base `n = 1` both sides `y`; step multiplies by `y > 0` and expands `(1+(y−1))(1+n(y−1)) = 1 + (n+1)(y−1) + n(y−1)² ≥ 1 + (n+1)(y−1)`. The item was already material this wave, so no extra stamp churn beyond re-certification |
| dedekind **D8** (`ex-sqrt2-cut` title "is $\sqrt2$") | **retitle** | The Verification proves cut-ness and `S ≠ p*` for every rational `p`, never `S·S = 2*`, and the library defines no square root of a real number — so the old title asserted an identity **not formulable in-library**, which is worse than an overreach. Retitled to "… is an irrational real number" and changed the two prose clauses to "the cut that names $\sqrt2$". Id unchanged, reading order unchanged, so inside R1. The mitigation (sources name it identically) is real but does not license a title the page cannot cash |
| dedekind **D10**, Tao curation | **drop** | Tao *Analysis I* constructs ℝ from Cauchy sequences, not cuts, so the reference does not support cut-specific material. Removed from the 8 dedekind items; each retains 2–4 reader-visible URLs (all gained cut-specific sources at A4), so no `content-policy` obligation is broken |
| dedekind **D10**, about-the-book Rudin URL | **decline** | This is the corpus-wide pattern (36 topology items, Stanley/Halmos in combinatorics) already queued for the A10 owner. Fixing 8 dedekind instances while leaving 36 topology ones would be arbitrary; it belongs to the single corpus-wide decision |
| cauchy **D-6** (page prose) | **soften** | "it fills the holes once and for all, since completing $\mathbb{R}$ by the same device yields nothing new" asserted a theorem the corpus does not prove. Replaced with "the construction cannot be iterated to gain anything further: [[thm-reals-cauchy-complete]] already gives every Cauchy sequence of reals a real limit", which says exactly what the page proves |
| foundations **D5c** (von Neumann order/membership Remark) | **scope note, not the Kaya URL** | The library *does* prove this: `lem-nat-order-is-membership` clauses 1 and 2 are exactly `m < n ⟺ m ∈ n` and `m ≤ n ⟺ m ⊆ n`. But it lives on `countability-and-uncountability` (order 18) while `def-nat-order` is on order 6, so a wikilink would be a forward reference whose `forwardDependent` propagation would ripple across the whole ℕ/ℤ/ℚ/ℝ stack. Appended instead: "That coincidence is not proved here; it is derived from the additive definition above on a later page." True, honest, names where the proof lives, adds no forward-reference machinery and no unverified URL. Better than citing an external text for something the library establishes itself |

`ex-sqrt2-cut` and `lem-cut-reciprocal` are **material** as a result: their stale
stamps were deleted before my edits and `verification.verified` is written only
on the independent reading.

All five were certified by an independent reader (A–E all CERTIFY), which
returned three substantive follow-ups. I acted on all three:

1. **`lem-cut-reciprocal` `[L4]` was a pre-existing inaccurate citation** — it
   attributed "the order is compatible with the arithmetic" to `thm-rat-field`,
   whose Statement is order-free ("a commutative ring with $1 \ne 0$ in which
   every nonzero element has a multiplicative inverse"), while the order facts
   live in `thm-rat-ordered-field`, which was **not in `deps`**. Steps 1.1, 1.2,
   1.3, 3.1 and the Bernoulli step all rest on it, and the sibling
   `lem-rat-cut-embeds` `[L6]` cites it correctly, so this file was the outlier.
   **Repaired:** `[L4]` split so the field clauses cite `thm-rat-field` and the
   order clauses quote `thm-rat-ordered-field`'s Statement verbatim; that id
   added to `deps`; the merged contract given the matching exact-quote citation
   entry. This is the dominant defect class, found only because a reader of an
   *adjacent* Alpha edit read the whole fact block.
2. **`def-nat-order` kept `verification.audited` beside a changed Remark.** The
   reader argued the D5c note is material and the stamp should follow §9. I
   accept the stricter reading over my own: `audited: 2026-07-25` removed and
   `verification.verified` (`scope: published-audit`) written on the strength of
   that reader's certification of Edit C. Where the material-rewrite test is
   genuinely arguable, the honest direction is the one that claims less.
3. **`ex-sqrt2-cut` retagged `literature-derived` → `ai-altered`, evidence
   `exact-source` → `semantic-source`.** The owner rule retags a materially
   AI-repaired statement component, and I narrowed this item's advertised claim.
   The *set* is still verbatim the sources' construction, which is why the
   located URLs stand and the class stays source-backed rather than dropping to
   `none`. Amended ledger row appended with the reasoning.

I declined the reader's two cosmetic suggestions (moving the `√2` naming clause
out of numbered step 4.1; naming the destination page in `def-nat-order`'s
pointer) as the 30-second/stylistic class.

The cauchy page file keeps its state, carrying no verification stamp.

---

## 6. Cross-batch, backward and forward edge audit — 1,104 / 1,104

Audited against `research/audit/wave0-audit-manifest.json` (summary:
1,166 same-batch, 631 cross-batch, 448 published-backward, 25 forward). The
1,104 non-same-batch edges are Alpha's independent pass; the same-batch edges
were verified by the Betas at A2 and re-verified for every repaired item by the
§1 certification readers.

Seven readers, grouped by source batch, each ordered to do edges into repaired
targets first:

| reader | scope | coverage | fatal |
|---|---|---|---|
| topology part 1 | 175 edges / 17 sources | 175/175 | 0 |
| topology part 2 | 127 edges / 17 sources | 127/127 | 0 |
| combinatorics part 1 + real-analysis | 100 + 18 edges / 26 sources | 118/118 | 0 |
| combinatorics part 2 | 182 edges / 19 sources | 182/182 | 0 |
| number-theory part 1 | 104 edges / 17 sources | 104/104 | 0 |
| number-theory part 2 | 133 edges / 17 sources | 133/133 | 0 |
| abstract-algebra + linear-algebra | 166 + 99 edges / 47 sources | 265/265 | 0 |

**Total 1,104 / 1,104. Zero fatal citation defects.** Foundations contributes no
non-same-batch edges (it is the bottom of the wave), which is why it has no row.

Every one of the 292 edges whose target is one of the 65 materially changed
items was read against the target's post-repair disk text and found still
licensed. Three readers independently diffed `87c4025..c355590` for the repaired
targets and reported the same structural fact, which is the load-bearing premise
of the impact receipt: **no repaired item's Statement, Definition or title
changed**, with the two exceptions recorded in §8.

Convention drift — the specific thing this pass exists to catch — came back
clean in every batch: `0 ∈ ℕ` and the additive order used uniformly; the
division algorithm never silently widened past its `b > 0` hypothesis; `gcd`
nonnegative with `gcd(0,0) = 0` respected everywhere; `def-countable`'s
"at most countable" convention never leaned on; `lem-nat-embeds-int` never
assumed to *reflect* order.

Nonfatal classes recorded (not chased, per the standing triage rule): declared-
but-unused `deps` edges; facts attributing a definition-unfolding to the item
that defines the notion (`def-injection-surjection-bijection` for "a composite of
bijections is a bijection", 12 items — a house pattern); understated targets
(the safe direction); strict-vs-nonstrict co-citations. Two worth naming for a
future wave because they are the same shape as defects that *were* repaired
here: `thm-pascals-rule` `[L7]` cites `def-natural-numbers` for `m ∉ m`, which
that item does not state (the home is `lem-nat-order-is-membership`); and
`fs-cardinality-of-a-union-adds-without-disjointness` `[L3]` cites
`lem-nat-trichotomy` for `1 ≠ 2`, which trichotomy alone cannot give — though it
does follow instantly through the membership characterisation the page uses
everywhere. Both are sub-30-second and both sit on pure-retag items; repairing
them would materialize items for a quirk, which the triage rule forbids.

Reconciliation note so omission is visible: the four number-theory edges
`cor-common-divisor-divides-gcd → {def-int-order, thm-int-ordered-ring}` and
`ex-gcd-with-zero → {def-int-order, thm-int-ordered-ring}` appear in the manifest
but no longer exist on disk. That is correct and expected — the manifest was
generated at A0 from pre-A4 `deps`, and the A4-1/A4-3 repairs deleted exactly
those four edges. The edge auditor, lacking the A4 context, suggested re-adding
them; I decline, because reader 5's independent step-by-step re-derivation
established that no step uses those order properties and `def-int-abs` (still in
both items' `deps`) carries them.

---

## 7. Risk reviews — 177 high/critical items

`risk-report.mjs` routes 177 of the 209 merged-contract items to Alpha (85%; the
score is a size-and-language proxy, so the tier is volume-driven rather than a
claim that 85% of the corpus is risky). Seven grouped read-only proof-refuter
sweeps, all held to the judges' adversarial standard and the 30-second rule:

| sweep | items | coverage | fatal | nonfatal |
|---|---|---|---|---|
| foundations | 20 | 20/20 in full (+14 dependency items) | **0** | 4 |
| combinatorics | 30 | 30/30 in full | **0** | 3 |
| topology | 29 | 29/29 in full (+19 dependency items) | **0** | 6 observations |
| real-analysis | 28 | 28/28 in full (+23 dependency items) | **0** | 3 |
| number-theory | 28 | 28/28 in full (+27 dependency items) | **0** | 1 |
| abstract-algebra + linear-algebra | 42 | 42/42 in full (+24 dependency items) | **0** | 2 |
| **total** | **177** | **177/177** | **0** | **19** |

The foundations sweep additionally ran a mechanical cycle check over the 34-item
ℕ dependency cone and reported **no cycles** — in particular the
`def-nat-addition` / `cor-nat-addition-well-defined` pair is acyclic, and
`lem-nat-discrete` / `lem-nat-trichotomy` do not rest on
`thm-well-ordering-principle`. The combinatorics sweep re-verified every
arithmetic evaluation on the page and every claimed bijection in both directions.
The topology sweep confirmed choice is used exactly once
(`thm-metric-sequential-closure` step 1.2) and is declared in the Statement, the
Facts, the step and a Remark.

Notable nonfatal findings I adjudicated and declined to repair:

- **`thm-recursion` `[L1]` links `thm-induction-principle` (the ℕ-specific
  instance) for a claim about an arbitrary Peano system**, where P3 of
  `def-peano-system` is the right target. Same class as the D3c repair applied
  to `thm-peano-categoricity`. **Nonfatal, no repair:** the fact text already
  names "axiom P3" and quantifies over `N`, and `def-peano-system` is already in
  `deps`, so a reader closes it instantly — while `thm-recursion` is a very
  high-fan-out spine item whose materialization would cost a re-certification,
  a rejudge and a large impact closure for one wikilink. Recorded as the
  strongest cheap-follow-up candidate.
- `lem-nat-trichotomy` steps 1.3/2.1 and `lem-nat-discrete` step 2.1 use
  "nonzero witness ⟹ strict" and an antisymmetry contradiction without citing
  commutativity/cancellation or `thm-nat-linear-order`. Every needed fact is
  already on the page; step 1.2 of the same proof writes the move out in full.
- `cex-induction-axiom-necessary`'s title says "independent", where the witness
  establishes non-derivability of P3 from {P1,P2}; the "Statement refuted" is
  correct as stated, and the other half is `thm-omega-is-peano-system`.

Two further nonfatal findings worth naming because they are Statement-level, not
proof-step-level: `ex-additive-and-multiplicative-groups-of-a-field` and
`ex-integers-mod-n-additive-group` each assert an infinitude claim in the
Statement that the Verification never discharges. Both are true and closable in
seconds from the ℕ embedding plus `lem-pigeonhole`, and neither licenses any
downstream step, so neither is repaired; recorded because Statement-level
over-claim is the class the step-6 charter calls fatal, and I want the judgement
inspectable. Likewise `ex-gcd-and-lcm-as-subgroups-of-z` step 5.1 calls `6` "the
smallest positive such value" with no fact licensing minimality.

**Corroboration worth recording:** the real-analysis sweep independently reached
the same two conclusions I had already acted on hours earlier under R1 — the
`ex-sqrt2-cut` title over-claim and the `lem-cut-reciprocal` `[L5]` Bernoulli
import — having read the pre-repair text. Two independent routes to the same two
defects is the strongest evidence in this report that the R1 calls in §5 were
right rather than fussy.

Every high/critical item carries an Alpha `risk_review` record in
`research/audit/wave0-proof-contracts.merged.json` naming its refuter sweep, the
finding count and the disposition. `node tools/risk-report.mjs
research/audit/wave0-proof-contracts.merged.json --require-reviewed` → **0
errors, 209 items routed**; `proof-contract.mjs --strict` → **0 errors, 209/209**.

I deliberately did **not** mirror these into the eight batch
`*.proof-contracts.json` files: those hold the Betas' own A2/A4 records, and
overwriting them would destroy evidence. **Orchestrator note:** the merged file
is therefore the only carrier of the `risk_review` block, so re-running
`merge-proof-contracts.mjs` from the batch files would drop all 177 and reopen
the gate.

---

## 8. `genrisk` and `impact-audit`

**`genrisk`.** 30 seeds, 28 zero-cone (no disposition required), 2 load-bearing,
both combinatorics, both `cone_size: 1`. I verified both cones from disk before
disposing: in each case the single consumer does **not** list the seed in its
`deps` and mentions it once as a navigational pointer in prose.

| seed | disposition | ground |
|---|---|---|
| `cex-a-count-that-double-counts` | `verified-generated` | retag declined (bespoke witness); restate/narrow declined (statement already minimal, repaired and certified this wave); unfold not applicable (no `deps` edge exists to remove — the consumer's mention is a Remark wikilink). Truth risk discharged: arithmetic witness checked, repaired structural claim independently re-derived, item covered by the combinatorics refuter sweep and both A7 lanes |
| `rem-counting-conventions-and-scope` | `verified-generated` | retag declined for a structural reason: this is the page's own conventions ledger, so no external source can state it and `ai-generated` is the honest label; nothing to restate, narrow or unfold. Consumer's mention is one prose pointer |

`node tools/genrisk.mjs --receipt research/audit/genrisk.json` → exit 0
(two expected `verified-generated-seed` warnings).

**`impact-audit`.** Receipt filled and signed: 270 changed interfaces, 2,451
dispositions, all `still-licensed`, reviewer
`audit-alpha (claude-opus-5, high reasoning effort), wave 0 step A6, 2026-08-02`.
44 consumers are affected only through pure retags and are disposed wholesale
citing `wave0-impact-classification.json`; the other 2,407 name each of their
materially repaired upstream interfaces individually in their note.

The evidence chain in each note: (a) the git-diff classification splits the 270
interface changes mechanically into 205 pure additive provenance/sources retags
and 65 material changes; (b) a consumer's licence rests on what its target
*states*, and the independent certification readers verified from the baseline
diff that **no Statement, Definition or title changed in any of the 65** — the
changes are Facts rows, step tags, `deps` entries, source URLs and stamps, plus
ten prose corrections named per item in the receipt; (c) the §6 edge audit
re-read all 1,104 non-same-batch edges against current disk text, giving every
edge into a repaired target a fresh semantic check.

The two exceptions to (b), both recorded explicitly in the receipt notes:
`fs-closed-ball-is-the-closure-of-the-open-ball`, whose Statement's *descriptive
clause* was aligned to the actual witness while the false claim itself is
unchanged; and `lem-nat-discrete`, whose **Given** was *corrected* from a wrong
gloss of the strict order to `def-nat-order`'s actual additive definition — a
strengthening of the proof, never a weakening of what the item provides.

`node tools/impact-audit.mjs --touches research/audit/wave0-touches.json --from pre-A4 --receipt research/audit/wave0-impact-audit.json` → exit 0.

**Orchestrator note:** my A6 edits (§4, §5) and the `verification.verified`
stamps postdate the `post-A4` snapshot, so the touch ledger needs a fresh
post-A6 snapshot before the A7 context freeze, and the receipt will need
regenerating from that baseline if the orchestrator wants it to span A6 as well.

---

## 8b. Gate state at the end of A6

| gate | result |
|---|---|
| `proof-contract.mjs --strict` (merged) | **0 errors, 0 warnings, 209/209** |
| `risk-report.mjs --require-reviewed` | **0 errors, 209 routed** |
| `content-policy.mjs --audit --ledger` (6 single-page manifests) | **219 scoped, 0 errors, 1 expected warning** |
| `content-policy.mjs --audit --ledger` (real-analysis manifest) | 22 `batch-duplicate-item` and nothing else — manifest artefact |
| `genrisk.mjs --receipt` | **exit 0** (2 expected `verified-generated-seed` warnings) |
| `impact-audit.mjs --receipt` | **exit 0** |
| `rendercheck.mjs` / `fwdcheck.mjs` / `extcheck.mjs` | **exit 0** |
| `precheck.mts` on every item I changed | all PASS |
| `reflow.mts` on every item I changed | `unchanged` (already canonical) |
| `depcheck.mjs` | **OK - no cycles, all references resolve, no draft items on published pages.** The `published-unaudited` transient is fully closed: 51 items carry `verification.verified` with `scope: published-audit`. `cited-not-in-deps` (114) and `multi-home` (38) are pre-existing corpus-wide warnings, not errors, and no wave-0 repair created one |

`level-coverage.mjs --audit --verify-current-context` is not runnable yet: it
requires the A7 judge ledger, which does not exist until the sweep runs.

---

## 9. Items materially changed since the judges would last have seen them

A7 judges every wave-0 item regardless (R2), so this list is for the record and
for any targeted A8 rejudge, not a coverage instruction.

**Changed at A4 (49):** the full `published-unaudited` set of §1 —
combinatorics 8, foundations 16, linear-algebra 1, dedekind 6, cauchy 2,
number-theory 5, abstract-algebra 2, topology 9.

**Changed again at A6 by Alpha (8):**

| item | change | certified by |
|---|---|---|
| `thm-vandermonde-identity` | `[L7]` order clause: degenerate instance → the universally quantified clause 3 of `lem-nat-order-is-membership` (two attempts; see §10) | second independent reader |
| `lem-cut-additive-inverse` | `[A2]` gained the missing `M ∈ ℤ` type hypothesis its own justification needs | independent reader |
| `def-metric-bounded-diameter` | decay correction (§4) | independent reader |
| `lem-sup-metric-is-a-metric` | decay correction (§4) | independent reader |
| `lem-real-line-is-a-metric-space` | decay correction (§4) | independent reader |
| `lem-cut-reciprocal` | `[L5]` Bernoulli unfolded inline (§5), **and** `[L4]` order clauses re-attributed to `thm-rat-ordered-field` + `deps` (§5 follow-up 1) | two independent readers, one per edit |
| `ex-sqrt2-cut` | retitle + two prose clauses (§5), then provenance retag to `ai-altered` (§5 follow-up 3) | independent reader |
| `def-nat-order` | Remark scope note (§5); reclassified **material** on the reader's stricter reading, `audited` removed, `verified` written (§5 follow-up 2) | independent reader |

**Reference-metadata only, non-material (8):** the Tao drop on `def-real-dedekind`,
`lem-rational-cut-is-cut`, `lem-cut-order-total`, `lem-cut-reciprocal`,
`thm-reals-dedekind-field`, `thm-reals-dedekind-ordered-field`,
`lem-cut-archimedean`, `thm-dedekind-complete`.

**Page files changed:** `library/real-analysis/construction-of-r-via-cauchy-sequences.md`
(D-6), plus the two foundations page-prose narrowings applied at A4.

---

## 10. Escalation list (refuted or repaired more than once)

Per the brief, an item refuted or repaired more than once escalates to the
orchestrator's personal audit. Measured from the A4 record plus this pass:

1. **`thm-vandermonde-identity`** — repaired at A4 (R5, `[L7]` reattribution),
   repaired again by Alpha at A6, **and that Alpha repair was refuted by its
   certifying reader** (the letter `m` was already bound in the item, in the same
   fact, by `|M| = m`), then repaired a third time and certified. Three touches
   on one fact. The current text is
   `and $j < \sigma(k) \iff j \le k$ for every $j \in \mathbb{N}$, so $\sigma(k) = \{0,1,\dots,k\}$`,
   verified free of capture and verified to license step 1.2's varying-cardinality
   move, which neither earlier version did.
2. **`def-metric-bounded-diameter`, `lem-sup-metric-is-a-metric`,
   `lem-real-line-is-a-metric-space`** — repaired at A4 (R4), the repair
   confirmed fatal at A6, repaired again by Alpha. Two touches each, the second
   correcting the first.
3. **`lem-cut-reciprocal`** — repaired at A4 (D5, `[L6]`), certified; repaired
   again at A6 (D6, `[L5]` Bernoulli unfolded), certified; **repaired a third
   time** at A6 after that certifying reader found the adjacent `[L4]`
   misattribution. Three touches on three different facts of one item, each
   found by a different reader. This is the item the escalation rule most wants
   the orchestrator to look at — not because anything is unresolved, but because
   its Facts block needed three passes to become accurate, which is a signal
   about the block rather than about any single defect.

All necessary fixes are made; the items are listed here because the escalation
rule asks for visibility, not because any is unresolved.

---

## 11. Owner queue additions from A6

Beyond the queue the Betas and A3 already assembled (about-the-book URLs
corpus-wide; page-summary count claims; the dedekind D9 reading-order swap; the
bare-`[A#]` ℕ-arithmetic sweep on the ℤ/ℚ prelude):

1. **`items/rem-sup-conventions.md` is decayed** (§4). Its "This library does
   not adopt them" and "$\sup \emptyset$ and $\inf \emptyset$ are simply
   undefined" are falsified by the published `lem-extended-reals-complete`. Out
   of wave-0 scope; it is the false premise three wave-0 items inherited.
2. **`depcheck`'s corpus-wide `cited-not-in-deps` warning class: 114 instances**,
   none of them created by this wave and most outside it (for example
   `thm-sequential-criterion-for-function-limits`, which cites three items in
   Statement/Facts without declaring them). These are warnings, not errors, so
   nothing gates on them — but 114 is a standing measurement of the dominant
   defect class this audit exists to close, and it is worth an owner decision on
   whether future waves should clear their own share. (Corrected from an earlier
   draft of this report, which mistakenly called two of them errors: the only
   `depcheck` ERROR at any point in A6 was the designed `published-unaudited`
   transient.)
3. **`risk-report`'s tiering is a size proxy**, flagging 177 of 209 items. It
   did its job as a routing net — the sweeps it forced are what produced §7 —
   but a tier that catches 85% of a corpus gives Alpha no prioritisation signal,
   and it found nothing the certification and edge passes had not. Worth a
   calibration decision before the waves get wider.
4. **A legacy positional/survey claim in an item Remark:**
   `ex-integers-under-addition` describes itself by reading position. SCHEMA §6
   bans that going forward for A-page summaries; this is a legacy item Remark
   and belongs with the page-prose count claims already queued.
5. **Two Statement-level infinitude claims that no Verification discharges**
   (`ex-additive-and-multiplicative-groups-of-a-field`,
   `ex-integers-mod-n-additive-group`, §7). Both true, both nonfatal, both
   cheap to close in a later wave with a single cited fact — listed so the
   owner can decide whether Statement-level over-claim should be chased even
   when it is sub-30-second.
6. **`merge-proof-contracts.mjs` must not be re-run from the batch files** for
   wave 0 without re-applying Alpha's 177 `risk_review` records (§7).

---
---

# Wave 0 — Audit-Alpha, step A8 (adjudication of the paired-judge rejections)

Date: 2026-08-02. Alpha: Opus 5 (`claude-opus-5`) at high reasoning effort.
Lineup change recorded by the orchestrator mid-stage by owner instruction: the
Claude judge lane is **Sonnet 5**, not Opus (the headless Opus lane refused
about 80% of calls under 16-way concurrency — a capacity refusal, not a
verdict). Effective lineup `deepseek+sonnet`, injection-tested (`judge.mts`
PASS 5). The parked Opus rows in `wave0-judge-opus-superseded.jsonl` are
informational and were not adjudicated against.

## A8.0 Coverage and the hash check

276/276 items covered in both lanes, zero nulls. DeepSeek 249 keep / 27 reject;
Sonnet 243 keep / 33 reject; **60 rejections over 48 distinct items, 12 of them
rejected by both lanes.**

Before adjudicating anything I verified the ledger mechanically: every one of
the 60 rejections in `wave0-judge-rejections.json` matches the **current** row
for its `id`+`model` in `wave0-judge.jsonl` (552 distinct id|model pairs from
553 rows, last-wins), **60 hash matches, 0 mismatches or missing rows**. Every
adjudication in `wave0-judge-adjudications.jsonl` therefore carries the
`context_sha256` of the exact verdict it answers, taken from the ledger rather
than transcribed.

## A8.1 Outcomes

| outcome | rows |
|---|---|
| `false_positive` | **16** |
| `confirmed_nonfatal` | **38** |
| `confirmed_fatal` (`dependency_citation` 3, `other` 3) | **6** over **5 distinct items** |
| total | **60** |

Method: five read-only Opus 5 evidence investigators, clustered by subject, each
required to quote the item text and the cited target's text side by side and to
answer a fixed six-field template — is the claim true; is it derivable from the
cited target *plus the item's declared `deps`*; does any step's conclusion fail.
**I verified every finding that would flip an outcome to `false_positive` or
`confirmed_fatal` myself, from disk.** That mattered: the topology investigator's
first summary claimed `[L3]` of `lem-metric-limits-unique` "restates
nonnegativity" and that `def-metric-ball` "names both items", and my own reading
found both claims wrong — `def-metric-space` deliberately omits nonnegativity
from its axiom list, and the Remark names one item. Both rejections were graded
nonfatal rather than dismissed as a result.

### The dividing line I applied

The 30-second rule governs **gaps between proof steps**; it does not license a
**false assertion**, which is not a gap. Within citation defects I separated two
shapes that the judges tend to report identically:

- **under-reporting a correct source** — the fact names the right target and the
  target's Statement contains the needed clause, so the reader closes it by
  looking → `confirmed_nonfatal` (e.g. `lem-associates-characterisation`,
  `thm-gcd-lcm-product`, `lem-group-homomorphism-basic-properties`);
- **misattribution to a wrong source, or a source absent from `deps` entirely,
  for a load-bearing claim** → `confirmed_fatal / dependency_citation` (e.g.
  `thm-reals-dedekind-field`, `ex-integers-mod-n-additive-group`).

And, following the step-6 charter, **a title asserting more than the proof
gives is fatal-class**, because the judges cannot see titles — which is exactly
why it lands on me.

### Why 16 false positives

Nine of the sixteen are the lane talking itself out of its own verdict inside
the reason text and recording `reject` anyway — `thm-division-algorithm-in-z`
("On reflection the proof is sound"), `def-sum-over-a-finite-index-set` ("keep
true actually"), `thm-generalised-associativity` ("so this is licensed"),
`def-group-power` ("no defect found"), `ex-sum-and-intersection-in-f-three` ("No
fatal defect found; accepting"), plus two degenerate outputs whose "reason" is
audit-harness meta-text (`thm-rat-field`, `cor-nat-multiplication-well-defined`).
The rest are misreadings I checked personally: `lem-gcd-basic-values` (the judge
read only the first display of `lem-divisor-bound`'s Statement and missed its
second paragraph, which states the cited clause verbatim);
`lem-symmetric-group-is-a-group` (the cited definition's Remarks say
word-for-word what the judge said was absent); `lem-order-characterisation`
(DeepSeek asserted two items are not page siblings — the page file lists both);
`lem-rat-triangle` (the cited theorem's own words assert ℚ is a *field*);
`lem-cut-order-total` (treats "the order is total" as weaker than a total
order); `ex-integers-under-addition` (names `[L2]` as supplying the very move it
calls unlicensed, and `[L2]` is tagged on the step).

This is a useful measurement for A10: **27% of rejections in this lineup were
not defects**, and the single largest sub-class is a lane recording `reject`
while its own reason concludes `keep`.

### Per-lane comparison (for A10 and the lineup decision)

| lane | rejections | false positive | confirmed nonfatal | confirmed fatal | precision |
|---|---|---|---|---|---|
| `deepseek-v4-pro` | 27 | **2 (7%)** | 20 | **5** | high |
| `claude-sonnet-5` | 33 | **14 (42%)** | 18 | **1** | low |

The two lanes are not interchangeable in this lineup. DeepSeek found **five of
the six fatal rows** and was wrong about a rejection only twice. Sonnet's
rejections were false positives 42% of the time, and the dominant failure is
structural rather than mathematical: **recording `reject` while its own reason
text concludes `keep`** ("On reflection the proof is sound", "keep true
actually", "no defect found on inspection"), plus two outputs whose "reason" is
audit-harness meta-text. That pattern is a verdict-extraction problem, not a
reasoning problem — Sonnet's *prose* is often right where its *flag* is wrong,
and on the both-lane findings its analysis was frequently the sharper of the
two (it named the exact missing right-cancellation clause, and it alone caught
the gcd(0,0) circularity). Worth the owner's attention when the lineup is next
revisited: the Sonnet lane may need a stricter verdict-parsing contract rather
than replacement.

Of the 48 distinct rejected items, **14 had every rejection dismissed as a false
positive**, and **5 carried a confirmed fatal**.

## A8.2 The six `confirmed_fatal` rows, and their repairs

| item | lane(s) | type | defect | repair |
|---|---|---|---|---|
| `lem-rat-cut-embeds` `[L5]` | deepseek | `dependency_citation` | **Literally false.** The fact asserted the cut-product formula "for $A, B \ge 0^{*}$". At $A = 0^{*}$ no $a \in A$ is positive, so the second set is empty and the formula yields $\{q \le 0\}$ — which has greatest element $0$, is therefore **not a cut at all**, and is not $0^{*}$. `def-cut-multiplication` restricts it to $A,B > 0^{*}$ and its Remark explicitly disclaims the boundary. `[L5]` was also self-contradictory, its next clause giving $A\cdot B = 0^{*}$ when $A$ is $0^{*}$ | `\ge 0^{*}` → `> 0^{*}` |
| `thm-reals-dedekind-field` `[L7]` | deepseek | `dependency_citation` | Attributed "products of positives are positive" to `thm-rat-field`, whose Statement has **no order content whatever**; `thm-rat-ordered-field` was absent from `deps` while steps 1.1, 1.3, 2.1 and 5.1 use ℚ's order substantially | `[L7]` split, field clauses → `thm-rat-field`, order clauses → `thm-rat-ordered-field`, which is added to `deps` |
| `ex-integers-mod-n-additive-group` step 3.1 | deepseek | `dependency_citation` | "the elements of the natural number $n$ being exactly the naturals $s<n$" is **load-bearing** (surjectivity of $\varphi$, hence $\lvert\mathbb{Z}/n\rvert = n$) and licensed by nothing: `lem-nat-order-is-membership` appears nowhere in the item, `deps` included, and the cited `def-nat-order` *explicitly disclaims* the property | clause added to `[L2]` citing the lemma; lemma added to `deps` |
| `ex-r-as-a-vector-space-over-q` title | **both** | `other` | The title named a proof method the item's own Statement says **cannot** be used: "Claim 3 … is proved directly rather than by restricting scalars, because restriction of scalars requires a subfield." `lem-restriction-of-scalars` concludes over the subfield $\mathbb{Q}_{\mathbb{R}}$, never over $\mathbb{Q}$ | retitled to attach restriction of scalars to the embedded copy and to say the ℚ-structure comes via the embedding |
| `ex-pascals-triangle-to-row-six` title | deepseek | `other` | Title claimed "Pascal's rule checked at **every** entry"; boundary entries come from `[L1]`, and a left-boundary $\binom{n}{0}$ is not of the form $\binom{n+1}{k+1}$, so Pascal's rule **cannot** be applied to it at all | title → "every **interior** entry"; Example prose and step 4.1 corrected to match the coverage actually achieved |

## A8.3 Repairs made to `confirmed_nonfatal` findings, and the policy behind them

I repaired a nonfatal finding only under a stated rule, so the line is
inspectable: **repair a nonfatal only when both adversarial lanes independently
flagged it AND the fix is an exact-fidelity restatement introducing no new
mathematics** — independent agreement is evidence of real reader confusion, and
a fidelity edit carries no mathematical risk. Everything else is recorded, not
chased.

| item | why repaired |
|---|---|
| `def-nat-finite-sum-and-product` | Both lanes. Uniqueness of the truncated difference was derived from right-cancellation alone; left cancellation needs commutativity, and `lem-nat-add-commutative` was in neither the citation nor `deps`. Decisive: the **identical** claim in `def-nat-order`'s Remark was repaired earlier today to cite both lemmas, so leaving this was an internal inconsistency |
| `lem-associates-characterisation` `[L2]` | Both lanes. `[L2]` reported only "total, antisymmetric and transitive" while steps 1.2/5.1 use addition-compatibility and positive-closure — both clauses of the cited Statement |
| `ex-euclidean-algorithm-on-consecutive-fibonacci-numbers` `[L4]` | Both lanes. The discreteness clause is genuinely absent from `lem-nat-embeds-int`; `lem-nat-discrete` was already in `deps` and cited at `[L2]`, so the fix is a co-citation with the derivation written out |
| `lem-group-homomorphism-basic-properties` `[L2]` | Both lanes. The restatement dropped the right-cancellation clause that step 2.1 actually uses; the cited target contains both |
| `lem-metric-limits-unique` step 2.1 | Both lanes. Tag-only: `[A1]`, which cites `lem-metric-nonnegativity`, added to the step that uses $d(p,q)\ge 0$ |
| `def-common-divisor-and-gcd` **and** `lem-gcd-scaling` | Orchestrator-escalated; see A8.4 |

## A8.4 The gcd(0,0) circularity — the escalated finding

Sonnet's rejection is **upheld**, and I verified it from disk rather than from
the Beta's earlier judgement that it was a valid deduction:

- `lem-gcd-scaling` step 1.2: "Case $c = 0$ … the left side is $\gcd(0,0) = 0$ … `[L3]`"
- `lem-gcd-scaling` step 1.3: "Case $(a,b) = (0,0)$ … the left side is $\gcd(0,0) = 0$ … `[L3]`"
- `lem-gcd-scaling` `[L3]`: "$\gcd(0,0) = 0$ **by convention** ([[def-common-divisor-and-gcd]])"

So both boundary branches read the value off the convention, while
`def-common-divisor-and-gcd` said the value "**is forced by** the scaling
identity … proved below as `lem-gcd-scaling`", and `lem-gcd-scaling`'s own
Remark repeated it. The justification is circular as written.

**Graded `confirmed_nonfatal`, not fatal, and here is why:** nothing in the
library is mathematically wrong. The convention is a stipulation that fixes a
total function; `lem-gcd-scaling`'s Statement is true under it and its proof is
valid, since invoking a definition is legitimate and the lemma never claims to
*derive* the boundary value; no proof step exists in the Definition at all; and
every downstream consumer uses the value, never the motivation. The defect is
confined to motivating prose.

**Repaired anyway, prose-only, in both places**, because the intended content is
both true and non-circular and deserves to be stated that way. The clean pin,
which I checked: at $c = 0$ with any $(a,b) \ne (0,0)$ the identity reads
$\gcd(0,0) = \lvert 0\rvert\gcd(a,b) = 0$, and **its right-hand side never
mentions $\gcd(0,0)$** — a genuine uniqueness-of-extension argument that uses
only the *requirement* that the identity hold, never the lemma's proof of it.
Both passages now say that, and `lem-gcd-scaling`'s Remark now states plainly
that its steps 1.2/1.3 read the value off the convention rather than proving it.
No Statement, `deps`, value or proof step changed in either item, so no impact
cone is disturbed. `ex-gcd-with-zero` needed no change — it already says "once
the scaling identity is **required** to hold at every triple".

## A8.4b Independent certification of the A8 repairs

Three independent read-only Opus 5 readers, none certifying content it authored:

| reader | scope | verdict |
|---|---|---|
| 1 | the five `confirmed_fatal` repairs | **5 CERTIFY, 0 REFUTE**; 3 nonfatal notes, all pre-existing |
| 2 | the seven nonfatal-but-repaired items | **7 CERTIFY, 0 REFUTE**; 4 nonfatal notes |
| 3 | the `[A1]` widening (below) | pending at the time of writing; the item is held unstamped until it lands |

Two things the readers caught that I had got wrong or left incomplete, both fixed:

1. **A missing `deps` entry of my own making.** I added the
   `lem-nat-add-commutative` citation to `def-nat-finite-sum-and-product`'s
   truncated-difference paragraph but not, at first, to its `deps` list — exactly
   the defect the repair was correcting. I caught it myself mid-review and added
   it; reader 2 independently confirmed the timing and flagged that any context
   frozen before that write is the defective one. No context was frozen in that
   window, so nothing is affected.
2. **`[A1]` of `lem-metric-limits-unique` was still too narrow.** My first fix
   was tag-only: adding `A1` to step 2.1. Reader 2 observed that `[A1]`'s
   nonnegativity clause is instantiated at the pair $(x_k, p)$, while step 2.1
   needs $d(p,q) \ge 0$, so the fact text remained narrower than the use. Since
   **both lanes** rejected this item, leaving that would likely have drawn the
   same rejection again at the targeted rejudge, so I widened `[A1]` to
   "$d(x,y) \ge 0$ for all $x, y \in X$, so in particular $d(x_k,p) \ge 0$ …",
   which is what `lem-metric-nonnegativity` actually states. That second edit
   went to a third, independent reader rather than to the reader who proposed
   the wording.

Recorded from reader 1, out of scope and already in the A10 queue as dedekind
D9: `construction-of-r-via-dedekind-cuts.md` still lists
`thm-reals-dedekind-field` before the `lem-rat-cut-embeds` it cites at `[L8]`.
Reading-order changes are owner-only.

## A8.5 Twice-touched escalations

The coordinator asked me to watch the items already at the threshold. **None of
`thm-vandermonde-identity`, `lem-cut-additive-inverse`, `def-metric-bounded-diameter`,
`lem-sup-metric-is-a-metric` or `lem-real-line-is-a-metric-space` drew a single
rejection from either lane** — positive evidence for the A6 repairs, and I had a
reader confirm from disk that the three extended-real-line corrections are
untouched and still accurate.

Items now past the threshold because A8 repaired something A4 had already
repaired (these go in the A10 owner report):

| item | touches |
|---|---|
| `lem-rat-cut-embeds` | A4 (D2, `[L1]` re-attribution) → A6 certified → **A8 (`[L5]` false domain)** |
| `thm-reals-dedekind-field` | A4 (D1, `[L6]`/`[L11]` split) → A6 certified → **A8 (`[L7]` split)** |
| `ex-euclidean-algorithm-on-consecutive-fibonacci-numbers` | A6 (D2 provenance concurrence) → **A8 (`[L4]`)** |

Already listed from A6 and unchanged: `thm-vandermonde-identity` (three touches
on one fact), `lem-cut-reciprocal` (three touches on three facts), and the three
topology decay items.

## A8.5b A gate my own A6 pass had not run

Running the full gate set at the end of A8 surfaced a hard `prosecheck` failure
I had missed at A6, because my A6 closing sweep ran `rendercheck`, `fwdcheck`
and `extcheck` but **not** `prosecheck`:

```
[position-contradiction] items/lem-sup-metric-is-a-metric.md:
  "rem-sup-conventions" called LATER but its page is order 14 < 116
```

It was caused by my own A6 decay repair. `prosecheck` scans from a direction
word to the end of its sentence and flags any wikilink in that window whose home
page order contradicts the direction. My sentence's "later page" refers to the
**extended real line** (page order 122 > 116, true), but `[[rem-sup-conventions]]`
(order 14) sat in the same sentence and was swept in.

The tool's standing instruction is "NEVER silence one by rewording a true
sentence into a vaguer one — fix it or leave it", so I split the sentence rather
than hedging it, which makes the referent *more* explicit, not less:

> …working in the extended real line, which is introduced on a later page. **The
> suprema taken here are real numbers**, and the extended real line is not used
> for them ([[rem-sup-conventions]], [[rem-metric-axiom-conventions]]).

The added clause is true of the item — step 1.1 establishes that $D(f,g)$ is
nonempty and bounded above, so $\sup D(f,g)$ exists in $\mathbb{R}$ by the
least-upper-bound property. `prosecheck` now reports "OK — no positional claim
contradicts the spec". The item's A6 stamp was deleted and the edit sent to an
independent reader.

**Process note worth carrying forward:** an Alpha repair should be followed by
the *same* gate set the Betas run, not a subset. `prosecheck` exists precisely
to catch claims about other files, which is the class my A6 repairs were in.

## A8.6 Gate state after the A8 repairs

12 item files changed. Stale `verification.judge` and `audited`/`verified`
blocks deleted on all 12; `verification.verified` is written only after the
independent readings.

| gate | result |
|---|---|
| `precheck.mts` on the 10 proof-bearing repairs | **10 checked, 0 failing** |
| `reflow.mts` on all 12 | clean |
| `proof-contract.mjs --strict` | **0 errors, 209/209** — four new citation contracts written with exact quotes (`thm-rat-ordered-field` on `[L7]`, `lem-nat-order-is-membership` on `[L2]`, `lem-nat-discrete` on `[L4]`, and `[A1]`'s new step-2.1 use) |
| `risk-report.mjs --require-reviewed` | **0 errors, 209 routed** |
| `genrisk.mjs --receipt` | **exit 0** |
| `depcheck.mjs` | no cycles, all references resolve; the 3 added `deps` edges introduce none. 12 `published-unaudited`, the designed transient |
| `rendercheck` / `citecheck` / `fwdcheck` / `extcheck` | all exit 0 |
| `prosecheck.mjs` | **OK — no positional claim contradicts the spec** (after the A8.5b fix; it had been failing since A6) |
| `impact-audit.mjs --receipt` | **exit 0**, regenerated: **276** changed interfaces (up from 270 — the six D2 held rows gained their provenance blocks at A6), **2,452** dispositions, reviewer updated to "steps A6 and A8" |
| `genrisk.mjs --receipt` | exit 0 |

**Note for the orchestrator:** the A7 sweep did **not** write `verification.judge`
blocks to the items — every wave-0 item still carries its pre-audit
`z-ai/glm-5.2` block, so the A7 verdicts live only in the ledger. That is a
mismatch between the ledger and the reader-facing stamps worth resolving before
publication, independently of this stage.

## A8.7 Targeted rejudge list

Thirteen items were materially changed at A8 and need both lanes to return a
verdict on the new frozen context. Twelve are the A8 repairs; the thirteenth,
`lem-sup-metric-is-a-metric`, is the A8.5b `prosecheck` fix to an A6 repair.

```
def-common-divisor-and-gcd
def-nat-finite-sum-and-product
ex-euclidean-algorithm-on-consecutive-fibonacci-numbers
ex-integers-mod-n-additive-group
ex-pascals-triangle-to-row-six
ex-r-as-a-vector-space-over-q
lem-associates-characterisation
lem-gcd-scaling
lem-group-homomorphism-basic-properties
lem-metric-limits-unique
lem-rat-cut-embeds
lem-sup-metric-is-a-metric
thm-reals-dedekind-field
```

`lem-gcd-scaling` is on the list although **no lane rejected it**: its Remark
carried the same circular claim as `def-common-divisor-and-gcd`, and repairing
one while leaving the other would have left the corpus contradicting itself.

Every one of the thirteen now carries `verification.verified`
(`model: claude-opus-5`, `scope: published-audit`, `delegated_by: owner`,
`2026-08-02`) written only after an independent reading, and carries **no**
`verification.judge` block — the A7 verdicts for these items are superseded and
must not be reused.

## A8.8 What remains open

1. **The targeted rejudge above** — orchestrator-run, both lanes, new frozen
   context.
2. **A fresh touch snapshot.** The impact receipt was regenerated at the end of
   A8 and passes, but it still spans `pre-A4 → current disk`. If the
   orchestrator wants a receipt that distinguishes the A6 and A8 stages it needs
   its own snapshots.
3. **`verification.judge` is stale corpus-wide.** The A7 sweep wrote verdicts to
   the ledger but not to the items, so all 276 wave-0 items still carry
   pre-audit `z-ai/glm-5.2` judge blocks. Not mine to fix, but it should not
   reach publication.
4. **The A10 owner queue gained nothing new from A8** beyond the escalations in
   A8.5 and the lane-precision finding in A8.1. The items recorded but not
   repaired (the `[L2]`-under-reporting family in number theory, the
   `thm-recursion` wikilink, `def-metric-ball`'s navigational clause, the two
   Statement-level infinitude claims, `lem-nat-embeds-int`'s and
   `thm-int-ordered-ring`'s thin Facts blocks) are all nonfatal and all named
   above with their evidence, so a later fidelity sweep can pick them up
   without re-deriving anything.
