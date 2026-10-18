---
page: poisson-algebras-and-hamiltonian-representations-examples
title: "Poisson Algebras, Symplectic Brackets, and Hamiltonian Actions: Examples and Counterexamples"
status: draft
items: []
examples:
  - ex-quadratic-sl2-comoment-action-on-the-symplectic-plane
---

This companion includes the newly computed quadratic $\mathfrak{sl}_2(\mathbb R)$ comoment action and routes readers to existing canonical computations and boundary examples. The new carrier is homed here; the older linked items retain their existing homes and proofs.

Companion: [[poisson-algebras-and-hamiltonian-representations]].

## Worked computations

- [[ex-quadratic-sl2-comoment-action-on-the-symplectic-plane]] defines the real traceless-matrix Lie algebra explicitly, verifies its quadratic comoment map and observable brackets, and checks the induced commutators on an arbitrary smooth function.
- [[ex-poisson-brackets-in-canonical-coordinates]] computes the canonical brackets $\{q^i,q^j\}=0$, $\{p_i,p_j\}=0$, and $\{q^i,p_j\}=\delta^i_j$ from the library coordinate formula.
- [[ex-circle-rotation-on-complex-n-space-and-its-quadratic-moment-map]] checks the component moment equation for scalar circle rotation on $\mathbb C^n$ and obtains the sign-sensitive moment map $\mu(z)=-\tfrac12|z|^2+c$ in the library fundamental-field convention.
- [[ex-angular-momentum-as-the-moment-map-for-rotations-of-a-cotangent-bundle]] derives $\mu(q,p)=q\times p$ for the cotangent lift of the $SO(3)$ action on $\mathbb R^3$ and checks equivariance under the coadjoint action.

## Failure cases and boundary conditions

- [[fs-an-infinitesimal-moment-map-is-automatically-equivariant]] refutes the claim that the component moment equations alone force equivariance: the counterexample uses translations of $\mathbb R^2$ with an abelian group and a nonconstant infinitesimal moment map.
- [[fs-every-symplectic-action-is-hamiltonian]] refutes the claim that every symplectic action admits a moment map: the translation action on the symplectic torus would require a global primitive of $dy$, but that one-form has nonzero period.

These carriers supply their own hypotheses, sign conventions, calculations, and proofs. In particular, the examples do not remove the connected-group condition in [[prop-equivariance-is-equivalent-to-the-moment-map-poisson-bracket-identity]] or the distinction between a symplectic action and a Hamiltonian action.
