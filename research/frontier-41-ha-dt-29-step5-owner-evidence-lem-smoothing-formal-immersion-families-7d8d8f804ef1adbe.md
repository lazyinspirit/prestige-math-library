# Owner certification evidence proposal

Run: frontier-41-ha-dt-29
Item: lem-smoothing-formal-immersion-families
Proposal only: actual root review and real focused local checks; no owner receipt or whole-stage certification has been recorded.

item_file_sha256: caca8233cb0ebe12924d35c6939194b49d617c921ea4683a379138479fa8ceb8
manifest_sha256: 05ca114902f57bf10dd04f0863b7ba03f94b219a85122dec346bd066c707fbfe
contract_sha256: 6a72e1ebded36103d7ae516f48079750a6687612d2b149df1d0c9632bddaab46

```step5-manifest-repair
{
  "version": 1,
  "policy": "step5-manifest-repair-evidence-v1",
  "run": "frontier-41-ha-dt-29",
  "step": 5,
  "id": "lem-smoothing-formal-immersion-families",
  "page": "formal-immersions-and-the-smale-hirsch-theorem",
  "batch": "17",
  "repair_kind": "current-proof-manifest-review",
  "baseline_manifest_sha256": "1a65e0268983ea345bdf883faf16b61bf972e58eef83584f170aee386eb74301",
  "current_manifest_sha256": "05ca114902f57bf10dd04f0863b7ba03f94b219a85122dec346bd066c707fbfe",
  "current_manifest_entry": {
    "__step6_page_id": "formal-immersions-and-the-smale-hirsch-theorem",
    "dependency_level": 3,
    "deps": [
      "def-compact-parameter-pair",
      "def-formal-immersion-between-smooth-manifolds",
      "def-space-of-immersions-and-space-of-formal-immersions",
      "lem-joint-jet-continuity-and-the-weak-smooth-topology",
      "def-weak-compact-open-smooth-topology-on-mapping-spaces",
      "def-vector-bundle-map-over-a-smooth-base-map",
      "def-pullback-vector-bundle-as-a-fibre-product",
      "thm-the-pullback-fibre-product-is-a-smooth-vector-bundle",
      "def-dual-and-hom-vector-bundles",
      "thm-relative-whitney-approximation-for-manifold-valued-maps",
      "def-countable-choice",
      "thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space",
      "thm-euclidean-tubular-neighbourhood-theorem",
      "def-mollifier-family-generated-by-a-unit-mass-smooth-bump",
      "thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign",
      "thm-differentiation-under-the-integral-sign",
      "thm-smooth-partitions-of-unity-exist-on-manifolds",
      "thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric",
      "lem-manifold-bump-for-a-compact-set-inside-an-open-set",
      "thm-extreme-value-metric",
      "thm-heine-cantor-metric"
    ],
    "id": "lem-smoothing-formal-immersion-families",
    "justified_by": [],
    "kind": "lemma",
    "provenance": {
      "proof": "ai-altered",
      "statement": "literature-derived"
    },
    "sources": {
      "references": [
        {
          "title": "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Theorems 6.21 and 6.26, pp. 136–141 (relative Whitney approximation)",
          "url": "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
        },
        {
          "title": "John Francis, The h-Principle, Lectures 5 & 6: The Hirsch–Smale theorem (notes by C. Elliott), PDF pp. 1–4: §1 (smooth families of formal immersions)",
          "url": "https://sites.math.northwestern.edu/jnf960/classes/hprin/5%266smalehirsch.pdf"
        }
      ]
    },
    "statement": "Assume $\\mathrm{AC}_\\omega$. Let $M,N$ be smooth manifolds, $(P,Q)$ a compact parameter pair, and $\\Phi:P\\to\\operatorname{FImm}(M,N)$ a continuous family whose adjoint formal data are smooth on $W\\times M$ for some open $W\\supseteq Q$ in $P$. Then $\\Phi$ is homotopic relative to $Q$ to a smooth family, through formal immersions, and the homotopy is fixed on an open parameter neighbourhood of $Q$. In particular this applies when the family is smoothly holonomic on $Q$, as in [[def-compact-parameter-pair]]. Compactness of $M$ is not required.",
    "strategy": "Encode formal-immersion data as a continuous map into the open manifold of fibrewise injective homomorphisms over M x N, apply relative Whitney approximation on P x M to a closed set where the data are holonomic, and read the homotopy back as a homotopy of families using joint jet continuity.",
    "title": "Smoothing continuous families of formal immersions"
  },
  "current_carriers": {
    "guard_sha256": "ccb81e52ba6f503d2e39aa2f744d580e3cb054ae749a83263e741126894e1d35",
    "judge_sha256": "caca8233cb0ebe12924d35c6939194b49d617c921ea4683a379138479fa8ceb8",
    "item_file_sha256": "caca8233cb0ebe12924d35c6939194b49d617c921ea4683a379138479fa8ceb8",
    "manifest_sha256": "05ca114902f57bf10dd04f0863b7ba03f94b219a85122dec346bd066c707fbfe",
    "contract_sha256": "6a72e1ebded36103d7ae516f48079750a6687612d2b149df1d0c9632bddaab46",
    "step5_subject_sha256": "45eedab2bce3d6e4ceeb940166df194eafd0c689ffb0c83a727fa09aab57c49e"
  },
  "historical_delta_unknown": true,
  "owner_authorization": {
    "owner": true,
    "owner_identity": "/root",
    "reason": "the current local foundation proofs and their actual direct uses are accepted"
  },
  "sources": [
    {
      "path": "research/frontier-41-ha-dt-29-owner-stage3-carried-current-proof-review.md",
      "sha256": "8277e59b1df97093879dfa0bece91c6d98cba3601931aef95bc0df3af2dc7838"
    }
  ],
  "proof_checks": {
    "precheck": {
      "path": "research/frontier-41-ha-dt-29-owner-stage3-current-checks-20261006T033236Z/lem-smoothing-formal-immersion-families-precheck.json",
      "sha256": "c683a1d3cc04fa8f830c1d0f2f882d7a63589a4f5ec3b87fb4aa805f1b5b77fc"
    },
    "rendercheck": {
      "path": "research/frontier-41-ha-dt-29-owner-stage3-current-checks-20261006T033236Z/lem-smoothing-formal-immersion-families-rendercheck.json",
      "sha256": "cd8c07720404e744f2d19131a64272d1c30a971548ee6fde9d50ea009728e09c"
    },
    "strict-contract": {
      "path": "research/frontier-41-ha-dt-29-owner-stage3-current-checks-20261006T033236Z/lem-smoothing-formal-immersion-families-strict-contract.json",
      "sha256": "f5d8240014bd3e6f02d502d04aa807404cbb8ec36176dd027ea38840d4e4f49d"
    }
  },
  "review": {
    "current_item_and_contract_checked": true,
    "current_manifest_matches_item": true,
    "no_unresolved_defect": true,
    "direct_consumers": [
      "lem-parametric-immersion-extension-on-a-disk",
      "lem-smooth-families-and-path-components-in-the-weak-topology",
      "thm-smale-hirsch-for-open-source-manifolds"
    ],
    "current_proof_suppliers_and_direct_consumers_checked": true,
    "current_proof_checked": true,
    "current_suppliers_checked": true,
    "current_direct_consumers_checked": true,
    "suppliers": [
      "def-compact-parameter-pair",
      "def-countable-choice",
      "def-dual-and-hom-vector-bundles",
      "def-formal-immersion-between-smooth-manifolds",
      "def-mollifier-family-generated-by-a-unit-mass-smooth-bump",
      "def-pullback-vector-bundle-as-a-fibre-product",
      "def-space-of-immersions-and-space-of-formal-immersions",
      "def-vector-bundle-map-over-a-smooth-base-map",
      "def-weak-compact-open-smooth-topology-on-mapping-spaces",
      "lem-joint-jet-continuity-and-the-weak-smooth-topology",
      "lem-manifold-bump-for-a-compact-set-inside-an-open-set",
      "thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign",
      "thm-differentiation-under-the-integral-sign",
      "thm-euclidean-tubular-neighbourhood-theorem",
      "thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space",
      "thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric",
      "thm-extreme-value-metric",
      "thm-heine-cantor-metric",
      "thm-relative-whitney-approximation-for-manifold-valued-maps",
      "thm-smooth-partitions-of-unity-exist-on-manifolds",
      "thm-the-pullback-fibre-product-is-a-smooth-vector-bundle"
    ],
    "context_items": [
      {
        "id": "def-compact-parameter-pair",
        "guard_sha256": "e098d4aefb498df5d583afe349f893ef50f904ba66578055ba3ae8337bca2794"
      },
      {
        "id": "def-countable-choice",
        "guard_sha256": "281f4262a3869251a4a3f7c631089b957b3aa4b715e0a8d22844338ea5c1c653"
      },
      {
        "id": "def-dual-and-hom-vector-bundles",
        "guard_sha256": "0aff955c22c74c249f98e7627095773fb27ce897cb4cb833b096d51e5bce8b42"
      },
      {
        "id": "def-formal-immersion-between-smooth-manifolds",
        "guard_sha256": "d323a2dcfc89246f4deb1f371fa86b24feae78d846d4a8b0a6d96d70f27dfe09"
      },
      {
        "id": "def-mollifier-family-generated-by-a-unit-mass-smooth-bump",
        "guard_sha256": "53f4277064468a87d6a113064103c29eb0a9d3da45beb1a788885afab1cd4261"
      },
      {
        "id": "def-pullback-vector-bundle-as-a-fibre-product",
        "guard_sha256": "ec9a95995b25a16db7e17aa765c6dfb413054b3c3e2f73da732c0921d877ef22"
      },
      {
        "id": "def-space-of-immersions-and-space-of-formal-immersions",
        "guard_sha256": "85ca8060acc8aa98c38f484796b93cf14e49986324538eb2ec9d712ac6848892"
      },
      {
        "id": "def-vector-bundle-map-over-a-smooth-base-map",
        "guard_sha256": "2e27ee2d82ac6a8c23283fc0ac4ab5505d164ac15c0cb583b772e06000d4b393"
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
        "guard_sha256": "ea1f6c68728b2be1d0222cc2b0506b313f6b6e3e609ef73faadf01c94f74beeb"
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
        "id": "thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric",
        "guard_sha256": "1bd292eb48040af906cbcdd17014f133dbc243f5d490d7ee4b854bc714f2188c"
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
        "id": "thm-relative-whitney-approximation-for-manifold-valued-maps",
        "guard_sha256": "d38e4cc12f392c3e94f422b2a8c754525f3ecc44558a7e664d07b3a7025189b0"
      },
      {
        "id": "thm-smale-hirsch-for-open-source-manifolds",
        "guard_sha256": "6c2eb95d28fcaffdf0dcd57007935b0f5d382e86dd1deed4c8701935c287ae6e"
      },
      {
        "id": "thm-smooth-partitions-of-unity-exist-on-manifolds",
        "guard_sha256": "1f20b2688274eba2a2db81910193f1caba93979082eebcae79c6b19cef15b9ae"
      },
      {
        "id": "thm-the-pullback-fibre-product-is-a-smooth-vector-bundle",
        "guard_sha256": "45c2d6cca142eaa607d1d3f31f3e7110d714a7bf845b854264547f24d79567e4"
      }
    ]
  }
}
```
