---
id: lem-general-solution-of-the-one-dimensional-wave-equation
kind: lemma
title: "General solution of the one-dimensional wave equation"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
proof_strategy: direct
deps: [lem-one-dimensional-wave-operator-factorisation, cor-zero-derivative-implies-constant, cor-primitives-of-a-continuous-function, thm-chain-rule-for-total-derivatives, thm-clairaut-schwarz-mixed-partials, thm-algebra-of-derivatives, thm-continuous-partial-derivatives-imply-total-differentiability]
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
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§2.3.2, printed pp. 46–47, general solution (2.3.7) and Remark 2.3.2 on the only remaining freedom"
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§7.1, printed p. 211: the general solution $u=f(x-t)+g(x+t)$ of the one-dimensional equation"
    - title: "Per Kristen Jakobsen, An Introduction to Partial Differential Equations (arXiv:1901.03022)"
      url: "https://arxiv.org/pdf/1901.03022"
      locator: "§6.2, printed pp. 51–62, the characteristic-coordinate integration for the linear scalar equation"
---


## Statement

Let $c>0$ and let $R\subseteq\mathbb R^2$ be a nonempty open rectangle. If $u\in C^2(R)$ satisfies $u_{tt}=c^2u_{xx}$ on $R$, then there are intervals $I,J\subseteq\mathbb R$ and functions $F\in C^2(I)$, $G\in C^2(J)$ with
$$u(x,t)=F(x-ct)+G(x+ct)\qquad((x,t)\in R),$$
where $I$ and $J$ are the projections of $R$ onto the $\xi$- and the $\eta$-axis under $\xi=x-ct$, $\eta=x+ct$. Conversely, every such sum is a $C^2$ solution of $u_{tt}=c^2u_{xx}$ on $R$. The pair $(F,G)$ is unique up to the replacement $F\mapsto F+k$, $G\mapsto G-k$ with $k\in\mathbb R$, and no other freedom remains.

## Facts & Assumptions

**Given:** a speed $c>0$, a nonempty open rectangle $R\subseteq\mathbb R^2$, and a $C^2$ function $u$ on $R$.

[F1] On the domain of $u$, $\partial_t^2u-c^2\partial_x^2u=-4c^2\partial_\xi\partial_\eta U$ where $U(\xi,\eta):=u(x,t)$ and $\xi=x-ct$, $\eta=x+ct$ ([[lem-one-dimensional-wave-operator-factorisation]]).

[F2] If $f:U\to V\subseteq\mathbb R^n$ is totally differentiable at $a$ and $g:V\to\mathbb R^p$ at $f(a)$, then $g\circ f$ is totally differentiable at $a$ with $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$ ([[thm-chain-rule-for-total-derivatives]]). The required total differentiability follows from continuous coordinate partial derivatives ([[thm-continuous-partial-derivatives-imply-total-differentiability]]).

[F3] Let $I\subseteq\mathbb R$ be order-convex and $f:I\to\mathbb R$ continuous and differentiable at every interior point with $f'=0$ there. Then $f$ is constant; if moreover $f,g$ are continuous with $f'=g'$ at every interior point then $f-g$ is constant ([[cor-zero-derivative-implies-constant]]).

[F4] Let $I$ be order-convex with at least two elements and $f:I\to\mathbb R$ continuous. Fix $c_0\in I$; then $F(x)=\int_{c_0}^xf$ is a primitive of $f$ on $I$, and primitives differ by constants ([[cor-primitives-of-a-continuous-function]]).

[F5] Sums, constant multiples of differentiable functions are differentiable with the usual rules ([[thm-algebra-of-derivatives]]).

## Proof

1.1 The affine change of variables $(x,t)\mapsto(\xi,\eta)=(x-ct,x+ct)$ is a bijection of $\mathbb R^2$ with inverse $x=(\xi+\eta)/2$, $t=(\eta-\xi)/(2c)$, and the image $R'$ of the rectangle $R$ is a nonempty open convex affine image of $R$ (a parallelogram when $R$ is bounded); the projections $I$ of $R'$ onto the $\xi$-axis and $J$ onto the $\eta$-axis are nonempty open intervals, and every section $\{\eta:(\xi,\eta)\in R'\}$ and $\{\xi:(\xi,\eta)\in R'\}$ is a nonempty open interval. By [F2] the function $U(\xi,\eta):=u((\xi+\eta)/2,(\eta-\xi)/(2c))$ is $C^2$ on $R'$, and [F1] gives $u_{tt}-c^2u_{xx}=-4c^2U_{\xi\eta}$ on $R'$. [F1, F2, algebra]

1.2 Suppose $u$ solves $u_{tt}=c^2u_{xx}$ on $R$; since $c>0$, $U_{\xi\eta}=0$ on $R'$. For fixed $\xi\in I$ the section $J_\xi:=\{\eta:(\xi,\eta)\in R'\}$ is a nonempty open interval and $\partial_\eta\bigl(U_\xi(\xi,\cdot)\bigr)=U_{\xi\eta}(\xi,\cdot)=0$ there, so by [F3] the value $U_\xi(\xi,\eta)$ is independent of $\eta$ in that section; call it $p(\xi)$. To see $p$ is $C^1$, fix $\xi_0\in I$ and choose $\eta_0$ with $(\xi_0,\eta_0)\in R'$; openness gives an interval $I_0$ about $\xi_0$ on which $(\xi,\eta_0)\in R'$, so $p(\xi)=U_\xi(\xi,\eta_0)$ on $I_0$. Since $U$ is $C^2$, this local representative is $C^1$, and hence $p\in C^1(I)$. Choose a primitive $P$ of $p$ on $I$ by [F4]; since $p\in C^1$, $P\in C^2(I)$. Then $\partial_\xi(U-P)=0$ on $R'$, and the same section argument in the $\xi$-direction gives that $U-P$ is independent of $\xi$: there is $G:J\to\mathbb R$ with $U(\xi,\eta)-P(\xi)=G(\eta)$ for all $(\xi,\eta)\in R'$. To see $G$ is $C^2$, fix $\eta_0\in J$ and choose $\xi_0$ with $(\xi_0,\eta_0)\in R'$; openness gives a neighbourhood $J_0$ on which $G(\eta)=U(\xi_0,\eta)-P(\xi_0)$, a $C^2$ function. Thus $G\in C^2(J)$ and $u(x,t)=P(x-ct)+G(x+ct)$ on $R$. [F3, F4, algebra]

1.3 Conversely, if $F\in C^2(I)$ and $G\in C^2(J)$, then $(x,t)\mapsto F(x-ct)+G(x+ct)$ is $C^2$ on $R$ by [F2] and [F5], and two applications of the chain rule give $\partial_t^2[F(x-ct)+G(x+ct)]=c^2F''(x-ct)+c^2G''(x+ct)=c^2\partial_x^2[F(x-ct)+G(x+ct)]$; hence every such sum solves the wave equation. [F2, F5, algebra]

1.4 Uniqueness of the pair. If $F_1(\xi)+G_1(\eta)=F_2(\xi)+G_2(\eta)$ for all $(\xi,\eta)\in R'$, then $\Phi(\xi,\eta):=F_1(\xi)-F_2(\xi)-G_2(\eta)+G_1(\eta)$ vanishes on $R'$. For fixed $\xi\in I$ the section in $\eta$ is a nonempty interval, so $\partial_\eta\Phi=G_1'-G_2'=0$ on $J$, and for fixed $\eta\in J$ similarly $\partial_\xi\Phi=F_1'-F_2'=0$ on $I$; hence $F_1-F_2$ and $G_2-G_1$ are the same constant $k$ by [F3], that is $F_1=F_2+k$ and $G_1=G_2-k$. [F3, F5, algebra]

2.1 Therefore every $C^2$ solution of the one-dimensional homogeneous wave equation on a nonempty open rectangle has the form $F(x-ct)+G(x+ct)$ with $F,G$ of class $C^2$ on the projections, every such sum is a solution, and the decomposition is unique up to the additive shift $F\mapsto F+k$, $G\mapsto G-k$. [given] ∎ 
