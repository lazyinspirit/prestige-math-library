---
id: lem-profinite-quotient-isomorphisms-force-divisible-kernel
kind: lemma
title: Profinite exponent quotients force kernel divisibility
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-compact-space
  - def-profinite-group-by-inverse-limit
proof_strategy: direct
axiom_use: AC is explicit for the stated compactness and profinite conventions.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Arithmetic Duality Theorems, second edition
      url: https://www.jmilne.org/math/Books/ADTnot.pdf
      locator: I Lemma 4.5 and Theorem 4.6(a), printed pp.51–53. The compact exponent-quotient kernel argument is supplied below.
verification: {}
---

## Statement

Assume AC. Let $A=K\times D$ be an abelian topological group with compact Hausdorff subgroup $K$, let $P$ be a profinite abelian group, and let $f:A\to P$ be a continuous homomorphism. Fix $n\ge1$ and assume that for every $j\ge1$ the induced homomorphism
$$A/n^jA\xrightarrow{\sim}P/n^jP$$
is an isomorphism of groups. Assume either that $D$ is divisible, or that $D$ is torsion-free and $\ker f\subseteq K\times\{0\}$. Then multiplication by $n$ on $\ker f$ is surjective. In the divisible-$D$ branch, the induced map $A[n]\to P[n]$ is also surjective. The statement does not assert surjectivity of $f$ or identify its entire cokernel.

## Facts & Assumptions

**Given:** The compact factor, profinite group, homomorphism, exponent-quotient isomorphisms and one of the two stated hypotheses on $D$.

[A1] AC is assumed. [[def-axiom-of-choice]]

[F1] Compactness gives the finite-intersection property for closed subsets. [[def-compact-space]]

[F2] A profinite group is an inverse limit of finite discrete groups, so its finite quotient maps separate points. [[def-profinite-group-by-inverse-limit]]

## Proof

**Proof technique:** solve successively higher divisibility congruences inside one compact factor and pass to the intersection.

1.1 If $D$ is divisible, then $f(D)=0$: in any finite quotient of $P$, every element of $f(D)$ is divisible by the quotient order and therefore zero; finite quotients separate points by [F2]. In the second branch, the displayed hypothesis already puts every kernel element in the compact factor. [F2, given, algebra]

2.1 Fix $c=(c_K,c_D)\in\ker f$. For each $j\ge1$, the quotient isomorphism in the Statement makes $c$ zero in $A/n^{j+1}A$, so choose $z_j$ with $n^{j+1}z_j=c$ and set $y_j=n^jz_j$. Then $ny_j=c$ and $f(y_j)\in n^jP$. In the divisible branch choose once a root $d\in D$ with $nd=c_D$; by step 1.1, replacing the $D$-coordinate of each $y_j$ by $d$ does not change its image under $f$. In the torsion-free branch, $c_D=0$ and $ny_j=c$ forces the $D$-coordinate of every $y_j$ to be zero. In either branch the set of admissible $K$-coordinates lies in the compact group $K$. [A1, step 1.1, given, choose, construct, algebra]

3.1 For each $j$, the subset of $K$ consisting of admissible coordinates with $ny=c$ and $f(y)\in n^jP$ is closed and nonempty: $n^jP$ is compact, hence closed in the Hausdorff group $P$, and step 2.1 supplies a point. These subsets are nested, so [F1] gives a point in their intersection. For its corresponding $y$, we have $ny=c$ and $f(y)\in\bigcap_j n^jP$. Also $nf(y)=0$. In every finite quotient $B$ of $P$, the stable subgroup $\bigcap_j n^jB$ has order prime to $n$, so it has no nonzero element killed by $n$. Thus every finite quotient kills $f(y)$, and [F2] gives $f(y)=0$. Therefore $y\in\ker f$ and $ny=c$. [F1, F2, step 2.1, algebra]

4.1 In the divisible-$D$ branch, step 1.1 gives $f(A)=f(K)$, which is compact and closed. Its quotient $P/f(K)$ is profinite: for a point outside the compact subgroup, finitely many finite-quotient neighborhoods separate it from the subgroup, so finite quotients separate the cosets. The displayed quotient isomorphism for $j=1$ makes multiplication by $n$ surjective on $P/f(K)$; every finite quotient is therefore a finite group of order prime to $n$, so $P/f(K)$ has no nonzero $n$-torsion. Any $x\in P[n]$ consequently has a preimage $a\in A$. Then $na\in\ker f$, which is $n$-divisible by step 3.1. Choose $b\in\ker f$ with $nb=na$; the element $a-b\in A[n]$ maps to $x$. The cases $n=1$ and zero kernels are included. [F2, step 1.1, step 3.1, choose, algebra] ∎
