---
id: thm-negative-pell-period-parity-criterion
kind: theorem
title: "Negative Pell is soluble exactly for odd period length"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-pell-equation, def-generalized-and-negative-pell-equations, def-continued-fraction-complete-quotients, lem-square-root-continued-fraction-state-recurrence, lem-square-root-convergent-norm-identity, thm-square-root-continued-fraction-period-structure, thm-legendre-continued-fraction-criterion]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory"
      url: "https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university"
    - title: "Keith Conrad, Pell's Equation, I"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/pelleqn1.pdf"
    - title: "MIT 18.781, Lecture 21: Brahmagupta-Pell Equation"
      url: "https://ocw.mit.edu/courses/18-781-theory-of-numbers-spring-2012/13cf7a5b5cc750bac32299824469a8d2_MIT18_781S12_lec21.pdf"
pipeline_run: null
---

## Statement

Let $\ell$ be the period length of the regular continued fraction of $\sqrt D$.
Then the negative Pell equation
$$x^2-Dy^2=-1$$
has an integral solution if and only if $\ell$ is odd.

When $\ell$ is odd, the convergent $p_{\ell-1}/q_{\ell-1}$ gives the least
positive solution of $x^2-Dy^2=-1$, and the least positive solution of
$x^2-Dy^2=1$ is the convergent $p_{2\ell-1}/q_{2\ell-1}$. When $\ell$ is even,
the least positive norm-one solution is $p_{\ell-1}/q_{\ell-1}$.

## Facts & Assumptions

**Given:** A positive nonsquare integer $D$, the period length $\ell$ of $\sqrt D$, and the convergents $p_n/q_n$ of $\sqrt D$.

[F1] The continued fraction of $\sqrt D$ has period $$[a_0;\overline{a_1,\ldots,a_{\ell-1},2a_0}],$$ and the first returned reduced state satisfies $$P_\ell=a_0,\qquad Q_\ell=1.$$ ([[thm-square-root-continued-fraction-period-structure]])

[F2] For each complete quotient, one has $$a_n=\lfloor\alpha_n\rfloor,$$ and if $\alpha_n\ne a_n$ then $$\alpha_{n+1}=\frac1{\alpha_n-a_n}.$$ ([[def-continued-fraction-complete-quotients]])

[F3] The complete quotients satisfy $$\alpha_n=\frac{\sqrt D+P_n}{Q_n},\qquad Q_n>0.$$ ([[lem-square-root-continued-fraction-state-recurrence]])

[F4] The convergents satisfy $$p_n^2-Dq_n^2=(-1)^{n+1}Q_{n+1}.$$ ([[lem-square-root-convergent-norm-identity]]).

[F5] If a reduced rational number $r/s$ satisfies $$\left|\sqrt D-\frac rs\right|<\frac1{2s^2},$$ then $r/s$ is a convergent of $\sqrt D$ ([[thm-legendre-continued-fraction-criterion]]).

## Proof

**Proof technique:** direct.

1.1 Applying [F4] at $n=\ell-1$ and using $Q_\ell=1$ from [F1] gives $$p_{\ell-1}^2-Dq_{\ell-1}^2=(-1)^\ell.$$ Hence $\ell$ odd yields a negative-Pell solution at $p_{\ell-1}/q_{\ell-1}$, while $\ell$ even yields a positive norm-one solution there. [F1, F4, algebra]

1.2 Conversely, suppose $x,y>0$ satisfy $x^2-Dy^2=-1$. Then $$0<\sqrt D-\frac{x}{y}=\frac1{y(x+y\sqrt D)}.$$ Because $D\ge2$, one has $x^2=Dy^2-1\ge y^2$, so $x\ge y$, and therefore $$x+y\sqrt D>2y.$$ Hence $$\left|\sqrt D-\frac{x}{y}\right|<\frac1{2y^2}.$$ Since $\gcd(x,y)=1$ follows from $x^2-Dy^2=-1$, fact [F5] shows that $x/y=p_n/q_n$ for some convergent. [F5, given, algebra]

1.3 By [F1] and [F3], the returned state at one full period is $$ \alpha_\ell=\frac{\sqrt D+P_\ell}{Q_\ell}=\sqrt D+a_0. $$ Since $\lfloor\alpha_\ell\rfloor=2a_0$, fact [F2] gives $$ \alpha_{\ell+1}=\frac1{\alpha_\ell-\lfloor\alpha_\ell\rfloor}=\frac1{\sqrt D-a_0}=\alpha_1. $$ Thus one full period returns the complete-quotient algorithm to $\alpha_1$; because the digits from $a_1$ onward repeat with period $\ell$, the same computation one period later gives $\alpha_{2\ell}=\sqrt D+a_0$, hence $Q_{2\ell}=1$. Applying [F4] at $n=2\ell-1$ yields $$ p_{2\ell-1}^2-Dq_{2\ell-1}^2=(-1)^{2\ell}Q_{2\ell}=1. $$ Thus $p_{2\ell-1}/q_{2\ell-1}$ is a positive norm-one solution. [F1, F2, F3, F4, algebra]

2.1 For that index $n$, [F4] gives $$-1=x^2-Dy^2=p_n^2-Dq_n^2=(-1)^{n+1}Q_{n+1}.$$ Since $Q_{n+1}$ is a positive integer, it follows that $$Q_{n+1}=1\qquad\text{and}\qquad n\text{ is even}.$$ Facts [F2] and [F3] then give $$ \alpha_{n+1}=\sqrt D+P_{n+1},\qquad \alpha_{n+2}=\frac1{\alpha_{n+1}-\lfloor\alpha_{n+1}\rfloor}=\frac1{\sqrt D-a_0}=\alpha_1. $$ So the digit block from $a_1$ onward repeats with period $n+1$. Because $\ell$ is the period length, $\ell$ divides $n+1$. Since $n+1$ is odd, $\ell$ must be odd. [F2, F3, F4, step 1.2, algebra]

3.1 Step 2.1 shows that every positive negative-Pell solution comes from a convergent index $n$ with $n$ even and $\ell\mid(n+1)$, so the first such index is $\ell-1$. Now let $u,v>0$ satisfy $u^2-Dv^2=1$. Then $$0<\frac{u}{v}-\sqrt D=\frac1{v(u+v\sqrt D)}.$$ Because $D\ge2$, one has $u^2=Dv^2+1>v^2$, so $u>v$, and therefore $$u+v\sqrt D>2v.$$ Hence $$\left|\sqrt D-\frac{u}{v}\right|<\frac1{2v^2}.$$ Since $\gcd(u,v)=1$, [F5] shows that $u/v=p_n/q_n$ for some convergent. Applying [F4] gives $$1=u^2-Dv^2=p_n^2-Dq_n^2=(-1)^{n+1}Q_{n+1},$$ so $$Q_{n+1}=1\qquad\text{and}\qquad n\text{ is odd}.$$ As in step 2.1, facts [F2] and [F3] then give $\alpha_{n+2}=\alpha_1$, so $\ell$ divides $n+1$. Therefore the first possible norm-one index is $\ell-1$ when $\ell$ is even and $2\ell-1$ when $\ell$ is odd. Convergent denominators strictly increase, and for positive solutions of $x^2-Dy^2=\pm1$ the value of $x$ is determined by $x^2=Dy^2\pm1$, so the first convergent of each type gives the least positive solution. Therefore, when $\ell$ is odd, $p_{\ell-1}/q_{\ell-1}$ is the least positive negative-Pell solution and $p_{2\ell-1}/q_{2\ell-1}$ is the least positive norm-one solution, while when $\ell$ is even, $p_{\ell-1}/q_{\ell-1}$ is the least positive norm-one solution. [F2, F3, F4, F5, step 1.3, step 2.1, algebra] ∎
