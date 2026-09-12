# Step 7 owner correction — historical adjudication row 101

Group g correctly adjudicated `rem-intermediate-models-and-complete-subalgebras`
as a confirmed fatal missing Boolean-embedding hypothesis and repaired the
item. Its initial ledger row at line 101 classified the defect with the
descriptive but schema-invalid value `missing_hypothesis`. A later exact-tuple
row at line 118 correctly used the closed-enum value `other`; the
`level-coverage` gate nevertheless validates every historical row, so a
superseding append cannot clear the malformed original.

The owner changed **only** line 101's `defect_type` from
`missing_hypothesis` to `other`. The original line's SHA-256 including its
trailing newline was
`d6dc1684e83e5221ecf0cc3615a858ab6ae844e7f40d673b64beb689e19681ae`.
All other fields—including the id, model, context and item hashes, fatal
outcome, mathematical rationale, group, and time—are unchanged. The original
descriptive classification and its exact repair rationale remain preserved
here and in `research/phase-2-next-17-alpha-step7-g.md`.

This is a data-shape correction, not a changed mathematical verdict, a new
repair, or a certification. The subsequent exact-tuple row remains in the
append-only history. The owner exercised the narrow correction that group g's
dispatch explicitly escalated; no global gate rule was relaxed.
