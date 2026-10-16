---
id: lem-qc-cyclotomic-scaled-grid-finiteness
kind: lemma
title: Finite coefficient bounds for the scaled cyclotomic grid
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - def-qc-dyadic-cyclotomic-ring
  - def-qc-cyclotomic-bullet-automorphism
  - def-qc-denominator-exponent
  - lem-qc-denominator-exponent-well-defined
  - lem-qc-dyadic-coefficient-encoding
  - lem-qc-dyadic-cyclotomic-conjugate-norm
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ross and Selinger, Optimal ancilla-free Clifford+T approximation of z-rotations"
      url: https://arxiv.org/pdf/1403.2975
dependency_level: 4
---

## Statement

Let $\bullet$ be the automorphism of $K=\mathbb Q(\omega)$ defined in
[[def-qc-cyclotomic-bullet-automorphism]], so $\omega^\bullet=-\omega=\omega^5$,
and let $u\in D\setminus\{0\}$ satisfy
$|u|\le1$ and $|u^\bullet|\le1$. Then $k=\operatorname{sde}(u)\ge0$. If
$a=(\sqrt2)^ku=a_0+a_1\omega+a_2\omega^2+a_3\omega^3$, then

$$|a_j|\le2^{k/2}\quad(0\le j\le3).$$

Thus for each fixed $k$ only finitely many coefficient vectors can occur; the
integer search may be restricted to
$|a_j|\le\lfloor2^{k/2}\rfloor$.

## Facts & Assumptions

**Given:** $K=\mathbb Q(\omega)$ has the four embeddings $\sigma_j(\omega)=\omega^j$ for $j=1,3,5,7$, complex conjugation pairs $\sigma_1$ with $\sigma_7$ and $\sigma_5$ with $\sigma_3$, and $\operatorname{sde}$ is the least square-root-of-two exponent.

[F1] [[def-qc-dyadic-cyclotomic-ring]]: $O=\mathbb Z[\omega]$ has unique power-basis coefficients and $D=O[1/2]$.

[F2] [[def-qc-cyclotomic-bullet-automorphism]]: $\bullet$ is the field automorphism $\omega\mapsto\omega^5=-\omega$, fixes $i$, commutes with complex conjugation, and preserves $D$.

[F3] [[lem-qc-dyadic-cyclotomic-conjugate-norm]]: for
$x=a_0+a_1\omega+a_2\omega^2+a_3\omega^3\in O$,
$x\bar x=P+\sqrt2Q$ with $P,Q\in\mathbb Z$.

## Proof


1.1 The two inequalities $|u|,|u^\bullet|\le1$, together with their complex conjugates, give $|\sigma_j(u)|\le1$ for all four embeddings $j=1,3,5,7$; these are the identity, complex conjugation, $\bullet$, and their composite by [F2]. If $k=-m<0$, the definition of $k$ gives $x=(\sqrt2)^k u=(\sqrt2)^{-m}u\in O$, so $u=(\sqrt2)^m x$. Thus $|\sigma_j(x)|\le2^{-m/2}$ for every $j$. By [F3], $x\bar x=P+\sqrt2Q$ with $P,Q\in\mathbb Z$. Since $\bullet$ negates $\sqrt2$ and commutes with conjugation, the product of all four embeddings is $\prod_{j=1,3,5,7}\sigma_j(x)=(x\bar x)(x^\bullet\overline{x^\bullet})=(P+\sqrt2Q)(P-\sqrt2Q)=P^2-2Q^2$. It is a nonzero integer because $x\ne0$ and each embedding is injective. Its modulus is at most $2^{-2m}<1$, a contradiction. This proves $k\ge0$. [given, F2, F3, algebra]

2.1 For $k\ge0$, set $a=(\sqrt2)^ku\in O$. Then $|\sigma_j(a)|\le2^{k/2}$ for every $j$. Fourier inversion in the power basis gives $a_r=\frac14\sum_{j\in\{1,3,5,7\}}\sigma_j(a)\omega^{-jr}$: expanding the sum, the coefficient of $a_s$ is $\frac14\sum_{j\text{ odd}}\omega^{j(s-r)}$, which equals $1$ for $s=r$ and $0$ for distinct $r,s\in\{0,1,2,3\}$. Therefore $|a_r|\le\frac14\sum_j|\sigma_j(a)|\le2^{k/2}$. Since $a_r$ is an integer, it lies in the stated finite interval. [F1, step 1.1, algebra] ∎

## Remarks

This proves a finite search bound, not a running-time bound for deciding exact
real inequalities at an arbitrary real input angle. The norm-equation step of
[[alg-qc-cyclotomic-scaled-grid-and-norm-solver]] is a separate procedure with its own locally proved
correctness and complexity suppliers.
