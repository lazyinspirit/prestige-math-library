> **Generic task.** Your batch number is in the "This dispatch" section
> appended below; substitute it wherever `<i>` appears. A batch-specific file
> `research/frontier-19-beta-<i>.task.md` should also exist and carries your
> pages, their orders and the design section that governs them — read it
> first if it is there.

# Batch `<i>` of run `frontier-19` — step 1, scaffold

Read `research/frontier-19-batch-<i>.pages.json` for your pages. The run's pairs
and the design section carrying each are tabled in
`research/frontier-19-step0-notes.md`.

Scaffold per `briefs/beta-scaffold.md`: source-grounded and dependency-closed,
the harvest recorded in `research/frontier-19-batch-<i>.coverage.json`, notes and
recommendations in `research/frontier-19-batch-<i>.notes.md`.

## The design section is the floor, not the source

Open it. Where it names results with locators, treat that list as a floor to
harvest against — you still open every source, record the exact chapter and
section ranges you read, and enumerate that source's own headings over the
range with a disposition for each. Where the design states a trap, a decided
convention or a route already chosen, it binds you: a scaffold that
contradicts a decision the design records is wrong however rich it looks.

Where the design and `research/plan-spec.json` disagree about a page's
`order`, `requires` or route, **do not pick one**. Record the conflict in your
notes and carry on with the spec; stage 1's `drift` unit adjudicates it, and
resolving it inside a batch is how two batches end up built against two
different plans.

## Checks before you return

```
node tools/coverage-checklist.mjs research/frontier-19-batch-<i>.coverage.json
node tools/content-policy.mjs --manifest-only research/frontier-19-batch-*.pages.json
node tools/validate-plan.mjs research/plan-spec.json
node tools/url-sweep.mjs --coverage research/frontier-19-batch-<i>.coverage.json --recover --fail-on-dead
```

The policy check is deliberately whole-run: a dependency on an earlier page in
another live batch is legal planned content, and every manifest must be present
for the target to resolve. It still checks the two-pair capacity separately for
each batch. Because Betas run concurrently, another batch may still be filling
its manifest when you execute it; record that provisional result without
weakening or duplicating a mathematically necessary edge. The engine reruns the
same whole-run check after all scaffold lanes drain.

On a dead source URL, **recover before re-sourcing**: `--recover` queries the
Wayback index under every host variant, because a document moved behind a new
subdomain is archived only under its old host. Replacing a recoverable source
costs a re-harvest and rewrites every backed item's provenance.

## Size

An A page over 60 items is SPLIT into two or more A pages, each with its own
B companion — decided now, at scaffold time, because after authoring it is a
rewrite. `validate-plan.mjs` enforces it. Splitting is never dropping.

**No permission prompts of any kind**, including inside an `&&` chain.
