# Exact current ball-lemma owner evidence

Run frontier-37-owner-30; item lem-euclidean-balls-are-bounded-c-one-domains. Actual local owner review: research/frontier-37-owner-30-ball-lemma-current-owner-review.md. Historical delta remains unknown.

guard_sha256: da392721823a3181a87d61918787b4c77e31e8d33e02c093a82341d015b7dca5
judge_sha256: bccf63375a2decd1e19db78c3de3b740005a15c316dd2b73dfd00247463d11b1
item_file_sha256: bccf63375a2decd1e19db78c3de3b740005a15c316dd2b73dfd00247463d11b1
manifest_sha256: cf844e46a3517f2173093898491fe9926d2e757158e94fff6329ebca456b8b8a
contract_sha256: 0ed17d4b8796861e70dd34595be51b451df92797ca9ece707345e527f72ba5ed
step5_subject_sha256: 8c6cc02fc9794bdacee02776181393ecc5ecfd6488f2859a2032df9c7fa68f42

```step5-manifest-repair
{
  "version": 1,
  "policy": "step5-manifest-repair-evidence-v1",
  "run": "frontier-37-owner-30",
  "step": 5,
  "id": "lem-euclidean-balls-are-bounded-c-one-domains",
  "page": "poisson-problems-and-interior-harmonic-estimates",
  "batch": "9",
  "repair_kind": "current-ball-lemma-manifest-review",
  "historical_delta_unknown": true,
  "baseline_manifest_sha256": "d7ce1ce7f659d3d62954d560cc01049bbaa6be262491125fad511c66a29b0236",
  "current_manifest_sha256": "cf844e46a3517f2173093898491fe9926d2e757158e94fff6329ebca456b8b8a",
  "current_manifest_entry": {
    "__step6_page_id": "poisson-problems-and-interior-harmonic-estimates",
    "dependency_level": 0,
    "deps": [
      "def-bounded-c-one-domain-boundary-charts-and-outward-normal",
      "def-countable-choice",
      "def-euclidean-spheres-and-closed-balls",
      "cor-double-orthogonal-complement-and-dimension",
      "cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases",
      "thm-bessel-inequality-and-finite-parseval-identity",
      "thm-real-power-continuity-and-derivatives",
      "thm-chain-rule-for-total-derivatives"
    ],
    "id": "lem-euclidean-balls-are-bounded-c-one-domains",
    "kind": "lemma",
    "provenance": {
      "proof": "ai-altered",
      "statement": "ai-altered"
    },
    "sources": {
      "references": [
        {
          "locator": "§2.8, printed pp. 44–49, ball boundary as a smooth graph with radial normal",
          "title": "Thomas Schmidt, Partial Differential Equations I (2026)",
          "url": "https://wwwp2.math.uni-hamburg.de/en/forschung/bereiche/am/geom-part-differentialgleichungen/dokumente/pde.pdf"
        }
      ]
    },
    "statement": "For n≥2, a Euclidean ball is a bounded C¹ domain; conventional one-based coordinate labels are explicitly aliased to the canonical zero-based coordinates.",
    "status": "draft",
    "title": "Euclidean balls are bounded C-one domains with radial outward normal"
  },
  "current_carriers": {
    "item_file_sha256": "bccf63375a2decd1e19db78c3de3b740005a15c316dd2b73dfd00247463d11b1",
    "manifest_sha256": "cf844e46a3517f2173093898491fe9926d2e757158e94fff6329ebca456b8b8a",
    "contract_sha256": "0ed17d4b8796861e70dd34595be51b451df92797ca9ece707345e527f72ba5ed"
  },
  "owner_authorization": {
    "owner": true,
    "reason": "Root explicitly authorized current full ball-lemma proof, supplier and complete direct-consumer review with the unknown historical manifest delta preserved."
  },
  "sources": [
    {
      "path": "research/frontier-37-owner-30-ball-lemma-current-owner-review.md",
      "sha256": "c53413a4dcffc2603825c277804d8792a2089c16e7896afeb9b9227b0893644b"
    },
    {
      "path": "research/frontier-37-owner-30-alpha-e-5a.md",
      "sha256": "5288680925b9753f8f016a517435402afac658874b9dd1b8e569f6a5d840e806"
    }
  ],
  "proof_checks": {
    "precheck": {
      "path": "research/frontier-37-owner-30-ball-lemma-owner-precheck-check.json",
      "sha256": "7163cbb8faf91f332933c777c0d4f92688fab2a0231d231c473e3388c1ba8a97"
    },
    "rendercheck": {
      "path": "research/frontier-37-owner-30-ball-lemma-owner-rendercheck-check.json",
      "sha256": "6102e696eb5bb31194f05156dd28609f54dcf68a743f63151bae8be6289df80b"
    },
    "strict-contract": {
      "path": "research/frontier-37-owner-30-ball-lemma-owner-strict-contract-check.json",
      "sha256": "547e060a9af76e5aa96cb4209fe1f2d28a164e9dc3c827ba27573dc0f0b86d8b"
    }
  },
  "review": {
    "current_item_and_contract_checked": true,
    "current_manifest_matches_item": true,
    "no_unresolved_defect": true,
    "current_proof_suppliers_and_direct_consumers_checked": true,
    "direct_consumers": [
      "lem-ball-poisson-kernel-is-positive-and-normalised",
      "lem-poisson-kernel-boundary-cap-and-complement-estimate",
      "thm-dirichlet-problem-on-a-ball-by-the-poisson-integral",
      "thm-green-function-for-a-ball-in-rn",
      "thm-poisson-kernel-for-a-ball-in-rn"
    ]
  }
}
```
