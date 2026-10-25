---
id: lem-forgetting-configuration-points-is-locally-trivial
kind: lemma
title: 'Forgetting the last $n$ points is locally trivial with fibre $F_n$ of the punctured manifold'
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-ordered-configuration-space,
       def-topological-manifold-without-boundary,
       def-subspace-topology-top, def-product-topology,
       thm-product-universal-property,
       def-continuous-map-top, def-homeomorphism-and-open-maps,
       thm-componentwise-convergence-and-completeness,
       def-norm-and-normed-space, cor-of-reverse-triangle,
       lem-p-norms-are-norms-and-induce-the-published-metrics,
       thm-banach-fixed-point, def-lipschitz-holder-contraction,
       def-complete-metric-space, def-metric-ball, def-metric-topology,
       def-metric-continuity, def-hausdorff-space, def-topological-space,
       lem-continuity-is-local-and-pastes,
       lem-algebra-of-continuous-real-maps-on-a-space,
       lem-vector-operations-are-continuous-in-a-normed-space,
       thm-heine-borel-rn, thm-compact-subset-of-a-hausdorff-space-is-closed]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Edward Fadell and Lee Neuwirth, Configuration Spaces, section II Theorem 1 and its proof, printed pp. 111-113"
      url: "https://tidsskrift.dk/math/article/download/10517/8538"
    - title: "Najib Idrissi, answer to 'Fadell-Neuwirth fibration', MathOverflow question 500383 (point-moving trivialization)"
      url: "https://mathoverflow.net/questions/500383/fadell-neuwirth-fibration-for-simplicial-variant-of-fulton-macpherson-compactifi"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Let $M$ be a Hausdorff topological $d$-manifold without boundary
([[def-topological-manifold-without-boundary]]) with $d\ge2$, let $m,n\ge1$,
and let
$$\pi:F_{m+n}(M)\longrightarrow F_m(M),\qquad \pi(x_1,\dots,x_{m+n}):=(x_1,\dots,x_m)$$
be the map forgetting the last $n$ points of an ordered configuration
([[def-ordered-configuration-space]]). Let $q=(q_1,\dots,q_m)\in F_m(M)$ be a
base configuration and put $Q:=\{q_1,\dots,q_m\}$, with $M\setminus Q$ carrying
the subspace topology of $M$ and $F_n(M\setminus Q)$ the ordered configuration
space of the punctured manifold ([[def-subspace-topology-top]]).

Then there exist an open neighbourhood $U\subseteq F_m(M)$ of $q$ and a
homeomorphism
$$\Phi:U\times F_n(M\setminus Q)\longrightarrow\pi^{-1}(U),\qquad \pi\circ\Phi=\operatorname{pr}_1,$$
of the product of $U$ with the fibre $F_n(M\setminus Q)$ onto the part of
$F_{m+n}(M)$ lying over $U$. The homeomorphism is of the point-moving form
$\Phi(x,y)=(x_1,\dots,x_m,h_x(y_1),\dots,h_x(y_n))$, where $x\mapsto h_x$ is a
family of homeomorphisms of $M$ with $h_x(q_j)=x_j$ for $1\le j\le m$ and with
$(x,y)\mapsto h_x(y)$ and $(x,y)\mapsto h_x^{-1}(y)$ jointly continuous. In
particular $\pi$ is locally trivial at every base configuration, the fibre
$\pi^{-1}(x)$ over $x\in U$ is homeomorphic to $F_n(M\setminus Q)$, and this
chart has the single fibre $F_n(M\setminus Q)$ over all of $U$.

## Facts & Assumptions

**Given:** A Hausdorff topological $d$-manifold $M$ without boundary with $d\ge2$, integers $m,n\ge1$, the projection $\pi:F_{m+n}(M)\to F_m(M)$, and a base configuration $q=(q_1,\dots,q_m)\in F_m(M)$ with $Q=\{q_1,\dots,q_m\}$.

[F1] Points of $F_k(X)$ are the tuples of pairwise distinct points of $X$, with the subspace topology of $X^k$, and $F_k(X)\subseteq X^k$; a base configuration is such a tuple ([[def-ordered-configuration-space]], [[def-subspace-topology-top]]). For $x\in F_{m+n}(M)$ the first $m$ coordinates form a point of $F_m(M)$, so $\pi$ is well defined.

[L2] Every point $p$ of $M$ has an open neighbourhood $V$ and a homeomorphism $\phi:V\to O$ onto an open subset $O$ of $\mathbb R^d$, and homeomorphisms are continuous bijections with continuous inverses ([[def-topological-manifold-without-boundary]], [[def-homeomorphism-and-open-maps]], [[def-continuous-map-top]]).

[L3] $\mathbb R^d$ with the Euclidean norm $\lVert\cdot\rVert$ is a complete metric space for its metric $d(z,z')=\lVert z-z'\rVert$, the norm satisfies the triangle inequality $\lVert z+z'\rVert\le\lVert z\rVert+\lVert z'\rVert$ and $\lVert\lVert z\rVert-\lVert z'\rVert\rVert\le\lVert z-z'\rVert$, and open balls and the metric topology are as in [[def-metric-ball]] and [[def-metric-topology]] ([[thm-componentwise-convergence-and-completeness]], [[def-norm-and-normed-space]], [[cor-of-reverse-triangle]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]], [[def-complete-metric-space]]).

[L4] A map $f:X\to X$ of a nonempty complete metric space with $d(f(u),f(v))\le c\,d(u,v)$ for all $u,v$ and a constant $c<1$ ([[def-lipschitz-holder-contraction]]) has exactly one fixed point ([[thm-banach-fixed-point]]).

[L5] A composition and a finite product of continuous maps is continuous, balls are open and form a neighbourhood base, the map $\max(0,\cdot)$ is continuous on $\mathbb R$, and continuous formulas agreeing on the overlaps of an open cover paste to a continuous map ([[def-continuous-map-top]], [[lem-algebra-of-continuous-real-maps-on-a-space]], [[lem-continuity-is-local-and-pastes]], [[def-metric-ball]], [[def-metric-topology]]).

[L6] A map $f:Y\times Z\to W$ is continuous exactly when it is continuous in the product topology, a map into a product is continuous exactly when its components are, and the projection $\operatorname{pr}_1$ is continuous ([[def-product-topology]], [[thm-product-universal-property]], [[def-continuous-map-top]]).

[L7] $M$ is Hausdorff, so finitely many distinct points of $M$ have pairwise disjoint open neighbourhoods, and a finite intersection of open sets is open; consequently $M\setminus Q$ is open in $M$ ([[def-hausdorff-space]], [[def-topological-space]]).

[L8] Vector addition and scalar multiplication of $\mathbb R^d$ are continuous, so $(u,z)\mapsto z+cu$ is continuous for fixed scalars and $z\mapsto\lVert z\rVert$ is continuous ([[lem-vector-operations-are-continuous-in-a-normed-space]], [[def-norm-and-normed-space]], [[def-continuous-map-top]]).


[L9] Closed Euclidean balls are compact without any choice principle ([[thm-heine-borel-rn]]). Their images under a continuous map into $M$ are compact: pull back an open cover to the ball, take a finite subcover, and map it forward. A compact subset of the Hausdorff space $M$ is closed ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]).

## Proof

**Proof technique:** direct.

1.1 *Chart data.* By [L2] and [L7] there are charts $\phi_j:V_j\to O_j$ with $q_j\in V_j$, $O_j\subseteq\mathbb R^d$ open, $\phi_j(q_j)=0$, and the $V_j$ pairwise disjoint ([[def-hausdorff-space]]); $m$ choices are made and no infinite selection occurs. Shrinking $V_j$ if necessary to the inverse image of an open ball, we may suppose $\bar B(0,4\rho_j)\subseteq O_j$ for some $\rho_j>0$. Put $S_j:=\phi_j^{-1}(B(0,2\rho_j))\subseteq V_j$ and $W_j:=\phi_j^{-1}(B(0,\rho_j))\subseteq S_j$, and finally $U:=\{x\in F_m(M):x_j\in W_j\text{ for all }j\}$, which is $F_m(M)\cap(W_1\times\cdots\times W_m)$ and hence open in $F_m(M)$ with $q\in U$. [F1, L2, L3, L7]

1.2 *The bump function.* Fix $j$ and put $b(z):=\max\bigl(0,1-\lVert z\rVert/(2\rho_j)\bigr)$ for $z\in\mathbb R^d$. Then $0\le b\le1$, $b(0)=1$, $b(z)=0$ for $\lVert z\rVert\ge2\rho_j$, $b$ is continuous by [L5] and [L8], and $b$ is Lipschitz with constant $1/(2\rho_j)$: for $z,z'\in\mathbb R^d$ one has $|b(z)-b(z')|\le\bigl|\lVert z\rVert-\lVert z'\rVert\bigr|/(2\rho_j)\le\lVert z-z'\rVert/(2\rho_j)$ by [L3]. [L3, L5, L8]

2.1 *The radial mover of the coordinate space.* Fix $j$, let $b$ be as in step 1.2 and let $u\in\mathbb R^d$ with $\lVert u\rVert\le\rho_j$; put $\theta_u(z):=z+b(z)u$. Then: $\theta_u$ is continuous with $\lVert\theta_u(z)-z\rVert\le\lVert u\rVert$ and $\theta_u(z)=z$ whenever $\lVert z\rVert\ge2\rho_j$; $\theta_u$ is injective, since $\lVert\theta_u(z)-\theta_u(z')\rVert\ge\lVert z-z'\rVert-|b(z)-b(z')|\,\lVert u\rVert\ge\bigl(1-\frac{\lVert u\rVert}{2\rho_j}\bigr)\lVert z-z'\rVert\ge\frac12\lVert z-z'\rVert$; and $\theta_u$ is surjective, because for $w\in\mathbb R^d$ the map $T(y):=w-b(y)u$ satisfies $\lVert T(y)-T(y')\rVert\le\frac{\lVert u\rVert}{2\rho_j}\lVert y-y'\rVert\le\frac12\lVert y-y'\rVert$ and $\mathbb R^d$ is complete, so by [L4] it has a fixed point $y=T(y)$, which says exactly $\theta_u(y)=w$. Hence $\theta_u$ is a bijection of $\mathbb R^d$ fixing the complement of $B(0,2\rho_j)$, and $\theta_u(0)=u$. [step 1.2, L3, L4, L5]

3.1 *The inverse family and its Lipschitz estimate.* With the notation of step 2.1, let $y:=\theta_u^{-1}(w)$ and $y':=\theta_{u'}^{-1}(w')$ for $\lVert u\rVert,\lVert u'\rVert\le\rho_j$. Since $y=w-b(y)u$ and $y'=w'-b(y')u'$, the triangle inequality and the Lipschitz bound of step 1.2 give $$\lVert y-y'\rVert\le\lVert w-w'\rVert+\frac{\lVert u\rVert}{2\rho_j}\lVert y-y'\rVert+\lVert u-u'\rVert\le\lVert w-w'\rVert+\tfrac12\lVert y-y'\rVert+\lVert u-u'\rVert,$$ hence $\lVert \theta_u^{-1}(w)-\theta_{u'}^{-1}(w')\rVert\le2\bigl(\lVert u-u'\rVert+\lVert w-w'\rVert\bigr)$. In particular each $\theta_u^{-1}$ is continuous, so $\theta_u$ is a homeomorphism of $\mathbb R^d$ by step 2.1, and $(u,w)\mapsto\theta_u^{-1}(w)$ is continuous on $\{u:\lVert u\rVert\le\rho_j\}\times\mathbb R^d$. Moreover $\theta_u^{-1}(w)=w-b(\theta_u^{-1}(w))u$, so $\lVert\theta_u^{-1}(w)-w\rVert\le\lVert u\rVert\le\rho_j$, and $\theta_u^{-1}(w)=w$ whenever $\lVert w\rVert\ge2\rho_j$; consequently $\theta_u^{-1}$ maps $B(0,3\rho_j)$ into $B(0,4\rho_j)\subseteq O_j$. [step 1.2, step 2.1, L3, L8, algebra]

4.1 *Point-moving homeomorphisms of $M$.* Fix $j$ and $x\in U$, and put $u_j:=\phi_j(x_j)$. Since $\theta_{j,u_j}$ is a bijection fixing the complement of $B(0,2\rho_j)$ pointwise, it carries that ball onto itself; its inverse has the same property. Set $K_j:=\phi_j^{-1}(\bar B(0,2\rho_j))$. By [L9], $K_j$ is compact and closed in $M$, and $K_j\subset V_j$. On the open cover $V_j, M\setminus K_j$ define $h_{j,x}$ by $\phi_j^{-1}\theta_{j,u_j}\phi_j$ on $V_j$ and by the identity on $M\setminus K_j$. The chart formula is defined on all of $V_j$: it preserves the ball and fixes every point of $O_j$ outside it. The two formulas agree on $V_j\setminus K_j$, where $\theta_{j,u_j}$ is the identity, so [L5] gives continuity. Replacing $\theta_{j,u_j}$ by its inverse gives a continuous map $h'_{j,x}$ on the same cover. Both maps preserve $V_j$, their chart formulas are mutually inverse, and outside $V_j$ both are the identity; hence they are inverse homeomorphisms of $M$. Moreover $h_{j,x}(q_j)=x_j$, the map fixes $M\setminus S_j$ pointwise, and it fixes $q_k$ for $k\ne j$. [step 1.1, step 2.1, step 3.1, L2, L5, L9]

5.1 *Joint continuity of the point-moving family.* On $U\times V_j$ the formula $(x,y)\mapsto\phi_j^{-1}(\theta_{j,\phi_j(x_j)}(\phi_j(y)))$ is jointly continuous by the continuity of the chart, coordinate projections, and the vector operations in $\theta_{j,u}(z)=z+b_j(z)u$. On $U\times(M\setminus K_j)$ the formula is $(x,y)\mapsto y$. These open sets cover $U\times M$ and the formulas agree on their overlap by step 4.1. Thus [L5] proves joint continuity of $(x,y)\mapsto h_{j,x}(y)$. The inverse family is jointly continuous by the identical open-cover argument using the estimate of step 3.1. [step 4.1, step 3.1, F1, L2, L5, L6, L8]

6.1 *The family $h_x$ and its inverse.* For $x\in U$ put $h_x:=h_{1,x}\circ h_{2,x}\circ\cdots\circ h_{m,x}$ and $h_x^{-1}:=h'_{m,x}\circ\cdots\circ h'_{2,x}\circ h'_{1,x}$. Each factor is a homeomorphism of $M$ supported in the pairwise disjoint open sets $V_j$, so the factors commute and the two displayed composites are inverse to each other; hence $h_x$ is a homeomorphism of $M$ for every $x\in U$. Moreover $h_x(q_j)=x_j$ for every $j$, because every factor with index $k\neq j$ fixes $q_j\in V_j\subseteq M\setminus V_k$ by step 4.1. By step 5.1 and [L5] the maps $(x,y)\mapsto h_x(y)$ and $(x,y)\mapsto h_x^{-1}(y)$ are continuous on $U\times M$. Since $h_x$ carries the finite set $Q$ bijectively onto $\{x_1,\dots,x_m\}$, it restricts to a bijection $M\setminus Q\to M\setminus\{x_1,\dots,x_m\}$, and hence induces a bijection $F_n(M\setminus Q)\to F_n\bigl(M\setminus\{x_1,\dots,x_m\}\bigr)$ by acting on coordinates. [step 4.1, step 5.1, F1, L5]

7.1 *The trivialization is well defined.* Define $\Phi(x,y):=\bigl(x_1,\dots,x_m,h_x(y_1),\dots,h_x(y_n)\bigr)$ for $x\in U$ and $y\in F_n(M\setminus Q)$. The $m+n$ displayed points are pairwise distinct: the $x_j$ are pairwise distinct and so are the $h_x(y_k)$ by step 6.1, while $h_x(y_k)\neq x_j=h_x(q_j)$ because $y_k\neq q_j$ for $y\in F_n(M\setminus Q)$. Hence $\Phi$ takes values in $F_{m+n}(M)$, and $\pi(\Phi(x,y))=x$ by construction, so $\Phi$ maps $U\times F_n(M\setminus Q)$ into $\pi^{-1}(U)\subseteq F_{m+n}(M)$ and $\pi\circ\Phi=\operatorname{pr}_1$ holds there. [step 6.1, F1]

7.2 *$\Phi$ is continuous.* The first $m$ components of $\Phi$ are the projections of $x$, which are continuous by [L6]; the $k$-th forgotten coordinate is $(x,y)\mapsto h_x(y_k)$, the composite of the continuous map $(x,y)\mapsto(x,y_k)$ with the jointly continuous map $(x,y)\mapsto h_x(y)$ of step 6.1; the domain is the subspace $U\times F_n(M\setminus Q)\subseteq U\times M^n$, and restrictions of continuous maps are continuous. Hence $\Phi$ is continuous as a map into the subspace $F_{m+n}(M)$ of $M^{m+n}$ by [L6]. [step 6.1, F1, L6]

8.1 *The inverse trivialization.* For $(x,z)\in\pi^{-1}(U)$, that is $x\in U$ and $z\in F_n(M\setminus\{x_1,\dots,x_m\})$, put $\Psi(x,z):=\bigl(x,h_x^{-1}(z_1),\dots,h_x^{-1}(z_n)\bigr)$, where the first component is the base point $x$ and the second the $n$-tuple of inverse images. Since $h_x^{-1}$ is injective and $z_k\neq x_j=h_x(q_j)$ for all $k,j$, the points $h_x^{-1}(z_k)$ are pairwise distinct and all outside $Q$, so $\Psi$ takes values in $U\times F_n(M\setminus Q)$; it is continuous by step 6.1 and [L6] exactly as in step 7.2, and $\Psi(\Phi(x,y))=(x,y)$, $\Phi(\Psi(x,z))=(x,z)$ because $h_x^{-1}$ inverts $h_x$. [step 6.1, step 7.1, step 7.2, L6]

9.1 *Conclusion.* By steps 7.1, 7.2 and 8.1 the map $\Phi:U\times F_n(M\setminus Q)\to\pi^{-1}(U)$ is a continuous bijection with continuous inverse, hence a homeomorphism, and $\pi\circ\Phi=\operatorname{pr}_1$; restricting $\Phi$ to $\{x\}\times F_n(M\setminus Q)$ exhibits the fibre $\pi^{-1}(x)$ over any $x\in U$ as homeomorphic to $F_n(M\setminus Q)$. This is precisely a local trivialization of $\pi$ at the base configuration $q$ with fibre $F_n(M\setminus Q)$, and since $q$ was arbitrary the map is locally trivial at every base configuration. The construction used only finitely many choices of charts and radii, so no choice principle is used. [step 7.1, step 7.2, step 8.1, step 6.1, L5] ∎
