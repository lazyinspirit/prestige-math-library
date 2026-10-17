---
id: thm-aubin-nitsche-l2-error-estimate-under-adjoint-regularity
kind: theorem
title: Aubin–Nitsche L² error estimate from adjoint approximation
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-complex-lp-and-euclidean-test-function-conventions
  - def-countable-choice
  - def-l-p-space-as-a-quotient-by-null-functions
  - lem-galerkin-orthogonality-for-conforming-galerkin-approximations
  - thm-adjoint-problem-for-bounded-coercive-variational-forms
  - thm-cea-quasi-optimality-for-conforming-galerkin-approximations
  - thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Part VI, Chapter 26, Basic error analysis
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap26.pdf
      locator: "§26.3.1, Lemma 26.12, printed pp. 28–29: the orthogonality identity used in the error argument."
    - title: Thomas Richter, Die Finite Elemente Methode für partielle Differentialgleichungen
      url: https://numerics.ovgu.de/teaching/numpde/skript.pdf
      locator: "§3.4.1, Lemmas 3.34 and 3.36, printed pp. 83–85: the adjoint problem and L² Aubin–Nitsche estimate."
    - title: Thomas Wick, Numerical Methods for Partial Differential Equations
      url: https://www.thomaswick.org/links/lecture_notes_Numerics_PDEs_Oct_12_2019.pdf
      locator: "§7.11.3, Proposition 7.185 and proof, printed pp. 133–134: the symmetric Poisson Aubin–Nitsche estimate."
verification: {}
---

## Statement

Assume Countable Choice and the conforming Galerkin setting of
[[thm-cea-quasi-optimality-for-conforming-galerkin-approximations]]. Let
$H=L^2(\Omega;\mathbb K)$ with inner product linear in the first slot, and
let $J:V\to H$ be a continuous linear inclusion with
$\|Jv\|_H\le C_E\|v\|_V$. Put $e:=J(u-u_h)$. The adjoint solution $z_e$ is
the unique element of $V$ satisfying
$$a(v,z_e)=(Jv,e)_H\qquad(v\in V);$$
it exists by [[thm-adjoint-problem-for-bounded-coercive-variational-forms]].
Let $s\in(0,1]$, and let $R_s\subseteq V$ be a specified normed space of
adjoint-regular functions. Assume constants $C_R,C_I$ independent of $h$ and
the error satisfy
$$\|z_e\|_{R_s}\le C_R\|e\|_H,\qquad \inf_{w_h\in V_h}\|z_e-w_h\|_V\le C_Ih^s\|z_e\|_{R_s}.$$
Then
$$\|u-u_h\|_{L^2(\Omega)} \le M C_I C_R h^s\|u-u_h\|_V.$$
The symbol $R_s$ means exactly the chosen regularity norm space in the two
displayed assumptions; no fractional Sobolev interpolation estimate is
asserted unless it verifies the second inequality. The integer endpoint may
be instantiated with $R_1=H^2(\Omega)\cap V$, using the
$H^2(\Omega)=W^{2,2}(\Omega)$ norm. If $H^2(\Omega)\subseteq V$,
this is simply $R_1=H^2(\Omega)$.

## Facts & Assumptions

**Given:** Countable Choice; the bounded coercive conforming Galerkin data and
unique solutions; the continuous inclusion $J:V\to L^2(\Omega;\mathbb K)$;
an exponent $s\in(0,1]$; and the two dual regularity and approximation
inequalities in **Statement**.

[F1] The Céa theorem gives unique $u$ and $u_h$ in the continuous and discrete
spaces ([[thm-cea-quasi-optimality-for-conforming-galerkin-approximations]]).

[F2] A bounded linear functional $G$ has a unique adjoint solution $z$ with
$a(v,z)=G(v)$, under Countable Choice
([[thm-adjoint-problem-for-bounded-coercive-variational-forms]]).

[F3] Galerkin orthogonality gives $a(u-u_h,w_h)=0$ for every $w_h\in V_h$
([[lem-galerkin-orthogonality-for-conforming-galerkin-approximations]]).

[F4] On real or complex $L^2$, the corresponding integral pairing is a
well-defined inner product, linear in the first slot, and obeys
$|(f,g)_{L^2}|\le\|f\|_{L^2}\|g\|_{L^2}$
([[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]]).

## Proof

1.1 Define $G_e(v):=(Jv,e)_H$. By [F4] and the assumed continuity of $J$, $|G_e(v)|\le C_E\|v\|_V\|e\|_H,$ so $G_e$ is a bounded linear functional. Fact [F2] gives the unique $z_e$ with $a(v,z_e)=G_e(v)$. [F1, F2, F4, given]

2.1 Set $v=u-u_h$ in the adjoint equation. Then $\|e\|_H^2=(J(u-u_h),e)_H=a(u-u_h,z_e).$ For any $w_h\in V_h$, [F3] gives $a(u-u_h,w_h)=0$, hence $a(u-u_h,z_e)=a(u-u_h,z_e-w_h)$. [F3, step 1.1, given, algebra]

3.1 Since the scalar in step 2.1 equals the nonnegative real number $\|e\|_H^2$, boundedness of $a$ gives $\|e\|_H^2=|a(u-u_h,z_e-w_h)|\le M\|u-u_h\|_V\|z_e-w_h\|_V$ for every $w_h\in V_h$. Taking the infimum and using the approximation and regularity assumptions yields $\|e\|_H^2\le M C_I C_R h^s\|u-u_h\|_V\|e\|_H.$ [given, step 2.1, algebra]

4.1 If $\|e\|_H=0$, the conclusion is immediate. Otherwise divide step 3.1 by $\|e\|_H$ to obtain the asserted Aubin–Nitsche estimate. [step 3.1, algebra] ∎
