---
page: affine-current-algebras-virasoro-and-sugawara
title: "Affine Current Algebras, Virasoro, and Sugawara"
status: draft
requires:
  - algebraic-representation-and-tensor-symmetry-map
  - the-weyl-kac-character-formula
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

## Sugawara construction and proved regime

For dual bases of $B$, the normal-ordered modes are
$$L_m=\frac{1}{2(k+h^\vee)}\sum_a\sum_{r\in\mathbb Z}:J_{x_a}(r)J_{x^a}(m-r):,$$
with negative modes placed to the left of nonnegative modes. The normalized formula requires $k+h^\vee\ne0$; at $k=-h^\vee$ its denominator is zero and this formula is undefined. No claim is made here about a different renormalized construction at critical level.

The local Virasoro theorem proves the relations on an **irreducible compact positive-energy unitary affine-current module of nonnegative integral level** $k$:
$$c=\frac{k\dim\mathfrak g}{k+h^\vee}.$$
The proof checks the normal-order boundary, derives the current commutator, proves the scalar central cocycle, and calculates its coefficient. It does not prove the broader theorem for arbitrary restricted modules at arbitrary noncritical complex levels. That general module theorem is an owner escalation requiring a complete normal-ordering proof.

## Plan prerequisites and sources

The current plan requires [[the-weyl-kac-character-formula]] and `algebraic-representation-and-tensor-symmetry-map`. The Weyl–Kac theorem is present and its integrability and formal-character hypotheses do not enter the Sugawara proof. The exact supplier body for `algebraic-representation-and-tensor-symmetry-map` is absent from this workspace snapshot; the planned interface remains unresolved, so page placement and readiness are pending reconciliation.

The local arguments were compared with Wassermann, *Kac–Moody and Virasoro Algebras*, Chapter III §§2, 4–6; Ben-Zvi and Frenkel, *Geometric Realization of the Segal–Sugawara Construction*, §§3.1–3.4.1; Nozaradan, *Introduction to Vertex Algebras*, §2.7.1; Ginsparg, *Applied Conformal Field Theory*, §9.2; and Peter Haine, *The Segal–Sugawara Construction*, §§2.1–2.3 and 3.0.1–3.3.6. Haine states the broader positive-energy theorem but refers to Kac for the commutator proof. The unitary theorem’s proof is supplied locally rather than imported from a source abbreviation.

Companion: [[affine-current-algebras-virasoro-and-sugawara-examples]].
