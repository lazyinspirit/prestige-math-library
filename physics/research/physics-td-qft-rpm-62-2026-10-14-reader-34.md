# Step 3a reader report — batch 34

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: independent reader  
Scope: batch `34`

## Opened inventory

Instructions and scope records opened: `../CLAUDE.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md`, `briefs/reader.md`, and `research/physics-td-qft-rpm-62-2026-10-14-batch-34.pages.json`. The live physics autopilot status confirmed that the run is at Step 3a review and batch 34 had no reader artifact at review start. The current batch proof contracts were compared with the authored proofs; their listed citations, derivation steps and boundary cases matched the current item text. The finite-check entries state their limited scopes and were treated as checks, not proofs of the general results.

Assigned items were read in dependency order:

1. `items/def-qft-involutive-algebra-state.md`
2. `items/lem-qft-positive-state-cauchy-schwarz.md`
3. Published supplier `items/thm-completion-of-an-inner-product-space-is-hilbert.md` (a direct dependency of the assigned GNS theorem).
4. `items/thm-qft-algebraic-gns-domain.md`
5. `items/lem-qft-state-symmetry-implementer.md`
6. `items/cex-qft-nonregular-weyl-state.md`

Also opened `items/def-countable-choice.md` to check that the GNS theorem's stated `AC_ω` assumption agrees with the published completion supplier's Countable Choice hypothesis.

Assigned pages opened:

- `library/quantum-field-theory-mathematics/qft-mc01.md` (A page)
- `library/quantum-field-theory-mathematics/qft-mc01-examples.md` (B page)

## Mathematical and source review

- The algebraic state definition gives the complex vector space, bilinear associative product, unit, conjugate-linear involution and positivity/normalization conditions. It does not introduce a norm or completion.
- The positive-state lemma's polarization, positive- and zero-norm Cauchy–Schwarz cases, radical characterization, linearity of the null space and left-ideal proof are valid. In the left-ideal step, applying Cauchy–Schwarz to `a` and `c*ca` gives `ω((ca)*(ca))=0`.
- The published Hilbert-completion supplier's statement and hypotheses match the GNS use: its conclusion applies to the quotient inner-product space under Countable Choice. Its Countable Choice hypothesis matches `def-countable-choice` and the assigned theorem's explicit `AC_ω` formulation.
- The GNS construction is sound. The quotient form is representative-independent and positive definite; the left ideal makes left multiplication well-defined; the adjoint identity places the common domain in each operator-adjoint domain; and the dense-domain graph criterion proves closability. The cyclic vector recovers the state. The uniqueness isometry is well-defined from equality of the represented state, extends onto the second Hilbert space by dense range, and intertwines on the common domains. The stated conclusion does not claim essential self-adjointness.
- For the state-preserving action lemma, invariance gives quotient isometries and the action law gives a unitary representation. The coefficient-continuity hypothesis gives continuity at the identity on the dense quotient, and unitarity extends it to all vectors and all group points. The covariance identity is valid on the common invariant domain.
- The Weyl counterexample defines the finite-support algebra and functional explicitly. Its positivity computation, GNS orthonormal family, unitary action, discontinuous cyclic-vector orbit for every nonzero direction, and density argument ruling out a dense norm-differentiability domain are valid. Its scope remains algebraic and makes no physical-preparation claim.

Source sections were checked directly:

- Konrad Schmüdgen, *An Invitation to Unbounded Representations of *-Algebras on Hilbert Space* (Springer, 2020), [DOI](https://doi.org/10.1007/978-3-030-46366-3): Definition 2.32 and Proposition 2.33 (printed pp. 20–21), Lemma 4.35 and Proposition 4.36 (printed pp. 78–79), and Theorem 4.38 (printed pp. 79–80). The statements support the algebraic state convention, positive-state Cauchy–Schwarz, null left ideal, quotient pairing, common-domain representation, cyclic recovery and uniqueness. The local proofs supply the assigned proof details and the explicit Countable Choice condition.
- Christopher J. Fewster and Kasia Rejzner, *Algebraic Quantum Field Theory—an introduction*, [arXiv HTML](https://arxiv.org/html/1904.04051): §2.2 Definition 2 (state and star-algebra conventions), §2.3 Definition 8 and Theorem 10 with its construction (printed pp. 7–9), Theorem 23 and proof (printed pp. 22–23), and §4.2 Weyl relations and Exercise 17 (printed p. 18). These citations are accurate for the portions they support; the assigned items prove their additional continuity and operator-domain claims locally.

## Edits

Rewrote the summary prose of assigned A page `qft-mc01`. The revision states the state and sesquilinear-form content explicitly, summarizes the quotient and common-domain construction, gives the exact coefficient-continuity condition for strong continuity, and narrows the earlier general sentence about symmetry and essential self-adjointness to the actual GNS conclusion: for `a=a*`, the represented operator is symmetric on the common domain, while this construction does not establish that its closure is self-adjoint. Evidence is the definitions and conclusions in `def-qft-involutive-algebra-state`, `lem-qft-positive-state-cauchy-schwarz`, `thm-qft-algebraic-gns-domain`, and `lem-qft-state-symmetry-implementer`. No item was edited, so no item proof contract or judge record changed and item reflow, precheck and proof-layout were not applicable.

## Page verdicts

- `qft-mc01`: pass after the summary revision; its claims now track the assigned item conclusions and hypotheses.
- `qft-mc01-examples`: one nonfatal wording defect remains for owner disposition. The summary uses “regularity” without defining it. The assigned counterexample defines strong continuity as norm continuity of each GNS orbit and demonstrates a discontinuous orbit, but it does not state an explicit definition equating Weyl-representation “regularity” with strong continuity of every one-parameter orbit. The B page is outside reader edit scope; this is reported in the findings JSON.

## Blocker and coverage limit

No blocker prevented review of the five assigned items, both pages, the published direct GNS-completion supplier, or the cited source sections listed above. The published completion theorem was checked as the exact supplier used by the assigned consumer; I did not independently audit every item in that published theorem's own prerequisite closure.
