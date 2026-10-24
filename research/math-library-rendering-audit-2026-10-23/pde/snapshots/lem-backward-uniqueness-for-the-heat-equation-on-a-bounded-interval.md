---
id: lem-backward-uniqueness-for-the-heat-equation-on-a-bounded-interval
kind: lemma
title: Backward uniqueness for the heat equation on a bounded interval
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps:
  - thm-chain-rule
  - thm-monotonicity-from-the-derivative
  - def-countable-choice
  - thm-differentiation-under-the-integral-sign
  - thm-dominated-convergence
  - thm-integration-by-parts
  - thm-continuous-implies-integrable
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - cor-cauchy-schwarz-inequality-for-l-two
  - cor-second-derivative-characterises-convexity
  - def-convex-concave-and-midpoint-convex-functions
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
  - thm-extreme-value-metric
  - thm-heine-borel-rn
  - def-metric-compactness
  - thm-algebra-of-derivatives
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: '§6.4, printed pp. 162–163, Theorem 6.21 (backwards uniqueness) and its proof: log-convexity of the energy via $\dot E^2\le E\ddot E$, the maximal positivity interval, and the endpoint limit. The scaffold removes Teschl''s initial-face hypothesis and tracks the differentiability class explicitly.'
---

## Statement

Assume Countable Choice. Let $T>0$, $Q=(0,\pi)\times(0,T]$, and say that a
function $w:\overline Q\to\mathbb R$ is of class $C^{4,2}(\overline Q)$ when it
is continuous on $\overline Q$ and all ordered partial derivatives containing at most four $x$ derivatives and at most two $t$ derivatives exist on $Q$ and
extend continuously to $\overline Q$. Suppose $w\in C^{4,2}(\overline Q)$
satisfies
$$w_t=w_{xx}\quad\text{in }Q,\qquad w(0,t)=w(\pi,t)=0\ (0\le t\le T),\qquad w(x,T)=0\ (0\le x\le\pi).$$
Then $w\equiv0$ on $\overline Q$. **No hypothesis on the initial face $t=0$ is
imposed**: the vanishing is forced by the lateral and terminal conditions alone.
Consequently two solutions of the interval Dirichlet problem in this class with
zero lateral data and the same terminal data coincide, and the terminal-to-initial
map is well defined on the class of terminal data of such solutions.

## Facts & Assumptions

**Given:** Countable Choice, $T>0$, $Q=(0,\pi)\times(0,T]$, and $w\in C^{4,2}(\overline Q)$ with $w_t=w_{xx}$ in $Q$, $w(0,t)=w(\pi,t)=0$ for $0\le t\le T$ and $w(x,T)=0$ for $0\le x\le\pi$.

[A1] Countable Choice is the ambient hypothesis ([[def-countable-choice]]).

[F1] If $f$ satisfies the hypotheses of the differentiation-under-the-integral theorem, then $F(t)=\int f(x,t)\,d\mu(x)$ is differentiable with $F'=\int\partial_tf\,d\mu$ ([[thm-differentiation-under-the-integral-sign]]).

[F2] For $u,v$ differentiable on $[a,b]$ with integrable derivatives, $\int_a^bu\,v'=u(b)v(b)-u(a)v(a)-\int_a^bu'v$ ([[thm-integration-by-parts]]).

[F3] A continuous function on $[a,b]$ is bounded and Riemann integrable ([[thm-continuous-implies-integrable]]).

[F4] A bounded Riemann integrable function on $[a,b]$ is Lebesgue integrable with the same integral ([[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]).

[F5] $\int|fg|\le\|f\|_2\|g\|_2$ for $f,g\in\mathcal L^2$ ([[cor-cauchy-schwarz-inequality-for-l-two]]).

[F6] A twice differentiable function on an open interval is convex exactly when its second derivative is nonnegative ([[cor-second-derivative-characterises-convexity]]).

[F7] Convexity is the convex-combination inequality ([[def-convex-concave-and-midpoint-convex-functions]]).

[F8] $\log:(0,\infty)\to\mathbb R$ is continuous, strictly increasing and onto $\mathbb R$, with $\log(xy)=\log x+\log y$ and $\log 1=0$ ([[thm-natural-logarithm-laws]]).

[F9] $\log'(x)=1/x$ for $x>0$ ([[thm-logarithm-derivative-and-integral]]).

[F10] The rectangle $[0,\pi]\times[0,T]$ is compact ([[thm-heine-borel-rn]], [[def-metric-compactness]]), and a continuous real function on a nonempty compact metric space is bounded ([[thm-extreme-value-metric]]).

[F11] Dominated convergence ([[thm-dominated-convergence]]).

[F12] The product and quotient rules for derivatives, in particular $(f/g)'=(f'g-fg')/g^2$ where $g\ne0$ ([[thm-algebra-of-derivatives]]).

[F13] A continuous function whose derivative is nonpositive is nonincreasing ([[thm-monotonicity-from-the-derivative]]); the derivative of $\log\circ E$ uses [[thm-chain-rule]].

## Proof

**Given:** Countable Choice, $T>0$, $w\in C^{4,2}(\overline Q)$ with $w_t=w_{xx}$ in $Q$, $w(0,t)=w(\pi,t)=0$ for $0\le t\le T$, and $w(x,T)=0$ for $0\le x\le\pi$.

1.1 Define $E(t):=\frac12\int_0^\pi w(x,t)^2\,dx$ for $t\in[0,T]$; the integrand is continuous on the compact interval, hence Lebesgue integrable by [F3] and [F4]. If $t_k\to t$ in $[0,T]$, then $w(x,t_k)^2\to w(x,t)^2$ for every $x$ by continuity of $w$ on $\overline Q$, and [F10] bounds $w$ by some $M<\infty$, so the constant $4M^2$ dominates all integrands and [F11] gives $E(t_k)\to E(t)$; thus $E$ is continuous on $[0,T]$. [A1, F3, F4, F10, F11, given]

1.2 For fixed $t\in(0,T)$ the map $x\mapsto w(x,t)^2$ is integrable, for every $x$ the map $s\mapsto w(x,s)^2$ is differentiable on $(0,T)$ with derivative $2w(x,s)w_t(x,s)$, and [F10] bounds $w$ and $w_t$ by constants $M,M_1<\infty$, so $|2ww_t|\le2MM_1$ everywhere; [F1] therefore applies and gives $E'(t)=\frac12\int_0^\pi2w(x,t)w_t(x,t)\,dx=\int_0^\pi w(x,t)w_t(x,t)\,dx$ for every $t\in(0,T)$. [F1, F10, given]

2.1 On $(0,T)$ the equation $w_t=w_{xx}$ turns step 1.2 into $E'(t)=\int_0^\pi w\,w_{xx}\,dx$; the functions $x\mapsto w(x,t)$ and $x\mapsto w_x(x,t)$ are continuously differentiable on $[0,\pi]$ with continuous, hence integrable derivatives by [F3], so [F2] gives $\int_0^\pi w\,w_{xx}\,dx=[w\,w_x]_0^\pi-\int_0^\pi w_x^2\,dx=-\int_0^\pi w_x(x,t)^2\,dx$, the boundary term vanishing because $w(0,t)=w(\pi,t)=0$ for all $t$; the Riemann integrals equal the Lebesgue integrals by [F4], so $E'(t)=-\int_0^\pi w_x(x,t)^2\,dx\le0$. [step 1.2, F2, F3, F4, given]

2.2 Applying [F1] to $x\mapsto w_x(x,t)^2$, with $w_x$ and $w_{xt}$ bounded on the compact rectangle by [F10], gives $E''(t)=-2\int_0^\pi w_x(x,t)w_{xt}(x,t)\,dx$ for $t\in(0,T)$; [F2] applied to $u=w_x(\cdot,t)$ and $v=w_t(\cdot,t)$ gives $\int_0^\pi w_xw_{xt}=[w_xw_t]_0^\pi-\int_0^\pi w_{xx}w_t=-\int_0^\pi w_{xx}w_t\,dx$, since $w_t(0,t)=w_t(\pi,t)=0$ by differentiating the boundary identities in $t$: the continuous extensions of $w_t$ are those derivatives, since the interior identity $w(x,b)-w(x,a)=\int_a^b w_t(x,s)ds$ passes to $x=0,\pi$ by uniform continuity on $[a,b]$; substituting $w_{xx}=w_t$ yields $E''(t)=2\int_0^\pi w_t(x,t)^2\,dx\ge0$. [step 1.2, F1, F2, F3, F4, F10, given]

3.1 By [F5] and steps 1.2 and 2.2, $E'(t)^2=\bigl(\int_0^\pi ww_t\bigr)^2\le\bigl(\int_0^\pi w^2\bigr)\bigl(\int_0^\pi w_t^2\bigr)=E(t)E''(t)$ for $t\in(0,T)$; hence on every interval on which $E>0$, the function $L:=\log\circ E$ is twice differentiable with $L'=E'/E$ and $L''=E''/E-(E'/E)^2\ge0$ by [F9] and [F12], so $L$ is convex there by [F6] and [F7]. [step 1.2, step 2.2, F5, F6, F7, F9, F12, F13, given]

4.1 If $E$ were positive somewhere, continuity and $E(T)=0$ would give $t_0\in(0,T)$ with $E(t_0)>0$. By step 2.1 and [F13], $E$ is nonincreasing; fix $s\in(0,t_0)$, so $E(s)>0$. The nonempty closed set $\{t\in[t_0,T]:E(t)=0\}$ has a least element $b>t_0$, with $E>0$ on $[s,b)$ and $E(b)=0$. For $t_0<t<b$, convexity from step 3.1 yields $L(t_0)\le\frac{t-t_0}{t-s}L(s)+\frac{t_0-s}{t-s}L(t)$. As $t\uparrow b$, $L(t)\to-\infty$ by continuity of $E$ and [F8], its coefficient tends to $(t_0-s)/(b-s)>0$, and the other term is bounded. This contradicts the finite $L(t_0)$. Hence $E\equiv0$ on $[0,T]$. [step 1.1, step 2.1, step 3.1, F7, F8, F13, given]


5.1 Since $E\equiv0$ and $E(t)=\frac12\int_0^\pi w(x,t)^2dx$ with a nonnegative continuous integrand, $w(x,t)=0$ for every $x\in[0,\pi]$ and every $t\in[0,T]$: if $w(x_0,t)\ne0$, continuity in $x$ gives $w^2>0$ on a nondegenerate interval, making $E(t)>0$. Thus $w\equiv0$ on $\overline Q$; if $u_1,u_2$ are two $C^{4,2}$ solutions with the same terminal data and zero lateral data, their difference satisfies the hypotheses, so $u_1=u_2$ and the terminal-to-initial map on the terminal data of such solutions is well defined. [step 4.1, given] ∎ 