---
id: lem-cg-finite-poset-linear-extensions-and-connectivity
kind: lemma
title: "Linear extensions of a finite poset: existence, prescribed initial ideals, and adjacent-swap connectivity"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 1
deps: [def-partial-order, def-maximal-element, def-lattice-distributive-lattice-and-order-ideal, def-cg-linear-extension-of-a-finite-poset]
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. R. Stembridge, On the Fully Commutative Elements of Coxeter Groups, author manuscript (March 1995, minor revisions September 1995); published in J. Algebraic Combin. 5 (1996), 353-385"
      url: "https://dept.math.lsa.umich.edu/~jrs/papers/FC.pdf"
      locator: "Proof of Proposition 1.2, PDF pp. 5-6 (maximal-element induction); the contiguity assertion in the proof of Proposition 2.3, PDF p. 9 (the contraction argument is supplied locally here)"
    - title: "C. Krattenthaler, The theory of heaps and the Cartier-Foata monoid, appendix to the electronic reedition of P. Cartier and D. Foata, Problemes combinatoires de commutation et rearrangements (2006)"
      url: "https://www.mat.univie.ac.at/~kratt/artikel/heaps.pdf"
      locator: "§3 'Equivalence with the Cartier-Foata monoid', PDF pp. 4-5 (words read from linear extensions)"
    - title: "P. Cartier and D. Foata, Problemes combinatoires de commutation et rearrangements, Lecture Notes in Mathematics 85, Springer 1969; 2005 TeX reproduction with three appendices, electronic reedition 2006"
      url: "https://www.mat.univie.ac.at/~slc/books/cartfoa.pdf"
      locator: "Chapitre premier, §1 'Rappels sur les monoides libres' and §2, printed pp. 5-7 (generation of equivalence classes)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $(P,\preceq)$ be a finite poset ([[def-partial-order]], [[def-maximal-element]]), let linear extensions be as in [[def-cg-linear-extension-of-a-finite-poset]], and let $I\subseteq P$ be an order ideal, i.e. $y\in I$ and $x\preceq y$ imply $x\in I$ ([[def-lattice-distributive-lattice-and-order-ideal]]).

**(1) Minimal elements.** If $P\ne\varnothing$, then $P$ contains an element minimal in $P$ ([[def-maximal-element]]): if no element of $P$ were minimal, then, $P$ being finite, one could assign to each $x\in P$ an element strictly below $x$ and iterate, producing an infinite strictly decreasing sequence in $P$, whose terms are pairwise distinct by transitivity.

**(2) Initial ideals.** Every finite poset has a linear extension, and more precisely: for every order ideal $I$ of $P$ and every linear extension $\sigma=(x_1,\dots,x_m)$ of the induced poset $(I,\preceq|_{I\times I})$, the sequence $\sigma$ can be extended to a linear extension $\pi=(x_1,\dots,x_m,y_1,\dots,y_{n-m})$ of $P$; in particular $\{x_1,\dots,x_m\}=I$ is the set of the first $m$ entries of $\pi$. Dually, every linear extension of the induced poset on $P\setminus I$ can be appended to $\sigma$ to give a linear extension of $P$.

**(3) Adjacent-swap connectivity.** If $\pi$ and $\sigma$ are linear extensions of $P$, then $\sigma$ is obtained from $\pi$ by finitely many interchanges of two consecutive entries that are incomparable in $P$; that is, one can pass from $\pi$ to $\sigma$ by repeatedly swapping adjacent entries $x,y$ with neither $x\preceq y$ nor $y\preceq x$.

## Facts & Assumptions

**Given:** A finite poset $(P,\preceq)$ and an order ideal $I\subseteq P$.

[F1] A partial order is reflexive, antisymmetric and transitive, its strict order is defined by $x\prec y$ if and only if $x\preceq y$ and $x\ne y$, and two elements are incomparable when neither $x\preceq y$ nor $y\preceq x$ ([[def-partial-order]]).

[F2] An element $m\in P$ is minimal when no element of $P$ is strictly below it, that is, when there is no $x\in P$ with $x\prec m$; maximal elements are defined dually, reversing every inequality ([[def-maximal-element]]).

[F3] An order ideal is a subset $I\subseteq P$ such that $y\in I$ and $x\preceq y$ imply $x\in I$ ([[def-lattice-distributive-lattice-and-order-ideal]]).

[F4] A linear extension of a finite poset $Q$ is a tuple listing every element of $Q$ exactly once in which $x\prec y$ implies that $x$ occurs before $y$; the induced poset on a subset of $P$ is again a finite poset with the restricted order ([[def-cg-linear-extension-of-a-finite-poset]]).

## Proof

**Given:** A finite poset $(P,\preceq)$ and an order ideal $I\subseteq P$.

**Proof technique:** direct.

1.1 Clause (1). Suppose that $P\ne\varnothing$ has no minimal element. Fix a listing $P=\{p_1,\dots,p_n\}$ of the finite set and define a sequence by $x_0:=p_1$ and, given $x_k=x\in P$, let $j$ be the least index with $p_j\prec x$ (it exists because $x$ is not minimal) and put $x_{k+1}:=p_j$. This recursion is well defined on $\mathbb N$ using only the order of the indices. It satisfies $x_{k+1}\prec x_k$ for every $k$, so for $i<j$ transitivity gives $x_j\prec x_i$, in particular $x_i\ne x_j$; the infinite sequence therefore has pairwise distinct terms, contradicting the finiteness of $P$. Hence some element of $P$ is minimal. [given, F1, F2]

2.1 Two basic facts about linear extensions. (i) Every finite poset $Q$ has a linear extension: if $Q=\varnothing$ take the empty tuple, and otherwise repeatedly remove a minimal element of the induced poset on the remaining set, which exists by clause (1) applied to that nonempty finite subposet, and list the removed elements in their order of removal; if $a\prec b$ in $Q$ and $b$ were removed before $a$, then at the moment $b$ was removed the element $a$ still belonged to the remaining set and satisfied $a\prec b$, contradicting minimality of $b$ there. (ii) If $(z_1,\dots,z_r)$ is a linear extension of $Q$ and the consecutive entries $z_i,z_{i+1}$ are incomparable in $Q$, then interchanging them yields a linear extension: every pair of entries other than $\{z_i,z_{i+1}\}$ keeps its relative order, and the pair $\{z_i,z_{i+1}\}$ is incomparable, so no order relation is violated. [given, F1, F2, F4, step 1.1]

3.1 Clause (2). Let $\tau=(y_1,\dots,y_{n-m})$ be a linear extension of the induced poset on $P\setminus I$, which exists by step 2.1(i) since $P\setminus I$ is a finite poset. The concatenation $\pi=(x_1,\dots,x_m,y_1,\dots,y_{n-m})$ is a linear extension of $P$: within each block the order of the respective induced poset is respected, and a relation crossing the blocks would have to run from the second block to the first, of the form $y_j\prec x_i$; but $x_i\in I$, so the ideal property would give $y_j\in I$, contradicting $y_j\in P\setminus I$. Hence $\sigma$ extends to a linear extension $\pi$ of $P$ whose first $m$ entries are exactly the elements of $I$, and applying the same concatenation to an arbitrary linear extension $\tau$ of the induced poset on $P\setminus I$ gives the dual assertion of clause (2). In particular step 2.1(i) proves the first sentence of clause (2). [given, F3, F4, step 2.1]

3.2 Clause (3), the reduction. Let $\pi$ and $\sigma$ be linear extensions of $P$ and let $a$ be the last entry of $\pi$. Then $a$ is maximal in $P$: if $a\prec y$ for some $y\in P$, then $y$ occurs after $a$ in $\pi$, contradicting that $a$ is last. Every entry occurring after $a$ in $\sigma$ is incomparable with $a$: if $y\prec a$ then $y$ occurs before $a$ in $\sigma$, and if $a\prec y$ then $a$ is not maximal. Consequently moving $a$ to the last position of $\sigma$ by successively interchanging it with the entry immediately to its right is a sequence of interchanges of consecutive incomparable entries, each of which yields a linear extension by step 2.1(ii); the resulting list $\sigma_1$ is a linear extension of $P$ ending in $a$, obtained from $\sigma$ by finitely many such interchanges. [given, F1, F4, step 2.1]

4.1 Clause (3), the induction. Induct on $n=|P|$: for $n=0$ both linear extensions are empty and no interchange is needed. For $n\ge1$ let $\pi$, $\sigma$, $a$ and $\sigma_1$ be as in step 3.2, and delete the common last entry $a$ from $\pi$ and $\sigma_1$. The resulting tuples $\pi'$ and $\sigma_1'$ are linear extensions of the induced poset on $Q:=P\setminus\{a\}$, a finite poset with $n-1<n$ elements, so by the induction hypothesis $\sigma_1'$ is obtained from $\pi'$ by finitely many interchanges of consecutive entries that are incomparable in $Q$. Two elements of $Q$ are comparable in $Q$ exactly when they are comparable in $P$, so each of these interchanges is also an interchange of consecutive entries incomparable in $P$, and inserting them into $\pi$ and $\sigma_1$ produces linear extensions of $P$. Hence $\pi$ is connected to $\sigma_1$ by such interchanges, and step 3.2 connects $\sigma_1$ to $\sigma$; thus $\sigma$ is obtained from $\pi$ by finitely many interchanges of consecutive entries that are incomparable in $P$. [given, F1, F4, step 3.2] ∎
