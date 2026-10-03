---
id: lem-a-smooth-isotopy-of-links-can-be-put-in-general-position
kind: lemma
title: "General-position isotopies of links"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-regular-oriented-link-diagram, lem-every-oriented-link-admits-a-regular-projection,
       def-countable-choice, thm-parametric-transversality,
       lem-a-tubular-target-produces-a-submersive-finite-dimensional-perturbation-family,
       thm-relative-whitney-approximation-for-manifold-valued-maps,
       thm-transversality-homotopy-theorem, def-smooth-manifold]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Queffelec, Reidemeister's theorem using transversality, Bulletin of the Australian Mathematical Society (2024); arXiv:2406.18203v1, sections 2-3.2"
      url: "https://arxiv.org/pdf/2406.18203v1"
    - title: "Ozsvath, Stipsicz and Szabo, Grid Homology for Knots and Links, AMS Surveys and Monographs 208 (2015); Appendix B.1, printed pp. 367-372"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $L$ be a finite disjoint union of circles,
$F\colon L\times I\to\mathbb R^3$ a smooth isotopy of oriented links (each
$F_t$ an embedding, constant near $L\times\partial I$), and fix the projection
$\pi$. Then for every strong neighbourhood of $F$ there is a smooth isotopy
$F'$ in that neighbourhood, with $F'=F$ near $L\times\partial I$, such that
the projected track $G=\pi\circ F'\colon L\times I\to\mathbb R^2$ has the
following properties: (i) the vertical-tangency locus
$\{(x,t):d(\pi\circ F'_t)_x=0\}$ is finite with distinct times; (ii) the
double-point locus of $G$ is a smooth $1$-manifold in
$(L\times I)\times_I(L\times I)$ whose projection to the time axis has only
nondegenerate critical points at distinct times; (iii) the triple points of $G$
are finite, transverse, and occur at distinct times; (iv) each of the loci
(i)--(iii) is transverse to the slices $t=\text{const}$ except at the listed
finite times, so for all other times the slice $G_t$ is a regular projection,
the end projections are those of $F$, and between consecutive exceptional times
the diagrams vary by planar isotopy.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a finite disjoint union of circles $L$, a smooth isotopy $F$ of oriented links through embeddings and constant near the ends, the projection $\pi$, and a strong neighbourhood of $F$.

[F1] Assume $\mathrm{AC}_\omega$. Every smooth map $f\colon M\to N$ admits a finite-dimensional perturbation family $\mathcal F\colon M\times B\to N$, $B\subseteq\mathbb R^m$ a ball about $0$, with $\mathcal F_0=f$ and with every evaluation map $\mathcal F_p\colon B\to N$ a submersion, so that $\mathcal F$ is transverse to every closed embedded submanifold of $N$ ([[lem-a-tubular-target-produces-a-submersive-finite-dimensional-perturbation-family]]).

[F2] Assume $\mathrm{AC}_\omega$. Parametric transversality: if $\mathcal F\colon M\times S\to N$ is a smooth family transverse to an embedded submanifold $Z\subseteq N$, then the parameter set over which the slice fails to be transverse to $Z$ is null in $S$ ([[thm-parametric-transversality]]).

[F3] Assume $\mathrm{AC}_\omega$. Every smooth map is smoothly homotopic to one transverse to a prescribed closed embedded submanifold; perturbing in a finite-dimensional family relative to a closed set can be arranged by Whitney approximation ([[thm-transversality-homotopy-theorem]], [[thm-relative-whitney-approximation-for-manifold-valued-maps]]).

[F4] Regularity of the projected slices, the finiteness of the double points and the absence of triple points are the conditions of [[def-regular-oriented-link-diagram]]; the space of embeddings is open in the strong topology ([[def-smooth-manifold]]).

## Proof

**Proof technique:** direct.

1.1 **Finite-dimensional family.** Let $G_0:=\pi\circ F\colon L\times I\to\mathbb R^2$ be the projected track of the given isotopy. Apply [F1] to the components of $G_0$ to obtain a finite-dimensional perturbation family over a ball $B$ about $0$, with $\mathcal F_0=G_0$, submersive parameter maps, and $\mathcal F$ transverse to every closed embedded submanifold of $\mathbb R^2$. Perturbing inside $B$ with the parameter-dependent collar modification near $L\times\partial I$ (available by [F3]) makes the family relative to the ends, and the perturbation may be taken inside the prescribed strong neighbourhood of $F$ because the family depends continuously on the parameter and vanishes at $0$. [F1, F3, given]

1.2 **Conditions (i) and (iii) are finite-type transversality conditions.** Consider the $1$-jet extension $j^1\mathcal F\colon L\times I\times B\to J^1(L\times I,\mathbb R^2)$ and the closed submanifold $\Sigma_1$ of $1$-jets whose differential has rank zero in the $\mathbb R^2$-component; $\Sigma_1$ is of codimension $2$ inside the fibres over $L\times I$, and the condition "$d(\pi\circ F'_t)_x\ne0$" is precisely avoidance of $\Sigma_1$. Similarly the triple-point condition is the condition that the evaluation $(x,y,z,t)\mapsto(\mathcal F(x,t),\mathcal F(y,t),\mathcal F(z,t))$ on the complement of the diagonals avoid the diagonal $\Delta_2\subset(\mathbb R^2)^3$, a closed embedded submanifold of codimension $2$; by [F1] the family is transverse to both targets, so by [F2] the bad parameter set for each condition is null in $B$. [F1, F2, algebra]

1.3 **Condition (ii).** The double-point locus of a slice is the set of pairs $(x,y)$, $x\ne y$, with equal evaluations; its transversality at $(x,y,t)$ is the condition that the $1$-jet of the evaluation map $(x,y,t)\mapsto\mathcal F(x,t)-\mathcal F(y,t)$ be transverse to $0$ at that point, which is again a finite-type transversality condition on the $1$-jet extension, and its bad parameter set is null by [F1] and [F2]. The loci (i)--(iii) for a good parameter are compact and discrete because the transversality makes them preimages of regular values; a finite disjoint union of compact discrete sets is finite. The nondegeneracy of the critical points of the double-point projection to the time axis and the distinctness of all exceptional times are open, dense conditions, achieved by a further arbitrarily small perturbation of the good parameter inside $B$. [F1, F2, algebra]

2.1 **Conclusion.** Choose a parameter outside the finite union of the bad null sets and, within the open set of parameters satisfying the genericity conditions, avoid the finitely many extra exceptional coincidences: such a parameter exists because the complement of finitely many null sets is dense. For the resulting isotopy $F'$ the projected track $G=\pi\circ F'$ satisfies (i)--(iv): away from the listed times the slices avoid the exceptional strata, hence are regular projections; the end projections are unchanged because the perturbation is relative to $L\times\partial I$; and between consecutive exceptional times the slices vary through regular projections, which is planar isotopy by definition. $\mathrm{AC}_\omega$ is used exactly in [F1], [F2], [F3] and [F4]. ∎ [F2, F3, F4, step 1.1, step 1.2, step 1.3]
