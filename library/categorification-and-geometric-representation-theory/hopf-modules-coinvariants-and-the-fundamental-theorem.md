---
page: hopf-modules-coinvariants-and-the-fundamental-theorem
title: "Hopf Modules, Coinvariants, and the Fundamental Theorem"
status: published
items:
  - def-hh-right-right-hopf-module-and-coinvariants
  - lem-hh-coinvariants-form-a-subspace
  - lem-hh-free-right-right-hopf-module
  - lem-hh-hopf-module-coinvariant-projection
  - thm-hh-fundamental-theorem-of-hopf-modules
  - lem-hh-coinvariants-of-free-hopf-module
  - cor-hh-hopf-module-functor-equivalence
examples: []
---

Fix a field $k$ and a Hopf algebra $H$ over $k$. A right-right Hopf module has a right action and a right coaction tied by one compatibility identity. Its coinvariants form a kernel-defined subspace. The projection $P(m)=\sum m_0S(m_1)$ extracts that subspace, and the fundamental theorem identifies each Hopf module with the free Hopf module on its coinvariants. The proof uses the antipode identities and anti-comultiplicativity, but no inverse $S^{-1}$.

The A-page results supply the compatibility definition, its subspace and free-module constructions, the projection, the decomposition isomorphism, the coinvariants of a free Hopf module, and the resulting equivalence of categories. The companion [[hopf-modules-coinvariants-and-the-fundamental-theorem-examples]] computes the maps for group and polynomial Hopf algebras and shows why compatibility is essential.

## Conventions and prerequisites

All tensor products are algebraic over $k$; a Sweedler expression denotes a finite tensor sum and is interpreted through linear maps, not as a choice of components. We use the right-right convention
$$
\rho(mh)=\sum m_0h_1\otimes m_1h_2.
$$

The planned prerequisites are [[tensor-coherence-and-algebraic-descent]], [[comodules-matrix-coefficients-and-coalgebra-duality]], [[bialgebras-convolution-and-antipode-identities]], and [[hopf-module-tensor-products-and-rigid-duality]]. The plan and `plan-spec.json` agree on this scope and page graph. The current Batch 3, 4 and 5 A-page manifests contain 8, 6 and 5 items, respectively. Draft status, manifest inclusion and source inspection do not constitute acceptance.

## Results

- [[def-hh-right-right-hopf-module-and-coinvariants]] fixes the action, coaction, compatibility equation, morphisms and coinvariant set.
- [[lem-hh-coinvariants-form-a-subspace]] proves that the coinvariants are a vector subspace.
- [[lem-hh-free-right-right-hopf-module]] constructs the free Hopf module $V\otimes H$.
- [[lem-hh-hopf-module-coinvariant-projection]] proves that $P(m)=\sum m_0S(m_1)$ is a projection onto the coinvariants.
- [[thm-hh-fundamental-theorem-of-hopf-modules]] proves that $M^{\operatorname{co}H}\otimes H\cong M$ as right-right Hopf modules.
- [[lem-hh-coinvariants-of-free-hopf-module]] identifies $(V\otimes H)^{\operatorname{co}H}$ canonically with $V$.
- [[cor-hh-hopf-module-functor-equivalence]] gives the explicit inverse equivalence with vector spaces.

## Reading

Two complete independent treatments were inspected: Hans-Juergen Schneider, *Lectures on Hopf Algebras*, Section 2, printed pp. 22-23; and D. S. Drogalski, *Chapter 3: Hopf Algebras*, Section 3.6, printed pp. 42-44. Their right-right convention and inverse maps agree. The local proofs make the tensor-range argument explicit, prove naturality and triangle identities, and avoid the source shortcut of calling the decomposition “free” without constructing its inverse.
