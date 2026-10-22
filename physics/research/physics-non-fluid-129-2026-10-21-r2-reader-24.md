# Step 3a reader report — batch 24

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Scope: batch `24` only

## Opened inventory

Assigned pages:

- `library/einstein-maxwell-models-mathematics/emg-fx09.md` (A page)
- `library/einstein-maxwell-models-mathematics/emg-fx09-examples.md` (B page)

Page prerequisites opened as context:

- `library/einstein-maxwell-models-mathematics/emg-mg02.md` (published)
- `library/einstein-maxwell-models-mathematics/emg-fx05.md` (draft)
- `../library/lie-theory/gauge-groups-and-representation-theory-interfaces.md` (published mathematics page)
- `../library/differential-geometry/symplectic-manifolds-moser-stability-and-darboux-weinstein-theory.md` (published mathematics page)

All five assigned item carriers were opened and reviewed:

- `prop-emg-fx-affine-connection-sector`
- `def-emg-fx-maxwell-presymplectic-current`
- `lem-emg-fx-symplectic-current-boundary`
- `prop-emg-fx-finite-coisotropic-pairing`
- `ex-emg-fx-flat-holonomy-circle`

The direct mathematical suppliers needed to check the assigned statements and arguments were opened: `def-countable-choice`, `def-emg-local-potentials-and-circle-data`, `lem-emg-circle-connection-gluing`, `prop-gauge-transformations-act-on-principal-connections`, `thm-the-exterior-derivative-commutes-with-pullback`, `lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes`, `lem-emg-lorentz-hodge-calculus`, `def-emg-lorentzian-forms`, `def-emg-fx-linearized-electrovac`, `lem-emg-fx-linearized-hodge`, `thm-density-measure-integration-agrees-with-smooth-density-integration`, `thm-monotone-convergence-for-the-integral`, `thm-stokes-theorem-for-smooth-singular-chains`, `def-isotropic-coisotropic-symplectic-and-lagrangian-subspaces`, `prop-symplectic-reduction-of-a-coisotropic-vector-subspace`, `lem-emg-sphere-flux-holonomy`, `def-gauge-group-of-a-smooth-principal-bundle`, `thm-kernel-and-fibres-of-complex-exponential`, `def-emg-electrovacuum-cauchy-system`, `def-emg-xs-geometric-electrovac`, `def-symplectic-vector-space`, and `def-symplectic-orthogonal-complement`.

The batch manifest and proof-contract record were consulted as navigation and evidence, not treated as verdicts. The two draft linearized electrovac suppliers were checked for the definitions used by the assigned fixed-background current item; no defect affecting that consumer was found. Their broader proof and dependency closures were not independently audited here.

## Review and edits

- `prop-emg-fx-affine-connection-sector`: the overlap difference patches to a unique smooth global one-form; the curvature difference and compact closed-surface integral follow from the stated pullback and Stokes suppliers. The pushforward gauge sign agrees with the local formula $(\Phi_h^{-1})^*\omega$; units and the fixed-bundle/atlas scope are explicit. Its TikZ square correctly records translation of a connection and the corresponding physical-curvature translation.
- `def-emg-fx-maxwell-presymplectic-current`: the fixed-background operator equations, smooth one-form domain, Hodge convention, spacelike embedding, coefficient function, absolute-integrability condition, and normalization caveats are explicit. It does not conflate the normalized fixed-metric block with the coupled geometric electrovac field.
- `lem-emg-fx-symplectic-current-boundary`: the closure calculation uses the symmetric Lorentzian two-form pairing and the two Maxwell equations. The exact-gauge change follows from the product rule and $d\star_g d\beta=0$; finite-chain Stokes and the separate positive/negative-part monotone-convergence argument support the stated conditional noncompact flux identity. No falloff condition is inferred.
- `prop-emg-fx-finite-coisotropic-pairing`: the original statement used “symplectic vector space” without stating the underlying nondegenerate alternating form or defining $W^\omega$ and cosets before use. I revised the Statement to give those definitions explicitly. The finite-dimensional quotient claim and proof are unchanged. A scoped search found no item consumers; only its assigned page placement was found. The proof contract now records the reader repair and that the dependency graph and conclusion did not change.
- `ex-emg-fx-flat-holonomy-circle`: the original title “Flat connection with nontrivial Wilson loop” overclaimed for integer θ, when the stated holonomy and Wilson variable are both trivial. I changed the title to “Flat circle connection: holonomy and gauge triviality.” The holonomy sign follows the specified horizontality equation, and the large-gauge criterion is exactly θ∈\(\mathbb Z\). The statement retains its explicit no-empirical-claim caveat.

No proof contract or verification judge entry was stale for the two edited items. The finite-quotient contract was updated as noted above. The title-only edit required no proof-contract change.

## Source and diagram checks

The relevant source locators support the cited conventions: Tong, *Gauge Theory*, §1.1.2 ([PDF](https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf); patchwise potentials, with the preceding quantum phase condition not imported); Morrison, *Connections on Principal Fibre Bundles*, §5.1 and §7.1–7.3 ([PDF](https://tqft.net/papers/ConnectionsAndBundles.pdf); horizontal connections, local representatives, and curvature); Harlow and Wu, *Covariant phase space with boundaries*, §3.3, equations (3.18)–(3.25) ([PDF](https://arxiv.org/pdf/1906.08616)); Iyer and Wald, §3, equations (44)–(47) ([PDF](https://arxiv.org/pdf/gr-qc/9403028)); and Compère and Fiorucci, Lecture 1, §1.3.1–1.3.3 ([PDF](https://arxiv.org/pdf/1801.07064)). The source locators were checked at the cited sections/equations available through the source pages; no full-source retrieval claim is made here. The archived Meinrenken PDF link ([archive](https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf)) did not open through the browser tool. The imported published coisotropic-reduction item was opened directly and its exact finite-dimensional statement and proof were checked; the archive access limitation did not leave a mathematical uncertainty.

The only assigned diagram is the commutative square in `prop-emg-fx-affine-connection-sector`; its objects, translation map, physical-curvature map, and $+\kappa_0d\alpha$ arrow agree with the text. No additional diagram was needed for the other assigned exposition.

## Page verdicts

- `emg-fx09`: pass. The four assigned A-page items are listed; the frontmatter prerequisites match the declared reading context. No page-body summary is present to correct.
- `emg-fx09-examples`: pass. The assigned example is listed as the example item and the page requires its companion A page. No page-body summary is present to correct.

## Validation and limitations

- `reflow.mts` on `prop-emg-fx-finite-coisotropic-pairing.md`: unchanged.
- `precheck.mts` on `prop-emg-fx-finite-coisotropic-pairing.md`: pass (direct).
- Final `proof-layout.mjs` on both edited item paths: 2 items, 6 steps, 0 defects.
- No unresolved assigned defect or blocker remains. Published suppliers were checked at the exact statements and argument portions used; this report is not an independent audit of their complete transitive closures or a new acceptance of their publication status.
