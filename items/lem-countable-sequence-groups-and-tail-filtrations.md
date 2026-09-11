---
id: lem-countable-sequence-groups-and-tail-filtrations
kind: lemma
title: Countable sequence groups and tail filtrations
status: draft
origin: pipeline
pipeline_run: phase-2-next-20
deps: [lem-abelian-group-model-for-spectral-sequence-computations, def-products-and-coproducts, def-limit-and-colimit-of-a-diagram, thm-division-algorithm-in-z]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Weibel, Chapter 5, completion examples; explicit binary model supplied locally"
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
---

## Statement

Let $k=\mathbb Z/2$, $P=k^{\mathbb N}$, and let $S\subseteq P$ consist of
the sequences with finite support, with $\mathbb N=\{0,1,\ldots\}$.
Coordinate addition makes $P$ the product and $S$ the coproduct of countably
many copies of $k$ in abelian groups. The inclusion $S\to P$ is injective
but not surjective; $S$ is countably infinite and $P$ is uncountable.

For $A=S$ or $P$, put $T_mA=\{x\in A:x_j=0\text{ for }j<m\}$, $m\ge0$.
Then $\bigcap_mT_mA=0$ and $A/T_mA\cong k^m$, compatibly with truncation.
Define its tail completion to be $\widehat A=\lim_m A/T_mA$ with these
truncation maps. Both completions identify with $P$. Under these
identifications $S\to\widehat S$ is the displayed proper inclusion, while
$P\to\widehat P$ is the identity. Thus $P$ is complete and both filtrations
are separated. These assertions require no AC.

## Facts & Assumptions

[F1] [[lem-abelian-group-model-for-spectral-sequence-computations]] supplies abelian groups as an abelian category, coset quotients, and $k=\mathbb Z/2$ with residues $0,1$ and $1+1=0$.

[F2] [[def-products-and-coproducts]] characterizes products by coordinate maps and coproducts by maps from their summands.

[F3] [[def-limit-and-colimit-of-a-diagram]] characterizes a limit by unique factorization of compatible cones.

[F4] [[thm-division-algorithm-in-z]] gives unique division by $2$ with remainder $0$ or $1$.

## Proof

**Given:** $k,P,S,T_mA$ as in the statement. Residues $0,1$ are identified with those digits when used in integer expressions.

1.1 The abelian group identities for coordinate addition on $P$ hold at each index by the identities in $k$. The zero sequence has empty support; negatives preserve support and the support of a sum is contained in the union of the two supports, so $S$ is a subgroup. For maps $f_j:G\to k$, the unique map $G\to P$ is $g\mapsto(f_j(g))_j$. For maps $g_j:k\to G$, define $S\to G$ by $x\mapsto\sum_{j\in\operatorname{supp}(x)}g_j(x_j)$. This sum is finite; extending the summation set by zero terms proves additivity, and the identity $x=\sum_j\iota_j(x_j)$ proves uniqueness. These are precisely the product and coproduct properties. [F1, F2, given]

1.2 The inclusion is injective. The constant-one sequence belongs to $P$ but has infinite support, so does not belong to $S$. Each unit sequence belongs to $S$, and different indices give different unit sequences. [F1, given]

2.1 Encode $x\in S$ by $b(x)=\sum_j2^jx_j\in\mathbb N$. If $x\ne y$, their finite union of supports has a largest differing index $r$. The magnitude of the contribution there is $2^r$, while the sum of the magnitudes at lower indices is at most $\sum_{j<r}2^j=2^r-1$; the latter identity follows by starting with $0=1-1$ and adding $2^r$ at the next index. Hence $b(x)\ne b(y)$. Conversely, successive unique divisions of any nonnegative integer by $2$ give its binary digits; the nonzero quotients strictly decrease, so after finitely many divisions the quotient is zero. Substituting the equations $a_j=2a_{j+1}+r_j$ back gives $a_0=\sum_j2^jr_j$. Thus $b$ is a bijection $S\to\mathbb N$. [F4, step 1.2, algebra]

2.2 The first-$m$-coordinates map $A\to k^m$ is onto by extension by zero, for either $A=S$ or $P$, and has kernel $T_mA$. It therefore induces a bijective homomorphism $A/T_mA\to k^m$: equality of images means the difference lies in $T_mA$, and every tuple is represented by its zero extension. For $m=0$ the quotient and empty tuple group are zero. If $x\in\bigcap_mT_mA$, take $m=j+1$ to conclude $x_j=0$ at each index, so $x=0$. [F1, step 1.1, given]

3.1 For any map $e:\mathbb N\to P$, the sequence $y_j=1-e(j)_j$ lies in $P$ and differs from $e(j)$ at coordinate $j$. Thus $e$ is not onto. If an injection $P\to\mathbb N$ existed, inversion on its image and the zero sequence as value off that image would define a surjection $\mathbb N\to P$, which has just been excluded. Hence $P$ is uncountable and cannot be bijective with $S$. [F1, step 2.1, given]

3.2 Let $L$ be the subgroup of $\prod_{m\ge0}k^m$ consisting of tuples $(z^{(m)})_m$ for which truncating $z^{(m+1)}$ gives $z^{(m)}$. For any compatible cone of homomorphisms into $k^m$, the map sending an element to its tuple of cone images is the unique homomorphism into $L$ inducing that cone. Thus $L$ is the inverse limit. The homomorphism $P\to L$ sends a sequence to its initial segments. Its inverse sends a compatible tuple to $x_j=z^{(j+1)}_j$; compatibility proves that all its first-$m$ coordinates equal $z^{(m)}$. These formulas are mutually inverse and select no representatives. [F1, F3, step 2.2]

4.1 The quotient identifications in step 2.2 commute with truncation, so they identify both $\widehat S$ and $\widehat P$ with $L\cong P$. The completion map sends $x$ to its initial segments, hence becomes the original inclusion for $S$ and the identity for $P$. Step 2.2 proves separatedness for both, and step 1.2 proves the first inclusion is proper. All constructions use explicit coordinates, finite sums, or uniquely specified digits; AC has not been used. [step 1.2, step 2.2, step 3.2] ∎
