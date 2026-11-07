---
id: lem-choice-free-ball-nest-completion-of-a-nonarchimedean-field
kind: lemma
title: Choice-free ball-nest completion of a nonarchimedean field
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-multiplicative-absolute-value-on-a-field
  - def-filter
  - def-cauchy-filter-in-a-uniform-space
  - def-adic-completion-of-a-module
  - def-complete-metric-space
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Brian Conrad, Ostrowski for number fields"
      url: "https://math.stanford.edu/~conrad/676Page/handouts/ostrowski.pdf"
      locator: "Section5, Theorem5.3; nonarchimedean completion and unchanged value group, reconstructed here by compatible ball partitions instead of sequence classes"
verification: {}
---

## Statement

Let $F$ be any nonarchimedean absolutely valued field. For $n\ge0$ put $r_n=2^{-n}$, and let $\mathcal B_n$ be the set of its nonempty open balls of radius $r_n$. Define
$$F^{\mathrm{ball}}=\{(U_n)_{n\ge0}:U_n\in\mathcal B_n,\ U_{n+1}\subseteq U_n\}.$$
There is a canonical complete nonarchimedean valued-field structure on this set, with a dense isometric embedding $a\mapsto(\{b:|b-a|<r_n\})_n$ of $F$. Every Cauchy filter on $F^{\mathrm{ball}}$ converges. Its value group and residue field equal those of $F$.

Write $A$ for its valuation ring. For every $\pi\in F^{\mathrm{ball}}$ with $0<|\pi|<1$, the canonical map
$$A\longrightarrow\varprojlim_{m\ge1}A/\pi^mA$$
is an isomorphism. These assertions require no Choice axiom, in any characteristic and including the trivial absolute value. They assert neither identification with the Cauchy-sequence-class construction without Choice nor a universal property for targets assumed only sequentially complete.

## Facts & Assumptions

**Given:** The field and its specified nonarchimedean multiplicative absolute value. An element of the new set is the actual sequence of balls, not a choice of one point in each ball.

[F1] The absolute value is positive definite and multiplicative, with the strong triangle inequality. [[def-multiplicative-absolute-value-on-a-field]]

[F2] A filter is proper, closed under finite intersections, and upward closed. [[def-filter]]

[F3] A Cauchy filter contains a set small for each metric entourage, equivalently here a set whose pairwise distances are less than any prescribed positive radius. [[def-cauchy-filter-in-a-uniform-space]]

[F4] The adic completion is the inverse limit of the residue modules under their canonical quotient maps. [[def-adic-completion-of-a-module]]

[F5] A metric space is complete when every Cauchy sequence converges. [[def-complete-metric-space]]

## Proof

1.1 Two open balls in $F$ of the same radius are identical or disjoint: if they meet, the strong triangle inequality shows that each lies in the other. A ball of smaller radius meeting a ball of larger radius lies in the latter. Put $X=F^{\mathrm{ball}}$. It is a set of sequences of subsets of $F$; constant-center nests show it is nonempty. If $x=(U_n)$ and $y=(V_n)$ differ, choose any index $n$ with $U_n\ne V_n$ and points $a\in U_n,b\in V_n$. Then $|a-b|\ge r_n$, and this absolute value is unchanged if either point is replaced within its ball. It is also unchanged upon passing to any finer separating level. Define $d(x,y)$ to be this uniquely determined value, and $d(x,x)=0$. For any finite triple of nests, choose one common level finer than a separating level for each distinct pair, and one point in each of the three balls. The three nonzero distances are the corresponding distances in $F$, so [F1] proves the strong triangle inequality. Thus $d$ is an ultrametric. [F1, given, construct, algebra]

2.1 The constant-center embedding $i:F\to X$ is isometric. Directly from step 1.1 one has $d(x,y)<r_n$ if and only if $U_n=V_n$. In particular, choosing one $a\in U_n$ gives $d(i(a),x)<r_n$, proving density. If $x\ne i(0)$, then at any separating level every $a\in U_n$ has the same absolute value $d(x,i(0))$, so this value belongs to $|F^\times|$. Define $|x|=d(x,i(0))$. For all $a\in U_n$ one has $|a|\le\max(1,|x|)$, because $d(i(a),x)<r_n\le1$. No simultaneous representatives of the balls are selected. [F1, step 1.1, construct, algebra]

3.1 Define the $n$th ball of $x+y$ by choosing $a\in U_n,b\in V_n$ and taking the radius-$r_n$ ball of center $a+b$ in $F$. Changing either representative changes the sum by less than $r_n$, so the resulting ball is unique and these balls form a nest. Negation is defined in the same way. To multiply $x,y$, put $M=\max(1,|x|,|y|)$; for a desired output level $n$ choose any $k\ge n$ with $r_kM<r_n$, choose $a\in U_k,b\in V_k$, and take the radius-$r_n$ ball of center $ab$. For any two allowed representatives, $|ab-a'b'|\le\max(|a|\,|b-b'|,|b'|\,|a-a'|)<Mr_k<r_n$. Outputs from different allowed levels agree by comparing at a common finer level. Thus the output ball is unique, and the output balls are nested. These operations extend the operations of $F$. [F1, step 1.1, step 2.1, construct, algebra]

3.2 Let $\mathcal F$ be a Cauchy filter on $X$. For each $n$, [F3] gives a nonempty member of pairwise distances less than $r_n$. It lies in a radius-$r_n$ metric ball, so by upward closure this ball belongs to $\mathcal F$. There is exactly one such ball: two distinct balls of this radius are disjoint, contradicting properness and finite-intersection closure in [F2]. By step 2.1, a radius-$r_n$ metric ball in $X$ consists precisely of the nests with one specified $n$th ball $U_n\in\mathcal B_n$. Consequently $\mathcal F$ determines $U_n$ uniquely, without selecting any point in its members. The filter's radius-$r_n$ and radius-$r_{n+1}$ balls intersect, so $U_{n+1}\subseteq U_n$. Thus $x=(U_n)$ is in $X$, and every radius-$r_n$ neighborhood of $x$ belongs to $\mathcal F$. This proves convergence of the filter. A Cauchy sequence has a proper Cauchy filter of tails, so [F5] gives sequential completeness too. [F2, F3, F5, step 1.1, step 2.1, construct, algebra]

4.1 The ring identities follow at every prescribed output level by finite approximation. Explicitly, for finitely many inputs bounded in absolute value by $M\ge1$, replacing a representative by another within $r_k$ changes a monomial of degree $j\ge1$ by at most $M^{j-1}r_k$, by the telescoping product identity. It changes any fixed integer polynomial by at most the maximum of these finitely many bounds, since integer coefficients have absolute value at most $1$. Choose one $k$ making these bounds less than the desired $r_n$, also for the finitely many intermediate products in the identity. Its two output balls then agree because the identity holds for representatives in $F$. This verifies associativity, commutativity, distributivity, the additive inverses and the identities $0,1$. The same finite estimates give continuity. They also show $d(x,y)=|x-y|$: for distinct $x,y$, use representatives at a separating level, where $|a-b|=d(x,y)$, and compute the output difference with error smaller than this nonzero value. Likewise $|xy|=|x||y|$: for nonzero $x,y$, use representatives at a level with $r_k<\min(|x|,|y|)$, so $|a|=|x|,|b|=|y|$, and make the output error smaller than $|a b|$. The zero case is direct. The inequality $|x+y|\le\max(|x|,|y|)$ follows from the same addition estimates and [F1]. [F1, step 1.1, step 2.1, step 3.1, algebra]

5.1 If $x\ne0$, put $c=|x|>0$. For each output level $n$, choose any $k$ with $r_k<c$ and $r_k/c^2<r_n$. Every $a\in U_k$ has $|a|=c$. The identity $|a^{-1}-(a')^{-1}|=|a-a'|/c^2$ shows that the radius-$r_n$ ball centered at $a^{-1}$ is independent of the finite representative and of sufficiently fine $k$. These uniquely determined balls form a nest $y$. Approximating at one sufficiently fine level proves $xy=1$ by step 4.1's estimate. Thus $X$ is a field and its absolute value is multiplicative; density and the original isometry were proved in step 2.1. For a trivial value every ball is a singleton, so this construction simply returns $F$. [F1, step 2.1, step 3.1, step 4.1, construct, algebra]

6.1 Step 2.1 and multiplicativity show that the value group is unchanged. For any $x$ in the valuation ring of $X$, choose one $a\in F$ with $d(x,i(a))<1$. Then $|a|\le1$, and $x$ and $i(a)$ have the same residue. The kernel of the residue map on the original valuation ring is exactly its original maximal ideal, because the embedding preserves absolute values. This proves the residue-field identification using only one approximation at a time. [F1, step 2.1, step 4.1, step 5.1, algebra]

7.1 Finally let $0<|\pi|<1$ and take any compatible element of the inverse limit in [F4]. Its residue classes are actual nonempty nested subsets $E_m$ of $A$, each a coset of $\pi^mA$. They have pairwise distances at most $|\pi|^m$, so the filter of their supersets in $X$ is a proper Cauchy filter. Step 3.2 gives a unique limit $a\in X$. Each $E_m$ is closed: $\pi^mA$ is the closed ball of radius $|\pi|^m$ around zero, and its cosets are closed balls. Because $E_m$ belongs to the convergent filter, its limit lies in $E_m$; otherwise its open complement would give an empty filter intersection. In particular $a\in A$, and $a$ represents every prescribed residue. Conversely an element in all $\pi^mA$ has absolute value at most every $|\pi|^m$, hence is zero. Therefore the canonical map is both surjective and injective, and is a ring isomorphism since its component residue maps are ring homomorphisms. All infinite data here consist of uniquely specified balls or the already GIVEN compatible residue classes; no countable representatives are selected. [F1, F2, F3, F4, step 3.2, algebra] ∎

## Source notes

Conrad §5 Theorem5.3 supplies the classical nonarchimedean field-completion mechanism; its proof uses the metric sequence completion. That exact passage was read. The proof here instead constructs a completion by compatible ball partitions and proves Cauchy-filter completeness directly. Its point is to avoid choosing one representative in every ball or every residue class. The finite-representative arguments prove each output ball unique before taking the sequence of balls.

The distinction between this construction and the ordinary sequence-class construction is retained. Without a further argument, no equality with that construction, no universal property for merely sequentially complete targets, and no uniqueness among all sequentially complete dense extensions is inferred. The result supplies an actual choice-free complete valued-field extension with a stronger, proved completeness property. Using it to fix a completion convention in an existing period-ring construction is a separate owner integration decision, not an automatic deletion of an old completion hypothesis. No Frobenius-compatible root lifting or surjectivity of a Fontaine map is claimed here.
