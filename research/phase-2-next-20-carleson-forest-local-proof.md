# Explicit Carleson joint forest summation

The existing forest lemma now has its complete local stopping and summation argument, with matching derivation/citation/boundary contract and manifest. Read the actual density/size definitions, full density-selection argument, the unfinished size and single-tree items, and Lacey section3 pp12–14 equations3.13–3.16.

For e=m(E)>0 and F=||f||2>0 use s_n=(F/sqrt(e))*2^-n and d_n=(2/19)min(1,4^-n). At each level, reduce density by at most two selections and size by at most one; only run a selection when the actual value exceeds the next target. This bounds all selected top lengths by C e4^n. Trees inherit current size/density bounds. The minimum positive singleton coefficient ratio gives finite termination for the finite original family, and summing min(2^n,2^-n) gives3. Empty/null/zero cases are explicit.

This proof uses the exact statements of two still-unproved suppliers: `lem-carleson-size-selection` and `lem-carleson-single-tree-estimate`. Its own stopping/summation gap is closed, but the item must remain escalated until these supplier proofs are completed and reviewed. No maximal inequality or Fremlin backing is thereby accepted.

Added existing `def-density-size-and-tree-count-for-carleson-tiles` as a direct dependency; root was notified for scope reconciliation. Updated the single-tree Scratch only to reflect the verified valid Lebesgue maximal-supplier specialization, preserving its actual packet/truncation proof hold. No new IDs/pairs, shared plan edits or source attempts.

Checks after adopting canonical proof phases: forest explicit-path precheck and renderer pass; strict one-item contract passes; batch5 content-policy27/27 passes. No independent review claimed.
