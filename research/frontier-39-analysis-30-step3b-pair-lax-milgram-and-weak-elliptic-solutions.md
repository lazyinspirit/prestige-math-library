# Step 3b — pair lax-milgram-and-weak-elliptic-solutions (frontier-39-analysis-30)

Role: alpha-high, Step 3b author. A page: `lax-milgram-and-weak-elliptic-solutions`
(order 458.029, pde). B page: `lax-milgram-and-weak-elliptic-solutions-examples`
(order 458.03, pde). Batch 10. Dispatch label
`step3b-pair-lax-milgram-and-weak-elliptic-solutions-6aca7bd19d592d51`.

Owned items (39: 28 A + 11 B), in dispatch dependency order. All 39 item files
were missing at entry and are authored here.

## Owned IDs (levels from research/frontier-39-analysis-30-batch-10.pages.json)

Level 0 — `def-bounded-coercive-and-symmetric-sesquilinear-forms`,
`def-h-minus-one-as-the-dual-of-h-one-zero`,
`def-uniformly-elliptic-divergence-form-operator`,
`lem-bounded-below-operator-has-closed-range`,
`lem-sharp-dirichlet-poincare-inequality-on-an-interval`,
`lem-w-one-two-is-a-hilbert-space` (A);
`cex-arbitrary-ltwo-boundary-data-need-not-have-an-h-one-lifting`,
`ex-neumann-kernel-dimension-equals-the-number-of-connected-components` (B).

Level 1 — `def-weak-dirichlet-solution-for-a-divergence-form-operator`,
`lem-elliptic-form-is-well-defined-and-bounded`,
`lem-form-to-bounded-operator-by-hilbert-riesz`,
`lem-ltwo-and-divergence-data-embed-in-h-minus-one`.

Level 2 — `lem-classical-solutions-satisfy-the-weak-formulation`,
`lem-coercive-form-operator-is-bounded-below`,
`lem-coercivity-of-the-principal-dirichlet-form`,
`thm-every-h-minus-one-functional-has-ltwo-plus-divergence-form` (A);
`ex-ltwo-forcing-defines-an-h-minus-one-functional` (B).

Level 3 — `lem-adjoint-of-a-coercive-sesquilinear-form-is-coercive`,
`lem-coercivity-makes-a-small-form-step-a-contraction`.

Level 4 — `lem-coercivity-of-the-adjoint-makes-the-form-operator-range-dense`,
`thm-lax-milgram`.

Level 5 — `cor-lax-milgram-inverse-has-norm-at-most-one-over-alpha`,
`cor-positive-reaction-restores-coercivity-without-dirichlet-poincare`,
`cor-symmetric-lax-milgram-is-energy-minimisation`,
`lem-testing-a-coercive-weak-solution-with-itself-gives-the-energy-bound`,
`thm-weak-neumann-poisson-solvability-on-the-mean-zero-subspace` (A);
`cex-bounded-form-without-coercivity-need-not-be-solvable`,
`ex-complex-sesquilinear-coercivity-differs-from-bilinear-positivity` (B).

Level 6 — `rem-nonsymmetric-lax-milgram-is-not-a-scalar-minimisation-principle`,
`thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem`,
`thm-lax-milgram-solvability-for-coercive-divergence-form-equations` (A);
`cex-neumann-poisson-problem-is-not-coercive-on-all-of-h-one`,
`ex-one-dimensional-form-attains-the-lax-milgram-one-over-alpha-bound` (B).

Level 7 — `cor-inhomogeneous-weak-dirichlet-problem-by-a-trace-lifting` (A);
`cex-a-large-adverse-zero-order-term-destroys-dirichlet-coercivity`,
`cex-coercive-form-need-not-be-symmetric`, `ex-nonsymmetric-coercive-elliptic-form`,
`ex-weak-dirichlet-poisson-problem-on-an-interval` (B).

Level 8 — `cor-weak-solution-depends-continuously-on-data` (A).

## Open obligations (at entry)

1. **Unfinished in-run suppliers.** Two declared suppliers are not yet authored
   by their own batches (checked on disk at entry):
   - `thm-poincare-inequality-for-w-one-p-zero` (batch 4, PDE-14
     `sobolev-poincare-and-morrey-inequalities`), consumed by
     `lem-ltwo-and-divergence-data-embed-in-h-minus-one` (step using the
     zero-trace Poincare bound), `lem-coercivity-of-the-principal-dirichlet-form`
     (coercivity constant), `thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem`
     (energy bound), `thm-lax-milgram-solvability-for-coercive-divergence-form-equations`
     (smallness condition) and `ex-ltwo-forcing-defines-an-h-minus-one-functional`
     (two-sided estimate).
   - `thm-poincare-wirtinger-on-bounded-connected-extension-domains` (batch 9,
     PDE-15 `rellich-kondrachov-and-sobolev-compactness`), consumed by
     `thm-weak-neumann-poisson-solvability-on-the-mean-zero-subspace`
     (mean-zero coercivity).
   Consumers are authored here anyway with the open obligation recorded; their
   item decisions stay `escalate` until the suppliers are authored and the
   actual proof uses are reconciled (required supplier ID, consumer ID and
   consuming step are recorded in this report and in the batch cross-batch
   dependency input).
2. **Step-4 splice findings (recorded, not repaired here).** Six immediate page
   prerequisites are undeclared in `plan-spec.json`: this pair's A and B pages
   consume the PDE-14 A page `sobolev-poincare-and-morrey-inequalities` at item
   level (zero-trace Poincare), but the plan licenses only the transitive chain
   PDE-16 → PDE-15 → PDE-14. Step 4 should add direct backward `requires` edges
   from both pages of this pair to PDE-14 in the plan and run manifests.
3. **Coverage/source history.** `[ACM]` (Ambrosio–Carlotto–Massaccesi) could not
   be fetch-verified at Step 1; every claim it would back is independently
   covered by [H] Hunter, [L] Laugesen, [B] Brezis, [T] Teschl, [Si] Simon
   (8/8 stamps). No result depends on [ACM].

## Checkpoint log

(one entry per item as authored and checked; later entries added after entry
creation)

1. `def-bounded-coercive-and-symmetric-sesquilinear-forms` — authored (definition, no
   proof steps); explicit-path precheck n/a pass, rendercheck clean. Deps unchanged.
2. `def-h-minus-one-as-the-dual-of-h-one-zero` — authored (definition); statement
   normalised (single-line displays, stray text repaired: "desig's/pag's"→"design's/page's");
   rendercheck clean. Deps unchanged; declares Countable Choice as scaffolded.
3. `def-uniformly-elliptic-divergence-form-operator` — authored (definition); typo
   "pla's"→"plan's"; rendercheck clean.
4. `lem-bounded-below-operator-has-closed-range` — authored; **repair recorded:** the
   scaffold sentence "No choice principle beyond the completeness of X is used" was
   arithmetically false as written: closedness of the range is the statement "every
   complete subspace of a metric space is closed", which is *equivalent to Countable
   Choice* (G. Gutierres da Conceição, *The Axiom of Countable Choice in Topology*,
   Univ. of Coimbra 2004, Cor. 4.1.2: "(i) every complete metric space is sequential;
   (ii) every complete subspace of a metric space is closed" are equivalent to CC).
   The mathematical claim (injectivity, closed range, inverse bound 1/c) is unchanged;
   the statements now record CC used exactly once through published
   `thm-metric-sequential-closure`, consistent with the library's Cauchy-completeness
   convention. Deps added: `thm-metric-sequential-closure`, `lem-metric-limits-unique`,
   `def-countable-choice`, `def-operator-norm`. Precheck PASS, proof-layout 0 defects,
   rendercheck clean. Consumers (`lem-coercivity-of-the-adjoint-makes-the-form-operator-
   range-dense`, `cor-lax-milgram-inverse-has-norm-at-most-one-over-alpha`) already
   carry Countable Choice, so the consumers' accounting is unaffected.
5. `lem-sharp-dirichlet-poincare-inequality-on-an-interval` — authored from the owner's
   repair route (ground-state identity, H^1_0 closure, explicit σ-cutoffs); the weak
   identity and the equality witness sin(πx/L) proved with the direct ∫φ²=L/2
   computation. Deps added (all used, all published): cor-sine-and-cosine-are-one-
   lipschitz, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-and-cosine-
   addition-formulas, def-complex-lp-and-euclidean-test-function-conventions,
   lem-integral-elementary-bounds, thm-continuous-implies-integrable,
   thm-linearity-of-the-integral, thm-additivity-over-subintervals, thm-extreme-value-r.
   Precheck PASS (9 steps), proof-layout 0 defects, rendercheck clean.
   NEXT: continue level-0 items (`lem-w-one-two-is-a-hilbert-space`, B-page level-0 pair).
6. `lem-w-one-two-is-a-hilbert-space` — authored with a CC-only proof (direct verification
   of the inner-product axioms + completeness via componentwise L² limits), avoiding the
   AC-stated `thm-sobolev-spaces-are-banach-spaces`/`thm-hk-is-a-hilbert-space` and keeping
   the page's CC ledger. Deps adjusted accordingly.
7. `cex-arbitrary-ltwo-boundary-data-need-not-have-an-h-one-lifting` — authored as a
   citation counterexample (published chart computation at p=2, θ=1/2, q=1: logarithmic
   divergence; sharp trace range W^{1/2,2}).
8. `ex-neumann-kernel-dimension-equals-the-number-of-connected-components` — authored:
   kernel = zero-gradient set (test with v=u), componentwise constancy, converse via
   locally-constant smoothness + classical-derivative/weak-derivative agreement,
   independence of the m indicators by positive measure of each component.
9. `lem-form-to-bounded-operator-by-hilbert-riesz` — authored (Riesz route; linearity
   by uniqueness of the representing vector; ‖A‖=M for least M; adjoint form via A*).
10. `def-weak-dirichlet-solution-for-a-divergence-form-operator` — authored (definition).
11. `lem-elliptic-form-is-well-defined-and-bounded` — authored (pointwise ℓ¹–ℓ² bound
    nM_a|Du||Dv|, Hölder, class independence, sesquilinearity).
12. `lem-ltwo-and-divergence-data-embed-in-h-minus-one` — authored. **Open obligation
    flagged:** consumes the not-yet-authored `thm-poincare-inequality-for-w-one-p-zero`
    (batch 4/PDE-14) at the bound step (step 1.2: ‖v‖_{L²} ≤ C_P‖Dv‖_{L²}); its item
    decision stays `escalate` until the supplier is authored and the use reconciled.
13. `lem-coercive-form-operator-is-bounded-below` — authored (α‖u‖ ≤ ‖Au‖ ≤ M‖u‖).
14. `lem-coercivity-of-the-principal-dirichlet-form` — authored. Consumes the same
    not-yet-authored Poincaré supplier (step 2.1); decision stays `escalate`.
15. `thm-every-h-minus-one-functional-has-ltwo-plus-divergence-form` — authored
    (Riesz vector of the conjugate functional; canonical representation; norm identity
    by finite Cauchy–Schwarz and ‖g‖_{H¹}=‖F‖). Depends on `lem-w-one-two` for the
    Hilbert structure of H^1_0.
16. `lem-classical-solutions-satisfy-the-weak-formulation` — authored (Sobolev
    Gauss–Green with vanishing trace term via H^1_0 = ker T; classical derivatives are
    weak derivatives).
17. `ex-ltwo-forcing-defines-an-h-minus-one-functional` — authored (upper bound;
    two-sided estimate on H^1_0; injectivity by the fundamental lemma; interval
    scaling: admissible C_P ≥ L/π by the sharp interval witness, so the displayed
    bound is at least (L/π)√L). Consumes the not-yet-authored Poincaré supplier in
    step 1.1; decision stays `escalate` (supplier ID, consumer ID and step recorded).
NEXT: level-3 items `lem-adjoint-of-a-coercive-sesquilinear-form-is-coercive`,
`lem-coercivity-makes-a-small-form-step-a-contraction`.

18. `lem-adjoint-of-a-coercive-sesquilinear-form-is-coercive` — authored (a* has
    the same bound M and coercivity α; a*(u,u)=\overline{a(u,u)}); precheck PASS,
    proof-layout 0 defects, rendercheck clean.
19. `lem-coercivity-makes-a-small-form-step-a-contraction` — authored (for
    0<ρ<2α/M² the step I−ρA is a strict contraction with factor 1−ρα/2); precheck
    PASS, proof-layout 0 defects, rendercheck clean.
20. `lem-coercivity-of-the-adjoint-makes-the-form-operator-range-dense` — authored
    (coercivity of a* forces dense range of A through the closed-range input);
    precheck PASS, proof-layout 0 defects, rendercheck clean.
21. `thm-lax-milgram` — authored (bounded coercive form + bounded conjugate-linear
    datum ⇒ unique solution; α‖u‖≤‖F‖; contraction/fixed-point route); precheck
    PASS, proof-layout 0 defects, rendercheck clean.
22. `cor-lax-milgram-inverse-has-norm-at-most-one-over-alpha` — authored (the
    solution map is bounded with norm at most 1/α); precheck PASS, proof-layout
    0 defects, rendercheck clean.
23. `cor-positive-reaction-restores-coercivity-without-dirichlet-poincare` —
    authored (a positive zero-order term gives coercivity on all of H¹ without
    Poincaré); precheck PASS, proof-layout 0 defects, rendercheck clean.
24. `cor-symmetric-lax-milgram-is-energy-minimisation` — authored (symmetric case:
    J(v)=½Re a(v,v)−Re F(v) has its strict minimum at the solution; contract iff
    rows repaired to checked); precheck PASS, proof-layout 0 defects, rendercheck
    clean.
25. `lem-testing-a-coercive-weak-solution-with-itself-gives-the-energy-bound` —
    authored (testing v=u gives α‖u‖≤‖F‖; deps repaired to include the weak
    solution definition); precheck PASS, proof-layout 0 defects, rendercheck clean.
26. `thm-weak-neumann-poisson-solvability-on-the-mean-zero-subspace` — authored
    (Neumann form coercive on the mean-zero subspace through the batch-9
    Poincaré–Wirtinger item; unique solution iff F(**1**)=0, bound (1+C_W²)‖F‖;
    contract iff rows checked); precheck PASS, proof-layout 0 defects, rendercheck
    clean.
27. `cex-bounded-form-without-coercivity-need-not-be-solvable` — authored (zero
    form, nonzero datum: bounded, not coercive, no solution); precheck PASS,
    proof-layout 0 defects, rendercheck clean.
28. `ex-complex-sesquilinear-coercivity-differs-from-bilinear-positivity` —
    authored (complex coercivity is not positivity of the associated bilinear
    form); precheck PASS, proof-layout 0 defects, rendercheck clean.
29. `rem-nonsymmetric-lax-milgram-is-not-a-scalar-minimisation-principle` —
    authored (existence survives without symmetry; the energy characterisation
    does not); precheck n/a (no numbered steps), proof-layout 0 defects,
    rendercheck clean.
30. `thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem` —
    authored (−Δu=F on H¹_0 uniquely solvable with ‖u‖≤(1+C_P²)‖F‖); precheck
    PASS, proof-layout 0 defects, rendercheck clean.
31. `thm-lax-milgram-solvability-for-coercive-divergence-form-equations` —
    authored (under θ−C_P M_b−C_P² M_c>0 the general divergence-form problem is
    uniquely solvable with the explicit bound); precheck PASS, proof-layout 0
    defects, rendercheck clean.
32. `cex-neumann-poisson-problem-is-not-coercive-on-all-of-h-one` — authored
    (nonzero constants lie in the kernel, so coercivity fails on H¹); precheck
    PASS, proof-layout 0 defects, rendercheck clean.
33. `ex-one-dimensional-form-attains-the-lax-milgram-one-over-alpha-bound` —
    authored (a(u,v)=αu\overline v attains the inverse-norm bound 1/α); precheck
    PASS, proof-layout 0 defects, rendercheck clean.
34. `cor-inhomogeneous-weak-dirichlet-problem-by-a-trace-lifting` — authored and
    **repaired**: lift g by a bounded trace right inverse and solve the shifted
    zero-trace problem; uniqueness independent of the lifting. The load-bearing
    examples-page dependency was replaced by the A-page trace-range statement
    (see R1 below), and a split display was joined. precheck PASS, proof-layout
    0 defects, rendercheck clean.
35. `cex-a-large-adverse-zero-order-term-destroys-dirichlet-coercivity` —
    authored and **repaired**: a large adverse coefficient c>π² destroys
    Dirichlet coercivity, with explicit nonuniqueness at c=π²; the interval
    Riemann–Lebesgue citation was moved to the earlier published interval theorem
    (R2). precheck PASS, proof-layout 0 defects, rendercheck clean.
36. `cex-coercive-form-need-not-be-symmetric` — authored (2×2 coercive form with
    skew part); precheck PASS, proof-layout 0 defects, rendercheck clean.
37. `ex-nonsymmetric-coercive-elliptic-form` — authored (drift term gives a
    coercive nonsymmetric divergence-form example); precheck PASS, proof-layout
    0 defects, rendercheck clean.
38. `ex-weak-dirichlet-poisson-problem-on-an-interval` — authored (explicit
    Green-function solution on (0,L) for H^{-1} data); precheck PASS, proof-layout
    0 defects, rendercheck clean.
39. `cor-weak-solution-depends-continuously-on-data` — authored (Lipschitz data
    dependence of the lifted solution); precheck PASS, proof-layout 0 defects,
    rendercheck clean.

## Repairs, supplier reconciliation and contract work (session 2)

R1. **b-leaf-content hard errors (depcheck).** `cex-arbitrary-ltwo-boundary-data-need-not-have-an-h-one-lifting`
    and `cor-inhomogeneous-weak-dirichlet-problem-by-a-trace-lifting` both rested
    on the foreign examples-page item `cex-lp-boundary-data-need-not-lie-in-the-h-one-trace-range`
    (home page `sobolev-traces-and-zero-boundary-values-examples`). Per the
    dispatch ("replace load-bearing examples-page dependencies with exact A-page
    suppliers or complete local arguments") the B counterexample now **computes the
    Slobodeckij divergence locally** (straight-chart double integral, Tonelli, the
    exact finite-exactly-when-q<1 formula, logarithmic divergence at q=1) from
    A-page suppliers `def-fractional-slobodeckij-space-on-euclidean-space`,
    `def-fractional-sobolev-space-on-a-compact-c-one-boundary`,
    `lem-fractional-boundary-norm-is-independent-of-atlas`,
    `thm-tonelli-and-fubini-for-completed-product-measures`, and the corollary
    restates admissibility through `thm-sharp-trace-theorem-for-w-one-p` and
    `thm-lp-trace-operator-on-a-bounded-c-one-domain` (deps extended with
    `def-uniformly-elliptic-divergence-form-operator`). depcheck now reports no
    hard error for either item. The B item's YAML escapes (`\Gamma`, `\partial`
    in source locators) were also fixed.

R2. **Forward references (fwdcheck hard errors).** `lem-sharp-dirichlet-poincare-inequality-on-an-interval`,
    `ex-ltwo-forcing-defines-an-h-minus-one-functional` and
    `cex-a-large-adverse-zero-order-term-destroys-dirichlet-coercivity` cited
    `lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals`
    on the later page `measurable-densities-and-radon-volume-on-manifolds`
    (#476.1). All three now cite the earlier published interval theorem
    `thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral`
    (#288.017), and the F-fact wording was adjusted to the interval statement.

R3. **Later-page dependency removed in the `ex-ltwo` counterexample example.**
    `ex-ltwo-forcing-defines-an-h-minus-one-functional` depended on PDE-21's
    `lem-fundamental-lemma-of-the-calculus-of-variations` (#458.039, later than
    this pair). The injectivity step now uses the published earlier theorem
    `thm-locally-integrable-functions-embed-in-distributions` (#288.093) — the
    injection of L¹_loc(Ω) into D′(Ω) — with the elementary L²⊂L¹_loc bound
    (Hölder). The cross-batch row is recorded `removed`. fwdcheck reports no
    forward reference for the item.

R4. **Missing supplier landed; six rows verified.** `thm-poincare-inequality-for-w-one-p-zero`
    (batch 4 / PDE-14) is now authored on disk. Its statement
    ‖u‖_{L^p(Ω)}≤C(p)(b−a)‖Du‖_{L^p(Ω)} for Ω bounded in one direction and u∈W^{1,p}_0,
    1≤p<∞, matches all five consumers' p=2 use with C_P:=C(2)(b−a); the proof
    yields C(p)=1. Contracts were regenerated with the supplier's exact Statement
    quote; the five consumer rows and the Poincaré–Wirtinger row in
    `research/frontier-39-analysis-30-batch-10.cross-batch-dependencies.json`
    are now `verified`. Residual note routed to batch 4: the supplier's F7 says
    "Countable Choice" while citing `def-axiom-of-choice`; our consumers assume
    both AC and CC, so their accounting is unaffected.

R5. **Boundary-contract repairs.** All 78 templated `not_applicable` iff rows in
    the batch-10 proof contract were replaced with item-specific dispositions.
    The genuine biconditional in `lem-form-to-bounded-operator-by-hilbert-riesz`
    (coercivity ⇔ Re(Au,u)≥α‖u‖²) and the two-directional claims in
    `cor-symmetric-lax-milgram-is-energy-minimisation`,
    `thm-weak-neumann-poisson-solvability-on-the-mean-zero-subspace` and
    `ex-neumann-kernel-dimension-equals-the-number-of-connected-components` are
    now `checked` with step-based evidence. `boundary-audit --fail-on-template
    --fail-on-contradicted` and `citation-fidelity --fail-on-missing-quote` exit 0
    on the batch contract.

R6. **Manifest scope integrity.** Two statement/strategy edits made while
    repairing R1 were reverted in `research/frontier-39-analysis-30-batch-10.pages.json`
    so that the Step-3a owner scope hash remains current
    (`0f6139e33ae9e745286e2a5e8ffa8d27c97b7cd053f26ac656fa0b4e1eb99403`); the
    authored item files keep the repaired statements, and the repaired claims
    (admissibility of trace-range data; the same counterexample) do not narrow
    the signed promise. Manifest deps and dependency levels remain synced from
    the item files (39 items).

## Checks run at handoff

- `precheck` on the 39 explicit paths: 34 pass, 5 `not-applicable` (4 definitions
  and 1 remark have no numbered steps), 0 failing.
- `rendercheck` on the 39 paths: OK — no wikilink in math, no multiline display,
  every math span and frontmatter block parses.
- `proof-layout` in one command over all 39 changed paths: 39 items, 153 steps,
  0 defects (final run after the last edit).
- `content-policy` item mode (`research/frontier-39-analysis-30-batch-10.pages.json`):
  39 scoped items, 0 errors, 0 warnings.
- `proof-contract --strict` on the batch contract: 39/39 items, 0 errors.
- `boundary-audit --fail-on-contradicted --fail-on-template`: exit 0;
  `citation-fidelity --fail-on-missing-quote`: exit 0.
- `depcheck`: 0 hard errors among the 39. Three warnings remain deliberately
  (all non-load-bearing, same-page reader pointers, see Open obligations 3).
- `fwdcheck`: 0 hard errors among the 39.
- `extcheck`, `prosecheck`, `depsource`: 0 findings among the 39.
- `item-dependency-levels.mjs check --run frontier-39-analysis-30`: 0 batch-10
  errors (two unrelated batches still have their own).
- `validate-plan.mjs research/plan-spec.json`: OK, acyclic and consistent.
- `manifest-deps.mjs` over all 30 batch manifests: 927 items, 0 errors.
- `coverage-checklist ... --require-destination`: 0 errors, 2 low-yield warnings
  (Step-1 declines, unchanged).
- `source-fetch-check --coverage`: 8/8 sources fetch-verified.
- `splice-plan.mjs --run frontier-39-analysis-30 --verify`: five undeclared
  item-level prerequisites into PDE-14 `sobolev-poincare-and-morrey-inequalities`
  (consumers `lem-ltwo-and-divergence-data-embed-in-h-minus-one`,
  `lem-coercivity-of-the-principal-dirichlet-form`,
  `thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem`,
  `thm-lax-milgram-solvability-for-coercive-divergence-form-equations`,
  `ex-ltwo-forcing-defines-an-h-minus-one-functional`). Recorded for Step 4;
  neither the direct `requires` edge nor acceptance of the transitive license is
  an author decision.
- `frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30`:
  refreshed and deduplicated.
- `step3-decisions.mjs check --run frontier-39-analysis-30 --phase final`:
  39/39 batch-10 review receipts on disk, 0 open batch-10 entries (the run-wide
  failure is other batches still being authored).

## Handoff

**Completed IDs:** all 39 owned items (28 A + 11 B), every one an original
scaffold ID. Item decisions: 12 `repaired`, 27 `accept`, 0 `escalate`
(`research/frontier-39-analysis-30-step3b-review-<id>.json`). The repaired set
is `lem-bounded-below-operator-has-closed-range`, `lem-sharp-dirichlet-poincare-inequality-on-an-interval`,
`lem-w-one-two-is-a-hilbert-space`, `lem-form-to-bounded-operator-by-hilbert-riesz`,
`cor-symmetric-lax-milgram-is-energy-minimisation`,
`lem-testing-a-coercive-weak-solution-with-itself-gives-the-energy-bound`,
`thm-weak-neumann-poisson-solvability-on-the-mean-zero-subspace`,
`cex-arbitrary-ltwo-boundary-data-need-not-have-an-h-one-lifting`,
`ex-ltwo-forcing-defines-an-h-minus-one-functional`,
`cex-a-large-adverse-zero-order-term-destroys-dirichlet-coercivity`,
`cor-inhomogeneous-weak-dirichlet-problem-by-a-trace-lifting`,
`ex-neumann-kernel-dimension-equals-the-number-of-connected-components`.

**Pages:** `library/pde/lax-milgram-and-weak-elliptic-solutions.md` (28 items,
`examples: []`) and `library/pde/lax-milgram-and-weak-elliptic-solutions-examples.md`
(`items: []`, 11 examples), both `status: draft`, no double homing.

**Added suppliers (deps added during repair, all published and used):**
`thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral`,
`thm-locally-integrable-functions-embed-in-distributions`,
`def-regular-distribution-from-a-locally-integrable-function`,
`def-test-function-space-d-of-an-open-set`,
`thm-lp-trace-operator-on-a-bounded-c-one-domain`, `thm-sharp-trace-theorem-for-w-one-p`,
`def-uniformly-elliptic-divergence-form-operator` (on the corollary),
`def-weak-dirichlet-solution-for-a-divergence-form-operator` (on the energy-bound
lemma), and the sliding/local Slobodeckij suppliers of R1.

**Published concerns:** none originating in this batch — every dependency is a
published item or a verified in-run draft. Two routed notes: (i) batch 4's
`thm-poincare-inequality-for-w-one-p-zero` labels Countable Choice with the
axiom-of-choice definition in F7; (ii) run-level observation only: several other
in-flight batch contracts still carry boundary template clusters (e.g. batch 9:
7 clusters, 4 contradicted candidates) and forward/leaf debt; those are not
batch-10 findings.

**Open obligations:**
1. Step 4 splice: the five undeclared item-level edges into PDE-14 listed above
   (the plan licenses only the transitive chain PDE-16 → PDE-15 → PDE-14).
2. Supplier volatility: batch 4's PDE-14 page still has 23 unauthored items; if
   `thm-poincare-inequality-for-w-one-p-zero` is revised, the item receipts of its
   five consumers go stale by construction (their hashes bind the supplier text)
   and Step 8 must re-verify the five rows and the citation contracts.
3. Three benign `depcheck` `cited-not-in-deps` warnings retained deliberately as
   non-load-bearing same-page reader pointers: `cex-coercive-form-need-not-be-symmetric`
   → `ex-nonsymmetric-coercive-elliptic-form`, `lem-ltwo-and-divergence-data-embed-in-h-minus-one`
   → `thm-every-h-minus-one-functional-has-ltwo-plus-divergence-form`, and
   `thm-lax-milgram-solvability-for-coercive-divergence-form-equations` →
   `thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem`. Declaring
   them as deps would change levels or create same-level edges, so they stay
   remarks; no gate fails on them.
