# Exact Step-8 repair envelope — 8-rejudge, round 1

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
the full untruncated output, exact current rejection tuples, and explicit run/published ownership.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-25",
  "stage": "8-rejudge",
  "round": 1,
  "mode": "rejudge-adjudication",
  "group": "c",
  "failures": [
    {
      "id": "judge-closure",
      "stage": "8-rejudge",
      "why": "ERROR judge-adjudication-missing [cex-an-absolutely-continuous-finite-measure-can-have-an-unbounded-radon-nikodym-derivative]: cex-an-absolutely-continuous-finite-measure-can-have-an-unbounded-radon-nikodym-derivative: current gpt-5.6-terra",
      "output": "level-coverage --judge-only: 381/381 current configured-judge verdict set(s); 0 terminal manual resolution(s), 0 need rejudge, 64 unadjudicated, 0 open fatal, 122 adjudicated rejection(s) closed nonfatally; legacy gate counter 381/381 current pairs (one per-item configured verdict set, including singleton lineups)\nERROR judge-adjudication-missing [cex-an-absolutely-continuous-finite-measure-can-have-an-unbounded-radon-nikodym-derivative]: cex-an-absolutely-continuous-finite-measure-can-have-an-unbounded-radon-nikodym-derivative: current gpt-5.6-terra rejection has no exact Alpha outcome for context fac5fe6d82406700ea40a913cd8aa6ca2f895b7e967d08c37b8af117bf6b27ce\nERROR judge-adjudication-missing [cex-the-figure-eight-is-an-immersed-image-not-an-embedded-submanifold]: cex-the-figure-eight-is-an-immersed-image-not-an-embedded-submanifold: current gpt-5.6-terra rejection has no exact Alpha outcome for context d71738ff56ec40ea56b591b8778f5f83f29901a60a5a0d6fd686cabae0707932\nERROR judge-adjudication-missing [cex-two-radon-nikodym-derivatives-can-differ-on-a-null-set]: cex-two-radon-nikodym-derivatives-can-differ-on-a-null-set: current gpt-5.6-terra rejection has no exact Alpha outcome for context c4a3b063c74d966ee437f53166367659a34567d2be2abf83e8bcc715c69676c8\nERROR judge-adjudication-missing [cex-x-inverse-dlambda-on-zero-one-shows-finiteness-is-needed-in-the-epsilon-delta-criterion]: cex-x-inverse-dlambda-on-zero-one-shows-finiteness-is-needed-in-the-epsilon-delta-criterion: current gpt-5.6-terra rejection has no exact Alpha outcome for context d1a8e48badb3ee44c1b3a11417a1975138a811f48c4e3adc35f73a32b244483e\nERROR judge-adjudication-missing [cor-finite-complex-measures-admit-integrable-radon-nikodym-densities]: cor-finite-complex-measures-admit-integrable-radon-nikodym-densities: current gpt-5.6-terra rejection has no exact Alpha outcome for context aeefdd0e77f384c1209b106639cb03e5c0a8cf5cf132001d03d9c9fe7ac369fb\nERROR judge-adjudication-missing [def-multitape-and-nondeterministic-machines]: def-multitape-and-nondeterministic-machines: current gpt-5.6-terra rejection has no exact Alpha outcome for context a1c15f4a9238a1d8bf929d5e4487d5a0142cf1442efbdfd3041218b9eb962ba7\nERROR judge-adjudication-missing [def-power-iteration]: def-power-iteration: current gpt-5.6-terra rejection has no exact Alpha outcome for context 01aa568c20401afce978a3e07759c7e7db4ed1597247624e0dc0be3d237a0b23\nERROR judge-adjudication-missing [def-subspace-iteration-and-the-dominant-invariant-subspace]: def-subspace-iteration-and-the-dominant-invariant-subspace: current gpt-5.6-terra rejection has no exact Alpha outcome for context 6be70fc25b7e30e65cc3ef57606e555303228a1f0c7162559462ca6aa8cd6070\nERROR judge-adjudication-missing [def-truncated-singular-value-pseudoinverse-at-a-declared-threshold]: def-truncated-singular-value-pseudoinverse-at-a-declared-threshold: current gpt-5.6-terra rejection has no exact Alpha outcome for context be8a57e2d2ace088c06bd65aa57bd28aaeeaaab1486a93ffec5d8a4bda7581b2\nERROR judge-adjudication-missing [def-unshifted-and-shifted-qr-iteration-with-deflation-and-wilkinson-shift]: def-unshifted-and-shifted-qr-iteration-with-deflation-and-wilkinson-shift: current gpt-5.6-terra rejection has no exact Alpha outcome for context bb2601e7bdaf1261dd4a88d34524c48c8a95f91c2b2a69756eb9d168b4300c18\nERROR judge-adjudication-missing [ex-a-cylinder-as-the-preimage-of-a-circle-under-projection]: ex-a-cylinder-as-the-preimage-of-a-circle-under-projection: current gpt-5.6-terra rejection has no exact Alpha outcome for context ed58fb1bf394380036638f813435030fa0c8d3cf3e5c1c2375d962eac7c0efae\nERROR judge-adjudication-missing [ex-a-lax-monoidal-functor-that-is-not-strong]: ex-a-lax-monoidal-functor-that-is-not-strong: current gpt-5.6-terra rejection has no exact Alpha outcome for context 7770029f7b82643e5d18b26377317cc84a83aafe955dfd2fb1f237954caf08a2\nERROR judge-adjudication-missing [ex-a-piecewise-quadratic-distribution-function-recovers-its-density]: ex-a-piecewise-quadratic-distribution-function-recovers-its-density: current gpt-5.6-terra rejection has no exact Alpha outcome for context f8b57e3cd4ec235cb6b41f010dc9adf326fb610b6d8bc72eb607a4cca8e53e0b\nERROR judge-adjudication-missing [ex-a-regular-value-with-empty-fibre]: ex-a-regular-value-with-empty-fibre: current gpt-5.6-terra rejection has no exact Alpha outcome for context b2b82334f705e6099648b063e639c75c60d524ec96eb9ab2a2bed7a5f52653c1\nERROR judge-adjudication-missing [ex-cfg-to-pda-construction]: ex-cfg-to-pda-construction: current gpt-5.6-terra rejection has no exact Alpha outcome for context 2c18af59217dda8c348b4581a04e37a4305f7c57bb8b4a931d112624e1bde025\nERROR judge-adjudication-missing [ex-coordinate-inclusions-and-projections-as-immersion-and-submersion]: ex-coordinate-inclusions-and-projections-as-immersion-and-submersion: current gpt-5.6-terra rejection has no exact Alpha outcome for context eac80cbbb5490fdf9c96bf312540296ea84be801818f9b25714b2be666cf7d6d\nERROR judge-adjudication-missing [ex-power-iteration-on-a-diagonal-matrix-displays-the-eigenvalue-ratio-rate]: ex-power-iteration-on-a-diagonal-matrix-displays-the-eigenvalue-ratio-rate: current gpt-5.6-terra rejection has no exact Alpha outcome for context 54dccb12c5d48ce938eb0da3e4992d486c6e4c82de4291202432143930d55f48\nERROR judge-adjudication-missing [ex-the-chain-rule-for-radon-nikodym-derivatives-on-zero-one]: ex-the-chain-rule-for-radon-nikodym-derivatives-on-zero-one: current gpt-5.6-terra rejection has no exact Alpha outcome for context 57d0a65664349d6e2fcf1a1086ebfea713e9f9bb34a319ee0e1e17698f70c924\nERROR judge-adjudication-missing [ex-the-density-two-x-on-zero-one-is-the-radon-nikodym-derivative-of-two-x-indicator-dlambda]: ex-the-density-two-x-on-zero-one-is-the-radon-nikodym-derivative-of-two-x-indicator-dlambda: current gpt-5.6-terra rejection has no exact Alpha outcome for context a67c3554fd1247d0caf81dfdb400b476a2f3e247b0c349bdf42e5836c96ddd49\nERROR judge-adjudication-missing [ex-the-graph-of-the-sine-function-as-an-embedded-submanifold]: ex-the-graph-of-the-sine-function-as-an-embedded-submanifold: current gpt-5.6-terra rejection has no exact Alpha outcome for context 8a4e3d056ba67f6d138844cc84c6fd3943233f64b6fc78b648ca913022076ba6\nERROR judge-adjudication-missing [ex-the-special-linear-group-as-a-regular-level-set]: ex-the-special-linear-group-as-a-regular-level-set: current gpt-5.6-terra rejection has no exact Alpha outcome for context ad8085a091fa0bf295eec4992168f071c693f97e7fd0f70440e10ac5c763f314\nERROR judge-adjudication-missing [ex-valid-computation-histories-are-decidable]: ex-valid-computation-histories-are-decidable: current gpt-5.6-terra rejection has no exact Alpha outcome for context 30db336fe1b7bb8970ac74a8d93b76232ea02b640d3b0b7a54c09b40040c8c49\nERROR judge-adjudication-missing [fs-a-monoid-object-in-the-endofunctor-category-is-the-definition-of-a-monad]: fs-a-monoid-object-in-the-endofunctor-category-is-the-definition-of-a-monad: current gpt-5.6-terra rejection has no exact Alpha outcome for context 19b7507d1785637bd43261ad66e7602f13c46abd9d73a90abe3377781c39bd58\nERROR judge-adjudication-missing [fs-a-monoidal-functor-is-one-whose-structure-maps-are-isomorphisms]: fs-a-monoidal-functor-is-one-whose-structure-maps-are-isomorphisms: current gpt-5.6-terra rejection has no exact Alpha outcome for context e78fad9f3e2f9a2510d162456ceb81385e34989c13dd13dddeda01df42589430\nERROR judge-adjudication-missing [fs-a-regular-value-must-belong-to-the-image]: fs-a-regular-value-must-belong-to-the-image: current gpt-5.6-terra rejection has no exact Alpha outcome for context 694547a07ffd7415aa56f44087e10a5d7102b03b0dbaf8418aac143c6df9fa7f\nERROR judge-adjudication-missing [fs-absolutely-continuous-measures-always-have-bounded-radon-nikodym-derivatives]: fs-absolutely-continuous-measures-always-have-bounded-radon-nikodym-derivatives: current gpt-5.6-terra rejection has no exact Alpha outcome for context 20133d02dc9a46affaa9afe9bb7d27d861086b1fa64667da80d247579645a51f\nERROR judge-adjudication-missing [fs-every-measure-is-absolutely-continuous-or-singular-with-respect-to-lebesgue-measure]: fs-every-measure-is-absolutely-continuous-or-singular-with-respect-to-lebesgue-measure: current gpt-5.6-terra rejection has no exact Alpha outcome for context ba422abce07acf0c2369ac632ffbd07d49a780c439ee616641ea63836e73cd51\nERROR judge-adjudication-missing [fs-the-epsilon-delta-condition-characterises-absolute-continuity-for-every-measure]: fs-the-epsilon-delta-condition-characterises-absolute-continuity-for-every-measure: current gpt-5.6-terra rejection has no exact Alpha outcome for context 914583609afbf27dd6ed3278cc98dce35193ca4b42298ef2eec5939fb576bfa7\nERROR judge-adjudication-missing [fs-the-image-of-every-immersion-is-an-embedded-submanifold]: fs-the-image-of-every-immersion-is-an-embedded-submanifold: current gpt-5.6-terra rejection has no exact Alpha outcome for context 45792e31418ddd14847ebaa3844eaaffb2d4bd0487f20b700c1cf19fd866047e\nERROR judge-adjudication-missing [fs-the-radon-nikodym-derivative-is-a-uniquely-determined-function]: fs-the-radon-nikodym-derivative-is-a-uniquely-determined-function: current gpt-5.6-terra rejection has no exact Alpha outcome for context 798ba97883bdfb17c7f8a28d3544b8d46b930b0d4685cbfb5fb512702ef76bb1\nERROR judge-adjudication-missing [fs-the-radon-nikodym-theorem-holds-without-sigma-finiteness]: fs-the-radon-nikodym-theorem-holds-without-sigma-finiteness: current gpt-5.6-terra rejection has no exact Alpha outcome for context 60e9c40e878f76509cef358cbd55db63fbc3c33d1c0d769fecd4c52e91f3c900\nERROR judge-adjudication-missing [fs-the-unit-constraints-must-be-imposed-as-axioms]: fs-the-unit-constraints-must-be-imposed-as-axioms: current gpt-5.6-terra rejection has no exact Alpha outcome for context c659fc4a1ae220fe0cc3cf0b72848181bef9a878e96e2eb98ead0231d0bb9dca\nERROR judge-adjudication-missing [lem-dpdas-have-unique-computations]: lem-dpdas-have-unique-computations: current gpt-5.6-terra rejection has no exact Alpha outcome for context 1e170d93d27d393cb238c9f3703f0fe7e0fe3b53f2a7f1bbe49d8c18ee56ac83\nERROR judge-adjudication-missing [lem-pda-fragment-variables-compose]: lem-pda-fragment-variables-compose: current gpt-5.6-terra rejection has no exact Alpha outcome for context 5f40672c5cf8f7d4b5b988735df82b17a2831f6c47da0e50d0b9195aa63f9c8a\nERROR judge-adjudication-missing [prop-deterministic-cfls-are-unambiguous]: prop-deterministic-cfls-are-unambiguous: current gpt-5.6-terra rejection has no exact Alpha outcome for context 5231a96f068a6949e6b0b1ed714449901fb97037e3ccab8b4e22eb2b05131c00\nERROR judge-adjudication-missing [prop-full-column-rank-pseudoinverse-formula]: prop-full-column-rank-pseudoinverse-formula: current gpt-5.6-terra rejection has no exact Alpha outcome for context 75bc4ddca1da79ba420b2ba4dcf1200052dd7fa848dbd0ee6972f47adf6dbfe2\nERROR judge-adjudication-missing [prop-pseudoinversion-is-involutive-adjoint-compatible-and-unitarily-equivariant]: prop-pseudoinversion-is-involutive-adjoint-compatible-and-unitarily-equivariant: current gpt-5.6-terra rejection has no exact Alpha outcome for context 69e1c1868c162624559b685037d7389adbf09a71ba1e4ef6673edbd1202f032c\nERROR judge-adjudication-missing [prop-rayleigh-quotient-and-residual-converge-along-hermitian-power-iteration]: prop-rayleigh-quotient-and-residual-converge-along-hermitian-power-iteration: current gpt-5.6-terra rejection has no exact Alpha outcome for context 50f0a1f368ea08fdb23b6969a1915190b2edcaf4fad0ceab6729cb02e2039c7b\nERROR judge-adjudication-missing [prop-the-radon-nikodym-derivative-is-integrable-exactly-when-the-absolutely-continuous-part-is-finite]: prop-the-radon-nikodym-derivative-is-integrable-exactly-when-the-absolutely-continuous-part-is-finite: current gpt-5.6-terra rejection has no exact Alpha outcome for context bc8c51876b3b5897c054f37c58ecd65d0e074752bdafa3bd777abf92823b6d8e\nERROR judge-adjudication-missing [prop-the-smooth-structure-of-an-embedded-submanifold-is-unique]: prop-the-smooth-structure-of-an-embedded-submanifold-is-unique: current gpt-5.6-terra rejection has no exact Alpha outcome for context 4cb791ff16cd50451ee87cbd16c7df33f9ea6a23674730cc01798048e204c0cf\nERROR judge-adjudication-missing [prop-tikhonov-regularisation-has-singular-filter-factors]: prop-tikhonov-regularisation-has-singular-filter-factors: current gpt-5.6-terra rejection has no exact Alpha outcome for context 443904ca245b3ea869d72c5edb130a003145bff4f507aa2821e2fa9638d62bb9\nERROR judge-adjudication-missing [prop-truncated-svd-and-tikhonov-are-hard-and-smooth-spectral-filters]: prop-truncated-svd-and-tikhonov-are-hard-and-smooth-spectral-filters: current gpt-5.6-terra rejection has no exact Alpha outcome for context 4ec916e9dffb92e5cb2365eec11d8683dbc1a818ddafa274b29045a456aaade9\nERROR judge-adjudication-missing [prop-valid-computation-histories-are-decidable]: prop-valid-computation-histories-are-decidable: current gpt-5.6-terra rejection has no exact Alpha outcome for context 91c9dcb6ecd7babb98e34bfaddcc56ebee0fd21353f303bfbd9d3cfa67069bc0\nERROR judge-adjudication-missing [prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category]: prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category: current gpt-5.6-terra rejection has no exact Alpha outcome for context eb551fc59e6b94c7ddb65c69a489b3f6c20c02b57595266d438596d4e6507044\nERROR judge-adjudication-missing [thm-a-bounded-above-acyclic-complex-of-injective-objects-is-contractible-when-its-cycle-monomorphisms-split]: thm-a-bounded-above-acyclic-complex-of-injective-objects-is-contractible-when-its-cycle-monomorphisms-split: current gpt-5.6-terra rejection has no exact Alpha outcome for context bfa18b5d2cfa9da197d19871bcbc9897fa2d91883c3c33e5cc3ef73584e87a2f\nERROR judge-adjudication-missing [thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution]: thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution: current gpt-5.6-terra rejection has no exact Alpha outcome for context 33f228959f64abf0fa876b41cd497201d74298b6a69306012295a9d6076b9e7c\nERROR judge-adjudication-missing [thm-aa-plus-and-a-plus-a-are-orthogonal-projections-onto-the-image-spaces]: thm-aa-plus-and-a-plus-a-are-orthogonal-projections-onto-the-image-spaces: current gpt-5.6-terra rejection has no exact Alpha outcome for context 3db2a9f55d62a7d0d42b8760f274fef37b9bc9a70f619b67f246eed145190e75\nERROR judge-adjudication-missing [thm-additivity-of-radon-nikodym-derivatives]: thm-additivity-of-radon-nikodym-derivatives: current gpt-5.6-terra rejection has no exact Alpha outcome for context c83e2afeb81c54ae07ea7c29ebe1d755e16db4da8f0b893e2453957ae63c49ad\nERROR judge-adjudication-missing [thm-constant-rank-theorem-for-manifolds]: thm-constant-rank-theorem-for-manifolds: current gpt-5.6-terra rejection has no exact Alpha outcome for context afd5d7d960ed2255c5a790180563ccee353a840add4e15e5c52967863970be98\nERROR judge-adjudication-missing [thm-eigenpair-residual-realises-the-minimum-norm-backward-error]: thm-eigenpair-residual-realises-the-minimum-norm-backward-error: current gpt-5.6-terra rejection has no exact Alpha outcome for context a572128a5f4397b992866877991695ba24a9b8b9d0269f2f9bf266105f259a7f\nERROR judge-adjudication-missing [thm-finite-borel-measures-on-r-have-a-unique-absolutely-continuous-discrete-and-singular-continuous-decomposition]: thm-finite-borel-measures-on-r-have-a-unique-absolutely-continuous-discrete-and-singular-continuous-decomposition: current gpt-5.6-terra rejection has no exact Alpha outcome for context e4c505e7417e382983256c0b2eef5e51bc197bab8600c500c0f0083743c0d87c\nERROR judge-adjudication-missing [thm-hermitian-rayleigh-quotient-iteration-has-local-cubic-convergence]: thm-hermitian-rayleigh-quotient-iteration-has-local-cubic-convergence: current gpt-5.6-terra rejection has no exact Alpha outcome for context d25d3f06d6deaf6d5b2ddd19acecad87134b8516f607f88bbcaca871d2db0cb0\nERROR judge-adjudication-missing [thm-householder-similarity-reduces-to-hessenberg-and-tridiagonal-form]: thm-householder-similarity-reduces-to-hessenberg-and-tridiagonal-form: current gpt-5.6-terra rejection has no exact Alpha outcome for context 425bb2620878b72368f304da3fc5af2cc1f3008b875bda8c49d47ad0f79de4d8\nERROR judge-adjudication-missing [thm-least-squares-solutions-form-an-affine-kernel-translate-of-a-plus-b]: thm-least-squares-solutions-form-an-affine-kernel-translate-of-a-plus-b: current gpt-5.6-terra rejection has no exact Alpha outcome for context 02417c07560a1d302027a2ab03a9e63e889cb6b54beff88393f80621325a6171\nERROR judge-adjudication-missing [thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures]: thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures: current gpt-5.6-terra rejection has no exact Alpha outcome for context d7af6dabea49f3566b8ab3150e583318343a86a536ebbba52d536816a3cde27e\nERROR judge-adjudication-missing [thm-monoid-objects-in-a-cartesian-monoidal-category-are-monoids-in-the-ordinary-sense]: thm-monoid-objects-in-a-cartesian-monoidal-category-are-monoids-in-the-ordinary-sense: current gpt-5.6-terra rejection has no exact Alpha outcome for context 8197784ebd65384d5f96c123a2853df7c9aa3abc168f56494c51a720923ec81f\nERROR judge-adjudication-missing [thm-monoidal-functors-compose-and-laxness-is-preserved]: thm-monoidal-functors-compose-and-laxness-is-preserved: current gpt-5.6-terra rejection has no exact Alpha outcome for context 9e79a587078f4f8806f165c423df52582c31db570a2f34ab9d7e377b770e87b6\nERROR judge-adjudication-missing [thm-polar-decomposition-for-signed-and-complex-measures]: thm-polar-decomposition-for-signed-and-complex-measures: current gpt-5.6-terra rejection has no exact Alpha outcome for context 01401f11ba345d13f80b7da96726537986d4eeda5a1db9ccccd896563aca7828\nERROR judge-adjudication-missing [thm-power-iteration-converges-projectively-under-a-simple-strictly-dominant-eigenvalue]: thm-power-iteration-converges-projectively-under-a-simple-strictly-dominant-eigenvalue: current gpt-5.6-terra rejection has no exact Alpha outcome for context 9476d9a8ba1999dd8fa222cdbed09060c116103ef0c776ed6a14c302dd1d9648\nERROR judge-adjudication-missing [thm-pseudoinversion-is-continuous-on-each-fixed-rank-stratum-and-discontinuous-at-rank-loss]: thm-pseudoinversion-is-continuous-on-each-fixed-rank-stratum-and-discontinuous-at-rank-loss: current gpt-5.6-terra rejection has no exact Alpha outcome for context e46ca767c54775af907cb6353e33b1bf1caaf2a7bf5cf1e83643eeb068848d06\nERROR judge-adjudication-missing [thm-subspace-iteration-converges-to-the-dominant-invariant-subspace-under-a-spectral-gap]: thm-subspace-iteration-converges-to-the-dominant-invariant-subspace-under-a-spectral-gap: current gpt-5.6-terra rejection has no exact Alpha outcome for context a63202d8db70569c10ec766cf4b6bf24e0cc885ac22cb1be8b7e22ab36b72331\nERROR judge-adjudication-missing [thm-tikhonov-regularised-least-squares-has-a-unique-minimiser]: thm-tikhonov-regularised-least-squares-has-a-unique-minimiser: current gpt-5.6-terra rejection has no exact Alpha outcome for context 71cd9aba1bf273b85c3a10b2e23d33a10722e0aaff6ccee35a5eaf5989492c12\nERROR judge-adjudication-missing [thm-unshifted-qr-converges-under-separated-moduli-and-leading-minor-hypotheses]: thm-unshifted-qr-converges-under-separated-moduli-and-leading-minor-hypotheses: current gpt-5.6-terra rejection has no exact Alpha outcome for context 92226365f1ba1d78aee12e5f6e6697ffbc4d4caef8f193ab4de644a20a5668a1\nERROR judge-adjudication-missing [thm-wilkinson-shifted-symmetric-tridiagonal-qr-has-local-deflation-away-from-ties]: thm-wilkinson-shifted-symmetric-tridiagonal-qr-has-local-deflation-away-from-ties: current gpt-5.6-terra rejection has no exact Alpha outcome for context cf4b125d4131466b74840071228cd03f2545d5edfebb9c8da4f50e00cdfb5188\n",
      "named_ids": [
        "cex-an-absolutely-continuous-finite-measure-can-have-an-unbounded-radon-nikodym-derivative",
        "cex-the-figure-eight-is-an-immersed-image-not-an-embedded-submanifold",
        "cex-two-radon-nikodym-derivatives-can-differ-on-a-null-set",
        "cex-x-inverse-dlambda-on-zero-one-shows-finiteness-is-needed-in-the-epsilon-delta-criterion",
        "cor-finite-complex-measures-admit-integrable-radon-nikodym-densities",
        "def-multitape-and-nondeterministic-machines",
        "def-power-iteration",
        "def-subspace-iteration-and-the-dominant-invariant-subspace",
        "def-truncated-singular-value-pseudoinverse-at-a-declared-threshold",
        "def-unshifted-and-shifted-qr-iteration-with-deflation-and-wilkinson-shift",
        "ex-a-cylinder-as-the-preimage-of-a-circle-under-projection",
        "ex-a-lax-monoidal-functor-that-is-not-strong",
        "ex-a-piecewise-quadratic-distribution-function-recovers-its-density",
        "ex-a-regular-value-with-empty-fibre",
        "ex-cfg-to-pda-construction",
        "ex-coordinate-inclusions-and-projections-as-immersion-and-submersion",
        "ex-power-iteration-on-a-diagonal-matrix-displays-the-eigenvalue-ratio-rate",
        "ex-the-chain-rule-for-radon-nikodym-derivatives-on-zero-one",
        "ex-the-density-two-x-on-zero-one-is-the-radon-nikodym-derivative-of-two-x-indicator-dlambda",
        "ex-the-graph-of-the-sine-function-as-an-embedded-submanifold",
        "ex-the-special-linear-group-as-a-regular-level-set",
        "ex-valid-computation-histories-are-decidable",
        "fs-a-monoid-object-in-the-endofunctor-category-is-the-definition-of-a-monad",
        "fs-a-monoidal-functor-is-one-whose-structure-maps-are-isomorphisms",
        "fs-a-regular-value-must-belong-to-the-image",
        "fs-absolutely-continuous-measures-always-have-bounded-radon-nikodym-derivatives",
        "fs-every-measure-is-absolutely-continuous-or-singular-with-respect-to-lebesgue-measure",
        "fs-the-epsilon-delta-condition-characterises-absolute-continuity-for-every-measure",
        "fs-the-image-of-every-immersion-is-an-embedded-submanifold",
        "fs-the-radon-nikodym-derivative-is-a-uniquely-determined-function",
        "fs-the-radon-nikodym-theorem-holds-without-sigma-finiteness",
        "fs-the-unit-constraints-must-be-imposed-as-axioms",
        "lem-dpdas-have-unique-computations",
        "lem-pda-fragment-variables-compose",
        "prop-deterministic-cfls-are-unambiguous",
        "prop-full-column-rank-pseudoinverse-formula",
        "prop-pseudoinversion-is-involutive-adjoint-compatible-and-unitarily-equivariant",
        "prop-rayleigh-quotient-and-residual-converge-along-hermitian-power-iteration",
        "prop-the-radon-nikodym-derivative-is-integrable-exactly-when-the-absolutely-continuous-part-is-finite",
        "prop-the-smooth-structure-of-an-embedded-submanifold-is-unique",
        "prop-tikhonov-regularisation-has-singular-filter-factors",
        "prop-truncated-svd-and-tikhonov-are-hard-and-smooth-spectral-filters",
        "prop-valid-computation-histories-are-decidable",
        "prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category",
        "thm-a-bounded-above-acyclic-complex-of-injective-objects-is-contractible-when-its-cycle-monomorphisms-split",
        "thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution",
        "thm-aa-plus-and-a-plus-a-are-orthogonal-projections-onto-the-image-spaces",
        "thm-additivity-of-radon-nikodym-derivatives",
        "thm-constant-rank-theorem-for-manifolds",
        "thm-eigenpair-residual-realises-the-minimum-norm-backward-error",
        "thm-finite-borel-measures-on-r-have-a-unique-absolutely-continuous-discrete-and-singular-continuous-decomposition",
        "thm-hermitian-rayleigh-quotient-iteration-has-local-cubic-convergence",
        "thm-householder-similarity-reduces-to-hessenberg-and-tridiagonal-form",
        "thm-least-squares-solutions-form-an-affine-kernel-translate-of-a-plus-b",
        "thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures",
        "thm-monoid-objects-in-a-cartesian-monoidal-category-are-monoids-in-the-ordinary-sense",
        "thm-monoidal-functors-compose-and-laxness-is-preserved",
        "thm-polar-decomposition-for-signed-and-complex-measures",
        "thm-power-iteration-converges-projectively-under-a-simple-strictly-dominant-eigenvalue",
        "thm-pseudoinversion-is-continuous-on-each-fixed-rank-stratum-and-discontinuous-at-rank-loss",
        "thm-subspace-iteration-converges-to-the-dominant-invariant-subspace-under-a-spectral-gap",
        "thm-tikhonov-regularised-least-squares-has-a-unique-minimiser",
        "thm-unshifted-qr-converges-under-separated-moduli-and-leading-minor-hypotheses",
        "thm-wilkinson-shifted-symmetric-tridiagonal-qr-has-local-deflation-away-from-ties"
      ]
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "cex-an-absolutely-continuous-finite-measure-can-have-an-unbounded-radon-nikodym-derivative",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-the-figure-eight-is-an-immersed-image-not-an-embedded-submanifold",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-two-radon-nikodym-derivatives-can-differ-on-a-null-set",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-x-inverse-dlambda-on-zero-one-shows-finiteness-is-needed-in-the-epsilon-delta-criterion",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-finite-complex-measures-admit-integrable-radon-nikodym-densities",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "def-multitape-and-nondeterministic-machines",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "def-power-iteration",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "def-subspace-iteration-and-the-dominant-invariant-subspace",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "def-truncated-singular-value-pseudoinverse-at-a-declared-threshold",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "def-unshifted-and-shifted-qr-iteration-with-deflation-and-wilkinson-shift",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-cylinder-as-the-preimage-of-a-circle-under-projection",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-lax-monoidal-functor-that-is-not-strong",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-a-piecewise-quadratic-distribution-function-recovers-its-density",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-regular-value-with-empty-fibre",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-cfg-to-pda-construction",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-coordinate-inclusions-and-projections-as-immersion-and-submersion",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-power-iteration-on-a-diagonal-matrix-displays-the-eigenvalue-ratio-rate",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-chain-rule-for-radon-nikodym-derivatives-on-zero-one",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-density-two-x-on-zero-one-is-the-radon-nikodym-derivative-of-two-x-indicator-dlambda",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-graph-of-the-sine-function-as-an-embedded-submanifold",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-special-linear-group-as-a-regular-level-set",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-valid-computation-histories-are-decidable",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-a-monoid-object-in-the-endofunctor-category-is-the-definition-of-a-monad",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-a-monoidal-functor-is-one-whose-structure-maps-are-isomorphisms",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-a-regular-value-must-belong-to-the-image",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-absolutely-continuous-measures-always-have-bounded-radon-nikodym-derivatives",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-every-measure-is-absolutely-continuous-or-singular-with-respect-to-lebesgue-measure",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-epsilon-delta-condition-characterises-absolute-continuity-for-every-measure",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-image-of-every-immersion-is-an-embedded-submanifold",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-radon-nikodym-derivative-is-a-uniquely-determined-function",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-radon-nikodym-theorem-holds-without-sigma-finiteness",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-unit-constraints-must-be-imposed-as-axioms",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-dpdas-have-unique-computations",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-pda-fragment-variables-compose",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-deterministic-cfls-are-unambiguous",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-full-column-rank-pseudoinverse-formula",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-pseudoinversion-is-involutive-adjoint-compatible-and-unitarily-equivariant",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-rayleigh-quotient-and-residual-converge-along-hermitian-power-iteration",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-radon-nikodym-derivative-is-integrable-exactly-when-the-absolutely-continuous-part-is-finite",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-smooth-structure-of-an-embedded-submanifold-is-unique",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-tikhonov-regularisation-has-singular-filter-factors",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-truncated-svd-and-tikhonov-are-hard-and-smooth-spectral-filters",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-valid-computation-histories-are-decidable",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-a-bounded-above-acyclic-complex-of-injective-objects-is-contractible-when-its-cycle-monomorphisms-split",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-aa-plus-and-a-plus-a-are-orthogonal-projections-onto-the-image-spaces",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-additivity-of-radon-nikodym-derivatives",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-constant-rank-theorem-for-manifolds",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-eigenpair-residual-realises-the-minimum-norm-backward-error",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-finite-borel-measures-on-r-have-a-unique-absolutely-continuous-discrete-and-singular-continuous-decomposition",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-hermitian-rayleigh-quotient-iteration-has-local-cubic-convergence",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-householder-similarity-reduces-to-hessenberg-and-tridiagonal-form",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-least-squares-solutions-form-an-affine-kernel-translate-of-a-plus-b",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-monoid-objects-in-a-cartesian-monoidal-category-are-monoids-in-the-ordinary-sense",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-monoidal-functors-compose-and-laxness-is-preserved",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-polar-decomposition-for-signed-and-complex-measures",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-power-iteration-converges-projectively-under-a-simple-strictly-dominant-eigenvalue",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-pseudoinversion-is-continuous-on-each-fixed-rank-stratum-and-discontinuous-at-rank-loss",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-subspace-iteration-converges-to-the-dominant-invariant-subspace-under-a-spectral-gap",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-tikhonov-regularised-least-squares-has-a-unique-minimiser",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-unshifted-qr-converges-under-separated-moduli-and-leading-minor-hypotheses",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-wilkinson-shifted-symmetric-tridiagonal-qr-has-local-deflation-away-from-ties",
      "scope": "run",
      "owner": "b"
    }
  ],
  "assigned_items": [
    {
      "id": "ex-a-lax-monoidal-functor-that-is-not-strong",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-a-monoid-object-in-the-endofunctor-category-is-the-definition-of-a-monad",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-a-monoidal-functor-is-one-whose-structure-maps-are-isomorphisms",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-the-unit-constraints-must-be-imposed-as-axioms",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-a-bounded-above-acyclic-complex-of-injective-objects-is-contractible-when-its-cycle-monomorphisms-split",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-monoid-objects-in-a-cartesian-monoidal-category-are-monoids-in-the-ordinary-sense",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-monoidal-functors-compose-and-laxness-is-preserved",
      "scope": "run",
      "owner": "c"
    }
  ],
  "live_tuples": [
    {
      "id": "ex-a-lax-monoidal-functor-that-is-not-strong",
      "model": "gpt-5.6-terra",
      "context_sha256": "7770029f7b82643e5d18b26377317cc84a83aafe955dfd2fb1f237954caf08a2",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "fs-a-monoid-object-in-the-endofunctor-category-is-the-definition-of-a-monad",
      "model": "gpt-5.6-terra",
      "context_sha256": "19b7507d1785637bd43261ad66e7602f13c46abd9d73a90abe3377781c39bd58",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "fs-a-monoidal-functor-is-one-whose-structure-maps-are-isomorphisms",
      "model": "gpt-5.6-terra",
      "context_sha256": "e78fad9f3e2f9a2510d162456ceb81385e34989c13dd13dddeda01df42589430",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "fs-the-unit-constraints-must-be-imposed-as-axioms",
      "model": "gpt-5.6-terra",
      "context_sha256": "c659fc4a1ae220fe0cc3cf0b72848181bef9a878e96e2eb98ead0231d0bb9dca",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category",
      "model": "gpt-5.6-terra",
      "context_sha256": "eb551fc59e6b94c7ddb65c69a489b3f6c20c02b57595266d438596d4e6507044",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-a-bounded-above-acyclic-complex-of-injective-objects-is-contractible-when-its-cycle-monomorphisms-split",
      "model": "gpt-5.6-terra",
      "context_sha256": "bfa18b5d2cfa9da197d19871bcbc9897fa2d91883c3c33e5cc3ef73584e87a2f",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-monoid-objects-in-a-cartesian-monoidal-category-are-monoids-in-the-ordinary-sense",
      "model": "gpt-5.6-terra",
      "context_sha256": "8197784ebd65384d5f96c123a2853df7c9aa3abc168f56494c51a720923ec81f",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-monoidal-functors-compose-and-laxness-is-preserved",
      "model": "gpt-5.6-terra",
      "context_sha256": "9e79a587078f4f8806f165c423df52582c31db570a2f34ab9d7e377b770e87b6",
      "scope": "run",
      "status": "unadjudicated"
    }
  ]
}
```

---

# Step 8 — group **c**, run `frontier-25`

You are the group Alpha for batches **6**, **7**, **8**: 3 A/B pair(s), 6 page(s), 107 item(s), 8 open rejection(s) over 8 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-25-alpha-c-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**You may read the entire library.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-25-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 6 | `monoidal-categories-and-monoidal-functors` | A | category-theory | 365.023 | `the-diagram-lemmas-in-an-abelian-category-examples` |
| 6 | `monoidal-categories-and-monoidal-functors-examples` | B | category-theory | 365.024 | `monoidal-categories-and-monoidal-functors` |
| 7 | `chain-homotopy-and-the-homotopy-category` | A | homological-algebra | 365.039 | `chain-complexes-and-homology-examples` |
| 7 | `chain-homotopy-and-the-homotopy-category-examples` | B | homological-algebra | 365.04 | `chain-homotopy-and-the-homotopy-category` |
| 8 | `the-five-cycle-and-erdos-hajnal` | A | combinatorics | 415 | `cographs-perfect-patterns-and-pure-pairs`, `bull-free-graphs-and-the-erdos-hajnal-property` |
| 8 | `the-five-cycle-and-erdos-hajnal-examples` | B | combinatorics | 416 | `the-five-cycle-and-erdos-hajnal` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `monoidal-categories-and-monoidal-functors` — Monoidal Categories and Monoidal Functors (38 item(s))

- `def-monoidal-category` · definition — Monoidal category
- `rem-the-associator-runs-the-other-way-in-mac-lane` · remark — Mac Lane writes the associator in the opposite direction
- `thm-the-pentagon-and-the-triangle-are-independent` · theorem — The pentagon axiom and the triangle axiom are independent
- `def-strict-monoidal-category` · definition — Strict monoidal category
- `def-the-reverse-and-the-opposite-of-a-monoidal-category` · definition — The reverse and the opposite of a monoidal category
- `thm-a-category-with-finite-products-is-monoidal` · theorem — A category with finite products is monoidal
- `cor-set-cat-and-every-complete-category-are-cartesian-monoidal` · corollary — Set, Cat, and every complete category are cartesian monoidal
- `thm-the-endomorphisms-of-the-unit-form-a-commutative-monoid` · theorem — The endomorphisms of the tensor unit form a commutative monoid
- `thm-the-endofunctor-category-of-a-small-category-is-strict-monoidal-under-composition` · theorem — The endofunctor category of a small category is strict monoidal under composition
- `thm-a-monoid-object-in-the-endofunctor-category-is-exactly-a-monad` · theorem — A monoid object in a small endofunctor category is exactly a monad
- `def-monoid-object-and-comonoid-object-in-a-monoidal-category` · definition — Monoid objects and comonoid objects in a monoidal category
- `def-a-module-over-a-monoid-object` · definition — Modules over a monoid object, their morphisms, and their category
- `thm-monoid-objects-in-a-cartesian-monoidal-category-are-monoids-in-the-ordinary-sense` · theorem — Monoid objects in a cartesian monoidal category are ordinary monoids
- `thm-the-category-of-abelian-groups-is-monoidal-under-the-tensor-product` · theorem — Abelian groups are monoidal under the tensor product
- `thm-monoid-objects-in-abelian-groups-are-rings` · theorem — Monoid objects in abelian groups are rings
- `thm-modules-over-a-commutative-ring-form-a-monoidal-category` · theorem — Modules over a commutative ring form a monoidal category
- `thm-a-poset-with-finite-meets-is-a-strict-monoidal-category` · theorem — A poset with finite meets is a strict monoidal category
- `thm-the-left-unitor-of-a-tensor-product-is-determined` · theorem — The left unitor of a tensor product is determined by the associator
- `thm-the-right-unitor-of-a-tensor-product-is-determined` · theorem — The right unitor of a tensor product is determined by the associator
- `cor-the-two-unitors-agree-on-the-unit-object` · corollary — The two unitors agree on the tensor unit
- `rem-mac-lanes-original-conditions-and-what-became-of-them` · remark — How Mac Lane's original coherence conditions reduce to this page's two axioms
- `rem-the-attribution-of-the-unit-redundancies` · remark — The unit-constraint redundancies are cited mathematically through EGNO
- `def-lax-strong-and-strict-monoidal-functor` · definition — Lax, strong, and strict monoidal functors
- `rem-monoidal-functor-means-different-things-in-different-sources` · remark — Why the bare phrase 'monoidal functor' is ambiguous across sources
- `def-monoidal-natural-transformation` · definition — Monoidal natural transformation
- `thm-monoidal-functors-compose-and-laxness-is-preserved` · theorem — Monoidal functors compose, and composition preserves laxness, strength, and strictness
- `thm-a-lax-monoidal-functor-carries-monoid-objects-to-monoid-objects` · theorem — A lax monoidal functor carries monoid objects to monoid objects
- `def-monoidal-equivalence` · definition — Monoidal equivalence and monoidal quasi-inverse data
- `def-parenthesised-tensor-word` · definition — Parenthesised tensor words and their evaluation functors
- `thm-parenthesised-words-of-a-given-length-are-counted-by-the-catalan-numbers` · theorem — Parenthesised tensor words of a fixed length are counted by the Catalan numbers
- `rem-unbracketed-tensor-strings-are-not-yet-defined` · remark — Unbracketed tensor strings are not yet defined on this page
- `rem-isbells-argument-that-isomorphic-objects-cannot-simply-be-identified` · remark — Isbell's warning that isomorphic objects cannot simply be identified
- `fs-every-monoidal-category-is-strict` · false-statement — FALSE: every monoidal category is strict
- `fs-the-unit-constraints-must-be-imposed-as-axioms` · false-statement — FALSE: the unit constraints must be imposed as independent axioms
- `fs-a-monoidal-functor-is-one-whose-structure-maps-are-isomorphisms` · false-statement — FALSE: a monoidal functor is exactly one whose structure maps are isomorphisms
- `fs-the-pentagon-follows-from-the-triangle` · false-statement — FALSE: the pentagon axiom follows from the triangle axiom
- `fs-an-unbracketed-tensor-product-of-three-objects-is-well-defined-in-any-monoidal-category` · false-statement — FALSE: an unbracketed three-fold tensor product is already well defined in any monoidal category
- `fs-a-monoid-object-in-the-endofunctor-category-is-the-definition-of-a-monad` · false-statement — FALSE: a monoid object in an endofunctor category is the definition of a monad

### `monoidal-categories-and-monoidal-functors-examples` — Monoidal Categories and Monoidal Functors - Examples (8 item(s))

- `ex-the-cartesian-monoidal-structure-on-sets-computed` · example — The cartesian monoidal structure on sets computed
- `ex-the-pentagon-checked-for-cartesian-products` · example — The pentagon checked for cartesian products
- `ex-a-monoid-as-a-one-object-monoidal-category` · example — A commutative monoid as a one-object strict monoidal category
- `ex-the-five-bracketings-of-a-four-fold-product` · example — The five bracketings of a four-fold tensor product
- `ex-the-free-monoid-monad-as-a-monoid-object` · example — The free-monoid monad as a monoid object in the endofunctor category
- `ex-a-lax-monoidal-functor-that-is-not-strong` · example — The power-set functor is lax monoidal but not strong
- `cex-the-skeleton-of-set-cannot-be-made-strict-by-identification` · counterexample — A skeleton of Set cannot be made strict by identifying isomorphic objects
- `ex-endofunctor-composition-as-a-strict-tensor` · example — Endofunctor composition as a strict tensor product

### `chain-homotopy-and-the-homotopy-category` — Chain Homotopy and the Homotopy Category (40 item(s))

- `def-graded-morphism-of-chain-complexes` · definition — A graded morphism of chain complexes
- `def-hom-complex-of-chain-complexes` · definition — The Hom complex of chain complexes
- `lem-the-hom-complex-differential-squares-to-zero` · lemma — The Hom-complex differential squares to zero
- `prop-zero-cocycles-in-the-hom-complex-are-chain-maps` · proposition — Zero cocycles in the Hom complex are chain maps
- `def-chain-homotopy` · definition — A chain homotopy
- `def-null-homotopic-chain-map` · definition — A null-homotopic chain map
- `prop-chain-homotopy-is-an-equivalence-relation` · proposition — Chain homotopy is an equivalence relation
- `lem-chain-homotopy-is-compatible-with-addition-and-composition` · lemma — Chain homotopy is compatible with addition and composition
- `prop-null-homotopic-maps-form-a-two-sided-additive-ideal` · proposition — Null-homotopic maps form a two-sided additive ideal
- `thm-chain-homotopic-maps-induce-the-same-map-on-homology` · theorem — Chain-homotopic maps induce the same map on homology
- `cor-null-homotopic-maps-induce-zero-on-homology` · corollary — Null-homotopic maps induce zero on homology
- `def-chain-homotopy-equivalence` · definition — A chain homotopy equivalence
- `def-contractible-complex` · definition — A contractible complex
- `thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism` · theorem — A chain homotopy equivalence is a quasi-isomorphism
- `cor-a-contractible-complex-is-acyclic` · corollary — A contractible complex is acyclic
- `def-homotopy-classes-of-chain-maps` · definition — Homotopy classes of chain maps
- `lem-composition-of-homotopy-classes-is-well-defined` · lemma — Composition of homotopy classes is well defined
- `def-homotopy-category-of-chain-complexes` · definition — The homotopy category of chain complexes
- `thm-the-homotopy-category-is-additive` · theorem — The homotopy category is additive
- `prop-the-canonical-functor-from-complexes-to-the-homotopy-category-is-additive` · proposition — The canonical functor from complexes to the homotopy category is additive
- `thm-homology-factors-uniquely-through-the-homotopy-category` · theorem — Homology factors uniquely through the homotopy category
- `prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category` · proposition — Zero homology does not make an object zero in the homotopy category
- `thm-hom-in-the-homotopy-category-is-zero-degree-homology-of-the-hom-complex` · theorem — Hom in the homotopy category is zero-degree homology of the Hom complex
- `def-shift-of-a-chain-complex` · definition — The shift of a chain complex
- `lem-the-shifted-differential-squares-to-zero` · lemma — The shifted differential squares to zero
- `def-shift-of-a-chain-map-and-chain-homotopy` · definition — Shifted chain maps and shifted chain homotopies
- `thm-shift-is-an-additive-autoequivalence-of-the-complex-and-homotopy-categories` · theorem — Shift is an additive autoequivalence of the complex and homotopy categories
- `prop-homology-of-a-shift-is-shifted-homology` · proposition — Homology of a shift is shifted homology
- `prop-shift-preserves-chain-homotopy-equivalences-contractibility-and-quasi-isomorphisms` · proposition — Shift preserves homotopy equivalences, contractibility, and quasi-isomorphisms
- `def-suspension-and-desuspension-of-a-chain-complex` · definition — Suspension and desuspension of a chain complex
- `lem-a-degreewise-split-exact-complex-with-compatible-splittings-is-contractible` · lemma — A degreewise split exact complex with compatible splittings is contractible
- `thm-a-bounded-below-acyclic-complex-of-projective-objects-is-contractible-when-its-cycle-epimorphisms-split` · theorem — A bounded below acyclic complex of projective objects is contractible when its cycle epimorphisms split
- `thm-a-bounded-above-acyclic-complex-of-injective-objects-is-contractible-when-its-cycle-monomorphisms-split` · theorem — A bounded above acyclic complex of injective objects is contractible when its cycle monomorphisms split
- `prop-homotopy-equivalence-is-an-equivalence-relation-on-complexes` · proposition — Homotopy equivalence is an equivalence relation on complexes
- `prop-a-chain-isomorphism-is-a-chain-homotopy-equivalence` · proposition — A chain isomorphism is a chain homotopy equivalence
- `fs-chain-homotopic-maps-are-equal-as-chain-maps` · false-statement — FALSE: chain-homotopic maps are equal as chain maps
- `fs-every-acyclic-complex-is-contractible` · false-statement — FALSE: every acyclic complex is contractible
- `fs-every-quasi-isomorphism-is-a-chain-homotopy-equivalence` · false-statement — FALSE: every quasi-isomorphism is a chain homotopy equivalence
- `fs-the-homotopy-category-is-obtained-by-identifying-quasi-isomorphisms-with-identities` · false-statement — FALSE: the homotopy category is obtained by identifying quasi-isomorphisms with identities
- `fs-the-shift-of-a-complex-keeps-the-same-differential-with-no-sign` · false-statement — FALSE: the shift of a complex keeps the same differential with no sign

### `chain-homotopy-and-the-homotopy-category-examples` — Chain Homotopy and the Homotopy Category - Examples (8 item(s))

- `ex-a-contracting-homotopy-for-the-two-term-identity-complex` · example — A contracting homotopy for the two-term identity complex
- `ex-two-homotopic-maps-with-different-components` · example — Two homotopic maps with different components
- `ex-the-hom-complex-of-two-two-term-complexes` · example — The Hom complex of two two-term complexes
- `ex-a-split-exact-complex-and-its-contraction` · example — A split exact complex and its contraction
- `cex-an-acyclic-noncontractible-complex-from-a-nonsplit-extension` · counterexample — An acyclic noncontractible complex from a nonsplit extension
- `cex-a-quasi-isomorphism-with-no-homotopy-inverse` · counterexample — A quasi-isomorphism with no homotopy inverse
- `ex-shifting-a-three-term-complex-with-all-signs` · example — Shifting a three-term complex with all signs
- `ex-homotopy-classes-as-h-zero-of-a-hom-complex` · example — Homotopy classes as H-zero of a Hom complex

### `the-five-cycle-and-erdos-hajnal` — The Five-Cycle and the Erdős–Hajnal Property (9 item(s))

- `lem-a-bipartite-layer-is-small-unless-a-large-comb-already-appears` · lemma — A bipartite layer is small unless a large comb already appears
- `thm-a-bipartite-graph-with-bounded-a-degree-has-a-large-comb-or-a-small-b-side` · theorem — A bipartite graph with bounded A-degree has a large comb or a small B-side
- `def-rooted-stable-tooth-comb` · definition — A rooted stable-tooth comb
- `thm-a-tau-critical-graph-with-a-large-low-degree-induced-subgraph-has-a-rooted-stable-tooth-comb` · theorem — A tau-critical graph with a large low-degree induced subgraph has a rooted stable-tooth comb
- `lem-a-sparse-graph-has-a-prescribed-size-induced-subgraph-of-bounded-maximum-degree` · lemma — A sparse graph has a prescribed-size induced subgraph of bounded maximum degree
- `cor-an-h-free-graph-has-a-linearly-large-induced-subgraph-whose-graph-or-complement-has-bounded-maximum-degree` · corollary — An H-free graph has a linearly large induced subgraph whose graph or complement has bounded maximum degree
- `lem-a-rooted-stable-tooth-comb-with-a-cross-edge-between-two-blocks-contains-a-five-cycle` · lemma — A rooted stable-tooth comb with a cross-edge between two blocks contains an induced five-cycle
- `thm-c-five-free-graphs-satisfy-a-polynomial-kappa-bound` · theorem — The C5-free graphs satisfy a polynomial kappa bound
- `cor-the-five-cycle-has-the-erdos-hajnal-property` · corollary — The five-cycle has the Erdős-Hajnal property

### `the-five-cycle-and-erdos-hajnal-examples` — The Five-Cycle and the Erdős–Hajnal Property — Examples (4 item(s))

- `ex-a-rooted-stable-tooth-comb-with-two-teeth` · example — A rooted stable-tooth comb with two teeth
- `ex-a-cross-edge-in-a-rooted-stable-tooth-comb-creates-an-induced-five-cycle` · example — A cross-edge in a rooted stable-tooth comb creates an induced five-cycle
- `cex-a-comb-can-have-an-edge-between-two-blocks` · counterexample — A comb can have an edge between two blocks
- `fs-every-comb-has-pairwise-anticomplete-blocks` · false-statement — FALSE: every comb has pairwise anticomplete blocks

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `ex-a-lax-monoidal-functor-that-is-not-strong` | `monoidal-categories-and-monoidal-functors-examples` | gpt-5.6-terra | `7770029f7b82643e5d18b26377317cc84a83aafe955dfd2fb1f237954caf08a2` |
| `fs-a-monoid-object-in-the-endofunctor-category-is-the-definition-of-a-monad` | `monoidal-categories-and-monoidal-functors` | gpt-5.6-terra | `19b7507d1785637bd43261ad66e7602f13c46abd9d73a90abe3377781c39bd58` |
| `fs-a-monoidal-functor-is-one-whose-structure-maps-are-isomorphisms` | `monoidal-categories-and-monoidal-functors` | gpt-5.6-terra | `e78fad9f3e2f9a2510d162456ceb81385e34989c13dd13dddeda01df42589430` |
| `fs-the-unit-constraints-must-be-imposed-as-axioms` | `monoidal-categories-and-monoidal-functors` | gpt-5.6-terra | `c659fc4a1ae220fe0cc3cf0b72848181bef9a878e96e2eb98ead0231d0bb9dca` |
| `prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category` | `chain-homotopy-and-the-homotopy-category` | gpt-5.6-terra | `eb551fc59e6b94c7ddb65c69a489b3f6c20c02b57595266d438596d4e6507044` |
| `thm-a-bounded-above-acyclic-complex-of-injective-objects-is-contractible-when-its-cycle-monomorphisms-split` | `chain-homotopy-and-the-homotopy-category` | gpt-5.6-terra | `bfa18b5d2cfa9da197d19871bcbc9897fa2d91883c3c33e5cc3ef73584e87a2f` |
| `thm-monoid-objects-in-a-cartesian-monoidal-category-are-monoids-in-the-ordinary-sense` | `monoidal-categories-and-monoidal-functors` | gpt-5.6-terra | `8197784ebd65384d5f96c123a2853df7c9aa3abc168f56494c51a720923ec81f` |
| `thm-monoidal-functors-compose-and-laxness-is-preserved` | `monoidal-categories-and-monoidal-functors` | gpt-5.6-terra | `9e79a587078f4f8806f165c423df52582c31db570a2f34ab9d7e377b770e87b6` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — exact closure recovery, `frontier-25`

Read `research/frontier-25-judge-closure.json`,
`research/frontier-25-judge.jsonl`,
`research/frontier-25-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/frontier-25-step8-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/frontier-25-step8-cross-group.jsonl`, never repair that item.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Do not use a descriptive
defect-ledger subclass in that field.

Write `research/frontier-25-alpha-step8-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.
