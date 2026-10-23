---
id: ex-fdmath-dilation-jacobian
kind: example
title: "Dilation Jacobian and advected scalar density"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - lem-fd-transport-and-density
dependency_roles:
  lem-fd-transport-and-density: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), §3.4.3"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
  scraped: []
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-23
physical_scope: null
empirical_premises: []
---

## Example

Let $I\subseteq\mathbb R$ be an open interval containing $0$, let $U\subseteq\mathbb R^3$ be nonempty and open, and let $\alpha\in C^2(I,(0,\infty))$ satisfy $\alpha(0)=1$. Define the material map $\chi(t,a)=\alpha(t)a$ for $a\in U$, its inverse label $A(t,x)=x/\alpha(t)$ for $x\in\alpha(t)U$, the derivative matrix $F=D_a\chi$, the Jacobian $J=\det F$, and the Eulerian velocity $u(t,x)=\partial_t\chi(t,A(t,x))$. For any $\rho_0\in C^1(U,\mathbb R)$ define $\rho(t,x)=\alpha(t)^{-3}\rho_0(x/\alpha(t))$. Here $C^r$ means continuous coordinate partial derivatives through total order $r$, $D_a\chi$ is the matrix of material-coordinate partial derivatives, $D_xu$ is the matrix of spatial coordinate partial derivatives, $\operatorname{tr}M:=\sum_iM_{ii}$ for square matrices $M$, and $I_3$ is the $3\times3$ identity matrix. Then

$$F(t,a)=\alpha(t)I_3,\qquad J(t,a)=\alpha(t)^3,\qquad u(t,x)=\frac{\alpha'(t)}{\alpha(t)}x,\qquad \theta(t,x):=\operatorname{tr}(D_xu)=3\frac{\alpha'(t)}{\alpha(t)},\qquad \rho(t,\chi(t,a))J(t,a)=\rho_0(a).$$

The material pullback product $\rho(t,\chi(t,a))J(t,a)$ is independent of time and equals $\rho_0(a)$. This is a mathematical kinematic example, not a physical model or measurement.

## Example references

[R. Abeyaratne, *Continuum Mechanics*, Volume II, §3.4.3 (printed pp. 71–72)](https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf)

## Facts & Assumptions

**Given:** $\alpha$, $U$, $\rho_0$, the dilation $\chi(t,a)=\alpha(t)a$, and the formulas in the example statement.

[F1] [[lem-fd-transport-and-density]]: under its stated smooth-motion and $C^1$ field hypotheses, the identity $\rho(t,\chi(t,a))J(t,a)=\rho(0,\chi(0,a))J(0,a)$ for every $a\in U$ and $t\in I$ is equivalent to the pointwise continuity equation; the lemma also characterizes it by constancy of integrals over every compact Jordan reference set.

[F2] Set $\Omega:=\{(t,x):t\in I,\ x\in\alpha(t)U\}$. Since $U$ is nonempty and open, choose $a_0\in U$ and $\varepsilon>0$ such that $B:=\{a\in\mathbb R^3:\|a-a_0\|_2<\varepsilon\}$ has $\overline B\subset U$. This is a nonempty bounded open reference region with $C^1$ boundary. For the lemma's auxiliary field, take $q\equiv0$ on $\Omega$; this and the stated density $\rho$ are $C^1$ there. The map $\chi(t,a)=\alpha(t)a$ is jointly $C^2$, and each slice is an orientation-preserving $C^2$ diffeomorphism with $J=\alpha^3>0$. Thus the motion, reference-region, and field hypotheses of [F1] hold.

## Verification

1.1 Differentiating $\chi(t,a)=\alpha(t)a$ in $a$ gives $F=\alpha I_3$. Since the space is three-dimensional, $\det F=\alpha^3$; positivity of $\alpha$ makes this an orientation-preserving dilation, and $\alpha(0)=1$ gives $F(0,a)=I_3$ and $J(0,a)=1$. [given, algebra]

2.1 The inverse label is $A=x/\alpha$. Differentiating $\chi$ in time at fixed $a$ gives $\partial_t\chi=\alpha'a=(\alpha'/\alpha)x$, so $u=(\alpha'/\alpha)x$; taking its spatial derivative gives $D_xu=(\alpha'/\alpha)I_3$ and $\theta=3\alpha'/\alpha$. [given, step 1.1, algebra]

2.2 Substitution of $x=\chi(t,a)=\alpha(t)a$ into the stated density gives $\rho(t,\chi(t,a))=\alpha^{-3}\rho_0(a)$. Multiplying by $J=\alpha^3$ yields $\rho(t,\chi(t,a))J(t,a)=\rho_0(a)$, which equals the initial pullback because $\chi(0,a)=a$ and $J(0,a)=1$. [given, step 1.1, algebra]

3.1 The density is $C^1$ on the swept open set and $J>0$. Apply [F1] under the verified hypotheses in [F2] to the invariant product in step 2.2 to obtain the pointwise continuity equation and constant material integrals for every compact Jordan $K\subset U$. This is a mathematical consequence of the displayed fields. [F1, F2, step 2.2] ∎
