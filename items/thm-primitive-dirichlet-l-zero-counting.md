---
id: thm-primitive-dirichlet-l-zero-counting
kind: theorem
title: "Riemann–von Mangoldt count for primitive Dirichlet L-functions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-countable-choice
  - def-dirichlet-character-modulo-q
  - def-completed-dirichlet-l-function
  - def-primitive-dirichlet-character-and-conductor
  - lem-primitive-dirichlet-l-log-argument-bound
  - lem-primitive-dirichlet-l-zero-count-in-unit-window
  - thm-argument-principle-null-homologous-cycle
  - thm-dirichlet-l-euler-product
  - thm-dirichlet-l-nonvanishing-line-one
  - thm-dirichlet-l-nonzero-at-one
  - thm-primitive-dirichlet-l-analytic-continuation
  - thm-primitive-dirichlet-l-functional-equation
  - thm-riemann-von-mangoldt-zero-counting
  - thm-stirling-formula-gamma
justified_by: []
proof_strategy: contour
axiom_use: "Countable Choice is required only in the conductor-one branch through the published zeta zero-count theorem; the local q>1 contour argument adds no choice axiom."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Montgomery and Vaughan, Multiplicative Number Theory I, Chapter 14, Theorem 14.5 and Corollary 14.7"
      url: "https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/18.0_pp_452_462_Zeros.pdf"
      locator: "Printed pp. 454–456: argument-principle identity and the Riemann–von Mangoldt estimate for q>1."
    - title: "Harold Davenport, Multiplicative Number Theory, 2nd ed., Chapter 19"
      url: "https://djvu.online/file/Rh8B8jEVpxFgk"
      locator: "Printed pp. 114–120: zero count, argument variation, and endpoint convention."
verification: {}
---

## Statement

Let $q\ge1$ and let $\chi$ be a primitive Dirichlet character modulo $q$. Let $N_\chi(T)$ count the zeros $\rho=\beta+i\gamma$ of $L(s,\chi)$ with $0<\beta<1$ and $0<\gamma\le T$, counted with multiplicity. Then for $T\ge2$,
$$N_\chi(T)=\frac{T}{2\pi}\log\!\left(\frac{qT}{2\pi e}\right)+O\!\left(\log(q(T+2))\right).$$
For $q=1$, Countable Choice is assumed; for $q>1$, the proof is choice-free.

## Statement references

[[def-primitive-dirichlet-character-and-conductor|Primitive Dirichlet character and conductor]]

[[def-dirichlet-character-modulo-q|Dirichlet character modulo q]]

[Montgomery and Vaughan, Chapter 14, Theorem 14.5 and Corollary 14.7](https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/18.0_pp_452_462_Zeros.pdf)

[Davenport, Chapter 19](https://djvu.online/file/Rh8B8jEVpxFgk)

## Facts & Assumptions

**Given:** A primitive character $\chi$ modulo $q\ge1$, and $T\ge2$.

[F1] For $q>1$, the completed function is entire, has the displayed gamma-factor normalization, and satisfies $\Lambda(s,\chi)=\varepsilon(\chi)\Lambda(1-s,\bar\chi)$. ([[def-completed-dirichlet-l-function]], [[thm-primitive-dirichlet-l-analytic-continuation]], [[thm-primitive-dirichlet-l-functional-equation]])

[F2] The local argument has size at most $C\log(q(|t|+2))$, with one-sided averaging at zero ordinates. ([[lem-primitive-dirichlet-l-log-argument-bound]])

[F3] The argument principle counts zeros inside an admissible zero-free contour by the change of argument. ([[thm-argument-principle-null-homologous-cycle]])

[F4] The Euler product excludes zeros for $\operatorname{Re}s>1$, and the functional equation reflects zeros to the left half-plane; the line $\operatorname{Re}s=1$ is zero-free. ([[thm-dirichlet-l-euler-product]], [[thm-dirichlet-l-nonvanishing-line-one]], [[thm-primitive-dirichlet-l-functional-equation]])

[F5] Stirling's formula gives $\arg\Gamma(c+iT/2)=\frac T2\log(T/2)-\frac T2+O(1)$ for fixed $c>0$. ([[thm-stirling-formula-gamma]])

[F6] For $q=1$, Countable Choice and $T\ge2$ imply $N(T)=\frac{T}{2\pi}\log\frac{T}{2\pi}-\frac{T}{2\pi}+O(\log T)$. ([[def-countable-choice]], [[thm-riemann-von-mangoldt-zero-counting]])

[F7] For each real $u$, the zeros with $1/2\le\Re\rho\le1$ and $|\Im\rho-u|\le1$ number at most $C_0\log(q(|u|+3))$, with multiplicity. ([[lem-primitive-dirichlet-l-zero-count-in-unit-window]])

## Proof

**Proof technique:** argument principle and the completed functional equation.

**Given:** The data in the Statement.

1.1 If $q=1$, the unique primitive character is principal and $L(s,\chi)=\zeta(s)$. The conclusion is [F6], since $\log(q(T+2))=\log(T+2)\asymp\log T$ for $T\ge2$. This branch uses Countable Choice exactly as in [F6]. [given, F6, algebra]

1.2 Suppose $q>1$ and first take $T$ not a zero ordinate. In the argument-principle rectangle, the left-boundary logarithmic-derivative integral is changed by $s\mapsto1-s$ using [F1]; the functional equation changes character $\chi$ to $\bar\chi$. Complex conjugation then turns the reflected lower path for $\bar\chi$ into the conjugate of the upper path for $\chi$. Their real parts cancel and their imaginary parts double, leaving the change of argument of $\Lambda(s,\chi)$ along the right-hand path from $1/2+i\epsilon$ to $2+i\epsilon$, up to $2+iT$, and back to $1/2+iT$. Expanding the completion gives $$N_\chi(T)=\frac{1}{\pi}\left(\arg\Gamma\!\left(\frac14+\frac a2+\frac{iT}{2}\right)+\frac T2\log\frac q\pi+\arg L\!\left(\frac12+iT,\chi\right)\right)+O(\log q).$$ The subtracted lower-endpoint argument is $O(\log q)$ by [F2] at $t=0$. If zeros lie on the real axis, choose $\epsilon$ below their first positive ordinate and let $\epsilon\downarrow0$; the possible real-zero multiplicity is $O(\log q)$ by [F7]. The contour count is exactly the number of zeros with $0<\gamma<T$. [F1, F2, F3, F4, F7, given, algebra]

2.1 By [F5], the two main terms in step 1.2 combine as $$\frac1\pi\left(\frac T2\log\frac T2-\frac T2\right)+\frac T{2\pi}\log\frac q\pi=\frac T{2\pi}\log\!\left(\frac{qT}{2\pi e}\right)+O(1).$$ The argument term in step 1.2 is $O(\log(q(T+2)))$ by [F2]. This proves the estimate for heights not equal to a zero ordinate. [F2, F5, step 1.2, algebra]

3.1 If $T$ is a zero ordinate, take limits from either side. The change from half-weight endpoint counting to the Statement's full count is at most the multiplicity at that ordinate, which is $O(\log(q(T+2)))$ by [F7], transferred to left-half zeros by [F4]. The same error therefore holds at every $T\ge2$. [F4, F7, step 2.1, algebra] ∎

