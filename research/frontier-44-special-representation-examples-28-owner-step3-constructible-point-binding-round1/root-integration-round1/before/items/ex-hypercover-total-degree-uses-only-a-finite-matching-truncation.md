---
id: ex-hypercover-total-degree-uses-only-a-finite-matching-truncation
kind: example
title: "Hypercover total degree uses only a finite matching truncation"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 21
deps: [thm-proper-hypercovers-compute-constructible-derived-cohomology, def-simplicial-object-and-simplicial-commutative-ring]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "D. Dugger, S. Hollander, D. C. Isaksen, Hypercovers and simplicial presheaves, Mathematical Proceedings of the Cambridge Philosophical Society 136 (2004), complete arXiv full text; Appendix A read at the cited pages."
      url: "https://arxiv.org/pdf/math/0205027"
    - title: "The Stacks Project, Hypercoverings (Chapter 0DEG), complete PDF; the homological-descent lemmas are read at the cited tags and pages."
      url: "https://stacks.math.columbia.edu/download/hypercovering.pdf"
---


## Example

Assume the Axiom of Choice as inherited from the proper-hypercover theorem. Let $X_\bullet\to X$ be a proper hypercover and let $F$ be a coefficient complex in $D^b_c(X;k)$ with cochain lower bound $a$ ([[def-simplicial-object-and-simplicial-commutative-ring]]). Then the cohomology of the total complex in degree $m$, and its differential, are determined by the simplicial levels $p\leq m-a+1$ only; every hypercover truncation $\operatorname{cosk}_N\operatorname{sk}_NX_\bullet$ with $N\geq m-a+1$ computes the same $H^m(X,F)$. In particular for the constant sheaf $F=k_X$, where $a=0$, degree $n$ uses only levels through $n+1$. Level $n$ alone does not suffice: the differential out of the term $(p,q)=(n,0)$ of the Cech complex lands in the level $n+1$ term $(n+1,0)$.

## Facts & Assumptions

**Given:** the proper hypercover $X_\bullet\to X$, the coefficient $F\in D^b_c(X;k)$ with cochain lower bound $a$, an integer $m$, and the truncations $\operatorname{cosk}_N\operatorname{sk}_NX_\bullet$; the Axiom of Choice is inherited from the proper-hypercover theorem and no new choice is made below.

[F1] [[thm-proper-hypercovers-compute-constructible-derived-cohomology]] supplies the two augmentation quasi-isomorphisms of a proper hypercover, the finite diagonals, and the statement that degree $m$ and its differential are determined by levels through $p=m-a+1$.

[F2] [[def-simplicial-object-and-simplicial-commutative-ring]] fixes the simplicial face and degeneracy operators, the truncation $\operatorname{sk}$ and the coskeleton $\operatorname{cosk}$ vocabulary, and the Moore-complex conventions used for the Cech complex.

## Verification

**Proof technique:** direct.

1.1 Degree bookkeeping. In the total complex of the hypercover, the term in bidegree $(p,q)$ has $p\geq0$ and $q\geq a$ and contributes to total degree $p+q$. For a fixed total degree $m$ this gives $0\leq p\leq m-a$. The differentials entering and leaving total degree $m$ involve terms of total degree $m-1$, $m$ and $m+1$, so the largest simplicial level appearing in the data of $H^m$ and of its differential is $p=(m+1)-a=m-a+1$. [F1, given]

2.1 The truncation computes the same cohomology. By [F1], the comparison of $X_\bullet$ with its $N$-coskeleton truncation $\operatorname{cosk}_N\operatorname{sk}_NX_\bullet$ is the identity through simplicial degree $N$, and the total complex in a fixed total degree uses only finitely many levels. Choosing $N\geq m-a+1$ makes the two total complexes agree in degrees $m-1$, $m$ and $m+1$; hence they have the same $H^m$ and the same augmentation maps there. Since $m$ was arbitrary, every truncation with $N$ at least the stated bound computes the same cohomology $H^m(X,F)$. [F1, step 1.1, construct]

3.1 Constant coefficients and sharpness. For $F=k_X$ the cochain lower bound is $a=0$, so degree $n$ uses levels through $n+1$. The bound is sharp: the term $(p,q)=(n,0)$ of the Cech complex is $H^0(X_n,k)$, and its outgoing differential is the alternating sum of face pullbacks into the level $n+1$ term $(n+1,0)$ of total degree $n+1$; this differential is part of the data determining $H^n$, so using only levels through $n$ is not sufficient in general. No infinite product and no separate convergence argument beyond the quoted total-degree statements of [F1] is used. [F1, F2, step 1.1, step 2.1] ∎
