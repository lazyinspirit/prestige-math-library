---
id: thm-brauer-group-finite-field-zero
kind: theorem
title: "The Brauer group of a finite field is zero"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-brauer-group-as-galois-cohomology
  - def-simple-module
  - def-semisimple-module
  - def-semisimple-ring
  - thm-wedderburn-artin-theorem
  - lem-finite-division-rings-are-fields
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03, Chapter IV, Theorem 4.1"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
    - title: "Romyar Sharifi, Algebraic Number Theory, Chapter 8, finite-field class formation"
      url: "https://www.math.ucla.edu/~sharifi/algnum.pdf"
axiom_use: None. Only finite algebra and the algebraic similarity-class definition of the Brauer group are used.
verification: {}
---

## Statement

For every finite field $k=\mathbb F_q$, the Brauer group in its algebraic similarity-class definition vanishes:
$$\operatorname{Br}(k)=0.$$
In fact every finite-dimensional central simple $k$-algebra is isomorphic, as a $k$-algebra, to $M_n(k)$ for some integer $n\ge1$. No choice axiom is assumed. Here two central simple algebras $B,C$ are similar if $B\otimes_k M_r(k)\cong C\otimes_k M_s(k)$ as $k$-algebras for some $r,s\ge1$; the class of $k$ is the zero class.

## Statement references

[[def-brauer-group-as-galois-cohomology]]

[J. S. Milne, *Class Field Theory*, Chapter IV, Theorem 4.1](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

## Facts & Assumptions

**Given:** A finite field $k$ and an arbitrary finite-dimensional central simple $k$-algebra $A$.

[F1] The algebraic definition of $\operatorname{Br}(k)$ is the group of similarity classes of finite-dimensional central simple $k$-algebras: their center is $k$ and they have no nonzero proper two-sided ideals. Matrix algebras represent the class of $k$, which is zero. Only this algebraic convention is used, not the comparison with continuous cohomology or the existence of a separable closure. [[def-brauer-group-as-galois-cohomology]]

[F2] A simple left module is nonzero and has no nonzero proper submodule. A semisimple module is an internal direct sum of simple submodules, and a ring is semisimple when its left regular module is semisimple. [[def-simple-module]] [[def-semisimple-module]] [[def-semisimple-ring]]

[F3] A nonzero unital semisimple ring is isomorphic to a finite product $\prod_{i=1}^r M_{n_i}(D_i)$, where $r,n_i\ge1$ and the $D_i$ are division rings. This published theorem has no choice hypothesis. [[thm-wedderburn-artin-theorem]]

[F4] Every finite division ring is a commutative field. The local proof uses a least finite counterexample, its finite multiplicative class equation, and cyclotomic polynomial values. [[lem-finite-division-rings-are-fields]]

## Proof

**Proof technique:** finite minimal left ideals, Wedderburn–Artin, and finite-division-ring commutativity.

1.1 A finite basis of $A$ over $k$ identifies its underlying set with $k^d$ for some finite $d$, so $A$ is a finite nonzero ring. Its set of left ideals is finite. In particular it has a minimal nonzero left ideal: choose a nonzero left ideal of least cardinality. Each such ideal is a simple left $A$-module by [F2]. [F1, F2, given, choose, algebra]

2.1 Let $S$ be the sum of all minimal nonzero left ideals of $A$. This is a finite sum and is a nonzero left ideal. Right multiplication by $a\in A$ is a left-module homomorphism; on any simple left ideal $I$ its kernel is $0$ or $I$. Thus its image $Ia$ is zero or a simple left ideal, so $Sa\subseteq S$. Consequently $S$ is a nonzero two-sided ideal. Simplicity of $A$ in [F1] forces $S=A$. [F1, F2, step 1.1, construct, algebra]

3.1 Among all submodules $T\subseteq A$ which are finite internal direct sums of minimal nonzero left ideals, choose one of largest cardinality; this is possible because $A$ is finite and the empty sum $0$ is allowed. If $T\ne A$, step 2.1 gives a minimal nonzero left ideal $I$ not contained in $T$. Its submodule $I\cap T$ must be zero by simplicity of $I$. Thus $T+I=T\oplus I$ is a strictly larger submodule of the same kind, contradicting maximal cardinality. Hence $T=A$ and its left regular module is a finite direct sum of simple modules. By [F2], $A$ is semisimple. Every choice here is from a single finite set. [F2, step 1.1, step 2.1, choose, algebra]

4.1 Apply [F3] to obtain $A\cong\prod_{i=1}^rM_{n_i}(D_i)$. If $r>1$, one factor times zero in all other coordinates is a nonzero proper two-sided ideal. This contradicts simplicity of $A$. Therefore $r=1$ and a unital ring isomorphism $\phi:A\to M_n(D)$ exists for a division ring $D$ and $n\ge1$. [F1, F3, step 3.1, construct, algebra]

5.1 The corner $e_{11}M_n(D)e_{11}$ is isomorphic to $D$ as a ring, and it is a subset of the finite ring $M_n(D)\cong A$. Thus $D$ is finite, so [F4] makes it commutative. The center of $M_n(D)$ is then exactly the scalar matrices: commuting with every $e_{ii}$ forces a central matrix to be diagonal, and commuting with every $e_{ij}$ forces all diagonal entries equal. The same conclusion for $n=1$ follows from commutativity of $D$. Since $Z(A)=k$, restriction of $\phi$ gives a field isomorphism $\theta:k\to D$ via $\phi(c)=\theta(c)I_n$. Applying $\theta^{-1}$ entrywise after $\phi$ gives a $k$-algebra isomorphism $A\cong M_n(k)$. [F1, F4, step 1.1, step 4.1, construct, algebra]

6.1 The algebra $A$ was arbitrary. Step 5.1 shows that every similarity class in the algebraic Brauer group is the class of a matrix algebra over $k$, hence the zero class by [F1]. Therefore $\operatorname{Br}(k)=0$, including $k=\mathbb F_2$ and the already split case $A=k$. No separable closure, infinite basis, cohomological direct limit, AC, DC, or countable choice was used. [F1, step 5.1, algebra] ∎
