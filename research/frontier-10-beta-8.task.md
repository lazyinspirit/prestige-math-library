# frontier-10, batch 8

You are **Beta-frontier-10-8**. Your writable artifacts are the four
`research/frontier-10-batch-8.*` files named in the brief above.

## Your pages

- **A** `group-actions-and-cayleys-theorem` (order 42, abstract-algebra) — "Group Actions, Orbits, Stabilisers and Cayley's Theorem"
  - **B** `group-actions-and-cayleys-theorem-examples` (order 43)
  - requires: `group-homomorphisms-and-the-isomorphism-theorems`

## Prose scaffold sections to read

- `research/plan-algebra-track.md`
- `research/plan-algebra-track-expansion.md`

## Batch note

ENRICHMENT of a PUBLISHED pair — see section 6, which overrides the ordinary batch shape.

## 6. This batch is an ENRICHMENT of a published pair

`group-actions-and-cayleys-theorem` and its companion are **`status: published`**.
The A page holds only six items and the B page holds **none**:

```
def-group-action, thm-group-actions-correspond-to-homomorphisms,
def-orbit-and-stabilizer, lem-stabilizer-is-a-subgroup,
thm-orbits-partition-the-set, thm-cayleys-theorem
```

The owner asked for **the orbit-stabiliser theorem and its important
consequences and examples**. The theorem itself is absent, and so is nearly
everything that normally follows it. At minimum, harvest and dispose: the
orbit-stabiliser theorem; the class equation; Cauchy theorem; the
Cauchy-Frobenius (Burnside) counting lemma; p-group fixed-point results and the
nontriviality of the centre of a p-group; conjugation actions and conjugacy
classes; the action on left cosets and its kernel; and worked orbit counts.
`cosets-and-lagranges-theorem` is published, so the index machinery that
orbit-stabiliser needs is available to cite.

**Rules specific to enriching a published pair** (the `freegroups-1` precedent,
decision D4):

- Every new item is authored **`status: draft`**. `depcheck` raises
  `draft-on-published-page` when a published page lists a non-published item.
- **Do not edit the two page files.** Stage the additions to their
  `items:`/`examples:` lists in `research/frontier-10-published-amendments.md`;
  the orchestrator applies them in the single publishing commit.
- Your manifest lists **only ids you mint**. The seven already-published ids sit
  under `enrichment_of_published` as context; putting them in `items` fails
  `content-policy.mjs` with `batch-item-already-exists`.
- The six published items are dependencies: open each, cite precisely, and do
  not restate or duplicate them.
- The B page is empty. It needs a real examples and counterexamples
  development, not a token one.
- If the enriched A page would exceed 60 items, note that a published A page
  splitting is a **reading-order change, which is owner-only**. Propose it in
  your notes and stop there; never assume it.
