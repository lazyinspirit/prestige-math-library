# Independent audit: Step-8 integral and unit-circle surgical repair

Date: 2026-09-11. Scope: defect rows
`phase-2-next-20-postfreeze-supplier-008` through `-013`, `-015` and
`-019`, plus the ten additional load-bearing consumers changed by the
integral repair. I read every current target in full, the post-freeze audit in
both formats, the 40-row candidate file, the repair-author receipt, the exact
defect-ledger rows, the recovery authorization, the four batch manifests and
contracts, the aggregate run contract, and the used published interfaces. I
made no item, manifest, contract, plan, ledger, page, engine, or runtime-state
edit. This file is the only write.

## Overall verdict

**FAIL — 2 PASS, 16 FAIL under the requested end-to-end standard.** The local
mathematics is sound in seventeen items. One definition still omits the finite
complex-integral step needed for its centering argument. Separately, all
fifteen repaired proof-bearing items have current batch contracts but stale,
nonidentical entries in the aggregate run contract. Thus the exact batch
checks pass 15/15, while the authoritative aggregate strict check fails with
40 errors over the same fifteen selected IDs.

The two unconditional PASS items are the non-proof-bearing definitions
`def-discrete-martingale-transform` and
`def-predictable-quadratic-variation-in-discrete-time`. A FAIL caused only by
aggregate-contract staleness does not mean the mathematical conclusion is
false.

## Confirmed defect subjects

| Defect row | Subject and current SHA-256 | Verdict | Exact result |
|---|---|---|---|
| `-008` | `lem-lc-solovay-density-locality-and-null-joins` — `803aaecc8cb8386ea51f0fb636acba7eb0b0fc273f43758040ff1cc772267cce` | **FAIL** | The zero-complement refinement, positive/zero scalar split, MCT, finite linearity, zero-integral criterion, RN substitution, ultrafilter-large fibres, countable additivity, localization and small-null-join proof are correct. Its batch-14 contract is current, but the aggregate contract is stale and fails strict routing checks for F1–F8 and step 1.2. |
| `-009` | `def-unitary-eigenfunction-for-a-probability-system` — `8b986ed5ace91d50d8f769c38ec0b696309300f8483fe27d77b78108d6c44da2` | **FAIL** | Lines 23–25 correctly repair simple-integral well-definedness, zero/positive homogeneity, MCT, nonnegative invariance and the complex `L2` Koopman isometry. But line 27 then uses complex integral linearity and complex integral invariance to make `H_0` linear, infer `(lambda-1) integral f=0`, and prove the centered class has mean zero. The local reconstruction stops at nonnegative MCT/invariance and does not derive nonnegative additivity, finite complex `L1` linearity, or extension of invariance through real/imaginary positive/negative parts. The cited complex-`L2` pairing theorem obtains its linearity from the affected published `L1`-linearity path, so it is not an independent bypass. Add the same two finite-decomposition sentences already present in the other repaired items. |
| `-010` | `lem-invariant-square-integrable-kernel-produces-a-compact-intertwiner` — `978acd2897bc6490dad7f70245ba1827ad4fc0ed759c8814fd6b045be6059ca1` | **FAIL** | The product-measure argument and identity `K_(Wl)=U K_l V`, hence `KU=UK` without surjectivity, are correct. The zero-marginal/nonzero-restriction argument is also correct once the centered-space interface is complete. It presently inherits row `-009`'s incomplete complex centering interface, and its aggregate contract still cites the removed published Koopman theorem and has stale quotes/derivations. |
| `-011` | `thm-weak-mixing-is-equivalent-to-absence-of-nonconstant-eigenfunctions` — `6e97977f10b81acb657c385e82ac2e89bfbc89763d4d9c9dfe26a7afaa1cb061` | **FAIL** | The three implications, product-completion argument, compact-kernel route, squared-correlation Cesaro proof, and pair-dependent density-zero exceptional-set construction are correct. Its centering steps inherit row `-009`; its aggregate contract also retains the removed Koopman source and stale quotes/derivations. |
| `-012` | `def-discrete-martingale-transform` — `304777ceca8d979a84ac854d193ab6b66b422df19a21e34eca60e6cb25474d2e` | **PASS** | The definition now explicitly makes product integrability part of the domain. The zero-complement refinement, MCT, nonnegative additivity, finite `L1` linearity, measurability, finite-sum integrability, a.s.-bounded sufficient condition, empty time-zero sum, and representative independence close the exact defect. Manifest/frontmatter dependencies agree; as a definition it correctly has no derivation contract. |
| `-013` | `thm-doob-decomposition-of-an-integrable-adapted-process` — `9bd7e02bc4f77ffb248f84ff3fb4999e009ad9860e5b5e69791f9b1336f75d40` | **FAIL** | The local integral reconstruction makes the RN/CE existence and algebra route legitimate; predictability, martingale drift, increment uniqueness and the single countable null union are correct. The batch-4 contract passes, but the aggregate entry has stale F4/F5 uses and derivations and fails strict checking. |
| `-015` | `thm-fourier-transform-of-a-finite-complex-measure` — `a4012d34d23d6f326568aa3a3022c7525a830da5c38903cfd2a7dbb9758b76db` | **FAIL** | The canonical nonzero-level simple variation bound, `L1(|mu|)` limit construction, independence, finite linearity, local Fatou/DCT, boundedness and uniform-continuity estimate are correct and avoid RN/Hahn. The batch-15 contract is current; its aggregate derivations still describe the pre-repair text and are not JSON-identical. |
| `-019` | `lem-periodic-continuous-functions-are-determined-by-their-fourier-coefficients` — `a961401f4abbd1e1e8d878860081541e2600746496577b971b39b296c3b997c4` | **FAIL** | The local fibre classification is mathematically complete: subtraction gives zero sine and the cosine norm-square; the already cited map-into-circle/unit-modulus clauses give that square as one, while the zero set plus the cited Euler/addition identities force even parity. The compact quotient descent, Stone–Weierstrass step, local finite complex linearity, zero-square-integral implication and continuity upgrade are correct. The batch contract records the new subtraction supplier, but the aggregate contract omits that citation and carries stale derivations. |

## Ten additional repaired direct consumers

| Consumer and current SHA-256 | Verdict | Exact result |
|---|---|---|
| `cex-an-unbounded-predictable-transform-may-lose-integrability` — `dec71cbbb916c3406875a9e2421cc928c4ff110ab238edcf6ccc24b576c7b019` | **FAIL** | The explicit probability masses, bounded martingale, predictable unbounded multiplier and local MCT computation `E|G_1|=infinity` are correct. Aggregate contract quote/derivation is stale. |
| `cor-second-moment-is-the-expected-predictable-quadratic-variation` — `2ab8b5463da373b634b49320b2f7a014847fffb45572c15a744aef9f4fa1e22c` | **FAIL** | The martingale expectation induction and locally justified finite linear rearrangement are correct. Aggregate derivations are stale. |
| `def-predictable-quadratic-variation-in-discrete-time` — `59320f2b6493a5137813ee5c2d0c138a922df7937112c38fc01535e49b3d7e57` | **PASS** | Square integrability, nonnegative conditional versions, predictability, integrability, version independence, the optional quadratic sum and the empty initial sum are correct; the complete local integral/RN/CE base is present. Manifest/frontmatter agree and no derivation contract is required. |
| `ex-dyadic-conditional-expectation-martingale` — `b54554697c1cffbab540df5898f9a66a0417df583b68f2ba47f8f200b1811070` | **FAIL** | Cell masses, filtration, integrability estimate and event identities are correct after the local integral repair. Aggregate derivations are stale. |
| `ex-likelihood-ratio-martingale` — `7de7f611de964d4ec12af6f473c51c6c8d335848b3fb705c34dbe75169b6e231` | **FAIL** | The local RN base, nonnegativity, restriction-density identity, terminal/trivial-sigma-algebra cases and finite example are correct. Aggregate derivations are stale. |
| `ex-partial-sums-of-independent-centered-variables-are-a-martingale` — `941e1cc9d696abbd4be27d151fa22d08544eab8196aa1d838c6f2118b681fee2` | **FAIL** | Integrability, grouped independence, conditional centering and equality with the natural filtration are correct after the local integral repair. Aggregate derivations are stale. |
| `lem-martingale-differences-are-orthogonal-in-l2` — `40908976247e07bb40f6c698b1c6fff35b4b6f7dcd1dcc1ca380d86827e36b7b` | **FAIL** | Cauchy–Schwarz, taking out the known factor, orthogonality and finite square expansion are correct. The aggregate entry omits current F4 routing and fails strict checking. |
| `thm-martingales-and-martingale-differences-correspond` — `daffedcf02fe20b01a2d5058ff1fbbc1c492e3e6892823f46dc981b115e978cb` | **FAIL** | Both constructions, conditional identities, integrability and empty-sum/inverse cases are correct. Aggregate derivations are stale. |
| `thm-square-minus-predictable-quadratic-variation-is-a-martingale` — `f26aa6d1f092ca062a4a92b8d60dfbbef2e75db8dd5aab56076df5fffb12968e` | **FAIL** | The cross-term conditioning, bracket increment cancellation and random-`M_0` centered variant are correct. Aggregate F1 quote and derivations are stale and fail strict checking. |
| `thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions` — `485cb73e315977a5407cfe79360efc92bcdc514819f836cb5b06f5f3e1ac5797` | **FAIL** | Local complex linearity and DCT, the tail split and the frequency-independent modulus estimate are correct. Aggregate citations/derivations are stale. |

## Artifact, authorization and frozen-surface evidence

- Current manifest hashes match the repair receipt: batch 1
  `b89eee1500545c254617e0aad66974502b8cee4077ab76217b8cefdebb5281f2`,
  batch 4 `0964e184bd940565ed65e62df06b0be82f1248546c22589df62190b9717262b5`,
  batch 14 `7bf5996f635312fcb44ffcfc3814f985028912ea44301187630207e34bed3886`,
  and batch 15 `1c05e5432f627f5a6d4f231a6169c0bf16468d25d3ff5e84d3bb28429303a8df`.
  Every audited target occurs exactly once on its preserved page and every
  manifest dependency list equals its frontmatter list.
- Current batch-contract hashes also match the receipt: batch 1
  `40a0e400a48400860520aa7effdb17ed3f6ac2ac2275b17c1cd578b66a43b68d`,
  batch 4 `2c53291ffd20b6149ad8bd95852b26f7ac078858f6e66fdd8ec2bab55274c750`,
  batch 14 `41217291fc34d2e63bbddbb620e4f838cf8d8f0a49e971424fb30b66543e66ab`,
  and batch 15 `3be3da9ed2cf9b1affd917183e8287225eecac2c3ba391fa8049b53c0a54083d`.
  The aggregate contract is
  `f5c2923de3dfbca1d84376c254ab80143b33eee6dd664ed76bd38f67e6e26157`.
  Each of its fifteen relevant objects differs from the corresponding batch
  object; strict checking reports 40 errors. Re-merge all fifteen batch
  contracts after the semantic repair, then rerun strict checking on the
  aggregate selected IDs.
- The authorization is
  `d376d67d50060e57efb48a0a900229247fddb8ad394a742257e33340bf663f1f`;
  its bound input hashes are confirmed-audit
  `947c22154651e28233c43832d45e4a0174d7b62936ca5cfcdee3dd41739dc01a`
  and candidate-audit
  `a2c8d3353a9bd845cb6c4bbdf4f822f45a88cbd49bb15e1fe75fb8aa214e9979`.
  Recomputing mathematical hashes against preserved `post-step7` finds 29
  modified items across the three surgical repairs: all 29 are draft and in
  `allowed_targets`; there are zero created, deleted, out-of-allowlist, or
  published-item changes.
- All 44 current run page files match their preserved post-5a byte hashes, and
  every batch page inventory equals its preserved inventory. No page or A/B
  pair was added, removed or edited.
- The affected published suppliers remain read-only across the recovery
  baseline. Representative current hashes include the simple-integral
  definition `6c7cdbce4226e5b703d52594d45ff0c5fcf8a717dc98930264fa11c9d1a641d6`,
  MCT `ef06079eb04f6b7c1b8816dbfd06912b4a6ef35304ddb2170981944cece65a9c`,
  Koopman isometry `7a92ebc59addfc05df5c84b36ed452307d126ce982ccf36f81207a596d0d6863`,
  unit-circle parametrization `b524e8356aecb179727f3cafac9b26a020d8830713e64b553592248f3aabe2b5`,
  subtraction formulas `a124b8a4903bf5873f7c7cfd5319e5926ebc3f7b62d3ef3eeca7a6a2a0e7137d`,
  and sine/cosine zero sets `3c252f2785e59fe2861a1b9c2d410ce4e66f3c96ee8a42b0f36de92944df80d8`.

## Focused checks

- `rendercheck`: PASS, 18/18 files.
- `precheck`: PASS, 15/15 proof-bearing items.
- strict per-batch proof contracts: PASS, 2/2 + 9/9 + 1/1 + 3/3.
- strict aggregate proof contract: **FAIL**, 40 errors over 15/15 selected
  repaired proof-bearing items.
- `citation-fidelity`: PASS mechanically, 674 citations across the four full
  batch contracts; no missing quote or widening candidate.
- `content-policy --audit --manifest-only`: PASS, 159 scoped items, zero
  errors or warnings; `manifest-deps`: PASS, 159 items, zero errors.
- `boundary-audit`: PASS mechanically, 1200 rows, no contradicted disposition
  or template reuse at or above three members.
- `validate-plan`: PASS; `depcheck --quiet`: exit 0. Its 473 repository-wide
  warnings are pre-existing and do not identify an unresolved reference or
  cycle in this repair scope.
- The live run is paused at `8-receipt`, has not entered Step 9, and has
  nothing in flight.

For the niche large-cardinal construction I also checked the architecture
against Bagaria and da Silva, *omega1-strongly compact cardinals and normality*,
Theorem 2.9 (`https://doi.org/10.1016/j.topol.2022.108276`): its sketch uses the
same unique ultrafilter-large real fibre and countable-additivity mechanism.
That source is a sketch, so the PASS on the local Solovay argument rests on the
complete calculation audited above, not on an overstated source claim.

The recovery should remain held until row `-009` gains the explicit finite
complex-integral/invariance step and all fifteen current batch contract entries
are re-merged into the aggregate contract. No new item, supplier, page, pair,
or published edit is needed.

## Final re-audit after authorized closure

This section audits the corrected current tree and supersedes the initial
**2 PASS / 16 FAIL** disposition above. The owner authorized the auditor to
make the two small in-scope repairs. **Final verdict: PASS — 8/8 confirmed
subjects and 10/10 additional consumers PASS.** There is no remaining
mathematical, local-bypass, dependency-routing, manifest, contract,
authorization, published-surface, page, or pair blocker in this assignment.

The semantic repair adds one paragraph to
`def-unitary-eigenfunction-for-a-probability-system`: MCT applied to sums of
increasing simple approximants now explicitly gives nonnegative additivity;
positive/negative and real/imaginary decomposition gives finite complex `L1`
linearity; and invariance of the four nonnegative parts gives complex `L1`
integral invariance. This supplies exactly the operations used to make `H_0`
linear, center eigenfunctions, and deduce `(lambda-1) integral f=0`. The
definition's final SHA-256 is
`ca1ed74b88f6a43917316a8202c8761ab2e12c2027d193c46a60640d193a2a3d`.

| Defect row | Subject | Final verdict |
|---|---|---|
| `-008` | `lem-lc-solovay-density-locality-and-null-joins` | **PASS** |
| `-009` | `def-unitary-eigenfunction-for-a-probability-system` | **PASS** |
| `-010` | `lem-invariant-square-integrable-kernel-produces-a-compact-intertwiner` | **PASS** |
| `-011` | `thm-weak-mixing-is-equivalent-to-absence-of-nonconstant-eigenfunctions` | **PASS** |
| `-012` | `def-discrete-martingale-transform` | **PASS** |
| `-013` | `thm-doob-decomposition-of-an-integrable-adapted-process` | **PASS** |
| `-015` | `thm-fourier-transform-of-a-finite-complex-measure` | **PASS** |
| `-019` | `lem-periodic-continuous-functions-are-determined-by-their-fourier-coefficients` | **PASS** |

| Additional consumer | Final verdict |
|---|---|
| `cex-an-unbounded-predictable-transform-may-lose-integrability` | **PASS** |
| `cor-second-moment-is-the-expected-predictable-quadratic-variation` | **PASS** |
| `def-predictable-quadratic-variation-in-discrete-time` | **PASS** |
| `ex-dyadic-conditional-expectation-martingale` | **PASS** |
| `ex-likelihood-ratio-martingale` | **PASS** |
| `ex-partial-sums-of-independent-centered-variables-are-a-martingale` | **PASS** |
| `lem-martingale-differences-are-orthogonal-in-l2` | **PASS** |
| `thm-martingales-and-martingale-differences-correspond` | **PASS** |
| `thm-square-minus-predictable-quadratic-variation-is-a-martingale` | **PASS** |
| `thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions` | **PASS** |

All fifteen repaired proof-bearing entries were re-merged from their exact
batch contracts into the aggregate. A full aggregate strict check then exposed
six additional stale quotes in unchanged direct consumers of the three changed
definitions. Their item text was not changed. The auditor regenerated only
their citation/derivation entries, preserving every boundary and risk record:

- batch 1: `lem-compact-intertwiners-produce-finite-dimensional-invariant-subspaces`,
  `lem-nonzero-finite-dimensional-complex-invariant-subspaces-have-unitary-eigenvectors`,
  and `lem-chacon-eigenfunctions-are-constant`;
- batch 4: `thm-bounded-predictable-transforms-preserve-martingales`,
  `cor-nonnegative-predictable-transforms-preserve-submartingale-gains`, and
  `ex-square-of-a-martingale-minus-quadratic-compensator`.

The final contract hashes are batch 1
`3da822adc975264d57dfdec909d5baee892a0218719602e23a86e46f0b316104`,
batch 4 `59684a937648d979cd9b9c8c85ec5d0e8e6b9ea73cb16a987a2850962db25a18`,
unchanged batch 14
`41217291fc34d2e63bbddbb620e4f838cf8d8f0a49e971424fb30b66543e66ab`,
unchanged batch 15
`3be3da9ed2cf9b1affd917183e8287225eecac2c3ba391fa8049b53c0a54083d`,
and aggregate
`538df0ccd338b70a0e6fce3e7c6854057c81df61fa7444847d54d939c1409212`.

Final focused verification:

- strict aggregate contracts on the fifteen repaired proof-bearing items:
  PASS, 15/15, zero errors or warnings;
- strict aggregate contract over all 555 scoped items: PASS, zero errors and
  one unrelated pre-existing `shotgun-bracket` warning for
  `thm-schwartz-space-is-frechet`;
- aggregate citation fidelity: PASS, 2360 citations over 555 authored items,
  no missing quote or widening candidate;
- batch-1 strict contracts after the semantic edit: PASS, 2/2; focused
  precheck on its two proof consumers: PASS, 2/2;
- rendercheck on all eighteen audited items: PASS; manifest dependency parity
  remains PASS for all 159 items in batches 1, 4, 14 and 15;
- `depcheck --quiet`: exit 0, with only the 473 pre-existing repository-wide
  warnings already described above.

The frozen-surface result remains unchanged: 29 post-Step7 mathematical item
changes, all draft and authorization-allowlisted; zero created, deleted,
published, or out-of-allowlist item changes; all 44 page files and every page
inventory unchanged. The final fixes added no supplier, item, page, or pair and
did not edit any published content, plan, ledger, runtime state, or Step-7
history.
