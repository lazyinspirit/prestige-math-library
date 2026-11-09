---
id: lem-author-7ef3227685d9-supported-k0-ideal-filtration
kind: lemma
title: Finite ideal-power filtrations and coherent sheaves on the closed subscheme
status: published
domain: mathematics
deps:
  - thm-author-7ef3227685d9-supported-k0-regular-cohomology-input
dependency_roles:
  thm-author-7ef3227685d9-supported-k0-regular-cohomology-input: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 6
---

## Statement
Let $i:T\hookrightarrow U$ be any closed subscheme of the regular Noetherian finite-dimensional $U$, with coherent defining ideal $\mathcal I$. For every $M\in\mathcal A_T$, some integer $N\geq1$ satisfies $\mathcal I^NM=0$. The finite filtration
$$M\supseteq\mathcal IM\supseteq\cdots\supseteq\mathcal I^NM=0$$
has coherent quotients annihilated by $\mathcal I$. Closed direct image identifies $\mathrm{Coh}(T)$ exactly with the full abelian subcategory $\mathcal B_T\subseteq\mathcal A_T$ annihilated by $\mathcal I$. This inclusion is exact and closed under subobjects and quotients, although it need not be closed under extensions in $\mathcal A_T$.

## Facts & Assumptions
**Given:** $U,T,i,\mathcal I$ and $M$ as stated; $\mathcal A_T$ denotes coherent modules supported on $|T|$.

**Goal:** Verify the exact hypotheses for abelian dévissage using an actual finite filtration.

[F1] The unconditional coherent-sheaf clause of [[thm-author-7ef3227685d9-supported-k0-regular-cohomology-input]] gives the coherent abelian category on the Noetherian scheme $U$. Kernels, cokernels and extensions of coherent modules supported on $|T|$ remain supported there by exactness of stalks, giving the abelian category $\mathcal A_T$ used here. Noetherianity gives finite module presentations on affine opens and coherence of ideals, images and quotients. This argument uses no perfect-category enhancement or nonconnective model.

[F2] For a closed immersion with ideal $\mathcal I$, the structure sheaf on $T$ is $\mathcal O_U/\mathcal I$ along the underlying closed space. An affine neighbourhood has the form $\operatorname{Spec}(A/I)\hookrightarrow\operatorname{Spec}A$.

## Proof
1.1 Choose a finite affine cover of $U$. On one affine, write $M$ as a finite $A$-module and $I=(f_1,\ldots,f_r)$. Since its support is contained in $V(I)$, its localization at each $f_j$ is zero. Finitely many module generators then give an exponent $n_j\geq1$ such that $f_j^{n_j}M=0$. Every monomial of degree $N=1+\sum_j(n_j-1)$ in the $f_j$ contains one such power, so $I^NM=0$. If $I=0$, take $N=1$. Taking the maximum of the finitely many affine exponents gives a global exponent: higher ideal powers are contained in lower ones. [F1, F2, given, choose]

2.1 Each $\mathcal I^rM$ and its quotient by $\mathcal I^{r+1}M$ is coherent by Noetherianity; the quotient is killed by $\mathcal I$ by multiplication. Thus step 1.1 supplies the stated finite filtration in the abelian category $\mathcal A_T$. [F1, F2, step 1.1]

3.1 For any sheaf on the closed subspace, closed direct image has its given stalks on $T$ and zero stalks off $T$, so it is exact. A module sheaf annihilated by $\mathcal I$ descends uniquely to an $\mathcal O_T$-module sheaf on that subspace: locally this is simply restriction of scalars for $A\to A/I$, with inverse giving the same module its $A/I$ action. These local constructions and their maps glue because the action factors uniquely through the quotient sheaf of rings. Finiteness is equivalent over $A$ and $A/I$, which are Noetherian, so this identifies precisely the coherent categories. Hence $i_*$ is fully faithful, exact and has image $\mathcal B_T$. Subobjects and quotients of a module killed by $\mathcal I$ are also killed by $\mathcal I$. This checks the asserted closure without imposing the generally false extension-closure condition. [F1, F2, step 2.1] ∎
