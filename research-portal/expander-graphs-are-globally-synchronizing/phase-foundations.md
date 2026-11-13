---
title: Phase dynamics and oscillator models
description: Build phase geometry, analytic gradient dynamics and basin measure;
  place oscillator assumptions, historical observations and continuum context in
  their separate stated scopes.
status: published
dependency_level: 0
---

**Purpose:** Build phase geometry, analytic gradient dynamics and basin measure; place oscillator assumptions, historical observations and continuum context in their separate stated scopes.

## Finite phase tori, local lifts and the flat metric

[Open item](item-def-expander-prereq-phase-torus) · level 0


### Definition

Let $V$ be a nonempty finite set and let $\Lambda=(2\pi\mathbb Z)^V$. Give $\mathbb R^V$ its finite product topology and define $T_V=\mathbb R^V/\Lambda$, where $u$ and $v$ represent the same point exactly when $u-v\in\Lambda$. Write $q(u)=[u]$ and give $T_V$ the quotient topology. A representative $u$ of $\theta\in T_V$ is a lift of $\theta$; for a map into $T_V$, a local lift is a representative-valued map on a neighborhood whose composition with $q$ is the original map there.

For each open box $B=\prod_{x\in V}I_x$ whose interval factors have length less than $2\pi$, the angular chart has domain $q(B)$ and coordinate map $(q|_B)^{-1}:q(B)\to B$. These charts give $T_V$ a smooth and real analytic structure: smooth means that all transition maps have derivatives of every order, and real analytic means that their coordinate functions locally equal convergent real power series. Identify $T_V$ with $(S^1)^V$ by $[u]\mapsto((\cos u_x,\sin u_x))_{x\in V}$, where $S^1=\{(a,b)\in\mathbb R^2:a^2+b^2=1\}$.

The flat metric is the Euclidean inner product $\langle a,b\rangle=\sum_{x\in V}a_xb_x$ in every angular chart; flat here means that these local metric coefficients are constant and equal to the identity matrix. Its associated distance is defined, for any representatives $u$ of $\theta$ and $v$ of $\phi$, by $d(\theta,\phi)^2=\sum_{x\in V}\min_{k\in\mathbb Z}|u_x-v_x+2\pi k|^2$.

### Facts & Assumptions

**Given:** A nonempty finite set $V$, the lattice $\Lambda=(2\pi\mathbb Z)^V$, and the quotient, angular charts and metric formula in the Definition.

[F1] The quotient topology is characterized by openness of preimages; finite product-open boxes form a basis. ([math:def-quotient-topology](https://alphabetamath.cc/item/def-quotient-topology), [math:def-product-topology](https://alphabetamath.cc/item/def-product-topology)).

[F2] For $n\ge1$, rational open boxes form a countable basis for $\mathbb R^n$; its product topology agrees with its Euclidean metric topology. ([math:thm-rational-points-and-boxes-in-rn](https://alphabetamath.cc/item/thm-rational-points-and-boxes-in-rn), [math:rem-euclidean-topology-dictionary](https://alphabetamath.cc/item/rem-euclidean-topology-dictionary)).

[F3] Every real number has an integer part; $t\mapsto(\cos t,\sin t)$ is bijective from $[0,2\pi)$ onto $S^1$, and sine and cosine are $2\pi$-periodic and differentiable, hence continuous. ([math:lem-integer-part](https://alphabetamath.cc/item/lem-integer-part), [math:thm-sine-and-cosine-parametrize-the-unit-circle](https://alphabetamath.cc/item/thm-sine-and-cosine-parametrize-the-unit-circle), [math:thm-sine-cosine-zero-sets-and-fundamental-period](https://alphabetamath.cc/item/thm-sine-cosine-zero-sets-and-fundamental-period), [math:thm-sine-and-cosine-derivatives](https://alphabetamath.cc/item/thm-sine-and-cosine-derivatives)).

[F4] Closed bounded real intervals and finite products of compact spaces are compact; continuous images of compact spaces are compact, and a continuous bijection from a compact space to a Hausdorff space is a homeomorphism. ([math:thm-heine-borel-r](https://alphabetamath.cc/item/thm-heine-borel-r), [math:thm-finite-products-of-compact-spaces](https://alphabetamath.cc/item/thm-finite-products-of-compact-spaces), [math:thm-compactness-under-continuous-maps](https://alphabetamath.cc/item/thm-compactness-under-continuous-maps)).

[F5] The Euclidean norm is positive definite and satisfies the triangle inequality. ([math:thm-cauchy-schwarz-and-the-euclidean-norm](https://alphabetamath.cc/item/thm-cauchy-schwarz-and-the-euclidean-norm)).

[F6] A topological manifold is Hausdorff, second countable and locally Euclidean. A covering family of smoothly compatible charts is a smooth atlas; it generates a unique maximal smooth atlas, which specifies the smooth manifold. ([math:def-topological-manifold-without-boundary](https://alphabetamath.cc/item/def-topological-manifold-without-boundary), [math:def-smooth-atlas](https://alphabetamath.cc/item/def-smooth-atlas), [math:def-smooth-manifold](https://alphabetamath.cc/item/def-smooth-manifold), [math:thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas](https://alphabetamath.cc/item/thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas)).

[F7] A Riemannian metric on a Hausdorff second-countable smooth manifold is a smooth symmetric covariant two-tensor that is positive definite at every point. ([math:def-riemannian-metric-and-riemannian-manifold](https://alphabetamath.cc/item/def-riemannian-metric-and-riemannian-manifold)).

[F8] A piecewise $C^1$ curve is continuous on a compact parameter interval and has a finite subdivision on whose pieces its coordinate derivative extends continuously to the endpoints. Its length is the sum of the integrals of $\sqrt{g(\dot\gamma,\dot\gamma)}$, independent of finite subdivision; on a connected Riemannian manifold, the distance is the infimum of these lengths over curves joining the endpoints. ([math:def-piecewise-c-one-curve-on-a-manifold](https://alphabetamath.cc/item/def-piecewise-c-one-curve-on-a-manifold), [math:def-riemannian-speed-and-length](https://alphabetamath.cc/item/def-riemannian-speed-and-length), [math:lem-riemannian-length-is-independent-of-piecewise-c-one-subdivision](https://alphabetamath.cc/item/lem-riemannian-length-is-independent-of-piecewise-c-one-subdivision), [math:def-riemannian-distance-on-a-connected-manifold](https://alphabetamath.cc/item/def-riemannian-distance-on-a-connected-manifold)).

[F9] Every open cover of a compact metric space has a positive Lebesgue number: every nonempty subset of smaller diameter lies in one member of the cover. ([math:thm-lebesgue-number-lemma](https://alphabetamath.cc/item/thm-lebesgue-number-lemma)).

[F10] A continuous piecewise $C^1$ Euclidean path, with derivatives extending continuously on each closed piece, has length equal to the sum of its speed integrals. Its endpoint displacement has norm at most that length; corners and constant pieces are allowed. ([math:cor-piecewise-c1-paths-have-additive-speed-integral-length](https://alphabetamath.cc/item/cor-piecewise-c1-paths-have-additive-speed-integral-length), [math:cor-chord-length-is-at-most-arc-length](https://alphabetamath.cc/item/cor-chord-length-is-at-most-arc-length)).

[F11] A space in which every pair of points is joined by a continuous path is connected. ([math:thm-path-connected-implies-connected](https://alphabetamath.cc/item/thm-path-connected-implies-connected)).

### Justification

**Proof technique:** direct, constructing the manifold and metric and comparing lifted curve lengths.

1.1 By the quotient topology, $q$ is continuous, and $q^{-1}(q(U))=\bigcup_{\lambda\in\Lambda}(U+\lambda)$ is open whenever $U\subseteq\mathbb R^V$ is open, so $q$ is open. On a box $B$ whose side lengths are less than $2\pi$, two points differing by a lattice vector must be equal. Thus $q|_B$ is a continuous open bijection onto $q(B)$, hence a homeomorphism, and these chart domains cover $T_V$. Put $n=|V|\ge1$ and order $V$ to identify $\mathbb R^V$ with $\mathbb R^n$. The images under $q$ of rational open boxes form a countable open basis: if $\theta\in O$ with $O$ quotient-open, take any representative $u$ of $\theta$ and a rational box $C$ with $u\in C\subseteq q^{-1}(O)$; then $\theta\in q(C)\subseteq O$. This proves second countability. [F1, F2, F6]

2.1 The integer-part lemma applied to $t/(2\pi)$ gives the unique representative in $[0,2\pi)$ of each coordinate modulo $2\pi$. Circle parametrization and periodicity therefore give the stated bijection $T_V\to(S^1)^V$. Its composite with $q$ is continuous coordinatewise; the quotient topology then makes the bijection continuous. Since $[0,2\pi]^V$ is compact and maps onto $T_V$ under $q$, the latter is compact. The target is Hausdorff: distinct vectors in its Euclidean realization in $\mathbb R^{2n}$ have disjoint relative open balls with radii one third of their distance. The compact-to-Hausdorff theorem makes the bijection a homeomorphism, so $T_V$ is Hausdorff as well. Together with step 1.1, this verifies all topological manifold hypotheses. [F1, F2, F3, F4, F5, F6, step 1.1]

2.2 Reducing a real $t$ modulo $2\pi$ to $r\in[0,2\pi)$ shows that $\min_{k\in\mathbb Z}|t+2\pi k|=\min\{r,2\pi-r\}$. Hence all coordinate minima are attained and finite coordinatewise minimization yields $d([u],[v])=\min_{\lambda\in\Lambda}\|u-v+\lambda\|_2$. Changing representatives only reindexes these shifts. Nonnegativity and symmetry follow from the norm, and zero occurs exactly for equal classes. For three classes, the sum of minimizing shifts for two successive pairs is an admissible shift for the endpoint pair; the Euclidean triangle inequality gives the triangle inequality for $d$. If $|u_x-v_x|<\pi$ for every $x$, zero is a minimizing shift in every coordinate and $d([u],[v])=\|u-v\|_2$. More precisely, for $0<r<\pi$ the $d$-ball about $[v]$ of radius $r$ is exactly $q(\{u:\|u-v\|_2<r\})$: a minimizing representative proves the reverse inclusion. These balls are quotient-open since $q$ is open, and every quotient-open neighborhood of $[v]$ contains one by applying openness to its preimage at $v$. Therefore $d$ induces the quotient topology and agrees locally with the Euclidean metric in angular coordinates. [F1, F2, F3, F5, step 1.1]

3.1 On the overlap of two chart domains, the two inverse branches are continuous and their difference takes values in $\Lambda$. Near any given point their difference stays within Euclidean distance $\pi$ of its value there, and distinct lattice vectors are at least $2\pi$ apart; hence the difference is locally constant. Every transition is consequently locally a translation. These transitions are smooth and locally given by polynomial, hence convergent real power series, coordinate functions. The angular atlas therefore generates the smooth structure, and is also a real analytic atlas in the sense specified in the Definition. Its transition derivatives are identity matrices. Thus the identity coefficient matrices define a consistent smooth symmetric positive definite two-tensor: a chart velocity $a$ has squared norm $\sum_x a_x^2$, unchanged on overlaps. This is the asserted flat Riemannian metric. [F5, F6, F7, step 1.1, step 2.1]

4.1 A projected straight segment $t\mapsto q((1-t)u+tv)$, $0\le t\le1$, joins any two classes and is smooth in local angular coordinates. Thus $T_V$ is path connected and hence connected. For clarity, path length here uses continuous piecewise $C^1$ curves $\gamma:[a,b]\to T_V$, with endpoint derivatives interpreted one-sided on each closed piece. Write $L_g(\gamma)=\sum_j\int_{t_{j-1}}^{t_j}\sqrt{g_{\gamma(t)}(\dot\gamma(t),\dot\gamma(t))}\,dt$; refining the finite partition does not change this sum. The associated path distance is $d_g(\theta,\phi)=\inf_{\gamma:\theta\to\phi}L_g(\gamma)$. The connected Riemannian manifold hypotheses now hold, and the projected segments explicitly make every such family nonempty with a finite length. Constant curves are permitted, including when the endpoints agree. [F8, F11, step 1.1, step 3.1]

4.2 Here is the required lift construction, without assuming a covering-map theorem. For a continuous piecewise $C^1$ curve on $[a,b]$ with $a<b$, the sets $\gamma^{-1}(q(B))$ form an open cover of that compact metric interval. A Lebesgue number supplies a finite partition of mesh smaller than it; refine this partition by the finitely many original $C^1$ breakpoints. Each resulting closed subinterval maps into a single angular chart. Compose with that chart's inverse to obtain a lift on the subinterval. Translate the first lift by a lattice vector to have any prescribed starting representative. Successively translate each next lift by the unique lattice vector making its initial value equal to the preceding final value; such a vector exists since both values project to the same point. The finitely many translated lifts concatenate continuously into $\widetilde\gamma:[a,b]\to\mathbb R^V$ with $q\circ\widetilde\gamma=\gamma$. Local transitions are translations, so each lift piece is $C^1$ with its derivative extending continuously to the endpoints. A singleton parameter interval has its constant lift. [F4, F8, F9, step 1.1, step 3.1]

5.1 On the chart subdivision just constructed, the identity metric coefficients give $L_g(\gamma)=\sum_j\int_{t_{j-1}}^{t_j}\|\widetilde\gamma'(t)\|_2\,dt$. The Euclidean piecewise $C^1$ length formula identifies this sum with $L(\widetilde\gamma)$, which is at least $\|\widetilde\gamma(b)-\widetilde\gamma(a)\|_2$ by the endpoint chord bound. If $\gamma$ joins $[u]$ to $[v]$ and its lift starts at $u$, its final value is $v+\lambda$ for some $\lambda\in\Lambda$. Consequently $L_g(\gamma)\ge\|v-u+\lambda\|_2\ge d([u],[v])$. This also holds for a singleton interval, when the endpoints agree. [F5, F8, F10, step 3.1, step 2.2, step 4.2]

6.1 Choose a lattice shift $\lambda$ attaining $\min_{\lambda\in\Lambda}\|v-u+\lambda\|_2$ and project the segment $t\mapsto u+t(v-u+\lambda)$, $0\le t\le1$. Its constant lifted velocity has norm $\|v-u+\lambda\|_2$, so its Riemannian length is this same number, namely $d([u],[v])$. Every joining curve has length at least that number by step 5.1, and this segment attains it. Thus $d_g=d$, proving that the displayed distance is exactly the path distance of the flat metric, as asserted. [F8, F10, step 3.1, step 2.2, step 4.1, step 5.1] ∎


## Phasors, trigonometric identities and periodic derivatives

[Open item](item-def-expander-prereq-phasor-calculus) · level 0


### Definition

For a real angle $u$, its unit phasor is $z(u):=\exp(iu)=e^{iu}$. On $\mathbb R$, define $u\sim v$ when $u-v=2\pi k$ for some $k\in\mathbb Z$. A phase is an equivalence class $[u]=\{v\in\mathbb R:u\sim v\}$ in the quotient set $\mathbb R/{\sim}$; thus it is an angle considered modulo integer multiples of $2\pi$. An angular lift is a real representative of that class, or a locally real-valued representative when the phase varies. The functions $\sin$ and $\cos$ are the usual restrictions to real arguments of the complex trigonometric functions. For $w=a+ib$ with real $a,b$, write $\operatorname{Re}w=a$, $\operatorname{Im}w=b$, and $\overline w=a-ib$.

The following identities hold for real $u,v$: $z(u)=\cos u+i\sin u$, $|z(u)|=1$, $z(u-v)=z(u)\overline{z(v)}$, $\operatorname{Re}z(u-v)=\cos(u-v)$, and $\operatorname{Im}z(u-v)=\sin(u-v)$. With respect to an angular lift, $z'(u)=iz(u)$, $\sin'(u)=\cos u$, and $\cos'(u)=-\sin u$. These identities and derivatives are unchanged when any angle is replaced by a representative differing by an integer multiple of $2\pi$. Finite sums of differentiable complex-valued functions of a real variable may be differentiated termwise, and their real and imaginary parts are the respective sums of the real and imaginary parts.

### Facts & Assumptions

[F1] The complex exponential is defined by its everywhere-convergent power series, so $\exp(0)=1$ ([math:def-complex-exponential](https://alphabetamath.cc/item/def-complex-exponential)).

[F2] The complex sine and cosine are defined through the complex exponential ([math:def-complex-trigonometric-and-hyperbolic-functions](https://alphabetamath.cc/item/def-complex-trigonometric-and-hyperbolic-functions)).

[F3] For real $x,y$, $\exp(x+iy)=e^x(\cos y+i\sin y)$ and $|\exp(x+iy)|=e^x$; also $\exp(i\pi)=-1$ ([math:cor-complex-exponential-cartesian-form-modulus-and-eulers-identity](https://alphabetamath.cc/item/cor-complex-exponential-cartesian-form-modulus-and-eulers-identity)).

[F4] For all complex $a,b$, $\exp(a+b)=\exp(a)\exp(b)$ ([math:thm-complex-exponential-addition-and-real-extension](https://alphabetamath.cc/item/thm-complex-exponential-addition-and-real-extension)).

[F5] Complex sine and cosine are differentiable with derivatives $\cos$ and $-\sin$, respectively ([math:cor-complex-trigonometric-and-hyperbolic-derivatives](https://alphabetamath.cc/item/cor-complex-trigonometric-and-hyperbolic-derivatives)).

[F6] Real differentiable functions obey the sum rule and scalar multiplication rule, the latter following from the product rule ([math:lem-derivative-algebra-and-chain-rules](https://alphabetamath.cc/item/lem-derivative-algebra-and-chain-rules)).

[F7] Complex conjugation satisfies $w\overline w=|w|^2$; its coordinate definition is $\overline{a+ib}=a-ib$ ([math:lem-complex-conjugation-and-modulus-laws](https://alphabetamath.cc/item/lem-complex-conjugation-and-modulus-laws)).

[F8] An equivalence relation is reflexive, symmetric and transitive. Its equivalence classes form the quotient set, and a representative of a class is an element whose class is that class ([math:def-equivalence-relation](https://alphabetamath.cc/item/def-equivalence-relation)).

### Justification

**Given:** Real angles $u,v$, and, for the finite-sum assertion, finitely many complex-valued functions with differentiable real and imaginary components.

**Goal:** Establish the phase quotient, the displayed phasor identities, their independence of representatives and the finite-sum rules.

1.1 Set $x=0$ and $y=u$ in [F3]. Since $e^0=\exp(0)=1$, this gives $z(u)=\cos u+i\sin u$ and $|z(u)|=1$. By [F7], $z(v)\overline{z(v)}=1$. Also [F4] and [F1] give $z(v)z(-v)=1$, so $z(-v)=\overline{z(v)}$. Hence $z(u-v)=z(u)\overline{z(v)}$ by [F4], and the stated real and imaginary parts follow by applying the Cartesian formula at $u-v$. [F1, F3, F4, F7, algebra]

1.2 The relation $\sim$ is reflexive because $u-u=2\pi\cdot0$. If $u-v=2\pi k$, then $v-u=2\pi(-k)$, proving symmetry. If $u-v=2\pi k$ and $v-w=2\pi\ell$, then $u-w=2\pi(k+\ell)$, proving transitivity; the witnesses $0,-k,k+\ell$ are integers. Hence [F8] supplies the quotient set of classes used to define phases, with real representatives as angular lifts. [F8, algebra]

2.1 By [F3] and [F4], $z(2\pi)=z(\pi)^2=1$. The addition law, $z(0)=1$, and induction in both integer directions imply $z(u+2\pi k)=z(u)$ for every integer $k$. Equality of the real and imaginary coordinates in step 1.1 makes sine and cosine $2\pi$-periodic as well. Consequently these functions have values independent of the representative of a phase in the quotient from step 1.2. [F1, F3, F4, step 1.1, step 1.2, algebra, induction]

3.1 Restricting [F5] to real arguments gives the stated sine and cosine derivatives. Differentiate the Cartesian expression in step 1.1 componentwise using [F6]; the result is $z'(u)=-\sin u+i\cos u=iz(u)$. The derivative formulas are periodic by step 2.1. A lift changed locally by a constant integer multiple of $2\pi$ therefore gives the same values and derivatives. [F5, F6, step 1.1, step 2.1, algebra]

4.1 For each summand write $f_j=a_j+ib_j$. Coordinate addition gives $\operatorname{Re}\sum_j f_j=\sum_j a_j$ and $\operatorname{Im}\sum_j f_j=\sum_j b_j$. Repeated application of the real sum rule in [F6] gives derivatives of these two finite sums; the complex difference quotient has these component quotients, so its limit is the sum of the component derivatives. This proves termwise differentiation and completes the justification. [F6, algebra, induction] ∎


## Point stability, attraction and stability of a set

[Open item](item-def-expander-prereq-stability-and-attraction) · level 0


### Definition

Let $(X,d)$ be a metric space. Equip $X$ with its metric topology, $\mathbb R$ with the usual topology induced by the metric $d_{\mathbb R}(s,t)=|s-t|$, and $\mathbb R\times X$ with the product topology. A complete flow is a continuous map $\Phi:\mathbb R\times X\to X$ such that $\Phi_0(x)=x$ and $\Phi_{t+s}(x)=\Phi_t(\Phi_s(x))$ for all $s,t\in\mathbb R$ and $x\in X$. An equilibrium is a point $q$ with $\Phi_t(q)=q$ for every $t$. It is Lyapunov stable if, for every $\varepsilon>0$, there is $\delta>0$ such that $d(x,q)<\delta$ implies $d(\Phi_t(x),q)<\varepsilon$ for all $t\ge0$. A point $x$ is attracted to $q$ if $d(\Phi_t(x),q)\to0$ as $t\to\infty$; its point basin is the set of all such $x$.

For a nonempty set $C\subseteq X$, write $d(x,C)=\inf_{c\in C}d(x,c)$. The set is invariant if $\Phi_t(C)=C$ for every $t\in\mathbb R$. An invariant set $C$ is stable if, for every $\varepsilon>0$, there is $\delta>0$ such that $d(x,C)<\delta$ implies $d(\Phi_t(x),C)<\varepsilon$ for all $t\ge0$. A point $x$ is attracted to $C$ if $d(\Phi_t(x),C)\to0$ as $t\to\infty$. The attraction set of $C$ consists of all such points. The set $C$ attracts a neighbourhood if some open set containing $C$ is contained in its attraction set.

For a differentiable real function on an open subset of Euclidean space, a local minimum $q$ has a neighbourhood on which $f(x)\ge f(q)$; it is strict if the inequality is strict whenever $x\ne q$. A critical point has zero derivative, and it is isolated if some neighbourhood contains no other critical point. These properties are distinct. Stability alone does not imply that the point basin of a prescribed equilibrium in a family of equilibria is open.

### Definition references

[Metric spaces](https://alphabetamath.cc/item/def-metric-space).

[Metric topology](https://alphabetamath.cc/item/def-metric-topology).

[Euclidean local extrema and critical points](https://alphabetamath.cc/item/def-euclidean-local-extrema-and-critical-points).

[The usual metric and topology on the real line](https://alphabetamath.cc/item/lem-real-line-is-a-metric-space).

[Product topology](https://alphabetamath.cc/item/def-product-topology).

[Continuity of maps of topological spaces](https://alphabetamath.cc/item/def-continuous-map-top).

[Nonnegativity of metric distances](https://alphabetamath.cc/item/lem-metric-nonnegativity).

[The infimum property of the real numbers](https://alphabetamath.cc/item/thm-infimum-property).

[Limits of real functions at positive infinity](https://alphabetamath.cc/item/def-limits-at-infinity).

### Justification

For each $x\in X$, the set $S_x=\{d(x,c):c\in C\}$ is nonempty because $C$ is nonempty, consists of finite real numbers, and is bounded below by $0$ by metric nonnegativity. The infimum property of $\mathbb R$ therefore gives $\inf S_x\in\mathbb R$; it is nonnegative because $0$ is a lower bound, and for any $c_0\in C$ it is at most $d(x,c_0)$. Thus $d(x,C)$ is well defined, finite and nonnegative. For a singleton $C=\{q\}$, the set definitions reduce to the point definitions.

The distinction between the Euclidean properties is illustrated by the constant function, whose points are non-strict local minima and non-isolated critical points, and by $f(x)=x^3$, whose critical point $0$ is isolated but is not a local minimum.

Finally, consider the identity flow $\Phi_t(x)=x$ on $\mathbb R$ with its usual metric $d_{\mathbb R}(x,y)=|x-y|$. The map $(t,x)\mapsto x$ is continuous: for every open $U\subseteq\mathbb R$, its preimage $\mathbb R\times U$ is open in the product topology, so each $(t,x)$ with $x\in U$ has an open neighbourhood mapped into $U$. The flow identities hold, every point is an equilibrium, and choosing $\delta=\varepsilon$ proves Lyapunov stability. Since $d_{\mathbb R}(\Phi_t(x),q)=|x-q|$ is constant in time, the point basin of $q$ is $\{q\}$. This singleton is not open: for each $r>0$, the ball $(q-r,q+r)$ contains $q+r/2\ne q$. Thus stability by itself does not give an open point basin.


## Normalized phase volume and almost-everywhere assertions

[Open item](item-def-expander-prereq-phase-volume) · level 0


### Definition

Assume countable choice. Let $V$ be a nonempty finite set, let $n=|V|$, and identify $\mathbb R^V$ with $\mathbb R^n$ by any ordering of $V$. Put $T_V=\mathbb R^V/(2\pi\mathbb Z)^V$, with its quotient topology, and write $q$ for the quotient map. Put $D=(-\pi,\pi]^V$. A subset $E\subseteq T_V$ is phase-measurable exactly when $q^{-1}(E)\cap D$ is Lebesgue measurable; its normalized phase volume is $\mu(E)=(2\pi)^{-n}\lambda_n(q^{-1}(E)\cap D)$. This is the complete probability measure obtained by pushing normalized Lebesgue measure on $D$ through $q$. Write $\mathcal M_V$ for the sigma-algebra of phase-measurable sets. Phase measurability and normalized phase volume are independent of the ordering of $V$.

A set is phase-null when it is phase-measurable and has volume zero. A statement holds for almost every initial phase when it holds outside a phase-null set. A uniformly sampled phase configuration is a random element $X:(\Omega,\mathcal F,\mathbb P)\to(T_V,\mathcal M_V)$ on a probability space, whose law is $\mu$: for every $E\in\mathcal M_V$, $\mathbb P(X^{-1}(E))=\mu(E)$. An angular chart is the inverse of $q$ restricted to a product of open intervals, each of length less than $2\pi$; its domain is the image of that product. A subset of a chart domain is phase-null exactly when its set of chart coordinates is Lebesgue-null. Every nonempty open subset of $T_V$ has positive phase volume. Phase volume is a measure on phase space; a separately specified probability law for a random graph is a different measure.

### Definition references

[math:def-quotient-topology](https://alphabetamath.cc/item/def-quotient-topology)

[math:def-product-topology](https://alphabetamath.cc/item/def-product-topology)

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra](https://alphabetamath.cc/item/def-lebesgue-measure-and-the-lebesgue-sigma-algebra)

[math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure)

[math:def-random-element-and-real-random-variable](https://alphabetamath.cc/item/def-random-element-and-real-random-variable)

[math:def-law-or-distribution-of-a-random-element](https://alphabetamath.cc/item/def-law-or-distribution-of-a-random-element)

[math:def-borel-sigma-algebra](https://alphabetamath.cc/item/def-borel-sigma-algebra)

[math:thm-borel-sets-are-lebesgue-measurable](https://alphabetamath.cc/item/thm-borel-sets-are-lebesgue-measurable)

[math:cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps](https://alphabetamath.cc/item/cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps)

[math:def-sigma-algebra](https://alphabetamath.cc/item/def-sigma-algebra)

[math:def-measure](https://alphabetamath.cc/item/def-measure)

[math:def-measurable-space](https://alphabetamath.cc/item/def-measurable-space)

[math:def-complete-measure-space](https://alphabetamath.cc/item/def-complete-measure-space)

### Facts & Assumptions

**Given:** Countable choice and a nonempty finite set $V$ with $n=|V|$.

**Goal:** Verify the measure, ordering independence, uniform sampling, chart-nullity, positivity, and rescaling assertions in the definition.

[F1] Lebesgue measure on $\mathbb R^n$ is complete under countable choice, and a box has measure equal to the product of its side lengths, irrespective of which faces are included ([math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra](https://alphabetamath.cc/item/def-lebesgue-measure-and-the-lebesgue-sigma-algebra), [math:thm-lebesgue-measure-is-a-complete-measure](https://alphabetamath.cc/item/thm-lebesgue-measure-is-a-complete-measure), [math:thm-lebesgue-measure-of-a-box-of-every-kind](https://alphabetamath.cc/item/thm-lebesgue-measure-of-a-box-of-every-kind), [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)).

[F2] Translation preserves Lebesgue outer measure and measurability; dilation by nonzero $c$ preserves measurability and multiplies Lebesgue measure by $|c|^n$ under countable choice ([math:thm-lebesgue-outer-measure-and-measurability-are-translation-invariant](https://alphabetamath.cc/item/thm-lebesgue-outer-measure-and-measurability-are-translation-invariant), [math:thm-lebesgue-measure-under-dilations-and-reflections](https://alphabetamath.cc/item/thm-lebesgue-measure-under-dilations-and-reflections)).

[F3] The quotient topology makes a set open exactly when its inverse image under $q$ is open; finite products of open intervals form a base for Euclidean space ([math:def-quotient-topology](https://alphabetamath.cc/item/def-quotient-topology), [math:def-product-topology](https://alphabetamath.cc/item/def-product-topology)).

[F4] On the period-one finite torus, normalized volume of a Borel set is Lebesgue measure of its inverse image in $[0,1)^n$; the same Borel volume is obtained using any translated half-open unit cube ([math:def-the-one-dimensional-torus-and-normalized-haar-integral](https://alphabetamath.cc/item/def-the-one-dimensional-torus-and-normalized-haar-integral)).

[F5] The Borel sigma-algebra of a topological space is the sigma-algebra generated by its open sets. Under countable choice every Borel subset of $\mathbb R^n$, $n\ge1$, is Lebesgue measurable ([math:def-borel-sigma-algebra](https://alphabetamath.cc/item/def-borel-sigma-algebra), [math:thm-borel-sets-are-lebesgue-measurable](https://alphabetamath.cc/item/thm-borel-sets-are-lebesgue-measurable)).

[F6] Under countable choice, every orthogonal linear map of $\mathbb R^n$ preserves Lebesgue measurability and measure. Here orthogonal means a linear bijection preserving the standard inner product $\langle x,y\rangle=\sum_{i=1}^n x_i y_i$ ([math:cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps](https://alphabetamath.cc/item/cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps)).

[F7] A probability space is a measurable space with a measure of total mass one. A random element of a measurable space is a measurable map from a probability space; its law assigns $E$ the probability of its inverse image ([math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure), [math:def-random-element-and-real-random-variable](https://alphabetamath.cc/item/def-random-element-and-real-random-variable), [math:def-law-or-distribution-of-a-random-element](https://alphabetamath.cc/item/def-law-or-distribution-of-a-random-element)).

[F8] A sigma-algebra is closed under complements relative to its ambient set and under countable unions. A measurable space is a set together with a sigma-algebra. A measure is a nonnegative extended-real-valued function on a sigma-algebra, zero on the empty set and countably additive on disjoint sequences. A measure space is complete if every subset of every measurable null set is measurable ([math:def-sigma-algebra](https://alphabetamath.cc/item/def-sigma-algebra), [math:def-measurable-space](https://alphabetamath.cc/item/def-measurable-space), [math:def-measure](https://alphabetamath.cc/item/def-measure), [math:def-complete-measure-space](https://alphabetamath.cc/item/def-complete-measure-space)).

[F9] For any measure $\nu$ and sequence of measurable sets $(E_k)$, $\nu(\bigcup_k E_k)\le\sum_k\nu(E_k)$ ([math:thm-finite-and-countable-subadditivity-of-measures](https://alphabetamath.cc/item/thm-finite-and-countable-subadditivity-of-measures)).

### Justification

**Proof technique:** direct.

1.1 Each coordinate has a unique representative in $(-\pi,\pi]$ modulo $2\pi\mathbb Z$, so $q|_D$ is a bijection. Inverse images under this bijection preserve complements and countable unions. Consequently the displayed measurable sets form a sigma-algebra, and their assigned values form a measure by countable additivity of Lebesgue measure. The box formula gives $\lambda_n(D)=(2\pi)^n$, so the total mass is one. If a phase-measurable set has zero volume, the inverse image in $D$ of any subset is a subset of a Lebesgue-null set and hence is measurable and null; thus this pushforward measure is complete. [given, F1, F8]

1.2 Let $a,b:\mathbb R^V\to\mathbb R^n$ be the coordinate identifications from two orderings of $V$, and put $P=b\circ a^{-1}$. This is a linear bijection permuting coordinates, with inverse given by the reverse permutation. Reindexing the finite sum gives $\sum_{i=1}^n(Px)_i(Py)_i=\sum_{i=1}^n x_i y_i$, so $P$ is orthogonal. For every $E\subseteq T_V$ it carries $a(D)$ to $b(D)$ and $a(q^{-1}(E)\cap D)$ to $b(q^{-1}(E)\cap D)$. Apply orthogonal invariance to $P$ and $P^{-1}$: one representative set is Lebesgue measurable exactly when the other is, and their measures agree. The factor $(2\pi)^{-n}$ is the same for both orderings, proving independence of phase measurability and volume. Coordinate permutations also carry open boxes to open boxes, so the product and quotient topologies used here do not depend on the ordering. [given, F3, F6]

2.1 By step 1.1, $(T_V,\mathcal M_V,\mu)$ is a probability space. Its identity map is measurable because the inverse image of $E\in\mathcal M_V$ is $E$ itself, and its law assigns $E$ the value $\mu(E)$. It is therefore a uniformly sampled phase configuration in the stated sense, so this formulation has a realization on a probability space. [step 1.1, F7, F8]

2.2 Let $U$ be a product of intervals of length less than $2\pi$. Distinct points of $U$ cannot differ by a nonzero vector in $(2\pi\mathbb Z)^V$, so $q|_U$ is injective. It is an open map onto its image: the inverse image under $q$ of the image of an open subset of $U$ is the union of its lattice translates, which is open. Thus its inverse is an angular chart. For $A\subseteq U$, the set $q^{-1}(q(A))\cap D$ is the countable union over $k\in\mathbb Z^V$ of $(A+2\pi k)\cap D$. Translation invariance and countable subadditivity show that if $A$ is Lebesgue-null then this inverse image is null. Conversely, $A$ is contained in the countable union of translates of $q^{-1}(q(A))\cap D$; if the latter is null, then so is $A$. Completeness makes each null set in this argument measurable, proving the chart equivalence. [step 1.1, F1, F2, F3, F8, F9]

3.1 If $O\subseteq T_V$ is nonempty and open, its inverse image is nonempty and open. It contains a nonempty product $B$ of bounded open intervals, each shorter than $2\pi$. By the box formula $B$ has positive Lebesgue measure. If $O$ had zero phase volume, the chart equivalence would make $B$ null, a contradiction. Also $q^{-1}(O)$ is open, and $D$ is Borel, since it is the finite intersection of the open coordinate conditions $-\pi<x_v$ and the closed coordinate conditions $x_v\le\pi$. Thus $q^{-1}(O)\cap D$ is Borel and is Lebesgue measurable under countable choice, proving that $O$ is phase-measurable. Since $\mathcal M_V$ is a sigma-algebra containing the open sets, it contains the Borel sigma-algebra of $T_V$. [step 1.1, step 2.2, F1, F3, F5]

4.1 Scaling representatives by $1/(2\pi)$ induces a bijection from $T_V$ to $\mathbb R^n/\mathbb Z^n$, and $D$ becomes $(-1/2,1/2]^n$. Scaling and inverse scaling carry Euclidean open sets to open sets, so the induced quotient bijection is a homeomorphism. Its inverse images preserve complements and countable unions, so it and its inverse preserve Borel sets. For a Borel set, the dilation formula turns the normalized volume in the definition into the period-one volume computed on this translated half-open cube. Hence the construction has the stated $2\pi$ normalization and agrees on Borel sets with the supplied finite-torus measure. The completed pushforward in step 1.1 supplies the phase-null and almost-everywhere conventions without imposing a law on any graph. [step 1.1, step 3.1, F2, F3, F4, F5] ∎


## Energy dissipation along a downward gradient curve

[Open item](item-prop-expander-prereq-gradient-dissipation) · level 0


### Statement

Let $(M,g)$ be a smooth Riemannian manifold, let $U:M\to\mathbb R$ be smooth, and let $q:[0,\infty)\to M$ be a $C^1$ downward gradient curve: $q'(t)=-\operatorname{grad}_g U(q(t))$. At $t=0$ the derivative is understood from the right. The gradient is the vector field characterized by $g_x(\operatorname{grad}_g U(x),v)=dU_x(v)$ for every $v\in T_xM$; write $\|v\|_g^2=g_x(v,v)$. Then $\frac{d}{dt}U(q(t))=-\|\operatorname{grad}_g U(q(t))\|_g^2$, with a right derivative at $0$, and $U(q(t))$ is nonincreasing. If $U$ is bounded below along the curve, there is a finite limit $L=\lim_{t\to\infty}U(q(t))$ and $$\int_0^\infty\|\operatorname{grad}_g U(q(t))\|_g^2\,dt=U(q(0))-L.$$ Here the integral is the limit of the finite-interval integrals. Square-integrability of the speed is not asserted to imply finite length or convergence to a single point.

### Facts & Assumptions

**Given:** The manifold, metric, potential and curve in the statement.

[F1] The gradient is the metric dual of the differential, and the metric is positive definite ([math:def-riemannian-gradient-of-a-smooth-function](https://alphabetamath.cc/item/def-riemannian-gradient-of-a-smooth-function), [math:def-riemannian-metric-and-riemannian-manifold](https://alphabetamath.cc/item/def-riemannian-metric-and-riemannian-manifold)).

[F2] In Euclidean coordinates the derivative of a composition is the composition of the derivatives ([math:thm-chain-rule-for-total-derivatives](https://alphabetamath.cc/item/thm-chain-rule-for-total-derivatives)).

[F3] The fundamental theorem integrates the derivative of a continuously differentiable real function on an interval with endpoints in its domain ([math:lem-fundamental-theorem-and-integration-by-parts](https://alphabetamath.cc/item/lem-fundamental-theorem-and-integration-by-parts)).

[F4] A continuous real function on a closed interval, differentiable in its interior, has an interior derivative equal to its secant slope ([math:lem-mean-value-theorem-on-closed-interval](https://alphabetamath.cc/item/lem-mean-value-theorem-on-closed-interval)).

[F5] Every nonempty real set bounded below has a greatest lower bound ([math:thm-infimum-property](https://alphabetamath.cc/item/thm-infimum-property)), and values of the set lie arbitrarily close above that bound ([math:lem-inf-epsilon](https://alphabetamath.cc/item/lem-inf-epsilon)).

[F6] On each finite restriction of $q$, use chartwise $C^1$ regularity with continuous first derivatives and the one-sided endpoint convention; the derivatives match at interior subdivision points, so there are no interior corners ([math:def-piecewise-c-one-curve-on-a-manifold](https://alphabetamath.cc/item/def-piecewise-c-one-curve-on-a-manifold)).

[F7] In a smooth chart $x=(x^1,\ldots,x^n)$ around $p$, the coordinate derivation $\partial_i|_p$ acts on a smooth local function $h$ by $\partial_i|_p([h])=\partial_i(h\circ x^{-1})(x(p))$, and these derivations form a basis of $T_pM$ ([math:def-coordinate-derivations-at-a-point](https://alphabetamath.cc/item/def-coordinate-derivations-at-a-point), [math:thm-coordinate-derivations-form-a-basis-of-the-tangent-space](https://alphabetamath.cc/item/thm-coordinate-derivations-form-a-basis-of-the-tangent-space)).

[F8] The differential of a smooth real-valued function acts on a tangent derivation by $dh_p(v)=v([h])$ ([math:def-differential-of-a-smooth-real-valued-function](https://alphabetamath.cc/item/def-differential-of-a-smooth-real-valued-function)).

### Proof

**Given:** The manifold, metric, potential and curve in the statement.

**Proof technique:** direct.

**Goal:** Prove the energy dissipation identity, monotonicity and the stated limiting integral.

1.1 Fix $t\ge0$, put $p=q(t)$, choose a smooth chart $x$ around $p$, and write $y=x\circ q$ near $t$. By [F6], $y$ is $C^1$, with the right derivative at $0$. By [F7], $V_t=\sum_i y_i'(t)\partial_i|_p$ is a tangent vector. For any smooth local function $h$ near $p$, [F7], [F8] and the Euclidean chain rule give $dh_p(V_t)=\sum_i y_i'(t)\partial_i(h\circ x^{-1})(y(t))=(h\circ q)'(t)$ when $t>0$. At zero, substitute $y(s)=y(0)+s y'_+(0)+o(s)$ as $s\downarrow0$ into the first-order expansion of $h\circ x^{-1}$ to obtain the same identity with right derivatives. These identities determine the action of $V_t$ on every smooth germ by [F8], independently of the chart. Thus $V_t$ is the intrinsic tangent velocity denoted by $q'(t)$, including its right endpoint value. [given, F2, F6, F7, F8, construct, algebra]

2.1 Put $f(t)=U(q(t))$. Step 1.1 with $h=U$ gives $f'(t)=dU_{q(t)}(q'(t))$, with the right derivative at zero. The chartwise $C^1$ curve and the smooth potential make this derivative continuous, including from the right at zero. Substituting the downward gradient equation and the metric-dual identity yields $f'(t)=-g_{q(t)}(\operatorname{grad}_g U,\operatorname{grad}_g U)=-\|\operatorname{grad}_g U(q(t))\|_g^2\le0$. [given, F1, F2, F6, F8, step 1.1, algebra]

3.1 For $0\le a<b$, the mean value theorem applied to $f$ on $[a,b]$ gives $f(b)-f(a)=f'(c)(b-a)\le0$ for some $c\in(a,b)$. Thus $f$ is nonincreasing. [step 2.1, F4]

3.2 For $T>0$, extend $f$ to a continuously differentiable real function on an open interval containing $[0,T]$ by setting $f(t)=f(0)+t f'_+(0)$ for $t<0$ near zero. The fundamental theorem and step 2.1 give $\int_0^T\|\operatorname{grad}_g U(q(t))\|_g^2\,dt=f(0)-f(T)$. [step 2.1, F3, construct, algebra]

4.1 Suppose $f$ is bounded below and set $L=\inf\{f(t):t\ge0\}$. This is finite because the set is nonempty and bounded below. For every $\varepsilon>0$ there is $s\ge0$ with $f(s)<L+\varepsilon$; for all $t\ge s$, monotonicity gives $L\le f(t)\le f(s)<L+\varepsilon$. Hence $f(t)\to L$ as $t\to\infty$. Taking the limit in step 3.2 proves the stated improper integral identity. Since $q'=-\operatorname{grad}_g U$, its squared speed is the integrand. [given, F5, step 3.1, step 3.2, algebra] ∎


## Local minima and nonnegative second variation

[Open item](item-prop-expander-prereq-second-variation-test) · level 0


### Statement

Let $U$ be a real-valued $C^2$ function on an open set $O\subseteq\mathbb R^m$, and let $q\in O$ be a local minimum. Thus $U$ has continuous partial derivatives through order two, and $U(q)\le U(x)$ for all $x$ in some neighbourhood of $q$. Write $H=\nabla^2U(q)$ for the matrix of second partial derivatives. Then $\nabla U(q)=0$ and $v^THv\ge0$ for every $v\in\mathbb R^m$. The matrix $H$ is real symmetric, and $z^*Hz\ge0$ for every $z\in\mathbb C^m$, where $z^*$ is the conjugate transpose. Consequently, if $H$ has a strictly negative eigenvalue, $q$ cannot be a local minimum. An eigenvalue here is a scalar $\lambda$ for which $Hw=\lambda w$ for some nonzero vector $w$. This is a necessary condition; no converse is asserted.

### Facts & Assumptions

**Given:** The function $U$, open set $O$, and local minimum $q$ in the statement.

**Goal:** Prove the vanishing gradient, the real and complex quadratic-form inequalities, and the negative-eigenvalue exclusion.

[F1] The local-minimum and Hessian conventions are those of [math:def-euclidean-local-extrema-and-critical-points](https://alphabetamath.cc/item/def-euclidean-local-extrema-and-critical-points) and [math:def-hessian-and-euclidean-critical-point](https://alphabetamath.cc/item/def-hessian-and-euclidean-critical-point).

[F2] At an interior differentiable local minimum the gradient vanishes, by [math:thm-fermat-for-euclidean-local-extrema](https://alphabetamath.cc/item/thm-fermat-for-euclidean-local-extrema).

[F3] For a $C^2$ scalar function, the second-order Taylor expansion at $q$ has remainder $o(\|h\|^2)$, by [math:cor-second-order-taylor-expansion-with-the-hessian](https://alphabetamath.cc/item/cor-second-order-taylor-expansion-with-the-hessian).

[F4] Continuous second partial derivatives commute, so $H$ is symmetric, by [math:thm-clairaut-schwarz-mixed-partials](https://alphabetamath.cc/item/thm-clairaut-schwarz-mixed-partials).

### Proof

**Proof technique:** direct.

1.1 Since $O$ is open, $q$ is an interior point; $U$ is differentiable there. Hence $\nabla U(q)=0$ by [F2]. [given, F2]

2.1 Fix $v\in\mathbb R^m$. For sufficiently small real $t$, the local-minimum property gives $U(q+tv)-U(q)\ge0$. Taylor expansion and step 1.1 give $U(q+tv)-U(q)=\tfrac12t^2v^THv+o(t^2)$ as $t\to0$ when $v\ne0$; the case $v=0$ is immediate. Dividing by $t^2>0$ and taking the limit yields $v^THv\ge0$. [given, F1, F3, step 1.1]

3.1 By [F4], $H=H^T$. For $z=x+iy$ with $x,y\in\mathbb R^m$, direct expansion gives $z^*Hz=x^THx+y^THy+i(x^THy-y^THx)=x^THx+y^THy\ge0$. [F4, step 2.1, algebra]

4.1 If $Hw=\lambda w$ for a nonzero complex vector $w$ and a real $\lambda<0$, then $w^*Hw=\lambda w^*w<0$, contradicting step 3.1. Thus a strictly negative eigenvalue excludes a local minimum. [step 3.1, algebra] ∎


## Explicit scalar quadratic descent and its forward domain

[Open item](item-prop-expander-prereq-scalar-quadratic-flow) · level 0


### Statement

Let $a>0$ and $x_0\in\mathbb R$. A solution means a differentiable real-valued function on an interval containing $0$ that satisfies $\dot x=-ax^2$ and $x(0)=x_0$. On the largest open interval containing $0$ on which $1+ax_0t\ne0$, the unique solution is $x(t)=x_0/(1+ax_0t)$. If $x_0\ge0$, it exists for all $t\ge0$ and tends to zero as $t\to\infty$. If $x_0<0$, its maximal forward interval is $[0,-1/(ax_0))$.

For finitely many independent coordinates $\dot x_i=-a_i x_i^2$, where $n\ge1$ and every $a_i>0$, every initial point in $(0,\infty)^n$ has a forward solution converging to the origin. For vector solutions, convergence to the origin as $t\to\infty$ means that for every $\varepsilon>0$ there is $T\ge0$ such that $\|x(t)\|_2<\varepsilon$ for all $t>T$, where $\|z\|_2=(\sum_{i=1}^n z_i^2)^{1/2}$ is the Euclidean norm. Here the attraction region of the origin is the set of initial points in $\mathbb R^n$ whose unique solutions exist for every $t\ge0$ and converge to the origin as $t\to\infty$. Assuming countable choice, the attraction region contains the positive-Lebesgue-measure box $(0,1)^n$. This attraction conclusion is a dynamical statement and does not require a second-order classification of the origin.

### Facts & Assumptions

**Given:** The coefficients, initial values and independent equations in the Statement; countable choice is assumed for the measure assertion.

[F1] A solution of an initial-value problem is a differentiable function on an interval containing the initial time and satisfying the equation and initial condition ([math:def-first-order-ode-initial-value-problem-and-solution](https://alphabetamath.cc/item/def-first-order-ode-initial-value-problem-and-solution)).

[F2] A continuous vector field that is locally Lipschitz in its state variable has a unique local solution; any two solutions through the same initial data agree on every common interval containing the initial time ([math:def-locally-lipschitz-in-the-state-variable](https://alphabetamath.cc/item/def-locally-lipschitz-in-the-state-variable), [math:thm-picard-lindelof-local-existence-and-uniqueness](https://alphabetamath.cc/item/thm-picard-lindelof-local-existence-and-uniqueness)).

[F3] The sum, product, quotient and chain rules apply to differentiable real functions where the relevant denominator is nonzero ([math:lem-derivative-algebra-and-chain-rules](https://alphabetamath.cc/item/lem-derivative-algebra-and-chain-rules)).

[F4] Under countable choice, an $n$-dimensional open box is Lebesgue measurable and its measure is the product of its side lengths ([math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice), [math:thm-lebesgue-measure-of-a-box-of-every-kind](https://alphabetamath.cc/item/thm-lebesgue-measure-of-a-box-of-every-kind)).

[F5] Local Lipschitz continuity in the state variable, locally uniform in time, means that every compact time-state cylinder in the open domain has one finite state-Lipschitz constant ([math:def-locally-lipschitz-in-the-state-variable](https://alphabetamath.cc/item/def-locally-lipschitz-in-the-state-variable)).

[F6] Convergence as $t\to+\infty$ uses the real $\varepsilon$-threshold condition. A one-sided infinite limit at $T$ is the infinite-limit condition on the restriction to $t<T$ or $t>T$, with $T$ a limit point of that restricted domain ([math:def-limits-at-infinity](https://alphabetamath.cc/item/def-limits-at-infinity), [math:def-one-sided-limits](https://alphabetamath.cc/item/def-one-sided-limits)).

[F7] A function from a nondegenerate real interval to $\mathbb R^n$ is differentiable if and only if all its components are differentiable, and its derivative has those component derivatives; this includes domain-relative endpoint derivatives ([math:def-vector-valued-derivative-and-integral](https://alphabetamath.cc/item/def-vector-valued-derivative-and-integral)).

[F8] For $z\in\mathbb R^n$, the Euclidean norm is $\|z\|_2=(\sum_{i=1}^n z_i^2)^{1/2}$, so it is nonnegative and $\|z\|_2^2=\sum_{i=1}^n z_i^2$; it is a norm inducing the Euclidean metric ([math:def-euclidean-inner-product](https://alphabetamath.cc/item/def-euclidean-inner-product), [math:thm-cauchy-schwarz-and-the-euclidean-norm](https://alphabetamath.cc/item/thm-cauchy-schwarz-and-the-euclidean-norm)).

### Proof

**Given:** The coefficients, initial values and independent equations in the Statement; countable choice is assumed for the measure assertion.

**Proof technique:** direct.

**Goal:** Establish the explicit solutions, their maximal intervals and the attraction assertion.

1.1 The field $f(x)=-ax^2$ is continuous and locally Lipschitz: for $|x|,|y|\le R$, $|f(x)-f(y)|\le2aR|x-y|$. Thus [F2] applies. On the stated open interval the quotient rule gives $\frac{d}{dt}\frac{x_0}{1+ax_0t}=-\frac{ax_0^2}{(1+ax_0t)^2}=-a\left(\frac{x_0}{1+ax_0t}\right)^2$, and the value at zero is $x_0$. It is therefore a solution by [F1], and [F2] makes every other solution agree with it on their common interval containing zero. [given, F1, F2, F3, F5]

2.1 If $x_0=0$, the formula is identically zero. If $x_0>0$, its denominator is at least one for $t\ge0$ and the quotient tends to zero. If $x_0<0$, put $T=-1/(ax_0)>0$; the formula is defined for $0\le t<T$ and tends to $-\infty$ as $t\uparrow T$. A real-valued differentiable solution on an interval extending beyond $T$ would be continuous at $T$ and, by uniqueness, equal the formula for $0\le t<T$, a contradiction. Hence its maximal forward interval is $[0,T)$. The same pole argument at the finite endpoint also shows that the stated open interval is maximal when $x_0>0$; for $x_0=0$ it is all of $\mathbb R$. [given, F2, F3, F6, step 1.1]

3.1 Apply steps 1.1 and 2.1 to each coordinate with initial values $x_{i,0}>0$. The intersection $I$ of their finitely many open solution intervals is an open interval containing $0$ and all $t\ge0$. On $I$, put $x(t)=(x_i(t))_{i=1}^n$, with $x_i(t)=x_{i,0}/(1+a_ix_{i,0}t)$. By [F7] this is a differentiable vector function with $x'(t)=(-a_ix_i(t)^2)_{i=1}^n$, so [F1] makes it a solution of the vector initial-value problem. Conversely, [F7] makes every component of any other vector solution a scalar solution; scalar uniqueness from step 1.1 gives agreement on every common interval containing $0$. [given, F1, F7, step 1.1, step 2.1]

4.1 Fix $\varepsilon>0$. For each $i$, scalar convergence from step 2.1 and [F6] give $T_i\ge0$ such that $|x_i(t)|<\varepsilon/n$ for all $t>T_i$. Choose these finitely many thresholds and take their maximum $T$; this finite choice uses no countable-choice assumption. For $t>T$, [F8] gives $\|x(t)\|_2^2=\sum_{i=1}^n x_i(t)^2<n(\varepsilon/n)^2=\varepsilon^2/n\le\varepsilon^2$. Since both the norm and $\varepsilon$ are nonnegative, $\|x(t)\|_2<\varepsilon$. This is exactly the vector convergence condition in the Statement. [given, F6, F8, step 2.1, step 3.1, algebra]

5.1 By the definition in the Statement, these forward solutions place $(0,1)^n$ in the attraction region; the box has Lebesgue measure $1$ by [F4]. No second-order classification entered this argument. [given, F4, step 3.1, step 4.1] ∎


## Sphere configurations and tangent variations

[Open item](item-def-expander-prereq-sphere-vector-configurations) · level 0



### Definition

Let $r\ge 2$ and $n\ge 1$ be integers. We use one-based labels for Euclidean coordinates: for $x\in\mathbb R^m$, the label $x_k$ denotes the supplier coordinate $x(k-1)$ for $1\le k\le m$. For $u,v\in\mathbb R^r$, write $u\cdot v=\sum_{k=1}^r u_kv_k$ and $\|u\|_2=\sqrt{u\cdot u}$ for the Euclidean inner product and norm. The unit sphere is $S^{r-1}=\{u\in\mathbb R^r:\|u\|_2=1\}$. A sphere configuration is an ordered $n$-tuple $u=(u_1,\ldots,u_n)\in(S^{r-1})^n$.

The product Euclidean inner product of two tuples $v,w\in(\mathbb R^r)^n$ is $\langle v,w\rangle=\sum_{i=1}^n v_i\cdot w_i$. A tangent variation at $u$ is a tuple $v\in(\mathbb R^r)^n$ satisfying $u_i\cdot v_i=0$ for every $i$. These tuples form the tangent space $T_u(S^{r-1})^n$ of the configuration space, with the product inner product restricted to it.

Given a real symmetric matrix $B=(b_{ij})_{1\le i,j\le n}$, so that $b_{ij}=b_{ji}$, a pair interaction energy on configurations is $E_B(u)=\sum_{i,j=1}^n b_{ij}(1-u_i\cdot u_j)$. The matrix and the product metric are part of the specified model. For $r=2$, a circle phase $\theta_i\in[0,2\pi)$ represents $u_i=(\cos\theta_i,\sin\theta_i)$.

### Definition references

[math:def-euclidean-inner-product](https://alphabetamath.cc/item/def-euclidean-inner-product)

### Justification

Identify $(\mathbb R^r)^n$ with $\mathbb R^{rn}$ by placing the scalar $(u_i)_k$ at supplier coordinate $(i-1)r+(k-1)$. Use the product Euclidean norm $\|h\|_2^2=\sum_{i=1}^n\|h_i\|_2^2$, and define $F:(\mathbb R^r)^n\to\mathbb R^n$ by $F_i(u)=u_i\cdot u_i$, where $F_i$ is output coordinate $i-1$. For each $u$, the map $L_u(v)=(2u_i\cdot v_i)_{i=1}^n$ is linear by Euclidean bilinearity ([math:def-euclidean-inner-product](https://alphabetamath.cc/item/def-euclidean-inner-product)). Expansion gives $F(u+h)-F(u)-L_u(h)=(\|h_i\|_2^2)_{i=1}^n$, whose Euclidean norm is at most $\sum_i\|h_i\|_2^2=\|h\|_2^2$: squaring this inequality leaves only nonnegative cross terms. Thus, for every $\varepsilon>0$, taking $\delta=\varepsilon$ makes the remainder at most $\varepsilon\|h\|_2$ whenever $\|h\|_2<\delta$. This proves $DF(u)=L_u$ by [math:def-total-derivative-in-euclidean-space](https://alphabetamath.cc/item/def-total-derivative-in-euclidean-space) on the open domain $\mathbb R^{rn}$.

The derivative is continuous in $u$. Indeed, Cauchy–Schwarz ([math:thm-cauchy-schwarz-and-the-euclidean-norm](https://alphabetamath.cc/item/thm-cauchy-schwarz-and-the-euclidean-norm)) gives $\|(L_u-L_w)v\|_2^2=4\sum_i|(u_i-w_i)\cdot v_i|^2\le4\sum_i\|u_i-w_i\|_2^2\|v_i\|_2^2\le4\|u-w\|_2^2\|v\|_2^2$. Consequently $\|(L_u-L_w)v\|_2\le2\|u-w\|_2\|v\|_2$, uniformly for unit $v$. The same inequality with $w=0$ and the quadratic remainder bound give $\|F(u+h)-F(u)\|_2\le2\|u\|_2\|h\|_2+\|h\|_2^2$, so $F$ is continuous. Substituting an increment supported at the scalar coordinate $(u_j)_k$ into the derivative formula gives $\partial F_i/\partial(u_j)_k=2(u_i)_k$ when $i=j$, and zero otherwise. Each nonzero entry changes in absolute value by at most $2\|u-w\|_2$, hence these partial derivatives are continuous. Together with continuity of the components this verifies that $F$ is $C^1$ in the componentwise convention of [math:def-ck-euclidean-maps-and-diffeomorphisms](https://alphabetamath.cc/item/def-ck-euclidean-maps-and-diffeomorphisms).

The configuration space is $F^{-1}(1,\ldots,1)$. At any point of this fibre, $DF(u)$ is onto: for any $a\in\mathbb R^n$, choose $v_i=(a_i/2)u_i$, giving $DF(u)v=a$. Thus $(1,\ldots,1)$ is a regular value, and the regular-level-set tangent definition ([math:def-tangent-space-to-a-regular-level-set](https://alphabetamath.cc/item/def-tangent-space-to-a-regular-level-set)) gives precisely the displayed orthogonality conditions.

The product inner product is the Euclidean inner product on $\mathbb R^{rn}$; its restriction to the tangent subspace is therefore an inner product in the sense of [math:def-inner-product-space](https://alphabetamath.cc/item/def-inner-product-space): bilinearity, symmetry and positive definiteness are preserved on a linear subspace. The real matrix entries are supplied by [math:def-matrix-space](https://alphabetamath.cc/item/def-matrix-space), with its zero-based entry $(i-1,j-1)$ denoted here by $b_{ij}$ for $1\le i,j\le n$. The energy is a finite real sum, so it is well defined for every configuration. The circle parametrization is bijective on $[0,2\pi)$ by [math:thm-sine-and-cosine-parametrize-the-unit-circle](https://alphabetamath.cc/item/thm-sine-and-cosine-parametrize-the-unit-circle), independently in each coordinate.

### Remarks

No extension of a circle-specific kernel argument or synchronization conclusion to higher spheres is asserted.


## Historical report of Huygens’s two clocks

[Open item](item-exp-expander-prereq-huygens-source-report) · level 0


### Setup

Bennett, Schatz, Rockwood and Wiesenfeld recount Christiaan Huygens’s 1665 observations of two pendulum clocks suspended side by side. In one configuration described by the authors, both clocks hung from hooks embedded in the same wooden beam. A pendulum clock uses a swinging pendulum to regulate its timekeeping mechanism.

### Procedure

According to the historical account, Huygens observed the clocks operating together and disturbed one pendulum to see what happened to their motion. The authors also recount trials with the clocks farther apart or swinging in perpendicular planes. This item reports their account; it does not reproduce the historical procedure.

### Observations

The authors report that the pendulums swung at the same frequency and in antiphase: their swings were opposite in phase, separated by half a cycle. After one pendulum was disturbed, the antiphase motion returned in approximately half an hour. The account says synchronization did not occur when the clocks were separated or swung in perpendicular planes.

### Uncertainty

The historical report, as presented in the inspected passages, gives no calibrated uncertainty or sample size for the phase and frequency observation. The half-hour restoration time is reported approximately; no additional precision is inferred here.

### Interpretation

The source recounts Huygens’s inference that small movements of the shared support provided the interaction between the clocks. This is a physical interpretation of the observations. The account does not identify the clocks with homogeneous graph Kuramoto oscillators or establish a theorem about their dynamics, and this item makes no independent claim about priority among recorded observations.

### Source notes

The account is drawn from Sections 1 and 2(a), printed pages 563–566, of Bennett and coauthors’ [Huygens’s clocks](https://schatzlab.gatech.edu/Library/Bennett2002.pdf). Figure 1 shows their modern apparatus, not the historical clocks. The original letters and notebook were not independently inspected, and neither experiment was reproduced here.


## Translate a local diffeomorphism and its spectral data to the origin

[Open item](item-lem-author-4c1c39929ecb-fixed-point-translation) · level 0


### Statement

Let $h:U\to\mathbb R^m$ be a $C^r$ local diffeomorphism, $r\ge1$ a finite integer, with $U$ open and $h(p)=p$. Here local diffeomorphism means that around each point the map has a $C^r$ inverse onto an open image. Set $\tau(y)=p+y$, $V=U-p$, and $f=\tau^{-1}\circ h\circ\tau$. Then $f:V\to\mathbb R^m$ is a $C^r$ local diffeomorphism fixing zero, $Df(0)=Dh(p)$, and the generalized eigenspaces of these two matrices coincide. For a real matrix, spectral subspaces for nonreal eigenvalues mean the real forms of the conjugation-invariant sums in its complexification. Here $C^r$ uses continuous iterated Fréchet derivatives through order $r$. The complexification has canonical conjugation $\sigma(z\otimes v)=\overline z\otimes v$, and the real form of an invariant complex subspace $W$ means $W^\sigma=\{w\in W:\sigma(w)=w\}$, identified with a subspace of $\mathbb R^m$ via $v\mapsto1\otimes v$.

### Facts & Assumptions

[F1] The total derivative obeys the Euclidean chain rule [math:thm-chain-rule-for-total-derivatives](https://alphabetamath.cc/item/thm-chain-rule-for-total-derivatives).

[F2] Finite $C^r$ regularity means that the iterated Fréchet derivatives exist and are continuous in their iterated operator norms [math:def-c-k-map-between-banach-spaces](https://alphabetamath.cc/item/def-c-k-map-between-banach-spaces). Fréchet differentiability means a bounded linear approximation with a remainder whose norm divided by the increment norm tends to zero [math:def-frechet-derivative-between-banach-spaces](https://alphabetamath.cc/item/def-frechet-derivative-between-banach-spaces). These definitions apply to $\mathbb R^m$ and its Banach spaces of iterated derivative values.

[F3] Generalized eigenspaces are the kernels $\ker(T-\lambda I)^k$ [math:def-primary-component-and-generalised-eigenspace](https://alphabetamath.cc/item/def-primary-component-and-generalised-eigenspace).

[F4] The complexification is $\mathbb C\otimes_{\mathbb R}\mathbb R^m$ with real embedding $v\mapsto1\otimes v$ [math:def-complexification-of-a-real-vector-space](https://alphabetamath.cc/item/def-complexification-of-a-real-vector-space), and a real operator $T$ extends as $T_{\mathbb C}(z\otimes v)=z\otimes T(v)$ [math:def-complexification-of-a-real-linear-map](https://alphabetamath.cc/item/def-complexification-of-a-real-linear-map).

[F5] The canonical conjugation is $\sigma(z\otimes v)=\overline z\otimes v$ [math:def-conjugation-and-real-structure-on-a-complex-vector-space](https://alphabetamath.cc/item/def-conjugation-and-real-structure-on-a-complex-vector-space). The fixed real form of a conjugation-invariant subspace $W$ is $W^\sigma$ [math:def-fixed-real-form-of-a-conjugation](https://alphabetamath.cc/item/def-fixed-real-form-of-a-conjugation).

### Proof

**Given:** The map, fixed point, finite integer regularity and conventions in the Statement.

**Goal:** Establish the translated local diffeomorphism and unchanged spectral data.

1.1 Translation $\tau$ has inverse $x\mapsto x-p$; both preserve distances, so they carry each open ball to an open ball of the same radius and preserve openness. In particular $V$ is open. Their first derivatives are identity maps and their higher derivatives vanish, as follows from the zero remainders for affine maps and then differentiating a constant derivative. [given, F2]

2.1 To check every required derivative, let $H:O\to\mathbb R^m$ be any $C^r$ map on an open set, and set $g(y)=H(a+y)+b$ on $O-a$. Its differentiability remainder equals $H(a+y+u)-H(a+y)-DH(a+y)u$, so $Dg(y)=DH(a+y)$. Inductively, if $D^jg(y)=D^jH(a+y)$ for $1\le j<r$, apply the same remainder identity to the Banach-valued map $D^jH$ to obtain $D^{j+1}g(y)=D^{j+1}H(a+y)$. Continuity of $g$ and each derivative follows from that of $H$ and $D^jH$: increments from $y$ to $y'$ become the equal increments from $a+y$ to $a+y'$, and the derivative-value norms are unchanged. Thus $g$ is $C^r$, including in the iterated operator norms. [F2, step 1.1]

3.1 Apply step 2.1 with $H=h$, $a=p$, and $b=-p$ to obtain that $f$ is $C^r$. For any $q\in U$, choose an open neighbourhood $N\subseteq U$ on which $h$ has a $C^r$ inverse $k:h(N)\to N$, with $h(N)$ open. Then $f$ maps $N-p$ bijectively onto $h(N)-p$, with inverse $z\mapsto k(p+z)-p$. Step 2.1 applied to $k$ proves that inverse is $C^r$, and step 1.1 makes both domains open. This proves local diffeomorphism at every $q-p\in V$. Also $f(0)=h(p)-p=0$. [given, step 1.1, step 2.1]

4.1 The chain rule and the identity derivatives of translation give $Df(0)=I\,Dh(p)\,I=Dh(p)$. [F1, step 1.1, step 3.1]

5.1 Since the real operators are equal, their complexifications are equal by the formula in [F4]. Hence for every $\lambda\in\mathbb C$ and integer $k\ge1$ the powers $(Df(0)_{\mathbb C}-\lambda I)^k$ and $(Dh(p)_{\mathbb C}-\lambda I)^k$ and their kernels agree. Thus the generalized eigenspaces, their conjugation-invariant sums, and the fixed real forms of those sums coincide. The fixed forms are regarded in the original real space: writing a tensor as $1\otimes x+i\otimes y$ shows that being fixed by $\sigma$ forces $y=0$, since $v\mapsto1\otimes v$ is an embedding. This also verifies the stated real-subspace convention. [step 4.1, F3, F4, F5] ∎


## Translation preserves an embedded disc and its tangent space

[Open item](item-lem-author-4c1c39929ecb-translated-tangent-discs) · level 0


### Statement

Let $0\le d\le m$ be integers and let $r\in\{1,2,\ldots\}\cup\{\infty\}$. For maps between positive-dimensional Euclidean open sets, $C^r$ has its componentwise meaning: every iterated coordinate partial derivative of order at most $r$ exists and is continuous, with every finite order required when $r=\infty$. Maps with zero-dimensional source or target are declared $C^r$; their total derivatives are the unique linear maps in the corresponding zero-dimensional case. A $C^r$ embedded $d$-disc here is the image $W=j(D)$ of a $C^r$ map $j:D\to\mathbb R^m$ from a nonempty open ball $D\subseteq\mathbb R^d$ that is injective, is a homeomorphism onto its image with the subspace topology, and has injective total derivative everywhere.

At $x=j(a)$, identify tangent vectors with vectors of $\mathbb R^m$ and set $T_xW=\operatorname{im}Dj(a)$. This tangent subspace is independent of the admissible parametrization of the image disc.

Assume explicitly that $0\in D$ and $j(0)=0$. For any $p\in\mathbb R^m$, the translated set $W_p=p+W$ is a $C^r$ embedded $d$-disc through $p$, parametrized by $j_p(a)=p+j(a)$, and $T_pW_p=T_0W$ under these Euclidean identifications. The zero-dimensional disc is allowed and is a singleton with zero tangent subspace.

### Statement references

[math:def-total-derivative-in-euclidean-space](https://alphabetamath.cc/item/def-total-derivative-in-euclidean-space)

[math:def-ck-euclidean-maps-and-diffeomorphisms](https://alphabetamath.cc/item/def-ck-euclidean-maps-and-diffeomorphisms)

[math:def-homeomorphism-and-open-maps](https://alphabetamath.cc/item/def-homeomorphism-and-open-maps)

[math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top)

### Facts & Assumptions

[F1] Total derivatives use the linear approximation with normwise remainder in [math:def-total-derivative-in-euclidean-space](https://alphabetamath.cc/item/def-total-derivative-in-euclidean-space), including zero dimensions. The positive-dimensional $C^r$ convention is [math:def-ck-euclidean-maps-and-diffeomorphisms](https://alphabetamath.cc/item/def-ck-euclidean-maps-and-diffeomorphisms); for $r\ge1$ it supplies $C^1$ regularity and continuous total derivative. The zero-dimensional convention is stated above.

[F2] A homeomorphism is a continuous bijection with continuous inverse [math:def-homeomorphism-and-open-maps](https://alphabetamath.cc/item/def-homeomorphism-and-open-maps). The image carries the subspace topology, whose open sets are traces of ambient open sets, and restrictions and corestrictions of continuous maps obey its characteristic property [math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top).

[F3] At a positive-dimensional immersion point, [math:cor-euclidean-immersion-normal-form-and-local-embedding](https://alphabetamath.cc/item/cor-euclidean-immersion-normal-form-and-local-embedding) with $k=1$ supplies local $C^1$ source and ambient coordinates in which the map is the inclusion $u\mapsto(u,0)$. Derivatives of composites satisfy [math:thm-chain-rule-for-total-derivatives](https://alphabetamath.cc/item/thm-chain-rule-for-total-derivatives).

### Proof

**Given:** The dimensions, differentiability order, embedding, explicit basepoint hypotheses and translation in the Statement.

**Goal:** Preserve embeddedness, dimension and the intrinsic tangent subspace.

1.1 Define $j_p(a)=p+j(a)$. The remainder identity $j_p(a+h)-j_p(a)-Dj(a)h=j(a+h)-j(a)-Dj(a)h$ proves $Dj_p(a)=Dj(a)$ directly from [F1]. In positive source and target dimensions, the first coordinate difference quotients cancel the constant $p$; induction on the length of a nonempty word of coordinate derivatives shows that all those derivatives of $j_p$ equal those of $j$. The order-zero map $j_p$ is continuous because translation preserves Euclidean distances. Hence $j_p$ is $C^r$, including $r=\infty$. In zero source or target dimension, the stated $C^r$ convention and the zero derivative give the same conclusions. [given, F1, algebra]

1.2 To justify the tangent convention intrinsically, let $k:E\to W$ be another admissible parametrization with $k(b)=j(a)=x$, first with both parameter dimensions positive. The immersion normal form in [F3] gives a $C^1$ map $L$ on an ambient neighbourhood of $x$ satisfying $L(j(v))=v$ on a domain neighbourhood $V$ of $a$: project onto the inclusion coordinates and undo the source coordinate change. Shrink $V$ so that $j(V)$ is inside that ambient neighbourhood. Because $j$ is a homeomorphism onto $W$, $j(V)$ is relatively open in $W$. By continuity of $k$ and [F2], a neighbourhood of $b$ maps into $j(V)$. There the transition $\phi=L\circ k$ is $C^1$, satisfies $\phi(b)=a$ and $j\circ\phi=k$, and the chain rule gives $Dk(b)=Dj(a)D\phi(b)$. Consequently $\operatorname{im}Dk(b)\subseteq\operatorname{im}Dj(a)$. [given, F1, F2, F3]

2.1 The equality $j_p(a)=j_p(b)$ implies $j(a)=j(b)$ and hence $a=b$. Translation and its inverse preserve distances, and thus are continuous on Euclidean spaces and their subspaces. The inverse of $j_p:D\to W_p$ is $x\mapsto j^{-1}(x-p)$; it is continuous by the given homeomorphism and the subspace property in [F2]. Thus $j_p$ is a homeomorphism onto $W_p$. Its derivative is injective by step 1.1, so it is an embedded disc with parameter dimension $d$. [given, F2, step 1.1]

2.2 Interchanging $j$ and $k$ in step 1.2 gives the reverse inclusion, so the tangent subspace is independent of parametrization, even if the parameter dimensions were initially different. If one parameter dimension is zero, the image $W$ is a singleton. An injective parametrization of that image from a nonempty open ball of positive dimension is impossible, since such a ball has two distinct points. Thus the other parameter dimension is also zero, and both derivative images are the zero subspace by [F1]. This also covers ambient dimension zero, since an injective derivative into the zero space forces parameter dimension zero. [given, F1, step 1.2]

3.1 The explicit basepoint hypotheses give $j_p(0)=p+j(0)=p$. Steps 1.1 and 2.1 show that $W_p$ is an embedded $d$-disc, and steps 1.2 and 2.2 justify applying the tangent convention at each basepoint. Therefore $T_pW_p=\operatorname{im}Dj_p(0)=\operatorname{im}Dj(0)=T_0W$. For $d=0$, $D=\{0\}$, $W=\{0\}$, and $W_p=\{p\}$, with zero tangent subspace as asserted. [given, step 1.1, step 2.1, step 1.2, step 2.2] ∎


## Adapted norm balls are ordinary Euclidean neighbourhoods

[Open item](item-lem-author-4c1c39929ecb-adapted-ball-neighbourhoods) · level 0


### Statement

Let $m$ be a nonnegative integer, let $p\in\mathbb R^m$, let $N$ be any norm on $\mathbb R^m$, and let $\rho>0$. Write $|\cdot|_2$ for the Euclidean norm and $d_2(y,z)=|y-z|_2$ for its metric. The set $B_N(0,\rho)=\{y\in\mathbb R^m:N(y)<\rho\}$ is an open Euclidean neighbourhood of zero. Its translate $p+B_N(0,\rho)=\{p+y:y\in B_N(0,\rho)\}$ is an open Euclidean neighbourhood of $p$.

The following specifies the shrinking assertion for orbit trapping. Let $B$ be either of these two neighbourhoods, let $B'\subseteq B$, let $X$ be a set, let $\Phi_n:X\to\mathbb R^m$ be maps for every integer $n\ge0$, and let $W\subseteq X$. If, for every $x\in X$, the condition $\Phi_n(x)\in B$ for every $n\ge0$ implies $x\in W$, then the condition $\Phi_n(x)\in B'$ for every $n\ge0$ also implies $x\in W$. In particular, $B$ may be replaced by any smaller open neighbourhood of its centre in such an implication.

### Facts & Assumptions

[F1] For $m\ge1$, norm equivalence gives constants $c,C>0$ with $c|y|_2\le N(y)\le C|y|_2$ for every $y\in\mathbb R^m$ [math:thm-all-norms-on-rn-are-equivalent](https://alphabetamath.cc/item/thm-all-norms-on-rn-are-equivalent).

[F2] The norm axioms give $N(0)=0$ and the induced metric $d_N(y,z)=N(y-z)$ [math:def-norm-and-normed-space](https://alphabetamath.cc/item/def-norm-and-normed-space). The reverse triangle inequality gives $|N(y)-N(z)|\le N(y-z)$ [math:lem-reverse-triangle-inequality-in-a-normed-space](https://alphabetamath.cc/item/lem-reverse-triangle-inequality-in-a-normed-space).

[F3] The Euclidean norm is $|y|_2=(\sum_{k<m}y_k^2)^{1/2}$, also when $m=0$, in which case its value is zero [math:def-p-norms-on-rn](https://alphabetamath.cc/item/def-p-norms-on-rn). It is a norm for every $m\ge0$; for $m\ge1$ its induced metric is the usual Euclidean metric [math:lem-p-norms-are-norms-and-induce-the-published-metrics](https://alphabetamath.cc/item/lem-p-norms-are-norms-and-induce-the-published-metrics).

[F4] A metric ball is $B_d(a,r)=\{z:d(a,z)<r\}$ for $r>0$ [math:def-metric-ball](https://alphabetamath.cc/item/def-metric-ball). A set is open when every point has a positive-radius metric ball inside it; an open neighbourhood of $a$ is an open set containing $a$ [math:def-metric-topology](https://alphabetamath.cc/item/def-metric-topology).

### Proof

**Given:** The dimension, norm, radius, point, sets and family of maps specified in the Statement.

**Goal:** Prove both neighbourhood assertions and the quantified shrinking implication.

1.1 Suppose $m\ge1$. By the reverse triangle inequality and the upper estimate in [F1], $|N(y)-N(z)|\le N(y-z)\le C|y-z|_2$. For each $y\in B_N(0,\rho)$ set $\varepsilon=(\rho-N(y))/C>0$. If $d_2(z,y)<\varepsilon$, then $N(z)\le N(y)+C|z-y|_2<\rho$. Thus $B_{d_2}(y,\varepsilon)\subseteq B_N(0,\rho)$, proving openness by [F4]. Also $N(0)=0<\rho$, and $|z|_2<\rho/C$ implies $N(z)<\rho$, so this is an open neighbourhood of zero containing $B_{d_2}(0,\rho/C)$. [given, F1, F2, F3, F4]

2.1 For $m\ge1$, translation satisfies $d_2(p+z,p+y)=|(p+z)-(p+y)|_2=|z-y|_2=d_2(z,y)$. Hence the ball about $y$ constructed in step 1.1 translates to a Euclidean ball about $p+y$ inside $p+B_N(0,\rho)$; that set is open and contains $p$. For $m=0$, $\mathbb R^0=\{0\}$, $p=0$, and $N(0)=0<\rho$, so both sets are the whole singleton space, which is open: each positive-radius metric ball about its only point is the singleton. Both neighbourhood assertions therefore also hold in dimension zero. [given, F2, F3, F4, step 1.1]

3.1 Fix $x\in X$ such that $\Phi_n(x)\in B'$ for every integer $n\ge0$. For each such $n$, the inclusion $B'\subseteq B$ gives $\Phi_n(x)\in B$. The assumed implication for $B$ therefore gives $x\in W$. This holds for every $x\in X$ and every subset $B'\subseteq B$, including every smaller open neighbourhood of the centre. For an orbit-trapping application, take $\Phi_n(x)$ to be the $n$th forward iterate on a set $X$ where all these iterates are defined. [given] ∎


## Energy identity and displacement for Euclidean gradient trajectories

[Open item](item-lem-author-647111dd30d9-gradient-energy) · level 0


### Statement

Let $m\ge1$ be an integer, let $a,b\in\mathbb R$ with $a<b$, let $U\subseteq\mathbb R^m$ be open and $f\in C^1(U)$, and let $x:[a,b]\to U$ be a $C^1$ solution of $x'=-\nabla f(x)$ on $(a,b)$. Here $C^1$ on $[a,b]$ means that $x$ is continuous on $[a,b]$, differentiable on $(a,b)$, and its derivative has a continuous extension to $[a,b]$, also denoted $x'$. The gradient is the Euclidean vector of partial derivatives. Then
$$f(x(b))-f(x(a))=-\int_a^b\|\nabla f(x(t))\|^2\,dt,$$
and $\|x(b)-x(a)\|\le\int_a^b\|x'(t)\|\,dt$. We call this last integral the length on $[a,b]$.

### Statement references

[math:def-c-one-map-and-local-inverse](https://alphabetamath.cc/item/def-c-one-map-and-local-inverse)

[math:def-vector-valued-derivative-and-integral](https://alphabetamath.cc/item/def-vector-valued-derivative-and-integral)

### Facts & Assumptions

[F1] The $C^1$ hypothesis on the open-domain map $f$ uses [math:def-c-one-map-and-local-inverse](https://alphabetamath.cc/item/def-c-one-map-and-local-inverse). The vector derivative and the componentwise vector integral use [math:def-vector-valued-derivative-and-integral](https://alphabetamath.cc/item/def-vector-valued-derivative-and-integral); the closed-interval $C^1$ convention is specified in the Statement.

[F2] The chain rule [math:thm-chain-rule-for-total-derivatives](https://alphabetamath.cc/item/thm-chain-rule-for-total-derivatives) and gradient representation [math:thm-gradient-represents-directional-derivatives-and-steepest-ascent](https://alphabetamath.cc/item/thm-gradient-represents-directional-derivatives-and-steepest-ascent) apply at each interior time.

[F3] A continuous real function on a real interval with $a<b$ is Riemann integrable by [math:thm-continuous-implies-integrable](https://alphabetamath.cc/item/thm-continuous-implies-integrable). Newton–Leibniz [math:thm-newton-leibniz-with-interior-derivative](https://alphabetamath.cc/item/thm-newton-leibniz-with-interior-derivative) requires continuity on $[a,b]$, differentiability on $(a,b)$, and an integrable extension of the interior derivative; it requires no endpoint derivative.

[F4] For an integrable vector function on $[a,b]$ with $a<b$, [math:thm-norm-inequality-for-the-vector-valued-integral](https://alphabetamath.cc/item/thm-norm-inequality-for-the-vector-valued-integral) gives integrability of its Euclidean norm and bounds the norm of its integral by the integral of its norm.

[F5] Total differentiability at a point implies continuity there by [math:thm-total-differentiability-gives-a-local-linear-bound-and-continuity](https://alphabetamath.cc/item/thm-total-differentiability-gives-a-local-linear-bound-and-continuity).

[F6] Clause 1 of [math:lem-continuity-is-local-and-pastes](https://alphabetamath.cc/item/lem-continuity-is-local-and-pastes) makes composites of continuous maps continuous, including maps between Euclidean subspaces with their inherited topologies.

[F7] For maps from a metric subspace to $\mathbb R^m$ with $m\ge1$, clause 1 of [math:thm-componentwise-limits-and-continuity](https://alphabetamath.cc/item/thm-componentwise-limits-and-continuity) identifies continuity with continuity of every component; clause 3 preserves scalar multiples and inner products.

### Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Prove the energy identity and the displacement bound.

1.1 At every $t\in(a,b)$ the chain rule and gradient representation give $(f\circ x)'(t)=\langle\nabla f(x(t)),x'(t)\rangle=-\|\nabla f(x(t))\|^2$. [F1, F2, given]

1.2 The $C^1$ hypothesis makes $f$ totally differentiable at every point of $U$, hence continuous there. It also makes the entries of its derivative matrix continuous; these are the components of $\nabla f$, so the gradient is continuous by componentwise continuity. Composing with the continuous curve $x$ shows that $f\circ x$ and $\nabla f\circ x$ are continuous on $[a,b]$. Scalar multiplication also makes $-f\circ x$ continuous. Both $x$ and the stipulated continuous extension $x'$ have continuous components on $[a,b]$. [F1, F5, F6, F7, given]

2.1 The real function $t\mapsto\|\nabla f(x(t))\|^2=\langle\nabla f(x(t)),\nabla f(x(t))\rangle$ is continuous by the inner-product clause of [F7], hence integrable. Newton–Leibniz applied to $-f\circ x$ and this integrable extension of its interior derivative gives $f(x(a))-f(x(b))=\int_a^b\|\nabla f(x(t))\|^2\,dt$, which is the asserted energy identity. Applying the same argument on any nondegenerate closed subinterval gives a nonpositive energy increment, since the integrand is nonnegative; thus energy is nonincreasing. [F3, F7, step 1.1, step 1.2, algebra]

3.1 Each component of the continuous extension $x'$ is integrable on $[a,b]$. By the vector-derivative definition, its interior values are the derivatives of the corresponding components of $x$. Each component of $x$ is continuous on $[a,b]$ and differentiable on $(a,b)$, so Newton–Leibniz with that component of $x'$ as the integrable extension applies. Reassembling the resulting scalar identities by the componentwise vector-integral definition gives $x(b)-x(a)=\int_a^b x'(t)\,dt$. The vector-integral norm inequality now yields $\|x(b)-x(a)\|\le\int_a^b\|x'(t)\|\,dt$, including integrability of the speed. [F1, F3, F4, step 1.2] ∎


## Analytic potentials on a finite phase torus

[Open item](item-def-expander-prereq-periodic-analytic-potentials) · level 1


### Definition

Let $V$ be a nonempty finite set and $T_V=\mathbb R^V/(2\pi\mathbb Z)^V$ with its angular charts and flat metric. A real-valued function $f$ on $T_V$ is real analytic if, in an angular chart around each point, it equals a real power series in the angular coordinates that converges absolutely on some open polydisc about that point. A potential here means a real-valued function on $T_V$.

For a smooth potential, a critical point is a point at which all first angular partial derivatives vanish. At a critical point its Hessian is the bilinear form represented in angular coordinates by the matrix of second partial derivatives. The angular transition maps are locally translations, so this matrix is unchanged between angular charts.

Every finite real linear combination of the functions $\theta\mapsto\cos(\theta_x-\theta_y)$, $x,y\in V$, is a real analytic potential. The expression uses any real representatives of the phases.

### Definition references

[Finite phase tori, local lifts and the flat metric](item-def-expander-prereq-phase-torus)

[Phasors, trigonometric identities and periodic derivatives](item-def-expander-prereq-phasor-calculus)

[Real analytic germs in several variables](https://alphabetamath.cc/item/def-real-analytic-germ-in-several-variables)

[The intrinsic Hessian at a critical point](https://alphabetamath.cc/item/def-hessian-of-a-function-at-a-critical-point)

### Facts & Assumptions

[F1] Angular charts cover $T_V$ and their transition maps are locally translations by elements of $(2\pi\mathbb Z)^V$; the flat metric is Euclidean in these charts ([def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)).

[F2] For real $t$, $\cos t=\operatorname{Re}\exp(it)$, $|\exp(it)|=1$, and cosine is $2\pi$-periodic ([def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)).

[F3] The complex exponential has the absolutely convergent series $\exp z=\sum_{n=0}^{\infty}z^n/n!$ for every complex $z$, and $\exp(a+b)=\exp(a)\exp(b)$ ([math:def-complex-exponential](https://alphabetamath.cc/item/def-complex-exponential), [math:thm-complex-exponential-addition-and-real-extension](https://alphabetamath.cc/item/thm-complex-exponential-addition-and-real-extension)).

[F4] A real analytic germ is represented locally by an absolutely convergent real multivariable power series; the intrinsic critical Hessian is the bilinear form represented by the second partial derivatives in a smooth chart ([math:def-real-analytic-germ-in-several-variables](https://alphabetamath.cc/item/def-real-analytic-germ-in-several-variables), [math:def-hessian-of-a-function-at-a-critical-point](https://alphabetamath.cc/item/def-hessian-of-a-function-at-a-critical-point)).

[F5] For $u,v\in\mathbb R$ and $n\in\mathbb N$, $(u+v)^n=\sum_{k=0}^n c_{n,k}u^kv^{n-k}$, where $c_{n,k}=\iota_{\mathbb R}(\binom nk)\ge0$ is the binomial coefficient viewed in $\mathbb R$ ([math:thm-binomial-theorem](https://alphabetamath.cc/item/thm-binomial-theorem)).

### Justification

**Given:** A finite nonempty $V$, a smooth real potential when discussing its critical points, and finitely many real coefficients and ordered pairs of vertices for the cosine combination.

**Goal:** Verify that the definitions are independent of angular choices and that the stated cosine combination is real analytic.

1.1 By [F1], on a sufficiently small connected neighborhood of an overlap the two angular coordinate systems differ by a constant lattice vector. Substituting this translation into a convergent power series only changes its center, so the local analytic condition is independent of the angular chart. The first and second partial derivatives are unchanged under such a translation. Thus the condition that all first derivatives vanish is independent of the angular chart, and at a critical point the displayed matrix represents the intrinsic Hessian from [F4]. Periodicity in [F2] makes each cosine of a phase difference independent of the chosen representatives. [F1, F2, F4, algebra]

2.1 Fix a chart point with coordinates $a$ and write nearby coordinates as $a+h$. For distinct $x,y$, [F2] and [F3] give $\cos((a_x-a_y)+(h_x-h_y))=\operatorname{Re}(\exp(i(a_x-a_y))\sum_{n\geq0}i^n(h_x-h_y)^n/n!)$. Expanding each finite power by [F5] gives a real power series in $h_x,h_y$ after taking real parts. In degree $n$, the sum of absolute monomial factors is $\sum_{k=0}^n c_{n,k}|h_x|^k|h_y|^{n-k}=(|h_x|+|h_y|)^n$ by [F5]; taking real parts after multiplication by the unit-modulus factor $\exp(i(a_x-a_y))i^n$ cannot increase this bound by [F2]. The sum of the absolute values of all its terms is bounded by $\sum_{n\geq0}(|h_x|+|h_y|)^n/n!$, which converges by [F3]. Thus it is an absolutely convergent multivariable power series on every bounded polydisc; its coefficients in the other coordinates are zero. If $x=y$, the term is the constant $1$. A finite real linear combination remains such a series on a common polydisc, proving the assertion by [F4]. [F2, F3, F4, F5, algebra] ∎


## Gradient trajectories and complete compact phase dynamics

[Open item](item-def-expander-prereq-gradient-trajectories) · level 1


### Definition

Assume countable choice. Let $V$ be a nonempty finite set, let $T_V=\mathbb R^V/(2\pi\mathbb Z)^V$ have its flat metric, and let $U:T_V\to\mathbb R$ be smooth, meaning that its expressions in angular charts have derivatives of every order. Its gradient $\operatorname{grad}U$ is the vector field satisfying $\langle\operatorname{grad}U(q),v\rangle=dU_q(v)$ for every tangent vector $v$ at $q$.

Equip $\mathbb R\times T_V$ with the product smooth structure: for an angular chart $\kappa:O\to B$ and an open interval $J\subseteq\mathbb R$, its product chart on $J\times O$ is $(t,p)\mapsto(t,\kappa(p))\in J\times B$. A map between smooth manifolds is $C^2$ when it is continuous and its coordinate representatives in source and target charts have continuous partial derivatives of all orders at most two. Joint $C^2$ regularity of a map on $\mathbb R\times T_V$ uses these product charts. A $C^2$ diffeomorphism is a bijection whose map and inverse are both $C^2$.

A downward gradient trajectory through $q_0\in T_V$ is the maximal integral curve $q:I\to T_V$ satisfying $q(0)=q_0$ and $\dot q(t)=-\operatorname{grad}U(q(t))$. Here an integral curve is a differentiable curve whose velocity equals the indicated vector field, and maximal means that it has no extension as such a curve to a strictly larger interval. In this setting $I=\mathbb R$. Define $\Phi(t,q_0)=\Phi_t(q_0)=q(t)$. The map $\Phi:\mathbb R\times T_V\to T_V$ is jointly $C^2$, $\Phi_0$ is the identity, and $\Phi_{t+s}=\Phi_t\circ\Phi_s$; consequently each $\Phi_t$ is a $C^2$ diffeomorphism with inverse $\Phi_{-t}$. These are properties of the mathematical ODE.

### Facts & Assumptions

**Given:** Countable choice, a nonempty finite set $V$, the flat phase torus $T_V$, and a smooth real potential $U$ as above.

[F1] The phase torus is a compact smooth manifold with angular charts whose transitions are locally translations, and the metric is Euclidean in these charts ([def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)).

[F2] The Riemannian gradient of a smooth function is a smooth vector field, characterized as the metric dual of its differential ([math:def-riemannian-gradient-of-a-smooth-function](https://alphabetamath.cc/item/def-riemannian-gradient-of-a-smooth-function)). Integral curves satisfy the vector-field equation ([math:def-integral-curve-of-a-vector-field](https://alphabetamath.cc/item/def-integral-curve-of-a-vector-field)).

[F3] Under countable choice, every smooth vector field on a compact manifold is complete: its maximal integral curves exist for all real times ([math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice), [math:cor-every-smooth-vector-field-on-a-compact-manifold-is-complete](https://alphabetamath.cc/item/cor-every-smooth-vector-field-on-a-compact-manifold-is-complete)).

[F4] For a $C^2$ vector field on an open Euclidean set, the unique maximal local flow is jointly $C^2$ and its time slices have the corresponding inverse-time local flow ([math:lem-c1-euclidean-maximal-flow-with-c2-upgrade](https://alphabetamath.cc/item/lem-c1-euclidean-maximal-flow-with-c2-upgrade)).

[F5] The $C^2$ condition for a continuous map between smooth manifolds is the $C^2$ condition on its coordinate representatives, independently of the charts used ([math:def-c-r-and-smooth-maps-between-smooth-manifolds](https://alphabetamath.cc/item/def-c-r-and-smooth-maps-between-smooth-manifolds)). For $\mathbb R\times T_V$ we use the product charts specified in the Definition; a $C^2$ diffeomorphism means a bijection with $C^2$ map and inverse.

### Justification

**Given:** The data in Facts & Assumptions.

**Goal:** Establish that the trajectory and flow in the definition are well defined and have the stated regularity and group law.

1.1 By [F1] and [F2], $X=-\operatorname{grad}U$ is a smooth vector field on the compact smooth manifold $T_V$. In an angular chart its coordinate field is $C^2$. By [F4], local solutions exist uniquely and depend jointly $C^2$ on time and initial coordinates. On chart overlaps the coordinate descriptions represent the same vector field, so uniqueness makes these local solutions agree wherever their domains overlap. [F1, F2, F4, given]

2.1 By [F3], each maximal integral curve of $X$ has domain $\mathbb R$; uniqueness in step 1.1 makes the curve through each $q_0$ unique. Thus $\Phi$ is well defined. To see joint $C^2$ regularity near any $(t_0,q_0)$, cover the compact trajectory segment between times $0$ and $t_0$ by finitely many chart neighborhoods and subdivide the segment into finitely many short intervals on which [F4] applies. For initial points near $q_0$ and times near $t_0$, the resulting local flow maps compose to give $\Phi$; their chart transitions and compositions are $C^2$. The product-chart transitions are locally $(t,u)\mapsto(t,u+\lambda)$ for a fixed $\lambda\in(2\pi\mathbb Z)^V$, hence are smooth. Thus the local representatives just constructed give continuity and joint $C^2$ regularity on the product manifold in the sense of [F5]. The same argument applies for negative $t_0$. [F1, F3, F4, F5, step 1.1]

3.1 The curve $t\mapsto\Phi_t(\Phi_s(q))$ and the curve $t\mapsto\Phi_{t+s}(q)$ both solve the autonomous equation and agree at $t=0$. Local uniqueness, applied along their common real time interval, makes them equal. Hence $\Phi_{t+s}=\Phi_t\circ\Phi_s$ and $\Phi_0$ is the identity. Taking $s=-t$ in both orders gives inverse maps $\Phi_t$ and $\Phi_{-t}$; their $C^2$ regularity follows from step 2.1. Hence they are $C^2$ diffeomorphisms in the sense of [F5]. [F4, F5, step 1.1, step 2.1] ∎


## Diagonal phase rotations and relative-phase coordinates

[Open item](item-def-expander-prereq-rotation-reduction) · level 1


### Definition

Let $V$ be a nonempty finite set and $T_V=\mathbb R^V/(2\pi\mathbb Z)^V$ be the phase torus. A phase is a real number modulo $2\pi$; write its addition and subtraction using representatives modulo $2\pi$. For a phase $c$, the diagonal rotation $R_c:T_V\to T_V$ is defined by $(R_c\theta)_x=\theta_x+c$ for every $x\in V$. Two configurations are rotation equivalent, written $\theta\sim\phi$, if $\phi=R_c\theta$ for some phase $c$. Give the set $Q=T_V/{\sim}$ the quotient topology and write $p:T_V\to Q$ for its projection.

Fix $v_0\in V$. The relative-phase map is $r(\theta)=(\theta_x-\theta_{v_0})_{x\in V\setminus\{v_0\}}$. Its induced map $\bar r:Q\to T_{V\setminus\{v_0\}}$ is a homeomorphism. If $V=\{v_0\}$, the target is the one-point empty product. A function of phase differences means a function whose value depends only on the family $(\theta_x-\theta_y)_{x,y\in V}$; it has a unique induced function on $Q$.

The phasor average is $m(\theta)=|V|^{-1}\sum_{x\in V}e^{i\theta_x}$. If $m(\theta)\ne0$, an argument is a phase $a$ with $e^{ia}=m(\theta)/|m(\theta)|$; the rotation $R_{-a}$ makes the average positive real. At zero average no argument or preferred rotation is specified. A rotating coordinate frame with angular velocity $\omega\in\mathbb R$ replaces a time-dependent configuration $\theta(t)$ by $R_{-\omega t}\theta(t)$, where $-\omega t$ is read modulo $2\pi$.

### Facts & Assumptions

[F1] The phase torus is a finite product of circle quotients, with quotient charts obtained from real representatives; the quotient projection is continuous and open ([def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)).

[F2] For real angles, $e^{i(u+v)}=e^{iu}e^{iv}$, $|e^{iu}|=1$, and the phasor is unchanged by adding a multiple of $2\pi$ ([def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)).

[F3] A map from a quotient is continuous exactly when its composite with the quotient projection is continuous. Finite product maps are continuous when their coordinate maps are continuous ([math:def-quotient-topology](https://alphabetamath.cc/item/def-quotient-topology), [math:def-product-topology](https://alphabetamath.cc/item/def-product-topology)).

[F4] A homeomorphism is a continuous bijection whose inverse is continuous ([math:def-homeomorphism-and-open-maps](https://alphabetamath.cc/item/def-homeomorphism-and-open-maps)).

### Justification

**Given:** A nonempty finite $V$, a vertex $v_0\in V$, and the constructions in the definition.

**Goal:** Verify the rotation relation, relative-coordinate homeomorphism, descent, normalization, and rotating-frame description.

1.1 Addition modulo $2\pi$ is independent of the chosen representatives. It gives $R_0\theta=\theta$ and $R_cR_d\theta=R_{c+d}\theta$, with inverse $R_{-c}$; hence rotation equivalence is an equivalence relation. Each difference $\theta_x-\theta_y$ is unchanged by a common rotation, so $r$ is constant on equivalence classes. It therefore defines $\bar r$ uniquely by $\bar r(p(\theta))=r(\theta)$. [F1, algebra]

2.1 Define $s:T_{V\setminus\{v_0\}}\to T_V$ by $s(z)_{v_0}=0$ and $s(z)_x=z_x$ otherwise. Then $r(s(z))=z$, while $s(r(\theta))=R_{-\theta_{v_0}}\theta$. Consequently $p\circ s$ and $\bar r$ are inverse bijections. When $V$ has one element, the same formulas use the unique empty tuple and show that $Q$ has one point. [step 1.1, construct, algebra]

3.1 In quotient charts, each coordinate of $r$ is represented locally by subtraction of real coordinates followed by the circle quotient projection, so $r$ is continuous; $s$ is continuous by its constant and coordinate components. The quotient criterion makes $\bar r$ continuous, and $p\circ s$ is continuous. Thus the inverse bijections in step 2.1 are homeomorphisms. Any function depending only on differences is constant on each orbit and therefore has a unique set-theoretic factor through $p$; if that function is continuous, its factor is continuous by the same quotient criterion. [F1, F3, F4, step 1.1, step 2.1]

4.1 By the phasor addition law, $m(R_c\theta)=e^{ic}m(\theta)$. For nonzero $m$, the circle parametrization in [F1] supplies a phase $a$ with $e^{ia}=m/|m|$; then $m(R_{-a}\theta)=|m|>0$. Such a phase is unique modulo $2\pi$. If $m=0$, every rotation leaves the average zero, so this normalization selects no rotation. Finally, $R_{-\omega t}$ subtracts the same phase from every coordinate and therefore leaves all relative phases unchanged. [F1, F2, step 1.1, algebra] ∎


## Differentiation of symmetric periodic pair potentials

[Open item](item-prop-expander-prereq-pair-potential-calculus) · level 1


### Statement

Let $X$ be a nonempty finite set, let $w_{xy}=w_{yx}$ be arbitrary real numbers for $x,y\in X$, and let $v:\mathbb R\to\mathbb R$ be even, twice continuously differentiable and $2\pi$-periodic. Even means $v(-t)=v(t)$, and $2\pi$-periodic means $v(t+2\pi)=v(t)$ for every real $t$. For $\theta\in\mathbb R^X$ define $U(\theta)=\frac12\sum_{x,y\in X}w_{xy}v(\theta_x-\theta_y)$. Write $(\nabla U)_x=\partial U/\partial\theta_x$ and let $\nabla^2U$ be the matrix of second partial derivatives. Then, for every $f\in\mathbb R^X$,

$$(\nabla U)_x=\sum_{y\in X}w_{xy}v'(\theta_x-\theta_y),$$

$$f^T\nabla^2U f=\frac12\sum_{x,y\in X}w_{xy}v''(\theta_x-\theta_y)(f_x-f_y)^2.$$

The terms with $x=y$ contribute zero to both displayed expressions. The identities hold for signed weights; nonnegativity is an additional hypothesis when needed for a later inequality.

### Facts & Assumptions

[F1] Finite sums of differentiable real-valued functions may be differentiated termwise ([def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)). For a real constant $c$ and a differentiable real function $g$, the product rule gives $(cg)'=cg'$: the constant function has derivative zero because all its difference quotients are zero ([math:lem-derivative-algebra-and-chain-rules](https://alphabetamath.cc/item/lem-derivative-algebra-and-chain-rules)).

[F2] The derivative of a composite is the composite of its derivatives when the constituent maps are differentiable ([math:thm-chain-rule-for-total-derivatives](https://alphabetamath.cc/item/thm-chain-rule-for-total-derivatives)).

[F3] A coordinate partial derivative $\partial_z F(\theta)$ is the derivative at $t=0$ of the real line restriction $t\mapsto F(\theta+t e_z)$, where $(e_z)_x=\delta_{xz}$. Iterated partial derivatives apply this definition again to the first partial maps ([math:def-directional-and-partial-derivatives](https://alphabetamath.cc/item/def-directional-and-partial-derivatives)).

[A1] The set, weights, function and vectors satisfy the hypotheses in the Statement.

### Proof

**Given:** $X$, $w$, $v$, $\theta$ and $f$ as in the Statement.

**Goal:** Prove the gradient and Hessian quadratic-form identities, including the diagonal and signed-weight assertions.

1.1 Differentiate $v(-t)=v(t)$ using [F2]. This gives $-v'(-t)=v'(t)$, so $v'$ is odd and in particular $v'(0)=0$. By [F3], compute coordinate derivatives on $\theta+t e_z$. On this line $\theta_x-\theta_y$ becomes $\theta_x-\theta_y+t(\delta_{xz}-\delta_{yz})$, whose derivative is $\delta_{xz}-\delta_{yz}$ directly from its difference quotient; here $\delta_{xz}$ is $1$ if $x=z$ and $0$ otherwise. By [F1] and [F2], $\partial_z U=\frac12\sum_{x,y}w_{xy}v'(\theta_x-\theta_y)(\delta_{xz}-\delta_{yz})$. [A1, F1, F2, F3, algebra]

2.1 The first Kronecker-delta sum is $\frac12\sum_yw_{zy}v'(\theta_z-\theta_y)$. In the second, exchange the two indices and use symmetry of $w$ and oddness of $v'$ from step 1.1; it becomes the same sum. Their sum is the asserted gradient component. The term $y=z$ is zero by $v'(0)=0$. [A1, step 1.1, algebra]

3.1 Since $v$ is twice continuously differentiable, differentiating the first partial maps along coordinate lines as in [F3] and applying [F1] and [F2] gives $\partial_a\partial_b U=\frac12\sum_{x,y}w_{xy}v''(\theta_x-\theta_y)(\delta_{xa}-\delta_{ya})(\delta_{xb}-\delta_{yb})$. Multiplying by $f_a f_b$ and summing over $a,b$ gives the stated quadratic form, because $\sum_a f_a(\delta_{xa}-\delta_{ya})=f_x-f_y$. For $x=y$ this factor is zero. No step uses a sign restriction on $w$, completing the proof. [A1, F1, F2, F3, step 1.1, step 2.1, algebra] ∎

## Rigidity and rotation of a unit-phasor average

[Open item](item-prop-expander-prereq-phasor-average-rigidity) · level 1


### Statement

Let $n\ge1$ and $z_1,\ldots,z_n\in S^1=\{z\in\mathbb C:|z|=1\}$. Their average $m=n^{-1}\sum_{j=1}^n z_j$ satisfies $|m|\le1$, with equality exactly when all $z_j$ coincide.

For real $t$, rotation about the origin through angle $t$ means the map $R_t(x+iy):=(x\cos t-y\sin t)+i(x\sin t+y\cos t)$ for real $x,y$. A common rotation of a set is its image under one map $R_t$.

For real angles $\theta_j$ and a positive integer $k$, put $m_k=n^{-1}\sum_{j=1}^n e^{ik\theta_j}$. Then $|m_k|=1$ exactly when all $e^{ik\theta_j}$ coincide. Equivalently, their unit phasors $e^{i\theta_j}$ lie in one common rotation $e^{i\theta_1}\mu_k$, where $\mu_k=\{e^{2\pi i r/k}:r=0,\ldots,k-1\}$ is the set of complex $k$th roots of unity, meaning the complex numbers $w$ satisfying $w^k=1$.

If $m\ne0$, multiplication by the unit phasor $\overline m/|m|$ rotates $m$ to $|m|$. This expression is asserted only when $m\ne0$.

### Facts & Assumptions

[F1] A unit phasor is $e^{iu}=\cos u+i\sin u$ for real $u$, has modulus one, and $e^{i(u-v)}=e^{iu}\overline{e^{iv}}$; it is unchanged by adding an integer multiple of $2\pi$ to its angle ([def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)).

[F2] In a complex inner product space, Cauchy–Schwarz gives $|\langle u,v\rangle|\le\|u\|\|v\|$, with equality exactly when $u,v$ are linearly dependent. An inner product is linear in its first argument, conjugate symmetric and positive definite ([math:def-inner-product-space](https://alphabetamath.cc/item/def-inner-product-space), [math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces](https://alphabetamath.cc/item/thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces)). Its induced norm is $\|w\|=\sqrt{\langle w,w\rangle}$ ([math:def-inner-product-norm](https://alphabetamath.cc/item/def-inner-product-norm)). The two-vector list $(u,v)$ is linearly dependent when $au+bv=0$ for complex scalars $a,b$ not both zero ([math:def-linear-independence](https://alphabetamath.cc/item/def-linear-independence)).

[F3] For $w=a+ib$ with real $a,b$, its modulus is $|w|=\sqrt{a^2+b^2}$ ([math:def-complex-conjugate-real-imaginary-part-and-modulus](https://alphabetamath.cc/item/def-complex-conjugate-real-imaginary-part-and-modulus)). Complex modulus is multiplicative, and $w\overline w=|w|^2$; it vanishes only at zero ([math:lem-real-and-complex-modulus-rules](https://alphabetamath.cc/item/lem-real-and-complex-modulus-rules), [math:lem-complex-conjugation-and-modulus-laws](https://alphabetamath.cc/item/lem-complex-conjugation-and-modulus-laws)).

[F4] The real zeros of sine are precisely the integer multiples of $\pi$; $e^{i\pi}=-1$ and the complex exponential satisfies $e^{a+b}=e^ae^b$ ([math:thm-sine-cosine-zero-sets-and-fundamental-period](https://alphabetamath.cc/item/thm-sine-cosine-zero-sets-and-fundamental-period), [math:cor-complex-exponential-cartesian-form-modulus-and-eulers-identity](https://alphabetamath.cc/item/cor-complex-exponential-cartesian-form-modulus-and-eulers-identity), [math:thm-complex-exponential-addition-and-real-extension](https://alphabetamath.cc/item/thm-complex-exponential-addition-and-real-extension)).

[F5] For an integer and a positive integer divisor, division with remainder gives an integer quotient and a remainder between zero inclusive and the divisor exclusive ([math:thm-division-algorithm-in-z](https://alphabetamath.cc/item/thm-division-algorithm-in-z)).

[F6] Every point of the unit circle is $(\cos t,\sin t)$ for some real $t$ ([math:thm-sine-and-cosine-parametrize-the-unit-circle](https://alphabetamath.cc/item/thm-sine-and-cosine-parametrize-the-unit-circle)).

[F7] Complex numbers have unique real coordinates, and their multiplication obeys $(a+ib)(c+id)=(ac-bd)+i(ad+bc)$ for real $a,b,c,d$ ([math:thm-complex-numbers-form-a-field](https://alphabetamath.cc/item/thm-complex-numbers-form-a-field)).

[F8] The standard coordinate pairing on $\mathbb C^n$, with coordinate addition and scalar multiplication, is an inner product linear in the first argument ([math:prop-standard-coordinate-inner-products](https://alphabetamath.cc/item/prop-standard-coordinate-inner-products)).

### Proof

**Given:** The unit complex numbers $z_1,\ldots,z_n$, with $n\ge1$; and, for the root-fibre assertion, real $\theta_1,\ldots,\theta_n$ and a positive integer $k$.

**Goal:** Prove the bound and equality criterion, identify the root fibre, and establish the rotation formula.

1.1 On $\mathbb C^n$ with its coordinate vector-space operations, use the inner product $\langle u,v\rangle=\sum_j u_j\overline{v_j}$ from [F8]. Coordinate calculation verifies the inner-product axioms in [F2]: linearity and conjugate symmetry hold termwise, and $\langle u,u\rangle=\sum_j|u_j|^2$ is nonnegative and vanishes only for $u=0$. For $u=(z_1,\ldots,z_n)$ and $v=(1,\ldots,1)$, both norms are $\sqrt n$ and $\langle u,v\rangle=nm$. Hence Cauchy–Schwarz gives $|m|\le1$. Equality holds exactly when $u$ and $v$ are dependent. A dependence witness in [F2] has $au+bv=0$ with $a,b$ not both zero. Since $v\ne0$, $a=0$ would force $b=0$, so $a\ne0$ and $u=-(b/a)v$. Conversely, $u=cv$ gives the dependence witness $(1,-c)$. Thus equality is equivalent to $u=cv$ for some complex $c$, or $z_1=\cdots=z_n=c$. [F2, F3, F8, algebra]

2.1 Each $e^{ik\theta_j}$ has modulus one, so step 1.1 applied to these numbers gives the stated criterion for $|m_k|=1$. By the exponential addition law, $e^{ik\theta_j}=e^{ik\theta_1}$ exactly when $(e^{i(\theta_j-\theta_1)})^k=1$. [F1, F4, step 1.1, algebra]

3.1 If $e^{it}$ is a $k$th root of unity, then $e^{ikt}=1$. Its imaginary part is zero by [F1], so [F4] gives $kt=a\pi$ for an integer $a$. Divide $a$ by $2$: $a=2q+s$ with $s\in\{0,1\}$. The exponential addition law and $e^{i\pi}=-1$ yield $e^{ia\pi}=(-1)^s$, so $s=0$. Divide $q$ by $k$, writing $q=bk+r$ with $0\le r<k$. Then $t=2\pi b+2\pi r/k$ and $e^{it}=e^{2\pi ir/k}$. Conversely, the addition law and $2\pi$-periodicity show that every displayed $e^{2\pi ir/k}$ has $k$th power one. Any complex $k$th root $w$ has $|w|^k=1$ by [F3], hence $|w|=1$; [F6] and [F1] write it as $e^{it}$. Thus these displayed numbers are exactly all complex $k$th roots of unity. Combining this with step 2.1 proves the stated membership in $e^{i\theta_1}\mu_k$. [F1, F3, F4, F5, F6, step 2.1, algebra]

4.1 For any real $t,x,y$, [F1] and [F7] give $e^{it}(x+iy)=(x\cos t-y\sin t)+i(x\sin t+y\cos t)=R_t(x+iy)$. Hence multiplication by $e^{it}$ is exactly the rotation defined in the Statement; in particular $e^{i\theta_1}\mu_k=R_{\theta_1}(\mu_k)$, completing the common-rotation interpretation in step 3.1. If $m\ne0$, then $|m|>0$. By [F3], $|\overline m/|m||=1$ and $(\overline m/|m|)m=|m|^2/|m|=|m|$. By [F6] and [F1], $\overline m/|m|=e^{it}$ for some real $t$, so the same coordinate identity shows that this multiplier rotates $m$ to $|m|$. Together with steps 1.1, 2.1 and 3.1 this proves all assertions. [F1, F3, F6, F7, step 1.1, step 2.1, step 3.1, algebra] ∎


## Point basins, equilibrium-set basins and aggregate volume

[Open item](item-def-expander-prereq-attraction-basin-measure) · level 1


### Definition

Assume countable choice. Let $V$ be a nonempty finite set, $T_V=\mathbb R^V/(2\pi\mathbb Z)^V$ the phase torus with its flat distance $d$, and $\mu$ its normalized phase volume. Let $\Phi:\mathbb R\times T_V\to T_V$ be a complete flow: it is continuous, $\Phi_0$ is the identity, and $\Phi_{t+s}=\Phi_t\circ\Phi_s$. An equilibrium $q$ satisfies $\Phi_t(q)=q$ for every real $t$. Its point basin is $B(q)=\{x\in T_V:d(\Phi_t(x),q)\to0\text{ as }t\to\infty\}$.

For a nonempty invariant set $C\subseteq T_V$, meaning $\Phi_t(C)=C$ for every real $t$, put $d(x,C)=\inf_{c\in C}d(x,c)$. Its attraction set is $B(C)=\{x\in T_V:d(\Phi_t(x),C)\to0\text{ as }t\to\infty\}$. Both $B(q)$ and $B(C)$ are phase-measurable. In particular, $\mu(B(q))$ and $\mu(B(C))$ are well-defined probabilities under the uniform phase law.

For a specified family of equilibria $Q$, its aggregate point-basin volume means $\mu(\bigcup_{q\in Q}B(q))$ when that union is phase-measurable. This is a measure of the union; an uncountable sum of point-basin volumes is not implied. If $Q=C$ consists of equilibria, the union is contained in $B(C)$, but equality requires an additional point-convergence assertion. Stability of $C$, including a rotation orbit of equilibria, alone does not supply point attraction. For a family of graphs, phase volume is normalized separately on the phase torus associated with each graph's vertex set. An almost-everywhere or probability-one attraction conclusion requires an argument establishing the relevant attraction and exceptional-set claim.

### Definition references

[def-expander-prereq-stability-and-attraction](item-def-expander-prereq-stability-and-attraction)

[def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)

[def-expander-prereq-phase-volume](item-def-expander-prereq-phase-volume)

[math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure)

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

### Facts & Assumptions

[F1] The phase torus is a metric space with the stated distance, and the complete flow and attraction notions are as defined above ([def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus), [def-expander-prereq-stability-and-attraction](item-def-expander-prereq-stability-and-attraction)).

[F2] Under countable choice, normalized phase volume is a probability measure whose measurable sets form a sigma-algebra containing every open subset of the phase torus ([def-expander-prereq-phase-volume](item-def-expander-prereq-phase-volume), [math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure), [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)).

[F3] The Borel sigma-algebra is generated by the open sets, and sigma-algebras are closed under countable unions and intersections ([math:def-borel-sigma-algebra](https://alphabetamath.cc/item/def-borel-sigma-algebra), [math:thm-sigma-algebra-closure-laws](https://alphabetamath.cc/item/thm-sigma-algebra-closure-laws)).

[F4] Every real number has an integer part: for each real $a$ there is an integer $k$ with $k\le a<k+1$ ([math:lem-integer-part](https://alphabetamath.cc/item/lem-integer-part)).

[F5] The product of two at most countable sets is at most countable, without a choice assumption ([math:thm-product-of-countable](https://alphabetamath.cc/item/thm-product-of-countable)).

[F6] For every real $\varepsilon>0$ there is an integer $m\ge1$ with $1/m<\varepsilon$, by the reciprocal Archimedean property in the complete ordered field $\mathbb R$ ([math:cor-archimedean-reciprocal](https://alphabetamath.cc/item/cor-archimedean-reciprocal)).

[F7] Mathematical induction holds for properties of nonnegative integers ([math:thm-induction-principle](https://alphabetamath.cc/item/thm-induction-principle)).

### Justification

**Given:** The phase space, measure, complete flow, equilibrium $q$, and nonempty invariant set $C$ in the definition.

**Goal:** Verify the measurability and volume conventions and the stated distinction between set and point attraction.

1.1 For any nonempty $C$, the triangle inequality gives $|d(u,C)-d(v,C)|\le d(u,v)$: apply $d(u,c)\le d(u,v)+d(v,c)$ for every $c\in C$, take the infimum, and exchange $u,v$. Thus $x\mapsto d(\Phi_t(x),C)$ is continuous for fixed $t$, and $t\mapsto d(\Phi_t(x),C)$ is continuous for fixed $x$. The same holds for $d(\Phi_t(x),q)$ by taking $C=\{q\}$. Hence their sublevel sets with a weak inequality are closed. [F1, algebra]

1.2 Let $D=\{k2^{-j}:k,j\in\mathbb N_0\}$. By [F5], $\mathbb N_0\times\mathbb N_0$ is at most countable. Listing its pairs and applying $(k,j)\mapsto k2^{-j}$ lists all of $D$, with repetitions allowed, so $D$ is countable. Also $2^j\ge j+1$ for every $j\ge0$: it holds at $j=0$, and the induction step is $2^{j+1}\ge2(j+1)\ge j+2$. Given $\eta>0$, choose $m\ge1$ with $1/m<\eta$ by [F6]; for $j\ge m$ we have $2^{-j}\le1/(j+1)\le1/m<\eta$. Thus $2^{-j}\to0$. [F5, F6, F7, algebra]

2.1 For $t\ge0$, let $k_j$ be the integer part of $2^jt$. Then $k_j\ge0$ and $r_j=k_j2^{-j}\in D$ satisfies $0\le t-r_j<2^{-j}$, so $r_j\to t$ by step 1.2. This proves density in $[0,\infty)$. Moreover, if $t\ge N$ for an integer $N\ge0$, the integer $2^jN$ is at most $2^jt$, so $k_j\ge2^jN$ and $r_j\ge N$. Hence the approximating dyadics can always be taken in the same tail $[N,\infty)$. [F4, step 1.2, algebra]

3.1 For $m\ge1$, $N\in\mathbb N_0$ and $r\in D$, write $E_{m,r}=\{x:d(\Phi_r(x),C)\le1/m\}$. Then $B(C)=\bigcap_{m\ge1}\bigcup_{N\ge0}\bigcap_{r\in D,\ r\ge N}E_{m,r}$. Indeed, convergence implies the right side: for each $m$, choose a real threshold $T\ge0$ after which the distance is smaller than $1/m$, and take $N=\lfloor T\rfloor+1$ using [F4]. Conversely, if $x$ is in the right side, fix $m$ and a corresponding $N$. For every real $t\ge N$, step 2.1 supplies dyadics $r_j\ge N$ tending to $t$. The weak bounds $d(\Phi_{r_j}(x),C)\le1/m$ pass to $t$ by the time continuity in step 1.1. Given $\varepsilon>0$, choose $m$ with $1/m<\varepsilon$ by [F6]; the resulting bound for all $t\ge N$ proves convergence. [F4, F6, step 1.1, step 2.1, algebra]

4.1 Each $E_{m,r}$ is closed, hence Borel. The displayed expression is Borel by countable sigma-algebra closure and therefore phase-measurable, since the phase-measurable sigma-algebra contains all open sets. Repeating the argument with $C=\{q\}$ proves measurability of $B(q)$. Their volumes are consequently defined by the probability measure $\mu$. [F2, F3, step 1.1, step 1.2, step 3.1]

5.1 If $q\in C$, then $d(y,C)\le d(y,q)$ for every $y$, so $B(q)\subseteq B(C)$ and the same inclusion holds for the union over $q\in C$. Inclusion alone does not establish equality or measurability of an arbitrary uncountable union; the aggregate convention explicitly requires the latter. For the identity flow on the phase torus, every point is a stable equilibrium and the entire torus is a stable invariant set, while $B(q)=\{q\}$: set stability therefore does not imply attraction to any prescribed point. The separate normalization and almost-everywhere conventions are those of phase volume and probability, and no convergence conclusion follows from their definitions alone. [F1, F2, step 4.1, algebra] ∎


## Empirical phase measures and Fourier order statistics

[Open item](item-def-expander-prereq-empirical-phase-measures) · level 1


### Definition

Let $n\geq1$ and let $\theta_1,\ldots,\theta_n$ be real representatives of phases, where a phase is an angle modulo $2\pi$. Put $z_j=e^{i\theta_j}$ and $S^1=\{z\in\mathbb C:|z|=1\}$, with its Borel sets, the sigma-algebra generated by its open subsets. The empirical phase measure is $\nu_n=n^{-1}\sum_{j=1}^n\delta_{z_j}$: for a Borel set $A$, $\nu_n(A)=n^{-1}\#\{j:z_j\in A\}$. Here $\delta_z(A)$ is $1$ if $z\in A$ and $0$ otherwise. Repeated phases are counted with their multiplicities. This is a Borel probability measure: a countably additive nonnegative set function of total mass one.

For an integer $k$, the $k$th Fourier moment, also called a Fourier order statistic here, is $m_k(\nu_n)=\int_{S^1}z^k\,d\nu_n(z)=n^{-1}\sum_{j=1}^n e^{ik\theta_j}$. Negative powers use $z^{-1}=\overline z$ on $S^1$. In particular, $m_1$ is the mean phasor; its modulus is a scalar order parameter measuring the magnitude of that mean.

A continuum description may instead specify a Borel probability measure on the phase space, or a probability density with respect to a stated reference measure space $(X,\mathcal A,\lambda)$: a nonnegative measurable function $f:X\to[0,+\infty]$ with $\int_X f\,d\lambda=1$, assigning each $A\in\mathcal A$ the mass $\nu_f(A)=\int_A f\,d\lambda$. Here $\mathcal A$ is a sigma-algebra on $X$ and $\lambda$ is a measure on it; for phase densities, take $X=S^1$ and $\mathcal A$ its Borel sigma-algebra. The resulting $\nu_f$ is a probability measure. For probability measures $\mu_n,\mu$ on a metric space, weak convergence $\mu_n\Rightarrow\mu$ means that $\int f\,d\mu_n\to\int f\,d\mu$ for every bounded continuous real-valued test function $f$.

For a frequency probability density $g$ on $\mathbb R$, symmetry about $a$ means $g(a+x)=g(a-x)$ for all $x$; unimodality about $a$ means $g$ is nondecreasing on $(-\infty,a]$ and nonincreasing on $[a,\infty)$. These are additional assumptions when used, not consequences of the empirical measure. This definition asserts neither an interchange of the population-size limit $n\to\infty$ and a long-time limit $t\to\infty$, nor the existence of a continuum phase transition, meaning a qualitative change of macroscopic behavior as a model parameter varies.

### Facts & Assumptions

[F1] The phasor $e^{iu}$ has modulus one, is unchanged by adding an integer multiple of $2\pi$ to $u$, and satisfies the exponential addition rule for real arguments ([def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)).

[F2] On any measurable space, the empirical set function of finitely many points is their average of Dirac set functions and is a probability measure ([math:def-empirical-measure](https://alphabetamath.cc/item/def-empirical-measure), [math:lem-empirical-measure-is-a-probability-measure](https://alphabetamath.cc/item/lem-empirical-measure-is-a-probability-measure), [math:def-dirac-measure](https://alphabetamath.cc/item/def-dirac-measure), [math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure)).

[F3] The nonnegative integral is the supremum of integrals of nonnegative simple measurable functions below the integrand; a simple integral is the finite sum of each value times the measure of its level set. Real integrals use positive and negative parts, and complex integrals use real and imaginary parts ([math:def-nonnegative-lebesgue-integral](https://alphabetamath.cc/item/def-nonnegative-lebesgue-integral), [math:def-integral-of-a-nonnegative-simple-function](https://alphabetamath.cc/item/def-integral-of-a-nonnegative-simple-function), [math:def-integrable-real-and-complex-functions-and-their-integrals](https://alphabetamath.cc/item/def-integrable-real-and-complex-functions-and-their-integrals)).

[F4] Weak convergence of Borel probability measures on a metric space is convergence of their integrals against every bounded continuous real-valued function ([math:def-weak-convergence-of-borel-probability-measures](https://alphabetamath.cc/item/def-weak-convergence-of-borel-probability-measures)).

[F5] On any measure space $(X,\mathcal A,\lambda)$, a nonnegative measurable function $f:X\to[0,+\infty]$ defines a measure by $\nu_f(A)=\int_A f\,d\lambda$ for $A\in\mathcal A$ ([math:thm-indefinite-integral-of-a-nonnegative-function-is-a-measure](https://alphabetamath.cc/item/thm-indefinite-integral-of-a-nonnegative-function-is-a-measure)).

[F6] A sigma-algebra contains the ambient set and is closed under complements and countable unions; a measurable space is a set equipped with a sigma-algebra. A measure is a nonnegative countably additive set function vanishing at the empty set, and a measure space equips a measurable space with a measure. The Borel sigma-algebra is generated by the open sets ([math:def-sigma-algebra](https://alphabetamath.cc/item/def-sigma-algebra), [math:def-measurable-space](https://alphabetamath.cc/item/def-measurable-space), [math:def-measure](https://alphabetamath.cc/item/def-measure), [math:def-measure-space](https://alphabetamath.cc/item/def-measure-space), [math:def-borel-sigma-algebra](https://alphabetamath.cc/item/def-borel-sigma-algebra)).

[F7] Measurability between measurable spaces means that preimages of measurable sets are measurable. For an extended-real-valued function it is equivalently enough that every strict real superlevel set be measurable. A nonnegative simple measurable function has finite range, or equivalently is a finite nonnegative linear combination of indicators of pairwise disjoint measurable sets. Positive and negative parts of a measurable real function are measurable ([math:def-measurable-function-between-measurable-spaces](https://alphabetamath.cc/item/def-measurable-function-between-measurable-spaces), [math:def-extended-real-valued-measurable-function](https://alphabetamath.cc/item/def-extended-real-valued-measurable-function), [math:def-nonnegative-simple-measurable-function](https://alphabetamath.cc/item/def-nonnegative-simple-measurable-function), [math:prop-closure-properties-of-measurable-functions-used-by-the-integral](https://alphabetamath.cc/item/prop-closure-properties-of-measurable-functions-used-by-the-integral)).

[F8] A continuous map between topological spaces has Borel preimages of Borel sets ([math:thm-continuous-preimages-of-borel-sets-are-borel](https://alphabetamath.cc/item/thm-continuous-preimages-of-borel-sets-are-borel)).

[F9] For a nonnegative measurable function, integration over a measurable set is defined by $\int_A f\,d\lambda=\int f\chi_A\,d\lambda$ ([math:def-integral-over-a-measurable-set](https://alphabetamath.cc/item/def-integral-over-a-measurable-set)).

### Justification

**Given:** An integer $n\geq1$, real phase representatives $\theta_1,\ldots,\theta_n$, and an integer $k$. For the density construction, a stated measure space $(X,\mathcal A,\lambda)$ and a nonnegative measurable $f$ with $\int_X f\,d\lambda=1$.

**Goal:** Verify the empirical probability measure and moment formulas, their independence of phase representatives, and the probability measure defined by a normalized density.

1.1 By [F1], every $z_j$ belongs to $S^1$ and is unchanged by changing $\theta_j$ by an integer multiple of $2\pi$. Applying [F2] to the Borel measurable space $S^1$ gives the stated probability measure and set formula, including repeated points. Thus the measure is independent of representatives. [F1, F2, F6, given]

2.1 Let $E$ be the finite set of distinct $z_j$ and let $h:S^1\to[0,\infty)$ be bounded and Borel measurable. For each $a\in E$, the singleton $\{a\}$ is Borel and has mass equal to its multiplicity divided by $n$; the complement of $E$ has mass zero. Every nonnegative simple function $s\leq h$ therefore has integral at most $\sum_{a\in E}h(a)\nu_n(\{a\})$. The simple function equal to $h(a)$ at each $a\in E$ and zero elsewhere attains this bound. It has finite range and measurable level sets by [F6] and [F7]. Hence [F3] gives $\int h\,d\nu_n=n^{-1}\sum_jh(z_j)$. For a bounded complex Borel function, its real and imaginary parts and its modulus are Borel measurable: their coordinate and modulus maps are continuous, and preimages compose, so [F7] and [F8] apply. The modulus and the positive and negative parts of each component are bounded nonnegative measurable functions by [F7], so their integrals are finite by the preceding evaluation formula. Applying this to the positive and negative parts of the real and imaginary parts of a bounded complex Borel function gives the same evaluation formula for that function. [F2, F3, F6, F7, F8, step 1.1, algebra]

3.1 The function $z\mapsto z^k$ is bounded and continuous on $S^1$, including for negative $k$, and $z_j^k=e^{ik\theta_j}$ by [F1] and the addition rule. By [F8] it is Borel measurable, so step 2.1 gives the displayed moment formula. The weak-convergence wording is exactly [F4]; it makes no assertion that any such limit or interchange of limits exists. [F1, F4, F8, step 2.1, algebra]

4.1 For the stated reference measure space and nonnegative measurable $f$, [F5] makes $\nu_f$ a measure on $(X,\mathcal A)$. Its total mass is $\nu_f(X)=\int_X f\,d\lambda=1$ by the density normalization. Hence it is a probability measure by [F2]. This applies in particular to the Borel phase space $S^1$ with any stated reference measure $\lambda$. [F2, F5, F6, F7, F9, given] ∎


## An independently attributed heterogeneous-model chaos report

[Open item](item-rem-expander-prereq-heterogeneous-chaos-report) · level 1


### Statement

Popovych, Maistrenko and Tass report chaotic behavior in a mathematical model of four globally coupled phase oscillators with nonidentical natural frequencies. Their equations are $\dot\theta_i=\omega_i+\frac K4\sum_{j=1}^{4}\sin(\theta_j-\theta_i)$, where $\omega_i=-1+2(i-1)/3$ for $i=1,2,3,4$. A phase is an angle modulo $2\pi$; $\omega_i$ is the constant rate of the $i$th phase when $K=0$, and $K$ is the common coupling parameter. Thus the natural frequencies are $-1,-1/3,1/3,1$.

The authors reduce the dynamics to the three phase differences $\phi_i=\theta_{i+1}-\theta_i$ and report a chaotic attractor: an attracting long-term behavior exhibiting chaos in their numerical study. They report a positive maximal Lyapunov exponent, a diagnostic of exponential separation of nearby trajectories, and display a section of the attractor. They associate the transition with torus destruction. This is a report about a mathematical model, not a measurement of physical oscillators or a locally verified rigorous existence theorem. Separately, the abstract of Maistrenko, Popovych and Tass's paper *Chaotic Attractor in the Kuramoto Model* reports a chaotic attractor in a four-dimensional Kuramoto model and studies its origin.

### Statement references

[Finite phase tori, local lifts and the flat metric](item-def-expander-prereq-phase-torus)

[Phasors, trigonometric identities and periodic derivatives](item-def-expander-prereq-phasor-calculus)

### External input

The reported model, frequency vector, reduction and diagnostics are imported from Popovych, Maistrenko and Tass, *Phase chaos in coupled oscillators*, equation (1), the four-oscillator discussion and Figure 1. The authors report the maximal exponent as positive approximately for $0.94<K<1.22$; these endpoints and the chaos identification are their numerical findings, not a locally reproduced computation. The Poincaré section shown is the set $\phi_1=0$ in the reduced phase space, used to display successive intersections of trajectories with that set. A Lyapunov exponent describes the long-time exponential growth rate of an infinitesimal perturbation along a trajectory; the maximal exponent is the largest such rate. A torus-destruction scenario refers here to the authors' reported transition from motion associated with a torus to the chaotic behavior they display. The separate report attributed to *Chaotic Attractor in the Kuramoto Model* is limited to its abstract.

### Source notes

The numerical observations and their interpretation are attributed to the cited authors. This item does not import a proof that a positive numerical exponent alone establishes a mathematically defined chaotic attractor, nor does it assert that the two cited papers use the same parameter vector.

## Scope of the phase-only sinusoidal oscillator idealization

[Open item](item-post-expander-prereq-phase-model-assumptions) · level 1


### Postulate

Consider a finite population of self-sustained oscillators, meaning systems that maintain periodic motion without an externally imposed periodic drive. For each isolated oscillator suppose a stable limit cycle is specified: a periodic orbit approached by sufficiently nearby motions. A phase map assigns a position modulo one cycle to states in a chosen neighborhood of that orbit; on the orbit the phase advances uniformly in time. The phase-only description retains this angular position and discards the remaining state variables. Weak coupling means that interactions perturb the isolated oscillations only slightly; near identity means that the isolated oscillators have similar dynamics. These qualitative conditions motivate a phase description but do not by themselves specify an error bound.

Adopt the following additional idealization for a finite nonempty vertex set $V$. Vertex $x$ represents oscillator $x$, and its phase $\theta_x$ is an angle modulo $2\pi$. Its intrinsic frequency $\omega_x$ is its angular rate when coupling is absent. Let $A_{xy}=A_{yx}\geq 0$ be the strength of the pairwise influence between $x$ and $y$, with $A_{xx}=0$; zero strength means no edge. On locally chosen real angular representatives, assume $\dot\theta_x=\omega_x+\sum_{y\in V}A_{xy}\sin(\theta_y-\theta_x)$. Thus the interaction is sinusoidal in the phase difference, symmetric in its weights, and attractive in the sense that a small positive phase difference contributes positively to $\dot\theta_x$. In the homogeneous specialization assume $\omega_x=\omega$ for every $x\in V$.

The phase-only description, the sinusoidal graph interaction, symmetric nonnegative weights and identical frequencies are modeling assumptions. They are not an observation, an experimental calibration, or an assertion that a generic oscillator system obeys this equation exactly.

### Postulate references

[Phasors, trigonometric identities and periodic derivatives](item-def-expander-prereq-phasor-calculus)

### Source notes

Strogatz, [From Kuramoto to Crawford](https://www.mit.edu/~jadbabai/ESE680/Strogatz_Kuramoto.pdf), Section 2 and Section 3.1, motivates phases through weak coupling and near identity and presents the equally weighted all-to-all sinusoidal model. The weighted graph and homogeneous-frequency specialization above are separately adopted choices; the source citation does not establish them for a physical apparatus.


## Translate every finite forward orbit without assuming global invertibility

[Open item](item-lem-author-4c1c39929ecb-translated-iterates) · level 1


### Statement

Use the translation $\tau(y)=p+y$ and conjugate $f(y)=h(p+y)-p$ of the fixed-point translation lemma. For every integer $n\ge0$, the iterates through time $n$ are defined at $y$ for $f$ exactly when they are defined at $p+y$ for $h$, and then $h^n(p+y)=p+f^n(y)$. An iterate of a local map is defined only if all preceding points lie in its domain; $h^0$ and $f^0$ are identities. Consequently, for any $B\subseteq U-p$, every forward iterate of $y$ lies in $B$ exactly when every forward iterate of $p+y$ lies in $p+B$.

### Facts & Assumptions

[F1] The conjugacy is defined on $U-p$ and obeys $h\circ\tau=\tau\circ f$ [lem-author-4c1c39929ecb-fixed-point-translation](item-lem-author-4c1c39929ecb-fixed-point-translation).

[F2] Mathematical induction: if a property holds at $0$ and its validity at $n$ implies its validity at $n+1$ for every $n\ge0$, it holds for all nonnegative integers [math:thm-induction-principle](https://alphabetamath.cc/item/thm-induction-principle).

### Proof

**Given:** The maps, domains and iterate convention in the Statement.

**Goal:** Establish equality of the orbit conditions, including their domains.

1.1 At time zero the equality is $p+y=p+y$. If it holds through time $n$, then $f^n(y)\in U-p$ exactly when $h^n(p+y)\in U$. These are precisely the conditions for the next iterate to be defined, and conjugacy gives $h^{n+1}(p+y)=p+f^{n+1}(y)$. Induction proves the claim for every finite $n$. [given, F1, F2]

2.1 Applying the finite identity for each $n\ge0$ gives $f^n(y)\in B$ exactly when $h^n(p+y)\in p+B$. Requiring these equivalent conditions for every $n$ proves the assertion about complete forward orbits. [step 1.1] ∎


## A compactly trapped gradient trajectory has a critical accumulation point

[Open item](item-lem-author-647111dd30d9-compact-critical-accumulation) · level 1



### Statement

Let $U\subseteq\mathbb R^m$ be open, $m\ge1$, $f\in C^1(U)$ and $x:[0,\infty)\to U$ solve $x'=-\nabla f(x)$. If $x(t)$ belongs to a compact set $K\subset U$ for all $t\ge0$, there exist times $t_j\to\infty$ and a subsequence of $x(t_j)$ converging to $y\in K$ with $\nabla f(y)=0$. Moreover $f(y)\le f(x(0))$.

### Facts & Assumptions

[F1] The following exact suppliers are used under the hypotheses stated above: [lem-author-647111dd30d9-gradient-energy](item-lem-author-647111dd30d9-gradient-energy), [math:thm-extreme-value-metric](https://alphabetamath.cc/item/thm-extreme-value-metric), [math:cor-bolzano-weierstrass-in-rn](https://alphabetamath.cc/item/cor-bolzano-weierstrass-in-rn), [math:thm-heine-borel-rn](https://alphabetamath.cc/item/thm-heine-borel-rn).

[F2] The class $C^1(U)$ uses [math:def-c-one-map-and-local-inverse](https://alphabetamath.cc/item/def-c-one-map-and-local-inverse): $f$ is totally differentiable and the entries of its derivative are continuous. In particular $f$ and its Euclidean gradient are continuous.

[F3] Rational times are dense in the real line by [math:lem-q-and-irrationals-dense-r](https://alphabetamath.cc/item/lem-q-and-irrationals-dense-r), and [math:thm-rationals-countable](https://alphabetamath.cc/item/thm-rationals-countable) supplies a fixed enumeration of them. Taking the least eligible enumeration index defines each time without countable choice.

[F4] Clause 2 of [math:lem-sequential-closure-inside-closure](https://alphabetamath.cc/item/lem-sequential-closure-inside-closure) says that a continuous map sends a convergent sequence to a sequence converging to the image of its limit; it applies to $f$ and $\nabla f$ on $U$ with their usual Euclidean topologies.

[F5] Continuous real functions on nondegenerate compact intervals are Riemann integrable ([math:thm-continuous-implies-integrable](https://alphabetamath.cc/item/thm-continuous-implies-integrable)). For such integrals, a pointwise lower bound $g\ge a$ gives $\int_u^v g\ge a(v-u)$, and a nonnegative integrand has a nonnegative integral ([math:thm-monotonicity-of-the-integral](https://alphabetamath.cc/item/thm-monotonicity-of-the-integral)).

### Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Prove the asserted conclusion.

1.1 The set $K$ is nonempty because it contains $x(0)$. On every finite interval, the equation and continuity of $\nabla f$ give the closed-interval $C^1$ trajectory convention of the energy supplier. Write $E=f(x(0))-\min_K f\ge0$. The energy identity and the minimum of $f$ on compact $K$ give $\int_0^T\|\nabla f(x(t))\|^2\,dt\le E$ for every $T>0$. Nonnegativity of the integrand also gives energy monotonicity on every subinterval. [F1, F2, F5, given]

2.1 For every integer $j\ge1$ there is a time $t>j$ with $\|\nabla f(x(t))\|<1/j$. Otherwise continuity gives $\|\nabla f(x(t))\|^2\ge1/j^2$ on every $[j,T]$. This integrand is continuous and therefore integrable, so [F5] gives $\int_j^T\|\nabla f(x(t))\|^2\,dt\ge(T-j)/j^2$. The energy identity on $[j,T]$ and step 1.1 bound this integral by $f(x(j))-\min_K f\le E$, contradicted by $T>j+j^2E$. Continuity makes the set of eligible times greater than $j$ open and nonempty. Density of the rationals supplies an eligible rational time; select $t_j$ as the first one in a fixed rational enumeration. This defines all $t_j$ without countable choice, with $t_j>j$ and thus $t_j\to\infty$. [F1, F2, F3, F5, step 1.1, algebra]

3.1 The sequence in bounded $K$ has a convergent subsequence by Bolzano–Weierstrass, and its limit $y$ belongs to closed $K$. Sequential continuity of the continuous gradient gives $\nabla f(y)=0$, since the subsequence indices tend to infinity and the gradient norms are less than their reciprocal indices. Energy monotonicity and sequential continuity of $f$ give $f(y)\le f(x(0))$, proving the assertion. [F1, F2, F4, step 1.1, step 2.1] ∎



## Conditional gradient inequality gives a length bound

[Open item](item-lem-author-647111dd30d9-gradient-length) · level 1


### Statement

Let $f\in C^2(U)$ on open $U\subseteq\mathbb R^m$, $m\ge1$, and $z\in U$. Suppose on an open neighborhood $W\subset U$ of $z$ one has $f\ge f(z)$ and
$$\|\nabla f(y)\|\ge c|f(y)-f(z)|^\rho,\qquad c>0,\quad 0<\rho<1.$$
For any downward Euclidean gradient trajectory remaining in $W$ on $[a,b]$, its length is at most
$$\frac{(f(x(a))-f(z))^{1-\rho}-(f(x(b))-f(z))^{1-\rho}}{c(1-\rho)}.$$
This statement assumes the displayed inequality; it does not assert it for arbitrary $C^2$ functions.

### Facts & Assumptions

[F1] We use the closed-interval $C^1$ trajectory convention, the Euclidean gradient, and the length integral specified in [lem-author-647111dd30d9-gradient-energy](item-lem-author-647111dd30d9-gradient-energy). Thus $x$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $x'$ has a continuous extension to $[a,b]$. A degenerate interval has length zero.

[F2] [math:def-real-power](https://alphabetamath.cc/item/def-real-power) defines $s^\beta=\exp(\beta\log s)$ for $s>0$ and $0^\beta=0$ for $\beta>0$. [math:cor-exponential-reciprocal-and-positivity](https://alphabetamath.cc/item/cor-exponential-reciprocal-and-positivity) makes every positive-base power positive. [math:thm-real-power-continuity-and-derivatives](https://alphabetamath.cc/item/thm-real-power-continuity-and-derivatives) supplies continuity and the derivative $\beta s^{\beta-1}$ on $(0,\infty)$; [math:thm-real-power-laws](https://alphabetamath.cc/item/thm-real-power-laws) supplies the iterated-power law. The extension to zero is proved below, rather than assumed from the positive-base theorem.

[F3] [math:thm-continuous-implies-integrable](https://alphabetamath.cc/item/thm-continuous-implies-integrable) gives boundedness and Riemann integrability for continuous real functions on nondegenerate compact intervals. [math:thm-monotonicity-of-the-integral](https://alphabetamath.cc/item/thm-monotonicity-of-the-integral) gives nonnegativity, comparison, and the two-sided constant bounds for integrals. [math:thm-linearity-of-the-integral](https://alphabetamath.cc/item/thm-linearity-of-the-integral) permits scalar factors to be taken outside an integral. [math:thm-newton-leibniz-with-interior-derivative](https://alphabetamath.cc/item/thm-newton-leibniz-with-interior-derivative) applies to a continuous function whose interior derivative has an integrable extension.

[F4] For an integrable speed $g$ on $[a,b]$, [math:def-the-integral-function](https://alphabetamath.cc/item/def-the-integral-function) defines $L(t)=\int_a^t g(s)\,ds$, including $L(a)=0$, and gives $L(v)-L(u)=\int_u^v g(s)\,ds$. If $|g|\le K$, [math:thm-the-integral-function-is-lipschitz](https://alphabetamath.cc/item/thm-the-integral-function-is-lipschitz) gives $|L(v)-L(u)|\le K|v-u|$, so $L$ is continuous at the endpoints as well.

[F5] [math:thm-heine-borel-rn](https://alphabetamath.cc/item/thm-heine-borel-rn) gives compactness of closed bounded Euclidean sets; [math:thm-extreme-value-metric](https://alphabetamath.cc/item/thm-extreme-value-metric) gives extrema and bounds for continuous real functions on nonempty compact sets.

[F6] The $C^2$ hypothesis has the meaning of [math:def-ck-and-multi-index-notation-in-several-variables](https://alphabetamath.cc/item/def-ck-and-multi-index-notation-in-several-variables): all iterated coordinate derivatives of order at most two exist and are continuous. [math:thm-continuous-partial-derivatives-imply-total-differentiability](https://alphabetamath.cc/item/thm-continuous-partial-derivatives-imply-total-differentiability) applies to $f$ and its first partial derivatives. [math:thm-chain-rule-for-total-derivatives](https://alphabetamath.cc/item/thm-chain-rule-for-total-derivatives) and [math:cor-mean-value-theorem](https://alphabetamath.cc/item/cor-mean-value-theorem) apply along line segments. For the resulting locally Lipschitz vector field $-\nabla f$, [math:thm-picard-lindelof-local-existence-and-uniqueness](https://alphabetamath.cc/item/thm-picard-lindelof-local-existence-and-uniqueness) supplies uniqueness on common solution intervals.

### Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Prove the asserted length bound, including zero energy levels.

1.1 For any $\beta>0$, the positive-base power has strictly positive derivative by [F2], so the mean value theorem makes $s\mapsto s^\beta$ strictly increasing on $(0,\infty)$. Given $\varepsilon>0$, put $\delta=\varepsilon^{1/\beta}>0$. If $0<s<\delta$, the iterated-power law gives $0<s^\beta<\delta^\beta=\varepsilon$; for $s=0$ the zero-base convention gives the same upper bound. Thus $s^\beta\to0$ as $s\downarrow0$, and the defined power is continuous on $[0,\infty)$. This applies to both $\beta=\rho$ and $\beta=1-\rho$. [F2, F6, given]

1.2 If $a=b$, both the length and the stated numerator are zero. Hence assume $a<b$. Write $h(t)=f(x(t))-f(z)\ge0$ and $g(t)=\|\nabla f(x(t))\|$. The energy identity, or its interior chain-rule calculation, gives $h'=-g^2$ and $\|x'\|=g$; $h$ and $g$ are continuous on $[a,b]$. Where $h>0$, the power derivative, chain rule, and $g\ge c h^\rho$ give $-(h^{1-\rho})'=(1-\rho)h^{-\rho}g^2\ge c(1-\rho)g$. [F1, F2, F6, given]

1.3 At any $q\in W$ with $f(q)=f(z)$, openness of $W$ and $f\ge f(z)$ make $q$ a local minimum. For each coordinate, the positive and negative difference quotients at $q$ have opposite weak signs; existence of the partial derivative forces it to be zero. Thus $\nabla f(q)=0$ and the constant curve through $q$ solves the gradient equation. The gradient is locally Lipschitz: on a small closed ball in $U$, each continuous second partial derivative is bounded by compactness and extreme values; applying the chain rule and the one-variable mean value estimate along segments bounds each first-partial increment by a constant times the distance. Combining the finitely many coordinate bounds gives a Lipschitz bound for the gradient. ODE uniqueness therefore makes the given trajectory constant for the rest of $[a,b]$ after any time at which $h=0$. Its speed and all subsequent length increments are zero. [F1, F3, F4, F5, F6, given]

2.1 On a nondegenerate closed subinterval $[u,v]\subseteq[a,b]$ where $h>0$, both $g$ and $d(t)=(1-\rho)h(t)^{-\rho}g(t)^2$ are continuous, hence integrable. Newton–Leibniz applies to $-h^{1-\rho}$ with derivative extension $d$. Integral comparison and scalar linearity therefore give $c(1-\rho)\int_u^v g(t)\,dt\le\int_u^v d(t)\,dt=h(u)^{1-\rho}-h(v)^{1-\rho}$. [F2, F3, step 1.2]

2.2 On the whole interval, continuity of $g$ gives integrability and a finite bound $0\le g\le K$. The integral function $L(t)=\int_a^t g(s)\,ds$ is therefore defined and satisfies $|L(v)-L(u)|\le K|v-u|$. In particular, $L(t)\to L(\tau)$ as $t\uparrow\tau$, for every $a<\tau\le b$. [F3, F4, step 1.2]

3.1 If $h(a)=0$, step 1.3 gives length zero and $h(b)=0$, proving the bound. Otherwise $h(a)>0$. If $h$ has no zero on $[a,b]$, use step 2.1 with $u=a$ and $v=b$. If it has a zero, its zero set is closed by continuity, bounded, and nonempty; compactness and the minimum of the identity function give its first element $\tau>a$. For $a<t<\tau$, step 2.1 gives $c(1-\rho)L(t)\le h(a)^{1-\rho}-h(t)^{1-\rho}$. As $t\uparrow\tau$, continuity of $h$, the zero-endpoint power limit in step 1.1, and step 2.2 give $c(1-\rho)L(\tau)\le h(a)^{1-\rho}$. Step 1.3 gives $L(b)=L(\tau)$ and $h(b)=0$. Dividing by $c(1-\rho)>0$ proves exactly the asserted estimate in every case. [F3, F4, F5, step 1.1, step 1.2, step 2.1, step 2.2, step 1.3] ∎


## A scoped continuum self-consistency input

[Open item](item-rem-expander-prereq-continuum-branch-background) · level 2


### Statement

In the stationary mean-field Kuramoto self-consistency calculation, let $K>0$ be the coupling and let $g$ be an even, unimodal probability density on the real frequency axis, smooth near zero, with $g(0)>0$ and $g''(0)<0$. Even means $g(-\omega)=g(\omega)$; unimodal means nonincreasing on $[0,\infty)$. The model uses all-to-all sinusoidal coupling $K/n$. In a rotating frame, $r$ denotes the modulus of the mean phase phasor: $r=0$ is the incoherent branch and $r>0$ describes partial phase coherence. The stationary self-consistency branch meets $r=0$ at $K_c=2/(\pi g(0))$ and is locally supercritical: its positive solutions occur for $K>K_c$ sufficiently close to $K_c$.

### External input

The cited calculation assumes a stationary population in the rotating frame, including locked oscillators and a stationary distribution of drifting oscillators. It gives the positive-branch equation $1=K\int_{-\pi/2}^{\pi/2}\cos^2\theta\,g(Kr\sin\theta)\,d\theta$ and the stated local branch behavior. The phasor and density terminology is as in [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus) and [def-expander-prereq-empirical-phase-measures](item-def-expander-prereq-empirical-phase-measures). This input asserts neither a finite-$n$ long-time limit nor global stability or almost-everywhere synchronization.


## Transport local invariance and forward trapping to a fixed point

[Open item](item-lem-author-4c1c39929ecb-transport-of-trapping) · level 2


### Statement

Let $m\ge0$ and $r\ge1$ be integers, with $r$ finite. Let $U\subseteq\mathbb R^m$ be open, let $p\in U$, and let $h:U\to\mathbb R^m$ be a $C^r$ local diffeomorphism with $h(p)=p$. Here $C^r$ uses continuous iterated Fréchet derivatives through order $r$, and local diffeomorphism means that around each point $h$ has a $C^r$ inverse onto an open image. Define $f:U-p\to\mathbb R^m$ by $f(y)=h(p+y)-p$. For either local map, an iterate is defined only when all preceding points lie in its domain; $f^0$ and $h^0$ are identities.

Let $0\le d\le m$ be integers, let $s\in\{1,2,\ldots\}\cup\{\infty\}$, and let $W$ be a $C^s$ embedded $d$-disc through zero. An embedded disc here is an image $k(E)$ of an injective $C^s$ map $k:E\to\mathbb R^m$ from a nonempty open ball $E\subseteq\mathbb R^d$, such that $k$ is a homeomorphism onto its image with the subspace topology and $Dk$ is injective everywhere. Use the componentwise $C^s$ and zero-dimensional conventions of the translated-disc lemma.

Let $B\subseteq U-p$ be an open ball about zero for some norm. Suppose $f(W\cap(U-p))\cap B\subseteq W$, and suppose every $y\in U-p$ for which all $f^n(y)$ are defined and lie in $B$ for $n\ge0$ belongs to $W$. Then $W_p=p+W$ is a $C^s$ embedded $d$-disc through $p$ with $T_pW_p=T_0W$ under the Euclidean tangent-space identifications, $B_p=p+B$ is a Euclidean open neighbourhood of $p$, $h(W_p\cap U)\cap B_p\subseteq W_p$, and every $x\in U$ for which all $h^n(x)$ are defined and lie in $B_p$ for $n\ge0$ belongs to $W_p$.

### Facts & Assumptions

[F1] Under the stated open-domain, fixed-point and finite-regularity local-diffeomorphism hypotheses, translation supplies the local conjugacy [lem-author-4c1c39929ecb-fixed-point-translation](item-lem-author-4c1c39929ecb-fixed-point-translation) and identities for every defined iterate [lem-author-4c1c39929ecb-translated-iterates](item-lem-author-4c1c39929ecb-translated-iterates).

[F2] The embedded-disc, componentwise regularity and zero-dimensional conventions, and preservation of discs and tangent spaces under translation, are supplied by [lem-author-4c1c39929ecb-translated-tangent-discs](item-lem-author-4c1c39929ecb-translated-tangent-discs). Norm balls are Euclidean neighbourhoods by [lem-author-4c1c39929ecb-adapted-ball-neighbourhoods](item-lem-author-4c1c39929ecb-adapted-ball-neighbourhoods).

### Proof

**Given:** The map, open domain, fixed point, finite integer map regularity, defined-iterate convention, disc and its independent regularity and embedding convention, ball, and invariance and trapping hypotheses in the Statement.

**Goal:** Transport all these conclusions to the fixed point $p$.

1.1 Choose the admissible parametrization $k:E\to W$ and $a_0\in E$ with $k(a_0)=0$. Put $D=E-a_0$ and $j(a)=k(a+a_0)$. Then $D$ is an open ball containing zero, $j(0)=0$ and $j(D)=W$. Parameter translation and its inverse preserve distances and hence are homeomorphisms; composing them with $k$ and its inverse shows that $j$ is a homeomorphism onto $W$. It is injective. In positive source and target dimensions, coordinate difference quotients give $\partial^\alpha j(a)=\partial^\alpha k(a+a_0)$ for every nonempty derivative word $\alpha$ of required order, so these derivatives are continuous and $j$ is $C^s$. The differentiability remainder likewise gives $Dj(a)=Dk(a+a_0)$, which is injective. In zero source or target dimension, the same regularity and derivative conclusions follow from the zero-dimensional convention. Thus $j$ is an admissible parametrization of the entire disc satisfying the centered-parametrization hypotheses of the translated-disc result. [given, F2]

1.2 If $z\in h(W_p\cap U)\cap B_p$, write $z=h(p+w)$ with $w\in W\cap(U-p)$. Then $z-p=f(w)\in B$, so $z-p\in f(W\cap(U-p))\cap B\subseteq W$. Hence $z\in W_p$. [given, F1]

2.1 Apply the translated-disc result in [F2] to $j$ and $D$ from step 1.1. It gives that $W_p$ is a $C^s$ embedded $d$-disc through $p$ with $T_pW_p=T_0W$. The norm-ball result in [F2] gives that $B_p$ is a Euclidean open neighbourhood of $p$. [given, F2, step 1.1]

3.1 Let $x\in U$ have all nonnegative $h$-iterates defined and in $B_p$. The defined-iterate identities in [F1] give that all $f^n(x-p)$ are defined and lie in $B$ for every $n\ge0$. The trapping hypothesis gives $x-p\in W$, so $x\in W_p$, as required. [given, F1] ∎


## A local minimum with a gradient inequality is stable

[Open item](item-lem-author-647111dd30d9-minimum-trapping) · level 2


### Statement

Let $m\ge1$, let $f\in C^2(U)$ on open $U\subseteq\mathbb R^m$, and let $z\in U$ be a local minimum. Assume on a neighborhood of $z$ that $\|\nabla f(y)\|\ge c|f(y)-f(z)|^\rho$ for $c>0$ and $0<\rho<1$. Then $z$ is a Lyapunov stable equilibrium for $x'=-\nabla f(x)$. Here stability is local: for each sufficiently small ball about $z$, all solutions from a sufficiently smaller ball exist for all forward time and stay in the larger ball; this implies the usual condition for every tolerance.

### Facts & Assumptions

[F1] The formulation uses $C^2$ in [math:def-ck-and-multi-index-notation-in-several-variables](https://alphabetamath.cc/item/def-ck-and-multi-index-notation-in-several-variables), the Euclidean gradient in [math:def-jacobian-matrix-and-gradient](https://alphabetamath.cc/item/def-jacobian-matrix-and-gradient), the norm in [math:def-euclidean-inner-product](https://alphabetamath.cc/item/def-euclidean-inner-product), solutions in [math:def-first-order-ode-initial-value-problem-and-solution](https://alphabetamath.cc/item/def-first-order-ode-initial-value-problem-and-solution), and balls in [math:def-metric-ball](https://alphabetamath.cc/item/def-metric-ball). Local minimality has the meaning in [def-expander-prereq-stability-and-attraction](item-def-expander-prereq-stability-and-attraction). Real powers, including $0^\beta=0$ for $\beta>0$, have the convention in [math:def-real-power](https://alphabetamath.cc/item/def-real-power).

[F2] Continuous coordinate partial derivatives give total differentiability with Jacobian derivative by [math:thm-continuous-partial-derivatives-imply-total-differentiability](https://alphabetamath.cc/item/thm-continuous-partial-derivatives-imply-total-differentiability). Fermat's theorem [math:thm-fermat-for-euclidean-local-extrema](https://alphabetamath.cc/item/thm-fermat-for-euclidean-local-extrema) applies at an interior differentiable local minimum. The chain rule [math:thm-chain-rule-for-total-derivatives](https://alphabetamath.cc/item/thm-chain-rule-for-total-derivatives) and the one-variable mean value theorem [math:cor-mean-value-theorem](https://alphabetamath.cc/item/cor-mean-value-theorem) apply along segments.

[F3] Closed bounded Euclidean sets are compact by [math:thm-heine-borel-rn](https://alphabetamath.cc/item/thm-heine-borel-rn), and continuous real functions on nonempty compact metric spaces attain finite bounds by [math:thm-extreme-value-metric](https://alphabetamath.cc/item/thm-extreme-value-metric). We use Cauchy–Schwarz and the Euclidean triangle inequality from [math:thm-cauchy-schwarz-and-the-euclidean-norm](https://alphabetamath.cc/item/thm-cauchy-schwarz-and-the-euclidean-norm).

[F4] For a continuous field locally Lipschitz in the state variable, locally uniformly in time as defined in [math:def-locally-lipschitz-in-the-state-variable](https://alphabetamath.cc/item/def-locally-lipschitz-in-the-state-variable), [math:thm-picard-lindelof-local-existence-and-uniqueness](https://alphabetamath.cc/item/thm-picard-lindelof-local-existence-and-uniqueness) supplies local existence and uniqueness. [math:thm-existence-and-uniqueness-of-a-maximal-ode-solution](https://alphabetamath.cc/item/thm-existence-and-uniqueness-of-a-maximal-ode-solution) supplies the unique maximal solution and its open time interval.

[F5] [lem-author-647111dd30d9-gradient-length](item-lem-author-647111dd30d9-gradient-length) bounds the length of a downward gradient trajectory on a closed time interval inside a neighborhood where $f\ge f(z)$ and the assumed gradient inequality holds. [lem-author-647111dd30d9-gradient-energy](item-lem-author-647111dd30d9-gradient-energy) bounds endpoint displacement by that length, with the closed-interval $C^1$ convention stated there.

[F6] Stability here uses the local autonomous ODE definition in [physics:def-cm-equilibrium-and-lyapunov-stability](https://alphabetamath.cc/physics/item/def-cm-equilibrium-and-lyapunov-stability): nearby maximal solutions must exist for every forward time and remain within each test ball compactly contained in the open state domain. The autonomous clause 2 of [physics:thm-cm-compact-continuation-for-locally-lipschitz-odes](https://alphabetamath.cc/physics/item/thm-cm-compact-continuation-for-locally-lipschitz-odes) extends a solution past a finite forward endpoint when its image stays in a compact subset of that domain. Both suppliers have domain mathematics. On a complete flow the resulting tolerance condition agrees with [def-expander-prereq-stability-and-attraction](item-def-expander-prereq-stability-and-attraction).

[F7] [math:thm-real-power-continuity-and-derivatives](https://alphabetamath.cc/item/thm-real-power-continuity-and-derivatives) gives the derivative $\beta s^{\beta-1}$ for $s>0$; [math:cor-exponential-reciprocal-and-positivity](https://alphabetamath.cc/item/cor-exponential-reciprocal-and-positivity) and the definition of positive-base powers make these powers positive. [math:thm-real-power-laws](https://alphabetamath.cc/item/thm-real-power-laws) gives $(a^u)^v=a^{uv}$ for $a>0$. Only positive-base differentiation is used below; the zero-base case uses [F1].

### Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Prove local forward existence and Lyapunov stability of $z$.

1.1 Fix $\varepsilon>0$. Choose an open neighborhood $W\subseteq U$ of $z$ on which $f\ge f(z)$ and the gradient inequality both hold, and choose $0<r<\varepsilon$ with $\overline B(z,r)\subset W$. The $C^2$ hypothesis gives continuous partial derivatives, so $f$ is totally differentiable; Fermat's theorem at its interior local minimum gives $\nabla f(z)=0$. Hence $z$ is an equilibrium. [F1, F2, given]

1.2 The field $-\nabla f$ is continuous and locally Lipschitz, as follows directly. On any closed ball $K\subset U$ of positive radius, compactness and extreme values bound all $|\partial_j\partial_i f|$ by one $M\ge0$. Each $\partial_i f$ is totally differentiable by [F2]. For $u,v\in K$, the chain rule on $u+t(v-u)$ bounds the derivative of $\partial_i f(u+t(v-u))$ by $M\sum_{j<m}|v_j-u_j|\le M\sqrt m\,\|v-u\|$. The scalar mean value theorem on $[0,1]$ gives $|\partial_i f(v)-\partial_i f(u)|\le M\sqrt m\,\|v-u\|$, hence $\|\nabla f(v)-\nabla f(u)\|\le mM\|v-u\|$. These bounds are independent of time for the autonomous field on $\mathbb R\times U$, so the local and maximal ODE existence and uniqueness results apply. [F1, F2, F3, F4]

2.1 Put $\alpha=1-\rho>0$ and $\eta=(c\alpha r/4)^{1/\alpha}>0$. On positive bases, the derivative formula, positivity and the mean value theorem make $s\mapsto s^\alpha$ strictly increasing; the iterated-power law gives $\eta^\alpha=c\alpha r/4$. Continuity of $f$ at $z$ permits $0<\delta<r/4$ such that $\|y-z\|<\delta$ implies $0\le f(y)-f(z)<\eta$. Thus $[f(y)-f(z)]^\alpha/(c\alpha)<r/4$, including $f(y)=f(z)$ by the zero-base convention. [F1, F2, F7, step 1.1]

3.1 Let $\|y-z\|<\delta$ and let $x$ be the maximal solution with $x(0)=y$, with forward interval $[0,T)$, $0<T\le\infty$. If $\|x(t_1)-z\|\ge r$ for some $t_1<T$, the set $E=\{t\in[0,t_1]:\|x(t)-z\|\ge r\}$ is nonempty and closed by continuity, hence compact. The minimum of the identity function on $E$ gives $\tau>0$. Continuity forces $\|x(\tau)-z\|=r$: a larger value would give an earlier time in $E$. On $[0,\tau]$ the trajectory stays in $\overline B(z,r)\subset W$, so [F5] bounds its length and hence $\|x(\tau)-y\|$ by $[f(y)-f(z)]^\alpha/(c\alpha)<r/4$. The triangle inequality gives $\|x(\tau)-z\|<r/2$, a contradiction. Consequently $x(t)\in B(z,r)$ for $0\le t<T$; applying the same length and displacement estimates to each $[0,t]$, $0<t<T$, gives $\|x(t)-z\|<r/2$, also true at $t=0$. These restrictions are $C^1$ in the closed-interval convention, since the ODE has continuous right-hand side. [F1, F3, F4, F5, step 1.1, step 1.2, step 2.1]

4.1 If $T<\infty$, the entire forward image lies in $K_0=\overline B(z,r/2)\subset U$, which is compact by Heine–Borel. The autonomous compact-continuation theorem applies to this continuous locally Lipschitz field and extends the solution past $T$, contradicting maximality. Therefore $T=\infty$. [F3, F4, F6, step 1.2, step 3.1]

5.1 For every $\varepsilon>0$ we have obtained $\delta>0$ for which every maximal solution starting within $\delta$ of $z$ exists for all forward time and satisfies $\|x(t)-z\|<r/2<\varepsilon$. In particular this proves every test-ball condition of the local ODE stability definition in [F6], and hence Lyapunov stability. If a complete flow is available, it also proves its usual metric tolerance condition. No attraction to $z$ is asserted. [F1, F6, step 1.1, step 3.1, step 4.1] ∎


## Nearby critical values force nonminimum escape

[Open item](item-lem-author-647111dd30d9-nonminimum-escape) · level 2


### Statement

Let $m\ge1$, let $f\in C^2(U)$ on open $U\subseteq\mathbb R^m$, and let $z$ be an equilibrium for $x'=-\nabla f(x)$. Suppose there is a neighborhood $W$ of $z$ on which every critical point $y$ satisfies $f(y)=f(z)$. If $z$ is not a local minimum, it is not Lyapunov stable.

Here stability is defined for maximal forward solutions in $U$. Write $x(t;x_0)$ for the solution with $x(0;x_0)=x_0\in U$, and $[0,T_+(x_0))$ for the forward part of its maximal interval, where $0<T_+(x_0)\le\infty$. Lyapunov stability means that for every $\varepsilon>0$ there is $\delta>0$ such that $x_0\in U$ and $\|x_0-z\|_2<\delta$ imply $\|x(t;x_0)-z\|_2<\varepsilon$ for every $0\le t<T_+(x_0)$. For a complete flow this is the usual point-stability definition. In fact, the conclusion supplies a fixed $r>0$ such that every $\delta>0$ admits such an $x_0$ and a time $t<T_+(x_0)$ with $\|x(t;x_0)-z\|_2>r$.

### Facts & Assumptions

[F1] The Euclidean gradient has coordinates $g_i=\partial_i f$ for $0\le i<m$ by [math:def-jacobian-matrix-and-gradient](https://alphabetamath.cc/item/def-jacobian-matrix-and-gradient). The $C^2$ convention is [math:def-ck-and-multi-index-notation-in-several-variables](https://alphabetamath.cc/item/def-ck-and-multi-index-notation-in-several-variables): $f$, its first partials and every ordered second partial are continuous on $U$. Continuously totally differentiable maps use [math:def-c-one-map-and-local-inverse](https://alphabetamath.cc/item/def-c-one-map-and-local-inverse). Solutions and maximal intervals use [math:def-first-order-ode-initial-value-problem-and-solution](https://alphabetamath.cc/item/def-first-order-ode-initial-value-problem-and-solution) and [math:def-maximal-ode-solution](https://alphabetamath.cc/item/def-maximal-ode-solution).

[F2] Local minimality and the complete-flow point-stability definition are supplied by [def-expander-prereq-stability-and-attraction](item-def-expander-prereq-stability-and-attraction). The maximal-forward-solution definition in the Statement uses the same distance quantifiers over each solution's available forward times; it specializes to that definition when a complete flow is given.

[F3] Continuous partial derivatives imply total differentiability with Jacobian derivative by [math:thm-continuous-partial-derivatives-imply-total-differentiability](https://alphabetamath.cc/item/thm-continuous-partial-derivatives-imply-total-differentiability). A uniform bound on the total derivative on a convex open set gives the corresponding Lipschitz bound by [math:thm-mean-value-inequality-for-total-derivatives](https://alphabetamath.cc/item/thm-mean-value-inequality-for-total-derivatives). Closed bounded Euclidean balls are compact by [math:thm-heine-borel-rn](https://alphabetamath.cc/item/thm-heine-borel-rn), and each continuous real function on a nonempty compact set is bounded by [math:thm-extreme-value-metric](https://alphabetamath.cc/item/thm-extreme-value-metric).

[F4] Local Lipschitz continuity in the state variable means a uniform state Lipschitz bound on each compact time-state cylinder, as in [math:def-locally-lipschitz-in-the-state-variable](https://alphabetamath.cc/item/def-locally-lipschitz-in-the-state-variable). Under continuity and this condition on an open time-state domain, [math:thm-picard-lindelof-local-existence-and-uniqueness](https://alphabetamath.cc/item/thm-picard-lindelof-local-existence-and-uniqueness) gives local existence and uniqueness, and [math:thm-existence-and-uniqueness-of-a-maximal-ode-solution](https://alphabetamath.cc/item/thm-existence-and-uniqueness-of-a-maximal-ode-solution) gives a unique maximal solution on an open interval containing the initial time.

[F5] The autonomous clause 2 of [physics:thm-cm-compact-continuation-for-locally-lipschitz-odes](https://alphabetamath.cc/physics/item/thm-cm-compact-continuation-for-locally-lipschitz-odes) extends a solution past a finite forward endpoint when its states stay in a compact subset of $U$ near that endpoint. This supplier has domain mathematics. For a trajectory defined at all forward times and trapped in compact $K\subset U$, [lem-author-647111dd30d9-compact-critical-accumulation](item-lem-author-647111dd30d9-compact-critical-accumulation) gives $y\in K$ with $\nabla f(y)=0$ and $f(y)\le f(x(0))$.

### Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Prove instability in the stated maximal-forward-solution sense and the escape property.

1.1 Put $g=\nabla f$. By the continuous-partials criterion, both $f$ and $g$ are totally differentiable, with continuous derivative entries, so in particular they are continuous and $f\in C^1(U)$ in the sense required by compact critical accumulation. On any closed ball $Q=\overline B(a,R)\subset U$ with $R>0$, compactness and the extreme-value theorem give a common finite $M\ge0$ bounding every $|\partial_jg_i|$. For $u\in Q$ and $v\in\mathbb R^m$, the Jacobian formula gives $|(Dg(u)v)_i|\le M\sum_{j<m}|v_j|\le mM\|v\|_2$, and hence $\|Dg(u)v\|_2\le m\sqrt m M\|v\|_2$. The total-derivative mean-value inequality on $B(a,R)$ gives this Lipschitz constant there, and continuity extends the inequality to $Q$. Thus the autonomous field $F(t,u)=-g(u)$ on open $D=\mathbb R\times U$ is continuous and satisfies the uniform state Lipschitz condition on every compact time-state cylinder. [F1, F3, F4, given, algebra]

2.1 Choose $r>0$ with $K=\overline B(z,r)\subset W\cap U$; $K$ is compact. Failure of local minimality gives, for every $\delta>0$, a point $x_0\in B(z,\min\{\delta,r\})$ with $f(x_0)<f(z)$. Apply local existence and uniqueness and the maximal-solution theorem to $F$ on $D$ at $(0,x_0)$, using step 1.1. Its unique maximal solution has forward interval $[0,T_+(x_0))$. [F2, F3, F4, step 1.1, given, choose]

3.1 Suppose $x(t;x_0)\in K$ for every $0\le t<T_+(x_0)$. If $T_+(x_0)<\infty$, autonomous compact continuation applies with $K\subset U$ and extends the trajectory past this endpoint, contradicting maximality. Hence $T_+(x_0)=\infty$. Compact critical accumulation now applies to $f\in C^1(U)$ and this trajectory in $K$, giving $y\in K$ with $\nabla f(y)=0$ and $f(y)\le f(x_0)<f(z)$. Since $K\subset W$, the common-critical-value hypothesis gives $f(y)=f(z)$, a contradiction. [F5, step 1.1, step 2.1, given]

4.1 Therefore some $t\in[0,T_+(x_0))$ has $x(t;x_0)\notin K$, so $\|x(t;x_0)-z\|_2>r$. The radius $r$ is independent of $\delta$, and step 2.1 gives $\|x_0-z\|_2<\delta$ for every $\delta>0$. This is the negation of stability in the Statement, with tolerance $\varepsilon=r$, and proves both the asserted instability and the stated escape property. [F2, step 2.1, step 3.1] ∎


## Łojasiewicz inequality and analytic point stability

[Open item](item-thm-expander-prereq-analytic-gradient-local-input) · level 3


### Statement

Let $m\ge1$, let $U\subseteq\mathbb R^m$ be open, let $f:U\to\mathbb R$ be real analytic, and let $z\in U$. Some neighborhood of $z$ and constants $c>0$, $0<\rho<1$ satisfy $\|\nabla f(x)\|\ge c|f(x)-f(z)|^\rho$ throughout that neighborhood. For the Euclidean downward gradient system $x'=-\nabla f(x)$, an equilibrium $z$ is Lyapunov stable exactly when it is a local minimum. These are local statements; strict minimality and asymptotic point attraction are separate properties.

Here Lyapunov stability uses maximal solutions in $U$: for every $\varepsilon>0$ with $\overline B(z,\varepsilon)\subseteq U$, there is $0<\delta\le\varepsilon$ such that every maximal solution with $\|x(0)-z\|<\delta$ is defined for all $t\ge0$ and satisfies $\|x(t)-z\|<\varepsilon$ for all $t\ge0$. An equilibrium has $\nabla f(z)=0$. This is the local autonomous ODE notion; on a complete flow it agrees with the usual metric point-stability condition.

### Facts & Assumptions

[F1] Real analyticity and its local holomorphic complexification use [math:def-real-analytic-germ-in-several-variables](https://alphabetamath.cc/item/def-real-analytic-germ-in-several-variables). The Euclidean norm and coordinate gradient use [math:def-euclidean-inner-product](https://alphabetamath.cc/item/def-euclidean-inner-product) and [math:def-jacobian-matrix-and-gradient](https://alphabetamath.cc/item/def-jacobian-matrix-and-gradient). Local minimality, strict minimality and complete-flow point stability use [def-expander-prereq-stability-and-attraction](item-def-expander-prereq-stability-and-attraction).

[F2] The analytic inequality is the imported premise [X1] recorded in External input below.

[F3] [math:cor-holomorphic-functions-in-several-variables-are-smooth](https://alphabetamath.cc/item/cor-holomorphic-functions-in-several-variables-are-smooth) gives continuous real coordinate derivatives of every order for a holomorphic function on an open subset of $\mathbb C^m$. The required $C^2$ convention is [math:def-ck-and-multi-index-notation-in-several-variables](https://alphabetamath.cc/item/def-ck-and-multi-index-notation-in-several-variables).

[F4] The maximal-solution definition of local autonomous ODE stability is [physics:def-cm-equilibrium-and-lyapunov-stability](https://alphabetamath.cc/physics/item/def-cm-equilibrium-and-lyapunov-stability). It is stated explicitly above and includes forward existence for nearby maximal solutions. For complete flows the corresponding metric definition is [def-expander-prereq-stability-and-attraction](item-def-expander-prereq-stability-and-attraction).

[F5] [lem-author-647111dd30d9-minimum-trapping](item-lem-author-647111dd30d9-minimum-trapping) proves local forward existence and stability at a $C^2$ local minimum under a positive-exponent gradient inequality, using the local stability definition in [F4].

[F6] [lem-author-647111dd30d9-nonminimum-escape](item-lem-author-647111dd30d9-nonminimum-escape) applies to a $C^2$ equilibrium when all nearby critical points have its energy value. A nonminimum then has a fixed small escape radius: every initial tolerance admits a nearby initial point and an escape time before its maximal forward endpoint. Its conclusion therefore contradicts even stability measured only over available forward times.

[F7] Real powers use [math:def-real-power](https://alphabetamath.cc/item/def-real-power) and [math:thm-real-power-laws](https://alphabetamath.cc/item/thm-real-power-laws), including $0^\beta=0$ for $\beta>0$; no value for $0^0$ is needed.

[F8] [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws) gives that $\log$ is increasing on $(0,\infty)$ and $\log1=0$; [math:thm-exponential-is-strictly-increasing](https://alphabetamath.cc/item/thm-exponential-is-strictly-increasing) gives that $\exp$ is increasing on $\mathbb R$. Together with the power definition in [F7], these supply the exponent comparison used below.

### External input

[X1] Restricting Absil–Kurdyka, Section 3, Lemma 4, printed/PDF p. 4, to nonzero energy differences gives the following imported premise: for a real analytic scalar function near a Euclidean point $z$, there are a neighborhood $W$ of $z$, $c>0$ and $\rho_0\in[0,1)$ such that $\|\nabla f(x)\|\ge c|f(x)-f(z)|^{\rho_0}$ for every $x\in W$ with $f(x)\ne f(z)$. No assertion at $f(x)=f(z)$ is imported when $\rho_0=0$. This several-variable analytic inequality is imported, not proved here. Its underlying analytic-geometry proofs are outside the actual reading. Theorem 3 and its proof on pp. 4–5 motivate the application; the application below is supplied locally with explicit intermediate lemmas.

### Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Prove the gradient inequality and both local stability implications.

1.1 At each point of $U$, the analytic-germ supplier gives a holomorphic complexification $H$ on a complex polydisc whose restriction to the real slice is $f$. The several-variable smoothness corollary makes $H$ smooth in its real and imaginary coordinates. Holding all imaginary coordinates zero, each ordered first or second real coordinate derivative of $f$ is the restriction of the corresponding derivative of $H$, by the coordinate difference quotient defining that derivative. These derivatives are continuous on the real slice. Thus $f\in C^2(U)$ in the declared convention; no one-variable smoothness result is being substituted for the several-variable assertion. [F1, F3, given]

2.1 By the explicit external input, choose a neighborhood and $c>0$, $0\le\rho_0<1$ for the gradient inequality at points with $f(x)\ne f(z)$. Shrink it so $|f-f(z)|\le1$, and choose $\rho\in(0,1)$ with $\rho\ge\rho_0$. For $a=|f(x)-f(z)|\in(0,1]$, [F8] gives $\log a\le\log1=0$. Hence $(\rho-\rho_0)\log a\le0$, and the power definition in [F7] and exponential monotonicity in [F8] give $a^\rho=\exp(\rho\log a)\le\exp(\rho_0\log a)=a^{\rho_0}$. Thus the same $c$ works at points with $f(x)\ne f(z)$. At $f(x)=f(z)$ the new right side is zero because $\rho>0$. A strictly positive exponent is therefore available, avoiding any $0^0$ convention. [F2, F7, F8, step 1.1, algebra]

3.1 If $z$ is a local minimum, apply the conditional minimum-trapping lemma. Its $C^2(U)$, Euclidean-gradient and positive-exponent hypotheses are exactly those in steps 1.1 and 2.1. For each sufficiently small test ball it gives a smaller initial ball whose maximal solutions exist for all forward time and remain in the test ball. This proves the local stability definition in [F4]; its conclusion also supplies that $z$ is an equilibrium. [F1, F4, F5, step 1.1, step 2.1]

3.2 At every critical point $y$ in the inequality neighborhood, the positive exponent forces $f(y)=f(z)$. If the equilibrium $z$ were not a local minimum, the nonminimum-escape lemma would apply. Choose its fixed escape ball compactly inside $U$, as in that lemma: for every initial tolerance some solution exits that ball before its maximal forward endpoint. This contradicts the local stability condition in [F4], which requires both forward existence and confinement. Hence a stable equilibrium is a local minimum. [F1, F4, F6, F7, step 1.1, step 2.1]

4.1 Consequently the inequality and both stability implications hold in the stated local sense. On a complete flow the maximal solutions already exist for all forward times, and testing balls compactly inside $U$ is equivalent to testing every tolerance by choosing a smaller ball; this recovers the usual point-stability condition. No strictness or point attraction was deduced: for a locally constant function, nearby distinct initial points remain stationary, while choosing the initial radius smaller than the test radius proves stability. The stability proof is the local composition of the two declared stability lemmas with the imported analytic inequality. [F1, F4, F5, F6, step 3.1, step 3.2] ∎


## Local center-stable trapping disc for a time map

[Open item](item-thm-expander-prereq-center-stable-map-input) · level 3


### Statement

Let $h:U\to\mathbb R^m$ be a $C^r$ local diffeomorphism on an open neighbourhood $U$ of a fixed point $p$, where $r\ge1$ is a finite integer. Write $\mathbb R^m=E^s\oplus E^c\oplus E^u$ for the real invariant splitting of $Dh(p)$ into generalized eigenspaces with eigenvalue moduli respectively less than, equal to, and greater than one (conjugate pairs are combined over the reals). There are a $C^r$ embedded disc $W^{sc}$ through $p$ and an open neighbourhood $B_p\subseteq U$ of $p$ such that $T_pW^{sc}=E^s\oplus E^c$, $\dim W^{sc}=\dim(E^s\oplus E^c)$, $h(W^{sc})\cap B_p\subseteq W^{sc}$, and every point whose nonnegative iterates all stay in $B_p$ lies in $W^{sc}$. Images of the local disc are understood only where $h$ is defined. In particular no unstable generalized eigendirection belongs to its tangent space.

### Facts & Assumptions

[F1] Translation to zero preserves the local diffeomorphism and its derivative and generalized eigenspaces [lem-author-4c1c39929ecb-fixed-point-translation](item-lem-author-4c1c39929ecb-fixed-point-translation). The generalized eigenspace convention is [math:def-primary-component-and-generalised-eigenspace](https://alphabetamath.cc/item/def-primary-component-and-generalised-eigenspace).

[F2] Embedded discs and their tangent spaces have the definitions in [lem-author-4c1c39929ecb-translated-tangent-discs](item-lem-author-4c1c39929ecb-translated-tangent-discs), which also proves that translation preserves them. The transport lemma transports local invariance, trapping, dimension and tangency back to $p$ [lem-author-4c1c39929ecb-transport-of-trapping](item-lem-author-4c1c39929ecb-transport-of-trapping).

[F3] Shub's Theorem III.7, printed pp.65–66, center-stable case (2), supplies the tangent center-stable disc and adapted-norm trapping ball at zero for a $C^r$ local diffeomorphism. Its exact contract and reading limits are in External input.

### External input

The only imported existence result is Shub's Theorem III.7, printed pp.65–66 (PDF pp.78–79), case (2): for a $C^r$ local diffeomorphism fixing zero, $1\le r<\infty$, the center-stable embedded disc is tangent to the stable-plus-center generalized eigenspace and traps every forward orbit remaining in its adapted-norm ball. The full theorem statement and both PDF page images were read; the preceding graph-transform machinery was not reconstructed. The local translation and transport arguments apply this imported existence result; they do not prove it.

### Proof

**Given:** The map, finite integer regularity, fixed point and spectral splitting in the Statement.

**Goal:** Obtain the tangent disc and forward-trapping neighbourhood at $p$.

1.1 By [F1], $f(y)=h(p+y)-p$ is a $C^r$ local diffeomorphism on $U-p$ fixing zero with $Df(0)=Dh(p)$. Thus every hypothesis of [F3] holds with exactly the stated generalized spectral subspaces. Apply [F3] to obtain a $C^r$ disc $W$ tangent to $E^s\oplus E^c$ and its adapted-norm ball $B\subseteq U-p$, satisfying local invariance and trapping. If necessary reduce the original domain before applying the local theorem. [given, F1, F3]

2.1 By [F2], $W^{sc}=p+W$ and $B_p=p+B$ have precisely the claimed regularity, dimension, tangency, invariance and trapping. The direct sum splitting implies $(E^s\oplus E^c)\cap E^u=\{0\}$, so no nonzero unstable generalized direction lies in the tangent space. [step 1.1, F1, F2] ∎

### Source notes

Panageas–Piliouras Theorem 8, printed p. 2:7, states dimension, local invariance and trapping but does not explicitly state tangency.

The primary source Shub III.7 supplies tangency under the same finite-dimensional generalized-eigenspace hypotheses, so no inference from dimension alone is used. A smooth time-one map may be used at any fixed finite regularity, in particular $r=1$; this item does not identify an Euler update with a flow map and does not itself prove the time-map derivative identity or measure transfer. No theorem of the article under study, no strict-saddle null-basin conclusion and no consumer is used to establish this input.


## Width scaling of the continuum branch threshold

[Open item](item-prop-author-4f202e976d84-continuum-width-scaling) · level 3


### Statement

Assume the Axiom of Countable Choice. Let $g_0$ be an even unimodal probability density on $\mathbb R$ with respect to Lebesgue measure $\lambda$, smooth near zero, with $g_0(0)>0$ and $g_0''(0)<0$, and let $\sigma>0$. For the scale family $g_\sigma(\omega)=\sigma^{-1}g_0(\omega/\sigma)$, in the stationary mean-field self-consistency calculation with all-to-all sinusoidal coupling $K/n$, the threshold is $K_c(\sigma)=2\sigma/(\pi g_0(0))$. At fixed $K>0$, the local supercritical side $K>K_c(\sigma)$ is equivalently $\sigma<\pi K g_0(0)/2$. The local positive-branch conclusion retains the stationary locked and drifting populations in a rotating frame and applies only sufficiently close to the threshold.

### Statement references

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra](https://alphabetamath.cc/item/def-lebesgue-measure-and-the-lebesgue-sigma-algebra)

[def-expander-prereq-empirical-phase-measures](item-def-expander-prereq-empirical-phase-measures)

[rem-expander-prereq-continuum-branch-background](item-rem-expander-prereq-continuum-branch-background)

### Facts & Assumptions

[F1] For an even unimodal density $g$, smooth near zero with $g(0)>0$ and $g''(0)<0$, the stationary mean-field self-consistency threshold is $2/(\pi g(0))$, and the nondegenerate positive branch is locally on its supercritical side. This is the all-to-all sinusoidal model with coupling $K/n$ and stationary locked and drifting populations in a rotating frame ([rem-expander-prereq-continuum-branch-background](item-rem-expander-prereq-continuum-branch-background)).

[F2] A probability density is nonnegative, measurable and integrates to one with respect to its reference measure; here that measure is Lebesgue measure $\lambda$ on the real line. The cited density definition also specifies evenness and unimodality ([def-expander-prereq-empirical-phase-measures](item-def-expander-prereq-empirical-phase-measures), [math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra](https://alphabetamath.cc/item/def-lebesgue-measure-and-the-lebesgue-sigma-algebra)).

[F3] The real numbers form an ordered field, so multiplication or division of an inequality by a positive real preserves its direction ([math:thm-reals-ordered-field](https://alphabetamath.cc/item/thm-reals-ordered-field)).

[F4] Under countable choice, for a $C^1$ diffeomorphism $T:\mathbb R\to\mathbb R$, any $f\in L^1(\lambda)$ satisfies $\int_{\mathbb R} f(y)\,d\lambda(y)=\int_{\mathbb R} f(T(x))|T'(x)|\,d\lambda(x)$, with an integrable transformed function. This is the one-dimensional case with $U=V=\mathbb R$ ([change of variables for integrable functions](https://alphabetamath.cc/item/cor-c-one-change-of-variables-for-l-one-functions), [math:def-l-one-of-a-measure](https://alphabetamath.cc/item/def-l-one-of-a-measure), [math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra](https://alphabetamath.cc/item/def-lebesgue-measure-and-the-lebesgue-sigma-algebra)).

[F5] Scalar multiplication and composition obey the product and chain rules for differentiation; differentiable functions are continuous ([math:lem-derivative-algebra-and-chain-rules](https://alphabetamath.cc/item/lem-derivative-algebra-and-chain-rules)).

[F6] Countable choice asserts that a sequence of nonempty sets has a choice function. It is assumed here to meet the hypothesis of [F4] ([math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)).

[F7] The class $L^1(\lambda)$ consists of integrable function representatives. For a measurable real-valued $f$, integrability means $\int |f|\,d\lambda<\infty$ ([math:def-l-one-of-a-measure](https://alphabetamath.cc/item/def-l-one-of-a-measure), [math:def-integrable-real-and-complex-functions-and-their-integrals](https://alphabetamath.cc/item/def-integrable-real-and-complex-functions-and-their-integrals)).

### Proof

**Given:** Countable choice, a density $g_0$, and positive $\sigma,K$ as in the statement, in the stationary self-consistency setting of [F1].

**Goal:** Verify the scaled density hypotheses, compute its threshold, and translate the supercritical inequality.

1.1 By [F2], $g_0$ is nonnegative and measurable. Even unimodality gives $g_0(\omega)\leq g_0(0)<\infty$ for every $\omega$, and $\int_{\mathbb R}g_0\,d\lambda=1$. Thus $|g_0|=g_0$ has finite integral, so $g_0\in L^1(\lambda)$ by [F7]. Apply [F4] with $U=V=\mathbb R$, $f=g_0$ and $T(\omega)=\omega/\sigma$. This map is bijective with inverse $u\mapsto\sigma u$; both maps are continuously differentiable by [F5], and $|T'|=1/\sigma$ by positivity of $\sigma$. With countable choice as in [F6], [F4] shows that $g_\sigma$ is integrable and $\int_{\mathbb R}g_\sigma(\omega)\,d\lambda(\omega)=\int_{\mathbb R}g_0(u)\,d\lambda(u)=1$. [F2, F3, F4, F5, F6, F7, given]

2.1 Positive rescaling preserves evenness, nonnegativity and monotonicity on the positive half-line. Explicitly, $g_\sigma(-\omega)=g_\sigma(\omega)$ and $0\leq x\leq y$ implies $g_\sigma(x)\geq g_\sigma(y)$ by [F2] and [F3]. Applying [F5] twice gives $g_\sigma'(\omega)=\sigma^{-2}g_0'(\omega/\sigma)$ and $g_\sigma''(\omega)=\sigma^{-3}g_0''(\omega/\sigma)$ near zero. The same rules preserve smoothness near zero. Thus $g_\sigma(0)=g_0(0)/\sigma>0$ and $g_\sigma''(0)=g_0''(0)/\sigma^3<0$. Together with step 1.1, these verify the density hypotheses of [F1]. [F1, F2, F3, F5, step 1.1, given]

3.1 By [F1] and step 2.1, $K_c(\sigma)=2/(\pi g_\sigma(0))=2\sigma/(\pi g_0(0))$. Since $\pi g_0(0)>0$, [F3] gives $K>K_c(\sigma)$ exactly when $\sigma<\pi K g_0(0)/2$. The local positive-branch conclusion and the stationary-population qualifications are inherited from [F1]. [F1, F3, step 2.1, algebra] ∎


## Point convergence for compact analytic periodic gradient flows

[Open item](item-prop-expander-prereq-analytic-periodic-flow-convergence) · level 4


### Statement

Assume countable choice. Let $V$ be a nonempty finite set, $T_V=\mathbb R^V/(2\pi\mathbb Z)^V$ the finite phase torus with its flat metric, and $U:T_V\to\mathbb R$ a real analytic potential: in every angular chart it is locally represented by a convergent real power series. Let $q:[0,\infty)\to T_V$ be a $C^1$ downward gradient trajectory, meaning $q'(t)=-\operatorname{grad} U(q(t))$ for $t>0$, with the corresponding right derivative at zero. The gradient is the metric dual of $dU$, and a critical point is a point where this gradient vanishes. Then $q$ has finite length on a sufficiently late tail and converges to one critical point. A global rotation direction may be neutral; no isolated-critical-point assumption is made.

For $0\le a\le b<\infty$, write $\ell(a,b)=\int_a^b\|q'(t)\|\,dt$ for the finite-interval Riemannian length in the flat metric. The length of the tail starting at $a$ is $\ell(a,\infty)=\sup_{b\ge a}\ell(a,b)$, with value $+\infty$ allowed.

### Facts & Assumptions

[F1] The phase torus is a compact metric space, its angular charts have Euclidean metric, and its metric distance is bounded by the length of a piecewise $C^1$ curve joining its endpoints ([def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)).

[F2] Near any point $z$ of a finite-dimensional Euclidean analytic potential $f$, there are a neighborhood and constants $c>0$ and $0<\rho<1$ such that $\|\nabla f(x)\|\ge c|f(x)-f(z)|^\rho$. The positive exponent follows from the stated inequality by shrinking the neighborhood and increasing its exponent if necessary ([thm-expander-prereq-analytic-gradient-local-input](item-thm-expander-prereq-analytic-gradient-local-input)).

[F3] Along a downward gradient curve, energy is nonincreasing and its derivative is minus the squared gradient norm. If the energy is bounded below, it has a finite limit and the squared speed has finite integral over the positive half-line ([prop-expander-prereq-gradient-dissipation](item-prop-expander-prereq-gradient-dissipation), [math:def-riemannian-gradient-of-a-smooth-function](https://alphabetamath.cc/item/def-riemannian-gradient-of-a-smooth-function)).

[F4] Every sequence in a compact metric space has a convergent subsequence, and a continuous real function on a compact metric space attains a lower bound ([math:thm-compact-implies-the-other-compactness-forms](https://alphabetamath.cc/item/thm-compact-implies-the-other-compactness-forms), [math:thm-extreme-value-metric](https://alphabetamath.cc/item/thm-extreme-value-metric)).

[F5] Positive real powers have their usual derivatives, the scalar chain rule applies to differentiable compositions, and the fundamental theorem integrates a continuously differentiable function on a compact interval ([math:thm-real-power-continuity-and-derivatives](https://alphabetamath.cc/item/thm-real-power-continuity-and-derivatives), [math:lem-derivative-algebra-and-chain-rules](https://alphabetamath.cc/item/lem-derivative-algebra-and-chain-rules), [math:lem-fundamental-theorem-and-integration-by-parts](https://alphabetamath.cc/item/lem-fundamental-theorem-and-integration-by-parts)).

[F6] Countable choice permits the countable selections used below ([math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)).

[F7] A real analytic germ in $m\ge1$ real variables has an absolutely convergent local power series whose coefficients give a holomorphic complexification on a smaller polydisc. Every holomorphic function on an open subset of $\mathbb C^m$ is smooth in all its real coordinates; restriction to the real slice is therefore smooth ([math:def-real-analytic-germ-in-several-variables](https://alphabetamath.cc/item/def-real-analytic-germ-in-several-variables), [math:cor-holomorphic-functions-in-several-variables-are-smooth](https://alphabetamath.cc/item/cor-holomorphic-functions-in-several-variables-are-smooth)).

[F8] The Riemannian speed of a $C^1$ curve is $\sqrt{g(q',q')}$ and its finite-interval length is the integral of this speed. For the flat metric these are $\|q'\|$ and $\ell(a,b)$ ([math:def-riemannian-speed-and-length](https://alphabetamath.cc/item/def-riemannian-speed-and-length)).

[F9] Real powers use $0^\alpha=0$ for $\alpha>0$ and obey $(x^r)^s=x^{rs}$ for $x>0$. A continuous function on a closed real interval, differentiable in its interior, satisfies the mean value theorem ([math:def-real-power](https://alphabetamath.cc/item/def-real-power), [math:thm-real-power-laws](https://alphabetamath.cc/item/thm-real-power-laws), [math:lem-mean-value-theorem-on-closed-interval](https://alphabetamath.cc/item/lem-mean-value-theorem-on-closed-interval)).

### Proof

**Given:** The torus, analytic potential, and downward gradient trajectory in the Statement.

**Goal:** Prove finite tail length and convergence to a critical point.

1.1 At every point choose an angular chart and put $m=|V|\ge1$. The coordinate potential is a real analytic germ in $m$ variables. By [F7], its absolutely convergent series defines a holomorphic complexification on a smaller complex polydisc. The smoothness supplier applies on that open polydisc. Restricting its successive real coordinate difference quotients to the real slice shows that all real coordinate derivatives of the potential exist and are continuous there. Thus $U$ is smooth. In the flat angular metric its gradient coordinates are the first partial derivatives of $U$, by [F3], so the gradient is smooth as well. Consequently $U$ and its gradient are continuous globally, and the smooth-potential hypothesis of [F3] holds. [given, F1, F3, F7]

1.2 For $\alpha>0$, [F5] gives $(x^\alpha)'=\alpha x^{\alpha-1}>0$ on $(0,\infty)$. Applying the mean value theorem in [F9] on each closed positive interval proves strict monotonicity. Given $\varepsilon>0$, set $\delta=\varepsilon^{1/\alpha}>0$. The iterated-power law gives $\delta^\alpha=\varepsilon$, so $0<x<\delta$ implies $0<x^\alpha<\varepsilon$. Together with $0^\alpha=0$, this proves continuity from the right at zero and $x^\alpha\to0$ as $x\downarrow0$. It applies in particular to $\alpha=1-\rho>0$. [F5, F9, algebra]

2.1 By compactness and [F4], $U$ is bounded below. Put $E(t)=U(q(t))$ and $L=\lim_{t\to\infty}E(t)$. By [F3], $E(t)\ge L$ and $\int_0^\infty\|q'(t)\|^2dt<\infty$. For each positive integer $n$, the integral over $[n,n+1]$ tends to zero as $n\to\infty$; choose $s_n\in[n,n+1]$ with $\|q'(s_n)\|^2$ no larger than that integral. Such a point exists by continuity, since otherwise the integral would exceed itself. [given, F1, F3, F4, F6, step 1.1, choose]

3.1 By sequential compactness, a subsequence of $q(s_n)$ converges to some $p\in T_V$. Since $q'=-\operatorname{grad}U$ and the gradient is continuous, step 2.1 gives $\operatorname{grad}U(p)=0$. Continuity of $U$ and $s_n\to\infty$ give $U(p)=L$. Restricting to this subsequence, write its times as $t_n$. [F1, F3, F4, step 1.1, step 2.1]

4.1 Choose an angular chart centered at $p$ and a closed metric ball of radius $r>0$ around $p$ inside that chart and inside a neighborhood where [F2] applies to the coordinate representation of $U$. Because the chart metric is Euclidean, the Euclidean gradient norm in [F2] equals the flat gradient norm. Thus there are $c>0$ and $0<\rho<1$ such that $\|\operatorname{grad}U(x)\|\ge c|U(x)-L|^\rho$ throughout this ball. [F1, F2, step 3.1, choose]

5.1 Write $e(t)=E(t)-L\ge0$. While $q$ stays in the ball and $e>0$, the chain rule, [F3], [F5], and step 4.1 give $-\frac{d}{dt}e(t)^{1-\rho}\ge c(1-\rho)\|q'(t)\|$. By [F8], integration therefore bounds the length between any two such times $a<b$ by $[e(a)^{1-\rho}-e(b)^{1-\rho}]/[c(1-\rho)]$. If $e$ first reaches zero, monotonicity and $e\ge0$ make it zero thereafter; [F3] then makes the gradient and speed zero thereafter. By step 1.2 the energy-power term tends to zero as the upper endpoint approaches that first zero $T$. Continuity of the speed at $T$ gives a bound $K$ on a small one-sided neighborhood, so $\int_b^T\|q'(t)\|\,dt\le K(T-b)\to0$ as $b\uparrow T$. Taking these limits extends the length bound across that time. If $e(a)=0$ initially, the curve is already stationary and the bound is zero. [F3, F5, F8, step 4.1, step 1.2, algebra]

6.1 Since $q(t_n)\to p$ and $e(t_n)\to0$, choose $n$ so that $d(q(t_n),p)+e(t_n)^{1-\rho}/[c(1-\rho)]<r$. If the curve ever left the ball after $t_n$, continuity would give a first time on its boundary. The distance from $q(t_n)$ to that boundary point is at most the intervening length, which step 5.1 bounds by $e(t_n)^{1-\rho}/[c(1-\rho)]$; the triangle inequality then contradicts its distance $r$ from $p$. Hence the whole tail stays in the ball. Taking the supremum of its finite-interval lengths gives $\ell(t_n,\infty)\le e(t_n)^{1-\rho}/[c(1-\rho)]<\infty$. [F1, F8, step 3.1, step 1.2, step 5.1, choose]

7.1 The estimate in step 5.1 applies to every later pair of times, so $\ell(a,\infty)$ for $a\ge t_n$ is at most $e(a)^{1-\rho}/[c(1-\rho)]$, which tends to zero by step 1.2. For any $t\ge t_n$ and any later subsequence time $t_j\ge t$, the distance $d(q(t),q(t_j))$ is at most this remaining length. Letting $j\to\infty$ and using $q(t_j)\to p$ proves $d(q(t),p)\to0$ as $t\to\infty$. Thus the trajectory converges to the critical point $p$ and has finite tail length. [F1, F8, step 3.1, step 1.2, step 5.1, step 6.1] ∎


## A null basin for all strict saddles of a smooth compact gradient flow

[Open item](item-prop-expander-prereq-strict-saddle-flow-nullity) · level 4


### Statement

Assume countable choice. Let $V$ be a nonempty finite set and let $T_V=\mathbb R^V/(2\pi\mathbb Z)^V$ be the finite flat phase torus. Let $U:T_V\to\mathbb R$ be $C^2$, meaning that its angular-coordinate expressions have continuous partial derivatives through order two. Define its flat gradient in an angular chart by $(\operatorname{grad}U)_v=\partial U/\partial x_v$ for $v\in V$, and its downward gradient equation by $\dot x_v=-\partial U/\partial x_v$. Suppose this equation has a complete flow $\Phi_t$, defined for all real times. A critical point is a point $p$ with $dU_p=0$; its Hessian is the matrix $H_p$ of second partial derivatives in an angular chart. A strict saddle here means a critical point at which $H_p$ has a negative eigenvalue. Then the set of initial points $x$ for which $\Phi_t(x)$ converges as $t\to\infty$ to some strict saddle has normalized phase volume zero. The strict saddles need not be isolated.

### Facts & Assumptions

**Given:** Countable choice and the torus, potential, complete flow and saddle set in the Statement.

[F1] Angular charts have locally translation transitions and Euclidean metric; the torus is compact and metrizable ([def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)). For the $C^2$ potential here, use the coordinate gradient and downward equation defined in the Statement. Flow notation $\Phi_t(x)$ denotes the time-$t$ value of the integral curve through $x$, with the trajectory convention of [def-expander-prereq-gradient-trajectories](item-def-expander-prereq-gradient-trajectories). Phase volume is the completed normalized Lebesgue measure in angular coordinates ([def-expander-prereq-phase-volume](item-def-expander-prereq-phase-volume)).

[F2] A Euclidean $C^1$ vector field has a unique jointly $C^1$ local flow, whose state derivative satisfies the variational equation; its time maps have inverse-time local maps ([math:lem-c1-euclidean-maximal-flow-with-c2-upgrade](https://alphabetamath.cc/item/lem-c1-euclidean-maximal-flow-with-c2-upgrade)). The finite matrix exponential solves $Y'=AY$, $Y(0)=I$ ([math:lem-xd-finite-matrix-exponential-series](https://alphabetamath.cc/item/lem-xd-finite-matrix-exponential-series)).

[F3] At a fixed point of a $C^1$ local diffeomorphism, the center-stable theorem gives an embedded $C^1$ disc tangent to the generalized eigenspaces with eigenvalue modulus at most one, and an open neighbourhood whose points staying there under all nonnegative iterates lie in that disc ([thm-expander-prereq-center-stable-map-input](item-thm-expander-prereq-center-stable-map-input)).

[F4] On a positive-dimensional smooth manifold, a subset is manifold-null when its intersection with every chart domain has an elementary Euclidean-null coordinate image; under countable choice this is independent of the smooth atlas ([math:def-null-subset-of-a-smooth-manifold](https://alphabetamath.cc/item/def-null-subset-of-a-smooth-manifold)). Under countable choice, a second-countable space is Lindelöf; a $C^1$ image of a lower-dimensional smooth manifold is manifold-null; an equidimensional $C^1$ map sends manifold-null sets to manifold-null sets; and countable unions and subsets of such sets are null ([math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice), [math:thm-second-countable-implies-lindelof](https://alphabetamath.cc/item/thm-second-countable-implies-lindelof), [math:prop-the-image-of-a-lower-dimensional-c1-manifold-is-null](https://alphabetamath.cc/item/prop-the-image-of-a-lower-dimensional-c1-manifold-is-null), [math:prop-an-equidimensional-c1-map-sends-null-sets-to-null-sets](https://alphabetamath.cc/item/prop-an-equidimensional-c1-map-sends-null-sets-to-null-sets), [math:prop-countable-unions-and-subsets-of-manifold-null-sets-are-null](https://alphabetamath.cc/item/prop-countable-unions-and-subsets-of-manifold-null-sets-are-null)).

[F5] Since $|V|\ge1$, the positive-dimensional chartwise definition of manifold-nullity applies to the phase torus ([math:def-null-subset-of-a-smooth-manifold](https://alphabetamath.cc/item/def-null-subset-of-a-smooth-manifold)). Elementary Euclidean nullity agrees with Lebesgue nullity, and in an angular chart phase-nullity is equivalent to Lebesgue nullity of the coordinate image ([math:thm-lebesgue-null-agrees-with-elementary-nullity-in-rn](https://alphabetamath.cc/item/thm-lebesgue-null-agrees-with-elementary-nullity-in-rn), [def-expander-prereq-phase-volume](item-def-expander-prereq-phase-volume)).

### Proof

**Given:** The data and assumptions in the Statement.

**Goal:** Prove that the union of the basins of all strict saddles is phase-null.

1.1 On an overlap of angular charts the transition is locally $y=x+a$ for a constant lattice vector $a$. If $u_x$ and $u_y$ are the expressions of $U$, then $u_y(y)=u_x(y-a)$ and $\partial u_y/\partial y_v=\partial u_x/\partial x_v$ at corresponding points. The transition derivative is the identity, so the gradient components in the Statement agree as tangent vectors and define a global $C^1$ field. Their Euclidean inner product with a vector $w$ is $\sum_{v\in V}(\partial U/\partial x_v)w_v=dU(w)$, so this is the flat-metric gradient. Its downward field is $-\nabla U$ in each angular chart. By [F2], uniqueness patches the local flows along each trajectory, and a finite subdivision of any compact time interval gives $C^1$ dependence on the initial point. Completeness and uniqueness give $\Phi_{t+s}=\Phi_t\circ\Phi_s$ and $\Phi_t^{-1}=\Phi_{-t}$, so each time map is a $C^1$ diffeomorphism. At a critical point $p$, the constant trajectory is the unique trajectory through $p$. In an angular chart the variational equation there is $Y'=-H_pY$, $Y(0)=I$; consequently $D\Phi_1(p)=e^{-H_p}$ by [F2]. [given, F1, F2]

2.1 Fix a strict saddle $p$. If $H_pv=\lambda v$ with $\lambda<0$ and $v\ne0$, a real nonzero eigenvector may be chosen because $H_p$ and $\lambda$ are real. The exponential series gives $D\Phi_1(p)v=e^{-\lambda}v$, with $e^{-\lambda}>1$. Apply [F3] to the coordinate representation of $\Phi_1$ at $p$, shrinking its coordinate domain as necessary. Its trapping neighbourhood $B_p$ is open in the torus, and its embedded disc $W_p$ has dimension strictly less than $|V|$, since the unstable generalized eigenspace contains $v$. Thus every point whose nonnegative integer iterates stay in $B_p$ belongs to $W_p$. [F2, F3, step 1.1]

3.1 Let $S$ be the set of strict saddles. The angular boxes with rational endpoints form a countable base for $T_V$, so their intersections with $S$ form a countable base for $S$. The sets $B_p\cap S$, $p\in S$, cover $S$. By [F4], choose a countable subcover $B_{p_j}\cap S$, with its associated discs $W_{p_j}$. If $S$ is empty, the desired basin is empty. Otherwise, for any initial point $x$ converging to $p\in S$, choose $j$ with $p\in B_{p_j}$. Since $B_{p_j}$ is open, there is an integer $N\ge0$ such that $\Phi_{N+k}(x)\in B_{p_j}$ for every integer $k\ge0$. By step 2.1, $\Phi_N(x)\in W_{p_j}$. Therefore the basin is contained in $\bigcup_{j,N\ge0}\Phi_{-N}(W_{p_j})$. [F1, F4, step 2.1, choose]

4.1 Each $W_{p_j}$ is the $C^1$ image of an open subset of Euclidean space of dimension less than $|V|$, so [F4] makes it manifold-null. By step 1.1 and [F4], every $\Phi_{-N}(W_{p_j})$ is manifold-null; countable choice makes their countable union, and every subset of it, manifold-null. Cover the torus by countably many angular charts. Since $|V|\ge1$, the definition in [F4] makes the coordinate image of the basin intersected with each chart domain elementary Euclidean-null. In each chart, [F5] converts this coordinate nullity to a phase-null subset. Their countable union is phase-null by completeness and countable additivity of phase volume. This proves the claim. [F1, F4, F5, step 1.1, step 3.1] ∎
