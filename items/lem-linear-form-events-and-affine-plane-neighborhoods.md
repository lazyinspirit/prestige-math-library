---
id: lem-linear-form-events-and-affine-plane-neighborhoods
kind: lemma
title: "Linear-form events are comparable to affine-plane neighborhoods"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-limsup-tubes-about-affine-subspaces
proof_strategy: direct
verification:
  precheck: n/a
sources:
  references:
    - title: "Allen and Beresnevich, A Mass Transference Principle for Systems of Linear Forms and Its Applications, §§2.1–2.3"
      url: "https://arxiv.org/pdf/1703.10015v2"
---

## Statement

Let $n,m\ge1$, let $q\in\mathbb R^n\setminus\{0\}$ be a row vector, and let $c\in\mathbb R^m$. Equip $\mathbb R^{n\times m}$ with the Frobenius Euclidean norm and define the affine plane

$$R(q,c):=\{X\in\mathbb R^{n\times m}:qX+c=0\}.$$

This plane has dimension $m(n-1)$, and for every $X\in\mathbb R^{n\times m}$,

$$\operatorname{dist}_F(X,R(q,c))=\frac{\|qX+c\|_2}{\|q\|_2}.$$

Consequently, for $Q=\|q\|_\infty$ and every $\psi>0$,

$$\Delta\!\left(R(q,c),\frac{\psi}{\sqrt n\,Q}\right)\subseteq\{X:\|qX+c\|_\infty<\psi\}\subseteq\Delta\!\left(R(q,c),\frac{\sqrt m\,\psi}{Q}\right).$$

## Facts & Assumptions

**Given:** Euclidean orthogonal projection onto a hyperplane and the product Frobenius norm on matrices.

## Proof

1.1 Write $X=(x_1,\ldots,x_m)$ by columns and $c=(c_1,\ldots,c_m)$. Since $q\ne0$, choose an orthonormal basis whose first vector is $q/\|q\|_2$. In those coordinates, each equation $q\cdot z+c_j=0$ fixes exactly the first coordinate and leaves $n-1$ free coordinates, so it defines a nonempty affine hyperplane of dimension $n-1$. Their product is $R(q,c)$ and has dimension $m(n-1)$. [given, algebra]

2.1 In column $j$, the distance from $x_j$ to the hyperplane $q\cdot z+c_j=0$ is $|q\cdot x_j+c_j|/\|q\|_2$, by orthogonal projection along its unit normal $q/\|q\|_2$. Squaring and summing the $m$ column distances gives the Frobenius distance formula. [given, step 1.1, algebra]

3.1 If $\|qX+c\|_\infty<\psi$, then $\|qX+c\|_2<\sqrt m\,\psi$ and $\|q\|_2\ge Q$, so step 2.1 places $X$ in the outer tube. Conversely, if the distance is less than $\psi/(\sqrt nQ)$, then $\|qX+c\|_2<\psi\|q\|_2/(\sqrt nQ)\le\psi$, because $\|q\|_2\le\sqrt nQ$; hence every coordinate has absolute value $<\psi$. [step 2.1, algebra] ∎

## Statement references

[Allen and Beresnevich, *A Mass Transference Principle for Systems of Linear Forms and Its Applications*, §§2.1–2.3](https://arxiv.org/pdf/1703.10015v2)
