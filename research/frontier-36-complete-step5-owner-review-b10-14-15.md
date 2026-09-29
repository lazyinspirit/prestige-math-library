# Outside-workflow Step 5 owner review: batches 10, 14, and 15

Run: `frontier-36-complete` only. Reviewed 2026-09-29 against the live run, its Step 5 receipts, current item files, batch proof contracts, merged proof contract, and cited suppliers. The historical `frontier-36-twelve-categories` run was not used.

## Baseline and current hashes

For each target, the Step 5 pre and post receipt entries agree with each other and with `frontier-36-complete-step5-auditor-baseline.json`. The seven items outside the theorem repair still have their baseline item and manifest hashes. The theorem item's source was repaired, and its manifest now has one ordered dependency addition: `thm-existence-of-geodesically-convex-neighborhoods`. Removing that ID from the live theorem row reproduces the baseline canonical projection and hash exactly. Every current proof-contract hash differs from its pre/post baseline contract hash. The old contract objects are not embedded in those hash receipts, so the receipts support a hash-level delta check, not a field-by-field historical diff.

Each current entry in `frontier-36-complete-batch-N.proof-contracts.json` was compared with the same entry in `frontier-36-complete-proof-contracts.json`; all eight pairs match. `I`, `M`, and `C` denote the current item-file SHA-256, manifest-entry SHA-256, and canonical proof-contract-entry SHA-256. The contract column is Step 5 pre/post hash → current hash.

### Batch 10

- `def-connected-sum-of-compact-surfaces` — I `096c3b38bcadaee88cf5bc528a8c34bae56ca66176ed840802e2fa2c1bcd2895` (baseline match); M `f2a391fbafbd50bd3ad6f90daa9ca6a7a965520a773712e45531a39519e0f80c`; C `704909b0a5c959957f9f1bee678e11437a41f88f1f488dd94b5f382ec012595c` → `9146441fc1c0dde79d9a05500f145139388626e7f4f956ff4da6441c19759059`.
- `def-klein-bottle` — I `0c660370bc588705abebaf40cced40b672fe5833b8d873b9da2e7baf4626dc21` (baseline match); M `aeaaa141945fcaf324a5bb18c1617058f2dd6db3ac585867ae4c05803eb39c4f`; C `8384c39ae6a1e1378c7be2ff1d4867ce0f93d10d674c9e32d1277bb7638bf9f4` → `e18e93219ca48ce2a72bafe526d3fa1da332239c7177ec624120133a399775b2`.

### Batch 14

- `def-h-one-riemannian-curves-and-half-energy` — I `b250c1240bf082d734ae9154ff28f551262739ed70406e6b1aaa38b2392cac7e` (baseline match); M `30c58b8c5876e106c2aef02b4d8bb91eea2bd5ddb93ff92cd18b63a06bc12be6`; C `baf0b39990ce7b627128a1a2242489d52f0da534a07799551a1ea6eb13321f7b` → `75c83443594a72c24ff9f346a464cd973884d9215504747a018e9081f73a3419`.
- `lem-local-length-comparison-for-a-conjugate-free-geodesic` — I `8af3bcae5baec9ef11e841f2e767dc9fee7adbde706c07d7e799606887790796` (baseline match); M `62291e428783bf9533f681e4590a4a919a6155a9b86e502dbda584857785c67e`; C `7fe8834ec93eff28b9f16362f4362a746a9e2af8c7e8340ec018e2c7ee59f694` → `5aff402199ce53db9877ee3e37f0f1f45f78caa76bf7aafb881229fb2ec91306`.
- `lem-h-one-local-length-comparison-for-a-conjugate-free-geodesic` — I `1709aa5d7adf409b57eb833c512e4eb5bb4f80a109de573db6b3eb0bc64f121d` (baseline match); M `93aa57256f2236b0391b2030a1d4123bf40ab5878aecc0c17ec8ac20f7d08f03`; C `066d1b5d02ca93ade1229b65c9673ca9977070d427973d13ddd0c4e594f3e39f` → `9035040a1388134de44a8709245c1bbee00f694bc0c441808a9ee523a8052e14`.
- `lem-finite-dimensional-unit-spheres-are-sequentially-compact` — I `196602b3c55e42165a7ebd05dc4b82ee60bafa5665ce9ff7e759dc529534f60a` (baseline match); M `052ba60ff132362414e5999d9ab45c1279e8ef82b28828cade9639ec4942d355`; C `2283984473e95a71b7ce46f396102765402ee80b5d91efe5db2eee27eec7e457` → `d131d9a36ba634d06bf21d3ae4572b379f8ea9060ea2dac0861f9bcfb6ceec42`.
- `lem-the-pointwise-norm-is-smooth-off-the-zero-vector` — I `e43189396a0333101d6acfe749b1573f5057b4190076852d4fe4455e2a1fa1b0` (baseline match); M `9eac173cee3773cb3b1c22c75be2987132fef397bace9861ea668e5d28974672`; C `c6a18f15fe7ab6cfd687964b5a71dc1a81395329dfdfeb2b93e337aac75a6928` → `1caed465a36041cd30b2375f5e6338475e5b024ce59383b80a62ef56935b4e8e`.

### Batch 15

- `thm-finite-curvilinear-triangulation-of-a-compact-riemannian-surface` — I `19a031f4ae3c16d04c7811a6839c733d57a37afc6647fa6d7dfe61e9d321702a` (repaired source; Step 5 baseline I was `b36c57911156b6e78dced2ad96c9b3bda350a833260ca1946ce47e726710fa3d`); M `596fb0f363c6089a043f8141df58838baa0ad1929bd8c8a40d26df459904388d` → `36204f1e53275cf15b0b78290b0dd7cb57c79ab49b5b18b06aad2ed0030e5881` (dependency-only addition; baseline projection verified in the evidence block below); C `fa7126e1b40e4f23068ac8da07b7df1040b9ccdb165ed0d7f3f795bada8dee7d` → `e5ef77fa5e75ca98f85ad88c2047a84e54485584f276f598f5f4938ca41cf21c`.

## Item and contract review

Contract paths below name the exact owning entry by item ID.

- **Batch 10, `def-connected-sum-of-compact-surfaces`** — `frontier-36-complete-batch-10.proof-contracts.json` → `contracts.def-connected-sum-of-compact-surfaces`; risk review is complete, reviewer `Step-5a Alpha group e`. Compared the definition and its model dependencies with the contract: the chosen embedded disks, boundary-circle homeomorphism, gluing quotient, orientation convention, and empty/iterated cases are retained. It asserts no invariance under changing those choices. No mathematical defect found.
- **Batch 10, `def-klein-bottle`** — same batch contract file → `contracts.def-klein-bottle`; risk review is complete, reviewer `Step-5a Alpha group e`. Checked the square edge identifications, the single corner class, its cyclic four-sector link, quotient Hausdorff and second-countability arguments, and the resulting `aba^{-1}b` boundary word against the cited polygonal-schema supplier. No mathematical defect found.
- **Batch 14, `def-h-one-riemannian-curves-and-half-energy`** — `frontier-36-complete-batch-14.proof-contracts.json` → `contracts.def-h-one-riemannian-curves-and-half-energy`; risk review complete, reviewer `alpha-5a-h`. Read proof steps 1.1–3.1 against the weak-coordinate and chart-transition suppliers. Fubini identifies the weak derivative with an interval primitive; zero distributional derivative gives the constant ambiguity; Cauchy–Schwarz supplies continuity and uniform control; smooth approximation and the chain rule handle transitions. The speed and half-energy are finite on a nondegenerate compact interval, with empty and dimension-zero cases addressed. No defect found.
- **Batch 14, `lem-local-length-comparison-for-a-conjugate-free-geodesic`** — same batch contract file → `contracts.lem-local-length-comparison-for-a-conjugate-free-geodesic`; risk review complete, reviewer `alpha-5a-h`. Independently checked all twelve proof stages and the equality direction. Nonconjugacy makes the exponential differential invertible along the segment; the finite inverse-branch cover and strip partition give the required continuous tangent lift. Gauss lemma applied to the smoothed radial norm proves the length lower bound. The positive excess term in the equality argument forces nondecreasing radius and zero angular derivative, giving exactly the stated monotone, piecewise $C^1$ reparametrizations. Constant curves, endpoints, both directions of the equivalence, and inherited `ACω` are covered. No defect found.
- **Batch 14, `lem-h-one-local-length-comparison-for-a-conjugate-free-geodesic`** — same batch contract file → `contracts.lem-h-one-local-length-comparison-for-a-conjugate-free-geodesic`; risk review complete, reviewer `alpha-5a-h`. Independently checked the `H^1` extension against the piecewise $C^1$ lemma and the dominated-convergence supplier. The finite inverse branches lift a uniformly close `H^1` competitor to an `H^1` tangent primitive; Gauss lemma and the smoothed radial norm give the lower bound on subintervals. Equality forces nondecreasing radius and zero angular derivative almost everywhere, yielding an absolutely continuous parameter with square-integrable derivative. Constant, endpoint, and zero-radius cases are addressed. No defect found.
- **Batch 14, `lem-finite-dimensional-unit-spheres-are-sequentially-compact`** — same batch contract file → `contracts.lem-finite-dimensional-unit-spheres-are-sequentially-compact`; risk review complete, reviewer `alpha-5a-h`. Checked the finite ordered basis reduction to a closed ball, compact-to-sequential-compactness step, and reverse-triangle continuity of the norm. The zero-dimensional sphere is empty; the one-dimensional case is included. No extra choice is used. No defect found.
- **Batch 14, `lem-the-pointwise-norm-is-smooth-off-the-zero-vector`** — same batch contract file → `contracts.lem-the-pointwise-norm-is-smooth-off-the-zero-vector`; risk review complete, reviewer `alpha-5a-h`. Checked the basis-coordinate expression: squared norm is a positive quadratic polynomial, square root is smooth on $(0,\infty)$, and composition is smooth off the zero section. Basis changes preserve the function; dimension zero gives an empty domain. No defect found.
- **Batch 15, `thm-finite-curvilinear-triangulation-of-a-compact-riemannian-surface`** — `frontier-36-complete-batch-15.proof-contracts.json` → `contracts.thm-finite-curvilinear-triangulation-of-a-compact-riemannian-surface`; the repaired current contract records this independent review. Full independent review found two issues in the pre-review carrier: Step 1.1 invoked a compact uniform convexity radius without a declared supplier or proof; Step 5.1's contract inputs included `step 5.1` and `step 6.1`, although these were supplier-local references to the cited planar-graph proof and not theorem-local dependencies. The authorized repair adds `thm-existence-of-geodesically-convex-neighborhoods`, whose proof constructs strongly convex coordinate balls in orthonormal normal charts; for each point the chart is restricted inside the metric extension and any supplied cover member. Compactness then gives a finite subcover of smaller disks with individual radii, used in Steps 2.1, 3.1, and 3.2. The Step 5.1 item wording no longer uses ambiguous supplier step numbers, and its contract inputs are `[F2, F4, step 2.1, step 4.1, construct]`. The only manifest difference from baseline is the ordered addition of the convex-neighbourhood supplier, which resolves to the existing repo-wide item and is now synchronized with frontmatter. I rechecked all eight construction stages against [F1]–[F6], including boundary/corner links, common edge subdivision, smoothing, cover subordination, and the finite CW Euler count. The theorem-specific strict contract and citation checks pass; no unresolved mathematical defect remains.

The two batch-14 local-comparison lemmas and the batch-15 theorem did not receive full item-specific treatment in `frontier-36-complete-alpha-h-5a.md`; this report supplies that independent check.

## Remaining evidence and live gate

The theorem's source and manifest hashes changed after the Step 5 pre/post receipts were recorded. Those receipts remain untouched and refer to the old item and manifest carriers. The theorem's source repair and its deps-only manifest repair are documented here for the certification gate; this report does not mint a receipt or certification. The other seven reviewed items remain source-hash and manifest-hash stable, with contract-only baseline deltas.

The corrected live status command for `frontier-36-complete` in `.autopilot` was confirmed. It reports stage `5a-adjudicate`, with the gate held because `def-connected-sum-of-compact-surfaces` has no successful Step 5 auditor/adjudicator dispatch authored for its current carriers, and an owner repair/recertification blocker. That is an evidence/workflow blocker; this review found no mathematical defect in that definition. This report does not update engine state or any Step 5 receipt.

```step5-manifest-repair
{
  "version": 1,
  "policy": "step5-manifest-repair-evidence-v1",
  "run": "frontier-36-complete",
  "step": 5,
  "id": "thm-finite-curvilinear-triangulation-of-a-compact-riemannian-surface",
  "page": "the-gauss-bonnet-theorem-for-riemannian-surfaces",
  "batch": "15",
  "repair_kind": "dependency-addition",
  "baseline_manifest_sha256": "596fb0f363c6089a043f8141df58838baa0ad1929bd8c8a40d26df459904388d",
  "current_manifest_sha256": "36204f1e53275cf15b0b78290b0dd7cb57c79ab49b5b18b06aad2ed0030e5881",
  "baseline_manifest_entry": {
    "__step6_page_id": "the-gauss-bonnet-theorem-for-riemannian-surfaces",
    "dependency_level": 4,
    "deps": [
      "def-axiom-of-choice",
      "def-curvilinear-triangulation-of-a-compact-surface",
      "def-regular-oriented-surface-region-with-piecewise-smooth-boundary",
      "lem-a-compact-surface-metric-extends-across-its-boundary",
      "lem-finite-planar-graph-disk-cuts-and-euler-count",
      "thm-morse-sard-for-euclidean-maps",
      "thm-euler-poincare-formula-for-finite-cw-complexes"
    ],
    "id": "thm-finite-curvilinear-triangulation-of-a-compact-riemannian-surface",
    "kind": "theorem",
    "proof_strategy": "direct",
    "provenance": {
      "proof": "ai-altered",
      "statement": "ai-altered"
    },
    "sources": {
      "references": [
        {
          "locator": "Chapter 9, Problem 9-5, printed pp. 171–172 (PDF pp. 187–188), outlines a finite convex-polygon cover. The boundary-compatible finite graph refinement here supplies details beyond that outline.",
          "title": "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)",
          "url": "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
        },
        {
          "locator": "§2.3.A, Theorem 2.3.A.1, printed pp. 37–39 (PDF pp. 50–52), constructs finite geodesic triangulations for closed surfaces. It does not establish the prescribed-boundary version; this item only claims curvilinear edges.",
          "title": "Jürgen Jost, Compact Riemann Surfaces: An Introduction to Contemporary Mathematics",
          "url": "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/jost.pdf"
        },
        {
          "locator": "Theorem 1.1 on PDF p. 1 gives a relative-boundary fat-triangulation context, and Definition 1.2 and Remark 1.3 on PDF p. 2 discuss angle bounds. Neither is used as a geodesic-edge theorem here.",
          "title": "Emil Saucan, A Note on a Theorem of Munkres",
          "url": "https://arxiv.org/pdf/math/0403055"
        }
      ]
    },
    "statement": "Assume full AC. Every compact smooth Riemannian surface, with smooth boundary allowed, has a finite regular C2 face-to-face curvilinear triangulation preserving its boundary and subordinate to any supplied finite strongly convex ambient cover; a regular cornered region has analogous triangular face/edge/link data with ordinary corners. Its finite regular CW count V-E+F is the homology Euler characteristic.",
    "strategy": "Choose generic small metric-circle arrangement, assign each face one larger normal-coordinate disk, apply the regular positive-sector planar fan lemma, reconcile edge subdivisions, smooth polygonal bends, and identify the finite CW count.",
    "title": "Finite curvilinear triangulation of a compact Riemannian surface"
  },
  "current_manifest_entry": {
    "__step6_page_id": "the-gauss-bonnet-theorem-for-riemannian-surfaces",
    "dependency_level": 4,
    "deps": [
      "def-axiom-of-choice",
      "def-curvilinear-triangulation-of-a-compact-surface",
      "def-regular-oriented-surface-region-with-piecewise-smooth-boundary",
      "lem-a-compact-surface-metric-extends-across-its-boundary",
      "lem-finite-planar-graph-disk-cuts-and-euler-count",
      "thm-existence-of-geodesically-convex-neighborhoods",
      "thm-morse-sard-for-euclidean-maps",
      "thm-euler-poincare-formula-for-finite-cw-complexes"
    ],
    "id": "thm-finite-curvilinear-triangulation-of-a-compact-riemannian-surface",
    "kind": "theorem",
    "proof_strategy": "direct",
    "provenance": {
      "proof": "ai-altered",
      "statement": "ai-altered"
    },
    "sources": {
      "references": [
        {
          "locator": "Chapter 9, Problem 9-5, printed pp. 171–172 (PDF pp. 187–188), outlines a finite convex-polygon cover. The boundary-compatible finite graph refinement here supplies details beyond that outline.",
          "title": "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)",
          "url": "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
        },
        {
          "locator": "§2.3.A, Theorem 2.3.A.1, printed pp. 37–39 (PDF pp. 50–52), constructs finite geodesic triangulations for closed surfaces. It does not establish the prescribed-boundary version; this item only claims curvilinear edges.",
          "title": "Jürgen Jost, Compact Riemann Surfaces: An Introduction to Contemporary Mathematics",
          "url": "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/jost.pdf"
        },
        {
          "locator": "Theorem 1.1 on PDF p. 1 gives a relative-boundary fat-triangulation context, and Definition 1.2 and Remark 1.3 on PDF p. 2 discuss angle bounds. Neither is used as a geodesic-edge theorem here.",
          "title": "Emil Saucan, A Note on a Theorem of Munkres",
          "url": "https://arxiv.org/pdf/math/0403055"
        }
      ]
    },
    "statement": "Assume full AC. Every compact smooth Riemannian surface, with smooth boundary allowed, has a finite regular C2 face-to-face curvilinear triangulation preserving its boundary and subordinate to any supplied finite strongly convex ambient cover; a regular cornered region has analogous triangular face/edge/link data with ordinary corners. Its finite regular CW count V-E+F is the homology Euler characteristic.",
    "strategy": "Choose generic small metric-circle arrangement, assign each face one larger normal-coordinate disk, apply the regular positive-sector planar fan lemma, reconcile edge subdivisions, smooth polygonal bends, and identify the finite CW count.",
    "title": "Finite curvilinear triangulation of a compact Riemannian surface"
  },
  "current_carriers": {
    "item_file_sha256": "19a031f4ae3c16d04c7811a6839c733d57a37afc6647fa6d7dfe61e9d321702a",
    "manifest_sha256": "36204f1e53275cf15b0b78290b0dd7cb57c79ab49b5b18b06aad2ed0030e5881",
    "contract_sha256": "e5ef77fa5e75ca98f85ad88c2047a84e54485584f276f598f5f4938ca41cf21c"
  },
  "review": {
    "current_item_and_contract_checked": true,
    "current_manifest_matches_item": true,
    "no_unresolved_defect": true,
    "changed_fields": "deps",
    "reviewed_new_dependencies": [
      "thm-existence-of-geodesically-convex-neighborhoods"
    ]
  }
}
```
