---
id: ex-cg-distributive-weak-intervals-of-fully-commutative-elements
kind: example
title: "Two distributive right weak intervals of fully commutative elements in type $A_3$"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 15
deps: [def-cg-labeled-word-heap-and-fully-commutative-element, thm-cg-heaps-classify-commutation-classes, thm-cg-fully-commutative-weak-intervals-are-distributive, thm-cg-fully-commutative-forbidden-chain-criterion, lem-cg-weak-order-prefix-property-and-left-translation, def-cg-left-right-weak-order-and-descents, thm-hh-coxeter-exchange-deletion-and-faithfulness, def-hh-coxeter-matrix-word-group-and-length]
justified_by: []
aliases: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "J. R. Stembridge, On the Fully Commutative Elements of Coxeter Groups, author manuscript (March 1995, minor revisions September 1995); published in J. Algebraic Combin. 5 (1996), 353-385"
      url: "https://dept.math.lsa.umich.edu/~jrs/papers/FC.pdf"
      locator: "Lemma 2.1 and Theorem 2.2, PDF pp. 7-8 (the interval is isomorphic to the distributive lattice $J(P)$)"
    - title: "C. Krattenthaler, The theory of heaps and the Cartier-Foata monoid, appendix to the electronic reedition of P. Cartier and D. Foata, Problemes combinatoires de commutation et rearrangements (2006)"
      url: "https://www.mat.univie.ac.at/~kratt/artikel/heaps.pdf"
      locator: "§3, PDF pp. 4-5 (linear extensions furnish the products of ideals)"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Let $S=\{s_1,s_2,s_3\}$ with $m(s_1,s_2)=m(s_2,s_3)=3$ and $m(s_1,s_3)=2$ (type $A_3$), let $W$ be the presented group, and let $\le_R$ be the right weak order ([[def-cg-left-right-weak-order-and-descents]]).

**(1) A Boolean interval.** For $u:=s_1s_3$ the heap $P_u$ is the two-element antichain with labels $s_1,s_3$; its order ideals are the four subsets of $\{1,2\}$, forming a Boolean lattice, and the right weak interval $[1,u]_R=\{\,1,\,s_1,\,s_3,\,u\,\}$ is a four-element distributive lattice, with $s_1\wedge s_3=1$ and $s_1\vee s_3=u$. The map of [[thm-cg-fully-commutative-weak-intervals-are-distributive]] sends $1,s_1,s_3,u$ to $\varnothing,\{1\},\{2\},\{1,2\}$.

**(2) A five-element interval.** For $w:=s_1s_3s_2$ the heap $P_w$ is the V-shaped poset with relations $1\prec3$ and $2\prec3$, whose five order ideals are $\varnothing,\{1\},\{2\},\{1,2\},\{1,2,3\}$. The right weak interval $[1,w]_R$ consists of the five elements $1,s_1,s_3,s_1s_3,w$, and it is a distributive lattice isomorphic to $J(P_w)$: the three elements $s_1,s_3,s_1s_3$ are exactly the products of the nonempty proper ideals $\{1\},\{2\},\{1,2\}$, while $w$ is the product of $P_w$. Here $s_1\wedge s_3=1$, $s_1\vee s_3=s_1s_3$, and $s_1s_3\vee s_1=s_1s_3$, in agreement with intersection and union of the corresponding ideals.

**(3)** Both intervals are finite and distributive, illustrating [[thm-cg-fully-commutative-weak-intervals-are-distributive]] (2)-(3); the first has a non-chain heap while the second's heap is not a chain either, so the distributivity is not merely the chain case.

## Facts & Assumptions

**Given:** The Coxeter matrix of type $A_3$ on $S=\{s_1,s_2,s_3\}$, the presented group $W$, the right weak order $\le_R$, the elements $u=s_1s_3$ and $w=s_1s_3s_2$, and the heaps $P_u,P_w$.

[F1] The heap of a word and its labeled linear extensions $L(P_q,q)$ are as in [[def-cg-labeled-word-heap-and-fully-commutative-element]] (clauses (2) and (4)); $m(s_1,s_3)=2$ means that $s_1$ and $s_3$ commute and that the defining relation has no generator between positions with these labels; in this two-position word there is no intermediate position, so no transitive heap path relates them ([[def-hh-coxeter-matrix-word-group-and-length]]).

[F2] For every word $q$ one has $L(P_q,q)=C(q)$, the commutativity class of $q$ ([[thm-cg-heaps-classify-commutation-classes]], clause (1)).

[F3] If a word has heap $P$ and product $x$, and conditions (a) and (b) of the heap criterion hold (no convex alternating chain of length $m(u,v)\in[3,\infty)$ and no covering pair with equal labels), then the word is reduced, $x$ is fully commutative and $P=P_x$ ([[thm-cg-fully-commutative-forbidden-chain-criterion]], clause (2)).

[F4] For a fully commutative $w$ with reduced word $s\in\mathcal R(w)$ and heap $P=P_s$: the map $x\mapsto I(x)$ sends $x\le_R w$ to the ideal $I(x)$ determined by any reduced word of $x$, with $\ell(x)=|I(x)|$, $I(1)=\varnothing$, $I(w)=P$; it is an order isomorphism $[1,w]_R\to J(P)$; and $[1,w]_R$ is a finite distributive lattice in which meets and joins satisfy $I(x\wedge y)=I(x)\cap I(y)$ and $I(x\vee y)=I(x)\cup I(y)$ ([[thm-cg-fully-commutative-weak-intervals-are-distributive]], clauses (1)-(3)).

[F5] For every $s\in S$ one has $\ell(s)=1$, and distinct generators are distinct in $W$ ([[thm-hh-coxeter-exchange-deletion-and-faithfulness]], clauses (1) and (4)).

[F6] $u\le_R v$ if and only if some reduced expression of $v$ has a reduced expression of $u$ as initial segment ([[lem-cg-weak-order-prefix-property-and-left-translation]], clause (2)).

## Verification

**Given:** The type $A_3$ Coxeter matrix, the right weak order, and the words $u=s_1s_3$ and $w=s_1s_3s_2$.

**Proof technique:** direct.

1.1 The data for $w$. The word $(s_1,s_3,s_2)$ has heap $P_w$ on positions $1,2,3$: positions $1,3$ carry $s_1,s_2$ with $m(s_1,s_2)=3$ and positions $2,3$ carry $s_3,s_2$ with $m(s_3,s_2)=3$, so $1\prec3$ and $2\prec3$; positions $1,2$ carry the distinct commuting letters $s_1,s_3$ with $m(s_1,s_3)=2$, so there is no generating relation between them; because positions $1,2$ are consecutive in the original word and every generating edge increases the position, no intermediate position can lie on a path between them, so no transitive path relates them. Both heap-criterion conditions hold: every chain of $P_w$ has at most two elements, so there is no convex alternating chain of length $3$, and the covering pairs $1\lessdot3$, $2\lessdot3$ have distinct labels $(s_1,s_2)$ and $(s_3,s_2)$; by [F3] the word is reduced, $w$ is fully commutative and $P_w$ is the heap of $w$, with $\ell(w)=3$. The linear extensions of $P_w$ are $(1,2,3)$ and $(2,1,3)$, since both relations force position $3$ last; their labeled words are $s_1s_3s_2$ and $s_3s_1s_2$, so $C((s_1,s_3,s_2))=\mathcal R(w)=\{s_1s_3s_2,\ s_3s_1s_2\}$ by [F2] and [F3]. The order ideals are the subsets $I$ with $3\in I\Rightarrow1,2\in I$, namely $\varnothing,\{1\},\{2\},\{1,2\},\{1,2,3\}$. [given, F1, F2, F3]

1.2 The data for $u$. The word $(s_1,s_3)$ has heap $P_u$ on positions $1,2$ with labels $s_1,s_3$: since $m(s_1,s_3)=2$ and the labels are distinct, no generating relation links the two positions, so $P_u$ is the two-element antichain and it has no covering pairs. Conditions (a) and (b) of [F3] hold vacuously (there is no chain of length $3$, and no covering pair at all), so the word is reduced, $u$ is fully commutative with heap $P_u$ and $\ell(u)=2$. By [F2] its reduced words are the words read from the two linear extensions $(1,2)$, $(2,1)$ of $P_u$, namely $\mathcal R(u)=C((s_1,s_3))=\{s_1s_3,\ s_3s_1\}$. The order ideals of the antichain $P_u$ are all four subsets of $\{1,2\}$. [given, F1, F3, F2]

2.1 The interval $[1,u]_R$. By [F4] the map $x\mapsto I(x)$ is an order isomorphism $[1,u]_R\to J(P_u)$, so $[1,u]_R$ has exactly $|J(P_u)|=4$ elements and is a finite distributive lattice with meet and join given by intersection and union of ideals. By [F6] the products of the prefixes of the reduced words $s_1s_3$ and $s_3s_1$, namely $1,s_1,u$ and $1,s_3,u$, lie in $[1,u]_R$; they are pairwise distinct because their lengths are $0,1,1,2$ and $s_1\ne s_3$ by [F5]; hence they exhaust the four-element interval and $[1,u]_R=\{1,s_1,s_3,u\}$. For the ideal map: $\ell(s_1)=\ell(s_3)=1$ and $\ell(u)=2$ by [F5] and 1.2, so $|I(s_1)|=|I(s_3)|=1$ and $|I(u)|=2$; computing with the reduced words $(s_1)$, $(s_3)$ and $(s_1,s_3)$ gives $I(s_1)=\{1\}$, $I(s_3)=\{2\}$ and $I(u)=\{1,2\}$, while $I(1)=\varnothing$ by [F4]. Hence $s_1\wedge s_3$ is the element with ideal $\{1\}\cap\{2\}=\varnothing$, namely $1$, and $s_1\vee s_3$ is the element with ideal $\{1\}\cup\{2\}=\{1,2\}$, namely $u$. [given, F4, F5, F6, step 1.2]

2.2 The interval $[1,w]_R$. By [F4] the map $x\mapsto I(x)$ is a bijection $[1,w]_R\to J(P_w)$, so $[1,w]_R$ has exactly five elements by 1.1, and it is a finite distributive lattice with meets and joins given by intersection and union of ideals. By [F6], the prefixes of the two reduced words $s_1s_3s_2$ and $s_3s_1s_2$ of 1.1 show that all five displayed elements lie in $[1,w]_R$. Their ideals are computed as follows: $I(1)=\varnothing$ and $I(w)=P_w$ by [F4]; and, using the chains $C_{s_1}=\{1\}$, $C_{s_3}=\{2\}$, $C_{s_2}=\{3\}$ of $P_w$, the reduced words $(s_1)$ and $(s_3)$ give $I(s_1)=\{1\}$ and $I(s_3)=\{2\}$, while the reduced word $(s_1,s_3)$ of 1.2 gives $I(s_1s_3)=\{1,2\}$; its prefixes are those of the reduced word $s_1s_3s_2$ of $w$, so that $s_1s_3\le_R w$ by [F6]. Their images $\varnothing,\{1\},\{2\},\{1,2\},\{1,2,3\}$ are the five distinct elements of $J(P_w)$, so $[1,w]_R=\{1,s_1,s_3,s_1s_3,w\}$ and each displayed element is the product of the ideal that is its image. In particular $s_1\wedge s_3$ has ideal $\{1\}\cap\{2\}=\varnothing$, so $s_1\wedge s_3=1$; $s_1\vee s_3$ has ideal $\{1\}\cup\{2\}=\{1,2\}$, so $s_1\vee s_3=s_1s_3$; and $s_1s_3\vee s_1$ has ideal $\{1,2\}\cup\{1\}=\{1,2\}$, so $s_1s_3\vee s_1=s_1s_3$. [given, F4, F6, step 1.1, step 1.2]

3.1 Both intervals are finite distributive lattices by 2.1 and 2.2, illustrating [F4](2)-(3). Their heaps are the two-element antichain of 1.2 and the V-shaped poset of 1.1; the first is not a chain because its two elements are incomparable, and the second is not a chain because $1$ and $2$ are incomparable in $P_w$. So the distributivity exhibited here is not the chain case. [given, step 1.1, step 1.2, step 2.1, step 2.2] ∎
