---
id: lem-the-normal-model-map-restricts-to-a-diffeomorphism-onto-a-saturated-neighbourhood
kind: lemma
title: The normal model map restricts to a diffeomorphism onto a saturated neighbourhood
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps:
- lem-the-normal-model-map-is-a-foliated-local-diffeomorphism
- def-finite-holonomy-normal-model
- def-saturated-neighbourhood-of-a-leaf
- def-regular-foliation-atlas
- thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds
- def-compact-space
- prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure
- def-countable-choice-principle-for-foliation-pair
- def-smooth-manifold
- thm-finite-products-of-compact-spaces
- cor-euclidean-closed-balls-and-spheres-are-compact
- thm-compactness-under-continuous-maps
- thm-compact-iff-fip
- cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed
- thm-compactness-is-invariant-under-finite-sheeted-coverings
- lem-deck-group-of-the-holonomy-cover-is-the-holonomy-group
- def-topological-manifold-without-boundary
- def-hausdorff-space
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
    locator: 'Design locators: §2.3, pp. 30–33 (local Reeb stability; the model is a neighbourhood)'
  - title: Matias del Hoyo and Rui Loja Fernandes, On deformations of compact foliations (Proc. AMS 147, 2019, 4555–4561)
    url: https://publish.illinois.edu/ruiloja/files/2023/07/compactfoliations.pdf
    locator: §1, PDF p. 1 and §2, PDF pp. 2–3 (compact-Hausdorff foliations and their local linear models; this
      paper is corroboration, not a proof of the general local Reeb theorem)
dependency_level: 10
---

## Statement

Assume $\mathrm{AC}_\omega$
([[def-countable-choice-principle-for-foliation-pair]]). In the situation of
the two preceding lemmas there is an $H$-invariant open neighbourhood
$D'\subseteq D$ of $x$ such that the descended map
$\overline\Phi:(\widehat L\times D')/H\to M$ is injective. Consequently
$\overline\Phi$ is a foliated diffeomorphism of the model
$(\widehat L\times D')/H$ onto a saturated open neighbourhood
$U=\overline\Phi\bigl((\widehat L\times D')/H\bigr)$ of $L$, and every leaf of
$F|_U$ is compact with finite holonomy and is finitely covered by the holonomy
cover $\widehat L$. The neighbourhood $U$ can be taken inside any prescribed
neighbourhood of $L$.

## Facts & Assumptions

**Given:** The normal model $(\widehat L\times D)/H$ and its map $\overline\Phi$ to $M$, with $L$ compact and $H$ finite.

[F1] The descended map $\overline\Phi$ is a foliated local diffeomorphism: it maps model leaves into leaves of $F$, its differential is invertible everywhere, and it restricts on the central leaf to the canonical identification with $L$ ([[lem-the-normal-model-map-is-a-foliated-local-diffeomorphism]], [[def-finite-holonomy-normal-model]]).

[F2] The model is a smooth manifold whose leaves are the images of the slices $\widehat L\times\{t\}$, and each leaf of the model is finitely covered by $\widehat L$ because its holonomy is the finite stabilizer $H_t$ ([[def-finite-holonomy-normal-model]], [[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]], [[def-regular-foliation-atlas]]).

[F3] An open set is saturated for $F$ when it is a union of leaves; an injective local diffeomorphism is a diffeomorphism onto its open image ([[def-saturated-neighbourhood-of-a-leaf]], [[lem-the-normal-model-map-is-a-foliated-local-diffeomorphism]]).

[F4] A compact space admits finite subcovers of every open cover, and the holonomy cover of the compact leaf is a finite-sheeted covering of it when the holonomy group is finite, hence compact ([[def-compact-space]], [[thm-compactness-is-invariant-under-finite-sheeted-coverings]], [[lem-deck-group-of-the-holonomy-cover-is-the-holonomy-group]], [[thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds]]).

[F5] Finite products of compact spaces are compact in the product topology, a closed Euclidean ball in each finite dimension is compact, the continuous image of a compact space is compact, and a space is compact exactly when every family of its closed subsets with the finite intersection property has nonempty intersection ([[thm-finite-products-of-compact-spaces]], [[cor-euclidean-closed-balls-and-spheres-are-compact]], [[thm-compactness-under-continuous-maps]], [[thm-compact-iff-fip]], [[def-compact-space]]).

[F6] If $Z$ is a topological space, $Y$ is Hausdorff and $f,g:Z\to Y$ are continuous, then $\{z\in Z:f(z)=g(z)\}$ is closed in $Z$; smooth manifolds are Hausdorff ([[cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed]], [[def-topological-manifold-without-boundary]], [[def-hausdorff-space]], [[def-smooth-manifold]]).

## Proof

**Proof technique:** direct.

1.1 (Injectivity on a small model.) The central leaf $\Sigma$ maps injectively onto $L$ and $\overline\Phi$ is a local diffeomorphism there [F1]. The finite cover $\widehat L$ is compact [F4]. Use the linearized transverse coordinates specified in F2. Average a Euclidean inner product over the finite derivative representation of $H$; every group element preserves its norm. Choose a closed ball inside the linearized image of $D$, and smaller radii $r_n\to0$. Pulling those balls back through the conjugating coordinate gives nested invariant compact disks $K_n\subseteq D$, with intersection $\{x\}$. Their interiors are disk-like without a further exponential-map prerequisite. Then $Q_n:=(\widehat L\times K_n)/H$ is compact by F5, and $\bigcap_n Q_n=\Sigma$: the orbit-invariant distance to $x$ tends to zero precisely on the central slice. Put $C_n:=\{(u,v)\in Q_n^2:\overline\Phi(u)=\overline\Phi(v)\}$ and let $E_n$ be the closure in $Q_1^2$ of $C_n\setminus\Delta$. Each $C_n$ is closed by F6. If no sufficiently small open model is injective, every $E_n$ is nonempty; these are nested compact closed sets, so F5 supplies $z\in\bigcap_n E_n$. Since $E_n\subseteq C_n$, both components of $z$ lie in $\Sigma$ and have the same image, hence $z=(u,u)$ by central injectivity. A local inverse neighborhood $V$ of $u$ contains no distinct pair with equal image, whereas $z\in E_1$ requires every neighborhood of $z$ to meet $C_1\setminus\Delta$. The contradiction yields an invariant open disk-like ball $D'\subseteq D$ on whose model $\overline\Phi$ is injective. This works in every transverse dimension; in dimension zero $D=\{x\}$ and central injectivity already suffices. No bad-pair sequence or choice principle is used. [F1, F4, F5, F6]

1.2 (Diffeomorphism onto a saturated neighbourhood.) The image $U$ is open, and injectivity makes $\overline\Phi$ a diffeomorphism onto $U$ [F3]. Each model leaf is $\widehat L/H_t$ for a finite stabilizer $H_t$, hence compact by F2 and F4. Its image lies in one ambient leaf and is open in that leaf by the foliated local inverse charts [F1]; it is also closed in that leaf, since the map into its intrinsic Hausdorff topology is continuous in plaque charts and has compact domain. The image is nonempty, so connectedness of the ambient leaf makes it the whole leaf. Thus $U$ is a union of complete ambient leaves and is saturated. It contains $L$ by the central identification. For a prescribed open neighborhood $W$ of $L$, the preimage of $W$ under $\Phi$ is open and contains $\widehat L\times\{x\}$; a finite product-chart cover of compact $\widehat L$ gives a common transverse neighborhood contained in that preimage. A smaller invariant ball $D'$ therefore makes $U\subseteq W$. [F1, F2, F3, F4]

2.1 (Leaves of the image.) Every leaf of $F|_U$ is the image of a model leaf $\widehat L\times\{t\}$ modulo its finite stabilizer $H_t$ [F1, F2]; since $H$ is finite and $L$ is compact, $\widehat L$ is compact (it finitely covers $L$) and each such leaf is compact, is finitely covered by $\widehat L$, and has finite holonomy group $H_t$ [F2]. This proves the leaf description of the model neighbourhood. [F2, step 1.2] ∎
