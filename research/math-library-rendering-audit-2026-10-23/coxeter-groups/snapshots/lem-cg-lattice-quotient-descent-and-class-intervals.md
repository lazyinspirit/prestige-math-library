---
id: lem-cg-lattice-quotient-descent-and-class-intervals
kind: lemma
title: "Lattice quotient descent, class intervals and monotone endpoints"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 1
deps: [def-cg-finite-lattice-congruence-and-interval-projections, def-lattice-distributive-lattice-and-order-ideal, def-poset-interval-and-finiteness-conditions, def-finite-cardinality, thm-subset-of-a-finite-set, def-equivalence-relation, lem-equivalence-classes-partition, def-partial-order]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
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

## Statement

Let $L$ be a finite lattice, let $\theta$ be a lattice congruence on $L$ ([[def-cg-finite-lattice-congruence-and-interval-projections]]) and let $[x]_\theta$ be the class of $x\in L$. Then:

(i) **(closure)** each class is closed under meet and join: $x\equiv_\theta y$ implies $x\wedge y\equiv_\theta y$ and $x\vee y\equiv_\theta y$; consequently each class is closed under the meet and the join of any nonempty finite subfamily of its members;

(ii) **(endpoints)** each class has a least member $\pi_\downarrow(x)$ and a greatest member $\pi_\uparrow(x)$, both lying in the class, and the class is the interval between them, $[x]_\theta=\{z\in L:\pi_\downarrow(x)\le z\le\pi_\uparrow(x)\}$ ([[def-poset-interval-and-finiteness-conditions]]);

(iii) **(quotient lattice)** the proposed quotient operations are independent of the chosen representatives, and with them the set of classes is a lattice $L/\theta$ whose order is given by $[x]_\theta\le[y]_\theta$ if and only if $x\vee y\equiv_\theta y$; the projection $x\mapsto[x]_\theta$ preserves meets and joins;

(iv) **(monotonicity)** the endpoint maps $\pi_\downarrow:L\to L$ and $\pi_\uparrow:L\to L$ are order-preserving.

Finiteness is used exactly in (ii): the meet and the join of all members of a class are finite iterated meets and joins, formed over a listing of the finite nonempty class ([[def-finite-cardinality]], [[thm-subset-of-a-finite-set]]). No choice principle is used anywhere: the class is listed by a bijection with a natural number, and the binary meet and join are applied along that listing.

## Facts & Assumptions

**Given:** A finite lattice $L$ with meet $\wedge$ and join $\vee$, a lattice congruence $\theta$ on $L$, an element $x\in L$, and the class $[x]_\theta=\{y\in L:x\equiv_\theta y\}$. Write $C:=[x]_\theta$.

[F1] $\theta$ is a lattice congruence: $x\equiv_\theta x'$ and $y\equiv_\theta y'$ imply $x\wedge y\equiv_\theta x'\wedge y'$ and $x\vee y\equiv_\theta x'\vee y'$ ([[def-cg-finite-lattice-congruence-and-interval-projections]]).

[F2] Meet and join are the greatest lower and the least upper bound of a pair: $x\wedge y\le x$, $x\wedge y\le y$, and $z\le x\wedge y$ whenever $z\le x$ and $z\le y$; dually $x\le x\vee y$, $y\le x\vee y$, and $x\vee y\le z$ whenever $x\le z$ and $y\le z$. In particular $x\wedge x=x=x\vee x$ for every $x$ ([[def-lattice-distributive-lattice-and-order-ideal]]).

[F3] $\theta$ is an equivalence relation, so it is reflexive, symmetric and transitive; $[a]_\theta=\{b\in L:a\equiv_\theta b\}$; $a\in[a]_\theta$; and $a\equiv_\theta b$ if and only if $[a]_\theta=[b]_\theta$, so that any two members of one class are equivalent to each other ([[def-equivalence-relation]], [[lem-equivalence-classes-partition]]).

[F4] A subset $B$ of a finite set $A$ is finite and satisfies $|B|\le|A|$; a finite set $C$ satisfies $C\approx|C|$, that is, there is a bijection $|C|\to C$, and $|C|=0$ if and only if $C=\varnothing$ ([[thm-subset-of-a-finite-set]], [[def-finite-cardinality]]).

[F5] A partial order is reflexive, antisymmetric and transitive. In particular, a least member of a set is unique: if $m,m'\in C$ are both least, then $m\le m'$ and $m'\le m$, so $m=m'$ by antisymmetry; the dual argument proves uniqueness of a greatest member ([[def-partial-order]]).

## Proof

**Proof technique:** direct.

1.1 Assume $x\equiv_\theta y$. Apply [F1] to the pairs $(x\equiv_\theta y,\;y\equiv_\theta y)$, the second entry being licensed by reflexivity in [F3]: this gives $x\wedge y\equiv_\theta y\wedge y$ and $x\vee y\equiv_\theta y\vee y$. By [F2] with antisymmetry, $y\wedge y=y=y\vee y$, so $x\wedge y\equiv_\theta y$ and $x\vee y\equiv_\theta y$. [F1, F2, F3]

1.2 $C$ is a subset of the finite set $L$, so $C$ is finite with $k:=|C|\le|L|$ by [F4]; since $x\in C$ by [F3], $C\ne\varnothing$, hence $k\ge1$ and there is a bijection $\ell:k\to C$. Put $z_i:=\ell(i)$ for $i\in k$, so that $C=\{z_0,\dots,z_{k-1}\}$. The bijection $\ell$ is a single witness of an existence statement in the definition of $|C|$; no choice function on a family of sets is used. [F3, F4]

1.3 Assume $x\equiv_\theta x'$ and $y\equiv_\theta y'$. By [F1], $x\vee y\equiv_\theta x'\vee y'$ and $x\wedge y\equiv_\theta x'\wedge y'$, so $[x\vee y]_\theta=[x'\vee y']_\theta$ and $[x\wedge y]_\theta=[x'\wedge y']_\theta$ by [F3]. Hence the proposed operations $[x]_\theta\vee[y]_\theta:=[x\vee y]_\theta$ and $[x]_\theta\wedge[y]_\theta:=[x\wedge y]_\theta$ do not depend on the chosen representatives, and the class of $x$, hence the proposed pair of endpoints of its class, depends only on $[x]_\theta$. [F1, F3]

2.1 Let $z_1,\dots,z_k$ be a listing of a nonempty finite subfamily of $C$ and define $m_1:=z_1$, $m_j:=m_{j-1}\wedge z_j$ for $2\le j\le k$. By induction on $j$ each $m_j$ lies in $C$: $m_1=z_1\in C$, and if $m_{j-1}\in C$ then $m_{j-1}\equiv_\theta z_j$ because any two members of a class are equivalent by [F3], so step 1.1 gives $m_j=m_{j-1}\wedge z_j\equiv_\theta z_j\in C$. The same induction with $\vee$ in place of $\wedge$ shows that the left-nested iterated join of $z_1,\dots,z_k$ lies in $C$. The left-nested iterated meet $m_k$ is the meet of the subfamily: it is a common lower bound by [F2], and every common lower bound $w$ satisfies $w\le m_j$ for all $j\le k$ by induction, since $w\le m_{j-1}$ and $w\le z_j$ give $w\le m_{j-1}\wedge z_j=m_j$ by [F2]; dually the iterated join is the join of the subfamily. Hence each class is closed under the meet and the join of any nonempty finite subfamily of its members. [F2, F3, step 1.1]

2.2 With the well-defined operations of step 1.3, the classes satisfy the lattice identities by transport along representatives: $[x]\wedge[x]=[x\wedge x]=[x]$ and $[x]\vee[x]=[x]$; commutativity $[x]\wedge[y]=[y]\wedge[x]$ and $[x]\vee[y]=[y]\vee[x]$; associativity, because $(x\wedge y)\wedge z$ and $x\wedge(y\wedge z)$ are both the greatest lower bound of $\{x,y,z\}$ — each is a common lower bound, and every common lower bound lies below both by [F2] — hence they are equal by antisymmetry, and dually for $\vee$; and absorption $[x]\wedge([x]\vee[y])=[x\wedge(x\vee y)]=[x]$, since $x$ is the greatest lower bound of $\{x,x\vee y\}$ by [F2], together with the dual absorption. The projection $x\mapsto[x]_\theta$ preserves these operations by construction. [F2, step 1.3]

3.1 For classes $A,B$ define $A\le B$ to mean $A\vee B=B$. The identities of step 2.2 make this a partial order: idempotence gives $A\le A$; if $A\vee B=B$ and $B\vee A=A$, commutativity gives $A=B$; and if $A\vee B=B$ and $B\vee C=C$, then $A\vee C=A\vee(B\vee C)=(A\vee B)\vee C=B\vee C=C$. Moreover $A\le B$ if and only if $A\wedge B=A$: the forward direction is $A\wedge B=A\wedge(A\vee B)=A$ by absorption, and the reverse is $A\vee B=(A\wedge B)\vee B=B$ by commutativity and absorption. [F5, step 2.2]

3.2 Apply step 2.1 to the listing $z_0,\dots,z_{k-1}$ of the nonempty finite class $C$ from step 1.2. Its iterated meet $m$ lies in $C$ and is a common lower bound of all its members, so it is a least member of $C$; its iterated join $b$ lies in $C$ and is a common upper bound, so it is a greatest member. Both are unique by [F5], independently of the chosen listing. Define $\pi_\downarrow(x):=m$ and $\pi_\uparrow(x):=b$. [F5, step 1.2, step 2.1]

4.1 The operations are the bounds for the order of step 3.1. Indeed $A\le A\vee B$ since $A\vee(A\vee B)=A\vee B$, and likewise $B\le A\vee B$. If $A\le C$ and $B\le C$, then $(A\vee B)\vee C=A\vee(B\vee C)=A\vee C=C$, so $A\vee B\le C$. Dually $(A\wedge B)\wedge A=A\wedge B$ and $(A\wedge B)\wedge B=A\wedge B$ show $A\wedge B\le A,B$; if $C\le A,B$, then $C\wedge(A\wedge B)=(C\wedge A)\wedge B=C\wedge B=C$, so $C\le A\wedge B$. Thus the classes form the lattice $L/\theta$ in the order-theoretic sense of [F2]. [F2, step 2.2, step 3.1]

4.2 By the quotient order constructed in step 3.1, $[x]_\theta\le[y]_\theta$ if and only if $[x]_\theta\vee[y]_\theta=[y]_\theta$. The operation of step 1.3 identifies the latter equality with $[x\vee y]_\theta=[y]_\theta$, which holds if and only if $x\vee y\equiv_\theta y$ by [F3]. [F3, step 1.3, step 3.1]

4.3 Let $z\in L$. If $z\in C$ then $\pi_\downarrow(x)\le z\le\pi_\uparrow(x)$, since these are the least and the greatest member of $C$. Conversely assume $\pi_\downarrow(x)\le z\le\pi_\uparrow(x)$ and put $a:=\pi_\downarrow(x)$, $b:=\pi_\uparrow(x)$; both lie in $C$, so $a\equiv_\theta b$ by [F3]. Apply [F1] to the pairs $a\equiv_\theta b$ and $z\equiv_\theta z$: $a\wedge z\equiv_\theta b\wedge z$. Since $a\le z$ we have $a\wedge z=a$ by [F2], and since $z\le b$ we have $b\wedge z=z$ by [F2]; hence $a\equiv_\theta z$, so $z\in C$ by [F3]. Therefore $[x]_\theta=\{z\in L:\pi_\downarrow(x)\le z\le\pi_\uparrow(x)\}$, the asserted interval identity. [F1, F2, F3, step 3.2]

4.4 Monotonicity of the upper endpoint map. Assume $x\le y$. By [F3], $\pi_\uparrow(x)\equiv_\theta x$ and $\pi_\uparrow(y)\equiv_\theta y$, so [F1] gives $\pi_\uparrow(x)\vee\pi_\uparrow(y)\equiv_\theta x\vee y=y\equiv_\theta\pi_\uparrow(y)$; thus $\pi_\uparrow(x)\vee\pi_\uparrow(y)$ lies in the class of $y$, whose greatest member is $\pi_\uparrow(y)$, so $\pi_\uparrow(x)\vee\pi_\uparrow(y)\le\pi_\uparrow(y)$. With $\pi_\uparrow(y)\le\pi_\uparrow(x)\vee\pi_\uparrow(y)$ from [F2], antisymmetry gives $\pi_\uparrow(x)\vee\pi_\uparrow(y)=\pi_\uparrow(y)$, and then $\pi_\uparrow(x)\le\pi_\uparrow(x)\vee\pi_\uparrow(y)=\pi_\uparrow(y)$ by [F2]. [F1, F2, F3, step 3.2]

4.5 Monotonicity of the lower endpoint map. Assume $x\le y$. By [F3], $\pi_\downarrow(x)\equiv_\theta x$ and $\pi_\downarrow(y)\equiv_\theta y$, so [F1] gives $\pi_\downarrow(x)\wedge\pi_\downarrow(y)\equiv_\theta x\wedge y=x\equiv_\theta\pi_\downarrow(x)$; thus $\pi_\downarrow(x)\wedge\pi_\downarrow(y)$ lies in the class of $x$, whose least member is $\pi_\downarrow(x)$, so $\pi_\downarrow(x)\le\pi_\downarrow(x)\wedge\pi_\downarrow(y)$. With $\pi_\downarrow(x)\wedge\pi_\downarrow(y)\le\pi_\downarrow(x)$ from [F2], antisymmetry gives equality, and then $\pi_\downarrow(x)=\pi_\downarrow(x)\wedge\pi_\downarrow(y)\le\pi_\downarrow(y)$ by [F2]. [F1, F2, F3, step 3.2]

5.1 Clause (i) is steps 1.1 and 2.1; clause (ii) is steps 1.2, 3.2 and 4.3, where finiteness enters only through the listing $z_0,\dots,z_{k-1}$ of the finite class and the iterated meet is formed along that listing; clause (iii) is steps 1.3, 2.2, 3.1, 4.1 and 4.2; clause (iv) is steps 4.4 and 4.5. No choice principle is used: the listing is a bijection with a natural number, its existence is a single existential witness, and no family of nonempty sets is selected from. [step 1.1, step 1.2, step 1.3, step 2.1, step 2.2, step 3.1, step 4.1, step 3.2, step 4.2, step 4.3, step 4.4, step 4.5] ∎
