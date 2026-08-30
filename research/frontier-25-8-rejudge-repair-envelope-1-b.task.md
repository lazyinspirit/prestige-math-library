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
  "group": "b",
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
  "live_tuples": [
    {
      "id": "cex-an-absolutely-continuous-finite-measure-can-have-an-unbounded-radon-nikodym-derivative",
      "model": "gpt-5.6-terra",
      "context_sha256": "fac5fe6d82406700ea40a913cd8aa6ca2f895b7e967d08c37b8af117bf6b27ce",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "cex-the-figure-eight-is-an-immersed-image-not-an-embedded-submanifold",
      "model": "gpt-5.6-terra",
      "context_sha256": "d71738ff56ec40ea56b591b8778f5f83f29901a60a5a0d6fd686cabae0707932",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "cex-two-radon-nikodym-derivatives-can-differ-on-a-null-set",
      "model": "gpt-5.6-terra",
      "context_sha256": "c4a3b063c74d966ee437f53166367659a34567d2be2abf83e8bcc715c69676c8",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "cex-x-inverse-dlambda-on-zero-one-shows-finiteness-is-needed-in-the-epsilon-delta-criterion",
      "model": "gpt-5.6-terra",
      "context_sha256": "d1a8e48badb3ee44c1b3a11417a1975138a811f48c4e3adc35f73a32b244483e",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "cor-finite-complex-measures-admit-integrable-radon-nikodym-densities",
      "model": "gpt-5.6-terra",
      "context_sha256": "aeefdd0e77f384c1209b106639cb03e5c0a8cf5cf132001d03d9c9fe7ac369fb",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-power-iteration",
      "model": "gpt-5.6-terra",
      "context_sha256": "01aa568c20401afce978a3e07759c7e7db4ed1597247624e0dc0be3d237a0b23",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-subspace-iteration-and-the-dominant-invariant-subspace",
      "model": "gpt-5.6-terra",
      "context_sha256": "6be70fc25b7e30e65cc3ef57606e555303228a1f0c7162559462ca6aa8cd6070",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-truncated-singular-value-pseudoinverse-at-a-declared-threshold",
      "model": "gpt-5.6-terra",
      "context_sha256": "be8a57e2d2ace088c06bd65aa57bd28aaeeaaab1486a93ffec5d8a4bda7581b2",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-unshifted-and-shifted-qr-iteration-with-deflation-and-wilkinson-shift",
      "model": "gpt-5.6-terra",
      "context_sha256": "bb2601e7bdaf1261dd4a88d34524c48c8a95f91c2b2a69756eb9d168b4300c18",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-a-cylinder-as-the-preimage-of-a-circle-under-projection",
      "model": "gpt-5.6-terra",
      "context_sha256": "ed58fb1bf394380036638f813435030fa0c8d3cf3e5c1c2375d962eac7c0efae",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-a-piecewise-quadratic-distribution-function-recovers-its-density",
      "model": "gpt-5.6-terra",
      "context_sha256": "f8b57e3cd4ec235cb6b41f010dc9adf326fb610b6d8bc72eb607a4cca8e53e0b",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-a-regular-value-with-empty-fibre",
      "model": "gpt-5.6-terra",
      "context_sha256": "b2b82334f705e6099648b063e639c75c60d524ec96eb9ab2a2bed7a5f52653c1",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-coordinate-inclusions-and-projections-as-immersion-and-submersion",
      "model": "gpt-5.6-terra",
      "context_sha256": "eac80cbbb5490fdf9c96bf312540296ea84be801818f9b25714b2be666cf7d6d",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-power-iteration-on-a-diagonal-matrix-displays-the-eigenvalue-ratio-rate",
      "model": "gpt-5.6-terra",
      "context_sha256": "54dccb12c5d48ce938eb0da3e4992d486c6e4c82de4291202432143930d55f48",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-the-chain-rule-for-radon-nikodym-derivatives-on-zero-one",
      "model": "gpt-5.6-terra",
      "context_sha256": "57d0a65664349d6e2fcf1a1086ebfea713e9f9bb34a319ee0e1e17698f70c924",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-the-density-two-x-on-zero-one-is-the-radon-nikodym-derivative-of-two-x-indicator-dlambda",
      "model": "gpt-5.6-terra",
      "context_sha256": "a67c3554fd1247d0caf81dfdb400b476a2f3e247b0c349bdf42e5836c96ddd49",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-the-graph-of-the-sine-function-as-an-embedded-submanifold",
      "model": "gpt-5.6-terra",
      "context_sha256": "8a4e3d056ba67f6d138844cc84c6fd3943233f64b6fc78b648ca913022076ba6",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-the-special-linear-group-as-a-regular-level-set",
      "model": "gpt-5.6-terra",
      "context_sha256": "ad8085a091fa0bf295eec4992168f071c693f97e7fd0f70440e10ac5c763f314",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "fs-a-regular-value-must-belong-to-the-image",
      "model": "gpt-5.6-terra",
      "context_sha256": "694547a07ffd7415aa56f44087e10a5d7102b03b0dbaf8418aac143c6df9fa7f",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "fs-absolutely-continuous-measures-always-have-bounded-radon-nikodym-derivatives",
      "model": "gpt-5.6-terra",
      "context_sha256": "20133d02dc9a46affaa9afe9bb7d27d861086b1fa64667da80d247579645a51f",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "fs-every-measure-is-absolutely-continuous-or-singular-with-respect-to-lebesgue-measure",
      "model": "gpt-5.6-terra",
      "context_sha256": "ba422abce07acf0c2369ac632ffbd07d49a780c439ee616641ea63836e73cd51",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "fs-the-epsilon-delta-condition-characterises-absolute-continuity-for-every-measure",
      "model": "gpt-5.6-terra",
      "context_sha256": "914583609afbf27dd6ed3278cc98dce35193ca4b42298ef2eec5939fb576bfa7",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "fs-the-image-of-every-immersion-is-an-embedded-submanifold",
      "model": "gpt-5.6-terra",
      "context_sha256": "45792e31418ddd14847ebaa3844eaaffb2d4bd0487f20b700c1cf19fd866047e",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "fs-the-radon-nikodym-derivative-is-a-uniquely-determined-function",
      "model": "gpt-5.6-terra",
      "context_sha256": "798ba97883bdfb17c7f8a28d3544b8d46b930b0d4685cbfb5fb512702ef76bb1",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "fs-the-radon-nikodym-theorem-holds-without-sigma-finiteness",
      "model": "gpt-5.6-terra",
      "context_sha256": "60e9c40e878f76509cef358cbd55db63fbc3c33d1c0d769fecd4c52e91f3c900",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "prop-full-column-rank-pseudoinverse-formula",
      "model": "gpt-5.6-terra",
      "context_sha256": "75bc4ddca1da79ba420b2ba4dcf1200052dd7fa848dbd0ee6972f47adf6dbfe2",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "prop-pseudoinversion-is-involutive-adjoint-compatible-and-unitarily-equivariant",
      "model": "gpt-5.6-terra",
      "context_sha256": "69e1c1868c162624559b685037d7389adbf09a71ba1e4ef6673edbd1202f032c",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "prop-rayleigh-quotient-and-residual-converge-along-hermitian-power-iteration",
      "model": "gpt-5.6-terra",
      "context_sha256": "50f0a1f368ea08fdb23b6969a1915190b2edcaf4fad0ceab6729cb02e2039c7b",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "prop-the-radon-nikodym-derivative-is-integrable-exactly-when-the-absolutely-continuous-part-is-finite",
      "model": "gpt-5.6-terra",
      "context_sha256": "bc8c51876b3b5897c054f37c58ecd65d0e074752bdafa3bd777abf92823b6d8e",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "prop-the-smooth-structure-of-an-embedded-submanifold-is-unique",
      "model": "gpt-5.6-terra",
      "context_sha256": "4cb791ff16cd50451ee87cbd16c7df33f9ea6a23674730cc01798048e204c0cf",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "prop-tikhonov-regularisation-has-singular-filter-factors",
      "model": "gpt-5.6-terra",
      "context_sha256": "443904ca245b3ea869d72c5edb130a003145bff4f507aa2821e2fa9638d62bb9",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "prop-truncated-svd-and-tikhonov-are-hard-and-smooth-spectral-filters",
      "model": "gpt-5.6-terra",
      "context_sha256": "4ec916e9dffb92e5cb2365eec11d8683dbc1a818ddafa274b29045a456aaade9",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution",
      "model": "gpt-5.6-terra",
      "context_sha256": "33f228959f64abf0fa876b41cd497201d74298b6a69306012295a9d6076b9e7c",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-aa-plus-and-a-plus-a-are-orthogonal-projections-onto-the-image-spaces",
      "model": "gpt-5.6-terra",
      "context_sha256": "3db2a9f55d62a7d0d42b8760f274fef37b9bc9a70f619b67f246eed145190e75",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-additivity-of-radon-nikodym-derivatives",
      "model": "gpt-5.6-terra",
      "context_sha256": "c83e2afeb81c54ae07ea7c29ebe1d755e16db4da8f0b893e2453957ae63c49ad",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-constant-rank-theorem-for-manifolds",
      "model": "gpt-5.6-terra",
      "context_sha256": "afd5d7d960ed2255c5a790180563ccee353a840add4e15e5c52967863970be98",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-eigenpair-residual-realises-the-minimum-norm-backward-error",
      "model": "gpt-5.6-terra",
      "context_sha256": "a572128a5f4397b992866877991695ba24a9b8b9d0269f2f9bf266105f259a7f",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-finite-borel-measures-on-r-have-a-unique-absolutely-continuous-discrete-and-singular-continuous-decomposition",
      "model": "gpt-5.6-terra",
      "context_sha256": "e4c505e7417e382983256c0b2eef5e51bc197bab8600c500c0f0083743c0d87c",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-hermitian-rayleigh-quotient-iteration-has-local-cubic-convergence",
      "model": "gpt-5.6-terra",
      "context_sha256": "d25d3f06d6deaf6d5b2ddd19acecad87134b8516f607f88bbcaca871d2db0cb0",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-householder-similarity-reduces-to-hessenberg-and-tridiagonal-form",
      "model": "gpt-5.6-terra",
      "context_sha256": "425bb2620878b72368f304da3fc5af2cc1f3008b875bda8c49d47ad0f79de4d8",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-least-squares-solutions-form-an-affine-kernel-translate-of-a-plus-b",
      "model": "gpt-5.6-terra",
      "context_sha256": "02417c07560a1d302027a2ab03a9e63e889cb6b54beff88393f80621325a6171",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures",
      "model": "gpt-5.6-terra",
      "context_sha256": "d7af6dabea49f3566b8ab3150e583318343a86a536ebbba52d536816a3cde27e",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-polar-decomposition-for-signed-and-complex-measures",
      "model": "gpt-5.6-terra",
      "context_sha256": "01401f11ba345d13f80b7da96726537986d4eeda5a1db9ccccd896563aca7828",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-power-iteration-converges-projectively-under-a-simple-strictly-dominant-eigenvalue",
      "model": "gpt-5.6-terra",
      "context_sha256": "9476d9a8ba1999dd8fa222cdbed09060c116103ef0c776ed6a14c302dd1d9648",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-pseudoinversion-is-continuous-on-each-fixed-rank-stratum-and-discontinuous-at-rank-loss",
      "model": "gpt-5.6-terra",
      "context_sha256": "e46ca767c54775af907cb6353e33b1bf1caaf2a7bf5cf1e83643eeb068848d06",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-subspace-iteration-converges-to-the-dominant-invariant-subspace-under-a-spectral-gap",
      "model": "gpt-5.6-terra",
      "context_sha256": "a63202d8db70569c10ec766cf4b6bf24e0cc885ac22cb1be8b7e22ab36b72331",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-tikhonov-regularised-least-squares-has-a-unique-minimiser",
      "model": "gpt-5.6-terra",
      "context_sha256": "71cd9aba1bf273b85c3a10b2e23d33a10722e0aaff6ccee35a5eaf5989492c12",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-unshifted-qr-converges-under-separated-moduli-and-leading-minor-hypotheses",
      "model": "gpt-5.6-terra",
      "context_sha256": "92226365f1ba1d78aee12e5f6e6697ffbc4d4caef8f193ab4de644a20a5668a1",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-wilkinson-shifted-symmetric-tridiagonal-qr-has-local-deflation-away-from-ties",
      "model": "gpt-5.6-terra",
      "context_sha256": "cf4b125d4131466b74840071228cd03f2545d5edfebb9c8da4f50e00cdfb5188",
      "scope": "run",
      "status": "unadjudicated"
    }
  ]
}
```

---

# Step 8 — group **b**, run `frontier-25`

You are the group Alpha for batches **2**, **3**, **9**: 4 A/B pair(s), 8 page(s), 135 item(s), 49 open rejection(s) over 49 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-25-alpha-b-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
| 2 | `the-moore-penrose-pseudoinverse-and-regularised-least-squares` | A | linear-algebra | 168.005 | `direct-matrix-factorisations-lu-cholesky-and-qr` |
| 2 | `the-moore-penrose-pseudoinverse-and-regularised-least-squares-examples` | B | linear-algebra | 168.006 | `the-moore-penrose-pseudoinverse-and-regularised-least-squares` |
| 2 | `eigenvalue-iterations-and-the-qr-algorithm` | A | linear-algebra | 168.007 | `direct-matrix-factorisations-lu-cholesky-and-qr` |
| 2 | `eigenvalue-iterations-and-the-qr-algorithm-examples` | B | linear-algebra | 168.008 | `eigenvalue-iterations-and-the-qr-algorithm` |
| 3 | `the-radon-nikodym-theorem-and-lebesgue-decomposition` | A | measure-theory | 288.025 | `signed-and-complex-measures-hahn-and-jordan-examples` |
| 3 | `the-radon-nikodym-theorem-and-lebesgue-decomposition-examples` | B | measure-theory | 288.026 | `the-radon-nikodym-theorem-and-lebesgue-decomposition` |
| 9 | `rank-theorems-and-embedded-submanifolds` | A | differential-geometry | 449 | `smooth-partitions-of-unity-and-exhaustions`, `tangent-cotangent-and-the-differential`, `constant-rank-submersions-and-regular-level-sets` |
| 9 | `rank-theorems-and-embedded-submanifolds-examples` | B | differential-geometry | 450 | `rank-theorems-and-embedded-submanifolds` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `the-moore-penrose-pseudoinverse-and-regularised-least-squares` — The Moore--Penrose Pseudoinverse and Regularised Least Squares (17 item(s))

- `def-moore-penrose-pseudoinverse` · definition — The Moore--Penrose pseudoinverse $A^+$ as the solution of the four Penrose equations
- `thm-moore-penrose-pseudoinverse-exists-and-is-unique` · theorem — Every finite real or complex matrix has a unique Moore--Penrose pseudoinverse
- `prop-pseudoinversion-is-involutive-adjoint-compatible-and-unitarily-equivariant` · proposition — Pseudoinversion is involutive, commutes with adjoints, and is equivariant under unitary left and right factors
- `thm-aa-plus-and-a-plus-a-are-orthogonal-projections-onto-the-image-spaces` · theorem — $AA^+$ and $A^+A$ are the orthogonal projections onto $\operatorname{im}A$ and $\operatorname{im}A^*$
- `cor-moore-penrose-image-and-kernel-identities` · corollary — The Moore--Penrose pseudoinverse exchanges image and adjoint-image, and exchanges kernel and adjoint-kernel
- `prop-full-column-rank-pseudoinverse-formula` · proposition — If $A$ has full column rank, then $A^+=(A^*A)^{-1}A^*$
- `prop-full-row-rank-pseudoinverse-formula` · proposition — If $A$ has full row rank, then $A^+=A^*(AA^*)^{-1}$
- `thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution` · theorem — For every right-hand side $b$, $A^+b$ is the unique least-squares solution of minimum Euclidean norm
- `thm-least-squares-solutions-form-an-affine-kernel-translate-of-a-plus-b` · theorem — Every least-squares solution has the form $A^+b+(I-A^+A)z$, and the same affine family specializes to exact solutions when $b\in\operatorname{im}A$
- `prop-reduced-qr-formulas-for-full-rank-pseudoinverses` · proposition — Reduced QR gives the full-column and full-row-rank pseudoinverse formulas without forming normal equations
- `def-tikhonov-regularised-least-squares` · definition — The Tikhonov regularised least-squares objective $\|Ax-b\|_2^2+\lambda\|x\|_2^2$ for $\lambda>0$
- `thm-tikhonov-regularised-least-squares-has-a-unique-minimiser` · theorem — For every $\lambda>0$, the Tikhonov objective is strictly convex and has the unique minimiser $(A^*A+\lambda I)^{-1}A^*b$
- `prop-tikhonov-regularisation-has-singular-filter-factors` · proposition — Tikhonov regularisation scales each singular component by the filter factor $\sigma/(\sigma^2+\lambda)$
- `thm-tikhonov-regularised-solutions-converge-to-the-pseudoinverse-solution` · theorem — As $\lambda\downarrow0$, the Tikhonov minimisers converge to the Moore--Penrose solution $A^+b$
- `def-truncated-singular-value-pseudoinverse-at-a-declared-threshold` · definition — The truncated singular-value pseudoinverse obtained by discarding singular values below a declared numerical-rank threshold
- `prop-truncated-svd-and-tikhonov-are-hard-and-smooth-spectral-filters` · proposition — Truncated SVD and Tikhonov regularisation act as hard and smooth spectral filters on the singular components
- `thm-pseudoinversion-is-continuous-on-each-fixed-rank-stratum-and-discontinuous-at-rank-loss` · theorem — The Moore--Penrose pseudoinverse is continuous on each fixed-rank stratum and is not continuous across rank loss

### `the-moore-penrose-pseudoinverse-and-regularised-least-squares-examples` — The Moore--Penrose Pseudoinverse and Regularised Least Squares: Examples and Counterexamples (9 item(s))

- `ex-diagonal-pseudoinverse-and-the-two-orthogonal-projections` · example — A diagonal rank-deficient matrix makes $A^+$, $AA^+$, and $A^+A$ completely explicit
- `ex-an-overdetermined-inconsistent-system-and-its-minimum-norm-least-squares-solution` · example — An overdetermined inconsistent system has a unique minimum-norm least-squares solution given by $A^+b$
- `ex-an-underdetermined-system-and-its-minimum-norm-exact-solution` · example — An underdetermined consistent system has infinitely many exact solutions but a unique minimum-norm one
- `ex-a-rank-deficient-matrix-has-an-affine-family-of-least-squares-minimisers` · example — A rank-deficient matrix has an affine family of least-squares minimisers of the form $A^+b+(I-A^+A)z$
- `ex-a-full-column-rank-pseudoinverse-from-reduced-qr` · example — A full-column-rank pseudoinverse can be read off directly from a reduced QR factorisation
- `ex-ridge-regularisation-filters-a-diagonal-inverse-problem` · example — Ridge regularisation damps the small-singular-value directions in a diagonal inverse problem
- `ex-truncated-svd-denoising-on-a-diagonal-problem` · example — Truncated SVD denoising on a diagonal problem keeps the declared large singular directions and discards the noisy ones
- `fs-reverse-order-pseudoinversion-holds-without-hypotheses` · false-statement — For arbitrary matrices, $(AB)^+=B^+A^+$
- `cex-pseudoinversion-is-discontinuous-at-a-rank-changing-diagonal-family` · counterexample — The family $\operatorname{diag}(1,t)$ shows that pseudoinversion is not continuous across rank loss

### `eigenvalue-iterations-and-the-qr-algorithm` — Eigenvalue Iterations and the QR Algorithm (20 item(s))

- `def-eigenpair-residual-and-normwise-backward-error` · definition — The residual $r=Ax-\mu x$ and the normwise backward error of an approximate eigenpair
- `thm-eigenpair-residual-realises-the-minimum-norm-backward-error` · theorem — For a unit vector $x$, the smallest perturbation making $(\mu,x)$ an exact eigenpair has spectral norm $\|Ax-\mu x\|_2$
- `def-power-iteration` · definition — Power iteration with normalisation and Rayleigh-quotient eigenvalue estimates
- `thm-power-iteration-converges-projectively-under-a-simple-strictly-dominant-eigenvalue` · theorem — If a diagonalisable matrix has a simple eigenvalue of strictly largest modulus and the start vector has a nonzero component in that eigendirection, power iteration converges projectively at the eigenvalue-ratio rate
- `def-inverse-and-shifted-inverse-iteration` · definition — Inverse iteration and shifted inverse iteration
- `thm-shifted-inverse-iteration-converges-to-the-simple-eigenvalue-nearest-the-shift` · theorem — If $\mu$ is not an eigenvalue and one simple eigenvalue is uniquely nearest to $\mu$, shifted inverse iteration converges to its eigendirection
- `def-rayleigh-quotient-iteration` · definition — Rayleigh-quotient iteration for Hermitian matrices
- `prop-hermitian-rayleigh-quotient-stationary-points-and-residual-gradient` · proposition — For a Hermitian matrix, the eigenvectors are the stationary points of the Rayleigh quotient and the residual is its constrained gradient
- `prop-rayleigh-quotient-and-residual-converge-along-hermitian-power-iteration` · proposition — For Hermitian matrices, the Rayleigh quotient and residual converge with the expected rates along power iteration
- `thm-hermitian-rayleigh-quotient-iteration-has-local-cubic-convergence` · theorem — Near a simple Hermitian eigenvector, Rayleigh-quotient iteration converges cubically
- `def-subspace-iteration-and-the-dominant-invariant-subspace` · definition — Subspace iteration and the dominant invariant subspace of a matrix
- `thm-subspace-iteration-converges-to-the-dominant-invariant-subspace-under-a-spectral-gap` · theorem — Subspace iteration converges to the dominant invariant subspace when a spectral gap separates the wanted and unwanted eigenvalues
- `def-upper-hessenberg-and-real-symmetric-tridiagonal-matrices` · definition — Upper Hessenberg matrices and real symmetric tridiagonal matrices
- `thm-householder-similarity-reduces-to-hessenberg-and-tridiagonal-form` · theorem — Householder similarities reduce a general matrix to upper Hessenberg form and a real symmetric matrix to tridiagonal form
- `def-unshifted-and-shifted-qr-iteration-with-deflation-and-wilkinson-shift` · definition — Unshifted QR iteration, shifted QR iteration, deflation, and the Wilkinson shift
- `prop-unshifted-qr-is-orthonormalised-simultaneous-iteration-and-preserves-unitary-similarity` · proposition — Unshifted QR is orthonormalised simultaneous iteration, and every QR iterate is unitarily similar to the original matrix
- `thm-unshifted-qr-converges-under-separated-moduli-and-leading-minor-hypotheses` · theorem — If a matrix is diagonalisable, its eigenvalue moduli are distinct, and the leading principal minors of the eigenvector matrix are nonzero, then unshifted QR converges to triangular form with the eigenvalues on the diagonal
- `prop-shifted-qr-preserves-upper-hessenberg-form` · proposition — Shifted QR iteration preserves upper Hessenberg form
- `thm-wilkinson-shifted-symmetric-tridiagonal-qr-has-local-deflation-away-from-ties` · theorem — Away from the tie case, a Wilkinson-shifted symmetric tridiagonal QR step stays tridiagonal
- `prop-eigenpair-residual-thresholds-give-backward-error-stopping-rules` · proposition — A residual threshold on a normalised approximate eigenpair is exactly a normwise backward-error stopping rule

### `eigenvalue-iterations-and-the-qr-algorithm-examples` — Eigenvalue Iterations and the QR Algorithm: Examples and Counterexamples (9 item(s))

- `ex-power-iteration-on-a-diagonal-matrix-displays-the-eigenvalue-ratio-rate` · example — Power iteration on a diagonal matrix shows the $|\lambda_2/\lambda_1|^k$ convergence rate explicitly
- `cex-equal-dominant-moduli-can-make-power-iteration-cycle` · counterexample — Equal dominant moduli can make power iteration alternate or cycle instead of converging
- `cex-a-start-vector-orthogonal-to-the-dominant-left-eigendirection-can-defeat-power-iteration` · counterexample — For a nonnormal matrix, a start vector orthogonal to the dominant left eigendirection can defeat power iteration
- `ex-shifted-inverse-iteration-targets-a-nondominant-eigenvalue` · example — Shifted inverse iteration can target a non-dominant eigenvalue by moving it closest to the shift
- `ex-rayleigh-quotient-iteration-on-a-two-by-two-symmetric-matrix` · example — Rayleigh-quotient iteration on a $2\times2$ symmetric matrix exhibits fast local convergence
- `ex-householder-reduction-to-hessenberg-form-for-a-three-by-three-matrix` · example — A single Householder similarity reduces a $3\times3$ matrix to Hessenberg form
- `ex-unshifted-and-shifted-qr-steps-on-a-symmetric-matrix` · example — One unshifted QR step and one shifted QR step on the same symmetric matrix show the role of the shift
- `ex-wilkinson-shifted-qr-deflates-a-symmetric-tridiagonal-tail` · example — A Wilkinson-shifted QR step can sharply reduce the tail of a symmetric tridiagonal matrix
- `cex-a-defective-jordan-block-has-ill-conditioned-eigenvectors` · counterexample — A defective Jordan block shows that tiny perturbations can destroy an eigenvector picture even when eigenvalues barely move

### `the-radon-nikodym-theorem-and-lebesgue-decomposition` — The Radon Nikodym Theorem and Lebesgue Decomposition (20 item(s))

- `def-measure-concentrated-on-a-measurable-set` · definition — A positive, signed, or complex measure concentrated on a measurable set
- `def-absolutely-continuous-with-respect-to-a-positive-measure` · definition — Absolute continuity of a signed or complex measure with respect to a positive measure
- `thm-absolutely-continuous-and-singular-with-respect-to-the-same-positive-measure-implies-zero` · theorem — A signed or complex measure that is both absolutely continuous and singular with respect to the same positive measure is zero
- `thm-absolute-continuity-is-equivalent-for-a-signed-or-complex-measure-its-variation-and-its-jordan-data` · theorem — For signed and complex measures, absolute continuity is equivalent for the measure, its Jordan or real-imaginary parts, and its total variation
- `thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures` · theorem — Every sigma-finite signed measure admits a Lebesgue decomposition relative to a sigma-finite positive measure
- `thm-lebesgue-decomposition-is-unique-for-sigma-finite-signed-measures` · theorem — The Lebesgue decomposition of a sigma-finite signed measure is unique
- `def-the-absolutely-continuous-and-singular-parts-of-a-sigma-finite-signed-measure` · definition — The absolutely continuous part and the singular part in the Lebesgue decomposition
- `thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality` · theorem — A sigma-finite signed measure that is absolutely continuous with respect to a sigma-finite positive measure has a unique almost-everywhere density
- `cor-finite-complex-measures-admit-integrable-radon-nikodym-densities` · corollary — A finite complex measure absolutely continuous with respect to a sigma-finite positive measure has an integrable complex density
- `def-radon-nikodym-derivative` · definition — The Radon-Nikodym derivative as an almost-everywhere equivalence class
- `thm-integration-against-a-radon-nikodym-derivative` · theorem — Integrating against a Radon-Nikodym derivative recovers integration against the measure
- `thm-additivity-of-radon-nikodym-derivatives` · theorem — Radon-Nikodym derivatives add almost everywhere
- `thm-chain-rule-for-radon-nikodym-derivatives` · theorem — Radon-Nikodym derivatives satisfy the chain rule along nu << mu << lambda
- `cor-reciprocal-rule-for-equivalent-sigma-finite-measures` · corollary — Equivalent sigma-finite positive measures have reciprocal Radon-Nikodym derivatives almost everywhere
- `thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value` · theorem — The total variation of an absolutely continuous signed or complex measure has density the absolute value of the Radon-Nikodym derivative
- `prop-the-radon-nikodym-derivative-is-integrable-exactly-when-the-absolutely-continuous-part-is-finite` · proposition — The Radon-Nikodym derivative is integrable exactly when the absolutely continuous part is finite
- `thm-epsilon-delta-characterisation-of-absolute-continuity-for-finite-signed-or-complex-measures` · theorem — For finite signed or complex measures, absolute continuity is equivalent to the epsilon-delta small-set condition
- `thm-polar-decomposition-for-signed-and-complex-measures` · theorem — Every finite signed or complex measure has a polar decomposition against its total variation
- `thm-finite-borel-measures-on-r-have-a-unique-absolutely-continuous-discrete-and-singular-continuous-decomposition` · theorem — Every finite Borel measure on R has a unique absolutely continuous, discrete, and singular-continuous decomposition
- `rem-von-neumanns-hilbert-space-proof-of-radon-nikodym` · remark — Von Neumann's Hilbert-space proof of Radon-Nikodym is shorter but depends on L^2 Riesz representation

### `the-radon-nikodym-theorem-and-lebesgue-decomposition-examples` — The Radon Nikodym Theorem and Lebesgue Decomposition — Examples (15 item(s))

- `ex-the-density-two-x-on-zero-one-is-the-radon-nikodym-derivative-of-two-x-indicator-dlambda` · example — The density $2x$ on $[0,1]$ is the Radon-Nikodym derivative of its density measure
- `ex-the-lebesgue-decomposition-of-half-lebesgue-plus-half-cantor-measure` · example — The Lebesgue decomposition of one half Lebesgue plus one half Cantor measure
- `ex-delta-zero-plus-lebesgue-on-zero-one-splits-into-discrete-and-absolutely-continuous-parts` · example — The measure $\delta_0+\lambda\!\restriction_{[0,1]}$ splits into discrete and absolutely continuous parts
- `ex-the-chain-rule-for-radon-nikodym-derivatives-on-zero-one` · example — The chain rule for Radon-Nikodym derivatives on $[0,1]$
- `ex-a-piecewise-quadratic-distribution-function-recovers-its-density` · example — A piecewise-quadratic distribution function recovers its density
- `cex-counting-measure-on-zero-one-shows-the-dominating-measure-needs-sigma-finiteness` · counterexample — Counting measure on $[0,1]$ shows the dominating measure needs sigma-finiteness
- `cex-x-inverse-dlambda-on-zero-one-shows-finiteness-is-needed-in-the-epsilon-delta-criterion` · counterexample — $x^{-1}d\lambda$ on $(0,1)$ shows finiteness is needed in the epsilon-delta criterion
- `cex-two-radon-nikodym-derivatives-can-differ-on-a-null-set` · counterexample — Two Radon-Nikodym derivatives can differ on a null set
- `cex-lebesgue-plus-counting-measure-has-no-lebesgue-decomposition-relative-to-lebesgue-measure` · counterexample — Lebesgue plus counting measure has no Lebesgue decomposition relative to Lebesgue measure
- `cex-an-absolutely-continuous-finite-measure-can-have-an-unbounded-radon-nikodym-derivative` · counterexample — An absolutely continuous finite measure can have an unbounded Radon-Nikodym derivative
- `fs-every-measure-is-absolutely-continuous-or-singular-with-respect-to-lebesgue-measure` · false-statement — FALSE: every measure is absolutely continuous or singular with respect to Lebesgue measure
- `fs-the-radon-nikodym-derivative-is-a-uniquely-determined-function` · false-statement — FALSE: the Radon-Nikodym derivative is a uniquely determined function
- `fs-the-epsilon-delta-condition-characterises-absolute-continuity-for-every-measure` · false-statement — FALSE: the epsilon-delta condition characterises absolute continuity for every measure
- `fs-the-radon-nikodym-theorem-holds-without-sigma-finiteness` · false-statement — FALSE: the Radon-Nikodym theorem holds without sigma-finiteness
- `fs-absolutely-continuous-measures-always-have-bounded-radon-nikodym-derivatives` · false-statement — FALSE: absolutely continuous measures always have bounded Radon-Nikodym derivatives

### `rank-theorems-and-embedded-submanifolds` — Rank Theorems and Embedded Submanifolds (37 item(s))

- `def-rank-of-a-smooth-map-at-a-point` · definition — The rank of a smooth map at a point
- `def-immersion-submersion-and-constant-rank-map` · definition — Immersions, submersions, and constant-rank maps
- `def-regular-and-critical-points-and-values` · definition — Regular and critical points and values
- `cor-the-immersion-and-submersion-loci-are-open` · corollary — The immersion and submersion loci are open
- `thm-smooth-inverse-function-theorem-on-manifolds` · theorem — The smooth inverse function theorem on manifolds
- `thm-constant-rank-theorem-for-manifolds` · theorem — The constant-rank theorem for manifolds
- `cor-local-normal-form-for-immersions` · corollary — Local normal form for immersions
- `cor-local-normal-form-for-submersions` · corollary — Local normal form for submersions
- `cor-every-immersion-is-locally-an-embedding` · corollary — Every immersion is locally an embedding
- `cor-every-submersion-is-an-open-map` · corollary — Every submersion is an open map
- `prop-a-smooth-map-of-locally-maximal-rank-has-locally-constant-rank` · proposition — A smooth map of locally maximal rank has locally constant rank
- `def-embedded-submanifold-and-slice-chart` · definition — Embedded submanifolds and slice charts
- `lem-slice-chart-restrictions-form-a-smooth-atlas` · lemma — Slice-chart restrictions form a smooth atlas
- `def-smooth-embedding` · definition — Smooth embeddings
- `prop-the-smooth-structure-of-an-embedded-submanifold-is-unique` · proposition — The smooth structure of an embedded submanifold is unique
- `prop-the-inclusion-of-an-embedded-submanifold-is-a-smooth-embedding` · proposition — The inclusion of an embedded submanifold is a smooth embedding
- `prop-the-image-of-a-smooth-embedding-is-an-embedded-submanifold` · proposition — The image of a smooth embedding is an embedded submanifold
- `cor-an-injective-immersion-from-a-compact-manifold-is-an-embedding` · corollary — An injective immersion from a compact manifold is an embedding
- `def-immersed-submanifold` · definition — Immersed submanifolds
- `prop-smoothness-into-an-embedded-submanifold-is-an-initial-property` · proposition — Smoothness into an embedded submanifold is an initial property
- `prop-smoothness-of-a-map-on-an-embedded-submanifold-is-local-in-the-ambient-space` · proposition — Smoothness of a map on an embedded submanifold is local in the ambient space
- `def-codimension-and-hypersurface` · definition — Codimension and hypersurfaces
- `def-local-defining-map-for-an-embedded-submanifold` · definition — Local defining maps for embedded submanifolds
- `thm-embedded-submanifolds-admit-local-defining-submersions` · theorem — Embedded submanifolds admit local defining submersions
- `thm-a-regular-level-set-is-an-embedded-submanifold` · theorem — A regular level set is an embedded submanifold
- `prop-tangent-space-of-a-regular-level-set-is-the-kernel` · proposition — The tangent space of a regular level set is the kernel
- `thm-preimage-theorem-for-submanifolds-under-submersions` · theorem — The preimage theorem for submanifolds under submersions
- `prop-the-diagonal-is-an-embedded-submanifold` · proposition — The diagonal is an embedded submanifold
- `prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold` · proposition — The graph of a smooth map is an embedded submanifold
- `prop-transverse-intersections-of-coordinate-slices-have-the-expected-local-form` · proposition — Transverse intersections of coordinate slices have the expected local form
- `cor-a-discrete-embedded-submanifold-is-closed-locally-and-countable` · corollary — A discrete embedded submanifold is locally closed and countable
- `fs-every-injective-immersion-is-an-embedding` · false-statement — An injective immersion need not be an embedding
- `fs-the-image-of-every-immersion-is-an-embedded-submanifold` · false-statement — The image of every immersion need not be an embedded submanifold
- `fs-a-regular-value-must-belong-to-the-image` · false-statement — A regular value need not belong to the image
- `fs-constant-rank-at-one-point-implies-constant-rank-nearby` · false-statement — Rank at one point need not determine nearby rank
- `fs-every-embedded-submanifold-is-an-open-subset-of-the-ambient-manifold` · false-statement — An embedded submanifold need not be open in the ambient manifold
- `fs-the-intrinsic-topology-of-an-immersed-submanifold-is-always-the-subspace-topology` · false-statement — The intrinsic topology of an immersed submanifold need not be the subspace topology

### `rank-theorems-and-embedded-submanifolds-examples` — Rank Theorems and Embedded Submanifolds — Examples (8 item(s))

- `ex-coordinate-inclusions-and-projections-as-immersion-and-submersion` · example — Coordinate inclusions are immersions and coordinate projections are submersions
- `ex-the-special-linear-group-as-a-regular-level-set` · example — The special linear group is a codimension-one embedded submanifold
- `ex-a-cylinder-as-the-preimage-of-a-circle-under-projection` · example — A cylinder is the preimage of a circle under a projection
- `ex-the-graph-of-the-sine-function-as-an-embedded-submanifold` · example — The graph of the sine function is an embedded submanifold
- `ex-a-regular-value-with-empty-fibre` · example — A value outside the image can still be regular
- `cex-the-figure-eight-is-an-immersed-image-not-an-embedded-submanifold` · counterexample — A figure-eight curve is an immersed image but not an embedded submanifold
- `cex-countably-many-concentric-circles-give-an-injective-immersion-not-an-embedding` · counterexample — Countably many concentric circles give an injective immersion that is not an embedding
- `cex-a-rank-drop-at-a-point-need-not-persist-locally` · counterexample — A rank drop at one point need not persist locally

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
| `cex-an-absolutely-continuous-finite-measure-can-have-an-unbounded-radon-nikodym-derivative` | `the-radon-nikodym-theorem-and-lebesgue-decomposition-examples` | gpt-5.6-terra | `fac5fe6d82406700ea40a913cd8aa6ca2f895b7e967d08c37b8af117bf6b27ce` |
| `cex-the-figure-eight-is-an-immersed-image-not-an-embedded-submanifold` | `rank-theorems-and-embedded-submanifolds-examples` | gpt-5.6-terra | `d71738ff56ec40ea56b591b8778f5f83f29901a60a5a0d6fd686cabae0707932` |
| `cex-two-radon-nikodym-derivatives-can-differ-on-a-null-set` | `the-radon-nikodym-theorem-and-lebesgue-decomposition-examples` | gpt-5.6-terra | `c4a3b063c74d966ee437f53166367659a34567d2be2abf83e8bcc715c69676c8` |
| `cex-x-inverse-dlambda-on-zero-one-shows-finiteness-is-needed-in-the-epsilon-delta-criterion` | `the-radon-nikodym-theorem-and-lebesgue-decomposition-examples` | gpt-5.6-terra | `d1a8e48badb3ee44c1b3a11417a1975138a811f48c4e3adc35f73a32b244483e` |
| `cor-finite-complex-measures-admit-integrable-radon-nikodym-densities` | `the-radon-nikodym-theorem-and-lebesgue-decomposition` | gpt-5.6-terra | `aeefdd0e77f384c1209b106639cb03e5c0a8cf5cf132001d03d9c9fe7ac369fb` |
| `def-power-iteration` | `eigenvalue-iterations-and-the-qr-algorithm` | gpt-5.6-terra | `01aa568c20401afce978a3e07759c7e7db4ed1597247624e0dc0be3d237a0b23` |
| `def-subspace-iteration-and-the-dominant-invariant-subspace` | `eigenvalue-iterations-and-the-qr-algorithm` | gpt-5.6-terra | `6be70fc25b7e30e65cc3ef57606e555303228a1f0c7162559462ca6aa8cd6070` |
| `def-truncated-singular-value-pseudoinverse-at-a-declared-threshold` | `the-moore-penrose-pseudoinverse-and-regularised-least-squares` | gpt-5.6-terra | `be8a57e2d2ace088c06bd65aa57bd28aaeeaaab1486a93ffec5d8a4bda7581b2` |
| `def-unshifted-and-shifted-qr-iteration-with-deflation-and-wilkinson-shift` | `eigenvalue-iterations-and-the-qr-algorithm` | gpt-5.6-terra | `bb2601e7bdaf1261dd4a88d34524c48c8a95f91c2b2a69756eb9d168b4300c18` |
| `ex-a-cylinder-as-the-preimage-of-a-circle-under-projection` | `rank-theorems-and-embedded-submanifolds-examples` | gpt-5.6-terra | `ed58fb1bf394380036638f813435030fa0c8d3cf3e5c1c2375d962eac7c0efae` |
| `ex-a-piecewise-quadratic-distribution-function-recovers-its-density` | `the-radon-nikodym-theorem-and-lebesgue-decomposition-examples` | gpt-5.6-terra | `f8b57e3cd4ec235cb6b41f010dc9adf326fb610b6d8bc72eb607a4cca8e53e0b` |
| `ex-a-regular-value-with-empty-fibre` | `rank-theorems-and-embedded-submanifolds-examples` | gpt-5.6-terra | `b2b82334f705e6099648b063e639c75c60d524ec96eb9ab2a2bed7a5f52653c1` |
| `ex-coordinate-inclusions-and-projections-as-immersion-and-submersion` | `rank-theorems-and-embedded-submanifolds-examples` | gpt-5.6-terra | `eac80cbbb5490fdf9c96bf312540296ea84be801818f9b25714b2be666cf7d6d` |
| `ex-power-iteration-on-a-diagonal-matrix-displays-the-eigenvalue-ratio-rate` | `eigenvalue-iterations-and-the-qr-algorithm-examples` | gpt-5.6-terra | `54dccb12c5d48ce938eb0da3e4992d486c6e4c82de4291202432143930d55f48` |
| `ex-the-chain-rule-for-radon-nikodym-derivatives-on-zero-one` | `the-radon-nikodym-theorem-and-lebesgue-decomposition-examples` | gpt-5.6-terra | `57d0a65664349d6e2fcf1a1086ebfea713e9f9bb34a319ee0e1e17698f70c924` |
| `ex-the-density-two-x-on-zero-one-is-the-radon-nikodym-derivative-of-two-x-indicator-dlambda` | `the-radon-nikodym-theorem-and-lebesgue-decomposition-examples` | gpt-5.6-terra | `a67c3554fd1247d0caf81dfdb400b476a2f3e247b0c349bdf42e5836c96ddd49` |
| `ex-the-graph-of-the-sine-function-as-an-embedded-submanifold` | `rank-theorems-and-embedded-submanifolds-examples` | gpt-5.6-terra | `8a4e3d056ba67f6d138844cc84c6fd3943233f64b6fc78b648ca913022076ba6` |
| `ex-the-special-linear-group-as-a-regular-level-set` | `rank-theorems-and-embedded-submanifolds-examples` | gpt-5.6-terra | `ad8085a091fa0bf295eec4992168f071c693f97e7fd0f70440e10ac5c763f314` |
| `fs-a-regular-value-must-belong-to-the-image` | `rank-theorems-and-embedded-submanifolds` | gpt-5.6-terra | `694547a07ffd7415aa56f44087e10a5d7102b03b0dbaf8418aac143c6df9fa7f` |
| `fs-absolutely-continuous-measures-always-have-bounded-radon-nikodym-derivatives` | `the-radon-nikodym-theorem-and-lebesgue-decomposition-examples` | gpt-5.6-terra | `20133d02dc9a46affaa9afe9bb7d27d861086b1fa64667da80d247579645a51f` |
| `fs-every-measure-is-absolutely-continuous-or-singular-with-respect-to-lebesgue-measure` | `the-radon-nikodym-theorem-and-lebesgue-decomposition-examples` | gpt-5.6-terra | `ba422abce07acf0c2369ac632ffbd07d49a780c439ee616641ea63836e73cd51` |
| `fs-the-epsilon-delta-condition-characterises-absolute-continuity-for-every-measure` | `the-radon-nikodym-theorem-and-lebesgue-decomposition-examples` | gpt-5.6-terra | `914583609afbf27dd6ed3278cc98dce35193ca4b42298ef2eec5939fb576bfa7` |
| `fs-the-image-of-every-immersion-is-an-embedded-submanifold` | `rank-theorems-and-embedded-submanifolds` | gpt-5.6-terra | `45792e31418ddd14847ebaa3844eaaffb2d4bd0487f20b700c1cf19fd866047e` |
| `fs-the-radon-nikodym-derivative-is-a-uniquely-determined-function` | `the-radon-nikodym-theorem-and-lebesgue-decomposition-examples` | gpt-5.6-terra | `798ba97883bdfb17c7f8a28d3544b8d46b930b0d4685cbfb5fb512702ef76bb1` |
| `fs-the-radon-nikodym-theorem-holds-without-sigma-finiteness` | `the-radon-nikodym-theorem-and-lebesgue-decomposition-examples` | gpt-5.6-terra | `60e9c40e878f76509cef358cbd55db63fbc3c33d1c0d769fecd4c52e91f3c900` |
| `prop-full-column-rank-pseudoinverse-formula` | `the-moore-penrose-pseudoinverse-and-regularised-least-squares` | gpt-5.6-terra | `75bc4ddca1da79ba420b2ba4dcf1200052dd7fa848dbd0ee6972f47adf6dbfe2` |
| `prop-pseudoinversion-is-involutive-adjoint-compatible-and-unitarily-equivariant` | `the-moore-penrose-pseudoinverse-and-regularised-least-squares` | gpt-5.6-terra | `69e1c1868c162624559b685037d7389adbf09a71ba1e4ef6673edbd1202f032c` |
| `prop-rayleigh-quotient-and-residual-converge-along-hermitian-power-iteration` | `eigenvalue-iterations-and-the-qr-algorithm` | gpt-5.6-terra | `50f0a1f368ea08fdb23b6969a1915190b2edcaf4fad0ceab6729cb02e2039c7b` |
| `prop-the-radon-nikodym-derivative-is-integrable-exactly-when-the-absolutely-continuous-part-is-finite` | `the-radon-nikodym-theorem-and-lebesgue-decomposition` | gpt-5.6-terra | `bc8c51876b3b5897c054f37c58ecd65d0e074752bdafa3bd777abf92823b6d8e` |
| `prop-the-smooth-structure-of-an-embedded-submanifold-is-unique` | `rank-theorems-and-embedded-submanifolds` | gpt-5.6-terra | `4cb791ff16cd50451ee87cbd16c7df33f9ea6a23674730cc01798048e204c0cf` |
| `prop-tikhonov-regularisation-has-singular-filter-factors` | `the-moore-penrose-pseudoinverse-and-regularised-least-squares` | gpt-5.6-terra | `443904ca245b3ea869d72c5edb130a003145bff4f507aa2821e2fa9638d62bb9` |
| `prop-truncated-svd-and-tikhonov-are-hard-and-smooth-spectral-filters` | `the-moore-penrose-pseudoinverse-and-regularised-least-squares` | gpt-5.6-terra | `4ec916e9dffb92e5cb2365eec11d8683dbc1a818ddafa274b29045a456aaade9` |
| `thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution` | `the-moore-penrose-pseudoinverse-and-regularised-least-squares` | gpt-5.6-terra | `33f228959f64abf0fa876b41cd497201d74298b6a69306012295a9d6076b9e7c` |
| `thm-aa-plus-and-a-plus-a-are-orthogonal-projections-onto-the-image-spaces` | `the-moore-penrose-pseudoinverse-and-regularised-least-squares` | gpt-5.6-terra | `3db2a9f55d62a7d0d42b8760f274fef37b9bc9a70f619b67f246eed145190e75` |
| `thm-additivity-of-radon-nikodym-derivatives` | `the-radon-nikodym-theorem-and-lebesgue-decomposition` | gpt-5.6-terra | `c83e2afeb81c54ae07ea7c29ebe1d755e16db4da8f0b893e2453957ae63c49ad` |
| `thm-constant-rank-theorem-for-manifolds` | `rank-theorems-and-embedded-submanifolds` | gpt-5.6-terra | `afd5d7d960ed2255c5a790180563ccee353a840add4e15e5c52967863970be98` |
| `thm-eigenpair-residual-realises-the-minimum-norm-backward-error` | `eigenvalue-iterations-and-the-qr-algorithm` | gpt-5.6-terra | `a572128a5f4397b992866877991695ba24a9b8b9d0269f2f9bf266105f259a7f` |
| `thm-finite-borel-measures-on-r-have-a-unique-absolutely-continuous-discrete-and-singular-continuous-decomposition` | `the-radon-nikodym-theorem-and-lebesgue-decomposition` | gpt-5.6-terra | `e4c505e7417e382983256c0b2eef5e51bc197bab8600c500c0f0083743c0d87c` |
| `thm-hermitian-rayleigh-quotient-iteration-has-local-cubic-convergence` | `eigenvalue-iterations-and-the-qr-algorithm` | gpt-5.6-terra | `d25d3f06d6deaf6d5b2ddd19acecad87134b8516f607f88bbcaca871d2db0cb0` |
| `thm-householder-similarity-reduces-to-hessenberg-and-tridiagonal-form` | `eigenvalue-iterations-and-the-qr-algorithm` | gpt-5.6-terra | `425bb2620878b72368f304da3fc5af2cc1f3008b875bda8c49d47ad0f79de4d8` |
| `thm-least-squares-solutions-form-an-affine-kernel-translate-of-a-plus-b` | `the-moore-penrose-pseudoinverse-and-regularised-least-squares` | gpt-5.6-terra | `02417c07560a1d302027a2ab03a9e63e889cb6b54beff88393f80621325a6171` |
| `thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures` | `the-radon-nikodym-theorem-and-lebesgue-decomposition` | gpt-5.6-terra | `d7af6dabea49f3566b8ab3150e583318343a86a536ebbba52d536816a3cde27e` |
| `thm-polar-decomposition-for-signed-and-complex-measures` | `the-radon-nikodym-theorem-and-lebesgue-decomposition` | gpt-5.6-terra | `01401f11ba345d13f80b7da96726537986d4eeda5a1db9ccccd896563aca7828` |
| `thm-power-iteration-converges-projectively-under-a-simple-strictly-dominant-eigenvalue` | `eigenvalue-iterations-and-the-qr-algorithm` | gpt-5.6-terra | `9476d9a8ba1999dd8fa222cdbed09060c116103ef0c776ed6a14c302dd1d9648` |
| `thm-pseudoinversion-is-continuous-on-each-fixed-rank-stratum-and-discontinuous-at-rank-loss` | `the-moore-penrose-pseudoinverse-and-regularised-least-squares` | gpt-5.6-terra | `e46ca767c54775af907cb6353e33b1bf1caaf2a7bf5cf1e83643eeb068848d06` |
| `thm-subspace-iteration-converges-to-the-dominant-invariant-subspace-under-a-spectral-gap` | `eigenvalue-iterations-and-the-qr-algorithm` | gpt-5.6-terra | `a63202d8db70569c10ec766cf4b6bf24e0cc885ac22cb1be8b7e22ab36b72331` |
| `thm-tikhonov-regularised-least-squares-has-a-unique-minimiser` | `the-moore-penrose-pseudoinverse-and-regularised-least-squares` | gpt-5.6-terra | `71cd9aba1bf273b85c3a10b2e23d33a10722e0aaff6ccee35a5eaf5989492c12` |
| `thm-unshifted-qr-converges-under-separated-moduli-and-leading-minor-hypotheses` | `eigenvalue-iterations-and-the-qr-algorithm` | gpt-5.6-terra | `92226365f1ba1d78aee12e5f6e6697ffbc4d4caef8f193ab4de644a20a5668a1` |
| `thm-wilkinson-shifted-symmetric-tridiagonal-qr-has-local-deflation-away-from-ties` | `eigenvalue-iterations-and-the-qr-algorithm` | gpt-5.6-terra | `cf4b125d4131466b74840071228cd03f2545d5edfebb9c8da4f50e00cdfb5188` |

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
