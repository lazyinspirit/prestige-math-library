---
id: def-expander-prereq-phase-torus
kind: definition
title: Finite phase tori, local lifts and the flat metric
domain: mathematics
status: published
origin: pipeline
deps:
  - math:def-quotient-topology
  - math:def-product-topology
  - math:thm-sine-and-cosine-parametrize-the-unit-circle
  - math:thm-sine-cosine-zero-sets-and-fundamental-period
  - math:thm-sine-and-cosine-derivatives
  - math:def-smooth-atlas
  - math:thm-finite-products-of-compact-spaces
  - math:thm-heine-borel-r
  - math:thm-compactness-under-continuous-maps
  - math:lem-integer-part
  - math:thm-cauchy-schwarz-and-the-euclidean-norm
  - math:thm-rational-points-and-boxes-in-rn
  - math:rem-euclidean-topology-dictionary
  - math:def-topological-manifold-without-boundary
  - math:def-smooth-manifold
  - math:thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas
  - math:def-riemannian-metric-and-riemannian-manifold
  - math:def-piecewise-c-one-curve-on-a-manifold
  - math:def-riemannian-speed-and-length
  - math:lem-riemannian-length-is-independent-of-piecewise-c-one-subdivision
  - math:def-riemannian-distance-on-a-connected-manifold
  - math:thm-lebesgue-number-lemma
  - math:cor-piecewise-c1-paths-have-additive-speed-integral-length
  - math:cor-chord-length-is-at-most-arc-length
  - math:thm-path-connected-implies-connected
dependency_roles:
  math:def-quotient-topology: mathematical-premise
  math:def-product-topology: mathematical-premise
  math:thm-sine-and-cosine-parametrize-the-unit-circle: mathematical-premise
  math:thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  math:thm-sine-and-cosine-derivatives: mathematical-premise
  math:def-smooth-atlas: mathematical-premise
  math:thm-finite-products-of-compact-spaces: mathematical-premise
  math:thm-heine-borel-r: mathematical-premise
  math:thm-compactness-under-continuous-maps: mathematical-premise
  math:lem-integer-part: mathematical-premise
  math:thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  math:thm-rational-points-and-boxes-in-rn: mathematical-premise
  math:rem-euclidean-topology-dictionary: mathematical-premise
  math:def-topological-manifold-without-boundary: mathematical-premise
  math:def-smooth-manifold: mathematical-premise
  math:thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas: mathematical-premise
  math:def-riemannian-metric-and-riemannian-manifold: mathematical-premise
  math:def-piecewise-c-one-curve-on-a-manifold: mathematical-premise
  math:def-riemannian-speed-and-length: mathematical-premise
  math:lem-riemannian-length-is-independent-of-piecewise-c-one-subdivision: mathematical-premise
  math:def-riemannian-distance-on-a-connected-manifold: mathematical-premise
  math:thm-lebesgue-number-lemma: mathematical-premise
  math:cor-piecewise-c1-paths-have-additive-speed-integral-length: mathematical-premise
  math:cor-chord-length-is-at-most-arc-length: mathematical-premise
  math:thm-path-connected-implies-connected: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Definition

Let $V$ be a nonempty finite set and let $\Lambda=(2\pi\mathbb Z)^V$. Give $\mathbb R^V$ its finite product topology and define $T_V=\mathbb R^V/\Lambda$, where $u$ and $v$ represent the same point exactly when $u-v\in\Lambda$. Write $q(u)=[u]$ and give $T_V$ the quotient topology. A representative $u$ of $\theta\in T_V$ is a lift of $\theta$; for a map into $T_V$, a local lift is a representative-valued map on a neighborhood whose composition with $q$ is the original map there.

For each open box $B=\prod_{x\in V}I_x$ whose interval factors have length less than $2\pi$, the angular chart has domain $q(B)$ and coordinate map $(q|_B)^{-1}:q(B)\to B$. These charts give $T_V$ a smooth and real analytic structure: smooth means that all transition maps have derivatives of every order, and real analytic means that their coordinate functions locally equal convergent real power series. Identify $T_V$ with $(S^1)^V$ by $[u]\mapsto((\cos u_x,\sin u_x))_{x\in V}$, where $S^1=\{(a,b)\in\mathbb R^2:a^2+b^2=1\}$.

The flat metric is the Euclidean inner product $\langle a,b\rangle=\sum_{x\in V}a_xb_x$ in every angular chart; flat here means that these local metric coefficients are constant and equal to the identity matrix. Its associated distance is defined, for any representatives $u$ of $\theta$ and $v$ of $\phi$, by $d(\theta,\phi)^2=\sum_{x\in V}\min_{k\in\mathbb Z}|u_x-v_x+2\pi k|^2$.

## Facts & Assumptions

**Given:** A nonempty finite set $V$, the lattice $\Lambda=(2\pi\mathbb Z)^V$, and the quotient, angular charts and metric formula in the Definition.

[F1] The quotient topology is characterized by openness of preimages; finite product-open boxes form a basis. ([[math:def-quotient-topology]], [[math:def-product-topology]]).

[F2] For $n\ge1$, rational open boxes form a countable basis for $\mathbb R^n$; its product topology agrees with its Euclidean metric topology. ([[math:thm-rational-points-and-boxes-in-rn]], [[math:rem-euclidean-topology-dictionary]]).

[F3] Every real number has an integer part; $t\mapsto(\cos t,\sin t)$ is bijective from $[0,2\pi)$ onto $S^1$, and sine and cosine are $2\pi$-periodic and differentiable, hence continuous. ([[math:lem-integer-part]], [[math:thm-sine-and-cosine-parametrize-the-unit-circle]], [[math:thm-sine-cosine-zero-sets-and-fundamental-period]], [[math:thm-sine-and-cosine-derivatives]]).

[F4] Closed bounded real intervals and finite products of compact spaces are compact; continuous images of compact spaces are compact, and a continuous bijection from a compact space to a Hausdorff space is a homeomorphism. ([[math:thm-heine-borel-r]], [[math:thm-finite-products-of-compact-spaces]], [[math:thm-compactness-under-continuous-maps]]).

[F5] The Euclidean norm is positive definite and satisfies the triangle inequality. ([[math:thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F6] A topological manifold is Hausdorff, second countable and locally Euclidean. A covering family of smoothly compatible charts is a smooth atlas; it generates a unique maximal smooth atlas, which specifies the smooth manifold. ([[math:def-topological-manifold-without-boundary]], [[math:def-smooth-atlas]], [[math:def-smooth-manifold]], [[math:thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas]]).

[F7] A Riemannian metric on a Hausdorff second-countable smooth manifold is a smooth symmetric covariant two-tensor that is positive definite at every point. ([[math:def-riemannian-metric-and-riemannian-manifold]]).

[F8] A piecewise $C^1$ curve is continuous on a compact parameter interval and has a finite subdivision on whose pieces its coordinate derivative extends continuously to the endpoints. Its length is the sum of the integrals of $\sqrt{g(\dot\gamma,\dot\gamma)}$, independent of finite subdivision; on a connected Riemannian manifold, the distance is the infimum of these lengths over curves joining the endpoints. ([[math:def-piecewise-c-one-curve-on-a-manifold]], [[math:def-riemannian-speed-and-length]], [[math:lem-riemannian-length-is-independent-of-piecewise-c-one-subdivision]], [[math:def-riemannian-distance-on-a-connected-manifold]]).

[F9] Every open cover of a compact metric space has a positive Lebesgue number: every nonempty subset of smaller diameter lies in one member of the cover. ([[math:thm-lebesgue-number-lemma]]).

[F10] A continuous piecewise $C^1$ Euclidean path, with derivatives extending continuously on each closed piece, has length equal to the sum of its speed integrals. Its endpoint displacement has norm at most that length; corners and constant pieces are allowed. ([[math:cor-piecewise-c1-paths-have-additive-speed-integral-length]], [[math:cor-chord-length-is-at-most-arc-length]]).

[F11] A space in which every pair of points is joined by a continuous path is connected. ([[math:thm-path-connected-implies-connected]]).

## Justification

**Proof technique:** direct, constructing the manifold and metric and comparing lifted curve lengths.

1.1 By the quotient topology, $q$ is continuous, and $q^{-1}(q(U))=\bigcup_{\lambda\in\Lambda}(U+\lambda)$ is open whenever $U\subseteq\mathbb R^V$ is open, so $q$ is open. On a box $B$ whose side lengths are less than $2\pi$, two points differing by a lattice vector must be equal. Thus $q|_B$ is a continuous open bijection onto $q(B)$, hence a homeomorphism, and these chart domains cover $T_V$. Put $n=|V|\ge1$ and order $V$ to identify $\mathbb R^V$ with $\mathbb R^n$. The images under $q$ of rational open boxes form a countable open basis: if $\theta\in O$ with $O$ quotient-open, take any representative $u$ of $\theta$ and a rational box $C$ with $u\in C\subseteq q^{-1}(O)$; then $\theta\in q(C)\subseteq O$. This proves second countability. [F1, F2, F6]

2.1 The integer-part lemma applied to $t/(2\pi)$ gives the unique representative in $[0,2\pi)$ of each coordinate modulo $2\pi$. Circle parametrization and periodicity therefore give the stated bijection $T_V\to(S^1)^V$. Its composite with $q$ is continuous coordinatewise; the quotient topology then makes the bijection continuous. Since $[0,2\pi]^V$ is compact and maps onto $T_V$ under $q$, the latter is compact. The target is Hausdorff: distinct vectors in its Euclidean realization in $\mathbb R^{2n}$ have disjoint relative open balls with radii one third of their distance. The compact-to-Hausdorff theorem makes the bijection a homeomorphism, so $T_V$ is Hausdorff as well. Together with step 1.1, this verifies all topological manifold hypotheses. [F1, F2, F3, F4, F5, F6, step 1.1]

2.2 Reducing a real $t$ modulo $2\pi$ to $r\in[0,2\pi)$ shows that $\min_{k\in\mathbb Z}|t+2\pi k|=\min\{r,2\pi-r\}$. Hence all coordinate minima are attained and finite coordinatewise minimization yields $d([u],[v])=\min_{\lambda\in\Lambda}\|u-v+\lambda\|_2$. Changing representatives only reindexes these shifts. Nonnegativity and symmetry follow from the norm, and zero occurs exactly for equal classes. For three classes, the sum of minimizing shifts for two successive pairs is an admissible shift for the endpoint pair; the Euclidean triangle inequality gives the triangle inequality for $d$. If $|u_x-v_x|<\pi$ for every $x$, zero is a minimizing shift in every coordinate and $d([u],[v])=\|u-v\|_2$. More precisely, for $0<r<\pi$ the $d$-ball about $[v]$ of radius $r$ is exactly $q(\{u:\|u-v\|_2<r\})$: a minimizing representative proves the reverse inclusion. These balls are quotient-open since $q$ is open, and every quotient-open neighborhood of $[v]$ contains one by applying openness to its preimage at $v$. Therefore $d$ induces the quotient topology and agrees locally with the Euclidean metric in angular coordinates. [F1, F2, F3, F5, step 1.1]

3.1 On the overlap of two chart domains, the two inverse branches are continuous and their difference takes values in $\Lambda$. Near any given point their difference stays within Euclidean distance $\pi$ of its value there, and distinct lattice vectors are at least $2\pi$ apart; hence the difference is locally constant. Every transition is consequently locally a translation. These transitions are smooth and locally given by polynomial, hence convergent real power series, coordinate functions. The angular atlas therefore generates the smooth structure, and is also a real analytic atlas in the sense specified in the Definition. Its transition derivatives are identity matrices. Thus the identity coefficient matrices define a consistent smooth symmetric positive definite two-tensor: a chart velocity $a$ has squared norm $\sum_x a_x^2$, unchanged on overlaps. This is the asserted flat Riemannian metric. [F5, F6, F7, step 1.1, step 2.1]

4.1 A projected straight segment $t\mapsto q((1-t)u+tv)$, $0\le t\le1$, joins any two classes and is smooth in local angular coordinates. Thus $T_V$ is path connected and hence connected. For clarity, path length here uses continuous piecewise $C^1$ curves $\gamma:[a,b]\to T_V$, with endpoint derivatives interpreted one-sided on each closed piece. Write $L_g(\gamma)=\sum_j\int_{t_{j-1}}^{t_j}\sqrt{g_{\gamma(t)}(\dot\gamma(t),\dot\gamma(t))}\,dt$; refining the finite partition does not change this sum. The associated path distance is $d_g(\theta,\phi)=\inf_{\gamma:\theta\to\phi}L_g(\gamma)$. The connected Riemannian manifold hypotheses now hold, and the projected segments explicitly make every such family nonempty with a finite length. Constant curves are permitted, including when the endpoints agree. [F8, F11, step 1.1, step 3.1]

4.2 Here is the required lift construction, without assuming a covering-map theorem. For a continuous piecewise $C^1$ curve on $[a,b]$ with $a<b$, the sets $\gamma^{-1}(q(B))$ form an open cover of that compact metric interval. A Lebesgue number supplies a finite partition of mesh smaller than it; refine this partition by the finitely many original $C^1$ breakpoints. Each resulting closed subinterval maps into a single angular chart. Compose with that chart's inverse to obtain a lift on the subinterval. Translate the first lift by a lattice vector to have any prescribed starting representative. Successively translate each next lift by the unique lattice vector making its initial value equal to the preceding final value; such a vector exists since both values project to the same point. The finitely many translated lifts concatenate continuously into $\widetilde\gamma:[a,b]\to\mathbb R^V$ with $q\circ\widetilde\gamma=\gamma$. Local transitions are translations, so each lift piece is $C^1$ with its derivative extending continuously to the endpoints. A singleton parameter interval has its constant lift. [F4, F8, F9, step 1.1, step 3.1]

5.1 On the chart subdivision just constructed, the identity metric coefficients give $L_g(\gamma)=\sum_j\int_{t_{j-1}}^{t_j}\|\widetilde\gamma'(t)\|_2\,dt$. The Euclidean piecewise $C^1$ length formula identifies this sum with $L(\widetilde\gamma)$, which is at least $\|\widetilde\gamma(b)-\widetilde\gamma(a)\|_2$ by the endpoint chord bound. If $\gamma$ joins $[u]$ to $[v]$ and its lift starts at $u$, its final value is $v+\lambda$ for some $\lambda\in\Lambda$. Consequently $L_g(\gamma)\ge\|v-u+\lambda\|_2\ge d([u],[v])$. This also holds for a singleton interval, when the endpoints agree. [F5, F8, F10, step 3.1, step 2.2, step 4.2]

6.1 Choose a lattice shift $\lambda$ attaining $\min_{\lambda\in\Lambda}\|v-u+\lambda\|_2$ and project the segment $t\mapsto u+t(v-u+\lambda)$, $0\le t\le1$. Its constant lifted velocity has norm $\|v-u+\lambda\|_2$, so its Riemannian length is this same number, namely $d([u],[v])$. Every joining curve has length at least that number by step 5.1, and this segment attains it. Thus $d_g=d$, proving that the displayed distance is exactly the path distance of the flat metric, as asserted. [F8, F10, step 3.1, step 2.2, step 4.1, step 5.1] ∎
