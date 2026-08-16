# Assign batches to group Alphas — run `<run>`

One job: decide which group Alpha reviews which batches, so that as little
mathematics as possible crosses a group boundary. Write
`research/<run>-alpha-groups.json` and stop.

You are not reviewing any scaffold here, and you author nothing.

## Read the facts first

```
node tools/alpha-groups.mjs --run <run> --facts
```

That prints, per batch: its categories, its A pages, its item count, and every
cross-batch dependency edge in the run. Those edges are the thing you are
minimising — an edge inside a group is a reference one Alpha can check end to
end; an edge across a group boundary is one nobody owns both sides of.

## The rules

- **At most 3 groups** (the `alpha` lane cap) and **at most 3 batches per group**
  (the owner's per-Alpha bound). Both are hard.
- **Every batch belongs to exactly one group.** No batch twice, none left out.
- **Keep a category whole.** If a category's batches fit inside one group, they
  go in one group. Splitting a category that did not need splitting is a gate
  failure, not a preference: an Alpha owning half a category cannot see its own
  pages' cross-references, which is most of what a group Alpha is for.
- **Label groups `a`, `b`, `c`** in that order.

## The judgment

The rules do not determine the answer, and the residual is why you and not a
sort function are doing this. A run with five categories and three Alphas forces
two unrelated categories to share, and *which* two is yours to decide. Prefer:

1. pairing categories with **real machinery in common** — a spectral argument, a
   compactness argument, the same underlying construction — over pairing by
   accident of numbering;
2. pairing the two with the **fewest dependency edges between them and everything
   else**, when nothing shares machinery;
3. keeping a large batch (high item count) away from another large batch, so no
   single Alpha carries a disproportionate share of the reading.

Say which of these you used. `frontier-12` was 454 items across 24 pages read by
one Alpha, and what that spends is attention, not context length; the whole point
of grouping is to keep each Alpha's reading coherent as well as bounded.

## What you write

`research/<run>-alpha-groups.json`:

```json
[ { "label": "a", "covers": ["2", "3", "7"],
    "rationale": "…why THESE batches belong together, in terms of the mathematics…" } ]
```

The `rationale` is required and is checked for substance. Name the shared
machinery, or name the constraint that forced an unrelated pairing. "Grouped by
number" is not a rationale — it is the behaviour this stage replaced.

Run the validator before you finish:

```
node tools/alpha-groups.mjs --run <run>
```

Green means the partition is structurally sound and no category was split
avoidably. It also prints how many dependency edges still cross a boundary; if a
different arrangement lowers that without breaking a rule, use it.
