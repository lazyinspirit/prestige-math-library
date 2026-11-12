---
title: Dimension of the maximal spectrum
status: published
research_item: lem-author-3af31ead36fb-max-spectrum-dimension
dependency_level: 0
---

PDF p. 1: Serre splitting theorem

## Prerequisites

- [math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring)
- [math:def-noetherian-ring-and-module](https://alphabetamath.cc/item/def-noetherian-ring-and-module)
- [math:def-prime-and-maximal-ideals](https://alphabetamath.cc/item/def-prime-and-maximal-ideals)
- [math:cor-maximal-ideals-are-prime](https://alphabetamath.cc/item/cor-maximal-ideals-are-prime)
- [math:def-prime-spectrum-and-vanishing-sets](https://alphabetamath.cc/item/def-prime-spectrum-and-vanishing-sets)
- [math:lem-zariski-closed-set-axioms](https://alphabetamath.cc/item/lem-zariski-closed-set-axioms)
- [math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top)
- [math:def-noetherian-topological-space](https://alphabetamath.cc/item/def-noetherian-topological-space)
- [math:def-irreducible-topological-space-and-subset](https://alphabetamath.cc/item/def-irreducible-topological-space-and-subset)
- [math:def-interior-closure-boundary-top](https://alphabetamath.cc/item/def-interior-closure-boundary-top)
- [math:def-left-right-and-two-sided-ideal](https://alphabetamath.cc/item/def-left-right-and-two-sided-ideal)


## Statement
Let $A$ be a nonzero noetherian commutative ring of finite Krull dimension $d$. Its maximal spectrum $\Omega$, the set of maximal ideals with the topology induced from $\operatorname{Spec}A$, is noetherian and has topological dimension at most $d$. Krull dimension is the supremum of the lengths of strict chains of prime ideals; topological dimension is the supremum of the lengths of strict chains of irreducible closed subsets.

## Facts & Assumptions

**Given:** A nonzero noetherian commutative ring $A$ of finite Krull dimension $d$.

**Goal:** Establish the noetherian and dimension assertions for $\Omega$.

[F1] A noetherian commutative ring has every ideal finitely generated; consequently every ascending chain of ideals stabilizes. Only this choice-free implication is used. [math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring) [math:def-noetherian-ring-and-module](https://alphabetamath.cc/item/def-noetherian-ring-and-module)

[F2] Prime and maximal ideals are proper ideals, and every maximal ideal is prime, so $\Omega\subseteq\operatorname{Spec}A$. For $T\subseteq A$, write $V(T)=\{\mathfrak p\in\operatorname{Spec}A:T\subseteq\mathfrak p\}$; these sets, equivalently the $V(I)$ for ideals $I$, are exactly the Zariski-closed sets. Write $V(a)=V(\{a\})$. [math:def-prime-and-maximal-ideals](https://alphabetamath.cc/item/def-prime-and-maximal-ideals) [math:cor-maximal-ideals-are-prime](https://alphabetamath.cc/item/cor-maximal-ideals-are-prime) [math:def-prime-spectrum-and-vanishing-sets](https://alphabetamath.cc/item/def-prime-spectrum-and-vanishing-sets) [math:lem-zariski-closed-set-axioms](https://alphabetamath.cc/item/lem-zariski-closed-set-axioms)

[F3] A subspace has as its closed sets the traces of ambient closed sets. A topological space is noetherian when every descending chain of closed sets stabilizes. An irreducible space is nonempty and cannot be the union of two proper closed subsets; an irreducible subset carries the subspace topology. [math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top) [math:def-noetherian-topological-space](https://alphabetamath.cc/item/def-noetherian-topological-space) [math:def-irreducible-topological-space-and-subset](https://alphabetamath.cc/item/def-irreducible-topological-space-and-subset)

[F4] The closure $\overline B$ in an ambient space is the smallest closed set containing $B$. [math:def-interior-closure-boundary-top](https://alphabetamath.cc/item/def-interior-closure-boundary-top)

[F5] An ideal is an additive subgroup closed under multiplication by ring elements. For $C\subseteq\operatorname{Spec}A$, define $J(C)=\bigcap_{\mathfrak p\in C}\mathfrak p$, taking $J(\varnothing)=A$. This is a canonical intersection of the prime ideals belonging to $C$, without selecting a defining ideal for each member of a family of closed sets. [math:def-left-right-and-two-sided-ideal](https://alphabetamath.cc/item/def-left-right-and-two-sided-ideal)

## Proof

1.1 Put $S=\operatorname{Spec}A$. For every $C\subseteq S$, the set $J(C)$ is an ideal: it contains zero and is closed under subtraction and multiplication by elements of $A$, since each intersected prime ideal has these properties; the empty intersection $A$ also has them. If $C$ is closed, write $C=V(I)$. Then $I\subseteq J(C)$, so $V(J(C))\subseteq V(I)=C$; conversely each prime belonging to $C$ contains $J(C)$, giving $C\subseteq V(J(C))$. Thus $C=V(J(C))$, including when $C$ is empty. A descending chain $C_0\supseteq C_1\supseteq\cdots$ of closed subsets of $S$ gives an ascending chain $J(C_0)\subseteq J(C_1)\subseteq\cdots$ of ideals. This stabilizes by [F1], so the closed-set chain stabilizes as well and $S$ is noetherian. For every subset $B$ closed in $\Omega$, [F3] gives $B=\Omega\cap H$ for some closed $H\subseteq S$. Since $B\subseteq\overline B\subseteq H$, one has $\Omega\cap\overline B=B$. A descending chain of such $B$ therefore gives a descending chain of their ambient closures, which stabilizes in $S$; tracing back to $\Omega$ proves that $\Omega$ is noetherian. [F1, F2, F3, F4, F5, given]

2.1 Let $Z_0\subsetneq\cdots\subsetneq Z_s$ be a strict chain of irreducible closed subsets of $\Omega$, and put $C_i=\overline{Z_i}$ in $S$. These closures form a strict chain: closure preserves inclusion by [F4], and $C_i\cap\Omega=Z_i$ by step 1.1. Each $C_i$ is nonempty and irreducible. Indeed, if $C_i=H\cup K$ with $H,K$ closed in $C_i$, then $H,K$ are closed in $S$ because $C_i$ is closed; irreducibility of $Z_i$ gives $Z_i\subseteq H$ or $Z_i\subseteq K$, and taking ambient closures gives $C_i=H$ or $C_i=K$. For any nonempty irreducible closed $C\subseteq S$, put $\mathfrak p=J(C)$. This ideal is proper because every prime belonging to the nonempty set $C$ omits $1$. If $ab\in\mathfrak p$, primality of every point of $C$ gives $C\subseteq V(a)\cup V(b)$. The two traces $C\cap V(a)$ and $C\cap V(b)$ are closed in $C$, so irreducibility gives $C\subseteq V(a)$ or $C\subseteq V(b)$, equivalently $a\in J(C)$ or $b\in J(C)$. Hence $\mathfrak p$ is prime and $C=V(\mathfrak p)$ by step 1.1. Applied to the $C_i$, the ideals $J(C_i)$ form a strictly descending chain of primes: inclusion reverses under intersection, and equality would imply equality of their vanishing sets. Reversing this chain gives a prime-ideal chain of length $s$, so $s\leq d$. Taking the supremum over all such chains proves the asserted dimension bound. [F2, F3, F4, F5, given, step 1.1] ∎
