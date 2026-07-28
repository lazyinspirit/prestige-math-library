# Level-9 (mixed track) — amendments staged for the publishing commit

**Status: STAGED, NOT APPLIED.** Amendments 1 and 2 were owner-approved
2026-07-28 at step 3, together. **Amendment 3 was escalated by the step-8 audit
later the same day and is NOT yet owner-approved** — it changes published,
owner-audited text and needs an explicit decision.

Nothing here may land before the commit that publishes the level containing the
page that falsifies it (`LEVELS.md` §10b: "Amendments to published pages land in
the same commit that publishes the level, never before"). The two amendments have
**different trigger pages**, so they may land in different commits if the level
is published in parts — each says which page triggers it.

Level 9 (mixed) = orders 24, 70, 129, 131, 137 and their `-examples` companions.
Named "mixed" because it spans number theory, linear algebra and real analysis;
`level9-*` alone was already taken by the pre-renumber level 9.

Amendments 1 and 2 are the **published-claim-decay** class: true when written,
made false by a later level, and **invisible to every gate**. Found by Beta-9-2
at step 2, verified from disk by the orchestrator at step 3. Amendment 3 is a
different class — a fact the library needs and does not have anywhere.

---

## Amendment 1 — `items/rem-choice-ledger.md`

**Trigger: `linear-independence-bases-and-dimension` publishing.**

The ledger currently says, under "Equivalent to the Axiom of Choice over ZF":

> - **Every vector space has a basis.** The implication from the Axiom of Choice
>   is a routine application of Zorn's lemma; the converse is a hard theorem of
>   Blass, 1984. Neither direction is proved here, and no item derives either, so
>   both are quoted on the authority of the references. The equivalence itself is
>   recorded in the library, in [[rem-hahn-banach-hamel-basis-open]], where it
>   fixes the upper endpoint of an open question about the strength of
>   Hahn-Banach.

**"Neither direction is proved here, and no item derives either" becomes false**
the moment `cor-every-vector-space-has-a-basis` publishes. Replacement:

> - **Every vector space has a basis.** The implication from the Axiom of Choice
>   is a routine application of Zorn's lemma, and it **is** proved here, in
>   [[cor-every-vector-space-has-a-basis]] by way of
>   [[thm-every-independent-set-extends-to-a-basis]]. The converse is a hard
>   theorem of Blass, 1984, which is **not** proved here and is quoted on the
>   authority of the references. The equivalence itself is recorded in the
>   library, in [[rem-hahn-banach-hamel-basis-open]], where it fixes the upper
>   endpoint of an open question about the strength of Hahn-Banach.

Applying it:

- homed on `ordinals-and-transfinite-recursion`, which sits ABOVE
  `linear-independence-bases-and-dimension`, so the new wikilinks point
  BACKWARD: no forward reference, no cycle;
- add `cor-every-vector-space-has-a-basis` and
  `thm-every-independent-set-extends-to-a-basis` to its `deps`;
- **DELETE the `judge` block.** A `rem-` item IS its prose, so per SCHEMA §3 this
  is a material rewrite. It carries a judge block (glm-5.2, 2026-07-25) and a
  `verified` block.

---

## Amendment 2 — `items/ex-p-adic-ultrametric.md`, two passages

**Trigger: `primes-and-the-fundamental-theorem-of-arithmetic`
publishing. Do NOT apply before then, or the wikilinks dangle.**

Homed on `metric-spaces`. The primes page supplies exactly the machinery both
passages say is unavailable.

**This item was cleared as still-true by the level-8 step-10b sweep**
(`research/level8-algebra-scope-sweep.md`), on the ground that primality sat at
that page and that page was unbuilt. That reasoning was correct then and expires
now. It is a clean demonstration that a scope-denial sweep dates its own result.

### (i) In `## Example`

OLD:

> **Why $p = 2$ and not a general prime.** The general $p$-adic valuation needs
> primality and unique factorisation in $\mathbb{Z}$, neither of which this item
> develops or assumes.

NEW:

> **Why $p = 2$ and not a general prime.** The general $p$-adic valuation needs
> primality and unique factorisation in $\mathbb{Z}$, which are developed on
> *Primes, Euclid's Lemma and the Fundamental Theorem of Arithmetic*
> ([[def-p-adic-valuation]], [[thm-euclids-lemma]],
> [[thm-fundamental-theorem-of-arithmetic]], [[lem-p-adic-valuation-on-q]]) and
> are therefore available here; this item
> nevertheless develops the case $p = 2$ from parity alone, so that the
> ultrametric geometry below rests on nothing but the discreteness of
> $\mathbb{Z}$.

### (ii) The final Remark

OLD:

> - **The general $p$-adic absolute value is not available here.** Its
>   well-definedness needs the primality of $p$ in the form of Euclid's lemma,
>   that $p$ dividing a product divides one of the factors, which this item does
>   not establish and does not assume. At $p = 2$ the statement doing the same
>   work is that a product of odd integers is odd, proved in step 1.3 above by a
>   one-line ring computation.

NEW:

> - **The general $p$-adic absolute value, and what this item does instead.**
>   Its well-definedness needs the primality of $p$ in the form of Euclid's
>   lemma, that $p$ dividing a product divides one of the factors. That is
>   [[thm-euclids-lemma]], and the resulting valuation on $\mathbb{Q}^{\times}$
>   is [[lem-p-adic-valuation-on-q]], both on the primes page and both
>   available here.
>   This item deliberately does not use them: at $p = 2$ the statement doing the
>   same work is that a product of odd integers is odd, proved in step 1.3 above
>   by a one-line ring computation, so the whole development below is
>   self-contained from parity.

Applying it:

- add `thm-euclids-lemma`, `def-p-adic-valuation`,
  `thm-fundamental-theorem-of-arithmetic` and `lem-p-adic-valuation-on-q` to
  `deps` (the primes page sits below `metric-spaces`, so backward, no cycle);
- it carries **no** `judge` block — one was removed 2026-07-27 for exactly this
  kind of Remarks correction — so only `verification.audited` needs refreshing.

**Correction, step-8 audit 2026-07-28 (Beta-9-2a).** The first draft of this
amendment named three items for "primality **and unique factorisation**" and
none of the three states unique factorisation — that is
`thm-fundamental-theorem-of-arithmetic`, now added above in both places. The
auditor also noted that `lem-p-adic-valuation-on-q` does not in fact *use*
unique factorisation, only Euclid's lemma through additivity, so the published
sentence's "needs primality and unique factorisation" is a mild overstatement
this amendment inherits rather than introduces. Left standing: it is published
text, the general $p$-adic *absolute value* development does use unique
factorisation, and rewriting it is a separate owner call.

---

## Recorded, NOT an amendment

`items/def-ring-characteristic.md` defers "the characteristic of an integral
domain is 0 or prime" to "a later page, where primes are available". **Order 24
cannot discharge it and no amendment is owed.** The result needs *ring* as well
as *prime*, and rings are order 42 — eighteen pages above 24, which may not use
the word. Its stated justification survives unchanged.

**The obligation passes to order 46**,
`euclidean-domains-pids-and-unique-factorisation`, where prime and irreducible
elements of a domain are defined. Record that in the spec note for order 46 at
splice time.

(The orchestrator briefed Beta-9-2 that order 24 would discharge this. That was
wrong, and the agent corrected it from disk.)

---

## Amendment 3 — `items/lem-finite-sum-laws.md`, a NEW clause

**Trigger: `the-riemann-integral` publishing. Escalated by the step-8 audit,
2026-07-28.**

**Add a clause 7: the finite double-sum interchange**

$$\sum_{i<n}\sum_{j<p} a_{ij} \;=\; \sum_{j<p}\sum_{i<n} a_{ij}.$$

**Why it is owed.** Two items on `the-riemann-integral` —
`thm-finitely-many-discontinuities-integrable` and `thm-lebesgue-criterion` —
need it, and it exists **nowhere in the library**. The auditor confirmed this
from disk: `lem-finite-sum-laws` has six clauses and none is this;
`thm-double-series-fubini` is about infinite double series; and the precedent the
authoring agent cited, `[L5]` of `thm-countable-union-of-null-is-null`, is a
different fact entirely ("every finite list of naturals has an upper bound").

**What was done instead, and why it is a stopgap.** The auditor replaced the bare
assertion with its own three-line induction, inline, in both `[L]` lines —
induction on the outer bound, base from the `def-finite-sum` recursion clause
plus clause 2 at $\lambda = 0$, successor from the recursion clause plus clause 1.
That is correct and it is gated, but **it duplicates the same induction in every
consumer**, and every later multi-index proof in the library will want the same
fact. Duplicating it is the wrong equilibrium.

**Why it is staged rather than applied.** `lem-finite-sum-laws` is `published`
and `audited`. Adding a clause is a material change to published, owner-audited
text: it needs owner approval, and applying it clears `verification.audited` so
`depcheck` forces a re-audit. It lands in the commit that publishes the level, or
not at all.

**When it lands**, the two inline inductions should be replaced by a citation, so
the library holds one proof of the fact rather than three.

---
---

# Step 10a — the scope-denial sweep of the published corpus (2026-07-28)

Everything from here down was found by the **step-10a sweep**: eight readers over
the complete non-proof-step prose of all **998 published items**, plus the
orchestrator's own read of all **53 published page summaries** in full. Amendments
1–3 above are unchanged; nothing below duplicates them.

**None of amendments 4–12 is owner-approved.** Every one changes published,
owner-audited text, so each needs an explicit decision, and applying any of them
clears `verification.audited` and forces the owner's re-audit.

## Read this first — the staged order numbers in amendments 1 and 2 are STALE

`3d0b950 feat(research): splice the three scaffold tracks` **renumbered
`research/plan-spec.json`** after amendments 1 and 2 were drafted. Verified from
disk today:

| page | order named in amendments 1–2 | order in the spec now |
|---|---:|---:|
| `primes-and-the-fundamental-theorem-of-arithmetic` | 24 | **28** |
| `linear-independence-bases-and-dimension` | 70 | **74** |
| `metric-spaces` | 102 | **116** |
| `ordinals-and-transfinite-recursion` | 183 | **243** |
| `the-riemann-integral` | 137 | **159** |

Amendment 2's NEW text writes the literal words *"which are developed at order
24"* and *"both at order 24"* **into published prose**. Applied as drafted it
publishes a wrong number. Two options, owner's call:

1. update 24 → 28 in amendment 2's NEW text; or
2. **better, and what `f50e298 docs(levels): brief agents by page id, never by
   order` already decided** — drop the bare order numbers from the prose and name
   the page instead ("developed on *Primes and the Fundamental Theorem of
   Arithmetic*"), so the sentence cannot decay again at the next renumber.

Nothing else in amendments 1–3 depends on an order number.

## What the sweep measured

**Recall tests: both rediscovered independently, by reading, in different
bundles.** `rem-choice-ledger` was found by the bundle-4 reader and
`ex-p-adic-ultrametric` by the bundle-7 reader, each flagged before the reader
consulted the hint, each verified from disk. Neither was in the same bundle, so
the two hits are independent.

**The dominant fact of this sweep: only ONE of the nine new findings is triggered
by level 9.** Eight are older decay — claims falsified by a level that published
*before* level 9 and that every sweep since has walked past. Two of the eight
decayed **within hours of being written**, against a sibling page in the same
build. The verb list grows again: *has not built*, *has not developed*, *is not
constructed anywhere*, *is not defined in this library*, *not proved anywhere in
this library as things stand*, *this library has no number theory*, *not in the
reading order at this point* — this last one being the order-relative form used
where the order is **wrong**, which is the first time the surviving phrasing has
itself been observed to fail.

---

## Amendment 4 — `items/def-perfect-set-r.md`, the Cantor set

**Trigger: NONE from level 9. Already false.** `def-cantor-set` is `published`.
The owner may land this with level 9 or separately.

OLD (lines 63–66):

> A perfect
>   set need not contain any interval, the Cantor set being the standard example
>   of that; it is not constructed anywhere in this library, and the statement is
>   recorded here as orientation only, on the references above.

NEW:

> A perfect
>   set need not contain any interval, the Cantor set being the standard example
>   of that; it is constructed later in the reading order
>   ([[def-cantor-set]]) and proved perfect, nowhere dense and uncountable
>   ([[thm-cantor-set-properties]]).

Applying it: `cantor-set-baire-and-measure-zero` is later than `topology-of-r`, so
both links point forward and belong in **`forward_refs`, never `deps`**
(`forward-in-deps` fires if they appear in both). **They are safe there even
though `def-perfect-set-r` is a spine `def-`:** verified in `tools/fwdcheck.mjs`,
`forward-on-spine` tests `loadBearingText`, which is the body with the
`## Remarks` section stripped (line 160), so a forward reference *inside Remarks*
is never load-bearing whatever the kind. This edit is entirely in Remarks. It
carries a
`judge` block (glm-5.2, 2026-07-26) and `audited: 2026-07-26`; a Remarks
correction of this size does not need the judge block deleted, but `audited` must
be refreshed.

---

## Amendment 5 — `items/thm-cantor-powerset.md`, infinite series

**Trigger: NONE from level 9. Already false.** `def-series`,
`thm-geometric-series` and `thm-decimal-expansions` are all `published`.

OLD (line 75, one line — reflow before editing):

> Decimal expansions are infinite series, which this library has not built, so that proof would rest on machinery that is not yet available.

NEW:

> Decimal expansions are infinite series, which arrive much later in the reading order ([[thm-decimal-expansions]]), so at this point that proof would rest on machinery not yet available.

Applying it: the link is a forward reference (`countability-and-uncountability`
sits far before `absolute-convergence-and-rearrangement`) and goes in
`forward_refs`, not `deps`. Safe on a spine `thm-` because the edit is in Remarks
and `forward-on-spine` only tests the body with Remarks stripped — see amendment
4. Carries a `judge` block (gpt-5.4, 2026-07-25) and a `verified` block; refresh
`audited`.

---

## Amendment 6 — `items/thm-rationals-countable.md`, greatest common divisors

**Trigger: NONE from level 9. Already false since level-8 algebra.**
`def-common-divisor-and-gcd` and `thm-euclidean-algorithm` are `published` on
`divisibility-gcd-and-bezout`.

OLD (line 91, one line):

> That map needs greatest common divisors, which this library has not developed.

NEW:

> That map needs greatest common divisors, which are developed later in the reading order and are not available here.

Applying it: no `deps` change. The NEW text is deliberately link-free, but a link
to `def-common-divisor-and-gcd` would also be legal here, declared in
`forward_refs` (the gcd page is later than `countability-and-uncountability`) and
safe on a spine `thm-` because the edit sits in Remarks — see amendment 4.
Owner's preference. Carries a `judge` block (glm-5.2, 2026-07-25) and a `verified`
block; refresh `audited`.

---

## Amendment 7 — the Bolzano-Weierstrass / monotone-convergence cluster, SIX items

**Trigger: NONE from level 9. Already false.**
`monotone-sequences-and-cauchy-completeness` is a **published page**;
`thm-bolzano-weierstrass` and `thm-monotone-convergence` are `published`
landmarks. Six published items on `sequences-and-limits` still say that page is
"planned and not yet written". This is the largest single block of decayed prose
the sweep found, it is six items saying one thing, and **five of the six carry a
`verified` certification and a glm-5.2 judge pass dated after the falsifying page
existed** — no gate can see prose about the corpus.

The uniform repair is: delete "which is planned and not yet written" / "planned
and not yet written", and replace "not proved anywhere in this library as things
stand" by a citation or by an order-relative phrase.

1. `items/fs-bounded-implies-convergent.md`, line 99 —
   OLD: `It is **not proved anywhere in this library as things stand**: it is the subject of the next page of this track, *Monotone Sequences, Bolzano-Weierstrass, and Cauchy Completeness*, which is planned and not yet written.`
   NEW: `It is not proved here: it is the subject of the next page of this track, *Monotone Sequences, Bolzano-Weierstrass, and Cauchy Completeness*, which comes later in the reading order.`

2. `items/lem-convergent-implies-bounded.md`, line 79 —
   OLD: `it is **not proved anywhere in this library as things stand**, being the subject of the next page of this track, planned and not yet written.`
   NEW: `it is not proved here, being the subject of the next page of this track, which comes later in the reading order.`

3. `items/lem-convergent-implies-cauchy.md`, line 73 —
   OLD: `It is the subject of the next page of this track, *Monotone Sequences, Bolzano-Weierstrass, and Cauchy Completeness*, which is planned and not yet written; on that page`
   NEW: `It is the subject of the next page of this track, *Monotone Sequences, Bolzano-Weierstrass, and Cauchy Completeness*, which comes later in the reading order; on that page`

4. `items/fs-subsequence-convergence-implies-convergence.md`, line 74 —
   OLD: `it belongs with the completeness material on the next page of this track, which is planned and not yet written.`
   NEW: `it belongs with the completeness material on the next page of this track, which comes later in the reading order.`

5. `items/lem-subsequence-inherits-limit.md`, line 78 —
   OLD: `it is **not proved anywhere in this library as things stand**, being the subject of the next page of this track, planned and not yet written.`
   NEW: `it is not proved here, being the subject of the next page of this track, which comes later in the reading order.`

6. `items/rem-sequence-conventions.md`, lines 149–150 —
   OLD:
   > The monotone convergence theorem and the Bolzano-Weierstrass theorem have no such
   > exception: neither is proved anywhere in this library as things stand.

   NEW:
   > The monotone convergence theorem and the Bolzano-Weierstrass theorem have no such
   > exception: neither is proved at this point in the reading order, and nothing on
   > this page may be cited for either.

Applying it: **no `deps` change anywhere** — every replacement is deliberately
link-free, since `sequences-and-limits` precedes
`monotone-sequences-and-cauchy-completeness` and the prose reads fine naming the
page. If the owner prefers explicit citations, `[[thm-bolzano-weierstrass]]` and
`[[thm-monotone-convergence]]` are legal in **`forward_refs`** on all six: every
edit is inside `## Remarks`, which `fwdcheck.mjs` strips before testing
`forward-on-spine` (line 160), so the three `lem-` items are safe too. Never put
them in `deps` — that trips `forward-not-later` and `forward-in-deps`. Items 1–5
each carry a `verified` block and a glm-5.2
judge pass of 2026-07-26; item 6 is a `rem-` with `precheck: n/a` and
`audited: 2026-07-27` and **no** judge block. Items 1–5: refresh `audited` (the
change is a Remarks correction, not a rewrite of a proof, so the judge blocks may
stand — owner's call). Item 6 is a `rem-`, and a `rem-` **is** its prose, so per
SCHEMA §3 this is a material rewrite; it has no judge block to delete.

---

## Amendment 8 — `items/fs-continuous-bijection-is-a-homeomorphism.md`, Hausdorff

**Trigger: NONE from level 9. FALSE ON THE DAY IT WAS PUBLISHED.** The item was
committed 2026-07-27; `def-hausdorff-space` was committed **later the same day**,
`status: published`, `landmark: true`, on `subspaces-products-and-quotients` —
the very next topology page. `def-metric-compactness` has been published since
the metric-spaces level. So both halves of the sentence are wrong: the Hausdorff
property is defined in this library, and compactness is defined for metric spaces
(only *general topological* compactness is still unbuilt).

OLD (line 78, one line):

> Neither compactness nor the Hausdorff property is defined in this library, so that repair is recorded here as orientation only and is used nowhere.

NEW:

> Compactness for a general topological space is not defined at this point in the reading order — only for metric spaces ([[def-metric-compactness]]) — and the Hausdorff property arrives on the next page ([[def-hausdorff-space]]), so that repair is recorded here as orientation only and is used nowhere.

Applying it: `def-hausdorff-space` sits on the **next** page
(`subspaces-products-and-quotients`), so it is a forward reference and goes in
`forward_refs`. Doubly safe: `false-statement` is one of `fwdcheck.mjs`'s
`CONSEQUENCE_KINDS` (line 83), which may rest on later material at all, and the
edit is in Remarks besides. `def-metric-compactness` is genuinely earlier and goes
in `deps`. Carries a `judge` block (glm-5.2, 2026-07-27) and `audited: 2026-07-27`;
refresh `audited`.

---

## Amendment 9 — `library/topology/metric-spaces-examples.md`, A **PAGE SUMMARY**

**Trigger: `primes-and-the-fundamental-theorem-of-arithmetic` publishing — the
one finding in this sweep that level 9 actually causes.** It is also already
false: `divisibility-gcd-and-bezout` published with level-8 algebra.

This is the companion defect to staged **amendment 2**. Amendment 2 repairs the
item `ex-p-adic-ultrametric`; **this repairs the page summary that describes that
same item, and nothing in amendment 2 touches it.** No mechanical tier reads page
summaries at all. Written at level 7 (`6400164`), true then.

OLD (lines 32–34):

> point of a ball is a centre ([[ex-p-adic-ultrametric]]); it is fixed at $p = 2$
> because the general $p$-adic valuation needs unique factorisation, and this
> library has no number theory, whereas parity is available. The post-office metric

NEW:

> point of a ball is a centre ([[ex-p-adic-ultrametric]]); it is fixed at $p = 2$
> because the general $p$-adic valuation needs unique factorisation, developed on
> *Primes and the Fundamental Theorem of Arithmetic*, whereas parity needs
> nothing and keeps the item self-contained. The post-office metric

Applying it: a page summary has no `deps` and no `judge` block. It carries
`status: published`; **check whether the page frontmatter has its own `audited`
field and refresh it if so.** Land it in the same commit as amendment 2 — the two
must agree, or the page will say one thing and its item another.

---

## Amendment 10 — `items/rem-monotone-convergence-theorem.md`

**Trigger: NONE from level 9. FALSE FOR ~14 HOURS AFTER IT WAS WRITTEN, and ever
since.** Published 2026-07-26 02:34; `cor-monotone-converges-iff-bounded`
("A monotone sequence converges if and only if it is bounded", `published`)
landed the same day at 16:42. The item is homed on
`deferred-measure-and-integration`, **order 1** — there is no reading-order
position for it to hide behind, so this one cannot be repaired by rephrasing; it
must cite.

OLD (lines 74–77):

> The other is the elementary theorem that a
> monotone sequence of reals converges if and only if it is bounded, which belongs
> to the sequences track; that one is not deferred, but as things stand it is not
> proved anywhere in this library either, and nothing on this page bears on it.

NEW:

> The other is the elementary theorem that a
> monotone sequence of reals converges if and only if it is bounded, which belongs
> to the sequences track; that one is not deferred and is proved in the library, as
> [[cor-monotone-converges-iff-bounded]], and nothing on this page bears on it.

Applying it: this page is `not-proved-here`, so **`extcheck.mjs` governs**. The
item is `proved_here: false`. Since every other page is later than order 1, the
citation to `cor-monotone-converges-iff-bounded` is a **forward reference** and
belongs in `forward_refs`, rendered in the sky ↗ tier — not in `deps`, which
would trip `forward-not-later`. `remark` is one of `fwdcheck.mjs`'s
`CONSEQUENCE_KINDS`, so it may rest on later material outright. Run `extcheck` and
`fwdcheck` together before landing. `deps` is currently
`[rem-lebesgue-measure-and-integral]` only.

---

## Amendment 11 — `items/thm-countable-union-of-null-is-null.md`

**Trigger: NONE from level 9. Already false — and it is the first observed
failure of the order-relative phrasing itself.** The sentence says the theory of
rearranging infinite series "is not in the reading order at this point". It is:
`absolute-convergence-and-rearrangement` (with `thm-double-series-fubini` and
`def-rearrangement-and-unconditional-convergence`, both `published`) sits
**before** `cantor-set-baire-and-measure-zero`, not after. The phrasing survived;
the fact it asserted about the order did not. Worth recording in `LEVELS.md`:
order-relative phrasing is decay-resistant, **not decay-proof**, and the order it
names still has to be checked.

OLD (lines 93–97):

> - **No rearrangement theorem is used, and none is available here.** The estimate
>   is made on finite partial sums only, and every finite partial sum of the
>   doubly-indexed family is compared with a sum over a finite rectangle, which is a
>   finite rearrangement. The theory of rearranging infinite series is not in the
>   reading order at this point, and the proof is arranged so as not to need it.

NEW:

> - **No rearrangement theorem is used, though one is available.** The estimate
>   is made on finite partial sums only, and every finite partial sum of the
>   doubly-indexed family is compared with a sum over a finite rectangle, which is a
>   finite rearrangement. The general theory of rearranging infinite series is
>   earlier in the reading order ([[thm-double-series-fubini]]), and the proof is
>   deliberately arranged so as not to need it.

Applying it: `thm-double-series-fubini` is on an **earlier** page, so this is a
backward link — add it to `deps`, no forward reference and no cycle. Note the
title of the bullet changes from a false claim ("none is available") to a true one
("though one is available"), which is the substance of the repair; the
mathematics of the proof is untouched. Refresh `audited`.

---

## Amendment 12 — `items/rem-lp-separability.md`, the INVERSE defect

**Not a denial — a false claim of PRESENCE, which the sweep's patterns are not
even designed to catch, and which the readers found only because they were
reading.** Trigger: none from level 9.

OLD (lines 62–63):

> **Which page it serves.** The metric spaces page, where separability is defined
> and where $\mathbb{R}^n$ and $C[a,b]$ are shown separable, and the countability

**Separability is defined nowhere in this library.** Verified from disk: no
`def-separable`, no `def-*-separable`, and no item on `metric-spaces` (28 items,
read in full) defines it. The convention the library actually follows is the
opposite one — `lem-compact-metric-space-has-a-countable-dense-subset`,
`ex-sorgenfrey-line`, `thm-subspace-closure-and-interior` and
`cex-antidiagonal-of-the-sorgenfrey-plane` all **avoid the word** and write "has
an at most countable dense subset" in full, each saying explicitly that the name
is not available. `C[a,b]` is not built either.

NEW:

> **Which page it serves.** The metric spaces page, which develops the notion this
> statement needs — a space with an at most countable dense subset — without giving
> it the name *separable*, and the countability

Applying it: `rem-lp-separability` is on `deferred-functional-analysis`
(`status: draft`), so this may simply be **fixed in place before that page is
published** rather than staged as an amendment — check the page status before
treating this as a published-text change. No `deps` change. **This item is worth a
second look by whoever owns the deferred pages: if the prose promises a
definition the library has decided not to mint, other `deferred-*` items may
promise the same thing.**

---

## Recorded, NOT amendments

**The "in this library yet" family — checked, correct, LEFT ALONE.** Seven
published items hedge with *yet*, and every one is true read as a reading-order
claim. Listed so nobody re-litigates them:
`def-metric-topology` (topological spaces as primitive data),
`cex-topologically-not-uniformly-equivalent` (Cauchy sequences in a metric space),
`lem-sup-metric-is-a-metric` (uniform convergence),
`lem-nth-root-of-n-tends-to-one` (log and exp),
`def-integer-power` and `thm-p-series-rational` (real exponents),
`def-summability-matrix` (series, which "arrive on the next page of this track").

**Checked and still TRUE, corpus-relative but not yet decayed** — these are the
sweep's watch list for the next level:
`rem-continuum-hypothesis` ("this library has not proved
$\mathbb{R} \approx \mathcal{P}(\mathbb{N})$" — no item does);
`def-well-order` ("neither is proved anywhere in this library, which contains
neither technique" — forcing and permutation models, correct);
`cex-evt-and-ivt-fail-over-a-non-complete-field` ("no notion of continuity over a
general ordered field" — correct);
`fs-negative-has-square-root` ("no general theory of parity" — correct; the
level-9 item `ex-two-is-the-only-even-prime` defines *even* locally and says so);
`equivalent-forms-of-completeness` page summary ("no such result is available for
a general ordered field anywhere in this library" — correct);
`topological-spaces-and-continuity-examples` page summary ("the word *separable*
is not used, since no item in this library defines it" — correct, and see
amendment 12, which is the same fact stated the other way round).

**A level-9 DRAFT item already carries the decay-prone phrasing.**
`items/fs-intermediate-value-property-implies-continuity.md` (`status: draft`,
`monotone-functions-and-discontinuities`) says the Conway base-13 function "is not
constructed anywhere in this library as it stands". That is corpus-relative and
will decay the moment anyone builds it. **Cheapest fix is now, before publish —
it costs nothing while the item is still a draft.** Suggested: "…is not
constructed at this point in the reading order".

## The garbled "companion examples page" clause — CLOSED, no amendment owed

Swept the whole corpus, drafts included, at both sentence and paragraph level for
the double-reference garble (a sentence saying "the companion page …" with a
dangling "on the companion examples page" tacked on). **Zero instances remain.**
The eight fixed inside level 9 by `bbe9ea3` were all of them.

The four files logged as "known outside the level and unfixed" —
`thm-stolz-cesaro`, `def-symmetric-group`, `def-infinite-product`,
`rem-sums-proved-to-exist-but-not-evaluated` (three uses) — were checked one by
one against `git log -S`. **None of them is the defect.** Every one was authored
in that form in its original commit (`7b3b495`, `a56211e`, `8f4d3c9`), not
produced by the half-applied de-linking edit, and every one is grammatical: the
phrase is a legitimate page-level reference standing where a wikilink may not go,
since nothing on a spine page may depend on an item homed on a B page. All 19
uses of the phrase in the corpus were read; the remaining 15 are likewise
grammatical, and three of them
(`metric-spaces`, `topological-spaces-and-continuity`,
`subspaces-products-and-quotients` page summaries) are proper wikilinks
`[[…-examples|the companion examples page]]`.

**One cosmetic residue only, below the triage bar and recorded rather than
staged.** Four of them are unreflowed after the de-linking edit shortened the
text: `def-infinite-product.md:84` is a 107-character line in an 81-column
paragraph, and `thm-stolz-cesaro.md:56–59`,
`rem-sums-proved-to-exist-but-not-evaluated.md:38–39, 45, 81` leave ragged short
lines. `tools/reflow.mts` fixes all four in one pass whenever any of those files
is next touched for a real reason. Not worth clearing `audited` on its own.
