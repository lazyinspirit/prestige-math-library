---
id: prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k
kind: proposition
title: Cartan decomposition gives the invariant metric and curvature of G mod K
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-riemannian-symmetric-pair-of-noncompact-type, prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition, prop-isotropy-action-on-g-mod-h-is-induced-by-adjoint-mod-h, def-sectional-curvature, def-riemann-curvature-four-tensor, def-levi-civita-connection, thm-fundamental-theorem-of-riemannian-geometry, def-curvature-of-an-affine-connection, thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group, thm-quotient-manifold-by-a-closed-lie-subgroup, cor-local-normal-form-for-submersions, def-left-maurer-cartan-form, thm-maurer-cartan-structure-equation, thm-the-exterior-derivative-commutes-with-pullback, def-axiom-of-choice, def-killing-form-of-a-finite-dimensional-lie-algebra]
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
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice. Let $(G,K)$ be a Riemannian symmetric pair of noncompact type with
$\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$ and inner product
$B_{\theta_*}$ on $\mathfrak p_0$
([[def-riemannian-symmetric-pair-of-noncompact-type]]). Then:

1. $B_{\theta_*}$ is $\operatorname{Ad}(K)$-invariant on $\mathfrak p_0$. Write $q:G\to G/K$ and $j=dq_e|_{\mathfrak p_0}:\mathfrak p_0\to T_{eK}(G/K)$. Then
   $$\langle V,W\rangle_{gK}=B_{\theta_*}\bigl(j^{-1}dL_{g^{-1}}V,j^{-1}dL_{g^{-1}}W\bigr)$$
   defines a smooth $G$-invariant Riemannian metric on $G/K$. Here $L$ denotes the left action on the quotient, so the formula is well typed and its value at the origin is $B_{\theta_*}$ under $j$;
2. for the Levi-Civita connection of this metric and all
   $X,Y,Z\in\mathfrak p_0$ the curvature at the origin is
   $$R(X,Y)Z=-\lbrack\lbrack X,Y\rbrack,Z\rbrack,$$ so for $B_{\theta_*}$-orthonormal independent $X,Y\in\mathfrak p_0$ the sectional curvature of the two-plane they span is $K(\sigma)=-B_{\theta_*}([X,Y],[X,Y])\le0$, and for arbitrary independent $X,Y$ the same formula holds with the normalising factor $B_{\theta_*}(X,X)B_{\theta_*}(Y,Y)-B_{\theta_*}(X,Y)^2$ in the denominator; by $G$-invariance the curvature
   is nonpositive at every point.

## Facts & Assumptions

**Given:** The pair $(G,K)$, its involution $\Theta$, Cartan decomposition $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$, Killing form $B$, and $B_{\theta_*}(X,Y)=-B(X,\theta_*Y)$.

[A1] AC is assumed ([[def-axiom-of-choice]]), as required by the global Cartan supplier; it also implies the countable choice required by the quotient, isotropy, Maurer–Cartan and sectional-curvature interfaces.

[L1] The form $B_{\theta_*}$ is positive definite; $B$ is positive on $\mathfrak p_0$, negative on $\mathfrak k_0$, with orthogonal summands and bracket inclusions $[\mathfrak k_0,\mathfrak p_0]\subseteq\mathfrak p_0$, $[\mathfrak p_0,\mathfrak p_0]\subseteq\mathfrak k_0$ ([[def-riemannian-symmetric-pair-of-noncompact-type]], [[prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition]]). The Killing form is $B(U,V)=\operatorname{tr}(\operatorname{ad}_U\operatorname{ad}_V)$ ([[def-killing-form-of-a-finite-dimensional-lie-algebra]]).

[L2] $K=G^\Theta$ is closed with Lie algebra $\mathfrak k_0$ ([[thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group]]). The quotient is a smooth manifold, $q$ is a surjective submersion, and left translation is smooth ([[thm-quotient-manifold-by-a-closed-lie-subgroup]]). A submersion has local coordinates $(u,v)\mapsto u$ ([[cor-local-normal-form-for-submersions]]). Under $dq_e$, the isotropy action of $k$ is induced by $\operatorname{Ad}_k$ on $\mathfrak g_0/\mathfrak k_0$ ([[prop-isotropy-action-on-g-mod-h-is-induced-by-adjoint-mod-h]]).

[L3] The left Maurer–Cartan form is $\omega_g=d(L_{g^{-1}})_g$ ([[def-left-maurer-cartan-form]]). It satisfies $d\omega(U,V)+[\omega(U),\omega(V)]=0$ ([[thm-maurer-cartan-structure-equation]]), and exterior differentiation commutes with pullback, component by component for these finite-dimensional vector-valued forms ([[thm-the-exterior-derivative-commutes-with-pullback]]).

[L4] A metric-compatible torsion-free connection is the unique Levi–Civita connection ([[def-levi-civita-connection]], [[thm-fundamental-theorem-of-riemannian-geometry]]). Our curvature convention is $R(U,V)Z=\nabla_U\nabla_VZ-\nabla_V\nabla_UZ-\nabla_{[U,V]}Z$ ([[def-curvature-of-an-affine-connection]]), and $\operatorname{Rm}(U,V,Z,W)=\langle R(U,V)Z,W\rangle$ ([[def-riemann-curvature-four-tensor]]). Sectional curvature uses $\operatorname{Rm}(X,Y,Y,X)$ divided by the positive Gram determinant ([[def-sectional-curvature]]).

## Proof

**Proof technique:** direct.

1.1 For any Lie-algebra automorphism $T$, $\operatorname{ad}_{TU}=T\operatorname{ad}_UT^{-1}$, so trace cyclicity gives $B(TU,TV)=B(U,V)$. Also Jacobi gives $\operatorname{ad}_{[U,V]}=[\operatorname{ad}_U,\operatorname{ad}_V]$; trace cyclicity then gives $B([U,V],W)=B(U,[V,W])$. For $k\in K$, differentiate $\Theta\circ C_k=C_k\circ\Theta$, where $C_k$ is conjugation by $k$, to obtain $\theta_*\operatorname{Ad}_k=\operatorname{Ad}_k\theta_*$. Thus $\operatorname{Ad}_k$ preserves both summands and $B_{\theta_*}$. In particular its restriction to $\mathfrak p_0$ preserves $B=B_{\theta_*}$. [L1, L2, algebra]

2.1 The map $j=dq_e|_{\mathfrak p_0}$ is an isomorphism, since $\ker dq_e=\mathfrak k_0$. For $g'=gk$, the quotient differentials satisfy $dL_{g'^{-1}}=dL_{k^{-1}}dL_{g^{-1}}$ and $j^{-1}dL_{k^{-1}}=\operatorname{Ad}_{k^{-1}}j^{-1}$. Hence the two representatives give the same pairing by step 1.1. Positive definiteness follows from the isomorphisms in the metric formula, and left invariance follows from cancellation of translations. For smoothness, [L2] supplies local smooth sections $s:U\to G$ of $q$: in submersion coordinates fix $v$ at its value at the chosen point. The displayed metric evaluated using $s(x)$ has smooth coefficients, so it is a smooth metric. [L1, L2, step 1.1, algebra]

3.1 On such a section let $\eta=s^*\omega=a+u$, split into its $\mathfrak k_0$-valued part $a$ and $\mathfrak p_0$-valued part $u$. For $V\in T_xU$, the identity $q\circ s=\operatorname{id}$ gives $V=dL_{s(x)}j(u(V))$: the $a(V)$ part is vertical and is killed by $dq$. Thus $u:T U\to U\times\mathfrak p_0$ is a smooth fibrewise isomorphism and $\langle V,W\rangle=B(u(V),u(W))$. Splitting the pulled-back Maurer–Cartan equation using [L1] gives $$du(V,W)+[a(V),u(W)]-[a(W),u(V)]=0,$$ $$da(V,W)+[a(V),a(W)]=-[u(V),u(W)].$$ Here $du(V,W)=V(u(W))-W(u(V))-u([V,W])$, and similarly for $da$. [L1, L2, L3, step 2.1, algebra]

4.1 Define a local connection by $u(\nabla_V Z)=V(u(Z))+[a(V),u(Z)]$. Its linearity in $V$ and Leibniz rule in $Z$ follow directly, so this is an affine connection. It is metric compatible: differentiating $B(u(Z),u(W))$ gives the derivative terms, and the two extra bracket terms sum to zero by the invariant Killing identity of step 1.1. Its torsion, represented by $u$, is $du(V,W)+[a(V),u(W)]-[a(W),u(V)]$, which is zero by step 3.1. Thus [L4] identifies it as Levi–Civita. These local formulas agree on overlaps by uniqueness and define the global connection; no assertion about arbitrary fundamental fields being invariant or about isometry transport being parallel is required. [L4, step 1.1, step 3.1, algebra]

5.1 Put $z=u(Z)$ and $D_Vz=V(z)+[a(V),z]$. Expanding $D_VD_Wz-D_WD_Vz-D_{[V,W]}z$ cancels all derivatives of $z$ and leaves $$u(R(V,W)Z)=[da(V,W)+[a(V),a(W)],z]=-\lbrack\lbrack u(V),u(W)\rbrack,u(Z)\rbrack.$$ The first equality follows from Jacobi for the two nested $a$-brackets; the second is step 3.1. At the origin choose a section with $s(eK)=e$, so $u=j^{-1}$ there. This yields $R(X,Y)Z=-\lbrack\lbrack X,Y\rbrack,Z\rbrack$ for $X,Y,Z\in\mathfrak p_0$, in the stated identification. [L4, step 3.1, step 4.1, algebra]

6.1 Let $C=[X,Y]\in\mathfrak k_0$. The numerator for sectional curvature is $B(-[C,Y],X)=-B(C,[Y,X])=B(C,C)=-B_{\theta_*}(C,C)$. The first equality uses that the metric is $B$ on $\mathfrak p_0$, the second uses Killing invariance, and the last uses $\theta_*C=C$. It is nonpositive by positive definiteness of $B_{\theta_*}$. For independent $X,Y$ division by the positive Gram determinant gives the claimed formula; for an orthonormal pair that determinant is one. An isometry preserves the Levi–Civita connection by uniqueness and hence its curvature, so transitivity extends this conclusion everywhere. If $\dim\mathfrak p_0<2$, there are no two-planes and the sectional assertion is vacuous; the metric and curvature formulas still apply. [L1, L4, step 1.1, step 2.1, step 5.1, algebra, A1] ∎
