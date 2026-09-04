# Final-adjudicator evidence: `ex-the-regular-module-of-cp-in-characteristic-p`

Disposition: `accepted-after-review`

Source status: `familiar`. No external verification was needed. The structure of a finite $p$-group algebra in characteristic $p$, the idempotent criterion for decomposing a regular module, and the correspondence between simple quotients and maximal left ideals are familiar standard facts.

## Independent review

I inspected the current example and its direct dependency, the modular-representations A/B pages, the batch-2 manifest and coverage notes, both proof-contract copies and the `risk_review`, the Step-6 reader/refuter evidence, the Step-7 group context, both frozen judge rejections, and both Alpha adjudications and repairs.

The first judge correctly found that the original [L1] dropped a splitting-field hypothesis from the cited regular-module decomposition theorem. Alpha's first repair switched [L1] to the arbitrary-field localness theorem, but the next frozen context still invoked the splitting-field-only decomposition as [L2]. The second judge correctly rejected that route. Alpha's final repair removed [L2] and the corresponding dependency entirely, then proved both conclusions directly from localness. The batch and merged proof contracts now quote the exact arbitrary-field theorem and record the current two-step proof; their parsed entries are identical.

The final proof is correct. Put $A=kC_p$. Since $C_p$ is a finite $p$-group and $\operatorname{char}k=p$, `thm-kg-is-local-iff-g-is-a-p-group` applies over an arbitrary field and shows that $A$ is local. If the left regular module decomposed nontrivially, projection onto a proper nonzero summand would be a nontrivial idempotent in
$\operatorname{End}_A({}_AA)\cong A^{\mathrm{op}}$.
This is the same underlying idempotent equation as in $A$, while a local ring has no idempotents other than $0$ and $1$. Hence the regular module is indecomposable.

The augmentation ideal $I$ satisfies $A/I\cong k$, so it is a maximal left ideal. Locality makes it the unique maximal left ideal. Every simple quotient of the regular module is $A/M$ for the maximal left ideal given by its kernel, hence is isomorphic to $A/I\cong k$; the augmentation action on that quotient is the trivial $C_p$-action. This proves uniqueness up to the usual isomorphism convention for quotient modules and uses no splitting-field assumption.

The current single dependency is the exact load-bearing result. The older batch-manifest edge to the splitting-field regular-decomposition theorem is intentionally absent from the repaired item, consistent with the second adjudication. No dependency file or other run item was changed.

## Focused checks

- `node tools/tsx-run.mjs tools/precheck.mts items/ex-the-regular-module-of-cp-in-characteristic-p.md` passed 1/1.
- `node tools/rendercheck.mjs items/ex-the-regular-module-of-cp-in-characteristic-p.md` exited 0.
- The item-specific proof-contract checks against both `research/frontier-29-batch-2.proof-contracts.json` and `research/frontier-29-proof-contracts.json` exited 0 with no errors or warnings.
- `node tools/depcheck.mjs --quiet` exited 0 and reported no cycles, unresolved references, or draft items on published pages.
- The exact current judge hash computation returned context SHA-256 `374b45d185875b3aa4b45a555a23519fbed5832bce75882f5b5f726c2297ea21` and item SHA-256 `8f6eef788be965419a7c32a2f2105daea95e8fb210218bee52ba0e00931e3c55`.

No item, dependency, contract, or metadata repair is required.

Currency note: queue position 3 had to be resealed after a later same-pair dependency repair changed its judge context. This position-4 item and its context hash did not change, but its terminal receipt was recorded again afterward to preserve the queue's chronological predecessor invariant.
