## Batch 3 third pass — the page-88 re-anchor failed, and that is my error

Your first repair followed my instruction exactly, and your `replacement_audit` is
what exposed that the instruction was wrong. Alpha's re-check confirms the
substitution was done honestly: no drifted locator, no swapped URL, all 34 claimed
Axler results present at their claimed numbers, 144/144 published quotes matching
disk, 0 placeholders. **Page 94 is `ready-for-splice`.** Keep that audit artifact —
it is the only reason this was caught, and I am recommending it become a required
artifact for every re-harvest.

### The failure

I told you to re-anchor page 88's 22 Kim rows onto **Treil, *Linear Algebra Done
Wrong*, Chapter 4**. I verified that URL returned HTTP 200 and did not verify it
contained the material. It does not. Measured directly:

```
Treil Ch.4 (311 KB)  "minimal polynomial" 0 · "primary" 0 · "coprime" 0
                     "generalized eigenspace" 0 · "Cayley" 0
Treil Ch.9 (443 KB)  "minimal polynomial" 0 · "primary" 0 · "coprime" 0
                     "generalized eigenspace" 63 · "Cayley" 15
```

18 of 22 rows found no replacement and **9 items were left with no source at all**,
including the whole primary-decomposition spine. Your audit reported this rather
than papering over it, which is the correct behaviour.

### The corrected instruction — both sources content-verified, not just URL-verified

I extracted the full text of each and counted terms, rather than trusting a title:

| source | pages | minimal polynomial | generalized eigenspace | primary decomposition | relatively prime | Cayley |
|---|---|---|---|---|---|---|
| **Axler, LADR 4e** | 404 | **135** | **42** | 0 | 0 | 10 |
| **Knapp, *Basic Algebra*** | 762 | **55** | — | **4** | **7** | — |

- `https://linear.axler.net/LADR4e.pdf` — you already read it for page 94 and Alpha
  verified 34 of its results at their claimed numbers. It carries the **minimal
  polynomial and generalized-eigenspace** material Kim was covering.
- `https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf` — **already
  in this run's source ledger** (batch 1 uses it) and verified live. It carries
  **primary decomposition and the relatively-prime/coprime kernel** material, which
  neither Axler nor Treil nor Conrad has. Alpha independently ruled out widening
  Conrad: 0 occurrences of "primary" across all seven sections.

Re-anchor the 22 rows across these two, enumerate each source's own section and
named-result headings over the exact ranges you read, and give every heading a
disposition. **Verify each locator by opening the source at it** — that is the
whole lesson of this pass. WebFetch cannot read PDFs; use a venv with `pypdf`.

If a specific result genuinely appears in neither — say so in the row and name
what would license it. **Do not leave an item with no source, and do not stretch a
locator to cover something it does not contain.** If after real searching the
general primary decomposition over an arbitrary field has no live source you can
verify, tell me and I will decide between restricting the page to the split case
and finding a source myself. That is a blocker worth raising, not a gap to absorb.

### Also in this pass

Whatever remains outstanding from your second-pass task (F3.4 iff converse, F3.6
splitting-fields citations, F3.7 third summary paragraph) if that pass did not
complete them — check your own notes for what landed.

### Re-run and report

The three gates, your closure audit, the updated `replacement_audit` covering all
22 page-88 rows, and an explicit count of items still lacking a source.
