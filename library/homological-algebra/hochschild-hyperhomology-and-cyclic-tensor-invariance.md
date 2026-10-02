---
page: hochschild-hyperhomology-and-cyclic-tensor-invariance
title: "Hochschild Hyperhomology and Cyclic Tensor Invariance"
status: draft
order: 727
category: homological-algebra
companion: hochschild-hyperhomology-and-cyclic-tensor-invariance-examples
requires:
  - hochschild-homology-and-diagonal-koszul-resolutions
  - bounded-bimodule-complexes-and-derived-tensor
  - double-complexes-exact-couples-and-convergence
items:
  - def-hochschild-hyperhomology-of-a-bimodule-complex
  - def-termwise-hochschild-homology-complex-and-iterated-homology
  - lem-double-bar-comparison-for-cyclic-bimodule-tensor-products
  - thm-hochschild-hyperhomology-is-resolution-independent
  - thm-termwise-hochschild-cyclicity-for-bounded-projective-bimodule-complexes
  - thm-termwise-hochschild-homology-respects-bimodule-chain-homotopies
  - thm-termwise-hochschild-spectral-sequence-for-a-bounded-bimodule-complex
  - thm-derived-cyclicity-of-hochschild-hyperhomology
examples: []
---

Starting from the Hochschild chain complex of a bimodule, this page records two
ways to apply Hochschild homology to a bounded cochain complex. The total
construction uses
$$T^n(A,F)=\bigoplus_{i-j=n,\ j\geq0} C_j(A,F^i),\qquad D=d_F+(-1)^i b,$$
where the bounded coefficient direction makes each total degree a finite
direct sum. Internal degrees are preserved, and the Hochschild boundary uses
the ordinary face signs without additional signs from internal grading. The
separate cochain and Hochschild indices define a filtration; they are not, in
general, separate gradings on hyperhomology. The termwise construction instead
forms the cochain complex $HH_j(A,F^\bullet)$ for each $j$ and then takes its
cohomology. It is invariant under bimodule chain homotopy, while no invariance
under arbitrary quasi-isomorphisms is claimed for these iterated groups.

The draft resolution-comparison items express the total construction through a
reindexed two-sided bar resolution and record a resolution-independence claim
under AC. A decreasing filtration by the coefficient degree gives the
cohomological spectral sequence with
$$E_1^{i,-j}=HH_j(A,F^i),\qquad E_2^{i,-j}=H^i\!\left(HH_j(A,F^\bullet)\right),$$
abutting to the finite image filtration on
$HH^{\mathrm{hyper},i-j}(A,F)$. Higher differentials and extension problems
may occur; the second page is not asserted to equal hyperhomology in general.

The cyclic comparison begins with a double-bar construction for an
$(A,B)$-bimodule finite projective on the right over $B$ and a $(B,A)$-bimodule
finite projective on the right over $A$. Under AC, the draft lemma compares the
two bar resolutions by cyclic rotation, with a homological Koszul sign, and
states naturality and involutivity up to homotopy. For bounded complexes with
the same termwise right-projectivity assumptions, the page records separate
termwise cyclicity and derived cyclicity claims. Ordinary signed tensor
totalizations represent the indicated derived tensor products, and the
complex-degree rotation signs are kept separate from internal grading. No
left-projectivity hypothesis is part of these statements.

The resolution and double-bar sign comparisons in these draft items have proof
questions recorded in the owner repair report. This page restores their
declared homes; it does not certify those proofs.
