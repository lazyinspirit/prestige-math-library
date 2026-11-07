---
id: def-congruence-modular-form-with-nebentypus
kind: definition
title: "Modular Forms with Congruence Level and Nebentypus"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-congruence-subgroup-of-sl2-z
  - def-level-one-modular-form-and-cusp-form
  - thm-well-ordering-principle
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Peter Bruin and Sander Dahmen, Modular Forms (Spring 2020 lecture notes)"
      url: "https://vdeangel.xula.edu/ModularForms/PreTeXt/output/web/external/Bruin-Dahmen_ModularForms.pdf"
      locator: "Chapter 3 §§3.1 and 3.3, printed pp. 31–32 and 37–38: Γ0(N), Γ1(N), their character quotient, cusp widths, and holomorphy at every cusp."
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Chapter 4, Definition 4.5 and the cusp condition, printed p. 49: the level-one weight-k convention and holomorphy at the cusp."
---

## Definition

Fix $N\ge1$, an integer weight $k\ge0$, and a group homomorphism $\chi:(\mathbb Z/N\mathbb Z)^\times\to\mathbb C^\times$ satisfying $\chi(-1)=(-1)^k$. This homomorphism is a **Dirichlet character modulo $N$**; its values have absolute value $1$ because its domain is finite. For $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in SL_2(\mathbb Z)$ put

$$ (f|_k\gamma)(z):=(cz+d)^{-k}f\!\left(\frac{az+b}{cz+d}\right). $$

A **modular form of weight $k$, level $\Gamma_0(N)$, and character $\chi$** is a holomorphic function $f:\mathbb H\to\mathbb C$ satisfying $f|_k\gamma=\chi(d\bmod N)f$ for every $\gamma\in\Gamma_0(N)$ and holomorphic at every cusp. Here the cusps are the $\Gamma_0(N)$-orbits in $\mathbb P^1(\mathbb Q)$. For $\sigma\in SL_2(\mathbb Z)$, let $w_\sigma$ be the least positive integer such that $\gamma_\sigma:=\sigma\begin{pmatrix}1&w_\sigma\\0&1\end{pmatrix}\sigma^{-1}\in\Gamma_0(N)$. This width exists because $\sigma\begin{pmatrix}1&N\\0&1\end{pmatrix}\sigma^{-1}\in\Gamma(N)$: the principal subgroup is normal as a reduction kernel and $\begin{pmatrix}1&N\\0&1\end{pmatrix}\in\Gamma(N)$. The least positive width exists by the well-ordering principle. Let $r_\sigma$ be the finite order of $\chi(d_{\gamma_\sigma}\bmod N)$ and put $W_\sigma=r_\sigma w_\sigma$. The automorphy law gives $(f|_k\sigma)|_k\begin{pmatrix}1&w_\sigma\\0&1\end{pmatrix}=\chi(d_{\gamma_\sigma}\bmod N)(f|_k\sigma)$; iterating $r_\sigma$ times shows that $f|_k\sigma$ is periodic with period $W_\sigma$. Holomorphy at the cusp $\sigma\infty$ means that its Fourier expansion in $q_\sigma=e^{2\pi iz/W_\sigma}$ has no negative powers. The form is a **cusp form** if, at every cusp, its constant Fourier coefficient is also zero.

Write $M_k(\Gamma_0(N),\chi)$ for the vector space of these modular forms and $S_k(\Gamma_0(N),\chi)$ for its subspace of cusp forms. For $N=1$ and the trivial character, this is the usual level-one space of weight-$k$ modular forms and cusp forms.

## Definition references

[[def-congruence-subgroup-of-sl2-z]]

[[def-level-one-modular-form-and-cusp-form]]

[[thm-well-ordering-principle]]
