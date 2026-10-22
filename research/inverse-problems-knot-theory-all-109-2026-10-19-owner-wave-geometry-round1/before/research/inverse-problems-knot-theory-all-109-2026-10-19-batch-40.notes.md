# Batch 40 authoring notes

## Scope, authority, and live state

- Assigned pair: `inverse-wave-problems-and-finite-time-observability` and its `-examples` companion, orders 3076–3077, category `inverse-problems`.
- The owner direction controls: draft-only content, statement-first wording, frontmatter-only A/B pages, no summaries, and no edits outside this pair and batch-40 evidence.
- At the task’s initial live-state check, the native run was at `1-scaffold`, `23/109` covered, with no workers in flight and the existing owner blocker in `research/inverse-problems-knot-theory-all-109-2026-10-19-step1-blockers.json`; the engine also reported invalid unit prerequisites. Git HEAD was `dd17c1fe56`. Run-wide planning files were already uncommitted. No run control or unrelated file was changed.
- The assigned scheduling input is `a01ad0599f0865ce0072a50b1b0f05caedae7edd714cb6f3f6a0efce40ef1d05`; batch 40 has dependency level 2 and prerequisite batch 38. An older notes/cross-batch snapshot had `ad17c212b928796860b75d555158422e8dc824bd012eb619a22cce336d96d8ba`; it was stale at dispatch and the assigned input hash is now recorded in this batch’s cross-batch file.

## Plan comparison

- IP-40 in `plan-inverse-problems-track.md` L968–1016 and the IP-40 appendix at L1370–1374 control the claim inventory, scope, proof order, and caveats.
- The corresponding `plan-spec.json` records the same A/B IDs, titles, kinds, category, order, companion, and three `requires` edges. Its `items: []` fields are unfilled scaffolds, not a competing inventory. The design explicitly lists eleven A claims; all are retained. A local simple-background definition, a proved no-return extension, a boundary-test separation lemma, and the three B examples are added as necessary local scaffolding.
- The reader-4 prerequisite annex uses descriptive alternate names for three modules (`global eikonal/geometric optics`, `Gaussian beam`, and `Alessandrini identity`). The plan's registered IDs are retained; the annex supplies proof obligations and source status, not alternate item identities.
- No pair-metadata conflict was found between the current plan and `plan-spec.json`.

## Inventory, dependencies, and item levels

The inventory, direct logical dependencies, page placement, and item levels below are read from the current batch-40 scaffold manifest. Levels count only logical suppliers in this run; all other suppliers are external context. The new no-return extension lemma is an A-page prerequisite proved locally before the dependent polar-chart claim.

| Item | Page | Direct logical dependencies | Level |
|---|---|---|---:|
| `lem-ip-borel-jet-realization-and-beam-patching` | A | `def-riemannian-metric-and-riemannian-manifold`, `thm-fundamental-theorem-of-riemannian-geometry`, `thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves` | 0 |
| `lem-ip-riemannian-green-boundary-traces-and-wave-lifting` | A | `def-riemannian-metric-and-riemannian-manifold`, `def-riemannian-volume-density`, `thm-fundamental-theorem-of-riemannian-geometry`, `thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves` | 0 |
| `def-ip-simple-riemannian-background` | A | `def-riemannian-metric-and-riemannian-manifold`, `def-levi-civita-connection`, `thm-fundamental-theorem-of-riemannian-geometry`, `def-jacobi-field`, `def-ip-simple-surface-and-geodesic-xray-transform` | 1 |
| `lem-ip-smooth-boundary-tests-separate-locally-integrable-traces` | A | `def-countable-choice`, `def-riemannian-metric-and-riemannian-manifold`, `def-riemannian-volume-density`, `lem-ip-riemannian-green-boundary-traces-and-wave-lifting`, `thm-locally-integrable-functions-embed-in-distributions`, `thm-second-countable-implies-lindelof` | 1 |
| `lem-ip-variable-metric-domain-of-dependence` | A | `lem-ip-riemannian-green-boundary-traces-and-wave-lifting`, `def-riemannian-metric-and-riemannian-manifold`, `def-riemannian-volume-density`, `def-riemannian-distance-on-a-connected-manifold`, `def-riemannian-speed-and-length`, `thm-riemannian-distance-is-a-metric`, `lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric`, `lem-distance-to-set-is-lipschitz`, `def-countable-choice`, `thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary`, `def-weak-derivative-of-a-locally-integrable-function`, `thm-c1-lipschitz-ac-bv-hierarchy`, `thm-absolutely-continuous-functions-have-integrable-derivatives`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-dominated-convergence`, `thm-linear-change-of-variables-for-lebesgue-measure`, `lem-weak-derivative-linearity-locality-and-commutation`, `lem-weak-derivatives-are-unique-almost-everywhere` | 1 |
| `thm-ip-variable-metric-wave-ibvp-energy-wellposedness` | A | `lem-ip-riemannian-green-boundary-traces-and-wave-lifting`, `def-riemannian-metric-and-riemannian-manifold`, `def-riemannian-volume-density`, `def-weak-derivative-of-a-locally-integrable-function`, `def-sobolev-space-wkp-and-its-norm`, `def-l-p-space-as-a-quotient-by-null-functions`, `def-countable-choice` | 1 |
| `def-ip-hyperbolic-dirichlet-to-neumann-map` | A | `thm-ip-variable-metric-wave-ibvp-energy-wellposedness`, `lem-ip-riemannian-green-boundary-traces-and-wave-lifting`, `def-countable-choice` | 2 |
| `lem-ip-gaussian-beam-null-bicharacteristic` | A | `lem-ip-borel-jet-realization-and-beam-patching`, `thm-ip-variable-metric-wave-ibvp-energy-wellposedness`, `lem-ip-riemannian-green-boundary-traces-and-wave-lifting`, `def-riemannian-metric-and-riemannian-manifold`, `def-riemannian-volume-density`, `def-countable-choice`, `def-principal-part-and-principal-symbol-of-a-scalar-pde`, `lem-principal-symbol-under-a-c-one-coordinate-change`, `def-tautological-one-form-on-a-cotangent-bundle`, `thm-the-canonical-cotangent-two-form-is-symplectic`, `def-symplectic-form-and-symplectic-manifold`, `def-hamiltonian-vector-field-and-hamiltonian-function`, `thm-hamiltonian-vector-fields-exist-uniquely-for-smooth-functions` | 2 |
| `lem-ip-simple-manifold-no-return-extension` | A | `def-ip-simple-riemannian-background`, `def-countable-choice`, `thm-collar-neighborhood-theorem`, `thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary`, `cor-smooth-functions-and-tensor-fields-extend-locally-across-the-boundary`, `def-riemannian-metric-and-riemannian-manifold`, `def-levi-civita-connection`, `thm-fundamental-theorem-of-riemannian-geometry`, `thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves`, `thm-euclidean-inverse-function-theorem`, `thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold`, `thm-finite-products-of-compact-spaces`, `def-riemannian-distance-on-a-connected-manifold`, `thm-riemannian-distance-is-a-metric`, `lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric`, `thm-compactness-agrees-with-metric-compactness`, `thm-compact-implies-complete-and-totally-bounded`, `thm-hopf-rinow`, `def-riemannian-speed-and-length`, `def-pointwise-norm-and-angle-from-a-riemannian-metric`, `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`, `thm-newton-leibniz-with-interior-derivative` | 2 |
| `lem-ip-simple-geodesic-polar-extension` | A | `def-ip-simple-riemannian-background`, `lem-ip-simple-manifold-no-return-extension`, `def-riemannian-metric-and-riemannian-manifold`, `def-levi-civita-connection`, `thm-fundamental-theorem-of-riemannian-geometry`, `def-jacobi-field`, `thm-hopf-rinow`, `thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves`, `thm-riemannian-distance-is-a-metric`, `def-riemannian-distance-on-a-connected-manifold`, `prop-length-dominates-endpoint-distance`, `def-countable-choice` | 3 |
| `lem-ip-wave-alessandrini-identity` | A | `def-ip-hyperbolic-dirichlet-to-neumann-map`, `thm-ip-variable-metric-wave-ibvp-energy-wellposedness`, `lem-ip-riemannian-green-boundary-traces-and-wave-lifting`, `def-riemannian-volume-density`, `def-countable-choice` | 3 |
| `lem-ip-simple-geometry-global-eikonal-geometric-optics` | A | `lem-ip-simple-geodesic-polar-extension`, `def-ip-simple-riemannian-background`, `thm-ip-variable-metric-wave-ibvp-energy-wellposedness`, `lem-ip-riemannian-green-boundary-traces-and-wave-lifting`, `def-countable-choice` | 4 |
| `thm-ip-wave-data-determine-light-ray-integrals` | A | `lem-ip-wave-alessandrini-identity`, `def-ip-hyperbolic-dirichlet-to-neumann-map`, `def-ip-simple-riemannian-background`, `def-countable-choice`, `lem-ip-simple-geometry-global-eikonal-geometric-optics` | 5 |
| `cor-ip-wave-coefficient-uniqueness-under-simple-geometry` | A | `thm-ip-wave-data-determine-light-ray-integrals`, `def-ip-simple-riemannian-background`, `def-ip-simple-surface-and-geodesic-xray-transform`, `thm-ip-2d-simple-surface-xray-injectivity`, `def-countable-choice` | 6 |
| `ex-ip-40-ray-limit-error-accounting` | B | `lem-ip-gaussian-beam-null-bicharacteristic`, `thm-ip-variable-metric-wave-ibvp-energy-wellposedness`, `thm-holder-inequality-for-integrals`, `def-riemannian-metric-and-riemannian-manifold`, `def-riemannian-volume-density`, `def-riemannian-speed-and-length` | 3 |
| `ex-ip-40-finite-time-invisible-perturbation` | B | `lem-ip-variable-metric-domain-of-dependence`, `thm-ip-variable-metric-wave-ibvp-energy-wellposedness`, `def-ip-hyperbolic-dirichlet-to-neumann-map`, `lem-ip-wave-alessandrini-identity`, `def-riemannian-distance-on-a-connected-manifold`, `def-countable-choice`, `lem-ip-smooth-boundary-tests-separate-locally-integrable-traces` | 4 |
| `ex-ip-40-simple-geometry-adequate-observation-time` | B | `cor-ip-wave-coefficient-uniqueness-under-simple-geometry`, `thm-ip-2d-simple-surface-xray-injectivity`, `def-countable-choice` | 7 |

The A and B page prerequisite edges are preserved as declared in the manifests. The local no-return lemma raises the polar-extension lemma to level 3 and the global geometric-optics lemma to level 4. The finite-time invisibility B example additionally depends on the Alessandrini identity and local smooth-test separation to convert interior pairing vanishing to equality of measured boundary maps, raising that example from level 3 to level 4. The plan’s simple-geometry proof route also required correcting the initial manifest edge for `thm-ip-wave-data-determine-light-ray-integrals`: the narrative derives the ray identity from `lem-ip-simple-geometry-global-eikonal-geometric-optics`, while the scaffold listed the broader Gaussian-beam lemma. The controlling plan route is recorded in the manifest; the Gaussian-beam lemma remains a separate broader module. This raises the ray theorem to level 5, its 2D uniqueness corollary to level 6, and the adequate-time example to level 7. The updated graph is acyclic.

## Cross-batch and page prerequisite observations

- Direct batch-38 item dependencies are `def-ip-simple-surface-and-geodesic-xray-transform` (level 0) and `thm-ip-2d-simple-surface-xray-injectivity` (level 3). Their current draft carriers were inspected; the actual theorem proof is for unweighted scalar data on two-dimensional simple surfaces, with no orientability assumption. The batch-40 corollary retains exactly that 2D scope.
- The current batch-38 A/B manifests, library page carriers, and all named batch-1 and batch-36 prerequisite item carriers are now present. This differs from the older batch-38 progress note, which recorded them absent at its earlier status check. At the initial live-state check, the run status counted 23/109 native authoring units, so carrier presence is not native coverage or readiness. The IP-38 proof itself does not logically use the IP-01 or IP-36 claims; its page-level `requires` edges remain binding.
- The required published PDE pages are present. Their reviewed interfaces are narrower than IP-40: the finite-propagation supplier is Euclidean constant-speed, and the Sobolev trace/Gauss–Green suppliers are Euclidean-domain results. They are page context only; no variable-metric claim is inferred from them.

## Sources and retrieval history

1. Mikko Salo, *On geometric inverse problems and microlocal analysis*, full author lecture notes, arXiv:2312.08123v1, <https://arxiv.org/pdf/2312.08123v1>. Read §3.1 and the complete proof of Lemma 3.4 (PDF pp. 23–24); §3.3 and the complete concentrating-solution construction (pp. 26–32); §3.4 (pp. 32–39), which is explicitly a beam sketch; Theorems 3.1–3.2 and Remark 3.3 (pp. 21–22). Supports the Green identity, DN pairing, geometric-optics residual and normalization route, finite-time scope, and the exact limits of the cited beam argument. The variable-metric well-posedness is referred to Evans and the Gaussian-beam construction is only sketched; both are local proof obligations.
2. Medet Nursultanov and Lauri Oksanen, *Introduction to inverse problems for hyperbolic PDEs*, full lecture notes, arXiv:2311.06020v2, <https://arxiv.org/pdf/2311.06020v2>. Read §3.1 (PDF pp. 14–15), §3.2's finite-propagation statement and its explicit referral for proof (p. 16), §§4.1–4.4 (pp. 20–22), and §5.1 (pp. 22–23). Supports the multi-term Euclidean geometric-optics calculation, error correction route, and ray-limit mechanism; its higher-dimensional Riemannian finite-speed theorem is stated but its proof is omitted, so it is not used as the variable-metric proof.
3. Lauri Oksanen, Mikko Salo, Plamen Stefanov, and Gunther Uhlmann, *Inverse problems for real principal type operators*, arXiv:2001.07599v2, <https://arxiv.org/pdf/2001.07599v2>. Read the complete quasimode construction in §3 (PDF pp. 20–32), including Theorem 3.1, the Riccati system, Borel realization, patching, stationary-phase normalization, and endpoint terms. Supports the beam module's general real-principal-symbol construction and its product-limit normalization. The local carrier will supply its own phase, transport, Borel, and error arguments rather than treating the citation as a proof.
4. Gabriel P. Paternain, Mikko Salo, and Gunther Uhlmann, *Geometric inverse problems, with emphasis on two dimensions*, full monograph, <https://sites.math.washington.edu/~gunther/publications/GIP2D_driver%20%2814%29.pdf>. Read Ch. 3 §§3.7–3.8 (printed pp. 89–109) and Ch. 4 §4.4 (pp. 117–121). Supports the standard simple-manifold conventions, no-conjugate/Jacobi geometry, and 2D X-ray injectivity. Its polar-coordinate equivalence invokes the no-return extension, Serre/Morse topology, and the Morse index theorem; those substantial foundations have not been locally supplied here and are escalated below.

5. Jan Bohr, *Stability of the Non-abelian X-ray Transform in Dimension ≥ 3*, <https://d-nb.info/1246268426/34>. Read the complete proof of Lemma 7.1 (PDF pp. 39–40). Supports the no-return extension construction; its metric interpolation, completeness, and geodesic escape estimates are supplied locally in `lem-ip-simple-manifold-no-return-extension`.
6. Lauri Oksanen, Mikko Salo, Plamen Stefanov, and Gunther Uhlmann, *Inverse problems for real principal type operators*, author-hosted accepted article, <https://www.math.purdue.edu/~stefanop/publications/real_principal_type.pdf>. Read §3 and the complete proof of Theorem 3.1 (PDF pp. 20–32), including Riccati positivity, Borel patching, amplitude hierarchy, and residual estimates. This is the full-text recovery used after the arXiv PDF endpoint returned a cache miss.

Retrieval history: the arXiv abstract endpoint for source 2 returned a cache miss, and the full PDF endpoint was then fetched and inspected successfully. A guessed university mirror for an older Gaussian-beam note returned a tool fetch error; search recovered and the full relevant construction was read in source 3. During this turn, the Oksanen–Salo–Stefanov–Uhlmann arXiv PDF endpoint also returned a cache miss; search recovered the author-hosted accepted article listed above, whose complete §3 proof was inspected. The original arXiv record remains preserved. No source was dropped. `node tools/source-fetch-check.mjs --coverage research/inverse-problems-knot-theory-all-109-2026-10-19-batch-40.coverage.json --stamp` returned `6/6 source(s) fetch-verified`, `6/6 source(s) resolved`.

## Escalations and completion log

### Mathematical escalation: global simple-geodesic polar extension

- **Gap:** the required `lem-ip-simple-geodesic-polar-extension` uses the implication from strict convexity, nontrapping, and absence of conjugate points to unique minimizing geodesics and a globally injective exponential/polar chart on the compact manifold. The no-return extension itself is now locally proved by `lem-ip-simple-manifold-no-return-extension`. The remaining source proof uses the nontrapping-implies-contractible result from Serre’s path-space Morse theory, the Morse index theorem, and a mountain-pass argument for uniqueness; those complete prerequisites are not currently local suppliers. The cited book leaves the no-return construction as Exercise 3.7.20 and cites Bohr for it; its Proposition 3.7.22 and Proposition 3.7.24 invoke Serre, Morse-index, Palais–Smale, and mountain-pass results.
- **Affected claims:** `lem-ip-simple-geodesic-polar-extension` and `lem-ip-simple-geometry-global-eikonal-geometric-optics`. The separate Gaussian-beam route, general ray-integral theorem, and 2D coefficient corollary do not depend on this polar-chart claim.
- **Proposed placement:** add a fully proved A-page supplier such as `lem-ip-simple-manifold-unique-minimizing-geodesics` only after the complete Morse/topology argument is sourced and proved; otherwise the owner can supply an exact earlier theorem with its complete proof and matching hypotheses. The no-return extension prerequisite is already placed locally in `lem-ip-simple-manifold-no-return-extension`.
- **Readiness:** the polar lemma and its geometric-optics consumer remain `escalated`. No missing supplier excerpt or proof acceptance is claimed.

### Item progress

Carriers are authored in ascending item dependency level. After each completed item, record its exact claim, conventions, dependencies, sources/locators, validation and next action here.


### Completed item: `lem-ip-simple-manifold-no-return-extension`

- **Claim and conventions:** for a compact connected nonempty Riemannian manifold with smooth strictly convex boundary and outward sign `g(\nabla_w\nu_{\mathrm{out}},w)>0`, constructs a complete boundaryless extension whose exterior is a cylinder `(0,\infty)\times\partial M`; the outward normal coordinate metric has `G=ds^2+h_s` and `\partial_s h_s>0`. Unit geodesics launched outward or tangent at the boundary escape to the noncompact end and never reenter.
- **Dependencies:** `def-ip-simple-riemannian-background`, Countable Choice, collar/partition and local tensor-extension results, Riemannian distance/length and local metric comparison, compact-metric completeness, Hopf–Rinow, the Euclidean inverse-function theorem, boundary compactness and finite product compactness. The exact direct list and level 2 are recorded in the batch manifest.
- **Sources:** Bohr, *Stability of the Non-abelian X-ray Transform in Dimension ≥ 3*, Lemma 7.1, PDF pp. 39–40 (<https://d-nb.info/1246268426/34>), whose complete construction is reproduced locally; Paternain–Salo–Uhlmann, *Geometric inverse problems, with emphasis on two dimensions*, Lemma 3.7.19, printed p. 100 (<https://sites.math.washington.edu/~gunther/publications/GIP2D_driver%20%2814%29.pdf>), which states the extension and flags it as an exercise.
- **Axiom use:** Countable Choice is explicit and used through the global collar, smooth partitions of unity, and the Hopf–Rinow interface; no full Axiom of Choice is used.
- **Validation:** `source-fetch-check --stamp` passed for all 6 recorded sources after the Bohr and Purdue full-text records were added. Final scoped proof-layout, source/contract excerpt integrity, and item-dependency-level checks remain pending.
- **Unresolved:** none for this extension lemma. The polar chart still needs the separate unique-geodesic/Morse-theory prerequisite recorded above.
- **Next:** continue in ascending item dependency level with the remaining wave solver and DN/beam suppliers, preserving the unresolved polar branch.

### Completed item: `def-ip-simple-riemannian-background`

- **Claim and conventions:** defines a compact connected nonempty smooth Riemannian $n$-manifold, $n\ge2$, with smooth boundary as simple when strict convexity uses the outward convention $g(\nabla_w\nu_{out},w)>0$, the stated Jacobi equation has no nonzero endpoint-zero field on any positive-length unit geodesic, and all interior unit geodesics exit in finite forward/backward time. Its $n=2$ specialization matches the actual batch-38 simple-surface definition.
- **Dependencies:** `def-riemannian-metric-and-riemannian-manifold`, `def-levi-civita-connection`, `thm-fundamental-theorem-of-riemannian-geometry`, `def-jacobi-field`, and current batch-38 `def-ip-simple-surface-and-geodesic-xray-transform`.
- **Sources:** Salo full notes §2.2, PDF pp. 7–9; Paternain–Salo–Uhlmann monograph, Ch. 3 Definition 3.8.1 and Theorem 3.8.2, printed pp. 102–103. Both use the same three simplicity hypotheses. Carrier: `items/def-ip-simple-riemannian-background.md`.
- **Decision:** definition only; no proof phase or axiom use. `dependency_level: 1` because of its in-run batch-38 definition dependency.
- **Validation:** the batch-38/40 scoped manifest-level check passed before carrier creation. Final item-format and proof-layout checks remain pending because this carrier has no phase proof.
- **Unresolved:** none for this definition. Next: author the level-0 Riemannian Green/lifting and Borel-jet suppliers, then the wave energy theorem.

### Completed item: `lem-ip-riemannian-green-boundary-traces-and-wave-lifting`

- **Claim and conventions:** proves the Riemannian space-time Green identity with outward normal, constructs a collar-supported lift for smooth time-compact boundary data, and gives a classical normal-trace $L^2$ estimate. It uses the $(-\Delta_g)$ sign convention and a forward-minus-terminal temporal endpoint term.
- **Dependencies:** `def-riemannian-metric-and-riemannian-manifold`, `def-riemannian-volume-density`, `thm-fundamental-theorem-of-riemannian-geometry`, `thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves`.
- **Sources:** Salo §3.1, full proof of Lemma 3.4, PDF pp. 23–24; Nursultanov–Oksanen §§2.4 and 3.3, PDF pp. 9 and 17–18. Both use the same Green boundary pairing; the collar construction and classical trace bound are proved locally. Carrier: `items/lem-ip-riemannian-green-boundary-traces-and-wave-lifting.md`.
- **Decision:** direct, choice-free smooth calculation; no Sobolev trace assertion is imported. Its output is the Green/lift interface used by the weak DN definition.
- **Validation:** source stamp passes 4/4. Item-specific precheck/render checks remain pending until the final scoped pass.
- **Unresolved:** none. Next: prove the level-0 parameter-uniform Borel jet supplier before the energy and beam consumers.

### Completed item: `lem-ip-borel-jet-realization-and-beam-patching`

- **Claim and conventions:** realizes any compatible smooth scalar formal jet along a compact embedded curve, uniformly over compact parameter families, by a decreasing-cutoff Borel sum in a tubular coordinate chart; finite compatible ray charts are patched by a finite smooth partition. The construction applies componentwise to complex phase and amplitude jets and makes no choice-axiom assumption.
- **Dependencies:** `def-riemannian-metric-and-riemannian-manifold`, `thm-fundamental-theorem-of-riemannian-geometry`, and `thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves`.
- **Sources:** Oksanen–Salo–Stefanov–Uhlmann, §3 proof of Theorem 3.1, PDF pp. 25–26; Salo, §3.4.3–3.4.5, PDF pp. 35–38. The local carrier gives the cutoff sequence and uniform derivative estimate explicitly. Carrier: `items/lem-ip-borel-jet-realization-and-beam-patching.md`.
- **Decision:** direct, choice-free construction; `dependency_level: 0`.
- **Validation:** source stamps pass 4/4; final scoped item-format and renderer checks remain pending.
- **Unresolved:** none for Borel realization/patching. Next: author the energy and local finite-propagation suppliers before DN, Alessandrini, and beam consumers.


### Drafted item: `lem-ip-variable-metric-domain-of-dependence`

- **Claim and conventions:** static real q, Lq = partial_t^2 - Delta_g + q, intrinsic Riemannian distance and unit speed; proves (i) support expands by time from compactly supported Cauchy data under homogeneous Dirichlet conditions, (ii) boundary input has not propagated farther than its elapsed time (and the time-reversed statement), and (iii) the interior product integral of (q1-q2)uv vanishes when dist(supp(q1-q2), boundary M) > T/2. Countable Choice is explicit; no full AC branch is used.
- **Dependencies (18):** `lem-ip-riemannian-green-boundary-traces-and-wave-lifting`, `def-riemannian-metric-and-riemannian-manifold`, `def-riemannian-volume-density`, `def-riemannian-distance-on-a-connected-manifold`, `def-riemannian-speed-and-length`, `thm-riemannian-distance-is-a-metric`, `lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric`, `lem-distance-to-set-is-lipschitz`, `def-countable-choice`, `thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary`, `def-weak-derivative-of-a-locally-integrable-function`, `thm-c1-lipschitz-ac-bv-hierarchy`, `thm-absolutely-continuous-functions-have-integrable-derivatives`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-dominated-convergence`, `thm-linear-change-of-variables-for-lebesgue-measure`, `lem-weak-derivative-linearity-locality-and-commutation`, `lem-weak-derivatives-are-unique-almost-everywhere`
- **Sources and locators:** Nursultanov–Oksanen, *Introduction to inverse problems for hyperbolic PDEs*, §3.2, PDF p. 16, where higher-dimensional Riemannian finite speed is stated but its proof is referred elsewhere (https://arxiv.org/pdf/2311.06020v2); Salo, *On geometric inverse problems and microlocal analysis*, Theorems 3.1–3.2 and Remark 3.3, PDF pp. 21–22, for the static-potential scope and finite-time threshold (https://arxiv.org/pdf/2312.08123v1). The local distance-weighted energy and support proof is supplied in this carrier.
- **Contract and validation:** contract maps all 11 proof steps to inputs and exact supplier excerpts (20 citations); scoped proof-contract check returned ok with no warnings. The previously run source stamp reported 6/6 verified and resolved; final proof-layout and run-scoped item-dependency checks remain pending.
- **Readiness:** escalated pending reconciliation of the in-run draft supplier `lem-ip-riemannian-green-boundary-traces-and-wave-lifting`; its actual statement and proof were inspected, but acceptance/readiness is not claimed.
- **Next action:** continue with the remaining level-2/3 and B-page statements, keeping the unresolved wave solver and polar/GO suppliers explicit.


### Escalated item: `thm-ip-variable-metric-wave-ibvp-energy-wellposedness`

- **Claim retained:** the full forward/terminal energy solution theorem, zero-data correction estimate, and homogeneous Dirichlet convention on a compact smooth Riemannian manifold with real static q. Countable Choice is explicit.
- **Dependencies (7):** `lem-ip-riemannian-green-boundary-traces-and-wave-lifting`, `def-riemannian-metric-and-riemannian-manifold`, `def-riemannian-volume-density`, `def-weak-derivative-of-a-locally-integrable-function`, `def-sobolev-space-wkp-and-its-norm`, `def-l-p-space-as-a-quotient-by-null-functions`, `def-countable-choice`
- **Sources and locators:** Salo §3.1, PDF pp. 22–24, which refers the well-posedness argument to standard wave theory (https://arxiv.org/pdf/2312.08123v1); Nursultanov–Oksanen §§2.4, 3.3, PDF pp. 9, 17–18, for Green and energy-method context (https://arxiv.org/pdf/2311.06020v2). Neither inspected source supplies the required compact-manifold Galerkin proof.
- **Gap:** no local supplier currently establishes Galerkin existence and passage to the limit with strong C_t H_0^1 and C^1_t L^2 traces. Those are needed for initial/terminal data and the zero-data correction estimate. The nonhomogeneous boundary branch then follows only after this solver is complete.
- **Proposed placement:** prove the compact-manifold second-order Galerkin construction and its energy-class trace lemma as local A-page suppliers before this theorem; retain the current full claim and do not weaken its regularity or estimate.
- **Readiness:** escalated; no proof contract or completion record is claimed.
- **Next action:** continue authoring the independent DN/identity/GO statements and B examples with the exact unresolved solver ID recorded.


### Drafted item: `def-ip-hyperbolic-dirichlet-to-neumann-map`

- **Claim and conventions:** full-time forward and terminal DN maps on smooth boundary data compactly supported away from time endpoints; outward classical normal trace in L2; bilinear boundary pairing.
- **Dependencies (2):** `thm-ip-variable-metric-wave-ibvp-energy-wellposedness`, `lem-ip-riemannian-green-boundary-traces-and-wave-lifting`.
- **Sources:** Salo §3.1, PDF pp. 22–24; Nursultanov–Oksanen §§2.4, 3.3, PDF pp. 9, 17–18.
- **Readiness:** escalated because the forward theorem draft does not yet establish C2 solutions for every smooth boundary input. The full requested interface remains in the definition; no readiness is claimed.
- **Next:** complete or reconcile classical solvability and trace regularity.


### Drafted item: `lem-ip-wave-alessandrini-identity`

- **Claim and conventions:** the non-conjugated, forward/terminal Green pairing gives the interior integral of q1−q2; uses P=partial_t^2−Delta_g and outward normal.
- **Dependencies (5):** `def-ip-hyperbolic-dirichlet-to-neumann-map`, `thm-ip-variable-metric-wave-ibvp-energy-wellposedness`, `lem-ip-riemannian-green-boundary-traces-and-wave-lifting`, `def-riemannian-volume-density`, `def-countable-choice`.
- **Sources:** Salo §3.1, complete Lemma 3.4 proof, PDF pp. 23–24; Nursultanov–Oksanen §§2.4, 3.3, PDF pp. 9, 17–18. The boundary calculation is reproduced locally.
- **Proof status:** the two-step Green calculation is complete for the stated classical solutions. Readiness is escalated because the DN and classical solvability prerequisites remain unsettled.
- **Next:** complete its exact-source contract and continue the light-ray theorem and B examples.


### Drafted item: `lem-ip-smooth-boundary-tests-separate-locally-integrable-traces`

- **Claim and conventions:** on the time-boundary cylinder with the induced smooth positive product density, a locally integrable trace that pairs to zero with all compactly supported smooth tests vanishes almost everywhere. Countable Choice is used only for countable chart localization and distribution uniqueness.
- **Dependencies (6):** `def-countable-choice`, `def-riemannian-metric-and-riemannian-manifold`, `def-riemannian-volume-density`, `lem-ip-riemannian-green-boundary-traces-and-wave-lifting`, `thm-locally-integrable-functions-embed-in-distributions`, `thm-second-countable-implies-lindelof`
- **Sources:** Salo §3.1, PDF pp. 23–24; Nursultanov–Oksanen §§2.4, 3.3, PDF pp. 9, 17–18. The chartwise distribution-separation argument is supplied locally.
- **Readiness:** escalated pending reconciliation of the Green supplier’s boundary-density interface.
- **Next:** generate its exact-source contract and scoped proof-layout.


### Drafted item: `ex-ip-40-finite-time-invisible-perturbation`

- **Claim and conventions:** for real static potentials differing only at intrinsic distance greater than T/2 from the boundary, the full forward time-dependent DN maps agree on smooth time-compact boundary inputs.
- **Dependencies (7):** `lem-ip-variable-metric-domain-of-dependence`, `lem-ip-smooth-boundary-tests-separate-locally-integrable-traces`, `thm-ip-variable-metric-wave-ibvp-energy-wellposedness`, `def-ip-hyperbolic-dirichlet-to-neumann-map`, `lem-ip-wave-alessandrini-identity`, `def-riemannian-distance-on-a-connected-manifold`, `def-countable-choice`
- **Proof:** finite propagation makes the interior product pairing vanish; the Alessandrini identity converts it to forward/terminal boundary pairings; equal-potential reciprocity cancels the terminal map; smooth test separation proves equality in L2.
- **Readiness:** escalated because the wave solver and classical DN regularity interfaces remain unproved.
- **Next:** regenerate the exact-source contract and scoped proof-layout after the boundary-test helper is finalized.


### Drafted item: `ex-ip-40-ray-limit-error-accounting`

- **Claim and conventions:** the exact/approximate product pairing error is O(lambda^-1/2) for uniformly L2-bounded approximate beams and L2 correction remainders of that size; product is bilinear and spacetime density is dV_gdt.
- **Dependencies (6):** `lem-ip-gaussian-beam-null-bicharacteristic`, `thm-ip-variable-metric-wave-ibvp-energy-wellposedness`, `thm-holder-inequality-for-integrals`, `def-riemannian-metric-and-riemannian-manifold`, `def-riemannian-volume-density`, `def-riemannian-speed-and-length`
- **Proof and contract:** direct three-term product expansion plus Hölder/Cauchy–Schwarz; exact-source contract has one citation and two derivation steps. Scoped proof-contract check returned ok with no warnings.
- **Sources:** Oksanen–Salo–Stefanov–Uhlmann §3, PDF pp. 20–32 for beam normalization/correction; Salo §3.4, pp. 32–39 for the beam proof boundary.
- **Readiness:** escalated because the Gaussian-beam and wave-solver prerequisites remain unresolved.
- **Next:** complete those supplier arguments; final scoped proof-layout and dependency checks remain pending.



### Escalated item: `lem-ip-gaussian-beam-null-bicharacteristic`

- **Claim:** Constructs, to arbitrary requested order, a normalized Gaussian beam for a real-principal-type operator along a compact embedded nonperiodic null bicharacteristic with no cusps; claims positive transverse phase Hessian, Borel-realized transport amplitudes, Gaussian decay, and O(lambda^-N) residual.
- **Conventions:** Real scalar principal symbol; Hamilton bicharacteristic in p=0; phase-space embedding distinct from base-curve self-intersection; cutoff supported away from spacetime boundary; Countable Choice declared.
- **Dependencies (6):** `lem-ip-borel-jet-realization-and-beam-patching`, `thm-ip-variable-metric-wave-ibvp-energy-wellposedness`, `lem-ip-riemannian-green-boundary-traces-and-wave-lifting`, `def-riemannian-metric-and-riemannian-manifold`, `def-riemannian-volume-density`, `def-countable-choice`
- **Sources and locators:** Lauri Oksanen, Mikko Salo, Plamen Stefanov, and Gunther Uhlmann, Inverse problems for real principal type operators, §3, Theorem 3.1 and proof, PDF pp. 20–32 (https://arxiv.org/pdf/2001.07599v2) — full construction read; local Borel/phase/transport/normalization proof still must be reproduced in the carrier; Mikko Salo, On geometric inverse problems and microlocal analysis, §3.4, PDF pp. 32–39 (https://arxiv.org/pdf/2312.08123v1) — inline; lecture explicitly sketches rather than proves this general beam theorem
- **Decision/readiness:** Escalated. Full statement retained, but no locally complete complex-phase/Riccati/Borel/residual proof has been authored.
- **Unresolved:** Need a complete Riccati positivity argument and uniform transverse Hessian bounds. Need a full transport hierarchy, parameter-uniform Borel realization and finite phase-space patching. Need exact Gaussian normalization, off-ray mixed-term bounds, and O(lambda^-N) residual for each N. Exact correction depends on the escalated variable-metric wave energy solver.
- **Validation:** No proof contract claimed for the unfinished proof. Final proof-layout and dependency check pending.
- **Next action:** Reproduce the complete §3 beam argument locally, including hypotheses and endpoint/cutoff conditions, or escalate the exact missing steps to the owner.



### Escalated item: `lem-ip-simple-geodesic-polar-extension`

- **Claim:** For each boundary point of a compact simple Riemannian manifold, the inward exponential polar map is a global diffeomorphism onto the interior, radial distance is smooth and solves the eikonal equation; the no-return complete exterior is included.
- **Conventions:** Outward strict-convexity sign g(nabla_w nu_out,w)>0; no-conjugate and nontrapping hypotheses; Countable Choice; boundary-based minimizing radial geodesics.
- **Dependencies (12):** `def-ip-simple-riemannian-background`, `lem-ip-simple-manifold-no-return-extension`, `def-riemannian-metric-and-riemannian-manifold`, `def-levi-civita-connection`, `thm-fundamental-theorem-of-riemannian-geometry`, `def-jacobi-field`, `thm-hopf-rinow`, `thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves`, `thm-riemannian-distance-is-a-metric`, `def-riemannian-distance-on-a-connected-manifold`, `prop-length-dominates-endpoint-distance`, `def-countable-choice`
- **Sources and locators:** Gabriel P. Paternain, Mikko Salo, and Gunther Uhlmann, Geometric inverse problems, with emphasis on two dimensions, Chapter 3, §§3.7–3.8, printed pp. 89–109 (https://sites.math.washington.edu/~gunther/publications/GIP2D_driver%20%2814%29.pdf) — the complete relevant argument was read; global uniqueness uses cited path-space/Morse theorems not locally proved here; Jan Bohr, Stability of the Non-abelian X-ray Transform in Dimension ≥ 3, Appendix §7.1, Lemma 7.1, PDF pp. 39–40 (https://d-nb.info/1246268426/34) — included for the no-return extension, already reproduced in its own carrier
- **Decision/readiness:** Escalated. The no-return extension is locally proved; the global injectivity/unique-minimizer step is not.
- **Unresolved:** The cited global polar-coordinate equivalence invokes Serre path-space contractibility, the Morse index theorem, Palais–Smale compactness and a mountain-pass argument; complete local suppliers/proofs are absent.
- **Validation:** No proof contract claimed for the unfinished global statement. Final proof-layout and dependency check pending.
- **Next action:** Supply a complete local Morse/topology proof or an exact earlier theorem with complete proof and matching hypotheses.



### Escalated item: `lem-ip-simple-geometry-global-eikonal-geometric-optics`

- **Claim:** Constructs conjugate finite-order eikonal phases and transport amplitudes along a maximal simple-geometry ray with transverse cutoff epsilon=lambda^(-1/(n+8)); proves the specified H1 energy correction bound, O(lambda^-1/2) L2 error, and normalized ray-product limit.
- **Conventions:** Static real interior potentials; simple background; ray length L<T and time shift 0<t0<T-L; null ray (t0+s,gamma(s)); phase-space branch identity distinct from projected ray crossings.
- **Dependencies (5):** `lem-ip-simple-geodesic-polar-extension`, `def-ip-simple-riemannian-background`, `thm-ip-variable-metric-wave-ibvp-energy-wellposedness`, `lem-ip-riemannian-green-boundary-traces-and-wave-lifting`, `def-countable-choice`
- **Sources and locators:** Mikko Salo, On geometric inverse problems and microlocal analysis, §3.3, complete construction, PDF pp. 26–32 (https://arxiv.org/pdf/2312.08123v1) — full source reasoning read; local proof must reproduce all variable-metric transport/error calculations; Medet Nursultanov and Lauri Oksanen, Introduction to inverse problems for hyperbolic PDEs, §§4.1–4.4, PDF pp. 20–22 (https://arxiv.org/pdf/2311.06020v2) — inline for Euclidean calculation; the Riemannian chart and normalization terms are local obligations
- **Decision/readiness:** Escalated. The full finite-order and error contract is retained.
- **Unresolved:** Polar extension depends on unresolved global geodesic uniqueness/Morse theory. Need complete variable-metric transport residual and cutoff derivative calculations. Need normalized Gaussian transverse integral and all mixed product terms. Need exact correction through the variable-metric energy solver, which is itself escalated.
- **Validation:** No proof contract claimed for the unfinished proof. Final proof-layout and dependency check pending.
- **Next action:** Complete the ray-tube eikonal/transport and product-limit derivation after supplier reconciliation, without weakening the error order.



### Escalated item: `thm-ip-wave-data-determine-light-ray-integrals`

- **Claim:** Equal full time-dependent DN maps for two real static interior potentials on a simple compact manifold determine their integrals along every boundary-to-boundary unit geodesic of length less than T.
- **Conventions:** L_q=partial_t^2-Delta_g+q; outward normal; static real q; time-compact smooth boundary inputs; maximal rays with inward/outward endpoint directions; Countable Choice.
- **Dependencies (5):** `lem-ip-wave-alessandrini-identity`, `def-ip-hyperbolic-dirichlet-to-neumann-map`, `def-ip-simple-riemannian-background`, `def-countable-choice`, `lem-ip-simple-geometry-global-eikonal-geometric-optics`
- **Sources and locators:** Mikko Salo, On geometric inverse problems and microlocal analysis, Theorem 3.1 and proof, PDF pp. 21–22 (https://arxiv.org/pdf/2312.08123v1) — claim scope and finite-order simple-geometry GO proof route inspected; the local eikonal/transport/error argument must be reproduced; Medet Nursultanov and Lauri Oksanen, Introduction to inverse problems for hyperbolic PDEs, §5.1, PDF pp. 22–23 (https://arxiv.org/pdf/2311.06020v2) — ray-limit strategy read; complete error estimates remain local obligations
- **Decision/readiness:** Escalated. Full ray-integral claim retained; no proof or readiness claimed.
- **Unresolved:** Need exact Alessandrini pairing with the stated trace classes. The simple-geometry GO proof must supply normalized forward/terminal approximate solutions, product convergence, and exact energy correction. The separate general Gaussian-beam module remains a distinct broader A claim and is not used as the registered direct supplier in this plan-controlled proof route.
- **Validation:** No proof contract claimed for the unfinished theorem. Final proof-layout and dependency check pending.
- **Next action:** Resolve the polar and finite-order GO suppliers and classical DN solvability, then prove the ray limit with exact normalization and endpoint control.



### Drafted item: `cor-ip-wave-coefficient-uniqueness-under-simple-geometry`

- **Claim:** On a simple compact two-dimensional surface, equal full-time DN maps and an observation time exceeding all maximal geodesic lengths imply equality of real smooth interior potentials.
- **Conventions:** Dimension two; unweighted scalar geodesic X-ray transform; outward boundary convention inherited from simple background; static real potentials; Countable Choice.
- **Dependencies (5):** `thm-ip-wave-data-determine-light-ray-integrals`, `def-ip-simple-riemannian-background`, `def-ip-simple-surface-and-geodesic-xray-transform`, `thm-ip-2d-simple-surface-xray-injectivity`, `def-countable-choice`
- **Sources and locators:** Mikko Salo, On geometric inverse problems and microlocal analysis, Theorem 3.2 and Remark 3.3, PDF pp. 21–22 (https://arxiv.org/pdf/2312.08123v1) — finite-time uniqueness scope read; local corollary composes with X-ray injectivity; Gabriel P. Paternain, Mikko Salo, and Gunther Uhlmann, Geometric inverse problems, with emphasis on two dimensions, Chapter 4, §4.4, printed pp. 117–121 (https://sites.math.washington.edu/~gunther/publications/GIP2D_driver%20%2814%29.pdf) — full unweighted scalar X-ray injectivity proof read in the cross-batch carrier
- **Decision/readiness:** Local two-step composition proof complete; readiness escalated because the ray-integral theorem and cross-batch X-ray supplier remain draft/not independently reconciled.
- **Unresolved:** thm-ip-wave-data-determine-light-ray-integrals has no complete local proof yet. thm-ip-2d-simple-surface-xray-injectivity is an in-run batch-38 draft; its body was inspected but readiness is not claimed.
- **Validation:** Proof contract validates with no errors or warnings. Final proof-layout and item dependency checks pending.
- **Next action:** Resolve the ray theorem and reconcile the exact batch-38 supplier before recording any ready decision.



### Drafted item: `ex-ip-40-simple-geometry-adequate-observation-time`

- **Claim:** On a simple compact surface, a uniform maximal-geodesic length bound L* below T makes equal full-time DN maps imply equality of real smooth interior potentials.
- **Conventions:** Two-dimensional simple surface; real static potentials; unweighted scalar X-ray transform; strict T>L* observation threshold; Countable Choice.
- **Dependencies (3):** `cor-ip-wave-coefficient-uniqueness-under-simple-geometry`, `thm-ip-2d-simple-surface-xray-injectivity`, `def-countable-choice`
- **Sources and locators:** Mikko Salo, On geometric inverse problems and microlocal analysis, Theorems 3.1–3.2 and Remark 3.3, PDF pp. 21–22 (https://arxiv.org/pdf/2312.08123v1) — included for finite-time ray scope and threshold; Gabriel P. Paternain, Mikko Salo, and Gunther Uhlmann, Geometric inverse problems, with emphasis on two dimensions, Chapter 4, §4.4, printed pp. 117–121 (https://sites.math.washington.edu/~gunther/publications/GIP2D_driver%20%2814%29.pdf) — included for the 2D scalar X-ray injectivity closure
- **Decision/readiness:** Two-step consequence proof and contract complete conditional on the corollary; readiness escalated because the corollary and batch-38 injectivity supplier remain unapproved drafts.
- **Unresolved:** cor-ip-wave-coefficient-uniqueness-under-simple-geometry depends on the unfinished ray-integral theorem. thm-ip-2d-simple-surface-xray-injectivity is a batch-38 draft; current proof body was inspected but readiness/acceptance is not claimed.
- **Validation:** Proof contract check passed without warnings; final proof-layout and dependency checks pending.
- **Next action:** Finish the ray theorem and reconcile the exact batch-38 X-ray supplier.


## Final scoped audit and Step 1 readiness

This section supersedes the interim validation and next-action checkpoints above. Batch 40 contains 17 items: 14 A-page items and 3 B-page examples. The A page inventory now includes the smooth-boundary test-separation helper; the A and B inventories are ordered by item dependency level and both page bodies are empty. The helper defines dS_g as the volume density of the metric restricted to T∂M and derives its positive smooth chart density from the metric and volume-density definitions. It therefore has no in-run supplier and is level 0.

The plan-controlled ray theorem depends on lem-ip-simple-geometry-global-eikonal-geometric-optics; the broader Gaussian-beam result remains a separate module. This resolves the earlier manifest/design conflict. Current A levels are 0 (Borel, Green, boundary-test separation), 1 (simple background, domain of dependence, wave IBVP), 2 (DN map, Gaussian beam, no-return extension), 3 (polar extension, Alessandrini identity), 4 (simple-geometry GO), 5 (ray-integral theorem), and 6 (coefficient-uniqueness corollary). B levels are 3 (ray-limit error), 4 (finite-time invisibility), and 7 (adequate observation time).

Step 1 records were created without --owner and without replacing prior records. Ready: lem-ip-riemannian-green-boundary-traces-and-wave-lifting, lem-ip-borel-jet-realization-and-beam-patching, def-ip-simple-riemannian-background, lem-ip-variable-metric-domain-of-dependence, lem-ip-simple-manifold-no-return-extension, and lem-ip-smooth-boundary-tests-separate-locally-integrable-traces. Escalated: thm-ip-variable-metric-wave-ibvp-energy-wellposedness, def-ip-hyperbolic-dirichlet-to-neumann-map, lem-ip-wave-alessandrini-identity, lem-ip-gaussian-beam-null-bicharacteristic, lem-ip-simple-geodesic-polar-extension, lem-ip-simple-geometry-global-eikonal-geometric-optics, thm-ip-wave-data-determine-light-ray-integrals, cor-ip-wave-coefficient-uniqueness-under-simple-geometry, ex-ip-40-ray-limit-error-accounting, ex-ip-40-finite-time-invisible-perturbation, and ex-ip-40-simple-geometry-adequate-observation-time.

Final checks: source-fetch-check --stamp passed with 6/6 sources fetch-verified and resolved, 0 newly stamped. proof-layout passed for 17 items and 39 proof steps with 0 defects. The 10 completed proof contracts validate with 0 errors and 0 warnings; no contract is claimed for the seven definitions or unfinished-proof items. Exact carrier/frontmatter/manifest dependency arrays, dependency levels, page inventories, empty page bodies, and uninterrupted statement sections pass their scoped checks. All 17 Step 1 dependency hashes are current; 6 are ready and 11 are escalated.

The run-wide item-dependency-levels check exits 1 because of 137 unrelated errors: empty inventories in other assigned pages and existing dependency-level mismatches in unrelated knot items. It reports no batch-40 item errors. No unrelated scaffold, plan, published content, verdict, or engine state was changed.

Next action: owner review of the 11 escalated items, beginning with the variable-metric energy solver and classical DN solvability; the plan-controlled polar/GO route and batch-38 X-ray supplier also remain unresolved.
