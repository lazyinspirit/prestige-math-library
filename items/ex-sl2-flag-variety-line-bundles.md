---
id: ex-sl2-flag-variety-line-bundles
kind: example
title: Flag line bundles for SL(2)
status: published
origin: pipeline
landmark: false
deps:
  - def-borel-character-equivariant-line-bundle
  - thm-minimal-parabolic-flag-projection-is-p1-bundle
  - lem-flag-line-bundle-degree-on-minimal-parabolic-fibre
  - lem-flag-variety-canonical-bundle-weight-minus-two-rho
  - def-complex-semisimple-algebraic-group-borel-and-flag-variety
  - lem-semisimple-borel-root-factorization
  - lem-semisimple-minimal-parabolic-root-subgroup
  - lem-semisimple-rank-one-sl2-root-homomorphism
  - lem-semisimple-projective-orbit-flag-quotients
  - def-fundamental-weights-for-a-chosen-simple-root-system
  - def-coroot-and-dual-root-system
  - def-weyl-vector-rho
  - ex-diagonal-cartan-subalgebra-and-roots-of-sl-n
  - def-projective-line-two-affine-cover-and-twisting-sheaf
  - lem-uniqueness-of-twists-on-the-projective-line
  - thm-gluing-sheaves
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Michel Brion, Lectures on the Geometry of Flag Varieties"
      url: https://www-fourier.univ-grenoble-alpes.fr/~mbrion/lecturesrev.pdf
      locator: "§§1.2-1.4 and §2.1"
    - title: "Jacob Lurie, A Proof of the Borel-Weil-Bott Theorem"
      url: https://people.math.harvard.edu/~lurie/papers/bwb.pdf
      locator: "pp. 1-3"
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice. Let $G=SL_2(\mathbb C)$, let $B\subseteq G$ be the
subgroup of upper triangular matrices of determinant one, let
$T=\{\operatorname{diag}(t,t^{-1}):t\in\mathbb C^\times\}$ be the diagonal
maximal torus, let $\alpha=\varepsilon_1-\varepsilon_2$ be the standard simple
root with corresponding fundamental weight $\omega_1$ of
[[def-fundamental-weights-for-a-chosen-simple-root-system]], let
$\rho=\frac12\alpha$ be the Weyl vector of [[def-weyl-vector-rho]], and let
$u_{\pm\alpha}$ and $n_\alpha$ be the root parametrizations and Weyl representative
of [[lem-semisimple-rank-one-sl2-root-homomorphism]], with the following
explicit normalization: take $e_\alpha=E_{12}$, $f_\alpha=E_{21}$,
$h_\alpha=\operatorname{diag}(1,-1)$ and
$\varphi_\alpha=\operatorname{id}_{SL_2}$. These matrices satisfy
$[e_\alpha,f_\alpha]=h_\alpha$, $[h_\alpha,e_\alpha]=2e_\alpha$ and
$[h_\alpha,f_\alpha]=-2f_\alpha$, so the identity homomorphism realizes
the cited root datum. In particular,
$$u_\alpha(z)=\begin{pmatrix}1&z\\0&1\end{pmatrix},\qquad u_{-\alpha}(z)=\begin{pmatrix}1&0\\z&1\end{pmatrix},\qquad n_\alpha=\begin{pmatrix}0&-1\\1&0\end{pmatrix}.$$
Fix the identification
$$G/B\cong\mathbb P^1_{\mathbb C},\qquad gB\longmapsto\mathbb C\,ge_1\subseteq\mathbb C^2,$$
of the flag variety with the projective line of lines in $\mathbb C^2$, where
$e_1=(1,0)$; equivalently, this identification matches the two charts
$z\mapsto u_{-\alpha}(z)B$ and $s\mapsto u_\alpha(s)n_\alpha B$ of the flag
variety with the standard two-affine projective line
$U_0=\operatorname{Spec}\mathbb C[t]$ and
$U_\infty=\operatorname{Spec}\mathbb C[u]$ with $tu=1$ by $t=z$ and $u=s$.
Then:

(i) $G/B$ is the orbit $X_B$ of the highest weight line $[v_B]$, the map
$gB\mapsto\mathbb C\,ge_1$ is a bijection from the coset space onto the set of
lines in $\mathbb C^2$ which supplies this identification, and the rank-one
minimal-parabolic projection $f:X_B\to X_\alpha$ has a one-point base and the
single fibre $F=X_B$;

(ii) for every $m\in\mathbb Z$ the equivariant line bundle
$\mathcal L_{m\omega_1}=G\times^B\mathbb C_{-m\omega_1}$ of
[[def-borel-character-equivariant-line-bundle]] satisfies
$\mathcal L_{m\omega_1}\cong\mathcal O(m)$ under this identification, and the
degree of $\mathcal L_{m\omega_1}$ on the fibre $F=X_B$ is
$m=\langle m\omega_1,\alpha^\vee\rangle$;

(iii) $\rho=\omega_1$ and $2\rho=\alpha=2\omega_1$, and the canonical
(dualizing) line bundle of the flag variety is
$$\omega_{G/B}\cong\mathcal L_{-2\rho}=\mathcal L_{-2\omega_1}\cong\mathcal O(-2),$$
with fibre at $eB$ the one-dimensional $B$-module
$\mathbb C_{2\rho}=\mathbb C_\alpha$ on which $b\in B$ acts by $\alpha(b)$.

## Facts & Assumptions

**Given:** the group $G=SL_2(\mathbb C)$ with its upper triangular Borel $B$ and diagonal torus $T$, the simple root $\alpha$ with its root subgroups $U_{\pm\alpha}$ and Weyl representative $n_\alpha$, the minimal parabolic $P_\alpha$, the flag varieties $X_B=G/B$ and $X_\alpha=G/P_\alpha$, the associated line bundles $\mathcal L_\lambda=G\times^B\mathbb C_{-\lambda}$, the two-affine projective line with its twists, and the Axiom of Choice.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] The roots of $\mathfrak{sl}_2(\mathbb C)$ with the diagonal Cartan subalgebra $\mathfrak h=\{\operatorname{diag}(x_1,x_2):x_1+x_2=0\}$ are the functionals $\varepsilon_i-\varepsilon_j$ with $i\ne j$, with root spaces $\mathfrak g_{\varepsilon_i-\varepsilon_j}=\mathbb CE_{ij}$; for $n=2$ this gives $\Phi=\{\alpha,-\alpha\}$ with $\alpha=\varepsilon_1-\varepsilon_2$, $\varepsilon_i(\operatorname{diag}(x_1,x_2))=x_i$. ([[ex-diagonal-cartan-subalgebra-and-roots-of-sl-n]])

[F2] $B=T\ltimes U$ is a closed connected solvable subgroup with unipotent radical $U=\prod_{\beta\in\Phi^+}U_\beta$, $\dim U=|\Phi^+|$ and $\operatorname{Lie}B=\mathfrak b$, and the restriction of characters is an isomorphism $X^*(B)\to X^*(T)$, so every character of $B$ is trivial on the unipotent radical $U$. ([[lem-semisimple-borel-root-factorization]])

[F3] There is a morphism $\varphi_\alpha:SL_2(\mathbb C)\to G$ of algebraic groups mapping the standard unipotent subgroups isomorphically onto the root subgroups, $\varphi_\alpha\begin{pmatrix}1&z\\0&1\end{pmatrix}=u_\alpha(z)$ and $\varphi_\alpha\begin{pmatrix}1&0\\z&1\end{pmatrix}=u_{-\alpha}(z)$, and the standard Weyl matrix $w=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ to $n_\alpha$; on the diagonal it maps $\operatorname{diag}(u,u^{-1})$ to $\alpha^\vee(u)$, and for every $\lambda\in X^*(T)$ and $u\in\mathbb C^\times$ one has $\lambda(\alpha^\vee(u))=u^{\langle\lambda,\alpha^\vee\rangle}$. ([[lem-semisimple-rank-one-sl2-root-homomorphism]])

[F4] $P_\alpha$ is a closed connected algebraic subgroup of $G$ with $P_\alpha=B\sqcup Bn_\alpha B$, with the two double cosets disjoint, and $\dim P_\alpha=\dim B+1$. ([[lem-semisimple-minimal-parabolic-root-subgroup]])

[F5] The group $SL_2(\mathbb C)$ with its diagonal torus and upper triangular subgroup is the rank-one instance of the ambient complex semisimple group setting: $\operatorname{Lie}G=\mathfrak{sl}_2(\mathbb C)$ is semisimple with Cartan subalgebra $\mathfrak h$ and root system $\Phi=\{\pm\alpha\}$ of type $A_1$, the torus $T$ is maximal with character group $X^*(T)$ generated by $\omega_1$, the upper triangular subgroup is the Borel $B=T\ltimes U$ for the positive system $\Phi^+=\{\alpha\}$, and $\dim G=\dim\mathfrak g=\dim\mathfrak h+2|\Phi^+|=3$; this is the same standard identification of the classical group with the abstract setting that is used for $SL_3$ in the sibling example of this batch, and under it $X_B$ is the closed orbit of $[v_B]$, a smooth projective variety of dimension $|\Phi^+|=1$ on which $\pi_B$ has fibres the cosets $gB$ and stabilizer $B$. ([[def-complex-semisimple-algebraic-group-borel-and-flag-variety]], [[lem-semisimple-projective-orbit-flag-quotients]])

[F6] The induced map $f:X_B\to X_\alpha$, $g[v_B]\mapsto g[v_\alpha]$, is a surjective morphism of varieties whose fibre over $g[v_\alpha]$ is the coset space $P_\alpha/B$ in the two-chart description $z\mapsto u_{-\alpha}(z)B$, $t\mapsto u_\alpha(t)n_\alpha B$ with $t=z^{-1}$; in the rank-one case $G=P_\alpha$ the base $X_\alpha$ is a point and $f$ is the unique morphism $\mathbb P^1\to\operatorname{Spec}\mathbb C$, whose single fibre is $\mathbb P^1$. ([[thm-minimal-parabolic-flag-projection-is-p1-bundle]])

[F7] $\mathcal L_\lambda=G\times^B\mathbb C_{-\lambda}=(G\times\mathbb C)/{\sim}$ with $(gb,v)\sim(g,b\cdot v)$ and $b\cdot v=\lambda(b)^{-1}v$ is a $G$-equivariant line bundle over $X_B$ whose fibre over the point $gB$ is the one-dimensional space $\{[g,v]:v\in\mathbb C\}$; the sign convention is fixed so that the fibre over $eB$ is the module on which $b$ acts by $\lambda(b)^{-1}$, and $\mathcal L_0=\mathcal O_{X_B}$. ([[def-borel-character-equivariant-line-bundle]])

[F8] With the fibre $F=P_\alpha[v_B]$ identified with the two-affine projective line by sending the $z$-chart to $U_0$ with $t=z$ and the $s$-chart to $U_\infty$ with $u=s$, the restriction of $\mathcal L_\lambda$ to $F$ is $\mathcal O(\langle\lambda,\alpha^\vee\rangle)$; its degree is $\langle\lambda,\alpha^\vee\rangle$. ([[lem-flag-line-bundle-degree-on-minimal-parabolic-fibre]])

[F9] The canonical line bundle $\omega_{G/B}=\det\Omega^1_{G/B}$ is isomorphic to $\mathcal L_{-2\rho}$ with $\rho=\frac12\sum_{\beta\in\Phi^+}\beta$, and the fibre of both sides at $eB$ is the one-dimensional $B$-module $\mathbb C_{2\rho}$ on which $b$ acts by $(2\rho)(b)$. ([[lem-flag-variety-canonical-bundle-weight-minus-two-rho]])

[F10] The two-affine projective line is glued from $U_0=\operatorname{Spec}\mathbb C[t]$ and $U_\infty=\operatorname{Spec}\mathbb C[u]$ along $tu=1$, and for $n\in\mathbb Z$ the twist $\mathcal O(n)$ is glued from the structure sheaves with frames related on the overlap by $e_\infty=t^ne_0$. ([[def-projective-line-two-affine-cover-and-twisting-sheaf]])

[F11] $\mathcal O_{\mathbb P^1_{\mathbb C}}(n)\cong\mathcal O_{\mathbb P^1_{\mathbb C}}(m)$ if and only if $n=m$; consequently the twist index of an invertible sheaf on $\mathbb P^1_{\mathbb C}$ isomorphic to a twist is well defined. ([[lem-uniqueness-of-twists-on-the-projective-line]])

[F12] Compatible local sheaves with overlap identifications glue to a sheaf unique up to unique isomorphism, and the same objectwise construction applies to modules over a structure sheaf. ([[thm-gluing-sheaves]])

[F13] The fundamental weights are characterised by $\omega_i(\alpha_j^\vee)=\delta_{ij}$; the coroot of a root $\alpha$ is $\alpha^\vee=2\alpha/(\alpha,\alpha)$; the Weyl vector of a positive system is $\rho=\frac12\sum_{\beta\in\Phi^+}\beta$. ([[def-fundamental-weights-for-a-chosen-simple-root-system]], [[def-coroot-and-dual-root-system]], [[def-weyl-vector-rho]])

**Proof technique:** direct: identify $G/B$ with the projective line of lines by the explicit stabilizer and transitivity computation for $SL_2$, compute the rank-one weights $\alpha=2\omega_1$, $\rho=\omega_1$ and the pairings $\langle m\omega_1,\alpha^\vee\rangle=m$, compute the change of frame of $\mathcal L_{m\omega_1}$ on the two charts from the explicit matrix identity $u_\alpha(s)n_\alpha=u_{-\alpha}(z)\operatorname{diag}(z^{-1},z)u_\alpha(-z)$ at $s=z^{-1}$, read off the character $z^m$, and match with the gluing definition of $\mathcal O(m)$; check the sign against the tautological line subbundle and the value $m=-2$ against the canonical bundle.

## Proof

1.1 The flag variety as lines in $\mathbb C^2$ and its two charts. Let $g=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in G$. Since $ge_1=ae_1+ce_2$, the line $\mathbb Ce_1$ is $g$-stable exactly when $c=0$; the matrices $\begin{pmatrix}a&b\\0&a^{-1}\end{pmatrix}$ with $a\in\mathbb C^\times$ and $b\in\mathbb C$ are exactly the products $\operatorname{diag}(a,a^{-1})u_\alpha(b/a)$, hence form the subgroup $B=T\ltimes U_\alpha$, which is the upper triangular Borel of [F2], [F3] and [F5]. The action on lines is transitive: a nonzero vector $v=(v_1,v_2)$ with $v_1\ne0$ equals $v_1(e_1+ze_2)$ with $z=v_2/v_1$, and $u_{-\alpha}(z)e_1=e_1+ze_2$ by [F3], while $v=(0,v_2)=v_2\,n_\alpha e_1$ with $n_\alpha=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$. Hence $gB\mapsto\mathbb C\,ge_1$ is well defined, because $b\in B$ acts on $e_1$ by the scalar $a$ with $\operatorname{diag}(a,a^{-1})\in T$, and it is a bijection of $G/B$ onto the set of lines: surjectivity is the transitivity just proved and injectivity follows because $\mathbb C\,g^{-1}g'e_1=\mathbb Ce_1$ forces $g^{-1}g'\in B$. Under this bijection the $z$-chart $u_{-\alpha}(z)B$ consists of the lines $\mathbb C(e_1+ze_2)$ with $Z_1/Z_0=z$ and the $s$-chart $u_\alpha(s)n_\alpha B$ consists of the lines $\mathbb C(se_1+e_2)$ with $Z_0/Z_1=s$, and $zs=1$ on the overlap; these are the two charts $U_0,U_\infty$ of the statement and the chart description of [F6] and [F10]. Finally $G=B\sqcup Bn_\alpha B$: for $c\ne0$ direct multiplication gives $g=u_\alpha(a/c)\,n_\alpha\,\begin{pmatrix}c&d\\0&c^{-1}\end{pmatrix}$, the first and third factors lying in $B$, and $c=0$ is exactly the case $g\in B$; so the two double cosets are disjoint and exhaust $G$. [F2, F3, F5, F6, F10, algebra]

1.2 The rank-one weights and pairings. By [F1] the root system of $\mathfrak{sl}_2(\mathbb C)$ with the diagonal Cartan subalgebra is $\Phi=\{\alpha,-\alpha\}$ with $\alpha=\varepsilon_1-\varepsilon_2$, and the positive system is $\Phi^+=\{\alpha\}$, so $|\Phi^+|=1$; the coroot is $\alpha^\vee=2\alpha/(\alpha,\alpha)$ and the fundamental weight is characterised by $\omega_1(\alpha^\vee)=1$ [F13]. Evaluating the root on the diagonal torus gives $\alpha(\operatorname{diag}(t,t^{-1}))=t^2$, so by [F3] applied to $\alpha^\vee(u)=\operatorname{diag}(u,u^{-1})$ one has $u^{\langle\alpha,\alpha^\vee\rangle}=u^2$, that is $\langle\alpha,\alpha^\vee\rangle=2$; hence $\omega_1=\frac12\alpha$ is the functional with $\omega_1(\operatorname{diag}(t,t^{-1}))=t$, it satisfies $\omega_1(\alpha^\vee)=1$ and generates $X^*(T)\cong\mathbb Z$, and the Weyl vector is $\rho=\frac12\sum_{\beta\in\Phi^+}\beta=\frac12\alpha=\omega_1$; consequently $2\rho=\alpha=2\omega_1$ and $-2\rho=-\alpha=-2\omega_1$. Since [F3] gives $\lambda(\alpha^\vee(u))=u^{\langle\lambda,\alpha^\vee\rangle}$ for every $\lambda\in X^*(T)$, substituting $\lambda=m\omega_1$ yields $\langle m\omega_1,\alpha^\vee\rangle=m$ for every $m\in\mathbb Z$. [F1, F3, F13, algebra]

2.1 The rank-one fibre is the whole flag variety, with the same two charts. By [F4] $P_\alpha=B\sqcup Bn_\alpha B$ and by step 1.1 $G=B\sqcup Bn_\alpha B$, so the two double cosets agree and $P_\alpha=G$; as a cross-check $\dim P_\alpha=\dim B+1$ with $\dim B=\dim T+\dim U=1+|\Phi^+|=2$ by [F2] and $\dim G=\dim\mathfrak g=\dim\mathfrak h+2|\Phi^+|=3$ by [F5], so $P_\alpha$ is a closed irreducible subgroup of the same dimension as the irreducible group $G$. The rank-one clause of [F6] therefore applies: the base $X_\alpha=G/P_\alpha$ is a single point and the projection $f:X_B\to X_\alpha$ is the unique map to that point, with single fibre $F=P_\alpha[v_B]=G[v_B]=X_B$. By [F5] the stabilizer of $[v_B]$ is $B$ and $X_B$ is the orbit of $[v_B]$, so the two-chart description of the fibre in [F6] is the description of the whole flag variety computed in step 1.1; the identification $z\mapsto u_{-\alpha}(z)B$, $s\mapsto u_\alpha(s)n_\alpha B$ of the statement is thus the identification fixed in [F8], whose two charts $U_0,U_\infty$ are those of the line description. [F2, F4, F5, F6, F8, step 1.1]

2.2 The tautological line subbundle and the sign of the convention. Glue the free rank-one $\mathcal O_{U_0}$-module generated by the section $(1,z)$ of $\mathcal O_{U_0}^{\oplus2}$ to the free rank-one $\mathcal O_{U_\infty}$-module generated by $(s,1)$ over the overlap by $(1,z)=z\cdot(s,1)$; by [F10] and the uniqueness part of [F12] this defines an invertible sheaf $\mathcal T$ on $\mathbb P^1$, whose frame relation $f_\infty=t^{-1}f_0$ exhibits it as $\mathcal O(-1)$ under the convention of [F10]. It is the sheaf of sections of the line subbundle of $\mathcal O^{\oplus2}$ spanned by the standard coordinates, so it carries the $G$-equivariant structure induced by the action of $G$ on $\mathbb C^2$, and over the fixed point $eB$ (the point $z=0$ in the $z$-chart) its fibre is $\mathbb Ce_1$. There an element $b=\begin{pmatrix}t&b_{12}\\0&t^{-1}\end{pmatrix}\in B$ acts by $b\cdot e_1=te_1$: the upper triangular unipotent factor fixes $e_1$ and the diagonal factor scales it by $t$, the character $\omega_1$ of step 1.2. By the fibre-character convention of [F7] the bundle $\mathcal L_{\omega_1}$ has fibre character $t^{-1}$ at $eB$, and the tautological line has fibre character $t=\omega_1$; the frame relation $f_\infty=t^{-1}f_0$ is therefore the two-chart shadow of the negative fundamental twist, not of $\mathcal O(1)$. [F3, F7, F10, F12, step 1.2]

2.3 The change of frame of $\mathcal L_{m\omega_1}$. By [F7] the fibre of $\mathcal L_\lambda$ at a point $gB$ is $\{[g,v]:v\in\mathbb C\}$ with $(gb,v)\sim(g,\lambda(b)^{-1}v)$; hence for points $x$ of the two charts of step 1.1 the assignments $e_0(x)=[u_{-\alpha}(z(x)),1]$ and $e_\infty(x)=[u_\alpha(s(x))n_\alpha,1]$ are nowhere-vanishing sections, because the second coordinate is $1\ne0$, so they are frames of $\mathcal L_\lambda$ on the two charts. Direct matrix multiplication in $G$ gives, for $z\in\mathbb C^\times$ and $s=z^{-1}$, $$u_\alpha(s)n_\alpha=\begin{pmatrix}z^{-1}&-1\\1&0\end{pmatrix}=\begin{pmatrix}1&0\\z&1\end{pmatrix}\begin{pmatrix}z^{-1}&-1\\0&z\end{pmatrix}=u_{-\alpha}(z)\,\operatorname{diag}(z^{-1},z)\,u_\alpha(-z),$$ and the right-hand factor $b_z:=\operatorname{diag}(z^{-1},z)u_\alpha(-z)$ lies in $B=T\ltimes U$ because $\operatorname{diag}(z^{-1},z)\in T$ and $u_\alpha(-z)\in U$ by step 1.1. Since the two lifts describe the same point of the flag variety, the equivalence relation of [F7] gives $$e_\infty(x)=[u_{-\alpha}(z(x))b_z,1]=[u_{-\alpha}(z(x)),b_z\cdot1]=\lambda(b_z)^{-1}e_0(x).$$ For $\lambda=m\omega_1$ the character value factors as $\lambda(b_z)=\lambda(\operatorname{diag}(z^{-1},z))\,\lambda(u_\alpha(-z))$; the second factor is $1$ because every character of $B$ is trivial on the unipotent radical [F2], and the first is $(z^{-1})^{\langle m\omega_1,\alpha^\vee\rangle}=z^{-m}$ by [F3] and $\operatorname{diag}(z^{-1},z)=\alpha^\vee(z^{-1})$ together with step 1.2. Hence $\lambda(b_z)^{-1}=z^{m}$, and the two frames of $\mathcal L_{m\omega_1}$ are related over the overlap by $e_\infty=t^me_0$, where $t=z$ is the coordinate of $U_0$ by step 1.1. [F2, F3, F7, step 1.1, step 1.2]

3.1 The identity $\mathcal L_{m\omega_1}\cong\mathcal O(m)$ and the degree. By [F10] the twist $\mathcal O(m)$ is glued from the structure sheaves on $U_0$ and $U_\infty$ with frames related by $e_\infty=t^me_0$, which is exactly the gluing relation found in step 2.3 for the frames of $\mathcal L_{m\omega_1}$; both sheaves are trivialized by these frames on the two charts, with induced overlap identification given in both cases by multiplication by the unit $t^{-m}$, so the uniqueness statement of [F12] gives an isomorphism $\mathcal L_{m\omega_1}\cong\mathcal O(m)$ compatible with the frames. Since $t^m$ is a unit on the overlap for every $m\in\mathbb Z$, this covers positive, zero and negative $m$, the case $m=0$ being $\mathcal L_0=\mathcal O_{X_B}$ of [F7]; by [F11] the twist index is an isomorphism invariant, so the degree of $\mathcal L_{m\omega_1}$ under the fixed identification is well defined and equals $m$, in agreement with the general restriction formula $\mathcal L_\lambda|_F\cong\mathcal O(\langle\lambda,\alpha^\vee\rangle)$ of [F8], which gives $\langle m\omega_1,\alpha^\vee\rangle=m$ by step 1.2. In particular $\mathcal O(-1)\cong\mathcal L_{-\omega_1}$ and $\mathcal O(1)\cong\mathcal L_{\omega_1}$: step 2.2 computed the frame relation $f_\infty=t^{-1}f_0$ for the tautological bundle, which is the case $m=-1$ of the relation just established, and the fibre-character computation of step 2.2 agrees with the character $t^{-m}=t$ of $\mathcal L_{-\omega_1}$ at $eB$ by [F7]; the sign convention of [F7] is therefore the one in which the fundamental weight $\omega_1$ corresponds to the positive twist, as required for the canonical value $m=-2$ below. [F7, F8, F10, F11, F12, step 1.2, step 2.2, step 2.3]

4.1 The canonical bundle. By [F9] the canonical bundle of the flag variety is $\omega_{G/B}\cong\mathcal L_{-2\rho}$ with fibre at $eB$ the $B$-module $\mathbb C_{2\rho}$; by step 1.2 $-2\rho=-\alpha=-2\omega_1$, so $\mathcal L_{-2\rho}=\mathcal L_{-2\omega_1}$ and step 3.1 with $m=-2$ gives $\omega_{G/B}\cong\mathcal L_{-2\omega_1}\cong\mathcal O(-2)$ with frame relation $e_\infty=t^{-2}e_0$. The two descriptions of the fibre agree: the fibre character of $\mathcal L_{-2\omega_1}$ at $eB$ is $t^{-m}=t^{2}$ by step 2.3 and [F7], while $\mathbb C_{2\rho}=\mathbb C_\alpha$ is the line on which $b$ acts by $\alpha(b)=t^2$ by step 1.2, and this is the value $m=-2$ of the fibre-degree formula $\langle m\omega_1,\alpha^\vee\rangle=m$ of step 1.2. [F7, F9, step 1.2, step 2.3, step 3.1]

5.1 Wrap-up and the Axiom of Choice. Step 1.1 and step 2.1 prove (i): the identification of the flag variety with the projective line of lines, with the two-chart description matching $U_0,U_\infty$, and the rank-one fibre $F=X_B$. Steps 2.2, 2.3 and 3.1 prove (ii): the change-of-frame computation gives $e_\infty=t^me_0$ for $\mathcal L_{m\omega_1}$, the gluing comparison gives $\mathcal L_{m\omega_1}\cong\mathcal O(m)$ for every $m\in\mathbb Z$, and the twist index gives the degree $m=\langle m\omega_1,\alpha^\vee\rangle$ of step 1.2, with the sign checked against the tautological bundle. Step 4.1 proves (iii): $\rho=\omega_1$, $2\rho=\alpha=2\omega_1$ and $\omega_{G/B}\cong\mathcal L_{-2\rho}\cong\mathcal O(-2)$ with fibre $\mathbb C_{2\rho}$. The Axiom of Choice [A1] is assumed in the statement and is inherited through the quotient, torsor, root-subgroup and sheaf-gluing suppliers cited above; the example itself selects nothing beyond the finitely many standard data $e_1,e_2$, the two chart coordinates and the matrices displayed in step 2.3. The quotient structure on $G/B$ and the associated bundles $\mathcal L_\lambda$ used here are supplied by [F4], [F5], [F6] and [F7]. [A1, F4, F5, F6, F7, step 2.1, step 3.1, step 4.1] ∎
