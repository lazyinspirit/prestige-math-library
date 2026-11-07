---
id: ex-primitive-dirichlet-twist-of-a-gl2-l-function
kind: example
title: "A Primitive Dirichlet Twist of a GL2 L-Function"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-standard-l-function-of-a-gl2-eigenform
  - thm-hec-ke-euler-product-for-standard-gl2-l-function
  - def-hecke-operator-on-congruence-forms
  - thm-standard-gl2-l-function-analytic-continuation-and-functional-equation
  - def-dirichlet-character-modulo-q
  - def-parity-dirichlet-character
  - def-primitive-dirichlet-character-and-conductor
  - def-gauss-sum-dirichlet-character
  - def-dirichlet-l-function
  - def-completed-dirichlet-l-function
  - thm-primitive-dirichlet-l-functional-equation
  - def-modular-discriminant-and-j-invariant
  - ex-level-one-discriminant-as-hecke-eigenform
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Chapter 5, Proposition 5.21 and Chapter 9, Theorem 9.3, printed pp. 75–76 and 101–103."
    - title: "Nickolas Andersen, Analytic Number Theory"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
      locator: "§16.1 and §16.3, primitive character modulo $4$ and completed primitive-character functional equation."
forward_refs: []
---

## Example

Let $\Delta(z)=\sum_{n\ge1}\tau(n)e^{2\pi inz}$ be the normalized
level-one weight-$12$ discriminant Hecke eigenform, and let the primitive
character modulo $4$ be
$$\chi_{-4}(n)=\begin{cases}0,&2\mid n,\\1,&n\equiv1\pmod4,\\-1,&n\equiv3\pmod4.\end{cases}$$
Put $\lambda_\Delta(n)=\tau(n)n^{-11/2}$ and, for
$\operatorname{Re}s>3/2$, define
$$L(s,\Delta\otimes\chi_{-4}):=
\sum_{n\ge1}\lambda_\Delta(n)\chi_{-4}(n)n^{-s}.$$
This series converges absolutely and has Euler product
$$L(s,\Delta\otimes\chi_{-4})=
\prod_{p\ne2}\left(1-\lambda_\Delta(p)\chi_{-4}(p)p^{-s}+p^{-2s}\right)^{-1}.$$
The un-twisted completed GL2 function
$\Gamma_{\mathbb C}(s+11/2)L(s,\Delta)$ satisfies its level-one functional
equation. The completed Dirichlet function
$$\Lambda(s,\chi_{-4}):=(4/\pi)^{(s+1)/2}
\Gamma\!\left(\frac{s+1}{2}\right)L(s,\chi_{-4})$$
satisfies $\Lambda(s,\chi_{-4})=\Lambda(1-s,\chi_{-4})$.

## Example references

[[def-standard-l-function-of-a-gl2-eigenform|the unitary GL2 coefficient normalization]]

[[thm-hec-ke-euler-product-for-standard-gl2-l-function|the standard GL2 Euler factors]]

[[def-dirichlet-character-modulo-q|the Dirichlet character convention]]

[[def-primitive-dirichlet-character-and-conductor|primitivity and conductor]]

[[thm-primitive-dirichlet-l-functional-equation|the completed primitive-character functional equation]]

[[thm-standard-gl2-l-function-analytic-continuation-and-functional-equation|the standard GL2 functional equation]]

## Facts & Assumptions

**Given:** The normalized level-one discriminant $\Delta$, its Fourier coefficients $\tau(n)$, and the arithmetic function $\chi_{-4}$ on the integers.

[F1] [[def-modular-discriminant-and-j-invariant]]: $\Delta$ is a weight-$12$ cusp form beginning $q-24q^2+O(q^3)$.

[F2] [[ex-level-one-discriminant-as-hecke-eigenform]]: $T_n\Delta=\tau(n)\Delta$ for all $n\ge1$.

[F3] [[def-standard-l-function-of-a-gl2-eigenform]] and [[thm-hec-ke-euler-product-for-standard-gl2-l-function]]: the unitary coefficient series converges absolutely for $\operatorname{Re}s>3/2$ and has Euler product $\prod_p(1-\lambda_\Delta(p)p^{-s}+p^{-2s})^{-1}$.

[F4] [[def-dirichlet-character-modulo-q]]: a character modulo $4$ is a homomorphism on $(\mathbb Z/4\mathbb Z)^\times$, extended by zero on even integers.

[F5] [[def-primitive-dirichlet-character-and-conductor]]: a character is primitive when it is not induced from any proper divisor of its modulus.

[F6] [[def-dirichlet-l-function]], [[def-parity-dirichlet-character]], and [[def-completed-dirichlet-l-function]]: $L(s,\chi)=\sum_{n\ge1}\chi(n)n^{-s}$ initially for $\operatorname{Re}s>1$; parity $a=1$ means $\chi(-1)=-1$, and the completion is $\Lambda(s,\chi)=(q/\pi)^{(s+a)/2}\Gamma((s+a)/2)L(s,\chi)$.

[F7] [[thm-primitive-dirichlet-l-functional-equation]]: $\Lambda(s,\chi)=(-i)\tau(\chi)q^{-1/2}\Lambda(1-s,\overline\chi)$ for primitive odd $\chi$.

[F8] [[thm-standard-gl2-l-function-analytic-continuation-and-functional-equation]]: for a normalized weight-$12$ full-level holomorphic Hecke eigenform, $\Gamma_{\mathbb C}(s+11/2)L(s,f)=\Gamma_{\mathbb C}(1-s+11/2)L(1-s,f)$.

[F9] [[def-hecke-operator-on-congruence-forms]]: at level one, $T_{p^r}=T_pT_{p^{r-1}}-p^{11}T_{p^{r-2}}$ for $r\ge2$.

[F10] [[def-gauss-sum-dirichlet-character]]: $\tau(\chi)=\sum_{a\bmod q}\chi(a)e^{2\pi ia/q}$.

## Proof

**Given:** $\Delta$, the displayed arithmetic function, and facts [F1]–[F10].

1.1 The unit group modulo $4$ is $\{1,3\}$ with $3^2=1$, so assigning $1\mapsto1$ and $3\mapsto-1$ defines a homomorphism; extending by zero on even integers gives the stated Dirichlet character. It is odd because $\chi_{-4}(-1)=\chi_{-4}(3)=-1$. The only proper divisors of $4$ are $1$ and $2$, and every character modulo either divisor induces a function equal to $1$ on the unit class $3\bmod4$; since $\chi_{-4}(3)=-1$, [F5] makes $\chi_{-4}$ primitive of conductor $4$. [given, F4, F5, algebra]

2.1 By [F1] and [F2], $\Delta$ is a normalized weight-$12$ Hecke eigenform. The coefficient bound in [F3] and $|\chi_{-4}(n)|\le1$ give absolute convergence of the twisted series for $\operatorname{Re}s>3/2$. [F1, F2, F3, given, algebra]

3.1 For every prime $p$, [F9] acting on the eigenform in step 2.1 gives $\tau(p^r)=\tau(p)\tau(p^{r-1})-p^{11}\tau(p^{r-2})$ for $r\ge2$. Dividing by $p^{11r/2}$ yields $\lambda_\Delta(p^r)=\lambda_\Delta(p)\lambda_\Delta(p^{r-1})-\lambda_\Delta(p^{r-2})$. Hence the generating series satisfies
$$\sum_{r\ge0}\lambda_\Delta(p^r)X^r=(1-\lambda_\Delta(p)X+X^2)^{-1},$$
by multiplying the series and comparing coefficients. The definition in [F4] makes $\chi_{-4}$ completely multiplicative: if either factor is even, both sides vanish, and for odd factors the homomorphism law applies. For odd $p$, substitute $X=\chi_{-4}(p)p^{-s}$ and use $\chi_{-4}(p)^2=1$ to obtain the displayed local factor. At $p=2$, every positive power coefficient vanishes because $\chi_{-4}(2)=0$, so the local factor is $1$. Absolute convergence from step 2.1 permits multiplication of these local series and yields the displayed Euler product. [F3, F4, F9, step 2.1, algebra]

4.1 By [F10], $\tau(\chi_{-4})=\chi_{-4}(1)i+\chi_{-4}(3)(-i)=2i$. Since $\chi_{-4}(-1)=-1$, its parity is $a=1$; with $q=4$, [F7] has root number $(-i)(2i)/2=1$, and $\overline{\chi_{-4}}=\chi_{-4}$. This proves the stated completed Dirichlet functional equation. The base completed GL2 functional equation follows from [F8] with $k=12$, whose sign is $(-1)^6=1$. [F7, F8, F10, step 1.1, step 2.1, algebra] ∎
