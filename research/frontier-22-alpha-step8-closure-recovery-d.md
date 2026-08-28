# Frontier-22 group d — Step-8 rejudge adjudication recovery

## Rows handled

| item | context | pre-edit guard hash | outcome | disposition |
|---|---|---|---|---|
| `fs-arzela-ascoli-alone-proves-montel` | `83d2d9b15db08597988e16227838c2a1cbe06bed11c202ea4362fef4e6773925` | `26f4c13d225a8ffaec10fa0dbdf461362abcb469f8ec6bf2fb452d7c8bc88416` | `confirmed_nonfatal` | The cited compact-domain Ascoli corollary assumes Choice and a nonempty domain, which [L1] omits. This is a citation-hypothesis restatement gap; the refutation's mathematical point remains correct. No edit. |
| `thm-mobius-preserves-circlines-and-reflections` | `160101f1d2c3fa7fd3b758792aef98f17b0325434c06ddd5aeafbf905a9effa6` | `de38ea44879d9ea9a3ab833e25d240e3d1498a6025b89c40cfb2893ddcca0390` | `confirmed_nonfatal` | Step 1.1 needs surjectivity for the reverse inclusion. The already-stated group fact [L4] supplies the inverse, but the step omits that citation. This is an immediately closable proof-tag gap. No edit. |

## Licensed repairs and rejudge targets

None. Both exact rejudge rejections are nonfatal, so neither licenses a content, contract, impact, verification, or defect-ledger change. There are no group-d rejudge targets from these rows.

## Cross-group alerts

None.

## Changed files

- `research/frontier-22-judge-adjudications.jsonl` — appended the two exact `confirmed_nonfatal` outcomes.
- `research/frontier-22-alpha-step8-closure-recovery-d.md` — this recovery report.

## Checks

- The two appended tuples exact-match the envelope's live group-d rejection tuples.
- Both rows carry the current pre-edit guard hash.
- No group-d item or documentary contract was edited.
- Judge-closure validation found 425/425 current verdict sets, 0 items needing rejudge, 0 open fatal rows, and no remaining unadjudicated group-d tuple. The full run still had 15 unadjudicated rows owned by other groups.

## Blockers

None within group d. Remaining unadjudicated rows, if any, are owned by other groups and were left untouched.
