# Wave 4 — A8 round 3 (Alpha, `claude-opus-5`, 2026-08-05)

One rejection, on `def-cofinality`. **Adjudicated `confirmed_fatal`, repaired,
independently certified.** The judge was right and the sentence was false.

Baseline for the round: `touchlog` snapshot **`pre-a8-round3-alpha`**
(2026-08-05T08:19:43Z), taken before the first edit. Closing snapshot
**`post-a8-round3`**. `step8-guard` reports `1 changed, 1/1 licensed`.

---

## 1. The finding, and why I did not take the easy way out

`deepseek-v4-pro`, context `213fc8ea5f31e4ea`:

> Remark incorrectly states that cf(α)=α holds only at 0, 1, and all infinite
> cardinals. In fact, singular infinite cardinals do not satisfy cf(κ)=κ,
> contradicting the item's own definition of singular.

The text, first Remark of `items/def-cofinality.md`:

> …it fails at $\omega + 1$ and at $\omega \cdot 2$ for reasons that have nothing
> to do with size, and it holds only at $0$, at $1$, and at those ordinals that
> are already infinite cardinals.

**There is a defence of this sentence, and I tested it before doing anything
else.** The word "only" is a restriction: `P holds only at S` asserts
`{x : P(x)} ⊆ S`, a necessity claim, not an equality. Under that reading the
sentence is *true* — the true class is

$$\{\alpha : \operatorname{cf}(\alpha) = \alpha\} \;=\; \{0, 1\} \cup \{\text{regular infinite cardinals}\},$$

which is contained in `{0,1} ∪ {infinite cardinals}`. And the conclusion the
Remark draws from it ("Calling an ordinal regular would therefore say nothing
new") follows from the weaker necessity reading alone. So the sentence had a
reading on which it was true and its inference was valid, and DeepSeek's verdict
text inserts a word — "**all** infinite cardinals" — that the sentence does not
contain. That is the shape of a false positive, and my first draft assessment was
`confirmed_nonfatal`.

**Four independent lines of evidence overturned it.**

1. **A blind DeepSeek refuter** (`a8r3-cofinality-blind`, assembled context, no
   mention of the judge's allegation) found it unprompted, first finding, FATAL.
2. **A focused DeepSeek refuter** (`a8r3-cofinality-focused`) was handed the
   "only ⇒ necessity" defence explicitly and asked to rule on it, with
   instructions not to soften in either direction. It ruled against the defence:
   *"The word 'only' modifies the whole list. In standard mathematical English
   the sentence asserts that the condition cf(α)=α is true **exactly** for the
   ordinals 0, 1, and all infinite cardinals… The necessary part is true… The
   sufficient part is false."* It derived the exact class independently first.
3. **The sentence's own construction.** It is contrastive — *it fails at ω+1 and
   ω·2 …, and it holds only at …* — which is a locative enumeration of where the
   condition lives, not a bare necessary condition. A reader is being told where
   it holds.
4. **The corpus refutes it by name.** `items/fs-every-aleph-is-regular.md` is a
   published `false-statement` item on the **same page**, titled
   *"FALSE: $\aleph_\alpha$ is regular for every ordinal $\alpha$"*, i.e.
   $\operatorname{cf}(\aleph_\alpha) = \aleph_\alpha$ for every $\alpha$. That is
   precisely the proposition the Remark conveyed on its natural reading. The
   library catalogues it as false and points back at `def-cofinality` in its own
   `deps`.

Point 4 is what settles it. A definition page whose Remark states, in the reading
a reader will take, the exact proposition the same page carries as a catalogued
falsehood, is not suffering from an imprecise letter. It is contradicting itself,
three ways: its own definition of **singular** three lines above; its own second
Remark ("that is exactly the failure of regularity"); and
`thm-regularity-of-the-alephs` (c), $\operatorname{cf}(\aleph_\omega) = \aleph_0
< \aleph_\omega$.

**Adjudication:** `confirmed_fatal`, `defect_type: other` — a false mathematical
claim in load-bearing prose, matching how round 2 typed `thm-compact-iff-fip`.
Row appended to `research/audit/wave4-judge-adjudications.jsonl` against the
pre-edit `item_sha256` `4f1fbb6b7afee3aa…`, confirmed byte-identical to the
`pre-a8-round3-alpha` snapshot, so the licence binds text that actually existed.

## 2. The repair

One clause. Statement, title, `deps`, `justified_by` and every other Remark are
untouched.

| | text |
|---|---|
| **was** | …and it holds only at $0$, at $1$, and at those ordinals **that are already infinite cardinals**. |
| **now** | …and it holds only at $0$, at $1$, and at **infinite cardinals, where it is exactly the regularity defined above and so fails at every singular one**. |

The necessity claim is kept, the class is pinned to its true extent inside the
same sentence, and the "therefore" that follows now rests on a stated fact rather
than on a reader's charitable parse.

**Certification.** I authored the repair, so I did not certify it. The stale
`verification.verified` stamp was **deleted before the first edit**, leaving the
item deliberately unstamped, and an independent read-only certifier
(`claude-sonnet-5`, `certifier-a8r3-def-cofinality`) read the current file from
disk. It derived $\{0,1\} \cup \{\text{regular infinite cardinals}\}$ from
`thm-cofinality-basics` (b),(c) itself before looking at my clause, quoted all
three consistency targets, and returned **CERTIFY, 1 certified / 0 refused,
collateral: none found**. The stamp was rewritten only after that verdict.

Its one recorded caveat, which I accepted and did not act on: the clause is
dense, and a reader who stops at the comma could momentarily misread it. That is
imperfection at the level of the letter — the disqualifying difference from the
old text is that the exclusion of singular cardinals is now *stated*, in the same
sentence, rather than absent. Re-editing certified text to smooth prose is
exactly what R1 forbids.

## 3. Is `def-cofinality` converging?

**Yes, and its Remarks do not need rewriting as a unit.** Measured from disk:

- Round 1 (`5877c4fe…` → `4f1fbb6b…`) added `def-cardinal-arithmetic` to `deps`
  and the gloss "a cardinal with $\omega \subseteq \kappa$". A citation repair.
- Round 3 (`4f1fbb6b…` → `3515524f…`) fixed one Remark clause. A prose-falsehood
  repair.

Two touches, two *disjoint* defects, in different parts of the item, neither
reopening the other. That is convergence, not thrashing — the opposite of the
signature the twice-touched escalation exists to catch, which is the same
proposition being repaired repeatedly. I re-read all four Remarks and the
Definition end to end this round; §4 records the one further thing I found.
The escalation is advisory and I am recording it as satisfied here rather than
carrying it to the owner.

## 4. Owner queue — a **second** false Remark heading in this item, NOT repaired

**`def-cofinality`, fourth Remark heading:** "**Only one notion of 'cofinal'
exists in this library.**"

`items/def-subnet.md` is titled *"Subnet via an eventually cofinal index map"*
and states *"The displayed condition says that $\phi$ is **eventually
cofinal**"* — a second formal notion carrying the word, for index maps between
directed sets. Both refuters flagged the heading as unverifiable from their
context; the certifier, which has disk access, opened `def-subnet.md` and ruled
it **"overstated / false as literally written."**

The Remark's **body** is correctly scoped and true: `def-cofinal-subset-of-an-
ordinal` does introduce cofinal subsets, does deliberately withhold
$\operatorname{cf}$ and the regular/singular vocabulary (I confirmed its own text
says so at line 67), the boundedness attribution is accurate
(`thm-countable-subsets-of-omega-one-are-bounded` declares it in `deps`), and no
second notion of *cofinal subset of an ordinal* is created. Only the heading
over-claims, by dropping that scope.

**Why it is not repaired here.** No adjudication licenses it. The rejection I am
closing names the first Remark; A8 is fatal-only, and having already voided this
item's verdict for a licensed fatal does not turn an unlicensed second edit into
a licensed one — that is precisely the polish R1 removed from step 8. Round 2
left `thm-konig` for the same reason and was right to.

**Recommended route:** scope the heading to what the body proves, e.g. "Only one
notion of cofinal *for ordinals* exists in this library", or drop the word
"only". No deletion, id change, or reading-order change.

## 5. The defect class the owner asked about — it is the same one, and it is systematic

**Yes.** This is the same class as the `thm-konig` Remark round 2 flagged: *a
Remark asserting a global claim that the page's own neighbouring items falsify.*
Wave 4's tally of it is now **six**, and every one is in prose:

| item | the global claim | what falsifies it |
|---|---|---|
| A8-3 (`thm-locally-compact-hausdorff-basics`) | how another item uses claim 4 | the consuming item |
| A8-4 | cross-item attribution | the consuming item |
| `thm-compact-iff-fip` (round 2, **fatal, repaired**) | cross-item attribution | the consuming item |
| `thm-konig` (round 2, owner queue) | "the only ZFC constraint on $2^{\aleph_0}$ established here" | `thm-cardinal-power-set-and-cantor`, item 6 on the same page |
| **`def-cofinality` Remark 1 (this round, fatal, repaired)** | where $\operatorname{cf}(\alpha)=\alpha$ holds | `fs-every-aleph-is-regular` and `thm-regularity-of-the-alephs`, same page |
| **`def-cofinality` Remark 4 (this round, owner queue)** | "only one notion of cofinal exists in this library" | `def-subnet` |

Two sub-shapes, one mechanism. The earlier four assert **how another item uses
this one**; the two found this round assert **that this page is the only place
something happens**. Both are load-bearing prose written from the author's local
view of the corpus, and both are unfalsifiable from inside the item — which is
exactly why no gate catches them. `citecheck` and `depcheck` read `deps` and
`[[links]]`; neither reads an English quantifier over the library. The judge
context is the A/B pair plus declared-and-cited dependencies, so a judge
literally cannot see `def-subnet` or, for `thm-konig`, weigh a sibling on its own
page.

**It is not one-off.** It is wave 4's dominant confirmed-fatal class, it survived
the original authoring, the wave's A4/A6, and in this item two prior judge passes.
The cheap mechanical screen it invites: flag every Remark containing "only", "the
only", "no other", "nowhere else", "every", or "exists in this library" for a
reader with corpus-wide grep. That is a gate proposal for A10, not something I
can build under a fatal-only stage.

## 6. A lane observation the A10 comparison should carry

**DeepSeek passed this exact sentence a day before it rejected it.** The item
text has been byte-stable since `post-a8` (`4f1fbb6b…`, 2026-08-04T16:38Z). On
context `cfe094ee1d7db8ec` at 2026-08-04T17:35Z, `deepseek-v4-pro` returned
`keep: true` with *"The remarks are consistent with the definition and the cited
theorems. No mathematical error…detected."* On context `213fc8ea5f31e4ea` at
2026-08-05T08:12Z it returned `keep: false` on the same text.

Same model, same mathematics, opposite verdicts; only the surrounding page
context differed (sibling items gained stamps between the sweeps). This does not
weaken the finding — the finding is independently confirmed four ways above — but
it does temper the framing that the cross-family lane *reliably* catches what the
Claude lane misses. On this item it caught it on the second attempt out of three.
The honest reading is that Remark falsehoods are near the detection threshold for
every lane, which argues for the §5 screen rather than for more sampling.
`claude-sonnet-5` returned `keep: true` on all three contexts.

## 7. Gates run this round

| gate | result |
|---|---|
| `touchlog snap pre-a8-round3-alpha` / `post-a8-round3` | 2767 items, taken before first edit / after last |
| `step8-guard --baseline pre-a8-round3-alpha` | **OK** — 1 changed, 0 created, 0 deleted; 1/1 licensed by a confirmed fatal |
| `impact-audit --from pre-a8-round3-alpha --to post-a8-round3` | **exit 0** — receipt `wave4-a8-round3-impact-audit.json` |
| `precheck items/def-cofinality.md` | 0 checked, 0 failing (definition, `precheck: n/a`) |
| `depcheck` | **OK** — no cycles, all references resolve, no draft items on published pages |

**Impact closure.** The repair touches a Remark, and `touchlog`'s public-surface
fingerprint deliberately includes Remarks, so it registers as a public-interface
change and the closure was run rather than argued away. 1 changed interface, 11
affected items, **all 11 dispositioned `still-licensed`** with per-item evidence:
every one cites `def-cofinality` only for the $\operatorname{cf}$ definition or
the regular/singular vocabulary, both in the byte-identical Definition section.
No item cites a Remark. `fs-every-aleph-is-regular` and
`thm-regularity-of-the-alephs` carry their own notes, because for those two the
repair moves `def-cofinality` from contradicting them into agreeing with them.

## 8. For the orchestrator — the exact rejudge

Targeted rejudge, **`def-cofinality` only**. No other item changed, and the
targeted receipt is designed for exactly this case.

```
node tools/judge-sweep.mjs \
  --ledger research/audit/wave4-judge.jsonl \
  --cost research/audit/wave4-judge-cost.jsonl \
  --items def-cofinality
```

Bind the receipt in `research/audit/wave4-targeted-judge-receipt.json` to:

- `id`: `def-cofinality`
- `context_sha256`: `7588c88d630684842278476950414de2c4d848d9ac47066c7219ed9ecf85a5bb`
- `item_sha256`: `3515524fe4ea9be1dd9ab0b392d44e5e48f16cdd9b3011a4603e5268ef404e70`

Re-verify both immediately before the sweep. Then stamp only through
`apply-judge-stamps.mjs --audit-targeted-rejudges`. I wrote no
`verification.judge`; the `verification.verified` stamp on disk is the
certifier's reading of the final text and is current.

## 9. Round-3 dispatch record

| lane | role / model | label | verdict |
|---|---|---|---|
| adversarial, blind | `audit-refuter` / `deepseek-v4-pro` | `a8r3-cofinality-blind` | 1 fatal, 1 nonfatal |
| adversarial, focused on the "only" defence | `audit-refuter` / `deepseek-v4-pro` | `a8r3-cofinality-focused` | 1 fatal, 1 nonfatal |
| independent certification | `certifier` / `claude-sonnet-5`, read-only | `a8r3-def-cofinality` | **CERTIFY**, 1/0 |

Both refuters ran tool-less on context assembled into their `--task` files
(`task-a8r3-cofinality-blind.md`, `task-a8r3-cofinality-focused.md`): the full
item plus the verbatim Definition/Statement of all six declared dependencies, the
`justified_by` target, and `thm-regularity-of-the-alephs` as the page neighbour
the second Remark names.

## 10. Open items leaving this round

1. **`thm-konig` Remark** — carried from round 2, unrepaired, no licence. §5.
2. **`def-cofinality` Remark 4 heading** — new this round, unrepaired, no
   licence. §4.
3. **The Remark-scope gate proposal** for A10. §5.
4. Nothing this round needs a deletion, id change, or reading-order change.
