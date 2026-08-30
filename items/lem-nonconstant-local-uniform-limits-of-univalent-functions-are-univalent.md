---
id: lem-nonconstant-local-uniform-limits-of-univalent-functions-are-univalent
kind: lemma
title: "A nonconstant locally uniform limit of univalent functions is univalent"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-univalent-holomorphic-function, thm-hurwitz-zero-free-limit]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  references:
    - title: "Matthias Weber, Complex Analysis, Theorem 5.2.6"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Walter Rudin, Real and Complex Analysis, Theorem 14.9"
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---

## Statement

Let $\Omega$ be a complex domain, let $f_n:\Omega\to\mathbb C$ be univalent for
every $n$, and suppose $f_n\to f$ locally uniformly on $\Omega$. If $f$ is
nonconstant, then $f$ is univalent.

## Facts & Assumptions

**Given:** A complex domain $\Omega$, univalent maps $f_n:\Omega\to\mathbb C$, and locally uniform convergence $f_n\to f$ to a nonconstant holomorphic limit.

[L1] A univalent map is injective ([[def-univalent-holomorphic-function]]).

[L2] A locally uniform limit of nowhere-zero holomorphic functions is either identically zero or nowhere zero ([[thm-hurwitz-zero-free-limit]]).

## Proof

**Proof technique:** direct.

1.1 Fix $a\in\Omega$. For each $n$, define $$h_n(z):=\frac{f_n(z)-f_n(a)}{z-a}\qquad(z\in\Omega\setminus\{a\}).$$ Since each $f_n$ is injective by [L1], the function $h_n$ has no zeros on $\Omega\setminus\{a\}$. The removable singularity at $a$ is filled by $h_n(a):=f_n'(a)$, so each $h_n$ is holomorphic and nowhere zero on $\Omega$. [L1, given, algebra]

2.1 The functions $h_n$ converge locally uniformly to $$h(z):=\begin{cases}\dfrac{f(z)-f(a)}{z-a},&z\ne a,\\ f'(a),&z=a,\end{cases}$$ because $f_n\to f$ locally uniformly and derivatives converge locally uniformly as well. Fact [L2] therefore makes $h$ either identically zero or nowhere zero. [L2, step 1.1, algebra]

3.1 Since $f$ is nonconstant, the function $h$ is not identically zero. Hence step 2.1 makes $h$ nowhere zero. If $f(z)=f(a)$, then $h(z)=0$ unless $z=a$, so necessarily $z=a$. As $a$ was arbitrary, $f$ is injective and therefore univalent by [L1]. [L1, step 2.1, discharge-construct] ∎
