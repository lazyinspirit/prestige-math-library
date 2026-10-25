---
id: def-aqft-noninvertible-defect-fusion
kind: definition
title: "Finite semisimple fusion data for non-invertible defects"
status: "published"
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
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik, Tensor Categories, §§2.1–2.2, 2.10–2.11, 4.1, and 4.16"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "Monoidal associator and pentagon/triangle, printed pp. 21–24; duals and invertible objects, §§2.10–2.11, printed pp. 40–44; fusion-category definition and examples, §4.1, printed pp. 65–66; extension of (multi)fusion definitions to arbitrary fields, §4.16, printed p. 87."
    - title: "Christopher L. Douglas and David J. Reutter, Fusion 2-Categories and a State-Sum Invariant for 4-Manifolds, §§1.2.2–1.4.2 and 2.1.1–2.1.6"
      url: "https://arxiv.org/pdf/1812.11933"
      locator: "Simple and finite presemisimple 2-categories, §1.2.2, PDF pp. 13–14; separable monads and idempotent completeness, §§1.3.1–1.3.6, PDF pp. 21–23; finite semisimple 2-categories, §§1.4.1–1.4.2, PDF pp. 26–27; Gray-monoid coherence, object duals, and fusion 2-categories, §§2.1.1–2.1.6, PDF pp. 35–37."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Conventions

A strict $2$-category has objects and, for each ordered pair $(A,B)$, a category $\operatorname{Hom}_{\mathcal C}(A,B)$ whose objects are $1$-morphisms and whose morphisms are $2$-morphisms. It has identity $1$-morphisms and composition functors $\operatorname{Hom}_{\mathcal C}(B,C)\times\operatorname{Hom}_{\mathcal C}(A,B)\to\operatorname{Hom}_{\mathcal C}(A,C)$ that are strictly associative and unital. Morphisms in a Hom category compose vertically, denoted $\cdot$; the composition functors give horizontal composition, denoted $\circ_h$. Their functoriality is the interchange law: for vertically composable $2$-morphisms $\alpha_1,\alpha_2$ and $\beta_1,\beta_2$ with the indicated horizontal composites defined,
$$
(\beta_2\cdot\beta_1)\circ_h(\alpha_2\cdot\alpha_1)=(\beta_2\circ_h\alpha_2)\cdot(\beta_1\circ_h\alpha_1),
$$
and horizontal composition preserves identity $2$-morphisms. A strict $k$-linear $2$-category has $k$-vector spaces of $2$-morphisms, bilinear vertical and horizontal composition, and the same strict identity and composition laws. A strict $k$-linear $2$-functor assigns objects and functors on Hom categories, preserving identities and horizontal and vertical compositions as equalities; it is $k$-linear when each Hom functor is $k$-linear.

## Definition

Fix a field $k$. In the ordinary categorical case, a **finite semisimple fusion category over $k$** is a finite semisimple tensor category in the sense of the earlier fusion-and-multifusion definition. Concretely, it is a locally small category (each Hom collection is a set) whose Hom spaces are $k$-vector spaces and whose composition maps are $k$-bilinear. A monomorphism $u:Y\to X$ is a morphism for which precomposition $\operatorname{Hom}(Z,Y)\to\operatorname{Hom}(Z,X)$ is injective for every object $Z$; a subobject of $X$ is an isomorphism class of monomorphisms into $X$. An epimorphism is defined by the dual cancellation condition. The category is abelian: it has finite biproducts, kernels, and cokernels, every monomorphism is a kernel, and every epimorphism is a cokernel. Each Hom space is finite-dimensional, and every object has finite length, meaning a finite composition series with simple quotients. A simple object is nonzero with only the zero subobject and itself as subobjects; every object is a finite direct sum of simple objects, and only finitely many simple isomorphism classes occur. It has a $k$-bilinear tensor bifunctor, a tensor unit $\mathbf 1$ with $\operatorname{End}(\mathbf 1)\cong k$, and a natural associator $\alpha_{X,Y,Z}:(X\otimes Y)\otimes Z\to X\otimes(Y\otimes Z)$ and left and right unitors satisfying the pentagon and triangle axioms.

For an object $X$, a left dual $X^L$ consists of morphisms $\operatorname{ev}_L:X^L\otimes X\to\mathbf 1$ and $\operatorname{coev}_L:\mathbf 1\to X\otimes X^L$ for which
$$(\operatorname{id}_X\otimes\operatorname{ev}_L)\circ\alpha_{X,X^L,X}\circ(\operatorname{coev}_L\otimes\operatorname{id}_X)=\operatorname{id}_X, \qquad (\operatorname{ev}_L\otimes\operatorname{id}_{X^L})\circ\alpha^{-1}_{X^L,X,X^L}\circ(\operatorname{id}_{X^L}\otimes\operatorname{coev}_L)=\operatorname{id}_{X^L}.$$
A right dual $X^R$ consists of $\operatorname{ev}_R:X\otimes X^R\to\mathbf 1$ and $\operatorname{coev}_R:\mathbf 1\to X^R\otimes X$ for which
$$(\operatorname{ev}_R\otimes\operatorname{id}_X)\circ\alpha^{-1}_{X,X^R,X}\circ(\operatorname{id}_X\otimes\operatorname{coev}_R)=\operatorname{id}_X, \qquad (\operatorname{id}_{X^R}\otimes\operatorname{ev}_R)\circ\alpha_{X^R,X,X^R}\circ(\operatorname{coev}_R\otimes\operatorname{id}_{X^R})=\operatorname{id}_{X^R}.$$
The unitors are suppressed in these four composites. Rigidity means that each object has both kinds of dual.

For the ordinary fusion-category clauses below, write $\mathcal C$ for this category.

Choose representatives $i\in I$ of the finitely many simple-object isomorphism classes, with $0\in I$ representing $\mathbf 1$. For each $i,j,\ell\in I$, the **fusion multiplicity** $N_{ij}^{\ell}\in\mathbb Z_{\ge 0}$ is the number of copies of $\ell$ in a semisimple decomposition of $i\otimes j$, so $i\otimes j\cong\bigoplus_{\ell\in I}N_{ij}^{\ell}\ell$. The associated fusion space is $V_{ij}^{\ell}:=\operatorname{Hom}_{\mathcal C}(i\otimes j,\ell)$. For $D_\ell:=\operatorname{End}_{\mathcal C}(\ell)$, simplicity makes $D_\ell$ a finite-dimensional division $k$-algebra and $V_{ij}^{\ell}$ a left $D_\ell$-module by postcomposition; its rank as a left $D_\ell$-module is $N_{ij}^{\ell}$. When $D_\ell=k$ (in particular for absolutely simple objects), $\dim_k V_{ij}^{\ell}=N_{ij}^{\ell}$.

For simple $i,j,k,\ell$, the associator induces an isomorphism between the two fusion-channel spaces
$$\bigoplus_{m\in I} V_{mk}^{\ell}\otimes_{D_m}V_{ij}^{m} \xrightarrow{\ \cong\ } \bigoplus_{n\in I} V_{in}^{\ell}\otimes_{D_n}V_{jk}^{n}.$$
Here $V_{mk}^{\ell}$ is a right $D_m$-module by $g\cdot d=g\circ(d\otimes\operatorname{id}_k)$, $V_{ij}^{m}$ is a left $D_m$-module by $d\cdot f=d\circ f$, $V_{in}^{\ell}$ is a right $D_n$-module by $f\cdot d=f\circ(\operatorname{id}_i\otimes d)$, and $V_{jk}^{n}$ is a left $D_n$-module by postcomposition. The isomorphism is defined by the semisimple decomposition identifications with $\operatorname{Hom}_{\mathcal C}((i\otimes j)\otimes k,\ell)$ and $\operatorname{Hom}_{\mathcal C}(i\otimes(j\otimes k),\ell)$, and the middle map sends $h$ to $h\circ\alpha^{-1}_{i,j,k}$. Thus its domain and codomain are the stated fusion-channel spaces, not unspecified multiplicity symbols. In chosen decompositions and bases these are the associator matrices; their coherence is the pentagon. The fusion datum includes the actual associator, unitors, and both duality structures, not just the integers $N_{ij}^{\ell}$; the unitors satisfy the triangle and the dual maps satisfy the four displayed snake identities.

A **tensor-invertible object** $D$ is an object for which some object $E$ satisfies $D\otimes E\cong\mathbf 1$ and $E\otimes D\cong\mathbf 1$. An object with no such two-sided inverse is **non-invertible**. Simplicity and tensor-invertibility are separate properties: an object can be simple and non-invertible, or a direct sum of invertible simple objects and non-invertible as a whole.

For the **finite semisimple fusion 2-category** convention, assume that $k$ is algebraically closed of characteristic zero. A strict $k$-linear 2-category $\mathcal C$ has objects $A,B,\ldots$, a $k$-linear category $\operatorname{Hom}_{\mathcal C}(A,B)$ for each ordered pair, 1-morphisms as its objects, and 2-morphisms as its morphisms; horizontal composition is $k$-bilinear and strictly associative and unital, and satisfies interchange. A $k$-linear category is one whose morphism spaces are $k$-vector spaces and whose composition is $k$-bilinear. A finite semisimple $k$-linear category is an abelian $k$-linear category with finite-dimensional Hom spaces, finitely many isomorphism classes of simple objects, and every object a finite direct sum of simple objects; in each such category a simple object is nonzero with no nonzero proper subobject, using the ordinary categorical subobject convention above.

A functor between categories is **fully faithful** when it induces a bijection on morphism sets for each pair of objects. For 1-morphisms $p:A\to B$ and $q:B\to A$, an adjunction $p\dashv q$ consists of 2-morphisms (unit) $\eta:\operatorname{id}_A\Rightarrow q\circ p$ and (counit) $\epsilon:p\circ q\Rightarrow\operatorname{id}_B$ satisfying $(\epsilon\star p)\cdot(p\star\eta)=\operatorname{id}_p$ and $(q\star\epsilon)\cdot(\eta\star q)=\operatorname{id}_q$, where $\star$ denotes whiskering by 1-morphisms and $\cdot$ denotes vertical composition of 2-morphisms. A 1-morphism $f:A\to B$ is **adjointable** when there are 1-morphisms $l,r:B\to A$ with $l\dashv f\dashv r$, with each adjunction carrying the unit, counit, and triangle identities just specified.

A zero object $0$ is an object for which each Hom category $\operatorname{Hom}_{\mathcal C}(X,0)$ and $\operatorname{Hom}_{\mathcal C}(0,X)$ is equivalent to the zero category, the category with one object and one morphism. A zero 1-morphism is a zero object in its Hom category. A 1-morphism $f:A\to B$ is **fully faithful** when for every object $X$, postcomposition with $f$ gives a fully faithful functor $\operatorname{Hom}_{\mathcal C}(X,A)\to\operatorname{Hom}_{\mathcal C}(X,B)$. A **subobject** of $B$ is an equivalence class of fully faithful 1-morphisms $f:A\to B$, where $f:A\to B$ and $g:A'\to B$ represent the same class exactly when there is an equivalence $u:A\to A'$ and an invertible 2-morphism $g\circ u\Rightarrow f$. A zero subobject is represented by a fully faithful 1-morphism whose domain is equivalent to a zero object. A 1-morphism $f:A\to B$ is an equivalence if there is a 1-morphism $g:B\to A$ and invertible 2-morphisms $g\circ f\Rightarrow\operatorname{id}_A$ and $f\circ g\Rightarrow\operatorname{id}_B$; two objects are equivalent when there is such an equivalence between them. A nonzero object (one not equivalent to a zero object) is **simple** when all its subobjects are represented by either a zero-domain 1-morphism or an equivalence.

An additive category is a category with a zero object and finite biproducts. A 2-category is **additive** when each Hom category is additive in this sense, it has a zero object, and finite direct sums of objects exist. For $A_1,A_2$, a direct sum $A_1\oplus A_2$ has inclusions $\iota_i:A_i\to A_1\oplus A_2$ and projections $\rho_i:A_1\oplus A_2\to A_i$ with $\rho_i\iota_i\cong\operatorname{id}_{A_i}$, $\rho_i\iota_j$ a zero 1-morphism for $i\ne j$, and $\operatorname{id}_{A_1\oplus A_2}\cong\iota_1\rho_1\oplus\iota_2\rho_2$ in its endomorphism category.

A **monad** on $B$ is a 1-morphism $E:B\to B$ with unit $\eta:\operatorname{id}_B\Rightarrow E$ and multiplication $m:E\circ E\Rightarrow E$ satisfying
$$
m\cdot(\eta\star E)=\operatorname{id}_E=m\cdot(E\star\eta),\qquad m\cdot(m\star E)=m\cdot(E\star m).
$$
It is **separable** when there is an $E$-bimodule 2-morphism $c:E\Rightarrow E\circ E$ such that
$$
c\cdot m=(m\star E)\cdot(E\star c)=(E\star m)\cdot(c\star E),\qquad m\cdot c=\operatorname{id}_E.
$$
The first equation says that $c$ respects the left and right $E$-actions, and the second says that it is a section of multiplication. An isomorphism of monads $\tau:E\Rightarrow F$ is an invertible 2-morphism respecting the units and multiplications: $\tau\cdot\eta_E=\eta_F$ and $\tau\cdot m_E=m_F\cdot(F\star\tau)\cdot(\tau\star E)$.

A **separable splitting** of $E:B\to B$ consists of an object $A$, an adjunction $\rho\dashv\iota$ with $\rho:B\to A$, $\iota:A\to B$, unit $\theta:\operatorname{id}_B\Rightarrow\iota\circ\rho$, and counit $\epsilon:\rho\circ\iota\Rightarrow\operatorname{id}_A$, a 2-morphism section $s:\operatorname{id}_A\Rightarrow\rho\circ\iota$ with $\epsilon\cdot s=\operatorname{id}_{\operatorname{id}_A}$, and an isomorphism of monads $E\cong\iota\circ\rho$, where $\iota\circ\rho$ has unit $\theta$ and multiplication $\iota\star\epsilon\star\rho$. A 2-category is **finite semisimple** when its Hom categories are finite semisimple, every 1-morphism is adjointable, it is additive, every separable monad has a separable splitting, and it has finitely many equivalence classes of simple objects.

Use the following semistrict monoidal 2-category convention (a Gray monoid). It adds a unit object $I$, strict $k$-linear 2-functors $L_A=A\otimes-$ and $R_A=-\otimes A$ for every object $A$, and for every pair of 1-morphisms $f:A\to A'$ and $g:B\to B'$ an invertible interchanger
$$\phi_{f,g}:(f\otimes B')\circ(A\otimes g)\Rightarrow(A'\otimes g)\circ(f\otimes B).$$
Write $A\otimes B=L_A(B)=R_B(A)$. The tensor is strictly unital and associative: $L_I=R_I=\operatorname{id}$, $L_A L_B=L_{A\otimes B}$, $R_B R_A=R_{A\otimes B}$, and $L_A R_B=R_B L_A$. The interchanger is the identity when either 1-morphism is an identity, is natural in both 2-morphisms, is compatible with composition in each 1-morphism variable, and is compatible with tensoring by an object in either variable. These are coherence axioms on the data, not consequences of a fusion table.

An object $A^R$ is a right dual of $A$ when there are evaluation and coevaluation 1-morphisms $e_R:A\otimes A^R\to I$ and $i_R:I\to A^R\otimes A$ and invertible 2-morphisms exhibiting $(e_R\otimes A)\circ(A\otimes i_R)\cong\operatorname{id}_A$ and $(A^R\otimes e_R)\circ(i_R\otimes A^R)\cong\operatorname{id}_{A^R}$. A left dual $A^L$ has evaluation $e_L:A^L\otimes A\to I$ and coevaluation $i_L:I\to A\otimes A^L$, with invertible 2-morphisms exhibiting $(A\otimes e_L)\circ(i_L\otimes A)\cong\operatorname{id}_A$ and $(e_L\otimes A^L)\circ(A^L\otimes i_L)\cong\operatorname{id}_{A^L}$. A **fusion 2-category** in this convention is a finite semisimple monoidal 2-category in which every object has left and right duals and the monoidal unit is simple.

Neither finite semisimplicity nor either categorical definition asserts unitarity: a dagger structure, positivity, and any unitary coherence are additional hypotheses and data. These are abstract mathematical structures. They do not construct defect operators or junctions in a quantum field theory, specify spacetime support, or prove topological invariance; a physical realization requires a separately specified model and its own construction and proof.

The ordinary associator pentagon below displays the two composites that the axiom requires to agree. This diagram records that axiom; no proof or example verification relies on the drawing.

```tikzcd
& (((W\otimes X)\otimes Y)\otimes Z) \arrow[rr,"\alpha_{W\otimes X,Y,Z}"] \arrow[dl,"\alpha_{W,X,Y}\otimes 1_Z"'] & & (W\otimes X)\otimes(Y\otimes Z) \arrow[dr,"\alpha_{W,X,Y\otimes Z}"] & \\
(W\otimes(X\otimes Y))\otimes Z \arrow[rr,"\alpha_{W,X\otimes Y,Z}"'] & & W\otimes((X\otimes Y)\otimes Z) \arrow[rr,"1_W\otimes\alpha_{X,Y,Z}"'] & & W\otimes(X\otimes(Y\otimes Z))
```

## Definition references

[[def-fusion-and-multifusion-category|Fusion and multifusion categories]]

[[def-monoidal-category|Monoidal category]]

[Etingof, Gelaki, Nikshych, and Ostrik, *Tensor Categories*, §§2.1–2.2, 2.10–2.11, 4.1, and 4.16](https://math.mit.edu/~etingof/egnobookfinal.pdf)

[Douglas and Reutter, *Fusion 2-Categories and a State-Sum Invariant for 4-Manifolds*, §§1.2.2–1.4.2 and 2.1.1–2.1.6](https://arxiv.org/pdf/1812.11933)

## Remarks

For the rank assertion in the Definition, choose a semisimple decomposition $i\otimes j\cong\bigoplus_{r\in I}r^{\oplus N_{ij}^{r}}$. A nonzero morphism $f:r\to\ell$ between simple objects has zero kernel, since a nonzero kernel would have to be all of $r$, and has image all of $\ell$, since the image is a nonzero subobject of the simple object $\ell$. Thus $f$ is both monic and epic, hence an isomorphism in the abelian category. Therefore $\operatorname{Hom}(r,\ell)=0$ for $r\ne\ell$, while $\operatorname{Hom}(\ell,\ell)=D_\ell$ and every nonzero element of $D_\ell$ is invertible. Applying $\operatorname{Hom}_{\mathcal C}(-,\ell)$ to the finite direct sum gives $V_{ij}^{\ell}\cong D_\ell^{\oplus N_{ij}^{\ell}}$ as a left $D_\ell$-module by postcomposition. Its rank is therefore $N_{ij}^{\ell}$.
