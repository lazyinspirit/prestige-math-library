---
id: lem-harmonic-conjugates-and-log-pole-monodromy-on-surfaces
kind: lemma
title: "Harmonic conjugates and integral logarithmic-pole monodromy on surfaces"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: true
deps:
  - def-harmonic-and-subharmonic-riemann-surface-functions
  - def-harmonic-conjugate
  - def-simply-connected
  - def-holomorphic-and-meromorphic-map-of-riemann-surfaces
  - def-based-loops-and-fundamental-group
  - def-path-connected
  - def-connected-space
  - def-homotopy-relative-and-path-homotopy
  - def-covering-map-and-evenly-covered-neighbourhoods
  - def-order-of-zero-holomorphic-function
  - def-isolated-singularity-types
  - def-complex-logarithms-principal-logarithm-and-complex-powers
  - def-normal-closure
  - def-semilocally-simply-connected-space
  - def-riemann-surface-and-holomorphic-atlas
  - def-plane-harmonic-function
  - def-locally-connected
  - thm-local-holomorphic-potential-for-harmonic-functions
  - cor-harmonic-conjugates-differ-by-a-real-constant
  - cor-closed-exact-and-conservative-equivalence-on-star-shaped-domains
  - thm-fundamental-group-laws
  - lem-continuity-is-local-and-pastes
  - thm-convex-subsets-have-trivial-fundamental-group
  - prop-fundamental-groups-of-punctured-euclidean-spaces
  - cor-winding-number-classifies-loops-in-the-punctured-plane
  - thm-induced-fundamental-group-map-functoriality
  - lem-subgroup-quotient-of-universal-cover
  - prop-covering-spaces-are-stable-under-restriction-finite-products-and-pullback
  - thm-covering-space-lifting-criterion
  - thm-path-lifting-for-covering-maps
  - thm-sheets-equal-fundamental-group-index
  - prop-number-of-sheets-is-locally-constant
  - prop-covering-maps-are-local-homeomorphisms-with-discrete-fibres
  - prop-local-path-connectedness-lifts-and-descends-along-coverings
  - cor-connected-cover-of-a-simply-connected-space-is-trivial
  - thm-connected-and-locally-path-connected-implies-path-connected
  - prop-topological-manifolds-are-locally-compact-and-locally-path-connected
  - lem-puncturing-connected-open-subset-of-rn-preserves-path-connectedness
  - thm-lebesgue-number-lemma
  - thm-compactness-under-continuous-maps
  - thm-removable-singularity-characterizations
  - thm-chain-rule-for-complex-derivatives
  - thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann
  - cor-principal-logarithm-is-holomorphic-on-the-slit-plane
  - thm-algebra-of-complex-derivatives
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Donald E. Marshall, The Uniformization Theorem"
      url: "https://sites.math.washington.edu/~marshall/math_536/uniformizationII.pdf"
      locator: "PDF pp. 1-2: conjugation of a harmonic function on a simply connected surface and the pole normalisation used for the Green kernel; p. 15, Comment 5 and the non-Green proof for the single surviving logarithmic pole."
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 1 §§2.4 and 5, printed pp. 64-68 and 115-118: local harmonic conjugates and logarithmic potentials."
verification:
  precheck: pass
---

## Statement

Let $X$ be a simply connected Riemann surface
([[def-riemann-surface-and-holomorphic-atlas]], [[def-simply-connected]]).

1. Every harmonic function $u:X\to\mathbb R$
   ([[def-harmonic-and-subharmonic-riemann-surface-functions]]) has a harmonic
   conjugate on $X$ ([[def-harmonic-conjugate]]): there is a harmonic
   $v:X\to\mathbb R$ such that $u+iv$ is holomorphic in every chart of $X$.

2. Let $P=\{p_1,\dots,p_n\}\subseteq X$ be finite and let
   $u:X\setminus P\to\mathbb R$ be harmonic. Assume that for every $j$ there are
   a holomorphic chart $(U_j,z_j)$ centred at $p_j$, so $z_j(p_j)=0$, with the
   domains $U_j$ pairwise disjoint, an integer $m_j\in\mathbb Z$ and a harmonic
   function $h_j$ on $U_j$ with
   $$u=-m_j\log|z_j|+h_j\qquad\text{on }U_j\setminus\{p_j\}.$$
   Then $u$ has a locally defined harmonic conjugate $v$ on $X\setminus P$
   (defined on every simply connected chart domain and unique there up to an
   additive constant), and $w:=u+iv$ has all its periods in $2\pi i\mathbb Z$:
   the function $F:=\exp(-w)$ is a single-valued holomorphic function
   $F:X\setminus P\to\mathbb C^\times$ with $|F|=e^{-u}$, and it is the
   restriction of a meromorphic function $F:X\to\widehat{\mathbb C}$
   ([[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]]) which in the
   chart $z_j$ satisfies
   $$F=z_j^{m_j}G_j$$
   with $G_j$ holomorphic at $0$ and $G_j(0)\neq0$. Consequently $F$ has a zero
   of order $m_j$ at $p_j$ when $m_j>0$, a pole of order $-m_j$ at $p_j$ when
   $m_j<0$, is holomorphic and nonzero at $p_j$ when $m_j=0$, and has no zeros
   or poles outside $P$.

## Facts & Assumptions
**Given:** A simply connected Riemann surface $X$; a harmonic $u$ either on $X$ or on $X\setminus P$ with the logarithmic expansions of part 2.

[F1] Chartwise harmonicity, chartwise harmonic conjugates and the convention that $u+iv$ is holomorphic in every chart are those of [[def-harmonic-and-subharmonic-riemann-surface-functions]]; in the plane the notion agrees with [[def-plane-harmonic-function]] and [[def-harmonic-conjugate]]. Plane harmonic functions are $C^2$ with $u_{xx}+u_{yy}=0$, so the field $(-u_y,u_x)$ has continuous first partials and $-u_{yy}=u_{xx}$ holds ([[def-plane-harmonic-function]]).

[F2] Local potentials: every point of a plane domain on which $u$ is harmonic has a disc on which $u$ is the real part of a holomorphic function ([[thm-local-holomorphic-potential-for-harmonic-functions]]). Two harmonic conjugates of the same harmonic function on a connected plane domain differ by a real constant ([[cor-harmonic-conjugates-differ-by-a-real-constant]]); comparing the chart expressions of two surface-conjugates of $u$ on a connected surface domain therefore shows that their difference is locally constant, hence constant there.

[F3] A $C^1$ field on a star-shaped plane domain which is closed is conservative and has a potential, and every closed piecewise-$C^1$ path in such a domain has zero line integral against it ([[cor-closed-exact-and-conservative-equivalence-on-star-shaped-domains]]). In particular $(-u_y,u_x)$ has a potential on every plane disc, and the conjugate potential is holomorphic together with its harmonic partner by the Cauchy-Riemann equations ([[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]).

[F4] Path calculus: concatenation $\alpha*\beta$ of composable paths, reversal $\bar\alpha$, the constant path and path homotopy relative to endpoints are those of [[def-path-connected]], [[def-based-loops-and-fundamental-group]] and [[def-homotopy-relative-and-path-homotopy]]; products of loop classes are well defined and form a group, $[\alpha]^{-1}=[\bar\alpha]$, and the explicit piecewise-affine pasting formulas of that proof are continuous by [[lem-continuity-is-local-and-pastes]] ([[thm-fundamental-group-laws]]). The same formulas give, for a path $\lambda:x\to y$: $\bar\lambda*\lambda$ is homotopic rel endpoints to the constant path at $y$, and $\lambda*\bar\lambda$ to the constant path at $x$; $(1-t)s+t\phi(s)$ for $\phi$ continuous with $\phi(0)=0$, $\phi(1)=1$ gives reparametrisation homotopies; and concatenation of a fixed path with homotopic paths is again a homotopy rel endpoints ([[def-homotopy-relative-and-path-homotopy]], [[lem-continuity-is-local-and-pastes]]).

[F5] Fundamental groups: $\pi_1$ of a pointed space, transport of loop classes along paths by $\sigma\mapsto[\lambda*\sigma*\bar\lambda]$, and functoriality of based maps are as in [[def-based-loops-and-fundamental-group]] and [[thm-induced-fundamental-group-map-functoriality]]. A Euclidean disc is simply connected ([[thm-convex-subsets-have-trivial-fundamental-group]]).

[F6] Covering spaces: existence of a based connected covering with prescribed subgroup for a nonempty, path-connected, locally path-connected, semilocally simply connected base ([[lem-subgroup-quotient-of-universal-cover]], [[def-semilocally-simply-connected-space]]); restrictions of coverings to open subspaces are coverings ([[prop-covering-spaces-are-stable-under-restriction-finite-products-and-pullback]]); the based lifting criterion ([[thm-covering-space-lifting-criterion]]); unique path lifting ([[thm-path-lifting-for-covering-maps]]); sheets equal the subgroup index ([[thm-sheets-equal-fundamental-group-index]]); the number of sheets is locally constant ([[prop-number-of-sheets-is-locally-constant]]); coverings are local homeomorphisms with discrete fibres ([[prop-covering-maps-are-local-homeomorphisms-with-discrete-fibres]], [[def-covering-map-and-evenly-covered-neighbourhoods]]); a covering of a locally path-connected base is locally path-connected iff its total space is ([[prop-local-path-connectedness-lifts-and-descends-along-coverings]]); and every connected covering of a locally path-connected simply connected space is one-sheeted ([[cor-connected-cover-of-a-simply-connected-space-is-trivial]]).

[F7] Point-set facts: a topological manifold is locally compact and locally path-connected ([[prop-topological-manifolds-are-locally-compact-and-locally-path-connected]], [[def-locally-connected]]); a locally path-connected connected space is path-connected ([[thm-connected-and-locally-path-connected-implies-path-connected]], [[def-connected-space]]); removing one point from a nonempty connected open subset of $\mathbb R^2$ leaves a nonempty connected path-connected set ([[lem-puncturing-connected-open-subset-of-rn-preserves-path-connectedness]]); continuous images of compacta are compact ([[thm-compactness-under-continuous-maps]]); every open cover of a compact metric space has a Lebesgue number ([[thm-lebesgue-number-lemma]]).

[F8] The punctured complex plane has $\pi_1(\mathbb C^\times,e_0)\cong\mathbb Z$ and the standard positive circle loop generates, with winding number one classifying it ([[prop-fundamental-groups-of-punctured-euclidean-spaces]], [[cor-winding-number-classifies-loops-in-the-punctured-plane]]).

[F9] Logarithm, orders and singularities: the principal logarithm of [[def-complex-logarithms-principal-logarithm-and-complex-powers]] is holomorphic on the slit plane ([[cor-principal-logarithm-is-holomorphic-on-the-slit-plane]]). Its rotated branches $\operatorname{Log}(e^{-i\alpha}z)+i\alpha$ are holomorphic on rotated slit planes by [[thm-chain-rule-for-complex-derivatives]]; integer powers $z\mapsto z^m$ are holomorphic and nonzero on $\mathbb C^\times$ by repeated products and reciprocals ([[thm-algebra-of-complex-derivatives]]); a holomorphic function on a punctured disc which is bounded near the centre extends holomorphically across it ([[thm-removable-singularity-characterizations]], [[def-isolated-singularity-types]]); orders of zeros are those of [[def-order-of-zero-holomorphic-function]]; and holomorphy of a map to $\widehat{\mathbb C}$ is tested in the charts $\phi_0,\phi_\infty$, so a chart expression with a pole of finite order at the centre extends holomorphically to a value $\infty$ ([[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]]).

[F10] The normal closure $\langle\!\langle S\rangle\!\rangle_G$ is the smallest normal subgroup of $G$ containing $S$, so it consists of finite products of conjugates of elements of $S$ and their inverses ([[def-normal-closure]]).



**Given:** A simply connected Riemann surface $X$, and either a harmonic $u:X\to\mathbb R$ or a finite $P$ with a harmonic $u:X\setminus P\to\mathbb R$ carrying the logarithmic expansions of the statement.

**Proof technique:** direct.

## Proof

1.1 **Local conjugates exist on small chart discs.** Let $W\subseteq X$ be open and $u$ harmonic on $W$. For every $x\in W$ choose a chart $\varphi:U\to\mathbb C$ of $X$ with $x\in U$; then $u_\varphi$ is harmonic on the open set $\varphi(U\cap W)$ by [F1]. By [F2] there is a radius $r>0$ with $D(\varphi(x),r)\subseteq\varphi(U\cap W)$ and a holomorphic $H$ on that disc with $\operatorname{Re}H=u_\varphi$. Then $v_D:=\operatorname{Im}H\circ\varphi$ is defined and harmonic on the connected chart disc $D:=\varphi^{-1}(D(\varphi(x),r))\subseteq W$, and $u+iv_D$ is holomorphic in the chart $\varphi$; call such a $D$ a **conjugate disc** for $u$. [F1, F2, construct]

1.2 **The punctured surface is a legitimate base for covering theory.** Let $W:=X\setminus P$ with $P$ finite, and suppose $u$ is harmonic on $W$ with the expansions of part 2. Since $X$ is a connected topological surface, it is locally path-connected and path-connected [F7]. The set $W$ is nonempty (a Riemann surface is nonempty and $P$ is finite, so $X\setminus P\neq\varnothing$). $W$ is locally path-connected as an open subset of a locally path-connected space [F7]. $W$ is connected: suppose $W=A\sqcup B$ with $A,B$ open in $W$ and nonempty, so $A,B$ are open in $X$ as well; choose for each $p_j$ a chart disc $E_j$ with $E_j\cap P=\{p_j\}$. Each punctured disc $E_j\setminus\{p_j\}$ is connected [F7], and it is contained in $W=A\sqcup B$, so it lies entirely in $A$ or entirely in $B$. Put $$A^*:=A\cup\{p_j:E_j\setminus\{p_j\}\subseteq A\},\qquad B^*:=B\cup\{p_j:E_j\setminus\{p_j\}\subseteq B\}.$$ Then $A^*\cup B^*=X$, because every point of $W$ lies in $A$ or in $B$ and every $p_j$ lies in $A^*$ or in $B^*$, and $A^*\cap B^*=\varnothing$: the two open sets $A,B$ are disjoint, a point $p_j\in A^*\cap B^*$ would force the nonempty set $E_j\setminus\{p_j\}$ to lie in both $A$ and $B$, and $A\cap\{p_j:E_j\setminus\{p_j\}\subseteq B\}=\varnothing$ because that $p_j$ is not in $W$. Each of $A^*,B^*$ is open in $X$: indeed $A^*=A\cup\bigcup\{E_j:E_j\setminus\{p_j\}\subseteq A\}$ is a union of open subsets of $X$, since for such $j$ one has $E_j\subseteq A\cup\{p_j\}\subseteq A^*$, and similarly for $B^*$. Finally $A\subseteq A^*$ and $B\subseteq B^*$ are nonempty. This exhibits $X$ as a disjoint union of two nonempty open sets, contradicting the connectedness of $X$; hence $W$ is connected, and being locally path-connected it is path-connected [F7]. Finally $W$ is semilocally simply connected: every point of $W$ has a chart disc neighbourhood contained in $W$ with simply connected image [F5], which witnesses the condition [F6]. [F5, F6, F7, contradiction]

2.1 **Conjugates on a connected overlap differ by a constant.** If $D,D'$ are conjugate discs and $v_D,v_{D'}$ the conjugates from step 1.1, then $v_D-v_{D'}$ is constant on every connected component of $D\cap D'$: on a component $C$, chart expressions of $u+iv_D$ and $u+iv_{D'}$ are holomorphic, so their difference divided by $i$ is a holomorphic function on an open subset of $\mathbb C$ with values in $\mathbb R$, hence constant on each chart disc, and these local constants agree on overlaps of chart discs because a locally constant function on the connected set $C$ is constant. [step 1.1, F1, F2, algebra]

2.2 **Meridian loops and their normal closure.** Fix $x_0\in W$. For each $j$ choose $R_j>0$ with $\overline{D(0,R_j)}\subseteq z_j(U_j)$ and put $V_j:=z_j^{-1}(D(0,R_j))$. These are pairwise disjoint coordinate discs; the prescribed $h_j$ restricts harmonically to $V_j$. Choose $0<r_j<R_j/2$, put $y_j:=z_j^{-1}(r_j)$, and choose a path $\lambda_j$ in $W$ from $x_0$ to $y_j$ [step 1.2]. Let $\mu_j(t):=z_j^{-1}(r_je^{2\pi it})$ be the positively oriented meridian based at $y_j$. Set $$c_j:=[\lambda_j*\mu_j*\bar\lambda_j]\in\pi_1(W,x_0),\qquad N:=\langle\!\langle c_1,\dots,c_n\rangle\!\rangle_{\pi_1(W,x_0)} .$$ [step 1.2, F4, F10, construct]

3.1 **The period integral of a continuous path.** Let $\gamma:[a,b]\to W$ be a continuous path and let $\mathcal D$ be the family of all conjugate discs for $u$. The sets $\gamma^{-1}(D)$, $D\in\mathcal D$, form an open cover of the compact metric space $[a,b]$ [F7], so by the Lebesgue number lemma [F7] there are $a=t_0<t_1<\dots<t_N=b$ such that each $\gamma([t_{k-1},t_k])$ lies in some conjugate disc $D_k$ with conjugate $v_k$. Define $$\int_\gamma\beta:=\sum_{k=1}^N\bigl(v_k(\gamma(t_k))-v_k(\gamma(t_{k-1}))\bigr)\in\mathbb R .$$ This is independent of the choice of the $v_k$ for the given partition, because by step 2.1 any two conjugates on $D_k$ and $D_k'$ differ by a constant on the connected component of the overlap containing the connected set $\gamma([t_{k-1},t_k])$, and that constant cancels in the difference. It is independent of the partition: two admissible data admit a common refinement, the sum over a refinement using the same conjugates as before telescopes to the coarse sum, and two different refinements are compared by step 2.1 on each small interval. [step 1.1, step 2.1, F2, F7, algebra]

3.2 **$\pi_1$ of the punctured chart disc.** For each $j$, the composition of the chart $z_j$ with an explicit radial homeomorphism $\mathbb C^\times\to D(0,R_j)\setminus\{0\}$, $w\mapsto R_jw/(1+|w|)$, identifies $V_j\setminus\{p_j\}$ homeomorphically with $\mathbb C^\times$, and the circle loop $\mu_j$ corresponds to a loop of winding number one; by functoriality of $\pi_1$ under homeomorphisms and [F8], $\pi_1(V_j\setminus\{p_j\},y_j)$ is infinite cyclic and generated by $[\mu_j]$ (regarded there), so its image under the inclusion-induced map is the cyclic subgroup generated by the class of $\mu_j$ as a loop in $W$. [step 2.2, F5, F8]

3.3 **The prescribed covering.** By step 1.2 the space $W$ satisfies the hypotheses of the subgroup construction [F6], so there is a based connected covering $$p:(E,e_0)\longrightarrow(W,x_0),\qquad p_*\pi_1(E,e_0)=N .$$ The total space $E$ is path-connected: $E$ is connected by construction, it is locally path-connected because $W$ is and [F6], and connected locally path-connected spaces are path-connected [F7]. [step 2.2, F6, F7]

4.1 **Elementary properties of the integral.** For composable continuous paths $\alpha,\beta$ one has $\int_{\alpha*\beta}\beta=\int_\alpha\beta+\int_\beta\beta$, for the reversal $\int_{\bar\alpha}\beta=-\int_\alpha\beta$, and for a constant path the integral is $0$; these are immediate from the definition of step 3.1 applied to partitions adapted to the concatenation (the value of the constant-path integral is $v(x)-v(x)=0$). Consequently, for a path $\lambda$ from $x$ to $y$ and a loop $\sigma$ at $y$, one has $\int_{\lambda*\sigma*\bar\lambda}\beta=\int_\sigma\beta$. [step 3.1, F4, algebra]

4.2 **Homotopy invariance.** Let $\gamma,\gamma':[a,b]\to W$ have the same endpoints and let $H:[a,b]\times[0,1]\to W$ be a homotopy relative to the endpoints joining them. Then $\int_\gamma\beta=\int_{\gamma'}\beta$. Indeed, the sets $H^{-1}(D)$ over the conjugate discs cover the compact metric square; by [F7] choose a grid $a=s_0<\dots<s_M=b$, $0=r_0<\dots<r_R=1$ so fine that each $H(R_{kl})$ lies in one conjugate disc $D_{kl}$ (use uniform continuity of $H$ and a Lebesgue number). For every grid edge $E$ choose a rectangle $R_{kl}$ containing it and define $\operatorname{inc}(E)$ as the difference of $v_{D_{kl}}$ at the endpoints of $E$, the edge oriented in the increasing first coordinate for horizontal edges and in the increasing second coordinate for vertical edges. Summing over the four boundary edges of a single rectangle $R_{kl}$ telescopes to $0$ because one and the same $v_{D_{kl}}$ is evaluated at the images of the four corners around the closed rectangle. Summing over all rectangles, interior edges occur twice with opposite orientations, and the two contributions agree by step 2.1 applied to the connected image of the edge; hence $0=\sum_{E\ \text{boundary}}\operatorname{inc}(E)$. The two vertical edges contribute $0$, since $H$ fixes the endpoints and the corresponding values are equal, and the bottom and top edges contribute $\int_\gamma\beta$ and $-\int_{\gamma'}\beta$. Thus the integrals are equal. [step 1.1, step 2.1, step 3.1, F2, F7, algebra]

5.1 **The period homomorphism and its transport.** By steps 4.1 and 4.2, for every $x\in W$ the formula $\varphi_x([\gamma]):=\int_\gamma\beta$ is a well-defined group homomorphism $\pi_1(W,x)\to(\mathbb R,+)$: it is well defined on classes by step 4.2, additive by step 4.1, and $\varphi_x([c_x])=0$. For a path $\lambda$ from $x$ to $y$ and a loop $\sigma$ at $y$ one has $\varphi_x([\lambda*\sigma*\bar\lambda])=\varphi_y([\sigma])$ by step 4.1. [step 4.1, step 4.2, F4, F5]

5.2 **Simply connected case: all periods vanish.** Assume now that $u$ is harmonic on all of $X$ and that $X$ is simply connected. Fix $x_0\in X$. For every loop $\gamma$ at $x_0$ the class $[\gamma]$ is the identity of $\pi_1(X,x_0)$, since that group has exactly one element; hence $\gamma$ is path-homotopic rel endpoints to the constant loop at $x_0$ [F4], so by step 4.2 and step 4.1, $\varphi_{x_0}([\gamma])=0$. [step 4.1, step 4.2, F4, F5]

5.3 **A dictionary for the restricted covering.** Fix $j$ and let $\lambda_j$ be the chosen path from $x_0$ to $y_j$. Let $\widetilde\lambda_j$ be the unique lift of $\lambda_j$ starting at $e_0$ and put $e_j:=\widetilde\lambda_j(1)\in p^{-1}(y_j)$ [F6]. Let $$\Phi_j:\pi_1(W,y_j)\to\pi_1(W,x_0),\qquad \Phi_j([\sigma]):=[\lambda_j*\sigma*\bar\lambda_j]$$ be transport of classes along $\lambda_j$; by [F4] and step 4.1 it is a well-defined group isomorphism, and $\Phi_j([\mu_j])=c_j\in N$. I claim $$p_*\pi_1(E,e_j)=\Phi_j^{-1}(N).$$ For the inclusion $\subseteq$, let $\beta$ be a loop in $E$ at $e_j$; then $\widetilde\lambda_j*\beta*\bar{\widetilde\lambda}_j$ is a loop in $E$ at $e_0$ whose projection is, as a path, the concatenation $\lambda_j*(p\circ\beta)*\bar\lambda_j$; hence $\Phi_j(p_*[\beta])=p_*[\widetilde\lambda_j*\beta*\bar{\widetilde\lambda}_j]\in N$. For the reverse inclusion, let $a\in\pi_1(W,y_j)$ with $\Phi_j(a)\in N=p_*\pi_1(E,e_0)$ and choose a loop $\beta$ in $E$ at $e_0$ with $p_*[\beta]=\Phi_j(a)$; then $\gamma:=\bar{\widetilde\lambda}_j*\beta*\widetilde\lambda_j$ is a loop in $E$ at $e_j$ whose projection is the loop $\bar\lambda_j*\rho*\lambda_j$, where $\rho$ is a representative of $\Phi_j(a)=[\lambda_j*\sigma*\bar\lambda_j]$ for a representative $\sigma$ of $a$. By the cancellation and associativity identities of [F4] the loop $\bar\lambda_j*\rho*\lambda_j$ represents $[\sigma]=a$; hence $p_*[\gamma]=a$ and $a\in p_*\pi_1(E,e_j)$. Therefore $[\mu_j]\in p_*\pi_1(E,e_j)$, because $\Phi_j([\mu_j])=c_j\in N$. [step 2.2, step 3.2, step 3.3, F4, F6]

5.4 **Local computation of the periods.** Fix $j$ and write $D_j$ for the disc $|z_j|<r_j'$ with $r_j'$ chosen so that $\mu_j$ runs along $|z_j|=r_j<r_j'$ and $D_j\subseteq V_j$. On the disc $D_j$ the function $h_j$ is harmonic, and the field $(-\partial_y h_j,\partial_x h_j)$ is closed; by [F3] it has a potential $H_j$ on the disc $|z_j|<r_j'$ with $\nabla H_j=(-\partial_yh_j,\partial_xh_j)$ in the chart coordinates, and $h_j+iH_j$ is holomorphic there. On the slit disc $S:=D_j\setminus(-\infty,0]$ the principal logarithm of $z_j$ is holomorphic [F9], so $$V:=-m_j\arg z_j+H_j$$ is a harmonic conjugate of $u$ on $S$: indeed $-m_j\log z_j+h_j+iH_j$ is holomorphic on $S$ with real part $-m_j\log|z_j|+h_j=u$. Splitting the circle loop $\mu_j$ into finitely many arcs of angular width less than $\pi$ and applying the definition of the integral of step 3.1 with rotated logarithm branches from [F9] with continuous argument along each arc, the $H_j$-part telescopes to zero around the closed circle (all increments are those of the single-valued harmonic conjugate $H_j$ along arcs inside $D_j$, so the total change is $0$), while the angular parts add to the total change $2\pi$ of the argument around the positively oriented circle. Hence $$\int_{\mu_j}\beta=-2\pi m_j .$$ By step 4.1 and step 2.2, $\varphi_{x_0}(c_j)=\int_{\mu_j}\beta=-2\pi m_j$. [step 3.1, step 4.1, step 2.2, F3, F9, algebra]

6.1 **A global conjugate by path integration.** $X$ is path-connected because it is simply connected [F5]. Define, for $x\in X$, $$v(x):=\int_\sigma\beta\qquad\text{for any path }\sigma\text{ in }X\text{ from }x_0\text{ to }x .$$ This is well defined: two paths $\sigma,\sigma'$ from $x_0$ to $x$ give $\int_\sigma\beta-\int_{\sigma'}\beta=\int_{\sigma*\bar\sigma'}\beta=0$ by steps 4.1 and 5.2, since $\sigma*\bar\sigma'$ is a loop at $x_0$. [step 3.1, step 4.1, step 5.2, F4, construct]

6.2 **Each component over a punctured disc is one-sheeted.** Let $D_j^\times:=V_j\setminus\{p_j\}$ and restrict $p$ over this open set. By step 3.2 its fundamental group is generated by the meridian $[\mu_j]$, whose image in $\pi_1(W,y_j)$ lies in $p_*\pi_1(E,e_j)$ by step 5.3. The lifting criterion [F6] gives a section of the restricted covering through $e_j$; the component $Z$ containing $e_j$ therefore has a surjective map on fundamental groups and is one-sheeted by the sheet-index formula [F6]. Now let $e$ be any other point above $y_j$. Choose a path in the connected space $E$ from $e_j$ to $e$, and write $g$ for the class of its projected loop at $y_j$. Path conjugation identifies $p_*\pi_1(E,e)$ with $g^{-1}p_*\pi_1(E,e_j)g$. By step 5.3 the latter subgroup is $\Phi_j^{-1}(N)$, which is normal because $N$ is a normal closure; hence $[\mu_j]$ also lies in $p_*\pi_1(E,e)$. The same section and sheet-index argument makes the component through $e$ one-sheeted. Every component of a covering over the connected, locally path-connected disc $D_j^\times$ contains a point above $y_j$, so every component maps homeomorphically onto $D_j^\times$. The total preimage may have several components. [step 2.2, step 3.2, step 5.3, F6, F7]
7.1 **$v$ is a global harmonic conjugate.** Let $x\in X$, let $D\ni x$ be a conjugate disc with conjugate $v_D$, and let $y\in D$. Choose a path $\sigma$ from $x_0$ to $x$ and a path $\tau$ inside $D$ from $x$ to $y$; then, using step 3.1 with the single conjugate $v_D$ on the second piece, $v(y)=\int_{\sigma*\tau}\beta=v(x)+\bigl(v_D(y)-v_D(x)\bigr)$. Hence $v=v_D+\text{constant}$ on $D$; so $v$ is harmonic on $D$ and $u+iv$ is holomorphic in the coordinate of $D$, up to the additive imaginary constant. As the conjugate discs cover $X$, $v$ is a harmonic conjugate of $u$ on $X$, and part 1 of the statement follows. [step 1.1, step 6.1, F1, F2]

7.2 **Extending the covering across the punctures.** For each $j$ and each component $C$ of $p^{-1}(D_j^\times)$, the homeomorphism $p|_C:C\to D_j^\times$ extends to a homeomorphism $C\cup\{c_C\}\to V_j$ of the one-point extensions, sending the new point $c_C$ to $p_j$. Form $E':=E\cup\{c_C\}$ over all $j$ and components $C$, with the topology generated by open sets of $E$ and sets $\{c_C\}\cup(p|_C)^{-1}(z_j^{-1}(D(0,t))\setminus\{p_j\})$, for $0<t<R_j$, and extend $p$ to $p':E'\to X$ by $p'(c_C):=p_j$. Then $p'$ is a covering map: over $W$ it restricts to the covering $p$, and over each $V_j$ the preimage is the disjoint union of the spaces $C\cup\{c_C\}\cong V_j$, each mapping homeomorphically onto $V_j$, so the local triviality conditions hold at interior points and at the added points. Moreover $E'$ is connected: $E$ is connected by step 3.3, and each added point $c_C$ lies in the closure of $C\setminus\{c_C\}\subseteq E$, so $E'$ is the union of $E$ with points in its closure. [step 3.3, step 6.2, F6]

8.1 **Conclusion: the meridians generate.** The map $p':E'\to X$ is a connected covering of the simply connected locally path-connected space $X$, hence is one-sheeted and an isomorphism [F6]. Therefore $p:E\to W$ is one-sheeted, so $p_*:\pi_1(E,e_0)\to\pi_1(W,x_0)$ is an isomorphism, and its image is $N$; hence $$\pi_1(W,x_0)=N=\langle\!\langle c_1,\dots,c_n\rangle\!\rangle .$$ In particular every element of $\pi_1(W,x_0)$ is a finite product of conjugates of the classes $c_j^{\pm1}$ [F10]. [step 2.2, step 3.3, step 7.2, F6, F10]

9.1 **All periods are integral multiples of $2\pi$.** By step 8.1 every class in $\pi_1(W,x_0)$ is a finite product of conjugates of the $c_j^{\pm1}$; since $\varphi_{x_0}$ is a homomorphism [step 5.1] and $\varphi_{x_0}(g\,c_j\,g^{-1})=\varphi_{x_0}(c_j)=-2\pi m_j$ for every $g$, while $\varphi_{x_0}(c_j^{-1})=2\pi m_j$, every period $\varphi_{x_0}([\gamma])$ lies in $2\pi\mathbb Z$. [step 5.1, step 8.1, step 5.4, F10, algebra]

10.1 **Construction of $F$.** Define, for $x\in W$, $$F(x):=e^{-u(x)}\exp\Bigl(-i\int_\sigma\beta\Bigr)\qquad\text{for any path }\sigma\text{ in }W\text{ from }x_0\text{ to }x .$$ This is well defined: two paths $\sigma,\sigma'$ differ by a loop at $x_0$ and the two exponents differ by an element of $2\pi\mathbb Z$ by step 9.1, so the exponentials agree. [step 3.1, step 9.1, construct]

11.1 **$F$ is holomorphic and nonvanishing with $|F|=e^{-u}$.** On a conjugate disc $D$ containing a point $x$, and for $y\in D$, the path $\sigma$ from $x_0$ to $x$ followed by a path in $D$ from $x$ to $y$ computes $\int\beta=\int_\sigma\beta+(v_D(y)-v_D(x))$, so $$F(y)=F(x)\,e^{-(u(y)+iv_D(y))}e^{\,u(x)+iv_D(x)}$$ on $D$. Since $u+iv_D$ is holomorphic in the chart of $D$, the right-hand side exhibits $F$ as a holomorphic function on $D$ with $F(y)\neq0$; as the conjugate discs cover $W$, $F$ is holomorphic on $W$ and vanishes nowhere. Taking moduli gives $|F(y)|=e^{-u(y)}>0$ everywhere on $W$. [step 1.1, step 10.1, F1, algebra]

12.1 **Local form at each puncture.** Fix $j$. On $W$ define $G:=z_j^{-m_j}F$ near $p_j$, where $z_j^{-m_j}$ is the holomorphic nonvanishing power function of [F9] on the punctured chart; then $G$ is holomorphic on $D_j\setminus\{p_j\}$. To compute its size, note that $|F|=e^{-u}=e^{m_j\log|z_j|-h_j}=|z_j|^{m_j}e^{-h_j}$ by step 11.1 and the expansion of $u$; hence $|G|=e^{-h_j}$ on $D_j\setminus\{p_j\}$, and $h_j$ is continuous on the disc $D_j$ with $p_j$ in its interior, so $G$ is bounded near $p_j$. By the removable-singularity characterizations [F9], $G$ extends holomorphically over $p_j$, with $|G(p_j)|=\lim_{|z_j|\to0}e^{-h_j}=e^{-h_j(p_j)}>0$. Writing $G_j$ for the extension gives $$F=z_j^{m_j}G_j\quad\text{near }p_j,\qquad G_j\text{ holomorphic at }0,\ G_j(0)\neq0 .$$ [step 11.1, F9, algebra]

13.1 **The extension is meromorphic with the asserted divisor.** By step 12.1, at each puncture the chart expression of $F$ is either holomorphic at the centre (if $m_j\ge0$, with a zero of order exactly $m_j$ when $m_j>0$ and a nonzero value when $m_j=0$) or has a pole of order $-m_j$ there when $m_j<0$; in the latter case the reciprocal chart expression is holomorphic at the centre with value $0$, which is exactly the chart condition for holomorphy of a map $X\to\widehat{\mathbb C}$ in the chart $\phi_\infty$ [F9]. Hence $F$ extends to a holomorphic map $F:X\to\widehat{\mathbb C}$, and it is not the constant map $\infty$ because $F(W)\subseteq\mathbb C^\times$ by step 11.1; so $F$ is meromorphic [F9]. Orders are those of [[def-order-of-zero-holomorphic-function]], and the pole order is read off from the reciprocal as in [[def-isolated-singularity-types]]. [step 12.1, F9]

14.1 **No other zeros or poles.** On $W=X\setminus P$ the modulus $|F|=e^{-u}$ is finite and strictly positive by step 11.1, so $F$ has neither zeros nor poles in $W$; together with step 13.1 the zeros and poles of $F$ are exactly the points $p_j$ with $m_j\neq0$, with the orders $|m_j|$ and the signs described. This completes the proof of part 2, and part 1 was proved in step 7.1. [step 7.1, step 11.1, step 13.1] ∎
