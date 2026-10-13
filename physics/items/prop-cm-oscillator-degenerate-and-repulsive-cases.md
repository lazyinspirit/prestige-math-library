---
id: prop-cm-oscillator-degenerate-and-repulsive-cases
kind: proposition
title: "The degenerate and repulsive oscillator: solutions for k=0 and the explicit growing solution for k<0"
status: published
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-oscillator-model-and-phase-system, lem-cm-continuous-dependence-on-initial-data, thm-derivative-of-exponential, thm-algebra-of-derivatives, thm-chain-rule, cor-zero-derivative-implies-constant, cor-primitives-of-a-continuous-function, thm-exponential-is-strictly-increasing, cor-exponential-is-a-bijection-onto-positive-reals, def-derivative, def-interval, def-oriented-integral]
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
  def-oriented-integral: mathematical-premise
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

Let $m>0$, $c\ge0$, let $k\le0$, and consider the model $m\,x''+c\,x'+k\,x=0$ of [[def-cm-oscillator-model-and-phase-system]] with time domain $I=\mathbb R$ and forcing $f:\mathbb R\to\mathbb R$ identically zero. In the three cases below, $x:J\to\mathbb R$ runs over solutions on intervals $J\subseteq\mathbb R$ with nonempty interior.

A local solution here may have any interval $J\subseteq\mathbb R$ with nonempty interior, with domain-relative derivatives at included endpoints. It has a unique extension to the global family below. A **maximal solution** means one that has no solution extension to a strictly larger interval; the maximal solutions of this global autonomous equation are precisely the family members on $\mathbb R$. For a homogeneous model restricted to a time domain $I$, its solutions have $J\subseteq I$ and are restrictions of these same global members; their extensions solve the all-$\mathbb R$ equation.

1. **Double zero root ($k=0$, $c=0$).** Then on every such interval $J$, $x$ solves the model if and only if $x(t)=A+Bt$ for some $A,B\in\mathbb R$; each such local solution is the restriction of a unique global member of this family. For every datum $(x_0,v_0)$ there is a unique global solution on $\mathbb R$ with $x(0)=x_0$, $x'(0)=v_0$, namely $x(t)=x_0+v_0t$.
2. **Simple zero root ($k=0$, $c>0$).** Then on every such interval $J$, $x$ solves the model if and only if
$$x(t)=A+Be^{-ct/m}$$
for some $A,B\in\mathbb R$; each such local solution is the restriction of a unique global member of this family. For every datum $(x_0,v_0)$ there is a unique global solution on $\mathbb R$ with $x(0)=x_0$, $x'(0)=v_0$, namely the member with $A=x_0+\frac{m v_0}{c}$ and $B=-\frac{m v_0}{c}$. This global solution has limit $A$ as $t\to+\infty$; any local solution on an interval unbounded above has the same limit along that interval.
3. **One positive and one negative root ($k<0$).** Put $$\lambda_\pm:=\frac{-c\pm\sqrt{c^2-4mk}}{2m}.$$ Then $\lambda_-<0<\lambda_+$, both are real roots of the characteristic polynomial, and on every such interval $J$, $x$ solves the model if and only if
$$x(t)=Ae^{\lambda_+t}+Be^{\lambda_-t}$$
for some $A,B\in\mathbb R$; each such local solution is the restriction of a global member of this family. In particular the global solution $t\mapsto e^{\lambda_+t}$ has data $x(0)=1$, $x'(0)=\lambda_+$ and satisfies $e^{\lambda_+t}\to+\infty$ as $t\to+\infty$: the model has an unbounded solution growing exponentially on $[0,\infty)$.

## Facts & Assumptions

**Given:** The parameters $m>0$, $c\ge0$, $k\le0$, the model of [[def-cm-oscillator-model-and-phase-system]] with $I=\mathbb R$, $f\equiv0$ and phase field $G_0(x,v)=(v,-(cv+kx)/m)$, and the constants $\lambda_\pm$ of case 3.

[F1] The model, its solutions and the phase-plane system are those of [[def-cm-oscillator-model-and-phase-system]] with $I=\mathbb R$ and $f\equiv0$; $x$ is a solution on $J$ exactly when $t\mapsto(x(t),x'(t))$ solves $z'=G_0(z)$ on $J$, and for $k\le0$ the field $G_0(x,v)=(v,-(cv+kx)/m)$ is linear, hence continuous and globally Lipschitz in the state variable. [given]

[F2] Local uniqueness: [[lem-cm-continuous-dependence-on-initial-data]] in the form used before: for the Lipschitz field $G_0$, any two solutions of $z'=G_0(z)$ defined on a common interval and taking the same value at one point agree on that interval (this is its "exactly one solution through given data with graph in a Picard-Lindelof cylinder" clause together with the cylinder-local uniqueness, applied along the interval). [given]

[F3] Derivative rules: $(e^{\mu t})'=\mu e^{\mu t}$ for real $\mu$; sums and products are differentiated by the algebra of derivatives and the chain rule. [thm-derivative-of-exponential, thm-algebra-of-derivatives, thm-chain-rule]

[F4] A differentiable function on an interval with identically zero derivative is constant ([[cor-zero-derivative-implies-constant]]). [def-interval]

[F5] Fundamental theorem of calculus for continuous integrands: if $G$ is a primitive of a continuous $u$ on an interval containing $a$ and $t$, then for $a<t$ the evaluation clause of [[cor-primitives-of-a-continuous-function]] gives $\int_a^tu=G(t)-G(a)$. For $t<a$, [[def-oriented-integral]] gives $\int_a^tu=-\int_t^au=-(G(a)-G(t))$ by the same clause on $[t,a]$; for $t=a$ both sides vanish. Thus the formula holds for every ordering of $a,t$.

[F6] The real exponential is strictly increasing, and its image is $(0,\infty)$. [thm-exponential-is-strictly-increasing, cor-exponential-is-a-bijection-onto-positive-reals]

## Proof

**Proof technique:** cases; identify the solution families in the three degenerate/repulsive cases, then obtain uniqueness from the local uniqueness lemma.

1.1 Case $k=0$, $c=0$. [assume-case 1] The model is $mx''=0$. By [F4], $x'$ is a constant $B$ on $J$, and $x(t)-Bt$ has zero derivative, hence is a constant $A$ on $J$. Thus every solution on an arbitrary interval is $A+Bt$, and conversely each such function solves by [F3]. For a global solution the data at zero give $A=x_0$, $B=v_0$. [F1, F3, F4]

1.2 Case $k=0$, $c>0$. [assume-case 2] Put $u=x'$. By [F3], $(e^{ct/m}u)'=e^{ct/m}(u'+(c/m)u)=0$, so [F4] gives $u(t)=De^{-ct/m}$ for a constant $D$ on $J$. Fix $a\in J^\circ$. Applying [F5] to the primitives $x$ and $-(mD/c)e^{-ct/m}$ of $u$ gives $x(t)-x(a)=-(mD/c)(e^{-ct/m}-e^{-ca/m})$ for every $t\in J$. Hence $(x(t)+(mD/c)e^{-ct/m})'=0$ and $x(t)=A+Be^{-ct/m}$ for constants $A,B$ with $B=-mD/c$, without requiring $0\in J$. Conversely this family solves by [F3] and extends globally. Its extension is unique: if two such global members agree on $J$, their difference $A_1-A_2+(B_1-B_2)e^{-ct/m}$ vanishes on the nonempty open interval $J^\circ$; differentiating there and using $c>0$ and $e^{-ct/m}>0$ gives $B_1=B_2$, then $A_1=A_2$. On the global member, data at zero give $B=-mv_0/c$ and $A=x_0+mv_0/c$. The exponential term tends to zero at $+\infty$ by monotonicity and surjectivity of the exponential in [F6]: for any $\eta>0$, choose $r\in\mathbb R$ with $e^r=\eta$; whenever $t>\max\{0,-mr/c\}$, $-ct/m<r$ and $0<e^{-ct/m}<\eta$. Thus the global extension has limit $A$; when $J$ is unbounded above, the original solution agrees with this extension on its positive-time tail and has the same limit. [F1, F3, F4, F5, F6, algebra]

1.3 Case $k<0$. [assume-case 3] Here $c^2-4mk>c^2\ge0$, so $\sqrt{c^2-4mk}>c$ and $\lambda_+>0>\lambda_-$; the completing-square identity $m\lambda^2+c\lambda+k=m\bigl[(\lambda+\frac{c}{2m})^2-\frac{c^2-4mk}{4m^2}\bigr]$ shows that $\lambda_\pm$ are exactly the two real roots of the characteristic polynomial. For a real root $\mu$, $t\mapsto e^{\mu t}$ solves the model because $m\mu^2+c\mu+k=0$ and $(e^{\mu t})''=\mu^2e^{\mu t}$ by [F3]; by linearity every $Ae^{\lambda_+t}+Be^{\lambda_-t}$ solves it. Finally $e^{\lambda_+t}\to+\infty$ as $t\to+\infty$: given $R>0$, surjectivity in [F6] gives $u$ with $e^u>R$, and monotonicity gives $e^{\lambda_+t}\ge e^u>R$ for all $t\ge u/\lambda_+$. [given, F3, F6, algebra]

2.1 Uniqueness and exhaustiveness. [cases-exhaustive: $k=0,c=0$; $k=0,c>0$; $k<0$] Cases 1 and 2 exhaust the arbitrary-interval solution sets by steps 1.1 and 1.2. In case 3 choose any $t_0\in J^\circ$. The value/derivative matrix of $e^{\lambda_+t}$ and $e^{\lambda_-t}$ at $t_0$ has determinant $(\lambda_--\lambda_+)e^{(\lambda_++\lambda_-)t_0}\ne0$, so a unique global family member $y$ matches $(x(t_0),x'(t_0))$. By [F1] the full phase curves solve the same system, and [F2] gives equality on $J$: cylinder-local uniqueness propagates on the connected interior using the closed-and-open set where both phase components agree, then extends to included endpoints by continuity. Thus $x=y|_J$. Each explicit family is defined on $\mathbb R$, its coefficient/data map at zero is invertible, and these exhaust all solutions, proving global existence and uniqueness for prescribed data. The repulsive member with data $(1,\lambda_+)$ grows without bound by step 1.3. Because every interval solution has a unique all-$\mathbb R$ extension and $\mathbb R$ has no larger real time interval, these global family members are exactly the maximal solutions. Restricting them to $J\subseteq I$ gives the solutions of a restricted homogeneous model on $I$. [step 1.1, step 1.2, step 1.3, F1, F2, F3, algebra] ∎
