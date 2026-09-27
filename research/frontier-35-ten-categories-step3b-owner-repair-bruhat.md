# Bruhat pair — post-author owner repair

Run `frontier-35-ten-categories`, batch 11, A/B pair `bruhat-decomposition-and-flags-over-finite-fields`. This record follows the completed Step 3b author dispatch. It documents local mathematical repairs and certification; it does not change the autopilot state or the sibling Young pair.

## Confirmed repairs

| Item | Defect and current argument |
|---|---|
| `lem-gaussian-elimination-produces-a-pivot-permutation` | The old common lift placed a 1 at `(n,j)`, so for `j<n` it was neither upper triangular nor multiplicative. After eliminating row `n` and column `j`, the proof now embeds the left induction factor in the first `n-1` rows and the right factor on the increasing column set `C`, separately. Both extensions are upper triangular and their product with the pivot permutation reconstructs `M` entrywise. |
| `lem-rank-matrices-determine-the-pivot-permutation` | Replaced the invalid kernel-extension argument for the trailing block by nonzero diagonal and triangular back substitution. |
| `lem-standard-parabolic-double-cosets-are-young-double-cosets` | Corrected the direction of the blockwise permutation in step 1.6 and the false one-block boundary sentence. The corrected `v:S_ij→T_ij` makes `u=σv^{-1}σ_m^{-1}` preserve each α-block. |
| `lem-parabolic-mackey-biset-splitting-in-gl-n` | Corrected `g=ul` factor order in step 2.3 and proved that the biset map is independent of representatives of `lA` and `Dm`, as well as of the balancing relation. |
| `lem-unipotent-invariants-are-exact-over-c` | Added natural averaging for `f`, giving `f(X^U)=f(X)∩Y^U`, the missing image step in exactness. |
| `thm-transitivity-and-parabolic-independence-of-harish-chandra-induction` | Removed an ill-defined map out of `G/U_δ`; proved the balanced-product map directly using `U_δ=U_γ⋊(L∩U_δ)` and put the right `K` action on the `L/(L∩U_δ)` factor. |
| `thm-existence-and-uniqueness-of-cuspidal-support-for-finite-gl-n` | Replaced undefined complex dimension of a finite Levi by the explicit block statistic `d(η)=Σ|S_i|²`, with strict monotonicity under refinement. Corrected the common-refinement Levi inclusion. Replaced the false left-translation formula for conjugating induced modules by the right translation `f'(g)=f(gw)`, which is a `G`-linear isomorphism; inner transport of a `G`-module is isomorphic to that module. The statement, manifest row, page summary and proof contract use the corrected statistic. |
| `prop-cardinality-of-a-finite-bruhat-cell` | Corrected its concluding interpretation: `q^ℓ(w)` counts complete flags in the `B`-orbit of `wV_•`, or right `B`-cosets in the cell. |

The first seven repairs above keep their original result claims except for the explicit minimization statistic in the cuspidal-support theorem. The direct and transitive consumers were re-examined against the corrected suppliers: Bruhat decomposition, flag relative position, cell cardinality, parabolic double cosets and bisets, the Mackey formula, cuspidal-support definition and theorem, and the affected GL1, GL2 and GL3 examples. All five B items received a bounded mathematical read; the Grassmannian and partial-flag induction examples needed no edit.

## Verification and state

- Explicit-path precheck: 19 proof-bearing items in the pair, 0 failing; rendering: 25 items plus both pages, 0 errors; prosecheck: 27 files, 0 errors or warnings. The later cell-cardinality remark change and its two affected examples passed focused precheck/rendering, and focused prosecheck passed.
- Strict batch-11 proof contracts: 28/28 entries checked, 0 errors or warnings. Only owned Bruhat contract entries were changed; sibling entries were preserved.
- Batch-11 manifest dependencies: 41 items, 0 errors. Content policy: 41 scoped items, 0 errors or warnings. Coverage: 2 A pages, 72 harvested results, 0 errors or warnings.
- The current Step 3 scope decision is closed, and all 25 Bruhat A/B item decisions are closed. Seven edited proof items and the edited cardinality item have owner `repaired` receipts; unchanged affected consumers have fresh `accept` receipts. No other batch was recertified here.

The pair remains ready for the engine's Step 4 splice and subsequent independent review. Other run work is outside this pair. No unresolved Bruhat mathematical blocker was found in this bounded repair audit; this is not an independent judgment of the full future proof closure.
