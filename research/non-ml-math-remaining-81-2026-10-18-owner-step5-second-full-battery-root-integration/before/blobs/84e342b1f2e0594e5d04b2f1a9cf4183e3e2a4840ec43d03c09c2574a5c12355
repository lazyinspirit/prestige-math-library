---
id: def-connected-poincare-cover-and-positive-energy
kind: definition
title: Connected Poincaré covers and positive translation energy
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-lie-group
  - def-covering-homomorphism-of-lie-groups
  - def-external-semidirect-product
  - thm-external-semidirect-product-is-a-group
  - def-strongly-continuous-unitary-representation
  - def-pontryagin-dual-and-compact-open-topology
  - thm-dual-of-an-lca-group-is-locally-compact-abelian
  - def-projection-valued-measure
  - lem-spectral-measure-of-a-representation-of-an-abelian-lch-group
  - lem-nondegenerate-czero-representations-have-regular-pvms
justified_by:
  - lem-poincare-dual-orbits-are-regular-homogeneous-borel-spaces
axiom_use: >-
  AC is assumed for the canonical translation spectral PVM and is inherited
  through the cited PVM supplier; no further choice is used by this definition.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Xavier Bekaert and Nicolas Boulanger, The unitary representations of the Poincaré group in any spacetime dimension, v2 (2021)"
      url: "https://arxiv.org/pdf/hep-th/0611263"
      locator: "§1.1–§1.2, PDF pp. 3–5; conventions and the connected Lorentz cover." 
    - title: "Niklas Beisert, Quantum Field Theory I, Lecture Notes, ETH Zürich, 2025 HS"
      url: "https://people.phys.ethz.ch/~lecture/nbeisert/QFT1-25HS/QFT1-25HS-Notes.pdf"
      locator: "Chapter 4.4, printed pp. 4.13–4.16 (PDF pp. 61–64), connected Poincaré group and unitary-representation conventions."
verification:
  precheck: n/a
---

## Definition

Fix an integer spacetime dimension $D\ge2$ and the mostly-plus form
$$
\eta(p,a)=-p^0a^0+\sum_{j=1}^{D-1}p^ja^j.
$$
Let $e_0=(1,0,\ldots,0)$, and let
$$
L=SO_0(D-1,1)=\{\Lambda\in GL_D(\mathbb R):\Lambda^T\eta\Lambda=\eta,\ \det\Lambda=1,\ \Lambda e_0\text{ is future-pointing}\}
$$
be the proper orthochronous Lorentz group, the identity component of the indicated matrix group. A **connected Lorentz cover** is a connected Lie group $K$ with a covering homomorphism $c:K\to L$ in the sense of [[def-covering-homomorphism-of-lie-groups]]. It acts on translations $N=(\mathbb R^D,+)$ by $\alpha_k(a)=c(k)a$. The associated connected-cover Poincaré group is the external semidirect product
$G=\mathbb R^D\rtimes_\alpha K,\qquad (a,k)(b,\ell)=(a+c(k)b,k\ell).$
with its product topology, using [[def-external-semidirect-product]] and [[thm-external-semidirect-product-is-a-group]].

For $p\in\mathbb R^D$, write
$$
\chi_p(a)=\exp(i\eta(p,a))\in\mathbb T.
$$
This is a continuous character of $(\mathbb R^D,+)$; the Pontryagin dual and its compact-open topology are those of [[def-pontryagin-dual-and-compact-open-topology]]. Put $\widehat C_+=\{\chi_p:p^0\ge0,\ \eta(p,p)\le0\}$. The local orbit result below proves that $p\mapsto\chi_p$ is the full dual-coordinate homeomorphism. Under this convention $\chi_p(te_0)=e^{-itp^0}$.

Assume AC. If $U:G\to U(\mathcal H)$ is a strongly continuous unitary representation as in [[def-strongly-continuous-unitary-representation]], the restriction $a\mapsto U(a,e)$ has its unique regular projection-valued spectral measure $P_U$ on $\widehat{\mathbb R^D}$ supplied by [[lem-spectral-measure-of-a-representation-of-an-abelian-lch-group]]. The representation is **positive-energy** when
$$
P_U(\widehat C_+)=I_{\mathcal H}.
$$

The cited spectral-measure lemma states its covariant result for separable carriers. For arbitrary $\mathcal H$, the zero space has the zero PVM; otherwise the same integrated-$C_0(\widehat{\mathbb R^D})$ construction in its proof, steps 2.1–7.1, gives the displayed PVM. These steps use the nondegenerate $C_0$-representation theorem (its supplier `lem-nondegenerate-czero-representations-have-regular-pvms`), which has no separability hypothesis. The separability use in the spectral-measure proof's step 1.1 is only to show that the dual is second-countable and standard Borel; neither property is needed for the regular PVM existence and uniqueness used here. Haar measure on $\mathbb R^D$ is $\sigma$-finite, and its dual is locally compact Hausdorff by [[thm-dual-of-an-lca-group-is-locally-compact-abelian]].

Equivalently, after the orbit lemma identifies $\widehat{\mathbb R^D}$ with momentum space, $P_U$ is concentrated on the closed future cone $C_+=\{p:p^0\ge0,\ \eta(p,p)\le0\}$ and the spectral coordinate $p^0$ is the nonnegative generator $P^0$ in $U(te_0,e)=e^{-itP^0}$. A unitary representation is **irreducible** and **strongly continuous** with the meanings in [[def-strongly-continuous-unitary-representation]].
