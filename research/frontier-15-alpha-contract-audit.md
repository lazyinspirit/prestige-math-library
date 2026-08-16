# Alpha contract-detector adjudication — run `frontier-15`

**Lane:** `contract-audit-1` · Alpha · Claude Opus 5, `xhigh`, 1,000,000-token window
**Date:** 2026-08-17
**Scope:** every candidate printed by `boundary-audit.mjs --fail-on-contradicted
--fail-on-template` and `citation-fidelity.mjs --fail-on-missing-quote`.

## Reproduction, as dispatched

| detector | first run | after this audit |
|---|---|---|
| `boundary-audit … --fail-on-contradicted --fail-on-template` | **exit 1** — 2 contradicted candidates, 0 template clusters | **exit 0** |
| `citation-fidelity … --fail-on-missing-quote` | **exit 0** — 1176 citations over 324 items, no missing quote, no widening candidate | **exit 0** |

Both commands now pass. Nothing was left open.

`citation-fidelity` printed **no candidate at all**, so it contributed no
adjudication. The whole candidate list is two rows on one item.

## Candidate 1 — `fs-the-kleisli-and-eilenberg-moore-categories-are-equivalent-for-every-monad` [iff-forward]

Row before: `not_applicable`, "The word equivalent names the categorical
predicate under refutation; the Statement contains no logical biconditional with
a forward implication to prove."

**Decision: the detector is wrong. Row upheld on the record.**

Evidence, read from disk rather than inferred:

- The detector fired on its `\bare equivalent\b` pattern, scoped to `claimOf`.
  The Statement section of the item is, in full: *"**False claim:** for every
  monad, its Kleisli and Eilenberg–Moore categories are equivalent. The
  free-monoid monad on $\mathbf{Set}$ is a counterexample."* The matched span is
  "categories are equivalent".
- `items/def-equivalence-and-adjoint-equivalence-of-categories.md:35` reads *"The
  categories are then called **equivalent**."* So "equivalent" is a **defined
  categorical predicate** — existence of quasi-inverse functors $F,G$ together
  with natural isomorphisms $1_{\mathcal C}\Rightarrow GF$ and
  $FG\Rightarrow 1_{\mathcal D}$ — and not a logical biconditional joining two
  propositions.
- Consequently the Statement is a single universally quantified claim, which the
  item **refutes**. There is no antecedent and no consequent for a forward
  direction to run between, so there is no forward obligation either discharged
  or omitted. The `not_applicable` disposition is true of the text.

This is precisely the false positive `boundary-audit.mjs` anticipates in its own
`reviewed`-escape comment ("an `fs-` item whose Statement says two categories
*are equivalent*"). I did not treat that as authority: the uphold rests on the
definition file quoted above.

## Candidate 2 — same item [iff-reverse]

Row before: same rationale, "reverse implication".

**Decision: the detector is wrong. Row upheld on the record, for a reason
distinct from the forward row** (no batch-uphold; each reason is about its own
axis).

The forward row is upheld because "equivalent" is a defined predicate. The
reverse row needs a separate question answered: *is there a biconditional
anywhere in play whose converse this item silently owes?* There is exactly one —

- `[L3]` cites `thm-fully-faithful-split-essentially-surjective-characterises-equivalence`:
  *"A functor $F:\mathcal C\to\mathcal D$ is an equivalence exactly when it is
  fully faithful and split essentially surjective."* That is a genuine iff.
- It sits in **Facts & Assumptions**, i.e. it is a quoted dependency, someone
  else's statement, not this item's claim. The boundary axis asks about the
  top-level claim — which is why the detector correctly scopes to the Statement
  section, and why this citation does not and should not trip it.
- Step 3.1 consumes only the direction *equivalence ⟹ fully faithful and
  essentially surjective*. A one-directional use of a cited biconditional creates
  no converse obligation on the consuming item.

## The mathematics behind both upholds

An uphold asserts the row is true of the item, so I checked the item is sound
rather than only that the axis is inapplicable. With $T(X)=X^{*}$ the free-monoid
monad on $\mathbf{Set}$:

- $\mathcal C_T(X,X)=\mathbf{Set}(X,X^{*})$ by `def-kleisli-category`
  ($\mathcal C_T(A,B):=\mathcal C(A,TB)$) — step 1.1 is licensed.
- $X=\varnothing$: $\varnothing^{*}=\{[\,]\}$, so $\mathbf{Set}(\varnothing,\varnothing^{*})$
  is a singleton. $X\neq\varnothing$: the words $[\,],[x],[x,x],\dots$ are
  distinct, so $X^{*}$ is infinite and the constant maps make
  $\mathbf{Set}(X,X^{*})$ infinite. **1 or infinite, never 2** — step 2.1 holds.
- $\mathbf{Mon}(M,M)$ for $M=\{1,e\}$, $e^{2}=e$: a monoid map fixes $1$ and
  sends $e$ to an idempotent, so $e\mapsto 1$ and $e\mapsto e$, and both are
  homomorphisms. **Exactly 2** — step 1.2 holds.
- `thm-the-free-monoid-monad-and-its-algebras-are-monoids` gives
  $\mathcal C^{T}\cong\mathbf{Mon}$ **over $\mathbf{Set}$**, an isomorphism of
  categories, so endomorphism collections transfer with exact cardinality.
- Step 3.1's contradiction therefore closes: essential surjectivity puts
  $M\cong FX$, full faithfulness forces
  $|\mathbf{Set}(X,X^{*})|=|\mathbf{Mon}(M,M)|=2$, which no $X$ achieves.

The counterexample is sound and the refutation establishes the negation of the
titled false claim. **No defect-ledger row is written**: both candidates resolve
to detector false positives, and there is no confirmed real defect to record.

## Verification I ran beyond the printed candidates

A detector that fires twice tells you nothing about what it *misses*, and a
hand-read of only what a tool prints is how a defect class ships. Two checks:

**(a) Wider biconditional net over batch 7.** `exhibitsIff` tests eight patterns.
I re-scanned every batch-7 item's claim section with a wider list adding
*necessary and sufficient*, *equivalently*, *just when* and bare *equivalent*.
Seven items trip it; six are detector misses in the literal sense. All six are
clean on inspection:

| item | why not a missed defect |
|---|---|
| `thm-equivalent-characterisations-of-an-idempotent-monad` | iff rows are `checked`, crediting steps 1.1/1.2 and 2.1 with real per-item evidence |
| `thm-algebras-for-an-idempotent-monad-form-a-reflective-subcategory` | `checked`, both directions credited to distinct steps |
| `thm-monads-on-a-preorder-are-exactly-closure-operators` | `checked`, steps 1.1 and 1.2 |
| `cor-algebras-for-a-closure-operator-monad-are-its-fixed-points` | `checked`, steps 1.1 and 2.1 |
| `cor-comonads-on-a-preorder-are-interior-operators` | `checked`, steps 1.1–2.1 and 3.1 |
| `thm-a-monadic-functor-is-conservative` | `not_applicable`, and **honest**: `def-conservative-functor` defines conservative *as* reflecting isomorphisms, so the Statement's "equivalently" is a definitional restatement of one property, not an iff with two directions |

**No concealed iff defect exists in batch 7 that the detector missed.**

**(b) A template-shaped rationale the template detector cannot cluster —
recorded, not repaired.** 70 rows in `research/frontier-15-batch-7.proof-contracts.json`
(and **zero** in batches 1–6) share the tail *"… is a one-way theorem or
computation; adding a forward/reverse half would create a biconditional absent
from its Statement."* They escape `--fail-on-template` because `normalise`
strips quotes, backticks, math and the case name but not the varying **subject
phrase** that opens each sentence, so every key stays unique and no cluster of
3+ forms.

This is a shape worth the lead Alpha's attention, but on the evidence it is a
**style** concern, not the frontier-13 concealed-defect class: the claim each of
those rows makes — *this Statement contains no biconditional* — is exactly what
`exhibitsIff` independently tests for all of them, and it fired on none; check
(a) above re-tested the same 70 items with a wider net and turned up nothing.
I have **not** rewritten those 70 rationales. Doing so is outside this dispatch's
candidate list, it is 70 real per-item reads rather than a sweep, and a
rewrite-to-vary-the-wording with no mathematical finding behind it would be
weakening a rationale to satisfy a regex — which this dispatch forbids.

## One thing I read and deliberately did not change

`[L2]` of the `fs-` item reads *"Its Eilenberg–Moore category is the category of
monoids"*, where the cited theorem says *"isomorphic over $\mathbf{Set}$ to the
category of monoids"*. `citation-fidelity` passes it (the quote is present and
verbatim), and the elision is faithful in substance: the proof uses only that
endomorphism collections correspond, which an isomorphism of categories supplies
exactly, so no domain, quantifier, hypothesis, direction or conclusion moves.
Recorded here so the read is on the record rather than silently dropped; I judged
an edit not worth voiding the contract row and the citation quote over.

## Files changed

- `research/frontier-15-batch-7.proof-contracts.json` — `reviewed: {upheld, by,
  reason}` added to the two `iff` boundary rows of
  `fs-the-kleisli-and-eilenberg-moore-categories-are-equivalent-for-every-monad`.
  Reasons are 658 and 624 characters, each about its own row.
- `research/frontier-15-proof-contracts.json` — regenerated by
  `merge-proof-contracts.mjs --level frontier-15` (324 scoped items, 7 batch
  contracts). Confirmed from disk that both `reviewed` blocks survived the merge,
  so no merged-only edit can come back stale.

**No item text was edited.** My step-6 repair licence was open and I did not need
it: neither candidate was a defect in an item.

---

# Lane `contract-audit-3` — finite-smoke check SELECTION

**Lane:** `contract-audit-3` · Alpha · Claude Opus 5, `xhigh`, 1,000,000-token window
**Date:** 2026-08-17
**Scope:** the three commands in the dispatch. The failing one was `gate-liveness`.

## Reproduction, as dispatched

| detector | first run | after this audit |
|---|---|---|
| `boundary-audit … --fail-on-contradicted --fail-on-template` | **exit 0** — 2592 rows over 7 files, 1520 `not_applicable`, no template cluster, no contradicted row | **exit 0** |
| `citation-fidelity … --fail-on-missing-quote` | **exit 0** — 1176 citations over 324 items, no missing quote, no widening candidate | **exit 0** |
| `gate-liveness … --min-checks 1` | **exit 1** — `VACUOUS finite-smoke 0 checks (exit 0)` | **exit 0** — `live finite-smoke 4 checks` |

Neither contract detector printed a new candidate. `boundary-audit`'s only output
was the two rows lane `contract-audit-1` upheld on the record above; the detector
reports upheld rows and no longer fails on them, so they are not open candidates.
I re-read that lane's reasoning and the `def-equivalence-and-adjoint-equivalence-of-categories`
evidence behind it and found nothing to reopen.

So the whole of this lane's work is the vacuity: **a gate that ran, exited zero
and checked nothing**, over a level of 324 scoped items.

## This was already a known, open defect

`research/defect-ledger.jsonl` row **`f15-a-6b-007`** — group Alpha A, stage
`6b-adjudicate`, `silent-runtime` / `gate-vacuous`, `disposition: open`, left
explicitly "for the lead Alpha". It named five candidate results. This lane is
that disposition, so the row is closed here rather than duplicated: it is now
`fixed`, with the selection and every decline written into its `subclass_note`.

Its `prevention` asked for a tool change distinguishing "searched, found nothing"
from "no obligation registered". **That change already exists and is what caught
this**: `gate-liveness.mjs` reports VACUOUS with a nonzero exit, and commit
`1a63bc0b` routes that vacuity to this lane. What was missing was never the
mechanism — it was the judgement about which check probes which claim.

## Selected — 4 checks, each read from the item first

Selective by design, per QUALITY-CONTROLS §finite-smoke. The bar I held: the
registry check must be able to **falsify that item's own asserted claim**, not
merely live in the same subject area.

| item | batch | check | why it is a real falsification route |
|---|---|---|---|
| `thm-unit-square-criterion-modulo-odd-prime-powers` | 1 | `binomial-congruence-solution-count` | Every odd prime power in range has a primitive root, so at `m = 2` the search computes `gcd(phi(p^k), 2) = 2` and compares it with the actual solution count for every solvable unit. A count other than two anywhere is a countermodel to "exactly two solution classes modulo $p^k$". |
| `lem-nonsingular-square-root-lift-modulo-odd-prime-powers` | 1 | `binomial-congruence-solution-count` | Unique lifting is exactly what holds the count at two as the exponent climbs: were a class to lift two ways at one step, the count at $p^{k+1}$ would exceed 2 while the count at $p^k$ stayed 2. The search runs both exponents for 3/9/27, 5/25 and 7/49. |
| `thm-unit-square-criterion-modulo-two-powers` | 1 | `binomial-congruence-solution-count` | **Partial, and the contract row says so.** 2 and 4 are the only two-powers with a primitive root, so the search reaches exactly the modulus-2 and modulus-4 clauses: `gcd(phi(2),2) = 1` and `gcd(phi(4),2) = 2` against actual counts. The $k\ge3$ four-root clause has no primitive root and is **outside the search by construction**. |
| `ex-length-of-z-modulo-p-to-the-k` | 2 | `cyclic-subgroup-lagrange` | The chain's terms *are* the subgroups generated by $p^i$ in $\mathbb Z/p^k$. The check computes $|\langle d\rangle| = n/d$ for every divisor of every $n$ in range; at $n = 4, 8, 16, 9$ those subgroups are precisely this chain, so a wrong subgroup order breaks the order-$p$ successive quotients and with them the count of $k$ factors. |

Result: `0 error(s), 4 check(s) over 4/324 item(s) carrying obligations` — 3393
solvable congruence instances and every cyclic subgroup of $\mathbb Z/n\mathbb Z$
through $n = 24$.

## I verified my own verifier

A check that cannot fail is the defect it is supposed to prevent, one level down.

**(a) The excerpt binding is real.** I copied the merged contract, changed one
word of one `asserts` ("exactly two" → "exactly three"), and re-ran: the tool
reported `smoke-assertion-mismatch` and dropped to 3 checks. So `asserts` is
genuinely bound to the item text and not free-floating decoration.

**(b) The counts are right independently of the tool.** I recomputed them with my
own script rather than reusing `finite-smoke`'s code:

- mod 9, 25, 27, 49 — every solvable target has exactly **2** roots. Matches.
- mod 2 → **1** root; mod 4 → **2** roots. Matches the two clauses in range.
- mod 8, 16 → **4** roots. This is the $k\ge3$ clause the check *cannot* reach,
  and it is true; I checked it by hand precisely because the tool will never say so.

## Declined, with the evidence for each

A decline is a finding too, so none of these is "no applicable check" without a reason.

**Three of the five candidates named in `f15-a-6b-007`:**

- `ex-sylow-data-for-groups-of-order-at-most-fifteen` — no registry check computes
  Sylow numerics ($n_p \equiv 1 \bmod p$, $n_p \mid m$). `cyclic-subgroup-lagrange`
  computes additive subgroup orders in $\mathbb Z/n\mathbb Z$, which this item
  neither asserts nor uses. I verified the table by hand instead: every row is
  correct, including the two entries ($|G| = 12$, and $|G| = 15$ leaning on the
  order-$pq$ classification) where a slip would be easiest.
- `ex-complete-reciprocity-table-for-small-odd-primes` — no registry check computes
  a Legendre symbol or the reciprocity relation. `binomial-congruence-solution-count`
  counts solutions; it says nothing about which residues are squares.
- `thm-order-of-automorphism-group-of-elementary-abelian-rank-two` — its own step
  4.1 states the argument "is entirely in coordinates and makes no matrix-group
  identification". `matrix-ring-laws-mod-n` would therefore test a route the proof
  deliberately declines to take, and over the commutative $\mathbb Z/n$ it cannot
  see the index-convention error it exists to catch.

**`cor-number-of-square-roots-of-a-unit-modulo-n`** — declined although it is the
closest neighbour of two selected items. The check's primitive-root filter admits
only single odd prime powers plus 2 and 4, all of which the two selected items
already cover; the corollary's distinctive content is the CRT product over several
primes and the two-part, none of which is in range. A green here would report more
than it tested.

**Batch 3** (algebraic closures, separability) — `vieta-elementary-symmetric` is
the only conceivable match and the page's root-counting results
(`cor-separable-degree-of-a-simple-extension-counts-distinct-roots` and
`thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots`) are
about counting *distinct* roots of a minimal polynomial, not about symmetric
functions of roots over $\mathbb Z$.

**Batches 4, 5, 6** (σ-algebras and Borel sets, the fundamental group of the
circle, Goursat and Cauchy) — genuinely infinitary or analytic. Forcing a bounded
check here is the failure mode the brief names outright.

**Batch 7** (monads, comonads, algebras) — the dispatch suggested the poset checks,
and I looked hard before declining. Both are **existence-of-failure** witnesses:
each returns `ok: true` only when a meet *differs* or is *not preserved*, which is
how `frontier-12` used them, on `cex-a-full-subcategory-limit-can-differ-from-ambient-limit`
and its companion. Batch 7 asserts the opposite direction —
`thm-the-forgetful-functor-from-eilenberg-moore-strictly-creates-all-base-limits`
claims creation, and running `full-subposet-meet-differs-from-ambient` against a
fixed-point subposet would return `ok: false` ("both meets are X: the limit does
NOT differ") and be reported as a countermodel to a true theorem. Its one
failure-claiming item, `cex-a-coequalizer-not-preserved-by-a-forgetful-functor`, is
about a **coequalizer** in $\mathbf{Set}$ versus $\mathbf{Grp}$ — a colimit, which
no registry check models. Simulating it by feeding an opposite poset to a *meet*
check would produce output describing a join as a meet. I read that item in full
anyway: the group coequalizer is $\mathbb Z/2\mathbb Z$, the Set coequalizer has
one even class and a singleton per odd integer, and both halves are correct.

## One thing I read and deliberately did not change

Sourcing the excerpt for `thm-unit-square-criterion-modulo-two-powers`, the third
Statement bullet reads oddly: under "For $k\ge3$" it appends "the number of roots
is one for modulus $2$, two for modulus $4$, and four for modulus $2^k$ with
$k\ge3$", restating counts already given in the two bullets above it.

I checked before touching it, and the clause is **load-bearing**. Three contracts
quote it: `cor-number-of-square-roots-of-a-unit-modulo-n`'s `[L2]` quote is exactly
that trailing clause, because the corollary needs the whole count table as a single
proposition to build its CRT product; `ex-four-square-roots-modulo-a-power-of-two`
and `thm-unit-square-criterion-modulo-n` quote spans containing it. It is the only
place in the item stating the table as one proposition, every clause in it is true,
and editing it would break three recorded citation quotes — a real
`citation-fidelity` failure — for a cosmetic gain. Recorded here rather than
repaired, so the lead Alpha sees the read rather than inheriting a silent drop.

## Files changed

- `research/frontier-15-batch-1.proof-contracts.json` — `finite_smoke` on three
  items; each entry carries `check`, `asserts` (exact item text), `claim` and
  `checked_in`, following the `frontier-12` precedent. JSON round-trips
  byte-identically at the same indentation, so the diff is confined to the additions.
- `research/frontier-15-batch-2.proof-contracts.json` — `finite_smoke` on one item.
- `research/frontier-15-proof-contracts.json` — re-merged by
  `merge-proof-contracts.mjs --level frontier-15`, 324 scoped items from 7 batch
  contracts, so nothing here is a merged-only edit.
- `research/defect-ledger.jsonl` — `f15-a-6b-007` closed to `disposition: fixed`
  (in place: one row per defect, and the tool has no `update` verb), then
  `defect-ledger.mjs validate --run frontier-15` (68 rows, 0 errors) and
  `render` (584 rows → the generated view, so the view cannot lag the row).

**No item text was edited by this lane either**, and `proof-contract --strict` is
still `0 error(s), 0 warning(s), 324/324`.

---

# Lane `risk-review-1` — Alpha · Claude Opus 5, `xhigh`, 1,000,000-token window

**Date:** 2026-08-17. Dispatched on the same contract-detector adjudication task,
with `risk-report --require-reviewed` red. **In progress — this section is the
running record; the summary at its end is written last.**

## Reproduction, this lane

| gate | result |
|---|---|
| `boundary-audit … --fail-on-contradicted --fail-on-template` | exit 0 |
| `citation-fidelity … --fail-on-missing-quote` | exit 0 — 1176 citations, no missing quote |
| `gate-liveness … --min-checks 1` | exit 0 — finite-smoke **live at 4 checks**, not vacuous |
| `risk-report … --require-reviewed` | **exit 1 — 125 `risk-review-missing`** |

The three commands the dispatch names all pass. The work of this lane is the
fourth line: 125 high/critical-tier proofs routed to Alpha with no `risk_review`.

## The 125, split by cause

**33 were already reviewed and were failing on a key name.** Alpha-a wrote
substantive, per-item dispositions on batches 1 and 2 under the key
`disposition`; `risk-report` requires `notes`. I read all 33 before touching
them — they are real reviews, several recording confirmed-fatal repairs with
their ledger rows — and renamed the key in the owning batch contracts. No
rationale was written, weakened, or invented to clear the gate.

**92 had no `risk_review` at all**: batch 1 (14), batch 2 (37), batch 3 (41).
Those are being read one at a time and reviewed against their contracts.

## Refuter lane

The chartered build-refuter lane is GPT 5.6 Sol. I did not take the prior
sessions' word that it was quota-locked — I dispatched it, and it returned
`You've hit your usage limit … try again at Aug 20th, 2026`. Recorded, not
assumed.

DeepSeek V4 Pro **is** live, so the high/critical items get genuine independent
adversarial reading after all, through the tool-less transport the repo charters
for `audit-refuter`. It has no tools, so each dispatch carries its whole context:
`tools/pack-refuter-task.mjs` (added by this lane) packs each item, its recorded
contract entry, and the title-and-claim section of every declared dependency into
the `--task` file. This is a recorded cross-family substitution for a dead lane,
not a silent one; DeepSeek is one of the two chartered paired judges.

First attempt packed 7 items per dispatch and 5 of 6 returned
`finish_reason: length` with no report. Re-packed at 3 items with dependencies
trimmed to their claim sections: largest prompt fell from 212KB to 56KB.

Coverage actually achieved: **52 of the 92** items got a completed independent
refuter report (rr-2 covering 7, plus 15 narrow dispatches covering 45). The
remaining 40 hit `finish_reason: length` even at 3 items — the tool-less lane's
output budget, not a refusal. Every one of the 92 was read by me directly; the
refuter evidence is corroboration on 52 of them and absent on 40, and the
`risk_review` notes say which. This is a real gap in the independent-evidence
half and it is recorded rather than papered over.

**What the refuters found.** Across all completed reports: **zero confirmed
fatal defects**. One report filed a fatal finding (the Sylow II title, below);
I adjudicated it nonfatal on evidence it did not have. The rest were 30-second
gaps, one genuine missing dependency, and one false contract disposition — all
listed below.

## Findings and dispositions

### 1. Announcement steps — 17 repaired · ledger `f15-a-rr-001`

A numbered step whose whole content names work without doing it: *"We treat the
trivial $p$-subgroup and primes not dividing $|G|$."*, *"We check the trivial
quotient."*, *"The preceding argument gives the conclusion under every hypothesis
of the Statement."* (4 items), *"Keep the two prime orderings and the
order-twelve boundary case explicit."*, *"The forward implication is
published."*, and eight more.

**Two items had no proof at all** — every numbered step was an announcement.
`prop-endomorphisms-form-a-ring` named four ring axioms and verified none;
`thm-endomorphism-ring-of-a-finite-direct-sum-as-hom-matrices` announced the
matrix-multiplication verification. I wrote both proofs.

This is a **contract** defect and not only a prose one: `thm-sylow-second-theorem`
marked `zero` and `degenerate` as `checked`, evidence *"is resolved in step 4.1"*,
quoting the announcement verbatim. `boundary-audit`'s `checked` detector only
tested that the credited step *number* exists — and 4.1 did exist.

All 17 repaired, each re-`precheck`ed, contract entry regenerated, and
`proof-contract --strict` back to `0 error(s), 324/324`.

### 2. Sylow III chooses a Sylow subgroup with nothing supplying one · `f15-a-rr-002`

The DeepSeek refuter's find, confirmed from disk. Step 1.1 read *"Let a Sylow
subgroup $P$ act by conjugation on the Sylow set"* — presupposing
$\operatorname{Syl}_p(G)\neq\varnothing$, which is Sylow I, absent from `deps`.
The item's own `[L4]` says existence "is proved later". A declared fact
(`lem-product-with-normal-subgroup`) was used by no step.

Both were invisible because step 1.1 carried a **blanket citation of all five
facts**, which satisfies `citation-uses` while telling the input map nothing
true. Repaired: `thm-sylow-first-theorem` added, 1.1 rewritten to draw $P$ from
a set a cited fact has made nonempty, the unused fact removed, and steps 2.1/3.1
— which cited *nothing* while using Sylow II, the fixed-point congruence and the
normalizer-index formula — written out. The mathematics was right throughout;
the dependency trace was false.

### 3. Sylow II's title had no finiteness marker · `f15-a-rr-003`

Reported **fatal** by the refuter with a correct counterexample: in $D_\infty$
the maximal $2$-subgroups $\langle r^ns\rangle$ split into two conjugacy classes
by the parity of $n$. I verified that computation; it is right for the general
notion.

**I adjudicate it nonfatal**, on two pieces of evidence the refuter did not
have. `def-sylow-p-subgroup` in this library is stated only for finite $G$, so
the phrase cannot be read outside finite groups in-library; and a scan found six
other titles using the same convention. Underspecified, not false in the
library's own vocabulary. Title still amended to "in a finite group", because
Sylow I and Sylow III both carry the marker and a title stands alone in the
index.

*That scan returned zero hits on its first run and the zero was meaningless — its
own regex matched the very title it was meant to flag. It became evidence only
after a self-test asserting the known-bad title flags and the repaired one
clears.*

### 4. Prüfer group non-Noetherian via an uncited equivalence · repaired

The refuter found step 2.1 inferring non-Noetherian from a non-stabilising
ascending chain while the item's only Noetherian dependency defines Noetherian
as *every submodule finitely generated*, with the ACC equivalence proved
elsewhere and not in `deps`. Repaired with the direct argument: a finite subset
of $\bigcup_kC_k$ lies in a single $C_N$, so the group is not finitely
generated — no ACC theorem needed.

### 5. Generated boundary worksheets — 518 rows, **left open** · `f15-a-rr-005`

26 batch-2 items have a boundary worksheet generated end to end and 62 more are
partly generated. Batches 1 and 3–7 have **none**, so this is one Beta's habit,
not a level convention. The shape is `"<title>: <stock clause> for “<statement>”"`,
and because the title and statement are interpolated per item, no two rows are
textually identical and `boundary-audit`'s template detector reports **nothing**
over all 518.

The refuter hit the same class independently from the other side:
`fs-finite-nilpotent-and-solvable-groups-coincide` has `iff-forward` and
`iff-reverse` rows calling the claim *"a one-way assertion rather than a
biconditional"* when "finite nilpotent and finite solvable groups are the same"
is plainly an equivalence. Confirmed from disk.

**Not repaired at scale, and that is a judgement I want visible.** Rewriting 518
rows as real dispositions is the owning Beta's work with its sources to hand; a
bulk rewrite by me would reproduce the original defect in a new hand. The four
rows that credited an announcement step *are* repaired. `disposition: open`.

## Tool changes, with their docs

- **`tools/announcement-steps.mjs`** (new) — the item-side detector. Verb list
  grown from live misses, never guessed: the first version missed 2 of 3 known
  instances because inline math inside a *named case* counted as work.
- **`tools/boundary-audit.mjs`** — fourth contradiction signal: a `checked` row
  crediting a step that is an announcement. Verified against a fixture that
  fires on the bad row and stays silent on the good one.
- **`tools/pack-refuter-task.mjs`** (new) — packs an item, its contract entry and
  its dependencies' claim sections into a tool-less refuter's `--task`.
- **`tools/apply-risk-reviews.mjs`** (new) — routes a review to the batch
  contract that owns the item, so no review lands in the merged file alone.
- `ARCHITECTURE.md` §3.11g and `QUALITY-CONTROLS.md` §High-risk routing updated
  in the same change, per the standing rule.

## Final gate state

| gate | exit |
|---|---|
| `boundary-audit … --fail-on-contradicted --fail-on-template` | **0** |
| `citation-fidelity … --fail-on-missing-quote` | **0** |
| `gate-liveness … --min-checks 1` | **0** — finite-smoke live at 4 checks |
| `risk-report … --require-reviewed` | **0** — was 125 errors |
| `proof-contract --strict` | `0 error(s), 0 warning(s), 324/324` |
| `depcheck` | 0 |
| `defect-ledger validate --run frontier-15` | 73 rows, 0 errors |

**Open when this lane finished:** the 518 generated boundary rows
(`f15-a-rr-005`), and independent refuter evidence on 40 of the 92 items, where
the tool-less lane could not fit the reading in its output budget and the
chartered Sol lane is quota-locked until 2026-08-20. Neither blocks the four
gates; both are real and neither is closed.

### `announcement-steps` candidates I read and UPHELD

The detector still prints 8 candidates over the level. All 8 were read; none is
a defect, and they are recorded here because a detector whose output nobody
dispositions is one readers learn to skim:

| item | step | why upheld |
|---|---|---|
| `lem-wielandt-sylow-binomial-valuation` | 1.1 | displays the identity being valuated; the work is the display |
| `cor-finite-direct-sums-preserve-chain-conditions` | 1.1 | names the induction *and* the split short exact sequence it runs on |
| `lem-products-of-normal-p-subgroups` | 1.1 | states the empty-product outcome |
| `lem-frattini-subgroup-nongenerator-characterization` | 3.1 | states $\Phi(1)=1$, which is the whole discharge |
| `ex-cauchy-integral-formula-exponential-over-z-minus-one` | 2.1 | gives the computed value |
| `ex-cauchy-integral-formula-cosine-third-order-pole` | 2.1 | gives the computed value |
| `cor-kleisli-and-eilenberg-moore-have-the-extremal-adjunction-universal-properties` | 1.1, 1.2 | names the factorisation each universal property produces |

Six are `weak` by the tool's own confidence split, which is working as intended.
The two `strong` ones are the cost of broadening the verb list to `apply` and
`induct` — a widening that was *necessary*, since it is what caught
`thm-sylow-number-as-normalizer-index` ("We apply orbit–stabiliser…") and
`thm-finitely-generated-semisimple-modules-…` ("Remove zero or repeated
summands…"). The natural next change is a `reviewed.upheld` escape mirroring
`boundary-audit`'s, so an upheld step stops being reprinted; it is not built
here because the tool is wired into no gate yet.
