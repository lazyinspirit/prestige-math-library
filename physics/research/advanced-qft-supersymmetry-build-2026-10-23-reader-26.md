# Step 3a Reader Report — Batch 26

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: reader (`reader-26`)  
Scope: batch `26`

## Opened inventory

Batch manifest: `research/advanced-qft-supersymmetry-build-2026-10-23-batch-26.pages.json`.

Assigned pages:

- `library/advanced-qft-and-supersymmetry/aqft-eft-matching-running.md`
- `library/advanced-qft-and-supersymmetry/aqft-eft-matching-running-examples.md`

Assigned items, read in prerequisite order:

- `items/def-aqft-threshold-matching-map.md`
- `items/pthm-aqft-matching-and-running-scale-independence.md`
- `items/ex-aqft-qed-threshold-matching.md`

Prerequisite pages opened: `library/advanced-qft-and-supersymmetry/aqft-eft-operators.md`, `library/advanced-qft-and-supersymmetry/aqft-eft-foundations.md`, and `library/quantum-field-theory-mathematics/qftx-eft-rg-data.md`.

Relevant dependency items opened: `items/def-aqft-model-and-scale-data.md`, `items/def-aqft-operator-basis-physical-data.md`, `items/def-aqft-scheme-and-wilson-coefficients.md`, `items/def-aqft-local-operator-and-dimension.md`, `items/def-aqft-operator-basis-quotient.md`, `items/lem-aqft-finite-order-local-operator-space-finite-dimensional.md`, `items/def-qftx-nonabelian-gauge-data.md`, `items/def-qftx-principal-connection-form.md`, `items/lem-qftx-principal-curvature-cartan-bianchi.md`, `items/def-qftx-associated-covariant-derivative.md`, and `items/thm-aqft-truncated-coupled-rge-wellposedness.md`. The published mathematical inputs were read from the read-only parent workspace: `../items/def-first-order-ode-initial-value-problem-and-solution.md`, `../items/def-locally-lipschitz-in-the-state-variable.md`, `../items/prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation.md`, and `../items/thm-picard-lindelof-local-existence-and-uniqueness.md`.

After the matching definition repair, its downstream consumer closure was checked for compatibility: `items/def-aqft-susy-wilsonian-action.md`, `items/pthm-aqft-supersymmetric-threshold-matching.md`, `items/pthm-aqft-wilsonian-superpotential-nonrenormalization.md`, and `items/ex-aqft-soft-breaking-effective-operator.md` (batch 45; no edits made).

Run evidence consulted: `research/advanced-qft-supersymmetry-build-2026-10-23-batch-26.proof-contracts.json`, `research/advanced-qft-supersymmetry-build-2026-10-23-batch-26.cross-batch-dependencies.json`, and `research/advanced-qft-supersymmetry-build-2026-10-23-batch-26.coverage.json`. These were treated as evidence, not as review verdicts.

## Item review and verdicts

### `def-aqft-threshold-matching-map` — pass after repair

The scale and coefficient domains, supplied realified flows, differentiable matching family, and RG-compatibility identity are stated explicitly. The original amplitude/Green-function input paragraph named values but did not type their maps, domains, common comparison target, regulator labels, or truncation projection. I repaired the Definition to make those supplied data explicit: each selected component has a map on a stated domain into a common complex vector space, a common infrared-regulator label, a supplied linear projection onto a finite-dimensional retained subspace, and an explicit statement that the renormalization prescription and map are inputs whose existence is not asserted. The matching equality is now typed. This adds no calculation or generic existence claim.

The four downstream consumers in the opened batch-45 closure use only the supplied matching record and its conditional equality. None relies on a stronger amplitude-existence or discarded-order claim, so no consumer prose repair was needed.

### `pthm-aqft-matching-and-running-scale-independence` — pass

For each matching scale, the chain rule and RG-compatibility identity show that the matched high-energy path solves the low-energy RG equation. The stated common-interval existence assumptions and the ODE supplier’s uniqueness clause identify it with the trajectory initialized at that matching scale. The matching equality then gives the same selected output at the final scale. The finite-threshold extension is a finite repetition of that argument under its stated flow and compatibility assumptions. I found no missing hypothesis or unjustified proof step. The proof is complete and its numbered-step formatting is valid.

### `ex-aqft-qed-threshold-matching` — pass after citation repair

The source-reported input is the one-loop decoupling-subtraction beta equation and its boundary conditions; the item’s reciprocal-coupling integration and endpoint checks follow from them. The positivity conditions exclude a zero denominator on the stated scale interval. No measured mass or coupling is asserted, and the example correctly labels the flow as perturbative input rather than observation.

The complete relevant passage in Burgess’s §4.1.4 was checked. Printed equation (85) gives the two-active-field and one-active-field beta coefficients, continuity at (M_\mu), and the boundary value at (m_e). Its printed equation (86) first branch uses (M_\mu^2) in the logarithm denominator; that conflicts with both the equation (85) flow and (\alpha_{\mathrm{DS}}(m_e)=\alpha_{\mathrm{phys}}). Integrating equation (85) from the stated boundary gives the item’s (\log(Q^2/m_e^2)) branch. I narrowed the citation locator to the input actually used and stated the apparent source typo in F3. Burgess’s external text was not changed.

## Edits and evidence

- `items/def-aqft-threshold-matching-map.md`: defined the types and domains of the supplied selected-amplitude/Green-function maps, common output spaces, regulator labels, retained-order projections, and the conditional nature of those inputs. Evidence: the prior comparison equality evaluated (A_{\sigma,j}) and applied truncations without specifying their target, domains, or projection. The revised data make both sides of the equality well-typed without asserting that such data exist generally.
- `items/ex-aqft-qed-threshold-matching.md`: narrowed the Burgess source locator to equation (85) and its boundary conditions, and disclosed the apparent equation (86) first-branch typo. Evidence: Burgess, *Introduction to Effective Field Theory*, §4.1.4, equations (85)–(86), [full review PDF](https://arxiv.org/pdf/hep-th/0701053). The proof integrates (85) locally; it does not copy the inconsistent printed lower-branch formula.
- `research/advanced-qft-supersymmetry-build-2026-10-23-batch-26.proof-contracts.json`: refreshed the batch-26 threshold-definition excerpts used by the theorem and example, recorded the definition typing repair in its risk note, corrected the example’s matching-definition excerpt, and recorded the source-typo qualification.

The theorem’s ODE argument was checked against the exact published supplier statements and proofs. Teschl, *Ordinary Differential Equations and Dynamical Systems*, Chapter 2, §2.2, Theorem 2.2, supplies local existence/uniqueness; the batch’s quantitative contract and the theorem’s own proof establish the uniform dependence estimate. The published IVP–Volterra supplier supplies the oriented integral identity used in that proof.

Manohar, *Introduction to Effective Field Theories*, Chapter 5, §§5.5–5.7, was consulted for the selected matching/RG context; Chapter 7, §§7.1–7.2, for the cited one-loop QED decoupling context: [lecture notes](https://arxiv.org/pdf/1804.05863). These sources are contextual inputs; the scale-independence theorem is proved locally from the stated compatibility and ODE hypotheses.

## Page verdicts

- `aqft-eft-matching-running` — pass. Its A-page inventory and prerequisites agree with the assigned definition and physics theorem. The page body is empty and `page_layout: compact-v1` is preserved.
- `aqft-eft-matching-running-examples` — pass. Its B-page inventory places the assigned QED example as an example and retains the correct A-page and RG-data prerequisites. The page body is empty and `page_layout: compact-v1` is preserved.

No TikZ/tikzcd diagrams were present, and none was needed for these expositions.

## Non-editable workflow note

The batch-45 proof contract at `research/advanced-qft-supersymmetry-build-2026-10-23-batch-45.proof-contracts.json` still contains its pre-edit F4 excerpt for `pthm-aqft-supersymmetric-threshold-matching`. The current consumer item was reviewed and is compatible with the clarified data interface, but that excerpt is now stale. Batch 45 is outside this reader’s write scope; its owner/reader should refresh that contract in its own review. This does not block the batch-26 review.

No content defect remained unedited within the assigned item/page scope. The batch-45 excerpt freshness note above is the only outside-scope workflow follow-up. No verification stamp was added.

## Validation

- Reflow: `items/def-aqft-threshold-matching-map.md` unchanged; `items/ex-aqft-qed-threshold-matching.md` unchanged.
- Precheck: threshold definition reported `0 checked, 0 failing` (it has no proof steps); the QED example passed direct precheck, `1 checked, 0 failing`.
- Final proof-layout command covered both changed items: `proof-layout: 2 items, 4 steps, 0 defects`.

## Blocker

None for batch 26. The batch-45 contract refresh is outside this reader’s scope and is recorded above.
