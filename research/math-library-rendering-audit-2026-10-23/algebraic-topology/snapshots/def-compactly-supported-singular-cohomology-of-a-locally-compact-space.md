---
id: "def-compactly-supported-singular-cohomology-of-a-locally-compact-space"
kind: "definition"
title: "Compactly supported singular cohomology"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-relative-singular-cochain-complex","def-filtered-category-and-filtered-colimit","thm-locally-compact-hausdorff-basics"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, §3.3, pp.242–243
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
    - title: May, A Concise Course in Algebraic Topology, Chapter 20 §5
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
---

## Definition

Let $X$ be a locally compact Hausdorff space, and let $G$ be an abelian group, or an $R$-module if an $R$-module structure is desired. Its **compactly supported singular cohomology** is
$$H_c^p(X;G)=\varinjlim_{K\subseteq X\text{ compact}}H^p(X,X\setminus K;G).$$
The relative groups use [[def-relative-singular-cochain-complex]]. If $K\subseteq L$, the identity map of pairs $(X,X\setminus L)\to(X,X\setminus K)$ induces the transition from the $K$ group to the $L$ group. Concretely, a cochain vanishing on all simplices outside $K$ also vanishes on all simplices outside $L$, so this transition is induced by inclusion of relative cochain complexes. The positive coboundary is the same in both, so the inclusion descends to cohomology. Identities and successive transitions compose literally on cochains.

The index is a set, being a subcollection of $\mathcal P(X)$. It contains $\varnothing$, and $K\cup L$ is compact: an open cover restricts to a cover of each of $K,L$, and the union of their two finite subcovers covers the union. As a poset, it has at most one arrow between any two objects. It therefore satisfies the three filtered-category conditions in [[def-filtered-category-and-filtered-colimit]].

Here is an explicit construction, including existence of the colimit. Represent an element by $(K,a)$ with $a\in H^p(X,X\setminus K;G)$. Declare $(K,a)\sim(L,b)$ if some compact $N\supseteq K\cup L$ makes their transition images equal. Reflexivity uses $N=K$, symmetry uses the same $N$, and transitivity uses the union of two witnessing compact sets and composition of transitions. On equivalence classes, define addition by sending both representatives to $K\cup L$ and adding there; define negation and, when applicable, scalar multiplication on representatives. If representatives are changed, pass all of the finitely many comparison witnesses to their compact union. The transitioned elements then agree, and additivity of the transition maps proves the result independent of representatives. All abelian-group or module laws hold after this passage to one common group. The class of $(\varnothing,0)$ is the zero element.

The maps $a\mapsto[(K,a)]$ form a cocone. Given any compatible family of homomorphisms from the relative groups to a group or module $T$, define the map on a class $[(K,a)]$ to be the image of $a$ under the $K$ homomorphism. Compatibility proves it constant on the displayed equivalence relation; every class has a representative, so this is the unique induced homomorphism. This is precisely the colimit universal property. In particular $[(K,a)]=0$ exactly when the image of $a$ vanishes at some larger compact support, and two representatives are equal exactly by the common-support test already given.

For compact $X$, the index $K=X$ is terminal. Sending $[(K,a)]$ to the transition image in $H^p(X,\varnothing;G)=H^p(X;G)$ is inverse to the map from this terminal group, since each representative is equivalent to its image there. Thus $H_c^p(X;G)\cong H^p(X;G)$ canonically, including the one-point and empty spaces. For $X=\varnothing$, every relative group is zero. Zero coefficients and negative degrees also give zero groups by the relative-cochain conventions.

The local compactness hypothesis gives a useful cofinal family of supports: [[thm-locally-compact-hausdorff-basics]] puts every compact $K$ inside an open $V$ with compact closure. Thus supports that are closures of relatively compact open sets suffice. The explicit common-support test proves this replacement has the same colimit: every original representative moves to such a support, and any equality witness can be enlarged to another such support. This does not require selecting a neighborhood for every compact set simultaneously. All constructions above are choice-free.
