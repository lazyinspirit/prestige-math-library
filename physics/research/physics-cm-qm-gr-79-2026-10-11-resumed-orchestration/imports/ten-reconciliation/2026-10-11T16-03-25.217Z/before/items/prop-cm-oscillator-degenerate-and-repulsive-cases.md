---
id: prop-cm-oscillator-degenerate-and-repulsive-cases
kind: proposition
title: "The degenerate and repulsive oscillator: solutions for k=0 and the explicit growing solution for k<0"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-oscillator-model-and-phase-system, lem-cm-continuous-dependence-on-initial-data, thm-derivative-of-exponential, thm-algebra-of-derivatives, thm-chain-rule, cor-zero-derivative-implies-constant, cor-primitives-of-a-continuous-function, thm-exponential-is-strictly-increasing, cor-exponential-is-a-bijection-onto-positive-reals, def-derivative, def-interval]
dependency_roles:
  def-cm-oscillator-model-and-phase-system: mathematical-premise
  lem-cm-continuous-dependence-on-initial-data: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  cor-primitives-of-a-continuous-function: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
  cor-exponential-is-a-bijection-onto-positive-reals: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: cases
sources:
  references:
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (complete 252-page volume), Chapter 5 Section 5.1, Eqs. (5.6)-(5.9): characteristic equation and the free damped solutions, including the high-damping and free cases, printed pages 2-3 of Chapter 5 (PDF pages 88-89)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09 Fall 2014, complete course text), Chapter 7 Section 7.1.3, Eq. (7.16) and the surrounding classification of linearised oscillator solutions, printed page 148"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---

## Statement

Let $m>0$, $c\ge0$, let $k\le0$, and consider the model $m\,x''+c\,x'+k\,x=0$ ([[def-cm-oscillator-model-and-phase-system]]). In the three cases below, $x:J\to\mathbb R$ runs over solutions on intervals $J\subseteq\mathbb R$ with nonempty interior.

1. **Double zero root ($k=0$, $c=0$).** Then $x$ solves the model if and only if $x(t)=A+Bt$ for some $A,B\in\mathbb R$, and the unique solution with $x(0)=x_0$, $x'(0)=v_0$ is $x(t)=x_0+v_0t$.
2. **Simple zero root ($k=0$, $c>0$).** Then $x$ solves the model if and only if
$$x(t)=A+Be^{-ct/m}$$
for some $A,B\in\mathbb R$; the solution with $x(0)=x_0$, $x'(0)=v_0$ has $A=x_0+\frac{m v_0}{c}$ and $B=-\frac{m v_0}{c}$; every solution has the finite limit $A$ as $t\to+\infty$.
3. **One positive and one negative root ($k<0$).** Put $$\lambda_\pm:=\frac{-c\pm\sqrt{c^2-4mk}}{2m}.$$ Then $\lambda_-<0<\lambda_+$, both are real roots of the characteristic polynomial, and $x$ solves the model if and only if
$$x(t)=Ae^{\lambda_+t}+Be^{\lambda_-t}$$
for some $A,B\in\mathbb R$. In particular $t\mapsto e^{\lambda_+t}$ is the solution with data $x(0)=1$, $x'(0)=\lambda_+$, and it satisfies $e^{\lambda_+t}\to+\infty$ as $t\to+\infty$: the model has an unbounded solution growing exponentially on $[0,\infty)$.

## Facts & Assumptions

**Given:** The parameters $m>0$, $c\ge0$, $k\le0$, the model of [[def-cm-oscillator-model-and-phase-system]] with phase field $G_0(x,v)=(v,-(cv+kx)/m)$, and the constants $\lambda_\pm$ of case 3.

[F1] The model, its solutions and the phase-plane system are those of [[def-cm-oscillator-model-and-phase-system]]; $x$ is a solution on $J$ exactly when $t\mapsto(x(t),x'(t))$ solves $z'=G_0(z)$ on $J$, and for $k\le0$ the field $G_0(x,v)=(v,-(cv+kx)/m)$ is linear, hence continuous and globally Lipschitz in the state variable. [given]

[F2] Local uniqueness: [[lem-cm-continuous-dependence-on-initial-data]] in the form used before: for the Lipschitz field $G_0$, any two solutions of $z'=G_0(z)$ defined on a common interval and taking the same value at one point agree on that interval (this is its "exactly one solution through given data with graph in a Picard-Lindelof cylinder" clause together with the cylinder-local uniqueness, applied along the interval). [given]

[F3] Derivative rules: $(e^{\mu t})'=\mu e^{\mu t}$ for real $\mu$; sums and products are differentiated by the algebra of derivatives and the chain rule. [thm-derivative-of-exponential, thm-algebra-of-derivatives, thm-chain-rule]

[F4] A differentiable function on an interval with identically zero derivative is constant ([[cor-zero-derivative-implies-constant]]). [def-interval]

[F5] Fundamental theorem of calculus for continuous integrands: if $G$ is a primitive of a continuous $u$ on an interval containing $a$ and $t$, then $\int_a^tu=G(t)-G(a)$ ([[cor-primitives-of-a-continuous-function]]).

[F6] The real exponential is strictly increasing, and its image is $(0,\infty)$. [thm-exponential-is-strictly-increasing, cor-exponential-is-a-bijection-onto-positive-reals]

## Proof

**Proof technique:** cases; identify the solution families in the three degenerate/repulsive cases, then obtain uniqueness from the local uniqueness lemma.

1.1 Case $k=0$, $c=0$. [assume-case 1] The model is $m\,x''=0$. Since $x'$ has zero derivative, [F4] gives $x'=v$ constant on $J$, and then $x(t)-x_0-vt$ has zero derivative and vanishes at $0$, so $x(t)=x_0+vt$ with $v=x'(0)$. Conversely every $x(t)=A+Bt$ has $x''=0$ and solves. Identifying $A=x_0$, $B=v_0$ gives the unique solution with the prescribed data. [F1, F3, F4]

1.2 Case $k=0$, $c>0$. [assume-case 2] The model is $m\,x''+c\,x'=0$, that is $u:=x'$ satisfies $u'=-(c/m)u$. Then $t\mapsto e^{ct/m}u(t)$ has derivative $e^{ct/m}\bigl(u'(t)+(c/m)u(t)\bigr)=0$ by [F3], so [F4] gives $u(t)=u(0)e^{-ct/m}$. By [F5] with the primitive $G(t)=-\frac{m}{c}e^{-ct/m}$ of $e^{-ct/m}$, $$x(t)=x(0)+\int_0^tu(s)\,ds=x(0)+u(0)\frac{m}{c}\bigl(1-e^{-ct/m}\bigr),$$ which is the displayed form with $A=x_0+\frac{mv_0}{c}$, $B=-\frac{mv_0}{c}$ and $u(0)=v_0$. Conversely the displayed family solves the model by [F3], and $e^{-ct/m}\to0$ as $t\to\infty$ because $e^{-ct/m}=(e^{ct/m})^{-1}$ with $e^{ct/m}\to+\infty$ for $c/m>0$ by strict monotonicity and surjectivity [F6]; hence $x(t)\to A$. [F1, F3, F4, F5, F6]

1.3 Case $k<0$. [assume-case 3] Here $c^2-4mk>c^2\ge0$, so $\sqrt{c^2-4mk}>c$ and $\lambda_+>0>\lambda_-$; the completing-square identity $m\lambda^2+c\lambda+k=m\bigl[(\lambda+\frac{c}{2m})^2-\frac{c^2-4mk}{4m^2}\bigr]$ shows that $\lambda_\pm$ are exactly the two real roots of the characteristic polynomial. For a real root $\mu$, $t\mapsto e^{\mu t}$ solves the model because $m\mu^2+c\mu+k=0$ and $(e^{\mu t})''=\mu^2e^{\mu t}$ by [F3]; by linearity every $Ae^{\lambda_+t}+Be^{\lambda_-t}$ solves it. Finally $e^{\lambda_+t}\to+\infty$ as $t\to+\infty$: given $R>0$, surjectivity in [F6] gives $u$ with $e^u>R$, and monotonicity gives $e^{\lambda_+t}\ge e^u>R$ for all $t\ge u/\lambda_+$. [given, F3, F6, algebra]

2.1 Uniqueness and exhaustiveness. [cases-exhaustive: $k=0,c=0$; $k=0,c>0$; $k<0$] Cases 1 and 2 already show that every solution has the displayed form. In case 3 let $x$ be any solution on $J$ and let $y$ be the family member matching the data $(x(0),x'(0))$, whose coefficients are determined by the two linear conditions $\lambda_+A+\lambda_-B=x'(0)$, $A+B=x(0)$ and exist because $\lambda_+\ne\lambda_-$. By [F1] both phase curves solve $z'=G_0(z)$ on $J$ and agree at $0$, so [F2] gives $x=y|_J$. Since the family is defined on $\mathbb R$, the solution with data $(x_0,v_0)$ exists and is unique on $\mathbb R$, and $x(t)=e^{\lambda_+t}$ matches the data $(1,\lambda_+)$; its unboundedness is step 1.3. This proves all clauses. [step 1.1, step 1.2, step 1.3, F1, F2] ∎
