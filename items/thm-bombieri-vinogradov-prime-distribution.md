---
id: thm-bombieri-vinogradov-prime-distribution
kind: theorem
title: "Bombieri–Vinogradov theorem in Chebyshev progression form"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 22
deps:
  - def-prime-progression-discrepancy
  - thm-siegel-walfisz-prime-distribution
  - lem-vaughan-large-conductor-primitive-character-first-moment
  - thm-vaughan-identity-for-von-mangoldt-sums
  - thm-multiplicative-large-sieve-inequality
  - thm-dirichlet-character-orthogonality
  - thm-dirichlet-character-primitive-induction
  - def-induced-dirichlet-character
  - thm-fundamental-theorem-of-arithmetic
  - thm-euler-totient-product-formula
  - def-unit-group-modulo-n-and-euler-totient
  - def-number-theoretic-mobius-function
  - def-von-mangoldt-function
  - thm-logarithm-derivative-and-integral
  - thm-logarithm-slower-than-every-positive-power
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Chapter 17, The Bombieri–Vinogradov theorem: statement"
      url: "https://kskedlaya.org/ant/chap-bombieri.html"
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Chapter 18, The Bombieri–Vinogradov theorem: proof"
      url: "https://kskedlaya.org/18.785/bombieri2.pdf"
    - title: "Terence Tao, 254A Notes 3, Theorems 16–17 and the Bombieri–Vinogradov proof"
      url: "https://terrytao.wordpress.com/2015/01/10/254a-notes-3-the-large-sieve-and-the-bombieri-vinogradov-theorem/"
---

## Statement

Assume the Axiom of Choice, Countable Choice, and Dependent Choice. For every
real $A>0$, let $B=2A+6$. There are constants $C_A>0$ and $x_A\ge3$ such
that, for every real $x\ge x_A$,

$$
\sum_{1\le q\le x^{1/2}(\log x)^{-B}} \max_{a\in(\mathbb Z/q\mathbb Z)^\times}|E_\psi(x;q,a)| \le C_A x(\log x)^{-A}.
$$

The sum includes $q=1$. The maximum is over reduced residue classes for each
modulus; there is no maximum over endpoints $y\le x$. The choice $B=2A+6$ is
a sufficient cutoff from the stated proof route, not an optimality assertion.

## Statement references

[Kedlaya, Chapter 17, Theorem 17.1](https://kskedlaya.org/ant/chap-bombieri.html)

[Kedlaya, Chapter 18, Theorem 18.4 proof](https://kskedlaya.org/18.785/bombieri2.pdf)

[Tao, Notes 3, Theorem 17 and its proof](https://terrytao.wordpress.com/2015/01/10/254a-notes-3-the-large-sieve-and-the-bombieri-vinogradov-theorem/)

## Facts & Assumptions

**Given:** The original three choice assumptions, a real $A>0$, $B=2A+6$, and $x$ sufficiently large depending on $A$.

[A1] The original AC, CC and DC hypotheses are retained ([[def-axiom-of-choice]], [[def-countable-choice]], [[def-dependent-choice]]).

[F1] Under [A1], the full-weighted Siegel–Walfisz estimate holds at every fixed logarithmic modulus range with every fixed logarithmic saving, including $q=1$ ([[thm-siegel-walfisz-prime-distribution]]).

[F2] The finite Vaughan/retained-Gauss-weight argument gives the primitive first moment above a conductor cutoff, with the exact $\log^{9/2}(2x)$ and Type-I remainder in its Statement ([[lem-vaughan-large-conductor-primitive-character-first-moment]]). Its proof explicitly supplies the $r/\varphi(r)$ weight rather than inferring it from a weaker public sieve Statement.

[F3] Primitive induction is unique, and a primitive character of conductor $r$ induces at most one character modulo each multiple $q$; orthogonality on reduced classes holds ([[thm-dirichlet-character-primitive-induction]], [[def-induced-dirichlet-character]], [[thm-dirichlet-character-orthogonality]]). The discrepancy is the full-weighted $\psi(x;q,a)-x/\varphi(q)$ ([[def-prime-progression-discrepancy]]).

[F4] Prime factorization is unique, $\varphi(n)=n\prod_{p\mid n}(1-1/p)$, and $\mu^2$ is the indicator of squarefree integers ([[thm-fundamental-theorem-of-arithmetic]], [[thm-euler-totient-product-formula]], [[def-unit-group-modulo-n-and-euler-totient]], [[def-number-theoretic-mobius-function]]). The von Mangoldt weight is supported on prime powers with value $\log p$ ([[def-von-mangoldt-function]]).

[F5] The harmonic sum up to $Y$ is at most $1+\log Y$ for $Y\ge1$, by the logarithmic integral. Every fixed logarithmic power is dominated by every positive power ([[thm-logarithm-derivative-and-integral]], [[thm-logarithm-slower-than-every-positive-power]]).

## Proof

**Proof technique:** separate primitive conductors, prove the totient lifting bound, and keep the exact logarithmic cutoff.

1.1 Write $L=\log x$ and $Q=x^{1/2}L^{-2A-6}$. By [F4], $\varphi(rs)\ge\varphi(r)\varphi(s)$ for all positive integers: each prime dividing both factors contributes the ratio $(1-1/p)^{-1}\ge1$. Also the same finite prime-power calculation gives $n/\varphi(n)=\sum_{d\mid n}\mu^2(d)/\varphi(d)$. Therefore $$\sum_{s\le Y}\frac1{\varphi(s)}=\sum_{d\le Y}\frac{\mu^2(d)}{d\varphi(d)}\sum_{k\le Y/d}\frac1k\le(1+\log Y)\prod_{p\le Y}\left(1+\frac1{p(p-1)}\right)\le e(1+\log Y).$$ The final finite product is bounded using $1+u\le e^u$ and $\sum_{n\ge2}1/(n(n-1))=1$. Thus $$\sum_{s\le Q/r}\frac1{\varphi(rs)}\ll\frac{L}{\varphi(r)}$$ whenever $r\le Q$. These are finite identities and explicit inequalities, not a mean-value theorem imported for totients. [F4, F5, given, algebra]

2.1 Orthogonality [F3] gives $$\max_{(a,q)=1}|E_\psi(x;q,a)|\le\frac{|\psi(x,\chi_0)-x|}{\varphi(q)}+\frac1{\varphi(q)}\sum_{\chi\ne\chi_0}|\psi(x,\chi)|.$$ If $\xi$ is the primitive ancestor of any $\chi$ modulo $q$, the removed prime-power terms have total weight at most $\omega(q)\log x\ll\log(2q)L$ by [F4]. In particular $\psi(x,\chi_0)=\psi(x)+O(\log(2q)L)$. Summing the induction errors after the average over characters costs $O(QL^2)$, since there are $\varphi(q)$ characters. By [F1] at modulus one with saving $A+2$, and step 1.1, the sum of the principal errors $|\psi(x)-x|/\varphi(q)$ is $O_A(xL^{-A-1})$. The class $q=1$ has no nonprincipal contribution and is included here. [F1, F3, F4, step 1.1, algebra]

3.1 Put $R=L^{A+7}$ and $U=V=L^{2A+14}$. For large $x$ depending only on $A$, [F5] gives $2\le R\le Q\le\sqrt x$ and $UV\le x$. Each nonprincipal character has a nonprincipal primitive ancestor. Summing their contributions by conductor and using step 1.1 bounds the remaining discrepancy by $$CL\sum_{r\le Q}\frac1{\varphi(r)}\sum_{\xi\bmod r}^{*}\!{}'|\psi(x,\xi)|,$$ where the prime excludes the principal character of conductor one. No maximum over endpoints has been introduced; the maximum over residue classes was already bounded in step 2.1 by the finite character sum. [F3, F5, step 1.1, step 2.1, algebra]

4.1 For $r\le R$, expand $\psi(x,\xi)$ into reduced classes and apply [F1] with modulus exponent $A+7$ and saving $K=3A+18$. Since $\xi$ is nonprincipal, its class values sum to zero, cancelling $x/\varphi(r)$. Hence $|\psi(x,\xi)|\le C_{A,K}\varphi(r)xL^{-K}$. There are at most $\varphi(r)$ primitive characters and $\varphi(r)\le r$, so their total contribution to step 3.1 is $$\ll_A LR^2 xL^{-K}=xL^{-A-3}.$$ This bound includes every small nonprincipal primitive conductor; no exception is discarded. [F1, F3, F4, step 3.1, algebra]

4.2 For $R<r\le Q$, apply [F2] with $U,V$ as above, then multiply by the single lifting factor $L$ in step 3.1. The $x/R$, $x/\sqrt U$ and $x/\sqrt V$ terms each become $O_A(xL^{-A-3/2})$. The $Q\sqrt x$ term becomes $xL^{-2A-1/2}$, which is $O_A(xL^{-A})$ because $A>0$. The Type-I term is $LUVQ^{3/2}(\log(2x))^2=x^{3/4}$ times a fixed power of $L$ depending on $A$, hence is $o_A(xL^{-A})$ by [F5]. Also $QL^2=o_A(xL^{-A})$. In [F2]'s proof the product-boundary logarithm is assigned only to the $MN/P,P\sqrt{MN}$ terms, and the conductor multiplicity logarithm only to the two asymmetric boundary terms; its resulting $9/2$ exponent is retained before this one further lifting logarithm. [F2, F5, step 2.1, step 3.1, algebra]

5.1 Add the principal and induction bounds from step 2.1, the small-conductor estimate in step 4.1, and the large-conductor estimate in step 4.2. They give the original displayed discrepancy sum with $B=2A+6$ for all $x\ge x_A$, after fixing a sufficiently large $x_A$ and constant $C_A$. Every von Mangoldt endpoint is fully weighted throughout, and $q=1$ is handled by the principal branch. No endpoint maximum or larger cutoff exponent is asserted. [step 2.1, step 4.1, step 4.2, given, algebra] ∎

## Source notes

The actual SW supplier, the locally reconstructed first-moment helper and this BV deduction now have independent local reviews, and root has integrated their exact acceptances. The proof retains its original AC/CC/DC scope; this status update asserts no acceptance of downstream consumers. The proof supplies its own finite hyperbola completion and exact logarithm ledger and does not import Tao's divisor-progression bound or Kedlaya's omitted Type-I step. The original AC/CC/DC scope, full weights, q1 branch, maximum over residue classes only, and B=2A+6 remain unchanged.
