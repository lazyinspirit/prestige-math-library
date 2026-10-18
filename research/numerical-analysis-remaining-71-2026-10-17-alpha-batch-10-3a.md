# Batch 10 Step 3a adjudication

Run: numerical-analysis-remaining-71-2026-10-17. Group: batch-10.

The scope owes ten touched decisions and refuter:10:1; reader findings and page obligations are empty. All ten current raw item hashes initially equal their reader-post hashes. Pre/post hash inventories were compared; exact pre-reader bytes have not yet been recovered, so hashes alone are not used to reconstruct a delta.

Completed in dependency order:

- `def-tensor-train-cores-bond-ranks-and-canonical-gauges`: definition checked against the finite-array definition, including zero bonds, invertible gauge cancellation, conjugate transpose, and left/right isometries. No defect.
- `thm-best-rank-k-frobenius-matrix-approximation`: all four steps and current published SVD proof read. Projection lower bound, sum of projection weights <= k, decreasing-weight inequality, and orthogonal omitted terms prove the real/complex result. k=0, k>=rank, zero matrix and tied singular values are valid. No defect.
- `alg-sequential-tensor-train-svd`: compact-SVD instructions, cap/tolerance selection, finite cuts, tie freedom and zero-rank stopping are well defined. No correctness claim is smuggled into a procedure proof.
- `alg-tensor-train-rounding`: left compact-SVD absorption is exact, then right retained rows and left absorption have the required dimensions. Input-zero and discarded-all branches are explicit. No defect.
- `thm-tensor-train-storage-and-inner-product-cost`: all steps reviewed, including zero bonds and conjugate-first convention; complete HIGH risk review recorded in the owning contract before proceeding higher. No defect.
- `cex-best-rank-two-cp-approximation-may-not-exist`: independent slices force independence of the two first-mode factors; invertible slice forces the remaining two factor pairs independent. Determinant pencil then has two distinct zero lines, contradicting -x^2. Explicit rank-two difference quotient tends to the rank-three tensor, so zero infimum is unattained. No defect.

Sources opened: Dupuy, https://msdupuy.github.io/teaching/TT_lectures_2026.pdf (cover, chapter 1); Oseledets, https://users.math.msu.edu/users/iwenmark/Teaching/CMSE890/TENSOR_oseledets2011.pdf (sections 2–4); Kolda–Bader, https://www.kolda.net/publication/TensorReview.pdf; Caltech ACM270 complete notes, https://iqim.caltech.edu/wp-content/uploads/2019/08/ACM270_complete_lecture_notes.pdf. Specific passages and final dispositions are recorded below as review completes.

Next: finish source/binding checks and level-3 risk reviews, adjudicate the routed adjoint finding, then the three level-4 examples and focused local checks. No source carrier edited at this checkpoint.

Level 3 complete: CP-ALS monotonicity follows from the complex adjoint least-squares problem and feasibility of the old factor; HOSVD uses commuting mode projections and best-rank bounds for every competitor; TT exact ranks and both error identities follow from isometric interfaces and nested retained spaces. The complete HIGH/CRITICAL reviews are in the contract. For refuter:10:1, canonical sorted-key JSON hashing of the exact reader-post tuple gives the routed observation hash `4035554b53b05eb78e8b2a39f6807f7437552b2c6e12775b1c08b5073a8f767a`. Current raw proof bytes equal that tuple's item hash and already have the adjoint. It is a false positive, not a historical repaired defect.

Owner metadata alert outside the ten touched obligations: `thm-hosvd-quasioptimal-multilinear-rank-error` cites De Lathauwer §5, Property 10. Property 10 and its proof are actually in §4, journal pp.1267 and 1269 (PDF pp.15 and 17). The theorem's mathematical proof is sound. Supplier `alg-hosvd-truncation` also cites §§3,5 where §§3,4 is the relevant range. These untouched bibliography carriers are left for owner routing. No missing mathematical prerequisite or defective published supplier is identified. The source paper's displayed proof of Property 10 mistakenly replaces the complement of the retained box by the intersection of discarded indices; the independently checked local telescoping projection proof avoids that error.

Next: check the three level-4 computations, finalize exact metadata history, append the false-positive ledger disposition, and run local checks. No item source has been edited.

Level 4 complete in the generated order: diagonal cuts have exactly n independent nonzero rows/columns and delta cores attain the ranks; separable cuts have nonzero outer factors and singleton-bond cores attain one; the two-cut example has tails 2 and 1 and squared error 5. No new defect or consumer repair is needed.

All ten touched verdicts are `reviewed_no_defect`, `change_kind: metadata`, with empty defect_ids, as required for bibliography normalization. No mathematical repair or historical uncertainty is invented. Reversing exactly the common author/title substitution and the four reported locator substitutions reproduces every immutable pre-reader raw SHA256; current bytes reproduce every immutable post-reader raw SHA256. Thus the complete reader delta is proven bibliographic, including the rounding locator §§1.2.2,1.2.5 -> §1.2.4 Algorithm 1.3; §1.2.5. The three corresponding contract source-locator changes agree with current citations. No source or manifest was changed by Alpha; four risk_review records were added to the owning contract.

| Item | Exact recovered pre-reader raw SHA256 | Unchanged current/reader-post raw SHA256 |
|---|---|---|
| `alg-sequential-tensor-train-svd` | `8e693165a6588c2155120cf5ef4cc0f498dc2d8a6f7eb0bbbdff8dd0cc47c71f` | `746884f8bab29fa003071f2ecb0405c673e1a957202ee82afd96a45eb986670b` |
| `alg-tensor-train-rounding` | `df8ec2dc0c68c83485af4621d8ba7736750a4ff7c0304fa656d68f3bc28b53e8` | `b7df5d99934eb07abfcf763475a60f105edfa316f89630de867d656702793e2d` |
| `cex-best-rank-two-cp-approximation-may-not-exist` | `d7a42ac2ccfa0de2727f16be60c33d5b415794160d6f7c61101f963ff5bd45ef` | `f9b44778249bf4cc782303208bf54b112fc00a0fb41d192b6242f6c777268b26` |
| `def-tensor-train-cores-bond-ranks-and-canonical-gauges` | `e8e3188164d51f1f6f68d791e0d736ebbe099e80c4f78d65f11d8915910abe0d` | `406ef020005d002c4f817650473e8ee4f4ebdd64db2b3e0cbf997c32e5e1391c` |
| `ex-diagonal-tensor-has-large-minimal-tt-ranks` | `23a45944599b9f324e1d2fe3ad9ee23753cfe07f8bc53f55ce0b66daa538e0d0` | `b299b1a9505c61378db340c4373b3017cd8000ae6328e868755ad8e263a69f90` |
| `ex-separable-grid-tensor-has-tt-rank-one` | `0dba03bb2736e41e2de26ea61ea23b8676bf30e83410fe0cdb1d113d99767fec` | `09f357b717bbd65652d882f7a0b76c77c3459158dcfb01f17eefa4e452d37dcc` |
| `ex-two-tt-truncations-realise-root-sum-squares-bound` | `6aa6bf38e85bf1283874e7e0125bb179ecb863c2a13cf6c201b887e256eb229c` | `82fa2de7e7103e544425df93a0bffd014c7ce135348d6a9bb283b2ae7ab2c3e9` |
| `thm-best-rank-k-frobenius-matrix-approximation` | `dc8a306adc5f9723709bbfdb3eb1dae78fccc1f979db21ab23fcab4d9ce7be82` | `b61c530cf1cb9dad1825ab8351818404c065178e92382ab9a6df01fa7e46fcc0` |
| `thm-tensor-train-exact-ranks-and-root-sum-square-truncation-error` | `dc5dcd60669f5de80b67001b7b5bf946a6678d5945ab22fc6b117cd0c46d926d` | `320be713425766145b07a6433f7e7dce2af1c846de4bffe94aa0702816d35df9` |
| `thm-tensor-train-storage-and-inner-product-cost` | `4748209778bd8ceeb6f144426852792f730acca42d80f1a5bbbcf68aadecf097` | `3f0688028869fbecf742b6ae4aac4688a1a87af22a569067de9fa46e7e98f177` |

Source evidence: Dupuy cover (PDF p.1) establishes corrected author/title/date; §1.1.1 Theorem 1.1.2 (p.8) states real Frobenius SVD optimality, extended locally to complex matrices by the published complex SVD and projection proof. §1.2.1 (p.12) gives TT contraction/storage; §1.2.3 Theorem 1.2.12 (pp.18–19) proves exact minimal ranks; §1.2.4 Theorem 1.2.14 and proof (pp.20–22) gives nested-projection tail analysis; Algorithm 1.3 and §1.2.5 (p.23) give rounding and gauges. Read these relevant PDF pages directly; the article is not assumed infallible (its p.8 prose incorrectly calls singular values the Gram eigenvalues). Kolda–Bader §3.3 pp.469–470 supplies the border-rank sequence, §3.4 pp.471–472 the real block-LS derivation and limitations, §4.2 p.477 the HOSVD construction. Caltech Lecture 13 §4.3, PDF pp.109–111, independently derives the ALS block problem. De Lathauwer Property 10 pp.1267,1269 supplies the tail bound; the locally proved comparison to every multilinear-rank competitor yields sqrt(d). Source index order can differ by permutations; local lexicographic order and complex adjoints control the actual proofs. Oseledets web PDF records locate §2 Theorem 2.2 pp.2299–2300 and §4.2 contractions; the direct-download endpoint returned a one-page interstitial, so no complete downloaded Oseledets argument is claimed here. Dupuy's complete relevant projection argument and the authored proofs supply independent evidence.

The owning cross-batch input is []. No Statement/Definition changed, so no new consumer propagation is triggered; all stable IDs and existing withdrawal proposals are preserved. No defective published carrier found; no published source or canonical published ledger edit is needed. The two untouched HOSVD bibliography alerts above remain owner follow-up, without a mathematical blocker. Local validation results follow.

Final local checks (all exit 0):

- `node tools/risk-report.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-10.proof-contracts.json` initially identified three HIGH and one CRITICAL item; after the item-specific reviews, the same command with `--require-reviewed` reports 0 errors over 11 proof contracts.
- `node tools/proof-contract.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-10.proof-contracts.json --strict`: 11/11 checked, 0 errors and warnings.
- `node tools/tsx-run.mjs tools/precheck.mts --json` with the explicit union of ten touched and four high-risk item paths (12 unique paths): nine proof-bearing items pass; the definition and two algorithms are not applicable; zero failures.
- `node tools/rendercheck.mjs` with those same 12 explicit paths: all parse and render, no errors.
- Final `node tools/proof-layout.mjs` with all ten touched paths batched in one invocation: 21 steps, 0 layout defects. Alpha did not edit any item, so no formatter or reflow was necessary.
- Independent record checks: exactly the eleven routed obligations, exactly one matching closed false-positive row, and every current touched raw item hash still equals the reader-post snapshot. No self-stamping or judge cycle was run.

Artifacts are complete. One closed false-positive disposition was appended through the ledger tool, which refreshed its generated view. The frontier dependency ledger records the empty owned cross-batch input and the two owner bibliography alerts. No mathematical blocker remains. The engine owns subsequent hash stamps and gate battery; no claim of those checks or acceptance is made.
