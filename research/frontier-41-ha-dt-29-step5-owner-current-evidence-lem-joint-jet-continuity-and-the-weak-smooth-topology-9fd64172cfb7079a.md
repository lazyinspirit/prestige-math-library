# Frozen-current owner recertification evidence proposal

Run: frontier-41-ha-dt-29
Item: lem-joint-jet-continuity-and-the-weak-smooth-topology
All source bytes are unchanged from the actual 2026-10-06T04:22:18.697Z certificate. Only current contract/composite carriers changed. Existing full root proof review remains authoritative; fresh actual checks and frozen complete context/contract bindings are local evidence, not a new native reading or independent audit.

item_file_sha256: 913b498120591c58df131186ae48d102186573cbc53fd5187141147a30f7e098
manifest_sha256: 276191a8bba0cdff232b6a35bd500fb52b947f3f27c5ea1e10af6a95bbb116fd
contract_sha256: 643482f351aace3874fc2c0748a55be807a09a90b178c57c409aa2cde1cec40f

```json
{
  "version": 1,
  "run": "frontier-41-ha-dt-29",
  "step": 5,
  "id": "lem-joint-jet-continuity-and-the-weak-smooth-topology",
  "page": "formal-immersions-and-the-smale-hirsch-theorem",
  "batch": "17",
  "evidence_class": "current-owner-recertification-proposal",
  "owner": true,
  "owner_identity": "/root",
  "reason": "the current local foundation proofs and their actual direct uses are accepted",
  "current_carriers": {
    "guard_sha256": "5432d9a1d76a4303545e98c24f766f0b511bd623bf36e9b98bc4e59214450423",
    "judge_sha256": "913b498120591c58df131186ae48d102186573cbc53fd5187141147a30f7e098",
    "item_file_sha256": "913b498120591c58df131186ae48d102186573cbc53fd5187141147a30f7e098",
    "manifest_sha256": "276191a8bba0cdff232b6a35bd500fb52b947f3f27c5ea1e10af6a95bbb116fd",
    "contract_sha256": "643482f351aace3874fc2c0748a55be807a09a90b178c57c409aa2cde1cec40f",
    "step5_subject_sha256": "137f5946eb62ccd493850080b90e58cddbe4cf53dc4e84adbfbf18920d508da8"
  },
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
    "path": "research/frontier-41-ha-dt-29-owner-final-carried-checks-20261006T045332Z/lem-joint-jet-continuity-and-the-weak-smooth-topology-current-context.json",
    "sha256": "c35229531f5f22768a25aa01b5332932c43944d51195f7db327d015605bfa34a"
  },
  "proof_checks": {
    "precheck": {
      "path": "research/frontier-41-ha-dt-29-owner-final-carried-checks-20261006T045332Z/lem-joint-jet-continuity-and-the-weak-smooth-topology-precheck.json",
      "sha256": "3db4851af016fbe9bf8a61bcdc678c1b7c1dc36d71410ca3b1baa9a5d685a1c0"
    },
    "rendercheck": {
      "path": "research/frontier-41-ha-dt-29-owner-final-carried-checks-20261006T045332Z/lem-joint-jet-continuity-and-the-weak-smooth-topology-rendercheck.json",
      "sha256": "2422e59c76a2919296afb07bd03deb04dbe5591ce780f7aa68dd5f61a7e5fca4"
    },
    "strict-contract": {
      "path": "research/frontier-41-ha-dt-29-owner-final-carried-checks-20261006T045332Z/lem-joint-jet-continuity-and-the-weak-smooth-topology-strict-contract.json",
      "sha256": "1a733e6f035b8c0ef541910a044bb36ae0bf9cf71024cfe324a1b22cbea04f02"
    }
  },
  "definition_contract_applicability": null,
  "actual_prior_native_origin": "alpha-5a-batch-17.result.json",
  "original_creation_step": 3,
  "provenance": {
    "id": "lem-joint-jet-continuity-and-the-weak-smooth-topology",
    "page": "formal-immersions-and-the-smale-hirsch-theorem",
    "batch": "17",
    "dependencies": [
      "def-compact-open-topology",
      "def-compact-space",
      "def-smooth-family-of-maps-and-evaluation-map",
      "def-smooth-manifold",
      "def-weak-compact-open-smooth-topology-on-mapping-spaces",
      "lem-continuity-is-local-and-pastes",
      "thm-compactness-agrees-with-metric-compactness",
      "thm-the-exponential-law"
    ],
    "sha256": "8134d69bef9feba0af7de91b64160dd15d614b1ec3ed807c2ae3e6c86a68bdcf",
    "author_result": "step3b-pair-formal-immersions-and-the-smale-hirsch-theorem-312f589048b7319f",
    "owner_recertification": {
      "sha256": "cdb79a72352cf80f1cc6799fe272dcc8a2a075cbb63825f1481c74aca2ac7760",
      "at": "2026-10-05T20:06:52.353Z"
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
    "direct_consumers": [
      "lem-smooth-families-and-path-components-in-the-weak-topology",
      "lem-smoothing-formal-immersion-families",
      "lem-smoothing-genuine-immersion-families"
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
  },
  "historical_manifest_delta_unknown": true,
  "native_current_reading_or_authorship_claim": false,
  "owner_receipt_or_certification_recorded": false
}
```
