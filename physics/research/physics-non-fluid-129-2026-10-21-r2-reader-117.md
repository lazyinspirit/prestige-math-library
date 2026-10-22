# Step 3a reader report — batch 117

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Scope: batch `117` only

## Inventory opened

Assigned pages:

- `tgrx-noether-entropy` — [library/thermodynamics-and-general-relativity/tgrx-noether-entropy.md](../library/thermodynamics-and-general-relativity/tgrx-noether-entropy.md). Its inventory lists the four A-page items below; the body is frontmatter-only.
- `tgrx-noether-entropy-examples` — [library/thermodynamics-and-general-relativity/tgrx-noether-entropy-examples.md](../library/thermodynamics-and-general-relativity/tgrx-noether-entropy-examples.md). Its inventory lists the B-page example below; the body is frontmatter-only.

Items were read in dependency order:

1. `def-tgrx-noether-horizon-data`.
2. `pthm-tgrx-noether-charge-decomposition`.
3. `pthm-tgrx-noether-horizon-entropy-variation`.
4. `pthm-tgrx-noether-first-law`.
5. `ex-tgrx-fr-stationary-entropy`.

The direct mathematical suppliers opened were `def-lie-derivative-of-a-tensor-field`, `def-lie-derivative-of-a-differential-form`, `thm-cartans-magic-formula`, and `thm-stokes-theorem-for-smooth-singular-chains`. Their definitions/theorem statements and supplied arguments were checked against the uses in batch 117. The batch-117 proof contracts, notes, source-reading record, cross-batch dependency row, current plan design section, and current batch manifest were consulted as navigation/evidence, not treated as verdicts.

Page-level context opened: `gr-fx12-covariant-phase-space`, `tgr-phs01`, and `tgr-phs03`. The Noether derivations do not use an item from those pages as a proof premise; the local items state their own hypotheses and proofs. The batch-40 page remains a draft page-level prerequisite, while `tgr-phs01` and `tgr-phs03` are published context. The separate in-run consumer `post-tgrx-semiclassical-ads-dictionary` and its downstream consumers `pthm-tgrx-two-saddle-transition` and `rem-tgrx-island-assumptions` were inspected because the repaired Definition is in their dependency closure. Their use remains qualified by the stationary Noether hypotheses; no repair was needed outside batch 117.

## Mathematical and source review

The Definition supplies the metric, field variations, covariant first-variation data, stationary generator, bifurcation surface, binormal convention, Noether current and residual constraint, chain boundaries, units, and explicit integrability requirement. The two Noether theorems are conditional model deductions; neither identifies the Noether-charge functional with thermodynamic entropy. The first-law proof differentiates at fixed generator, uses the explicit `delta C_xi = 0` condition, applies Stokes with the stated chain orientation, and obtains the Hamiltonian variation from the stipulated integrable boundary one-form. The Einstein–Hilbert coefficient and the `f(R)` coefficient follow from the stated curvature convention, Riemann-slot derivative, and normalized binormal contraction. The example makes no dynamical monotonicity claim.

I independently inspected the relevant authoritative source passages:

- Iyer and Wald, [*Some Properties of Noether Charge and a Proposal for Dynamical Black Hole Entropy*](https://arxiv.org/pdf/gr-qc/9403028): §3, Lemma 3.1 and equations (23)–(39) for the covariant first-variation potential; §4, Proposition 4.1 and equations (52)–(60) for the Noether-charge decomposition and its ambiguities; §6, equations (75)–(77) and (93)–(102) for the stationary boundary identity and bifurcation-surface variation. These passages support the local `X=-P epsilon` coefficient and the fixed-generator horizon calculation. They do not remove the items' explicit global-compatibility or boundary-integrability assumptions.
- Compère and Fiorucci, [*Advanced Lectures on General Relativity*](https://arxiv.org/pdf/1801.07064): Lecture 1, §1.3.3 (covariant phase-space surface-charge identity) and §1.4.2 (integrability of the charge one-form). Their sign conventions were not substituted for the conventions stated locally.
- Harlow and Wu, [*Covariant phase space with boundaries*](https://arxiv.org/pdf/1906.08616): §§2.2–2.4 and §4.4. These passages support the need to state boundary terms and charge assumptions explicitly; they also discuss boundary contributions beyond the simplest Noether-charge expression.

No empirical observation is asserted or used. No TikZ/tikzcd diagram occurs in either assigned page or any assigned item.

## Repairs made

- In `def-tgrx-noether-horizon-data`, defined a spacelike submanifold by positive-definiteness of its induced metric and a null hypersurface by the one-dimensional kernel of its induced metric. The bifurcate horizon now states embeddedness, local-flow invariance, transverse intersection, and that the nonzero generator spans the null line distribution. This makes explicit the geometric conditions used by the binormal and boost-weight argument.
- In the same Definition, specified the solution space as a smooth manifold of admitted solution fields and specified that perturbations used with the constraint variation and Hamiltonian differential are tangent variations. This makes `d_S H_xi` well-defined on the stated admitted perturbation class.
- In the three theorem items, moved supplier wikilinks out of the Statements into immediate `## Statement references` sections, keeping their prose and mathematical claims unchanged.
- Updated the four batch-117 proof-contract quotations that cite the Noether-data Definition so each matches its current text. No stale `verification.judge` record was present on the changed items.

Evidence for these repairs is the current Definition and the consumers' exact use of `B`, the null-normal decomposition, the admitted perturbations, and `d_S H_xi`; the consumer review found no downstream mismatch. The direct source passages listed above corroborate the horizon and charge conventions.

## Validation

- Reflow ran for all four changed items. The charge-decomposition item was reflowed; the Definition, entropy-variation theorem, and first-law theorem were unchanged by reflow.
- Precheck succeeded on all four paths. The Definition has no proof steps (`0 checked, 0 failing`); each of the three proof-bearing items passed.
- Final proof-layout run on all four changed paths: 4 items, 11 numbered steps, 0 defects.
- The updated contract quotations match the current Definition text (4 of 4).

## Defects, page verdicts, and blockers

No defect remains in the assigned items or pages, and no uneditable defect was found in the inspected dependency context. No blocker remains.

- `tgrx-noether-entropy` — pass after the local definition and Statement-reference repairs; all four A-page items are present and their stated dependency order is acyclic.
- `tgrx-noether-entropy-examples` — pass; the `f(R)` coefficient computation is correct under the stated smoothness, unit, curvature, and binormal conventions.

Coverage limitation: this review checked each direct supplier used by the assigned arguments and the source passages identified above; it did not re-audit the complete transitive foundational proof closure of the published mathematical suppliers.
