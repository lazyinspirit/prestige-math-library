---
id: cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product
kind: corollary
title: "The multiplicity of an irreducible summand is a character inner product"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order, thm-characters-of-direct-sums-tensor-products-and-duals, thm-first-orthogonality-relation-for-irreducible-complex-characters]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Corollary 3.3.1"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Statement

Let $G$ be a finite group, let $V$ be a finite-dimensional complex
representation of $G$, and let $\chi_i$ be an irreducible complex character of
$G$. Write $V\cong\bigoplus_{j=1}^{r}m_jV_j$ as a direct sum of irreducible
representations. Then the multiplicity of $V_i$ in $V$ is

$$m_i=\langle\chi_V,\chi_i\rangle.$$

## Facts & Assumptions

**Given:** A finite group $G$, a finite-dimensional complex representation
$V$ of $G$, a decomposition $V\cong\bigoplus_jm_jV_j$ into irreducible
representations, and an index $i$.

[F1] Every finite-dimensional representation of a finite group over a field
of characteristic not dividing $|G|$ is completely reducible
([[cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order]]).

[F2] Characters add on direct sums
([[thm-characters-of-direct-sums-tensor-products-and-duals]]).

[F3] Irreducible characters are orthonormal:
$\langle\chi_j,\chi_i\rangle=\delta_{ji}$
([[thm-first-orthogonality-relation-for-irreducible-complex-characters]]).

## Proof

**Proof technique:** direct.

1.1 Since $\operatorname{char}\mathbb C=0$ does not divide $|G|$, [F1] gives
a decomposition $V\cong\bigoplus_jm_jV_j$ with each $V_j$ irreducible. [F1,
given]

2.1 Applying [F2] iteratively to the decomposition of step 1.1 gives
$\chi_V=\sum_jm_j\chi_j$, a finite sum because $V$ is finite-dimensional.
[F2, step 1.1]

3.1 Taking the inner product with $\chi_i$, linearity in the first argument
and [F3] give
$\langle\chi_V,\chi_i\rangle=\sum_jm_j\langle\chi_j,\chi_i\rangle
=\sum_jm_j\delta_{ji}=m_i$. [F3, step 2.1, algebra] ∎
