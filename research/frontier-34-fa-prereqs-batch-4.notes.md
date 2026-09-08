# frontier-34-fa-prereqs — Beta batch 4

Status: **BLOCKED / NOT READY / NOT PUBLISHABLE**. This is an unapproved scaffold, not authored mathematical content. All 53 assigned design items are retained. Nine local prerequisites have been added; A/B counts are 24/5 and 25/8, below the 60-item A limit. Exact statements, proof routes, explicit dependency arrays, provenance intentions, and unresolved source obligations are in the manifest. No verification verdicts or source-fetch stamps were fabricated.

## Scope and current authority

Read CLAUDE.md fully as the normative entrypoint, together with README.md, SCHEMA.md, WORKFLOW.md, the generated beta-4 dispatch, generic beta task, assigned designs, current plan, owned manifest, Step 0 evidence, and live run status. The live build driver is tools/autopilot. The status command run was `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --run frontier-34-fa-prereqs --state-dir .autopilot/frontier-34-fa-prereqs`; it reported the running scaffold stage. No historical RESUME claim was used as authority. Git HEAD observed was 12927d03a. Other plan/design modifications and other batches belong to concurrent work and were not edited here.

Authorized output changes are only this batch's `.pages.json`, `.coverage.json`, and `.notes.md`. Helper programs and transient command reports were written under /tmp. No published item, canonical plan, design, or other batch was changed. The coverage artifact embeds the custom audit program, input hashes, graph report, exact final check commands and complete outputs, and liveness rows so the evidence does not depend on temporary files surviving.

## Design comparison and conflicts

- Functional-analysis FA-14, lines 1062–1120, controls the Fourier pair; FA-15, lines 1121–1183, controls the compact/Fredholm pair. The compact ID at line 43 is an index mention, not the design section.
- Measure-track MT-21b, the complete Weak Mixing and the Chacon Transformation section surrounding line 3890, prohibits dependence on these later FA pages. It is an earlier local-L2 prerequisite design, not an alternate specification or supplier of unrestricted FA-15 results. Its Lebesgue-probability scope cannot silently supply arbitrary Banach or sigma-finite Hilbert–Schmidt claims.
- Representation-track §2 inherited/reserved-material table around line 149 reserves compact/HS facts as downstream imports. It does not replace FA-15's core proof route.
- Current plan order/requires metadata is retained exactly: 288.073 -> 288.074 -> 288.075 -> 288.076, starting after Hilbert geometry B. Design prerequisite lists are subject requirements; the plan uses a sequential transitive requires chain. The plan currently has empty item inventories for these pages, so the design supplies the retained inventory, not evidence of already-resolved items.
- **Circle ordering conflict:** the published `thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle` belongs to `the-fundamental-group-of-the-circle` at order 295, later than FA-14. Publication alone does not authorize its use. Removed both proposed edges to it and supplied `lem-finite-tori-are-compact-hausdorff-character-spaces` using earlier general quotient topology, trigonometry, interval compactness and finite products. No mathematics was removed.
- **Hilbert–Schmidt seam conflict:** FA-15 B explicitly says its kernel example is finalized after FA-16, but the current B order precedes FA-16 and this dispatch forbids forward proof dependencies. All three real forward edges are retained visibly as fatal, not hidden in orientation fields. Proposed prerequisite remedy appears below.
- FA-15 says the general Ascoli page has no items. That statement is stale against current published inventories; this scaffold still uses exactly the designated real compact-metric `thm-arzela-ascoli-for-real-ck` and proves the complex extension by real/imaginary parts. No reliance on an unspecified general Ascoli theorem.
- The design's phrase “Atkinson's converse constructs a parametrix” is directionally ambiguous. Here Fredholm implies parametrix by splittings; a parametrix implies Fredholm via the compact-remainder estimate and transpose cokernel argument. Both directions are retained with types checked.

## Added local prerequisites

- `def-square-summable-family-on-an-arbitrary-index-set`: For any set I, sum_{i in I}|a_i|^2 is the supremum of its finite subsums; ell^2(I) is the vector space where this is finite, with its square-root norm.
- `lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums`: For an orthonormal family in H and a in ell^2(I), the net sum_{i in F}a_i e_i converges in H. Its limit has coefficient a_i and squared norm sum_I |a_i|^2.
- `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`: For a measure space, real/complex L^2 with <f,g>=integral f conjugate(g) is Hilbert; its norm is the established quotient L^2 norm.
- `lem-finite-tori-are-compact-hausdorff-character-spaces`: The map [t] -> (cos(2 pi t),sin(2 pi t)) identifies T homeomorphically with the Euclidean unit circle. For finite n, T^n is compact Hausdorff and its coordinate characters separate points.
- `lem-continuous-periodic-functions-are-dense-in-l-p-of-finite-tori`: For n>=1 and 1<=p<infinity, C(T^n) is dense in L^p(T^n). Continuous functions are also dense in L^p of a bounded interval.
- `lem-linear-combinations-of-compact-operators-are-compact`: Compact operators X->Y form a linear subspace. Consequently any polynomial in a compact endomorphism with zero constant coefficient is compact.
- `lem-neumann-series-and-small-perturbations-of-bounded-inverses`: For Banach X and ||R||<1, (I-R)^(-1)=sum_{n>=0}R^n in operator norm. If A:X->Y is boundedly invertible and ||A^(-1)E||<1, then A+E is boundedly invertible.
- `def-spectrum-and-resolvent-of-a-bounded-operator`: For bounded T on a complex Banach space X, rho(T)={lambda in C:lambda I-T has a bounded two-sided inverse}; sigma(T)=C minus rho(T).
- `lem-a-compact-remainder-estimate-forces-closed-range`: Suppose T:X->Y is bounded between Banach spaces and ||x||<=C||Tx||+||Kx|| for a compact K:X->Z with Banach Z. Then ker T is finite dimensional and ran T is closed.

The orthogonal-series lemma is placed before Parseval and the coefficient isometry. It synthesizes into the already complete Hilbert space, so it does not assume completeness of an arbitrary ell2(I) to prove the isometry. Periodic density follows zero-extension to R^n, continuous compact-support approximation, boundary cutoffs and periodization; the published C_c(R^n) theorem alone does not state torus density. The n-torus proof uses coordinate separation and finite Fubini, not a tensor-product theorem. Fredholm chain stabilization is proved before index theory from powers of I-K, closed ranges, Riesz-separated vectors and compactness. The finite generalized-kernel/stable-range decomposition then supplies the Fredholm alternative without a circular appeal to index zero. The operator Neumann lemma precedes the spectrum definition and local index stability, avoiding FA-17.

## Dependency audit and fatal obligations

The structural inventory indexed 397 research `*.pages.json` manifests, the current plan and 15,416 published items. It traversed 185 required pages, seeded all 3,858 item inventories in them, and reached 4,018 item IDs through deps/justified_by/forward_refs. Historical variants were indexed but never allowed to override published proofs or the current run; no historical-only resolution was used. Final parsing reported no errors. Input hashes and all missing paths, forward edges, cycle candidates and page paths are embedded under coverage `dependency_audit`.

This is **not a complete semantic audit of 4,018 proofs**. Exact statements, hypotheses, direction, conventions, axiom strength and proof use have only been checked for selected direct suppliers below. The remaining complete transitive semantic audit is itself fatal; no structural check is being presented as its substitute. All forward_refs were included in a conservative graph before load-bearing classification: the 503 raw cycle candidates are not 503 established proof cycles. Each would need classification against the complete item text. One raw inherited justified_by forward edge is `lem-finite-set-has-max -> lem-finite-subsets-listable`; it is retained for review, not silently normalized away.

**F1 — Missing upstream inventories and proofs.** Batch 3's FA-12 and FA-13 A/B manifests remain empty at the last read. The Fourier proof cannot be approved without the Hilbert definitions, finite Pythagoras, Cauchy–Schwarz, and double-complement theorem. Current batch 1 is populated but exposes absent sequential-UB and locally convex separation suppliers. Batch 2 AP now resolves structurally. Page existence is not semantic sufficiency. The exact unresolved paths from the structural audit are:

- `cex-compactness-is-not-preserved-by-strong-operator-limits -> def-square-summable-family-on-an-arbitrary-index-set -> lem-finite-bessel-inequality -> def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis -> def-hilbert-space`
- `cex-compactness-is-not-preserved-by-strong-operator-limits -> def-square-summable-family-on-an-arbitrary-index-set -> lem-finite-bessel-inequality -> def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis -> def-orthogonality-and-orthogonal-complement`
- `cex-compactness-is-not-preserved-by-strong-operator-limits -> def-square-summable-family-on-an-arbitrary-index-set -> lem-finite-bessel-inequality -> lem-pythagorean-theorem-and-finite-orthogonal-sums`
- `cex-the-c0-unit-ball-has-no-extreme-points -> def-extreme-point-and-face -> def-locally-convex-topological-vector-space`
- `cex-weak-closure-can-exceed-sequential-weak-closure -> thm-weakly-convergent-sequences-are-norm-bounded -> thm-sequential-uniform-boundedness-under-countable-choice`
- `cor-bauer-maximum-principle -> thm-krein-milman-existence-of-extreme-points -> thm-locally-convex-continuous-dual-separates-points`
- `cor-separable-infinite-dimensional-hilbert-space-is-ell-two -> thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set -> thm-hilbert-space-fourier-expansion -> thm-parseval-equivalences-for-a-complete-orthonormal-family -> lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums -> thm-cauchy-schwarz-in-an-inner-product-space`
- `cor-separable-infinite-dimensional-hilbert-space-is-ell-two -> thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set -> thm-hilbert-space-fourier-expansion -> thm-parseval-equivalences-for-a-complete-orthonormal-family -> thm-double-orthogonal-complement-is-closure`
- `ex-hilbert-schmidt-kernel-operator-is-compact-on-l-two -> thm-l-two-kernels-give-hilbert-schmidt-operators -> thm-hilbert-schmidt-norm-is-basis-independent -> thm-hilbert-adjoint-properties`
- `thm-krein-milman-closed-convex-hull-form -> thm-locally-convex-strict-separation`

**F2 — Forward Hilbert–Schmidt example: proposed prerequisite A/B pair.** Canonical plan/design are not writable here; this proposal is not inserted and is not a resolving supplier. Keep the consumer blocked until the owner of those files adds and audits it.

- Title: **Square-Integrable Kernels and Hilbert–Schmidt Compactness**; category `functional-analysis`.
- Proposed A/B IDs: `square-integrable-kernels-and-hilbert-schmidt-compactness` / `square-integrable-kernels-and-hilbert-schmidt-compactness-examples`.
- Placement: after FA-15 A (288.075), before FA-15 B (288.076), provisionally 288.0752 / 288.0754; recheck unused orders before insertion. Requires FA-15 A, with explicit inherited FA-14, Hilbert geometry, MT product/Fubini, L2 and density machinery. FA-15 B must additionally require the new B. Neither page may require FA-16.
- A inventory in proof order: (1) relocate the existing planned `def-hilbert-schmidt-operator`; (2) relocate `thm-hilbert-schmidt-norm-is-basis-independent`, with an independent double-Parseval proof and justified nonnegative-sum interchange, not SVD; (3) relocate `thm-hilbert-schmidt-operators-are-compact`, with finite-coordinate operator-norm tails; (4) new `lem-product-rectangle-kernels-are-dense-in-product-l-two`, preserving arbitrary sigma-finite hypotheses by finite-measure exhaustion and product-measurable-set approximation; (5) relocate `thm-l-two-kernels-give-hilbert-schmidt-operators`, proving well-definedness by Fubini/Cauchy–Schwarz and exact HS norm, including any necessary separable-support reduction. Relocated IDs are already reserved, not new IDs; FA-16 must import their earlier canonical homes rather than duplicate them.
- A prerequisites: (1) Hilbert definition, given-basis Parseval and maximal-basis existence; (2) (1), Parseval and finite-supremum Tonelli argument; (3) (1), finite-rank compactness and compact norm closure; (4) MT product measures, sigma-finite exhaustion and simple-function density; (5) (1)–(4), integral Cauchy–Schwarz and Fubini. Every exact proof and source remains to audit before inserting this pair.
- B inventory: new `ex-square-integrable-separable-product-kernel` (rank-one kernel a(x)b(y), norm product); new `ex-square-integrable-kernel-without-continuous-representative` (a step kernel, exact finite rank); new `ex-square-integrable-kernel-finite-rank-truncations` (a summable diagonal rectangle expansion, explicit norm error). Each B depends only on the new A and earlier A machinery.
- Evidence destination: FA-16's existing kernel/HS inventory, to be reharvested under the new earlier proof route; it cannot currently prove the earlier example. This proposal needs its own complete two-source evidence. It preserves the useful general kernel statement rather than replacing it by continuous kernels only.

**F3 — Upstream prerequisite proposals inherited through page requires.** Batch 1 notes F1–F3 specify the missing sequential-UB, general LCS separation, and relative-HB pairs with titles, categories, positions, prerequisites and A/B inventories. Their complete proposal text is copied in the appendix as unapproved upstream evidence. Those proposals were read, not implemented here. Consumers remain blocked until the authorized plan writer installs and proves them.

**F4 — Axiom strength is not certified.** Countable support uses countable choice for a countable union of finite sets; separable Gram–Schmidt from a supplied dense sequence is deterministic; maximal orthonormal families use Zorn/AC. The selected compactness converse and chain-separated sequences use DC. The Schauder argument logically uses norming and bidual isometry; current published norming -> dominated Hahn–Banach -> Zorn has an AC implementation. Therefore item `axiom_audit` references to “HB” describe the intended logical route, **not an implemented HB-only proof**. That weaker route is blocked by the relative-HB prerequisite proposal. Full AC is an available upper bound on the present imported implementation; it must not be mislabeled HB-only or silently substituted for the design's sharper claims.

**F5 — Catalogue boundary and inherited proof graph.** No owned item names the deferred-set-theory-beyond-choice catalogue, its recorded items, or external_refs as a supplier. The official extcheck found no Foundations-category violations in its published/current-plan scope. The conservative full ancestor inventory nevertheless reaches these recorded items from older non-Foundations remarks/theorems:

- `rem-choice-strength-of-hahn-banach -> rem-halpern-levy-bpi-not-ac -> rem-cohen-forcing-ac-independent -> rem-godel-constructible-universe`
- `rem-choice-strength-of-hahn-banach -> rem-halpern-levy-bpi-not-ac`
- `rem-choice-strength-of-hahn-banach -> rem-halpern-levy-bpi-not-ac -> rem-cohen-forcing-ac-independent`
- `rem-choice-strength-of-hahn-banach -> rem-halpern-levy-bpi-not-ac -> rem-feferman-no-free-ultrafilter-in-zf`
- `cex-polynomial-space-admits-no-complete-norm -> thm-banach-space-no-countably-infinite-hamel-basis -> rem-baire-category-choice-strength`

These are not asserted to be new Foundations violations: their roots are older FA orientation/theorem inventories. They require explicit load-bearing inspection and any needed local replacements before complete ancestor closure can be certified. For example, `thm-banach-space-no-countably-infinite-hamel-basis` actually lists the Baire choice-strength ledger in deps and uses it as L4 even though its proof contains a direct separable Baire construction. No authority to repair that published record is implied by this dispatch. The complete Foundations closure through plan, manifests and exact published edges still needs semantic review; an external orientation link cannot discharge a proof.

## Direct supplier review completed, and limits

Complete local texts read include the published C_c(R^n) density theorem and box-step density; complex self-adjoint Stone–Weierstrass; real C(K) Ascoli; quotient closed-range estimate; elementary and full kernel/range annihilator identities; compact unit-ball criterion; finite-dimensional and closed finite-codimensional complement theorems; canonical bidual isometry and naturality; the later circle homeomorphism (rejected as a forward supplier); metric compactness equivalences; complete-subspace/closed-subset theorem; interval connectedness. FA-13's complete design was read, but its absent manifest/items are not evidence of a proved supplier. Batch 1's scalar-test weak-convergence definition was read after it appeared.

Scope safeguards: the Ascoli theorem is real-valued on a nonempty compact metric domain and carries the published choice hypotheses. A norm limit of compact operators needs a Banach target and completeness of a closed metric subset, not merely a closed linear subspace. Schauder is stated for Banach X,Y; compactness of an adjoint cannot repair an incomplete target. The Banach transpose uses linear evaluation without conjugation, distinct from a Hilbert adjoint. The annihilator identity for ran T* uses weak-star closure; it must not be replaced by a norm closure. Solvability instead uses closed ran(I-K) and the preannihilator of ker(I-K*). The spectral definition here is for complex Banach spaces and is elementary; real complexification belongs to FA-17. Infinite-dimensional compact operators have 0 in the spectrum, but 0 need not be an eigenvalue. A compact operator need not have dense range; a strongly convergent compact sequence need not converge in norm or have compact limit. AP of the target implies finite-rank density for every domain, but failure of AP does not by itself identify a particular nonapproximable endomorphism.

The waveform examples explicitly calculate coefficients for period one on (-1/2,1/2), give only L2 identities, and allow arbitrary null-set endpoint conventions. Haar completeness is proved using dyadic steps and continuous interval density, not cited as folklore. Legendre normalization is P_n(1)=1 before L2 normalization; the first three normalized outputs are recorded explicitly.

## Sources and fetch blockers

Two independent book treatments are harvested for each A: Teschl and Bühler–Salamon, with additional author course notes for the Haar and waveform computations. Coverage records 89 exact named-result/heading dispositions, including retained later destinations. The source ledger is a record of selected text consulted, **not certification that all relevant full text was obtained**. Candidate dispositions in still-unverified ranges must be rechecked rather than treated as approvals. Knapp and MIT references named by the design were not counted as read sources in this dispatch.

Teschl's author URL returned 404 through the web tool; Bühler–Salamon's ETH URL returned 403. The university-hosted alternate copies contain the same author texts and are recorded with original_url. The web reader exposed full PDF text at selected line windows, but some proof windows were incomplete and mathematical typography was damaged. Screenshot attempts for relevant PDF pages returned Cache miss. In particular, the Teschl extraction has an erroneous displayed index value in Theorem 6.27 while the proof concludes zero, malformed shift-index signs, and an impossible '= {0}' in Lemma 6.32; these were not copied into the mathematical statements. Bühler–Salamon corroborates zero index, but final full-text review is still required. The Brown Haar example's dyadic-density assertion is supplemented by a local proof; its neighboring Legendre/conjugation errors are not used.

Outstanding full-reading obligations include missing portions of Bühler–Salamon §4.2 Examples 4.24–4.27 and §4.3, exact proof support for the compact-remainder lemma, full n-torus and arbitrary-index synthesis evidence, and the later HS kernel generality. The source backing ledger does not delete these results to clear a gate. Every harvested deferred heading has a current-plan destination or a specific out-of-scope reason.

Shell curl failed with code 6 (could not resolve host). The URL sweep returned 0/4 live because of DNS failure, which is evidence about this environment, not proof that the public URLs are dead. `source-fetch-check --stamp --timeout-sec 5` returned EAI_AGAIN on all six source entries, 0/6 verified and zero new stamps. The final non-stamping check also failed all six. No permission escalation or request for broader access was made.

## Checks actually run

Exact commands, return codes, complete stdout/stderr and URL rows are embedded under coverage `checks` and `url_liveness_evidence`. Final results:

| Check | Result |
|---|---|
| Batch coverage checklist, --require-destination | PASS: 2 A pages, 89 harvested rows, no errors/warnings |
| Whole-run manifest-deps | PASS: 560 items, all explicit arrays; this tool does not check semantic sufficiency |
| Whole-run content-policy, --manifest-only | FAIL: 66 errors, zero warnings; 11 owned findings listed below |
| validate-plan research/plan-spec.json | PASS for current plan: 892 pages with item lists; 589 empty planned pages are explicitly outside asserted item closure |
| extcheck --json | PASS: 15,416 items, 161 recorded-unproved items, 63 consequence warnings, zero hard errors; published/plan scope only |
| URL liveness | FAIL: all four distinct URLs failed local DNS resolution |
| Source backing, --require-verified | FAIL: no harvested supplier is fetch-verified/live under the sweep; full lost-backing list retained |
| Source fetch, final non-stamping check | FAIL: 0/6 source entries fetch-verified, six EAI_AGAIN errors |

Owned content-policy findings:

- batch-dependency-missing: def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis depends on def-hilbert-space, which is neither declared by this batch nor an item on disk
- batch-dependency-missing: def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis depends on def-orthogonality-and-orthogonal-complement, which is neither declared by this batch nor an item on disk
- batch-dependency-missing: lem-finite-bessel-inequality depends on lem-pythagorean-theorem-and-finite-orthogonal-sums, which is neither declared by this batch nor an item on disk
- batch-dependency-missing: lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums depends on lem-pythagorean-theorem-and-finite-orthogonal-sums, which is neither declared by this batch nor an item on disk
- batch-dependency-missing: lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums depends on thm-cauchy-schwarz-in-an-inner-product-space, which is neither declared by this batch nor an item on disk
- batch-dependency-missing: lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums depends on def-hilbert-space, which is neither declared by this batch nor an item on disk
- batch-dependency-missing: thm-parseval-equivalences-for-a-complete-orthonormal-family depends on thm-double-orthogonal-complement-is-closure, which is neither declared by this batch nor an item on disk
- batch-dependency-missing: lem-l-two-with-the-integral-pairing-is-a-hilbert-space depends on def-hilbert-space, which is neither declared by this batch nor an item on disk
- batch-forward-dependency: ex-hilbert-schmidt-kernel-operator-is-compact-on-l-two depends on later item def-hilbert-schmidt-operator (compact-self-adjoint-hilbert-schmidt-and-trace-class-operators)
- batch-forward-dependency: ex-hilbert-schmidt-kernel-operator-is-compact-on-l-two depends on later item thm-l-two-kernels-give-hilbert-schmidt-operators (compact-self-adjoint-hilbert-schmidt-and-trace-class-operators)
- batch-forward-dependency: ex-hilbert-schmidt-kernel-operator-is-compact-on-l-two depends on later item thm-hilbert-schmidt-operators-are-compact (compact-self-adjoint-hilbert-schmidt-and-trace-class-operators)

The remaining 55 errors are other current-run consumers and unresolved prerequisites, all retained verbatim in coverage. The initial policy check reported 62 errors over 556 items; after local additions and concurrent batch updates the final snapshot reported 66 over 560. No failures were hidden by narrowing the run scope. The custom graph additionally checked every direct owned edge against page requires closure; after the local torus replacement, only the three HS forward edges lie outside that closure. No cross-page B proof dependencies were found in this snapshot. Raw inherited graph cycle/forward candidates still need the semantic work described above.

## Handoff obligations

Keep both pairs blocked. At handoff reread the current scaffold, complete upstream statements and proof graphs, sources, current plan, input-hash differences and every open obligation; concurrent run files may have changed. The driver owns transitions. Complete the missing prerequisite pairs through the authorized plan/prose workflow; do not edit published material from this dispatch. Resolve the HS forward seam without dropping its mathematics, finish exact full-text and transitive semantic/axiom audits, obtain genuine fetch verification, and rerun the named checks. A passing coverage shape or plan order alone is not readiness.

## Appendix — unapproved upstream prerequisite specifications

The following is copied from batch 1 notes F1–F3 as dependency evidence, not as an independent source-reading claim or approval by this batch:

### F1 — Sequential uniform boundedness with countable choice

Title: **Sequential Uniform Boundedness with Countable Choice**. Category: `functional-analysis`. Proposed A/B: `sequential-uniform-boundedness-with-countable-choice` / `sequential-uniform-boundedness-with-countable-choice-examples`, orders 288.0602 / 288.0603, after duality B and before weak topologies. Requires: `dual-spaces-adjoint-operators-and-annihilators-examples` (which inherits the Baire-principles pair). Weak topologies must require the new B when it exists.

A inventory, in proof order:

1. `lem-two-signs-detect-an-operator-increment`: for a bounded scalar-linear T and x,u, max(||T(x+u)||,||T(x-u)||) >= ||Tu||. Deps: `def-bounded-linear-operator`, `def-operator-norm`; triangle inequality, no choice.
2. `thm-sequential-uniform-boundedness-under-countable-choice`: assuming AC_omega, a pointwise bounded sequence of bounded maps from Banach X into normed Y is norm bounded. Deps: previous lemma, `def-banach-space`, `def-countable-choice`, `def-operator-norm`. From an unbounded operator sequence take least indices with norm >=4^n. AC_omega chooses independently near-norming unit vectors u_n with ||T_n u_n||>(2/3)||T_n||. At each stage deterministically choose the better sign of 3^(-n)u_n, breaking ties by +. The resulting Cauchy sequence has tail norm <=3^(-n)/2. Its limit has ||T_n x||>(1/6)(4/3)^n, contradiction. No dependent selection of vectors is needed after the independent choices.

B inventory:

1. `ex-sequential-uniform-boundedness-for-coordinate-partial-sums`: explicitly bounded partial-sum functionals on ell1, using the absolute-sum bound and e_1 to compute the norm.
2. `cex-sequential-uniform-boundedness-needs-a-complete-domain`: c00 with sup norm and T_n x=n x_n; each orbit eventually zero, norms unbounded, incompleteness by truncating (1/k).

Evidence: Alan D. Sokal, [full five-page primary paper](https://arxiv.org/pdf/1005.1585), p2 Lemma, equation (2), and the full following gliding-hump proof; p3 Remarks 1–7 read. The independent-vector/deterministic-sign refinement is a local adaptation of equation (2), not an axiom-strength claim attributed to Sokal. A second complete treatment and full prerequisite audit are still required before approving this new pair. Quantitatively sharp plank results and general nonmetrizable uniform-boundedness extensions in Sokal's remarks are out of scope for this sequential supplier: neither is needed to obtain the divergent orbit contradiction.

Exact inadequate path: `thm-weakly-convergent-sequences-are-norm-bounded` would use `thm-sokal-gliding-hump-uniform-boundedness` -> `def-dependent-choice`. The supplier statement begins “Assume AC_omega and DC”; its proof step 2.1 explicitly licenses dependent choices by DC. The new manifest instead exposes the missing intended supplier ID. Even after F1 is added, the separate bidual-norming choice problem F3 must close.

### F2 — Locally convex spaces and continuous separation

Title: **Locally Convex Spaces and Continuous Separation**. Category: `functional-analysis`. Proposed A/B: `locally-convex-spaces-and-continuous-separation` / `locally-convex-spaces-and-continuous-separation-examples`, orders 288.0604 / 288.0605. Requires: `dual-spaces-adjoint-operators-and-annihilators-examples`, `subspaces-products-and-quotients` (confirmed canonical home of `def-initial-and-final-topology`). Also require the relative-HB pair F3 if claiming only HB. Place before FA-8, or before FA-9 with explicit requirement edges and appropriate unoccupied orders.

A inventory:

1. `def-topological-vector-space-for-local-convexity`: real/complex vector space with jointly continuous addition and scalar multiplication; explicitly state whether Hausdorffness is separate. Deps: topology and product-topology definitions.
2. `def-locally-convex-topological-vector-space`: a TVS with a base of convex zero-neighborhoods; its continuous scalar-linear dual; real convexity over complex scalars. Deps: previous definition and convex-set definition.
3. `lem-balanced-convex-zero-neighborhood-refinement`: translations, small symmetric/balanced convex refinements, and a closed convex refinement inside a prescribed neighborhood. Deps: the two definitions; prove the finite topological-group refinements.
4. `lem-continuous-gauge-of-an-open-convex-zero-neighborhood`: the absorbing gauge, sublinearity, and the open gauge sublevel; balanced case gives a seminorm. Deps: refinement and the earlier algebraic gauge construction.
5. `thm-locally-convex-open-convex-separation`: continuous geometric HB, stated under the relative HB hypothesis or honestly under AC. Deps: gauge lemma and the exact HB supplier.
6. `thm-locally-convex-continuous-dual-separates-points`: for Hausdorff LCS, distinct points are separated by a continuous real functional (or real part of a complex-linear one). Deps: open-convex separation and Hausdorffness.
7. `thm-locally-convex-strict-separation`: disjoint nonempty closed convex C and compact convex K admit a continuous real separating functional with a strict uniform gap. Deps: open separation, compactness, neighborhood refinements. The singleton compact case suffices for the KM hull proof; retain the useful general result.
8. `lem-locally-convex-closures-and-finite-compact-convex-hulls`: closure of a convex set is convex; the convex hull of finitely many nonempty compact convex sets is compact. Deps: TVS continuity, finite products, scalar simplex compactness, continuous compact image, Hausdorff closedness.

B inventory:

1. `ex-product-scalar-topology-is-locally-convex`: finite-coordinate seminorm neighborhoods and separating coordinates.
2. `ex-locally-convex-separation-by-a-coordinate`: separate a point from a coordinate half-space, with real parts for complex scalars.
3. `cex-convex-maximum-set-need-not-be-a-face`: x^2 on [-1,1] has maximum set {-1,1}, which is extremal but not convex.

Evidence: Teschl §5.1, Theorems 5.2–5.3 and Corollaries 5.4–5.6, printed pp137–141; Bühler–Salamon §3.1.1–3.1.2, pp118–126; Hanche-Olsen Theorems 21–22 pp12–14 for the finite compact-hull use. Complete local edge mapping, full harvest for the new pair, and the norm-free compact-versus-closed proof are still required.

Exact inadequate path: `thm-krein-milman-closed-convex-hull-form` -> general continuous strict separation. Existing `thm-strong-separation-of-closed-and-compact-convex-sets` -> `lem-distance-to-set-is-lipschitz`, `thm-extreme-value-metric`, `def-metric-compactness`. Its proof takes a positive norm distance and adds B(0,r), so it supplies normed separation, not general LCS separation. The manifest exposes missing LCS IDs for the existence, hull, Bauer, and Milman consumers.

### F3 — Relative Hahn–Banach consequences

Title: **Norming and Separation Under the Hahn–Banach Principle**. Category: `functional-analysis`. Proposed A/B: `norming-and-separation-under-hahn-banach` / `norming-and-separation-under-hahn-banach-examples`, proposed orders 288.06002 / 288.06003, between the duality B and F1; recheck availability at insertion. Requires the published duality B and the earlier dominated-extension definition/gauge machinery. F1's application to bidual norming and F2 should inherit these relative results when weaker choice costs are claimed.

A inventory:

1. `def-hahn-banach-extension-principle-relative`: explicitly formulate HB as an additional hypothesis over the base set theory, not as AC or as an external recorded theorem. Deps: scalar-linear functional and sublinear-functional definitions.
2. `thm-relative-hahn-banach-norming-and-separation`: under HB, norm-preserving extension from subspaces, norming functionals, and separating dual. Split into individual lemmas at authoring if needed to make dependencies exact; do not hide multiple unproved consequences in a label.
3. `cor-relative-hahn-banach-bidual-isometry`: canonical J is isometric under HB. Deps: the relative norming result and canonical J definition.
4. `thm-relative-hahn-banach-geometric-separation`: normed convex separation under HB, including realification for complex spaces. Deps: relative extension principle and explicit gauge argument.

B inventory:

1. `ex-relative-norming-in-a-finite-dimensional-space`: explicit norming on the scalar field without invoking choice.
2. `ex-relative-separation-of-a-ball-and-an-exterior-point`: derive a separating functional from the relative norming theorem with quantitative gap.

Exact path: dual norm recovery / bidual isometry and normed separation -> norm-preserving HB consequences -> `thm-hahn-banach-dominated-extension` -> `thm-zorn`. The complete dominated-extension text explicitly assumes AC. Thus an implemented dependency on this result does not certify an HB-only theorem. Relative consequences must actually be re-proved from HB as a hypothesis; a URL or source attribution cannot discharge this obligation. Teschl's geometric HB proofs support the mathematical route, but this new pair is not yet fully harvested or approved.


Final artifact consistency check (Python JSON parsing/assertions): PASS. Confirmed four owned pages, 62 items, an explicit array for every deps field, eight captured final check records, no fetch_verified fields on any source, and the copied F1 appendix heading. This checks artifact consistency only and changes none of the readiness blockers.
