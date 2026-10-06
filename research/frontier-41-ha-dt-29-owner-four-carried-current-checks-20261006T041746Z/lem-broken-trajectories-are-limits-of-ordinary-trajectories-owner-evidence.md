# Owner certification evidence proposal

Run: frontier-41-ha-dt-29
Item: lem-broken-trajectories-are-limits-of-ordinary-trajectories
Proposal only: actual root review and real focused local checks; no owner receipt or whole-stage certification has been recorded.

item_file_sha256: f4788aebb1c336895ac270a26f97351fc3e29497800709f5160901d54fdcb41d
manifest_sha256: 9ba114ccf2bb7453821caf14fa2c00eb1f0abdd60f9b6c535675610393a495b3
contract_sha256: 07c2cfcfad939a680c9a2416735096b797487581dba881d14616fbc825057158

```step5-manifest-repair
{
  "version": 1,
  "policy": "step5-manifest-repair-evidence-v1",
  "run": "frontier-41-ha-dt-29",
  "step": 5,
  "id": "lem-broken-trajectories-are-limits-of-ordinary-trajectories",
  "page": "morse-trajectory-moduli-spaces-and-the-morse-differential",
  "batch": "5",
  "repair_kind": "current-proof-manifest-review",
  "baseline_manifest_sha256": "16aa038453a4c50f7b9274e11a93abfdd3c2cbd86a36736ca30a77cff25996ca",
  "current_manifest_sha256": "9ba114ccf2bb7453821caf14fa2c00eb1f0abdd60f9b6c535675610393a495b3",
  "current_manifest_entry": {
    "__step6_page_id": "morse-trajectory-moduli-spaces-and-the-morse-differential",
    "dependency_level": 2,
    "deps": [
      "def-axiom-of-choice",
      "def-broken-morse-trajectory",
      "def-geometric-convergence-to-a-broken-morse-trajectory",
      "thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point",
      "def-morse-smale-pair",
      "thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces",
      "thm-euclidean-implicit-function-theorem",
      "thm-euclidean-inverse-function-theorem",
      "thm-fundamental-theorem-on-flows"
    ],
    "id": "lem-broken-trajectories-are-limits-of-ordinary-trajectories",
    "kind": "lemma",
    "provenance": {
      "proof": "literature-derived",
      "statement": "literature-derived"
    },
    "sources": {
      "references": [
        {
          "locator": "Ch. 3 Sec. 3.2.b, printed p. 64 (Proposition 3.2.6: ordinary trajectories exist in every neighbourhood of a once-broken trajectory)",
          "title": "Michele Audin and Mihai Damian, Morse Theory and Floer Homology, Part I Ch. 3, complete author PDF",
          "url": "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
        },
        {
          "locator": "Sec. 6, printed pp. 42-51 (Theorem 6.1 and Lemmas 6.5-6.6: the general gluing construction for any composable pair)",
          "title": "Udhav Fowdar, A Functional Analytic Approach to Morse Homology (UCL 4th-year project, 2016, supervised by C. Wendl), complete PDF",
          "url": "https://www.mathematik.hu-berlin.de/~wendl/pub/Fowdar.pdf"
        },
        {
          "locator": "Lecture 18 Sec. 5.5 (gluing produces trajectories in every neighbourhood of a broken flow line)",
          "title": "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes), Lectures 17-19, complete combined PDF",
          "url": "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
        }
      ]
    },
    "statement": "Assume the Axiom of Choice. Let $(f,X)$ be Morse--Smale on a closed manifold, with $X$ downward gradient-like in the normalized Morse-coordinate sense. Every neighbourhood of every broken trajectory $v\\in\\overline{\\mathcal M}(p,q)$ contains an ordinary trajectory from $p$ to $q$. Thus $\\mathcal M(p,q)$ is dense in $\\overline{\\mathcal M}(p,q)$.",
    "strategy": "Independently recomputed the normalized passage: (u,h(u)) maps to (|h(u)|u/|u|,|u|h(u)/|h(u)|), and polar blowup extends smoothly to H(rho,theta). Transversality selects a k-disk from the higher-dimensional incoming slice and a surjective angular block at the outgoing crossing; only that block is inverted, with surplus coordinates fixed. The zero-equation case lambda(b)=0 needs no IFT. Two-sided smooth extension permits boundary IFT; finite induction and the endpoint-inclusive neighbourhoods give gluing for every finite string. Read Audin–Damian Proposition 3.2.6 and the complete passage proof, Propositions 3.2.8/10/11 and Lemma 3.2.12, printed pp. 64–69; checked the Euclidean IFT/inverse-theorem interfaces. No unsupported Banach invertibility remains.",
    "title": "Every broken trajectory is a limit of ordinary trajectories"
  },
  "current_carriers": {
    "guard_sha256": "30fcc83ea7e8536642e06a6f37703d74880b2b373b55e163fde57b4451a50ad0",
    "judge_sha256": "f4788aebb1c336895ac270a26f97351fc3e29497800709f5160901d54fdcb41d",
    "item_file_sha256": "f4788aebb1c336895ac270a26f97351fc3e29497800709f5160901d54fdcb41d",
    "manifest_sha256": "9ba114ccf2bb7453821caf14fa2c00eb1f0abdd60f9b6c535675610393a495b3",
    "contract_sha256": "07c2cfcfad939a680c9a2416735096b797487581dba881d14616fbc825057158",
    "step5_subject_sha256": "945324f170d1026b7216e79ea54103f48d99200c0ddaa84e065f2b3c957ff197"
  },
  "historical_delta_unknown": true,
  "owner_authorization": {
    "owner": true,
    "owner_identity": "/root",
    "reason": "current local proofs and actual direct uses are accepted"
  },
  "sources": [
    {
      "path": "research/frontier-41-ha-dt-29-owner-four-carried-current-proof-review.md",
      "sha256": "7ec698d78540b60bfa73368f66317c2cb2b8e889908e7a20c7ada2b913ffa8ba"
    },
    {
      "path": "research/frontier-41-ha-dt-29-owner-four-carried-direct-inventory.json",
      "sha256": "82a81e68c62398a0af8f71bf377597fcd368f5220475a4602646760bffe0282f"
    }
  ],
  "proof_checks": {
    "precheck": {
      "path": "research/frontier-41-ha-dt-29-owner-four-carried-current-checks-20261006T041746Z/lem-broken-trajectories-are-limits-of-ordinary-trajectories-precheck.json",
      "sha256": "ff27efd9af37ee4a501a6628d8206cedc938885745bd973f545fe443216acc6d"
    },
    "rendercheck": {
      "path": "research/frontier-41-ha-dt-29-owner-four-carried-current-checks-20261006T041746Z/lem-broken-trajectories-are-limits-of-ordinary-trajectories-rendercheck.json",
      "sha256": "336407441e6979b59f9b9f66c41fa41815314280f9d30fe44f9af3722c5b4ce1"
    },
    "strict-contract": {
      "path": "research/frontier-41-ha-dt-29-owner-four-carried-current-checks-20261006T041746Z/lem-broken-trajectories-are-limits-of-ordinary-trajectories-strict-contract.json",
      "sha256": "ddb50399da8af2c1a11439f25f27ca93596b4c8b24d71d37d5728f5805645545"
    }
  },
  "review": {
    "current_item_and_contract_checked": true,
    "current_manifest_matches_item": true,
    "no_unresolved_defect": true,
    "direct_consumers": [
      "thm-morse-trajectory-compactness-up-to-breaking"
    ],
    "current_proof_suppliers_and_direct_consumers_checked": true,
    "current_proof_checked": true,
    "current_suppliers_checked": true,
    "current_direct_consumers_checked": true,
    "suppliers": [
      "def-axiom-of-choice",
      "def-broken-morse-trajectory",
      "def-geometric-convergence-to-a-broken-morse-trajectory",
      "def-morse-smale-pair",
      "thm-euclidean-implicit-function-theorem",
      "thm-euclidean-inverse-function-theorem",
      "thm-fundamental-theorem-on-flows",
      "thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces",
      "thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point"
    ],
    "context_items": [
      {
        "id": "def-axiom-of-choice",
        "guard_sha256": "286a606279a9914e68ce1d7daa15be708a2d500d2cb6a8f2e4e3a10c35987f93"
      },
      {
        "id": "def-broken-morse-trajectory",
        "guard_sha256": "d60a9bc059a7543bccfea5c605705d94dc83d235269716b88a709f9d33a7e396"
      },
      {
        "id": "def-geometric-convergence-to-a-broken-morse-trajectory",
        "guard_sha256": "cf7e03c2dd7bf3a954f6cea27103dfcc093867ce13ac9a9a8b57247f6981b628"
      },
      {
        "id": "def-morse-smale-pair",
        "guard_sha256": "bd6a0fe7665efc4ea4fb4d19f3feea9ac54dc3ba895f9298361ebd2fe030c97f"
      },
      {
        "id": "thm-euclidean-implicit-function-theorem",
        "guard_sha256": "8fce14ff65f6451b84d7dcb8b3289bb22dfa1ef2b8539dd7b885bd1902e2523a"
      },
      {
        "id": "thm-euclidean-inverse-function-theorem",
        "guard_sha256": "805d85480aa602d153d8b87398cbfb6843f30a30fe1099b52fede208293db026"
      },
      {
        "id": "thm-fundamental-theorem-on-flows",
        "guard_sha256": "10f9370daea1637809b492a6a80628bc2e1fb4c9315cbd6e1279a84049cc6f43"
      },
      {
        "id": "thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces",
        "guard_sha256": "26c5d2bb26953da8951fe77c31ee97ccc5a5cb157a2e53d075bc3b36995792ff"
      },
      {
        "id": "thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point",
        "guard_sha256": "80b98901e0b45859129263c8c8e05b9ae145afa928ad0a1c9297d1422ab60b14"
      },
      {
        "id": "thm-morse-trajectory-compactness-up-to-breaking",
        "guard_sha256": "2f49f758214e390eea6b95ba33da86f638f84004d310906bce5dfb8e21e21c20"
      }
    ]
  }
}
```
