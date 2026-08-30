# frontier-24 - Step 8 closure recovery, group a, round 1

## Summary

Adjudicated all 10 exact live tuples assigned to group a: 1
`confirmed_fatal`, 9 `confirmed_nonfatal`, and 0 `false_positive`.
Only the fatal composite-sequence corollary was edited. No incoming alert,
outgoing cross-group finding, or published-item repair arose.

## Outcomes

| item | context_sha256 | pre-edit guard hash | outcome | disposition |
|---|---|---|---|---|
| `cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake` | `c26b4beedf9507d241ac26d269465fc4f09bb4da4e0be7c3a4a7f9318b45a804` | `d499b32ec13fed39723efbdb5d61e1888270cb758fb45b00e3c232c13ddafac5` | `confirmed_fatal` | The split-sequence middle matrix used the wrong sign, so its kernel and cokernel identifications negated canonical comparison maps. Repaired and targeted for rejudge. |
| `ex-noether-normalisation-triangular-change` | `a973ac0d973dd9f596778418d0e67a98b6ad68db08146effb177763ebb1cc754` | `dd5602d8a3001af9cd08b3168d69b5ee38c7b9b2807bc9529260cf7908b83488` | `confirmed_nonfatal` | Reducing powers modulo the displayed monic quadratic immediately spans the algebra by `1` and `y`; no content edit under the fatal-only rule. |
| `ex-the-published-module-five-lemma-as-an-instance` | `6e0cb442af5fd6ad9da58e13b7e5ec36722d9962e87953c0fa7b072b0e4b6fa5` | `c1316906761d2a1f98471bdd036cdedc2bee5a97d0e70cb735402f9992c37d5e` | `confirmed_nonfatal` | The module-category abelianity premise is standard and immediately closable; no content edit under the fatal-only rule. |
| `thm-four-lemma-in-an-abelian-category` | `0dd77a2a4c5f389d6b3e4a79ed8298f5c321886cce2b925299c8ae0e394d06af` | `820052595d8ed5c997208d77503a4568592542075d1056b86016b67a6995210c` | `confirmed_nonfatal` | A finite common epic refinement follows by iterating the cited two-witness pullback construction; no content edit under the fatal-only rule. |
| `thm-nine-lemma-in-an-abelian-category` | `f76d1a8cce9bffe25d34c976675e0bd91bdf61c1bf5de63460a197f40405795d` | `9f575d319915215f9192ee14245819f6123d7f9d45c5f28f04e3862fcf02ddca` | `confirmed_nonfatal` | A finite common epic refinement follows by iteration of the cited pullback refinement; no content edit under the fatal-only rule. |
| `thm-nine-lemma-variants-by-which-rows-are-assumed-exact` | `1ec9fc27d6de2452b9e59a52e67a0f2c75f37e528a0c45d5d7ab31f667df8aa9` | `26f3b6b6cd07872cd76bafefead0f49e5f6dc173c326c503c43451b53b08817c` | `confirmed_nonfatal` | The two finite refinements are elementary iterations of the cited pullback construction; no content edit under the fatal-only rule. |
| `thm-sharp-nine-lemma` | `040a204068c7e49d2af6a741fb46d471d6a8df81491e3de157e3cc046e30e777` | `503035c012e873c4a3da19f6757c8d0a8abdf27f287f0319c0cdc8268100f61b` | `confirmed_nonfatal` | The finite common refinement is an immediate induction on the cited two-witness construction; no content edit under the fatal-only rule. |
| `thm-short-five-lemma-in-an-abelian-category` | `e6e3dc68088a23118c12e7e17f99d3bfeef32e1795b8bc30e16fcb2b0ea1fe5b` | `afced9b849da07751d6264313d97be9ead74e7419570fc8067024ca73f4f5d15` | `confirmed_nonfatal` | The required finite refinement follows immediately by iterating the cited transitivity pullback; no content edit under the fatal-only rule. |
| `thm-symmetric-nine-lemma` | `39f68cc98e21cecba8a4368a5d36c7417fcfb89b9ac39e63e1dcca46b5049d35` | `66aa00ad1c194d6b439bcd5a4f1fd95e2bf524392b4a0b70301f03add5eafc2b` | `confirmed_nonfatal` | Exactness is self-dual in an abelian category; the omitted citation is an immediately closable local gap, so no content edit is licensed. |
| `thm-weak-four-lemma-with-the-exactness-hypotheses-named` | `0e1025fc33377b29ff0e1f1769d02b5b7bf62efedd2a520c0157099a9bec344d` | `20cc155ea42ce35128fdba2b369a0144898ba8aa8423915e1212d60f788034b5` | `confirmed_nonfatal` | A finite common epic refinement follows by iteration of the cited pullback construction; no content edit under the fatal-only rule. |

## Licensed repair

`cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake` now uses

$$m(a,b)=(f(a)-b,g(b)).$$

The identifications
`a -> (a,f(a))` for the kernel and
`(b,c) -> [c+g(b)]` for the cokernel preserve the canonical maps of the
composite kernel-cokernel sequence without hidden signs.

Rejudge target:
`cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake`.

## Changed files

- `items/cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake.md`
- `items/thm-short-five-lemma-in-an-abelian-category.md` - removed the stale unused member-epicity fact after the repaired proof switched that half to duality
- `research/frontier-24-judge-adjudications.jsonl` - appended 10 exact outcomes
- `research/frontier-24-alpha-a-rejudge-ledger-rows.json`
- `research/defect-ledger.jsonl` and generated `research/DEFECT-LEDGER.md`
- `research/frontier-24-batch-7.proof-contracts.json`
- `research/frontier-24-proof-contracts.json`
- `research/frontier-24-alpha-a-preflight-risk-reviews.json`
- `research/frontier-24-alpha-step8-closure-recovery-a.md`

## Checks

- Exact evidence join: 10/10 rows answered, 1 fatal, 9 nonfatal, 0 evidence errors, 0 surplus rows.
- Focused `precheck`: 2/2 changed or documentary-adjusted phase-format items passed.
- Focused `rendercheck`: 2/2 items passed.
- Focused strict proof contract: 10/10 assigned items passed with 0 errors and 0 warnings.
- Focused required risk review: 10/10 assigned items routed with 0 errors.
- `depcheck --quiet`: passed with repository-wide legacy warnings only.
- `defect-ledger validate --run frontier-24`: 216 rows checked, 0 errors.
- Focused `git diff --check`: passed.

## Alerts and blockers

No group-a alert or ownership blocker remains. The repaired composite
corollary requires the engine-owned targeted rejudge. The final scope check
reported zero open rejections and zero cross-group alerts.
