## Reader report — batch 30

Run: `fluid-dynamics-all-47-2026-10-23`

Role: reader (`reader-30`)

## Opened inventory

### Assigned pages

- `library/fluid-dynamics-mathematics/fd-n03.md`
- `library/fluid-dynamics-mathematics/fd-n03-examples.md`

### Assigned items

- `def-fd-compressible-numerical-contract`
- `prop-fd-euler-llf-admissibility-interface`
- `prop-fd-shared-face-global-conservation`
- `rem-fd-compressible-stability-distinctions`
- `ex-fd-compressible-constant-state`

### Dependency items opened

Direct suppliers: `def-countable-choice`, `def-ideal-gas-euler-state-and-pressure`, `def-hll-two-wave-flux`, `def-pe03-first-order-hll-finite-volume-update`, `def-pe03-entropy-stable-dissipative-flux`, `lem-pe03-hll-half-cell-riemann-averages`, `def-pe03-convex-invariant-domain`, `thm-pe03-hll-update-preserves-convex-invariant-domain`, `thm-pe03-ideal-gas-llf-branch-preserves-positivity`, `alg-pe03-convex-scaling-positivity-limiter`, and `thm-conservative-finite-volume-weak-limit`.

Targeted transitive suppliers: `def-hyperbolic-system-and-characteristic-families`, `def-pe03-tadmor-entropy-conservative-flux`, `thm-hll-flux-is-consistent-and-conservative`, `lem-pe03-euler-llf-split-state-positive`, `prop-pe03-euler-state-and-margin-domains-are-convex-and-closed`, `def-conservative-finite-volume-scheme`, `def-finite-volume-space-time-reconstruction`, `lem-finite-volume-discrete-summation-by-parts`, `lem-conservative-fv-face-fluxes-converge-in-l1loc`, `def-locally-bounded-distributional-weak-solution`, `def-scalar-conservation-law-and-flux`, `def-distributional-weak-solution-of-a-scalar-conservation-law`, `def-pe03-system-entropy-pair-and-potential`, and `def-pe03-euler-positive-margin-domain`.

Required pinned pages opened: `conservative-finite-volume-weak-limits`, `invariant-domain-and-entropy-stable-conservative-schemes`, `countability-and-uncountability`, and `riemann-solvers-for-hyperbolic-systems`. I read the batch-30 authoring notes and proof-contract file as review evidence, not as verdicts. Raw SHA-256 comparison against `research/math-imports.json` matched all 25 dependency item snapshots and all four pages.

## Review and page verdicts

- **`fd-n03` — pass.** The A page is frontmatter-only, retains the four declared prerequisite pages, and lists the four assigned items. The inspected sources support the declared roles: the scalar weak-limit theorem is not an Euler-system result, and the symmetric Euler positivity theorem retains its explicit endpoint-speed and CFL hypotheses.
- **`fd-n03-examples` — pass.** The B page is frontmatter-only, requires `fd-n03`, and lists the assigned constant-state example.

The five assigned items have no confirmed mathematical proof gap. The Euler LLF specialization matches its supplier’s symmetric branch, endpoint bound, and local CFL convention; the periodic conservation proposition is a componentwise finite telescoping identity; the remark preserves the scalar-only and conditional scope of the weak-limit supplier; and the constant-state example follows directly from consistency. The Definition and all proof-bearing Statements/Example descriptions keep links after their complete sections. The two assigned TikZ diagrams have correct face-flux orientation and wave-speed signs.

## Repair

In `items/rem-fd-compressible-stability-distinctions.md`, I clarified the diagram explanation: the horizontal axis has `x=0` at the face, while the vertical arrow at the left is an offset marker for increasing time. The original drawing placed that arrow at `x=-1.3` but marked `0` at the fan origin `x=0`; the clarification removes the coordinate-origin ambiguity and states that wave-line slopes represent `dx/dt`. No formula, hypothesis, conclusion, or proof changed. The remark has no proof derivations/citations to revise and no `verification.judge` record.

Validation after the edit:

- `reflow.mts items/rem-fd-compressible-stability-distinctions.md`: unchanged.
- `precheck.mts items/rem-fd-compressible-stability-distinctions.md`: 0 checked, 0 failing (the remark has no proof steps).
- `proof-layout.mjs items/rem-fd-compressible-stability-distinctions.md`: 1 item, 0 steps, 0 defects.

## Uneditable findings

The following findings concern published imported mathematical suppliers, which are outside this batch’s write scope. The full evidence and routing consumer IDs are in `research/fluid-dynamics-all-47-2026-10-23-reader-findings-30.json`. The finding objects group same-section hyperlink violations by supplier; each link is inside the supplier’s complete Definition or Statement before its references section. They are editorially nonfatal and do not invalidate the mathematical uses recorded above.

| Published supplier | Assigned consumer | Exact location and evidence |
|---|---|---|
| `def-hyperbolic-system-and-characteristic-families` | `def-fd-compressible-numerical-contract` | Definition, opening sentence: The opening Definition sentence places [[def-c-one-map-and-local-inverse]] and [[def-ck-euclidean-maps-and-diffeomorphisms]] inside the complete Definition instead of after it in a Definition references section. |
| `def-hll-two-wave-flux` | `def-fd-compressible-numerical-contract` | Definition, opening sentence: The first sentence embeds [[def-hyperbolic-system-and-characteristic-families]] inside the Definition; the link interrupts the complete definition. |
| `def-pe03-first-order-hll-finite-volume-update` | `def-fd-compressible-numerical-contract` | Definition, opening paragraphs: The Definition embeds [[def-hyperbolic-system-and-characteristic-families]] and [[def-hll-two-wave-flux]] before the Definition is complete, rather than placing both links after the section. |
| `def-pe03-entropy-stable-dissipative-flux` | `def-fd-compressible-numerical-contract` | Definition, opening sentence: The opening Definition sentence embeds [[def-pe03-tadmor-entropy-conservative-flux]] before the complete Definition ends. |
| `def-pe03-system-entropy-pair-and-potential` | `def-fd-compressible-numerical-contract` | Definition, opening sentence: The opening Definition sentence embeds [[def-hyperbolic-system-and-characteristic-families]] inside the complete Definition. |
| `def-pe03-tadmor-entropy-conservative-flux` | `def-fd-compressible-numerical-contract` | Definition, opening sentence: The Definition embeds [[def-pe03-system-entropy-pair-and-potential]] before the complete Definition ends. |
| `def-pe03-euler-positive-margin-domain` | `prop-fd-euler-llf-admissibility-interface` | Definition, opening sentence: The Definition embeds [[def-ideal-gas-euler-state-and-pressure]] inside its opening sentence instead of moving the link after the complete Definition. |
| `prop-pe03-euler-state-and-margin-domains-are-convex-and-closed` | `prop-fd-euler-llf-admissibility-interface` | Statement, first sentence: The Statement inserts [[def-pe03-euler-positive-margin-domain]] between the set name and its defining property; the hyperlink interrupts the complete Statement. |
| `thm-hll-flux-is-consistent-and-conservative` | `rem-fd-compressible-stability-distinctions` | Statement, sentence identifying the middle HLL formula: The Statement embeds [[def-hll-two-wave-flux]] before its claim and qualifications are complete; the link belongs after the complete Statement. |
| `thm-hll-flux-is-consistent-and-conservative` | `rem-fd-compressible-stability-distinctions` | Statement, finite-volume update clause following the displayed update: The sentence “Here n≥1” introduces n after the update, but the Statement never defines n as the number of cells or gives an index set for j. The finite periodic-array claim needs the array length and periodic indexing stated, or this dangling clause removed. |
| `lem-pe03-hll-half-cell-riemann-averages` | `rem-fd-compressible-stability-distinctions` | Statement, opening sentence: The opening Statement embeds [[def-pe03-first-order-hll-finite-volume-update]] before the claim about the half-cell averages is complete. |
| `thm-pe03-hll-update-preserves-convex-invariant-domain` | `rem-fd-compressible-stability-distinctions` | Statement, first paragraph: The Statement embeds [[def-pe03-first-order-hll-finite-volume-update]] and [[lem-pe03-hll-half-cell-riemann-averages]] within the hypotheses and conclusion instead of moving both links after the complete Statement. |
| `thm-pe03-ideal-gas-llf-branch-preserves-positivity` | `prop-fd-euler-llf-admissibility-interface` | Statement, first paragraph: The first Statement paragraph embeds [[def-pe03-first-order-hll-finite-volume-update]] before the positivity claim and its branch qualifications are complete. |
| `alg-pe03-convex-scaling-positivity-limiter` | `rem-fd-compressible-stability-distinctions` | Definition, opening parenthetical: The Definition embeds [[def-pe03-convex-invariant-domain]] inside the parenthetical defining convexity instead of moving the link after the complete Definition. |
| `thm-conservative-finite-volume-weak-limit` | `rem-fd-compressible-stability-distinctions` | Statement, theorem setup and conclusion: The Statement embeds [[def-conservative-finite-volume-scheme]], [[def-finite-volume-space-time-reconstruction]], [[def-locally-bounded-distributional-weak-solution]], and [[def-distributional-weak-solution-of-a-scalar-conservation-law]] before the complete theorem statement ends. |
| `def-scalar-conservation-law-and-flux` | `rem-fd-compressible-stability-distinctions` | Definition, conservation-form, Cauchy-problem, and chain-rule paragraphs: The Definition embeds [[def-locally-integrable-function-on-r-n]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[thm-chain-rule]], [[def-ck-and-multi-index-notation-in-several-variables]], [[def-total-derivative-in-euclidean-space]], [[def-directional-and-partial-derivatives]], and [[def-divergence-and-curl-of-a-c1-vector-field]] within the complete Definition. |
| `def-conservative-finite-volume-scheme` | `rem-fd-compressible-stability-distinctions` | Definition, opening sentence: The Definition embeds [[def-scalar-conservation-law-and-flux]] in its opening sentence before the finite-volume scheme definition is complete. |
| `def-finite-volume-space-time-reconstruction` | `rem-fd-compressible-stability-distinctions` | Definition, opening sentence: The Definition embeds [[def-conservative-finite-volume-scheme]] before the reconstruction is fully defined. |
| `lem-finite-volume-discrete-summation-by-parts` | `rem-fd-compressible-stability-distinctions` | Statement, opening sentence: The Statement embeds [[def-conservative-finite-volume-scheme]] and [[def-finite-volume-space-time-reconstruction]] before the discrete identity and its hypotheses are completely stated. |
| `lem-conservative-fv-face-fluxes-converge-in-l1loc` | `rem-fd-compressible-stability-distinctions` | Statement, first paragraph: The Statement embeds [[def-finite-volume-space-time-reconstruction]] and [[def-conservative-finite-volume-scheme]] inside its hypotheses before the convergence conclusion is complete. |
| `def-distributional-weak-solution-of-a-scalar-conservation-law` | `rem-fd-compressible-stability-distinctions` | Definition, equivalence and integrability paragraph: The Definition embeds [[def-distribution]], [[def-distributional-derivative]], [[def-test-function-space-d-of-an-open-set]], [[def-locally-integrable-function-on-r-n]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[def-scalar-conservation-law-and-flux]], and [[def-kruzhkov-entropy-solution]] before the complete Definition ends. |
| `def-locally-bounded-distributional-weak-solution` | `rem-fd-compressible-stability-distinctions` | Definition, final sentence: The Definition embeds [[def-distributional-weak-solution-of-a-scalar-conservation-law]] in its final sentence before the complete Definition section ends. |

## Blockers and limitations

No blocker prevents the in-scope mathematical review or the diagram clarification. I did not independently re-audit every proof in the full deeper analysis dependency closure or retrieve the cited external PDFs; the run notes’ source-retrieval records were not treated as proof that I had personally read those sources. The pinned supplier bytes were checked locally as recorded above.
