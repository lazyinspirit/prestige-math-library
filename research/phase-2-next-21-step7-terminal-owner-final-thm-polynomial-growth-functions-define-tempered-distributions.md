# Step 7 terminal owner review — thm-polynomial-growth-functions-define-tempered-distributions

Disposition: repaired. Frozen Terra rejection: Step 5.1 is ill-typed for -n<r<0: |x|^r is not a finite-valued function at x=0, whereas the supplied local-integrability definition requires f:R^n→C. It must explicitly assign an arbitrary value at 0 (or speak of an a.e. representative).

Current raw item SHA-256: b11ec883188febff7f4454172e8899711bbe8024068d6c11168c573b0e228e79. The current item, its batch manifest and strict proof contract have been reconciled. This is owner mathematical evidence for the single paid-cycle closure, not a new judge verdict.

## Mathematical basis

The following completed specialist review and repair note is adopted as the item-specific owner mathematical basis; its earlier DRAFT label refers only to the prior absence of an owner terminal record.

# Owner-review draft: `thm-polynomial-growth-functions-define-tempered-distributions`

Disposition: **repair-required**. This is a read-only review draft, not a Step-7 verdict or terminal record.

Terra context: `56735a8b4e6b9fe3f5c45cdd2d312d4987dae73cd0d326777f595de151e5dd41`. Terra-reviewed item SHA-256: `3e2471bf6754db0d8aff689b39351c3d10dae3cef993a3cf97c9914df561f7e9`.

Mathematical basis: Step 5.1 says |x|^r is a regular tempered example for −n<r<0, but |0|^r is undefined/infinite. The cited local-integrability definition requires a complex-valued function on all of R^n, even though altering a null singleton changes no distribution.

Action: For negative r set f_r(0)=0 (or any specified complex value), with f_r(x)=|x|^r for x≠0; identify this as an a.e. representative before applying local integrability and Step 2.1.

## Repair applied; pending owner rejudge

Current repaired item SHA-256: `b11ec883188febff7f4454172e8899711bbe8024068d6c11168c573b0e228e79`. Defined the negative-power radial example at x=0 by a finite value, noted null-set invariance, and confined the r>−n radial calculation to n≥1.

Focused precheck and rendercheck passed for the 12-item B/C repair set. Strict proof contracts passed for Batches 2, 5, and 6 with zero errors/warnings; Batch 3 passed with zero errors and one pre-existing unrelated shotgun-bracket warning. No verdict or terminal record is issued by this draft.


## Owner conclusion

The exact rejected defect is either repaired in the current item or, for an unchanged item, rejected after a concrete source-level review documented above. The current item remains subject to the run's structural gates; any later mathematical change invalidates this hash-bound owner resolution.
