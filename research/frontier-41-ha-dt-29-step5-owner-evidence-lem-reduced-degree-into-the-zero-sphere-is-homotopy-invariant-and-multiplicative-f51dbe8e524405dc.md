# Owner certification evidence proposal

Run: frontier-41-ha-dt-29
Item: lem-reduced-degree-into-the-zero-sphere-is-homotopy-invariant-and-multiplicative
Proposal only: actual root review and real focused local checks; no owner receipt or whole-stage certification has been recorded.

item_file_sha256: e5f0d2cf4f32c399e21bccb4aea83b40fa0433262c2d8ae13d69021844a21092
manifest_sha256: 330cae76c06ad6ac63a19359af778f6f46bc522c62725572045c177cbda1a61b
contract_sha256: 608b4efdd5a1de623b02c5dd392bca0f1f412d1ecf78d7d955d3ee3241931934

```step5-manifest-repair
{
  "version": 1,
  "policy": "step5-manifest-repair-evidence-v1",
  "run": "frontier-41-ha-dt-29",
  "step": 5,
  "id": "lem-reduced-degree-into-the-zero-sphere-is-homotopy-invariant-and-multiplicative",
  "page": "vector-field-index-euler-characteristic-and-poincare-hopf",
  "batch": "7",
  "repair_kind": "current-proof-manifest-review",
  "baseline_manifest_sha256": "9d3a2fe2f3aa08da4513149586a13ea28f111f82d87a9569dba23b6e7445ff8b",
  "current_manifest_sha256": "330cae76c06ad6ac63a19359af778f6f46bc522c62725572045c177cbda1a61b",
  "current_manifest_entry": {
    "__step6_page_id": "vector-field-index-euler-characteristic-and-poincare-hopf",
    "dependency_level": 1,
    "deps": [
      "def-reduced-degree-into-the-zero-sphere",
      "def-euclidean-spheres-and-closed-balls",
      "def-subspace-topology-top",
      "thm-connected-subsets-of-r-are-intervals",
      "thm-product-of-connected-spaces"
    ],
    "id": "lem-reduced-degree-into-the-zero-sphere-is-homotopy-invariant-and-multiplicative",
    "justified_by": [],
    "kind": "lemma",
    "provenance": {
      "proof": "ai-altered",
      "statement": "ai-altered"
    },
    "sources": {
      "references": [
        {
          "locator": "Degree opening paragraph, printed p. 134 (degree properties: homotopy invariance and multiplicativity), together with the reduced homology $\\widetilde H_0$ of §2.1",
          "title": "Allen Hatcher, Algebraic Topology, §2.1 and §3.1",
          "url": "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
        }
      ],
      "scraped": []
    },
    "statement": "Let $(P,s)$ be a balanced oriented finite $0$-manifold, so that every map\n$P\\to S^0$ has a reduced degree, and let $f:P\\to S^0$ be a map\n([[def-reduced-degree-into-the-zero-sphere]]).\n\n(i) If $F:P\\times[0,1]\\to S^0$ is continuous and $F_t(x):=F(x,t)$, then\n$F_t=F_0$ for every $t\\in[0,1]$; in particular $\\deg F_t=\\deg F_0$.\n\n(ii) If $g:S^0\\to S^0$ is any map and $\\deg g$ denotes its reduced degree as a\nself-map of $S^0$, then $\\deg(g\\circ f)=\\deg(g)\\deg(f)$.",
    "strategy": "**Proof technique:** direct; split the composition law by the three possible\nreduced degrees of the self-map $g$.\n\n1.1 The product $P\\times[0,1]$ is the disjoint union of the connected subsets $\\{x\\}\\times[0,1]$, one for each $x\\in P$; a continuous map from a connected space into $S^0$ is constant, so $F$ is constant on each $\\{x\\}\\times[0,1]$, hence $F_t(x)=F(x,t)=F(x,0)=F_0(x)$ for all $x\\in P$ and $t\\in[0,1]$; equal maps have equal reduced degree, which proves (i). [F2, F3, algebra]\n\n1.2 Suppose $g$ is not constant. A map $S^0\\to S^0$ is determined by the pair $\\bigl(g(+1),g(-1)\\bigr)$, so a nonconstant $g$ sends $+1$ and $-1$ to different values; hence $g$ is either the identity, with $\\sigma:=+1$ and $g(y)=y$ for both $y$, or the antipodal map $g(y)=-y$, with $\\sigma:=-1$, so that $g(y)=\\sigma y$ for all $y\\in S^0$; then $g\\circ f=\\sigma f$ and, by linearity of the defining signed count, $\\deg(g\\circ f)=\\frac12\\sum_x s(x)\\sigma f(x)=\\sigma\\deg(f)$, while $\\sigma=\\deg(g)$ by [F1], the identity and the antipodal map having reduced degrees $+1$ and $-1$; thus $\\deg(g\\circ f)=\\deg(g)\\deg(f)$. [F1, algebra]\n\n2.1 If $g$ is constant with value $c\\in S^0$, then $g\\circ f$ is the constant map $c$ and $\\deg(g\\circ f)=\\frac12 c\\sum_{x\\in P}s(x)=0$ by balance, while $\\deg(g)=\\frac12(c-c)=0$ by [F1]; hence again $\\deg(g\\circ f)=0=\\deg(g)\\deg(f)$, which completes (ii). [F1, step 1.2, algebra] ∎",
    "title": "Reduced degree into the 0-sphere is homotopy invariant and multiplicative"
  },
  "current_carriers": {
    "guard_sha256": "819390412ba5c198f3d7c3fc7602724f9d5d08e4ce944ce6cfc0b2863b58ee3e",
    "judge_sha256": "e5f0d2cf4f32c399e21bccb4aea83b40fa0433262c2d8ae13d69021844a21092",
    "item_file_sha256": "e5f0d2cf4f32c399e21bccb4aea83b40fa0433262c2d8ae13d69021844a21092",
    "manifest_sha256": "330cae76c06ad6ac63a19359af778f6f46bc522c62725572045c177cbda1a61b",
    "contract_sha256": "608b4efdd5a1de623b02c5dd392bca0f1f412d1ecf78d7d955d3ee3241931934",
    "step5_subject_sha256": "bd92377b8d5e6ff87e16d4813e318524fee5320410e6390c2ddd5f2966deb533"
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
      "path": "research/frontier-41-ha-dt-29-owner-four-carried-current-checks-20261006T041746Z/lem-reduced-degree-into-the-zero-sphere-is-homotopy-invariant-and-multiplicative-precheck.json",
      "sha256": "1818edd1cf181ae5b1df0fb4bb84c7507f0f1a9259f83cdb6750e2c2b79eed8a"
    },
    "rendercheck": {
      "path": "research/frontier-41-ha-dt-29-owner-four-carried-current-checks-20261006T041746Z/lem-reduced-degree-into-the-zero-sphere-is-homotopy-invariant-and-multiplicative-rendercheck.json",
      "sha256": "9d1e709f9d553f232bcb13b9deb2d8009cdd3fc4d4a6f864c8d8676d3fc8f2c8"
    },
    "strict-contract": {
      "path": "research/frontier-41-ha-dt-29-owner-four-carried-current-checks-20261006T041746Z/lem-reduced-degree-into-the-zero-sphere-is-homotopy-invariant-and-multiplicative-strict-contract.json",
      "sha256": "5177ec9224f1fd8cfad66161143d89e88ea4972699726a8631361e3c196dc64f"
    }
  },
  "current_item_unchanged": true,
  "review": {
    "current_item_and_contract_checked": true,
    "current_manifest_matches_item": true,
    "no_unresolved_defect": true,
    "direct_consumers": [
      "def-local-fixed-point-index",
      "lem-index-sum-of-an-outward-field-is-the-gauss-degree",
      "lem-local-fixed-point-index-is-coordinate-and-neighbourhood-independent",
      "lem-local-fixed-point-index-is-invariant-under-diffeomorphism-conjugation",
      "lem-negation-scales-the-local-index-by-minus-one-to-the-dimension",
      "lem-vector-field-index-is-independent-of-chart-ball-and-trivialization",
      "prop-small-time-flow-fixed-point-indices-agree-with-vector-field-zero-indices",
      "thm-index-of-a-nondegenerate-fixed-point",
      "thm-index-of-a-nondegenerate-vector-field-zero"
    ],
    "current_proof_suppliers_and_direct_consumers_checked": true,
    "current_proof_checked": true,
    "current_suppliers_checked": true,
    "current_direct_consumers_checked": true,
    "suppliers": [
      "def-euclidean-spheres-and-closed-balls",
      "def-reduced-degree-into-the-zero-sphere",
      "def-subspace-topology-top",
      "thm-connected-subsets-of-r-are-intervals",
      "thm-product-of-connected-spaces"
    ],
    "context_items": [
      {
        "id": "def-euclidean-spheres-and-closed-balls",
        "guard_sha256": "74347f0b2c9104108c884ac47089f25b23e7298eb10d5825da2dd37765cab71b"
      },
      {
        "id": "def-local-fixed-point-index",
        "guard_sha256": "2dcf748a1e6290a6184a8bdb009a4d5ad8bef896f5e2961b5ce82348c49556fa"
      },
      {
        "id": "def-reduced-degree-into-the-zero-sphere",
        "guard_sha256": "bae218847c87d608e14b6803f332b2a850825427c806bb1a0208776a2099ead3"
      },
      {
        "id": "def-subspace-topology-top",
        "guard_sha256": "9179157ceac35a911f80decd2b48e818bb00720a5405237266fe9e55267ef6d9"
      },
      {
        "id": "lem-index-sum-of-an-outward-field-is-the-gauss-degree",
        "guard_sha256": "dafa86b64692e653a2ec596c76bfc788874cd0995b144acdcc4c9ed540cd7ad1"
      },
      {
        "id": "lem-local-fixed-point-index-is-coordinate-and-neighbourhood-independent",
        "guard_sha256": "7af2a0dff87bc72c0405d14cd555bbcc84e767fa01ebc421cc0c0c30d555ce09"
      },
      {
        "id": "lem-local-fixed-point-index-is-invariant-under-diffeomorphism-conjugation",
        "guard_sha256": "d187294fa7cfccf76d1e888aa1f89ac705f1ca53b9a1cbf3d30ffffc1ab50c50"
      },
      {
        "id": "lem-negation-scales-the-local-index-by-minus-one-to-the-dimension",
        "guard_sha256": "44b91f3f79dfeb5bc2dab57367e448014af9661e8968500447dedd8b05b34a95"
      },
      {
        "id": "lem-vector-field-index-is-independent-of-chart-ball-and-trivialization",
        "guard_sha256": "efab78e44b0c5f6b52adc8c863563edbd44ec54562f905556c9d8678319a0556"
      },
      {
        "id": "prop-small-time-flow-fixed-point-indices-agree-with-vector-field-zero-indices",
        "guard_sha256": "7f122cd11f00fa79785aeb726525f465a77dfaa91f07e101dfb411b3d3d94732"
      },
      {
        "id": "thm-connected-subsets-of-r-are-intervals",
        "guard_sha256": "7bb9769a058755a59fa2936a387dbfd97a2461dbc26cc0c64cadd6149622bb44"
      },
      {
        "id": "thm-index-of-a-nondegenerate-fixed-point",
        "guard_sha256": "a21fde36387d6d2fb0a47d9cfbe5b33c00be71fbf4b935aab42ffd840b25d003"
      },
      {
        "id": "thm-index-of-a-nondegenerate-vector-field-zero",
        "guard_sha256": "94ed2cff3d1cd4fcbf662916fd0ee74d2798a9802a272cbfffe5b0a908b3f092"
      },
      {
        "id": "thm-product-of-connected-spaces",
        "guard_sha256": "95bd66f2cf56b77f7845438aea64700ae4fde76131ff56ca8a1e201abcdc6045"
      }
    ]
  }
}
```
