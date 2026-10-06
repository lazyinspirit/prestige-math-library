# Reader 10 — frontier-39-analysis-30, batch 10

Independent Step 5a review. Run state read from `.autopilot/frontier-39-analysis-30/state.json`: stage `5a-read`. All assigned carriers are draft. No judging, certification or publication is performed.

## Opened assigned inventory

- A page: `library/pde/lax-milgram-and-weak-elliptic-solutions.md`.
  - `items/def-bounded-coercive-and-symmetric-sesquilinear-forms.md`: title, current claim, facts and full proof/remark read.
  - `items/lem-form-to-bounded-operator-by-hilbert-riesz.md`: title, current claim, facts and full proof/remark read.
  - `items/lem-coercive-form-operator-is-bounded-below.md`: title, current claim, facts and full proof/remark read.
  - `items/lem-bounded-below-operator-has-closed-range.md`: title, current claim, facts and full proof/remark read.
  - `items/lem-adjoint-of-a-coercive-sesquilinear-form-is-coercive.md`: title, current claim, facts and full proof/remark read.
  - `items/lem-coercivity-of-the-adjoint-makes-the-form-operator-range-dense.md`: title, current claim, facts and full proof/remark read.
  - `items/lem-coercivity-makes-a-small-form-step-a-contraction.md`: title, current claim, facts and full proof/remark read.
  - `items/thm-lax-milgram.md`: title, current claim, facts and full proof/remark read.
  - `items/cor-lax-milgram-inverse-has-norm-at-most-one-over-alpha.md`: title, current claim, facts and full proof/remark read.
  - `items/cor-symmetric-lax-milgram-is-energy-minimisation.md`: title, current claim, facts and full proof/remark read.
  - `items/rem-nonsymmetric-lax-milgram-is-not-a-scalar-minimisation-principle.md`: title, current claim, facts and full proof/remark read.
  - `items/def-h-minus-one-as-the-dual-of-h-one-zero.md`: title, current claim, facts and full proof/remark read.
  - `items/lem-ltwo-and-divergence-data-embed-in-h-minus-one.md`: title, current claim, facts and full proof/remark read.
  - `items/thm-every-h-minus-one-functional-has-ltwo-plus-divergence-form.md`: title, current claim, facts and full proof/remark read.
  - `items/def-uniformly-elliptic-divergence-form-operator.md`: title, current claim, facts and full proof/remark read.
  - `items/def-weak-dirichlet-solution-for-a-divergence-form-operator.md`: title, current claim, facts and full proof/remark read.
  - `items/lem-elliptic-form-is-well-defined-and-bounded.md`: title, current claim, facts and full proof/remark read.
  - `items/lem-coercivity-of-the-principal-dirichlet-form.md`: title, current claim, facts and full proof/remark read.
  - `items/lem-testing-a-coercive-weak-solution-with-itself-gives-the-energy-bound.md`: title, current claim, facts and full proof/remark read.
  - `items/thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem.md`: title, current claim, facts and full proof/remark read.
  - `items/thm-lax-milgram-solvability-for-coercive-divergence-form-equations.md`: title, current claim, facts and full proof/remark read.
  - `items/lem-w-one-two-is-a-hilbert-space.md`: title, current claim, facts and full proof/remark read.
  - `items/thm-weak-neumann-poisson-solvability-on-the-mean-zero-subspace.md`: title, current claim, facts and full proof/remark read.
  - `items/cor-positive-reaction-restores-coercivity-without-dirichlet-poincare.md`: title, current claim, facts and full proof/remark read.
  - `items/cor-inhomogeneous-weak-dirichlet-problem-by-a-trace-lifting.md`: title, current claim, facts and full proof/remark read.
  - `items/lem-classical-solutions-satisfy-the-weak-formulation.md`: title, current claim, facts and full proof/remark read.
  - `items/cor-weak-solution-depends-continuously-on-data.md`: title, current claim, facts and full proof/remark read.
  - `items/lem-sharp-dirichlet-poincare-inequality-on-an-interval.md`: title, current claim, facts and full proof/remark read.
- B page: `library/pde/lax-milgram-and-weak-elliptic-solutions-examples.md`.
  - `items/ex-weak-dirichlet-poisson-problem-on-an-interval.md`: title, current claim, facts and full proof/remark read.
  - `items/ex-ltwo-forcing-defines-an-h-minus-one-functional.md`: title, current claim, facts and full proof/remark read.
  - `items/ex-nonsymmetric-coercive-elliptic-form.md`: title, current claim, facts and full proof/remark read.
  - `items/cex-bounded-form-without-coercivity-need-not-be-solvable.md`: title, current claim, facts and full proof/remark read.
  - `items/cex-coercive-form-need-not-be-symmetric.md`: title, current claim, facts and full proof/remark read.
  - `items/cex-arbitrary-ltwo-boundary-data-need-not-have-an-h-one-lifting.md`: title, current claim, facts and full proof/remark read.
  - `items/cex-neumann-poisson-problem-is-not-coercive-on-all-of-h-one.md`: title, current claim, facts and full proof/remark read.
  - `items/ex-complex-sesquilinear-coercivity-differs-from-bilinear-positivity.md`: title, current claim, facts and full proof/remark read.
  - `items/ex-one-dimensional-form-attains-the-lax-milgram-one-over-alpha-bound.md`: title, current claim, facts and full proof/remark read.
  - `items/ex-neumann-kernel-dimension-equals-the-number-of-connected-components.md`: title, current claim, facts and full proof/remark read.
  - `items/cex-a-large-adverse-zero-order-term-destroys-dirichlet-coercivity.md`: title, current claim, facts and full proof/remark read.

Items were read with owned suppliers before consumers (in particular the H1 Hilbert lemma before the H-minus-one representation, and the sharp interval helper before its examples). External dependency statements and definitions were opened as the inference tracing required; deeper proofs and precise source sections were opened when the claimed interface was insufficient. Later interface checks completed the elementary vocabulary inventory.

## Initial review checkpoint (resolved by the repairs below)

Initially confirmed assigned defects: complex scalar error in form-to-operator step 3.1; real/complex diagonal symmetry caveat; missing Countable Choice in adjoint statement; false strict positivity of contraction radicand at alpha=M; divergence data step 4.1 uses nonexistent L2 weak derivatives; inhomogeneous definition needs AC and n>=2; lifting estimate needs the bound on all H1 slots; Green example needs AC FTC and AC integration by parts; unsupported nonsurjectivity assertion needs an explicit local witness; scalar sharpness step 1.2 says smaller instead of larger; disconnected Neumann caveats require qualifications/proof; complex finite-dimensional example invokes Lax–Milgram without CC. A-page drift summary lacks sqrt(n).

Source evidence opened: Simon Lecture 7 printed pp. 68–73 (PDF pp. 37–39, two printed pages per scan page); Laugesen Theorem 4.12 printed pp. 98–99 and Neumann Exercise 5.1 pp. 105–106; Hunter Theorem 4.7 and complete proof pp. 95–97, Theorem 4.9 p. 98, trace Theorem 3.44 and discussion pp. 72–73; Brezis Theorem 5.6 proof p. 139 and Corollary 5.8/Remark 8 p. 140, Theorem 8.22 and example pp. 231–232. URLs are the items’ corresponding author/university PDF URLs. Local PDFs were read with PyMuPDF. No inference of absent material from truncated output.

External supplier concern: `thm-poincare-inequality-for-w-one-p-zero` Statement omits the Countable Choice assumed in Given; F7 calls `def-axiom-of-choice` Countable Choice. Mathematical p=2 estimate checked from its complete proof and Hunter Theorem 4.9; assigned consumers already assume AC, so their application remains valid. Supplier is batch 4, outside edit scope.

## Validation

Initial strict batch proof-contract check passed mechanically; this is not mathematical acceptance. Final checks and results are recorded below.

## Page verdicts and limitations

Final page verdicts and limitations are recorded below.

- Repair `def-bounded-coercive-and-symmetric-sesquilinear-forms`: Definition: restrict the diagonal-value characterization to complex scalars and explicitly expand polarization; remove the contradictory suggestion that all real forms are symmetric. Evidence: first-slot-linear sesquilinearity; a real skew form has real diagonal values but is not symmetric.

- Repair `lem-form-to-bounded-operator-by-hilbert-riesz`: Proof 3.1: use the representing identity in the first slot, correcting false complex scalar equalities. Evidence: opened Riesz representation and inner-product definition.

- Repair `lem-bounded-below-operator-has-closed-range`: Proof 2.2: supply inverse linearity before its operator norm is used (an immediately closable nonfatal omission).

- Repair `lem-adjoint-of-a-coercive-sesquilinear-form-is-coercive`: Statement: carry Countable Choice from the representation, Hilbert-adjoint and orthogonality suppliers. Given already stated this assumption.

- Repair `lem-coercivity-makes-a-small-form-step-a-contraction`: Proof 1.1: correct strict positivity to nonnegativity; the alpha=M, rho=1/M endpoint gives zero, as its own step 2.1 already records.

- Repair `lem-ltwo-and-divergence-data-embed-in-h-minus-one`: Statement and proof 4.1: cite the actual L2 inner-product supplier and use distributional derivatives for arbitrary L2 data. The weak-derivative definition requires a locally integrable derivative value; no such value is assumed here. Hunter Theorem 4.7 pp. 95–97 and the opened distribution definitions supply the corrected interpretation.

- Repair `def-weak-dirichlet-solution-for-a-divergence-form-operator`: Definition: carry AC and n>=2 from the trace and fractional boundary interfaces; the homogeneous definition remains on arbitrary open sets.

- Repair `cor-inhomogeneous-weak-dirichlet-problem-by-a-trace-lifting`: Statement, Given and F4: use the full H1 bound for a(Rg,v); Rg need not have zero trace. The opened boundedness supplier supplies this exact bound.

- Repair `cor-weak-solution-depends-continuously-on-data`: Statement and Given: use the full H1 form bound required by the shifted datum; F2 already cited it correctly.

- Repair `cex-neumann-poisson-problem-is-not-coercive-on-all-of-h-one`: Proof 3.1: qualify the global mean-zero conclusion, which fails for the stated general disconnected bounded open set.

- Repair `ex-one-dimensional-form-attains-the-lax-milgram-one-over-alpha-bound`: Proof 1.2: reverse smaller to larger (coercivity constants can always be decreased). F2 and proof 1.1: derive scalar uniqueness and parametrization directly, preserving the choice-free claim.

- Repair `cex-coercive-form-need-not-be-symmetric`: Statement and Given: supply Countable Choice for the invoked Lax–Milgram conclusion.

- Repair `ex-complex-sesquilinear-coercivity-differs-from-bilinear-positivity`: Example and proof 1.2: specify a nonzero pair for the claimed inequality and use explicit complex arithmetic for the negative-real-part illustration.

- A-page prose: restore sqrt(n) in the componentwise drift bound, and identify the energy expansion as the minimization argument.

- Repair `ex-weak-dirichlet-poisson-problem-on-an-interval`: F2 now cites the exact AC FTC and AC integration-by-parts theorems; the former absolute-continuity-of-the-integral citation gives no derivative formula and the former classical IBP requires derivatives everywhere. Proof 3.1 derives derivative commutation with mollification from the weak identity; proof 5.1 derives integral of v-prime=0 from density, avoiding a silently assumed interval trace theorem. Existing AC suffices for CC+DC.

- Repair `ex-ltwo-forcing-defines-an-h-minus-one-functional`: F3 correctly distinguishes distributions from test functions. New proof 3.2 supplies nonsurjectivity using localized jump data: F(v-epsilon)=-C stays nonzero while the L2 norm of its smooth tests tends to zero. The former appeal to the general representation theorem did not imply nonsurjectivity. Opened bumps, Fubini, FTC and existing Holder/Riemann-Lebesgue inputs justify the calculation.

- Repair `thm-weak-neumann-poisson-solvability-on-the-mean-zero-subspace`: specify W1,2 extension domains. New F8 and steps 5.2–5.3 prove the disconnected claim: Rellich forces finitely many components and supplies the missing Poincare estimate on componentwise-mean-zero classes by contradiction; then Lax–Milgram and decomposition of tests prove sufficiency. The original connected Poincare supplier did not establish those prerequisites. Opened complete batch-9 compactness supplier before adding the edge; AC is already assumed. Connected estimate unchanged.

- Repair `thm-every-h-minus-one-functional-has-ltwo-plus-divergence-form`: F4 and proof 1.2: explicitly supply the L2 pairing estimate before finite Cauchy–Schwarz is applied to component norms, closing an immediately checkable omission.

- Repair `lem-w-one-two-is-a-hilbert-space`: Statement: replace the quotient-definition citation with the actual L2 Hilbert-pairing supplier (already present in deps and F2).

- Repair `lem-sharp-dirichlet-poincare-inequality-on-an-interval`: Proof 2.1: avoid using a both as a real function and as an interval endpoint. Proof 2.2: the support is closed, so cutoff transition endpoints can belong to it; replace false strict support inequalities by the correct compact containment.

- Source-location repair `lem-coercive-form-operator-is-bounded-below`: Lecture 7, the unnumbered coercivity/Cauchy–Schwarz lower bound in the Lax–Milgram proof, printed p. 71 (PDF p. 38); (4.13) is Laugesen’s numbering, not Simon’s.. The exact cited pages were opened; reference URLs preserved.

- Source-location repair `lem-adjoint-of-a-coercive-sesquilinear-form-is-coercive`: Section 5.3, Remark 8(b)–(c), printed pp. 140–141: closed range and density for a coercive operator. This is real bilinear background; the adjoint-form identity and its same-constant coercivity are proved here.. The exact cited pages were opened; reference URLs preserved.

- Source-location repair `lem-coercivity-of-the-adjoint-makes-the-form-operator-range-dense`: Section 5.3, Remark 8(c), printed p. 141: R(A) is dense since a vector orthogonal to every Au must vanish.. The exact cited pages were opened; reference URLs preserved.

- Source-location repair `lem-coercivity-makes-a-small-form-step-a-contraction`: Section 4.7, Theorem 4.21, estimates (4.23)–(4.24), printed pp. 103–104. These are elliptic energy/boundedness background; the contraction estimate is supplied by the Brezis proof and the local norm expansion.. The exact cited pages were opened; reference URLs preserved.

- Source-location repair `def-h-minus-one-as-the-dual-of-h-one-zero`: ['Section 8.3, the notation H-minus-one as the dual of H-one-zero and Proposition 8.14, printed pp. 219–220 (real-scalar model for the conjugate-dual convention here).', 'Section 8.4, Remark 22, printed p. 221: the Riesz–Frechet identification with the H1 inner product.']. The exact cited pages were opened; reference URLs preserved.

- Source-location repair `thm-every-h-minus-one-functional-has-ltwo-plus-divergence-form`: Section 8.3, Proposition 8.14 and its Riesz proof, printed pp. 219–220: representation by f0 and f1 and the infimum norm in one dimension (the local proof treats arbitrary dimension).. The exact cited pages were opened; reference URLs preserved.

- Source-location repair `ex-weak-dirichlet-poisson-problem-on-an-interval`: Section 5.2, Exercise 5.3, printed p. 114: weak one-dimensional Poisson solutions have a second weak derivative and are C1. The Green kernel formula is proved directly here, not asserted by that exercise.; Section 8.4, Proposition 8.15 and Remark 22, printed pp. 221–222: one-dimensional weak Dirichlet problems (with a positive reaction term) and the Riesz identification; the pure Poisson Green kernel is computed here.. The exact cited pages were opened; reference URLs preserved.

- Source-location repair `cex-arbitrary-ltwo-boundary-data-need-not-have-an-h-one-lifting`: ['Section 3.9, Theorem 3.44 and the paragraph following its proof, printed pp. 72–73: the p>1 trace range is a proper fractional/Besov subspace of Lp.', 'Section 3.9, printed pp. 72–73, trace background only. The indicator jump and its divergent Slobodeckij seminorm are computed in the local proof; no jump example is claimed on p. 72.']. The exact cited pages were opened; reference URLs preserved.

- Source-location repair `lem-classical-solutions-satisfy-the-weak-formulation`: Section 2.2, printed p. 37, classical-to-weak integration by parts for Poisson; Section 5.1, printed p. 101, the divergence-form weak equation.. The exact cited pages were opened; reference URLs preserved.

- Source-location repair `cex-neumann-poisson-problem-is-not-coercive-on-all-of-h-one`: Section 4.4, introductory discussion, printed p. 98: constants have zero derivative, motivating boundary or mean-zero conditions for Poincare estimates.; Section 9.5, Example 4, printed pp. 296–297: Neumann testing on H1 for the reaction-shifted equation -Delta u+u=f. This is formulation background; the unshifted kernel obstruction is computed here.. The exact cited pages were opened; reference URLs preserved.

- Source-location repair `ex-neumann-kernel-dimension-equals-the-number-of-connected-components`: Section 4.4, introductory discussion, printed p. 98: constant functions have zero derivative. The componentwise kernel identification is proved here using the cited zero-gradient supplier.; Section 9.5, Example 4, printed pp. 296–297: weak Neumann formulation with a positive reaction term; the unshifted componentwise kernel and its dimension are established by the local proof, not by the Dirichlet spectral theorem on pp. 311–312.. The exact cited pages were opened; reference URLs preserved.

- Source-location repair `cor-inhomogeneous-weak-dirichlet-problem-by-a-trace-lifting`: ['Section 9.5, the weak Dirichlet setup, printed pp. 291–294; the boundary lifting estimate is proved here with the cited trace right inverse.', 'Section 8.4, Examples 3–4, printed pp. 225–226: inhomogeneous Dirichlet and Neumann conditions in one dimension.']. The exact cited pages were opened; reference URLs preserved.

- Further source precision: the full AC FTC proof leads to the exact indefinite-integral and first-L1-FTC suppliers, now cited directly by the Green example. The complete Brezis Proposition 8.14 proof uses Hahn–Banach and a sum/max norm convention, not the local Hilbert-Riesz norm identity; the reference now says so. Corrected the lifting reference to Example 1 pp. 222–223 and marked Examples 3–4 as Neumann background; corrected the Laugesen adjoint and Brezis complex-form descriptions to identify their actual background statements rather than nonexistent discussions.

- Proof-contract boundary repairs: corrected false zero-coefficient ellipticity, empty-domain exclusions, alpha=1 and vanishing-real-part claims for the complex skew example, the q=0/isometry description, purported uniqueness in classical consistency, and the sharp adverse-term threshold converse. Updated exact step locators, actual choice costs, full-space lifting bounds and the proved disconnected extension; removed stale copied example statements from not-applicable reasons. These are evidence updates, not certification. Citations and derivations will be regenerated on final carrier bytes.

## Required format checks

- `def-bounded-coercive-and-symmetric-sesquilinear-forms`: reflow and precheck executed; both exited 0.
- `lem-form-to-bounded-operator-by-hilbert-riesz`: reflow and precheck executed; both exited 0.
- `lem-bounded-below-operator-has-closed-range`: reflow and precheck executed; both exited 0.
- `lem-adjoint-of-a-coercive-sesquilinear-form-is-coercive`: reflow and precheck executed; both exited 0.
- `lem-coercivity-makes-a-small-form-step-a-contraction`: reflow and precheck executed; both exited 0.
- `lem-ltwo-and-divergence-data-embed-in-h-minus-one`: reflow and precheck executed; both exited 0.
- `def-weak-dirichlet-solution-for-a-divergence-form-operator`: reflow and precheck executed; both exited 0.
- `cor-inhomogeneous-weak-dirichlet-problem-by-a-trace-lifting`: reflow and precheck executed; both exited 0.
- `cor-weak-solution-depends-continuously-on-data`: reflow and precheck executed; both exited 0.
- `cex-neumann-poisson-problem-is-not-coercive-on-all-of-h-one`: reflow and precheck executed; both exited 0.
- `ex-one-dimensional-form-attains-the-lax-milgram-one-over-alpha-bound`: reflow and precheck executed; both exited 0.
- `cex-coercive-form-need-not-be-symmetric`: reflow and precheck executed; both exited 0.
- `ex-complex-sesquilinear-coercivity-differs-from-bilinear-positivity`: reflow and precheck executed; both exited 0.
- `ex-weak-dirichlet-poisson-problem-on-an-interval`: reflow and precheck executed; both exited 0.
- `ex-ltwo-forcing-defines-an-h-minus-one-functional`: reflow and precheck executed; failed (see below).
- `thm-weak-neumann-poisson-solvability-on-the-mean-zero-subspace`: reflow and precheck executed; failed (see below).
- `thm-every-h-minus-one-functional-has-ltwo-plus-divergence-form`: reflow and precheck executed; both exited 0.
- `lem-w-one-two-is-a-hilbert-space`: reflow and precheck executed; both exited 0.
- `lem-sharp-dirichlet-poincare-inequality-on-an-interval`: reflow and precheck executed; both exited 0.
- `lem-coercive-form-operator-is-bounded-below`: reflow and precheck executed; both exited 0.
- `lem-coercivity-of-the-adjoint-makes-the-form-operator-range-dense`: reflow and precheck executed; both exited 0.
- `def-h-minus-one-as-the-dual-of-h-one-zero`: reflow and precheck executed; both exited 0.
- `cex-arbitrary-ltwo-boundary-data-need-not-have-an-h-one-lifting`: reflow and precheck executed; both exited 0.
- `lem-classical-solutions-satisfy-the-weak-formulation`: reflow and precheck executed; both exited 0.
- `ex-neumann-kernel-dimension-equals-the-number-of-connected-components`: reflow and precheck executed; both exited 0.

Failures: [('ex-ltwo-forcing-defines-an-h-minus-one-functional', 'precheck', 1), ('thm-weak-neumann-poisson-solvability-on-the-mean-zero-subspace', 'precheck', 1)].

The two initial precheck failures requested canonical phase ordering. Adopted the checker’s complete step ordering and numbering, with all mathematical text retained and statement cross-references updated. Both items then passed reflow and precheck. Final locations: nonsurjectivity in `ex-ltwo-forcing-defines-an-h-minus-one-functional` step 1.4; component finiteness/Poincare in the Neumann theorem step 1.3; componentwise solvability step 4.2; final Neumann conclusion step 5.1.

Final strict proof-contract check passed after adding the explicit Statement/Definition anchors requested by the checker. One nonblocking shotgun-bracket warning remains on Neumann step 1.3, which actually uses all four cited facts (Hilbert completeness, component integrals, constancy, compactness); the other steps cited only earlier established steps. Scoped rendercheck on the 25 changed items and both pages exited 0: {
  "errors": [],
  "warnings": [],
  "checked": 27
}.

- A-page prose additionally names the connected W1,2-extension-domain hypotheses for the exact F(1)=0 Neumann compatibility claim; global mean zero is insufficient on disconnected domains.

- Further contraction citation repair: opened `def-real-power`, which only defines powers by exp/log and supplies neither square-root uniqueness nor monotonicity. The statement now writes q-rho as a square root; F4 cites the opened `thm-of-square-roots` and proves monotonicity by factoring the difference of squares. Reflow and precheck passed after this final mathematical edit, and the contraction and Lax–Milgram citation contracts were regenerated.

## Opened external inventory

The following direct dependency interfaces were opened (Definition/Statement/Remark as applicable; full supplier proofs only where separately noted). This is not a full recursive proof audit of their entire dependency closure.

- `items/cor-components-of-open-subsets-of-rn-are-polygonally-connected.md`.
- `items/cor-inner-product-induces-a-norm.md`.
- `items/cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives.md`.
- `items/cor-pi-is-the-first-positive-sine-zero.md`.
- `items/cor-sine-and-cosine-are-one-lipschitz.md`.
- `items/cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous.md`.
- `items/cor-trigonometric-parity-and-pythagorean-identity.md`.
- `items/def-axiom-of-choice.md`.
- `items/def-banach-space.md`.
- `items/def-bounded-below-operator.md`.
- `items/def-bounded-c-k-domain-and-boundary-charts.md`.
- `items/def-bounded-linear-operator.md`.
- `items/def-cauchy-in-metric.md`.
- `items/def-ck-and-multi-index-notation-in-several-variables.md`.
- `items/def-classical-normal-derivative.md`.
- `items/def-complete-metric-space.md`.
- `items/def-complex-conjugate-real-imaginary-part-and-modulus.md`.
- `items/def-complex-lp-and-euclidean-test-function-conventions.md`.
- `items/def-connected-component-and-quasicomponent.md`.
- `items/def-countable-choice.md`.
- `items/def-derivative.md`.
- `items/def-distributional-derivative.md`.
- `items/def-dual-space-of-a-normed-space.md`.
- `items/def-essential-supremum-with-respect-to-a-measure.md`.
- `items/def-fractional-slobodeckij-space-on-euclidean-space.md`.
- `items/def-fractional-sobolev-space-on-a-compact-c-one-boundary.md`.
- `items/def-hilbert-space.md`.
- `items/def-hilbert-space-adjoint.md`.
- `items/def-hk-and-hk-zero-notation.md`.
- `items/def-inner-product-space.md`.
- `items/def-integral-over-a-measurable-set.md`.
- `items/def-l-infinity-on-a-measure-space.md`.
- `items/def-l-p-space-as-a-quotient-by-null-functions.md`.
- `items/def-linear-map.md`.
- `items/def-linear-subspace.md`.
- `items/def-lipschitz-holder-contraction.md`.
- `items/def-measurable-function-between-measurable-spaces.md`.
- `items/def-mollifier-family-generated-by-a-unit-mass-smooth-bump.md`.
- `items/def-norm-and-normed-space.md`.
- `items/def-operator-norm.md`.
- `items/def-orthogonality-and-orthogonal-complement.md`.
- `items/def-real-and-complex-inner-product-space.md`.
- `items/def-real-power.md`.
- `items/def-regular-distribution-from-a-locally-integrable-function.md`.
- `items/def-sesquilinear-and-hermitian-forms-over-a-field-with-involution.md`.
- `items/def-sobolev-extension-domain-and-extension-operator.md`.
- `items/def-sobolev-space-wkp-and-its-norm.md`.
- `items/def-space-of-bounded-linear-operators.md`.
- `items/def-surface-integral-on-a-compact-c-one-hypersurface.md`.
- `items/def-test-function-space-d-of-an-open-set.md`.
- `items/def-the-standard-smooth-step-function.md`.
- `items/def-weak-derivative-of-a-locally-integrable-function.md`.
- `items/def-wkp-zero-as-a-sobolev-closure.md`.
- `items/lem-classical-derivatives-are-weak-derivatives.md`.
- `items/lem-closed-subspace-of-a-banach-space-is-banach.md`.
- `items/lem-compact-support-zero-extension-in-wkp.md`.
- `items/lem-euclidean-balls-have-positive-finite-lebesgue-measure.md`.
- `items/lem-fractional-boundary-norm-is-independent-of-atlas.md`.
- `items/lem-integral-elementary-bounds.md`.
- `items/lem-kernel-range-orthogonality-for-hilbert-adjoints.md`.
- `items/lem-l-two-with-the-integral-pairing-is-a-hilbert-space.md`.
- `items/lem-metric-limits-unique.md`.
- `items/lem-smooth-bump-between-concentric-euclidean-balls.md`.
- `items/lem-sobolev-norm-is-well-defined-and-definite.md`.
- `items/lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous.md`.
- `items/lem-vector-operations-are-continuous-in-a-normed-space.md`.
- `items/lem-weak-derivative-is-independent-of-lp-representatives.md`.
- `items/lem-weak-leibniz-rule-with-a-smooth-factor.md`.
- `items/prop-mollifier-families-are-l-one-approximate-identities.md`.
- `items/rem-real-and-complex-normed-space-convention.md`.
- `items/thm-absolute-continuity-of-the-integral.md`.
- `items/thm-acl-characterisation-of-w-one-p.md`.
- `items/thm-additivity-over-subintervals.md`.
- `items/thm-algebra-of-derivatives.md`.
- `items/thm-banach-fixed-point.md`.
- `items/thm-bounded-linear-operator-equivalences.md`.
- `items/thm-bounded-operator-space-is-banach.md`.
- `items/thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral.md`.
- `items/thm-bounded-right-inverse-for-the-sobolev-trace.md`.
- `items/thm-cauchy-schwarz-and-the-euclidean-norm.md`.
- `items/thm-cauchy-schwarz-in-an-inner-product-space.md`.
- `items/thm-chain-rule.md`.
- `items/thm-complex-holder-minkowski-and-the-quotient-norm.md`.
- `items/thm-continuous-implies-integrable.md`.
- `items/thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign.md`.
- `items/thm-dominated-convergence.md`.
- `items/thm-double-orthogonal-complement-is-closure.md`.
- `items/thm-extreme-value-r.md`.
- `items/thm-first-fundamental-theorem-of-calculus-for-l-one.md`.
- `items/thm-ftc-second-part.md`.
- `items/thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions.md`.
- `items/thm-generalized-holder-inequality-for-products.md`.
- `items/thm-hilbert-adjoint-properties.md`.
- `items/thm-holder-inequality-for-integrals.md`.
- `items/thm-integration-by-parts.md`.
- `items/thm-integration-by-parts-for-absolutely-continuous-functions.md`.
- `items/thm-kernel-of-the-trace-is-w-one-p-zero.md`.
- `items/thm-l-one-approximate-identities-converge-in-l-p.md`.
- `items/thm-linearity-of-the-integral.md`.
- `items/thm-locally-integrable-functions-embed-in-distributions.md`.
- `items/thm-lp-trace-operator-on-a-bounded-c-one-domain.md`.
- `items/thm-metric-closure-characterisation.md`.
- `items/thm-metric-continuity-characterisations.md`.
- `items/thm-metric-sequential-closure.md`.
- `items/thm-monotone-convergence-for-the-integral.md`.
- `items/thm-nonnegative-integral-zero-iff-zero-almost-everywhere.md`.
- `items/thm-of-square-roots.md`.
- `items/thm-poincare-inequality-for-w-one-p-zero.md`.
- `items/thm-poincare-wirtinger-on-bounded-connected-extension-domains.md`.
- `items/thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain.md`.
- `items/thm-riesz-representation-for-hilbert-space.md`.
- `items/thm-sharp-trace-theorem-for-w-one-p.md`.
- `items/thm-sine-and-cosine-addition-formulas.md`.
- `items/thm-sine-and-cosine-derivatives.md`.
- `items/thm-sobolev-gauss-green-formula-on-c-one-domains.md`.
- `items/thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space.md`.
- `items/thm-tonelli-and-fubini-for-completed-product-measures.md`.
- `items/thm-zero-weak-gradient-implies-componentwise-constancy.md`.

Additional opened targets: `items/lem-weak-derivative-linearity-locality-and-commutation.md`, `items/lem-finite-ambient-partitions-for-euclidean-boundary-integration.md`, and `items/thm-linear-change-of-variables-for-lebesgue-measure.md`. Full supplier arguments opened: Hilbert Riesz representation, Banach fixed point, the zero-trace Poincare inequality, bounded-extension-domain Rellich compactness, absolute continuity of the integral, the AC FTC and AC integration by parts; the complete radial-bump construction was opened for its radiality.

## Final mathematical assessment

All 39 assigned item bodies and both page summaries were independently reviewed. The corrected argument retains both Lax–Milgram proof routes, all stated PDE estimates, the full trace-lifting/data-dependence statements, the disconnected Neumann extension, and both adverse-term witnesses. No withdrawal is proposed. The unchanged core estimates and computations were checked directly: coercivity gives alpha||u||<=||Au||; the symmetrized energy expansion gives the unique minimum; component indicators give the Neumann kernel; the ground-state identity gives the sharp interval constant; the sine witness gives noncoercivity at c>=pi-squared and nonuniqueness at equality, and the polynomial witness gives 1/3-c/30.

- A-page `lax-milgram-and-weak-elliptic-solutions`: the assigned mathematical defects and summary errors were repaired. The remaining external supplier findings below require its producer’s repair.
- B-page `lax-milgram-and-weak-elliptic-solutions-examples`: all eleven assigned example/counterexample bodies were reviewed, with the repairs documented above. Summary consistent with the resulting items; B prose was not edited. The same Poincare supplier qualification applies through the dependency closure.

## Final validation and write scope

Reflow and precheck passed on all 25 changed item paths (definitions correctly report no proof to check). Initial canonical-order requests on two new proof additions were adopted and then passed. The strict batch proof-contract check passed, with the one explained nonblocking bracket warning. Scoped depcheck and fwdcheck passed on all 39 assigned items and both induced pages, with zero errors/warnings; their prerequisite cycle analysis is mechanical evidence, not a proof audit. Rendering passed for the 25 changed items and both pages (27 carriers); the final changed square-root formula and A-page qualification were additionally checked. Every changed item’s stale verification.judge record is absent. The required last batched layout command exited 0:

```sh
node tools/proof-layout.mjs items/def-bounded-coercive-and-symmetric-sesquilinear-forms.md items/lem-form-to-bounded-operator-by-hilbert-riesz.md items/lem-bounded-below-operator-has-closed-range.md items/lem-adjoint-of-a-coercive-sesquilinear-form-is-coercive.md items/lem-coercivity-makes-a-small-form-step-a-contraction.md items/lem-ltwo-and-divergence-data-embed-in-h-minus-one.md items/def-weak-dirichlet-solution-for-a-divergence-form-operator.md items/cor-inhomogeneous-weak-dirichlet-problem-by-a-trace-lifting.md items/cor-weak-solution-depends-continuously-on-data.md items/cex-neumann-poisson-problem-is-not-coercive-on-all-of-h-one.md items/ex-one-dimensional-form-attains-the-lax-milgram-one-over-alpha-bound.md items/cex-coercive-form-need-not-be-symmetric.md items/ex-complex-sesquilinear-coercivity-differs-from-bilinear-positivity.md items/ex-weak-dirichlet-poisson-problem-on-an-interval.md items/ex-ltwo-forcing-defines-an-h-minus-one-functional.md items/thm-weak-neumann-poisson-solvability-on-the-mean-zero-subspace.md items/thm-every-h-minus-one-functional-has-ltwo-plus-divergence-form.md items/lem-w-one-two-is-a-hilbert-space.md items/lem-sharp-dirichlet-poincare-inequality-on-an-interval.md items/lem-coercive-form-operator-is-bounded-below.md items/lem-coercivity-of-the-adjoint-makes-the-form-operator-range-dense.md items/def-h-minus-one-as-the-dual-of-h-one-zero.md items/cex-arbitrary-ltwo-boundary-data-need-not-have-an-h-one-lifting.md items/lem-classical-solutions-satisfy-the-weak-formulation.md items/ex-neumann-kernel-dimension-equals-the-number-of-connected-components.md
```

Only the 25 item paths listed in that command, the assigned A-page prose, this report, the batch-10 proof-contract file, and the requested findings JSON were written. No other batch, published item, B-page prose, plan specification, judgment or certification was changed.

## Uneditable findings and blocker status

Producer ownership verified in `research/frontier-39-analysis-30-batch-4.pages.json`: `thm-poincare-inequality-for-w-one-p-zero` is a current-run draft supplier from batch 4, reached directly by assigned consumer `lem-ltwo-and-divergence-data-embed-in-h-minus-one`. It was not edited. Current raw source SHA-256 observed at handoff: `caa9cb6472b8c1cb956516d2d21a65979211a1b8605f90f895af741cd9ba4d5b`.

- **missing-hypothesis; fatal** — `thm-poincare-inequality-for-w-one-p-zero`, Statement; Facts & Assumptions, Given; proof step 3.1: The Statement gives the W-one-p-zero inequality without a choice assumption, while Given assumes Countable Choice and step 3.1 uses F7 to choose a smooth approximating sequence. The opened Sobolev/closure definitions also state Countable Choice. Carry that assumption into the Statement and declare the exact Countable Choice dependency, or provide a choice-free proof and compatible class interfaces. The assigned consumer already assumes full AC, so its p=2 application is covered; this is a supplier claim/proof hypothesis mismatch.
- **citation-inaccurate; fatal** — `thm-poincare-inequality-for-w-one-p-zero`, Facts & Assumptions [F6] and [F7]: F6 says the W-one-p norm is the sum of the Lp norms of u and Du, citing def-sobolev-space-wkp-and-its-norm; that definition instead gives the p-root of the sum of pth powers (in particular the Euclidean component norm at p=2). F7 labels def-axiom-of-choice as Countable Choice, although that target defines full AC; def-countable-choice is the exact target. Correct F6 to the actual norm convention and cite/declare the exact choice axiom in F7. These wording defects do not disprove the p=2 estimate, whose complete supplier proof was checked.

These findings require the supplier producer/Step 5b lead to close them; the assigned consumers already supply AC, so no unresolved assigned proof branch depends on obtaining a weaker choice hypothesis. No assigned withdrawal or operational blocker remains.

## Coverage limits

Reviewed both assigned pages and all 39 assigned item bodies, with owned suppliers before consumers; opened 118 direct dependency interfaces and deeper proofs where needed. Repaired 25 assigned draft items, A-page prose and affected contracts. Required reflow/precheck and final batched proof-layout passed; scoped rendering, dependency/forward checks and strict contracts passed. This is not a recursive audit of every supplier proof or independent certification. Checked relevant complete arguments/sections in Hunter, Laugesen, Simon and Brezis; archived Teschl and Miranda references and every remaining bibliographic attribution were not exhaustively verified.

No rendered evidence bundle for this dispatch was present in the task artifacts; current item bodies and exact supplier interfaces were read directly. Unverified bibliographic attributions are recorded as a coverage limit, not claimed to have been checked. The final JSON contains only the two supplier findings; every repaired carrier finding stays in this report and the item diff.
