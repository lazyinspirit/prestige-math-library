# Owner certification evidence proposal

Run: frontier-41-ha-dt-29
Item: def-compact-parameter-pair
Proposal only: actual root review and real focused local checks; no owner receipt or whole-stage certification has been recorded.

item_file_sha256: 177d5dce704834866b42dd623012d68358e4a06e970c3a85486876807299b5ed
manifest_sha256: 6174e4042031dea3b7b71b87d85ff3429ad46963eafc6142222f2e9136a0ec64
contract_sha256: 98761d3375cf5f25f36c71d657bdc7b542f4235dabeaf62f1bbf2d54206cfb61

```step5-manifest-repair
{
  "version": 1,
  "policy": "step5-manifest-repair-evidence-v1",
  "run": "frontier-41-ha-dt-29",
  "step": 5,
  "id": "def-compact-parameter-pair",
  "page": "formal-immersions-and-the-smale-hirsch-theorem",
  "batch": "17",
  "repair_kind": "current-definition-manifest-review",
  "baseline_manifest_sha256": "29c5db94b68205f95c1bd15be581d77cc7490b72883a5a4e4f97191ce0949808",
  "current_manifest_sha256": "6174e4042031dea3b7b71b87d85ff3429ad46963eafc6142222f2e9136a0ec64",
  "current_manifest_entry": {
    "__step6_page_id": "formal-immersions-and-the-smale-hirsch-theorem",
    "dependency_level": 2,
    "deps": [
      "def-formal-immersion-between-smooth-manifolds",
      "def-weak-compact-open-smooth-topology-on-mapping-spaces",
      "def-space-of-immersions-and-space-of-formal-immersions",
      "def-smooth-manifold",
      "def-compact-space",
      "def-smooth-family-of-maps-and-evaluation-map",
      "def-homotopy-relative-and-path-homotopy",
      "thm-the-exponential-law",
      "def-compact-open-topology"
    ],
    "id": "def-compact-parameter-pair",
    "justified_by": [],
    "kind": "definition",
    "provenance": {
      "proof": "not-applicable",
      "statement": "literature-derived"
    },
    "sources": {
      "references": [
        {
          "title": "John Francis, The h-Principle, Lecture 3: Immersion theory (notes by O. Gwilliam), PDF pp. 1–4: Proposition 2.2 (disk), Definition 2.5 (Serre fibration), Definition 2.6 and Proposition 2.7 (flexible sheaves)",
          "url": "https://sites.math.northwestern.edu/jnf960/classes/hprin/3immersions.pdf"
        },
        {
          "title": "John Francis, The h-Principle, Lectures 5 & 6: The Hirsch–Smale theorem (notes by C. Elliott), PDF pp. 1–4: Lemma 1.1, Corollary 1.2, Lemma 1.3 (Hirsch–Smale Fibration Lemma, n > k), Theorems 1.5 and 1.7, Lemma 1.6, Lemma 1.9",
          "url": "https://sites.math.northwestern.edu/jnf960/classes/hprin/5%266smalehirsch.pdf"
        },
        {
          "title": "Janek Wilhelm, The Smale–Hirsch Immersion Theorem and other Applications to Closed Manifolds, §§1–2, PDF pp. 1–3 (Theorem 1, relative parametric C⁰-dense h-principle for immersions with q > n; microextension and local h-principle 8.3.1)",
          "url": "https://www2.mathematik.hu-berlin.de/~wendl/Sommer2025/hPrinzip/20250530_Wilhelm.pdf"
        }
      ]
    },
    "statement": "A **compact parameter pair** is a pair $(P,Q)$ in which $P=P_0\\times[0,1]^d$, where $P_0$ is a compact smooth manifold without boundary (possibly empty) and $d\\ge0$, and $Q\\subseteq P$ is closed (possibly empty); $P$ is the **parameter manifold** and $Q$ the **relative parameter set**. Smoothness in the interval coordinates means local smooth extendibility to open Euclidean neighbourhoods, including at corners. This class contains spheres, cubes and intervals and is closed under products with $[0,1]$, so it also contains the homotopy parameters used below. The smoothing constructions extend the interval coordinates by clamping them before convolution; they do not require a tubular neighbourhood theorem for manifolds with corners.\n\nLet $M$ and $N$ be smooth manifolds and let $(P,Q)$ be a compact parameter pair.\n\n- A **smooth $P$-family of maps $M\\to N$** is a smooth map $F:P\\times M\\to N$, with **slices** $F_p:=F(p,\\cdot)$; $F$ is also called the evaluation map of the family ([[def-smooth-family-of-maps-and-evaluation-map]]).\n- A **continuous $P$-family** is a continuous map $\\Phi:P\\to C^\\infty(M,N)$ for the weak compact-open $C^\\infty$ topology ([[def-weak-compact-open-smooth-topology-on-mapping-spaces]]). By the exponential law its **adjoint** $P\\times M\\to N$, $(p,x)\\mapsto\\Phi(p)(x)$, is continuous ([[thm-the-exponential-law]], [[def-compact-open-topology]]). The family is **smooth** when it is the transpose of a smooth $P$-family, i.e. $\\Phi(p)=F_p$ for a smooth $F$.\n- A **family of formal immersions** over $P$ is a continuous map $\\Phi:P\\to\\operatorname{FImm}(M,N)$ ([[def-space-of-immersions-and-space-of-formal-immersions]]); it is **smooth** when it is the transpose of a pair $(f,F)$ of smooth maps $f:P\\times M\\to N$, $F:P\\times TM\\to TN$ with $F$ a fibrewise injective smooth bundle map over $f$ ([[def-formal-immersion-between-smooth-manifolds]]). A family is **genuine** when its slices lie in $\\operatorname{Imm}(M,N)$, and **holonomic** on a subset $A\\subseteq P$ when $F_p=df_p$ for every $p\\in A$; it is **smoothly holonomic** on $A$ when some open neighbourhood $W$ of $A$ in $P$ carries a smooth family $g:W\\times M\\to N$ with $f=g$ and $F=dg$ on $W\\times M$.\n- A **homotopy of $P$-families** of formal immersions is a continuous map $H:P\\times[0,1]\\to\\operatorname{FImm}(M,N)$, read as a family parametrized by the compact manifold with boundary $P\\times[0,1]$; it is **relative to $Q$** when $H(q,s)=H(q,0)$ for all $q\\in Q$ and $s\\in[0,1]$, and **relative to $\\partial P$** in the smooth case when it is constant along $\\partial P\\times[0,1]$. A homotopy is **smooth** when it is given by a smooth family over $P\\times[0,1]$; a smooth homotopy of genuine families is a homotopy through genuine families, i.e. a **regular homotopy** when $P$ is a point.",
    "strategy": "Definition. It fixes the parameter pairs and the relative holonomicity conventions used by the parametric statements of this page: compact boundaryless parameter manifolds with a closed relative set, smooth adjoints, and homotopies over the compact manifold with boundary P x [0,1]. Nothing is proved.",
    "title": "Compact parameter pairs and relative families"
  },
  "current_carriers": {
    "guard_sha256": "e098d4aefb498df5d583afe349f893ef50f904ba66578055ba3ae8337bca2794",
    "judge_sha256": "177d5dce704834866b42dd623012d68358e4a06e970c3a85486876807299b5ed",
    "item_file_sha256": "177d5dce704834866b42dd623012d68358e4a06e970c3a85486876807299b5ed",
    "manifest_sha256": "6174e4042031dea3b7b71b87d85ff3429ad46963eafc6142222f2e9136a0ec64",
    "contract_sha256": "98761d3375cf5f25f36c71d657bdc7b542f4235dabeaf62f1bbf2d54206cfb61",
    "step5_subject_sha256": "8dccb2adfab13a59885f410ce50ffcc64d0c14daba76b2111a93aee95f465d4d"
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
      "path": "research/frontier-41-ha-dt-29-owner-stage3-current-checks-20261006T033236Z/def-compact-parameter-pair-precheck.json",
      "sha256": "ffbd11375ef2826576d8c3f78958203946dcce9ba2167c31f950b13d1299f5c2"
    },
    "rendercheck": {
      "path": "research/frontier-41-ha-dt-29-owner-stage3-current-checks-20261006T033236Z/def-compact-parameter-pair-rendercheck.json",
      "sha256": "050e454ed71a5fb24623f7ccd52391ce6ed5d39853b0ef1ddecf65c2ad11deb0"
    },
    "strict-contract": {
      "path": "research/frontier-41-ha-dt-29-owner-stage3-current-checks-20261006T033236Z/def-compact-parameter-pair-strict-contract.json",
      "sha256": "a9f0578fc3183cfe06de205b2d16afa154548cb591fdddbdf335c18f58af7798"
    }
  },
  "review": {
    "current_item_and_contract_checked": true,
    "current_manifest_matches_item": true,
    "no_unresolved_defect": true,
    "direct_consumers": [
      "cor-regular-homotopy-classes-of-immersions-are-formal-homotopy-classes",
      "def-regular-homotopy-of-immersions",
      "lem-formal-immersion-homotopies-extend-over-a-subcritical-handle",
      "lem-parametric-immersion-extension-on-a-disk",
      "lem-smooth-families-and-path-components-in-the-weak-topology",
      "lem-smoothing-formal-immersion-families",
      "lem-smoothing-genuine-immersion-families",
      "thm-smale-hirsch-for-open-source-manifolds",
      "thm-smale-hirsch-immersion-theorem"
    ],
    "current_definition_and_direct_consumers_checked": true
  }
}
```
