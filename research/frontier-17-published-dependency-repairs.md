# frontier-17 — published-dependency repair record

Protocol: `CLAUDE.md` §"Obvious published-dependency repair"; `WORKFLOW.md`;
`LEVELS.md` §6. One entry per repair. Nothing here changes a `status` field.

---

## R1 — `rem-sine-period-arc-length-integrand-is-nonelementary`: missing `sources_checked`

| field | value |
|---|---|
| date | 2026-08-23 |
| authorised by | owner, in session, on a presented diagnosis and options (chose "narrow repair") |
| class | missing verification record (bookkeeping), **not** a mathematical falsehood |
| item | `items/rem-sine-period-arc-length-integrand-is-nonelementary.md` |
| item status | `published`, `proved_here: false`, `kind: remark` |
| in frontier-17 scope? | **No.** Absent from all nine `frontier-17-batch-*.pages.json`; no frontier-17 item cites it |
| touch baseline | `research/frontier-17-published-dep-repair-touches.json`, label `pre-published-dep-repair-sine-period`, 6148 items |

### The error

`depcheck` error `published-unchecked`:

> `items/rem-sine-period-arc-length-integrand-is-nonelementary.md: status published, proved_here false, but verification.sources_checked is unset`

This hard-blocked the frontier-17 `5-author..6b-adjudicate` level join at
2026-08-23T00:52:05Z. `depcheck` is repo-wide, so a published-corpus defect
outside the level's scope blocks the level.

### Why it existed, and why frontier-16 could not have caught it

The item was written and audited during frontier-16 and committed by
`93aa0cd2` ("publish frontier-16 on owner audit"). `git diff HEAD` on the file
was empty before this repair: **frontier-17 did not cause it.**

`depcheck`'s `published-unchecked` rule fires only on `status: published`.
Throughout frontier-16 the item was `draft`, and that run's readiness gate
explicitly certified "every scoped item and page still draft, exactly as the
readiness gate requires". The rule became applicable at the instant the owner
flipped the status — after the last gate of the run that produced the item.
This is a structural blind spot in the readiness contract, not carelessness;
it is recorded for the frontier-17 step-10 recommendations.

### The replacement

Added, and nothing else:

```yaml
  sources_checked:
    date: 2026-08-23
    scope: citations
    by: session-audit
```

`verification.audited: 2026-08-21` was **kept**. SCHEMA §3 says
`sources_checked` "REPLACES `audited` as the publish gate" for a
`proved_here: false` item — that governs which field gates publication, not
deletion of the owner's own audit record. Removing it would destroy evidence.
No id renamed, no id removed, no body text touched, no `status` field touched.

The judge/`verified` rejudge branch of the protocol does **not** apply here:
CLAUDE.md is explicit that "a `proved_here: false` item instead gets a fresh
`sources_checked` record", and `extcheck`'s `unproved-judged` forbids a judge
block on an item with no proof. There is no stale `verification.judge` to
delete; the item has never carried one.

### Validation route — the source was read, not assumed

Claim under check (the item's `external_dependency.exact_statement`):

> "For a nondegenerate modulus $0<k<1$, the elliptic integral of the second
> kind has no expression by elementary antiderivatives."

Cited as: L. M. Hall, *Special Functions* (Univ. Missouri-Rolla, 1995), §3.1,
Example 3.1.2 — `https://web.mst.edu/_disabled/lmhall/SPFNS/spfns.pdf`

1. **URL liveness.** `HTTP 200`, no redirect, despite the `_disabled` path
   segment. No Wayback recovery needed, so RECOVER-BEFORE-REPLACE did not
   engage and the source was not re-sourced.
2. **Document identity.** 63 pages; title page reads "Special Functions,
   Leon M. Hall, Professor of Mathematics, University of Missouri-Rolla,
   Copyright (c) 1995". Author, title and year match the reference.
3. **Locator.** Chapter 3 is "Elliptic Integrals and Elliptic Functions";
   §3.1 is "Motivational Examples"; **Example 3.1.2 is "Circumference of an
   Ellipse"**, PDF page 26 / book page 24. The locator is exact.
4. **The claim, quoted verbatim from Example 3.1.2:**

   > "Again, the integral cannot be evaluated in terms of elementary functions
   > except in degenerate cases (k = 0 or k = 1). Integrals of the form
   > E = E(k) = E(m) = ∫₀^{π/2} √(1 − k² sin²θ) dθ (3.1.6) are called complete
   > elliptic integrals of the second kind"

   This supports the item's statement on all three load-bearing parts:
   *second kind* (named as such), *nondegenerate modulus* ("except in
   degenerate cases (k = 0 or k = 1)", i.e. exactly $0<k<1$), and *no
   elementary expression* ("cannot be evaluated in terms of elementary
   functions"). The restatement neither widens nor narrows the source.

**Extraction caveat, recorded because it nearly produced a false finding.**
`pdftotext` is not installed on this host. Two ad-hoc extraction attempts (a
hand-rolled ASCII85/LZW stream reader, and `WebFetch`) both failed — the first
returned partly-binary output with zero hits for "elementary", the second
declined to read the compressed streams at all. Acting on either would have
reported the source as front-matter-only and the citation as unverifiable,
which is false. The reading above is from **PyMuPDF (`fitz`)**, which resolves
all 63 pages. The PDF's own `/Count` advertises 10 pages and `file(1)` repeats
that; both are wrong. No `established-knowledge` waiver was taken.

### Provenance change

None. `provenance.statement: literature-derived` and
`provenance.proof: not-supplied` were already correct and are unchanged. The
repair adds an attestation that the existing literature backing was checked;
it does not reclassify the statement.

### Certification

Per the protocol, no author certifies its own repair. This repair was authored
by the monitoring session under direct owner authorisation. It carries no
mathematical content and changes no claim: the certifiable object is the
source reading above, whose evidence is the verbatim quotation, the exact
locator, and the reproducible extraction route. An independent re-read costs
one `fitz` extraction. Flagged for the step-10 report so the owner can elect a
certifier if desired.

### Impact

`impact-audit.mjs` run from the `pre-published-dep-repair-sine-period`
baseline — see the receipt below. The edit touches only a `verification`
subfield, so the item's public interface (id, statement, `deps`,
`proved_here`, `external_dependency`) is byte-identical and no consumer's
obligations change.
