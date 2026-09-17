---
id: prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k
kind: proposition
title: Cartan decomposition gives the invariant metric and curvature of G mod K
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-riemannian-symmetric-pair-of-noncompact-type, thm-first-bianchi-identity, thm-algebraic-symmetries-of-the-riemann-tensor, prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition, prop-isotropy-action-on-g-mod-h-is-induced-by-adjoint-mod-h, def-sectional-curvature, def-levi-civita-connection, thm-the-koszul-formula-defines-an-affine-connection, def-curvature-of-an-affine-connection, def-homogeneous-space-of-a-lie-group, thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §3, Theorem 6.31 and the discussion of the symmetric space G/K, printed pp. 361-368"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 43, §§43.1-43.6, printed pp. 217-222"
landmark: false
proof_strategy: direct
---

## Statement

Let $(G,K)$ be a Riemannian symmetric pair of noncompact type with
$\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$ and inner product
$B_{\theta_*}$ on $\mathfrak p_0$
([[def-riemannian-symmetric-pair-of-noncompact-type]]). Then:

1. $B_{\theta_*}$ is $\operatorname{Ad}(K)$-invariant on $\mathfrak p_0$, so
   the formula $\langle V,W\rangle_{gK}:=B_{\theta_*}(\Pi(dL_{g^{-1}}V),
   \Pi(dL_{g^{-1}}W))$, where $\Pi:\mathfrak g_0\to\mathfrak p_0$ is the
   projection along $\mathfrak k_0$, defines a $G$-invariant Riemannian metric
   on $G/K$, whose value at the origin is $B_{\theta_*}$ under the
   identification $T_{eK}(G/K)\cong\mathfrak p_0$;
2. for the Levi-Civita connection of this metric and all
   $X,Y,Z\in\mathfrak p_0$ the curvature at the origin is
   $$R(X,Y)Z=-\lbrack\lbrack X,Y\rbrack,Z\rbrack,$$ so for $B_{\theta_*}$-orthonormal independent $X,Y\in\mathfrak p_0$ the sectional curvature of the two-plane they span is $K(\sigma)=-B_{\theta_*}([X,Y],[X,Y])\le0$, and for arbitrary independent $X,Y$ the same formula holds with the normalising factor $B_{\theta_*}(X,X)B_{\theta_*}(Y,Y)-B_{\theta_*}(X,Y)^2$ in the denominator; by $G$-invariance the curvature
   is nonpositive at every point.

## Facts & Assumptions

**Given:** A Riemannian symmetric pair $(G,K)$ with Lie algebra $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$, Cartan involution $\theta_*$, inner product $B_{\theta_*}(X,Y)=-B(X,\theta_*Y)$ on $\mathfrak g_0$, and the projection $\Pi:\mathfrak g_0\to\mathfrak p_0$ along $\mathfrak k_0$.

[L1] $B_{\theta_*}$ is positive definite, $B$ is negative definite on $\mathfrak k_0$, positive definite on $\mathfrak p_0$, the summands are $B$-orthogonal and $B_{\theta_*}$-orthogonal, and $[\mathfrak k_0,\mathfrak k_0]\subseteq\mathfrak k_0$, $[\mathfrak k_0,\mathfrak p_0]\subseteq\mathfrak p_0$, $[\mathfrak p_0,\mathfrak p_0]\subseteq\mathfrak k_0$ ([[prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition]], [[def-riemannian-symmetric-pair-of-noncompact-type]]).

[L2] $G$ acts smoothly and transitively on $G/K$, $K$ is the isotropy group of the origin $eK$, $T_{eK}(G/K)$ is identified with $\mathfrak g_0/\mathfrak k_0\cong\mathfrak p_0$ by the differential of the quotient map, and the isotropy action at the origin is induced by $\operatorname{Ad}$: for $k\in K$ the differential of $hK\mapsto khK$ at $eK$ corresponds to $\Pi\circ\operatorname{Ad}_k$ ([[def-homogeneous-space-of-a-lie-group]], [[thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group]], [[prop-isotropy-action-on-g-mod-h-is-induced-by-adjoint-mod-h]]).

[L3] A Riemannian metric has a unique Levi-Civita connection, characterized among affine connections by metric compatibility and vanishing torsion, and it is computed by the Koszul formula; the curvature is $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$ ([[def-levi-civita-connection]], [[thm-the-koszul-formula-defines-an-affine-connection]], [[def-curvature-of-an-affine-connection]], [[def-sectional-curvature]]).

## Proof

**Proof technique:** direct.

1.1 For $k\in K$ and $X,Y\in\mathfrak p_0$ one has $\operatorname{Ad}_kX\in\mathfrak p_0$ and $B_{\theta_*}(\operatorname{Ad}_kX,\operatorname{Ad}_kY)=B_{\theta_*}(X,Y)$: $k$ preserves $\theta_*$ and $B$, because $\operatorname{Ad}_k$ commutes with $\theta_*$ and $B(\operatorname{Ad}_kV,\operatorname{Ad}_kW)=B(V,W)$ for an automorphism, so $\theta_*\operatorname{Ad}_kX=\operatorname{Ad}_k\theta_*X=-\operatorname{Ad}_kX$ and $B_{\theta_*}(\operatorname{Ad}_kX,\operatorname{Ad}_kY)=-B(\operatorname{Ad}_kX,\operatorname{Ad}_k\theta_*Y)=B_{\theta_*}(X,Y)$. [L1, L2]

2.1 Consequently the formula of statement 1 is well defined and defines a smooth $G$-invariant Riemannian metric on $G/K$: if $gK=g'K$, say $g'=gk$ with $k\in K$, then $dL_{g'^{-1}}V=dL_{k^{-1}}dL_{g^{-1}}V$, and since $\operatorname{Ad}_k$ preserves $\mathfrak k_0$ and $\mathfrak p_0$ the projection satisfies $\Pi\circ dL_{k^{-1}}=\operatorname{Ad}_k\circ\Pi$ on $\mathfrak g_0$, so the two projected vectors differ by $\operatorname{Ad}_k$ and their $B_{\theta_*}$-pairing is unchanged by step 1.1; positivity and nondegeneracy are inherited from $B_{\theta_*}$, smoothness from the smooth structure of the homogeneous space, and $G$-invariance is built into the formula $dL_{g^{-1}}$. At the origin, $\Pi\circ dL_e$ is the identity on $\mathfrak p_0$, so the metric is $B_{\theta_*}$ there. [L1, L2, step 1.1]

3.1 For $X,Y\in\mathfrak p_0$ the Koszul formula at the origin gives $\nabla_{X^*_0}Y^*_0(0)=0$, where $X^*_0$ denotes the $G$-invariant extension of the value $\Pi(X)\in T_{eK}(G/K)$: the inner products of the invariant fields generated by $X,Y,Z\in\mathfrak p_0$ are constant (they equal $B_{\theta_*}(X,Y)$, $B_{\theta_*}(Y,Z)$, $B_{\theta_*}(X,Z)$), and the three bracket terms vanish because $[X,Y],[Y,Z],[Z,X]\in\mathfrak k_0$ is orthogonal to $\mathfrak p_0$. [L1, L2, L3, step 2.1]

4.1 Along the geodesic $\gamma(t)=\exp(tX)K$ of the metric the differential $d(L_{\exp tX})$ of the isometry group element is the parallel transport: the geodesic symmetries of the symmetric pair, that is the involutions $gK\mapsto g\exp(tX)\,\Theta(\exp(tX))g^{-1}$-conjugates of $\Theta$ at the point $\gamma(t)$, have differential $-1$ at $\gamma(t)$ and satisfy $s_t\circ s_0=d(L_{\exp 2tX})$, so the canonical parallel transport along a geodesic is given by the isometry transport $d(L_{\exp tX})$; this is the standard description of the canonical connection of a symmetric space, and this connection is the Levi-Civita connection of the invariant metric by step 3.1. [L1, L2, step 3.1]

5.1 The second derivative of the Jacobi field $J(t)=d(L_{\exp tX})\Pi\bigl(\tfrac{1-e^{-t\operatorname{ad}_X}}{\operatorname{ad}_X}Y\bigr)$ satisfies the Jacobi equation $J''+R(J,\gamma')\gamma'=0$, and $J(0)=0$, $J'(0)=Y$, by step 4.1. [L3, step 4.1]

6.1 Expanding, $\Pi\bigl(\tfrac{1-e^{-tA}}{A}Y\bigr)=\Pi\bigl(tY-\tfrac{t^2}{2}[X,Y]+\tfrac{t^3}{6}\lbrack X,\lbrack X,Y\rbrack\rbrack+\cdots\bigr)=tY+\tfrac{t^3}{6}\lbrack X,\lbrack X,Y\rbrack\rbrack+\cdots$ because $\Pi(X)=X$, $\Pi(Y)=Y$ and $\Pi([X,Y])=0$; hence $v'''(0)=\lbrack X,\lbrack X,Y\rbrack\rbrack$ for the transported field and, by step 4.1 and the fact that the isometry transport is parallel, $J'''(0)=\lbrack X,\lbrack X,Y\rbrack\rbrack$ at the origin. [L1, step 3.1, step 5.1]

7.1 Differentiating the Jacobi equation once at $t=0$, using that the geodesic velocity field is parallel along $\gamma$ and that $J(0)=J''(0)=0$, gives $R(J'(0),X)X=-J'''(0)$, that is $R(Y,X)X=-\lbrack X,\lbrack X,Y\rbrack\rbrack=\lbrack\lbrack X,Y\rbrack,X\rbrack$ at the origin; since $R$ is antisymmetric in its first two arguments, $R(X,Y)X=-\lbrack\lbrack X,Y\rbrack,X\rbrack$ for all $X,Y\in\mathfrak p_0$; by the first Bianchi identity and the algebraic symmetries of the curvature tensor ([[thm-first-bianchi-identity]], [[thm-algebraic-symmetries-of-the-riemann-tensor]]) the values $R(X,Y)X$ determine the curvature tensor, giving the full identity $R(X,Y)Z=-\lbrack\lbrack X,Y\rbrack,Z\rbrack$ for $X,Y,Z\in\mathfrak p_0$. [L3, step 6.1]

8.1 Therefore for $B_{\theta_*}$-orthonormal independent $X,Y\in\mathfrak p_0$ the sectional curvature of the plane they span is $K(\sigma)=B_{\theta_*}(R(X,Y)Y,X)=-B_{\theta_*}(\lbrack\lbrack X,Y\rbrack,Y\rbrack,X)=-B_{\theta_*}([X,Y],[X,Y])\le0$, the general case differing by the positive normalising factor $B_{\theta_*}(X,X)B_{\theta_*}(Y,Y)-B_{\theta_*}(X,Y)^2$: the last equality is the identity $B_{\theta_*}(\lbrack\lbrack X,Y\rbrack,Y\rbrack,X)=B_{\theta_*}([X,Y],[X,Y])$ for $X,Y\in\mathfrak p_0$, which follows from the $\operatorname{ad}_{\mathfrak k_0}$-invariance of $B_{\theta_*}$ applied to $\xi=[X,Y]\in\mathfrak k_0$ together with the Jacobi identity, and nonpositivity holds because $B_{\theta_*}$ is positive definite on $\mathfrak k_0$. Since the curvature tensor of a $G$-invariant metric is $G$-invariant, this sign holds at every point of $G/K$. [L1, step 7.1, algebra] ∎
