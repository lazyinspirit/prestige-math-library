# Level-9 (mixed track) — amendments staged for the publishing commit

**Status: STAGED, NOT APPLIED. Owner-approved 2026-07-28** at step 3, both
amendments together.

Nothing here may land before the commit that publishes the level containing the
page that falsifies it (`LEVELS.md` §10b: "Amendments to published pages land in
the same commit that publishes the level, never before"). The two amendments have
**different trigger pages**, so they may land in different commits if the level
is published in parts — each says which page triggers it.

Level 9 (mixed) = orders 24, 70, 129, 131, 137 and their `-examples` companions.
Named "mixed" because it spans number theory, linear algebra and real analysis;
`level9-*` alone was already taken by the pre-renumber level 9.

Both amendments are the **published-claim-decay** class: true when written, made
false by a later level, and **invisible to every gate**. Found by Beta-9-2 at
step 2, verified from disk by the orchestrator at step 3.

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
> [[lem-p-adic-valuation-on-q]]) and are therefore available here; this item
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

- add `thm-euclids-lemma`, `def-p-adic-valuation` and `lem-p-adic-valuation-on-q`
  to `deps` (order 24 → order 102, backward, no cycle);
- it carries **no** `judge` block — one was removed 2026-07-27 for exactly this
  kind of Remarks correction — so only `verification.audited` needs refreshing.

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
