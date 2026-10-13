---
id: lem-cm-convolution-differentiation
kind: lemma
title: "Differentiation of a variable-limit convolution integral with a C-one matrix kernel"
status: published
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-vector-valued-derivative-and-integral, def-derivative, def-interval, def-ck-euclidean-maps-and-diffeomorphisms, def-vector-valued-functions-limits-and-continuity, def-matrix-space, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm, lem-standard-basis-of-f-n, def-linear-map, def-operator-norm, cor-linear-maps-with-finite-dimensional-domain-are-bounded, thm-additivity-over-subintervals, thm-norm-inequality-for-the-vector-valued-integral, thm-monotonicity-of-the-integral, thm-differentiation-under-the-integral-sign-on-a-compact-rectangle, thm-chain-rule, thm-algebra-of-derivatives, thm-heine-cantor-metric, thm-heine-borel-rn, thm-continuous-implies-integrable, thm-extreme-value-metric]
dependency_roles:
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-vector-valued-functions-limits-and-continuity: mathematical-premise
  def-matrix-space: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  lem-standard-basis-of-f-n: mathematical-premise
  def-linear-map: mathematical-premise
  def-operator-norm: mathematical-premise
  cor-linear-maps-with-finite-dimensional-domain-are-bounded: mathematical-premise
  thm-additivity-over-subintervals: mathematical-premise
  thm-norm-inequality-for-the-vector-valued-integral: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  thm-differentiation-under-the-integral-sign-on-a-compact-rectangle: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-heine-cantor-metric: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: G. Teschl, Ordinary Differential Equations and Dynamical Systems (retrieved 365-page online edition), Section 3.1, printed pp. 59-61 (matrix action and exponential), and Section 3.4, Theorem 3.12, printed pp. 83-84 (variation of constants). The convolution derivative is proved locally.
    url: https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf
  - title: J. Lebl, Basic Analysis I, Section 8.4 (the second fundamental theorem of calculus and differentiation of parameter integrals), online text
    url: https://www.jirka.org/ra/html/sec_svthedercont.html
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, equip $\mathbb R^n$ with the Euclidean inner product and norm of [[def-euclidean-inner-product]], and let $I\subseteq\mathbb R$ be an interval with nonempty interior ([[def-interval]]), let $t_0\in I$, let $U\subseteq\mathbb R$ be an open interval with $I-I:=\{t-s:t,s\in I\}\subseteq U$, let $g:U\to M_n(\mathbb R)$ have $C^1$ entries ([[def-matrix-space]], [[def-ck-euclidean-maps-and-diffeomorphisms]]) and let $f:I\to\mathbb R^n$ be continuous ([[def-vector-valued-functions-limits-and-continuity]]). For $B=(b_{ij})\in M_n(\mathbb R)$ and $v\in\mathbb R^n$, define $(Bv)_i:=\sum_{j<n}b_{ij}v_j$. This is a linear map by the coordinate formula; the Euclidean norm is a norm by [[thm-cauchy-schwarz-and-the-euclidean-norm]], and the standard coordinate vectors form an ordered basis by [[lem-standard-basis-of-f-n]], so the map is bounded by [[cor-linear-maps-with-finite-dimensional-domain-are-bounded]]. Let $\|B\|$ denote its induced operator norm ([[def-operator-norm]]). All matrix actions in the integrals use this convention. Since $0\in I-I\subseteq U$, the value $g(0)$ is defined. Define

$$F:I\longrightarrow\mathbb R^n,\qquad F(t):=\int_{t_0}^t g(t-s)f(s)\,ds,$$

with the oriented integral of [[def-vector-valued-derivative-and-integral]] and the matrix action just defined; the integrand is continuous in $s$, hence integrable on every compact subinterval. Then:

1. $F$ is differentiable at every interior point $t$ of $I$ ([[def-derivative]]) and

$$F'(t)=g(0)f(t)+\int_{t_0}^t g'(t-s)f(s)\,ds .$$

2. If moreover $g'$ is bounded on compact subintervals of $U$ (which holds automatically because $g$ is $C^1$), then $F$ is of class $C^1$ on the interior of $I$.

## Facts & Assumptions

**Given:** A natural number $n\ge1$, an interval $I\subseteq\mathbb R$ with nonempty interior, a point $t_0\in I$, an open interval $U\supseteq I-I$, a $C^1$ matrix curve $g:U\to M_n(\mathbb R)$ and a continuous curve $f:I\to\mathbb R^n$.

[F1] The vector-valued derivative and the oriented Riemann integral are componentwise: $(F')_i=(F_i)'$ and $\bigl(\int_a^b\phi\bigr)_i=\int_a^b\phi_i$, with $\int_a^b=-\int_b^a$; the integral is additive over subintervals and linear in the integrand ([[def-vector-valued-derivative-and-integral]], [[thm-additivity-over-subintervals]]).

[F2] For $a<b$ and an integrable $\phi:[a,b]\to\mathbb R^n$ one has $\bigl\|\int_a^b\phi\bigr\|_2\le\int_a^b\|\phi\|_2$, and for real integrable $u\le v$ one has $\int_a^bu\le\int_a^bv$ ([[thm-norm-inequality-for-the-vector-valued-integral]], [[thm-monotonicity-of-the-integral]]). Consequently, for a continuous $\psi$ on the interval with endpoints $a$ and $a+h$, $h\ne0$, $$\Bigl\|\frac1h\int_a^{a+h}\psi\Bigr\|_2\le\sup_{s}\|\psi(s)\|_2,$$ the supremum over that interval.

[F3] Leibniz's rule on a compact rectangle: if $G,H:[a,b]\times[c,d]\to\mathbb R$ are continuous and for every fixed $t\in[c,d]$ the slice $x\mapsto G(x,t)$ is differentiable on $(a,b)$ with derivative $H(x,t)$, then $x\mapsto\int_c^dG(x,t)\,dt$ is differentiable on $[a,b]$ with derivative $\int_c^dH(x,t)\,dt$ ([[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]]). The component maps below satisfy these hypotheses: sums and products of $C^1$ functions are $C^1$ by the chain rule and the algebra of derivatives ([[thm-chain-rule]], [[thm-algebra-of-derivatives]]).

[F4] A closed rectangle in $\mathbb R^2$ is compact ([[thm-heine-borel-rn]]), a continuous map on a compact metric space is uniformly continuous ([[thm-heine-cantor-metric]]), and a continuous real function on a compact interval is bounded and Riemann integrable ([[thm-continuous-implies-integrable]], [[thm-extreme-value-metric]]).

[F5] Differentiability at $t$ means that the difference quotients $[F(t+h)-F(t)]/h$ converge to $F'(t)$ as $h\to0$ through nonzero values ([[def-derivative]]).

[F6] The matrix action is linear by its coordinate formula ([[def-matrix-space]], [[def-linear-map]]). The Euclidean inner product and norm are those of [[def-euclidean-inner-product]], this norm makes $\mathbb R^n$ a normed space by [[thm-cauchy-schwarz-and-the-euclidean-norm]], and the standard coordinate vectors form an ordered basis by [[lem-standard-basis-of-f-n]]. Hence each such matrix action is a bounded linear operator by [[cor-linear-maps-with-finite-dimensional-domain-are-bounded]], and its induced operator norm is $\|B\|$ ([[def-operator-norm]]).

## Proof

**Proof technique:** direct; split the difference quotient into a parameter-derivative term and a moving-endpoint term, take the two limits separately, then check continuity of the derivative.

1.1 Fix $t\in\mathring I$ and choose $\eta>0$ with $[t-\eta,t+\eta]\subseteq I$ and $[-\eta,\eta]\subseteq U$. For $0<|h|\le\eta$, additivity and linearity of the integral [F1] give $$F(t+h)-F(t)=\int_{t_0}^{t}\bigl[g(t+h-s)-g(t-s)\bigr]f(s)\,ds+\int_{t}^{t+h}g(t+h-s)f(s)\,ds,$$ with the second integral oriented and taken over the interval with endpoints $t$ and $t+h$; both integrands are continuous on their compact intervals, since every difference of two points of $I$ lies in $I-I\subseteq U$. [F1, given]

2.1 For a component index $i<n$, put $\phi_i(u,s):=\bigl(g(u-s)f(s)\bigr)_i=\sum_{j<n} g_{ij}(u-s)f_j(s)$ for $(u,s)\in[t-\eta,t+\eta]\times J$, where $J$ is the compact interval with endpoints $t_0$ and $t$. This is continuous, and for fixed $s$ it is differentiable in $u$ with $\partial_u\phi_i(u,s)=\sum_{j<n}g_{ij}'(u-s)f_j(s)$, which is continuous on the rectangle; [F3] therefore gives $$\lim_{h\to0}\frac1h\int_{t_0}^{t}\bigl[g(t+h-s)-g(t-s)\bigr]f(s)\,ds=\int_{t_0}^{t}g'(t-s)f(s)\,ds,$$ for $t_0<t$ directly, and for $t_0>t$ after reversing the orientation and applying [F3] on $[t,t_0]$; [F1] identifies the components. [step 1.1, F1, F3, F6, given]

2.2 For the second term put $\psi_h(s):=g(t+h-s)f(s)$ on the interval with endpoints $t$ and $t+h$. Since $g(0)f(t)$ is the value of the constant function $g(0)f(t)$ there, [F1] gives $$\frac1h\int_t^{t+h}g(t+h-s)f(s)\,ds-g(0)f(t)=\frac1h\int_t^{t+h}\bigl[\psi_h(s)-g(0)f(t)\bigr]ds,$$ and [F2] bounds its norm by $\sup_s\|\psi_h(s)-g(0)f(t)\|_2=\sup_s\|g(t+h-s)f(s)-g(0)f(t)\|_2$ over the interval with endpoints $t$ and $t+h$. As $h\to0$ the arguments $t+h-s$ lie between $0$ and $h$ (in either order) and tend to $0$, and $s\to t$, so continuity of $g$ at $0$ and of $f$ at $t$ makes this supremum tend to $0$; hence the second term tends to $g(0)f(t)$. [step 1.1, F1, F2, F4, F6, given]

3.1 Dividing the identity of step 1.1 by $h$, the two summands are precisely the terms analysed in steps 2.1 and 2.2; their limits exist and sum to $g(0)f(t)+\int_{t_0}^tg'(t-s)f(s)\,ds$. By [F5] this is exactly the differentiability assertion of clause 1 at $t$, and $t\in\mathring I$ was arbitrary. [step 1.1, step 2.1, step 2.2, F5]

4.1 For clause 2 write $F'(t)=g(0)f(t)+H(t)$ by step 3.1, with $H(t):=\int_{t_0}^tg'(t-s)f(s)\,ds$. The term $g(0)f(t)$ is continuous. Fix $t_1\in\mathring I$, let $J_0$ be the closed interval with endpoints $t_0,t_1$, and put $Q:=t_1-J_0=[\alpha,\beta]\subseteq I-I\subseteq U$. Since $U$ is an open interval containing the compact interval $Q$, choose $\eta>0$ small enough that $[t_1-\eta,t_1+\eta]\subseteq I$ and $K_0:=[\alpha-\eta,\beta+\eta]\subseteq U$. Put $J_1:=[\min(t_0,t_1-\eta),\max(t_0,t_1+\eta)]\subseteq I$. For $t\in[t_1-\eta/2,t_1+\eta/2]$, additivity [F1] gives $$H(t)-H(t_1)=\int_{t_1}^{t}g'(t-s)f(s)\,ds+\int_{t_0}^{t_1}\bigl[g'(t-s)-g'(t_1-s)\bigr]f(s)\,ds .$$ In the first integral, $s$ lies between $t_1$ and $t$, so $t-s\in K_0$; in the second, $u:=t_1-s\in Q$ and $t-s=u+(t-t_1)\in K_0$. By [F2], the first integral has norm at most $|t-t_1|\sup_{u\in K_0}\|g'(u)\|\sup_{s\in J_1}\|f(s)\|_2$, which tends to $0$. The second has norm at most $|t_1-t_0|\sup_{s\in J_0}\|f(s)\|_2\sup_{u\in Q,\ |\delta|\le|t-t_1|}\|g'(u+\delta)-g'(u)\|$, which tends to $0$ by uniform continuity of the matrix-valued $g'$ on $K_0$. Hence $H$ is continuous at $t_1$, so $F'$ is continuous on $\mathring I$, proving clause 2. [step 3.1, F1, F2, F4, F6] ∎
