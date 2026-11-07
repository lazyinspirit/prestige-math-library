---
id: def-hecke-operator-on-congruence-forms
kind: definition
title: "Hecke Operators on Congruence Forms"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-congruence-modular-form-with-nebentypus
  - def-congruence-subgroup-of-sl2-z
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Peter Bruin and Sander Dahmen, Modular Forms (Spring 2020 lecture notes)"
      url: "https://vdeangel.xula.edu/ModularForms/PreTeXt/output/web/external/Bruin-Dahmen_ModularForms.pdf"
      locator: "Chapter 4 §§4.1–4.5, printed pp. 53–61: double-coset operators, Γ1(N) Hecke operators, and their q-expansion formulas."
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Chapter 5, Proposition 5.16 and Corollary 5.17, printed pp. 73–75: the normalized double-coset operators and Fourier coefficient formula."
---

## Definition

Let $N\ge1$, $k\ge0$, and let $\chi$ be a character modulo $N$, extended to positive integers by $\chi(d)=0$ when $\gcd(d,N)>1$. For a rational matrix $\alpha=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ with positive determinant define

$$ (f|_k\alpha)(z):=\frac{(\det\alpha)^k}{(cz+d)^k}f\!\left(\frac{az+b}{cz+d}\right). $$

This is a right action on holomorphic functions on the upper half-plane. For a unit $e\bmod N$, choose $\gamma_e\in\Gamma_0(N)$ with lower-right entry $e\bmod N$ and define the **diamond operator** $\langle e\rangle f:=f|_k\gamma_e$ on functions invariant under $\Gamma_1(N)$. This is independent of the choice of $\gamma_e$, since two such choices differ by an element of $\Gamma_1(N)$. Among functions invariant under $\Gamma_1(N)$ and holomorphic at every cusp, $M_k(\Gamma_0(N),\chi)$ consists exactly of those satisfying $\langle e\rangle f=\chi(e)f$ for every unit $e\bmod N$: one direction is the transformation law, and the converse follows by taking $e$ to be the lower-right entry of any $\gamma\in\Gamma_0(N)$.

Put $\Gamma=\Gamma_1(N)$. For a holomorphic function $f$ invariant under $\Gamma$ and a rational matrix $\alpha$ of positive determinant for which $\Gamma_\alpha:=\Gamma\cap\alpha^{-1}\Gamma\alpha$ has finite index in $\Gamma$, define the double-coset sum $H_\alpha f:=\sum_{\delta\in\Gamma_\alpha\backslash\Gamma}f|_k\alpha\delta$. For a prime $p$ let $\alpha_p=\begin{pmatrix}1&0\\0&p\end{pmatrix}$ and $\Gamma_p:=\Gamma\cap\alpha_p^{-1}\Gamma\alpha_p$. The normalized Hecke operator is

$$ (T_p f)(z):=\frac1p\sum_{\delta\in\Gamma_p\backslash\Gamma}(f|_k\alpha_p\delta)(z). $$

The sum defining $H_\alpha$ is finite by the finite-index hypothesis and is independent of representatives: if $\delta'=\eta\delta$ with $\eta\in\Gamma_\alpha$, then $\alpha\eta\alpha^{-1}\in\Gamma$ and $f|_k(\alpha\eta\delta)=f|_k(\alpha\delta)$. For every $\gamma\in\Gamma$, right multiplication by $\gamma$ permutes the left cosets $\Gamma_\alpha\backslash\Gamma$. Reindexing the sum therefore gives $(H_\alpha f)|_k\gamma=H_\alpha f$, so $H_\alpha$ returns a holomorphic $\Gamma$-invariant function. For $\alpha_p$, finiteness follows from $\Gamma(Np)\subseteq\Gamma_p$. Define $T_1$ to be the identity and, for $r\ge2$, define

$$T_{p^r}:=T_pT_{p^{r-1}}-\chi(p)p^{k-1}T_{p^{r-2}}.$$

For $n=\prod_p p^{r_p}\ge1$, define $T_n$ as the product of the $T_{p^{r_p}}$ in increasing prime order. For fixed $N$, $k$ and $\chi$, these formulas define linear endomorphisms of the space of holomorphic $\Gamma$-invariant functions; the invariance just proved makes every composition in the recurrence well-defined. The theorem on Hecke preservation proves that they map the modular and cuspidal spaces to themselves. No Hecke operator at a prime-power index is assumed self-adjoint when that prime divides $N$.

## Definition references

[[def-congruence-modular-form-with-nebentypus]]

[[def-congruence-subgroup-of-sl2-z]]
