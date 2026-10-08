---
id: thm-linear-system-map-to-projective-space-is-well-defined
kind: theorem
title: The map defined by a base-point-free linear system
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-complex-projective-space-and-holomorphic-charts
  - def-divisor-principal-and-canonical-divisor-riemann-surface
  - def-line-bundle-associated-to-a-divisor
  - def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface
  - def-local-frame-and-global-frame-of-a-vector-bundle
  - def-smooth-vector-bundle-rank-fibre-and-trivial-bundle
  - thm-vector-bundle-construction-from-a-smooth-cocycle
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: "2026-10-08"
  precheck: pass
sources:
  references:
    - title: Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 12, printed pp. 103–104: Theorem 12.2, the map from a base-point-free linear system to projective space, its basis-coordinate formula, and local interpretation at zeros or poles"
    - title: Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 5 §1, printed pp. 47–51: projective spaces of finite-dimensional vector spaces, basis-induced projective coordinate changes, and the holomorphic map to the dual projective space defined by a linear system without fixed points"
    - title: Karl Otto Forster, Lectures on Riemann Surfaces (GTM 81, Springer 1981), translated by Bruce Gilligan
      url: http://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf
      locator: "§§17.18–17.22, printed pp. 141–145: global generation, projective maps from sections and the projective embedding theorem"
dependency_level: 2
---

## Statement

Let $X$ be a compact Riemann surface, let $D$ be a divisor on $X$, put $E=\mathcal O_X(D)$, and let $V\subseteq H^0(X,E)=L(D)$ be a complex vector subspace of dimension $N+1\ge2$ ([[def-divisor-principal-and-canonical-divisor-riemann-surface]], [[def-line-bundle-associated-to-a-divisor]]). Assume $V$ is **base-point-free**: for every $p\in X$, some $s\in V$ has $s(p)\ne0$ in the fiber $E_p$. Then evaluation $\operatorname{ev}_p:V\to E_p$ is surjective, and its dual embeds the one-dimensional space $E_p^*$ into $V^*$. The resulting line in $V^*$ defines a canonical map
$$\varphi_V:X\longrightarrow\mathbb P(V^*),\qquad p\longmapsto\mathbb P(\operatorname{im}(\operatorname{ev}_p^*)).$$
For any ordered basis $B=(s_0,\ldots,s_N)$ of $V$, its dual basis identifies $\mathbb P(V^*)$ with $\mathbb P^N(\mathbb C)$, and in a local frame $e$ of $E$ with $s_j=f_j e$ the coordinate expression is $\varphi_B(p)=[f_0(p):\cdots:f_N(p)]$. This expression is well defined and holomorphic on all of $X$. If another basis is $s'_k=\sum_j a_{kj}s_j$, then $\varphi_{B'}=\mathbb P(A)\circ\varphi_B$ for $A=(a_{kj})\in GL_{N+1}(\mathbb C)$. Thus the intrinsic map and its image in $\mathbb P(V^*)$ depend only on $V$; the image in a fixed coordinate copy of $\mathbb P^N$ is carried by the induced projective linear transformation and need not be the same subset. The linear system $|V|:=\{(h)+D:0\ne h\in V\subseteq L(D)\}$ also depends only on $V$.

Let $\mathcal O_{\mathbb P(V^*)}(1)$ be the dual of the tautological line bundle (for this convention, points of projective space are lines). Then there is a canonical holomorphic line-bundle isomorphism
$$\Psi:E\xrightarrow{\sim}\varphi_V^*\mathcal O_{\mathbb P(V^*)}(1)$$
that sends each $s_j$ to the pullback of the corresponding homogeneous coordinate section $Z_j$. If $V=H^0(X,E)$, write $\varphi_D$ for this map.

## Facts & Assumptions

**Given:** A compact Riemann surface $X$, a divisor $D$, the holomorphic line bundle $E=\mathcal O_X(D)$, and a finite-dimensional base-point-free subspace $V\subseteq H^0(X,E)$ with an ordered basis when coordinates are used.

[F1] Projective space is the space of complex lines with standard charts $U_i=\{Z_i\ne0\}$ and holomorphic coordinate ratios; a map into it is holomorphic when its chart expressions are holomorphic ([[def-complex-projective-space-and-holomorphic-charts]]).

[F2] A holomorphic line bundle has local holomorphic frames and holomorphic section coefficients; in a local frame a section is a local frame times its coefficient. For $E=\mathcal O_X(D)$, the canonical meromorphic section identifies $H^0(X,E)$ with $L(D)$ by $h\mapsto h s_D$, and the divisor of that holomorphic section is $(h)+D$ ([[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]], [[def-line-bundle-associated-to-a-divisor]], [[def-divisor-principal-and-canonical-divisor-riemann-surface]], [[def-local-frame-and-global-frame-of-a-vector-bundle]]).

[F3] A holomorphic nonvanishing scalar cocycle on a supplied countable cover gives a holomorphic line bundle: its multiplication matrices define a smooth rank-two cocycle, to which the vector-bundle construction applies ([[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]], [[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]], [[thm-vector-bundle-construction-from-a-smooth-cocycle]]).

[F4] The projectivization of a finite-dimensional complex vector space is the space of its one-dimensional subspaces, and an invertible linear transformation induces a holomorphic projective linear transformation ([[def-complex-projective-space-and-holomorphic-charts]]).

## Proof

**Proof technique:** direct local construction.

1.1 On $\mathbb P(V^*)$, let $\gamma$ be the tautological line bundle whose fiber at a line $\ell$ is $\ell$. On the standard chart $U_i=\{Z_i\ne0\}$ it has frame $v_i=(Z_0/Z_i,\ldots,1,\ldots,Z_N/Z_i)$. On $U_i\cap U_k$, $v_k=(Z_i/Z_k)v_i$, so the dual frames $\epsilon_i$ of $\gamma^*$ obey $\epsilon_k=(Z_k/Z_i)\epsilon_i$. These are holomorphic nowhere-zero transitions on the finite standard chart cover; [F3] constructs $\gamma^*$ as a holomorphic line bundle. The coordinate functional $Z_j$ restricted to each tautological line is a global holomorphic section of $\gamma^*$, with coefficient $Z_j/Z_i$ in frame $\epsilon_i$. Set $\mathcal O_{\mathbb P(V^*)}(1):=\gamma^*$; this is the line-bundle convention for projective space parametrizing lines. [F1, F3, construct]

1.2 For each $p$, base-point-freeness makes $\operatorname{ev}_p:V\to E_p$ a nonzero map to a one-dimensional space, hence surjective; its dual is injective and has one-dimensional image in $V^*$. This defines $\varphi_V(p)$. In a local frame $e$ with $s_j=f_j e$, the vector $\operatorname{ev}_p^*(e_p^*)$ has coordinates $(f_0(p),\ldots,f_N(p))$ in the dual basis, so at least one coordinate is nonzero and the projective expression is $[f_0(p):\cdots:f_N(p)]$. Replacing $e$ by $u e$ for a nowhere-zero holomorphic $u$ multiplies every $f_j$ by $u^{-1}$, leaving this projective line unchanged. [F2, given, construct]

1.3 If $s'_k=\sum_j a_{kj}s_j$, then in every local frame $f'_k=\sum_j a_{kj}f_j$, so the coordinate vector changes by $A$ and $\varphi_{B'}=\mathbb P(A)\circ\varphi_B$. The intrinsic map to $\mathbb P(V^*)$ was defined from evaluation and is independent of any basis. Also, by [F2], every nonzero $h\in V\subseteq L(D)$ gives the effective divisor $(h)+D$; this set is defined by the subspace $V$ itself, so $|V|$ is basis-independent. The coordinate image can move: on $X=\mathbb P^1$, $D=2[\infty]$, and $V=\langle1,z,z^2\rangle$, all three polynomials have pole order at most $2$ at infinity and no poles elsewhere, so they lie in $L(D)$ and are linearly independent. At every finite point the section $1\,s_D$ is nonzero, and at infinity $z^2s_D$ is nonzero because $(z^2)+D=2[0]$; hence $V$ is base-point-free. The two bases $(1,z,z^2)$ and $(1,z,z^2+1)$ give images satisfying $XZ=Y^2$ and $XZ-X^2=Y^2$, respectively; $[1:0:0]$ lies in the first image and not the second, while the bases are related by $[X:Y:Z]\mapsto[X:Y:Z+X]$. [F2, F4, algebra]

2.1 The open sets $X_k=\{p:s_k(p)\ne0\}$ cover $X$. On $X_k$ the image lies in $U_k$, and its target chart coordinates are $f_j/f_k$ for $j\ne k$, which are holomorphic because $f_k$ is nowhere zero there. These local expressions are continuous and holomorphic, agree on overlaps by the common-factor calculation in step 1.2, and therefore define the unique canonical holomorphic map. [F1, F2, step 1.2]

3.1 At $p$, the tautological fiber $\gamma_{\varphi_V(p)}$ is $\operatorname{im}(\operatorname{ev}_p^*)$. The canonical evaluation pairing defines $\Psi_p:E_p\to\gamma_{\varphi_V(p)}^*$ by $\Psi_p(v)(\operatorname{ev}_p^*\lambda)=\lambda(v)$ for $\lambda\in E_p^*$. Since $\operatorname{ev}_p$ is surjective, this is a linear isomorphism. On $X_k$, the local formula is $\Psi(e)=f_k^{-1}\varphi_V^*\epsilon_k$. It agrees on different frames and charts because $\epsilon_l=(Z_l/Z_k)\epsilon_k$ and $Z_l/Z_k\circ\varphi_V=f_l/f_k$; hence the fiberwise isomorphisms form a holomorphic bundle isomorphism. Moreover $\Psi(s_j)=f_j f_k^{-1}\varphi_V^*\epsilon_k=\varphi_V^*Z_j$. Thus the pullback identity and the coordinate-section claim hold, with no Choice principle used. [F1, F2, step 1.1, step 1.2, given, algebra] ∎
