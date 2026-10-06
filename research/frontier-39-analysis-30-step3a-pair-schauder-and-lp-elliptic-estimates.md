# Step 3a scope review — pair `schauder-and-lp-elliptic-estimates`

- Run: `frontier-39-analysis-30` · role: alpha (step 3a) · batch: 13
- A page: `schauder-and-lp-elliptic-estimates` (order 458.035, `pde`)
- B page: `schauder-and-lp-elliptic-estimates-examples` (order 458.036)
- Decision recorded on the A page: **sufficient**. Two minor, non-blocking
  findings (F1 source-ledger substitution not recorded; F2 boundary-Hölder
  norm notation) are left with the owner; no topic, result or example of the
  PDE-19 design is missing and no unmet prerequisite was confirmed.

## Inputs read

- `research/frontier-39-analysis-30-batch-13.pages.json` (22 A + 8 B items,
  levels 0–9 and 0–10), `…-batch-13.coverage.json` (7 works, 12 fetch-verified
  source entries, 57 harvested results), `…-batch-13.notes.md` (construction
  handoff and owner repairs), `…-batch-13.cross-batch-dependencies.json`
  (11 claim-evidenced item edges into batches 4, 9, 10).
- Controlling prose design `research/plan-pde-track.md` §PDE-19, lines
  1818–1861 (14 A rows, 6 B rows, primary backing and hard obligations) and the
  PDE-19 additions table, lines 3696–3709 (10 rows).
- `research/plan-spec.json` page entries (458.035/458.036 and the consumed
  458.025/458.027/458.029 pages), `research/frontier-39-analysis-30-alpha-step1-drift.md`
  lines 183–191 (verdict `drift-applied`, FR-8 added; "use the coefficient
  regime actually proved"), `…-scope-ledger.json`
  (`allow_in_run_dependencies: true`), `…-step1-owner-resolution.md` items
  10–12 (endpoint witness; Schauder/W2p repairs; owner-added weak global W2p
  helper with `n<p<∞`), and all 30 `…-step1-<item>.json` readiness records
  (30/30 `ready`).
- Published suppliers read on disk for statement/scope: `items/thm-interior-estimate-for-poisson-equation-with-holder-data.md`
  (the design's `thm-interior-schauder-estimate-for-the-laplacian`, including its Newtonian-potential + harmonic-remainder
  proof), `items/cor-riesz-transforms-are-bounded-on-lp.md`,
  `items/cor-riesz-transforms-are-ltwo-bounded.md`,
  `items/def-calderon-zygmund-kernel-and-principal-value-operator.md`,
  `items/def-standard-holder-calderon-zygmund-kernel.md`,
  `items/thm-newtonian-potential-for-holder-data-is-classical.md`,
  `items/thm-harmonic-functions-are-real-analytic.md`,
  `items/def-bounded-c-one-domain-boundary-charts-and-outward-normal.md`
  (integer `C^k(\bar\Omega)` convention),
  `items/thm-extension-theorem-for-bounded-smooth-domains.md`,
  `items/def-sobolev-extension-domain-and-extension-operator.md`; plus the
  in-run batch-4/9/10 supplier statements behind the 11 cross-batch edges.

## Scope vs design, sources and role

### A page — 22 items, levels 0–9

- All 14 PDE-19 A rows are realized:
  `def-holder-spaces-c-k-alpha-and-their-scaled-norms`,
  `thm-holder-spaces-on-bounded-domains-are-banach-spaces`,
  `lem-cancellation-formula-for-second-derivatives-of-newtonian-potentials`,
  `lem-freezing-coefficients-and-schauder-error-estimate`,
  `thm-interior-schauder-estimate-for-uniformly-elliptic-equations`,
  `thm-boundary-schauder-estimate-for-the-dirichlet-problem`,
  `thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian`,
  `thm-global-schauder-estimate-and-classical-dirichlet-solvability`,
  `thm-global-w-two-p-estimate-for-the-laplacian-on-rn`,
  `thm-interior-w-two-p-estimate-for-uniformly-elliptic-equations`,
  `thm-global-w-two-p-dirichlet-estimate`,
  `cor-w-two-p-regularity-implies-classical-or-holder-regularity-when-p-is-large`,
  `rem-schauder-and-sobolev-estimates-are-different-scales`, plus the
  published realization of design `thm-interior-schauder-estimate-for-the-laplacian`.
- The design rows `lem-schauder-decomposition-into-newtonian-potential-and-harmonic-remainder`
  and `lem-ltwo-boundedness-of-second-derivative-newtonian-singular-integrals`
  are recorded as subsumed, and the subsumption is materially true: the
  published `thm-interior-estimate-for-poisson-equation-with-holder-data`
  contains exactly the cutoff/Newtonian/harmonic decomposition (its proof
  steps 2.1–5.1), and the `L^2` multiplier seed is carried by the published
  `cor-riesz-transforms-are-ltwo-bounded` with the local
  `lem-cancellation-formula-for-second-derivatives-of-newtonian-potentials`,
  with the multiplier formula independently verified by
  `ex-riesz-transform-formula-for-second-laplacian-derivatives`.
- Additions-table A rows present:
  `lem-holder-interpolation-with-an-epsilon-loss`,
  `thm-method-of-continuity-for-a-uniformly-estimated-family-of-bounded-operators`,
  `lem-cutoff-commutator-for-local-w-two-p-estimates`,
  `cor-injectivity-removes-the-lp-kernel-term-from-a-global-w-two-p-estimate`,
  `thm-weak-global-w-two-p-dirichlet-regularity-for-the-laplacian`
  (owner-added, finite range `n<p<∞` as the addition row states).
- Three local prerequisites beyond the design inventory are present and
  consumed before use: `def-uniformly-elliptic-nondivergence-operator`,
  `lem-lp-interpolation-absorbs-lower-order-derivatives`,
  `lem-interior-w-two-p-regularity-for-the-laplacian`. The design's A4
  (`thm-interior-schauder-estimate-for-the-laplacian`) is consumed as the
  published Poisson estimate, exactly as the batch notes record; A11's `L^p`
  route (`thm-global-w-two-p-estimate-for-the-laplacian-on-rn`) uses the
  published Riesz-transform corollary instead of duplicating a generic CZ
  proof, while the cancellation lemma still verifies the Newtonian-Hessian fit
  to FR-8.
- The drift-required coefficient regime is honest:
  `thm-interior-w-two-p-estimate-for-uniformly-elliptic-equations` and
  `thm-global-w-two-p-dirichlet-estimate` assume continuity of the principal
  coefficients and the former explicitly disclaims merely measurable/VMO
  coefficients; the counterexamples `cex-bounded-measurable-nondivergence-coefficients-do-not-give-schauder-estimates`
  and `cex-freezing-coefficients-cannot-absorb-a-fixed-large-oscillation-on-arbitrarily-small-balls`
  test the exact small-scale input that is used.

### B page — 8 items, levels 0–10, leaf

- All 6 design B rows are realized:
  `ex-schauder-scaling-on-a-quadratic-poisson-solution`; the renamed
  `cex-a-non-dini-continuous-poisson-source-can-destroy-continuity-of-second-derivatives`
  (sharpened from the design's generic continuous-forcing warning);
  `cex-schauder-estimates-fail-at-the-holder-endpoint-alpha-one` with an
  explicit Lipschitz witness; `ex-riesz-transform-formula-for-second-laplacian-derivatives`;
  `cex-boundary-w-two-p-regularity-needs-c-one-one-type-control`; and
  `ex-method-of-continuity-for-a-constant-coefficient-path`.
- The three B additions-table rows are present: the renamed non-Dini
  counterexample, `cex-bounded-measurable-nondivergence-coefficients-do-not-give-schauder-estimates`,
  and `cex-freezing-coefficients-cannot-absorb-a-fixed-large-oscillation-on-arbitrarily-small-balls`.
- Every B item is anchored to an A-page claim and no B item is depended on by
  any page (the pair is B-leaf clean).

### Role and consumers

- The pair is the PDE track's Schauder/`W^{2,p}` capstone: it consumes the
  published FR-8 page (`calderon-zygmund-decomposition-and-singular-integrals`,
  order 458.02605) plus published Poisson/FA/measure items, and the in-run
  batch-4 (`sobolev-poincare-and-morrey-inequalities`), batch-9
  (`rellich-kondrachov-and-sobolev-compactness`) and batch-10
  (`lax-milgram-and-weak-elliptic-solutions`) item suppliers.
- In-run consumers: `thm-de-giorgi-nash-interior-holder-regularity`
  (batch-14 page) uses the Hölder-space definition; the direct-method page
  consumes `thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian`
  in `cor-minimisers-are-classical-when-elliptic-regularity-applies`; and
  `weak-elliptic-maximum-principles-and-holder-regularity` (order 458.037) has
  a page-level `requires` edge. Both consumed items supply exactly the needed
  claims (a Hölder scale and a classical Schauder regularity theorem).

### Sources

- 12 source entries across 7 independent treatments (Schikorra; Simon;
  Villavert; Wang; Hunter; Teschl; Haller-Dintelmann), all read in full per
  their locators, all `fetch_verified` (12/12; `source-fetch-check` re-run:
  "12/12 source(s) fetch-verified"), and all 57 harvested headings carry an
  explicit disposition (`coverage-checklist --require-destination`: 0 errors,
  0 warnings). Parabolic Schauder theory, Monge–Ampère/fully nonlinear
  Schauder theory and Perron's method are explicitly deferred to other pages
  with reasons.

## Dependency closure and unmet prerequisites

- Direct dependency references from the 30 pair items: 211; unique direct
  dependencies: 85. Of these, every non-run dependency exists in `items/` with
  `status: published`, and every run dependency exists in a current batch
  scaffold. Transitive closure: 1,973 nodes — 64 in-run carriers (the pair's 30
  plus 34 items on the three upstream pages) and 1,909 published carriers —
  with **0 missing nodes** and no cycle
  (`item-dependency-levels check`: 899 items, 60 pages, max level 22).
- All 11 cross-batch edges in `…-batch-13.cross-batch-dependencies.json` were
  verified against the supplier statements: batch 4 supplies the higher-order
  Sobolev embedding (`thm-higher-order-sobolev-embedding`, clauses (i)–(iii)
  with the exact `k - n/p` exponent); batch 9 supplies all three
  Rellich–Kondrachov branches; batch 10 supplies weak Dirichlet existence,
  trace lifting, classical-to-weak consistency and the weak-solution
  definition. No consumer lacks its required claim; the relation is `open`
  only because those suppliers are in-run drafts, which the scope ledger
  permits.
- Three potentially delicate hypotheses were checked explicitly:
  (i) the extension-domain hypothesis of the batch-4/9 suppliers is met for
  the pair's bounded `C^{2,α}` and `C^{1,1}` domains because the published
  `thm-extension-theorem-for-bounded-smooth-domains` covers bounded `C^k`
  domains in the graph sense (`C^{2,α} ⊂ C^2`, `C^{1,1} ⊂ C^1`); (ii) the
  Marcinkiewicz interpolation named in the design ("MT-17") is published
  (`thm-marcinkiewicz-interpolation-for-weak-one-one-and-strong-infinity`,
  `lem-marcinkiewicz-interpolation-from-weak-one-one-and-strong-two-two`), so
  FR-8's strict-`L^p` machinery used by
  `thm-global-w-two-p-estimate-for-the-laplacian-on-rn` and
  `ex-riesz-transform-formula-for-second-laplacian-derivatives` is transitively grounded;
  (iii) the published `L^p` Riesz corollary covers exactly `1<p<∞`, the range
  the pair's items state.
- Step-4's removal of the unsupported PDE-18 page edge and of the
  transitive-only Morrey item edge is on record in the batch notes; the current
  proofs use PDE-14/16-type items, batches 4/9/10 and local arguments, so the
  removal does not leave an unmet claim.

## Findings

### F1 — minor, non-blocking: the design's primary backing is substituted without a coverage entry.

The design's primary backing is "[E] §§6.2–6.3; [T] Chapter 10 §§3–4;
[H] §§2.7–2.8 and §4.13; [ACM] Chapter 2" (plan lines 1855–1861). The coverage
ledger contains no Evans (`[E]`) and no Ambrosio–Carlotto–Massaccesi (`[ACM]`)
entry, and Hunter is covered only through §2.8, not §4.13. The named results
are independently covered by the seven recorded full-text treatments (and by
the published FR-8 page), so this is a bookkeeping divergence, not a
mathematical omission; I did not read Evans §6.2–6.3 or [ACM] Chapter 2 for
this review and claim nothing about results unique to them. Proposed owner
action: record the substitution in `…-batch-13.notes.md` (or add the treatments
to the coverage ledger). Not the basis of the decision.

### F2 — minor uncertainty: the boundary-Hölder norm notation `C^{k,α}(\barΩ)` is used by consumers but not introduced by `def-holder-spaces-c-k-alpha-and-their-scaled-norms`.

`thm-boundary-schauder-estimate-for-the-dirichlet-problem`,
`thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian`,
`thm-global-schauder-estimate-and-classical-dirichlet-solvability`,
`cor-injectivity-removes-the-lp-kernel-term-from-a-global-w-two-p-estimate`,
`cor-w-two-p-regularity-implies-classical-or-holder-regularity-when-p-is-large`
and `rem-schauder-and-sobolev-estimates-are-different-scales` state norms
`\|\cdot\|_{C^{2,α}(\barΩ)}`, `\|\cdot\|_{C^{0,α}(\barΩ)}` and spaces
`u∈C^{2,α}(\barΩ)`, `g∈C^{2,α}(\barΩ)`;
`ex-method-of-continuity-for-a-constant-coefficient-path` uses
`C^{2,α}([0,π])`. `def-holder-spaces-c-k-alpha-and-their-scaled-norms`
defines the bounded/closure class `C^{k,α}_b(Ω)` *on the open set* and states
that no boundary seminorm is attached to the interior norms; the published
integer-order convention in
`def-bounded-c-one-domain-boundary-charts-and-outward-normal` covers only
integer `C^k(\barΩ)`. The mathematical content is not missing: for bounded `Ω`
every element of `C^{k,α}_b(Ω)` has all derivatives up to order `k` uniformly
continuous, hence a unique continuous extension to `\barΩ` with equal sup and
Hölder seminorms, and the design's own Well-definedness clause says "Hölder
norms use the unique continuous representative". What is absent is the one-line
identification/licence in the pair. Proposed owner action: have
`def-holder-spaces-c-k-alpha-and-their-scaled-norms` (or each consumer) state
that the closure class is identified with its unique continuous extension to
`\barΩ`, so `\|\cdot\|_{C^{k,α}(\barΩ)}` is that norm. Flagged as uncertainty
for Step 3b authoring, not as a confirmed gap.

### F3 — no unmet prerequisite confirmed.

See "Dependency closure and unmet prerequisites": 0 missing nodes over the
full closure, all published suppliers `status: published`, all 11 in-run edges
present with matching claims, and the three delicate hypotheses above
grounded. No dependency path reaches
`library/not-proved-here/deferred-set-theory-beyond-choice`.

## Checks run (exact results, this session)

- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-13.pages.json`
  → exit 0, "30 item(s), 0 normalized, 0 error(s)".
- `node tools/coverage-checklist.mjs --require-destination research/frontier-39-analysis-30-batch-13.coverage.json`
  → exit 0, "2 page(s), 57 harvested result(s), 0 error(s), 0 warning(s)".
- `node tools/source-fetch-check.mjs --coverage research/frontier-39-analysis-30-batch-13.coverage.json`
  → exit 0, "12/12 source(s) fetch-verified".
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30`
  → exit 0, "899 item(s) checked across 60 page(s); maximum level 22".
- `node tools/content-policy.mjs --manifest-only research/frontier-39-analysis-30-batch-*.pages.json`
  → exit 0, "899 scoped item(s), 0 error(s), 0 warning(s)".
- Independent closure walk (all 30 batch manifests, published `items/*.md`
  frontmatter deps): 0 missing nodes (numbers above).

## Decision

`sufficient` — the planned definitions, results and examples cover the PDE-19
subject as designed (Schauder interior/boundary/global theory, the continuity
method, `W^{2,p}` estimates on `R^n` and on `C^{1,1}` domains, weak-to-strong
global regularity, and the sharpness examples), all design and additions rows
are realized or recorded as subsumed, and the dependency closure has no
missing prerequisite. F1 and F2 are minor, non-blocking recommendations;
neither is a scope omission requiring enrichment or a merger. No scaffold was
edited by this review.
