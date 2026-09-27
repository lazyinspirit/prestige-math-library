---
id: ex-s3-as-a-frobenius-group
kind: example
title: "$S_3$ as a Frobenius group"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-frobenius-complement-and-frobenius-group, cor-frobenius-semidirect-product-decomposition, prop-frobenius-groups-and-fixed-point-free-actions, lem-conjugating-a-cycle-relabels-its-entries, def-finite-symmetric-group-and-permutation-notation, def-alternating-group, cor-alternating-group-is-normal-and-has-half-the-elements, cor-prime-order-group-is-cyclic, def-internal-semidirect-product, def-normal-subgroup, def-subgroup, def-generated-subgroup, lem-cyclic-subgroup-is-the-set-of-powers, def-order-in-a-group, cor-order-of-element-divides-group-order, thm-lagrange, lem-subgroup-criterion, lem-intersection-of-subgroups, def-group-action, def-conjugacy-class-and-centralizer, thm-conjugation-is-an-automorphism, lem-group-inverse-laws]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Alex Bartel, Introduction to Representation Theory of Finite Groups, §6.1"
      url: "https://www.maths.gla.ac.uk/~abartel/docs/reptheory.pdf"
      locator: "§6.1, printed pp. 28–30"
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Example

Let $S_3$ be the symmetric group on the three letters $0,1,2$
([[def-finite-symmetric-group-and-permutation-notation]]) and let
$H:=\langle(0\,1)\rangle=\{\operatorname{id},(0\,1)\}$ be the subgroup generated
by the transposition $(0\,1)$ ([[def-generated-subgroup]]). Then:

1. $H$ is a Frobenius complement of $S_3$
   ([[def-frobenius-complement-and-frobenius-group]]); equivalently $S_3$ is a
   Frobenius group with complement $H$;
2. the Frobenius kernel of $S_3$ with respect to $H$ is the alternating group
   $A_3=\{\operatorname{id},(0\,1\,2),(0\,2\,1)\}$
   ([[def-alternating-group]]), so that $S_3=A_3\rtimes H$ is an internal
   semidirect product with $A_3\cong C_3$ and $H\cong C_2$
   ([[def-internal-semidirect-product]]);
3. every transposition subgroup $\langle(a\,b)\rangle$ of $S_3$ is a Frobenius
   complement of $S_3$ as well, and $A_3$ is its Frobenius kernel.

## Facts & Assumptions

**Given:** The symmetric group $S_3=\operatorname{Sym}(\{0,1,2\})$, the transposition $(0\,1)$, and $H=\langle(0\,1)\rangle$.

[F1] Elements and conjugacy classes of $S_3$: one-line notation identifies the permutations of $\{0,1,2\}$ with the lists $[b_0,b_1,b_2]$ whose entries are $0,1,2$ each occurring once, so $|S_3|=3\cdot2\cdot1=6$; in cycle notation the six elements are $\operatorname{id}=[0,1,2]$, $(0\,1)=[1,0,2]$, $(0\,2)=[2,1,0]$, $(1\,2)=[0,2,1]$, $(0\,1\,2)=[1,2,0]$ and $(0\,2\,1)=[2,0,1]$, that is $S_3=\{\operatorname{id},(0\,1),(0\,2),(1\,2),(0\,1\,2),(0\,2\,1)\}$. Conjugating a cycle relabels its entries: $g(a\,b)g^{-1}=(g(a)\,g(b))$ and $g(a\,b\,c)g^{-1}=(g(a)\,g(b)\,g(c))$ for $g\in S_3$. Hence every conjugate of the transposition $(0\,1)$ is again a transposition, and as $g$ runs through $S_3$ the ordered pair $(g(0),g(1))$ runs through all six ordered pairs of distinct entries, so the conjugate $(g(0)\,g(1))$ takes each of the three values $(0\,1),(0\,2),(1\,2)$ and the conjugacy class of $(0\,1)$ is $\{(0\,1),(0\,2),(1\,2)\}$; every conjugate of the $3$-cycle $(0\,1\,2)$ is again a $3$-cycle, and $g=\operatorname{id}$ and $g=(0\,1)$ give the conjugates $(0\,1\,2)$ and $(1\,0\,2)=(0\,2\,1)$, so the conjugacy class of $(0\,1\,2)$ is $\{(0\,1\,2),(0\,2\,1)\}$; and the identity is conjugate only to itself. These three classes partition the six elements of $S_3$, so they are its conjugacy classes ([[def-finite-symmetric-group-and-permutation-notation]], [[lem-conjugating-a-cycle-relabels-its-entries]]).

[F2] Orders in $S_3$: a transposition $(a\,b)$ satisfies $(a\,b)^{2}=\operatorname{id}$ and $(a\,b)\ne\operatorname{id}$, so has order $2$; a $3$-cycle $\sigma$ satisfies $\sigma^{3}=\operatorname{id}$ and $\sigma\ne\operatorname{id}$, so has order $3$ ([[def-finite-symmetric-group-and-permutation-notation]], [[def-order-in-a-group]], [[lem-cyclic-subgroup-is-the-set-of-powers]]).

[F3] $A_3\le S_3$ is a normal subgroup of order $3$, and $A_3\ne S_3$; a group of order $3$ is cyclic, hence contains an element of order $3$, so $A_3$ consists of the identity together with the two elements of order $3$ of $S_3$, namely $A_3=\{\operatorname{id},(0\,1\,2),(0\,2\,1)\}$ by [F1] and [F2] ([[def-alternating-group]], [[cor-alternating-group-is-normal-and-has-half-the-elements]], [[cor-prime-order-group-is-cyclic]], [[def-normal-subgroup]], [[def-subgroup]]).

[F4] Orders and subgroups: $|S_3|=6$ by [F1]; a subgroup's order divides the group order; the intersection of two subgroups is a subgroup; and two distinct subgroups of order $2$ have trivial intersection, because their intersection is a subgroup of each of them, so has order dividing $2$, and has order $2$ only if it equals both, which would make them equal ([[thm-lagrange]], [[lem-intersection-of-subgroups]], [[lem-subgroup-criterion]], [[def-subgroup]]).

[F5] Conjugation of cycle symbols: for $g\in S_3$ and a cycle $(a_1\,\ldots\,a_k)$ of $S_3$, $g(a_1\,\ldots\,a_k)g^{-1}=(g(a_1)\,\ldots\,g(a_k))$; in particular conjugation sends a transposition to a transposition and a $3$-cycle to a $3$-cycle, and for the $3$-cycle $(0\,1\,2)$ and $h=(0\,1)$ it gives $h(0\,1\,2)h^{-1}=(h(0)\,h(1)\,h(2))=(1\,0\,2)=(0\,2\,1)$ ([[lem-conjugating-a-cycle-relabels-its-entries]], [[def-finite-symmetric-group-and-permutation-notation]]).

[F6] Free-action criterion and uniqueness: if $N,H\le G$ with $G=N\rtimes H$, $1<N$, $1<H$ and every $1\ne h\in H$ fixes only the identity of $N$ under conjugation, then $H$ is a Frobenius complement of $G$; and if $G$ is a Frobenius group with complement $H$ and kernel set $N$, then $N\mathrel{\trianglelefteq}G$, $G=NH$, $N\cap H=\{1\}$, and $N$ is the unique normal subgroup $M\mathrel{\trianglelefteq}G$ with $MH=G$ and $M\cap H=\{1\}$ ([[prop-frobenius-groups-and-fixed-point-free-actions]], [[cor-frobenius-semidirect-product-decomposition]], [[def-internal-semidirect-product]], [[def-group-action]], [[def-normal-subgroup]]).

[F7] Conjugation invariance of the Frobenius-complement property: if $H$ is a Frobenius complement of $G$ and $g\in G$, then $H^{g}=gHg^{-1}$ is a subgroup of $G$ isomorphic to $H$, and it is again a Frobenius complement, because $H^{g}\cap xH^{g}x^{-1}=(H\cap g^{-1}xHx^{-1}g)^{g}$ ([[thm-conjugation-is-an-automorphism]], [[def-conjugacy-class-and-centralizer]], [[lem-group-inverse-laws]], [[def-subgroup]]).



## Verification

**Proof technique:** direct.

1.1 $H=\{\operatorname{id},(0\,1)\}$ is a subgroup of $S_3$ of order $2$ by [F1] and [F2], so $1<H<S_3$ because $|S_3|=6$ by [F4]. The conjugates of $(0\,1)$ in $S_3$ are, by [F1], exactly the three transpositions, so the conjugates $H^{g}=gHg^{-1}$ of $H$ are exactly the three subgroups $\{\operatorname{id},(0\,1)\},\{\operatorname{id},(0\,2)\},\{\operatorname{id},(1\,2)\}$ of order $2$; in particular $H^{g}=H$ exactly when $g\in H$, and for $g\notin H$ the conjugate $H^{g}$ is a subgroup of order $2$ different from $H$. [F1, F2, F4, F7]

1.2 By [F3], $A_3$ is normal in $S_3$ of order $3$, so $A_3\cap H=\{1\}$ because $|A_3|=3$ and $|H|=2$ are coprime and the intersection is a subgroup of both by [F4]. Moreover $A_3H$ is a subgroup of $S_3$; its order is divisible by $|H|=2$ and by $|A_3|=3$, hence by $6=|S_3|$, so $A_3H=S_3$ by [F4]. [F3, F4]

1.3 We compute the conjugation action of the nonidentity element $h=(0\,1)$ of $H$ on $A_3$ using [F5]: $h(0\,1\,2)h^{-1}=(h(0)\,h(1)\,h(2))=(1\,0\,2)=(0\,2\,1)\ne(0\,1\,2)$, and $h(0\,2\,1)h^{-1}=(h(0)\,h(2)\,h(1))=(1\,2\,0)=(0\,1\,2)\ne(0\,2\,1)$; also $h\operatorname{id}h^{-1}=\operatorname{id}$. So the only element of $A_3$ fixed by $h$ is the identity. [F3, F5]

2.1 Let $g\in S_3\setminus H$. By step 1.1 the subgroups $H$ and $H^{g}$ are distinct of order $2$, so $H\cap gHg^{-1}=\{1\}$ by [F4]. Hence $H\cap gHg^{-1}=\{1\}$ for every $g\in S_3\setminus H$, which is assertion 1. [F4, step 1.1]

2.2 Steps 1.2 and 1.3 exhibit $S_3=A_3\rtimes H$ with $1<A_3$, $1<H$ and with every nonidentity element of $H$ fixing only the identity of $A_3$; by [F6] the subgroup $H$ is a Frobenius complement of $S_3$, and the kernel set $N$ of $S_3$ with respect to $H$ satisfies $N\mathrel{\trianglelefteq}S_3$, $NH=S_3$, $N\cap H=\{1\}$, and it is the unique such normal subgroup. Since $A_3$ is normal in $S_3$ with $A_3H=S_3$ and $A_3\cap H=\{1\}$ by [F3] and step 1.2, the uniqueness forces $N=A_3$. This is assertion 2. [F3, F6, step 1.2, step 1.3]

3.1 Let $\langle(a\,b)\rangle$ be a transposition subgroup of $S_3$. By [F1] the transposition $(a\,b)$ lies in the conjugacy class of $(0\,1)$, so there is $g\in S_3$ with $(a\,b)=g(0\,1)g^{-1}$, hence $\langle(a\,b)\rangle=H^{g}$; by step 2.1 and [F7] this is a Frobenius complement of $S_3$. Moreover $A_3\mathrel{\trianglelefteq}S_3$ by [F3], $A_3H^{g}=A_3H=S_3$ by step 1.2, and $A_3\cap H^{g}=\{1\}$ by [F4] since $|A_3|=3$ and $|H^{g}|=2$ are coprime; so the uniqueness in [F6] identifies the Frobenius kernel of $S_3$ with respect to $H^{g}$ with $A_3$. This is assertion 3, and the example is complete. ∎ [F3, F4, F6, F7, step 1.2, step 2.1]
