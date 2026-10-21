---
id: lem-graded-laurent-images-with-proper-kernel-are-plus-towers
kind: lemma
title: "Proper graded kernels in a Laurent tower give plus towers with a least grading"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Ozsvath and Szabo, Absolutely graded Floer homologies and intersection forms for four-manifolds with boundary"
      url: "https://arxiv.org/pdf/math/0110170v1"
      locator: "Definition4.1 and proof of Proposition4.2; the graded module calculation is supplied locally"
---

## Statement

Let $\Lambda=\mathbb F_2[U,U^{-1}]$ be the Laurent polynomial vector space graded by $\deg U^n=a-2n$, where $a\in\mathbb Q$ is fixed. Regard it as a module over $R=\mathbb F_2[U]$. Let $f:\Lambda\to M$ be a degree-zero $R$-linear map to a graded $R$-module, with $U$ of degree $-2$. Suppose its kernel is nonzero and proper.

There is a unique integer $N$ such that $\ker f=U^N R$. The image has basis $e_j=f(U^{N-1-j})$ for $j\ge0$, with
$$Ue_0=0,\qquad Ue_j=e_{j-1}\ (j\ge1),\qquad \deg e_j=a-2N+2+2j.$$
Thus the image is the plus tower $\mathbb F_2[U,U^{-1}]/U\mathbb F_2[U]$ with bottom degree $a-2N+2$. Every element of the image is killed by some positive power of $U$ and belongs to $U^k\operatorname{im}f$ for every $k\ge1$. The set of degrees of nonzero homogeneous image elements has the minimum $a-2N+2$. A degree-preserving $R$-module isomorphism between two such images preserves this minimum.

In particular the condition of being $U$-nontorsion cannot select the bottom of a plus tower. No assertion that an actual Floer group or Floer map satisfies the hypotheses is included.

## Statement references

[Ozsvath and Szabo, *Absolutely graded Floer homologies and intersection forms for four-manifolds with boundary*, Definition4.1 and proof of Proposition4.2](https://arxiv.org/pdf/math/0110170v1)

## Facts & Assumptions

**Given:** The displayed Laurent grading, actual graded module map, and its nonzero proper kernel. All Laurent polynomials have finite support. No choice axiom is needed.

## Proof

1.1 Distinct monomials $U^n$ have distinct degrees. Since $f$ preserves degrees, its kernel is graded: if a finite sum maps to zero, each homogeneous summand maps to zero in the direct-sum grading of $M$. Each source homogeneous summand is one-dimensional, so the kernel is spanned by the monomials it contains. Let $S=\{n\in\mathbb Z:f(U^n)=0\}$. Nonzero kernel makes $S$ nonempty, and proper kernel makes its complement nonempty. $R$-linearity makes $S$ upward closed: $n\in S$ implies $n+1\in S$. Choose one integer $b\notin S$. No integer at most $b$ is in $S$, since otherwise upward closure would put $b$ in $S$. Thus $S$ has a least integer $N$, by the well-ordering of the nonnegative integers after translating by $b+1$. Upward closure gives $S=\{n:n\ge N\}$ and hence $\ker f=U^N R$. This also proves uniqueness of $N$. Only one witness integer was selected; no family of choices was used. [given, construct, algebra]

2.1 The quotient by this kernel has vector-space basis the classes of the monomials with exponents $n<N$. Indeed, deleting the exponents at least $N$ gives a unique finite representative, and a linear combination of the remaining monomials is in the kernel only when all coefficients vanish. Applying $f$ therefore gives the independent spanning family $e_j$ in the Statement. Multiplication by $U$ kills $e_0$ and sends $e_j$ to $e_{j-1}$ for $j\ge1$. The degree formula follows by substituting $n=N-1-j$. The map from the standard quotient tower taking the class of $U^{-j}$ to $e_j$ intertwines $U$, is a vector-space bijection and shifts its bottom degree to $a-2N+2$. [step 1.1, construct, algebra]

3.1 For a nonzero finite sum $v=\sum_{j=0}^J c_j e_j$, multiplication by $U^{J+1}$ kills every term. For any fixed $k\ge1$, the finite sum $w=\sum_{j=0}^J c_j e_{j+k}$ belongs to the same image and satisfies $U^k w=v$. Zero has these properties as well. Thus local $U$-torsion and divisibility by every power hold simultaneously. A nonzero homogeneous element is exactly one $e_j$, because the degrees in step 2.1 are distinct and the coefficient field has one nonzero element. Its degree is therefore $a-2N+2+2j$, and the least is attained precisely at $e_0$. A degree-preserving bijection preserves the set of occupied degrees, so it preserves this least degree. In particular no $U$-nontorsion element exists in this tower, even though its least occupied grading is defined. These are algebraic conclusions under the stated kernel hypotheses, without a Floer existence or invariance assertion. [step 2.1, construct, algebra] ∎
