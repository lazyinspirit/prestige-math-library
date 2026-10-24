---
id: lem-quadratic-irrational-complete-quotients-are-finite-state
kind: lemma
title: "Complete quotients of a quadratic irrational lie in a finite state space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-convergents-of-regular-continued-fraction, def-quadratic-irrational, lem-continued-fraction-complete-quotient-formula, lem-continued-fraction-determinant-identity, lem-continued-fraction-error-bound, thm-rational-continued-fraction-termination]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory"
      url: "https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university"
    - title: "Bruce Ikenaga, Periodic Continued Fractions"
      url: "https://sites.millersville.edu/bikenaga/number-theory/periodic-continued-fractions/periodic-continued-fractions.html"
pipeline_run: null
---

## Statement

Let $\alpha$ be a quadratic irrational, and let $\alpha_n$ be the complete
quotients produced by the continued-fraction algorithm. Then only finitely many
distinct complete quotients occur.

More precisely, if
$$a\alpha^2+b\alpha+c=0$$
with $a,b,c\in\mathbb{Z}$ and discriminant $D:=b^2-4ac>0$, then for every
$n\ge1$ the complete quotient $\alpha_n$ is a root of an integer quadratic
equation
$$A_nx^2+B_nx+C_n=0$$
whose discriminant is also $D$.

## Facts & Assumptions

**Given:** A quadratic irrational $\alpha$ and its complete quotients $\alpha_n$.

[F1] A quadratic irrational is an irrational real root of some quadratic equation $A\alpha^2+B\alpha+C=0$ with $A,B,C\in\mathbb{Q}$ and $A\ne0$. ([[def-quadratic-irrational]]).

[F2] An irrational real number never terminates under the continued-fraction algorithm, so every complete quotient $\alpha_n$ is defined ([[thm-rational-continued-fraction-termination]]).

[F3] For every $n\ge1$ one has $$\alpha=\frac{\alpha_np_{n-1}+p_{n-2}}{\alpha_nq_{n-1}+q_{n-2}}.$$ ([[lem-continued-fraction-complete-quotient-formula]]).

[F4] Consecutive convergents satisfy $$p_nq_{n-1}-p_{n-1}q_n=(-1)^{n-1}.$$ ([[lem-continued-fraction-determinant-identity]]).

[F5] The convergent errors satisfy $$\left|\alpha-\frac{p_n}{q_n}\right|<\frac1{q_nq_{n+1}}.$$ ([[lem-continued-fraction-error-bound]]).

[F6] The convergent denominators satisfy $q_0=1$, $q_1=a_1\ge1$, and $q_{n+1}=a_{n+1}q_n+q_{n-1}$ with $a_{n+1}\ge1$, so $q_n\le q_{n+1}$ for every $n\ge0$ ([[def-convergents-of-regular-continued-fraction]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], after multiplying by a common denominator we may choose integers. [F1, given, algebra] $a,b,c$ with $a\ne0$ and $$a\alpha^2+b\alpha+c=0.$$ Its discriminant $D:=b^2-4ac$ is positive because $\alpha$ is real and nonsquare because $\alpha$ is irrational. [F1, given, algebra]

2.1 Because $\alpha$ is irrational, [F2] says the continued-fraction algorithm. [F2, F3, algebra] never terminates, so every $\alpha_n$ is defined. For each $n\ge1$, substituting the expression from [F3] into the quadratic equation from step 1.1 and clearing denominators yields $$A_n\alpha_n^2+B_n\alpha_n+C_n=0,$$ where $$A_n:=ap_{n-1}^2+bp_{n-1}q_{n-1}+cq_{n-1}^2,$$ $$B_n:=2ap_{n-1}p_{n-2}+b(p_{n-1}q_{n-2}+p_{n-2}q_{n-1})+2cq_{n-1}q_{n-2},$$ $$C_n:=ap_{n-2}^2+bp_{n-2}q_{n-2}+cq_{n-2}^2.$$ These coefficients are integers. [F2, F3, algebra]

3.1 The discriminant of that quadratic is. [step 2.1, F4, algebra] $$B_n^2-4A_nC_n=(b^2-4ac)\bigl(p_{n-1}q_{n-2}-p_{n-2}q_{n-1}\bigr)^2=D,$$ because [F4] gives $$\bigl(p_{n-1}q_{n-2}-p_{n-2}q_{n-1}\bigr)^2=1.$$ [step 2.1, F4, algebra]

3.2 Put. [F5, F6, step 1.1, algebra] $$\delta_n:=\alpha q_{n-1}-p_{n-1}=q_{n-1}\left(\alpha-\frac{p_{n-1}}{q_{n-1}}\right).$$ Facts [F5] and [F6] give $$|\delta_n|<\frac1{q_n}\le1,\qquad |q_{n-1}\delta_n|<\frac{q_{n-1}}{q_n}\le1.$$ Since $p_{n-1}=\alpha q_{n-1}-\delta_n$, the coefficient $A_n$ from step 2.1 becomes $$A_n=a(\alpha q_{n-1}-\delta_n)^2+b(\alpha q_{n-1}-\delta_n)q_{n-1}+cq_{n-1}^2=-(2a\alpha+b)q_{n-1}\delta_n+a\delta_n^2,$$ because $a\alpha^2+b\alpha+c=0$. Therefore $$|A_n|\le|2a\alpha+b|+|a|,$$ so only finitely many integers can occur as $A_n$. [F5, F6, step 1.1, algebra]

4.1 For $n\ge2$, the formulas in step 2.1 give $C_n=A_{n-1}$, so the integers. [step 2.1, step 3.2, step 3.1, algebra] $C_n$ also range over a finite set. Then step 3.1 yields $$B_n^2=D+4A_nC_n,$$ so only finitely many integers $B_n$ can occur as well. Thus only finitely many triples $(A_n,B_n,C_n)$ arise, and each $\alpha_n$ with $n\ge1$ is one of the at most two roots of one of those finitely many quadratics. Together with the single value $\alpha_0=\alpha$, this proves that only finitely many complete quotients occur. [step 2.1, step 3.2, step 3.1, algebra] ∎
