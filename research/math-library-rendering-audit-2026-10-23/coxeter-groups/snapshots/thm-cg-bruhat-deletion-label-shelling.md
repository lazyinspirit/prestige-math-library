---
id: thm-cg-bruhat-deletion-label-shelling
kind: theorem
title: "Deletion-labeled Bruhat intervals are lexicographically shellable, with the explicit earlier/later chain comparison"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 18
deps: [def-cg-deletion-chain-labels-and-shelling, lem-cg-bruhat-increasing-chain-and-local-descent-replacement, lem-cg-lexicographic-chain-shelling-and-mobius-cancellation, def-face-poset-and-order-complex, def-abstract-simplicial-complex, def-graded-poset-and-rank, def-poset-interval-and-finiteness-conditions, def-cg-finite-lattice-congruence-and-interval-projections, def-cg-bruhat-order-by-reflection-chains, lem-cg-bruhat-chain-refinement-and-gradedness, def-hh-coxeter-matrix-word-group-and-length]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anders Björner and Francesco Brenti, Combinatorics of Coxeter Groups (Graduate Texts in Mathematics 231, Springer 2005; author-hosted complete PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Sections 2.2 and 2.5-2.7, printed pp. 33-36, 45 and 48-55 (augmentation and lifting; quotients; deleted-position labels of maximal chains; Lemmas 2.7.2-2.7.4, Theorem 2.7.5, Corollaries 2.7.10-2.7.11 and Exercise 13), and Appendix A2.2-A2.4, printed pp. 302-305 (Möbius and shellability facts; cited, not consumed)"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $u\le v$ in $W$, put $n:=\ell(v)-\ell(u)$, fix a reduced expression of $v$ and give $[u,v]$ the deleted-position labeling of [[def-cg-deletion-chain-labels-and-shelling]], with label words, descents and the lexicographic order as in [[def-cg-finite-lattice-congruence-and-interval-projections]] (3).

**(i) No-tie and lex-increasing conditions.** On every rooted interval of $[u,v]$ the labeling satisfies the no-tie condition (N) and the lex-increasing property (L) of [[def-cg-finite-lattice-congruence-and-interval-projections]] (4): the labels of any maximal chain are pairwise distinct, and there is exactly one increasing maximal chain, whose label word is lexicographically first.

**(ii) Earlier/later chain comparison.** For all maximal chains $m',m$ of $[u,v]$ with $\lambda(m')\prec\lambda(m)$ there is a maximal chain $k$ of $[u,v]$ with $\lambda(k)\prec\lambda(m)$, $m'\cap m\subseteq k\cap m$ and $|k\cap m|=|m|-1$.

**(iii) Shelling.** Consequently the maximal chains of the open interval $(u,v)$, in the lexicographic order of their label words, are a shelling of the order complex $\Delta((u,v))$ in the sense of [[def-cg-deletion-chain-labels-and-shelling]] (4), of which they are the facets; in particular $\Delta((u,v))$ is shellable.

**(iv) Small-rank conventions.** If $u=v$ or $n=1$, then $(u,v)$ is empty and $\Delta((u,v))=\{\varnothing\}$ has the single facet $\varnothing$, so its unique facet order is a shelling. If $n=2$, then $(u,v)$ has exactly two incomparable elements ([[lem-cg-bruhat-increasing-chain-and-local-descent-replacement]] (ii)) and $\Delta((u,v))$ consists of two disjoint vertices, shellable in either facet order.

## Facts & Assumptions

**Given:** Elements $u\le v$ of $W$, with $n:=\ell(v)-\ell(u)$, the fixed reduced expression of $v$ and the deleted-position labeling of $[u,v]$ with its rooted-interval restrictions.

[F1] The label word is produced by the deletion recursion and has pairwise distinct entries: "the cover $x_j\gtrdot x_{j+1}$ determines a unique position $\lambda_{j+1}(m)\in P_j$ with $x_{j+1}=\prod_{p\in P_j\setminus\{\lambda_{j+1}(m)\}}s_p$"; "Its entries are pairwise distinct, because $P_0\supsetneq P_1\supsetneq\cdots\supsetneq P_k$" ([[def-cg-deletion-chain-labels-and-shelling]] (2)).

[F2] In a rooted interval the labels are deleted positions computed from the retained expression and the root chain: "Labels compared inside one rooted interval therefore belong to the one ordered set $\{1,\dots,q\}$" ([[def-cg-deletion-chain-labels-and-shelling]] (3)).

[F3] Shelling criterion: "The order is a **shelling** of $K$, and $K$ is **shellable**, if for all $i<k$ there are $j<k$ and a vertex $x\in F_k$ with $F_i\cap F_k\subseteq F_j\cap F_k=F_k\setminus\{x\}$" ([[def-cg-deletion-chain-labels-and-shelling]] (4)).

[F4] Facets of the order complexes: "The facets of the order complex $\Delta([u,v])$ of $[u,v]$ are the maximal chains of $[u,v]$, and those of $\Delta((u,v))$ are the maximal chains of the open interval $(u,v)$" ([[def-cg-deletion-chain-labels-and-shelling]] (4)); the order complex has vertex set $P$ and all finite chains of $P$ as faces ([[def-face-poset-and-order-complex]], [[def-abstract-simplicial-complex]]).

[F5] Lex-increasing property of the deleted-position labeling: "**The lexicographically first chain.** $([a,b],c)$ has exactly one increasing maximal chain, and it is the lexicographically first maximal chain of $([a,b],c)$" ([[lem-cg-bruhat-increasing-chain-and-local-descent-replacement]] (iii)).

[F6] Rank-two diamonds: "If $\ell(b)-\ell(a)=2$, then $[a,b]$ has exactly four elements, and its two maximal chains have label words $(i,j)$ and $(p,m)$ with $i<j$, $m<p$ and $i<j\le p$; the first word is increasing and the second is falling" ([[lem-cg-bruhat-increasing-chain-and-local-descent-replacement]] (ii)).

[F7] The abstract comparison lemma for a finite graded poset with a descending rooted-chain labeling satisfying (N) and (L) on every rooted interval: "For all maximal chains $m',m$ of $[x,y]$ with $\lambda(m')\prec\lambda(m)$ there is a maximal chain $k$ of $[x,y]$ with $\lambda(k)\prec\lambda(m)$, $m'\cap m\subseteq k\cap m$ and $|k\cap m|=|m|-1$", obtained by replacing the two-step segment at a descent by the increasing chain of a rooted rank-two interval ([[lem-cg-lexicographic-chain-shelling-and-mobius-cancellation]] (i)).

[F8] Endpoint removal: "Removing the two endpoints $x,y$ from all chains, the same order is a shelling of the order complex $\Delta((x,y))$ of the open interval, whose facets are the maximal chains of $(x,y)$" ([[lem-cg-lexicographic-chain-shelling-and-mobius-cancellation]] (i)).

[F9] Finiteness and grading: "$[u,v]$ is finite" ([[lem-cg-bruhat-chain-refinement-and-gradedness]] (1)); "Every maximal chain in $[u,v]$ has exactly $\ell(v)-\ell(u)$ strict steps, that is, $\ell(v)-\ell(u)+1$ elements; hence $[u,v]$ is a graded poset with rank function $x\mapsto\ell(x)-\ell(u)$" ([[lem-cg-bruhat-chain-refinement-and-gradedness]] (3)) and the covering relation is that of [[def-graded-poset-and-rank]].

[F10] Strict length increase: "every $u<v$ (that is, $u\le v$ and $u\ne v$) satisfies $\ell(u)<\ell(v)$" ([[def-cg-bruhat-order-by-reflection-chains]] (2)).

## Proof

1.1 Conditions (N) and (L). For $n\le1$ the interval has a single maximal chain by [F9], whose empty or one-entry word is increasing, lexicographically first, and has no repeated entry. For $n\ge2$, by [F1] the labels of any maximal chain of a rooted interval are pairwise distinct, which is (N). By [F5] every rooted interval of $[u,v]$ has exactly one increasing maximal chain and its label word is lexicographically first among the maximal chains of that rooted interval, which is (L). This proves (i); the rooted intervals of $[u,v]$ with their induced labeling are exactly the rooted intervals to which [F2] attaches the deleted-position labels. [F1, F2, F5, F9]

1.2 The label word determines the chain. Let $m$ be a maximal chain of a rooted interval with retained expression $t_1\cdots t_r$. By the recursion of [F1], each element $m_i$ is the product of $t_1\cdots t_r$ with the positions $\lambda_1(m),\dots,\lambda_i(m)$ deleted, so the label word determines every element of $m$ and hence the chain; consequently distinct maximal chains have distinct label words, and the lexicographic order of label words is a linear order on the maximal chains. [F1, F2]

1.3 Small ranks. If $u=v$ there is no element $x$ with $u<x<u$, and if $n=1$ there is no $x$ with $u<x<v$, because such an $x$ would satisfy $\ell(u)<\ell(x)<\ell(v)$ [F10] while $\ell(v)=\ell(u)+1$; so $(u,v)$ is empty, its order complex has the single facet $\varnothing$ [F4], and the shelling condition of [F3] is vacuous for a one-facet complex. If $n=2$, then $[u,v]$ has exactly four elements [F6], the open interval consists of the two middle elements, which have the same length $\ell(u)+1$ and are therefore incomparable [F10], and $\Delta((u,v))$ has the two facets $\{a\},\{b\}$, the empty set and the two singletons being the only chains of a two-element antichain; listing the facets in either order, say $F_1=\{a\}$, $F_2=\{b\}$, the criterion of [F3] holds for $i=1$, $k=2$ with $j=1$ and the vertex $b$ of $F_2$, because $F_1\cap F_2=\varnothing=F_2\setminus\{b\}$. [F3, F4, F6, F10]

2.1 Earlier/later chain comparison. By step 1.1 the deleted-position labeling of $[u,v]$ satisfies (N) and (L) on every rooted interval, and by [F9] the poset $[u,v]$ is finite and graded with the covering relation of [F9]; these are exactly the hypotheses of the abstract comparison lemma [F7], which therefore yields, for all maximal chains $m',m$ of $[u,v]$ with $\lambda(m')\prec\lambda(m)$, a maximal chain $k$ with $\lambda(k)\prec\lambda(m)$, $m'\cap m\subseteq k\cap m$ and $|k\cap m|=|m|-1$. In that argument $k$ is obtained by replacing a two-step segment at a descent position by the increasing chain of the corresponding rooted rank-two interval, which is the local descent replacement of [[lem-cg-bruhat-increasing-chain-and-local-descent-replacement]] (iv). [F7, F9, step 1.1]

3.1 Shelling of the open interval. For $n\le1$ the conclusion is step 1.3. Suppose $n\ge2$ and put $E:=\{u,v\}$ and $F_m:=m\setminus E$ for each maximal chain $m$ of $[u,v]$. Every maximal chain of $(u,v)$ becomes maximal in $[u,v]$ upon adjoining the endpoints, and conversely: any missing intermediate element would enlarge either chain. Thus $m\mapsto F_m$ is a bijection onto the facets of $\Delta((u,v))$ by [F4]. Give $F_m$ the label word of its endpoint extension $m$; this orders the facets linearly by step 1.2. For $m'\prec m$, step 2.1 supplies $k\prec m$ with $m'\cap m\subseteq k\cap m=m\setminus\{z\}$ for one vertex $z$ of $m$; the cardinality equality there gives the last equality, and $z\notin E$ since both endpoints lie in every chain. Removing $E$ yields $F_{m'}\cap F_m\subseteq F_k\cap F_m=F_m\setminus\{z\}$, and explicitly $|F_k\cap F_m|=|k\cap m|-2=|m|-3=|F_m|-1$. This is exactly [F3], proving (iii); (ii) is step 2.1 and (iv) is step 1.3. [F3, F4, F8, F9, step 1.2, step 1.3, step 2.1] ∎
