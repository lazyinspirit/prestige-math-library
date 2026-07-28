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

**Trigger: order 70 `linear-independence-bases-and-dimension` publishing.**

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

- homed on `ordinals-and-transfinite-recursion`, **order 183**, so the new
  wikilinks point BACKWARD (70 → 183): no forward reference, no cycle;
- add `cor-every-vector-space-has-a-basis` and
  `thm-every-independent-set-extends-to-a-basis` to its `deps`;
- **DELETE the `judge` block.** A `rem-` item IS its prose, so per SCHEMA §3 this
  is a material rewrite. It carries a judge block (glm-5.2, 2026-07-25) and a
  `verified` block.

---

## Amendment 2 — `items/ex-p-adic-ultrametric.md`, two passages

**Trigger: order 24 `primes-and-the-fundamental-theorem-of-arithmetic`
publishing. Do NOT apply before then, or the wikilinks dangle.**

Homed on `metric-spaces`, **order 102**. Order 24 supplies exactly the machinery
both passages say is unavailable.

**This item was cleared as still-true by the level-8 step-10b sweep**
(`research/level8-algebra-scope-sweep.md`), on the ground that primality sat at
order 24 and order 24 was unbuilt. That reasoning was correct then and expires
now. It is a clean demonstration that a scope-denial sweep dates its own result.

### (i) In `## Example`

OLD:

> **Why $p = 2$ and not a general prime.** The general $p$-adic valuation needs
> primality and unique factorisation in $\mathbb{Z}$, neither of which this item
> develops or assumes.

NEW:

> **Why $p = 2$ and not a general prime.** The general $p$-adic valuation needs
> primality and unique factorisation in $\mathbb{Z}$, which are developed at
> order 24 ([[def-p-adic-valuation]], [[thm-euclids-lemma]],
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
>   is [[lem-p-adic-valuation-on-q]], both at order 24 and both available here.
>   This item deliberately does not use them: at $p = 2$ the statement doing the
>   same work is that a product of odd integers is odd, proved in step 1.3 above
>   by a one-line ring computation, so the whole development below is
>   self-contained from parity.

Applying it:

- add `thm-euclids-lemma`, `def-p-adic-valuation`,
  `thm-fundamental-theorem-of-arithmetic` and `lem-p-adic-valuation-on-q` to
  `deps` (order 24 → order 102, backward, no cycle);
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
