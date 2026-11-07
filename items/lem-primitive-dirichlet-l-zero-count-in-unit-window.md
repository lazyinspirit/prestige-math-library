---
id: lem-primitive-dirichlet-l-zero-count-in-unit-window
kind: lemma
title: "Jensen bound for Dirichlet L-zeros in a unit-height window"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - cor-jensen-zero-counting-bound
  - def-dirichlet-character-modulo-q
  - def-dirichlet-l-function
  - def-natural-logarithm
  - def-principal-dirichlet-character
  - def-primitive-dirichlet-character-and-conductor
  - lem-dirichlet-character-values
  - thm-dirichlet-character-orthogonality
  - thm-dirichlet-l-euler-product
  - thm-identity-theorem-holomorphic-functions
  - thm-logarithm-derivative-and-integral
  - thm-p-series-real-exponents
justified_by: []
aliases: []
forward_refs: []
dependency_level: 0
proof_strategy: direct
sources:
  references:
    - title: "Montgomery–Vaughan, Multiplicative Number Theory III, §28.1"
      url: "https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf"
      locator: "Printed pp. 184–185; the zero-counting functions and unit-height zero-count input cited in the proof of Theorem 28.6."
---

## Statement

There is an absolute constant $C>0$ such that, for every positive integer $q$, every primitive Dirichlet character $\chi$ modulo $q$, and every real $t$, the number of zeros $\rho=\beta+i\gamma$ of the analytic continuation of $L(s,\chi)$ satisfying $1/2\le\beta\le1$ and $|\gamma-t|\le1$, counted with multiplicity, is at most
$$C\log\bigl(q(|t|+3)\bigr).$$
Here $\log$ denotes the natural logarithm.

## Statement references

[Montgomery–Vaughan, Chapter 28 §28.1](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)

## Facts & Assumptions

**Given:** A positive integer $q$, a primitive Dirichlet character $\chi$ modulo $q$, a real number $t$, and the zero-counting convention in the Statement.

[F1] A Dirichlet character modulo $q$ is a homomorphism on $(\mathbb Z/q\mathbb Z)^\times$, extended by zero to nonunits; it is primitive when not induced from a proper divisor, and the unique character modulo $1$ is principal ([[def-dirichlet-character-modulo-q]], [[def-primitive-dirichlet-character-and-conductor]], [[def-principal-dirichlet-character]]).

[F2] For $\operatorname{Re}s>1$, $L(s,\chi)=\sum_{n\ge1}\chi(n)n^{-s}$ ([[def-dirichlet-l-function]]).

[F3] Character values on units are roots of unity and values on nonunits are zero ([[lem-dirichlet-character-values]]).

[F4] A nonprincipal character sums to zero over a complete residue system modulo $q$ ([[thm-dirichlet-character-orthogonality]]).

[F5] On $\operatorname{Re}s>1$, the Euler product for $L(s,\chi)$ converges and is nonzero ([[thm-dirichlet-l-euler-product]]).

[F6] Jensen's zero-count inequality bounds $n(r)\log(R/r)$ by the boundary average of $\log|f|$ minus $\log|f(0)|$ when $f$ is holomorphic near $|z|\le R$, $f(0)\ne0$, and $0<r<R$ ([[cor-jensen-zero-counting-bound]]).

[F7] Holomorphic functions on a connected domain that agree on a set with an interior accumulation point agree throughout the domain ([[thm-identity-theorem-holomorphic-functions]]).

[F8] For $x>0$, $\log x=\int_1^x dt/t$ ([[thm-logarithm-derivative-and-integral]]); therefore $\log(1+y)=\int_0^y dt/(1+t)\le y$ for $y\ge0$.

[F9] The series $\sum_{n\ge1}n^{-p}$ converges for every real $p>1$ ([[thm-p-series-real-exponents]]).

## Proof

1.1 Define $A_\chi(x):=\sum_{n\le x}\chi(n)$. If $q>1$, primitivity makes $\chi$ nonprincipal. Let $\chi_0$ be the principal character modulo $q$; it equals $1$ on units and $0$ otherwise. Orthogonality [F4] gives $\sum_{a\bmod q}\chi(a)=\sum_{a\in(\mathbb Z/q\mathbb Z)^\times}\chi(a)\overline{\chi_0(a)}=0$. Each complete period therefore sums to zero; [F3] bounds every value by one, so the remaining partial period gives $|A_\chi(x)|\le q$ for all $x\ge1$. If $q=1$, the unique character is principal and $A_\chi(x)=\lfloor x\rfloor$. [F1, F3, F4, given, algebra]

1.2 For $q>1$, partial summation first on $\operatorname{Re}s>1$ gives $L(s,\chi)=s\int_1^\infty A_\chi(x)x^{-s-1}\,dx$. On each compact subset of $\operatorname{Re}s>0$, choose $\delta>0$ below its minimum real part. For every integer $k\ge0$, the $k$th differentiated integrand is bounded by $qC_Kx^{-1-\delta}(1+(\log x)^k)$, which is integrable: the substitution $u=\log x$ reduces this to integrals of $e^{-\delta u}$ and $u^ke^{-\delta u}$, finite by repeated integration by parts. Thus the integral is holomorphic there and agrees with the Dirichlet series for $\operatorname{Re}s>1$; [F7] gives uniqueness of the continuation. For $q=1$, the same partial summation and $\lfloor x\rfloor=x-\{x\}$ give
$$\zeta(s)=\frac{s}{s-1}-s\int_1^\infty\{x\}x^{-s-1}\,dx,$$
the same local domination with $0\le\{x\}<1$ makes this integral holomorphic on $\operatorname{Re}s>0$, so $F(s):=(s-1)\zeta(s)=s-s(s-1)\int_1^\infty\{x\}x^{-s-1}\,dx$ is holomorphic there and agrees with $(s-1)L(s,\chi)$ for $\operatorname{Re}s>1$. [F1, F2, F7, step 1.1, construct, algebra]

2.1 Put $s_0:=3/2+it$, $r:=10/7$, and $R:=149/100$. If $q>1$, set $f(z):=L(s_0+z,\chi)$ using the continuation in step 1.2. It is holomorphic on a neighbourhood of $|z|\le R$, since $\operatorname{Re}(s_0+z)\ge1/100$. On $|z|=R$, step 1.1 gives $|f(z)|\le100q|s_0+z|\le100q(|t|+3)$. If $q=1$, set $f(z):=F(s_0+z)$; step 1.2 and $0\le\{x\}<1$ give $|f(z)|\le |s|+100|s||s-1|\le C_1(|t|+3)^2$ on that circle for an absolute $C_1$. [step 1.1, step 1.2, algebra]


3.1 The positive constant $c_*:=\prod_p(1+p^{-3/2})^{-1}$ is nonzero: [F8] gives $0\le\log(1+p^{-3/2})\le p^{-3/2}$, and [F9] gives $\sum_p p^{-3/2}\le\sum_{n\ge2}n^{-3/2}<\infty$, so the logarithms of the finite products converge to a finite real number. For $q>1$, [F5] and $|\chi(p)|\le1$ imply $|L(s_0,\chi)|\ge c_*$. For $q=1$, $|F(s_0)|=|1/2+it|\,|\zeta(s_0)|\ge c_*/2$, again by [F5]. Thus in both cases $|f(0)|$ is bounded below by an absolute positive constant. [F3, F5, F8, F9, step 2.1, algebra]


4.1 Every zero in the stated rectangle lies within distance $\sqrt2<10/7=r$ of $s_0$. Apply [F6] with the relevant function from steps 2.1 and 3.1. The circle bounds give $n(r)\le C_2\log(q(|t|+3))$ after enlarging an absolute constant; for $q=1$ use $\log(|t|+3)\ge\log3$ to absorb the additive constant. This proves the asserted estimate, including zeros on the rectangle's boundary and the conductor-one case. [F6, step 2.1, step 3.1, algebra] ∎
