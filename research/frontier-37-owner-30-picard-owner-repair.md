# Step 5 Picard owner repair: held before mutation

Run: `frontier-37-owner-30`. Exact subject: `cor-nevanlinna-picard-theorems`, Proof 13.1. Recorded 2026-10-01.

## Confirmed finding and proposed correction

Read the full corollary, the matching batch-26 contract row, `research/frontier-37-owner-30-refute-26.json`, and the complete supplier `lem-nevanlinna-exterior-three-value-extension`. Refuter-26 reports a nonfatal unlicensed inference: step 13.1 asserts that the normalized exterior function G omits the original values a1,a2,a3, though steps 2.3 and 3.2 establish omission of 0,1,infinity.

Step 2.3 sets g=M composed with f, with M(a1)=0, M(a2)=1 and M(a3)=infinity. Step 3.2 sets G(w)=g(z0+rho/w), meromorphic on |w|>1 and omitting 0,1,infinity. F6's actual supplier Statement requires a positive exterior radius R and three distinct omitted sphere values on |w|>R1 with R1>R. The normalized triple and R=1<R1=2 satisfy these hypotheses. The exact concise correction is to replace `$a_1,a_2,a_3$` by `$0,1,\infty$` in Proof 13.1 and its matching contract derivation. The Statement and supplier interface need no change.

## Writer guard and disposition

The pre-mutation disk guard detected active native `5a-adjudicate:5a-i` covering batches 7,26,27. The assertion stopped before either item or contract was written. No item or contract edit was made and no checks were run on a supposed repair. The parent orchestrator was immediately notified. Original findings and receipts remain untouched; no gates, review loop or adjudication writes were performed.

Native Alpha state at report creation: started `2026-10-01T12:09:20.878Z`, ended `None`, covers `['7', '26', '27']`.

## Current SHA-256 hashes

- `items/cor-nevanlinna-picard-theorems.md`: `45493d12ad4ea0e3f05d94d00d0eac1655ab1fa77af1b9f388008cd41798ff12`
- `research/frontier-37-owner-30-batch-26.proof-contracts.json`: `3374a3c39a6e6774182fbec61512ec90a3be0ee756d08ed570d0e9a48b957bde`
- `research/frontier-37-owner-30-refute-26.json`: `c21dcc0c6964a921de0018c0b1bf10f21a0796cf38ac3b3b2ff03608fd4b0df7`
- `items/lem-nevanlinna-exterior-three-value-extension.md`: `bf85670841a5c06cf9eb4865f12df15c8e6d375cbb3a94f6c8ee4784f9a33902`

## Next action

Wait until the native Alpha writer drains and ownership is released. Re-read current item, contract and engine evidence before applying any remaining correction. Then run only the scoped precheck, rendercheck and strict contract check and update this report with actual results.
