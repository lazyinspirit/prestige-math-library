## Group B re-check — batches 3, 7

Your step-3 pass produced the run's largest non-mathematical finding. This pass
is mostly about whether the source substitution was done honestly.

### Batch 3 — the dead-source re-harvest (your F3.1)

You found Kim's UCL notes return 404; the orchestrator confirmed independently
(PDF **and** directory, browser headers) and measured the exposure from the
coverage file: **47 of 114 rows (41%)**, with **15 items backed only by that
source**, including `thm-primary-decomposition-for-an-endomorphism`,
`lem-coprime-kernel-decomposition` and `thm-sylvesters-law-of-inertia`.

The instructed remedy was Treil Ch. 4 for page 88 and Axler LADR4e for page 94,
both verified live.

**What to check, and it is the whole job:**

1. **Is every re-anchored row real?** For each of the 47 rows, the new locator
   must point at material that genuinely covers that result in the replacement
   source. The dishonest repair here is easy and invisible to every gate: keep the
   row, swap the URL, and let the locator drift. **Open the replacement at the
   stated locators.** WebFetch cannot read PDFs — use a venv with `pypdf` for
   Axler; Treil Ch. 4 has an HTML edition.
2. **Where a Kim-backed result is genuinely absent from the replacement**, the row
   must say so rather than quietly persist. Check the 15 only-Kim-backed items
   first; they are where a silent drop would hide.
3. **Two independent treatments per pair** must now actually hold, with at least
   one carrying a harvestable table of contents.
4. F3.2 (multiplicity criterion, least squares), F3.3 (Conrad Cor 5.5 and any
   other heading skipped inside a declared range), F3.4 (D3.1's room actually
   used, and scalar-extension invariance *proved* rather than assumed), F3.5
   (28 empty contracts populated).

### Batch 7 — `linear-recurrences-…`

Re-check **F7.1** hardest: `cor-cayley-hamilton-recurrences-for-matrix-powers`
had to regain $A\in GL_d(K)$ (a nilpotent $A$ falsifies the unqualified title)
**and** resolve the field-only `thm-cayley-hamilton` against a commutative-ring
page. Confirm both, not just the first — a repair that adds the invertibility
hypothesis and leaves the ring/field mismatch is half done.

Then **F7.2** (reciprocity restated in $K(x)$ using the approved R7.1 edge to
`the-field-of-fractions-and-localisation`, not restated to dodge $K(x)$),
**F7.3** (Stanley Ex 4.7.5 and any other skipped heading in range), **F7.4**
(20 empty contracts populated), and that the Stanley eigenvalue decline row now
says accurately that the spectral theorem is order 94 — *below* 195 — and simply
outside this pair's declared closure.
