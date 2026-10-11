---
id: lem-smooth-projective-analytification-has-rational-kahler-polarization
kind: lemma
title: "Smooth projective analytifications have rational Kähler forms"
status: draft
origin: pipeline
dependency_level: 9
deps:
  - def-axiom-of-choice
  - def-complex-linear-and-compatible-bundle-connections
  - def-complex-manifolds-and-holomorphic-vector-bundles
  - def-complex-projective-space-and-holomorphic-charts
  - def-compact-kahler-manifold-and-hodge-polarization-conventions
  - def-curvature-of-a-vector-bundle-connection
  - lem-first-chern-form-agrees-with-the-topological-line-class
  - lem-rational-cohomology-scalar-comparison-for-compact-smooth-manifolds
  - prop-first-chern-class-of-tensor-dual-and-conjugate-lines
  - thm-ample-powers-very-ample-proper-base
  - thm-holomorphic-implicit-function-theorem
  - thm-holomorphic-inverse-function-theorem-several-variables
  - thm-jacobian-criterion-smooth-morphism
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Pierre Serre, Géométrie algébrique et géométrie analytique, Annales de l'institut Fourier 6 (1956), 1-42; §1 n°5 and §2 n°5-7 (Lemme 1, Proposition 2, Corollaire 3, Proposition 6), printed pp. 8-12"
      url: "https://www.numdam.org/item/AIF_1956__6__1_0.pdf"
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter V §12 (12.2)-(12.8), §13 (13.2)-(13.4) and §15.B (15.8), (15.10), printed pp. 268-272 and 279-281; Chapter VI §4.4-(4.6), printed pp. 296-297"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
proof_strategy: direct
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]), inherited from the
Jacobian-criterion, ample-powers, Chern-form and comparison suppliers below.
Let $X$ be a smooth projective complex scheme of pure dimension $n\ge0$.

Then the closed points of $X$ carry a structure of **complex manifold**
$X^{\mathrm{an}}$, its **analytification**: if $X\ne\varnothing$ and $n\ge1$
this is a compact Hausdorff second-countable smooth complex manifold of complex
dimension $n$
([[def-complex-manifolds-and-holomorphic-vector-bundles]]); if $n=0$ it is the
finite discrete set $X(\mathbb C)$ with its unique complex structure in the
convention of
[[def-compact-kahler-manifold-and-hodge-polarization-conventions]]; and if
$X=\varnothing$ then $X^{\mathrm{an}}=\varnothing$. Every standard smooth
algebraic chart of $X$ becomes a holomorphic chart of $X^{\mathrm{an}}$, and
every morphism of smooth complex schemes $X\to Y$ induces a holomorphic map
$X^{\mathrm{an}}\to Y^{\mathrm{an}}$.

Moreover, for every ample invertible sheaf $A$ on $X$ there is a smooth
positive closed real $(1,1)$-form $\eta_A$ on $X^{\mathrm{an}}$ whose de Rham
class is the real image of the topological first Chern class
$c_1(A):=c_1(A^{\mathrm{an}})\in H^2(X^{\mathrm{an}};\mathbb Z)$:
$$J_{X^{\mathrm{an}}}[\eta_A]=\rho_{X^{\mathrm{an}}}\bigl(c_1(A)\bigr),$$
where $J$ is the de Rham comparison and $\rho$ the change of coefficients
$\mathbb Z\to\mathbb R$
([[lem-rational-cohomology-scalar-comparison-for-compact-smooth-manifolds]]).
In dimension $n=0$ and for $X=\varnothing$ every $2$-form and every degree-two
cohomology class is zero and $\eta_A=0$, so the identity holds trivially.

## Facts & Assumptions

**Given:** A smooth projective complex scheme $X$ of pure dimension $n\ge0$
over $\operatorname{Spec}\mathbb C$, and an ample invertible sheaf $A$ on $X$.

[F1] The form-side conventions, the $n=0$ convention for complex manifolds,
the orientation, the notions of positive closed $(1,1)$-form and the type
decomposition are those of
[[def-compact-kahler-manifold-and-hodge-polarization-conventions]].

[F2] Complex manifolds are nonempty Hausdorff second-countable spaces with a
holomorphic atlas, and holomorphic maps are the continuous maps holomorphic in
charts ([[def-complex-manifolds-and-holomorphic-vector-bundles]]).

[F3] Complex projective space $\mathbb P^N(\mathbb C)$ is a compact Hausdorff
second-countable complex manifold of dimension $N$ with its standard charts
$U_j\cong\mathbb C^N$, and holomorphic maps into it are tested in those charts
([[def-complex-projective-space-and-holomorphic-charts]]).

[F4] The relative Jacobian criterion characterizes smoothness at a point of a
locally finitely presented morphism by a standard smooth presentation
$C_h\cong(A[t_1,\dots,t_m]/(f_1,\dots,f_r))_g$ with an invertible $r\times r$
minor of the Jacobian, whose chart is flat over the base with geometrically
regular fibres of dimension $m-r$
([[thm-jacobian-criterion-smooth-morphism]]).

[F5] The holomorphic implicit function theorem solves $\det(\partial f_j/\partial t''_k)\ne0$
for $t''=\varphi(t')$, and the holomorphic inverse function theorem in several
variables inverts a holomorphic map with invertible complex Jacobian
([[thm-holomorphic-implicit-function-theorem]],
[[thm-holomorphic-inverse-function-theorem-several-variables]]).

[F6] For the Noetherian base $\operatorname{Spec}\mathbb C$, the proper
finite-type morphism $X\to\operatorname{Spec}\mathbb C$ and the ample $A$,
there are $d\ge1$, $N\ge0$ and a closed immersion $j:X\to\mathbb P^N_{\mathbb C}$
with $j^*\mathcal O(1)\cong A^{\otimes d}$
([[thm-ample-powers-very-ample-proper-base]]).

[F7] For a Hermitian line bundle with Hermitian connection on a
finite-dimensional Hausdorff second-countable smooth manifold, the normalized
curvature form represents the real image of the integral class $c_1$ under the
de Rham comparison
([[lem-first-chern-form-agrees-with-the-topological-line-class]]).

[F8] Complex connections, Hermitian compatibility, local connection forms,
curvature $\Omega=d\omega+\omega\wedge\omega$ and their transformation and
pullback behaviour are those of
[[def-complex-linear-and-compatible-bundle-connections]] and
[[def-curvature-of-a-vector-bundle-connection]].

[F9] The first Chern class is additive under tensor products of line bundles,
$c_1(A^{\otimes d})=d\,c_1(A)$, over a path-connected CW complex or a space of
CW homotopy type
([[prop-first-chern-class-of-tensor-dual-and-conjugate-lines]]).

[F10] On a compact smooth manifold the coefficient maps
$H^k(X;\mathbb Z)\to H^k(X;\mathbb R)\to H^k_{\mathrm{dR}}(X)$ are the natural
ones, compatible with pullback along smooth maps and with change of
coefficients ([[lem-rational-cohomology-scalar-comparison-for-compact-smooth-manifolds]]).

## Proof

1.1 Let $x\in X(\mathbb C)$ be a closed point. Since $X\to\operatorname{Spec}\mathbb C$ is smooth and locally of finite presentation, the Jacobian criterion [F4] at $x$ gives a standard smooth presentation $C_h\cong\bigl(\mathbb C[t_1,\dots,t_m]/(f_1,\dots,f_r)\bigr)_g$ in which some $r\times r$ minor of $\bigl(\partial f_j/\partial t_i\bigr)$ is invertible, the components of the chart having dimension $m-r$; as $X$ has pure dimension $n$, this gives $m-r=n$ [F4]. The complex points of the chart model are $Z=\{t\in\mathbb C^m:f_1(t)=\dots=f_r(t)=0,\ g(t)\ne0\}$, and the point $x$ corresponds to a point of $Z$. If $r=0$, then $Z=\{g\ne0\}\subseteq\mathbb C^m=\mathbb C^n$ is an open coordinate set and the ambient coordinates are the chart. If $r\ge1$ and $n\ge1$, reorder the coordinates as $t=(t',t'')\in\mathbb C^n\times\mathbb C^r$ so that $\det\bigl(\partial f_j/\partial t''_k\bigr)$ is invertible at the point; the holomorphic implicit function theorem [F5] then gives a holomorphic $\varphi:A\to\mathbb C^r$ on a neighbourhood $A$ of $x'$ with $f(t',\varphi(t'))=0$ and, after shrinking and imposing $g\ne0$, with $f(t)=0\iff t''=\varphi(t')$ on $A\times B$, so that $t'\mapsto(t',\varphi(t'))$ is a homeomorphism of a neighbourhood of $x'$ onto a neighbourhood of $x$ in $Z$, the inverse being the projection $(t',t'')\mapsto t'$; this is a chart of a complex manifold of dimension $n$ [F2]. If $n=0$, then $m=r$ and the inverse function theorem in several variables [F5] applied to $(f_1,\dots,f_r):\mathbb C^m\to\mathbb C^m$, whose Jacobian is invertible at $x$, shows that $Z$ is locally the single point $x$, a chart into $\mathbb C^0=\{0\}$; these singleton charts give the discrete structure on the finite set $X(\mathbb C)$ in the $n=0$ convention of [F1], and if $X=\varnothing$ there are no closed points and we set $X^{\mathrm{an}}=\varnothing$. If $X\ne\varnothing$, then $X(\mathbb C)\ne\varnothing$: a nonempty scheme locally of finite type over the algebraically closed field $\mathbb C$ has a closed point, whose residue field is a finite extension of $\mathbb C$ and hence is $\mathbb C$. [F1, F2, F4, F5, given, algebra]

1.2 On the standard chart $U_j\cong\mathbb C^N$ of $\mathbb P^N(\mathbb C)$ put $\omega_{\mathrm{FS}}:=\frac{i}{2\pi}\partial\bar\partial\log(1+|z^{(j)}|^2)$, $|z^{(j)}|^2=\sum_l|z^{(j)}_l|^2$. On an overlap one has $1+|z^{(j)}|^2=|h|^2(1+|z^{(k)}|^2)$ for the nonvanishing holomorphic function $h=Z_j/Z_k$, and $\partial\bar\partial\log|h|^2=0$ because $\log|h|^2=\log h+\log\bar h$ with $h$ holomorphic and $\bar h$ antiholomorphic; hence the local forms agree on overlaps and define a global smooth real form of type $(1,1)$ on $\mathbb P^N(\mathbb C)$ [F1]. It is closed, since $d(\partial\bar\partial f)=\bar\partial\partial\bar\partial f=0$ for smooth $f$. It is positive: in a chart its Hermitian matrix is $\bigl((1+|z|^2)\delta_{jk}-\bar z_jz_k\bigr)/\bigl(2\pi(1+|z|^2)^2\bigr)$, and for $v\ne0$ the numerator quadratic form equals $(1+|z|^2)|v|^2-\bigl|\sum_jz_jv_j\bigr|^2>0$ by Cauchy-Schwarz. For $N=0$, $\mathbb P^0(\mathbb C)$ is a point and $\omega_{\mathrm{FS}}=0$. [F1, F3, given, algebra]

2.1 On an overlap of two such charts the transition is given in each direction by regular functions: both coordinate systems consist of coordinate functions of standard smooth presentations, related through the identification of the two chart domains inside $X$, and a regular function on a standard smooth chart is a fraction whose denominator does not vanish at the point, hence is holomorphic there [F4]. Thus both the transition and its inverse are holomorphic, and the charts of step 1.1 form a holomorphic atlas on $X(\mathbb C)$ whenever $X\ne\varnothing$, with the standard smooth algebraic charts of $X$ becoming holomorphic charts. A morphism $f:X\to Y$ of smooth complex schemes maps closed points to closed points and, in standard smooth charts on both sides, is given by regular functions, hence is holomorphic; so $f$ induces a holomorphic map $f^{\mathrm{an}}:X^{\mathrm{an}}\to Y^{\mathrm{an}}$. [F2, F4, step 1.1, given, algebra]

2.2 Let $\mathcal O(1)$ be the holomorphic line bundle on $\mathbb P^N(\mathbb C)$ with transition functions $g_{jk}=Z_j/Z_k$ on the standard cover, and give it the Hermitian metric whose local weight in the $j$-th trivialization is $\psi_j=(1+|z^{(j)}|^2)^{-1}>0$; on overlaps $\psi_j=|g_{jk}|^2\psi_k$, so the weights define a Hermitian metric [F2]. The local forms $\omega_j:=\psi_j^{-1}\partial\psi_j$ satisfy $\omega_j=\omega_k+g_{jk}^{-1}dg_{jk}$ because $\partial\log|g_{jk}|^2=g_{jk}^{-1}\partial g_{jk}$ for holomorphic nonvanishing $g_{jk}$, so they glue to a complex connection $\nabla$ on $\mathcal O(1)$ [F8]; and $\nabla$ is Hermitian, because $\omega_j+\bar\omega_j=\psi_j^{-1}\partial\psi_j+\psi_j^{-1}\bar\partial\psi_j=\psi_j^{-1}d\psi_j$ is exactly the metric-compatibility identity $d\psi_j=\omega_j\psi_j+\psi_j\bar\omega_j$ in the rank-one holomorphic frame [F8]. Its curvature is $\Omega=d\omega_j+\omega_j\wedge\omega_j=d\omega_j$, the wedge term vanishing in rank one, and $d\omega_j=\bar\partial(\psi_j^{-1}\partial\psi_j)=\bar\partial\partial\log\psi_j=-\partial\bar\partial\log\psi_j$ [F8]; for $\psi_j=(1+|z^{(j)}|^2)^{-1}$ this gives $\Omega=\partial\bar\partial\log(1+|z^{(j)}|^2)$, so $-\Omega/(2\pi i)=\frac{i}{2\pi}\partial\bar\partial\log(1+|z^{(j)}|^2)=\omega_{\mathrm{FS}}$. The first-Chern comparison [F7] applied to $\mathcal O(1)$ with this Hermitian metric and Hermitian connection therefore gives $J_{\mathbb P^N(\mathbb C)}[\omega_{\mathrm{FS}}]=\rho\bigl(c_1(\mathcal O(1))\bigr)$. [F2, F7, F8, step 1.2, given, algebra]

3.1 Fix the ample invertible sheaf $A$ of the Given; it exists for the projective $X$ because the restriction of $\mathcal O(1)$ along a closed immersion into a projective space is very ample. By the ample-powers theorem [F6], $A^{\otimes d}$ is closed $H$-very ample for some $d\ge1$: there are $N\ge0$ and a closed immersion $j:X\to\mathbb P^N_{\mathbb C}$ with $j^*\mathcal O(1)\cong A^{\otimes d}$. The induced map $j(\mathbb C):X(\mathbb C)\to\mathbb P^N(\mathbb C)$ is injective, and its image $j(X)(\mathbb C)$ is closed in $\mathbb P^N(\mathbb C)$, being the common zero locus of the homogeneous defining equations of the closed subscheme $j(X)\subseteq\mathbb P^N_{\mathbb C}$ in the standard affine charts [F3]. We compare the chart topology of steps 1.1 and 2.1 with the subspace topology of the image. Fix $x\in X(\mathbb C)$, a chart of $X$ around $x$ and an affine chart of $\mathbb P^N(\mathbb C)$ around $j(x)$; there the morphism is given by a holomorphic map $g$. Since $j$ is a closed immersion of smooth $\mathbb C$-schemes, the pullback on Zariski cotangent spaces at $x$ is surjective, so the holomorphic differential $dg_x$ is injective; choose linear coordinates $z_1,\dots,z_N$ of the target chart whose differentials $dz_1,\dots,dz_n$ pull back to a basis of the cotangent space of $X$ at $x$, so that $d(z_1\circ g,\dots,z_n\circ g)_x$ is invertible. By the inverse function theorem [F5], $\pi\circ g:=(z_1\circ g,\dots,z_n\circ g)$ is a local biholomorphism at $x$; since $j(X)$ is a smooth closed subvariety of $\mathbb P^N_{\mathbb C}$ of dimension $n$, it is locally, near $j(x)$, the graph of a holomorphic function over the $z_1,\dots,z_n$-coordinates by the implicit function theorem [F5], and $g$ is the composite of the local biholomorphism $\pi\circ g$ with the graph parametrization, hence is a homeomorphism of a neighbourhood of $x$ onto an open subset of that graph. Therefore the chart topology and the subspace topology from $\mathbb P^N(\mathbb C)$ agree near every point $x$. As $\mathbb P^N(\mathbb C)$ is compact Hausdorff second-countable [F3], $X(\mathbb C)$ is compact, Hausdorff and second-countable, and of complex dimension $n$ at every point; for $X=\varnothing$ or $n=0$ the corresponding conclusions hold trivially by step 1.1. [F3, F5, F6, step 1.1, step 2.1, given, algebra]

4.1 Pull the Hermitian metric and the Hermitian connection of step 2.2 back along the holomorphic map $j^{\mathrm{an}}:X^{\mathrm{an}}\to\mathbb P^N(\mathbb C)$ to the line bundle $A^{\otimes d}$ on $X^{\mathrm{an}}$; the pullback of a Hermitian connection is Hermitian for the pullback metric and has curvature $j^*\Omega$ [F8], and $\eta_{A^{\otimes d}}:=-j^*\Omega/(2\pi i)=j^*\omega_{\mathrm{FS}}$ is a smooth closed real $(1,1)$-form, positive because the differential of $j$ is injective at every point of $X(\mathbb C)$ by step 3.1 while $\omega_{\mathrm{FS}}$ is positive. The first-Chern comparison [F7] applied on the compact manifold $X^{\mathrm{an}}$ to $(A^{\otimes d},j^*\nabla)$ gives $J_{X^{\mathrm{an}}}[\eta_{A^{\otimes d}}]=\rho\bigl(c_1(A^{\otimes d})\bigr)$, and the tensor-power additivity [F9] gives $c_1(A^{\otimes d})=d\,c_1(A)$, the base $X^{\mathrm{an}}$ being a compact smooth manifold, hence of CW homotopy type, and the identity being componentwise for disconnected $X$. With the natural comparisons of [F10], $\eta_A:=d^{-1}\eta_{A^{\otimes d}}$ is again smooth, closed, real, of type $(1,1)$ and positive, and $J_{X^{\mathrm{an}}}[\eta_A]=d^{-1}\rho\bigl(d\,c_1(A)\bigr)=\rho\bigl(c_1(A)\bigr)$. For $X=\varnothing$ or $n=0$ all forms of positive degree and all degree-two classes are zero, and $\eta_A=0$ satisfies the identity trivially. This proves the lemma for every ample $A$, the Axiom of Choice being used exactly through the declared suppliers [F4, F6, F7, F9, F10]. [F7, F8, F9, F10, step 3.1, step 1.2, step 2.2, given, algebra] ∎

## Remarks

- The manifold clause is stated in the nonempty convention of
  [[def-complex-manifolds-and-holomorphic-vector-bundles]] for $n\ge1$; the
  dimension-zero and empty cases follow the $n=0$ convention of
  [[def-compact-kahler-manifold-and-hodge-polarization-conventions]], where a
  compact complex manifold of dimension zero is a finite discrete set and all
  forms of positive degree vanish. There, positivity of $\eta_A=0$ is vacuous,
  since there are no nonzero tangent vectors.
- The construction of the Fubini–Study metric and of the Hermitian connection
  on $\mathcal O(1)$ is carried out directly in every dimension; it does not
  invoke a Riemann-surface special case. Demailly's Hermitian normalization
  $\omega=i\sum dz_j\wedge d\bar z_j$ differs from the library normalization
  $|dz_j|^2=2$ by the positive constant factor $2$; only the existence and the
  class identity are claimed, so no normalization is mixed into a numerical
  factor.
