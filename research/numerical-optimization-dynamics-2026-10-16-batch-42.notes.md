# Batch 42 authoring notes — Local bifurcation normal forms and numerical certificates

## Scope and controlling documents

The current owner direction was read first and followed. It releases the combined run for native authoring and requires complete local proof suppliers, current A/B carriers, and the ordinary Step 1 checks; no external theorem fallback is allowed for the center-manifold or Hopf route. I read the complete PC-BIF design section in `research/plan-numerical-dynamics-track.md` and compared it with the matching rows in `research/plan-spec.json`. The plan and plan-spec agree on the A/B IDs, orders 2368/2369, category, titles, companion relation, and declared prerequisites `the-inverse-function-theorem-completed` and `pseudo-arclength-continuation-and-fold-certificates`. No scope or placement conflict was found.

The A page contains 14 items and the B page registers five examples. The controlling design retains scalar fold, transcritical, and symmetry-preserving pitchfork hypotheses; a simple C5 Hopf field with a transverse critical-pair crossing and nonzero normalized first Lyapunov coefficient; a proof-carrying interval validator; and local-only conclusions. It does not claim global branch completeness or a nondegenerate Hopf conclusion when the cubic coefficient is zero. Both library page carriers are draft and below the 100-item cap.

The dispatch scheduling input was `6dfd0c45f2a8223c7d6f772198513d38987ad90fa865c52f24f2241dd5c6d510`. At final inspection the shared batch-dependency artifact reported input hash `612d24c94738feeb698923efcebf61f021c147ba4c232bd8fffbea5c82af3ff1` and raw-file SHA-256 `c0346716ada1b60301e8e6d8be2225478863e71596ec897d03fbd702d27fa40b`. Its batch 42 row still says dependency level 2 and requires batch 29. I did not edit that shared artifact.

## Item inventory and dependency levels

The manifest and item frontmatter agree on the direct dependency arrays. The pair-scoped calculation over batches 29 and 42 checks four pages and 32 items, with no cycles or errors. All 19 declared batch-42 levels match the computed labels:

| Level | Batch 42 items |
|---:|---|
| 0 | `def-hopf-normal-form-data`; `def-hopf-weighted-trajectory-space`; `lem-characteristic-roots-stay-in-separated-neighborhoods`; `lem-hopf-smooth-eigenpair-branch`; `def-local-periodic-orbit-poincare-and-floquet-data`; `thm-hyperbolic-local-map-stability` |
| 1 | `lem-hopf-weighted-trajectory-space-is-banach`; `alg-validate-local-hopf-certificate`; `thm-poincare-map-stability-implies-orbital-stability`; `ex-degenerate-hopf-with-zero-lyapunov-coefficient` |
| 2 | `lem-local-center-manifold-for-a-simple-hopf-point`; `ex-hopf-interval-enclosure-containing-zero` |
| 3 | `lem-hopf-first-lyapunov-coefficient-from-multilinear-data`; `thm-scalar-fold-transcritical-pitchfork-local-normal-forms` |
| 4 | `thm-hopf-local-branch-and-stability`; `ex-pitchfork-symmetry-breaking-unfolding` |
| 5 | `thm-local-hopf-certificate-is-sound`; `ex-supercritical-hopf-cubic-normal-form`; `ex-subcritical-hopf-cubic-normal-form` |

The center-manifold item explicitly lists its additional published prerequisites for Euclidean completeness, Jordan blocks and characteristic roots, complex exponential calculus, the first FTC, product differentiation, and the line-segment Newton–Leibniz formula. These are external to the in-run level calculation, so its level remains 2.

The current run-wide `batch-dependency-levels.mjs check` stops on malformed YAML in `items/alg-adam-update.md` at frontmatter line 19, column 14 (repository line 20), where the source title has an unquoted colon in “Adam: A Method for Stochastic Optimization.” The same unquoted title occurs in `items/cex-adam-periodic-linear-losses-force-divergence.md` and `items/ex-adam-adaptive-step-divergence.md`; all are outside batch 42. Fresh autopilot status at 2026-10-16 03:36:08 UTC shows stage `1-scaffold`, 64/107 covered, batch 42 still missing, no worker in flight, and the owner repair/recertification hold. I left those carriers, the shared schedule, and engine state untouched. Batch-level and readiness evidence is recorded in `research/numerical-optimization-dynamics-2026-10-16-batch-42.dependency-level-check.json`.

## Mathematical construction and repairs

The A-page definitions fix the Hopf normalization, weighted trajectory spaces, and Poincare/Floquet conventions before consumers use them. The local eigenpair lemma now matches branch regularity to the matrix path: a C^k path gives C^k eigenvalue and gauge-fixed eigenvector branches. In the Hopf applications a C5 vector field gives a C4 Jacobian path, so the critical eigenpair branches used by the center-manifold and normal-form arguments are stated as C4.

The center-manifold lemma gives an explicit local proof. It constructs the real center/stable/unstable splitting, defines the Jordan-block flow and proves its bounded-center and exponential-hyperbolic estimates, cuts off the nonlinear remainder with a small global Lipschitz constant, and uses a contraction on weighted two-sided trajectories. It proves C5 dependence with a finite scale of weights and the compact-interval/tail argument, then derives graph invariance, the mixed $O(\|z\|^2+|\lambda|\|z\|)$ estimate, and the tangent-plane eigenpair claim. The proof handles the full equilibrium branch $h(0,\lambda)=0$ and uses unique fixed points rather than a choice axiom.

The first-Lyapunov lemma now explicitly requires a C5 field and defines its equilibrium and Jacobian branches. It carries out the quadratic and nonresonant cubic eliminations and derives the coefficient from the full-space invariance equation with the declared normalization. The scalar theorem gives the required fold, trivial-branch transcritical, and odd-symmetry pitchfork conditions and uses the intermediate-value theorem for branch existence. The Hopf theorem distinguishes the threshold equilibrium from nonconstant cycles, retains the derivative error term in the return-map quotient, proves side and uniqueness locally, and transfers radial and transverse multipliers to orbital stability.

The interval validator and soundness theorem require witnesses tied to the represented exact root, normalized eigenpair, branch derivative, multilinear coefficient, and separated noncritical spectrum. An interval containing zero remains inconclusive. The examples preserve the distinction between a zero Lyapunov coefficient, supercritical/subcritical cubic models, broken pitchfork symmetry, and an inconclusive enclosure.

## Sources and dispositions

The two independent full-text treatments inspected were:

1. Yuri A. Kuznetsov, *Elements of Applied Bifurcation Theory*, 2nd ed., complete 614-page PDF: <https://wwwf.imperial.ac.uk/~dturaev/kuznetsov.pdf>. I inspected §§3.2–3.5 (printed pp. 80–101) and §§5.1–5.2 (pp. 151–159). It supports the scalar and Hopf normal-form context, center-manifold statement, return-map stability, and examples; it explicitly defers the center-manifold proof, which is supplied locally here.
2. J. E. Marsden and M. McCracken, *The Hopf Bifurcation and Its Applications*, complete 424-page text: <https://authors.library.caltech.edu/records/satwa-8xa89/files/Hopf.pdf>. I read §2 (printed pp. 27–49), including the complete graph-transform proof, and §§3B–3C (pp. 91–104), including the flow version, independent Hopf treatment, and stability analysis. Its differing hypotheses were not imported in place of the controlling plan.
3. Yuri A. Kuznetsov, “Andronov-Hopf Bifurcation,” Scholarpedia: <http://www.scholarpedia.org/article/Andronov-Hopf>. The HTTPS preview timed out, the primary host returned an expired certificate, and the mirror certificate did not match its hostname. A targeted search found the current article; its complete body was recovered over HTTP and inspected. It is orientation only, not a proof supplier.

URLs, locators, retrieval attempts, fetch hashes/page counts, supported items, and the disposition of each harvested result are recorded in `research/numerical-optimization-dynamics-2026-10-16-batch-42.coverage.json`. `source-fetch-check --coverage ... --stamp` verified 3/3 sources with 0 newly stamped; the coverage checklist reports one A page, 19 harvested results, and 0 errors or warnings. No source was dropped, so no proof coverage was waived.

## Prerequisite interfaces

The current published parameterized implicit-function theorem statement and complete proof were inspected; its local uniqueness and C^k regularity match the equilibrium and branch uses. In batch 29, I inspected the current complete statements and proofs of `thm-simple-fold-lyapunov-schmidt-parameterization` and `thm-augmented-residual-contraction-certificate`. The scalar consumer uses the first under its exact n=1 fold hypotheses. The validator and soundness theorem use the second only with its residual, inverse, derivative, and contraction witnesses. The exact checked interfaces are in `research/numerical-optimization-dynamics-2026-10-16-batch-42.cross-batch-dependencies.json`. No mathematical supplier remains unresolved for this pair; these are local authoring checks, not independent acceptance.

## Checks and readiness

The final scoped checks passed:

- `node tools/tsx-run.mjs tools/author-check.mts numerical-optimization-dynamics-2026-10-16 42`: pass. The stored report has precheck 15/15 proof-bearing items, rendercheck 21 files, content policy 19/0, and strict proof contracts 19/19 with 0 errors or warnings.
- `node tools/proof-layout.mjs` on all 19 explicitly changed item carriers: pass, 75 phase steps, 0 defects.
- `node tools/manifest-deps.mjs research/numerical-optimization-dynamics-2026-10-16-batch-42.pages.json`: pass, 19 items, 0 normalized fields, 0 errors.
- Pair-scoped `depcheck`, `fwdcheck`, and `extcheck` with `research/numerical-optimization-dynamics-2026-10-16-batch-42.item-scope.json`: pass. The selected dependency closures were 1,144 items/121 pages and 1,115 items/145 pages, respectively; external-dependency check found 0 recorded-not-proved items and 0 consumers resting on them.
- Pair-scoped dependency levels: pass, four pages and 32 items, 0 errors; all 19 owned labels match. Coverage checklist and source-fetch checks pass as recorded above.

The official `step1-decisions.mjs record` command refreshed every stale `ready` record with its exact declared dependencies and `owner:false`. After the final center-manifold proof correction, its six downstream readiness hashes were refreshed as well. A focused `step1Decision` readback reports 19/19 ready, 0 open items, and 0 owner records. No `--owner` override, manual readiness write, or escalation overwrite was used.

No published content, shared plans, scheduler artifact, verdict, or engine-state file was edited. No test suite was added or run. These authoring and completion records do not constitute independent approval.
