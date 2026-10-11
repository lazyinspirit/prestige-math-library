---
id: prop-power-sums-diagonalize-the-internal-product
kind: proposition
title: Power sums diagonalize the internal product
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 2
deps: [def-internal-product-on-symmetric-functions,
       def-kronecker-coefficient-and-internal-tensor-product,
       def-frobenius-characteristic-map,
       def-class-function-and-the-space-of-complex-class-functions,
       thm-frobenius-characteristic-sends-specht-characters-to-schur-functions,
       thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions,
       def-standard-inner-product-on-complex-class-functions,
       lem-complex-specht-modules-are-self-dual,
       lem-frobenius-characteristic-is-an-isometry]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford University Press 1995"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I, §7, printed p. 116, (7.10) and (7.12): Schur structure constants and power-sum diagonalization."
    - title: "Igor Pak and Greta Panova, On the complexity of computing Kronecker coefficients, arXiv:1404.0653v3 (2015)"
      url: "https://arxiv.org/pdf/1404.0653"
      locator: "§2.3, printed p. 4: the defining Schur expansion of the internal product. The power-sum diagonal formula is proved locally below."
---

## Statement

For partitions $\rho,\sigma\vdash n$ one has
$$p_\rho*p_\sigma=\delta_{\rho,\sigma}\,z_\rho\,p_\rho,\qquad z_\rho=\prod_{i\ge1}i^{m_i(\rho)}m_i(\rho)!,$$
where $m_i(\rho)$ is the number of parts of $\rho$ equal to $i$. Consequently
$$s_\lambda*s_\mu=\sum_{\nu\vdash n}g(\lambda,\mu,\nu)\,s_\nu$$
for all $\lambda,\mu\vdash n$. The internal product on $\Lambda^n$ is therefore
diagonal in the power-sum basis after extension to $\Lambda_{\mathbb Q}^n$,
with $z_\rho$ the diagonal scalars, and it has
the integer structure constants $g(\lambda,\mu,\nu)$ in the Schur basis.

## Facts & Assumptions

**Given:** An integer $n\ge0$, partitions $\rho,\sigma,\lambda,\mu\vdash n$, and the class function $1_\rho\in\mathrm{cf}(S_n)$ equal to $1$ on the conjugacy class of cycle type $\rho$ and to $0$ elsewhere.

[F1] Cycle type determines the conjugacy class, so $1_\rho$ is a well-defined class function and $1_\rho\cdot1_\sigma=\delta_{\rho,\sigma}1_\rho$ for the pointwise product ([[def-frobenius-characteristic-map]], [[def-class-function-and-the-space-of-complex-class-functions]]).

[F2] For $f\in\mathrm{cf}(S_n)$, $\operatorname{ch}(f)=\sum_{\tau\vdash n}f(\tau)\,p_\tau/z_\tau$; in particular $\operatorname{ch}(1_\rho)=p_\rho/z_\rho$, and $z_\rho=\prod_ii^{m_i(\rho)}m_i(\rho)!$ is a positive integer ([[def-frobenius-characteristic-map]]).

[F3] The internal product is defined by $f*g=\operatorname{ch}(\operatorname{ch}^{-1}(f)\cdot\operatorname{ch}^{-1}(g))$ for $f,g$ of the same degree, it is bilinear, and for partitions $\lambda,\mu\vdash n$ one has $s_\lambda*s_\mu=\sum_{\nu\vdash n}g(\lambda,\mu,\nu)s_\nu$ ([[def-internal-product-on-symmetric-functions]]).

[F4] $\operatorname{ch}(\chi^\lambda)=s_\lambda$ for every $\lambda\vdash n$ ([[thm-frobenius-characteristic-sends-specht-characters-to-schur-functions]]).

[F5] Each Kronecker coefficient $g(\lambda,\mu,\nu)$ is a nonnegative integer ([[def-kronecker-coefficient-and-internal-tensor-product]]).

[F6] The Specht characters form an orthonormal basis of $\mathrm{cf}(S_n)$, are real-valued, and the standard inner product is $\langle f,g\rangle=\sum_{\tau\vdash n}f(\tau)\overline{g(\tau)}/z_\tau$ after grouping by cycle type ([[thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions]], [[def-standard-inner-product-on-complex-class-functions]], [[lem-frobenius-characteristic-is-an-isometry]], [[lem-complex-specht-modules-are-self-dual]]). All values $\chi^\lambda(\tau)$ are integers ([[thm-frobenius-characteristic-sends-specht-characters-to-schur-functions]]).

## Proof

**Proof technique:** direct.

1.1 Put $u_\rho:=z_\rho1_\rho$. By [F6], $\langle u_\rho,\chi^\lambda\rangle=\chi^\lambda(\rho)\in\mathbb Z$, and expansion in the orthonormal character basis gives $u_\rho=\sum_{\lambda\vdash n}\chi^\lambda(\rho)\chi^\lambda\in R(S_n)$. Thus its characteristic $\operatorname{ch}(u_\rho)=p_\rho$ from [F2] is an admissible integral input for [F3]. [F2, F6, algebra]

2.1 The indicators have pointwise product $1_\rho1_\sigma=\delta_{\rho,\sigma}1_\rho$ by [F1]. Hence $u_\rho u_\sigma=\delta_{\rho,\sigma}z_\rho u_\rho$. [F1, step 1.1, algebra]

3.1 Apply [F3] to the integral virtual characters from step 1.1. Linearity of the characteristic and step 2.1 give $p_\rho*p_\sigma=\operatorname{ch}(u_\rho u_\sigma)=\delta_{\rho,\sigma}z_\rho p_\rho$. This is an identity in $\Lambda^n$, without applying $*$ to a rational input. [F2, F3, step 1.1, step 2.1, algebra]

4.1 Extend the integral bilinear product uniquely to $\Lambda_{\mathbb Q}^n$ by $(f/a)*(g/b):=(f*g)/(ab)$ for $f,g\in\Lambda^n$ and positive integers $a,b$. Bilinearity and clearing denominators prove independence of these presentations. The rational power-sum basis supplied by [F2] then makes step 3.1 the asserted diagonalization. [F2, F3, step 3.1, algebra]

5.1 The Schur-basis form is the defining expansion $s_\lambda*s_\mu=\sum_\nu g(\lambda,\mu,\nu)s_\nu$ quoted in [F3], which is consistent with the definition through $\operatorname{ch}(\chi^\lambda)=s_\lambda$ and $\operatorname{ch}(\chi^\mu)=s_\mu$ from [F4]; the structure constants $g(\lambda,\mu,\nu)$ are nonnegative integers by [F5]. This proves the stated Schur expansion. [F3, F4, F5, step 4.1] ∎

No form of the Axiom of Choice is used.
