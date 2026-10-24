# Abstract Algebra visual audit — lane 02

## Scope and coverage

Audited all 138 assigned items using their revision-2 ItemBody captures. Opened all 281 listed screenshot tiles at original resolution, including overlap and short tail tiles. The per-item ledger records each item’s page, checked sections, status, and screenshot paths in [lane-02.json](lane-02.json). Coverage is 135 clean items and 3 items with confirmed findings.

## Findings

- **Confirmed raw caret in a title:** `cor-abelian-p-groups-of-order-pn-are-counted-by-partitions`, line 4. Its rendered title visibly prints `p^n` as plain text. The same unformatted link title is visible in the Facts & Assumptions of `ex-the-five-abelian-groups-of-order-sixteen`, line 35; both occurrences are recorded in the ledger.
- **Confirmed literal proof annotation:** `thm-internal-external-semidirect-product-equivalence`, line 64. The proof renders `[step 1.1, L1, algebra]` literally after the sentence instead of as a reference.

No source or production files were changed. Findings were recorded only after checking the revision-2 screenshots; no issue was inferred from source text alone.
