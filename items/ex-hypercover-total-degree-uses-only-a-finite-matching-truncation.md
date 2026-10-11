---
id: ex-hypercover-total-degree-uses-only-a-finite-matching-truncation
kind: example
title: "Hypercover total degree uses only a finite matching truncation"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 21
deps: [def-axiom-of-choice, thm-proper-hypercovers-compute-constructible-derived-cohomology, def-simplicial-object-and-simplicial-commutative-ring]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "D. Dugger, S. Hollander, D. C. Isaksen, Hypercovers and simplicial presheaves, Mathematical Proceedings of the Cambridge Philosophical Society 136 (2004), complete arXiv full text; Appendix A read at the cited pages."
      url: "https://arxiv.org/pdf/math/0205027"
    - title: "The Stacks Project, Hypercoverings (Chapter 0DEG), complete PDF; the homological-descent lemmas are read at the cited tags and pages."
      url: "https://stacks.math.columbia.edu/download/hypercovering.pdf"
---


## Example

Assume the Axiom of Choice as inherited from the proper-hypercover theorem. Let $X_\bullet\to X$ be a proper hypercover and let $F$ be a coefficient complex in $D^b_c(X;k)$ with cochain lower bound $a$ ([[def-simplicial-object-and-simplicial-commutative-ring]]). Then the cohomology of the total complex in degree $m$, and its differential, are determined by the simplicial levels $p\leq m-a+1$ only; every hypercover truncation $\operatorname{cosk}_N\operatorname{sk}_NX_\bullet$ with $N\geq m-a+1$ computes the same $H^m(X,F)$. In particular for the constant sheaf $F=k_X$, where $a=0$, degree $n$ uses only levels through $n+1$. Keeping only the cochain terms through level $n$ and omitting the outgoing differential does not suffice in general: the differential out of the term $(p,q)=(n,0)$ of the Cech complex lands in the level $n+1$ term $(n+1,0)$.

## Facts & Assumptions

**Given:** the proper hypercover $X_\bullet\to X$, the coefficient $F\in D^b_c(X;k)$ with cochain lower bound $a$, an integer $m$, and the truncations $\operatorname{cosk}_N\operatorname{sk}_NX_\bullet$; the Axiom of Choice is inherited from the proper-hypercover theorem and no new choice is made below.

[F1] [[thm-proper-hypercovers-compute-constructible-derived-cohomology]] supplies the two augmentation quasi-isomorphisms of a proper hypercover, the finite diagonals, and the statement that degree $m$ and its differential are determined by levels through $p=m-a+1$.

[F2] [[def-simplicial-object-and-simplicial-commutative-ring]] fixes the simplicial face and degeneracy operators and the Moore-complex conventions used for the Cech complex. The truncation and coskeleton conventions are given in [F1].

## Verification

**Proof technique:** direct.

1.1 Degree bookkeeping. In the total complex of the hypercover, the term in bidegree $(p,q)$ has $p\geq0$ and $q\geq a$ and contributes to total degree $p+q$. For a fixed total degree $m$ this gives $0\leq p\leq m-a$. The differentials entering and leaving total degree $m$ involve terms of total degree $m-1$, $m$ and $m+1$, so the largest simplicial level appearing in the data of $H^m$ and of its differential is $p=(m+1)-a=m-a+1$. [F1, given]

2.1 The truncation computes the same cohomology. By [F1], the comparison of $X_\bullet$ with its $N$-coskeleton truncation $\operatorname{cosk}_N\operatorname{sk}_NX_\bullet$ is the identity through simplicial degree $N$, and the total complex in a fixed total degree uses only finitely many levels. Choosing $N\geq m-a+1$ makes the two total complexes agree in degrees $m-1$, $m$ and $m+1$; hence they have the same $H^m$ and the same augmentation maps there. Since $m$ was arbitrary, every truncation with $N$ at least the stated bound computes the same cohomology $H^m(X,F)$. [F1, step 1.1, construct]

3.1 Constant coefficients and sharpness for hard truncation. For $F=k_X$ the lower bound is $a=0$, so the actual total-degree computation uses the outgoing map from level $n$ to level $n+1$. To see that omitting that map can change the answer in every degree, take the proper surjection from two reduced points $S=\{0,1\}$ to a point and its Cech nerve. The map is proper since preimages of compact sets are finite, and its fiber powers are finite discrete spaces. A sheaf on a finite discrete space is a family of vector spaces, so global sections are a finite product and exact. Hence the derived section model has internal degree zero only. The normalized degree-$p$ cochains are $k^2$, indexed by the two alternating nondegenerate strings of length $p+1$. Interior deletions give degenerate strings and vanish in the normalized differential; the two endpoint deletions give $\delta_p(v_0,v_1)=(v_1+(-1)^{p+1}v_0,v_0+(-1)^{p+1}v_1)$, which has rank one over every field. The full augmented complex is contracted by inserting one point, as in [F1], so its positive cohomology is zero and $H^0=k$. If one retains only cochain levels $0,\ldots,n$ and discards $\delta_n$, its top cohomology is $k$ for $n>0$ and $k^2$ for $n=0$, giving the wrong answer. Thus level $n+1$ is necessary in general for this hard truncation of the cochain data. A coskeleton truncation is different: it reconstructs higher levels from matching limits, so no claim that $\operatorname{cosk}_n\operatorname{sk}_nX_\bullet$ itself fails descent is made. [F1, F2, step 1.1, step 2.1, algebra] ∎
