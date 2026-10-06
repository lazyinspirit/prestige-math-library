---
id: lem-arith-strictification-of-dvr-birational-group-law
kind: lemma
title: "Strictification"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-arith-birational-group-law-from-minimal-model
  - lem-local-fibre-dimension-bound-via-polynomial-quasifiniteness
  - lem-finite-presentation-image-constructible
  - lem-ag-flat-local-regularity-ascent-descent
  - thm-one-dimensional-regular-local-rings-are-dvrs
  - lem-constructible-dense-contains-open
  - def-s-dense-open-and-s-rational-map
  - lem-s-rational-map-descends-along-faithfully-flat-smooth-maps
  - lem-nonaffine-fppf-descent-of-scheme-morphisms
  - cor-morphisms-equal-on-dense-open-reduced-source
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bosch, Lutkebohmert, Raynaud, Neron Models (1990), 5.2/2 and 2.5/1 (strictification of a birational group law)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC and DC as inherited from the supplied algebra and scheme results. Let $R$ be a discrete valuation ring with fraction field $K$ and residue field $k$, let $X$ be a smooth separated faithfully flat finite-type $R$-scheme, and let $m$ be an $R$-birational group law on $X$ with birational universal translations ([[lem-arith-birational-group-law-from-minimal-model]]). Then there is an $R$-dense model open $X^0\subseteq X$ on which $m$ is a strict birational group law. More precisely, its multiplication is defined on an open $U^0\subseteq X^0\times_RX^0$, and the two universal translations restrict to open immersions there whose domains and images are dense over each of the two projections. Thus every test-valued first or second coordinate gives a test-birational translation, with cancellation on arbitrary tests. The model open $X^0$ is smooth, separated, faithfully flat and of finite type over $R$. If $X_K$ is already a group scheme and the generic law is its everywhere-defined group law, $X^0$ can be chosen with $X^0_K=X_K$; this includes the commissioned abelian minimal model.

## Facts & Assumptions

**Given:** AC and DC, a DVR $R$, a smooth separated faithfully flat finite-type $R$-scheme $X$, and an $R$-birational group law $m$ with birational universal translations.

[F1] For a quasi-compact open $V$ in a smooth $Y/S$ of relative dimension $d$, the locus where $V$ fails to be dense in a fibre is constructible: the complement $A=Y\setminus V$ has local fibre dimension at most $d$, the locus $F\subseteq A$ where the fibre has local dimension $d$ is closed by upper semicontinuity, and its image is constructible ([[lem-local-fibre-dimension-bound-via-polynomial-quasifiniteness]], [[lem-finite-presentation-image-constructible]]).

[F2] If a constructible subset $C$ of a Noetherian space has nonempty irreducible closure $D$, it contains a nonempty open of $D$: write $C$ as a finite union of locally closed subsets $O_j\cap F_j$ in $D$. Their closures cover $D$, so irreducibility makes one dense; its closed part is then all of $D$, and it contains the nonempty open $O_j$. Thus a constructible subset omitting the generic point of an irreducible component has nondense closure in that component. This proves the general topological form used here; [[lem-constructible-dense-contains-open]] supplies its classical-variety instance. Smooth total spaces over a DVR are regular, and their local rings at special-fibre generic points are DVRs with uniformizer $\pi$ ([[lem-ag-flat-local-regularity-ascent-descent]], [[thm-one-dimensional-regular-local-rings-are-dvrs]]). These facts prove the special-generic closure exclusion in step 2.1; no assertion about arbitrary constructible closures over a DVR is assumed.

[F3] $R$-dense opens are schematically dense and behave well under base change; representatives of $S$-rational maps agree on schematically dense opens of separated targets and descend along faithfully flat maps ([[def-s-dense-open-and-s-rational-map]], [[lem-s-rational-map-descends-along-faithfully-flat-smooth-maps]], [[lem-nonaffine-fppf-descent-of-scheme-morphisms]], [[cor-morphisms-equal-on-dense-open-reduced-source]]).

## Proof

**Proof technique:** direct: remove the constructible bad-density loci for the two projections and restrict the law.

1.1 Choose an $R$-dense open $U\subseteq X^2$ where $m$ is defined and both universal translations $\Phi(x,y)=(x,m(x,y))$ and $\Psi(x,y)=(m(x,y),y)$ are open immersions; birationality provides such a common domain by intersecting domains of the maps and their inverses. Set $V=\Phi(U)$, $W=\Psi(U)$ and $Z=U\cap V\cap W$, all $R$-dense. For each projection $p_i:X^2\to X$, let $T_i$ be its constructible bad-density locus for $Z$, supplied by [F1]. Every generic point of every generic or special fibre of $X$ lies outside $T_i$, since $Z$ contains the generic points of all product-fibre components. [F1, given, construct]

2.1 The closure of each $T_i$ omits every fibre generic point. On the generic fibre this follows from constructibility and the first assertion of [F2]. Its generic part has a reduced schematic closure whose ideal is saturated under multiplication by $\pi$. At a special-fibre generic point $\xi$, the local ring is a DVR by [F2]. A nonzero proper ideal of that DVR cannot be $\pi$-saturated: divide an element $\pi^nu$ repeatedly to obtain a unit. The localized closure ideal is nonzero because the generic bad locus is nondense in its integral component. Hence this generic-part closure misses $\xi$. The special part is constructible within $X_k$ and omits its generic points; [F2] makes its closure nondense there as well. Thus $Q_i=X\setminus\overline{T_i}$ is an $R$-dense open. Set $X^0=Q_1\cap Q_2$; over it $Z$ is dense along both projections. [F2, step 1.1, algebra]

3.1 Define $U^0=U\cap(X^0\times_RX^0)\cap m^{-1}(X^0)$, with images $V^0=\Phi(U^0)$ and $W^0=\Psi(U^0)$ in $(X^0)^2$. To check density, base change to a field and fix a point $a\in X^0$. The translation $\Phi(a,-)$ is an open immersion with dense image in the fibre; intersecting that image with $V\cap(a\times X^0)$ remains dense. Its inverse image imposes $m(a,-)\in X^0$, so $U^0$ is dense along $p_1$. The same argument with $\Psi(-,a)$ proves density along $p_2$. Since $\Phi$ preserves $p_1$ and $\Psi$ preserves $p_2$, it also proves $V^0$ dense along $p_1$ and $W^0$ along $p_2$. [F1, F2, step 2.1, algebra]

4.1 For the remaining densities fix $a\in X^0$ and put $U_a=m^{-1}(a)\subseteq U$ over the chosen field. The open immersions $\Phi$ and $\Psi$ identify $U_a$ respectively with $V\cap(X\times a)$ and $W\cap(a\times X)$, dense opens by the construction of $X^0$. Requiring both input coordinates to lie in $X^0$ cuts two dense opens of $U_a$, so $U_a\cap U^0$ is dense in $U_a$. Its $\Psi$-image is $W^0\cap(a\times X^0)$, dense along the first projection; its $\Phi$-image is $V^0\cap(X^0\times a)$, dense along the second. All domains and images therefore have both-projection density. [F1, step 3.1, algebra]

5.1 The restricted rational law on $X^0$ is associative by its agreement with the original law on schematic dense domains. Its universal translations are the open immersions above, and both-projection density remains schematic density after arbitrary coordinate base change in the smooth family by [F3]. Thus they give the required test-birational translations and cancellation. The open $X^0$ is smooth, separated and finite type; it meets every special-fibre component and the generic fibre, so it is surjective and flat over $R$, hence faithfully flat. If $X_K$ already carries an everywhere-defined group law, choose $U$ to include $(X_K)^2$, where both universal translations are isomorphisms. The generic bad loci are then empty, so $X^0_K=X_K$. This is the BLR model-open strictification needed by completion. [F3, step 2.1, step 4.1, algebra] ∎
