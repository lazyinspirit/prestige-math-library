---
id: lem-gr-fx-null-normal-plane-and-screen
kind: lemma
title: "Local null normal pairs and the positive screen quotient"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
physical_scope: "Pure differential geometry of a spacelike surface and null hypersurface; no physical field equation or observation is asserted."
deps:
  - def-gr-smooth-lorentzian-objects
  - def-embedded-submanifold-and-slice-chart
  - def-gr-metric-selected-connection
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - def-covariant-derivative-along-a-curve
  - thm-sylvesters-law-of-inertia
  - def-countable-choice
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-embedded-submanifold-and-slice-chart: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-covariant-derivative-along-a-curve: mathematical-premise
  thm-sylvesters-law-of-inertia: mathematical-premise
  def-countable-choice: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "E. Gourgoulhon and J. L. Jaramillo, A 3+1 perspective on null hypersurfaces and isolated horizons, Physics Reports 423 (2006), arXiv:gr-qc/0503113v2: §§2.2, 2.6-2.7, 4.4, and 5.1-5.6"
      url: "https://arxiv.org/pdf/gr-qc/0503113"
    - title: "Edward Witten, Light Rays, Singularities, and All That, Clay Mathematics Institute lecture notes, full 106-page PDF: §§5.4-5.5"
      url: "https://www.claymath.org/wp-content/uploads/2022/03/WittenLectures.pdf"
verification:
  precheck: pending
---

## Statement

Assume Countable Choice for the smooth tangent-bundle convention in the
Lorentzian suppliers below. Let $(M,g,N)$ be a smooth time-oriented Lorentzian
four-manifold of signature $(-,+,+,+)$, and let $\iota:S\hookrightarrow M$ be
a smooth embedded two-manifold without boundary whose induced form
$q:=\iota^*g$ is positive definite. Write
$$\mathcal N_pS:=\{v\in T_pM:g_p(v,X)=0\text{ for every }X\in T_pS\}.$$
Then $\mathcal N S$ is a smooth rank-two Lorentzian vector bundle. Around each
$p\in S$ there are smooth future null normal fields $\ell,k$ with
$$g(\ell,\ell)=g(k,k)=0,\qquad g(\ell,k)=-2.$$
On an overlap where two such ordered pairs select the same future null ray,
they differ by a smooth boost $\ell'=e^f\ell$, $k'=e^{-f}k$; if their ray
labels are exchanged, the same rule holds after interchanging the labels.
No global null normal pair is asserted.

For a smooth null hypersurface $H$ with a smooth future null normal field
$\ell$ tangent to $H$, the quotient
$$\mathscr S_p:=\ell_p^\perp/\mathbb R\ell_p,\qquad p\in H,$$
is a smooth rank-two bundle with positive metric
$$\bar q_p([X],[Y]):=g_p(X,Y).$$
If $\ell$ is affinely geodesic, the map
$$B_p:\mathscr S_p\to\mathscr S_p,\qquad [X]\mapsto[\nabla_X\ell]$$
is well-defined and self-adjoint. On a spacelike section $S$ of $H$, the
quotient is isometric to $T_pS$. For a smooth future null normal $\ell$ to
$S$, define
$$\chi_\ell(X,Y):=g(\nabla_X\ell,Y)\qquad(X,Y\in T_pS);$$
this is a well-defined symmetric bilinear form. Along an affine generator the
screen derivative $\mathcal D_\ell[X]:=[D_\ell X]$ is well-defined and
compatible with $\bar q$. Under a boost,
$$\chi_{e^f\ell}=e^f\chi_\ell.$$

## Statement references

[[def-gr-smooth-lorentzian-objects]]

[[def-embedded-submanifold-and-slice-chart]]

[[def-gr-metric-selected-connection]]

[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]

[[def-covariant-derivative-along-a-curve]]

[[thm-sylvesters-law-of-inertia]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Countable Choice; the time-oriented Lorentzian four-manifold, spacelike embedded surface, smooth null hypersurface, and smooth normal fields in the Statement.

[F1] A Lorentzian four-manifold has a smooth symmetric nondegenerate metric of inertia $(3,1,0)$ and a smooth nowhere-zero timelike time-orientation field $N$; future null vectors are the null vectors $v$ with $g(v,N)<0$ ([[def-gr-smooth-lorentzian-objects]]).

[F2] A smooth embedded submanifold has local slice charts and a smooth tangent bundle whose fibers are its tangent subspaces ([[def-embedded-submanifold-and-slice-chart]]).

[F3] The metric-selected connection is torsion-free and metric-compatible, and is the Levi-Civita connection of $g$ ([[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

[F4] Covariant differentiation along a smooth curve satisfies the product rule and preserves the metric under a metric-compatible connection ([[def-covariant-derivative-along-a-curve]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

[F5] A real symmetric bilinear form is congruent to a diagonal form with an invariant number of positive, negative and zero entries; inertia is additive for a nondegenerate orthogonal direct sum ([[thm-sylvesters-law-of-inertia]]).

[A1] Countable Choice $\mathrm{AC}_\omega$ is the only choice principle assumed for the smooth tangent-bundle and time-orientation conventions of [F1] and [F3] ([[def-countable-choice]]); the local proof makes no use of full Choice.

## Proof

**Given:** [F1]–[F5] and [A1], with $q$ positive definite on every tangent plane of $S$.

1.1 Fix $p\in S$ and choose a smooth local frame $E_1,E_2$ for $TS$. Its Gram matrix $Q_{ij}=g(E_i,E_j)$ is smooth and positive definite, so $Q^{-1}$ is smooth on a sufficiently small neighborhood. The map
$$P_T(v):=\sum_{i,j=1}^2 E_i(Q^{-1})^{ij}g(v,E_j)$$
is a smooth projection onto $TS$; $P_\perp:=\mathrm{id}-P_T$ is a smooth rank-two projection with image $\mathcal N S$. The vector $\nu_0:=P_\perp N$ is timelike because
$$g(\nu_0,\nu_0)=g(N,N)-g(P_TN,P_TN)<0,$$
and it is future because $g(\nu_0,N)=g(\nu_0,\nu_0)<0$. Thus $\nu:=\nu_0/\sqrt{-g(\nu_0,\nu_0)}$ is a smooth future unit timelike normal. Choose a smooth local section $W$ of $\mathcal N S$ independent of $\nu$ at $p$ and shrink the neighborhood so independence persists; then $e_0:=W+g(W,\nu)\nu$ is nonzero, normal to $S$, and orthogonal to $\nu$. By [F1] and [F5], $\nu^\perp\cap\mathcal N_pS$ is positive one-dimensional, so after shrinking, $e:=e_0/\sqrt{g(e_0,e_0)}$ is a smooth unit spacelike normal. The fields $\ell:=\nu+e$ and $k:=\nu-e$ are future null normals and satisfy $g(\ell,k)=-2$. This also proves that $\mathcal N S$ is a smooth rank-two Lorentzian bundle. [F1, F2, F5, A1, construct, algebra]

2.1 On an overlap, each normal plane has exactly two future null rays. If $\ell'$ selects the same ray as $\ell$, then $\ell'=a\ell$ for a smooth function $a>0$; the normalization $g(\ell',k')=-2$ forces $k'=a^{-1}k$. Writing $f=\log a$ gives the asserted boost law. If $\ell'$ selects the other future ray, interchange the labels first. [F1, step 1.1, algebra]

2.2 Fix a point of a null hypersurface and a normalized future null pair $(\ell,k)$ in its Lorentzian normal plane, with $g(\ell,k)=-2$. The plane $P=\operatorname{span}\{\ell,k\}$ has Gram matrix $\left(\begin{smallmatrix}0&-2\\-2&0\end{smallmatrix}\right)$ and inertia $(1,1,0)$. Since $P$ is nondegenerate, $T_pM=P\oplus P^\perp$; by [F1] and [F5], $P^\perp$ is positive definite of dimension two. Every vector has a unique decomposition $a\ell+bk+z$ with $z\in P^\perp$; pairing with $\ell$ shows that it lies in $\ell^\perp$ exactly when $b=0$. Hence $\ell^\perp=\mathbb R\ell\oplus P^\perp$, so the quotient map identifies $\mathscr S_p$ with $P^\perp$ and $\bar q$ is independent of representatives and positive definite. Local smooth frames for $P^\perp$ give the smooth rank-two quotient bundle. If $S$ is a spacelike section, then $T_pS=P^\perp$, so the identification restricts to the stated isometry. [F1, F2, F5, step 1.1, construct, algebra]

3.1 A local extension of a section $\ell$ from an embedded surface defines $\nabla_X\ell$ independently of the extension: the difference of two extensions vanishes on $S$, so its derivative in every tangent direction to $S$ vanishes there. For tangent fields $X,Y$ on $S$, metric compatibility and normality give
$$\chi_\ell(X,Y)-\chi_\ell(Y,X)=-g(\ell,\nabla_XY-\nabla_YX)=-g(\ell,[X,Y])=0,$$
because the connection is torsion-free and $[X,Y]$ is tangent to $S$. For a boost, $\nabla_X(e^f\ell)=e^f(Xf)\ell+e^f\nabla_X\ell$ and $g(\ell,Y)=0$, hence $\chi_{e^f\ell}=e^f\chi_\ell$. On $H$, $[\nabla_X\ell]$ is in the screen since $g(\nabla_X\ell,\ell)=\frac12Xg(\ell,\ell)=0$. Replacing $X$ by $X+a\ell$ changes this class by $a[\nabla_\ell\ell]=0$ when $\ell$ is affine; therefore $B$ is well-defined. Likewise $[D_\ell(X+a\ell)]=[D_\ell X+a'\ell+aD_\ell\ell]=[D_\ell X]$, and metric compatibility gives $\ell\,\bar q([X],[Y])=\bar q(\mathcal D_\ell[X],[Y])+\bar q([X],\mathcal D_\ell[Y])$, so the screen derivative is well-defined and metric-compatible. Self-adjointness of $B$ follows from the same torsion-free calculation with $X,Y$ tangent to $H$, since $\ell$ is normal to $H$ and $[X,Y]$ remains tangent to $H$. [F1, F2, F3, F4, step 2.2, algebra] ∎

## Remarks

The screen inverse and every trace on a null hypersurface are taken on the positive quotient $\ell^\perp/\mathbb R\ell$ (or its identified tangent plane on a spacelike section). The induced form on all of $TH$ is degenerate and has no inverse. A global ordered pair of future null normals requires an additional trivialization; the local boost law above does not assert one.
