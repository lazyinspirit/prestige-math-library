---
id: fs-an-infinite-coproduct-of-complexes-has-homology-equal-to-the-coproduct-of-their-homologies-in-every-abelian-category
kind: false-statement
title: "FALSE: every infinite coproduct of complexes has homology equal to the coproduct of their homologies"
status: draft
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-products-and-coproducts-of-complexes-are-degreewise-when-they-exist-and-preserve-differentials,
       thm-a-complex-is-exact-at-n-exactly-when-its-nth-homology-is-zero,
       def-the-axioms-ab4-and-ab4-star,
       cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Appendix A.4"
      url: "https://math.mit.edu/~hrm/palestine/weibel/A-category_theory_language.pdf"
pipeline_run: frontier-24
---

## Statement

In every abelian category, whenever an infinite coproduct of chain complexes
exists, its homology is the coproduct of the homologies.

## Facts & Assumptions

**Given:** An abelian category with small coproducts and a family of monomorphisms $u_i:A_i\to B_i$.

[A1] There exist abelian categories with small coproducts that do not satisfy AB4.

[L1] AB4 means that every small coproduct of monomorphisms is again monic ([[def-the-axioms-ab4-and-ab4-star]]).

[L2] Degreewise coproducts of complexes, when they exist, are computed degreewise ([[prop-products-and-coproducts-of-complexes-are-degreewise-when-they-exist-and-preserve-differentials]]).

[L3] A complex is exact at degree $n$ exactly when its $n$th homology is zero ([[thm-a-complex-is-exact-at-n-exactly-when-its-nth-homology-is-zero]]).

[L4] In an abelian category, a morphism is monic exactly when its kernel is zero ([[cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero]]).

## Refutation

**Proof technique:** direct.

1.1 For each $i$, form the two-term complex $$C^{(i)}_\bullet:\qquad 0\to A_i\xrightarrow{u_i}B_i\to0,$$ with $A_i$ in degree $1$ and $B_i$ in degree $0$. Because $u_i$ is monic, [L4] gives $\ker(u_i)=0$, so [L3] implies $H_1(C^{(i)})=0$ for every $i$. [L3, L4, given]

2.1 If the statement were true, then by [L2] the coproduct complex $\coprod_i C^{(i)}$ would satisfy $$H_1\!\left(\coprod_i C^{(i)}\right)\cong\coprod_i H_1(C^{(i)})=0.$$ Its degree-$1$ differential is exactly $\coprod_i u_i$, so [L3] and [L4] would force $\coprod_i u_i$ to be monic. By [L1], that would make every abelian category with small coproducts satisfy AB4. [L1, L2, L3, L4, step 1.1]

3.1 This contradicts [A1]. Therefore the statement is false. [A1, step 2.1] ∎
