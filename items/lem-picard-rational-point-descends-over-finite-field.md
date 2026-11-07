---
id: lem-picard-rational-point-descends-over-finite-field
kind: lemma
title: "A rational Picard point of a curve over a finite field is represented by a line bundle"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-picard-fppf-sheaf-of-smooth-proper-curve
  - thm-brauer-group-finite-field-zero
  - thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients
  - thm-global-functions-proper-integral-variety
  - def-brauer-group-as-galois-cohomology
  - lem-faithfully-flat-effective-descent-of-modules-and-algebras
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite
  - thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group
justified_by: []
proof_strategy: descent
axiom_use: AC is inherited from finite-field Brauer vanishing; DC and the supplied-resolution cohomology convention are inherited from continuous profinite cohomology. The cocycle argument makes only finite choices.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, Appendix A.9"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
    - title: "Bjorn Poonen, Rational Points on Varieties, §5.7.1"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
verification: {}
---

## Statement

Assume AC and DC.

Let $k$ be a finite field and let $C/k$ be a smooth proper geometrically
integral curve. If a $k$-rational point of the Picard scheme of $C$ is given,
then its class is represented by a line bundle on $C$ defined over $k$.

## Statement references

[[def-picard-fppf-sheaf-of-smooth-proper-curve]]

[[thm-brauer-group-finite-field-zero]]

[[lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite]]

[[thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group]]

[Poonen, *Rational Points on Varieties*, §5.7.1, pp. 139–141](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

## Facts & Assumptions

**Given:** A finite field $k$, a smooth proper geometrically integral curve
$C/k$, and a $k$-point $P$ of its Picard scheme.

[F1] A point of the fppf Picard sheaf is fppf-locally represented by a line
bundle, with two representatives defining the same point exactly when they
differ by a line bundle pulled back from the base.
([[def-picard-fppf-sheaf-of-smooth-proper-curve]],
[[lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite]],
[[thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group]])

[F2] For every field extension $M/k$, the global functions on $C_M$ are
$H^0(C_M,\mathcal O_{C_M})=M$, since $C_M$ remains proper and geometrically
integral. ([[thm-global-functions-proper-integral-variety]])

[F3] The obstruction group is
$H^2(\operatorname{Gal}(k_s/k),k_s^\times)=\operatorname{Br}(k)=0$.
([[thm-brauer-group-finite-field-zero]],
[[def-brauer-group-as-galois-cohomology]])

[F4] Continuous cohomology in degree two with discrete coefficients is the
direct limit of finite-quotient cohomology over finite Galois extensions.
([[thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients]])

[F5] A line bundle with effective faithfully flat descent data descends to a
line bundle on the base. ([[lem-faithfully-flat-effective-descent-of-modules-and-algebras]])

[A1] AC is assumed by the finite-field Brauer-vanishing interface.
([[def-axiom-of-choice]])

[A2] DC and the supplied-resolution convention are required by the continuous
cohomology interface. ([[def-dependent-choice]],
[[thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients]])

## Proof

**Given:** The data in the Statement and Facts & Assumptions.

1.1 Choose a nonempty finite-type affine member of an fppf cover representing $P$ by [F1]. Its coordinate algebra has a maximal ideal; by [F1] the residue field $M$ is finite over $k$, hence Galois by the finite-field theorem. Pull back the local representative to $C_M$ and call it $L$. For each $\sigma\in G=\operatorname{Gal}(M/k)$, the rationality of $P$ and [F1] show that the $\sigma$-twist of $L$ and $L$ differ by pullback of a line bundle from $\operatorname{Spec}M$. Every line bundle over a field is a one-dimensional vector space and is trivial after choosing a basis, so choose an isomorphism $\phi_\sigma:{}^\sigma L\to L$. The composite $\phi_\sigma\circ{}^\sigma\phi_\tau\circ\phi_{\sigma\tau}^{-1}$ is an automorphism of $L$, hence multiplication by an element $c_{\sigma,\tau}\in M^\times$ by [F2]. Associativity makes $c$ a $2$-cocycle. [A1, F1, F2, construct]

2.1 The class of $c$ maps to zero in continuous $H^2(\operatorname{Gal}(k_s/k),k_s^\times)$ by [F3]. By [F4], its inflation becomes a coboundary after some finite Galois extension $N/k$ containing $M$. Rescaling the isomorphisms by that $1$-cochain makes them satisfy the descent cocycle identity over $N/k$. [A2, F3, F4, step 1.1]

3.1 The adjusted isomorphisms are faithfully flat descent data for the line bundle $L_N$. By [F5] they descend to a line bundle on $C/k$. Its Picard class becomes $P_N$ over $N$; since the Picard functor is an fppf sheaf, equality after the faithfully flat extension $N/k$ implies equality over $k$. [F1, F5, step 2.1] ∎

