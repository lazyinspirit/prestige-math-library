# Frozen-current owner recertification evidence proposal

Run: frontier-41-ha-dt-29
Item: lem-smoothing-genuine-immersion-families
All source bytes are unchanged from the actual 2026-10-06T04:22:18.697Z certificate. Only current contract/composite carriers changed. Existing full root proof review remains authoritative; fresh actual checks and frozen complete context/contract bindings are local evidence, not a new native reading or independent audit.

item_file_sha256: 2b78a8de71c3cf7084738e5d98b69d7eab85ec2230aee4337fbce92d423a6151
manifest_sha256: 0492adf4c8c3fc32a581df9a3186791b855f6b3186245c31b805423d7db666f3
contract_sha256: d161b4e84daa092fbe0496eb303bd44f2fee3725b35720ca72c3b0c8ef7d9402

```json
{
  "version": 1,
  "run": "frontier-41-ha-dt-29",
  "step": 5,
  "id": "lem-smoothing-genuine-immersion-families",
  "page": "formal-immersions-and-the-smale-hirsch-theorem",
  "batch": "17",
  "evidence_class": "current-owner-recertification-proposal",
  "owner": true,
  "owner_identity": "/root",
  "reason": "the current local foundation proofs and their actual direct uses are accepted",
  "current_carriers": {
    "guard_sha256": "a5322a62d2b01bcd9c21651450deb63fb7002b4b5928dc2ad557bb43ca0c0296",
    "judge_sha256": "2b78a8de71c3cf7084738e5d98b69d7eab85ec2230aee4337fbce92d423a6151",
    "item_file_sha256": "2b78a8de71c3cf7084738e5d98b69d7eab85ec2230aee4337fbce92d423a6151",
    "manifest_sha256": "0492adf4c8c3fc32a581df9a3186791b855f6b3186245c31b805423d7db666f3",
    "contract_sha256": "d161b4e84daa092fbe0496eb303bd44f2fee3725b35720ca72c3b0c8ef7d9402",
    "step5_subject_sha256": "a0761fe90dadf03d6ae307f13f88b3696646bdd4c35580d1b9fd562e217c950c"
  },
  "current_manifest_entry": {
    "__step6_page_id": "formal-immersions-and-the-smale-hirsch-theorem",
    "dependency_level": 4,
    "deps": [
      "def-compact-parameter-pair",
      "def-space-of-immersions-and-space-of-formal-immersions",
      "def-immersion-submersion-and-constant-rank-map",
      "def-regular-homotopy-of-immersions",
      "def-smooth-map-between-manifolds-with-boundary",
      "lem-joint-jet-continuity-and-the-weak-smooth-topology",
      "def-weak-compact-open-smooth-topology-on-mapping-spaces",
      "thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space",
      "thm-euclidean-tubular-neighbourhood-theorem",
      "def-normal-addition-map-for-a-euclidean-submanifold",
      "def-mollifier-family-generated-by-a-unit-mass-smooth-bump",
      "thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign",
      "thm-differentiation-under-the-integral-sign",
      "thm-heine-cantor-metric",
      "thm-extreme-value-metric",
      "thm-smooth-partitions-of-unity-exist-on-manifolds",
      "def-compact-space",
      "def-countable-choice",
      "lem-manifold-bump-for-a-compact-set-inside-an-open-set"
    ],
    "id": "lem-smoothing-genuine-immersion-families",
    "justified_by": [],
    "kind": "lemma",
    "provenance": {
      "proof": "ai-altered",
      "statement": "literature-derived"
    },
    "sources": {
      "references": [
        {
          "title": "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Theorem 6.24 and the approximation of maps by mollification, pp. 139–141",
          "url": "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
        },
        {
          "title": "John Francis, The h-Principle, Lecture 3: Immersion theory (notes by O. Gwilliam), PDF pp. 1–4: Question 1.2 and the compact-open C^infinity topology on Imm(M,N)",
          "url": "https://sites.math.northwestern.edu/jnf960/classes/hprin/3immersions.pdf"
        },
        {
          "title": "Morris W. Hirsch, Differential Topology, Ch. 2 §1–§2, pp. 34–38 (the C^infinity topology and smooth approximation of maps)",
          "url": "https://people.dm.unipi.it/benedett/HIRSCH.pdf"
        }
      ]
    },
    "statement": "Assume $\\mathrm{AC}_\\omega$. Let $M$ be compact, $N$ smooth, and $(P,Q)$ a compact parameter pair. A continuous family $\\Phi:P\\to\\operatorname{Imm}(M,N)$ whose adjoint is smooth on $W\\times M$ for some open $W\\supseteq Q$ is homotopic, through genuine families and relative to $Q$, to a smooth family agreeing with it on a parameter neighbourhood of $Q$. Every continuous path in $\\operatorname{Imm}(M,N)$ is homotopic relative to its endpoints to a smooth path. Consequently its path components are regular homotopy classes.",
    "strategy": "Ambient construction: embed N in Euclidean space with a tubular retraction, extend the family constantly along a retraction of a neighbourhood of the parameter manifold, average against a mollifier in the parameter variable while tracking the first x-derivatives, and use the uniform positive determinant margin on the compact product to keep every slice an immersion; near the relative set the original smooth data are kept.",
    "title": "Smoothing continuous families of genuine immersions"
  },
  "source_unchanged_since_previous_certificate": true,
  "metadata_delta_since_previous_certificate": [
    "contract_sha256",
    "step5_subject_sha256"
  ],
  "actual_existing_root_review": {
    "path": "research/frontier-41-ha-dt-29-owner-stage3-carried-current-proof-review.md",
    "sha256": "8277e59b1df97093879dfa0bece91c6d98cba3601931aef95bc0df3af2dc7838"
  },
  "current_context": {
    "path": "research/frontier-41-ha-dt-29-owner-final-carried-checks-20261006T045332Z/lem-smoothing-genuine-immersion-families-current-context.json",
    "sha256": "b70833ad75360ad4271c4d948fa02d62d6708d7b20cd08139f2ea175df6c821e"
  },
  "proof_checks": {
    "precheck": {
      "path": "research/frontier-41-ha-dt-29-owner-final-carried-checks-20261006T045332Z/lem-smoothing-genuine-immersion-families-precheck.json",
      "sha256": "9bfc7120edd9b5b6a382eba87e3fbb554e3b9f8390c39dac99b28e82ae7f23ed"
    },
    "rendercheck": {
      "path": "research/frontier-41-ha-dt-29-owner-final-carried-checks-20261006T045332Z/lem-smoothing-genuine-immersion-families-rendercheck.json",
      "sha256": "a1f81ce5ffcacaf29782799005fe33fceae384e92c8940db972f325a65f4baa8"
    },
    "strict-contract": {
      "path": "research/frontier-41-ha-dt-29-owner-final-carried-checks-20261006T045332Z/lem-smoothing-genuine-immersion-families-strict-contract.json",
      "sha256": "553346cfafa696c5e85d4b099889035e06faa4caf20c8e9740aea1534e42ab61"
    }
  },
  "definition_contract_applicability": null,
  "actual_prior_native_origin": "alpha-5a-batch-17.result.json",
  "original_creation_step": 3,
  "provenance": {
    "id": "lem-smoothing-genuine-immersion-families",
    "page": "formal-immersions-and-the-smale-hirsch-theorem",
    "batch": "17",
    "dependencies": [
      "def-compact-parameter-pair",
      "def-compact-space",
      "def-countable-choice",
      "def-immersion-submersion-and-constant-rank-map",
      "def-mollifier-family-generated-by-a-unit-mass-smooth-bump",
      "def-normal-addition-map-for-a-euclidean-submanifold",
      "def-regular-homotopy-of-immersions",
      "def-smooth-map-between-manifolds-with-boundary",
      "def-space-of-immersions-and-space-of-formal-immersions",
      "def-weak-compact-open-smooth-topology-on-mapping-spaces",
      "lem-joint-jet-continuity-and-the-weak-smooth-topology",
      "thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign",
      "thm-differentiation-under-the-integral-sign",
      "thm-euclidean-tubular-neighbourhood-theorem",
      "thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space",
      "thm-extreme-value-metric",
      "thm-heine-cantor-metric",
      "thm-smooth-partitions-of-unity-exist-on-manifolds"
    ],
    "sha256": "64c7f14bed32d4e4c496ca9e8546c6157955beb2bbd546af1cec476640ceb09c",
    "author_result": "step3b-pair-formal-immersions-and-the-smale-hirsch-theorem-312f589048b7319f",
    "owner_recertification": {
      "sha256": "036d6a0f6921a119d38f7983ea237199baf695cf513011926e3a709518dd6b85",
      "at": "2026-10-05T20:07:08.273Z"
    },
    "run": "frontier-41-ha-dt-29",
    "step": 3
  },
  "review": {
    "current_item_and_contract_checked": true,
    "current_manifest_matches_item": true,
    "no_unresolved_defect": true,
    "current_proof_or_definition_and_actual_uses_already_accepted_by_root": true,
    "suppliers": [
      "def-compact-parameter-pair",
      "def-compact-space",
      "def-countable-choice",
      "def-immersion-submersion-and-constant-rank-map",
      "def-mollifier-family-generated-by-a-unit-mass-smooth-bump",
      "def-normal-addition-map-for-a-euclidean-submanifold",
      "def-regular-homotopy-of-immersions",
      "def-smooth-map-between-manifolds-with-boundary",
      "def-space-of-immersions-and-space-of-formal-immersions",
      "def-weak-compact-open-smooth-topology-on-mapping-spaces",
      "lem-joint-jet-continuity-and-the-weak-smooth-topology",
      "lem-manifold-bump-for-a-compact-set-inside-an-open-set",
      "thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign",
      "thm-differentiation-under-the-integral-sign",
      "thm-euclidean-tubular-neighbourhood-theorem",
      "thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space",
      "thm-extreme-value-metric",
      "thm-heine-cantor-metric",
      "thm-smooth-partitions-of-unity-exist-on-manifolds"
    ],
    "direct_consumers": [
      "def-regular-homotopy-of-immersions",
      "lem-parametric-immersion-extension-on-a-disk",
      "lem-smooth-families-and-path-components-in-the-weak-topology",
      "thm-smale-hirsch-for-open-source-manifolds"
    ],
    "context_items": [
      {
        "id": "def-compact-parameter-pair",
        "guard_sha256": "e098d4aefb498df5d583afe349f893ef50f904ba66578055ba3ae8337bca2794"
      },
      {
        "id": "def-compact-space",
        "guard_sha256": "ed5cac07dd4abff63339ef539e4a9a848ed2a03db8c27a592f1024d8e329e8ee"
      },
      {
        "id": "def-countable-choice",
        "guard_sha256": "281f4262a3869251a4a3f7c631089b957b3aa4b715e0a8d22844338ea5c1c653"
      },
      {
        "id": "def-immersion-submersion-and-constant-rank-map",
        "guard_sha256": "fcb33b0ae5226faf12b3f7c93a4967f7c85487f1f2898e7b98c72dd70182a268"
      },
      {
        "id": "def-mollifier-family-generated-by-a-unit-mass-smooth-bump",
        "guard_sha256": "53f4277064468a87d6a113064103c29eb0a9d3da45beb1a788885afab1cd4261"
      },
      {
        "id": "def-normal-addition-map-for-a-euclidean-submanifold",
        "guard_sha256": "0654edf987ee8d5625c9a1df09f80afee278f04863221246fb70dc74cd0da8c1"
      },
      {
        "id": "def-regular-homotopy-of-immersions",
        "guard_sha256": "a9cca49d99ebb97131a45d32e59897df798c2000aa0dbcab3146ed78af1e5a44"
      },
      {
        "id": "def-smooth-map-between-manifolds-with-boundary",
        "guard_sha256": "e84f3bbd217071b69fb6d91cbc19dffefef1f71ddb358d7f6bcaa519195c93b6"
      },
      {
        "id": "def-space-of-immersions-and-space-of-formal-immersions",
        "guard_sha256": "85ca8060acc8aa98c38f484796b93cf14e49986324538eb2ec9d712ac6848892"
      },
      {
        "id": "def-weak-compact-open-smooth-topology-on-mapping-spaces",
        "guard_sha256": "839ef7b345bb6e90254fb3e683f27bd53fd0a1a93920d71de29de6668fb797f5"
      },
      {
        "id": "lem-joint-jet-continuity-and-the-weak-smooth-topology",
        "guard_sha256": "5432d9a1d76a4303545e98c24f766f0b511bd623bf36e9b98bc4e59214450423"
      },
      {
        "id": "lem-manifold-bump-for-a-compact-set-inside-an-open-set",
        "guard_sha256": "a4f77a39fa5f99ea8a787ce3b7937e5f1b3e768ac51b088759979468d009f924"
      },
      {
        "id": "lem-parametric-immersion-extension-on-a-disk",
        "guard_sha256": "2e600fa99a2f89bfa4536103f1de25042217f3416cbabaf8435604e37fa433d1"
      },
      {
        "id": "lem-smooth-families-and-path-components-in-the-weak-topology",
        "guard_sha256": "2a16c0651d62f65f05e182ea166ac3ac1448690386f4b6409a11de7ae8f96d25"
      },
      {
        "id": "thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign",
        "guard_sha256": "006f5ef3395573d209af47e388ffa0f13e4f564fb12a6ff0f44b856926375bdc"
      },
      {
        "id": "thm-differentiation-under-the-integral-sign",
        "guard_sha256": "76bd8d77a19f08fee2f1214f7ede3ddbac6292feb6c0289b434c831c222e431d"
      },
      {
        "id": "thm-euclidean-tubular-neighbourhood-theorem",
        "guard_sha256": "510630d2eacc06dd629abacf324a7a1e5ce24cc8c69429b7bbfe000a0c42d6d8"
      },
      {
        "id": "thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space",
        "guard_sha256": "7776e79282dea5a55b8429c7b6223fbc46df6b2f4000600d174fe5b76859dd34"
      },
      {
        "id": "thm-extreme-value-metric",
        "guard_sha256": "d7fc866c121570263d4b762b3c7342c637e14d9d6cd6595f106ceb3624ac537f"
      },
      {
        "id": "thm-heine-cantor-metric",
        "guard_sha256": "63727dfa8e651bfa5251b69b754e96a094fa68f8e4287af197ed15c297c882c9"
      },
      {
        "id": "thm-smale-hirsch-for-open-source-manifolds",
        "guard_sha256": "6c2eb95d28fcaffdf0dcd57007935b0f5d382e86dd1deed4c8701935c287ae6e"
      },
      {
        "id": "thm-smooth-partitions-of-unity-exist-on-manifolds",
        "guard_sha256": "1f20b2688274eba2a2db81910193f1caba93979082eebcae79c6b19cef15b9ae"
      }
    ]
  },
  "historical_manifest_delta_unknown": true,
  "native_current_reading_or_authorship_claim": false,
  "owner_receipt_or_certification_recorded": false
}
```
