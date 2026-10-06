---
id: lem-transverse-holonomy-transport-is-well-defined-and-equivariant
kind: lemma
title: Transverse holonomy transport is well defined and equivariant on the model
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps:
- lem-a-leafwise-path-determines-a-germ-of-transverse-diffeomorphism
- lem-holonomy-germ-is-independent-of-the-foliation-chart-chain
- thm-holonomy-depends-only-on-leafwise-homotopy-relative-endpoints
- def-holonomy-cover-of-a-leaf
- lem-deck-group-of-the-holonomy-cover-is-the-holonomy-group
- lem-finite-holonomy-acts-on-a-small-transverse-disk
- def-local-transversal-to-a-regular-foliation
- def-flat-chart-for-a-distribution
- def-plaque-of-a-flat-chart
- def-regular-foliation-atlas
- thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds
- def-countable-choice-principle-for-foliation-pair
- thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold
- def-compact-space
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
    locator: 'Design locators: §2.3, pp. 30–33; §2.5, pp. 44–51 (the normal model map)'
  - title: Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete
      author-hosted PDF)
    url: https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf
    locator: §4.2, printed pp. 140–143 (holonomy transport along leafwise paths)
  - title: Marius Crainic and Ioan Mărcuț, Reeb–Thurston stability for symplectic foliations
    url: https://arxiv.org/pdf/1307.4363
    locator: '§2, Lemma 1, PDF pp. 5–7, complete proof: tubular fibres, bounded chart chains and their domains,
      right-deck/forward-transport convention, and the invariant local model map'
dependency_level: 8
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $F$ be a smooth regular foliation of $M$, let $L$ be a compact leaf, let $x\in L$, and suppose its holonomy group $H$ is finite. Let $p:\widehat L\to L$ be the holonomy cover with the left deck identification of [[lem-deck-group-of-the-holonomy-cover-is-the-holonomy-group]]. Choose a tubular projection onto $L$, whose fibre $T_x$ is the endpoint transversal at $x$, and realize $H$ on an invariant disk $D\subseteq T_x$ as in [[lem-finite-holonomy-acts-on-a-small-transverse-disk]]. After shrinking $D$, there is a smooth map
$$\Phi:\widehat L\times D\to M$$
with $\Phi(\hat y,x)=p(\hat y)$, $\Phi(h\hat y,ht)=\Phi(\hat y,t)$, and with each slice $\widehat L\times\{t\}$ mapped into the leaf through $t$. Locally in $\hat y$, the map is represented by plaque transport to the tubular fibre at $p(\hat y)$; its germ depends only on the path class represented by $\hat y$. Its actual values on $D$ are furnished by a compatible finite family of representatives. Arbitrary transport representatives of equal germs need not agree on all of $D$; no assertion that every arbitrarily chosen path chain is defined there is made.

## Facts & Assumptions

**Given:** The compact smooth leaf, finite holonomy, fixed tubular endpoint fibres, holonomy cover and the stated choice assumption.

[F1] Path transport gives a germ independent of chart chain and invariant under endpoint-fixed leafwise homotopy ([[lem-a-leafwise-path-determines-a-germ-of-transverse-diffeomorphism]], [[lem-holonomy-germ-is-independent-of-the-foliation-chart-chain]], [[thm-holonomy-depends-only-on-leafwise-homotopy-relative-endpoints]]).

[F2] With reversed-loop holonomy and left deck multiplication, the deck element corresponding to the forward germ $h_\gamma$ prepends $\gamma^{-1}$. The holonomy cover of a compact finite-holonomy leaf is finite-sheeted ([[lem-deck-group-of-the-holonomy-cover-is-the-holonomy-group]]).

[F3] A finite germ group has a smooth action on an invariant disk, conjugate by the averaged coordinate $k$ to its derivative action ([[lem-finite-holonomy-acts-on-a-small-transverse-disk]], proof step 3.1).

[F4] Crainic–Mărcuț, *Reeb–Thurston stability for symplectic foliations*, §2, Lemma 1, PDF pp. 5–7, establishes a foliated diffeomorphism from an open neighborhood of the central leaf in the finite linear-holonomy model onto an open neighborhood of an embedded finite-holonomy leaf. Its complete proof constructs the map by transport between fixed tubular fibres. It uses domains $O_n$ for chains of length at most $n$, verifies representative comparisons on those domains and proves $\widetilde H(\hat y g,h(g^{-1})v)=\widetilde H(\hat y,v)$ for its right-deck/forward-transport convention. This external lemma, not just the statement of classical Reeb stability, is the construction input here.

[F5] A closed smooth embedded submanifold has a tubular neighborhood under $\mathrm{AC}_\omega$ ([[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]]). A continuous injective immersion with compact intrinsic source into a Hausdorff manifold is embedded: compact images of closed subsets are closed, so the inverse onto its image is continuous ([[def-compact-space]], [[def-hausdorff-space]]).

## Proof

**Proof technique:** use the fully proved external construction with explicit conventions.

1.1 The smooth plaque charts make the inclusion of $L$ an injective immersion. Its intrinsic compactness and ambient Hausdorffness give an embedding by F5; compactness also makes its image closed. Choose a tubular neighborhood by F5 and shrink it so its fibres are transverse to the foliation, which holds along $L$ and persists nearby. This specifies the endpoint transversals required by F1. [F1, F5]

1.2 Apply F4 to this tubular setting. It gives a foliated map on an open neighborhood of the zero section in the linear model. Compactness of the finite cover $\widehat L$ gives a common transverse ball inside the lifted domain: finitely many product neighborhoods covering $\widehat L\times\{0\}$ suffice, and the intersection of their transverse neighborhoods contains a ball. Make this ball invariant by averaging an inner product over the finite derivative action. Conjugate back using F3, whose coordinate $k$ has identity derivative. Thus the external construction supplies compatible actual representatives on $\widehat L\times D$, rather than promoting infinitely many unrelated germ equalities to a uniform-domain equality. [F2, F3, F4]

2.1 In the source convention the right deck action prepends $\gamma$ and pairs it with inverse forward transport. Our left deck element $h=h_\gamma$ prepends $\gamma^{-1}$ by F2. Substituting $g$ corresponding to $\gamma^{-1}$ into the source formula gives $\Phi(h\hat y,ht)=\Phi(\hat y,t)$. A chosen local transport family follows the leaf from the initial point $t$, so its image lies in that leaf. Source transport is between the specified tubular fibres, and F1 identifies its local germ with the path class represented by $\hat y$. [F1, F2, F4, step 1.2]

3.1 On the zero slice the construction is fixed on $L$, so $\Phi(\hat y,x)=p(\hat y)$. Its smoothness, leafwise property, actual diagonal invariance and compatible local transport representatives follow from the external construction and steps 1.2–2.1. It therefore descends to a smooth map on $(\widehat L\times D)/H$. [F2, F4, step 1.2, step 2.1] ∎
