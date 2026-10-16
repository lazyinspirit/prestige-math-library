---
id: lem-qc-su2-balanced-commutator
kind: lemma
title: A Quantitative Balanced Commutator in SU(2)
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 5
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - lem-qc-su2-near-identity-logarithm
  - lem-qc-pauli-vector-multiplication
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-sine-and-cosine-derivatives
  - cor-mean-value-theorem
justified_by: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Christopher M. Dawson and Michael A. Nielsen, The Solovay–Kitaev Algorithm, arXiv:quant-ph/0505030v2"
      url: https://arxiv.org/pdf/quant-ph/0505030
      locator: §4.1, balanced commutators in SU(2), PDF pp. 8–9
    - title: Dieter van Melkebeek and Thomas Watson, Time-Space Efficient Simulations of Quantum Computations
      url: https://theoryofcomputing.org/articles/v008a001/v008a001.pdf
      locator: §4.3.2–§4.3.3, PDF pp. 28–39
---

## Statement

For a matrix $M$, write $e^M=\sum_{j\ge0}M^j/j!$. Here
$SU(2):=\{M\in M_2(\mathbb C):M^*M=I_2,\det M=1\}$. If
$D\in SU(2)$ and $0\le\|D-I\|\le\eta\le1/16$, there are
$V,W\in SU(2)$ such that
$$\|V-I\|,\|W-I\|\le\sqrt\eta,\qquad \|D-VWV^*W^*\|\le40\eta^{3/2}.$$

## Facts & Assumptions

**Given:** $D\in SU(2)$ and $0\le\|D-I\|\le\eta\le1/16$.

[F1] The near-identity logarithm is traceless and skew-Hermitian and has norm
at most $2\eta$ ([[lem-qc-su2-near-identity-logarithm]]).

[F2] For real vectors $a,b$, Pauli multiplication gives
$[i a\cdot\sigma,i b\cdot\sigma]=-2i(a\times b)\cdot\sigma$
([[lem-qc-pauli-vector-multiplication]]).

[F3] The operator norm is submultiplicative
([[cor-operator-norm-submultiplicative-and-t-star-t-identity]]).

[F4] Euler's formula and the Pythagorean identity give
$e^{it}=\cos t+i\sin t$ and $\cos^2t+\sin^2t=1$
([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F5] Sine is differentiable with derivative cosine and $\sin0=0$
([[thm-sine-and-cosine-derivatives]]); the mean value theorem applies to a
continuous function on a closed interval that is differentiable in its
interior ([[cor-mean-value-theorem]]).

[F6] The operator-norm triangle inequality follows from its definition by
applying the vector triangle inequality to each unit input and taking the
maximum ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

## Proof

1.1 Write $X=\log D=i v\cdot\sigma$ with $v\in\mathbb R^3$; the Pauli matrices form a real basis of the traceless skew-Hermitian $2\times2$ matrices, and [F2] gives $\|X\|=|v|$. If $v=0$, take $a=b=0$ and $V=W=I$. Otherwise set $u=v/|v|$, choose the smallest index $k\in\{1,2,3\}$ attaining $\min_i|u_i|$, and let $e_k$ be the corresponding coordinate vector. Then $w=u\times e_k$ has norm at least $\sqrt{2/3}>1/2$; put $e=w/|w|$. This is a deterministic choice with $e\perp u$. Set $a=\sqrt{|v|/2}\,e$ and $b=-\sqrt{|v|/2}\,(u\times e)$. Then $a\times b=-v/2$ and $|a|=|b|=\sqrt{|v|/2}\le\sqrt\eta$. [F1, F2, given, construct]

2.1 For every real $t$, $|\sin t|\le|t|$: it is immediate at $t=0$, and otherwise [F5] and the mean value theorem give $\sin t-\sin0=\cos(c)t$ for some $c$ between $0$ and $t$; [F4] implies $|\cos c|\le1$. Put $A=i a\cdot\sigma$, $B=i b\cdot\sigma$, $V=e^A$ and $W=e^B$. For $a\ne0$, $P=a\cdot\sigma/|a|$ is Hermitian, traceless and satisfies $P^2=I$ by [F2]; its eigenvalues are $1,-1$. Thus $e^A=I\cos|a|+iP\sin|a|$ by the power series and [F4], so it is unitary with determinant $1$ and $\|e^A-I\|=2|\sin(|a|/2)|\le|a|$. If $a=0$, $e^A=I$; the same argument applies to $B$. By [F2], $[A,B]=X$, and both distances are at most $\sqrt\eta$. [F2, F4, F5, step 1.1, algebra]

3.1 Expand $e^Ae^Be^{-A}e^{-B}$ as a sum of homogeneous terms in $A,B$. Its degree-one terms cancel, and direct multiplication of the degree-two terms gives $AB-BA=[A,B]$. By [F3], products have norm at most the product of their norms; the triangle inequality [F6] therefore bounds the sum of norms of all terms of total degree $n$ by $(4s)^n/n!$, where $s=\max(\|A\|,\|B\|)\le1/4$. Hence the degree-at-least-three remainder has norm at most $(4s)^3e^{4s}/6<32s^3$. [F3, F6, step 2.1, algebra]

4.1 The exponential series and [F3] give $\|e^X-I-X\|\le\|X\|^2e^{\|X\|}/2\le2s^4e^{2s^2}\le s^3$, since $\|X\|=\|[A,B]\|\le2s^2$ and $s\le1/4$. By the triangle inequality [F6], $\|e^X-e^Ae^Be^{-A}e^{-B}\|\le33s^3\le40\eta^{3/2}$. By [F1], $e^X=D$; step 2.1 gives $[A,B]=X$, and step 3.1 controls the commutator expansion. These facts prove the claim. [F1, F3, F6, step 2.1, step 3.1, algebra] ∎
