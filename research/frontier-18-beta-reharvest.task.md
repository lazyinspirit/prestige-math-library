> **Re-harvest round.** Your batch number is in the "This dispatch" section
> appended below; substitute it wherever `<i>` appears.

# Batch `<i>` of run `frontier-18` — a source is gone; its results are not

One of your batch's sources cannot be opened by a reader and has no archive
copy. **Results you authored were backed by it and by nothing else.** They are
named for you, mechanically, in

**`research/frontier-18-reharvest-plan.json`** — read `work[]`. Each entry gives
the `page`, the `item` id that lost its backing, and the `dead` source: its
URL, title, kind, locator, and the exact harvested result line that item came
from. Reproduce the list any time with:

```
node tools/source-backing.mjs --coverage research/frontier-18-batch-<i>.coverage.json \
  --liveness research/frontier-18-url-liveness.json
```

## The one rule

**A result that had source backing may not end up with none, and deleting the
result is never the remedy.** Removing the dead source row also removes its
`included` rows, which silently takes real mathematics off the page while every
other gate stays green — they all validate what is present. That is the failure
this stage exists to prevent, so it is worth saying plainly: if you clear this
gate by dropping an item, you have caused the defect, not fixed it.

## What to do, in order

1. **Confirm the source is really gone.** `beta-source-scout.task.md`'s order
   comes first and is cheaper: an alternate live URL for the *same* document,
   then a different complete archive capture. Only when both genuinely fail is
   this a re-harvest. Say in your notes which you tried.

2. **Find a different treatment that carries the same result.** For each
   `work[]` entry you have the exact statement — an ellipse perimeter as a
   second-kind elliptic integral, a well-definedness lemma, a counterexample —
   not just a page number. Search reputable sources for a treatment that
   actually contains it: textbook, monograph, or a full lecture-note set with a
   harvestable table of contents. One source may cover several orphaned
   results; prefer that to one source per result.

3. **Re-read the range and rewrite the rows faithfully.** The new source's
   `contents` rows must describe *that* document's own headings over the range
   you actually read, with its own locator. Never re-attribute the old rows by
   swapping the URL underneath them — the old row names the old book's
   Example 7.1.7, and the new book numbers its results differently. A row
   attributed to a document you have not verified carries it is worse than a
   dead link, because it reads as verified.

4. **Keep the item's mathematics fixed, and adjust it only if the new source
   genuinely states something different.** If the replacement treats the result
   under different hypotheses, that is a real finding: say so in your notes and
   narrow the item honestly rather than pretending the sources agree.

5. **If no replacement exists at all** — a genuinely obscure result no other
   treatment carries — do not delete it. Record the search you ran and what you
   could not find, and leave it for Alpha at step 3. A named dead end is a
   valid outcome; a silent one is not.

## Gates you must leave green for your batch

```
node tools/source-backing.mjs --coverage research/frontier-18-batch-<i>.coverage.json --liveness research/frontier-18-url-liveness.json
node tools/coverage-checklist.mjs research/frontier-18-batch-<i>.coverage.json --require-destination
node tools/url-sweep.mjs --coverage research/frontier-18-batch-<i>.coverage.json --recover --fail-on-dead
node tools/source-fetch-check.mjs --coverage research/frontier-18-batch-<i>.coverage.json --stamp
```

## Report

Append `## Re-harvest round` to `research/frontier-18-batch-<i>.notes.md`: the dead
source and what you tried before replacing it, the replacement and why it
carries each orphaned result, the exact range you read, and any item whose
statement moved as a result.

## Scope

`research/frontier-18-batch-<i>.coverage.json` and `.notes.md`. Keep `original_url`
provenance. Touch item text only where step 4 forces it, and say so.

**No permission prompts of any kind**, including inside an `&&` chain.
