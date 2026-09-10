# Step 7 adjudication — group h

## Progress

- Completed adjudication: `def-rescaled-ultralimit-and-asymptotic-cone`, `def-bounded-edge-coarse-triangular-filling`, `def-real-tree-tripods-and-geodesic-triangle-minsize`, `def-singular-planar-labelled-relator-diagram`, `ex-asymptotic-cones-of-lines-and-trees`, `ex-scaling-distinguishes-sublinear-minsize-from-bounded-perimeter`, `lem-relator-expressions-give-controlled-singular-planar-diagrams`, `lem-singular-planar-diagrams-have-controlled-coarse-disk-thickenings`.
- Handoff complete: all eight items in that list.
- Remaining owned items or rejudge targets: none.

## Decisions and repairs

### `def-rescaled-ultralimit-and-asymptotic-cone`

- Rejection context: `767db87a8a995db930f36622f4aab14ec5f511bc52b0a803fad3955f0d716a13`.
- Outcome: `confirmed_fatal` (`other`), pre-edit guard `36be0a745666ffc491a8423fd6bae4c7c3d9ab6585fa850095ef84bcac01e63e`.
- Evidence: the definition explicitly replaced the library's natural-number object, which contains `0`, by `{1,2,...}`. This contradicted the common sequence domain and made this page's cone convention incompatible with its declared dependencies and consumers.
- Repair: retained the library's `\mathbb N`, stated that it contains `0`, and synchronized the two exact quotations in the owned batch proof contract. No dependency changed.
- Sources consulted: local `def-ultrafilter` for the arbitrary underlying-set interface; local natural-number/sequence conventions found in `def-series`, `def-sequence`, and `library/topology/metric-spaces.md`. No web source was needed for this repository-specific convention.
- Checks: focused precheck (definition: zero proof-bearing items), rendercheck, and proof-contract JSON parse passed. Post-repair guard: `4a5b4b2acc4a42bd9bb81f2a8f8b70c180b4d6a8917e8040058d969828999c7b`.

### `def-bounded-edge-coarse-triangular-filling`

- Rejection context: `ee7ca4f6656016d5d689a4d41016f5ecefaf92ab9d30d280b7b438776a51f443`.
- Outcome: `confirmed_fatal` (`logic`), pre-edit guard `f574397d4f0af538087f46d09b49eeb9e93b47f9433722fe16eafe8ba68d126c`.
- Evidence: the old definition called an arbitrary cyclic list in `X` the boundary map without relating it to `f|_{V(\partial D)}`. A disk and an unrelated list therefore met the literal definition, so later filling claims did not ensure they filled their stated loops.
- Repair: defined the boundary list to be the images under `f` of boundary vertices in cyclic order, required prescribed lists to agree entry-for-entry, and retained controlled repeated-image subdivision. Synchronized all three exact quotations in the owned proof contract; no dependency changed.
- Sources consulted: the complete local definition and its four direct consumers were inspected. The issue is internal well-typedness of the definition, so no external source was needed.
- Checks: focused precheck (definition: zero proof-bearing items), rendercheck, and proof-contract JSON parse passed. Post-repair guard: `bc500a8d1d671acce131e99c93ab23814f6d55dd81473babbe818a718a9c60b6`.

### `def-real-tree-tripods-and-geodesic-triangle-minsize`

- Rejection context: `481618060dfe9d323022396a39f1dc08111dd18cef40633d1f7a71448d1b2bae`.
- Outcome: `confirmed_fatal` (`other`), pre-edit guard `ffb03aaed8d4d0aacb6b5c4741ce647bae8cac9efd3bc7e913894dd4c568026b`.
- Evidence: the profile used `\operatorname{perimeter}(\Delta)` without assigning that notation a value. The cited geodesic definition supplies each side's parameter length, but did not itself define triangle perimeter.
- Repair: defined perimeter as the sum of the three chosen side lengths, equivalently the three pairwise vertex distances, and explicitly covered zero-length sides. The addition is after the retained quoted source text, so all existing exact contract quotations remain literal contiguous quotations; no contract or dependency edit was needed.
- Sources consulted: local `def-geodesic-and-geodesic-metric-space` was opened and establishes that each chosen side length equals its endpoint distance. This suffices for the notation repair; no web source was needed.
- Checks: focused precheck (definition: zero proof-bearing items) and rendercheck passed. Post-repair guard: `9bbc8d6ace3e842aa79d90dd64649651bf9f4b8aea53e187e813b4c0f2f6e2ca`.

### `def-singular-planar-labelled-relator-diagram`

- Rejection context: `cd54cbba6f8c1278c4e7bb3ca66a369017a9c66fc16a39e7c7d7f6546bd2531b`.
- Outcome: `confirmed_fatal` (`other`), pre-edit guard `4505b1648fec411970c16ccca25434361f415c8e3ab7544f9ed71b7357a4f0f6`.
- Evidence: choosing an undirected initial outer occurrence did not choose between the two cyclic traversal directions. On a one-loop carrier the literal word could therefore be a letter or its inverse.
- Repair: fixed the standard plane orientation, defined the outer walk as the directed facial walk with the unbounded region locally on its left, and required a directed initial occurrence. The convention explicitly includes loops and both bridge occurrences. The addition follows the retained exact quoted block, so the existing consumer quotation remains a literal contiguous quotation.
- Sources consulted: the complete local definition, `def-multigraph-loop-and-digraph`, and the consuming relator-diagram construction were inspected. This is an internal orientation-data repair; no external source was needed.
- Checks: focused precheck (definition: zero proof-bearing items) and rendercheck passed. Post-repair guard: `d7134839bb2804561b73e3c7807126b929efcb2009caae851f801191cf027d13`.

### `ex-asymptotic-cones-of-lines-and-trees`

- Rejection context: `2e052a8d40000a4e0d52dfd42962dfb008a8883632c8abdf2cd834cacdbe6825`.
- Outcome: `confirmed_fatal` (`logic`), pre-edit guard `deba8ec2750fc1dac64af9d1ccdf4e3dc3b9a7e48fea8039159f905a39ca8bf3`.
- Evidence: with the repaired common sequence domain, `n=0` is included, so `\lambda_n=1/n` was neither defined nor positive at every index. The same defect also occurred in the interval-collapse witness later in the item.
- Repair: used `\lambda_n=1/(n+1)` in both witnesses, adjusted the moving line basepoints and representatives so their images remain `3` and `-2`, and made the `n=0` check explicit. Synchronized the two affected proof-contract derivations; no dependency or statement changed.
- Sources consulted: the current cone definition and bounded-ultralimit and limit-segment dependencies were read completely for the witness interfaces. This is a direct arithmetic/domain repair, so no external source was needed.
- Checks: focused proof precheck, rendercheck, and proof-contract JSON parse passed. Post-repair guard: `19703f06ff8761ca8d9ff53c690cec40aa386a0902e613d55eccb4d3c8ff8be1`.

### `ex-scaling-distinguishes-sublinear-minsize-from-bounded-perimeter`

- Rejection context: `d24a0973687ccc092568746f0a4ba53e590c91bdc7513194168b33d9a380fc00`.
- Outcome: `confirmed_fatal` (`logic`), pre-edit guard `69527373ebf4bafbd75253682fea74d58f57e9511c9c5fad915c3315d0f328dc`.
- Evidence: the advertised positive scale `1/n` was undefined at the included index `n=0`; the corresponding scale-`n` triangle also degenerated there, so the displayed family did not instantiate the claim on its stated domain.
- Repair: indexed the witnesses by scale `n+1` with `\lambda_n=1/(n+1)`, rewrote both geodesic parameter ranges and minsize/perimeter calculations, and explicitly checked `n=0`. Synchronized both affected contract derivations and the owned batch strategy; no dependency changed.
- Sources consulted: the full Euclidean minsize example and the current perimeter and ultralimit dependencies were inspected. The repair is direct arithmetic, so no external source was needed.
- Checks: focused proof precheck, rendercheck, and proof-contract and batch-manifest JSON parses passed. Post-repair guard: `377c4ed99da91bbae674dcad26bba52b652c39319af2093cbe5e375e9fe2e92c`.

### `lem-relator-expressions-give-controlled-singular-planar-diagrams`

- Rejection context: `3f5677ccb06204782aaeea14da3eafcc2c6eaf9aff68b5fbf6d356ef2edebff7`.
- Mathematical outcome: `confirmed_fatal` (`logic`). The actual pre-edit `itemHashGuard` in the Step-7 baseline is `5044c43ab4aac1c2b227e3767ab72c9df14d0c5a5abdc8eefe1407b5fc85620d`; the original adjudication and defect-ledger rows incorrectly carried the judge-form hash `a4bfe0b225b4b55354d23b10642d41d31273d165a73d8ec7b32c76f6f762eecb`. A controller/operator hash-correction row was appended to the adjudication ledger at line 102 without changing the tuple, decision or rationale.
- Evidence: the former loop-cancellation step inserted midpoint vertices into generator edges and invoked the labelled-diagram fold after each half-edge fold. The diagram interface labels complete edge occurrences and explicitly says geometric bends add no occurrences, so that intermediate object was not licensed and loop cancellation was unproved as written.
- Repair: parameterized the two complete inverse-labelled occurrences and retained their midpoints only as geometric marks used to construct one composite unlabelled PL quotient. Diagram and characteristic-map data are now assigned only after the complete edge intervals have been matched, or after both complete occurrences and only whole faces have been deleted. The proof contract and owned batch strategy were synchronized; no dependency changed.
- Sources consulted: Bridson, *The geometry of the word problem*, §4.2 Lemma 4.2.3 and its proof on PDF pp. 22–23, including footnote 17 (`https://people.maths.ox.ac.uk/bridson/papers/bfs/bfs.pdf`). It supports inverse-pair removal by a plane collapse and explicitly states that the argument permits one of the edges to be a loop. The complete local disk/collar lemma and all algebraic dependencies named in Facts F1–F5 were also opened; the local proof supplies the stronger whole-occurrence, singular-face, and incidence bookkeeping.
- Checks: focused proof precheck, rendercheck, strict proof-contract check, and proof-contract and batch-manifest JSON parses passed. Actual post-repair `itemHashGuard`: `1a75afcbe90f0d386fda22808b6927ce6c87297c5a15d6b502a03696a2add133`; `b5a54fb49b3771e03238f444bdded4c6894f109a0dbf8124b47a7651bd9d3bc9` is the post-repair judge-form hash.

### `lem-singular-planar-diagrams-have-controlled-coarse-disk-thickenings`

- Rejection context: `7db40e5c7d9ad4e99aec0a8f8ca78ae765aa843bf2df51165231852d67c03919`.
- Outcome: `confirmed_fatal` (`dependency_citation`), pre-edit guard `6daf207b8d3ede5d162836498409bd996f7f450cf41ade5451c1c3f271769ec5`.
- Evidence: frozen proof step 3.1 said that one cap for each bounded graph region gave exactly `m` caps. Its cited supplier states only that the constructed diagram has at most `m` faces, and its construction explicitly permits empty relators to be omitted. Thus the equality is a false inflation of F1, even though the rest of the count needs only total incidence `I`.
- Repair: retained the saved minimal correction already present on resume: let `p` be the actual face count, state that there are exactly `p` caps with `p<=m`, and leave the incidence-based count `16E+4I` unchanged. Synchronized proof-contract step 3.1 was already present. The statement, dependencies, page, manifest and frontier input do not change.
- Sources consulted: the complete local supplier `lem-relator-expressions-give-controlled-singular-planar-diagrams`, especially its Statement and construction step 1.1, and the complete local dependencies `def-bounded-edge-coarse-triangular-filling` and `lem-finite-polygonal-disk-and-collar-surgery`. This exact inequality mismatch is settled by the local statements, so no web source was needed.
- Checks: focused proof precheck, rendercheck, strict proof-contract check, and proof-contract and batch-manifest JSON parses passed. Post-repair guard: `437a63ec1337b0e79fecdd1ccaaf3af43fb0239f39581287964f0ded6e29340e`.
- Handoff: the one Terra rejudge accepted the repaired item at context `2ac9ff031694ad8e48aa9050560a26f384ec931da0eedfb3a4132ddb96709646`; no final adjudicator was needed.

## Alerts

None.

## Handoff outcomes

- Accepted by the one Terra rejudge: `def-rescaled-ultralimit-and-asymptotic-cone`, `def-real-tree-tripods-and-geodesic-triangle-minsize`, `ex-asymptotic-cones-of-lines-and-trees`, and `ex-scaling-distinguishes-sublinear-minsize-from-bounded-perimeter`.
- Rejected by the one Terra rejudge and terminally repaired by the final adjudicator: `def-bounded-edge-coarse-triangular-filling` and `def-singular-planar-labelled-relator-diagram`.
- Accepted by the one Terra rejudge after the guard-hash correction: `lem-relator-expressions-give-controlled-singular-planar-diagrams`.
- Accepted by the one Terra rejudge: `lem-singular-planar-diagrams-have-controlled-coarse-disk-thickenings`.

## Blockers and final checks

- No owned mathematical, handoff, alert, or evidence blocker remains for group h.
- Final Step-7 guard: failed with one remaining `nonfatal-edit` error on the
  outside-group item `fs-collapse-solves-all-extension-problems`; all group-h
  changes are licensed.
- Final scope check: failed only because outside-group alert
  `s8a-88255d9a84fb7df7224ef579` on
  `tor-flatness-and-global-dimension-examples` lacks its owning-group disposition.
- Final defect-ledger check: failed only because the outside-group fatal
  adjudication on `thm-conditional-monotone-convergence` lacks a defect row.
- The operator reconciled the relator-expression hash correction inside the one
  existing group-h defect row, retaining both old and corrected exact references
  with an explicit hash-reconciliation note; the final defect-ledger check no
  longer reports that group-h row.
