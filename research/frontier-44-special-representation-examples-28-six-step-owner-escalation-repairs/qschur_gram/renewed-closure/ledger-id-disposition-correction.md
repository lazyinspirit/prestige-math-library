# Ledger metadata correction

The prior proposal incorrectly reused open IDs and used invalid disposition `closed`. It is superseded by ledger-id-disposition-correction.json. The exact2 new owner-authored rows use `fixed`, retain original adjudication refs, and supersede rather than overwrite the old rows:

- f44-six-b13-owner-qschur-weight-norm-fixed supersedes f44-six-b13-3a-finding-thm-q-schur-weyl-weight-space-gram-determinant-hook-product.
- f44-six-b14-owner-qschur-weight-norm-fixed supersedes f44-six-b14-3a-schur-weight-norm; it records the same physical norm repair and links the new batch13 fixed row.

No existing reusable fixed row was found in the current canonical ledger. All8 decision replacements are supplied: touched Gram and reader/refuter13 use the new batch13ID; reader/refuter14 use the new batch14ID; three unchanged touched audit-enrichment decisions retain empty defect_ids. The minimal-protocol-delta.json was updated consistently. No source, proof hash, check evidence or mathematical round changed.
