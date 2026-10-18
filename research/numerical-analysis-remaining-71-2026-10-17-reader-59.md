# Reader report — batch 59

Run: numerical-analysis-remaining-71-2026-10-17  
Role: Step 3a reader  
Result: reviewed the full assigned batch; repaired two confirmed defects; no uneditable findings or blockers.

## Opened inventory

Assigned pages:

- library/numerical-pdes-and-spatial-discretization/compressible-viscous-flow-and-entropy-stable-fluxes.md (A)
- library/numerical-pdes-and-spatial-discretization/compressible-viscous-flow-and-entropy-stable-fluxes-examples.md (B)

Page prerequisites opened for their metadata and summaries:

- library/numerical-pdes-and-spatial-discretization/variational-crimes-and-strang-lemmas.md
- library/numerical-pdes-and-spatial-discretization/hyperbolic-dg-and-summation-by-parts-discretizations.md
- library/numerical-pdes-and-spatial-discretization/finite-volume-diffusion-and-mimetic-fluxes.md

Direct item dependency outside batch 59:

- items/def-fv-admissible-cell-face-mesh.md

Assigned items, reviewed in dependency order:

1. def-compressible-navier-stokes-fourier-model
2. lem-compressible-admissible-state-set-open-convex
3. lem-compressible-ideal-gas-entropy-pair-and-variables
4. def-ideal-gas-entropy-conservative-pair-flux
5. lem-compressible-viscous-flux-entropy-variable-factorization
6. lem-ideal-gas-entropy-conservative-flux-properties
7. lem-compressible-viscous-smooth-entropy-identity
8. def-periodic-sbp-compressible-viscous-scheme
9. def-orthogonal-fv-compressible-viscous-scheme
10. thm-periodic-sbp-compressible-viscous-conservation-and-entropy
11. lem-orthogonal-fv-compressible-viscous-flux-consistency
12. thm-orthogonal-fv-compressible-viscous-entropy-dissipation
13. alg-positive-tube-forward-euler-for-compressible-sbp
14. lem-positive-tube-forward-euler-loop-terminates
15. thm-fixed-mesh-forward-euler-error-for-compressible-sbp
16. ex-compressible-entropy-variable-blowup-near-vacuum
17. ex-periodic-compressible-viscous-manufactured-state
18. ex-compressible-couette-thermal-wall-entropy-balance
19. ex-sbp-inviscid-versus-viscous-entropy-budget

The assigned batch manifest and its proof contract were also opened. The run status reported no active dispatch at review time.

## Repairs

### Entropy-pair proof

In items/lem-compressible-ideal-gas-entropy-pair-and-variables.md, the original proof step 2.2 inferred the differential compatibility identity from smooth Euler entropy transport by asserting that spatial derivatives could be prescribed independently because the state set is open. Openness alone does not establish which state gradients occur in smooth Euler solution jets, and no local-existence result was among the hypotheses or dependencies.

I removed that unsupported inference and the now-redundant entropy-transport calculation. New step 3.1 differentiates the Euler flux in an arbitrary conservative-state variation and computes directly that

    v^T dF_j = u_j v^T dU + eta du_j = dq_j.

The cancellation uses v_m = beta u, v_E = -beta, beta epsilon = c_v rho, and p = (gamma - 1) epsilon. This proves the compatibility identity for every variation without an Euler solution-existence premise. The entropy-potential calculation is now step 4.1.

I updated the matching derivations, fact-use step references, and step identifiers in research/numerical-analysis-remaining-71-2026-10-17-batch-59.proof-contracts.json. No verification.judge record was present on this item.

### Misattributed source

Twelve assigned items cited the URL https://arxiv.org/pdf/1808.05066 under the authors Jesse Chan, Yimin Lin, and Tim Warburton. The PDF's first page identifies that title as authored by P. Fernandez, N. C. Nguyen, and J. Peraire. I corrected the author fields, preserving the title, URL, and locators, in:

- def-compressible-navier-stokes-fourier-model
- lem-compressible-admissible-state-set-open-convex
- lem-compressible-ideal-gas-entropy-pair-and-variables
- lem-compressible-viscous-flux-entropy-variable-factorization
- lem-compressible-viscous-smooth-entropy-identity
- def-periodic-sbp-compressible-viscous-scheme
- def-orthogonal-fv-compressible-viscous-scheme
- thm-periodic-sbp-compressible-viscous-conservation-and-entropy
- alg-positive-tube-forward-euler-for-compressible-sbp
- ex-periodic-compressible-viscous-manufactured-state
- ex-compressible-couette-thermal-wall-entropy-balance
- ex-sbp-inviscid-versus-viscous-entropy-budget

Evidence: the cited PDF first page gives the title and author line; Sections 2.1–2.3 (equations 1–12), 3.3 (equations 18–19), and 4.5 (equations 39–43) cover the cited model, entropy-variable viscous flux, and entropy-balance context. Other source records were checked against their cited targets: Ismail–Roe, Affordable, entropy-consistent Euler flux functions II, PDF pp. 8–10 and Appendix A; Tadmor, Entropy Stable Schemes, Chapter 18, Sections 1.1–1.2 and 4.6; Eymard–Gallouët–Herbin, Finite Volume Methods, updated January 2019 text; and Droniou, Finite volume schemes for diffusion equations, arXiv:1407.1567, Sections 1.1 and 2.1.

## Validation

- Reflow: all 12 changed items reported unchanged.
- Precheck: all 12 changed items passed. The revised entropy-pair lemma passed after the canonical phase renumbering.
- node tools/proof-layout.mjs on all 12 changed item paths: 12 items, 27 steps, 0 defects.

## Page verdicts and remaining defects

- A page compressible-viscous-flow-and-entropy-stable-fluxes: pass. The definitions, entropy identities, SBP and finite-volume claims, guarded time-stepping algorithm, fixed-grid conditional error statement, and page summary agree with the reviewed arguments and their hypotheses.
- B page compressible-viscous-flow-and-entropy-stable-fluxes-examples: pass. The admissible sequence, manufactured periodic state, Couette wall balance, and three-node SBP entropy computation check out.

No confirmed defect remains outside edit scope. No blocker.

## Coverage note

All 19 assigned items, both assigned pages, the direct external item supplier, and the three page-level prerequisite summaries were opened. The prerequisite pages were inspected at page-summary/metadata level; their unrelated item contents were outside this batch. External sources were checked at the cited sections and locators rather than read cover to cover. No mathematical conclusion here relies on a citation in place of a local proof.
