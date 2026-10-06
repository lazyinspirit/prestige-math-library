---
id: lem-derivative-of-an-integral-with-moving-endpoints
kind: lemma
title: "Differentiating an integral with moving endpoints"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
proof_strategy: direct
deps: [thm-differentiation-under-the-integral-sign-on-a-compact-rectangle, cor-primitives-of-a-continuous-function, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, thm-continuous-partial-derivatives-imply-total-differentiability, thm-heine-cantor-metric, thm-extreme-value-metric, cor-euclidean-closed-balls-and-spheres-are-compact]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§2.5.2, printed p. 61, rule (2.5.10) and its use in Proposition 2.5.1 (proof read in full)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.1, printed p. 168: the same moving-endpoint differentiation on the backward characteristic triangle"
---


## Statement

Let $I\subseteq\mathbb R$ be an open interval, let $\alpha,\beta\in C^1(I)$ with $\alpha(t)<\beta(t)$ for $t\in I$, let $J\subseteq\mathbb R$ be an open interval containing the closure of the union of the intervals $[\alpha(t),\beta(t)]$ over $t\in I$, and let $F:I\times J\to\mathbb R$ be continuous with continuous partial derivative $\partial_tF$. Then
$$G(t):=\int_{\alpha(t)}^{\beta(t)}F(t,y)\,dy$$
is $C^1$ on $I$ and
$$G'(t)=F\bigl(t,\beta(t)\bigr)\beta'(t)-F\bigl(t,\alpha(t)\bigr)\alpha'(t)+\int_{\alpha(t)}^{\beta(t)}\partial_tF(t,y)\,dy .$$

## Facts & Assumptions

**Given:** open intervals $I,J$, functions $\alpha,\beta\in C^1(I)$ with $\alpha<\beta$, and a continuous $F:I\times J\to\mathbb R$ whose partial derivative $\partial_tF$ exists and is continuous on $I\times J$, with $J$ containing the closure of the union of the intervals $[\alpha(t),\beta(t)]$.

[F1] If $I_0\subseteq\mathbb R$ is order-convex with at least two elements and $f:I_0\to\mathbb R$ is continuous, then for $c_0\in I_0$, $F(x)=\int_{c_0}^xf$ is a primitive of $f$ and $\int_a^bf=G(b)-G(a)$ for every primitive $G$ of $f$ and $a<b$ in $I_0$ ([[cor-primitives-of-a-continuous-function]]).

[F2] Let $a<b$, $c<d$ and let $g,h:[a,b]\times[c,d]\to\mathbb R$ be continuous with $x\mapsto g(x,t)$ differentiable on $(a,b)$ and derivative $h(x,t)$ for every fixed $t\in[c,d]$. Then $G(x)=\int_c^dg(x,t)\,dt$ is differentiable on $[a,b]$ with $G'(x)=\int_c^dh(x,t)\,dt$ ([[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]]).

[F3] If $f:U\to V\subseteq\mathbb R^n$ is totally differentiable at $a$ and $g:V\to\mathbb R^p$ is totally differentiable at $f(a)$, then $g\circ f$ is totally differentiable at $a$ with $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$ ([[thm-chain-rule-for-total-derivatives]]). The required total differentiability follows from continuous coordinate partial derivatives ([[thm-continuous-partial-derivatives-imply-total-differentiability]]).

[F4] Sums and differences of differentiable functions are differentiable, with derivative the sum respectively difference of the derivatives ([[thm-algebra-of-derivatives]]).

## Proof

1.1 Localisation. Fix $t_0\in I$. Choose a compact interval $K\subset I$ with $t_0$ in its interior $I_0$. The endpoint functions are bounded on $K$ by [[thm-extreme-value-metric]], so choose $a<b$ in $J$ with $a<\alpha(t)<\beta(t)<b$ for $t\in K$, and choose $r_*\in J$ with $r_*<a$. Define $\Phi(u,t):=\int_{r_*}^uF(t,y)\,dy$ on $(a,b)\times I_0$. By [F1], $G(t)=\Phi(\beta(t),t)-\Phi(\alpha(t),t)$. [F1, given]


1.2 The primitive is $C^1$ on an open neighbourhood of the endpoint curves. By [F1], $\partial_u\Phi(u,t)=F(t,u)$; by [F2] on compact rectangles inside $I\times J$, $\partial_t\Phi(u,t)=\int_{r_*}^u\partial_tF(t,y)\,dy$. This last expression is jointly continuous: on a fixed compact rectangle, uniform continuity of $\partial_tF$ ([[thm-heine-cantor-metric]]) bounds the change in $t$ by the interval length times a uniform error, and boundedness bounds the change in $u$ by a constant times $|u-u_0|$. Thus both partial derivatives are continuous, and [[thm-continuous-partial-derivatives-imply-total-differentiability]] makes $\Phi$ totally differentiable. [F1, F2, algebra]


2.1 Apply [F3] to the curves $t\mapsto(\beta(t),t)$ and $t\mapsto(\alpha(t),t)$ in the open domain of $\Phi$, and subtract using [F4]. Evaluation of the primitive gives $G'(t)=F(t,\beta(t))\beta'(t)-F(t,\alpha(t))\alpha'(t)+\int_{\alpha(t)}^{\beta(t)}\partial_tF(t,y)\,dy$. The same uniform estimate as in step 1.2 shows this derivative is continuous. Since $t_0$ was arbitrary, the formula holds throughout $I$. [F1, F3, F4, step 1.2, algebra] ∎
