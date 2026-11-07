---
id: def-congruence-subgroup-of-sl2-z
kind: definition
title: "Congruence Subgroups of SL2(Z)"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-modular-group-action-on-the-upper-half-plane
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
      locator: "Chapter 3 §3.1, printed pp. 31–32: principal, Γ0(N), and Γ1(N) congruence subgroups; Proposition 3.1 identifies Γ0(N)/Γ1(N)."
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Chapter 2, 'Congruence Subgroups of the Elliptic Modular Group,' printed pp. 28–29: the principal subgroup, definition of congruence subgroup, and Γ0(N)."
---

## Definition

For an integer $N\ge1$, let $\Gamma(N)$ be the kernel of reduction from $SL_2(\mathbb Z)$ to $SL_2(\mathbb Z/N\mathbb Z)$, explicitly

$$\Gamma(N):=\left\{\begin{pmatrix}a&b\\c&d\end{pmatrix}\in SL_2(\mathbb Z):a\equiv d\equiv1\pmod N,\ b\equiv c\equiv0\pmod N\right\}.$$

A **congruence subgroup** of $SL_2(\mathbb Z)$ is a subgroup containing $\Gamma(N)$ for some $N\ge1$. Its **level** is the least such $N$. Define

$$\Gamma_0(N):=\left\{\begin{pmatrix}a&b\\c&d\end{pmatrix}\in SL_2(\mathbb Z):N\mid c\right\},\qquad \Gamma_1(N):=\left\{\begin{pmatrix}a&b\\c&d\end{pmatrix}\in SL_2(\mathbb Z):a\equiv d\equiv1\pmod N,\ N\mid c\right\}.$$

The reduction map is a group homomorphism, so $\Gamma(N)$ is a subgroup. Its target is finite, hence $\Gamma(N)$ has finite index. The sets $\Gamma_0(N)$ and $\Gamma_1(N)$ are also subgroups: the lower-left entry of a product is $c_1a_2+d_1c_2$, which is divisible by $N$ when $c_1,c_2$ are, and the lower-left entry of the inverse of $\begin{pmatrix}a&b\\c&d\end{pmatrix}$ is $-c$. For $\Gamma_1(N)$ the diagonal entries of a product are $a_1a_2+b_1c_2$ and $c_1b_2+d_1d_2$, both congruent to $1$ modulo $N$; the diagonal entries of the inverse are $d$ and $a$, also congruent to $1$. Each contains $\Gamma(N)$ and therefore has finite index; each is a congruence subgroup. The inclusions are $\Gamma(N)\subseteq\Gamma_1(N)\subseteq\Gamma_0(N)\subseteq SL_2(\mathbb Z)$.

The map $\Gamma_0(N)\to(\mathbb Z/N\mathbb Z)^\times$ sending $\begin{pmatrix}a&b\\c&d\end{pmatrix}$ to $d\bmod N$ is a surjective homomorphism with kernel $\Gamma_1(N)$. It is a homomorphism because the lower-right entry of a product is $c_1b_2+d_1d_2\equiv d_1d_2\pmod N$. Its kernel has $d\equiv1$ and, from $ad-bc=1$ with $N\mid c$, also $a\equiv1$. It is surjective: for any unit $e\bmod N$, choose $d\equiv e$ and $a$ with $ad\equiv1\pmod N$, and put $b=(ad-1)/N$; then $\begin{pmatrix}a&b\\N&d\end{pmatrix}\in\Gamma_0(N)$ maps to $e$. Thus $\Gamma_1(N)$ is normal in $\Gamma_0(N)$ and the quotient is identified with $(\mathbb Z/N\mathbb Z)^\times$.

The modular group acts on the upper half-plane by $\gamma z=(az+b)/(cz+d)$ for $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in SL_2(\mathbb Z)$; each subgroup above acts by restriction of this action.

## Definition references

[[def-modular-group-action-on-the-upper-half-plane]]

[[thm-well-ordering-principle]]
