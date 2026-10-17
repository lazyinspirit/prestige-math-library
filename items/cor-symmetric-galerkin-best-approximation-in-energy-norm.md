---
id: cor-symmetric-galerkin-best-approximation-in-energy-norm
kind: corollary
title: Hermitian Galerkin solutions are best in the energy norm
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-bounded-coercive-and-symmetric-sesquilinear-forms
  - def-countable-choice
  - lem-galerkin-orthogonality-for-conforming-galerkin-approximations
  - thm-cea-quasi-optimality-for-conforming-galerkin-approximations
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Part VI, Chapter 26, Basic error analysis
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap26.pdf
      locator: "§26.3.2, Lemma 26.13, printed pp. 29–30: the Hermitian energy-norm best-approximation estimate."
    - title: Thomas Richter, Die Finite Elemente Methode für partielle Differentialgleichungen
      url: https://numerics.ovgu.de/teaching/numpde/skript.pdf
      locator: "§3.1.1, Remark 3.7, printed p. 54: exact best approximation in the symmetric energy norm."
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
---

## Statement

Assume the hypotheses and notation of
[[thm-cea-quasi-optimality-for-conforming-galerkin-approximations]], and
suppose additionally that $a$ is Hermitian:
$a(v,w)=\overline{a(w,v)}$. Then
$$\|v\|_a:=\sqrt{a(v,v)}$$
is the energy norm and the Galerkin solution is its best approximation:
$$\|u-u_h\|_a=\inf_{v_h\in V_h}\|u-v_h\|_a.$$

## Facts & Assumptions

**Given:** The bounded coercive Galerkin setting of the cited Céa theorem and
the additional Hermitian identity for $a$.

[F1] The Céa theorem supplies unique continuous and discrete solutions
([[thm-cea-quasi-optimality-for-conforming-galerkin-approximations]]).

[F2] The error $u-u_h$ is orthogonal to $V_h$ in the form $a$
([[lem-galerkin-orthogonality-for-conforming-galerkin-approximations]]).

[F3] A bounded coercive form is Hermitian exactly when
$a(v,w)=\overline{a(w,v)}$; coercivity gives
$\operatorname{Re}a(v,v)\ge\alpha\|v\|_V^2$
([[def-bounded-coercive-and-symmetric-sesquilinear-forms]]).

## Proof

1.1 Hermitian symmetry makes $a(v,v)$ real, and coercivity makes it positive for every nonzero $v$. Thus $a$ is an inner product and $\|\cdot\|_a$ is its induced norm. [F3, given]

1.2 Put $e=u-u_h$ and, for arbitrary $v_h\in V_h$, put $\eta_h=u_h-v_h$. By [F2], $a(e,\eta_h)=0$; Hermitian symmetry gives $a(\eta_h,e)=\overline{a(e,\eta_h)}=0$. [F2, F3, given]

2.1 Since $u-v_h=e+\eta_h$, sesquilinearity and step 1.2 give $\|u-v_h\|_a^2=a(e+\eta_h,e+\eta_h) =\|e\|_a^2+\|\eta_h\|_a^2\ge\|e\|_a^2.$ Therefore $\|u-u_h\|_a\le\|u-v_h\|_a$ for every $v_h\in V_h$. [F2, F3, step 1.2, algebra]

3.1 Taking the infimum in step 2.1 gives one inequality. The choice $v_h=u_h$ gives the reverse inequality, so equality holds. [F1, step 2.1, algebra] ∎
