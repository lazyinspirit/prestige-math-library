---
id: lem-the-normal-model-map-is-a-foliated-local-diffeomorphism
kind: lemma
title: The normal model map is a foliated local diffeomorphism
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps:
- lem-transverse-holonomy-transport-is-well-defined-and-equivariant
- def-finite-holonomy-normal-model
- prop-quotient-foliation-under-a-free-proper-foliated-action
- def-diffeomorphism-and-local-diffeomorphism-of-manifolds
- thm-smooth-inverse-function-theorem-on-manifolds
- def-smooth-manifold
- def-countable-choice-principle-for-foliation-pair
- lem-finite-holonomy-acts-on-a-small-transverse-disk
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
  - title: Ieke Moerdijk and Janez Mrčun, Introduction to Foliations and Lie Groupoids (Cambridge Studies in Advanced
      Mathematics 91, 2003)
    url: https://www.cambridge.org/core/books/introduction-to-foliations-and-lie-groupoids/75BBFED277FF39A56594731202789016
    locator: 'Design locators: §2.3, pp. 30–33 (the normal model and the local diffeomorphism form)'
  - title: Matias del Hoyo and Rui Loja Fernandes, On deformations of compact foliations (Proc. AMS 147, 2019, 4555–4561)
    url: https://publish.illinois.edu/ruiloja/files/2023/07/compactfoliations.pdf
    locator: §1, PDF p. 1 and §2, PDF pp. 2–3 (compact-Hausdorff foliations and their local linear models; this
      paper is corroboration, not a proof of the general local Reeb theorem)
dependency_level: 9
---

## Statement

Assume $\mathrm{AC}_\omega$
([[def-countable-choice-principle-for-foliation-pair]]). In the situation of
[[lem-transverse-holonomy-transport-is-well-defined-and-equivariant]], the map
$\Phi$ is $H$-equivariant, so it descends to a smooth map
$$\overline\Phi:\mathcal N=(\widehat L\times D)/H\longrightarrow M,\qquad \overline\Phi\bigl([(\hat y,t)]\bigr):=\Phi(\hat y,t).$$
Then: (i) $\overline\Phi$ maps leaves of the model foliation into leaves of
$F$; (ii) $\overline\Phi$ is a local diffeomorphism; (iii) the differential of
$\overline\Phi$ is invertible at every point of the central leaf and induces
the canonical identification of the central leaf with $L$; (iv) $\overline\Phi$
is a foliated local diffeomorphism, carrying the model foliation locally onto
$F$.

## Facts & Assumptions

**Given:** The setting of the model map $\Phi:\widehat L\times D\to M$, its diagonal $H$-invariance, and the model $\mathcal N=(\widehat L\times D)/H$.

[F1] The map $\Phi$ is well defined, smooth and invariant under the diagonal action of $H$; hence it descends to a smooth map $\overline\Phi:\mathcal N\to M$; the central leaf of the model is the image of $\widehat L\times\{x\}$ and is canonically diffeomorphic to $L$ ([[lem-transverse-holonomy-transport-is-well-defined-and-equivariant]], [[def-finite-holonomy-normal-model]], [[prop-quotient-foliation-under-a-free-proper-foliated-action]]).

[F2] Each map $t\mapsto\Phi(\hat y,t)$ is a transverse transport along a leafwise path, hence a germ of a local diffeomorphism of the transversal, and the maps $\Phi(\cdot,t)$ are obtained by plaque transport inside the leaves of $F$ ([[lem-transverse-holonomy-transport-is-well-defined-and-equivariant]], [[lem-finite-holonomy-acts-on-a-small-transverse-disk]]).

[F3] A smooth map whose differential is invertible at a point is a local diffeomorphism near that point ([[thm-smooth-inverse-function-theorem-on-manifolds]], [[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]], [[def-smooth-manifold]]).

## Proof

**Proof technique:** direct.

1.1 (Descent and mapping of leaves.) By [F1] the $H$-invariance of $\Phi$ descends it to the smooth map $\overline\Phi$ on the model, and on the central leaf $\overline\Phi$ restricts to the canonical identification with $L$. Each slice $\widehat L\times\{t\}$ is carried by $\Phi$ into the leaf of $F$ through $t$ by plaque transport [F2], and the model leaves are exactly the images of the slices [F1]; hence $\overline\Phi$ maps model leaves into leaves of $F$. [F1, F2]

1.2 (Invertible differential along the central leaf.) At a central point $(\hat y,x)$ the derivative of $\overline\Phi$ restricted to the leaf direction is the derivative of the covering $p$ at $\hat y$, which is invertible because a covering is a local diffeomorphism [F1]. In the transverse direction the derivative is the derivative at $t=x$ of the transport germ $t\mapsto\Phi(\hat y,t)$, which is invertible because it is a germ of a local diffeomorphism [F2]. The leaf direction and the transverse direction are complementary: the transversal $T$ is transverse to the plaques by the definition of a local transversal, and their images span $T_{\Phi(\hat y,x)}M$. Hence $d\overline\Phi$ is invertible at every central point, and by continuity it stays invertible on a neighbourhood of the central leaf. [F1, F2]

2.1 (Local diffeomorphism everywhere.) For an arbitrary point $[(\hat y,t)]$ of the model, the same argument applies with the slice through $t$ in place of the central slice: the leafwise direction is given by plaque transport along the leaf through $t$, a local diffeomorphism, and the transverse direction by the transport germ $t\mapsto\Phi(\hat y,t)$ at the corresponding point, which is a germ of a local diffeomorphism, and the two directions are complementary because plaque directions and transverse directions are complementary everywhere by [F2]. Therefore $d\overline\Phi$ is invertible at every point and $\overline\Phi$ is a local diffeomorphism by [F3]. It carries the model foliation locally onto the foliation $F$ because it is a local diffeomorphism mapping model leaves into leaves [F3, step 1.1]. [F2, F3, step 1.1, step 1.2]

3.1 The descended map $\overline\Phi$ is a smooth map of the model to $M$ that carries leaves to leaves, is a local diffeomorphism everywhere, restricts to the canonical identification of the central leaf with $L$, and is therefore a foliated local diffeomorphism. [step 1.1, step 1.2, step 2.1] ∎
