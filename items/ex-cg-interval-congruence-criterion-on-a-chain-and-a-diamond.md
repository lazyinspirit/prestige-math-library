---
id: ex-cg-interval-congruence-criterion-on-a-chain-and-a-diamond
kind: example
title: "The interval criterion checked on a three-element chain and a diamond"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 3
deps: [thm-cg-finite-lattice-interval-congruence-criterion, lem-cg-lattice-quotient-descent-and-class-intervals, def-cg-finite-lattice-congruence-and-interval-projections, def-lattice-distributive-lattice-and-order-ideal, def-boolean-lattice-and-levels, def-poset-interval-and-finiteness-conditions, def-chain, lem-equivalence-classes-partition]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "Nathan Reading, Lattice congruences of the weak order: algebra, combinatorics, and geometry, Triangle Lectures in Combinatorics (2019), slides on the order-theoretic characterization of a lattice congruence"
      url: "https://nreadin.math.ncsu.edu/papers/TLC.pdf"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

On the three-element chain $C=\{0<a<1\}$ and on the diamond $D=\{0<a,b<1\}$ (finite lattices under the induced order; $D\cong B(\{a,b\})$, [[def-boolean-lattice-and-levels]]), list every partition of the underlying set whose classes are intervals $[d(x),u(x)]$ with endpoints in the class, apply the interval criterion ([[thm-cg-finite-lattice-interval-congruence-criterion]]) to each partition, and identify the quotient lattice ([[lem-cg-lattice-quotient-descent-and-class-intervals]]) of each surviving partition.

On $C$ there are exactly four interval partitions, namely $\{0\}|\{a\}|\{1\}$, $\{0,a\}|\{1\}$, $\{0\}|\{a,1\}$ and $\{0,a,1\}$, and all four are lattice congruences: the endpoint maps are order-preserving in each case, and the quotients are $C$ itself, two two-element chains, and the one-element lattice. On $D$ there are exactly eight interval partitions, namely $\{0\}|\{a\}|\{b\}|\{1\}$, $\{0,a\}|\{b\}|\{1\}$, $\{0,b\}|\{a\}|\{1\}$, $\{0\}|\{a\}|\{b,1\}$, $\{0\}|\{b\}|\{a,1\}$, $\{0,a\}|\{b,1\}$, $\{0,b\}|\{a,1\}$ and $\{0,a,b,1\}$; exactly four of them satisfy the criterion, namely the discrete partition, $\{0,a\}|\{b,1\}$, $\{0,b\}|\{a,1\}$ and the all-one partition, and these are exactly the lattice congruences of $D$: the other four fail with an explicit violation, for example $\{0,a\}|\{b\}|\{1\}$ has $u(0)=a$, $u(b)=b$ and $0\le b$ but $a\not\le b$. The two 2+2 congruences have quotient the two-element chain; the quotient of the discrete partition is $D$ and the quotient of the all-one partition is the one-element lattice, so the congruence lattice of $D$ has exactly four elements.

## Facts & Assumptions

**Given:** The three-element chain $C=\{0<a<1\}$ and the diamond $D=\{0<a,b<1\}$ with $a,b$ incomparable, identified with $B(\{a,b\})=\{\varnothing,\{a\},\{b\},\{a,b\}\}$ through $0=\varnothing$, $a=\{a\}$, $b=\{b\}$, $1=\{a,b\}$; intervals are $[d,u]=\{z:d\le z\le u\}$ ([[def-poset-interval-and-finiteness-conditions]]).

[F1] In the chain $C=\{0<a<1\}$ every two elements are comparable, so each pair has a least upper and a greatest lower bound, namely the larger and the smaller element; the intervals $[d,u]$ are $\{0\},\{a\},\{1\},\{0,a\},\{a,1\}$ and $C$ ([[def-chain]], [[def-lattice-distributive-lattice-and-order-ideal]]).

[F2] In $D$ the order is inclusion, so $0<a<1$, $0<b<1$, and $a,b$ are incomparable; meet and join are intersection and union, so $0\vee b=b$, $a\vee b=1$, $a\wedge b=0$; the intervals $[d,u]$ are the four singletons and the sets $\{0,a\},\{0,b\},\{a,1\},\{b,1\},D$ ([[def-boolean-lattice-and-levels]], [[def-lattice-distributive-lattice-and-order-ideal]]).

[F3] Criterion: an equivalence relation $\theta$ on a finite lattice whose classes are intervals $[d(x),u(x)]$ with endpoints in the class is a lattice congruence if and only if the endpoint maps $d$ and $u$ are order-preserving ([[thm-cg-finite-lattice-interval-congruence-criterion]]).

[F4] For a lattice congruence $\theta$ every class is the interval between its least and greatest members, and the proposed operations on classes are independent of the chosen representatives and with them the classes form a lattice $L/\theta$ whose order is $[x]_\theta\le[y]_\theta$ if and only if $x\vee y\equiv_\theta y$, while the class operations are $[x]_\theta\vee[y]_\theta=[x\vee y]_\theta$ and $[x]_\theta\wedge[y]_\theta=[x\wedge y]_\theta$ ([[lem-cg-lattice-quotient-descent-and-class-intervals]], [[def-cg-finite-lattice-congruence-and-interval-projections]]).

[F5] A partition of a set $A$ is a family of nonempty pairwise disjoint blocks whose union is $A$; it determines the equivalence relation whose classes are the blocks ([[lem-equivalence-classes-partition]]).

## Verification

**Proof technique:** direct.

1.1 The interval partitions of $C$. By [F1] the intervals of $C$ are $\{0\},\{a\},\{1\},\{0,a\},\{a,1\}$ and $C$, so a partition of $C$ into intervals is a family of pairwise disjoint of these sets with union $C$. The possibilities are: the three singletons; $\{0,a\}$ with $\{1\}$; $\{0\}$ with $\{a,1\}$; and $C$ itself. There is no other: any such partition other than these would have to contain a two-element block $\{0,1\}$, but $\{0,1\}$ is not an interval because $0<1$ and $a$ lies strictly between, while $a\notin\{0,1\}$. Hence there are exactly four interval partitions of $C$, the four listed in the Example. [F1, F5]

1.2 The interval partitions of $D$. By [F2] the intervals of $D$ are the four singletons, the four two-element sets $\{0,a\},\{0,b\},\{a,1\},\{b,1\}$, and $D$. No three-element subset of $D$ is an interval: a block of the form $[d,u]$ contains its least element $d$ and its greatest element $u$, but $\{0,a,b\}$ has no greatest element and $\{a,b,1\}$ has no least element, while the two remaining three-element subsets $\{0,a,1\}$ and $\{0,b,1\}$ have least element $0$ and greatest element $1$ with $[0,1]=D$ strictly larger than either. A partition of $D$ into intervals therefore consists of the four singletons ($1$ way), or one two-element interval and two singletons ($4$ choices of the pair, the complement being two singletons), or two two-element intervals, of which the three pairings of $D$ contribute the admissible $\{0,a\}|\{b,1\}$ and $\{0,b\}|\{a,1\}$ but not $\{a,b\}|\{0,1\}$ since neither $\{a,b\}$ nor $\{0,1\}$ is an interval, or $D$ itself ($1$ way): altogether $1+4+2+1=8$ interval partitions, the eight listed in the Example. [F2, F5]

2.1 The four partitions of $C$ are congruences. For each of the four partitions of step 1.1 the endpoints $d(x)\le u(x)$ are the least and greatest members of the block of $x$: for the discrete partition $d=u=\mathrm{id}$, both maps order-preserving; for $\{0,a\}|\{1\}$ one has $d(0)=d(a)=0$, $d(1)=1$ and $u(0)=u(a)=a$, $u(1)=1$, and both maps are nondecreasing along $0<a<1$; for $\{0\}|\{a,1\}$ one has $d(0)=0$, $d(a)=d(1)=a$ and $u(0)=0$, $u(a)=u(1)=1$, again both nondecreasing; and for the all-one partition both maps are constant. By the criterion [F3] all four are lattice congruences. Their quotients, computed with [F4], are: $C$ for the discrete partition (the blocks are the elements and $[x]\vee[y]=[x\vee y]$ reproduces the order of $C$); the two-element chain $\{0,a\}<\{1\}$ for $\{0,a\}|\{1\}$, since $0\vee1=1$ makes $\{0,a\}\vee\{1\}=\{1\}$ and $\{0,a\}\le\{1\}$; the two-element chain $\{0\}<\{a,1\}$ for $\{0\}|\{a,1\}$, since $0\vee1=1$ makes $\{0\}\vee\{a,1\}=\{a,1\}$; and the one-element lattice for the all-one partition. [F3, F4, step 1.1]

2.2 The criterion on the eight partitions of $D$. The endpoint maps of each partition of step 1.2 are read off from its blocks, and monotonicity is checked on the five comparable pairs $0\le a$, $0\le b$, $0\le 1$, $a\le 1$, $b\le 1$. The discrete partition has $d=u=\mathrm{id}$ and is monotone; the all-one partition has constant maps and is monotone; the partition $\{0,a\}|\{b,1\}$ has $d(0)=d(a)=0$, $d(b)=d(1)=b$, $u(0)=u(a)=a$ and $u(b)=u(1)=1$, and on the five pairs: $0\le a$ gives $0\le0$ and $a\le a$, $0\le b$ gives $0\le b$ and $a\le1$, $0\le1$ gives $0\le b$ and $a\le1$, $a\le1$ gives $0\le b$ and $a\le1$, and $b\le1$ gives $b\le b$ and $1\le1$, so $d$ and $u$ are order-preserving; the partition $\{0,b\}|\{a,1\}$ has $d(0)=d(b)=0$, $d(a)=d(1)=a$, $u(0)=u(b)=b$ and $u(a)=u(1)=1$, and on the five pairs: $0\le a$ gives $0\le a$ and $b\le1$, $0\le b$ gives $0\le0$ and $b\le b$, $0\le1$ gives $0\le a$ and $b\le1$, $a\le1$ gives $a\le a$ and $1\le1$, and $b\le1$ gives $0\le a$ and $b\le1$, so these maps are order-preserving too. These four partitions satisfy the criterion [F3]. The other four fail: $\{0,a\}|\{b\}|\{1\}$ has $u(0)=a$ and $u(b)=b$ with $0\le b$ but $a\not\le b$; $\{0,b\}|\{a\}|\{1\}$ has $u(0)=b$ and $u(a)=a$ with $0\le a$ but $b\not\le a$; $\{0\}|\{a\}|\{b,1\}$ has $d(a)=a$ and $d(1)=b$ with $a\le 1$ but $a\not\le b$; and $\{0\}|\{b\}|\{a,1\}$ has $d(b)=b$ and $d(1)=a$ with $b\le 1$ but $b\not\le a$. Every lattice congruence of $D$ has interval classes by [F4], so its partition occurs in step 1.2. Hence the four partitions satisfying [F3] are exactly the lattice congruences of $D$. [F2, F3, F4, step 1.2]

3.1 Quotients and the count. By [F4] the quotient of $\{0,a\}|\{b,1\}$ is the two-element chain $\{0,a\}<\{b,1\}$: the blocks are distinct, and taking the representatives $0\in\{0,a\}$ and $b\in\{b,1\}$ the class operations give $\{0,a\}\vee\{b,1\}=[0\vee b]=[b]=\{b,1\}$ and $\{0,a\}\wedge\{b,1\}=[0\wedge b]=[0]=\{0,a\}$, so the order is total on the two classes. The quotient of $\{0,b\}|\{a,1\}$ is likewise the two-element chain $\{0,b\}<\{a,1\}$, by the representatives $0$ and $a$. The quotient of the discrete partition is $D$ and the quotient of the all-one partition is the one-element lattice. Therefore $D$ has exactly four lattice congruences and the congruence lattice of $D$ has exactly four elements: order congruences by refinement, meaning that each class of the finer congruence is contained in a class of the coarser one. The discrete congruence is the least, the all-one congruence is the greatest, and the two 2+2 congruences are incomparable (one identifies $0$ with $a$ but not $b$, and the other identifies $0$ with $b$ but not $a$). Thus this order is a diamond: the two middle elements have meet the discrete congruence and join the all-one congruence; comparable pairs have meet the smaller and join the larger. This proves directly that the four congruences form a lattice. Together with steps 1.1, 1.2, 2.1 and 2.2 this verifies every claim of the Example: the four interval partitions of $C$ and their quotients, the eight interval partitions of $D$, the four surviving the criterion with their explicit failures, and the four-element congruence lattice of $D$. [F4, step 1.1, step 1.2, step 2.1, step 2.2] ∎
