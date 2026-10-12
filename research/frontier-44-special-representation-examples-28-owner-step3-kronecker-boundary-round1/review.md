# Kronecker boundary repair — first stable review/repair pass

Run `frontier-44-special-representation-examples-28`, batch **26**, reviewer `/root/repair_step3_kronecker_boundary`. The three authentic Step3b flags are the reduction lemma, row-gap theorem and row-padding counterexample. This directory contains research-only proposals; canonical items, native decisions and runtime state were not changed.

The original boundary cannot be supplied for the printed map: the current conditional lemma is false. With `lambda=(14,10,2)`, `mu=(13,8,5)`, `nu=(23,3)`, `ell=3`, all three printed images `(10,10,2),(9,8,5),(19,3)` are partitions, but the coefficient changes from **1 to 0**. Here `g0=s=3`, so the Littlewood coefficient identity and two-row Jacobi–Trudi expansion leave the unique common index `alpha=rho=(13,8,2)` and content `(3)`. Both original skew diagrams are horizontal three-strips; the first reduced diagram overlaps column 10 and cannot have all entries equal to 1. The full calculation is included in the proposed lemma and checked by an exact LR enumerator.

The smallest missing mathematical prerequisite was a sound compacting shear, its inverse index correspondence and LR preservation. All underlying suppliers already exist. The proposed lemma replaces the incorrect block formula by

`delta_i=max(0,rho_i-omega_(i+1)-2s)`, `D_j=sum_(i>=j) delta_i`, `Phi(theta)=theta-D`.

It proves partition preservation on the exact bounded domain needed for the proof, proves both directions of the common-index bijection for **every q<=s**, proves all row, column, reading-word and content preservation, and proves that `(r-s,nu_2,...)` is a partition. It restores the full bounded-reduction claim without extra weak-decrease assumptions and preserves `r<=2s ell^2`. The bound uses `3s ell(ell+1)/2` for `ell>=3`, the equal-size two-row identity `r<=6s+2a<=8s` for `ell=2`, and the degree-zero reduction for `ell=1`. Empty input and the possible length bound `ell=0` are explicit. The statement is marked `ai-altered`: the corrected formula is not falsely attributed as the printed source formula.

The sharp stability proof uses the same locally established coefficient identity and first-row expansion directly at a single cut. It maps `alpha` to `alpha+(t^k)` and proves the inverse remains a partition from `theta_k-t>=omega_(k+1)>=theta_(k+1)`. It consequently preserves the original sharp **s-gap**, rather than replacing it by a stronger hypothesis. The proof also closes a separate error in the old eventual-constancy argument: for `k=1`, adding t cannot change the ordering of first parts. The ordering-free single-cut identity gives the explicit universal threshold `max(0,s+max(next rows)-min(kth rows))`; the source-ordered part (i) is retained. The counterexample retains its original two finite character values and all-t conclusion, with its obsolete inherited-gap remark replaced.

## Supplier and consumer ownership

The reviewer read the complete current Littlewood compatibility proof, LR definition and product supplier, Jacobi–Trudi proof, internal-product definition and power-sum supplier, Kronecker symmetry proof, stable-ring and Schur-basis suppliers, and partition definition. Source uncertainty was checked against fresh complete PDFs: Pak–Panova complexity v3, printed pp. 8–12 including the complete reduction proof, and Bounds v2, printed pp. 7–8 including Theorem 4.1, Lemma 4.3 and Example 4.4. The PDFs and extracted complete text are retained; this is not a claim to have reviewed every unrelated section of those papers.

A complete item dependency/citation graph read found exactly these affected current item consumers:

- `thm-row-gap-reduction-and-conditional-k-stability`: direct logical consumer, reconstructed above.
- `cex-row-padding-does-not-preserve-a-kronecker-coefficient-before-stability`: indirect logical and direct citation consumer, finite values independently checked and the all-t use checked against the reconstructed theorem.
- `rem-no-general-positive-combinatorial-rule-for-kronecker-coefficients-is-known`: direct consumer of both suppliers, unchanged. It consumes only bounded reduction/eventual constancy and their lack of a general positive formula, all preserved. No scope assertion changes.

The A page is repaired to remove its weak-decrease/granted-boundary description and its obsolete equality-of-compacted-images proof route. The B page's exact `0` and all-t `1` summary remains correct and needs no edit. No published consumer was found and no published repair is proposed. These reviews are limited to the changed supplier uses; they are not whole-item independent audits. The same reviewer retains binding responsibility after actual root integration.

## Checks and history

The native `/tmp/kron-check/boundary_recheck.py` uses `r=sum(phi_lam)` and immediately returns when `r>s`. This checks a condition on the **reduced total size**, not the required small skew degree **q<=s**. The claimed randomized coverage therefore cannot establish the missing assertion. The script was inspected but not used as authoritative proof.

The new finite regression covers 4,241 admissible triples with `0<=n<=7`, 18,440 common indices and their inverse indices, 125,600 exact LR equalities, and 7,580 single-cut cell/column comparisons for shifts 1 and 3. The old-map coefficient-changing witness and both S4/S5 finite character values are also checked. The written arguments, not the finite enumeration, prove the general claims.

Precheck's actual canonical repairs were adopted, including phase renumbering; the final lemma references are coefficient identity **1.1** and Jacobi–Trudi expansion **2.1**. The actual final scoped checks and hashes are in `local-checks.json`; no native gate was attempted.

The parent corrected its earlier unverified `native22` pointer: this branch is batch26, and no authentic prior Kronecker mathematical repair escalation was found in the retained run history. The old Step1 `ready` receipts are planning evidence. The current grouped flags are **first pass 1, maximum 2**, with no historical counter reset. Intermediate construction checks within this pass are not new stable review/repair cycles.

## Integration boundary

`review.json` seals exact current before bytes, unchanged consumer/supplier bytes, native flag receipts, proposed bytes and the metadata delta. The proposal is mathematically ready for root integration. Canonical closure is **pending**, not claimed: root must drain native writers, compare before guards, integrate the three item files, A page and two-subject manifest update, synchronize proof contracts/notes, and use genuine native bookkeeping. Then this same reviewer must bind the actual integrated consumers and suppliers. Nothing here authorizes an engine transition, gate bypass, publication, new pair or manufactured receipt.
