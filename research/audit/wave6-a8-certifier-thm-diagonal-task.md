## Assigned A8 repair — `thm-hausdorff-iff-the-diagonal-is-closed`

Item path: `items/thm-hausdorff-iff-the-diagonal-is-closed.md`

Normalized final-text SHA-256 at dispatch (entire `verification:` block
excluded): `ebdfe109ea93a3b59f670a1a1e202453f2199f608e0c0ad76d19829fc5866d6f`

The GPT 5.6 Terra judge rejected the old Statement because it said:

> every consequence on this page is obtained by pulling $\Delta_X$ back along
> a continuous map.

Audit-Alpha confirmed that universal page-scope claim as false: sequence-limit
uniqueness, compact-Hausdorff regularity/normality, and the locally compact
Hausdorff basis lemma use independent separation/compactness proofs. The narrow
repair now says only that the closed agreement-set result is obtained by pulling
the diagonal back along the pairing and that the graph result specializes that
argument.

Read the full current item, `def-the-diagonal-of-a-space`,
`cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed`, and
`lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed` from disk.
Certify or refuse whether the repaired scope sentence is exact and whether the
complete theorem remains correct. Also verify the Statement provenance changed
from `literature-derived` to `ai-altered`, the matching current Wave 6 topology
provenance row says `ai-altered`, and stale verification evidence is absent.
