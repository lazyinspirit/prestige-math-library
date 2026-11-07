---
page: formal-deformation-quantization-and-hochschild-control
title: "Formal Deformation Quantization and Hochschild Obstructions"
status: published
items:
  - def-formal-associative-deformation-of-a-commutative-algebra
  - def-general-poisson-bivector-and-bracket
  - def-hh-cochain-complex-and-gerstenhaber-bracket
  - prop-coordinate-jacobi-and-schouten-criterion-for-poisson-bivectors
  - prop-first-order-star-commutator-is-a-poisson-bracket
  - prop-hochschild-cochains-form-a-differential-graded-lie-algebra
  - def-formal-star-product-on-a-poisson-manifold
  - thm-higher-order-hochschild-obstruction-class
  - def-formal-equivalence-of-star-products
  - prop-formal-equivalence-changes-first-order-by-a-hochschild-coboundary
examples: []
---

This page constructs the local algebraic framework for differential star
products on possibly degenerate Poisson manifolds. It defines the bivector
bracket and its coordinate Jacobi/Schouten criterion, fixes a real formal
parameter convention, proves the first-order Poisson condition, and derives
the Hochschild cochain obstruction to extending a partial product by one
order. Every obstruction class is taken in the normalized multidifferential
cochain subcomplex required to preserve the unit and differential order.

The library's symplectic convention is
$\iota_{X_H}\omega=dH$ and $\{F,G\}=X_G(F)$, so for
$\omega=dq\wedge dp$ it gives
$\{F,G\}=F_qG_p-F_pG_q$. The star-product normalization here is
$B_1(f,g)-B_1(g,f)=\{f,g\}_\pi$; the formal parameter is real and no
factor of $i$ is implicit.

## Local construction

- [[def-general-poisson-bivector-and-bracket]] gives the coordinate data for
  a smooth bivector and defines the real Poisson-algebra axioms.
- [[prop-coordinate-jacobi-and-schouten-criterion-for-poisson-bivectors]]
  proves the local brackets glue and identifies Jacobi with vanishing of the
  Schouten self-bracket. Degeneracy is allowed.
- [[def-formal-associative-deformation-of-a-commutative-algebra]] defines the
  coefficientwise formal product on $A\llbracket\hbar\rrbracket$.
- [[def-formal-star-product-on-a-poisson-manifold]] specializes this to
  differential star products with a unit and the stated first-order bracket.
- [[prop-first-order-star-commutator-is-a-poisson-bracket]] proves that the
  first-order skew part of any associative deformation is a Poisson-algebra
  bracket.

## Hochschild control

The cochain complex, signs, and insertion convention are fixed in
[[def-hh-cochain-complex-and-gerstenhaber-bracket]]. The next proposition
proves the shifted cochains form a differential graded Lie algebra and that
the normalized multidifferential subspace is closed under its operations:
[[prop-hochschild-cochains-form-a-differential-graded-lie-algebra]].

[[thm-higher-order-hochschild-obstruction-class]] identifies the precise
order-$n$ obstruction $O_n$, proves it is a normalized differential
Hochschild 3-cocycle, and shows that its class vanishes exactly when a
normalized differential coefficient extends the partial product through
that order. This statement does not imply that later obstruction classes
vanish.

## Gauge equivalence

[[def-formal-equivalence-of-star-products]] defines equivalence by an
invertible formal differential change of variables that preserves the unit.
[[prop-formal-equivalence-changes-first-order-by-a-hochschild-coboundary]]
proves the first cochain changes by a Hochschild coboundary and its skew part
is unchanged. No full classification of star products is claimed.

The diagram records the definition: $T$ maps the $\star'$-algebra to
the $\star$-algebra and is multiplicative by the displayed gauge formula.
It summarizes the definition only; the proofs above use coefficient
calculations.

```tikzcd
\mathcal A_{\hbar}^{\star'}\times\mathcal A_{\hbar}^{\star'}
  \arrow[r,"\star'"] \arrow[d,"T\times T"'] &
\mathcal A_{\hbar}^{\star'} \arrow[d,"T"] \\
\mathcal A_{\hbar}^{\star}\times\mathcal A_{\hbar}^{\star}
  \arrow[r,"\star"] & \mathcal A_{\hbar}^{\star}
```

## Boundaries and sources

The formal parameter is not assigned a numerical value, so no analytic
convergence or operator quantization is asserted. Kontsevich's formality
theorem is not used as a supplier: its graph formula, compactified
configuration spaces, and boundary-stratum/Stokes proof remain a separate
deferred authoring target, not a logical premise here. The existing
symplectic Poisson theorem is only the nondegenerate special case; the
published Hochschild page concerns homology and does not supply this page's
cochain bracket or obstruction proof. The physics-tree regular quadratic
Wick example remains model-specific context, not a logical supplier.

Full-text treatments inspected for this A page include [Witherspoon,
*Hochschild Cohomology for Algebras*, Chapter 5](https://people.tamu.edu/~sjw/pub/gsm204.pdf),
[Moshayedi, *Lectures on Symplectic Geometry, Poisson Geometry, Deformation
Quantization and Quantum Field Theory*](https://arxiv.org/pdf/2012.14662), and
[Kontsevich, *Deformation Quantization of Poisson Manifolds, I*](https://arxiv.org/pdf/q-alg/9709040).
The exact locators, item support, source limitations, and retrieval evidence
are in the [batch source coverage](../../research/non-ml-math-remaining-81-2026-10-18-batch-42.source-coverage.json).

Companion: [[formal-deformation-quantization-and-hochschild-control-examples]].
