# Wave 2 — A8: adjudication of the paired-judge rejections

**Alpha: `claude-opus-5`.** Independent verifiers and certifiers are **GPT 5.6
Sol** at `xhigh`, read-only — a different family from Alpha, so no repair Alpha
authors is checked by Alpha's own model. Judge-lane execution was the
orchestrator's. Baseline for this step: A6 at `28d84d4`, A7 at `e6a7b54`.

## 1. Outcome counts

Ledger: `research/audit/wave2-judge-adjudications.jsonl`, **one row per
`(id, model, context_sha256)`**, 138 rows over **121 distinct rejected items**.

| outcome | rows | Terra | DeepSeek |
|---|---|---|---|
| `confirmed_fatal` | **29** | 25 | 4 |
| `confirmed_nonfatal` | **101** | 84 | 17 |
| `false_positive` | **8** | 6 | 2 |
| total | 138 | 115 | 23 |

**25 distinct items carry a confirmed fatal defect.** Per-lane precision, counting
a rejection as a real defect when it is fatal or nonfatal-but-genuine:
**Terra 94.8 % (109/115), DeepSeek 91.3 % (21/23)** — both in line with the
measured historical figures, and both lanes paid for themselves: of the 25 fatal
items, 17 were found by both lanes, **6 by Terra alone** and **2 by DeepSeek
alone**.

## 2. The adjudication principle, stated so it can be checked

The 30-second threshold is binding and it is this wave's termination condition.
The rejections sort into three classes, and only the first is fatal:

1. **The item asserts something false**, a numbered step makes an invalid
   inference, or a title/Statement claims strictly more than the item proves —
   most often an **undeclared choice principle**. Fatal.
2. **A fact omits a hypothesis of the item it cites, at a case the item's own
   instance manifestly satisfies** (a nonempty poset, a finite lattice, a
   nonempty ground set). Genuine imprecision, nothing downstream is wrong.
   **Nonfatal** — unless the excluded case is one the statement actually admits,
   in which case it returns to class 1. That distinction is what separates
   `ex-divisor-lattice-of-sixty` (nonfatal: 60's divisor lattice is nonempty) from
   `cor-sperner-theorem-with-equality-cases` (fatal: at `k = n` the cited
   inequality's denominator is literally zero).
3. **A step uses an elementary property its cited item does not literally state**
   — transitivity, symmetry, positivity, cancellation, an algebraic identity.
   This is ~80 % of the rejections and is exactly the class the standing triage
   rule tells us to spend no effort on. **Nonfatal.**

## 3. The false positives, and a systematic lane defect worth reporting

Eight rejections are refuted with disk evidence. **Six of them are one mistake
repeated: Terra read this library's `σ(n)` as `{0,…,n−1}`.** `def-natural-numbers`
defines `σ(n) := n ∪ {n}`, so `σ(n) = {0,…,n}`. On that misreading Terra alleged
an off-by-one in three separate proofs and a missing implication in a fourth:

- `thm-complete-and-totally-bounded-implies-compact` — "`f` has domain `σ(m)` but
  uses `f(m)`, which is undefined". `f(m)` is defined; `σ(m) = {0,…,m}`.
- `thm-compact-implies-the-other-compactness-forms` — "the codomain must be
  `σ(n+1)`". It need not; `σ(n)` already contains `n`.
- `lem-totally-bounded-basic` — "for `m = 0` finite choice supplies no `a₀`".
  `σ(0) = {0}`, so it supplies exactly `a₀`.
- `lem-compactness-is-intrinsic` — "claim 2's reverse implication is never
  proved". Steps 8.1–11.1 prove it: they take an arbitrary relatively open cover,
  build an ambient family, extract finitely many members and trace them back.

The other two are `lem-join-irreducible-is-join-prime`,
`lem-order-ideals-form-a-distributive-lattice` and
`lem-finite-lattice-join-irreducible-decomposition` (alleged use of the "converse"
of a one-directional lattice fact — the converse **is** part of the cited
definition) and `thm-initial-and-final-characteristic-properties` (uniqueness is
proved in the proof section, not only in the remarks).

This is the most useful mechanical finding of A8: **a judge that misreads one
foundational convention manufactures a cluster of confident, specific,
wrong rejections.** A line about the `σ` convention in `briefs/judge-conventions.txt`
would have removed four of them.

## 4. Confirmed fatal defects, by class

### 4a. Undeclared choice principle — the dominant class, now in its fourth wave

**`thm-ultrafilter-lemma` is the significant find.** Its title and Statement read
"every filter extends to an ultrafilter" with no hypothesis, `[L1]` restates Zorn
as "a nonempty poset in which every chain has an upper bound has a maximal
element" while `thm-zorn` opens "**Assume the Axiom of Choice**", and step 4.1
uses it. A landmark theorem, and the root of two further defects below. Repaired:
the Statement now opens "**Assume the Axiom of Choice**", records that the
hypothesis is spent exactly once at step 4.1, `[L1]` carries Zorn's hypothesis,
the title discloses it, and `def-axiom-of-choice` joins `deps`.

- `def-ultrafilter` — an unqualified "the principal ultrafilters are nevertheless
  not all of them", which in ZF alone cannot be concluded. Now conditioned on the
  ultrafilter lemma. (Alpha repaired the same defect in
  `fs-every-ultrafilter-principal` at A6; this is its sibling.)
- Four more consumers of the metric-compactness equivalences asserted them
  unconditionally, while `thm-metric-compactness-equivalences` assumes **AC_ω and
  DC** and `thm-complete-and-totally-bounded-implies-compact` assumes **AC_ω**:
  `fs-totally-bounded-implies-compact` (in the **Statement**),
  `thm-compact-implies-complete-and-totally-bounded`,
  `cex-closed-and-bounded-not-compact-in-the-sup-metric` and
  `fs-closed-and-bounded-implies-compact-in-every-metric-space` (Remarks). Each
  now carries the exact hypothesis its cited theorem carries.
- `rem-compactness-conventions-and-choice-ledger` — "no proof of it can be
  choice-free" is a necessity claim; now conditioned on Con(ZF).

### 4b. Concrete false statements

- `def-height-and-width-of-a-finite-poset` — "the possible cardinalities form
  nonempty subsets of `{1,…,|P|}`". The empty subset is vacuously both a chain and
  an antichain, so 0 occurs. Corrected to `{0,1,…,|P|}`, with `def-chain` cited
  and added to `deps`; the bounds `1 ≤ h(P), w(P) ≤ |P|` still follow from the
  singletons.
- `def-ordinal` — "such a class is never a set". The equivalence class of the
  empty well-order is the singleton `{∅}`. Corrected.
- `thm-hartogs` — "under the Axiom of Choice `ℵ(A)` is the least ordinal strictly
  larger than the cardinality of `A`". For `A = ℕ` that would be `ω+1`, which
  still injects into `ℕ`. Corrected to the least ordinal that does not inject.
- `def-hereditary-property` — "a single space with one subspace lacking `P`
  refutes heredity outright". The ambient space must itself have `P`: for
  `P` = "has at most one point", a two-point `X` with `S = X` refutes nothing.
- `def-quotient-topology` — "a quotient topology is determined by `q` alone". It
  is determined by `q` **together with the topology on its domain**; the identity
  on a two-point set gives the discrete or the indiscrete quotient according to
  its domain.
- `thm-product-of-subspaces-and-closures` — a Remark said the forward inclusion is
  "the only half that survives" for the box topology. Under AC the reverse
  inclusion survives too (choose a point of each `U_i ∩ A_i`). Rewritten with that
  argument, and with the choice-free half kept separate.
- `def-adjunction-cone-suspension` — the title and opening claimed the cone and
  suspension are quotients of `X × [0,1]`, but for `X = ∅` the item stipulates a
  one-point cone and a two-point suspension, and nothing nonempty is a quotient of
  the empty product. Title and opening now exclude that case explicitly.
- `ex-petersen-graph-basic-invariants` step 5.1 — "both lower bounds proved
  independently of cubic regularity". Steps 3.2 and 3.3 use it. Corrected.
- `ex-cylinder-and-mobius-band-as-quotients` — a Remark said every statement
  proved above holds for both constructions; claim 2 identifies only the cylinder.
- `rem-constructions-this-page-stops-short-of` — "the companion page builds the
  circle"; `ex-circle-as-r-mod-z` says in as many words "**No circle appears.**"
- `rem-choice-ledger` — "the two non-reversals are external results that this
  library neither proves nor records"; `def-dependent-choice` records both.

### 4c. A fact stronger than the item it cites, at a case the statement admits

- `cor-sperner-theorem-with-equality-cases` `[L3]` — dropped local LYM's `k < n`
  hypothesis; at `k = n` the right-hand denominator `C(n, n+1)` is zero.
- `lem-fip-generates-filter` `[L3]` — the empty function extends "by prescribing
  `u'(n)` freely", which fails when the codomain is empty. Nonemptiness stated.
- `ex-euler-totient-product-formula-worked` `[L2]` — said Euler's formula "may be
  read as finite inclusion-exclusion"; the cited theorem states only the two
  products. Restated, with the expansion identified as an inline algebraic step.
- `cex-projection-is-not-closed` and `fs-projections-are-closed-maps` `[L1]` — the
  bound `|xy−ab| ≤ |x||y−b| + |b||x−a|` uses the absolute-value triangle
  inequality, which `lem-of-abs-value` does **not** state.
  `lem-of-triangle-inequality` added to the fact and to `deps`. **Both lanes
  caught this on text Alpha itself certified at A6** — the A6 certification
  checked the arithmetic of the estimate and neither Alpha nor its Sol certifier
  checked that every ingredient was cited.

## 5. Repairs applied: 23 items

`def-adjunction-cone-suspension`, `def-height-and-width-of-a-finite-poset`,
`def-hereditary-property`, `def-ordinal`, `def-quotient-topology`,
`def-ultrafilter`, `cex-closed-and-bounded-not-compact-in-the-sup-metric`,
`cex-projection-is-not-closed`, `cor-sperner-theorem-with-equality-cases`,
`ex-cylinder-and-mobius-band-as-quotients`,
`ex-euler-totient-product-formula-worked`, `ex-petersen-graph-basic-invariants`,
`fs-closed-and-bounded-implies-compact-in-every-metric-space`,
`fs-projections-are-closed-maps`, `fs-totally-bounded-implies-compact`,
`lem-fip-generates-filter`, `rem-choice-ledger`,
`rem-compactness-conventions-and-choice-ledger`,
`rem-constructions-this-page-stops-short-of`,
`thm-compact-implies-complete-and-totally-bounded`, `thm-hartogs`,
`thm-product-of-subspaces-and-closures`, `thm-ultrafilter-lemma`.

Every one had its stale `verification.judge`, `audited` and `verified` stamps
removed; `verification.audited` was not written by any actor.
Final gate state after certification: `precheck` **2,111 checked, 0 failing**;
`depcheck`, `fwdcheck`, `extcheck`, `citecheck`, `rendercheck`, `prosecheck` and
`depsource` all clean; `content-policy --audit` **0 errors**, 2 warnings (the two
intended `generated-kind` legacy signals); the A8 impact receipt exits 0.

Impact closure from the dedicated `pre-A8-alpha` snapshot:
`research/audit/wave2-A8-impact-audit.json`, **22 changed interfaces / 508
affected items**, all `still-licensed` with per-root evidence; the receipt gate
exits 0.

## 6. TWO CONFIRMED FATALS NOT REPAIRED — they block closure and are handed over

Both are logic findings inside numbered proof steps that need a careful rewrite
rather than a scoping qualifier, and Alpha will not author a hasty repair to a
proof step:

- **`thm-well-ordering-theorem`** (Terra): "Step 4.1 calls `R*` a strict order
  although step 1.1, via `[L6]`, makes each `R` a **reflexive** total order. For
  nonempty `B*` their union is reflexive, so the strict-order claim and the strict
  comparisons used in step 5.1 are unjustified." Verified as a FALSE-CLAIM by the
  independent Sol foundations lane.
- **`fs-transfinite-induction-needs-choice`** (Terra): "Step 3.1 wrongly says a
  recursion whose class function is given by a formula is thereby choice-free.
  Such a formula may use a choice-function parameter, or need Choice to prove it
  total and functional." Verified as a FALSE-CLAIM by the same lane.

They are recorded `confirmed_fatal` in the ledger, which correctly blocks
`level-coverage` until they are repaired, rejudged and certified.

## 7. Certification and the rejudge list

A dedicated independent GPT 5.6 Sol certification lane
(`scratchpad/a8-logs/certify.prompt`) was given the exact claim Alpha makes for
each of the 23 repairs and the instruction to refuse anything it cannot verify
from disk. It inspected 23/23 diffs, read 23/23 current files in full, opened
every dependency cited by added text, and returned **19 CERTIFY, 1
CERTIFY-WITH-NOTE, 3 REFUSE**.

The three refusals were all residuals of Alpha's own repairs, each upheld and
fixed, and each caught something Alpha had missed:

- `fs-totally-bounded-implies-compact` — the added hypothesis was correct, but the
  newly cited `thm-complete-and-totally-bounded-implies-compact` was missing from
  `deps`; the certifier quoted `depcheck`'s own `cited-not-in-deps` line. Added.
- `def-height-and-width-of-a-finite-poset` — Alpha's fix made the item's closing
  sentence false: once the empty subset is acknowledged as a chain and an
  antichain, "the empty poset is excluded so that neither definition needs a
  convention for the maximum of an empty collection" is wrong, because the size
  set is then `{0}` and its maximum is `0`. Rewritten to say what the exclusion
  actually buys: `h(P), w(P) ≥ 1`.
- `def-adjunction-cone-suspension` — Alpha qualified the title and the opening but
  left a final Remark asserting "Every construction above is a quotient of a
  coproduct or of a product", which carries the same unqualified false claim.
  Qualified.

That pattern — a correct repair leaving a matching claim elsewhere in the same
item untouched — is the same failure mode as the two A4 impact-closure misses
found at A6, and it is worth naming: **when a claim is narrowed, every restatement
of it inside the same item has to be found and narrowed too.**

`verification.verified` with `scope: published-audit` and `delegated_by: owner`
was then written on all 23, on the strength of that independent current-text
reading; the residual risk on the three re-fixed items is carried by the targeted
paired rejudge, which reads final text in both lanes.

**The 23 items in §5 are the exact targeted-rejudge list** for the orchestrator,
plus the two of §6 once repaired.

## 8. Twice-touched escalation

Measured from the touch ledger, three items now carry genuinely independent
repairs in **two different stages** of this wave (A6 and A8), which is a real
escalation rather than the snapshot-window artifact reported at A6:

- **`rem-choice-ledger` — four independent touches** (A4 heading fix; A6 two
  corpus-claim repairs; two further A6 certification rounds; A8 a fourth false
  corpus claim). Every touch found a *different* false statement about the
  library's own contents, and none was ever a mathematical error about choice
  principles. This is the clearest evidence in the wave for the standing rule that
  Remark prose is where falsehoods hide, and it is the item Alpha would put first
  if the owner wants one thing re-read by hand.
- **`rem-constructions-this-page-stops-short-of` — three touches** (A6 two false
  corpus claims; A8 a third). It is also an `ai-generated` seed. Same pattern: a
  page-local inventory that decays as the library grows.
- **`cex-projection-is-not-closed` / `fs-projections-are-closed-maps` — three
  touches** (A4 rewrite to a choice-free route; A6 certification; A8 the missing
  triangle-inequality citation).

None is proposed for deletion. All three are prose-and-citation defects on items
whose mathematics has been stable throughout.

## 9. For the owner queue

Nothing new beyond what the orchestrator already carries, plus one item:

- **`briefs/judge-conventions.txt` should state the `σ(n) = n ∪ {n}` convention.**
  Six of this wave's eight false positives came from one lane misreading it, at a
  direct cost of four confident, specific, wrong rejections of correct proofs.

---

# A8 round 2 — the two blocked fatals, resolved

Both are now repaired, independently diagnosed **before** the repair and
independently certified **after** it, by two separate GPT 5.6 Sol lanes
(`scratchpad/a8r2/diagnose.prompt`, `scratchpad/a8r2/certify.prompt`).
**No `confirmed_fatal` is now unresolved.** Both outcomes stay
`confirmed_fatal` — the judge was right in both cases — but on re-reading I
corrected the `defect_type` on both rows, which is the only ledger change.

## 1. `thm-well-ordering-theorem` — the judge was right, and no step was wrong

The orchestrator's question was the right one, and the answer is the second
option: **not a false claim, a form-declaration gap.** `def-well-order` supplies
two interchangeable presentations and says "Everything on this page is more
convenient in terms of the associated strict order". `def-initial-segment`, which
this proof uses through `[L7]`, is itself written `(W, <)`. So is
`thm-transfinite-recursion`. The page's prevailing convention is the strict one.

`[L6]` restated **only the weak form**, and step 1.1 said "a well-order of `B`"
without naming which. Steps 4.1 and 5.1 then read strictly, and — decisively —
**step 8.1 is correct only under the strict reading**: `R' = R_M ∪ {(m,x) : m ∈ M}`
omits `(x,x)`, so it is not a reflexive well-order of `M ∪ {x}` at all, while it
is exactly the right strict one. An independent Sol lane re-derived all nine steps
under each reading and reported: under the weak reading 5.1 and 8.1 fail; under
the strict reading **every step is valid**, `⪯` remains a genuine weak partial
order on `P` as Zorn requires, and `def-initial-segment` fits exactly.

So the defect is that a Facts entry restated one of two licensed presentations
while the proof used the other — a citation-fidelity defect in a landmark
theorem's Facts block, not an invalid inference. `defect_type` corrected from
`logic` to **`dependency_citation`**.

**Repair, and nothing more:** `[L6]` now records both presentations, states that
this proof uses the strict one, and notes that the end-extension order `⪯` on `P`
is a separate, weak relation; step 1.1 now says `R` is a **strict** well-order.
No numbered step's reasoning changed. **The Statement, the title and every `deps`
entry are byte-identical** — verified from the diff and re-verified by the
certifier — which matters, because this item has **26 direct `deps` consumers**.

## 2. `fs-transfinite-induction-needs-choice` — the judge was right, and the counterexample is in the library

Step 3.1 asserted that when the class function fed to a recursion "is given by a
formula … the whole construction is choice-free". That criterion is **false**, and
the counterexample is this library's own text: the final Remark of
`thm-well-ordering-theorem` describes Zermelo's route as "a choice function on
`P(X) \ {∅}` directly … one choice function, consulted at every stage". The class
function `G(h) = c(X \ ran h)` *is* given by a formula — with `c` as a parameter —
and that construction is emphatically not choice-free. A reader applying step
3.1's stated test to Zermelo's recursion gets the wrong answer, and the "A useful
test" Remark repeated the same criterion. That is not a 30-second gap.

What it is **not** is a broken refutation. The independent lane traced the steps:
`[L2]` accurately describes `thm-transfinite-recursion`, whose own Statement says
"**It uses Replacement, and it uses no form of the Axiom of Choice**"; steps 1.1
and 1.2 establish that induction and recursion are ZF theorems; **step 2.1 alone
already entails step 4.1's conclusion**. Step 3.1 is diagnostic. So the false
claim is real and self-contained. `defect_type` corrected from `logic` to
**`other`** — a false stated criterion, not an invalid inference chain.

**Repair:** step 3.1 now separates the two costs — the recursion is never itself
the cost, and what can cost the axiom is *obtaining* the class function, which
happens when its defining formula carries a parameter ZF does not supply or when
ZF does not prove the formula total and functional — and names Zermelo's route as
exactly that case. The "A useful test" Remark gained the parameter clause and the
Zermelo illustration. The refuted Statement, `[L1]`–`[L3]` and steps 1.1, 1.2, 2.1
and 4.1 are unchanged.

## 3. Certification, closure, and gates

Both **CERTIFY**, with recorded SHA-256 and a step-by-step re-derivation; the
certifier independently re-confirmed the 26-consumer count and that
`thm-well-ordering-theorem`'s public interface is untouched.
`verification.verified` (`scope: published-audit`, `delegated_by: owner`) written
on both; `verification.audited` never written by any actor in this wave.

Impact closure from the dedicated `pre-A8r2-alpha` snapshot:
`research/audit/wave2-A8r2-impact-audit.json`, **2 changed interfaces / 111
affected items**, all `still-licensed`; receipt exits 0. The wave-wide A8 receipt
was regenerated over the full `pre-A8-alpha` span — **24 changed interfaces / 521
affected items** — and also exits 0. (`ex-petersen-graph-basic-invariants` is
correctly absent from the changed-interface set: its repair was inside a numbered
proof step, which `touchlog`'s public-surface hash deliberately does not treat as
an interface change.)

Final gates: `precheck` **2,111 checked, 0 failing**; `depcheck`, `fwdcheck`,
`extcheck`, `citecheck`, `rendercheck`, `prosecheck`, `depsource` all clean;
`content-policy --audit` **0 errors**, 2 warnings (the two intended
`generated-kind` legacy signals).

## 4. Rejudge list for the second targeted sweep

`thm-well-ordering-theorem`, `fs-transfinite-induction-needs-choice`.

## 5. Twice-touched, updated

`thm-well-ordering-theorem` and `fs-transfinite-induction-needs-choice` each
received exactly **one** repair in this wave, at A8 round 2. Neither joins the
escalation list. The three genuinely multiply-touched items reported at A8 round 1
are unchanged: `rem-choice-ledger` (four), `rem-constructions-this-page-stops-short-of`
(three), and the `cex-projection-is-not-closed` / `fs-projections-are-closed-maps`
pair (three).

---

# A8 round 3 — the seven surviving rejections

**One of the seven is a real defect and is repaired. Six are not, and I am
recording them as such without touching the text.**

## 1. The shape of the set, stated plainly

Five of the seven concern text that **no A8 repair ever touched**
(`def-adjunction-cone-suspension`'s mapping-cone clause,
`def-hereditary-property`'s separations, `ex-petersen-graph-basic-invariants`'s
`[F3]`, `fs-projections-are-closed-maps`'s step 1.3,
`thm-product-of-subspaces-and-closures`'s step 1.6). Terra rereads whole items,
not diffs. That is the wave-1b signature exactly, and it means a rejection here is
**not** evidence that a repair was wrong — but it is not evidence the allegation
is wrong either, so each was judged on its merits against disk.

Six are the elementary-unfolding class that the standing triage rule tells us to
spend no effort on, and every one of them is consistent with how I graded the
same class 107 times earlier in this wave. Re-repairing them is precisely the
non-termination trap.

## 2. `rem-choice-ledger` — the fifth defect is real, and it is repaired

Terra: "The DC bullet misstates `def-dependent-choice`: it omits the required
quantifier for every starting element `a in X` and the condition `x0 = a`."

Verified from disk, and it is correct. `def-dependent-choice` states DC as

> "For every nonempty set $X$, every relation $R$ entire on $X$, and **every
> $a \in X$**, there is a sequence $x : \mathbb{N} \to X$ with **$x_0 = a$** and
> $x_n \mathbin{R} x_{n+1}$ for every $n$."

and then says, in as many words, that deleting the clause $x_0 = a$ gives "the
**formally weaker** statement", whose "reverse derivation is standard and is not
needed anywhere in this library, so it is not carried out."

The ledger bullet stated exactly that **weaker, unbased** form as if it were DC.
This is not 30 seconds: a reader consulting the library's ledger of choice
principles to learn what DC says came away with the wrong statement, in the one
item whose entire purpose is to state these principles precisely. It is also not
re-litigation of my own prose — the misstatement is pre-existing text that none of
the four earlier touches examined.

`confirmed_fatal`, `defect_type: dependency_citation`. Repaired: the bullet now
states DC as its source states it and records that the unbased form is the
formally weaker consequence the library does not derive DC back from.

**This item has now had five independent defects found across the wave, every one
a false or inaccurate claim about this library's own contents, and not one a
mathematical error about choice principles.** The independent certifier's
whole-item recheck this round found the rest of the ledger accurate against every
item it names — AC equivalences, the basis/Blass record, Tychonoff/Kelley/Schechter,
UL/BPI's position, the countable- and dependent-choice accounting, the choice-free
list, and the Zorn bullet. That is the first clean whole-item reading it has had.

## 3. The six nonfatal, with the reason each stays nonfatal

- **`ex-cylinder-and-mobius-band-as-quotients`** (both lanes, the strongest signal
  in the set, and an item I have touched twice — so I checked the mathematics
  rather than defending it). `F_1(x,y) = P_c(x - \lfloor x \rfloor, y)` **is**
  continuous, including at integers, because $(0,y) \sim_c (1,y)$; the argument is
  [L5]'s closed-cover pasting with $\times [0,1]$ appended to every set, and
  step 1.6 cites [L3], which states exactly the open-cover and finite-closed-cover
  criteria that licenses it. What is true is that "applied in the first variable,
  the second variable being untouched" reads like an appeal to separate continuity,
  which is what both lanes objected to. No false claim, no unlicensed inference;
  the license is cited. DeepSeek's separate complaint that [L5] is "only a
  description of a pasting technique, not a formal lemma" is wrong on its face —
  [L5] states a precise continuity claim with its reason. **`confirmed_nonfatal`.**
- **`def-hereditary-property`** — Terra says the three separations are asserted
  with no support and "the companion supplies only an open-hereditary
  non-hereditary example". **That premise is false about this corpus**, which is
  why this one is a `false_positive` rather than a nonfatal: the library publishes
  `cex-separability-is-not-hereditary-worked` (separable space, non-separable
  *closed* antidiagonal — so open-hereditary implies neither closed-heredity nor
  heredity), `cex-normality-is-not-open-hereditary` and
  `cex-paracompactness-is-not-open-hereditary` (closed-hereditary implies neither).
  All three separations are true and all three are witnessed here. The residue is
  that the sentence cross-references none of them, which is cosmetic.
- **`ex-petersen-graph-basic-invariants`** — `[F3]` omits the cited definition's
  "connected, at least two vertices". The Petersen graph is connected with ten
  vertices. This is exactly the class I named in §2 of round 1 and graded nonfatal
  four times there (`ex-divisor-lattice-of-sixty`,
  `ex-width-three-poset-and-a-minimum-chain-cover`,
  `thm-symmetric-chain-decomposition-of-the-boolean-lattice`,
  `thm-birkhoff-representation-finite-distributive-lattices`).
  **`confirmed_nonfatal`.**
- **`fs-projections-are-closed-maps`** step 1.3 — "complement not open, therefore
  not closed" uses closed-means-complement-open, which is the definition of closed.
  **`confirmed_nonfatal`.**
- **`thm-product-of-subspaces-and-closures`** step 1.6 — `[L4]` gives the
  basic-open closure test and the step applies it to an arbitrary open $O_{i_m}$.
  Every open set containing a point contains a basic one containing it, which then
  meets $A_{i_m}$. One line. **`confirmed_nonfatal`.**
- **`def-adjunction-cone-suspension`** mapping cone — $f'$ is "the corresponding
  map into $Y$", i.e. $f$ composed with the identification of $X$ with its image in
  $CX$, and its continuity is immediate. The clause is explicitly flagged as a
  recorded standard instance on which "nothing below depends".
  **`confirmed_nonfatal`.**

## 4. Certification, closure, gates

`rem-choice-ledger` — **CERTIFY-WITH-NOTE** from an independent GPT 5.6 Sol
certifier, with SHA-256 and quoted evidence; its one note ("not recorded here"
should read "not recorded in separate linked items") is a sub-30-second prose
point and, under the binding rule, gets no rewrite. `verification.verified`
(`scope: published-audit`, `delegated_by: owner`) written; `verification.audited`
never written in this wave.

Impact closure from the dedicated `pre-A8r3-rem-choice-ledger` snapshot:
`research/audit/wave2-A8r3-impact-audit.json`, **1 changed interface / 19 affected
items**, all `still-licensed`, receipt exits 0. The A8 and A8r2 receipts were
regenerated over their full spans (**24 / 521** and **3 / 124**) and both exit 0.

Ledger: **146 rows — 30 `confirmed_fatal`, 107 `confirmed_nonfatal`,
9 `false_positive`.**

Gates: `precheck` **2,111 checked, 0 failing**; `depcheck`, `fwdcheck`,
`extcheck`, `citecheck`, `rendercheck`, `prosecheck`, `depsource` clean;
`content-policy --audit` **0 errors**, 2 warnings.

## 5. Rejudge list for the third targeted sweep

**`rem-choice-ledger`** — that is the whole list.

## 6. Twice-touched, final

`rem-choice-ledger` now stands at **five independent touches**, every one a
different false claim about the library's own contents. It is the wave's clearest
single lesson and the item I would put first if the owner wants one thing read by
hand. Unchanged otherwise: `rem-constructions-this-page-stops-short-of` (three),
and the `cex-projection-is-not-closed` / `fs-projections-are-closed-maps` pair
(three). None is proposed for deletion.
