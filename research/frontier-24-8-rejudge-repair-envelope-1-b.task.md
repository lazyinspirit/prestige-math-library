# Exact Step-8 repair envelope — 8-rejudge, round 1

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
the full untruncated output, exact current rejection tuples, and explicit run/published ownership.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-24",
  "stage": "8-rejudge",
  "round": 1,
  "mode": "rejudge-adjudication",
  "group": "b",
  "failures": [
    {
      "id": "judge-closure",
      "stage": "8-rejudge",
      "why": "ERROR judge-adjudication-missing [cex-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language]: cex-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language: current gpt-5.6-terra rejection has no exact Alpha outcome ",
      "output": "level-coverage --judge-only: 493/493 current configured-judge verdict set(s); 0 terminal manual resolution(s), 0 need rejudge, 33 unadjudicated, 0 open fatal, 217 adjudicated rejection(s) closed nonfatally; legacy gate counter 493/493 current pairs (one per-item configured verdict set, including singleton lineups)\nERROR judge-adjudication-missing [cex-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language]: cex-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language: current gpt-5.6-terra rejection has no exact Alpha outcome for context f46f8c618a181aec0eda876af7de1cefb950246ffe3119d4f073619fe1ec39b6\nERROR judge-adjudication-missing [cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake]: cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake: current gpt-5.6-terra rejection has no exact Alpha outcome for context c26b4beedf9507d241ac26d269465fc4f09bb4da4e0be7c3a4a7f9318b45a804\nERROR judge-adjudication-missing [def-permutation-matrix-partial-pivoting-and-pivot-growth]: def-permutation-matrix-partial-pivoting-and-pivot-growth: current gpt-5.6-terra rejection has no exact Alpha outcome for context bc999189133c1cc42a1a25d7496c5f93deebb414a160bba360ed84805fdd334e\nERROR judge-adjudication-missing [def-principal-part-at-an-isolated-point]: def-principal-part-at-an-isolated-point: current gpt-5.6-terra rejection has no exact Alpha outcome for context 98834c69339edef3278083b90deec31f0200f0079408bbdcb7643e8434b21d9b\nERROR judge-adjudication-missing [def-real-and-complex-givens-transformations]: def-real-and-complex-givens-transformations: current gpt-5.6-terra rejection has no exact Alpha outcome for context 6eb134ebc34c8cfae8170f43af357e7a4f1a0869ccb6af4772cd56209bf5b63b\nERROR judge-adjudication-missing [def-velocity-derivation-of-a-smooth-curve]: def-velocity-derivation-of-a-smooth-curve: current gpt-5.6-terra rejection has no exact Alpha outcome for context 0054c2aee57573dd6e8e5b70fcd30be8d1b6ff01645438e70fa43c690e7742df\nERROR judge-adjudication-missing [ex-a-smooth-partition-on-real-space-subordinate-to-two-half-spaces]: ex-a-smooth-partition-on-real-space-subordinate-to-two-half-spaces: current gpt-5.6-terra rejection has no exact Alpha outcome for context 89875f32ab26019740588f9aca80113e71fb51e6d1ef7737edeffe332bf2d99f\nERROR judge-adjudication-missing [ex-noether-normalisation-triangular-change]: ex-noether-normalisation-triangular-change: current gpt-5.6-terra rejection has no exact Alpha outcome for context a973ac0d973dd9f596778418d0e67a98b6ad68db08146effb177763ebb1cc754\nERROR judge-adjudication-missing [ex-the-published-module-five-lemma-as-an-instance]: ex-the-published-module-five-lemma-as-an-instance: current gpt-5.6-terra rejection has no exact Alpha outcome for context 6e0cb442af5fd6ad9da58e13b7e5ec36722d9962e87953c0fa7b072b0e4b6fa5\nERROR judge-adjudication-missing [ex-the-tangent-bundle-of-the-circle-is-a-cylinder]: ex-the-tangent-bundle-of-the-circle-is-a-cylinder: current gpt-5.6-terra rejection has no exact Alpha outcome for context 3d9bba2997cc3cee445f58e0272cbf4057f1e4255c8c4a277c5b59a96ba12187\nERROR judge-adjudication-missing [ex-the-tangent-space-of-the-sphere-from-curve-velocities]: ex-the-tangent-space-of-the-sphere-from-curve-velocities: current gpt-5.6-terra rejection has no exact Alpha outcome for context 1a1dffeecba77b5764df791de06e9912a469c87cbd07f0b56e056e21e2c10758\nERROR judge-adjudication-missing [fs-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language]: fs-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language: current gpt-5.6-terra rejection has no exact Alpha outcome for context 2065515cab5d1e290ec1def7337c94696e5a0b2f4f6d28257a1024e90fa41205\nERROR judge-adjudication-missing [lem-chart-bump-at-a-point-with-prescribed-support]: lem-chart-bump-at-a-point-with-prescribed-support: current gpt-5.6-terra rejection has no exact Alpha outcome for context 7214c17470733fd47910bb8b492c36c387a78820def1e3d38d8be66b84a07988\nERROR judge-adjudication-missing [lem-two-omitted-values-rule-out-an-essential-singularity]: lem-two-omitted-values-rule-out-an-essential-singularity: current gpt-5.6-terra rejection has no exact Alpha outcome for context fe0ea56ec9dee96f852d27aee33a10f9d9918a1ed3ee7ff6b87c0886cb2dcb19\nERROR judge-adjudication-missing [prop-finite-biproducts-of-complexes-are-computed-degreewise]: prop-finite-biproducts-of-complexes-are-computed-degreewise: current gpt-5.6-terra rejection has no exact Alpha outcome for context 2d8ba31f39d14f45c2d31a0ee44a4621017a650281467b1133ad28cd4090049b\nERROR judge-adjudication-missing [thm-chomsky-normal-form]: thm-chomsky-normal-form: current gpt-5.6-terra rejection has no exact Alpha outcome for context 79967e960e4323df702e479243ab63d897861e1fbd006ead703da7274de3eb65\nERROR judge-adjudication-missing [thm-elimination-of-unit-productions]: thm-elimination-of-unit-productions: current gpt-5.6-terra rejection has no exact Alpha outcome for context 1fbbe304f6e553e813169da0ed7d9b8b3d627ff573f3489d98784bf0289877fb\nERROR judge-adjudication-missing [thm-elimination-of-useless-symbols]: thm-elimination-of-useless-symbols: current gpt-5.6-terra rejection has no exact Alpha outcome for context 0fade47f84ff925cfd141cc8fbe9948c4a87fa92f1fb30ea3b07a0cf545eca16\nERROR judge-adjudication-missing [thm-four-lemma-in-an-abelian-category]: thm-four-lemma-in-an-abelian-category: current gpt-5.6-terra rejection has no exact Alpha outcome for context 0dd77a2a4c5f389d6b3e4a79ed8298f5c321886cce2b925299c8ae0e394d06af\nERROR judge-adjudication-missing [thm-gamma-weierstrass-product]: thm-gamma-weierstrass-product: current gpt-5.6-terra rejection has no exact Alpha outcome for context 0c760634b13d2f9c4a6886105b7de1ee3ca68a9bafcc8aa989b059bcde3acad3\nERROR judge-adjudication-missing [thm-gaussian-elimination-multipliers-produce-the-normalised-lu-factors]: thm-gaussian-elimination-multipliers-produce-the-normalised-lu-factors: current gpt-5.6-terra rejection has no exact Alpha outcome for context ac65cb9cd2070e169f6af198a7ee1f6bd463b0270dc60d212e148032c16d9c38\nERROR judge-adjudication-missing [thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model]: thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model: current gpt-5.6-terra rejection has no exact Alpha outcome for context 0802d80ce29b1dcf950dd40a32450b910364cc2e1fdb2adf2ae2b38aac3b304e\nERROR judge-adjudication-missing [thm-nine-lemma-in-an-abelian-category]: thm-nine-lemma-in-an-abelian-category: current gpt-5.6-terra rejection has no exact Alpha outcome for context f76d1a8cce9bffe25d34c976675e0bd91bdf61c1bf5de63460a197f40405795d\nERROR judge-adjudication-missing [thm-nine-lemma-variants-by-which-rows-are-assumed-exact]: thm-nine-lemma-variants-by-which-rows-are-assumed-exact: current gpt-5.6-terra rejection has no exact Alpha outcome for context 1ec9fc27d6de2452b9e59a52e67a0f2c75f37e528a0c45d5d7ab31f667df8aa9\nERROR judge-adjudication-missing [thm-sharp-nine-lemma]: thm-sharp-nine-lemma: current gpt-5.6-terra rejection has no exact Alpha outcome for context 040a204068c7e49d2af6a741fb46d471d6a8df81491e3de157e3cc046e30e777\nERROR judge-adjudication-missing [thm-short-five-lemma-in-an-abelian-category]: thm-short-five-lemma-in-an-abelian-category: current gpt-5.6-terra rejection has no exact Alpha outcome for context e6e3dc68088a23118c12e7e17f99d3bfeef32e1795b8bc30e16fcb2b0ea1fe5b\nERROR judge-adjudication-missing [thm-stirling-formula-gamma]: thm-stirling-formula-gamma: current gpt-5.6-terra rejection has no exact Alpha outcome for context 6100dd5c84df3e21d683892bfe318c3a2ae0ac5df5f6bcd45d4918ccaa40ebf1\nERROR judge-adjudication-missing [thm-symmetric-nine-lemma]: thm-symmetric-nine-lemma: current gpt-5.6-terra rejection has no exact Alpha outcome for context 39f68cc98e21cecba8a4368a5d36c7417fcfb89b9ac39e63e1dcca46b5049d35\nERROR judge-adjudication-missing [thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure]: thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure: current gpt-5.6-terra rejection has no exact Alpha outcome for context 9b2b95a4496bc0e9daef9cbde60cc28d6b081fc7fb8f6571184ffdfcc6603ed2\nERROR judge-adjudication-missing [thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]: thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure: current gpt-5.6-terra rejection has no exact Alpha outcome for context a20dcffd74bc6991a12b712dc1d9a6ab5e089ae096b99e048d61dd79a0112573\nERROR judge-adjudication-missing [thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals]: thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals: current gpt-5.6-terra rejection has no exact Alpha outcome for context a0e0dc9a7679714a053561abf368460142d1882039966f33c7bbad00d6ee8610\nERROR judge-adjudication-missing [thm-weak-four-lemma-with-the-exactness-hypotheses-named]: thm-weak-four-lemma-with-the-exactness-hypotheses-named: current gpt-5.6-terra rejection has no exact Alpha outcome for context 0e1025fc33377b29ff0e1f1769d02b5b7bf62efedd2a520c0157099a9bec344d\nERROR judge-adjudication-missing [thm-zero-divisor-theorem-on-plane-domains]: thm-zero-divisor-theorem-on-plane-domains: current gpt-5.6-terra rejection has no exact Alpha outcome for context 352a219a206d15940a1356ac9903f853293fe0866bc9c90a44a1237d153c38cb\n",
      "named_ids": [
        "cex-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language",
        "cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake",
        "def-permutation-matrix-partial-pivoting-and-pivot-growth",
        "def-principal-part-at-an-isolated-point",
        "def-real-and-complex-givens-transformations",
        "def-velocity-derivation-of-a-smooth-curve",
        "ex-a-smooth-partition-on-real-space-subordinate-to-two-half-spaces",
        "ex-noether-normalisation-triangular-change",
        "ex-the-published-module-five-lemma-as-an-instance",
        "ex-the-tangent-bundle-of-the-circle-is-a-cylinder",
        "ex-the-tangent-space-of-the-sphere-from-curve-velocities",
        "fs-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language",
        "lem-chart-bump-at-a-point-with-prescribed-support",
        "lem-two-omitted-values-rule-out-an-essential-singularity",
        "prop-finite-biproducts-of-complexes-are-computed-degreewise",
        "thm-chomsky-normal-form",
        "thm-elimination-of-unit-productions",
        "thm-elimination-of-useless-symbols",
        "thm-four-lemma-in-an-abelian-category",
        "thm-gamma-weierstrass-product",
        "thm-gaussian-elimination-multipliers-produce-the-normalised-lu-factors",
        "thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model",
        "thm-nine-lemma-in-an-abelian-category",
        "thm-nine-lemma-variants-by-which-rows-are-assumed-exact",
        "thm-sharp-nine-lemma",
        "thm-short-five-lemma-in-an-abelian-category",
        "thm-stirling-formula-gamma",
        "thm-symmetric-nine-lemma",
        "thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure",
        "thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure",
        "thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals",
        "thm-weak-four-lemma-with-the-exactness-hypotheses-named",
        "thm-zero-divisor-theorem-on-plane-domains"
      ]
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "cex-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "def-permutation-matrix-partial-pivoting-and-pivot-growth",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "def-principal-part-at-an-isolated-point",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "def-real-and-complex-givens-transformations",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "def-velocity-derivation-of-a-smooth-curve",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-smooth-partition-on-real-space-subordinate-to-two-half-spaces",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-noether-normalisation-triangular-change",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-published-module-five-lemma-as-an-instance",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-tangent-bundle-of-the-circle-is-a-cylinder",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-tangent-space-of-the-sphere-from-curve-velocities",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-chart-bump-at-a-point-with-prescribed-support",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-two-omitted-values-rule-out-an-essential-singularity",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-finite-biproducts-of-complexes-are-computed-degreewise",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-chomsky-normal-form",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-elimination-of-unit-productions",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-elimination-of-useless-symbols",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-four-lemma-in-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-gamma-weierstrass-product",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-gaussian-elimination-multipliers-produce-the-normalised-lu-factors",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-nine-lemma-in-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-nine-lemma-variants-by-which-rows-are-assumed-exact",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-sharp-nine-lemma",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-short-five-lemma-in-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-stirling-formula-gamma",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-symmetric-nine-lemma",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-weak-four-lemma-with-the-exactness-hypotheses-named",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-zero-divisor-theorem-on-plane-domains",
      "scope": "run",
      "owner": "c"
    }
  ],
  "assigned_items": [
    {
      "id": "def-permutation-matrix-partial-pivoting-and-pivot-growth",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "def-real-and-complex-givens-transformations",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "def-velocity-derivation-of-a-smooth-curve",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-smooth-partition-on-real-space-subordinate-to-two-half-spaces",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-tangent-bundle-of-the-circle-is-a-cylinder",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-tangent-space-of-the-sphere-from-curve-velocities",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-chart-bump-at-a-point-with-prescribed-support",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-finite-biproducts-of-complexes-are-computed-degreewise",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-gaussian-elimination-multipliers-produce-the-normalised-lu-factors",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure",
      "scope": "run",
      "owner": "b"
    }
  ],
  "live_tuples": [
    {
      "id": "def-permutation-matrix-partial-pivoting-and-pivot-growth",
      "model": "gpt-5.6-terra",
      "context_sha256": "bc999189133c1cc42a1a25d7496c5f93deebb414a160bba360ed84805fdd334e",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-real-and-complex-givens-transformations",
      "model": "gpt-5.6-terra",
      "context_sha256": "6eb134ebc34c8cfae8170f43af357e7a4f1a0869ccb6af4772cd56209bf5b63b",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-velocity-derivation-of-a-smooth-curve",
      "model": "gpt-5.6-terra",
      "context_sha256": "0054c2aee57573dd6e8e5b70fcd30be8d1b6ff01645438e70fa43c690e7742df",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-a-smooth-partition-on-real-space-subordinate-to-two-half-spaces",
      "model": "gpt-5.6-terra",
      "context_sha256": "89875f32ab26019740588f9aca80113e71fb51e6d1ef7737edeffe332bf2d99f",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-the-tangent-bundle-of-the-circle-is-a-cylinder",
      "model": "gpt-5.6-terra",
      "context_sha256": "3d9bba2997cc3cee445f58e0272cbf4057f1e4255c8c4a277c5b59a96ba12187",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-the-tangent-space-of-the-sphere-from-curve-velocities",
      "model": "gpt-5.6-terra",
      "context_sha256": "1a1dffeecba77b5764df791de06e9912a469c87cbd07f0b56e056e21e2c10758",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "lem-chart-bump-at-a-point-with-prescribed-support",
      "model": "gpt-5.6-terra",
      "context_sha256": "7214c17470733fd47910bb8b492c36c387a78820def1e3d38d8be66b84a07988",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "prop-finite-biproducts-of-complexes-are-computed-degreewise",
      "model": "gpt-5.6-terra",
      "context_sha256": "2d8ba31f39d14f45c2d31a0ee44a4621017a650281467b1133ad28cd4090049b",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-gaussian-elimination-multipliers-produce-the-normalised-lu-factors",
      "model": "gpt-5.6-terra",
      "context_sha256": "ac65cb9cd2070e169f6af198a7ee1f6bd463b0270dc60d212e148032c16d9c38",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model",
      "model": "gpt-5.6-terra",
      "context_sha256": "0802d80ce29b1dcf950dd40a32450b910364cc2e1fdb2adf2ae2b38aac3b304e",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure",
      "model": "gpt-5.6-terra",
      "context_sha256": "9b2b95a4496bc0e9daef9cbde60cc28d6b081fc7fb8f6571184ffdfcc6603ed2",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure",
      "model": "gpt-5.6-terra",
      "context_sha256": "a20dcffd74bc6991a12b712dc1d9a6ab5e089ae096b99e048d61dd79a0112573",
      "scope": "run",
      "status": "unadjudicated"
    }
  ]
}
```

---

# Step 8 — group **b**, run `frontier-24`

You are the group Alpha for batches **3**, **8**, **9**: 4 A/B pair(s), 8 page(s), 192 item(s), 12 open rejection(s) over 12 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-24-alpha-b-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-24-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 3 | `direct-matrix-factorisations-lu-cholesky-and-qr` | A | linear-algebra | 168.003 | `matrix-norms-condition-numbers-and-numerical-stability` |
| 3 | `direct-matrix-factorisations-lu-cholesky-and-qr-examples` | B | linear-algebra | 168.004 | `direct-matrix-factorisations-lu-cholesky-and-qr` |
| 8 | `chain-complexes-and-homology` | A | homological-algebra | 365.037 | `abelian-categories`, `exactness-and-the-member-calculus` |
| 8 | `chain-complexes-and-homology-examples` | B | homological-algebra | 365.038 | `chain-complexes-and-homology` |
| 9 | `smooth-partitions-of-unity-and-exhaustions` | A | differential-geometry | 445 | `smooth-manifolds-and-smooth-maps`, `the-exponential-function` |
| 9 | `smooth-partitions-of-unity-and-exhaustions-examples` | B | differential-geometry | 446 | `smooth-partitions-of-unity-and-exhaustions` |
| 9 | `tangent-cotangent-and-the-differential` | A | differential-geometry | 447 | `smooth-manifolds-and-smooth-maps`, `dual-spaces-bilinear-forms-and-inertia`, `the-determinant-of-a-linear-operator`, `the-fundamental-theorems-of-calculus`, `the-inverse-function-theorem-completed` |
| 9 | `tangent-cotangent-and-the-differential-examples` | B | differential-geometry | 448 | `tangent-cotangent-and-the-differential`, `smooth-manifolds-and-smooth-maps` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `direct-matrix-factorisations-lu-cholesky-and-qr` — Direct Matrix Factorisations: LU, Cholesky and QR (24 item(s))

- `def-forward-and-back-substitution-for-triangular-systems` · definition — Forward and backward substitution for triangular linear systems
- `thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost` · theorem — Forward and backward substitution are correct, unique, and quadratic in scalar operations
- `def-normalised-lu-factorisation` · definition — A normalised LU factorisation has a unit lower-triangular L and an upper-triangular U
- `def-ldu-factorisation` · definition — An LDU factorisation has unit lower-triangular L, diagonal D, and unit upper-triangular U
- `thm-normalised-lu-and-ldu-factorisations-are-unique` · theorem — Normalised LU and LDU factorisations are unique when they exist
- `def-block-lu-factorisation` · definition — Block LU factorisation and the associated Schur complement
- `thm-block-lu-factorisation-via-an-invertible-leading-block` · theorem — An invertible leading block yields block LU through its Schur complement
- `thm-unpivoted-unit-lower-lu-exists-iff-leading-principal-minors-are-nonzero` · theorem — An invertible matrix has an unpivoted unit-lower LU factorisation exactly when all leading principal minors are nonzero
- `thm-gaussian-elimination-multipliers-produce-the-normalised-lu-factors` · theorem — When unpivoted elimination runs to completion, the elimination multipliers are the entries of the normalised LU factors
- `def-permutation-matrix-partial-pivoting-and-pivot-growth` · definition — Permutation matrices, partial pivoting, and the pivot-growth factor
- `thm-plu-factorisation-exists-for-every-square-matrix-and-detects-singularity` · theorem — Every real or complex square matrix admits a PLU factorisation, and the first failed pivot marks the singular boundary
- `thm-gaussian-elimination-with-partial-pivoting-computes-a-nearby-factorisation-with-pivot-growth-bound` · theorem — In the standard real floating-point model, computed pivoted LU is a nearby factorisation with a pivot-growth dependent backward bound
- `def-cholesky-factorisation-with-positive-diagonal` · definition — Hermitian positive-definite matrices and Cholesky factorisation A = LL* with positive diagonal
- `thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique` · theorem — A matrix admits a Cholesky factorisation with positive diagonal exactly when it is Hermitian positive definite, and that factor is unique
- `thm-positive-leading-principal-minors-are-equivalent-to-positive-cholesky-pivots` · theorem — For real symmetric matrices, positive leading principal minors are equivalent to positive Cholesky pivots
- `thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost` · theorem — Cholesky solves Hermitian positive-definite systems and has about half the factorisation cost of LU
- `def-householder-reflector` · definition — Householder reflectors in real or complex inner-product spaces
- `def-real-and-complex-givens-transformations` · definition — Real Givens rotations and complex Givens transformations
- `thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries` · theorem — Householder reflectors and Givens transformations are unitary and can annihilate prescribed entries
- `def-full-reduced-and-column-pivoted-computational-qr-factorisations` · definition — Full, reduced, and column-pivoted computational QR factorisations
- `thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts` · theorem — Successive Householder or Givens transformations produce full and reduced QR factorisations with the standard dense operation counts
- `thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model` · theorem — Householder QR is backward stable in the standard real floating-point model
- `thm-exact-column-pivoted-qr-of-a-rank-r-matrix-has-an-invertible-leading-block-and-zero-trailing-block` · theorem — Exact column-pivoted QR of a real or complex rank-r matrix has an invertible leading triangular block and zero trailing block
- `thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number` · theorem — Reduced QR over the reals solves full-column-rank least squares without squaring the condition number

### `direct-matrix-factorisations-lu-cholesky-and-qr-examples` — Direct Matrix Factorisations: LU, Cholesky and QR: Examples and Counterexamples (10 item(s))

- `cex-invertible-matrix-can-fail-unpivoted-lu-at-the-first-pivot` · counterexample — An invertible matrix can fail unpivoted LU at the first pivot
- `ex-plu-factorisation-by-hand` · example — A full PLU factorisation can be computed explicitly by hand
- `ex-ldu-factorisation-and-its-unique-diagonal-pivots` · example — An LDU factorisation isolates the pivot scalars uniquely
- `ex-block-lu-factorisation-and-a-schur-complement-solve` · example — A block LU factorisation turns a linear solve into a Schur-complement solve
- `ex-cholesky-factorisation-and-solve` · example — A Cholesky factorisation solves a small positive-definite system efficiently
- `cex-indefinite-and-semidefinite-matrices-fail-positive-diagonal-cholesky` · counterexample — Indefinite and semidefinite matrices can both fail positive-diagonal Cholesky
- `ex-householder-qr-factorisation-by-hand` · example — A short dense matrix admits a worked Householder QR factorisation
- `ex-givens-qr-on-a-sparse-matrix` · example — Givens QR can zero selected entries of a sparse matrix one at a time
- `ex-reduced-qr-least-squares-versus-normal-equations` · example — Reduced QR avoids the condition-number squaring seen in the normal equations
- `ex-sparse-gaussian-elimination-can-create-fill-in` · example — Sparse Gaussian elimination can create fill-in in the factors

### `chain-complexes-and-homology` — Chain Complexes and Homology (47 item(s))

- `def-chain-complex-in-an-abelian-category` · definition — Chain complex in an abelian category
- `def-cochain-complex-in-an-abelian-category` · definition — Cochain complex in an abelian category
- `def-bounded-bounded-below-and-bounded-above-complex` · definition — Bounded, bounded below, and bounded above complexes
- `def-zero-and-stalk-complex` · definition — Zero complex and stalk complex
- `def-cycle-and-boundary-subobjects-of-a-complex` · definition — Cycle and boundary subobjects of a complex
- `lem-the-boundary-subobject-factors-through-the-cycle-subobject` · lemma — The boundary subobject factors through the cycle subobject
- `def-homology-object-of-a-chain-complex` · definition — Homology object of a chain complex
- `def-cohomology-object-of-a-cochain-complex` · definition — Cohomology object of a cochain complex
- `def-exactness-of-a-complex-at-a-degree-and-acyclic-complex` · definition — Exactness of a complex at a degree and acyclic complexes
- `thm-a-complex-is-exact-at-n-exactly-when-its-nth-homology-is-zero` · theorem — A complex is exact at n exactly when its nth homology is zero
- `prop-an-exact-sequence-is-a-complex-and-its-exactness-agrees` · proposition — An exact sequence is a complex, and its exactness agrees with the earlier notion
- `def-chain-map` · definition — Chain map
- `def-cochain-map` · definition — Cochain map
- `prop-identities-and-composites-of-chain-maps-are-chain-maps` · proposition — Identities and composites of chain maps are chain maps
- `def-category-of-chain-complexes` · definition — The category of chain complexes
- `lem-a-chain-map-carries-cycles-to-cycles-and-boundaries-to-boundaries` · lemma — A chain map carries cycles to cycles and boundaries to boundaries
- `thm-a-chain-map-induces-a-well-defined-map-on-homology` · theorem — A chain map induces a well-defined map on homology
- `prop-homology-respects-identities-and-composition` · proposition — Homology respects identities and composition
- `thm-homology-is-an-additive-functor` · theorem — Homology is an additive functor
- `def-quasi-isomorphism` · definition — Quasi-isomorphism
- `prop-isomorphisms-of-complexes-are-quasi-isomorphisms` · proposition — Isomorphisms of complexes are quasi-isomorphisms
- `prop-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cochain-reindexing-is` · proposition — A chain map is a quasi-isomorphism exactly when its cochain reindexing is
- `def-subcomplex` · definition — Subcomplex
- `lem-the-differential-descends-to-a-quotient-complex` · lemma — The differential descends to a quotient complex
- `def-quotient-complex` · definition — Quotient complex
- `def-short-exact-sequence-of-complexes` · definition — Short exact sequence of complexes
- `lem-the-kernel-of-a-chain-map-is-computed-degreewise` · lemma — The kernel of a chain map is computed degreewise
- `lem-the-cokernel-of-a-chain-map-is-computed-degreewise` · lemma — The cokernel of a chain map is computed degreewise
- `prop-images-and-coimages-of-chain-maps-are-computed-degreewise` · proposition — Images and coimages of chain maps are computed degreewise
- `thm-the-category-of-complexes-in-an-additive-category-is-additive` · theorem — The category of complexes in an additive category is additive
- `thm-the-category-of-complexes-in-an-abelian-category-is-abelian` · theorem — The category of complexes in an abelian category is abelian
- `cor-a-sequence-of-chain-maps-is-exact-exactly-when-it-is-exact-degreewise` · corollary — A sequence of chain maps is exact exactly when it is exact degreewise
- `prop-a-subcomplex-is-the-kernel-of-its-quotient-map` · proposition — A subcomplex is the kernel of its quotient map
- `thm-the-first-isomorphism-theorem-for-complexes` · theorem — The first isomorphism theorem for complexes
- `prop-finite-biproducts-of-complexes-are-computed-degreewise` · proposition — Finite biproducts of complexes are computed degreewise
- `prop-products-and-coproducts-of-complexes-are-degreewise-when-they-exist-and-preserve-differentials` · proposition — Products and coproducts of complexes are degreewise when they exist and preserve differentials
- `prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps` · proposition — An additive functor applies degreewise to complexes and chain maps
- `thm-an-exact-functor-commutes-with-homology` · theorem — An exact functor commutes with homology
- `cor-an-exact-functor-preserves-and-reflects-quasi-isomorphisms-when-conservative` · corollary — An exact functor preserves quasi-isomorphisms and reflects them when it is conservative
- `def-euler-characteristic-of-a-finite-complex-of-finite-rank-free-abelian-groups` · definition — Euler characteristic of a finite complex of finite-rank free abelian groups
- `thm-euler-poincare-formula-for-finite-free-complexes` · theorem — Euler-Poincare formula for finite free complexes
- `fs-any-sequence-of-morphisms-is-a-chain-complex` · false-statement — FALSE: any sequence of morphisms is a chain complex
- `fs-the-boundaries-of-a-complex-are-a-quotient-of-its-cycles` · false-statement — FALSE: the boundaries of a complex are a quotient of its cycles
- `fs-a-chain-map-is-determined-by-its-maps-on-homology` · false-statement — FALSE: a chain map is determined by its maps on homology
- `fs-every-quasi-isomorphism-is-an-isomorphism-of-complexes` · false-statement — FALSE: every quasi-isomorphism is an isomorphism of complexes
- `fs-an-additive-functor-commutes-with-homology` · false-statement — FALSE: an additive functor commutes with homology
- `fs-an-infinite-coproduct-of-complexes-has-homology-equal-to-the-coproduct-of-their-homologies-in-every-abelian-category` · false-statement — FALSE: every infinite coproduct of complexes has homology equal to the coproduct of their homologies

### `chain-complexes-and-homology-examples` — Chain Complexes and Homology — Examples (10 item(s))

- `ex-the-zero-differential-complex-has-homology-equal-to-each-term` · example — A zero-differential complex has homology equal to each term
- `ex-a-two-term-complex-and-its-kernel-and-cokernel-homology` · example — A two-term complex has kernel and cokernel homology
- `ex-the-multiplication-by-m-complex-computes-a-cyclic-group` · example — The multiplication-by-m complex computes a cyclic group
- `ex-an-exact-short-sequence-as-an-acyclic-three-term-complex` · example — An exact short sequence as an acyclic three-term complex
- `ex-a-split-exact-complex-contracts-degree-by-degree` · example — A split exact complex contracts degree by degree
- `ex-a-chain-map-computed-on-cycles-boundaries-and-homology` · example — A chain map computed on cycles, boundaries, and homology
- `cex-a-quasi-isomorphism-that-is-not-an-isomorphism-of-complexes` · counterexample — A quasi-isomorphism that is not an isomorphism of complexes
- `cex-two-distinct-chain-maps-inducing-the-same-homology-map` · counterexample — Two distinct chain maps inducing the same homology map
- `ex-a-subcomplex-and-its-quotient-complex` · example — A subcomplex and its quotient complex
- `ex-euler-poincare-for-a-finite-complex` · example — Euler-Poincare for a finite complex

### `smooth-partitions-of-unity-and-exhaustions` — Smooth Partitions of Unity and Exhaustions (33 item(s))

- `def-the-standard-flat-function` · definition — The standard flat function
- `lem-exponential-decay-dominates-every-inverse-power` · lemma — Exponential decay dominates every inverse power near zero
- `thm-the-standard-flat-function-is-smooth-and-flat-at-zero` · theorem — The standard flat function is smooth and flat at zero
- `def-the-standard-smooth-step-function` · definition — The standard smooth step function
- `lem-smooth-bump-between-concentric-euclidean-balls` · lemma — A smooth bump between concentric Euclidean balls
- `lem-euclidean-bump-for-a-compact-set-inside-an-open-set` · lemma — A Euclidean bump for a compact set inside an open set
- `lem-chart-bump-at-a-point-with-prescribed-support` · lemma — A chart bump at a point with prescribed support
- `lem-manifold-bump-for-a-compact-set-inside-an-open-set` · lemma — A manifold bump for a compact set inside an open set
- `lem-locally-finite-families-of-supports-have-locally-finite-cozero-families` · lemma — Locally finite supports have locally finite cozero sets
- `thm-a-locally-finite-sum-of-smooth-functions-is-smooth` · theorem — A locally finite sum of smooth functions is smooth
- `lem-normalizing-a-locally-finite-positive-smooth-family` · lemma — A locally finite positive smooth family normalizes to a partition of unity
- `def-smooth-partition-of-unity-subordinate-to-an-open-cover` · definition — Smooth partitions of unity subordinate to an open cover
- `lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it` · lemma — Every open cover of a manifold has a countable relatively compact coordinate-ball subcover
- `lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking` · lemma — A countable coordinate-ball cover has a countable locally finite shrinking
- `thm-smooth-partitions-of-unity-exist-on-manifolds` · theorem — Smooth partitions of unity exist on manifolds
- `cor-smooth-partitions-subordinate-to-a-countable-coordinate-cover` · corollary — Smooth partitions subordinate to a countable coordinate cover
- `rem-smooth-and-topological-partition-theorems-have-different-proof-costs` · remark — Smooth and topological partition theorems have different proof costs
- `thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set` · theorem — A smooth Urysohn lemma for a closed set in an open set
- `cor-smooth-functions-separate-points-from-closed-sets` · corollary — Smooth functions separate points from closed sets
- `lem-smooth-extension-from-a-closed-neighbourhood` · lemma — Smooth extension from a closed neighbourhood
- `thm-smooth-functions-defined-locally-can-be-glued-by-a-partition-of-unity` · theorem — Smooth locally defined functions can be glued by a partition of unity
- `def-compact-exhaustion-of-a-manifold` · definition — Compact exhaustions of a manifold
- `lem-every-manifold-has-a-compact-exhaustion` · lemma — Every manifold has a compact exhaustion
- `thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function` · theorem — Every smooth manifold admits a smooth proper exhaustion function
- `cor-every-closed-subset-of-a-manifold-is-the-zero-set-of-a-smooth-nonnegative-function` · corollary — Every closed subset of a manifold is the zero set of a smooth nonnegative function
- `cor-every-open-subset-of-a-manifold-is-the-cozero-set-of-a-smooth-function` · corollary — Every open subset of a manifold is the cozero set of a smooth function
- `prop-every-smooth-manifold-admits-a-countable-smooth-atlas-with-relatively-compact-domains` · proposition — Every smooth manifold admits a countable smooth atlas with relatively compact domains
- `fs-the-piecewise-function-exp-minus-one-over-t-is-analytic-at-zero` · false-statement — The standard flat function is analytic at zero
- `fs-every-continuous-partition-of-unity-on-a-smooth-manifold-is-smooth` · false-statement — Every continuous partition of unity on a smooth manifold is smooth
- `fs-an-arbitrary-pointwise-sum-of-smooth-functions-is-smooth` · false-statement — An arbitrary pointwise sum of smooth functions is smooth
- `fs-every-smooth-function-defined-near-a-closed-set-extends-globally-without-a-cutoff` · false-statement — Every smooth function defined near a closed set extends globally without a cutoff
- `fs-every-smooth-manifold-is-compact` · false-statement — Every smooth manifold is compact
- `fs-a-partition-of-unity-can-glue-manifold-valued-maps-by-taking-weighted-sums` · false-statement — A partition of unity can glue manifold-valued maps by weighted sums

### `smooth-partitions-of-unity-and-exhaustions-examples` — Smooth Partitions of Unity and Exhaustions — Examples (9 item(s))

- `ex-the-standard-compactly-supported-bump-on-the-line` · example — The standard compactly supported bump on the line
- `ex-a-radial-bump-on-euclidean-space` · example — A radial bump on Euclidean space
- `ex-a-two-function-smooth-partition-on-the-circle` · example — A two-function smooth partition on the circle
- `ex-a-smooth-partition-on-real-space-subordinate-to-two-half-spaces` · example — A smooth partition on real space subordinate to two half-spaces
- `ex-a-proper-smooth-exhaustion-of-euclidean-space` · example — A proper smooth exhaustion of Euclidean space
- `ex-a-proper-smooth-exhaustion-of-the-open-unit-ball` · example — A proper smooth exhaustion of the open unit ball
- `ex-a-smooth-function-with-a-prescribed-closed-zero-set` · example — A smooth function with a prescribed closed zero set
- `cex-a-pointwise-finite-smooth-family-whose-sum-is-not-continuous` · counterexample — A pointwise-finite smooth family whose sum is not continuous
- `cex-extension-by-zero-without-support-away-from-the-boundary-is-not-smooth` · counterexample — Extension by zero without support away from the boundary is not smooth

### `tangent-cotangent-and-the-differential` — Tangent Cotangent and the Differential (49 item(s))

- `def-germ-of-a-smooth-function-at-a-point` · definition — The germ of a smooth function at a point
- `lem-equality-near-a-point-is-an-equivalence-relation-on-local-smooth-functions` · lemma — Equality near a point is an equivalence relation on local smooth functions
- `def-the-local-algebra-of-smooth-function-germs` · definition — The local algebra of smooth function germs
- `lem-algebra-operations-on-smooth-germs-are-representative-independent` · lemma — Algebra operations on smooth germs are representative-independent
- `def-derivation-at-a-point-and-tangent-space` · definition — A derivation at a point and the tangent space
- `lem-a-derivation-annihilates-constant-germs` · lemma — A derivation annihilates constant germs
- `def-coordinate-derivations-at-a-point` · definition — Coordinate derivations at a point
- `lem-coordinate-derivations-are-well-defined-derivations` · lemma — Coordinate derivations are well-defined derivations
- `lem-first-order-hadamard-factorization-near-a-point` · lemma — First-order Hadamard factorization near a point
- `thm-coordinate-derivations-form-a-basis-of-the-tangent-space` · theorem — Coordinate derivations form a basis of the tangent space
- `cor-the-tangent-space-of-an-n-manifold-has-dimension-n` · corollary — The tangent space of an n-manifold has dimension n
- `thm-change-of-coordinate-formula-for-tangent-bases` · theorem — Change-of-coordinate formula for tangent bases
- `def-contact-equivalence-of-smooth-curves-at-a-point` · definition — Contact equivalence of smooth curves at a point
- `lem-contact-equivalence-is-chart-independent-and-an-equivalence-relation` · lemma — Contact equivalence is chart-independent and an equivalence relation
- `def-velocity-derivation-of-a-smooth-curve` · definition — The velocity derivation of a smooth curve
- `lem-curve-velocity-depends-only-on-the-contact-class` · lemma — Curve velocity depends only on the contact class
- `thm-curve-contact-classes-are-canonically-isomorphic-to-derivation-tangent-vectors` · theorem — Curve contact classes are canonically isomorphic to derivation tangent vectors
- `cor-every-tangent-vector-is-the-velocity-of-a-smooth-curve` · corollary — Every tangent vector is the velocity of a smooth curve
- `def-differential-of-a-smooth-map` · definition — The differential of a smooth map
- `lem-pullback-of-a-target-germ-by-a-smooth-map-is-a-well-defined-source-germ` · lemma — Pullback of a target germ by a smooth map is a well-defined source germ
- `lem-the-differential-sends-derivations-to-derivations-and-is-linear` · lemma — The differential sends derivations to derivations and is linear
- `thm-coordinate-formula-for-the-differential` · theorem — Coordinate formula for the differential
- `thm-the-differential-sends-curve-velocities-to-composite-curve-velocities` · theorem — The differential sends curve velocities to composite curve velocities
- `thm-chain-rule-for-differentials-of-smooth-maps` · theorem — Chain rule for differentials of smooth maps
- `cor-the-differential-of-a-diffeomorphism-is-an-isomorphism` · corollary — The differential of a diffeomorphism is an isomorphism
- `def-differential-of-a-smooth-real-valued-function` · definition — The differential of a smooth real-valued function
- `thm-coordinate-formula-for-the-differential-of-a-function` · theorem — Coordinate formula for the differential of a function
- `prop-a-smooth-function-with-zero-differential-is-constant-on-each-connected-component` · proposition — A smooth function with zero differential is constant on each connected component
- `def-tangent-bundle-as-a-disjoint-union` · definition — The tangent bundle as a disjoint union
- `def-induced-tangent-bundle-chart` · definition — An induced tangent-bundle chart
- `lem-tangent-bundle-chart-transitions-are-smooth-with-smooth-inverses` · lemma — Tangent-bundle chart transitions are smooth with smooth inverses
- `thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure` · theorem — The tangent bundle has a canonical smooth 2n-manifold structure
- `prop-the-tangent-bundle-projection-and-zero-section-are-smooth` · proposition — The tangent-bundle projection and zero section are smooth
- `def-global-differential-or-tangent-map` · definition — The global differential or tangent map
- `thm-the-global-differential-of-a-smooth-map-is-smooth` · theorem — The global differential of a smooth map is smooth
- `prop-the-tangent-bundle-construction-is-functorial` · proposition — The tangent-bundle construction is functorial
- `def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union` · definition — The cotangent space and cotangent bundle as a disjoint union
- `thm-coordinate-differentials-form-the-dual-cotangent-basis` · theorem — Coordinate differentials form the dual cotangent basis
- `lem-cotangent-coordinate-changes-use-the-inverse-transpose-jacobian` · lemma — Cotangent coordinate changes use the inverse-transpose Jacobian
- `thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure` · theorem — The cotangent bundle has a canonical smooth 2n-manifold structure
- `def-pullback-of-a-cotangent-vector` · definition — Pullback of a cotangent vector
- `prop-cotangent-pullback-is-contravariantly-functorial` · proposition — Cotangent pullback is contravariantly functorial
- `thm-canonical-tangent-and-cotangent-splittings-for-products` · theorem — Canonical tangent and cotangent splittings for products
- `fs-a-tangent-vector-at-p-is-a-vector-whose-tail-is-drawn-at-p` · false-statement — A tangent vector at p is a vector whose tail is drawn at p
- `fs-the-tangent-space-is-defined-only-after-embedding-the-manifold-in-euclidean-space` · false-statement — The tangent space is defined only after embedding the manifold in Euclidean space
- `fs-every-linear-functional-on-smooth-germs-is-a-tangent-vector` · false-statement — Every linear functional on smooth germs is a tangent vector
- `fs-curve-velocities-in-two-charts-have-the-same-coordinate-tuple` · false-statement — Curve velocity coordinates depend on the chart
- `fs-the-differential-of-a-smooth-map-is-its-jacobian-matrix` · false-statement — The differential of a smooth map is its Jacobian matrix
- `fs-the-cotangent-bundle-uses-the-same-transition-matrices-as-the-tangent-bundle` · false-statement — The cotangent bundle uses the same transition matrices as the tangent bundle

### `tangent-cotangent-and-the-differential-examples` — Tangent Cotangent and the Differential — Examples (10 item(s))

- `ex-the-tangent-space-of-euclidean-space` · example — The tangent space of Euclidean space
- `ex-tangent-basis-change-between-cartesian-and-polar-coordinates` · example — Tangent basis change between cartesian and polar coordinates
- `ex-the-differential-of-a-map-between-spheres-in-stereographic-coordinates` · example — The differential of a map between spheres in stereographic coordinates
- `ex-the-tangent-space-of-the-sphere-from-curve-velocities` · example — The tangent space of the sphere from curve velocities
- `ex-the-tangent-bundle-of-the-circle-is-a-cylinder` · example — The tangent bundle of the circle is a cylinder
- `ex-the-tangent-bundle-of-euclidean-space-is-trivial` · example — The tangent bundle of Euclidean space is trivial
- `ex-the-cotangent-pullback-of-a-coordinate-one-form` · example — The cotangent pullback of a coordinate one-form
- `ex-the-differential-of-a-constant-map-is-zero` · example — The differential of a constant map is zero
- `cex-polar-coordinates-do-not-give-a-chart-at-the-origin` · counterexample — Polar coordinates do not give a chart at the origin
- `cex-a-chart-dependent-coordinate-vector-is-not-an-intrinsic-tangent-vector` · counterexample — A chart-dependent coordinate vector is not an intrinsic tangent vector

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
| `def-permutation-matrix-partial-pivoting-and-pivot-growth` | `direct-matrix-factorisations-lu-cholesky-and-qr` | gpt-5.6-terra | `bc999189133c1cc42a1a25d7496c5f93deebb414a160bba360ed84805fdd334e` |
| `def-real-and-complex-givens-transformations` | `direct-matrix-factorisations-lu-cholesky-and-qr` | gpt-5.6-terra | `6eb134ebc34c8cfae8170f43af357e7a4f1a0869ccb6af4772cd56209bf5b63b` |
| `def-velocity-derivation-of-a-smooth-curve` | `tangent-cotangent-and-the-differential` | gpt-5.6-terra | `0054c2aee57573dd6e8e5b70fcd30be8d1b6ff01645438e70fa43c690e7742df` |
| `ex-a-smooth-partition-on-real-space-subordinate-to-two-half-spaces` | `smooth-partitions-of-unity-and-exhaustions-examples` | gpt-5.6-terra | `89875f32ab26019740588f9aca80113e71fb51e6d1ef7737edeffe332bf2d99f` |
| `ex-the-tangent-bundle-of-the-circle-is-a-cylinder` | `tangent-cotangent-and-the-differential-examples` | gpt-5.6-terra | `3d9bba2997cc3cee445f58e0272cbf4057f1e4255c8c4a277c5b59a96ba12187` |
| `ex-the-tangent-space-of-the-sphere-from-curve-velocities` | `tangent-cotangent-and-the-differential-examples` | gpt-5.6-terra | `1a1dffeecba77b5764df791de06e9912a469c87cbd07f0b56e056e21e2c10758` |
| `lem-chart-bump-at-a-point-with-prescribed-support` | `smooth-partitions-of-unity-and-exhaustions` | gpt-5.6-terra | `7214c17470733fd47910bb8b492c36c387a78820def1e3d38d8be66b84a07988` |
| `prop-finite-biproducts-of-complexes-are-computed-degreewise` | `chain-complexes-and-homology` | gpt-5.6-terra | `2d8ba31f39d14f45c2d31a0ee44a4621017a650281467b1133ad28cd4090049b` |
| `thm-gaussian-elimination-multipliers-produce-the-normalised-lu-factors` | `direct-matrix-factorisations-lu-cholesky-and-qr` | gpt-5.6-terra | `ac65cb9cd2070e169f6af198a7ee1f6bd463b0270dc60d212e148032c16d9c38` |
| `thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model` | `direct-matrix-factorisations-lu-cholesky-and-qr` | gpt-5.6-terra | `0802d80ce29b1dcf950dd40a32450b910364cc2e1fdb2adf2ae2b38aac3b304e` |
| `thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure` | `tangent-cotangent-and-the-differential` | gpt-5.6-terra | `9b2b95a4496bc0e9daef9cbde60cc28d6b081fc7fb8f6571184ffdfcc6603ed2` |
| `thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure` | `tangent-cotangent-and-the-differential` | gpt-5.6-terra | `a20dcffd74bc6991a12b712dc1d9a6ab5e089ae096b99e048d61dd79a0112573` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — exact closure recovery, `frontier-24`

Read `research/frontier-24-judge-closure.json`,
`research/frontier-24-judge.jsonl`,
`research/frontier-24-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/frontier-24-step8-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/frontier-24-step8-cross-group.jsonl`, never repair that item.

Write `research/frontier-24-alpha-step8-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.
