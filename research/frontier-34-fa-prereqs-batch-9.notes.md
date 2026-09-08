# Batch 9 — frontier-34-fa-prereqs

**BLOCKED — provisional scaffold, not sufficient or publishable.** The two owned pairs contain 89 items (48 A + 8 B; 24 A + 9 B). Neither pair has complete source verification or a complete mathematical dependency audit. No published content, prose design, canonical plan, other batch, or autopilot state was changed by this worker.

## Authority and design comparison

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md, the beta batch task, both assigned designs, the current plan and owned evidence. The batch task authorizes only these `.pages.json`, `.coverage.json`, and `.notes.md` files. Scratch logs were kept under `/tmp/fa9-sources`; the material findings are preserved here.

The controlling prose design is `research/plan-functional-analysis-track.md`, complete FA-24 and FA-25 sections (around lines 1732–1872), together with its convention, source and boundary ledgers. The line-52 mention is an index entry, not the mathematical section. Read the Fourier design prerequisite/convention section around lines 106–163, including its line-115 occurrence: that occurrence imports this pair; it does not define a competing distribution scope. The functional-analysis design gives the detailed inventory and proof routes and therefore controls prose scope. The current `research/plan-spec.json` controls actual placement and requires edges.

Conflicts and resolutions:

- Preserve plan orders 288.093/288.094 and 288.095/288.096, functional-analysis category and companion IDs. The plan has empty item inventories for these rows; the provisional inventories remain in the authorized manifest, not spliced into the plan.
- The design names FA-6/FA-23, MT-7/8/15 and multivariable calculus for FA-24, and FA-23/24 plus MT-14 for FA-25. The current plan instead gives the immediate predecessor chain through Schwartz examples and distributions examples. Keep those exact edges. The broad design reference to multivariable calculus does NOT prove the current page closure contains Green's identity: it does not. See F9-3.
- “Planned” measure-theory suppliers in the older prose are now published; their exact current statements control. In particular the published sigma-finite Lp duality theorem is real-valued, so a new local complex L1 representation lemma is required.
- The designed ID `thm-dirac-comb-is-fourier-invariant` is already published on `primitive-dirichlet-l-functions-and-functional-equations`, with a one-dimensional Poisson-summation statement. Its later placement and different statement cannot supply this pair. Preserve the full n-dimensional theorem under the unused ID `thm-unit-lattice-dirac-comb-is-fourier-invariant-in-tempered-distributions`, updating the owned example and coverage.
- “When support conditions make every pairing defined” is made precise by at least two compactly supported factors for three-factor associativity, as in Gelca 7.7.5. Arbitrary pairwise convolution existence is not an associativity theorem.

## Changes and mathematical conventions

Retained all 31+8 FA-24 and 19+9 FA-25 designed results, with the one ID replacement above. Added 17 A results to FA-24 and 5 to FA-25 in proof order. Every item has an explicit deps array. Both A inventories remain below the 60-item limit; no additional A/B pair has yet been shown necessary. Outstanding page-edge repair is not a proposal for an invented extra pair.

FA-24 additions supply Euclidean cutoffs/partitions, completeness of D_K, the LF universal property, bounded sets with a common support, smooth parameter pairings, Frechet Baire uniform estimates, diffeomorphism pullback, tensor definition and well-definedness, cutoff extension to smooth functions, support-controlled continuous primitives, simultaneous multiplier/distribution convergence, ambient-closed-support extension by zero, translation-invariant operators, complex L1 representation, product-test density and compactness of closed bounded test sets. The exact item list and individual proof strategies are in the manifest.

FA-25 additions supply continuous dense D inclusion into S, smooth polynomially bounded multipliers, Schwartz parameter/integral estimates, the smooth polynomial-growth Fourier transform of a compact distribution, and compact-distribution convolution on S and S'.

Tests and distributions are complex, with bilinear pairing, no conjugation. Use dx and exp(-2 pi i x.xi); F squared is reflection, F derivative is multiplication by 2 pi i xi, and F(xu)=-(2 pi i)^(-1) derivative(Fu). The L2 agreement proof uses conjugation where needed to translate the upstream sesquilinear Parseval identity. Delta and plane waves test these signs. The principal-value example re-establishes its S estimate locally and uses x pv(1/x)=1, yielding Fpv=-i pi sgn; it does not depend on another pair's B item.

D topology is constructed by seminorms continuous on each D_K, not defined by sequential convergence. Common-support boundedness is proved by an escaping-point seminorm. Strong continuity statements now explicitly depend on the bounded-set topology definition. D-to-S continuity and density are both explicit before restriction and uniqueness claims. Mixed-partial commutation uses the exact published symmetry theorem componentwise over C.

The distribution pullback includes the absolute inverse Jacobian; arbitrary smooth pullback is not claimed. Tensor pairing order is justified by product-mollifier/Riemann-sum density, avoiding a Fourier-series dependency circle. Convolution uses compact support intersections and actual cutoffs. Compact extension uses a cutoff and locality, not Hahn–Banach. Local structure localizes first, extends to R^n and then uses a containing box; arbitrary compact K is not assumed to be a box. Complex Hahn–Banach plus the new complex L1 density lemma gives the planned continuous-primitive route. The latter lemma takes real/imaginary restrictions of the functional and combines real bounded densities; a norm bound of twice the original suffices.

The jump example now explicitly assumes the classical piecewise derivative is locally integrable and finite one-sided values exist (C1 up to each side suffices). C1 only on the open pieces would not justify the regular derivative term. The escaping bump j rho(jx-2) tends pointwise to zero even at zero but tends to delta distributionally. Point-supported distributions have support contained in the point; the zero combination has empty support. The Newtonian example retains Delta[-1/(4 pi |x|)]=delta in dimension three. The product obstruction spells out associative, commutative and differential algebra assumptions and uses H squared=H and H cubed=H. PDE existence, Sobolev estimates, Paley–Wiener and microlocal results remain orientation only.

Axiom accounting is provisional but not silently ZF: Baire on D_K and diagonal/compactness arguments inherit Dependent Choice and the published Arzela–Ascoli Countable Choice assumptions. Local structure inherits complex Hahn–Banach's choice strength and the measure-theory suppliers' assumptions. Countable partitions and selections are recorded in strategies. Sharper choice claims require the unfinished transitive audit.

## Fatal blockers and evidence

### F9-1 — full-text reading and fetch verification

Every source row is explicitly marked reading_status=incomplete, with provisional rather than sufficient backing. Two independent complete treatments per A have NOT been achieved. Browser excerpts are not complete-text evidence and PDF metadata is not fetch verification.

- Gelca, https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf : partial readings of sections 7.2–7.7, printed pp.103–121 (including 7.7.5 through p.121), and 8.4 pp.128–131. Coverage records the named definitions, numbered theorems, support, topology, structure, convolution and Fourier results. Proofs/exercises outside inspected portions remain open.
- Knapp, https://www.math.stonybrook.edu/~aknapp/download/a2-1-realanal-clickable.pdf : corrected 2017 digital second edition; partial IV section 7, Lemma 4.27 and Propositions 4.28–4.29, printed pp.136–140 / PDF pp.166–170. The design's IV section 2 and V sections 1–3 (and V section 4 for tempered distributions) remain unread. This row does not establish complete independent distribution coverage.
- Dyatlov, https://math.mit.edu/~dyatlov/18.155/155-notes.pdf : December 10, 2022 notes; partial section 11.2.1–11.2.3 pp.126–131. Theorems 11.19–11.26 and 11.28 have provisional mappings. 11.27 is a real-analyticity remark, not the compact-convolution theorem. The design's chapters 2–4 and 6 and the remainder of 11.1–11.2 need complete reading; existing manifest citations to those chapters are not yet harvested sufficiency evidence.

Shell PDF fetches failed DNS resolution; pdftotext was unavailable. The browser exposed PDF text excerpts but multiple screenshots of Gelca pages failed with cache misses. The alternate same-text MIT path https://math.mit.edu/~dyatlov/18.155-F22/155-notes.pdf failed as unsafe/nonretryable in the browser. Knapp's alternative https://www.math.stonybrook.edu/~aknapp/download/a2-realanal-inside.pdf exposed a different 2016 648-page edition, not the 2017 650-page corrected text: no silent replacement was made. A replacement would retain original_url and require edition/locator reconciliation and reharvesting. Teschl and Heil remain design source targets, not falsely claimed read sources.

Observed Gelca excerpt issues are explicitly corrected in the proposed mathematics: mollifier mass scaling is j^n rather than the displayed j^(-1); support equality excludes the zero combination; arbitrary compact sets are not cubes; compact-support extension is cutoff-local; Fourier normalization is translated to dx/negative 2 pi. These corrections do not substitute for reading and verifying the full relevant source.

Coverage retains every harvested result, including inline polynomial powers |x|^p for p>-n, joint multiplier convergence, extension by zero and translation-invariant operators. Weyl's lemma is deferred to the valid harmonic-functions-and-mean-values-in-rn destination for its PDE regularity scope; Paley–Wiener is mapped to the orientation remark. No mathematics or dead source row was deleted to clear a gate. Source-backing currently identifies 35 mapped results with no openable source according to the liveness evidence. This also does not certify the other canonical-only results: they still require full harvesting/backing.

### F9-2 — complete dependency adequacy remains unproved

The structural scan below expands the entire 214-page requires closure, all items supplied on those pages, and transitive deps/justified_by/forward_refs through the plan, all 367 batch manifests and published frontmatter. It is broader than the earlier owned-root-only scan, which this record replaces. It is still metadata traversal, NOT reading all transitive statements and proofs. Historical variants cannot establish current supplier adequacy. Some upstream planned pages still have no item inventory, and the whole-run policy check finds missing and forward suppliers. Do not certify closure because an ID resolves.

The earlier concrete path comb -> Poisson summation -> periodic Fourier uniqueness -> missing thm-complex-stone-weierstrass was repaired upstream during this work. The reread upstream lemma now names thm-complex-stone-weierstrass-self-adjoint and explicitly verifies the product-torus, separation and conjugation hypotheses. This worker did not edit that batch. The published self-adjoint complex theorem was read; the obsolete missing-ID finding is closed, not a current blocker.

Exact supplier inspections included complex Hahn–Banach; real Lp duality; uniform derivative limits on an interval; complex dominated convergence and Fubini interfaces; mollifier definition/smoothness; real Arzela–Ascoli with choice hypotheses; higher mixed-partial symmetry; C1 change of variables; Schwartz topology, cutoffs/density, Fourier/Plancherel/Poisson interfaces; and the restricted Green identity. Later manifold cutoff/partition results at order 445 cannot be suppliers; the scaffold uses earlier Euclidean/Schwartz construction instead.

The scan records cycles in deps plus justified_by. Many are candidate-definition/well-definedness return edges (for example def-integers -> lem-int-equivalence -> def-integers); these need semantic discharge classification, not blind deletion or an assertion that all are fatal proof cycles. All forward_refs are conservatively traversed for reachability; their load-bearing status also remains to be audited. No owned direct forward dependency or owned ID collision remains. No route from Foundations in this scanned closure to the beyond-choice catalogue items was detected, and that catalogue page is absent from the owned requires closure. This is not a global semantic certification of every Foundations page.

### F9-3 — page repair and remaining proof obligations

Concrete unresolved path: distributions-test-functions-and-differentiation-examples -> ex-distributional-laplacian-of-the-newtonian-kernel -> cor-greens-second-identity-for-glued-elementary-solid-regions -> page the-divergence-theorem-and-classical-stokes (order 288.00017). That earlier page is outside the current requires closure. An authorized plan writer must add its backward requires edge to the examples page (288.094), or a fully proved earlier local replacement must be supplied. The current batch cannot edit the plan or prose. The Green statement itself only covers finite glued elementary solids and real C2 fields near the region: the annulus decomposition, real/imaginary extension, measure agreement and inner-boundary limit must be proved. The Newtonian example remains blocked.

Additional explicit proof obligations before sufficiency: complete the Euclidean exhaustion/shell partition argument; the compact-integral seminorm and tail estimates in each parameter-pairing use; product-test density with fixed support margins; the local continuous-primitive derivative-image estimate and support-controlled inverse Leibniz expansion; the exact choice assumptions through all suppliers; and full independent backing of the B examples, especially principal value, Newton kernel and the product obstruction. No incomplete strategy is being presented as a verified proof.

No need for a new prerequisite pair has yet been established: the local added machinery fits the existing A pages. If subsequent full reading shows a new pair necessary, the authorized writer must record its title/category/placement/prerequisites/A+B inventories here and leave consumers blocked until prose and plan are updated. Do not remove the current examples or structural theorems to bypass these obligations.

## Checks actually run

The earlier 83-item checkpoint passed coverage (121 harvest rows) and manifest-deps (276 whole-run items), while content policy had 43 errors, including the now-fixed comb collision. Later results supersede those counts. Source-fetch stamp mode with --timeout-sec 10 failed EAI_AGAIN on all four rows and wrote no verification stamps. URL sweep with --fail-on-dead --timeout-ms 3000 reported 0/3 unique URLs live (curl DNS error 6). These were network/tool-path failures, not proof that the documents have disappeared globally. No successful full-text fetch is claimed.

Final recorded commands and results are appended below. manifest-deps checks explicit arrays, not semantic closure. validate-plan only certifies item graphs already in the canonical plan (892 populated pages, 589 empty); our unspliced inventories are not thereby approved. extcheck concerns existing published content and reports inherited-unproved warnings. No publication/build transition was run.


### coverage

`node tools/coverage-checklist.mjs research/frontier-34-fa-prereqs-batch-9.coverage.json --require-destination` — exit 0.

```text
coverage-checklist: 2 page(s), 133 harvested result(s), 0 error(s), 0 warning(s)
```

### deps

`node tools/manifest-deps.mjs research/frontier-34-fa-prereqs-batch-*.pages.json` — exit 0.

```text
manifest-deps: 560 item(s), 0 normalized, 0 error(s)
```

### policy-final

`node tools/content-policy.mjs research/frontier-34-fa-prereqs-batch-*.pages.json --manifest-only --json` — exit 1.

```json
{
  "summary": {
    "scope": 560,
    "errors": 66,
    "warnings": 0
  },
  "errors": [
    {
      "code": "batch-dependency-missing",
      "message": "thm-weakly-convergent-sequences-are-norm-bounded depends on thm-sequential-uniform-boundedness-under-countable-choice, which is neither declared by this batch nor an item on disk",
      "id": "thm-weakly-convergent-sequences-are-norm-bounded"
    },
    {
      "code": "batch-dependency-missing",
      "message": "def-extreme-point-and-face depends on def-locally-convex-topological-vector-space, which is neither declared by this batch nor an item on disk",
      "id": "def-extreme-point-and-face"
    },
    {
      "code": "batch-dependency-missing",
      "message": "thm-krein-milman-existence-of-extreme-points depends on thm-locally-convex-continuous-dual-separates-points, which is neither declared by this batch nor an item on disk",
      "id": "thm-krein-milman-existence-of-extreme-points"
    },
    {
      "code": "batch-dependency-missing",
      "message": "thm-krein-milman-closed-convex-hull-form depends on thm-locally-convex-strict-separation, which is neither declared by this batch nor an item on disk",
      "id": "thm-krein-milman-closed-convex-hull-form"
    },
    {
      "code": "batch-dependency-missing",
      "message": "cor-bauer-maximum-principle depends on thm-locally-convex-continuous-dual-separates-points, which is neither declared by this batch nor an item on disk",
      "id": "cor-bauer-maximum-principle"
    },
    {
      "code": "batch-dependency-missing",
      "message": "thm-milman-converse-for-compact-generating-sets depends on def-locally-convex-topological-vector-space, which is neither declared by this batch nor an item on disk",
      "id": "thm-milman-converse-for-compact-generating-sets"
    },
    {
      "code": "batch-dependency-missing",
      "message": "def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis depends on def-hilbert-space, which is neither declared by this batch nor an item on disk",
      "id": "def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis"
    },
    {
      "code": "batch-dependency-missing",
      "message": "def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis depends on def-orthogonality-and-orthogonal-complement, which is neither declared by this batch nor an item on disk",
      "id": "def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis"
    },
    {
      "code": "batch-dependency-missing",
      "message": "lem-finite-bessel-inequality depends on lem-pythagorean-theorem-and-finite-orthogonal-sums, which is neither declared by this batch nor an item on disk",
      "id": "lem-finite-bessel-inequality"
    },
    {
      "code": "batch-dependency-missing",
      "message": "lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums depends on lem-pythagorean-theorem-and-finite-orthogonal-sums, which is neither declared by this batch nor an item on disk",
      "id": "lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums"
    },
    {
      "code": "batch-dependency-missing",
      "message": "lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums depends on thm-cauchy-schwarz-in-an-inner-product-space, which is neither declared by this batch nor an item on disk",
      "id": "lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums"
    },
    {
      "code": "batch-dependency-missing",
      "message": "lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums depends on def-hilbert-space, which is neither declared by this batch nor an item on disk",
      "id": "lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums"
    },
    {
      "code": "batch-dependency-missing",
      "message": "thm-parseval-equivalences-for-a-complete-orthonormal-family depends on thm-double-orthogonal-complement-is-closure, which is neither declared by this batch nor an item on disk",
      "id": "thm-parseval-equivalences-for-a-complete-orthonormal-family"
    },
    {
      "code": "batch-dependency-missing",
      "message": "lem-l-two-with-the-integral-pairing-is-a-hilbert-space depends on def-hilbert-space, which is neither declared by this batch nor an item on disk",
      "id": "lem-l-two-with-the-integral-pairing-is-a-hilbert-space"
    },
    {
      "code": "batch-forward-dependency",
      "message": "ex-hilbert-schmidt-kernel-operator-is-compact-on-l-two depends on later item def-hilbert-schmidt-operator (compact-self-adjoint-hilbert-schmidt-and-trace-class-operators)",
      "id": "ex-hilbert-schmidt-kernel-operator-is-compact-on-l-two"
    },
    {
      "code": "batch-forward-dependency",
      "message": "ex-hilbert-schmidt-kernel-operator-is-compact-on-l-two depends on later item thm-l-two-kernels-give-hilbert-schmidt-operators (compact-self-adjoint-hilbert-schmidt-and-trace-class-operators)",
      "id": "ex-hilbert-schmidt-kernel-operator-is-compact-on-l-two"
    },
    {
      "code": "batch-forward-dependency",
      "message": "ex-hilbert-schmidt-kernel-operator-is-compact-on-l-two depends on later item thm-hilbert-schmidt-operators-are-compact (compact-self-adjoint-hilbert-schmidt-and-trace-class-operators)",
      "id": "ex-hilbert-schmidt-kernel-operator-is-compact-on-l-two"
    },
    {
      "code": "batch-dependency-missing",
      "message": "lem-norm-of-a-self-adjoint-operator-from-its-quadratic-form depends on def-self-adjoint-positive-unitary-and-normal-operator, which is neither declared by this batch nor an item on disk",
      "id": "lem-norm-of-a-self-adjoint-operator-from-its-quadratic-form"
    },
    {
      "code": "batch-dependency-missing",
      "message": "lem-norm-of-a-self-adjoint-operator-from-its-quadratic-form depends on thm-hilbert-adjoint-properties, which is neither declared by this batch nor an item on disk",
      "id": "lem-norm-of-a-self-adjoint-operator-from-its-quadratic-form"
    },
    {
      "code": "batch-dependency-missing",
      "message": "lem-norm-of-a-self-adjoint-operator-from-its-quadratic-form depends on thm-cauchy-schwarz-in-an-inner-product-space, which is neither declared by this batch nor an item on disk",
      "id": "lem-norm-of-a-self-adjoint-operator-from-its-quadratic-form"
    },
    {
      "code": "batch-dependency-missing",
      "message": "lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal depends on def-self-adjoint-positive-unitary-and-normal-operator, which is neither declared by this batch nor an item on disk",
      "id": "lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal"
    },
    {
      "code": "batch-dependency-missing",
      "message": "lem-orthogonal-complement-of-an-eigenspace-is-invariant depends on def-self-adjoint-positive-unitary-and-normal-operator, which is neither declared by this batch nor an item on disk",
      "id": "lem-orthogonal-complement-of-an-eigenspace-is-invariant"
    },
    {
      "code": "batch-dependency-missing",
      "message": "lem-orthogonal-complement-of-an-eigenspace-is-invariant depends on def-orthogonality-and-orthogonal-complement, which is neither declared by this batch nor an item on disk",
      "id": "lem-orthogonal-complement-of-an-eigenspace-is-invariant"
    },
    {
      "code": "batch-dependency-missing",
      "message": "thm-spectral-theorem-for-compact-self-adjoint-operators depends on thm-orthogonal-decomposition-by-a-closed-subspace, which is neither declared by this batch nor an item on disk",
      "id": "thm-spectral-theorem-for-compact-self-adjoint-operators"
    },
    {
      "code": "batch-dependency-missing",
      "message": "lem-positive-square-root-of-a-compact-positive-operator depends on def-self-adjoint-positive-unitary-and-normal-operator, which is neither declared by this batch nor an item on disk",
      "id": "lem-positive-square-root-of-a-compact-positive-operator"
    },
    {
      "code": "batch-dependency-missing",
      "message": "def-absolute-value-and-singular-values-of-a-compact-operator depends on thm-hilbert-adjoint-properties, which is neither declared by this batch nor an item on disk",
      "id": "def-absolute-value-and-singular-values-of-a-compact-operator"
    },
    {
      "code": "batch-dependency-missing",
      "message": "thm-singular-value-decomposition-for-compact-operators depends on thm-hilbert-adjoint-properties, which is neither declared by this batch nor an item on disk",
      "id": "thm-singular-value-decomposition-for-compact-operators"
    },
    {
      "code": "batch-dependency-missing",
      "message": "def-hilbert-schmidt-operator depends on def-hilbert-space, which is neither declared by this batch nor an item on disk",
      "id": "def-hilbert-schmidt-operator"
    },
    {
      "code": "batch-dependency-missing",
      "message": "thm-hilbert-schmidt-norm-is-basis-independent depends on thm-hilbert-adjoint-properties, which is neither declared by this batch nor an item on disk",
      "id": "thm-hilbert-schmidt-norm-is-basis-independent"
    },
    {
      "code": "batch-dependency-missing",
      "message": "thm-lidskii-for-trace-class-operators depends on lem-fa5-quasinilpotent-trace-class-has-zero-trace, which is neither declared by this batch nor an item on disk",
      "id": "thm-lidskii-for-trace-class-operators"
    },
    {
      "code": "batch-dependency-missing",
      "message": "thm-lidskii-for-trace-class-operators depends on lem-fa5-generalized-eigenspace-trace-decomposition, which is neither declared by this batch nor an item on disk",
      "id": "thm-lidskii-for-trace-class-operators"
    },
    {
      "code": "batch-dependency-missing",
      "message": "lem-bounded-hilbert-operators-form-a-c-star-algebra depends on thm-hilbert-adjoint-properties, which is neither declared by this batch nor an item on disk",
      "id": "lem-bounded-hilbert-operators-form-a-c-star-algebra"
    },
    {
      "code": "batch-dependency-missing",
      "message": "lem-spectrum-of-a-self-adjoint-operator-is-real depends on thm-hilbert-adjoint-properties, which is neither declared by this batch nor an item on disk",
      "id": "lem-spectrum-of-a-self-adjoint-operator-is-real"
    },
    {
      "code": "batch-dependency-missing",
      "message": "lem-spectrum-of-a-self-adjoint-operator-is-real depends on lem-kernel-range-orthogonality-for-hilbert-adjoints, which is neither declared by this batch nor an item on disk",
      "id": "lem-spectrum-of-a-self-adjoint-operator-is-real"
    },
    {
      "code": "batch-dependency-missing",
      "message": "lem-spectrum-of-a-self-adjoint-operator-is-real depends on def-self-adjoint-positive-unitary-and-normal-operator, which is neither declared by this batch nor an item on disk",
      "id": "lem-spectrum-of-a-self-adjoint-operator-is-real"
    },
    {
      "code": "batch-dependency-missing",
      "message": "def-order-on-bounded-self-adjoint-operators depends on def-self-adjoint-positive-unitary-and-normal-operator, which is neither declared by this batch nor an item on disk",
      "id": "def-order-on-bounded-self-adjoint-operators"
    },
    {
      "code": "batch-dependency-missing",
      "message": "def-c-star-algebra-generated-by-a-normal-operator depends on thm-hilbert-adjoint-properties, which is neither declared by this batch nor an item on disk",
      "id": "def-c-star-algebra-generated-by-a-normal-operator"
    },
    {
      "code": "batch-dependency-missing",
      "message": "def-isometry-coisometry-and-partial-isometry depends on thm-hilbert-adjoint-properties, which is neither declared by this batch nor an item on disk",
      "id": "def-isometry-coisometry-and-partial-isometry"
    },
    {
      "code": "batch-dependency-missing",
      "message": "def-isometry-coisometry-and-partial-isometry depends on thm-orthogonal-decomposition-by-a-closed-subspace, which is neither declared by this batch nor an item on disk",
      "id": "def-isometry-coisometry-and-partial-isometry"
    },
    {
      "code": "batch-dependency-missing",
      "message": "thm-partial-isometry-characterizations depends on lem-kernel-range-orthogonality-for-hilbert-adjoints, which is neither declared by this batch nor an item on disk",
      "id": "thm-partial-isometry-characterizations"
    },
    {
      "code": "batch-dependency-missing",
      "message": "thm-partial-isometry-characterizations depends on thm-orthogonal-decomposition-by-a-closed-subspace, which is neither declared by this batch nor an item on disk",
      "id": "thm-partial-isometry-characterizations"
    },
    {
      "code": "batch-dependency-missing",
      "message": "def-numerical-range-and-numerical-radius depends on def-hilbert-space, which is neither declared by this batch nor an item on disk",
      "id": "def-numerical-range-and-numerical-radius"
    },
    {
      "code": "batch-dependency-missing",
      "message": "thm-numerical-radius-is-an-equivalent-operator-norm depends on thm-jordan-von-neumann-polarization, which is neither declared by this batch nor an item on disk",
      "id": "thm-numerical-radius-is-an-equivalent-operator-norm"
    },
    {
      "code": "batch-dependency-missing",
      "message": "lem-polynomial-calculus-is-isometric-for-self-adjoint-operators depends on thm-hilbert-adjoint-properties, which is neither declared by this batch nor an item on disk",
      "id": "lem-polynomial-calculus-is-isometric-for-self-adjoint-operators"
    },
    {
      "code": "batch-dependency-missing",
      "message": "def-absolute-value-of-a-bounded-operator depends on thm-hilbert-adjoint-properties, which is neither declared by this batch nor an item on disk",
      "id": "def-absolute-value-of-a-bounded-operator"
    },
    {
      "code": "batch-dependency-missing",
      "message": "thm-polar-decomposition-for-bounded-operators depends on thm-orthogonal-decomposition-by-a-closed-subspace, which is neither declared by this batch nor an item on disk",
      "id": "thm-polar-decomposition-for-bounded-operators"
    },
    {
      "code": "batch-dependency-missing",
      "message": "thm-toeplitz-hausdorff depends on thm-orthogonal-decomposition-by-a-closed-subspace, which is neither declared by this batch nor an item on disk",
      "id": "thm-toeplitz-hausdorff"
    },
    {
      "code": "batch-dependency-missing",
      "message": "def-projection-valued-measure depends on def-hilbert-space, which is neither declared by this batch nor an item on disk",
      "id": "def-projection-valued-measure"
    },
    {
      "code": "batch-dependency-missing",
      "message": "def-projection-valued-measure depends on thm-hilbert-adjoint-properties, which is neither declared by this batch nor an item on disk",
      "id": "def-projection-valued-measure"
    },
    {
      "code": "batch-dependency-missing",
      "message": "lem-weak-and-strong-additivity-of-orthogonal-projections depends on lem-orthogonal-projection-is-linear-self-adjoint-contractive, which is neither declared by this batch nor an item on disk",
      "id": "lem-weak-and-strong-additivity-of-orthogonal-projections"
    },
    {
      "code": "batch-dependency-missing",
      "message": "lem-scalar-and-complex-measures-from-a-pvm depends on thm-cauchy-schwarz-in-an-inner-product-space, which is neither declared by this batch nor an item on disk",
      "id": "lem-scalar-and-complex-measures-from-a-pvm"
    },
    {
      "code": "batch-dependency-missing",
      "message": "thm-bounded-borel-pvm-integral depends on def-hilbert-space, which is neither declared by this batch nor an item on disk",
      "id": "thm-bounded-borel-pvm-integral"
    },
    {
      "code": "batch-dependency-missing",
      "message": "lem-positive-continuous-calculus-yields-a-regular-pvm depends on thm-riesz-representation-for-hilbert-space, which is neither declared by this batch nor an item on disk",
      "id": "lem-positive-continuous-calculus-yields-a-regular-pvm"
    },
    {
      "code": "batch-dependency-missing",
      "message": "lem-maximal-orthogonal-family-of-cyclic-reducing-subspaces depends on thm-orthogonal-decomposition-by-a-closed-subspace, which is neither declared by this batch nor an item on disk",
      "id": "lem-maximal-orthogonal-family-of-cyclic-reducing-subspaces"
    },
    {
      "code": "batch-dependency-missing",
      "message": "thm-stone-resolvent-formula-for-spectral-projections depends on thm-bounded-linear-maps-commute-with-bochner-integration, which is neither declared by this batch nor an item on disk",
      "id": "thm-stone-resolvent-formula-for-spectral-projections"
    },
    {
      "code": "batch-dependency-missing",
      "message": "ex-spectral-projection-of-an-isolated-eigenvalue-agrees-with-the-riesz-projection depends on thm-bounded-linear-maps-commute-with-bochner-integration, which is neither declared by this batch nor an item on disk",
      "id": "ex-spectral-projection-of-an-isolated-eigenvalue-agrees-with-the-riesz-projection"
    },
    {
      "code": "batch-dependency-missing",
      "message": "def-unbounded-linear-operator-domain-and-graph depends on def-hilbert-space, which is neither declared by this batch nor an item on disk",
      "id": "def-unbounded-linear-operator-domain-and-graph"
    },
    {
      "code": "batch-dependency-missing",
      "message": "def-adjoint-of-a-densely-defined-unbounded-operator depends on thm-riesz-representation-for-hilbert-space, which is neither declared by this batch nor an item on disk",
      "id": "def-adjoint-of-a-densely-defined-unbounded-operator"
    },
    {
      "code": "batch-dependency-missing",
      "message": "thm-closable-iff-adjoint-domain-is-dense depends on thm-double-orthogonal-complement-is-closure, which is neither declared by this batch nor an item on disk",
      "id": "thm-closable-iff-adjoint-domain-is-dense"
    },
    {
      "code": "batch-dependency-missing",
      "message": "thm-cayley-correspondence depends on thm-hilbert-adjoint-properties, which is neither declared by this batch nor an item on disk",
      "id": "thm-cayley-correspondence"
    },
    {
      "code": "batch-dependency-missing",
      "message": "def-strongly-continuous-one-parameter-unitary-group depends on def-hilbert-space, which is neither declared by this batch nor an item on disk",
      "id": "def-strongly-continuous-one-parameter-unitary-group"
    },
    {
      "code": "batch-dependency-missing",
      "message": "lem-laplace-resolvents-of-a-unitary-group depends on thm-bochner-dominated-convergence, which is neither declared by this batch nor an item on disk",
      "id": "lem-laplace-resolvents-of-a-unitary-group"
    },
    {
      "code": "batch-dependency-missing",
      "message": "lem-laplace-resolvents-of-a-unitary-group depends on thm-bounded-linear-maps-commute-with-bochner-integration, which is neither declared by this batch nor an item on disk",
      "id": "lem-laplace-resolvents-of-a-unitary-group"
    },
    {
      "code": "batch-dependency-missing",
      "message": "thm-von-neumann-self-adjoint-extension-parameterization depends on thm-double-orthogonal-complement-is-closure, which is neither declared by this batch nor an item on disk",
      "id": "thm-von-neumann-self-adjoint-extension-parameterization"
    },
    {
      "code": "batch-forward-dependency",
      "message": "ex-momentum-operator-under-the-fourier-transform depends on later item thm-plancherel (schwartz-space-and-the-plancherel-theorem)",
      "id": "ex-momentum-operator-under-the-fourier-transform"
    },
    {
      "code": "batch-forward-dependency",
      "message": "ex-momentum-operator-under-the-fourier-transform depends on later item thm-fourier-transform-maps-schwartz-space-continuously-to-itself (schwartz-space-and-the-plancherel-theorem)",
      "id": "ex-momentum-operator-under-the-fourier-transform"
    }
  ],
  "warnings": []
}
```

### plan-final

`node tools/validate-plan.mjs research/plan-spec.json` — exit 0.

Diagnostic groups: {"[redundant-prereq]": 952}. Output SHA256: 7f63a75c1384761e5256f2126307893d9ab628a1a37a838d93b385e363a16308.

OK — declared page order is acyclic and consistent; no item-level cycles, forward
references, B-page dependencies, or unresolved ids among the 892 page(s) with item lists.
NOTE: 589 planned page(s) carry no item list yet (marked * above). Their reading
order is guaranteed; their item dependencies are not yet asserted, so re-run this
after writing each page's items.

### ext-final

`node tools/extcheck.mjs` — exit 0.

Diagnostic groups: {"[unproved-on-published]": 63}. Output SHA256: 9606d044553aaf35a1ec18a783e5762cb80b9e7aa785966774fc06284d167761.

OK — every recorded-not-proved statement is a cited remark with no proof, and every consequence is marked.

### backing

`node tools/source-backing.mjs --coverage research/frontier-34-fa-prereqs-batch-9.coverage.json --liveness /tmp/fa9-sources/liveness.json --require-verified` — exit 1.

```text
source-backing: 35 authored result(s) have no openable source left
ERROR backing-lost: distributions-test-functions-and-differentiation: def-test-function-topology — backed only by https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf, https://www.math.stonybrook.edu/~aknapp/download/a2-1-realanal-clickable.pdf
    "7.2 Test functions, Theorems 7.2.1-7.2.2; Proposition 7.2.1" via Razvan Gelca, Functional Analysis @ Sections 7.2-7.7, printed pp. 103-121: partial browser reading; named targets below. No claim of complete section reading.
    "IV.4.29 exhaustion independence" via Anthony W. Knapp, Advanced Real Analysis, digital second edition, corrected 2017 @ IV section 7, Lemma 4.27 and Propositions 4.28-4.29, printed pp. 136-140 (PDF pp. 166-170); partial browser reading of the topology construction. V sections 1-3 remain to be read.
ERROR backing-lost: distributions-test-functions-and-differentiation: lem-bounded-test-function-sets-have-common-compact-support — backed only by https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf
    "7.2.2(b) bounded sets" via Razvan Gelca, Functional Analysis @ Sections 7.2-7.7, printed pp. 103-121: partial browser reading; named targets below. No claim of complete section reading.
ERROR backing-lost: distributions-test-functions-and-differentiation: thm-sequential-convergence-in-test-function-space — backed only by https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf
    "7.2.2(c) common-support convergence" via Razvan Gelca, Functional Analysis @ Sections 7.2-7.7, printed pp. 103-121: partial browser reading; named targets below. No claim of complete section reading.
ERROR backing-lost: distributions-test-functions-and-differentiation: thm-local-finite-order-characterization-of-distributions — backed only by https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf
    "7.3 Theorem 7.3.1 finite-order continuity" via Razvan Gelca, Functional Analysis @ Sections 7.2-7.7, printed pp. 103-121: partial browser reading; named targets below. No claim of complete section reading.
ERROR backing-lost: distributions-test-functions-and-differentiation: def-dirac-delta-and-its-derivatives — backed only by https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf
    "7.3 delta and locally integrable examples" via Razvan Gelca, Functional Analysis @ Sections 7.2-7.7, printed pp. 103-121: partial browser reading; named targets below. No claim of complete section reading.
ERROR backing-lost: distributions-test-functions-and-differentiation: thm-leibniz-rule-for-distributions — backed only by https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf
    "7.3 differentiation and Proposition 7.3.1 Leibniz formula" via Razvan Gelca, Functional Analysis @ Sections 7.2-7.7, printed pp. 103-121: partial browser reading; named targets below. No claim of complete section reading.
ERROR backing-lost: distributions-test-functions-and-differentiation: thm-uniform-finite-order-bounds-for-pointwise-bounded-distributions — backed only by https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf
    "7.4 Theorem 7.4.1 limits" via Razvan Gelca, Functional Analysis @ Sections 7.2-7.7, printed pp. 103-121: partial browser reading; named targets below. No claim of complete section reading.
ERROR backing-lost: distributions-test-functions-and-differentiation: thm-sequential-convergence-of-smooth-multipliers-and-distributions — backed only by https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf
    "7.4.2 multiplication and limits" via Razvan Gelca, Functional Analysis @ Sections 7.2-7.7, printed pp. 103-121: partial browser reading; named targets below. No claim of complete section reading.
ERROR backing-lost: distributions-test-functions-and-differentiation: thm-distributions-form-a-sheaf — backed only by https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf
    "7.5.1 sheaf gluing" via Razvan Gelca, Functional Analysis @ Sections 7.2-7.7, printed pp. 103-121: partial browser reading; named targets below. No claim of complete section reading.
ERROR backing-lost: distributions-test-functions-and-differentiation: thm-extension-by-zero-for-distributions-with-ambient-closed-support — backed only by https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf
    "7.5.2 extension from closed support" via Razvan Gelca, Functional Analysis @ Sections 7.2-7.7, printed pp. 103-121: partial browser reading; named targets below. No claim of complete section reading.
ERROR backing-lost: distributions-test-functions-and-differentiation: thm-compactly-supported-distributions-have-global-finite-order — backed only by https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf
    "7.5.3 compact-support order" via Razvan Gelca, Functional Analysis @ Sections 7.2-7.7, printed pp. 103-121: partial browser reading; named targets below. No claim of complete section reading.
ERROR backing-lost: distributions-test-functions-and-differentiation: thm-distributions-supported-at-one-point — backed only by https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf
    "7.6.1 point support" via Razvan Gelca, Functional Analysis @ Sections 7.2-7.7, printed pp. 103-121: partial browser reading; named targets below. No claim of complete section reading.
ERROR backing-lost: distributions-test-functions-and-differentiation: thm-local-structure-of-distributions-as-derivatives-of-continuous-functions — backed only by https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf
    "7.6.2 continuous primitive" via Razvan Gelca, Functional Analysis @ Sections 7.2-7.7, printed pp. 103-121: partial browser reading; named targets below. No claim of complete section reading.
ERROR backing-lost: distributions-test-functions-and-differentiation: lem-compact-support-continuous-primitive-representation — backed only by https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf
    "7.6.3 support-controlled primitives" via Razvan Gelca, Functional Analysis @ Sections 7.2-7.7, printed pp. 103-121: partial browser reading; named targets below. No claim of complete section reading.
ERROR backing-lost: distributions-test-functions-and-differentiation: thm-global-locally-finite-structure-of-distributions — backed only by https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf
    "7.6.4 global structure" via Razvan Gelca, Functional Analysis @ Sections 7.2-7.7, printed pp. 103-121: partial browser reading; named targets below. No claim of complete section reading.
ERROR backing-lost: distributions-test-functions-and-differentiation: thm-convolution-with-a-test-function-is-smooth — backed only by https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf
    "7.7.1 smooth convolution" via Razvan Gelca, Functional Analysis @ Sections 7.2-7.7, printed pp. 103-121: partial browser reading; named targets below. No claim of complete section reading.
ERROR backing-lost: distributions-test-functions-and-differentiation: thm-mollifier-approximation-in-distributions — backed only by https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf
    "7.7.2 mollification" via Razvan Gelca, Functional Analysis @ Sections 7.2-7.7, printed pp. 103-121: partial browser reading; named targets below. No claim of complete section reading.
ERROR backing-lost: distributions-test-functions-and-differentiation: lem-compactly-supported-distributions-extend-to-smooth-functions — backed only by https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf
    "7.7.4 compact convolution with smooth functions" via Razvan Gelca, Functional Analysis @ Sections 7.2-7.7, printed pp. 103-121: partial browser reading; named targets below. No claim of complete section reading.
ERROR backing-lost: distributions-test-functions-and-differentiation: lem-convolution-of-distributions-is-well-defined-under-the-support-hypothesis — backed only by https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf
    "7.7 Proposition 7.7.1 convolution construction" via Razvan Gelca, Functional Analysis @ Sections 7.2-7.7, printed pp. 103-121: partial browser reading; named targets below. No claim of complete section reading.
ERROR backing-lost: distributions-test-functions-and-differentiation: thm-translation-invariant-test-function-operators-are-convolutions — backed only by https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf
    "7.7.3 translation-invariant operators" via Razvan Gelca, Functional Analysis @ Sections 7.2-7.7, printed pp. 103-121: partial browser reading; named targets below. No claim of complete section reading.
ERROR backing-lost: distributions-test-functions-and-differentiation: thm-associativity-of-distribution-convolution-under-compact-support — backed only by https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf
    "7.7.5 commutativity, support, associativity, delta identity, derivatives (printed pp.120-121)" via Razvan Gelca, Functional Analysis @ Sections 7.2-7.7, printed pp. 103-121: partial browser reading; named targets below. No claim of complete section reading.
ERROR backing-lost: distributions-test-functions-and-differentiation: thm-closed-bounded-test-function-sets-are-compact — backed only by https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf
    "7.2.3 Arzela-Ascoli and 7.2.2(d) compact bounded sets" via Razvan Gelca, Functional Analysis @ Sections 7.2-7.7, printed pp. 103-121: partial browser reading; named targets below. No claim of complete section reading.
ERROR backing-lost: distributions-test-functions-and-differentiation: lem-test-function-lf-topology-universal-property — backed only by https://www.math.stonybrook.edu/~aknapp/download/a2-1-realanal-clickable.pdf, https://www.math.stonybrook.edu/~aknapp/download/a2-1-realanal-clickable.pdf
    "IV.4.27 convex-neighborhood extension" via Anthony W. Knapp, Advanced Real Analysis, digital second edition, corrected 2017 @ IV section 7, Lemma 4.27 and Propositions 4.28-4.29, printed pp. 136-140 (PDF pp. 166-170); partial browser reading of the topology construction. V sections 1-3 remain to be read.
    "IV.4.28 strict inductive limits" via Anthony W. Knapp, Advanced Real Analysis, digital second edition, corrected 2017 @ IV section 7, Lemma 4.27 and Propositions 4.28-4.29, printed pp. 136-140 (PDF pp. 166-170); partial browser reading of the topology construction. V sections 1-3 remain to be read.
ERROR backing-lost: tempered-distributions-and-the-fourier-transform: thm-finite-seminorm-bound-characterizes-tempered-distributions — backed only by https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
    "11.19 and 11.20 tempered dual and finite estimate" via Semyon Dyatlov, Lecture notes for 18.155, December 10 2022 @ Section 11.2.1-11.2.3, printed pp. 126-131 (PDF pp. 126-131); partial browser reading. Section 11.2.4 and the exercises remain open.
ERROR backing-lost: tempered-distributions-and-the-fourier-transform: thm-polynomial-growth-functions-define-tempered-distributions — backed only by https://math.mit.edu/~dyatlov/18.155/155-notes.pdf, https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf
    "11.2.1 weighted L1 inclusion" via Semyon Dyatlov, Lecture notes for 18.155, December 10 2022 @ Section 11.2.1-11.2.3, printed pp. 126-131 (PDF pp. 126-131); partial browser reading. Section 11.2.4 and the exercises remain open.
    "8.4 polynomial-growth example" via Razvan Gelca, Functional Analysis @ Section 8.4, printed pp. 128-131; partial browser reading of Theorems 8.4.1-8.4.4 and the difference-quotient lemma, before the Paley-Wiener discussion.
ERROR backing-lost: tempered-distributions-and-the-fourier-transform: thm-differentiation-and-polynomial-multiplication-preserve-tempered-distributions — backed only by https://math.mit.edu/~dyatlov/18.155/155-notes.pdf, https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf
    "11.2.1 operations (1)-(6)" via Semyon Dyatlov, Lecture notes for 18.155, December 10 2022 @ Section 11.2.1-11.2.3, printed pp. 126-131 (PDF pp. 126-131); partial browser reading. Section 11.2.4 and the exercises remain open.
    "8.4.2 derivatives and multipliers" via Razvan Gelca, Functional Analysis @ Section 8.4, printed pp. 128-131; partial browser reading of Theorems 8.4.1-8.4.4 and the difference-quotient lemma, before the Paley-Wiener discussion.
ERROR backing-lost: tempered-distributions-and-the-fourier-transform: def-fourier-transform-of-a-tempered-distribution — backed only by https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
    "11.22 transpose definition" via Semyon Dyatlov, Lecture notes for 18.155, December 10 2022 @ Section 11.2.1-11.2.3, printed pp. 126-131 (PDF pp. 126-131); partial browser reading. Section 11.2.4 and the exercises remain open.
ERROR backing-lost: tempered-distributions-and-the-fourier-transform: thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials — backed only by https://math.mit.edu/~dyatlov/18.155/155-notes.pdf, https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf
    "11.23 delta and constant transforms" via Semyon Dyatlov, Lecture notes for 18.155, December 10 2022 @ Section 11.2.1-11.2.3, printed pp. 126-131 (PDF pp. 126-131); partial browser reading. Section 11.2.4 and the exercises remain open.
    "8.4 delta and polynomial transforms" via Razvan Gelca, Functional Analysis @ Section 8.4, printed pp. 128-131; partial browser reading of Theorems 8.4.1-8.4.4 and the difference-quotient lemma, before the Paley-Wiener discussion.
ERROR backing-lost: tempered-distributions-and-the-fourier-transform: thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions — backed only by https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
    "11.2.2 inversion and (11.36)-(11.37)" via Semyon Dyatlov, Lecture notes for 18.155, December 10 2022 @ Section 11.2.1-11.2.3, printed pp. 126-131 (PDF pp. 126-131); partial browser reading. Section 11.2.4 and the exercises remain open.
ERROR backing-lost: tempered-distributions-and-the-fourier-transform: thm-fourier-transform-converts-allowed-tempered-convolutions-to-products — backed only by https://math.mit.edu/~dyatlov/18.155/155-notes.pdf, https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf
    "11.25 Schwartz convolution" via Semyon Dyatlov, Lecture notes for 18.155, December 10 2022 @ Section 11.2.1-11.2.3, printed pp. 126-131 (PDF pp. 126-131); partial browser reading. Section 11.2.4 and the exercises remain open.
    "8.4.4 convolution properties" via Razvan Gelca, Functional Analysis @ Section 8.4, printed pp. 128-131; partial browser reading of Theorems 8.4.1-8.4.4 and the difference-quotient lemma, before the Paley-Wiener discussion.
ERROR backing-lost: tempered-distributions-and-the-fourier-transform: thm-fourier-transform-of-a-compactly-supported-distribution-is-a-smooth-multiplier — backed only by https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
    "11.26 compact-support transform" via Semyon Dyatlov, Lecture notes for 18.155, December 10 2022 @ Section 11.2.1-11.2.3, printed pp. 126-131 (PDF pp. 126-131); partial browser reading. Section 11.2.4 and the exercises remain open.
ERROR backing-lost: tempered-distributions-and-the-fourier-transform: lem-compact-distribution-convolution-preserves-schwartz-and-tempered-spaces — backed only by https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
    "11.28 compact-support convolution (11.45)" via Semyon Dyatlov, Lecture notes for 18.155, December 10 2022 @ Section 11.2.1-11.2.3, printed pp. 126-131 (PDF pp. 126-131); partial browser reading. Section 11.2.4 and the exercises remain open.
ERROR backing-lost: tempered-distributions-and-the-fourier-transform: lem-test-function-inclusion-in-schwartz-space-is-continuous — backed only by https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf
    "8.4.1 dense continuous inclusion" via Razvan Gelca, Functional Analysis @ Section 8.4, printed pp. 128-131; partial browser reading of Theorems 8.4.1-8.4.4 and the difference-quotient lemma, before the Paley-Wiener discussion.
ERROR backing-lost: tempered-distributions-and-the-fourier-transform: thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions — backed only by https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf
    "8.4.3 transform and inverse" via Razvan Gelca, Functional Analysis @ Section 8.4, printed pp. 128-131; partial browser reading of Theorems 8.4.1-8.4.4 and the difference-quotient lemma, before the Paley-Wiener discussion.
ERROR backing-lost: tempered-distributions-and-the-fourier-transform: lem-schwartz-parameter-pairing-and-integral-interchange — backed only by https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf
    "8.4 difference-quotient lemma" via Razvan Gelca, Functional Analysis @ Section 8.4, printed pp. 128-131; partial browser reading of Theorems 8.4.1-8.4.4 and the difference-quotient lemma, before the Paley-Wiener discussion.
A replacement SOURCE is the remedy, never a dropped result: find a different
treatment carrying the same definition/theorem/example, re-read the range, and
rewrite that source's contents rows faithfully.
```

### fetch-final

`node tools/source-fetch-check.mjs --coverage research/frontier-34-fa-prereqs-batch-9.coverage.json --timeout-sec 10` — exit 1.

```text
ERROR fetch-check-unstamped: distributions-test-functions-and-differentiation: https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf
ERROR fetch-check-unstamped: distributions-test-functions-and-differentiation: https://www.math.stonybrook.edu/~aknapp/download/a2-1-realanal-clickable.pdf
ERROR fetch-check-unstamped: tempered-distributions-and-the-fourier-transform: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
ERROR fetch-check-unstamped: tempered-distributions-and-the-fourier-transform: https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf
source-fetch-check: 0/4 source(s) fetch-verified, 4 FAILED
```

## Structural scan snapshot

The scan is a custom read-only Python metadata traversal; counts reflect concurrent suppliers at scan time, not an immutable run snapshot. Definition/justification cycles need semantic interpretation.

```json
{
  "scope": "All item metadata on the complete owned page-requires closure, then transitive deps/justified_by/all forward_refs; no external_refs. All forward_refs conservatively treated as load-bearing. Historical manifests consulted for absent IDs; historical resolution alone is not adequacy. Published frontmatter has priority; current run supplies unpublished rows.",
  "plan_sha256": "daddd3754adbe449a54bc9a359a44715bdc50595fbb79de00569389cb08f890a",
  "owned_manifest_sha256": "eeb788487301401aefd2a185208c05d68ef4e337feaf1f81c8f69067cc2fa2e9",
  "historical_manifest_files_read": 367,
  "canonical_item_files_read": 15416,
  "malformed_inputs": [],
  "page_closure_count": 214,
  "page_closure": [
    "the-zfc-axioms-and-basic-set-constructions",
    "relations-functions-and-quotients",
    "construction-of-the-natural-numbers",
    "construction-of-r-via-cauchy-sequences",
    "construction-of-r-via-dedekind-cuts",
    "foundations-of-the-real-numbers",
    "order-zorn-and-the-axiom-of-choice",
    "filters-and-ultrafilters",
    "suprema-and-infima",
    "roots-and-rational-powers",
    "countability-and-uncountability",
    "finite-counting-and-binomial-coefficients",
    "inclusion-exclusion-and-the-pigeonhole-principle",
    "monoids-groups-and-subgroups",
    "divisibility-gcd-and-bezout",
    "primes-and-the-fundamental-theorem-of-arithmetic",
    "congruences-and-the-chinese-remainder-theorem",
    "cosets-and-lagranges-theorem",
    "normal-subgroups-and-quotient-groups",
    "group-homomorphisms-and-the-isomorphism-theorems",
    "cyclic-groups-and-direct-products",
    "the-structure-of-finite-abelian-groups",
    "group-actions-and-cayleys-theorem",
    "symmetric-groups-and-the-sign-homomorphism",
    "rings-subrings-and-integral-domains",
    "ideals-and-quotient-rings",
    "euclidean-domains-pids-and-unique-factorisation",
    "polynomial-rings-and-roots",
    "field-extensions-and-the-complex-numbers",
    "splitting-fields",
    "vector-spaces-and-subspaces",
    "linear-independence-bases-and-dimension",
    "linear-maps-rank-nullity-and-quotient-spaces",
    "matrices-and-the-matrix-of-a-linear-map",
    "gaussian-elimination-and-row-reduction",
    "determinants-of-matrices-over-a-commutative-ring",
    "the-determinant-of-a-linear-operator",
    "eigenvalues-eigenvectors-and-the-characteristic-polynomial",
    "diagonalisation-and-the-minimal-polynomial",
    "triangularisation-and-jordan-canonical-form",
    "dual-spaces-bilinear-forms-and-inertia",
    "inner-product-spaces-and-orthogonality",
    "sequences-and-limits",
    "monotone-sequences-and-cauchy-completeness",
    "metric-spaces",
    "completeness-and-uniform-continuity",
    "compactness-in-metric-spaces",
    "limsup-and-subsequential-limits",
    "formal-laurent-series-field",
    "equivalent-forms-of-completeness",
    "series-and-nonnegative-tests",
    "absolute-convergence-and-rearrangement",
    "topology-of-r",
    "cantor-set-baire-and-measure-zero",
    "limits-of-real-functions",
    "continuity-ivt-evt-and-uniform-continuity",
    "monotone-functions-and-discontinuities",
    "the-derivative-and-mean-value-theorems",
    "darboux-lhopital-and-taylor",
    "convexity",
    "the-riemann-integral",
    "properties-of-the-integral-and-the-working-ftc",
    "bounded-variation-and-riemann-stieltjes",
    "improper-integrals",
    "rn-as-a-normed-space",
    "uniform-convergence-of-functions",
    "approximation-and-compactness-in-ck",
    "power-series-and-real-analytic-functions",
    "the-exponential-function",
    "the-logarithm-and-general-powers",
    "sine-cosine-and-the-definition-of-pi",
    "arc-length-and-rectifiable-curves",
    "pi-the-equivalent-characterizations",
    "fundamental-trigonometric-identities",
    "further-trigonometric-identities-and-inverses",
    "the-complex-exponential-and-eulers-formula",
    "chains-antichains-sperner-and-dilworth",
    "incidence-algebras-and-mobius-inversion",
    "graphs-walks-and-connectivity",
    "trees-forests-and-spanning-trees",
    "eulerian-and-hamiltonian-graphs",
    "matchings-covers-menger-and-network-flows",
    "graph-colouring",
    "ramsey-theory",
    "extremal-graph-theory",
    "finite-probability-spaces-and-random-variables",
    "finite-probability-and-the-probabilistic-method",
    "the-total-derivative",
    "mixed-partials-taylor-and-extrema",
    "inverse-and-implicit-function-theorems",
    "the-riemann-integral-in-rn-and-jordan-content",
    "fubini-and-change-of-variables",
    "the-fundamental-theorems-of-calculus",
    "line-integrals-and-the-gradient-theorem",
    "ordinals-and-transfinite-recursion",
    "ordinal-arithmetic",
    "cardinal-arithmetic-and-cofinality",
    "topological-spaces-and-continuity",
    "subspaces-products-and-quotients",
    "connectedness",
    "compactness",
    "the-topology-of-euclidean-space",
    "nets-and-filters",
    "separation-axioms",
    "hausdorff-via-the-diagonal",
    "hereditary-and-productive-separation",
    "urysohn-lemma-and-tietze",
    "partitions-of-unity-and-paracompactness",
    "tychonoff-embedding-and-stone-cech",
    "countability-axioms-and-cardinal-functions",
    "function-space-topologies",
    "stone-weierstrass-general",
    "stone-weierstrass-general-examples",
    "areas-of-elementary-plane-figures",
    "volumes-of-elementary-solids-and-solids-of-revolution",
    "improper-and-parameter-dependent-multiple-integrals",
    "the-real-gamma-and-beta-functions",
    "the-gauge-integral-and-cousins-lemma",
    "sigma-algebras-and-borel-sets",
    "sigma-algebras-and-borel-sets-examples",
    "measures-and-their-basic-properties",
    "measures-and-their-basic-properties-examples",
    "outer-measure-and-the-caratheodory-extension-theorem",
    "outer-measure-and-the-caratheodory-extension-theorem-examples",
    "lebesgue-measure-on-euclidean-space",
    "lebesgue-measure-on-euclidean-space-examples",
    "non-measurable-sets-and-the-cost-of-choice",
    "non-measurable-sets-and-the-cost-of-choice-examples",
    "lebesgue-stieltjes-measures-and-distribution-functions",
    "lebesgue-stieltjes-measures-and-distribution-functions-examples",
    "measurable-functions-and-simple-approximation",
    "measurable-functions-and-simple-approximation-examples",
    "the-lebesgue-integral-and-the-convergence-theorems",
    "the-lebesgue-integral-and-the-convergence-theorems-examples",
    "the-lebesgue-and-riemann-integrals-compared",
    "the-lebesgue-and-riemann-integrals-compared-examples",
    "modes-of-convergence-egorov-and-lusin",
    "modes-of-convergence-egorov-and-lusin-examples",
    "product-measures-and-the-fubini-tonelli-theorems",
    "product-measures-and-the-fubini-tonelli-theorems-examples",
    "signed-and-complex-measures-hahn-and-jordan",
    "signed-and-complex-measures-hahn-and-jordan-examples",
    "the-radon-nikodym-theorem-and-lebesgue-decomposition",
    "the-radon-nikodym-theorem-and-lebesgue-decomposition-examples",
    "the-lp-spaces-holder-minkowski-and-riesz-fischer",
    "the-lp-spaces-holder-minkowski-and-riesz-fischer-examples",
    "density-separability-and-convolution-in-lp",
    "density-separability-and-convolution-in-lp-examples",
    "the-duality-of-lp-and-lq",
    "the-duality-of-lp-and-lq-examples",
    "the-maximal-function-and-lebesgue-differentiation",
    "the-maximal-function-and-lebesgue-differentiation-examples",
    "differentiation-of-monotone-functions-and-the-vitali-covering-theorem",
    "differentiation-of-monotone-functions-and-the-vitali-covering-theorem-examples",
    "absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus",
    "absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus-examples",
    "radon-measures-and-the-riesz-markov-kakutani-theorem",
    "normed-and-banach-spaces",
    "normed-and-banach-spaces-examples",
    "bounded-linear-operators-and-quotient-spaces",
    "bounded-linear-operators-and-quotient-spaces-examples",
    "finite-dimensional-normed-spaces-and-riesz-lemma",
    "finite-dimensional-normed-spaces-and-riesz-lemma-examples",
    "the-analytic-hahn-banach-theorem",
    "the-analytic-hahn-banach-theorem-examples",
    "geometric-hahn-banach-and-convex-separation",
    "geometric-hahn-banach-and-convex-separation-examples",
    "the-baire-principles-of-functional-analysis",
    "the-baire-principles-of-functional-analysis-examples",
    "dual-spaces-adjoint-operators-and-annihilators",
    "dual-spaces-adjoint-operators-and-annihilators-examples",
    "weak-and-weak-star-topologies",
    "weak-and-weak-star-topologies-examples",
    "banach-alaoglu-goldstine-and-krein-milman",
    "banach-alaoglu-goldstine-and-krein-milman-examples",
    "reflexivity-and-eberlein-smulian",
    "reflexivity-and-eberlein-smulian-examples",
    "schauder-bases-approximation-and-banach-space-pathologies",
    "schauder-bases-approximation-and-banach-space-pathologies-examples",
    "banach-valued-integration-and-the-radon-nikodym-property",
    "banach-valued-integration-and-the-radon-nikodym-property-examples",
    "hilbert-space-geometry-and-riesz-representation",
    "hilbert-space-geometry-and-riesz-representation-examples",
    "orthonormal-bases-parseval-and-fourier-series",
    "orthonormal-bases-parseval-and-fourier-series-examples",
    "compact-operators-and-riesz-schauder-theory",
    "compact-operators-and-riesz-schauder-theory-examples",
    "compact-self-adjoint-hilbert-schmidt-and-trace-class-operators",
    "compact-self-adjoint-hilbert-schmidt-and-trace-class-operators-examples",
    "complex-differentiability-and-cauchy-riemann",
    "complex-power-series-and-analytic-functions",
    "contour-integration",
    "goursat-and-cauchys-theorem-in-a-convex-domain",
    "analyticity-liouville-and-morera",
    "the-identity-theorem-and-the-open-mapping-theorem",
    "the-winding-number-and-the-global-cauchy-theorem",
    "banach-algebras-spectrum-and-holomorphic-functional-calculus",
    "banach-algebras-spectrum-and-holomorphic-functional-calculus-examples",
    "gelfand-theory-and-commutative-c-star-algebras",
    "gelfand-theory-and-commutative-c-star-algebras-examples",
    "continuous-functional-calculus-for-self-adjoint-and-normal-operators",
    "continuous-functional-calculus-for-self-adjoint-and-normal-operators-examples",
    "spectral-measures-and-borel-functional-calculus",
    "spectral-measures-and-borel-functional-calculus-examples",
    "unbounded-self-adjoint-operators-and-stones-theorem",
    "unbounded-self-adjoint-operators-and-stones-theorem-examples",
    "fourier-transform-convolution-and-approximate-identities",
    "fourier-transform-convolution-and-approximate-identities-examples",
    "schwartz-space-and-the-plancherel-theorem",
    "schwartz-space-and-the-plancherel-theorem-examples",
    "distributions-test-functions-and-differentiation",
    "distributions-test-functions-and-differentiation-examples",
    "tempered-distributions-and-the-fourier-transform",
    "tempered-distributions-and-the-fourier-transform-examples"
  ],
  "missing_pages": [],
  "empty_prerequisite_pages": [
    "banach-valued-integration-and-the-radon-nikodym-property",
    "banach-valued-integration-and-the-radon-nikodym-property-examples",
    "construction-of-r-via-cauchy-sequences",
    "construction-of-r-via-dedekind-cuts",
    "construction-of-the-natural-numbers",
    "hilbert-space-geometry-and-riesz-representation",
    "hilbert-space-geometry-and-riesz-representation-examples"
  ],
  "seed_item_count": 4341,
  "transitive_item_count": 4674,
  "edge_count": 27684,
  "missing_item_paths": [
    "def-hilbert-schmidt-operator -> def-hilbert-space",
    "def-extreme-point-and-face -> def-locally-convex-topological-vector-space",
    "def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis -> def-orthogonality-and-orthogonal-complement",
    "def-order-on-bounded-self-adjoint-operators -> def-self-adjoint-positive-unitary-and-normal-operator",
    "thm-lidskii-for-trace-class-operators -> lem-fa5-generalized-eigenspace-trace-decomposition",
    "thm-lidskii-for-trace-class-operators -> lem-fa5-quasinilpotent-trace-class-has-zero-trace",
    "lem-spectrum-of-a-self-adjoint-operator-is-real -> lem-kernel-range-orthogonality-for-hilbert-adjoints",
    "lem-weak-and-strong-additivity-of-orthogonal-projections -> lem-orthogonal-projection-is-linear-self-adjoint-contractive",
    "lem-finite-bessel-inequality -> lem-pythagorean-theorem-and-finite-orthogonal-sums",
    "lem-laplace-resolvents-of-a-unitary-group -> thm-bochner-dominated-convergence",
    "ex-spectral-projection-of-an-isolated-eigenvalue-agrees-with-the-riesz-projection -> thm-bounded-linear-maps-commute-with-bochner-integration",
    "lem-norm-of-a-self-adjoint-operator-from-its-quadratic-form -> thm-cauchy-schwarz-in-an-inner-product-space",
    "thm-closable-iff-adjoint-domain-is-dense -> thm-double-orthogonal-complement-is-closure",
    "cor-self-adjoint-extension-exists-iff-deficiency-indices-agree -> thm-every-hilbert-space-has-an-orthonormal-basis",
    "def-absolute-value-and-singular-values-of-a-compact-operator -> thm-hilbert-adjoint-properties",
    "thm-numerical-radius-is-an-equivalent-operator-norm -> thm-jordan-von-neumann-polarization",
    "cor-bauer-maximum-principle -> thm-locally-convex-continuous-dual-separates-points",
    "thm-krein-milman-closed-convex-hull-form -> thm-locally-convex-strict-separation",
    "def-isometry-coisometry-and-partial-isometry -> thm-orthogonal-decomposition-by-a-closed-subspace",
    "def-adjoint-of-a-densely-defined-unbounded-operator -> thm-riesz-representation-for-hilbert-space",
    "thm-weakly-convergent-sequences-are-norm-bounded -> thm-sequential-uniform-boundedness-under-countable-choice"
  ],
  "hard_dependency_cycles": [
    "def-integers -> lem-int-equivalence -> def-integers",
    "def-int-operations -> lem-int-add-well-defined -> def-int-operations",
    "def-int-operations -> lem-int-mul-well-defined -> def-int-operations",
    "def-rationals -> lem-rat-equivalence -> def-rationals",
    "thm-int-ordered-ring -> def-int-order -> thm-int-ordered-ring",
    "def-rat-operations -> lem-rat-ops-well-defined -> def-rat-operations",
    "def-rat-operations -> lem-rat-inverse-well-defined -> def-rat-operations",
    "def-rat-order -> lem-rat-positive-denominator -> def-rat-order",
    "def-real-numbers -> thm-reals-field -> def-real-numbers",
    "def-real-order -> thm-reals-ordered-field -> def-real-order",
    "def-field -> lem-of-inverse-unique -> def-field",
    "lem-finite-set-has-max -> lem-finite-subsets-listable -> lem-finite-set-has-max",
    "lem-sup-unique -> def-infimum -> lem-sup-unique",
    "def-integer-power -> lem-power-laws -> def-integer-power",
    "def-rational-power -> lem-rational-power-well-defined -> def-rational-power",
    "thm-lebesgue-measure-is-a-complete-measure -> def-lebesgue-measure-and-the-lebesgue-sigma-algebra -> thm-lebesgue-measure-is-a-complete-measure",
    "def-generated-sigma-algebra -> thm-generated-sigma-algebra-exists-and-is-minimal -> def-generated-sigma-algebra",
    "def-function-limit -> lem-function-limit-unique -> def-function-limit",
    "lem-exponential-series-has-infinite-radius -> def-real-exponential-function-and-e -> lem-exponential-series-has-infinite-radius",
    "def-integral-of-a-nonnegative-simple-function -> lem-well-definedness-of-the-simple-integral -> def-integral-of-a-nonnegative-simple-function",
    "def-polynomial-ring-over-a-commutative-ring -> lem-polynomial-operations-preserve-finite-support -> def-polynomial-ring-over-a-commutative-ring",
    "def-polynomial-ring-over-a-commutative-ring -> thm-polynomial-ring-is-a-commutative-ring -> def-polynomial-ring-over-a-commutative-ring",
    "def-quotient-group -> thm-coset-multiplication-well-defined-iff-normal -> def-quotient-group",
    "def-quotient-group -> thm-quotient-group-laws -> def-quotient-group",
    "def-quotient-ring -> thm-quotient-ring-multiplication-well-defined-iff-ideal -> def-quotient-ring",
    "def-quotient-ring -> thm-quotient-ring-laws -> def-quotient-ring",
    "thm-complex-numbers-form-a-field -> def-complex-numbers-and-arithmetic -> thm-complex-numbers-form-a-field",
    "def-polynomial-evaluation-and-root -> thm-universal-property-of-a-polynomial-ring -> def-polynomial-evaluation-and-root",
    "thm-bezout-identity-for-polynomials -> def-monic-greatest-common-divisor-of-polynomials -> thm-bezout-identity-for-polynomials",
    "def-cantor-function -> thm-cantor-function-properties -> def-cantor-function",
    "def-complex-differentiability-holomorphic-and-entire -> lem-uniqueness-of-the-complex-derivative -> def-complex-differentiability-holomorphic-and-entire",
    "def-complex-line-integral-over-a-rectifiable-path -> thm-existence-of-complex-line-integrals-on-rectifiable-paths -> def-complex-line-integral-over-a-rectifiable-path",
    "thm-existence-of-complex-line-integrals-on-rectifiable-paths -> def-absolute-line-integral-over-a-rectifiable-path -> thm-existence-of-complex-line-integrals-on-rectifiable-paths",
    "def-scalar-and-vector-line-integrals-along-piecewise-c1-paths -> lem-line-integrals-are-independent-of-the-piecewise-c1-partition -> def-scalar-and-vector-line-integrals-along-piecewise-c1-paths",
    "def-complex-exponential -> lem-complex-exponential-series-converges-everywhere -> def-complex-exponential",
    "def-sine-and-cosine-by-power-series -> lem-sine-and-cosine-series-converge-everywhere -> def-sine-and-cosine-by-power-series",
    "def-vector-space-of-linear-maps -> prop-linear-maps-form-a-vector-space -> def-vector-space-of-linear-maps",
    "def-quotient-vector-space-and-canonical-projection -> prop-quotient-vector-space-operations-and-projection -> def-quotient-vector-space-and-canonical-projection",
    "def-quotient-seminorm -> lem-quotient-seminorm-is-representative-independent -> def-quotient-seminorm",
    "def-filter-base -> lem-filter-base-generates -> def-filter-base",
    "def-topology-of-uniform-convergence -> lem-uniform-convergence-in-the-uniform-metric -> def-topology-of-uniform-convergence",
    "def-support-and-compactly-supported-riemann-integral-in-rn -> lem-compactly-supported-riemann-integral-is-well-defined -> def-support-and-compactly-supported-riemann-integral-in-rn",
    "lem-jordan-set-integral-well-defined -> def-riemann-integral-over-a-jordan-set -> lem-jordan-set-integral-well-defined",
    "def-invertible-matrix-and-general-linear-group -> cor-general-linear-group-is-a-group -> def-invertible-matrix-and-general-linear-group",
    "def-kernel-and-image-of-a-linear-map -> thm-linear-kernel-image-and-injectivity -> def-kernel-and-image-of-a-linear-map",
    "def-orbit-and-stabilizer -> lem-stabilizer-is-a-subgroup -> def-orbit-and-stabilizer",
    "def-completion-of-a-measure-space -> lem-completion-domain-is-a-sigma-algebra -> def-completion-of-a-measure-space",
    "def-completion-of-a-measure-space -> lem-completed-measure-is-well-defined -> def-completion-of-a-measure-space",
    "def-completion-of-a-measure-space -> thm-completion-of-a-measure-space -> def-completion-of-a-measure-space",
    "lem-generated-monotone-class-exists-and-is-minimal -> def-generated-monotone-class -> lem-generated-monotone-class-exists-and-is-minimal",
    "lem-generated-lambda-system-exists-and-is-minimal -> def-generated-lambda-system -> lem-generated-lambda-system-exists-and-is-minimal",
    "prop-restriction-is-a-measure -> def-restriction-of-a-measure -> prop-restriction-is-a-measure",
    "def-trace-sigma-algebra -> thm-trace-is-a-sigma-algebra -> def-trace-sigma-algebra",
    "def-counting-measure -> prop-counting-measure-is-a-measure -> def-counting-measure",
    "def-lebesgue-stieltjes-interval-set-function -> prop-stieltjes-interval-set-function-is-finitely-additive -> def-lebesgue-stieltjes-interval-set-function",
    "thm-nonnegative-weighted-sums-of-measures -> def-nonnegative-weighted-sum-of-measures -> thm-nonnegative-weighted-sums-of-measures",
    "def-formal-laurent-series -> lem-laurent-series-ring -> def-formal-laurent-series",
    "def-formal-laurent-series -> thm-laurent-series-field -> def-formal-laurent-series",
    "def-formal-laurent-series -> thm-laurent-series-field -> lem-laurent-valuation -> def-formal-laurent-series",
    "def-formal-laurent-series -> thm-laurent-ordered-field -> def-formal-laurent-series",
    "def-four-dini-derivatives-at-a-point -> thm-dini-derivatives-exist-are-ordered-and-detect-differentiability -> def-four-dini-derivatives-at-a-point",
    "thm-increasing-functions-split-uniquely-as-jump-plus-continuous -> def-jump-function-of-an-increasing-function -> thm-increasing-functions-split-uniquely-as-jump-plus-continuous",
    "def-dirac-measure -> prop-dirac-measure-is-a-probability-measure -> def-dirac-measure",
    "def-external-direct-product-of-groups -> thm-external-direct-product-is-a-group -> def-external-direct-product-of-groups",
    "lem-weight-is-well-defined -> def-weight-density-and-character -> lem-weight-is-well-defined",
    "def-weight-density-and-character -> lem-density-is-well-defined -> def-weight-density-and-character",
    "def-weight-density-and-character -> lem-character-is-well-defined -> def-weight-density-and-character",
    "lem-lindelof-degree-is-well-defined -> def-lindelof-degree-and-cellularity -> lem-lindelof-degree-is-well-defined",
    "def-lindelof-degree-and-cellularity -> lem-cellularity-is-well-defined -> def-lindelof-degree-and-cellularity",
    "def-determinant-of-a-linear-operator -> thm-operator-determinant-is-basis-independent -> def-determinant-of-a-linear-operator",
    "def-determinant-of-a-linear-operator -> thm-operator-determinant-is-basis-independent -> thm-operator-determinant-scales-every-alternating-top-form -> def-determinant-of-a-linear-operator",
    "def-first-uncountable-ordinal -> thm-omega-one-is-the-least-uncountable-ordinal -> def-first-uncountable-ordinal",
    "def-cofinality -> thm-cofinality-basics -> def-cofinality",
    "def-continuous-argument-and-holomorphic-logarithm-branches -> thm-continuous-logarithms-exist-along-a-contour -> def-continuous-argument-and-holomorphic-logarithm-branches",
    "def-bondy-chvatal-closure -> lem-bondy-chvatal-closure-well-defined -> def-bondy-chvatal-closure",
    "thm-minimal-polynomial-is-well-defined-and-controls-annihilators -> def-annihilator-ideal-and-minimal-polynomial-of-an-endomorphism -> thm-minimal-polynomial-is-well-defined-and-controls-annihilators",
    "def-invariant-subspace-and-induced-quotient-operator -> prop-induced-quotient-operator-is-well-defined -> def-invariant-subspace-and-induced-quotient-operator",
    "def-core-of-a-subgroup -> lem-core-is-largest-normal-subgroup-contained -> def-core-of-a-subgroup",
    "def-real-gamma-function-by-the-euler-integral -> thm-real-gamma-euler-integral-convergence -> def-real-gamma-function-by-the-euler-integral",
    "def-henstock-kurzweil-integral-on-a-compact-interval -> prop-henstock-kurzweil-integral-is-unique -> def-henstock-kurzweil-integral-on-a-compact-interval",
    "prop-formal-derivative-laws -> def-formal-derivative-of-a-polynomial -> prop-formal-derivative-laws",
    "def-real-beta-integral -> thm-real-beta-integral-convergence -> def-real-beta-integral",
    "thm-sylvesters-law-of-inertia -> def-definiteness-inertia-and-signature-data-over-the-reals -> thm-sylvesters-law-of-inertia",
    "def-cyclic-subspace-vector-and-vector-annihilator -> prop-vector-annihilator-is-well-defined -> def-cyclic-subspace-vector-and-vector-annihilator",
    "def-content-and-primitive-integer-polynomial -> lem-content-divisibility-characterisation -> def-content-and-primitive-integer-polynomial",
    "def-conjugacy-class-and-centralizer -> lem-centralizers-and-normalizers-are-subgroups -> def-conjugacy-class-and-centralizer",
    "lem-centralizers-and-normalizers-are-subgroups -> def-normalizer-of-a-subgroup -> lem-centralizers-and-normalizers-are-subgroups",
    "def-product-of-finite-probability-spaces -> thm-product-probability-has-independent-coordinate-events -> def-product-of-finite-probability-spaces",
    "def-join-irreducible-element -> lem-finite-lattice-join-irreducible-decomposition -> def-join-irreducible-element",
    "def-one-point-compactification -> thm-one-point-compactification-properties -> def-one-point-compactification",
    "def-semifinite-part-of-a-measure -> thm-semifinite-part-is-a-measure -> def-semifinite-part-of-a-measure",
    "def-the-long-line -> thm-the-long-line-is-a-connected-linear-continuum -> def-the-long-line",
    "def-real-dedekind -> lem-rational-cut-is-cut -> def-real-dedekind"
  ],
  "owned_forward_dependencies": [],
  "owned_dependencies_outside_page_closure": [
    [
      "ex-distributional-laplacian-of-the-newtonian-kernel",
      "deps",
      "cor-greens-second-identity-for-glued-elementary-solid-regions",
      "the-divergence-theorem-and-classical-stokes"
    ]
  ],
  "owned_id_collisions": [],
  "foundations_ledger_item_paths": [],
  "ledger_page_in_owned_requires_closure": false,
  "complete_mathematical_audit": false
}
```

## Owned inventories and current input fingerprints


distributions-test-functions-and-differentiation (48):

- `def-test-function-space-d-of-an-open-set`
- `def-fixed-support-test-function-frechet-space`
- `def-test-function-topology`
- `def-distribution`
- `def-regular-distribution-from-a-locally-integrable-function`
- `def-convolution-of-a-distribution-with-a-test-function`
- `lem-test-function-cutoffs-and-euclidean-localization`
- `lem-fixed-support-test-function-spaces-are-complete`
- `lem-test-function-lf-topology-universal-property`
- `thm-test-function-operations-are-continuous`
- `thm-local-finite-order-characterization-of-distributions`
- `def-order-of-a-distribution-on-a-compact-set`
- `def-distributional-derivative`
- `def-multiplication-of-a-distribution-by-a-smooth-function`
- `thm-leibniz-rule-for-distributions`
- `def-dirac-delta-and-its-derivatives`
- `thm-distributions-form-a-sheaf`
- `def-support-of-a-distribution`
- `thm-compactly-supported-distributions-have-global-finite-order`
- `thm-distributions-supported-at-one-point`
- `lem-bounded-test-function-sets-have-common-compact-support`
- `thm-sequential-convergence-in-test-function-space`
- `def-weak-and-strong-topologies-on-distributions`
- `thm-locally-integrable-functions-embed-in-distributions`
- `lem-strong-distribution-convergence-implies-weak-convergence`
- `thm-distributional-differentiation-is-continuous-and-commutes`
- `lem-distribution-pairing-with-smooth-parameter-families`
- `thm-convolution-with-a-test-function-is-smooth`
- `thm-uniform-finite-order-bounds-for-pointwise-bounded-distributions`
- `def-pullback-of-a-distribution-by-a-diffeomorphism`
- `def-tensor-product-of-distributions`
- `lem-compactly-supported-distributions-extend-to-smooth-functions`
- `thm-sequential-convergence-of-smooth-multipliers-and-distributions`
- `thm-extension-by-zero-for-distributions-with-ambient-closed-support`
- `thm-translation-invariant-test-function-operators-are-convolutions`
- `lem-complex-l-one-functionals-on-finite-measure-spaces-have-bounded-densities`
- `thm-local-structure-of-distributions-as-derivatives-of-continuous-functions`
- `lem-compact-support-continuous-primitive-representation`
- `thm-global-locally-finite-structure-of-distributions`
- `lem-finite-sums-of-product-tests-are-dense-on-product-open-sets`
- `thm-tensor-product-distributions-and-iterated-pairings`
- `def-convolution-of-distributions-when-one-has-compact-support`
- `lem-convolution-of-distributions-is-well-defined-under-the-support-hypothesis`
- `thm-mollifier-approximation-in-distributions`
- `thm-a-distribution-with-zero-derivatives-on-a-connected-open-set-is-constant`
- `cor-smooth-functions-are-weakly-dense-in-distributions`
- `thm-associativity-of-distribution-convolution-under-compact-support`
- `thm-closed-bounded-test-function-sets-are-compact`

distributions-test-functions-and-differentiation-examples (8):

- `ex-derivative-of-the-heaviside-function-is-dirac-delta`
- `ex-derivatives-of-piecewise-smooth-functions-include-jump-deltas`
- `ex-distributional-laplacian-of-the-newtonian-kernel`
- `ex-principal-value-distribution-one-over-x`
- `cex-not-every-distribution-is-a-locally-integrable-function`
- `cex-pointwise-convergent-functions-need-not-converge-as-distributions-without-local-control`
- `ex-compactly-supported-distributions-have-global-finite-order`
- `rem-sobolev-weak-derivatives-belong-to-pde`

tempered-distributions-and-the-fourier-transform (24):

- `def-tempered-distribution`
- `thm-finite-seminorm-bound-characterizes-tempered-distributions`
- `def-weak-and-strong-topologies-on-tempered-distributions`
- `thm-polynomial-growth-functions-define-tempered-distributions`
- `def-fourier-transform-of-a-tempered-distribution`
- `lem-fourier-transform-on-tempered-distributions-is-well-defined-and-continuous`
- `thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions`
- `thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms`
- `def-convolution-of-a-tempered-distribution-with-a-schwartz-function`
- `def-dirac-comb`
- `thm-unit-lattice-dirac-comb-is-fourier-invariant-in-tempered-distributions`
- `lem-test-function-inclusion-in-schwartz-space-is-continuous`
- `thm-compactly-supported-distributions-are-tempered`
- `thm-tempered-distributions-embed-continuously-in-distributions`
- `lem-smooth-polynomially-bounded-multipliers-on-schwartz-space`
- `thm-differentiation-and-polynomial-multiplication-preserve-tempered-distributions`
- `thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions`
- `thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials`
- `thm-constant-coefficient-differential-operators-become-polynomial-multipliers`
- `lem-schwartz-parameter-pairing-and-integral-interchange`
- `thm-tempered-convolution-is-smooth-with-polynomial-growth`
- `thm-fourier-transform-of-a-compactly-supported-distribution-is-a-smooth-multiplier`
- `lem-compact-distribution-convolution-preserves-schwartz-and-tempered-spaces`
- `thm-fourier-transform-converts-allowed-tempered-convolutions-to-products`

tempered-distributions-and-the-fourier-transform-examples (9):

- `ex-fourier-transform-of-dirac-and-one`
- `ex-fourier-transform-of-a-plane-wave`
- `ex-fourier-transform-of-delta-derivatives-and-monomials`
- `ex-principal-value-one-over-x-is-tempered-and-its-fourier-transform`
- `ex-dirac-comb-and-poisson-summation`
- `ex-fundamental-solution-by-division-of-a-fourier-symbol`
- `cex-product-of-two-distributions-is-not-canonically-defined`
- `cex-convolution-of-two-tempered-distributions-need-not-exist`
- `rem-paley-wiener-and-microlocal-analysis`

`research/plan-spec.json`: `daddd3754adbe449a54bc9a359a44715bdc50595fbb79de00569389cb08f890a`

`research/frontier-34-fa-prereqs-batch-9.pages.json`: `eeb788487301401aefd2a185208c05d68ef4e337feaf1f81c8f69067cc2fa2e9`

`research/frontier-34-fa-prereqs-batch-9.coverage.json`: `77575de4e72403ec3d06ac0f4502acc9bcd107e7d76b954c0258ec96591f99c1`

`research/frontier-34-fa-prereqs-batch-1.pages.json`: `11cc83c2ea2b4c137463d797f5079307aa4a87c61a02b6e5ef52787739954d06`

`research/frontier-34-fa-prereqs-batch-2.pages.json`: `2d18364b9bb49d4738b1222aa96b3192c772a1fbb29d66d5981dfc0d1d597c81`

`research/frontier-34-fa-prereqs-batch-3.pages.json`: `4eeebb3fa598e36067cdba6ad61fde6363c6b404602d745a990b344ab7868118`

`research/frontier-34-fa-prereqs-batch-4.pages.json`: `af8838c7e9b41a04a34a3cc82615214aa7002e56819f9db5226ec7e540dbe883`

`research/frontier-34-fa-prereqs-batch-5.pages.json`: `abf8d66766b2100034bfe39e42fad09ee4179fc3d70410cfbcf02cbf02dfee39`

`research/frontier-34-fa-prereqs-batch-6.pages.json`: `564806a0a9eaad07b5d315127fbc81e27ae5e4780f1c6ec33c5abb52cf244cd3`

`research/frontier-34-fa-prereqs-batch-7.pages.json`: `5ca130206233cb274639e61272a59ea3455d34f9f02efcbeb101200ba4ea29b3`

`research/frontier-34-fa-prereqs-batch-8.pages.json`: `6dc5e0fd0b598658ac6f61bd5b2df6d972d956d68315f781eab402d29ac9793b`

`research/frontier-34-fa-prereqs-batch-9.pages.json`: `eeb788487301401aefd2a185208c05d68ef4e337feaf1f81c8f69067cc2fa2e9`

Next action after any handoff: reread the current owned manifest, coverage, these blockers, current upstream inventories and source text. Resolve F9-1/F9-2/F9-3 before marking either pair sufficient.

Final inventory-preservation check: parsed numbered IDs from the full FA-24/FA-25 design sections, applied the documented comb ID replacement, and compared sets: 67 designed / 67 retained / 0 missing / 22 added; 89 IDs unique; page counts 48,8,24,9. Final whole-run manifest-only policy checkpoint: 560 items, 66 errors, 0 warnings; filtering its diagnostics to the 89 owned IDs yields 0 errors. This does not clear the missing Green page edge or semantic/source blockers. Final coverage checkpoint: 2 pages, 133 harvested rows, 0 errors/warnings. Final manifest-deps checkpoint: 560 items, 0 normalized, 0 errors.
