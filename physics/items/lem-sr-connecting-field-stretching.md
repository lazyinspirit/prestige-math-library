---
id: lem-sr-connecting-field-stretching
kind: lemma
title: "The material metric of a congruence: evolution of rest separations and preservation of the internal metric under Born rigidity"
status: published
origin: pipeline
domain: mathematics
dependency_level: 13
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-sr-observer-congruence-and-kinematics, def-flat-covariant-derivative-on-affine-minkowski-space, def-lie-bracket-of-smooth-vector-fields, prop-coordinate-formula-for-the-lie-bracket, def-vector-field-and-section-along-a-smooth-curve, def-sr-regular-causal-curve-and-worldline, def-sr-proper-time, def-sr-four-velocity-and-four-acceleration, thm-sr-proper-time-and-observer-decomposition, def-derivative, thm-algebra-of-derivatives, thm-chain-rule, def-ck-tensor-field-on-minkowski-space, def-sr-affine-minkowski-model, thm-sr-tensor-and-current-transformation, thm-chain-rule-for-total-derivatives, thm-clairaut-schwarz-mixed-partials, cor-zero-derivative-implies-constant, def-directional-and-partial-derivatives, thm-algebra-of-continuous-functions]
dependency_roles:
  def-sr-observer-congruence-and-kinematics: mathematical-premise
  def-flat-covariant-derivative-on-affine-minkowski-space: mathematical-premise
  def-lie-bracket-of-smooth-vector-fields: mathematical-premise
  prop-coordinate-formula-for-the-lie-bracket: mathematical-premise
  def-vector-field-and-section-along-a-smooth-curve: mathematical-premise
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-sr-proper-time: mathematical-premise
  def-sr-four-velocity-and-four-acceleration: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-derivative: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  def-ck-tensor-field-on-minkowski-space: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  thm-sr-tensor-and-current-transformation: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-algebra-of-continuous-functions: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: "D. Giulini, 'Algebraic and geometric structures of Special Relativity', arXiv:math-ph/0602018v2: Section 5.5 'Rigid motion' pp. 41-49 (Born's definition of rigid motion L_u h = 0, equation (123), the projected-metric identity (126) and the Rindler rod example); signature (+---) converted to (-+++), u^2 = c^2 converted to eta(n,n) = -1"
      url: "https://arxiv.org/pdf/math-ph/0602018"
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Sections 9.5.1-9.5.2 'Congruences' and 'Expansion and rigidity' pp. 205-207 (timelike congruences, the expansion of the Bell congruence, and the statement that a congruence with expansion puts a solid object under increasing tension); signature (+---) converted to (-+++), c = 1 formulas restored to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
aliases: []
---

## Statement

Let $\Omega$ be a nonempty open subset of affine Minkowski space $A$, $c>0$, and let $n:\Omega\to V$ be a $C^1$ future unit timelike field, $\eta(n,n)=-1$. Define the following first-order quantities in any inertial chart:

$$h^a{}_b:=\delta^a{}_b+n^an_b,\qquad h_{ab}:=\eta_{ab}+n_an_b,\qquad a^b:=n^c\partial_cn^b,\qquad\theta_{ab}:=h_a{}^ch_b{}^d\partial_{(c}n_{d)},$$

where symmetrization means half the sum, $n_a:=\eta_{ab}n^b$, and $h(v,w):=h_{ab}v^aw^b$. Here $h$ is $C^1$ and $a,\theta$ are continuous. The rest projection $h(v):=v+\eta(n,v)n$ is as in [[thm-sr-proper-time-and-observer-decomposition]] (c). For $C^1$ fields and tensors define

$$(L_nh)_{ab}:=n^c\partial_ch_{ab}+h_{cb}\partial_an^c+h_{ac}\partial_bn^c.$$

For smooth data, define the ordinary Lie derivative by $(\mathcal L_nh)(X,Y):=n(h(X,Y))-h([n,X],Y)-h(X,[n,Y])$ for smooth vector fields $X,Y$; the brackets have the coordinate formula of [[prop-coordinate-formula-for-the-lie-bracket]]. These first-order coordinate formulas transform tensorially under affine inertial chart changes and agree, on smooth fields, with [[def-sr-observer-congruence-and-kinematics]], [[def-flat-covariant-derivative-on-affine-minkowski-space]] and the ordinary smooth Lie derivative. Say the $C^1$ field is **Born rigid** when $L_nh=0$; the identity $L_nh=2\theta$ makes this equivalent to $\theta=0$.

(a) Let $J$ be a nonempty open interval, $B\subseteq\mathbb R^3$ a nonempty open set, and $\Phi:J\times B\to\Omega$ an injective $C^2$ immersion with $\partial_s\Phi=n(\Phi)$. Put $e_I:=\partial_{\xi^I}\Phi$, $I=1,2,3$, and $G_{IJ}(s,\xi):=h(e_I,e_J)$ at $\Phi(s,\xi)$. Then $n,e_1,e_2,e_3$ are linearly independent, $G$ is symmetric positive definite at every point, and its entries are $C^1$. Thus for each $s$ it is a $C^1$ positive-definite material metric on $B$. If $n$ and $\Phi$ are smooth, $G$ is a smooth Riemannian metric, as in the original smooth branch.

(b) For all $I,J$,

$$\partial_sG_{IJ}=(L_nh)(e_I,e_J)=2\theta(e_I,e_J),\qquad\partial_\tau G_{IJ}=2c\theta(e_I,e_J),$$

where $\tau=s/c$ is the proper-time parameter along each flow line, whose four-velocity is $cn$. For a nonzero label direction $e_I$, put $\ell_I:=\sqrt{h(e_I,e_I)}>0$ and $u_I:=h(e_I)/\ell_I$. This $u_I$ is a horizontal unit rest vector, and

$$\partial_\tau\ell_I=c\theta(u_I,u_I)\ell_I.$$

The alternative normalized material vector $e_I/\ell_I$ need not be horizontal, but has the same $\theta$ contraction because $\theta$ is horizontal. Positive/negative expansion gives positive/negative fractional change of this material rest length per proper time.

(c) If $\theta=0$, then $\partial_sG_{IJ}=0$ and $G_{IJ}(s,\xi)$ is constant in $s$ for each fixed label, with no restriction on material-label separation: the entire internal metric is preserved exactly. Conversely, a nonzero contraction $\theta(e_I,e_J)$ gives a nonzero derivative of that metric component at the point and hence nonconstancy on a neighbourhood. The smooth Born-rigid branch and its original conclusions are included.

(d) This is a local statement about the given family and its material metric. Integrating the material metric at a common flow parameter gives an internal label-space length; it does not identify that length with a finite endpoint distance on a single observer's orthogonal simultaneity hyperplane without an additional argument. No matter model, elasticity, field equation, global rigidity theorem, boundary condition or choice principle is used.

## Facts & Assumptions

**Given:** The affine Minkowski space $(A,V,\eta,C^+)$ with canonical identification $T_pA=V$, a nonempty open $\Omega\subseteq A$, a $C^1$ future unit timelike field $n:\Omega\to V$ with $\eta(n,n)=-1$, an inertial chart, the first-order coordinate formulas of the statement, and, in (a)-(c), a nonempty open interval $J$, a nonempty open $B\subseteq\mathbb R^3$ and an injective $C^2$ immersion $\Phi:J\times B\to\Omega$ with $\partial_s\Phi=n(\Phi)$, with $e_I:=\partial_{\xi^I}\Phi$ and $G_{IJ}:=h(e_I,e_J)$.

[L1] The rest form and projection: $h(v,w)=\eta(v,w)+\eta(n,v)\eta(n,w)=\eta(h(v),h(w))$ with $h(v)=v+\eta(n,v)n$; $h$ is symmetric with radical spanned by $n$ and is positive definite on $n^\perp$; the congruence acceleration $a:=\nabla_nn$ satisfies $\eta(n,a)=0$ ([[def-sr-observer-congruence-and-kinematics]] (a),(b)).

[L2] Kinematic decomposition and Born rigidity: $\nabla_an_b=-n_aa_b+\theta_{ab}+\omega_{ab}$ with $\theta_{ab}=h_a{}^ch_b{}^d\nabla_{(c}n_{d)}$ symmetric and horizontal in both slots, $\theta_{ab}n^b=n^a\theta_{ab}=0$, and $(L_nh)_{ab}=2\theta_{ab}$; Born rigidity, defined by $L_nh=0$, is therefore equivalent to $\theta=0$ ([[def-sr-observer-congruence-and-kinematics]] (c),(d)).

[L3] In an inertial chart $\eta$ has constant components, $\partial_a\eta_{bc}=0$, and $(\nabla_XY)^a=X^b\partial_bY^a$; the same component formula and metric compatibility hold for $C^1$ data ([[def-flat-covariant-derivative-on-affine-minkowski-space]] (a),(c),(e)).

[L4] Derivatives of the components of a $C^1$ vector field $Y$ along a $C^1$ curve $y$ are ordinary derivatives, $(\nabla_{\dot y}Y)^a=\frac{d}{ds}(Y^a\circ y)$, and $s\mapsto Y(y(s))$ is $C^1$ by the total chain rule [L9] ([[def-flat-covariant-derivative-on-affine-minkowski-space]] (d),(e)). The smooth bundle-section definition in [[def-vector-field-and-section-along-a-smooth-curve]] applies only in the smooth branch; here a field along a curve means explicitly a $C^1$ map into the canonically identified $V$.

[L5] Rest projection identities: $h\circ h=h$, $\operatorname{im}h=n^\perp$, $\ker h=\operatorname{span}(n)$, $h(n)=0$, $\eta(n,h(v))=0$, $v=-\eta(n,v)n+h(v)$, and $w\mapsto\sqrt{\eta(w,w)}$ is a norm on $n^\perp$ ([[thm-sr-proper-time-and-observer-decomposition]] (c)).

[L6] Proper time: for a $C^1$ future timelike worldline $x$ one has $\tau(b)-\tau(a)=c^{-1}\int_a^b\sqrt{-\eta(x',x')}\,du$; along a flow line of $n$ parametrized with tangent $x'=n$ this gives $d\tau/ds=1/c$, so $\partial_\tau=c\,\partial_s$ ([[def-sr-proper-time]]).

[L7] Four-velocity: $U=x'/\tau'=cx'/\sqrt{-\eta(x',x')}$; for a congruence flow line with $x'=n$ this is $U=cn$, and $\eta(U,U)=-c^2$ ([[def-sr-four-velocity-and-four-acceleration]] (a),(c), [[thm-sr-proper-time-and-observer-decomposition]] (a)).

[L8] Tensoriality: under an inertial chart change $x'=\Lambda x+b$ one has $J'^a=\Lambda^a_bJ^b$, $k'_a=(\Lambda^{-1})^b_ak_b$, $\partial'_a=(\Lambda^{-1})^b_a\partial_b$, and each contravariant index gains $\Lambda$ while each covariant index gains $\Lambda^{-1}$ ([[thm-sr-tensor-and-current-transformation]] (i)-(iv)).

[L9] Total chain rule: for composable $C^1$ maps of open subsets of Euclidean spaces, $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$ ([[thm-chain-rule-for-total-derivatives]], [[thm-chain-rule]]).

[L10] Equality of mixed partials: for a $C^2$ map the second-order mixed partials in the two orders agree ([[thm-clairaut-schwarz-mixed-partials]]).

[L11] Algebra of continuous functions: sums, scalar multiples and products of continuous real functions are continuous ([[thm-algebra-of-continuous-functions]], claims 1 and 5), and sums, scalar multiples and products of differentiable functions are differentiable with $(fg)'=f'g+fg'$ ([[thm-algebra-of-derivatives]], claim 3).

[L12] A continuous function on an order-convex interval whose derivative vanishes at every interior point is constant ([[cor-zero-derivative-implies-constant]]).

[L13] For smooth fields, $[X,Y]^a=X^b\partial_bY^a-Y^b\partial_bX^a$ ([[def-lie-bracket-of-smooth-vector-fields]], [[prop-coordinate-formula-for-the-lie-bracket]]). The ordinary smooth Lie derivative is defined by the evaluation formula in the Statement; its coordinate expression is derived in step 3.2.

[L14] Partial derivatives of a real function of several variables are defined by differentiating in one variable with the others fixed ([[def-directional-and-partial-derivatives]], [[def-derivative]]).

[L15] Model structure: $T_pA$ is canonically identified with $V$, so the differential of a map into $A$ may be read as a $V$-valued derivative ([[def-sr-affine-minkowski-model]], [[def-ck-tensor-field-on-minkowski-space]]).

## Proof

**Proof technique:** direct.

1.1 (Tensoriality and smooth agreement.) Fix an inertial chart and expand the definitions: $h^a{}_b=\delta^a{}_b+n^an_b$, $h_{ab}=\eta_{ab}+n_an_b$, $a^b=n^c\partial_cn^b$, $\theta_{ab}=\frac12h_a{}^ch_b{}^d(\partial_cn_d+\partial_dn_c)$, and $(L_nh)_{ab}=n^c\partial_ch_{ab}+h_{cb}\partial_an^c+h_{ac}\partial_bn^c$; under the inertial chart change the factors $\Lambda$ and $\Lambda^{-1}$ produced by [L8] contract pairwise with the Kronecker deltas, with the components of $n$ and of every derivative, so each displayed formula is a sum of products of components of $n$, of $\partial n$ and of the constant $\eta$, multiplied by the same index factors in the new chart; this is exactly the tensorial transformation law of [L8], and no connection terms appear by [L3]. [L3, L8, L9, L14]

1.2 (Two first-order identities.) Differentiating the identity $\eta(n,n)=-1$ in an inertial chart and using $\partial\eta=0$ of [L3] gives $2\eta_{ab}n^a\partial_cn^b=0$, that is $n_b\partial_cn^b=0$ for every $c$; contracting with $n^c$ and relabelling, $n_ca^c=n^a\eta_{ab}n^d\partial_dn^b=0$, so $a$ is $\eta$-orthogonal to $n$. Similarly, $h_a{}^ch_b{}^d\partial_cn_d=\partial_an_b+n_aa_b$: expand the two projectors, discard the two terms containing $n^d\partial_an_d$ and $n^cn^d\partial_cn_d$, both of which vanish by the first identity, and use $n^c\partial_cn_b=a_b$. [L1, L2, L3, L11, L14]

1.3 (Independence of the family directions.) Since $\Phi$ is an immersion, its differential $D\Phi(s,\xi)$ is injective at every point of $J\times B$, and the four partial derivatives $\partial_s\Phi,e_1,e_2,e_3$ are the columns of $D\Phi$; a linear relation $\mu\,\partial_s\Phi+\sum_I\lambda^Ie_I=0$ therefore has all coefficients zero. Substituting $\partial_s\Phi=n(\Phi(s,\xi))$ gives that $n(\Phi(s,\xi)),e_1,e_2,e_3$ are linearly independent at every point, so in particular $e_1,e_2,e_3$ are linearly independent and $\operatorname{span}(e_1,e_2,e_3)\cap\operatorname{span}(n(\Phi))=\{0\}$. [L15, given]

1.4 (The family is a congruence of worldlines; material fields.) For each fixed $\xi$ the curve $y_\xi(s):=\Phi(s,\xi)$ satisfies $y_\xi'(s)=n(\Phi(s,\xi))$, a nonzero future timelike vector with $\eta(n,n)=-1$ by [L1]; hence $y_\xi$ is a $C^1$ regular future timelike curve, and it is a future timelike worldline of the model. Its proper-time function satisfies $d\tau/ds=1/c$ and $\partial_\tau=c\partial_s$ by [L6]; the associated four-velocity is $U=cn$ by [L7]. For each $I$, $s\mapsto e_I(s,\xi)$ is a $C^1$ $V$-valued field along $y_\xi$, using the canonical affine identification and the $C^1$ along-curve convention of [L4]. [L1, L4, L6, L7, given]

2.1 (The identity $L_nh=2\theta$.) Expanding $h_{ab}=\eta_{ab}+n_an_b$ and differentiating gives $(L_nh)_{ab}=n^c(n_a\partial_cn_b+n_b\partial_cn_a)+\partial_an_b+n_bn_c\partial_an^c+\partial_bn_a+n_an_c\partial_bn^c$; by the vanishing identities of step 1.2 this equals $\partial_an_b+\partial_bn_a+n_aa_b+n_ba_a$, which is the right-hand side of $2\theta_{ab}=h_a{}^ch_b{}^d(\partial_cn_d+\partial_dn_c)$ computed in step 1.2; hence $(L_nh)_{ab}=2\theta_{ab}$ and Born rigidity $L_nh=0$ is equivalent to $\theta=0$. [L2, L3, step 1.2, algebra]

2.2 (Metricity of $G$ and its $C^1$ regularity.) $G_{IJ}(s,\xi)=h_{ab}(\Phi(s,\xi))e_I^a(s,\xi)e_J^b(s,\xi)$ is symmetric because $h$ is symmetric by [L1]. For $w=w^Ie_I\ne0$, $G(w,w)=h(w,w)=\eta(h(w),h(w))\ge0$ with equality if and only if $h(w)=0$, i.e. by [L5] if and only if $w\in\operatorname{span}(n(\Phi))$; step 1.3 shows that this forces $w=0$, so $G$ is positive definite at every point. Regularity: $\Phi$ is $C^2$, so the components of $e_I=\partial_{\xi^I}\Phi$ and of $\Phi$ are $C^1$ functions on $J\times B$; $n$ is a $C^1$ field, so the components $n_a(\Phi(s,\xi))$ are compositions of $C^1$ maps, and each $G_{IJ}$ is a sum of products of such $C^1$ functions, hence $C^1$ by [L11] applied componentwise with the partial derivatives of [L14]; when $n$ and $\Phi$ are smooth all these compositions and products are smooth. In particular, for each fixed $s$, $\xi\mapsto G_{IJ}(s,\xi)$ is a $C^1$ positive-definite Riemannian metric on $B$. [L1, L5, L11, L14, step 1.3, step 1.4, algebra]

2.3 (Derivative of the material directions.) On $J\times B$ the components satisfy $\partial_se_I^a=\partial_s\partial_{\xi^I}\Phi^a=\partial_{\xi^I}(n^a\circ\Phi)$, because the mixed partials of the $C^2$ map $\Phi$ commute by [L10] and $\partial_s\Phi=n(\Phi)$; applying the chain rule of [L9] to the composite $\xi\mapsto n^a(\Phi(s,\xi))$ with the other variables fixed gives $\partial_se_I^a=(\partial_bn^a)(\Phi)e_I^b$. Equivalently, $\partial_se_I=(\nabla_{e_I}n)(\Phi)$ by the component formula of [L3] for $C^1$ data. [L3, L9, L10, step 1.4]

3.1 (Evolution of the material metric.) Differentiate the product $G_{IJ}=h_{ab}(\Phi)e_I^ae_J^b$ with the product rule of [L11] and the total chain rule of [L9], using $\partial_s\Phi^c=n^c(\Phi)$ and step 2.3: $\partial_sG_{IJ}=(n^c\partial_ch_{ab})(\Phi)e_I^ae_J^b+h_{ab}(\Phi)(\partial_cn^a)(\Phi)e_I^ce_J^b+h_{ab}(\Phi)e_I^a(\partial_cn^b)(\Phi)e_J^c$. Relabelling the second term to $(h_{cb}\partial_an^c)(\Phi)e_I^ae_J^b$ and the third to $(h_{ac}\partial_bn^c)(\Phi)e_I^ae_J^b$ gives exactly $(L_nh)_{ab}(\Phi)e_I^ae_J^b$; by step 2.1 this is $2\theta_{ab}(\Phi)e_I^ae_J^b=2\theta(e_I,e_J)$, and multiplication by $\partial_\tau/\partial_s=c$ from [L6] gives $\partial_\tau G_{IJ}=2c\theta(e_I,e_J)$. [L6, L9, L11, step 2.1, step 2.3, algebra]

3.2 (Smooth branch.) If $n$ and $\Phi$ are smooth, step 2.2 gives that $G$ is a smooth metric on $B$ for each $s$; evaluating the $C^1$ formula of the statement, $(L_nh)_{ab}=n^c\partial_ch_{ab}+h_{cb}\partial_an^c+h_{ac}\partial_bn^c$ agrees with that evaluation definition: substituting the bracket formula [L13] and the product rule into $n(h(X,Y))-h([n,X],Y)-h(X,[n,Y])$ cancels the derivatives of $X,Y$, leaving $(n^c\partial_ch_{ab}+h_{cb}\partial_an^c+h_{ac}\partial_bn^c)X^aY^b$, and the identity $(L_nh)_{ab}=2\theta_{ab}$ of step 2.1 together with [L2] recovers the smooth congruence definitions of expansion and of Born rigidity. [L2, L13, step 2.1, step 2.2]

4.1 (Rest length and its fractional rate.) For a nonzero label direction $e_I$ put $\ell_I=\sqrt{G_{II}}>0$. Its $h$-normalized direction $u_I:=h(e_I)/\ell_I$ satisfies $h(u_I)=u_I$ and $h(u_I,u_I)=1$: indeed $h(h(v))=h(v)$ and $\eta(h(v),h(w))=h(v,w)$ by [L1] and [L5], with $\eta(h(e_I),h(e_I))=h(e_I,e_I)=\ell_I^2$, so $u_I$ is a horizontal unit vector. Because $\theta$ is horizontal and symmetric by [L2], $\theta(v,w)=\theta(h(v),h(w))$ for all $v,w$, so $\theta(e_I,e_I)=\ell_I^2\theta(u_I,u_I)$ and also $\theta(e_I/\ell_I,e_I/\ell_I)=\theta(u_I,u_I)$. The square root is continuous at each positive $G_{II}$, since $|\sqrt{u}-\sqrt{v}|=|u-v|/(\sqrt{u}+\sqrt{v})$ and the denominator is bounded below near $v>0$. At a fixed label its difference quotient is $(G_{II}(s+\varepsilon)-G_{II}(s))/[\varepsilon(\ell_I(s+\varepsilon)+\ell_I(s))]$, so $\partial_s\ell_I=\partial_sG_{II}/(2\ell_I)$ by [L14]. Using step 3.1 and $\partial_\tau=c\partial_s$ gives $\partial_\tau\ell_I=(2\ell_I)^{-1}\partial_\tau G_{II}=c\theta(e_I,e_I)/\ell_I=c\theta(u_I,u_I)\ell_I$, which is the stated fractional rate. [L1, L2, L5, L6, L14, step 3.1, algebra]

4.2 (Born rigidity preserves the material metric exactly.) Suppose $\theta=0$ on the image of the family. Then by step 3.1 $\partial_sG_{IJ}(s,\xi)=0$ for every $(s,\xi)\in J\times B$. Fix $\xi\in B$; the function $s\mapsto G_{IJ}(s,\xi)$ is $C^1$ on the interval $J$ by step 2.2, hence continuous, with zero derivative at every point of $J$, so it is constant on $J$ by [L12]. As $I,J$ and $\xi$ were arbitrary, the entire internal metric $G$ is preserved exactly along each flow line, with arbitrary label separation. [L12, step 2.2, step 3.1]

4.3 (Nonrigidity gives local nonconstancy.) If $\theta(e_I,e_J)(s_0,\xi_0)\ne0$ at some point, then by step 3.1 $\partial_sG_{IJ}(s_0,\xi_0)=2\theta(e_I,e_J)(s_0,\xi_0)\ne0$; hence $G_{IJ}$ is not constant on any neighbourhood of $(s_0,\xi_0)$: a function that is constant near a point has vanishing derivative there. In particular the deformed metric component varies along the corresponding flow line. [step 3.1, algebra]

5.1 (Local nature and scope.) Everything proved was computed from the given family: the metric $G$ is obtained by evaluating $h$ on the material directions $e_I$ at the common flow parameter $s$ (equivalently $\tau=s/c$), so it is an internal label-space metric of the family. A finite endpoint distance on a single observer's orthogonal simultaneity hyperplane would require a separate identification of a slice with the label space; no such identification, matter model, elasticity, field equation, global rigidity theorem or boundary condition has been used, and every step is a finite-dimensional algebraic or differential computation using only the cited suppliers, so no choice principle is used. [L6, step 2.2, step 3.1, step 4.2] ∎
