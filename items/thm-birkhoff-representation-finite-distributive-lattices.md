---
id: thm-birkhoff-representation-finite-distributive-lattices
kind: theorem
title: "Birkhoff representation theorem: every finite distributive lattice is isomorphic to the lattice of order ideals of its join-irreducible poset"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-finite-lattice-join-irreducible-decomposition, lem-join-irreducible-is-join-prime, lem-order-ideals-form-a-distributive-lattice, def-injection-surjection-bijection, thm-subset-of-a-finite-set]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Archive of Formal Proofs, Birkhoff's Representation Theorem for Finite Distributive Lattices"
      url: "https://www.isa-afp.org/entries/Birkhoff_Finite_Distributive_Lattices.html"
    - title: "MIT OpenCourseWare 18.212, Lecture 16: Distributive lattices"
      url: "https://ocw.mit.edu/courses/18-212-algebraic-combinatorics-spring-2019/resources/mit18_212s19_lec16/"
pipeline_run: null
---

## Statement

Let $L$ be a nonempty finite distributive lattice and let
$P=\operatorname{JI}(L)$ be its poset of join-irreducible elements. The map

$$\Phi:L\longrightarrow J(P),\qquad \Phi(x):=\{j\in P:j\le x\},$$

is a lattice isomorphism. Its inverse sends an order ideal $I$ to
$\bigvee I$, with the empty join equal to $0_L$.

## Facts & Assumptions

**Given:** A nonempty finite distributive lattice $L$, its join-irreducible poset $P$, and the map $\Phi$ in the Statement.

[L1] Every $x\in L$ is the join of the join-irreducible elements below it, and $L$ has a bottom $0_L$ ([[lem-finite-lattice-join-irreducible-decomposition]]).

[L2] Every join-irreducible element of a distributive lattice is join-prime ([[lem-join-irreducible-is-join-prime]]).

[L3] The order ideals of a finite poset form a distributive lattice under union and intersection ([[lem-order-ideals-form-a-distributive-lattice]]).

[L4] Every subset of a finite set is finite ([[thm-subset-of-a-finite-set]]).

[F1] A bijection is a map that is both injective and surjective ([[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** constructive.

1.1 The poset $P$ is finite because it is a subset of $L$. For every $x\in L$, the set $\Phi(x)$ is an order ideal of $P$: if $j\le x$ and $i\in P$ satisfies $i\le j$, then $i\le x$. Thus $\Phi$ is well defined. [given, L3, L4]

1.2 For an order ideal $I\in J(P)$, construct $\Psi(I):=\bigvee I$, taking $\Psi(\varnothing)=0_L$. Then $I\subseteq\Phi(\Psi(I))$. [given, L1, construct]

2.1 For $x,y\in L$, one has $\Phi(x\wedge y)=\Phi(x)\cap\Phi(y)$. Also $\Phi(x\vee y)=\Phi(x)\cup\Phi(y)$, because a join-irreducible $j$ satisfies $j\le x\vee y$ exactly when $j\le x$ or $j\le y$ by [L2]. [step 1.1, L2, L3]

2.2 The map $\Phi$ is injective. If $\Phi(x)=\Phi(y)$, then [L1] writes both $x$ and $y$ as the join of the same set of join-irreducibles, so $x=y$. [step 1.1, L1, F1]

2.3 Conversely, suppose $j\in\Phi(\Psi(I))$. If $I=\varnothing$, then $j\le0_L$, forcing $j=0_L$, contrary to join-irreducibility. Thus $I$ is nonempty. Repeated application of join-primality [L2] to the finite join $j\le\bigvee I$ gives $j\le i$ for some $i\in I$. Since $I$ is an order ideal, $j\in I$. Hence $\Phi(\Psi(I))=I$. [step 1.2, L1, L2, L4]

3.1 Step 2.3 proves that $\Phi$ is surjective, while step 2.2 proves injectivity. Step 2.1 shows that it preserves meets and joins. Moreover [L1] gives $\Psi(\Phi(x))=x$, so $\Psi$ is its inverse. Therefore $\Phi$ is the asserted lattice isomorphism. [step 2.1, step 2.2, step 2.3, L1, F1, discharge-construct] ∎
