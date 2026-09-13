# Step 7 terminal owner review — lem-free-cyclic-resolution-and-transfer-for-power-operations

Disposition: repaired. Frozen Terra rejection: F3 inaccurately restates its dependency: it defines an external product using a chain homotopy inverse, not a chain diagonal, and explicitly makes no cup-product/ring assertion. Thus it does not license step 4.1's cup-product evaluation.

Current raw item SHA-256: 9ac065aaffe58f12a081bcfbfea93d8b91f81f30d5bc0391fd8bdc6421892cc9. The current item, its batch manifest and strict proof contract have been reconciled. This is owner mathematical evidence for the single paid-cycle closure, not a new judge verdict.

## Mathematical basis

The following completed specialist review and repair note is adopted as the item-specific owner mathematical basis; its earlier DRAFT label refers only to the prior absence of an owner terminal record.

# Owner-review draft: `lem-free-cyclic-resolution-and-transfer-for-power-operations`

Disposition: **repair-required**. This is a read-only review draft, not a Step-7 verdict or terminal record.

Terra context: `54b2ced76658b4389cb782e5f056ad49f99242199ac590f2fb5ce4443be081b4`. Terra-reviewed item SHA-256: `443a5a5297bc54418e7f6f13a5281fe2968aba3f88c04a30083c3103e5bd40e6`.

Mathematical basis: F3 says `def-additive-singular-cohomology-cross-product` uses tensor evaluation followed by a chain diagonal and licenses cup products. Its actual Definition uses the no-extra-sign tensor functional J followed by a chain homotopy inverse of shuffle, and explicitly disclaims cup-product/ring assertions. Step 4.1’s cyclic diagonal and ring calculation instead come from the explicitly cited Steenrod–Epstein diagonal on the cyclic resolution.

Action: Rewrite F3 to assert only the no-extra-sign tensor-evaluation convention supplied by that Definition. In Step 4.1 attribute the cup product to the locally displayed equivariant diagonal and primary Steenrod–Epstein chain-map result, then verify the displayed coefficient products directly.

## Repair applied; pending owner rejudge

Current repaired item SHA-256: `9ac065aaffe58f12a081bcfbfea93d8b91f81f30d5bc0391fd8bdc6421892cc9`. Narrowed F3 to the additive tensor-evaluation functional actually defined by its supplier. Step 4.1 explicitly obtains the cyclic internal diagonal from Steenrod–Epstein V §5, so the ring computation no longer misattributes it to F3.

Focused precheck and rendercheck passed for the 12-item B/C repair set. Strict proof contracts passed for Batches 2, 5, and 6 with zero errors/warnings; Batch 3 passed with zero errors and one pre-existing unrelated shotgun-bracket warning. No verdict or terminal record is issued by this draft.


## Owner conclusion

The exact rejected defect is either repaired in the current item or, for an unchanged item, rejected after a concrete source-level review documented above. The current item remains subject to the run's structural gates; any later mathematical change invalidates this hash-bound owner resolution.
