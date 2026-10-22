# Step 3a reader report — batch 63

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader (`reader-63`)  
Scope: batch `63` only

## Opened inventory

Assigned pages, read in full:

- `library/quantum-field-theory-mathematics/qftx-anomaly-cocycles.md`
- `library/quantum-field-theory-mathematics/qftx-anomaly-cocycles-examples.md`

Assigned items, read in full and in their within-batch order:

- `items/def-qftx-loop-current-cocycle.md`
- `items/prop-qftx-loop-cocycle-jacobi.md`
- `items/def-qftx-chiral-anomaly-interface.md`
- `items/ex-qftx-vectorlike-charge-cancellation.md`

The current batch manifest, proof contracts, cross-batch-dependency record, and batch notes were also read as navigation and evidence, not as review verdicts.

All 23 draft items in the recursive dependency closure were opened. Besides the four assigned items, these were `def-complexification-of-a-real-lie-algebra`, `prop-qftx-anomaly-obstruction`, `def-qftx-brst-relative-local-cohomology`, `def-qftx-abelian-local-brst`, `lem-qftx-brst-nilpotence-doublets`, `thm-qftx-scalar-eg-induction`, `def-qftx-off-shell-local-polynomial-functionals`, `def-qftx-distributions-on-smooth-manifolds`, `def-qftx-wavefront-hadamard`, `def-qftx-local-wavefront-set`, `lem-qftx-local-polynomial-functionals-are-microcausal`, `def-qftx-polynomial-microcausal-functionals`, `lem-qftx-balanced-local-functional-representatives`, `def-qftx-local-time-ordered-system`, `lem-qftx-microcausal-star-product`, `thm-qftx-wavefront-product`, `lem-qftx-wavefront-chart-invariance`, `lem-qftx-finite-graph-scaling-degree`, `lem-qftx-transverse-center-scaling-bound`, and `lem-qftx-finite-lorentz-cocycle-splitting`.

Published prerequisite items opened for the claims and constructions checked include `def-complexification-of-a-real-lie-algebra`, `def-lie-algebra-over-a-field`, `def-tensor-product-of-modules-by-generators-and-relations`, `def-qft-qed-gauge-data`, `def-axiom-of-choice`, `def-countable-choice`, `thm-choice-implies-dependent-implies-countable-choice`, `def-qft-distribution-scaling-degree`, `thm-qft-finite-scaling-degree-extension`, `prop-qft-local-counterterm-jet-classification`, `thm-distributions-supported-at-one-point`, and `lem-test-function-cutoffs-and-euclidean-localization`. I also opened the published `real-forms-and-real-semisimple-lie-algebras` page and the draft `qftx-bv-brst` prerequisite page.

## Mathematical and source review

For `def-qftx-loop-current-cocycle` and `prop-qftx-loop-cocycle-jacobi`, the hypotheses match the proof: smooth periodic loops give the endpoint cancellation in integration by parts; symmetry and invariance of `κ` give the displayed derivative identity; the cyclic identity supplies the central-coordinate Jacobi component; and the inclusion and projection give the stated exact sequence. The TikZcd exact-sequence diagram has the correct objects, injection, projection, and directions. The proof does not rely on the diagram.

The cited loop-algebra sources were checked at their stated passages. Khesin–Wendt, *The Geometry of Infinite-Dimensional Groups*, Chapter II §1.1, Definition 1.1 and Definition/Proposition 1.3 with its proof (printed pp. 48–49; PDF pp. 59–60), defines smooth circle loops with pointwise bracket and gives the integral cocycle and central extension. Ros Camacho, *Kac-Moody Algebras*, §6, Definition 25 and equations (50)–(55) (PDF pp. 7–9), treats Laurent-polynomial loops and the residue cocycle; the local proof in the assigned proposition supplies the smooth-loop argument. The references are scoped accordingly.

For `prop-qftx-anomaly-obstruction`, the order-`n` coefficient of `W_hbar^2 X=0` is `s A=0`; the quotient definition then gives relative closedness. The two directions of the counterterm equivalence follow from the stated quotient and the admissibility hypothesis on `K_n^{0,4}`. The definition and lemma fixing the Abelian jet differential support the nilpotence and anticommutation assumptions used by this argument.

The scalar time-ordering theorem and its draft prerequisites were checked against their current statements and arguments, rather than the old escalated decisions. The assigned anomaly interface reports that theorem as draft and retains its scalar data, AC/CC, locality, formal nilpotence, and admissible-counterterm conditions. It explicitly limits the BRST statement to the specified Abelian jet complex and does not identify `d^{abc}` with an anomaly or descent class. The current supplier proposition likewise asserts only the conditional obstruction result and does not prove a quantum action principle. I found no defect in this conditional reliance.

The published extension and counterterm suppliers were opened. *Perturbative Algebraic Quantum Field Theory*, §7, Theorem 7.2 states exact-scaling-degree extension of a finite-scaling-degree punctured distribution and the bounded delta-derivative ambiguity; the local scaling-degree and point-support items give matching hypotheses for the graph argument. The assigned interface describes the scalar theorem’s AC/CC and local-scheme assumptions and its nonclaims accurately.

For `def-qftx-chiral-anomaly-interface` and `ex-qftx-vectorlike-charge-cancellation`, the representation spaces, Lie algebra, complexification, generator normalization, trace convention, and finite sums are explicit. With the no-half anticommutator, `d=2(q^3+(-q)^3)=0`; the separately defined linear sum is `q+(-q)=0`. These are algebraic trace calculations only. The prose explicitly withholds an identification with a regulated physical anomaly, an all-orders result, and a global or nonperturbative conclusion.

The anomaly-source locators were checked: Bilal, *Lectures on Anomalies*, §7.1 eqs. (7.1)–(7.8) gives the symmetrized representation trace and chirality/conjugate-representation discussion; §11.3.2 eqs. (11.29)–(11.31) gives the separate four-dimensional mixed gauge-gravitational trace term. The UT Austin *Anomalies and Differential Forms* notes, “Non Abelian Anomaly in 4 Dimensions,” eqs. (54)–(57), state the left-minus-right chiral trace. Barnich–Brandt–Henneaux, §12.3, treats `H^{1,n}(s|d)` anomaly consistency classes in its Yang–Mills setting. Zinn-Justin, §1 (PDF pp. 2–3), explicitly limits those notes to local anomalies and notes the separate existence of global nonperturbative anomalies. The assigned text preserves those scope differences and does not import a physical theorem from these references.

## Edits and remaining defects

No carrier was edited. No confirmed defect remains in the assigned items, diagrams, pages, or reviewed draft dependency chain. No finding is routed for another batch or a published dependency.

## Page verdicts

- `qftx-anomaly-cocycles` — pass. Its ordered A-page item list matches the assigned manifest; its page prerequisites include the BRST page and the published home of the complexification supplier. The compact-layout run expects frontmatter-only page carriers, so the empty body is not a missing-summary defect.
- `qftx-anomaly-cocycles-examples` — pass. It lists the assigned example on the B page and requires the A page. Its empty body is likewise consistent with the active compact-layout policy.

## Blocker and coverage limit

No blocker prevents this scoped review. The recursive closure contains 1,355 published items in addition to the 23 draft items opened above. I did not independently re-audit every published item or every direct published supplier in that closure; I checked key published suppliers and the exact source passages material to the claims discussed above. This limit is not evidence of absence of defects in the remaining published prerequisites.
