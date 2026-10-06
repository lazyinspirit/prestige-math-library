---
id: thm-thurston-stability-for-c1-interval-germ-groups-are-locally-indicable
kind: theorem
title: "Thurston stability: groups of orientation-preserving C¹ interval germs are locally indicable"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-c1-germ-of-a-local-diffeomorphism-at-a-point, lem-c1-germs-of-local-diffeomorphisms-form-a-group, def-c-one-map-and-local-inverse, def-group, def-subgroup, cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules, lem-images-of-finitely-generated-and-finite-groups-are-finitely-generated-and-finite]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete author-hosted PDF)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
      locator: "§2.16.2, Theorem 2.119 (Thurston stability theorem) and its complete proof, printed pp. 106–107 (PDF pp. 115–116); the proof uses only C¹ regularity"
dependency_level: 2
---

## Statement

Let $G$ be a nontrivial finitely generated subgroup of
$\operatorname{Diff}^{1,+}_0(\mathbb R)$, the group of germs at $0$ of $C^1$
orientation-preserving local diffeomorphisms of $\mathbb R$ fixing $0$
([[def-c1-germ-of-a-local-diffeomorphism-at-a-point]],
[[lem-c1-germs-of-local-diffeomorphisms-form-a-group]]). Then there is a
surjective homomorphism $G\twoheadrightarrow\mathbb Z$; that is,
$\operatorname{Diff}^{1,+}_0(\mathbb R)$ is locally indicable.

## Facts & Assumptions

**Given:** A nontrivial finitely generated subgroup $G\le\operatorname{Diff}^{1,+}_0(\mathbb R)$ with a finite generating set $g_1,\dots,g_m$, and representatives of these germs defined near $0$ and fixing $0$.

[F1] $\operatorname{Diff}^{1,+}_0(\mathbb R)$ is a group under composition of germs, its elements are germs of $C^1$ local diffeomorphisms with positive derivative at $0$, and a subgroup is a subset containing the identity and closed under products and inverses ([[lem-c1-germs-of-local-diffeomorphisms-form-a-group]], [[def-group]], [[def-subgroup]]).

[F2] A $C^1$ local diffeomorphism of $\mathbb R$ fixing $0$ with derivative $1$ at $0$ can be written near $0$ as $g(x)=x+y(g)(x)$ with $y(g)(0)=0$ and $y(g)'(0)=0$; the derivative of a $C^1$ map is continuous, so for every $\epsilon>0$ there is a neighbourhood of $0$ on which $|y(g)'|<\epsilon$ ([[def-c-one-map-and-local-inverse]], [[def-c1-germ-of-a-local-diffeomorphism-at-a-point]]).

[F3] The image of a finitely generated group under a homomorphism is finitely generated ([[lem-images-of-finitely-generated-and-finite-groups-are-finitely-generated-and-finite]]).

[F4] Every finitely generated abelian group is isomorphic to $\mathbb Z^r\oplus$(finite torsion) for a unique $r\ge0$; a nonzero finitely generated torsion-free abelian group therefore has $r\ge1$ and admits a surjection onto $\mathbb Z$ ([[cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules]]).

## Proof

**Proof technique:** direct, following Calegari's proof of Theorem 2.119.

1.1 (The derivative homomorphism.) For a germ $g\in G$ choose a representative and set $d(g):=\log g'(0)$; the value is well defined because representatives agree near $0$ and the derivative at $0$ is a germ invariant, and $d(gh)=d(g)+d(h)$ by the chain rule, so $d:G\to\mathbb R$ is a homomorphism into the additive group of the reals [F1]. If $d(G)\neq\{0\}$, then $d(G)$ is a nonzero finitely generated subgroup of $\mathbb R$ by [F3], hence torsion-free, and [F4] shows $d(G)\cong\mathbb Z^r$ with $r\ge1$; projecting onto one free coordinate gives a surjective homomorphism $G\twoheadrightarrow\mathbb Z$, and the theorem is proved. Henceforth assume $d(G)=\{0\}$, that is, every element of $G$ has derivative $1$ at $0$. [F1, F2, F3, F4]

2.1 (Normalized displacements.) Shrink a common domain so that every generator is defined and satisfies [F2]; then $g_j(x)=x+y(g_j)(x)$ with $y(g_j)'(0)=0$. Since $G$ is nontrivial, some generator is not the identity germ, so the open set $\{x:w(x)>0\}$, where $w(x):=\max_j|y(g_j)(x)|$, accumulates at $0$. Fix an enumeration of the rationals and, for every $n\ge1$, let $x_n$ be the rational of least index lying in the nonempty open set $\{x:|x|<1/n,\ w(x)>0\}$; then $x_n\to0$ and $w_n:=w(x_n)>0$, and this selection is canonical, so no choice principle is used. The vectors $a_n:=(y(g_j)(x_n)/w_n)_{j=1}^m$ lie in the compact cube $[-1,1]^m$ and have maximum norm $1$; passing to a convergent subsequence, write $a=(a_1,\dots,a_m)$ for its limit, so $\max_j|a_j|=1$ and $a\neq0$. [F2, step 1.1]

3.1 (Word estimates.) Fix a word $w$ in the letters $g_j^{\pm1}$ and let $e_j(w)\in\mathbb Z$ be the signed exponent sum of the letter $g_j$ in $w$. We claim that the displacement of the corresponding element, as a function of $x$, satisfies $$y(w)(x_n)=w_n\sum_{j=1}^m e_j(w)\,a_j+o(w_n).$$ This follows by induction on the length of $w$ from two estimates: (i) for generators, $y(g_j)(x_n)=w_n a_j+o(w_n)$ by step 2.1; (ii) the composition formula $g\circ h(x)=x+y(h)(x)+y(g)(x+y(h)(x))$ and the continuity of $y(g)'$ with $y(g)'(0)=0$ give $y(g)(x+y(h)(x))=y(g)(x)+o(|y(h)(x)|)$, so composing adds the displacements up to $o(w_n)$ uniformly over words whose letters are taken from the fixed finite set, because every partial displacement is $O(w_n)$ by the induction hypothesis and the increment is taken at points $x_n+O(w_n)\to0$. For an inverse letter, applying the same composition formula to $g^{-1}\circ g$ at $x_n$ gives $y(g^{-1})(x_n)=-y(g)(x_n)+o(w_n)$. Multiplying these estimates through the word proves the displayed formula. [F2, step 2.1]

4.1 (The limiting homomorphism.) Define $v(g):=\lim_n y(w)(x_n)/w_n$ for any word $w$ representing $g\in G$. The value is independent of the chosen word: if $w,w'$ represent the same germ, then the displacement function of $w'w^{-1}$ vanishes identically near $0$, since $w'w^{-1}$ is the identity germ, while step 3.1 applied to the word $w'w^{-1}$ gives $\sum_j e_j(w'w^{-1})a_j$ as its normalized limit; hence the two normalized limits agree. Moreover $v(gh)=v(g)+v(h)$, because concatenating representatives concatenates words and signed exponent sums are additive; and $v$ is nontrivial because $v(g_j)=a_j$ with $\max_j|a_j|=1$ [F1]. Thus $v:G\to\mathbb R$ is a nonzero homomorphism. [F1, step 3.1]

5.1 (Surjection onto $\mathbb Z$.) The image $v(G)$ is a nonzero finitely generated subgroup of $\mathbb R$ by [F3], so it is torsion-free and [F4] identifies it with $\mathbb Z^r$ for some $r\ge1$; projecting onto one free coordinate gives a surjective homomorphism $G\twoheadrightarrow\mathbb Z$. Since every nontrivial finitely generated subgroup $G$ was handled in one of the two cases, $\operatorname{Diff}^{1,+}_0(\mathbb R)$ is locally indicable. [F3, F4, step 1.1, step 4.1] ∎
