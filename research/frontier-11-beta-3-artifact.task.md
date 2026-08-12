# frontier-11, batch 3 — artifact reconciliation after step-6 repairs

You are **Beta-frontier-11-3**. Your artifacts are
`research/frontier-11-batch-3.*`.

## Your reader

`research/frontier-11-reader-2.findings.md` — reader 2 audited your
batch. Read it in full. It contains a section naming the exact artifact
reconciliation it could not perform because batch artifacts were out of its
scope. That section is your work list.

Your item text has already been repaired by that reader. **Do not undo those
repairs.** Make your contract and coverage true of the repaired text.

## BATCH 3 — TWO ADDITIONAL REQUIRED REPAIRS, both fatal per your reader

**(a) Your proofs carry NO labeled facts, so your citation contract is vacuous.**
All 49 of your proof-bearing items use zero `[F#]`/`[A#]`/`[L#]` facts, so all 49
contract `citations` arrays are empty — and `proof-contract --strict` passes them
trivially. Verified directly against the merged contract: 49 empty entries of
205, all yours; a comparable batch-1 item carries 7 labeled facts.

This is not a formatting preference. `CLAUDE.md` requires that each contract
record "the exact cited source clause and every step using each [F#]/[A#]/[L#]
fact", and the reader-facing rule requires each such fact to **state the cited
definition or theorem itself** — quoted exactly where practical, otherwise the
smallest faithful shortening, with no changed domain, quantifier, hypothesis,
direction or conclusion, and no invented converse. With no labeled facts there is
nothing to check and nothing for a judge to verify a citation against.

**Introduce labeled facts into the proofs that actually use a dependency**, and
populate the contract entries accordingly. Do **not** manufacture a fact for a
step that genuinely uses only elementary algebra or an earlier step — the goal is
truthful citation structure, not a quota. Where a proof really is self-contained,
say so in your notes for that item.

**(b) Flajolet–Sedgewick is STILL under-enumerated.** Three named results inside
the range your `coverage.json` declares have no disposition. This was flagged at
step 3, was not closed by the fix round, and your reader confirms it. Enumerate
that stated range properly and give every heading a disposition. If the range you
recorded is not what you actually read, correct the `locator` — an inaccurate
locator is worse than a short one, because it makes the harvest uncheckable.
