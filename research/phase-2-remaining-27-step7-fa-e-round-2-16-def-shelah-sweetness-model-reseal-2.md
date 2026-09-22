# FA position 16 — repaired changed-byte reseal

Current itemHashJudge 95a937d9c375b23e19d3a3cb53dfe6353794b906dd80c13779c01939bf013b38 differs from its earlier receipt. Read the entire current definition, original FA evidence, both Terra reasons and Alpha record, own boundary/risk contract, current A/B conventions and all three supplier statements; the forcing-equivalence proof was also read in full.

Verified sources:
- https://shelah.logic.at/files/95333/176.pdf — original PDF printed pp.33–34 and 40, Definitions 7.1, 7.2, 7.2A and 7.9, read from cached original /tmp/fa-e-shelah176.pdf. Definition 7.1 already requires a weak condition (source larger-is-stronger); 7.2 specifies sweetness and 7.9 the extension clauses.
- https://shelah.logic.at/files/95909/672.pdf — original PDF section 0.2(9), printed p.586, explicitly retains the weakest-condition convention. This corroborates the later owner's added requirement, which is correctly identified as part of the forcing interface rather than derived from sweetness.

Independent verification: reversing source order makes all directedness and sequential bounds lower bounds. Transfer plus class-directedness gives a common strengthening with q; conversely choose one witness r in the class and apply comparable transfer, or take k=0 when no witness exists. Complete suborder means antichain preservation, not density; extension therefore does not collapse. Density of D1 inside P1 makes the last clause with q in P1 equivalent to the source's q in D1, and gives D2 intersect P1=D1.

Boolean zero is excluded throughout. A dense order embedding transports D and its equivalence relations bijectively; common bounds are nonzero images, and comparisons are reflected. The positive Boolean algebra has its own weakest element 1; alternatively density and e(p)<=e(1_P) for all p imply e(1_P)=1. Arbitrary separative maps need not transport the relations, and the definition expressly preserves the original presentation in that case. The supplier claims forcing equivalence only, exactly as used. A one-element Boolean algebra has empty positive part and is excluded.

The amended weak-condition interface is source-supported and resolves the bare-antichain issue without importing any later amalgamation result. The separate lower measure branch changes no forcing hypothesis. No further repair is necessary, and no dependency changed in this reseal. Queue status confirms positions 1–15 current. Retain repaired/verified, with no judge verdict or stamp. Next: record, then review position 17.
