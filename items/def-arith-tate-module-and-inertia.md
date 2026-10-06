---
id: def-arith-tate-module-and-inertia
kind: definition
title: "Prime-to-residue-characteristic Tate modules and inertia"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-abelian-variety-over-a-field
  - def-inverse-limit-topology-for-finite-discrete-groups
  - def-profinite-group-by-inverse-limit
  - def-inverse-system-and-inverse-limit-of-modules
  - lem-arith-strict-henselization-and-smooth-sections
  - thm-nonaffine-abelian-multiplication-finite-faithfully-flat
  - thm-jacobian-criterion-smooth-morphism
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "S. Bosch, W. Lutkebohmert, M. Raynaud, Neron Models (1990), 7.4/5 and the Tate-module criterion for good reduction"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
    - title: "J. S. Milne, Abelian Varieties, v2.00 (2008), Chapter I sections 3, 5, 8, 11, 17"
      url: "https://www.jmilne.org/math/CourseNotes/AV.pdf"
---

## Definition

Assume AC and DC, inherited from the multiplication and strict-henselization suppliers. Let $A$ be an abelian variety over a field $K$ ([[def-abelian-variety-over-a-field]]), fix a separable closure $K^{\mathrm{sep}}$ of $K$, and let $\ell$ be a prime different from $\operatorname{char}K$. For each $\nu\ge1$ the multiplication-by-$\ell^\nu$ endomorphism of $A$ is finite and faithfully flat and $A[\ell^\nu]=A\times_{[\ell^\nu],A,e}\operatorname{Spec}K$ is finite locally free by [[thm-nonaffine-abelian-multiplication-finite-faithfully-flat]]. It is etale because the differential of multiplication by $\ell^\nu$ at the identity is the unit $\ell^\nu$ times the identity; translations give an invertible differential everywhere, and [[thm-jacobian-criterion-smooth-morphism]] makes multiplication etale, as is its pullback along the unit section. The **$\ell$-adic Tate module** is
$$T_\ell(A)=\varprojlim_{\nu\ge1}A[\ell^\nu](K^{\mathrm{sep}}),$$
the inverse limit along the transition maps given by multiplication by $\ell$, with the underlying inverse system of finite discrete groups ([[def-inverse-system-and-inverse-limit-of-modules]], [[def-inverse-limit-topology-for-finite-discrete-groups]]). Thus an element is a sequence $(a_\nu)_{\nu\ge1}$ with $a_\nu\in A[\ell^\nu](K^{\mathrm{sep}})$ and $\ell a_{\nu+1}=a_\nu$; coordinatewise scalar multiplication by $\mathbb Z_\ell=\varprojlim_\nu\mathbb Z/\ell^\nu\mathbb Z$ ([[def-profinite-group-by-inverse-limit]]) makes $T_\ell(A)$ a $\mathbb Z_\ell$-module. It is given the subspace topology from the product of the finite discrete torsion groups, so it is a profinite group and scalar multiplication is continuous. The absolute Galois group $\operatorname{Gal}(K^{\mathrm{sep}}/K)$ acts coordinatewise on $T_\ell(A)$, and this action is $\mathbb Z_\ell$-linear.

Let now $R$ be a discrete valuation ring with fraction field $K$, and choose a strict henselization $R^{\mathrm{sh}}$ with fraction field $K^{\mathrm{sh}}$ embedded in $K^{\mathrm{sep}}$ through the fixed separable closure ([[lem-arith-strict-henselization-and-smooth-sections]]). The **inertia group** is
$$I=\operatorname{Gal}(K^{\mathrm{sep}}/K^{\mathrm{sh}})\subseteq\operatorname{Gal}(K^{\mathrm{sep}}/K).$$
The Tate module $T_\ell(A)$ is **unramified at $R$** when $I$ acts trivially on it. This definition specifies the action and the test; no freeness, torsion or reduction criterion is assumed.
