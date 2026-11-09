---
id: lem-regular-zero-koszul-euler-class
kind: lemma
title: Euler class of a regular bundle functional
status: draft
domain: mathematics
deps:
  - def-exterior-determinant-bundles
  - math:cor-koszul-complex-resolves-a-regular-quotient
  - math:def-koszul-complex-of-a-sequence-with-coefficients
  - def-scheme-perfect-complexes
  - def-nonconnective-k-spectrum-interface
  - def-vector-bundle-classes
  - thm-author-3a003d7b5208-nonconnective-k-zero-input
  - math:def-axiom-of-choice
dependency_roles:
  def-exterior-determinant-bundles: mathematical-premise
  math:cor-koszul-complex-resolves-a-regular-quotient: mathematical-premise
  math:def-koszul-complex-of-a-sequence-with-coefficients: mathematical-premise
  def-scheme-perfect-complexes: mathematical-premise
  def-nonconnective-k-spectrum-interface: mathematical-premise
  def-vector-bundle-classes: mathematical-premise
  thm-author-3a003d7b5208-nonconnective-k-zero-input: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 12
---

## Statement
Assume the Axiom of Choice and the suitable universes used in the supplied K-theory construction. Let $X$ be a quasi-compact, quasi-separated scheme, $E$ a finite locally free $\mathcal O_X$-module of constant rank $r\geq 0$, and $s:E\to\mathcal O_X$ a functional. Let $I=\operatorname{im}(s)$ and let $Z=Z(s)$ be the closed subscheme defined by $I$. Suppose that at every point $x\in Z$, the values of $s$ on a local basis of $E_x$ form a regular sequence in $\mathcal O_{X,x}$ of length $r$: successively, each value is a non-zero-divisor modulo its predecessors and the final quotient is nonzero. For $r=0$ the sequence is empty and $Z=X$.

The Koszul complex $K(s)$ has $\Lambda^iE$ in cohomological degree $-i$, with differential given by contraction with $s$. It is a perfect complex supported on the underlying closed set of $Z$, and its augmentation is a quasi-isomorphism $K(s)\to\mathcal O_Z$. Define the supported Euler class $e_Z(s)\in K_{0,Z}(X)$ to be the K-zero class of this complex. Under the map induced by the inclusion of supported perfect complexes into all perfect complexes, it maps to

$$\lambda_{-1}(E)=\sum_{i=0}^r(-1)^i[\Lambda^iE]\in K_0(X).$$

For a section $t:\mathcal O_X\to E$, the corresponding functional is $t^\vee:E^\vee\to\mathcal O_X$; under the same regularity hypothesis for its coordinates, the formula uses $E^\vee$ in place of $E$.

## Statement references

[[def-exterior-determinant-bundles]]

[[def-nonconnective-k-spectrum-interface]]

## Facts & Assumptions
**Given:** $X$, $E$, $s$ and the regularity hypothesis in the statement, together with choice and the stated universes.

**Goal:** Construct the supported class, prove the resolution and calculate its image in $K_0(X)$, including the section convention.

[F1] Exterior powers of a finite locally free rank-$r$ module are finite locally free, vanish above degree $r$, and have the usual increasing-wedge bases locally. [[def-exterior-determinant-bundles]]

[F2] For a finite sequence in a commutative ring, the Koszul differential is the alternating deletion formula. If the sequence is regular, its Koszul complex on the ring is a finite free resolution of the quotient by the sequence. [[math:def-koszul-complex-of-a-sequence-with-coefficients]] [[math:cor-koszul-complex-resolves-a-regular-quotient]]

[F3] A bounded complex of finite locally free sheaves is perfect. A perfect complex is supported on a closed set precisely when its restriction to the complement is acyclic; the supported perfect objects form a stable idempotent-complete category. [[def-scheme-perfect-complexes]]

[F4] For qcqs $X$, the supplied K-theory assigns spectra to the perfect and supported perfect categories and a map to the ambient spectrum induced by inclusion. For an essentially small idempotent-complete stable category, its degree-zero group is naturally the group on object classes with the cofiber relations. Bundle classes agree with the object classes of the corresponding degree-zero complexes. [[def-nonconnective-k-spectrum-interface]] [[thm-author-3a003d7b5208-nonconnective-k-zero-input]] [[def-vector-bundle-classes]]

## Proof
**Proof technique:** Construct the Koszul differential locally, check exactness on stalks, and use the finite filtration by cohomological degree.

1.1 For local sections $v_1,\ldots,v_i$ of $E$, define contraction by $d(v_1\wedge\cdots\wedge v_i)=\sum_{j=1}^i(-1)^{j-1}s(v_j)v_1\wedge\cdots\widehat{v_j}\cdots\wedge v_i$. This formula is alternating and compatible with restriction, so it defines a global map $\Lambda^iE\to\Lambda^{i-1}E$. In a local basis it is the differential in [F2]; hence $d^2=0$ locally and therefore globally. The quotient map $\mathcal O_X\to\mathcal O_X/I=\mathcal O_Z$ is an augmentation because its composite with $d:E\to\mathcal O_X$ is zero. [F1, F2, construct]

2.1 At $x\in Z$, choose a basis of the free stalk $E_x$. The stalk of the complex is the Koszul complex of the corresponding values of $s$; the regularity hypothesis and [F2] give homology only in degree zero, where it is $\mathcal O_{X,x}/I_x$. At $x\notin Z$, some value of $s_x$ is a unit. If $v\in E_x$ satisfies $s_x(v)=1$, exterior multiplication by $v$ is a contracting homotopy: the contraction formula gives $d(v\wedge w)+v\wedge d(w)=w$. The quotient stalk is also zero there. Thus the augmentation induces an isomorphism on every cohomology stalk and is a quasi-isomorphism. For $r=0$ this says $\mathcal O_X\to\mathcal O_X$ is an isomorphism. [F2, step 1.1, assume-hyp, construct]

3.1 By [F1], $K(s)$ is bounded with finite locally free terms, so it is perfect. Step 2.1 shows it is acyclic away from $Z$; by [F3] it is an object of $\operatorname{Perf}_Z(X)$. Its object class in the degree-zero K-group is therefore well-defined, and this is the stated $e_Z(s)$. The construction uses the underlying closed set for support; it does not identify supported K-theory with coherent-sheaf G-theory. [F1, F3, F4, step 2.1]

4.1 In the ambient perfect category, filter $K(s)$ by its subcomplexes consisting of the terms in degrees at least a fixed integer. Each successive quotient is a single term $\Lambda^iE$ placed in degree $-i$, and the short exact sequence of complexes is degreewise split. Its associated cofiber sequence gives the corresponding additive relation in [F4]. A shift changes the sign of an object class: the cofiber sequence $A\to0\to A[1]$ gives $[A[1]]=-[A]$. Iterating the finite filtration yields $[K(s)]=\sum_{i=0}^r(-1)^i[\Lambda^iE]$. Naturality of the object-class map sends $e_Z(s)$ to $[K(s)]$ under inclusion, proving the displayed formula. [F4, step 3.1, algebra]

5.1 A section $t$ gives the dual map $t^\vee:E^\vee\to\mathcal O_X$ by evaluation, and its values in a dual basis are the coordinates of $t$ in the original basis. The dual of a finite locally free module is finite locally free of the same rank. Applying steps 1.1 through 4.1 to $t^\vee$ under the stated regularity hypothesis gives the section formula with $E^\vee$. [F1, step 4.1, assume-hyp] ∎
