---
id: lem-affine-curve-prime-to-characteristic-torsion-cohomology
kind: lemma
title: "Prime-to-characteristic torsion cohomology of a smooth affine curve"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-generic-point-leray-and-kummer-curve-cohomology-in-zf
  - thm-picard-zero-represented-by-jacobian
  - lem-multiplication-by-n-on-abelian-scheme
justified_by: []
proof_strategy: direct
axiom_use: "AC/DC are inherited from the Jacobian and multiplication suppliers."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "SGA 4, Exposé IX, section 4, cohomology of algebraic curves"
      url: "https://grothendiecksga.com/read/sga4/en/IX-4.html"
      locator: "The explicit affine prime-power case is reconstructed below using the generic-point calculation and Jacobian."
verification: {}
---

## Statement

Assume AC and DC. Let $k$ be algebraically closed, $\ell\ne\operatorname{char}k$ a prime, and $r\geq1$. Let $C$ be a smooth connected affine $k$-curve with smooth projective completion $\overline C$ of genus $g$ and nonempty finite boundary $\{p_1,\ldots,p_d\}$. Then
$$H^2_{\mathrm{et}}(C,\mu_{\ell^r})=0,\qquad H^1_{\mathrm{et}}(C,\mu_{\ell^r})\cong(\mathbb Z/\ell^r\mathbb Z)^{2g+d-1},$$
and $H^q_{\mathrm{et}}(C,\mu_{\ell^r})=0$ for $q>2$. The isomorphism in degree one is not canonical. The statement is fibrewise and does not assert relative base change or local constancy.

## Facts & Assumptions

**Given:** The algebraically closed field, prime power, smooth affine curve, completion, genus and boundary in the Statement.

[A1] AC and DC are assumed. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] Generic-point Leray and Kummer give the stated valuation exact sequence and degree bound for smooth curves over $k$. [[lem-generic-point-leray-and-kummer-curve-cohomology-in-zf]]

[F2] The degree-zero Picard group of a smooth projective connected curve is the group of $k$-points of its Jacobian, an abelian variety of dimension $g$. [[thm-picard-zero-represented-by-jacobian]]

[F3] Multiplication by any positive integer $n$ on an abelian variety is finite flat and surjective of degree $n^{2g}$, and is étale when $n$ is invertible in $k$. [[lem-multiplication-by-n-on-abelian-scheme]]

## Proof

**Proof technique:** compute divisors modulo the prime power and use divisibility of the Jacobian.

1.1 Put $n=\ell^r$ and $K=k(\overline C)$. The finite boundary is nonempty, because an affine proper connected curve would have only constant global functions and thus could not be one-dimensional. Every divisor class on $C$ extends to $\overline C$; subtracting its degree times the boundary point $p_d$ makes the extension degree zero without changing its restriction. By [F2] and surjectivity in [F3], the degree-zero Picard group is $n$-divisible: a $k$-point in each nonempty fibre exists because $k$ is algebraically closed. Therefore $\operatorname{Pic}(C)/n=0$. The cokernel in the valuation sequence [F1] is exactly $\operatorname{Pic}(C)/n$, so $H^2(C,\mu_n)=0$. The same supplier gives $H^q(C,\mu_n)=0$ for $q>2$. [A1, F1, F2, F3, given, choose, algebra]

2.1 By [F1], $H^1(C,\mu_n)$ injects into $K^\times/K^{\times n}$ as the classes with valuations divisible by $n$ at every point of $C$. Taking the valuations at the boundary defines a homomorphism to $(\mathbb Z/n)^d$ with sum zero, because principal divisors on $\overline C$ have degree zero. Its kernel is $H^1(\overline C,\mu_n)$ by the same valuation description. On the projective curve, the Kummer sequence identifies that kernel with $\operatorname{Pic}(\overline C)[n]=J(k)[n]$, since $k^\times$ is $n$-divisible. [F1, F2, step 1.1, algebra]

3.1 Every boundary residue vector with sum zero occurs. Choose integer representatives of sum exactly zero and form the degree-zero boundary divisor $D$. By divisibility of $J(k)$, there is a degree-zero divisor $E$ with $[D]=n[E]$. Thus $D-nE=\operatorname{div}(h)$ for some $h\in K^\times$; its valuations on $C$ are multiples of $n$ and its boundary residues are the chosen vector. Therefore there is a short exact sequence $0\to J(k)[n]\to H^1(C,\mu_n)\to\{(a_i)\in(\mathbb Z/n)^d:\sum_i a_i=0\}\to0$. By [F3], $J[\ell^a]$ is finite étale of rank $\ell^{2ga}$ for every $1\leq a\leq r$. Its $k$-points therefore have those cardinalities, and the elementary divisor theorem gives $J(k)[n]\cong(\mathbb Z/n)^{2g}$. The quotient is free of rank $d-1$ over $\mathbb Z/n$, so the sequence splits and gives the asserted rank. [A1, F3, step 1.1, step 2.1, choose, construct, algebra] ∎
