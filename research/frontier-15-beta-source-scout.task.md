> **Source-scouting round.** Your batch number is in the "This dispatch"
> section appended below; substitute it wherever `<i>` appears.

# Batch `<i>` of run `frontier-15` — scout a live full-text URL

One or more of your batch's cited sources cannot be fetched as full text —
dead with no usable archive copy, behind a bot wall, or an
abstract/partial capture. Find which, mechanically:

```
node tools/source-fetch-check.mjs --coverage research/frontier-15-batch-<i>.coverage.json
```

Every `ERROR fetch-check-*` line naming a page of YOUR batch is yours. A
known case on this run: batch 2's Boston `notes3.pdf` — the origin is 403
and the only Wayback capture is **2 pages of a full set of lecture notes**;
the liveness sweep called it recovered, the full-text gate rightly refused
it.

## The scouting order (briefs/beta-scaffold.md §"URL discipline")

1. **An alternate live URL for the SAME source** — the author's current
   page, the publisher's open copy, arXiv, a university mirror. Same
   edition, same text, so your locators and harvest stay true.
2. **A different, complete archive capture** of the same document (check
   other snapshot dates and host variants — a partial capture does not mean
   no full capture exists).
3. If the same text genuinely cannot be found: **a different source is a
   re-harvest.** Replace the source, re-read the range your items need,
   rewrite that source's `contents` rows faithfully, and say so in your
   notes — never leave `contents` rows attributed to a document you did not
   verify carries them.

After each change, stamp and verify:

```
node tools/source-fetch-check.mjs --coverage research/frontier-15-batch-<i>.coverage.json --stamp
```

Exit only when that command exits 0 for your batch, or record exactly what
you could not find and why in your notes — a named dead end is a valid
outcome; a silent one is not.

## Scope

`research/frontier-15-batch-<i>.coverage.json` and `.notes.md` only. Keep
`original_url` provenance when you replace a URL. Not `plan-spec.json`, not
items, not other batches.

**No permission prompts of any kind**, including inside an `&&` chain.
