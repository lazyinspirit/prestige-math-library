---
id: lem-determinant-valuation-and-lattice-of-local-division-algebra
kind: lemma
title: Determinant valuation and residue dimension of a local division algebra
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
- thm-unique-extension-of-a-nonarchimedean-absolute-value
- thm-local-valuation-ring-compact-open
- thm-finite-products-of-compact-spaces
- cor-submodules-of-finite-free-pid-modules-are-free
- lem-finite-division-rings-are-fields
justified_by: []
proof_strategy: direct
axiom_use: None; only finite bases, finite products of compact spaces, and single witnesses are used.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Class Field Theory, version 4.03; locally adapted intermediate
      lemma
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: Chapter IV §4, printed pp.139–140; determinant multiplicativity and compact-lattice
      details reconstructed explicitly.
verification: {}
---

## Statement

Let $K$ be complete discretely valued with residue field $k$ of order $q$, and let $D/K$ be a finite-dimensional division algebra containing $K$ in its center. Put $m=\dim_KD$. Then
$$|x|_D=|\det_K(L_x)|_K^{1/m}$$
is a multiplicative nonarchimedean absolute value extending that of $K$, equivalent to the coordinate norm and complete. Its valuation $w=-\log_q|\cdot|_D$ has value group $(1/e)\mathbb Z$ for an integer $e\ge1$. Its unit ball $\mathcal O_D$ is a free $\mathcal O_K$-lattice of rank $m$. Its residue division ring is a finite field of degree $f$ over $k$, and $m=ef$.

## Statement references

[[thm-unique-extension-of-a-nonarchimedean-absolute-value]]

[[thm-local-valuation-ring-compact-open]]

[[cor-submodules-of-finite-free-pid-modules-are-free]]

[[lem-finite-division-rings-are-fields]]

## Facts & Assumptions

**Given:** The objects in the Statement.

[F1] On every finite field extension of a complete nonarchimedean field the norm formula gives the unique extending absolute value, including inseparable extensions. [[thm-unique-extension-of-a-nonarchimedean-absolute-value]]

[F2] The finite-residue valuation ring is compact open, and finite products of compact spaces are compact; both hold without an additional choice axiom. [[thm-local-valuation-ring-compact-open]] [[thm-finite-products-of-compact-spaces]]

[F3] Submodules of finite free modules over a PID are finite free. [[cor-submodules-of-finite-free-pid-modules-are-free]]

[F4] A finite division ring is a field. [[lem-finite-division-rings-are-fields]]

## Proof

**Proof technique:** direct finite-dimensional construction.

**Given:** The data above.

1.1 For $x\ne0$, $K[x]$ is a commutative finite-dimensional domain, hence a field $K(x)$. With a left $K(x)$-basis of $D$, the determinant of $L_x$ over $K$ is $N_{K(x)/K}(x)^{m/[K(x):K]}$. Therefore the proposed value agrees on $K(x)$ with [F1]. Determinants of $L_{xy}=L_xL_y$ give multiplicativity. If $|y|\le|x|$ and $x\ne0$, apply the field inequality in $K(x^{-1}y)$ to $1+x^{-1}y$, and multiply by $x$; this gives $|x+y|\le|x|$. Cases involving zero are immediate. [F1, given, algebra]

2.1 Choose a $K$-basis of $D$ and its coordinate supremum norm $\|\cdot\|$. Its unit sphere is compact by [F2], being closed in the finite product of coordinate valuation rings. The continuous determinant polynomial has no zero there, so $|\cdot|_D$ has a positive minimum and a finite maximum on that sphere. For any nonzero vector rescale by a power of a $K$-uniformizer to reach the sphere. Scalar homogeneity gives constants $0<c\le C$ with $c\|x\|\le|x|_D\le C\|x\|$. Consequently $D$ is complete and its unit ball is a compact open $\mathcal O_K$-module lying between two scalar coordinate lattices. By [F3] it is free, and it has rank $m$ because it contains a coordinate lattice. [F2, F3, step 1.1, choose]

3.1 Since $w(x)=v_K(\det L_x)/m$, its value group is a subgroup of $(1/m)\mathbb Z$ containing $\mathbb Z$, hence is $(1/e)\mathbb Z$. Choose $\varpi$ of value $1/e$. The set $P=\{x:w(x)>0\}$ equals $\varpi\mathcal O_D=\mathcal O_D\varpi$; its $e$th power is $\pi_K\mathcal O_D$. Elements outside $P$ in $\mathcal O_D$ have inverses in $\mathcal O_D$, so $\mathcal O_D/P$ is a division ring. It is finite since $P$ is open in compact $\mathcal O_D$. Thus [F4] makes it a field $d$; the embedded residue field $k$ is central, and write $[d:k]=f$. [F4, step 2.1, choose, algebra]

4.1 The lattice rank says $\mathcal O_D/\pi_K\mathcal O_D$ has $k$-dimension $m$. Its filtration by $P^i$, $0\le i\le e$, has $e$ quotients. Left multiplication by $\varpi^i$ identifies each quotient additively and $k$-linearly with $\mathcal O_D/P$, so each has dimension $f$. Therefore $m=ef$. For $D=K$ these constructions give $e=f=1$. [step 2.1, step 3.1, algebra] ∎
