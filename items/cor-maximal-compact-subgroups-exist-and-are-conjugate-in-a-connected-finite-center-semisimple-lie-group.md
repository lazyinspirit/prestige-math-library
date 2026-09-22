---
id: cor-maximal-compact-subgroups-exist-and-are-conjugate-in-a-connected-finite-center-semisimple-lie-group
kind: corollary
title: Maximal compact subgroups exist and are conjugate in a connected finite center semisimple Lie group
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group, def-axiom-of-choice, thm-quotient-manifold-by-a-closed-lie-subgroup, cor-local-normal-form-for-submersions, def-cartan-involution-of-a-real-semisimple-lie-algebra, prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition, def-killing-form-of-a-finite-dimensional-lie-algebra, prop-isotropy-action-on-g-mod-h-is-induced-by-adjoint-mod-h, def-left-maurer-cartan-form, thm-maurer-cartan-structure-equation, thm-the-exterior-derivative-commutes-with-pullback, thm-fundamental-theorem-of-riemannian-geometry, def-levi-civita-connection, def-curvature-of-an-affine-connection, thm-pullback-connection-is-well-defined-and-functorial, prop-exponential-scales-one-parameter-subgroups, thm-existence-uniqueness-and-smooth-dependence-of-geodesics, lem-local-isometries-send-geodesics-to-geodesics, thm-hopf-rinow, def-riemannian-distance-on-a-connected-manifold, thm-riemannian-distance-is-a-metric, thm-first-variation-formula-for-energy, thm-parallel-transport-is-a-linear-isomorphism, prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §3, Theorem 6.31(b),(c),(f),(g), printed pp. 361-368; Historical Notes 2, printed p. 766 (Borel 1998, pp. 128-133)"
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Theorem 21.1.2 and proof, printed pp. 154–155; the moving endpoint terms are retained and evaluated locally here"
    - title: "Claudio Gorodski, An Introduction to Riemannian Symmetric Spaces"
      url: "https://www.ime.usp.br/~gorodski/ps/symmetric-spaces.pdf"
      locator: "Theorem 2.4.1, p. 29, fixed-point principle; the radius minimum and convexity are proved locally here"
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $G$ be a connected real semisimple Lie group
with finite center, let $\Theta$ be a global Cartan involution, and let
$K=G^\Theta$ ([[thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group]]).
Then $K$ is a maximal compact subgroup of $G$: it is compact, and no compact
subgroup of $G$ strictly contains it. Moreover every compact subgroup of $G$ is
contained in a conjugate of $K$, so that the maximal compact subgroups of $G$
are exactly the conjugates of $K$, and any two maximal compact subgroups are
conjugate.

## Facts & Assumptions

**Given:** AC, $G,\Theta,K$ as in the Statement, $\theta=d\Theta_e$, $\mathfrak g=\mathfrak k\oplus\mathfrak p$, and $o=eK$.

[A1] AC is [[def-axiom-of-choice]] and implies countable choice for the differential-geometric interfaces below.

[L1] $K$ is compact and closed with Lie algebra $\mathfrak k$, and $D(k,V)=k\exp V$ is a diffeomorphism $K\times\mathfrak p\to G$ ([[thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group]]). The quotient map $q:G\to G/K$ is a submersion with smooth left action ([[thm-quotient-manifold-by-a-closed-lie-subgroup]]); submersion normal form supplies local smooth sections ([[cor-local-normal-form-for-submersions]]).

[L2] $B_\theta$ is positive definite, $B$ is positive on $\mathfrak p$, negative on $\mathfrak k$, and $[\mathfrak k,\mathfrak p]\subseteq\mathfrak p$, $[\mathfrak p,\mathfrak p]\subseteq\mathfrak k$ ([[def-cartan-involution-of-a-real-semisimple-lie-algebra]], [[prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition]]). Here $B(U,V)=\operatorname{tr}(\operatorname{ad}_U\operatorname{ad}_V)$ ([[def-killing-form-of-a-finite-dimensional-lie-algebra]]). Isotropy on $T_o(G/K)$ is induced by $\operatorname{Ad}_k$ modulo $\mathfrak k$ ([[prop-isotropy-action-on-g-mod-h-is-induced-by-adjoint-mod-h]]).

[L3] The left Maurer–Cartan form $\omega$ is $dL_{g^{-1}}$ and satisfies $d\omega(U,V)+[\omega(U),\omega(V)]=0$ ([[def-left-maurer-cartan-form]], [[thm-maurer-cartan-structure-equation]]); exterior differentiation commutes with pullback ([[thm-the-exterior-derivative-commutes-with-pullback]]).

[L4] A metric-compatible torsion-free connection is the unique Levi–Civita connection ([[thm-fundamental-theorem-of-riemannian-geometry]], [[def-levi-civita-connection]]). Its curvature is $R(U,V)Z=\nabla_U\nabla_VZ-\nabla_V\nabla_UZ-\nabla_{[U,V]}Z$ ([[def-curvature-of-an-affine-connection]]). Connections pull back along smooth maps ([[thm-pullback-connection-is-well-defined-and-functorial]]).

[L5] $t\mapsto\exp(tV)$ is a global smooth one-parameter subgroup with initial velocity $V$ ([[prop-exponential-scales-one-parameter-subgroups]]). Initial geodesic data determine a unique maximal geodesic ([[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]]), and isometries send geodesics to geodesics ([[lem-local-isometries-send-geodesics-to-geodesics]]).

[L6] On a nonempty connected boundaryless Riemannian manifold, geodesic completeness implies metric completeness, compactness of closed bounded sets, and existence of minimizing geodesics ([[thm-hopf-rinow]]). Riemannian distance is the infimum of curve lengths and is a metric ([[def-riemannian-distance-on-a-connected-manifold]], [[thm-riemannian-distance-is-a-metric]]).

[L7] For a smooth variation with velocity fields $T=\partial_t\alpha$, $J=\partial_s\alpha$, first variation of energy along a geodesic is the boundary term $E'(s)=\langle J,T\rangle|_0^1$ ([[thm-first-variation-formula-for-energy]]). Parallel transport is an isomorphism and preserves the metric ([[thm-parallel-transport-is-a-linear-isomorphism]], [[prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume]]).

## Proof

**Proof technique:** direct.

1.1 The map $D_R(V,k)=D(k^{-1},-V)^{-1}=\exp(V)k$ is a diffeomorphism by [L1] and [L5]. Its first inverse coordinate $F:G\to\mathfrak p$ is constant on right $K$-cosets by uniqueness. Composing with local sections of $q$ proves that its induced map on $G/K$ is smooth. It is inverse to $\Phi(V)=\exp(V)K$, so $\Phi$ is a diffeomorphism, with global section $s(\Phi(V))=\exp V$. In particular $G/K$ is connected, nonempty and boundaryless. No exclusion of compact ideals is needed. [L1, L5]

1.2 Trace cyclicity and $\operatorname{ad}_{[U,V]}=[\operatorname{ad}_U,\operatorname{ad}_V]$ give $B([U,V],W)=B(U,[V,W])$. For an automorphism $A$, $\operatorname{ad}_{AU}=A\operatorname{ad}_UA^{-1}$ gives $B(AU,AV)=B(U,V)$. For $k\in K$, differentiating $\Theta C_k=C_k\Theta$ shows that $\operatorname{Ad}_k$ commutes with $\theta$; hence it preserves $\mathfrak p$ and its positive form $B=B_\theta|_{\mathfrak p}$. Let $j=dq_e|_{\mathfrak p}$; its kernel is zero and it is an isomorphism by [L1]. The formula $\langle V,W\rangle_{gK}=B(j^{-1}dL_{g^{-1}}V,j^{-1}dL_{g^{-1}}W)$ is independent of the representative by the isotropy formula in [L2]. It is positive definite, left invariant and smooth using the local sections in [L1]. [L1, L2, algebra]

2.1 Pull $\omega$ back along a local section and split $s^*\omega=a+u$ into $\mathfrak k$ and $\mathfrak p$ components. Differentiating $q\circ s=\mathrm{id}$ gives $V=dL_sj(u(V))$, so $u$ identifies the tangent bundle locally with $\mathfrak p$ and the metric is $B(u(V),u(W))$. Splitting [L3] gives $du(V,W)+[a(V),u(W)]-[a(W),u(V)]=0$ and $da(V,W)+[a(V),a(W)]=-[u(V),u(W)]$. Thus $u(\nabla_VZ)=V(u(Z))+[a(V),u(Z)]$ is a connection: the first identity makes its torsion zero, and Killing invariance in step 1.2 makes it metric compatible. Uniqueness in [L4] glues these local connections. Expanding their curvature and applying the second identity gives $u(R(V,W)Z)=-\lbrack\lbrack u(V),u(W)\rbrack,u(Z)\rbrack$. Hence for $C=[U,V]\in\mathfrak k$, $\langle R(U,V)V,U\rangle=B(C,C)\le0$. This construction works with compact ideals still present. [L1, L2, L3, L4, step 1.2, algebra]

2.2 Finally, $K$ is maximal compact directly from the global Cartan coordinates. If a compact subgroup $K_1$ contains $K$ and $g\in K_1$, write $g=k\exp V$ by [L1]. Then $\exp V=k^{-1}g\in K_1$ and $\exp(nV)\in K_1$ for every positive integer $n$. The continuous first inverse coordinate $F$ from step 1.1 has compact, thus bounded, image on $K_1$, whereas $F(\exp(nV))=nV$. Thus $V=0$ and $g\in K$. It follows that $K_1=K$. [L1, L5, step 1.1, algebra]

3.1 Along $c(t)=\Phi(tV)$ the global section of step 1.1 is $s(c(t))=\exp(tV)$, whose left Maurer–Cartan velocity is the constant $V$ by the subgroup law [L5]. Thus $a(c')=0$, $u(c')=V$, and the connection formula of step 2.1 gives $D_tc'=0$. Every initial velocity at $o$ is $jV$ for a unique $V$. Translating these global geodesics by $G$ and using [L5] proves that every initial datum has a global geodesic; uniqueness makes each maximal domain all of $\mathbb R$. By [L6], closed bounded subsets are compact and minimizing geodesics exist. Moreover the Riemannian exponential at $o$, identified by $j$, equals $\Phi$, and at any other point it is its isometric translate. It is therefore a diffeomorphism at every point, and the unique radial connector to each point is minimizing. [L5, L6, step 1.1, step 1.2, step 2.1]

4.1 Fix $z\in G/K$ and an affinely parametrized geodesic $\gamma(s)$. By step 3.1, $\alpha(s,t)=\operatorname{Exp}_z(t\operatorname{Exp}_z^{-1}\gamma(s))$, $0\le t\le1$, is a smooth variation by the unique minimizing geodesics from $z$. Put $T=\partial_t\alpha$, $J=\partial_s\alpha$ and $h(s)=\frac12 d(z,\gamma(s))^2=\frac12\int_0^1|T|^2dt$. Torsion freeness gives $D_sT=D_tJ$ (in coordinates the mixed partials and the symmetric Christoffel terms coincide). The curvature definition applied to the pulled-back connection gives $(D_sD_t-D_tD_s)T=R(J,T)T$; indeed expansion of the two coordinate covariant derivatives cancels the second derivatives and leaves exactly the curvature coefficients. Since $D_tT=0$, we get $D_t^2J=-R(J,T)T$. First variation [L7] gives $h'=\langle J,T\rangle|_0^1$. Differentiate once more: at $t=0$, $J=0$ and $D_sJ=0$; at $t=1$, $J=\gamma'$ and $D_sJ=0$ since $\gamma$ is a geodesic. Consequently integration of the metric product rule gives $$h''=\langle J,D_tJ\rangle|_0^1=\int_0^1\bigl(|D_tJ|^2-\langle R(J,T)T,J\rangle\bigr)dt\ge\int_0^1|D_tJ|^2dt\ge|\gamma'(s)|^2.$$ For the last inequality, parallel translate to one fixed tangent space; the resulting vector function starts at zero and ends with norm $|\gamma'|$, so integration and Cauchy–Schwarz on $[0,1]$ give the bound. The curvature inequality is step 2.1. The formula also holds when $\gamma(s)=z$, because the inverse exponential and the displayed energy are smooth there. [L4, L7, step 2.1, step 3.1, algebra]

5.1 For the minimizing geodesic $\gamma:[0,1]\to G/K$ from $x$ to $y$, its constant speed is $d(x,y)$. Step 4.1 implies that $s\mapsto d(z,\gamma(s))^2-d(x,y)^2s^2$ has nonnegative second derivative. Convexity at $s=1/2$ therefore yields $$d(z,\gamma(1/2))^2\le\tfrac12d(z,x)^2+\tfrac12d(z,y)^2-\tfrac14d(x,y)^2.$$ This proves the needed inequality rather than attributing it to existence of local convex neighborhoods. [step 3.1, step 4.1, algebra]

6.1 Let $L\le G$ be compact and let $O=L\cdot o$. This is nonempty compact by continuity of the action. Put $f(x)=\max_{z\in O}d(x,z)$. Triangle inequality shows $|f(x)-f(y)|\le d(x,y)$; since the action preserves lengths, hence distance, $f$ is $L$-invariant. Also $f(x)\ge d(x,o)$ because $o\in O$. The nonempty sublevel set $f\le f(o)$ is closed and bounded, hence compact by step 3.1. Continuity implies that $f$ attains a global minimum $D$ there: outside the sublevel set $f>f(o)$. Taking maxima over $z\in O$ in step 5.1 gives the same midpoint inequality for $f^2$. If $x,y$ both minimize, it gives $D^2\le D^2-d(x,y)^2/4$, hence $x=y$. By $L$-invariance the unique minimizer $x_0$ is fixed by every element of $L$. Writing $x_0=hK$ gives $L\subseteq hKh^{-1}$ by the coset action. [L1, L6, step 1.2, step 3.1, step 5.1, algebra]

7.1 Conjugation preserves compactness and inclusion, so each conjugate of the maximal compact group $K$ is maximal compact. Conversely any maximal compact subgroup equals a conjugate containing it by step 6.1. This proves all assertions. If $\mathfrak p=0$, step 1.1 gives a singleton quotient and $G=K$; the metric and all curve calculations use zero tangent spaces and the fixed-point argument still applies. AC supplies the global Cartan theorem and countable choice required in [L1], [L3], [L5], [L6]; no compact subgroup was assumed connected. [A1, step 1.1, step 2.2, step 6.1] ∎
