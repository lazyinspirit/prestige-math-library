---
id: thm-nrqm-magnetic-and-detection-maximal-domain-position-and-momentum-uncertainty
aliases: [nrqm-magnetic-and-detection-maximal-domain-position-and-momentum-uncertainty]
kind: theorem
domain: mathematics
title: "Position-momentum uncertainty on the maximal domains of the line"
status: draft
origin: pipeline
dependency_level: 3
deps: [def-nrqm-magnetic-and-detection-position-and-momentum-operators, lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint, thm-nrqm-magnetic-and-detection-covariance-refined-uncertainty, cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives, lem-nrqm-intervals-endpoint-trace-and-half-line-decay, lem-weak-product-rule-for-bounded-sobolev-functions, lem-weak-leibniz-rule-with-a-smooth-factor, lem-schwartz-cutoffs-from-the-standard-smooth-step, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, thm-dominated-convergence, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, def-l-p-space-as-a-quotient-by-null-functions, def-hilbert-space, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-magnetic-and-detection-position-and-momentum-operators: mathematical-premise
  lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint: mathematical-premise
  thm-nrqm-magnetic-and-detection-covariance-refined-uncertainty: mathematical-premise
  cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives: mathematical-premise
  lem-nrqm-intervals-endpoint-trace-and-half-line-decay: mathematical-premise
  lem-weak-product-rule-for-bounded-sobolev-functions: mathematical-premise
  lem-weak-leibniz-rule-with-a-smooth-factor: mathematical-premise
  lem-schwartz-cutoffs-from-the-standard-smooth-step: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  lem-l-two-with-the-integral-pairing-is-a-hilbert-space: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 2.1 pp. 55-57 and Section 3.1 pp. 88-92 (position and momentum as self-adjoint operators and their preparation uncertainty)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 5 'Uncertainty Principle and Compatible Observables', pp. 1-8 (the Heisenberg uncertainty relation and equality states)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/005979fa741c3ea2e0430456b70caf93_MIT8_05F13_Chap_05.pdf"
---

## Statement

Assume the Axiom of Choice and the Axiom of Countable Choice
([[def-axiom-of-choice]], [[def-countable-choice]]). Fix $\hbar>0$ and let
$Q$ and $P$ be the position and momentum operators of
[[def-nrqm-magnetic-and-detection-position-and-momentum-operators]] on
$L^2(\mathbb R;\mathbb C)$; by
[[lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint]] both are
self-adjoint, $D(P)=W^{1,2}(\mathbb R;\mathbb C)$ and
$D(Q)=\{f:\ xf\in L^2\}$. Let $f\in D(Q)\cap D(P)$ have $\|f\|=1$, and put
$$a:=\langle Qf,f\rangle=\int_{\mathbb R}x|f(x)|^2dx,\qquad b:=\langle Pf,f\rangle,$$
$$x_Q:=(Q-a)f,\qquad y_P:=(P-b)f,\qquad \Delta Q:=\|x_Q\|,\qquad\Delta P:=\|y_P\| .$$
Then:

(a) $a,b\in\mathbb R$, and with $m_1:=\int_{\mathbb R}f'\overline f\,dx$ and
$m_2:=\int_{\mathbb R}xf'\overline f\,dx$ (absolutely convergent complex
integrals, $f'$ the weak derivative) one has
$$\operatorname{Re}m_1=0,\qquad \operatorname{Re}m_2=-\tfrac12,\qquad b=\hbar\,\operatorname{Im}m_1;$$

(b) $\langle x_Q,y_P\rangle=-\frac{i\hbar}2+\hbar\,\operatorname{Im}m_2-ab$;
consequently $\operatorname{Im}\langle x_Q,y_P\rangle=-\frac\hbar2$ and
$$\Delta Q\,\Delta P\ge\frac\hbar2 ;$$

(c) equality $\Delta Q\Delta P=\frac\hbar2$ holds if and only if
$x_Q,y_P$ are linearly dependent and $\operatorname{Re}\langle x_Q,y_P\rangle=0$;

(d) no assumption on the products $QP$ or $PQ$ is used: the assertion holds on
the full maximal domain of the pair, and the means $a,b$, the centered vectors
$x_Q,y_P$ and the variances are finite on it.

The statement concerns a preparation vector only; it asserts no apparatus
error, jointly measured distribution or physical interpretation.

## Facts & Assumptions

**Given:** a unit vector $f\in W^{1,2}(\mathbb R;\mathbb C)$ with $xf\in L^2$, its weak derivative $f'\in L^2$, the numbers $a,b$, the vectors $x_Q,y_P$ and the variances.

[F1] $f$ has a unique continuous locally absolutely continuous representative $f^*$ with $f^*(x)-f^*(y)=\int_y^xf'$; moreover $|f^*(x)|\le C_f:=\|f\|+\|f'\|<\infty$ for all $x$ and $f^*(x)\to0$ as $|x|\to\infty$ ([[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]], [[lem-nrqm-intervals-endpoint-trace-and-half-line-decay]] clause (c)).

[F2] There is $\chi\in C_c^\infty(\mathbb R)$ with $0\le\chi\le1$, $\chi=1$ on $[-1,1]$, $\chi=0$ outside $[-2,2]$; for $R>0$, $\chi_R(x):=\chi(x/R)$ satisfies $\chi_R=1$ on $[-R,R]$, $\chi_R=0$ outside $[-2R,2R]$, and $|x\chi_R'(x)|\le\sup_{t}|t\chi'(t)|=:C_\chi<\infty$ ([[lem-schwartz-cutoffs-from-the-standard-smooth-step]]).

[F3] Complex conjugation preserves $W^{1,2}$ and $D(\overline f)=\overline{Df}$: this follows from the weak-derivative definition applied to the conjugate test functions, since $\int\overline f\,\varphi'=\overline{\int f\,\overline{\varphi'}}=-\overline{\int Df\,\overline\varphi}=-\int\overline{Df}\,\varphi$ for real-valued $\varphi$ and hence for all test functions by linearity.

[F4] Smooth-factor Leibniz rule: if $\eta$ is smooth and $D^\beta\eta$ is bounded for $|\beta|\le1$ and $u\in W^{1,2}$, then $\eta u\in W^{1,2}$ with $D(\eta u)=(D\eta)u+\eta Du$ ([[lem-weak-leibniz-rule-with-a-smooth-factor]]).

[F5] Weak product rule for bounded Sobolev factors: if $u,v\in W^{1,2}(\mathbb R;\mathbb C)\cap L^\infty$, then $uv\in W^{1,2}$ with $D(uv)=(Du)v+u(Dv)$ ([[lem-weak-product-rule-for-bounded-sobolev-functions]]).

[F6] If $g\in W^{1,1}(\mathbb R;\mathbb C)$ has compact support, then $\int_{\mathbb R}Dg=0$: the absolutely continuous representative of $g$ (for $p=1$) vanishes outside a compact set, so its limiting difference and the difference formula give zero ([[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]], applied with $p=1$).

[F7] Cauchy–Schwarz and its consequence: $|\langle v,w\rangle|^2=(\operatorname{Re}\langle v,w\rangle)^2+(\operatorname{Im}\langle v,w\rangle)^2$ and $\|v\|\,\|w\|\ge|\langle v,w\rangle|\ge|\operatorname{Im}\langle v,w\rangle|$ ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

[F8] Dominated convergence: if $g_R\to g$ pointwise and $|g_R|\le G$ with $\int G<\infty$, then $\int g_R\to\int g$ ([[thm-dominated-convergence]]).

[F9] Covariance-refined uncertainty of [[thm-nrqm-magnetic-and-detection-covariance-refined-uncertainty]]: for symmetric densely defined operators $A,B$ and a unit vector $u\in D(A)\cap D(B)$, with centered vectors $x=(A-a)u$, $y=(B-b)u$ and $z:=\langle x,y\rangle$, one has $\Delta A\,\Delta B\ge|z|\ge|\operatorname{Im}z|$, with $|z|^2=(\operatorname{Re}z)^2+(\operatorname{Im}z)^2$; equality in $\Delta A\,\Delta B\ge|z|$ holds exactly when $x$ and $y$ are linearly dependent (clauses (b) and (c) there, the equality clause being that of the Cauchy–Schwarz step).

## Proof

1.1 [Integrability of the two pairings] Since $f,xf,f'\in L^2(\mathbb R)$, Cauchy–Schwarz gives $\int|f'\,\overline f|\le\|f'\|\,\|f\|<\infty$ and $\int|x f'\,\overline f|\le\|xf\|\,\|f'\|<\infty$; so $m_1,m_2$ are well-defined complex numbers. [given, F7, algebra]

1.2 [Smooth cutoffs and products in W^{1,2}] For $R>0$ put $\eta_R(x):=x\,\chi_R(x)$ and $u_R:=\eta_R f$. By [F2], $\eta_R$ and $\eta_R'$ are bounded (by $2R$ and $1+C_\chi$), so [F4] gives $u_R\in W^{1,2}$ with $Du_R=(\chi_R+x\chi_R')f+x\chi_Rf'$; also $u_R$ is bounded and compactly supported. By [F3] and [F1], $\overline f\in W^{1,2}\cap L^\infty$ with $D\overline f=\overline{f'}$. Hence [F5] applies to $u_R$ and $\overline f$: $g_R:=u_R\overline f\in W^{1,2}(\mathbb R;\mathbb C)$, compactly supported, with
$$Dg_R=(\chi_R+x\chi_R')\,|f|^2+2x\chi_R\operatorname{Re}(f'\overline f),$$
using $f'\overline f+\overline{f'}f=2\operatorname{Re}(f'\overline f)$. [given, F2, F3, F4, F5, algebra]

2.1 [The integrated identity] By [F6] applied to the compactly supported $W^{1,2}$ (hence $W^{1,1}$) class $g_R$, $0=\int_{\mathbb R}Dg_R=\int_{\mathbb R}\chi_R|f|^2+\int_{\mathbb R}x\chi_R'|f|^2+2\operatorname{Re}\int_{\mathbb R}x\chi_Rf'\overline f$. [given, step 1.2, F6, algebra]

3.1 [Limits as $R\to\infty$] As $R\to\infty$: (i) $\chi_R|f|^2\to|f|^2$ pointwise with $0\le\chi_R|f|^2\le|f|^2\in L^1$, so $\int\chi_R|f|^2\to\|f\|^2=1$ by [F8]; (ii) $|x\chi_R'|$ is bounded by $C_\chi$ and supported in $\{|x|\ge R\}$, so $|{\int}x\chi_R'|f|^2|\le C_\chi\int_{\{|x|\ge R\}}|f|^2\to0$ by absolute continuity of the integral; (iii) $x\chi_Rf'\overline f\to xf'\overline f$ pointwise with $|x\chi_Rf'\overline f|\le|x f'\overline f|\in L^1$ by step 1.1, so $\int x\chi_Rf'\overline f\to m_2$ by [F8]. Passing to the limit in step 2.1 gives $1+2\operatorname{Re}m_2=0$, that is $\operatorname{Re}m_2=-\frac12$. [given, step 1.1, step 2.1, F8, algebra]

4.1 [The second identity] Applying the same construction with $\eta_R$ replaced by $\chi_R$ (so $g_R^0:=\chi_Rf\overline f\in W^{1,2}$, compactly supported, with $Dg_R^0=\chi_R'|f|^2+2\chi_R\operatorname{Re}(f'\overline f)$) and using [F6], $0=\int\chi_R'|f|^2+2\operatorname{Re}\int\chi_Rf'\overline f$; as $R\to\infty$ the first term tends to $0$ as in step 3.1(ii) and the second to $2\operatorname{Re}m_1$ by dominated convergence ($|f'\overline f|\le\frac12(|f|^2+|f'|^2)\in L^1$). Hence $\operatorname{Re}m_1=0$. [given, step 3.1, F6, F8, algebra]

5.1 [The means] $a$ is real because $Q$ is self-adjoint and $f\in D(Q)$; $b$ is real because $P$ is self-adjoint and $f\in D(P)$. Moreover $b=\langle Pf,f\rangle=\int_{\mathbb R}(-i\hbar f')\overline f\,dx=-i\hbar m_1$, and $\operatorname{Re}m_1=0$ gives $-i\hbar m_1=\hbar\operatorname{Im}m_1$, real as required. This is (a). [given, step 4.1, F3, algebra]

6.1 [The pairing] Expand $\langle x_Q,y_P\rangle=\langle Qf,Pf\rangle-b\langle Qf,f\rangle-a\langle f,Pf\rangle+ab\langle f,f\rangle$. Here $\langle Qf,f\rangle=a$ and $\langle f,Pf\rangle=\overline{\langle Pf,f\rangle}=b$ (both means real), so the last three terms sum to $-ab+ab-ab=-ab$. And $\langle Qf,Pf\rangle=\int xf\,\overline{(-i\hbar f')}dx=i\hbar\int xf\overline{f'}\,dx=i\hbar\,\overline{m_2}=i\hbar\bigl(-\frac12-i\operatorname{Im}m_2\bigr)=-\frac{i\hbar}2+\hbar\operatorname{Im}m_2$, using step 3.1. Hence $\langle x_Q,y_P\rangle=-\frac{i\hbar}2+\hbar\operatorname{Im}m_2-ab$, with imaginary part $-\frac\hbar2$. [given, step 3.1, step 5.1, algebra]

7.1 [The uncertainty bound] By [F9] (or [F7] applied to $x_Q$ and $y_P$), $\Delta Q\,\Delta P=\|x_Q\|\,\|y_P\|\ge|\langle x_Q,y_P\rangle|\ge|\operatorname{Im}\langle x_Q,y_P\rangle|=\frac\hbar2$. This is (b). [given, step 6.1, F7, F9, algebra]

8.1 [Equality and scope] By the equality clause of [F9], equality in $\|x_Q\|\,\|y_P\|\ge|\langle x_Q,y_P\rangle|$ holds exactly when $x_Q,y_P$ are linearly dependent; given step 6.1, the further condition $|\langle x_Q,y_P\rangle|=\frac\hbar2$ is exactly $\operatorname{Re}\langle x_Q,y_P\rangle=0$ by the identity $|\langle x_Q,y_P\rangle|^2=(\operatorname{Re}\langle x_Q,y_P\rangle)^2+(\operatorname{Im}\langle x_Q,y_P\rangle)^2$ of [F9]. This is (c). No product $QP$ or $PQ$ was used anywhere: the means, the centered vectors and the pairings were formed from $Qf$ and $Pf$ only, so (d) holds. [given, step 6.1, step 7.1, F9, algebra] ∎
