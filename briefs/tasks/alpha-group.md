> **Generic group task.** Your batches and group label are in the appended
> `# This dispatch` block. Write only your group’s artifacts.

# Group Alpha — Step 3 scaffold and decline review

Read every assigned batch’s `.pages.json`, `.notes.md`, and `.coverage.json`
together with its governing design section. Decide whether each A/B pair is
mathematically sufficient before proof authoring begins.

## Required review

- Reconstruct every non-trivial proposed proof from `title`, `strategy`, and
  `deps`. Verify that the dependencies actually supply every hypothesis and
  construction the route needs.
- Compare the scaffold with the design and `research/plan-spec.json`: missing
  standard results, false statements, missing prerequisites, dishonest
  decomposition, thin B pages, and A pages above the 60-item split limit are
  findings.
- Open every cited source at its locator. Confirm the coverage rows faithfully
  represent that range and that two independent treatments back each pair.
- Check every published dependency on disk and every component-provenance label.
- A genuinely distinct second proof of an existing theorem is welcome; a bare
  pointer or duplicated argument is not.

For every `deferred` or `out-of-scope` row, make an exact durable decision. Run:

```sh
node tools/scope-decisions.mjs refresh --run {{run}} --group <your-group>
```

Then edit `research/{{run}}-alpha-<your-group>-scope-decisions.json`. Replace
every `pending` decision with:

- `stands` when the reason and destination are correct in the current page
  closure; or
- `owner-decision` when the result genuinely needs a new page or reading-order
  change.

Give concrete disk/source evidence for every decision. If you edit a coverage
row or its destination, rerun `refresh`, resolve any newly pending row, and run:

```sh
node tools/scope-decisions.mjs check --run {{run}} --group <your-group>
```

The receipt hashes the exact decline and its relevant closure. It is the
machine proof that the decline was actually reviewed; a page-level verdict or
prose claim cannot replace it.

## Repair licence

At Step 3 no proof exists. You may correct a false statement/title, add a
needed intermediate lemma, or add a genuine distinct route when the design and
dependencies determine it. A verified backward `requires` edge may be applied
and validated. A forward edge, new page, or reading-order change is owner-only.

## Outputs

1. `research/{{run}}-alpha-<your-group>-step3-scaffold-review.md`, with stable
   finding ids `B<batch>-1`, a severity table, evidence, and per-pair verdicts.
2. `research/{{run}}-alpha-<your-group>-step3-verdicts.json`, one
   `sufficient`/`insufficient` row per A page. An insufficient row must name the
   exact missing result and source.
3. `research/{{run}}-alpha-<your-group>-scope-decisions.json`, with no pending
   or stale decision.

**No permission prompts of any kind**, including inside an `&&` chain.
