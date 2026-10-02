# Frontier 37 owner 30: Specht Gram owner repair

Date: 2026-10-01. Assigned scope: `lem-specht-gram-gcd-detects-p-regularity`, its batch-23 proof-contract row, and this report. Both completed refuter-23 findings were independently confirmed after reading the entire lemma and the published tabloid, column-stabilizer and polytabloid definitions.

## Guard and current state

No source or contract mutation has been performed. Native status immediately before the intended edit, updated 11:31:42 UTC, showed `5a-g (covers 5, 15, 23) — running (observed)`. The parent was informed and this lane held to avoid competing with Alpha. Refuter findings and engine evidence remain unchanged; no gate or control was touched. The proposed repairs below await Alpha draining and parent coordination.

## Confirmed defects and exact proposed repairs

1. Step 1.1's displayed formula gives a right action: `π⋆(ρ⋆T)=(ρπ)⋆T`. Replace the left-action description with that identity and the correct right-action description. Leave its row-image formula and all later formulas unchanged. Freeness and the orbit count remain valid for this action.
2. Step 1.4's equal row-image sets do not alone imply equality of permutations. The following argument supplies the missing column conditions. Put `A_i=row_i(t)` and, for a label `y`, let `ℓ(y)` and `c(y)` be the length of its row and its column index in t. Assume `γ∈C_t`, `δ∈C_(t*)`, and `γ(A_i)=δ(A_i)=B_i`. Set `j=λ_i`. Since γ preserves t columns, `Σ_(y∈B_i)c(y)=j(j+1)/2`. Since δ preserves reversed columns, `Σ_(y∈B_i)(ℓ(y)+1-c(y))=j(j+1)/2`. Adding gives `Σ_(y∈B_i)ℓ(y)=j²`. Thus every row of length j is mapped by δ to j labels whose row lengths average j. For the largest row length, every target length is at most j, hence all are j. Descend through distinct row lengths: the longer-row labels are already fully occupied by the bijective images of longer rows, so all remaining target lengths are at most the current j, and the same average identity forces equality. Consequently δ preserves each label's row length. As δ preserves reversed column index as well, it preserves ordinary column index, hence lies in C_t. Now `{δt}={δt*}={γt}`, and the published injectivity of `C_t→{γt}` (F4) gives δ=γ. The converse is immediate because t and t* have equal row sets. The resulting support-intersection and pairing count are valid. The empty partition has trivial permutations and needs no induction.

The proposed argument needs F5 for the two column constraints, along with the existing F3, F4 and F8. Add F5 to step 1.4's trailing tags and its citation-use mapping; synchronize derivations 1.1 and 1.4 in the sole allowed contract row. Correct the same lemma's step 1.5 stray `x=u(i,c)` to `x=t(i,c)` if mutation resumes: the step fixes t throughout.

The Statement and all Definitions stay unchanged, so no direct-consumer propagation is triggered. No external full-text retrieval or independent audit is claimed; the missing inference is proved directly from the exact local published prerequisites.

## Hashes at held-state inspection

- `items/lem-specht-gram-gcd-detects-p-regularity.md`: `ff310ce9af9d22d7bacf3ec30d6a9729b379307e2bb626147c3a978779cde9da`
- `research/frontier-37-owner-30-batch-23.proof-contracts.json`: `3a6283164ed2eb126b9bce801ec758af6bf5f1a580b0ec852ffbc89b5ee04687`
- `research/frontier-37-owner-30-refute-23.json`: `a64e78eac123916c3ce93562b6638d654aeb3be74f6c5df4d37c9c1f822dfb52`
- `items/def-row-and-column-stabilizers-of-a-tableau.md`: `550158e595606ca56199ed654c3bf1e95a3952a56b55e26c540ef27a1c3265da`
- `items/def-column-antisymmetrizer-polytabloid-and-specht-module.md`: `687c7a6f0df1164c48013bf736704c97adb6639805f71eac1f037f3a918b6df2`
- `items/def-young-subgroup-tabloid-and-permutation-module.md`: `43cf36ea82151e164ad49009729c09f4603ecf51c794b9c01f705d75393a2d68`
