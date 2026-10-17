# Rounded uniformization tail certificate — focused cycle 1

Confirmed defect: the current Definition allows a backend upper bound T larger than epsilon while its final paragraph promises T<=epsilon. A validated acceptance comparison bounds the exact m G, not every chosen outward enclosure.

For the reported one-state example, Q=(0), p0=(1), nu=t=epsilon=B=1. Then m=1, mu=1, Kmax=0, G_0(1)=2/e<1 (the exponential series gives e>2). Thus K=0 passes. The backend may supply raw upper bound 2>=2/e, which violates 2<=epsilon. This is an analytic calculation; no fixture or test was executed. Whatever valid vector/error certificate the backend supplies does not cure that scalar contradiction.

## Minimal proved repair

Keep all backend requirements and all accepted scalar/vector certificates. Call its former raw bound U>=mG, with no upper size restriction. After the existing validated comparison G<=epsilon/m succeeds, return T:=epsilon in rounded arithmetic, copying the input budget. Return T=mG in exact arithmetic as before. No sharper backend enclosure, comparison on U, extra failure, arithmetic-operation claim, new supplier, new pair, or change to the vector recurrence is introduced. All admitted backend/input scope remains intact. The zero-time/rate branch remains (p0,0,0), and m(K+1)<=B is unchanged.

Proof: m>=1 and accepted G<=epsilon/m imply mG<=epsilon=T. The existing truncation theorem gives the exact split error <=mG and then, by its triangle inequality ledger, total error <=T+E_alg. Hence returned T<=epsilon and the genuine total-error certificate both hold for every admitted backend, however loose U is. The proposed theorem Proof5.1 records this argument explicitly; its Statement is unchanged. This does not promise total error <=epsilon without accounting for E_alg, nor a successful adaptive projection for every backend.

Choosing epsilon is deliberate: min(U,epsilon) could provide a tighter number but may demand an additional endpoint comparison/representation from arbitrary admitted backends. Copying an already supplied budget requires no such additional contract. Raw U remains required, so the repair also does not relax existing backend obligations. Rounded T may be less sharp than a small original raw bound; adaptive consumers already allow inconclusive returns. No guaranteed successful outcome is removed.

## Exact proposal and future integration

`before/` contains full current changed sources, full actual suppliers/consumers, contextual pages, batch47 manifest/contracts/cross-batch rows and original Step4 context. `proposed/items/` and `diffs/` contain the two exact source proposals. `future-metadata-operations.json` contains exact before/after target-node guards for the batch47 and merged truncation-theorem contract: refresh its algorithm Definition quotation and Proof5.1 derivation claim. No batch47 manifest dependency/kind/title/order change is needed. Cross-batch operator-interface row remains valid. Current root algorithm contract has no citations/derivations to mirror; its historical Alpha risk-review note is not independent acceptance of this new concern and must not be presented as a fresh review. Native Step5 owner should record this concern and repair in the native adjudication route and rebuild affected generated evidence through normal tooling after authorization. Do not mutate original Step4 digest, original native judgments, touch records, or hash/acceptance ledgers as part of this proposal.

`consumer-dispositions.json` documents the entire actual direct/indirect item closure and nonlogical page/context uses. No consumer is delegated to another reviewer. The adaptive algorithm and its soundness theorem need no source edits; the exact birth-death example is unchanged. The stationary residual and PDS contextual branches do not import this tail-certificate choice.

## Original native status and limits

`native-evidence/original-luna-observation.json` captures the observed native 4-judge state and batch47 Alpha read dispatch. At capture, no original judge.jsonl or judge-attempts.jsonl row named either changed item. This is not a pass, rejection, or substitute Luna verdict. The original would-be-fatal concern remains verbatim in the archived Step4 context. Proper native Step5 owner integration and later actual native adjudication are still owed; no current-input recertification is claimed.

Research-only: no canonical source/metadata/tool/ledger/control writes, hashes, checks, tests, gates, or dispatches performed. Frozen native readers remain undisturbed. Final formatting/layout and native binding are future owner obligations after an authorized apply, not outcomes claimed here.
