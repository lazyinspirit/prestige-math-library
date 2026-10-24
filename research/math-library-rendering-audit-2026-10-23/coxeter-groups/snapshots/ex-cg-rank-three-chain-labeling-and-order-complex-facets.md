---
id: ex-cg-rank-three-chain-labeling-and-order-complex-facets
kind: example
title: "A rank-three chain labeling translated into facets of the order complex"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 2
deps: [lem-cg-lexicographic-chain-shelling-and-mobius-cancellation, def-cg-finite-lattice-congruence-and-interval-projections, def-boolean-lattice-and-levels, def-graded-poset-and-rank, def-face-poset-and-order-complex, def-poset-mobius-function, lem-poset-mobius-recurrence]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Richard P. Stanley, An Introduction to Hyperplane Arrangements, Lecture 1 §1.2 and Lecture 4 §4.1"
      url: "https://www.cis.upenn.edu/~cis6100/sp06stanley.pdf"
    - title: "Michelle L. Wachs, Poset topology: tools and applications, PCMI lecture notes, Lecture 3 §§3.1–3.4"
      url: "https://arxiv.org/pdf/math/0602226"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Label each cover $S\lessdot S\cup\{i\}$ of the Boolean lattice $B_3=B(\{1,2,3\})$ ([[def-boolean-lattice-and-levels]], [[def-graded-poset-and-rank]]) by the added element $i\in\{1,2,3\}$. This is an ordinary edge labeling ([[def-cg-finite-lattice-congruence-and-interval-projections]]), hence in particular a descending rooted-chain labeling, and it satisfies the no-tie condition and the lex-increasing property on every rooted interval of $[\varnothing,\{1,2,3\}]$.

The rank-three interval $[\varnothing,\{1,2,3\}]$ has exactly six maximal chains, with label words (read from the top) $(1,2,3),(1,3,2),(2,1,3),(2,3,1),(3,1,2),(3,2,1)$; the unique increasing word is $(1,2,3)$, so the increasing chain is $\{1,2,3\}\gtrdot\{2,3\}\gtrdot\{3\}\gtrdot\varnothing$, and the unique strictly falling chain is $\{1,2,3\}\gtrdot\{1,2\}\gtrdot\{1\}\gtrdot\varnothing$ with word $(3,2,1)$. The facets of the order complex $\Delta((\varnothing,\{1,2,3\}))$ ([[def-face-poset-and-order-complex]]) are the six maximal chains of the open interval, namely the two-element chains $\{2,3\}\supset\{3\}$, $\{2,3\}\supset\{2\}$, $\{1,3\}\supset\{3\}$, $\{1,3\}\supset\{1\}$, $\{1,2\}\supset\{2\}$ and $\{1,2\}\supset\{1\}$ in the order induced by the label words above. The falling-chain formula of [[lem-cg-lexicographic-chain-shelling-and-mobius-cancellation]] gives $\mu(\varnothing,\{1,2,3\})=(-1)^3\cdot1=-1$, which agrees with the Möbius recurrence on $B_3$ ([[def-poset-mobius-function]], [[lem-poset-mobius-recurrence]]). The example also exhibits one replacement step of the shelling: for $m'$ with word $(1,3,2)$ and $m$ with word $(2,1,3)$ one has $\lambda(m')\prec\lambda(m)$, and the chain $k$ with word $(1,2,3)$ satisfies $\lambda(k)\prec\lambda(m)$, $m'\cap m\subseteq k\cap m$ and $|k\cap m|=3=|m|-1$; the replaced two-step segment is $\{1,2,3\}\gtrdot\{1,3\}\gtrdot\{3\}$ of $m$, with first-divergence and first-reunion analysis as in the proof of the shelling lemma.

## Facts & Assumptions

**Given:** The Boolean lattice $B_3=\mathcal P(\{1,2,3\})$ ordered by inclusion, with rank $|S|$ and covers $S\lessdot S\cup\{i\}$ for $i\notin S$ ([[def-boolean-lattice-and-levels]]), and the edge labeling that assigns to the cover $S\lessdot S\cup\{i\}$ the label $i$.

[F1] For a finite set $A$ the Boolean lattice $B(A)$ is $\mathcal P(A)$ ordered by inclusion; $T$ covers $S$ exactly when $T=S\cup\{a\}$ for one $a\in A\setminus S$; the rank function is $|S|$, and meet and join are intersection and union ([[def-boolean-lattice-and-levels]], [[def-graded-poset-and-rank]]).

[F2] A descending rooted-chain labeling of $[x,y]$ labels each pair $(c,v\lessdot w)$ of a descending chain $c$ ending at $w$ and a cover $v\lessdot w$; it is an ordinary edge labeling when the label does not depend on $c$. A maximal chain $m$ of $[x,y]$ is $y=m_0\gtrdot\cdots\gtrdot m_n=x$ with $n=\rho(x,y)$, its word is $\lambda_i(m)=\lambda(m_0\gtrdot\cdots\gtrdot m_{i-1};m_i\lessdot m_{i-1})$, and in a rooted interval the root chain is kept fixed ([[def-cg-finite-lattice-congruence-and-interval-projections]]).

[F3] (N): in every rooted interval the labels of any maximal chain are pairwise distinct. (L): in every rooted interval there is exactly one increasing maximal chain and its word is lexicographically first; the words are compared lexicographically ([[def-cg-finite-lattice-congruence-and-interval-projections]]).

[F4] Shelling replacement: if $m',m$ are maximal chains of $[x,y]$ with $\lambda(m')\prec\lambda(m)$, there is a maximal chain $k$ with $\lambda(k)\prec\lambda(m)$, $m'\cap m\subseteq k\cap m$ and $|k\cap m|=|m|-1$ ([[lem-cg-lexicographic-chain-shelling-and-mobius-cancellation]] (i)).

[F5] Falling-chain formula: for every rooted interval of $[x,y]$ one has $\mu(v,w)=(-1)^{\rho(v,w)}\#\{$strictly falling maximal chains$\}$ ([[lem-cg-lexicographic-chain-shelling-and-mobius-cancellation]] (ii)).

[F6] Faces of the order complex $\Delta(Q)$ are the finite chains of $Q$, so the facets are the maximal chains ([[def-face-poset-and-order-complex]]).

[F7] Möbius recurrence on a finite poset: $\mu(x,x)=1$ and $\mu(x,y)=-\sum_{x\le z<y}\mu(x,z)$ for $x<y$ ([[lem-poset-mobius-recurrence]], [[def-poset-mobius-function]]).

## Proof

**Proof technique:** direct.

1.1 The cover labeling is well defined and ordinary: by [F1] the covers of $B_3$ are exactly the covers $S\lessdot S\cup\{i\}$ with $i\notin S$, so the assignment is a labeling of all covers, and the label $i$ of a cover depends only on that cover, not on any descending chain above it; hence it is an ordinary edge labeling and so, in particular, a descending rooted-chain labeling of $[\varnothing,\{1,2,3\}]$ in the sense of [F2]. [F1, F2]

1.2 (N) and (L). Let $\varnothing\subseteq S\subseteq T\subseteq\{1,2,3\}$ and let $m$ be a maximal chain of $[S,T]$; its steps add the elements of $T\setminus S$ one at a time, so the labels on $m$ are exactly the distinct elements of $T\setminus S$ and are pairwise distinct, which is (N) for the rooted interval $([S,T],c)$. Every maximal chain of $[S,T]$ corresponds to just such an order of adding the $r:=|T\setminus S|$ elements of $T\setminus S$, and its word read from the top is the reverse addition order; hence increasing words correspond exactly to adding the elements of $T\setminus S$ in decreasing order, and the increasing arrangement of $T\setminus S$ is the lexicographically first of the words; so there is exactly one increasing maximal chain, namely the one that adds the elements in decreasing order, and it is lexicographically first, which is (L). Since $S,T$ and $c$ were arbitrary, (N) and (L) hold on every rooted interval of $[\varnothing,\{1,2,3\}]$. [F1, F2, F3]

2.1 The six maximal chains. A maximal chain of $[\varnothing,\{1,2,3\}]$ is an order of adding $1,2,3$, and its word is the reverse of that order; hence there are exactly $6$ maximal chains and their words are the six permutations, obtained as follows: adding $2,3,1$ gives $\{1,2,3\}\gtrdot\{2,3\}\gtrdot\{2\}\gtrdot\varnothing$ with word $(1,3,2)$; adding $3,1,2$ gives $\{1,2,3\}\gtrdot\{1,3\}\gtrdot\{3\}\gtrdot\varnothing$ with word $(2,1,3)$; adding $1,3,2$ gives $\{1,2,3\}\gtrdot\{1,3\}\gtrdot\{1\}\gtrdot\varnothing$ with word $(2,3,1)$; adding $2,1,3$ gives $\{1,2,3\}\gtrdot\{1,2\}\gtrdot\{2\}\gtrdot\varnothing$ with word $(3,1,2)$; adding $1,2,3$ gives $\{1,2,3\}\gtrdot\{1,2\}\gtrdot\{1\}\gtrdot\varnothing$ with word $(3,2,1)$; and adding $3,2,1$ gives $\{1,2,3\}\gtrdot\{2,3\}\gtrdot\{3\}\gtrdot\varnothing$ with word $(1,2,3)$. Among the six permutations only $(1,2,3)$ is increasing and only $(3,2,1)$ is (strictly) falling, so the increasing chain is $\{1,2,3\}\gtrdot\{2,3\}\gtrdot\{3\}\gtrdot\varnothing$ and the strictly falling chain is $\{1,2,3\}\gtrdot\{1,2\}\gtrdot\{1\}\gtrdot\varnothing$, as stated. [F1, step 1.2]

3.1 Facets of the open interval. By [F6] the facets of $\Delta((\varnothing,\{1,2,3\}))$ are the maximal chains of the open interval, that is, the sets obtained from the six maximal chains of step 2.1 by deleting the two endpoints: $(1,2,3)\mapsto\{2,3\}\supset\{3\}$, $(1,3,2)\mapsto\{2,3\}\supset\{2\}$, $(2,1,3)\mapsto\{1,3\}\supset\{3\}$, $(2,3,1)\mapsto\{1,3\}\supset\{1\}$, $(3,1,2)\mapsto\{1,2\}\supset\{2\}$ and $(3,2,1)\mapsto\{1,2\}\supset\{1\}$, ordered by the words of their parent chains: this is the list of six two-element chains in the stated order. [F6, step 2.1]

3.2 The Möbius value. Since $(3,2,1)$ is the only falling word among the six by step 2.1, the falling-chain formula of [F5] gives $\mu(\varnothing,\{1,2,3\})=(-1)^{3}\cdot1=-1$ in $B_3$. The recurrence [F7] gives $\mu(\varnothing,\varnothing)=1$, $\mu(\varnothing,\{i\})=-\mu(\varnothing,\varnothing)=-1$ for each singleton, $\mu(\varnothing,\{i,j\})=-(\mu(\varnothing,\varnothing)+\mu(\varnothing,\{i\})+\mu(\varnothing,\{j\}))=-(1-1-1)=1$ for each two-element subset, and $\mu(\varnothing,\{1,2,3\})=-(1+3\cdot(-1)+3\cdot 1)=-1$, in agreement with the formula. [F5, F7, step 2.1]

4.1 The replacement step. Take $m'$ the chain with word $(1,3,2)$, namely $\{1,2,3\}\gtrdot\{2,3\}\gtrdot\{2\}\gtrdot\varnothing$, and $m$ the chain with word $(2,1,3)$, namely $\{1,2,3\}\gtrdot\{1,3\}\gtrdot\{3\}\gtrdot\varnothing$; then $\lambda(m')\prec\lambda(m)$. The first divergence is at index $1$ and the first reunion at index $3$, so $d=0$, $g=3$, the window word of $m$ is $(2,1,3)$, and $m'$ and $m$ share exactly the vertices $\{1,2,3\}$ and $\varnothing$, i.e. $m'\cap m=\{\{1,2,3\},\varnothing\}$. The window word has its descent at position $e=1$: $\lambda_1(m)=2>1=\lambda_2(m)$; the rooted rank-two interval $\left([\{3\},\{1,2,3\}],\{1,2,3\}\right)$ has the two maximal chains $\{1,2,3\}\gtrdot\{1,3\}\gtrdot\{3\}$ and $\{1,2,3\}\gtrdot\{2,3\}\gtrdot\{3\}$ with words $(2,1)$ and $(1,2)$, so the increasing one is $\{1,2,3\}\gtrdot\{2,3\}\gtrdot\{3\}$ and replacing the segment $\{1,2,3\}\gtrdot\{1,3\}\gtrdot\{3\}$ of $m$ by it gives $k=\{1,2,3\}\gtrdot\{2,3\}\gtrdot\{3\}\gtrdot\varnothing$, the chain with word $(1,2,3)$. Then $\lambda(k)=(1,2,3)\prec(2,1,3)=\lambda(m)$, the intersection $k\cap m=\{\{1,2,3\},\{3\},\varnothing\}$ has $|k\cap m|=3=|m|-1$, and $m'\cap m=\{\{1,2,3\},\varnothing\}\subseteq k\cap m$; the replaced two-step segment is $\{1,2,3\}\gtrdot\{1,3\}\gtrdot\{3\}$, as in the shelling lemma [F4]. [F4, step 2.1, step 3.1]

5.1 The computations verify every claim of the Example: the element-added cover labeling is an ordinary edge labeling and hence a descending rooted-chain labeling; it satisfies (N) and (L) on every rooted interval of $[\varnothing,\{1,2,3\}]$; the six maximal chains have the six permutation words, with $(\{1,2,3\}\gtrdot\{2,3\}\gtrdot\{3\}\gtrdot\varnothing)$ the unique increasing chain and $(\{1,2,3\}\gtrdot\{1,2\}\gtrdot\{1\}\gtrdot\varnothing)$ the unique strictly falling chain; the facets of $\Delta((\varnothing,\{1,2,3\}))$ are the six listed two-element chains in the stated order; the exhibited chain $k$ realizes the shelling replacement for the pair $(1,3,2)\prec(2,1,3)$; and the falling-chain formula returns $\mu(\varnothing,\{1,2,3\})=-1$, which the recurrence confirms. [step 1.1, step 1.2, step 2.1, step 3.1, step 4.1, step 3.2] ∎
