# Step 3a adjudication — batch 114

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-114`.

## Scope and decision inventory

The scope file lists no touched items, touched pages, reader findings, or refuter findings. Both item and page pre/post fingerprints agree. Therefore no routed decision is owed; the decisions file contains an empty array. Risk reviews remain required for both items, in the dispatched order. No source repair is presently indicated.

## Completed level 1 review

`def-tgr-regulated-generalized-entropy`: reviewed the complete current definition, all six direct suppliers, full finite partial-trace and subtraction proofs, and the stationary calibration proof. The definition fixes a smooth background, supplied affine null generator, nonempty compact transverse spacelike section, finite factors and density matrices, and a named sequence and normalization scheme. The finite outside entropy and assigned geometric term have units J/K; the optional area coefficient has the same units. The limit exists as a defined quantity exactly when this particular finite-sum sequence converges finitely. Neither convergence nor scheme independence nor physical monotonicity is asserted. Zero eigenvalues, repeated spectra, one-dimensional factors, excluded empty inputs, and both directions of the finite-limit condition were checked. Countable Choice is inherited only in the contextual stationary calibration, whose extra physical assumptions and fixed G_N are preserved. No defect or missing prerequisite affecting this use was found. The complete specific risk review is now recorded in the owning contract.

Sources independently checked: [Reall](https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf), §§10.8–10.9, printed pp.146–147, equations (10.110)–(10.114), for coefficient, sum and backreaction boundary; [Wall](https://arxiv.org/pdf/1105.3445), §1 equations (1)–(3) and complete §2.8 equations (50)–(52), for divergence, explicitly assumed renormalized relation, and regulator/limit qualifications. Reading was limited to the cited relevant passages; the prior author's broader reading record is not adopted as my own. These are contextual sources, not imported general second-law suppliers.

## Completed level 2 review

`rem-tgr-generalized-entropy-no-automatic-second-law`: independently checked every proof step and all eleven direct supplier interfaces. With the stated ordered product basis, both matrices are positive semidefinite and trace one, and the one-dimensional input partial trace returns each matrix. The spectra are `(1/2,1/2)` and `(1,0)`; the inverse-exponential, strict-increase and reciprocal suppliers give `log(1/2)=-log 2`, `log 1=0`, and `log 2>0`. The outside entropies are consequently `k_B log 2` and `0`, including multiplicity and the explicit zero convention. Cancellation of the common finite geometric value gives `-k_B log 2<0`. Each sequence is constant, so its finite limit follows immediately from the epsilon definition without a limit interchange. The comparison labels supply no temporal order, dynamics, or cut family. It is neither an empirical finding nor a counterexample to a separately hypothesized physical generalized second law.

The complete current proofs of `pthm-tgr-restricted-classical-area` and `pthm-tgr-area-entropy-calibration` were inspected at the uses here. The first contracts the adopted Einstein equation with a null generator and applies its exact smooth-area supplier under the stated persistent-compact-cut, full future affine-flow, null-energy and Countable Choice assumptions. The second cancels work terms, divides by a strictly positive temperature on the strict stationary family, and integrates the zero differential on its convex parameter domain, leaving the entropy offset free. Neither statement or argument contains an outside-state entropy inequality. This is a scoped supplier-use review, not a new audit of their prerequisite closures or publication status. The finite calculation itself uses no choice; the contextual Countable Choice premise is retained. No defect found. Its specific complete risk review is recorded in the contract.

## Pages, dependencies, and scope preservation

Read both current frontmatter-only pages and checked their inventories and declared prerequisites against the batch manifest. Neither item nor page contains TikZ/tikzcd or another diagram; the scalar definition and matrix calculation do not require one. No page-only obligation was routed.

The owned cross-batch dependency input already records the page edge `tgr-phs05 -> tgr-mhs05`, the definition's uses of `def-tgr-finite-cutoff-outside-entropy` and `lem-tgr-renormalization-finite-part-ambiguity`, and the remark's use of the finite outside-entropy definition. These exact uses remain valid after independent review; existing rows and IDs are preserved. The partial-trace supplier's full proof establishes basis independence using its trace-pairing identity, positivity and trace one by finite sums, and spectral finiteness via its finite-dimensional nonnegative-operator supplier. The subtraction lemma's epsilon proof gives the shift `L+a`. Both remain draft suppliers; no acceptance is inferred from source presence or prior readiness notes. No dependency or public interface changes were made, so no consumer repair propagation or ledger refresh is needed.

No defective published supplier was identified in these scoped uses, no withdrawal is proposed, and no defect-ledger row is warranted. Mathematical originals, imported snapshots, published content, item/page carriers, manifests, and historical reader/refuter artifacts remain unchanged. The only contract changes are the two required `risk_review` records.

## Checks and handoff

- Initial risk report: exit 0, both items CRITICAL (scores 8 and 11), zero mechanical errors.
- Raw SHA-256 comparison: both current items and both current pages match their immutable pre-reader and post-reader fingerprints exactly. The historical item hashes are `a07dbd6996936fefd080be01ffc280ef84a6e6246e9e2534f88f8b24a9ffe012` and `504bc82597946b381d70de7eed4c6a3ac7113d245f3e6925a3cd9c6eed3a0882`, respectively. Pre/post contract and manifest fingerprints also agree; new risk-review metadata intentionally changes the current contract.
- Final required `node tools/physics-support/risk-report.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-114.proof-contracts.json --require-reviewed`: exit 0; both required reviews complete; `risk-report: 0 error(s), 2 item(s) routed`.
- No item was edited; reflow, precheck and the changed-item proof-layout command therefore have no changed paths and were not required. No judgment, decision stamping, certification, full gate battery or stage transition was initiated.

Blockers: none. All routed obligations (zero decisions and two risk reviews) are completed. Engine-owned hashes and gates remain for the engine.
