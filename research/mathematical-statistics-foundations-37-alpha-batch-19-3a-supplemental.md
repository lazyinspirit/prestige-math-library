# Batch 19 Step 3a supplemental ownership review

Run: `mathematical-statistics-foundations-37`; group: `batch-19`.

This focused continuation addresses only existing defect `msf37-batch19-3a-mixture-floor-chain`, subject `lem-gaussian-sparse-covariance-mixture-lower-bound`. It supplies no new reader/refuter sweep or replacement historical coverage. The original narrative, result, decision object, scope and ledger history are preserved.

## Evidence examined

Read CLAUDE.md, README.md, the supplemental task, original generated item-order task, original native report and successful result, and Step 3 scope 19. Read the complete current mixture carrier, its owning contract entry (including corrected step 1.1 mirror and completed risk_review), its current batch-19 page-manifest entry, and the exact existing defect-ledger row. Read the actual Definition of `def-weak-lq-sparse-covariance-class` for the radius application. Inspected the supplemental-decision rules in tools/step3-scope.mjs lines 1364–1435. No external source argument is needed to establish or assess this elementary floor correction; the original Cai–Zhou source comparison remains original evidence, not a fresh source-reading claim.

## Mathematical finding and repair assessment

The original report and exact ledger row record the old chain k=floor(x)>=x/2>=2 under x>=2. The final comparison is false at x=2, where x/2=1. This is a real arithmetic defect, but nonfatal: the required conclusion k>=2 follows directly from x>=2, independently of the valid lower bound k>=x/2. For all real x>=2, floor(x)>=2 and floor(x)>x-1>=x/2. At x=2 these give k=2 and k>=1; on 2<x<3 they give k=2 with x/2<3/2. Integer and noninteger cases therefore require no strengthened hypothesis.

The current step 1.1 states both valid bounds separately. The owning contract derivation states the same correction. Traced their actual downstream uses in the current carrier: k>=2 supports the epsilon sqrt(k) estimate in step 3.1 and epsilon^2 k=(k epsilon)^2/k in step 4.1; k>=x/2 gives k>=c/[4(s epsilon)^q] in step 8.1. Neither use requires x/2>=2. The final conversion yields (s epsilon k)^2/16 >= c^2(s epsilon)^(2-2q)/256 = c^2(sv)^(2-2q)a^(1-q)/256, a positive constant of the claimed form. The upper bound k<=x still gives 2k(s epsilon)^q<=c in step 1.1, with the actual weak-lq Definition supporting class membership; at q=0 the convention gives 2k<=c. The branch excludes c=0 and uses positive s and epsilon. No Statement, Definition or dependency change is necessary for this correction.

Verdict: `confirmed_nonfatal`, consistent with the existing row's `nonfatal` severity and `fixed` disposition. Repair confidence is 1 for this exact local correction and its traced uses. This confidence does not purport to replace the original independent review of all unrelated mixture estimates. No mathematical uncertainty remains for the assigned floor-chain defect.

## Supplemental decision and handoff

Appended exactly `gate:msf37-batch19-3a-mixture-floor-chain`, with route `gate`, subject `lem-gaussian-sparse-covariance-mixture-lower-bound`, and sole defect ID `msf37-batch19-3a-mixture-floor-chain`. The subject occurs once in the owning current page manifest. The entry cites this report and unchanged original report/ledger evidence. The original touched decision, including its evidence and seal, is retained verbatim.

No source/item/contract/manifest/ledger changes, new defect rows, tests, gates, hashes, stamps, judge cycle or workflow controls were performed. Proof-layout is inapplicable because no item was edited. Owner archival/authenticated-continuation operations were not performed or certified by this Alpha review; current subject sealing, append-only adjudication_ref reconciliation and native battery resumption remain root-owned.
