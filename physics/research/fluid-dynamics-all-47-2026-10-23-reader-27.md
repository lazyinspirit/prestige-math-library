# Step 3a reader report — batch 27

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: reader (`reader-27`)  
Scope: batch `27`

## Opened inventory

- Batch manifest: `research/fluid-dynamics-all-47-2026-10-23-batch-27.pages.json`.
- Proof contracts: `research/fluid-dynamics-all-47-2026-10-23-batch-27.proof-contracts.json`.
- Relevant entries in `research/math-imports.json` for the imported published mathematical suppliers used below.
- Assigned pages: `library/fluid-dynamics-mathematics/fd-n01.md` and `library/fluid-dynamics-mathematics/fd-n01-examples.md`.
- Assigned items, read after their suppliers: `def-fd-bounded-stokes-observation-interface`, `thm-fd-stokes-load-observable-stability`, `prop-fd-pressure-gauge-observables`, and `ex-fd-stokes-gradient-forcing-gauge`.
- Mathematical supplier items opened for the assigned claims: `def-na-stokes-zero-mean-pressure-and-velocity-spaces`, `cor-cauchy-schwarz-inequality-for-l-two`, `lem-na-zero-mean-of-zero-boundary-divergence`, `lem-na-lipschitz-domain-finite-star-shaped-cover`, `lem-na-finite-cover-zero-mean-data-decomposition`, `thm-na-star-shaped-bogovskii-bounded-right-inverse`, `thm-na-bounded-lipschitz-domain-divergence-right-inverse`, `thm-na-continuous-stokes-divergence-infsup`, `thm-na-babuska-brezzi-kernel-coercivity`, and `thm-na-weak-stokes-solvability-lipschitz-domain`.
- Required mathematical pages: `../library/numerical-pdes-and-spatial-discretization/mixed-finite-elements-and-stokes-stability.md` and `../library/measure-theory/the-lp-spaces-holder-minkowski-and-riesz-fischer.md`.
- Checked the cited Guermond Chapter 53 PDF locations for pressure normalization, the weak formulation, divergence lifting, and well-posedness; checked Boffi–Brezzi–Fortin Example 4.2.2 and §8.2.1 in the cited PDF.

## Review and edits

The sensor definition specifies its real domain, linearity, boundedness, norm, and reading. The stability theorem applies the weak Stokes estimate to the load difference; linearity follows from bilinearity of the weak equations and uniqueness, and the finite-sensor Euclidean bound follows by squaring and summing the operator-norm inequalities. The gauge proposition correctly uses the zero-mean divergence of an $H^1_0$ velocity and the integral formula for the change in an unnormalized sensor under $p\mapsto p+c$. In the example, the coordinate potential is square-integrable, the load is bounded on the gradient-norm velocity space, integration by parts extends by the $H^1_0$ closure, and direct substitution plus uniqueness gives the stated pressure. Its sensor reading is the strictly positive variance of the first coordinate on a nonempty open set. I found no mathematical defect in the four assigned items. No TikZ/tikzcd diagrams occur in the assigned scope.

I corrected the Boffi–Brezzi–Fortin page locator for Example 4.2.2 in:

- `items/thm-fd-stokes-load-observable-stability.md`
- `items/ex-fd-stokes-gradient-forcing-gauge.md`

The source labels Example 4.2.2 on printed page 233 and continues it on page 234; the previous locators gave pp. 225–229 and 462–463 but omitted pp. 233–234. The revised locators retain the existing section references and add pp. 233–234. No Statement, Definition, proof, dependency, or proof-contract derivation changed. Therefore no consumer review or contract change was needed, and there was no stale `verification.judge` record to remove. The required final layout check passed: `proof-layout` checked both changed items, 7 steps, with 0 defects. The findings JSON parsed and its batch, finding fields, defect classes, and severities passed a schema-shape check. No reflow/precheck was needed because only source locator metadata changed.

## Uneditable findings

1. `mixed-finite-elements-and-stokes-stability` is marked `status: published` in the root mathematics page frontmatter, but the page's `## Draft status` paragraph says its items and pages are new drafts that have not been independently audited or accepted. The assigned consumer `thm-fd-stokes-load-observable-stability` directly depends on two items listed on that page (`def-na-stokes-zero-mean-pressure-and-velocity-spaces` and `thm-na-weak-stokes-solvability-lipschitz-domain`). This is a publication-status contradiction in a read-only published dependency.
2. `def-na-stokes-zero-mean-pressure-and-velocity-spaces`: its complete `## Definition` embeds wikilinks to `def-wkp-zero-as-a-sobolev-closure`, `def-sobolev-space-wkp-and-its-norm`, and `thm-holder-inequality-for-integrals`; no immediate `## Definition references` section follows.
3. `lem-na-finite-cover-zero-mean-data-decomposition`: its `## Statement` embeds a wikilink to `lem-na-lipschitz-domain-finite-star-shaped-cover`; no immediate `## Statement references` section follows.
4. `thm-na-star-shaped-bogovskii-bounded-right-inverse`: its `## Statement` embeds a wikilink to `def-na-star-shaped-bogovskii-integral`; no immediate `## Statement references` section follows.
5. `thm-na-bounded-lipschitz-domain-divergence-right-inverse`: its `## Statement` embeds wikilinks to `lem-na-lipschitz-domain-finite-star-shaped-cover` and `lem-na-finite-cover-zero-mean-data-decomposition`; no immediate `## Statement references` section follows.
6. `thm-na-continuous-stokes-divergence-infsup`: its `## Statement` embeds a wikilink to `def-na-stokes-zero-mean-pressure-and-velocity-spaces`; no immediate `## Statement references` section follows.

These published-page/item findings are outside batch 27's write scope. The corresponding routed findings are recorded in `research/fluid-dynamics-all-47-2026-10-23-reader-findings-27.json`.

## Page verdicts

- `fd-n01`: the assigned A page has the required compact frontmatter-only layout, matches its manifest inventory, and has no local page defect. Its declared published prerequisite `mixed-finite-elements-and-stokes-stability` has the publication-status contradiction above.
- `fd-n01-examples`: the assigned B page has the required compact frontmatter-only layout, matches its manifest inventory, and has no local page defect. Its dependency on `fd-n01` and the published $L^p$ page resolves; the mixed Stokes page issue is inherited through `fd-n01`.

## Blocker and coverage note

There was no blocker to checking the assigned mathematics. The report covers the assigned pages and items, their proof-contract evidence, the supplier statements used in the arguments, the declared mathematical prerequisite pages, and the cited source locations. Published suppliers were used as mathematical prerequisites; this review was not a complete independent re-audit of every transitive proof inside their dependency trees. The five statement/definition hyperlink findings concern the required statement layout; their mathematical claims were not found defective by this review.
