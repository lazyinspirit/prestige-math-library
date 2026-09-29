---
id: cor-power-sums-are-orthogonal-for-the-hall-inner-product
kind: corollary
title: Power sums are orthogonal for the Hall form
status: published
origin: pipeline
deps:
  - def-hall-inner-product-on-symmetric-functions
  - thm-cauchy-kernel-has-power-complete-and-schur-expansions
  - prop-power-sums-form-a-rational-not-integral-stable-basis
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §4, equations (4.5)–(4.7), printed pp. 63–64
      url: https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf
    - title: Jeremy L. Martin, Lecture Notes on Algebraic Combinatorics, §9.9, printed pp. 191–195
      url: https://jeremymartinmath.github.io/CombinatoricsNotes.pdf
---

## Statement

Extend the Hall form $\langle\ ,\ \rangle_H$ on $\Lambda$
$\mathbb Q$-bilinearly to
$\Lambda_{\mathbb Q}:=\mathbb Q\otimes_{\mathbb Z}\Lambda$. For partitions
$\lambda$ and $\mu$, let
$$z_\lambda:=\prod_{r\ge1}r^{m_r(\lambda)}m_r(\lambda)!,\qquad m_r(\lambda):=\#\{i:\lambda_i=r\}.$$
Then
$$\langle p_\lambda,p_\mu\rangle_H=\delta_{\lambda\mu}z_\lambda.$$
In particular, power sums of unequal degrees are orthogonal.

## Facts & Assumptions

**Given:** The graded Hall form, its dual complete and monomial bases, the power-sum and complete–monomial Cauchy expansions, and the rational power-sum basis.

[F1] The Hall form is graded and satisfies $\langle h_\alpha,m_\beta\rangle_H=\delta_{\alpha\beta}$ for partitions $\alpha,\beta$; its degreewise restriction extends to a $\mathbb Q$-bilinear form on each $\Lambda_{\mathbb Q}^d$ ([[def-hall-inner-product-on-symmetric-functions]]).

[F2] For the Cauchy kernel, each diagonal bidegree component has both expansions $\Omega_d=\sum_{\nu\vdash d}h_\nu(x)m_\nu(y)$ and $\Omega_d=\sum_{\nu\vdash d}z_\nu^{-1}p_\nu(x)p_\nu(y)$ in the rational tensor product ([[thm-cauchy-kernel-has-power-complete-and-schur-expansions]]).

[F3] For each $d\ge0$, $\{p_\nu:\nu\vdash d\}$ is a $\mathbb Q$-basis of $\Lambda_{\mathbb Q}^d$ ([[prop-power-sums-form-a-rational-not-integral-stable-basis]]).

## Proof

**Proof technique:** direct.

1.1 Fix $d\ge0$, whose partition set is finite, and let $V=\Lambda_{\mathbb Q}^d$; the Hall form extends to $V$ by scalar extension. Let $(u_i)$ and $(v_i)$ be any two bases and write $u_i=\sum_\alpha a_{i\alpha}h_\alpha$ and $v_j=\sum_\beta b_{j\beta}m_\beta$ using the dual bases from [F1]. With $A=(a_{i\alpha})$ and $B=(b_{j\beta})$, [F1] gives $\langle u_i,v_j\rangle_H=(AB^{\mathsf T})_{ij}$, while the coefficient of $h_\alpha\otimes m_\beta$ in $\sum_i u_i(x)v_i(y)$ is $(A^{\mathsf T}B)_{\alpha\beta}$. If this tensor equals the complete–monomial kernel $\sum_{\alpha\vdash d}h_\alpha(x)m_\alpha(y)$ from [F2], then $A^{\mathsf T}B=I$; invertibility yields $B=(A^{\mathsf T})^{-1}$ and $AB^{\mathsf T}=I$, hence $\langle u_i,v_j\rangle_H=\delta_{ij}$. This finite dual-kernel criterion makes no symmetry assumption on the Hall form. [F1, F2, algebra]

2.1 By [F3], $u_\nu=p_\nu$ is a basis of $V$. A partition has finitely many parts, so only finitely many $m_r(\nu)$ are nonzero; thus $z_\nu$ is a positive integer and $v_\nu=p_\nu/z_\nu$ is also a basis. The power-sum expansion in [F2] is $\Omega_d=\sum_{\nu\vdash d}u_\nu(x)v_\nu(y)$, so step 1.1 gives $\langle p_\lambda,p_\mu/z_\mu\rangle_H=\delta_{\lambda\mu}$. Bilinearity yields $\langle p_\lambda,p_\mu\rangle_H=z_\mu\delta_{\lambda\mu}$, which equals $z_\lambda$ on the diagonal and zero off it. For $d=0$, $p_\varnothing=1$, $z_\varnothing=1$, and $\langle1,1\rangle_H=1$; for the one-part partition $(r)$, $z_{(r)}=r$ and $\langle p_r,p_r\rangle_H=r$. [F1, F2, F3, step 1.1, algebra]

3.1 If $|\lambda|\ne|\mu|$, the graded definition in [F1] gives $\langle p_\lambda,p_\mu\rangle_H=0$, and bilinearity makes a zero input pair to zero. Each fixed degree has finitely many partitions, and the proof uses finite basis changes and sums; no arbitrary choices are made and the axiom of choice is not used. [F1, algebra] ∎
