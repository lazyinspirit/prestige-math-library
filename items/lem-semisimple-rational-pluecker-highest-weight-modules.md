---
id: lem-semisimple-rational-pluecker-highest-weight-modules
kind: lemma
title: Rational highest-weight modules from adjoint Plücker vectors
status: draft
origin: pipeline
landmark: false
deps:
  - def-complex-semisimple-algebraic-group-borel-and-flag-variety
  - lem-semisimple-borel-root-factorization
  - lem-semisimple-root-exponential-algebraic-subgroups
  - lem-semisimple-minimal-parabolic-root-subgroup
  - lem-affine-algebraic-group-faithful-rational-representation
  - def-conjugation-and-the-adjoint-representation-of-a-lie-group
  - prop-adjoint-is-a-smooth-lie-group-representation
  - thm-the-differential-of-adjoint-is-ad
  - prop-adjoint-exponential-identity
  - prop-exponential-map-is-natural-for-lie-group-homomorphisms
  - cor-the-exponential-map-is-a-local-diffeomorphism-at-zero
  - prop-symmetric-and-exterior-powers-are-lie-algebra-representations
  - thm-increasing-basis-wedges-form-a-basis
  - thm-exterior-powers-are-functorial
  - def-weight-and-weight-space-of-a-lie-algebra-representation
  - def-highest-weight-vector-and-highest-weight-module
  - def-root-and-root-space-relative-to-a-cartan-subalgebra
  - thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional
  - thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates
  - def-positive-system-and-base-of-simple-roots
  - thm-root-reflections-preserve-the-root-set
  - def-weyl-vector-rho
  - prop-weyl-vector-is-the-sum-of-fundamental-weights
  - def-integral-dominant-and-strictly-dominant-weights
  - def-partial-order-on-weights
  - lem-highest-weight-modules-have-weights-below-the-top-weight
  - prop-a-finite-dimensional-irreducible-module-is-generated-by-any-highest-weight-vector
  - prop-the-highest-weight-space-of-an-irreducible-module-is-one-dimensional
  - thm-simple-highest-weight-modules-are-classified-by-their-highest-weight
  - thm-highest-weight-classification-of-finite-dimensional-irreducible-representations
  - thm-weyls-complete-reducibility-theorem
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
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
---

## Statement

Assume the Axiom of Choice. Let $G$ be the connected simply connected complex
semisimple affine algebraic group with maximal torus $T$, root system $\Phi$,
positive system $\Phi^+$ with simple roots $\Delta$, Borel subgroup $B$ and
unipotent radical $U$ fixed in
[[def-complex-semisimple-algebraic-group-borel-and-flag-variety]], and write
$\mathfrak g=\operatorname{Lie}G=\mathfrak h\oplus\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha$
with $\mathfrak h=\operatorname{Lie}T$ and
$\mathfrak b=\operatorname{Lie}B=\mathfrak h\oplus\mathfrak n^+$. Let
$\rho=\tfrac12\sum_{\alpha\in\Phi^+}\alpha$ be the Weyl vector
([[def-weyl-vector-rho]]). Fix a simple root $\alpha\in\Delta$ and let
$\mathfrak p_\alpha=\mathfrak b\oplus\mathfrak g_{-\alpha}$ be the Lie algebra
of the minimal parabolic $P_\alpha$ constructed in
[[lem-semisimple-minimal-parabolic-root-subgroup]], so that
$\dim\mathfrak b=\dim\mathfrak h+|\Phi^+|$ and
$\dim\mathfrak p_\alpha=\dim\mathfrak b+1$. Put
Choose an ordered basis $h_1,\ldots,h_n$ of $\mathfrak h$, a nonzero vector
$e_\gamma\in\mathfrak g_\gamma$ for each $\gamma\in\Phi^+$, an ordering
$\gamma_1,\ldots,\gamma_m$ of $\Phi^+$, and a nonzero
$f_\alpha\in\mathfrak g_{-\alpha}$. Define the nonzero vectors
$$v_B:=h_1\wedge\cdots\wedge h_n\wedge e_{\gamma_1}\wedge\cdots\wedge e_{\gamma_m}\in\bigwedge^{\dim\mathfrak b}\mathfrak g,\qquad v_\alpha:=v_B\wedge f_\alpha\in\bigwedge^{\dim\mathfrak p_\alpha}\mathfrak g.$$
Their lines are the determinant lines of $\mathfrak b$ and $\mathfrak p_\alpha$;
different choices multiply the displayed vectors by nonzero scalars.
Then:

(i) $v_B\neq0$ spans the entire $2\rho$-weight space of the $\mathfrak g$-module
$\bigwedge^{\dim\mathfrak b}\mathfrak g$, the line $\mathbb C v_B$ is $B$-stable
with $T$-weight $2\rho$, and the smallest $G$-stable subspace
$W_B\subseteq\bigwedge^{\dim\mathfrak b}\mathfrak g$ containing $v_B$ is a
finite-dimensional rational subrepresentation of the exterior power
$\bigwedge^{\dim\mathfrak b}\operatorname{Ad}$ of the adjoint representation
whose differentiated $\mathfrak g$-module is the irreducible highest weight
module $L(2\rho)$; moreover $\mathbb C v_B$ is the only $B$-stable line in
$W_B$.

(ii) Likewise $v_\alpha\neq0$ spans the entire $(2\rho-\alpha)$-weight space of
$\bigwedge^{\dim\mathfrak p_\alpha}\mathfrak g$, the line
$\mathbb C v_\alpha$ is $B$-stable with $T$-weight $2\rho-\alpha$, and the
smallest $G$-stable subspace
$W_\alpha\subseteq\bigwedge^{\dim\mathfrak p_\alpha}\mathfrak g$ containing
$v_\alpha$ is a finite-dimensional rational subrepresentation of
$\bigwedge^{\dim\mathfrak p_\alpha}\operatorname{Ad}$ whose differentiated
$\mathfrak g$-module is $L(2\rho-\alpha)$, with $\mathbb C v_\alpha$ the only
$B$-stable line in $W_\alpha$.

## Facts & Assumptions

**Given:** the group $G$ with the root data, Borel $B$ and unipotent radical $U$ of [F1] and [F2], the simple root $\alpha$ and minimal parabolic $P_\alpha$ of [F3], the Weyl vector $\rho$ of [F10], a faithful rational representation $\rho_V:G\to GL(V)$ with closed immersion as in [F6], a basis $h_1,\dots,h_n$ of $\mathfrak h$, and nonzero root vectors $e_\gamma\in\mathfrak g_\gamma$ for every $\gamma\in\Phi$.

[F1] $G$ is a connected simply connected complex semisimple affine algebraic group, $T$ is a maximal torus with $\mathfrak h=\operatorname{Lie}T$ a Cartan subalgebra, and $\mathfrak g=\mathfrak h\oplus\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha$ with $\mathfrak g_\alpha$ the root space of the root $\alpha$ in the sense of [[def-root-and-root-space-relative-to-a-cartan-subalgebra]]; $\Phi$ is a reduced crystallographic root system, $\Phi^+$ is a positive system with base $\Delta$ ([[def-positive-system-and-base-of-simple-roots]]), $\mathfrak n^\pm=\bigoplus_{\alpha\in\Phi^\pm}\mathfrak g_\alpha$ and $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$, and $B$ is the closed connected subgroup with $\operatorname{Lie}B=\mathfrak b$ whose unipotent radical is $U$. ([[def-complex-semisimple-algebraic-group-borel-and-flag-variety]])

[F2] $U=\prod_{\beta\in\Phi^+}U_\beta$ in every height-compatible order, the product map is an isomorphism of varieties onto the closed connected unipotent subgroup $U$, $B=T\ltimes U$ is closed connected solvable with $\operatorname{Lie}B=\mathfrak b$, and $T$ normalizes $U$. Moreover $u_\beta:\mathbb G_a\to U_\beta\subseteq G$, $u_\beta(z)=\exp_G(ze_\beta)$, is an isomorphism of algebraic groups onto a closed connected one-dimensional subgroup with $\operatorname{Lie}U_\beta=\mathfrak g_\beta$, the curve $z\mapsto\exp_G(ze_\beta)$ is given by polynomial matrix coefficients in every faithful matrix realization of $G$, and $t\,u_\beta(z)\,t^{-1}=u_\beta(\beta(t)z)$ for all $t\in T$. ([[lem-semisimple-borel-root-factorization]], [[lem-semisimple-root-exponential-algebraic-subgroups]])

[F3] $P_\alpha$ is a closed connected algebraic subgroup containing $B$ and $U_{-\alpha}$, it satisfies $P_\alpha=B\sqcup Bn_\alpha B$, and $\operatorname{Lie}P_\alpha=\mathfrak b\oplus\mathfrak g_{-\alpha}$ with $\dim P_\alpha=\dim B+1$. ([[lem-semisimple-minimal-parabolic-root-subgroup]])

[F4] For $g\in G$ conjugation $C_g:G\to G$, $C_g(h)=ghg^{-1}$, is an automorphism of Lie groups with $d(C_g)_e=\operatorname{Ad}_g$; the adjoint map $\operatorname{Ad}:G\to GL(\mathfrak g)$ is a group homomorphism, $d(\operatorname{Ad})_e=\operatorname{ad}$, and $\operatorname{Ad}_{\exp_GX}=e^{\operatorname{ad}_X}$ for every $X\in\mathfrak g$. ([[def-conjugation-and-the-adjoint-representation-of-a-lie-group]], [[prop-adjoint-is-a-smooth-lie-group-representation]], [[thm-the-differential-of-adjoint-is-ad]], [[prop-adjoint-exponential-identity]])

[F5] If $F:G\to H$ is a homomorphism of finite-dimensional real Lie groups, then $F(\exp_GX)=\exp_H(dF_eX)$ for every $X\in\operatorname{Lie}G$. ([[prop-exponential-map-is-natural-for-lie-group-homomorphisms]])

[F6] Every finite-type affine algebraic group over $\mathbb C$ admits a finite-dimensional rational representation $\rho_V:G\to GL(V)$ whose induced morphism is a closed immersion; a finite-dimensional rational representation of $G$ is a finite-dimensional $\mathbb C$-vector space with a linear coaction $V\to A\otimes_{\mathbb C}V$, equivalently a homomorphism of group functors $G\to GL(V)$ given by a morphism of affine schemes. ([[lem-affine-algebraic-group-faithful-rational-representation]])

[F7] If $V$ is a representation of $\mathfrak g$, the diagonal tensor action on $V^{\otimes n}$ descends to representations on $S^n(V)$ and $\Lambda^n(V)$ for every $n\ge0$; for an ordered basis $x_1,\dots,x_N$ of $V$ the wedges $x_{i_1}\wedge\cdots\wedge x_{i_k}$ over increasing index sets form a basis of $\Lambda^kV$; and exterior powers are functorial, $\Lambda^k(\operatorname{id}_V)=\operatorname{id}_{\Lambda^kV}$ and $\Lambda^k(S\circ T)=\Lambda^kS\circ\Lambda^kT$. ([[prop-symmetric-and-exterior-powers-are-lie-algebra-representations]], [[thm-increasing-basis-wedges-form-a-basis]], [[thm-exterior-powers-are-functorial]])

[F8] For a representation $V$ of $\mathfrak g$ the weight space of $\mu\in\mathfrak h^*$ is $V_\mu=\{v:H\cdot v=\mu(H)v\text{ for all }H\in\mathfrak h\}$, a nonzero vector of $V_\mu$ is a weight vector of weight $\mu$, and a **highest weight vector** is a nonzero $v\in V_\lambda$ with $\mathfrak n^+\cdot v=0$; a highest weight module of highest weight $\lambda$ is a representation generated as a $\mathfrak g$-module by such a vector, and the subrepresentation generated by $v$ is $U(\mathfrak g)v$. ([[def-weight-and-weight-space-of-a-lie-algebra-representation]], [[def-highest-weight-vector-and-highest-weight-module]])

[F9] Every root space $\mathfrak g_\gamma$ with $\gamma\in\Phi$ is one-dimensional, $\mathfrak g_0=\mathfrak h$, and $[H,x]=\gamma(H)x$ for $H\in\mathfrak h$, $x\in\mathfrak g_\gamma$; the simple roots form a basis of the positive system and every root has simple-root coordinates of one sign, every positive root being a sum of simple roots with nonnegative integer coefficients; and the reflection $s_\beta$ of a simple root preserves $\Phi$. ([[thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional]], [[def-root-and-root-space-relative-to-a-cartan-subalgebra]], [[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]], [[thm-root-reflections-preserve-the-root-set]])

[F10] $\rho=\tfrac12\sum_{\gamma\in\Phi^+}\gamma=\sum_{i=1}^r\omega_i$, so $\langle\rho,\beta^\vee\rangle=1$ for every simple root $\beta$, and $\lambda\in\mathfrak h^*$ is dominant integral exactly when $\langle\lambda,\beta^\vee\rangle\in\mathbb Z_{\ge0}$ for every simple root $\beta$. ([[prop-weyl-vector-is-the-sum-of-fundamental-weights]], [[def-integral-dominant-and-strictly-dominant-weights]])

[F11] Every finite-dimensional representation of $\mathfrak g$ is a direct sum of irreducible submodules; every highest weight vector of a finite-dimensional irreducible module generates it, and its highest weight space is one-dimensional; if $V=U(\mathfrak g)v$ with $v$ of weight $\lambda$ then every weight of $V$ is $\lambda-\sum_in_i\alpha_i$ with $n_i\in\mathbb Z_{\ge0}$, so that every weight of $V$ is $\le\lambda$, and $V_\lambda=\mathbb C v$; the root order $\le$ on $\mathfrak h^*$ is a partial order; two finite-dimensional simple highest weight modules are isomorphic if and only if their highest weights agree; and for every dominant integral $\lambda$ there is a finite-dimensional irreducible highest weight module $L(\lambda)$ of highest weight $\lambda$. ([[thm-weyls-complete-reducibility-theorem]], [[prop-a-finite-dimensional-irreducible-module-is-generated-by-any-highest-weight-vector]], [[prop-the-highest-weight-space-of-an-irreducible-module-is-one-dimensional]], [[lem-highest-weight-modules-have-weights-below-the-top-weight]], [[def-partial-order-on-weights]], [[thm-simple-highest-weight-modules-are-classified-by-their-highest-weight]], [[thm-highest-weight-classification-of-finite-dimensional-irreducible-representations]])

[F12] The exponential map of a finite-dimensional real Lie group restricts to a diffeomorphism from an open neighborhood of $0$ in the Lie algebra onto an open neighborhood of the identity. ([[cor-the-exponential-map-is-a-local-diffeomorphism-at-zero]])

[F13] The Axiom of Choice is [[def-axiom-of-choice]]; it supplies the countable-choice interfaces of [F12] and of the Lie-group suppliers of [F4].

## Proof

1.1 Identify $G$ with a closed subgroup scheme of $GL(V)$ by [F6]. Then $\mathfrak g\subseteq\mathfrak{gl}(V)=\operatorname{End}(V)$, and for $g\in G$ the conjugation $C_g$ is the restriction to $G$ of the ambient conjugation $c_g:GL(V)\to GL(V)$, $c_g(u)=gug^{-1}$, which is given by polynomial formulas in the matrix entries of $g,g^{-1},u$. For $X\in\mathfrak{gl}(V)$ the matrix exponential satisfies $g\exp(tX)g^{-1}=\exp(t\,gXg^{-1})$, which is [F5] applied to the automorphism $c_g$ of $GL(V)$; differentiating at $t=0$ gives $d(c_g)_IX=gXg^{-1}$, so by [F4] $$\operatorname{Ad}_g(X)=d(C_g)_eX=gXg^{-1}\qquad(X\in\mathfrak g).$$ Hence $(g,X)\mapsto\operatorname{Ad}_g(X)$ is the restriction of the morphism $GL(V)\times\mathfrak{gl}(V)\to\mathfrak{gl}(V)$ to the closed subvariety $G\times\mathfrak g$, so $\operatorname{Ad}:G\to GL(\mathfrak g)$ is a morphism of varieties, and by [F7] so is $g\mapsto\bigwedge^k\operatorname{Ad}_g$ for every $k$, a homomorphism of abstract groups by [F4]; thus $\bigwedge^k\mathfrak g$ is a rational representation of $G$ in the sense of [F6]. [F4, F5, F6, F7]

1.2 For every $u\in U$ the operator $\operatorname{Ad}_u$ on $\mathfrak g$ is unipotent. Indeed, $z\mapsto u_\beta(z)=\exp_G(ze_\beta)$ has polynomial matrix entries in the faithful matrix realization of [F2], so $\sum_{j\ge0}z^je_\beta^j/j!$ is a polynomial in $z$ and $e_\beta\in\mathfrak{gl}(V)$ is nilpotent; the operators $X\mapsto e_\beta X$ and $X\mapsto Xe_\beta$ on $\mathfrak{gl}(V)$ commute and are nilpotent, so their difference induces the nilpotent operator $\operatorname{ad}_{e_\beta}$ on the invariant subspace $\mathfrak g$, and by [F4], $\operatorname{Ad}_{u_\beta(z)}=\exp(z\operatorname{ad}_{e_\beta})$ is unipotent. To justify the product, order the finite adjoint weights by a linear functional positive on every positive root. Each $\operatorname{ad}_{e_\beta}$, $\beta>0$, strictly raises this common weight filtration, so every $\operatorname{Ad}_{u_\beta(z)}$ is upper triangular with diagonal entries $1$ in one weight-compatible basis. Their product is upper triangular with the same diagonal and therefore unipotent. The same common filtration restricts to the invariant subspaces $\mathfrak b$ and $\mathfrak p_\alpha$. [F2, F4]

1.3 Let $n=\dim\mathfrak h$ and $m=|\Phi^+|$, so $\dim\mathfrak b=n+m$ by [F1] and $\dim\mathfrak p_\alpha=n+m+1$ by [F3]. By [F9] the adjoint action of $\mathfrak h$ has weights $0$ on $\mathfrak h$ and $\gamma$ on the one-dimensional space $\mathfrak g_\gamma$; hence the $n+m$ vectors $h_1,\dots,h_n,e_{\gamma_1},\dots,e_{\gamma_m}$ (the positive roots in any order) are a basis of $\mathfrak b$ of $\mathfrak h$-eigenvectors, and $$\mathbb C v_B=\textstyle\bigwedge^{n+m}\mathfrak b,\qquad H\cdot v_B=\Bigl(\sum_{\gamma\in\Phi^+}\gamma\Bigr)(H)\,v_B=2\rho(H)v_B \quad(H\in\mathfrak h)$$ by [F8] and [F10]. Likewise $\mathfrak p_\alpha=\mathfrak b\oplus\mathfrak g_{-\alpha}$ is a direct sum of $\mathfrak h$-stable subspaces by [F3] and [F9], and with $0\neq f_\alpha\in\mathfrak g_{-\alpha}$ one has $\bigwedge^{n+m+1}\mathfrak p_\alpha=\mathbb C\,(v_B\wedge f_\alpha)$, so $H\cdot v_\alpha=(2\rho-\alpha)(H)v_\alpha$ for all $H\in\mathfrak h$. [F1, F3, F8, F9, F10]

1.4 The $2\rho$-weight space of $\bigwedge^{n+m}\mathfrak g$ is $\mathbb C v_B$. Extend $h_1,\dots,h_n,e_{\gamma}$ $(\gamma\in\Phi^+)$ by $f_{\gamma'}=e_{-\gamma'}$ $(\gamma'\in\Phi^+)$ to a basis of $\mathfrak g$ of $\mathfrak h$-eigenvectors of weights $0,\gamma,-\gamma'$; by [F7] the wedges over $(n+m)$-element index sets $I$ form a basis of $\bigwedge^{n+m}\mathfrak g$ of $\mathfrak h$-eigenvectors of weight $\lambda_I=\sum_{i\in I}\mu_i$. Let $P\subseteq\Phi^+$ and $N\subseteq\Phi^+$ be the sets of positive and negated negative roots selected by $I$. If $\lambda_I=2\rho=\sum_{\gamma\in\Phi^+}\gamma$, then $$\sum_{\gamma\in\Phi^+\setminus P}\gamma+\sum_{\gamma\in N}\gamma=0 .$$ Both sums are sums of positive roots, hence nonnegative integral combinations of simple roots by [F9], so both are $0$; since a positive root has a nonzero coefficient at some simple root, this forces $\Phi^+\setminus P=N=\emptyset$. Thus $I$ is exactly the set of the $n$ Cartan indices and the $m$ positive roots, so $e_I=\pm v_B$ and the weight space is one-dimensional spanned by $v_B$. [F7, F9]

1.5 Similarly the $(2\rho-\alpha)$-weight space of $\bigwedge^{n+m+1}\mathfrak g$ is $\mathbb C v_\alpha$. For an index set $I$ of size $n+m+1$ the weight condition reads $$\sum_{\gamma\in\Phi^+\setminus P}\gamma+\sum_{\gamma\in N}\gamma=\alpha .$$ By [F9] both sums are nonnegative integral combinations of simple roots whose total is the simple root $\alpha$, so they equal $c\alpha$ and $d\alpha$ with $c,d\in\mathbb Z_{\ge0}$ and $c+d=1$. If $c=1$, then the first sum equals $\alpha$, which forces $\Phi^+\setminus P=\{\alpha\}$ (a sum of distinct positive roots is a simple root only when it is that root), so $|I|=(m-1)+0+n<n+m+1$, a contradiction. Hence $c=0$ and $d=1$: $P=\Phi^+$, $N=\{\alpha\}$, and the cardinality of $I$ forces all $n$ Cartan indices to be selected. Thus $e_I=\pm v_\alpha$ and the weight space is one-dimensional spanned by $v_\alpha$. [F7, F9]

1.6 The weights $2\rho$ and $2\rho-\alpha$ are dominant integral: $\langle 2\rho,\beta^\vee\rangle=2\langle\rho,\beta^\vee\rangle=2\in\mathbb Z_{\ge0}$ for every simple root $\beta$ by [F10]; and for $\beta\neq\alpha$ simple one has $\langle\alpha,\beta^\vee\rangle\le0$, since otherwise $s_\beta(\alpha)=\alpha-\langle\alpha,\beta^\vee\rangle\beta$ would be a root by [F9] whose $\alpha$-coordinate is $1>0$ and whose $\beta$-coordinate is negative, contradicting the one-sign property of [F9]. Hence $\langle2\rho-\alpha,\alpha^\vee\rangle=2-2=0$ and $\langle2\rho-\alpha,\beta^\vee\rangle=2-\langle\alpha,\beta^\vee\rangle\ge2>0$ for $\beta\neq\alpha$, so $2\rho-\alpha$ is dominant integral by [F10]. [F9, F10]

2.1 The differentiated action on $\bigwedge^k\mathfrak g$ is $X\mapsto\bigwedge^k\operatorname{ad}_X$: for $B\in\mathfrak{gl}(V)$ one has $(I+sB)^{\wedge k}=I+s\bigwedge^kB+O(s^2)$ in the matrix algebra, since on a decomposable wedge the coefficient of $s$ is $\sum_ix_1\wedge\cdots\wedge Bx_i\wedge\cdots\wedge x_k=(\bigwedge^kB)(x_1\wedge\cdots\wedge x_k)$, so the chain rule with $B=\operatorname{ad}_X$ gives $$\frac{d}{dt}\Big|_{t=0}\bigwedge^k\operatorname{Ad}_{\exp_G(tX)} =\frac{d}{dt}\Big|_{t=0}\bigwedge^k\!\bigl(e^{t\operatorname{ad}_X}\bigr) =\bigwedge^k\operatorname{ad}_X,$$ using $\operatorname{Ad}_{\exp_G(tX)}=e^{t\operatorname{ad}_X}$ from [F4]. This is exactly the diagonal $\mathfrak g$-module structure of [F7], so the differentiated module of the rational representation of step 1.1 is $\bigwedge^k\mathfrak g$ with $X\cdot w=\bigwedge^k(\operatorname{ad}_X)w$. [F4, F7]

2.2 The lines $\mathbb C v_B$ and $\mathbb C v_\alpha$ are $B$-stable. For $u\in U$ one has $C_u(B)=B$, because $B$ is a subgroup containing $u$, so $\operatorname{Ad}_u\mathfrak b=\operatorname{Lie}C_u(B)=\mathfrak b$ by [F4]; hence $u$ preserves $\bigwedge^{\dim\mathfrak b}\mathfrak b=\mathbb C v_B$ and acts there by the top exterior power of the unipotent operator $\operatorname{Ad}_u|_{\mathfrak b}$ of step 1.2, which is unipotent and therefore the identity on a one-dimensional space. So $U$ fixes $v_B$, and $\mathbb C v_B$ is $B$-stable with $T$-weight $2\rho$ by step 1.3. Replacing $\mathfrak b$ by $\mathfrak p_\alpha$ and $B$ by $P_\alpha$, which contains $U$ by [F3], the same computation gives $U\,v_\alpha=v_\alpha$, so $\mathbb C v_\alpha$ is $B$-stable with $T$-weight $2\rho-\alpha$. [F3, F4, step 1.2, step 1.3]

3.1 The analogous statement for the minimal parabolic holds by the same computation with $\mathfrak p_\alpha$, $v_\alpha$ and $2\rho-\alpha$ in place of $\mathfrak b$, $v_B$ and $2\rho$: by step 2.2 the group $U$ fixes $v_\alpha$, so $\mathfrak n^+\cdot v_\alpha=0$ and $v_\alpha$ is a highest weight vector of weight $2\rho-\alpha$ in $M_\alpha=U(\mathfrak g)v_\alpha$ by [F8] and steps 1.3 and 1.5; in any decomposition $M_\alpha=N_1\oplus\cdots\oplus N_k$ into irreducible submodules given by [F11] the components of $v_\alpha$ are again annihilated by $\mathfrak n^+$ and have $\mathfrak h$-weight $2\rho-\alpha$, and they all lie in the one-dimensional space $(M_\alpha)_{2\rho-\alpha}=\mathbb C v_\alpha$ by step 1.5, so at most one of them is nonzero and $M_\alpha=N_j$ for that $j$; thus $M_\alpha$ is an irreducible highest weight module of highest weight $2\rho-\alpha$, isomorphic to $L(2\rho-\alpha)$ by [F11] and step 1.6. [F8, F11, step 1.3, step 1.5, step 1.6, step 2.2]

3.2 Let $M:=U(\mathfrak g)v_B\subseteq\bigwedge^{n+m}\mathfrak g$, the smallest $\mathfrak g$-submodule containing $v_B$, and let $H=\{g\in G:gM=M\}$ be its stabilizer in $G$, a subgroup of $G$. For $X\in\mathfrak g$ one has $X\cdot M\subseteq M$, so every power of the endomorphism $\bigwedge^{n+m}(\operatorname{ad}_X)$ preserves $M$ and hence so does its exponential; by steps 1.1 and 2.1, $\exp_G(tX)\cdot w=e^{t\bigwedge^{n+m}(\operatorname{ad}_X)}w$ lies in $M$ for every $w\in M$ and every $t$, so $\exp_G(tX)\in H$. Thus $\exp_G(\mathfrak g)\subseteq H$; by [F12] the image of a suitable open neighborhood of $0$ is an open neighborhood of $e$ in $G$, so $H$ contains an open neighborhood of $e$ and, being a subgroup, is open in $G$; an open subgroup of the connected group $G$ is all of $G$, so $H=G$ and $M$ is $G$-stable. Hence $M$ is the smallest $G$-stable subspace containing $v_B$, and with the restricted action of the rational representation of step 1.1 it is a finite-dimensional rational subrepresentation of $\bigwedge^{n+m}\mathfrak g$ whose differentiated module is $M$. The same argument with $\mathfrak p_\alpha$ and $v_\alpha$ in place of $\mathfrak b$ and $v_B$ shows that $M_\alpha:=U(\mathfrak g)v_\alpha$ is $G$-stable and is the smallest $G$-stable subspace containing $v_\alpha$. [F6, F12, step 1.1, step 2.1]

3.3 $M$ is irreducible with highest weight $2\rho$. By step 2.2 the Lie algebra $\mathfrak n^+=\operatorname{Lie}U$ of [F1] annihilates $v_B$: differentiating the trivial action of $U$ on the line $\mathbb C v_B$ at the identity gives $X\cdot v_B=0$ for $X\in\mathfrak n^+$. So $v_B$ is a highest weight vector of the $\mathfrak g$-module $M$ of weight $2\rho$ by [F8], and $M=U(\mathfrak g)v_B$ is generated by it. By [F11] $M=N_1\oplus\cdots\oplus N_k$ is a direct sum of irreducible submodules; the components $v_j\in N_j$ of $v_B=\sum_jv_j$ are again annihilated by $\mathfrak n^+$ (the projections commute with $\mathfrak g$) and have $\mathfrak h$-weight $2\rho$, so each nonzero $v_j$ is a highest weight vector of weight $2\rho$ in $N_j$. Since $M\subseteq\bigwedge^{n+m}\mathfrak g$, step 1.4 gives $M_{2\rho}=\mathbb C v_B$, so all components $v_j$ are multiples of $v_B$; if $v_j\neq0$ then $N_j=U(\mathfrak g)v_j=U(\mathfrak g)v_B=M$. Hence at most one component is nonzero and $M=N_j$ for that $j$: $M$ is irreducible, and it is a finite-dimensional simple highest weight module of highest weight $2\rho$. By [F11] and step 1.6 it is isomorphic to $L(2\rho)$. [F8, F11, step 1.4, step 2.2]

4.1 The only $B$-stable line in $M$ is $\mathbb C v_B$. Let $\mathbb C w\subseteq M$ be a $B$-stable line. The torus $T$ acts on it by a character, whose differential is a functional $\mu\in\mathfrak h^*$ with $H\cdot w=\mu(H)w$ for $H\in\mathfrak h$; the unipotent group $U$ acts on the one-dimensional space $\mathbb C w$ by a character, whose image is a unipotent subgroup of the torus $\mathbb C^\times=GL_1(\mathbb C)$ and hence trivial, so $U$ acts trivially; differentiating at the identity gives $\mathfrak n^+\cdot w=0$, so $w$ is a highest weight vector of weight $\mu$ in $M$. By [F11] applied to the highest weight module $M=U(\mathfrak g)v_B$ of weight $2\rho$ (step 3.3), every weight of $M$ is $\le2\rho$ and $M_{2\rho}=\mathbb C v_B$; since $\mu$ is a weight of $M$, $\mu\le2\rho$. Conversely, $w$ generates $M$ (it is a highest weight vector of the irreducible module $M$, [F11]), so every weight of $M$ is $\le\mu$, in particular $2\rho\le\mu$. Antisymmetry of the root order [F11] gives $\mu=2\rho$, and then $M_{2\rho}=\mathbb C v_B$ is one-dimensional with $w\in M_{2\rho}$ nonzero, so $\mathbb C w=\mathbb C v_B$. [F11, step 3.3]

5.1 The same argument as step 4.1 with $M_\alpha$, $v_\alpha$ and $2\rho-\alpha$ in place of $M$, $v_B$ and $2\rho$, using step 3.1 for the irreducibility of $M_\alpha$, shows that the only $B$-stable line in $M_\alpha$ is $\mathbb C v_\alpha$. [F11, step 3.1, step 4.1]

6.1 Collecting steps 1.3, 1.4, 1.5, 1.6, 2.2, 3.1, 3.2, 3.3, 4.1 and 5.1 proves (i) and (ii): $v_B$ and $v_\alpha$ span the respective weight spaces, the lines they span are $B$-stable of $T$-weights $2\rho$ and $2\rho-\alpha$, the $G$-spanning modules $W_B=M$ and $W_\alpha=M_\alpha$ are finite-dimensional rational subrepresentations with differentiated modules $L(2\rho)$ and $L(2\rho-\alpha)$, and the $B$-stable lines are unique. The Axiom of Choice is used exactly through [F13] and the suppliers [F11] of the highest weight classification, the countable-choice interfaces of [F4] and [F12], and the finite-dimensional linear algebra of [F7]; the argument itself chooses only the fixed simple root $\alpha$, the finitely many basis vectors $h_1,\dots,h_n,e_\gamma,f_\alpha$ and the faithful representation of [F6]. [F13, F6, F7, F4, F12, F11, step 1.3, step 1.4, step 1.5, step 1.6, step 2.2, step 3.1, step 3.2, step 3.3, step 4.1, step 5.1] ∎
