---
id: def-quiver-representation-stacks-and-exact-sequence-correspondences
kind: definition
title: "Representation stacks and exact-sequence correspondences of a finite quiver"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-path-ring-of-a-finite-quiver-over-the-integers
  - def-algebraic-stack-and-inertia
  - def-axiom-of-choice
  - lem-general-linear-quotient-stacks-are-algebraic
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Maxim Kontsevich and Yan Soibelman, Cohomological Hall algebra, exponential Hodge structures and motivic Donaldson-Thomas invariants, §2.1–2.2"
      url: "https://arxiv.org/pdf/1006.2706v2"
    - title: "Dominic Joyce, Cohomological Hall Algebras, Week 2 notes, Geometry Advanced Class Trinity Term 2026, §§1–2"
      url: "https://people.maths.ox.ac.uk/joyce/AdvancedClassTT26/Week2.pdf"
---

## Definition

Let $Q=(Q_0,Q_1,s,t)$ be a finite quiver, in the convention of
[[def-path-ring-of-a-finite-quiver-over-the-integers]], and work over
$\mathbb C$. A **dimension vector** is a function
$\mathbf d:Q_0\to\mathbb Z_{\ge0}$. Put
$
V_i^{\mathbf d}=\mathbb C^{d_i},\qquad
\operatorname{Rep}_Q(\mathbf d)=
\bigoplus_{h:i\to j}\operatorname{Hom}_{\mathbb C}
(V_i^{\mathbf d},V_j^{\mathbf d}),\qquad
G_{\mathbf d}=\prod_{i\in Q_0}\operatorname{GL}(V_i^{\mathbf d}).
$
The group acts by change of basis:
$(g\cdot X)_h=g_jX_hg_i^{-1}$. The **representation stack**
$\mathfrak M_{\mathbf d}=[\operatorname{Rep}_Q(\mathbf d)/G_{\mathbf d}]$
is the quotient stack: over a scheme $T$, its objects are left
$G_{\mathbf d}$-torsors $P\to T$ with equivariant maps
$P\to\operatorname{Rep}_Q(\mathbf d)$;
arrows are equivariant isomorphisms commuting with these maps. The
finite-dimensional atlas and the algebraic-stack conditions are verified in
[[lem-general-linear-quotient-stacks-are-algebraic]].

For two dimension vectors $\mathbf a,\mathbf b$, write
$\mathbf d=\mathbf a+\mathbf b$ and choose
$V_i^{\mathbf d}=V_i^{\mathbf a}\oplus V_i^{\mathbf b}$. Let
$\operatorname{Rep}_Q(\mathbf a,\mathbf b)$ be the vector space of
representations preserving $V^{\mathbf a}$. For an arrow $h:i\to j$, its
matrix has the form
$
X_h=
\begin{pmatrix}
X_h^{\mathbf a}&C_h\\
0&X_h^{\mathbf b}
\end{pmatrix},
\qquad C_h\in\operatorname{Hom}(V_i^{\mathbf b},V_j^{\mathbf a}).
$
Let $P_{\mathbf a,\mathbf b}\subseteq G_{\mathbf d}$ be the subgroup preserving
the chosen graded subspaces. Define the **exact-sequence stack**
$
\mathfrak E_{\mathbf a,\mathbf b}
=[\operatorname{Rep}_Q(\mathbf a,\mathbf b)/P_{\mathbf a,\mathbf b}].
$
Its maps are
$
\mathfrak M_{\mathbf a}\times\mathfrak M_{\mathbf b}
\xleftarrow{\ q\ }\mathfrak E_{\mathbf a,\mathbf b}
\xrightarrow{\ p\ }\mathfrak M_{\mathbf d}.
$
The map $q$ sends an exact sequence to its subrepresentation and quotient;
$p$ forgets the subrepresentation. Thus the order convention is
$0\to M_{\mathbf a}\to M_{\mathbf d}\to M_{\mathbf b}\to0$.
The block form shows that the off-diagonal extension parameters are the
coordinates $C_h$; it does not assert that extension classes are a vector
space after quotienting by automorphisms.

```tikzcd
\begin{tikzcd}[font=\Large, column sep=large]
\mathfrak M_{\mathbf a}\times\mathfrak M_{\mathbf b}
& \mathfrak E_{\mathbf a,\mathbf b}
  \arrow[l,"q"'] \arrow[r,"p"]
& \mathfrak M_{\mathbf a+\mathbf b}
\end{tikzcd}
```

The diagram records only the two maps just defined; it supplies no equality of
maps or algebraic operation by itself.

## Remarks

The **untwisted** terminology below refers to the absence of Euler-form signs,
automorphism denominators, and Tate twists in the product convention. The
complex orientation in equivariant Borel–Moore homology remains part of the
cohomology theory.
