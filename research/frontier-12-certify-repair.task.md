## Certify Alpha's published-dependency repair of `ex-rational-function-field-order`

**No author certifies its own repair.** Alpha adjudicated and repaired this item;
you did not, so you certify it. It is `status: published` — this is live content.

### What happened

The D10 wiring forced this published item's **first-ever** paired-judge rejudge.
Both lanes rejected it. Alpha adjudicated `confirmed_fatal`
(`dependency_citation`) and repaired under the owner-delegated
published-dependency-repair protocol.

The record is `research/frontier-12-published-dependency-repairs.md` §R1, and the
full adjudication is `research/frontier-12-alpha-step9.md`. Read both, then check
the item on disk.

### Alpha's finding, which you must independently confirm or refute

The published Fact `[L2]` asserted **four** propositions and cited three items
that state **none** of them:

| conjunct | Alpha's claim |
|---|---|
| finitely many real roots | library has it (`thm-root-bound-for-polynomials-over-a-domain`) but it was not cited and not in `deps` |
| eventual sign = sign of the leading coefficient | **nowhere in the library as a proposition** — only derived inside a proof step of the order-9 counterexample |
| ℝ[t] is an integral domain | stated by `cor-rational-function-field-as-a-fraction-field`, already in `deps`, simply not cited |
| lc(pq) = lc(p)lc(q) | stated by `thm-polynomial-degree-of-a-product-over-a-domain`, in neither `[L2]` nor `deps` |

Alpha also reports a **second** defect in the same sentence: "beyond all of them"
is ambiguous, and on the reading "off the root set" it is false — `p(t) = t` has
`lc = 1 > 0` yet `p(x) < 0` for `x < 0`.

### What to check

1. **Was the diagnosis right?** Open each cited item. Did `[L2]` really claim
   things its citations do not state? If Alpha overstated the defect, say so.
2. **Is the repair correct and minimal?** `[L2]` should now cite a published
   Statement for every clause, and the eventual-sign claim should have stopped
   being a Fact and become a **proved step** with an explicit threshold. Read
   that arithmetic line by line — it is new mathematics on a published page.
3. **Is the ambiguity gone?** The `p(t) = t` reading must no longer be available.
4. **Was anything else changed?** The repair must be the smallest correction. The
   Example's own construction, its set `P`, and its conclusion should be
   untouched. No id renamed or removed.
5. **Provenance.** If the Fact's component provenance changed, it should be
   retagged.

### If it is correct

Write into the item's `verification` block:

```yaml
  verified:
    model: <your model id>
    verdict: certify
    date: 2026-08-13
    scope: published-dependency-repair
    delegated_by: owner
```

`depcheck` currently fails `published-unaudited` on exactly this item; that is the
condition you resolve.

### If it is NOT correct

Do not stamp. Report precisely what is wrong. If the correction needs a new
theorem, a debatable restatement, a deletion, or a reading-order change, then it
was **not** an "obvious" repair and belongs with the owner — say so plainly.

Report your verdict, your evidence, and anything you could not check.
