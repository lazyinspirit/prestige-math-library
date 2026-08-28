---
id: ex-length-computed-for-a-finite-abelian-group
kind: example
title: "The finite abelian group Z/12 has length three"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-jordan-holder-theorem-in-an-abelian-category, def-object-of-finite-length, thm-length-is-additive-along-a-subobject]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik, Tensor Categories, Section 1.5"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: frontier-22
---

## Example

The abelian group $\mathbb Z/12$ has finite length $3$. For the subobject
$B=\langle 2\rangle\cong \mathbb Z/6$, one has $\ell(B)=2$ and
$\ell((\mathbb Z/12)/B)=1$, so the additivity formula reads
$3=2+1$.

## Facts & Assumptions

**Given:** The abelian group $A=\mathbb Z/12$ and its subgroup $B=\langle2\rangle$.

[L1] Jordan-Holder makes the length independent of the chosen composition series
([[thm-jordan-holder-theorem-in-an-abelian-category]]).

[L2] Finite length and length are the notions of [[def-object-of-finite-length]].

[L3] Length is additive along a subobject
([[thm-length-is-additive-along-a-subobject]]).

## Verification

**Proof technique:** direct.

1.1 The chain $0<\langle6\rangle<\langle2\rangle<\mathbb Z/12$ is a composition series of $A$, so $A$ has finite length and $\ell(A)=3$ by [L1] and [L2]. The subgroup $B=\langle2\rangle\cong\mathbb Z/6$ has composition series $0<\langle6\rangle<\langle2\rangle$, so $\ell(B)=2$, while $A/B\cong\mathbb Z/2$ has length $1$. [L1, L2, algebra]
2.1 The numerical identity $\ell(A)=\ell(B)+\ell(A/B)$ becomes $3=2+1$ in this case, exactly as [L3] asserts. [L3, step 1.1] ∎