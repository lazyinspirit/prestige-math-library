---
id: def-qftx-brst-relative-local-cohomology
kind: definition
title: Relative local BRST cohomology
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
deps:
  - def-qftx-abelian-local-brst
  - lem-qftx-brst-nilpotence-doublets
justified_by: []
dependency_roles:
  def-qftx-abelian-local-brst: mathematical-premise
  lem-qftx-brst-nilpotence-doublets: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Glenn Barnich, Friedemann Brandt and Marc Henneaux, Local BRST cohomology in gauge theories
      url: https://arxiv.org/pdf/hep-th/0002245
      locator: Sections 4.1–4.4 on local functions, jet spaces, local functionals and local forms; Section 9 on H(s|d).
    - title: Norbert Dragon and Friedemann Brandt, BRST Symmetry and Cohomology
      url: https://arxiv.org/pdf/1205.3293
      locator: Sections 1 and 3.1–3.3; finite-jet local forms and relative cohomology H^{g,p}(s|d).
    - title: Rudolf Schmid, Local cohomology in gauge theories, BRST transformations and anomalies
      url: https://deferentialgeometry.org/papers/localbrst.pdf
      locator: Section 2 on the infinite-jet variational bicomplex and Section 3 on local BRST cohomology.
---

## Definition

Use the four-dimensional coordinate and jet algebra and nilpotent differential $s$ fixed by the earlier Abelian local BRST definition and nilpotence lemma. For integers $r$ and $0\le p\le4$, a compactly supported local horizontal $p$-form of ghost number $r$ is a finite sum of terms
$$f_{i_1\ldots i_p}(x,z)\,dx^{i_1}\wedge\cdots\wedge dx^{i_p},$$
where each coefficient is smooth and compactly supported in $x\in\mathbb R^4$, polynomial in finitely many field-jet coordinates $z$, and homogeneous of ghost number $r$. Denote this space by $\Omega^{r,p}_{\mathrm{loc},c}$. A left derivative is used for odd jet coordinates.

For each spacetime index $\mu$, define the total derivative on a local coefficient by
$$D_\mu=\frac{\partial}{\partial x^\mu}+\sum_{i,\alpha}z^i_{\alpha+e_\mu}\frac{\partial_L}{\partial z^i_\alpha},$$
where $\alpha$ ranges over multi-indices, $i$ over the field and ghost generators, and $e_\mu$ is the multi-index with one derivative in direction $\mu$. The horizontal exterior derivative is $d_H=dx^\mu\wedge D_\mu$. It satisfies $d_H^2=0$. Extend $s$ to a homogeneous $p$-form by $s\omega=(-1)^p s_{\mathrm{coeff}}\omega$, where $s_{\mathrm{coeff}}$ acts on its coefficient by the earlier local BRST definition; then $s^2=0$ and $s d_H+d_Hs=0$.

Set $\Omega^{r,p}_{\mathrm{loc},c}=0$ for $p<0$ or $p>4$. Evaluation of a compactly supported local four-form on any smooth off-shell configuration is a finite integral.

For a graded subcomplex $\mathcal K^{r,p}\subseteq\Omega^{r,p}_{\mathrm{loc},c}$ stable under $s$ and $d_H$, define
$$Z^{r,p}(s|d_H;\mathcal K)=\{a_p\in\mathcal K^{r,p}:\ s a_p+d_Ha_{p-1}=0\text{ for some }a_{p-1}\in\mathcal K^{r+1,p-1}\}$$
and
$$B^{r,p}(s|d_H;\mathcal K)=\{s b_p+d_Hc_{p-1}:\ b_p\in\mathcal K^{r-1,p},\ c_{p-1}\in\mathcal K^{r,p-1}\}.$$
The relative local BRST cohomology is $H^{r,p}(s|d_H;\mathcal K)=Z^{r,p}/B^{r,p}$. In four dimensions, $H^1(s|d_H)$ is shorthand for $H^{1,4}(s|d_H)$. For compactly supported coefficients, $\int_{\mathbb R^4}d_Hc_3=0$ by the one-variable fundamental theorem of calculus in each coordinate and Fubini's theorem, so the quotient by $d_H$ identifies densities that define the same integrated local functional.

## Definition references

[[def-qftx-abelian-local-brst]]

[[lem-qftx-brst-nilpotence-doublets]]

