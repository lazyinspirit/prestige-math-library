---
id: lem-nonzero-fractional-ideal-of-quadratic-order-is-a-rank-two-lattice
kind: lemma
title: Nonzero Fractional Ideals of a Quadratic Order Are Rank-Two Lattices
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-quadratic-order-of-discriminant
  - thm-quadratic-order-formula-verifies-discriminant
  - def-fractional-ideal
  - def-field-norm-and-trace
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Manjul Bhargava, Higher Composition Laws I, §3.2"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v159-n1-p03.pdf"
    - title: "J. S. Milne, Algebraic Number Theory v3.08, §§3.18–3.20"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
verification:
  precheck: pass
---

## Statement

Let $\mathcal O_D=\mathbb Z[\tau_D]$ be the quadratic order of a nonzero
nonsquare discriminant $D$. Every nonzero fractional $\mathcal O_D$-ideal $I$
is a free abelian group of rank two. Moreover, some positive integer $n$
satisfies $nI\subseteq\mathcal O_D$, and the additive quotient
$\mathcal O_D/nI$ is finite.

## Statement references

[Bhargava, “Higher Composition Laws I,” §3.2, p. 232](https://annals.math.princeton.edu/wp-content/uploads/annals-v159-n1-p03.pdf)

[Milne, *Algebraic Number Theory*, §§3.18–3.20, pp. 52–54](https://www.jmilne.org/math/CourseNotes/ANTc.pdf)

## Facts & Assumptions

**Given:** A nonzero nonsquare discriminant $D$ and a nonzero fractional $\mathcal O_D$-ideal $I$.

[F1] [[def-quadratic-order-of-discriminant]]: $\mathcal O_D=\mathbb Z+\mathbb Z\tau_D$, with conjugation $\overline{\tau_D}=\delta-\tau_D$.

[F2] [[thm-quadratic-order-formula-verifies-discriminant]]: $\mathcal O_D$ is a rank-two order in $K_D=\mathbb Q(\sqrt D)$.

[F3] [[def-fractional-ideal]]: $I$ is a nonzero $\mathcal O_D$-submodule of $K_D$ and some nonzero $d\in\mathcal O_D$ satisfies $dI\subseteq\mathcal O_D$.

[F4] [[def-field-norm-and-trace]]: $N_{K_D/\mathbb Q}(d)$ is the determinant of multiplication by $d$.

## Proof

1.1 Choose $0\ne a\in I$ and $0\ne d\in\mathcal O_D$ with $dI\subseteq\mathcal O_D$ by [F3]. Since $I$ is an $\mathcal O_D$-submodule, $a\mathcal O_D\subseteq I\subseteq d^{-1}\mathcal O_D$. Multiplication by a nonzero field element is a $\mathbb Q$-linear isomorphism of $K_D$, so both outer groups are free abelian groups of rank two by [F1] and [F2]. [F1, F2, F3, given, choose, algebra]

1.2 Write $d=x+y\tau_D$ with $x,y\in\mathbb Z$. Its conjugate $\bar d=x+y(\delta-\tau_D)$ lies in $\mathcal O_D$. Multiplication by $d$ in the basis $(1,\tau_D)$ has integer matrix $\begin{pmatrix}x&q_Dy\\y&x+\delta y\end{pmatrix}$, so [F4] gives $N(d)=d\bar d\in\mathbb Z\setminus\{0\}$. Set $n=|N(d)|$. Then $n/d=\operatorname{sgn}(N(d))\bar d\in\mathcal O_D$, so $nI=(n/d)(dI)\subseteq\mathcal O_D$. [F1, F4, given, algebra]

2.1 Identify $d^{-1}\mathcal O_D$ with $\mathbb Z^2$. The image $H$ of $I$ is a subgroup containing a rank-two subgroup. Its projection to the first coordinate is therefore $m\mathbb Z$ for some $m>0$; choose $(m,r)\in H$. Its intersection with the second coordinate axis is $\{0\}\times n_0\mathbb Z$ for some $n_0>0$, because it contains the corresponding full-rank subgroup. For any $(km,s)\in H$, subtracting $k(m,r)$ leaves an element of this intersection. Thus $(m,r)$ and $(0,n_0)$ form a $\mathbb Z$-basis of $H$, proving that $I$ is free of rank two. [step 1.1, given, choose, algebra]

3.1 The subgroup $nI$ has rank two by step 2.1, so a $\mathbb Z$-basis gives a nonsingular $2\times2$ integer coordinate matrix in the basis $(1,\tau_D)$. Its adjugate shows that its nonzero determinant times $\mathcal O_D$ is contained in $nI$. Therefore $\mathcal O_D/nI$ is a quotient of a finite group and is finite. [F1, step 2.1, step 1.2, algebra] ∎
