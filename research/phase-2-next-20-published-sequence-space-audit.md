# Published sequence-space audit — 2026-09-10

Root local review; not independent judgment or a transitive-closure audit.
Read full text of all items in the hash table below. No published item edited;
no precheck/rendercheck claimed. Familiar direct sequence estimates and exact
supplier-contract comparison; no new external source reading claimed.

## Confirmed ancillary claim defect

`cex-an-incomplete-subspace-need-not-be-closed`: U-P → A-P. L3 and proof 2.1
repeat complete-implies-closed without the countable-choice assumption now
explicit in `lem-complete-subspace-is-closed`. The actual c00/c0 counterexample
has explicit truncations and does not need L3. L1 and L2 were read completely;
their stated sup-norm interfaces supply the counterexample, but c0's written
closedness inference has the separate bounded concern below.

Repair strategy: remove L3 and its ancillary appeal/dependency; prove the
explicit truncations are Cauchy and their unique ambient limit u_n=1/(n+1)
has infinite support. Density follows from canonical truncations. For the
optional Banach ambient observation, use the c0 direct completeness argument
below. Existing published sequence/norm/completeness suppliers suffice;
no Phase 2 prerequisite or new pair identified. This confirms an assumption
mismatch in the ancillary text, not falsity of the counterexample.

## Bounded clear

`lem-closed-subspace-of-a-banach-space-is-banach`: U-P → bounded clear.
Full item and all three direct supplier items read. Its only completeness
use is claim 2 of `thm-complete-subspace-iff-closed`, explicitly choice-free.
The restricted-metric and Banach definitions match. No use of the repaired
choice-dependent converse. No repair needed for this impact concern; not
counted as repaired and no transitive supplier certification.

## New potential proof-interface concern

`ex-c0-is-a-banach-space`: U-P, newly indexed. Proof 3.1 infers topological
closedness from 2.1, which only addresses an already supplied convergent
sequence. No sequence-manufacturing argument or countable-choice assumption
is supplied there. This is a potential proof-interface gap, not a verdict
that c0 is not closed or not complete. A choice-free direct repair is available:
start with an arbitrary Cauchy sequence in c0, apply published
`ex-ell-infinity-is-a-banach-space` for its ambient limit, then use the existing
epsilon/2 calculation to put that limit in c0. Alternatively, for x outside
c0 fix epsilon with arbitrarily late coordinates at least epsilon; its
sup-norm epsilon/2 ball misses c0, proving closedness directly.
The ell-infinity proof was read and has the needed given-sequence interface;
no simultaneous choice of coordinate limits is needed since each is unique.
Existing `def-banach-space`, `def-normed-subspace`, and the published
closed-subspace lemma suffice after a direct closedness argument. No pending
Phase 2 supplier identified. Full scalar/sequence foundation closure remains
outside this bounded review, including the already recorded c0/ell-infinity
complex-convention definition debt.

## Examined bytes

| Item | SHA-256 |
|---|---|
| `cex-an-incomplete-subspace-need-not-be-closed` | `c4cdcad0eb8e438ba77cd905e8574390a62ce8e97c7e744826fef909bc556fb4` |
| `ex-c0-is-a-banach-space` | `6b2291c034de672bcef96aa6607a13dd9adb5de5417542f7eefde41c4f69891d` |
| `ex-finite-sequences-c00-with-standard-norms` | `ac1cbc9d52982c15f5ac3976175a43cb72085d53c5decc5950fbdae85b364549` |
| `lem-complete-subspace-is-closed` | `72b21de6bb2f6d6933d710987ee5a00145f46f52eb651da770d6a6736bdc20ed` |
| `lem-closed-subspace-of-a-banach-space-is-banach` | `a711fd8b0b52372387cdd4c5a268b3d221fee44debd87fd2682622ea4df4aded` |
| `ex-ell-infinity-is-a-banach-space` | `40c7188cbb4dff498812c42969b277703ac1de752ba28cc42536c2e3f6abc275` |
| `def-banach-space` | `5d06ec131021d5815030b691d3912f0197975ab89c7c94b9bf30727a4635b152` |
| `def-normed-subspace` | `6b9bb8ced8b36c6891547148c7bd241a658753fcc39291788b8d3678c9729890` |
| `thm-complete-subspace-iff-closed` | `78e7f1f02b7575403a2717cbd530fd9da4ed16a31397d2124331394f235e891e` |
| `def-countable-choice` | `f2eae5f2bbc369965aa20105bd55319557a4b74781d9a26c9122ca03a76c3183` |
| `def-c-zero-and-ell-infinity` | `6f2ea3b04dd31677a703be9ff89707897636454b260a13cc6a4d6c93b713030c` |
