# This dispatch — apply the 33 owner-approved published scope-denial edits

The owner reviewed the step-10 rundown and approved **all 33** published edits
queued by the step-9 sweep. Apply them now; they go in the publishing commit.

## Source of truth

`research/frontier-10-step9-scope-denial.md`, entries **P1 through P33** under
"Published edits queued — do not apply before the publishing commit". Each names
its file and gives `Old (exact):` and `Replacement (exact):` as blockquotes.

**The blockquote `> ` prefixes and their line wrapping are presentation.** Match
the file's actual prose semantically-identically, not byte-identically, and
preserve the file's own wrapping and indentation when you write the replacement.

## Rules

- Apply **only** P1–P33. The D1–D12 draft repairs in the same report are already
  applied — do not touch them again.
- These are **published** items and pages. Change only the prose each entry
  names. Do not touch frontmatter, `status`, `verification`, `deps`, item lists,
  or anything else.
- If an entry's old text does not appear, or appears more than once, or has
  already been applied — **stop on that entry, record it, and continue with the
  rest.** Do not guess. A skipped edit reported is fine; a wrong edit is not.
- Some entries carry more than one old/new pair. Apply every pair in the entry.

## Verify

```
node tools/tsx-run.mjs tools/precheck.mts
node tools/rendercheck.mjs
node tools/prosecheck.mjs
node tools/depcheck.mjs
```

`prosecheck --warnings` should report **fewer** `library-scope-denial` warnings
afterwards; that count dropping is the signal the edits landed.

## Report

`research/frontier-10-p-edits-applied.md`: per entry, applied or skipped-with-
reason, and the file touched. State the before/after `library-scope-denial`
warning counts.
