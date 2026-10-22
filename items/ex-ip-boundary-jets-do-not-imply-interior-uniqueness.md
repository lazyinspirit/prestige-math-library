---
id: ex-ip-boundary-jets-do-not-imply-interior-uniqueness
kind: example
title: "Matching boundary jets without interior equality"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-conductivity-dirichlet-to-neumann-map
  - thm-ip-boundary-determination-of-scalar-conductivity
dependency_level: 5
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Mikko Salo, Applications of microlocal analysis to inverse problems (2019)"
      url: "https://arxiv.org/pdf/1908.03041"
      locator: "Section 5, Theorem 5.1, boundary determination of the full conductivity Taylor series."
---

## Example

On the unit ball $\Omega=B(0,1)\subset\mathbb R^n$, define
$$\psi(x)= \begin{cases} \exp\!\left(-\dfrac{1}{1-4|x|^2}\right),&|x|<1/2,\\ 0,&|x|\geq1/2. \end{cases}$$
For any $\epsilon\ne0$ with $|\epsilon|\|\psi\|_\infty<1$, the positive conductivities $\gamma_1\equiv1$ and $\gamma_2=1+\epsilon\psi$ agree with all orders of derivatives at $\partial\Omega$ but are unequal in the interior. This example shows that equality of all boundary conductivity jets alone does not imply interior equality; it makes no assertion that the two full DN maps agree.

## Example references

[[def-ip-conductivity-dirichlet-to-neumann-map|Positive scalar conductivity convention]]

[[thm-ip-boundary-determination-of-scalar-conductivity|Boundary jets are determined by full DN data]]

## Facts & Assumptions

**Given:** the unit ball and the explicit function $\psi$ in the statement.

[F1] [[def-ip-conductivity-dirichlet-to-neumann-map]]: an admissible scalar conductivity is smooth and strictly positive on the closure of the domain.

[F2] [[thm-ip-boundary-determination-of-scalar-conductivity]]: in dimensions $n\geq2$, under its Axiom of Choice and Countable Choice hypotheses, equality of full conductivity DN maps implies equality of all boundary-normal jets. This is context only: the bump construction below establishes matching jets directly in every positive dimension, including $n=1$, without using a DN-to-jets implication or asserting equality of DN maps.

## Proof

**Given:** the data in the statement.

1.1 For every integer $m\geq0$, differentiation gives $\frac{d^m}{dt^m}e^{-1/t}=P_m(1/t)e^{-1/t}$ on $t>0$ for a polynomial $P_m$, by induction on $m$. For every polynomial $P$, $P(s)e^{-s}\to0$ as $s\to\infty$; for each power $s^N$, this follows from $e^s\geq s^{N+1}/(N+1)!$. Thus every right derivative tends to zero at $t=0$, so extension by zero to $t\leq0$ is smooth and flat there. Composition with $t=1-4|x|^2$ proves $\psi\in C_c^\infty(B(0,1))$, with compact support in $\overline{B(0,1/2)}$. It is nonzero at $x=0$, and $\|\psi\|_\infty<\infty$. [given, induction, construct, algebra]

2.1 The bound $|\epsilon|\|\psi\|_\infty<1$ gives $\gamma_2(x)\geq1-|\epsilon|\|\psi\|_\infty>0$, so it satisfies the positivity condition in [F1]. Since $\psi$ vanishes on a neighborhood of $\partial\Omega$, $\gamma_1$ and $\gamma_2$ agree on that neighborhood and all their boundary derivatives agree. At the origin, $\gamma_2(0)-\gamma_1(0)=\epsilon e^{-1}\ne0$. Thus identical boundary jets do not force interior equality. [F1, step 1.1, given, algebra] ∎

