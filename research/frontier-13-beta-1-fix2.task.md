## Batch 1 second pass — two findings my first fix brief omitted

Your first repair was executed faithfully and is accepted (26 → 29 items on
`symmetric-polynomials`, 73 contracts / 0 empty / 218 citations, gates green).
**The omissions below are the orchestrator's error, not yours.** The first brief
was written from the Alpha's closing summary rather than its full report, and it
renumbered findings while transcribing: what it called "F1.2" was actually Alpha's
**F1.4**, and the real F1.2 and F1.3 — both Grinberg, both on `symmetric-polynomials`
— were dropped. Apply only these two.

Source of record: `research/frontier-13-alpha-a-step3-scaffold-review.md` §§1.3–1.4.

### F1.2 — the Grinberg locator excludes the range two of your items are sourced from

Declared locator: *"Chapter 7, Section 7.1, printed pp. 434–449, in full; stopping
before Section 7.2."* Alpha opened `arxiv.org/pdf/2506.00738v1` and found two
defects:

1. **The locator is self-contradictory.** §7.2 "N-partitions and monomial symmetric
   polynomials" begins on printed page **449**, which "pp. 434–449" includes. The
   range and the "stopping before §7.2" clause cannot both hold.
2. **Two scaffold items are sourced from §7.2, which the locator excludes.** Your
   provenance table credits `def-monomial-symmetric-polynomials` to "DG-7's orbit
   sums indexed by partitions" and `thm-monomial-symmetric-polynomials-form-a-basis`
   to "DG-7's basis result". Those are **Definition 7.2.4** ($m_\lambda$) and
   **Theorem 7.2.7(a)**. Neither has a coverage row, because the declared range
   stops before them.

This is the sharpest kind of citation defect: two items carry `literature-derived`
provenance sourced from a range their own source ledger excludes, and
`coverage-checklist.mjs` cannot see it because it only validates the rows that are
present.

**Fix:** extend the locator to §7.1–§7.2 through Theorem 7.2.7, and add disposition
rows for 7.2.1, 7.2.2, 7.2.3, **7.2.4 → `def-monomial-symmetric-polynomials`**,
7.2.5, 7.2.6, **7.2.7 → `thm-monomial-symmetric-polynomials-form-a-basis`**, 7.2.8
and 7.2.9. §7.3 (Schur polynomials) stays outside the range.

### F1.3 — the Grinberg harvest enumerates 9 rows against 17 numbered results

Grinberg §7.1 contains 7.1.1 through 7.1.17; your coverage file records **9 rows**.
Un-enumerated with no disposition: Convention 7.1.1, Definition 7.1.2, Example
7.1.3, Proposition 7.1.4, Proposition 7.1.5, Theorem 7.1.6, Definition 7.1.7,
Definition 7.1.8, Definition 7.1.9, Example 7.1.10, and Lemma 7.1.17.

Almost nothing is lost mathematically — Thm 7.1.6 is
`prop-symmetric-polynomials-form-a-subring` and Def 7.1.9 is
`def-elementary-symmetric-polynomials`, both already scaffolded. The defect is in
the artifact: the 2026-08-11 rule requires a disposition for **every** named-result
heading in the declared range. **Add the eleven rows**, pointing the two above at
their existing items.

For calibration, Alpha records your Conrad *Symmetric Polynomials* harvest as
complete and faithful — 25 rows over §§1–5, with Theorem 2.12 correctly `inline`
into the FTSP existence proof. That is the standard the Grinberg harvest should
match.

### Re-run and report

The three gates plus your dependency-closure audit, and the new Grinberg row count.
