---
id: lem-kojman-shelah-subspace-is-closed
kind: lemma
title: The scale subspace is closed
status: published
verification:
  audited: 2026-09-12
origin: pipeline
deps: [def-kojman-shelah-scale-subspace, lem-kojman-shelah-tail-supremum-closure, lem-rudin-box-space-basic-neighborhoods-and-p-space, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "K. P. Hart, Set-Theoretic Methods in General Topology, Chapter 7 section 2, Exercises 6–10, printed p. 41; tail cutoff and prefix replacement made explicit"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/old-courses/settop/settop.pdf
---

## Statement

Assume AC. The Kojman–Shelah scale subspace $X$ is closed in $X_R(B)$.

## Facts & Assumptions

**Given:** The scale subspace and a point $t\in\overline X^{\,X_R(B)}$. Write $R=X_R(B)$.

[F1] $X$ consists of Rudin points eventually equal to the terms of a strictly increasing eventual scale; admissible finite modifications preserve membership ([[def-kojman-shelah-scale-subspace]]).

[F2] If $1\le m\le k$ and $\aleph_m$ many points of $X$ are strictly increasing at all coordinates $n>k$, their pointwise tail supremum agrees there with a point of $X$ ([[lem-kojman-shelah-tail-supremum-closure]]).

[F3] The boxes $(a,t]_R$, $a<t$, give the local base at $t$, and $R$ is a P-space ([[lem-rudin-box-space-basic-neighborhoods-and-p-space]]).

[F4] Limit-ordinal cofinalities are regular cardinals; sets smaller than an ordinal's cofinality are bounded, and a cofinal subset of that size exists ([[thm-cofinality-basics]]).

[F5] Under AC the finite positive alephs are regular ([[thm-regularity-of-the-alephs]]).

[F6] Specified set-valued rules admit transfinite recursion ([[thm-transfinite-recursion]]).

[A1] AC is assumed for cofinal enumerations and for fixing a choice from each nonempty intersection used in the recursion ([[def-axiom-of-choice]]).

## Proof

1.1 For any $z,w\in X$, choose indices witnessing F1. If their indices are equal, $z=^*w$; if one index is smaller, scale strictness and the two finite exceptional sets give the corresponding strict eventual inequality. Thus exactly one of $z<^*w$, $w<^*z$, or $z=^*w$ holds, since $B$ is infinite. Fix $z\in X$ with $z\le t$, and let $E(z,t)=\{n:z(n)=t(n)\}$. Set $a(n)=0$ on $E(z,t)$ and $a(n)=z(n)$ elsewhere. Point-coordinates of $t$ are positive; outside $E(z,t)$ we have $z(n)<t(n)$. Hence $a<t$. By closure and F3 there is $w\in X\cap(a,t]_R$. If $z<^*w$, the equality coordinates of $z,t$ must lie in the finite exception set, because at such a coordinate $w(n)\le t(n)=z(n)$. Thus $E(z,t)$ is finite. In the other two cases $w\le^*z$. But at every coordinate outside $E(z,t)$, membership in the box gives $w(n)>a(n)=z(n)$. Hence that complement is finite, so $E(z,t)$ is cofinite. [F1, F3]

2.1 Put $A=\{z\in X:z\le t\}$, and for each finite or cofinite $E\subseteq B$ put $A_E=\{z\in A:E(z,t)=E\}$. Every local box at $t$ meets $X$ and contains only points at most $t$, so $t\in\overline A^{\,R}$ by F3. Step 1.1 partitions $A$ into the $A_E$. There are countably many possible $E$: finite subsets of $B$ inject into the natural numbers by $S\mapsto\sum_{n\in S}2^n$ (the largest differing exponent exceeds the sum of all smaller powers), and complementation identifies cofinite subsets with finite ones. If $t$ avoided every $\overline{A_E}^{\,R}$, the countable intersection of their open complements would be an open neighborhood of $t$ by F3 and would miss $A$, contradicting $t\in\overline A$. Choose an $E$ with $t\in\overline{A_E}$. If $E$ is cofinite, $A_E$ is nonempty; take a member $z$. Then $t=^*z$, and $t\in R$ makes this an admissible finite modification, so $t\in X$ by F1. It remains to consider finite $E$. [step 1.1, F1, F3]

3.1 Since $t\in R$, some finite $q$ bounds all its coordinate cofinalities strictly below $\aleph_q$ and above $\omega$. By F4 the possible cofinalities are among $\aleph_1,\ldots,\aleph_{q-1}$. Put $D_i=\{n\in B:\operatorname{cf}(t(n))=\aleph_i\}$. At least one $D_i$ is infinite, since these finitely many sets cover the infinite $B$. Let $m\ge1$ be the least such index. The union of the $D_i$ for $i<m$ is finite. Choose a natural number $k\ge m$ at least all members of this union and of the finite $E$; if the union is empty, use $k=m$. Consequently every tail coordinate $n>k$ has cofinality at least $\kappa=\aleph_m$, and no such coordinate is in $E$. On the infinite set $D_m\cap(k,\omega)$ choose increasing cofinal functions $\gamma_n:\kappa\longrightarrow t(n)$. F4 and A1 supply them: enumerate a size-$\kappa$ cofinal subset and recursively take increasing bounds, with every proper initial segment bounded because its size is less than the cofinality. [step 2.1, F4, F5, F6, A1]

4.1 Construct $z_\xi\in A_E$ for $\xi<\kappa$ as follows. At stage $\xi$, for $n>k$ put $r_\xi(n)=\sup_{\eta<\xi}z_\eta(n)$, with empty supremum zero. Every previous value is below $t(n)$, because its equality set is $E$ and $n\notin E$. Since $|\xi|<\kappa\le\operatorname{cf}(t(n))$, F4 gives $r_\xi(n)<t(n)$. Define a lower function $a_\xi<t$ by setting it to zero on $n\le k$, to $\max(r_\xi(n),\gamma_n(\xi))$ on $D_m\cap(k,\omega)$, and to $r_\xi(n)$ on other tail coordinates. All these inequalities are strict by step 3.1. As $t\in\overline{A_E}$, the open box $(a_\xi,t]_R$ meets $A_E$ by F3. Fix by A1 a choice function for all such nonempty box intersections, a set-indexed family, before applying F6 to the displayed rule. The chosen $z_\xi$ then satisfies $z_\xi\le t$, and at every $n>k$ it is strictly above all earlier values and strictly below $t(n)$. Also $z_\xi(n)>\gamma_n(\xi)$ on $D_m\cap(k,\omega)$. These verifications inductively justify every stage of the recursion. [step 2.1, step 3.1, F3, F4, F6, A1]

5.1 Apply F2 to the sequence of step 4.1 with this $1\le m\le k$. It gives $h\in X$ agreeing with $g(n)=\sup_{\xi<\kappa}z_\xi(n)$ on the tail $n>k$. Replace $h(n)$ by $t(n)$ on the finite prefix $n\le k$, obtaining $h'$. It is still a Rudin point: use a finite aleph bound larger than the two uniform bounds for $h$ and $t$. Hence F1 gives $h'\in X$. On the tail $g(n)\le t(n)$, since every term is at most $t(n)$; on the prefix equality holds by construction, so $h'\le t$. Moreover $g(n)=t(n)$ for every $n\in D_m\cap(k,\omega)$, since the sequence dominates the cofinal $\gamma_n$ there and is bounded by $t(n)$. This infinite set is contained in $E(h',t)$. Step 1.1 therefore forces $E(h',t)$ to be cofinite. Thus $t=^*h'$, and $t\in R$ implies $t\in X$ by F1. [step 1.1, step 3.1, step 4.1, F1, F2]

6.1 Every point of $\overline X^{\,R}$ belongs to $X$, by the cofinite case of step 2.1 or the finite case of step 5.1. Therefore $X$ is closed in $R$. QED. [step 2.1, step 5.1]
