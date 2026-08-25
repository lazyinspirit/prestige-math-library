# Refute the untouched items of batch `<i>`, run `<run>`

## Your list

```
node -e "const s=require('./research/<run>-step6-scope.json');console.log(s.batches['<i>'].untouched.join('\n'))"
```

That is your scope and it is closed: not the touched items, not another batch,
not published content except as a **dependency you open in order to check a
citation against it**.

Read the reader's report first — `research/<run>-reader-<i>.md`. It ends with the
count of items it actually opened and, where the set is interesting, which it
skipped. Items on your list that the reader never opened are the ones where you
are the only reader; spend your budget there.

## What to do

For each item: trace every numbered proof step against its cited facts, check
every `[F#]`/`[A#]`/`[L#]` against the cited item **on disk**, and type-check
every expression against the item's own definitions. `briefs/refuter.md` carries
the standard and the two measured blind spots — the 34% citation-widening catch
rate and the 87% well-formedness escape rate. Those two are the assignment.

Boundary cases are in scope: the empty family, `n = 0`, `n = 1`, degenerate
parameters, endpoints, and both directions of every iff. A contract row marked
`not_applicable` over a case that is plainly applicable is a finding.

## What you may not do

- **No edits.** Not to items, not to contracts, not to manifests, not to a gate.
  Your sandbox is read-only; this is stated so you do not spend time trying.
- **No verdicts on the touched items**, even if you notice something. They are
  already routed to the Alpha, which will see the same text.
- **No judging.** Judging is step 7 and it is a different reader with a frozen
  prompt.
- Do not allege a dependency is too weak without opening it.

## Output

You cannot write a file and must not try. **Your final message is the report**:
exactly the JSON object described by the schema appended to this dispatch, and
nothing else. The dispatcher writes it to `research/<run>-refute-<i>.json`.

An empty `flagged` is a real and common result; say so plainly rather than
reaching for something to report. `opened` is what makes it interpretable.

**No permission prompts of any kind**, including inside an `&&` chain.
