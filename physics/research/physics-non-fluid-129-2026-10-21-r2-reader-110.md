# Step 3a reader report — batch 110

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader (`reader-110`)  
Scope: `qsmx-transport-and-drude` and its examples companion.

## Instructions and scope

Read the workspace entry instructions and the assigned reader brief, including the physics schema, workflow, and physics content model. This is a read-only reader assignment. No item or page carrier was edited; the only files authored for this assignment are this report and the routed findings JSON.

## Opened inventory

Assigned pages:

- `library/quantum-statistical-mechanics/qsmx-transport-and-drude.md` (A page): draft physics page; its item inventory matches the manifest. Its empty body is consistent with this run's compact statement-first layout. The declared prerequisites are `qsm-dt-response`, `qsmx-integrable-transfer`, and `qsmx-lieb-robinson-spectral-flow`.
- `library/quantum-statistical-mechanics/qsmx-transport-and-drude-examples.md` (B page): draft physics page; its example inventory and `requires` edge to the A page match the manifest. Its empty body is consistent with the compact layout.

Assigned items, reviewed in dependency order:

1. `def-qsmx-lattice-current-and-limits`
2. `lem-qsmx-lattice-current-continuity`
3. `thm-qsmx-finite-mazur-bound`
4. `thm-qsmx-conditional-diffusive-green-kubo`
5. `cex-qsmx-dc-order-of-limits`

Opened relevant mathematical suppliers: `thm-qsm-dt-finite-kubo`, `thm-qsm-dt-finite-unitary`, `lem-qsm-finite-gibbs-kms`, `lem-qsm-matrix-state-calculus`, `lem-qsm-dt-finite-matrix-trace-ideal`, `lem-qsm-dt-banach-volterra-dyson`, `thm-qsm-dt-cesaro-dephasing`, `thm-qsm-dt-variance-green-kubo`, `thm-qsm-dt-algebraic-kubo`, `lem-qsm-dt-stationary-variance-integral-identity`, `lem-qsm-finite-matrix-cstar-and-state-duality`, `thm-dominated-convergence`, `def-countable-choice`, `lem-cm-integral-and-ftc-for-continuous-normed-space-curves`, `thm-riemann-fubini-on-product-rectangles`, `thm-substitution`, `thm-ftc-second-part`, and `thm-ftc-first-part`. I also opened the three declared prerequisite page carriers named above.

The current batch proof-contract file was consulted for the exact local proof-step map and supplier statements, then checked against current source carriers. The batch notes and manifest were used only as navigation and context, not as verdicts.

## Mathematical and source review

- The finite-volume definition specifies open and periodic bond sets, local commutation hypotheses, self-adjoint local terms, units, boundary conventions, Gibbs state, and connected symmetrized correlation. Its current/correlation definitions are coherent. The MIT source locator in its references is inaccurate; see the finding below.
- The continuity lemma's commutator signs, endpoint conventions, telescoping conservation argument, and orientation diagram agree with the definition.
- The finite Mazur theorem's faithful weighted inner product, finite energy-block Cesàro limit, Gram-matrix projection bound, and geometric projection diagram are consistent. It does not claim a thermodynamic Drude weight.
- The conditional variance theorem separates its classical and quantum hypotheses, states the relevant integrability and limit qualifications, and does not turn the coefficient into an empirical diffusion constant. Its cited Riemann-Fubini, substitution, and FTC results support the classical calculation. Step 3.1 omits the Riemann-integral linearity operation used to rearrange the integration-by-parts identity; this is an immediately closable, nonfatal proof omission. Its quantum branch reaches a published covariance-identity supplier whose proof has a separate omitted two-variable integration step.
- The three-site ring calculation correctly gives a conserved nonzero current, zero thermal mean, positive variance, and constant finite-volume correlation. The example's charge operators, however, are written as dimensionless projections while the current definition assigns charge unit `Q`; the resulting witness and its stated variance omit the required charge factors.
- All TikZ diagrams in the assigned items were checked. The continuity arrows, projection geometry, and three-site ring orientation match their accompanying statements. The proofs do not rely on the diagrams.

Source checks relevant to these judgments:

- Sirker, *Transport in one-dimensional integrable quantum systems*, §2, equations (2.1)–(2.4), gives the XXZ spin-density continuity equation and its oriented spin current. Sections 2.1–2.2 give the finite spectral time-average/Mazur discussion and distinguish finite from thermodynamic limit orders. [PDF](https://arxiv.org/pdf/1910.12155), printed pp. 2–8.
- MIT OpenCourseWare 22.103, Lecture 3, equations (3.1)–(3.8), derives a fluid-particle mean-square displacement formula from the **velocity autocorrelation** and discusses the diffusion limit. It does not state a lattice charge-current correlation. [PDF](https://ocw.mit.edu/courses/22-103-microscopic-theory-of-transport-fall-2003/42a7a0ddcb94eb23f6c096ae04da0162_lec3.pdf), pp. 1–3.
- Naaijkens, *Quantum Spin Systems on Infinite Lattices*, Lemma 3.3.11 and Theorem 3.3.12, gives the finite-range interaction hypotheses and the strongly continuous automorphism group result used by the quantum variance supplier. [PDF](https://arxiv.org/pdf/1311.2717), printed pp. 68–71.

## Findings not editable by this role

1. `lem-qsm-dt-stationary-variance-integral-identity`, Proof step 2.1: the proof splits a two-variable Riemann integral over the time square into triangle slices and asserts the slice-length formula. Its declared prerequisites are the C*-algebra definition and the one-variable norm-Riemann integral lemma; neither supplies the required product-region Fubini/change-of-order result. The assigned conditional theorem reaches this published item through `thm-qsm-dt-variance-green-kubo`. A product-region Fubini result with a proved triangular cutoff integrability argument, or a local grid proof of the slice formula, is needed. The identity is true and the omission is locally closable, so this is recorded as nonfatal.
2. `def-qsmx-lattice-current-and-limits`, MIT source locator (the second `sources.references` entry): it calls equations (3.1)–(3.8) stationary “current correlations.” The source instead derives the velocity-autocorrelation formula for a fluid particle's displacement. This is a locator/source-description defect; the source remains relevant as a classical correlation analogy.
3. `thm-qsmx-conditional-diffusive-green-kubo`, Proof step 3.1: applying FTC II to `(tF(t))' = F(t)+tC(t)` and rearranging to the displayed weighted integral uses linearity/additivity of the real Riemann integral, which is not named in the cited fact at that step. Cite the linearity result or show the integral rearrangement. This is an immediately closable, nonfatal omission.
4. `cex-qsmx-dc-order-of-limits`, Facts & Assumptions [A1] and Counterexample steps 1.1–2.1: `q_j=|j><j|` gives dimensionless projections, whereas the definition requires each charge observable to carry unit `Q`. Consequently the computed current and `c=omega(J_3^2)` omit `Q` and `Q^2`. To make the witness satisfy the definition, include a fixed charge scale in each `q_j` (and carry its square into the variance) or state an explicit charge-unit normalization. As written, this is a defective witness.

## Page verdicts

- `qsmx-transport-and-drude`: frontmatter, item placement, and declared page prerequisites match the manifest; the empty body is expected. The page is not mathematically clean yet because its definition contains the inaccurate MIT locator, its conditional theorem has the noted proof omission, and that theorem reaches the published covariance-identity proof gap.
- `qsmx-transport-and-drude-examples`: frontmatter and item placement match the manifest; the empty body is expected. The page is not mathematically clean yet because its only example omits the charge scale required by its supplier definition.

## Edits, checks, and blocker

No assigned item or page was edited because this is a read-only reader role. No item formatter or validator was run because no item was changed. The report and findings JSON are the only assignment outputs. There is no review-process blocker; the published supplier finding and assigned-carrier findings require owner/repair disposition under the ordinary workflow.

Coverage limit: the assigned pages, all five assigned items, their relevant direct suppliers, the stated proof-contract steps, and the cited source passages listed above were inspected. I did not re-audit the full transitive closure of every foundational mathematical supplier or retrieve all older cited source books; no finding here claims that coverage.
