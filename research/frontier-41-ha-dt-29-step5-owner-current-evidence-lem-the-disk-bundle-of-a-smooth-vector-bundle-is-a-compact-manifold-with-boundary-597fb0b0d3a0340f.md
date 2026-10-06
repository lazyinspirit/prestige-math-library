# Frozen-current owner recertification evidence proposal

Run: frontier-41-ha-dt-29
Item: lem-the-disk-bundle-of-a-smooth-vector-bundle-is-a-compact-manifold-with-boundary
All source bytes are unchanged from the actual 2026-10-06T04:22:18.697Z certificate. Only current contract/composite carriers changed. Existing full root proof review remains authoritative; fresh actual checks and frozen complete context/contract bindings are local evidence, not a new native reading or independent audit.

item_file_sha256: 2a13c6c4fdbd0139ea8ec19119ae01fd55aa05e33e3e34b4c858dc9ecdb43bb1
manifest_sha256: d6803ef4aa03144b291bb442e739ef3674033ae1f6fbede4e300d0b8b1c74537
contract_sha256: a048dd4bc14a537d752f229614eeeacc08f48a1bf456dcdd536e521bc4cb9873

```json
{
  "version": 1,
  "run": "frontier-41-ha-dt-29",
  "step": 5,
  "id": "lem-the-disk-bundle-of-a-smooth-vector-bundle-is-a-compact-manifold-with-boundary",
  "page": "formal-immersions-and-the-smale-hirsch-theorem",
  "batch": "17",
  "evidence_class": "current-owner-recertification-proposal",
  "owner": true,
  "owner_identity": "/root",
  "reason": "the current local foundation proofs and their actual direct uses are accepted",
  "current_carriers": {
    "guard_sha256": "bd6690a84dba4e818ce3ea549585c87aefdf1514894d41db05969190847de12f",
    "judge_sha256": "2a13c6c4fdbd0139ea8ec19119ae01fd55aa05e33e3e34b4c858dc9ecdb43bb1",
    "item_file_sha256": "2a13c6c4fdbd0139ea8ec19119ae01fd55aa05e33e3e34b4c858dc9ecdb43bb1",
    "manifest_sha256": "d6803ef4aa03144b291bb442e739ef3674033ae1f6fbede4e300d0b8b1c74537",
    "contract_sha256": "a048dd4bc14a537d752f229614eeeacc08f48a1bf456dcdd536e521bc4cb9873",
    "step5_subject_sha256": "3fc0645cbe3d9d7f973c85563dde5604a82619b6f44ede65b4e8da2047d51be2"
  },
  "current_manifest_entry": {
    "__step6_page_id": "formal-immersions-and-the-smale-hirsch-theorem",
    "dependency_level": 1,
    "deps": [
      "def-disk-sphere-and-thom-space-of-a-metric-vector-bundle",
      "def-smooth-vector-bundle-rank-fibre-and-trivial-bundle",
      "def-smooth-fibre-bundle-and-local-trivialization",
      "def-cholesky-factorisation-with-positive-diagonal",
      "def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary",
      "lem-regular-sublevels-are-compact-manifolds-with-boundary",
      "thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold",
      "def-embedded-smooth-submanifold-with-boundary",
      "def-compact-space",
      "lem-coordinate-balls-form-a-basis-of-a-topological-manifold",
      "lem-compactness-of-a-subspace-is-ambient",
      "thm-extreme-value-metric",
      "thm-heine-borel-rn",
      "cor-local-normal-form-for-submersions"
    ],
    "id": "lem-the-disk-bundle-of-a-smooth-vector-bundle-is-a-compact-manifold-with-boundary",
    "justified_by": [],
    "kind": "lemma",
    "provenance": {
      "proof": "ai-altered",
      "statement": "literature-derived"
    },
    "sources": {
      "references": [
        {
          "title": "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Ch. 7 §2 “Obstructions to the existence of embeddings and immersions, the Hirsch–Smale theorem”, printed pp. 226–232 (Theorem 7.5, Corollary 7.6)",
          "url": "http://math.stanford.edu/~ralph/bookR4.pdf"
        },
        {
          "title": "John Francis, The h-Principle, Lectures 5 & 6: The Hirsch–Smale theorem (notes by C. Elliott), PDF pp. 1–4: Lemma 1.1, Corollary 1.2, Lemma 1.3 (Hirsch–Smale Fibration Lemma, n > k), Theorems 1.5 and 1.7, Lemma 1.6, Lemma 1.9",
          "url": "https://sites.math.northwestern.edu/jnf960/classes/hprin/5%266smalehirsch.pdf"
        }
      ]
    },
    "statement": "Let $E\\to M$ be a smooth rank-$q$ vector bundle over a boundaryless smooth manifold, with a supplied smooth bundle metric $h$. The closed disk bundle $D_h(E)=\\{\\|v\\|_h\\le1\\}$ is a smooth manifold with boundary of dimension $\\dim M+q$, with boundary $S_h(E)=\\{\\|v\\|_h=1\\}$ and interior $\\{\\|v\\|_h<1\\}$. The projection and zero section are smooth. If $M$ is compact, the disk bundle and its boundary are compact. For $q=0$ the disk bundle is $M$ and the boundary is empty; when $\\dim M+q\\ge1$ the boundary is a closed embedded smooth manifold of dimension $\\dim M+q-1$.",
    "strategy": "Local trivializations and the Cholesky square root of the smooth Gram matrix straighten the metric disk to the standard disk in each chart; the transition maps are smooth, the boundary is the sphere bundle, and compactness follows from a finite trivializing cover of a compact base.",
    "title": "Disk bundles over compact bases are compact manifolds with boundary"
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
    "path": "research/frontier-41-ha-dt-29-owner-final-carried-checks-20261006T045332Z/lem-the-disk-bundle-of-a-smooth-vector-bundle-is-a-compact-manifold-with-boundary-current-context.json",
    "sha256": "147f551407ffdfb954b73f36e06e3e630cd36a1d19c5cf7a1d807e578e5eb753"
  },
  "proof_checks": {
    "precheck": {
      "path": "research/frontier-41-ha-dt-29-owner-final-carried-checks-20261006T045332Z/lem-the-disk-bundle-of-a-smooth-vector-bundle-is-a-compact-manifold-with-boundary-precheck.json",
      "sha256": "1a514840bbc35e0e6d3392923547b7dd6fbbcb9ccc5d054fa0729b8b59becf9e"
    },
    "rendercheck": {
      "path": "research/frontier-41-ha-dt-29-owner-final-carried-checks-20261006T045332Z/lem-the-disk-bundle-of-a-smooth-vector-bundle-is-a-compact-manifold-with-boundary-rendercheck.json",
      "sha256": "62987992225a7d152b53443937fcff1894f44bc5955f703b66f8cf9bfae239e5"
    },
    "strict-contract": {
      "path": "research/frontier-41-ha-dt-29-owner-final-carried-checks-20261006T045332Z/lem-the-disk-bundle-of-a-smooth-vector-bundle-is-a-compact-manifold-with-boundary-strict-contract.json",
      "sha256": "b13e51890cae5e8837411f34223e9f4b5dcbbc6c78beb5a10ad997af22b82c4d"
    }
  },
  "definition_contract_applicability": null,
  "actual_prior_native_origin": "alpha-5a-batch-17.result.json",
  "original_creation_step": 3,
  "provenance": {
    "id": "lem-the-disk-bundle-of-a-smooth-vector-bundle-is-a-compact-manifold-with-boundary",
    "page": "formal-immersions-and-the-smale-hirsch-theorem",
    "batch": "17",
    "dependencies": [
      "def-cholesky-factorisation-with-positive-diagonal",
      "def-compact-space",
      "def-disk-sphere-and-thom-space-of-a-metric-vector-bundle",
      "def-embedded-smooth-submanifold-with-boundary",
      "def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary",
      "def-smooth-fibre-bundle-and-local-trivialization",
      "def-smooth-vector-bundle-rank-fibre-and-trivial-bundle",
      "lem-regular-sublevels-are-compact-manifolds-with-boundary",
      "thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold"
    ],
    "sha256": "3d47d431ff81da214d76a522015fd2e6f8a98aa9cce8e5a0e026db5ed141c652",
    "author_result": "step3b-pair-formal-immersions-and-the-smale-hirsch-theorem-312f589048b7319f",
    "owner_recertification": {
      "sha256": "c7e176f6e0b44ba4a7ac0a9591c6bb76797e8a959b96f82056f04a3cacaa11a7",
      "at": "2026-10-05T20:06:52.459Z"
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
      "cor-local-normal-form-for-submersions",
      "def-cholesky-factorisation-with-positive-diagonal",
      "def-compact-space",
      "def-disk-sphere-and-thom-space-of-a-metric-vector-bundle",
      "def-embedded-smooth-submanifold-with-boundary",
      "def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary",
      "def-smooth-fibre-bundle-and-local-trivialization",
      "def-smooth-vector-bundle-rank-fibre-and-trivial-bundle",
      "lem-compactness-of-a-subspace-is-ambient",
      "lem-coordinate-balls-form-a-basis-of-a-topological-manifold",
      "lem-regular-sublevels-are-compact-manifolds-with-boundary",
      "thm-extreme-value-metric",
      "thm-heine-borel-rn",
      "thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold"
    ],
    "direct_consumers": [
      "lem-positive-codimension-thickening-reduces-closed-sources-to-the-open-case"
    ],
    "context_items": [
      {
        "id": "cor-local-normal-form-for-submersions",
        "guard_sha256": "0f5ecf568f77b35829277dde1c68f8ebfa1d7ee5def7c03f768cc64d1ee280ef"
      },
      {
        "id": "def-cholesky-factorisation-with-positive-diagonal",
        "guard_sha256": "2b4cf696dd4ff854ef7ed955fd0fb0b93eadb93bbd9e6a95ad7ad5d773500d8f"
      },
      {
        "id": "def-compact-space",
        "guard_sha256": "ed5cac07dd4abff63339ef539e4a9a848ed2a03db8c27a592f1024d8e329e8ee"
      },
      {
        "id": "def-disk-sphere-and-thom-space-of-a-metric-vector-bundle",
        "guard_sha256": "8884813d415c725da647d896c8fcefe7c5a40057333d235940c5c9be8505dd8e"
      },
      {
        "id": "def-embedded-smooth-submanifold-with-boundary",
        "guard_sha256": "a9727782a9dc7b0e0d157fd0d1651fb731c0f8973c179bdbcc76970a7bcf9018"
      },
      {
        "id": "def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary",
        "guard_sha256": "a296a3e4342643528f68f606ba855c4673b45285abe2786e9115406e5576fb16"
      },
      {
        "id": "def-smooth-fibre-bundle-and-local-trivialization",
        "guard_sha256": "7c37d35a2ba177af71722147d885c4ed5555b0d4b705b0195e0c05fe3086e48c"
      },
      {
        "id": "def-smooth-vector-bundle-rank-fibre-and-trivial-bundle",
        "guard_sha256": "24d78df6f74e685439e4e3d8f632b9cce4e865b86107444abb55ca0c9c38dafc"
      },
      {
        "id": "lem-compactness-of-a-subspace-is-ambient",
        "guard_sha256": "1c0d9c399a6142d9f7eb97c468f13bbc2b55637b1dd3460d654d121ff07c82d0"
      },
      {
        "id": "lem-coordinate-balls-form-a-basis-of-a-topological-manifold",
        "guard_sha256": "0a34e261c0cb0c996cbeccc22292c090c9919122a49875df9b8e4e7a037e0365"
      },
      {
        "id": "lem-positive-codimension-thickening-reduces-closed-sources-to-the-open-case",
        "guard_sha256": "0817ae6d43efade8339b79dde899e42077c8a806008bbcdef464922e05dca4a7"
      },
      {
        "id": "lem-regular-sublevels-are-compact-manifolds-with-boundary",
        "guard_sha256": "9b184828e1faef273ba0bd0af29fc54ad28d01bf05c6e7242241448a19b22e5b"
      },
      {
        "id": "thm-extreme-value-metric",
        "guard_sha256": "d7fc866c121570263d4b762b3c7342c637e14d9d6cd6595f106ceb3624ac537f"
      },
      {
        "id": "thm-heine-borel-rn",
        "guard_sha256": "6d15d03fcd45aca99a4c27ba6a765998f8197f407768853018f66a409adf39df"
      },
      {
        "id": "thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold",
        "guard_sha256": "5399132df0cf2a261ddb0860f263d6125d16bc7fd07bb285f53d3d12ece12720"
      }
    ]
  },
  "historical_manifest_delta_unknown": true,
  "native_current_reading_or_authorship_claim": false,
  "owner_receipt_or_certification_recorded": false
}
```
