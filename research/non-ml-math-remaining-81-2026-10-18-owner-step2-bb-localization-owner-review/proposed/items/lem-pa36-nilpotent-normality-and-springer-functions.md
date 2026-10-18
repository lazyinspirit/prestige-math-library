---
id: lem-pa36-nilpotent-normality-and-springer-functions
kind: lemma
title: Normality of the nilpotent cone and Springer functions
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-complex-semisimple-algebraic-group-borel-and-flag-variety
  - def-radical-and-unipotent-radical-of-an-algebraic-group
  - lem-pa36-principal-nilpotent-borel-orbit
  - lem-quasi-finite-morphism-fibre-characterization
  - lem-semisimple-borel-root-factorization
  - lem-semisimple-minimal-parabolic-root-subgroup
  - lem-semisimple-rank-one-sl2-root-homomorphism
  - lem-the-nilpotent-central-fiber-is-a-reduced-integral-domain
  - prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra
  - thm-bruhat-decomposition-for-split-reductive-group
  - thm-chevalley-constructible-image-varieties
  - thm-minimal-parabolic-flag-projection-is-p1-bundle
  - thm-projective-morphism-proper
  - thm-proper-pushforward-coherent
  - thm-proper-quasi-finite-is-finite
  - thm-primitive-element-theorem-for-finite-separable-extensions
  - thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional
  - thm-semisimple-flag-variety-smooth-projective
  - thm-serre-normality-criterion
  - thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates
  - prop-brackets-of-root-spaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, MIT 18.757 (2023)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
      locator: "§§17.2–17.4 and 27.2–27.4, printed pp. 88–90 and 135–138; nilpotent cone and Springer map"
    - title: "Masaki Kashiwara, Representation theory and D-modules on flag varieties, Astérisque 173–174 (1989)"
      url: "https://numdam.org/item/AST_1989__173-174__55_0.pdf"
      locator: "§6.2, printed pp. 92–93; normality and global functions on the Springer resolution"
---

## Statement

Assume the setup of [[def-complex-semisimple-algebraic-group-borel-and-flag-variety]]
and the Axiom of Choice. Let $N\subseteq\mathfrak g$ be the nilpotent cone
with its reduced coordinate ring from
[[lem-the-nilpotent-central-fiber-is-a-reduced-integral-domain]], and let
$\mu:T^*X\to N$ be the Springer moment map. Then $N$ is normal, $\mu$ is
proper and birational, and pullback induces a graded algebra isomorphism
$$\mathbb C[N]\xrightarrow{\sim}\Gamma(T^*X,\mathcal O_{T^*X}).$$

## Facts & Assumptions

**Given:** A connected simply connected complex semisimple group $G$ with Borel
$B$, flag variety $X=G/B$, root system $\Phi$, and the reduced nilpotent cone
$N$.

[F1] The nilpotent cone is an irreducible reduced complete intersection of
dimension $2|\Phi^+|$; the principal element $e=\sum_i e_i$ has centralizer
dimension $\operatorname{rank}G$, and every nilpotent element is conjugate
into $\mathfrak n^+$ ([[lem-the-nilpotent-central-fiber-is-a-reduced-integral-domain]]).

[F2] The Borel orbit of $e$ consists exactly of the elements of
$\mathfrak n^+$ whose simple-root coefficients are nonzero
([[lem-pa36-principal-nilpotent-borel-orbit]]).

[F3] Bruhat decomposition writes every $g\in G$ as $b_1n_wb_2$ with
$b_1,b_2\in B$ and $w\in W$; a Weyl element carrying all positive simple
roots to positive roots is the identity
([[thm-bruhat-decomposition-for-split-reductive-group]]).

[F4] $X$ is smooth projective, $\operatorname{Lie}P_{\alpha_i}
=\mathfrak b\oplus\mathfrak g_{-\alpha_i}$ and
$X=G/B\to G/P_{\alpha_i}$ is a $\mathbb P^1$-bundle, so $\dim G/P_{\alpha_i}=|\Phi^+|-1$. The Killing form identifies $T^*X\cong G\times^B\mathfrak n^+$, and projective morphisms are proper
([[lem-semisimple-minimal-parabolic-root-subgroup]],
[[thm-semisimple-flag-variety-smooth-projective]],
[[prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra]],
[[thm-minimal-parabolic-flag-projection-is-p1-bundle]],
[[thm-projective-morphism-proper]]).

[F5] Root-space brackets satisfy
$[\mathfrak g_\gamma,\mathfrak g_\beta]\subseteq\mathfrak g_{\gamma+\beta}$
([[prop-brackets-of-root-spaces]]), and the positive-root subgroups form the
height-ordered unipotent group $U$
([[lem-semisimple-borel-root-factorization]]). The simple roots form a
$\mathbb Z$-basis of the root lattice and positive roots have nonnegative
simple-root coordinates
([[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]]);
each root space is one-dimensional
([[thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional]]).

[F6] A finite-type morphism has constructible image
([[thm-chevalley-constructible-image-varieties]]).

[F7] A complete intersection is $S_2$, and an integral Noetherian scheme
regular in codimension one is normal ([[thm-serre-normality-criterion]]).

[F8] A finite-type morphism with finite scheme-theoretic fibers is
quasi-finite; a proper quasi-finite morphism is finite
([[lem-quasi-finite-morphism-fibre-characterization]],
[[thm-proper-quasi-finite-is-finite]]).

[F9] A finite field extension in characteristic zero is separable, and every
finite separable field extension is simple
([[thm-primitive-element-theorem-for-finite-separable-extensions]]).

[F10] Proper pushforward of the structure sheaf is coherent; a finite module
algebra over a ring is integral over that ring
([[thm-proper-pushforward-coherent]]).



## Proof

1.1 The orbit map $G\to N$, $g\mapsto\operatorname{Ad}(g)e$, has irreducible image closure. By [F1] its image has dimension $\dim\mathfrak g-\dim Z_{\mathfrak g}(e)=2|\Phi^+|=\dim N$; by [F6] the constructible image is dense and therefore contains a nonempty open subset of the irreducible variety $N$. The orbit is $G$-stable, so its translates of this open subset cover the orbit; consequently $G\cdot e$ is open in $N$. [F1, F6, algebra]

1.2 The Springer map is $$\mu:G\times^B\mathfrak n^+\longrightarrow N,\qquad[g,x]\longmapsto\operatorname{Ad}(g)x.$$ Its graph is the incidence subvariety $$\{(gB,y)\in X\times N:y\in\operatorname{Ad}(g)\mathfrak n^+\},$$ which is closed because the spaces $\operatorname{Ad}(g)\mathfrak n^+$ form a vector subbundle of $X\times\mathfrak g$. The projection $X\times N\to N$ is projective by [F4], so $\mu$ is proper by the projective-morphism theorem included in [F4]. Surjectivity follows from the last clause of [F1]. [F1, F4]

2.1 If $y\in N\setminus G\cdot e$, conjugate it into $\mathfrak n^+$ by [F1]. At least one simple-root coefficient must vanish by [F2]. For each simple $\alpha_i$, set $\mathfrak n_i=\bigoplus_{\beta\in\Phi^+,\,\beta\ne\alpha_i}\mathfrak g_\beta$. This is a nilpotent Lie subalgebra. It is an ideal in $\mathfrak p_{\alpha_i}=\mathfrak b\oplus\mathfrak g_{-\alpha_i}$: brackets with $\mathfrak h$ preserve each root space; brackets with positive root spaces have weights $\beta+\gamma$, which if nonzero remain positive and cannot equal $\alpha_i$ because $\beta\ne\alpha_i$ has a positive coefficient at another simple root; and if $\beta-\alpha_i$ is a root for $\beta\ne\alpha_i$, it must be positive, since otherwise $\alpha_i$ would be a sum of positive roots. These assertions use [F5] and the simple-root basis. The exponential/BCH coordinates in [F5] identify $\exp:\mathfrak n^+\to U$ as a polynomial isomorphism, so $N_i=\exp(\mathfrak n_i)$ is a closed connected unipotent subgroup with Lie algebra $\mathfrak n_i$. Order the positive-root coordinates with $\alpha_i$ first. The product of the remaining root subgroups is then a closed subvariety of $U$ of dimension $|\Phi^+|-1$; it lies in $N_i$, which has the same dimension, so equals $N_i$. Hence $U=U_{\alpha_i}N_i$. Since $\mathfrak n_i$ is an ideal, its normalizer in the connected group $P_{\alpha_i}$ has full Lie algebra and hence equals $P_{\alpha_i}$; thus $N_i$ is normal in $P_{\alpha_i}$. The quotient $P_{\alpha_i}/N_i$ is generated by $T$ and the images of $U_{\alpha_i}$ and $U_{-\alpha_i}$. The rank-one homomorphism of [[lem-semisimple-rank-one-sl2-root-homomorphism]] supplies the semisimple rank-one subgroup. The central subtorus $(\ker\alpha_i)^0\subseteq T$ centralizes it, and $\alpha_i\circ\alpha_i^\vee(t)=t^2$ shows that its quotient in $T$ is covered by the coroot torus up to finite index. Hence $P_{\alpha_i}/N_i$ is a central product of a torus and a semisimple rank-one group, so it is reductive and has no nontrivial connected normal unipotent subgroup. By [[def-radical-and-unipotent-radical-of-an-algebraic-group]], $N_i$ is the unipotent radical of $P_{\alpha_i}$. It is therefore $P_{\alpha_i}$-stable and has dimension $|\Phi^+|-1$. Thus $N\setminus G\cdot e$ is contained in the finite union of the images of $$G\times^{P_{\alpha_i}}N_i\longrightarrow N,\qquad[g,u]\longmapsto\operatorname{Ad}(g)\log u.$$ Here $\log:N_i\to\mathfrak n_i$ is the polynomial inverse of the exponential just constructed; it is $P_{\alpha_i}$-equivariant by conjugation, so the displayed map is well-defined. Each source has dimension $(|\Phi^+|-1)+(|\Phi^+|-1)=2|\Phi^+|-2$ by [F4]. Hence the complement of the open regular orbit has codimension at least two. The Jacobian rank at $e$ is full by the proof of [F1]; $G$-equivariance makes every point of $G\cdot e$ regular. Thus $N$ is regular in codimension one. Since it is an integral complete intersection, [F7] gives normality. [F1, F2, F4, F5, F7, step 1.1]

3.1 The fiber over $e$ is a single point. Indeed, if $e\in\operatorname{Ad}(g)\mathfrak n^+$, write $g=b_1n_wb_2$ by [F3]. The element $x=\operatorname{Ad}(b_1^{-1})e$ still has every simple coefficient nonzero by [F2]. Since $\operatorname{Ad}(n_w^{-1})x\in\mathfrak n^+$, each nonzero simple-root component of $x$ must map to a positive root space; distinct root spaces cannot cancel. Therefore $w^{-1}$ sends every positive simple root to a positive root, so $w=1$ by [F3], and $gB=B$. This algebraic argument holds after every algebraically closed extension of $\mathbb C$ as well. Equivariance gives a singleton geometric fiber over every point of $O=G\cdot e$. The restriction $\mu_O:\mu^{-1}(O)\to O$ is proper by base change. Its fibers are finite type and their geometric point sets are singletons, so each fiber point is isolated and has residue field finite over the base residue field; the finite-fiber criterion in [F8] makes $\mu_O$ quasi-finite, and proper quasi-finite finiteness in [F8] makes it finite. Both source and target are integral of dimension $2|\Phi^+|$, so the induced function-field extension is finite. It is separable in characteristic zero, and by [F9] has a primitive element $\theta$. After replacing an affine open $\operatorname{Spec}A\subseteq O$ by a smaller nonempty principal open, its finite preimage is $\operatorname{Spec}B$ with $B$ finite over $A$, $\theta$ lies in $B$, and $B=A[\theta]\cong A[T]/(f)$ for the monic minimal polynomial $f$ of $\theta$: first clear denominators to place $\theta$ in $B$, then localize to kill the finite torsion quotient $B/A[\theta]$ and to put the coefficients of $f$ in $A$. The discriminant of $f$ is nonzero by separability, so after inverting it this finite map is étale of rank $d=[\operatorname{Frac}B:\operatorname{Frac}A]$. Every geometric closed fiber in this open then has $d$ distinct points, but every geometric fiber over $O$ is a singleton; therefore $d=1$. This proves birationality without inferring degree from a closed-point count alone. [F2, F3, F8, F9, step 1.1, step 2.1, step 1.2]

4.1 Let $R=\mathbb C[N]$ and $S=\Gamma(T^*X,\mathcal O)$. Properness makes $S=\Gamma(N,\mu_*\mathcal O_{T^*X})$ a finite $R$-algebra by [F10]. Birationality embeds $S$ in $\operatorname{Frac}(R)$ and contains $R$. Every element of a finite $R$-algebra is integral over $R$ by the determinant trick. Since $R$ is integrally closed by step 2.1, $S=R$. This proves the Springer-functions isomorphism without inferring regularity of a rational function from connected fibers. [F7, F10, step 2.1, step 1.2, step 3.1] ∎
