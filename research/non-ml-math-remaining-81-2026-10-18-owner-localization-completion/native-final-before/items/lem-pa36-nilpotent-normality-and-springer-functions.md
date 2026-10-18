---
id: lem-pa36-nilpotent-normality-and-springer-functions
kind: lemma
title: Normality of the nilpotent cone and Springer functions
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - cor-generic-smoothness-on-source-characteristic-zero
  - def-axiom-of-choice
  - def-complex-semisimple-algebraic-group-borel-and-flag-variety
  - lem-pa36-principal-nilpotent-borel-orbit
  - lem-semisimple-minimal-parabolic-root-subgroup
  - lem-the-nilpotent-central-fiber-is-a-reduced-integral-domain
  - prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra
  - thm-bruhat-decomposition-for-split-reductive-group
  - thm-chevalley-constructible-image-varieties
  - thm-minimal-parabolic-flag-projection-is-p1-bundle
  - thm-projective-morphism-proper
  - thm-proper-pushforward-coherent
  - thm-semisimple-flag-variety-smooth-projective
  - thm-serre-normality-criterion
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

[F4] $X$ is smooth projective, each $P_{\alpha_i}$ has nilradical
$\mathfrak n_i=\bigoplus_{\beta\in\Phi^+,\,\beta\ne\alpha_i}\mathfrak g_\beta$,
the Killing form identifies $T^*X\cong G\times^B\mathfrak n^+$, and
$G\to G/P_{\alpha_i}$ is a $\mathbb P^1$-bundle, so
$\dim G/P_{\alpha_i}=|\Phi^+|-1$
([[lem-semisimple-minimal-parabolic-root-subgroup]],
[[thm-semisimple-flag-variety-smooth-projective]],
[[prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra]],
[[thm-minimal-parabolic-flag-projection-is-p1-bundle]],
[[thm-projective-morphism-proper]]).

[F5] A finite-type morphism has constructible image; in characteristic zero
the generic smoothness theorem applies to a dominant morphism between smooth
varieties ([[thm-chevalley-constructible-image-varieties]],
[[cor-generic-smoothness-on-source-characteristic-zero]]).

[F6] A complete intersection is $S_2$, and an integral Noetherian scheme
regular in codimension one is normal ([[thm-serre-normality-criterion]]).

[F7] Proper pushforward of the structure sheaf is coherent; a finite module
algebra over a ring is integral over that ring
([[thm-proper-pushforward-coherent]]).

## Proof

1.1 The orbit map $G\to N$, $g\mapsto\operatorname{Ad}(g)e$, has irreducible
image closure. By [F1] its image has dimension
$\dim\mathfrak g-\dim Z_{\mathfrak g}(e)=2|\Phi^+|=\dim N$; by [F5] the
constructible image is dense and therefore contains a nonempty open subset
of the irreducible variety $N$. The orbit is $G$-stable, so its translates
of this open subset cover the orbit; consequently $G\cdot e$ is open in $N$.
[F1, F5, algebra]

2.1 If $y\in N\setminus G\cdot e$, conjugate it into $\mathfrak n^+$ by
[F1]. At least one simple-root coefficient must vanish by [F2]. For each
simple $\alpha_i$, let $\mathfrak n_i$ be the sum of all positive root
spaces except $\mathfrak g_{\alpha_i}$; it is the nilradical of
$P_{\alpha_i}$ and has dimension $|\Phi^+|-1$. Therefore
$N\setminus G\cdot e$ is contained in the finite union of the images of
$$G\times^{P_{\alpha_i}}\mathfrak n_i\longrightarrow N.$$
Each source has dimension
$(|\Phi^+|-1)+(|\Phi^+|-1)=2|\Phi^+|-2$ by [F4]. Hence the complement of
the open regular orbit has codimension at least two. The Jacobian rank at $e$
is full by the proof of [F1]; $G$-equivariance makes every point of $G\cdot e$
regular. Thus $N$ is regular in codimension one. Since it is an integral
complete intersection, [F6] gives normality. [F1, F2, F4, F6, step 1.1]

3.1 The Springer map is
$$\mu:G\times^B\mathfrak n^+\longrightarrow N,\qquad[g,x]\longmapsto\operatorname{Ad}(g)x.$$
Its graph is the incidence subvariety
$$\{(gB,y)\in X\times N:y\in\operatorname{Ad}(g)\mathfrak n^+\},$$
which is closed because the spaces $\operatorname{Ad}(g)\mathfrak n^+$ form
a vector subbundle of $X\times\mathfrak g$. The projection $X\times N\to N$
is projective by [F4], so $\mu$ is proper by the projective-morphism theorem
included in [F4]. Surjectivity follows from the last clause of [F1]. [F1, F4]

4.1 The fiber over $e$ is a single point. Indeed, if $e\in\operatorname{Ad}(g)\mathfrak n^+$,
write $g=b_1n_wb_2$ by [F3]. The element $x=\operatorname{Ad}(b_1^{-1})e$
still has every simple coefficient nonzero by [F2]. Since
$\operatorname{Ad}(n_w^{-1})x\in\mathfrak n^+$, each nonzero simple-root
component of $x$ must map to a positive root space; distinct root spaces
cannot cancel. Therefore $w^{-1}$ sends every positive simple root to a
positive root, so $w=1$ by [F3], and $gB=B$. Equivariance gives a singleton
fiber over every point of $G\cdot e$. The map is generically finite of
geometric degree one over this open orbit; generic smoothness in [F5]
ensures the generic fiber is reduced in characteristic zero, hence the
function-field degree is one. Thus $\mu$ is birational. [F2, F3, F5,
step 1.1, step 2.1, step 3.1]

5.1 Let $R=\mathbb C[N]$ and $S=\Gamma(T^*X,\mathcal O)$. Properness makes
$S=\Gamma(N,\mu_*\mathcal O_{T^*X})$ a finite $R$-algebra by [F7].
Birationality embeds $S$ in $\operatorname{Frac}(R)$ and contains $R$.
Every element of a finite $R$-algebra is integral over $R$ by the determinant
trick. Since $R$ is integrally closed by step 2.1, $S=R$. This proves the
Springer-functions isomorphism without inferring regularity of a rational
function from connected fibers. [F6, F7, step 2.1, step 3.1, step 4.1] ∎
