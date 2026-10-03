# Exact current definition manifest review

Private constrained manifest evidence under commit1517a1152. No old manifest projection is supplied or invented. The original Step3 origin and immutable Step5 baseline are preserved; all current carriers and5 direct consumer reviews are hash-bound. This is proof inspection and private evidence, not a new independent audit or certification. Root owns recertification.

```step5-manifest-repair
{
  "version": 1,
  "policy": "step5-manifest-repair-evidence-v1",
  "repair_kind": "current-definition-manifest-review",
  "run": "frontier-38-owner-30",
  "step": 5,
  "id": "def-euclidean-hypersurface-normal-shape-operator-and-curvature",
  "page": "fourier-restriction-and-the-stein-tomas-theorem",
  "batch": "6",
  "baseline_manifest_sha256": "41716b22601b08a42daca8597536d16198381f59eae67ee8e2ad9559bd040266",
  "current_manifest_sha256": "2e5bdeb7fe8387b553d3ae77fada8eb053e99bfb4b6ab035ba164fe2469a3692",
  "current_manifest_entry": {
    "id": "def-euclidean-hypersurface-normal-shape-operator-and-curvature",
    "kind": "definition",
    "title": "Euclidean hypersurface normals, shape operators and curvature",
    "status": "draft",
    "origin": "pipeline",
    "pipeline_run": "frontier-38-owner-30",
    "deps": [
      "def-embedded-submanifold-and-slice-chart",
      "def-total-derivative-in-euclidean-space",
      "def-determinant-of-a-linear-operator"
    ],
    "provenance": {
      "statement": "literature-derived",
      "proof": "not-applicable"
    },
    "sources": {
      "references": [
        {
          "title": "J. Lebl, Basic Analysis II, §8.5",
          "url": "https://www.jirka.org/ra/html/sec_svinvfuncthm.html",
          "locator": "Theorem 8.5.1 inverse derivative formula; the smooth adjugate bootstrap and finite localization are derived locally."
        },
        {
          "title": "Ved Datar, Lectures on Riemannian Geometry",
          "url": "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf",
          "locator": "Definition 14.2.1 and Corollary 14.2.2, printed p.104; Example 14.2.4, p.105; Definition 14.2.7 and Remark 14.2.8, p.106. The explicit graph determinant is derived locally in this item or its suppliers."
        }
      ]
    },
    "statement": "For $n\\ge2$, a smooth embedded hypersurface $S\\subset\\mathbb R^n$ has the embedded-submanifold meaning of [[def-embedded-submanifold-and-slice-chart]]. If $X:U\\subset\\mathbb R^{n-1}\\to S$ is a smooth local parametrization of rank $n-1$, define $T_{X(y)}S=\\operatorname{im}DX(y)$ with its Euclidean inner product. A smooth local unit normal is a smooth map $\\nu:V\\to\\mathbb R^n$ on a relatively open subset $V\\subseteq S$ with $|\\nu|=1$ and $\\nu\\perp TS$. Define the Euclidean shape operator by $S_\\nu v=-d\\nu_p(v)$ on $T_pS$, and the extrinsic Gaussian (Gauss–Kronecker) curvature by $K_\\nu(p)=\\det S_\\nu(p)$. Here $d\\nu_p(DX(y)u)=D(\\nu\\circ X)(y)u$. Smooth functions and compact supports on $S$ use its subspace topology and these local parametrizations. Nonvanishing curvature means $K_\\nu\\ne0$ for either choice of local unit normal at each point. The graph and localization lemma [[lem-smooth-euclidean-hypersurface-graph-and-localization]] proves that these definitions are independent of parametrization, that the derivative takes values in $T_pS$, and that changing the unit normal only changes the sign of the shape operator. This is the Euclidean specialization of the usual Weingarten definition; the equivalence is proved there, without requiring the later Riemannian theory.",
    "strategy": "Complete local finite-dimensional Euclidean bridge; exact proof in item.",
    "dependency_level": 0,
    "justified_by": [
      "lem-smooth-euclidean-hypersurface-graph-and-localization"
    ],
    "__step6_page_id": "fourier-restriction-and-the-stein-tomas-theorem"
  },
  "current_carriers": {
    "item_file_sha256": "c9fbfcc3cbbdb7f0ffc7d9749de08cee37b614b20e0e5e314141ba4e31bd58cd",
    "manifest_sha256": "2e5bdeb7fe8387b553d3ae77fada8eb053e99bfb4b6ab035ba164fe2469a3692",
    "contract_sha256": "4765a14349457a1a3246e4dad8715fbddfd96c5c9ff7a63aefe06f09be166fbb"
  },
  "historical_delta_unknown": true,
  "owner_authorization": {
    "owner": true,
    "reason": "Owner approved current-content review with historical uncertainty preserved in research/frontier-38-owner-30-step5-historical-owner-checkpoint.json and directed exact two Step3-origin geometry manifest review; no generic manifest exemption or historical reconstruction is authorized.",
    "approval": {
      "path": "research/frontier-38-owner-30-step5-historical-owner-checkpoint.json",
      "sha256": "2ff8155aa66b02d6717857774ecfb058f847302c9f814ffcff50bcb4cf39d107",
      "obligation": "touched:6:def-euclidean-hypersurface-normal-shape-operator-and-curvature"
    }
  },
  "sources": [
    {
      "path": "research/frontier-38-owner-30-step5-fourier-resolution-geometry-manifest-review.json",
      "sha256": "35da2c3b28ea2ddf2069e9f42300d461884d3835155b1df8caf236a7b1f0ec2e"
    }
  ],
  "review": {
    "current_item_and_contract_checked": true,
    "current_manifest_matches_item": true,
    "no_unresolved_defect": true,
    "current_definition_and_direct_consumers_checked": true,
    "direct_consumers": [
      "cor-stein-tomas-for-compact-hypersurfaces-with-nonzero-curvature",
      "lem-compact-curved-hypersurface-finite-graph-cover",
      "lem-localized-curved-patch-measure-transform-decay",
      "lem-shape-operator-and-gauss-kronecker-curvature-of-a-graph",
      "lem-smooth-euclidean-hypersurface-graph-and-localization"
    ]
  }
}
```
