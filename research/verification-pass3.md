# Verification pass 3 — 152 items, 2026-07-25

Third measurement with the SAME instrument as `verification-benchmark.md` and
`verification-pass2.md`: nine read-only Opus verifiers, one per page, each
reading every item on its page in full **and every item cited in its Statement /
Definition / Facts in full**, ruling CERTIFY or WITHHOLD, biased hard toward
WITHHOLD. This pass used a **uniform brief** (generic defect classes, not pass 2's
specific findings), so anything it found is discovery rather than a led witness.

Run after the full corrected loop: escalation (page context) → judge (page
context) → cross-page audit.

| | certify | withhold | rate |
|---|---|---|---|
| benchmark, pre-rebuild | 100 | 50 | **33.3%** |
| pass 2 | 109 | 43 | **28.3%** |
| **pass 3** | **133** | **19** | **12.5%** |

| page | pass 3 | pass 2 | benchmark |
|---|---|---|---|
| order-zorn | 4.2% | 12.5% | 30.4% |
| roots-and-rational-powers | 4.5% | 18.2% | 36.4% |
| ordinals | 8.7% | 17.4% | 30.4% |
| sequences-and-limits | 11.1% | 27.8% | 66.7% |
| suprema-and-infima | 11.8% | 35.3% | 29.4% |
| suprema-and-infima-examples | 12.5% | 37.5% | 12.5% |
| countability | 20.0% | 35.0% | 21.1% |
| filters-and-ultrafilters | 25.0% | 58.3% | 33.3% |
| order-zorn-examples | 37.5% | 50.0% | 25.0% |

## What is and is not claimable

**Claimable:** the corrected loop took the withhold rate 33.3% → 12.5% on
identical pages with an identical instrument, and the RESIDUE CHANGED IN KIND.
The benchmark had 3 items with real logical gaps and 5 needing new mathematics.
**In pass 3 no proof failed.** The 19 remaining are prose overclaims, citation
scope, and missing hypotheses on remarks.

**NOT claimable:** that the library is defect-free. Pass 3 found 19 defects that
three prior tiers had missed, including one in the auditor's own repair. The
instrument SAMPLES; every pass finds a different subset. There is no pass at
which a low number means zero.

## Defects pass 3 found in work done EARLIER THE SAME DAY

Worth recording, because it is the argument for running the measurement over
one's own edits:

- `lem-successor-of-extremal` — **the auditor's own fix was wrong.** An `[L4]`
  partial-order fact was added and steps 2.2/2.3 tagged, copying a sibling's
  wording. But step 2.1 eliminates `f(x) ≤ y` from `y < f(x)`, which needs
  ANTISYMMETRY (transitivity alone gives only `f(x) ≤ f(x)`, no contradiction);
  `[L4]` omitted antisymmetry and step 2.1 cited no order fact at all. The
  flagged steps were fixed and the unflagged one never audited.
- `def-ultrafilter` vs `thm-ultrafilter-lemma` — a DIRECT CONTRADICTION created
  by the escalation pass, which removed the theorem's counting overclaim and left
  the definition saying the counting question is one "which only the ultrafilter
  lemma answers". Same-batch class; a reconciliation checkpoint would catch it.

## STILL OUTSTANDING — verified defects, present in the tree, NOT fixed

Every quote below was confirmed present. Fix these before any publish.

### countability
1. `def-countable:69` — "nothing on this page uses it" is FALSE;
   `rem-continuum-hypothesis` uses it. *(pigeonhole agent was tasked with this)*
2. `rem-continuum-hypothesis:91-92` — instantiates GCH at `A = ℕ`; GCH is
   quantified over INFINITE `A`, so this needs `ℕ ≉ n`. *(pigeonhole agent)*
3. `fs-infinite-has-countable-subset-in-zf:80` — "Dedekind-infinite implies
   infinite in ZF" asserted unflagged; contrapositively the pigeonhole
   principle. *(pigeonhole agent)*
4. `fs-uncountable-contains-interval:68,70` — cites the remark at the end of
   `thm-r-uncountable`, which is stated for the CLOSED `[a,b]`, while this item's
   Given fixes the OPEN `(a,b)`. Not vacuous: the point the construction produces
   may be an endpoint, which is why the target is worded for `[a,b]`. **NOT
   assigned to anyone.**

### sequences
5. `lem-index-map-grows:85` — "the only special property used is discreteness" is
   false: the proof is by induction (`proof_strategy: induction`, `[L3]`, step
   3.1 tagged `discharge-induction`). Also insufficient: `(ℤ, ≤)` is discrete in
   the same sense and `n_k = k − 1` refutes claim 2 there.
6. `rem-sequence-conventions:90` — "Everything else about a sequence, convergence
   included, depends on more than the range" is false and contradicted by its own
   paragraph: bounded-above, bounded-below, sup of the terms and "the range is
   finite" are all range-determined. Only the convergence instance is
   substantiated.

### ordinals
7. `def-well-order:84,86` — attributes the descending-sequence converse to
   `rem-choice-ledger`, which records DC's status but says nothing about that
   characterisation. The library's actual witness, `rem-cohen-first-model`, is not
   cited. (Mathematics true and correctly Con(ZF)-conditional; only sourcing wrong.)
8. `rem-choice-ledger:59` — "not recorded anywhere in this library either" for
   the vector-space-basis equivalence. It IS recorded, in
   `rem-hahn-banach-hamel-basis-open:54-55`, which is listed on
   `library/not-proved-here/open-problems-and-research-frontier.md`.

### page prose (not items)
9. `library/foundations/ordinals-and-transfinite-recursion.md:57-58` — "every
   result on this page states whether it inherits that cost";
   `lem-omega-least-limit-ordinal` has zero occurrences of "choice".
10. `library/foundations/filters-and-ultrafilters.md:34-37` — the counting
    question "is settled only by the ultrafilter lemma". Same overclaim already
    corrected in `def-ultrafilter`; the page was missed.

### sub-threshold, recorded not withheld
- `library/foundations/filters-and-ultrafilters.md:16-17` "the library's first
  genuinely non-constructive existence statement" sits uneasily beside the
  ordinals page proving `thm-well-ordering-theorem` from Zorn.
- `fs-bounded-implies-convergent:90` uses present tense for a page (RA-05) that
  does not exist yet in `library/real-analysis/`.
- `def-partial-order:57` "the one every proof on this page ultimately applies to"
  — `fs-maximal-is-greatest` uses an abstract antichain instead.

## Structural gaps, beyond any single item

- **Pigeonhole principle.** `lem-pigeonhole` was commissioned this session
  (claims: no injection `σ(n) → n`; no injection `n → m` for `m < n`; `n ≈ m ⟹
  n = m`; `ℕ ≉ n`; no natural is equinumerous with a proper subset). Status at
  session end: authoring agent in flight, result unknown.
- **`ex-russells-socks` `[A1]`** has no `proved_here: false` item at its exact
  strength (ZF ⊬ AC for countable families of pairs). Recommended:
  `rem-fraenkel-socks-model`, cited to Jech, *The Axiom of Choice*.
- **`lem-bernoulli-inequality` is an orphan** — `thm-am-gm` was its only consumer
  and no longer needs it. Curation question for the owner, not a defect.
- **`research/plan-spec.json` is stale**: 156 items named, 403 on disk.

## THE SCOPE LIMIT. Read this before believing any number above.

**403 items exist. All three passes measured the same 152** (rounds 1 and 2).
The other ~250 — INCLUDING THE FIVE ALREADY-PUBLISHED PAGES — have never been
through the escalation/judge/audit loop and were verified in earlier sessions
with weaker tooling. `citecheck` did flag items there
(`thm-reals-dedekind-field`, `lem-cut-add-well-defined`); three were triaged as
false positives and the rest never examined.

Given the loop found 19 defects in 152 freshly-worked items, expect a comparable
density in that untouched 250. **Nothing here licenses a claim about the library
as a whole.**

## Publish status

NOT publishable as of session end. Outstanding: the 10 defects above, the
pigeonhole wiring, a re-judge of everything changed after the last judge run, and
the loop over the ~250 unverified items. No pass has yet produced zero NEW
findings, which is the real bar.

`verification.audited` is the owner's to set and is set on NONE of this session's
work (138 items carry it from earlier sessions).
