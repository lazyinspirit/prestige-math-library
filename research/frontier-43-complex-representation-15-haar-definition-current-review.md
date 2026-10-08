# Current Haar Definition manifest review

Run frontier-43-complex-representation-15; subject def-complex-haar-l-infinity-space.

Root authorizes current-definition-manifest-review for def-complex-haar-l-infinity-space after native Step5 manifest synchronization; the unavailable historical manifest projection remains explicitly unknown.

Historical manifest delta remains unknown. The original Step3 origin is retained. Current evidence and actual direct-consumer uses are bound in the accompanying JSON; root owns API recertification and normal gates.

```step5-manifest-repair
{
  "version": 1,
  "policy": "step5-manifest-repair-evidence-v1",
  "run": "frontier-43-complex-representation-15",
  "step": 5,
  "id": "def-complex-haar-l-infinity-space",
  "page": "amenability-reiter-nets-and-folner-conditions",
  "batch": "2",
  "repair_kind": "current-definition-manifest-review",
  "baseline_manifest_sha256": "bd370893bdb38b18190c91b2fb04b1b8a43fba821dd1fa30b28d58f3cb326e72",
  "current_manifest_sha256": "5e9e73bb46f3054ee98608df4eaeb537cfe2c61947fd3a840ff2a3d2f1ae30b7",
  "current_manifest_entry": {
    "id": "def-complex-haar-l-infinity-space",
    "kind": "definition",
    "title": "Complex $L^\\infty$ space of a locally compact group",
    "deps": [
      "def-complex-haar-lp-spaces-and-compactly-supported-functions",
      "def-essential-supremum-with-respect-to-a-measure",
      "def-measure-null-set-and-almost-everywhere",
      "def-measure-space",
      "def-complex-conjugate-real-imaginary-part-and-modulus",
      "lem-complex-conjugation-and-modulus-laws",
      "prop-closure-properties-of-measurable-functions-used-by-the-integral",
      "def-left-haar-integral-and-left-haar-measure"
    ],
    "dependency_level": 0,
    "statement": "Let $G$ be a locally compact Hausdorff group with fixed left Haar measure $\\mu$\n([[def-left-haar-integral-and-left-haar-measure]]). Use the complex-valued\nmeasurability convention and modulus from\n[[def-complex-haar-lp-spaces-and-compactly-supported-functions]]. For a Borel\nmeasurable $f:G\\to\\mathbb C$, set\n$$\\|f\\|_{\\infty,\\mu}:=\\inf\\{t>0:\\mu(\\{x\\in G:|f(x)|>t\\})=0\\},$$\nwith infimum $+\\infty$ when the set of such $t$ is empty. Let\n$\\mathcal L^\\infty(G,\\mu;\\mathbb C)$ be the complex measurable functions with\nfinite $\\|f\\|_{\\infty,\\mu}$, identify $f\\sim g$ when $f=g$ $\\mu$-almost\neverywhere, and write\n$$L^\\infty(G,\\mu;\\mathbb C):=\\{[f]:f\\in\\mathcal L^\\infty(G,\\mu;\\mathbb C)\\}.$$\nAddition and complex scalar multiplication are $[f]+[g]=[f+g]$ and\n$\\alpha[f]=[\\alpha f]$, and the norm is $\\|[f]\\|_\\infty:=\\|f\\|_{\\infty,\\mu}$.\nThis is the complex $L^\\infty$ space used on the amenability page; its\nfunctions are equivalence classes, not chosen representatives.",
    "strategy": "Representatives differing almost everywhere give the same pointwise operations and essential supremum. Real and imaginary parts of sums and complex scalar multiples remain measurable. The essential-supremum threshold sets give closure under addition and scalar multiplication, the triangle inequality by |f+g|<=|f|+|g| and homogeneity by scaling. If the essential supremum is zero, each set {|f|>1/n} is null; their countable union is null and f vanishes outside it. This proves the class operations are well-defined and the displayed quantity is a norm. No use of Choice.",
    "provenance": {
      "statement": "literature-derived",
      "proof": "ai-altered"
    },
    "sources": {
      "references": [
        {
          "title": "Sheldon Axler, Measure, Integration & Real Analysis",
          "url": "https://measure.axler.net/MIRA.pdf",
          "locator": "§7A, Definitions 7.1 and 7.3 (printed pp. 194–195); §7B, Definitions 7.15–7.18 (printed pp. 202–204)"
        }
      ]
    },
    "__step6_page_id": "amenability-reiter-nets-and-folner-conditions"
  },
  "current_carriers": {
    "guard_sha256": "af80bff8ae887f1ff9c0f7a5c9ec04f6e058ffbbb21f7673086a35b65ae98b3b",
    "judge_sha256": "f73f65499f716576746e3007ee73c7b623eec65b3825c6f7f40d188a6ed4794b",
    "item_file_sha256": "f73f65499f716576746e3007ee73c7b623eec65b3825c6f7f40d188a6ed4794b",
    "manifest_sha256": "5e9e73bb46f3054ee98608df4eaeb537cfe2c61947fd3a840ff2a3d2f1ae30b7",
    "contract_sha256": "5da339c58f5b2707bc6ab4d309851721d0530724cf264b656d3b7dee3f2858f8",
    "step5_subject_sha256": "76508d88bfb94c4238dd02be58c49ddcaa2921e3a5082a27ed1347a7f01e73dd"
  },
  "historical_delta_unknown": true,
  "owner_authorization": {
    "owner": true,
    "reason": "Root authorizes current-definition-manifest-review for def-complex-haar-l-infinity-space after native Step5 manifest synchronization; the unavailable historical manifest projection remains explicitly unknown."
  },
  "sources": [
    {
      "path": "research/frontier-43-complex-representation-15-haar-definition-current-review.json",
      "sha256": "b7d4650f7328222116a0c4574b3b2acdd768a2a2f18122a257783882dd19455f"
    },
    {
      "path": "research/frontier-43-complex-representation-15-alpha-batch-2-5a.md",
      "sha256": "30f56c2700e26ef4025bcbc7e62401ba35832566b320fb535f0c21d6959690bb"
    },
    {
      "path": "research/frontier-43-complex-representation-15-dispatch/alpha-5a-batch-2.result.json",
      "sha256": "179c659d9ae7650d59df2a1d1242e46ffd5a9fee1336ba2532c379a09fc589d0"
    }
  ],
  "review": {
    "current_item_and_contract_checked": true,
    "current_manifest_matches_item": true,
    "no_unresolved_defect": true,
    "current_definition_and_direct_consumers_checked": true,
    "direct_consumers": [
      "cex-the-free-group-on-two-generators-is-not-amenable",
      "def-left-invariant-mean-on-l-infinity-of-a-locally-compact-group",
      "def-left-uniformly-continuous-bounded-functions-on-a-locally-compact-group",
      "ex-compact-groups-have-a-constant-reiter-net",
      "lem-a-reiter-net-has-an-invariant-mean-cluster-point",
      "lem-a-topological-invariant-mean-yields-norm-approximately-invariant-densities",
      "lem-a-ucb-invariant-mean-yields-a-topological-invariant-mean",
      "lem-averages-over-probability-densities-attain-the-essential-supremum",
      "lem-l1-convolution-with-an-l-infinity-function-is-left-uniformly-continuous",
      "lem-l1-probability-densities-are-weak-star-dense-in-the-mean-set",
      "prop-compact-and-locally-compact-abelian-groups-are-amenable"
    ]
  }
}
```
