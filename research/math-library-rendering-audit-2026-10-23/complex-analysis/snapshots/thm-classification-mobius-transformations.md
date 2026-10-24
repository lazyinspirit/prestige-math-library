---
id: thm-classification-mobius-transformations
kind: theorem
title: "Nonidentity Möbius transformations are parabolic or conjugate to a dilation, with the projective trace invariant"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-mobius-transformation, thm-mobius-group-and-projective-linear-identification, thm-three-point-transitivity-mobius-transformations]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 3 §§2.2-3.5"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Matthias Weber, Complex Analysis, Ch. 1 §§1.3-1.4"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 8 §§1-2"
      url: "https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis"
pipeline_run: frontier-22
---

## Statement

Let $M$ be a nonidentity Möbius transformation. Then exactly one of the
following holds.

1. $M$ has one fixed point on $\widehat{\mathbb C}$; in that case it is conjugate
   to $z\mapsto z+1$ and is called **parabolic**.
2. $M$ has two fixed points on $\widehat{\mathbb C}$; in that case it is
   conjugate to $z\mapsto \lambda z$ for some $\lambda\in\mathbb C^\times\setminus\{1\}$.

In the two-fixed-point normal form, the standard terminology is:
elliptic when $|\lambda|=1$ and $\lambda\ne1$, hyperbolic when
$\lambda\in(0,\infty)\setminus\{1\}$, and loxodromic otherwise.

If $A\in GL_2(\mathbb C)$ represents $M$, the quantity
$$\tau(M):=\frac{\operatorname{tr}(A)^2}{\det A}$$
is independent of the chosen representative. In the dilation normal form one has
$$\tau(M)=\lambda+2+\lambda^{-1},$$
and for the translation normal form one has $\tau(M)=4$.

## Facts & Assumptions

**Given:** A nonidentity Möbius transformation $M$.

[L1] Möbius transformations act triply transitively on the sphere ([[thm-three-point-transitivity-mobius-transformations]]).

[L2] Möbius transformations form a group, so conjugacy stays inside the class ([[thm-mobius-group-and-projective-linear-identification]]).

## Proof

**Proof technique:** direct.

1.1 Writing $M(z)=(az+b)/(cz+d)$, the fixed-point equation is $cz^2+(d-a)z-b=0$ in the finite chart, together with the possibility that $\infty$ is fixed. Therefore a nonidentity Möbius transformation has at most two fixed points. [given, algebra]

1.2 If $M$ has exactly one fixed point $p$, then [L1] provides a Möbius map $T$ sending $p$ to $\infty$. The conjugate $TMT^{-1}$ fixes $\infty$, so it has the form $z\mapsto\alpha z+\beta$; uniqueness of the fixed point forces $\alpha=1$ and $\beta\neq0$, so a further scaling conjugates it to $z\mapsto z+1$. [L1, L2, given, algebra]

1.3 If $M$ has two fixed points $p\neq q$, then [L1] provides a Möbius map sending them to $0$ and $\infty$. The conjugate therefore fixes both $0$ and $\infty$, hence has the form $z\mapsto\lambda z$ with $\lambda\in\mathbb C^\times\setminus\{1\}$. [L1, L2, given, algebra]

1.4 Replacing a representing matrix $A$ by $tA$ multiplies both $\operatorname{tr}(A)^2$ and $\det A$ by $t^2$, so $\tau(M)=\operatorname{tr}(A)^2/\det A$ is well defined on the projective class. For $z\mapsto\lambda z$ it equals $(\lambda+1)^2/\lambda=\lambda+2+\lambda^{-1}$, and for $z\mapsto z+1$ it equals $4$. [given, algebra]

2.1 Step 1.1 leaves only the one-fixed-point and two-fixed-point cases, and the preceding three steps identify those cases with the parabolic and dilation normal forms, the standard dilation-branch terminology, and the projective trace invariant. [given] ∎
