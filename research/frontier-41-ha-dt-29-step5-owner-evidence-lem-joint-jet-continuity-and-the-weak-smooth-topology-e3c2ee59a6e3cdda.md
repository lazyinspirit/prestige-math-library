# Owner certification evidence proposal

Run: frontier-41-ha-dt-29
Item: lem-joint-jet-continuity-and-the-weak-smooth-topology
Proposal only: actual root review and real focused local checks; no owner receipt or whole-stage certification has been recorded.

item_file_sha256: 913b498120591c58df131186ae48d102186573cbc53fd5187141147a30f7e098
manifest_sha256: 276191a8bba0cdff232b6a35bd500fb52b947f3f27c5ea1e10af6a95bbb116fd
contract_sha256: 5b90a1aaa4c98f98500e1f72335a0295896d8bc8e2c2d56995494309dd601aa5

```step5-manifest-repair
{
  "version": 1,
  "policy": "step5-manifest-repair-evidence-v1",
  "run": "frontier-41-ha-dt-29",
  "step": 5,
  "id": "lem-joint-jet-continuity-and-the-weak-smooth-topology",
  "page": "formal-immersions-and-the-smale-hirsch-theorem",
  "batch": "17",
  "repair_kind": "current-proof-manifest-review",
  "baseline_manifest_sha256": "c9c168add9d5166d116c7bbf836822133a22fe08c1eddd3f0d294e3fc2c6b892",
  "current_manifest_sha256": "276191a8bba0cdff232b6a35bd500fb52b947f3f27c5ea1e10af6a95bbb116fd",
  "current_manifest_entry": {
    "__step6_page_id": "formal-immersions-and-the-smale-hirsch-theorem",
    "dependency_level": 1,
    "deps": [
      "def-weak-compact-open-smooth-topology-on-mapping-spaces",
      "def-smooth-family-of-maps-and-evaluation-map",
      "thm-the-exponential-law",
      "def-compact-open-topology",
      "def-smooth-manifold",
      "def-compact-space",
      "thm-compactness-agrees-with-metric-compactness",
      "lem-continuity-is-local-and-pastes",
      "lem-compactness-of-a-subspace-is-ambient",
      "lem-coordinate-balls-form-a-basis-of-a-topological-manifold"
    ],
    "id": "lem-joint-jet-continuity-and-the-weak-smooth-topology",
    "justified_by": [],
    "kind": "lemma",
    "provenance": {
      "proof": "ai-altered",
      "statement": "literature-derived"
    },
    "sources": {
      "references": [
        {
          "title": "John Francis, The h-Principle, Lecture 3: Immersion theory (notes by O. Gwilliam), PDF pp. 1–4: the flexible-sheaf discussion and the compact-open C^infinity topology",
          "url": "https://sites.math.northwestern.edu/jnf960/classes/hprin/3immersions.pdf"
        },
        {
          "title": "Morris W. Hirsch, Differential Topology, Ch. 2 §1, pp. 34–36 (the weak and strong C^r topologies and their chartwise description)",
          "url": "https://people.dm.unipi.it/benedett/HIRSCH.pdf"
        }
      ]
    },
    "statement": "Let $P$ be a topological space, let $M,Q$ be smooth manifolds, and let $\\Phi:P\\to C^\\infty(M,Q)$ be a map with adjoint $\\varphi:P\\times M\\to Q$, $\\varphi(p,x):=\\Phi(p)(x)$ ([[thm-the-exponential-law]], [[def-compact-open-topology]]). Then:\n\n(i) if $\\Phi$ is continuous for the weak compact-open $C^\\infty$ topology, then for every chart $(U,\\alpha)$ of $M$, every compact $K\\subseteq U$, every chart $(V,\\beta)$ of $Q$ and every $p_0\\in P$ with $\\Phi(p_0)(K)\\subseteq V$ there are a neighbourhood $W$ of $p_0$ with $\\Phi(W)(K)\\subseteq V$ and, for every multi-index $\\gamma$, a continuous function $(p,x)\\mapsto D^\\gamma(\\beta\\circ\\Phi(p)\\circ\\alpha^{-1})(\\alpha(x))$ on $W\\times K$;\n\n(ii) conversely, if $P$ is a smooth manifold and the adjoint $\\varphi$ is smooth, then $\\Phi$ is continuous for the weak $C^\\infty$ topology; more generally, if the adjoint $\\varphi$ is continuous and the local jet functions of (i) are jointly continuous near every point at which they are defined, then $\\Phi$ is continuous.",
    "strategy": "Both directions are bookkeeping with the definition of the weak topology: basic sets constrain finitely many derivatives on finitely many compact pieces, so continuity gives joint continuity of the jets by a triangle inequality with a fixed smooth map; conversely a compactness (tube-lemma) argument upgrades joint jet continuity to membership in every basic set.",
    "title": "Joint jet continuity characterises the weak smooth topology"
  },
  "current_carriers": {
    "guard_sha256": "5432d9a1d76a4303545e98c24f766f0b511bd623bf36e9b98bc4e59214450423",
    "judge_sha256": "913b498120591c58df131186ae48d102186573cbc53fd5187141147a30f7e098",
    "item_file_sha256": "913b498120591c58df131186ae48d102186573cbc53fd5187141147a30f7e098",
    "manifest_sha256": "276191a8bba0cdff232b6a35bd500fb52b947f3f27c5ea1e10af6a95bbb116fd",
    "contract_sha256": "5b90a1aaa4c98f98500e1f72335a0295896d8bc8e2c2d56995494309dd601aa5",
    "step5_subject_sha256": "46367679d1c8a0f9f0d34e00320cdc013f9fd5fef1d3f74b1e7c19f4df991168"
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
      "path": "research/frontier-41-ha-dt-29-owner-stage3-current-checks-20261006T033236Z/lem-joint-jet-continuity-and-the-weak-smooth-topology-precheck.json",
      "sha256": "9873b92198d1dde2237656bad3f9e117a707d14298f99b96a5566d2eb624091f"
    },
    "rendercheck": {
      "path": "research/frontier-41-ha-dt-29-owner-stage3-current-checks-20261006T033236Z/lem-joint-jet-continuity-and-the-weak-smooth-topology-rendercheck.json",
      "sha256": "8f305ce27ec818b2e78fa99d20027347f44c047fceef131574c2f732149ab4ab"
    },
    "strict-contract": {
      "path": "research/frontier-41-ha-dt-29-owner-stage3-current-checks-20261006T033236Z/lem-joint-jet-continuity-and-the-weak-smooth-topology-strict-contract.json",
      "sha256": "1618cfee3aa6f4d3d1a59fc4b392f13cec9425db22bed16ca7184c900922cf85"
    }
  },
  "review": {
    "current_item_and_contract_checked": true,
    "current_manifest_matches_item": true,
    "no_unresolved_defect": true,
    "direct_consumers": [
      "lem-smooth-families-and-path-components-in-the-weak-topology",
      "lem-smoothing-formal-immersion-families",
      "lem-smoothing-genuine-immersion-families"
    ],
    "current_proof_suppliers_and_direct_consumers_checked": true,
    "current_proof_checked": true,
    "current_suppliers_checked": true,
    "current_direct_consumers_checked": true,
    "suppliers": [
      "def-compact-open-topology",
      "def-compact-space",
      "def-smooth-family-of-maps-and-evaluation-map",
      "def-smooth-manifold",
      "def-weak-compact-open-smooth-topology-on-mapping-spaces",
      "lem-compactness-of-a-subspace-is-ambient",
      "lem-continuity-is-local-and-pastes",
      "lem-coordinate-balls-form-a-basis-of-a-topological-manifold",
      "thm-compactness-agrees-with-metric-compactness",
      "thm-the-exponential-law"
    ],
    "context_items": [
      {
        "id": "def-compact-open-topology",
        "guard_sha256": "223e59781658a32e64d1538528f609a33fbc334232efe710775d0856e8b10890"
      },
      {
        "id": "def-compact-space",
        "guard_sha256": "ed5cac07dd4abff63339ef539e4a9a848ed2a03db8c27a592f1024d8e329e8ee"
      },
      {
        "id": "def-smooth-family-of-maps-and-evaluation-map",
        "guard_sha256": "73ecc6552e563a1d847d9dfccf4227e3fb983bcb1fd128415fa54dfd6cd5fdfc"
      },
      {
        "id": "def-smooth-manifold",
        "guard_sha256": "171e7561e7e87b4ab35db02db2a81d08d7761718cd959e6f19741f7f1c652b0c"
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
        "id": "lem-continuity-is-local-and-pastes",
        "guard_sha256": "7383ef42f11188ca98c4a7be0f86332fd5b47f722aa86e1b5e31617ab1db6301"
      },
      {
        "id": "lem-coordinate-balls-form-a-basis-of-a-topological-manifold",
        "guard_sha256": "0a34e261c0cb0c996cbeccc22292c090c9919122a49875df9b8e4e7a037e0365"
      },
      {
        "id": "lem-smooth-families-and-path-components-in-the-weak-topology",
        "guard_sha256": "2a16c0651d62f65f05e182ea166ac3ac1448690386f4b6409a11de7ae8f96d25"
      },
      {
        "id": "lem-smoothing-formal-immersion-families",
        "guard_sha256": "ccb81e52ba6f503d2e39aa2f744d580e3cb054ae749a83263e741126894e1d35"
      },
      {
        "id": "lem-smoothing-genuine-immersion-families",
        "guard_sha256": "a5322a62d2b01bcd9c21651450deb63fb7002b4b5928dc2ad557bb43ca0c0296"
      },
      {
        "id": "thm-compactness-agrees-with-metric-compactness",
        "guard_sha256": "4262c214adcadb322b667b6f6bbfce092567788ddc6c8119d52eca56da025b0b"
      },
      {
        "id": "thm-the-exponential-law",
        "guard_sha256": "38c9c825ddc742239785fe19e78899c0dcf181a409f92d20d87c88e870bd23d1"
      }
    ]
  }
}
```
