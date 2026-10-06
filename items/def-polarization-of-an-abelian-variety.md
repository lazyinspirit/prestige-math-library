---
id: def-polarization-of-an-abelian-variety
kind: definition
title: "Polarizations and the Mumford isogeny attached to an ample line bundle"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-rigidified-relative-picard-functor-and-dual-abelian-variety
  - lem-theorem-of-the-square-and-mumford-homomorphism
  - def-abelian-variety-over-a-field
  - def-ample-invertible-sheaf
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pass
sources:
  references:
    - title: "J. S. Milne, Abelian Varieties, v2.00 (2008), Chapter I sections 5 and 8, and Chapter III (polarizations)"
      url: "https://www.jmilne.org/math/CourseNotes/AV.pdf"
    - title: "B. Edixhoven, G. van der Geer, B. Moonen, Abelian Varieties (preliminary version 2012), Chapter 6 sections 1-3"
      url: "https://www.van-der-geer.nl/~gerard/AV.pdf"
---

## Definition

Assume AC for the cited square theorem. Let $A$ be an abelian variety over a field $k$ ([[def-abelian-variety-over-a-field]]), and suppose a dual abelian variety $A^\vee$ with its universal normalized Poincare bundle $\mathcal P$ on $A\times_kA^\vee$ has been supplied ([[def-rigidified-relative-picard-functor-and-dual-abelian-variety]]).

For an invertible sheaf $\mathcal L$ on $A$ the **Mumford morphism** $\varphi_{\mathcal L}:A\to A^\vee$ is the homomorphism of [[lem-theorem-of-the-square-and-mumford-homomorphism]]; it is represented by the family
$$\Lambda(\mathcal L)=m^*\mathcal L\otimes p_1^*\mathcal L^{-1}\otimes p_2^*\mathcal L^{-1}\otimes\pi^*e^*\mathcal L$$
on $A\times_kA$, rigidified along both identity factors, where $m:A\times_kA\to A$ is the group law, $p_1,p_2$ are the projections, $\pi:A\times_kA\to\operatorname{Spec}k$ is the structure morphism for the constant factor, and $e$ is the identity section; in particular $(\operatorname{id}_A\times\varphi_{\mathcal L})^*\mathcal P\cong\Lambda(\mathcal L)$, and the map used here has domain $A\times_kA$.

A **polarization** of $A$ is a homomorphism $\lambda:A\to A^\vee$ such that, after extension of scalars to an algebraic closure of $k$, there exists an ample invertible sheaf $\mathcal L$ on $A_{\bar k}$ ([[def-ample-invertible-sheaf]]) with $\lambda_{\bar k}=\varphi_{\mathcal L}$. A **principal polarization** is a polarization of degree one, where the degree of a polarization is the finite locally free rank of the associated isogeny, once $\lambda$ is known to be an isogeny.

This definition is conditional on the supply of the dual and the Poincare bundle; symmetry $\lambda=\lambda^\vee$ under the bidual identification, finiteness and the isogeny property, existence of the dual, and existence and square degree of polarizations are conclusions to be proved in the subsequent commissioned theorem and are not assumed as existence assertions here. Defining these conditional terms does not create a dependency from this definition back to that theorem.
