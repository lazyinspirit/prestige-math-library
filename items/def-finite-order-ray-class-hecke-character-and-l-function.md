---
id: def-finite-order-ray-class-hecke-character-and-l-function
kind: definition
title: "Finite-order ray-class Hecke character and its L-series"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-number-field
  - def-absolute-norm-of-an-ideal
  - def-global-field-modulus
  - def-ray-class-group
  - thm-ray-class-exact-sequence
  - def-discriminant-of-a-number-field-basis-and-order
  - def-archimedean-embeddings-and-number-field-signature
  - def-euler-gamma-function
  - def-axiom-of-choice
  - def-countable-choice
justified_by: []
axiom_use: >-
  AC and Countable Choice are required by the exact residue-and-sign sequence
  used to identify the finite and real components. The definitions themselves
  require no further choice.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jürgen Neukirch, Algebraic Number Theory, Chapter VII §§6.8–6.14"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
      locator: "Printed pp.478–483: ray-class characters, finite and infinite components, conductors, and the Hecke character correspondence."
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter VI §1, definitions of ray-class characters and Hecke L-series, printed pp.183–184."

---

## Definition

Assume AC and Countable Choice. Let $K$ be a number field, meaning a finite extension of $\mathbb Q$, and let $\mathfrak m=(\mathfrak m_0,S_\infty)$ be a modulus with nonzero integral ideal $\mathfrak m_0$ and a finite set $S_\infty$ of real embeddings of $K$. The ray class group $\operatorname{Cl}_{\mathfrak m}(K)$ is the group of nonzero fractional ideals prime to $\mathfrak m_0$ modulo the principal ideals $(\alpha)$ for which $\alpha\equiv1$ at every prime power in $\mathfrak m_0$ and $\sigma(\alpha)>0$ for every $\sigma\in S_\infty$. A **finite-order ray-class Hecke character** modulo $\mathfrak m$ is a group homomorphism $\chi:\operatorname{Cl}_{\mathfrak m}(K)\to\mathbb C^\times$ with finite image. For a nonzero integral ideal $\mathfrak a$, set $\chi(\mathfrak a)=\chi([\mathfrak a])$ if $\mathfrak a$ is coprime to $\mathfrak m_0$ and set $\chi(\mathfrak a)=0$ otherwise. The **Hecke L-series** is
$$L(s,\chi)=\sum_{0\ne\mathfrak a\subseteq\mathcal O_K}\chi(\mathfrak a)(N\mathfrak a)^{-s},\qquad \operatorname{Re}(s)>1,$$
where $N\mathfrak a=|\mathcal O_K/\mathfrak a|$. For a divisor $\mathfrak f=(\mathfrak f_0,S'_{\infty})$ of $\mathfrak m$ (so $\mathfrak f_0\mid\mathfrak m_0$ and $S'_{\infty}\subseteq S_\infty$), the canonical map $\operatorname{Cl}_{\mathfrak m}(K)\to\operatorname{Cl}_{\mathfrak f}(K)$ sends each ideal class to its class modulo the smaller modulus. Call $\chi$ **primitive modulo $\mathfrak m$** if it does not factor through this map for any proper divisor $\mathfrak f$ of $\mathfrak m$. The exact ray-class sequence gives a unique finite residue character $\chi_f:(\mathcal O_K/\mathfrak m_0)^\times\to\mathbb C^\times$ and parities $\epsilon_\sigma\in\{0,1\}$ indexed by every real embedding $\sigma$ of $K$ (with $\epsilon_\sigma=0$ outside $S_\infty$) such that
$$\chi((\alpha))=\chi_f(\alpha\bmod\mathfrak m_0)\prod_{\sigma\in S_\infty}\operatorname{sgn}(\sigma(\alpha))^{\epsilon_\sigma}$$
for every $\alpha\in K^\times$ coprime to $\mathfrak m_0$. For primitive $\chi$, define its completed L-function by
$$\Lambda(s,\chi)=\bigl(|d_K|N\mathfrak m_0\bigr)^{s/2}\prod_{\sigma\text{ real}}\Gamma_{\mathbb R}(s+\epsilon_\sigma)\prod_{j=1}^{r_2}\Gamma_{\mathbb C}(s)L(s,\chi),$$
where $d_K$ is the field discriminant, $r_2$ is the number of complex-conjugate embedding pairs, $\Gamma_{\mathbb R}(z)=\pi^{-z/2}\Gamma(z/2)$, and $\Gamma_{\mathbb C}(z)=2(2\pi)^{-z}\Gamma(z)$.

## Definition references

[[def-number-field]]

[[def-ray-class-group]]

[[thm-ray-class-exact-sequence]]

[[def-discriminant-of-a-number-field-basis-and-order]]

[[def-archimedean-embeddings-and-number-field-signature]]

[[def-euler-gamma-function]]

[[thm-finite-order-hecke-l-euler-product]]
