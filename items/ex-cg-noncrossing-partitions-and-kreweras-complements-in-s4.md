---
id: ex-cg-noncrossing-partitions-and-kreweras-complements-in-s4
kind: example
title: "The fourteen elements below (1 2 3 4), the noncrossing partitions of a square, and their Kreweras complements"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 24
deps:
  - def-cg-coxeter-noncrossing-poset-and-kreweras-map
  - thm-cg-kreweras-complement-and-type-a-partition-model
  - def-hh-coxeter-matrix-word-group-and-length
  - def-finite-symmetric-group-and-permutation-notation
  - lem-symmetric-group-is-a-group
  - thm-the-symmetric-group-has-the-coxeter-presentation
  - thm-disjoint-cycle-decomposition
  - def-permutation-support-disjoint-cycles-and-cycle-type
justified_by: []
aliases: []
landmark: false
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "D. Armstrong, Generalized Noncrossing Partitions and Combinatorics of Coxeter Groups, Memoirs of the AMS 202 (2009), no. 949, arXiv:math/0611106v2"
      url: "https://arxiv.org/pdf/math/0611106"
      locator: "§4.1, printed pp. 82–85, Lemmas 4.1.4–4.1.5 and Theorem 4.1.3 (cycle counts, transposition moves, and the type-A partition model); §4.2, printed pp. 87–89, Definitions 4.2.2–4.2.3 and identity (4.4) (interleaving and the classical complement). The list and complement products below are verified locally."
---

## Example

Work in the type-$A_3$ Coxeter system realized as $S_4$, with $s_1=(1\ 2)$, $s_2=(2\ 3)$, $s_3=(3\ 4)$, and $c=s_1s_2s_3=(1\ 2\ 3\ 4)$ ([[def-finite-symmetric-group-and-permutation-notation]], [[lem-symmetric-group-is-a-group]], [[thm-the-symmetric-group-has-the-coxeter-presentation]], [[def-hh-coxeter-matrix-word-group-and-length]], [[def-cg-coxeter-noncrossing-poset-and-kreweras-map]] (1)). The following finite computations use right-to-left composition.

**(1) The interval.** With $\ell_T(w)=4-\#\{\text{cycles of }w\}$, counting fixed points ([[thm-cg-kreweras-complement-and-type-a-partition-model]] (2), [[thm-disjoint-cycle-decomposition]], [[def-permutation-support-disjoint-cycles-and-cycle-type]]), the interval $[1,c]_{\le_T}$ has exactly these fourteen elements: the identity; the six transpositions $(1\ 2),(2\ 3),(3\ 4),(1\ 3),(2\ 4),(1\ 4)$; the double transpositions $(1\ 2)(3\ 4)$ and $(1\ 4)(2\ 3)$; the 3-cycles $(1\ 2\ 3),(1\ 2\ 4),(1\ 3\ 4),(2\ 3\ 4)$; and $c$ ([[def-cg-coxeter-noncrossing-poset-and-kreweras-map]] (2), [[thm-cg-kreweras-complement-and-type-a-partition-model]] (3)).

**(2) The crossing obstruction and the partition model.** Of the fifteen partitions of $\{1,2,3,4\}$, exactly $\{1,3\}\mid\{2,4\}$ is crossing in the cyclic order $1<2<3<4<1$; its permutation $(1\ 3)(2\ 4)$ is the unique double transposition absent from (1). The cycle-support partition of every element in (1) is noncrossing and its cycles are cyclically increasing. Conversely, the fourteen noncrossing partitions each give exactly one element of (1), by the type-A criterion and partition isomorphism ([[thm-cg-kreweras-complement-and-type-a-partition-model]] (3)–(4)).

**(3) Kreweras complements.** The map $K(w)=w^{-1}c$ is an order-reversing bijection and $K^2(w)=c^{-1}wc$ ([[thm-cg-kreweras-complement-and-type-a-partition-model]] (1)). Its values on (1) are
$$\begin{aligned}&K(1)=c,\quad K(c)=1;\\&K(1\ 2)=(2\ 3\ 4),\quad K(2\ 3)=(1\ 3\ 4),\quad K(3\ 4)=(1\ 2\ 4),\\&K(1\ 3)=(1\ 2)(3\ 4),\quad K(2\ 4)=(1\ 4)(2\ 3),\quad K(1\ 4)=(1\ 2\ 3);\\&K((1\ 2)(3\ 4))=(2\ 4),\quad K((1\ 4)(2\ 3))=(1\ 3);\\&K(1\ 2\ 3)=(3\ 4),\quad K(1\ 2\ 4)=(2\ 3),\quad K(1\ 3\ 4)=(1\ 2),\quad K(2\ 3\ 4)=(1\ 4).\end{aligned}$$
For every $w$ in (1), the support partition of $K(w)$ has $5-|\pi(w)|$ blocks. On support partitions, $K^2$ rotates labels by $1\mapsto4\mapsto3\mapsto2\mapsto1$.

## Facts & Assumptions

**Given:** The Coxeter presentation of $S_4$, right-to-left permutation composition, the reflection-length formula and the type-A criterion/isomorphism of [[thm-cg-kreweras-complement-and-type-a-partition-model]].

[F1] The adjacent transpositions are the simple reflections of type $A_3$ and their product in the stated order is $(1\ 2\ 3\ 4)$ ([[thm-the-symmetric-group-has-the-coxeter-presentation]], [[def-hh-coxeter-matrix-word-group-and-length]]).

[F2] The disjoint cycles determine the orbits, including fixed points as singleton blocks; cycle notation composes with the rightmost factor first ([[thm-disjoint-cycle-decomposition]], [[def-permutation-support-disjoint-cycles-and-cycle-type]], [[def-finite-symmetric-group-and-permutation-notation]]).

[F3] For type A, $\ell_T(w)=N-\#\{\text{cycles of }w\}$; interval membership is equivalent to having a noncrossing support partition and cyclically increasing cycles; the support map identifies the interval with noncrossing set partitions ([[thm-cg-kreweras-complement-and-type-a-partition-model]] (2)–(4)).

[F4] On the general finite-type interval, $K$ is an order-reversing bijection, $K^2(w)=c^{-1}wc$, and $\ell_T(K(w))=|S|-\ell_T(w)$ ([[thm-cg-kreweras-complement-and-type-a-partition-model]] (1)).

## Verification

**Proof technique:** sort $S_4$ by reflection length and apply the type-A criterion; then compute $w^{-1}c$ for each listed element.

**Given:** The data above.

1.1 (The fourteen interval elements.) By [F3], $\ell_T(w)=4-\#\{\text{cycles of }w\}$ and $w\le_Tc$ exactly when its cycles are cyclically increasing and its support partition is noncrossing. Length $0$ gives only $1$. Length $1$ gives all six transpositions; each has one pair block and two singleton blocks, so is noncrossing, and its 2-cycle is cyclically increasing. Length $2$ means two cycles, hence either a 3-cycle and a fixed point or two transpositions. For each of the four 3-element supports, exactly one orientation is cyclically increasing, giving $(1\ 2\ 3),(1\ 2\ 4),(1\ 3\ 4),(2\ 3\ 4)$; each support partition is noncrossing. Of the three double transpositions, $(1\ 2)(3\ 4)$ and $(1\ 4)(2\ 3)$ have noncrossing pair blocks, while $(1\ 3)(2\ 4)$ has crossing pair blocks. Length $3$ means a single 4-cycle; only $(1\ 2\ 3\ 4)$ is cyclically increasing in the stated order. These cases exhaust the possible cycle counts and give precisely the list in (1). [F1, F2, F3, algebra]

1.2 (Direct complement products.) For an involution $w$, $K(w)=wc$. Applying $c=(1\ 2\ 3\ 4)$ on the right first gives $K(1\ 2)=(2\ 3\ 4)$, $K(2\ 3)=(1\ 3\ 4)$, $K(3\ 4)=(1\ 2\ 4)$, $K(1\ 3)=(1\ 2)(3\ 4)$, $K(2\ 4)=(1\ 4)(2\ 3)$, and $K(1\ 4)=(1\ 2\ 3)$. The same multiplication gives $K((1\ 2)(3\ 4))=(2\ 4)$ and $K((1\ 4)(2\ 3))=(1\ 3)$. For the 3-cycles, multiplying their inverses by $c$ gives $K(1\ 2\ 3)=(3\ 4)$, $K(1\ 2\ 4)=(2\ 3)$, $K(1\ 3\ 4)=(1\ 2)$, and $K(2\ 3\ 4)=(1\ 4)$; also $K(1)=c$ and $K(c)=1$. This is the full list in Statement (3). [F1, F2, algebra]

2.1 (The fifteen partitions.) By block sizes, the set partitions of four labels consist of one partition with one block, six with three blocks, seven with two blocks, and one with four blocks, for a total of fifteen. A partition with one or four blocks is noncrossing. The six three-block partitions have one pair and two singletons, so are noncrossing. Among the seven two-block partitions, the four triple-plus-singleton partitions are noncrossing; the three pairings are $\{1,2\}\mid\{3,4\}$, $\{1,4\}\mid\{2,3\}$, and $\{1,3\}\mid\{2,4\}$, of which only the last has alternating endpoints. This proves the unique crossing claim. The first-step list has fourteen elements, all with noncrossing cyclically increasing cycles; [F3] says each noncrossing partition has a unique such interval permutation. Thus the supports in (1) give exactly the fourteen noncrossing partitions. [F2, F3, step 1.1, algebra]

3.1 (Order, square, and block counts.) [F4] gives that $K$ is an order-reversing bijection of the interval, $K^2(w)=c^{-1}wc$, and $\ell_T(K(w))=3-\ell_T(w)$. Conjugating a cycle by $c^{-1}$ relabels each entry by $1\mapsto4\mapsto3\mapsto2\mapsto1$, so the support partition rotates as stated. Since $\ell_T(w)=4-|\pi(w)|$ and $\ell_T(K(w))=4-|\pi(K(w))|$ by [F3], the length complement gives $|\pi(K(w))|=5-|\pi(w)|$. [F3, F4, step 1.1, step 1.2] ∎

## Remarks

- **Open supplier obligations.** `def-cg-coxeter-noncrossing-poset-and-kreweras-map` supplies the Coxeter-element and interval conventions in the opening Statement; A6 `thm-cg-kreweras-complement-and-type-a-partition-model` supplies the type-A length/criterion/model in Statement (1)–(3) and proof steps 1.1, 2.1 and 3.1. Its complement identities are used in B3 proof step 3.1. Both assigned predecessors remain escalated on the exact upstream suppliers in their item remarks and pair checkpoints. The batch-2 supplier with no closed current Step-3 disposition `def-hh-coxeter-matrix-word-group-and-length` supplies the Coxeter presentation in Statement/Facts [F1]; the published symmetric-group and cycle-notation items supply the remaining group conventions. Reconcile A6's actual use before clearing B3.
