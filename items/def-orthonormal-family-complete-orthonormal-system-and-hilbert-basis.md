---
id: def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis
kind: definition
title: Orthonormal families, complete orthonormal systems and Hilbert bases
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-hilbert-space, def-real-and-complex-inner-product-space, def-orthogonality-and-orthogonal-complement, def-linear-subspace]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — Definition 2.62 and Exercise 2.63, p.87"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §2.1, pp.47–48"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Definition

Let $H$ be a real or complex inner-product space ([[def-real-and-complex-inner-product-space]]), with inner
product linear in the first argument and conjugate-linear in the second, and
with the induced length $\|v\|=\sqrt{\langle v,v\rangle}$. The definitions below
do not require completeness. When the term *Hilbert basis* is used, $H$ is
additionally assumed complete ([[def-hilbert-space]]).

**Orthonormal indexed family.** Let $I$ be any set. An indexed family
$(e_i)_{i\in I}$ of vectors of $H$ is **orthonormal** when

$$\langle e_i,e_j\rangle=\delta_{ij}:=\begin{cases}1,&i=j,\\0,&i\ne j,\end{cases} \qquad\text{for all } i,j\in I .$$Because $1\ne 0$ in the scalar field, the family contains no zero vector: $\|e_i\|^2=\langle e_i,e_i\rangle=1$, so $\|e_i\|=1$ for every $i$ ([[def-real-and-complex-inner-product-space]]); and the index map is injective, since $e_i=e_j$ with $i\ne j$ would give $0=\langle e_i,e_j\rangle=1$. Thus an orthonormal family is the same thing as an orthonormal set together with a labelling of it, and in the sequel no choice is hidden in passing between the two descriptions. **Orthonormal set.** A subset $S\subseteq H$ is **orthonormal** when every $s\in S$ has $\|s\|=1$ and $\langle s,t\rangle=0$ for all distinct $s,t\in S$. For such an $S$ the family $(e_s)_{s\in S}$ with $e_s:=s$ is orthonormal in the indexed sense, and the image of an orthonormal indexed family is an orthonormal set. Orthogonal means $\langle s,t\rangle=0$ ([[def-orthogonality-and-orthogonal-complement]]). **Independence and unique coefficients.** Let $(e_i)_{i\in I}$ be orthonormal, let $F\subseteq I$ be finite, and let scalars $c_i$ satisfy $\sum_{i\in F}c_ie_i=0$. For each fixed $j\in F$, linearity in the first argument gives$$0=\Bigl\langle \sum_{i\in F}c_ie_i,\;e_j\Bigr\rangle=\sum_{i\in F}c_i\langle e_i,e_j\rangle=c_j ,$$

so every finite subfamily of an orthonormal family is linearly independent. In
particular the coefficients in a finite expansion are unique: if
$\sum_{i\in F}c_ie_i=\sum_{i\in F}d_ie_i$, then applying the computation to
$c-d$ gives $c_i=d_i$ for every $i\in F$.

**Closed linear span and completeness.** The **span** of an indexed family is
the set of all finite linear combinations $\sum_{i\in F}c_ie_i$ with $F\subseteq I$
finite and scalars $c_i$; it is the smallest linear subspace of $H$ containing
every $e_i$ ([[def-linear-subspace]]). Its closure in the induced norm is the
**closed linear span** of the family, the smallest closed linear subspace of $H$
containing every $e_i$. The family is **complete**, or is a **complete
orthonormal system**, when its closed linear span is all of $H$. A
**Hilbert basis**, or **orthonormal basis**, of $H$ is a complete orthonormal
family in $H$.

**The empty family.** The span of the empty family is $\{0\}$, which is already
closed, so the empty family is complete exactly when $H=\{0\}$. Thus the zero
Hilbert space always has a Hilbert basis, namely the empty one.

**Not a Hamel basis, and no order is assumed.** A Hilbert basis is a basis only
in the sense of closed linear span: for an infinite-dimensional $H$ the vectors
of $H$ are in general **not** finite linear combinations of a Hilbert basis, and
the expansion of an arbitrary vector is a norm limit of finite partial sums, not
a finite sum. No enumeration, ordering or countability of the index set is part
of the definition; the partial sums are indexed by the finite subsets of $I$,
ordered by inclusion, and that is the convention used on this page.

**Coefficient notation.** For orthonormal $(e_i)_{i\in I}$ and $x\in H$ the
scalars $\langle x,e_i\rangle$ are the **coefficients** of $x$ with respect to
the family. They are well defined for every $x$, without any assumption that
the family is complete.
