# Focused mathematical review — cycle 1, frozen proposal

Subject: original batch-21 concern index 0 on `lem-qc-sparse-fault-path-implies-code-deviation`. Confirmed defect: chronological induction in its current 1.1–2.1 does not establish recursive correctness. This review does not claim a completed source repair, independent native review, or acceptance.

## Finding and proposed repair

The current proper contract requires noisy identities on encoded error sectors, but only zero-fault attraction on arbitrary inputs. A bad child can output outside those sectors. One cannot apply a good successor's encoded-input identity to that output, or treat its decoder/syndrome as a globally shared environment. Closing the alphabet under replacement addresses syntax, not this semantic problem. The missing mathematical supplier is a local substitution proof retaining arbitrary bad outputs, attached syndrome registers and all public measurement records.

The proposed exact source edits are in `candidate-patch.md`. They retain arbitrary allowed $q$, the numerical condition $2q\ell\le d$, both general conditional threshold conclusions, and the concrete universal existence claim. They add a finite syndrome-parametric port certificate, including noisy attraction and support accounting, and prove the actual all-level statement from it. They do not assume correctness at every level.

The derivation has two independent parts. First, hierarchical error spans have at most $s$ unrestricted child factors and correctable residual factors on every other child. Recursive recovery turns each residual factor into scalar logical identity with an attached syndrome coefficient. Each unrestricted factor becomes one arbitrary outer-coordinate operator. The fixed outer recovery then corrects $s\le d$. This applies to coherent sums because the scalar identities hold for every pair of Kraus terms. Second, prove computation, correction and arbitrary-input refresh attraction simultaneously in an acyclic order. A finite one-layer certificate is instantiated with the already-proved lower sectors and syndrome factorizations; its marked ports stand for arbitrary bad children. This establishes the next-level contracts. Only then run the existing chronological computation/correction invariant at a fixed level.

Noisy attraction alone is insufficient for the proposed proof: the actual schedule needs first-use refresh before interactions, a locality argument absorbing that refresh into the original bad slot, and a proof that any still-invalid output coordinates coincide with the already counted residual support. An extra factor of two in that support would change the admissible $q$ and must not be silently ignored.

## Actual source comparison

Read current `thm-qc-explicit-proper-code-and-universal-gadgets` fully. Its 2.3 defines hierarchical sectors and recursive decoding; 5.2 gives the scalar-Gram syndrome factorization and input-refresh locality argument; 6.1–7.1 explicitly establish correction, computation and idle attraction simultaneously. Its proof uses more than the current generic proper contract: noisy arbitrary-input correction, protected idle attraction, the initial attraction sweep in $C$, and the stronger zero-bad-child weight-four clause. Thus its existence proof cannot simply be copied as if these were consequences of the weaker abstract hypotheses. It is, however, a useful concrete certificate candidate, and its same future native repairer must verify the syndrome-parametric form and every support case.

Read authoritative Aharonov–Ben-Or full text from existing source archive: `research/quantum-computing-planning/sources/qc_r5/aaronov-ben-or-pages/page-13.txt` and `page-14.txt`, Appendix C, plus adjacent page-12 and the proper-code discussion in page-04. URL: https://arxiv.org/pdf/quant-ph/9611025. Appendix C explicitly lists three simultaneous assertions: computation correctness, correction correctness, and correction of arbitrary inputs into an unspecified encoded state. Its induction uses assertion 3 for exceptional incoming child blocks and for arbitrary-input correction. The paper's reduced-state deviation convention differs from this repository's Kraus-sector convention; it does not provide the missing local operator identities merely by citation. Its displayed spread arithmetic is likewise not a justification for dropping the repository's explicit numerical contracts.

## Actual consumer uses read

- `thm-qc-proper-code-concatenated-threshold`: F3/F7 and proof 3.1 rely on the missing recursive claim to make every good-pattern finally decoded output ideal. Keep its probability/overhead argument; fix this premise and hierarchical decoder wording.
- `thm-qc-local-stochastic-concatenated-threshold`: F4/F8 and proof 2.1 have the same dependence. Conditional maps remain per-location; no shared-bath assertion is introduced.
- `thm-qc-explicit-proper-code-and-universal-gadgets`: Definition strengthening changes its compliance obligation; verify and identify its existing extra recursion machinery as an actual finite certificate. Do not certify this by adding an assertion.
- `def-qc-level-r-good-and-bad-rectangles`: uses the proper contract as context and explicitly says good-implies-correct must be proved. Keep that distinction.
- `lem-qc-recursive-bad-rectangle-probability`: depends only on combinatorial badness, disjointness and independent indicators. Its separate envelope-quantifier defect is independent of this candidate.
- `def-qc-local-stochastic-noise-model`: contract link is contextual; its actual Definition remains a chronological composition of per-location maps. No source change needed for this concern.
- A page `noise-fault-tolerance-concatenation-and-thresholds`: actual prose promises concrete recursion plus both general conditional results; identify the proved finite certificate and hierarchical decoding in its scope caveat. B companion is a planar-memory-only leaf.

Searches of actual `items/` and `library/` carriers for supplier/consumer IDs found the above logical and contextual closure. No old concrete noisy-gadget or truncated-exRec concern is reopened here. These are focused current-source dispositions, not native consumer-review coverage. The native supplier owner must repeat the full closure search after its actual edits, including any aliases/new suppliers.

## Unresolved obligations for native 5.2

1. Prove the finite local certificate for any family offered as satisfying the strengthened contract. This review supplies a generic conditional induction, not a proof that all families satisfying the old weak contract satisfy the new certificate; no such implication has been established here.
2. For the concrete family, check that the existing 5.2/6.1/7.1 arguments work with arbitrary attached syndrome coefficients and the exact typed intermediate sectors, including noisy refresh, prefix faults, residual/invalid-coordinate alignment, initialization, public outcomes, final padding, and the stronger zero-bad-child clause. This focused task did not independently redo every supplier circuit case analysis.
3. Make final source edits and all affected consumer checks in one native owner lane. If the native repairer cannot prove the certificate as formulated, retain the explicit blocker and author the smallest actual finite substitution supplier; do not declare repair complete or assume all-level correctness.

No tests, gates, validators, hashes, stamps, manifests, proof contracts, native reports, ledgers, or runtime state were run or edited. Only these two proposal/evidence Markdown files were created. Evidence is frozen at this handoff.
