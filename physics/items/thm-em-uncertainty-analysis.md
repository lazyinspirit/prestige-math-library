---
id: thm-em-uncertainty-analysis
kind: theorem
domain: mathematics
title: "Uncertainty analysis: bounded-error data confine the parameter of a $C^1$ prediction along a declared unit direction in $\\mathbb R^n$"
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
dependency_level: 1
deps: [lem-em-bounded-error-model-comparison, def-ck-euclidean-maps-and-diffeomorphisms, def-ck-and-multi-index-notation-in-several-variables, def-euclidean-inner-product, def-directional-and-partial-derivatives, def-jacobian-matrix-and-gradient, def-derivative, def-interval, def-limit-point-r, def-neighbourhood-r, def-open-and-closed-in-r, def-function-limit, def-vector-valued-functions-limits-and-continuity, def-total-derivative-in-euclidean-space, def-continuity-real, def-norm-and-normed-space, def-injection-surjection-bijection, lem-standard-basis-of-f-n, lem-derivative-of-a-power, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, thm-continuous-partial-derivatives-imply-total-differentiability, thm-total-derivative-computes-directional-and-partial-derivatives, thm-gradient-represents-directional-derivatives-and-steepest-ascent, thm-componentwise-limits-and-continuity, def-metric-continuity, thm-metric-continuity-characterisations, thm-cauchy-schwarz-and-the-euclidean-norm, lem-real-and-metric-notions-agree, thm-algebra-of-continuous-functions]
dependency_roles:
  lem-em-bounded-error-model-comparison: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
  def-limit-point-r: mathematical-premise
  def-neighbourhood-r: mathematical-premise
  def-open-and-closed-in-r: mathematical-premise
  def-function-limit: mathematical-premise
  def-vector-valued-functions-limits-and-continuity: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-continuity-real: mathematical-premise
  def-norm-and-normed-space: mathematical-premise
  def-injection-surjection-bijection: mathematical-premise
  lem-standard-basis-of-f-n: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
  thm-total-derivative-computes-directional-and-partial-derivatives: mathematical-premise
  thm-gradient-represents-directional-derivatives-and-steepest-ascent: mathematical-premise
  thm-componentwise-limits-and-continuity: mathematical-premise
  def-metric-continuity: mathematical-premise
  thm-metric-continuity-characterisations: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  lem-real-and-metric-notions-agree: mathematical-premise
  thm-algebra-of-continuous-functions: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "J. Lebl, Basic Analysis I: Introduction to Real Analysis, Volume I (open textbook), Chapter 4 'The Derivative', sections 4.1.1 to 4.2.5, printed pp. 154-168, version 6.3 (May 15, 2026)"
      url: "https://www.jirka.org/ra/realanal.pdf"
    - title: "G. L. Luke, Notes of lectures on Multivariable Calculus (University of Oxford course notes hosted at people.maths.ox.ac.uk/~tillmann), sections 2 'The Total Derivative', 3 'Properties of Total Derivatives' and 7 'Mean Value Theorem', PDF pp. 5-6 and 9-13"
      url: "https://people.maths.ox.ac.uk/~tillmann/background-multvar.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open, let $\theta_0\in U$, and let $u\in\mathbb R^n$ satisfy $\lVert u\rVert_2=1$ ([[def-euclidean-inner-product]]). Let $I\subseteq\mathbb R$ be an open interval with $0\in I$ and such that $\gamma(\theta):=\theta_0+\theta u\in U$ for every $\theta\in I$. Let $F:U\to\mathbb R$ be of class $C^1$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]) with $F(\theta_0)=0$, and suppose that for every $\theta\in I$ the directional derivative of $F$ along $u$ satisfies

$$D_uF(\theta_0+\theta u)=\langle\nabla F(\theta_0+\theta u),u\rangle\ge m>0$$

([[def-directional-and-partial-derivatives]], [[def-jacobian-matrix-and-gradient]], [[thm-gradient-represents-directional-derivatives-and-steepest-ascent]]). Let a recorded scalar $\hat y\in\mathbb R$ satisfy $|\hat y|\le s$ with $s\ge0$, and let a calibration-error bound $|y-\hat y|\le\delta$ with $\delta\ge0$ hold for $y:=F(\theta_0+\theta u)$ at a candidate $\theta\in I$. Then

$$|\theta|\le\frac{s+\delta}{m},$$

and the corresponding configuration displacement $\gamma(\theta)-\theta_0=\theta u$ has Euclidean length $\lVert\theta u\rVert_2=|\theta|$. The conclusion is a deterministic conditional statement about the stated bounds; it is not a sampling law, a statistical inference, or a claim about any historical report, and the parameters $s,\delta,m$ are supplied by the user of the statement rather than estimated from data here.

## Facts & Assumptions

**Given:** a natural $n\ge1$; an open set $U\subseteq\mathbb R^n$; a point $\theta_0\in U$; a vector $u\in\mathbb R^n$ with $\lVert u\rVert_2=1$; an open interval $I\subseteq\mathbb R$ with $0\in I$ and $\gamma(\theta):=\theta_0+\theta u\in U$ for every $\theta\in I$; a function $F:U\to\mathbb R$ of class $C^1$ with $F(\theta_0)=0$ and $D_uF(\theta_0+\theta u)=\langle\nabla F(\theta_0+\theta u),u\rangle\ge m>0$ for every $\theta\in I$; a recorded scalar $\hat y\in\mathbb R$ with $|\hat y|\le s$, $s\ge0$; a calibration bound $|y-\hat y|\le\delta$, $\delta\ge0$, for $y=F(\theta_0+\theta u)$ at a candidate $\theta\in I$.

[F1] The intervals that are open in the sense of [[def-interval]] are the four forms $(a,b)$, $(a,\infty)$, $(-\infty,b)$ and $(-\infty,\infty)=\mathbb R$, and a set $A\subseteq\mathbb R$ is open when every $x\in A$ has a real $\varepsilon>0$ with $N_\varepsilon(x)\subseteq A$, where $N_\varepsilon(x)$ is the neighbourhood of [[def-open-and-closed-in-r]].

[F2] The punctured neighbourhood $N^{*}_\varepsilon(x)=\{\,y:0<|y-x|<\varepsilon\,\}$ is never empty: the element $x+\varepsilon/2$ satisfies $|(x+\varepsilon/2)-x|=\varepsilon/2$, which is $>0$ and $<\varepsilon$ ([[def-neighbourhood-r]]).

[F3] Every point of a nondegenerate interval is a limit point of it ([[def-derivative]]).

[F4] A limit point of $A\subseteq\mathbb R$ is a point $p$ with $N^{*}_\eta(p)\cap A\ne\varnothing$ for every real $\eta>0$ ([[def-limit-point-r]]).

[F5] The derivative of $h:A\to\mathbb R$ at a limit point $c$ of $A$ is $h'(c)=\lim_{x\to c}\bigl(h(x)-h(c)\bigr)/(x-c)$, the limit of the difference quotient, and $h$ is differentiable at $c$ when that limit exists ([[def-derivative]]).

[F6] If $B\subseteq A$, if $c\in B$ is a limit point of $B$ and if $h:A\to\mathbb R$ is differentiable at $c$, then the restriction $h|_B:B\to\mathbb R$ is differentiable at $c$ with $(h|_B)'(c)=h'(c)$ ([[def-derivative]]).

[F7] For a natural number $n\ge1$ the function $p_n(x)=x^{n}$ is differentiable at every real, with derivative $n\,c^{\,n-1}$ at $c$ when the natural number $n$ is read as a real number, and the constant function $p_0\equiv1$ is differentiable at every real with derivative $0$ ([[lem-derivative-of-a-power]]).

[F8] If $f,g:A\to\mathbb R$ are differentiable at a limit point $c$ of $A$ and $\alpha\in\mathbb R$, then $f+g$ and $\alpha f$ are differentiable at $c$ with $(f+g)'(c)=f'(c)+g'(c)$ and $(\alpha f)'(c)=\alpha f'(c)$ ([[thm-algebra-of-derivatives]], claims 1 and 2).

[F9] For $U'\subseteq\mathbb R^m$, $a\in U'$, $v\in\mathbb R^m$ and $f:U'\to\mathbb R^n$, if the line map $t\mapsto f(a+tv)$ is defined near $0$, its derivative at $0$ is the directional derivative $D_vf(a)=\lim_{t\to0}\bigl(f(a+tv)-f(a)\bigr)/t$, and for a standard basis vector $e_j$ one writes $\partial_jf(a)=D_{e_j}f(a)$ ([[def-directional-and-partial-derivatives]]). For one-dimensional domains and codomains we identify $\mathbb R$ with $\mathbb R^1$ by the bijection $t\mapsto(t)$, the function on $\{0\}$ with value $t$; it is isometric because $\lVert(t)-(r)\rVert_2=\sqrt{(t-r)^2}=|t-r|$ ([[def-euclidean-inner-product]]). Under this identification the only standard basis vector is $e_0=1$ ([[lem-standard-basis-of-f-n]]).

[F10] For $h:A\to\mathbb R$ with $A\subseteq\mathbb R$ and $c$ a limit point of $A$, the statement $\lim_{x\to c}h(x)=L$ means: for every real $\varepsilon>0$ there is a real $\delta>0$ such that every $x\in A$ with $0<|x-c|<\delta$ satisfies $|h(x)-L|<\varepsilon$ ([[def-function-limit]]).

[F11] For $A\subseteq\mathbb R$, $c$ a limit point of $A$, $f:A\to\mathbb R^m$ and $L\in\mathbb R^m$, one has $\lim_{x\to c}f(x)=L$ if and only if $\lim_{x\to c}f_i(x)=L_i$ for every $i<m$ ([[thm-componentwise-limits-and-continuity]], clause 2).

[F12] A vector-valued $f:A\to\mathbb R^m$ on $A\subseteq\mathbb R$ is continuous at $a\in A$ when for every real $\varepsilon>0$ there is a real $\delta>0$ such that every $x\in A$ with $|x-a|<\delta$ satisfies $\lVert f(x)-f(a)\rVert_2<\varepsilon$ ([[def-vector-valued-functions-limits-and-continuity]]).

[F13] A map $f:U'\to\mathbb R^n$ on an open $U'\subseteq\mathbb R^m$ is totally differentiable at $a\in U'$ when there is a linear map $L:\mathbb R^m\to\mathbb R^n$ with $\lVert f(a+h)-f(a)-Lh\rVert_2/\lVert h\rVert_2\to0$ as $h\to0$, and then $L$ is written $Df(a)$ ([[def-total-derivative-in-euclidean-space]]).

[F14] If every partial derivative $\partial_jf$ of $f:U'\to\mathbb R^n$ exists on a neighbourhood of $a\in U'$ and is continuous at $a$, then $f$ is totally differentiable at $a$ and $Df(a)$ is the linear map with matrix $Jf(a)$ ([[thm-continuous-partial-derivatives-imply-total-differentiability]]).

[F15] If $f:U'\to\mathbb R^n$ is totally differentiable at $a$, then $D_vf(a)$ exists for every $v$ and equals $Df(a)v$; in particular $\partial_jf(a)=Df(a)e_j$ ([[thm-total-derivative-computes-directional-and-partial-derivatives]]).

[F16] A map is of class $C^1$ when each component is; for a scalar function on an open set this means that the function and each of its first coordinate partial derivatives exist and are continuous on the domain ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-ck-and-multi-index-notation-in-several-variables]]).

[F17] If a scalar-valued $f$ is totally differentiable at $a$, then $D_vf(a)=\langle\nabla f(a),v\rangle$ for every $v$ ([[thm-gradient-represents-directional-derivatives-and-steepest-ascent]]).

[F18] For scalar $f$ whose partial derivatives exist at $a$, the gradient is $\nabla f(a)=(\partial_0f(a),\ldots,\partial_{m-1}f(a))\in\mathbb R^m$ ([[def-jacobian-matrix-and-gradient]]).

[F19] The Euclidean inner product is $\langle x,y\rangle=\sum_{k<n}x_ky_k$ with norm $\lVert x\rVert_2=\sqrt{\langle x,x\rangle}$; for $n\ge1$ one has $\lVert x-y\rVert_2=d_2(x,y)$; and two elements of $\mathbb R^n$ are equal exactly when they agree at every $k<n$ ([[def-euclidean-inner-product]]).

[F20] If $f$ is totally differentiable at $a$ and $g$ is totally differentiable at $f(a)$, then $g\circ f$ is totally differentiable at $a$ with $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$ ([[thm-chain-rule-for-total-derivatives]]).

[F21] Real continuity ([[def-continuity-real]]), metric continuity ([[def-metric-continuity]]), the choice-free equivalence of continuity with openness of preimages ([[thm-metric-continuity-characterisations]], conditions (a) and (b)), the agreement of the real and metric notions on subsets of $\mathbb R$ ([[lem-real-and-metric-notions-agree]]), and continuity of sums and scalar multiples at a point of a common domain $A\subseteq\mathbb R$ ([[thm-algebra-of-continuous-functions]], claim 1).

[F22] For every norm $N$ on a real vector space and all $\lambda$ in $\mathbb R$ one has $N(\lambda v)=|\lambda|N(v)$ (axiom (N2) of [[def-norm-and-normed-space]]), and $\lVert\cdot\rVert_2$ is a norm on $\mathbb R^n$ for every natural number $n$, inducing the metric $d_2$ whenever $n\ge1$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]], clause 2).

[F23] Images and preimages of sets under a function are those of the induced relation, and $f^{-1}[V]$ denotes the preimage of $V$ under $f$ ([[def-injection-surjection-bijection]]).

[F24] The bounded-error model comparison: for an interval $I$ with at least two elements, $\theta_0\in I$ and $f:I\to\mathbb R$ of class $C^1$ with $f(\theta_0)=0$ and $f'\ge m>0$ on $I$, every candidate $\theta\in I$ for which a recorded scalar $\hat y$ satisfies $|\hat y|\le s$, $s\ge0$, and $y=f(\theta)$ satisfies $|y-\hat y|\le\delta$, $\delta\ge0$, obeys $|\theta-\theta_0|\le(s+\delta)/m$ ([[lem-em-bounded-error-model-comparison]]).

## Proof

**Proof technique:** direct.

1.1 The interval $I$ is one of the four open forms of [F1], hence an open subset of $\mathbb R$; fix a real $\varepsilon>0$ with $N_\varepsilon(0)\subseteq I$. By [F2] the punctured neighbourhood $N^{*}_\varepsilon(0)$ is a nonempty subset of $N_\varepsilon(0)\subseteq I$, so $I$ contains $0$ and at least one further point and is therefore nondegenerate; by [F3] every point of $I$ is a limit point of $I$, that is, by [F4], $N^{*}_\eta(\theta)\cap I\ne\varnothing$ for every $\theta\in I$ and every real $\eta>0$. [given, F1, F2, F3, F4]

1.2 The function $F$ is totally differentiable at $p:=\gamma(\theta)=\theta_0+\theta u$, and $D_uF(p)=\langle\nabla F(p),u\rangle$: as $F$ is of class $C^1$, each first partial derivative $\partial_jF$ exists and is continuous on the open set $U$ by [F16], so [F14] gives total differentiability of $F$ at $p\in U$, and [F17] gives $D_uF(p)=\langle\nabla F(p),u\rangle$. [given, F16, F14, F17]

1.3 The path $\gamma:I\to U$ is continuous at every $\theta'\in I$: given a real $\varepsilon>0$ take $\delta:=\varepsilon$; for $\theta''\in I$ with $|\theta''-\theta'|<\delta$ one has $d_2\bigl(\gamma(\theta''),\gamma(\theta')\bigr)=\lVert\gamma(\theta'')-\gamma(\theta')\rVert_2=\lVert(\theta''-\theta')u\rVert_2=|\theta''-\theta'|\,\lVert u\rVert_2=|\theta''-\theta'|<\varepsilon$, by [F19], the homogeneity axiom (N2) of [F22] and $\lVert u\rVert_2=1$; this is continuity in the metric sense of [F21]. [given, F19, F22, F21]

1.4 The configuration displacement has Euclidean length $\lVert\gamma(\theta)-\theta_0\rVert_2=\lVert\theta u\rVert_2=|\theta|\,\lVert u\rVert_2=|\theta|$, by the Euclidean norm of [F19], the homogeneity axiom (N2) of [F22] and $\lVert u\rVert_2=1$. [F19, F22, given]

2.1 For every $\theta\in I$ the components of the path satisfy $\gamma_j(\theta+t)=\gamma_j(\theta)+tu_j$ for every real $t$ with $\theta+t\in I$, since $\gamma_j(\theta+t)=(\theta_0)_j+(\theta+t)u_j=(\theta_0)_j+\theta u_j+tu_j=\gamma_j(\theta)+tu_j$ by field arithmetic; on $I$ the functions $1_I:=p_0|_I$, constantly $1$, and $\mathrm{id}_I:=p_1|_I$, the identity, are differentiable at $\theta$ with derivatives $0$ and $1$, because the power functions $p_0$ and $p_1$ have those derivatives at every real by [F7] and $\theta$ is a limit point of $I$ by step 1.1, so [F6] restricts; since $\gamma_j=(\theta_0)_j\cdot1_I+u_j\cdot\mathrm{id}_I$ on $I$, the sum and scalar rules of [F8] give that $\gamma_j$ is differentiable at $\theta$ with $\gamma_j'(\theta)=(\theta_0)_j\cdot0+u_j\cdot1=u_j$. [step 1.1, F7, F6, F8, algebra]

2.2 Each composite $\partial_jF\circ\gamma:I\to\mathbb R$ is continuous: for open $V\subseteq\mathbb R$ the preimage $(\partial_jF\circ\gamma)^{-1}[V]$ is, by [F23], the preimage $\gamma^{-1}\bigl[\partial_jF^{-1}[V]\bigr]$; the set $\partial_jF^{-1}[V]$ is open in the domain $U$ of the continuous $\partial_jF$ by the choice-free equivalence (a)$\Leftrightarrow$(b) of [F21], and its preimage under the continuous $\gamma$ is therefore open in $I$; the same equivalence then gives continuity of $\partial_jF\circ\gamma$ on $I$. [step 1.3, F16, F23, F21]

3.1 For every $\theta\in I$ the partial derivative of $\gamma_j$ in the direction $e_0=1$ equals its ordinary derivative, so $\partial_0\gamma_j(\theta)=u_j$: by [F9] the directional derivative $D_{e_0}\gamma_j(\theta)$ is the limit at $0$ of $t\mapsto\bigl(\gamma_j(\theta+t)-\gamma_j(\theta)\bigr)/t$, while by [F5] the derivative $\gamma_j'(\theta)=u_j$ of step 2.1 is the limit at $\theta$ of $x\mapsto\bigl(\gamma_j(x)-\gamma_j(\theta)\bigr)/(x-\theta)$; the substitution $x=\theta+t$ carries one punctured domain bijectively onto the other and the two $\varepsilon$-$\delta$ conditions of [F10] are the same condition, so $D_{e_0}\gamma_j(\theta)=\gamma_j'(\theta)=u_j$. [step 2.1, F9, F5, F10, algebra]

4.1 For every $\theta\in I$ the partial derivative of the path is the vector $\partial_0\gamma(\theta)=u$: the quotient $q_\theta(t):=\bigl(\gamma(\theta+t)-\gamma(\theta)\bigr)/t$ on its domain $\{\,t:t\ne0,\ \theta+t\in I\,\}$ is identically $u$ by the component identity in step 2.1, so its limit exists and defines $\partial_0\gamma(\theta)$ by [F9], the $j$-th component of $q_\theta$ is $t\mapsto\bigl(\gamma_j(\theta+t)-\gamma_j(\theta)\bigr)/t$ with limit $\partial_0\gamma_j(\theta)$, and step 3.1 gives $\partial_0\gamma_j(\theta)=u_j$; by the componentwise limit criterion [F11] the $j$-th coordinate of $\partial_0\gamma(\theta)$ equals $u_j$ for every $j<n$, and two vectors in $\mathbb R^n$ with equal coordinates are equal by [F19], so $\partial_0\gamma(\theta)=u$. [step 2.1, step 3.1, F9, F11, F19]

5.1 The only partial derivative of $\gamma$ is the constant $\partial_0\gamma\equiv u$ on $I$ by step 4.1 applied at every $\theta\in I$, and it is continuous at $\theta$: given a real $\varepsilon>0$, every $\delta>0$ serves for the continuity condition of [F12], because $\lVert\partial_0\gamma(\theta')-\partial_0\gamma(\theta)\rVert_2=\lVert u-u\rVert_2=0<\varepsilon$ for every $\theta'\in I$. [step 4.1, F12]

6.1 The path $\gamma$ is totally differentiable at $\theta$ with $D\gamma(\theta)(1)=u$: the partial derivative $\partial_0\gamma$ exists on the neighbourhood $I$ of $\theta$ in the open domain $I\subseteq\mathbb R$ and is continuous at $\theta$ by step 5.1, so $D\gamma(\theta)$ exists by [F14]; moreover $D\gamma(\theta)(1)=D\gamma(\theta)(e_0)=\partial_0\gamma(\theta)=u$ by [F15] and step 4.1. [step 4.1, step 5.1, F13, F14, F15]

7.1 The composite $g:=F\circ\gamma:I\to\mathbb R$ is totally differentiable at every $\theta\in I$ with $Dg(\theta)=DF(\gamma(\theta))\circ D\gamma(\theta)$ by the chain rule [F20], applied to the totally differentiable $\gamma$ of step 6.1 and $F$ of step 1.2; consequently $g'(\theta)=Dg(\theta)(1)=DF(\gamma(\theta))\bigl(D\gamma(\theta)(1)\bigr)=DF(\gamma(\theta))(u)=D_uF(\gamma(\theta))=\langle\nabla F(\gamma(\theta)),u\rangle\ge m$ for every $\theta\in I$, where the first equality identifies the ordinary derivative with the total derivative applied to $1$ (the limits of [F9] and [F5] coincide as in step 3.1) and the remaining equalities are step 6.1, [F15] and step 1.2. [step 1.2, step 3.1, step 6.1, F20, F15, F9, F5]

8.1 The derivative $g'$ is continuous on $I$: on $I$ one has $g'(\theta)=\sum_{j<n}u_j\,(\partial_jF\circ\gamma)(\theta)$ by step 7.1, the gradient definition [F18] and the inner product of [F19]; the composites are continuous by step 2.2, the dictionary of [F21] transfers this to the real reading, and finite sums and scalar multiples of functions continuous at each point of $I$ are continuous there by the algebra clause of [F21]; in particular $g'$ is continuous on $I$ in the sense required by [F24]. [step 2.2, step 7.1, F18, F19, F21, F24]

9.1 The value of $g$ at the centre is $g(0)=F(\theta_0+0\cdot u)=F(\theta_0)=0$, and $I$ has at least two elements with $0\in I$ by step 1.1; the function $g:I\to\mathbb R$ is differentiable at every point of $I$ with continuous derivative by steps 7.1 and 8.1, and $g'\ge m>0$ on $I$ by step 7.1. [step 1.1, step 7.1, step 8.1, given]

10.1 The bounded-error model comparison [F24] now applies to $g$ on $I$ with centre $\theta_0:=0$ and the recorded scalar $\hat y$, $s$, $\delta$ of the statement, because a model value $y=g(\theta)=F(\theta_0+\theta u)$ at the candidate $\theta\in I$ is exactly the quantity the calibration bound constrains; its conclusion is $|\theta-0|\le(s+\delta)/m$, that is $|\theta|\le(s+\delta)/m$, and the equivalent contrapositive form says that a proposed $\theta$ violating this bound is incompatible with the two stated bounds; with the displacement identity of step 1.4 the statement is proved. [step 1.4, step 9.1, F24, given] ∎

## Remarks

- **What the statement does not assert.** The bounds $s,\delta,m$ are parameters of the *statement*, not estimates: no sampling distribution, likelihood, confidence level or measurement precision is introduced or claimed, and the conclusion is the deterministic conditional inequality alone. The consumer on the empirical-testing page must supply and qualify $s$, $\delta$ and $m$ from an explicit detector and calibration model before any physical reading.

- **Where the hypotheses are used.** The unit length of $u$ gives the exact distance identity in the continuity estimate of step 1.3 and the displacement identity of step 1.4; the lower bound $D_uF\ge m$ enters through the bounded-error lemma and is exactly the hypothesis the companion example shows cannot be dropped; the openness of $I$ and $0\in I$ make every point of $I$ a limit point of $I$ and $I$ nondegenerate, which is what lets the one-variable and total-differential machinery apply on $I$.

- **No choice principle is used.** The proof invokes only the choice-free parts of [[thm-metric-continuity-characterisations]], namely the equivalence of continuity with openness of preimages, and nothing is selected from a family of nonempty sets. The single application of the bounded-error lemma inherits no choice assumption.
