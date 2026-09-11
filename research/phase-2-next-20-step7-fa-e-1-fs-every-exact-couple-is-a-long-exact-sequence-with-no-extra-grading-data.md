# Terminal FA evidence — group e, queue position 1

Run: phase-2-next-20. Item: `fs-every-exact-couple-is-a-long-exact-sequence-with-no-extra-grading-data`. Decision: **repaired**. Source status: **verified**.

## Independent review and controlling context

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md and the frozen single-item FA queue. Reviewed the current item, both complete cited supplier files (`def-exact-couple` and `lem-abelian-group-model-for-spectral-sequence-computations`), the A/B pages `double-complexes-exact-couples-and-convergence` and its examples companion, the owning batch-7 manifest, item proof contract including risk/boundary rows, item coverage entry, batch convention notes, and HA-16 design context. Read the item-specific Step-5 Alpha decision, Step-7 Sol adjudication and both Terra rejection rows in `research/phase-2-next-20-judge.jsonl`.

The normative local definition uses indexed families, initial page E^1, degrees i=(1,-1), j=(0,0), k=(-1,0), and bidegree-zero morphisms. It expressly does not take infinite direct sums. The A/B context imposes no first-quadrant restriction on this exact-couple example. The claim concerns determination of the specified bigrading, not existence of an ungraded exact triangle or recovery of an abutment.

Initial Terra context: `6c893fd9ef16ed71ad36d841dfea4d9273814dcf31b8526237649b977f44b810`. The original concentrated-placement obstruction did not prove nonuniqueness. Sol correctly recognized that error, but its diagonal-supported repair incorrectly identified the unrolled sequences with a periodic Z,Z,Z/2 triangle. Final Terra context: `0d5f792045058178967c6e9c002da4df4eba18f287cdebfe5ede6904ff5d0acf`; rejected item hash: `0b800a74be9333fa3ee613e29f2aa0fd7c0886d663ba3cc8a6db57a6360b20bc`. That objection is correct: k from a supported E has a zero target D. The Step-5 risk rationale and Sol's periodic-sequence identification cannot be upheld.

## Mathematical repair and source verification

The final witness is the actual ungraded sequence with Z,Z,Z/2 in positions 0,1,2 and zero at every other integer position, with multiplication by 2 and reduction as its nonzero maps. Its exactness follows directly from the existing abelian-group supplier, whose statement and full proof were read.

Retain Sol's two indexed families supported on p+q=c for c=0,1. The required degree of i preserves that diagonal; j is reduction in degree zero; k is zero to the prescribed (possibly zero) target. At supported D, im i=2Z=ker j and im k=0=ker i. At supported E, im j=E=ker k. At off-support targets both subobjects are zero, including incoming zero maps from supported sources.

For every integer a and m, the exact unrolling is

`D[a,c-a-m] -> D[a+1,c-a-m-1] -> E[a+1,c-a-m-1] -> D[a,c-a-m-1]`.

The fourth term begins the next triple. The first three terms have total degree c-m and occupy positions 3m,3m+1,3m+2. They are nonzero precisely at m=0. Thus every such sequence, for both choices of c, is exactly the stated ungraded sequence, with all zero targets retained. This also displays an identical collection of sequences, without a direct-sum forgetful construction. Nevertheless the E^1 component at (0,0) is Z/2 for c=0 and zero for c=1. A bidegree-zero isomorphism is impossible. This proves the claimed failure of determination using only existing suppliers. No AC or convergence result is needed.

Authoritative source opened and read: https://stacks.math.columbia.edu/tag/011P — complete mathematical section through Remark 12.21.5, including its footnote (web lines 18–89). Definition 12.21.1 distinguishes the exact-triangle data; Remark 12.21.5 explicitly retains shifts and displays the associated exact complex. This verifies why zero objects and shifted targets must remain in the unrolling. The source's ungraded convention is not substituted for the local homological indexing. The source omits the proof of its derived-couple lemma; no omitted argument is treated as verified or used to close this repair. The new witness and its nonuniqueness calculation are proved locally above. No fresh retrieval of the older PDF sources was needed or claimed.

## Scope, contracts and checks

Changed only this item and its owning batch-7 manifest strategy, proof-contract derivations/citation uses/boundaries/risk review, and item coverage evidence. Preserved the independent historical review files and paid verdicts. Supplier IDs and mathematical interfaces are unchanged. Under `briefs/tasks/frontier-dependency-ledger.md`, reviewed the owning consumer input `research/phase-2-next-20-batch-7.cross-batch-dependencies.json`: it remains `[]`. This repair adds no dependency or same-run cross-batch use, so no dependency row requires alteration. The local definition belongs to batch 7; the group-model supplier belongs to the earlier phase-2-catchup-24 run. No supplier edit or published mathematical defect was identified in this review; no published-defect-ledger entry is warranted.

Final checks:

- Item precheck: PASS, 1 checked, 0 failing. An initial multiline proof-row parse required putting the displayed chain into its single numbered row; the corrected proof passes directly.
- Item rendercheck: PASS, including real KaTeX and renderer YAML parsing.
- Strict owning proof-contract check scoped to this ID: 0 errors, 0 warnings, 1/1 checked.
- Batch-7 content-policy: 55 scoped items, 0 errors, 0 warnings.
- Repository depcheck: exit 0, no cycles or unresolved references; 473 repository warnings were reported. This is structural validation, not a whole-library mathematical audit.

No unresolved mathematical obligation remains for this item. Next action: record the exact final bytes using the frozen queue's repaired/verified terminal command, then stop. This evidence is a terminal adjudication basis, not a judge verdict or pass stamp.

Recorder result: accepted the `repaired` / `verified` terminal resolution at context `d59d173e5729c4d4b9f5542b6a16a63bdff01fd8cdcbac21915af14a2c292961`. The single-item queue is complete. No additional judge was launched and no pass stamp was created. No further FA action remains.
