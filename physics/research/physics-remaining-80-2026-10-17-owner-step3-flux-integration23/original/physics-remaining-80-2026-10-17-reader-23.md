# Step 3a reader report — batch 23

Run: `physics-remaining-80-2026-10-17`  
Batch: `23`  
Role: reader  
Pages: `emg-ms03` (A), `emg-ms03-examples` (B)

## Opened inventory

Assigned pages: `emg-ms03`, `emg-ms03-examples`.

Assigned items, read in supplier-first order:

- `def-emg-xs-harmonic-mp`, `def-emg-xs-br-products`, `def-emg-xs-null-wave`;
- `thm-emg-xs-mp-verification`, `thm-emg-xs-br-verification`, `thm-emg-xs-null-wave-verification`;
- `prop-emg-xs-mp-multicenter`, `prop-emg-xs-null-invariants`, `prop-emg-xs-mp-extremal-rn`, `thm-emg-xs-rn-near-horizon`;
- `cex-emg-xs-nonharmonic-vacuum`, `cex-emg-xs-constant-radius`, `cex-emg-xs-vanishing-scalars`, `ex-emg-xs-two-center`.

Page suppliers opened: `emg-mm02`, `emg-ms01`.

Mathematical suppliers opened for the assigned claims included `def-emg-conformastatic-chart-data`, `lem-emg-conformastatic-chart-is-lorentzian`, `lem-emg-conformastatic-curvature`, `def-emg-xs-geometric-electrovac`, `lem-emg-maxwell-current-forms`, `def-emg-xs-rn-data`, `lem-emg-xs-rn-tensor-identities`, and `thm-emg-xs-rn-verification`; the relevant published geometry/form suppliers included the Lorentzian Hodge, Levi-Civita, curvature-coordinate, curvature-symmetry, warped-sphere, smooth-sphere, and smooth-chart items. I also inspected the assigned items' current proof contracts and the read-only batch-25 consumers of the clarified conventions (`pthm-emg-xs-br-model`, `pthm-emg-xs-br-limit`, `pthm-emg-xs-mp-extremal`, and `texp-emg-xs-null-curvature`).

## Review and page verdicts

`emg-ms03` — **pass**. Its summary matches the ten placed mathematical items: it distinguishes the candidate-data definitions from the three local field-equation verifications, states the punctured-domain flux limits, and keeps the MP/RN identification and RN scaling on the declared open exteriors. It makes no physical-realization or observation claim.

`emg-ms03-examples` — **pass**. Its four example summaries match the assigned items. The two-center item uses the finite multicenter flux result; the nonharmonic item gives a smooth witness with nonzero residual; the constant-radius item refutes the coordinate claim; and the null-wave item has the four stated vanishing contractions with nonzero field and curvature. The B page was not edited.

The component calculations were checked against the declared hypotheses and conventions. In particular, the arbitrary-positive-$H$ Ricci table is used before imposing harmonicity; the MP Maxwell divergence uses the exact current-form sign; the product Ricci and Maxwell components match `Ric = 2Q`; the null-wave Ricci and contractions follow from the displayed Brinkmann components; the regular-sphere Coulomb flux integral handles inside, outside, and center cases separately; and the RN exterior map and $C^\infty_{\rm loc}$ scaling formulas are correct on their stated domains.

The source locators used as context were checked against Carroll's curvature formulas and contractions ([Carroll](https://arxiv.org/pdf/gr-qc/9712019v1)), Tong's extremal throat and multi-black-hole discussion ([Tong](https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf)), and the conformastatic ansatz and unit footnote in Meinel–Hütten §2 ([Meinel–Hütten](https://arxiv.org/pdf/1105.3807v3)). The matter-bearing dust equations and source unit conventions are not used in the assigned mathematical proofs.

## Repairs

- `def-emg-xs-br-products`: added a preceding sphere-conventions section giving the usual smooth structure, tangent spaces, induced metric $\gamma_p(u,v)=u\cdot v$, and outward area form $\omega_p(u,v)=\det(p,u,v)$. Added the exact sphere and round-metric suppliers to `deps` and `dependency_roles`. The formal `Definition` section remains textually unchanged.
- `prop-emg-xs-null-invariants`: defined “flat” before its Statement as $R_{abcd}\equiv0$ and cited that convention in the curvature conclusion and step 3.1.
- `cex-emg-xs-vanishing-scalars`: made the refuted statement's “flat” meaning explicit, added the matching fact, and cited it in step 2.1.
- `prop-emg-xs-mp-extremal-rn`: stated the exact RN extremality condition before its Statement: for $M>0$, $M^2=q_e^2+q_m^2$; in the electric branch this is $|q_e|=M$. Added the fact to step 3.1.
- `thm-emg-xs-rn-near-horizon`: stated the RN extremality and $C^\infty_{\rm loc}$ convergence conventions before their first use. Its formal Statement is unchanged.
- Refreshed batch-23 proof-contract excerpts for the new conventions and the affected derivations. No changed item contained a stale `verification.judge` record.

## Finding outside edit scope

`def-emg-xs-geometric-electrovac` is an in-run supplier outside batch 23 (batch 21). Its Definition introduces $q_e(S)$ and $q_m(S)$ using integrals of two-forms over an oriented sphere, but its declared dependencies contain only `lem-emg-lorentz-hodge-calculus`; they do not define integration of top forms on an oriented sphere. The published definition `def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold` supplies that operation for the smooth compact oriented sphere. The assigned consumer `prop-emg-xs-mp-multicenter` uses these flux definitions in steps 1.2, 1.3, 2.2, and 3.1. I did not edit the batch-21 supplier. The exact observed current supplier hash is recorded in the reader findings JSON.

## Checks and blocker

Reflow and precheck completed for each of the five changed items with exit code 0. The final required proof-layout run covered all five changed paths: 5 items, 14 steps, 0 defects. There is no process blocker; the integration-definition prerequisite remains for the batch-21 owner to resolve.

## Coverage note

All assigned pages and items and the mathematical suppliers needed for the reviewed computations were opened. No physical observations or empirical premises occur in this batch. I did not audit unrelated transitive supplier branches, including the separate SI/Hilbert-normalization supplier of the RN theorem, because assigned consumers use only its geometric electrovac clause. External source citations were checked only where they provide the ansatz or convention context; the item proofs are local calculations.
