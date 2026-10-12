---
id: thm-cm-transport-theorem
kind: theorem
title: "The transport theorem for a $C^1$ family of diffeomorphisms: $\\frac{d}{dt}\\int_{\\psi_t(B)}f=\\int_{\\psi_t(B)}(\\partial_tf+\\operatorname{div}(fw))$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-cm-continuum-motion, def-cm-euclidean-spatial-calculus, def-cm-material-region-and-density, lem-cm-determinant-derivative-along-a-matrix-curve, cor-c-one-change-of-variables-for-l-one-functions, def-countable-choice, thm-differentiation-under-the-integral-sign, def-integral-over-a-measurable-set, def-integrable-real-and-complex-functions-and-their-integrals, thm-linearity-of-the-lebesgue-integral-on-l-one, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-ck-euclidean-maps-and-diffeomorphisms, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, thm-extreme-value-metric, thm-heine-borel-rn, def-metric-ball, def-interval]
dependency_roles:
  def-cm-continuum-motion: mathematical-premise
  def-cm-euclidean-spatial-calculus: mathematical-premise
  def-cm-material-region-and-density: mathematical-premise
  lem-cm-determinant-derivative-along-a-matrix-curve: mathematical-premise
  cor-c-one-change-of-variables-for-l-one-functions: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-differentiation-under-the-integral-sign: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  def-metric-ball: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Sections 3.7 (transport equations) and 4.2 (conservation of mass)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "W. Barsukow, Introduction to Conservation Laws: Theory and Numerics (lecture notes, TUM, Winter term 2021/22), Section 1.2.3, Theorem 1.1 (the transport theorem)"
      url: "https://user.math.uzh.ch/barsukow/exercises2122/conservationlaws.pdf"

  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]), as used by the change-of-variables theorem below. Let $I\subseteq\mathbb R$ be a nonempty open interval ([[def-interval]]), let $B\subseteq\mathbb R^3$ be a material region ([[def-cm-material-region-and-density]]) and let $\psi:I\times O\to\mathbb R^3$ be a motion of $B$ on $I$ in the sense of [[def-cm-continuum-motion]], with associated spatial velocity

$$w\bigl(t,\psi(t,X)\bigr)=\partial_t\psi(t,X)$$

and Jacobian $J(t,X)=\det D_X\psi_t(X)$ ([[def-cm-continuum-motion]], [[def-cm-euclidean-spatial-calculus]]).

Let $J_0\subseteq I$ be an open interval with $\overline{J_0}\subseteq I$, put

$$\Sigma:=\bigl\{(t,x):t\in\overline{J_0},\ x\in\psi_t(\overline B)\bigr\},$$

and let $f:U\to\mathbb R$ be of class $C^1$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]) on an open set $U\subseteq\mathbb R\times\mathbb R^3$ containing $\Sigma$. Then

$$F(t):=\int_{\psi_t(B)}f(t,x)\,dx$$

is defined and differentiable on $J_0$ ([[def-integral-over-a-measurable-set]], [[def-integrable-real-and-complex-functions-and-their-integrals]]), and for every $t\in J_0$

$$F'(t)=\int_{\psi_t(B)}\bigl(\partial_tf+\operatorname{div}(fw)\bigr)(t,x)\,dx,$$

with the divergence and spatial derivative of [[def-cm-euclidean-spatial-calculus]] and the Lebesgue integral of [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]. The same formula holds componentwise for $f$ replaced by a $C^1$ vector field.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; an open interval $I$; a motion $\psi$ of $B$ on $I$ with spatial velocity $w$; an open $J_0$ with compact closure in $I$; a $C^1$ function $f$ on a neighbourhood of the compact swept region $\Sigma$.

[F1] For each $t\in I$ the map $\psi_t:O\to\psi_t(O)$ is a $C^1$ diffeomorphism onto an open set, and $u$ and $w$ are $C^1$ on their open domains ([[def-cm-continuum-motion]]).

[F2] Change of variables: if $T:U_0\to V_0$ is a $C^1$ diffeomorphism between open subsets of $\mathbb R^3$ and $h\in L^1(V_0)$, then $\int_{V_0}h\,dy=\int_{U_0}h(T(x))|\det DT(x)|\,dx$; under the present hypotheses $\det D_X\psi_t=J>0$ on $I\times B$ ([[cor-c-one-change-of-variables-for-l-one-functions]], [[def-countable-choice]]).

[F3] The determinant-derivative lemma: for the $C^1$ matrix curve $t\mapsto A(t):=D_X\psi_t(X)$ with invertible values, $(\det A)'=\det A\;\operatorname{tr}(A^{-1}A')$ ([[lem-cm-determinant-derivative-along-a-matrix-curve]]).

[F4] Differentiation under the integral sign: if $g:B\times J_0\to\mathbb R$ has $x\mapsto g(x,t)$ integrable for every $t$, $t\mapsto g(x,t)$ differentiable for almost every $x$, $t\mapsto\partial_tg(x,t)$ measurable, and $|\partial_tg|\le G$ for an integrable $G$, then $t\mapsto\int_Bg$ is differentiable with derivative $\int_B\partial_tg$ ([[thm-differentiation-under-the-integral-sign]]).

[F5] The chain rule and the product rule: $C^1$ compositions are $C^1$ with the usual total-derivative rule; finite sums and products of differentiable functions satisfy the algebra rules ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F6] On the compact set $\overline{J_0}\times\overline B$ every continuous function is bounded and attains its maximum ([[thm-heine-borel-rn]], [[thm-extreme-value-metric]], [[def-metric-ball]]).

## Proof

**Proof technique:** direct; pull the moving integral back to the fixed region $B$, differentiate under the integral sign, and push forward again.

1.1 Fix $\tau\in J_0$. Choose a bounded open interval $J_1$ with $\tau\in J_1$ and $\overline{J_1}\subseteq J_0$. Its swept set $\Sigma_1:=\{(t,x):t\in\overline{J_1},x\in\psi_t(\overline B)\}$ is compact and lies in $U$, since it is contained in $\Sigma$. The continuous map $(t,X)\mapsto(t,\psi(t,X))$ therefore maps $\overline{J_1}\times\overline B$ into $U$. Compactness gives an open neighbourhood $O_1$ of $\overline B$ in $O$ such that $(t,\psi(t,X))\in U$ for $t\in\overline{J_1}$, $X\in O_1$: finitely many product neighbourhoods inside the inverse image of $U$ cover the compact cylinder, or equivalently its positive distance from the closed complement supplies a uniform spatial margin. Define $$g:J_1\times O_1\longrightarrow\mathbb R,\qquad g(t,X):=f\bigl(t,\psi(t,X)\bigr)J(t,X).$$ By [F1] and [F5], $g$ is $C^1$, and $\partial_tg$ is bounded on the compact cylinder $\overline{J_1}\times\overline B$ by [F6]. The argument below is applied on this local interval; compactness of the whole $\overline{J_0}$ is not required. [given, F1, F5, F6, construct]

2.1 For $t\in J_1$, [F2] applied to the $C^1$ diffeomorphism $\psi_t$ and the function $f(t,\cdot)$ restricted to $\psi_t(B)$, integrable because it is continuous on a neighbourhood of the compact $\psi_t(\overline B)$ gives $$F(t)=\int_{\psi_t(B)}f(t,x)\,dx=\int_Bf\bigl(t,\psi(t,X)\bigr)J(t,X)\,dX=\int_Bg(t,X)\,dX .$$ [F1, F2, step 1.1, algebra]

2.2 Differentiate $g$ in time at $(t,X)$. By [F5], $\partial_t[f(t,\psi(t,X))]=(\partial_tf)(t,\psi(t,X))+D_xf(t,\psi(t,X))\bigl(\partial_t\psi(t,X)\bigr)=(\partial_tf)(t,\psi(t,X))+\langle\nabla f,w\rangle(t,\psi(t,X))$, where the second form uses $w(t,\psi(t,X))=\partial_t\psi(t,X)$. By [F3] applied to $A(t)=D_X\psi_t(X)$, whose derivative is $A'(t)=D_xw(t,\psi(t,X))A(t)$ by [F5], we get $(\partial_tJ)(t,X)=J(t,X)\operatorname{tr}\bigl(D_xw(t,\psi(t,X))\bigr)=J(t,X)(\operatorname{div}w)(t,\psi(t,X))$. Hence $$\partial_tg(t,X)=\Bigl[\bigl(\partial_tf+\langle\nabla f,w\rangle+f\operatorname{div}w\bigr)\circ(t,\psi(t,X))\Bigr]J(t,X). \tag{*}$$ [F1, F3, F5, step 1.1, algebra]

3.1 The product rule for a scalar field $f$ and a vector field $w$, read off componentwise from the definitions of gradient and divergence, gives $$\operatorname{div}(fw)=\sum_i\partial_i(fw_i)=\sum_i(\partial_if)w_i+f\sum_i\partial_iw_i=\langle\nabla f,w\rangle+f\operatorname{div}w .$$ Therefore ($\ast$) reads $\partial_tg(t,X)=\bigl(\partial_tf+\operatorname{div}(fw)\bigr)(t,\psi(t,X))\,J(t,X)$. [given, F5, step 2.2, algebra]

4.1 Apply [F4] to $g$ on $X=B$ over the interval $J_1$ with the integrable dominating constant $\sup_{\overline{J_1}\times\overline B}|\partial_tg|<+\infty$ (legitimate because $B$ has finite Lebesgue measure and the supremum is finite by step 1.1 and [F6]): the function $t\mapsto\int_Bg(t,X)dX=F(t)$ is differentiable on $J_1$ with $$F'(t)=\int_B\partial_tg(t,X)\,dX=\int_B\bigl(\partial_tf+\operatorname{div}(fw)\bigr)\bigl(t,\psi(t,X)\bigr)J(t,X)\,dX .$$ [F4, step 1.1, step 2.1, step 3.1, F6]

5.1 Change variables back with [F2], applied to $h:=\bigl(\partial_tf+\operatorname{div}(fw)\bigr)(t,\cdot)$ restricted to $\psi_t(B)$, which is integrable by continuity on the compact closure and the diffeomorphism $\psi_t$: $$\int_B\bigl(\partial_tf+\operatorname{div}(fw)\bigr)\bigl(t,\psi(t,X)\bigr)J(t,X)\,dX=\int_{\psi_t(B)}\bigl(\partial_tf+\operatorname{div}(fw)\bigr)(t,x)\,dx .$$ Combining with step 4.1 gives the stated formula at $\tau$; since $\tau\in J_0$ was arbitrary, it holds on all of $J_0$. [F2, step 4.1, algebra] ∎

## Remarks

- The material motion of [[def-cm-continuum-motion]] is the special case $\psi=\chi$, $w=u$; the theorem is stated for a general $C^1$ family so that the control-volume identities can reuse it with an auxiliary boundary velocity. Positivity of $J$ on $B$ is used to rewrite $|\det D\psi_t|$ as $J$ on the reference region; the theorem itself needs only $J\ne0$ there.

- The proof is local at each time in $J_0$: a compact inner time cylinder supplies the integrable majorant. The entire interval $J_0$ need not be bounded. No claim is made about a time interval whose closure meets the boundary of $I$ or about times at which the diffeomorphism family degenerates.

- The proof uses the change-of-variables theorem, which assumes $\mathrm{AC}_\omega$; the axiom is declared here and in the consuming items. No other choice principle is used.
