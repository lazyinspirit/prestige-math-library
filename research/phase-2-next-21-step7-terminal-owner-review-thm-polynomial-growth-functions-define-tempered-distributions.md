# Owner-review draft: `thm-polynomial-growth-functions-define-tempered-distributions`

Disposition: **repair-required**. This is a read-only review draft, not a Step-7 verdict or terminal record.

Terra context: `56735a8b4e6b9fe3f5c45cdd2d312d4987dae73cd0d326777f595de151e5dd41`. Terra-reviewed item SHA-256: `3e2471bf6754db0d8aff689b39351c3d10dae3cef993a3cf97c9914df561f7e9`.

Mathematical basis: Step 5.1 says |x|^r is a regular tempered example for −n<r<0, but |0|^r is undefined/infinite. The cited local-integrability definition requires a complex-valued function on all of R^n, even though altering a null singleton changes no distribution.

Action: For negative r set f_r(0)=0 (or any specified complex value), with f_r(x)=|x|^r for x≠0; identify this as an a.e. representative before applying local integrability and Step 2.1.

## Repair applied; pending owner rejudge

Current repaired item SHA-256: `b11ec883188febff7f4454172e8899711bbe8024068d6c11168c573b0e228e79`. Defined the negative-power radial example at x=0 by a finite value, noted null-set invariance, and confined the r>−n radial calculation to n≥1.

Focused precheck and rendercheck passed for the 12-item B/C repair set. Strict proof contracts passed for Batches 2, 5, and 6 with zero errors/warnings; Batch 3 passed with zero errors and one pre-existing unrelated shotgun-bracket warning. No verdict or terminal record is issued by this draft.
