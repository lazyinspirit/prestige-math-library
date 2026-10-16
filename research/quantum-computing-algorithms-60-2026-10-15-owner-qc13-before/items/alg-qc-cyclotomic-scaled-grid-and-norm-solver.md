---
id: alg-qc-cyclotomic-scaled-grid-and-norm-solver
kind: algorithm
title: Cyclotomic scaled grid and norm-equation solver
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - def-qc-dyadic-cyclotomic-ring
  - def-qc-cyclotomic-bullet-automorphism
  - lem-qc-dyadic-cyclotomic-conjugate-norm
  - def-qc-denominator-exponent
  - lem-qc-denominator-exponent-well-defined
  - lem-qc-dyadic-coefficient-encoding
  - lem-qc-cyclotomic-scaled-grid-finiteness
  - cor-rational-algebraic-integers-are-integers
  - def-qc-ancilla-free-rz-approximation-problem
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ross and Selinger, Optimal ancilla-free Clifford+T approximation of z-rotations"
      url: https://arxiv.org/pdf/1403.2975
---

## Definition

Fix $\omega=e^{i\pi/4}$ and $D=\mathbb Z[\omega,1/2]$. Use the automorphism
$\bullet$ from [[def-qc-cyclotomic-bullet-automorphism]], which sends
$\omega$ to $-\omega=\omega^5$ and fixes $i$. Let $0<\varepsilon<1/2$ and
$\theta\in\mathbb R$. The scaled grid for this input is

$$\mathcal G(\theta,\varepsilon)=\{u\in D:\ |u|\le1,\ |u^\bullet|\le1,\ \operatorname{Re}(e^{i\theta/2}u)\ge1-\varepsilon^2/2\}.$$

Enumerate it by increasing $k=\operatorname{sde}(u)$ and lexicographic
power-basis coefficients. For each $k\ge0$, write
$u=(a_0+a_1\omega+a_2\omega^2+a_3\omega^3)/(\sqrt2)^k$ with least exponent
$k$; the finite coefficient bound is
$|a_j|\le\lfloor2^{k/2}\rfloor$, proved in
[[lem-qc-cyclotomic-scaled-grid-finiteness]]. Test the three displayed
conditions exactly. This defines a finite candidate list for each $k$.

For a candidate $u$, put
$\xi=1-u^\dagger u=1-|u|^2\in D_+=\mathbb Z[\sqrt2,1/2]$, using
[[lem-qc-dyadic-cyclotomic-conjugate-norm]]. For scalars, $z^\dagger=\bar z$.
Write
$\xi^\bullet\xi=n/2^\ell$ with $n\in\mathbb Z$ and least $\ell\ge0$; compute
it by writing $\xi=a+b\sqrt2$ with $a,b\in\mathbb Z[1/2]$ and multiplying
$(a-b\sqrt2)(a+b\sqrt2)=a^2-2b^2$. The two disk conditions give
$\xi,\xi^\bullet\ge0$, so $n\ge0$; if $\xi\ne0$, injectivity of $\bullet$
gives $n>0$.
The norm-equation subprocedure receives $\xi$ and, if $n\ne0$, a prime
factorization of $n$. It must decide whether some $t\in D$ satisfies
$t^\dagger t=\xi$, return an exact such $t$ if one exists, and otherwise return
`NO_SOLUTION`. If $\xi=0$, it returns $t=0$. A bounded factorization attempt
may return `FACTOR_TIMEOUT`; that result skips this candidate and is not a
proof of `NO_SOLUTION`.

## Authoring status

The scaled-grid enumeration is finite with an explicit coefficient bound.
The local construction that factors $n$ and decides/solves
$t^\dagger t=\xi$ is not yet proved here. Ross–Selinger Theorem 6.2 and
Appendix C give the route but are not a substitute for local carriers. The
required A-page suppliers are Euclidean algorithms and unique factorization
in $\mathbb Z[\sqrt2]$ and $\mathbb Z[\omega]$; the unit/double-positivity
square criterion; prime splitting modulo $8$ with constructive factor
recovery; the $\dagger$-decomposability test by conjugate-prime allocation;
and localization back to exact $t^\dagger t=\xi$. Their complete proofs and
the exact-real comparison contract are owner escalations. The affected Rz
correctness, termination, and T-count claims remain explicit; see batch notes.
