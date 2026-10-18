# Step 3a reader report — batch 58

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: reader  
Scope: batch 58

## Opened inventory

Assigned pages:

- `library/numerical-pdes-and-spatial-discretization/variational-inequality-and-contact-finite-elements.md` (A)
- `library/numerical-pdes-and-spatial-discretization/variational-inequality-and-contact-finite-elements-examples.md` (B)

Assigned items were read in dependency order.

- A, level 0: `def-signorini-partial-trace-space`.
- A, level 1: `lem-signorini-partial-trace-space-bounded`; `lem-signorini-rigid-motion-controlled-by-dirichlet-segment`.
- A, level 3: `def-signorini-elasticity-contact-model`.
- A, level 4: `def-signorini-contact-variational-inequality`; `lem-signorini-elasticity-form-bounded`.
- A, level 5: `lem-signorini-contact-set-closed-convex-nonempty`; `def-signorini-nodal-p1-contact-scheme`.
- A, level 6: `lem-signorini-partial-dirichlet-korn-coercivity`; `lem-signorini-nodal-contact-set-conforming`; `lem-signorini-contact-nodal-test-functions-surjective`; `def-signorini-dual-mortar-contact-pair`.
- A, level 7: `thm-signorini-continuous-contact-vi-wellposed`; `lem-signorini-dual-mortar-biorthogonality-and-infsup`.
- A, level 8: `thm-signorini-nodal-contact-vi-falk-error`; `thm-signorini-mortar-contact-kkt-and-complementarity`.
- B, level 0: `ex-signorini-one-dimensional-obstacle-free-boundary`.
- B, level 6: `cex-signorini-nodal-contact-feasibility-needs-convex-obstacle`.
- B, level 8: `ex-signorini-contact-patch-test`.
- B, level 9: `ex-signorini-mortar-active-set-change`.

I read all 15 assigned proof contracts and checked their citations, derivations, routine-step records, and boundary worksheets against the current item text.

Direct external item dependencies opened for the claims were: `cor-cauchy-schwarz-inequality-for-l-two`, `cor-finite-dimensional-normed-spaces-are-banach`, `def-axiom-of-choice`, `def-bounded-c-k-domain-and-boundary-charts`, `def-bounded-coercive-and-symmetric-sesquilinear-forms`, `def-broken-and-conforming-polynomial-spaces`, `def-closed-convex-obstacle-set-and-variational-inequality`, `def-convex-concave-and-midpoint-convex-functions`, `def-countable-choice`, `def-linear-elasticity-displacement-formulation-and-data`, `def-matching-affine-simplicial-meshes`, `def-reference-finite-element-and-unisolvent-dofs`, `def-sobolev-extension-domain-and-extension-operator`, `def-sobolev-space-wkp-and-its-norm`, `def-wkp-zero-as-a-sobolev-closure`, `lem-euclidean-balls-have-positive-finite-lebesgue-measure`, `lem-one-dimensional-trace-truncation-compatibility`, `thm-complete-subspace-iff-closed`, `thm-lipschitz-stability-of-strongly-monotone-variational-inequalities`, `thm-local-finite-element-interpolation-estimates`, `thm-lp-trace-operator-on-a-bounded-c-one-domain`, `thm-matching-continuous-piecewise-polynomials-are-wkp`, `thm-poincare-inequality-for-w-one-p-zero`, `thm-poincare-wirtinger-on-bounded-connected-extension-domains`, `thm-sobolev-spaces-are-banach-spaces`, and `thm-stampacchia-variational-inequality`.

Two direct suppliers are current-run drafts outside batch 58: `def-linear-elasticity-displacement-formulation-and-data` (batch 35) and `thm-na-bounded-lipschitz-domain-divergence-right-inverse` (batch 31). For the latter, I also opened its current-run cover/decomposition/right-inverse/zero-mean suppliers and the supporting Bogovskii definition and lemmas: `lem-na-lipschitz-domain-finite-star-shaped-cover`, `lem-na-finite-cover-zero-mean-data-decomposition`, `thm-na-star-shaped-bogovskii-bounded-right-inverse`, `lem-na-zero-mean-of-zero-boundary-divergence`, `def-na-star-shaped-bogovskii-integral`, `lem-na-bogovskii-kernel-support-and-divergence`, `lem-na-bogovskii-truncated-derivative-fourier-formula`, `lem-na-bogovskii-fourier-ray-and-derivative-ltwo-bound`, and `lem-na-homogeneous-dirichlet-poincare`. I checked the relevant published statements used in those arguments, including the change-of-variables, Fubini/Tonelli, compactness, Fourier/Plancherel, mollification, density, and Heine–Borel suppliers.

## Mathematical review and source evidence

The partial-trace construction is a bounded composition of restriction to the fixed C1 collars and the cited C1 trace map. Its zero-Dirichlet kernel is closed, hence Hilbert. The planar rigid-motion estimate follows from the explicit segment integral. The partial-boundary Korn proof subtracts a rigid motion to impose zero mean and zero mean curl, uses the divergence lift on curl z, and removes the rigid component using its segment trace estimate. The assumptions needed by that chain are explicit.

The contact set is nonempty, closed, and convex because psi is nonpositive and the trace map is bounded. For the nodal scheme, convexity of psi makes its affine chord lie above the obstacle, so nodal feasibility implies continuum feasibility. The interpolation and surjectivity arguments construct the needed P1 functions explicitly. The continuous VI existence/stability follows from the local Korn and boundedness results plus the cited Stampacchia and Lipschitz-stability suppliers.

The Falk estimate follows directly from the two variational inequalities, retaining the feasible-comparison residual `eta_feas`; Young's inequality gives the stated constants. The convergence branch states the required H2 and continuity assumptions, uses the local P1 interpolation estimate and `K_h subset K`, and controls the residual functional by its dual norm. The mortar calculations give the diagonal pairing, inf-sup constant `1/sqrt(3)`, and coefficientwise cone duality. The KKT proof establishes coordinatewise complementarity and multiplier uniqueness using the onto nodal trace map. The companion items check out: the scalar example's reaction calculation, the nodal counterexample's feasibility failure, the affine-shear patch test, and both reduced complementarity calculations.

The assigned source locators were checked against the cited sources. Relevant passages include:

- Falk, [*Error Estimates for the Approximation of a Class of Variational Inequalities*](https://ow3.math.rutgers.edu/~falk/papers/varineq.pdf), §2 Theorem 1, printed p. 965, gives a general approximation error estimate; §3 Lemma 3, printed p. 969, gives the nodal comparison property. The introduction attributes existence/uniqueness to Lions–Stampacchia. It does not state the example's reaction convention.
- Andersson, [*The Obstacle Problem*](https://www.kth.se/social/files/5671638ef276544fe6bf8bb4/Lectures_Obstacle_Problem.pdf), Chapter 3 §3.1, Theorem 3.1, printed p. 27, gives existence and uniqueness for the scalar Dirichlet obstacle problem; the admissible-variation argument on printed pp. 27–28 derives the variational inequality.
- Guermond, [Chapter 53: Stokes equations: Basic ideas](https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf), §§53.1–53.2.1, printed pp. 391–394, gives the symmetric-gradient stress convention, componentwise trace space, and weak form on a positive-measure Dirichlet velocity space. The source concerns velocity, not displacement.
- Zulehner, [*Numerical Methods for Continuum Mechanics 1*](https://www.numa.uni-linz.ac.at/Teaching/Lectures/numkont1_en.pdf), Chapter 2 §2.1, Lemma 2.2, Lemma 2.3, and Corollary 2.1, printed pp. 22–23, gives second Korn, the three-dimensional rigid-motion kernel, and positive-measure Dirichlet coercivity. The assigned planar segment estimate is proved locally.
- Guermond, [Chapter 11: Local interpolation on affine meshes](https://people.tamu.edu/~guermond/M661_FALL_2025/chap11.pdf), Theorem 11.13 and §11.5.1, establishes the local interpolation estimate and the Lagrange point-evaluation condition `ell > d/p`. The assigned `d=2, p=2, ell=2` application satisfies it.
- Krause and Wohlmuth, [*Multigrid Methods for Mortar Finite Elements*](https://publications.imp.fu-berlin.de/1852/1/paper_emg99_mortar.pdf), §2, printed pp. 2–3, defines a dual multiplier basis and its biorthogonality relation; the assigned constants and contact complementarity are calculated locally.
- Durán, [*An elementary proof of the continuity of Bogovskii’s right inverse of the divergence*](https://arxiv.org/pdf/1103.3718), formula (1.3), Lemmas 2.1–2.4, and Theorem 2.1, printed pp. 2–6, gives the star-shaped right inverse and the same Fourier-ray and kernel-tail constants used by the current-run supplier.

## Edits

1. A-page summary: added that the bounded connected planar Lipschitz polygon is assumed to be a `W^{1,2}`-extension domain. Evidence: this is an explicit hypothesis in `def-signorini-partial-trace-space`, and `thm-poincare-wirtinger-on-bounded-connected-extension-domains` is used in the partial-boundary Korn argument.
2. `def-signorini-partial-trace-space`: changed the Guermond locator from a weak displacement form to the componentwise trace space and weak velocity form. Evidence: Chapter 53 §53.2.1, printed pp. 393–394, defines the Stokes velocity space by a componentwise trace condition and gives its weak formulation.
3. `lem-signorini-rigid-motion-controlled-by-dirichlet-segment`: removed the locator's claim that the source states the planar rigid-motion kernel. Evidence: Zulehner Lemma 2.3 and Corollary 2.1, printed pp. 22–23, state the kernel/coercivity results in three dimensions; the assigned planar segment estimate is established by its local integral proof. The Guermond locator was also made precise as a velocity-space reference (§§53.1–53.2.1, pp. 391–394).
4. `def-signorini-elasticity-contact-model`: replaced the inaccurate Guermond source title with the linked chapter's actual title and described its Stokes velocity formulation accurately. Evidence: the PDF cover names Chapter 53, “Stokes equations: Basic ideas”; the elasticity energy form is separately cited to Zulehner, Chapter 2 §2.1, pp. 20–22.
5. `lem-signorini-partial-dirichlet-korn-coercivity`: specified that the cited Zulehner kernel/coercivity results are three-dimensional and described the Guermond form as the symmetric-gradient Stokes velocity form. Evidence: Zulehner Corollary 2.1 states its mixed-boundary result for domains in R3; Guermond §53.2.2, printed pp. 394–395, derives coercivity on its positive-measure Dirichlet velocity space via Korn.
6. `thm-signorini-continuous-contact-vi-wellposed`: changed the Falk locator from existence/uniqueness/stability to its actual approximation result. Evidence: Falk §2 Theorem 1, printed p. 965, is a general approximation error estimate; the introduction attributes existence and uniqueness to Lions–Stampacchia. Local suppliers establish this item's existence and stability claims.
7. `ex-signorini-one-dimensional-obstacle-free-boundary`: removed the claim that Andersson states a reaction convention. Evidence: Chapter 3 §3.1, Theorem 3.1, printed p. 27, gives existence/uniqueness; admissible variations on pp. 27–28 derive the VI. The example's reaction density is computed locally, including the absence of an interface atom.
8. `ex-signorini-contact-patch-test`: changed the Guermond locator from displacement to velocity spaces. Evidence: §§53.1–53.2.1, printed pp. 391–394, concern Stokes stress/velocity; the Zulehner reference supplies the linear-elasticity energy context. No mathematical claim or proof step changed, so the proof contracts remain applicable and no stale `verification.judge` record was present.

## Checks

For each of the seven changed items, `tools/reflow.mts` reported unchanged formatting and `tools/precheck.mts` passed; definitions returned the expected zero-proof result. The required batched layout check,
`node tools/proof-layout.mjs items/def-signorini-partial-trace-space.md items/lem-signorini-rigid-motion-controlled-by-dirichlet-segment.md items/def-signorini-elasticity-contact-model.md items/lem-signorini-partial-dirichlet-korn-coercivity.md items/thm-signorini-continuous-contact-vi-wellposed.md items/ex-signorini-one-dimensional-obstacle-free-boundary.md items/ex-signorini-contact-patch-test.md`,
reported 7 items, 13 steps, and 0 defects.

## Defects not edited

None. No withdrawal is proposed.

## Page verdicts

- A page: accept after the extension-domain hypothesis was made explicit in its summary. Its definitions, proofs, assumptions, and page summary are consistent.
- B page: accept. Its summary matches the four examples; no edits were needed.

## Blocker and coverage

No blocker. The assigned items and contracts, direct dependency statements, and the relevant current-run divergence-lift chain were reviewed. Published suppliers were checked at their relevant statements; their complete proof bodies were not re-audited.
