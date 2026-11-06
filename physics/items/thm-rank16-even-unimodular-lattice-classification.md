---
id: thm-rank16-even-unimodular-lattice-classification
kind: theorem
title: Classification of positive even unimodular lattices of rank 16
domain: mathematics
library: physics
category: string-theory
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 4
deps:
  - def-positive-even-unimodular-lattice
  - def-e8-and-d16plus-rank16-lattices
  - def-inner-product-space
  - def-orthogonal-vectors-sets-and-orthonormal-bases
  - thm-gram-schmidt-orthonormalisation
  - def-full-rank-lattice-covolume-and-dual-lattice
  - def-euclidean-inner-product
  - def-reduced-crystallographic-euclidean-root-system
  - cor-index-of-a-full-rank-integer-sublattice-is-the-absolute-determinant
  - lem-e8-d16plus-are-even-unimodular
  - lem-even-unimodular-rank16-has-480-roots
  - lem-rank16-norm2-root-system-classification
  - lem-d16-even-index-two-overlattice-is-d16plus
dependency_roles:
  def-positive-even-unimodular-lattice: mathematical-premise
  def-e8-and-d16plus-rank16-lattices: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-orthogonal-vectors-sets-and-orthonormal-bases: mathematical-premise
  thm-gram-schmidt-orthonormalisation: mathematical-premise
  def-full-rank-lattice-covolume-and-dual-lattice: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-reduced-crystallographic-euclidean-root-system: mathematical-premise
  cor-index-of-a-full-rank-integer-sublattice-is-the-absolute-determinant: mathematical-premise
  lem-e8-d16plus-are-even-unimodular: mathematical-premise
  lem-even-unimodular-rank16-has-480-roots: mathematical-premise
  lem-rank16-norm2-root-system-classification: mathematical-premise
  lem-d16-even-index-two-overlattice-is-d16plus: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Paul Ginsparg, Applied Conformal Field Theory, arXiv:hep-th/9108028v1"
      url: "https://arxiv.org/pdf/hep-th/9108028v1"
      locator: "Chapter 7, printed pp. 104-107, the E8 and rank-16 examples; the source does not claim an exhaustive classification proof."
    - title: "Timo Weigand, Introduction to String Theory, Heidelberg lecture notes, winter term 2011/12"
      url: "https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf"
      locator: "Chapter 6.9, printed pp. 151-154, and §7.2, printed pp. 157-160; the two heterotic gauge-group alternatives, not a lattice classification proof."
    - title: "Gaëtan Chenevier and Jean Lannes, Formes automorphes et voisins de Kneser des réseaux de Niemeier, arXiv:1409.7616v2"
      url: "https://arxiv.org/pdf/1409.7616v2"
      locator: "§II.3, Corollaire 3.6 on printed p. 41 (PDF p. 46); the preceding Proposition-Définition 3.3 on printed p. 40 (PDF p. 45) gives the norm-2 root count and common Coxeter-number constraints. The local proof below expands the root-type inspection and the D16 overlattice argument."
    - title: "Noam Elkies, Math 272y: Rational Lattices and their Theta Functions, lecture notes for 23 and 25 September 2019"
      url: "https://people.math.harvard.edu/~elkies/M272.19/sep23.pdf"
      locator: "The modular-form ring theorem and theta-series corollary, PDF pp. 4-6; the rank-16 classification paragraph is on PDF p. 6, after invoking the root-lattice classification, which is supplied locally here."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Every positive-definite, integral, even, unimodular lattice of rank $16$ is isometric to exactly one of the two displayed coordinate lattices $E_8\oplus E_8$ and $D_{16}^{+}$. Here an isometry is an additive bijection preserving the inner product. The two isometry classes are distinct.

## Statement references

[[def-e8-and-d16plus-rank16-lattices]]

## Facts & Assumptions

**Given:** A $16$-dimensional positive-definite real inner-product space $V$ and a full lattice $\Lambda\subset V$ that is integral, even, and unimodular ([[def-positive-even-unimodular-lattice]]).

[F1] Every finite-dimensional real inner-product space has an orthonormal basis, obtained by Gram-Schmidt from a basis ([[def-inner-product-space]], [[def-orthogonal-vectors-sets-and-orthonormal-bases]], [[thm-gram-schmidt-orthonormalisation]]).

[F2] In orthonormal coordinates, a full lattice is $A\mathbb Z^{16}$ for an invertible real matrix $A$; integrality means all lattice pairings are integers, unimodularity means equality with the dual lattice, and $\operatorname{covol}(\Lambda^*)=\operatorname{covol}(\Lambda)^{-1}$ ([[def-positive-even-unimodular-lattice]], [[def-full-rank-lattice-covolume-and-dual-lattice]], [[def-euclidean-inner-product]]).

[F3] The norm-2 vectors of a positive even unimodular rank-16 lattice number $480$, with a proof through an explicit Gaussian Fourier-series identity ([[lem-even-unimodular-rank16-has-480-roots]]).

[F4] A finite reduced crystallographic root system of rank at most $16$ with all roots of squared norm $2$ and $480$ roots has rank $16$, type $D_{16}$ or $E_8\oplus E_8$, and root lattice isometric to the corresponding standard coordinate lattice ([[lem-rank16-norm2-root-system-classification]]).

[F5] The displayed coordinate models define $E_8$, $E_8\oplus E_8$, and $D_{16}^{+}$, and the local property proof establishes they are positive even unimodular lattices ([[def-e8-and-d16plus-rank16-lattices]], [[lem-e8-d16plus-are-even-unimodular]]).

[F6] For full lattices, finite index is the covolume ratio, and the index of a full-rank integer sublattice is the absolute determinant in an integer basis ([[def-full-rank-lattice-covolume-and-dual-lattice]], [[cor-index-of-a-full-rank-integer-sublattice-is-the-absolute-determinant]]).

[F7] Every even integral full lattice $L$ with $D_{16}\subseteq L\subseteq D_{16}^{*}$ and $[L:D_{16}]=2$ is isometric to $D_{16}^{+}$ ([[lem-d16-even-index-two-overlattice-is-d16plus]]).

[F8] A reduced crystallographic root system is finite, spans its root-space, is closed under $s_\alpha(x)=x-2\langle x,\alpha\rangle\alpha/\langle\alpha,\alpha\rangle$, has integral Cartan integers, and is reduced ([[def-reduced-crystallographic-euclidean-root-system]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], choose an orthonormal basis of $V$ and identify $V$ isometrically with $\mathbb R^{16}$. In these coordinates $\Lambda=A\mathbb Z^{16}$ by [F2]. The isometry preserves pairings, norms, integrality, evenness and the dual, so it suffices to classify this coordinate lattice. [F1, F2, given, algebra]

1.2 Define $R:=\{x\in\Lambda:\langle x,x\rangle=2\}$. It is finite: if $x=Ak\in R$, then $k=A^{-1}x$ has bounded coordinates, leaving only finitely many integer vectors $k$. It is a reduced crystallographic root system in $\operatorname{span}_{\mathbb R}R$: it has no zero vector; all roots have the same norm, so only $\pm x$ lie on each root line; for $x,y\in R$, $\langle y,x\rangle\in\mathbb Z$ by integrality and $s_x(y)=y-\langle y,x\rangle x\in\Lambda$ has the same norm $2$, so reflection preserves $R$. By construction its roots all have squared norm $2$. [F1, F2, F8, given, construct, algebra]

2.1 By [F3], $|R|=480$. The hypotheses of [F4] now hold by step 1.2, so $R$ has rank $16$ and its root lattice $Q(R)$ is isometric to either $D_{16}$ or $E_8\oplus E_8$. [F3, F4, step 1.2, given]

3.1 If $Q(R)$ is isometric to $E_8\oplus E_8$, it is a full sublattice of $\Lambda$ because every root lies in $\Lambda$. Both lattices have covolume $1$ by unimodularity [F5]; their inclusion therefore has index $1$ by [F6], so $Q(R)=\Lambda$ up to that isometry. Hence $\Lambda$ is isometric to $E_8\oplus E_8$. [F5, F6, step 2.1, given]

3.2 If $Q(R)$ is isometric to $D_{16}$, transport coordinates by that lattice isometry and regard $D_{16}\subseteq\Lambda$. The coordinate-sum parity map $\mathbb Z^{16}\to\mathbb Z/2\mathbb Z$ is onto with kernel $D_{16}$, so $[\mathbb Z^{16}:D_{16}]=2$ and [F6] gives $\operatorname{covol}(D_{16})=2$; unimodularity gives $\operatorname{covol}(\Lambda)=1$. Hence $[\Lambda:D_{16}]=2$ by the covolume ratio in [F6]. Integrality of $\Lambda$ gives $\Lambda\subseteq D_{16}^*$ because every $x\in\Lambda$ pairs integrally with every element of $D_{16}\subseteq\Lambda$. Thus [F7] applies and $\Lambda$ is isometric to $D_{16}^{+}$. [F2, F5, F6, F7, step 2.1, given]

4.1 Both candidate models satisfy the hypotheses by [F5]. They are not isometric: the norm-2 vectors of $D_{16}^{+}$ are exactly the roots $\pm e_i\pm e_j$ of the irreducible system $D_{16}$, since every vector in the half-integer coset has norm at least $16/4=4$. By [F5], every nonzero vector of $E_8$ has positive even integer squared norm, hence squared norm at least $2$. Therefore a vector $(x,y)\in E_8\oplus E_8$ has squared norm $2$ if and only if exactly one component is zero and the other is an $E_8$ norm-2 root. These give the two orthogonal $E_8$ root components; each is nonempty because $e_1-e_2\in D_8\subset E_8$ has squared norm $2$, so $(e_1-e_2,0)$ and $(0,e_1-e_2)$ lie in the respective components. An inner-product-preserving bijection preserves the norm-2 root system and its orthogonal decomposition, so it cannot identify these two types. Steps 3.1 and 3.2 prove exhaustiveness, and this nonisometry proves uniqueness of the listed class. [F2, F4, F5, step 3.1, step 3.2, given] ∎
