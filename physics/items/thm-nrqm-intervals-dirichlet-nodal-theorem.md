---
id: thm-nrqm-intervals-dirichlet-nodal-theorem
aliases: [nrqm-intervals-and-contacts-dirichlet-nodal-theorem]
kind: theorem
domain: mathematics
title: "Dirichlet eigenvalues, simplicity and the nodal theorem on an interval"
status: draft
origin: pipeline
dependency_level: 3
deps: [def-nrqm-intervals-hilbert-sobolev-spaces, lem-nrqm-intervals-weak-derivative-ac-representative, lem-nrqm-intervals-endpoint-trace-and-half-line-decay, thm-nrqm-intervals-regular-ivp-parameter-series, thm-nrqm-intervals-prufer-energy-monotonicity, thm-sine-and-cosine-derivatives, thm-sine-cosine-zero-sets-and-fundamental-period, thm-gronwall-integral-inequality, thm-intermediate-value, thm-continuous-implies-integrable, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-nrqm-intervals-hilbert-sobolev-spaces: mathematical-premise
  lem-nrqm-intervals-weak-derivative-ac-representative: mathematical-premise
  lem-nrqm-intervals-endpoint-trace-and-half-line-decay: mathematical-premise
  thm-nrqm-intervals-regular-ivp-parameter-series: mathematical-premise
  thm-nrqm-intervals-prufer-energy-monotonicity: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
  thm-intermediate-value: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 9.7, Theorem 9.39 p. 218 (Sturm comparison background; the regular finite-interval nodal count and energy bounds are proved locally)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext 2011), Section 8.6 pp. 231-233 (Dirichlet eigenbasis on an interval; the nodal theorem is proved locally)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
---

## Statement

Assume the Axiom of Choice and Countable Choice
([[def-axiom-of-choice]], [[def-countable-choice]]). Let $0<L<\infty$ and let
$V\in C([0,L];\mathbb R)$, with $V_{\min}:=\min_{[0,L]}V$ and
$V_{\max}:=\max_{[0,L]}V$. For $E\in\mathbb R$ let $u(\cdot,E)$ be the
solution of $-u''+Vu=Eu$, $u(0)=0$, $u'(0)=1$, and let $\theta(\cdot,E)$ be
its Prufer angle, as in [[thm-nrqm-intervals-prufer-energy-monotonicity]].
Call $E$ a **Dirichlet eigenvalue** when there is a nonzero
$w\in H^2(0,L)$ ([[def-nrqm-intervals-hilbert-sobolev-spaces]]) with
$w^*(0)=w^*(L)=0$ satisfying $-w''+Vw=Ew$, $w^*$ the continuous
representative of [[lem-nrqm-intervals-weak-derivative-ac-representative]].
Then:

(a) $E$ is a Dirichlet eigenvalue if and only if $\theta(L,E)=k\pi$ for some
integer $k\ge1$;

(b) for every $k\ge1$ the equation $\theta(L,E)=k\pi$ has exactly one
solution $E_k$; the sequence $(E_k)_{k\ge1}$ is strictly increasing,
$E_k\to\infty$, and it is exactly the sequence of Dirichlet eigenvalues, each
with one-dimensional eigenspace:
$\ker(-\tfrac{d^2}{dx^2}+V-E_k)=\mathbb Cu(\cdot,E_k)$;

(c) bounds: for every $k\ge1$,
$\Bigl(\frac{k\pi}{L}\Bigr)^2+V_{\min}\le E_k\le
\Bigl(\frac{k\pi}{L}\Bigr)^2+V_{\max};$

(d) nodal count: for every $E$, the number of zeros of $u(\cdot,E)$ in
$(0,L]$ equals $\lfloor\theta(L,E)/\pi\rfloor$; consequently the $k$-th
eigenfunction $u(\cdot,E_k)$ has exactly $k-1$ zeros in $(0,L)$, and the same
holds for every nonzero eigenfunction with eigenvalue $E_k$.

## Facts & Assumptions

**Given:** $0<L<\infty$; real continuous $V$; the solution family $u(\cdot,E)$ and Prufer angle $\theta(\cdot,E)$ of [[thm-nrqm-intervals-prufer-energy-monotonicity]]; the spaces [[def-nrqm-intervals-hilbert-sobolev-spaces]].

[F1] $u(\cdot,E)$ is the unique $C^2$ solution of its initial value problem, $r:=(u^2+u'^2)^{1/2}>0$, $u=r\sin\theta$, $u'=r\cos\theta$, $\theta(0,E)=0$, $\theta$ is $C^1$ in $x$ with $\theta'=\cos^2\theta+(E-V)\sin^2\theta$, $E\mapsto\theta(L,E)$ is continuous and strictly increasing on $\mathbb R$, $\theta(x,E)>0$ for $x>0$, and every level $k\pi$ in $(0,\theta(L,E))$ is attained exactly once ([[thm-nrqm-intervals-regular-ivp-parameter-series]], [[thm-nrqm-intervals-prufer-energy-monotonicity]]). For the explicit free solution in step 1.4 we use that $\sin'=\cos$, $\cos'=-\sin$, $\sin0=0$, $\cos0=1$ ([[thm-sine-and-cosine-derivatives]]) and the zero sets $\sin x=0\Leftrightarrow x\in\pi\mathbb Z$, $\cos x=0\Leftrightarrow x\in(\mathbb Z+\tfrac12)\pi$ ([[thm-sine-cosine-zero-sets-and-fundamental-period]]).

[F2] If $w\in H^2(0,L)$ and $-w''+Vw=Ew$ with $w^*(0)=w^*(L)=0$ and $w\ne0$, then $w'(0)\ne0$: otherwise $w$ and the zero function are two $C^2$ solutions (by [[lem-nrqm-intervals-weak-derivative-ac-representative]], the class $w$ has a $C^2$ representative because its second weak derivative is the continuous function $(V-E)w^*$, and the representative solves the same initial value problem) with the same initial data, contradicting uniqueness in [F1]. Consequently the $C^2$ representative of $w$ equals $w'(0)u(\cdot,E)$.

[F3] Comparison lemma for scalar ODEs, a direct consequence of Gronwall's inequality ([[thm-gronwall-integral-inequality]]): let $g:\mathbb R\to\mathbb R$ be Lipschitz with constant $K$, and let $\varphi,\psi$ be continuous and piecewise $C^1$ on $[0,L]$ with $\varphi(0)=\psi(0)$, $\varphi'=g(\varphi)$ and $\psi'\le g(\psi)$ wherever differentiable. Then $\psi\le\varphi$. Indeed, for $w:=\psi-\varphi$ the inequality $w'\le g(\psi)-g(\varphi)\le Kw$ holds on every interval where $w>0$; if $w(x_1)>0$ and $x_0:=\max\{x\le x_1:w(x)=0\}$, then $w(x_0)=0$ and $w>0$ on $(x_0,x_1]$, so $(we^{-K(x-x_0)})'\le0$ there with value $0$ at $x_0$, forcing $w(x_1)\le0$, a contradiction. The reversed inequality $\psi'\ge g(\psi)$ likewise gives $\psi\ge\varphi$.

[F4] Intermediate value theorem for continuous real functions on $[0,L]$ ([[thm-intermediate-value]]); the integral of a continuous function is continuous ([[thm-continuous-implies-integrable]]).

## Proof

1.1 [Every eigenvalue is a root] Let $E$ be a Dirichlet eigenvalue with nonzero eigenfunction $w$. By [F2], the $C^2$ representative of $w$ equals $w'(0)u(\cdot,E)$ with $w'(0)\ne0$. Since $w^*(L)=0$, $u(L,E)=0$, and $u(L,E)=r(L,E)\sin\theta(L,E)$ with $r(L,E)>0$, so $\sin\theta(L,E)=0$ and $\theta(L,E)\in\pi\mathbb Z$; by [F1] $\theta(L,E)>0$, hence $\theta(L,E)=k\pi$ for some integer $k\ge1$. This also shows that the eigenspace at $E$ is contained in $\mathbb Cu(\cdot,E)$, hence is one-dimensional. [F1, F2, algebra]

1.2 [Every root is an eigenvalue] Conversely, suppose $\theta(L,E)=k\pi$, $k\ge1$. Then $u(L,E)=r\sin\theta(L,E)=0$ and $u(0,E)=0$, while $u(\cdot,E)$ is a nonzero $C^2$ solution of $-u''+Vu=Eu$. Its class lies in $H^2(0,L)$ because $u$ is $C^2$ with bounded derivatives on the compact interval, and its continuous representative has the endpoint values $0$. Hence $E$ is a Dirichlet eigenvalue. [F1, algebra]

1.3 [Free comparison] Let $\beta\in\mathbb R$ and let $v_\beta$ be the solution of $v''+\beta v=0$, $v(0)=0$, $v'(0)=1$, with Prufer angle $\varphi_\beta$ (so $v_\beta=r_\beta\sin\varphi_\beta$, $v_\beta'=r_\beta\cos\varphi_\beta$, $\varphi_\beta(0)=0$, $\varphi_\beta'=\cos^2\varphi_\beta+\beta\sin^2\varphi_\beta$ by [F1] applied with $V\equiv0$). If $a:=E-V(x)\le\beta$ on $[0,L]$, then $\theta(x,E)\le\varphi_\beta(x)$ for all $x$; if $a\ge\beta$, then $\theta(x,E)\ge\varphi_\beta(x)$. Indeed, in the first case $\theta'=\cos^2\theta+a\sin^2\theta\le\cos^2\theta+\beta\sin^2\theta =g(\theta)$ and $\varphi_\beta'=g(\varphi_\beta)$ with $g(\vartheta)=\cos^2\vartheta+\beta\sin^2\vartheta$ Lipschitz; [F3] with $\psi=\theta$ (so $\psi'\le g(\psi)$) and $\varphi=\varphi_\beta$ gives $\varphi_\beta\ge\theta$, and the second case is symmetric. [F1, F3]

1.4 [The free angle and its zero count] For $\beta>0$ the solution is $v_\beta(x)=\beta^{-1/2}\sin(\beta^{1/2}x)$, whose zeros are $j\pi/\beta^{1/2}$, $j\in\mathbb N$, all simple. By [F1] every level $j\pi$ below $\varphi_\beta(L)$ is attained exactly once, so with $m:=\lfloor L\beta^{1/2}/\pi\rfloor$ the number of zeros of $v_\beta$ in $(0,L]$ equals $m$ and $m\pi\le\varphi_\beta(L)<(m+1)\pi$; when $L\beta^{1/2}/\pi=k\in\mathbb N$ the $k$-th zero is exactly at $L$, so $\varphi_\beta(L)=k\pi$. In particular $\varphi_\beta(L)\ge k\pi$ whenever $L\beta^{1/2}\ge k\pi$. For $\beta\le0$ the solution satisfies $v_\beta''=-\beta v_\beta\ge0$ wherever $v_\beta>0$; since $v_\beta(0)=0$, $v_\beta'(0)=1$ and $v_\beta''\ge0$ on $[0,L]$, we get $v_\beta'>0$ and $v_\beta>0$ on $(0,L]$, so $v_\beta$ has no zeros there and $0\le\varphi_\beta(L)<\pi/2$. [F1, algebra]

2.1 [Endpoint limits of $\theta(L,\cdot)$] If $E\le V_{\min}$, then $a=E-V(x)\le0$, so by step 1.3 with $\beta=0$, $0<\theta(L,E)\le\varphi_0(L)<\pi/2$. If $E\ge V_{\max}+(k\pi/L)^2$, then $a=E-V(x)\ge E-V_{\max}=:\beta\ge(k\pi/L)^2$ and step 1.3 gives $\theta(L,E)\ge\varphi_\beta(L)\ge k\pi$ by step 1.4. [step 1.3, step 1.4, algebra]

3.1 [Existence, uniqueness and bounds for $E_k$] Let $k\ge1$. Put $E^-:=V_{\min}-1\le V_{\min}$ and $E^+:=V_{\max}+(k\pi/L)^2$. By step 2.1, $\theta(L,E^-)<\pi/2<k\pi\le\theta(L,E^+)$. Since $E\mapsto\theta(L,E)$ is continuous and strictly increasing [F1], [F4] gives exactly one $E_k\in(E^-,E^+]$ with $\theta(L,E_k)=k\pi$. Since $k\mapsto k\pi$ is strictly increasing and $E\mapsto\theta(L,E)$ is strictly increasing, the sequence $(E_k)$ is strictly increasing; and $E_k\to\infty$ because $\theta(L,E_k)=k\pi\to\infty$. For the bounds, if $E=V_{\min}+(k\pi/L)^2$ then $a=E-V(x)\le(k\pi/L)^2=:\beta$ and step 1.3 with step 1.4 gives $\theta(L,E)\le\varphi_\beta(L)=k\pi$ (the free solution has its $k$-th zero exactly at $L$); by strict monotonicity this forces $E\le E_k$, i.e. $E_k\ge V_{\min}+(k\pi/L)^2$. Similarly, at $E=V_{\max}+(k\pi/L)^2$ one has $\theta(L,E)\ge\varphi_\beta(L)=k\pi$ with the same $\beta$, so $E\ge E_k$, i.e. $E_k\le V_{\max}+(k\pi/L)^2$. [step 1.3, step 1.4, step 2.1, F1, F4, algebra]

4.1 [Zero count and nodal theorem] For fixed $E$, by [F1] the zeros of $u(\cdot,E)=r\sin\theta(\cdot,E)$ in $(0,L]$ are exactly the points where $\theta(\cdot,E)$ crosses a level $j\pi$, $j\ge1$; each level $j\pi<\theta(L,E)$ is attained exactly once, no level $>\theta(L,E)$ is attained, and if $\theta(L,E)=m\pi$ then $L$ itself is a zero. Hence $\#\{x\in(0,L]:u(x,E)=0\}=\bigl\lfloor\theta(L,E)/\pi\bigr\rfloor .$ In particular, for $E=E_k$ with $\theta(L,E_k)=k\pi$, the solution $u(\cdot,E_k)$ has exactly $k$ zeros in $(0,L]$, one of which is $L$, hence exactly $k-1$ zeros in $(0,L)$; by step 1.1 every nonzero eigenfunction at $E_k$ is a nonzero multiple of $u(\cdot,E_k)$ and has the same zeros. This is (d), and steps 1.1, 1.2 and 3.1 give (a), (b) and (c). [step 1.1, step 1.2, step 3.1, F1] ∎
