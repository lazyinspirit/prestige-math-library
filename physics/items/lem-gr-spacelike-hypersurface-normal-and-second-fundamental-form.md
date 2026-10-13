---
id: lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form
kind: lemma
title: "The future unit normal, induced metric and second fundamental form of a spacelike hypersurface"
status: draft
origin: session
domain: mathematics
dependency_level: 9
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-spacelike-initial-data-and-constraints, def-gr-smooth-lorentzian-objects, def-embedded-submanifold-and-slice-chart, def-lorentz-orthogonality-and-orthogonal-complement, lem-gr-observer-projection-decomposition, def-gr-observer-and-rest-space, lem-lorentz-form-has-orthonormal-basis, def-causal-classification-of-lorentz-vectors, def-gr-metric-selected-connection, def-affine-connection-on-a-smooth-manifold, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-inverse-metric-and-musical-isomorphisms, lem-gr-inverse-metric-is-smooth, def-covariant-derivative-along-a-curve, def-gr-smooth-covariant-two-tensor-field, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, def-smooth-vector-field-as-a-tangent-bundle-section, def-smooth-manifold]
dependency_roles:
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-spacelike-initial-data-and-constraints: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-embedded-submanifold-and-slice-chart: mathematical-premise
  def-lorentz-orthogonality-and-orthogonal-complement: mathematical-premise
  lem-gr-observer-projection-decomposition: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  lem-lorentz-form-has-orthonormal-basis: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  def-affine-connection-on-a-smooth-manifold: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  lem-gr-inverse-metric-is-smooth: mathematical-premise
  def-covariant-derivative-along-a-curve: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  def-smooth-manifold: mathematical-premise
sources:
  references:
    - title: "E. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035 (2007): the induced metric gamma, the unit normal n with n.n = -1 and the extrinsic curvature tensor K = -gamma*nabla n, with the sphere and plane examples, sections 2.3-2.4 printed pp. 19-34"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision): the unit normal, the induced metric h_{ab} = g_{ab} minus-plus n_a n_b and the extrinsic curvature K_{ab}, its independence of the extension of n and the projection formula (10.2), section 10.2 printed p. 119 (PDF p. 120)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: spacelike hypersurfaces, their unit normals and the Weingarten map, section 6.2 printed pp. 161-163"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]]) and let $\Sigma\subseteq M$ be a
spacelike embedded hypersurface in the sense of
[[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] clause (a), so that
$\Sigma$ is an embedded three-dimensional submanifold
([[def-embedded-submanifold-and-slice-chart]]) and the restriction of $g_p$
to $T_p\Sigma$ is positive definite for every $p\in\Sigma$
([[def-causal-classification-of-lorentz-vectors]]). In the notation of
[[def-gr-spacelike-initial-data-and-constraints]] clause (a), whose claims
this lemma establishes:

**(a) The future unit normal.** For every $p\in\Sigma$ the orthogonal
complement $T_p\Sigma^{\perp}$ is one-dimensional, nondegenerate for $g_p$,
and negative definite: every nonzero $u\in T_p\Sigma^{\perp}$ is timelike,
$g_p(u,u)<0$. Hence there is exactly one $n_p\in T_p\Sigma^{\perp}$ with
$g_p(n_p,n_p)=-1$ and $g_p(n_p,N_p)<0$.

**(b) Smoothness along the hypersurface.** The assignment $p\mapsto n_p$ is
smooth along $\Sigma$: for every $p\in\Sigma$ there are an open neighborhood
$O$ of $p$ in $M$ and a smooth vector field $\tilde n$ on $O$
([[def-smooth-vector-field-as-a-tangent-bundle-section]]) with
$\tilde n|_{\Sigma\cap O}=n|_{\Sigma\cap O}$, and for any two such local
extensions the covariant derivative at a point of $\Sigma$ in a direction
tangent to $\Sigma$ agrees. Thus for $V\in T_p\Sigma$ the vector
$\nabla_Vn\in T_pM$ is well defined as $\nabla_{\tilde X}\tilde n|_p$ for any
smooth extensions $\tilde n$ of $n$ and $\tilde X$ of a tangent field with
$\tilde X_p=V$ ([[def-covariant-derivative-along-a-curve]],
[[def-gr-metric-selected-connection]]).

**(c) The induced metric and second fundamental form.** The **induced
metric** $h_p(V,W):=g_p(V,W)$ is a smooth Riemannian metric on $\Sigma$, and
$$K_p(V,W):=g_p(\nabla_Vn,W)\qquad(V,W\in T_p\Sigma)$$
(the **second fundamental form**) defines a smooth symmetric covariant
$2$-tensor field $K$ on $\Sigma$
([[def-gr-smooth-covariant-two-tensor-field]]) with
$$K_p(V,W)=-g_p(\nabla_VW,n_p),$$
where $\nabla_VW$ is the ambient covariant derivative at $p$ of any smooth
extension of a tangent field with value $W$ at $p$, in the direction of any
extension with value $V$ at $p$.

**(d) The shape operator.** The endomorphism $S_p:T_p\Sigma\to T_p\Sigma$
defined by $h_p(S_pV,W)=K_p(V,W)$ for all $W\in T_p\Sigma$ is well defined,
linear and self-adjoint for the positive definite form $h_p$, and the
Weingarten relation $\nabla_Vn=S_pV$ holds for every $V\in T_p\Sigma$.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$ with metric-selected connection $\nabla$ and a spacelike embedded hypersurface $\Sigma\subseteq M$.

[L1] For each $p\in\Sigma$ there is a slice chart $(U,y)$ around $p$ with $\Sigma\cap U=\{y^4=0\}$, and $(y^1,y^2,y^3)|_{\Sigma\cap U}$ are coordinates of $\Sigma$; the restriction of $g_p$ to $T_p\Sigma$ is positive definite ([[def-embedded-submanifold-and-slice-chart]], [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] clause (a)).

[L2] For a smooth function $f$ on an open set $U$ and the metric-selected connection, there is a unique smooth vector field $\xi=\sharp\,df$ on $U$ with $g(\xi,X)=df(X)$ for every smooth field $X$; in components $\xi^a=\sum_bg^{ab}\partial_bf$, so $\xi$ is smooth whenever $f$ and $g$ are, by smoothness of the inverse metric components ([[def-gr-inverse-metric-and-musical-isomorphisms]], [[lem-gr-inverse-metric-is-smooth]], [[def-gr-smooth-lorentzian-objects]]).

[L3] For an observer $n$ at $p$ (so $g_p(n,n)=-1$) the rest space $n^{\perp}=\{v:g_p(v,n)=0\}$ has dimension three and the restriction of $g_p$ to it is positive definite ([[lem-gr-observer-projection-decomposition]], [[def-gr-observer-and-rest-space]]). Consequently, if $u$ is a nonzero timelike vector at $p$ and $v\perp u$ is also timelike, then applying this to the observer $\pm u/\sqrt{-g_p(u,u)}$ ([[def-causal-classification-of-lorentz-vectors]]) exhibits a nonzero timelike vector in a positive definite space, a contradiction; hence $g_p(u,v)\neq0$ for two timelike vectors $u,v$, and $u^{\perp}$ is positive definite.

[L4] $\nabla_XY|_p$ depends only on $X_p$ and on the values of $Y$ along any smooth curve through $p$ with velocity $X_p$; in particular two smooth fields that agree along such a curve have the same covariant derivative in the direction $X_p$ ([[def-covariant-derivative-along-a-curve]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

[L5] $\nabla$ is torsion-free and metric-compatible: $\nabla_XY-\nabla_YX=[X,Y]$ and $X(g(Y,Z))=g(\nabla_XY,Z)+g(Y,\nabla_XZ)$ for smooth fields ([[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

[L6] If smooth fields $X,Y$ on $M$ are tangent to $\Sigma$ along $\Sigma$, then the bracket $[X,Y]$ is tangent to $\Sigma$ along $\Sigma$: in a slice chart of [L1], write $X=X^i\partial_i+X^4\partial_4$, $Y=Y^i\partial_i+Y^4\partial_4$ with $X^4|_{\Sigma\cap U}=Y^4|_{\Sigma\cap U}=0$; then the fourth component of $[X,Y]$ is $X(Y^4)-Y(X^4)$, and at $q\in\Sigma\cap U$ this is $dY^4(X_q)-dX^4(Y_q)=0$ because $X_q,Y_q\in T_q\Sigma$ and $dY^4,dX^4$ annihilate $T_q\Sigma$ ([[def-embedded-submanifold-and-slice-chart]]).

## Proof

**Proof technique:** direct.

1.1 (A smooth nonzero normal field on a slice chart.) Fix $p\in\Sigma$ and a slice chart $(U,y)$ as in [L1], and put $f:=y^4$, so that $\Sigma\cap U=\{f=0\}$ and $df_q\neq0$ for $q\in\Sigma\cap U$; let $\xi:=\sharp\,df$ on $U$ be the metric dual field of [L2]. Then $\xi$ is smooth on $U$ and nonzero there, and for $q\in\Sigma\cap U$ and $X\in T_q\Sigma$ one has $g_q(\xi_q,X)=df_q(X)=0$ because $X$ is tangent to the level set $\{f=0\}$; hence $\xi_q\in T_q\Sigma^{\perp}\setminus\{0\}$. [given, L1, L2]

2.1 (The normal line is one-dimensional and negative definite.) Let $q\in\Sigma$. If $v\in T_q\Sigma\cap T_q\Sigma^{\perp}$, then $g_q(v,v)=0$ because $v$ is orthogonal to itself, while positive definiteness of $g_q|_{T_q\Sigma}$ forces $v=0$; hence $T_q\Sigma\cap T_q\Sigma^{\perp}=\{0\}$. Therefore the quotient map $T_qM\to T_qM/T_q\Sigma$ restricts injectively on $T_q\Sigma^{\perp}$, so $\dim T_q\Sigma^{\perp}\le\dim(T_qM/T_q\Sigma)=1$, and $\xi_q\neq0$ from step 1.1 shows that the dimension is exactly one and that $\dim(T_q\Sigma+T_q\Sigma^{\perp})=4$, that is $T_qM=T_q\Sigma\oplus T_q\Sigma^{\perp}$. If $u\in T_q\Sigma^{\perp}$ is nonzero and $g_q(u,u)\ge0$, then on the direct sum $T_q\Sigma\oplus\mathbb Ru=T_qM$ the form $g_q$ is a block sum of a positive definite form and the form $g_q(u,u)\ge0$ on the line $\mathbb Ru$, hence positive semidefinite with the only possible zero values on $\mathbb Ru$; this contradicts the existence of the timelike time-orientation vector $N_q$ with $g_q(N_q,N_q)<0$ ([[def-gr-smooth-lorentzian-objects]]). Hence $g_q(u,u)<0$ for every nonzero $u\in T_q\Sigma^{\perp}$: the normal line is negative definite, and in particular nondegenerate. [step 1.1, given, L1, L3]

3.1 (Existence and uniqueness of the future unit normal.) Let $q\in\Sigma$. The vector $\xi_q$ is nonzero and, by step 2.1, timelike; so is $N_q$. By [L3] two timelike vectors at $q$ are never orthogonal, so $g_q(\xi_q,N_q)\neq0$, and $$n_q:=-\frac{\operatorname{sign}\bigl(g_q(\xi_q,N_q)\bigr)}{\sqrt{-g_q(\xi_q,\xi_q)}}\,\xi_q$$ is a well-defined element of $T_q\Sigma^{\perp}$ with $g_q(n_q,n_q)=-1$ and $g_q(n_q,N_q)=-|g_q(\xi_q,N_q)|/\sqrt{-g_q(\xi_q,\xi_q)}<0$. If $m\in T_q\Sigma^{\perp}$ satisfies $g_q(m,m)=-1$ and $g_q(m,N_q)<0$, then $m=t\xi_q$ for some $t\in\mathbb R$ because the line is spanned by $\xi_q$; $g_q(m,m)=t^2g_q(\xi_q,\xi_q)=-1$ gives $t=\pm1/\sqrt{-g_q(\xi_q,\xi_q)}$, and the sign of $g_q(m,N_q)=t\,g_q(\xi_q,N_q)$ is the product of the signs of $t$ and $g_q(\xi_q,N_q)$; the condition $g_q(m,N_q)<0$ therefore selects exactly $t=-\operatorname{sign}(g_q(\xi_q,N_q))/\sqrt{-g_q(\xi_q,\xi_q)}$, that is $m=n_q$. This proves (a). [step 2.1, given, L2, L3]

4.1 (Smoothness of the normal along $\Sigma$.) On the slice chart $(U,y)$ of step 1.1, the functions $q\mapsto g_q(\xi_q,\xi_q)$ and $q\mapsto g_q(\xi_q,N_q)$ are smooth on $U$; on $\Sigma\cap U$ the first is negative and the second nonzero by steps 2.1 and 3.1. Shrinking $U$ to a smaller connected neighborhood of a given point of $\Sigma$, we may suppose $g(\xi,\xi)<0$ on all of $U$ and, on the connected set $\Sigma\cap U$, $\operatorname{sign}(g(\xi,N))$ constant; then the formula of step 3.1 defines a smooth ambient field $\tilde n:=-\operatorname{sign}(g(\xi,N))\xi/\sqrt{-g(\xi,\xi)}$ on $U$ whose restriction to $\Sigma\cap U$ is $n$. Such local extensions cover $\Sigma$ and agree on overlaps because all restrict to $n$ on $\Sigma$. Independence of the extensions: let $\tilde n_1,\tilde n_2$ be local extensions of $n$ near $p$ and let $\tilde X$ be a smooth extension of a tangent field with $\tilde X_p=V$; choose a smooth curve $\gamma$ in $\Sigma$ with $\gamma(0)=p$ and $\gamma'(0)=V$. Then $\tilde n_1\circ\gamma=\tilde n_2\circ\gamma$ as curves in $TM$, so by [L4] $\nabla_{\tilde X}\tilde n_1|_p=\nabla_{\tilde X}\tilde n_2|_p$. For a fixed extension $\tilde n$, the map $X\mapsto\nabla_X\tilde n|_p$ is additive and $C^\infty(M)$-linear by the affine-connection laws ([[def-affine-connection-on-a-smooth-manifold]]), so its value depends only on $X_p$; hence $\nabla_Vn:=\nabla_{\tilde X}\tilde n|_p$ is independent of both extensions and is additive in $V$. This proves (b). [step 1.1, step 2.1, step 3.1, given, L2, L4]

5.1 ($h$ and $K$ are smooth tensor fields.) On $\Sigma\cap U$ of a slice chart, the components $h_{ij}=g_{ij}|_{\Sigma\cap U}$ ($i,j\in\{1,2,3\}$) are smooth functions of the slice coordinates and the matrix $(h_{ij})$ is positive definite by [L1]; since $\Sigma$ is covered by such charts and the local expressions agree on overlaps (both are restrictions of the smooth field $g$), $h$ is a smooth symmetric positive definite covariant $2$-tensor field on $\Sigma$, that is, a Riemannian metric. For $K$, fix $p\in\Sigma$ and choose a local smooth extension $\tilde n$ of $n$ and smooth tangent extensions $\tilde X,\tilde Y$ of fields with $\tilde X_p=V$, $\tilde Y_p=W$; by step 4.1 the number $g_p(\nabla_Vn,W):=g_p(\nabla_{\tilde X}\tilde n,\tilde Y)$ does not depend on the three extensions. It is additive and $\mathbb R$-bilinear in $(V,W)$ because $\nabla$ and $g$ are, and it is $C^\infty(\Sigma)$-linear in each slot: replacing $\tilde X$ by $\varphi\tilde X$ for a smooth function $\varphi$ on $\Sigma$ extended locally changes $\nabla_{\tilde X}\tilde n$ by a factor $\varphi$ by the connection law $\nabla_{\varphi\tilde X}\tilde n=\varphi\nabla_{\tilde X}\tilde n$, and replacing $\tilde Y$ by $\varphi\tilde Y$ multiplies $g(\nabla_{\tilde X}\tilde n,\tilde Y)$ by $\varphi$ by bilinearity of $g$; the chart components of $K$ in slice coordinates, $K_{ij}=g(\nabla_{\partial_i}\tilde n,\partial_j)$, are then smooth in the slice coordinates because the connection coefficients and $\tilde n$ are smooth. Hence $K$ is a smooth covariant $2$-tensor field on $\Sigma$. [step 4.1, given, L1, L2, L4]

6.1 (Symmetry and the Gauss relation.) Fix $p\in\Sigma$ and $V,W\in T_p\Sigma$; extend $V,W$ to smooth ambient fields $X,Y$ tangent to $\Sigma$ along $\Sigma$, and extend $n$ to a smooth ambient field $\tilde n$ near $p$ (step 4.1). The function $g(\tilde n,Y)$ vanishes identically on $\Sigma$ because $Y$ is tangent and $\tilde n$ normal there; differentiating it along $V$ at $p$ and using [L5] gives $0=g(\nabla_V\tilde n,Y)+g(n,\nabla_VY)$ at $p$, that is $K_p(V,W)=-g_p(\nabla_VW,n_p)$; the same argument with $V$ and $W$ exchanged gives $K_p(W,V)=-g_p(\nabla_WV,n_p)$. By torsion-freedom in [L5], $\nabla_VW-\nabla_WV=[X,Y]$ at $p$, and $[X,Y]$ is tangent to $\Sigma$ at $p$ by [L6]; since $n_p$ is normal, $g_p([X,Y],n_p)=0$. Therefore $K_p(V,W)-K_p(W,V)=-g_p([X,Y],n_p)=0$, so $K$ is symmetric and the displayed Gauss relation holds. [step 5.1, step 4.1, given, L4, L5, L6]

7.1 (The shape operator.) Fix $p\in\Sigma$. Since $h_p$ is a positive definite symmetric form on the three-dimensional space $T_p\Sigma$, there is an $h_p$-orthonormal basis $e_1,e_2,e_3$ of $T_p\Sigma$ ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]); define $S_pV:=\sum_{i=1}^3K_p(V,e_i)\,e_i$ for $V\in T_p\Sigma$. Then $h_p(S_pV,e_j)=K_p(V,e_j)$ for each $j$, and since $\{e_j\}$ is a basis the identity $h_p(S_pV,W)=K_p(V,W)$ holds for all $W\in T_p\Sigma$; this also shows that $S_pV$ does not depend on the chosen orthonormal basis. The assignment $V\mapsto S_pV$ is linear because $K_p$ is bilinear. Self-adjointness is immediate from symmetry of $K$ and of $h_p$: $h_p(S_pV,W)=K_p(V,W)=K_p(W,V)=h_p(S_pW,V)=h_p(V,S_pW)$. Finally, $\nabla_Vn\in T_pM$ satisfies $g_p(\nabla_Vn,n_p)=\tfrac12V(g(\tilde n,\tilde n))=0$ because $g(\tilde n,\tilde n)\equiv-1$ on $\Sigma$ and $V$ is tangent, so $\nabla_Vn\in n_p^{\perp}$; by [L3] $n_p^{\perp}$ is three-dimensional, and it contains $T_p\Sigma$, also three-dimensional, so $n_p^{\perp}=T_p\Sigma$ and $\nabla_Vn\in T_p\Sigma$. For every $W\in T_p\Sigma$ one has $g_p(\nabla_Vn,W)=K_p(V,W)=h_p(S_pV,W)$; since $h_p$ is nondegenerate, $\nabla_Vn=S_pV$. This proves (d) and completes the proof. [step 5.1, step 6.1, given, L3, L5] ∎

## Remarks

- **Sign and orientation conventions.** With signature $(-,+,+,+)$ and future normal normalized by $g(n,n)=-1$, this library uses $K(V,W)=g(\nabla_Vn,W)=-g(\nabla_VW,n)$. The global sign of the extrinsic curvature is a convention: Gourgoulhon defines it as the pullback of $-\nabla n$, which is $-K$ in the present normalization (his sphere example gives $K_{ij}=-(1/R)\gamma_{ij}$ where the present convention gives $+(1/R)\gamma_{ij}$). Replacing $n$ by $-n$ reverses the sign of $K$. $K$ is not claimed to be positive or negative definite, and no mean curvature sign is fixed here. Consumers must use the definition displayed in this item, not a differing textbook sign.
- **Scope.** The lemma is local and kinematic: it constructs the normal from a slice chart and uses only the metric-selected connection, torsion freedom and metric compatibility. No field equation, no causal condition on the model beyond time orientation and no compactness or completeness hypothesis enters.
