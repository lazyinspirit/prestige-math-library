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
       thm-frobenius-characteristic-sends-specht-characters-to-schur-functions]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford University Press 1995"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I, §7, display (7.12) and Example I.7.20, printed pp. 116-117: $p_\\rho*p_\\sigma=\\delta_{\\rho\\sigma}z_\\rho p_\\rho$ and the power-sum diagonalization of the internal product"
    - title: "Igor Pak and Greta Panova, On the complexity of computing Kronecker coefficients, arXiv:1404.0653v3 (2015)"
      url: "https://arxiv.org/pdf/1404.0653"
      locator: "§2.3, printed pp. 5-6: the internal product is diagonal in the power-sum basis"
---

## Statement

For partitions $\rho,\sigma\vdash n$ one has
$$p_\rho*p_\sigma=\delta_{\rho,\sigma}\,z_\rho\,p_\rho,\qquad z_\rho=\prod_{i\ge1}i^{m_i(\rho)}m_i(\rho)!,$$
where $m_i(\rho)$ is the number of parts of $\rho$ equal to $i$. Consequently
$$s_\lambda*s_\mu=\sum_{\nu\vdash n}g(\lambda,\mu,\nu)\,s_\nu$$
for all $\lambda,\mu\vdash n$. The internal product on $\Lambda^n$ is therefore
diagonal in the power-sum basis, with $z_\rho$ the diagonal scalars, and it has
the integer structure constants $g(\lambda,\mu,\nu)$ in the Schur basis.

## Facts & Assumptions

**Given:** An integer $n\ge0$, partitions $\rho,\sigma,\lambda,\mu\vdash n$, and the class function $1_\rho\in\mathrm{cf}(S_n)$ equal to $1$ on the conjugacy class of cycle type $\rho$ and to $0$ elsewhere.

[F1] Cycle type determines the conjugacy class, so $1_\rho$ is a well-defined class function and $1_\rho\cdot1_\sigma=\delta_{\rho,\sigma}1_\rho$ for the pointwise product ([[def-frobenius-characteristic-map]], [[def-class-function-and-the-space-of-complex-class-functions]]).

[F2] For $f\in\mathrm{cf}(S_n)$, $\operatorname{ch}(f)=\sum_{\tau\vdash n}f(\tau)\,p_\tau/z_\tau$; in particular $\operatorname{ch}(1_\rho)=p_\rho/z_\rho$, and $z_\rho=\prod_ii^{m_i(\rho)}m_i(\rho)!$ is a positive integer ([[def-frobenius-characteristic-map]]).

[F3] The internal product is defined by $f*g=\operatorname{ch}(\operatorname{ch}^{-1}(f)\cdot\operatorname{ch}^{-1}(g))$ for $f,g$ of the same degree, it is bilinear, and for partitions $\lambda,\mu\vdash n$ one has $s_\lambda*s_\mu=\sum_{\nu\vdash n}g(\lambda,\mu,\nu)s_\nu$ ([[def-internal-product-on-symmetric-functions]]).

[F4] $\operatorname{ch}(\chi^\lambda)=s_\lambda$ for every $\lambda\vdash n$ ([[thm-frobenius-characteristic-sends-specht-characters-to-schur-functions]]).

[F5] Each Kronecker coefficient $g(\lambda,\mu,\nu)$ is a nonnegative integer ([[def-kronecker-coefficient-and-internal-tensor-product]]).

## Proof

**Proof technique:** direct.

1.1 The characteristic of the class-function indicator is $\operatorname{ch}(1_\rho)=\sum_{\tau\vdash n}1_\rho(\tau)p_\tau/z_\tau=p_\rho/z_\rho$ by [F2], since $1_\rho$ vanishes off the class of cycle type $\rho$ and $1_\rho(\rho)=1$. [F2, F1]

1.2 The pointwise product of the two indicators is $1_\rho\cdot1_\sigma=\delta_{\rho,\sigma}1_\rho$: both are $0$-$1$ valued on the partition of $S_n$ into conjugacy classes, they have disjoint supports when $\rho\ne\sigma$, and their product on the class $\rho$ is $1$. [F1]

2.1 Applying the internal product [F3] to the two characteristics of step 1.1
and using step 1.2 gives
$$(p_\rho/z_\rho)*(p_\sigma/z_\sigma)=\operatorname{ch}\bigl(1_\rho\cdot1_\sigma\bigr)=\delta_{\rho,\sigma}\operatorname{ch}(1_\rho)=\delta_{\rho,\sigma}\,p_\rho/z_\rho.$$
[F3, step 1.1, step 1.2]

3.1 By bilinearity of $*$ from [F3], multiplying the identity of step 2.1 by $z_\rho z_\sigma$ gives $p_\rho*p_\sigma=\delta_{\rho,\sigma}z_\rho z_\sigma p_\rho/z_\rho=\delta_{\rho,\sigma}z_\rho p_\rho$, since $\delta_{\rho,\sigma}z_\sigma=\delta_{\rho,\sigma}z_\rho$. [F3, step 2.1, algebra]

4.1 The Schur-basis form is the defining expansion $s_\lambda*s_\mu=\sum_\nu g(\lambda,\mu,\nu)s_\nu$ quoted in [F3], which is consistent with the definition through $\operatorname{ch}(\chi^\lambda)=s_\lambda$ and $\operatorname{ch}(\chi^\mu)=s_\mu$ from [F4]; the structure constants $g(\lambda,\mu,\nu)$ are nonnegative integers by [F5]. This proves the stated Schur expansion. [F3, F4, F5, step 3.1] ∎

No form of the Axiom of Choice is used.
