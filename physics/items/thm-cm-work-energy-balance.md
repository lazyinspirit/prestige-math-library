---
id: thm-cm-work-energy-balance
kind: theorem
title: "Work-energy balance $\\frac{d}{dt}\\bigl(K+U(t,x(t))\\bigr)=\\partial_tU(t,x(t))+\\sum_i\\langle d_i(t),x_i'(t)\\rangle$ for forces $m_ix_i''=-\\nabla_{x_i}U+d_i$"
status: published
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [lem-cm-derivative-of-pairings-of-curves, def-ck-euclidean-maps-and-diffeomorphisms, def-euclidean-inner-product, def-jacobian-matrix-and-gradient, def-total-derivative-in-euclidean-space, def-vector-valued-derivative-and-integral, def-interval, thm-chain-rule-for-total-derivatives, thm-continuous-partial-derivatives-imply-total-differentiability, thm-total-derivative-computes-directional-and-partial-derivatives, cor-zero-derivative-implies-constant, lem-finite-sum-laws, thm-algebra-of-derivatives]
dependency_roles:
  lem-cm-derivative-of-pairings-of-curves: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
  thm-total-derivative-computes-directional-and-partial-derivatives: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  lem-finite-sum-laws: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Classical Dynamics (University of Cambridge), §1.3.2, Eqs. (1.22)-(1.25), printed pp. 8-9: kinetic-energy splitting and $d(T+V)/dt=\\partial_tV$ for conservative forces"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics, §1.3, Eqs. (1.19)-(1.27), printed pp. 8-10: work-energy balance for a time-dependent potential"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Statement

Let $N\ge1$, let $I\subseteq\mathbb R$ be an interval with at least two points ([[def-interval]]), let $Q\subseteq\mathbb R^{3N}$ be nonempty and open, and let $U:I\times Q\to\mathbb R$ be the restriction of a function $\widehat U:J\times Q\to\mathbb R$ of class $C^1$, where $J\subseteq\mathbb R$ is an open interval containing $I$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]). Write points of $Q$ as $q=(q_1,\dots,q_N)$ with $q_i\in\mathbb R^3$; for $t\in I$, $q\in Q$ and each $i$ let $\nabla_{x_i}U(t,q)\in\mathbb R^3$ be the gradient of $u\mapsto U(t,q_1,\dots,q_{i-1},u,q_{i+1},\dots,q_N)$ at $u=q_i$ ([[def-jacobian-matrix-and-gradient]]), and let $\partial_tU$ and the spatial derivatives on $I\times Q$ denote the derivatives of $\widehat U$ restricted there. At an included endpoint of $I$, derivatives of curves are limits relative to $I$ (one-sided there); this preserves closed and half-open time intervals. Let $m_1,\dots,m_N>0$, let $x:I\to Q$ be twice differentiable ([[def-vector-valued-derivative-and-integral]]), put $K(t):=\frac12\sum_im_i\lVert x_i'(t)\rVert_2^2$ (Euclidean norm, [[def-euclidean-inner-product]]), let $d_i:I\to\mathbb R^3$ be maps, and suppose

$$m_ix_i''(t)=-\nabla_{x_i}U\bigl(t,x(t)\bigr)+d_i(t)\qquad(t\in I,\ 1\le i\le N).$$

Then:

1. $K$ is differentiable on $I$ with $K'(t)=\sum_i\langle m_ix_i''(t),x_i'(t)\rangle$;
2. $t\mapsto U(t,x(t))$ is differentiable on $I$ with $$\frac{d}{dt}U\bigl(t,x(t)\bigr)=\partial_tU\bigl(t,x(t)\bigr)+\sum_i\bigl\langle\nabla_{x_i}U\bigl(t,x(t)\bigr),x_i'(t)\bigr\rangle;$$
3. consequently $$\frac{d}{dt}\Bigl(K(t)+U\bigl(t,x(t)\bigr)\Bigr)=\partial_tU\bigl(t,x(t)\bigr)+\sum_i\langle d_i(t),x_i'(t)\rangle\qquad(t\in I);$$ in particular, if $d_i\equiv0$ for all $i$ then $\frac{d}{dt}\bigl(K+U(t,x(t))\bigr)=\partial_tU(t,x(t))$, and if in addition $\partial_tU\equiv0$ then $t\mapsto K(t)+U(t,x(t))$ is constant on $I$.

## Facts & Assumptions

**Given:** The data of the statement: $N\ge1$, an interval $I$ with at least two points, open $Q\subseteq\mathbb R^{3N}$, a function $U:I\times Q\to\mathbb R$ with the stated $C^1$ extension $\widehat U$ to $J\times Q$, positive masses $m_i$, a twice differentiable $x:I\to Q$, and maps $d_i:I\to\mathbb R^3$ with $m_ix_i''=-\nabla_{x_i}U(t,x(t))+d_i$ on $I$.

[L1] For a differentiable curve $u:I\to\mathbb R^3$, the function $t\mapsto\lVert u(t)\rVert_2^2$ is differentiable with derivative $2\langle u'(t),u(t)\rangle$ ([[lem-cm-derivative-of-pairings-of-curves]], [[def-vector-valued-derivative-and-integral]]); sums and scalar multiples of differentiable real functions are differentiable with the sum and scalar-multiple rules ([[thm-algebra-of-derivatives]]).

[L2] Total differentiability and the chain rule: if $g$ is totally differentiable at $a$ and $f$ at $g(a)$, then $D(f\circ g)(a)=Df(g(a))\circ Dg(a)$ ([[def-total-derivative-in-euclidean-space]], [[thm-chain-rule-for-total-derivatives]]). A $C^1$ map is totally differentiable at every point, and its total derivative at $a$ is the linear map with matrix the Jacobian $Jf(a)$ ([[thm-continuous-partial-derivatives-imply-total-differentiability]], [[def-jacobian-matrix-and-gradient]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[L3] The total derivative computes directional derivatives: $D_vf(a)=Df(a)v$ ([[thm-total-derivative-computes-directional-and-partial-derivatives]]).

[L4] The Euclidean inner product is bilinear and symmetric, $\langle u,w\rangle=\sum_{k<3}u_kw_k$ ([[def-euclidean-inner-product]]), and finite sums are linear ([[lem-finite-sum-laws]]).

[L5] A differentiable real function with zero derivative on an interval is constant ([[cor-zero-derivative-implies-constant]]).

## Proof

**Proof technique:** direct.

1.1 Each $x_i'$ is differentiable on $I$ because $x$ is twice differentiable, so [L1] gives differentiability of $t\mapsto\lVert x_i'(t)\rVert_2^2$ with derivative $2\langle x_i''(t),x_i'(t)\rangle$; by the sum and scalar rules of [L1] and linearity of the finite sum [L4], $K$ is differentiable with $$K'=\tfrac12\sum_im_i\cdot2\langle x_i'',x_i'\rangle=\sum_i\langle m_ix_i'',x_i'\rangle,$$ which is clause 1. [given, L1, L4, algebra]


1.2 The curve $\gamma:I\to\mathbb R\times Q$, $\gamma(t):=(t,x(t))$, is differentiable (its components are the identity and the components of $x$; [[def-vector-valued-derivative-and-integral]]), with $\gamma'(t)=(1,x'(t))$ under the identification $\mathbb R\times\mathbb R^{3N}=\mathbb R^{1+3N}$. Since $\widehat U$ is $C^1$ on the open neighborhood $J\times Q$ of $\gamma(I)$, [L2] gives the usual chain rule at interior points. At an included endpoint, $\gamma(t+h)=\gamma(t)+h\gamma'(t)+o(h)$ as $h\to0$ relative to $I$, and total differentiability gives $\widehat U(\gamma(t)+v)=\widehat U(\gamma(t))+D\widehat U(\gamma(t))v+o(|v|)$. Substituting the first expansion into the second proves the same relative derivative there. Thus $(U\circ\gamma)'(t)=D\widehat U(\gamma(t))\gamma'(t)$, and [L3] evaluates the right side as the matrix product of the Jacobian of $U$ at $\gamma(t)$ with $(1,x'(t))$, that is $$\frac{d}{dt}U(t,x(t))=\partial_tU(t,x(t))+\sum_i\sum_{k<3}\partial_{i,k}U(t,x(t))\,x_{i,k}'(t)=\partial_tU(t,x(t))+\sum_i\bigl\langle\nabla_{x_i}U(t,x(t)),x_i'(t)\bigr\rangle,$$ the last step regrouping the coordinates of $Q$ into the $N$ blocks $\mathbb R^3$ and using the coordinate formula for the inner product [L4]; this is clause 2. [given, L2, L3, L4, algebra]


2.1 Adding the identities of clauses 1 and 2 and substituting $m_ix_i''=-\nabla_{x_i}U(t,x(t))+d_i$, the two occurrences of $\sum_i\langle\nabla_{x_i}U(t,x(t)),x_i'(t)\rangle$ cancel, leaving clause 3. If $d_i\equiv0$ the derivative is $\partial_tU(t,x(t))$, and if also $\partial_tU\equiv0$ then the derivative of $K+U(t,x(t))$ vanishes identically on the interval $I$, so that function is constant by [L5]. [step 1.1, step 1.2, given, L4, L5, algebra] ∎
