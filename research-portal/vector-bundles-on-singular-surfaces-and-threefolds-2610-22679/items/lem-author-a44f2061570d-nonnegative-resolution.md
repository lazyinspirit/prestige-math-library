---
id: lem-author-a44f2061570d-nonnegative-resolution
kind: lemma
title: Negative cohomology of a nonnegative evaluated complex
status: published
domain: mathematics
deps:
  - def-author-cf6ede58b450-site-plus-data
  - lem-author-a44f2061570d-evaluation-homotopy
  - math:def-kernel-and-image-of-group-homomorphism
  - math:def-quotient-group
dependency_roles:
  def-author-cf6ede58b450-site-plus-data: mathematical-premise
  lem-author-a44f2061570d-evaluation-homotopy: mathematical-premise
  math:def-kernel-and-image-of-group-homomorphism: mathematical-premise
  math:def-quotient-group: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 9
---

## Statement
Let $I^\bullet$ be a cochain complex of abelian sheaves on a small site with $I^n=0$ for $n<0$. For every object $U$ and every $n<0$, the cohomology group $H^n(I^\bullet(U))$ is zero. Here $H^n$ is the kernel of the degree-$n$ differential modulo the image of the preceding differential.

Use the relative-smallness conventions for sites and presheaf values specified in Facts & Assumptions. An abelian sheaf is a contravariant functor from the site to abelian groups whose underlying set-valued presheaf is a sheaf; its morphisms are natural transformations with group-homomorphism components. A cochain complex has differentials $d^n:I^n\to I^{n+1}$ with $d^{n+1}d^n=0$, and evaluation at $U$ is taken degree by degree. The zero sheaf $0$ assigns the one-element abelian group $\{0\}$ to every object and the unique homomorphism to every arrow. Thus $I^n=0$ means the zero sheaf in that degree. A zero cohomology group means a one-element group.

## Statement references
[[def-author-cf6ede58b450-site-plus-data]]

[[lem-author-a44f2061570d-evaluation-homotopy]]

[[math:def-kernel-and-image-of-group-homomorphism]]

[[math:def-quotient-group]]

## Facts & Assumptions

**Given:** A site object $U$ and a complex $I^\bullet$ vanishing in negative degrees.

**Goal:** Prove the negative-degree cohomology vanishes after evaluation.

[F0] Small sites, covering sieves, matching families and the sheaf condition, with the relative-smallness conventions for sites and presheaf values, are as defined in [[def-author-cf6ede58b450-site-plus-data]]. The site object $U$ is distinct from the universe letters in those conventions.

[F1] Abelian sheaves, their morphisms and cochain complexes have the meanings in [[lem-author-a44f2061570d-evaluation-homotopy]]. Evaluation sends complexes of abelian sheaves to complexes of abelian groups, taking a differential to its component at $U$.

[F2] The presheaf assigning $\{0\}$ to every object is a sheaf: on each covering sieve there is exactly one matching family, including when the sieve is empty, and exactly one section that amalgamates it. Its value at every object is therefore the zero group. This verifies the zero-sheaf convention using the sheaf condition in [F0].

[F3] For an additive group homomorphism $a:A\to B$, the kernel is $\{x\in A:a(x)=0\}$ and the image is $\{a(x):x\in A\}$. [[math:def-kernel-and-image-of-group-homomorphism]] The quotient of an abelian group by a subgroup is the group of additive cosets. [[math:def-quotient-group]] Thus, writing $d^n_U=d^n(U)$, the cohomology convention is $H^n(I^\bullet(U))=\ker(d^n_U)/\operatorname{im}(d^{n-1}_U)$. The homomorphism identities make these kernels and images subgroups, and $d^n_Ud^{n-1}_U=0$ places the image in the kernel. Since the groups are abelian the subgroup is normal, so this quotient is defined.

## Proof

**Proof technique:** Inspect the terms in negative degrees.

1.1 For each $n<0$, the term $I^n$ is the zero sheaf, so evaluation gives $I^n(U)=\{0\}$. The outgoing differential is a group homomorphism from this one-element group, hence its kernel is $\{0\}$. [F0, F1, F2, F3, given]

2.1 The image of the preceding differential is contained in that kernel and contains zero, so it too is $\{0\}$. The quotient defining $H^n(I^\bullet(U))$ is consequently $\{0\}/\{0\}$, with its single coset, and is the zero group for every $n<0$. [F3, step 1.1] ∎
