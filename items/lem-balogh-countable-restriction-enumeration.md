---
id: lem-balogh-countable-restriction-enumeration
kind: lemma
title: Balogh countable restriction enumeration
status: draft
origin: pipeline
deps: [def-balogh-finite-restriction-data, def-axiom-of-choice, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Hart, Set-Theoretic Methods in General Topology, Chapter 5 section 2, restriction enumeration and Exercise 16, printed p. 33; counting, support bounds and thinning proved here"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/old-courses/settop.pdf
---

## Statement

Assume AC, and use the realizable data $T$ from the preceding definition, with $\kappa=2^{\aleph_0}$. The set $\mathcal R$ of these tuples has cardinality at most $\kappa$. There is an injective labeling by $P\subseteq\kappa$, written $(T_\beta)_{\beta\in P}$, covering $\mathcal R$ and satisfying $A_\beta\subseteq\beta$.

For each tuple $T$, there are $J_T\subseteq A$ and $u_T:J_T\to[{}^A2]^{<\omega}$ with pairwise disjoint values such that every $t=(n,E,e)\in I_T$ has infinitely many $\gamma\in J_T\cap K_T(t)$ satisfying $u_T(\gamma)=q(\gamma)\setminus E$. Every value of $u_T$ is disjoint from $B$. If $I_T=\varnothing$, take $J_T=\varnothing$.

## Facts & Assumptions

**Given:** The realizable tuples and the fixed eligible infinite root families.

[F1] Each tuple has countable supports $a\subseteq A\subseteq\kappa$, countable $B\subseteq{}^A2$ and countable-domain maps of the stated types. Its eligible root triples are countable, and the chosen families have the prescribed constant intersections ([[def-balogh-finite-restriction-data]]).

[F2] Cardinal comparison follows from injections; exponentiation counts function sets ([[lem-cardinal-arithmetic-basic-laws]]).

[F3] Nonzero finite products of infinite-cardinal-bounded sets and unions indexed by at most that cardinal retain that bound ([[cor-cardinal-absorption]]).

[F4] Set-valued specified rules admit transfinite recursion ([[thm-transfinite-recursion]]).

[A1] AC is assumed for enumerations, well-orders, witness selections and cardinal comparisons ([[def-axiom-of-choice]]).

## Proof

1.1 A sequence of binary functions on $\omega$ is equivalent, by evaluation, to a binary function on $\omega\times\omega$. The map $(i,j)\mapsto 2^i(2j+1)-1$ is a bijection onto $\omega$: each positive integer has a unique power of two dividing it and a unique odd quotient. Thus $\kappa^{\aleph_0}=\kappa$ by this coding and F2. A nonempty countable subset of $\kappa$ is the range of a sequence, so A1 selects enumerations and bounds the number of such subsets by $\kappa$; including the empty subset leaves the same bound by F3. For fixed countable $A$, each binary function on $A$ is coded by a binary sequence, so there are at most $\kappa$ of them. Countable subsets $B$ therefore have at most $\kappa^{\aleph_0}=\kappa$ possibilities. The subset $a\subseteq A$ and each of the maps $p,q,r$ have at most $\kappa$ possibilities: finite trace subsets have at most $\kappa$ possibilities by F3, and a sequence of these is again bounded by $\kappa^{\aleph_0}$. F3 bounds the finite tuple product by $\kappa$. Realizability only restricts the set of typed tuples; it adds no new coordinate, so $|\mathcal R|\le\kappa$. [F1, F2, F3, A1]

1.2 Every countable subset of $\kappa$ is bounded in $\kappa$. To prove this without assuming regularity of the continuum, suppose $\kappa$ were the union of countably many sets of size below $\kappa$. Transfer them along a bijection with ${}^\omega2$ to sets $Z_n$. Partition $\omega$ into the infinite sets $D_n=\{2^n(2j+1)-1:j<\omega\}$. The restrictions to $D_n$ of members of $Z_n$ number less than $\kappa$, whereas $|{}^{D_n}2|=\kappa$ by the explicit enumeration of $D_n$. Choose $b_n\in{}^{D_n}2$ outside that restriction family using A1. Their union $b$ is a binary function on $\omega$ outside every $Z_n$, a contradiction. If a countable subset of the initial ordinal $\kappa$ were unbounded, its initial segments, each of cardinality below $\kappa$, would express $\kappa$ as just such a countable union. This proves the asserted boundedness. [F2, A1]

1.3 Fix $T$. If $I_T$ is empty, the empty $J_T$ and empty function work. Otherwise enumerate its countable set of triples so each appears infinitely often, by listing longer and longer finite initial portions of an enumeration, with repetition in the finite nonempty case. At each finite stage consider the scheduled $t=(n,E,e)$. The sets $q(\gamma)\setminus E$ for distinct $\gamma\in K_T(t)$ are pairwise disjoint, by F1. Only finitely many trace functions and finitely many points have been used at earlier stages. Each used trace can belong to at most one of these petals, so only finitely many candidates are forbidden. The infinite $K_T(t)$ has a fresh remaining point whose petal misses all previous petals. Choose it and assign that petal as its $u_T$ value. A1 fixes choices and F4 performs the recursion. The different $H_T(t)$ are disjoint, since $p(\gamma)$, $q(\gamma)\cap B$ and its evaluation determine $t$; therefore no incompatible triple assignment arises. The selected points form $J_T$. Each triple's infinitely many scheduled stages give infinitely many distinct witnesses; every petal misses $B$ because its root is exactly $q(\gamma)\cap B$. An empty petal is allowed and excludes no later candidate. [F1, F4, A1]

2.1 By step 1.1 and A1 enumerate $\mathcal R$ without repetition with order type $\tau\le\kappa$. At stage $\xi<\tau$, its support $A$ is bounded by step 1.2. The tail above $A$ has cardinality $\kappa$: otherwise that tail and an initial segment of size below $\kappa$ would have union of size below $\kappa$ by F3, contrary to their union being $\kappa$. Fewer than $\kappa$ labels have been used at stage $\xi$, so some label $\beta$ above every member of $A$ is unused. Assign the least such $\beta$. F4 gives this recursion, and its range $P$ supplies an injective labeling with $A_\beta\subseteq\beta$. No monotonicity of the labels is claimed. [step 1.1, step 1.2, F3, F4, A1]

3.1 Step 2.1 gives the labeled enumeration, and step 1.3 gives its thinning data for each tuple. A1 selects those data simultaneously from the nonempty witness sets just proved, after the tuple counting, so their choices do not change the counting argument. These are all the asserted conclusions. QED. [step 2.1, step 1.3, A1]
