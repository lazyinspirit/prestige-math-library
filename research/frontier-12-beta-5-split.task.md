## Batch 5 fix — apply the approved split (decision D1)

You are the Beta who scaffolded batch 5. **One change**: your proposed split is
approved, with a different order plan. Re-partition your artifacts accordingly.

### What was approved

Your cut is approved **exactly as proposed**: after
`cor-relative-variance-positive-probability-bound`, giving **37 foundations A
items + 8 B items** and **28 method A items + 6 B items**. Your reasoning was
right and your proposal was precise.

### What changed — the order plan

You proposed inserting at orders 223/224 and shifting order 223 onward by two.
Orders 223/224 are occupied by `linear-algebra-methods-in-combinatorics` and its
companion, so that shift cascades through the whole combinatorics track. Orders
**220.2 / 220.4** are free and sit exactly where the foundations page belongs.

**I have already minted both pages in `plan-spec.json`:**

| order | id | kind | requires |
|---|---|---|---|
| 220.2 | `finite-probability-spaces-and-random-variables` | A | `the-logarithm-and-general-powers` |
| 220.4 | `finite-probability-spaces-and-random-variables-examples` | B | the foundations A page |
| 221 | `finite-probability-and-the-probabilistic-method` | A | foundations, `extremal-graph-theory`, `congruences-and-the-chinese-remainder-theorem` |
| 222 | `finite-probability-and-the-probabilistic-method-examples` | B | the method A page |

The method page **keeps its id and its order 221**, deliberately: three planned
pages already declare it as a prerequisite — `linear-algebra-methods-in-combinatorics`
(223), `erdos-hajnal-property-and-homogeneous-sets` (395) and
`regular-pairs-and-induced-counting` (399). They keep pointing at the same id and
reach your foundations page transitively. Zero renumbering, zero downstream edits.

`validate-plan` is exit 0 on this. Read the spec; do not edit it.

### What to do

1. **`pages.json`** — emit **four** page objects instead of two, with the ids,
   kinds and orders in the table above. Items 1–37 of your current A page go to
   220.2 in their existing order; items 38–65 go to 221. B items 1–8 go to 220.4;
   B items 9–14 go to 222. **Keep every item id exactly as you scaffolded it** —
   nothing is renamed by a split.
2. **Check the seam.** Any item now on 221 that depends on an item now on 220.2
   is fine — 220.2 is in 221's `requires` closure. Any dependency pointing the
   other way is now a forward reference and must be fixed by moving the item, not
   by weakening the citation. Verify this explicitly and report the result; it is
   the one thing a split can genuinely break.
3. **`coverage.json`** — divide the single page entry between the two A ids, as
   you proposed. Each half must independently retain **at least two independent
   treatments including one full lecture-note set**; you recorded that all three
   sources support both halves, so state the locator ranges per half rather than
   duplicating the whole entry.
4. **`proof-contracts.json`** — divide `scope` at the same cut.
5. **`notes.md`** — record the applied split, the order plan actually used and
   why it differs from your proposal, and the seam-check result. Keep your prose
   amendment for `research/plan-combinatorics-and-categories.md`, updating the
   two section headers to orders **220.2** and **221** rather than 221 and 223.

Both A pages land well under the 60-item ceiling (37 and 28). Nothing else about
batch 5 changes; your harvest and declines were accepted.
