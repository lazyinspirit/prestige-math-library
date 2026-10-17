---
id: lem-trust-region-cauchy-decrease
kind: lemma
title: "The Cauchy step gives a quantitative model decrease"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-trust-region-quadratic-model-and-ratio
  - alg-trust-region-cauchy-step
  - def-induced-matrix-p-norm
  - thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized
  - thm-cauchy-schwarz-and-the-euclidean-norm
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, second edition"
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 4, §4.2, Lemma 4.3 and proof, printed pp. 77–78 / PDF pp. 97–99: the three cases in the Cauchy-decrease estimate."
    - title: "Nick Gould, Continuous Optimization Algorithms, Part 3.2: Trust-Region Methods"
      url: "https://www.numerical.rl.ac.uk/media/people/nick-gould/part3.2.pdf"
      locator: "§II, pp. 19–22: Cauchy decrease bound and its use in the global-convergence proof."
---

## Statement

In the quadratic model of [[def-trust-region-quadratic-model-and-ratio]],
let $g\ne0$, let $B$ be symmetric, and let $\Delta>0$. Write
$M:=\|B\|_2$ for the induced Euclidean matrix norm, with the convention
$\min\{\Delta,\|g\|_2/M\}=\Delta$ when $M=0$. The Cauchy step
$p_C$ of [[alg-trust-region-cauchy-step]] minimizes the model on the
negative-gradient segment $\{-tg:0\le t\le\Delta/\|g\|_2\}$ and satisfies
$$m(0)-m(p_C)\ge\tfrac12\|g\|_2
\min\{\Delta,\|g\|_2/M\}.$$

## Facts & Assumptions

**Given:** A trust-region quadratic model with $g\ne0$, symmetric $B$, radius
$\Delta>0$, and its Cauchy step.

[F1] [[alg-trust-region-cauchy-step]]: if $c:=g^TBg\le0$, then
$p_C=-(\Delta/\|g\|_2)g$; if $c>0$, then
$p_C=-\tau g$ with $\tau=\min\{\|g\|_2^2/c,\Delta/\|g\|_2\}$.

[F2] [[thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized]]:
$\|B g\|_2\le\|B\|_2\|g\|_2$.

[F3] [[thm-cauchy-schwarz-and-the-euclidean-norm]]:
$|\langle u,v\rangle|\le\|u\|_2\|v\|_2$.

[F4] [[def-trust-region-quadratic-model-and-ratio]]:
$m(p)=f(x)+\langle g,p\rangle+\tfrac12p^TBp$.

## Proof

**Given:** The hypotheses in the Statement.

1.1 Put $a:=\|g\|_2>0$, $c:=g^TBg$, and
$\psi(t):=m(-tg)-m(0)=-ta^2+\tfrac12t^2c$ on
$0\le t\le\Delta/a$. If $c\le0$, then for $t_2>t_1\ge0$,
$\psi(t_2)-\psi(t_1)=-(t_2-t_1)a^2+\tfrac12c(t_2^2-t_1^2)<0$; hence its
minimum is at $t=\Delta/a$, which is the first branch in [F1]. The predicted
reduction is $P\ge a\Delta\ge\tfrac12a\min\{\Delta,a/M\}$. This case
also covers $M=0$, since then $c=0$. [given, F1, F4, algebra]

1.2 Suppose $c>0$. Completing the square in $\psi$ shows its unconstrained
minimizer is $t=a^2/c$, so its minimizer on the segment is
$\tau=\min\{a^2/c,\Delta/a\}$, the second branch in [F1]. Put $s:=\tau a$;
then $s=\min\{a^3/c,\Delta\}$ and $s\le a^3/c$. Thus
$P=as-\tfrac12(c/a^2)s^2\ge\tfrac12as$. By [F2] and [F3],
$c=\langle g,Bg\rangle\le a\|Bg\|_2\le Ma^2$, whence
$a^3/c\ge a/M$ and $s\ge\min\{\Delta,a/M\}$. Therefore
$P\ge\tfrac12a\min\{\Delta,a/M\}$. [given, F1, F2, F3, F4, algebra]

2.1 The cases $c\le0$ and $c>0$ exhaust all real $c$. Both establish that
the algorithm returns the segment minimizer and prove the stated decrease
bound. [step 1.1, step 1.2] ∎
