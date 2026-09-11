# Source recovery validation

2026-09-11. Owner-authorized source recovery for batches 7, 8, 9 and 13.

Recovered the original Stacks homology, Hatcher chapter 3, MIT 905, Park de Rham,
Merry differential geometry and Karagila forcing PDFs. Exact byte counts, full
SHA-256 hashes, page counts and scoped reading limitations are in
`phase-2-next-20-source-recovery-evidence.json`. Coverage receipts preserve every
failed retrieval attempt and prior escalation. No unavailable source was dropped.

Merry Lectures 28 and 37 now have a complete 27-heading harvest. Dispositions
distinguish the selected operator/metric interfaces from unused Ehresmann and
curvature material. Sources' omitted proofs and exercises are explicitly identified;
retrieval success does not replace local proofs or independent mathematical review.

The two obsolete UCLA Marks URLs survive verbatim in batch 13's
`historical_retrieval_history`; this uses the citation extractor's existing
historical-field convention. Current Marks citations use the live Berkeley original.

Validation against all four coverage files:

- `coverage-checklist.mjs --require-destination`: 7 pages, 377 harvested rows,
  zero errors. One existing low-yield warning for batch 7 requires Alpha's
  review of the explicit declines.
- `source-fetch-check.mjs`: 16/16 sources fetch-verified and resolved; zero drops.
- `url-sweep.mjs --fail-on-dead`: 14/14 distinct current citation URLs live;
  zero failures or suspect responses. Output:
  `phase-2-next-20-source-recovery-url-liveness.json`.
- `source-backing.mjs --require-verified` using that liveness output: all 100
  authored results across four files retain openable backing or a documented argument.

No controller commands or batch 14 changes were made. These are focused source
gates, not a claim that the full Step 3 final gate or mathematical adjudication passes.
