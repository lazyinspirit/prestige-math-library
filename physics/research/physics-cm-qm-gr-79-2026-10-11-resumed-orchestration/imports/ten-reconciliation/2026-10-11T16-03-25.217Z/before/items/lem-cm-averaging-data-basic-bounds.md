---
id: lem-cm-averaging-data-basic-bounds
kind: lemma
title: "Elementary bounds for the periodic average, the deviation and its time derivative"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-averaging-data-and-averaged-field, thm-norm-inequality-for-the-vector-valued-integral, thm-monotonicity-of-the-integral, thm-additivity-over-subintervals, cor-primitives-of-a-continuous-function, thm-differentiation-under-the-integral-sign-on-a-compact-rectangle, thm-continuous-partial-derivatives-imply-total-differentiability, def-operator-norm, def-vector-valued-derivative-and-integral, def-vector-valued-functions-limits-and-continuity, def-metric-ball, def-interval]
dependency_roles:
  def-cm-averaging-data-and-averaged-field: mathematical-premise
  thm-norm-inequality-for-the-vector-valued-integral: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  thm-additivity-over-subintervals: mathematical-premise
  cor-primitives-of-a-continuous-function: mathematical-premise
  thm-differentiation-under-the-integral-sign-on-a-compact-rectangle: mathematical-premise
  thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
  def-operator-norm: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-vector-valued-functions-limits-and-continuity: mathematical-premise
  def-metric-ball: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (complete 252-page volume), Chapter 5 Section 5.3, Eqs. (5.52)-(5.57): time averaging over one period and the reduced equations, with the first-order-order-of-magnitude bookkeeping, printed pages 12-14 of Chapter 5 (PDF pages 99-101)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09 Fall 2014, complete course text), Chapter 5 Sections 5.2-5.3, Eqs. (5.25)-(5.28): average over one period and size of the oscillatory versus secular parts, printed pages 95-98"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, $P>0$, $O\subseteq\mathbb R^n$ open, and let $f:\mathbb R\times O\to\mathbb R^n$ be continuous, continuously partially differentiable in the second variable and $P$-periodic in time, with average $\bar f$, oscillatory part $f-\bar f$ and periodic deviation $g$ as in [[def-cm-averaging-data-and-averaged-field]] ([[def-interval]]). Let $x_0\in O$, $R>0$ with $\overline B(x_0,R)\subseteq O$ ([[def-metric-ball]]) and let $M,L\ge0$ satisfy

$$\|f(t,x)\|_2\le M,\qquad \|f(t,x)-f(t,y)\|_2\le L\|x-y\|_2\qquad(t\in\mathbb R,\ x,y\in\overline B(x_0,R)).$$

Then:

1. $\|\bar f(x)\|_2\le M$ and $\|\bar f(x)-\bar f(y)\|_2\le L\|x-y\|_2$ for all $x,y\in\overline B(x_0,R)$.
2. $g$ is $P$-periodic with $\|g(t,x)\|_2\le2MP$ for all $(t,x)$, and $\|g(t,x)-g(t,y)\|_2\le2LP\|x-y\|_2$ for all $t\in\mathbb R$ and $x,y\in\overline B(x_0,R)$.
3. $\partial_tg(t,x)=f(t,x)-\bar f(x)$ for every $(t,x)$; consequently $\|\partial_tg(t,x)\|_2\le2M$ and $\|\partial_tg(t,x)-\partial_tg(t,y)\|_2\le2L\|x-y\|_2$ on the stated sets.
4. $g$ has continuous first partial derivatives on $\mathbb R\times O$; its partial derivative in the second variable is $D_xg(t,x)=\int_0^t\bigl(D_xf(s,x)-D_x\bar f(x)\bigr)ds$, and $\|D_xg(t,x)\|\le2LP$ for $t\in\mathbb R$, $x\in\overline B(x_0,R)$, with $\|\cdot\|$ the operator norm on $M_n(\mathbb R)$ ([[def-operator-norm]]). In particular $g$ is totally differentiable at every point of $\mathbb R\times O$ ([[thm-continuous-partial-derivatives-imply-total-differentiability]]).

## Facts & Assumptions

**Given:** The data $n,P,O,f$ of [[def-cm-averaging-data-and-averaged-field]], the ball centre $x_0$, radius $R$, constants $M,L$, and the derived objects $\bar f$ and $g$.

[F1] $f(t,x)$ is continuous in $(t,x)$; for fixed $x$, $s\mapsto f(s,x)$ is continuous on $[0,P]$ and hence Riemann integrable there; the integrals below are componentwise oriented integrals ([[def-cm-averaging-data-and-averaged-field]], [[def-vector-valued-derivative-and-integral]], [[def-vector-valued-functions-limits-and-continuity]]).

[F2] For integrable vector-valued $\phi$ and $a<b$: $\|\int_a^b\phi\|_2\le\int_a^b\|\phi\|_2$, and for real integrable $u\le v$: $\int_a^bu\le\int_a^bv$; for constant $c$ and $h>0$: $\int_a^{a+h}c=c\,h$ ([[thm-norm-inequality-for-the-vector-valued-integral]], [[thm-monotonicity-of-the-integral]]).

[F3] Additivity: $\int_a^b=\int_a^c+\int_c^b$ for oriented integrals, and $\int_a^b=-\int_b^a$ ([[thm-additivity-over-subintervals]], [[def-vector-valued-derivative-and-integral]]).

[F4] Fundamental theorem of calculus: if $u$ is continuous on an interval $I$ and $a\in I$, then $F(t):=\int_a^tu$ is a primitive of $u$ on $I$ ([[cor-primitives-of-a-continuous-function]]); in particular $F$ has derivative $u$ at every point of $I$, and a periodic function is determined by its values on $[0,P]$.

[F5] Leibniz's rule on a compact rectangle ([[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]]): if $G,H:[a,b]\times[c,d]\to\mathbb R$ are continuous and for every fixed $t\in[c,d]$ the slice $x\mapsto G(x,t)$ is differentiable with derivative $H(x,t)$, then $x\mapsto\int_c^dG(x,t)\,dt$ has derivative $\int_c^dH(x,t)\,dt$. The componentwise application of this rule to $f$ (whose partial derivatives in the state variable are continuous by hypothesis) supplies the identities of step 3.1 ([[thm-continuous-partial-derivatives-imply-total-differentiability]] for the passage from partial derivatives to the total derivative).

## Proof

**Proof technique:** direct; estimate the averages and the deviation by the integral norm inequality and monotonicity, and identify the time derivative by the fundamental theorem.

1.1 Bounds for $\bar f$: for $x\in\overline B(x_0,R)$, $\|\bar f(x)\|_2=\frac1P\|\int_0^Pf(s,x)\,ds\|_2\le\frac1P\int_0^P\|f(s,x)\|_2\,ds\le\frac1P\int_0^PM\,ds=M$ by [F2]; and for $x,y$ in the ball, $$\|\bar f(x)-\bar f(y)\|_2=\frac1P\Bigl\|\int_0^P\bigl(f(s,x)-f(s,y)\bigr)ds\Bigr\|_2\le\frac1P\int_0^P\|f(s,x)-f(s,y)\|_2\,ds\le L\|x-y\|_2,$$ again by [F2] and the assumed Lipschitz bound; this is clause 1. [F1, F2, given]

2.1 Bounds for $g$: for $t\in[0,P]$ and $x$ in the ball, step 1.1 and [F2] give $$\|g(t,x)\|_2=\Bigl\|\int_0^t\bigl(f(s,x)-\bar f(x)\bigr)ds\Bigr\|_2\le\int_0^t\bigl(\|f(s,x)\|_2+\|\bar f(x)\|_2\bigr)ds\le2MP,$$ and for $x,y$ in the ball, $$\|g(t,x)-g(t,y)\|_2\le\int_0^t\bigl(\|f(s,x)-f(s,y)\|_2+\|\bar f(x)-\bar f(y)\|_2\bigr)ds\le2LP\|x-y\|_2 .$$ Since $g$ is $P$-periodic by its definition (it satisfies $g(t+P,x)=g(t,x)$ and $g(P,x)=0$), the same bounds hold for all $t\in\mathbb R$; this is clause 2. [step 1.1, F1, F2, F3, given]

2.2 Time derivative: fix $x$ and put $u(s):=f(s,x)-\bar f(x)$, a continuous $\mathbb R^n$-valued function; on $(0,P)$ the fundamental theorem [F4] gives $\frac{\partial}{\partial t}g(t,x)=u(t)=f(t,x)-\bar f(x)$. At $t=0$ the right difference quotient converges to $u(0)=f(0,x)-\bar f(x)$, while for $t\to0^-$ periodicity reduces the quotient to the left derivative of $g(\cdot,x)$ at $P$, namely $u(P)=f(P,x)-\bar f(x)=f(0,x)-\bar f(x)$ by periodicity of $f$; the same argument at every $t=kP$ shows the derivative exists there with the same value, and away from these points it is $u(t)$. Hence $\partial_tg(t,x)=f(t,x)-\bar f(x)$ everywhere, and the bounds on $f-\bar f$ follow from the triangle inequality and step 1.1: $\|f(t,x)-\bar f(x)\|_2\le M+M=2M$ and $\|f(t,x)-\bar f(x)-f(t,y)+\bar f(y)\|_2\le2L\|x-y\|_2$; this is clause 3. [step 1.1, F1, F3, F4, given]

3.1 Second-variable derivative: fix $x$ and a component index $i$. The map $(s,u)\mapsto f_i(s,u)$, $u$ ranging in a neighbourhood of $x$, is continuous and has continuous partial derivatives in the components of $u$; [F5] applied at fixed $s$ and $t$ gives $\partial_{x_j}\int_0^tf_i(s,x)\,ds=\int_0^t\partial_{x_j}f_i(s,x)\,ds$ (for $t$ restricted to a compact interval, then by additivity for all $t\in\mathbb R$), and the same identity gives $D_x\bar f(x)=\frac1P\int_0^PD_xf(s,x)\,ds$. Hence $D_xg(t,x)=\int_0^t(D_xf(s,x)-D_x\bar f(x))ds$, continuously in $(t,x)$; for $t\in[0,P]$ the norm bound $\|D_xg(t,x)\|\le\int_0^t(2L)ds\le2LP$ follows from [F2] for the operator norm, and the periodic reduction gives it for all $t$; this is clause 4. [step 1.1, F1, F2, F5, given] ∎
