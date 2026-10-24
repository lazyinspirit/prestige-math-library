---
id: lem-cofinal-aleph-product-cardinality
kind: lemma
title: A cofinal aleph-subproduct has the cardinality of the aleph-omega product
status: published
origin: pipeline
deps: [lem-cardinal-arithmetic-basic-laws, def-aleph-and-beth-hierarchies, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "K. P. Hart, Set-Theoretic Methods in General Topology, Chapter 6 opening, printed p. 35, Rudin cardinality context; explicit coding proof supplied here"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/old-courses/settop/settop.pdf
---

## Statement

Assume AC. If $B$ is an infinite subset of $\omega\setminus\{0,1\}$, then

$$\left|\prod_{n\in B}\aleph_n\right|=\aleph_\omega^{\aleph_0},$$

where the factors are the sets of ordinals strictly below $\aleph_n$, and the power is cardinal exponentiation.

## Facts & Assumptions

**Given:** Such an infinite $B$. Write $Q=\prod_{n\in B}\aleph_n$ and $\lambda=\aleph_\omega$.

[F1] Injections give inequalities between the cardinalities of well-orderable sets, and cardinal powers count the corresponding function sets in the AC setting ([[lem-cardinal-arithmetic-basic-laws]]).

[F2] The alephs are strictly increasing infinite cardinals, $\aleph_0=\omega$, and $\aleph_\omega=\bigcup_{m<\omega}\aleph_m$ ([[def-aleph-and-beth-hierarchies]]).

[A1] AC is assumed, so the function sets have cardinalities to which cardinal comparison applies ([[def-axiom-of-choice]]).

## Proof

1.1 Enumerate $B$ increasingly as $(e(r))_{r<\omega}$. Explicitly, choose its least element first and at each stage its least unused element; a next element exists since otherwise $B$ would be finite. This enumeration covers $B$, since any fixed natural number has only finitely many smaller natural numbers and cannot remain unchosen forever. The map $q\mapsto(r\mapsto q(e(r)))$ injects $Q$ into $\lambda^\omega$: every value is below $\aleph_{e(r)}<\lambda$ by F2, and agreement on all enumerated coordinates means agreement on $B$. Thus F1 and A1 give $|Q|\le\lambda^{\aleph_0}$. [F1, F2, A1]

2.1 Partition the coordinate set by putting $B_i=\{e(2^i(2j+1)-1):j<\omega\}$ for $i<\omega$. Each positive integer has a unique expression $2^i(2j+1)$: repeatedly divide by two until the quotient is odd; this terminates by strict decrease of positive integers, and uniqueness follows by cancelling the smaller power of two, since an odd integer cannot equal an even integer. Hence the $B_i$ are pairwise disjoint and cover $B$. Each is infinite, so as a subset of the natural numbers it is unbounded. Its increasing enumeration is $b_i(j)=e(2^i(2j+1)-1)$. Because all members of $B$ are at least two, any increasing sequence from $B$ satisfies $b_i(j)\ge j+2$, by induction on $j$. [step 1.1]

3.1 For $f\in\lambda^\omega$ and each $i$, let $m_i$ be the least natural number such that $f(i)<\aleph_{m_i}$; it exists by F2. Define $T(f)\in Q$ by giving it the single nonzero value $f(i)+1$ at coordinate $b_i(m_i+1)$ of $B_i$, and zero at every other coordinate of $B_i$. This is a well-defined function because the $B_i$ partition $B$ by step 2.1. Its assigned value is strictly below the required factor: the ordinal successor of an ordinal below the infinite cardinal $\aleph_{m_i}$ is still below that cardinal, which is a limit ordinal; moreover $b_i(m_i+1)\ge m_i+3>m_i$ and F2 gives $\aleph_{m_i}<\aleph_{b_i(m_i+1)}$. All other values are zero, also below their factors. In particular $f(i)=0$ produces the nonzero tag $1$ and is not confused with an unused coordinate. [step 2.1, F2]

4.1 From $T(f)$ restricted to $B_i$ recover its unique nonzero coordinate and its value $f(i)+1$. An ordinal successor has its original ordinal as unique greatest member, so this value recovers $f(i)$. Hence $T(f)=T(g)$ implies $f(i)=g(i)$ for every $i$, proving that $T$ is injective. F1 and A1 give $\lambda^{\aleph_0}\le|Q|$, and the reverse inequality is step 1.1. Antisymmetry of cardinal comparison yields the asserted equality. QED. [step 1.1, step 3.1, F1, A1]
