---
id: def-qsmx-finite-group-double
kind: definition
title: Explicit finite-group quantum-double data
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-qsm-local-spin-algebras
dependency_roles:
  def-qsm-local-spin-algebras: mathematical-premise
justified_by: []
physical_scope: Pure finite-dimensional algebraic data for a finite group; no braided-category, modular-functor, topological-field-theory, or empirical claim.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: A. Yu. Kitaev, Fault-tolerant quantum computation by anyons
      url: https://arxiv.org/pdf/quant-ph/9707021
      locator: "§4, equations (9)–(12), PDF pp. 10–11; finite group edge space, oriented actions, and the vertex and face projectors; §5.1, equations (17)–(19), PDF pp. 14–15, for the D(G) basis, multiplication, and adjoint."
    - title: Mark de Wild Propitius and F. Alexander Bais, Discrete Gauge Theories
      url: https://arxiv.org/pdf/hep-th/9511201
      locator: "§2.1, equations (2.1.1)–(2.1.4), PDF pp. 44–45, for the finite-group double basis and multiplication; equation (2.1.12), PDF p. 47, for the coproduct convention."
    - title: Alexander Cowtan and Shahn Majid, Quantum Double Aspects of Surface Code Models
      url: https://arxiv.org/pdf/2107.04411
      locator: "§3, PDF p. 7, for D(G)=C(G)⋊C[G], its basis convention, and antipode; §§3.1–3.2, PDF pp. 8–10, for site actions and sector conventions."
---

## Definition

Let $G$ be a finite group with identity $e$. Let $\mathbb C^G$ be the complex vector space of functions on $G$, with point-mass basis $\{\delta_h:h\in G\}$, and let $\mathbb C[G]$ be the group algebra with basis $\{g:g\in G\}$ and multiplication inherited from $G$. Define the $|G|^2$-dimensional vector space

$$D(G):=\mathbb C^G\otimes_{\mathbb C}\mathbb C[G],$$

with basis $d_{h,g}:=\delta_h\otimes g$. On basis elements prescribe the bilinear multiplication

$$d_{h,g}d_{k,l}:=\mathbf 1_{h=gkg^{-1}}d_{h,gl},$$

the linear coproduct and counit

$$\Delta(d_{h,g}):=\sum_{ab=h}d_{a,g}\otimes d_{b,g},\qquad \varepsilon(d_{h,g}):=\mathbf 1_{h=e},$$

the unit vector and linear map

$$1_D:=\sum_{h\in G}d_{h,e},\qquad \eta(1):=1_D,$$

the linear map $S(d_{h,g}):=d_{g^{-1}h^{-1}g,g^{-1}}$, and the conjugate-linear map

$$d_{h,g}^*:=d_{g^{-1}hg,g^{-1}}.$$

Every displayed operation extends uniquely by the indicated linearity from the finite basis.

Here a **Hopf algebra over $\mathbb C$** is a complex vector space $A$ with linear maps $m:A\otimes A\to A$, $\eta:\mathbb C\to A$, $\Delta:A\to A\otimes A$, $\varepsilon:A\to\mathbb C$, and $S:A\to A$. Writing $ab=m(a\otimes b)$ and $1_A=\eta(1)$, require $(ab)c=a(bc)$, $1_Aa=a=a1_A$, $(\Delta\otimes\mathrm{id})\Delta=(\mathrm{id}\otimes\Delta)\Delta$, and $(\varepsilon\otimes\mathrm{id})\Delta=\mathrm{id}=(\mathrm{id}\otimes\varepsilon)\Delta$ under the canonical tensor identifications. Require also $\Delta(ab)=\Delta(a)\Delta(b)$, $\Delta(1_A)=1_A\otimes1_A$, $\varepsilon(ab)=\varepsilon(a)\varepsilon(b)$, $\varepsilon(1_A)=1$, and $m(S\otimes\mathrm{id})\Delta=\eta\varepsilon=m(\mathrm{id}\otimes S)\Delta$, where $(a\otimes b)(c\otimes d)=ac\otimes bd$. A **Hopf $*$-algebra** means such a Hopf algebra equipped with a conjugate-linear involution $*$ that reverses multiplication, fixes the unit, and satisfies $\Delta(a^*)=\Delta(a)^*$ and $\varepsilon(a^*)=\overline{\varepsilon(a)}$ for every $a$, where $(x\otimes y)^*=x^*\otimes y^*$ on $D(G)\otimes D(G)$. 

The group basis of $\mathbb C[G]$ is also taken orthonormal when it is used as a finite-dimensional edge Hilbert space. For a finite edge set $E$, choose a bijection to a finite region $\Lambda\subset\mathbb Z$ and an enumeration of $G$ by $\{1,\ldots,q\}$, where $q=|G|\ge1$. Then $\bigotimes_{e\in E}\mathbb C[G]$ is the $q$-spin space $\mathcal H_\Lambda$ of the finite local matrix algebra definition, and its operator algebra is $M_{q^{|E|}}(\mathbb C)$. Different finite enumerations change only the basis labels.

## Definition references

[[def-qsm-local-spin-algebras]]

[A. Yu. Kitaev, “Fault-tolerant quantum computation by anyons,” §4](https://arxiv.org/pdf/quant-ph/9707021)

[Mark de Wild Propitius and F. Alexander Bais, *Discrete Gauge Theories*, §2.1](https://arxiv.org/pdf/hep-th/9511201)

[Alexander Cowtan and Shahn Majid, “Quantum Double Aspects of Surface Code Models,” §3](https://arxiv.org/pdf/2107.04411)
