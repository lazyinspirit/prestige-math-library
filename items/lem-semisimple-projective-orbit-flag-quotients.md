---
id: lem-semisimple-projective-orbit-flag-quotients
kind: lemma
title: Projective orbit constructions for G/B and G/P_alpha
status: draft
origin: pipeline
landmark: false
deps:
  - def-complex-semisimple-algebraic-group-borel-and-flag-variety
  - lem-semisimple-borel-root-factorization
  - lem-semisimple-bruhat-double-cosets
  - lem-semisimple-rank-one-sl2-root-homomorphism
  - lem-semisimple-minimal-parabolic-root-subgroup
  - lem-semisimple-rational-pluecker-highest-weight-modules
  - def-weight-and-weight-space-of-a-lie-algebra-representation
  - prop-the-highest-weight-space-of-an-irreducible-module-is-one-dimensional
  - thm-highest-weight-classification-of-finite-dimensional-irreducible-representations
  - def-integral-dominant-and-strictly-dominant-weights
  - lem-finite-weyl-closed-chambers-and-stabilizers
  - prop-exponential-map-is-natural-for-lie-group-homomorphisms
  - cor-dimension-of-image-plus-generic-fibre
  - thm-chevalley-constructible-image-varieties
  - lem-constructible-dense-contains-open
  - cor-minimum-tangent-dimension-and-homogeneous-regularity
  - thm-regular-equals-smooth-over-perfect-field
  - lem-borel-fixed-point-for-projective-actions
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
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
      locator: "§§1.2-1.4 and the opening of §2.1"
---

## Statement

Assume the Axiom of Choice. Let $G$ be the connected simply connected complex
semisimple affine algebraic group with maximal torus $T$, root system $\Phi$,
positive system $\Phi^+$, Borel subgroup $B=T\ltimes U$ and opposite unipotent
subgroup $U^-$ of
[[def-complex-semisimple-algebraic-group-borel-and-flag-variety]] and
[[lem-semisimple-borel-root-factorization]]. Fix a simple root
$\alpha\in\Delta$ and let $P_\alpha$ be the minimal parabolic of
[[lem-semisimple-minimal-parabolic-root-subgroup]]. Let
$W_B=L(2\rho)\subseteq\bigwedge^{\dim\mathfrak b}\mathfrak g$ and
$W_\alpha=L(2\rho-\alpha)\subseteq\bigwedge^{\dim\mathfrak p_\alpha}\mathfrak g$
be the finite-dimensional rational representations of $G$ with their
$B$-stable lines $\mathbb C v_B$ and $\mathbb C v_\alpha$ constructed in
[[lem-semisimple-rational-pluecker-highest-weight-modules]] (so $v_B$ spans the
$(2\rho)$-weight space and $v_\alpha$ the $(2\rho-\alpha)$-weight space), and
let
$$\pi_B:G\longrightarrow\mathbb P(W_B),\quad g\longmapsto g[v_B],\qquad \pi_\alpha:G\longrightarrow\mathbb P(W_\alpha),\quad g\longmapsto g[v_\alpha],$$
be the orbit maps of the induced linear actions of $G$ on the two projective
spaces. Let $X_B\subseteq\mathbb P(W_B)$ and
$X_\alpha\subseteq\mathbb P(W_\alpha)$ be the closures of $\pi_B(G)$ and
$\pi_\alpha(G)$ with their reduced closed subscheme structures. Then:

(i) $\pi_B(G)$ and $\pi_\alpha(G)$ are closed, that is $X_B=\pi_B(G)$ and
$X_\alpha=\pi_\alpha(G)$, and $X_B$, $X_\alpha$ are nonempty closed
irreducible, hence connected, smooth projective subvarieties of dimensions
$|\Phi^+|$ and $|\Phi^+|-1$ respectively;

(ii) the stabilizers
$$H_B=\{g\in G:g[v_B]=[v_B]\},\qquad H_\alpha=\{g\in G:g[v_\alpha]=[v_\alpha]\}$$
equal $B$ and $P_\alpha$ respectively;

(iii) consequently the fibres of $\pi_B$ are exactly the right cosets
$gB$ ($g\in G$) and the fibres of $\pi_\alpha$ are exactly the right cosets
$gP_\alpha$; hence $\pi_B$ and $\pi_\alpha$ induce the bijections
$G/B\to X_B$ and $G/P_\alpha\to X_\alpha$ of the orbit spaces, exhibiting
$X_B$ and $X_\alpha$ as the projective quotients $G/B$ and $G/P_\alpha$. The
fppf quotient functors and Zariski-local torsor sections are constructed in
[[lem-semisimple-flag-torsor-zariski-charts]].

## Facts & Assumptions

**Given:** the group $G$, $T$, $\Phi$, $\Phi^+$, $\Delta$, $B=T\ltimes U$, the subgroups $U^\pm$, the Weyl vector $\rho$, the simple root $\alpha$, the subgroup $P_\alpha$, the Plücker modules $W_B$, $W_\alpha$ with their lines $\mathbb C v_B$, $\mathbb C v_\alpha$, and the orbit maps $\pi_B$, $\pi_\alpha$.

[F1] $G$ is an affine group scheme of finite type over $\mathbb C$ whose underlying scheme is connected and smooth, $T$ is a maximal torus with Lie algebra $\mathfrak h$, $\Phi=\Phi(G,T)$ is a reduced crystallographic root system in $\mathfrak h^*_{\mathbb R}$ with positive system $\Phi^+$ and simple roots $\Delta$, $\mathfrak g=\mathfrak h\oplus\bigoplus_{\gamma\in\Phi}\mathfrak g_\gamma$, $\mathfrak n^\pm=\bigoplus_{\gamma\in\Phi^\pm}\mathfrak g_\gamma$ and $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$; the root spaces are one-dimensional with $\dim\mathfrak g=\dim\mathfrak h+2|\Phi^+|$ and $\dim\mathfrak b=\dim\mathfrak h+|\Phi^+|$. ([[def-complex-semisimple-algebraic-group-borel-and-flag-variety]])

[F2] $U=\prod_{\beta\in\Phi^+}U_\beta$ in every height-compatible order is a closed connected unipotent subgroup with $\operatorname{Lie}U=\mathfrak n^+$, $B=T\ltimes U$ is closed connected solvable with $\operatorname{Lie}B=\mathfrak b$ and $\dim B=\dim\mathfrak b$, and $U^-$ is the closed connected subgroup with $\operatorname{Lie}U^-=\mathfrak n^-$. Each $u_\beta:\mathbb G_a\to U_\beta$, $u_\beta(z)=\exp_G(ze_\beta)$, is an isomorphism of algebraic groups onto a one-dimensional closed subgroup, so every element of $U$ is a product of exponentials of elements of $\mathfrak n^+$. ([[lem-semisimple-borel-root-factorization]])

[F4] $G$ is the union of the double cosets $Bn_wB$ over the Weyl group $W=N_G(T)/T$, and for every $w\in W$ with representative $n_w$ the multiplication morphism $U_w\times B\to Bn_wB$, $(u,b)\mapsto u\,n_w\,b$, is a bijection with $U_w=\prod_{\beta\in\Phi^+\cap w\Phi^-}U_\beta\subseteq U$. ([[lem-semisimple-bruhat-double-cosets]])

[F5] For every root $\beta$ the representative $n_\beta\in N_G(T)$ of the reflection $s_\beta$ satisfies $\operatorname{Ad}(n_\beta)|_{\mathfrak h}=s_\beta$, the class of $n_\beta$ in $W=N_G(T)/T$ is $s_\beta$, and $W$ is thereby identified with the abstract Weyl group $W(\Phi)=\langle s_\beta\rangle$ acting on $\mathfrak h^*$ and on $X^*(T)$ by conjugation; also $n_\beta\in B\cup Bn_\beta B$. ([[lem-semisimple-rank-one-sl2-root-homomorphism]], [[lem-semisimple-bruhat-double-cosets]])

[F6] $P_\alpha$ is a closed connected subgroup containing $B$ and $U_{-\alpha}$ with $P_\alpha=B\sqcup Bn_\alpha B$, $\operatorname{Lie}P_\alpha=\mathfrak b\oplus\mathfrak g_{-\alpha}$ and $\dim P_\alpha=\dim B+1$. ([[lem-semisimple-minimal-parabolic-root-subgroup]])

[F7] $W_B=U(\mathfrak g)v_B\subseteq\bigwedge^{\dim\mathfrak b}\mathfrak g$ and $W_\alpha=U(\mathfrak g)v_\alpha\subseteq\bigwedge^{\dim\mathfrak p_\alpha}\mathfrak g$ are finite-dimensional $G$-stable rational subrepresentations with differentiated modules $L(2\rho)$ and $L(2\rho-\alpha)$, irreducible by [[thm-highest-weight-classification-of-finite-dimensional-irreducible-representations]]; $v_B$ spans the whole $2\rho$-weight space and $v_\alpha$ the whole $(2\rho-\alpha)$-weight space; the lines $\mathbb C v_B$ and $\mathbb C v_\alpha$ are $B$-stable with $T$-weights $2\rho$ and $2\rho-\alpha$; and $\mathbb C v_B$ is the only $B$-stable line in $W_B$, $\mathbb C v_\alpha$ the only $B$-stable line in $W_\alpha$. ([[lem-semisimple-rational-pluecker-highest-weight-modules]])

[F8] If $V$ is a finite-dimensional representation of $G$ or of a torus, then $V$ is the direct sum of its $T$-weight spaces, a nonzero weight vector of weight $\mu$ spans a line on which $T$ acts by $\mu$, and distinct weight spaces are independent; in the irreducible module $L(\lambda)$ the highest weight space is one-dimensional. ([[def-weight-and-weight-space-of-a-lie-algebra-representation]], [[prop-the-highest-weight-space-of-an-irreducible-module-is-one-dimensional]])

[F9] An integral dominant weight is strictly dominant when all its pairings with simple coroots are positive; the Weyl vector satisfies $\langle\rho,\beta^\vee\rangle=1$ for every simple root $\beta$, so $\langle 2\rho,\beta^\vee\rangle=2>0$ and $2\rho$ is strictly dominant, while $\langle 2\rho-\alpha,\alpha^\vee\rangle=0$ and $\langle 2\rho-\alpha,\beta^\vee\rangle>0$ for $\beta\neq\alpha$. For a weight $\eta$ in the closed chamber the stabilizer in $W(\Phi)$ is generated by the simple reflections $s_i$ with $(\eta,\alpha_i)=0$, and each $W$-orbit has a unique dominant element. ([[def-integral-dominant-and-strictly-dominant-weights]], [[lem-finite-weyl-closed-chambers-and-stabilizers]])

[F10] If $F:G\to H$ is a homomorphism of finite-dimensional real Lie groups, then $F(\exp_GX)=\exp_H(dF_eX)$ for all $X\in\operatorname{Lie}G$; in particular for a rational representation $\varrho:G\to GL(V)$ and $X\in\mathfrak g$ one has $\varrho(\exp_GX)=e^{d\varrho(X)}$ in $\operatorname{End}(V)$. ([[prop-exponential-map-is-natural-for-lie-group-homomorphisms]])

[F11] If $X$ is an irreducible classical variety and $f:X\to Y$ a morphism, then the reduced closure $Z=\overline{f(X)}$ is irreducible and $\dim X=\dim Z+r$, where $r$ is the common dimension of the nonempty fibres over a nonempty open subset of $Z$; all fibres of $f$ over closed points of $Z$ are closed-point fibres of $f$. ([[cor-dimension-of-image-plus-generic-fibre]])

[F12] A nonempty reduced classical finite-type space over an algebraically closed field whose automorphism group acts transitively on its point set is regular; over a perfect field a finite-type scheme is regular if and only if it is smooth. ([[cor-minimum-tangent-dimension-and-homogeneous-regularity]], [[thm-regular-equals-smooth-over-perfect-field]])

[F13] Every nonempty closed $B$-stable subvariety of a projective $B$-variety over $\mathbb C$ contains a $B$-fixed point. ([[lem-borel-fixed-point-for-projective-actions]])

[F14] The image of a morphism of classical varieties is constructible; a constructible subset with nonempty irreducible closure contains a nonempty open subset of that closure. ([[thm-chevalley-constructible-image-varieties]], [[lem-constructible-dense-contains-open]])

[F15] The Axiom of Choice is [[def-axiom-of-choice]]; it is inherited through [F10], [F11], [F12], [F13] and [F14] and through the linear-algebra suppliers of [F7] and [F8].

## Proof

1.1 The orbit maps. By [F7] the actions of $G$ on $W_B$ and $W_\alpha$ are rational representations, hence morphisms $G\to GL(W_B)$, $G\to GL(W_\alpha)$; the induced actions on the projective spaces are morphisms and $\pi_B$, $\pi_\alpha$ are morphisms of varieties with $G$-stable images. By [F1] the scheme $G$ is connected and smooth of finite type over the algebraically closed field $\mathbb C$, hence regular by [F12], so its local rings are domains and a connected such scheme is irreducible; thus $G$ is irreducible of dimension $\dim\mathfrak g$, and $\pi_B(G)$, $\pi_\alpha(G)$ are nonempty irreducible subsets whose closures $X_B$, $X_\alpha$ are nonempty irreducible closed subvarieties. Both are $G$-stable: for $g,h\in G$ one has $g\cdot h[v_B]=gh[v_B]$. [F1, F7, F12]

1.2 Weight of a transported highest weight vector. Let $w\in W$ with representative $n_w\in N_G(T)$ and let $t\in T$. Using the $B$-stability of the line $\mathbb C v_B$ with $T$-weight $2\rho$ of [F7], and writing $(w\lambda)(t)=\lambda(n_w^{-1}tn_w)$ for the action of $W$ on characters of $T$ of [F5], one computes in the module $W_B$ $$t\cdot(n_w v_B)=(tn_w)\cdot v_B=n_w\cdot\bigl((n_w^{-1}tn_w)\cdot v_B\bigr)=2\rho(n_w^{-1}tn_w)\,n_wv_B=(w\,2\rho)(t)\,n_wv_B .$$ So $n_wv_B$ is a nonzero weight vector of weight $w(2\rho)$; the same computation in $W_\alpha$ gives weight $w(2\rho-\alpha)$ for $n_wv_\alpha$. [F5, F7, F8]

1.3 Positive root factors preserve the initial weight component. By [F2] write $u\in U$ as a finite product of $\exp_G(z_\beta e_\beta)$. For a weight vector $v$ of weight $\mu$, the representation identity gives $H(e_\beta v)=\mu(H)e_\beta v+[H,e_\beta]v=(\mu+\beta)(H)e_\beta v$. Thus $d\varrho(e_\beta)$ raises weights by $\beta$, and is nilpotent because the module has finitely many weights. By [F10] the corresponding root factor acts as the finite polynomial $\sum_{k\ge0}z_\beta^k d\varrho(e_\beta)^k/k!$. Expanding the finite product, its constant term sends $v$ to $v$; every other nonzero term has weight $\mu+\sum_\beta k_\beta\beta$ with nonnegative integers $k_\beta$, at least one positive. A nonempty sum of positive roots is nonzero (evaluate on a vector defining the positive system). Hence the weight-$\mu$ component of $uv$ is exactly $v$. This uses each exponential separately and requires no global logarithm. [F2, F8, F10]

2.1 The stabilizer of $[v_B]$ is $B$. Since $\mathbb C v_B$ is $B$-stable by [F7], $B\subseteq H_B$. Conversely let $g\in G$ with $g[v_B]=[v_B]$. By the union and cell parametrization of [F4] there are $w\in W$ and a factorization $g=u\,n_w\,b$ with $u\in U_w\subseteq U$ and $b\in B$. Let $\chi:B\to\mathbb G_m$ be the character with $b'v_B=\chi(b')v_B$ for $b'\in B$, which exists because the line is $B$-stable. Then $$g\,v_B=\chi(b)\,u(n_wv_B),$$ whose component in the weight $w(2\rho)$ is $\chi(b)n_wv_B\neq0$ by steps 1.2 and 1.3, while $gv_B\in\mathbb C^\times v_B$ lies in the weight space of weight $2\rho$ of [F7]. If $w\neq1$ then $w(2\rho)\neq2\rho$ by [F9], because $2\rho$ is strictly dominant and hence has trivial stabilizer in $W$; distinct weight spaces are independent by [F8], so a nonzero vector with a nonzero component in weight $w(2\rho)\neq2\rho$ cannot lie in $\mathbb C v_B$. Therefore $gv_B\in\mathbb C^\times v_B$ forces $w=1$, and then $g=u\,b\in B$ because $n_1=1$ and $u\in U\subseteq B$. Hence $H_B=B$. [F4, F7, F8, F9, step 1.2, step 1.3]

2.2 The orbits are closed. Let $O_B=\pi_B(G)$. By [F14] this is a constructible subset of its irreducible closure $X_B$ and contains a nonempty open subset $V_B\subseteq X_B$. For every $x\in O_B$, choose $g\in G$ carrying a point of $V_B$ to $x$; such a $g$ exists by transitivity of the $G$-action on the orbit. The translate $gV_B$ is open in $X_B$, lies in $O_B$, and contains $x$. Thus $O_B$ itself is open in $X_B$, and its complement $\partial_B=X_B\setminus O_B$ is closed and $G$-stable. If $\partial_B$ were nonempty, [F13] applied to this reduced closed projective $B$-stable subvariety would give a $B$-fixed point $y\in\partial_B$. Its line is $B$-stable, so [F7] forces $y=[v_B]\in O_B$, a contradiction. Hence $X_B=O_B$. The same constructible-open and transitivity argument makes $O_\alpha=\pi_\alpha(G)$ open in $X_\alpha$; its complement is closed and $B$-stable, and [F13] with the unique $B$-stable line of [F7] makes it empty. Consequently both orbits are closed and the orbit maps surject onto $X_B,X_\alpha$. [F7, F13, F14, step 1.1, construct]

3.1 The stabilizer of $[v_\alpha]$ is $P_\alpha$. The subgroup $P_\alpha=B\sqcup Bn_\alpha B$ of [F6] stabilizes the line $\mathbb C v_\alpha$: this holds for $B$ by [F7], and $n_\alpha v_\alpha$ has weight $s_\alpha(2\rho-\alpha)=2\rho-2\alpha+\alpha=2\rho-\alpha$, the highest weight of the irreducible module $L(2\rho-\alpha)$ of [F7], whose weight space is one-dimensional by [F8] and [F7]; since $n_\alpha$ acts invertibly and $v_\alpha\neq0$, $n_\alpha v_\alpha$ is a nonzero element of that one-dimensional space, so $n_\alpha v_\alpha\in\mathbb C^\times v_\alpha$. Hence $P_\alpha\subseteq H_\alpha$. Conversely let $g[v_\alpha]=[v_\alpha]$ and write $g=u\,n_w\,b$ as in step 2.1. The same component computation as in step 2.1, with $2\rho-\alpha$ in place of $2\rho$ and using $n_\alpha$ in place of $n_w$ for the four terms $(s_\alpha(2\rho-\alpha))=2\rho-\alpha$ of [F5], shows that the component of $gv_\alpha$ in the weight $w(2\rho-\alpha)$ equals $\chi_\alpha(b)$ times the nonzero vector $n_wv_\alpha$, where $\chi_\alpha$ is the character by which $B$ acts on $\mathbb C v_\alpha$; since $gv_\alpha\in\mathbb C^\times v_\alpha$ has pure weight $2\rho-\alpha$, this forces $w(2\rho-\alpha)=2\rho-\alpha$. By [F9] the stabilizer of the dominant weight $2\rho-\alpha$ in $W(\Phi)$ is generated by the simple reflections $s_i$ with $\langle 2\rho-\alpha,\alpha_i^\vee\rangle=0$, which by [F9] is exactly $\{1,s_\alpha\}$. So $w\in\{1,s_\alpha\}$ and $g\in B\cup Bn_{s_\alpha}B=B\cup Bn_\alpha B=P_\alpha$ by [F4], [F5] and [F6]. Hence $H_\alpha=P_\alpha$. [F4, F5, F6, F7, F8, F9, step 1.2, step 1.3]

4.1 Fibres of the orbit maps. For $g_1,g_2\in G$ one has $\pi_B(g_1)=\pi_B(g_2)$ if and only if $g_1^{-1}g_2\in H_B=B$, that is $g_2\in g_1B$; thus the fibres of $\pi_B$ over points of $\pi_B(G)$ are exactly the right cosets of $B$, each isomorphic to $B$ by translation and of dimension $\dim B$. The same argument with $H_\alpha=P_\alpha$ shows that the fibres of $\pi_\alpha$ over points of $\pi_\alpha(G)$ are exactly the right cosets of $P_\alpha$, of dimension $\dim P_\alpha=\dim B+1$ by [F6]. [F6, step 2.1, step 3.1]

5.1 Dimensions. Apply [F11] to the morphism $\pi_B:G\to\mathbb P(W_B)$ with $G$ irreducible by step 1.1: the closure $X_B$ is irreducible, $\dim G=\dim X_B+r$, and $r$ is the common dimension of the nonempty fibres over a nonempty open subset of $X_B$; by step 4.1 all fibres over points of $\pi_B(G)$ have dimension $\dim B$, so $r=\dim B$ and $$\dim X_B=\dim G-\dim B=\dim\mathfrak g-\dim\mathfrak b=(\dim\mathfrak h+2|\Phi^+|)-(\dim\mathfrak h+|\Phi^+|)=|\Phi^+|$$ by [F1] and [F2]. Applying the same argument to $\pi_\alpha$ and using $\dim P_\alpha=\dim B+1$ gives $\dim X_\alpha=|\Phi^+|-1$. [F1, F2, F6, F11, step 1.1, step 4.1]

6.1 Smoothness and connectedness. By steps 1.1, 5.1 and 2.2 the reduced closed subvariety $X_B\subseteq\mathbb P(W_B)$ is nonempty, irreducible and of dimension $|\Phi^+|$, and $G$ acts on $X_B$ by automorphisms, transitively on its point set because $X_B=\pi_B(G)$. Hence [F12] shows that $X_B$ is regular, and, $\mathbb C$ being perfect, that $X_B$ is smooth over $\mathbb C$; the same holds for $X_\alpha$. Irreducibility gives connectedness, and $X_B$, $X_\alpha$ are closed subvarieties of projective spaces, hence projective. [F12, step 1.1, step 5.1, step 2.2]

7.1 Conclusion. Steps 2.1 and 3.1 give the stabilizer statement (ii); steps 4.1, 5.1 and 2.2 give the fibre statement and the dimensions of (iii) and (i); step 6.1 gives smoothness, connectedness and projectivity, and the orbit maps induce the bijections $G/B\to X_B$, $G/P_\alpha\to X_\alpha$ on orbit spaces, exhibiting $X_B$ and $X_\alpha$ as the quotients $G/B$ and $G/P_\alpha$. The Axiom of Choice is assumed in the statement and declared as the dependency [[def-axiom-of-choice]]; it is inherited through the suppliers [F10], [F11], [F12] and [F13] and through the highest weight classification used in [F7]; the argument itself selects only the fixed simple root $\alpha$, the finitely many root representatives $n_w$ used in steps 2.1 and 3.1, and the character $\chi$ of [F7]. [F15, step 2.1, step 3.1, step 4.1, step 5.1, step 2.2, step 6.1, discharge-construct] ∎
