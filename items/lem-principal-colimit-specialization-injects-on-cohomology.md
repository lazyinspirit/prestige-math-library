---
id: lem-principal-colimit-specialization-injects-on-cohomology
kind: lemma
title: Cohomology injection for a principal-colimit specialization
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Bhatt–Morrow–Scholze, Integral p-adic Hodge Theory, Lemma 4.16, printed p.38; abstraction of its argument"
      url: https://arxiv.org/pdf/1602.03148v3.pdf
---

## Statement

Let $A$ be a commutative ring, $p$ a prime integer, and $(x_n)_{n\geq0}$ a sequence of non-zero-divisors in $A$ with $x_{n+1}^p=x_n$. Put $J=\bigcup_{n\geq0}(x_n)$ and $F=A/J$. Suppose a surjection of $A$-algebras $F\to S$ has kernel $Q$ on which multiplication by $p$ is bijective. Let $P^\bullet$ be a bounded cochain complex of finite free $A$-modules, and suppose $H^j(P^\bullet)[1/p]$ is projective over $A[1/p]$ for every $j$.

For every integer $i$, the canonical cycle map
$$H^i(P^\bullet)\otimes_A S\longrightarrow H^i(P^\bullet\otimes_A S)$$
is injective and becomes an isomorphism after inverting $p$. If multiplication by $x_0$ on $H^{i+1}(P^\bullet)$ is injective, the cycle map is already an isomorphism. Since $P^\bullet$ is bounded and free, its tensor products in this statement compute derived tensor products.

## Facts & Assumptions

**Given:** All rings, elements, maps, and the complex in the Statement; in particular the surjection and the $p$-invertibility of its kernel are hypotheses, not automatic properties of completion.

## Proof

1.1 For $A_n=A/(x_n)$, termwise multiplication gives a short exact sequence of complexes $0\to P^\bullet\xrightarrow{x_n}P^\bullet\to P^\bullet\otimes_A A_n\to0$. Its cycle-and-boundary long exact sequence gives $0\to H^i(P^\bullet)/x_n\to H^i(P^\bullet\otimes_A A_n)\to H^{i+1}(P^\bullet)[x_n]\to0$, where $N[x_n]=\ker(x_n:N\to N)$. Taking filtered colimits preserves exactness: any equality or vanishing of an element in a filtered colimit holds at some later stage, which proves the kernel and image assertions directly. Tensor products and cohomology of a complex of modules also commute with these colimits by the same element criterion. Thus $b:H^i(P^\bullet)\otimes_A F\to H^i(P^\bullet\otimes_A F)$ is injective. If $H^{i+1}(P^\bullet)[x_0]=0$, then $H^{i+1}(P^\bullet)[x_n]=0$ for every $n$, since $x_n^{p^n}=x_0$; in that case $b$ is an isomorphism. [given, algebra]

1.2 Write $B=A[1/p]$. The bounded complex $P^\bullet[1/p]$ splits into its cohomology and contractible summands over $B$. To see this, start in the highest nonzero degree $t$: the surjection $P^t[1/p]\to H^t(P^\bullet)[1/p]$ splits by projectivity. Its kernel is projective, being a direct summand of $P^t[1/p]$; hence the surjection from degree $t-1$ onto that kernel also splits. Remove the resulting contractible two-term summand and the cohomology summand in degree $t$, and repeat in the finitely many lower degrees. Consequently for every $B$-module $E$ the cycle map $H^j(P^\bullet)[1/p]\otimes_B E\to H^j(P^\bullet[1/p]\otimes_B E)$ is an isomorphism. This argument involves only finitely many splittings. It applies both to $E=Q$ and to $E=S[1/p]$. In particular the cycle map for $Q$ is an isomorphism, and the cycle map for $S$ is an isomorphism after inverting $p$. [given, algebra]

2.1 Tensor $0\to Q\to F\to S\to0$ with the free terms of $P^\bullet$. This gives a short exact sequence of complexes. In its long exact cohomology sequence the connecting map $H^i(P^\bullet\otimes_A S)\to H^{i+1}(P^\bullet\otimes_A Q)$ is zero. Indeed, after inverting $p$, step 1.2 identifies it with the connecting map for tensoring a complex split into projective cohomology modules, so it is zero there. Its target already has invertible $p$, because each term of $P^\bullet\otimes_A Q$ does. A map into such a module which vanishes after localization is zero before localization as well. Therefore $H^i(P^\bullet\otimes_A F)\to H^i(P^\bullet\otimes_A S)$ is surjective. [given, step 1.2, algebra]

3.1 To check injectivity of the cycle map for $S$, lift an element of its kernel to $z\in H^i(P^\bullet)\otimes_A F$, using right exactness of tensor. The image $b(z)$ maps to zero in $H^i(P^\bullet\otimes_A S)$, so exactness supplies an element of $H^i(P^\bullet\otimes_A Q)$ mapping to $b(z)$. By step 1.2 it comes from $H^i(P^\bullet)\otimes_A Q$. Subtract its image from $z$. The difference maps to zero under the injective $b$ of step 1.1, so is zero. Hence the original element of $H^i(P^\bullet)\otimes_A S$ is zero. If $H^{i+1}(P^\bullet)[x_0]=0$, then $b$ is also surjective; composing it with the surjection of step 2.1 proves surjectivity of the cycle map for $S$. Step 1.2 gives the rational assertion in all cases. [step 1.1, step 1.2, step 2.1, algebra] ∎
