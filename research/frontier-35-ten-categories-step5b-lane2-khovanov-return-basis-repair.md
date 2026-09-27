# Lane-2 Khovanov–Seidel return-basis Fact repair

Item: `thm-khovanov-seidel-u-functors-satisfy-temperley-lieb-relations` (draft). Pre-edit guard `5689a3d33ae422e635d8718b1527397e7d6493b147ae4158759878111a37a7d2`; post-edit guard `0eb8ba9b1d3291dec13b3edddba045c13accd7a16528a5c04a24cac120d0f292`.

Fact L2 incorrectly listed the `m` basis returns as `(j|j+1|j)` without an index range. That list omits the nonzero return at vertex `m` and, if `j=m`, names an undefined arrow; the return at vertex `0` vanishes. The exact supplier `lem-the-khovanov-seidel-algebra-has-the-four-m-plus-one-path-basis`, Statement, gives `(j|j−1|j)` for `1≤j≤m`. L2 now uses that list. Proof 1.1 and the square and triple computations already used the correct paths and degree-one shifts, so the exported Statement and conclusion did not change.

The batch-16 proof contract already quoted the exact supplier Statement and required no change. The nine incoming changed-supplier rows in `research/frontier-35-ten-categories-step5b-impact-lane-2-evidence.jsonl` were rechecked and rebound to the post-edit consumer guard; the direct basis-source row is marked `repaired`. `tools/consumers.mjs` reports no direct consumers of this theorem, so there is no outgoing Statement/Definition impact. Focused item precheck and strict batch-16 proof-contract check passed with zero failures/errors/warnings.

Central ledger proposal: confirmed nonfatal ill-indexed L2 basis return Fact, repaired at the guards above; no exported Statement/Definition change and no central plan delta.
