---
page: affine-current-algebras-virasoro-and-sugawara
title: "Affine Current Algebras, Virasoro, and Sugawara"
status: draft
requires:
  - algebraic-representation-and-tensor-symmetry-map
  - the-weyl-kac-character-formula
  - real-forms-and-real-semisimple-lie-algebras
items:
  - def-positive-energy-affine-module
  - def-witt-algebra
  - lem-adjoint-casimir-is-positive-scalar
  - def-dual-coxeter-number-for-normalized-form
  - def-positive-energy-unitary-affine-module
  - lem-sugawara-quadratic-modes-well-defined
  - lem-witt-central-cocycles-are-cubic
  - lem-witt-cubic-cocycle-is-a-2-cocycle
  - def-sugawara-modes
  - def-virasoro-algebra
  - lem-irreducible-affine-module-has-irreducible-ground-space
  - def-virasoro-highest-weight-module
  - lem-sugawara-mode-one-commutator
  - lem-sugawara-commutator-on-all-restricted-modules
  - lem-sugawara-modes-act-on-currents
  - thm-sugawara-modes-satisfy-virasoro
examples: []
---

This page adds the Virasoro/current interface to the existing affine Lie algebra foundation. The loop central extension and residue cocycle remain supplied by [[def-untwisted-affine-central-extension]]; its central extension does not include the degree derivation. On an energy-graded module the grading defines $E|_{H_r}=rI$ and the mode shift gives $[E,x_n]=-n x_n$. This is the convention corresponding to $E=-d$ when the published full affine derivation $d$ with $[d,x_n]=n x_n$ is adjoined.

## Current and Virasoro conventions

The current bracket is
$$[x_m,y_n]=[x,y]_{m+n}+m\,\delta_{m+n,0}B(x,y)K,$$
with the invariant form $B$ normalized so long roots have square $2$. A representation at level $k$ has $K=kI$. Restrictedness means sufficiently large positive modes kill each fixed vector; it ensures each fixed normal-ordered quadratic mode sum is locally finite. It does not by itself supply an energy grading. The separate positive-energy unitary class specifies a nonnegative grading, compact mode adjoints, and the nonnegative integral level branch.

The Witt basis is $d_m=-z^{m+1}\partial_z$, with $[d_m,d_n]=(m-n)d_{m+n}$. Its cubic cocycle gives the Virasoro convention
$$[L_m,L_n]=(m-n)L_{m+n}+\frac{1}{12}(m^3-m)\delta_{m+n,0}C,$$
where $C$ is central and its scalar in a representation is the central charge. [[def-virasoro-highest-weight-module]] defines a highest-weight vector by annihilation by all positive Virasoro modes and an $L_0$ eigenvalue; it makes no irreducibility or unitarity claim.

## Sugawara construction on restricted modules

For dual bases of $B$, the normal-ordered modes are
$$L_m=\frac{1}{2(k+h^\vee)}\sum_a\sum_{r\in\mathbb Z}:J_{x_a}(r)J_{x^a}(m-r):,$$
with negative modes placed to the left of nonnegative modes. The normalized formula requires $k+h^\vee\ne0$; at $k=-h^\vee$ its denominator is zero and this formula is undefined. No claim is made here about a different renormalized construction at critical level.

The local Virasoro theorem proves the relations on **every restricted affine-current module of any complex level** $k\ne-h^\vee$:
$$c=\frac{k\dim\mathfrak g}{k+h^\vee}.$$
The proof first establishes the current commutator by a signed finite normal-order boundary calculation and adjoint Casimir contraction. It then computes the Virasoro commutator directly: the finite order correction is the sum of $s(m-s)$ over the signed interval between $0$ and $m$, giving $(m^3-m)/6$. Restrictedness makes all intermediate sums locally finite on each vector. No grading, inner product, irreducibility or integrability is needed. The separate compact unitary definitions and mode-one/ground-space lemmas retain their stated special regimes.

## Plan prerequisites and sources

The current plan requires [[the-weyl-kac-character-formula]] and [[algebraic-representation-and-tensor-symmetry-map]]. The Weyl–Kac theorem's integrability and formal-character hypotheses do not enter the Sugawara proof. The latter page is now present: its unital algebra action and module equivalence agree with composition of the current endomorphisms. Sugawara uses a single Lie representation and its operator products; it does not invoke a tensor-product module action or braiding. Its invariant tensor is the finite inverse tensor of $B$ in $\mathfrak g\otimes\mathfrak g$, mapped bilinearly to operator products.

The initial unitary arguments were compared by the native author with Wassermann, Ben-Zvi–Frenkel, Nozaradan and Ginsparg as recorded in the source evidence. The owner completion independently reads Haine's full *The Segal–Sugawara Construction* for the general formula and central normalization. Haine cites Kac–Raina for the general commutator; that citation does not supply the missing proof. The complete local cutoff and signed-boundary calculations above supply it. The library's restrictedness condition requires all sufficiently large modes to vanish on a fixed vector; Haine's Definition 3.0.1 is written with a weaker single-mode quantifier, which is not used here.

Companion: [[affine-current-algebras-virasoro-and-sugawara-examples]].
