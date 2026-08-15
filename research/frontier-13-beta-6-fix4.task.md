## Batch 6 fourth pass — two residues

F6.5 is confirmed fixed (`def-partial-order` added; the contract quotes the
antisymmetry clause verbatim). F6.7's four Riehl section names are in your previous
pass. Two things remain.

### F6.8 — the rename did not reach `notes.md`

The rename to `ex-groupoid-inclusion-is-left-adjoint-to-the-maximal-subgroupoid`
landed in all three semantic JSON artifacts (0 references to the old id — verified).
But **`notes.md`'s provenance table still keys its row on the dead id**. Your own
F6.6 record names exactly three artifacts as updated; the notes file is the fourth,
and it is where CLAUDE.md puts the per-item provenance rationale.

Consequence if left: at step 5 the author of that item finds **no provenance row
for the item it is authoring**. Update the row's key to the new id.

### F6.9 — eight hollow citations

All 119 of your citations are verbatim, and Alpha confirms that. But **eight quote
the sentence that *introduces* a clause and stop**, carrying no proposition:

```
"Whenever the expressions are defined,"
"Let $G$ be a group. Its **abelianisation** is the quotient"
"Ideal criteria and intersections of ideals."
```

These pass every mechanical check — non-empty, correct length, byte-identical to
the source — while stating nothing that can discharge a proof obligation. Batch 4
has zero of these, so the standard is achievable.

Replace each with the actual proposition the step uses: quote it exactly when
practical, otherwise the smallest faithful shortening with no changed domain,
quantifier, hypothesis, direction or conclusion. Alpha's report names all eight;
read `research/frontier-13-alpha-c-recheck.md` for the list.

### Re-run and report

`coverage-checklist.mjs`, `content-policy.mjs --manifest-only`, and your closure
audit. Report the eight replaced citations and confirmation that the notes
provenance row now keys on the new id.
