# Frontier-20 group c — Step-8 closure recovery

## Outcome

Handled all 11 current unadjudicated group-c tuples: 10 confirmed fatal and repaired, 1 confirmed nonfatal, and 0 false positives. Group c now has zero open rejection tuples.

## Rows handled

| item | context | outcome | evidence and repair |
|---|---|---|---|
| `def-affine-almost-simple-diagonal-product-action-and-twisted-wreath-types` | `604240bea1334d811baec4f813641caecf7baa4e709ba9b6d4df048bf9d13b12` | `confirmed_fatal` | The product-action clause omits \(\ell\ge2\), so its types overlap: with \(\ell=1\), \(H=A_5\), and \(K=1\), the natural \(A_5\)-action satisfies that clause but is almost simple. This contradicts the page’s claimed five-type exclusivity. Repair: Added l>=2 to keep product action disjoint from the almost-simple branch. |
| `ex-radical-intersection-computation` | `da72ec216d1588088b2347f0c461b5faac90935c93bcc2ab157ffac162b3efa6` | `confirmed_fatal` | Step 2.1 writes \(\bigcap_{x\in\mathfrak p}\mathfrak p\), which is ill-formed: \(x\) indexes the intersection while \(\mathfrak p\) is free. It does not state the intersection over prime ideals containing \(I\). Repair: Replaced the free-variable intersection with the exact intersection over primes containing I, then primes containing x. |
| `ex-separating-prime-for-a-missing-radical-element` | `5b4fca0af4d0038f1d6a49db0ed542ae2deeea88a1c1fa511ce3e0050a3e5b99` | `confirmed_nonfatal` | Step 2.1 says \((x)\) works as the separating prime but establishes only that it contains \(x^2\) and avoids \(y\); it never proves or cites that \((x)\) is prime in \(k[x,y]\). The ideal (x) is prime because k[x,y]/(x) is isomorphic to the integral domain k[y]; this is an immediate elementary bridge, so no content changed on this row. |
| `ex-two-regular-minimal-normal-subgroups` | `c5e271204b6e37e8718899c399d86e85cdb156d05c39a89d9741fe5d9f0dc257` | `confirmed_fatal` | [L1] omits the finiteness hypothesis of its cited lemma. [[lem-two-distinct-minimal-normal-subgroups-of-a-primitive-group-are-regular]] applies to finite faithful primitive actions, whereas [L1] asserts the result for all faithful primitive groups. Repair: Restored finiteness in the regularity citation. |
| `fs-every-primitive-group-has-a-unique-minimal-normal-subgroup` | `c294f60b4c0531c6a65d8db731ab78bf9a88f764c88b3113fd76d37c6cbaafeb` | `confirmed_fatal` | [L1] inaccurately restates its cited lemma: [[lem-two-distinct-minimal-normal-subgroups-of-a-primitive-group-are-regular]] requires the action to be finite and faithful, but [L1] asserts regularity for arbitrary primitive groups. Repair: Restored the finite and faithful hypotheses in the regularity citation. |
| `lem-distinct-minimal-normal-subgroups-centralize-one-another` | `4c172de66b852a72218d4de67e9bf37006ff1783ec8afc4c1d60a7b0b40fdb89` | `confirmed_fatal` | The statement quantifies over an arbitrary group \(G\), but [[def-minimal-normal-subgroup-and-socle]] defines “minimal normal subgroup” only for finite groups. Thus the hypotheses on \(M,N\) are outside the supplied definition’s scope; add finiteness or broaden that definition. Repair: Added finiteness so minimal normal subgroup is used within the local definition's domain. |
| `lem-two-distinct-minimal-normal-subgroups-of-a-primitive-group-are-regular` | `2fcf3053cc0dd2f70e9828cc2aaeaad2588aadd79d64f441f126193fdbee9fa6` | `confirmed_fatal` | [L2] omits the finiteness hypothesis of its cited theorem. [[thm-minimal-normal-subgroups-of-faithful-primitive-groups-are-transitive]] applies to finite faithful primitive actions, whereas [L2] asserts transitivity for all faithful primitive groups. Repair: Restored finiteness in the cited transitivity theorem. |
| `prop-socle-is-characteristic-and-admits-a-direct-product-decomposition` | `a387e32dec77ada8de406112faeb4d5a1c2c1c7d8681dce446379d603c5da391` | `confirmed_fatal` | Step 2.1 applies [L2] to each minimal normal factor \(N_i\) without establishing that \(N_i\) is characteristically simple. That requires [[lem-minimal-normal-subgroups-of-finite-groups-are-characteristically-simple]], which this item neither cites nor proves. Repair: Added the minimal-normal-implies-characteristically-simple dependency and used it before the structure theorem. |
| `prop-unique-abelian-minimal-normal-subgroup-gives-affine-type` | `33e9b123d72d3e987a1470bce8a7db7be77f3d50e927d63decbc3e610095f502` | `confirmed_fatal` | Step 1.2 concludes \(V\cong(\mathbb F_p)^d\) from [A1], but [A1] only gives that \(V\) is elementary abelian. The required vector-space and basis results are listed dependencies but never cited or proved, so this conclusion and the later linear action are unsupported. Repair: Cited the canonical F_p-vector-space structure and finite-basis theorem before identifying V with F_p^d. |
| `thm-hyperbolic-groups-admit-finite-dehn-presentations` | `d009beba824d304a208e5b94f465ac53e0e1d605ee8cfb933635611b5a818340` | `confirmed_fatal` | Step 2.1 calls $uv^{-1}$ a relator in $R$, but $R$ contains only freely reduced words. Even with $u,v$ reduced, cancellation at their junction can make $uv^{-1}$ nonreduced; reducing it need not retain $u$ as a long subword. Thus the local-geodesic conclusion is unproved. Repair: Chose a shortest nongeodesic subword and proved the comparison loop is freely and cyclically reduced, preserving the long half. |
| `thm-non-elementary-hyperbolic-groups-contain-a-rank-two-free-subgroup` | `11ae5e86e719db50f92e78bf0b103ad2204fedcf76e29eed122ab4c825391eda` | `confirmed_fatal` | [L1] misstates its citations: the cited theorem states undistortion, and Morse stability compares quasi-geodesics; neither cited Statement asserts that every infinite-order element has a quasi-axis. Thus [L1] is stronger than the supplied dependencies. Repair: Removed the unsupported quasi-axis restatement and the unused citation from the ping-pong step. |

## Licensed repairs

For every fatal row, the `item_sha256` in the appended adjudication is the pre-edit guard hash. The ten exact rows are represented in `research/frontier-20-alpha-c-step8-recovery-ledger-rows.json` and each has exactly one defect-ledger owner.

## Rejudge targets

`def-affine-almost-simple-diagonal-product-action-and-twisted-wreath-types`, `ex-radical-intersection-computation`, `ex-two-regular-minimal-normal-subgroups`, `fs-every-primitive-group-has-a-unique-minimal-normal-subgroup`, `lem-distinct-minimal-normal-subgroups-centralize-one-another`, `lem-two-distinct-minimal-normal-subgroups-of-a-primitive-group-are-regular`, `prop-socle-is-characteristic-and-admits-a-direct-product-decomposition`, `prop-unique-abelian-minimal-normal-subgroup-gives-affine-type`, `thm-hyperbolic-groups-admit-finite-dehn-presentations`, `thm-non-elementary-hyperbolic-groups-contain-a-rank-two-free-subgroup`.

## Cross-group alerts

None.

## Changed files

- 10 owned item files: `items/def-affine-almost-simple-diagonal-product-action-and-twisted-wreath-types.md`, `items/ex-radical-intersection-computation.md`, `items/ex-two-regular-minimal-normal-subgroups.md`, `items/fs-every-primitive-group-has-a-unique-minimal-normal-subgroup.md`, `items/lem-distinct-minimal-normal-subgroups-centralize-one-another.md`, `items/lem-two-distinct-minimal-normal-subgroups-of-a-primitive-group-are-regular.md`, `items/prop-socle-is-characteristic-and-admits-a-direct-product-decomposition.md`, `items/prop-unique-abelian-minimal-normal-subgroup-gives-affine-type.md`, `items/thm-hyperbolic-groups-admit-finite-dehn-presentations.md`, `items/thm-non-elementary-hyperbolic-groups-contain-a-rank-two-free-subgroup.md`.
- `research/frontier-20-batch-4.proof-contracts.json` and `research/frontier-20-batch-6.proof-contracts.json`, plus the mechanically re-merged `research/frontier-20-proof-contracts.json`.
- Appended the 11 exact outcomes to `research/frontier-20-judge-adjudications.jsonl`.
- Appended 10 matching defect rows through `tools/defect-ledger.mjs append`; the generated defect-ledger view was refreshed.
- `research/frontier-20-alpha-c-step8-recovery-ledger-rows.json` and this recovery report.

## Targeted checks

- Precheck: all 9 repaired proof-bearing items pass.
- Strict proof contract: 10/10 affected or downstream entries pass with zero errors and zero warnings.
- Citation fidelity over batches 4 and 6: 159 citations checked, no missing quote and no widening candidate.
- Render check: all 10 repaired item files pass YAML, delimiter, and KaTeX validation.
- Content policy: 122 scoped items, zero errors and zero warnings.
- Batch-6 risk report with required reviews: 50 items routed, zero errors.
- Step-8 guard: 121/121 item changes remain licensed by exact fatal adjudications or terminal resolutions.
- Step-8 scope check: group c has zero open rejection tuples and no cross-group alert. The run-wide check currently reports 20 open tuples owned by other groups.

## Blockers

None within group c. The engine owns any further targeted rejudge; the remaining 20 open tuples are outside this group's ownership.
