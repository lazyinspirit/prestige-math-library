# Step 3a reader report — batch 1

Run: non-ml-math-remaining-81-2026-10-18

## Opened inventory

Assigned pages:

- library/group-theory/frattini-subgroups-and-the-burnside-basis-theorem.md (published A page).
- library/group-theory/frattini-subgroups-and-the-burnside-basis-theorem-examples.md (published B page).

I also opened the required page library/abstract-algebra/sylow-theorems-and-nilpotent-groups.md to check the A page's finite-p-group prerequisite. The current-run batch coverage, cross-batch dependency file, and all 31 proof contracts were consulted as evidence. The cross-batch dependency file is empty. No separate rendered evidence bundle was present in the run files, so I reviewed the current authored page and item files directly.

All 24 assigned A-page items were opened in supplier-before-consumer order:

- lem-frattini-subgroup-is-characteristic
- cor-generation-is-detected-modulo-the-frattini-subgroup
- def-elementary-abelian-p-group
- lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces
- def-fp-basis-of-an-elementary-abelian-p-group
- lem-finite-elementary-abelian-p-groups-have-bases-and-basis-extension
- def-pth-power-subgroup-of-a-group
- thm-frattini-quotient-is-the-largest-elementary-abelian-quotient
- thm-frattini-subgroup-formula-for-a-finite-p-group
- prop-frattini-subgroup-monotonicity-for-subgroups-of-finite-p-groups
- prop-frattini-subgroup-of-a-quotient-finite-p-group
- prop-frattini-subgroup-of-a-direct-product-of-finite-p-groups
- cor-frattini-subgroup-of-a-finite-two-group-is-the-square-subgroup
- cor-frattini-free-finite-p-groups-are-elementary-abelian
- def-minimal-generating-set-of-a-group
- def-generator-rank-of-a-finite-p-group
- thm-burnside-basis-theorem
- cor-minimal-generating-sets-of-a-finite-p-group-have-equal-size
- cor-every-nonfrattini-element-belongs-to-a-minimal-generating-set
- cor-nontrivial-finite-p-group-is-cyclic-iff-generator-rank-one
- cor-maximal-subgroups-of-a-finite-p-group-are-frattini-hyperplanes
- thm-automorphisms-act-linearly-on-the-frattini-quotient
- thm-hall-burnside-automorphism-theorem
- cor-kernel-of-the-action-on-the-frattini-quotient-is-a-p-group

All 12 assigned B-page items were opened:

- ex-frattini-subgroup-of-a-cyclic-p-group
- ex-frattini-subgroup-of-an-elementary-abelian-p-group
- ex-frattini-subgroups-of-dihedral-and-quaternion-groups
- ex-generator-rank-of-upper-unitriangular-groups
- ex-maximal-subgroups-as-frattini-hyperplanes
- cex-frattini-image-under-a-nonsurjective-homomorphism
- cex-fitting-centralizer-without-solvability
- ex-hall-burnside-detects-a-nontrivial-coprime-automorphism
- fs-the-frattini-subgroup-is-the-union-of-the-maximal-subgroups
- fs-the-frattini-subgroup-is-functorial-for-all-homomorphisms
- fs-every-minimal-generating-set-of-an-arbitrary-finite-group-has-the-same-size
- fs-centralizer-of-the-fitting-subgroup-is-always-contained-in-the-fitting-subgroup

For proof checking I opened the cited published statements and definitions actually used, including the Frattini and nongenerator definitions, correspondence and quotient results, finite-p-group nilpotence and maximal-subgroup results, Lagrange, the finite elementary-abelian vector-space and basis facts, prime factorization, commutator and product facts, cyclic-group order results, the dihedral and quaternion definitions, the Fitting/A5/S5 results, and Cauchy's and the fixed-point theorems.

## Edits and validation

No edits were made. Both pages and all 36 assigned item carriers currently have status published; the assignment does not authorize editing published content. The published B-page false statements and counterexample remain present for owner review. No proof contracts were changed, no judge records were altered, and reflow, precheck, and proof-layout were not run because no item changed.

## Uneditable findings

- frattini-subgroups-and-the-burnside-basis-theorem-examples, body after frontmatter: the published B page has no summary prose. The schema describes the page body as its summary. A concise examples-page summary is needed.
- cex-frattini-image-under-a-nonsurjective-homomorphism, title and Statement refuted: the universal quantifier ranges over all group homomorphisms, but the local Frattini definition is only for finite groups. The expression is undefined for maps with infinite source or target; restrict the scope to finite groups.
- thm-frattini-quotient-is-the-largest-elementary-abelian-quotient, Proof steps 1.1 and 2.1: each step infers “elementary abelian” from “abelian of exponent at most p” without establishing that the quotient is a finite p-group, as required by the local definition. Add the quotient-order/coset argument using Lagrange.
- thm-frattini-subgroup-formula-for-a-finite-p-group, Proof step 3.1: P/K is shown abelian of exponent p and then called elementary abelian, but the finite-p-group condition for this quotient is not established. Add the Lagrange argument that its order is a power of p.
- cor-maximal-subgroups-of-a-finite-p-group-are-frattini-hyperplanes, Proof steps 1.1–2.1: subgroups of the elementary-abelian quotient are treated as vector subspaces without stating why. Establish that each subgroup is closed under the canonical scalar action x↦x^a.
- thm-hall-burnside-automorphism-theorem, Proof step 2.1: the fixed-point theorem requires the coset's cardinality not to be divisible by q. The proof asserts that it is a p-power by Lagrange but does not establish that a coset has |Φ(P)| elements or that a divisor of p^n is a p-power. Supply the coset bijection and divisor argument.
- ex-frattini-subgroup-of-a-cyclic-p-group, Verification step 1.1: the cited cyclic power-order result gives the order of g^p, not directly the cardinality of ⟨g^p⟩. Cite or prove |⟨g^p⟩|=ord(g^p) and compute the gcd.
- ex-frattini-subgroup-of-a-cyclic-p-group, Verification step 2.1: the quotient order p is asserted without computing the index from the orders of P and Φ(P). Add the Lagrange/coset count before identifying gΦ(P) as a one-vector basis.
- ex-frattini-subgroup-of-an-elementary-abelian-p-group, Verification step 1.1: the proof asserts every nonzero vector has order p without showing that p kills each coordinate and no integer 1≤k<p kills a nonzero coordinate. Add this short coordinate argument.
- ex-generator-rank-of-upper-unitriangular-groups, Verification step 1.1: associativity is asserted as a direct substitution and the inverse formula is given without checking both products. Include the coordinate check or invoke associativity of matrices through the displayed multiplication-preserving bijection.
- ex-generator-rank-of-upper-unitriangular-groups, Verification step 2.1: the commutator formula is introduced as “a calculation” but the calculation is absent. Expand the products using the inverse from step 1.1.
- ex-generator-rank-of-upper-unitriangular-groups, Verification step 3.1: the power formula is introduced as an induction without a base case or recurrence. Give the recurrence for the third coordinate that yields binom(m,2)ab.

All proof-step omissions above are nonfatal because the specified closures are short. The missing finite-group scope in the counterexample is fatal to the current item statement.

## Page verdicts and blocker

- A page: the summary matches the reviewed Frattini, Burnside-basis, and automorphism results; no page defect found.
- B page: item inventory and examples are coherent, but the published page has no summary body; reported above.
- Blocker: none. Findings remain unedited because all affected carriers are published and outside the authorized edit scope.
