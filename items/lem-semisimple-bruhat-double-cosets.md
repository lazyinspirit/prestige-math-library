---
id: lem-semisimple-bruhat-double-cosets
kind: lemma
title: Bruhat double cosets from rank-one multiplication
status: draft
origin: pipeline
landmark: false
deps:
  - lem-semisimple-opposite-borel-big-cell
  - lem-semisimple-rank-one-sl2-root-homomorphism
  - lem-semisimple-borel-root-factorization
  - def-complex-semisimple-algebraic-group-borel-and-flag-variety
  - prop-weyl-length-equals-positive-root-inversion-number
  - def-weyl-group-of-a-root-system
  - def-axiom-of-choice
  - lem-semisimple-root-exponential-algebraic-subgroups
  - lem-semisimple-minimal-parabolic-root-subgroup
  - thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers
  - prop-exponential-map-is-natural-for-lie-group-homomorphisms
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
      locator: "Chapter 21, especially Lemma 21.69(a), printed pp. 446-447, and root-coordinate Lemmas 21.77-21.78, printed pp. 449-450"
    - title: "Brian Conrad, Reductive Group Schemes"
      url: https://math.stanford.edu/~conrad/papers/luminysga3smf.pdf
      locator: "§§1.2, 1.4, especially Theorems 1.2.7, 1.4.12, Proposition 1.4.7 and Corollary 1.4.13"
---

## Statement

Assume the Axiom of Choice. Let $G$ be the connected simply connected complex
semisimple affine algebraic group with maximal torus $T$, root system $\Phi$,
positive system $\Phi^+$ and subgroups $B=T\ltimes U$, $U^\pm$, $B^-$ fixed in
[[def-complex-semisimple-algebraic-group-borel-and-flag-variety]] and
[[lem-semisimple-borel-root-factorization]], and let $W=N_G(T)/T$ with its
reflections $s_\alpha$ and representatives $n_\alpha$ of
[[lem-semisimple-rank-one-sl2-root-homomorphism]]. Make the identifications
recorded as a proof obligation in the definition: $W$ is identified with the
abstract Weyl group $W(\Phi)=\langle s_\alpha\rangle$ of
[[def-weyl-group-of-a-root-system]], the class in $W$ of a representative
$n_\alpha$ is $s_\alpha$, and for $w\in W$ we write $n_w$ for a representative
and $\ell(w)$ for the length of
[[prop-weyl-length-equals-positive-root-inversion-number]]. For $w\in W$ put
$$U_w=\prod_{\alpha\in\Phi^+\cap w\Phi^-}U_\alpha .$$
Then:

(i) $G$ is the disjoint union of the double cosets $Bn_wB$ for $w\in W$;

(ii) for every $w\in W$ the multiplication morphism
$$U_w\times B\longrightarrow Bn_wB,\qquad (u,b)\longmapsto u\,n_w\,b,$$
is an isomorphism of varieties onto $Bn_wB$; and

(iii) $U_w\cong\mathbb A^{\ell(w)}$ and $\dim U_w=\ell(w)$; and

(iv) the normalizer group scheme $N_G(T)$ is the disjoint union of the cosets
$n_wT$, and its fppf sheaf quotient by $T$ is the constant finite group scheme
$W(\Phi)$.

The choice of representative $n_w$ does not change $Bn_wB$: replacing $n_w$ by
$n_wt$ with $t\in T$ does not change the double coset.

## Facts & Assumptions

**Given:** the connected smooth affine group $G$ over $\mathbb C$, its torus $T$, root system $\Phi$, positive system $\Phi^+$, root subgroups $U_\beta$, and $B=T\ltimes U$.

[F1] Multiplication $U^-\times T\times U\to G$ is an open immersion onto the dense open $\Omega=U^-B$, and $U^-\times B\to\Omega$ is an isomorphism. ([[lem-semisimple-opposite-borel-big-cell]])

[F2] Each $u_\beta:\mathbb G_a\to U_\beta$ is a closed algebraic-group isomorphism with $u_\beta(z)=\exp_G(ze_\beta)$; the root subgroup depends only on its one-dimensional root space. ([[lem-semisimple-root-exponential-algebraic-subgroups]])

[F3] The products of positive and negative root subgroups in height-compatible orders are polynomial coordinate isomorphisms onto $U$ and $U^-$; $T$ acts on each root coordinate by the nontrivial character $\beta$, and $B=T\ltimes U$. ([[lem-semisimple-borel-root-factorization]])

[F4] The rank-one morphism $\varphi_\alpha:SL_2\to G$ identifies the two standard unipotent groups with $U_{\pm\alpha}$ and maps $w=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ to $n_\alpha\in N_G(T)$, whose action on roots is $s_\alpha$. ([[lem-semisimple-rank-one-sl2-root-homomorphism]])

[F5] For each simple $\alpha$, $P_\alpha=\langle B,U_{-\alpha}\rangle=B\sqcup Bn_\alpha B$ is a subgroup; its two-cell decomposition and the $SL_2$ root coordinates hold scheme-theoretically. ([[lem-semisimple-minimal-parabolic-root-subgroup]])

[F6] The abstract finite Weyl group acts simply transitively on Weyl chambers, and every root reflection is conjugate to a simple reflection. ([[thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers]])

[F7] $\ell(w)=|\Phi^+\cap w\Phi^-|$, and every Weyl element has a word in simple reflections. ([[prop-weyl-length-equals-positive-root-inversion-number]])

[F8] Exponentials commute with homomorphisms of finite-dimensional real Lie groups. ([[prop-exponential-map-is-natural-for-lie-group-homomorphisms]])

## Proof

1.1 Conjugation preserves root subgroups in the needed algebraic sense. If $n\in N_G(T)(\mathbb C)$ acts on characters by $\sigma$, then $\operatorname{Ad}(n)\mathfrak g_\beta=\mathfrak g_{\sigma\beta}$ by the defining root-space eigenvalue equation. The target is one-dimensional; hence $\operatorname{Ad}(n)e_\beta=c e_{\sigma\beta}$ for some $c\ne0$. Apply exponential naturality [F8] to the conjugation automorphism $C_n$ and the explicit curves [F2]: $n u_\beta(z)n^{-1}=u_{\sigma\beta}(cz)$ for every $z\in\mathbb C$. Thus $nU_\beta n^{-1}=U_{\sigma\beta}$ as closed subgroup schemes: both morphisms are algebraic and agree on the reduced affine line's $\mathbb C$-points. This use of exponentials is within the present characteristic-zero complex-group scope. [F2, F8, given]

2.1 If $n\in N_G(T)(\mathbb C)$ preserves $\Phi^+$, then $n$ normalizes $U$, $U^-$ and $B$ by step 1.1 and [F3]. The open subsets $\Omega=U^-B$ and $\Omega n=U^-nB$ of the irreducible $G$ meet by [F1]. At an intersection write $u_1^-b_1=u_2^-nb_2$; rearranging puts $n=(u_2^-)^{-1}u_1^-b_1b_2^{-1}\in\Omega$. Write its unique big-cell coordinates as $n=u^-tu$ and put $ns=\sigma(s)n$ for $s\in T$. The big-cell coordinates of $ns=u^-(ts)(s^{-1}us)$ and $\sigma(s)n=(\sigma(s)u^-\sigma(s)^{-1})(\sigma(s)t)u$ have middle factors $ts$ and $\sigma(s)t$. Uniqueness gives $\sigma(s)=s$ for every $s$, so $n$ centralizes $T$. Comparing the outer coordinates again gives $s^{-1}us=u$ and $su^-s^{-1}=u^-$ for every $s\in T$. In the polynomial root coordinates [F3], conjugation by $s$ scales the coordinate indexed by $\beta$ by $\beta(s)$; since no root character is trivial, all coordinates vanish. Hence $u=u^-=1$ and $n=t\in T$. In particular $C_G(T)(\mathbb C)=T(\mathbb C)$ and $B(\mathbb C)\cap N_G(T)(\mathbb C)=T(\mathbb C)$: the latter follows also directly by comparing the unique $T\ltimes U$ coordinates of $bs$ and $\sigma(s)b$. [F1, F3, step 1.1]

3.1 Every $n\in N_G(T)(\mathbb C)$ permutes the root set by step 1.1 and carries $\Phi^+$ to a positive system. By simple transitivity [F6], there is a unique abstract $w\in W(\Phi)$ carrying $\Phi^+$ to this system. Choose a simple-reflection word for $w$ and multiply its rank-one representatives [F4] to obtain $n_w$ with the same action on roots. Then $n_w^{-1}n$ preserves $\Phi^+$ and lies in $T$ by step 2.1. Conversely the $n_\alpha$ realize the simple reflections, so the map $N_G(T)(\mathbb C)/T(\mathbb C)\to W(\Phi)$ is surjective and injective, and different words for $w$ differ by $T$. This proves the identification promised in the statement without assuming Coxeter relations for the representatives. [F4, F6, step 2.1]

4.1 The scheme-theoretic quotient has the same finite set of components. Because $G$ is affine of finite type and $T$ closed, the condition $gTg^{-1}\subseteq T$ is closed in $g$: choose finite generators for the ideal of $T$ in $\mathcal O(G)$, pull each through conjugation $G\times T\to G$, and set to zero its finitely many coefficients in $\mathcal O(T)$; impose the analogous equations for $g^{-1}Tg\subseteq T$. Their intersection represents the normalizer functor $N=N_G(T)$ as a closed finite-type subgroup scheme. Differentiating the normalizing condition at the identity gives the inclusion $\operatorname{Lie}N\subseteq\{X\in\mathfrak g:[X,\mathfrak h]\subseteq\mathfrak h\}$. The root decomposition makes the set on the right equal to $\mathfrak h$, while $T\subseteq N$ gives the reverse inclusion $\mathfrak h\subseteq\operatorname{Lie}N$, so $\dim T=\dim\operatorname{Lie}N$; since $T\subseteq N$ is smooth of this dimension, the local ring of $N$ at the identity is regular, and group translations make $N$ smooth and reduced everywhere. By step 3.1 the closed cosets $n_wT$ exhaust $N(\mathbb C)$ and are pairwise disjoint. A reduced finite-type $\mathbb C$-scheme is Jacobson, so its closed points are dense in every nonempty locally closed subset; the finite union of those closed cosets therefore equals $N$ as a scheme, and each coset is open as well as closed. On each component the quotient map $n_wT\to\operatorname{Spec}\mathbb C$ is the trivial right $T$-torsor. These components glue to a Zariski-locally trivial $T$-torsor $N\to\coprod_{w\in W(\Phi)}\operatorname{Spec}\mathbb C$, and the displayed target represents the fppf sheaf quotient $N/T$. Multiplication agrees with $W(\Phi)$ on closed points, hence between the finite reduced constant schemes, proving (iv). [F1, F3, step 3.1, construct]

4.2 With the Weyl representatives established in step 3.1, fix a simple root $\alpha$, write $s=s_\alpha$, and let $U''$ be the subgroup generated by $U_\beta$ for $\beta\in\Phi^+\setminus\{\alpha\}$. The root-coordinate and height-raising commutator law of [F3] gives $U=U''U_\alpha$: in a height-compatible order the simple $\alpha$ factor can be moved to the far right, because swapping it past another positive-root factor changes only factors at strictly larger heights, never a new $\alpha$ factor. Step 1.1 and the root-system fact that $s$ permutes $\Phi^+\setminus\{\alpha\}$ show $n_\alpha U''n_\alpha^{-1}=U''$. Consequently, after absorbing torus and $U''$ factors into the left $B$, one has $n_\alpha Bn_w\subseteq B\,U_{-\alpha}\,n_\alpha n_w$ for every $w$. [F3, F4, step 1.1, step 3.1]

5.1 The product in step 4.2 occupies at most two cells, with a direct rank-one calculation. Take $n_{sw}=n_\alpha n_w$, permissible by step 3.1. If $w^{-1}\alpha>0$, then $n_{sw}^{-1}U_{-\alpha}n_{sw}=U_{w^{-1}\alpha}\subseteq B$ by step 1.1, so $B U_{-\alpha}n_{sw}\subseteq Bn_{sw}B$. If $w^{-1}\alpha<0$, the zero parameter is in $Bn_{sw}B$. For $z\ne0$, direct multiplication in $SL_2$ gives $\begin{pmatrix}1&0\\z&1\end{pmatrix}w=\begin{pmatrix}-z^{-1}&-1\\0&-z\end{pmatrix}\begin{pmatrix}1&0\\-z^{-1}&1\end{pmatrix}$; applying $\varphi_\alpha$, the first matrix lies in $B$, while $n_w^{-1}U_{-\alpha}n_w=U_{-w^{-1}\alpha}\subseteq B$, so $u_{-\alpha}(z)n_\alpha n_w\in Bn_wB$. Therefore $n_\alpha Bn_w\subseteq Bn_wB\cup Bn_{sw}B$ in both cases. This is Milne's two-cell inclusion, proved here from the displayed matrix identity and root coordinates. [F4, step 1.1, step 4.2]

6.1 Let $X=\bigcup_{w\in W(\Phi)}Bn_wB$. It contains $B$, is stable under left $B$ and right $B$, and is stable under left $U_{-\alpha}$ for each simple $\alpha$: the minimal-parabolic two-cell equality [F5] places $U_{-\alpha}$ inside $B\cup Bn_\alpha B$, and step 5.1 controls $Bn_\alpha Bn_wB$. The subgroup $H$ generated by $B$ and the simple negative-root groups contains each $n_\alpha$, by the standard three-unipotent factorization of $w$ in $SL_2$ through [F4]. Every root is a Weyl translate of a simple root by [F6], so conjugation by products of the $n_\alpha$ and step 1.1 put every positive and negative root group in $H$. Thus $\Omega=U^-B\subseteq H$ by [F1] and [F3]. Every left coset of $H$ contains an open translate of $\Omega$, so every coset is open; connectedness of $G$ forces a single coset and $H=G$. Since $X$ contains $1$ and is stable under the generators of $H$, $X=G$. This proves coverage without asserting that an abstract generated subgroup is closed. [F1, F3, F4, F5, F6, step 1.1, step 5.1]

7.1 For each $w$ in the covering of step 6.1, put $I_w=\Phi^+\cap w\Phi^-$, $J_w=\Phi^+\cap w\Phi^+$. Both sets are closed under root addition: if $\beta,\gamma$ are in either set and $\beta+\gamma$ is a root, its image under $w^{-1}$ has the same strict sign as the images of $\beta,\gamma$. The corresponding sums $\mathfrak n_{I_w}=\bigoplus_{\beta\in I_w}\mathfrak g_\beta$ and $\mathfrak n_{J_w}=\bigoplus_{\beta\in J_w}\mathfrak g_\beta$ are Lie subalgebras, and the finite polynomial exponential/logarithm construction of [F3] makes their images $U_w$ and $U^w$ closed root-coordinate subgroups. In height-graded Lie coordinates, $\operatorname{BCH}(X,Y)=X+Y$ plus brackets of strictly greater height. Given $Z\in\mathfrak n^+$, solve $Z=\operatorname{BCH}(X,Y)$ recursively by height with $X\in\mathfrak n_{I_w}$ and $Y\in\mathfrak n_{J_w}$: in each root coordinate exactly one of $X,Y$ occurs linearly, while every bracket term uses already solved lower heights. The recursion is polynomial over $\mathbb C$ and gives a polynomial inverse to multiplication $U_w\times U^w\to U$ on every test algebra, hence a scheme isomorphism. By step 1.1, $n_w^{-1}U^wn_w\subseteq U$, and so $Bn_wB=Un_wB=U_wn_wB$. [F3, step 1.1, step 6.1]

8.1 The parameter map $U_w\times B\to G$, $(u,b)\mapsto un_wb$, is an isomorphism onto its image as a locally closed subscheme. Indeed, $V_w^-=n_w^{-1}U_wn_w$ is a closed root-coordinate subgroup of $U^-$ because $w^{-1}I_w\subseteq\Phi^-$; left translation by $n_w^{-1}$ identifies the map with the restriction of the big-cell isomorphism $U^-\times B\xrightarrow{\sim}\Omega$ of [F1] to the closed subscheme $V_w^-\times B$. Its image is therefore closed in the open $n_w\Omega$, and step 7.1 identifies its underlying set with $Bn_wB$. This proves (ii), including a regular inverse, rather than inferring an isomorphism from an injective differential. [F1, step 7.1]

9.1 The cells are disjoint. The chart in step 8.1 descends to $U_w\xrightarrow{\sim}Bn_wB/B$ because its second factor is the right $B$ action. The point $n_wB$ is fixed by $T$. In this chart the left $T$ action on $u n_wB$ sends $u$ to $tut^{-1}$, since $n_w^{-1}tn_w\in T\subset B$. By [F3] every root coordinate of $U_w$ has a nontrivial $T$ weight, so $1$ is its unique $T$-fixed $\mathbb C$-point. If $n_{w'}B$ were in the $w$ cell, it would be fixed by $T$ and hence equal $n_wB$; then $n_w^{-1}n_{w'}\in B\cap N_G(T)=T$ by step 2.1, giving $w=w'$ by step 3.1. Any nonempty intersection of two double cosets contains a representative of each, so they are pairwise disjoint. Combined with step 6.1 this proves (i). [F3, step 2.1, step 3.1, step 6.1, step 8.1]

10.1 With the disjoint decomposition of step 9.1 established, [F7] gives $|I_w|=\ell(w^{-1})=\ell(w)$, and the closed root-coordinate subgroup $U_w$ in step 7.1 is a product of $|I_w|$ copies of $\mathbb G_a$ as a variety. Hence $U_w\cong\mathbb A^{\ell(w)}$ and $\dim U_w=\ell(w)$, proving (iii). The Axiom of Choice is assumed and declared through [[def-axiom-of-choice]]; its exact uses here are inherited from the exponential-naturalness supplier [F8], the root-factorization and big-cell suppliers [F1]–[F3], and the rank-one supplier [F4]. The finite Weyl representatives and the finite root orders require only finite choices. [F1, F2, F3, F4, F7, F8, step 7.1, step 9.1, discharge-construct] ∎
