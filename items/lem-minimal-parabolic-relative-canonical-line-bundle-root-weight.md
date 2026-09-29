---
id: lem-minimal-parabolic-relative-canonical-line-bundle-root-weight
kind: lemma
title: Relative canonical weight for a minimal-parabolic flag projection
status: draft
origin: pipeline
landmark: false
deps:
  - thm-minimal-parabolic-flag-projection-is-p1-bundle
  - lem-semisimple-minimal-parabolic-root-subgroup
  - lem-semisimple-flag-torsor-zariski-charts
  - lem-semisimple-projective-orbit-flag-quotients
  - lem-semisimple-borel-root-factorization
  - lem-semisimple-root-exponential-algebraic-subgroups
  - lem-semisimple-rank-one-sl2-root-homomorphism
  - def-borel-character-equivariant-line-bundle
  - thm-borel-characters-classify-equivariant-line-bundles-simply-connected
  - lem-flag-line-bundle-degree-on-minimal-parabolic-fibre
  - def-sheaf-relative-differentials
  - lem-sheaf-differentials-affine-compatibility
  - lem-differentials-polynomial-algebra-free
  - lem-differentials-commute-base-change-schemes
  - lem-differential-of-morphism-via-cotangent-map
  - cor-affine-closed-points-detect-radicals
  - def-projective-line-two-affine-cover-and-twisting-sheaf
  - lem-uniqueness-of-twists-on-the-projective-line
  - thm-gluing-sheaves
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: "Chapters 7, 17, 20-23, especially 7.18, 17.3, 20.32, 21.68-21.91, 22.17-22.27, 23.59"
    - title: "Brian Conrad, Reductive Group Schemes"
      url: https://math.stanford.edu/~conrad/papers/luminysga3smf.pdf
      locator: "§§1.2, 1.4, especially Theorems 1.2.7, 1.4.12, Proposition 1.4.7 and Corollary 1.4.13"
    - title: "Michel Brion, Lectures on the Geometry of Flag Varieties"
      url: https://www-fourier.univ-grenoble-alpes.fr/~mbrion/lecturesrev.pdf
      locator: "§§1.2-1.4 and §2.1"
    - title: "Jacob Lurie, A Proof of the Borel-Weil-Bott Theorem"
      url: https://people.math.harvard.edu/~lurie/papers/bwb.pdf
      locator: "Complete three-page note, especially Theorems 1 and 3 and Lemma 4"
---

## Statement

Assume the Axiom of Choice. Let $G$ be the connected simply connected complex
semisimple affine algebraic group with Borel $B=T\ltimes U$, positive roots
$\Phi^+$ and flag variety $X_B=G/B$ of
[[def-complex-semisimple-algebraic-group-borel-and-flag-variety]] and
[[lem-semisimple-borel-root-factorization]], let $\alpha$ be a simple root with
minimal parabolic $P_\alpha$ and Weyl representative $n_\alpha$ of
[[lem-semisimple-minimal-parabolic-root-subgroup]], and let
$$f:X_B\longrightarrow X_\alpha=G/P_\alpha,\qquad g[v_B]\longmapsto g[v_\alpha],$$
be the projection of [[thm-minimal-parabolic-flag-projection-is-p1-bundle]]
with fibre $F=f^{-1}([v_\alpha])=P_\alpha[v_B]$. Write
$$\Omega^1_f:=\Omega^1_{X_B/X_\alpha}$$
for the sheaf of relative differentials of [[def-sheaf-relative-differentials]]
and define the **relative canonical line bundle** of $f$ by
$$\omega_{(G/B)/(G/P_\alpha)}:=\det\Omega^1_f .$$
Then $\Omega^1_f$ is an invertible sheaf of rank one on $X_B$, so that
$\omega_{(G/B)/(G/P_\alpha)}=\Omega^1_f$, and there is a $G$-equivariant
isomorphism
$$\omega_{(G/B)/(G/P_\alpha)}\;\cong\;\mathcal L_{-\alpha},\qquad \mathcal L_\lambda=G\times^B\mathbb C_{-\lambda},$$
$\mathcal L_\lambda$ being the Borel-character equivariant line bundle of
[[def-borel-character-equivariant-line-bundle]]; with the fibre convention of
that item the fibre of both sides at $eB$ is the one-dimensional $B$-module
$\mathbb C_\alpha$ on which $b$ acts by $\alpha(b)$. In particular the
restriction of $\omega_{(G/B)/(G/P_\alpha)}$ to every fibre of $f$ is
isomorphic to $\mathcal O_{\mathbb P^1}(-2)$, so that its degree on the fibre
is $\langle-\alpha,\alpha^\vee\rangle=-2$.

## Facts & Assumptions

**Given:** the group $G$ with Borel $B=T\ltimes U$, positive roots $\Phi^+$, the simple root $\alpha$, the minimal parabolic $P_\alpha$ with its negative root subgroup $U_{-\alpha}$, the subgroup $U^-_\alpha=\prod_{\beta\neq\alpha}U_{-\beta}$, the flag varieties $X_B=G/B$, $X_\alpha=G/P_\alpha$ with their orbit maps and charts, the projection $f$, the equivariant line bundles $\mathcal L_\lambda=G\times^B\mathbb C_{-\lambda}$, and the Axiom of Choice.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] The induced map $f:X_B\to X_\alpha$, $g[v_B]\mapsto g[v_\alpha]$, is a surjective morphism of varieties with $f^{-1}(g[v_\alpha])=g\cdot P_\alpha[v_B]$ and fibre $F=P_\alpha[v_B]=P_\alpha/B$ over $[v_\alpha]$, covered by the two affine charts $z\mapsto u_{-\alpha}(z)[v_B]$ and $s\mapsto u_\alpha(s)n_\alpha[v_B]$, each isomorphic to $\mathbb A^1$ and glued by $s=z^{-1}$. ([[thm-minimal-parabolic-flag-projection-is-p1-bundle]], [[lem-semisimple-minimal-parabolic-root-subgroup]])

[F2] $\sigma_B:U^-\to X_B$, $u\mapsto u[v_B]$, and $\sigma_\alpha:U^-_\alpha\to X_\alpha$, $u\mapsto u[v_\alpha]$, are injective morphisms with Zariski open images, and $\pi_B^{-1}(\sigma_B(U^-))=U^-B$, $\pi_\alpha^{-1}(\sigma_\alpha(U^-_\alpha))=U^-_\alpha P_\alpha$; $G$ acts transitively on $X_B$ by automorphisms and $B=\operatorname{Stab}_G([v_B])$ is the stabilizer of $[v_B]$. ([[lem-semisimple-flag-torsor-zariski-charts]], [[lem-semisimple-projective-orbit-flag-quotients]])

[F3] $U^-=\prod_{\beta\in\Phi^+}U_{-\beta}$ in any height-compatible order is an isomorphism of varieties onto $U^-$, and $U^-=U^-_\alpha\cdot U_{-\alpha}$ with $u_{-\alpha}(z)\in U_{-\alpha}\subseteq P_\alpha$; the torus $T$ normalizes $U^-$, $U^-_\alpha$ and each root subgroup. ([[lem-semisimple-borel-root-factorization]])

[F4] For every root $\alpha\in\Phi$, every $t\in T$ and $z\in\mathbb C$ one has $t\,u_\alpha(z)\,t^{-1}=u_\alpha(\alpha(t)z)$; for the negative root $-\alpha$ this reads $t\,u_{-\alpha}(z)\,t^{-1}=u_{-\alpha}(\alpha(t)^{-1}z)$. ([[lem-semisimple-root-exponential-algebraic-subgroups]])

[F5] The rank-one homomorphism $\varphi_\alpha:SL_2(\mathbb C)\to G$ is a morphism of algebraic groups with $\varphi_\alpha\begin{pmatrix}1&z\\0&1\end{pmatrix}=u_\alpha(z)$, $\varphi_\alpha\begin{pmatrix}1&0\\z&1\end{pmatrix}=u_{-\alpha}(z)$ and $\varphi_\alpha(w)=n_\alpha$ for $w=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$, so that $n_\alpha$ acts on every $G$-set as $\varphi_\alpha(w)$ does. ([[lem-semisimple-rank-one-sl2-root-homomorphism]])

[F6] $\mathcal L_\lambda=G\times^B\mathbb C_{-\lambda}$ is a $G$-equivariant line bundle on $X_B$ whose fibre at $eB$ is the one-dimensional $B$-module on which $b$ acts by $\lambda(b)^{-1}$; the restriction to the fibre of the minimal-parabolic projection satisfies $\mathcal L_\lambda|_F\cong\mathcal O(\langle\lambda,\alpha^\vee\rangle)$ with $\langle\lambda,\alpha^\vee\rangle=\lambda(h_\alpha)$ and $\langle\alpha,\alpha^\vee\rangle=\alpha(h_\alpha)=2$, so $\mathcal L_{-\alpha}|_F\cong\mathcal O(-2)$ has degree $-2$. ([[def-borel-character-equivariant-line-bundle]], [[lem-flag-line-bundle-degree-on-minimal-parabolic-fibre]])

[F7] Taking the fibre at $eB$ is an equivalence of groupoids between $G$-equivariant algebraic line bundles on $X_B$ and one-dimensional algebraic $B$-representations, with $\mathcal L_\lambda$ corresponding to the module with character $b\mapsto\lambda(b)^{-1}$; equivalences are full, faithful and essentially surjective, and characters of $B$ are trivial on $U$ with $X^*(B)\to X^*(T)$ an isomorphism. ([[thm-borel-characters-classify-equivariant-line-bundles-simply-connected]], [[lem-semisimple-borel-root-factorization]])

[F8] $\Omega_{X/S}$ is the $\mathcal O_X$-module of relative differentials with its universal $S$-derivation, and for an affine chart $\operatorname{Spec}B\subseteq X$ over $\operatorname{Spec}A\subseteq S$ one has $\Gamma(\operatorname{Spec}B,\Omega_{X/S})\cong\Omega_{B/A}$ compatibly with the universal derivations; relative differentials restricted to an open subscheme over an open subscheme with the same images give the relative differentials of the restriction. ([[def-sheaf-relative-differentials]], [[lem-sheaf-differentials-affine-compatibility]])

[F9] For every commutative ring $A$ the module $\Omega_{A[x]/A}$ is free with basis $\mathrm dx$. ([[lem-differentials-polynomial-algebra-free]])

[F10] For a morphism $X\to S$ and a base change $S'\to S$ with fibre product $X'=X\times_S S'$, the canonical map $g^*\Omega_{X/S}\to\Omega_{X'/S'}$ is an isomorphism, $g:X'\to X$ the projection. ([[lem-differentials-commute-base-change-schemes]])

[F11] For an $S$-morphism $f:X\to Y$ the universal derivations induce a unique $\mathcal O_X$-linear differential $\mathrm df:f^*\Omega_{Y/S}\to\Omega_{X/S}$ with $\mathrm df(1\otimes\mathrm d_{Y/S}(g))=\mathrm d_{X/S}(g\circ f)$, satisfying the identity and chain rules. ([[lem-differential-of-morphism-via-cotangent-map]])

[F12] In a finite-type algebra over a field, radical ideals are intersections of maximal ideals; hence a regular function on a reduced finite-type $\mathbb C$-scheme that vanishes at every closed point is identically zero. ([[cor-affine-closed-points-detect-radicals]])

[F13] The two-affine projective line $\mathbb P^1_{\mathbb C}$ is glued from $\operatorname{Spec}\mathbb C[t]$ and $\operatorname{Spec}\mathbb C[u]$ along $tu=1$, and for $n\in\mathbb Z$ the sheaf $\mathcal O(n)$ is glued from the structure sheaves with frames $e_0=1$ on $U_0$ and $e_\infty=1$ on $U_\infty$ related on the overlap by $e_\infty=t^ne_0$; each $\mathcal O(n)$ is invertible, and $\mathcal O(n)\cong\mathcal O(m)$ if and only if $n=m$, so the twist index of an invertible sheaf isomorphic to a twist is well defined. ([[def-projective-line-two-affine-cover-and-twisting-sheaf]], [[lem-uniqueness-of-twists-on-the-projective-line]])

[F14] Compatible local sheaves with overlap identifications glue to a sheaf unique up to unique isomorphism. ([[thm-gluing-sheaves]])

**Proof technique:** direct: put the big-cell chart of $X_B$ into the product coordinates $U^-\cong U^-_\alpha\times U_{-\alpha}$ in which the projection becomes the first projection; compute the relative cotangent sheaf on that chart as the free rank-one module on the fibre coordinate $\mathrm dz$; use the chain rule to produce the canonical $G$-equivariant structure and to propagate the frame along the $G$-translates of the chart, which cover $X_B$; read off the $T$-weight $\alpha$ of the frame at the fixed point $eB$ from the conjugation formula, conclude $\Omega^1_f\cong\mathcal L_{-\alpha}$ by the fibre functor, and compute the restriction to a fibre on the two projective-line charts.

## Proof

1.1 Product coordinates of the projection. By [F2] the morphisms $\sigma_B$ and $\sigma_\alpha$ are isomorphisms onto open charts, and by [F3] the multiplication $U^-_\alpha\times U_{-\alpha}\to U^-$, $(u,w)\mapsto uw$, is an isomorphism of varieties; put $U=\sigma_B(U^-)$ and $V=\sigma_\alpha(U^-_\alpha)$. For $u\in U^-_\alpha$ and $z\in\mathbb C$ one has $$f\bigl(\sigma_B(u\,u_{-\alpha}(z))\bigr)=u\,u_{-\alpha}(z)[v_\alpha]=u[v_\alpha]=\sigma_\alpha(u),$$ because $u_{-\alpha}(z)\in P_\alpha=\operatorname{Stab}_G([v_\alpha])$ by [F1] and [F3]; in particular $f(U)\subseteq V$. Reading $U\cong U^-_\alpha\times\mathbb A^1$ and $V\cong U^-_\alpha$ as affine charts with coordinate rings $\mathcal O(U)=\mathbb C[x_\beta,z]$ and $\mathcal O(V)=\mathbb C[x_\beta]$, the displayed computation says that for every $h\in\mathcal O(V)$ the regular functions $h\circ f|_U$ and $h\circ\mathrm{pr}_1$ on the reduced finite-type $\mathbb C$-variety $U^-_\alpha\times U_{-\alpha}$ agree at every closed point, hence are equal by [F12]; therefore $f|_U$ corresponds to the first projection $\mathrm{pr}_1$ and the comorphism $\mathcal O(V)\to\mathcal O(U)$ is the inclusion of the subring $\mathbb C[x_\beta]$ into $\mathbb C[x_\beta,z]$. [F1, F2, F3, F12]

2.1 The fibre and its two charts. Setting $u=1$ in step 1.1, the fibre meets $U$ in the $z$-chart $\sigma_B(U_{-\alpha})=\{u_{-\alpha}(z)[v_B]:z\in\mathbb C\}\cong\mathbb A^1$ with fibre coordinate $z$. The $s$-chart lies in the translate $\ell_{n_\alpha}(U)=n_\alpha\sigma_B(U^-)$: direct multiplication in $SL_2(\mathbb C)$ gives $w^{-1}u_+(s)w=u_-(-s)$ and $u_+(s)w=u_-(z)\operatorname{diag}(z^{-1},z)u_+(-z)$ when $s=z^{-1}$, so applying the morphism $\varphi_\alpha$ of [F5] gives $$n_\alpha^{-1}u_\alpha(s)n_\alpha=u_{-\alpha}(-s),\qquad u_\alpha(s)n_\alpha=u_{-\alpha}(z)\,\alpha^\vee(z^{-1})\,u_\alpha(-z)\in u_{-\alpha}(z)B,$$ whence $u_\alpha(s)n_\alpha[v_B]=n_\alpha u_{-\alpha}(-s)[v_B]\in\ell_{n_\alpha}(U)$, and the $s$-chart point coincides with the $z$-chart point of coordinate $z=s^{-1}$, i.e. $\ell_{n_\alpha}^{-1}\bigl(u_\alpha(s)n_\alpha[v_B]\bigr)=u_{-\alpha}(-s)[v_B]$. The two charts are each isomorphic to $\mathbb A^1$, contain respectively $eB$ ($z=0$) and $n_\alpha[v_B]$ ($s=0$), meet in $\{z\ne0\}=\{s\ne0\}$, and cover $F$ by [F1]. [F1, F3, F5, algebra]

2.2 The relative cotangent sheaf on the big cell. Since $f(U)\subseteq V$, restriction of relative differentials to the open subscheme $U\subseteq X_B$ over $V\subseteq X_\alpha$ gives $\Omega^1_f|_U=\Omega^1_{U/V}$ with the same universal derivation by [F8]; by step 1.1 and [F8] its global sections are the Kähler module $\Omega_{\mathbb C[x_\beta,z]/\mathbb C[x_\beta]}$ of a polynomial extension in the single variable $z$, which is free of rank one with basis $\mathrm dz$ by [F9]. Hence $\Omega^1_f$ is free of rank one on $U$ with frame $\mathrm dz$. Over the chart $V$ the base-change isomorphism of [F10] applied to $\mathbb A^1\to\operatorname{Spec}\mathbb C$ and $U^-_\alpha\to\operatorname{Spec}\mathbb C$ identifies $\Omega^1_{U/V}$ with the pullback of $\Omega_{\mathbb A^1/\mathbb C}$ along the second projection; the fibre of that projection over the point $u=1$ is $\{1\}\times\mathbb A^1\cong\mathbb A^1$, and restricting the pullback to it returns $\Omega_{\mathbb A^1/\mathbb C}$ on the nose with frame $\mathrm dz$. So the fibre chart $F\cap U$ carries the cotangent sheaf of the affine line with frame $\mathrm dz$, the restriction of the frame of $\Omega^1_f$ over $U$. [F8, F9, F10, step 1.1]

3.1 The canonical equivariant structure and invertibility. For $g\in G$ the left translations on $X_B$ and $X_\alpha$ are automorphisms satisfying $f\circ\ell_g=\ell_g\circ f$ by [F1]; thus they form an automorphism of the arrow $f$, with the base also translated. On affine charts the universal relative derivation sends a function $a$ to $\mathrm da$ modulo differentials pulled back from the base. Since $\ell_g^*$ takes base functions to base functions, its differential induces a canonical $\mathcal O_{X_B}$-linear isomorphism $\ell_g^*\Omega^1_f\to\Omega^1_f$; the inverse comes from $g^{-1}$ and the cocycle law from the chain rule of [F11]. These algebraic isomorphisms give the $G$-equivariant structure, with $g$ acting on local forms by pullback along $\ell_{g^{-1}}$. Moreover the freeness of rank one proved on $U$ in step 2.2 transports along the isomorphisms to each open chart $\ell_g(U)=g\,\sigma_B(U^-)$, and these charts cover $X_B$ because $X_B=G\cdot[v_B]\subseteq G\cdot\bigl(U^-[v_B]\bigr)=\bigcup_{g\in G}\ell_g(U)$ by the transitivity of [F2]. Hence $\Omega^1_f$ is an invertible sheaf of rank one, $\omega_{(G/B)/(G/P_\alpha)}=\det\Omega^1_f=\Omega^1_f$ is a $G$-equivariant line bundle on $X_B$, and its fibre at every point is one-dimensional. [F1, F2, F11, step 2.2]

3.2 The $T$-weight of the fibre at $eB$. The torus $T$ normalizes $U^-$, $U^-_\alpha$ and $U_{-\alpha}$ by [F3], so $\ell_t$ preserves the chart $U$ for every $t\in T$, and by [F3] and the conjugation formula of [F4] its action in the coordinates of step 1.1 is $$\ell_t\bigl(\sigma_B(u\,u_{-\alpha}(z_0))\bigr)=\bigl(tut^{-1}\bigr)\bigl(t\,u_{-\alpha}(z_0)\,t^{-1}\bigr)[v_B]=\sigma_B\bigl(tut^{-1}\cdot u_{-\alpha}\bigl(\alpha(t)^{-1}z_0\bigr)\bigr),$$ because $t[v_B]=[v_B]$. Hence the coordinate function $z$ satisfies $\ell_{t^{-1}}^*(z)=\alpha(t)z$ on $U$, and taking differentials, as is legitimate for the pullback of forms under a morphism and compatible with the universal derivation by [F11], the frame $\mathrm dz$ of step 2.2 satisfies $$t\cdot \mathrm dz=\ell_{t^{-1}}^*(\mathrm dz)=\mathrm d\bigl(\ell_{t^{-1}}^*(z)\bigr)=\alpha(t)\,\mathrm dz .$$ Evaluating at the $T$-fixed point $eB$, where $z=0$, this says that $T$ acts on the one-dimensional fibre $(\Omega^1_f)_{eB}$ by the character $\alpha\in X^*(T)$: the fibre weight is the root $\alpha$. [F3, F4, F11, step 2.2]

4.1 The $B$-character and $\Omega^1_f\cong\mathcal L_{-\alpha}$. By [F2] the stabilizer of $[v_B]$ is $B$, so the $G$-equivariant structure of step 3.1 restricts to an action of $B$ on the one-dimensional fibre $(\Omega^1_f)_{eB}$; this action is algebraic and linear, hence given by a character $\chi\in X^*(B)$ of [F7]. Step 3.2 computes $\chi|_T=\alpha|_T$, and by [F7] every character of $B$ is trivial on $U$ and the restriction $X^*(B)\to X^*(T)$ is an isomorphism, so $\chi$ is the unique character of $B$ extending the root $\alpha$; in particular $\chi(b)=\alpha(b)$ for all $b\in B$. By [F6] the fibre of $\mathcal L_{-\alpha}$ at $eB$ is the $B$-module on which $b$ acts by $(-\alpha)(b)^{-1}=\alpha(b)$, that is, by the same character $\chi$. The fibre functor of [F7] is an equivalence and therefore reflects isomorphism classes: two $G$-equivariant line bundles on $X_B$ whose fibres at $eB$ are isomorphic as $B$-modules are $G$-equivariantly isomorphic, and the isomorphism is unique up to a scalar; hence $\Omega^1_f\cong\mathcal L_{-\alpha}$ as $G$-equivariant line bundles. [F2, F6, F7, step 3.2]

5.1 Restriction to the fibre and its degree. On the $z$-chart the frame $\mathrm dz$ of $\Omega^1_f$ restricts to the fibre as computed in step 2.2. On the $s$-chart, inside the translate $\ell_{n_\alpha}(U)$, the transported frame is $\mathrm dz'$ with $z'=z\circ\ell_{n_\alpha}^{-1}$, since pulling a differential form back along $\ell_{n_\alpha}^{-1}$ and applying $\mathrm d$ to the pulled-back coordinate gives $\mathrm d(z')=\ell_{n_\alpha^{-1}}^*(\mathrm dz)$ by [F11]; by step 2.1 one has $z'\bigl(u_\alpha(s)n_\alpha[v_B]\bigr)=z\bigl(u_{-\alpha}(-s)[v_B]\bigr)=-s$, so on the overlap $z'=-z^{-1}$ and hence $\mathrm dz'=\mathrm d(-z^{-1})=z^{-2}\,\mathrm dz$, using that $z$ is a unit on the overlap and that $\mathrm d(z^{-1})=-z^{-2}\mathrm dz$ holds for the universal derivation localized there by [F8]. Under the identification of $F$ with the two-affine projective line of [F13] given by $U_0\mapsto\{z\}$, $t=z$ and $U_\infty\mapsto\{s\}$, $u=s$, the frames $e_0=\mathrm dz$ and $e_\infty=\mathrm dz'$ satisfy $e_\infty=t^{-2}e_0$ on the overlap, which is exactly the gluing prescription defining $\mathcal O(-2)$ in [F13]; by the uniqueness of gluing [F14] and the well-definedness of the twist index [F13], $\Omega^1_f|_F\cong\mathcal O_{\mathbb P^1}(-2)$, of degree $-2$. The computation is confirmed by the equivariant description: by step 4.1 and [F6], $\Omega^1_f|_F\cong\mathcal L_{-\alpha}|_F\cong\mathcal O(\langle-\alpha,\alpha^\vee\rangle)=\mathcal O(-2)$ has degree $\langle-\alpha,\alpha^\vee\rangle=-2$ since $\langle\alpha,\alpha^\vee\rangle=\alpha(h_\alpha)=2$; the two routes give the same frame transition up to the fixed identifications, so no sign ambiguity remains. For a general fibre $gF=f^{-1}(g[v_\alpha])=\ell_g(F)$ the translation identifies $\Omega^1_f|_{gF}$ with the pullback of $\Omega^1_f|_F$ along an isomorphism of projective lines, so by the invariance of the twist index under isomorphism [F13] the restriction to every fibre is again $\mathcal O(-2)$ of degree $-2$. [F6, F11, F13, F14, step 2.1, step 2.2, step 4.1]

6.1 Conclusion and choice bookkeeping. Steps 2.2 and 3.1 show that $\Omega^1_f$ is an invertible sheaf of rank one with a canonical $G$-equivariant structure, so the relative canonical bundle $\omega_{(G/B)/(G/P_\alpha)}=\det\Omega^1_f=\Omega^1_f$ is a $G$-equivariant line bundle; steps 3.2 and 4.1 compute its fibre character at $eB$ as the root $\alpha$ and conclude the $G$-equivariant isomorphism $\omega_{(G/B)/(G/P_\alpha)}\cong\mathcal L_{-\alpha}$, whose fibre at $eB$ is $\mathbb C_\alpha$; step 5.1 computes the restriction to every fibre as $\mathcal O(-2)$ of degree $\langle-\alpha,\alpha^\vee\rangle=-2$, in agreement with the degree of $\mathcal L_{-\alpha}$ on the fibre. In the degenerate rank-one case $|\Phi^+|=1$, i.e. $G=P_\alpha$, the base $X_\alpha$ is a single point, $U^-_\alpha=1$, the chart $V$ is the whole base, and step 1.1 is the projection $\mathbb A^1\to\operatorname{Spec}\mathbb C$ on the affine chart $U$ of $X_B\cong\mathbb P^1$; steps 2.2–5.1 apply verbatim with $\Omega^1_f=\omega_{X_B}$, the canonical bundle of the projective line. The Axiom of Choice [A1] is assumed in the statement and is inherited through the quotient, torsor, representation-theoretic and differential suppliers behind [F1], [F2], [F7] and [F8]; the proof itself fixes only the two charts of the flag varieties, the root coordinates $z$ and $x_\beta$, and the finitely many root data, making no further choice. The quotient and chart claims used here are supplied by [F1] and [F2], while [F6] and [F7] supply the equivariant line bundle comparison. [A1, F1, F2, F6, F7, F8, step 1.1, step 3.1, step 4.1, step 5.1] ∎
