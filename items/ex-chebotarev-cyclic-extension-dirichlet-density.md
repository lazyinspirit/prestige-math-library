---
id: ex-chebotarev-cyclic-extension-dirichlet-density
kind: example
title: "The two Frobenius classes in Q(i) each have Dirichlet density one half"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 28
deps:
  - thm-chebotarev-dirichlet-density
  - def-chebotarev-prime-ideal-counting-function
  - def-dirichlet-density-of-prime-ideals
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC, Countable Choice, and DC are inherited from the Chebotarev theorem at
  Verification step 2.1; the explicit quadratic-field check is choice-free.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter VIII §7, Corollary 7.3, printed p. 259."
verification:
  precheck: pass
---

## Example

Assume the Axiom of Choice, Countable Choice, and Dependent Choice. Let $L=\mathbb Q(i)$, let $F=\mathbb Q$, and let $c$ be complex conjugation. For each $\sigma\in\{1,c\}=\operatorname{Gal}(L/F)$, let $S_\sigma$ be the set of rational primes unramified in $L$ whose arithmetic Frobenius element is $\sigma$. Both sets have Dirichlet density $1/2$, where the density is normalized by $\log(1/(s-1))$ and absolute prime norm.

## Example references

[[thm-chebotarev-dirichlet-density]]

[[def-chebotarev-prime-ideal-counting-function]]

[[def-dirichlet-density-of-prime-ideals]]

[Milne, Class Field Theory, VIII §7, Corollary 7.3](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

## Facts & Assumptions

**Given:** AC, Countable Choice, Dependent Choice; the quadratic field $L=\mathbb Q(i)$; its two-element Galois group $\{1,c\}$; and the sets $S_1,S_c$ in the Example.

[F1] [[thm-chebotarev-dirichlet-density]]: For a finite Galois extension $L/F$ of number fields and a conjugacy-stable set $C\subseteq\operatorname{Gal}(L/F)$, the unramified prime ideals with Frobenius class in $C$ have Dirichlet density $|C|/|\operatorname{Gal}(L/F)|$.

## Verification

**Given:** The data above.

1.1 The polynomial $T^2+1$ has no rational root, so it is irreducible over $\mathbb Q$ and $L/F$ has degree two; its automorphisms are the identity and $c(i)=-i$. The group is abelian, hence each singleton $\{1\}$ and $\{c\}$ is conjugacy-stable. [given, algebra]

2.1 Apply [F1] to each singleton. Each has cardinality one and the Galois group has order two, so $\delta_F(S_1)=\delta_F(S_c)=1/2$. [F1, step 1.1, algebra] ∎
