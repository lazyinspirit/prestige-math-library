---
id: lem-frobenius-characteristic-is-an-isometry
kind: lemma
title: "The Frobenius characteristic is an isometry"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-frobenius-characteristic-map
  - def-class-function-and-the-space-of-complex-class-functions
  - def-standard-inner-product-on-complex-class-functions
  - def-hall-inner-product-on-symmetric-functions
  - cor-power-sums-are-orthogonal-for-the-hall-inner-product
  - thm-centralizer-cardinality-from-cycle-type
  - thm-conjugacy-class-cardinality
  - cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §7"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "the computation following (7.2), printed p. 113"
    - title: "Peter Webb, A Course in Finite Group Representation Theory, §3.2"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
      locator: "§3.2, printed pp. 27–30 (class-function inner product, class sizes)"
---

## Statement

Extend the Hall form on $\Lambda$ $\mathbb Q$-bilinearly to
$\Lambda_{\mathbb Q}$ and then sesquilinearly to
$\Lambda_{\mathbb C}=\mathbb C\otimes_{\mathbb Q}\Lambda_{\mathbb Q}$, linear
in the first argument and conjugate-linear in the second, so that
$\langle p_\rho,p_\sigma\rangle_H=\delta_{\rho\sigma}z_\rho$ for all
partitions $\rho,\sigma$
([[cor-power-sums-are-orthogonal-for-the-hall-inner-product]],
[[def-hall-inner-product-on-symmetric-functions]]). For all
$f,g\in\mathrm{cf}(S_n)$,

$$\langle\operatorname{ch}(f),\operatorname{ch}(g)\rangle_H=\langle f,g\rangle_{S_n}=\frac1{n!}\sum_{w\in S_n}f(w)\overline{g(w)}.$$

Consequently $\operatorname{ch}$ is injective on $\mathrm{cf}(S_n)$, and
$\langle f,f\rangle_{S_n}=\sum_{\rho\vdash n}|f(\rho)|^2/z_\rho\ge0$ with
equality if and only if $f=0$.

## Facts & Assumptions

**Given:** An integer $n\ge0$ and class functions $f,g\in\mathrm{cf}(S_n)$.

[F1] $\operatorname{ch}(f)=\sum_{\rho\vdash n}f(\rho)p_\rho/z_\rho\in\Lambda_{\mathbb C}^n$, where $f(\rho)$ is the common value of $f$ on elements of cycle type $\rho$ and $z_\rho=\prod_ii^{m_i(\rho)}m_i(\rho)!$ ([[def-frobenius-characteristic-map]]).

[F2] A class function is constant on conjugacy classes, and a class function is determined by its values on one representative of each conjugacy class; the space $\mathrm{cf}(S_n)$ carries pointwise addition and scalar multiplication ([[def-class-function-and-the-space-of-complex-class-functions]]).

[F3] The standard inner product on $\mathrm{cf}(S_n)$ is $\langle\varphi,\psi\rangle_{S_n}=\frac1{n!}\sum_{w\in S_n}\varphi(w)\overline{\psi(w)}$, linear in the first argument and conjugate-linear in the second, and it is positive definite ([[def-standard-inner-product-on-complex-class-functions]]).

[F4] The Hall form is the graded $\mathbb Z$-bilinear form on $\Lambda$ with $\langle h_\lambda,m_\mu\rangle_H=\delta_{\lambda\mu}$; its $\mathbb Q$-bilinear extension to $\Lambda_{\mathbb Q}$ satisfies $\langle p_\rho,p_\sigma\rangle_H=\delta_{\rho\sigma}z_\rho$ for all partitions $\rho,\sigma$ ([[def-hall-inner-product-on-symmetric-functions]], [[cor-power-sums-are-orthogonal-for-the-hall-inner-product]]).

[F5] If $\sigma\in S_n$ has exactly $m_i(\rho)$ cycles of length $i$, then its centralizer has order $z_\rho=\prod_ii^{m_i(\rho)}m_i(\rho)!$ ([[thm-centralizer-cardinality-from-cycle-type]]).

[F6] The conjugacy classes of $S_n$ are indexed by the cycle types $\rho\vdash n$, and for $w\in S_n$ the class of $w$ has cardinality $[S_n:C_{S_n}(w)]=n!/|C_{S_n}(w)|$ ([[cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types]], [[thm-conjugacy-class-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 The $\mathbb Q$-bilinear extension of the Hall form to $\Lambda_{\mathbb Q}$ extends to a sesquilinear form on $\Lambda_{\mathbb C}=\mathbb C\otimes_{\mathbb Q}\Lambda_{\mathbb Q}$ by $\langle a\otimes x,b\otimes y\rangle_H:=a\overline b\,\langle x,y\rangle_H$ on decomposable tensors; it is well defined because the form is $\mathbb Q$-bilinear, it is linear in the first argument and conjugate-linear in the second, and on power sums it has $\langle p_\rho/z_\rho,p_\sigma/z_\sigma\rangle_H=\delta_{\rho\sigma}/z_\rho$ by [F4] and $z_\rho>0$. [F4]

1.2 On the group side, grouping the defining sum of [F3] by conjugacy classes, which by [F6] are indexed by the cycle types $\rho\vdash n$ and have cardinality $n!/z_\rho$ by [F5] and [F6], and using that $f,g$ are constant on classes by [F2], gives $\langle f,g\rangle_{S_n}=\frac1{n!}\sum_{\rho\vdash n}\frac{n!}{z_\rho}f(\rho)\overline{g(\rho)}=\sum_{\rho\vdash n}f(\rho)\overline{g(\rho)}/z_\rho$. [F2, F3, F5, F6, algebra]

2.1 Expanding both characteristics in the basis $\{p_\rho/z_\rho:\rho\vdash n\}$ of $\Lambda_{\mathbb Q}^n$ via [F1] and using the sesquilinearity of step 1.1 and the values $\langle p_\rho/z_\rho,p_\sigma/z_\sigma\rangle_H=\delta_{\rho\sigma}/z_\rho$, $\langle\operatorname{ch}(f),\operatorname{ch}(g)\rangle_H=\sum_{\rho,\sigma}f(\rho)\overline{g(\sigma)}\langle p_\rho/z_\rho,p_\sigma/z_\sigma\rangle_H=\sum_{\rho\vdash n}f(\rho)\overline{g(\rho)}/z_\rho$. [F1, F4, step 1.1, algebra]

3.1 Steps 2.1 and 1.2 prove the displayed isometry $\langle\operatorname{ch}(f),\operatorname{ch}(g)\rangle_H=\langle f,g\rangle_{S_n}$ for all $f,g\in\mathrm{cf}(S_n)$. Taking $g=f$ and using positive definiteness of the standard inner product [F3], $\langle f,f\rangle_{S_n}=\sum_{\rho\vdash n}|f(\rho)|^2/z_\rho\ge0$, with equality exactly when $f(\rho)=0$ for every $\rho$, that is, when $f=0$; hence if $\operatorname{ch}(f)=0$ then $\langle f,f\rangle_{S_n}=\langle\operatorname{ch}(f),\operatorname{ch}(f)\rangle_H=0$ and $f=0$, so $\operatorname{ch}$ is injective on $\mathrm{cf}(S_n)$. [F3, step 2.1, step 1.2] ∎
