---
id: thm-local-reeb-stability
kind: theorem
title: Local Reeb stability for compact leaves with finite holonomy
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps:
- def-saturated-neighbourhood-of-a-leaf
- def-stable-leaf-of-a-foliation
- def-finite-holonomy-normal-model
- lem-the-normal-model-map-restricts-to-a-diffeomorphism-onto-a-saturated-neighbourhood
- lem-finite-holonomy-acts-on-a-small-transverse-disk
- def-regular-foliation-atlas
- def-compact-space
- def-countable-choice-principle-for-foliation-pair
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
sources:
  scraped: []
  references:
  - title: Ieke Moerdijk and Janez Mrčun, Introduction to Foliations and Lie Groupoids (Cambridge Studies in Advanced
      Mathematics 91, 2003)
    url: https://www.cambridge.org/core/books/introduction-to-foliations-and-lie-groupoids/75BBFED277FF39A56594731202789016
    locator: 'Design locators: §2.3, pp. 30–33 (local Reeb stability theorem)'
  - title: Matias del Hoyo and Rui Loja Fernandes, On deformations of compact foliations (Proc. AMS 147, 2019, 4555–4561)
    url: https://publish.illinois.edu/ruiloja/files/2023/07/compactfoliations.pdf
    locator: §1, PDF p. 1 and §2, PDF pp. 2–3 (compact-Hausdorff foliations and their local linear models; this
      paper is corroboration, not a proof of the general local Reeb theorem)
dependency_level: 11
---

## Statement

Assume $\mathrm{AC}_\omega$
([[def-countable-choice-principle-for-foliation-pair]]). Let $F$ be a regular
foliation of a smooth manifold $M$ and let $L$ be a compact leaf whose holonomy
group is finite. Then $L$ is stable ([[def-stable-leaf-of-a-foliation]]): for
every open neighbourhood $W$ of $L$ there is a saturated neighbourhood
$U\subseteq W$ of $L$ and a foliated diffeomorphism of $U$ onto an open
neighbourhood of the central leaf in the finite-holonomy normal model
$(\widehat L\times D)/H$ of [[def-finite-holonomy-normal-model]], carrying $L$
to the central leaf. Moreover, after shrinking, the neighbourhood $U$ admits a
retraction $\pi:U\to L$ such that for every leaf $L'\subseteq U$ the restriction
$\pi|_{L'}:L'\to L$ is a finite covering and $\pi^{-1}(y)$ is a transverse disk
for every $y\in L$; every leaf of $F|_U$ is compact with finite holonomy group
and is finitely covered by the holonomy cover $\widehat L$. The hypothesis
consumed is finiteness of the holonomy group, not finiteness of $\pi_1(L)$; no
orientability of $F$ or $M$ is required.

## Facts & Assumptions

**Given:** A regular foliation $F$ of a smooth manifold $M$ and a compact leaf $L$ with finite holonomy group $H$, and an open neighbourhood $W$ of $L$.

[F1] A compact leaf with finite holonomy admits an $H$-invariant transverse disk $D$ on which the finite holonomy group acts by diffeomorphisms, and the finite-holonomy normal model $(\widehat L\times D)/H$ is defined with central leaf canonically diffeomorphic to $L$ ([[lem-finite-holonomy-acts-on-a-small-transverse-disk]], [[def-finite-holonomy-normal-model]]).

[F2] The normal model map restricts to a foliated diffeomorphism of some model $(\widehat L\times D')/H$, $D'\subseteq D$, onto a saturated open neighbourhood $U$ of $L$, and $U$ can be taken inside any prescribed neighbourhood of $L$; every leaf of $F|_U$ is compact with finite holonomy and is finitely covered by $\widehat L$ ([[lem-the-normal-model-map-restricts-to-a-diffeomorphism-onto-a-saturated-neighbourhood]]).

[F3] A leaf is stable when every neighbourhood of it contains a saturated neighbourhood; the neighbourhoods form a fundamental system under the model description ([[def-stable-leaf-of-a-foliation]], [[def-saturated-neighbourhood-of-a-leaf]]).

[F4] The model carries the product foliation by the slices modulo the finite group action; the leafwise covering projection gives a smooth model retraction $[(\hat y,t)]\mapsto p(\hat y)$ onto $L$, because $p$ is invariant under deck transformations ([[def-finite-holonomy-normal-model]], [[def-regular-foliation-atlas]]).

[F5] The holonomy cover $\widehat L\to L$ is a finite covering when $H$ is finite, of degree $|H|$ ([[def-finite-holonomy-normal-model]], [[lem-the-normal-model-map-restricts-to-a-diffeomorphism-onto-a-saturated-neighbourhood]]).

[F6] Compactness of $L$ supplies the uniform transverse size in the model construction ([[def-compact-space]]).

## Proof

**Proof technique:** direct.

1.1 (The model neighbourhood.) Since $H$ is finite, [F1] provides the invariant transverse disk $D$ and the model $(\widehat L\times D)/H$; applying [F2] gives an $H$-invariant $D'\subseteq D$ and a foliated diffeomorphism $\overline\Phi$ of the model $(\widehat L\times D')/H$ onto a saturated open neighbourhood $U$ of $L$, with $U$ contained in the prescribed neighbourhood $W$ of $L$ because the model construction can be shrunk uniformly, using compactness of $L$ [F2, F6]. Thus $U\subseteq W$ is a saturated neighbourhood of $L$, and $L$ is stable in the sense of [F3]. [F1, F2, F3, F6]

1.2 (The retraction and the finite-covering description.) On the model define $\pi_0([(\hat y,t)]):=p(\hat y)$. Deck invariance of $p$ makes this well defined, and covering trivializations show it is smooth. It is the identity on the central leaf under its identification with $L$, so composing $\pi_0$ with the inverse model diffeomorphism gives a retraction $\pi:U\to L$. For $y\in L$, choose one lift $\hat y$ in the finite covering fibre; the map $t\mapsto[(\hat y,t)]$ identifies $D'$ diffeomorphically with $\pi_0^{-1}(y)$, since the deck group acts freely and transitively on that fibre. Thus the retraction fibres are transverse disks in the actual codimension, not necessarily intervals. The leaf represented by $t$ is $\widehat L/H_t$, and its projection to $L=\widehat L/H$ is the covering of degree $[H:H_t]$. This gives the claimed finite covering on each leaf; compactness and finite holonomy follow from F2. Projection to the transverse factor itself does not define this retraction. [F1, F2, F4, F5]

2.1 (Conclusion.) Every neighbourhood $W$ of $L$ contains the saturated neighbourhood $U$ constructed above, so $L$ is stable; the foliated diffeomorphism with the finite-holonomy normal model, the retraction with finite-covering leaf intersections, and the compactness and finite holonomy of the leaves of $F|_U$ are established in steps 1.1 and 1.2. The only hypothesis used beyond compactness of $L$ is finiteness of the holonomy group, not finiteness of $\pi_1(L)$. [F3, step 1.1, step 1.2] ∎
