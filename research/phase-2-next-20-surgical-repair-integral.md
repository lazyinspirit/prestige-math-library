# Postfreeze surgical repair: integral and unit-circle consumers in batches 1, 4, 14 and 15

Date: 2026-09-11. Scope: groups `a`, `c`, `h` and `b`, batches 1, 4,
14 and 15. This is repair-author evidence, not an independent audit. No
published item was edited, no pair or page was added, and no defect-ledger row
was closed.

## Mathematical repair

The common defect is in the published proof that the nonnegative simple
integral is representation independent. Its intersections `E_i \cap F_j` need
not cover the parts on which one arbitrary disjoint display omits the zero
value. Each repaired consumer now supplies the missing finite refinement before
using the affected interface:

1. augment every finite disjoint display by the complement of its displayed
   sets with coefficient zero;
2. intersect the augmented partitions, so every point is covered and equality
   of the represented functions forces equal coefficients on every nonempty
   cell;
3. use finite additivity with the fixed convention `0 * (+infinity) = 0`;
4. derive common-refinement monotonicity and additivity, treating scalar zero
   directly and positive scalars separately;
5. recover MCT from `A_j={f_j >= c s}`, `0<c<1`, then nonnegative additivity
   and finite real/complex `L1` linearity. Where needed, Fatou and DCT, the
   zero-integral criterion, and the unaffected RN/CE or total-variation
   arguments are then reconstructed from that repaired base.

Batch 1 installs the full canonical-simple/MCT argument in
`def-unitary-eigenfunction-for-a-probability-system`. Canonical level sets and
measure preservation then prove nonnegative integral invariance and the
complex `L2` Koopman isometry directly. The compact-intertwiner lemma and the
weak-mixing theorem now route their factor and product isometries through this
local interface and no longer declare the affected Koopman theorem.

All eleven batch-4 direct candidates were full-read. Every direct use was
load-bearing: MCT proves divergence in the unbounded-transform counterexample;
finite `L1` linearity proves closure, orthogonality, square/bracket and moment
identities; and RN/CE supplies the density and conditional classes. Each now
contains the appropriate canonical-refinement reconstruction at its first use.
This includes the two confirmed carriers
`def-discrete-martingale-transform` and
`thm-doob-decomposition-of-an-integrable-adapted-process` and the nine broader
candidates listed below.

The batch-14 density lemma supplies the full refinement, scalar split, MCT,
finite-linearity and zero-integral arguments before invoking the unaffected
remainder of RN. All later locality, complement, countable-disjoint-sum and
small-null-join steps were rechecked against that interface.

Both batch-15 direct integral candidates were load-bearing. The `L1` Fourier
mapping theorem now derives finite complex linearity and DCT locally before
the tail estimate. The finite-complex-measure transform derives positive DCT,
the canonical nonzero-level simple variation bound, independence of `L1(|mu|)`
simple limits and finite linearity before its boundedness and uniform-continuity
argument; it still does not use RN or Hahn decomposition.

The periodic Fourier-uniqueness lemma has two repairs. Equal sine-cosine pairs
at `s,t` now give `sin(s-t)=0` and `cos(s-t)=1` by the subtraction formulas;
the sine zero set gives `s-t=m*pi`, and `cos(m*pi)=(-1)^m` forces `m` even.
Thus the torus map has exactly the integer-difference fibres. The same proof
also reconstructs finite complex integral linearity and proves the required
zero-integral implication directly from the level sets of `|f|^2`.

## Broader owned direct candidates

The following mechanically listed candidates outside the original confirmed
set were full-read, found load-bearing, and repaired:

- batch 4: `cex-an-unbounded-predictable-transform-may-lose-integrability`,
  `cor-second-moment-is-the-expected-predictable-quadratic-variation`,
  `def-predictable-quadratic-variation-in-discrete-time`,
  `ex-dyadic-conditional-expectation-martingale`,
  `ex-likelihood-ratio-martingale`,
  `ex-partial-sums-of-independent-centered-variables-are-a-martingale`,
  `lem-martingale-differences-are-orthogonal-in-l2`,
  `thm-martingales-and-martingale-differences-correspond`, and
  `thm-square-minus-predictable-quadratic-variation-is-a-martingale`;
- batch 15:
  `thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions`.

No other row of the 40-row candidate file belongs to batches 1, 4, 14 or 15.

## Manifest and contract evidence

The exact batch-1 manifest replaces the two affected Koopman/invariance
dependencies of the eigenfunction definition by the primitive Koopman,
simple-integral, nonnegative-integral and increasing-simple-approximation
interfaces. It removes the affected Koopman dependency from the two later
consumers and records the local route in their strategies. The exact batch-15
manifest adds `thm-sine-and-cosine-subtraction-formulas`, synchronizes the
previously wider current dependency list of the `L1` Fourier mapping theorem,
and records the local repair strategies. Manifest/frontmatter dependency parity
holds for all eighteen repaired items.

`tools/regen-contract-entries.mjs` regenerated 15 changed proof-bearing
entries: 2 in batch 1, 9 in batch 4, 1 in batch 14 and 3 in batch 15. Existing
boundary and risk-review records were preserved. The three changed definitions
are non-proof-bearing and have no derivation rows to regenerate.

| Evidence file | SHA-256 |
|---|---|
| `research/phase-2-next-20-batch-1.pages.json` | `b89eee1500545c254617e0aad66974502b8cee4077ab76217b8cefdebb5281f2` |
| `research/phase-2-next-20-batch-1.proof-contracts.json` | `40a0e400a48400860520aa7effdb17ed3f6ac2ac2275b17c1cd578b66a43b68d` |
| `research/phase-2-next-20-batch-4.pages.json` | `0964e184bd940565ed65e62df06b0be82f1248546c22589df62190b9717262b5` |
| `research/phase-2-next-20-batch-4.proof-contracts.json` | `2c53291ffd20b6149ad8bd95852b26f7ac078858f6e66fdd8ec2bab55274c750` |
| `research/phase-2-next-20-batch-14.pages.json` | `7bf5996f635312fcb44ffcfc3814f985028912ea44301187630207e34bed3886` |
| `research/phase-2-next-20-batch-14.proof-contracts.json` | `41217291fc34d2e63bbddbb620e4f838cf8d8f0a49e971424fb30b66543e66ab` |
| `research/phase-2-next-20-batch-15.pages.json` | `1c05e5432f627f5a6d4f231a6169c0bf16468d25d3ff5e84d3bb28429303a8df` |
| `research/phase-2-next-20-batch-15.proof-contracts.json` | `3be3da9ed2cf9b1affd917183e8287225eecac2c3ba391fa8049b53c0a54083d` |

## Focused verification

- `rendercheck` on all 18 repaired item files: pass, zero errors.
- `precheck` on all 15 proof-bearing repaired items: pass, 15/15.
- strict `proof-contract` on the changed entries: pass, 2/2 in batch 1, 9/9
  in batch 4, 1/1 in batch 14 and 3/3 in batch 15.
- `citation-fidelity` on all four complete batch contracts: pass; 674 citations
  over 150 authored items, no missing quote or widening candidate.
- `content-policy` on all four exact manifests: pass; 159 scoped items, zero
  errors and warnings.
- manifest/frontmatter dependency parity for all 18 repaired IDs: pass.
- `validate-plan research/plan-spec.json`: pass.
- `depcheck --quiet`: exit 0.
- `boundary-audit` on all four contracts: complete; no contradicted disposition
  or template reuse at or above three members.
- `splice-plan --run phase-2-next-20 --verify` correctly reports the three
  changed owned page objects as awaiting the recovery-wide re-splice. It also
  reports the already changed batch-3, batch-8 and batch-9 pages owned by the
  other surgical repairs. No plan mutation was made here.
- Active state was verified from `.autopilot/phase-2-next-20`: paused at
  `8-receipt`, with nothing in flight.

## Exact item hashes

| Item | Before | After |
|---|---|---|
| `def-unitary-eigenfunction-for-a-probability-system` | `666f28fa58107fc3f1ac73bb7b2233b919c80142b8b17d44cb0c1ea0680fe38a` | `8b986ed5ace91d50d8f769c38ec0b696309300f8483fe27d77b78108d6c44da2` |
| `lem-invariant-square-integrable-kernel-produces-a-compact-intertwiner` | `55c6c070602de69773b6031473347b56e55e5cef21e58bed0598fda477509b04` | `978acd2897bc6490dad7f70245ba1827ad4fc0ed759c8814fd6b045be6059ca1` |
| `thm-weak-mixing-is-equivalent-to-absence-of-nonconstant-eigenfunctions` | `93f23ff3792bf37612d59f16ff8c499bf46afb7637278524d1277aafeba782b7` | `6e97977f10b81acb657c385e82ac2e89bfbc89763d4d9c9dfe26a7afaa1cb061` |
| `cex-an-unbounded-predictable-transform-may-lose-integrability` | `0644060775d4ab7d1fc7269236be74e563ea6a8226a8c012f5bc43a9a892a31c` | `dec71cbbb916c3406875a9e2421cc928c4ff110ab238edcf6ccc24b576c7b019` |
| `cor-second-moment-is-the-expected-predictable-quadratic-variation` | `b4df99a79bc16177f7eb4c63dc04d3e5cc6614754c7e4702e820d04119b12488` | `2ab8b5463da373b634b49320b2f7a014847fffb45572c15a744aef9f4fa1e22c` |
| `def-discrete-martingale-transform` | `f026a85e5d740690899e0fb64b6083e58fe3efa4dfcfd0b50a4ecc39fc1d4909` | `304777ceca8d979a84ac854d193ab6b66b422df19a21e34eca60e6cb25474d2e` |
| `def-predictable-quadratic-variation-in-discrete-time` | `5f33cfc2c14f279c1432c0ad6f3a274fd15d8974cc434c5a52082eb7d34637c2` | `59320f2b6493a5137813ee5c2d0c138a922df7937112c38fc01535e49b3d7e57` |
| `ex-dyadic-conditional-expectation-martingale` | `3ede4c7f87f3c5bb22e75937d696ba096fc47a063f35ce7897492737be9f484b` | `b54554697c1cffbab540df5898f9a66a0417df583b68f2ba47f8f200b1811070` |
| `ex-likelihood-ratio-martingale` | `0259931ba8beb78dfcca8af4a1725220fdff7a9aefecc4eb642777e94c93d813` | `7de7f611de964d4ec12af6f473c51c6c8d335848b3fb705c34dbe75169b6e231` |
| `ex-partial-sums-of-independent-centered-variables-are-a-martingale` | `d97dfa39105d1a14fffe1f9426a980ff99412006b8e36adea6fcd0c0b08a92a7` | `941e1cc9d696abbd4be27d151fa22d08544eab8196aa1d838c6f2118b681fee2` |
| `lem-martingale-differences-are-orthogonal-in-l2` | `aca31641e3b5688802038e1f88fe24dd572af39e8cd13e30514110b3df7dffd8` | `40908976247e07bb40f6c698b1c6fff35b4b6f7dcd1dcc1ca380d86827e36b7b` |
| `thm-doob-decomposition-of-an-integrable-adapted-process` | `2dbd57d5f8449546cd8b9923c6258ce3ca300e56ff5ae29afa0b3a82529b7cc5` | `9bd7e02bc4f77ffb248f84ff3fb4999e009ad9860e5b5e69791f9b1336f75d40` |
| `thm-martingales-and-martingale-differences-correspond` | `db5bd86d578925d2d6309aa1e13a1298dc34edd9622fe22978b1ef21aa4b2711` | `daffedcf02fe20b01a2d5058ff1fbbc1c492e3e6892823f46dc981b115e978cb` |
| `thm-square-minus-predictable-quadratic-variation-is-a-martingale` | `102929e5c5069a0dfb40c12a806a5f6ae9405f23c427aecf777e067dde068513` | `f26aa6d1f092ca062a4a92b8d60dfbbef2e75db8dd5aab56076df5fffb12968e` |
| `lem-lc-solovay-density-locality-and-null-joins` | `f2c434fbe653bb9beb778b1089e849648642be376b1f93f4644d4d64aa256ec0` | `803aaecc8cb8386ea51f0fb636acba7eb0b0fc273f43758040ff1cc772267cce` |
| `thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions` | `fb97a3d13c8c75445a5432c2465fa7a8f061724b2d6cfa558bc855db5e6da813` | `485cb73e315977a5407cfe79360efc92bcdc514819f836cb5b06f5f3e1ac5797` |
| `thm-fourier-transform-of-a-finite-complex-measure` | `c45df5b4d01ff9517b9c18d99c91b34880f6088e4cff9170860741816313fa55` | `a4012d34d23d6f326568aa3a3022c7525a830da5c38903cfd2a7dbb9758b76db` |
| `lem-periodic-continuous-functions-are-determined-by-their-fourier-coefficients` | `40f95aeca347fb3c51ea850bf76c58b3d532c250c075209c75e33a32006e8a4d` | `a961401f4abbd1e1e8d878860081541e2600746496577b971b39b296c3b997c4` |

The published supplier defects remain recorded for independent audit and later
published-item repair. These eighteen active consumers now contain local
bypasses of the affected clauses.
