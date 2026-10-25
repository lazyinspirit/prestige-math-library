---
id: lem-semisimple-rank-one-sl2-root-homomorphism
kind: lemma
title: Rank-one SL2 homomorphism and Weyl representative
status: published
origin: pipeline
landmark: false
deps:
  - lem-semisimple-root-exponential-algebraic-subgroups
  - def-complex-semisimple-algebraic-group-borel-and-flag-variety
  - thm-root-sl-two-triple
  - def-coroot-and-dual-root-system
  - def-axiom-of-choice
  - thm-finite-dimensional-representations-of-sl-two
  - thm-lie-second-fundamental-theorem
  - thm-polar-decomposition
  - thm-higher-dimensional-spheres-are-simply-connected
  - prop-exponential-map-is-natural-for-lie-group-homomorphisms
  - lem-affine-algebraic-group-faithful-rational-representation
  - thm-finite-dimensional-representations-of-sl-two
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (2022)"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: "Chapter 21, especially 21.68-21.91 and 22.17-22.27"
    - title: "Brian Conrad, Reductive Group Schemes"
      url: https://math.stanford.edu/~conrad/papers/luminysga3smf.pdf
      locator: "§1.4, especially Theorem 1.4.12 and Corollary 1.4.13"
---

## Statement

Assume the Axiom of Choice. Let $G$ be the connected simply connected complex
semisimple affine algebraic group with maximal torus $T$ and root system
$\Phi$ fixed in [[def-complex-semisimple-algebraic-group-borel-and-flag-variety]].
Fix a root $\alpha\in\Phi$, a root vector $e_\alpha\in\mathfrak g_\alpha$, and
$f_\alpha\in\mathfrak g_{-\alpha}$ with
$[e_\alpha,f_\alpha]=h_\alpha$, $[h_\alpha,e_\alpha]=2e_\alpha$,
$[h_\alpha,f_\alpha]=-2f_\alpha$ as in [[thm-root-sl-two-triple]]. Write
$D=\{diag(u,u^{-1}):u\in\mathbb C^\times\}\subseteq SL_2(\mathbb C)$,
$w=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ and $SL_2=SL_2(\mathbb C)$.

There is a morphism of algebraic groups
$\varphi_\alpha:SL_2\to G$ such that:

(i) its differential at the identity is the Lie algebra isomorphism
$\mathfrak{sl}_2\to\langle e_\alpha,f_\alpha,h_\alpha\rangle$ sending the
standard basis $e,f,h$ to $e_\alpha,f_\alpha,h_\alpha$;

(ii) $\varphi_\alpha$ maps the standard unipotent subgroups isomorphically onto
the root subgroups, $\varphi_\alpha\begin{pmatrix}1&z\\0&1\end{pmatrix}=u_\alpha(z)$
and $\varphi_\alpha\begin{pmatrix}1&0\\z&1\end{pmatrix}=u_{-\alpha}(z)$ for all
$z\in\mathbb C$, and its kernel is contained in $\{\pm I\}$;

(iii) $\varphi_\alpha$ maps the diagonal torus onto the image of the coroot
$\alpha^\vee:\mathbb C^\times\to T$, $\alpha^\vee(u):=\varphi_\alpha(diag(u,u^{-1}))$,
so that $\alpha^\vee$ is a morphism of algebraic groups whose differential at
$1$ satisfies $d\alpha^\vee_1(1)=h_\alpha$, and for every character
$\lambda\in X^*(T)$ and $u\in\mathbb C^\times$ one has
$\lambda(\alpha^\vee(u))=u^{\langle\lambda,\alpha^\vee\rangle}$ with
$\langle\lambda,\alpha^\vee\rangle:=\lambda(h_\alpha)$ the pairing of
[[def-coroot-and-dual-root-system]];

(iv) $n_\alpha:=\varphi_\alpha(w)$ lies in $N_G(T)$ and acts on $T$ by the
reflection $s_\alpha$: $\operatorname{Ad}(n_\alpha)|_{\mathfrak h}=s_\alpha$,
equivalently $\lambda(n_\alpha tn_\alpha^{-1})=(s_\alpha\lambda)(t)$ for all
$\lambda\in X^*(T)$, $t\in T$; moreover $n_\alpha^2=\varphi_\alpha(-I)$ lies in
$T$ and acts trivially on $T$.

## Facts & Assumptions

**Given:** the group $G$, its torus $T$, a root $\alpha$ with the sl2-triple
$(e_\alpha,f_\alpha,h_\alpha)$ of [F1], and the root subgroups $U_{\pm\alpha}$
of [F2].

[F1] For a root $\alpha$ there are $e_\alpha\in\mathfrak g_\alpha$,
$f_\alpha\in\mathfrak g_{-\alpha}$ with $[e_\alpha,f_\alpha]=h_\alpha$,
$[h_\alpha,e_\alpha]=2e_\alpha$, $[h_\alpha,f_\alpha]=-2f_\alpha$, and the span
of the three is a copy of $\mathfrak{sl}_2$. ([[thm-root-sl-two-triple]])

[F2] For each root $\beta$ and nonzero $e_\beta\in\mathfrak g_\beta$ there is an
isomorphism of algebraic groups $u_\beta:\mathbb G_a\to U_\beta$,
$u_\beta(z)=\exp_G(ze_\beta)$, onto a closed one-dimensional subgroup with
$\operatorname{Lie}U_\beta=\mathfrak g_\beta$.
([[lem-semisimple-root-exponential-algebraic-subgroups]])

[F3] For a reduced crystallographic root system the coroot of $\alpha$ is
$\alpha^\vee=2\alpha/(\alpha,\alpha)$, and for roots $\alpha,\beta$ one has
$(\alpha^\vee,\beta)=2(\beta,\alpha)/(\alpha,\alpha)$.
([[def-coroot-and-dual-root-system]])

[F4] If $G$ is a connected simply connected real Lie group, $H$ a real Lie
group and $\phi:\operatorname{Lie}(G)\to\operatorname{Lie}(H)$ a Lie algebra
homomorphism, then there is a unique smooth homomorphism $F:G\to H$ with
$dF_e=\phi$. ([[thm-lie-second-fundamental-theorem]])

[F5] Every invertible complex matrix is a product $T=SU$ of a unitary matrix
$S$ and a positive-definite Hermitian $U=\sqrt{T^*T}$, and
$T\mapsto S$ is continuous on $GL_n(\mathbb C)$. ([[thm-polar-decomposition]])

[F6] The unit sphere $S^n\subseteq\mathbb R^{n+1}$ is simply connected for
$n\ge2$. ([[thm-higher-dimensional-spheres-are-simply-connected]])

[F7] If $F:G\to H$ is a homomorphism of finite-dimensional real Lie groups,
then $F(\exp_GX)=\exp_H(dF_eX)$ for all $X\in\operatorname{Lie}G$.
([[prop-exponential-map-is-natural-for-lie-group-homomorphisms]])

[F8] Every finite-type affine algebraic group over $\mathbb C$ admits a
finite-dimensional rational representation whose comorphism is surjective.
([[lem-affine-algebraic-group-faithful-rational-representation]])

[F9] On every finite-dimensional complex $\mathfrak{sl}_2$-module the standard Cartan element $h$ is diagonalisable with integer eigenvalues. ([[thm-finite-dimensional-representations-of-sl-two]])

## Proof

1.1 Identify $\langle e_\alpha,f_\alpha,h_\alpha\rangle$ with $\mathfrak{sl}_2$ by $e\mapsto e_\alpha$, $f\mapsto f_\alpha$, $h\mapsto h_\alpha$ using [F1]; this is a Lie algebra isomorphism onto its image, so the resulting inclusion $\phi:\mathfrak{sl}_2\to\mathfrak g$ is injective. [F1, given, construct]

1.2 The group $SL_2(\mathbb C)$ is connected and simply connected: it is connected as an irreducible algebraic variety, and the map $g\mapsto S$ of the polar decomposition [F5] retracts $SL_2(\mathbb C)$ onto $SU_2$ by $g_t=S\sqrt{g^*g}^{\,t}$, which is continuous in $(g,t)$ and fixes $SU_2$; the determinant-one positive-definite factors are contractible by the path $U^t=\exp(t\log U)$ (the Hermitian logarithm has trace zero), so the inclusion $SU_2\hookrightarrow SL_2(\mathbb C)$ is a homotopy equivalence. The parametrisation $\begin{pmatrix}a&b\\-\bar b&\bar a\end{pmatrix}\mapsto(a,b)$ identifies $SU_2$ with the unit sphere $S^3\subseteq\mathbb C^2\cong\mathbb R^4$, which is simply connected by [F6]; hence $SL_2(\mathbb C)$ is simply connected. [F5, F6, given]

2.1 By [F4] applied to the real Lie groups $SL_2(\mathbb C)$ and $G(\mathbb C)$ (whose Lie algebras are $\mathfrak{sl}_2$ and $\mathfrak g$ as real Lie algebras) and the homomorphism $\phi$ of step 1.1, there is a unique smooth homomorphism $\Phi:SL_2(\mathbb C)\to G(\mathbb C)$ with $d\Phi_e=\phi$; independently, applying [F4] to $\mathfrak{sl}_2\to\mathfrak{gl}(V)$ along a faithful representation $G\hookrightarrow GL(V)$ of [F8] shows that $\Phi$ is the restriction of the corresponding linear integration, hence holomorphic. [F4, F8, step 1.1, step 1.2]

3.1 First prove regularity on the diagonal, rather than using it in a Gauss chart before it exists. Choose the faithful rational closed immersion $\rho:G\hookrightarrow GL(V)$ of [F8]. Restrict $d\rho\circ\phi$ to the $\mathfrak{sl}_2$-module $V$ and decompose $V=\bigoplus_{m\in\mathbb Z}V_m$ into $h$-eigenspaces by [F9]. For $u=\exp(z)\in\mathbb C^\times$, exponential naturality [F7] gives $\rho\Phi(\operatorname{diag}(u,u^{-1}))|_{V_m}=\exp(zm)\operatorname{id}=u^m\operatorname{id}$; the integer exponents make this independent of the logarithm of $u$. Thus in a weight basis the matrix entries of $\rho\Phi|_D$ are Laurent monomials, so $\Phi|_D$ is an algebraic morphism because $G$ is a closed subscheme of $GL(V)$. On $d\ne0$ the Gauss decomposition is $g=u_+(b/d)\operatorname{diag}(1/d,d)u_-(c/d)$; on $a\ne0$ it is $g=u_-(c/a)\operatorname{diag}(a,a^{-1})u_+(b/a)$. On the remaining chart $b\ne0$ one has $g=u_-(d/b)w\operatorname{diag}(-1/b,-b)u_-(a/b)$, as direct matrix multiplication using $ad-bc=1$ verifies. These three principal opens cover $SL_2$. By [F2], [F7] and the diagonal regularity, the expression for $\Phi$ on each chart is a product of algebraic morphisms and the fixed point $\Phi(w)$; their agreement follows from the already defined smooth homomorphism $\Phi$. Hence $\Phi$ is a morphism of algebraic groups, denoted $\varphi_\alpha$. [F2, F7, F8, F9, step 2.1, construct]

3.2 Item (i) is step 2.1, and item (ii) follows: for $X=e$ the exponential series gives $\Phi\left(\begin{pmatrix}1&z\\0&1\end{pmatrix}\right)=\Phi(\exp_{\mathfrak{sl}_2}(ze))=\exp_G(ze_\alpha)=u_\alpha(z)$ by [F2], [F7], and similarly for the transpose with $f$ and $f_\alpha$; for $g\in\ker\Phi$, differentiating $\Phi(gxg^{-1})=\Phi(x)$ at $x=1$ gives $d\Phi_e(\operatorname{Ad}(g)X)=d\Phi_e(X)$ for every $X\in\mathfrak{sl}_2$; since $d\Phi_e$ is injective by step 1.1, $\operatorname{Ad}(g)$ fixes every $X\in\mathfrak{sl}_2$; thus $g\in\ker\operatorname{Ad}=\{\pm I\}$, the last equality being the standard centre of $SL_2(\mathbb C)$, so $\ker\Phi\subseteq\{\pm I\}$. [F2, F7, step 2.1]

3.3 Item (iii) is a definition plus one computation: $\alpha^\vee=\Phi|_{D}$ is a morphism of algebraic groups into $T$: the complex exponential map $z\mapsto\operatorname{diag}(e^z,e^{-z})$ is surjective onto $D$, and exponential naturality [F7] for the inclusion $T\hookrightarrow G$ shows $\Phi(\operatorname{diag}(e^z,e^{-z}))=\exp_G(zh_\alpha)=\exp_T(zh_\alpha)\in T$. Its differential satisfies $d\alpha^\vee_1(1)=d\Phi_e(h)=h_\alpha$, since the curve $u\mapsto diag(u,u^{-1})$ has derivative $h$ at $1$; for a character $\lambda\in X^*(T)$ the composite $\lambda\circ\alpha^\vee:\mathbb C^\times\to\mathbb C^\times$ is a morphism of algebraic groups, hence of the form $u\mapsto u^m$ for a unique integer $m$, and differentiating at $u=1$ gives $m=d\lambda(h_\alpha)$, where $d\lambda:\mathfrak h\to\mathbb C$ is the differential of the character; writing $\langle\lambda,\alpha^\vee\rangle=\lambda(h_\alpha)=d\lambda(h_\alpha)$ gives $\lambda(\alpha^\vee(u))=u^{\langle\lambda,\alpha^\vee\rangle}$. [F3, step 2.1]

4.1 In $SL_2$ the stated Weyl matrix factors as $w=u_+(-1)u_-(1)u_+(-1)$, as direct multiplication shows. Hence $n_\alpha=\varphi_\alpha(w)=u_\alpha(-1)u_{-\alpha}(1)u_\alpha(-1)$. For $H\in\mathfrak h$ write $H=H_0+\frac{\alpha(H)}2h_\alpha$, where $[H_0,e_\alpha]=[H_0,f_\alpha]=0$ by the sl2 relations of [F1]. Therefore all three root-subgroup factors centralize $H_0$. The matrix $w$ conjugates $h$ to $-h$ in $\mathfrak{sl}_2$, so $n_\alpha$ sends $h_\alpha$ to $-h_\alpha$ under the integrated homomorphism. Consequently $\operatorname{Ad}(n_\alpha)(H)=H_0-\frac{\alpha(H)}2h_\alpha=H-\alpha(H)h_\alpha=s_\alpha(H)$. [F1, F2, step 3.1, step 3.2, algebra]

5.1 Hence $n_\alpha\in N_G(T)$: $\operatorname{Ad}(n_\alpha)$ preserves $\mathfrak h$ by step 4.1, so conjugation by $n_\alpha$ maps the closed connected subgroup $T$ to a closed connected subgroup with Lie algebra $\mathfrak h$ and the same dimension, which must be $T$ itself; moreover $\operatorname{Ad}(n_\alpha)|_{\mathfrak h}=s_\alpha$ is the reflection of the root system on $\mathfrak h$, corresponding dually to the reflection $s_\alpha$ on $X^*(T)$, so $\lambda(n_\alpha tn_\alpha^{-1})=(s_\alpha\lambda)(t)$ for every character $\lambda$. Finally $w^2=-I$ gives $n_\alpha^2=\varphi_\alpha(-I)=\exp_G(\pi h_\alpha)\in T$, an element of $T$ acting trivially on $T$, so the square of the Weyl representative is central in $T$ rather than a new condition. [F1, F7, step 3.3, step 4.1]

6.1 Collecting the preceding steps gives the morphism $\varphi_\alpha$ of the statement with the differential of (i), the root subgroup identifications and kernel bound of (ii), the coroot and character pairing of (iii) and the Weyl representative of (iv). The Axiom of Choice enters through [F4] and [F7], whose countable-choice interfaces are inherited from AC, and through the published root and highest-weight suppliers behind [F1] and [F9]; [F8] is explicitly choice-free; the only selections made in the argument are the fixed $e_\alpha,f_\alpha$ and the finite data of the three affine charts. [F1, F2, F4, F7, F8, step 3.1, step 5.1, discharge-construct] ∎
