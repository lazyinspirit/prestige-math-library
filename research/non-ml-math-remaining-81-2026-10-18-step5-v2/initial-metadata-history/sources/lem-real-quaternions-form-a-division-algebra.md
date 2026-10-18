---
id: lem-real-quaternions-form-a-division-algebra
kind: lemma
title: "Quaternion conjugation and division"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-complex-clifford-classification-and-graded-products
dependency_level: 1
deps: [def-real-quaternion-matrix-algebra-notation, thm-reals-ordered-field]
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean Gallier, Clifford Algebras, Clifford Groups, and a Generalization of the Quaternions: The Pin and Spin Groups, §1.1"
      url: https://arxiv.org/pdf/0805.0311
    - title: "Konstantin Wernli, Lecture Notes on Spin Geometry, §1.4.1"
      url: https://arxiv.org/pdf/1911.09766
---

## Statement

For $h=a+bi+cj+dk\in\mathbb H$, define $\bar h=a-bi-cj-dk$ and $N(h)=a^2+b^2+c^2+d^2\in\mathbb R$. Quaternion conjugation is an involution and reverses products, $\overline{hg}=\bar g\bar h$. Moreover,

$$
h\bar h=\bar h h=N(h)1.
$$

In particular, every nonzero $h$ is invertible, with $h^{-1}=\bar h/N(h)$, so $\mathbb H$ is a real division algebra.

## Facts & Assumptions

**Given:** The real quaternion algebra and its basis and multiplication rules from [[def-real-quaternion-matrix-algebra-notation]], and real coefficients $a,b,c,d$.

[F1] The basis satisfies $i^2=j^2=k^2=-1$, $ij=k$, $jk=i$, $ki=j$, and reversed products have opposite sign ([[def-real-quaternion-matrix-algebra-notation]]).

[F2] $\mathbb R$ is an ordered field, so every square is nonnegative and a sum of squares is positive when at least one summand is nonzero ([[thm-reals-ordered-field]]).

## Proof

**Proof technique:** direct expansion.

1.1 Conjugation fixes $1$ and negates $i,j,k$. For an imaginary basis unit $u$, $\overline{u^2}=-1=(-u)(-u)$; for distinct imaginary units $u,v$, $uv$ is an imaginary basis unit up to sign and $\bar v\bar u=vu=-uv=\overline{uv}$. Bilinearity proves $\overline{hg}=\bar g\bar h$ for all $h,g$, and the coordinate formula gives $\bar{\bar h}=h$. [given, F1, algebra]

1.2 Write $h=a+u$ with $u=bi+cj+dk$. The relations in [F1] give $u^2=-(b^2+c^2+d^2)$ because each mixed term is a scalar multiple of $ij+ji$, $ik+ki$, or $jk+kj$. Since $a$ is central, $(a+u)(a-u)=(a-u)(a+u)=a^2-u^2=N(h)1$. Thus $h\bar h=\bar h h=N(h)1$. [given, F1, algebra]

2.1 If $h\ne0$, at least one of $a,b,c,d$ is nonzero, so [F2] gives $N(h)>0$. Therefore $N(h)^{-1}$ exists in $\mathbb R$, and step 1.2 shows both $h(\bar h/N(h))=1$ and $(\bar h/N(h))h=1$. For $h=0$ the norm is $0$ and no inverse is asserted. [given, F2, step 1.2, algebra] ∎
