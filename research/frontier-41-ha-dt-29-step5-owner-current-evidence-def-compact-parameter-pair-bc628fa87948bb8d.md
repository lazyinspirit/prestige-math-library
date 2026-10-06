# Frozen-current owner recertification evidence proposal

Run: frontier-41-ha-dt-29
Item: def-compact-parameter-pair
All source bytes are unchanged from the actual 2026-10-06T04:22:18.697Z certificate. Only current contract/composite carriers changed. Existing full root proof review remains authoritative; fresh actual checks and frozen complete context/contract bindings are local evidence, not a new native reading or independent audit.

item_file_sha256: 177d5dce704834866b42dd623012d68358e4a06e970c3a85486876807299b5ed
manifest_sha256: 6174e4042031dea3b7b71b87d85ff3429ad46963eafc6142222f2e9136a0ec64
contract_sha256: 3db65bbe6d29d7412c4b213164eea5545f9267d005536939cbbf0d0a5a2978ea

```json
{
  "version": 1,
  "run": "frontier-41-ha-dt-29",
  "step": 5,
  "id": "def-compact-parameter-pair",
  "page": "formal-immersions-and-the-smale-hirsch-theorem",
  "batch": "17",
  "evidence_class": "current-owner-recertification-proposal",
  "owner": true,
  "owner_identity": "/root",
  "reason": "the current local foundation proofs and their actual direct uses are accepted",
  "current_carriers": {
    "guard_sha256": "e098d4aefb498df5d583afe349f893ef50f904ba66578055ba3ae8337bca2794",
    "judge_sha256": "177d5dce704834866b42dd623012d68358e4a06e970c3a85486876807299b5ed",
    "item_file_sha256": "177d5dce704834866b42dd623012d68358e4a06e970c3a85486876807299b5ed",
    "manifest_sha256": "6174e4042031dea3b7b71b87d85ff3429ad46963eafc6142222f2e9136a0ec64",
    "contract_sha256": "3db65bbe6d29d7412c4b213164eea5545f9267d005536939cbbf0d0a5a2978ea",
    "step5_subject_sha256": "06c8d78c27e4b47455d271478957fa6d913d30a33d1215c47dbb699b007a8123"
  },
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
    "path": "research/frontier-41-ha-dt-29-owner-final-carried-checks-20261006T045332Z/def-compact-parameter-pair-current-context.json",
    "sha256": "484c56751c3e053f6cf1d29ad65e6f68e3f6eb4ea4485bf966aec9b95c5aae96"
  },
  "proof_checks": {
    "precheck": {
      "path": "research/frontier-41-ha-dt-29-owner-final-carried-checks-20261006T045332Z/def-compact-parameter-pair-precheck.json",
      "sha256": "e0077cb9bf1a65203badb645c0b230c1ce9c23da10802ff0a64d5c83b3ae250c"
    },
    "rendercheck": {
      "path": "research/frontier-41-ha-dt-29-owner-final-carried-checks-20261006T045332Z/def-compact-parameter-pair-rendercheck.json",
      "sha256": "a8287438845591da64b730078ae53ad248d144f9c8d9028ac6a4c49dd6c56ef5"
    },
    "strict-contract": {
      "path": "research/frontier-41-ha-dt-29-owner-final-carried-checks-20261006T045332Z/def-compact-parameter-pair-strict-contract.json",
      "sha256": "65ef5100ce51ccbebe3e8a608502d64b8d2f9d10555e2f0f173403b9a28d9922"
    }
  },
  "definition_contract_applicability": null,
  "actual_prior_native_origin": "alpha-5a-batch-17.result.json",
  "original_creation_step": 3,
  "provenance": {
    "id": "def-compact-parameter-pair",
    "page": "formal-immersions-and-the-smale-hirsch-theorem",
    "batch": "17",
    "dependencies": [
      "def-compact-open-topology",
      "def-compact-space",
      "def-formal-immersion-between-smooth-manifolds",
      "def-homotopy-relative-and-path-homotopy",
      "def-smooth-family-of-maps-and-evaluation-map",
      "def-smooth-manifold",
      "def-space-of-immersions-and-space-of-formal-immersions",
      "def-weak-compact-open-smooth-topology-on-mapping-spaces",
      "thm-the-exponential-law"
    ],
    "sha256": "c2a9f84839edc9b58bfec1e8868267a00141541d89c1f1bbd0806c32a847b151",
    "author_result": "step3b-pair-formal-immersions-and-the-smale-hirsch-theorem-312f589048b7319f",
    "owner_recertification": {
      "sha256": "b61781a8be81392c3b6adddd4ff2706c108403be874870fcf10536a989d49307",
      "at": "2026-10-05T20:06:58.130Z"
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
      "def-formal-immersion-between-smooth-manifolds",
      "def-homotopy-relative-and-path-homotopy",
      "def-smooth-family-of-maps-and-evaluation-map",
      "def-smooth-manifold",
      "def-space-of-immersions-and-space-of-formal-immersions",
      "def-weak-compact-open-smooth-topology-on-mapping-spaces",
      "thm-the-exponential-law"
    ],
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
    "context_items": [
      {
        "id": "cor-regular-homotopy-classes-of-immersions-are-formal-homotopy-classes",
        "guard_sha256": "648a33bb384bb007dd5688d9bf0fe00f814f506ebba29a72ca441ab9f66a3e3a"
      },
      {
        "id": "def-compact-open-topology",
        "guard_sha256": "223e59781658a32e64d1538528f609a33fbc334232efe710775d0856e8b10890"
      },
      {
        "id": "def-compact-space",
        "guard_sha256": "ed5cac07dd4abff63339ef539e4a9a848ed2a03db8c27a592f1024d8e329e8ee"
      },
      {
        "id": "def-formal-immersion-between-smooth-manifolds",
        "guard_sha256": "d323a2dcfc89246f4deb1f371fa86b24feae78d846d4a8b0a6d96d70f27dfe09"
      },
      {
        "id": "def-homotopy-relative-and-path-homotopy",
        "guard_sha256": "63aa840d1a96259a22937278a12409b2d9b53a6b7c40fe568f662888249704d7"
      },
      {
        "id": "def-regular-homotopy-of-immersions",
        "guard_sha256": "a9cca49d99ebb97131a45d32e59897df798c2000aa0dbcab3146ed78af1e5a44"
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
        "id": "def-space-of-immersions-and-space-of-formal-immersions",
        "guard_sha256": "85ca8060acc8aa98c38f484796b93cf14e49986324538eb2ec9d712ac6848892"
      },
      {
        "id": "def-weak-compact-open-smooth-topology-on-mapping-spaces",
        "guard_sha256": "839ef7b345bb6e90254fb3e683f27bd53fd0a1a93920d71de29de6668fb797f5"
      },
      {
        "id": "lem-formal-immersion-homotopies-extend-over-a-subcritical-handle",
        "guard_sha256": "e8d0d3766b23f41fd66706165a3fb3a14c023e1e1e624b21e6ec83d4c03c0b79"
      },
      {
        "id": "lem-parametric-immersion-extension-on-a-disk",
        "guard_sha256": "2e600fa99a2f89bfa4536103f1de25042217f3416cbabaf8435604e37fa433d1"
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
        "id": "thm-smale-hirsch-for-open-source-manifolds",
        "guard_sha256": "6c2eb95d28fcaffdf0dcd57007935b0f5d382e86dd1deed4c8701935c287ae6e"
      },
      {
        "id": "thm-smale-hirsch-immersion-theorem",
        "guard_sha256": "91fceb53385a508a7941dc9c97bb9326d0ffb33308c34c1e6bf2a2726ec8537c"
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
