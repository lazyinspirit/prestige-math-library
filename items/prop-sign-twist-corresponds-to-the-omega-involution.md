---
id: prop-sign-twist-corresponds-to-the-omega-involution
kind: proposition
title: "Sign twist corresponds to the omega involution"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-frobenius-characteristic-map
  - prop-omega-conjugates-schur-functions
  - thm-frobenius-characteristic-sends-specht-characters-to-schur-functions
  - def-sign-representation-and-restriction-of-a-representation
  - thm-characters-of-direct-sums-tensor-products-and-duals
  - cor-sign-from-disjoint-cycle-structure
  - thm-complex-representations-are-determined-by-their-characters
  - def-tensor-product-of-complex-representations
  - lem-frobenius-characteristic-is-an-isometry
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
      locator: "Chapter I §7 Example 2, printed p. 116 (sign twist), and (2.13), printed p. 24 (omega on power sums)"
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, §6 and §16"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
      locator: "§6, printed pp. 22–26 (contragredient and sign twist of Specht modules)"
---

## Statement

Let $\operatorname{sgn}$ be the sign representation of $S_n$ and let $V$ be a
finite-dimensional complex representation of $S_n$ with character $\chi_V$ and
characteristic $F=\operatorname{ch}(\chi_V)$. Then

$$\operatorname{ch}(\chi_{V\otimes\operatorname{sgn}})=\omega(F),$$

where $\omega$ is the involutive algebra endomorphism of $\Lambda$ with
$\omega(e_r)=h_r$, extended to $\Lambda_{\mathbb C}$ by complex linearity. In
particular, for every $\lambda\vdash n$,

$$\operatorname{ch}\bigl(\chi_{S^\lambda\otimes\operatorname{sgn}}\bigr)=\omega(s_\lambda)=s_{\lambda'},$$

so $S^\lambda\otimes\operatorname{sgn}\cong S^{\lambda'}$ and
$\chi^{\lambda'}(w)=(-1)^{n-\ell(\rho)}\chi^\lambda(w)$ on elements of cycle
type $\rho$.

## Facts & Assumptions

**Given:** An integer $n\ge0$, a finite-dimensional complex representation $V$ of $S_n$ with character $\chi_V$, the sign representation $\operatorname{sgn}$, and $w\in S_n$ of cycle type $\rho\vdash n$ with $\ell(\rho)$ parts.

[F1] $\operatorname{ch}(\chi)=\sum_{\rho\vdash n}\chi(\rho)p_\rho/z_\rho$ for a character $\chi$, where $\chi(\rho)$ is its value on cycle type $\rho$ and $z_\rho=\prod_ii^{m_i(\rho)}m_i(\rho)!$ ([[def-frobenius-characteristic-map]]).

[F2] For finite-dimensional complex representations $V,W$ of $S_n$ one has $\chi_{V\otimes W}(g)=\chi_V(g)\chi_W(g)$ for every $g$, where $V\otimes W$ is the tensor product representation with $g\cdot(v\otimes w)=gv\otimes gw$ ([[thm-characters-of-direct-sums-tensor-products-and-duals]], [[def-tensor-product-of-complex-representations]]).

[F3] The sign representation of $S_n$ is one-dimensional with $\sigma\cdot a=\operatorname{sgn}(\sigma)a$; a $k$-cycle has sign $(-1)^{k-1}$, and $\operatorname{sgn}(w)=(-1)^{n-c(w)}$, where $c(w)=\ell(\rho)$ is the number of cycles of $w$ counted with fixed points ([[def-sign-representation-and-restriction-of-a-representation]], [[cor-sign-from-disjoint-cycle-structure]]).

[F4] The $\mathbb Z$-algebra endomorphism $\omega:\Lambda\to\Lambda$ with $\omega(e_r)=h_r$ is an involution and satisfies $\omega(p_r)=(-1)^{r-1}p_r$ in $\Lambda_{\mathbb Q}$ and $\omega(s_\lambda)=s_{\lambda'}$ for every partition $\lambda$; it extends to a $\mathbb C$-linear algebra endomorphism of $\Lambda_{\mathbb C}$ ([[prop-omega-conjugates-schur-functions]]).

[F5] $\operatorname{ch}(\chi^\lambda)=s_\lambda$ for every $\lambda\vdash n$, where $\chi^\lambda$ is the character of the Specht module $S^\lambda$ ([[thm-frobenius-characteristic-sends-specht-characters-to-schur-functions]]).

[F6] Two finite-dimensional complex representations of a finite group are isomorphic if and only if their characters are equal ([[thm-complex-representations-are-determined-by-their-characters]]).

[F7] The characteristic map is injective on $\mathrm{cf}(S_n)$ ([[lem-frobenius-characteristic-is-an-isometry]]).

## Proof

**Proof technique:** direct.

1.1 By [F2] and [F3], for $w$ of cycle type $\rho$ the tensor-product character is $\chi_{V\otimes\operatorname{sgn}}(w)=\chi_V(w)\operatorname{sgn}(w)=\chi_V(\rho)(-1)^{n-\ell(\rho)}$. [F2, F3]

1.2 Since $\omega$ is a $\mathbb C$-algebra endomorphism of $\Lambda_{\mathbb C}$ [F4] and $p_\rho=\prod_ip_{\rho_i}$ with $\ell(\rho)$ factors, $\omega(p_\rho)=\prod_i\omega(p_{\rho_i})=\prod_i(-1)^{\rho_i-1}p_{\rho_i}=(-1)^{\sum_i(\rho_i-1)}p_\rho=(-1)^{n-\ell(\rho)}p_\rho$. [F4, given]

2.1 From the definition of the characteristic [F1] and step 1.1, $\operatorname{ch}(\chi_{V\otimes\operatorname{sgn}})=\sum_{\rho\vdash n}\chi_{V\otimes\operatorname{sgn}}(\rho)\,p_\rho/z_\rho=\sum_{\rho\vdash n}\chi_V(\rho)(-1)^{n-\ell(\rho)}\,p_\rho/z_\rho$. [F1, step 1.1]

2.2 By $\mathbb C$-linearity of $\omega$ [F4], [F1] and step 1.2, $\omega(F)=\omega\bigl(\sum_{\rho\vdash n}\chi_V(\rho)p_\rho/z_\rho\bigr)=\sum_{\rho\vdash n}\chi_V(\rho)\omega(p_\rho)/z_\rho=\sum_{\rho\vdash n}\chi_V(\rho)(-1)^{n-\ell(\rho)}p_\rho/z_\rho$. [F1, F4, step 1.2]

3.1 Steps 2.1 and 2.2 exhibit two equal expressions, so $\operatorname{ch}(\chi_{V\otimes\operatorname{sgn}})=\omega(F)$ for every finite-dimensional complex representation $V$ of $S_n$. [step 2.1, step 2.2]

4.1 Taking $V=S^\lambda$ in step 3.1 and using [F5], $\operatorname{ch}(\chi_{S^\lambda\otimes\operatorname{sgn}})=\omega(s_\lambda)=s_{\lambda'}$ by [F4]. [F4, F5, step 3.1]

5.1 Since $\operatorname{ch}$ is injective on $\mathrm{cf}(S_n)$ [F7] and $\operatorname{ch}(\chi^{\lambda'})=s_{\lambda'}$ [F5], step 4.1 gives $\chi_{S^\lambda\otimes\operatorname{sgn}}=\chi^{\lambda'}$; by [F6] this equality of characters is equivalent to $S^\lambda\otimes\operatorname{sgn}\cong S^{\lambda'}$. Evaluating the character identity from step 1.1 for $V=S^\lambda$ gives $\chi^{\lambda'}(w)=(-1)^{n-\ell(\rho)}\chi^\lambda(w)$ for $w$ of cycle type $\rho$. [F5, F6, F7, step 1.1, step 4.1] ∎
