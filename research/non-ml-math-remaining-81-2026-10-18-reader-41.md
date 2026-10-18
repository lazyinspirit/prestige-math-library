# Step 3a reader report — batch 41

Run: `non-ml-math-remaining-81-2026-10-18`  
Scope: batch `41` only.

## Opened inventory

Assigned pages:

- `library/homological-algebra/dg-and-homological-algebra-foundations.md` (A)
- `library/homological-algebra/dg-and-homological-algebra-foundations-examples.md` (B)

Assigned items, reviewed in dependency order:

- `def-differential-graded-algebra`
- `def-differential-graded-module`
- `ex-polynomial-forms-on-the-line-form-a-differential-graded-algebra`
- `cex-a-degree-one-derivation-need-not-square-to-zero`
- `ex-a-differential-graded-algebra-is-its-own-left-dg-module`

Page prerequisites and cited page context opened: `algebraic-representation-and-tensor-symmetry-map`, `derived-categories`, `hochschild-homology-and-diagonal-koszul-resolutions`, and `chain-complexes-and-homology`. I also opened the representation definition and equivalence theorem named by the first page's reading route.

Published item suppliers opened for the assigned definitions and examples: `def-algebra-over-a-commutative-ring`, `def-cochain-complex-in-an-abelian-category`, `def-bimodule`, `def-left-and-right-modules`, `def-ring`, `def-group`, `def-commutative-ring`, `def-ring-homomorphism`, `def-abelian-category`, `def-chain-complex-in-an-abelian-category`, `thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism`, `thm-int-comm-ring`, `def-polynomial-ring-over-a-commutative-ring`, `thm-polynomial-ring-is-a-commutative-ring`, `lem-polynomial-operations-preserve-finite-support`, `lem-finite-sum-reindexing-and-fubini`, `def-generated-and-principal-ideals`, `thm-generated-ideal-description-in-a-commutative-ring`, `lem-ideal-criterion-and-intersections`, `def-quotient-ring`, `thm-quotient-ring-laws`, `thm-quotient-ring-multiplication-well-defined-iff-ideal`, `thm-quotient-group-laws`, `thm-rat-field`, and `lem-field-is-a-commutative-ring`.

The three proof-bearing items' entries in `research/non-ml-math-remaining-81-2026-10-18-batch-41.proof-contracts.json` were compared with their current Facts and proof steps. The batch notes, coverage record, and source-coverage record were treated as navigation/evidence only.

## Review and edits

- `def-differential-graded-algebra`: the degree convention, degree-zero product, square-zero cochain differential, signed Leibniz identity, and absence of a graded-commutativity requirement are coherent. The claim that the unit is closed follows by applying the rule to (1\cdot1) and cancelling in the additive group. Stacks Project §22.3, Definition 22.3.1, directly states the cohomological version and its sign rule. Keller §3.1, pp. 5–6, gives the differential/derivation identities and strict dg case; Stacks supplies the unital convention as well.
- `def-differential-graded-module`: the left sign is ((-1)^{|a|}), while the right sign is ((-1)^{|m|}); both match Stacks Project §22.11 and §22.4, Definition 22.4.1. The separate left/right conventions and commuting-action condition are sound.
- `ex-polynomial-forms-on-the-line-form-a-differential-graded-algebra`: the quotient has unique representatives (f+g\epsilon); the induced grading and multiplication are correct. The formal derivative is ℤ-linear, has degree (+1), squares to zero, and satisfies the signed Leibniz rule in each possible homogeneous degree pair. No local repair is needed. Its transitive supplier `thm-quotient-ring-multiplication-well-defined-iff-ideal` has a nonfatal omitted premise in its reverse-direction proof; see the uneditable finding below. The assigned example uses only the supplier's forward direction, which is proved in that item's step 1.1.
- `cex-a-degree-one-derivation-need-not-square-to-zero`: the word formula extends uniquely to a degree-one graded derivation, and δ²(x)=v is nonzero because (v) is a basis word. The witness refutes the universal assertion as stated.
- `ex-a-differential-graded-algebra-is-its-own-left-dg-module`: left multiplication is unital and degree-preserving; taking (d_M=d_A) gives the required square-zero differential and left Leibniz identity. The current contract correctly cites the square-zero axiom.

No assigned page prose or item was edited. No changed-item formatter, reflow, or precheck was required.

## Page verdicts

- `dg-and-homological-algebra-foundations`: pass. Its reading route accurately distinguishes the draft representation/module interface from logical dependencies and describes the published prerequisite pages with their scope boundaries. The local definitions and stated non-claims match the assigned items.
- `dg-and-homological-algebra-foundations-examples`: pass. Its three listed computations match the companion items and it does not claim that the models are general theorem suppliers.

## Uneditable finding

In published item `thm-quotient-ring-multiplication-well-defined-iff-ideal`, Proof step 2.1 says “Conversely” and compares products to infer (rj,jr\in J), but the given hypotheses only specify that (J) is an additive subgroup. The step needs the converse-direction assumption that the proposed coset multiplication is well-defined; step 1.1 establishes only the forward implication (ideal ⇒ well-defined). Adding “Suppose the rule is well-defined” closes the gap, after which equality of the cosets gives the absorption conditions. The omission is immediately recoverable from “Conversely,” so it is nonfatal. The assigned consumer `ex-polynomial-forms-on-the-line-form-a-differential-graded-algebra` reaches this theorem through `thm-quotient-ring-laws`, but uses only the independently established forward implication.

## Blocker

There is no batch-41 blocker. The live run status lists an unrelated `3a-collect` blocker: `collect-13` failed three times for batch 13.

## Coverage limitation

I checked the exact supplier statements and proof portions used by the assigned items, plus the page prerequisites and cited sign-convention sources. I did not independently re-audit every transitive proof in the full published dependency closure.
