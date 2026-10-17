---
id: lem-parabolic-measurable-form-operators-and-inverse
kind: lemma
title: Measurable actions and inverse actions of parabolic forms
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-parabolic-evolution-triple-and-energy-space
  - def-bounded-coercive-and-symmetric-sesquilinear-forms
  - def-countable-choice
  - thm-continuity-from-above-for-measures
  - thm-finite-and-countable-subadditivity-of-measures
  - thm-lax-milgram
  - thm-riesz-representation-for-hilbert-space
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Christian Clason, Introduction to Finite Element Methods, lecture notes
      url: https://arxiv.org/pdf/1709.08618v2.pdf
      locator: "Chapter 11, §11.2, PDF pp. 100–103: scalar measurability of the coercive form and the inverse-operator step in Theorem 11.3. The Galerkin approximation below supplies the measurable-inverse argument left implicit there."
    - title: Long Chen, Finite Element Methods for Parabolic Equations
      url: https://www.math.uci.edu/~chenlong/226/ParabolicEquation.pdf
      locator: "§1, pp. 1–3: the L²(V*) weak formulation and measurable-time data convention; Chen assumes rather than proves continuous well-posedness."
verification: {}
---

## Statement

Assume Countable Choice. Let $V$ be a separable real Hilbert space, let $T>0$, and let
$q\in L^2(0,T;V^*)$. Suppose $a(t;\cdot,\cdot)$ is real bilinear and
$t\mapsto a(t;v,w)$ is measurable for each fixed $v,w\in V$. Assume there
is one null set outside which
$$|a(t;v,w)|\le M\|v\|_V\|w\|_V,\qquad a(t;v,v)\ge\alpha\|v\|_V^2$$
for all $v,w\in V$, with $M<\infty$ and $\alpha>0$. For a.e. $t$ outside
that null set define $A(t)v\in V^*$ and $A^*(t)v\in V^*$ by
$$\langle A(t)v,w\rangle=a(t;v,w),\qquad \langle A^*(t)v,w\rangle=a(t;w,v).$$
Then, for every $u\in L^2(0,T;V)$, both $t\mapsto A(t)u(t)$ and
$t\mapsto A^*(t)u(t)$ are strongly measurable and belong to
$L^2(0,T;V^*)$. For a.e. $t$, the two equations
$$a(t;x(t),v)=\langle q(t),v\rangle,\qquad a(t;v,x^*(t))=\langle q(t),v\rangle\qquad(v\in V)$$
have unique solutions. The solution functions $x,x^*$ are strongly
measurable, belong to $L^2(0,T;V)$, and satisfy
$$\|x(t)\|_V,\ \|x^*(t)\|_V\le\alpha^{-1}\|q(t)\|_{V^*}\quad\text{a.e.}$$
On the exceptional null set set all operator actions and solutions to zero.

## Facts & Assumptions

**Given:** A separable real Hilbert space $V$, an evolution triple containing
$V$, the scalar-measurable bilinear form with its common uniform bound and
coercivity constants, and $q\in L^2(0,T;V^*)$.

[F1] $L^2$ functions are strongly measurable equivalence classes, and an
evolution triple embeds $V$ continuously into $H$ and then into $V^*$
([[def-parabolic-evolution-triple-and-energy-space]]).

[F2] A bounded coercive real bilinear form is bounded by $M$ and has
$a(v,v)\ge\alpha\|v\|_V^2$; symmetry is not required
([[def-bounded-coercive-and-symmetric-sesquilinear-forms]]).

[F3] Under Countable Choice, a separable real Hilbert space and its continuous dual are isometric by the
Riesz representation, so separability of $V$ implies separability of $V^*$
([[thm-riesz-representation-for-hilbert-space]]).

[F4] Under Countable Choice, a bounded coercive real bilinear form on a
Hilbert space has a unique variational solution, with solution norm at most
$\alpha^{-1}$ times the datum norm ([[thm-lax-milgram]]).

[F5] If measurable sets decrease inside a finite-measure set, their measures
decrease to the measure of their intersection
([[thm-continuity-from-above-for-measures]]).

[F6] A countable union of measurable null sets is null
([[thm-finite-and-countable-subadditivity-of-measures]]).

[A1] Countable Choice is assumed by [F3] and [F4]
([[def-countable-choice]]).

## Proof
1.1 If $V=\{0\}$, all spaces and maps in the claim are zero and the result holds. Otherwise choose countable dense sets in $V$ and $V^*$, the latter available by [F3]. For fixed $v\in V$, the functional $A(t)v$ has norm at most $M\|v\|_V$. On a countable dense subset $(w_j)$ of the unit sphere, $\|A(t)v-r\|_{V^*}=\sup_j|a(t;v,w_j)-\langle r,w_j\rangle|$ for each fixed $r\in V^*$. Hence these norm distances are measurable. Approximating $A(t)v$ by the first point of a countable dense subset of $V^*$ within $1/n$ gives a measurable countably-valued approximation. [A1, F2, F3, given, choose]

1.2 For a.e. fixed $t$ outside the common null set, apply [F4] to $a(t)$ and to its transpose $a(t;w,v)$. Both forms have the same bounds and coercivity because their diagonal values agree. This gives the unique pointwise $x(t)$ and $x^*(t)$ solving the two equations. [F2, F4, A1, given]

1.3 Choose a countable linearly independent sequence $(e_j)$ whose linear span is dense in $V$; if $V$ is finite-dimensional, use a finite basis and set $V_n=V$ once it is exhausted. Let $V_n=\operatorname{span}(e_1,\dots,e_n)$. The Galerkin systems for $x_n(t),x_n^*(t)\in V_n$ have measurable matrix entries and measurable right-hand sides. Their matrices are invertible: testing a homogeneous system by its trial vector and using coercivity forces that vector to be zero. Matrix inversion therefore makes the coefficient vectors, and hence $x_n,x_n^*$, strongly measurable. [A1, F2, given, construct]

2.1 Truncate the $n$th countably-valued approximation after its first $N_n$ values, replacing the tail by zero. By [F5], choose $N_n$ so the tail set has measure at most $2^{-n}$. These truncations are finite-valued measurable functions; [F6] shows that outside a null set only finitely many tails occur, so they converge pointwise to $A(t)v$. Thus $A(t)v$ is strongly measurable. Applying the same argument to the transposed form proves that $A^*(t)v$ is strongly measurable for each fixed $v$. [A1, F2, F3, F5, F6, step 1.1, construct]

2.2 For any $z_n\in V_n$, Galerkin orthogonality and coercivity give $$\alpha\|x(t)-x_n(t)\|_V^2\le a(t;x-x_n,x-x_n) =a(t;x-x_n,x-z_n)\le M\|x-x_n\|_V\|x-z_n\|_V.$$ Thus $\|x-x_n\|_V\le(M/\alpha)\inf_{z_n\in V_n}\|x-z_n\|_V$; the identical argument for the transposed form gives the same estimate for $x^*$. Density of $\bigcup_n V_n$ makes both Galerkin sequences converge pointwise to their unique solutions. Their limits are strongly measurable. [F2, step 1.3, algebra]

3.1 Approximate any strongly measurable $u\in L^2(0,T;V)$ pointwise a.e. by finite-valued simple functions $u_n$. For each $n$, $A(t)u_n(t)$ and $A^*(t)u_n(t)$ are strongly measurable by step 2.1. The uniform operator bounds give pointwise convergence to $A(t)u(t)$ and $A^*(t)u(t)$ off the common null set, and $\|A(t)u(t)\|_{V^*},\|A^*(t)u(t)\|_{V^*}\le M\|u(t)\|_V$. This proves strong measurability and square integrability of both actions. [F1, F2, step 2.1, given]

4.1 Testing each pointwise variational equation by its solution gives $\alpha\|x(t)\|_V^2\le\|q(t)\|_{V^*}\|x(t)\|_V$ and the same inequality for $x^*(t)$. If a solution is zero the claimed bound is immediate; otherwise division by its norm yields the two pointwise estimates. Squaring and integrating proves $x,x^*\in L^2(0,T;V)$ with the asserted bounds. [F2, step 1.2, algebra] ∎
