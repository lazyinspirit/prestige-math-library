# Reader report — batch 125

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: Step 3a reader  
Scope: batch 125

## Opened inventory

Assigned pages:

- `tgrx-finite-code-holography` — `library/thermodynamics-and-general-relativity-mathematics/tgrx-finite-code-holography.md`.
- `tgrx-finite-code-holography-examples` — `library/thermodynamics-and-general-relativity-mathematics/tgrx-finite-code-holography-examples.md`.

Both are frontmatter-only pages, as required for this run’s fresh statement-first layout. I also opened the A-page’s six required pages: `tgrx-relative-entropy-balance` at `library/thermodynamics-and-general-relativity-mathematics/tgrx-relative-entropy-balance.md`; `registers-tensor-products-and-partial-trace` at `../library/quantum-computing/registers-tensor-products-and-partial-trace.md`; `linear-maps-rank-nullity-and-quotient-spaces` at `../library/linear-algebra/linear-maps-rank-nullity-and-quotient-spaces.md`; `matrices-and-the-matrix-of-a-linear-map` at `../library/linear-algebra/matrices-and-the-matrix-of-a-linear-map.md`; `qsm-states-ensembles` at `library/quantum-statistical-mechanics/qsm-states-ensembles.md`; and `the-logarithm-and-general-powers` at `../library/real-analysis/the-logarithm-and-general-powers.md`.

Assigned items, reviewed in dependency order:

1. `def-tgrx-sector-code`.
2. `prop-tgrx-code-area-entropy`.
3. `ex-tgrx-two-sector-area`.

Opened direct mathematical suppliers needed for those claims: the current batch-122 draft `prop-tgrx-finite-modular-balance`; published `def-qc-tensor-register-and-permutation`, `def-qc-tensor-map`, `def-linear-map`, `def-trace-of-an-endomorphism`, `lem-qsm-matrix-state-calculus`, and `thm-natural-logarithm-laws`; also `def-qc-register-and-computational-basis`, `def-real-and-complex-inner-product-space`, `def-dimension`, and `def-natural-logarithm`. For the modular-balance identity’s definitions and trace conventions, I opened `def-it-finite-dimensional-quantum-relative-entropy`, `def-it-von-neumann-entropy`, `def-qc-partial-trace`, and `thm-it-quantum-relative-entropy-partial-trace-data-processing`.

For the spectral lemma’s eigenbasis argument, I also opened the relevant statements and facts of `cor-bolzano-weierstrass-in-rn`, `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`, `lem-rat-embeds-dense`, `thm-rationals-countable`, `lem-finite-powers-of-countable-sets-are-countable`, `lem-countable-iff-surjection-from-n`, `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`, and `cor-cauchy-reals-lub-complete`.

## Review and page verdicts

The finite model definition fixes a finite nonempty sector set, nonzero finite-dimensional complex inner-product factors, an orthogonal direct sum, factorwise tensor maps, normalized positive sector weights, and fixed faithful ancillary density matrices. It makes no gravitational or geometric-area claim. The proposition proves normalization and reference faithfulness from the finite spectra, expands the entropy sum including zero eigenvalues, and derives the relative-entropy identity from the faithful-reference modular identity. The two-sector example correctly specializes the entropy formula, including the case `d=1`. I found no false claim or missing hypothesis in the three assigned items.

The cited mathematical sources support the stated finite-sector context. Harlow’s Appendix A.7.2–A.7.3, especially Eqs. (116), (126), and (127), gives the sector-probability entropy term and its average within-sector term, and the corresponding relative-entropy decomposition; its displayed ancillary factor is maximally mixed. Watrous, *The Theory of Quantum Information*, §§5.2.1–5.2.2, Propositions 5.20–5.21 and Eqs. (5.94)–(5.99), states the finite direct-sum/tensor entropy and tensor relative-entropy identities. Watrous’s author-hosted PDF identifies itself as a draft pre-publication copy and uses base-two logarithms; the local items use natural logarithms and prove their own arbitrary-faithful-ancilla identities. I inspected these cited sections, not either source in full.

- **`tgrx-finite-code-holography`: pass.** Its placement and prerequisites match the assigned finite mathematical scope; its item order puts the definition before the proposition. No page-body summary is present, as expected for this run.
- **`tgrx-finite-code-holography-examples`: pass.** It places the assigned example on the B page and requires the A page and logarithm page used by that example. No page-body summary is present, as expected for this run.

No TikZ or tikzcd diagram occurs in the assigned pages or items.

## Edit and validation

In `items/ex-tgrx-two-sector-area.md`, I replaced “central sector contribution” with “sector-probability contribution” in the example statement and its verification. The local model defines the sector-probability entropy but defines no operator algebra or center; the revised wording states the exact finite quantity without suggesting an absent algebraic structure. I updated the corresponding derivation and finite-check wording in `research/physics-non-fluid-129-2026-10-21-r2-batch-125.proof-contracts.json`. No stale `verification.judge` record was present.

The B page is the only consumer placement found for the example; no item dependency consumer uses it. Validation after the edit:

- `reflow.mts items/ex-tgrx-two-sector-area.md`: unchanged.
- `precheck.mts items/ex-tgrx-two-sector-area.md`: pass, direct strategy; 1 checked, 0 failing.
- `proof-layout.mjs items/ex-tgrx-two-sector-area.md`: 1 item, 3 steps, 0 defects.

## Uneditable findings

The published dependency `lem-qsm-matrix-state-calculus` is used directly by `prop-tgrx-code-area-entropy` for the finite-dimensional spectral decompositions. Its frontmatter marks it `published`, but `verification` has only a `judge` record; the schema requires `verification.audited` or `verification.verified` for a published proved-here item, and explicitly says a judge stamp alone is insufficient. This is an acceptance-metadata defect; it does not by itself show the spectral claim false.

In the same published dependency, Proof step 2.1 differentiates the normalized Rayleigh quotient and invokes vanishing of its derivative at a maximum without stating the derivative calculation or listing a calculus supplier. The one-variable calculation can be closed immediately by expanding the numerator and using `||u+tw||^2 = 1+t^2||w||^2` for `w ⟂ u`; I therefore classify this proof omission as nonfatal. The published source is outside batch 125 and was not edited.

I found no uneditable defect in the used current batch-122 modular-balance identity. Its separate partial-trace inequality is not used by this batch; I did not audit all of that clause’s imported proof dependencies.

## Blocker and coverage limit

No blocker prevents completion of the assigned review. Source reading covered the cited Harlow and Watrous locators only. For the published spectral lemma’s premises, I inspected the relevant statements and Facts & Assumptions, not every transitive proof in their closures. I also did not audit the unused partial-trace clause of the batch-122 supplier. No judgment, stamp, or self-certification was added.
