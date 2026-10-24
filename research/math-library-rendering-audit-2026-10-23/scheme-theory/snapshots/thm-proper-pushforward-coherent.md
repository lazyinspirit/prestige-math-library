---
id: thm-proper-pushforward-coherent
kind: theorem
title: "Coherent higher direct images under proper morphisms"
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - def-acyclic-cover-for-sheaf
  - def-ample-invertible-sheaf
  - def-associated-sheaf-module-affine-scheme
  - def-axiom-of-choice
  - def-cech-cochain-complex-open-cover
  - def-coherent-module-scheme
  - def-dependent-choice
  - def-direct-image-sheaf
  - def-finite-type-finite-presentation-module-sheaf
  - def-generic-point-irreducible-closed-subset
  - def-higher-direct-image-sheaf
  - def-integral-scheme
  - def-invertible-sheaf
  - def-locally-finite-type-and-finite-type-morphism
  - def-locally-free-sheaf-finite-rank
  - def-locally-noetherian-and-noetherian-scheme
  - def-module-on-ringed-space
  - def-noetherian-module
  - def-projective-morphism-pre-proj
  - def-proper-morphism
  - def-quasi-coherent-module-scheme
  - def-quasi-compact-and-quasi-separated-scheme
  - def-relative-projective-space-standard-charts
  - def-separated-morphism-schemes
  - def-sheaf-cohomology-derived-global-sections
  - def-sheaf-on-topological-space
  - def-stalk-of-presheaf
  - def-support-module-sheaf
  - def-very-ample-invertible-sheaf-relative
  - lem-base-change-open-closed-immersions
  - lem-chow-lemma-proper-noetherian
  - lem-closed-immersion-cohomology-pushforward
  - lem-closed-immersion-proper
  - lem-coherent-devissage-one-generic-generator
  - lem-finite-modules-over-noetherian-rings-are-noetherian
  - lem-graph-as-pullback-diagonal
  - lem-higher-direct-image-affine-localization
  - lem-immersion-with-closed-image
  - lem-projective-coherent-cohomology-finite-and-vanishing
  - lem-projective-space-diagonal-closed
  - lem-proper-stable-base-change
  - lem-proper-stable-composition
  - lem-very-ample-implies-ample
  - thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
  - thm-coherent-sheaves-abelian-noetherian-scheme
  - thm-leray-acyclic-cover-theorem
  - thm-long-exact-sequence-sheaf-cohomology
  - thm-noetherian-ring-quotients-and-localisations
  - thm-serre-vanishing
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Proposition 30.19.1 (Tag 02O3)"
      url: https://stacks.math.columbia.edu/tag/02O3
    - title: "The Stacks Project, Cohomology of Schemes, Lemma 30.18.1 (Tag 0200)"
      url: https://stacks.math.columbia.edu/tag/0200
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, Sections 30.2-30.22"
      url: https://stacks.math.columbia.edu/download/coherent.pdf
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Sections 18.6, 19.2, 28.1-28.2"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice and the Axiom of Dependent Choice, inherited from
the affine localization theorem, the Čech comparison and the dévissage lemma
cited below ([[def-axiom-of-choice]], [[def-dependent-choice]]). Let
$f:X\to S$ be a proper morphism of schemes with $S$ locally Noetherian
([[def-proper-morphism]], [[def-locally-noetherian-and-noetherian-scheme]])
and let $\mathcal F$ be a coherent $\mathcal O_X$-module
([[def-coherent-module-scheme]]). Then for every $q\ge0$ the higher direct
image $R^qf_*\mathcal F$ ([[def-higher-direct-image-sheaf]]) is a coherent
$\mathcal O_S$-module.

The empty scheme $X=\varnothing$, the empty base $S=\varnothing$, the zero
sheaf $\mathcal F=0$ and the degree $q=0$ are included. No Noetherian
hypothesis on $X$, no projectivity or flatness of $f$, and no finite
presentation of $\mathcal F$ is imposed beyond those stated.

## Facts & Assumptions
**Given:** The Axiom of Choice and the Axiom of Dependent Choice, a proper morphism $f:X\to S$ with $S$ locally Noetherian, and a coherent $\mathcal O_X$-module $\mathcal F$.

[F1] Affine localization of higher direct images: for a quasi-compact
separated morphism $f:X\to S$ and a quasi-coherent $\mathcal F$
([[def-quasi-coherent-module-scheme]]), each higher direct image
$R^qf_*\mathcal F$ ([[def-higher-direct-image-sheaf]]) is quasi-coherent, and for every affine open
$V=\operatorname{Spec}A\subseteq S$ there is a canonical isomorphism
$(R^qf_*\mathcal F)|_V\cong\widetilde{H^q(f^{-1}V,\mathcal F)}$ with the
associated sheaf of the $A$-module $H^q(f^{-1}V,\mathcal F)$, natural in the
pair. ([[lem-higher-direct-image-affine-localization]],
[[def-associated-sheaf-module-affine-scheme]],
[[def-sheaf-cohomology-derived-global-sections]])

[F2] Coherence on a locally Noetherian scheme: a quasi-coherent module is
coherent if and only if it is of finite type; kernels, images and cokernels of
morphisms of coherent modules and finite direct sums of coherent modules are
coherent; an extension of coherent modules by a coherent module is coherent;
for a Noetherian ring $R$ the associated sheaf $\widetilde M$ of a finitely
generated $R$-module is quasi-coherent and of finite type; an invertible sheaf
is quasi-coherent and locally free of rank one, hence of finite type;
restriction of a coherent module to an open subscheme is coherent, and
coherence is local on the scheme.
([[thm-coherent-sheaves-abelian-noetherian-scheme]],
[[def-coherent-module-scheme]], [[def-invertible-sheaf]],
[[def-locally-free-sheaf-finite-rank]],
[[def-finite-type-finite-presentation-module-sheaf]])

[F3] Long exact sequence: a short exact sequence of abelian sheaves on a space
gives the natural long exact sequence of cohomology; for a short exact
sequence of $\mathcal O_X$-modules the groups carry
$\Gamma(X,\mathcal O_X)$-module structures and all maps are linear, and over
an affine base $\operatorname{Spec}A$ they are $A$-modules through the
structure morphism. ([[thm-long-exact-sequence-sheaf-cohomology]],
[[def-module-on-ringed-space]],
[[def-sheaf-cohomology-derived-global-sections]])

[F4] On a Noetherian ring every finitely generated module is Noetherian, so
submodules and quotients of finitely generated modules are finitely generated.
([[lem-finite-modules-over-noetherian-rings-are-noetherian]],
[[def-noetherian-module]])

[F5] Dévissage lemma: let $X$ be a Noetherian scheme and let $\mathcal P$ be a
property of coherent $\mathcal O_X$-modules with $\mathcal P(0)$, such that in every short exact
sequence of coherent $\mathcal O_X$-modules, if two of the three terms have
$\mathcal P$ then so has the third. Suppose that for every integral closed
subscheme $Z\subseteq X$ with generic point $\xi$ there is a coherent
$\mathcal O_X$-module $\mathcal G$ with support contained in $Z$, whose
stalk $\mathcal G_\xi$ is annihilated by the maximal ideal
$\mathfrak m_\xi\subseteq\mathcal O_{X,\xi}$ and has dimension one over
$\kappa(\xi)$, and with $\mathcal P(\mathcal G)$. Then
$\mathcal P$ holds for every coherent $\mathcal O_X$-module on $X$.
([[lem-coherent-devissage-one-generic-generator]],
[[def-support-module-sheaf]])

[F6] Chow's lemma: for a Noetherian scheme $S$ and a separated morphism $f$
of finite type there are an integer $N\ge0$, a scheme $X'$, a proper
surjective $\pi:X'\to X$, an immersion $\iota:X'\to\mathbb P^N_S$ over $S$ and
a dense open $U\subseteq X$ with $\pi^{-1}U\to U$ an isomorphism; if $f$ is
proper then $\iota$ is a closed immersion.
([[lem-chow-lemma-proper-noetherian]],
[[def-relative-projective-space-standard-charts]])

[F7] Serre vanishing: for a Noetherian ring $A$, a scheme $X$ projective over
$A$ in the H-projective convention, an ample invertible $L$ and a coherent
$\mathcal F$ there is $m_0$ with
$H^q(X,\mathcal F\otimes L^{\otimes m})=0$ for all $q>0$ and all
$m\ge m_0$, with a single bound $m_0$ for all $q$.
([[thm-serre-vanishing]], [[def-projective-morphism-pre-proj]],
[[def-ample-invertible-sheaf]])

[F8] Projective-space finiteness: for a Noetherian ring $A$, a closed
subscheme $X\hookrightarrow\mathbb P^n_A$ and a coherent $\mathcal G$, the
module $H^q(X,\mathcal G)$ is finitely generated over $A$ for every $q\ge0$.
([[lem-projective-coherent-cohomology-finite-and-vanishing]],
[[def-relative-projective-space-standard-charts]])

[F9] Čech comparison: for a quasi-compact separated scheme $X$, a finite
affine open cover $U_0,\dots,U_r$ and a quasi-coherent $\mathcal F$, every
intersection of one or more members of the cover is affine and the canonical
map $\check H^q(\mathcal U,\mathcal F)\to H^q(X,\mathcal F)$ of the ordered
Čech cohomology is an isomorphism for every $q\ge0$.
([[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]],
[[def-cech-cochain-complex-open-cover]])

[F10] Leray acyclic cover: if an open cover $\mathcal U$ of a space, indexed
by a linearly ordered set, is $\mathcal F$-acyclic, that is,
$H^q(W,\mathcal F|_W)=0$ for every nonempty finite intersection $W$ and
every $q>0$, then $\check H^q(\mathcal U,\mathcal F)\to H^q(X,\mathcal F)$ is
an isomorphism for every $q\ge0$.
([[thm-leray-acyclic-cover-theorem]], [[def-acyclic-cover-for-sheaf]])

[F11] Closed immersions: for a closed immersion $j:Z\to X$ and a
quasi-coherent $\mathcal O_Z$-module $\mathcal G$ there are canonical
isomorphisms $H^q(Z,\mathcal G)\cong H^q(X,j_*\mathcal G)$ for all $q\ge0$;
if in addition $X$ is locally Noetherian and $\mathcal G$ is coherent, then
$j_*\mathcal G$ is a coherent $\mathcal O_X$-module.
([[lem-closed-immersion-cohomology-pushforward]],
[[def-direct-image-sheaf]])

[F12] Ampleness: if $f:X\to S$ is quasi-compact and $i:X\to\mathbb P^n_S$ is
an $S$-immersion with $L\cong i^*\mathcal O(1)$, then $L$ is $f$-ample, and
if $S=\operatorname{Spec}R$ is affine then $L$ is ample on $X$ in the
absolute sense; the sheaf $\mathcal O(1)$ on $\mathbb P^n_S$ is glued from
frames on the standard charts with the displayed transitions, and the charts
and their overlaps commute with base change.
([[lem-very-ample-implies-ample]],
[[def-very-ample-invertible-sheaf-relative]],
[[def-relative-projective-space-standard-charts]],
[[def-ample-invertible-sheaf]])

[F13] Properness: closed immersions are proper; composites and base changes of
proper morphisms are proper. ([[lem-closed-immersion-proper]],
[[lem-proper-stable-composition]], [[lem-proper-stable-base-change]],
[[def-proper-morphism]])

[F14] Graphs and immersions: for an $S$-morphism $u:X\to Y$ the graph
$\Gamma_u=(\operatorname{id}_X,u)$ is the base change of the diagonal
$\Delta_{Y/S}$; a morphism $Y\to S$ is separated if and only if
$\Delta_{Y/S}$ is a closed immersion; open immersions, closed immersions and
immersions are stable under base change; an immersion whose image is closed
is a closed immersion; for every scheme $S$ the diagonal of $\mathbb P^n_S$
over $S$ is a closed immersion. ([[lem-graph-as-pullback-diagonal]],
[[def-separated-morphism-schemes]],
[[lem-base-change-open-closed-immersions]],
[[lem-immersion-with-closed-image]],
[[lem-projective-space-diagonal-closed]])

[F15] Noetherian inheritance: a finitely generated algebra over a Noetherian
ring is Noetherian, and quotients and localisations of Noetherian rings are
Noetherian; a morphism of finite type is locally of finite type and
quasi-compact; a locally Noetherian scheme has an affine open cover by
spectra of Noetherian rings, and a Noetherian scheme has a finite such cover.
Hence a scheme of finite type over a locally Noetherian scheme is locally
Noetherian, a scheme of finite type over a Noetherian affine base is
Noetherian, and closed subschemes of a Noetherian scheme are Noetherian.
([[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]],
[[thm-noetherian-ring-quotients-and-localisations]],
[[def-locally-noetherian-and-noetherian-scheme]],
[[def-locally-finite-type-and-finite-type-morphism]],
[[def-quasi-compact-and-quasi-separated-scheme]])

[F16] Locality: a sheaf on a topological space is zero if and only if all its
restrictions to the members of an open cover are zero; the support of a
module sheaf is the set of points with nonzero stalk; and for a quasi-coherent
module on a locally Noetherian scheme, coherence is checked on the members of
an affine open cover. ([[def-sheaf-on-topological-space]],
[[def-support-module-sheaf]], [[def-coherent-module-scheme]])

[F17] Stalks and fibres: a direct image presheaf has sections
$(f_*\mathcal G)(W)=\mathcal G(f^{-1}W)$; the stalk of a sheaf at a point is
the colimit of the sections over the open neighbourhoods of that point, and a
colimit over a cofinal system of neighbourhoods gives the same stalk; an
invertible sheaf is locally free of rank one, so its stalks are free of rank
one, and the fibre of a module at a point is its stalk tensored with the
residue field. ([[def-direct-image-sheaf]], [[def-stalk-of-presheaf]],
[[def-invertible-sheaf]], [[def-locally-free-sheaf-finite-rank]])

[F18] Integrality and separatedness: an integral scheme is nonempty, reduced
and irreducible, and every nonempty open subset of an irreducible space
contains the generic point; a proper morphism is separated, so a scheme
proper over a base is separated over it.
([[def-integral-scheme]],
[[def-generic-point-irreducible-closed-subset]],
[[def-proper-morphism]], [[def-separated-morphism-schemes]])

[F19] The Axiom of Choice states that every family of nonempty sets has a
choice function, and the Axiom of Dependent Choice is the countable dependent
choice principle. ([[def-axiom-of-choice]], [[def-dependent-choice]])



## Proof

**Proof technique:** direct: reduce to a Noetherian affine base, interpret coherence there as finiteness of cohomology, verify the two-out-of-three and one-generator hypotheses of the Noetherian dévissage lemma using Chow's lemma and Serre vanishing on a projective modification, and return to a general locally Noetherian base by locality of coherence.

1.1 Reduction to an affine base. Coherence of $R^qf_*\mathcal F$ is local on $S$ by [F16], so fix an affine open $V=\operatorname{Spec}A\subseteq S$; then $A$ is Noetherian, the inverse image $X_V:=f^{-1}V$ is Noetherian by [F15] since $f$ is of finite type, the base change $f_V:X_V\to V$ of $f$ is proper by [F13], and $\mathcal F_V:=\mathcal F|_{X_V}$ is coherent by [F2]. [F2, F13, F15, F16]

1.2 The restriction of a higher direct image. Because $f$ is proper it is quasi-compact and separated, and $\mathcal F,\mathcal F_V$ are quasi-coherent, so [F1] applied to $f$ over the affine open $V$ gives $(R^qf_*\mathcal F)|_V\cong\widetilde{H^q(f^{-1}V,\mathcal F)}$, while [F1] applied to $f_V$ over the affine open $V\subseteq V$ gives $R^qf_{V*}\mathcal F_V\cong\widetilde{H^q(f_V^{-1}V,\mathcal F_V)}=\widetilde{H^q(f^{-1}V,\mathcal F)}$; hence $(R^qf_*\mathcal F)|_V\cong R^qf_{V*}\mathcal F_V$ canonically for every $q\ge0$. [F1, 1.1]

1.3 It therefore suffices to prove the affine statement: for a Noetherian ring $A$, a proper morphism $f:X\to\operatorname{Spec}A$ and a coherent $\mathcal F$ on $X$, the sheaf $R^qf_*\mathcal F$ is coherent for every $q\ge0$; indeed the general case then follows from 1.2 because coherence is local on $S$ by [F16]. [F16, 1.2]

1.4 The affine statement as finiteness of cohomology. Assume now $S=\operatorname{Spec}A$ with $A$ Noetherian and let $X,\mathcal F$ be as in 1.3; then $X$ is Noetherian by [F15], so the dévissage lemma [F5] is available on $X$, and applying [F1] with the affine open $S$ itself gives $R^qf_*\mathcal F\cong\widetilde{H^q(X,\mathcal F)}$ for every $q\ge0$. [F1, F5, F15, 1.3]

1.5 For a coherent $\mathcal H$ on $X$ the sheaf $R^qf_*\mathcal H$ is coherent for all $q\ge0$ if and only if $H^q(X,\mathcal H)$ is a finitely generated $A$-module for all $q\ge0$: by 1.4 the sheaf is the associated sheaf of that module, by [F2] a quasi-coherent module on the locally Noetherian affine scheme $\operatorname{Spec}A$ is coherent precisely when it is of finite type, and an associated sheaf is of finite type exactly when its module is finitely generated. [F2, 1.4]

1.6 Define the property $\mathcal P$ of coherent $\mathcal O_X$-modules by: $\mathcal P(\mathcal H)$ holds when $H^q(X,\mathcal H)$ is a finitely generated $A$-module for every $q\ge0$. By 1.5 the affine statement of 1.3 is equivalent to the assertion that $\mathcal P(\mathcal H)$ holds for every coherent $\mathcal H$ on $X$. [1.5]

1.7 Two-out-of-three, first case. Let $0\to\mathcal H_1\to\mathcal H_2\to\mathcal H_3\to0$ be a short exact sequence of coherent modules on $X$ and let $\mathcal H_1,\mathcal H_2$ satisfy $\mathcal P$; the long exact sequence of [F3] gives for each $q$ an exact sequence $H^q(X,\mathcal H_2)\to H^q(X,\mathcal H_3)\to H^{q+1}(X,\mathcal H_1)$, so $H^q(X,\mathcal H_3)$ is an extension of the submodule $\operatorname{im}(H^q(X,\mathcal H_3)\to H^{q+1}(X,\mathcal H_1))$ of the finitely generated module $H^{q+1}(X,\mathcal H_1)$ by the quotient $\operatorname{im}(H^q(X,\mathcal H_2)\to H^q(X,\mathcal H_3))$ of $H^q(X,\mathcal H_2)$; both are finitely generated over the Noetherian ring $A$ by [F4], and so is $H^q(X,\mathcal H_3)$, for every $q$, that is, $\mathcal H_3$ satisfies $\mathcal P$. [F3, F4]

1.8 Two-out-of-three, second case. If instead $\mathcal H_2,\mathcal H_3$ satisfy $\mathcal P$, the exact sequence $H^{q-1}(X,\mathcal H_3)\to H^q(X,\mathcal H_1)\to H^q(X,\mathcal H_2)$ of [F3] exhibits $H^q(X,\mathcal H_1)$ as an extension of $\operatorname{im}(H^q(X,\mathcal H_1)\to H^q(X,\mathcal H_2))=\ker(H^q(X,\mathcal H_2)\to H^q(X,\mathcal H_3))$, a submodule of the finitely generated module $H^q(X,\mathcal H_2)$, by the image of $H^{q-1}(X,\mathcal H_3)$, a quotient of the finitely generated module $H^{q-1}(X,\mathcal H_3)$; by [F4] these are finitely generated, so $\mathcal H_1$ satisfies $\mathcal P$. [F3, F4]

1.9 Two-out-of-three, third case. If $\mathcal H_1,\mathcal H_3$ satisfy $\mathcal P$, the exact sequence $H^q(X,\mathcal H_1)\to H^q(X,\mathcal H_2)\to H^q(X,\mathcal H_3)\to H^{q+1}(X,\mathcal H_1)$ of [F3] exhibits $H^q(X,\mathcal H_2)$ as an extension of $\operatorname{im}(H^q(X,\mathcal H_2)\to H^q(X,\mathcal H_3))=\ker(H^q(X,\mathcal H_3)\to H^{q+1}(X,\mathcal H_1))$, a submodule of the finitely generated module $H^q(X,\mathcal H_3)$, by the image of $H^q(X,\mathcal H_1)$, a quotient of the finitely generated module $H^q(X,\mathcal H_1)$; again [F4] gives finite generation, so $\mathcal H_2$ satisfies $\mathcal P$. Thus $\mathcal P$ is stable under two-out-of-three. [F3, F4, 1.7, 1.8]

1.10 The generators: fixing the subscheme. Fix an integral closed subscheme $Z\subseteq X$ with generic point $\xi$; then $Z$ is nonempty, reduced and irreducible by [F18], it is Noetherian by [F15] as a closed subscheme of the Noetherian scheme $X$, and the restriction $g:=f|_Z:Z\to\operatorname{Spec}A$ is proper by [F13] as the composite of the closed immersion $Z\to X$ with the proper $f$. [F13, F15, F18]

1.11 Chow's lemma for the subscheme. By [F6] applied to the proper morphism $g$ over the Noetherian base $\operatorname{Spec}A$ there are an integer $N\ge0$, a scheme $Z'$, a proper surjective morphism $\pi:Z'\to Z$, a closed immersion $\iota:Z'\hookrightarrow\mathbb P^N_A$ over $A$, and a dense open $U\subseteq Z$ such that $\pi^{-1}U\to U$ is an isomorphism; the generic point $\xi$ of the irreducible $Z$ lies in the dense open $U$ by [F18]. Put $\mathcal L:=\iota^*\mathcal O_{\mathbb P^N_A}(1)$. [F6, F18]

1.12 The graph map is a closed immersion. The map $\phi:=(\iota,\pi):Z'\to\mathbb P^N_A\times_AZ=\mathbb P^N_Z$ factors, via the isomorphism $\iota:Z'\to Z'_0$ onto the image of $\iota$, as the composite of the graph morphism $\Gamma_{\pi_0}:Z'_0\to Z'_0\times_AZ$ of $\pi_0:=\pi\circ\iota^{-1}$ and the base change $Z'_0\times_AZ\to\mathbb P^N_A\times_AZ$ of the closed immersion $Z'_0\subseteq\mathbb P^N_A$; the graph is a closed immersion because $Z$ is separated over $A$ by [F18] and a graph into a separated scheme is the base change of the diagonal by [F14], and the base change of a closed immersion is a closed immersion by [F14], so $\phi$ is a closed immersion. [F14, F18, 1.11]

1.13 Ampleness of $\mathcal L$ and its restrictions. Since the first projection $\mathbb P^N_Z\to\mathbb P^N_A$ composed with $\phi$ is $\iota$, the defining pullback property of the relative twisting sheaf gives $\phi^*\mathcal O_{\mathbb P^N_Z}(1)\cong\iota^*\mathcal O_{\mathbb P^N_A}(1)=\mathcal L$, and by [F12] the charts of projective space and their overlaps commute with base change; hence for every affine open $V\subseteq Z$ the base change $\pi^{-1}V\to\mathbb P^N_V$ of the closed immersion $\phi$ is a closed immersion by [F14] and $\mathcal L|_{\pi^{-1}V}$ is the pullback of $\mathcal O_{\mathbb P^N_V}(1)$. Consequently $\mathcal L$ is H-very ample relative to the affine base $A$, so it is ample on $Z'$ by [F12], and $\mathcal L|_{\pi^{-1}V}$ is H-very ample relative to the affine base $V$, so it is ample on $\pi^{-1}V$ by [F12]. [F12, F14, 1.12]

1.14 Finiteness and vanishing on $Z'$. The scheme $Z'$ is a closed subscheme of the locally Noetherian scheme $\mathbb P^N_A$ over the Noetherian ring $A$, hence locally Noetherian by [F15], and each $\mathcal L^{\otimes n}$ is invertible, hence coherent, by [F2]; so [F8] gives that $H^q(Z',\mathcal L^{\otimes n})$ is a finitely generated $A$-module for all $q,n\ge0$, while [F7] applied to the H-projective $A$-scheme $Z'$, the ample $\mathcal L$ and the coherent module $\mathcal O_{Z'}$ gives an integer $d_A$ with $H^q(Z',\mathcal L^{\otimes n})=0$ for all $q>0$ and all $n\ge d_A$. [F2, F7, F8, F15, 1.11, 1.13]

1.15 Vanishing on the affine pieces of $Z$. For every affine open $V\subseteq Z$ the ring $B=\mathcal O_Z(V)$ is Noetherian by [F15], the morphism $\pi^{-1}V\to V$ is the base change of the proper $\pi$, hence proper and quasi-compact by [F13], and it factors as the closed immersion $\pi^{-1}V\to\mathbb P^N_V$ followed by the projection, so $\pi^{-1}V$ is projective over the Noetherian ring $B$ in the H-projective convention with ample $\mathcal L|_{\pi^{-1}V}$ by 1.13; hence [F7] applied over the affine base $V$ gives an integer $n_V$ with $H^q(\pi^{-1}V,\mathcal L^{\otimes n})=0$ for all $q>0$ and all $n\ge n_V$. [F7, F13, F15, 1.13]

1.16 A uniform twist. The Noetherian scheme $Z$ has a finite affine open cover $V_1,\dots,V_r$ by [F15], and every intersection indexed by one or more members of this cover is affine by [F9], so 1.15 applies to each of the finitely many nonempty intersections $V_I$; since $n_0:=\max\bigl(d_A,\{n_{V_I}\}\bigr)$ ranges over a finite set of integers, for every $n\ge n_0$ one has $H^q(Z',\mathcal L^{\otimes n})=0$ and $H^q(\pi^{-1}V_I,\mathcal L^{\otimes n})=0$ for all $q>0$. [F9, F15, 1.14, 1.15]

1.17 The Čech–Leray comparison. Fix $n\ge n_0$ and put $\mathcal G:=\pi_*\mathcal L^{\otimes n}$; then $\mathcal G$ is quasi-coherent because it is $R^0\pi_*$ of the quasi-coherent $\mathcal L^{\otimes n}$ by [F1], and the ordered Čech complexes agree entrywise with equal differentials, $C^q(\mathcal V,\mathcal G)=\prod_{|I|=q+1}\mathcal G(V_I)=\prod_{|I|=q+1}\mathcal L^{\otimes n}(\pi^{-1}V_I)=C^q(\pi^{-1}\mathcal V,\mathcal L^{\otimes n})$, by the definition of the direct image [F17]; the scheme $Z$ is quasi-compact and separated by [F18], so [F9] gives $\check H^q(\mathcal V,\mathcal G)\cong H^q(Z,\mathcal G)$, while the cover $\pi^{-1}\mathcal V$ is $\mathcal L^{\otimes n}$-acyclic by 1.16, so [F10] gives $\check H^q(\pi^{-1}\mathcal V,\mathcal L^{\otimes n})\cong H^q(Z',\mathcal L^{\otimes n})$; altogether $H^q(Z,\mathcal G)\cong H^q(Z',\mathcal L^{\otimes n})$ for every $q\ge0$. [F1, F9, F10, F17, F18, 1.16]

1.18 Coherence of $\mathcal G$ and its generic fibre. For every affine open $V\subseteq Z$ the localization [F1] gives $\mathcal G|_V\cong\widetilde{H^0(\pi^{-1}V,\mathcal L^{\otimes n})}$ with $H^0(\pi^{-1}V,\mathcal L^{\otimes n})$ a finitely generated module over the Noetherian ring $\mathcal O_Z(V)$ by [F8], so $\mathcal G$ is coherent on the locally Noetherian scheme $Z$ by [F2] and [F16]. Moreover $\pi^{-1}U\to U$ is an isomorphism, so the stalk of $\mathcal G$ at the point $\xi\in U$ is the stalk of the invertible sheaf $\mathcal L^{\otimes n}$ at $\pi^{-1}\xi$, a free module of rank one over the local ring $\mathcal O_{Z',\pi^{-1}\xi}\cong\mathcal O_{Z,\xi}$ by [F17], and hence the fibre $\mathcal G_\xi\otimes_{\mathcal O_{Z,\xi}}\kappa(\xi)$ is one-dimensional over the residue field $\kappa(\xi)$. [F1, F2, F8, F16, F17, 1.11, 1.16]

1.19 The pushed module on $X$. Let $j:Z\to X$ be the closed immersion and put $\mathcal F_Z:=j_*\mathcal G$; then $\mathcal F_Z$ is coherent by [F11]. Its support is contained in $Z$: for $x\notin Z$ the complement $X\setminus Z$ is an open neighbourhood of $x$ with $j^{-1}(X\setminus Z)=\varnothing$, and the stalk is the colimit over a cofinal system of such neighbourhoods, hence zero, by [F17], while for $x\in Z$ the stalk of $j_*\mathcal G$ at $x$ is $\mathcal G_x$ by [F17]. At the generic point $\xi$ of the integral scheme $Z$, $\mathcal O_{Z,\xi}=\kappa(\xi)$ and the action of $\mathcal O_{X,\xi}$ on $(j_*\mathcal G)_\xi$ factors through $\mathcal O_{X,\xi}\twoheadrightarrow\mathcal O_{Z,\xi}=\kappa(\xi)$; hence $\mathfrak m_\xi(\mathcal F_Z)_\xi=0$, and the stalk itself has dimension one over $\kappa(\xi)$ by 1.18. [F11, F16, F17, 1.18]

1.20 The generator has property $\mathcal P$. By [F11] and 1.17 there are isomorphisms $H^q(X,\mathcal F_Z)\cong H^q(Z,\mathcal G)\cong H^q(Z',\mathcal L^{\otimes n})$ for every $q\ge0$, and each $H^q(Z',\mathcal L^{\otimes n})$ is a finitely generated $A$-module by [F8]; hence $H^q(X,\mathcal F_Z)$ is finitely generated for every $q$, that is, $\mathcal P(\mathcal F_Z)$ holds. [F8, F11, 1.17]

1.21 Dévissage concludes the affine case. The zero sheaf has zero cohomology in every degree, so $\mathcal P(0)$ holds by 1.6. By 1.7-1.9 the property $\mathcal P$ is stable under two-out-of-three, and steps 1.10-1.20 produce for every integral closed subscheme $Z\subseteq X$ with generic point $\xi$ a coherent module $\mathcal F_Z$ with support contained in $Z$, a one-dimensional $\kappa(\xi)$-stalk annihilated by $\mathfrak m_\xi$ as checked in 1.19, and $\mathcal P$; the dévissage lemma [F5] applied to the Noetherian scheme $X$ therefore gives $\mathcal P(\mathcal F)$ for the given coherent $\mathcal F$, so $H^q(X,\mathcal F)$ is a finitely generated $A$-module for every $q\ge0$ and 1.5 yields the coherence of $R^qf_*\mathcal F$ on $\operatorname{Spec}A$ for every $q\ge0$. This proves the affine statement of 1.3. [F5, 1.5, 1.6, 1.7, 1.8, 1.9, 1.19, 1.20]

1.22 Conclusion for general $S$. For every affine open $V\subseteq S$ the restriction $(R^qf_*\mathcal F)|_V$ is, by 1.2, the coherent sheaf $R^qf_{V*}\mathcal F_V$ supplied by 1.21, and coherence is local on $S$ by [F16]; hence $R^qf_*\mathcal F$ is a coherent $\mathcal O_S$-module for every $q\ge0$. [F16, 1.2, 1.21]

2.1 Boundary and choice accounting. If $X=\varnothing$ then $\mathcal F=0$ and $R^qf_*\mathcal F=0$ for every $q$, and the zero module is coherent; if $S=\varnothing$ then also $X=\varnothing$; if $\mathcal F=0$ the same vanishing holds; the degree $q=0$ is not exceptional because the dévissage argument treats all $q\ge0$ at once and in particular yields coherence of $f_*\mathcal F$. The case $Z=X$ with $X$ integral is one instance of 1.10-1.20, the case of a one-member affine cover of 1.16 and the case $U=Z$ are included in the same argument, and no reducedness or irreducibility of $X$ itself is assumed. The base $S$ is only locally Noetherian, so the reduction 1.1-1.3 covers non-affine and infinite-dimensional bases by locality, and the twist range starts at the endpoint $n=n_0$ of 1.16, which is allowed since all bounds are closed conditions $n\ge n_V$. The Axiom of Choice [F19] is consumed through Chow's lemma [F6], the dévissage lemma [F5] and Serre vanishing [F7], and the Axiom of Dependent Choice through the affine localization [F1] and the Čech comparison [F9]; the finitely many affine pieces and the finitely many intersection indices of 1.16 are indexed by finite sets, and no further selection is made. ∎
