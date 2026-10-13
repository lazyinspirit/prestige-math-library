---
id: lem-em-proper-time-reparametrization
kind: lemma
title: "Proper time along a $C^1$ future timelike curve: strictly increasing reparametrization with $\\eta(U,U)=-c^2$"
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: mathematics
deps: [def-em-minkowski-affine-space, def-ck-euclidean-maps-and-diffeomorphisms, def-vector-valued-derivative-and-integral, def-vector-valued-functions-limits-and-continuity, thm-componentwise-limits-and-continuity, thm-algebra-of-continuous-functions, def-continuity-real, thm-of-square-roots, lem-of-square-monotone, thm-continuous-inverse, thm-composition-of-continuous-functions, cor-primitives-of-a-continuous-function, thm-monotonicity-from-the-derivative, def-derivative, cor-differentiable-implies-continuous, thm-derivative-of-an-inverse, thm-chain-rule, cor-zero-derivative-implies-constant, def-interval, def-oriented-integral]
dependency_roles:
  def-em-minkowski-affine-space: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-vector-valued-functions-limits-and-continuity: mathematical-premise
  thm-componentwise-limits-and-continuity: mathematical-premise
  thm-algebra-of-continuous-functions: mathematical-premise
  def-continuity-real: mathematical-premise
  thm-of-square-roots: mathematical-premise
  lem-of-square-monotone: mathematical-premise
  thm-continuous-inverse: mathematical-premise
  thm-composition-of-continuous-functions: mathematical-premise
  cor-primitives-of-a-continuous-function: mathematical-premise
  thm-monotonicity-from-the-derivative: mathematical-premise
  def-derivative: mathematical-premise
  cor-differentiable-implies-continuous: mathematical-premise
  thm-derivative-of-an-inverse: mathematical-premise
  thm-chain-rule: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-interval: mathematical-premise
  def-oriented-integral: mathematical-premise
dependency_level: 1
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "David Tong, Dynamics and Relativity, University of Cambridge Part IA Mathematical Tripos (Lent 2013), §7.1–§7.4.7, printed pp. 107–145"
      url: "https://davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel.pdf"
    - title: "Sean M. Carroll, Lecture Notes on General Relativity (arXiv:gr-qc/9712019v1), Chapter 1, printed pp. 1–30"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Let $J\subseteq\mathbb R$ be a nonempty open interval ([[def-interval]]) and let
$z:J\to\mathbb R^4$ be of class $C^1$
([[def-ck-euclidean-maps-and-diffeomorphisms]]) with $\eta(z'(s),z'(s))<0$ and
$z^0{}'(s)>0$ for every $s\in J$; $z'$ is the derivative of the vector-valued
curve ([[def-vector-valued-derivative-and-integral]]) and such a $z$ is called a
$C^1$ future timelike curve. Put $g(s):=-\eta(z'(s),z'(s))>0$, fix $s_0\in J$,
and define $\tau(s):=c^{-1}\int_{s_0}^{s}\sqrt{g(u)}\,du$ for $s\in J$. Then:
(1) $g$ is continuous on $J$ and so is $s\mapsto\sqrt{g(s)}$, where
$\sqrt{\cdot}$ is the nonnegative square root ([[thm-of-square-roots]],
[[thm-algebra-of-continuous-functions]],
[[thm-composition-of-continuous-functions]]); (2) $\tau$ is differentiable on
$J$ with $\tau'(s)=c^{-1}\sqrt{g(s)}>0$, hence $\tau$ is strictly increasing on
$J$, injective, and continuous
([[cor-primitives-of-a-continuous-function]],
[[thm-monotonicity-from-the-derivative]]); (3) the inverse
$\tau^{-1}:\tau[J]\to J$ is differentiable at every point $\tau(s)$ of the
interval $\tau[J]$, with $(\tau^{-1})'(\tau(s))=c/\sqrt{g(s)}$
([[thm-continuous-inverse]], [[thm-derivative-of-an-inverse]]); (4) the
reparametrized curve $z\circ\tau^{-1}:\tau[J]\to\mathbb R^4$ is differentiable
at every $\tau(s)$, with tangent $U(\tau(s)):=c\,z'(s)/\sqrt{g(s)}$ satisfying
$\eta(U,U)=-c^2$ ([[thm-chain-rule]],
[[thm-componentwise-limits-and-continuity]]); (5) if instead
$\eta(z'(s),z'(s))=0$ for all $s\in J$, then $g=0$, $\tau\equiv0$ on $J$ and
$\tau$ is not injective, so a null curve carries no proper-time parametrization
([[cor-zero-derivative-implies-constant]]); (6) if $z(s)=p+sv$ with
$\eta(v,v)<0$ and $v^0>0$, then
$\tau(s)=c^{-1}\sqrt{-\eta(v,v)}\,(s-s_0)$ and
$U=c\,v/\sqrt{-\eta(v,v)}$ is constant
([[cor-differentiable-implies-continuous]], [[def-derivative]]). The
identification of such straight lines with inertial motion is a physical premise
and is not asserted here.

## Facts & Assumptions

**Given:** A nonempty open interval $J\subseteq\mathbb R$, a $C^1$ future timelike curve $z:J\to\mathbb R^4$ with $\eta(z'(s),z'(s))<0$ and $z^0{}'(s)>0$ for all $s\in J$, the function $g(s):=-\eta(z'(s),z'(s))>0$, a point $s_0\in J$, and the function $\tau(s):=c^{-1}\int_{s_0}^{s}\sqrt{g(u)}\,du$ of the statement.

[L1] On $V=\mathbb R^4$ the form $\eta$ is symmetric and bilinear with matrix $\operatorname{diag}(-1,1,1,1)$, and $c$ is a fixed positive real ([[def-em-minkowski-affine-space]]).

[L2] A nonempty open interval is order-convex, its defining inequalities are strict, so each of its points has a neighbourhood contained in it and it has at least two elements ([[def-interval]]).

[L3] A map into $\mathbb R^q$ is of class $C^k$ when all its components are of class $C^k$; for $k=1$ this means that every component has a continuous first derivative ([[def-ck-euclidean-maps-and-diffeomorphisms]]).

[L4] For a curve $f$ into $\mathbb R^m$ and a limit point $c$ of its domain, $f$ is differentiable at $c$ exactly when every component is, and then $f'(c)_i=f_i'(c)$; sums and scalar multiples of differentiable curves are differentiable with the expected derivatives ([[def-vector-valued-derivative-and-integral]]).

[L5] Every real $a\ge0$ has a unique $\sqrt{a}\ge0$ with $(\sqrt{a})^2=a$ ([[thm-of-square-roots]]).

[L6] For $a,b\ge0$ one has $a\le b$ exactly when $a^2\le b^2$ ([[lem-of-square-monotone]]).

[L7] Sums, scalar multiples, products, absolute values and quotients (where defined) of functions continuous at a point are continuous there, and constant functions and $x\mapsto x^n$ are continuous ([[thm-algebra-of-continuous-functions]]).

[L8] If $I$ is order-convex and $f:I\to\mathbb R$ is continuous and injective, then $f$ is strictly monotone, $f[I]$ is order-convex, $f:I\to f[I]$ is a bijection, and the inverse is continuous ([[thm-continuous-inverse]]).

[L9] Composites of continuous functions are continuous ([[thm-composition-of-continuous-functions]]).

[L10] On an order-convex set $I$ with at least two elements, a continuous $f:I\to\mathbb R$ has, for every base point $c_0\in I$, the primitive $F(x)=\int_{c_0}^x f$; any two primitives differ by a constant; and for $a<b$ in $I$ one has $\int_a^b f=G(b)-G(a)$ for every primitive $G$ of $f$ ([[cor-primitives-of-a-continuous-function]]).

[L11] If $f$ is continuous on an order-convex $I$ and $f'>0$ at every interior point of $I$, then $f$ is strictly increasing on $I$ ([[thm-monotonicity-from-the-derivative]]).

[L12] Differentiability at a limit point of the domain implies continuity there ([[cor-differentiable-implies-continuous]]).

[L13] For $c$ a limit point of the domain, $f'(c)$ is the limit of $(f(x)-f(c))/(x-c)$ as $x\to c$ ([[def-derivative]]).

[L14] If $I$ is order-convex with at least two elements, $f:I\to\mathbb R$ is continuous and injective with inverse $g:f[I]\to I$, $c\in I$ and $b:=f(c)$, then $c$ and $b$ are limit points, and if $f$ is differentiable at $c$ with $f'(c)\ne0$ then $g$ is differentiable at $b$ with $g'(b)=1/f'(c)$ ([[thm-derivative-of-an-inverse]]).

[L15] If $g$ is differentiable at $c$, $b:=g(c)$ is a limit point of the domain of $f$, and $f$ is differentiable at $b$, then $f\circ g$ is differentiable at $c$ with $(f\circ g)'(c)=f'(b)g'(c)$ ([[thm-chain-rule]]).

[L16] If $f$ is continuous on an order-convex $I$ and differentiable with $f'=0$ at every interior point of $I$, then $f$ is constant on $I$ ([[cor-zero-derivative-implies-constant]]).

[L17] For the oriented integral, $\int_u^u f=0$ and $\int_u^v f=-\int_v^u f$ ([[def-oriented-integral]]).

## Proof

**Proof technique:** direct.

1.1 $J$ is order-convex with at least two elements, and every point of $J$ is a limit point of $J$ and lies in its interior: $J$ is a nonempty open interval and so has one of the forms $(a,b)$, $(a,\infty)$, $(-\infty,b)$, $\mathbb R$ with strict defining inequalities, so a sufficiently small neighbourhood of any $s\in J$ is contained in $J$, whence a punctured neighbourhood of $s$ meets $J$ again, and $J$ contains two distinct points. [given, L2, algebra]

2.1 $g$ is continuous on $J$: by [L3] each component $z^a$ of the $C^1$ curve has a continuous derivative $z^a{}'$. By [L1], $g(s)=-\eta(z'(s),z'(s))=(z^0{}'(s))^2-\sum_{i=1}^{3}(z^i{}'(s))^2=\sum_{a=0}^{3}\epsilon_a(z^a{}'(s))^2$ with $\epsilon=(1,-1,-1,-1)$. This finite sum of squares and scalar multiples of continuous functions is continuous by [L7]. [step 1.1, L1, L3, L7, algebra]

3.1 $s\mapsto\sqrt{g(s)}$ is continuous on $J$: on $[0,\infty)$ the map $x\mapsto x^2$ is continuous by [L7], strictly increasing by [L6], and its image is $[0,\infty)$ by [L5]; hence its inverse, which is $\sqrt{\cdot}$ by the uniqueness in [L5], is continuous on $[0,\infty)$ by [L8], and composing with the continuous $g$ gives a continuous function by [L9]. [step 2.1, L5, L6, L7, L8, L9]

4.1 $h(s):=c^{-1}\sqrt{g(s)}$ is continuous on $J$: it is the scalar multiple of the continuous function $\sqrt{g}$ by the constant $c^{-1}$, which exists because $c>0$, and scalar multiples of continuous functions are continuous by [L7]. [step 3.1, L1, L7]

5.1 $\tau$ is a primitive of $h$ on $J$, so $\tau$ is differentiable on $J$ with $\tau'(s)=h(s)=c^{-1}\sqrt{g(s)}$ for every $s\in J$, and $\tau$ is continuous on $J$: $J$ is order-convex with at least two elements by step 1.1 and $h$ is continuous by step 4.1, so the primitive assertion of [L10] applies to $h$ on $J$ with base point $s_0$, giving the derivative everywhere on $J$, and differentiability at the limit point $s$ of $J$ gives continuity at $s$ by [L12]. [step 1.1, step 4.1, L10, L12]

6.1 $\tau'(s)=c^{-1}\sqrt{g(s)}>0$ for every $s\in J$: by step 5.1, $\tau'(s)=c^{-1}\sqrt{g(s)}$; here $g(s)>0$ by hypothesis, so $\sqrt{g(s)}>0$ because $\sqrt{g(s)}$ is the nonnegative square root of $g(s)$ [L5], and $c^{-1}>0$ because $c>0$ [L1]; the product of two positive reals is positive. [step 5.1, L1, L5, algebra]

6.2 Null case: if $\eta(z'(s),z'(s))=0$ for all $s\in J$, then $g=0$ by its definition and $h=0$; by step 5.1, $\tau$ is a primitive of the zero function on $J$, so $\tau'=0$ at every point of $J$ and $\tau$ is constant on $J$ by [L16]; moreover $\tau(s_0)=\int_{s_0}^{s_0}\sqrt{g(u)}\,du=0$ by [L17], so the constant is $0$ and $\tau\equiv0$ on $J$; a constant function on $J$ is not injective because $J$ has at least two elements, so a null curve carries no proper-time parametrization. [step 1.1, step 5.1, L16, L17, algebra]

7.1 $\tau$ is strictly increasing on $J$, hence injective: $\tau$ is continuous on $J$ by step 5.1, $J$ is order-convex and every point of $J$ is interior to $J$ by step 1.1, and $\tau'(s)>0$ at every $s\in J$ by step 6.1, so [L11] applies; a strictly increasing function is injective. [step 1.1, step 5.1, step 6.1, L11]

8.1 $\tau[J]$ is an interval (order-convex), the map $\tau:J\to\tau[J]$ is a bijection with inverse $\tau^{-1}:\tau[J]\to J$, and $\tau^{-1}$ is continuous on $\tau[J]$: this is [L8] applied to the continuous injective map $\tau$ on the order-convex set $J$, whose image is $\tau[J]$ by definition; the order-convexity of $J$ and continuity of $\tau$ are steps 1.1 and 5.1, and injectivity is step 7.1. [step 1.1, step 5.1, step 7.1, L8]

9.1 $\tau^{-1}$ is differentiable at every point $\tau(s)$ of $\tau[J]$, with $(\tau^{-1})'(\tau(s))=1/\tau'(s)=c/\sqrt{g(s)}$: the inverse $\tau^{-1}:\tau[J]\to J$ is the one supplied by step 8.1 from [L8], and [L14] applies to $\tau$ with $c$ there equal to $s$ and $b=\tau(s)$; its hypotheses are the order-convexity of $J$ with at least two elements (step 1.1), continuity (step 5.1) and injectivity (step 7.1), and $\tau'(s)\ne0$ by step 6.1, so the derivative is $1/\tau'(s)=c/\sqrt{g(s)}$ by step 5.1. [step 1.1, step 5.1, step 6.1, step 7.1, step 8.1, L14, algebra]

10.1 For each $a\in\{0,1,2,3\}$ the composite $z^a\circ\tau^{-1}:\tau[J]\to\mathbb R$ is differentiable at $\tau(s)$ with derivative $z^a{}'(s)\cdot c/\sqrt{g(s)}$: $z^a$ is differentiable at the limit point $s$ of $J$ by [L3] and step 1.1, $\tau^{-1}$ is differentiable at $\tau(s)$ by step 9.1, and $\tau(s)$ is a limit point of $\tau[J]$ by [L14] as used in step 9.1, so the chain rule [L15] applies and gives the displayed derivative by [L4]. [step 1.1, step 9.1, L3, L4, L15, algebra]

11.1 The reparametrized curve $z\circ\tau^{-1}:\tau[J]\to\mathbb R^4$ is differentiable at every $\tau(s)$, with tangent $U(\tau(s))=c\,z'(s)/\sqrt{g(s)}$: by [L4] applied to the components of step 10.1, the curve is differentiable exactly when its components are and its derivative has those components, so $U(\tau(s))$ is the vector with components $z^a{}'(s)c/\sqrt{g(s)}$, which is $c\,z'(s)/\sqrt{g(s)}$. [step 10.1, L4, algebra]

12.1 $\eta(U(\tau(s)),U(\tau(s)))=-c^2$: by step 11.1, $U(\tau(s))=c\,z'(s)/\sqrt{g(s)}$, and bilinearity and symmetry of $\eta$ [L1] give $\eta(U,U)=(c^2/g(s))\,\eta(z'(s),z'(s))=-(c^2/g(s))\,g(s)=-c^2$, since $g(s)=-\eta(z'(s),z'(s))>0$. [step 11.1, L1, algebra]

12.2 Straight-line case: assume $z(s)=p+sv$ with $\eta(v,v)<0$ and $v^0>0$, so $z'$ is the constant $v$ and $g$ is the constant $k:=-\eta(v,v)>0$, and $h$ is the constant $c^{-1}\sqrt{k}$ by step 5.1; the function $G(s):=c^{-1}\sqrt{k}(s-s_0)$ is a primitive of $h$ on $J$, its difference quotient at any $c\in J$ being the constant $c^{-1}\sqrt{k}$ by [L13], so for $s>s_0$ the evaluation formula of [L10] gives $\tau(s)=G(s)-G(s_0)=G(s)$, for $s=s_0$ one has $\tau(s_0)=\int_{s_0}^{s_0}h=0=G(s_0)$ by [L17], and for $s<s_0$ antisymmetry [L17] gives $\tau(s)=-\int_s^{s_0}h=-(G(s_0)-G(s))=G(s)$; hence $\tau(s)=c^{-1}\sqrt{-\eta(v,v)}(s-s_0)$, and the tangent of step 11.1 is the constant $U(\tau(s))=c\,v/\sqrt{k}=c\,v/\sqrt{-\eta(v,v)}$. [step 5.1, step 11.1, L1, L10, L13, L17, algebra]

13.1 All six claims are established: claim (1) by steps 2.1 and 3.1; claim (2) by steps 5.1 (differentiability and derivative), 6.1 (strict positivity), 7.1 (strict increase and injectivity) and 5.1 (continuity); claim (3) by steps 8.1 and 9.1; claim (4) by steps 10.1, 11.1 and 12.1; claim (5) by step 6.2; and claim (6) by step 12.2; the identification of straight lines with inertial motion is not asserted. [step 2.1, step 3.1, step 5.1, step 6.1, step 6.2, step 7.1, step 8.1, step 9.1, step 10.1, step 11.1, step 12.1, step 12.2] ∎
