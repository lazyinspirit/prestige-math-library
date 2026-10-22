# Bounded fixture repair: stopped

Added `trueEmpty=false` only to the synthetic fixture; exactly the two positive collection tests opt in. Unit 1 now has original `keep:true` before pack binding, while unit 2 and historical rejection defaults remain unchanged. No production guard changed.

The requested expanded suite ran: **335 passed, 2 failed, 337 total**, exit 1. Both tests get past the true-empty guard and now fail `assert.ok(receipt.external_supplier_changes.includes(id))` at lines 90 and 99.

The fixture freezes `thm-published` inside its frontier, whereas collection includes a changed ID in `external_supplier_changes` only when it is outside that frontier (`step5-workflow.mjs:1513`). The proposed option-only repair therefore does not complete the regression fix. Per the explicit one-repair/stop instruction, no further fixture model, assertion, or production change was attempted. The minimal candidate diff remains for root review.

The JSON records the exact suite command, failures and scope. No native artifacts, runtime state, content sources, registry, ledger or admission records were written.
