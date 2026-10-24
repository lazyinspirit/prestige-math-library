---
id: thm-cea-quasi-optimality-for-conforming-galerkin-approximations
kind: theorem
title: Céa quasi-optimality for coercive conforming Galerkin problems
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - cor-finite-dimensional-subspaces-are-closed
  - def-bounded-coercive-and-symmetric-sesquilinear-forms
  - def-countable-choice
  - def-hilbert-space
  - lem-galerkin-orthogonality-for-conforming-galerkin-approximations
  - thm-lax-milgram
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Part VI, Chapter 26, Basic error analysis
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap26.pdf
      locator: "§26.3.1–26.3.2, Lemmas 26.12–26.13, printed pp. 28–30: orthogonality and the M/alpha quasi-optimality factor."
    - title: Thomas Richter, Die Finite Elemente Methode für partielle Differentialgleichungen
      url: https://numerics.ovgu.de/teaching/numpde/skript.pdf
      locator: "§3.1.1, Lemmas 3.2, 3.4 and 3.6, printed pp. 52–54: discrete solvability, orthogonality, and Céa's estimate."
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
---

## Statement

Assume Countable Choice. Let $V$ be a real or complex Hilbert space and let
$a:V\times V\to\mathbb K$ be linear in its first argument, conjugate-linear
in its second, bounded by $M$, and coercive with constant $\alpha>0$:
$$|a(v,w)|\le M\|v\|_V\|w\|_V,\qquad \operatorname{Re}a(v,v)\ge\alpha\|v\|_V^2.$$
Let $F:V\to\mathbb K$ be bounded and conjugate-linear, and let $V_h\subseteq V$
be finite-dimensional. Then there are unique $u\in V$ and $u_h\in V_h$ with
$$a(u,v)=F(v)\quad(v\in V).$$
$$a(u_h,v_h)=F(v_h)\quad(v_h\in V_h).$$
The solutions satisfy
$$\|u-u_h\|_V\le\frac M\alpha\inf_{v_h\in V_h}\|u-v_h\|_V.$$
The real bilinear case uses linear functionals and reads $\operatorname{Re}$ as
the identity.

## Facts & Assumptions

**Given:** Countable Choice; the Hilbert space $V$; the bounds $M,\alpha$ for
$a$; a bounded conjugate-linear $F$; and a finite-dimensional subspace
$V_h\subseteq V$.

[F1] Boundedness and coercivity mean the two displayed inequalities, with
$a$ linear in the first slot and conjugate-linear in the second
([[def-bounded-coercive-and-symmetric-sesquilinear-forms]]).

[F2] A Hilbert space is complete in its induced norm
([[def-hilbert-space]]).

[F3] A finite-dimensional normed subspace, including the zero subspace, is
closed in its ambient normed space ([[cor-finite-dimensional-subspaces-are-closed]]).

[F4] Under Countable Choice, Lax–Milgram gives a unique solution for a bounded
coercive form and bounded conjugate-linear data
([[thm-lax-milgram]], [[def-countable-choice]]).

[F5] For a conforming subspace, the continuous and restricted discrete
variational equations imply $a(u-u_h,v_h)=0$ for every $v_h\in V_h$
([[lem-galerkin-orthogonality-for-conforming-galerkin-approximations]]).

## Proof

1.1 Apply [F4] on $V$; its hypotheses are exactly the boundedness, coercivity, Hilbert, and datum assumptions in **Given**. This gives a unique $u\in V$ with $a(u,v)=F(v)$ for all $v\in V$. [F1, F2, F4, given]

1.2 Fix a finite ordered basis of $V_h$. By [F3], $V_h$ is closed in $V$. A Cauchy sequence in $V_h$ is Cauchy in $V$, so [F2] gives a limit in $V$; the closedness puts the limit in $V_h$. The restricted inner product is complete, so $V_h$ is Hilbert, also when $V_h=\{0\}$. [F2, F3, given]

2.1 The restrictions of $a$ and $F$ to $V_h$ retain the same bounds $M$ and $\alpha$, and $F|_{V_h}$ is bounded. Apply [F4] on the Hilbert space from step 1.2. This gives a unique $u_h\in V_h$ satisfying the discrete equations. [F1, F2, F4, step 1.2, given]

3.1 By [F5], with $e:=u-u_h$, we have $a(e,w_h)=0$ for every $w_h\in V_h$. [F5, step 1.1, step 2.1]

4.1 Fix any $v_h\in V_h$. Since $u-v_h=e+(u_h-v_h)$ and $u_h-v_h\in V_h$, [F5] gives $a(e,e)=a(e,u-v_h)-a(e,u_h-v_h)=a(e,u-v_h).$ Coercivity and boundedness therefore give $\alpha\|e\|_V^2\le\operatorname{Re}a(e,e)\le|a(e,u-v_h)|\le M\|e\|_V\|u-v_h\|_V.$ [F1, F5, step 3.1, algebra]

5.1 If $e=0$, the claimed estimate is immediate. Otherwise divide step 4.1 by $\alpha\|e\|_V$ and then take the infimum over all $v_h\in V_h$. This proves Céa's estimate. [step 4.1, algebra] ∎
