# Step 7 preflight repair — Alpha group c

Run: `phase-2-remaining-27`  
Dispatch: `step7-preflight-c-1`  
Owned batches: 1, 2, 5

## Method and evidence

Each owned item was reread against its current Facts & Assumptions, numbered
proof, frontmatter dependencies, proof-contract entry, cited local clause, and
the source locators in its `sources.references` block. The mathematical claims
needed for these preflight repairs are established in the current local
suppliers; no web lookup was needed. Citation entries were refreshed only with
`node tools/regen-contract-entries.mjs`. Item hashes below are full
`itemHashGuard` SHA-256 digests; contract-entry hashes are SHA-256 digests of
`JSON.stringify(entry)` before and after repair.

The common source locators checked were the cited sections/pages in Gerald
Teschl, *Topics in Real and Functional Analysis*; Theo Bühler and Dietmar
Salamon, *Functional Analysis*; Andrew Lin and Casey Rodriguez, MIT 18.102
notes; Dana P. Williams, *Lecture Notes on the Spectral Theorem*; John B.
Conway, *A Course in Functional Analysis*; and Joel H. Shapiro, *Notes on the
Numerical Range*, exactly as recorded on the individual items.

## Item dispositions

### `cex-a-compact-operator-can-have-nondense-range`

- Failure/cause: A1's quote for
  `def-square-summable-family-on-an-arbitrary-index-set` was an older complete
  Definition (contract quote SHA prefix `b706f2c9dac0`), not the current clause
  (SHA prefix `7ffa5faf491d`). The fact and uses at steps 1.1, 1.2, and 3.2 are
  mathematically consistent.
- Repair/check: regenerated the batch-2 entry and ran strict `proof-contract`
  selection: 0 errors, 0 warnings.
- Hashes: item guard unchanged at
  `f7504ab46b40e41f88b7d1b791738d625ea55de7cc2b8550dac836d32b45b7f4`;
  contract entry
  `cdf6e89a998861e1e0634b0c4945f3d863be0f6e4768c352bcfa32fd5b5d2fa5`
  → `7d1144a10ba1ab0af29eb5c797c28dcb271098afcab0d22bb41349e1cfe70473`.

### `cex-a-quasinilpotent-operator-need-not-be-zero`

- Failure/cause: A3 carried a truncated old quotation of
  `thm-hilbert-adjoint-properties`; the current Statement includes the
  Countable Choice hypothesis and operator typing before the four adjoint
  identities. The computation of the adjoint matrix at step 1.2 is consistent
  with that clause.
- Repair/check: regenerated the batch-5 entry and ran its strict
  `proof-contract` selection: 0 errors, 0 warnings.
- Hashes: item guard unchanged at
  `b8d9ab9839be77d299edac13e03a5fa3850a2febb5c3a0f22504ba645f685e9a`;
  contract entry
  `5e7832fd5da725ef46480ee708b80d564bc1be285d2a77742a027090e8725a56`
  → `0412824e3984f41f6d3c2cd3eda238df2fa1d5f31b2032fd5699d3f66c2fd047`.

### `cex-compactness-is-not-preserved-by-strong-operator-limits`

- Failure/cause: A1 retained the pre-repair complete Definition of the
  arbitrary-index `ell^2` supplier. Its current finite-subset sum and tail
  clauses exactly support steps 1.1–1.3, so no item correction was needed.
- Repair/check: regenerated the batch-2 entry and ran strict `proof-contract`:
  0 errors, 0 warnings.
- Hashes: item guard unchanged at
  `1dd1968affa78497ff9e0cb43a6131816878a7d0e20bc643772a05f6c6e90103`;
  contract entry
  `b64de153bd1f5f75f0cdd846b5b1da0c5b567117a3b56245f8366a5e80ea0497`
  → `8181a9c8a96cd8b557b8c65f75f6182eb3f6017b4fb1b6c8f385a9a54f5c4b13`.

### `cor-separable-infinite-dimensional-hilbert-space-is-ell-two`

- Failure/cause: only A6's quotation of the arbitrary-index `ell^2` Definition
  was stale; the Pythagorean and Hilbert-space quotations remained exact. The
  current tail-sum definition and completeness clause support the Cauchy
  partial-sum construction at step 3.2.
- Repair/check: regenerated the batch-1 entry and ran strict `proof-contract`:
  0 errors, 0 warnings.
- Hashes: item guard unchanged at
  `3b97974b81d7314405811c75a35b835ba50032b7a91713bb253d9ebb15f09785`;
  contract entry
  `9374836286de49fb2a8db935c7fba399fb0ef9f04623fa83e96a658cb8de1b4d`
  → `3ce857ff3c4f572f6bd34931b41bc074f8ae7dbd2cda26dac7e7d4d970eb8cc4`.

### `cor-trigonometric-polynomials-are-dense-in-continuous-periodic-functions`

- Failure/cause: A1's quotations of the torus Definition and finite-tori
  Statement, and A4's quotation of the latter, predated expansions of those
  exact sections. The current clauses still give compact Hausdorff finite tori
  and point separation by coordinate characters, precisely as steps 1.2 and
  2.1 require.
- Repair/check: regenerated the batch-1 entry and ran strict `proof-contract`:
  0 errors, 0 warnings.
- Hashes: item guard unchanged at
  `109d847bd452518acc1b8d2354d31a6d7e1081c19d2b3443e1f4111d6bd33dd6`;
  contract entry
  `ddbc308b2da98f1d0ea7f964e3900e9034ca8c36a7f144888ad35d614a210556`
  → `73220a5f665f15506919cdd8650be3aa7af9c01c87f63b5a63b088f45d431797`.

### `ex-polar-decomposition-of-the-unilateral-shift`

- Failure/cause: A2's Hilbert-adjoint quote was stale (and regeneration also
  refreshed the same fact's expanded isometry/partial-isometry Definition).
  The basis computation of `S*`, `S*S`, and `SS*` uses the suppliers with their
  stated hypotheses and directions.
- Repair/check: regenerated the batch-5 entry and ran strict `proof-contract`:
  0 errors, 0 warnings.
- Hashes: item guard unchanged at
  `24aa38e9d9849c89d31e0e4d640c32ed927139c1245ebf92307f161228eed8aa`;
  contract entry
  `85d65b9c0b1dfd9bbfcdcaeab62d3a0921a5ab525f8d657a17b3a5fc67d52bf1`
  → `9ffcb8d55e1e200444a89c1d2c075f06a9dd4fef219efa688935913ca29f49dd`.

### `lem-bounded-hilbert-operators-form-a-c-star-algebra`

- Failure/cause: A4 quoted the old shortened Hilbert-adjoint Statement. The
  current clause supplies conjugate linearity, involution, isometry, reversed
  products, and the C-star identity used at step 1.3.
- Repair/check: regenerated the batch-5 entry and ran strict `proof-contract`:
  0 errors, 0 warnings.
- Hashes: item guard unchanged at
  `0e81ea7cb0141d7b615618d892ddd9fc22916d81e4d3b5bc1586428102cfd5a3`;
  contract entry
  `85f7a5f4f731286ee08ef643fb7e84e1322d1f53888f61613cdcd5c3af1e42ba`
  → `74c9ff0ee786e3ea6c29adff63e1e5b08e71fea324075053fca65bf225fbe098`.

### `lem-continuous-functional-calculus-produces-a-regular-pvm`

- Failure/cause: A3's adjoint quotation was stale; its inner-product and
  Hilbert-space quotations were stale as well and were refreshed by the
  required whole-entry regeneration. The current clauses support positivity,
  Cauchy–Schwarz bounds, and the adjoint pairings used at steps 1.1, 2.1, and
  9.1.
- Repair/check: regenerated the batch-5 entry and ran strict `proof-contract`:
  0 errors, 0 warnings.
- Hashes: item guard unchanged at
  `e29f4e3e9d8f138eea1ca58ab9ca1a8026b3ac7696421ae9f4ba34afb3a89fb0`;
  contract entry
  `29a3bb312ce0aa92d596247f8c82c9140181f965743e0b55864680f79c668a8a`
  → `e6cc3fb364b0d01dcda8ddea624a9d571d5e4a55a3f0c791fb0078ef24a8db48`.

### `lem-continuous-periodic-functions-are-dense-in-l-p-of-finite-tori`

- Failure/cause: A2 and A4 both retained an older full quotation of the torus
  Definition. Its current fundamental-domain, finite-torus, quotient, and
  integral clauses still support the extension and periodisation at steps 1.1,
  3.1, 4.1, and 6.1.
- Repair/check: regenerated the batch-1 entry and ran strict `proof-contract`:
  0 errors, 0 warnings.
- Hashes: item guard unchanged at
  `be5a7f3fd1089d6637243ae59caa807cfb5acc4cd45e29944670a116ac2da41b`;
  contract entry
  `61ce425a1f1e437ac398f635b14b65208da69a20327ad08f41186837bb73111b`
  → `e3de313ec2ac2a3fc0a59e46f829f551dbaae336bf150f8f9b53b62a33de3107`.

### `lem-only-countably-many-fourier-coefficients-are-nonzero`

- Failure/cause: A1 and A6 quoted the older arbitrary-index `ell^2`
  Definition. The current small-tail and finite-square-sum clauses give exactly
  the threshold-set finiteness at step 1.1 and the `ell^2` membership used at
  step 4.1.
- Repair/check: regenerated the batch-1 entry and ran strict `proof-contract`:
  0 errors, 0 warnings.
- Hashes: item guard unchanged at
  `9af25bf75ceb331bfe1edc9ea80ac6fd8ba852574cada62a2a90393d8b0dfc9e`;
  contract entry
  `17d4777e8831d7b082284a2e36ab9b1c462d4241839acd6357bad081b243f11c`
  → `d62fcf9f7bc9689b854ac8513531ce03e489deee9be05eaf4bab572feda95625`.

### `lem-polynomial-calculus-is-isometric-for-self-adjoint-operators`

- Failure/cause: A4 carried the shortened old Hilbert-adjoint Statement. The
  current conjugate-linearity and reversed-product identities justify the
  computation of `p(T)*` and normality at step 1.1.
- Repair/check: regenerated the batch-5 entry and ran strict `proof-contract`:
  0 errors, 0 warnings.
- Hashes: item guard unchanged at
  `6e410c05f42bc209615839e54189ae59585f27b66c74d885fff17ce7c09b5e7f`;
  contract entry
  `a607436e1f926c0f9dc6b8cd530f3a1e41fe80f486bb094cd9564dde6a462af7`
  → `0e3f555b8e127ac97ac74a6248944a9123dd748710c7293f9acfd6bca77e5cd8`.

### `lem-range-of-identity-minus-compact-is-closed`

- Failure/cause: boundary case `one` referred to nonexistent step 7.1 and
  inaccurately placed witness normalization wholly in step 2.1. The current
  proof constructs normalized witnesses in 1.2, selects them in 2.1, and
  concludes the estimate in 6.1.
- Repair/check: corrected only that boundary evidence. Strict `proof-contract`
  reported 0 errors/0 warnings; batch-2 `boundary-audit
  --fail-on-contradicted` reported 0 contradicted candidates.
- Hashes: item guard unchanged at
  `5d0167ea7d65bc7ea54ef49f13d494bc50e29fbf515987c329e291316902665b`;
  contract entry
  `5a864009eae1849827b1c35d7556379ef635d1e1e236beb027a61b2fc48a5ce8`
  → `ab0938cdf829125e9d9cf2519d28853c2052be394db5979a51ad8ab73afbaa4f`.

### `lem-simple-pvm-integral-is-representation-independent`

- Failure/cause: boundary case `empty` cited nonexistent step 1.3 and assigned
  the refinement argument to 2.1. In the current proof, empty padding is at
  1.1, off-diagonal empty intersections at 1.2, and empty refinement cells at
  2.2.
- Repair/check: corrected that boundary evidence. Strict `proof-contract`
  reported 0 errors/0 warnings, and the item is absent from the subsequent
  boundary-audit contradicted list (the batch still then contained the two
  separately owned spectral-permanence rows repaired below).
- Hashes: item guard unchanged at
  `a6025f64319c5cb49b4dbdd7ec2b0b03e0c7c191fedcadd9d1d374de39754601`;
  contract entry
  `09210cfa2cbb011e1f1cb3136e9c56a81d9a36acf9e9d8bbd7ea817a5483ad09`
  → `f3b437c3830495015670594f0f40212b86ae4bd463be95e2d1863704054418e3`.

### `lem-spectral-permanence-for-unital-c-star-subalgebras`

- Failure/cause: boundary cases `zero` and `degenerate` both cited nonexistent
  step 2.2 and described an earlier version of the proof. In the current proof,
  1.2 gives the explicit inverse of the positive reduction `x=b*b`; 2.1 proves
  character separation (also vacuously on a singleton character space); and
  3.1 closes with Stone–Weierstrass.
- Repair/check: rewrote only those two rows against the current proof. Strict
  `proof-contract` reported 0 errors/0 warnings; batch-5 `boundary-audit
  --fail-on-contradicted` then reported 0 contradicted candidates.
- Hashes: item guard unchanged at
  `3d417b364ee533522e2b05b966b1f63e16bcfa7442a868b752fac52f61098f91`;
  contract entry
  `618e35eb73c9b2fd84edfd42dd3015ff70aca33a3e414be125909afde190c9a9`
  → `4296ab7f59ac12c6177c8fe9a23bd99b45d4ca1d8218180dbb20353040ba4daa`.

### `lem-spectrum-of-a-self-adjoint-operator-is-real`

- Failure/cause: A2's Hilbert-adjoint quote was stale (as was the same fact's
  expanded self-adjointness Definition). The current clauses give the pairing
  identity, real quadratic form, and conjugate-linearity used in steps 1.1 and
  1.2.
- Repair/check: regenerated the batch-5 entry and ran strict `proof-contract`:
  0 errors, 0 warnings.
- Hashes: item guard unchanged at
  `e85f31b2ec931f67b09a31a62f2867248b32798fc0a0c81ff1613c47dd662703`;
  contract entry
  `56bfb51fdf2b0048648e2af26abe10f6b54e2092401ea25f8c51938d67a830fa`
  → `2d60c17ed8a1ed9cbfc0b4be85f862adbae05e15e679b1f57a33b5a9628a1c4e`.

### `lem-two-dimensional-numerical-range-is-convex`

- Failure/cause: the current proof is structurally high risk but its batch-5
  entry lacked `risk_review`. A fresh read verified the zero- and
  one-dimensional cases, the Bloch-sphere parametrisation in dimension two,
  rank-nullity for `L:R^3->R^2`, and the kernel-line argument
  `L(S^2)=L(closed ball)`.
- Repair/check: recorded a specific complete review with
  `apply-risk-reviews.mjs`; `risk-report --require-reviewed` reported 0 errors
  and retained the item at HIGH score 6. Strict `proof-contract` reported 0
  errors/0 warnings.
- Hashes: item guard unchanged at
  `0e6dbb651dea04156df466bef83cb05ee0230a4683c82d25912d46aa9c52164b`;
  contract entry
  `0c1de478a198d5966883fc80f0f968cdd0262362a7af32b3af7746311932160a`
  → `70de87fcfcf0f8fce6db4d411da106e84bd5b961ff6e359d5574c566d3a3562e`.

### `thm-bessel-inequality-for-an-arbitrary-orthonormal-family`

- Failure/cause: A2 and A3 both retained the older arbitrary-index `ell^2`
  Definition. The current finite-subset-supremum and finite-square-sum clauses
  exactly justify boundedness of finite subsums, the supremum inequality, and
  coefficient-family membership in steps 1.1–3.1.
- Repair/check: regenerated the batch-1 entry and ran strict `proof-contract`:
  0 errors, 0 warnings.
- Hashes: item guard unchanged at
  `8ad8cd587abd6d3e20ca9e1fe96617a3d2b8d17af6a62e560ea8e6833f5982e7`;
  contract entry
  `b499f28a6dee1b55799610706628efbb42aa9142b48a0c45b59e80dc2a0b7d60`
  → `c371798a753288a45f1145e1119c26607d97211065d415cf019f96b744217116`.

### `thm-bounded-borel-pvm-integral`

- Failure/cause: fact A3 explicitly cites
  `def-projection-valued-measure` for `E(A)`, complements, products, and
  `E(varnothing)=0` in steps 5.1–5.2, but that load-bearing supplier was absent
  from `deps`. The definition is item 0 on the same A page, while this theorem
  is item 5, so the added edge is earlier and acyclic.
- Repair/check: added the supplier to the item and batch-5 manifest, ran item
  `precheck` (PASS), regenerated the contract, ran strict `proof-contract` (0
  errors/0 warnings), and used `splice-plan --run phase-2-remaining-27 --batch
  5 --update` to synchronize the canonical plan (one item object changed).
  The supplier and consumer are in batch 5 on the same A page, so this is not a
  cross-batch frontier edge; the unified frontier ledger was nevertheless
  refreshed as required after the dependency edit.
  Appended defect `phase-2-remaining-27-step7-c-preflight-001` through
  `defect-ledger.mjs`; run-filtered ledger validation checked 1127 rows with 0
  errors.
- Hashes: item guard
  `d5a87fa09d50609fe722597b17f80edfbd089b4050f879715f3bcee7bd546ad7`
  → `9ff0404bf1490c42e11df22c68affa387e7e434c1872ed03d829e81bce9416c7`;
  the regenerated contract entry was already current and remained
  `c8c3e060c31b78f0d62264228091cd77d57f6fecb5bd99f29dae1dc423ef0c96`.

### `thm-continuous-functional-calculus-properties`

- Failure/cause: A4 and A5 quoted the old shortened Hilbert-adjoint Statement;
  regeneration also refreshed their expanded generated-C-star-algebra and
  normality Definitions. The current clauses support star-polynomials,
  continuity of multiplication, and the eigenvector adjoint identity in steps
  1.3–1.4 and 2.3.
- Repair/check: regenerated the batch-5 entry and ran strict `proof-contract`:
  0 errors, 0 warnings.
- Hashes: item guard unchanged at
  `1a44d7d2e62637c109d98832f5a16c225969246c7970aa9ca7d30200e22ae079`;
  contract entry
  `5205801dd0ba75201cc9adaae62fe88a8d7f08f01bf89d03fbda0a2f7e4ea179`
  → `6bcbf23e94677a91ecc9d033726c29f7f0a5cf7586928ebb7592c9e0e92481dd`.

### `thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set`

- Failure/cause: A5's arbitrary-index `ell^2` Definition quote was stale; its
  Hilbert-space quote remained exact. The current pairing and norm clauses
  support the finite-subset-net inner-product limit at step 1.3 and the
  completeness transfer at step 2.1.
- Repair/check: regenerated the batch-1 entry and ran strict `proof-contract`:
  0 errors, 0 warnings.
- Hashes: item guard unchanged at
  `4c9af8c6de909d671c9a59ba8b94a6769c67a39653f9079835be076de036eac1`;
  contract entry
  `1851092f75b096adfc7f980f304e9f7b22c04420f95cfc7a2b2bcd5ee2190376`
  → `0dc481815ae385395fe6b98d4ecbc498ba56b8592a9b6afda6109dcfe9b8e049`.

### `thm-parseval-identity-for-fourier-series`

- Failure/cause: A4 and A5 quoted the older arbitrary-index `ell^2`
  Definition; A5's finite-set-maximum Statement remained exact. The current
  Cauchy–Schwarz, absolute-summability, and finite-subset-net clauses justify
  steps 2.1–3.1 and the symmetric cofinal sums.
- Repair/check: regenerated the batch-1 entry and ran strict `proof-contract`:
  0 errors, 0 warnings.
- Hashes: item guard unchanged at
  `e672fddd7238e19b022226b531414c66ec4df8a05ab91dad027fb7e50e84ecd7`;
  contract entry
  `3f15d582c97abdb5a75f51adc05ff861ac783953c4dc47f0659d4eb72fa374f7`
  → `12e0e30ce030518b859136dba9e70003af0501e1b03ffd138796681627b55e3d`.

## Final focused validation

- `proof-contract.mjs --strict` on the owned selections: batch 1, 7/7; batch
  2, 3/3; batch 5, 11/11; all with 0 errors and 0 warnings.
- `boundary-audit.mjs` on batches 1, 2, and 5 with both failure flags: 1,336
  rows scanned, 0 contradicted candidates, 0 template clusters.
- `risk-report.mjs --require-reviewed` on all three owned batch contracts: 0
  errors; batch 5 retains the numerical-range item as reviewed HIGH risk.
- `citation-fidelity.mjs --fail-on-missing-quote` on all three contracts:
  1,407 citations checked and 0 missing quotes. It reported 28 heuristic
  widening candidates; these are human-read candidates, not gate failures or
  findings created by this dispatch.
- `finite-smoke.mjs` on the three contracts: 0 errors; none of their current
  entries carries a smoke obligation.
- Edited item checks: `precheck.mts` PASS and `rendercheck.mjs` OK for
  `thm-bounded-borel-pvm-integral`.
- Dependency/plan checks: the frontier ledger was refreshed after the
  dependency edit; `splice-plan --verify` confirmed all 54 pages across 15
  manifests agree with the plan; `fwdcheck --quiet` passed; `git diff --check`
  passed for the authorized carriers.
- `depcheck --quiet` did not pass repository-wide. Its only three hard errors
  are outside group c: `ex-low-rank-dynkin-coincidences` depends on the B-only
  `ex-root-systems-b-two-and-c-two-from-matrix-lie-algebras`, while
  `fs-dynkin-diagrams-classify-all-real-semisimple-lie-algebras` and
  `fs-two-connected-lie-groups-with-the-same-dynkin-diagram-are-isomorphic`
  depend on the B-only `ex-cartan-subalgebra-and-roots-of-sl-two`. These are
  group-a carriers, so this dispatch did not edit them. No owned group-c
  blocker remains, but the engine's repository-wide preflight gate remains
  blocked until that owner repairs those three B-leaf findings.
