# Step 6 owner routing correction — group b

The Step-6 group-b reader put a mathematically valid published-supplier
finding in the Step-7 `alerts` field. The `step7-digests` gate rejected that
field because alerts must target another group's item **in this run**, whereas
`thm-bipolar-closure-for-linear-subspaces` is published and belongs to no
run group. The owner corrected `research/phase-2-next-17-alpha-b-step7-context.json`
by changing only that `alerts` field to `[]`; all read declarations, three
run-owned concerns, and the published-dependency entry for this theorem remain.
The original digest SHA-256 was
`4ec7ca6d6b897a5367c3da0c698dedf51755541ea2af34f46547e74cdbf3d67e`.

The removed alert's exact finding: the published theorem states the primal
identity `^perp(M^perp) = closure M` for every normed-space subspace `M`
without an HB/AC hypothesis. At `M=0`, this implies that `X*` separates
points, for which the library's relative dual-norming corollary assumes HB.
Proof 3.1 and 4.1 invoke `cor-annihilator-detects-closure`; its separation
chain reaches norm-preserving HB extension, and the older dominated-extension
statement explicitly assumes AC. The published theorem's finite-coordinate
weak-star double-annihilator identity is ZF-valid and is the only clause used
by the run-owned `lem-annihilators-are-weak-and-weak-star-closed`. Severity in
the original alert was `gap-a-reader-closes`. See the fuller independent
Step-3b group-b finding in `research/phase-2-next-17-step3b-b.md` and the
canonical published-defect entry under
`norming-and-separation-under-hahn-banach` in
`research/published-consumer-supplier-ledger.md`.

This routing correction does not certify the published theorem, repair its
statement, or change any run-owned mathematical content. It preserves the
published repair debt while allowing Step 7 to receive only in-run alerts.
