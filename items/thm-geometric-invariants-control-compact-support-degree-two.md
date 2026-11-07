---
id: thm-geometric-invariants-control-compact-support-degree-two
kind: theorem
title: "Geometric invariants control compact-support cohomology in degree two"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 14
deps:
  - def-compactly-supported-etale-cohomology
  - def-lisse-l-adic-sheaf-on-a-scheme
  - def-smooth-curve-over-finite-field
  - def-tate-twist-of-an-l-adic-sheaf
  - thm-hc0-vanishing-for-lisse-sheaves-on-nonproper-smooth-curves
  - thm-poincare-duality-and-degree-zero-two-on-smooth-curves
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "J. S. Milne, Lectures on Étale Cohomology"
      url: https://jmilne.org/math/CourseNotes/LEC.pdf
      locator: Chapter I §24, Theorem 24.1, curve Poincaré duality
    - title: "Pierre Deligne, La conjecture de Weil: II"
      url: https://www.numdam.org/item/PMIHES_1980__52__137_0.pdf
      locator: §3.2 and §3.3, compact-support cohomology and weights
verification:
  precheck: pending
---

## Statement

Let $U$ be a smooth geometrically connected nonproper curve over $\mathbb F_q$, let $\ell$ be a prime not dividing $q$, and let $\mathcal L$ be a lisse finite-rank locally constant $\overline{\mathbb Q}_\ell$-sheaf on $U$. Choose a geometric generic point of $U_{\overline{\mathbb F}_q}$ and let $V$ be its stalk, with its action of the étale fundamental group $\pi_1^{\mathrm{et}}(U_{\overline{\mathbb F}_q})$. Then $H_c^0(U_{\overline{\mathbb F}_q},\mathcal L)=0$, and Poincaré duality gives a geometric-Frobenius-equivariant isomorphism
$$H_c^2(U_{\overline{\mathbb F}_q},\mathcal L)\cong\left((V^\vee)^{\pi_1^{\mathrm{et}}(U_{\overline{\mathbb F}_q})}\right)^\vee(-1).$$
Here $V^\vee$ is the dual representation, the superscript denotes the invariant subspace, and $\overline{\mathbb Q}_\ell(-1)$ is the negative Tate twist, on which geometric Frobenius over $\mathbb F_q$ acts by $q$. In particular, the dimension of $H_c^2$ equals the dimension of the geometric invariant subspace of $V^\vee$.

## Statement references

[[thm-hc0-vanishing-for-lisse-sheaves-on-nonproper-smooth-curves]]

[[thm-poincare-duality-and-degree-zero-two-on-smooth-curves]]

[[def-tate-twist-of-an-l-adic-sheaf]]

[Milne, *Lectures on Étale Cohomology*, Chapter I §24](https://jmilne.org/math/CourseNotes/LEC.pdf)

