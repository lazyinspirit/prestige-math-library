---
id: thm-triangularisation-splitting-criterion
kind: theorem
title: "$T$ is triangularisable iff its minimal polynomial splits iff its characteristic polynomial splits"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [prop-complete-invariant-flags-and-upper-triangular-matrices, prop-characteristic-polynomial-factors-over-an-invariant-subspace, thm-minimal-and-characteristic-polynomials-have-the-same-irreducible-factors, thm-spectrum-is-the-root-set-of-the-characteristic-polynomial, lem-quotient-basis-lifts-to-an-adapted-basis]
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Result 5.44"
      url: "https://linear.axler.net/LADR4e.pdf"
    - title: "K. Hoffman and R. Kunze, Linear Algebra, 2nd ed., Theorem 5 in Section 6.4"
      url: "https://math.ucr.edu/~mpierce/teaching/linear-algebra/docs/Hoffman%2CKunze-LinearAlgebra.pdf"
pipeline_run: null
---

## Statement

Let $T$ be an endomorphism of a finite-dimensional vector space $V$ over $F$. The following are equivalent:

1. $T$ is triangularisable over $F$;
2. the minimal polynomial $\mu_T$ is a product of linear factors in $F[x]$;
3. the characteristic polynomial $\chi_T$ is a product of linear factors in $F[x]$.

For $V=0$, both polynomials are $1$, the empty product, and the empty basis triangularises $T$.

## Facts & Assumptions

**Given:** A finite-dimensional $F$-vector space $V$ and an endomorphism $T:V\to V$.

[L1] An ordered basis gives an upper-triangular matrix exactly when its initial spans form a complete invariant flag ([[prop-complete-invariant-flags-and-upper-triangular-matrices]]).

[L2] For a $T$-invariant subspace $W$, $\chi_T=\chi_{T|_W}\chi_{\bar T}$ ([[prop-characteristic-polynomial-factors-over-an-invariant-subspace]]).

[L3] A monic irreducible polynomial divides $\mu_T$ if and only if it divides $\chi_T$ ([[thm-minimal-and-characteristic-polynomials-have-the-same-irreducible-factors]]).

[L4] The eigenvalues of $T$ over $F$ are exactly the roots in $F$ of $\chi_T$ ([[thm-spectrum-is-the-root-set-of-the-characteristic-polynomial]]).

[L5] A basis of a subspace followed by representatives of a quotient basis is a basis of the whole space ([[lem-quotient-basis-lifts-to-an-adapted-basis]]).

## Proof

**Proof technique:** induction.

1.1 If $T$ is triangularisable, then $xI-[T]$ is upper triangular and its determinant is the product of its diagonal entries $x-a_{jj}$, so $\chi_T$ splits; by [L3], $\chi_T$ splits exactly when $\mu_T$ splits. [L1, L3]

1.2 If $\dim V=0$, the empty basis and the polynomial $1$ give all three conditions. [base]

1.3 Assume $\dim V>0$, that $\chi_T$ splits, and that the reverse implication holds in smaller dimensions; choose a root $\lambda\in F$ of $\chi_T$, then [L4] supplies a nonzero eigenvector $v$, and $W=Fv$ is a one-dimensional invariant subspace. [L4, choose, ih]

2.1 By [L2], $\chi_T=(x-\lambda)\chi_{\bar T}$, so $\chi_{\bar T}$ splits; the induction hypothesis triangularises $\bar T$ on $V/W$, and [L5] lifts its triangular basis after $v$ to a basis whose initial spans are $T$-invariant, so [L1] triangularises $T$. [step 1.3, L1, L2, L5, ih]

3.1 Step 1.1 gives $1\Rightarrow3\Leftrightarrow2$, while steps 1.2-2.1 give $3\Rightarrow1$ in every finite dimension, completing all three equivalences. [step 1.1, step 1.2, step 2.1, discharge-induction] ∎
