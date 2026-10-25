---
id: def-aqft-noninvertible-defect-fusion
kind: definition
title: "Finite semisimple fusion data for non-invertible defects"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
dependency_level: 0
deps:
  - def-fusion-and-multifusion-category
  - def-monoidal-category
dependency_roles:
  def-fusion-and-multifusion-category: mathematical-premise
  def-monoidal-category: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik, Tensor Categories, §§2.1–2.2, 2.10–2.11, and 4.1"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "Monoidal associator and pentagon/triangle, printed pp. 21–24; duals and invertible objects, §§2.10–2.11, printed pp. 40–44; fusion-category definition and examples, §4.1, printed pp. 65–66."
    - title: "Christopher L. Douglas and David J. Reutter, Fusion 2-Categories and a State-Sum Invariant for 4-Manifolds, §§1.2.2–1.4.2 and 2.1.1–2.1.6"
      url: "https://arxiv.org/pdf/1812.11933"
      locator: "Simple and finite presemisimple 2-categories, §1.2.2, PDF pp. 13–14; separable monads and idempotent completeness, §§1.3.1–1.3.6, PDF pp. 21–23; finite semisimple 2-categories, §§1.4.1–1.4.2, PDF pp. 26–27; Gray-monoid coherence, object duals, and fusion 2-categories, §§2.1.1–2.1.6, PDF pp. 35–37."
verification:
  precheck: n/a
---

## Definition

Fix a field $k$. In the ordinary categorical case, a **finite semisimple fusion category over $k$** is a finite semisimple tensor category in the sense of the earlier fusion-and-multifusion definition. Concretely, it is a locally small category whose Hom spaces are $k$-vector spaces and whose composition maps are $k$-bilinear. It is abelian: finite biproducts, kernels, and cokernels exist, every monomorphism is a kernel, and every epimorphism is a cokernel. Each Hom space is finite-dimensional, and every object has finite length, meaning a finite composition series with simple quotients. A simple object is nonzero with no subobject except zero and itself; every object is a finite direct sum of simple objects, and only finitely many simple isomorphism classes occur. It has a $k$-bilinear tensor bifunctor, a tensor unit $\mathbf 1$ with $\operatorname{End}(\mathbf 1)\cong k$, and a natural associator $\alpha_{X,Y,Z}:(X\otimes Y)\otimes Z\to X\otimes(Y\otimes Z)$ and left and right unitors satisfying the pentagon and triangle axioms. It is rigid: every object has left and right duals with evaluation and coevaluation morphisms satisfying the corresponding two snake identities.

Choose representatives $i\in I$ of the finitely many simple-object isomorphism classes, with $0\in I$ representing $\mathbf 1$. For each $i,j\in I$, the **fusion multiplicity** $N_{ij}^{\ell}\in\mathbb Z_{\ge 0}$ is the multiplicity of the simple object $\ell$ in a semisimple decomposition of $i\otimes j$, so $i\otimes j\cong\bigoplus_{\ell\in I}N_{ij}^{\ell}\ell$. Choose left and right duals $i^L,i^R$ with their evaluation and coevaluation maps. The fusion datum includes the actual associator, unitors, and duality maps, not just the integers $N_{ij}^{\ell}$. In chosen direct-sum decompositions the associator induces invertible maps between the corresponding multiplicity spaces; these maps must obey the pentagon, and the unitors must obey the triangle. The evaluation and coevaluation maps must obey both snake identities.

A **tensor-invertible object** $D$ is an object for which some object $E$ satisfies $D\otimes E\cong\mathbf 1$ and $E\otimes D\cong\mathbf 1$. An object with no such two-sided inverse is **non-invertible**. Simplicity and tensor-invertibility are separate properties: an object can be simple and non-invertible, or a direct sum of invertible simple objects and non-invertible as a whole.

For the **finite semisimple fusion 2-category** convention, assume that $k$ is algebraically closed of characteristic zero. A strict $k$-linear 2-category has objects, a $k$-linear Hom category for each ordered pair of objects, 1-morphisms as objects of those Hom categories, 2-morphisms as their morphisms, and strictly associative and unital horizontal composition satisfying interchange. A 1-morphism is **adjointable** when it has left and right adjoint 1-morphisms with unit and counit 2-morphisms satisfying the two triangle identities. A 1-morphism $f:A\to B$ is fully faithful when, for every object $X$, postcomposition with $f$ gives a fully faithful functor $\operatorname{Hom}(X,A)\to\operatorname{Hom}(X,B)$. A zero object $0$ is an object for which each Hom category $\operatorname{Hom}(X,0)$ and $\operatorname{Hom}(0,X)$ is equivalent to the category with one object and one morphism; a zero subobject is a fully faithful 1-morphism whose domain is equivalent to a zero object. Two objects are equivalent when there are 1-morphisms in both directions whose composites are 2-isomorphic to the respective identity 1-morphisms. A nonzero object is **simple** when every fully faithful subobject of it is either zero or an equivalence.

A 2-category is **finite semisimple** when each Hom category is a finite semisimple $k$-linear category, every 1-morphism is adjointable, the 2-category is additive, every separable monad splits, and there are finitely many equivalence classes of simple objects. Additive means that zero objects and finite direct sums of objects exist and each Hom category is additive. Here a monad is a 1-endomorphism $E:B\to B$ with unit and multiplication 2-morphisms $\eta:\operatorname{id}_B\Rightarrow E$ and $m:E\circ E\Rightarrow E$ satisfying the unit and associativity laws. It is separable when $m$ has a section $c:E\Rightarrow E\circ E$ that respects the left and right $E$-actions and satisfies $m\circ c=\operatorname{id}_E$. A separable splitting is a separable adjunction $\iota:A\rightleftarrows B:\rho$ for which $E\cong\iota\circ\rho$ as monads; separability of the adjunction means that its counit has a 2-morphism section.

Use the following semistrict monoidal 2-category convention (a Gray monoid). It adds a unit object $I$, strict $k$-linear 2-functors $L_A=A\otimes-$ and $R_A=-\otimes A$ for every object $A$, and for every pair of 1-morphisms $f:A\to A'$ and $g:B\to B'$ an invertible interchanger
$$\phi_{f,g}:(f\otimes B')\circ(A\otimes g)\Rightarrow(A'\otimes g)\circ(f\otimes B).$$
Write $A\otimes B=L_A(B)=R_B(A)$. The tensor is strictly unital and associative: $L_I=R_I=\operatorname{id}$, $L_A L_B=L_{A\otimes B}$, $R_B R_A=R_{A\otimes B}$, and $L_A R_B=R_B L_A$. The interchanger is the identity when either 1-morphism is an identity, is natural in both 2-morphisms, is compatible with composition in each 1-morphism variable, and is compatible with tensoring by an object in either variable. These are coherence axioms on the data, not consequences of a fusion table.

An object $A^\#$ is a right dual of $A$ when there are evaluation and coevaluation 1-morphisms $e:A\otimes A^\#\to I$ and $i:I\to A^\#\otimes A$ and invertible 2-morphisms exhibiting $(e\otimes A)\circ(A\otimes i)\cong\operatorname{id}_A$ and $(A^\#\otimes e)\circ(i\otimes A^\#)\cong\operatorname{id}_{A^\#}$; left duals use the reversed order. A **fusion 2-category** in this convention is a finite semisimple monoidal 2-category in which every object has left and right duals and the monoidal unit is simple.

Neither finite semisimplicity nor either categorical definition asserts unitarity: a dagger structure, positivity, and any unitary coherence are additional hypotheses and data. These are abstract mathematical structures. They do not construct defect operators or junctions in a quantum field theory, specify spacetime support, or prove topological invariance; a physical realization requires a separately specified model and its own construction and proof.

The ordinary associator pentagon below displays the two composites that the axiom requires to agree. This diagram records that axiom; no proof or example verification relies on the drawing.

```tikzcd
& (((W\otimes X)\otimes Y)\otimes Z) \arrow[rr,"\alpha_{W\otimes X,Y,Z}"] \arrow[dl,"\alpha_{W,X,Y}\otimes 1_Z"'] & & (W\otimes X)\otimes(Y\otimes Z) \arrow[dr,"\alpha_{W,X,Y\otimes Z}"] & \\
(W\otimes(X\otimes Y))\otimes Z \arrow[rr,"\alpha_{W,X\otimes Y,Z}"'] & & W\otimes((X\otimes Y)\otimes Z) \arrow[ur,"1_W\otimes\alpha_{X,Y,Z}"'] & & W\otimes(X\otimes(Y\otimes Z))
```

## Definition references

[[def-fusion-and-multifusion-category|Fusion and multifusion categories]]

[[def-monoidal-category|Monoidal category]]

[Etingof, Gelaki, Nikshych, and Ostrik, *Tensor Categories*, §§2.1–2.2, 2.10–2.11, and 4.1](https://math.mit.edu/~etingof/egnobookfinal.pdf)

[Douglas and Reutter, *Fusion 2-Categories and a State-Sum Invariant for 4-Manifolds*, §§1.2.2–1.4.2 and 2.1.1–2.1.6](https://arxiv.org/pdf/1812.11933)
