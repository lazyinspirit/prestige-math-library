---
id: thm-parabolic-variational-wellposedness-and-energy-stability
kind: theorem
title: Well-posedness for measurable coercive parabolic forms
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-countable-choice
  - def-parabolic-evolution-triple-and-energy-space
  - lem-fundamental-lemma-of-the-calculus-of-variations
  - lem-parabolic-energy-pairing-and-trace
  - lem-parabolic-hilbert-bnb-criterion
  - lem-parabolic-measurable-form-operators-and-inverse
  - lem-parabolic-weak-compactness-separable-bochner-hilbert
  - thm-finite-and-countable-subadditivity-of-measures
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Christian Clason, Introduction to Finite Element Methods, lecture notes
      url: https://arxiv.org/pdf/1709.08618v2.pdf
      locator: "Chapter 11, §§11.1–11.2, PDF pp. 100–103: the evolution-space trace, integration by parts, and BNB variational well-posedness argument. The source leaves measurability of the inverse action implicit and treats zero initial data explicitly."
    - title: Long Chen, Finite Element Methods for Parabolic Equations
      url: https://www.math.uci.edu/~chenlong/226/ParabolicEquation.pdf
      locator: "§1, pp. 1–3: the weak heat equation and energy estimate; the note explicitly assumes continuous well-posedness rather than proving it."
verification: {}
---

## Statement

Assume Countable Choice. Let $T>0$, let $V$ be a separable real Hilbert
space, and let $(V,H,V^*)$ be its real evolution triple. Suppose
$a(t;\cdot,\cdot):V\times V\to\mathbb R$ is bilinear and scalar measurable
for each fixed pair $v,w\in V$, and there is one null set outside which
$$|a(t;v,w)|\le M\|v\|_V\|w\|_V,\qquad a(t;v,v)\ge\alpha\|v\|_V^2$$
for all $v,w\in V$, with constants $M>0$ and $\alpha>0$. Let
$f\in L^2(0,T;V^*)$ and $u_0\in H$. Then there is a unique
$u\in W(0,T;V)$ with $u(0)=u_0$ and, for almost every $t$,
$$\langle u'(t),v\rangle_{V^*,V}+a(t;u(t),v) =\langle f(t),v\rangle_{V^*,V}\qquad(v\in V).$$
For every $t\in[0,T]$ it satisfies
$$\|u(t)\|_H^2+\alpha\int_0^t\|u(s)\|_V^2\,ds \le\|u_0\|_H^2+\alpha^{-1}\int_0^t\|f(s)\|_{V^*}^2\,ds.$$
The proof applies BNB to the space-time form. Scalar measurability suffices
because $V$ is separable and the measurable inverse action is proved locally.

## Facts & Assumptions

**Given:** Countable Choice; the separable real evolution triple;
$T>0$; the common almost-everywhere bounded/coercive scalar-measurable
form; $f\in L^2(0,T;V^*)$; and $u_0\in H$.

[F1] $W(0,T;V)$ consists of $u\in L^2(0,T;V)$ with weak derivative
$u'\in L^2(0,T;V^*)$, under the displayed scalar test convention
([[def-parabolic-evolution-triple-and-energy-space]]).

[F2] Every $W(0,T;V)$ function has a unique continuous $H$ representative
and satisfies the energy-pairing identity
([[lem-parabolic-energy-pairing-and-trace]]).

[F3] For separable $V$, the product $L^2(0,T;V)\times L^2(0,T;V^*)$ is a
separable Hilbert space, its weak-derivative graph is closed, and bounded
sequences in $W(0,T;V)$ have weakly convergent subsequences
([[lem-parabolic-weak-compactness-separable-bochner-hilbert]]).

[F4] For the stated form, $A(t)u(t)$ and $A^*(t)y(t)$ are strongly
measurable, and the pointwise direct and transposed coercive equations have
measurable $L^2(V)$ solutions ([[lem-parabolic-measurable-form-operators-and-inverse]]).

[F5] A bounded space-time bilinear form with the stated inf-sup bound and
trivial right kernel solves every bounded variational equation uniquely
([[lem-parabolic-hilbert-bnb-criterion]]).

[F6] If a locally integrable scalar function pairs to zero with every smooth
compactly supported test function, it vanishes almost everywhere
([[lem-fundamental-lemma-of-the-calculus-of-variations]]).

[F7] A countable union of null sets is null
([[thm-finite-and-countable-subadditivity-of-measures]]).

[A1] Countable Choice is retained by the trace, weak compactness, measurable
inverse, BNB, and scalar distribution suppliers
([[def-countable-choice]]).

## Proof
1.1 If $V=\{0\}$, density in $H$ forces $H=\{0\}$, and the only data and solution are zero, so the conclusion holds. Assume henceforth $V\ne\{0\}$. By [F1], $W(0,T;V)$ has the stated graph norm. Set $Y=L^2(0,T;V)$ and $X=\{w\in W(0,T;V):w(0)=0\}$, with the inherited $W$ norm. By [F3], $W$ and $Y$ are Hilbert spaces; by the trace bound in [F2], $X$ is a closed Hilbert subspace. Define $$b(w,y)=\int_0^T\bigl(\langle w'(t),y(t)\rangle_{V^*,V} +a(t;w(t),y(t))\bigr)\,dt.$$ The integrand is measurable by [F4], and Cauchy–Schwarz and the form bound give $|b(w,y)|\le(1+M)\|w\|_{W}\|y\|_Y$. [A1, F1, F2, F3, F4, given, construct]

2.1 For $w\in X$, let $z_0(t)$ solve $a(t;z_0(t),v)=\langle w'(t),v\rangle$ and set $z=z_0+\mu w$, where $\mu=M^4\alpha^{-4}$. By [F4], $z_0\in Y$ and $\|z_0\|_Y\le\alpha^{-1}\|w'\|_{L^2(V^*)}$, so $\|z\|_Y\le C_z\|w\|_W$ with $C_z=\alpha^{-1}+\mu$. Since $A(t)z_0(t)=w'(t)$, coercivity and the operator bound give $\langle w',z_0\rangle=a(t;z_0,z_0)\ge\alpha M^{-2}\|w'\|_{V^*}^2$. The energy identity [F2] and $w(0)=0$ give $\int_0^T\langle w',w\rangle=\frac12\|w(T)\|_H^2$. The remaining mixed term obeys $|a(t;w,z_0)|\le(M/\alpha)\|w\|_V\|w'\|_{V^*}$, and Young's inequality bounds it by $\frac{\alpha}{2M^2}\|w'\|_{V^*}^2+ \frac{M^4}{2\alpha^3}\|w\|_V^2$. Therefore $$b(w,z)\ge\frac{\alpha}{2M^2}\|w'\|_{L^2(V^*)}^2+ \frac{M^4}{2\alpha^3}\|w\|_{L^2(V)}^2+ \frac{\mu}{2}\|w(T)\|_H^2\ge c_0\|w\|_W^2,$$ where $c_0=\min\{\alpha/(2M^2),M^4/(2\alpha^3)\}>0$. For $w\ne0$, positivity forces $z\ne0$, and $b(w,z)\le\|z\|_Y\sup_{\|y\|_Y\le1}|b(w,y)|$ together with $\|z\|_Y\le C_z\|w\|_W$ gives $\sup_{\|y\|_Y\le1}|b(w,y)|\ge(c_0/C_z)\|w\|_W$; the inequality is trivial for $w=0$. [A1, F2, F4, step 1.1, given, algebra]

2.2 Suppose $y\in Y$ and $b(w,y)=0$ for every $w\in X$. By [F4], $g(t):=A^*(t)y(t)$ belongs to $L^2(0,T;V^*)$. Taking $w(t)=\phi(t)v$ for $v\in V$ and $\phi\in C_c^\infty(0,T)$ in $b(w,y)=0$ gives $\int\phi'(t)(iv(t),iy(t))_H+\phi(t)a(t;v,y(t))\,dt=0$. By [F1], this means $y'=g$ weakly, so $y\in W(0,T;V)$. Testing the weak derivative identity against $t\phi$ and expanding $(t\phi)'$ shows that $w(t)=t y(t)$ has weak derivative $y+t y'$. Its $H$ trace at zero is zero, so $w\in X$. Substituting this $w$ and using $y'=A^*y$ gives $$0=b(ty,y)=\int_0^T\bigl(\|y(t)\|_H^2+2t\,a(t;y(t),y(t))\bigr)\,dt \ge\int_0^T\|y(t)\|_H^2+2t\alpha\|y(t)\|_V^2\,dt.$$ Hence $y=0$ in $Y$, proving the trivial right-kernel condition. [A1, F1, F2, F4, step 1.1, given, algebra]

3.1 The preceding steps verify the boundedness, inf-sup and right-kernel hypotheses of [F5]. Consequently, for every $g\in L^2(0,T;V^*)$ the functional $y\mapsto\int_0^T\langle g(t),y(t)\rangle\,dt$ has a unique solution $w\in X$ to $b(w,y)=\int\langle g,y\rangle$ for all $y\in Y$. Its boundedness follows from Cauchy–Schwarz. [A1, F3, F5, step 1.1, step 2.1, step 2.2]

4.1 By density of $V$ in $H$ and [A1], choose $v_n\in V$ with $\|iv_n-u_0\|_H<1/(n+1)$. The measurable-action result [F4] gives $g_n=f-A(t)v_n\in L^2(0,T;V^*)$. Let $w_n\in X$ be the solution from step 3.1 for $g_n$, and let $\ell_n(t)=v_n$ be the constant path. Then $u_n=w_n+\ell_n\in W(0,T;V)$ has $u_n(0)=iv_n$ and $b(u_n,y)=\int_0^T\langle f(t),y(t)\rangle\,dt$ for every $y\in Y$. [A1, F4, step 3.1, given, construct]

5.1 For $0\le\tau\le T$, test the equation for $u_n$ with $y=\mathbf1_{(0,\tau)}u_n\in Y$. By [F2], coercivity, and $2ab\le\alpha a^2+\alpha^{-1}b^2$, $$\|u_n(\tau)\|_H^2+\alpha\int_0^\tau\|u_n(t)\|_V^2dt \le\|iv_n\|_H^2+\alpha^{-1}\int_0^\tau\|f(t)\|_{V^*}^2dt.$$ The right side is bounded uniformly in $n$. Also $G_n=u_n'+A(t)u_n-f\in L^2(0,T;V^*)$ by [F4]. Testing with $y=\phi v$ shows $\int\phi\langle G_n,v\rangle=0$ for every fixed $v\in V$ and $\phi\in C_c^\infty(0,T)$. Choose a countable dense subset of $V$, apply [F6] to its scalar pairings, and take the union of their null sets. Outside that null set continuity of $G_n(t)\in V^*$ gives $G_n(t)=0$. Thus $u_n'=f-A(t)u_n$ a.e. and $\|u_n'\|_{L^2(V^*)}\le\|f\|_{L^2(V^*)}+M\|u_n\|_{L^2(V)}$. Together these estimates bound $(u_n)$ in $W(0,T;V)$. [A1, F2, F4, F6, F7, step 4.1, given, choose]

6.1 By [F3], a subsequence converges weakly in $W(0,T;V)$ to some $u$. The trace map $w\mapsto w(0)$ is bounded linear by [F2], so weak trace convergence and $iv_n\to u_0$ in $H$ imply $u(0)=u_0$. For every $y\in Y$, $b(u_n,y)=\int\langle f,y\rangle$ and boundedness of $b$ from step 1.1 let us pass to the weak limit, giving $b(u,y)=\int\langle f,y\rangle$. With $G=u'+A(t)u-f\in L^2(V^*)$, testing by $\phi v$ and applying [F6] on a countable dense subset of $V$ as in step 5.1, with [F7] to unite the null sets, proves the pointwise variational equation for a.e. $t$ and every $v\in V$. Testing the limiting identity with $\mathbf1_{(0,\tau)}u$ and using [F2] gives the stated energy estimate for every $\tau\in[0,T]$. [A1, F2, F3, F4, F6, F7, step 1.1, step 5.1, given]

7.1 If $u_1,u_2$ are two solutions with the same data, $z=u_1-u_2$ lies in $X$ and satisfies $b(z,y)=0$ for every $y\in Y$. The uniqueness in [F5] applied to the zero functional gives $z=0$. This proves uniqueness. [A1, F5, step 1.1, step 2.1, step 2.2, step 6.1] ∎
