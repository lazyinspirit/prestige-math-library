# B16 independent audit — 2026-10-05

Reviewer: `/root/resume_b12_b14/audit_b14_core`. Scope: the 24 previously open B16 items; the ten already current/closed items, including B13's seven obstacle suppliers, were not edited or reviewed again.

## Freeze

Current scope hash: `6ea92de88d30c05d05a674e1b6cac9c6792858693b22c64e4559f947bde383df`.

Mathematical audit is complete for all 24 subject to the supplier closure listed below. The owner proceeded the final scope, and 20 ordinary confidence-1 accepts were then recorded in dependency order after checking each live hash and direct supplier closure. B16 now has 30/34 current closed rows. The absolute-value and first-eigenfunction items retain stale owner-repaired decisions; no reviewer bypass was attempted.

## Repairs

- Finite multiplier final proof paragraph now accounts for the implicit-function theorem inherited from stationarity; uniqueness evaluates the correctly indexed component DG_i.
- Integral example explicitly assumes inherited AC, proves the closed H1-zero space is Hilbert, uses the continuous affine G map, and cites the AC-to-DC/CC and FTC interfaces. Its original A≠0 claim is preserved. No item consumes this Example as a mathematical supplier.
- Contact-support proof handles arbitrary signed tests with epsilon < min(u−psi)/||chi||infinity, records the extreme-value supplier, and treats the empty compact subset correctly.
- Lewy–Stampacchia domination includes the dimension factors for coefficientwise bounds. The distributional truncation argument retains its original full lower-order coefficient hypotheses.
- One-dimensional explicit obstacle derivatives are continuous and piecewise affine, hence absolutely continuous; continuity alone is no longer given as the justification.
- Radial counterexample uses continuous piecewise C1 line sections with bounded derivatives on compact sets away from the origin; it explicitly accounts for the inherited ACL supplier's AC.
- Higher-eigenvalue proof gives an explicit right inverse for the constraint derivative and distinguishes spectral eigenvalues from multiplier components.
- Owner-authorized Remark says obstacle constraints do not by themselves provide a differentiable multiplier field.
- Refreshed the 23 open proof contracts. Corrected contract boundary assertions about ± interval Rayleigh minimizers, the integral constraint's regularity being independent of A, all zero-trace candidates, the first-eigenspace biconditional, and choice accounting.

## Focused checks

After final source edits: `node tools/proof-layout.mjs` on the ten explicit changed item paths: **10 items, 53 steps, 0 defects**. This is the required source-layout check, not a run gate or test. No tests or gates were run. Manifest/contract synchronization was limited to this audit's B16 carriers.

## Current open item hashes at freeze

| Item | Transitive hash | Direct open suppliers |
|---|---|---|
| `lem-strong-ltwo-compactness-preserves-unit-normalisation` | `15a8c5454fadd8b25f1d13738b333b38d5e9885c405e0952d40abcd5efef7cf0` | None |
| `thm-banach-implicit-function-theorem-for-a-split-surjective-derivative` | `954ce0287972247f38f4980519c39c2a3efa5dcdc0c1f12af17a17827710a55f` | None |
| `lem-regular-banach-constraint-directions-are-realised-by-level-set-curves` | `423e8c1d596bd70557f738187891ddad1544e708968a78fc449f25504b34ab0d` | `thm-banach-implicit-function-theorem-for-a-split-surjective-derivative` |
| `lem-tangent-space-to-a-regular-level-set-is-the-kernel-of-the-constraint-derivative` | `16aebbb18e9d38f649b2f61997180cc4fcdf7e55f6385e829db1dddc92c05e74` | `lem-regular-banach-constraint-directions-are-realised-by-level-set-curves`, `thm-banach-implicit-function-theorem-for-a-split-surjective-derivative` |
| `lem-the-differential-annihilates-the-tangent-kernel-at-a-constrained-extremum` | `5b95ff2e856737a95dc378ebd393e3860a19f96e4ff121ee2006774b81f0964b` | `lem-tangent-space-to-a-regular-level-set-is-the-kernel-of-the-constraint-derivative` |
| `lem-functionals-vanishing-on-the-common-kernel-of-an-independent-family` | `fe624ed05c6543985dc4b612e7e20e86e9af887c5cac210af72674b176cdb914` | None |
| `thm-hilbert-space-lagrange-multiplier-rule-for-one-regular-constraint` | `12ee22e98b087c131bad9582c8ad78ae42c19cf6bcb469b62c7b3611cc82ee99` | `lem-functionals-vanishing-on-the-common-kernel-of-an-independent-family`, `lem-the-differential-annihilates-the-tangent-kernel-at-a-constrained-extremum` |
| `thm-finite-regular-constraint-lagrange-multiplier-rule` | `70a3b592f514f3543ae648ef2debb02ecb2053299f366021d62bbd3a3ddaf489` | `lem-functionals-vanishing-on-the-common-kernel-of-an-independent-family`, `lem-the-differential-annihilates-the-tangent-kernel-at-a-constrained-extremum` |
| `lem-lagrange-multiplier-is-unique-when-constraint-gradients-are-independent` | `924ee80678bf23f7c7eae8ff1e1facd869ab82ce7e0880fa93a1b8e5418b6680` | `thm-finite-regular-constraint-lagrange-multiplier-rule` |
| `thm-lipschitz-stability-of-strongly-monotone-variational-inequalities` | `e67cbea841368946c363f6b8a3fda3e75264139fa597c3b227a0fee30879c195` | None |
| `cor-obstacle-reaction-is-supported-on-the-contact-set-under-measure-regularity` | `972bd2c4ceeccf3234e90c1603119a76a5cba650e4c816a467db740b50b0b08c` | None |
| `thm-lewy-stampacchia-bounds-in-the-sourced-obstacle-regularity-class` | `cf4d714190f5d8c89ef8281ca2531c717099366f4ee3bf3122afbeed8b868380` | None |
| `lem-absolute-value-does-not-increase-dirichlet-energy-or-change-ltwo-normalisation` | `53df2e80aab96d8653ecab04b12acdac0ba59ab59c57e5a2d17e7de86801d93e` | None |
| `thm-first-dirichlet-eigenfunction-by-constrained-minimisation` | `5373b63b4c7d5f6cd62089744afcfe05abab836f8267155a1d46786eda71a67c` | `def-ltwo-operator-associated-with-a-symmetric-elliptic-form`, `def-symmetric-elliptic-weak-eigenpair`, `lem-absolute-value-does-not-increase-dirichlet-energy-or-change-ltwo-normalisation`, `lem-strong-ltwo-compactness-preserves-unit-normalisation`, `thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator`, `thm-finite-regular-constraint-lagrange-multiplier-rule`, `thm-rayleigh-principle-for-the-first-dirichlet-eigenvalue` |
| `thm-higher-eigenvalues-by-orthogonality-constrained-minimisation` | `5cb232025e0abe1fbe9215c82af4115c6ccef5a58f8ab26c06cef87eeff056e1` | `cor-eigenfunctions-for-distinct-symmetric-elliptic-eigenvalues-are-ltwo-orthogonal`, `def-ltwo-operator-associated-with-a-symmetric-elliptic-form`, `def-symmetric-elliptic-weak-eigenpair`, `lem-strong-ltwo-compactness-preserves-unit-normalisation`, `thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator`, `thm-finite-regular-constraint-lagrange-multiplier-rule` |
| `rem-pointwise-and-integral-constraints-have-different-regularity-tests` | `586018cb24704da0090c8b79ff4c18b2d033dfd16905f92ebc3205f1b39b7d17` | `cor-obstacle-reaction-is-supported-on-the-contact-set-under-measure-regularity`, `thm-finite-regular-constraint-lagrange-multiplier-rule`, `thm-hilbert-space-lagrange-multiplier-rule-for-one-regular-constraint` |
| `ex-rayleigh-quotient-on-an-interval` | `892641215e469d9811739321d017f0d86595d35baee00e369900ac23b98b7680` | `thm-first-dirichlet-eigenfunction-by-constrained-minimisation` |
| `ex-isoperimetric-integral-constraint-and-its-multiplier` | `2b3e415cb66b86f8b6b8fa55693ad5cad2ca29de6990fe732459581b9af3a1df` | `thm-hilbert-space-lagrange-multiplier-rule-for-one-regular-constraint` |
| `cex-the-ltwo-unit-sphere-is-not-weakly-closed-in-an-infinite-dimensional-hilbert-space` | `84b7317b52cc718aec079a6e78881c49a95a1c0084a390ebc99b25b2d3de9070` | `lem-strong-ltwo-compactness-preserves-unit-normalisation` |
| `ex-one-dimensional-obstacle-problem-and-contact-set` | `3d7c4149e42440cf1ace57d6a30572d95d648d324af51e8e996e9bba2e3645a0` | None |
| `cex-obstacle-complementarity-product-needs-extra-regularity` | `fa1abf80224d7e5958e264ce4a4ab59fa806cc16ed888a6335f672bb417303ca` | `cor-obstacle-reaction-is-supported-on-the-contact-set-under-measure-regularity` |
| `cex-obstacle-admissible-set-can-be-empty-when-trace-and-obstacle-are-incompatible` | `69d33fa9ee31346a3541be864789574f0ae94133db346de7ecae163f2ab24cc4` | None |
| `cex-dependent-equality-constraints-have-nonunique-multiplier-vectors` | `a31bb31145bb8ffb34919febdc6f2a42162c5269fa8804bf3b0d0787c9aa4b51` | `lem-lagrange-multiplier-is-unique-when-constraint-gradients-are-independent`, `thm-finite-regular-constraint-lagrange-multiplier-rule` |
| `ex-one-dimensional-obstacle-reaction-is-supported-on-the-contact-set` | `8b16c8c22c5a23290916aa19e42c4fa9a1a7de6a4da4417a472dc5c063fede85` | `ex-one-dimensional-obstacle-problem-and-contact-set` |

## After the twenty ordinary receipts

Scope remains `6ea92de88d30c05d05a674e1b6cac9c6792858693b22c64e4559f947bde383df`. No further source or contract edit occurred.

### lem-absolute-value-does-not-increase-dirichlet-energy-or-change-ltwo-normalisation

Current hash: `53df2e80aab96d8653ecab04b12acdac0ba59ab59c57e5a2d17e7de86801d93e`. lem-absolute-value-does-not-increase-dirichlet-energy-or-change-ltwo-normalisation: changed inputs require a current owner decision.

All direct suppliers are current; the stale owner decision is the sole blocker.
### thm-first-dirichlet-eigenfunction-by-constrained-minimisation

Current hash: `5373b63b4c7d5f6cd62089744afcfe05abab836f8267155a1d46786eda71a67c`. thm-first-dirichlet-eigenfunction-by-constrained-minimisation: changed inputs require a current owner decision.

Direct open suppliers:

- `def-ltwo-operator-associated-with-a-symmetric-elliptic-form` at `3b420ff23bf2db6ff85dc1aaa0bdc6c5ef83f38ae2bec81aceeed8e1fb3af09a`: def-ltwo-operator-associated-with-a-symmetric-elliptic-form: current item audit required.
- `def-symmetric-elliptic-weak-eigenpair` at `1822c75b09373770f333e880180567dc3f99a51aba6764fa59873355d9d26177`: def-symmetric-elliptic-weak-eigenpair: current item audit required.
- `lem-absolute-value-does-not-increase-dirichlet-energy-or-change-ltwo-normalisation` at `53df2e80aab96d8653ecab04b12acdac0ba59ab59c57e5a2d17e7de86801d93e`: lem-absolute-value-does-not-increase-dirichlet-energy-or-change-ltwo-normalisation: changed inputs require a current owner decision.
- `thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator` at `5d76e3b3696552c9162567929c064ec04bd239c6fc421a04e8e5c02ba6326c13`: thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator: changed inputs require a current owner decision.
- `thm-rayleigh-principle-for-the-first-dirichlet-eigenvalue` at `d46bce18bf4918fe59665018ad9409d740ee95da644a15bf0290e24b9b49047c`: thm-rayleigh-principle-for-the-first-dirichlet-eigenvalue: changed inputs require a current owner decision.
### thm-higher-eigenvalues-by-orthogonality-constrained-minimisation

Current hash: `5cb232025e0abe1fbe9215c82af4115c6ccef5a58f8ab26c06cef87eeff056e1`. thm-higher-eigenvalues-by-orthogonality-constrained-minimisation: current item audit required.

Direct open suppliers:

- `cor-eigenfunctions-for-distinct-symmetric-elliptic-eigenvalues-are-ltwo-orthogonal` at `a01fa76922d774ca80d4514c2ba191cebf38e49a5878babbb38e1f75dad20819`: cor-eigenfunctions-for-distinct-symmetric-elliptic-eigenvalues-are-ltwo-orthogonal: current item audit required.
- `def-ltwo-operator-associated-with-a-symmetric-elliptic-form` at `3b420ff23bf2db6ff85dc1aaa0bdc6c5ef83f38ae2bec81aceeed8e1fb3af09a`: def-ltwo-operator-associated-with-a-symmetric-elliptic-form: current item audit required.
- `def-symmetric-elliptic-weak-eigenpair` at `1822c75b09373770f333e880180567dc3f99a51aba6764fa59873355d9d26177`: def-symmetric-elliptic-weak-eigenpair: current item audit required.
- `thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator` at `5d76e3b3696552c9162567929c064ec04bd239c6fc421a04e8e5c02ba6326c13`: thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator: changed inputs require a current owner decision.
### ex-rayleigh-quotient-on-an-interval

Current hash: `892641215e469d9811739321d017f0d86595d35baee00e369900ac23b98b7680`. ex-rayleigh-quotient-on-an-interval: current item audit required.

Direct open suppliers:

- `thm-first-dirichlet-eigenfunction-by-constrained-minimisation` at `5373b63b4c7d5f6cd62089744afcfe05abab836f8267155a1d46786eda71a67c`: thm-first-dirichlet-eigenfunction-by-constrained-minimisation: changed inputs require a current owner decision.
