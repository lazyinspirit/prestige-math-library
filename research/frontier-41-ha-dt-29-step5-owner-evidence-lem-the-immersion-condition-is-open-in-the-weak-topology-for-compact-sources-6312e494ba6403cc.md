# Owner certification evidence proposal

Run: frontier-41-ha-dt-29
Item: lem-the-immersion-condition-is-open-in-the-weak-topology-for-compact-sources
Proposal only: actual root review and real focused local checks; no owner receipt or whole-stage certification has been recorded.

item_file_sha256: 5805f535ef6c8ed884e85d2fdf185c3495be4d710b85b966dc930a1d74c943cf
manifest_sha256: 6b9e619b02a778086a968f3759d4e778da0fbd9d2501932d8e9fbf68f8e0c9d3
contract_sha256: 95b1b6741068ca1c40dc5bcb50fbf8072e62f3d03c0e43b17cebf511be11f458

```step5-manifest-repair
{
  "version": 1,
  "policy": "step5-manifest-repair-evidence-v1",
  "run": "frontier-41-ha-dt-29",
  "step": 5,
  "id": "lem-the-immersion-condition-is-open-in-the-weak-topology-for-compact-sources",
  "page": "formal-immersions-and-the-smale-hirsch-theorem",
  "batch": "17",
  "repair_kind": "current-proof-manifest-review",
  "baseline_manifest_sha256": "6a608a58e7ea798af4ed7974c13715827e97e4d245bd0c4ce0db8db6920daabf",
  "current_manifest_sha256": "6b9e619b02a778086a968f3759d4e778da0fbd9d2501932d8e9fbf68f8e0c9d3",
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
  "current_carriers": {
    "guard_sha256": "b608632f2916964f68639355c9b9504bde77ca1ebc86c23a7965464601f59c10",
    "judge_sha256": "5805f535ef6c8ed884e85d2fdf185c3495be4d710b85b966dc930a1d74c943cf",
    "item_file_sha256": "5805f535ef6c8ed884e85d2fdf185c3495be4d710b85b966dc930a1d74c943cf",
    "manifest_sha256": "6b9e619b02a778086a968f3759d4e778da0fbd9d2501932d8e9fbf68f8e0c9d3",
    "contract_sha256": "95b1b6741068ca1c40dc5bcb50fbf8072e62f3d03c0e43b17cebf511be11f458",
    "step5_subject_sha256": "e0f56a1b7a6bbbe111f9c927a30f275b6d9065cf9d51b90e879800c739948d92"
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
      "path": "research/frontier-41-ha-dt-29-owner-stage3-current-checks-20261006T033236Z/lem-the-immersion-condition-is-open-in-the-weak-topology-for-compact-sources-precheck.json",
      "sha256": "741390b481b70099e2e698f2985f13d151940fd8c327c9b4d5196957abc6cd86"
    },
    "rendercheck": {
      "path": "research/frontier-41-ha-dt-29-owner-stage3-current-checks-20261006T033236Z/lem-the-immersion-condition-is-open-in-the-weak-topology-for-compact-sources-rendercheck.json",
      "sha256": "e1bacab833e57023e397934dedc2622ed4af3b2d8cbafd974a22ec2a9e0005a5"
    },
    "strict-contract": {
      "path": "research/frontier-41-ha-dt-29-owner-stage3-current-checks-20261006T033236Z/lem-the-immersion-condition-is-open-in-the-weak-topology-for-compact-sources-strict-contract.json",
      "sha256": "33fd94f6ab4f0866035e7da7614c9d318a7df76a21aaa0392e379c5d40c9b71c"
    }
  },
  "review": {
    "current_item_and_contract_checked": true,
    "current_manifest_matches_item": true,
    "no_unresolved_defect": true,
    "direct_consumers": [
      "def-weak-compact-open-smooth-topology-on-mapping-spaces",
      "rem-smale-hirsch-is-a-weak-homotopy-equivalence-not-asserted-as-an-actual-homotopy-equivalence"
    ],
    "current_proof_suppliers_and_direct_consumers_checked": true,
    "current_proof_checked": true,
    "current_suppliers_checked": true,
    "current_direct_consumers_checked": true,
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
  }
}
```
