# Frozen-current owner recertification evidence proposal

Run: frontier-41-ha-dt-29
Item: lem-the-immersion-condition-is-open-in-the-weak-topology-for-compact-sources
All source bytes are unchanged from the actual 2026-10-06T04:22:18.697Z certificate. Only current contract/composite carriers changed. Existing full root proof review remains authoritative; fresh actual checks and frozen complete context/contract bindings are local evidence, not a new native reading or independent audit.

item_file_sha256: 5805f535ef6c8ed884e85d2fdf185c3495be4d710b85b966dc930a1d74c943cf
manifest_sha256: 6b9e619b02a778086a968f3759d4e778da0fbd9d2501932d8e9fbf68f8e0c9d3
contract_sha256: 7c544bcdc4db8d43b398564d1d5cd6f9c215b57d3325896e93429dff9e290a65

```json
{
  "version": 1,
  "run": "frontier-41-ha-dt-29",
  "step": 5,
  "id": "lem-the-immersion-condition-is-open-in-the-weak-topology-for-compact-sources",
  "page": "formal-immersions-and-the-smale-hirsch-theorem",
  "batch": "17",
  "evidence_class": "current-owner-recertification-proposal",
  "owner": true,
  "owner_identity": "/root",
  "reason": "the current local foundation proofs and their actual direct uses are accepted",
  "current_carriers": {
    "guard_sha256": "b608632f2916964f68639355c9b9504bde77ca1ebc86c23a7965464601f59c10",
    "judge_sha256": "5805f535ef6c8ed884e85d2fdf185c3495be4d710b85b966dc930a1d74c943cf",
    "item_file_sha256": "5805f535ef6c8ed884e85d2fdf185c3495be4d710b85b966dc930a1d74c943cf",
    "manifest_sha256": "6b9e619b02a778086a968f3759d4e778da0fbd9d2501932d8e9fbf68f8e0c9d3",
    "contract_sha256": "7c544bcdc4db8d43b398564d1d5cd6f9c215b57d3325896e93429dff9e290a65",
    "step5_subject_sha256": "d537520275fe4d302c676e574b274e9cd5cc22635b392732dafecbfcdc621a2b"
  },
  "current_manifest_entry": {
    "__step6_page_id": "formal-immersions-and-the-smale-hirsch-theorem",
    "dependency_level": 1,
    "deps": [
      "def-weak-compact-open-smooth-topology-on-mapping-spaces",
      "def-immersion-submersion-and-constant-rank-map",
      "def-formal-immersion-between-smooth-manifolds",
      "def-vector-bundle-map-over-a-smooth-base-map",
      "prop-smoothness-of-a-bundle-map-is-equivalent-to-smooth-local-matrices",
      "thm-extreme-value-metric",
      "def-compact-space",
      "def-smooth-manifold",
      "lem-coordinate-balls-form-a-basis-of-a-topological-manifold",
      "lem-compactness-of-a-subspace-is-ambient"
    ],
    "id": "lem-the-immersion-condition-is-open-in-the-weak-topology-for-compact-sources",
    "justified_by": [],
    "kind": "lemma",
    "provenance": {
      "proof": "ai-altered",
      "statement": "literature-derived"
    },
    "sources": {
      "references": [
        {
          "title": "Morris W. Hirsch, Differential Topology, Ch. 2 §1, pp. 34–36 (the strong C^r and C^infinity topologies; openness of the immersion condition) and Ch. 2 §3",
          "url": "https://people.dm.unipi.it/benedett/HIRSCH.pdf"
        },
        {
          "title": "John Francis, The h-Principle, Lecture 3: Immersion theory (notes by O. Gwilliam), PDF pp. 1–4: Proposition 2.2 and the flexible-sheaf discussion",
          "url": "https://sites.math.northwestern.edu/jnf960/classes/hprin/3immersions.pdf"
        }
      ]
    },
    "statement": "Let $M$ be a compact smooth $m$-manifold and $N$ a smooth $n$-manifold. Then:\n\n(i) $\\operatorname{Imm}(M,N)$ is open in $C^\\infty(M,N)$ for the weak compact-open $C^\\infty$ topology;\n\n(ii) for every smooth $f:M\\to N$ the set of smooth bundle maps $F:TM\\to TN$ over $f$ with $F_x$ injective for every $x$ is open in the space of smooth bundle maps over $f$ with the subspace topology inherited from $C^\\infty(TM,TN)$; equivalently $\\operatorname{FImm}(M,N)$ is open in the subspace of $C^\\infty(M,N)\\times C^\\infty(TM,TN)$ consisting of pairs with a bundle-map second component over the first.\n\nThe compactness of $M$ is essential: the condition is imposed at every point, and only a compact source lets one control all of $M$ by finitely many compact chart pieces.",
    "strategy": "Chartwise determinant-margin argument: a compact source is covered by finitely many compact chart pieces, the maximum of the finitely many determinant minors of the Jacobian is continuous and positive, hence bounded below, and first-order closeness preserves the nonvanishing of a minor; the same argument applies to the matrix functions of a bundle map in local trivializations.",
    "title": "For compact sources the immersion condition is open in the weak smooth topology"
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
    "path": "research/frontier-41-ha-dt-29-owner-final-carried-checks-20261006T045332Z/lem-the-immersion-condition-is-open-in-the-weak-topology-for-compact-sources-current-context.json",
    "sha256": "76d9a9fee5c5941e26dd3e7c9f291bc3757dc1450ca07c1213ffec12bb2881be"
  },
  "proof_checks": {
    "precheck": {
      "path": "research/frontier-41-ha-dt-29-owner-final-carried-checks-20261006T045332Z/lem-the-immersion-condition-is-open-in-the-weak-topology-for-compact-sources-precheck.json",
      "sha256": "387841b244bb3c578f9a2f1c118d416c6dd4c4f5ed511218feb4c166bc8057a3"
    },
    "rendercheck": {
      "path": "research/frontier-41-ha-dt-29-owner-final-carried-checks-20261006T045332Z/lem-the-immersion-condition-is-open-in-the-weak-topology-for-compact-sources-rendercheck.json",
      "sha256": "1ae6d88fd7c6ce529043134d363db36a8f89b0e0ad8e0f6b453e9f3cf7d9108f"
    },
    "strict-contract": {
      "path": "research/frontier-41-ha-dt-29-owner-final-carried-checks-20261006T045332Z/lem-the-immersion-condition-is-open-in-the-weak-topology-for-compact-sources-strict-contract.json",
      "sha256": "33081b06d569246798a207c6f419ac6d694a2979b6f987f44622368efd6ab969"
    }
  },
  "definition_contract_applicability": null,
  "actual_prior_native_origin": "alpha-5a-batch-17.result.json",
  "original_creation_step": 3,
  "provenance": {
    "id": "lem-the-immersion-condition-is-open-in-the-weak-topology-for-compact-sources",
    "page": "formal-immersions-and-the-smale-hirsch-theorem",
    "batch": "17",
    "dependencies": [
      "def-compact-space",
      "def-formal-immersion-between-smooth-manifolds",
      "def-immersion-submersion-and-constant-rank-map",
      "def-smooth-manifold",
      "def-vector-bundle-map-over-a-smooth-base-map",
      "def-weak-compact-open-smooth-topology-on-mapping-spaces",
      "prop-smoothness-of-a-bundle-map-is-equivalent-to-smooth-local-matrices",
      "thm-extreme-value-metric"
    ],
    "sha256": "d321b242d1c1f0994e4eafaea31dcdc794bf0a611e27b32719b8055e8c3c8eb2",
    "author_result": "step3b-pair-formal-immersions-and-the-smale-hirsch-theorem-312f589048b7319f",
    "owner_recertification": {
      "sha256": "1a6089b271aaaa07f08de9916e3dc493038505848985bce559d45222ec8564f6",
      "at": "2026-10-05T20:06:52.516Z"
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
      "def-compact-space",
      "def-formal-immersion-between-smooth-manifolds",
      "def-immersion-submersion-and-constant-rank-map",
      "def-smooth-manifold",
      "def-vector-bundle-map-over-a-smooth-base-map",
      "def-weak-compact-open-smooth-topology-on-mapping-spaces",
      "lem-compactness-of-a-subspace-is-ambient",
      "lem-coordinate-balls-form-a-basis-of-a-topological-manifold",
      "prop-smoothness-of-a-bundle-map-is-equivalent-to-smooth-local-matrices",
      "thm-extreme-value-metric"
    ],
    "direct_consumers": [
      "def-weak-compact-open-smooth-topology-on-mapping-spaces",
      "rem-smale-hirsch-is-a-weak-homotopy-equivalence-not-asserted-as-an-actual-homotopy-equivalence"
    ],
    "context_items": [
      {
        "id": "def-compact-space",
        "guard_sha256": "ed5cac07dd4abff63339ef539e4a9a848ed2a03db8c27a592f1024d8e329e8ee"
      },
      {
        "id": "def-formal-immersion-between-smooth-manifolds",
        "guard_sha256": "d323a2dcfc89246f4deb1f371fa86b24feae78d846d4a8b0a6d96d70f27dfe09"
      },
      {
        "id": "def-immersion-submersion-and-constant-rank-map",
        "guard_sha256": "fcb33b0ae5226faf12b3f7c93a4967f7c85487f1f2898e7b98c72dd70182a268"
      },
      {
        "id": "def-smooth-manifold",
        "guard_sha256": "171e7561e7e87b4ab35db02db2a81d08d7761718cd959e6f19741f7f1c652b0c"
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
        "id": "lem-compactness-of-a-subspace-is-ambient",
        "guard_sha256": "1c0d9c399a6142d9f7eb97c468f13bbc2b55637b1dd3460d654d121ff07c82d0"
      },
      {
        "id": "lem-coordinate-balls-form-a-basis-of-a-topological-manifold",
        "guard_sha256": "0a34e261c0cb0c996cbeccc22292c090c9919122a49875df9b8e4e7a037e0365"
      },
      {
        "id": "prop-smoothness-of-a-bundle-map-is-equivalent-to-smooth-local-matrices",
        "guard_sha256": "5826f996ad4b7ffc5d051b280d985a8afc84e3dda2d61d47c88f50f0f9c8ad94"
      },
      {
        "id": "rem-smale-hirsch-is-a-weak-homotopy-equivalence-not-asserted-as-an-actual-homotopy-equivalence",
        "guard_sha256": "2da68489a9927aa6e0c341e9c4928b5be646bffe31d4b71812de54c5fd5c1197"
      },
      {
        "id": "thm-extreme-value-metric",
        "guard_sha256": "d7fc866c121570263d4b762b3c7342c637e14d9d6cd6595f106ceb3624ac537f"
      }
    ]
  },
  "historical_manifest_delta_unknown": true,
  "native_current_reading_or_authorship_claim": false,
  "owner_receipt_or_certification_recorded": false
}
```
